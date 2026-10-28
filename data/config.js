/* Cấu hình khóa tiếng Trung. REPORT_FORM_URL: dán địa chỉ Google Form (đuôi /viewform) khi đã tạo; để trống thì nút "Báo lỗi" chỉ sao chép nội dung. */
window.APP_CONFIG = {
  course: 'zh',
  name: 'Tiếng Trung HSK',
  prefix: 'zh_',
  /* mã QR: đường dẫn các cài đặt (trong kho tiến độ, mục settings) được mang theo cùng vị trí bài */
  SETTING_KEYS: ['showPy', 'showHv', 'displayMode', 'anki.limit', 'anki.types', 'anki.rate'],
  /* AUDIO: đặt true sau khi đã render âm thanh sprite (docs/upgrade/AUDIO_RUNBOOK.md) và chép thư mục audio/ lên cùng chỗ với index.html */
  /* PUBLIC_URL: địa chỉ công khai in ở chân thẻ ảnh thành tích (để trống thì dùng địa chỉ trang khi chạy qua https) */
  PUBLIC_URL: 'https://thanhnguyenadt-source.github.io/tieng-trung-hsk/',
  AUDIO: false,
  REPORT_FORM_URL: '',
  /* tên trường của Google Form (dạng entry.123456789): khóa, mã bài, mã mục, nội dung câu, trình duyệt, ghi chú của người dùng, tóm tắt ẩn danh */
  REPORT_FIELDS: { course: "", lesson: "", item: "", text: "", browser: "", note: "", summary: "" }
};
