/* Cấu hình khóa tiếng Trung. REPORT_FORM_URL: dán địa chỉ Google Form (đuôi /viewform) khi đã tạo; để trống thì nút "Báo lỗi" chỉ sao chép nội dung. */
window.APP_CONFIG = {
  course: 'zh',
  name: 'Tiếng Trung HSK',
  prefix: 'zh_',
  /* sao lưu: các khóa localStorage thuộc khóa học (tiền tố) và khóa cài đặt đưa vào mã QR */
  BACKUP_PREFIXES: ['zh_'],
  SETTING_KEYS: ['zh_showPy', 'zh_showHv', 'zh_displayMode', 'zh_anki_newlimit', 'zh_anki_types', 'zh_anki_rate'],
  /* AUDIO: đặt true sau khi đã render âm thanh sprite (docs/upgrade/AUDIO_RUNBOOK.md) và chép thư mục audio/ lên cùng chỗ với index.html */
  AUDIO: false,
  REPORT_FORM_URL: '',
  /* tên trường của Google Form (dạng entry.123456789): khóa, mã bài, mã mục, nội dung câu, trình duyệt, ghi chú của người dùng, tóm tắt ẩn danh */
  REPORT_FIELDS: { course: "", lesson: "", item: "", text: "", browser: "", note: "", summary: "" }
};
