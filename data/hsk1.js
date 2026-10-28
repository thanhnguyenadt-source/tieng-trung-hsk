/* HSK %d — khóa tiếng Trung cho người đi làm (chuẩn HSK 3.0). Dữ liệu một cấp, nạp bằng <script src> (file:// được, không fetch).
   Tự sinh bởi zh/tools/assemble.py từ các lô đã qua kiểm (py/hv/traceKey do script điền từ hsk30 + Unihan). Định dạng: zh/docs/SPEC.md mục 4. */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[1] = {
 "label": "HSK 1",
 "modules": [
  {
   "code": "1.1",
   "title": "Chào hỏi và làm quen"
  },
  {
   "code": "1.2",
   "title": "Gia đình và bạn bè"
  },
  {
   "code": "1.3",
   "title": "Lịch sự và học tiếng Trung"
  },
  {
   "code": "1.4",
   "title": "Tiền bạc và mua sắm"
  },
  {
   "code": "1.5",
   "title": "Thời gian và ngày tháng"
  },
  {
   "code": "1.6",
   "title": "Ăn uống"
  },
  {
   "code": "1.7",
   "title": "Đi lại"
  },
  {
   "code": "1.8",
   "title": "Công việc và văn phòng"
  },
  {
   "code": "1.9",
   "title": "Nhà cửa và thiết bị"
  },
  {
   "code": "1.10",
   "title": "Sức khỏe, thời tiết, trường học"
  },
  {
   "code": "1.11",
   "title": "Nơi chốn và phương hướng"
  }
 ],
 "data": {
  "1.1": {
   "lessons": [
    {
     "id": "1.1A",
     "name": "Bài 1.1A: Chào hỏi, nói về mình và người khác",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 是 + 🎓 老师",
       "🙅 他 + ⚡ 不是 + 🎓 学生",
       "❓ 你 + 是 + 学生 + 吗？"
      ],
      "tip": "Câu chữ 是 (shì, thị): A 是 B nghĩa là \"A là B\". Phủ định đặt 不 (bù, bất) trước 是: 不是. Câu hỏi có/không chỉ cần thêm 吗 (ma) ở cuối câu, không đổi trật tự từ. 也 (yě, dã) và 都 (dōu, đô) đứng trước 是.",
      "vn_tip": "Người Việt hay quên 是 hoặc thêm 是 trước tính từ. Đúng: 我很好 (không nói 我是好). Khi hỏi cũng đừng đảo từ: 你是学生吗？ chứ không phải 吗你是学生."
     },
     "chunks": [
      {
       "scene": "🧑👩‍🏫",
       "full": "我是老师",
       "vi": "Tôi là giáo viên",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "lǎoshī",
         "hv": "lão sư"
        }
       ],
       "traceWord": "老师",
       "py": "Wǒ shì lǎoshī",
       "traceKey": "laoshi",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
        {
         "c": "师",
         "py": "shī",
         "hv": "sư"
        }
       ]
      },
      {
       "scene": "🧑😊👍",
       "full": "你很好",
       "vi": "Bạn rất tốt",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "很",
       "py": "Nǐ hěn hǎo",
       "traceKey": "hen",
       "traceInfo": [
        {
         "c": "很",
         "py": "hěn",
         "hv": "ngận"
        }
       ]
      },
      {
       "scene": "👨🙅🎓",
       "full": "他不是学生",
       "vi": "Anh ấy không phải là học sinh",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不是",
         "ico": "🙅",
         "c": "v",
         "py": "bú shì",
         "hv": "bất thị"
        },
        {
         "t": "学生",
         "ico": "🎓",
         "c": "o",
         "py": "xuéshēng",
         "hv": "học sinh"
        }
       ],
       "traceWord": "学生",
       "py": "Tā bú shì xuéshēng",
       "traceKey": "xuesheng",
       "traceInfo": [
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "👩🤝👩‍🏫",
       "full": "她也是老师",
       "vi": "Cô ấy cũng là giáo viên",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "也是",
         "ico": "➕",
         "c": "v",
         "py": "yě shì",
         "hv": "dã thị"
        },
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "lǎoshī",
         "hv": "lão sư"
        }
       ],
       "traceWord": "也",
       "py": "Tā yě shì lǎoshī",
       "traceKey": "ye",
       "traceInfo": [
        {
         "c": "也",
         "py": "yě",
         "hv": "dã"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑🧑‍🤝‍🧑😊",
       "full": "我们都是朋友",
       "vi": "Chúng tôi đều là bạn bè",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "都是",
         "ico": "✅",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "朋友",
         "ico": "🤝",
         "c": "o",
         "py": "péngyou",
         "hv": "bằng hữu"
        }
       ],
       "traceWord": "都",
       "py": "Wǒmen dōu shì péngyou",
       "traceKey": "dou",
       "traceInfo": [
        {
         "c": "都",
         "py": "dōu",
         "hv": "đô"
        }
       ]
      },
      {
       "scene": "👥🎓❓",
       "full": "你们是学生吗",
       "vi": "Các bạn là học sinh à?",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "是学生",
         "ico": "🎓",
         "c": "v",
         "py": "shì xuéshēng",
         "hv": "thị học sinh"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "你们",
       "py": "Nǐmen shì xuéshēng ma",
       "traceKey": "nimen",
       "traceInfo": [
        {
         "c": "你",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "c": "们",
         "py": "men",
         "hv": "môn"
        }
       ]
      },
      {
       "scene": "🙇👩‍🏫❓",
       "full": "您是老师吗",
       "vi": "Ngài là thầy/cô giáo phải không ạ?",
       "parts": [
        {
         "t": "您",
         "ico": "🙇",
         "c": "s",
         "py": "nín",
         "hv": "_"
        },
        {
         "t": "是老师",
         "ico": "👩‍🏫",
         "c": "v",
         "py": "shì lǎoshī",
         "hv": "thị lão sư"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "您",
       "py": "Nín shì lǎoshī ma",
       "traceKey": "nin",
       "traceInfo": [
        {
         "c": "您",
         "py": "nín",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "🧑😊🧑❓",
       "full": "我很好你呢",
       "vi": "Tôi rất khỏe, còn bạn?",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "很好",
         "ico": "😊",
         "c": "v",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        },
        {
         "t": "你呢",
         "ico": "❓",
         "c": "o",
         "py": "nǐ ne",
         "hv": "nễ ni"
        }
       ],
       "traceWord": "呢",
       "py": "Wǒ hěn hǎo nǐ ne",
       "traceKey": "ne",
       "traceInfo": [
        {
         "c": "呢",
         "py": "ne",
         "hv": "ni"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "她们是学生吗？",
       "qvi": "Họ (nữ) là học sinh à?",
       "scene": "👩‍👩‍👧🎓",
       "ans": "她们都是学生",
       "opts": [
        {
         "txt": "我不是老师",
         "ico": "🙅",
         "py": "Wǒ bú shì lǎoshī"
        },
        {
         "txt": "她们都是学生",
         "ico": "🎓",
         "py": "Tāmen dōu shì xuéshēng"
        },
        {
         "txt": "你们是朋友",
         "ico": "🤝",
         "py": "Nǐmen shì péngyou"
        }
       ],
       "qpy": "Tāmen shì xuéshēng ma?"
      },
      {
       "q": "你好吗？",
       "qvi": "Bạn khỏe không?",
       "scene": "🧑😊",
       "ans": "我很好",
       "opts": [
        {
         "txt": "我很好",
         "ico": "😊",
         "py": "Wǒ hěn hǎo"
        },
        {
         "txt": "他们是学生",
         "ico": "🎓",
         "py": "Tāmen shì xuéshēng"
        },
        {
         "txt": "她不是老师",
         "ico": "🙅",
         "py": "Tā bú shì lǎoshī"
        }
       ],
       "qpy": "Nǐ hǎo ma?"
      },
      {
       "q": "他是你朋友吗？",
       "qvi": "Anh ấy là bạn của bạn à?",
       "scene": "👨🤝",
       "ans": "他是我朋友",
       "opts": [
        {
         "txt": "我也很好",
         "ico": "😊",
         "py": "Wǒ yě hěn hǎo"
        },
        {
         "txt": "他是我朋友",
         "ico": "🤝",
         "py": "Tā shì wǒ péngyou"
        },
        {
         "txt": "你们是老师",
         "ico": "👩‍🏫",
         "py": "Nǐmen shì lǎoshī"
        }
       ],
       "qpy": "Tā shì nǐ péngyou ma?"
      },
      {
       "q": "我是学生，你呢？",
       "qvi": "Tôi là học sinh, còn bạn?",
       "scene": "🎓❓",
       "ans": "我也是学生",
       "opts": [
        {
         "txt": "他们很好",
         "ico": "😊",
         "py": "Tāmen hěn hǎo"
        },
        {
         "txt": "她不是老师",
         "ico": "🙅",
         "py": "Tā bú shì lǎoshī"
        },
        {
         "txt": "我也是学生",
         "ico": "🎓",
         "py": "Wǒ yě shì xuéshēng"
        }
       ],
       "qpy": "Wǒ shì xuéshēng nǐ ne?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chào đồng nghiệp mới",
      "steps": [
       "<b>Bước 1:</b> Hôm nay có đồng nghiệp mới. Nói thành tiếng để chào: <i>\"你好，我是…\"</i> rồi hỏi <i>\"你是老师吗？\"</i> thay chữ 老师 bằng nghề của người đó.",
       "<b>Bước 2:</b> Giới thiệu người bên cạnh với đồng nghiệp mới: <i>\"他是我朋友\"</i>, <i>\"我们都是学生\"</i>. Thử cả câu phủ định <i>\"她不是老师\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho một người bạn: <i>\"我很好，你呢？\"</i> Sau đó viết lại 3 câu hỏi dùng 吗 với 您, 你们, 他们 và tự trả lời."
      ]
     }
    },
    {
     "id": "1.1B",
     "name": "Bài 1.1B: Đếm số 0–10, đếm người và vật",
     "grammar": {
      "formulas": [
       "🔢 三 + 🧩 个 + 👥 人",
       "🧑 我 + ⚡ 有 + 🔢 两个 + 🤝 朋友",
       "❓ 你 + 有 + 几个 + 学生？"
      ],
      "tip": "Số từ + 个 (gè, cá) + danh từ: 三个人 (ba người). Số 2 khi đếm vật/người dùng 两 (liǎng, lưỡng): 两个老师, không nói 二个. Hỏi số nhỏ dùng 几 (jǐ, kỷ), hỏi số lượng chưa biết dùng 多少 (duōshao, đa thiểu). 这 (zhè, giá) là \"này\", 那 (nà, na) là \"kia\".",
      "vn_tip": "Người Việt hay đặt danh từ trước số như tiếng Việt (\"người ba\"). Tiếng Trung phải đặt số + 个 trước danh từ: 三个人. Cũng đừng bỏ 个: không nói 我有两朋友."
     },
     "chunks": [
      {
       "scene": "🧑🤝1️⃣",
       "full": "我有一个朋友",
       "vi": "Tôi có một người bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一个朋友",
         "ico": "🤝",
         "c": "o",
         "py": "yī gè péngyou",
         "hv": "nhất cá bằng hữu"
        }
       ],
       "traceWord": "一",
       "py": "Wǒ yǒu yī gè péngyou",
       "traceKey": "yi",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        }
       ]
      },
      {
       "scene": "👆👥3️⃣",
       "full": "这是三个人",
       "vi": "Đây là ba người",
       "parts": [
        {
         "t": "这",
         "ico": "👆",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "三个人",
         "ico": "👥",
         "c": "o",
         "py": "sān gè rén",
         "hv": "tam cá nhân"
        }
       ],
       "traceWord": "这",
       "py": "Zhè shì sān gè rén",
       "traceKey": "zhe",
       "traceInfo": [
        {
         "c": "这",
         "py": "zhè",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "👉🎓5️⃣",
       "full": "这是零",
       "vi": "Đây là số không",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "零",
         "ico": "🎓",
         "c": "o",
         "py": "líng",
         "hv": "linh"
        }
       ],
       "traceWord": "零",
       "py": "Zhè shì líng",
       "traceKey": "ling",
       "traceInfo": [
        {
         "c": "零",
         "py": "líng",
         "hv": "linh"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑👩‍🏫2️⃣",
       "full": "我们有两个老师",
       "vi": "Chúng tôi có hai thầy/cô giáo",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两个老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "liǎng gè lǎoshī",
         "hv": "lưỡng cá lão sư"
        }
       ],
       "traceWord": "两",
       "py": "Wǒmen yǒu liǎng gè lǎoshī",
       "traceKey": "liang",
       "traceInfo": [
        {
         "c": "两",
         "py": "liǎng",
         "hv": "lưỡng"
        }
       ]
      },
      {
       "scene": "🧑🤝❓",
       "full": "你有几个朋友",
       "vi": "Bạn có mấy người bạn?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "几个朋友",
         "ico": "🤝",
         "c": "o",
         "py": "jǐ gè péngyou",
         "hv": "kỷ cá bằng hữu"
        }
       ],
       "traceWord": "几",
       "py": "Nǐ yǒu jǐ gè péngyou",
       "traceKey": "ji",
       "traceInfo": [
        {
         "c": "几",
         "py": "jǐ",
         "hv": "kỷ"
        }
       ]
      },
      {
       "scene": "👩‍👩‍👧🎓7️⃣",
       "full": "她们有七个学生",
       "vi": "Các cô ấy có bảy học sinh",
       "parts": [
        {
         "t": "她们",
         "ico": "👩‍👩‍👧",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "七个学生",
         "ico": "🎓",
         "c": "o",
         "py": "qī gè xuéshēng",
         "hv": "thất cá học sinh"
        }
       ],
       "traceWord": "七",
       "py": "Tāmen yǒu qī gè xuéshēng",
       "traceKey": "qi",
       "traceInfo": [
        {
         "c": "七",
         "py": "qī",
         "hv": "thất"
        }
       ]
      },
      {
       "scene": "👥🎓🔢❓",
       "full": "你们有多少个学生",
       "vi": "Các bạn có bao nhiêu học sinh?",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "多少个学生",
         "ico": "🎓",
         "c": "o",
         "py": "duōshao gè xuéshēng",
         "hv": "đa thiểu cá học sinh"
        }
       ],
       "traceWord": "多少",
       "py": "Nǐmen yǒu duōshao gè xuéshēng",
       "traceKey": "duoshao",
       "traceInfo": [
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        },
        {
         "c": "少",
         "py": "shao",
         "hv": "thiểu"
        }
       ]
      },
      {
       "scene": "👥9️⃣🤝",
       "full": "他们九个人都是朋友",
       "vi": "Chín người bọn họ đều là bạn",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "九个人",
         "ico": "9️⃣",
         "c": "v",
         "py": "jiǔ gè rén",
         "hv": "cửu cá nhân"
        },
        {
         "t": "都是朋友",
         "ico": "🤝",
         "c": "o",
         "py": "dōu shì péngyou",
         "hv": "đô thị bằng hữu"
        }
       ],
       "traceWord": "九",
       "py": "Tāmen jiǔ gè rén dōu shì péngyou",
       "traceKey": "jiu",
       "traceInfo": [
        {
         "c": "九",
         "py": "jiǔ",
         "hv": "cửu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们有几个人？",
       "qvi": "Các bạn có mấy người?",
       "scene": "👥🔢❓",
       "ans": "我们有八个人",
       "opts": [
        {
         "txt": "他有六个朋友",
         "ico": "🤝",
         "py": "Tā yǒu liù gè péngyou"
        },
        {
         "txt": "我们有八个人",
         "ico": "8️⃣",
         "py": "Wǒmen yǒu bā gè rén"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        }
       ],
       "qpy": "Nǐmen yǒu jǐ gè rén?"
      },
      {
       "q": "你有多少个朋友？",
       "qvi": "Bạn có bao nhiêu người bạn?",
       "scene": "🧑🤝🔢",
       "ans": "我有十个朋友",
       "opts": [
        {
         "txt": "我们都很好",
         "ico": "😊",
         "py": "Wǒmen dōu hěn hǎo"
        },
        {
         "txt": "他们是老师",
         "ico": "👩‍🏫",
         "py": "Tāmen shì lǎoshī"
        },
        {
         "txt": "我有十个朋友",
         "ico": "🔟",
         "py": "Wǒ yǒu shí gè péngyou"
        }
       ],
       "qpy": "Nǐ yǒu duōshao gè péngyou?"
      },
      {
       "q": "他有几个学生？",
       "qvi": "Thầy ấy có mấy học sinh?",
       "scene": "👨‍🏫🎓❓",
       "ans": "他有两个学生",
       "opts": [
        {
         "txt": "我们有四个老师",
         "ico": "4️⃣",
         "py": "Wǒmen yǒu sì gè lǎoshī"
        },
        {
         "txt": "你是老师",
         "ico": "👩‍🏫",
         "py": "Nǐ shì lǎoshī"
        },
        {
         "txt": "他有两个学生",
         "ico": "2️⃣",
         "py": "Tā yǒu liǎng gè xuéshēng"
        }
       ],
       "qpy": "Tā yǒu jǐ gè xuéshēng?"
      },
      {
       "q": "那是五个人吗？",
       "qvi": "Kia là năm người à?",
       "scene": "👉👥5️⃣",
       "ans": "那不是五个人",
       "opts": [
        {
         "txt": "他们有十二个人",
         "ico": "🔢",
         "py": "Tāmen yǒu shí èr gè rén"
        },
        {
         "txt": "那不是五个人",
         "ico": "🙅",
         "py": "Nà bú shì wǔ gè rén"
        },
        {
         "txt": "我很好",
         "ico": "😊",
         "py": "Wǒ hěn hǎo"
        }
       ],
       "qpy": "Nà shì wǔ gè rén ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đếm người trong buổi họp",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh phòng làm việc hoặc nhà, đếm thành tiếng từ 一 đến 十, rồi đếm số người: <i>\"这是三个人\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp đặt chỗ họp: hỏi <i>\"你们有几个人？\"</i> và trả lời <i>\"我们有八个人\"</i>. Thay số bằng số người thật của nhóm bạn.",
       "<b>Bước 3:</b> Tự hỏi và trả lời 3 câu về gia đình hoặc đồng nghiệp: <i>\"你有多少个朋友？\"</i>, <i>\"他有几个学生？\"</i>. Nhớ dùng 两 khi nói \"hai người\"."
      ]
     }
    },
    {
     "id": "1.1C",
     "name": "Bài 1.1C: Hỏi tên, nghề nghiệp, làm quen",
     "grammar": {
      "formulas": [
       "❓ 你 + 叫 + 什么名字？",
       "🧑 我 + 叫 + 小明",
       "❓ 他 + 是 + 谁？"
      ],
      "tip": "Hỏi tên: 你叫什么名字？ (jiào, khiếu; míngzi, danh tự). Trong câu hỏi 什么 (shénme, thập ma) và 谁 (shéi, thùy) đứng đúng vị trí của phần được hỏi, không đảo lên đầu câu như tiếng Việt: 他是谁？ (Anh ấy là ai?). 的 (de) nối người sở hữu với danh từ: 我的老师.",
      "vn_tip": "Người Việt hay dịch \"Bạn tên gì?\" thành 你名字什么. Đúng là 你叫什么名字？. Khi giới thiệu tên, thường nói 我叫小明 (nói 我是小明 cũng đúng); không dùng 叫 cho nghề nghiệp."
     },
     "chunks": [
      {
       "scene": "🧑❓📛",
       "full": "你叫什么名字",
       "vi": "Bạn tên là gì?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "叫",
         "ico": "📢",
         "c": "v",
         "py": "jiào",
         "hv": "khiếu"
        },
        {
         "t": "什么名字",
         "ico": "📛",
         "c": "o",
         "py": "shénme míngzi",
         "hv": "thập ma danh tự"
        }
       ],
       "traceWord": "名字",
       "py": "Nǐ jiào shénme míngzi",
       "traceKey": "mingzi",
       "traceInfo": [
        {
         "c": "名",
         "py": "míng",
         "hv": "danh"
        },
        {
         "c": "字",
         "py": "zi",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "🧑📢📛",
       "full": "我叫小明",
       "vi": "Tôi tên là Tiểu Minh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "叫",
         "ico": "📢",
         "c": "v",
         "py": "jiào",
         "hv": "khiếu"
        },
        {
         "t": "小明",
         "ico": "📛",
         "c": "o",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        }
       ],
       "traceWord": "叫",
       "py": "Wǒ jiào Xiǎomíng",
       "traceKey": "jiao",
       "traceInfo": [
        {
         "c": "叫",
         "py": "jiào",
         "hv": "khiếu"
        }
       ]
      },
      {
       "scene": "👨❓",
       "full": "他是谁",
       "vi": "Anh ấy là ai?",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "谁",
         "ico": "❓",
         "c": "o",
         "py": "shéi",
         "hv": "thùy"
        }
       ],
       "traceWord": "谁",
       "py": "Tā shì shéi",
       "traceKey": "shei",
       "traceInfo": [
        {
         "c": "谁",
         "py": "shuí",
         "hv": "thùy"
        }
       ]
      },
      {
       "scene": "👩👩‍🏫🧑",
       "full": "她是我的老师",
       "vi": "Cô ấy là giáo viên của tôi",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "wǒ de lǎoshī",
         "hv": "ngã đích lão sư"
        }
       ],
       "traceWord": "的",
       "py": "Tā shì wǒ de lǎoshī",
       "traceKey": "de",
       "traceInfo": [
        {
         "c": "的",
         "py": "de",
         "hv": "đích"
        }
       ]
      },
      {
       "scene": "🧑😄🤝",
       "full": "我很高兴认识你",
       "vi": "Tôi rất vui được làm quen với bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "很高兴",
         "ico": "😄",
         "c": "v",
         "py": "hěn gāoxìng",
         "hv": "ngận cao hứng"
        },
        {
         "t": "认识你",
         "ico": "🤝",
         "c": "o",
         "py": "rènshi nǐ",
         "hv": "nhận thức nễ"
        }
       ],
       "traceWord": "高兴",
       "py": "Wǒ hěn gāoxìng rènshi nǐ",
       "traceKey": "gaoxing",
       "traceInfo": [
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        },
        {
         "c": "兴",
         "py": "xìng",
         "hv": "hứng"
        }
       ]
      },
      {
       "scene": "🧑👉🤝👨",
       "full": "我介绍你认识王先生",
       "vi": "Tôi giới thiệu bạn làm quen với ông Vương",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "介绍",
         "ico": "👉",
         "c": "v",
         "py": "jièshào",
         "hv": "giới thiệu"
        },
        {
         "t": "你认识王先生",
         "ico": "🤝",
         "c": "o",
         "py": "nǐ rènshi Wángxiānshēng",
         "hv": "nễ nhận thức vương tiên sinh"
        }
       ],
       "traceWord": "介绍",
       "py": "Wǒ jièshào nǐ rènshi Wángxiānshēng",
       "traceKey": "jieshao",
       "traceInfo": [
        {
         "c": "介",
         "py": "jiè",
         "hv": "giới"
        },
        {
         "c": "绍",
         "py": "shào",
         "hv": "thiệu"
        }
       ]
      },
      {
       "scene": "🙇👨❓",
       "full": "请问先生是谁",
       "vi": "Xin hỏi, ngài là ai ạ?",
       "parts": [
        {
         "t": "请问",
         "ico": "🙋",
         "c": "v",
         "py": "qǐngwèn",
         "hv": "thỉnh vấn"
        },
        {
         "t": "先生",
         "ico": "🙇",
         "c": "s",
         "py": "xiānsheng",
         "hv": "tiên sinh"
        },
        {
         "t": "是谁",
         "ico": "❓",
         "c": "o",
         "py": "shì shéi",
         "hv": "thị thùy"
        }
       ],
       "traceWord": "先生",
       "py": "Qǐngwèn xiānsheng shì shéi",
       "traceKey": "xiansheng",
       "traceInfo": [
        {
         "c": "先",
         "py": "xiān",
         "hv": "tiên"
        },
        {
         "c": "生",
         "py": "sheng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "👩🇨🇳👤",
       "full": "小姐是中国人",
       "vi": "Cô gái này là người Trung Quốc",
       "parts": [
        {
         "t": "小姐",
         "ico": "👩",
         "c": "s",
         "py": "xiǎojiě",
         "hv": "tiểu thư"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "中国人",
         "ico": "🇨🇳",
         "c": "o",
         "py": "Zhōngguó rén",
         "hv": "trung quốc nhân"
        }
       ],
       "traceWord": "小姐",
       "py": "Xiǎojiě shì Zhōngguó rén",
       "traceKey": "xiaojie",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "姐",
         "py": "jiě",
         "hv": "thư"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你叫什么名字？",
       "qvi": "Bạn tên là gì?",
       "scene": "🧑❓📛",
       "ans": "我叫小红",
       "opts": [
        {
         "txt": "我叫小红",
         "ico": "📛",
         "py": "Wǒ jiào Xiǎohóng"
        },
        {
         "txt": "我很高兴",
         "ico": "😄",
         "py": "Wǒ hěn gāoxìng"
        },
        {
         "txt": "他们是老师",
         "ico": "👩‍🏫",
         "py": "Tāmen shì lǎoshī"
        }
       ],
       "qpy": "Nǐ jiào shénme míngzi?"
      },
      {
       "q": "他是谁？",
       "qvi": "Anh ấy là ai?",
       "scene": "👨❓",
       "ans": "他是我的朋友",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他们很好",
         "ico": "😊",
         "py": "Tāmen hěn hǎo"
        },
        {
         "txt": "他是我的朋友",
         "ico": "🤝",
         "py": "Tā shì wǒ de péngyou"
        }
       ],
       "qpy": "Tā shì shéi?"
      },
      {
       "q": "你有中国朋友吗？",
       "qvi": "Bạn có bạn người Trung Quốc không?",
       "scene": "🧑🇨🇳🤝",
       "ans": "我有中国朋友",
       "opts": [
        {
         "txt": "他叫小红",
         "ico": "📛",
         "py": "Tā jiào Xiǎohóng"
        },
        {
         "txt": "我有中国朋友",
         "ico": "🇨🇳",
         "py": "Wǒ yǒu Zhōngguó péngyou"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        }
       ],
       "qpy": "Nǐ yǒu Zhōngguó péngyou ma?"
      },
      {
       "q": "您是老师吗？",
       "qvi": "Ngài là giáo viên phải không ạ?",
       "scene": "🙇👩‍🏫❓",
       "ans": "我是学生",
       "opts": [
        {
         "txt": "我很好",
         "ico": "😊",
         "py": "Wǒ hěn hǎo"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他们有三个人",
         "ico": "3️⃣",
         "py": "Tāmen yǒu sān gè rén"
        }
       ],
       "qpy": "Nín shì lǎoshī ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Làm quen tại sự kiện giao lưu",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn gặp một người mới ở buổi giao lưu. Nói thành tiếng: <i>\"请问先生是谁？\"</i>, rồi <i>\"我叫…，我很高兴认识你\"</i> bằng tên thật của bạn.",
       "<b>Bước 2:</b> Giới thiệu hai người với nhau: <i>\"我介绍你认识我的朋友\"</i>. Hỏi <i>\"你叫什么名字？\"</i> và <i>\"他是谁？\"</i> để luyện đủ cả 什么 và 谁.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp: giới thiệu một người bạn người Trung Quốc, ví dụ <i>\"小姐是中国人\"</i>, rồi tự trả lời <i>\"我有中国朋友\"</i> nếu đúng với bạn."
      ]
     }
    }
   ]
  },
  "1.2": {
   "lessons": [
    {
     "id": "1.2A",
     "name": "Bài 1.2A: Gia đình của tôi",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 有 + 👨‍👩‍👧 哥哥",
       "🏠 我家 + ⚡ 有 + 🔢 五口人",
       "❓ 你家 + ⚡ 有 + 🔢 几口人？"
      ],
      "tip": "Câu chữ 有 (yǒu, hữu) nói về sở hữu hoặc số người trong nhà: Chủ ngữ + 有 + Tân ngữ. Khi đếm người trong gia đình dùng lượng từ 口 (kǒu, khẩu): 我家有五口人. Muốn nói \"bố và mẹ\" dùng 和 (hé, hòa): 爸爸和妈妈.",
      "vn_tip": "Người Việt hay thêm \"là\" hoặc bỏ 有, ví dụ nói sai 我家是五口人. Đúng là 我家有五口人. Khi hỏi số người phải dùng 几口人, không dùng 多少个人 trong câu nói về gia đình."
     },
     "chunks": [
      {
       "scene": "🧑👨",
       "full": "我有哥哥",
       "vi": "Tôi có anh trai",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "哥哥",
         "ico": "👨",
         "c": "o",
         "py": "gēge",
         "hv": "ca ca"
        }
       ],
       "traceWord": "哥哥",
       "py": "Wǒ yǒu gēge",
       "traceKey": "gege",
       "traceInfo": [
        {
         "c": "哥",
         "py": "gē",
         "hv": "ca"
        },
        {
         "c": "哥",
         "py": "ge",
         "hv": "ca"
        }
       ]
      },
      {
       "scene": "🧑👦👧",
       "full": "我有弟弟和妹妹",
       "vi": "Tôi có em trai và em gái",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "弟弟和妹妹",
         "ico": "👦",
         "c": "o",
         "py": "dìdi hé mèimei",
         "hv": "đệ đệ hòa muội muội"
        }
       ],
       "traceWord": "妹妹",
       "py": "Wǒ yǒu dìdi hé mèimei",
       "traceKey": "meimei",
       "traceInfo": [
        {
         "c": "妹",
         "py": "mèi",
         "hv": "muội"
        },
        {
         "c": "妹",
         "py": "mei",
         "hv": "muội"
        }
       ]
      },
      {
       "scene": "🏠👨‍👩‍👧‍👦",
       "full": "我家有五口人",
       "vi": "Nhà tôi có năm người",
       "parts": [
        {
         "t": "我家",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ jiā",
         "hv": "ngã gia"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "五口人",
         "ico": "👨‍👩‍👧‍👦",
         "c": "o",
         "py": "wǔ kǒu rén",
         "hv": "ngũ khẩu nhân"
        }
       ],
       "traceWord": "口",
       "py": "Wǒ jiā yǒu wǔ kǒu rén",
       "traceKey": "kou",
       "traceInfo": [
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        }
       ]
      },
      {
       "scene": "👩👶",
       "full": "我姐姐有儿子",
       "vi": "Chị gái tôi có con trai",
       "parts": [
        {
         "t": "我姐姐",
         "ico": "👩",
         "c": "s",
         "py": "wǒ jiějie",
         "hv": "ngã thư thư"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "儿子",
         "ico": "👦",
         "c": "o",
         "py": "érzi",
         "hv": "nhi tử"
        }
       ],
       "traceWord": "儿子",
       "py": "Wǒ jiějie yǒu érzi",
       "traceKey": "erzi",
       "traceInfo": [
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👨👩👧",
       "full": "爸爸和妈妈有女儿",
       "vi": "Bố và mẹ có con gái",
       "parts": [
        {
         "t": "爸爸和妈妈",
         "ico": "👨👩",
         "c": "s",
         "py": "bàba hé māma",
         "hv": "ba ba hòa ma ma"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "女儿",
         "ico": "👧",
         "c": "o",
         "py": "nǚ'ér",
         "hv": "nữ nhi"
        }
       ],
       "traceWord": "女儿",
       "py": "Bàba hé māma yǒu nǚ'ér",
       "traceKey": "nuer",
       "traceInfo": [
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👴👵🤝",
       "full": "爷爷和奶奶都有朋友",
       "vi": "Ông và bà đều có bạn",
       "parts": [
        {
         "t": "爷爷和奶奶",
         "ico": "👴",
         "c": "s",
         "py": "yéye hé nǎinai",
         "hv": "gia gia hòa nãi nãi"
        },
        {
         "t": "都有",
         "ico": "✋",
         "c": "v",
         "py": "dōu yǒu",
         "hv": "đô hữu"
        },
        {
         "t": "朋友",
         "ico": "🤝",
         "c": "o",
         "py": "péngyou",
         "hv": "bằng hữu"
        }
       ],
       "traceWord": "奶奶",
       "py": "Yéye hé nǎinai dōu yǒu péngyou",
       "traceKey": "nainai",
       "traceInfo": [
        {
         "c": "奶",
         "py": "nǎi",
         "hv": "nãi"
        },
        {
         "c": "奶",
         "py": "nai",
         "hv": "nãi"
        }
       ]
      },
      {
       "scene": "🤝🧒",
       "full": "我的朋友们都有孩子",
       "vi": "Các bạn của tôi đều có con",
       "parts": [
        {
         "t": "我的朋友们",
         "ico": "🤝",
         "c": "s",
         "py": "wǒ de péngyou men",
         "hv": "ngã đích bằng hữu môn"
        },
        {
         "t": "都有",
         "ico": "✋",
         "c": "v",
         "py": "dōu yǒu",
         "hv": "đô hữu"
        },
        {
         "t": "孩子",
         "ico": "🧒",
         "c": "o",
         "py": "háizi",
         "hv": "hài tử"
        }
       ],
       "traceWord": "孩子",
       "py": "Wǒ de péngyou men dōu yǒu háizi",
       "traceKey": "haizi",
       "traceInfo": [
        {
         "c": "孩",
         "py": "hái",
         "hv": "hài"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🏠👨👩👧",
       "full": "我家里有爸爸妈妈和姐姐",
       "vi": "Trong nhà tôi có bố, mẹ và chị gái",
       "parts": [
        {
         "t": "我家里",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ jiā li",
         "hv": "ngã gia lý"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "爸爸妈妈和姐姐",
         "ico": "👨‍👩‍👧",
         "c": "o",
         "py": "bàba māma hé jiějie",
         "hv": "ba ba ma ma hòa thư thư"
        }
       ],
       "traceWord": "家里",
       "py": "Wǒ jiā li yǒu bàba māma hé jiějie",
       "traceKey": "jiali",
       "traceInfo": [
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "里",
         "py": "li",
         "hv": "lý"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你家有几口人？",
       "qvi": "Nhà bạn có mấy người?",
       "scene": "🏠👨‍👩‍👧‍👦",
       "ans": "我家有四口人",
       "opts": [
        {
         "txt": "我家有四口人",
         "ico": "👨‍👩‍👧‍👦",
         "py": "Wǒ jiā yǒu sì kǒu rén"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "他们是学生",
         "ico": "🎓",
         "py": "Tāmen shì xuéshēng"
        }
       ],
       "qpy": "Nǐ jiā yǒu jǐ kǒu rén?"
      },
      {
       "q": "你有哥哥吗？",
       "qvi": "Bạn có anh trai không?",
       "scene": "🧑👨",
       "ans": "我有两个哥哥",
       "opts": [
        {
         "txt": "我叫小明",
         "ico": "🙋",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "我有两个哥哥",
         "ico": "👨",
         "py": "Wǒ yǒu liǎng gè gēge"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        }
       ],
       "qpy": "Nǐ yǒu gēge ma?"
      },
      {
       "q": "你有家人吗？",
       "qvi": "Bạn có người nhà không?",
       "scene": "🧑👨‍👩‍👧",
       "ans": "我有很好的家人",
       "opts": [
        {
         "txt": "我有很好的家人",
         "ico": "👨‍👩‍👧",
         "py": "Wǒ yǒu hěn hǎo de jiārén"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "你叫什么名字",
         "ico": "❓",
         "py": "Nǐ jiào shénme míngzi"
        }
       ],
       "qpy": "Nǐ yǒu jiārén ma?"
      },
      {
       "q": "你们家有爷爷吗？",
       "qvi": "Nhà các bạn có ông không?",
       "scene": "🏠👴",
       "ans": "我们家有爷爷和奶奶",
       "opts": [
        {
         "txt": "他们是朋友",
         "ico": "🤝",
         "py": "Tāmen shì péngyou"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我们家有爷爷和奶奶",
         "ico": "👴👵",
         "py": "Wǒmen jiā yǒu yéye hé nǎinai"
        }
       ],
       "qpy": "Nǐmen jiā yǒu yéye ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu gia đình với đối tác mới",
      "steps": [
       "<b>Bước 1:</b> Chuẩn bị ảnh gia đình trên điện thoại. Tự nói thành tiếng số người trong nhà: <i>\"我家有五口人\"</i> (thay số cho đúng).",
       "<b>Bước 2:</b> Giới thiệu từng người bằng câu có 有, ví dụ <i>\"我有哥哥\"</i>, <i>\"我有弟弟和妹妹\"</i>. Nói ít nhất 4 câu.",
       "<b>Bước 3:</b> Đóng vai đối tác hỏi lại bạn <i>\"你家有几口人？\"</i> rồi trả lời bằng câu của mình. Nhắn thử cho một đồng nghiệp biết tiếng Trung để nhờ sửa."
      ]
     }
    },
    {
     "id": "1.2B",
     "name": "Bài 1.2B: Mô tả người: tuổi, to nhỏ, cao thấp",
     "grammar": {
      "formulas": [
       "🧒 孩子 + 💪 很 + 📏 大",
       "👦 男孩儿 + 💪 很 + 📏 高",
       "❓ 老人 + 😊 高兴吗？"
      ],
      "tip": "Câu vị ngữ tính từ: Chủ ngữ + 很 (hěn, rất) + tính từ. Ở câu khẳng định thông thường phải có 很 trước tính từ như 大 (dà, đại), 小 (xiǎo, tiểu), 高 (gāo, cao); nghĩa \"rất\" của 很 thường rất nhẹ. Tuổi nói bằng 岁 (suì, tuế): 五岁.",
      "vn_tip": "Người Việt hay bỏ 很 hoặc thêm 是, như nói sai 孩子是小 hoặc 他高. Đúng là 孩子很小, 他很高. Phủ định thì dùng 不 và không cần 很: 他不老."
     },
     "chunks": [
      {
       "scene": "🧑🧒",
       "full": "我的孩子很大",
       "vi": "Con của tôi đã lớn",
       "parts": [
        {
         "t": "我的孩子",
         "ico": "🧒",
         "c": "s",
         "py": "wǒ de háizi",
         "hv": "ngã đích hài tử"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "大",
         "ico": "📏",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "孩子",
       "py": "Wǒ de háizi hěn dà",
       "traceKey": "haizi",
       "traceInfo": [
        {
         "c": "孩",
         "py": "hái",
         "hv": "hài"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👦📏",
       "full": "男孩儿很高",
       "vi": "Cậu bé rất cao",
       "parts": [
        {
         "t": "男孩儿",
         "ico": "👦",
         "c": "s",
         "py": "nánháir",
         "hv": "nam hài nhi"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "高",
         "ico": "📏",
         "c": "o",
         "py": "gāo",
         "hv": "cao"
        }
       ],
       "traceWord": "男孩儿",
       "py": "Nánháir hěn gāo",
       "traceKey": "nanhair",
       "traceInfo": [
        {
         "c": "男",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "孩",
         "py": "hái",
         "hv": "hài"
        },
        {
         "c": "儿",
         "py": "er",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👧👍",
       "full": "女孩儿很好",
       "vi": "Cô bé rất ngoan",
       "parts": [
        {
         "t": "女孩儿",
         "ico": "👧",
         "c": "s",
         "py": "nǚháir",
         "hv": "nữ hài nhi"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "女孩儿",
       "py": "Nǚháir hěn hǎo",
       "traceKey": "nuhair",
       "traceInfo": [
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        },
        {
         "c": "孩",
         "py": "hái",
         "hv": "hài"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👶🤏",
       "full": "小孩儿很小",
       "vi": "Em bé rất nhỏ",
       "parts": [
        {
         "t": "小孩儿",
         "ico": "👶",
         "c": "s",
         "py": "xiǎoháir",
         "hv": "tiểu hài nhi"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "小",
         "ico": "🤏",
         "c": "o",
         "py": "xiǎo",
         "hv": "tiểu"
        }
       ],
       "traceWord": "小孩儿",
       "py": "Xiǎoháir hěn xiǎo",
       "traceKey": "xiaohair",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "孩",
         "py": "hái",
         "hv": "hài"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "🧒🧒😊",
       "full": "小朋友们很高兴",
       "vi": "Các bạn nhỏ rất vui",
       "parts": [
        {
         "t": "小朋友们",
         "ico": "🧒",
         "c": "s",
         "py": "xiǎopéngyǒu men",
         "hv": "tiểu bằng hữu môn"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "高兴",
         "ico": "😊",
         "c": "o",
         "py": "gāoxìng",
         "hv": "cao hứng"
        }
       ],
       "traceWord": "小朋友",
       "py": "Xiǎopéngyǒu men hěn gāoxìng",
       "traceKey": "xiaopengyou",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "朋",
         "py": "péng",
         "hv": "bằng"
        },
        {
         "c": "友",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "🧑❤️📏",
       "full": "我男朋友很高",
       "vi": "Bạn trai tôi rất cao",
       "parts": [
        {
         "t": "我男朋友",
         "ico": "👨‍❤️‍👨",
         "c": "s",
         "py": "wǒ nánpéngyou",
         "hv": "ngã nam bằng hữu"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "高",
         "ico": "📏",
         "c": "o",
         "py": "gāo",
         "hv": "cao"
        }
       ],
       "traceWord": "男朋友",
       "py": "Wǒ nánpéngyou hěn gāo",
       "traceKey": "nanpengyou",
       "traceInfo": [
        {
         "c": "男",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "朋",
         "py": "péng",
         "hv": "bằng"
        },
        {
         "c": "友",
         "py": "you",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "👩‍❤️‍👨👍",
       "full": "我女朋友很好",
       "vi": "Bạn gái tôi rất tốt",
       "parts": [
        {
         "t": "我女朋友",
         "ico": "👩‍❤️‍👨",
         "c": "s",
         "py": "wǒ nǚpéngyou",
         "hv": "ngã nữ bằng hữu"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "女朋友",
       "py": "Wǒ nǚpéngyou hěn hǎo",
       "traceKey": "nupengyou",
       "traceInfo": [
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        },
        {
         "c": "朋",
         "py": "péng",
         "hv": "bằng"
        },
        {
         "c": "友",
         "py": "you",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "👨📏",
       "full": "那个男人很高",
       "vi": "Người đàn ông kia rất cao",
       "parts": [
        {
         "t": "那个男人",
         "ico": "👨",
         "c": "s",
         "py": "nà gè nánrén",
         "hv": "na cá nam nhân"
        },
        {
         "t": "很",
         "ico": "💪",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "高",
         "ico": "📏",
         "c": "o",
         "py": "gāo",
         "hv": "cao"
        }
       ],
       "traceWord": "男人",
       "py": "Nà gè nánrén hěn gāo",
       "traceKey": "nanren",
       "traceInfo": [
        {
         "c": "男",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你女儿几岁？",
       "qvi": "Con gái bạn mấy tuổi?",
       "scene": "👧🎂",
       "ans": "我女儿五岁",
       "opts": [
        {
         "txt": "我女儿五岁",
         "ico": "🎂",
         "py": "Wǒ nǚ'ér wǔ suì"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我叫小明",
         "ico": "🙋",
         "py": "Wǒ jiào Xiǎomíng"
        }
       ],
       "qpy": "Nǐ nǚ'ér jǐ suì?"
      },
      {
       "q": "那个女人高吗？",
       "qvi": "Người phụ nữ kia có cao không?",
       "scene": "👩📏",
       "ans": "那个女人很高",
       "opts": [
        {
         "txt": "她是女的",
         "ico": "👩",
         "py": "Tā shì nǚ de"
        },
        {
         "txt": "那个女人很高",
         "ico": "📏",
         "py": "Nà gè nǚrén hěn gāo"
        },
        {
         "txt": "她是学生",
         "ico": "🎓",
         "py": "Tā shì xuéshēng"
        }
       ],
       "qpy": "Nà gè nǚrén gāo ma?"
      },
      {
       "q": "老人高兴吗？",
       "qvi": "Người già có vui không?",
       "scene": "👴😊",
       "ans": "老人很高兴",
       "opts": [
        {
         "txt": "老人很高兴",
         "ico": "😊",
         "py": "Lǎorén hěn gāoxìng"
        },
        {
         "txt": "老人是男的",
         "ico": "👴",
         "py": "Lǎorén shì nán de"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        }
       ],
       "qpy": "Lǎorén gāoxìng ma?"
      },
      {
       "q": "你爸爸老吗？",
       "qvi": "Bố bạn có già không?",
       "scene": "👨🕰️",
       "ans": "他不老",
       "opts": [
        {
         "txt": "他是男孩儿",
         "ico": "👦",
         "py": "Tā shì nánháir"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他不老",
         "ico": "👨",
         "py": "Tā bù lǎo"
        }
       ],
       "qpy": "Nǐ bàba lǎo ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mô tả người cần gặp qua điện thoại",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn hẹn gặp một đồng nghiệp lần đầu. Tự nói mô tả bản thân: <i>\"我很高\"</i> hoặc <i>\"我不老\"</i>, dùng đúng 很 trước tính từ.",
       "<b>Bước 2:</b> Nhắn tin hoặc nói to mô tả một người quen, ví dụ <i>\"我男朋友很高\"</i>, <i>\"那个男人很高\"</i>. Hỏi tuổi bằng <i>\"你女儿几岁？\"</i> và trả lời bằng <i>\"我女儿五岁\"</i>.",
       "<b>Bước 3:</b> Mô tả ba người trong ảnh (trẻ em, người lớn, người già) bằng ít nhất 6 câu có 很, rồi đọc lại và kiểm tra không câu nào thiếu 很."
      ]
     }
    },
    {
     "id": "1.2C",
     "name": "Bài 1.2C: Gặp gỡ bạn bè, đồng nghiệp",
     "grammar": {
      "formulas": [
       "👥 我们 + 🤝 见面 + 💬 吧",
       "👥 我们 + 🎮 玩儿 + 💬 吧",
       "👥 我们 + 🤝 跟同学开玩笑 + 💬 吧"
      ],
      "tip": "Trợ từ 吧 (ba, ba) đặt cuối câu để đề nghị, gợi ý, làm giọng mềm hơn: 我们见面吧. Cụm 跟 (gēn, cân) + người + động từ nghĩa là \"cùng với ai làm gì\": 跟网友见面.",
      "vn_tip": "Người Việt hay dịch \"nhé, đi\" thành 啊 hoặc bỏ luôn, làm câu cộc lốc. Hãy thêm 吧 ở cuối khi rủ rê hoặc đề nghị. Lưu ý 跟 đứng trước động từ: nói 我们跟网友见面吧, không nói 我们见面跟网友吧."
     },
     "chunks": [
      {
       "scene": "👥🤝",
       "full": "我们见面吧",
       "vi": "Chúng ta gặp nhau đi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "见面",
         "ico": "🤝",
         "c": "v",
         "py": "jiànmiàn",
         "hv": "kiến diện"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "见面",
       "py": "Wǒmen jiànmiàn ba",
       "traceKey": "jianmian",
       "traceInfo": [
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👥🎮",
       "full": "我们玩儿吧",
       "vi": "Chúng ta chơi đi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "玩儿",
         "ico": "🎮",
         "c": "v",
         "py": "wánr",
         "hv": "ngoạn nhi"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "玩儿",
       "py": "Wǒmen wánr ba",
       "traceKey": "wanr",
       "traceInfo": [
        {
         "c": "玩",
         "py": "wán",
         "hv": "ngoạn"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👥💻🤝",
       "full": "我们跟网友见面吧",
       "vi": "Chúng ta gặp bạn qua mạng đi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "跟网友见面",
         "ico": "💻",
         "c": "v",
         "py": "gēn wǎngyǒu jiànmiàn",
         "hv": "cân võng hữu kiến diện"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "网友",
       "py": "Wǒmen gēn wǎngyǒu jiànmiàn ba",
       "traceKey": "wangyou",
       "traceInfo": [
        {
         "c": "网",
         "py": "wǎng",
         "hv": "võng"
        },
        {
         "c": "友",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "👥🎓😄",
       "full": "我们跟同学开玩笑吧",
       "vi": "Chúng ta đùa với bạn học đi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "跟同学开玩笑",
         "ico": "😄",
         "c": "v",
         "py": "gēn tóngxué kāi wánxiào",
         "hv": "cân đồng học khai ngoạn tiếu"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "开玩笑",
       "py": "Wǒmen gēn tóngxué kāi wánxiào ba",
       "traceKey": "kaiwanxiao",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "玩",
         "py": "wán",
         "hv": "ngoạn"
        },
        {
         "c": "笑",
         "py": "xiào",
         "hv": "tiếu"
        }
       ]
      },
      {
       "scene": "👥👦👧🤝",
       "full": "我们介绍男生和女生认识吧",
       "vi": "Chúng ta giới thiệu nam sinh và nữ sinh làm quen đi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "介绍男生和女生认识",
         "ico": "🤝",
         "c": "v",
         "py": "jièshào nánshēng hé nǚshēng rènshi",
         "hv": "giới thiệu nam sinh hòa nữ sinh nhận thức"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "女生",
       "py": "Wǒmen jièshào nánshēng hé nǚshēng rènshi ba",
       "traceKey": "nusheng",
       "traceInfo": [
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        },
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "🧑💭🎓",
       "full": "我觉得她是同学吧",
       "vi": "Tôi nghĩ cô ấy là bạn học đấy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "觉得",
         "ico": "💭",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "她是同学吧",
         "ico": "🎓",
         "c": "o",
         "py": "tā shì tóngxué ba",
         "hv": "tha thị đồng học ba"
        }
       ],
       "traceWord": "觉得",
       "py": "Wǒ juéde tā shì tóngxué ba",
       "traceKey": "juede",
       "traceInfo": [
        {
         "c": "觉",
         "py": "jué",
         "hv": "giác"
        },
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "🧑🧑😊",
       "full": "别人都很高兴吧",
       "vi": "Những người khác chắc đều rất vui",
       "parts": [
        {
         "t": "别人",
         "ico": "🧑",
         "c": "s",
         "py": "biérén",
         "hv": "biệt nhân"
        },
        {
         "t": "都很高兴",
         "ico": "😊",
         "c": "v",
         "py": "dōu hěn gāoxìng",
         "hv": "đô ngận cao hứng"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "别人",
       "py": "Biérén dōu hěn gāoxìng ba",
       "traceKey": "bieren",
       "traceInfo": [
        {
         "c": "别",
         "py": "bié",
         "hv": "biệt"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "👥👩‍🏫🤝",
       "full": "你们都跟老师见面吧",
       "vi": "Các bạn đều gặp thầy cô đi",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "都跟老师见面",
         "ico": "👩‍🏫",
         "c": "v",
         "py": "dōu gēn lǎoshī jiànmiàn",
         "hv": "đô cân lão sư kiến diện"
        },
        {
         "t": "吧",
         "ico": "💬",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "跟",
       "py": "Nǐmen dōu gēn lǎoshī jiànmiàn ba",
       "traceKey": "gen",
       "traceInfo": [
        {
         "c": "跟",
         "py": "gēn",
         "hv": "cân"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的爱好是什么？",
       "qvi": "Sở thích của bạn là gì?",
       "scene": "🧑❤️",
       "ans": "我的爱好是认识朋友",
       "opts": [
        {
         "txt": "我们都笑",
         "ico": "😄",
         "py": "Wǒmen dōu xiào"
        },
        {
         "txt": "我的爱好是认识朋友",
         "ico": "🤝",
         "py": "Wǒ de àihào shì rènshi péngyou"
        },
        {
         "txt": "你们是朋友",
         "ico": "🏠",
         "py": "Nǐmen shì péngyou"
        }
       ],
       "qpy": "Nǐ de àihào shì shénme?"
      },
      {
       "q": "老师生气吗？",
       "qvi": "Thầy cô có giận không?",
       "scene": "👩‍🏫😠",
       "ans": "老师不生气",
       "opts": [
        {
         "txt": "老师不生气",
         "ico": "😊",
         "py": "Lǎoshī bù shēngqì"
        },
        {
         "txt": "我叫小明",
         "ico": "🙋",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "他们是男生",
         "ico": "👦",
         "py": "Tāmen shì nánshēng"
        }
       ],
       "qpy": "Lǎoshī shēngqì ma?"
      },
      {
       "q": "你觉得他高兴吗？",
       "qvi": "Bạn thấy anh ấy có vui không?",
       "scene": "🧑💭😊",
       "ans": "我觉得他很高兴",
       "opts": [
        {
         "txt": "我是女生",
         "ico": "👧",
         "py": "Wǒ shì nǚshēng"
        },
        {
         "txt": "我们见老师吧",
         "ico": "👩‍🏫",
         "py": "Wǒmen jiàn lǎoshī ba"
        },
        {
         "txt": "我觉得他很高兴",
         "ico": "😊",
         "py": "Wǒ juéde tā hěn gāoxìng"
        }
       ],
       "qpy": "Nǐ juéde tā gāoxìng ma?"
      },
      {
       "q": "你跟谁见面？",
       "qvi": "Bạn gặp ai?",
       "scene": "🧑🤝",
       "ans": "我跟同学见面",
       "opts": [
        {
         "txt": "我跟同学见面",
         "ico": "🎓",
         "py": "Wǒ gēn tóngxué jiànmiàn"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "爸爸很高",
         "ico": "📏",
         "py": "Bàba hěn gāo"
        }
       ],
       "qpy": "Nǐ gēn shéi jiànmiàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp hoặc bạn cũ gặp mặt",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một người bạn hoặc đồng nghiệp có học tiếng Trung, rủ gặp nhau: <i>\"我们见面吧\"</i>.",
       "<b>Bước 2:</b> Thêm một đề nghị khác bằng 吧, ví dụ <i>\"我们玩儿吧\"</i> hoặc <i>\"我们跟网友见面吧\"</i>. Tự nói thành tiếng ít nhất 4 câu có 吧.",
       "<b>Bước 3:</b> Đóng vai người được rủ: trả lời bằng <i>\"我觉得很好\"</i> hoặc hỏi lại <i>\"你的爱好是什么？\"</i>, rồi ghi lại các câu mình dùng."
      ]
     }
    }
   ]
  },
  "1.3": {
   "lessons": [
    {
     "id": "1.3A",
     "name": "Bài 1.3A: Cảm ơn, xin lỗi, tạm biệt",
     "grammar": {
      "formulas": [
       "🙏 请 + 🧑 你们 + 🚪 进",
       "🧑 我 + 💬 谢谢 + 👩‍🏫 老师",
       "❓ 你 + 💡 明白 + 吗？"
      ],
      "tip": "Câu cầu khiến lịch sự: 请 (qǐng, thỉnh) + động từ, ví dụ 请进 (mời vào), 请坐 (mời ngồi). Thêm 吧 (ba) ở cuối câu để giọng mềm hơn, như 再见吧.",
      "vn_tip": "Người Việt hay nói \"xin lỗi\" cho mọi tình huống. Tiếng Trung phân biệt: 对不起 (duìbuqǐ, đối bất khởi) khi xin lỗi, còn 谢谢 (xièxie) khi cảm ơn. Đáp lại lời cảm ơn là 不客气, đáp lại lời xin lỗi là 没关系."
     },
     "chunks": [
      {
       "scene": "🧑🙏👩‍🏫",
       "full": "我谢谢老师",
       "vi": "Tôi cảm ơn thầy cô",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "谢谢",
         "ico": "🙏",
         "c": "v",
         "py": "xièxie",
         "hv": "tạ tạ"
        },
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "lǎoshī",
         "hv": "lão sư"
        }
       ],
       "traceWord": "谢谢",
       "py": "Wǒ xièxie lǎoshī",
       "traceKey": "xiexie",
       "traceInfo": [
        {
         "c": "谢",
         "py": "xiè",
         "hv": "tạ"
        },
        {
         "c": "谢",
         "py": "xie",
         "hv": "tạ"
        }
       ]
      },
      {
       "scene": "👫👋😊",
       "full": "我们再见吧",
       "vi": "Chúng ta tạm biệt nhé",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "再见",
         "ico": "👋",
         "c": "v",
         "py": "zàijiàn",
         "hv": "tái kiến"
        },
        {
         "t": "吧",
         "ico": "😊",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "再见",
       "py": "Wǒmen zàijiàn ba",
       "traceKey": "zaijian",
       "traceInfo": [
        {
         "c": "再",
         "py": "zài",
         "hv": "tái"
        },
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      },
      {
       "scene": "🧑💡❓",
       "full": "你明白吗",
       "vi": "Bạn hiểu không?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "明白",
         "ico": "💡",
         "c": "v",
         "py": "míngbai",
         "hv": "minh bạch"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "明白",
       "py": "Nǐ míngbai ma",
       "traceKey": "mingbai",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "白",
         "py": "bai",
         "hv": "bạch"
        }
       ]
      },
      {
       "scene": "👨😔🙇",
       "full": "他说对不起",
       "vi": "Anh ấy nói xin lỗi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "t": "对不起",
         "ico": "🙇",
         "c": "o",
         "py": "duìbuqǐ",
         "hv": "đối bất khởi"
        }
       ],
       "traceWord": "对不起",
       "py": "Tā shuō duìbuqǐ",
       "traceKey": "duibuqi",
       "traceInfo": [
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        },
        {
         "c": "不",
         "py": "bu",
         "hv": "bất"
        },
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        }
       ]
      },
      {
       "scene": "🙏👥🚪",
       "full": "请你们进",
       "vi": "Mời các bạn vào",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "进",
         "ico": "🚪",
         "c": "o",
         "py": "jìn",
         "hv": "tiến"
        }
       ],
       "traceWord": "请",
       "py": "Qǐng nǐmen jìn",
       "traceKey": "qing",
       "traceInfo": [
        {
         "c": "请",
         "py": "qǐng",
         "hv": "thỉnh"
        }
       ]
      },
      {
       "scene": "🙏👔🪑",
       "full": "请先生坐",
       "vi": "Mời ông ngồi",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "先生",
         "ico": "👔",
         "c": "s",
         "py": "xiānsheng",
         "hv": "tiên sinh"
        },
        {
         "t": "坐",
         "ico": "🪑",
         "c": "o",
         "py": "zuò",
         "hv": "tọa"
        }
       ],
       "traceWord": "先生",
       "py": "Qǐng xiānsheng zuò",
       "traceKey": "xiansheng",
       "traceInfo": [
        {
         "c": "先",
         "py": "xiān",
         "hv": "tiên"
        },
        {
         "c": "生",
         "py": "sheng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "🧑🙅📝",
       "full": "你不用介绍",
       "vi": "Bạn không cần giới thiệu",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "不用",
         "ico": "🙅",
         "c": "v",
         "py": "bùyòng",
         "hv": "bất dụng"
        },
        {
         "t": "介绍",
         "ico": "📝",
         "c": "o",
         "py": "jièshào",
         "hv": "giới thiệu"
        }
       ],
       "traceWord": "不用",
       "py": "Nǐ bùyòng jièshào",
       "traceKey": "buyong",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "🔤🙅❓",
       "full": "这个字不对吗",
       "vi": "Chữ này không đúng à?",
       "parts": [
        {
         "t": "这个字",
         "ico": "🔤",
         "c": "s",
         "py": "zhè gè zì",
         "hv": "giá cá tự"
        },
        {
         "t": "不对",
         "ico": "❌",
         "c": "v",
         "py": "bùduì",
         "hv": "bất đối"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "不对",
       "py": "Zhè gè zì bùduì ma",
       "traceKey": "budui",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "谢谢你！",
       "qvi": "Cảm ơn bạn!",
       "scene": "🙏😊",
       "ans": "不客气",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "不客气",
         "ico": "😊",
         "py": "Bù kèqì"
        },
        {
         "txt": "你好",
         "ico": "👋",
         "py": "Nǐ hǎo"
        }
       ],
       "qpy": "Xièxie nǐ"
      },
      {
       "q": "对不起。",
       "qvi": "Xin lỗi.",
       "scene": "🙇😔",
       "ans": "没关系",
       "opts": [
        {
         "txt": "没关系",
         "ico": "👌",
         "py": "Méi guānxi"
        },
        {
         "txt": "我叫小明",
         "ico": "🧑",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "他是老师",
         "ico": "👩‍🏫",
         "py": "Tā shì lǎoshī"
        }
       ],
       "qpy": "Duìbuqǐ"
      },
      {
       "q": "请进，请坐。",
       "qvi": "Mời vào, mời ngồi.",
       "scene": "🚪🪑",
       "ans": "谢谢您",
       "opts": [
        {
         "txt": "你是谁",
         "ico": "❓",
         "py": "Nǐ shì shéi"
        },
        {
         "txt": "我不是学生",
         "ico": "🙅",
         "py": "Wǒ bú shì xuéshēng"
        },
        {
         "txt": "谢谢您",
         "ico": "🙏",
         "py": "Xièxie nín"
        }
       ],
       "qpy": "Qǐng jìn qǐng zuò"
      },
      {
       "q": "谢谢你的介绍。",
       "qvi": "Cảm ơn lời giới thiệu của bạn.",
       "scene": "📝🙏",
       "ans": "没什么",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👨",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "没什么",
         "ico": "🙂",
         "py": "Méi shénme"
        },
        {
         "txt": "你说的对",
         "ico": "✅",
         "py": "Nǐ shuō de duì"
        }
       ],
       "qpy": "Xièxie nǐ de jièshào"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tiếp khách đến văn phòng",
      "steps": [
       "<b>Bước 1:</b> Đứng trước gương, đóng vai bạn mở cửa đón khách: nói <i>\"请进\"</i> rồi <i>\"请坐\"</i>, lặp lại 5 lần với giọng lịch sự.",
       "<b>Bước 2:</b> Tưởng tượng khách cảm ơn bạn. Hãy đáp bằng <i>\"不客气\"</i> hoặc <i>\"没什么\"</i>. Sau đó giả vờ làm đổ nước và nói <i>\"对不起\"</i>, rồi tự đáp <i>\"没关系\"</i>.",
       "<b>Bước 3:</b> Kết thúc buổi gặp, nói <i>\"谢谢，再见\"</i> bằng giọng thật. Ghi âm lại và nghe xem thanh điệu đã rõ chưa."
      ]
     }
    },
    {
     "id": "1.3B",
     "name": "Bài 1.3B: Học tiếng Trung, nghe nói đọc viết",
     "grammar": {
      "formulas": [
       "🧑 我 + 💪 会 + 💬 说汉语",
       "👨 他 + 💪 会 + ✍️ 写汉字",
       "❓ 你 + 💪 会 + 📖 读中文吗？"
      ],
      "tip": "Động từ năng nguyện 会 (huì, hội) đặt trước động từ chính để nói biết làm gì nhờ học tập: 会 + động từ. Phủ định là 不会 (không biết), nghi vấn là 你会…吗？",
      "vn_tip": "Người Việt hay thêm \"được\" hoặc \"biết\" sau động từ, nhưng tiếng Trung đặt 会 TRƯỚC động từ: nói 我会说汉语, không nói \"我说汉语会\". Phủ định đặt 不 trước 会: 我不会读."
     },
     "chunks": [
      {
       "scene": "🧑🗣️🇨🇳",
       "full": "我会说汉语",
       "vi": "Tôi biết nói tiếng Hán",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "说汉语",
         "ico": "🗣️",
         "c": "o",
         "py": "shuō Hànyǔ",
         "hv": "thuyết hán ngữ"
        }
       ],
       "traceWord": "汉语",
       "py": "Wǒ huì shuō Hànyǔ",
       "traceKey": "hanyu",
       "traceInfo": [
        {
         "c": "汉",
         "py": "hàn",
         "hv": "hán"
        },
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        }
       ]
      },
      {
       "scene": "👨✍️🔤",
       "full": "他会写汉字",
       "vi": "Anh ấy biết viết chữ Hán",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "写汉字",
         "ico": "✍️",
         "c": "o",
         "py": "xiě Hànzì",
         "hv": "tả hán tự"
        }
       ],
       "traceWord": "汉字",
       "py": "Tā huì xiě Hànzì",
       "traceKey": "hanzi",
       "traceInfo": [
        {
         "c": "汉",
         "py": "hàn",
         "hv": "hán"
        },
        {
         "c": "字",
         "py": "zì",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "🧑📖❓",
       "full": "你会读中文吗",
       "vi": "Bạn biết đọc tiếng Trung không?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "读中文吗",
         "ico": "📖",
         "c": "o",
         "py": "dú Zhōngwén ma",
         "hv": "độc trung văn ma"
        }
       ],
       "traceWord": "中文",
       "py": "Nǐ huì dú Zhōngwén ma",
       "traceKey": "zhongwen",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑🗣️🌍",
       "full": "朋友会说外语",
       "vi": "Bạn tôi biết nói ngoại ngữ",
       "parts": [
        {
         "t": "朋友",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "péngyou",
         "hv": "bằng hữu"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "说外语",
         "ico": "🌍",
         "c": "o",
         "py": "shuō wàiyǔ",
         "hv": "thuyết ngoại ngữ"
        }
       ],
       "traceWord": "外语",
       "py": "Péngyou huì shuō wàiyǔ",
       "traceKey": "waiyu",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        }
       ]
      },
      {
       "scene": "👩‍🏫📚👥",
       "full": "老师会教我们",
       "vi": "Thầy cô sẽ dạy chúng tôi",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "教我们",
         "ico": "👥",
         "c": "o",
         "py": "jiāo wǒmen",
         "hv": "giao ngã môn"
        }
       ],
       "traceWord": "教",
       "py": "Lǎoshī huì jiāo wǒmen",
       "traceKey": "jiao",
       "traceInfo": [
        {
         "c": "教",
         "py": "jiāo",
         "hv": "giao"
        }
       ]
      },
      {
       "scene": "📚💪🔤",
       "full": "我会学习汉字",
       "vi": "Tôi sẽ học chữ Hán",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "学习汉字",
         "ico": "📚",
         "c": "o",
         "py": "xuéxí Hànzì",
         "hv": "học tập hán tự"
        }
       ],
       "traceWord": "学习",
       "py": "Wǒ huì xuéxí Hànzì",
       "traceKey": "xuexi",
       "traceInfo": [
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "习",
         "py": "xí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "🧑👂🗣️",
       "full": "我会听老师说话",
       "vi": "Tôi sẽ nghe thầy cô nói chuyện",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "听老师说话",
         "ico": "👂",
         "c": "o",
         "py": "tīng lǎoshī shuōhuà",
         "hv": "thính lão sư thuyết thoại"
        }
       ],
       "traceWord": "说话",
       "py": "Wǒ huì tīng lǎoshī shuōhuà",
       "traceKey": "shuohua",
       "traceInfo": [
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        }
       ]
      },
      {
       "scene": "🌍🧑🗣️❓",
       "full": "外国人会说汉语吗",
       "vi": "Người nước ngoài biết nói tiếng Hán không?",
       "parts": [
        {
         "t": "外国人",
         "ico": "🌍",
         "c": "s",
         "py": "wàiguó rén",
         "hv": "ngoại quốc nhân"
        },
        {
         "t": "会",
         "ico": "💪",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "说汉语吗",
         "ico": "🗣️",
         "c": "o",
         "py": "shuō Hànyǔ ma",
         "hv": "thuyết hán ngữ ma"
        }
       ],
       "traceWord": "外国",
       "py": "Wàiguó rén huì shuō Hànyǔ ma",
       "traceKey": "waiguo",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你会说汉语吗？",
       "qvi": "Bạn biết nói tiếng Hán không?",
       "scene": "🧑🗣️",
       "ans": "我会说中文",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "我有两个哥哥",
         "ico": "👨‍👨",
         "py": "Wǒ yǒu liǎng gè gēge"
        },
        {
         "txt": "我会说中文",
         "ico": "🗣️",
         "py": "Wǒ huì shuō Zhōngwén"
        }
       ],
       "qpy": "Nǐ huì shuō Hànyǔ ma?"
      },
      {
       "q": "你学什么？",
       "qvi": "Bạn học gì?",
       "scene": "📚❓",
       "ans": "我学外语",
       "opts": [
        {
         "txt": "我学外语",
         "ico": "🌍",
         "py": "Wǒ xué wàiyǔ"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我听他的话",
         "ico": "👂",
         "py": "Wǒ tīng tā de huà"
        }
       ],
       "qpy": "Nǐ xué shénme?"
      },
      {
       "q": "你们都会写字吗？",
       "qvi": "Các bạn đều biết viết chữ không?",
       "scene": "✍️👥",
       "ans": "我们都会写",
       "opts": [
        {
         "txt": "他是我朋友",
         "ico": "🧑‍🤝‍🧑",
         "py": "Tā shì wǒ péngyou"
        },
        {
         "txt": "我叫小明",
         "ico": "🧑",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "我们都会写",
         "ico": "✍️",
         "py": "Wǒmen dōu huì xiě"
        }
       ],
       "qpy": "Nǐmen dōu huì xiě zì ma?"
      },
      {
       "q": "你会读这个字吗？",
       "qvi": "Bạn biết đọc chữ này không?",
       "scene": "📖🔤",
       "ans": "我不会读",
       "opts": [
        {
         "txt": "他是老师",
         "ico": "👩‍🏫",
         "py": "Tā shì lǎoshī"
        },
        {
         "txt": "我很高兴",
         "ico": "😊",
         "py": "Wǒ hěn gāoxìng"
        },
        {
         "txt": "我不会读",
         "ico": "🙅",
         "py": "Wǒ bú huì dú"
        }
       ],
       "qpy": "Nǐ huì dú zhè gè zì ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tự giới thiệu khả năng ngoại ngữ",
      "steps": [
       "<b>Bước 1:</b> Viết ra giấy 4 kỹ năng bạn đã có: nghe, nói, đọc, viết. Với mỗi kỹ năng, nói thành tiếng một câu như <i>\"我会说汉语\"</i> hoặc <i>\"我不会写汉字\"</i>.",
       "<b>Bước 2:</b> Nhắn tin hoặc nói với một đồng nghiệp: <i>\"你会说外语吗？\"</i> rồi ghi lại họ biết ngoại ngữ nào, dùng mẫu 会 để nhắc lại.",
       "<b>Bước 3:</b> Chọn một chữ Hán bạn vừa học, viết 5 lần và đọc to. Cuối cùng nói <i>\"我会学习汉字\"</i> như một lời cam kết của bạn."
      ]
     }
    },
    {
     "id": "1.3C",
     "name": "Bài 1.3C: Hỏi đáp, nhớ và quên, hiểu",
     "grammar": {
      "formulas": [
       "🧑 你 + ❓ 是不是 + 👩‍🏫 老师",
       "🧑 你 + 🧠 知道不知道 + 👨 他",
       "🧑 你 + 🧪 试 + ⏱️ 一下儿"
      ],
      "tip": "Câu hỏi chính phản: lặp động từ ở dạng khẳng định + phủ định, ví dụ 是不是 (shì bu shì), 知道不知道 (zhīdào bu zhīdào, tri đạo). Không thêm 吗 vào cuối câu này.",
      "vn_tip": "Người Việt hay nói \"bạn có biết không\" rồi thêm 吗 máy móc thành 你知道不知道吗. Đây là lỗi: câu chính phản đã là câu hỏi, không dùng 吗. Cũng chú ý 看见 (kànjiàn, khán kiến) là \"nhìn thấy\", khác với chỉ 看 là \"xem\"."
     },
     "chunks": [
      {
       "scene": "🧑❓👩‍🏫",
       "full": "你是不是老师",
       "vi": "Bạn có phải là giáo viên không?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "是不是",
         "ico": "❓",
         "c": "v",
         "py": "shì bu shì",
         "hv": "thị bất thị"
        },
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "lǎoshī",
         "hv": "lão sư"
        }
       ],
       "traceWord": "是不是",
       "py": "Nǐ shì bu shì lǎoshī",
       "traceKey": "shibushi",
       "traceInfo": [
        {
         "c": "是",
         "py": "shì",
         "hv": "thị"
        },
        {
         "c": "不",
         "py": "bu",
         "hv": "bất"
        },
        {
         "c": "是",
         "py": "shì",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "🧑🧪⏱️",
       "full": "你试一下儿",
       "vi": "Bạn thử một chút đi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "试",
         "ico": "🧪",
         "c": "v",
         "py": "shì",
         "hv": "thí"
        },
        {
         "t": "一下儿",
         "ico": "⏱️",
         "c": "o",
         "py": "yīxiàr",
         "hv": "nhất hạ nhi"
        }
       ],
       "traceWord": "试",
       "py": "Nǐ shì yīxiàr",
       "traceKey": "shi",
       "traceInfo": [
        {
         "c": "试",
         "py": "shì",
         "hv": "thí"
        }
       ]
      },
      {
       "scene": "🧑🧠👨",
       "full": "你知道不知道他",
       "vi": "Bạn có biết anh ấy không?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "知道不知道",
         "ico": "🧠",
         "c": "v",
         "py": "zhīdào bù zhīdào",
         "hv": "tri đạo bất tri đạo"
        },
        {
         "t": "他",
         "ico": "👨",
         "c": "o",
         "py": "tā",
         "hv": "tha"
        }
       ],
       "traceWord": "知道",
       "py": "Nǐ zhīdào bù zhīdào tā",
       "traceKey": "zhidao",
       "traceInfo": [
        {
         "c": "知",
         "py": "zhī",
         "hv": "tri"
        },
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "🧑🧠📛",
       "full": "我记得你的名字",
       "vi": "Tôi nhớ tên của bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "记得",
         "ico": "🧠",
         "c": "v",
         "py": "jìde",
         "hv": "ký đắc"
        },
        {
         "t": "你的名字",
         "ico": "📛",
         "c": "o",
         "py": "nǐ de míngzi",
         "hv": "nễ đích danh tự"
        }
       ],
       "traceWord": "记得",
       "py": "Wǒ jìde nǐ de míngzi",
       "traceKey": "jide",
       "traceInfo": [
        {
         "c": "记",
         "py": "jì",
         "hv": "ký"
        },
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "🧑😅📛",
       "full": "我忘记他的名字",
       "vi": "Tôi quên tên của anh ấy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "忘记",
         "ico": "😅",
         "c": "v",
         "py": "wàngjì",
         "hv": "vong ký"
        },
        {
         "t": "他的名字",
         "ico": "📛",
         "c": "o",
         "py": "tā de míngzi",
         "hv": "tha đích danh tự"
        }
       ],
       "traceWord": "忘记",
       "py": "Wǒ wàngjì tā de míngzi",
       "traceKey": "wangji",
       "traceInfo": [
        {
         "c": "忘",
         "py": "wàng",
         "hv": "vong"
        },
        {
         "c": "记",
         "py": "jì",
         "hv": "ký"
        }
       ]
      },
      {
       "scene": "🧑👀🧑‍🤝‍🧑",
       "full": "我看见你的朋友",
       "vi": "Tôi nhìn thấy bạn của bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "看见",
         "ico": "👀",
         "c": "v",
         "py": "kànjiàn",
         "hv": "khán kiến"
        },
        {
         "t": "你的朋友",
         "ico": "🧑‍🤝‍🧑",
         "c": "o",
         "py": "nǐ de péngyou",
         "hv": "nễ đích bằng hữu"
        }
       ],
       "traceWord": "看见",
       "py": "Wǒ kànjiàn nǐ de péngyou",
       "traceKey": "kanjian",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
        },
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      },
      {
       "scene": "🧑👂🗣️",
       "full": "我听到他说话",
       "vi": "Tôi nghe thấy anh ấy nói",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "听到",
         "ico": "👂",
         "c": "v",
         "py": "tīngdào",
         "hv": "thính đáo"
        },
        {
         "t": "他说话",
         "ico": "🗣️",
         "c": "o",
         "py": "tā shuōhuà",
         "hv": "tha thuyết thoại"
        }
       ],
       "traceWord": "听到",
       "py": "Wǒ tīngdào tā shuōhuà",
       "traceKey": "tingdao",
       "traceInfo": [
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "👨🙅💬",
       "full": "他不回答我",
       "vi": "Anh ấy không trả lời tôi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不回答",
         "ico": "🙅",
         "c": "v",
         "py": "bù huídá",
         "hv": "bất hồi đáp"
        },
        {
         "t": "我",
         "ico": "🧑",
         "c": "o",
         "py": "wǒ",
         "hv": "ngã"
        }
       ],
       "traceWord": "回答",
       "py": "Tā bù huídá wǒ",
       "traceKey": "huida",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "答",
         "py": "dá",
         "hv": "đáp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "谁告诉你这个字？",
       "qvi": "Ai đã nói cho bạn chữ này?",
       "scene": "🔤👩‍🏫",
       "ans": "老师告诉我",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "老师告诉我",
         "ico": "👩‍🏫",
         "py": "Lǎoshī gàosu wǒ"
        },
        {
         "txt": "他有两个姐姐",
         "ico": "👩",
         "py": "Tā yǒu liǎng gè jiějie"
        }
       ],
       "qpy": "Shéi gàosu nǐ zhè gè zì?"
      },
      {
       "q": "你问谁？",
       "qvi": "Bạn hỏi ai?",
       "scene": "🧑❓",
       "ans": "我问老师",
       "opts": [
        {
         "txt": "我不会忘你",
         "ico": "🧠",
         "py": "Wǒ bú huì wàng nǐ"
        },
        {
         "txt": "请你记这个名字",
         "ico": "📛",
         "py": "Qǐng nǐ jì zhè gè míngzi"
        },
        {
         "txt": "我问老师",
         "ico": "👩‍🏫",
         "py": "Wǒ wèn lǎoshī"
        }
       ],
       "qpy": "Nǐ wèn shéi?"
      },
      {
       "q": "你记住这个名字吗？",
       "qvi": "Bạn nhớ kỹ tên này không?",
       "scene": "📛🧠",
       "ans": "我记住他的名字",
       "opts": [
        {
         "txt": "我记住他的名字",
         "ico": "🧠",
         "py": "Wǒ jìzhù tā de míngzi"
        },
        {
         "txt": "我很高兴",
         "ico": "😊",
         "py": "Wǒ hěn gāoxìng"
        },
        {
         "txt": "我们再见吧",
         "ico": "👋",
         "py": "Wǒmen zàijiàn ba"
        }
       ],
       "qpy": "Nǐ jìzhù zhè gè míngzi ma?"
      },
      {
       "q": "你看到小明吗？",
       "qvi": "Bạn có thấy Tiểu Minh không?",
       "scene": "🧑👀👂",
       "ans": "我看到，也听见他说话",
       "opts": [
        {
         "txt": "他是我同学",
         "ico": "🎓",
         "py": "Tā shì wǒ tóngxué"
        },
        {
         "txt": "我看到，也听见他说话",
         "ico": "👀",
         "py": "Wǒ kàndào yě tīngjiàn tā shuōhuà"
        },
        {
         "txt": "我不是老师",
         "ico": "🙅",
         "py": "Wǒ bú shì lǎoshī"
        }
       ],
       "qpy": "Nǐ kàndào Xiǎomíng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi lại khi chưa hiểu trong cuộc họp",
      "steps": [
       "<b>Bước 1:</b> Đóng vai đồng nghiệp người Trung. Tự hỏi và trả lời thành tiếng 5 lần: <i>\"你是不是老师？\"</i>, <i>\"你知道不知道他？\"</i>, thay danh từ bằng người quen của bạn.",
       "<b>Bước 2:</b> Nhắn cho một người bạn: <i>\"你记得我的名字吗？\"</i> rồi tập nói <i>\"我忘记他的名字\"</i> khi bạn quên tên ai đó và cần hỏi lại.",
       "<b>Bước 3:</b> Khi đồng nghiệp nói nhanh, tập nói <i>\"你试一下儿\"</i> hoặc hỏi lại, rồi nhắc lại điều bạn <i>\"听到\"</i> để kiểm tra mình đã hiểu đúng chưa."
      ]
     }
    }
   ]
  },
  "1.4": {
   "lessons": [
    {
     "id": "1.4A",
     "name": "Bài 1.4A: Giá tiền, trả tiền",
     "grammar": {
      "formulas": [
       "📖 这本书 + 💰 三块 + 🪙 五毛",
       "❓ 这个书包 + 💰 多 + 🪙 少钱？",
       "🪙 一毛 + ⚡ 是 + 🔟 十分"
      ],
      "tip": "Khẩu ngữ nói 块 (kuài, khối) và 毛 (máo, mao); văn viết dùng 元 (yuán, nguyên) và 角. 1块 = 10毛 = 100分 (fēn, phân). Số cuối thường lược đơn vị: 三块五 = 3,5 tệ. Hỏi giá: 多少钱？",
      "vn_tip": "Người Việt hay nói \"bao nhiêu tiền\" theo thứ tự Việt, nhưng tiếng Trung phải là 多少钱 (không đảo). Đừng quên đơn vị tiền sau số: nói 三块, không chỉ nói 三."
     },
     "chunks": [
      {
       "scene": "👛💼👤",
       "full": "这是我的钱包",
       "vi": "Đây là ví của tôi",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的钱包",
         "ico": "👛",
         "c": "o",
         "py": "wǒ de qiánbāo",
         "hv": "ngã đích tiền bao"
        }
       ],
       "traceWord": "钱包",
       "py": "Zhè shì wǒ de qiánbāo",
       "traceKey": "qianbao",
       "traceInfo": [
        {
         "c": "钱",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        }
       ]
      },
      {
       "scene": "🎒💰😮",
       "full": "这个书包真贵",
       "vi": "Cái cặp này đắt thật",
       "parts": [
        {
         "t": "这个书包",
         "ico": "🎒",
         "c": "s",
         "py": "zhè gè shūbāo",
         "hv": "giá cá thư bao"
        },
        {
         "t": "真",
         "ico": "✨",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "贵",
         "ico": "💸",
         "c": "o",
         "py": "guì",
         "hv": "quý"
        }
       ],
       "traceWord": "真",
       "py": "Zhè gè shūbāo zhēn guì",
       "traceKey": "zhen",
       "traceInfo": [
        {
         "c": "真",
         "py": "zhēn",
         "hv": "chân"
        }
       ]
      },
      {
       "scene": "📖💵🪙",
       "full": "这本书三块五毛",
       "vi": "Quyển sách này ba tệ năm hào",
       "parts": [
        {
         "t": "这本书",
         "ico": "📖",
         "c": "s",
         "py": "zhè běn shū",
         "hv": "giá bản thư"
        },
        {
         "t": "三块",
         "ico": "💵",
         "c": "v",
         "py": "sān kuài",
         "hv": "tam khối"
        },
        {
         "t": "五毛",
         "ico": "🪙",
         "c": "o",
         "py": "wǔ máo",
         "hv": "ngũ mao"
        }
       ],
       "traceWord": "块",
       "py": "Zhè běn shū sān kuài wǔ máo",
       "traceKey": "kuai",
       "traceInfo": [
        {
         "c": "块",
         "py": "kuài",
         "hv": "khối"
        }
       ]
      },
      {
       "scene": "☕💴🏷️",
       "full": "杯子要八元",
       "vi": "Cái cốc giá tám tệ",
       "parts": [
        {
         "t": "杯子",
         "ico": "☕",
         "c": "s",
         "py": "bēizi",
         "hv": "bôi tử"
        },
        {
         "t": "要",
         "ico": "🏷️",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "八元",
         "ico": "💴",
         "c": "o",
         "py": "bā yuán",
         "hv": "bát nguyên"
        }
       ],
       "traceWord": "元",
       "py": "Bēizi yào bā yuán",
       "traceKey": "yuan",
       "traceInfo": [
        {
         "c": "元",
         "py": "yuán",
         "hv": "nguyên"
        }
       ]
      },
      {
       "scene": "🪙🟰🔟",
       "full": "一毛是十分",
       "vi": "Một hào bằng mười xu",
       "parts": [
        {
         "t": "一毛",
         "ico": "🪙",
         "c": "s",
         "py": "yī máo",
         "hv": "nhất mao"
        },
        {
         "t": "是",
         "ico": "🟰",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "十分",
         "ico": "🔟",
         "c": "o",
         "py": "shí fēn",
         "hv": "thập phân"
        }
       ],
       "traceWord": "分",
       "py": "Yī máo shì shí fēn",
       "traceKey": "fen",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        }
       ]
      },
      {
       "scene": "🧑🛍️🎒",
       "full": "我想买书包",
       "vi": "Tôi muốn mua cặp sách",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想买",
         "ico": "🛍️",
         "c": "v",
         "py": "xiǎng mǎi",
         "hv": "tưởng mãi"
        },
        {
         "t": "书包",
         "ico": "🎒",
         "c": "o",
         "py": "shūbāo",
         "hv": "thư bao"
        }
       ],
       "traceWord": "买",
       "py": "Wǒ xiǎng mǎi shūbāo",
       "traceKey": "mai",
       "traceInfo": [
        {
         "c": "买",
         "py": "mǎi",
         "hv": "mãi"
        }
       ]
      },
      {
       "scene": "👨🤝💯",
       "full": "他给我一百块",
       "vi": "Anh ấy đưa tôi một trăm tệ",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "给我",
         "ico": "🤝",
         "c": "v",
         "py": "gěi wǒ",
         "hv": "cấp ngã"
        },
        {
         "t": "一百块",
         "ico": "💯",
         "c": "o",
         "py": "yī bǎi kuài",
         "hv": "nhất bách khối"
        }
       ],
       "traceWord": "给",
       "py": "Tā gěi wǒ yī bǎi kuài",
       "traceKey": "gei",
       "traceInfo": [
        {
         "c": "给",
         "py": "gěi",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "🎒💸😲",
       "full": "书包非常贵",
       "vi": "Cái cặp rất đắt",
       "parts": [
        {
         "t": "书包",
         "ico": "🎒",
         "c": "s",
         "py": "shūbāo",
         "hv": "thư bao"
        },
        {
         "t": "非常",
         "ico": "🌟",
         "c": "v",
         "py": "fēicháng",
         "hv": "phi thường"
        },
        {
         "t": "贵",
         "ico": "💸",
         "c": "o",
         "py": "guì",
         "hv": "quý"
        }
       ],
       "traceWord": "非常",
       "py": "Shūbāo fēicháng guì",
       "traceKey": "feichang",
       "traceInfo": [
        {
         "c": "非",
         "py": "fēi",
         "hv": "phi"
        },
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个书包多少钱？",
       "qvi": "Cái cặp này bao nhiêu tiền?",
       "scene": "🎒💰❓",
       "ans": "一百块",
       "opts": [
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "一百块",
         "ico": "💯",
         "py": "Yī bǎi kuài"
        },
        {
         "txt": "他叫小明",
         "ico": "👦",
         "py": "Tā jiào Xiǎomíng"
        }
       ],
       "qpy": "Zhè gè shūbāo duōshao qián?"
      },
      {
       "q": "你的钱多吗？",
       "qvi": "Tiền của bạn có nhiều không?",
       "scene": "👛💵❓",
       "ans": "我的钱不太多",
       "opts": [
        {
         "txt": "我的钱不太多",
         "ico": "👛",
         "py": "Wǒ de qián bú tài duō"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "他们都是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen dōu shì xuéshēng"
        }
       ],
       "qpy": "Nǐ de qián duō ma?"
      },
      {
       "q": "八十块，少一点儿吧？",
       "qvi": "80 tệ, bớt một chút nhé?",
       "scene": "💵✂️🙏",
       "ans": "好，七十块",
       "opts": [
        {
         "txt": "我叫小明",
         "ico": "👦",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "再见",
         "ico": "👋",
         "py": "Zàijiàn"
        },
        {
         "txt": "好，七十块",
         "ico": "💵",
         "py": "Hǎo qī shí kuài"
        }
       ],
       "qpy": "Bā shí kuài shǎo yīdiǎnr ba?"
      },
      {
       "q": "这个钱包贵不贵？",
       "qvi": "Cái ví này có đắt không?",
       "scene": "👛💸❓",
       "ans": "非常贵",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他是老师",
         "ico": "👨‍🏫",
         "py": "Tā shì lǎoshī"
        },
        {
         "txt": "非常贵",
         "ico": "💸",
         "py": "Fēicháng guì"
        }
       ],
       "qpy": "Zhè gè qiánbāo guì bú guì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi giá khi đi mua đồ",
      "steps": [
       "<b>Bước 1:</b> Chọn 5 món đồ trong nhà (ví, cặp, sách, cốc...). Với mỗi món, tự hỏi thành tiếng <i>\"这个书包多少钱？\"</i> rồi tự đặt giá, ví dụ <i>\"一百块\"</i>.",
       "<b>Bước 2:</b> Nói giá có số lẻ như người bán hàng: <i>\"这本书三块五毛\"</i>, <i>\"杯子要八元\"</i>. Nhớ 1 块 = 10 毛.",
       "<b>Bước 3:</b> Đóng vai mặc cả: nhắn hoặc nói với bạn đồng nghiệp <i>\"八十块，少一点儿吧？\"</i> rồi đáp <i>\"好，七十块\"</i>. Lặp lại với 3 mức giá khác nhau."
      ]
     }
    },
    {
     "id": "1.4B",
     "name": "Bài 1.4B: Mua quần áo, so sánh giá",
     "grammar": {
      "formulas": [
       "🅰️ 这个 + ⚖️ 比 + 🅱️ 那个 + 💸 贵",
       "🅰️ 我的汉语 + ⚖️ 比 + 🅱️ 他 + 👎 差",
       "🅰️ 这两个书包 + 🟰 都 + ✅ 一样"
      ],
      "tip": "So sánh hơn: A 比 (bǐ, tỉ) B + tính từ. Tính từ đứng ngay sau B, không thêm 很 vào trước tính từ: nói 比他高, không nói 比他很高. Nếu hai thứ giống nhau dùng 一样 (yīyàng, nhất dạng).",
      "vn_tip": "Tiếng Việt nói \"A đắt hơn B\", người Việt hay dịch thành \"A 贵 比 B\". Đúng là A 比 B 贵: chữ 比 đặt giữa hai vế, tính từ ở cuối câu."
     },
     "chunks": [
      {
       "scene": "🧑👀👕",
       "full": "我想看衣服",
       "vi": "Tôi muốn xem quần áo",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想看",
         "ico": "👀",
         "c": "v",
         "py": "xiǎng kàn",
         "hv": "tưởng khán"
        },
        {
         "t": "衣服",
         "ico": "👕",
         "c": "o",
         "py": "yīfu",
         "hv": "y phục"
        }
       ],
       "traceWord": "衣服",
       "py": "Wǒ xiǎng kàn yīfu",
       "traceKey": "yifu",
       "traceInfo": [
        {
         "c": "衣",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "服",
         "py": "fu",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "🏪👗✨",
       "full": "商店有新衣服",
       "vi": "Cửa hàng có quần áo mới",
       "parts": [
        {
         "t": "商店",
         "ico": "🏪",
         "c": "s",
         "py": "shāngdiàn",
         "hv": "thương điếm"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "新衣服",
         "ico": "👗",
         "c": "o",
         "py": "xīn yīfu",
         "hv": "tân y phục"
        }
       ],
       "traceWord": "商店",
       "py": "Shāngdiàn yǒu xīn yīfu",
       "traceKey": "shangdian",
       "traceInfo": [
        {
         "c": "商",
         "py": "shāng",
         "hv": "thương"
        },
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "🏬📦😊",
       "full": "商场的东西很多",
       "vi": "Đồ trong trung tâm thương mại rất nhiều",
       "parts": [
        {
         "t": "商场的东西",
         "ico": "🏬",
         "c": "s",
         "py": "shāngchǎng de dōngxi",
         "hv": "thương trường đích đông tây"
        },
        {
         "t": "很",
         "ico": "🌟",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "多",
         "ico": "📦",
         "c": "o",
         "py": "duō",
         "hv": "đa"
        }
       ],
       "traceWord": "商场",
       "py": "Shāngchǎng de dōngxi hěn duō",
       "traceKey": "shangchang",
       "traceInfo": [
        {
         "c": "商",
         "py": "shāng",
         "hv": "thương"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🧑🛍️📦",
       "full": "我想买一些东西",
       "vi": "Tôi muốn mua một ít đồ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想买",
         "ico": "🛍️",
         "c": "v",
         "py": "xiǎng mǎi",
         "hv": "tưởng mãi"
        },
        {
         "t": "一些东西",
         "ico": "📦",
         "c": "o",
         "py": "yīxiē dōngxi",
         "hv": "nhất ta đông tây"
        }
       ],
       "traceWord": "一些",
       "py": "Wǒ xiǎng mǎi yīxiē dōngxi",
       "traceKey": "yixie",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "些",
         "py": "xiē",
         "hv": "ta"
        }
       ]
      },
      {
       "scene": "👕⚖️👔",
       "full": "这个比那个贵",
       "vi": "Cái này đắt hơn cái kia",
       "parts": [
        {
         "t": "这个",
         "ico": "👕",
         "c": "s",
         "py": "zhè gè",
         "hv": "giá cá"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "那个贵",
         "ico": "💸",
         "c": "o",
         "py": "nà gè guì",
         "hv": "na cá quý"
        }
       ],
       "traceWord": "比",
       "py": "Zhè gè bǐ nà gè guì",
       "traceKey": "bi",
       "traceInfo": [
        {
         "c": "比",
         "py": "bǐ",
         "hv": "tỷ"
        }
       ]
      },
      {
       "scene": "🧑📚👎",
       "full": "我的汉语比他差",
       "vi": "Tiếng Hán của tôi kém hơn anh ấy",
       "parts": [
        {
         "t": "我的汉语",
         "ico": "🇨🇳",
         "c": "s",
         "py": "wǒ de Hànyǔ",
         "hv": "ngã đích hán ngữ"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "他差",
         "ico": "👎",
         "c": "o",
         "py": "tā chà",
         "hv": "tha sai"
        }
       ],
       "traceWord": "差",
       "py": "Wǒ de Hànyǔ bǐ tā chà",
       "traceKey": "cha",
       "traceInfo": [
        {
         "c": "差",
         "py": "chà",
         "hv": "sai"
        }
       ]
      },
      {
       "scene": "👩👗✨",
       "full": "她要穿新衣服",
       "vi": "Cô ấy sắp mặc quần áo mới",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "要穿",
         "ico": "👗",
         "c": "v",
         "py": "yào chuān",
         "hv": "yếu xuyên"
        },
        {
         "t": "新衣服",
         "ico": "✨",
         "c": "o",
         "py": "xīn yīfu",
         "hv": "tân y phục"
        }
       ],
       "traceWord": "穿",
       "py": "Tā yào chuān xīn yīfu",
       "traceKey": "chuan",
       "traceInfo": [
        {
         "c": "穿",
         "py": "chuān",
         "hv": "xuyên"
        }
       ]
      },
      {
       "scene": "🎒🎒🟰",
       "full": "这两个书包都一样",
       "vi": "Hai cái cặp này đều giống nhau",
       "parts": [
        {
         "t": "这两个书包",
         "ico": "🎒",
         "c": "s",
         "py": "zhè liǎng gè shūbāo",
         "hv": "giá lưỡng cá thư bao"
        },
        {
         "t": "都",
         "ico": "👥",
         "c": "v",
         "py": "dōu",
         "hv": "đô"
        },
        {
         "t": "一样",
         "ico": "🟰",
         "c": "o",
         "py": "yīyàng",
         "hv": "nhất dạng"
        }
       ],
       "traceWord": "一样",
       "py": "Zhè liǎng gè shūbāo dōu yīyàng",
       "traceKey": "yiyang",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "样",
         "py": "yàng",
         "hv": "dạng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你要这个吗？",
       "qvi": "Bạn lấy cái này không?",
       "scene": "👕🙋❓",
       "ans": "不要，我想看别的",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "不要，我想看别的",
         "ico": "👀",
         "py": "Bú yào wǒ xiǎng kàn biéde"
        },
        {
         "txt": "他叫小明",
         "ico": "👦",
         "py": "Tā jiào Xiǎomíng"
        }
       ],
       "qpy": "Nǐ yào zhè gè ma?"
      },
      {
       "q": "衣服都新吗？",
       "qvi": "Quần áo đều mới cả à?",
       "scene": "👕✨❓",
       "ans": "有的新",
       "opts": [
        {
         "txt": "有的新",
         "ico": "✨",
         "py": "Yǒude xīn"
        },
        {
         "txt": "我叫小明",
         "ico": "👦",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        }
       ],
       "qpy": "Yīfu dōu xīn ma?"
      },
      {
       "q": "你的书包比我的新吗？",
       "qvi": "Cặp của bạn mới hơn cặp của tôi à?",
       "scene": "🎒⚖️🎒",
       "ans": "一样新",
       "opts": [
        {
         "txt": "再见",
         "ico": "👋",
         "py": "Zàijiàn"
        },
        {
         "txt": "一样新",
         "ico": "🟰",
         "py": "Yīyàng xīn"
        },
        {
         "txt": "我很高兴",
         "ico": "😊",
         "py": "Wǒ hěn gāoxìng"
        }
       ],
       "qpy": "Nǐ de shūbāo bǐ wǒ de xīn ma?"
      },
      {
       "q": "商店的东西贵不贵？",
       "qvi": "Đồ ở cửa hàng có đắt không?",
       "scene": "🏪📦❓",
       "ans": "比商场贵",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他是我朋友",
         "ico": "🧑‍🤝‍🧑",
         "py": "Tā shì wǒ péngyou"
        },
        {
         "txt": "比商场贵",
         "ico": "💸",
         "py": "Bǐ shāngchǎng guì"
        }
       ],
       "qpy": "Shāngdiàn de dōngxi guì bú guì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): So sánh hai món đồ trước khi mua",
      "steps": [
       "<b>Bước 1:</b> Mở một trang mua sắm (hoặc nhìn hai món đồ trong nhà). Chọn 3 cặp đồ và nói thành tiếng cái nào đắt hơn: <i>\"这个比那个贵\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp: <i>\"我想买一些东西，你想看商场吗？\"</i> rồi so sánh một cặp khác bằng mẫu <i>\"A 比 B + tính từ\"</i>.",
       "<b>Bước 3:</b> Đóng vai khách trong cửa hàng, từ chối một món và nói <i>\"不要，我想看别的\"</i>; sau đó hỏi nhân viên xem hai món có <i>\"一样\"</i> không."
      ]
     }
    },
    {
     "id": "1.4C",
     "name": "Bài 1.4C: Đồ dùng văn phòng, sách vở",
     "grammar": {
      "formulas": [
       "🔢 一 + 📖 本 + 📚 书",
       "🔢 一 + 🏪 间 + 📚 书店",
       "🔢 一百 + 📄 页"
      ],
      "tip": "Số + lượng từ + danh từ. 本 (běn, bản) dùng cho sách, vở; 间 (jiān, gian) dùng cho phòng, cửa hàng; 页 (yè, hiệt) là trang sách. Dùng 两 (không dùng 二) trước lượng từ: 两本书.",
      "vn_tip": "Tiếng Việt nói \"quyển sách\" hay \"cuốn sách\" đều được, nhưng tiếng Trung phải chọn đúng lượng từ: sách là 本, không dùng 个 cho mọi thứ. Đặt số ở trước: 一本书, không nói 书一本."
     },
     "chunks": [
      {
       "scene": "🧑📖✅",
       "full": "我有一本书",
       "vi": "Tôi có một quyển sách",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一本书",
         "ico": "📖",
         "c": "o",
         "py": "yī běn shū",
         "hv": "nhất bản thư"
        }
       ],
       "traceWord": "本",
       "py": "Wǒ yǒu yī běn shū",
       "traceKey": "ben",
       "traceInfo": [
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "🪑👉🧑",
       "full": "这是我的桌子",
       "vi": "Đây là bàn của tôi",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的桌子",
         "ico": "🪑",
         "c": "o",
         "py": "wǒ de zhuōzi",
         "hv": "ngã đích trác tử"
        }
       ],
       "traceWord": "桌子",
       "py": "Zhè shì wǒ de zhuōzi",
       "traceKey": "zhuozi",
       "traceInfo": [
        {
         "c": "桌",
         "py": "zhuō",
         "hv": "trác"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👨📓📓",
       "full": "他有两个本子",
       "vi": "Anh ấy có hai quyển vở",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两个本子",
         "ico": "📓",
         "c": "o",
         "py": "liǎng gè běnzi",
         "hv": "lưỡng cá bản tử"
        }
       ],
       "traceWord": "本子",
       "py": "Tā yǒu liǎng gè běnzi",
       "traceKey": "benzi",
       "traceInfo": [
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🧑🔍📘",
       "full": "我找我的课本",
       "vi": "Tôi tìm sách giáo khoa của tôi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "找",
         "ico": "🔍",
         "c": "v",
         "py": "zhǎo",
         "hv": "trảo"
        },
        {
         "t": "我的课本",
         "ico": "📘",
         "c": "o",
         "py": "wǒ de kèběn",
         "hv": "ngã đích khóa bản"
        }
       ],
       "traceWord": "找",
       "py": "Wǒ zhǎo wǒ de kèběn",
       "traceKey": "zhao",
       "traceInfo": [
        {
         "c": "找",
         "py": "zhǎo",
         "hv": "trảo"
        }
       ]
      },
      {
       "scene": "🏪📚😊",
       "full": "这间书店很大",
       "vi": "Hiệu sách này rất lớn",
       "parts": [
        {
         "t": "这间书店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiān shūdiàn",
         "hv": "giá gian thư điếm"
        },
        {
         "t": "很",
         "ico": "🌟",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "大",
         "ico": "🏛️",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "书店",
       "py": "Zhè jiān shūdiàn hěn dà",
       "traceKey": "shudian",
       "traceInfo": [
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "📖📄💯",
       "full": "这本书有一百页",
       "vi": "Quyển sách này có một trăm trang",
       "parts": [
        {
         "t": "这本书",
         "ico": "📖",
         "c": "s",
         "py": "zhè běn shū",
         "hv": "giá bản thư"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一百页",
         "ico": "📄",
         "c": "o",
         "py": "yī bǎi yè",
         "hv": "nhất bách hiệt"
        }
       ],
       "traceWord": "页",
       "py": "Zhè běn shū yǒu yī bǎi yè",
       "traceKey": "ye",
       "traceInfo": [
        {
         "c": "页",
         "py": "yè",
         "hv": "hiệt"
        }
       ]
      },
      {
       "scene": "🧑🛍️👜",
       "full": "我想买一个包",
       "vi": "Tôi muốn mua một cái túi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想买",
         "ico": "🛍️",
         "c": "v",
         "py": "xiǎng mǎi",
         "hv": "tưởng mãi"
        },
        {
         "t": "一个包",
         "ico": "👜",
         "c": "o",
         "py": "yī gè bāo",
         "hv": "nhất cá bao"
        }
       ],
       "traceWord": "包",
       "py": "Wǒ xiǎng mǎi yī gè bāo",
       "traceKey": "bao",
       "traceInfo": [
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        }
       ]
      },
      {
       "scene": "☕✨😊",
       "full": "这个杯子很新",
       "vi": "Cái cốc này rất mới",
       "parts": [
        {
         "t": "这个杯子",
         "ico": "☕",
         "c": "s",
         "py": "zhè gè bēizi",
         "hv": "giá cá bôi tử"
        },
        {
         "t": "很",
         "ico": "🌟",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "新",
         "ico": "✨",
         "c": "o",
         "py": "xīn",
         "hv": "tân"
        }
       ],
       "traceWord": "杯子",
       "py": "Zhè gè bēizi hěn xīn",
       "traceKey": "beizi",
       "traceInfo": [
        {
         "c": "杯",
         "py": "bēi",
         "hv": "bôi"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你找什么？",
       "qvi": "Bạn tìm gì?",
       "scene": "🧑🔍❓",
       "ans": "我找我的书包",
       "opts": [
        {
         "txt": "我找我的书包",
         "ico": "🎒",
         "py": "Wǒ zhǎo wǒ de shūbāo"
        },
        {
         "txt": "我是你的老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì nǐ de lǎoshī"
        },
        {
         "txt": "他们都是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen dōu shì xuéshēng"
        }
       ],
       "qpy": "Nǐ zhǎo shénme?"
      },
      {
       "q": "你想买花吗？",
       "qvi": "Bạn muốn mua hoa không?",
       "scene": "🧑💐❓",
       "ans": "好，我想买花",
       "opts": [
        {
         "txt": "不客气，再见",
         "ico": "👋",
         "py": "Bù kèqì zàijiàn"
        },
        {
         "txt": "好，我想买花",
         "ico": "💐",
         "py": "Hǎo wǒ xiǎng mǎi huā"
        },
        {
         "txt": "对不起，我不认识他",
         "ico": "🙇",
         "py": "Duìbuqǐ wǒ bú rènshi tā"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi huā ma?"
      },
      {
       "q": "你有几本书？",
       "qvi": "Bạn có mấy quyển sách?",
       "scene": "🧑📚❓",
       "ans": "我有十本书",
       "opts": [
        {
         "txt": "我叫小明",
         "ico": "👦",
         "py": "Wǒ jiào Xiǎomíng"
        },
        {
         "txt": "我是你的同学",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì nǐ de tóngxué"
        },
        {
         "txt": "我有十本书",
         "ico": "📚",
         "py": "Wǒ yǒu shí běn shū"
        }
       ],
       "qpy": "Nǐ yǒu jǐ běn shū?"
      },
      {
       "q": "这个本子多少钱？",
       "qvi": "Quyển vở này bao nhiêu tiền?",
       "scene": "📓💰❓",
       "ans": "五块",
       "opts": [
        {
         "txt": "五块",
         "ico": "💵",
         "py": "Wǔ kuài"
        },
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "再见",
         "ico": "👋",
         "py": "Zàijiàn"
        }
       ],
       "qpy": "Zhè gè běnzi duōshao qián?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua đồ dùng ở hiệu sách",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh bàn làm việc, đếm thành tiếng đồ của bạn với lượng từ đúng: <i>\"我有一本书\"</i>, <i>\"他有两个本子\"</i>.",
       "<b>Bước 2:</b> Đóng vai khách vào hiệu sách, nhờ nhân viên giúp: <i>\"我找我的课本\"</i>, rồi hỏi giá <i>\"这个本子多少钱？\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp kể bạn vừa đi hiệu sách: <i>\"这间书店很大\"</i>, <i>\"这本书有一百页\"</i>. Viết thêm 2 câu tự nghĩ với 本 và 间."
      ]
     }
    }
   ]
  },
  "1.5": {
   "lessons": [
    {
     "id": "1.5A",
     "name": "Bài 1.5A: Giờ giấc, các buổi trong ngày",
     "grammar": {
      "formulas": [
       "⏰ 现在 + ⚡ 是 + 🕒 三点",
       "❓ 现在 + 几 + 点？",
       "🕒 两点 + 半"
      ],
      "tip": "Nói giờ: số + 点 (diǎn, điểm) = giờ; 半 (bàn, bán) = rưỡi. Ví dụ 两点半 = 2 giờ rưỡi. Hỏi giờ dùng 几点. Từ chỉ thời gian (早上, 下午, 晚上…) đứng trước động từ, thường ngay sau chủ ngữ.",
      "vn_tip": "Người Việt hay nói \"hai giờ\" thành 二点 (sai). Giờ 2 phải dùng 两点 (liǎng diǎn). Ngoài ra thời gian đứng TRƯỚC động từ: 我早上学汉语, không nói 我学汉语早上."
     },
     "chunks": [
      {
       "scene": "⏰🕒",
       "full": "我有半天时间",
       "vi": "Tôi có nửa ngày rảnh",
       "parts": [
        {
         "t": "我",
         "ico": "⏰",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "半天时间",
         "ico": "🕒",
         "c": "o",
         "py": "bàntiān shíjiān",
         "hv": "bán thiên thời gian"
        }
       ],
       "traceWord": "半天",
       "py": "Wǒ yǒu bàntiān shíjiān",
       "traceKey": "bantian",
       "traceInfo": [
        {
         "c": "半",
         "py": "bàn",
         "hv": "bán"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "⏰❓🕒",
       "full": "现在几点",
       "vi": "Bây giờ là mấy giờ?",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "几",
         "ico": "❓",
         "c": "o",
         "py": "jǐ",
         "hv": "kỷ"
        },
        {
         "t": "点",
         "ico": "🕒",
         "c": "v",
         "py": "diǎn",
         "hv": "điểm"
        }
       ],
       "traceWord": "现在",
       "py": "Xiànzài jǐ diǎn",
       "traceKey": "xianzai",
       "traceInfo": [
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        },
        {
         "c": "在",
         "py": "zài",
         "hv": "tại"
        }
       ]
      },
      {
       "scene": "🕑⏰",
       "full": "现在是两点半",
       "vi": "Bây giờ là hai giờ rưỡi",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "两点半",
         "ico": "🕑",
         "c": "o",
         "py": "liǎng diǎn bàn",
         "hv": "lưỡng điểm bán"
        }
       ],
       "traceWord": "半",
       "py": "Xiànzài shì liǎng diǎn bàn",
       "traceKey": "ban",
       "traceInfo": [
        {
         "c": "半",
         "py": "bàn",
         "hv": "bán"
        }
       ]
      },
      {
       "scene": "🌅🧑📖",
       "full": "我早上学汉语",
       "vi": "Buổi sáng tôi học tiếng Trung",
       "parts": [
        {
         "t": "我早上",
         "ico": "🌅",
         "c": "s",
         "py": "wǒ zǎoshang",
         "hv": "ngã tảo thượng"
        },
        {
         "t": "学",
         "ico": "📖",
         "c": "v",
         "py": "xué",
         "hv": "học"
        },
        {
         "t": "汉语",
         "ico": "🇨🇳",
         "c": "o",
         "py": "Hànyǔ",
         "hv": "hán ngữ"
        }
       ],
       "traceWord": "早上",
       "py": "Wǒ zǎoshang xué Hànyǔ",
       "traceKey": "zaoshang",
       "traceInfo": [
        {
         "c": "早",
         "py": "zǎo",
         "hv": "tảo"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "☀️🧑📚",
       "full": "他中午想买书",
       "vi": "Buổi trưa anh ấy muốn mua sách",
       "parts": [
        {
         "t": "他中午",
         "ico": "☀️",
         "c": "s",
         "py": "tā zhōngwǔ",
         "hv": "tha trung ngọ"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "买书",
         "ico": "📚",
         "c": "o",
         "py": "mǎi shū",
         "hv": "mãi thư"
        }
       ],
       "traceWord": "中午",
       "py": "Tā zhōngwǔ xiǎng mǎi shū",
       "traceKey": "zhongwu",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "午",
         "py": "wǔ",
         "hv": "ngọ"
        }
       ]
      },
      {
       "scene": "🌤️🧑⏳",
       "full": "下午你有时间吗",
       "vi": "Chiều bạn có thời gian không?",
       "parts": [
        {
         "t": "下午你",
         "ico": "🌤️",
         "c": "s",
         "py": "xiàwǔ nǐ",
         "hv": "hạ ngọ nễ"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "时间吗",
         "ico": "⏳",
         "c": "o",
         "py": "shíjiān ma",
         "hv": "thời gian ma"
        }
       ],
       "traceWord": "时间",
       "py": "Xiàwǔ nǐ yǒu shíjiān ma",
       "traceKey": "shijian",
       "traceInfo": [
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        },
        {
         "c": "间",
         "py": "jiān",
         "hv": "gian"
        }
       ]
      },
      {
       "scene": "🌤️👫🤝",
       "full": "上午我们见面吧",
       "vi": "Sáng nay chúng ta gặp nhau nhé",
       "parts": [
        {
         "t": "上午我们",
         "ico": "🌤️",
         "c": "s",
         "py": "shàngwǔ wǒmen",
         "hv": "thượng ngọ ngã môn"
        },
        {
         "t": "见面",
         "ico": "🤝",
         "c": "v",
         "py": "jiànmiàn",
         "hv": "kiến diện"
        },
        {
         "t": "吧",
         "ico": "👍",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "上午",
       "py": "Shàngwǔ wǒmen jiànmiàn ba",
       "traceKey": "shangwu",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "午",
         "py": "wǔ",
         "hv": "ngọ"
        }
       ]
      },
      {
       "scene": "🌞🧑📖⏱️",
       "full": "白天他学习几个小时",
       "vi": "Ban ngày anh ấy học mấy tiếng?",
       "parts": [
        {
         "t": "白天他",
         "ico": "🌞",
         "c": "s",
         "py": "báitiān tā",
         "hv": "bạch thiên tha"
        },
        {
         "t": "学习",
         "ico": "📖",
         "c": "v",
         "py": "xuéxí",
         "hv": "học tập"
        },
        {
         "t": "几个小时",
         "ico": "⏱️",
         "c": "o",
         "py": "jǐ gè xiǎoshí",
         "hv": "kỷ cá tiểu thời"
        }
       ],
       "traceWord": "小时",
       "py": "Báitiān tā xuéxí jǐ gè xiǎoshí",
       "traceKey": "xiaoshi",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "现在晚吗？",
       "qvi": "Bây giờ có muộn không?",
       "scene": "⏰🌙❓",
       "ans": "现在很晚",
       "opts": [
        {
         "txt": "我有两个朋友",
         "ico": "👫",
         "py": "Wǒ yǒu liǎng gè péngyou"
        },
        {
         "txt": "现在很晚",
         "ico": "🌙",
         "py": "Xiànzài hěn wǎn"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Xiànzài wǎn ma?"
      },
      {
       "q": "你什么时候学习汉语？",
       "qvi": "Khi nào bạn học tiếng Trung?",
       "scene": "🧑📖🌙",
       "ans": "我晚上学习汉语",
       "opts": [
        {
         "txt": "我晚上学习汉语",
         "ico": "🌙",
         "py": "Wǒ wǎnshang xuéxí Hànyǔ"
        },
        {
         "txt": "这是我的书包",
         "ico": "🎒",
         "py": "Zhè shì wǒ de shūbāo"
        },
        {
         "txt": "他们是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen shì xuéshēng"
        }
       ],
       "qpy": "Nǐ shénme shíhou xuéxí Hànyǔ?"
      },
      {
       "q": "你想学习一会儿吗？",
       "qvi": "Bạn có muốn học một lát không?",
       "scene": "🧑📖⏳",
       "ans": "好，我先学习一会儿",
       "opts": [
        {
         "txt": "对不起，我不是老师",
         "ico": "🙇",
         "py": "Duìbuqǐ wǒ bú shì lǎoshī"
        },
        {
         "txt": "谢谢，不客气",
         "ico": "🙏",
         "py": "Xièxie bù kèqì"
        },
        {
         "txt": "好，我先学习一会儿",
         "ico": "👍",
         "py": "Hǎo wǒ xiān xuéxí yīhuìr"
        }
       ],
       "qpy": "Nǐ xiǎng xuéxí yīhuìr ma?"
      },
      {
       "q": "老师早！",
       "qvi": "Chào cô giáo buổi sáng!",
       "scene": "👨‍🏫🌅",
       "ans": "你们早，请坐",
       "opts": [
        {
         "txt": "我是学生，不是老师",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng bú shì lǎoshī"
        },
        {
         "txt": "你们早，请坐",
         "ico": "🪑",
         "py": "Nǐmen zǎo qǐng zuò"
        },
        {
         "txt": "对不起，没关系",
         "ico": "🙇",
         "py": "Duìbuqǐ méi guānxi"
        }
       ],
       "qpy": "Lǎoshī zǎo"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn giờ gặp đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhìn đồng hồ điện thoại và tự hỏi, trả lời thành tiếng 5 lần với các giờ khác nhau: <i>\"现在几点？\"</i> <i>\"现在是两点半。\"</i>",
       "<b>Bước 2:</b> Viết tin nhắn cho một đồng nghiệp hoặc bạn học: hỏi xem buổi nào họ rảnh, ví dụ <i>\"下午你有时间吗？\"</i>",
       "<b>Bước 3:</b> Hẹn giờ cụ thể bằng tiếng Trung và nói to lịch của mình: <i>\"我们晚上见面吧。\"</i> rồi kể 3 việc bạn làm vào buổi sáng, trưa, tối với <i>\"我早上…\"</i>"
      ]
     }
    },
    {
     "id": "1.5B",
     "name": "Bài 1.5B: Ngày tháng, thứ trong tuần, sinh nhật",
     "grammar": {
      "formulas": [
       "📅 三 + 月 + 五 + 号",
       "📆 今天 + 星期 + 几？",
       "🎂 后天 + 是 + 我的生日"
      ],
      "tip": "Ngày tháng đi từ lớn đến nhỏ: 年 (nián, niên) → 月 (yuè, nguyệt) → 号/日 (hào/rì, hiệu/nhật). Văn nói dùng 号, văn viết dùng 日. Thứ: 星期 + số (星期一…星期六), Chủ nhật là 星期天 hoặc 星期日. Hỏi: 几月几号, 星期几.",
      "vn_tip": "Người Việt hay đặt \"ngày\" trước \"tháng\" (ngày 5 tháng 3). Tiếng Trung đảo lại: 三月五号 (tháng trước, ngày sau). Câu có ngày tháng hoặc thứ thường không cần 是 khi nói về thứ: 今天星期天, nhưng vẫn nói được 今天是星期天."
     },
     "chunks": [
      {
       "scene": "📅🧑",
       "full": "今天是星期天",
       "vi": "Hôm nay là Chủ nhật",
       "parts": [
        {
         "t": "今天",
         "ico": "📅",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "星期天",
         "ico": "🛋️",
         "c": "o",
         "py": "xīngqītiān",
         "hv": "tinh kỳ thiên"
        }
       ],
       "traceWord": "星期天",
       "py": "Jīntiān shì xīngqītiān",
       "traceKey": "xingqitian",
       "traceInfo": [
        {
         "c": "星",
         "py": "xīng",
         "hv": "tinh"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "📆➡️",
       "full": "明天是星期日",
       "vi": "Ngày mai là Chủ nhật",
       "parts": [
        {
         "t": "明天",
         "ico": "📆",
         "c": "s",
         "py": "míngtiān",
         "hv": "minh thiên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "星期日",
         "ico": "🛋️",
         "c": "o",
         "py": "xīngqīrì",
         "hv": "tinh kỳ nhật"
        }
       ],
       "traceWord": "明天",
       "py": "Míngtiān shì xīngqīrì",
       "traceKey": "mingtian",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "🧑✋3️⃣⏳",
       "full": "我有三天时间",
       "vi": "Tôi có ba ngày thời gian",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三天时间",
         "ico": "⏳",
         "c": "o",
         "py": "sān tiān shíjiān",
         "hv": "tam thiên thời gian"
        }
       ],
       "traceWord": "天",
       "py": "Wǒ yǒu sān tiān shíjiān",
       "traceKey": "tian",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "📆❓",
       "full": "今天是好日子",
       "vi": "Hôm nay là ngày tốt",
       "parts": [
        {
         "t": "今天",
         "ico": "📆",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "是",
         "ico": "🗓️",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "好日子",
         "ico": "❓",
         "c": "o",
         "py": "hǎo rì zi",
         "hv": "hảo nhật tử"
        }
       ],
       "traceWord": "日子",
       "py": "Jīntiān shì hǎo rì zi",
       "traceKey": "rizi",
       "traceInfo": [
        {
         "c": "日",
         "py": "rì",
         "hv": "nhật"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "⏩🎂🎁",
       "full": "后天是我的生日",
       "vi": "Ngày kia là sinh nhật của tôi",
       "parts": [
        {
         "t": "后天",
         "ico": "⏩",
         "c": "s",
         "py": "hòutiān",
         "hv": "hậu thiên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的生日",
         "ico": "🎂",
         "c": "o",
         "py": "wǒ de shēngrì",
         "hv": "ngã đích sinh nhật"
        }
       ],
       "traceWord": "后天",
       "py": "Hòutiān shì wǒ de shēngrì",
       "traceKey": "houtian",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "⏪⏪📅",
       "full": "前天是七月八日",
       "vi": "Hôm kia là ngày 8 tháng 7",
       "parts": [
        {
         "t": "前天",
         "ico": "⏪",
         "c": "s",
         "py": "qiántiān",
         "hv": "tiền thiên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "七月八日",
         "ico": "📅",
         "c": "o",
         "py": "qī yuè bā rì",
         "hv": "thất nguyệt bát nhật"
        }
       ],
       "traceWord": "前天",
       "py": "Qiántiān shì qī yuè bā rì",
       "traceKey": "qiantian",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "🗓️🧑",
       "full": "现在是二〇二六年",
       "vi": "Bây giờ là năm 2026",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "二〇二六年",
         "ico": "🗓️",
         "c": "o",
         "py": "èr líng èr liù nián",
         "hv": "nhị linh nhị lục niên"
        }
       ],
       "traceWord": "年",
       "py": "Xiànzài shì èr líng èr liù nián",
       "traceKey": "nian",
       "traceInfo": [
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "📅📝❓",
       "full": "今天的日期是几号",
       "vi": "Ngày hôm nay là ngày mấy?",
       "parts": [
        {
         "t": "今天的日期",
         "ico": "📝",
         "c": "s",
         "py": "jīntiān de rìqī",
         "hv": "kim thiên đích nhật kỳ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "几号",
         "ico": "❓",
         "c": "o",
         "py": "jǐ hào",
         "hv": "kỷ hiệu"
        }
       ],
       "traceWord": "日期",
       "py": "Jīntiān de rìqī shì jǐ hào",
       "traceKey": "riqi",
       "traceInfo": [
        {
         "c": "日",
         "py": "rì",
         "hv": "nhật"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的生日是几月几号？",
       "qvi": "Sinh nhật bạn là ngày mấy tháng mấy?",
       "scene": "🎂❓",
       "ans": "我的生日是五月二号",
       "opts": [
        {
         "txt": "我有两个哥哥",
         "ico": "👦",
         "py": "Wǒ yǒu liǎng gè gēge"
        },
        {
         "txt": "我的生日是五月二号",
         "ico": "🎂",
         "py": "Wǒ de shēngrì shì wǔ yuè èr hào"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐ de shēngrì shì jǐ yuè jǐ hào?"
      },
      {
       "q": "明天星期几？",
       "qvi": "Ngày mai là thứ mấy?",
       "scene": "📆❓",
       "ans": "明天是星期五",
       "opts": [
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "我想买一本书",
         "ico": "📚",
         "py": "Wǒ xiǎng mǎi yī běn shū"
        },
        {
         "txt": "明天是星期五",
         "ico": "📆",
         "py": "Míngtiān shì xīngqī wǔ"
        }
       ],
       "qpy": "Míngtiān xīngqī jǐ?"
      },
      {
       "q": "昨天是几号？",
       "qvi": "Hôm qua là ngày mấy?",
       "scene": "⏪📅",
       "ans": "昨天是十号",
       "opts": [
        {
         "txt": "昨天是十号",
         "ico": "🔟",
         "py": "Zuótiān shì shí hào"
        },
        {
         "txt": "我的朋友很高",
         "ico": "🧍",
         "py": "Wǒ de péngyou hěn gāo"
        },
        {
         "txt": "他们是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen shì xuéshēng"
        }
       ],
       "qpy": "Zuótiān shì jǐ hào?"
      },
      {
       "q": "前天是星期几？",
       "qvi": "Hôm kia là thứ mấy?",
       "scene": "⏪⏪🗓️",
       "ans": "前天是星期三",
       "opts": [
        {
         "txt": "这是你的钱包",
         "ico": "👛",
         "py": "Zhè shì nǐ de qiánbāo"
        },
        {
         "txt": "前天是星期三",
         "ico": "🗓️",
         "py": "Qiántiān shì xīngqī sān"
        },
        {
         "txt": "她是我的妈妈",
         "ico": "👩",
         "py": "Tā shì wǒ de māma"
        }
       ],
       "qpy": "Qiántiān shì xīngqī jǐ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi ngày và chốt lịch sinh nhật",
      "steps": [
       "<b>Bước 1:</b> Mở lịch trên điện thoại, nói to ngày hôm nay, hôm qua và ngày mai bằng tiếng Trung: <i>\"今天是…月…号。\"</i> <i>\"明天星期几？\"</i>",
       "<b>Bước 2:</b> Nhắn cho một đồng nghiệp hoặc bạn bè: hỏi sinh nhật họ, ví dụ <i>\"你的生日是几月几号？\"</i>, rồi tự trả lời bằng sinh nhật của bạn.",
       "<b>Bước 3:</b> Chọn một ngày cho bữa gặp mặt, nói thành tiếng ngày cụ thể và thứ trong tuần: <i>\"后天是星期…\"</i>, rồi ghi vào lịch bằng chữ Hán."
      ]
     }
    },
    {
     "id": "1.5C",
     "name": "Bài 1.5C: Thói quen và kế hoạch theo thời gian",
     "grammar": {
      "formulas": [
       "🧑 我 + 🔁 常常 + 📖 学习 + 汉语",
       "1️⃣ 我 + 先 + 学习 + 2️⃣ 再 + 玩儿",
       "⚡ 马上 + 见面"
      ],
      "tip": "Phó từ đứng trước động từ: 常常 (chángcháng, thường thường) = hay làm; 有时候 = thỉnh thoảng; 先 (xiān, tiên) … 再 (zài, tái) = trước … rồi mới; 就 (jiù, tựu) = thì, liền; 马上 (mǎshàng, mã thượng) = ngay lập tức. Vị trí: Chủ ngữ + phó từ + động từ.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ (\"học thường thường\"). Tiếng Trung phải đặt phó từ TRƯỚC động từ: 我常常学习汉语, không nói 我学习汉语常常. Đừng nhầm 再 (làm lại/tiếp theo) với 就 (xảy ra ngay): 先…再… là hai việc nối tiếp nhau."
     },
     "chunks": [
      {
       "scene": "🧑🔁📖",
       "full": "我常常学习汉语",
       "vi": "Tôi thường xuyên học tiếng Trung",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "常常学习",
         "ico": "🔁",
         "c": "v",
         "py": "chángcháng xuéxí",
         "hv": "thường thường học tập"
        },
        {
         "t": "汉语",
         "ico": "🇨🇳",
         "c": "o",
         "py": "Hànyǔ",
         "hv": "hán ngữ"
        }
       ],
       "traceWord": "常常",
       "py": "Wǒ chángcháng xuéxí Hànyǔ",
       "traceKey": "changchang",
       "traceInfo": [
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        },
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        }
       ]
      },
      {
       "scene": "🧑🕐📚",
       "full": "他有时候买书",
       "vi": "Thỉnh thoảng anh ấy mua sách",
       "parts": [
        {
         "t": "他有时候",
         "ico": "🕐",
         "c": "s",
         "py": "tā yǒushíhou",
         "hv": "tha hữu thời hậu"
        },
        {
         "t": "买",
         "ico": "🛒",
         "c": "v",
         "py": "mǎi",
         "hv": "mãi"
        },
        {
         "t": "书",
         "ico": "📚",
         "c": "o",
         "py": "shū",
         "hv": "thư"
        }
       ],
       "traceWord": "有时候",
       "py": "Tā yǒushíhou mǎi shū",
       "traceKey": "youshihou",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        },
        {
         "c": "候",
         "py": "hou",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🧑📖🎮",
       "full": "我先学习再玩儿",
       "vi": "Tôi học trước rồi mới chơi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "先学习",
         "ico": "1️⃣",
         "c": "v",
         "py": "xiān xuéxí",
         "hv": "tiên học tập"
        },
        {
         "t": "再玩儿",
         "ico": "🎮",
         "c": "o",
         "py": "zài wánr",
         "hv": "tái ngoạn nhi"
        }
       ],
       "traceWord": "先",
       "py": "Wǒ xiān xuéxí zài wánr",
       "traceKey": "xian",
       "traceInfo": [
        {
         "c": "先",
         "py": "xiān",
         "hv": "tiên"
        }
       ]
      },
      {
       "scene": "👫⚡🤝",
       "full": "我们马上见朋友",
       "vi": "Chúng tôi sắp gặp bạn ngay",
       "parts": [
        {
         "t": "我们马上",
         "ico": "⚡",
         "c": "s",
         "py": "wǒmen mǎshàng",
         "hv": "ngã môn mã thượng"
        },
        {
         "t": "见",
         "ico": "👀",
         "c": "v",
         "py": "jiàn",
         "hv": "kiến"
        },
        {
         "t": "朋友",
         "ico": "👫",
         "c": "o",
         "py": "péngyou",
         "hv": "bằng hữu"
        }
       ],
       "traceWord": "马上",
       "py": "Wǒmen mǎshàng jiàn péngyou",
       "traceKey": "mashang",
       "traceInfo": [
        {
         "c": "马",
         "py": "mǎ",
         "hv": "mã"
        },
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "👨‍🏫👉🧑",
       "full": "他就是王老师",
       "vi": "Anh ấy chính là thầy Vương",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "就是",
         "ico": "👉",
         "c": "v",
         "py": "jiù shì",
         "hv": "tựu thị"
        },
        {
         "t": "王老师",
         "ico": "👨‍🏫",
         "c": "o",
         "py": "Wáng lǎoshī",
         "hv": "vương lão sư"
        }
       ],
       "traceWord": "就",
       "py": "Tā jiù shì Wáng lǎoshī",
       "traceKey": "jiu",
       "traceInfo": [
        {
         "c": "就",
         "py": "jiù",
         "hv": "tựu"
        }
       ]
      },
      {
       "scene": "⏪🗓️📖",
       "full": "去年我学汉语",
       "vi": "Năm ngoái tôi học tiếng Trung",
       "parts": [
        {
         "t": "去年我",
         "ico": "⏪",
         "c": "s",
         "py": "qùnián wǒ",
         "hv": "khứ niên ngã"
        },
        {
         "t": "学",
         "ico": "📖",
         "c": "v",
         "py": "xué",
         "hv": "học"
        },
        {
         "t": "汉语",
         "ico": "🇨🇳",
         "c": "o",
         "py": "Hànyǔ",
         "hv": "hán ngữ"
        }
       ],
       "traceWord": "去年",
       "py": "Qùnián wǒ xué Hànyǔ",
       "traceKey": "qunian",
       "traceInfo": [
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "🏁🧑💬",
       "full": "最后他说谢谢",
       "vi": "Cuối cùng anh ấy nói cảm ơn",
       "parts": [
        {
         "t": "最后他",
         "ico": "🏁",
         "c": "s",
         "py": "zuìhòu tā",
         "hv": "tối hậu tha"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "t": "谢谢",
         "ico": "🙏",
         "c": "o",
         "py": "xièxie",
         "hv": "tạ tạ"
        }
       ],
       "traceWord": "最后",
       "py": "Zuìhòu tā shuō xièxie",
       "traceKey": "zuihou",
       "traceInfo": [
        {
         "c": "最",
         "py": "zuì",
         "hv": "tối"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "⏮️🧑💬❓",
       "full": "上次你说什么",
       "vi": "Lần trước bạn đã nói gì?",
       "parts": [
        {
         "t": "上次你",
         "ico": "⏮️",
         "c": "s",
         "py": "shàng cì nǐ",
         "hv": "thượng thứ nễ"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "t": "什么",
         "ico": "❓",
         "c": "o",
         "py": "shénme",
         "hv": "thập ma"
        }
       ],
       "traceWord": "上次",
       "py": "Shàng cì nǐ shuō shénme",
       "traceKey": "shangci",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "次",
         "py": "cì",
         "hv": "thứ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你今年想学什么？",
       "qvi": "Năm nay bạn muốn học gì?",
       "scene": "🧑🗓️📖",
       "ans": "我今年想学汉语",
       "opts": [
        {
         "txt": "他是我的朋友",
         "ico": "👫",
         "py": "Tā shì wǒ de péngyou"
        },
        {
         "txt": "我有一本书",
         "ico": "📘",
         "py": "Wǒ yǒu yī běn shū"
        },
        {
         "txt": "我今年想学汉语",
         "ico": "🇨🇳",
         "py": "Wǒ jīnnián xiǎng xué Hànyǔ"
        }
       ],
       "qpy": "Nǐ jīnnián xiǎng xué shénme?"
      },
      {
       "q": "你明年想学中文吗？",
       "qvi": "Sang năm bạn có muốn học tiếng Trung không?",
       "scene": "🧑➡️🗓️📖",
       "ans": "想，我明年学中文",
       "opts": [
        {
         "txt": "不客气，再见",
         "ico": "👋",
         "py": "Bù kèqì zàijiàn"
        },
        {
         "txt": "想，我明年学中文",
         "ico": "🇨🇳",
         "py": "Xiǎng wǒ míngnián xué Zhōngwén"
        },
        {
         "txt": "他常买书",
         "ico": "📚",
         "py": "Tā cháng mǎi shū"
        }
       ],
       "qpy": "Nǐ míngnián xiǎng xué Zhōngwén ma?"
      },
      {
       "q": "下次什么时候见面？",
       "qvi": "Lần sau khi nào gặp nhau?",
       "scene": "⏭️🤝❓",
       "ans": "下次我们星期天见面",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "下次我们星期天见面",
         "ico": "🤝",
         "py": "Xià cì wǒmen xīngqītiān jiànmiàn"
        },
        {
         "txt": "这是我的书包",
         "ico": "🎒",
         "py": "Zhè shì wǒ de shūbāo"
        }
       ],
       "qpy": "Xià cì shénme shíhou jiànmiàn?"
      },
      {
       "q": "新年好！",
       "qvi": "Chúc mừng năm mới!",
       "scene": "🎊🧧",
       "ans": "你们新年好",
       "opts": [
        {
         "txt": "再见，老师",
         "ico": "👋",
         "py": "Zàijiàn lǎoshī"
        },
        {
         "txt": "对不起，我不知道",
         "ico": "🙇",
         "py": "Duìbuqǐ wǒ bù zhīdào"
        },
        {
         "txt": "你们新年好",
         "ico": "🎊",
         "py": "Nǐmen xīnnián hǎo"
        }
       ],
       "qpy": "Xīnnián hǎo"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể thói quen và lên kế hoạch",
      "steps": [
       "<b>Bước 1:</b> Nói to 3 thói quen của bạn bằng tiếng Trung, mỗi câu dùng một phó từ khác nhau: <i>\"我常常学习汉语。\"</i> <i>\"我有时候买书。\"</i>",
       "<b>Bước 2:</b> Nhắn cho đồng nghiệp hoặc bạn học về kế hoạch cuối tuần, dùng 先 và 再: <i>\"我先学习再玩儿。\"</i>",
       "<b>Bước 3:</b> Nhắn hẹn lần gặp sau: hỏi <i>\"下次什么时候见面？\"</i> rồi trả lời bằng ngày cụ thể và báo <i>\"我们马上见！\"</i> khi sắp gặp."
      ]
     }
    }
   ]
  },
  "1.6": {
   "lessons": [
    {
     "id": "1.6A",
     "name": "Bài 1.6A: Món ăn hằng ngày",
     "grammar": {
      "formulas": [
       "🧑 我 + 🍚 吃 + 🍜 面条儿",
       "🧑 他 + ❤️ 喜欢 + 🍞 吃面包",
       "❓ 你们 + 🍽️ 吃饭 + 吗？"
      ],
      "tip": "Câu vị ngữ động từ: chủ ngữ + động từ + tân ngữ. 吃 (chī, ngật) là ăn; 喜欢 (xǐhuan, hỉ hoan) và 爱 (ài, ái) có thể đứng trước một động từ khác: 喜欢吃肉, 爱吃鸡蛋. Câu hỏi có/không thêm 吗 ở cuối câu.",
      "vn_tip": "Người Việt hay thêm \"là\" hoặc đảo thứ tự như tiếng Việt. Tiếng Trung để tân ngữ ngay sau động từ, không cần giới từ: nói 我吃米饭, không nói 我吃是米饭. Tính từ như 好吃 đứng sau chủ ngữ và thường có 很: 包子很好吃."
     },
     "chunks": [
      {
       "scene": "🍚😋👍",
       "full": "饭很好吃",
       "vi": "Cơm rất ngon",
       "parts": [
        {
         "t": "饭",
         "ico": "🍚",
         "c": "s",
         "py": "fàn",
         "hv": "phạn"
        },
        {
         "t": "很",
         "ico": "👍",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好吃",
         "ico": "😋",
         "c": "o",
         "py": "hǎochī",
         "hv": "hảo cật"
        }
       ],
       "traceWord": "饭",
       "py": "Fàn hěn hǎochī",
       "traceKey": "fan",
       "traceInfo": [
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        }
       ]
      },
      {
       "scene": "🧑❤️🥩",
       "full": "我爱吃肉",
       "vi": "Tôi thích ăn thịt",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "爱",
         "ico": "❤️",
         "c": "v",
         "py": "ài",
         "hv": "ái"
        },
        {
         "t": "吃肉",
         "ico": "🥩",
         "c": "o",
         "py": "chī ròu",
         "hv": "cật nhục"
        }
       ],
       "traceWord": "爱",
       "py": "Wǒ ài chī ròu",
       "traceKey": "ai",
       "traceInfo": [
        {
         "c": "爱",
         "py": "ài",
         "hv": "ái"
        }
       ]
      },
      {
       "scene": "👨❤️🍞",
       "full": "他喜欢吃面包",
       "vi": "Anh ấy thích ăn bánh mì",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喜欢",
         "ico": "😊",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "吃面包",
         "ico": "🍞",
         "c": "o",
         "py": "chī miànbāo",
         "hv": "cật diện bao"
        }
       ],
       "traceWord": "面包",
       "py": "Tā xǐhuan chī miànbāo",
       "traceKey": "mianbao",
       "traceInfo": [
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        },
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        }
       ]
      },
      {
       "scene": "👫🍚🥢",
       "full": "我们吃米饭",
       "vi": "Chúng tôi ăn cơm",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "吃",
         "ico": "🍴",
         "c": "v",
         "py": "chī",
         "hv": "cật"
        },
        {
         "t": "米饭",
         "ico": "🍚",
         "c": "o",
         "py": "mǐfàn",
         "hv": "mễ phạn"
        }
       ],
       "traceWord": "米饭",
       "py": "Wǒmen chī mǐfàn",
       "traceKey": "mifan",
       "traceInfo": [
        {
         "c": "米",
         "py": "mǐ",
         "hv": "mễ"
        },
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        }
       ]
      },
      {
       "scene": "👧❤️🥚",
       "full": "妹妹爱吃鸡蛋",
       "vi": "Em gái thích ăn trứng",
       "parts": [
        {
         "t": "妹妹",
         "ico": "👧",
         "c": "s",
         "py": "mèimei",
         "hv": "muội muội"
        },
        {
         "t": "爱",
         "ico": "❤️",
         "c": "v",
         "py": "ài",
         "hv": "ái"
        },
        {
         "t": "吃鸡蛋",
         "ico": "🥚",
         "c": "o",
         "py": "chī jīdàn",
         "hv": "cật kê đản"
        }
       ],
       "traceWord": "鸡蛋",
       "py": "Mèimei ài chī jīdàn",
       "traceKey": "jidan",
       "traceInfo": [
        {
         "c": "鸡",
         "py": "jī",
         "hv": "kê"
        },
        {
         "c": "蛋",
         "py": "dàn",
         "hv": "đản"
        }
       ]
      },
      {
       "scene": "👩🍎🍌",
       "full": "妈妈喜欢吃水果",
       "vi": "Mẹ thích ăn trái cây",
       "parts": [
        {
         "t": "妈妈",
         "ico": "👩",
         "c": "s",
         "py": "māma",
         "hv": "ma ma"
        },
        {
         "t": "喜欢",
         "ico": "😊",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "吃水果",
         "ico": "🍎",
         "c": "o",
         "py": "chī shuǐguǒ",
         "hv": "cật thủy quả"
        }
       ],
       "traceWord": "水果",
       "py": "Māma xǐhuan chī shuǐguǒ",
       "traceKey": "shuiguo",
       "traceInfo": [
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      },
      {
       "scene": "🥟😋👍",
       "full": "包子很好吃",
       "vi": "Bánh bao rất ngon",
       "parts": [
        {
         "t": "包子",
         "ico": "🥟",
         "c": "s",
         "py": "bāozi",
         "hv": "bao tử"
        },
        {
         "t": "很",
         "ico": "👍",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好吃",
         "ico": "😋",
         "c": "o",
         "py": "hǎochī",
         "hv": "hảo cật"
        }
       ],
       "traceWord": "包子",
       "py": "Bāozi hěn hǎochī",
       "traceKey": "baozi",
       "traceInfo": [
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👥🍽️❓",
       "full": "你们吃饭吗",
       "vi": "Các bạn có ăn cơm không?",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "吃饭",
         "ico": "🍽️",
         "c": "v",
         "py": "chīfàn",
         "hv": "cật phạn"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "吃饭",
       "py": "Nǐmen chīfàn ma",
       "traceKey": "chifan",
       "traceInfo": [
        {
         "c": "吃",
         "py": "chī",
         "hv": "cật"
        },
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你饿不饿？",
       "qvi": "Bạn có đói không?",
       "scene": "🧑😫🍚",
       "ans": "我很饿",
       "opts": [
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我很饿",
         "ico": "😫",
         "py": "Wǒ hěn è"
        },
        {
         "txt": "我叫小明",
         "ico": "🙋",
         "py": "Wǒ jiào Xiǎomíng"
        }
       ],
       "qpy": "Nǐ è bú è?"
      },
      {
       "q": "你想吃什么？",
       "qvi": "Bạn muốn ăn gì?",
       "scene": "🧑🤔🍜",
       "ans": "我想吃面条儿",
       "opts": [
        {
         "txt": "我想吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xiǎng chī miàntiáor"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "明天星期天",
         "ico": "📅",
         "py": "Míngtiān xīngqītiān"
        }
       ],
       "qpy": "Nǐ xiǎng chī shénme?"
      },
      {
       "q": "你喜欢吃菜吗？",
       "qvi": "Bạn có thích ăn rau (món ăn) không?",
       "scene": "🧑🥬❓",
       "ans": "我喜欢吃菜",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "今天星期天",
         "ico": "📅",
         "py": "Jīntiān xīngqītiān"
        },
        {
         "txt": "我喜欢吃菜",
         "ico": "🥬",
         "py": "Wǒ xǐhuan chī cài"
        }
       ],
       "qpy": "Nǐ xǐhuan chī cài ma?"
      },
      {
       "q": "这个菜好吃吗？",
       "qvi": "Món này có ngon không?",
       "scene": "🍲😋❓",
       "ans": "这个菜很好吃",
       "opts": [
        {
         "txt": "我是男生",
         "ico": "👦",
         "py": "Wǒ shì nánshēng"
        },
        {
         "txt": "这个菜很好吃",
         "ico": "😋",
         "py": "Zhè gè cài hěn hǎochī"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Zhè gè cài hǎochī ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đồng nghiệp ăn gì",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc nói to với một đồng nghiệp: <i>\"你们吃饭吗？\"</i> rồi hỏi <i>\"你想吃什么？\"</i>.",
       "<b>Bước 2:</b> Tự trả lời bằng ít nhất ba món bạn thích, ví dụ <i>\"我喜欢吃面条儿。\"</i>, <i>\"我爱吃鸡蛋。\"</i>, <i>\"我想吃水果。\"</i>.",
       "<b>Bước 3:</b> Nhận xét một món trong bữa trưa thật của bạn: <i>\"这个菜很好吃。\"</i> hoặc nói khi đói: <i>\"我很饿。\"</i>."
      ]
     }
    },
    {
     "id": "1.6B",
     "name": "Bài 1.6B: Đồ uống, bữa ăn, rủ nhau đi ăn",
     "grammar": {
      "formulas": [
       "❓ 你 + 🥤 喝 + 💧 水 + 🔀 还是 + 🍵 茶？",
       "🧑 我们 + 🤝 一起 + 🍽️ 吃饭",
       "🧑 我 + 🍵 喝 + 🍵 茶"
      ],
      "tip": "Câu hỏi lựa chọn: A 还是 B? (hái shi, hoàn thị) dùng để hỏi người nghe chọn một trong hai: 你喝水还是茶？ Trả lời bằng cách chọn một vế: 我喝茶. Không thêm 吗 vào cuối câu có 还是.",
      "vn_tip": "Người Việt hay nói \"hay\" rồi thêm 吗 ở cuối như câu có/không. Câu có 还是 không dùng 吗: nói 你喝水还是茶, không nói 你喝水还是茶吗. Cũng đừng dùng 或者 để hỏi lựa chọn trong câu hỏi."
     },
     "chunks": [
      {
       "scene": "🧑💧🍵❓",
       "full": "你喝水还是茶",
       "vi": "Bạn uống nước hay trà?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "喝",
         "ico": "🥤",
         "c": "v",
         "py": "hē",
         "hv": "hát"
        },
        {
         "t": "水还是茶",
         "ico": "💧",
         "c": "o",
         "py": "shuǐ háishi chá",
         "hv": "thủy hoàn thị trà"
        }
       ],
       "traceWord": "还是",
       "py": "Nǐ hē shuǐ háishi chá",
       "traceKey": "haishi",
       "traceInfo": [
        {
         "c": "还",
         "py": "hái",
         "hv": "hoàn"
        },
        {
         "c": "是",
         "py": "shi",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "👨🥛🍵❓",
       "full": "他喝牛奶还是茶",
       "vi": "Anh ấy uống sữa hay trà?",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喝",
         "ico": "🥤",
         "c": "v",
         "py": "hē",
         "hv": "hát"
        },
        {
         "t": "牛奶还是茶",
         "ico": "🥛",
         "c": "o",
         "py": "niúnǎi háishi chá",
         "hv": "ngưu nãi hoàn thị trà"
        }
       ],
       "traceWord": "牛奶",
       "py": "Tā hē niúnǎi háishi chá",
       "traceKey": "niunai",
       "traceInfo": [
        {
         "c": "牛",
         "py": "niú",
         "hv": "ngưu"
        },
        {
         "c": "奶",
         "py": "nǎi",
         "hv": "nãi"
        }
       ]
      },
      {
       "scene": "👫🤝🍽️",
       "full": "我们一起吃饭",
       "vi": "Chúng ta cùng ăn cơm",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "一起",
         "ico": "🤝",
         "c": "v",
         "py": "yīqǐ",
         "hv": "nhất khởi"
        },
        {
         "t": "吃饭",
         "ico": "🍽️",
         "c": "o",
         "py": "chīfàn",
         "hv": "cật phạn"
        }
       ],
       "traceWord": "一起",
       "py": "Wǒmen yīqǐ chīfàn",
       "traceKey": "yiqi",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        }
       ]
      },
      {
       "scene": "👫🤝🍵",
       "full": "我们一块儿喝茶",
       "vi": "Chúng ta cùng uống trà",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "一块儿",
         "ico": "🤝",
         "c": "v",
         "py": "yīkuàir",
         "hv": "nhất khối nhi"
        },
        {
         "t": "喝茶",
         "ico": "🍵",
         "c": "o",
         "py": "hē chá",
         "hv": "hát trà"
        }
       ],
       "traceWord": "一块儿",
       "py": "Wǒmen yīkuàir hē chá",
       "traceKey": "yikuair",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "块",
         "py": "kuài",
         "hv": "khối"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👫🕛🍱",
       "full": "我们吃午饭吧",
       "vi": "Chúng ta ăn trưa nhé",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "吃",
         "ico": "🍴",
         "c": "v",
         "py": "chī",
         "hv": "cật"
        },
        {
         "t": "午饭吧",
         "ico": "🍱",
         "c": "o",
         "py": "wǔfàn ba",
         "hv": "ngọ phạn ba"
        }
       ],
       "traceWord": "午饭",
       "py": "Wǒmen chī wǔfàn ba",
       "traceKey": "wufan",
       "traceInfo": [
        {
         "c": "午",
         "py": "wǔ",
         "hv": "ngọ"
        },
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        }
       ]
      },
      {
       "scene": "👩‍🏫🌙🍽️",
       "full": "老师请我们吃晚饭",
       "vi": "Thầy cô mời chúng tôi ăn tối",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "我们吃晚饭",
         "ico": "🌙",
         "c": "o",
         "py": "wǒmen chī wǎnfàn",
         "hv": "ngã môn cật vãn phạn"
        }
       ],
       "traceWord": "晚饭",
       "py": "Lǎoshī qǐng wǒmen chī wǎnfàn",
       "traceKey": "wanfan",
       "traceInfo": [
        {
         "c": "晚",
         "py": "wǎn",
         "hv": "vãn"
        },
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        }
       ]
      },
      {
       "scene": "🏨🍲😋",
       "full": "饭店的菜很好吃",
       "vi": "Món ở nhà hàng rất ngon",
       "parts": [
        {
         "t": "饭店的菜",
         "ico": "🏨",
         "c": "s",
         "py": "fàndiàn de cài",
         "hv": "phạn điếm đích thái"
        },
        {
         "t": "很",
         "ico": "👍",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "好吃",
         "ico": "😋",
         "c": "o",
         "py": "hǎochī",
         "hv": "hảo cật"
        }
       ],
       "traceWord": "饭店",
       "py": "Fàndiàn de cài hěn hǎochī",
       "traceKey": "fandian",
       "traceInfo": [
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        },
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "🙏🧑💧",
       "full": "请你拿一杯水",
       "vi": "Xin bạn lấy giúp một cốc nước",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "拿一杯水",
         "ico": "💧",
         "c": "o",
         "py": "ná yī bēi shuǐ",
         "hv": "nã nhất bôi thủy"
        }
       ],
       "traceWord": "杯",
       "py": "Qǐng nǐ ná yī bēi shuǐ",
       "traceKey": "bei",
       "traceInfo": [
        {
         "c": "杯",
         "py": "bēi",
         "hv": "bôi"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你渴不渴？",
       "qvi": "Bạn có khát không?",
       "scene": "🧑🥵💧",
       "ans": "我很渴",
       "opts": [
        {
         "txt": "我很渴",
         "ico": "🥵",
         "py": "Wǒ hěn kě"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我叫小明",
         "ico": "🙋",
         "py": "Wǒ jiào Xiǎomíng"
        }
       ],
       "qpy": "Nǐ kě bù kě?"
      },
      {
       "q": "你早饭吃面包还是米饭？",
       "qvi": "Bữa sáng bạn ăn bánh mì hay cơm?",
       "scene": "🌅🍞🍚",
       "ans": "我吃面包",
       "opts": [
        {
         "txt": "我很高兴",
         "ico": "😊",
         "py": "Wǒ hěn gāoxìng"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "我吃面包",
         "ico": "🍞",
         "py": "Wǒ chī miànbāo"
        }
       ],
       "qpy": "Nǐ zǎofàn chī miànbāo háishi mǐfàn?"
      },
      {
       "q": "我送你书，好吗？",
       "qvi": "Tôi tặng bạn cuốn sách, được không?",
       "scene": "🧑🎁📖",
       "ans": "谢谢你",
       "opts": [
        {
         "txt": "我不是学生",
         "ico": "🎓",
         "py": "Wǒ bú shì xuéshēng"
        },
        {
         "txt": "谢谢你",
         "ico": "🙏",
         "py": "Xièxie nǐ"
        },
        {
         "txt": "今天星期天",
         "ico": "📅",
         "py": "Jīntiān xīngqītiān"
        }
       ],
       "qpy": "Wǒ sòng nǐ shū hǎo ma?"
      },
      {
       "q": "你的书包放家里吗？",
       "qvi": "Cặp của bạn để ở nhà à?",
       "scene": "🎒🏠❓",
       "ans": "是，我的书包放家里",
       "opts": [
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "他们是学生",
         "ico": "🎓",
         "py": "Tāmen shì xuéshēng"
        },
        {
         "txt": "是，我的书包放家里",
         "ico": "🎒",
         "py": "Shì wǒ de shūbāo fàng jiā li"
        }
       ],
       "qpy": "Nǐ de shūbāo fàng jiā li ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi ăn",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho một đồng nghiệp rủ bữa trưa: <i>\"我们一起吃午饭吧。\"</i>.",
       "<b>Bước 2:</b> Hỏi họ muốn uống gì bằng câu lựa chọn: <i>\"你喝水还是茶？\"</i> hoặc <i>\"你喝牛奶还是茶？\"</i>.",
       "<b>Bước 3:</b> Tự trả lời và khen quán: <i>\"我喝茶。\"</i>, <i>\"饭店的菜很好吃。\"</i>. Lặp lại với bữa tối: <i>\"老师请我们吃晚饭。\"</i>."
      ]
     }
    },
    {
     "id": "1.6C",
     "name": "Bài 1.6C: Nhận xét món ăn và nhà hàng",
     "grammar": {
      "formulas": [
       "🏨 这个饭店 + 👍 很 + ✨ 干净",
       "☀️ 今天 + 🔥 真 + 🥵 热",
       "📕 这个字 + ⭐ 最 + 😵 难"
      ],
      "tip": "Phó từ chỉ mức độ đứng trước tính từ: 很 (hěn, ngận) rất, 太 (tài, thái) quá, 真 (zhēn, chân) thật là, 非常 (fēicháng, phi thường) vô cùng, 最 (zuì, tối) nhất. Ví dụ: 今天真热, 昨天太冷, 这个字最难. 最好 đứng trước động từ có nghĩa là \"tốt nhất là\": 你最好等我.",
      "vn_tip": "Người Việt hay đặt phó từ sau tính từ như \"nóng quá\", \"lạnh lắm\". Tiếng Trung phải đặt trước: nói 太冷, không nói 冷太. Cũng đừng thêm 是 trước tính từ: nói 这个饭店很干净, không nói 这个饭店是很干净."
     },
     "chunks": [
      {
       "scene": "🏨✨👍",
       "full": "这个饭店很干净",
       "vi": "Nhà hàng này rất sạch",
       "parts": [
        {
         "t": "这个饭店",
         "ico": "🏨",
         "c": "s",
         "py": "zhè gè fàndiàn",
         "hv": "giá cá phạn điếm"
        },
        {
         "t": "很",
         "ico": "👍",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "干净",
         "ico": "✨",
         "c": "o",
         "py": "gānjìng",
         "hv": "can tịnh"
        }
       ],
       "traceWord": "干净",
       "py": "Zhè gè fàndiàn hěn gānjìng",
       "traceKey": "ganjing",
       "traceInfo": [
        {
         "c": "干",
         "py": "gān",
         "hv": "can"
        },
        {
         "c": "净",
         "py": "jìng",
         "hv": "tịnh"
        }
       ]
      },
      {
       "scene": "☀️🥵🔥",
       "full": "今天真热",
       "vi": "Hôm nay nóng thật",
       "parts": [
        {
         "t": "今天",
         "ico": "☀️",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "真",
         "ico": "🔥",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "热",
         "ico": "🥵",
         "c": "o",
         "py": "rè",
         "hv": "nhiệt"
        }
       ],
       "traceWord": "热",
       "py": "Jīntiān zhēn rè",
       "traceKey": "re",
       "traceInfo": [
        {
         "c": "热",
         "py": "rè",
         "hv": "nhiệt"
        }
       ]
      },
      {
       "scene": "📅🥶❄️",
       "full": "昨天太冷",
       "vi": "Hôm qua lạnh quá",
       "parts": [
        {
         "t": "昨天",
         "ico": "📅",
         "c": "s",
         "py": "zuótiān",
         "hv": "tạc thiên"
        },
        {
         "t": "太",
         "ico": "❗",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "冷",
         "ico": "🥶",
         "c": "o",
         "py": "lěng",
         "hv": "lãnh"
        }
       ],
       "traceWord": "冷",
       "py": "Zuótiān tài lěng",
       "traceKey": "leng",
       "traceInfo": [
        {
         "c": "冷",
         "py": "lěng",
         "hv": "lãnh"
        }
       ]
      },
      {
       "scene": "🚻🤏😕",
       "full": "洗手间太小",
       "vi": "Nhà vệ sinh nhỏ quá",
       "parts": [
        {
         "t": "洗手间",
         "ico": "🚻",
         "c": "s",
         "py": "xǐshǒujiān",
         "hv": "tẩy thủ gian"
        },
        {
         "t": "太",
         "ico": "❗",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "小",
         "ico": "🤏",
         "c": "o",
         "py": "xiǎo",
         "hv": "tiểu"
        }
       ],
       "traceWord": "洗手间",
       "py": "Xǐshǒujiān tài xiǎo",
       "traceKey": "xishoujian",
       "traceInfo": [
        {
         "c": "洗",
         "py": "xǐ",
         "hv": "tẩy"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        },
        {
         "c": "间",
         "py": "jiān",
         "hv": "gian"
        }
       ]
      },
      {
       "scene": "📕✍️😵",
       "full": "这个字最难",
       "vi": "Chữ này khó nhất",
       "parts": [
        {
         "t": "这个字",
         "ico": "📕",
         "c": "s",
         "py": "zhè gè zì",
         "hv": "giá cá tự"
        },
        {
         "t": "最",
         "ico": "⭐",
         "c": "v",
         "py": "zuì",
         "hv": "tối"
        },
        {
         "t": "难",
         "ico": "😵",
         "c": "o",
         "py": "nán",
         "hv": "nan"
        }
       ],
       "traceWord": "最",
       "py": "Zhè gè zì zuì nán",
       "traceKey": "zui",
       "traceInfo": [
        {
         "c": "最",
         "py": "zuì",
         "hv": "tối"
        }
       ]
      },
      {
       "scene": "🧑⏳👍",
       "full": "你最好等我",
       "vi": "Tốt nhất là bạn đợi tôi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "最好",
         "ico": "👍",
         "c": "v",
         "py": "zuìhǎo",
         "hv": "tối hảo"
        },
        {
         "t": "等我",
         "ico": "⏳",
         "c": "o",
         "py": "děng wǒ",
         "hv": "đẳng ngã"
        }
       ],
       "traceWord": "等",
       "py": "Nǐ zuìhǎo děng wǒ",
       "traceKey": "deng",
       "traceInfo": [
        {
         "c": "等",
         "py": "děng",
         "hv": "đẳng"
        }
       ]
      },
      {
       "scene": "🥤🌸👍",
       "full": "这个杯子真好看",
       "vi": "Cái cốc này đẹp thật",
       "parts": [
        {
         "t": "这个杯子",
         "ico": "🥤",
         "c": "s",
         "py": "zhè gè bēizi",
         "hv": "giá cá bôi tử"
        },
        {
         "t": "真",
         "ico": "🔥",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "好看",
         "ico": "🌸",
         "c": "o",
         "py": "hǎokàn",
         "hv": "hảo khán"
        }
       ],
       "traceWord": "杯子",
       "py": "Zhè gè bēizi zhēn hǎokàn",
       "traceKey": "beizi",
       "traceInfo": [
        {
         "c": "杯",
         "py": "bēi",
         "hv": "bôi"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🎵🙂👂",
       "full": "这个名字非常好听",
       "vi": "Cái tên này rất hay",
       "parts": [
        {
         "t": "这个名字",
         "ico": "📛",
         "c": "s",
         "py": "zhè gè míngzi",
         "hv": "giá cá danh tự"
        },
        {
         "t": "非常",
         "ico": "💯",
         "c": "v",
         "py": "fēicháng",
         "hv": "phi thường"
        },
        {
         "t": "好听",
         "ico": "🎵",
         "c": "o",
         "py": "hǎotīng",
         "hv": "hảo thính"
        }
       ],
       "traceWord": "好听",
       "py": "Zhè gè míngzi fēicháng hǎotīng",
       "traceKey": "haoting",
       "traceInfo": [
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得这个好玩儿吗？",
       "qvi": "Bạn thấy cái này có vui không?",
       "scene": "🧑🎮😄",
       "ans": "我觉得非常好玩儿",
       "opts": [
        {
         "txt": "我想喝水",
         "ico": "💧",
         "py": "Wǒ xiǎng hē shuǐ"
        },
        {
         "txt": "我觉得非常好玩儿",
         "ico": "🎮",
         "py": "Wǒ juéde fēicháng hǎowánr"
        },
        {
         "txt": "这是我的书",
         "ico": "📖",
         "py": "Zhè shì wǒ de shū"
        }
       ],
       "qpy": "Nǐ juéde zhè gè hǎowánr ma?"
      },
      {
       "q": "他说话慢吗？",
       "qvi": "Anh ấy nói có chậm không?",
       "scene": "👨💬🐢",
       "ans": "他说话很慢",
       "opts": [
        {
         "txt": "她是我姐姐",
         "ico": "👧",
         "py": "Tā shì wǒ jiějie"
        },
        {
         "txt": "他说话很慢",
         "ico": "🐢",
         "py": "Tā shuōhuà hěn màn"
        },
        {
         "txt": "今天星期天",
         "ico": "📅",
         "py": "Jīntiān xīngqītiān"
        }
       ],
       "qpy": "Tā shuōhuà màn ma?"
      },
      {
       "q": "你吃这个鸡蛋吗？",
       "qvi": "Bạn ăn quả trứng này không?",
       "scene": "🥚🤢❓",
       "ans": "不吃，这个鸡蛋是坏的",
       "opts": [
        {
         "txt": "不吃，这个鸡蛋是坏的",
         "ico": "🤢",
         "py": "Bù chī zhè gè jīdàn shì huài de"
        },
        {
         "txt": "我是你的同学",
         "ico": "🎓",
         "py": "Wǒ shì nǐ de tóngxué"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ chī zhè gè jīdàn ma?"
      },
      {
       "q": "你想洗衣服吗？",
       "qvi": "Bạn có muốn giặt quần áo không?",
       "scene": "🧑👕🫧",
       "ans": "我想洗，你等我一下儿",
       "opts": [
        {
         "txt": "我的衣服是干的",
         "ico": "👕",
         "py": "Wǒ de yīfu shì gān de"
        },
        {
         "txt": "我想洗，你等我一下儿",
         "ico": "🫧",
         "py": "Wǒ xiǎng xǐ nǐ děng wǒ yīxiàr"
        },
        {
         "txt": "他们是学生",
         "ico": "🎓",
         "py": "Tāmen shì xuéshēng"
        }
       ],
       "qpy": "Nǐ xiǎng xǐ yīfu ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận xét nhà hàng",
      "steps": [
       "<b>Bước 1:</b> Khi đến một quán ăn, nói to nhận xét về chỗ đó: <i>\"这个饭店很干净。\"</i>, <i>\"今天真热。\"</i>, <i>\"洗手间太小。\"</i>.",
       "<b>Bước 2:</b> Nhắn cho bạn đang đến muộn: <i>\"你最好等我。\"</i> rồi hỏi cảm nhận: <i>\"你觉得这个好玩儿吗？\"</i>.",
       "<b>Bước 3:</b> Dùng 最, 真, 非常, 太 để nói về món bạn ăn hoặc nhạc trong quán: <i>\"这个名字非常好听。\"</i>, <i>\"这个杯子真好看。\"</i>."
      ]
     }
    }
   ]
  },
  "1.7": {
   "lessons": [
    {
     "id": "1.7A",
     "name": "Bài 1.7A: Phương tiện, ga tàu, sân bay",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 在 + 🚉 车站",
       "🧑 他 + ⚡ 在 + ✈️ 机场",
       "❓ 你 + 在 + 车站 + 吗？"
      ],
      "tip": "Giới từ 在 (zài, âm Hán Việt: tại) + nơi chốn đứng TRƯỚC động từ: 我在车站等火车 = Tôi đợi tàu ở ga. 在 một mình cũng có thể là động từ \"ở\": 我在家 = Tôi ở nhà.",
      "vn_tip": "Tiếng Việt nói \"đợi tàu ở ga\" (nơi chốn đứng sau), nhưng tiếng Trung đặt 在 + nơi chốn trước động từ: nói 我在车站等火车, không nói 我等火车在车站."
     },
     "chunks": [
      {
       "scene": "🧑🚉📍",
       "full": "我在车站",
       "vi": "Tôi ở ga",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "车站",
         "ico": "🚉",
         "c": "o",
         "py": "chēzhàn",
         "hv": "xa trạm"
        }
       ],
       "traceWord": "车站",
       "py": "Wǒ zài chēzhàn",
       "traceKey": "chezhan",
       "traceInfo": [
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "站",
         "py": "zhàn",
         "hv": "trạm"
        }
       ]
      },
      {
       "scene": "👨✈️🛫",
       "full": "他在机场",
       "vi": "Anh ấy ở sân bay",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "机场",
         "ico": "🛫",
         "c": "o",
         "py": "jīchǎng",
         "hv": "cơ trường"
        }
       ],
       "traceWord": "机场",
       "py": "Tā zài jīchǎng",
       "traceKey": "jichang",
       "traceInfo": [
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🤝🚗📍",
       "full": "朋友在车上",
       "vi": "Bạn tôi ở trên xe",
       "parts": [
        {
         "t": "朋友",
         "ico": "🤝",
         "c": "s",
         "py": "péngyou",
         "hv": "bằng hữu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "车上",
         "ico": "🚗",
         "c": "o",
         "py": "chē shang",
         "hv": "xa thượng"
        }
       ],
       "traceWord": "车上",
       "py": "Péngyou zài chē shang",
       "traceKey": "cheshang",
       "traceInfo": [
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🎫✈️🏠",
       "full": "我的机票在家",
       "vi": "Vé máy bay của tôi ở nhà",
       "parts": [
        {
         "t": "我的机票",
         "ico": "🎫",
         "c": "s",
         "py": "wǒ de jīpiào",
         "hv": "ngã đích cơ phiếu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "家",
         "ico": "🏠",
         "c": "o",
         "py": "jiā",
         "hv": "gia"
        }
       ],
       "traceWord": "机票",
       "py": "Wǒ de jīpiào zài jiā",
       "traceKey": "jipiao",
       "traceInfo": [
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        },
        {
         "c": "票",
         "py": "piào",
         "hv": "phiếu"
        }
       ]
      },
      {
       "scene": "👥🚉🚆",
       "full": "我们在车站等火车",
       "vi": "Chúng tôi đợi tàu hỏa ở ga",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "车站等火车",
         "ico": "🚆",
         "c": "o",
         "py": "chēzhàn děng huǒchē",
         "hv": "xa trạm đẳng hỏa xa"
        }
       ],
       "traceWord": "火车",
       "py": "Wǒmen zài chēzhàn děng huǒchē",
       "traceKey": "huoche",
       "traceInfo": [
        {
         "c": "火",
         "py": "huǒ",
         "hv": "hỏa"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "👩🚕🛣️",
       "full": "她在路口打车",
       "vi": "Cô ấy gọi taxi ở ngã tư",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "路口打车",
         "ico": "🚕",
         "c": "o",
         "py": "lùkǒu dǎchē",
         "hv": "lộ khẩu đả xa"
        }
       ],
       "traceWord": "打车",
       "py": "Tā zài lùkǒu dǎchē",
       "traceKey": "dache",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "👔🚗🔑",
       "full": "先生在车上开车",
       "vi": "Ông ấy đang lái xe ở trên xe",
       "parts": [
        {
         "t": "先生",
         "ico": "👔",
         "c": "s",
         "py": "xiānsheng",
         "hv": "tiên sinh"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "车上开车",
         "ico": "🚗",
         "c": "o",
         "py": "chē shang kāichē",
         "hv": "xa thượng khai xa"
        }
       ],
       "traceWord": "开车",
       "py": "Xiānsheng zài chē shang kāichē",
       "traceKey": "kaiche",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "🧑🚉🎫",
       "full": "小明在车站买车票",
       "vi": "Tiểu Minh mua vé tàu ở ga",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "车站买车票",
         "ico": "🎫",
         "c": "o",
         "py": "chēzhàn mǎi chēpiào",
         "hv": "xa trạm mãi xa phiếu"
        }
       ],
       "traceWord": "车票",
       "py": "Xiǎomíng zài chēzhàn mǎi chēpiào",
       "traceKey": "chepiao",
       "traceInfo": [
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "票",
         "py": "piào",
         "hv": "phiếu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这站你下车吗？",
       "qvi": "Trạm này bạn xuống xe chứ?",
       "scene": "🚉🚌",
       "ans": "对，我在这站下车",
       "opts": [
        {
         "txt": "我想买票",
         "ico": "🎫",
         "py": "Wǒ xiǎng mǎi piào"
        },
        {
         "txt": "对，我在这站下车",
         "ico": "🚉",
         "py": "Duì wǒ zài zhè zhàn xià chē"
        },
        {
         "txt": "他是我同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ tóngxué"
        }
       ],
       "qpy": "Zhè zhàn nǐ xià chē ma?"
      },
      {
       "q": "你坐汽车还是飞机？",
       "qvi": "Bạn đi ô tô hay máy bay?",
       "scene": "🚗✈️",
       "ans": "我坐飞机",
       "opts": [
        {
         "txt": "我坐飞机",
         "ico": "✈️",
         "py": "Wǒ zuò fēijī"
        },
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        }
       ],
       "qpy": "Nǐ zuò qìchē háishi fēijī?"
      },
      {
       "q": "你在车站下车吗？",
       "qvi": "Bạn xuống xe ở ga à?",
       "scene": "🚉🚌",
       "ans": "对，我在车站下车",
       "opts": [
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "对，我在车站下车",
         "ico": "🚉",
         "py": "Duì wǒ zài chēzhàn xià chē"
        }
       ],
       "qpy": "Nǐ zài chēzhàn xià chē ma?"
      },
      {
       "q": "你的车在家吗？",
       "qvi": "Xe của bạn ở nhà à?",
       "scene": "🚗🏠",
       "ans": "对，我的车在家",
       "opts": [
        {
         "txt": "我们现在上车",
         "ico": "🚌",
         "py": "Wǒmen xiànzài shàng chē"
        },
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        },
        {
         "txt": "对，我的车在家",
         "ico": "🚗",
         "py": "Duì wǒ de chē zài jiā"
        }
       ],
       "qpy": "Nǐ de chē zài jiā ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn bạn ở ga hoặc sân bay",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc gọi cho một người bạn, nói bạn đang ở đâu: <i>\"我在车站\"</i> hoặc <i>\"我在机场\"</i>.",
       "<b>Bước 2:</b> Nói bạn đang làm gì ở đó, ví dụ <i>\"我在车站等火车\"</i> hoặc <i>\"小明在车站买车票\"</i>, rồi tự nói thành tiếng 3 câu về chuyến đi của mình.",
       "<b>Bước 3:</b> Hỏi bạn đang ở đâu: <i>\"你在车站吗？\"</i> rồi tập trả lời <i>\"我在车上\"</i> hoặc <i>\"我在家\"</i>."
      ]
     }
    },
    {
     "id": "1.7B",
     "name": "Bài 1.7B: Hỏi đường và khoảng cách",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 从家到 + 🚉 车站",
       "🏠 从家到机场 + ⚡ 很 + 📏 远",
       "🧑 他 + ⚡ 从北京 + 🏃 来"
      ],
      "tip": "Cấu trúc 从…到… (cóng… dào…, Hán Việt: tùng… đáo…) = từ… đến…, dùng cho nơi chốn: 从家到车站. 从 + nơi xuất phát đứng trước động từ: 他从北京来 = Anh ấy từ Bắc Kinh đến.",
      "vn_tip": "Người Việt hay đặt nơi xuất phát sau động từ như tiếng Việt. Trong tiếng Trung, 从 + nơi chốn phải đứng TRƯỚC động từ: nói 他从北京来, không nói 他来从北京."
     },
     "chunks": [
      {
       "scene": "🧑🏠🚉",
       "full": "我从家到车站",
       "vi": "Tôi đi từ nhà đến ga",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "从家到",
         "ico": "➡️",
         "c": "v",
         "py": "cóng jiā dào",
         "hv": "tòng gia đáo"
        },
        {
         "t": "车站",
         "ico": "🚉",
         "c": "o",
         "py": "chēzhàn",
         "hv": "xa trạm"
        }
       ],
       "traceWord": "车站",
       "py": "Wǒ cóng jiā dào chēzhàn",
       "traceKey": "chezhan",
       "traceInfo": [
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "站",
         "py": "zhàn",
         "hv": "trạm"
        }
       ]
      },
      {
       "scene": "🏠✈️📏",
       "full": "从家到机场很远",
       "vi": "Từ nhà đến sân bay rất xa",
       "parts": [
        {
         "t": "从家到机场",
         "ico": "🏠",
         "c": "s",
         "py": "cóng jiā dào jīchǎng",
         "hv": "tòng gia đáo cơ trường"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "远",
         "ico": "📏",
         "c": "o",
         "py": "yuǎn",
         "hv": "viễn"
        }
       ],
       "traceWord": "远",
       "py": "Cóng jiā dào jīchǎng hěn yuǎn",
       "traceKey": "yuan",
       "traceInfo": [
        {
         "c": "远",
         "py": "yuǎn",
         "hv": "viễn"
        }
       ]
      },
      {
       "scene": "🧑🚉🚶🏠",
       "full": "我从车站走路回家",
       "vi": "Tôi đi bộ từ ga về nhà",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "从车站走路",
         "ico": "🚶",
         "c": "v",
         "py": "cóng chēzhàn zǒulù",
         "hv": "tòng xa trạm tẩu lộ"
        },
        {
         "t": "回家",
         "ico": "🏠",
         "c": "o",
         "py": "huí jiā",
         "hv": "hồi gia"
        }
       ],
       "traceWord": "走路",
       "py": "Wǒ cóng chēzhàn zǒulù huí jiā",
       "traceKey": "zoulu",
       "traceInfo": [
        {
         "c": "走",
         "py": "zǒu",
         "hv": "tẩu"
        },
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        }
       ]
      },
      {
       "scene": "✈️🚉⚡",
       "full": "从机场去车站很快",
       "vi": "Từ sân bay đến ga rất nhanh",
       "parts": [
        {
         "t": "从机场去车站",
         "ico": "✈️",
         "c": "s",
         "py": "cóng jīchǎng qù chēzhàn",
         "hv": "tòng cơ trường khứ xa trạm"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "快",
         "ico": "⚡",
         "c": "o",
         "py": "kuài",
         "hv": "khoái"
        }
       ],
       "traceWord": "快",
       "py": "Cóng jīchǎng qù chēzhàn hěn kuài",
       "traceKey": "kuai",
       "traceInfo": [
        {
         "c": "快",
         "py": "kuài",
         "hv": "khoái"
        }
       ]
      },
      {
       "scene": "👨🛣️🚦",
       "full": "他从马路走到路口",
       "vi": "Anh ấy đi từ đường lớn đến ngã tư",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从马路走到",
         "ico": "🚶",
         "c": "v",
         "py": "cóng mǎlù zǒu dào",
         "hv": "tòng mã lộ tẩu đáo"
        },
        {
         "t": "路口",
         "ico": "🚦",
         "c": "o",
         "py": "lùkǒu",
         "hv": "lộ khẩu"
        }
       ],
       "traceWord": "路口",
       "py": "Tā cóng mǎlù zǒu dào lùkǒu",
       "traceKey": "lukou",
       "traceInfo": [
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        },
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        }
       ]
      },
      {
       "scene": "👥🛣️🏠",
       "full": "他们从路上回来",
       "vi": "Họ từ trên đường trở về",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "从路上",
         "ico": "🛣️",
         "c": "v",
         "py": "cóng lùshang",
         "hv": "tòng lộ thượng"
        },
        {
         "t": "回来",
         "ico": "🔙",
         "c": "o",
         "py": "huílái",
         "hv": "hồi lai"
        }
       ],
       "traceWord": "路上",
       "py": "Tāmen cóng lùshang huílái",
       "traceKey": "lushang",
       "traceInfo": [
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "👨🏙️👋",
       "full": "他从北京来",
       "vi": "Anh ấy từ Bắc Kinh đến",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从北京",
         "ico": "🏙️",
         "c": "v",
         "py": "cóng Běijīng",
         "hv": "tòng bắc kinh"
        },
        {
         "t": "来",
         "ico": "👋",
         "c": "o",
         "py": "lái",
         "hv": "lai"
        }
       ],
       "traceWord": "北京",
       "py": "Tā cóng Běijīng lái",
       "traceKey": "beijing",
       "traceInfo": [
        {
         "c": "北",
         "py": "běi",
         "hv": "bắc"
        },
        {
         "c": "京",
         "py": "jīng",
         "hv": "kinh"
        }
       ]
      },
      {
       "scene": "👥✈️🔙",
       "full": "他们从机场回去",
       "vi": "Họ từ sân bay quay về",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "从机场",
         "ico": "✈️",
         "c": "v",
         "py": "cóng jīchǎng",
         "hv": "tòng cơ trường"
        },
        {
         "t": "回去",
         "ico": "🔙",
         "c": "o",
         "py": "huíqù",
         "hv": "hồi khứ"
        }
       ],
       "traceWord": "回去",
       "py": "Tāmen cóng jīchǎng huíqù",
       "traceKey": "huiqu",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你在看地图吗？",
       "qvi": "Bạn đang xem bản đồ à?",
       "scene": "🧑🗺️",
       "ans": "对，我在看地图",
       "opts": [
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zài jiā"
        },
        {
         "txt": "对，我在看地图",
         "ico": "🗺️",
         "py": "Duì wǒ zài kàn dìtú"
        },
        {
         "txt": "我不想吃饭",
         "ico": "🍚",
         "py": "Wǒ bù xiǎng chīfàn"
        }
       ],
       "qpy": "Nǐ zài kàn dìtú ma?"
      },
      {
       "q": "你想去什么地方？",
       "qvi": "Bạn muốn đi đâu?",
       "scene": "🧑❓📍",
       "ans": "我想去机场",
       "opts": [
        {
         "txt": "我明天回北京",
         "ico": "🏙️",
         "py": "Wǒ míngtiān huí Běijīng"
        },
        {
         "txt": "他是我同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ tóngxué"
        },
        {
         "txt": "我想去机场",
         "ico": "✈️",
         "py": "Wǒ xiǎng qù jīchǎng"
        }
       ],
       "qpy": "Nǐ xiǎng qù shénme dìfang?"
      },
      {
       "q": "见面地点是路口，你知道路吗？",
       "qvi": "Địa điểm gặp là ngã tư, bạn biết đường không?",
       "scene": "🤝📍🚦",
       "ans": "我知道，我马上去",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "我很冷",
         "ico": "🥶",
         "py": "Wǒ hěn lěng"
        },
        {
         "txt": "我知道，我马上去",
         "ico": "🏃",
         "py": "Wǒ zhīdào wǒ mǎshàng qù"
        }
       ],
       "qpy": "Jiànmiàn dìdiǎn shì lùkǒu nǐ zhīdào lù ma?"
      },
      {
       "q": "从家到车站，你走路还是开车？",
       "qvi": "Từ nhà đến ga, bạn đi bộ hay lái xe?",
       "scene": "🏠🚶🚗🚉",
       "ans": "我走路去",
       "opts": [
        {
         "txt": "我走路去",
         "ico": "🚶",
         "py": "Wǒ zǒulù qù"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        }
       ],
       "qpy": "Cóng jiā dào chēzhàn nǐ zǒulù háishi kāichē?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi và chỉ đường",
      "steps": [
       "<b>Bước 1:</b> Mở bản đồ trên điện thoại, chọn nhà bạn và một nơi như ga hoặc sân bay, rồi nói thành tiếng <i>\"从家到车站\"</i> hoặc <i>\"从家到机场很远\"</i>.",
       "<b>Bước 2:</b> Tự nói cách bạn đi: <i>\"我从车站走路回家\"</i>, <i>\"他从马路走到路口\"</i>; thử nói 3 tuyến đường khác nhau mà bạn hay đi.",
       "<b>Bước 3:</b> Nhắn cho một đồng nghiệp hẹn gặp ở một nơi: <i>\"见面地点是路口，你知道吗？\"</i> rồi tập trả lời <i>\"我知道，我马上去\"</i>."
      ]
     }
    },
    {
     "id": "1.7C",
     "name": "Bài 1.7C: Ra vào, đi về, đừng và chưa",
     "grammar": {
      "formulas": [
       "🧑 你 + ⚡ 别 + 🏃 跑",
       "🧑 他 + ⚡ 没 + 🔙 回来",
       "🧑 老师 + ⚡ 没 + 🚪 进来"
      ],
      "tip": "别 (bié, Hán Việt: biệt) + động từ = đừng làm gì (ngăn cản): 你别跑. 没 (méi, Hán Việt: một) + động từ = chưa/đã không làm gì (nói về quá khứ): 他没回来 = Anh ấy chưa về.",
      "vn_tip": "Người Việt hay nhầm 不 và 没. Nói về việc đã không xảy ra hoặc chưa xảy ra thì dùng 没 (他没回来), không dùng 不. Muốn bảo ai \"đừng\" thì dùng 别 (hoặc 不要), không dùng 不."
     },
     "chunks": [
      {
       "scene": "🧑🚫🏃",
       "full": "你别跑",
       "vi": "Bạn đừng chạy",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "别",
         "ico": "🚫",
         "c": "v",
         "py": "bié",
         "hv": "biệt"
        },
        {
         "t": "跑",
         "ico": "🏃",
         "c": "o",
         "py": "pǎo",
         "hv": "bào"
        }
       ],
       "traceWord": "跑",
       "py": "Nǐ bié pǎo",
       "traceKey": "pao",
       "traceInfo": [
        {
         "c": "跑",
         "py": "pǎo",
         "hv": "bào"
        }
       ]
      },
      {
       "scene": "👥🚫🚪",
       "full": "你们别进去",
       "vi": "Các bạn đừng vào trong",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "别",
         "ico": "🚫",
         "c": "v",
         "py": "bié",
         "hv": "biệt"
        },
        {
         "t": "进去",
         "ico": "🚪",
         "c": "o",
         "py": "jìnqù",
         "hv": "tiến khứ"
        }
       ],
       "traceWord": "进去",
       "py": "Nǐmen bié jìnqù",
       "traceKey": "jinqu",
       "traceInfo": [
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      },
      {
       "scene": "👨❌🔙",
       "full": "他没回来",
       "vi": "Anh ấy chưa về",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "没",
         "ico": "❌",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "回来",
         "ico": "🔙",
         "c": "o",
         "py": "huílái",
         "hv": "hồi lai"
        }
       ],
       "traceWord": "回来",
       "py": "Tā méi huílái",
       "traceKey": "huilai",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "🧑❌🏠",
       "full": "我没回家",
       "vi": "Tôi không về nhà",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "没",
         "ico": "❌",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "回家",
         "ico": "🏠",
         "c": "o",
         "py": "huí jiā",
         "hv": "hồi gia"
        }
       ],
       "traceWord": "回家",
       "py": "Wǒ méi huí jiā",
       "traceKey": "huijia",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      },
      {
       "scene": "👩‍🏫❌🚪",
       "full": "老师没进来",
       "vi": "Thầy giáo chưa vào",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "没",
         "ico": "❌",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "进来",
         "ico": "🚪",
         "c": "o",
         "py": "jìnlái",
         "hv": "tiến lai"
        }
       ],
       "traceWord": "进来",
       "py": "Lǎoshī méi jìnlái",
       "traceKey": "jinlai",
       "traceInfo": [
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "👨❌✈️",
       "full": "他没坐过飞机",
       "vi": "Anh ấy chưa từng đi máy bay",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "没",
         "ico": "❌",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "坐过飞机",
         "ico": "✈️",
         "c": "o",
         "py": "zuò guò fēijī",
         "hv": "tọa quá phi cơ"
        }
       ],
       "traceWord": "飞机",
       "py": "Tā méi zuò guò fēijī",
       "traceKey": "feiji",
       "traceInfo": [
        {
         "c": "飞",
         "py": "fēi",
         "hv": "phi"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "🤝❌🛫",
       "full": "朋友没来到机场",
       "vi": "Bạn tôi chưa đến sân bay",
       "parts": [
        {
         "t": "朋友",
         "ico": "🤝",
         "c": "s",
         "py": "péngyou",
         "hv": "bằng hữu"
        },
        {
         "t": "没",
         "ico": "❌",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "来到机场",
         "ico": "🛫",
         "c": "o",
         "py": "láidào jīchǎng",
         "hv": "lai đáo cơ trường"
        }
       ],
       "traceWord": "来到",
       "py": "Péngyou méi láidào jīchǎng",
       "traceKey": "laidao",
       "traceInfo": [
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑🚫🚶",
       "full": "你别出去",
       "vi": "Bạn đừng ra ngoài",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "别",
         "ico": "🚫",
         "c": "v",
         "py": "bié",
         "hv": "biệt"
        },
        {
         "t": "出去",
         "ico": "🚶",
         "c": "o",
         "py": "chūqù",
         "hv": "xuất khứ"
        }
       ],
       "traceWord": "出去",
       "py": "Nǐ bié chūqù",
       "traceKey": "chuqu",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "我在路口，你出来吗？",
       "qvi": "Tôi ở ngã tư, bạn ra không?",
       "scene": "🚦🧑🚪",
       "ans": "好，我马上出来",
       "opts": [
        {
         "txt": "小明是我同学",
         "ico": "🧑‍🎓",
         "py": "Xiǎomíng shì wǒ tóngxué"
        },
        {
         "txt": "好，我马上出来",
         "ico": "🚪",
         "py": "Hǎo wǒ mǎshàng chūlái"
        },
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        }
       ],
       "qpy": "Wǒ zài lùkǒu nǐ chūlái ma?"
      },
      {
       "q": "现在回去吗？",
       "qvi": "Bây giờ về luôn chứ?",
       "scene": "⏰🔙",
       "ans": "对，我们现在回去",
       "opts": [
        {
         "txt": "朋友明天飞北京",
         "ico": "✈️",
         "py": "Péngyou míngtiān fēi Běijīng"
        },
        {
         "txt": "对，我们现在回去",
         "ico": "🔙",
         "py": "Duì wǒmen xiànzài huíqù"
        },
        {
         "txt": "他是老师",
         "ico": "👩‍🏫",
         "py": "Tā shì lǎoshī"
        }
       ],
       "qpy": "Xiànzài huíqù ma?"
      },
      {
       "q": "你什么时候回到家？",
       "qvi": "Khi nào bạn về đến nhà?",
       "scene": "🧑🏠⏰",
       "ans": "我明天回到家",
       "opts": [
        {
         "txt": "我们七点出",
         "ico": "🚪",
         "py": "Wǒmen qī diǎn chū"
        },
        {
         "txt": "我明天回到家",
         "ico": "🏠",
         "py": "Wǒ míngtiān huídào jiā"
        },
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        }
       ],
       "qpy": "Nǐ shénme shíhou huídào jiā?"
      },
      {
       "q": "我进去吗？",
       "qvi": "Tôi vào trong nhé?",
       "scene": "🧑🚪❓",
       "ans": "别进去，等一下儿",
       "opts": [
        {
         "txt": "别进去，等一下儿",
         "ico": "✋",
         "py": "Bié jìnqù děng yīxiàr"
        },
        {
         "txt": "我们都是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒmen dōu shì xuéshēng"
        },
        {
         "txt": "他在北京",
         "ico": "🏙️",
         "py": "Tā zài Běijīng"
        }
       ],
       "qpy": "Wǒ jìnqù ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin báo ai đã về chưa",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi xem mọi người đã đến chưa, rồi tự trả lời bằng những câu như <i>\"他没回来\"</i> hoặc <i>\"老师没进来\"</i>.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu khuyên nhủ trong văn phòng hoặc ngoài đường, ví dụ <i>\"你别跑\"</i>, <i>\"你们别进去\"</i>, <i>\"你别出去\"</i>.",
       "<b>Bước 3:</b> Kể bằng tiếng Trung những việc bạn chưa làm, ví dụ <i>\"我没回家\"</i> và <i>\"他没坐过飞机\"</i>, rồi thay chủ ngữ để nói thêm 3 câu nữa."
      ]
     }
    }
   ]
  },
  "1.8": {
   "lessons": [
    {
     "id": "1.8A",
     "name": "Bài 1.8A: Bận rộn, nghỉ ngơi, đi làm tan làm",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 下班 + ✅ 了",
       "🧑 他 + 😩 累 + ✅ 了",
       "❓ 你 + 😩 忙 + ❓ 吗？"
      ],
      "tip": "Trợ từ 了 (le, liễu) đặt cuối câu để báo trạng thái đã thay đổi: 我下班了 = Tôi tan làm rồi (trước đó chưa tan). Phủ định sự việc đã xảy ra dùng 没有, không dùng 不.",
      "vn_tip": "Người Việt hay thêm 已经 hoặc dùng 了 sau mọi động từ như \"đã\". Thực ra 了 cuối câu nhấn mạnh sự thay đổi, thường dịch là \"rồi\": 他放假了 = Anh ấy nghỉ rồi. Muốn nói chưa làm thì dùng 没有, không nói 不下班了."
     },
     "chunks": [
      {
       "scene": "🧑🏢🚪",
       "full": "我下班了",
       "vi": "Tôi tan làm rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "下班",
         "ico": "🚪",
         "c": "v",
         "py": "xiàbān",
         "hv": "hạ ban"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "下班",
       "py": "Wǒ xiàbān le",
       "traceKey": "xiaban",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "班",
         "py": "bān",
         "hv": "ban"
        }
       ]
      },
      {
       "scene": "👨😩💤",
       "full": "他累了",
       "vi": "Anh ấy mệt rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "累",
         "ico": "😩",
         "c": "v",
         "py": "lèi",
         "hv": "lụy"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "累",
       "py": "Tā lèi le",
       "traceKey": "lei",
       "traceInfo": [
        {
         "c": "累",
         "py": "lèi",
         "hv": "lụy"
        }
       ]
      },
      {
       "scene": "🧑🙅‍♂️📋",
       "full": "我没有事",
       "vi": "Tôi không có việc gì",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "没有",
         "ico": "🙅‍♂️",
         "c": "v",
         "py": "méiyǒu",
         "hv": "một hữu"
        },
        {
         "t": "事",
         "ico": "📋",
         "c": "o",
         "py": "shì",
         "hv": "sự"
        }
       ],
       "traceWord": "没有",
       "py": "Wǒ méiyǒu shì",
       "traceKey": "meiyou",
       "traceInfo": [
        {
         "c": "没",
         "py": "méi",
         "hv": "một"
        },
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "👩📝🏖️",
       "full": "她请假了",
       "vi": "Cô ấy xin nghỉ phép rồi",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "请假",
         "ico": "📝",
         "c": "v",
         "py": "qǐngjià",
         "hv": "thỉnh giá"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "请假",
       "py": "Tā qǐngjià le",
       "traceKey": "qingjia",
       "traceInfo": [
        {
         "c": "请",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "c": "假",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "👥🛋️😌",
       "full": "他们休息了",
       "vi": "Họ nghỉ ngơi rồi",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "休息",
         "ico": "🛋️",
         "c": "v",
         "py": "xiūxi",
         "hv": "hưu tức"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "休息",
       "py": "Tāmen xiūxi le",
       "traceKey": "xiuxi",
       "traceInfo": [
        {
         "c": "休",
         "py": "xiū",
         "hv": "hưu"
        },
        {
         "c": "息",
         "py": "xi",
         "hv": "tức"
        }
       ]
      },
      {
       "scene": "👨🎉🏖️",
       "full": "他放假了",
       "vi": "Anh ấy được nghỉ rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "放假",
         "ico": "🏖️",
         "c": "v",
         "py": "fàngjià",
         "hv": "phóng giá"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "放假",
       "py": "Tā fàngjià le",
       "traceKey": "fangjia",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "假",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "👨‍⚕️💼🗣️",
       "full": "医生开会了",
       "vi": "Bác sĩ họp rồi",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "开会",
         "ico": "🗣️",
         "c": "v",
         "py": "kāihuì",
         "hv": "khai hội"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "医生",
       "py": "Yīshēng kāihuì le",
       "traceKey": "yisheng",
       "traceInfo": [
        {
         "c": "医",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "👷🏭⏰",
       "full": "工人上班了",
       "vi": "Công nhân đi làm rồi",
       "parts": [
        {
         "t": "工人",
         "ico": "👷",
         "c": "s",
         "py": "gōngrén",
         "hv": "công nhân"
        },
        {
         "t": "上班",
         "ico": "🏭",
         "c": "v",
         "py": "shàngbān",
         "hv": "thượng ban"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "工人",
       "py": "Gōngrén shàngbān le",
       "traceKey": "gongren",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你今天忙吗？",
       "qvi": "Hôm nay bạn có bận không?",
       "scene": "🧑💼😓",
       "ans": "我今天很忙",
       "opts": [
        {
         "txt": "我今天很忙",
         "ico": "😓",
         "py": "Wǒ jīntiān hěn máng"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "我喜欢吃肉",
         "ico": "🍖",
         "py": "Wǒ xǐhuan chī ròu"
        }
       ],
       "qpy": "Nǐ jīntiān máng ma?"
      },
      {
       "q": "你有事吗？",
       "qvi": "Bạn có việc không?",
       "scene": "🧑❓📋",
       "ans": "我没事儿",
       "opts": [
        {
         "txt": "我去中国",
         "ico": "🇨🇳",
         "py": "Wǒ qù Zhōngguó"
        },
        {
         "txt": "我没事儿",
         "ico": "👌",
         "py": "Wǒ méishìr"
        },
        {
         "txt": "他是医生",
         "ico": "👨‍⚕️",
         "py": "Tā shì yīshēng"
        }
       ],
       "qpy": "Nǐ yǒu shì ma?"
      },
      {
       "q": "你的工作累吗？",
       "qvi": "Công việc của bạn có mệt không?",
       "scene": "💼😩",
       "ans": "我的工作不累",
       "opts": [
        {
         "txt": "我是工人",
         "ico": "👷",
         "py": "Wǒ shì gōngrén"
        },
        {
         "txt": "我们在家",
         "ico": "🏠",
         "py": "Wǒmen zài jiā"
        },
        {
         "txt": "我的工作不累",
         "ico": "😊",
         "py": "Wǒ de gōngzuò bú lèi"
        }
       ],
       "qpy": "Nǐ de gōngzuò lèi ma?"
      },
      {
       "q": "你下午上班吗？",
       "qvi": "Buổi chiều bạn có đi làm không?",
       "scene": "🧑🌇🏢",
       "ans": "我下午休息",
       "opts": [
        {
         "txt": "我是大学生",
         "ico": "🎓",
         "py": "Wǒ shì dàxuéshēng"
        },
        {
         "txt": "他喝水",
         "ico": "🥤",
         "py": "Tā hē shuǐ"
        },
        {
         "txt": "我下午休息",
         "ico": "🛋️",
         "py": "Wǒ xiàwǔ xiūxi"
        }
       ],
       "qpy": "Nǐ xiàwǔ shàngbān ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin cho đồng nghiệp về lịch làm việc",
      "steps": [
       "<b>Bước 1:</b> Hôm nay bạn đang bận hay rảnh? Nhắn cho đồng nghiệp: <i>\"我今天很忙\"</i> hoặc <i>\"我没事儿\"</i>.",
       "<b>Bước 2:</b> Khi tan làm, nhắn <i>\"我下班了\"</i>; nếu đồng nghiệp xin nghỉ, hỏi lại và nói <i>\"他请假了\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu về hôm nay với 了: tan làm, nghỉ ngơi, họp xong, nghỉ phép, đi làm rồi."
      ]
     }
    },
    {
     "id": "1.8B",
     "name": "Bài 1.8B: Đang làm gì, chuẩn bị công việc",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏳ 正在 + 💼 上班",
       "👨 他 + ⏳ 正在 + 📖 认真学习",
       "❓ 你 + ⏳ 正在 + ❓ 干什么？"
      ],
      "tip": "Thể tiến hành: Chủ ngữ + 正在 (zhèngzài, chính tại) + động từ = đang làm gì. Cũng có thể nói ngắn 正 hoặc 在 trước động từ.",
      "vn_tip": "Người Việt hay quên hẳn 正在 hoặc đặt nó sau động từ. Trong tiếng Trung, 正在 luôn đứng ngay trước động từ: 我正在做饭, không nói 我做饭正在."
     },
     "chunks": [
      {
       "scene": "🧑🍚⏳",
       "full": "我正吃饭呢",
       "vi": "Tôi đang ăn cơm đây",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "正",
         "ico": "⏳",
         "c": "v",
         "py": "zhèng",
         "hv": "chính"
        },
        {
         "t": "吃饭呢",
         "ico": "🍚",
         "c": "o",
         "py": "chīfàn ne",
         "hv": "cật phạn ni"
        }
       ],
       "traceWord": "正",
       "py": "Wǒ zhèng chīfàn ne",
       "traceKey": "zheng",
       "traceInfo": [
        {
         "c": "正",
         "py": "zhèng",
         "hv": "chính"
        }
       ]
      },
      {
       "scene": "🧑❓⏳",
       "full": "你正在干什么",
       "vi": "Bạn đang làm gì thế",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "干什么",
         "ico": "❓",
         "c": "o",
         "py": "gàn shénme",
         "hv": "cán thập ma"
        }
       ],
       "traceWord": "干什么",
       "py": "Nǐ zhèngzài gàn shénme",
       "traceKey": "ganshenme",
       "traceInfo": [
        {
         "c": "干",
         "py": "gàn",
         "hv": "cán"
        },
        {
         "c": "什",
         "py": "shén",
         "hv": "thập"
        },
        {
         "c": "么",
         "py": "me",
         "hv": "ma"
        }
       ]
      },
      {
       "scene": "🧑🍳🍚",
       "full": "我正在做饭",
       "vi": "Tôi đang nấu cơm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "做饭",
         "ico": "🍳",
         "c": "o",
         "py": "zuò fàn",
         "hv": "tố phạn"
        }
       ],
       "traceWord": "做",
       "py": "Wǒ zhèngzài zuò fàn",
       "traceKey": "zuo",
       "traceInfo": [
        {
         "c": "做",
         "py": "zuò",
         "hv": "tố"
        }
       ]
      },
      {
       "scene": "👨📖✏️",
       "full": "他正在认真学习",
       "vi": "Anh ấy đang chăm chú học",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "认真学习",
         "ico": "📖",
         "c": "o",
         "py": "rènzhēn xuéxí",
         "hv": "nhận chân học tập"
        }
       ],
       "traceWord": "认真",
       "py": "Tā zhèngzài rènzhēn xuéxí",
       "traceKey": "renzhen",
       "traceInfo": [
        {
         "c": "认",
         "py": "rèn",
         "hv": "nhận"
        },
        {
         "c": "真",
         "py": "zhēn",
         "hv": "chân"
        }
       ]
      },
      {
       "scene": "🧑🍱⏳",
       "full": "我正在准备午饭",
       "vi": "Tôi đang chuẩn bị bữa trưa",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "准备午饭",
         "ico": "🍱",
         "c": "o",
         "py": "zhǔnbèi wǔfàn",
         "hv": "chuẩn bị ngọ phạn"
        }
       ],
       "traceWord": "准备",
       "py": "Wǒ zhèngzài zhǔnbèi wǔfàn",
       "traceKey": "zhunbei",
       "traceInfo": [
        {
         "c": "准",
         "py": "zhǔn",
         "hv": "chuẩn"
        },
        {
         "c": "备",
         "py": "bèi",
         "hv": "bị"
        }
       ]
      },
      {
       "scene": "👨🤝⏳",
       "full": "他正在帮忙",
       "vi": "Anh ấy đang giúp một tay",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "帮忙",
         "ico": "🤝",
         "c": "o",
         "py": "bāngmáng",
         "hv": "bang mang"
        }
       ],
       "traceWord": "帮忙",
       "py": "Tā zhèngzài bāngmáng",
       "traceKey": "bangmang",
       "traceInfo": [
        {
         "c": "帮",
         "py": "bāng",
         "hv": "bang"
        },
        {
         "c": "忙",
         "py": "máng",
         "hv": "mang"
        }
       ]
      },
      {
       "scene": "🧑🤝✍️",
       "full": "我正在帮你写字",
       "vi": "Tôi đang giúp bạn viết chữ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "帮你写字",
         "ico": "✍️",
         "c": "o",
         "py": "bāng nǐ xiě zì",
         "hv": "bang nễ tả tự"
        }
       ],
       "traceWord": "帮",
       "py": "Wǒ zhèngzài bāng nǐ xiě zì",
       "traceKey": "bang",
       "traceInfo": [
        {
         "c": "帮",
         "py": "bāng",
         "hv": "bang"
        }
       ]
      },
      {
       "scene": "👨📚⏳",
       "full": "他正在用这本书",
       "vi": "Anh ấy đang dùng cuốn sách này",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "用这本书",
         "ico": "📚",
         "c": "o",
         "py": "yòng zhè běn shū",
         "hv": "dụng giá bản thư"
        }
       ],
       "traceWord": "用",
       "py": "Tā zhèngzài yòng zhè běn shū",
       "traceKey": "yong",
       "traceInfo": [
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你得到机票了吗？",
       "qvi": "Bạn nhận được vé máy bay chưa?",
       "scene": "🧑✈️🎫",
       "ans": "我得到机票了",
       "opts": [
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "我得到机票了",
         "ico": "🎫",
         "py": "Wǒ dédào jīpiào le"
        },
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        }
       ],
       "qpy": "Nǐ dédào jīpiào le ma?"
      },
      {
       "q": "你在干吗？",
       "qvi": "Bạn đang làm gì thế?",
       "scene": "🧑❓⏳",
       "ans": "我正在写字",
       "opts": [
        {
         "txt": "我没有钱",
         "ico": "💰",
         "py": "Wǒ méiyǒu qián"
        },
        {
         "txt": "他是医生",
         "ico": "👨‍⚕️",
         "py": "Tā shì yīshēng"
        },
        {
         "txt": "我正在写字",
         "ico": "✍️",
         "py": "Wǒ zhèngzài xiě zì"
        }
       ],
       "qpy": "Nǐ zài gàn ma?"
      },
      {
       "q": "这个工作重要吗？",
       "qvi": "Công việc này có quan trọng không?",
       "scene": "💼⭐❓",
       "ans": "非常重要",
       "opts": [
        {
         "txt": "你写错了",
         "ico": "❌",
         "py": "Nǐ xiě cuò le"
        },
        {
         "txt": "非常重要",
         "ico": "⭐",
         "py": "Fēicháng zhòngyào"
        },
        {
         "txt": "他是男孩儿",
         "ico": "👦",
         "py": "Tā shì nánháir"
        }
       ],
       "qpy": "Zhè gè gōngzuò zhòngyào ma?"
      },
      {
       "q": "这本书有用吗？",
       "qvi": "Cuốn sách này có ích không?",
       "scene": "📖💡❓",
       "ans": "很有用",
       "opts": [
        {
         "txt": "很有用",
         "ico": "💡",
         "py": "Hěn yǒuyòng"
        },
        {
         "txt": "我们班有二十人",
         "ico": "👥",
         "py": "Wǒmen bān yǒu èr shí rén"
        },
        {
         "txt": "他在北京",
         "ico": "🏙️",
         "py": "Tā zài Běijīng"
        }
       ],
       "qpy": "Zhè běn shū yǒuyòng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gọi điện hỏi đồng nghiệp đang làm gì",
      "steps": [
       "<b>Bước 1:</b> Gọi hoặc nhắn đồng nghiệp: <i>\"你正在干什么？\"</i> rồi nghe họ trả lời, ví dụ <i>\"我正在上班\"</i>.",
       "<b>Bước 2:</b> Nói bạn đang chuẩn bị gì: <i>\"我正在准备午饭\"</i>; nếu cần, nhờ giúp: <i>\"请你帮忙\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu với 正在 về những việc bạn đang làm lúc này (làm việc, học, nấu ăn, giúp đỡ)."
      ]
     }
    },
    {
     "id": "1.8C",
     "name": "Bài 1.8C: Học tập, đào tạo, thi cử",
     "grammar": {
      "formulas": [
       "🧑 我 + 🔔 下课 + ✅ 了",
       "🧑 我 + 📝 考了 + 🔢 一次",
       "👥 他们 + 🏫 上课 + ✅ 了"
      ],
      "tip": "Trợ từ 了 đặt ngay sau động từ để nói hành động đã hoàn thành: 我读了课文 = Tôi đã đọc bài khóa. Cuối câu, 了 còn báo sự thay đổi: 下课了 = tan học rồi.",
      "vn_tip": "Người Việt hay dịch \"đã\" thành 已经 và quên 了, hoặc đặt 了 ở sai chỗ. Với số lần, đặt sau 了: 我考了一次 (Tôi đã thi một lần). Chữ 第 (đệ) đứng trước số thứ tự: 第二次."
     },
     "chunks": [
      {
       "scene": "🧑🔔📚",
       "full": "我下课了",
       "vi": "Tôi tan học rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "下课",
         "ico": "🔔",
         "c": "v",
         "py": "xiàkè",
         "hv": "hạ khóa"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "下课",
       "py": "Wǒ xiàkè le",
       "traceKey": "xiake",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        }
       ]
      },
      {
       "scene": "👥🏫📖",
       "full": "他们上课了",
       "vi": "Họ vào học rồi",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "上课",
         "ico": "🏫",
         "c": "v",
         "py": "shàngkè",
         "hv": "thượng khóa"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "上课",
       "py": "Tāmen shàngkè le",
       "traceKey": "shangke",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        }
       ]
      },
      {
       "scene": "🧑📖✅",
       "full": "我读了课文",
       "vi": "Tôi đã đọc bài khóa",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "读了",
         "ico": "📖",
         "c": "v",
         "py": "dú le",
         "hv": "độc liễu"
        },
        {
         "t": "课文",
         "ico": "📄",
         "c": "o",
         "py": "kèwén",
         "hv": "khóa văn"
        }
       ],
       "traceWord": "课文",
       "py": "Wǒ dú le kèwén",
       "traceKey": "kewen",
       "traceInfo": [
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "🧑📝1️⃣",
       "full": "我考了一次",
       "vi": "Tôi đã thi một lần",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "考了",
         "ico": "📝",
         "c": "v",
         "py": "kǎo le",
         "hv": "khảo liễu"
        },
        {
         "t": "一次",
         "ico": "1️⃣",
         "c": "o",
         "py": "yī cì",
         "hv": "nhất thứ"
        }
       ],
       "traceWord": "考",
       "py": "Wǒ kǎo le yī cì",
       "traceKey": "kao",
       "traceInfo": [
        {
         "c": "考",
         "py": "kǎo",
         "hv": "khảo"
        }
       ]
      },
      {
       "scene": "🧑📚🏫",
       "full": "我有课",
       "vi": "Tôi có tiết học",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "课",
         "ico": "📚",
         "c": "o",
         "py": "kè",
         "hv": "khóa"
        }
       ],
       "traceWord": "课",
       "py": "Wǒ yǒu kè",
       "traceKey": "ke",
       "traceInfo": [
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        }
       ]
      },
      {
       "scene": "👦🎒🔔",
       "full": "他放学了",
       "vi": "Cậu bé tan học rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👦",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "放学",
         "ico": "🔔",
         "c": "v",
         "py": "fàngxué",
         "hv": "phóng học"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "放学",
       "py": "Tā fàngxué le",
       "traceKey": "fangxue",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "👧🎒🏫",
       "full": "她上学了",
       "vi": "Cô bé đi học rồi",
       "parts": [
        {
         "t": "她",
         "ico": "👧",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "上学",
         "ico": "🏫",
         "c": "v",
         "py": "shàngxué",
         "hv": "thượng học"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "上学",
       "py": "Tā shàngxué le",
       "traceKey": "shangxue",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "🧑👂✍️",
       "full": "我听写了",
       "vi": "Tôi đã viết chính tả rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "听写",
         "ico": "✍️",
         "c": "v",
         "py": "tīngxiě",
         "hv": "thính tả"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "听写",
       "py": "Wǒ tīngxiě le",
       "traceKey": "tingxie",
       "traceInfo": [
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        },
        {
         "c": "写",
         "py": "xiě",
         "hv": "tả"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你是大学生吗？",
       "qvi": "Bạn là sinh viên đại học à?",
       "scene": "🧑🎓❓",
       "ans": "我是大学生",
       "opts": [
        {
         "txt": "我是大学生",
         "ico": "🎓",
         "py": "Wǒ shì dàxuéshēng"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "他在北京",
         "ico": "🏙️",
         "py": "Tā zài Běijīng"
        }
       ],
       "qpy": "Nǐ shì dàxuéshēng ma?"
      },
      {
       "q": "这是第几次考试？",
       "qvi": "Đây là kỳ thi lần thứ mấy?",
       "scene": "📝🔢❓",
       "ans": "这是第二次考试",
       "opts": [
        {
         "txt": "我在家里吃饭",
         "ico": "🍚",
         "py": "Wǒ zài jiā li chīfàn"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👨",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "这是第二次考试",
         "ico": "2️⃣",
         "py": "Zhè shì dì èr cì kǎoshì"
        }
       ],
       "qpy": "Zhè shì dì jǐ cì kǎoshì?"
      },
      {
       "q": "他在大学读书吗？",
       "qvi": "Anh ấy học ở trường đại học à?",
       "scene": "👨🏫📖",
       "ans": "他在大学读书",
       "opts": [
        {
         "txt": "他在商店买水",
         "ico": "🛒",
         "py": "Tā zài shāngdiàn mǎi shuǐ"
        },
        {
         "txt": "他在大学读书",
         "ico": "📖",
         "py": "Tā zài dàxué dúshū"
        },
        {
         "txt": "他去机场",
         "ico": "✈️",
         "py": "Tā qù jīchǎng"
        }
       ],
       "qpy": "Tā zài dàxué dúshū ma?"
      },
      {
       "q": "这本书有什么？",
       "qvi": "Cuốn sách này có gì?",
       "scene": "📘💡❓",
       "ans": "这本书有知识",
       "opts": [
        {
         "txt": "我在回家",
         "ico": "🏠",
         "py": "Wǒ zài huí jiā"
        },
        {
         "txt": "这本书有知识",
         "ico": "💡",
         "py": "Zhè běn shū yǒu zhīshi"
        },
        {
         "txt": "他喜欢喝牛奶",
         "ico": "🥛",
         "py": "Tā xǐhuan hē niúnǎi"
        }
       ],
       "qpy": "Zhè běn shū yǒu shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể với bạn về lớp học và kỳ thi",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho bạn học: <i>\"我下课了\"</i> rồi hỏi <i>\"你上课了吗？\"</i> (hoặc nói bạn đã thi xong: <i>\"我们考试了\"</i>).",
       "<b>Bước 2:</b> Kể về việc học: <i>\"我读了课文\"</i>, <i>\"我考了一次\"</i>, và hỏi <i>\"这是第几次考试？\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu với 了 về buổi học hôm nay: tan học, thi, đọc bài, viết chính tả."
      ]
     }
    }
   ]
  },
  "1.9": {
   "lessons": [
    {
     "id": "1.9A",
     "name": "Bài 1.9A: Nhà ở và các phòng",
     "grammar": {
      "formulas": [
       "📍 房间里 + ⚡ 有 + 🛏️ 床",
       "📍 楼下 + ⚡ 有 + 🏪 书店",
       "❓ 房子里边 + ⚡ 有 + 🤔 什么？"
      ],
      "tip": "Câu tồn tại: Nơi chốn + 有 (yǒu, hữu) + người/vật, nghĩa là \"ở đâu có cái gì\". Nơi chốn đứng ĐẦU câu, không cần 在. Ví dụ: 楼上有人 = Trên lầu có người.",
      "vn_tip": "Người Việt hay nói 有床在房间里 theo trật tự \"Có giường ở trong phòng\". Tiếng Trung phải đặt nơi chốn trước: 房间里有床. Còn 在 dùng khi vật là chủ ngữ: 床在房间里."
     },
     "chunks": [
      {
       "scene": "🚪🚗",
       "full": "门口有车",
       "vi": "Ở cửa có xe",
       "parts": [
        {
         "t": "门口",
         "ico": "🚪",
         "c": "s",
         "py": "ménkǒu",
         "hv": "môn khẩu"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "车",
         "ico": "🚗",
         "c": "o",
         "py": "chē",
         "hv": "xa"
        }
       ],
       "traceWord": "门口",
       "py": "Ménkǒu yǒu chē",
       "traceKey": "menkou",
       "traceInfo": [
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        },
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        }
       ]
      },
      {
       "scene": "🏠🛏️",
       "full": "房间里有床",
       "vi": "Trong phòng có giường",
       "parts": [
        {
         "t": "房间里",
         "ico": "🏠",
         "c": "s",
         "py": "fángjiān lǐ",
         "hv": "phòng gian lý"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "床",
         "ico": "🛏️",
         "c": "o",
         "py": "chuáng",
         "hv": "sàng"
        }
       ],
       "traceWord": "房间",
       "py": "Fángjiān lǐ yǒu chuáng",
       "traceKey": "fangjian",
       "traceInfo": [
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        },
        {
         "c": "间",
         "py": "jiān",
         "hv": "gian"
        }
       ]
      },
      {
       "scene": "🏢⬆️🧑",
       "full": "楼上有人",
       "vi": "Trên lầu có người",
       "parts": [
        {
         "t": "楼上",
         "ico": "⬆️",
         "c": "s",
         "py": "lóu shàng",
         "hv": "lâu thượng"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "人",
         "ico": "🧑",
         "c": "o",
         "py": "rén",
         "hv": "nhân"
        }
       ],
       "traceWord": "楼上",
       "py": "Lóu shàng yǒu rén",
       "traceKey": "loushang",
       "traceInfo": [
        {
         "c": "楼",
         "py": "lóu",
         "hv": "lâu"
        },
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🏢⬇️📚",
       "full": "楼下有书店",
       "vi": "Dưới lầu có hiệu sách",
       "parts": [
        {
         "t": "楼下",
         "ico": "⬇️",
         "c": "s",
         "py": "lóu xià",
         "hv": "lâu hạ"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "书店",
         "ico": "📚",
         "c": "o",
         "py": "shūdiàn",
         "hv": "thư điếm"
        }
       ],
       "traceWord": "楼下",
       "py": "Lóu xià yǒu shūdiàn",
       "traceKey": "louxia",
       "traceInfo": [
        {
         "c": "楼",
         "py": "lóu",
         "hv": "lâu"
        },
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "🧑🏢⬆️",
       "full": "我住了半年",
       "vi": "Tôi đã ở đây nửa năm rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "住了",
         "ico": "⚡",
         "c": "v",
         "py": "zhù le",
         "hv": "trú liễu"
        },
        {
         "t": "半年",
         "ico": "🏢",
         "c": "o",
         "py": "bàn nián",
         "hv": "bán niên"
        }
       ],
       "traceWord": "半年",
       "py": "Wǒ zhù le bàn nián",
       "traceKey": "bannian",
       "traceInfo": [
        {
         "c": "半",
         "py": "bàn",
         "hv": "bán"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "🏠🪑",
       "full": "房子里边有桌子",
       "vi": "Trong nhà có cái bàn",
       "parts": [
        {
         "t": "房子里边",
         "ico": "🏠",
         "c": "s",
         "py": "fángzi lǐbian",
         "hv": "phòng tử lý biên"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "桌子",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi",
         "hv": "trác tử"
        }
       ],
       "traceWord": "房子",
       "py": "Fángzi lǐbian yǒu zhuōzi",
       "traceKey": "fangzi",
       "traceInfo": [
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🙋🚪🔓",
       "full": "请你打开门",
       "vi": "Xin bạn mở cửa ra",
       "parts": [
        {
         "t": "请你",
         "ico": "🙋",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nễ"
        },
        {
         "t": "打开",
         "ico": "🔓",
         "c": "v",
         "py": "dǎkāi",
         "hv": "đả khai"
        },
        {
         "t": "门",
         "ico": "🚪",
         "c": "o",
         "py": "mén",
         "hv": "môn"
        }
       ],
       "traceWord": "打开",
       "py": "Qǐng nǐ dǎkāi mén",
       "traceKey": "dakai",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        }
       ]
      },
      {
       "scene": "🙏🚪🔒",
       "full": "请关上门",
       "vi": "Xin đóng cửa lại",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "关上",
         "ico": "🔒",
         "c": "v",
         "py": "guānshang",
         "hv": "quan thượng"
        },
        {
         "t": "门",
         "ico": "🚪",
         "c": "o",
         "py": "mén",
         "hv": "môn"
        }
       ],
       "traceWord": "关上",
       "py": "Qǐng guānshang mén",
       "traceKey": "guanshang",
       "traceInfo": [
        {
         "c": "关",
         "py": "guān",
         "hv": "quan"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你住几楼？",
       "qvi": "Bạn sống ở tầng mấy?",
       "scene": "🧑🏢",
       "ans": "我住五楼",
       "opts": [
        {
         "txt": "我住五楼",
         "ico": "🏢",
         "py": "Wǒ zhù wǔ lóu"
        },
        {
         "txt": "我有两个哥哥",
         "ico": "👨‍👦",
         "py": "Wǒ yǒu liǎng gè gēge"
        },
        {
         "txt": "我今天很忙",
         "ico": "😓",
         "py": "Wǒ jīntiān hěn máng"
        }
       ],
       "qpy": "Nǐ zhù jǐ lóu?"
      },
      {
       "q": "今天你在家吗？",
       "qvi": "Hôm nay bạn có ở nhà không?",
       "scene": "🧑🏠",
       "ans": "我在家",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        },
        {
         "txt": "我吃了",
         "ico": "🍚",
         "py": "Wǒ chī le"
        }
       ],
       "qpy": "Jīntiān nǐ zàijiā ma?"
      },
      {
       "q": "谁在开门？",
       "qvi": "Ai đang mở cửa?",
       "scene": "🚪🔓",
       "ans": "小明在开门",
       "opts": [
        {
         "txt": "小明在写字",
         "ico": "✍️",
         "py": "Xiǎomíng zài xiě zì"
        },
        {
         "txt": "小明在喝茶",
         "ico": "🍵",
         "py": "Xiǎomíng zài hē chá"
        },
        {
         "txt": "小明在开门",
         "ico": "🚪",
         "py": "Xiǎomíng zài kāi mén"
        }
       ],
       "qpy": "Shéi zài kāi mén?"
      },
      {
       "q": "门是开着还是关着？",
       "qvi": "Cửa đang mở hay đang đóng?",
       "scene": "🚪❓",
       "ans": "门是关着的",
       "opts": [
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        },
        {
         "txt": "他在打电话",
         "ico": "📞",
         "py": "Tā zài dǎ diànhuà"
        },
        {
         "txt": "门是关着的",
         "ico": "🔒",
         "py": "Mén shì guān zhe de"
        }
       ],
       "qpy": "Mén shì kāi zhe háishi guān zhe?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu nhà của bạn",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh nhà, nói thành tiếng 5 câu về đồ vật trong từng phòng, ví dụ <i>\"房间里有床\"</i>, <i>\"房子里边有桌子\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp sắp đến chơi: nói bạn sống tầng mấy (<i>\"我住五楼\"</i>) và dưới lầu có gì (<i>\"楼下有书店\"</i>).",
       "<b>Bước 3:</b> Khi đồng nghiệp đến, tập nói <i>\"请你打开门\"</i> và <i>\"请关上门\"</i> với người thân hoặc tự đóng vai ở cửa nhà."
      ]
     }
    },
    {
     "id": "1.9B",
     "name": "Bài 1.9B: Điện thoại, máy tính, mạng",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 一边吃 + 🗣️ 一边说",
       "🧑 她 + ⚡ 一边走 + 😄 一边笑"
      ],
      "tip": "Hai việc diễn ra cùng lúc: 一边 (yībiān, nhất biên) + động từ 1, 一边 + động từ 2. Chủ ngữ chỉ nói một lần ở đầu câu. Ví dụ: 他一边吃一边说 = Anh ấy vừa ăn vừa nói.",
      "vn_tip": "Tiếng Việt nói \"vừa ... vừa ...\", người học hay dịch thành 又...又... hoặc chỉ dùng một 一边. Phải có đủ hai 一边, mỗi 一边 đứng ngay trước động từ của nó."
     },
     "chunks": [
      {
       "scene": "🧑📱",
       "full": "我有手机",
       "vi": "Tôi có điện thoại di động",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "手机",
         "ico": "📱",
         "c": "o",
         "py": "shǒujī",
         "hv": "thủ cơ"
        }
       ],
       "traceWord": "手机",
       "py": "Wǒ yǒu shǒujī",
       "traceKey": "shouji",
       "traceInfo": [
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "📺👍",
       "full": "电视机很大",
       "vi": "Cái tivi rất to",
       "parts": [
        {
         "t": "电视机",
         "ico": "📺",
         "c": "s",
         "py": "diànshìjī",
         "hv": "điện thị cơ"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "大",
         "ico": "📏",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "电视机",
       "py": "Diànshìjī hěn dà",
       "traceKey": "dianshiji",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "视",
         "py": "shì",
         "hv": "thị"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "🙏✋",
       "full": "请别动",
       "vi": "Xin đừng cử động",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "别",
         "ico": "🚫",
         "c": "v",
         "py": "bié",
         "hv": "biệt"
        },
        {
         "t": "动",
         "ico": "✋",
         "c": "o",
         "py": "dòng",
         "hv": "động"
        }
       ],
       "traceWord": "动",
       "py": "Qǐng bié dòng",
       "traceKey": "dong",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🧑📞",
       "full": "他在打电话",
       "vi": "Anh ấy đang gọi điện thoại",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在",
         "ico": "⏳",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "打电话",
         "ico": "📞",
         "c": "o",
         "py": "dǎ diànhuà",
         "hv": "đả điện thoại"
        }
       ],
       "traceWord": "打电话",
       "py": "Tā zài dǎ diànhuà",
       "traceKey": "dadianhua",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        }
       ]
      },
      {
       "scene": "🧑🏠💻",
       "full": "我在家上网",
       "vi": "Tôi ở nhà lên mạng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在家",
         "ico": "🏠",
         "c": "v",
         "py": "zàijiā",
         "hv": "tại gia"
        },
        {
         "t": "上网",
         "ico": "💻",
         "c": "o",
         "py": "shàngwǎng",
         "hv": "thượng võng"
        }
       ],
       "traceWord": "上网",
       "py": "Wǒ zàijiā shàngwǎng",
       "traceKey": "shangwang",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "网",
         "py": "wǎng",
         "hv": "võng"
        }
       ]
      },
      {
       "scene": "🧑📞✅",
       "full": "我给他打了电话",
       "vi": "Tôi đã gọi điện cho anh ấy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "给他打了",
         "ico": "📞",
         "c": "v",
         "py": "gěi tā dǎ le",
         "hv": "cấp tha đả liễu"
        },
        {
         "t": "电话",
         "ico": "☎️",
         "c": "o",
         "py": "diànhuà",
         "hv": "điện thoại"
        }
       ],
       "traceWord": "电话",
       "py": "Wǒ gěi tā dǎ le diànhuà",
       "traceKey": "dianhua",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        }
       ]
      },
      {
       "scene": "🧑🏃⚡",
       "full": "他的动作很快",
       "vi": "Động tác của anh ấy rất nhanh",
       "parts": [
        {
         "t": "他的动作",
         "ico": "🏃",
         "c": "s",
         "py": "tā de dòngzuò",
         "hv": "tha đích động tác"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "快",
         "ico": "⚡",
         "c": "o",
         "py": "kuài",
         "hv": "khoái"
        }
       ],
       "traceWord": "动作",
       "py": "Tā de dòngzuò hěn kuài",
       "traceKey": "dongzuo",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        }
       ]
      },
      {
       "scene": "🧑🍚🗣️",
       "full": "他一边吃一边说",
       "vi": "Anh ấy vừa ăn vừa nói",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一边吃",
         "ico": "🍚",
         "c": "v",
         "py": "yībiān chī",
         "hv": "nhất biên cật"
        },
        {
         "t": "一边说",
         "ico": "🗣️",
         "c": "o",
         "py": "yībiān shuō",
         "hv": "nhất biên thuyết"
        }
       ],
       "traceWord": "一边",
       "py": "Tā yībiān chī yībiān shuō",
       "traceKey": "yibian",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你有电脑吗？",
       "qvi": "Bạn có máy tính không?",
       "scene": "🧑💻",
       "ans": "我有电脑",
       "opts": [
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我在北京",
         "ico": "📍",
         "py": "Wǒ zài Běijīng"
        },
        {
         "txt": "我有电脑",
         "ico": "💻",
         "py": "Wǒ yǒu diànnǎo"
        }
       ],
       "qpy": "Nǐ yǒu diànnǎo ma?"
      },
      {
       "q": "他在做什么？",
       "qvi": "Anh ấy đang làm gì?",
       "scene": "🧑❓",
       "ans": "他看着电视吃饭",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "他看着电视吃饭",
         "ico": "📺",
         "py": "Tā kàn zhe diànshì chīfàn"
        },
        {
         "txt": "他今年很高",
         "ico": "📏",
         "py": "Tā jīnnián hěn gāo"
        }
       ],
       "qpy": "Tā zài zuò shénme?"
      },
      {
       "q": "你的手机有电吗？",
       "qvi": "Điện thoại của bạn còn pin không?",
       "scene": "📱🔋",
       "ans": "我的手机没电了",
       "opts": [
        {
         "txt": "我的车很大",
         "ico": "🚗",
         "py": "Wǒ de chē hěn dà"
        },
        {
         "txt": "我的手机没电了",
         "ico": "🪫",
         "py": "Wǒ de shǒujī méi diàn le"
        },
        {
         "txt": "我的名字是小明",
         "ico": "📛",
         "py": "Wǒ de míngzi shì Xiǎomíng"
        }
       ],
       "qpy": "Nǐ de shǒujī yǒu diàn ma?"
      },
      {
       "q": "你常在网上买东西吗？",
       "qvi": "Bạn có hay mua đồ trên mạng không?",
       "scene": "🧑🛒💻",
       "ans": "我常在网上买东西",
       "opts": [
        {
         "txt": "我常在网上买东西",
         "ico": "🛒",
         "py": "Wǒ cháng zài wǎng shang mǎi dōngxi"
        },
        {
         "txt": "我不是学生",
         "ico": "🎓",
         "py": "Wǒ bú shì xuéshēng"
        },
        {
         "txt": "我常去北京",
         "ico": "✈️",
         "py": "Wǒ cháng qù Běijīng"
        }
       ],
       "qpy": "Nǐ cháng zài wǎng shang mǎi dōngxi ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Việc làm cùng lúc khi dùng điện thoại và máy tính",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh phòng, gọi tên bằng tiếng Trung các thiết bị: <i>\"手机\"</i>, <i>\"电脑\"</i>, <i>\"电视机\"</i>.",
       "<b>Bước 2:</b> Tự mô tả thói quen của bạn hoặc đồng nghiệp bằng câu có hai việc cùng lúc, ví dụ <i>\"他一边吃一边说\"</i>. Nói thành tiếng ít nhất 5 câu khác nhau.",
       "<b>Bước 3:</b> Nhắn tin hoặc nói với đồng nghiệp: hỏi họ có hay ở nhà lên mạng không (<i>\"你常在网上买东西吗？\"</i>) và trả lời bằng <i>\"我在家上网\"</i>."
      ]
     }
    },
    {
     "id": "1.9C",
     "name": "Bài 1.9C: Giải trí cuối tuần",
     "grammar": {
      "formulas": [
       "🏔️ 山 + ➕ 太 + 📏 高了",
       "🎬 这个电影 + ➕ 真 + 👍 好看"
      ],
      "tip": "Câu cảm thán: 太 (tài, thái) + tính từ + 了 diễn tả \"quá ...\", còn 真 (zhēn, chân) + tính từ diễn tả \"thật là ...\". Ví dụ: 门票太贵了 = Vé đắt quá; 树真大 = Cây to thật.",
      "vn_tip": "Người Việt hay quên 了 ở cuối câu 太...了, hoặc dùng 很 thay cho 真 khi cảm thán. Nhớ: 太贵了 (không nói 太贵), và 真好看 mang sắc thái cảm xúc mạnh hơn 很好看."
     },
     "chunks": [
      {
       "scene": "🧑🎤",
       "full": "我喜欢唱歌",
       "vi": "Tôi thích hát",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "唱歌",
         "ico": "🎤",
         "c": "o",
         "py": "chànggē",
         "hv": "xướng ca"
        }
       ],
       "traceWord": "唱歌",
       "py": "Wǒ xǐhuan chànggē",
       "traceKey": "changge",
       "traceInfo": [
        {
         "c": "唱",
         "py": "chàng",
         "hv": "xướng"
        },
        {
         "c": "歌",
         "py": "gē",
         "hv": "ca"
        }
       ]
      },
      {
       "scene": "🧑⚽",
       "full": "他在打球",
       "vi": "Anh ấy đang chơi bóng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在",
         "ico": "⏳",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "打球",
         "ico": "⚽",
         "c": "o",
         "py": "dǎ qiú",
         "hv": "đả cầu"
        }
       ],
       "traceWord": "打球",
       "py": "Tā zài dǎ qiú",
       "traceKey": "daqiu",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        }
       ]
      },
      {
       "scene": "🎬👍",
       "full": "这个电影真好看",
       "vi": "Bộ phim này hay thật",
       "parts": [
        {
         "t": "这个电影",
         "ico": "🎬",
         "c": "s",
         "py": "zhè gè diànyǐng",
         "hv": "giá cá điện ảnh"
        },
        {
         "t": "真",
         "ico": "✨",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "好看",
         "ico": "👍",
         "c": "o",
         "py": "hǎokàn",
         "hv": "hảo khán"
        }
       ],
       "traceWord": "电影",
       "py": "Zhè gè diànyǐng zhēn hǎokàn",
       "traceKey": "dianying",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "影",
         "py": "yǐng",
         "hv": "ảnh"
        }
       ]
      },
      {
       "scene": "🏔️📏",
       "full": "山太高了",
       "vi": "Núi cao quá",
       "parts": [
        {
         "t": "山",
         "ico": "🏔️",
         "c": "s",
         "py": "shān",
         "hv": "sơn"
        },
        {
         "t": "太",
         "ico": "➕",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "高了",
         "ico": "📏",
         "c": "o",
         "py": "gāo le",
         "hv": "cao liễu"
        }
       ],
       "traceWord": "山",
       "py": "Shān tài gāo le",
       "traceKey": "shan",
       "traceInfo": [
        {
         "c": "山",
         "py": "shān",
         "hv": "sơn"
        }
       ]
      },
      {
       "scene": "🏔️🌳",
       "full": "山里的树真多",
       "vi": "Cây trong núi nhiều thật",
       "parts": [
        {
         "t": "山里的树",
         "ico": "🌳",
         "c": "s",
         "py": "shān lǐ de shù",
         "hv": "sơn lý đích thụ"
        },
        {
         "t": "真",
         "ico": "✨",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "多",
         "ico": "➕",
         "c": "o",
         "py": "duō",
         "hv": "đa"
        }
       ],
       "traceWord": "树",
       "py": "Shān lǐ de shù zhēn duō",
       "traceKey": "shu",
       "traceInfo": [
        {
         "c": "树",
         "py": "shù",
         "hv": "thụ"
        }
       ]
      },
      {
       "scene": "🏯🌟",
       "full": "北京很有名",
       "vi": "Bắc Kinh rất nổi tiếng",
       "parts": [
        {
         "t": "北京",
         "ico": "🏯",
         "c": "s",
         "py": "Běijīng",
         "hv": "bắc kinh"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "有名",
         "ico": "🌟",
         "c": "o",
         "py": "yǒumíng",
         "hv": "hữu danh"
        }
       ],
       "traceWord": "有名",
       "py": "Běijīng hěn yǒumíng",
       "traceKey": "youming",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "名",
         "py": "míng",
         "hv": "danh"
        }
       ]
      },
      {
       "scene": "🎫💰",
       "full": "门票太贵了",
       "vi": "Vé vào cửa đắt quá",
       "parts": [
        {
         "t": "门票",
         "ico": "🎫",
         "c": "s",
         "py": "ménpiào",
         "hv": "môn phiếu"
        },
        {
         "t": "太",
         "ico": "➕",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "贵了",
         "ico": "💰",
         "c": "o",
         "py": "guì le",
         "hv": "quý liễu"
        }
       ],
       "traceWord": "门票",
       "py": "Ménpiào tài guì le",
       "traceKey": "menpiao",
       "traceInfo": [
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        },
        {
         "c": "票",
         "py": "piào",
         "hv": "phiếu"
        }
       ]
      },
      {
       "scene": "🎬🏢👥",
       "full": "电影院的人太多了",
       "vi": "Rạp chiếu phim đông người quá",
       "parts": [
        {
         "t": "电影院的人",
         "ico": "👥",
         "c": "s",
         "py": "diànyǐngyuàn de rén",
         "hv": "điện ảnh viện đích nhân"
        },
        {
         "t": "太",
         "ico": "➕",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "多了",
         "ico": "📈",
         "c": "o",
         "py": "duō le",
         "hv": "đa liễu"
        }
       ],
       "traceWord": "电影院",
       "py": "Diànyǐngyuàn de rén tài duō le",
       "traceKey": "dianyingyuan",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "影",
         "py": "yǐng",
         "hv": "ảnh"
        },
        {
         "c": "院",
         "py": "yuàn",
         "hv": "viện"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个电影好看吗？",
       "qvi": "Bộ phim này hay không?",
       "scene": "🎬❓",
       "ans": "真的很好看",
       "opts": [
        {
         "txt": "真的很好看",
         "ico": "👍",
         "py": "Zhēn de hěn hǎokàn"
        },
        {
         "txt": "我想去北京",
         "ico": "✈️",
         "py": "Wǒ xiǎng qù Běijīng"
        },
        {
         "txt": "我不会唱歌",
         "ico": "🎤",
         "py": "Wǒ bú huì chànggē"
        }
       ],
       "qpy": "Zhè gè diànyǐng hǎokàn ma?"
      },
      {
       "q": "你想唱什么？",
       "qvi": "Bạn muốn hát bài gì?",
       "scene": "🧑🎤",
       "ans": "我想唱中文歌",
       "opts": [
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        },
        {
         "txt": "我想唱中文歌",
         "ico": "🎶",
         "py": "Wǒ xiǎng chàng Zhōngwén gē"
        },
        {
         "txt": "我在电影院",
         "ico": "🎬",
         "py": "Wǒ zài diànyǐngyuàn"
        }
       ],
       "qpy": "Nǐ xiǎng chàng shénme?"
      },
      {
       "q": "星期天你想干什么？",
       "qvi": "Chủ nhật bạn muốn làm gì?",
       "scene": "🧑📅",
       "ans": "我想去看电影",
       "opts": [
        {
         "txt": "我是大学生",
         "ico": "🎓",
         "py": "Wǒ shì dàxuéshēng"
        },
        {
         "txt": "门票很贵",
         "ico": "🎫",
         "py": "Ménpiào hěn guì"
        },
        {
         "txt": "我想去看电影",
         "ico": "🎬",
         "py": "Wǒ xiǎng qù kàn diànyǐng"
        }
       ],
       "qpy": "Xīngqītiān nǐ xiǎng gàn shénme?"
      },
      {
       "q": "那个球是谁的？",
       "qvi": "Quả bóng kia là của ai?",
       "scene": "⚽❓",
       "ans": "那个球是我的",
       "opts": [
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "那个球是我的",
         "ico": "⚽",
         "py": "Nà gè qiú shì wǒ de"
        },
        {
         "txt": "我昨天吃了",
         "ico": "🍚",
         "py": "Wǒ zuótiān chī le"
        }
       ],
       "qpy": "Nà gè qiú shì shéi de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi chơi cuối tuần",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin rủ đồng nghiệp: hỏi <i>\"星期天你想干什么？\"</i> rồi gợi ý <i>\"我想去看电影\"</i>.",
       "<b>Bước 2:</b> Giả vờ đang ở rạp hoặc khu du lịch, tự nói thành tiếng cảm xúc của bạn bằng 太...了 và 真, ví dụ <i>\"门票太贵了\"</i>, <i>\"电影院的人太多了\"</i>, <i>\"山里的树真多\"</i>.",
       "<b>Bước 3:</b> Kể sở thích của bạn trong 1 phút: <i>\"我喜欢唱歌\"</i>, <i>\"他在打球\"</i>, rồi hỏi đồng nghiệp xem họ có muốn đi cùng không."
      ]
     }
    }
   ]
  },
  "1.10": {
   "lessons": [
    {
     "id": "1.10A",
     "name": "Bài 1.10A: Sức khỏe, ngủ nghỉ",
     "grammar": {
      "formulas": [
       "🧑 我 + ✅ 能 + 😴 睡觉",
       "🧑 他 + ✅ 不能 + 🛏️ 起床",
       "❓ 你 + ✅ 能 + 🏥 看病 + 吗？"
      ],
      "tip": "Động từ năng nguyện 能 (néng, năng) đứng TRƯỚC động từ chính: 能 + động từ. Phủ định là 不能 (không thể / không được phép). Câu hỏi thêm 吗 ở cuối: 你能来吗？",
      "vn_tip": "Người Việt hay đặt \"có thể\" sau động từ hoặc bỏ 能. Trong tiếng Trung 能 luôn đứng trước động từ: nói 我能起床, không nói 我起床能. Phủ định chỉ cần thêm 不 trước 能: 不能."
     },
     "chunks": [
      {
       "scene": "🌙😴🛏️",
       "full": "你晚上能睡觉吗",
       "vi": "Buổi tối bạn ngủ được không?",
       "parts": [
        {
         "t": "你晚上",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ wǎnshang",
         "hv": "nễ vãn thượng"
        },
        {
         "t": "能",
         "ico": "✅",
         "c": "v",
         "py": "néng",
         "hv": "năng"
        },
        {
         "t": "睡觉吗",
         "ico": "😴",
         "c": "o",
         "py": "shuìjiào ma",
         "hv": "thụy giác ma"
        }
       ],
       "traceWord": "睡觉",
       "py": "Nǐ wǎnshang néng shuìjiào ma",
       "traceKey": "shuijiao",
       "traceInfo": [
        {
         "c": "睡",
         "py": "shuì",
         "hv": "thụy"
        },
        {
         "c": "觉",
         "py": "jiào",
         "hv": "giác"
        }
       ]
      },
      {
       "scene": "☀️🛏️🙂",
       "full": "他今天能起床",
       "vi": "Hôm nay anh ấy dậy được",
       "parts": [
        {
         "t": "他今天",
         "ico": "👨",
         "c": "s",
         "py": "tā jīntiān",
         "hv": "tha kim thiên"
        },
        {
         "t": "能",
         "ico": "✅",
         "c": "v",
         "py": "néng",
         "hv": "năng"
        },
        {
         "t": "起床",
         "ico": "🛏️",
         "c": "o",
         "py": "qǐchuáng",
         "hv": "khởi sàng"
        }
       ],
       "traceWord": "起床",
       "py": "Tā jīntiān néng qǐchuáng",
       "traceKey": "qichuang",
       "traceInfo": [
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        },
        {
         "c": "床",
         "py": "chuáng",
         "hv": "sàng"
        }
       ]
      },
      {
       "scene": "🧍💪🙁",
       "full": "我身体不太好",
       "vi": "Sức khỏe của tôi không tốt lắm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "身体",
         "ico": "🧍",
         "c": "v",
         "py": "shēntǐ",
         "hv": "thân thể"
        },
        {
         "t": "不太好",
         "ico": "🙁",
         "c": "o",
         "py": "bú tài hǎo",
         "hv": "bất thái hảo"
        }
       ],
       "traceWord": "身体",
       "py": "Wǒ shēntǐ bú tài hǎo",
       "traceKey": "shenti",
       "traceInfo": [
        {
         "c": "身",
         "py": "shēn",
         "hv": "thân"
        },
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        }
       ]
      },
      {
       "scene": "🏥👨‍⚕️🤒",
       "full": "我今天能看病吗",
       "vi": "Hôm nay tôi khám bệnh được không?",
       "parts": [
        {
         "t": "我今天",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ jīntiān",
         "hv": "ngã kim thiên"
        },
        {
         "t": "能",
         "ico": "✅",
         "c": "v",
         "py": "néng",
         "hv": "năng"
        },
        {
         "t": "看病吗",
         "ico": "🏥",
         "c": "o",
         "py": "kànbìng ma",
         "hv": "khán bệnh ma"
        }
       ],
       "traceWord": "看病",
       "py": "Wǒ jīntiān néng kànbìng ma",
       "traceKey": "kanbing",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
        },
        {
         "c": "病",
         "py": "bìng",
         "hv": "bệnh"
        }
       ]
      },
      {
       "scene": "🤒🌡️🔥",
       "full": "病人身上很热",
       "vi": "Người bệnh nóng khắp người",
       "parts": [
        {
         "t": "病人",
         "ico": "🤒",
         "c": "s",
         "py": "bìngrén",
         "hv": "bệnh nhân"
        },
        {
         "t": "身上",
         "ico": "🧍",
         "c": "v",
         "py": "shēnshang",
         "hv": "thân thượng"
        },
        {
         "t": "很热",
         "ico": "🔥",
         "c": "o",
         "py": "hěn rè",
         "hv": "ngận nhiệt"
        }
       ],
       "traceWord": "病人",
       "py": "Bìngrén shēnshang hěn rè",
       "traceKey": "bingren",
       "traceInfo": [
        {
         "c": "病",
         "py": "bìng",
         "hv": "bệnh"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "✋🤕🚫",
       "full": "他的手不能动",
       "vi": "Tay anh ấy không cử động được",
       "parts": [
        {
         "t": "他的手",
         "ico": "✋",
         "c": "s",
         "py": "tā de shǒu",
         "hv": "tha đích thủ"
        },
        {
         "t": "不能",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng",
         "hv": "bất năng"
        },
        {
         "t": "动",
         "ico": "🏃",
         "c": "o",
         "py": "dòng",
         "hv": "động"
        }
       ],
       "traceWord": "手",
       "py": "Tā de shǒu bù néng dòng",
       "traceKey": "shou",
       "traceInfo": [
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🤒🏢🚫",
       "full": "他生病不能上班",
       "vi": "Anh ấy ốm nên không đi làm được",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "生病",
         "ico": "🤒",
         "c": "v",
         "py": "shēngbìng",
         "hv": "sinh bệnh"
        },
        {
         "t": "不能上班",
         "ico": "🏢",
         "c": "o",
         "py": "bù néng shàngbān",
         "hv": "bất năng thượng ban"
        }
       ],
       "traceWord": "生病",
       "py": "Tā shēngbìng bù néng shàngbān",
       "traceKey": "shengbing",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "c": "病",
         "py": "bìng",
         "hv": "bệnh"
        }
       ]
      },
      {
       "scene": "🧑🛏️⬆️",
       "full": "小明能起来吗",
       "vi": "Tiểu Minh ngồi dậy được không?",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "能",
         "ico": "✅",
         "c": "v",
         "py": "néng",
         "hv": "năng"
        },
        {
         "t": "起来吗",
         "ico": "⬆️",
         "c": "o",
         "py": "qǐlái ma",
         "hv": "khởi lai ma"
        }
       ],
       "traceWord": "起来",
       "py": "Xiǎomíng néng qǐlái ma",
       "traceKey": "qilai",
       "traceInfo": [
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你能起床吗？",
       "qvi": "Bạn dậy được không?",
       "scene": "🛏️🧑",
       "ans": "我能起床",
       "opts": [
        {
         "txt": "我能起床",
         "ico": "🛏️",
         "py": "Wǒ néng qǐchuáng"
        },
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "他今天起晚了",
         "ico": "⏰",
         "py": "Tā jīntiān qǐ wǎn le"
        }
       ],
       "qpy": "Nǐ néng qǐchuáng ma?"
      },
      {
       "q": "你想睡吗？",
       "qvi": "Bạn muốn ngủ không?",
       "scene": "😴❓",
       "ans": "我想睡",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👨",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "我想睡",
         "ico": "😴",
         "py": "Wǒ xiǎng shuì"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        }
       ],
       "qpy": "Nǐ xiǎng shuì ma?"
      },
      {
       "q": "他的病重吗？",
       "qvi": "Bệnh của anh ấy nặng không?",
       "scene": "🧍🤒",
       "ans": "他的病不重",
       "opts": [
        {
         "txt": "我想买书",
         "ico": "📚",
         "py": "Wǒ xiǎng mǎi shū"
        },
        {
         "txt": "他是学生",
         "ico": "🎓",
         "py": "Tā shì xuéshēng"
        },
        {
         "txt": "他的病不重",
         "ico": "🤒",
         "py": "Tā de bìng bú zhòng"
        }
       ],
       "qpy": "Tā de bìng zhòng ma?"
      },
      {
       "q": "你几点睡觉？",
       "qvi": "Mấy giờ bạn đi ngủ?",
       "scene": "🕙😴",
       "ans": "我十点睡觉",
       "opts": [
        {
         "txt": "我在学校",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào"
        },
        {
         "txt": "我是大学生",
         "ico": "🎓",
         "py": "Wǒ shì dàxuéshēng"
        },
        {
         "txt": "我十点睡觉",
         "ico": "😴",
         "py": "Wǒ shí diǎn shuìjiào"
        }
       ],
       "qpy": "Nǐ jǐ diǎn shuìjiào?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Xin nghỉ vì không khỏe",
      "steps": [
       "<b>Bước 1:</b> Hôm nay bạn thấy mệt. Nhắn tin cho đồng nghiệp: <i>\"我身体不太好\"</i>.",
       "<b>Bước 2:</b> Nói rõ bạn không đi làm được: <i>\"我生病不能上班\"</i>. Rồi hỏi bác sĩ: <i>\"我今天能看病吗\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu về mình: ngày mai bạn có thể dậy sớm không, tối nay có thể ngủ sớm không, dùng <i>\"能\"</i> và <i>\"不能\"</i>."
      ]
     }
    },
    {
     "id": "1.10B",
     "name": "Bài 1.10B: Thời tiết",
     "grammar": {
      "formulas": [
       "🌧️ 地上 + ➕ 还有 + 💧 水",
       "🧑 我 + ➕ 也 + ❤️ 喜欢 + 🌧️ 雨",
       "🧑 我 + ➕ 还 + 💭 想 + 🍞 吃面包"
      ],
      "tip": "也 (yě, dã) nghĩa là \"cũng\", đứng trước động từ: 我也想去. 还 (hái, hoàn) nghĩa là \"còn, thêm nữa\": 我还想吃面包. 还有 là \"còn có\". Cả hai đứng trước động từ, sau chủ ngữ.",
      "vn_tip": "Người Việt hay đặt \"cũng\" cuối câu hoặc sau động từ. Trong tiếng Trung 也 và 还 luôn đứng ngay trước động từ: nói 我也想喝茶, không nói 我想喝茶也. Chú ý 也 là \"cũng giống người khác\", còn 还 là \"thêm vào cái đã có\"."
     },
     "chunks": [
      {
       "scene": "☀️🌤️🙂",
       "full": "今天天气好",
       "vi": "Hôm nay thời tiết đẹp",
       "parts": [
        {
         "t": "今天",
         "ico": "📅",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "天气",
         "ico": "🌤️",
         "c": "v",
         "py": "tiānqì",
         "hv": "thiên khí"
        },
        {
         "t": "好",
         "ico": "🙂",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "天气",
       "py": "Jīntiān tiānqì hǎo",
       "traceKey": "tianqi",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🌧️☔🏙️",
       "full": "现在在下雨",
       "vi": "Bây giờ trời đang mưa",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "在",
         "ico": "🔄",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "下雨",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ",
         "hv": "hạ vũ"
        }
       ],
       "traceWord": "下雨",
       "py": "Xiànzài zài xià yǔ",
       "traceKey": "xiayu",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "雨",
         "py": "yǔ",
         "hv": "vũ"
        }
       ]
      },
      {
       "scene": "🌬️🍃🙂",
       "full": "今天风不大",
       "vi": "Hôm nay gió không lớn",
       "parts": [
        {
         "t": "今天",
         "ico": "📅",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "风",
         "ico": "🌬️",
         "c": "v",
         "py": "fēng",
         "hv": "phong"
        },
        {
         "t": "不大",
         "ico": "🤏",
         "c": "o",
         "py": "bù dà",
         "hv": "bất đại"
        }
       ],
       "traceWord": "风",
       "py": "Jīntiān fēng bù dà",
       "traceKey": "feng",
       "traceInfo": [
        {
         "c": "风",
         "py": "fēng",
         "hv": "phong"
        }
       ]
      },
      {
       "scene": "🎒⚪👜",
       "full": "他的书包是白的",
       "vi": "Cặp sách của anh ấy màu trắng",
       "parts": [
        {
         "t": "他的书包",
         "ico": "🎒",
         "c": "s",
         "py": "tā de shūbāo",
         "hv": "tha đích thư bao"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "白的",
         "ico": "⚪",
         "c": "o",
         "py": "bái de",
         "hv": "bạch đích"
        }
       ],
       "traceWord": "白",
       "py": "Tā de shūbāo shì bái de",
       "traceKey": "bai",
       "traceInfo": [
        {
         "c": "白",
         "py": "bái",
         "hv": "bạch"
        }
       ]
      },
      {
       "scene": "🌧️💧🟫",
       "full": "地上还有水",
       "vi": "Trên mặt đất còn có nước",
       "parts": [
        {
         "t": "地上",
         "ico": "🟫",
         "c": "s",
         "py": "dìshang",
         "hv": "địa thượng"
        },
        {
         "t": "还有",
         "ico": "➕",
         "c": "v",
         "py": "hái yǒu",
         "hv": "hoàn hữu"
        },
        {
         "t": "水",
         "ico": "💧",
         "c": "o",
         "py": "shuǐ",
         "hv": "thủy"
        }
       ],
       "traceWord": "地上",
       "py": "Dìshang hái yǒu shuǐ",
       "traceKey": "dishang",
       "traceInfo": [
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "👥🌧️❤️",
       "full": "有些人喜欢雨",
       "vi": "Có một số người thích mưa",
       "parts": [
        {
         "t": "有些人",
         "ico": "👥",
         "c": "s",
         "py": "yǒuxiē rén",
         "hv": "hữu ta nhân"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "雨",
         "ico": "🌧️",
         "c": "o",
         "py": "yǔ",
         "hv": "vũ"
        }
       ],
       "traceWord": "有些",
       "py": "Yǒuxiē rén xǐhuan yǔ",
       "traceKey": "youxie",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "些",
         "py": "xiē",
         "hv": "ta"
        }
       ]
      },
      {
       "scene": "👥🏠🌧️",
       "full": "一半的人想休息",
       "vi": "Một nửa số người muốn nghỉ ngơi",
       "parts": [
        {
         "t": "一半的人",
         "ico": "👥",
         "c": "s",
         "py": "yībàn de rén",
         "hv": "nhất bán đích nhân"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "休息",
         "ico": "🛋️",
         "c": "o",
         "py": "xiūxi",
         "hv": "hưu tức"
        }
       ],
       "traceWord": "一半",
       "py": "Yībàn de rén xiǎng xiūxi",
       "traceKey": "yiban",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "半",
         "py": "bàn",
         "hv": "bán"
        }
       ]
      },
      {
       "scene": "👨😊🗣️",
       "full": "他高兴地说话",
       "vi": "Anh ấy vui vẻ nói chuyện",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "高兴地",
         "ico": "😊",
         "c": "v",
         "py": "gāoxìng de",
         "hv": "cao hứng địa"
        },
        {
         "t": "说话",
         "ico": "🗣️",
         "c": "o",
         "py": "shuōhuà",
         "hv": "thuyết thoại"
        }
       ],
       "traceWord": "高兴",
       "py": "Tā gāoxìng de shuōhuà",
       "traceKey": "gaoxing",
       "traceInfo": [
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        },
        {
         "c": "兴",
         "py": "xìng",
         "hv": "hứng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "明天见面行不行？",
       "qvi": "Mai gặp nhau được không?",
       "scene": "📅🤝",
       "ans": "行",
       "opts": [
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        },
        {
         "txt": "行",
         "ico": "👌",
         "py": "Xíng"
        },
        {
         "txt": "他是医生",
         "ico": "👨‍⚕️",
         "py": "Tā shì yīshēng"
        }
       ],
       "qpy": "Míngtiān jiànmiàn xíng bù xíng?"
      },
      {
       "q": "今天下雨吗？",
       "qvi": "Hôm nay có mưa không?",
       "scene": "🌧️❓",
       "ans": "今天不下雨",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "她在北京",
         "ico": "🏙️",
         "py": "Tā zài Běijīng"
        },
        {
         "txt": "今天不下雨",
         "ico": "☀️",
         "py": "Jīntiān bú xià yǔ"
        }
       ],
       "qpy": "Jīntiān xià yǔ ma?"
      },
      {
       "q": "你想喝茶吗？",
       "qvi": "Bạn muốn uống trà không?",
       "scene": "🍵🧑",
       "ans": "我也想喝茶",
       "opts": [
        {
         "txt": "我也想喝茶",
         "ico": "🍵",
         "py": "Wǒ yě xiǎng hē chá"
        },
        {
         "txt": "我在学校",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào"
        },
        {
         "txt": "他是我爸爸",
         "ico": "👨",
         "py": "Tā shì wǒ bàba"
        }
       ],
       "qpy": "Nǐ xiǎng hē chá ma?"
      },
      {
       "q": "你还想吃什么？",
       "qvi": "Bạn còn muốn ăn gì nữa?",
       "scene": "🍽️❓",
       "ans": "我还想吃面包",
       "opts": [
        {
         "txt": "他不在家",
         "ico": "🏠",
         "py": "Tā bú zàijiā"
        },
        {
         "txt": "今天星期天",
         "ico": "📅",
         "py": "Jīntiān xīngqītiān"
        },
        {
         "txt": "我还想吃面包",
         "ico": "🍞",
         "py": "Wǒ hái xiǎng chī miànbāo"
        }
       ],
       "qpy": "Nǐ hái xiǎng chī shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói chuyện thời tiết với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhìn ra cửa sổ, nhắn tin cho đồng nghiệp về thời tiết: <i>\"今天天气好\"</i> hoặc <i>\"现在在下雨\"</i>.",
       "<b>Bước 2:</b> Hẹn gặp: <i>\"明天见面行不行\"</i>. Khi đồng nghiệp muốn đi ăn, bạn nói thêm: <i>\"我也想去\"</i> và <i>\"我还想吃面包\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu về hôm nay, dùng <i>\"也\"</i> và <i>\"还\"</i>, ví dụ <i>\"地上还有水\"</i>."
      ]
     }
    },
    {
     "id": "1.10C",
     "name": "Bài 1.10C: Trường học và đất nước",
     "grammar": {
      "formulas": [
       "🌏 北京 + 🔗 的 + 🏛️ 学院",
       "🧑 我们 + 🔗 的 + 🏫 学校",
       "🌏 很大 + 🔗 的 + 🗺️ 国家"
      ],
      "tip": "Định ngữ + 的 (de, đích) + danh từ: 中国的大学 là \"trường đại học của Trung Quốc\". 的 nối phần bổ nghĩa với danh từ phía sau, giống \"của\" hoặc \"mà\" trong tiếng Việt, nhưng phần bổ nghĩa luôn đứng TRƯỚC danh từ.",
      "vn_tip": "Tiếng Việt nói \"trường của chúng tôi\" (danh từ trước), tiếng Trung đảo lại: 我们的学校 (của chúng tôi + trường). Lỗi hay gặp là nói 学校我们的. Hãy nhớ: người sở hữu hoặc mô tả luôn đứng trước 的."
     },
     "chunks": [
      {
       "scene": "🧒🎒🏫",
       "full": "他是小学生",
       "vi": "Cậu ấy là học sinh tiểu học",
       "parts": [
        {
         "t": "他",
         "ico": "🧒",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "小学生",
         "ico": "🎒",
         "c": "o",
         "py": "xiǎoxuéshēng",
         "hv": "tiểu học sinh"
        }
       ],
       "traceWord": "小学生",
       "py": "Tā shì xiǎoxuéshēng",
       "traceKey": "xiaoxuesheng",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "🏙️🏛️📚",
       "full": "这是北京的学院",
       "vi": "Đây là học viện của Bắc Kinh",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "北京的学院",
         "ico": "🏛️",
         "c": "o",
         "py": "Běijīng de xuéyuàn",
         "hv": "bắc kinh đích học viện"
        }
       ],
       "traceWord": "学院",
       "py": "Zhè shì Běijīng de xuéyuàn",
       "traceKey": "xueyuan",
       "traceInfo": [
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "院",
         "py": "yuàn",
         "hv": "viện"
        }
       ]
      },
      {
       "scene": "🏢🏫👥",
       "full": "这是我们的学校",
       "vi": "Đây là trường của chúng tôi",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我们的学校",
         "ico": "🏫",
         "c": "o",
         "py": "wǒmen de xuéxiào",
         "hv": "ngã môn đích học hiệu"
        }
       ],
       "traceWord": "学校",
       "py": "Zhè shì wǒmen de xuéxiào",
       "traceKey": "xuexiao",
       "traceInfo": [
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "校",
         "py": "xiào",
         "hv": "hiệu"
        }
       ]
      },
      {
       "scene": "🏢🏫📏",
       "full": "我们的教学楼很大",
       "vi": "Tòa nhà giảng đường của chúng tôi rất lớn",
       "parts": [
        {
         "t": "我们的教学楼",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen de jiàoxuélóu",
         "hv": "ngã môn đích giáo học lâu"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "大",
         "ico": "📏",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "教学楼",
       "py": "Wǒmen de jiàoxuélóu hěn dà",
       "traceKey": "jiaoxuelou",
       "traceInfo": [
        {
         "c": "教",
         "py": "jiào",
         "hv": "giáo"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "楼",
         "py": "lóu",
         "hv": "lâu"
        }
       ]
      },
      {
       "scene": "👨‍🏫🎒🏫",
       "full": "他是小学的老师",
       "vi": "Anh ấy là giáo viên của trường tiểu học",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "小学的老师",
         "ico": "👨‍🏫",
         "c": "o",
         "py": "xiǎoxué de lǎoshī",
         "hv": "tiểu học đích lão sư"
        }
       ],
       "traceWord": "小学",
       "py": "Tā shì xiǎoxué de lǎoshī",
       "traceKey": "xiaoxue",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "👦🏫📖",
       "full": "我的弟弟在中学",
       "vi": "Em trai tôi học ở trường trung học",
       "parts": [
        {
         "t": "我的弟弟",
         "ico": "👦",
         "c": "s",
         "py": "wǒ de dìdi",
         "hv": "ngã đích đệ đệ"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "中学",
         "ico": "🏫",
         "c": "o",
         "py": "zhōngxué",
         "hv": "trung học"
        }
       ],
       "traceWord": "中学",
       "py": "Wǒ de dìdi zài zhōngxué",
       "traceKey": "zhongxue",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "👫✈️🌏",
       "full": "我的朋友在国外",
       "vi": "Bạn của tôi ở nước ngoài",
       "parts": [
        {
         "t": "我的朋友",
         "ico": "👫",
         "c": "s",
         "py": "wǒ de péngyou",
         "hv": "ngã đích bằng hữu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "国外",
         "ico": "✈️",
         "c": "o",
         "py": "guó wài",
         "hv": "quốc ngoại"
        }
       ],
       "traceWord": "国外",
       "py": "Wǒ de péngyou zài guó wài",
       "traceKey": "guowai",
       "traceInfo": [
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        },
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        }
       ]
      },
      {
       "scene": "🇨🇳🗺️📏",
       "full": "中国是很大的国家",
       "vi": "Trung Quốc là một quốc gia rất lớn",
       "parts": [
        {
         "t": "中国",
         "ico": "🇨🇳",
         "c": "s",
         "py": "Zhōngguó",
         "hv": "trung quốc"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "很大的国家",
         "ico": "🗺️",
         "c": "o",
         "py": "hěn dà de guójiā",
         "hv": "ngận đại đích quốc gia"
        }
       ],
       "traceWord": "国家",
       "py": "Zhōngguó shì hěn dà de guójiā",
       "traceKey": "guojia",
       "traceInfo": [
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你是中学生吗？",
       "qvi": "Bạn là học sinh trung học à?",
       "scene": "🧑🏫",
       "ans": "我是中学生",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "我是中学生",
         "ico": "🎒",
         "py": "Wǒ shì zhōngxuéshēng"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        }
       ],
       "qpy": "Nǐ shì zhōngxuéshēng ma?"
      },
      {
       "q": "你明天做什么？",
       "qvi": "Ngày mai bạn làm gì?",
       "scene": "📅📚",
       "ans": "我明天还书",
       "opts": [
        {
         "txt": "他是我妹妹",
         "ico": "👧",
         "py": "Tā shì wǒ mèimei"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        },
        {
         "txt": "我明天还书",
         "ico": "📚",
         "py": "Wǒ míngtiān hái shū"
        }
       ],
       "qpy": "Nǐ míngtiān zuò shénme?"
      },
      {
       "q": "你喝什么？",
       "qvi": "Bạn uống gì?",
       "scene": "🥛🧑",
       "ans": "我喝牛奶",
       "opts": [
        {
         "txt": "我喝牛奶",
         "ico": "🥛",
         "py": "Wǒ hē niúnǎi"
        },
        {
         "txt": "我看电影",
         "ico": "🎬",
         "py": "Wǒ kàn diànyǐng"
        },
        {
         "txt": "我去学校",
         "ico": "🏫",
         "py": "Wǒ qù xuéxiào"
        }
       ],
       "qpy": "Nǐ hē shénme?"
      },
      {
       "q": "你的朋友在国外吗？",
       "qvi": "Bạn của bạn ở nước ngoài à?",
       "scene": "👫🌏",
       "ans": "他在国外",
       "opts": [
        {
         "txt": "我喝水",
         "ico": "💧",
         "py": "Wǒ hē shuǐ"
        },
        {
         "txt": "她是学生",
         "ico": "🎓",
         "py": "Tā shì xuéshēng"
        },
        {
         "txt": "他在国外",
         "ico": "✈️",
         "py": "Tā zài guó wài"
        }
       ],
       "qpy": "Nǐ de péngyou zài guó wài ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu trường và quê hương",
      "steps": [
       "<b>Bước 1:</b> Gặp một người bạn Trung Quốc mới, giới thiệu nơi bạn học hoặc làm việc: <i>\"这是我们的学校\"</i>.",
       "<b>Bước 2:</b> Nói về gia đình, bạn bè: <i>\"我的弟弟在中学\"</i>, <i>\"我的朋友在国外\"</i>. Hỏi lại bạn: <i>\"你是中学生吗\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 5 câu với \"的\" về trường, công ty, đất nước của bạn, ví dụ <i>\"中国是很大的国家\"</i>."
      ]
     }
    }
   ]
  },
  "1.11": {
   "lessons": [
    {
     "id": "1.11A",
     "name": "Bài 1.11A: Đông tây nam bắc, trái phải, trên dưới",
     "grammar": {
      "formulas": [
       "🏠 我家 + 📍 在 + 🧭 东边",
       "🏫 学校 + 📍 在 + ⬅️ 左边",
       "📱 手机 + 📍 在 + 🪑 桌子上"
      ],
      "tip": "Từ phương vị thêm 边 (biān, biên) để chỉ phía: 东边 (đông biên), 左边 (tả biên), 右边 (hữu biên). Chủ thể + 在 + từ phương vị. Với đồ vật, dùng 上 (shàng, thượng) hoặc 下 (xià, hạ) đặt ngay sau danh từ: 桌子上, 楼下.",
      "vn_tip": "Người Việt hay nói \"bên trái ở\" hoặc đặt phương vị lên trước. Trong tiếng Trung chủ thể đứng trước: 书店在左边 (Hiệu sách ở bên trái), không nói 在左边书店."
     },
     "chunks": [
      {
       "scene": "🏠🧭☀️",
       "full": "我家在东边",
       "vi": "Nhà tôi ở phía đông",
       "parts": [
        {
         "t": "我家",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ jiā",
         "hv": "ngã gia"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "东边",
         "ico": "🧭",
         "c": "o",
         "py": "dōngbian",
         "hv": "đông biên"
        }
       ],
       "traceWord": "东边",
       "py": "Wǒ jiā zài dōngbian",
       "traceKey": "dongbian",
       "traceInfo": [
        {
         "c": "东",
         "py": "dōng",
         "hv": "đông"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🏫🧭",
       "full": "学校在南边",
       "vi": "Trường học ở phía nam",
       "parts": [
        {
         "t": "学校",
         "ico": "🏫",
         "c": "s",
         "py": "xuéxiào",
         "hv": "học hiệu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "南边",
         "ico": "⬇️",
         "c": "o",
         "py": "nánbian",
         "hv": "nam biên"
        }
       ],
       "traceWord": "南边",
       "py": "Xuéxiào zài nánbian",
       "traceKey": "nanbian",
       "traceInfo": [
        {
         "c": "南",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "📚⬅️",
       "full": "书店在左边",
       "vi": "Hiệu sách ở bên trái",
       "parts": [
        {
         "t": "书店",
         "ico": "📚",
         "c": "s",
         "py": "shūdiàn",
         "hv": "thư điếm"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "左边",
         "ico": "⬅️",
         "c": "o",
         "py": "zuǒbian",
         "hv": "tả biên"
        }
       ],
       "traceWord": "左边",
       "py": "Shūdiàn zài zuǒbian",
       "traceKey": "zuobian",
       "traceInfo": [
        {
         "c": "左",
         "py": "zuǒ",
         "hv": "tả"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🏥➡️",
       "full": "医院在右边",
       "vi": "Bệnh viện ở bên phải",
       "parts": [
        {
         "t": "医院",
         "ico": "🏥",
         "c": "s",
         "py": "yīyuàn",
         "hv": "y viện"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "右边",
         "ico": "➡️",
         "c": "o",
         "py": "yòubian",
         "hv": "hữu biên"
        }
       ],
       "traceWord": "右边",
       "py": "Yīyuàn zài yòubian",
       "traceKey": "youbian",
       "traceInfo": [
        {
         "c": "右",
         "py": "yòu",
         "hv": "hữu"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "📱🪑⬆️",
       "full": "手机在桌子上",
       "vi": "Điện thoại ở trên bàn",
       "parts": [
        {
         "t": "手机",
         "ico": "📱",
         "c": "s",
         "py": "shǒujī",
         "hv": "thủ cơ"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "桌子上",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi shàng",
         "hv": "trác tử thượng"
        }
       ],
       "traceWord": "上",
       "py": "Shǒujī zài zhuōzi shàng",
       "traceKey": "shang",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🎒⬇️",
       "full": "书包在地上",
       "vi": "Cặp sách ở dưới đất",
       "parts": [
        {
         "t": "书包",
         "ico": "🎒",
         "c": "s",
         "py": "shūbāo",
         "hv": "thư bao"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "地上",
         "ico": "⬇️",
         "c": "o",
         "py": "dìshang",
         "hv": "địa thượng"
        }
       ],
       "traceWord": "地上",
       "py": "Shūbāo zài dìshang",
       "traceKey": "dishang",
       "traceInfo": [
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🚉🧭🌇",
       "full": "车站在西边",
       "vi": "Nhà ga ở phía tây",
       "parts": [
        {
         "t": "车站",
         "ico": "🚉",
         "c": "s",
         "py": "chēzhàn",
         "hv": "xa trạm"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "西边",
         "ico": "🌇",
         "c": "o",
         "py": "xībian",
         "hv": "tây biên"
        }
       ],
       "traceWord": "西边",
       "py": "Chēzhàn zài xībian",
       "traceKey": "xibian",
       "traceInfo": [
        {
         "c": "西",
         "py": "xī",
         "hv": "tây"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🏪🏥🧭",
       "full": "商店在医院北边",
       "vi": "Cửa hàng ở phía bắc bệnh viện",
       "parts": [
        {
         "t": "商店",
         "ico": "🏪",
         "c": "s",
         "py": "shāngdiàn",
         "hv": "thương điếm"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "医院北边",
         "ico": "⬆️",
         "c": "o",
         "py": "yīyuàn běibian",
         "hv": "y viện bắc biên"
        }
       ],
       "traceWord": "北边",
       "py": "Shāngdiàn zài yīyuàn běibian",
       "traceKey": "beibian",
       "traceInfo": [
        {
         "c": "北",
         "py": "běi",
         "hv": "bắc"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你家在哪儿？",
       "qvi": "Nhà bạn ở đâu?",
       "scene": "🏠❓",
       "ans": "我家在东边",
       "opts": [
        {
         "txt": "我很忙",
         "ico": "😓",
         "py": "Wǒ hěn máng"
        },
        {
         "txt": "我家在东边",
         "ico": "🧭",
         "py": "Wǒ jiā zài dōngbian"
        },
        {
         "txt": "我喝水",
         "ico": "💧",
         "py": "Wǒ hē shuǐ"
        }
       ],
       "qpy": "Nǐ jiā zài nǎr?"
      },
      {
       "q": "桌子的上下左右有什么？",
       "qvi": "Trên dưới trái phải của cái bàn có gì?",
       "scene": "🪑⬆️⬇️⬅️➡️",
       "ans": "桌子上有手机",
       "opts": [
        {
         "txt": "桌子上有手机",
         "ico": "📱",
         "py": "Zhuōzi shàng yǒu shǒujī"
        },
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        }
       ],
       "qpy": "Zhuōzi de shàng xià zuǒ yòu yǒu shénme?"
      },
      {
       "q": "你知道东南西北吗？",
       "qvi": "Bạn có biết đông tây nam bắc không?",
       "scene": "🧭❓",
       "ans": "我知道",
       "opts": [
        {
         "txt": "我很忙",
         "ico": "😓",
         "py": "Wǒ hěn máng"
        },
        {
         "txt": "他是老师",
         "ico": "👩‍🏫",
         "py": "Tā shì lǎoshī"
        },
        {
         "txt": "我知道",
         "ico": "✅",
         "py": "Wǒ zhīdào"
        }
       ],
       "qpy": "Nǐ zhīdào dōng nán xī běi ma?"
      },
      {
       "q": "学校的右边是什么？",
       "qvi": "Bên phải trường học là gì?",
       "scene": "🏫➡️❓",
       "ans": "右边是书店",
       "opts": [
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        },
        {
         "txt": "右边是书店",
         "ico": "📚",
         "py": "Yòubian shì shūdiàn"
        }
       ],
       "qpy": "Xuéxiào de yòubian shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chỉ đường cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh nơi làm việc hoặc nhà bạn, chọn 5 vật hoặc nơi quen thuộc, nói thành tiếng vị trí của từng thứ, ví dụ <i>\"书店在左边\"</i>, <i>\"手机在桌子上\"</i>.",
       "<b>Bước 2:</b> Hình dung một đồng nghiệp mới hỏi bạn các nơi gần công ty. Dùng đông, tây, nam, bắc và trái, phải để trả lời, ví dụ <i>\"医院在右边\"</i>, <i>\"车站在西边\"</i>.",
       "<b>Bước 3:</b> Nhắn tin hoặc ghi âm cho bạn bè một đoạn 4 câu tả khu bạn sống: nhà ở đâu, trường học hoặc cửa hàng ở đâu, dùng ít nhất 3 từ phương hướng khác nhau."
      ]
     }
    },
    {
     "id": "1.11B",
     "name": "Bài 1.11B: Vị trí tương đối, câu chữ 是 chỉ tồn tại",
     "grammar": {
      "formulas": [
       "📍 前边 + ⚡ 是 + 🏥 医院",
       "📍 桌子上边 + ⚡ 是 + 💻 电脑",
       "📍 我家旁边 + ⚡ 是 + 🏫 学校"
      ],
      "tip": "Cấu trúc \"nơi chốn + 是 + sự vật\" nói rõ ở vị trí đó có cái gì: 前边是医院 (Phía trước là bệnh viện). Các từ chỉ vị trí: 前边 (qiánbian, tiền biên), 后边 (hậu biên), 外边 (ngoại biên), 中间 (trung gian), 旁边 (bàng biên).",
      "vn_tip": "前边有医院 (phía trước có bệnh viện) cũng đúng, chỉ báo ở đó có một bệnh viện; 前边是医院 (phía trước là bệnh viện) cho biết thứ ở vị trí đó chính là bệnh viện. Danh từ chỉ nơi chốn đứng đầu câu, đừng đặt 是 trước nơi chốn."
     },
     "chunks": [
      {
       "scene": "⬆️🏥",
       "full": "前边是医院",
       "vi": "Phía trước là bệnh viện",
       "parts": [
        {
         "t": "前边",
         "ico": "⬆️",
         "c": "s",
         "py": "qiánbian",
         "hv": "tiền biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "医院",
         "ico": "🏥",
         "c": "o",
         "py": "yīyuàn",
         "hv": "y viện"
        }
       ],
       "traceWord": "前边",
       "py": "Qiánbian shì yīyuàn",
       "traceKey": "qianbian",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "⬇️🏫",
       "full": "后边是学校",
       "vi": "Phía sau là trường học",
       "parts": [
        {
         "t": "后边",
         "ico": "⬇️",
         "c": "s",
         "py": "hòubian",
         "hv": "hậu biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "学校",
         "ico": "🏫",
         "c": "o",
         "py": "xuéxiào",
         "hv": "học hiệu"
        }
       ],
       "traceWord": "后边",
       "py": "Hòubian shì xuéxiào",
       "traceKey": "houbian",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🪑⬆️💻",
       "full": "桌子上边是电脑",
       "vi": "Phía trên bàn là máy tính",
       "parts": [
        {
         "t": "桌子上边",
         "ico": "🪑",
         "c": "s",
         "py": "zhuōzi shàngbian",
         "hv": "trác tử thượng biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "电脑",
         "ico": "💻",
         "c": "o",
         "py": "diànnǎo",
         "hv": "điện não"
        }
       ],
       "traceWord": "上边",
       "py": "Zhuōzi shàngbian shì diànnǎo",
       "traceKey": "shangbian",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🪑⬇️🎒",
       "full": "桌子下边是书包",
       "vi": "Phía dưới bàn là cặp sách",
       "parts": [
        {
         "t": "桌子下边",
         "ico": "🪑",
         "c": "s",
         "py": "zhuōzi xiàbian",
         "hv": "trác tử hạ biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "书包",
         "ico": "🎒",
         "c": "o",
         "py": "shūbāo",
         "hv": "thư bao"
        }
       ],
       "traceWord": "下边",
       "py": "Zhuōzi xiàbian shì shūbāo",
       "traceKey": "xiabian",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🚪🛣️",
       "full": "外边是马路",
       "vi": "Bên ngoài là đường lớn",
       "parts": [
        {
         "t": "外边",
         "ico": "🚪",
         "c": "s",
         "py": "wàibian",
         "hv": "ngoại biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "马路",
         "ico": "🛣️",
         "c": "o",
         "py": "mǎlù",
         "hv": "mã lộ"
        }
       ],
       "traceWord": "外边",
       "py": "Wàibian shì mǎlù",
       "traceKey": "waibian",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "边",
         "py": "bian",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "↔️🏪",
       "full": "中间是商店",
       "vi": "Ở giữa là cửa hàng",
       "parts": [
        {
         "t": "中间",
         "ico": "↔️",
         "c": "s",
         "py": "zhōngjiān",
         "hv": "trung gian"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "商店",
         "ico": "🏪",
         "c": "o",
         "py": "shāngdiàn",
         "hv": "thương điếm"
        }
       ],
       "traceWord": "中间",
       "py": "Zhōngjiān shì shāngdiàn",
       "traceKey": "zhongjian",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "间",
         "py": "jiān",
         "hv": "gian"
        }
       ]
      },
      {
       "scene": "🏠👉🏫",
       "full": "我家旁边是学校",
       "vi": "Bên cạnh nhà tôi là trường học",
       "parts": [
        {
         "t": "我家旁边",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ jiā pángbiān",
         "hv": "ngã gia bàng biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "学校",
         "ico": "🏫",
         "c": "o",
         "py": "xuéxiào",
         "hv": "học hiệu"
        }
       ],
       "traceWord": "旁边",
       "py": "Wǒ jiā pángbiān shì xuéxiào",
       "traceKey": "pangbian",
       "traceInfo": [
        {
         "c": "旁",
         "py": "páng",
         "hv": "bàng"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "👉📚",
       "full": "这边是书店",
       "vi": "Bên này là hiệu sách",
       "parts": [
        {
         "t": "这边",
         "ico": "👉",
         "c": "s",
         "py": "zhèbiān",
         "hv": "giá biên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "书店",
         "ico": "📚",
         "c": "o",
         "py": "shūdiàn",
         "hv": "thư điếm"
        }
       ],
       "traceWord": "这边",
       "py": "Zhèbiān shì shūdiàn",
       "traceKey": "zhebian",
       "traceInfo": [
        {
         "c": "这",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "学校前后有什么？",
       "qvi": "Trước và sau trường học có gì?",
       "scene": "🏫↕️❓",
       "ans": "前后都是商店",
       "opts": [
        {
         "txt": "前后都是商店",
         "ico": "🏪",
         "py": "Qián hòu dōu shì shāngdiàn"
        },
        {
         "txt": "我想吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xiǎng chī miàntiáor"
        },
        {
         "txt": "他在学校",
         "ico": "🏫",
         "py": "Tā zài xuéxiào"
        }
       ],
       "qpy": "Xuéxiào qián hòu yǒu shénme?"
      },
      {
       "q": "那边是什么？",
       "qvi": "Bên kia là gì?",
       "scene": "👉❓",
       "ans": "那边是商店",
       "opts": [
        {
         "txt": "我不喝茶",
         "ico": "🍵",
         "py": "Wǒ bù hē chá"
        },
        {
         "txt": "他们是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen shì xuéshēng"
        },
        {
         "txt": "那边是商店",
         "ico": "🏪",
         "py": "Nàbiān shì shāngdiàn"
        }
       ],
       "qpy": "Nàbiān shì shénme?"
      },
      {
       "q": "你好，请坐下吧。",
       "qvi": "Chào bạn, mời bạn ngồi xuống.",
       "scene": "🪑🙋",
       "ans": "谢谢",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "谢谢",
         "ico": "🙏",
         "py": "Xièxie"
        },
        {
         "txt": "我去学校",
         "ico": "🏫",
         "py": "Wǒ qù xuéxiào"
        }
       ],
       "qpy": "Nǐ hǎo qǐng zuò xia ba"
      },
      {
       "q": "他在车中还是车外？",
       "qvi": "Anh ấy ở trong xe hay ngoài xe?",
       "scene": "🚗🚪❓",
       "ans": "他在车外",
       "opts": [
        {
         "txt": "我很忙",
         "ico": "😓",
         "py": "Wǒ hěn máng"
        },
        {
         "txt": "她是我妈妈",
         "ico": "👩",
         "py": "Tā shì wǒ māma"
        },
        {
         "txt": "他在车外",
         "ico": "🚪",
         "py": "Tā zài chē wài"
        }
       ],
       "qpy": "Tā zài chē zhōng háishi chē wài?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mô tả văn phòng và khu xung quanh",
      "steps": [
       "<b>Bước 1:</b> Nhìn bàn làm việc của bạn và nói thành tiếng cái gì ở trên, cái gì ở dưới, ví dụ <i>\"桌子上边是电脑\"</i>, <i>\"桌子下边是书包\"</i>.",
       "<b>Bước 2:</b> Tả khu vực quanh nhà hoặc công ty cho một người bạn: phía trước, phía sau, bên ngoài, bên cạnh là gì, ví dụ <i>\"前边是医院\"</i>, <i>\"我家旁边是学校\"</i>.",
       "<b>Bước 3:</b> Đóng vai khách đến thăm. Bạn mời khách ngồi bằng <i>\"请坐下吧\"</i> và chỉ nơi để đồ bằng <i>\"这边是书店\"</i>, <i>\"那边是商店\"</i>, rồi ghi âm lại cả đoạn hội thoại."
      ]
     }
    },
    {
     "id": "1.11C",
     "name": "Bài 1.11C: Hỏi và chỉ nơi chốn với 哪儿",
     "grammar": {
      "formulas": [
       "❓ 你 + 📍 在 + 🗺️ 哪儿？",
       "❓ 图书馆 + 📍 在 + 🗺️ 哪里？",
       "📍 我 + 在 + 👉 这里"
      ],
      "tip": "Hỏi nơi chốn: chủ thể + 在 + 哪儿/哪里 (nǎr/nǎlǐ). Trả lời bằng 这儿/这里 (gần) hoặc 那儿/那里 (xa): 我在这里, 他们在那里. 哪儿 hay dùng ở miền Bắc, 哪里 trang trọng hơn một chút, nghĩa như nhau. 怎么 (zěnme) hỏi cách làm: 去图书馆怎么走？",
      "vn_tip": "Người Việt hay nói \"ở đâu bạn?\" hoặc đặt 哪儿 trước 在. Trong tiếng Trung từ để hỏi đứng đúng vị trí của câu trả lời: 你在哪儿？ trả lời 我在这儿. Không thêm 吗 vào câu có 哪儿."
     },
     "chunks": [
      {
       "scene": "🧑❓🗺️",
       "full": "你是哪国人",
       "vi": "Bạn là người nước nào?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "是",
         "ico": "📍",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "哪国人",
         "ico": "❓",
         "c": "o",
         "py": "nǎ guó rén",
         "hv": "na quốc nhân"
        }
       ],
       "traceWord": "国",
       "py": "Nǐ shì nǎ guó rén",
       "traceKey": "guo",
       "traceInfo": [
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        }
       ]
      },
      {
       "scene": "🙋📍",
       "full": "我在这里",
       "vi": "Tôi ở đây",
       "parts": [
        {
         "t": "我",
         "ico": "🙋",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "这里",
         "ico": "👇",
         "c": "o",
         "py": "zhèlǐ",
         "hv": "giá lý"
        }
       ],
       "traceWord": "这里",
       "py": "Wǒ zài zhèlǐ",
       "traceKey": "zheli",
       "traceInfo": [
        {
         "c": "这",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "👥👉",
       "full": "他们在那里",
       "vi": "Họ ở đằng kia",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "那里",
         "ico": "👉",
         "c": "o",
         "py": "nàlǐ",
         "hv": "na lý"
        }
       ],
       "traceWord": "那里",
       "py": "Tāmen zài nàlǐ",
       "traceKey": "nali",
       "traceInfo": [
        {
         "c": "那",
         "py": "nà",
         "hv": "na"
        },
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "📚🏛️❓",
       "full": "图书馆在哪里",
       "vi": "Thư viện ở đâu?",
       "parts": [
        {
         "t": "图书馆",
         "ico": "📚",
         "c": "s",
         "py": "túshūguǎn",
         "hv": "đồ thư quán"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "哪里",
         "ico": "❓",
         "c": "o",
         "py": "nǎlǐ",
         "hv": "na lý"
        }
       ],
       "traceWord": "图书馆",
       "py": "Túshūguǎn zài nǎlǐ",
       "traceKey": "tushuguan",
       "traceInfo": [
        {
         "c": "图",
         "py": "tú",
         "hv": "đồ"
        },
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "🏥❓",
       "full": "奶在哪儿",
       "vi": "Sữa ở đâu?",
       "parts": [
        {
         "t": "奶",
         "ico": "🏥",
         "c": "s",
         "py": "nǎi",
         "hv": "nãi"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "哪儿",
         "ico": "❓",
         "c": "o",
         "py": "nǎr",
         "hv": "na nhi"
        }
       ],
       "traceWord": "奶",
       "py": "Nǎi zài nǎr",
       "traceKey": "nai",
       "traceInfo": [
        {
         "c": "奶",
         "py": "nǎi",
         "hv": "nãi"
        }
       ]
      },
      {
       "scene": "📱👇",
       "full": "手机在这儿",
       "vi": "Điện thoại ở đây",
       "parts": [
        {
         "t": "手机",
         "ico": "📱",
         "c": "s",
         "py": "shǒujī",
         "hv": "thủ cơ"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "这儿",
         "ico": "👇",
         "c": "o",
         "py": "zhèr",
         "hv": "giá nhi"
        }
       ],
       "traceWord": "这儿",
       "py": "Shǒujī zài zhèr",
       "traceKey": "zher",
       "traceInfo": [
        {
         "c": "这",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "🎒👉",
       "full": "书包在那儿",
       "vi": "Cặp sách ở đằng kia",
       "parts": [
        {
         "t": "书包",
         "ico": "🎒",
         "c": "s",
         "py": "shūbāo",
         "hv": "thư bao"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "那儿",
         "ico": "👉",
         "c": "o",
         "py": "nàr",
         "hv": "na nhi"
        }
       ],
       "traceWord": "那儿",
       "py": "Shūbāo zài nàr",
       "traceKey": "nar",
       "traceInfo": [
        {
         "c": "那",
         "py": "nà",
         "hv": "na"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "🧑🛒❓",
       "full": "你想买哪个",
       "vi": "Bạn muốn mua cái nào?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "买哪个",
         "ico": "🛒",
         "c": "o",
         "py": "mǎi nǎ gè",
         "hv": "mãi na cá"
        }
       ],
       "traceWord": "哪",
       "py": "Nǐ xiǎng mǎi nǎ gè",
       "traceKey": "na",
       "traceInfo": [
        {
         "c": "哪",
         "py": "nǎ",
         "hv": "na"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你找到手机了吗？",
       "qvi": "Bạn tìm thấy điện thoại chưa?",
       "scene": "📱🔍",
       "ans": "我找到了",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "我找到了",
         "ico": "✅",
         "py": "Wǒ zhǎodào le"
        },
        {
         "txt": "他在学校",
         "ico": "🏫",
         "py": "Tā zài xuéxiào"
        }
       ],
       "qpy": "Nǐ zhǎodào shǒujī le ma?"
      },
      {
       "q": "去图书馆怎么走？",
       "qvi": "Đi thư viện đi như thế nào?",
       "scene": "📚🚶❓",
       "ans": "图书馆在医院旁边",
       "opts": [
        {
         "txt": "我喜欢喝牛奶",
         "ico": "🥛",
         "py": "Wǒ xǐhuan hē niúnǎi"
        },
        {
         "txt": "图书馆在医院旁边",
         "ico": "🏥",
         "py": "Túshūguǎn zài yīyuàn pángbiān"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        }
       ],
       "qpy": "Qù túshūguǎn zěnme zǒu?"
      },
      {
       "q": "你想买哪些水果？",
       "qvi": "Bạn muốn mua những loại trái cây nào?",
       "scene": "🍎🛒❓",
       "ans": "我想买这些",
       "opts": [
        {
         "txt": "我想买这些",
         "ico": "🍎",
         "py": "Wǒ xiǎng mǎi zhèxiē"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        },
        {
         "txt": "他不是老师",
         "ico": "👩‍🏫",
         "py": "Tā bú shì lǎoshī"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi nǎxiē shuǐguǒ?"
      },
      {
       "q": "那些是什么？",
       "qvi": "Những cái kia là gì?",
       "scene": "👉❓",
       "ans": "那些是书",
       "opts": [
        {
         "txt": "我在北京",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng"
        },
        {
         "txt": "他很高",
         "ico": "🧍",
         "py": "Tā hěn gāo"
        },
        {
         "txt": "那些是书",
         "ico": "📚",
         "py": "Nàxiē shì shū"
        }
       ],
       "qpy": "Nàxiē shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đường và tìm đồ",
      "steps": [
       "<b>Bước 1:</b> Gọi điện hoặc nhắn tin cho đồng nghiệp đang ở chỗ khác, hỏi <i>\"你在哪儿？\"</i> rồi trả lời <i>\"我在这里\"</i>. Tập đổi vai nhiều lần.",
       "<b>Bước 2:</b> Đóng vai người lạ hỏi đường: <i>\"图书馆在哪里？\"</i>, <i>\"医院在哪儿？\"</i>. Người kia chỉ bằng <i>\"在那里\"</i> hoặc <i>\"在医院旁边\"</i>.",
       "<b>Bước 3:</b> Bạn đang tìm đồ ở văn phòng. Hỏi <i>\"书包在哪儿？\"</i>, <i>\"你找到手机了吗？\"</i> và trả lời bằng <i>\"这儿\"</i>, <i>\"那儿\"</i>. Nói thành tiếng ít nhất 6 câu."
      ]
     }
    }
   ]
  }
 }
};
