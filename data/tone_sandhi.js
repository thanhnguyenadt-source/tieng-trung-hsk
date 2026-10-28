/* tone_sandhi.js — biến điệu tính BẰNG QUY TẮC (không sinh bằng AI), chỉ để hiển thị gợi ý màu; pinyin trong dữ liệu vẫn ghi thanh gốc theo chuẩn.
   Quy tắc: (1) 3+3 → 2+3 (cả chuỗi thanh 3 liên tiếp, trừ âm cuối chuỗi); (2) 不 bù trước thanh 4 → bú; (3) 一 yī trước thanh 4 (và thanh nhẹ) → yí, trước thanh 1/2/3 → yì;
   không áp dụng 一 khi là số đếm/thứ tự/ngày tháng (đứng sau 第 十 百…, trước 月 号 日 hoặc chữ số). Nguồn: zh/data/tone_sandhi.js; test: node zh/tools/test_sandhi.js.
   API: window.ZH_SANDHI = { split(py) → [{s,e,t}], analyze(han, py) → null | {syl:[{han,from,to,tone}], changes:[…]}, html(han, py, esc) → chuỗi HTML, reading(han, py) → pinyin đọc thực tế } */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.ZH_SANDHI = api;
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';
  var MARKS = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ' };
  var TONE_OF = {}, BASE_OF = {};
  Object.keys(MARKS).forEach(function (b) { MARKS[b].split('').forEach(function (c, i) { TONE_OF[c] = i + 1; BASE_OF[c] = b; }); });
  var V = 'aeiouüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ';
  var SYL = new RegExp('[^' + V + '\\s\'’\\-.,!?…·，。！？、；：（）()]*[' + V + ']+(?:ng|n|r)?(?![' + V + '])', 'giu');
  var NUMCH = '一二三四五六七八九十百千万零〇两';

  function toneOfSyl(t) { for (var i = 0; i < t.length; i++) { var c = t[i].toLowerCase(); if (TONE_OF[c]) return TONE_OF[c]; } return 0; }
  function retone(t, tone) {
    var out = '';
    for (var i = 0; i < t.length; i++) { var c = t[i], lc = c.toLowerCase(); if (TONE_OF[lc]) { var n = MARKS[BASE_OF[lc]][tone - 1]; out += c === lc ? n : n.toUpperCase(); } else out += c; }
    return out;
  }
  function split(py) {
    var out = [], m; SYL.lastIndex = 0; py = String(py || '');
    while ((m = SYL.exec(py)) !== null) { out.push({ s: m.index, e: m.index + m[0].length, t: m[0], tone: toneOfSyl(m[0]) }); if (m[0].length === 0) SYL.lastIndex++; }
    return out;
  }
  function isHan(c) { return /[㐀-鿿]/.test(c); }

  /* trả null nếu số âm tiết ≠ số chữ Hán (ví dụ nhi hóa 画儿) — khi đó không gợi ý gì (an toàn) */
  function analyze(han, py) {
    var chars = String(han || '').split('').filter(isHan), spans = split(py);
    if (!chars.length || chars.length !== spans.length) return null;
    // chia đoạn theo dấu câu/khoảng ngắt của câu Hán (chỉ nối các chữ Hán liền nhau trong chuỗi gốc)
    var seg = [], cur = [], hi = 0;
    String(han).split('').forEach(function (c) { if (isHan(c)) { cur.push(hi++); } else if (cur.length) { seg.push(cur); cur = []; } });
    if (cur.length) seg.push(cur);
    var to = spans.map(function (x) { return x.tone; }), changes = [];
    seg.forEach(function (idxs) {
      for (var k = 0; k < idxs.length; k++) {
        var i = idxs[k], c = chars[i], nxt = k + 1 < idxs.length ? idxs[k + 1] : -1, prev = k > 0 ? chars[idxs[k - 1]] : '';
        if (c === '不' && spans[i].tone === 4 && nxt >= 0 && spans[nxt].tone === 4) { to[i] = 2; changes.push({ i: i, rule: 'bu' }); }
        else if (c === '一' && spans[i].tone === 1 && nxt >= 0) {
          var nc = chars[nxt];
          if ((prev && NUMCH.indexOf(prev) >= 0) || prev === '第' || NUMCH.indexOf(nc) >= 0 || '月号日号'.indexOf(nc) >= 0) continue;
          var nt = spans[nxt].tone; to[i] = nt === 4 || nt === 0 ? 2 : 4; changes.push({ i: i, rule: 'yi' });
        }
      }
      for (var a = 0; a < idxs.length; a++) {           // 3+3 → 2+3: mỗi âm thanh 3 đứng trước một âm thanh 3 (theo thanh gốc) đổi thành thanh 2
        var i2 = idxs[a], n2 = a + 1 < idxs.length ? idxs[a + 1] : -1;
        if (spans[i2].tone === 3 && n2 >= 0 && spans[n2].tone === 3) { to[i2] = 2; changes.push({ i: i2, rule: 'san' }); }
      }
    });
    return { chars: chars, spans: spans, to: to, changes: changes };
  }
  function reading(han, py) {
    var a = analyze(han, py); if (!a || !a.changes.length) return String(py || '');
    var out = '', last = 0; a.spans.forEach(function (sp, i) { out += py.slice(last, sp.s) + (a.to[i] !== sp.tone ? retone(sp.t, a.to[i]) : sp.t); last = sp.e; });
    return out + py.slice(last);
  }
  var RULE_VI = { bu: '不 trước thanh 4 đọc là bú', yi: '一 trước chữ có thanh đọc là yí/yì', san: 'hai thanh 3 liền nhau: âm đầu đọc thành thanh 2' };
  function html(han, py, esc) {
    esc = esc || function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var a = analyze(han, py); if (!a || !a.changes.length) return esc(py);
    var rule = {}; a.changes.forEach(function (c) { rule[c.i] = c.rule; });
    var out = '', last = 0;
    a.spans.forEach(function (sp, i) {
      out += esc(py.slice(last, sp.s));
      if (rule[i]) { var rd = retone(sp.t, a.to[i]); out += '<span class="sdh" title="' + esc(RULE_VI[rule[i]] + ': ' + sp.t + ' → ' + rd) + '" data-from="' + esc(sp.t) + '" data-to="' + esc(rd) + '">' + esc(sp.t) + '</span>'; }
      else out += esc(sp.t);
      last = sp.e;
    });
    return out + esc(py.slice(last));
  }
  /* html từng âm tiết (khớp từng chữ Hán) để ghép lại theo khối từ; null nếu không khớp */
  function sylHtml(han, py, esc) {
    esc = esc || function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var a = analyze(han, py); if (!a) return null;
    var rule = {}; a.changes.forEach(function (c) { rule[c.i] = c.rule; });
    return a.spans.map(function (sp, i) {
      if (!rule[i]) return esc(sp.t);
      var rd = retone(sp.t, a.to[i]); return '<span class="sdh" title="' + esc(RULE_VI[rule[i]] + ': ' + sp.t + ' → ' + rd) + '" data-from="' + esc(sp.t) + '" data-to="' + esc(rd) + '">' + esc(sp.t) + '</span>';
    });
  }
  return { split: split, analyze: analyze, reading: reading, html: html, sylHtml: sylHtml, retone: retone };
});
