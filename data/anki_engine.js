/* Anki từ vựng lũy kế (SM-2 rút gọn) cho khóa tiếng Trung HSK 1–5.
   Nạp bằng <script src="data/anki_words.js"> rồi <script src="data/anki_engine.js"> trong index.html (không fetch, chạy được ở file://).
   Khóa localStorage: zh_anki_cards, zh_anki_cursor, zh_anki_opened, zh_anki_daily, zh_anki_newlimit, zh_anki_mode.
   Toàn bộ dữ liệu ở trong trình duyệt; xuất/nhập JSON chỉ qua tải file và chọn file, không gửi đi đâu. */
(function (root) {
  'use strict';
  var DAY = 86400000, MIN5 = 5 * 60000;
  var KEY = { cards: 'zh_anki_cards', cursor: 'zh_anki_cursor', opened: 'zh_anki_opened', daily: 'zh_anki_daily', limit: 'zh_anki_newlimit', mode: 'zh_anki_mode' };

  /* ---------- lưu trữ an toàn ---------- */
  var mem = {};
  function lsGet(k, d) { try { var v = root.localStorage.getItem(k); return v === null ? d : v; } catch (e) { return k in mem ? mem[k] : d; } }
  function lsSet(k, v) { try { root.localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
  function jget(k, d) { try { var v = JSON.parse(lsGet(k, 'null')); return v === null || v === undefined ? d : v; } catch (e) { return d; } }
  function jset(k, v) { lsSet(k, JSON.stringify(v)); }

  /* ---------- thuật toán SM-2 rút gọn (hàm thuần, kiểm bằng tools/test_anki_sm2.js) ---------- */
  function newCard() { return { status: 'new', interval: 0, ease: 2.5, due: 0, reps: 0, lapses: 0 }; }
  function round1(x) { return Math.round(x * 100) / 100; }
  function sm2(card, grade, now) {
    var c = {}, k, base = newCard();
    for (k in base) c[k] = card && card[k] !== undefined ? card[k] : base[k];
    now = now === undefined ? Date.now() : now;
    var iv = c.interval, ease = c.ease;
    if (grade === 1) {                                   // Quên
      c.interval = 0; c.ease = round1(Math.max(1.3, ease - 0.2)); c.due = now + MIN5; c.status = 'learning'; c.reps = 0; c.lapses += 1;
    } else if (grade === 2) {                            // Khó
      c.interval = Math.max(1, Math.round(iv * 1.2)); c.ease = round1(Math.max(1.3, ease - 0.15)); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1;
    } else if (grade === 3) {                            // Tốt
      c.interval = iv === 0 ? 1 : (iv === 1 ? 3 : Math.round(iv * ease)); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1;
    } else if (grade === 4) {                            // Dễ
      c.interval = iv === 0 ? 4 : Math.round(iv * ease * 1.3); c.ease = round1(ease + 0.15); c.due = now + c.interval * DAY; c.status = 'review'; c.reps += 1;
    } else throw new Error('grade phải là 1..4');
    return c;
  }
  function intervalLabel(card, grade) {
    var c = sm2(card, grade, 0);
    if (c.interval === 0) return '5 phút';
    return c.interval + ' ngày';
  }

  /* ---------- dữ liệu từ ---------- */
  var DATA = root.ZH_ANKI_WORDS || { lessons: [], words: [] };
  var LESSON_ORDER = {};
  (DATA.lessons || []).forEach(function (l, i) { LESSON_ORDER[l.id] = i; });
  var WORD_BY_ID = {};
  (DATA.words || []).forEach(function (w) { WORD_BY_ID[w.id] = w; });
  var FF = function () { return root.ZH_FALSE_FRIENDS || {}; };

  /* ---------- trạng thái ---------- */
  var cards = jget(KEY.cards, {});
  if (!cards || typeof cards !== 'object' || Array.isArray(cards)) cards = {};
  var opened = jget(KEY.opened, []);
  if (!Array.isArray(opened)) opened = [];
  var limit = parseInt(lsGet(KEY.limit, '20'), 10); if (!(limit >= 0 && limit <= 500)) limit = 20;

  function save() { jset(KEY.cards, cards); }
  function highestOpened() {
    var best = -1, id = null;
    opened.forEach(function (x) { if (LESSON_ORDER[x] !== undefined && LESSON_ORDER[x] > best) { best = LESSON_ORDER[x]; id = x; } });
    return id;
  }
  function cursorId() {
    var c = lsGet(KEY.cursor, 'auto');
    if (c !== 'auto' && LESSON_ORDER[c] !== undefined) return c;
    return highestOpened() || (DATA.lessons[0] && DATA.lessons[0].id) || null;
  }
  function cursorIndex() { var id = cursorId(); return id === null ? -1 : LESSON_ORDER[id]; }
  function markOpened(id) {
    if (LESSON_ORDER[id] === undefined) return;
    if (opened.indexOf(id) < 0) { opened.push(id); jset(KEY.opened, opened); }
    refreshPanel();
  }
  function wordsUpTo(idx) {
    return (DATA.words || []).filter(function (w) { return LESSON_ORDER[w.lesson] <= idx; });
  }
  function counts(now) {
    now = now === undefined ? Date.now() : now;
    var idx = cursorIndex(), n = 0, due = 0, known = 0;
    wordsUpTo(idx).forEach(function (w) {
      var c = cards[w.id];
      if (!c || c.status === 'new') n++;
      else {
        if (c.due <= now) due++;
        if (c.status === 'review' && c.due > now) known++;
      }
    });
    return { new: n, due: due, known: known, total: wordsUpTo(idx).length };
  }
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function introducedToday() { var d = jget(KEY.daily, {}); return d && d.date === today() ? (d.n || 0) : 0; }
  function addIntroduced(k) { jset(KEY.daily, { date: today(), n: introducedToday() + k }); }

  function buildQueue(now) {
    now = now === undefined ? Date.now() : now;
    var idx = cursorIndex(), ws = wordsUpTo(idx), dueList = [], fresh = [];
    ws.forEach(function (w) {
      var c = cards[w.id];
      if (!c || c.status === 'new') fresh.push(w.id);
      else if (c.due <= now) dueList.push(w.id);
    });
    dueList.sort(function (a, b) { return cards[a].due - cards[b].due; });
    var room = Math.max(0, limit - introducedToday());
    return dueList.concat(fresh.slice(0, room));
  }

  /* ---------- tiện ích hiển thị ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function plainPy(s) {
    return String(s || '').replace(/[üǖǘǚǜÜ]/g, 'v').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[0-9\s'’·\-]/g, '').toLowerCase().replace(/u:/g, 'v');
  }
  function rngSeed(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function seeded(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(arr, rnd) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function markWord(sentence, w) {
    var forms = (w.forms && w.forms.length ? w.forms : [w.han]);
    for (var i = 0; i < forms.length; i++) {
      var k = sentence.indexOf(forms[i]);
      if (k >= 0) return esc(sentence.slice(0, k)) + '<mark>' + esc(forms[i]) + '</mark>' + esc(sentence.slice(k + forms[i].length));
    }
    return esc(sentence);
  }
  function speak(t) { try { if (typeof root.speakText === 'function') root.speakText(t); else if (root.speechSynthesis) { var u = new SpeechSynthesisUtterance(t); u.lang = 'zh-CN'; root.speechSynthesis.speak(u); } } catch (e) {} }
  function meaningOptions(w) {
    var rnd = seeded(rngSeed(w.id));
    var pool = (DATA.words || []).filter(function (x) { return x.id !== w.id && x.vi && x.vi !== w.vi && x.level <= w.level && x.pos === w.pos; });
    if (pool.length < 3) pool = (DATA.words || []).filter(function (x) { return x.id !== w.id && x.vi && x.vi !== w.vi; });
    var wrong = shuffle(pool, rnd).slice(0, 3).map(function (x) { return x.vi; });
    return shuffle([w.vi].concat(wrong), rnd);
  }

  /* ---------- giao diện: bảng bên trái ---------- */
  var CSS = '.anki-panel{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px;margin:10px 0;color:#e2e8f0}' +
    '.anki-panel h4{margin:0 0 8px;font-size:12px;letter-spacing:.04em;color:#fde68a}' +
    '.anki-nums{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center}' +
    '.anki-nums div{border-radius:10px;padding:6px 2px;font-size:10px;line-height:1.25}.anki-nums b{display:block;font-size:20px}' +
    '.anki-n{background:#1d4ed8}.anki-d{background:#b91c1c}.anki-k{background:#15803d}' +
    '.anki-panel select{width:100%;margin:8px 0 4px;padding:6px;border-radius:8px;border:0;font-size:12px}' +
    '.anki-panel label{font-size:11px;color:#cbd5e1}' +
    '.anki-go{width:100%;margin-top:8px;padding:9px;border:0;border-radius:10px;background:#f59e0b;color:#1f2937;font-weight:800;cursor:pointer;font-size:13px}' +
    '.anki-go:disabled{opacity:.5;cursor:default}' +
    '.anki-small{margin-top:6px;font-size:10px;color:#94a3b8}' +
    '.anki-back{position:fixed;inset:0;background:rgba(15,23,42,.72);display:none;align-items:flex-start;justify-content:center;z-index:9999;overflow:auto;padding:16px}' +
    '.anki-back.open{display:flex}' +
    '.anki-card{background:#fff;color:#0f172a;border-radius:20px;max-width:640px;width:100%;margin:auto;padding:18px 20px;box-shadow:0 20px 60px rgba(0,0,0,.4);font-family:inherit}' +
    '.anki-top{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px;color:#475569}' +
    '.anki-top button{border:0;background:#e2e8f0;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:12px}' +
    '.anki-han{font-size:64px;font-weight:800;text-align:center;margin:10px 0 4px;line-height:1.1;color:#1e3a8a}' +
    '.anki-ex{background:#f1f5f9;border-radius:12px;padding:10px 12px;margin:8px 0;font-size:20px;text-align:center}' +
    '.anki-ex mark{background:#fde68a;border-radius:4px;padding:0 2px}' +
    '.anki-ex small{display:block;font-size:13px;color:#475569;margin-top:4px}' +
    '.anki-in{display:flex;gap:8px;margin:10px 0}.anki-in input{flex:1;padding:10px;border-radius:10px;border:2px solid #cbd5e1;font-size:18px}' +
    '.anki-in button,.anki-btn{border:0;border-radius:10px;padding:10px 14px;cursor:pointer;font-weight:700;background:#2563eb;color:#fff}' +
    '.anki-opts{display:grid;gap:8px;margin:10px 0}.anki-opts button{border:2px solid #cbd5e1;background:#fff;border-radius:10px;padding:10px;text-align:left;font-size:15px;cursor:pointer}' +
    '.anki-opts button.ok{border-color:#16a34a;background:#dcfce7}.anki-opts button.bad{border-color:#dc2626;background:#fee2e2}' +
    '.anki-back-face .py{font-size:26px;text-align:center;color:#1d4ed8;font-weight:700}' +
    '.anki-back-face .hv{font-size:20px;text-align:center;margin:4px 0}.anki-back-face .hv b{color:#b45309}' +
    '.anki-back-face .vi{font-size:20px;text-align:center;font-weight:700;margin:6px 0}' +
    '.anki-ff{background:#fef3c7;border:2px solid #f59e0b;border-radius:12px;padding:8px 12px;margin:10px 0;font-size:14px}' +
    '.anki-grades{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}' +
    '.anki-grades button{border:0;border-radius:10px;padding:10px 4px;font-weight:800;cursor:pointer;color:#fff;font-size:13px;line-height:1.3}' +
    '.anki-grades button small{display:block;font-weight:500;font-size:11px;opacity:.9}.anki-grades button:disabled{opacity:.35;cursor:not-allowed}' +
    '.g1{background:#dc2626}.g2{background:#f97316}.g3{background:#16a34a}.g4{background:#2563eb}' +
    '.anki-msg{min-height:20px;font-size:13px;margin:6px 0;text-align:center}' +
    '.anki-tools{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;font-size:12px}.anki-tools button,.anki-tools label.btn{background:#e2e8f0;border:0;border-radius:8px;padding:6px 10px;cursor:pointer}' +
    '@media(max-width:560px){.anki-han{font-size:48px}.anki-card{padding:14px}}';

  var panelEl = null, modalEl = null, session = null;

  function injectCSS() {
    if (document.getElementById('ankiCss')) return;
    var st = document.createElement('style'); st.id = 'ankiCss'; st.textContent = CSS; document.head.appendChild(st);
  }
  function lessonLabel(l) { return l.id + ' · ' + (l.name || '').replace(/^Bài [0-9.A-Z]+:\s*/, ''); }
  function buildPanel() {
    injectCSS();
    var sb = document.querySelector('.left-sidebar');
    if (!sb || document.getElementById('ankiPanel')) return;
    panelEl = document.createElement('div');
    panelEl.className = 'anki-panel'; panelEl.id = 'ankiPanel';
    panelEl.innerHTML = '<h4>🗂️ ANKI TỪ VỰNG LŨY KẾ</h4>' +
      '<div class="anki-nums"><div class="anki-n"><b id="ankiNew">0</b>🟦 Từ mới</div><div class="anki-d"><b id="ankiDue">0</b>🟥 Đến hạn</div><div class="anki-k"><b id="ankiKnown">0</b>🟩 Đã nhớ</div></div>' +
      '<label for="ankiCursor">📍 Mở từ vựng đến bài:</label><select id="ankiCursor" aria-label="Mở từ vựng đến bài"></select>' +
      '<button class="anki-go" id="ankiGo" type="button">🚀 Vào Ôn Anki Hôm Nay</button>' +
      '<div class="anki-small" id="ankiInfo"></div>';
    var anchor = sb.querySelector('.speed-row');
    if (anchor) sb.insertBefore(panelEl, anchor); else sb.appendChild(panelEl);
    var sel = panelEl.querySelector('#ankiCursor');
    sel.addEventListener('change', function () { lsSet(KEY.cursor, sel.value); refreshPanel(); });
    panelEl.querySelector('#ankiGo').addEventListener('click', openSession);
    refreshPanel();
  }
  function refreshPanel() {
    if (!panelEl) return;
    var c = counts(), sel = panelEl.querySelector('#ankiCursor');
    panelEl.querySelector('#ankiNew').textContent = c.new;
    panelEl.querySelector('#ankiDue').textContent = c.due;
    panelEl.querySelector('#ankiKnown').textContent = c.known;
    var cur = lsGet(KEY.cursor, 'auto');
    if (sel.options.length !== (DATA.lessons || []).length + 1) {
      sel.innerHTML = '<option value="auto">Tự động: bài cao nhất đã mở</option>' + (DATA.lessons || []).map(function (l) { return '<option value="' + esc(l.id) + '">' + esc(lessonLabel(l)) + '</option>'; }).join('');
    }
    sel.value = LESSON_ORDER[cur] !== undefined ? cur : 'auto';
    var id = cursorId();
    panelEl.querySelector('#ankiInfo').textContent = 'Tới bài ' + (id || '—') + ': ' + c.total + ' từ. Từ mới tối đa ' + limit + '/ngày (còn ' + Math.max(0, limit - introducedToday()) + ' hôm nay).';
    panelEl.querySelector('#ankiGo').disabled = !(DATA.words || []).length;
  }

  /* ---------- màn hình ôn ---------- */
  function ensureModal() {
    if (modalEl) return;
    modalEl = document.createElement('div');
    modalEl.className = 'anki-back'; modalEl.id = 'ankiModal';
    modalEl.setAttribute('role', 'dialog'); modalEl.setAttribute('aria-modal', 'true'); modalEl.setAttribute('aria-label', 'Ôn từ vựng Anki');
    modalEl.addEventListener('click', function (e) { if (e.target === modalEl) closeSession(); });
    document.body.appendChild(modalEl);
    document.addEventListener('keydown', onKey);
  }
  function openSession() {
    ensureModal();
    session = { queue: buildQueue(), pos: 0, face: 'front', mode: lsGet(KEY.mode, 'pinyin'), forced: false, checked: null, done: 0, again: 0 };
    modalEl.classList.add('open');
    render();
  }
  function closeSession() { if (modalEl) modalEl.classList.remove('open'); session = null; refreshPanel(); }
  function current() { return session && session.queue[session.pos] ? WORD_BY_ID[session.queue[session.pos]] : null; }

  function render() {
    if (!session) return;
    var w = current(), h = '';
    var left = session.queue.length - session.pos;
    h += '<div class="anki-card"><div class="anki-top"><span>Còn <b>' + left + '</b> thẻ · đã ôn ' + session.done + '</span><span><button type="button" id="ankiModeBtn">' + (session.mode === 'pinyin' ? '🔤 Gõ pinyin' : '🔁 Chọn nghĩa') + '</button> <button type="button" id="ankiClose">✕ Đóng</button></span></div>';
    if (!w) {
      var c = counts();
      h += '<h2 style="text-align:center;margin:30px 0 6px">🎉 Hết thẻ hôm nay</h2><p style="text-align:center;color:#475569">Đã ôn ' + session.done + ' thẻ (quên ' + session.again + ' lần). Từ mới còn: ' + c.new + ' · đến hạn: ' + c.due + ' · đã nhớ: ' + c.known + '.</p>' + toolsHtml() + '</div>';
      modalEl.innerHTML = h; bindCommon(); return;
    }
    h += '<div class="anki-han" lang="zh-CN">' + esc(w.han) + '</div>';
    var ex = w.ex || null;
    if (ex) h += '<div class="anki-ex" lang="zh-CN">' + markWord(ex.han, w) + (session.face === 'back' ? '<small>' + esc(ex.py) + '</small><small>' + esc(ex.vi) + '</small>' : '') + '</div>';
    if (session.face === 'front') {
      if (session.mode === 'pinyin') {
        h += '<div class="anki-in"><input id="ankiTyped" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ pinyin (không dấu hoặc có số thanh), rồi Enter" aria-label="Gõ pinyin"><button type="button" id="ankiCheck">Kiểm</button></div>';
      } else {
        h += '<div class="anki-opts" id="ankiOpts">' + meaningOptions(w).map(function (o, i) { return '<button type="button" data-v="' + esc(o) + '">' + (i + 1) + '. ' + esc(o) + '</button>'; }).join('') + '</div>';
      }
      h += '<div class="anki-msg" id="ankiMsg"></div><div style="text-align:center"><button class="anki-btn" type="button" id="ankiShow">👁️ Xem mặt sau (Space)</button> <button class="anki-btn" type="button" id="ankiHear" style="background:#475569">🔊 Nghe</button></div></div>';
    } else {
      h += '<div class="anki-back-face"><div class="py">' + esc(w.py) + '</div><div class="hv">Hán Việt: <b>' + esc((w.hv || '').replace(/_/g, '·')) + '</b></div><div class="vi">' + esc(w.vi) + '</div></div>';
      var ff = FF()[w.han];
      if (ff) h += '<div class="anki-ff">⚠️ <b>Bẫy Hán Việt:</b> nghe như «' + esc(ff.hvGuess) + '» (' + esc(ff.trap) + ') nhưng nghĩa là «' + esc(ff.trueVi) + '». ' + esc(ff.note || '') + '</div>';
      var c0 = cards[w.id] || newCard();
      var f = session.forced;
      h += '<div class="anki-msg" id="ankiMsg">' + (f ? '❌ Kiểm chứng chưa đúng: chỉ được chọn 1 hoặc 2.' : '') + '</div>';
      h += '<div class="anki-grades">' + [1, 2, 3, 4].map(function (g) {
        var names = { 1: 'Quên', 2: 'Khó', 3: 'Tốt', 4: 'Dễ' };
        return '<button type="button" class="g' + g + '" data-g="' + g + '"' + (f && g > 2 ? ' disabled' : '') + '>[' + g + '] ' + names[g] + '<small>' + intervalLabel(c0, g) + '</small></button>';
      }).join('') + '</div></div>';
    }
    modalEl.innerHTML = h;
    bindCommon();
    var inp = modalEl.querySelector('#ankiTyped'); if (inp) inp.focus();
    if (session.face === 'back') speak(w.han);
  }
  function toolsHtml() {
    return '<div class="anki-tools"><button type="button" id="ankiExport">⬇️ Xuất JSON tiến độ</button><label class="btn">⬆️ Nhập JSON<input type="file" id="ankiImport" accept="application/json,.json" style="display:none"></label>' +
      '<label>Từ mới tối đa/ngày <input type="number" id="ankiLimit" min="0" max="500" value="' + limit + '" style="width:64px"></label></div><div class="anki-msg" id="ankiIOMsg"></div>';
  }
  function bindCommon() {
    var $ = function (s) { return modalEl.querySelector(s); };
    var b;
    if ((b = $('#ankiClose'))) b.onclick = closeSession;
    if ((b = $('#ankiModeBtn'))) b.onclick = function () { session.mode = session.mode === 'pinyin' ? 'meaning' : 'pinyin'; lsSet(KEY.mode, session.mode); render(); };
    if ((b = $('#ankiShow'))) b.onclick = function () { reveal(null); };
    if ((b = $('#ankiHear'))) b.onclick = function () { var w = current(); if (w) speak(w.han); };
    if ((b = $('#ankiCheck'))) b.onclick = checkTyped;
    if ((b = $('#ankiTyped'))) b.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); checkTyped(); } };
    modalEl.querySelectorAll('#ankiOpts button').forEach(function (btn) { btn.onclick = function () { chooseMeaning(btn); }; });
    modalEl.querySelectorAll('.anki-grades button').forEach(function (btn) { btn.onclick = function () { grade(parseInt(btn.getAttribute('data-g'), 10)); }; });
    if ((b = $('#ankiExport'))) b.onclick = exportJSON;
    if ((b = $('#ankiImport'))) b.onchange = function () { importFile(this.files && this.files[0]); this.value = ''; };
    if ((b = $('#ankiLimit'))) b.onchange = function () { var v = parseInt(this.value, 10); if (v >= 0 && v <= 500) { limit = v; lsSet(KEY.limit, String(v)); refreshPanel(); } };
  }
  function reveal(ok) {
    if (!session || session.face === 'back' || !current()) return;
    session.forced = ok === false;
    session.face = 'back';
    render();
  }
  function checkTyped() {
    var w = current(), inp = modalEl.querySelector('#ankiTyped');
    if (!w || !inp || !inp.value.trim()) return;
    var ok = plainPy(inp.value).replace(/v/g, 'u') === plainPy(w.py).replace(/v/g, 'u');   // gõ u hoặc v cho ü đều nhận
    var msg = modalEl.querySelector('#ankiMsg');
    if (msg) msg.textContent = ok ? '✅ Đúng pinyin.' : '❌ Chưa đúng.';
    reveal(ok);
  }
  function chooseMeaning(btn) {
    var w = current(); if (!w) return;
    var ok = btn.getAttribute('data-v') === w.vi;
    btn.classList.add(ok ? 'ok' : 'bad');
    modalEl.querySelectorAll('#ankiOpts button').forEach(function (x) { x.disabled = true; if (x.getAttribute('data-v') === w.vi) x.classList.add('ok'); });
    setTimeout(function () { if (session && current() === w) reveal(ok); }, ok ? 350 : 700);
  }
  function grade(g) {
    var w = current();
    if (!w || !session || session.face !== 'back') return;
    if (session.forced && g > 2) return;
    var wasNew = !cards[w.id] || cards[w.id].status === 'new';
    cards[w.id] = sm2(cards[w.id] || newCard(), g, Date.now());
    save();
    if (wasNew) addIntroduced(1);
    session.done += 1;
    if (g === 1) { session.again += 1; session.queue.splice(Math.min(session.queue.length, session.pos + 5), 0, w.id); }
    session.pos += 1; session.face = 'front'; session.forced = false;
    refreshPanel();
    render();
  }
  function onKey(e) {
    if (!session || !modalEl || !modalEl.classList.contains('open')) return;
    var tag = (e.target && e.target.tagName) || '';
    if (e.key === 'Escape') { closeSession(); return; }
    if (session.face === 'front') {
      if (tag === 'INPUT') {                              // ô gõ trống: Space xem mặt sau; đã gõ chữ thì Space là ký tự bình thường
        if ((e.key === ' ' || e.code === 'Space') && !e.target.value) { e.preventDefault(); reveal(null); }
        return;
      }
      if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); reveal(null); return; }
      if (session.mode === 'meaning' && /^[1-4]$/.test(e.key)) { var bs = modalEl.querySelectorAll('#ankiOpts button'); var bt = bs[parseInt(e.key, 10) - 1]; if (bt && !bt.disabled) { e.preventDefault(); chooseMeaning(bt); } }
    } else if (/^[1-4]$/.test(e.key) && tag !== 'INPUT') { e.preventDefault(); grade(parseInt(e.key, 10)); }   // preventDefault: không để ký tự lọt vào ô gõ của thẻ sau
    else if (e.key === ' ' || e.code === 'Space') e.preventDefault();
  }

  /* ---------- xuất / nhập JSON ---------- */
  function validCard(c) {
    return c && typeof c === 'object' && ['new', 'learning', 'review'].indexOf(c.status) >= 0 && isFinite(c.interval) && c.interval >= 0 && isFinite(c.ease) && c.ease >= 1.3 && c.ease <= 5 &&
      isFinite(c.due) && c.due >= 0 && Number.isInteger(c.reps) && c.reps >= 0 && Number.isInteger(c.lapses) && c.lapses >= 0;
  }
  function parseImport(text) {
    var d;
    try { d = JSON.parse(text); } catch (e) { return { error: 'Không phải JSON hợp lệ.' }; }
    if (!d || d.app !== 'zh-anki' || d.version !== 1 || !d.cards || typeof d.cards !== 'object' || Array.isArray(d.cards)) return { error: 'Sai định dạng (cần app "zh-anki", version 1, có "cards").' };
    var ids = Object.keys(d.cards);
    for (var i = 0; i < ids.length; i++) {
      if (!WORD_BY_ID[ids[i]]) return { error: 'Mã từ lạ: ' + ids[i] + '. Không nhập.' };
      if (!validCard(d.cards[ids[i]])) return { error: 'Thẻ ' + ids[i] + ' có số liệu không hợp lệ. Không nhập.' };
    }
    if (d.opened !== undefined && !Array.isArray(d.opened)) return { error: 'Trường "opened" không hợp lệ.' };
    return { data: d };
  }
  function exportJSON() {
    var d = { app: 'zh-anki', version: 1, exportedAt: new Date().toISOString(), cards: cards, opened: opened, cursor: lsGet(KEY.cursor, 'auto'), limit: limit };
    var blob = new Blob([JSON.stringify(d, null, 1)], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'anki-tieng-trung-' + today() + '.json';
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    var m = modalEl && modalEl.querySelector('#ankiIOMsg'); if (m) m.textContent = '✅ Đã tạo file JSON (' + Object.keys(cards).length + ' thẻ).';
  }
  function importText(text) {
    var r = parseImport(text), m = modalEl && modalEl.querySelector('#ankiIOMsg');
    if (r.error) { if (m) m.textContent = '❌ ' + r.error; return r; }
    var d = r.data, take = 0, keep = 0;
    Object.keys(d.cards).forEach(function (id) {       // gộp: thẻ nhập thắng nếu đã ôn nhiều hơn (reps + lapses), không xóa thẻ hiện có
      var loc = cards[id], inc = d.cards[id];
      if (!loc || inc.reps + inc.lapses > loc.reps + loc.lapses) { cards[id] = inc; take++; } else keep++;
    });
    (d.opened || []).forEach(function (x) { if (LESSON_ORDER[x] !== undefined && opened.indexOf(x) < 0) opened.push(x); });
    save(); jset(KEY.opened, opened);
    refreshPanel();
    if (m) m.textContent = '✅ Đã nhập: lấy ' + take + ' thẻ, giữ ' + keep + ' thẻ hiện có.';
    return { ok: true, take: take, keep: keep };
  }
  function importFile(f) {
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () { importText(String(rd.result)); };
    rd.onerror = function () { var m = modalEl.querySelector('#ankiIOMsg'); if (m) m.textContent = '❌ Không đọc được file.'; };
    rd.readAsText(f);
  }

  /* ---------- khởi động ---------- */
  root.ZH_ANKI = { sm2: sm2, newCard: newCard, markOpened: markOpened, counts: counts, buildQueue: buildQueue, plainPy: plainPy, parseImport: parseImport, importText: importText,
                   _state: function () { return { cards: cards, opened: opened, limit: limit }; }, open: function () { buildPanel(); openSession(); } };
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildPanel); else buildPanel();
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = root.ZH_ANKI;
})(typeof window !== 'undefined' ? window : globalThis);
