/* HSK %d — khóa tiếng Trung cho người đi làm (chuẩn HSK 3.0). Dữ liệu một cấp, nạp bằng <script src> (file:// được, không fetch).
   Tự sinh bởi zh/tools/assemble.py từ các lô đã qua kiểm (py/hv/traceKey do script điền từ hsk30 + Unihan). Định dạng: zh/docs/SPEC.md mục 4. */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[2] = {
 "label": "HSK 2",
 "modules": [
  {
   "code": "2.1",
   "title": "Công việc và văn phòng"
  },
  {
   "code": "2.2",
   "title": "Giao tiếp và hẹn gặp"
  },
  {
   "code": "2.3",
   "title": "Mua sắm"
  },
  {
   "code": "2.4",
   "title": "Ăn uống"
  },
  {
   "code": "2.5",
   "title": "Đi lại trong thành phố"
  },
  {
   "code": "2.6",
   "title": "Du lịch và nghỉ ngơi"
  },
  {
   "code": "2.7",
   "title": "Nhà ở, khu phố và trường học"
  },
  {
   "code": "2.8",
   "title": "Sức khỏe và cảm xúc"
  },
  {
   "code": "2.9",
   "title": "Thể thao và luyện tập"
  },
  {
   "code": "2.10",
   "title": "Thời tiết và thiên nhiên"
  },
  {
   "code": "2.11",
   "title": "Điện thoại và internet"
  },
  {
   "code": "2.12",
   "title": "Gia đình và con người"
  },
  {
   "code": "2.13",
   "title": "Thời gian và lịch"
  },
  {
   "code": "2.14",
   "title": "Sở thích và ngôn ngữ"
  },
  {
   "code": "2.15",
   "title": "Dịch vụ và thủ tục"
  },
  {
   "code": "2.16",
   "title": "Học tập, kế hoạch và kết quả"
  }
 ],
 "data": {
  "2.1": {
   "lessons": [
    {
     "id": "2.1A",
     "name": "Bài 2.1A: Đại từ nhân xưng ở văn phòng",
     "grammar": {
      "formulas": [
       "👥 大家 + ⚡ 都 + 🏢 在办公室",
       "🤝 咱们 + ⚡ 是 + 💼 同事",
       "🙋 小王自己 + ⚡ 开车 + 🏢 去公司"
      ],
      "tip": "大家 (dàjiā, đại gia) = mọi người; 咱们 (zánmen) là \"chúng ta\" gồm cả người nghe, còn 我们 (wǒmen, ngã môn) có thể không gồm người nghe. 它 (tā) chỉ vật/con vật, 它们 là số nhiều. 自己 (zìjǐ, tự kỷ) = bản thân, đứng ngay sau chủ ngữ để nhấn mạnh.",
      "vn_tip": "Người Việt hay dịch \"mình/ta\" thành 我们 mọi lúc. Khi rủ người đối diện cùng làm gì, nói 咱们 hoặc 咱 cho thân mật. Đừng dùng 他/她 cho đồ vật, hãy dùng 它."
     },
     "chunks": [
      {
       "scene": "🤝👨‍💼👩‍💼",
       "full": "咱们是同事",
       "vi": "Chúng ta là đồng nghiệp",
       "parts": [
        {
         "t": "咱们",
         "ico": "🤝",
         "c": "s",
         "py": "zánmen",
         "hv": "_ môn"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "同事",
         "ico": "👨‍💼",
         "c": "o",
         "py": "tóngshì",
         "hv": "đồng sự"
        }
       ],
       "traceWord": "同事",
       "py": "Zánmen shì tóngshì",
       "traceKey": "tongshi",
       "traceInfo": [
        {
         "c": "同",
         "py": "tóng",
         "hv": "đồng"
        },
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        }
       ]
      },
      {
       "scene": "👥🏢💼",
       "full": "大家都在办公室",
       "vi": "Mọi người đều ở văn phòng",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都在",
         "ico": "📍",
         "c": "v",
         "py": "dōu zài",
         "hv": "đô tại"
        },
        {
         "t": "办公室",
         "ico": "🏢",
         "c": "o",
         "py": "bàngōngshì",
         "hv": "biện công thất"
        }
       ],
       "traceWord": "办公室",
       "py": "Dàjiā dōu zài bàngōngshì",
       "traceKey": "bangongshi",
       "traceInfo": [
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        },
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "室",
         "py": "shì",
         "hv": "thất"
        }
       ]
      },
      {
       "scene": "📱🪑",
       "full": "它在桌子上",
       "vi": "Nó ở trên bàn",
       "parts": [
        {
         "t": "它",
         "ico": "📱",
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
         "t": "桌子上",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi shàng",
         "hv": "trác tử thượng"
        }
       ],
       "traceWord": "它",
       "py": "Tā zài zhuōzi shàng",
       "traceKey": "ta",
       "traceInfo": [
        {
         "c": "它",
         "py": "tā",
         "hv": "tha"
        }
       ]
      },
      {
       "scene": "🏬📍🇨🇳",
       "full": "我的单位在北京",
       "vi": "Cơ quan của tôi ở Bắc Kinh",
       "parts": [
        {
         "t": "我的单位",
         "ico": "🏬",
         "c": "s",
         "py": "wǒ de dānwèi",
         "hv": "ngã đích đơn vị"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "北京",
         "ico": "🏙️",
         "c": "o",
         "py": "Běijīng",
         "hv": "bắc kinh"
        }
       ],
       "traceWord": "单位",
       "py": "Wǒ de dānwèi zài Běijīng",
       "traceKey": "danwei",
       "traceInfo": [
        {
         "c": "单",
         "py": "dān",
         "hv": "đơn"
        },
        {
         "c": "位",
         "py": "wèi",
         "hv": "vị"
        }
       ]
      },
      {
       "scene": "👥👨‍💼🧑‍💼",
       "full": "小组的组长是老王",
       "vi": "Tổ trưởng của nhóm là ông Vương",
       "parts": [
        {
         "t": "小组的组长",
         "ico": "👥",
         "c": "s",
         "py": "xiǎozǔ de zǔzhǎng",
         "hv": "tiểu tổ đích tổ trưởng"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "老王",
         "ico": "👨‍💼",
         "c": "o",
         "py": "Lǎowáng",
         "hv": "lão vương"
        }
       ],
       "traceWord": "组长",
       "py": "Xiǎozǔ de zǔzhǎng shì Lǎowáng",
       "traceKey": "zuzhang",
       "traceInfo": [
        {
         "c": "组",
         "py": "zǔ",
         "hv": "tổ"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "🧑‍🏫🙋‍♂️🪑",
       "full": "班长请大家坐下",
       "vi": "Lớp trưởng mời mọi người ngồi xuống",
       "parts": [
        {
         "t": "班长",
         "ico": "🧑‍🏫",
         "c": "s",
         "py": "bānzhǎng",
         "hv": "ban trưởng"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "大家坐下",
         "ico": "🪑",
         "c": "o",
         "py": "dàjiā zuò xia",
         "hv": "đại gia tọa hạ"
        }
       ],
       "traceWord": "班长",
       "py": "Bānzhǎng qǐng dàjiā zuò xia",
       "traceKey": "banzhang",
       "traceInfo": [
        {
         "c": "班",
         "py": "bān",
         "hv": "ban"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "🧑🚗🏢",
       "full": "小王自己开车去公司",
       "vi": "Tiểu Vương tự lái xe đến công ty",
       "parts": [
        {
         "t": "小王自己",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng zìjǐ",
         "hv": "tiểu vương tự kỷ"
        },
        {
         "t": "开车",
         "ico": "🚗",
         "c": "v",
         "py": "kāichē",
         "hv": "khai xa"
        },
        {
         "t": "去公司",
         "ico": "🏢",
         "c": "o",
         "py": "qù gōngsī",
         "hv": "khứ công ti"
        }
       ],
       "traceWord": "自己",
       "py": "Xiǎowáng zìjǐ kāichē qù gōngsī",
       "traceKey": "ziji",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "己",
         "py": "jǐ",
         "hv": "kỷ"
        }
       ]
      },
      {
       "scene": "🍚🍜🚶",
       "full": "咱去吃饭吧",
       "vi": "Mình đi ăn cơm nhé",
       "parts": [
        {
         "t": "咱",
         "ico": "🤝",
         "c": "s",
         "py": "zán",
         "hv": "_"
        },
        {
         "t": "去",
         "ico": "🚶",
         "c": "v",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "t": "吃饭吧",
         "ico": "🍚",
         "c": "o",
         "py": "chīfàn ba",
         "hv": "cật phạn ba"
        }
       ],
       "traceWord": "咱",
       "py": "Zán qù chīfàn ba",
       "traceKey": "zan",
       "traceInfo": [
        {
         "c": "咱",
         "py": "zán",
         "hv": "_"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "谁是你们的经理？",
       "qvi": "Ai là giám đốc của các bạn?",
       "scene": "👔🏢",
       "ans": "张经理是我们的经理",
       "opts": [
        {
         "txt": "小王是我的同学",
         "ico": "🧑‍🎓",
         "py": "Xiǎowáng shì wǒ de tóngxué"
        },
        {
         "txt": "张经理是我们的经理",
         "ico": "👔",
         "py": "Zhāngjīnglǐ shì wǒmen de jīnglǐ"
        },
        {
         "txt": "我的朋友在北京",
         "ico": "🏙️",
         "py": "Wǒ de péngyou zài Běijīng"
        }
       ],
       "qpy": "Shéi shì nǐmen de jīnglǐ?"
      },
      {
       "q": "它们在哪儿？",
       "qvi": "Chúng ở đâu?",
       "scene": "📱📍",
       "ans": "它们在我的包里",
       "opts": [
        {
         "txt": "他们是大学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen shì dàxuéshēng"
        },
        {
         "txt": "我们明天去医院",
         "ico": "🏥",
         "py": "Wǒmen míngtiān qù yīyuàn"
        },
        {
         "txt": "它们在我的包里",
         "ico": "🎒",
         "py": "Tāmen zài wǒ de bāo lǐ"
        }
       ],
       "qpy": "Tāmen zài nǎr?"
      },
      {
       "q": "你们在哪儿工作？",
       "qvi": "Các bạn làm việc ở đâu?",
       "scene": "🧑‍💼🏢",
       "ans": "我们在一个公司工作",
       "opts": [
        {
         "txt": "我们在一个公司工作",
         "ico": "🏢",
         "py": "Wǒmen zài yī gè gōngsī gōngzuò"
        },
        {
         "txt": "我们明天去北京",
         "ico": "🚄",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐmen zài nǎr gōngzuò?"
      },
      {
       "q": "这个工作你自己做吗？",
       "qvi": "Việc này bạn tự làm à?",
       "scene": "🧑💻❓",
       "ans": "我自己做",
       "opts": [
        {
         "txt": "他是我的同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "我们在家",
         "ico": "🏠",
         "py": "Wǒmen zàijiā"
        },
        {
         "txt": "我自己做",
         "ico": "🙋",
         "py": "Wǒ zìjǐ zuò"
        }
       ],
       "qpy": "Zhè gè gōngzuò nǐ zìjǐ zuò ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi ăn trưa",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc nói to với một đồng nghiệp: <i>\"咱们是同事\"</i>, rồi giới thiệu tổ trưởng của nhóm bạn bằng <i>\"小组的组长是老王\"</i> (thay tên thật).",
       "<b>Bước 2:</b> Gọi cả nhóm: <i>\"大家都在办公室\"</i> để xác nhận mọi người có mặt, rồi hỏi ai tự lái xe đến công ty bằng <i>\"小王自己开车去公司\"</i>.",
       "<b>Bước 3:</b> Rủ cả nhóm đi ăn trưa bằng <i>\"咱去吃饭吧\"</i>. Tự nói thành tiếng 3 lần với giọng thân thiện."
      ]
     }
    },
    {
     "id": "2.1B",
     "name": "Bài 2.1B: Danh lượng từ cho giấy tờ và thư từ",
     "grammar": {
      "formulas": [
       "📩 我 + ⚡ 有 + 📩 一封信",
       "📰 桌子上 + ⚡ 有 + 📰 两份报纸",
       "🏢 这个楼 + ⚡ 有 + 🔢 六层"
      ],
      "tip": "Số + danh lượng từ + danh từ. 封 (fēng, phong) dùng cho thư; 件 (jiàn, kiện) cho quần áo, việc; 条 (tiáo, điều) cho vật dài như đường; 位 (wèi, vị) lịch sự cho người; 层 (céng, tằng) cho tầng lầu; 份 (fèn, phần) cho báo, tài liệu.",
      "vn_tip": "Tiếng Việt hay nói \"một cái\" cho mọi thứ, còn tiếng Trung phải chọn đúng danh lượng từ. Số 2 đứng trước danh lượng từ dùng 两 (liǎng), không dùng 二: 两份报纸, không nói 二份报纸."
     },
     "chunks": [
      {
       "scene": "🙋‍♂️❓📛",
       "full": "请问你姓什么",
       "vi": "Xin hỏi bạn họ gì",
       "parts": [
        {
         "t": "请问你",
         "ico": "🙏",
         "c": "s",
         "py": "qǐngwèn nǐ",
         "hv": "thỉnh vấn nễ"
        },
        {
         "t": "姓",
         "ico": "📛",
         "c": "v",
         "py": "xìng",
         "hv": "tính"
        },
        {
         "t": "什么",
         "ico": "❓",
         "c": "o",
         "py": "shénme",
         "hv": "thập ma"
        }
       ],
       "traceWord": "姓",
       "py": "Qǐngwèn nǐ xìng shénme",
       "traceKey": "xing",
       "traceInfo": [
        {
         "c": "姓",
         "py": "xìng",
         "hv": "tính"
        }
       ]
      },
      {
       "scene": "✍️📝🧑",
       "full": "请写你的姓名",
       "vi": "Xin hãy viết họ tên của bạn",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "写",
         "ico": "✍️",
         "c": "v",
         "py": "xiě",
         "hv": "tả"
        },
        {
         "t": "你的姓名",
         "ico": "📝",
         "c": "o",
         "py": "nǐ de xìngmíng",
         "hv": "nễ đích tính danh"
        }
       ],
       "traceWord": "姓名",
       "py": "Qǐng xiě nǐ de xìngmíng",
       "traceKey": "xingming",
       "traceInfo": [
        {
         "c": "姓",
         "py": "xìng",
         "hv": "tính"
        },
        {
         "c": "名",
         "py": "míng",
         "hv": "danh"
        }
       ]
      },
      {
       "scene": "🧑✉️",
       "full": "我有一封信",
       "vi": "Tôi có một lá thư",
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
         "t": "一封信",
         "ico": "✉️",
         "c": "o",
         "py": "yī fēng xìn",
         "hv": "nhất phong tín"
        }
       ],
       "traceWord": "封",
       "py": "Wǒ yǒu yī fēng xìn",
       "traceKey": "feng",
       "traceInfo": [
        {
         "c": "封",
         "py": "fēng",
         "hv": "phong"
        }
       ]
      },
      {
       "scene": "🪑📰📰",
       "full": "桌子上有两份报纸",
       "vi": "Trên bàn có hai tờ báo",
       "parts": [
        {
         "t": "桌子上",
         "ico": "🪑",
         "c": "s",
         "py": "zhuōzi shàng",
         "hv": "trác tử thượng"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两份报纸",
         "ico": "📰",
         "c": "o",
         "py": "liǎng fèn bàozhǐ",
         "hv": "lưỡng phần báo chỉ"
        }
       ],
       "traceWord": "报纸",
       "py": "Zhuōzi shàng yǒu liǎng fèn bàozhǐ",
       "traceKey": "baozhi",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "纸",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "🖨️📄🧑",
       "full": "我想打印这份表",
       "vi": "Tôi muốn in mẫu biểu này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "打印这份表",
         "ico": "🖨️",
         "c": "o",
         "py": "dǎyìn zhè fèn biǎo",
         "hv": "đả ấn giá phần biểu"
        }
       ],
       "traceWord": "打印",
       "py": "Wǒ xiǎng dǎyìn zhè fèn biǎo",
       "traceKey": "dayin",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "印",
         "py": "yìn",
         "hv": "ấn"
        }
       ]
      },
      {
       "scene": "🛍️👔🧑",
       "full": "我买了一件新衣服",
       "vi": "Tôi đã mua một bộ đồ mới",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "买了",
         "ico": "🛍️",
         "c": "v",
         "py": "mǎi le",
         "hv": "mãi liễu"
        },
        {
         "t": "一件新衣服",
         "ico": "👔",
         "c": "o",
         "py": "yī jiàn xīn yīfu",
         "hv": "nhất kiện tân y phục"
        }
       ],
       "traceWord": "件",
       "py": "Wǒ mǎi le yī jiàn xīn yīfu",
       "traceKey": "jian",
       "traceInfo": [
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🛣️👀",
       "full": "前边有一条马路",
       "vi": "Phía trước có một con đường",
       "parts": [
        {
         "t": "前边",
         "ico": "⬆️",
         "c": "s",
         "py": "qiánbian",
         "hv": "tiền biên"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一条马路",
         "ico": "🛣️",
         "c": "o",
         "py": "yī tiáo mǎlù",
         "hv": "nhất điều mã lộ"
        }
       ],
       "traceWord": "马路",
       "py": "Qiánbian yǒu yī tiáo mǎlù",
       "traceKey": "malu",
       "traceInfo": [
        {
         "c": "马",
         "py": "mǎ",
         "hv": "mã"
        },
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        }
       ]
      },
      {
       "scene": "🏢🔢",
       "full": "这个楼有六层",
       "vi": "Tòa nhà này có sáu tầng",
       "parts": [
        {
         "t": "这个楼",
         "ico": "🏢",
         "c": "s",
         "py": "zhè gè lóu",
         "hv": "giá cá lâu"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "六层",
         "ico": "🔢",
         "c": "o",
         "py": "liù céng",
         "hv": "lục tầng"
        }
       ],
       "traceWord": "层",
       "py": "Zhè gè lóu yǒu liù céng",
       "traceKey": "ceng",
       "traceInfo": [
        {
         "c": "层",
         "py": "céng",
         "hv": "tầng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的书包里有什么？",
       "qvi": "Trong cặp của bạn có gì?",
       "scene": "🎒❓",
       "ans": "我有笔记本和笔",
       "opts": [
        {
         "txt": "我有一个哥哥",
         "ico": "👦",
         "py": "Wǒ yǒu yī gè gēge"
        },
        {
         "txt": "我有笔记本和笔",
         "ico": "📓",
         "py": "Wǒ yǒu bǐjìběn hé bǐ"
        },
        {
         "txt": "我在学校",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào"
        }
       ],
       "qpy": "Nǐ de shūbāo lǐ yǒu shénme?"
      },
      {
       "q": "办公室里有几位同事？",
       "qvi": "Trong văn phòng có mấy đồng nghiệp?",
       "scene": "🏢👥❓",
       "ans": "有三位同事",
       "opts": [
        {
         "txt": "他在家里",
         "ico": "🏠",
         "py": "Tā zài jiā li"
        },
        {
         "txt": "有三位同事",
         "ico": "👥",
         "py": "Yǒu sān wèi tóngshì"
        },
        {
         "txt": "我们在公司",
         "ico": "🏢",
         "py": "Wǒmen zài gōngsī"
        }
       ],
       "qpy": "Bàngōngshì lǐ yǒu jǐ wèi tóngshì?"
      },
      {
       "q": "你要什么？",
       "qvi": "Bạn cần gì?",
       "scene": "🧑❓📄",
       "ans": "我要一些纸",
       "opts": [
        {
         "txt": "我想去商店",
         "ico": "🏬",
         "py": "Wǒ xiǎng qù shāngdiàn"
        },
        {
         "txt": "他在打电话",
         "ico": "📞",
         "py": "Tā zài dǎ diànhuà"
        },
        {
         "txt": "我要一些纸",
         "ico": "📄",
         "py": "Wǒ yào yīxiē zhǐ"
        }
       ],
       "qpy": "Nǐ yào shénme?"
      },
      {
       "q": "你在看什么？",
       "qvi": "Bạn đang xem gì?",
       "scene": "👀📢",
       "ans": "我在看广告",
       "opts": [
        {
         "txt": "我在看广告",
         "ico": "📢",
         "py": "Wǒ zài kàn guǎnggào"
        },
        {
         "txt": "我在看电视",
         "ico": "📺",
         "py": "Wǒ zài kàn diànshì"
        },
        {
         "txt": "我在听歌",
         "ico": "🎧",
         "py": "Wǒ zài tīng gē"
        }
       ],
       "qpy": "Nǐ zài kàn shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị giấy tờ ở văn phòng",
      "steps": [
       "<b>Bước 1:</b> Tự giới thiệu và hỏi tên một đồng nghiệp mới: <i>\"请问你姓什么\"</i>, rồi nhờ họ điền biểu mẫu bằng <i>\"请写你的姓名\"</i>.",
       "<b>Bước 2:</b> Nói với đồng nghiệp bạn cần in giấy: <i>\"我想打印这份表\"</i>, rồi hỏi <i>\"你要什么\"</i> khi họ cần giúp đỡ và đếm số thư, số báo trên bàn bằng <i>\"我有一封信\"</i>, <i>\"桌子上有两份报纸\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng mô tả văn phòng của bạn với 3 câu có danh lượng từ khác nhau, ví dụ <i>\"这个楼有六层\"</i>, <i>\"前边有一条马路\"</i>."
      ]
     }
    },
    {
     "id": "2.1C",
     "name": "Bài 2.1C: Số lớn và số lượng",
     "grammar": {
      "formulas": [
       "📱 这个手机 + ⚡ 要 + 💰 三千元",
       "🏢 公司 + ⚡ 有 + 👥 两万人",
       "🇨🇳 中国 + ⚡ 有 + 👥 十四亿人"
      ],
      "tip": "千 (qiān, thiên) = nghìn, 万 (wàn, vạn) = mười nghìn, 亿 (yì, ức) = trăm triệu. Khi nói 2 ở trước 千/万/亿 dùng 两 (liǎng): 两千, 两万, 两亿. Số lớn đếm theo đơn vị 万 và 亿, không theo \"triệu\": 100 triệu = 一亿.",
      "vn_tip": "Người Việt đếm theo nghìn, triệu, tỷ nên hay nhầm. 万 là 10.000 chứ không phải 1.000, ví dụ 三万 = 30.000. 一亿 = 100 triệu. Hãy tập đổi đơn vị trước khi nói."
     },
     "chunks": [
      {
       "scene": "📱💰",
       "full": "这个手机要三千元",
       "vi": "Chiếc điện thoại này giá ba nghìn tệ",
       "parts": [
        {
         "t": "这个手机",
         "ico": "📱",
         "c": "s",
         "py": "zhè gè shǒujī",
         "hv": "giá cá thủ cơ"
        },
        {
         "t": "要",
         "ico": "💰",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "三千元",
         "ico": "💴",
         "c": "o",
         "py": "sān qiān yuán",
         "hv": "tam thiên nguyên"
        }
       ],
       "traceWord": "千",
       "py": "Zhè gè shǒujī yào sān qiān yuán",
       "traceKey": "qian",
       "traceInfo": [
        {
         "c": "千",
         "py": "qiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "🏢👥",
       "full": "公司有两万人",
       "vi": "Công ty có hai vạn người",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两万人",
         "ico": "👥",
         "c": "o",
         "py": "liǎng wàn rén",
         "hv": "lưỡng vạn nhân"
        }
       ],
       "traceWord": "万",
       "py": "Gōngsī yǒu liǎng wàn rén",
       "traceKey": "wan",
       "traceInfo": [
        {
         "c": "万",
         "py": "wàn",
         "hv": "vạn"
        }
       ]
      },
      {
       "scene": "🇨🇳👥🌏",
       "full": "中国有十四亿人",
       "vi": "Trung Quốc có mười bốn trăm triệu người",
       "parts": [
        {
         "t": "中国",
         "ico": "🇨🇳",
         "c": "s",
         "py": "Zhōngguó",
         "hv": "trung quốc"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "十四亿人",
         "ico": "👥",
         "c": "o",
         "py": "shí sì yì rén",
         "hv": "thập tứ ức nhân"
        }
       ],
       "traceWord": "亿",
       "py": "Zhōngguó yǒu shí sì yì rén",
       "traceKey": "yi",
       "traceInfo": [
        {
         "c": "亿",
         "py": "yì",
         "hv": "ức"
        }
       ]
      },
      {
       "scene": "🏢👥👥",
       "full": "我们公司有好多同事",
       "vi": "Công ty chúng tôi có rất nhiều đồng nghiệp",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã môn công ti"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "好多同事",
         "ico": "👥",
         "c": "o",
         "py": "hǎoduō tóngshì",
         "hv": "hảo đa đồng sự"
        }
       ],
       "traceWord": "好多",
       "py": "Wǒmen gōngsī yǒu hǎoduō tóngshì",
       "traceKey": "haoduo",
       "traceInfo": [
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        }
       ]
      },
      {
       "scene": "👥👍💼",
       "full": "大部分同事喜欢这个工作",
       "vi": "Phần lớn đồng nghiệp thích công việc này",
       "parts": [
        {
         "t": "大部分同事",
         "ico": "👥",
         "c": "s",
         "py": "dàbùfen tóngshì",
         "hv": "đại bộ phận đồng sự"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "这个工作",
         "ico": "💼",
         "c": "o",
         "py": "zhè gè gōngzuò",
         "hv": "giá cá công tác"
        }
       ],
       "traceWord": "大部分",
       "py": "Dàbùfen tóngshì xǐhuan zhè gè gōngzuò",
       "traceKey": "dabufen",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "部",
         "py": "bù",
         "hv": "bộ"
        },
        {
         "c": "分",
         "py": "fen",
         "hv": "phận"
        }
       ]
      },
      {
       "scene": "👥😴🛋️",
       "full": "大多数人都喜欢休息",
       "vi": "Đa số mọi người đều thích nghỉ ngơi",
       "parts": [
        {
         "t": "大多数人",
         "ico": "👥",
         "c": "s",
         "py": "dàduōshù rén",
         "hv": "đại đa số nhân"
        },
        {
         "t": "都喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "dōu xǐhuan",
         "hv": "đô hỉ hoan"
        },
        {
         "t": "休息",
         "ico": "😴",
         "c": "o",
         "py": "xiūxi",
         "hv": "hưu tức"
        }
       ],
       "traceWord": "大多数",
       "py": "Dàduōshù rén dōu xǐhuan xiūxi",
       "traceKey": "daduoshu",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        },
        {
         "c": "数",
         "py": "shù",
         "hv": "số"
        }
       ]
      },
      {
       "scene": "🧑👆🔢",
       "full": "我来数一下儿",
       "vi": "Để tôi đếm một chút",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "来数",
         "ico": "👆",
         "c": "v",
         "py": "lái shǔ",
         "hv": "lai sổ"
        },
        {
         "t": "一下儿",
         "ico": "⏱️",
         "c": "o",
         "py": "yīxiàr",
         "hv": "nhất hạ nhi"
        }
       ],
       "traceWord": "数",
       "py": "Wǒ lái shǔ yīxiàr",
       "traceKey": "shu",
       "traceInfo": [
        {
         "c": "数",
         "py": "shǔ",
         "hv": "sổ"
        }
       ]
      },
      {
       "scene": "🔢📊",
       "full": "这个数字是八千",
       "vi": "Con số này là tám nghìn",
       "parts": [
        {
         "t": "这个数字",
         "ico": "🔢",
         "c": "s",
         "py": "zhè gè shùzì",
         "hv": "giá cá số tự"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "八千",
         "ico": "📊",
         "c": "o",
         "py": "bā qiān",
         "hv": "bát thiên"
        }
       ],
       "traceWord": "数字",
       "py": "Zhè gè shùzì shì bā qiān",
       "traceKey": "shuzi",
       "traceInfo": [
        {
         "c": "数",
         "py": "shù",
         "hv": "số"
        },
        {
         "c": "字",
         "py": "zì",
         "hv": "tự"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "公司有多少人？",
       "qvi": "Công ty có bao nhiêu người?",
       "scene": "🏢👥❓",
       "ans": "公司有不少人",
       "opts": [
        {
         "txt": "这部分很重要",
         "ico": "📄",
         "py": "Zhè bùfen hěn zhòngyào"
        },
        {
         "txt": "公司有不少人",
         "ico": "👥",
         "py": "Gōngsī yǒu bù shǎo rén"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Gōngsī yǒu duōshao rén?"
      },
      {
       "q": "大家喜欢这个工作吗？",
       "qvi": "Mọi người có thích công việc này không?",
       "scene": "👥💼❓",
       "ans": "多数人喜欢",
       "opts": [
        {
         "txt": "少数人在学校",
         "ico": "🏫",
         "py": "Shǎoshù rén zài xuéxiào"
        },
        {
         "txt": "许多人去北京",
         "ico": "🚄",
         "py": "Xǔduō rén qù Běijīng"
        },
        {
         "txt": "多数人喜欢",
         "ico": "👍",
         "py": "Duōshù rén xǐhuan"
        }
       ],
       "qpy": "Dàjiā xǐhuan zhè gè gōngzuò ma?"
      },
      {
       "q": "公司买了什么？",
       "qvi": "Công ty đã mua gì?",
       "scene": "🏢📚",
       "ans": "公司买了大量的书",
       "opts": [
        {
         "txt": "公司买了大量的书",
         "ico": "📚",
         "py": "Gōngsī mǎi le dàliàng de shū"
        },
        {
         "txt": "他们明天去北京",
         "ico": "🚄",
         "py": "Tāmen míngtiān qù Běijīng"
        },
        {
         "txt": "我在家休息",
         "ico": "🏠",
         "py": "Wǒ zàijiā xiūxi"
        }
       ],
       "qpy": "Gōngsī mǎi le shénme?"
      },
      {
       "q": "你的书都在家吗？",
       "qvi": "Sách của bạn đều ở nhà à?",
       "scene": "📚🏠❓",
       "ans": "一部分在家里",
       "opts": [
        {
         "txt": "我在学校学习",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào xuéxí"
        },
        {
         "txt": "一部分在家里",
         "ico": "🏠",
         "py": "Yī bùfen zài jiā li"
        },
        {
         "txt": "他们是学生",
         "ico": "🧑‍🎓",
         "py": "Tāmen shì xuéshēng"
        }
       ],
       "qpy": "Nǐ de shū dōu zàijiā ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo số liệu cho quản lý",
      "steps": [
       "<b>Bước 1:</b> Chọn 3 con số thật của công ty hoặc đời sống (giá điện thoại, số nhân viên, dân số). Đổi từng số sang đơn vị 千, 万, 亿 và viết ra giấy.",
       "<b>Bước 2:</b> Nói thành tiếng như báo cáo với quản lý: <i>\"公司有两万人\"</i>, <i>\"这个手机要三千元\"</i>, <i>\"中国有十四亿人\"</i> (thay bằng số của bạn).",
       "<b>Bước 3:</b> Nhận xét tỷ lệ bằng <i>\"大部分同事喜欢这个工作\"</i> hoặc <i>\"大多数人都喜欢休息\"</i>, rồi đọc to <i>\"这个数字是八千\"</i> để chốt số liệu."
      ]
     }
    }
   ]
  },
  "2.2": {
   "lessons": [
    {
     "id": "2.2A",
     "name": "Bài 2.2A: Họp bàn, hẹn lịch và hỏi nguyên nhân",
     "grammar": {
      "formulas": [
       "⏱️ 开会 + 要 + 多久？",
       "❓ 你 + 为什么 + 没来？",
       "👍 这家饭店 + 怎么样？"
      ],
      "tip": "Đại từ nghi vấn đứng đúng vị trí của phần được hỏi: 多久 (duōjiǔ) hỏi khoảng thời gian kéo dài bao lâu, 为什么 (wèi shénme) hỏi lý do, 怎么样 (zěnmeyàng) hỏi tình hình, chất lượng, 怎样 (zěnyàng) hỏi cách làm; 怎么办 (zěnme bàn) hỏi \"phải làm sao\". Không cần thêm 吗 vào câu đã có đại từ nghi vấn.",
      "vn_tip": "Người Việt hay đặt \"tại sao\" ở cuối câu hoặc thêm 吗 thừa, ví dụ nói sai 你没来为什么吗. Đúng là 你为什么没来？ (为什么 đứng trước động từ). Hỏi thời gian kéo dài dùng 多久 sau động từ: 开会要多久？"
     },
     "chunks": [
      {
       "scene": "🧑❓📅",
       "full": "你有空儿吗",
       "vi": "Bạn có rảnh không",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "有空儿",
         "ico": "🕐",
         "c": "v",
         "py": "yǒukòngr",
         "hv": "hữu khống nhi"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "有空儿",
       "py": "Nǐ yǒukòngr ma",
       "traceKey": "youkongr",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "空",
         "py": "kòng",
         "hv": "khống"
        },
        {
         "c": "儿",
         "py": "er",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "💼⏱️❓",
       "full": "开会要多久",
       "vi": "Họp cần bao lâu",
       "parts": [
        {
         "t": "开会",
         "ico": "💼",
         "c": "s",
         "py": "kāihuì",
         "hv": "khai hội"
        },
        {
         "t": "要",
         "ico": "⚡",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "多久",
         "ico": "⏱️",
         "c": "o",
         "py": "duōjiǔ",
         "hv": "đa cửu"
        }
       ],
       "traceWord": "多久",
       "py": "Kāihuì yào duōjiǔ",
       "traceKey": "duojiu",
       "traceInfo": [
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        },
        {
         "c": "久",
         "py": "jiǔ",
         "hv": "cửu"
        }
       ]
      },
      {
       "scene": "🧑🚪❓",
       "full": "他为什么没来",
       "vi": "Tại sao anh ấy không đến",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "为什么",
         "ico": "❓",
         "c": "o",
         "py": "wèi shénme",
         "hv": "vị thập ma"
        },
        {
         "t": "没来",
         "ico": "🚫",
         "c": "v",
         "py": "méi lái",
         "hv": "một lai"
        }
       ],
       "traceWord": "为什么",
       "py": "Tā wèi shénme méi lái",
       "traceKey": "weishenme",
       "traceInfo": [
        {
         "c": "为",
         "py": "wèi",
         "hv": "vị"
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
       "scene": "🧑🤝💬",
       "full": "我想和你商量一下",
       "vi": "Tôi muốn bàn bạc với bạn một chút",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "和你商量一下",
         "ico": "🤝",
         "c": "o",
         "py": "hé nǐ shāngliang yī xià",
         "hv": "hòa nễ thương lượng nhất hạ"
        }
       ],
       "traceWord": "商量",
       "py": "Wǒ xiǎng hé nǐ shāngliang yī xià",
       "traceKey": "shangliang",
       "traceInfo": [
        {
         "c": "商",
         "py": "shāng",
         "hv": "thương"
        },
        {
         "c": "量",
         "py": "liang",
         "hv": "lượng"
        }
       ]
      },
      {
       "scene": "👥💬📋",
       "full": "大家讨论这个问题",
       "vi": "Mọi người thảo luận vấn đề này",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "讨论",
         "ico": "💬",
         "c": "v",
         "py": "tǎolùn",
         "hv": "thảo luận"
        },
        {
         "t": "这个问题",
         "ico": "❓",
         "c": "o",
         "py": "zhè gè wèntí",
         "hv": "giá cá vấn đề"
        }
       ],
       "traceWord": "讨论",
       "py": "Dàjiā tǎolùn zhè gè wèntí",
       "traceKey": "taolun",
       "traceInfo": [
        {
         "c": "讨",
         "py": "tǎo",
         "hv": "thảo"
        },
        {
         "c": "论",
         "py": "lùn",
         "hv": "luận"
        }
       ]
      },
      {
       "scene": "🧑📢🔍",
       "full": "请你说明原因",
       "vi": "Xin bạn giải thích nguyên nhân",
       "parts": [
        {
         "t": "请你",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nễ"
        },
        {
         "t": "说明",
         "ico": "📢",
         "c": "v",
         "py": "shuōmíng",
         "hv": "thuyết minh"
        },
        {
         "t": "原因",
         "ico": "🔍",
         "c": "o",
         "py": "yuányīn",
         "hv": "nguyên nhân"
        }
       ],
       "traceWord": "说明",
       "py": "Qǐng nǐ shuōmíng yuányīn",
       "traceKey": "shuoming",
       "traceInfo": [
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        }
       ]
      },
      {
       "scene": "🧑✋🧩",
       "full": "我想提一个难题",
       "vi": "Tôi muốn nêu một vấn đề khó",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "提一个难题",
         "ico": "🧩",
         "c": "o",
         "py": "tí yī gè nántí",
         "hv": "đề nhất cá nan đề"
        }
       ],
       "traceWord": "难题",
       "py": "Wǒ xiǎng tí yī gè nántí",
       "traceKey": "nanti",
       "traceInfo": [
        {
         "c": "难",
         "py": "nán",
         "hv": "nan"
        },
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        }
       ]
      },
      {
       "scene": "🧑👍📅",
       "full": "他答应明天来",
       "vi": "Anh ấy nhận lời ngày mai sẽ đến",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "答应",
         "ico": "👍",
         "c": "v",
         "py": "dāying",
         "hv": "đáp ứng"
        },
        {
         "t": "明天来",
         "ico": "📅",
         "c": "o",
         "py": "míngtiān lái",
         "hv": "minh thiên lai"
        }
       ],
       "traceWord": "答应",
       "py": "Tā dāying míngtiān lái",
       "traceKey": "daying",
       "traceInfo": [
        {
         "c": "答",
         "py": "dā",
         "hv": "đáp"
        },
        {
         "c": "应",
         "py": "ying",
         "hv": "ứng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得这家饭店怎么样？",
       "qvi": "Bạn thấy nhà hàng này thế nào?",
       "scene": "🍜🏪👍",
       "ans": "这家饭店很好吃",
       "opts": [
        {
         "txt": "这家饭店很好吃",
         "ico": "🍜",
         "py": "Zhè jiā fàndiàn hěn hǎochī"
        },
        {
         "txt": "我是中国人",
         "ico": "🇨🇳",
         "py": "Wǒ shì Zhōngguó rén"
        },
        {
         "txt": "他在北京工作",
         "ico": "🏢",
         "py": "Tā zài Běijīng gōngzuò"
        }
       ],
       "qpy": "Nǐ juéde zhè jiā fàndiàn zěnmeyàng?"
      },
      {
       "q": "这个问题怎么办？",
       "qvi": "Vấn đề này phải làm sao?",
       "scene": "❓🤔",
       "ans": "我们明天再讨论",
       "opts": [
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        },
        {
         "txt": "我们明天再讨论",
         "ico": "💬",
         "py": "Wǒmen míngtiān zài tǎolùn"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Zhè gè wèntí zěnme bàn?"
      },
      {
       "q": "你想怎样做这件事？",
       "qvi": "Bạn muốn làm việc này thế nào?",
       "scene": "🧑💭📝",
       "ans": "我想先提出问题",
       "opts": [
        {
         "txt": "我想吃面包",
         "ico": "🍞",
         "py": "Wǒ xiǎng chī miànbāo"
        },
        {
         "txt": "我想去机场",
         "ico": "✈️",
         "py": "Wǒ xiǎng qù jīchǎng"
        },
        {
         "txt": "我想先提出问题",
         "ico": "✋",
         "py": "Wǒ xiǎng xiān tíchū wèntí"
        }
       ],
       "qpy": "Nǐ xiǎng zěnyàng zuò zhè jiàn shì?"
      },
      {
       "q": "老师提到了什么样的书？",
       "qvi": "Thầy giáo đã nhắc đến loại sách thế nào?",
       "scene": "👨‍🏫📚",
       "ans": "他提到一本中文书",
       "opts": [
        {
         "txt": "他买了三个面包",
         "ico": "🍞",
         "py": "Tā mǎi le sān gè miànbāo"
        },
        {
         "txt": "我们在学校",
         "ico": "🏫",
         "py": "Wǒmen zài xuéxiào"
        },
        {
         "txt": "他提到一本中文书",
         "ico": "📚",
         "py": "Tā tídào yī běn Zhōngwén shū"
        }
       ],
       "qpy": "Lǎoshī tídào le shénmeyàng de shū?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn đồng nghiệp bàn một vấn đề công việc",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc gọi cho một đồng nghiệp, hỏi xem họ có thời gian không: <i>\"你有空儿吗？\"</i> rồi hỏi cuộc họp kéo dài bao lâu: <i>\"开会要多久？\"</i>",
       "<b>Bước 2:</b> Nói với đồng nghiệp bạn muốn bàn một việc: <i>\"我想和你商量一下。\"</i> rồi nêu vấn đề khó của mình: <i>\"我想提一个难题。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng hỏi lý do và cách xử lý: <i>\"请你说明原因。\"</i> và <i>\"这个问题怎么办？\"</i> Sau đó chốt lịch hẹn cho ngày mai."
      ]
     }
    },
    {
     "id": "2.2B",
     "name": "Bài 2.2B: Chào hỏi, chúc tụng, tặng quà và tiễn khách",
     "grammar": {
      "formulas": [
       "🎁 这个礼物 + 我 + 送给 + 你",
       "📞 老朋友 + 给我 + 打电话",
       "🤝 我 + 感谢 + 你们的帮忙"
      ],
      "tip": "Giới từ 给 (gěi) dẫn ra đối tượng nhận hành động, đứng trước động từ: 给 + người + động từ, ví dụ 给我打电话 (gọi điện cho tôi). Với động từ 送 (sòng) thì 给 đứng sau động từ: 送给你 (tặng cho bạn), người nhận đi liền sau 送给.",
      "vn_tip": "Người Việt hay bê nguyên trật tự \"gọi điện cho tôi\" sang tiếng Trung hoặc bỏ 给 đi. Với hành động thông thường, hãy đặt 给 + người trước động từ: 给我打电话. Với 送 thì dùng 送给你. Lời tiễn \"chúc thượng lộ bình an\" nói 一路平安 hoặc 一路顺风."
     },
     "chunks": [
      {
       "scene": "📞🧑📍",
       "full": "喂你在哪儿",
       "vi": "A lô, bạn đang ở đâu",
       "parts": [
        {
         "t": "喂",
         "ico": "📞",
         "c": "v",
         "py": "wèi",
         "hv": "ỏi"
        },
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "在哪儿",
         "ico": "📍",
         "c": "o",
         "py": "zài nǎr",
         "hv": "tại na nhi"
        }
       ],
       "traceWord": "喂",
       "py": "Wèi nǐ zài nǎr",
       "traceKey": "wei",
       "traceInfo": [
        {
         "c": "喂",
         "py": "wèi",
         "hv": "ỏi"
        }
       ]
      },
      {
       "scene": "🧑😊🤝",
       "full": "我很高兴见到你",
       "vi": "Tôi rất vui được gặp bạn",
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
         "ico": "😊",
         "c": "v",
         "py": "hěn gāoxìng",
         "hv": "ngận cao hứng"
        },
        {
         "t": "见到你",
         "ico": "🤝",
         "c": "o",
         "py": "jiàndào nǐ",
         "hv": "kiến đáo nễ"
        }
       ],
       "traceWord": "见到",
       "py": "Wǒ hěn gāoxìng jiàndào nǐ",
       "traceKey": "jiandao",
       "traceInfo": [
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "👥🙌🇨🇳",
       "full": "我们欢迎你来中国",
       "vi": "Chúng tôi chào đón bạn đến Trung Quốc",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "欢迎",
         "ico": "🙌",
         "c": "v",
         "py": "huānyíng",
         "hv": "hoan nghênh"
        },
        {
         "t": "你来中国",
         "ico": "🇨🇳",
         "c": "o",
         "py": "nǐ lái Zhōngguó",
         "hv": "nễ lai trung quốc"
        }
       ],
       "traceWord": "欢迎",
       "py": "Wǒmen huānyíng nǐ lái Zhōngguó",
       "traceKey": "huanying",
       "traceInfo": [
        {
         "c": "欢",
         "py": "huān",
         "hv": "hoan"
        },
        {
         "c": "迎",
         "py": "yíng",
         "hv": "nghênh"
        }
       ]
      },
      {
       "scene": "🧑🙏🤝",
       "full": "我感谢你们的帮忙",
       "vi": "Tôi cảm ơn sự giúp đỡ của các bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "感谢",
         "ico": "🙏",
         "c": "v",
         "py": "gǎnxiè",
         "hv": "cảm tạ"
        },
        {
         "t": "你们的帮忙",
         "ico": "🤝",
         "c": "o",
         "py": "nǐmen de bāngmáng",
         "hv": "nễ môn đích bang mang"
        }
       ],
       "traceWord": "感谢",
       "py": "Wǒ gǎnxiè nǐmen de bāngmáng",
       "traceKey": "ganxie",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "谢",
         "py": "xiè",
         "hv": "tạ"
        }
       ]
      },
      {
       "scene": "🎁🧑➡️🧑",
       "full": "这个礼物我送给你",
       "vi": "Món quà này tôi tặng cho bạn",
       "parts": [
        {
         "t": "这个礼物",
         "ico": "🎁",
         "c": "o",
         "py": "zhè gè lǐwù",
         "hv": "giá cá lễ vật"
        },
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "送给你",
         "ico": "➡️",
         "c": "v",
         "py": "sòng gěi nǐ",
         "hv": "tống cấp nễ"
        }
       ],
       "traceWord": "礼物",
       "py": "Zhè gè lǐwù wǒ sòng gěi nǐ",
       "traceKey": "liwu",
       "traceInfo": [
        {
         "c": "礼",
         "py": "lǐ",
         "hv": "lễ"
        },
        {
         "c": "物",
         "py": "wù",
         "hv": "vật"
        }
       ]
      },
      {
       "scene": "📅🧑🍽️",
       "full": "明天我请客",
       "vi": "Ngày mai tôi mời",
       "parts": [
        {
         "t": "明天",
         "ico": "📅",
         "c": "o",
         "py": "míngtiān",
         "hv": "minh thiên"
        },
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "请客",
         "ico": "🍽️",
         "c": "v",
         "py": "qǐngkè",
         "hv": "thỉnh khách"
        }
       ],
       "traceWord": "请客",
       "py": "Míngtiān wǒ qǐngkè",
       "traceKey": "qingke",
       "traceInfo": [
        {
         "c": "请",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "🙇🧑⏰",
       "full": "不好意思我来晚了",
       "vi": "Xin lỗi, tôi đến muộn rồi",
       "parts": [
        {
         "t": "不好意思",
         "ico": "🙇",
         "c": "o",
         "py": "bù hǎoyìsi",
         "hv": "bất hảo ý tư"
        },
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "来晚了",
         "ico": "⏰",
         "c": "v",
         "py": "lái wǎn le",
         "hv": "lai vãn liễu"
        }
       ],
       "traceWord": "不好意思",
       "py": "Bù hǎoyìsi wǒ lái wǎn le",
       "traceKey": "buhaoyisi",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        },
        {
         "c": "思",
         "py": "si",
         "hv": "tư"
        }
       ]
      },
      {
       "scene": "👴📞🧑",
       "full": "老朋友给我打电话",
       "vi": "Người bạn cũ gọi điện cho tôi",
       "parts": [
        {
         "t": "老朋友",
         "ico": "👴",
         "c": "s",
         "py": "lǎo péngyou",
         "hv": "lão bằng hữu"
        },
        {
         "t": "给我",
         "ico": "🧑",
         "c": "o",
         "py": "gěi wǒ",
         "hv": "cấp ngã"
        },
        {
         "t": "打电话",
         "ico": "📞",
         "c": "v",
         "py": "dǎ diànhuà",
         "hv": "đả điện thoại"
        }
       ],
       "traceWord": "老朋友",
       "py": "Lǎo péngyou gěi wǒ dǎ diànhuà",
       "traceKey": "laopengyou",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
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
      }
     ],
     "qaList": [
      {
       "q": "朋友坐飞机去北京，你说什么？",
       "qvi": "Bạn đi máy bay đến Bắc Kinh, bạn nói gì?",
       "scene": "✈️🧑👋",
       "ans": "一路顺风",
       "opts": [
        {
         "txt": "晚安",
         "ico": "🌙",
         "py": "Wǎn'ān"
        },
        {
         "txt": "一路顺风",
         "ico": "✈️",
         "py": "Yīlù-shùnfēng"
        },
        {
         "txt": "干杯",
         "ico": "🥂",
         "py": "Gānbēi"
        }
       ],
       "qpy": "Péngyou zuò fēijī qù Běijīng nǐ shuō shénme?"
      },
      {
       "q": "朋友要坐火车回家，你说什么？",
       "qvi": "Bạn đi tàu về nhà, bạn nói gì?",
       "scene": "🚆🏠👋",
       "ans": "一路平安",
       "opts": [
        {
         "txt": "欢迎你来",
         "ico": "🙌",
         "py": "Huānyíng nǐ lái"
        },
        {
         "txt": "晚安",
         "ico": "🌙",
         "py": "Wǎn'ān"
        },
        {
         "txt": "一路平安",
         "ico": "🚆",
         "py": "Yīlù-píng'ān"
        }
       ],
       "qpy": "Péngyou yào zuò huǒchē huí jiā nǐ shuō shénme?"
      },
      {
       "q": "我能用一下你的手机吗？",
       "qvi": "Tôi dùng điện thoại của bạn một chút được không?",
       "scene": "📱🧑❓",
       "ans": "不行我正在用",
       "opts": [
        {
         "txt": "他是我老朋友",
         "ico": "👴",
         "py": "Tā shì wǒ lǎo péngyou"
        },
        {
         "txt": "不行我正在用",
         "ico": "📱",
         "py": "Bùxíng wǒ zhèngzài yòng"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Wǒ néng yòng yī xià nǐ de shǒujī ma?"
      },
      {
       "q": "你喜欢这个礼物吗？",
       "qvi": "Bạn có thích món quà này không?",
       "scene": "🎁😊",
       "ans": "我非常喜欢啊",
       "opts": [
        {
         "txt": "我不要喝水",
         "ico": "🚫",
         "py": "Wǒ bùyào hē shuǐ"
        },
        {
         "txt": "他在机场",
         "ico": "✈️",
         "py": "Tā zài jīchǎng"
        },
        {
         "txt": "我非常喜欢啊",
         "ico": "😊",
         "py": "Wǒ fēicháng xǐhuan a"
        }
       ],
       "qpy": "Nǐ xǐhuan zhè gè lǐwù ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đón khách và tặng quà đối tác",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn đón một đối tác ở sân bay. Gọi điện hỏi vị trí: <i>\"喂你在哪儿？\"</i> rồi chào: <i>\"我很高兴见到你。\"</i> và <i>\"我们欢迎你来中国。\"</i>",
       "<b>Bước 2:</b> Tặng một món quà nhỏ và cảm ơn: <i>\"这个礼物我送给你。\"</i> Mời bữa tối: <i>\"明天我请客。\"</i> Nếu đến muộn thì xin lỗi: <i>\"不好意思我来晚了。\"</i>",
       "<b>Bước 3:</b> Khi tiễn khách, nói lời chúc thành tiếng: <i>\"一路顺风。\"</i> hoặc <i>\"一路平安。\"</i> Dặn họ gọi điện lại: <i>\"老朋友给我打电话。\"</i>"
      ]
     }
    },
    {
     "id": "2.2C",
     "name": "Bài 2.2C: Nêu ý kiến, quan điểm và đưa ví dụ",
     "grammar": {
      "formulas": [
       "💭 你忙 + 的话 + 我明天来",
       "🗺️ 北京、上海 + 等 + 地方",
       "🧑 我 + 认为 + 他说的对"
      ],
      "tip": "Trợ từ 的话 (dehuà) đặt cuối vế điều kiện, nghĩa \"nếu như\": 你忙的话, 我明天来. Trợ từ 等 (děng) đặt sau một chuỗi liệt kê để nói \"vân vân\", ví dụ 北京上海等地方; không dùng thêm \"và\" ở cuối chuỗi liệt kê.",
      "vn_tip": "Người Việt hay đặt \"nếu\" ở đầu vế và quên 的话 ở cuối, hoặc vừa nói \"vân vân\" vừa kết thúc bằng 等等 thừa. Đúng là đặt 的话 ở cuối vế điều kiện (你忙的话) và chỉ cần một 等 sau các ví dụ."
     },
     "chunks": [
      {
       "scene": "🧑💭✅",
       "full": "我认为他说的对",
       "vi": "Tôi cho rằng anh ấy nói đúng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "认为",
         "ico": "💭",
         "c": "v",
         "py": "rènwéi",
         "hv": "nhận vi"
        },
        {
         "t": "他说的对",
         "ico": "✅",
         "c": "o",
         "py": "tā shuō de duì",
         "hv": "tha thuyết đích đối"
        }
       ],
       "traceWord": "认为",
       "py": "Wǒ rènwéi tā shuō de duì",
       "traceKey": "renwei",
       "traceInfo": [
        {
         "c": "认",
         "py": "rèn",
         "hv": "nhận"
        },
        {
         "c": "为",
         "py": "wéi",
         "hv": "vi"
        }
       ]
      },
      {
       "scene": "🧑💡❓",
       "full": "你有什么想法",
       "vi": "Bạn có ý tưởng gì",
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
         "t": "什么想法",
         "ico": "💡",
         "c": "o",
         "py": "shénme xiǎngfǎ",
         "hv": "thập ma tưởng pháp"
        }
       ],
       "traceWord": "想法",
       "py": "Nǐ yǒu shénme xiǎngfǎ",
       "traceKey": "xiangfa",
       "traceInfo": [
        {
         "c": "想",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "🧑👀💭",
       "full": "这是我的看法",
       "vi": "Đây là cách nhìn của tôi",
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
         "t": "我的看法",
         "ico": "👀",
         "c": "o",
         "py": "wǒ de kànfǎ",
         "hv": "ngã đích khán pháp"
        }
       ],
       "traceWord": "看法",
       "py": "Zhè shì wǒ de kànfǎ",
       "traceKey": "kanfa",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "🧑💬⭐",
       "full": "你的意见很重要",
       "vi": "Ý kiến của bạn rất quan trọng",
       "parts": [
        {
         "t": "你的意见",
         "ico": "💬",
         "c": "s",
         "py": "nǐ de yìjiàn",
         "hv": "nễ đích ý kiến"
        },
        {
         "t": "很",
         "ico": "⬆️",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "重要",
         "ico": "⭐",
         "c": "o",
         "py": "zhòngyào",
         "hv": "trọng yếu"
        }
       ],
       "traceWord": "意见",
       "py": "Nǐ de yìjiàn hěn zhòngyào",
       "traceKey": "yijian",
       "traceInfo": [
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        },
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      },
      {
       "scene": "🧑⏰📅",
       "full": "你忙的话我明天来",
       "vi": "Nếu bạn bận thì mai tôi đến",
       "parts": [
        {
         "t": "你忙的话",
         "ico": "⏰",
         "c": "o",
         "py": "nǐ máng dehuà",
         "hv": "nễ mang đích thoại"
        },
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "明天来",
         "ico": "📅",
         "c": "v",
         "py": "míngtiān lái",
         "hv": "minh thiên lai"
        }
       ],
       "traceWord": "的话",
       "py": "Nǐ máng dehuà wǒ míngtiān lái",
       "traceKey": "dehua",
       "traceInfo": [
        {
         "c": "的",
         "py": "de",
         "hv": "đích"
        },
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        }
       ]
      },
      {
       "scene": "🧑🗺️🏙️",
       "full": "我去过北京上海等地方",
       "vi": "Tôi từng đến những nơi như Bắc Kinh, Thượng Hải",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "去过",
         "ico": "✈️",
         "c": "v",
         "py": "qù guò",
         "hv": "khứ quá"
        },
        {
         "t": "北京上海等地方",
         "ico": "🏙️",
         "c": "o",
         "py": "Běijīng Shànghǎi děng dìfang",
         "hv": "bắc kinh thượng hải đẳng địa phương"
        }
       ],
       "traceWord": "等",
       "py": "Wǒ qù guò Běijīng Shànghǎi děng dìfang",
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
       "scene": "👥👍🧑",
       "full": "同事比如小王很认真",
       "vi": "Đồng nghiệp, ví dụ như Tiểu Vương, rất chăm chỉ",
       "parts": [
        {
         "t": "同事",
         "ico": "👥",
         "c": "s",
         "py": "tóngshì",
         "hv": "đồng sự"
        },
        {
         "t": "比如",
         "ico": "📌",
         "c": "v",
         "py": "bǐrú",
         "hv": "tỷ như"
        },
        {
         "t": "小王很认真",
         "ico": "👍",
         "c": "o",
         "py": "Xiǎowáng hěn rènzhēn",
         "hv": "tiểu vương ngận nhận chân"
        }
       ],
       "traceWord": "比如",
       "py": "Tóngshì bǐrú Xiǎowáng hěn rènzhēn",
       "traceKey": "biru",
       "traceInfo": [
        {
         "c": "比",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "c": "如",
         "py": "rú",
         "hv": "như"
        }
       ]
      },
      {
       "scene": "🧑💬✅",
       "full": "他的观点有道理",
       "vi": "Quan điểm của anh ấy có lý",
       "parts": [
        {
         "t": "他的观点",
         "ico": "💬",
         "c": "s",
         "py": "tā de guāndiǎn",
         "hv": "tha đích quan điểm"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "道理",
         "ico": "✅",
         "c": "o",
         "py": "dàolǐ",
         "hv": "đạo lý"
        }
       ],
       "traceWord": "道理",
       "py": "Tā de guāndiǎn yǒu dàolǐ",
       "traceKey": "daoli",
       "traceInfo": [
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你能说一个例子吗？",
       "qvi": "Bạn có thể nêu một ví dụ không?",
       "scene": "🧑📌❓",
       "ans": "比如说我的同事",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "比如说我的同事",
         "ico": "👥",
         "py": "Bǐrú shuō wǒ de tóngshì"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👨",
         "py": "Tā shì wǒ gēge"
        }
       ],
       "qpy": "Nǐ néng shuō yī gè lìzi ma?"
      },
      {
       "q": "你去过哪些地方？",
       "qvi": "Bạn đã đi những nơi nào?",
       "scene": "🧑🗺️❓",
       "ans": "例如北京和上海",
       "opts": [
        {
         "txt": "我很喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ hěn xǐhuan chī miànbāo"
        },
        {
         "txt": "他是我同学",
         "ico": "🎓",
         "py": "Tā shì wǒ tóngxué"
        },
        {
         "txt": "例如北京和上海",
         "ico": "🏙️",
         "py": "Lìrú Běijīng hé Shànghǎi"
        }
       ],
       "qpy": "Nǐ qù guò nǎxiē dìfang?"
      },
      {
       "q": "这个字是什么意思？",
       "qvi": "Chữ này nghĩa là gì?",
       "scene": "字❓💧",
       "ans": "这个字表示水",
       "opts": [
        {
         "txt": "这个字表示水",
         "ico": "💧",
         "py": "Zhè gè zì biǎoshì shuǐ"
        },
        {
         "txt": "我今天很忙",
         "ico": "⏰",
         "py": "Wǒ jīntiān hěn máng"
        },
        {
         "txt": "他在图书馆",
         "ico": "📚",
         "py": "Tā zài túshūguǎn"
        }
       ],
       "qpy": "Zhè gè zì shì shénme yìsi?"
      },
      {
       "q": "经理正在讲话，其他人在做什么？",
       "qvi": "Giám đốc đang phát biểu, những người khác đang làm gì?",
       "scene": "👔🎤👥",
       "ans": "其他人在认真听",
       "opts": [
        {
         "txt": "他们在打球",
         "ico": "⚽",
         "py": "Tāmen zài dǎ qiú"
        },
        {
         "txt": "其他人在认真听",
         "ico": "👂",
         "py": "Qítā rén zài rènzhēn tīng"
        },
        {
         "txt": "他们在唱歌",
         "ico": "🎤",
         "py": "Tāmen zài chànggē"
        }
       ],
       "qpy": "Jīnglǐ zhèngzài jiǎnghuà qítā rén zài zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phát biểu ý kiến trong cuộc họp",
      "steps": [
       "<b>Bước 1:</b> Trong cuộc họp, hỏi đồng nghiệp: <i>\"你有什么想法？\"</i> rồi nêu quan điểm của mình: <i>\"这是我的看法。\"</i> hoặc <i>\"我认为他说的对。\"</i>",
       "<b>Bước 2:</b> Đưa ví dụ cho ý kiến: <i>\"同事比如小王很认真。\"</i> và nói về nơi bạn từng đến: <i>\"我去过北京上海等地方。\"</i> Dùng 的话 để đề xuất: <i>\"你忙的话我明天来。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng để khen ý kiến người khác: <i>\"你的意见很重要。\"</i> và <i>\"他的观点有道理。\"</i> Kết thúc bằng việc hẹn lịch họp tiếp theo."
      ]
     }
    }
   ]
  },
  "2.3": {
   "lessons": [
    {
     "id": "2.3A",
     "name": "Bài 2.3A: Hỏi giá, mặc cả và đổi hàng",
     "grammar": {
      "formulas": [
       "🏷️ 这件大衣 + 📈 挺 + 👍 好看",
       "🏷️ 这里的东西 + 📈 特别 + 💰 便宜",
       "🛍️ 顾客 + 💭 觉得 + 😕 有点儿贵"
      ],
      "tip": "Phó từ mức độ đứng TRƯỚC tính từ: 挺 (tǐng, đĩnh), 特别 (tèbié, đặc biệt), 十分 (shífēn, thập phân), 好 (hǎo) + tính từ = rất. 有点儿 (yǒudiǎnr) + tính từ thường mang ý chê hơi quá (hơi đắt). 更 (gèng) = hơn, càng.",
      "vn_tip": "Người Việt hay nói 我很贵 hoặc quên phó từ khiến câu cụt. Đừng viết 有点儿 + tính từ tích cực (như 有点儿好看) để khen; muốn khen hãy dùng 挺/很/特别. Cũng không đặt phó từ sau tính từ như tiếng Việt (đắt lắm): phải là 特别贵."
     },
     "chunks": [
      {
       "scene": "☀️🥵🌡️",
       "full": "今天天气好热",
       "vi": "Hôm nay thời tiết nóng quá",
       "parts": [
        {
         "t": "今天天气",
         "ico": "☀️",
         "c": "s",
         "py": "jīntiān tiānqì",
         "hv": "kim thiên thiên khí"
        },
        {
         "t": "好",
         "ico": "📈",
         "c": "v",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "t": "热",
         "ico": "🥵",
         "c": "o",
         "py": "rè",
         "hv": "nhiệt"
        }
       ],
       "traceWord": "天气",
       "py": "Jīntiān tiānqì hǎo rè",
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
       "scene": "🧥👍😊",
       "full": "这件大衣挺好看",
       "vi": "Chiếc áo khoác này khá đẹp",
       "parts": [
        {
         "t": "这件大衣",
         "ico": "🧥",
         "c": "s",
         "py": "zhè jiàn dàyī",
         "hv": "giá kiện đại y"
        },
        {
         "t": "挺",
         "ico": "📈",
         "c": "v",
         "py": "tǐng",
         "hv": "đĩnh"
        },
        {
         "t": "好看",
         "ico": "😍",
         "c": "o",
         "py": "hǎokàn",
         "hv": "hảo khán"
        }
       ],
       "traceWord": "大衣",
       "py": "Zhè jiàn dàyī tǐng hǎokàn",
       "traceKey": "dayi",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "衣",
         "py": "yī",
         "hv": "y"
        }
       ]
      },
      {
       "scene": "🏪🛒💰",
       "full": "这里的东西特别便宜",
       "vi": "Đồ ở đây đặc biệt rẻ",
       "parts": [
        {
         "t": "这里的东西",
         "ico": "🛒",
         "c": "s",
         "py": "zhèlǐ de dōngxi",
         "hv": "giá lý đích đông tây"
        },
        {
         "t": "特别",
         "ico": "📈",
         "c": "v",
         "py": "tèbié",
         "hv": "đặc biệt"
        },
        {
         "t": "便宜",
         "ico": "💰",
         "c": "o",
         "py": "piányi",
         "hv": "tiện nghi"
        }
       ],
       "traceWord": "便宜",
       "py": "Zhèlǐ de dōngxi tèbié piányi",
       "traceKey": "pianyi",
       "traceInfo": [
        {
         "c": "便",
         "py": "pián",
         "hv": "tiện"
        },
        {
         "c": "宜",
         "py": "yi",
         "hv": "nghi"
        }
       ]
      },
      {
       "scene": "👗✨🌟",
       "full": "这件衣服十分漂亮",
       "vi": "Bộ quần áo này vô cùng đẹp",
       "parts": [
        {
         "t": "这件衣服",
         "ico": "👗",
         "c": "s",
         "py": "zhè jiàn yīfu",
         "hv": "giá kiện y phục"
        },
        {
         "t": "十分",
         "ico": "📈",
         "c": "v",
         "py": "shífēn",
         "hv": "thập phân"
        },
        {
         "t": "漂亮",
         "ico": "✨",
         "c": "o",
         "py": "piàoliang",
         "hv": "phiêu lượng"
        }
       ],
       "traceWord": "十分",
       "py": "Zhè jiàn yīfu shífēn piàoliang",
       "traceKey": "shifen",
       "traceInfo": [
        {
         "c": "十",
         "py": "shí",
         "hv": "thập"
        },
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        }
       ]
      },
      {
       "scene": "🙋💭💸",
       "full": "顾客觉得有点儿贵",
       "vi": "Khách hàng thấy hơi đắt",
       "parts": [
        {
         "t": "顾客",
         "ico": "🙋",
         "c": "s",
         "py": "gùkè",
         "hv": "cố khách"
        },
        {
         "t": "觉得",
         "ico": "💭",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "有点儿贵",
         "ico": "💸",
         "c": "o",
         "py": "yǒudiǎnr guì",
         "hv": "hữu điểm nhi quý"
        }
       ],
       "traceWord": "顾客",
       "py": "Gùkè juéde yǒudiǎnr guì",
       "traceKey": "guke",
       "traceInfo": [
        {
         "c": "顾",
         "py": "gù",
         "hv": "cố"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "🧥🔄📏",
       "full": "我想换一件更大的",
       "vi": "Tôi muốn đổi một cái to hơn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想换",
         "ico": "🔄",
         "c": "v",
         "py": "xiǎng huàn",
         "hv": "tưởng hoán"
        },
        {
         "t": "一件更大的",
         "ico": "📏",
         "c": "o",
         "py": "yī jiàn gèng dà de",
         "hv": "nhất kiện cánh đại đích"
        }
       ],
       "traceWord": "换",
       "py": "Wǒ xiǎng huàn yī jiàn gèng dà de",
       "traceKey": "huan",
       "traceInfo": [
        {
         "c": "换",
         "py": "huàn",
         "hv": "hoán"
        }
       ]
      },
      {
       "scene": "👛😟💴",
       "full": "我的钱不够买这件大衣",
       "vi": "Tiền của tôi không đủ mua chiếc áo khoác này",
       "parts": [
        {
         "t": "我的钱",
         "ico": "👛",
         "c": "s",
         "py": "wǒ de qián",
         "hv": "ngã đích tiền"
        },
        {
         "t": "不够",
         "ico": "😟",
         "c": "v",
         "py": "bùgòu",
         "hv": "bất cấu"
        },
        {
         "t": "买这件大衣",
         "ico": "🧥",
         "c": "o",
         "py": "mǎi zhè jiàn dàyī",
         "hv": "mãi giá kiện đại y"
        }
       ],
       "traceWord": "不够",
       "py": "Wǒ de qián bùgòu mǎi zhè jiàn dàyī",
       "traceKey": "bugou",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "够",
         "py": "gòu",
         "hv": "cấu"
        }
       ]
      },
      {
       "scene": "☕🥰✨",
       "full": "这个杯子多么好看",
       "vi": "Cái cốc này đẹp biết bao",
       "parts": [
        {
         "t": "这个杯子",
         "ico": "☕",
         "c": "s",
         "py": "zhè gè bēizi",
         "hv": "giá cá bôi tử"
        },
        {
         "t": "多么",
         "ico": "📈",
         "c": "v",
         "py": "duōme",
         "hv": "đa ma"
        },
        {
         "t": "好看",
         "ico": "😍",
         "c": "o",
         "py": "hǎokàn",
         "hv": "hảo khán"
        }
       ],
       "traceWord": "多么",
       "py": "Zhè gè bēizi duōme hǎokàn",
       "traceKey": "duome",
       "traceInfo": [
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        },
        {
         "c": "么",
         "py": "me",
         "hv": "ma"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这件大衣怎么样？",
       "qvi": "Chiếc áo khoác này thế nào?",
       "scene": "🧥🤔👍",
       "ans": "这件大衣挺好",
       "opts": [
        {
         "txt": "这件大衣挺好",
         "ico": "👍",
         "py": "Zhè jiàn dàyī tǐng hǎo"
        },
        {
         "txt": "我不去商店",
         "ico": "🚫",
         "py": "Wǒ bú qù shāngdiàn"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Zhè jiàn dàyī zěnmeyàng?"
      },
      {
       "q": "你要买多大的衣服？",
       "qvi": "Bạn muốn mua quần áo cỡ nào?",
       "scene": "👕📏🤔",
       "ans": "不太大的就行",
       "opts": [
        {
         "txt": "我在学校学习",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào xuéxí"
        },
        {
         "txt": "不太大的就行",
         "ico": "👌",
         "py": "Bù tài dà de jiù xíng"
        },
        {
         "txt": "明天下午三点",
         "ico": "🕒",
         "py": "Míngtiān xiàwǔ sān diǎn"
        }
       ],
       "qpy": "Nǐ yào mǎi duō dà de yīfu?"
      },
      {
       "q": "这些钱够吗？",
       "qvi": "Số tiền này đủ không?",
       "scene": "💴🤔✅",
       "ans": "够了",
       "opts": [
        {
         "txt": "他叫小明",
         "ico": "👦",
         "py": "Tā jiào Xiǎomíng"
        },
        {
         "txt": "我在家里",
         "ico": "🏠",
         "py": "Wǒ zài jiā li"
        },
        {
         "txt": "够了",
         "ico": "✅",
         "py": "Gòu le"
        }
       ],
       "qpy": "Zhèxiē qián gòu ma?"
      },
      {
       "q": "这家商店的东西怎么样？",
       "qvi": "Đồ trong cửa hàng này thế nào?",
       "scene": "🏪🛒🤔",
       "ans": "实在太便宜了",
       "opts": [
        {
         "txt": "实在太便宜了",
         "ico": "💰",
         "py": "Shízài tài piányi le"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我想去北京",
         "ico": "✈️",
         "py": "Wǒ xiǎng qù Běijīng"
        }
       ],
       "qpy": "Zhè jiā shāngdiàn de dōngxi zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi giá và mặc cả ở cửa hàng quần áo",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn vào một cửa hàng. Tự nói thành tiếng khen món đồ bằng ba phó từ khác nhau, ví dụ <i>\"这件大衣挺好看\"</i>, <i>\"这件衣服十分漂亮\"</i>.",
       "<b>Bước 2:</b> Đóng vai người mua: nói giá hơi đắt <i>\"有点儿贵\"</i>, nói tiền không đủ <i>\"我的钱不够\"</i> và đề nghị đổi cỡ <i>\"我想换一件更大的\"</i>.",
       "<b>Bước 3:</b> Đóng vai người bán trả lời ngắn <i>\"这里的东西特别便宜\"</i>. Sau đó nhắn tin cho đồng nghiệp kể về cửa hàng, dùng ít nhất 3 phó từ mức độ khác nhau."
      ]
     }
    },
    {
     "id": "2.3B",
     "name": "Bài 2.3B: Siêu thị, cân đo và số lượng hàng",
     "grammar": {
      "formulas": [
       "🧑 我 + ☝️ 只 + 🛒 买一瓶水",
       "📦 这些肉 + 🔢 一共 + ⚖️ 两斤",
       "🏪 这里卖的东西 + 💯 全 + ✅ 是新的"
      ],
      "tip": "Phó từ phạm vi đứng trước động từ: 只 (zhǐ, chỉ) = chỉ, 一共 (yīgòng, nhất cộng) = tổng cộng, 全 (quán, toàn) = đều, hoàn toàn. 只能 (zhǐ néng) = chỉ có thể. Đơn vị cân: 斤 (jīn) = nửa ký, 公斤/千克 = ký, 克 = gam.",
      "vn_tip": "Người Việt hay đặt 只 sau động từ hoặc nói 我买只一瓶. Đúng là 我只买一瓶 (只 đứng ngay trước động từ). 一共 cũng đứng trước động từ hoặc số tiền: 一共十块. Đừng nhầm 全 với 都: 全 thường đi với 是/有, ví dụ 全是新的."
     },
     "chunks": [
      {
       "scene": "🧑‍🤝‍🧑🏪🍎",
       "full": "我们去超市买水果",
       "vi": "Chúng tôi đến siêu thị mua trái cây",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "去超市",
         "ico": "🏪",
         "c": "v",
         "py": "qù chāoshì",
         "hv": "khứ siêu thị"
        },
        {
         "t": "买水果",
         "ico": "🍎",
         "c": "o",
         "py": "mǎi shuǐguǒ",
         "hv": "mãi thủy quả"
        }
       ],
       "traceWord": "超市",
       "py": "Wǒmen qù chāoshì mǎi shuǐguǒ",
       "traceKey": "chaoshi",
       "traceInfo": [
        {
         "c": "超",
         "py": "chāo",
         "hv": "siêu"
        },
        {
         "c": "市",
         "py": "shì",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "💧☝️🛒",
       "full": "我只买一瓶水",
       "vi": "Tôi chỉ mua một chai nước",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "只买",
         "ico": "☝️",
         "c": "v",
         "py": "zhǐ mǎi",
         "hv": "chỉ mãi"
        },
        {
         "t": "一瓶水",
         "ico": "💧",
         "c": "o",
         "py": "yī píng shuǐ",
         "hv": "nhất bình thủy"
        }
       ],
       "traceWord": "瓶",
       "py": "Wǒ zhǐ mǎi yī píng shuǐ",
       "traceKey": "ping",
       "traceInfo": [
        {
         "c": "瓶",
         "py": "píng",
         "hv": "bình"
        }
       ]
      },
      {
       "scene": "🥩⚖️🔢",
       "full": "这些肉一共两斤",
       "vi": "Chỗ thịt này tổng cộng hai cân",
       "parts": [
        {
         "t": "这些肉",
         "ico": "🥩",
         "c": "s",
         "py": "zhèxiē ròu",
         "hv": "giá ta nhục"
        },
        {
         "t": "一共",
         "ico": "🔢",
         "c": "v",
         "py": "yīgòng",
         "hv": "nhất cộng"
        },
        {
         "t": "两斤",
         "ico": "⚖️",
         "c": "o",
         "py": "liǎng jīn",
         "hv": "lưỡng cân"
        }
       ],
       "traceWord": "一共",
       "py": "Zhèxiē ròu yīgòng liǎng jīn",
       "traceKey": "yigong",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "共",
         "py": "gòng",
         "hv": "cộng"
        }
       ]
      },
      {
       "scene": "🍞⚖️🔢",
       "full": "这个面包有三百克",
       "vi": "Cái bánh mì này nặng ba trăm gam",
       "parts": [
        {
         "t": "这个面包",
         "ico": "🍞",
         "c": "s",
         "py": "zhè gè miànbāo",
         "hv": "giá cá diện bao"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三百克",
         "ico": "⚖️",
         "c": "o",
         "py": "sān bǎi kè",
         "hv": "tam bách khắc"
        }
       ],
       "traceWord": "克",
       "py": "Zhè gè miànbāo yǒu sān bǎi kè",
       "traceKey": "ke",
       "traceInfo": [
        {
         "c": "克",
         "py": "kè",
         "hv": "khắc"
        }
       ]
      },
      {
       "scene": "🍚⚖️🛍️",
       "full": "我想买五公斤米",
       "vi": "Tôi muốn mua năm ký gạo",
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
         "t": "五公斤米",
         "ico": "🍚",
         "c": "o",
         "py": "wǔ gōngjīn mǐ",
         "hv": "ngũ công cân mễ"
        }
       ],
       "traceWord": "公斤",
       "py": "Wǒ xiǎng mǎi wǔ gōngjīn mǐ",
       "traceKey": "gongjin",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "斤",
         "py": "jīn",
         "hv": "cân"
        }
       ]
      },
      {
       "scene": "🍊🍎⚖️",
       "full": "这些水果有三千克",
       "vi": "Chỗ trái cây này nặng ba ký",
       "parts": [
        {
         "t": "这些水果",
         "ico": "🍊",
         "c": "s",
         "py": "zhèxiē shuǐguǒ",
         "hv": "giá ta thủy quả"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三千克",
         "ico": "⚖️",
         "c": "o",
         "py": "sān qiānkè",
         "hv": "tam thiên khắc"
        }
       ],
       "traceWord": "千克",
       "py": "Zhèxiē shuǐguǒ yǒu sān qiānkè",
       "traceKey": "qianke",
       "traceInfo": [
        {
         "c": "千",
         "py": "qiān",
         "hv": "thiên"
        },
        {
         "c": "克",
         "py": "kè",
         "hv": "khắc"
        }
       ]
      },
      {
       "scene": "🏪🛒💯",
       "full": "这里卖的东西全是新的",
       "vi": "Đồ bán ở đây toàn là đồ mới",
       "parts": [
        {
         "t": "这里卖的东西",
         "ico": "🛒",
         "c": "s",
         "py": "zhèlǐ mài de dōngxi",
         "hv": "giá lý mại đích đông tây"
        },
        {
         "t": "全",
         "ico": "💯",
         "c": "v",
         "py": "quán",
         "hv": "toàn"
        },
        {
         "t": "是新的",
         "ico": "✨",
         "c": "o",
         "py": "shì xīn de",
         "hv": "thị tân đích"
        }
       ],
       "traceWord": "卖",
       "py": "Zhèlǐ mài de dōngxi quán shì xīn de",
       "traceKey": "mai",
       "traceInfo": [
        {
         "c": "卖",
         "py": "mài",
         "hv": "mại"
        }
       ]
      },
      {
       "scene": "🛒💰👍",
       "full": "所有的东西都很便宜",
       "vi": "Tất cả đồ đều rất rẻ",
       "parts": [
        {
         "t": "所有的东西",
         "ico": "🛒",
         "c": "s",
         "py": "suǒyǒu de dōngxi",
         "hv": "sở hữu đích đông tây"
        },
        {
         "t": "都",
         "ico": "💯",
         "c": "v",
         "py": "dōu",
         "hv": "đô"
        },
        {
         "t": "很便宜",
         "ico": "💰",
         "c": "o",
         "py": "hěn piányi",
         "hv": "ngận tiện nghi"
        }
       ],
       "traceWord": "所有",
       "py": "Suǒyǒu de dōngxi dōu hěn piányi",
       "traceKey": "suoyou",
       "traceInfo": [
        {
         "c": "所",
         "py": "suǒ",
         "hv": "sở"
        },
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "大家在做什么？",
       "qvi": "Mọi người đang làm gì?",
       "scene": "🧑‍🤝‍🧑🧑‍🤝‍🧑🏪",
       "ans": "大家在排队",
       "opts": [
        {
         "txt": "大家在睡觉",
         "ico": "😴",
         "py": "Dàjiā zài shuìjiào"
        },
        {
         "txt": "大家在排队",
         "ico": "🚶‍♂️",
         "py": "Dàjiā zài páiduì"
        },
        {
         "txt": "大家在上课",
         "ico": "🏫",
         "py": "Dàjiā zài shàngkè"
        }
       ],
       "qpy": "Dàjiā zài zuò shénme?"
      },
      {
       "q": "桌子上有什么？",
       "qvi": "Trên bàn có gì?",
       "scene": "🪑🍼❓",
       "ans": "桌子上有一个瓶子",
       "opts": [
        {
         "txt": "桌子上有一个书包",
         "ico": "🎒",
         "py": "Zhuōzi shàng yǒu yī gè shūbāo"
        },
        {
         "txt": "桌子上有一本书",
         "ico": "📖",
         "py": "Zhuōzi shàng yǒu yī běn shū"
        },
        {
         "txt": "桌子上有一个瓶子",
         "ico": "🍼",
         "py": "Zhuōzi shàng yǒu yī gè píngzi"
        }
       ],
       "qpy": "Zhuōzi shàng yǒu shénme?"
      },
      {
       "q": "这些水果你要哪些？",
       "qvi": "Trái cây này bạn lấy loại nào?",
       "scene": "🍎🍊🍌",
       "ans": "我要全部",
       "opts": [
        {
         "txt": "我要全部",
         "ico": "💯",
         "py": "Wǒ yào quánbù"
        },
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "他是我的同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ de tóngxué"
        }
       ],
       "qpy": "Zhèxiē shuǐguǒ nǐ yào nǎxiē?"
      },
      {
       "q": "一个人能买几瓶牛奶？",
       "qvi": "Một người mua được mấy chai sữa?",
       "scene": "🥛🧑🔢",
       "ans": "只能买两瓶",
       "opts": [
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        },
        {
         "txt": "我在超市工作",
         "ico": "🏪",
         "py": "Wǒ zài chāoshì gōngzuò"
        },
        {
         "txt": "只能买两瓶",
         "ico": "✌️",
         "py": "Zhǐ néng mǎi liǎng píng"
        }
       ],
       "qpy": "Yī gè rén néng mǎi jǐ píng niúnǎi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua đồ ở siêu thị",
      "steps": [
       "<b>Bước 1:</b> Lập danh sách 4 món cần mua và số lượng bằng đơn vị cân, ví dụ <i>\"我想买五公斤米\"</i>, <i>\"这些肉一共两斤\"</i>. Tự nói thành tiếng từng món.",
       "<b>Bước 2:</b> Đóng vai khách hỏi nhân viên: nói bạn chỉ mua một ít <i>\"我只买一瓶水\"</i>, hỏi mỗi người mua được bao nhiêu <i>\"一个人能买几瓶牛奶？\"</i> và nghe trả lời <i>\"只能买两瓶\"</i>.",
       "<b>Bước 3:</b> Ra quầy tính tiền, nói <i>\"我们去超市买水果\"</i> rồi hỏi tổng số tiền. Cuối cùng nhắn tin cho đồng nghiệp: đồ ở siêu thị rẻ hay đắt, dùng 所有 hoặc 全."
      ]
     }
    },
    {
     "id": "2.3C",
     "name": "Bài 2.3C: Quần áo, giày dép và màu sắc",
     "grammar": {
      "formulas": [
       "🧥 黑色的大衣 + ❓ 好吗",
       "👟 这件蓝色的 + ❓ 行吗",
       "🧑 你觉得 + ❓ 黄色的鞋怎么样"
      ],
      "tip": "Thêm 好吗 (hǎo ma, hảo), 行吗 (xíng ma, hành) hoặc 怎么样 (zěnmeyàng) vào cuối câu để hỏi ý kiến, đề nghị, xin ý bạn: ... 好吗？ = ... được không? 怎么样 hỏi nhận xét: 这件大衣怎么样？ Màu sắc: 颜色 (yánsè, nhan sắc) + 红/黄/蓝/绿/黑/白.",
      "vn_tip": "Người Việt hay nói 好不好 nhưng nhớ rằng 好吗 và 好不好 chỉ chọn một, không viết 好不好吗. Từ chỉ màu đứng trước danh từ thường thêm 的: 黑色的大衣 (cũng có thể nói gọn 红色大衣). Đừng nói 大衣黑色 như tiếng Việt (áo khoác màu đen)."
     },
     "chunks": [
      {
       "scene": "🌈🎨🤔",
       "full": "你喜欢什么颜色",
       "vi": "Bạn thích màu gì",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "什么颜色",
         "ico": "🎨",
         "c": "o",
         "py": "shénme yánsè",
         "hv": "thập ma nhan sắc"
        }
       ],
       "traceWord": "颜色",
       "py": "Nǐ xǐhuan shénme yánsè",
       "traceKey": "yanse",
       "traceInfo": [
        {
         "c": "颜",
         "py": "yán",
         "hv": "nhan"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "👟⚪🧑",
       "full": "我想要白色的鞋",
       "vi": "Tôi muốn đôi giày màu trắng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想要",
         "ico": "🙏",
         "c": "v",
         "py": "xiǎng yào",
         "hv": "tưởng yếu"
        },
        {
         "t": "白色的鞋",
         "ico": "👟",
         "c": "o",
         "py": "báisè de xié",
         "hv": "bạch sắc đích hài"
        }
       ],
       "traceWord": "白色",
       "py": "Wǒ xiǎng yào báisè de xié",
       "traceKey": "baise",
       "traceInfo": [
        {
         "c": "白",
         "py": "bái",
         "hv": "bạch"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "🧥⚫❓",
       "full": "黑色的大衣好吗",
       "vi": "Áo khoác màu đen được không",
       "parts": [
        {
         "t": "黑色的大衣",
         "ico": "🧥",
         "c": "s",
         "py": "hēisè de dàyī",
         "hv": "hắc sắc đích đại y"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "v",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "黑色",
       "py": "Hēisè de dàyī hǎo ma",
       "traceKey": "heise",
       "traceInfo": [
        {
         "c": "黑",
         "py": "hēi",
         "hv": "hắc"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "🧥🔴✨",
       "full": "这件红色大衣很漂亮",
       "vi": "Chiếc áo khoác đỏ này rất đẹp",
       "parts": [
        {
         "t": "这件红色大衣",
         "ico": "🧥",
         "c": "s",
         "py": "zhè jiàn hóngsè dàyī",
         "hv": "giá kiện hồng sắc đại y"
        },
        {
         "t": "很",
         "ico": "📈",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "漂亮",
         "ico": "✨",
         "c": "o",
         "py": "piàoliang",
         "hv": "phiêu lượng"
        }
       ],
       "traceWord": "红色",
       "py": "Zhè jiàn hóngsè dàyī hěn piàoliang",
       "traceKey": "hongse",
       "traceInfo": [
        {
         "c": "红",
         "py": "hóng",
         "hv": "hồng"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "🎨🤝❓",
       "full": "这个颜色合适吗",
       "vi": "Màu này có hợp không",
       "parts": [
        {
         "t": "这个颜色",
         "ico": "🎨",
         "c": "s",
         "py": "zhè gè yánsè",
         "hv": "giá cá nhan sắc"
        },
        {
         "t": "合适",
         "ico": "🤝",
         "c": "v",
         "py": "héshì",
         "hv": "hợp thích"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "合适",
       "py": "Zhè gè yánsè héshì ma",
       "traceKey": "heshi",
       "traceInfo": [
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        },
        {
         "c": "适",
         "py": "shì",
         "hv": "thích"
        }
       ]
      },
      {
       "scene": "🧥🔵❓",
       "full": "这件蓝色的行吗",
       "vi": "Cái màu xanh dương này được không",
       "parts": [
        {
         "t": "这件蓝色的",
         "ico": "🧥",
         "c": "s",
         "py": "zhè jiàn lánsè de",
         "hv": "giá kiện lam sắc đích"
        },
        {
         "t": "行",
         "ico": "👌",
         "c": "v",
         "py": "xíng",
         "hv": "hành"
        },
        {
         "t": "吗",
         "ico": "❓",
         "c": "o",
         "py": "ma",
         "hv": "ma"
        }
       ],
       "traceWord": "蓝色",
       "py": "Zhè jiàn lánsè de xíng ma",
       "traceKey": "lanse",
       "traceInfo": [
        {
         "c": "蓝",
         "py": "lán",
         "hv": "lam"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "👟🟡🤔",
       "full": "黄色的鞋你觉得怎么样",
       "vi": "Đôi giày màu vàng bạn thấy thế nào",
       "parts": [
        {
         "t": "黄色的鞋",
         "ico": "👟",
         "c": "s",
         "py": "huángsè de xié",
         "hv": "hoàng sắc đích hài"
        },
        {
         "t": "你觉得",
         "ico": "💭",
         "c": "v",
         "py": "nǐ juéde",
         "hv": "nễ giác đắc"
        },
        {
         "t": "怎么样",
         "ico": "🤔",
         "c": "o",
         "py": "zěnmeyàng",
         "hv": "chẩm ma dạng"
        }
       ],
       "traceWord": "黄色",
       "py": "Huángsè de xié nǐ juéde zěnmeyàng",
       "traceKey": "huangse",
       "traceInfo": [
        {
         "c": "黄",
         "py": "huáng",
         "hv": "hoàng"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "📅🧥🟢",
       "full": "明天穿绿色的大衣好吗",
       "vi": "Ngày mai mặc áo khoác màu xanh lá được không",
       "parts": [
        {
         "t": "明天",
         "ico": "📅",
         "c": "s",
         "py": "míngtiān",
         "hv": "minh thiên"
        },
        {
         "t": "穿",
         "ico": "👔",
         "c": "v",
         "py": "chuān",
         "hv": "xuyên"
        },
        {
         "t": "绿色的大衣好吗",
         "ico": "🧥",
         "c": "o",
         "py": "lǜsè de dàyī hǎo ma",
         "hv": "lục sắc đích đại y hảo ma"
        }
       ],
       "traceWord": "绿色",
       "py": "Míngtiān chuān lǜsè de dàyī hǎo ma",
       "traceKey": "luse",
       "traceInfo": [
        {
         "c": "绿",
         "py": "lǜ",
         "hv": "lục"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这件衣服是什么颜色的？",
       "qvi": "Bộ quần áo này màu gì?",
       "scene": "👕🟡🤔",
       "ans": "这件衣服是黄的",
       "opts": [
        {
         "txt": "这件衣服是爸爸的",
         "ico": "👨",
         "py": "Zhè jiàn yīfu shì bàba de"
        },
        {
         "txt": "这件衣服是黄的",
         "ico": "🟡",
         "py": "Zhè jiàn yīfu shì huáng de"
        },
        {
         "txt": "这件衣服在楼上",
         "ico": "🏢",
         "py": "Zhè jiàn yīfu zài lóu shàng"
        }
       ],
       "qpy": "Zhè jiàn yīfu shì shénme yánsè de?"
      },
      {
       "q": "你要红的还是蓝的？",
       "qvi": "Bạn lấy cái đỏ hay cái xanh dương?",
       "scene": "🔴🔵🤔",
       "ans": "我要蓝的",
       "opts": [
        {
         "txt": "我要去北京",
         "ico": "✈️",
         "py": "Wǒ yào qù Běijīng"
        },
        {
         "txt": "我在学校",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào"
        },
        {
         "txt": "我要蓝的",
         "ico": "🔵",
         "py": "Wǒ yào lán de"
        }
       ],
       "qpy": "Nǐ yào hóng de háishi lán de?"
      },
      {
       "q": "你的鞋是绿的吗？",
       "qvi": "Giày của bạn màu xanh lá à?",
       "scene": "👟🟢❓",
       "ans": "不是，是黑的",
       "opts": [
        {
         "txt": "不是，是黑的",
         "ico": "⚫",
         "py": "Bú shì shì hēi de"
        },
        {
         "txt": "是的，我是学生",
         "ico": "🧑‍🎓",
         "py": "Shì de wǒ shì xuéshēng"
        },
        {
         "txt": "好，我们去吃饭",
         "ico": "🍚",
         "py": "Hǎo wǒmen qù chīfàn"
        }
       ],
       "qpy": "Nǐ de xié shì lǜ de ma?"
      },
      {
       "q": "你的大衣是蓝的还是绿的？",
       "qvi": "Áo khoác của bạn xanh dương hay xanh lá?",
       "scene": "🧥🔵🟢",
       "ans": "我的大衣是绿的",
       "opts": [
        {
         "txt": "我们明天去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "我的大衣是绿的",
         "ico": "🟢",
         "py": "Wǒ de dàyī shì lǜ de"
        },
        {
         "txt": "他在医院工作",
         "ico": "🏥",
         "py": "Tā zài yīyuàn gōngzuò"
        }
       ],
       "qpy": "Nǐ de dàyī shì lán de háishi lǜ de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chọn quần áo và giày ở cửa hàng",
      "steps": [
       "<b>Bước 1:</b> Vào cửa hàng giày, hỏi đồng nghiệp đi cùng ý kiến: <i>\"你喜欢什么颜色\"</i>, rồi nói ý mình <i>\"我想要白色的鞋\"</i>.",
       "<b>Bước 2:</b> Thử đồ và hỏi ý kiến bằng ba cách khác nhau: <i>\"黑色的大衣好吗\"</i>, <i>\"这件蓝色的行吗\"</i>, <i>\"黄色的鞋你觉得怎么样\"</i>. Tự trả lời cả hai phía.",
       "<b>Bước 3:</b> Nhắn tin cho bạn: ngày mai đi họp nên mặc gì, hỏi <i>\"明天穿绿色的大衣好吗\"</i> và ghi lại câu trả lời, nói to vài lần."
      ]
     }
    }
   ]
  },
  "2.4": {
   "lessons": [
    {
     "id": "2.4A",
     "name": "Bài 2.4A: Nhà hàng, gọi món, đồ ăn mang về",
     "grammar": {
      "formulas": [
       "🍜 饭馆 + 👉 这么 + 📏 小",
       "🍱 中餐 + ➖ 没有 + 👉 那么 + 💰 贵",
       "👥 我们 + 👉 这样 + 🍽️ 点菜吧"
      ],
      "tip": "Dùng 这么 (zhème, giá ma) / 那么 (nàme, na ma) trước tính từ hoặc động từ chỉ mức độ: \"như thế này / như thế kia\". 这样 (zhèyàng) / 那样 (nàyàng) = \"như thế này / như thế kia\", đứng trước động từ hoặc trước 的 để bổ nghĩa cho danh từ. 这 chỉ gần, 那 chỉ xa.",
      "vn_tip": "Người Việt hay nói \"rất như vậy\" hoặc đặt \"như vậy\" sau động từ. Tiếng Trung đặt 这么/那么/这样 TRƯỚC từ nó bổ nghĩa: nói 这么小 (nhỏ như vậy), 这样点菜 (gọi món như thế này), không nói 小这么."
     },
     "chunks": [
      {
       "scene": "🙏📋🍜",
       "full": "请给我菜单",
       "vi": "Làm ơn đưa tôi thực đơn",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "给我",
         "ico": "🤲",
         "c": "v",
         "py": "gěi wǒ",
         "hv": "cấp ngã"
        },
        {
         "t": "菜单",
         "ico": "📋",
         "c": "o",
         "py": "càidān",
         "hv": "thái đơn"
        }
       ],
       "traceWord": "菜单",
       "py": "Qǐng gěi wǒ càidān",
       "traceKey": "caidan",
       "traceInfo": [
        {
         "c": "菜",
         "py": "cài",
         "hv": "thái"
        },
        {
         "c": "单",
         "py": "dān",
         "hv": "đơn"
        }
       ]
      },
      {
       "scene": "🏠🍜📏",
       "full": "这家饭馆这么小",
       "vi": "Quán ăn này nhỏ thế",
       "parts": [
        {
         "t": "这家饭馆",
         "ico": "🍜",
         "c": "s",
         "py": "zhè jiā fànguǎn",
         "hv": "giá gia phạn quán"
        },
        {
         "t": "这么",
         "ico": "👉",
         "c": "v",
         "py": "zhème",
         "hv": "giá ma"
        },
        {
         "t": "小",
         "ico": "🤏",
         "c": "o",
         "py": "xiǎo",
         "hv": "tiểu"
        }
       ],
       "traceWord": "饭馆",
       "py": "Zhè jiā fànguǎn zhème xiǎo",
       "traceKey": "fanguan",
       "traceInfo": [
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "🍱💰",
       "full": "中餐没有那么贵",
       "vi": "Món Trung không đắt đến thế",
       "parts": [
        {
         "t": "中餐",
         "ico": "🥢",
         "c": "s",
         "py": "zhōngcān",
         "hv": "trung xan"
        },
        {
         "t": "没有",
         "ico": "➖",
         "c": "v",
         "py": "méiyǒu",
         "hv": "một hữu"
        },
        {
         "t": "那么贵",
         "ico": "💰",
         "c": "o",
         "py": "nàme guì",
         "hv": "na ma quý"
        }
       ],
       "traceWord": "中餐",
       "py": "Zhōngcān méiyǒu nàme guì",
       "traceKey": "zhongcan",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "餐",
         "py": "cān",
         "hv": "xan"
        }
       ]
      },
      {
       "scene": "👥📋🍽️",
       "full": "我们这样点菜吧",
       "vi": "Chúng ta gọi món thế này nhé",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "这样",
         "ico": "👉",
         "c": "o",
         "py": "zhèyàng",
         "hv": "giá dạng"
        },
        {
         "t": "点菜吧",
         "ico": "🍽️",
         "c": "v",
         "py": "diǎn cài ba",
         "hv": "điểm thái ba"
        }
       ],
       "traceWord": "这样",
       "py": "Wǒmen zhèyàng diǎn cài ba",
       "traceKey": "zheyang",
       "traceInfo": [
        {
         "c": "这",
         "py": "zhè",
         "hv": "giá"
        },
        {
         "c": "样",
         "py": "yàng",
         "hv": "dạng"
        }
       ]
      },
      {
       "scene": "🧑🍚😋",
       "full": "我吃这么多就饱了",
       "vi": "Tôi ăn chừng này là no rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "吃",
         "ico": "🍚",
         "c": "v",
         "py": "chī",
         "hv": "cật"
        },
        {
         "t": "这么多就饱了",
         "ico": "😋",
         "c": "o",
         "py": "zhème duō jiù bǎo le",
         "hv": "giá ma đa tựu bão liễu"
        }
       ],
       "traceWord": "饱",
       "py": "Wǒ chī zhème duō jiù bǎo le",
       "traceKey": "bao",
       "traceInfo": [
        {
         "c": "饱",
         "py": "bǎo",
         "hv": "bão"
        }
       ]
      },
      {
       "scene": "🕛👥📦",
       "full": "中午我们点外卖",
       "vi": "Trưa nay chúng ta gọi đồ ăn mang về",
       "parts": [
        {
         "t": "中午我们",
         "ico": "🕛",
         "c": "s",
         "py": "zhōngwǔ wǒmen",
         "hv": "trung ngọ ngã môn"
        },
        {
         "t": "点",
         "ico": "👆",
         "c": "v",
         "py": "diǎn",
         "hv": "điểm"
        },
        {
         "t": "外卖",
         "ico": "📦",
         "c": "o",
         "py": "wàimài",
         "hv": "ngoại mại"
        }
       ],
       "traceWord": "外卖",
       "py": "Zhōngwǔ wǒmen diǎn wàimài",
       "traceKey": "waimai",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "卖",
         "py": "mài",
         "hv": "mại"
        }
       ]
      },
      {
       "scene": "🧑🍽️🥘🍜",
       "full": "我要两道菜和一碗面",
       "vi": "Tôi gọi hai món và một bát mì",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "要",
         "ico": "☝️",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "两道菜和一碗面",
         "ico": "🍜",
         "c": "o",
         "py": "liǎng dào cài hé yī wǎn miàn",
         "hv": "lưỡng đạo thái hòa nhất oản diện"
        }
       ],
       "traceWord": "碗",
       "py": "Wǒ yào liǎng dào cài hé yī wǎn miàn",
       "traceKey": "wan",
       "traceInfo": [
        {
         "c": "碗",
         "py": "wǎn",
         "hv": "oản"
        }
       ]
      },
      {
       "scene": "🧑🚫🍷",
       "full": "我不能喝那么多酒",
       "vi": "Tôi không thể uống nhiều rượu như thế",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "不能喝",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng hē",
         "hv": "bất năng hát"
        },
        {
         "t": "那么多酒",
         "ico": "🍷",
         "c": "o",
         "py": "nàme duō jiǔ",
         "hv": "na ma đa tửu"
        }
       ],
       "traceWord": "酒",
       "py": "Wǒ bù néng hē nàme duō jiǔ",
       "traceKey": "jiu",
       "traceInfo": [
        {
         "c": "酒",
         "py": "jiǔ",
         "hv": "tửu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想吃中餐还是西餐？",
       "qvi": "Bạn muốn ăn món Trung hay món Tây?",
       "scene": "🧑🍽️🥘",
       "ans": "我想吃西餐",
       "opts": [
        {
         "txt": "我想去北京",
         "ico": "✈️",
         "py": "Wǒ xiǎng qù Běijīng"
        },
        {
         "txt": "我想吃西餐",
         "ico": "🍝",
         "py": "Wǒ xiǎng chī xīcān"
        },
        {
         "txt": "我想买手机",
         "ico": "📱",
         "py": "Wǒ xiǎng mǎi shǒujī"
        }
       ],
       "qpy": "Nǐ xiǎng chī zhōngcān háishi xīcān?"
      },
      {
       "q": "你们中午吃什么？",
       "qvi": "Trưa nay các bạn ăn gì?",
       "scene": "👥🕛🍔",
       "ans": "我们吃快餐",
       "opts": [
        {
         "txt": "我们吃快餐",
         "ico": "🍔",
         "py": "Wǒmen chī kuàicān"
        },
        {
         "txt": "我们在北京",
         "ico": "📍",
         "py": "Wǒmen zài Běijīng"
        },
        {
         "txt": "我们是同学",
         "ico": "🎓",
         "py": "Wǒmen shì tóngxué"
        }
       ],
       "qpy": "Nǐmen zhōngwǔ chī shénme?"
      },
      {
       "q": "吃饭用什么？",
       "qvi": "Ăn cơm dùng gì?",
       "scene": "🍚🥢",
       "ans": "用筷子",
       "opts": [
        {
         "txt": "用电脑",
         "ico": "💻",
         "py": "Yòng diànnǎo"
        },
        {
         "txt": "用报纸",
         "ico": "📰",
         "py": "Yòng bàozhǐ"
        },
        {
         "txt": "用筷子",
         "ico": "🥢",
         "py": "Yòng kuàizi"
        }
       ],
       "qpy": "Chīfàn yòng shénme?"
      },
      {
       "q": "你喜欢那样的饭馆吗？",
       "qvi": "Bạn có thích quán ăn như thế không?",
       "scene": "🧑❤️🍜",
       "ans": "我喜欢那样的饭馆",
       "opts": [
        {
         "txt": "我有两个孩子",
         "ico": "👶",
         "py": "Wǒ yǒu liǎng gè háizi"
        },
        {
         "txt": "我是医生",
         "ico": "🩺",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "我喜欢那样的饭馆",
         "ico": "❤️",
         "py": "Wǒ xǐhuan nàyàng de fànguǎn"
        }
       ],
       "qpy": "Nǐ xǐhuan nàyàng de fànguǎn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gọi món ở quán ăn Trung Quốc",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn vừa vào quán, gọi nhân viên và xin thực đơn: <i>\"请给我菜单\"</i>. Nói to 3 lần.",
       "<b>Bước 2:</b> Gọi món cho cả nhóm: <i>\"我要两道菜和一碗面\"</i>, rồi hỏi bạn đi cùng ăn món Trung hay Tây. Tự nhận xét quán bằng 这么 / 那么, ví dụ <i>\"这家饭馆这么小\"</i>.",
       "<b>Bước 3:</b> Nhắn cho đồng nghiệp bàn chuyện bữa trưa: <i>\"中午我们点外卖\"</i> hoặc <i>\"我们这样点菜吧\"</i>. Khi no thì nói <i>\"我吃这么多就饱了\"</i>."
      ]
     }
    },
    {
     "id": "2.4B",
     "name": "Bài 2.4B: Món ăn, nguyên liệu và hương vị",
     "grammar": {
      "formulas": [
       "🐟 这条鱼 + 📏 大大 + 的",
       "🏠 房间 + ✨ 干干净净 + 的",
       "👶 孩子 + 👍 好好地 + 🥟 吃饺子"
      ],
      "tip": "Tính từ một chữ lặp lại thành AA (大大, 热热), tính từ hai chữ lặp thành AABB (干净 thành 干干净净, 高兴 thành 高高兴兴, 清楚 thành 清清楚楚). Dạng láy làm vị ngữ thường có 的 ở cuối; làm trạng ngữ đứng trước động từ thì thêm 地 (de, địa). Dạng láy diễn tả mức độ sinh động, nên không thêm 很 phía trước.",
      "vn_tip": "Người Việt hay nói \"很干干净净\" (rất sạch sạch sẽ). Sai: tính từ láy đã mang sẵn mức độ, không dùng 很 với nó. Đúng: 房间干干净净的. Đừng quên 的 cuối câu hoặc 地 trước động từ."
     },
     "chunks": [
      {
       "scene": "🐟📏",
       "full": "这条鱼大大的",
       "vi": "Con cá này to to",
       "parts": [
        {
         "t": "这条鱼",
         "ico": "🐟",
         "c": "s",
         "py": "zhè tiáo yú",
         "hv": "giá điều ngư"
        },
        {
         "t": "大大",
         "ico": "📏",
         "c": "v",
         "py": "dàdà",
         "hv": "đại đại"
        },
        {
         "t": "的",
         "ico": "✨",
         "c": "o",
         "py": "de",
         "hv": "đích"
        }
       ],
       "traceWord": "鱼",
       "py": "Zhè tiáo yú dàdà de",
       "traceKey": "yu",
       "traceInfo": [
        {
         "c": "鱼",
         "py": "yú",
         "hv": "ngư"
        }
       ]
      },
      {
       "scene": "🧑❤️🍗🔥",
       "full": "我喜欢吃热热的鸡肉",
       "vi": "Tôi thích ăn thịt gà nóng hổi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "喜欢吃",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan chī",
         "hv": "hỉ hoan cật"
        },
        {
         "t": "热热的鸡肉",
         "ico": "🍗",
         "c": "o",
         "py": "rè rè de jī ròu",
         "hv": "nhiệt nhiệt đích kê nhục"
        }
       ],
       "traceWord": "鸡",
       "py": "Wǒ xǐhuan chī rè rè de jī ròu",
       "traceKey": "ji",
       "traceInfo": [
        {
         "c": "鸡",
         "py": "jī",
         "hv": "kê"
        }
       ]
      },
      {
       "scene": "🍜🍜🍜",
       "full": "这碗方便面满满的",
       "vi": "Bát mì ăn liền này đầy ắp",
       "parts": [
        {
         "t": "这碗方便面",
         "ico": "🍜",
         "c": "s",
         "py": "zhè wǎn fāngbiànmiàn",
         "hv": "giá oản phương tiện miến"
        },
        {
         "t": "满满",
         "ico": "🈵",
         "c": "v",
         "py": "mǎn mǎn",
         "hv": "mãn mãn"
        },
        {
         "t": "的",
         "ico": "✨",
         "c": "o",
         "py": "de",
         "hv": "đích"
        }
       ],
       "traceWord": "方便面",
       "py": "Zhè wǎn fāngbiànmiàn mǎn mǎn de",
       "traceKey": "fangbianmian",
       "traceInfo": [
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        },
        {
         "c": "便",
         "py": "biàn",
         "hv": "tiện"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "miến"
        }
       ]
      },
      {
       "scene": "🧑🐢🥘",
       "full": "他慢慢地吃食物",
       "vi": "Anh ấy ăn thức ăn từ từ",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "慢慢地",
         "ico": "🐢",
         "c": "o",
         "py": "màn màn de",
         "hv": "mạn mạn địa"
        },
        {
         "t": "吃食物",
         "ico": "🥘",
         "c": "v",
         "py": "chī shíwù",
         "hv": "cật thực vật"
        }
       ],
       "traceWord": "食物",
       "py": "Tā màn màn de chī shíwù",
       "traceKey": "shiwu",
       "traceInfo": [
        {
         "c": "食",
         "py": "shí",
         "hv": "thực"
        },
        {
         "c": "物",
         "py": "wù",
         "hv": "vật"
        }
       ]
      },
      {
       "scene": "🧑🗣️🔊",
       "full": "请你慢慢说清楚",
       "vi": "Xin bạn nói chậm và rõ ràng",
       "parts": [
        {
         "t": "请你",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nễ"
        },
        {
         "t": "慢慢",
         "ico": "🐢",
         "c": "o",
         "py": "màn màn",
         "hv": "mạn mạn"
        },
        {
         "t": "说清楚",
         "ico": "🔊",
         "c": "v",
         "py": "shuō qīngchu",
         "hv": "thuyết thanh sở"
        }
       ],
       "traceWord": "清楚",
       "py": "Qǐng nǐ màn màn shuō qīngchu",
       "traceKey": "qingchu",
       "traceInfo": [
        {
         "c": "清",
         "py": "qīng",
         "hv": "thanh"
        },
        {
         "c": "楚",
         "py": "chu",
         "hv": "sở"
        }
       ]
      },
      {
       "scene": "🧑🤫🪑",
       "full": "他安静地坐下",
       "vi": "Anh ấy lặng lẽ ngồi xuống",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "安静地",
         "ico": "🤫",
         "c": "o",
         "py": "ānjìng de",
         "hv": "an tĩnh địa"
        },
        {
         "t": "坐下",
         "ico": "🪑",
         "c": "v",
         "py": "zuò xia",
         "hv": "tọa hạ"
        }
       ],
       "traceWord": "安静",
       "py": "Tā ānjìng de zuò xia",
       "traceKey": "anjing",
       "traceInfo": [
        {
         "c": "安",
         "py": "ān",
         "hv": "an"
        },
        {
         "c": "静",
         "py": "jìng",
         "hv": "tĩnh"
        }
       ]
      },
      {
       "scene": "👶🥟👍",
       "full": "孩子好好地吃饺子",
       "vi": "Đứa trẻ ăn sủi cảo đàng hoàng",
       "parts": [
        {
         "t": "孩子",
         "ico": "👶",
         "c": "s",
         "py": "háizi",
         "hv": "hài tử"
        },
        {
         "t": "好好地",
         "ico": "👍",
         "c": "o",
         "py": "hǎo hǎo de",
         "hv": "hảo hảo địa"
        },
        {
         "t": "吃饺子",
         "ico": "🥟",
         "c": "v",
         "py": "chī jiǎozi",
         "hv": "cật giảo tử"
        }
       ],
       "traceWord": "饺子",
       "py": "Háizi hǎo hǎo de chī jiǎozi",
       "traceKey": "jiaozi",
       "traceInfo": [
        {
         "c": "饺",
         "py": "jiǎo",
         "hv": "giảo"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👧📏✨",
       "full": "那个女孩儿高高的",
       "vi": "Cô bé đó cao cao",
       "parts": [
        {
         "t": "那个女孩儿",
         "ico": "👧",
         "c": "s",
         "py": "nà gè nǚháir",
         "hv": "na cá nữ hài nhi"
        },
        {
         "t": "高高",
         "ico": "📏",
         "c": "v",
         "py": "gāo gāo",
         "hv": "cao cao"
        },
        {
         "t": "的",
         "ico": "✨",
         "c": "o",
         "py": "de",
         "hv": "đích"
        }
       ],
       "traceWord": "女孩儿",
       "py": "Nà gè nǚháir gāo gāo de",
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
      }
     ],
     "qaList": [
      {
       "q": "这个菜的味道怎么样？",
       "qvi": "Hương vị món này thế nào?",
       "scene": "🍲👅",
       "ans": "味道很好",
       "opts": [
        {
         "txt": "他的女儿很可爱",
         "ico": "👧",
         "py": "Tā de nǚ'ér hěn kě'ài"
        },
        {
         "txt": "我随便吃一点点",
         "ico": "🍚",
         "py": "Wǒ suíbiàn chī yī diǎndiǎn"
        },
        {
         "txt": "味道很好",
         "ico": "😋",
         "py": "Wèidào hěn hǎo"
        }
       ],
       "qpy": "Zhè gè cài de wèidào zěnmeyàng?"
      },
      {
       "q": "你闻到什么了？",
       "qvi": "Bạn ngửi thấy gì vậy?",
       "scene": "🧑👃🐟",
       "ans": "我闻到鱼的味道",
       "opts": [
        {
         "txt": "我看见医生",
         "ico": "🩺",
         "py": "Wǒ kànjiàn yīshēng"
        },
        {
         "txt": "我闻到鱼的味道",
         "ico": "🐟",
         "py": "Wǒ wén dào yú de wèidào"
        },
        {
         "txt": "我找到钱包",
         "ico": "👛",
         "py": "Wǒ zhǎodào qiánbāo"
        }
       ],
       "qpy": "Nǐ wén dào shénme le?"
      },
      {
       "q": "这个蛋熟了吗？",
       "qvi": "Quả trứng này chín chưa?",
       "scene": "🥚🔥",
       "ans": "熟了",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "在北京",
         "ico": "📍",
         "py": "Zài Běijīng"
        },
        {
         "txt": "熟了",
         "ico": "✅",
         "py": "Shú le"
        }
       ],
       "qpy": "Zhè gè dàn shú le ma?"
      },
      {
       "q": "你的手脏吗？",
       "qvi": "Tay bạn có bẩn không?",
       "scene": "🧑✋🧼",
       "ans": "不脏",
       "opts": [
        {
         "txt": "不脏",
         "ico": "✨",
         "py": "Bù zāng"
        },
        {
         "txt": "在家里",
         "ico": "🏠",
         "py": "Zài jiā li"
        },
        {
         "txt": "三个人",
         "ico": "👥",
         "py": "Sān gè rén"
        }
       ],
       "qpy": "Nǐ de shǒu zāng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Khen món ăn và nhà hàng với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Đi ăn trưa cùng đồng nghiệp Trung Quốc, hỏi <i>\"这个菜的味道怎么样？\"</i> và tập trả lời <i>\"味道很好\"</i>.",
       "<b>Bước 2:</b> Nhận xét quán bằng tính từ láy: <i>\"这条鱼大大的\"</i>, <i>\"这碗方便面满满的\"</i>. Quay video 30 giây tự nói 3 câu như vậy.",
       "<b>Bước 3:</b> Nhắn tin tả bữa trưa hôm nay cho bạn: quán yên tĩnh (<i>\"他安静地坐下\"</i> dùng như mẫu), món gì, hương vị ra sao. Viết ít nhất 3 câu có dạng láy AA hoặc AABB."
      ]
     }
    },
    {
     "id": "2.4C",
     "name": "Bài 2.4C: Nấu nướng, bữa ăn và nếp sinh hoạt",
     "grammar": {
      "formulas": [
       "🧑 你 + 👀 先看看 + 📋 菜单",
       "🧑 他 + 💭 想了想 + 📌 事情",
       "👥 我们 + 💬 商量商量 + 🍱 午餐"
      ],
      "tip": "Lặp động từ làm hành động nhẹ nhàng, ngắn, thử xem: AA (看看, 做做), A一A (弄一弄), A了A (想了想, cho hành động đã xảy ra), ABAB với động từ hai chữ (休息休息, 商量商量, 讨论讨论). Với ABAB không thêm 一 vào giữa. Động từ lặp không đi với số lượng hay mức độ cụ thể.",
      "vn_tip": "Người Việt hay dịch \"một chút\" thành 一点 hoặc 很多: nói \"看一点菜单\". Đúng: lặp động từ, 看看菜单 hoặc 看一看. Lưu ý A了A là quá khứ (他想了想), còn AA/A一A dùng cho hiện tại, tương lai hoặc đề nghị. Đừng nói 休息了休息休息 hoặc 休一息休息."
     },
     "chunks": [
      {
       "scene": "🧑👀📋",
       "full": "你先看看菜单",
       "vi": "Bạn xem thực đơn trước đi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "先看看",
         "ico": "👀",
         "c": "v",
         "py": "xiān kàn kàn",
         "hv": "tiên khán khán"
        },
        {
         "t": "菜单",
         "ico": "📋",
         "c": "o",
         "py": "càidān",
         "hv": "thái đơn"
        }
       ],
       "traceWord": "菜单",
       "py": "Nǐ xiān kàn kàn càidān",
       "traceKey": "caidan",
       "traceInfo": [
        {
         "c": "菜",
         "py": "cài",
         "hv": "thái"
        },
        {
         "c": "单",
         "py": "dān",
         "hv": "đơn"
        }
       ]
      },
      {
       "scene": "🧑❓👨‍🍳",
       "full": "我想问问做法",
       "vi": "Tôi muốn hỏi thử cách làm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想问问",
         "ico": "❓",
         "c": "v",
         "py": "xiǎng wèn wèn",
         "hv": "tưởng vấn vấn"
        },
        {
         "t": "做法",
         "ico": "👨‍🍳",
         "c": "o",
         "py": "zuòfǎ",
         "hv": "tố pháp"
        }
       ],
       "traceWord": "做法",
       "py": "Wǒ xiǎng wèn wèn zuòfǎ",
       "traceKey": "zuofa",
       "traceInfo": [
        {
         "c": "做",
         "py": "zuò",
         "hv": "tố"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "👥😌☕",
       "full": "我们休息休息吧",
       "vi": "Chúng ta nghỉ một lát nhé",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "休息休息",
         "ico": "😌",
         "c": "v",
         "py": "xiūxi xiūxi",
         "hv": "hưu tức hưu tức"
        },
        {
         "t": "吧",
         "ico": "☕",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "休息",
       "py": "Wǒmen xiūxi xiūxi ba",
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
       "scene": "👥💬🍱",
       "full": "我们商量商量午餐",
       "vi": "Chúng ta bàn bạc chút về bữa trưa",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "商量商量",
         "ico": "💬",
         "c": "v",
         "py": "shāngliang shāngliang",
         "hv": "thương lượng thương lượng"
        },
        {
         "t": "午餐",
         "ico": "🍱",
         "c": "o",
         "py": "wǔcān",
         "hv": "ngọ xan"
        }
       ],
       "traceWord": "午餐",
       "py": "Wǒmen shāngliang shāngliang wǔcān",
       "traceKey": "wucan",
       "traceInfo": [
        {
         "c": "午",
         "py": "wǔ",
         "hv": "ngọ"
        },
        {
         "c": "餐",
         "py": "cān",
         "hv": "xan"
        }
       ]
      },
      {
       "scene": "🧑💭📌",
       "full": "他想了想那件事情",
       "vi": "Anh ấy suy nghĩ một lát về việc đó",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "想了想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng le xiǎng",
         "hv": "tưởng liễu tưởng"
        },
        {
         "t": "那件事情",
         "ico": "📌",
         "c": "o",
         "py": "nà jiàn shìqing",
         "hv": "na kiện sự tình"
        }
       ],
       "traceWord": "事情",
       "py": "Tā xiǎng le xiǎng nà jiàn shìqing",
       "traceKey": "shiqing",
       "traceInfo": [
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        },
        {
         "c": "情",
         "py": "qing",
         "hv": "tình"
        }
       ]
      },
      {
       "scene": "🌅🏠🍳",
       "full": "早晨我在家做做饭",
       "vi": "Buổi sáng tôi ở nhà nấu chút cơm",
       "parts": [
        {
         "t": "早晨我",
         "ico": "🌅",
         "c": "s",
         "py": "zǎochen wǒ",
         "hv": "tảo thần ngã"
        },
        {
         "t": "在家",
         "ico": "🏠",
         "c": "v",
         "py": "zàijiā",
         "hv": "tại gia"
        },
        {
         "t": "做做饭",
         "ico": "🍳",
         "c": "o",
         "py": "zuò zuòfàn",
         "hv": "tố tố phạn"
        }
       ],
       "traceWord": "早晨",
       "py": "Zǎochen wǒ zàijiā zuò zuòfàn",
       "traceKey": "zaochen",
       "traceInfo": [
        {
         "c": "早",
         "py": "zǎo",
         "hv": "tảo"
        },
        {
         "c": "晨",
         "py": "chen",
         "hv": "thần"
        }
       ]
      },
      {
       "scene": "🧑👶🏠",
       "full": "今天我在家带带孩子",
       "vi": "Hôm nay tôi ở nhà trông con một chút",
       "parts": [
        {
         "t": "今天我",
         "ico": "🧑",
         "c": "s",
         "py": "jīntiān wǒ",
         "hv": "kim thiên ngã"
        },
        {
         "t": "在家",
         "ico": "🏠",
         "c": "v",
         "py": "zàijiā",
         "hv": "tại gia"
        },
        {
         "t": "带带孩子",
         "ico": "👶",
         "c": "o",
         "py": "dài dài háizi",
         "hv": "đới đới hài tử"
        }
       ],
       "traceWord": "带",
       "py": "Jīntiān wǒ zàijiā dài dài háizi",
       "traceKey": "dai",
       "traceInfo": [
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        }
       ]
      },
      {
       "scene": "🧑🤝💻🔧",
       "full": "你帮我弄一弄电脑",
       "vi": "Bạn giúp tôi xử lý máy tính một chút nhé",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "帮我",
         "ico": "🤝",
         "c": "v",
         "py": "bāng wǒ",
         "hv": "bang ngã"
        },
        {
         "t": "弄一弄电脑",
         "ico": "💻",
         "c": "o",
         "py": "nòng yī nòng diànnǎo",
         "hv": "lộng nhất lộng điện não"
        }
       ],
       "traceWord": "弄",
       "py": "Nǐ bāng wǒ nòng yī nòng diànnǎo",
       "traceKey": "nong",
       "traceInfo": [
        {
         "c": "弄",
         "py": "nòng",
         "hv": "lộng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "做饭的时候先倒什么？",
       "qvi": "Khi nấu ăn thì đổ gì vào trước?",
       "scene": "🍳🫗",
       "ans": "先倒油",
       "opts": [
        {
         "txt": "这里很方便",
         "ico": "👍",
         "py": "Zhèlǐ hěn fāngbiàn"
        },
        {
         "txt": "先倒油",
         "ico": "🫗",
         "py": "Xiān dào yóu"
        },
        {
         "txt": "先去医院",
         "ico": "🏥",
         "py": "Xiān qù yīyuàn"
        }
       ],
       "qpy": "Zuòfàn de shíhou xiān dào shénme?"
      },
      {
       "q": "你早餐吃什么？",
       "qvi": "Bữa sáng bạn ăn gì?",
       "scene": "🧑🌅🥟",
       "ans": "我吃包子",
       "opts": [
        {
         "txt": "我去洗澡",
         "ico": "🛁",
         "py": "Wǒ qù xǐzǎo"
        },
        {
         "txt": "我想午睡",
         "ico": "😴",
         "py": "Wǒ xiǎng wǔshuì"
        },
        {
         "txt": "我吃包子",
         "ico": "🥟",
         "py": "Wǒ chī bāozi"
        }
       ],
       "qpy": "Nǐ zǎocān chī shénme?"
      },
      {
       "q": "你们晚餐吃什么？",
       "qvi": "Bữa tối các bạn ăn gì?",
       "scene": "👥🌙🍚",
       "ans": "我们吃米饭",
       "opts": [
        {
         "txt": "我们吃米饭",
         "ico": "🍚",
         "py": "Wǒmen chī mǐfàn"
        },
        {
         "txt": "我们在楼上",
         "ico": "🏢",
         "py": "Wǒmen zài lóu shàng"
        },
        {
         "txt": "我们有三个人",
         "ico": "👥",
         "py": "Wǒmen yǒu sān gè rén"
        }
       ],
       "qpy": "Nǐmen wǎncān chī shénme?"
      },
      {
       "q": "你习惯这里的生活吗？",
       "qvi": "Bạn có quen với cuộc sống ở đây không?",
       "scene": "🧑🏙️❓",
       "ans": "我很习惯",
       "opts": [
        {
         "txt": "我去上班",
         "ico": "💼",
         "py": "Wǒ qù shàngbān"
        },
        {
         "txt": "我很习惯",
         "ico": "😊",
         "py": "Wǒ hěn xíguàn"
        },
        {
         "txt": "他在喝茶",
         "ico": "🍵",
         "py": "Tā zài hē chá"
        }
       ],
       "qpy": "Nǐ xíguàn zhèlǐ de shēnghuó ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bàn bữa trưa và nếp sinh hoạt với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn nhóm công ty rủ mọi người: <i>\"我们商量商量午餐\"</i>, rồi gợi ý <i>\"你先看看菜单\"</i>.",
       "<b>Bước 2:</b> Gọi điện hỏi một người bạn Trung Quốc cách nấu món bạn thích: <i>\"我想问问做法\"</i>. Tự nói thành tiếng 3 câu về thói quen buổi sáng của bạn bằng động từ lặp, ví dụ <i>\"早晨我在家做做饭\"</i>.",
       "<b>Bước 3:</b> Nhờ đồng nghiệp giúp việc nhỏ bằng <i>\"你帮我弄一弄电脑\"</i>, rồi kể cuộc sống hằng ngày bằng AA, A一A, A了A, ABAB, mỗi kiểu ít nhất một câu."
      ]
     }
    }
   ]
  },
  "2.5": {
   "lessons": [
    {
     "id": "2.5A",
     "name": "Bài 2.5A: Phương tiện đi lại và hướng đi",
     "grammar": {
      "formulas": [
       "🚌 公交车 + ➡️ 往 + 📍 前开",
       "🧑 司机 + 👀 向 + 📍 左边看",
       "🧑 你 + ➡️ 往 + 📍 右边站"
      ],
      "tip": "往 (wǎng, âm Hán Việt: vãng) đứng trước từ chỉ phương hướng, đi với động từ chuyển động: 往前走, 往东开. 向 (xiàng, hướng) cũng chỉ hướng, và còn dùng được với người: 向他问好. Hướng nằm SAU 往/向, động từ nằm cuối cụm.",
      "vn_tip": "Tiếng Việt nói \"đi về phía trước\" nên người học hay đặt động từ trước: sai 走往前. Trong tiếng Trung giới từ + hướng đứng TRƯỚC động từ: 往前走, 往右边站."
     },
     "chunks": [
      {
       "scene": "🚌➡️🛣️",
       "full": "公交车往前开",
       "vi": "Xe buýt chạy về phía trước",
       "parts": [
        {
         "t": "公交车",
         "ico": "🚌",
         "c": "s",
         "py": "gōngjiāochē",
         "hv": "công giao xa"
        },
        {
         "t": "往",
         "ico": "➡️",
         "c": "v",
         "py": "wǎng",
         "hv": "vãng"
        },
        {
         "t": "前开",
         "ico": "🛣️",
         "c": "o",
         "py": "qián kāi",
         "hv": "tiền khai"
        }
       ],
       "traceWord": "公交车",
       "py": "Gōngjiāochē wǎng qián kāi",
       "traceKey": "gongjiaoche",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "交",
         "py": "jiāo",
         "hv": "giao"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "🧑🚲🏢",
       "full": "他骑自行车上班",
       "vi": "Anh ấy đi xe đạp đi làm",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "骑",
         "ico": "🚲",
         "c": "v",
         "py": "qí",
         "hv": "kỵ"
        },
        {
         "t": "自行车上班",
         "ico": "🏢",
         "c": "o",
         "py": "zìxíngchē shàngbān",
         "hv": "tự hành xa thượng ban"
        }
       ],
       "traceWord": "自行车",
       "py": "Tā qí zìxíngchē shàngbān",
       "traceKey": "zixingche",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "👥🚇🏢",
       "full": "我们坐地铁去公司",
       "vi": "Chúng tôi đi tàu điện ngầm đến công ty",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "坐",
         "ico": "💺",
         "c": "v",
         "py": "zuò",
         "hv": "tọa"
        },
        {
         "t": "地铁去公司",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiě qù gōngsī",
         "hv": "địa thiết khứ công ti"
        }
       ],
       "traceWord": "地铁",
       "py": "Wǒmen zuò dìtiě qù gōngsī",
       "traceKey": "ditie",
       "traceInfo": [
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        },
        {
         "c": "铁",
         "py": "tiě",
         "hv": "thiết"
        }
       ]
      },
      {
       "scene": "🚖👀⬅️",
       "full": "司机向左边看",
       "vi": "Tài xế nhìn sang bên trái",
       "parts": [
        {
         "t": "司机",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "sījī",
         "hv": "ti cơ"
        },
        {
         "t": "向",
         "ico": "👀",
         "c": "v",
         "py": "xiàng",
         "hv": "hướng"
        },
        {
         "t": "左边看",
         "ico": "⬅️",
         "c": "o",
         "py": "zuǒbian kàn",
         "hv": "tả biên khán"
        }
       ],
       "traceWord": "司机",
       "py": "Sījī xiàng zuǒbian kàn",
       "traceKey": "siji",
       "traceInfo": [
        {
         "c": "司",
         "py": "sī",
         "hv": "ti"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "🧑➡️🧍",
       "full": "你往右边站一下",
       "vi": "Bạn đứng sang bên phải một chút",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "往",
         "ico": "➡️",
         "c": "v",
         "py": "wǎng",
         "hv": "vãng"
        },
        {
         "t": "右边站一下",
         "ico": "🧍",
         "c": "o",
         "py": "yòubian zhàn yī xià",
         "hv": "hữu biên trạm nhất hạ"
        }
       ],
       "traceWord": "站",
       "py": "Nǐ wǎng yòubian zhàn yī xià",
       "traceKey": "zhan",
       "traceInfo": [
        {
         "c": "站",
         "py": "zhàn",
         "hv": "trạm"
        }
       ]
      },
      {
       "scene": "🚌✈️",
       "full": "这辆公共汽车去机场",
       "vi": "Chiếc xe buýt này đi sân bay",
       "parts": [
        {
         "t": "这辆公共汽车",
         "ico": "🚌",
         "c": "s",
         "py": "zhè liàng gōnggòng qìchē",
         "hv": "giá lượng công cộng khí xa"
        },
        {
         "t": "去",
         "ico": "➡️",
         "c": "v",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "t": "机场",
         "ico": "✈️",
         "c": "o",
         "py": "jīchǎng",
         "hv": "cơ trường"
        }
       ],
       "traceWord": "公共汽车",
       "py": "Zhè liàng gōnggòng qìchē qù jīchǎng",
       "traceKey": "gonggongqiche",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "共",
         "py": "gòng",
         "hv": "cộng"
        },
        {
         "c": "汽",
         "py": "qì",
         "hv": "khí"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "🚖🧑‍✈️⬅️",
       "full": "出租车司机往西边开",
       "vi": "Tài xế taxi chạy về phía tây",
       "parts": [
        {
         "t": "出租车司机",
         "ico": "🚖",
         "c": "s",
         "py": "chūzūchē sījī",
         "hv": "xuất tô xa ti cơ"
        },
        {
         "t": "往",
         "ico": "➡️",
         "c": "v",
         "py": "wǎng",
         "hv": "vãng"
        },
        {
         "t": "西边开",
         "ico": "🧭",
         "c": "o",
         "py": "xībian kāi",
         "hv": "tây biên khai"
        }
       ],
       "traceWord": "出租车",
       "py": "Chūzūchē sījī wǎng xībian kāi",
       "traceKey": "chuzuche",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "租",
         "py": "zū",
         "hv": "tô"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "📍🏢📏",
       "full": "从这儿到公司有五公里",
       "vi": "Từ đây đến công ty có năm cây số",
       "parts": [
        {
         "t": "从这儿到公司",
         "ico": "📍",
         "c": "s",
         "py": "cóng zhèr dào gōngsī",
         "hv": "tòng giá nhi đáo công ti"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "五公里",
         "ico": "📏",
         "c": "o",
         "py": "wǔ gōnglǐ",
         "hv": "ngũ công lý"
        }
       ],
       "traceWord": "公里",
       "py": "Cóng zhèr dào gōngsī yǒu wǔ gōnglǐ",
       "traceKey": "gongli",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你怎么去地铁站？",
       "qvi": "Bạn đến ga tàu điện ngầm bằng cách nào?",
       "scene": "🧑🚲🚇",
       "ans": "我骑车去",
       "opts": [
        {
         "txt": "我很高兴",
         "ico": "😊",
         "py": "Wǒ hěn gāoxìng"
        },
        {
         "txt": "我骑车去",
         "ico": "🚲",
         "py": "Wǒ qí chē qù"
        },
        {
         "txt": "他是我同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ tóngxué"
        }
       ],
       "qpy": "Nǐ zěnme qù dìtiězhàn?"
      },
      {
       "q": "你想坐船还是坐飞机？",
       "qvi": "Bạn muốn đi tàu thủy hay máy bay?",
       "scene": "🚢✈️",
       "ans": "我想坐船",
       "opts": [
        {
         "txt": "我想吃鸡蛋",
         "ico": "🥚",
         "py": "Wǒ xiǎng chī jīdàn"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        },
        {
         "txt": "我想坐船",
         "ico": "🚢",
         "py": "Wǒ xiǎng zuò chuán"
        }
       ],
       "qpy": "Nǐ xiǎng zuò chuán háishi zuò fēijī?"
      },
      {
       "q": "这里有座位吗？",
       "qvi": "Ở đây có chỗ ngồi không?",
       "scene": "💺🚌",
       "ans": "请坐下",
       "opts": [
        {
         "txt": "请坐下",
         "ico": "💺",
         "py": "Qǐng zuò xia"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "现在是晚上",
         "ico": "🌙",
         "py": "Xiànzài shì wǎnshang"
        }
       ],
       "qpy": "Zhèlǐ yǒu zuòwèi ma?"
      },
      {
       "q": "司机往哪边开？",
       "qvi": "Tài xế chạy về phía nào?",
       "scene": "🧑‍✈️🧭",
       "ans": "往东边开",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "🧑‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "我们都是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒmen dōu shì xuéshēng"
        },
        {
         "txt": "往东边开",
         "ico": "🧭",
         "py": "Wǎng dōngbian kāi"
        }
       ],
       "qpy": "Sījī wǎng nǎ biān kāi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chỉ đường cho tài xế taxi",
      "steps": [
       "<b>Bước 1:</b> Mở bản đồ trên điện thoại, chọn một điểm đến quen thuộc (công ty, ga tàu điện ngầm). Nói thành tiếng cách đi: <i>\"从这儿到公司有五公里\"</i>.",
       "<b>Bước 2:</b> Đóng vai bạn ngồi taxi và ra lệnh cho tài xế từng đoạn đường: <i>\"出租车司机往西边开\"</i>, <i>\"往前开\"</i>, rồi tự đặt thêm 2 câu với 往 và 向.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp hỏi họ đi làm bằng gì (<i>\"你怎么去地铁站？\"</i>) và tự trả lời bằng 2 phương tiện khác nhau."
      ]
     }
    },
    {
     "id": "2.5B",
     "name": "Bài 2.5B: Hỏi đường và khoảng cách",
     "grammar": {
      "formulas": [
       "🏢 公司 + 📏 离 + 🚇 地铁站很近",
       "🌏 北方 + 📏 离 + 📍 这儿很远",
       "🏪 超市 + 📍 在 + 🏢 公司对面"
      ],
      "tip": "Khoảng cách dùng 离 (lí, ly): A + 离 + B + (rất) gần/xa. Ví dụ 公司离地铁站很近. A là điểm xuất phát được so sánh, B là mốc; tính từ 近 (jìn, cận) hay 远 (yuǎn, viễn) đứng sau, thường có 很.",
      "vn_tip": "Người Việt hay nói \"nhà tôi xa công ty\" rồi dịch thành 我家远公司 hoặc dùng 从. Phải có 离: 我家离公司很远. Tính từ thường cần 很 đứng trước, không để trống."
     },
     "chunks": [
      {
       "scene": "🏢📏🚇",
       "full": "公司离地铁站很近",
       "vi": "Công ty gần ga tàu điện ngầm",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "离",
         "ico": "📏",
         "c": "v",
         "py": "lí",
         "hv": "ly"
        },
        {
         "t": "地铁站很近",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiězhàn hěn jìn",
         "hv": "địa thiết trạm ngận cận"
        }
       ],
       "traceWord": "离",
       "py": "Gōngsī lí dìtiězhàn hěn jìn",
       "traceKey": "li",
       "traceInfo": [
        {
         "c": "离",
         "py": "lí",
         "hv": "ly"
        }
       ]
      },
      {
       "scene": "🌏📏📍",
       "full": "北方离这儿很远",
       "vi": "Miền bắc cách đây rất xa",
       "parts": [
        {
         "t": "北方",
         "ico": "🧭",
         "c": "s",
         "py": "běifāng",
         "hv": "bắc phương"
        },
        {
         "t": "离",
         "ico": "📏",
         "c": "v",
         "py": "lí",
         "hv": "ly"
        },
        {
         "t": "这儿很远",
         "ico": "📍",
         "c": "o",
         "py": "zhèr hěn yuǎn",
         "hv": "giá nhi ngận viễn"
        }
       ],
       "traceWord": "北方",
       "py": "Běifāng lí zhèr hěn yuǎn",
       "traceKey": "beifang",
       "traceInfo": [
        {
         "c": "北",
         "py": "běi",
         "hv": "bắc"
        },
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        }
       ]
      },
      {
       "scene": "🚻❓🧭",
       "full": "洗手间在哪个方向",
       "vi": "Nhà vệ sinh ở hướng nào",
       "parts": [
        {
         "t": "洗手间",
         "ico": "🚻",
         "c": "s",
         "py": "xǐshǒujiān",
         "hv": "tẩy thủ gian"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "哪个方向",
         "ico": "🧭",
         "c": "o",
         "py": "nǎ gè fāngxiàng",
         "hv": "na cá phương hướng"
        }
       ],
       "traceWord": "方向",
       "py": "Xǐshǒujiān zài nǎ gè fāngxiàng",
       "traceKey": "fangxiang",
       "traceInfo": [
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        },
        {
         "c": "向",
         "py": "xiàng",
         "hv": "hướng"
        }
       ]
      },
      {
       "scene": "🧑🗺️💬",
       "full": "我想向他问路",
       "vi": "Tôi muốn hỏi đường anh ấy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "向他问路",
         "ico": "🗺️",
         "c": "o",
         "py": "xiàng tā wènlù",
         "hv": "hướng tha vấn lộ"
        }
       ],
       "traceWord": "问路",
       "py": "Wǒ xiǎng xiàng tā wènlù",
       "traceKey": "wenlu",
       "traceInfo": [
        {
         "c": "问",
         "py": "wèn",
         "hv": "vấn"
        },
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        }
       ]
      },
      {
       "scene": "🏪↔️🏢",
       "full": "超市在公司对面",
       "vi": "Siêu thị ở đối diện công ty",
       "parts": [
        {
         "t": "超市",
         "ico": "🏪",
         "c": "s",
         "py": "chāoshì",
         "hv": "siêu thị"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "公司对面",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī duìmiàn",
         "hv": "công ti đối diện"
        }
       ],
       "traceWord": "对面",
       "py": "Chāoshì zài gōngsī duìmiàn",
       "traceKey": "duimian",
       "traceInfo": [
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "☀️🌡️❄️",
       "full": "南方的天气比北方热",
       "vi": "Thời tiết miền nam nóng hơn miền bắc",
       "parts": [
        {
         "t": "南方的天气",
         "ico": "☀️",
         "c": "s",
         "py": "nánfāng de tiānqì",
         "hv": "nam phương đích thiên khí"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "北方热",
         "ico": "🌡️",
         "c": "o",
         "py": "běifāng rè",
         "hv": "bắc phương nhiệt"
        }
       ],
       "traceWord": "南方",
       "py": "Nánfāng de tiānqì bǐ běifāng rè",
       "traceKey": "nanfang",
       "traceInfo": [
        {
         "c": "南",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        }
       ]
      },
      {
       "scene": "🧑🚪🏢",
       "full": "他马上离开公司",
       "vi": "Anh ấy rời công ty ngay",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "马上离开",
         "ico": "🚶",
         "c": "v",
         "py": "mǎshàng líkāi",
         "hv": "mã thượng ly khai"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "离开",
       "py": "Tā mǎshàng líkāi gōngsī",
       "traceKey": "likai",
       "traceInfo": [
        {
         "c": "离",
         "py": "lí",
         "hv": "ly"
        },
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        }
       ]
      },
      {
       "scene": "👥➡️✈️",
       "full": "我们直接去机场",
       "vi": "Chúng tôi đi thẳng đến sân bay",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "直接去",
         "ico": "➡️",
         "c": "v",
         "py": "zhíjiē qù",
         "hv": "trực tiếp khứ"
        },
        {
         "t": "机场",
         "ico": "✈️",
         "c": "o",
         "py": "jīchǎng",
         "hv": "cơ trường"
        }
       ],
       "traceWord": "直接",
       "py": "Wǒmen zhíjiē qù jīchǎng",
       "traceKey": "zhijie",
       "traceInfo": [
        {
         "c": "直",
         "py": "zhí",
         "hv": "trực"
        },
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "越南在中国的哪个方向？",
       "qvi": "Việt Nam nằm ở hướng nào của Trung Quốc?",
       "scene": "🇻🇳🇨🇳🧭",
       "ans": "越南在中国的西南",
       "opts": [
        {
         "txt": "越南在中国的东北",
         "ico": "↗️",
         "py": "Yuènán zài Zhōngguó de dōngběi"
        },
        {
         "txt": "越南在中国的西南",
         "ico": "↙️",
         "py": "Yuènán zài Zhōngguó de xīnán"
        },
        {
         "txt": "越南在中国的北方",
         "ico": "⬆️",
         "py": "Yuènán zài Zhōngguó de běifāng"
        }
       ],
       "qpy": "Yuènán zài Zhōngguó de nǎ gè fāngxiàng?"
      },
      {
       "q": "你喜欢东方的电影还是西方的电影？",
       "qvi": "Bạn thích phim phương Đông hay phim phương Tây?",
       "scene": "🎬🌏",
       "ans": "我喜欢东方的电影",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        },
        {
         "txt": "我喜欢东方的电影",
         "ico": "🎬",
         "py": "Wǒ xǐhuan dōngfāng de diànyǐng"
        }
       ],
       "qpy": "Nǐ xǐhuan dōngfāng de diànyǐng háishi xīfāng de diànyǐng?"
      },
      {
       "q": "西北的对面是哪边？",
       "qvi": "Đối diện với tây bắc là hướng nào?",
       "scene": "🧭↔️",
       "ans": "东南",
       "opts": [
        {
         "txt": "东北",
         "ico": "↗️",
         "py": "Dōngběi"
        },
        {
         "txt": "东南",
         "ico": "↘️",
         "py": "Dōngnán"
        },
        {
         "txt": "西南",
         "ico": "↙️",
         "py": "Xīnán"
        }
       ],
       "qpy": "Xīběi de duìmiàn shì nǎ biān?"
      },
      {
       "q": "越南离中国近吗？",
       "qvi": "Việt Nam có gần Trung Quốc không?",
       "scene": "🇻🇳📏🇨🇳",
       "ans": "越南离中国很近",
       "opts": [
        {
         "txt": "越南离中国很近",
         "ico": "📍",
         "py": "Yuènán lí Zhōngguó hěn jìn"
        },
        {
         "txt": "越南离中国很远",
         "ico": "✈️",
         "py": "Yuènán lí Zhōngguó hěn yuǎn"
        },
        {
         "txt": "越南在中国的北方",
         "ico": "⬆️",
         "py": "Yuènán zài Zhōngguó de běifāng"
        }
       ],
       "qpy": "Yuènán lí Zhōngguó jìn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đường người qua đường",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh nơi bạn đang ở, chọn 3 địa điểm gần đó (siêu thị, nhà vệ sinh, ga tàu). Nói thành tiếng: <i>\"超市在公司对面\"</i> và tự đặt thêm 2 câu tương tự.",
       "<b>Bước 2:</b> Đóng vai người lạ cần giúp: mở đầu bằng <i>\"我想向你问路\"</i>, rồi hỏi <i>\"洗手间在哪个方向？\"</i> và nghe (hoặc tự nói) câu trả lời có hướng đông, tây, nam, bắc.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp mô tả khoảng cách từ nhà bạn đến công ty bằng 离, ví dụ <i>\"我家离公司很近\"</i>, và hỏi nhà họ có xa không."
      ]
     }
    },
    {
     "id": "2.5C",
     "name": "Bài 2.5C: Giao thông và bãi đỗ xe",
     "grammar": {
      "formulas": [
       "🧑 他 + 🚗 停车 + ➡️ 去买水",
       "👥 我们 + 🚗 开车 + 🅿️ 去停车场",
       "🧑 他 + 🛍️ 上街 + 🛒 买东西"
      ],
      "tip": "Câu liên động: một chủ ngữ làm hai hành động nối tiếp, không có từ nối. Mẫu: S + V1 (+ O1) + V2 (+ O2). Thứ tự câu trùng với thứ tự thời gian: 开车去公司 là lái xe trước rồi mới đến công ty. 去 (qù, khứ) chỉ mục đích thường đứng ngay trước hành động thứ hai.",
      "vn_tip": "Tiếng Việt hay chen \"rồi\", \"để\" giữa hai hành động. Tiếng Trung không cần: nói 他上街买东西, không thêm 然后 hay 为了. Cũng đừng đảo thứ tự: không nói 买东西上街."
     },
     "chunks": [
      {
       "scene": "🧑🚗🛣️",
       "full": "司机停在路边",
       "vi": "Tài xế dừng xe bên lề đường",
       "parts": [
        {
         "t": "司机",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "sījī",
         "hv": "ti cơ"
        },
        {
         "t": "停",
         "ico": "🛑",
         "c": "v",
         "py": "tíng",
         "hv": "đình"
        },
        {
         "t": "在路边",
         "ico": "🛣️",
         "c": "o",
         "py": "zài lù biān",
         "hv": "tại lộ biên"
        }
       ],
       "traceWord": "路边",
       "py": "Sījī tíng zài lù biān",
       "traceKey": "lubian",
       "traceInfo": [
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🧑🚗💧",
       "full": "他停车去买水",
       "vi": "Anh ấy dừng xe đi mua nước",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "停车",
         "ico": "🚗",
         "c": "v",
         "py": "tíngchē",
         "hv": "đình xa"
        },
        {
         "t": "去买水",
         "ico": "💧",
         "c": "o",
         "py": "qù mǎi shuǐ",
         "hv": "khứ mãi thủy"
        }
       ],
       "traceWord": "停车",
       "py": "Tā tíngchē qù mǎi shuǐ",
       "traceKey": "tingche",
       "traceInfo": [
        {
         "c": "停",
         "py": "tíng",
         "hv": "đình"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "👥🚗🅿️",
       "full": "我们开车去停车场",
       "vi": "Chúng tôi lái xe đến bãi đỗ xe",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "开车",
         "ico": "🚗",
         "c": "v",
         "py": "kāichē",
         "hv": "khai xa"
        },
        {
         "t": "去停车场",
         "ico": "🅿️",
         "c": "o",
         "py": "qù tíngchēchǎng",
         "hv": "khứ đình xa trường"
        }
       ],
       "traceWord": "停车场",
       "py": "Wǒmen kāichē qù tíngchēchǎng",
       "traceKey": "tingchechang",
       "traceInfo": [
        {
         "c": "停",
         "py": "tíng",
         "hv": "đình"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🧑🏙️🛍️",
       "full": "他上街买东西",
       "vi": "Anh ấy ra phố mua đồ",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "上街",
         "ico": "🏙️",
         "c": "v",
         "py": "shàng jiē",
         "hv": "thượng nhai"
        },
        {
         "t": "买东西",
         "ico": "🛍️",
         "c": "o",
         "py": "mǎi dōngxi",
         "hv": "mãi đông tây"
        }
       ],
       "traceWord": "街",
       "py": "Tā shàng jiē mǎi dōngxi",
       "traceKey": "jie",
       "traceInfo": [
        {
         "c": "街",
         "py": "jiē",
         "hv": "nhai"
        }
       ]
      },
      {
       "scene": "🚗⬇️🚪",
       "full": "车辆从入口开进去",
       "vi": "Xe cộ chạy vào từ lối vào",
       "parts": [
        {
         "t": "车辆",
         "ico": "🚗",
         "c": "s",
         "py": "chēliàng",
         "hv": "xa lượng"
        },
        {
         "t": "从",
         "ico": "➡️",
         "c": "v",
         "py": "cóng",
         "hv": "tòng"
        },
        {
         "t": "入口开进去",
         "ico": "🚪",
         "c": "o",
         "py": "rùkǒu kāi jìnqù",
         "hv": "nhập khẩu khai tiến khứ"
        }
       ],
       "traceWord": "入口",
       "py": "Chēliàng cóng rùkǒu kāi jìnqù",
       "traceKey": "rukou",
       "traceInfo": [
        {
         "c": "入",
         "py": "rù",
         "hv": "nhập"
        },
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        }
       ]
      },
      {
       "scene": "🧑🚪⏳",
       "full": "我在出口等你",
       "vi": "Tôi đợi bạn ở lối ra",
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
         "t": "出口等你",
         "ico": "🚪",
         "c": "o",
         "py": "chūkǒu děng nǐ",
         "hv": "xuất khẩu đẳng nễ"
        }
       ],
       "traceWord": "出口",
       "py": "Wǒ zài chūkǒu děng nǐ",
       "traceKey": "chukou",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        }
       ]
      },
      {
       "scene": "🧑🛣️🏫",
       "full": "他经过路口去学校",
       "vi": "Anh ấy đi qua ngã tư đến trường",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "经过",
         "ico": "🚶",
         "c": "v",
         "py": "jīngguò",
         "hv": "kinh quá"
        },
        {
         "t": "路口去学校",
         "ico": "🏫",
         "c": "o",
         "py": "lùkǒu qù xuéxiào",
         "hv": "lộ khẩu khứ học hiệu"
        }
       ],
       "traceWord": "经过",
       "py": "Tā jīngguò lùkǒu qù xuéxiào",
       "traceKey": "jingguo",
       "traceInfo": [
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        },
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        }
       ]
      },
      {
       "scene": "🚗🏢⚠️",
       "full": "开车去公司要小心",
       "vi": "Lái xe đến công ty phải cẩn thận",
       "parts": [
        {
         "t": "开车去公司",
         "ico": "🚗",
         "c": "s",
         "py": "kāichē qù gōngsī",
         "hv": "khai xa khứ công ti"
        },
        {
         "t": "要",
         "ico": "❗",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "小心",
         "ico": "⚠️",
         "c": "o",
         "py": "xiǎoxīn",
         "hv": "tiểu tâm"
        }
       ],
       "traceWord": "小心",
       "py": "Kāichē qù gōngsī yào xiǎoxīn",
       "traceKey": "xiaoxin",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这条公路上车多吗？",
       "qvi": "Trên con đường quốc lộ này có nhiều xe không?",
       "scene": "🛣️🚗🚙",
       "ans": "车很多",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🧑‍🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "车很多",
         "ico": "🚗",
         "py": "Chē hěn duō"
        },
        {
         "txt": "水果很便宜",
         "ico": "🍎",
         "py": "Shuǐguǒ hěn piányi"
        }
       ],
       "qpy": "Zhè tiáo gōnglù shàng chē duō ma?"
      },
      {
       "q": "这条道路安全吗？",
       "qvi": "Con đường này có an toàn không?",
       "scene": "🛣️✅",
       "ans": "很安全",
       "opts": [
        {
         "txt": "很好吃",
         "ico": "😋",
         "py": "Hěn hǎochī"
        },
        {
         "txt": "很可爱",
         "ico": "🐱",
         "py": "Hěn kě'ài"
        },
        {
         "txt": "很安全",
         "ico": "✅",
         "py": "Hěn ānquán"
        }
       ],
       "qpy": "Zhè tiáo dàolù ānquán ma?"
      },
      {
       "q": "这里的交通怎么样？",
       "qvi": "Giao thông ở đây thế nào?",
       "scene": "🚦🚌🚇",
       "ans": "交通很方便",
       "opts": [
        {
         "txt": "交通很方便",
         "ico": "🚇",
         "py": "Jiāotōng hěn fāngbiàn"
        },
        {
         "txt": "这里的水果很便宜",
         "ico": "🍎",
         "py": "Zhèlǐ de shuǐguǒ hěn piányi"
        },
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        }
       ],
       "qpy": "Zhèlǐ de jiāotōng zěnmeyàng?"
      },
      {
       "q": "车来了，行人要做什么？",
       "qvi": "Xe đến rồi, người đi bộ phải làm gì?",
       "scene": "🚗🚶🛑",
       "ans": "要站住",
       "opts": [
        {
         "txt": "要吃面包",
         "ico": "🍞",
         "py": "Yào chī miànbāo"
        },
        {
         "txt": "要买电脑",
         "ico": "💻",
         "py": "Yào mǎi diànnǎo"
        },
        {
         "txt": "要站住",
         "ico": "🛑",
         "py": "Yào zhànzhù"
        }
       ],
       "qpy": "Chē lái le xíngrén yào zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn gặp ở bãi đỗ xe",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc nói thành tiếng cho một đồng nghiệp: bạn sẽ lái xe đến công ty, rồi gặp họ ở lối ra bãi đỗ xe: <i>\"我们开车去停车场\"</i>, <i>\"我在出口等你\"</i>.",
       "<b>Bước 2:</b> Đóng vai bảo vệ bãi xe: nói cho khách biết xe vào từ đâu, ra từ đâu (<i>\"车辆从入口开进去\"</i>) và nhắc họ <i>\"开车去公司要小心\"</i>.",
       "<b>Bước 3:</b> Mô tả giao thông quanh nơi bạn ở trong 4 câu, dùng ít nhất 2 câu liên động như <i>\"他上街买东西\"</i> và hỏi bạn bè <i>\"这里的交通怎么样？\"</i>."
      ]
     }
    }
   ]
  },
  "2.6": {
   "lessons": [
    {
     "id": "2.6A",
     "name": "Bài 2.6A: Đi nước ngoài, hộ chiếu, sân bay",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 去过 + 🏙️ 北京",
       "❓ 你 + 见过 + 她吗？",
       "🚫 我 + 没 + 去过 + 🌏 国外"
      ],
      "tip": "Động từ + 过 (guo) diễn tả đã từng trải qua một việc trong quá khứ: 去过 (qùguo, khứ quá), 见过 (jiànguo, kiến quá). Phủ định dùng 没 + động từ + 过, câu hỏi thêm 吗 hoặc hỏi 有没有……过.",
      "vn_tip": "Người Việt hay nói \"Tôi đã đi Bắc Kinh\" rồi dịch thành 我去了北京, nghĩa là đã đi (xong), không phải \"từng đi\". Muốn nói từng trải nghiệm phải dùng 去过. Đừng dùng 不 với 过: nói 没去过, không nói 不去过."
     },
     "chunks": [
      {
       "scene": "🧑✈️🏙️",
       "full": "我去过北京",
       "vi": "Tôi từng đến Bắc Kinh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "去过",
         "ico": "✈️",
         "c": "v",
         "py": "qù guò",
         "hv": "khứ quá"
        },
        {
         "t": "北京",
         "ico": "🏙️",
         "c": "o",
         "py": "Běijīng",
         "hv": "bắc kinh"
        }
       ],
       "traceWord": "去过",
       "py": "Wǒ qù guò Běijīng",
       "traceKey": "quguo",
       "traceInfo": [
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        }
       ]
      },
      {
       "scene": "🧑👀👩❓",
       "full": "你见过她吗",
       "vi": "Bạn đã từng gặp cô ấy chưa?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "见过",
         "ico": "👀",
         "c": "v",
         "py": "jiànguo",
         "hv": "kiến quá"
        },
        {
         "t": "她吗",
         "ico": "👩",
         "c": "o",
         "py": "tā ma",
         "hv": "tha ma"
        }
       ],
       "traceWord": "见过",
       "py": "Nǐ jiànguo tā ma",
       "traceKey": "jianguo",
       "traceInfo": [
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        },
        {
         "c": "过",
         "py": "guo",
         "hv": "quá"
        }
       ]
      },
      {
       "scene": "👨🌏🛫",
       "full": "小王明年要出国",
       "vi": "Sang năm Tiểu Vương sẽ ra nước ngoài",
       "parts": [
        {
         "t": "小王",
         "ico": "👨",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "明年要",
         "ico": "📅",
         "c": "v",
         "py": "míngnián yào",
         "hv": "minh niên yếu"
        },
        {
         "t": "出国",
         "ico": "🌏",
         "c": "o",
         "py": "chūguó",
         "hv": "xuất quốc"
        }
       ],
       "traceWord": "出国",
       "py": "Xiǎowáng míngnián yào chūguó",
       "traceKey": "chuguo",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        }
       ]
      },
      {
       "scene": "📘🎒📍",
       "full": "我的护照在包里",
       "vi": "Hộ chiếu của tôi ở trong túi",
       "parts": [
        {
         "t": "我的护照",
         "ico": "📘",
         "c": "s",
         "py": "wǒ de hùzhào",
         "hv": "ngã đích hộ chiếu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "包里",
         "ico": "🎒",
         "c": "o",
         "py": "bāo lǐ",
         "hv": "bao lý"
        }
       ],
       "traceWord": "护照",
       "py": "Wǒ de hùzhào zài bāo lǐ",
       "traceKey": "huzhao",
       "traceInfo": [
        {
         "c": "护",
         "py": "hù",
         "hv": "hộ"
        },
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        }
       ]
      },
      {
       "scene": "👫🚗🛫",
       "full": "我们一起出发吧",
       "vi": "Chúng ta cùng xuất phát nhé",
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
         "t": "出发吧",
         "ico": "🚗",
         "c": "o",
         "py": "chūfā ba",
         "hv": "xuất phát ba"
        }
       ],
       "traceWord": "出发",
       "py": "Wǒmen yīqǐ chūfā ba",
       "traceKey": "chufa",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        }
       ]
      },
      {
       "scene": "✈️🕐❓",
       "full": "飞机几点起飞",
       "vi": "Máy bay cất cánh lúc mấy giờ?",
       "parts": [
        {
         "t": "飞机",
         "ico": "✈️",
         "c": "s",
         "py": "fēijī",
         "hv": "phi cơ"
        },
        {
         "t": "几点",
         "ico": "🕐",
         "c": "v",
         "py": "jǐ diǎn",
         "hv": "kỷ điểm"
        },
        {
         "t": "起飞",
         "ico": "🛫",
         "c": "o",
         "py": "qǐfēi",
         "hv": "khởi phi"
        }
       ],
       "traceWord": "起飞",
       "py": "Fēijī jǐ diǎn qǐfēi",
       "traceKey": "qifei",
       "traceInfo": [
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        },
        {
         "c": "飞",
         "py": "fēi",
         "hv": "phi"
        }
       ]
      },
      {
       "scene": "🧳🌍🇯🇵",
       "full": "这些国际旅客来自日本",
       "vi": "Những hành khách quốc tế này đến từ Nhật Bản",
       "parts": [
        {
         "t": "这些国际旅客",
         "ico": "🧳",
         "c": "s",
         "py": "zhèxiē guójì lǚkè",
         "hv": "giá ta quốc tế lữ khách"
        },
        {
         "t": "来自",
         "ico": "➡️",
         "c": "v",
         "py": "láizì",
         "hv": "lai tự"
        },
        {
         "t": "日本",
         "ico": "🇯🇵",
         "c": "o",
         "py": "Rìběn",
         "hv": "nhật bản"
        }
       ],
       "traceWord": "旅客",
       "py": "Zhèxiē guójì lǚkè láizì Rìběn",
       "traceKey": "luke",
       "traceInfo": [
        {
         "c": "旅",
         "py": "lǚ",
         "hv": "lữ"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "🏠🧑✈️",
       "full": "回国后我想去旅行",
       "vi": "Sau khi về nước tôi muốn đi du lịch",
       "parts": [
        {
         "t": "回国后我",
         "ico": "🏠",
         "c": "s",
         "py": "huí guó hòu wǒ",
         "hv": "hồi quốc hậu ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "去旅行",
         "ico": "🧳",
         "c": "o",
         "py": "qù lǚxíng",
         "hv": "khứ lữ hành"
        }
       ],
       "traceWord": "旅行",
       "py": "Huí guó hòu wǒ xiǎng qù lǚxíng",
       "traceKey": "luxing",
       "traceInfo": [
        {
         "c": "旅",
         "py": "lǚ",
         "hv": "lữ"
        },
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "出门前你装好护照了吗？",
       "qvi": "Trước khi ra khỏi nhà bạn đã cho hộ chiếu vào túi chưa?",
       "scene": "🚪📘🎒",
       "ans": "我装好了",
       "opts": [
        {
         "txt": "我不想去",
         "ico": "🙅",
         "py": "Wǒ bù xiǎng qù"
        },
        {
         "txt": "我装好了",
         "ico": "✅",
         "py": "Wǒ zhuāng hǎo le"
        },
        {
         "txt": "他在上班",
         "ico": "💼",
         "py": "Tā zài shàngbān"
        }
       ],
       "qpy": "Chūmén qián nǐ zhuāng hǎo hùzhào le ma?"
      },
      {
       "q": "要晚了，我们怎么办？",
       "qvi": "Sắp muộn rồi, chúng ta làm sao đây?",
       "scene": "⏰😰",
       "ans": "快点儿走吧",
       "opts": [
        {
         "txt": "快点儿走吧",
         "ico": "🏃",
         "py": "Kuài diǎnr zǒu ba"
        },
        {
         "txt": "我们明天去",
         "ico": "📅",
         "py": "Wǒmen míngtiān qù"
        },
        {
         "txt": "这个很便宜",
         "ico": "💰",
         "py": "Zhè gè hěn piányi"
        }
       ],
       "qpy": "Yào wǎn le wǒmen zěnme bàn?"
      },
      {
       "q": "北京好玩儿吗？",
       "qvi": "Bắc Kinh có vui không?",
       "scene": "🏙️🎡",
       "ans": "到处都很好玩儿",
       "opts": [
        {
         "txt": "我不想吃饭",
         "ico": "🍚",
         "py": "Wǒ bù xiǎng chīfàn"
        },
        {
         "txt": "他在医院",
         "ico": "🏥",
         "py": "Tā zài yīyuàn"
        },
        {
         "txt": "到处都很好玩儿",
         "ico": "🎡",
         "py": "Dàochù dōu hěn hǎowánr"
        }
       ],
       "qpy": "Běijīng hǎowánr ma?"
      },
      {
       "q": "你们在国外怎么样？",
       "qvi": "Các bạn ở nước ngoài thế nào?",
       "scene": "🌏👫❓",
       "ans": "我们都很平安",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "这是水果",
         "ico": "🍎",
         "py": "Zhè shì shuǐguǒ"
        },
        {
         "txt": "我们都很平安",
         "ico": "🙏",
         "py": "Wǒmen dōu hěn píng'ān"
        }
       ],
       "qpy": "Nǐmen zài guó wài zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị cho chuyến công tác nước ngoài",
      "steps": [
       "<b>Bước 1:</b> Mở túi hành lý, tự nói thành tiếng kiểm tra từng món: <i>\"我的护照在包里\"</i>, <i>\"我装好了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp đi cùng, rủ xuất phát và hỏi giờ bay: <i>\"我们一起出发吧\"</i>, <i>\"飞机几点起飞？\"</i>.",
       "<b>Bước 3:</b> Tập kể kinh nghiệm của mình với một đối tác: <i>\"我去过北京\"</i>, rồi hỏi lại họ <i>\"你见过她吗？\"</i> hoặc nơi họ từng đến."
      ]
     }
    },
    {
     "id": "2.6B",
     "name": "Bài 2.6B: Tham quan, công viên, điểm du lịch",
     "grammar": {
      "formulas": [
       "🧑 我 + 🔓 可以 + 🏞️ 参观公园吗？",
       "🌧️ 明天 + 🤔 可能 + 下雨",
       "🧑 游客 + 💪 能够 + 在这里旅游"
      ],
      "tip": "可以 (kěyǐ, khả dĩ) dùng để xin phép hoặc nói được phép; 能够 (nénggòu, năng cú) nói có khả năng/điều kiện làm được; 可能 (kěnéng, khả năng) và 也许 (yěxǔ) diễn tả phỏng đoán \"có thể\". Động từ năng nguyện đứng trước động từ chính.",
      "vn_tip": "Tiếng Việt dùng \"có thể\" cho cả xin phép, khả năng và phỏng đoán, nên người Việt hay lẫn. Hỏi xin phép nói 可以……吗？, không dùng 可能. Khi phỏng đoán thì dùng 可能/也许 đứng trước động từ: 他可能生病了, không nói 他可以生病了."
     },
     "chunks": [
      {
       "scene": "🧑🏞️❓",
       "full": "我可以参观公园吗",
       "vi": "Tôi có thể tham quan công viên không?",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "可以",
         "ico": "🔓",
         "c": "v",
         "py": "kěyǐ",
         "hv": "khả dĩ"
        },
        {
         "t": "参观公园吗",
         "ico": "🏞️",
         "c": "o",
         "py": "cānguān gōngyuán ma",
         "hv": "tham quan công viên ma"
        }
       ],
       "traceWord": "参观",
       "py": "Wǒ kěyǐ cānguān gōngyuán ma",
       "traceKey": "canguan",
       "traceInfo": [
        {
         "c": "参",
         "py": "cān",
         "hv": "tham"
        },
        {
         "c": "观",
         "py": "guān",
         "hv": "quan"
        }
       ]
      },
      {
       "scene": "📍🚪❓",
       "full": "这里可以进入吗",
       "vi": "Ở đây có vào được không?",
       "parts": [
        {
         "t": "这里",
         "ico": "📍",
         "c": "s",
         "py": "zhèlǐ",
         "hv": "giá lý"
        },
        {
         "t": "可以",
         "ico": "🔓",
         "c": "v",
         "py": "kěyǐ",
         "hv": "khả dĩ"
        },
        {
         "t": "进入吗",
         "ico": "🚪",
         "c": "o",
         "py": "jìnrù ma",
         "hv": "tiến nhập ma"
        }
       ],
       "traceWord": "进入",
       "py": "Zhèlǐ kěyǐ jìnrù ma",
       "traceKey": "jinru",
       "traceInfo": [
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        },
        {
         "c": "入",
         "py": "rù",
         "hv": "nhập"
        }
       ]
      },
      {
       "scene": "📅🌧️☁️",
       "full": "明天可能下雨",
       "vi": "Ngày mai có thể trời mưa",
       "parts": [
        {
         "t": "明天",
         "ico": "📅",
         "c": "s",
         "py": "míngtiān",
         "hv": "minh thiên"
        },
        {
         "t": "可能",
         "ico": "🤔",
         "c": "v",
         "py": "kěnéng",
         "hv": "khả năng"
        },
        {
         "t": "下雨",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ",
         "hv": "hạ vũ"
        }
       ],
       "traceWord": "可能",
       "py": "Míngtiān kěnéng xià yǔ",
       "traceKey": "keneng",
       "traceInfo": [
        {
         "c": "可",
         "py": "kě",
         "hv": "khả"
        },
        {
         "c": "能",
         "py": "néng",
         "hv": "năng"
        }
       ]
      },
      {
       "scene": "👨🏛️🤔",
       "full": "他也许在广场",
       "vi": "Có lẽ anh ấy đang ở quảng trường",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "也许",
         "ico": "🤔",
         "c": "v",
         "py": "yěxǔ",
         "hv": "dã hứa"
        },
        {
         "t": "在广场",
         "ico": "🏛️",
         "c": "o",
         "py": "zài guǎngchǎng",
         "hv": "tại quảng trường"
        }
       ],
       "traceWord": "广场",
       "py": "Tā yěxǔ zài guǎngchǎng",
       "traceKey": "guangchang",
       "traceInfo": [
        {
         "c": "广",
         "py": "guǎng",
         "hv": "quảng"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🧳🏖️👍",
       "full": "游客能够在这里旅游",
       "vi": "Du khách có thể đi du lịch ở đây",
       "parts": [
        {
         "t": "游客",
         "ico": "🧳",
         "c": "s",
         "py": "yóukè",
         "hv": "du khách"
        },
        {
         "t": "能够",
         "ico": "💪",
         "c": "v",
         "py": "nénggòu",
         "hv": "năng cấu"
        },
        {
         "t": "在这里旅游",
         "ico": "🏖️",
         "c": "o",
         "py": "zài zhèlǐ lǚyóu",
         "hv": "tại giá lý lữ du"
        }
       ],
       "traceWord": "旅游",
       "py": "Yóukè nénggòu zài zhèlǐ lǚyóu",
       "traceKey": "luyou",
       "traceInfo": [
        {
         "c": "旅",
         "py": "lǚ",
         "hv": "lữ"
        },
        {
         "c": "游",
         "py": "yóu",
         "hv": "du"
        }
       ]
      },
      {
       "scene": "🗺️⭐❓",
       "full": "这个省的特点是什么",
       "vi": "Đặc điểm của tỉnh này là gì?",
       "parts": [
        {
         "t": "这个省的特点",
         "ico": "🗺️",
         "c": "s",
         "py": "zhè gè shěng de tèdiǎn",
         "hv": "giá cá tỉnh đích đặc điểm"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "什么",
         "ico": "❓",
         "c": "o",
         "py": "shénme",
         "hv": "thập ma"
        }
       ],
       "traceWord": "特点",
       "py": "Zhè gè shěng de tèdiǎn shì shénme",
       "traceKey": "tedian",
       "traceInfo": [
        {
         "c": "特",
         "py": "tè",
         "hv": "đặc"
        },
        {
         "c": "点",
         "py": "diǎn",
         "hv": "điểm"
        }
       ]
      },
      {
       "scene": "🧳🏙️🔓❓",
       "full": "外地游客可以来我们市吗",
       "vi": "Du khách từ nơi khác có thể đến thành phố chúng tôi không?",
       "parts": [
        {
         "t": "外地游客",
         "ico": "🧳",
         "c": "s",
         "py": "wàidì yóukè",
         "hv": "ngoại địa du khách"
        },
        {
         "t": "可以",
         "ico": "🔓",
         "c": "v",
         "py": "kěyǐ",
         "hv": "khả dĩ"
        },
        {
         "t": "来我们市吗",
         "ico": "🏙️",
         "c": "o",
         "py": "lái wǒmen shì ma",
         "hv": "lai ngã môn thị ma"
        }
       ],
       "traceWord": "外地",
       "py": "Wàidì yóukè kěyǐ lái wǒmen shì ma",
       "traceKey": "waidi",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        }
       ]
      },
      {
       "scene": "🏙️📍🌳",
       "full": "市中心有一个大公园",
       "vi": "Ở trung tâm thành phố có một công viên lớn",
       "parts": [
        {
         "t": "市中心",
         "ico": "🏙️",
         "c": "s",
         "py": "shì zhōngxīn",
         "hv": "thị trung tâm"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一个大公园",
         "ico": "🌳",
         "c": "o",
         "py": "yī gè dà gōngyuán",
         "hv": "nhất cá đại công viên"
        }
       ],
       "traceWord": "中心",
       "py": "Shì zhōngxīn yǒu yī gè dà gōngyuán",
       "traceKey": "zhongxin",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "全国哪个地方最好玩儿？",
       "qvi": "Cả nước nơi nào vui nhất?",
       "scene": "🗺️🎡",
       "ans": "北京最好玩儿",
       "opts": [
        {
         "txt": "我不太忙",
         "ico": "😌",
         "py": "Wǒ bù tài máng"
        },
        {
         "txt": "北京最好玩儿",
         "ico": "🎡",
         "py": "Běijīng zuì hǎowánr"
        },
        {
         "txt": "他在上课",
         "ico": "📚",
         "py": "Tā zài shàngkè"
        }
       ],
       "qpy": "Quánguó nǎ gè dìfang zuì hǎowánr?"
      },
      {
       "q": "明天可以去公园吗？",
       "qvi": "Ngày mai đi công viên được không?",
       "scene": "📅🏞️❓",
       "ans": "可以一起去吧",
       "opts": [
        {
         "txt": "可以一起去吧",
         "ico": "👫",
         "py": "Kěyǐ yīqǐ qù ba"
        },
        {
         "txt": "我不是老师",
         "ico": "👨‍🏫",
         "py": "Wǒ bú shì lǎoshī"
        },
        {
         "txt": "他喝了两杯水",
         "ico": "🥤",
         "py": "Tā hē le liǎng bēi shuǐ"
        }
       ],
       "qpy": "Míngtiān kěyǐ qù gōngyuán ma?"
      },
      {
       "q": "你想去外地旅游吗？",
       "qvi": "Bạn có muốn đi du lịch tỉnh khác không?",
       "scene": "🧑🚆🏖️",
       "ans": "我想去北京旅游",
       "opts": [
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        },
        {
         "txt": "这是我的书",
         "ico": "📖",
         "py": "Zhè shì wǒ de shū"
        },
        {
         "txt": "我想去北京旅游",
         "ico": "🏙️",
         "py": "Wǒ xiǎng qù Běijīng lǚyóu"
        }
       ],
       "qpy": "Nǐ xiǎng qù wàidì lǚyóu ma?"
      },
      {
       "q": "他今天怎么没来？",
       "qvi": "Sao hôm nay anh ấy không đến?",
       "scene": "👨🤒❓",
       "ans": "他可能生病了",
       "opts": [
        {
         "txt": "他可能生病了",
         "ico": "🤒",
         "py": "Tā kěnéng shēngbìng le"
        },
        {
         "txt": "我们是同学",
         "ico": "🎓",
         "py": "Wǒmen shì tóngxué"
        },
        {
         "txt": "桌子很大",
         "ico": "🪑",
         "py": "Zhuōzi hěn dà"
        }
       ],
       "qpy": "Tā jīntiān zěnme méi lái?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm khi đi tham quan",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn đứng trước cổng công viên, hỏi nhân viên bảo vệ: <i>\"我可以参观公园吗？\"</i> và <i>\"这里可以进入吗？\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp ở thành phố khác, hỏi thời tiết và dự đoán: <i>\"明天可能下雨\"</i>, <i>\"他也许在广场\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng giới thiệu thành phố của bạn cho một đối tác nước ngoài: <i>\"市中心有一个大公园\"</i>, <i>\"游客能够在这里旅游\"</i>."
      ]
     }
    },
    {
     "id": "2.6C",
     "name": "Bài 2.6C: Khách sạn, kỳ nghỉ, lưu lại",
     "grammar": {
      "formulas": [
       "🧑 你 + 📌 应该 + 多休息",
       "⏰ 现在 + 📌 该 + 吃饭了",
       "🧑 我们 + ⚠️ 必须 + 马上出发"
      ],
      "tip": "应该 (yīnggāi, ưng cai) nghĩa là \"nên, phải\" khi khuyên hoặc nói điều hợp lý; 该 (gāi, cai) cũng là \"nên/đến lúc\" và hay đi với 了 để báo đến lúc làm gì; 必须 (bìxū, tất tu) mạnh hơn, nghĩa là bắt buộc phải. Phủ định của 应该 là 不应该.",
      "vn_tip": "Tiếng Việt dùng \"phải\" cho cả \"nên\" lẫn \"bắt buộc\". Người Việt hay dùng 必须 mọi nơi nên nghe quá cứng. Khuyên bạn bè nói 你应该……. Phủ định của 必须 không phải 不必须: muốn nói \"không cần phải\" thì dùng 不用."
     },
     "chunks": [
      {
       "scene": "🧑💡😴",
       "full": "你应该多休息",
       "vi": "Bạn nên nghỉ ngơi nhiều hơn",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "应该",
         "ico": "📌",
         "c": "v",
         "py": "yīnggāi",
         "hv": "ưng cai"
        },
        {
         "t": "多休息",
         "ico": "😴",
         "c": "o",
         "py": "duō xiūxi",
         "hv": "đa hưu tức"
        }
       ],
       "traceWord": "应该",
       "py": "Nǐ yīnggāi duō xiūxi",
       "traceKey": "yinggai",
       "traceInfo": [
        {
         "c": "应",
         "py": "yīng",
         "hv": "ưng"
        },
        {
         "c": "该",
         "py": "gāi",
         "hv": "cai"
        }
       ]
      },
      {
       "scene": "⏰🍚😋",
       "full": "现在该吃饭了",
       "vi": "Bây giờ đến lúc ăn cơm rồi",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "该",
         "ico": "📌",
         "c": "v",
         "py": "gāi",
         "hv": "cai"
        },
        {
         "t": "吃饭了",
         "ico": "🍚",
         "c": "o",
         "py": "chīfàn le",
         "hv": "cật phạn liễu"
        }
       ],
       "traceWord": "该",
       "py": "Xiànzài gāi chīfàn le",
       "traceKey": "gai",
       "traceInfo": [
        {
         "c": "该",
         "py": "gāi",
         "hv": "cai"
        }
       ]
      },
      {
       "scene": "👫⚠️🚗",
       "full": "我们必须马上出发",
       "vi": "Chúng ta phải xuất phát ngay",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "必须",
         "ico": "⚠️",
         "c": "v",
         "py": "bìxū",
         "hv": "tất tu"
        },
        {
         "t": "马上出发",
         "ico": "🚗",
         "c": "o",
         "py": "mǎshàng chūfā",
         "hv": "mã thượng xuất phát"
        }
       ],
       "traceWord": "必须",
       "py": "Wǒmen bìxū mǎshàng chūfā",
       "traceKey": "bixu",
       "traceInfo": [
        {
         "c": "必",
         "py": "bì",
         "hv": "tất"
        },
        {
         "c": "须",
         "py": "xū",
         "hv": "tu"
        }
       ]
      },
      {
       "scene": "👫🏖️😎",
       "full": "他们正在休假",
       "vi": "Họ đang nghỉ phép",
       "parts": [
        {
         "t": "他们",
         "ico": "👫",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "v",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "休假",
         "ico": "🏖️",
         "c": "o",
         "py": "xiūjià",
         "hv": "hưu giá"
        }
       ],
       "traceWord": "休假",
       "py": "Tāmen zhèngzài xiūjià",
       "traceKey": "xiujia",
       "traceInfo": [
        {
         "c": "休",
         "py": "xiū",
         "hv": "hưu"
        },
        {
         "c": "假",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "👫🏨⭐",
       "full": "我们住在高级酒店",
       "vi": "Chúng tôi ở khách sạn cao cấp",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "住在",
         "ico": "🛏️",
         "c": "v",
         "py": "zhù zài",
         "hv": "trú tại"
        },
        {
         "t": "高级酒店",
         "ico": "🏨",
         "c": "o",
         "py": "gāojí jiǔdiàn",
         "hv": "cao cấp tửu điếm"
        }
       ],
       "traceWord": "酒店",
       "py": "Wǒmen zhù zài gāojí jiǔdiàn",
       "traceKey": "jiudian",
       "traceInfo": [
        {
         "c": "酒",
         "py": "jiǔ",
         "hv": "tửu"
        },
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "🧑🏨✍️",
       "full": "客人应该留下名字",
       "vi": "Khách nên để lại tên",
       "parts": [
        {
         "t": "客人",
         "ico": "🧑",
         "c": "s",
         "py": "kèrén",
         "hv": "khách nhân"
        },
        {
         "t": "应该",
         "ico": "📌",
         "c": "v",
         "py": "yīnggāi",
         "hv": "ưng cai"
        },
        {
         "t": "留下名字",
         "ico": "✍️",
         "c": "o",
         "py": "liúxia míngzi",
         "hv": "lưu hạ danh tự"
        }
       ],
       "traceWord": "客人",
       "py": "Kèrén yīnggāi liúxia míngzi",
       "traceKey": "keren",
       "traceInfo": [
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "📱✋🙏",
       "full": "请放下你的手机",
       "vi": "Xin hãy đặt điện thoại của bạn xuống",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "放下",
         "ico": "⬇️",
         "c": "v",
         "py": "fàngxia",
         "hv": "phóng hạ"
        },
        {
         "t": "你的手机",
         "ico": "📱",
         "c": "o",
         "py": "nǐ de shǒujī",
         "hv": "nễ đích thủ cơ"
        }
       ],
       "traceWord": "放下",
       "py": "Qǐng fàngxia nǐ de shǒujī",
       "traceKey": "fangxia",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "下",
         "py": "xia",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "🧑🏠🛋️",
       "full": "我想留在家里休息",
       "vi": "Tôi muốn ở lại nhà nghỉ ngơi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "留在家里休息",
         "ico": "🏠",
         "c": "o",
         "py": "liú zài jiā li xiūxi",
         "hv": "lưu tại gia lý hưu tức"
        }
       ],
       "traceWord": "留",
       "py": "Wǒ xiǎng liú zài jiā li xiūxi",
       "traceKey": "liu",
       "traceInfo": [
        {
         "c": "留",
         "py": "liú",
         "hv": "lưu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "假期你想做什么？",
       "qvi": "Kỳ nghỉ bạn muốn làm gì?",
       "scene": "🏖️🧑❓",
       "ans": "我想去旅行",
       "opts": [
        {
         "txt": "他在睡觉",
         "ico": "😴",
         "py": "Tā zài shuìjiào"
        },
        {
         "txt": "我想去旅行",
         "ico": "🧳",
         "py": "Wǒ xiǎng qù lǚxíng"
        },
        {
         "txt": "今天很冷",
         "ico": "🥶",
         "py": "Jīntiān hěn lěng"
        }
       ],
       "qpy": "Jiàqī nǐ xiǎng zuò shénme?"
      },
      {
       "q": "谁是这家酒店的主人？",
       "qvi": "Ai là chủ của khách sạn này?",
       "scene": "🏨🧑‍💼❓",
       "ans": "王先生是主人",
       "opts": [
        {
         "txt": "我是小学生",
         "ico": "🎒",
         "py": "Wǒ shì xiǎoxuéshēng"
        },
        {
         "txt": "这是我的包",
         "ico": "👜",
         "py": "Zhè shì wǒ de bāo"
        },
        {
         "txt": "王先生是主人",
         "ico": "🧑‍💼",
         "py": "Wángxiānshēng shì zhǔrén"
        }
       ],
       "qpy": "Shéi shì zhè jiā jiǔdiàn de zhǔrén?"
      },
      {
       "q": "你的汉语是几级？",
       "qvi": "Tiếng Hán của bạn trình độ mấy?",
       "scene": "📖🎓❓",
       "ans": "我是中级",
       "opts": [
        {
         "txt": "他很高兴",
         "ico": "😄",
         "py": "Tā hěn gāoxìng"
        },
        {
         "txt": "我是中级",
         "ico": "📖",
         "py": "Wǒ shì zhōngjí"
        },
        {
         "txt": "这个包是假的",
         "ico": "👜",
         "py": "Zhè gè bāo shì jiǎ de"
        }
       ],
       "qpy": "Nǐ de Hànyǔ shì jǐ jí?"
      },
      {
       "q": "你喜欢什么样的假期？",
       "qvi": "Bạn thích kỳ nghỉ kiểu gì?",
       "scene": "🏖️🕊️❓",
       "ans": "我喜欢自由的假期",
       "opts": [
        {
         "txt": "我喜欢自由的假期",
         "ico": "🕊️",
         "py": "Wǒ xǐhuan zìyóu de jiàqī"
        },
        {
         "txt": "我不会写字",
         "ico": "✍️",
         "py": "Wǒ bú huì xiě zì"
        },
        {
         "txt": "他们是同学",
         "ico": "🎓",
         "py": "Tāmen shì tóngxué"
        }
       ],
       "qpy": "Nǐ xǐhuan shénmeyàng de jiàqī?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận phòng khách sạn và lên kế hoạch nghỉ phép",
      "steps": [
       "<b>Bước 1:</b> Đóng vai lễ tân khách sạn, nhắc khách: <i>\"客人应该留下名字\"</i>, rồi tự nói bạn đang ở đâu: <i>\"我们住在高级酒店\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp đang nghỉ phép, nhắc việc gấp: <i>\"你应该多休息\"</i> hoặc báo <i>\"我们必须马上出发\"</i>.",
       "<b>Bước 3:</b> Tự hỏi và trả lời thành tiếng về kỳ nghỉ của mình: <i>\"假期你想做什么？\"</i>, <i>\"我想留在家里休息\"</i>."
      ]
     }
    }
   ]
  },
  "2.7": {
   "lessons": [
    {
     "id": "2.7A",
     "name": "Bài 2.7A: Nhà cửa, đồ đạc và khu vườn",
     "grammar": {
      "formulas": [
       "📍 院子里 + ⚡ 有 + 🌷 一个花园",
       "📍 椅子上 + ⚡ 坐着 + 🧑 一个人",
       "❓ 你家院子后边 + ⚡ 有 + ❓ 什么？"
      ],
      "tip": "Câu tồn hiện: nơi chốn + 有 / động từ + 着 + người hoặc vật. Nơi chốn đứng đầu câu, người hoặc vật mới xuất hiện đứng cuối câu. Ví dụ 坐着 (zuòzhe, tọa) nghĩa là đang ngồi, 有 (yǒu, hữu) nghĩa là có.",
      "vn_tip": "Người Việt hay nói kiểu \"Có một người ngồi ở trên ghế\" và dịch thành 有一个人坐在椅子上. Với câu tồn hiện, hãy đặt nơi chốn lên đầu: 椅子上坐着一个人. Đừng đặt 一个人 ở đầu câu."
     },
     "chunks": [
      {
       "scene": "🏡🌷🌳",
       "full": "院子里有一个花园",
       "vi": "Trong sân có một khu vườn hoa",
       "parts": [
        {
         "t": "院子里",
         "ico": "🏡",
         "c": "s",
         "py": "yuànzi lǐ",
         "hv": "viện tử lý"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一个花园",
         "ico": "🌷",
         "c": "o",
         "py": "yī gè huāyuán",
         "hv": "nhất cá hoa viên"
        }
       ],
       "traceWord": "花园",
       "py": "Yuànzi lǐ yǒu yī gè huāyuán",
       "traceKey": "huayuan",
       "traceInfo": [
        {
         "c": "花",
         "py": "huā",
         "hv": "hoa"
        },
        {
         "c": "园",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🪑🧑",
       "full": "椅子上坐着一个人",
       "vi": "Trên ghế có một người đang ngồi",
       "parts": [
        {
         "t": "椅子上",
         "ico": "🪑",
         "c": "s",
         "py": "yǐzi shàng",
         "hv": "ỷ tử thượng"
        },
        {
         "t": "坐着",
         "ico": "⚡",
         "c": "v",
         "py": "zuò zhe",
         "hv": "tọa trước"
        },
        {
         "t": "一个人",
         "ico": "🧑",
         "c": "o",
         "py": "yī gè rén",
         "hv": "nhất cá nhân"
        }
       ],
       "traceWord": "椅子",
       "py": "Yǐzi shàng zuò zhe yī gè rén",
       "traceKey": "yizi",
       "traceInfo": [
        {
         "c": "椅",
         "py": "yǐ",
         "hv": "ỷ"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "💡🪑🌙",
       "full": "桌子上的灯亮着",
       "vi": "Đèn trên bàn đang sáng",
       "parts": [
        {
         "t": "桌子上的灯",
         "ico": "💡",
         "c": "s",
         "py": "zhuōzi shàng de dēng",
         "hv": "trác tử thượng đích đăng"
        },
        {
         "t": "亮",
         "ico": "✨",
         "c": "v",
         "py": "liàng",
         "hv": "lượng"
        },
        {
         "t": "着",
         "ico": "⚡",
         "c": "o",
         "py": "zhe",
         "hv": "trước"
        }
       ],
       "traceWord": "灯",
       "py": "Zhuōzi shàng de dēng liàng zhe",
       "traceKey": "deng",
       "traceInfo": [
        {
         "c": "灯",
         "py": "dēng",
         "hv": "đăng"
        }
       ]
      },
      {
       "scene": "🌱🧑🧑🧑",
       "full": "草地旁边坐着许多人",
       "vi": "Cạnh bãi cỏ có rất nhiều người đang ngồi",
       "parts": [
        {
         "t": "草地旁边",
         "ico": "🌱",
         "c": "s",
         "py": "cǎodì pángbiān",
         "hv": "thảo địa bàng biên"
        },
        {
         "t": "坐着",
         "ico": "⚡",
         "c": "v",
         "py": "zuò zhe",
         "hv": "tọa trước"
        },
        {
         "t": "许多人",
         "ico": "🧑",
         "c": "o",
         "py": "xǔduō rén",
         "hv": "hứa đa nhân"
        }
       ],
       "traceWord": "草地",
       "py": "Cǎodì pángbiān zuò zhe xǔduō rén",
       "traceKey": "caodi",
       "traceInfo": [
        {
         "c": "草",
         "py": "cǎo",
         "hv": "thảo"
        },
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        }
       ]
      },
      {
       "scene": "🏠🏡",
       "full": "这套房子有一个大院子",
       "vi": "Căn nhà này có một cái sân lớn",
       "parts": [
        {
         "t": "这套房子",
         "ico": "🏠",
         "c": "s",
         "py": "zhè tào fángzi",
         "hv": "giá sáo phòng tử"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一个大院子",
         "ico": "🏡",
         "c": "o",
         "py": "yī gè dà yuànzi",
         "hv": "nhất cá đại viện tử"
        }
       ],
       "traceWord": "套",
       "py": "Zhè tào fángzi yǒu yī gè dà yuànzi",
       "traceKey": "tao",
       "traceInfo": [
        {
         "c": "套",
         "py": "tào",
         "hv": "sáo"
        }
       ]
      },
      {
       "scene": "🧱✍️",
       "full": "墙上写着你的名字",
       "vi": "Trên tường có viết tên của bạn",
       "parts": [
        {
         "t": "墙上",
         "ico": "🧱",
         "c": "s",
         "py": "qiáng shàng",
         "hv": "tường thượng"
        },
        {
         "t": "写着",
         "ico": "⚡",
         "c": "v",
         "py": "xiě zhe",
         "hv": "tả trước"
        },
        {
         "t": "你的名字",
         "ico": "✍️",
         "c": "o",
         "py": "nǐ de míngzi",
         "hv": "nễ đích danh tự"
        }
       ],
       "traceWord": "墙",
       "py": "Qiáng shàng xiě zhe nǐ de míngzi",
       "traceKey": "qiang",
       "traceInfo": [
        {
         "c": "墙",
         "py": "qiáng",
         "hv": "tường"
        }
       ]
      },
      {
       "scene": "🧺👜",
       "full": "洗衣机旁边放着一个包",
       "vi": "Cạnh máy giặt có đặt một cái túi",
       "parts": [
        {
         "t": "洗衣机旁边",
         "ico": "🧺",
         "c": "s",
         "py": "xǐyījī pángbiān",
         "hv": "tẩy y cơ bàng biên"
        },
        {
         "t": "放着",
         "ico": "⚡",
         "c": "v",
         "py": "fàng zhe",
         "hv": "phóng trước"
        },
        {
         "t": "一个包",
         "ico": "👜",
         "c": "o",
         "py": "yī gè bāo",
         "hv": "nhất cá bao"
        }
       ],
       "traceWord": "洗衣机",
       "py": "Xǐyījī pángbiān fàng zhe yī gè bāo",
       "traceKey": "xiyiji",
       "traceInfo": [
        {
         "c": "洗",
         "py": "xǐ",
         "hv": "tẩy"
        },
        {
         "c": "衣",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "🚪🚗",
       "full": "大门口停着一辆车",
       "vi": "Trước cổng có một chiếc xe đang đỗ",
       "parts": [
        {
         "t": "大门口",
         "ico": "🚪",
         "c": "s",
         "py": "dà ménkǒu",
         "hv": "đại môn khẩu"
        },
        {
         "t": "停着",
         "ico": "⚡",
         "c": "v",
         "py": "tíng zhe",
         "hv": "đình trước"
        },
        {
         "t": "一辆车",
         "ico": "🚗",
         "c": "o",
         "py": "yī liàng chē",
         "hv": "nhất lượng xa"
        }
       ],
       "traceWord": "大门",
       "py": "Dà ménkǒu tíng zhe yī liàng chē",
       "traceKey": "damen",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "门上写着请推，怎么办？",
       "qvi": "Trên cửa ghi \"xin đẩy\", phải làm sao?",
       "scene": "🚪👉",
       "ans": "推一下大门",
       "opts": [
        {
         "txt": "拉一下大门",
         "ico": "🤚",
         "py": "Lā yī xià dàmén"
        },
        {
         "txt": "推一下大门",
         "ico": "👉",
         "py": "Tuī yī xià dàmén"
        },
        {
         "txt": "一起去吃饭",
         "ico": "🍚",
         "py": "Yīqǐ qù chīfàn"
        }
       ],
       "qpy": "Mén shàng xiě zhe qǐng tuī zěnme bàn?"
      },
      {
       "q": "这儿有人吗？",
       "qvi": "Ở đây có người ngồi không?",
       "scene": "🪑❓",
       "ans": "请坐",
       "opts": [
        {
         "txt": "我是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ shì yīshēng"
        },
        {
         "txt": "请坐",
         "ico": "🪑",
         "py": "Qǐng zuò"
        },
        {
         "txt": "草是绿色的",
         "ico": "🌱",
         "py": "Cǎo shì lǜsè de"
        }
       ],
       "qpy": "Zhèr yǒu rén ma?"
      },
      {
       "q": "你的座位怎么了？",
       "qvi": "Chỗ ngồi của bạn sao vậy?",
       "scene": "💺🧑",
       "ans": "有人占着这个座位",
       "opts": [
        {
         "txt": "我喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ xǐhuan chī miànbāo"
        },
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "有人占着这个座位",
         "ico": "💺",
         "py": "Yǒu rén zhàn zhe zhè gè zuòwèi"
        }
       ],
       "qpy": "Nǐ de zuòwèi zěnme le?"
      },
      {
       "q": "你家院子后边有什么？",
       "qvi": "Phía sau sân nhà bạn có gì?",
       "scene": "🏡⛰️",
       "ans": "有一座山",
       "opts": [
        {
         "txt": "有三个电话",
         "ico": "📞",
         "py": "Yǒu sān gè diànhuà"
        },
        {
         "txt": "有一座山",
         "ico": "⛰️",
         "py": "Yǒu yī zuò shān"
        },
        {
         "txt": "有两个老师",
         "ico": "👩‍🏫",
         "py": "Yǒu liǎng gè lǎoshī"
        }
       ],
       "qpy": "Nǐ jiā yuànzi hòubian yǒu shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Xem nhà có sân vườn",
      "steps": [
       "<b>Bước 1:</b> Bạn đến xem một căn nhà. Đứng ở cổng, tự nói thành tiếng bạn thấy gì: <i>\"大门口停着一辆车\"</i>, <i>\"院子里有一个花园\"</i>.",
       "<b>Bước 2:</b> Đi vào trong, mô tả 4 đồ vật trong nhà hoặc ngoài sân bằng mẫu \"nơi chốn + động từ + 着 + vật\", ví dụ <i>\"洗衣机旁边放着一个包\"</i>, <i>\"桌子上的灯亮着\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp hoặc bạn bè, tả căn nhà bạn vừa xem trong 3 câu, ví dụ <i>\"这套房子有一个大院子\"</i>, rồi đọc to lại cả tin nhắn."
      ]
     }
    },
    {
     "id": "2.7B",
     "name": "Bài 2.7B: Thuê nhà và vị trí trong khu phố",
     "grammar": {
      "formulas": [
       "📍 门口 + ⚡ 站 + ⏳ 着 + 🧑 一个商人",
       "🧑 他 + ⚡ 靠 + ⏳ 着 + 🧱 墙",
       "❓ 你面前 + ⚡ 放 + ⏳ 着 + ❓ 什么？"
      ],
      "tip": "Thể kéo dài: động từ + 着 diễn tả trạng thái hoặc tư thế đang duy trì, ví dụ 站着 (zhànzhe, đứng), 租着 (zūzhe, đang thuê, tô). 着 (zhe) đọc nhẹ, đứng ngay sau động từ.",
      "vn_tip": "Người Việt hay thêm 在 vào kiểu \"Anh ấy đang đứng\" và nói 他在站. Khi chỉ trạng thái giữ nguyên, hãy dùng động từ + 着: 他站着. Phủ định dùng 没 + động từ + 着, đừng dùng 不."
     },
     "chunks": [
      {
       "scene": "🚪🧑💼",
       "full": "门口站着一个商人",
       "vi": "Ở cửa có một thương nhân đang đứng",
       "parts": [
        {
         "t": "门口",
         "ico": "🚪",
         "c": "s",
         "py": "ménkǒu",
         "hv": "môn khẩu"
        },
        {
         "t": "站着",
         "ico": "⚡",
         "c": "v",
         "py": "zhàn zhe",
         "hv": "trạm trước"
        },
        {
         "t": "一个商人",
         "ico": "🧑‍💼",
         "c": "o",
         "py": "yī gè shāngrén",
         "hv": "nhất cá thương nhân"
        }
       ],
       "traceWord": "商人",
       "py": "Ménkǒu zhàn zhe yī gè shāngrén",
       "traceKey": "shangren",
       "traceInfo": [
        {
         "c": "商",
         "py": "shāng",
         "hv": "thương"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "🚪✍️🏠",
       "full": "门上写着出租",
       "vi": "Trên cửa có viết \"cho thuê\"",
       "parts": [
        {
         "t": "门上",
         "ico": "🚪",
         "c": "s",
         "py": "mén shàng",
         "hv": "môn thượng"
        },
        {
         "t": "写着",
         "ico": "⚡",
         "c": "v",
         "py": "xiě zhe",
         "hv": "tả trước"
        },
        {
         "t": "出租",
         "ico": "🏠",
         "c": "o",
         "py": "chūzū",
         "hv": "xuất tô"
        }
       ],
       "traceWord": "出租",
       "py": "Mén shàng xiě zhe chūzū",
       "traceKey": "chuzu",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "租",
         "py": "zū",
         "hv": "tô"
        }
       ]
      },
      {
       "scene": "🧑🧱📱",
       "full": "他靠着墙看手机",
       "vi": "Anh ấy dựa vào tường xem điện thoại",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "靠着墙",
         "ico": "🧱",
         "c": "v",
         "py": "kào zhe qiáng",
         "hv": "kháo trước tường"
        },
        {
         "t": "看手机",
         "ico": "📱",
         "c": "o",
         "py": "kàn shǒujī",
         "hv": "khán thủ cơ"
        }
       ],
       "traceWord": "靠",
       "py": "Tā kào zhe qiáng kàn shǒujī",
       "traceKey": "kao",
       "traceInfo": [
        {
         "c": "靠",
         "py": "kào",
         "hv": "kháo"
        }
       ]
      },
      {
       "scene": "🛋️💡",
       "full": "房间里头开着灯",
       "vi": "Bên trong phòng đèn đang bật",
       "parts": [
        {
         "t": "房间里头",
         "ico": "🛋️",
         "c": "s",
         "py": "fángjiān lǐtou",
         "hv": "phòng gian lý đầu"
        },
        {
         "t": "开着",
         "ico": "⚡",
         "c": "v",
         "py": "kāi zhe",
         "hv": "khai trước"
        },
        {
         "t": "灯",
         "ico": "💡",
         "c": "o",
         "py": "dēng",
         "hv": "đăng"
        }
       ],
       "traceWord": "里头",
       "py": "Fángjiān lǐtou kāi zhe dēng",
       "traceKey": "litou",
       "traceInfo": [
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        },
        {
         "c": "头",
         "py": "tou",
         "hv": "đầu"
        }
       ]
      },
      {
       "scene": "🧑🏢🔑",
       "full": "我租着一套住房",
       "vi": "Tôi đang thuê một căn hộ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "租着",
         "ico": "⚡",
         "c": "v",
         "py": "zū zhe",
         "hv": "tô trước"
        },
        {
         "t": "一套住房",
         "ico": "🏢",
         "c": "o",
         "py": "yī tào zhùfáng",
         "hv": "nhất sáo trú phòng"
        }
       ],
       "traceWord": "住房",
       "py": "Wǒ zū zhe yī tào zhùfáng",
       "traceKey": "zhufang",
       "traceInfo": [
        {
         "c": "住",
         "py": "zhù",
         "hv": "trú"
        },
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        }
       ]
      },
      {
       "scene": "🧑☕🥤",
       "full": "你面前放着一个杯子",
       "vi": "Trước mặt bạn có đặt một cái cốc",
       "parts": [
        {
         "t": "你面前",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ miànqián",
         "hv": "nễ diện tiền"
        },
        {
         "t": "放着",
         "ico": "⚡",
         "c": "v",
         "py": "fàng zhe",
         "hv": "phóng trước"
        },
        {
         "t": "一个杯子",
         "ico": "🥤",
         "c": "o",
         "py": "yī gè bēizi",
         "hv": "nhất cá bôi tử"
        }
       ],
       "traceWord": "面前",
       "py": "Nǐ miànqián fàng zhe yī gè bēizi",
       "traceKey": "mianqian",
       "traceInfo": [
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "🏪🧑🧑",
       "full": "店前面坐着几个客人",
       "vi": "Phía trước tiệm có mấy vị khách đang ngồi",
       "parts": [
        {
         "t": "店前面",
         "ico": "🏪",
         "c": "s",
         "py": "diàn qián miàn",
         "hv": "điếm tiền diện"
        },
        {
         "t": "坐着",
         "ico": "⚡",
         "c": "v",
         "py": "zuò zhe",
         "hv": "tọa trước"
        },
        {
         "t": "几个客人",
         "ico": "🧑",
         "c": "o",
         "py": "jǐ gè kèrén",
         "hv": "kỷ cá khách nhân"
        }
       ],
       "traceWord": "店",
       "py": "Diàn qián miàn zuò zhe jǐ gè kèrén",
       "traceKey": "dian",
       "traceInfo": [
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "🧑‍💼📰",
       "full": "市长拿着一份报纸",
       "vi": "Thị trưởng đang cầm một tờ báo",
       "parts": [
        {
         "t": "市长",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "shìzhǎng",
         "hv": "thị trưởng"
        },
        {
         "t": "拿着",
         "ico": "⚡",
         "c": "v",
         "py": "ná zhe",
         "hv": "nã trước"
        },
        {
         "t": "一份报纸",
         "ico": "📰",
         "c": "o",
         "py": "yī fèn bàozhǐ",
         "hv": "nhất phần báo chỉ"
        }
       ],
       "traceWord": "市长",
       "py": "Shìzhǎng ná zhe yī fèn bàozhǐ",
       "traceKey": "shizhang",
       "traceInfo": [
        {
         "c": "市",
         "py": "shì",
         "hv": "thị"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这几套住房，你想租哪一套？",
       "qvi": "Mấy căn hộ này, bạn muốn thuê căn nào?",
       "scene": "🏢🏢🏢❓",
       "ans": "我想租其中最大的一套",
       "opts": [
        {
         "txt": "我今天坐地铁来的",
         "ico": "🚇",
         "py": "Wǒ jīntiān zuò dìtiě lái de"
        },
        {
         "txt": "我想租其中最大的一套",
         "ico": "🏢",
         "py": "Wǒ xiǎng zū qízhōng zuì dà de yī tào"
        },
        {
         "txt": "他的头很大",
         "ico": "🧑",
         "py": "Tā de tóu hěn dà"
        }
       ],
       "qpy": "Zhè jǐ tào zhùfáng nǐ xiǎng zū nǎ yī tào?"
      },
      {
       "q": "租房子，你主要看哪方面？",
       "qvi": "Thuê nhà, bạn chủ yếu xem phương diện nào?",
       "scene": "🏠🔍",
       "ans": "我主要看交通",
       "opts": [
        {
         "txt": "我昨天去北京了",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng le"
        },
        {
         "txt": "他在公司工作",
         "ico": "🏢",
         "py": "Tā zài gōngsī gōngzuò"
        },
        {
         "txt": "我主要看交通",
         "ico": "🚇",
         "py": "Wǒ zhǔyào kàn jiāotōng"
        }
       ],
       "qpy": "Zū fángzi nǐ zhǔyào kàn nǎ fāngmiàn?"
      },
      {
       "q": "这套住房的重点是什么？",
       "qvi": "Điểm nổi bật của căn hộ này là gì?",
       "scene": "🏢⭐",
       "ans": "重点是离地铁站很近",
       "opts": [
        {
         "txt": "重点是离地铁站很近",
         "ico": "🚇",
         "py": "Zhòngdiǎn shì lí dìtiězhàn hěn jìn"
        },
        {
         "txt": "重点是他喜欢喝茶",
         "ico": "🍵",
         "py": "Zhòngdiǎn shì tā xǐhuan hē chá"
        },
        {
         "txt": "重点是今天很冷",
         "ico": "🥶",
         "py": "Zhòngdiǎn shì jīntiān hěn lěng"
        }
       ],
       "qpy": "Zhè tào zhùfáng de zhòngdiǎn shì shénme?"
      },
      {
       "q": "从商人的角度看，这套住房怎么样？",
       "qvi": "Từ góc nhìn của thương nhân, căn hộ này thế nào?",
       "scene": "🧑‍💼🏢💰",
       "ans": "离公司很近也很便宜",
       "opts": [
        {
         "txt": "我昨天买了一个包",
         "ico": "👜",
         "py": "Wǒ zuótiān mǎi le yī gè bāo"
        },
        {
         "txt": "他们都是学生",
         "ico": "🎓",
         "py": "Tāmen dōu shì xuéshēng"
        },
        {
         "txt": "离公司很近也很便宜",
         "ico": "💰",
         "py": "Lí gōngsī hěn jìn yě hěn piányi"
        }
       ],
       "qpy": "Cóng shāngrén de jiǎodù kàn zhè tào zhùfáng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thuê nhà với chủ nhà",
      "steps": [
       "<b>Bước 1:</b> Bạn thấy một căn hộ có bảng cho thuê. Tự nói thành tiếng những gì bạn thấy: <i>\"门上写着出租\"</i>, <i>\"门口站着一个商人\"</i>.",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin cho chủ nhà, giới thiệu bạn đang ở đâu và muốn thuê gì. Dùng <i>\"我租着一套住房\"</i> để kể nơi bạn đang thuê, và hỏi <i>\"房间里头开着灯吗？\"</i> nếu muốn xem nhà.",
       "<b>Bước 3:</b> Nói với đồng nghiệp bạn chủ yếu xem phương diện nào khi thuê nhà, ví dụ <i>\"我主要看交通\"</i>. Luyện nói to 3 câu trong 12 phút."
      ]
     }
    },
    {
     "id": "2.7C",
     "name": "Bài 2.7C: Trường học của con và việc học trong khu phố",
     "grammar": {
      "formulas": [
       "🏫 校园 + ⚡ 有 + 📏 公园那么大",
       "🧑 他 + ⚡ 有 + 📏 校长那么高",
       "👩‍🏫 那位教师 + ⚡ 有 + 🎂 四十岁了"
      ],
      "tip": "Câu chữ 有 biểu thị đánh giá, mức đạt tới: A + 有 + B + (那么/这么) + tính từ nghĩa là A đạt đến mức của B. Ví dụ 校园有公园那么大 (xiàoyuán yǒu gōngyuán nàme dà, hiệu viên). Cũng dùng 有 + số lượng để ước chừng tuổi hoặc thời gian.",
      "vn_tip": "Người Việt hay nói \"Anh ấy cao bằng thầy hiệu trưởng\" rồi dịch thành 他和校长一样高 lẫn lộn với 有. Nhớ rằng 有 chỉ dùng trong câu khẳng định hoặc câu hỏi để nói mức đạt tới; phủ định dùng 没有: 他没有校长那么高."
     },
     "chunks": [
      {
       "scene": "🏫🌳⛲",
       "full": "校园有公园那么大",
       "vi": "Khuôn viên trường rộng bằng một công viên",
       "parts": [
        {
         "t": "校园",
         "ico": "🏫",
         "c": "s",
         "py": "xiàoyuán",
         "hv": "hiệu viên"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "公园那么大",
         "ico": "🌳",
         "c": "o",
         "py": "gōngyuán nàme dà",
         "hv": "công viên na ma đại"
        }
       ],
       "traceWord": "校园",
       "py": "Xiàoyuán yǒu gōngyuán nàme dà",
       "traceKey": "xiaoyuan",
       "traceInfo": [
        {
         "c": "校",
         "py": "xiào",
         "hv": "hiệu"
        },
        {
         "c": "园",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🧑👨‍🏫📏",
       "full": "他有校长那么高",
       "vi": "Anh ấy cao bằng thầy hiệu trưởng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "校长那么高",
         "ico": "📏",
         "c": "o",
         "py": "xiàozhǎng nàme gāo",
         "hv": "hiệu trưởng na ma cao"
        }
       ],
       "traceWord": "校长",
       "py": "Tā yǒu xiàozhǎng nàme gāo",
       "traceKey": "xiaozhang",
       "traceInfo": [
        {
         "c": "校",
         "py": "xiào",
         "hv": "hiệu"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "👩‍🏫🎂",
       "full": "那位教师有四十岁了",
       "vi": "Vị giáo viên kia đã khoảng bốn mươi tuổi rồi",
       "parts": [
        {
         "t": "那位教师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "nà wèi jiàoshī",
         "hv": "na vị giáo sư"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "四十岁了",
         "ico": "🎂",
         "c": "o",
         "py": "sì shí suì le",
         "hv": "tứ thập tuế liễu"
        }
       ],
       "traceWord": "教师",
       "py": "Nà wèi jiàoshī yǒu sì shí suì le",
       "traceKey": "jiaoshi",
       "traceInfo": [
        {
         "c": "教",
         "py": "jiào",
         "hv": "giáo"
        },
        {
         "c": "师",
         "py": "shī",
         "hv": "sư"
        }
       ]
      },
      {
       "scene": "⬛📏🚪",
       "full": "这块黑板有门那么大",
       "vi": "Tấm bảng đen này to bằng cái cửa",
       "parts": [
        {
         "t": "这块黑板",
         "ico": "⬛",
         "c": "s",
         "py": "zhè kuài hēibǎn",
         "hv": "giá khối hắc bản"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "门那么大",
         "ico": "🚪",
         "c": "o",
         "py": "mén nàme dà",
         "hv": "môn na ma đại"
        }
       ],
       "traceWord": "黑板",
       "py": "Zhè kuài hēibǎn yǒu mén nàme dà",
       "traceKey": "heiban",
       "traceInfo": [
        {
         "c": "黑",
         "py": "hēi",
         "hv": "hắc"
        },
        {
         "c": "板",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "🎒📅2️⃣",
       "full": "开学有两个星期了",
       "vi": "Khai giảng đã được hai tuần rồi",
       "parts": [
        {
         "t": "开学",
         "ico": "🎒",
         "c": "s",
         "py": "kāixué",
         "hv": "khai học"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两个星期了",
         "ico": "📅",
         "c": "o",
         "py": "liǎng gè xīngqī le",
         "hv": "lưỡng cá tinh kỳ liễu"
        }
       ],
       "traceWord": "开学",
       "py": "Kāixué yǒu liǎng gè xīngqī le",
       "traceKey": "kaixue",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "🏫3️⃣📚",
       "full": "高中有三个年级",
       "vi": "Trường cấp ba có ba khối lớp",
       "parts": [
        {
         "t": "高中",
         "ico": "🏫",
         "c": "s",
         "py": "gāozhōng",
         "hv": "cao trung"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三个年级",
         "ico": "3️⃣",
         "c": "o",
         "py": "sān gè niánjí",
         "hv": "tam cá niên cấp"
        }
       ],
       "traceWord": "年级",
       "py": "Gāozhōng yǒu sān gè niánjí",
       "traceKey": "nianji",
       "traceInfo": [
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        },
        {
         "c": "级",
         "py": "jí",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "🏫🧒🧒🧒",
       "full": "中小学有一千个学生",
       "vi": "Trường phổ thông có một nghìn học sinh",
       "parts": [
        {
         "t": "中小学",
         "ico": "🏫",
         "c": "s",
         "py": "zhōng-xiǎoxué",
         "hv": "trung tiểu học"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一千个学生",
         "ico": "🧒",
         "c": "o",
         "py": "yī qiān gè xuéshēng",
         "hv": "nhất thiên cá học sinh"
        }
       ],
       "traceWord": "中小学",
       "py": "Zhōng-xiǎoxué yǒu yī qiān gè xuéshēng",
       "traceKey": "zhongxiaoxue",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
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
       "scene": "🌏🧑‍🎓🇨🇳",
       "full": "留学生的汉语有你那么好",
       "vi": "Tiếng Hán của du học sinh giỏi bằng bạn",
       "parts": [
        {
         "t": "留学生的汉语",
         "ico": "🧑‍🎓",
         "c": "s",
         "py": "liúxuéshēng de Hànyǔ",
         "hv": "lưu học sinh đích hán ngữ"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "你那么好",
         "ico": "👍",
         "c": "o",
         "py": "nǐ nàme hǎo",
         "hv": "nễ na ma hảo"
        }
       ],
       "traceWord": "留学生",
       "py": "Liúxuéshēng de Hànyǔ yǒu nǐ nàme hǎo",
       "traceKey": "liuxuesheng",
       "traceInfo": [
        {
         "c": "留",
         "py": "liú",
         "hv": "lưu"
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
      }
     ],
     "qaList": [
      {
       "q": "你们的教室有多大？",
       "qvi": "Phòng học của các bạn rộng cỡ nào?",
       "scene": "🏫📏",
       "ans": "教室有办公室那么大",
       "opts": [
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "教室有办公室那么大",
         "ico": "🏫",
         "py": "Jiàoshì yǒu bàngōngshì nàme dà"
        },
        {
         "txt": "他是我的哥哥",
         "ico": "🧑",
         "py": "Tā shì wǒ de gēge"
        }
       ],
       "qpy": "Nǐmen de jiàoshì yǒu duō dà?"
      },
      {
       "q": "你最喜欢哪一科？",
       "qvi": "Bạn thích môn nào nhất?",
       "scene": "🔬📚",
       "ans": "我最喜欢科学",
       "opts": [
        {
         "txt": "我今天在家休息",
         "ico": "🏠",
         "py": "Wǒ jīntiān zàijiā xiūxi"
        },
        {
         "txt": "他们去公园了",
         "ico": "🌳",
         "py": "Tāmen qù gōngyuán le"
        },
        {
         "txt": "我最喜欢科学",
         "ico": "🔬",
         "py": "Wǒ zuì xǐhuan kēxué"
        }
       ],
       "qpy": "Nǐ zuì xǐhuan nǎ yī kē?"
      },
      {
       "q": "今年的考生有多少？",
       "qvi": "Năm nay có bao nhiêu thí sinh?",
       "scene": "📝🧑‍🎓❓",
       "ans": "有两千多个",
       "opts": [
        {
         "txt": "他是我的同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "有两千多个",
         "ico": "📝",
         "py": "Yǒu liǎng qiān duō gè"
        },
        {
         "txt": "我在北京工作",
         "ico": "🏢",
         "py": "Wǒ zài Běijīng gōngzuò"
        }
       ],
       "qpy": "Jīnnián de kǎoshēng yǒu duōshao?"
      },
      {
       "q": "这个学期课堂上的教学怎么样？",
       "qvi": "Việc dạy học trong lớp kỳ này thế nào?",
       "scene": "📖👩‍🏫👍",
       "ans": "教学和教育都很好",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "教学和教育都很好",
         "ico": "👍",
         "py": "Jiàoxué hé jiàoyù dōu hěn hǎo"
        },
        {
         "txt": "他有一个妹妹",
         "ico": "👧",
         "py": "Tā yǒu yī gè mèimei"
        }
       ],
       "qpy": "Zhè gè xuéqī kètáng shàng de jiàoxué zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm trường học của con",
      "steps": [
       "<b>Bước 1:</b> Bạn đang tìm trường cho con. Nhắn tin cho đồng nghiệp có con đang đi học để hỏi: <i>\"高中有三个年级\"</i> đúng không, và <i>\"校园有公园那么大\"</i> không.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu so sánh về trường, lớp, giáo viên mà bạn biết, dùng mẫu \"A + 有 + B + 那么 + tính từ\", ví dụ <i>\"这块黑板有门那么大\"</i>.",
       "<b>Bước 3:</b> Gọi điện hỏi nhà trường về thời gian khai giảng, số học sinh, rồi nói thử <i>\"开学有两个星期了\"</i> hoặc <i>\"中小学有一千个学生\"</i> khi kể lại với người thân."
      ]
     }
    }
   ]
  },
  "2.8": {
   "lessons": [
    {
     "id": "2.8A",
     "name": "Bài 2.8A: Cơ thể và giữ gìn sức khỏe",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 吃完 + 🍚 饭 + 了",
       "🧼 洗 + ✨ 干净",
       "👀 看 + ✅ 清楚"
      ],
      "tip": "Bổ ngữ kết quả đứng NGAY SAU động từ, cho biết hành động đã đạt kết quả gì: 吃完 (ăn xong), 洗干净 (rửa sạch), 看错 (nhìn nhầm), 站好 (đứng vững), 看清楚 (nhìn rõ). Phủ định dùng 没: 没洗干净 (chưa rửa sạch).",
      "vn_tip": "Người Việt hay nói \"ăn xong cơm\" rồi dịch thành 吃了完饭 hoặc bỏ kết quả, chỉ nói 我吃饭了. Đúng: 我吃完饭了. Khi phủ định, dùng 没 và KHÔNG thêm 了: nói 没洗干净, không nói 没洗干净了."
     },
     "chunks": [
      {
       "scene": "🧑🍚✅",
       "full": "我吃完饭了",
       "vi": "Tôi ăn cơm xong rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "吃完",
         "ico": "🍚",
         "c": "v",
         "py": "chī wán",
         "hv": "cật hoàn"
        },
        {
         "t": "饭了",
         "ico": "✅",
         "c": "o",
         "py": "fàn le",
         "hv": "phạn liễu"
        }
       ],
       "traceWord": "完",
       "py": "Wǒ chī wán fàn le",
       "traceKey": "wan",
       "traceInfo": [
        {
         "c": "完",
         "py": "wán",
         "hv": "hoàn"
        }
       ]
      },
      {
       "scene": "💇🧼✨",
       "full": "他的头发洗干净了",
       "vi": "Tóc của anh ấy đã gội sạch rồi",
       "parts": [
        {
         "t": "他的头发",
         "ico": "💇",
         "c": "s",
         "py": "tā de tóufa",
         "hv": "tha đích đầu phát"
        },
        {
         "t": "洗干净",
         "ico": "🧼",
         "c": "v",
         "py": "xǐ gānjìng",
         "hv": "tẩy can tịnh"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "头发",
       "py": "Tā de tóufa xǐ gānjìng le",
       "traceKey": "toufa",
       "traceInfo": [
        {
         "c": "头",
         "py": "tóu",
         "hv": "đầu"
        },
        {
         "c": "发",
         "py": "fa",
         "hv": "phát"
        }
       ]
      },
      {
       "scene": "🦶💥😣",
       "full": "我的脚碰疼了",
       "vi": "Chân tôi bị va đau rồi",
       "parts": [
        {
         "t": "我的脚",
         "ico": "🦶",
         "c": "s",
         "py": "wǒ de jiǎo",
         "hv": "ngã đích cước"
        },
        {
         "t": "碰疼",
         "ico": "💥",
         "c": "v",
         "py": "pèng téng",
         "hv": "bính đông"
        },
        {
         "t": "了",
         "ico": "😣",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "脚",
       "py": "Wǒ de jiǎo pèng téng le",
       "traceKey": "jiao",
       "traceInfo": [
        {
         "c": "脚",
         "py": "jiǎo",
         "hv": "cước"
        }
       ]
      },
      {
       "scene": "👀🔍❓",
       "full": "你的眼睛看清楚了吗",
       "vi": "Mắt bạn nhìn rõ rồi chứ?",
       "parts": [
        {
         "t": "你的眼睛",
         "ico": "👀",
         "c": "s",
         "py": "nǐ de yǎnjing",
         "hv": "nễ đích nhãn tình"
        },
        {
         "t": "看清楚",
         "ico": "🔍",
         "c": "v",
         "py": "kàn qīngchu",
         "hv": "khán thanh sở"
        },
        {
         "t": "了吗",
         "ico": "❓",
         "c": "o",
         "py": "le ma",
         "hv": "liễu ma"
        }
       ],
       "traceWord": "眼睛",
       "py": "Nǐ de yǎnjing kàn qīngchu le ma",
       "traceKey": "yanjing",
       "traceInfo": [
        {
         "c": "眼",
         "py": "yǎn",
         "hv": "nhãn"
        },
        {
         "c": "睛",
         "py": "jing",
         "hv": "tình"
        }
       ]
      },
      {
       "scene": "🧍📏🤔",
       "full": "我看错他的个子了",
       "vi": "Tôi đã nhìn nhầm chiều cao của anh ấy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "看错",
         "ico": "👀",
         "c": "v",
         "py": "kàn cuò",
         "hv": "khán thác"
        },
        {
         "t": "他的个子了",
         "ico": "📏",
         "c": "o",
         "py": "tā de gèzi le",
         "hv": "tha đích cá tử liễu"
        }
       ],
       "traceWord": "个子",
       "py": "Wǒ kàn cuò tā de gèzi le",
       "traceKey": "gezi",
       "traceInfo": [
        {
         "c": "个",
         "py": "gè",
         "hv": "cá"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "👶👄🧼",
       "full": "孩子的嘴没洗干净",
       "vi": "Miệng của đứa bé chưa rửa sạch",
       "parts": [
        {
         "t": "孩子的嘴",
         "ico": "👶",
         "c": "s",
         "py": "háizi de zuǐ",
         "hv": "hài tử đích chủy"
        },
        {
         "t": "没",
         "ico": "🚫",
         "c": "v",
         "py": "méi",
         "hv": "một"
        },
        {
         "t": "洗干净",
         "ico": "🧼",
         "c": "o",
         "py": "xǐ gānjìng",
         "hv": "tẩy can tịnh"
        }
       ],
       "traceWord": "嘴",
       "py": "Háizi de zuǐ méi xǐ gānjìng",
       "traceKey": "zui",
       "traceInfo": [
        {
         "c": "嘴",
         "py": "zuǐ",
         "hv": "chủy"
        }
       ]
      },
      {
       "scene": "🧍🚫🤕",
       "full": "他没站好就倒了",
       "vi": "Anh ấy chưa đứng vững đã ngã rồi",
       "parts": [
        {
         "t": "他",
         "ico": "🧍",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "没站好",
         "ico": "🚫",
         "c": "v",
         "py": "méi zhàn hǎo",
         "hv": "một trạm hảo"
        },
        {
         "t": "就倒了",
         "ico": "🤕",
         "c": "o",
         "py": "jiù dǎo le",
         "hv": "tựu đảo liễu"
        }
       ],
       "traceWord": "倒",
       "py": "Tā méi zhàn hǎo jiù dǎo le",
       "traceKey": "dao",
       "traceInfo": [
        {
         "c": "倒",
         "py": "dǎo",
         "hv": "đảo"
        }
       ]
      },
      {
       "scene": "😴🛌💆",
       "full": "我睡好了全身都舒服",
       "vi": "Tôi ngủ ngon rồi nên toàn thân đều dễ chịu",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "睡好了",
         "ico": "😴",
         "c": "v",
         "py": "shuì hǎo le",
         "hv": "thụy hảo liễu"
        },
        {
         "t": "全身都舒服",
         "ico": "💆",
         "c": "o",
         "py": "quánshēn dōu shūfu",
         "hv": "toàn thân đô thư phục"
        }
       ],
       "traceWord": "舒服",
       "py": "Wǒ shuì hǎo le quánshēn dōu shūfu",
       "traceKey": "shufu",
       "traceInfo": [
        {
         "c": "舒",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "服",
         "py": "fu",
         "hv": "phục"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的脸洗干净了吗？",
       "qvi": "Mặt bạn rửa sạch chưa?",
       "scene": "🧑🧼",
       "ans": "我洗干净了",
       "opts": [
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我洗干净了",
         "ico": "🧼",
         "py": "Wǒ xǐ gānjìng le"
        },
        {
         "txt": "我在北京",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng"
        }
       ],
       "qpy": "Nǐ de liǎn xǐ gānjìng le ma?"
      },
      {
       "q": "你头疼吗？",
       "qvi": "Bạn bị đau đầu à?",
       "scene": "🤕💊",
       "ans": "我头很疼",
       "opts": [
        {
         "txt": "水从上边流下来",
         "ico": "💧",
         "py": "Shuǐ cóng shàngbian liú xià lái"
        },
        {
         "txt": "我头很疼",
         "ico": "🤕",
         "py": "Wǒ tóu hěn téng"
        },
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        }
       ],
       "qpy": "Nǐ tóu téng ma?"
      },
      {
       "q": "你的眼睛怎么了？",
       "qvi": "Mắt bạn bị làm sao vậy?",
       "scene": "👀❓",
       "ans": "我的一只眼看不清楚",
       "opts": [
        {
         "txt": "他的身体很健康",
         "ico": "💪",
         "py": "Tā de shēntǐ hěn jiànkāng"
        },
        {
         "txt": "我的手机很便宜",
         "ico": "📱",
         "py": "Wǒ de shǒujī hěn piányi"
        },
        {
         "txt": "我的一只眼看不清楚",
         "ico": "👀",
         "py": "Wǒ de yī zhǐ yǎn kàn bù qīngchu"
        }
       ],
       "qpy": "Nǐ de yǎnjing zěnme le?"
      },
      {
       "q": "你的腿好了吗？",
       "qvi": "Chân bạn khỏi chưa?",
       "scene": "🦵✅",
       "ans": "我的腿好了",
       "opts": [
        {
         "txt": "我们去机场",
         "ico": "✈️",
         "py": "Wǒmen qù jīchǎng"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        },
        {
         "txt": "我的腿好了",
         "ico": "🦵",
         "py": "Wǒ de tuǐ hǎo le"
        }
       ],
       "qpy": "Nǐ de tuǐ hǎo le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm đồng nghiệp bị đau",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng đồng nghiệp vừa ngã ở công ty. Hỏi thăm bằng tiếng Trung: <i>\"你的脚碰疼了吗？\"</i> và <i>\"你的腿好了吗？\"</i> Nói to từng câu 3 lần.",
       "<b>Bước 2:</b> Tự kể về mình cho đồng nghiệp: <i>\"我吃完饭了\"</i>, <i>\"我睡好了全身都舒服\"</i>. Thay động từ và kết quả (吃完, 睡好, 洗干净) để tự nói thêm 3 câu về buổi sáng của bạn.",
       "<b>Bước 3:</b> Nhắn tin hoặc nói thành tiếng một lần nhắc nhở: <i>\"他的头发洗干净了\"</i> hoặc <i>\"孩子的嘴没洗干净\"</i>, rồi tự nói câu phủ định với 没 cho việc chưa làm xong hôm nay."
      ]
     }
    },
    {
     "id": "2.8B",
     "name": "Bài 2.8B: Đi khám bệnh, bệnh viện và thuốc",
     "grammar": {
      "formulas": [
       "🧑 医生 + 👉 对 + 🧑 他 + 💬 说",
       "💊 药 + 👉 对 + 👀 眼睛 + ✅ 很好",
       "🧑 我 + 👉 对 + 🏥 医院 + 很熟"
      ],
      "tip": "Giới từ 对 (duì, Hán Việt \"đối\") dẫn ra đối tượng của hành động hoặc cảm nhận, đứng TRƯỚC động từ/tính từ: 对 + đối tượng + động từ/tính từ. Ví dụ 医生对他说 (bác sĩ nói với anh ấy), 药对身体好 (thuốc tốt cho cơ thể).",
      "vn_tip": "Người Việt hay đặt đối tượng sau động từ như tiếng Việt (\"nói với anh ấy\") và viết 说对他. Đúng: 对他说. Phủ định: nếu phủ định cả hành động thì 没/不 đứng trước 对 (我没对他说), còn \"không tốt cho\" thì 不 đứng trước tính từ (药对身体不好)."
     },
     "chunks": [
      {
       "scene": "🏪👨‍⚕️😊",
       "full": "药店的人对我很好",
       "vi": "Người ở hiệu thuốc rất tốt với tôi",
       "parts": [
        {
         "t": "药店的人",
         "ico": "🏪",
         "c": "s",
         "py": "yàodiàn de rén",
         "hv": "dược điếm đích nhân"
        },
        {
         "t": "对我",
         "ico": "🧑",
         "c": "o",
         "py": "duì wǒ",
         "hv": "đối ngã"
        },
        {
         "t": "很好",
         "ico": "😊",
         "c": "v",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "药店",
       "py": "Yàodiàn de rén duì wǒ hěn hǎo",
       "traceKey": "yaodian",
       "traceInfo": [
        {
         "c": "药",
         "py": "yào",
         "hv": "dược"
        },
        {
         "c": "店",
         "py": "diàn",
         "hv": "điếm"
        }
       ]
      },
      {
       "scene": "👨‍⚕️🧑🏥",
       "full": "院长对病人很好",
       "vi": "Viện trưởng rất tốt với bệnh nhân",
       "parts": [
        {
         "t": "院长",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yuànzhǎng",
         "hv": "viện trưởng"
        },
        {
         "t": "对病人",
         "ico": "🛏️",
         "c": "o",
         "py": "duì bìngrén",
         "hv": "đối bệnh nhân"
        },
        {
         "t": "很好",
         "ico": "😊",
         "c": "v",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "院长",
       "py": "Yuànzhǎng duì bìngrén hěn hǎo",
       "traceKey": "yuanzhang",
       "traceInfo": [
        {
         "c": "院",
         "py": "yuàn",
         "hv": "viện"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "💧👁️✅",
       "full": "这瓶药水对眼睛很好",
       "vi": "Lọ thuốc nước này rất tốt cho mắt",
       "parts": [
        {
         "t": "这瓶药水",
         "ico": "💧",
         "c": "s",
         "py": "zhè píng yàoshuǐ",
         "hv": "giá bình dược thủy"
        },
        {
         "t": "对眼睛",
         "ico": "👁️",
         "c": "o",
         "py": "duì yǎnjing",
         "hv": "đối nhãn tình"
        },
        {
         "t": "很好",
         "ico": "✅",
         "c": "v",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "药水",
       "py": "Zhè píng yàoshuǐ duì yǎnjing hěn hǎo",
       "traceKey": "yaoshui",
       "traceInfo": [
        {
         "c": "药",
         "py": "yào",
         "hv": "dược"
        },
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        }
       ]
      },
      {
       "scene": "💊🤕✅",
       "full": "这些药片对头疼有用",
       "vi": "Những viên thuốc này có tác dụng với chứng đau đầu",
       "parts": [
        {
         "t": "这些药片",
         "ico": "💊",
         "c": "s",
         "py": "zhèxiē yàopiàn",
         "hv": "giá ta dược phiến"
        },
        {
         "t": "对头疼",
         "ico": "🤕",
         "c": "o",
         "py": "duì tóu téng",
         "hv": "đối đầu đông"
        },
        {
         "t": "有用",
         "ico": "✅",
         "c": "v",
         "py": "yǒuyòng",
         "hv": "hữu dụng"
        }
       ],
       "traceWord": "药片",
       "py": "Zhèxiē yàopiàn duì tóu téng yǒuyòng",
       "traceKey": "yaopian",
       "traceInfo": [
        {
         "c": "药",
         "py": "yào",
         "hv": "dược"
        },
        {
         "c": "片",
         "py": "piàn",
         "hv": "phiến"
        }
       ]
      },
      {
       "scene": "👨‍⚕️🩺🧑",
       "full": "医生对他做了检查",
       "vi": "Bác sĩ đã khám cho anh ấy",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "对他",
         "ico": "🧑",
         "c": "o",
         "py": "duì tā",
         "hv": "đối tha"
        },
        {
         "t": "做了检查",
         "ico": "🩺",
         "c": "v",
         "py": "zuò le jiǎnchá",
         "hv": "tố liễu kiểm tra"
        }
       ],
       "traceWord": "检查",
       "py": "Yīshēng duì tā zuò le jiǎnchá",
       "traceKey": "jiancha",
       "traceInfo": [
        {
         "c": "检",
         "py": "jiǎn",
         "hv": "kiểm"
        },
        {
         "c": "查",
         "py": "chá",
         "hv": "tra"
        }
       ]
      },
      {
       "scene": "👨‍⚕️💬🏠",
       "full": "医生对他说可以出院了",
       "vi": "Bác sĩ nói với anh ấy là có thể xuất viện rồi",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "对他说",
         "ico": "💬",
         "c": "v",
         "py": "duì tā shuō",
         "hv": "đối tha thuyết"
        },
        {
         "t": "可以出院了",
         "ico": "🏠",
         "c": "o",
         "py": "kěyǐ chūyuàn le",
         "hv": "khả dĩ xuất viện liễu"
        }
       ],
       "traceWord": "出院",
       "py": "Yīshēng duì tā shuō kěyǐ chūyuàn le",
       "traceKey": "chuyuan",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "院",
         "py": "yuàn",
         "hv": "viện"
        }
       ]
      },
      {
       "scene": "👨‍⚕️💬🛏️",
       "full": "医生对他说要住院",
       "vi": "Bác sĩ nói với anh ấy là cần nằm viện",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "对他说",
         "ico": "💬",
         "c": "v",
         "py": "duì tā shuō",
         "hv": "đối tha thuyết"
        },
        {
         "t": "要住院",
         "ico": "🛏️",
         "c": "o",
         "py": "yào zhùyuàn",
         "hv": "yếu trú viện"
        }
       ],
       "traceWord": "住院",
       "py": "Yīshēng duì tā shuō yào zhùyuàn",
       "traceKey": "zhuyuan",
       "traceInfo": [
        {
         "c": "住",
         "py": "zhù",
         "hv": "trú"
        },
        {
         "c": "院",
         "py": "yuàn",
         "hv": "viện"
        }
       ]
      },
      {
       "scene": "🧑🌿💉",
       "full": "我对中医和西医都不太熟",
       "vi": "Tôi không rành lắm cả Đông y lẫn Tây y",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "对中医和西医",
         "ico": "🌿",
         "c": "o",
         "py": "duì zhōngyī hé xīyī",
         "hv": "đối trung y hòa tây y"
        },
        {
         "t": "都不太熟",
         "ico": "🤷",
         "c": "v",
         "py": "dōu bù tài shú",
         "hv": "đô bất thái thục"
        }
       ],
       "traceWord": "西医",
       "py": "Wǒ duì zhōngyī hé xīyī dōu bù tài shú",
       "traceKey": "xiyi",
       "traceInfo": [
        {
         "c": "西",
         "py": "xī",
         "hv": "tây"
        },
        {
         "c": "医",
         "py": "yī",
         "hv": "y"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "医生对你说什么？",
       "qvi": "Bác sĩ nói gì với bạn?",
       "scene": "👨‍⚕️💬❓",
       "ans": "他对我说吃一片药",
       "opts": [
        {
         "txt": "他对我说吃一片药",
         "ico": "💊",
         "py": "Tā duì wǒ shuō chī yī piàn yào"
        },
        {
         "txt": "我在公司工作",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī gōngzuò"
        },
        {
         "txt": "药店在医院旁边",
         "ico": "🏪",
         "py": "Yàodiàn zài yīyuàn pángbiān"
        }
       ],
       "qpy": "Yīshēng duì nǐ shuō shénme?"
      },
      {
       "q": "药片掉在哪儿了？",
       "qvi": "Viên thuốc rơi ở đâu rồi?",
       "scene": "💊⬇️❓",
       "ans": "药片掉在地上了",
       "opts": [
        {
         "txt": "我们去机场",
         "ico": "✈️",
         "py": "Wǒmen qù jīchǎng"
        },
        {
         "txt": "药片掉在地上了",
         "ico": "💊",
         "py": "Yàopiàn diào zài dìshang le"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Yàopiàn diào zài nǎr le?"
      },
      {
       "q": "他的检查正常吗？",
       "qvi": "Kết quả khám của anh ấy bình thường chứ?",
       "scene": "🩺✅❓",
       "ans": "他的检查很正常",
       "opts": [
        {
         "txt": "他住在北京",
         "ico": "🏙️",
         "py": "Tā zhù zài Běijīng"
        },
        {
         "txt": "我去药店买药",
         "ico": "🏪",
         "py": "Wǒ qù yàodiàn mǎi yào"
        },
        {
         "txt": "他的检查很正常",
         "ico": "🩺",
         "py": "Tā de jiǎnchá hěn zhèngcháng"
        }
       ],
       "qpy": "Tā de jiǎnchá zhèngcháng ma?"
      },
      {
       "q": "你对这个医院熟吗？",
       "qvi": "Bạn có rành bệnh viện này không?",
       "scene": "🧑🏥❓",
       "ans": "我对医院很熟",
       "opts": [
        {
         "txt": "我想买一些药",
         "ico": "💊",
         "py": "Wǒ xiǎng mǎi yīxiē yào"
        },
        {
         "txt": "院里有很多花",
         "ico": "🌸",
         "py": "Yuàn lǐ yǒu hěn duō huā"
        },
        {
         "txt": "我对医院很熟",
         "ico": "🏥",
         "py": "Wǒ duì yīyuàn hěn shú"
        }
       ],
       "qpy": "Nǐ duì zhè gè yīyuàn shú ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi bác sĩ và mua thuốc",
      "steps": [
       "<b>Bước 1:</b> Đóng vai bệnh nhân gặp bác sĩ. Tự nói thành tiếng lời bác sĩ dặn: <i>\"医生对他说要住院\"</i> rồi đổi thành <i>\"医生对他说可以出院了\"</i>, tập 3 lần mỗi câu.",
       "<b>Bước 2:</b> Đến hiệu thuốc hỏi nhân viên. Dùng mẫu 对: <i>\"这些药片对头疼有用\"</i>, <i>\"这瓶药水对眼睛很好\"</i> để tự đặt thêm 3 câu hỏi hoặc nhận xét về các loại thuốc bạn hay dùng.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp: kể bác sĩ đã nói gì với bạn bằng mẫu <i>\"医生对我说……\"</i>, rồi nói <i>\"我对医院很熟\"</i> hoặc <i>\"我对中医和西医都不太熟\"</i> tùy bạn."
      ]
     }
    },
    {
     "id": "2.8C",
     "name": "Bài 2.8C: Cảm giác và tâm trạng",
     "grammar": {
      "formulas": [
       "❓ 你 + 🔄 是不是 + 😊 很开心",
       "❓ 他 + 🔄 是不是 + 😢 哭了",
       "🧑 他 + 🤔 好像 + 😨 很怕医生 + 🤝 吧"
      ],
      "tip": "Hỏi xác nhận: S + 是不是 + vị ngữ? nghĩa là \"có phải … không?\" (是不是, shì bu shì, Hán Việt \"thị bất thị\"). Trợ từ 吧 (ba) đặt cuối câu khi bạn đoán và mong người nghe xác nhận: 他好像很怕医生吧 (hình như anh ấy sợ bác sĩ nhỉ).",
      "vn_tip": "Người Việt hay thêm 吗 sau 是不是 như \"có phải … không\", viết 你是不是很开心吗. Sai! 是不是 và 吗 không dùng chung. Đúng: 你是不是很开心？ hoặc 你很开心吗？ hoặc 你很开心吧？"
     },
     "chunks": [
      {
       "scene": "🧑❓😊",
       "full": "你是不是很开心",
       "vi": "Có phải bạn rất vui không?",
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
         "t": "很开心",
         "ico": "😊",
         "c": "o",
         "py": "hěn kāixīn",
         "hv": "ngận khai tâm"
        }
       ],
       "traceWord": "开心",
       "py": "Nǐ shì bu shì hěn kāixīn",
       "traceKey": "kaixin",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "🧑❓🌤️",
       "full": "你是不是心情不好",
       "vi": "Có phải tâm trạng bạn không tốt không?",
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
         "t": "心情不好",
         "ico": "🌧️",
         "c": "o",
         "py": "xīnqíng bù hǎo",
         "hv": "tâm tình bất hảo"
        }
       ],
       "traceWord": "心情",
       "py": "Nǐ shì bu shì xīnqíng bù hǎo",
       "traceKey": "xinqing",
       "traceInfo": [
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        },
        {
         "c": "情",
         "py": "qíng",
         "hv": "tình"
        }
       ]
      },
      {
       "scene": "🧑❓😢",
       "full": "他是不是哭了",
       "vi": "Có phải anh ấy khóc rồi không?",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是不是",
         "ico": "❓",
         "c": "v",
         "py": "shì bu shì",
         "hv": "thị bất thị"
        },
        {
         "t": "哭了",
         "ico": "😢",
         "c": "o",
         "py": "kū le",
         "hv": "khốc liễu"
        }
       ],
       "traceWord": "哭",
       "py": "Tā shì bu shì kū le",
       "traceKey": "ku",
       "traceInfo": [
        {
         "c": "哭",
         "py": "kū",
         "hv": "khốc"
        }
       ]
      },
      {
       "scene": "🧑❓😣",
       "full": "你是不是感到难受",
       "vi": "Có phải bạn thấy khó chịu trong người không?",
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
         "t": "感到难受",
         "ico": "😣",
         "c": "o",
         "py": "gǎndào nánshòu",
         "hv": "cảm đáo nan thụ"
        }
       ],
       "traceWord": "感到",
       "py": "Nǐ shì bu shì gǎndào nánshòu",
       "traceKey": "gandao",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑❓💓",
       "full": "你是不是心里很急",
       "vi": "Có phải trong lòng bạn đang rất sốt ruột không?",
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
         "t": "心里很急",
         "ico": "💓",
         "c": "o",
         "py": "xīnlǐ hěn jí",
         "hv": "tâm lý ngận cấp"
        }
       ],
       "traceWord": "心里",
       "py": "Nǐ shì bu shì xīnlǐ hěn jí",
       "traceKey": "xinli",
       "traceInfo": [
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        },
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "👨‍🏫❓🥹",
       "full": "老师是不是很感动",
       "vi": "Có phải thầy giáo rất cảm động không?",
       "parts": [
        {
         "t": "老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "是不是",
         "ico": "❓",
         "c": "v",
         "py": "shì bu shì",
         "hv": "thị bất thị"
        },
        {
         "t": "很感动",
         "ico": "🥹",
         "c": "o",
         "py": "hěn gǎndòng",
         "hv": "ngận cảm động"
        }
       ],
       "traceWord": "感动",
       "py": "Lǎoshī shì bu shì hěn gǎndòng",
       "traceKey": "gandong",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🧑❓🤒",
       "full": "你是不是感觉不舒服",
       "vi": "Có phải bạn cảm thấy không khỏe không?",
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
         "t": "感觉不舒服",
         "ico": "🤒",
         "c": "o",
         "py": "gǎnjué bù shūfu",
         "hv": "cảm giác bất thư phục"
        }
       ],
       "traceWord": "感觉",
       "py": "Nǐ shì bu shì gǎnjué bù shūfu",
       "traceKey": "ganjue",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "觉",
         "py": "jué",
         "hv": "giác"
        }
       ]
      },
      {
       "scene": "🧑🤔😨👨‍⚕️",
       "full": "他好像很怕医生吧",
       "vi": "Hình như anh ấy sợ bác sĩ nhỉ",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "好像",
         "ico": "🤔",
         "c": "v",
         "py": "hǎoxiàng",
         "hv": "hảo tượng"
        },
        {
         "t": "很怕医生吧",
         "ico": "😨",
         "c": "o",
         "py": "hěn pà yīshēng ba",
         "hv": "ngận phạ y sinh ba"
        }
       ],
       "traceWord": "好像",
       "py": "Tā hǎoxiàng hěn pà yīshēng ba",
       "traceKey": "haoxiang",
       "traceInfo": [
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "像",
         "py": "xiàng",
         "hv": "tượng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你是不是很难过？",
       "qvi": "Có phải bạn rất buồn không?",
       "scene": "🧑😢❓",
       "ans": "我很难过",
       "opts": [
        {
         "txt": "我想去北京",
         "ico": "🏙️",
         "py": "Wǒ xiǎng qù Běijīng"
        },
        {
         "txt": "我很难过",
         "ico": "😢",
         "py": "Wǒ hěn nánguò"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐ shì bu shì hěn nánguò?"
      },
      {
       "q": "这个电影是不是很可怕？",
       "qvi": "Bộ phim này có phải rất đáng sợ không?",
       "scene": "🎬😱❓",
       "ans": "这个电影真的很可怕",
       "opts": [
        {
         "txt": "我明天去上班",
         "ico": "🏢",
         "py": "Wǒ míngtiān qù shàngbān"
        },
        {
         "txt": "他叫小明",
         "ico": "🧑",
         "py": "Tā jiào Xiǎomíng"
        },
        {
         "txt": "这个电影真的很可怕",
         "ico": "😱",
         "py": "Zhè gè diànyǐng zhēn de hěn kěpà"
        }
       ],
       "qpy": "Zhè gè diànyǐng shì bu shì hěn kěpà?"
      },
      {
       "q": "你今天很快乐吧？",
       "qvi": "Hôm nay bạn vui lắm nhỉ?",
       "scene": "🧑😄❓",
       "ans": "我今天非常快乐",
       "opts": [
        {
         "txt": "我坐地铁来的",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě lái de"
        },
        {
         "txt": "我今天非常快乐",
         "ico": "😄",
         "py": "Wǒ jīntiān fēicháng kuàilè"
        },
        {
         "txt": "他是我的同事",
         "ico": "🧑‍💼",
         "py": "Tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Nǐ jīntiān hěn kuàilè ba?"
      },
      {
       "q": "你觉得这件衣服怎么样？",
       "qvi": "Bạn thấy bộ quần áo này thế nào?",
       "scene": "👗🤔❓",
       "ans": "我觉得有点儿难看",
       "opts": [
        {
         "txt": "他心中很高兴",
         "ico": "😊",
         "py": "Tā xīnzhōng hěn gāoxìng"
        },
        {
         "txt": "我想吃一个鸡蛋",
         "ico": "🥚",
         "py": "Wǒ xiǎng chī yī gè jīdàn"
        },
        {
         "txt": "我觉得有点儿难看",
         "ico": "👗",
         "py": "Wǒ juéde yǒudiǎnr nánkàn"
        }
       ],
       "qpy": "Nǐ juéde zhè jiàn yīfu zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm tâm trạng đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hôm nay đồng nghiệp trông không vui. Nhắn tin hoặc nói thành tiếng: <i>\"你是不是心情不好？\"</i> và <i>\"你是不是感觉不舒服？\"</i> Nói mỗi câu 3 lần với giọng quan tâm.",
       "<b>Bước 2:</b> Đoán và xác nhận bằng 吧: <i>\"他好像很怕医生吧\"</i>. Tự đặt thêm 3 câu đoán về người quen của bạn theo mẫu 他/她 + 好像 + cảm xúc + 吧.",
       "<b>Bước 3:</b> Đóng vai người được hỏi, trả lời bằng cảm xúc thật của bạn: <i>\"我很难过\"</i> hoặc <i>\"我今天非常快乐\"</i>, rồi hỏi lại đối phương <i>\"你是不是很开心？\"</i>"
      ]
     }
    }
   ]
  },
  "2.9": {
   "lessons": [
    {
     "id": "2.9A",
     "name": "Bài 2.9A: Các môn bóng và hoạt động thể thao",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 打了 + 🏀 一场篮球",
       "🧑 我 + ⚡ 去过 + 🏙️ 三回北京",
       "🙋 请 + 🧑 你 + ✋ 举一下手"
      ],
      "tip": "Động lượng từ đứng SAU động từ và TRƯỚC tân ngữ chỉ sự vật: 打一场球 (dǎ yì chǎng qiú, đả nhất trường cầu). 场 (chǎng, trường) dùng cho trận đấu, 回 (huí, hồi) dùng cho số lần, 下 (xià, hạ) là \"một chút, một lần\" nhẹ nhàng.",
      "vn_tip": "Người Việt hay nói \"打球一场\" theo thứ tự tiếng Việt. Trong tiếng Trung, số lượng phải đứng trước danh từ: 打一场篮球, 去过三回北京."
     },
     "chunks": [
      {
       "scene": "🧑🏀🏟️",
       "full": "我打了一场篮球",
       "vi": "Tôi đã chơi một trận bóng rổ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "打了",
         "ico": "🏀",
         "c": "v",
         "py": "dǎ le",
         "hv": "đả liễu"
        },
        {
         "t": "一场篮球",
         "ico": "🏟️",
         "c": "o",
         "py": "yī chǎng lánqiú",
         "hv": "nhất trường lam cầu"
        }
       ],
       "traceWord": "篮球",
       "py": "Wǒ dǎ le yī chǎng lánqiú",
       "traceKey": "lanqiu",
       "traceInfo": [
        {
         "c": "篮",
         "py": "lán",
         "hv": "lam"
        },
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        }
       ]
      },
      {
       "scene": "🧑🏃💪",
       "full": "我喜欢体育运动",
       "vi": "Tôi thích các môn thể thao",
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
         "t": "体育运动",
         "ico": "🏃",
         "c": "o",
         "py": "tǐyù yùndòng",
         "hv": "thể dục vận động"
        }
       ],
       "traceWord": "运动",
       "py": "Wǒ xǐhuan tǐyù yùndòng",
       "traceKey": "yundong",
       "traceInfo": [
        {
         "c": "运",
         "py": "yùn",
         "hv": "vận"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "👩‍🏫🙋✋",
       "full": "老师请大家举手",
       "vi": "Thầy cô mời mọi người giơ tay",
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
         "t": "大家举手",
         "ico": "🙋",
         "c": "o",
         "py": "dàjiā jǔshǒu",
         "hv": "đại gia cử thủ"
        }
       ],
       "traceWord": "举手",
       "py": "Lǎoshī qǐng dàjiā jǔshǒu",
       "traceKey": "jushou",
       "traceInfo": [
        {
         "c": "举",
         "py": "jǔ",
         "hv": "cử"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🙋✋👆",
       "full": "请你举一下手",
       "vi": "Mời bạn giơ tay một cái",
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
         "t": "举一下手",
         "ico": "✋",
         "c": "o",
         "py": "jǔ yī xià shǒu",
         "hv": "cử nhất hạ thủ"
        }
       ],
       "traceWord": "举",
       "py": "Qǐng nǐ jǔ yī xià shǒu",
       "traceKey": "ju",
       "traceInfo": [
        {
         "c": "举",
         "py": "jǔ",
         "hv": "cử"
        }
       ]
      },
      {
       "scene": "🧑✈️🏙️",
       "full": "我去过三回北京",
       "vi": "Tôi đã đến Bắc Kinh ba lần",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "去过",
         "ico": "✈️",
         "c": "v",
         "py": "qù guò",
         "hv": "khứ quá"
        },
        {
         "t": "三回北京",
         "ico": "🏙️",
         "c": "o",
         "py": "sān huí Běijīng",
         "hv": "tam hồi bắc kinh"
        }
       ],
       "traceWord": "回",
       "py": "Wǒ qù guò sān huí Běijīng",
       "traceKey": "hui",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        }
       ]
      },
      {
       "scene": "🏢📅🎉",
       "full": "公司明天举行活动",
       "vi": "Ngày mai công ty tổ chức hoạt động",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "明天举行",
         "ico": "📅",
         "c": "v",
         "py": "míngtiān jǔxíng",
         "hv": "minh thiên cử hành"
        },
        {
         "t": "活动",
         "ico": "🎉",
         "c": "o",
         "py": "huódòng",
         "hv": "hoạt động"
        }
       ],
       "traceWord": "举行",
       "py": "Gōngsī míngtiān jǔxíng huódòng",
       "traceKey": "juxing",
       "traceInfo": [
        {
         "c": "举",
         "py": "jǔ",
         "hv": "cử"
        },
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        }
       ]
      },
      {
       "scene": "🧑📣🏆",
       "full": "我们给你加油",
       "vi": "Chúng tôi cổ vũ bạn",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "给",
         "ico": "🎁",
         "c": "v",
         "py": "gěi",
         "hv": "cấp"
        },
        {
         "t": "你加油",
         "ico": "📣",
         "c": "o",
         "py": "nǐ jiāyóu",
         "hv": "nễ gia du"
        }
       ],
       "traceWord": "加油",
       "py": "Wǒmen gěi nǐ jiāyóu",
       "traceKey": "jiayou",
       "traceInfo": [
        {
         "c": "加",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "油",
         "py": "yóu",
         "hv": "du"
        }
       ]
      },
      {
       "scene": "👥🤝🏐",
       "full": "我们组成了一个小组",
       "vi": "Chúng tôi đã lập thành một nhóm",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "组成了",
         "ico": "🤝",
         "c": "v",
         "py": "zǔchéng le",
         "hv": "tổ thành liễu"
        },
        {
         "t": "一个小组",
         "ico": "🏐",
         "c": "o",
         "py": "yī gè xiǎozǔ",
         "hv": "nhất cá tiểu tổ"
        }
       ],
       "traceWord": "组成",
       "py": "Wǒmen zǔchéng le yī gè xiǎozǔ",
       "traceKey": "zucheng",
       "traceInfo": [
        {
         "c": "组",
         "py": "zǔ",
         "hv": "tổ"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想参加这次活动吗？",
       "qvi": "Bạn có muốn tham gia hoạt động lần này không?",
       "scene": "🧑🎉",
       "ans": "我想参加",
       "opts": [
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        },
        {
         "txt": "我想参加",
         "ico": "🙋",
         "py": "Wǒ xiǎng cānjiā"
        },
        {
         "txt": "我吃了米饭",
         "ico": "🍚",
         "py": "Wǒ chī le mǐfàn"
        }
       ],
       "qpy": "Nǐ xiǎng cānjiā zhè cì huódòng ma?"
      },
      {
       "q": "你喜欢打网球还是排球？",
       "qvi": "Bạn thích chơi quần vợt hay bóng chuyền?",
       "scene": "🎾🏐",
       "ans": "我喜欢打排球",
       "opts": [
        {
         "txt": "我在家看书",
         "ico": "📖",
         "py": "Wǒ zàijiā kàn shū"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "我喜欢打排球",
         "ico": "🏐",
         "py": "Wǒ xǐhuan dǎ páiqiú"
        }
       ],
       "qpy": "Nǐ xǐhuan dǎ wǎngqiú háishi páiqiú?"
      },
      {
       "q": "你有机会去北京吗？",
       "qvi": "Bạn có cơ hội đến Bắc Kinh không?",
       "scene": "🧑🏙️",
       "ans": "我有机会去北京",
       "opts": [
        {
         "txt": "我有机会去北京",
         "ico": "✈️",
         "py": "Wǒ yǒu jīhuì qù Běijīng"
        },
        {
         "txt": "我有三个哥哥",
         "ico": "👨‍👦‍👦",
         "py": "Wǒ yǒu sān gè gēge"
        },
        {
         "txt": "这个杯子很便宜",
         "ico": "🥤",
         "py": "Zhè gè bēizi hěn piányi"
        }
       ],
       "qpy": "Nǐ yǒu jīhuì qù Běijīng ma?"
      },
      {
       "q": "你去过几回上海？",
       "qvi": "Bạn đã đến Thượng Hải mấy lần?",
       "scene": "🧑🌆",
       "ans": "我去过两回",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我去过两回",
         "ico": "✌️",
         "py": "Wǒ qù guò liǎng huí"
        }
       ],
       "qpy": "Nǐ qù guò jǐ huí Shànghǎi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp chơi thể thao",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp, hỏi xem họ có muốn tham gia hoạt động thể thao của công ty không: <i>\"你想参加这次活动吗？\"</i>",
       "<b>Bước 2:</b> Nói với đồng nghiệp bạn thích môn nào và đã chơi mấy trận: <i>\"我打了一场篮球。\"</i> Rồi hỏi họ thích <i>\"网球还是排球\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng một lời cổ vũ cho đội của bạn: <i>\"我们给你加油！\"</i> và hẹn đi chơi cùng nhau lần sau."
      ]
     }
    },
    {
     "id": "2.9B",
     "name": "Bài 2.9B: Sân vận động, đội bóng và thành tích",
     "grammar": {
      "formulas": [
       "🅰️ 他的球鞋 + ⚖️ 比 + 🅱️ 我的贵",
       "🅰️ 体育馆 + 🙅 不如 + 🅱️ 体育场大",
       "❓ 你的座位 + 在 + 第几排？"
      ],
      "tip": "Câu so sánh: A + 比 (bǐ, tỉ) + B + tính từ. Phủ định bằng 不如 (bùrú, bất như): A不如B + tính từ, nghĩa là \"A không bằng B\". Muốn nhấn mạnh thêm có thể đặt 更 (gèng, cánh) trước tính từ: 比我更努力.",
      "vn_tip": "Người Việt hay nói \"他比我很高\". Sai! Sau 比 không dùng 很, 非常. Chỉ dùng 更, 还 hoặc nói thẳng: 他比我高, 他比我更高."
     },
     "chunks": [
      {
       "scene": "👟💰⚖️",
       "full": "他的球鞋比我的贵",
       "vi": "Giày thể thao của anh ấy đắt hơn của tôi",
       "parts": [
        {
         "t": "他的球鞋",
         "ico": "👟",
         "c": "s",
         "py": "tā de qiúxié",
         "hv": "tha đích cầu hài"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "我的贵",
         "ico": "💰",
         "c": "o",
         "py": "wǒ de guì",
         "hv": "ngã đích quý"
        }
       ],
       "traceWord": "球鞋",
       "py": "Tā de qiúxié bǐ wǒ de guì",
       "traceKey": "qiuxie",
       "traceInfo": [
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        },
        {
         "c": "鞋",
         "py": "xié",
         "hv": "hài"
        }
       ]
      },
      {
       "scene": "⚽🏟️📏",
       "full": "球场比体育场小",
       "vi": "Sân bóng nhỏ hơn sân vận động",
       "parts": [
        {
         "t": "球场",
         "ico": "⚽",
         "c": "s",
         "py": "qiúchǎng",
         "hv": "cầu trường"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "体育场小",
         "ico": "🏟️",
         "c": "o",
         "py": "tǐyùchǎng xiǎo",
         "hv": "thể dục trường tiểu"
        }
       ],
       "traceWord": "球场",
       "py": "Qiúchǎng bǐ tǐyùchǎng xiǎo",
       "traceKey": "qiuchang",
       "traceInfo": [
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🏢🏟️📏",
       "full": "体育馆不如体育场大",
       "vi": "Nhà thi đấu không rộng bằng sân vận động",
       "parts": [
        {
         "t": "体育馆",
         "ico": "🏢",
         "c": "s",
         "py": "tǐyùguǎn",
         "hv": "thể dục quán"
        },
        {
         "t": "不如",
         "ico": "🙅",
         "c": "v",
         "py": "bùrú",
         "hv": "bất như"
        },
        {
         "t": "体育场大",
         "ico": "🏟️",
         "c": "o",
         "py": "tǐyùchǎng dà",
         "hv": "thể dục trường đại"
        }
       ],
       "traceWord": "体育馆",
       "py": "Tǐyùguǎn bùrú tǐyùchǎng dà",
       "traceKey": "tiyuguan",
       "traceInfo": [
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        },
        {
         "c": "育",
         "py": "yù",
         "hv": "dục"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "👥⚽👍",
       "full": "我们队比他们队好",
       "vi": "Đội của chúng tôi giỏi hơn đội của họ",
       "parts": [
        {
         "t": "我们队",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen duì",
         "hv": "ngã môn đội"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "他们队好",
         "ico": "👍",
         "c": "o",
         "py": "tāmen duì hǎo",
         "hv": "tha môn đội hảo"
        }
       ],
       "traceWord": "队",
       "py": "Wǒmen duì bǐ tāmen duì hǎo",
       "traceKey": "dui",
       "traceInfo": [
        {
         "c": "队",
         "py": "duì",
         "hv": "đội"
        }
       ]
      },
      {
       "scene": "🧑‍✈️💪📈",
       "full": "队长比我更努力",
       "vi": "Đội trưởng còn cố gắng hơn tôi",
       "parts": [
        {
         "t": "队长",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "duìzhǎng",
         "hv": "đội trưởng"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "我更努力",
         "ico": "💪",
         "c": "o",
         "py": "wǒ gèng nǔlì",
         "hv": "ngã cánh nỗ lực"
        }
       ],
       "traceWord": "努力",
       "py": "Duìzhǎng bǐ wǒ gèng nǔlì",
       "traceKey": "nuli",
       "traceInfo": [
        {
         "c": "努",
         "py": "nǔ",
         "hv": "nỗ"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      },
      {
       "scene": "📅📊👍",
       "full": "今年的成绩比去年好",
       "vi": "Thành tích năm nay tốt hơn năm ngoái",
       "parts": [
        {
         "t": "今年的成绩",
         "ico": "📊",
         "c": "s",
         "py": "jīnnián de chéngjì",
         "hv": "kim niên đích thành tích"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "去年好",
         "ico": "👍",
         "c": "o",
         "py": "qùnián hǎo",
         "hv": "khứ niên hảo"
        }
       ],
       "traceWord": "成绩",
       "py": "Jīnnián de chéngjì bǐ qùnián hǎo",
       "traceKey": "chengji",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "绩",
         "py": "jì",
         "hv": "tích"
        }
       ]
      },
      {
       "scene": "🧑📈💯",
       "full": "我的水平提高了很多",
       "vi": "Trình độ của tôi đã nâng lên nhiều",
       "parts": [
        {
         "t": "我的水平",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ de shuǐpíng",
         "hv": "ngã đích thủy bình"
        },
        {
         "t": "提高了",
         "ico": "📈",
         "c": "v",
         "py": "tígāo le",
         "hv": "đề cao liễu"
        },
        {
         "t": "很多",
         "ico": "💯",
         "c": "o",
         "py": "hěn duō",
         "hv": "ngận đa"
        }
       ],
       "traceWord": "提高",
       "py": "Wǒ de shuǐpíng tígāo le hěn duō",
       "traceKey": "tigao",
       "traceInfo": [
        {
         "c": "提",
         "py": "tí",
         "hv": "đề"
        },
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        }
       ]
      },
      {
       "scene": "👥🏆😊",
       "full": "他们取得了好成绩",
       "vi": "Họ đã đạt được thành tích tốt",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "取得了",
         "ico": "🏆",
         "c": "v",
         "py": "qǔdé le",
         "hv": "thủ đắc liễu"
        },
        {
         "t": "好成绩",
         "ico": "😊",
         "c": "o",
         "py": "hǎo chéngjì",
         "hv": "hảo thành tích"
        }
       ],
       "traceWord": "取得",
       "py": "Tāmen qǔdé le hǎo chéngjì",
       "traceKey": "qude",
       "traceInfo": [
        {
         "c": "取",
         "py": "qǔ",
         "hv": "thủ"
        },
        {
         "c": "得",
         "py": "dé",
         "hv": "đắc"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的座位在第几排？",
       "qvi": "Chỗ ngồi của bạn ở hàng thứ mấy?",
       "scene": "🧑💺🏟️",
       "ans": "在第二排",
       "opts": [
        {
         "txt": "他是医生",
         "ico": "👨‍⚕️",
         "py": "Tā shì yīshēng"
        },
        {
         "txt": "在第二排",
         "ico": "2️⃣",
         "py": "Zài dì èr pái"
        },
        {
         "txt": "我有两个姐姐",
         "ico": "👭",
         "py": "Wǒ yǒu liǎng gè jiějie"
        }
       ],
       "qpy": "Nǐ de zuòwèi zài dì jǐ pái?"
      },
      {
       "q": "今天的人数是多少？",
       "qvi": "Hôm nay có bao nhiêu người?",
       "scene": "👥🔢",
       "ans": "一共五百人",
       "opts": [
        {
         "txt": "一共五百人",
         "ico": "👥",
         "py": "Yīgòng wǔ bǎi rén"
        },
        {
         "txt": "他是我的同学",
         "ico": "🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "明天不上班",
         "ico": "🏠",
         "py": "Míngtiān bú shàngbān"
        }
       ],
       "qpy": "Jīntiān de rénshù shì duōshao?"
      },
      {
       "q": "谁超过了小明？",
       "qvi": "Ai đã vượt qua Tiểu Minh?",
       "scene": "🏃🏃‍♀️🏁",
       "ans": "小红超过了他",
       "opts": [
        {
         "txt": "小明在北京",
         "ico": "🏙️",
         "py": "Xiǎomíng zài Běijīng"
        },
        {
         "txt": "他喜欢吃鱼",
         "ico": "🐟",
         "py": "Tā xǐhuan chī yú"
        },
        {
         "txt": "小红超过了他",
         "ico": "🏃‍♀️",
         "py": "Xiǎohóng chāoguò le tā"
        }
       ],
       "qpy": "Shéi chāoguò le Xiǎomíng?"
      },
      {
       "q": "你们球队的队长是谁？",
       "qvi": "Đội trưởng đội bóng của các bạn là ai?",
       "scene": "👥🧑‍✈️❓",
       "ans": "队长是小王",
       "opts": [
        {
         "txt": "我们在上课",
         "ico": "📚",
         "py": "Wǒmen zài shàngkè"
        },
        {
         "txt": "这是一杯茶",
         "ico": "🍵",
         "py": "Zhè shì yī bēi chá"
        },
        {
         "txt": "队长是小王",
         "ico": "🧑‍✈️",
         "py": "Duìzhǎng shì Xiǎowáng"
        }
       ],
       "qpy": "Nǐmen qiúduì de duìzhǎng shì shéi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bàn về đội bóng của công ty",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp nói về thành tích của đội: <i>\"今年的成绩比去年好。\"</i> Hỏi xem ai là đội trưởng: <i>\"你们队长是谁？\"</i>",
       "<b>Bước 2:</b> Đi mua giày thể thao, so sánh hai đôi với nhân viên bán hàng, dùng <i>\"比\"</i> và <i>\"不如\"</i>, ví dụ <i>\"他的球鞋比我的贵。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng ba câu về trình độ của bạn và của đội: <i>\"我的水平提高了很多。\"</i>, <i>\"队长比我更努力。\"</i>"
      ]
     }
    },
    {
     "id": "2.9C",
     "name": "Bài 2.9C: Luyện tập, leo núi và so sánh giống khác",
     "grammar": {
      "formulas": [
       "🅰️ 这件衣服 + 🤝 跟 + 🅱️ 那件差不多",
       "🅰️ 这个包 + 🤝 跟 + 🅱️ 那个一样轻",
       "🅰️ 他的鞋 + 🤝 跟 + 🅱️ 我的大小一样"
      ],
      "tip": "Câu so sánh bằng: A + 跟 (gēn, cân) + B + 一样 (yíyàng, nhất dạng) + tính từ, nghĩa là \"A giống/bằng B\". Phủ định: A跟B不一样 hoặc A跟B不同. Cũng có thể nói A跟B相同 (xiāngtóng, tương đồng) hoặc A跟B差不多 (gần giống).",
      "vn_tip": "Người Việt hay bỏ 一样 và nói \"这个包跟那个轻\". Thiếu 一样 thì câu không đủ nghĩa. Phải nói: 这个包跟那个一样轻. Tính từ đứng SAU 一样."
     },
     "chunks": [
      {
       "scene": "👔👔🤝",
       "full": "这件衣服跟那件差不多",
       "vi": "Cái áo này gần giống cái kia",
       "parts": [
        {
         "t": "这件衣服",
         "ico": "👔",
         "c": "s",
         "py": "zhè jiàn yīfu",
         "hv": "giá kiện y phục"
        },
        {
         "t": "跟",
         "ico": "🤝",
         "c": "v",
         "py": "gēn",
         "hv": "cân"
        },
        {
         "t": "那件差不多",
         "ico": "👕",
         "c": "o",
         "py": "nà jiàn chàbuduō",
         "hv": "na kiện sai bất đa"
        }
       ],
       "traceWord": "差不多",
       "py": "Zhè jiàn yīfu gēn nà jiàn chàbuduō",
       "traceKey": "chabuduo",
       "traceInfo": [
        {
         "c": "差",
         "py": "chà",
         "hv": "sai"
        },
        {
         "c": "不",
         "py": "bu",
         "hv": "bất"
        },
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        }
       ]
      },
      {
       "scene": "👟👟📏",
       "full": "他的鞋跟我的大小一样",
       "vi": "Giày của anh ấy cùng cỡ với giày của tôi",
       "parts": [
        {
         "t": "他的鞋",
         "ico": "👟",
         "c": "s",
         "py": "tā de xié",
         "hv": "tha đích hài"
        },
        {
         "t": "跟",
         "ico": "🤝",
         "c": "v",
         "py": "gēn",
         "hv": "cân"
        },
        {
         "t": "我的大小一样",
         "ico": "📏",
         "c": "o",
         "py": "wǒ de dàxiǎo yīyàng",
         "hv": "ngã đích đại tiểu nhất dạng"
        }
       ],
       "traceWord": "大小",
       "py": "Tā de xié gēn wǒ de dàxiǎo yīyàng",
       "traceKey": "daxiao",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        }
       ]
      },
      {
       "scene": "🛣️🛣️↔️",
       "full": "这条路跟那条路一样长",
       "vi": "Con đường này dài bằng con đường kia",
       "parts": [
        {
         "t": "这条路",
         "ico": "🛣️",
         "c": "s",
         "py": "zhè tiáo lù",
         "hv": "giá điều lộ"
        },
        {
         "t": "跟",
         "ico": "🤝",
         "c": "v",
         "py": "gēn",
         "hv": "cân"
        },
        {
         "t": "那条路一样长",
         "ico": "↔️",
         "c": "o",
         "py": "nà tiáo lù yīyàng cháng",
         "hv": "na điều lộ nhất dạng trường"
        }
       ],
       "traceWord": "长",
       "py": "Zhè tiáo lù gēn nà tiáo lù yīyàng cháng",
       "traceKey": "chang",
       "traceInfo": [
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "💇‍♀️💇‍♂️✂️",
       "full": "他的头发跟我一样短",
       "vi": "Tóc của anh ấy ngắn bằng tóc tôi",
       "parts": [
        {
         "t": "他的头发",
         "ico": "💇‍♂️",
         "c": "s",
         "py": "tā de tóufa",
         "hv": "tha đích đầu phát"
        },
        {
         "t": "跟",
         "ico": "🤝",
         "c": "v",
         "py": "gēn",
         "hv": "cân"
        },
        {
         "t": "我一样短",
         "ico": "✂️",
         "c": "o",
         "py": "wǒ yīyàng duǎn",
         "hv": "ngã nhất dạng đoản"
        }
       ],
       "traceWord": "短",
       "py": "Tā de tóufa gēn wǒ yīyàng duǎn",
       "traceKey": "duan",
       "traceInfo": [
        {
         "c": "短",
         "py": "duǎn",
         "hv": "đoản"
        }
       ]
      },
      {
       "scene": "👥📖🗣️",
       "full": "我们常常练习爬山",
       "vi": "Chúng tôi thường luyện tập leo núi",
       "parts": [
        {
         "t": "我们常常",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen chángcháng",
         "hv": "ngã môn thường thường"
        },
        {
         "t": "练习",
         "ico": "📖",
         "c": "v",
         "py": "liànxí",
         "hv": "luyện tập"
        },
        {
         "t": "爬山",
         "ico": "⛰️",
         "c": "o",
         "py": "pá shān",
         "hv": "ba sơn"
        }
       ],
       "traceWord": "练习",
       "py": "Wǒmen chángcháng liànxí pá shān",
       "traceKey": "lianxi",
       "traceInfo": [
        {
         "c": "练",
         "py": "liàn",
         "hv": "luyện"
        },
        {
         "c": "习",
         "py": "xí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "🧑💪🔁",
       "full": "你要多练一下",
       "vi": "Bạn cần luyện thêm một chút",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要",
         "ico": "💪",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "多练一下",
         "ico": "🔁",
         "c": "o",
         "py": "duō liàn yī xià",
         "hv": "đa luyện nhất hạ"
        }
       ],
       "traceWord": "练",
       "py": "Nǐ yào duō liàn yī xià",
       "traceKey": "lian",
       "traceInfo": [
        {
         "c": "练",
         "py": "liàn",
         "hv": "luyện"
        }
       ]
      },
      {
       "scene": "👥⛰️🌄",
       "full": "他爬上了那座山",
       "vi": "Anh ấy đã leo lên ngọn núi kia",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "爬上了",
         "ico": "🚶",
         "c": "v",
         "py": "pá shàng le",
         "hv": "ba thượng liễu"
        },
        {
         "t": "那座山",
         "ico": "⛰️",
         "c": "o",
         "py": "nà zuò shān",
         "hv": "na tọa sơn"
        }
       ],
       "traceWord": "爬",
       "py": "Tā pá shàng le nà zuò shān",
       "traceKey": "pa",
       "traceInfo": [
        {
         "c": "爬",
         "py": "pá",
         "hv": "ba"
        }
       ]
      },
      {
       "scene": "👜👜🪶",
       "full": "这个包跟那个一样轻",
       "vi": "Cái túi này nhẹ bằng cái kia",
       "parts": [
        {
         "t": "这个包",
         "ico": "👜",
         "c": "s",
         "py": "zhè gè bāo",
         "hv": "giá cá bao"
        },
        {
         "t": "跟",
         "ico": "🤝",
         "c": "v",
         "py": "gēn",
         "hv": "cân"
        },
        {
         "t": "那个一样轻",
         "ico": "🪶",
         "c": "o",
         "py": "nà gè yīyàng qīng",
         "hv": "na cá nhất dạng khinh"
        }
       ],
       "traceWord": "轻",
       "py": "Zhè gè bāo gēn nà gè yīyàng qīng",
       "traceKey": "qing",
       "traceInfo": [
        {
         "c": "轻",
         "py": "qīng",
         "hv": "khinh"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们的看法相同吗？",
       "qvi": "Cách nhìn của các bạn có giống nhau không?",
       "scene": "👥💭",
       "ans": "我们的看法完全相同",
       "opts": [
        {
         "txt": "我在医院工作",
         "ico": "🏥",
         "py": "Wǒ zài yīyuàn gōngzuò"
        },
        {
         "txt": "我们的看法完全相同",
         "ico": "🤝",
         "py": "Wǒmen de kànfǎ wánquán xiāngtóng"
        },
        {
         "txt": "这个杯子很贵",
         "ico": "🥤",
         "py": "Zhè gè bēizi hěn guì"
        }
       ],
       "qpy": "Nǐmen de kànfǎ xiāngtóng ma?"
      },
      {
       "q": "这两个学校一样吗？",
       "qvi": "Hai trường này có giống nhau không?",
       "scene": "🏫🏫❓",
       "ans": "两个学校很不同",
       "opts": [
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "他在听歌",
         "ico": "🎵",
         "py": "Tā zài tīng gē"
        },
        {
         "txt": "两个学校很不同",
         "ico": "🏫",
         "py": "Liǎng gè xuéxiào hěn bù tóng"
        }
       ],
       "qpy": "Zhè liǎng gè xuéxiào yīyàng ma?"
      },
      {
       "q": "他的样子像谁？",
       "qvi": "Dáng vẻ của anh ấy giống ai?",
       "scene": "🧑👨",
       "ans": "他的样子像我哥哥",
       "opts": [
        {
         "txt": "他的样子像我哥哥",
         "ico": "👨",
         "py": "Tā de yàngzi xiàng wǒ gēge"
        },
        {
         "txt": "我在家做饭",
         "ico": "🍳",
         "py": "Wǒ zàijiā zuòfàn"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Tā de yàngzi xiàng shéi?"
      },
      {
       "q": "这条路平不平？",
       "qvi": "Con đường này có bằng phẳng không?",
       "scene": "🛣️❓",
       "ans": "这条路很平",
       "opts": [
        {
         "txt": "我有一个弟弟",
         "ico": "👦",
         "py": "Wǒ yǒu yī gè dìdi"
        },
        {
         "txt": "他们同样很忙",
         "ico": "💼",
         "py": "Tāmen tóngyàng hěn máng"
        },
        {
         "txt": "这条路很平",
         "ico": "🛣️",
         "py": "Zhè tiáo lù hěn píng"
        }
       ],
       "qpy": "Zhè tiáo lù píng bù píng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ bạn đi leo núi",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin rủ đồng nghiệp đi leo núi vào Chủ nhật: <i>\"我们常常练习爬山。\"</i> Hỏi họ có muốn luyện tập cùng không.",
       "<b>Bước 2:</b> Đi mua đồ, so sánh hai món với nhân viên bán hàng bằng <i>\"跟……一样\"</i>, ví dụ <i>\"这个包跟那个一样轻。\"</i>, <i>\"这件衣服跟那件差不多。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng ba câu so sánh giống và khác giữa hai thứ bạn đang có: <i>\"我的看法跟你的完全相同。\"</i>, <i>\"这两个学校很不同。\"</i>"
      ]
     }
    }
   ]
  },
  "2.10": {
   "lessons": [
    {
     "id": "2.10A",
     "name": "Bài 2.10A: Bốn mùa và thời tiết",
     "grammar": {
      "formulas": [
       "🧑 他 + ⏱️ 已经 + 🏠 回家了",
       "🧑 我 + ⏱️ 刚 + 🏢 到公司",
       "🌧️ 天 + ⚡ 忽然 + ☔ 下雨了"
      ],
      "tip": "Phó từ thời gian đứng TRƯỚC động từ: 刚 (gāng, cương) = vừa mới; 刚刚 nhấn mạnh hơn; 忽然 (hūrán, hốt nhiên) = đột nhiên; 已经 (yǐjīng, dĩ kinh) = đã, thường đi với 了; 一直 (yīzhí, nhất trực) = suốt, luôn luôn.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ hoặc dùng 了 thay cho 已经 một cách máy móc. Đúng: 我刚到公司 (không nói 我到刚公司). 一直 đứng trước động từ: 这里一直下雪."
     },
     "chunks": [
      {
       "scene": "☀️🌤️😊",
       "full": "今天是晴天",
       "vi": "Hôm nay là ngày nắng",
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
         "t": "晴天",
         "ico": "☀️",
         "c": "o",
         "py": "qíngtiān",
         "hv": "tình thiên"
        }
       ],
       "traceWord": "晴天",
       "py": "Jīntiān shì qíngtiān",
       "traceKey": "qingtian",
       "traceInfo": [
        {
         "c": "晴",
         "py": "qíng",
         "hv": "tình"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "🌸🌳😊",
       "full": "春天很漂亮",
       "vi": "Mùa xuân rất đẹp",
       "parts": [
        {
         "t": "春天",
         "ico": "🌸",
         "c": "s",
         "py": "chūntiān",
         "hv": "xuân thiên"
        },
        {
         "t": "很",
         "ico": "➕",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "漂亮",
         "ico": "✨",
         "c": "o",
         "py": "piàoliang",
         "hv": "phiêu lượng"
        }
       ],
       "traceWord": "春天",
       "py": "Chūntiān hěn piàoliang",
       "traceKey": "chuntian",
       "traceInfo": [
        {
         "c": "春",
         "py": "chūn",
         "hv": "xuân"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "☀️🥵🌴",
       "full": "夏天非常热",
       "vi": "Mùa hè rất nóng",
       "parts": [
        {
         "t": "夏天",
         "ico": "☀️",
         "c": "s",
         "py": "xiàtiān",
         "hv": "hạ thiên"
        },
        {
         "t": "非常",
         "ico": "➕",
         "c": "v",
         "py": "fēicháng",
         "hv": "phi thường"
        },
        {
         "t": "热",
         "ico": "🥵",
         "c": "o",
         "py": "rè",
         "hv": "nhiệt"
        }
       ],
       "traceWord": "夏天",
       "py": "Xiàtiān fēicháng rè",
       "traceKey": "xiatian",
       "traceInfo": [
        {
         "c": "夏",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        }
       ]
      },
      {
       "scene": "❄️🧥🏔️",
       "full": "冬天会下雪",
       "vi": "Mùa đông sẽ có tuyết rơi",
       "parts": [
        {
         "t": "冬天",
         "ico": "❄️",
         "c": "s",
         "py": "dōngtiān",
         "hv": "đông thiên"
        },
        {
         "t": "会",
         "ico": "⚡",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "下雪",
         "ico": "☃️",
         "c": "o",
         "py": "xià xuě",
         "hv": "hạ tuyết"
        }
       ],
       "traceWord": "下雪",
       "py": "Dōngtiān huì xià xuě",
       "traceKey": "xiaxue",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "雪",
         "py": "xuě",
         "hv": "tuyết"
        }
       ]
      },
      {
       "scene": "🧑🏢⏱️",
       "full": "我刚到公司",
       "vi": "Tôi vừa mới đến công ty",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "刚到",
         "ico": "⏱️",
         "c": "v",
         "py": "gāng dào",
         "hv": "cương đáo"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "刚",
       "py": "Wǒ gāng dào gōngsī",
       "traceKey": "gang",
       "traceInfo": [
        {
         "c": "刚",
         "py": "gāng",
         "hv": "cương"
        }
       ]
      },
      {
       "scene": "☁️⚡🌧️",
       "full": "天忽然下雨了",
       "vi": "Trời đột nhiên mưa rồi",
       "parts": [
        {
         "t": "天",
         "ico": "☁️",
         "c": "s",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "t": "忽然",
         "ico": "⚡",
         "c": "v",
         "py": "hūrán",
         "hv": "hốt nhiên"
        },
        {
         "t": "下雨了",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ le",
         "hv": "hạ vũ liễu"
        }
       ],
       "traceWord": "忽然",
       "py": "Tiān hūrán xià yǔ le",
       "traceKey": "huran",
       "traceInfo": [
        {
         "c": "忽",
         "py": "hū",
         "hv": "hốt"
        },
        {
         "c": "然",
         "py": "rán",
         "hv": "nhiên"
        }
       ]
      },
      {
       "scene": "👨🏠✅",
       "full": "他已经回家了",
       "vi": "Anh ấy đã về nhà rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "已经",
         "ico": "✅",
         "c": "v",
         "py": "yǐjīng",
         "hv": "dĩ kinh"
        },
        {
         "t": "回家了",
         "ico": "🏠",
         "c": "o",
         "py": "huí jiā le",
         "hv": "hồi gia liễu"
        }
       ],
       "traceWord": "已经",
       "py": "Tā yǐjīng huí jiā le",
       "traceKey": "yijing",
       "traceInfo": [
        {
         "c": "已",
         "py": "yǐ",
         "hv": "dĩ"
        },
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        }
       ]
      },
      {
       "scene": "📍❄️⏳",
       "full": "这里一直下雪",
       "vi": "Ở đây tuyết rơi suốt",
       "parts": [
        {
         "t": "这里",
         "ico": "📍",
         "c": "s",
         "py": "zhèlǐ",
         "hv": "giá lý"
        },
        {
         "t": "一直",
         "ico": "⏳",
         "c": "v",
         "py": "yīzhí",
         "hv": "nhất trực"
        },
        {
         "t": "下雪",
         "ico": "❄️",
         "c": "o",
         "py": "xià xuě",
         "hv": "hạ tuyết"
        }
       ],
       "traceWord": "一直",
       "py": "Zhèlǐ yīzhí xià xuě",
       "traceKey": "yizhi",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "直",
         "py": "zhí",
         "hv": "trực"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "天上有很多云，天气怎么样？",
       "qvi": "Trên trời có nhiều mây, thời tiết thế nào?",
       "scene": "☁️☁️🌥️",
       "ans": "今天多云",
       "opts": [
        {
         "txt": "今天多云",
         "ico": "🌥️",
         "py": "Jīntiān duōyún"
        },
        {
         "txt": "今天下雪",
         "ico": "❄️",
         "py": "Jīntiān xià xuě"
        },
        {
         "txt": "今天天晴了",
         "ico": "☀️",
         "py": "Jīntiān tiān qíng le"
        }
       ],
       "qpy": "Tiānshàng yǒu hěn duōyún tiānqì zěnmeyàng?"
      },
      {
       "q": "你什么时候到的？",
       "qvi": "Bạn đến lúc nào vậy?",
       "scene": "🧑🚪⏱️",
       "ans": "我刚刚到",
       "opts": [
        {
         "txt": "我明天去",
         "ico": "📅",
         "py": "Wǒ míngtiān qù"
        },
        {
         "txt": "我刚刚到",
         "ico": "🚪",
         "py": "Wǒ gānggāng dào"
        },
        {
         "txt": "天阴了",
         "ico": "☁️",
         "py": "Tiān yīn le"
        }
       ],
       "qpy": "Nǐ shénme shíhou dào de?"
      },
      {
       "q": "明天天气怎么样？",
       "qvi": "Ngày mai thời tiết thế nào?",
       "scene": "📅☁️🌫️",
       "ans": "明天是阴天",
       "opts": [
        {
         "txt": "明天去公司",
         "ico": "🏢",
         "py": "Míngtiān qù gōngsī"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        },
        {
         "txt": "明天是阴天",
         "ico": "☁️",
         "py": "Míngtiān shì yīntiān"
        }
       ],
       "qpy": "Míngtiān tiānqì zěnmeyàng?"
      },
      {
       "q": "夏天和秋天，你喜欢哪个？",
       "qvi": "Mùa hè và mùa thu, bạn thích mùa nào?",
       "scene": "☀️🍂🤔",
       "ans": "我喜欢秋天",
       "opts": [
        {
         "txt": "我不是学生",
         "ico": "🎓",
         "py": "Wǒ bú shì xuéshēng"
        },
        {
         "txt": "雪是白色的",
         "ico": "❄️",
         "py": "Xuě shì báisè de"
        },
        {
         "txt": "我喜欢秋天",
         "ico": "🍂",
         "py": "Wǒ xǐhuan qiūtiān"
        }
       ],
       "qpy": "Xiàtiān hé qiūtiān nǐ xǐhuan nǎ gè?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thời tiết trước chuyến công tác",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho đồng nghiệp ở Bắc Kinh hỏi thời tiết: <i>\"明天天气怎么样？\"</i> rồi tự trả lời bằng <i>\"明天是阴天\"</i> hoặc <i>\"明天是晴天\"</i>.",
       "<b>Bước 2:</b> Gọi điện báo bạn vừa đến nơi: <i>\"我刚到公司\"</i>, rồi nói điều xảy ra bất ngờ: <i>\"天忽然下雨了\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về bốn mùa ở nơi bạn sống, dùng <i>\"春天很漂亮\"</i>, <i>\"夏天非常热\"</i> làm mẫu và thêm một câu với 一直 hoặc 已经."
      ]
     }
    },
    {
     "id": "2.10B",
     "name": "Bài 2.10B: Nhiệt độ, nắng gió và bầu trời",
     "grammar": {
      "formulas": [
       "🌧️ 天 + ⚡ 要 + ☔ 下雨了",
       "❄️ 冬天 + ⏳ 快要 + 🔜 到了",
       "🌡️ 气温 + ⏳ 就要 + 📉 变低了"
      ],
      "tip": "Mẫu 要/快要/就要……了 diễn tả việc sắp xảy ra. 快要 (kuàiyào, khoái yếu) và 就要 (jiùyào, tựu yếu) đều là \"sắp\"; 就要 nhấn mạnh rất gần. Cuối câu luôn có 了.",
      "vn_tip": "Người Việt hay quên 了 ở cuối câu, nói \"天要下雨\" cho trọn nghĩa \"sắp mưa\". Đúng: 天要下雨了. Lưu ý 快要 không đi với từ chỉ thời điểm cụ thể phía trước, còn 就要 thì được."
     },
     "chunks": [
      {
       "scene": "☁️🌧️☔",
       "full": "天要下雨了",
       "vi": "Trời sắp mưa rồi",
       "parts": [
        {
         "t": "天",
         "ico": "☁️",
         "c": "s",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "t": "要",
         "ico": "⏳",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "下雨了",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ le",
         "hv": "hạ vũ liễu"
        }
       ],
       "traceWord": "下雨",
       "py": "Tiān yào xià yǔ le",
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
       "scene": "❄️🧣🔜",
       "full": "冬天快要到了",
       "vi": "Mùa đông sắp đến rồi",
       "parts": [
        {
         "t": "冬天",
         "ico": "❄️",
         "c": "s",
         "py": "dōngtiān",
         "hv": "đông thiên"
        },
        {
         "t": "快要",
         "ico": "⏳",
         "c": "v",
         "py": "kuàiyào",
         "hv": "khoái yếu"
        },
        {
         "t": "到了",
         "ico": "🔜",
         "c": "o",
         "py": "dào le",
         "hv": "đáo liễu"
        }
       ],
       "traceWord": "快要",
       "py": "Dōngtiān kuàiyào dào le",
       "traceKey": "kuaiyao",
       "traceInfo": [
        {
         "c": "快",
         "py": "kuài",
         "hv": "khoái"
        },
        {
         "c": "要",
         "py": "yào",
         "hv": "yếu"
        }
       ]
      },
      {
       "scene": "🌡️📉🥶",
       "full": "气温就要变低了",
       "vi": "Nhiệt độ sắp xuống thấp rồi",
       "parts": [
        {
         "t": "气温",
         "ico": "🌡️",
         "c": "s",
         "py": "qìwēn",
         "hv": "khí ôn"
        },
        {
         "t": "就要",
         "ico": "⏳",
         "c": "v",
         "py": "jiùyào",
         "hv": "tựu yếu"
        },
        {
         "t": "变低了",
         "ico": "📉",
         "c": "o",
         "py": "biàn dī le",
         "hv": "biến đê liễu"
        }
       ],
       "traceWord": "变",
       "py": "Qìwēn jiùyào biàn dī le",
       "traceKey": "bian",
       "traceInfo": [
        {
         "c": "变",
         "py": "biàn",
         "hv": "biến"
        }
       ]
      },
      {
       "scene": "📅🌡️🥶",
       "full": "今天零下五度",
       "vi": "Hôm nay âm năm độ",
       "parts": [
        {
         "t": "今天",
         "ico": "📅",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "零下",
         "ico": "🥶",
         "c": "v",
         "py": "líng xià",
         "hv": "linh hạ"
        },
        {
         "t": "五度",
         "ico": "🌡️",
         "c": "o",
         "py": "wǔ dù",
         "hv": "ngũ độ"
        }
       ],
       "traceWord": "零下",
       "py": "Jīntiān líng xià wǔ dù",
       "traceKey": "lingxia",
       "traceInfo": [
        {
         "c": "零",
         "py": "líng",
         "hv": "linh"
        },
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "🌬️🏠🍃",
       "full": "外边在吹风",
       "vi": "Bên ngoài đang có gió thổi",
       "parts": [
        {
         "t": "外边",
         "ico": "🏞️",
         "c": "s",
         "py": "wàibian",
         "hv": "ngoại biên"
        },
        {
         "t": "在",
         "ico": "⚡",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "吹风",
         "ico": "🌬️",
         "c": "o",
         "py": "chuī fēng",
         "hv": "xuy phong"
        }
       ],
       "traceWord": "吹",
       "py": "Wàibian zài chuī fēng",
       "traceKey": "chui",
       "traceInfo": [
        {
         "c": "吹",
         "py": "chuī",
         "hv": "xuy"
        }
       ]
      },
      {
       "scene": "🌡️📅🔢",
       "full": "今天的温度是二十度",
       "vi": "Nhiệt độ hôm nay là hai mươi độ",
       "parts": [
        {
         "t": "今天的温度",
         "ico": "🌡️",
         "c": "s",
         "py": "jīntiān de wēndù",
         "hv": "kim thiên đích ôn độ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "二十度",
         "ico": "🔢",
         "c": "o",
         "py": "èr shí dù",
         "hv": "nhị thập độ"
        }
       ],
       "traceWord": "温度",
       "py": "Jīntiān de wēndù shì èr shí dù",
       "traceKey": "wendu",
       "traceInfo": [
        {
         "c": "温",
         "py": "wēn",
         "hv": "ôn"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "🌇⛰️⏳",
       "full": "太阳快要下山了",
       "vi": "Mặt trời sắp lặn sau núi rồi",
       "parts": [
        {
         "t": "太阳",
         "ico": "🌇",
         "c": "s",
         "py": "tàiyáng",
         "hv": "thái dương"
        },
        {
         "t": "快要",
         "ico": "⏳",
         "c": "v",
         "py": "kuàiyào",
         "hv": "khoái yếu"
        },
        {
         "t": "下山了",
         "ico": "⛰️",
         "c": "o",
         "py": "xià shān le",
         "hv": "hạ sơn liễu"
        }
       ],
       "traceWord": "太阳",
       "py": "Tàiyáng kuàiyào xià shān le",
       "traceKey": "taiyang",
       "traceInfo": [
        {
         "c": "太",
         "py": "tài",
         "hv": "thái"
        },
        {
         "c": "阳",
         "py": "yáng",
         "hv": "dương"
        }
       ]
      },
      {
       "scene": "🌙⭐🌌",
       "full": "月亮和星星在天上",
       "vi": "Mặt trăng và các vì sao ở trên trời",
       "parts": [
        {
         "t": "月亮和星星",
         "ico": "🌙",
         "c": "s",
         "py": "yuèliang hé xīngxing",
         "hv": "nguyệt lượng hòa tinh tinh"
        },
        {
         "t": "在",
         "ico": "⚡",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "天上",
         "ico": "🌌",
         "c": "o",
         "py": "tiānshàng",
         "hv": "thiên thượng"
        }
       ],
       "traceWord": "星星",
       "py": "Yuèliang hé xīngxing zài tiānshàng",
       "traceKey": "xingxing",
       "traceInfo": [
        {
         "c": "星",
         "py": "xīng",
         "hv": "tinh"
        },
        {
         "c": "星",
         "py": "xing",
         "hv": "tinh"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "秋天的天气怎么样？",
       "qvi": "Thời tiết mùa thu thế nào?",
       "scene": "🍂🌬️😌",
       "ans": "秋天很凉快",
       "opts": [
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "秋天很凉快",
         "ico": "🍂",
         "py": "Qiūtiān hěn liángkuai"
        },
        {
         "txt": "我们在学校",
         "ico": "🏫",
         "py": "Wǒmen zài xuéxiào"
        }
       ],
       "qpy": "Qiūtiān de tiānqì zěnmeyàng?"
      },
      {
       "q": "水太凉了，怎么办？",
       "qvi": "Nước lạnh quá, làm sao đây?",
       "scene": "🥶🥤❓",
       "ans": "喝热水吧",
       "opts": [
        {
         "txt": "喝热水吧",
         "ico": "♨️",
         "py": "Hē rè shuǐ ba"
        },
        {
         "txt": "我在学校",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào"
        },
        {
         "txt": "他是老师",
         "ico": "👩‍🏫",
         "py": "Tā shì lǎoshī"
        }
       ],
       "qpy": "Shuǐ tài liáng le zěnme bàn?"
      },
      {
       "q": "今天天上有云吗？",
       "qvi": "Hôm nay trên trời có mây không?",
       "scene": "☁️🌤️❓",
       "ans": "天上有很多云",
       "opts": [
        {
         "txt": "我有一个哥哥",
         "ico": "👦",
         "py": "Wǒ yǒu yī gè gēge"
        },
        {
         "txt": "他在公司",
         "ico": "🏢",
         "py": "Tā zài gōngsī"
        },
        {
         "txt": "天上有很多云",
         "ico": "☁️",
         "py": "Tiānshàng yǒu hěn duōyún"
        }
       ],
       "qpy": "Jīntiān tiānshàng yǒu yún ma?"
      },
      {
       "q": "北京冬天的气温怎么样？",
       "qvi": "Nhiệt độ mùa đông ở Bắc Kinh thế nào?",
       "scene": "🏙️❄️🌡️",
       "ans": "气温很低",
       "opts": [
        {
         "txt": "冬天很热",
         "ico": "🥵",
         "py": "Dōngtiān hěn rè"
        },
        {
         "txt": "气温很低",
         "ico": "🥶",
         "py": "Qìwēn hěn dī"
        },
        {
         "txt": "我在家",
         "ico": "🏠",
         "py": "Wǒ zàijiā"
        }
       ],
       "qpy": "Běijīng dōngtiān de qìwēn zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắc đồng nghiệp mang áo ấm",
      "steps": [
       "<b>Bước 1:</b> Xem dự báo thời tiết trên điện thoại rồi nhắn cho đồng nghiệp: <i>\"今天的温度是二十度\"</i> hoặc <i>\"今天零下五度\"</i> tùy nơi bạn xem.",
       "<b>Bước 2:</b> Báo trước điều sắp xảy ra: <i>\"天要下雨了\"</i>, <i>\"冬天快要到了\"</i>, <i>\"气温就要变低了\"</i>, rồi dặn mang áo ấm hoặc ô.",
       "<b>Bước 3:</b> Tự nói thành tiếng, nhìn ra cửa sổ hoặc bầu trời tối nay, mô tả 3 điều bạn thấy bằng <i>\"太阳快要下山了\"</i> và <i>\"月亮和星星在天上\"</i>."
      ]
     }
    },
    {
     "id": "2.10C",
     "name": "Bài 2.10C: Biển hồ, động vật và môi trường",
     "grammar": {
      "formulas": [
       "🌡️ 天气 + 📈 越来越 + 🥵 热",
       "🌬️ 空气 + 📈 越来越 + 👍 好",
       "🐕 他的狗 + 📈 越来越 + 🐾 大"
      ],
      "tip": "Mẫu S + 越来越 + tính từ nghĩa là \"ngày càng…\". 越来越 (yuè lái yuè, việt lai việt) đứng trước tính từ hoặc động từ chỉ tâm trạng, mức độ; không thêm 很 vào giữa.",
      "vn_tip": "Người Việt hay nói \"越来越很热\" vì dịch \"ngày càng rất nóng\". Đúng: 越来越热, không dùng 很 sau 越来越. Cũng đừng bỏ 越来越 thành chỉ 越 một mình trong mẫu này."
     },
     "chunks": [
      {
       "scene": "🌡️☀️🥵",
       "full": "天气越来越热",
       "vi": "Thời tiết ngày càng nóng",
       "parts": [
        {
         "t": "天气",
         "ico": "🌡️",
         "c": "s",
         "py": "tiānqì",
         "hv": "thiên khí"
        },
        {
         "t": "越来越",
         "ico": "📈",
         "c": "v",
         "py": "yuè lái yuè",
         "hv": "việt lai việt"
        },
        {
         "t": "热",
         "ico": "🥵",
         "c": "o",
         "py": "rè",
         "hv": "nhiệt"
        }
       ],
       "traceWord": "越来越",
       "py": "Tiānqì yuè lái yuè rè",
       "traceKey": "yuelaiyue",
       "traceInfo": [
        {
         "c": "越",
         "py": "yuè",
         "hv": "việt"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        },
        {
         "c": "越",
         "py": "yuè",
         "hv": "việt"
        }
       ]
      },
      {
       "scene": "🌬️🌳👍",
       "full": "空气越来越好",
       "vi": "Không khí ngày càng tốt",
       "parts": [
        {
         "t": "空气",
         "ico": "🌬️",
         "c": "s",
         "py": "kōngqì",
         "hv": "không khí"
        },
        {
         "t": "越来越",
         "ico": "📈",
         "c": "v",
         "py": "yuè lái yuè",
         "hv": "việt lai việt"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "空气",
       "py": "Kōngqì yuè lái yuè hǎo",
       "traceKey": "kongqi",
       "traceInfo": [
        {
         "c": "空",
         "py": "kōng",
         "hv": "không"
        },
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🏠🐱❤️",
       "full": "我家养了一只猫",
       "vi": "Nhà tôi nuôi một con mèo",
       "parts": [
        {
         "t": "我家",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ jiā",
         "hv": "ngã gia"
        },
        {
         "t": "养了",
         "ico": "❤️",
         "c": "v",
         "py": "yǎng le",
         "hv": "dưỡng liễu"
        },
        {
         "t": "一只猫",
         "ico": "🐱",
         "c": "o",
         "py": "yī zhǐ māo",
         "hv": "nhất chỉ miêu"
        }
       ],
       "traceWord": "养",
       "py": "Wǒ jiā yǎng le yī zhǐ māo",
       "traceKey": "yang",
       "traceInfo": [
        {
         "c": "养",
         "py": "yǎng",
         "hv": "dưỡng"
        }
       ]
      },
      {
       "scene": "🐕📈🐾",
       "full": "他的狗越来越大",
       "vi": "Con chó của anh ấy ngày càng lớn",
       "parts": [
        {
         "t": "他的狗",
         "ico": "🐕",
         "c": "s",
         "py": "tā de gǒu",
         "hv": "tha đích cẩu"
        },
        {
         "t": "越来越",
         "ico": "📈",
         "c": "v",
         "py": "yuè lái yuè",
         "hv": "việt lai việt"
        },
        {
         "t": "大",
         "ico": "🐾",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "狗",
       "py": "Tā de gǒu yuè lái yuè dà",
       "traceKey": "gou",
       "traceInfo": [
        {
         "c": "狗",
         "py": "gǒu",
         "hv": "cẩu"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧🏖️🌊",
       "full": "我们去海边玩儿",
       "vi": "Chúng tôi ra bờ biển chơi",
       "parts": [
        {
         "t": "我们",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "去",
         "ico": "🚶",
         "c": "v",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "t": "海边玩儿",
         "ico": "🏖️",
         "c": "o",
         "py": "hǎi biān wánr",
         "hv": "hải biên ngoạn nhi"
        }
       ],
       "traceWord": "海边",
       "py": "Wǒmen qù hǎi biān wánr",
       "traceKey": "haibian",
       "traceInfo": [
        {
         "c": "海",
         "py": "hǎi",
         "hv": "hải"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "🌊🌅✨",
       "full": "大海真漂亮",
       "vi": "Biển lớn đẹp thật",
       "parts": [
        {
         "t": "大海",
         "ico": "🌊",
         "c": "s",
         "py": "dàhǎi",
         "hv": "đại hải"
        },
        {
         "t": "真",
         "ico": "➕",
         "c": "v",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "t": "漂亮",
         "ico": "✨",
         "c": "o",
         "py": "piàoliang",
         "hv": "phiêu lượng"
        }
       ],
       "traceWord": "大海",
       "py": "Dàhǎi zhēn piàoliang",
       "traceKey": "dahai",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "海",
         "py": "hǎi",
         "hv": "hải"
        }
       ]
      },
      {
       "scene": "🌳🐦🐦",
       "full": "树上有两只鸟",
       "vi": "Trên cây có hai con chim",
       "parts": [
        {
         "t": "树上",
         "ico": "🌳",
         "c": "s",
         "py": "shù shàng",
         "hv": "thụ thượng"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两只鸟",
         "ico": "🐦",
         "c": "o",
         "py": "liǎng zhǐ niǎo",
         "hv": "lưỡng chỉ điểu"
        }
       ],
       "traceWord": "鸟",
       "py": "Shù shàng yǒu liǎng zhǐ niǎo",
       "traceKey": "niao",
       "traceInfo": [
        {
         "c": "鸟",
         "py": "niǎo",
         "hv": "điểu"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧🦁🐘",
       "full": "我们去动物园看动物",
       "vi": "Chúng tôi đến sở thú xem động vật",
       "parts": [
        {
         "t": "我们",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "去",
         "ico": "🚶",
         "c": "v",
         "py": "qù",
         "hv": "khứ"
        },
        {
         "t": "动物园看动物",
         "ico": "🦁",
         "c": "o",
         "py": "dòngwùyuán kàn dòngwù",
         "hv": "động vật viên khán động vật"
        }
       ],
       "traceWord": "动物园",
       "py": "Wǒmen qù dòngwùyuán kàn dòngwù",
       "traceKey": "dongwuyuan",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "物",
         "py": "wù",
         "hv": "vật"
        },
        {
         "c": "园",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你喜欢大自然吗？",
       "qvi": "Bạn có thích thiên nhiên không?",
       "scene": "🌳⛰️🙂",
       "ans": "我常常去爬山",
       "opts": [
        {
         "txt": "我是大学生",
         "ico": "🎓",
         "py": "Wǒ shì dàxuéshēng"
        },
        {
         "txt": "我常常去爬山",
         "ico": "⛰️",
         "py": "Wǒ chángcháng qù pá shān"
        },
        {
         "txt": "我不会做饭",
         "ico": "🍳",
         "py": "Wǒ bú huì zuòfàn"
        }
       ],
       "qpy": "Nǐ xǐhuan dàzìrán ma?"
      },
      {
       "q": "我们的地球怎么样了？",
       "qvi": "Trái đất của chúng ta thế nào rồi?",
       "scene": "🌍🌡️❓",
       "ans": "地球越来越热",
       "opts": [
        {
         "txt": "地球越来越热",
         "ico": "🌍",
         "py": "Dìqiú yuè lái yuè rè"
        },
        {
         "txt": "他是我同事",
         "ico": "👔",
         "py": "Tā shì wǒ tóngshì"
        },
        {
         "txt": "我想去学校",
         "ico": "🏫",
         "py": "Wǒ xiǎng qù xuéxiào"
        }
       ],
       "qpy": "Wǒmen de dìqiú zěnmeyàng le?"
      },
      {
       "q": "河边有什么？",
       "qvi": "Bên bờ sông có gì?",
       "scene": "🏞️🌳❓",
       "ans": "河边有很多树",
       "opts": [
        {
         "txt": "海很大",
         "ico": "🌊",
         "py": "Hǎi hěn dà"
        },
        {
         "txt": "我想喝水",
         "ico": "💧",
         "py": "Wǒ xiǎng hē shuǐ"
        },
        {
         "txt": "河边有很多树",
         "ico": "🌳",
         "py": "Hé biān yǒu hěn duō shù"
        }
       ],
       "qpy": "Hé biān yǒu shénme?"
      },
      {
       "q": "湖里有鱼吗？",
       "qvi": "Trong hồ có cá không?",
       "scene": "🏞️🐟❓",
       "ans": "湖里有很多鱼",
       "opts": [
        {
         "txt": "湖里没有水",
         "ico": "🏜️",
         "py": "Hú lǐ méiyǒu shuǐ"
        },
        {
         "txt": "越走越远",
         "ico": "🚶",
         "py": "Yuè zǒu yuè yuǎn"
        },
        {
         "txt": "湖里有很多鱼",
         "ico": "🐟",
         "py": "Hú lǐ yǒu hěn duō yú"
        }
       ],
       "qpy": "Hú lǐ yǒu yú ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi chơi cuối tuần",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho đồng nghiệp rủ đi chơi: <i>\"我们去海边玩儿\"</i> hoặc <i>\"我们去动物园看动物\"</i>, rồi hỏi họ thích nơi nào.",
       "<b>Bước 2:</b> Kể về thú cưng hoặc con vật bạn thích, dùng <i>\"我家养了一只猫\"</i> làm mẫu và nói thêm một câu với 越来越.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về môi trường nơi bạn sống: <i>\"天气越来越热\"</i>, <i>\"空气越来越好\"</i> (hoặc ngược lại) và một nơi có biển, sông, hồ gần nhà."
      ]
     }
    }
   ]
  },
  "2.11": {
   "lessons": [
    {
     "id": "2.11A",
     "name": "Bài 2.11A: Gọi điện, nhắn tin và tín hiệu",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 走进了 + 🏢 办公室",
       "🧑 我 + ⚡ 拿到了 + 📱 新手机",
       "🧑 你 + ⚡ 快过来 + 👋 吧"
      ],
      "tip": "Bổ ngữ xu hướng đơn: động từ + 来/去 hoặc 上/下/进/出/起/过/回/开 để chỉ hướng di chuyển, ví dụ 走进 (zǒujìn, tẩu tiến), 拿出 (náchū), 走开 (zǒukāi), 过来 (guòlái). Nếu có nơi chốn thì đặt trước 来/去: 走进办公室来.",
      "vn_tip": "Người Việt hay nói \"đi vào văn phòng\" thành 去进办公室 hoặc bỏ hẳn hướng. Tiếng Trung dùng động từ ghép hướng: 走进办公室, 拿出手机. Người nói ở gần thì dùng 来 (过来), ở xa thì dùng 去 (过去)."
     },
     "chunks": [
      {
       "scene": "👋🧑📱",
       "full": "你快过来吧",
       "vi": "Bạn mau lại đây đi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "快过来",
         "ico": "🏃",
         "c": "v",
         "py": "kuài guòlái",
         "hv": "khoái quá lai"
        },
        {
         "t": "吧",
         "ico": "👋",
         "c": "o",
         "py": "ba",
         "hv": "ba"
        }
       ],
       "traceWord": "过来",
       "py": "Nǐ kuài guòlái ba",
       "traceKey": "guolai",
       "traceInfo": [
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "🚶🧑↔️",
       "full": "请你走开一点儿",
       "vi": "Xin bạn tránh ra một chút",
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
         "t": "走开一点儿",
         "ico": "↔️",
         "c": "o",
         "py": "zǒukāi yīdiǎnr",
         "hv": "tẩu khai nhất điểm nhi"
        }
       ],
       "traceWord": "走开",
       "py": "Qǐng nǐ zǒukāi yīdiǎnr",
       "traceKey": "zoukai",
       "traceInfo": [
        {
         "c": "走",
         "py": "zǒu",
         "hv": "tẩu"
        },
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        }
       ]
      },
      {
       "scene": "🧑🚪🏢",
       "full": "他走进了办公室",
       "vi": "Anh ấy đã đi vào văn phòng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "走进了",
         "ico": "🚶",
         "c": "v",
         "py": "zǒujìn le",
         "hv": "tẩu tiến liễu"
        },
        {
         "t": "办公室",
         "ico": "🏢",
         "c": "o",
         "py": "bàngōngshì",
         "hv": "biện công thất"
        }
       ],
       "traceWord": "走进",
       "py": "Tā zǒujìn le bàngōngshì",
       "traceKey": "zoujin",
       "traceInfo": [
        {
         "c": "走",
         "py": "zǒu",
         "hv": "tẩu"
        },
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        }
       ]
      },
      {
       "scene": "🧑🎒📱",
       "full": "他从包里拿出手机",
       "vi": "Anh ấy lấy điện thoại ra từ trong cặp",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从包里拿出",
         "ico": "🤲",
         "c": "v",
         "py": "cóng bāo lǐ náchū",
         "hv": "tòng bao lý nã xuất"
        },
        {
         "t": "手机",
         "ico": "📱",
         "c": "o",
         "py": "shǒujī",
         "hv": "thủ cơ"
        }
       ],
       "traceWord": "拿出",
       "py": "Tā cóng bāo lǐ náchū shǒujī",
       "traceKey": "nachu",
       "traceInfo": [
        {
         "c": "拿",
         "py": "ná",
         "hv": "nã"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      },
      {
       "scene": "🧑🤲📱",
       "full": "我拿到了新手机",
       "vi": "Tôi đã nhận được điện thoại mới",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "拿到了",
         "ico": "🤲",
         "c": "v",
         "py": "nádào le",
         "hv": "nã đáo liễu"
        },
        {
         "t": "新手机",
         "ico": "📱",
         "c": "o",
         "py": "xīn shǒujī",
         "hv": "tân thủ cơ"
        }
       ],
       "traceWord": "拿到",
       "py": "Wǒ nádào le xīn shǒujī",
       "traceKey": "nadao",
       "traceInfo": [
        {
         "c": "拿",
         "py": "ná",
         "hv": "nã"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "📱💬✉️",
       "full": "他发来了一条短信",
       "vi": "Anh ấy gửi đến một tin nhắn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "发来了",
         "ico": "📤",
         "c": "v",
         "py": "fā lái le",
         "hv": "phát lai liễu"
        },
        {
         "t": "一条短信",
         "ico": "💬",
         "c": "o",
         "py": "yī tiáo duǎnxìn",
         "hv": "nhất điều đoản tín"
        }
       ],
       "traceWord": "短信",
       "py": "Tā fā lái le yī tiáo duǎnxìn",
       "traceKey": "duanxin",
       "traceInfo": [
        {
         "c": "短",
         "py": "duǎn",
         "hv": "đoản"
        },
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        }
       ]
      },
      {
       "scene": "🧑☎️👔",
       "full": "我刚接到经理的电话",
       "vi": "Tôi vừa nhận được điện thoại của giám đốc",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "刚接到",
         "ico": "📞",
         "c": "v",
         "py": "gāng jiēdào",
         "hv": "cương tiếp đáo"
        },
        {
         "t": "经理的电话",
         "ico": "👔",
         "c": "o",
         "py": "jīnglǐ de diànhuà",
         "hv": "kinh lý đích điện thoại"
        }
       ],
       "traceWord": "接到",
       "py": "Wǒ gāng jiēdào jīnglǐ de diànhuà",
       "traceKey": "jiedao",
       "traceInfo": [
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "👩🚶🛣️",
       "full": "她刚走过那个路口",
       "vi": "Cô ấy vừa đi qua ngã tư đó",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "刚走过",
         "ico": "🚶",
         "c": "v",
         "py": "gāng zǒuguò",
         "hv": "cương tẩu quá"
        },
        {
         "t": "那个路口",
         "ico": "🛣️",
         "c": "o",
         "py": "nà gè lùkǒu",
         "hv": "na cá lộ khẩu"
        }
       ],
       "traceWord": "走过",
       "py": "Tā gāng zǒuguò nà gè lùkǒu",
       "traceKey": "zouguo",
       "traceInfo": [
        {
         "c": "走",
         "py": "zǒu",
         "hv": "tẩu"
        },
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的手机为什么关机了？",
       "qvi": "Sao điện thoại của bạn tắt máy rồi?",
       "scene": "📱🔋",
       "ans": "没电了",
       "opts": [
        {
         "txt": "没电了",
         "ico": "🔋",
         "py": "Méi diàn le"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ de shǒujī wèi shénme guānjī le?"
      },
      {
       "q": "你的电话为什么不通？",
       "qvi": "Sao điện thoại của bạn không gọi được?",
       "scene": "📞📶",
       "ans": "这里的信号不好",
       "opts": [
        {
         "txt": "我在北京工作",
         "ico": "💼",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "这里的信号不好",
         "ico": "📶",
         "py": "Zhèlǐ de xìnhào bù hǎo"
        },
        {
         "txt": "我坐地铁去",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù"
        }
       ],
       "qpy": "Nǐ de diànhuà wèi shénme bù tōng?"
      },
      {
       "q": "你的手机怎么没有响？",
       "qvi": "Sao điện thoại của bạn không reo?",
       "scene": "📱🔕",
       "ans": "声音太小了",
       "opts": [
        {
         "txt": "声音太小了",
         "ico": "🔈",
         "py": "Shēngyīn tài xiǎo le"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "他在大声说话",
         "ico": "🗣️",
         "py": "Tā zài dà shēng shuōhuà"
        }
       ],
       "qpy": "Nǐ de shǒujī zěnme méiyǒu xiǎng?"
      },
      {
       "q": "你怎么不接电话？",
       "qvi": "Sao bạn không nghe điện thoại?",
       "scene": "📱🔛",
       "ans": "我刚开机",
       "opts": [
        {
         "txt": "在学校里",
         "ico": "🏫",
         "py": "Zài xuéxiào lǐ"
        },
        {
         "txt": "我刚开机",
         "ico": "🔛",
         "py": "Wǒ gāng kāijī"
        },
        {
         "txt": "我不渴",
         "ico": "🥤",
         "py": "Wǒ bù kě"
        }
       ],
       "qpy": "Nǐ zěnme bù jiē diànhuà?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gọi điện cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hãy tưởng tượng bạn gọi cho đồng nghiệp nhưng không liên lạc được. Nói thành tiếng: <i>\"你的电话为什么不通？\"</i> và <i>\"这里的信号不好。\"</i>",
       "<b>Bước 2:</b> Nhắn tin hoặc nói to cho đồng nghiệp biết bạn vừa nhận được tin: <i>\"我刚接到经理的电话。\"</i> rồi mời họ vào văn phòng: <i>\"你快过来吧。\"</i>",
       "<b>Bước 3:</b> Tự mô tả ba hành động bằng bổ ngữ xu hướng: <i>\"他走进了办公室。\"</i>, <i>\"他从包里拿出手机。\"</i>, <i>\"请你走开一点儿。\"</i> Luyện đến khi nói trôi chảy."
      ]
     }
    },
    {
     "id": "2.11B",
     "name": "Bài 2.11B: Máy tính, mạng, ảnh và tra cứu",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 用手机 + 🔍 查地图",
       "📷 红色的 + ⚡ 是 + 📱 我的手机",
       "🧑 我 + ⚡ 通过网站 + 🛒 买机票"
      ],
      "tip": "Cụm chữ 的: danh từ/tính từ + 的 có thể đứng một mình thay cho danh từ, ví dụ 我的 (của tôi), 红色的 (cái màu đỏ), 我常用的 (cái tôi hay dùng). Cụm liên động: 用 (yòng, dụng) + công cụ + động từ chính, ví dụ 用手机查地图, 通过 (tōngguò, thông quá) + cách thức + động từ.",
      "vn_tip": "Người Việt hay đảo thành \"tra bản đồ dùng điện thoại\" (查地图用手机). Tiếng Trung đặt cách thức trước hành động: 用手机查地图. Ngoài ra đừng thêm danh từ sau 的 khi đã rõ nghĩa: nói 这些照片是我的, không cần 我的照片."
     },
     "chunks": [
      {
       "scene": "🧑📱🗺️",
       "full": "我用手机查地图",
       "vi": "Tôi dùng điện thoại tra bản đồ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "用手机",
         "ico": "📱",
         "c": "v",
         "py": "yòng shǒujī",
         "hv": "dụng thủ cơ"
        },
        {
         "t": "查地图",
         "ico": "🗺️",
         "c": "o",
         "py": "chá dìtú",
         "hv": "tra địa đồ"
        }
       ],
       "traceWord": "查",
       "py": "Wǒ yòng shǒujī chá dìtú",
       "traceKey": "cha",
       "traceInfo": [
        {
         "c": "查",
         "py": "chá",
         "hv": "tra"
        }
       ]
      },
      {
       "scene": "🧑📷🖼️",
       "full": "我用相机照相",
       "vi": "Tôi dùng máy ảnh chụp ảnh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "用相机",
         "ico": "📷",
         "c": "v",
         "py": "yòng xiàngjī",
         "hv": "dụng tướng cơ"
        },
        {
         "t": "照相",
         "ico": "🖼️",
         "c": "o",
         "py": "zhàoxiàng",
         "hv": "chiếu tướng"
        }
       ],
       "traceWord": "照相",
       "py": "Wǒ yòng xiàngjī zhàoxiàng",
       "traceKey": "zhaoxiang",
       "traceInfo": [
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        },
        {
         "c": "相",
         "py": "xiàng",
         "hv": "tướng"
        }
       ]
      },
      {
       "scene": "🖼️👉🧑",
       "full": "这些照片是我的",
       "vi": "Những tấm ảnh này là của tôi",
       "parts": [
        {
         "t": "这些照片",
         "ico": "🖼️",
         "c": "s",
         "py": "zhèxiē zhàopiàn",
         "hv": "giá ta chiếu phiến"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的",
         "ico": "🧑",
         "c": "o",
         "py": "wǒ de",
         "hv": "ngã đích"
        }
       ],
       "traceWord": "照片",
       "py": "Zhèxiē zhàopiàn shì wǒ de",
       "traceKey": "zhaopian",
       "traceInfo": [
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        },
        {
         "c": "片",
         "py": "piàn",
         "hv": "phiến"
        }
       ]
      },
      {
       "scene": "🔴📱👉🧑",
       "full": "红色的是我的手机",
       "vi": "Cái màu đỏ là điện thoại của tôi",
       "parts": [
        {
         "t": "红色的",
         "ico": "🔴",
         "c": "s",
         "py": "hóngsè de",
         "hv": "hồng sắc đích"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的手机",
         "ico": "📱",
         "c": "o",
         "py": "wǒ de shǒujī",
         "hv": "ngã đích thủ cơ"
        }
       ],
       "traceWord": "手机",
       "py": "Hóngsè de shì wǒ de shǒujī",
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
       "scene": "🧑🌐✈️",
       "full": "我通过网站买机票",
       "vi": "Tôi mua vé máy bay qua trang web",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "通过网站",
         "ico": "🌐",
         "c": "o",
         "py": "tōngguò wǎngzhàn",
         "hv": "thông quá võng trạm"
        },
        {
         "t": "买机票",
         "ico": "✈️",
         "c": "v",
         "py": "mǎi jīpiào",
         "hv": "mãi cơ phiếu"
        }
       ],
       "traceWord": "通过",
       "py": "Wǒ tōngguò wǎngzhàn mǎi jīpiào",
       "traceKey": "tongguo",
       "traceInfo": [
        {
         "c": "通",
         "py": "tōng",
         "hv": "thông"
        },
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        }
       ]
      },
      {
       "scene": "🧑🏢💻",
       "full": "我在公司使用计算机",
       "vi": "Tôi dùng máy tính ở công ty",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在公司",
         "ico": "🏢",
         "c": "o",
         "py": "zài gōngsī",
         "hv": "tại công ti"
        },
        {
         "t": "使用计算机",
         "ico": "💻",
         "c": "v",
         "py": "shǐyòng jìsuànjī",
         "hv": "sử dụng kế toán cơ"
        }
       ],
       "traceWord": "计算机",
       "py": "Wǒ zài gōngsī shǐyòng jìsuànjī",
       "traceKey": "jisuanji",
       "traceInfo": [
        {
         "c": "计",
         "py": "jì",
         "hv": "kế"
        },
        {
         "c": "算",
         "py": "suàn",
         "hv": "toán"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "🌐👉🧑⭐",
       "full": "这个网站是我常用的",
       "vi": "Trang web này là cái tôi hay dùng",
       "parts": [
        {
         "t": "这个网站",
         "ico": "🌐",
         "c": "s",
         "py": "zhè gè wǎngzhàn",
         "hv": "giá cá võng trạm"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我常用的",
         "ico": "⭐",
         "c": "o",
         "py": "wǒ cháng yòng de",
         "hv": "ngã thường dụng đích"
        }
       ],
       "traceWord": "常用",
       "py": "Zhè gè wǎngzhàn shì wǒ cháng yòng de",
       "traceKey": "changyong",
       "traceInfo": [
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "📱🔄🌍",
       "full": "手机改变了我们的生活",
       "vi": "Điện thoại đã thay đổi cuộc sống của chúng ta",
       "parts": [
        {
         "t": "手机",
         "ico": "📱",
         "c": "s",
         "py": "shǒujī",
         "hv": "thủ cơ"
        },
        {
         "t": "改变了",
         "ico": "🔄",
         "c": "v",
         "py": "gǎibiàn le",
         "hv": "cải biến liễu"
        },
        {
         "t": "我们的生活",
         "ico": "🌍",
         "c": "o",
         "py": "wǒmen de shēnghuó",
         "hv": "ngã môn đích sinh hoạt"
        }
       ],
       "traceWord": "改变",
       "py": "Shǒujī gǎibiàn le wǒmen de shēnghuó",
       "traceKey": "gaibian",
       "traceInfo": [
        {
         "c": "改",
         "py": "gǎi",
         "hv": "cải"
        },
        {
         "c": "变",
         "py": "biàn",
         "hv": "biến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你用什么找出那些图片？",
       "qvi": "Bạn dùng gì để tìm ra những hình ảnh đó?",
       "scene": "🖼️🔍💻",
       "ans": "我用电脑",
       "opts": [
        {
         "txt": "我坐地铁",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě"
        },
        {
         "txt": "我喝牛奶",
         "ico": "🥛",
         "py": "Wǒ hē niúnǎi"
        },
        {
         "txt": "我用电脑",
         "ico": "💻",
         "py": "Wǒ yòng diànnǎo"
        }
       ],
       "qpy": "Nǐ yòng shénme zhǎochū nàxiē túpiàn?"
      },
      {
       "q": "这个网站叫作什么？",
       "qvi": "Trang web này tên là gì?",
       "scene": "🌐❓",
       "ans": "它叫作新闻网",
       "opts": [
        {
         "txt": "它叫作新闻网",
         "ico": "📰",
         "py": "Tā jiàozuò xīnwén wǎng"
        },
        {
         "txt": "我在学校里",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào lǐ"
        },
        {
         "txt": "今天不下雨",
         "ico": "☀️",
         "py": "Jīntiān bú xià yǔ"
        }
       ],
       "qpy": "Zhè gè wǎngzhàn jiàozuò shénme?"
      },
      {
       "q": "你想改什么？",
       "qvi": "Bạn muốn sửa gì?",
       "scene": "✏️🔤",
       "ans": "我想改一下名字",
       "opts": [
        {
         "txt": "我想改一下名字",
         "ico": "✏️",
         "py": "Wǒ xiǎng gǎi yī xià míngzi"
        },
        {
         "txt": "我去公园",
         "ico": "🌳",
         "py": "Wǒ qù gōngyuán"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        }
       ],
       "qpy": "Nǐ xiǎng gǎi shénme?"
      },
      {
       "q": "你的手机是普通的吗？",
       "qvi": "Điện thoại của bạn là loại bình thường à?",
       "scene": "📱❓",
       "ans": "是普通的手机",
       "opts": [
        {
         "txt": "是普通的手机",
         "ico": "📱",
         "py": "Shì pǔtōng de shǒujī"
        },
        {
         "txt": "在学校里",
         "ico": "🏫",
         "py": "Zài xuéxiào lǐ"
        },
        {
         "txt": "我不渴",
         "ico": "🥤",
         "py": "Wǒ bù kě"
        }
       ],
       "qpy": "Nǐ de shǒujī shì pǔtōng de ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tra cứu và chia sẻ ảnh",
      "steps": [
       "<b>Bước 1:</b> Mở điện thoại, thử tra một địa điểm và tự nói: <i>\"我用手机查地图。\"</i> Sau đó mở trang web bạn hay dùng và nói: <i>\"这个网站是我常用的。\"</i>",
       "<b>Bước 2:</b> Chọn vài bức ảnh trong máy, vừa nhìn vừa nói: <i>\"这些照片是我的。\"</i> Hỏi đồng nghiệp (hoặc tự hỏi): <i>\"红色的是你的手机吗？\"</i>",
       "<b>Bước 3:</b> Nói với đồng nghiệp một câu về công việc: <i>\"我在公司使用计算机。\"</i> và <i>\"我通过网站买机票。\"</i> Ghi âm lại và nghe xem đã tự nhiên chưa."
      ]
     }
    },
    {
     "id": "2.11C",
     "name": "Bài 2.11C: Tin tức, thông báo và gửi nhận thông tin",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 发你 + 💬 一条信息",
       "🧑 经理 + ⚡ 通知大家 + 📢 一件事",
       "🧑 他 + ⚡ 告诉我 + 📰 一个好新闻"
      ],
      "tip": "Câu hai tân ngữ: Chủ ngữ + động từ + tân ngữ 1 (người nhận) + tân ngữ 2 (vật được trao/nói). Động từ thường gặp: 给 (gěi, cấp), 告诉 (gàosu, cáo tố), 通知 (tōngzhī, thông tri), 发 (fā, phát), 送 (sòng, tống).",
      "vn_tip": "Người Việt hay nói \"gửi một tin nhắn cho bạn\" và dịch thành 发一条信息给你. Cách này cũng đúng nhưng với 发, 告诉, 通知 thì nói tự nhiên hơn là đặt người nhận ngay sau động từ: 发你一条信息, 告诉我一个好新闻."
     },
     "chunks": [
      {
       "scene": "🧑💬📱",
       "full": "我发你一条信息",
       "vi": "Tôi gửi bạn một tin nhắn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "发你",
         "ico": "📤",
         "c": "v",
         "py": "fā nǐ",
         "hv": "phát nễ"
        },
        {
         "t": "一条信息",
         "ico": "💬",
         "c": "o",
         "py": "yī tiáo xìnxī",
         "hv": "nhất điều tín tức"
        }
       ],
       "traceWord": "信息",
       "py": "Wǒ fā nǐ yī tiáo xìnxī",
       "traceKey": "xinxi",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "息",
         "py": "xī",
         "hv": "tức"
        }
       ]
      },
      {
       "scene": "👔📢👥",
       "full": "经理通知大家一件事",
       "vi": "Giám đốc thông báo cho mọi người một việc",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "通知大家",
         "ico": "📢",
         "c": "v",
         "py": "tōngzhī dàjiā",
         "hv": "thông tri đại gia"
        },
        {
         "t": "一件事",
         "ico": "📌",
         "c": "o",
         "py": "yī jiàn shì",
         "hv": "nhất kiện sự"
        }
       ],
       "traceWord": "通知",
       "py": "Jīnglǐ tōngzhī dàjiā yī jiàn shì",
       "traceKey": "tongzhi",
       "traceInfo": [
        {
         "c": "通",
         "py": "tōng",
         "hv": "thông"
        },
        {
         "c": "知",
         "py": "zhī",
         "hv": "tri"
        }
       ]
      },
      {
       "scene": "🧑🗣️📰",
       "full": "他告诉我一个好新闻",
       "vi": "Anh ấy báo cho tôi một tin tốt",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "告诉我",
         "ico": "🗣️",
         "c": "v",
         "py": "gàosu wǒ",
         "hv": "cáo tố ngã"
        },
        {
         "t": "一个好新闻",
         "ico": "📰",
         "c": "o",
         "py": "yī gè hǎo xīnwén",
         "hv": "nhất cá hảo tân văn"
        }
       ],
       "traceWord": "新闻",
       "py": "Tā gàosu wǒ yī gè hǎo xīnwén",
       "traceKey": "xinwen",
       "traceInfo": [
        {
         "c": "新",
         "py": "xīn",
         "hv": "tân"
        },
        {
         "c": "闻",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "🥡🛵🏢",
       "full": "外卖送到办公室了",
       "vi": "Đồ ăn đã được giao đến văn phòng",
       "parts": [
        {
         "t": "外卖",
         "ico": "🥡",
         "c": "s",
         "py": "wàimài",
         "hv": "ngoại mại"
        },
        {
         "t": "送到",
         "ico": "🛵",
         "c": "v",
         "py": "sòngdào",
         "hv": "tống đáo"
        },
        {
         "t": "办公室了",
         "ico": "🏢",
         "c": "o",
         "py": "bàngōngshì le",
         "hv": "biện công thất liễu"
        }
       ],
       "traceWord": "送到",
       "py": "Wàimài sòngdào bàngōngshì le",
       "traceKey": "songdao",
       "traceInfo": [
        {
         "c": "送",
         "py": "sòng",
         "hv": "tống"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑📩👔",
       "full": "我收到了经理的通知",
       "vi": "Tôi đã nhận được thông báo của giám đốc",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "收到了",
         "ico": "📩",
         "c": "v",
         "py": "shōudào le",
         "hv": "thu đáo liễu"
        },
        {
         "t": "经理的通知",
         "ico": "📢",
         "c": "o",
         "py": "jīnglǐ de tōngzhī",
         "hv": "kinh lý đích thông tri"
        }
       ],
       "traceWord": "收到",
       "py": "Wǒ shōudào le jīnglǐ de tōngzhī",
       "traceKey": "shoudao",
       "traceInfo": [
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑👂🏙️",
       "full": "我听说他明天去北京",
       "vi": "Tôi nghe nói ngày mai anh ấy đi Bắc Kinh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "听说",
         "ico": "👂",
         "c": "v",
         "py": "tīngshuō",
         "hv": "thính thuyết"
        },
        {
         "t": "他明天去北京",
         "ico": "🏙️",
         "c": "o",
         "py": "tā míngtiān qù Běijīng",
         "hv": "tha minh thiên khứ bắc kinh"
        }
       ],
       "traceWord": "听说",
       "py": "Wǒ tīngshuō tā míngtiān qù Běijīng",
       "traceKey": "tingshuo",
       "traceInfo": [
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        },
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        }
       ]
      },
      {
       "scene": "👨‍💼📝👔",
       "full": "小王给经理发日报",
       "vi": "Tiểu Vương gửi báo cáo hằng ngày cho giám đốc",
       "parts": [
        {
         "t": "小王",
         "ico": "👨‍💼",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "给经理发",
         "ico": "📤",
         "c": "v",
         "py": "gěi jīnglǐ fā",
         "hv": "cấp kinh lý phát"
        },
        {
         "t": "日报",
         "ico": "📝",
         "c": "o",
         "py": "rìbào",
         "hv": "nhật báo"
        }
       ],
       "traceWord": "日报",
       "py": "Xiǎowáng gěi jīnglǐ fā rìbào",
       "traceKey": "ribao",
       "traceInfo": [
        {
         "c": "日",
         "py": "rì",
         "hv": "nhật"
        },
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        }
       ]
      },
      {
       "scene": "👥🤫💬",
       "full": "他们在办公室小声对话",
       "vi": "Họ nói chuyện nhỏ tiếng trong văn phòng",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "在办公室",
         "ico": "🏢",
         "c": "o",
         "py": "zài bàngōngshì",
         "hv": "tại biện công thất"
        },
        {
         "t": "小声对话",
         "ico": "🤫",
         "c": "v",
         "py": "xiǎo shēng duìhuà",
         "hv": "tiểu thanh đối thoại"
        }
       ],
       "traceWord": "对话",
       "py": "Tāmen zài bàngōngshì xiǎo shēng duìhuà",
       "traceKey": "duihua",
       "traceInfo": [
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        },
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想当什么？",
       "qvi": "Bạn muốn làm nghề gì?",
       "scene": "🧑‍🏫❓",
       "ans": "我想当老师",
       "opts": [
        {
         "txt": "我想当老师",
         "ico": "🧑‍🏫",
         "py": "Wǒ xiǎng dāng lǎoshī"
        },
        {
         "txt": "我在北京",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng"
        },
        {
         "txt": "手机很便宜",
         "ico": "📱",
         "py": "Shǒujī hěn piányi"
        }
       ],
       "qpy": "Nǐ xiǎng dāng shénme?"
      },
      {
       "q": "经理让你做什么？",
       "qvi": "Giám đốc bảo bạn làm gì?",
       "scene": "👔🗣️📣",
       "ans": "他让我喊小王过来",
       "opts": [
        {
         "txt": "他是我的同学",
         "ico": "🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "他让我喊小王过来",
         "ico": "📣",
         "py": "Tā ràng wǒ hǎn Xiǎowáng guòlái"
        },
        {
         "txt": "我们去公园",
         "ico": "🌳",
         "py": "Wǒmen qù gōngyuán"
        }
       ],
       "qpy": "Jīnglǐ ràng nǐ zuò shénme?"
      },
      {
       "q": "你发现什么了？",
       "qvi": "Bạn phát hiện ra điều gì?",
       "scene": "🧑🔍📱",
       "ans": "我发现手机没电了",
       "opts": [
        {
         "txt": "我吃了米饭",
         "ico": "🍚",
         "py": "Wǒ chī le mǐfàn"
        },
        {
         "txt": "我发现手机没电了",
         "ico": "🔋",
         "py": "Wǒ fāxiàn shǒujī méi diàn le"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ fāxiàn shénme le?"
      },
      {
       "q": "你收了什么？",
       "qvi": "Bạn đã nhận cái gì?",
       "scene": "📰🌆❓",
       "ans": "我收了今天的晚报",
       "opts": [
        {
         "txt": "在医院",
         "ico": "🏥",
         "py": "Zài yīyuàn"
        },
        {
         "txt": "我不是学生",
         "ico": "🎓",
         "py": "Wǒ bú shì xuéshēng"
        },
        {
         "txt": "我收了今天的晚报",
         "ico": "📰",
         "py": "Wǒ shōu le jīntiān de wǎnbào"
        }
       ],
       "qpy": "Nǐ shōu le shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gửi thông báo cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Soạn một tin nhắn cho đồng nghiệp (hoặc tự nói thành tiếng): <i>\"我发你一条信息。\"</i> rồi báo việc cần làm: <i>\"经理通知大家一件事。\"</i>",
       "<b>Bước 2:</b> Kể lại tin bạn nghe được, dùng cấu trúc hai tân ngữ: <i>\"他告诉我一个好新闻。\"</i> và <i>\"我听说他明天去北京。\"</i>",
       "<b>Bước 3:</b> Giả lập cuộc nói chuyện với đồng nghiệp ngồi cạnh: báo <i>\"我收到了经理的通知。\"</i> và nhắc <i>\"小王给经理发日报。\"</i> Nói nhỏ tiếng để quen cách <i>\"小声对话\"</i>."
      ]
     }
    }
   ]
  },
  "2.12": {
   "lessons": [
    {
     "id": "2.12A",
     "name": "Bài 2.12A: Gia đình và sự quan tâm — 愿意",
     "grammar": {
      "formulas": [
       "🧑 主语 + 💗 愿意 + 🤝 动词 + 宾语",
       "🧑 主语 + 🚫 不愿意 + 🤝 动词",
       "❓ 你 + 愿意 + 动词 + 吗？"
      ],
      "tip": "愿意 (yuànyì, nguyện ý) là động từ năng nguyện: đứng trước động từ chính để nói ai đó sẵn lòng làm gì. Phủ định là 不愿意, không dùng 没愿意. Câu hỏi: 你愿意……吗？",
      "vn_tip": "Người Việt hay nói thiếu động từ hoặc đặt 愿意 sau động từ chính. Đúng là 我愿意帮你 (愿意 đứng trước 帮), không nói 我帮你愿意."
     },
     "chunks": [
      {
       "scene": "🧑🤝🧑",
       "full": "我愿意帮你",
       "vi": "Tôi sẵn lòng giúp bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "愿意",
         "ico": "💗",
         "c": "v",
         "py": "yuànyì",
         "hv": "nguyện ý"
        },
        {
         "t": "帮你",
         "ico": "🤝",
         "c": "o",
         "py": "bāng nǐ",
         "hv": "bang nễ"
        }
       ],
       "traceWord": "愿意",
       "py": "Wǒ yuànyì bāng nǐ",
       "traceKey": "yuanyi",
       "traceInfo": [
        {
         "c": "愿",
         "py": "yuàn",
         "hv": "nguyện"
        },
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "👨‍👧👶🤱",
       "full": "他愿意照顾孩子",
       "vi": "Anh ấy sẵn lòng chăm sóc con",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "愿意",
         "ico": "💗",
         "c": "v",
         "py": "yuànyì",
         "hv": "nguyện ý"
        },
        {
         "t": "照顾孩子",
         "ico": "👶",
         "c": "o",
         "py": "zhàogù háizi",
         "hv": "chiếu cố hài tử"
        }
       ],
       "traceWord": "照顾",
       "py": "Tā yuànyì zhàogù háizi",
       "traceKey": "zhaogu",
       "traceInfo": [
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        },
        {
         "c": "顾",
         "py": "gù",
         "hv": "cố"
        }
       ]
      },
      {
       "scene": "👩💞🧑",
       "full": "太太愿意关心我",
       "vi": "Vợ sẵn lòng quan tâm tôi",
       "parts": [
        {
         "t": "太太",
         "ico": "👩",
         "c": "s",
         "py": "tàitai",
         "hv": "thái thái"
        },
        {
         "t": "愿意",
         "ico": "💗",
         "c": "v",
         "py": "yuànyì",
         "hv": "nguyện ý"
        },
        {
         "t": "关心我",
         "ico": "🤗",
         "c": "o",
         "py": "guānxīn wǒ",
         "hv": "quan tâm ngã"
        }
       ],
       "traceWord": "太太",
       "py": "Tàitai yuànyì guānxīn wǒ",
       "traceKey": "taitai",
       "traceInfo": [
        {
         "c": "太",
         "py": "tài",
         "hv": "thái"
        },
        {
         "c": "太",
         "py": "tai",
         "hv": "thái"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧‍👦🏙️✈️",
       "full": "全家都愿意去北京",
       "vi": "Cả nhà đều sẵn lòng đi Bắc Kinh",
       "parts": [
        {
         "t": "全家",
         "ico": "👨‍👩‍👧‍👦",
         "c": "s",
         "py": "quánjiā",
         "hv": "toàn gia"
        },
        {
         "t": "都愿意",
         "ico": "💗",
         "c": "v",
         "py": "dōu yuànyì",
         "hv": "đô nguyện ý"
        },
        {
         "t": "去北京",
         "ico": "🏙️",
         "c": "o",
         "py": "qù Běijīng",
         "hv": "khứ bắc kinh"
        }
       ],
       "traceWord": "全家",
       "py": "Quánjiā dōu yuànyì qù Běijīng",
       "traceKey": "quanjia",
       "traceInfo": [
        {
         "c": "全",
         "py": "quán",
         "hv": "toàn"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      },
      {
       "scene": "👶🧑💞",
       "full": "孩子愿意在我身边",
       "vi": "Con sẵn lòng ở bên cạnh tôi",
       "parts": [
        {
         "t": "孩子",
         "ico": "👶",
         "c": "s",
         "py": "háizi",
         "hv": "hài tử"
        },
        {
         "t": "愿意",
         "ico": "💗",
         "c": "v",
         "py": "yuànyì",
         "hv": "nguyện ý"
        },
        {
         "t": "在我身边",
         "ico": "🧑",
         "c": "o",
         "py": "zài wǒ shēnbiān",
         "hv": "tại ngã thân biên"
        }
       ],
       "traceWord": "身边",
       "py": "Háizi yuànyì zài wǒ shēnbiān",
       "traceKey": "shenbian",
       "traceInfo": [
        {
         "c": "身",
         "py": "shēn",
         "hv": "thân"
        },
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧👂💬",
       "full": "家长愿意听孩子的意见",
       "vi": "Phụ huynh sẵn lòng nghe ý kiến của con",
       "parts": [
        {
         "t": "家长",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "jiāzhǎng",
         "hv": "gia trưởng"
        },
        {
         "t": "愿意",
         "ico": "💗",
         "c": "v",
         "py": "yuànyì",
         "hv": "nguyện ý"
        },
        {
         "t": "听孩子的意见",
         "ico": "👂",
         "c": "o",
         "py": "tīng háizi de yìjiàn",
         "hv": "thính hài tử đích ý kiến"
        }
       ],
       "traceWord": "家长",
       "py": "Jiāzhǎng yuànyì tīng háizi de yìjiàn",
       "traceKey": "jiazhang",
       "traceInfo": [
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "💑🏠🚫",
       "full": "爱人不愿意离开家庭",
       "vi": "Vợ/chồng không muốn rời xa gia đình",
       "parts": [
        {
         "t": "爱人",
         "ico": "💑",
         "c": "s",
         "py": "àiren",
         "hv": "ái nhân"
        },
        {
         "t": "不愿意",
         "ico": "🚫",
         "c": "v",
         "py": "bú yuànyì",
         "hv": "bất nguyện ý"
        },
        {
         "t": "离开家庭",
         "ico": "🏠",
         "c": "o",
         "py": "líkāi jiātíng",
         "hv": "ly khai gia đình"
        }
       ],
       "traceWord": "爱人",
       "py": "Àiren bú yuànyì líkāi jiātíng",
       "traceKey": "airen",
       "traceInfo": [
        {
         "c": "爱",
         "py": "ài",
         "hv": "ái"
        },
        {
         "c": "人",
         "py": "ren",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "👥🏢🙋",
       "full": "全体同事都愿意参加",
       "vi": "Toàn thể đồng nghiệp đều sẵn lòng tham gia",
       "parts": [
        {
         "t": "全体同事",
         "ico": "👥",
         "c": "s",
         "py": "quántǐ tóngshì",
         "hv": "toàn thể đồng sự"
        },
        {
         "t": "都愿意",
         "ico": "💗",
         "c": "v",
         "py": "dōu yuànyì",
         "hv": "đô nguyện ý"
        },
        {
         "t": "参加",
         "ico": "🙋",
         "c": "o",
         "py": "cānjiā",
         "hv": "tham gia"
        }
       ],
       "traceWord": "全体",
       "py": "Quántǐ tóngshì dōu yuànyì cānjiā",
       "traceKey": "quanti",
       "traceInfo": [
        {
         "c": "全",
         "py": "quán",
         "hv": "toàn"
        },
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你愿意相信爱情吗？",
       "qvi": "Bạn có sẵn lòng tin vào tình yêu không?",
       "scene": "💑❤️",
       "ans": "我愿意相信爱情",
       "opts": [
        {
         "txt": "我愿意相信爱情",
         "ico": "❤️",
         "py": "Wǒ yuànyì xiāngxìn àiqíng"
        },
        {
         "txt": "他在北京工作",
         "ico": "💼",
         "py": "Tā zài Běijīng gōngzuò"
        },
        {
         "txt": "我想买一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng mǎi yī bēi chá"
        }
       ],
       "qpy": "Nǐ yuànyì xiāngxìn àiqíng ma?"
      },
      {
       "q": "你太太是在哪儿出生的？",
       "qvi": "Vợ bạn sinh ra ở đâu?",
       "scene": "👩🍼🏙️",
       "ans": "她出生在北京",
       "opts": [
        {
         "txt": "她生了一个女儿",
         "ico": "👧",
         "py": "Tā shēng le yī gè nǚ'ér"
        },
        {
         "txt": "她在学校学习",
         "ico": "🏫",
         "py": "Tā zài xuéxiào xuéxí"
        },
        {
         "txt": "她出生在北京",
         "ico": "🏙️",
         "py": "Tā chūshēng zài Běijīng"
        }
       ],
       "qpy": "Nǐ tàitai shì zài nǎr chūshēng de?"
      },
      {
       "q": "你想起她的名字了吗？",
       "qvi": "Bạn nhớ ra tên cô ấy chưa?",
       "scene": "💭👩📝",
       "ans": "我想起她的名字了",
       "opts": [
        {
         "txt": "这个手机很便宜",
         "ico": "📱",
         "py": "Zhè gè shǒujī hěn piányi"
        },
        {
         "txt": "我想起她的名字了",
         "ico": "💭",
         "py": "Wǒ xiǎngqǐ tā de míngzi le"
        },
        {
         "txt": "我们明天去上班",
         "ico": "🏢",
         "py": "Wǒmen míngtiān qù shàngbān"
        }
       ],
       "qpy": "Nǐ xiǎngqǐ tā de míngzi le ma?"
      },
      {
       "q": "大家怎么称他？",
       "qvi": "Mọi người gọi anh ấy là gì?",
       "scene": "👥🗣️👨",
       "ans": "大家都称他小王",
       "opts": [
        {
         "txt": "他喜欢喝茶",
         "ico": "🍵",
         "py": "Tā xǐhuan hē chá"
        },
        {
         "txt": "大家都称他小王",
         "ico": "🗣️",
         "py": "Dàjiā dōu chēng tā Xiǎowáng"
        },
        {
         "txt": "他在北京住",
         "ico": "🏠",
         "py": "Tā zài Běijīng zhù"
        }
       ],
       "qpy": "Dàjiā zěnme chēng tā?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm và rủ cả nhà",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một người bạn Trung Quốc, hỏi xem họ có sẵn lòng đi cùng không: <i>\"你愿意去吗？\"</i>",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu về người thân bằng 愿意, ví dụ <i>\"我太太愿意关心我\"</i>, <i>\"全家都愿意去北京\"</i>.",
       "<b>Bước 3:</b> Nói với đồng nghiệp một việc bạn không muốn làm bằng <i>\"我不愿意……\"</i> và giải thích ngắn bằng tiếng Việt."
      ]
     }
    },
    {
     "id": "2.12B",
     "name": "Bài 2.12B: Bạn bè và thói quen — phó từ tần suất",
     "grammar": {
      "formulas": [
       "🧑 主语 + 🔁 经常 + 🏃 动词",
       "🧑 主语 + 😤 老是 + 🏃 动词",
       "🧑 主语 + ➕ 又 + 🏃 动词",
       "🧑 主语 + 🔄 重新 + 🏃 动词"
      ],
      "tip": "经常 (jīngcháng, kinh thường) = thường xuyên; 老是 (lǎoshì) = cứ mãi, thường mang ý phàn nàn; 又 (yòu) = lại (việc đã xảy ra); 重新 (chóngxīn, trùng tân) = làm lại từ đầu. Các phó từ này đều đứng trước động từ.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ như tiếng Việt (đi thường xuyên). Đúng là 我经常去公园, phó từ đứng trước động từ. Cũng đừng nhầm 又 (việc đã xảy ra) với 再 (việc sẽ làm)."
     },
     "chunks": [
      {
       "scene": "🧑🌳🚶",
       "full": "我经常去公园",
       "vi": "Tôi thường xuyên đi công viên",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "经常",
         "ico": "🔁",
         "c": "v",
         "py": "jīngcháng",
         "hv": "kinh thường"
        },
        {
         "t": "去公园",
         "ico": "🌳",
         "c": "o",
         "py": "qù gōngyuán",
         "hv": "khứ công viên"
        }
       ],
       "traceWord": "经常",
       "py": "Wǒ jīngcháng qù gōngyuán",
       "traceKey": "jingchang",
       "traceInfo": [
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        },
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        }
       ]
      },
      {
       "scene": "👨📱😅",
       "full": "他老是忘记带手机",
       "vi": "Anh ấy cứ hay quên mang điện thoại",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "老是",
         "ico": "😤",
         "c": "v",
         "py": "lǎoshì",
         "hv": "lão thị"
        },
        {
         "t": "忘记带手机",
         "ico": "📱",
         "c": "o",
         "py": "wàngjì dài shǒujī",
         "hv": "vong ký đới thủ cơ"
        }
       ],
       "traceWord": "老是",
       "py": "Tā lǎoshì wàngjì dài shǒujī",
       "traceKey": "laoshi",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
        {
         "c": "是",
         "py": "shì",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "🧑👛🔍",
       "full": "你又气我了",
       "vi": "Bạn lại làm tôi tức rồi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "又",
         "ico": "➕",
         "c": "v",
         "py": "yòu",
         "hv": "hựu"
        },
        {
         "t": "气我了",
         "ico": "👛",
         "c": "o",
         "py": "qì wǒ le",
         "hv": "khí ngã liễu"
        }
       ],
       "traceWord": "气",
       "py": "Nǐ yòu qì wǒ le",
       "traceKey": "qi",
       "traceInfo": [
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🧑💼🔄",
       "full": "我想重新找工作",
       "vi": "Tôi muốn tìm việc lại từ đầu",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想重新",
         "ico": "🔄",
         "c": "v",
         "py": "xiǎng chóngxīn",
         "hv": "tưởng trùng tân"
        },
        {
         "t": "找工作",
         "ico": "💼",
         "c": "o",
         "py": "zhǎo gōngzuò",
         "hv": "trảo công tác"
        }
       ],
       "traceWord": "重新",
       "py": "Wǒ xiǎng chóngxīn zhǎo gōngzuò",
       "traceKey": "chongxin",
       "traceInfo": [
        {
         "c": "重",
         "py": "chóng",
         "hv": "trùng"
        },
        {
         "c": "新",
         "py": "xīn",
         "hv": "tân"
        }
       ]
      },
      {
       "scene": "🧑👴🚏",
       "full": "我今天碰见了老朋友",
       "vi": "Hôm nay tôi gặp bạn cũ",
       "parts": [
        {
         "t": "我今天",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ jīntiān",
         "hv": "ngã kim thiên"
        },
        {
         "t": "碰见了",
         "ico": "👋",
         "c": "v",
         "py": "pèngjiàn le",
         "hv": "bính kiến liễu"
        },
        {
         "t": "老朋友",
         "ico": "👴",
         "c": "o",
         "py": "lǎo péngyou",
         "hv": "lão bằng hữu"
        }
       ],
       "traceWord": "碰见",
       "py": "Wǒ jīntiān pèngjiàn le lǎo péngyou",
       "traceKey": "pengjian",
       "traceInfo": [
        {
         "c": "碰",
         "py": "pèng",
         "hv": "bính"
        },
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      },
      {
       "scene": "👨🙈🙆",
       "full": "他故意不点头",
       "vi": "Anh ấy cố ý không gật đầu",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "故意",
         "ico": "😏",
         "c": "v",
         "py": "gùyì",
         "hv": "cố ý"
        },
        {
         "t": "不点头",
         "ico": "🙆",
         "c": "o",
         "py": "bù diǎntóu",
         "hv": "bất điểm đầu"
        }
       ],
       "traceWord": "故意",
       "py": "Tā gùyì bù diǎntóu",
       "traceKey": "guyi",
       "traceInfo": [
        {
         "c": "故",
         "py": "gù",
         "hv": "cố"
        },
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "🧑🤝🧑♾️",
       "full": "我们永远是好朋友",
       "vi": "Chúng ta mãi mãi là bạn tốt",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "永远",
         "ico": "♾️",
         "c": "v",
         "py": "yǒngyuǎn",
         "hv": "vĩnh viễn"
        },
        {
         "t": "是好朋友",
         "ico": "🤝",
         "c": "o",
         "py": "shì hǎo péngyou",
         "hv": "thị hảo bằng hữu"
        }
       ],
       "traceWord": "永远",
       "py": "Wǒmen yǒngyuǎn shì hǎo péngyou",
       "traceKey": "yongyuan",
       "traceInfo": [
        {
         "c": "永",
         "py": "yǒng",
         "hv": "vĩnh"
        },
        {
         "c": "远",
         "py": "yuǎn",
         "hv": "viễn"
        }
       ]
      },
      {
       "scene": "🧑😮‍💨💼",
       "full": "你实在太忙了",
       "vi": "Bạn thật sự quá bận rồi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "实在",
         "ico": "💯",
         "c": "v",
         "py": "shízài",
         "hv": "thực tại"
        },
        {
         "t": "太忙了",
         "ico": "💼",
         "c": "o",
         "py": "tài máng le",
         "hv": "thái mang liễu"
        }
       ],
       "traceWord": "实在",
       "py": "Nǐ shízài tài máng le",
       "traceKey": "shizai",
       "traceInfo": [
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        },
        {
         "c": "在",
         "py": "zài",
         "hv": "tại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你喜欢交朋友吗？",
       "qvi": "Bạn có thích kết bạn không?",
       "scene": "🧑🤝🧑",
       "ans": "我喜欢交朋友",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "他家有一只猫",
         "ico": "🐱",
         "py": "Tā jiā yǒu yī zhǐ māo"
        },
        {
         "txt": "我喜欢交朋友",
         "ico": "🤝",
         "py": "Wǒ xǐhuan jiāo péngyou"
        }
       ],
       "qpy": "Nǐ xǐhuan jiāo péngyou ma?"
      },
      {
       "q": "你相信他说的话吗？",
       "qvi": "Bạn có tin lời anh ấy nói không?",
       "scene": "🧑💬",
       "ans": "我相信他",
       "opts": [
        {
         "txt": "我在北京工作",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "我相信他",
         "ico": "👍",
         "py": "Wǒ xiāngxìn tā"
        },
        {
         "txt": "明天会下雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià yǔ"
        }
       ],
       "qpy": "Nǐ xiāngxìn tā shuō dehuà ma?"
      },
      {
       "q": "你在哪儿碰到小王的？",
       "qvi": "Bạn gặp Tiểu Vương ở đâu?",
       "scene": "🧑🚇",
       "ans": "我在地铁站碰到他的",
       "opts": [
        {
         "txt": "我在地铁站碰到他的",
         "ico": "🚇",
         "py": "Wǒ zài dìtiězhàn pèngdào tā de"
        },
        {
         "txt": "我吃了两个包子",
         "ico": "🥟",
         "py": "Wǒ chī le liǎng gè bāozi"
        },
        {
         "txt": "他老看手机",
         "ico": "📱",
         "py": "Tā lǎo kàn shǒujī"
        }
       ],
       "qpy": "Nǐ zài nǎr pèngdào Xiǎowáng de?"
      },
      {
       "q": "你们什么时候行动？",
       "qvi": "Khi nào các bạn bắt đầu hành động?",
       "scene": "🏃📅",
       "ans": "我们明天就行动",
       "opts": [
        {
         "txt": "这件事很常见",
         "ico": "❓",
         "py": "Zhè jiàn shì hěn cháng jiàn"
        },
        {
         "txt": "他们不想分开",
         "ico": "💔",
         "py": "Tāmen bù xiǎng fēnkāi"
        },
        {
         "txt": "我们明天就行动",
         "ico": "🏃",
         "py": "Wǒmen míngtiān jiù xíngdòng"
        }
       ],
       "qpy": "Nǐmen shénme shíhou xíngdòng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói về thói quen với bạn mới",
      "steps": [
       "<b>Bước 1:</b> Làm quen với một người bạn mới và hỏi thói quen: <i>\"你经常去公园吗？\"</i>",
       "<b>Bước 2:</b> Kể thói quen của bạn: <i>\"我经常……\"</i>, và một thói quen hay bị phàn nàn: <i>\"我老是忘记带手机\"</i>.",
       "<b>Bước 3:</b> Kể một việc vừa xảy ra lần nữa bằng 又, ví dụ <i>\"我又找到了钱包\"</i>, rồi hẹn gặp lại."
      ]
     }
    },
    {
     "id": "2.12C",
     "name": "Bài 2.12C: Các lứa tuổi và con người",
     "grammar": {
      "formulas": [
       "🧑 主语 + 🔢 数词 + 🎂 岁",
       "🧑 主语 + ⚡ 是 + 👤 名词",
       "🧑 主语 + 📅 今年 + 🔢 数词岁"
      ],
      "tip": "Trong tiếng Trung, câu vị ngữ danh từ nói tuổi hoặc số lượng không cần 是: 他今年三十岁. Khi nói nghề hay loại người thì dùng 是: 他是一个好人. Phủ định tuổi dùng 不是, ví dụ 他不是三十岁.",
      "vn_tip": "Người Việt hay thêm 是 hoặc 有 khi nói tuổi (他是三十岁 hay 他有三十岁): không cần. Đúng là 他今年三十岁, không có động từ (有 chỉ dùng khi ước chừng, như 他有三十岁了)."
     },
     "chunks": [
      {
       "scene": "👨🎂3️⃣0️⃣",
       "full": "他今年三十岁",
       "vi": "Năm nay anh ấy ba mươi tuổi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "今年",
         "ico": "📅",
         "c": "v",
         "py": "jīnnián",
         "hv": "kim niên"
        },
        {
         "t": "三十岁",
         "ico": "🎂",
         "c": "o",
         "py": "sān shí suì",
         "hv": "tam thập tuế"
        }
       ],
       "traceWord": "今年",
       "py": "Tā jīnnián sān shí suì",
       "traceKey": "jinnian",
       "traceInfo": [
        {
         "c": "今",
         "py": "jīn",
         "hv": "kim"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "👨😊👍",
       "full": "他是一个好人",
       "vi": "Anh ấy là một người tốt",
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
         "t": "一个好人",
         "ico": "😇",
         "c": "o",
         "py": "yī gè hǎorén",
         "hv": "nhất cá hảo nhân"
        }
       ],
       "traceWord": "好人",
       "py": "Tā shì yī gè hǎorén",
       "traceKey": "haoren",
       "traceInfo": [
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "🧑🚫😈",
       "full": "那个人不是坏人",
       "vi": "Người đó không phải người xấu",
       "parts": [
        {
         "t": "那个人",
         "ico": "🧑",
         "c": "s",
         "py": "nà gè rén",
         "hv": "na cá nhân"
        },
        {
         "t": "不是",
         "ico": "🚫",
         "c": "v",
         "py": "bú shì",
         "hv": "bất thị"
        },
        {
         "t": "坏人",
         "ico": "😈",
         "c": "o",
         "py": "huàirén",
         "hv": "hoại nhân"
        }
       ],
       "traceWord": "坏人",
       "py": "Nà gè rén bú shì huàirén",
       "traceKey": "huairen",
       "traceInfo": [
        {
         "c": "坏",
         "py": "huài",
         "hv": "hoại"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "👦😊🌟",
       "full": "他是一个可爱的少年",
       "vi": "Cậu ấy là một thiếu niên đáng yêu",
       "parts": [
        {
         "t": "他",
         "ico": "👦",
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
         "t": "一个可爱的少年",
         "ico": "🧒",
         "c": "o",
         "py": "yī gè kě'ài de shàonián",
         "hv": "nhất cá khả ái đích thiếu niên"
        }
       ],
       "traceWord": "少年",
       "py": "Tā shì yī gè kě'ài de shàonián",
       "traceKey": "shaonian",
       "traceInfo": [
        {
         "c": "少",
         "py": "shào",
         "hv": "thiếu"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "🧑🧑🙋🌱",
       "full": "我们都是青年",
       "vi": "Chúng tôi đều là thanh niên",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "都是",
         "ico": "⚡",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "青年",
         "ico": "🙋",
         "c": "o",
         "py": "qīngnián",
         "hv": "thanh niên"
        }
       ],
       "traceWord": "青年",
       "py": "Wǒmen dōu shì qīngnián",
       "traceKey": "qingnian",
       "traceInfo": [
        {
         "c": "青",
         "py": "qīng",
         "hv": "thanh"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "👨‍💼🧔4️⃣",
       "full": "王先生是中年人",
       "vi": "Ông Vương là người trung niên",
       "parts": [
        {
         "t": "王先生",
         "ico": "👨‍💼",
         "c": "s",
         "py": "Wángxiānshēng",
         "hv": "vương tiên sinh"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "中年人",
         "ico": "🧔",
         "c": "o",
         "py": "zhōngnián rén",
         "hv": "trung niên nhân"
        }
       ],
       "traceWord": "中年",
       "py": "Wángxiānshēng shì zhōngnián rén",
       "traceKey": "zhongnian",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "👴🏠🌅",
       "full": "我爷爷是老年人",
       "vi": "Ông nội tôi là người cao tuổi",
       "parts": [
        {
         "t": "我爷爷",
         "ico": "👴",
         "c": "s",
         "py": "wǒ yéye",
         "hv": "ngã gia gia"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "老年人",
         "ico": "👵",
         "c": "o",
         "py": "lǎonián rén",
         "hv": "lão niên nhân"
        }
       ],
       "traceWord": "老年",
       "py": "Wǒ yéye shì lǎonián rén",
       "traceKey": "laonian",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "👥🌱✨",
       "full": "他们都是年轻人",
       "vi": "Họ đều là người trẻ",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "都是",
         "ico": "⚡",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "年轻人",
         "ico": "🌱",
         "c": "o",
         "py": "niánqīng rén",
         "hv": "niên khinh nhân"
        }
       ],
       "traceWord": "年轻",
       "py": "Tāmen dōu shì niánqīng rén",
       "traceKey": "nianqing",
       "traceInfo": [
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        },
        {
         "c": "轻",
         "py": "qīng",
         "hv": "khinh"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你是大人还是孩子？",
       "qvi": "Bạn là người lớn hay trẻ con?",
       "scene": "🧑👶",
       "ans": "我是大人",
       "opts": [
        {
         "txt": "我是大人",
         "ico": "🧑",
         "py": "Wǒ shì dàren"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我有两个孩子",
         "ico": "👶",
         "py": "Wǒ yǒu liǎng gè háizi"
        }
       ],
       "qpy": "Nǐ shì dàren háishi háizi?"
      },
      {
       "q": "他十五岁，是青少年吗？",
       "qvi": "Cậu ấy mười lăm tuổi, là thanh thiếu niên phải không?",
       "scene": "👦1️⃣5️⃣",
       "ans": "他是青少年",
       "opts": [
        {
         "txt": "他是青少年",
         "ico": "👦",
         "py": "Tā shì qīng-shàonián"
        },
        {
         "txt": "他是老年人",
         "ico": "👴",
         "py": "Tā shì lǎonián rén"
        },
        {
         "txt": "他长高了",
         "ico": "📏",
         "py": "Tā zhǎng gāo le"
        }
       ],
       "qpy": "Tā shí wǔ suì shì qīng-shàonián ma?"
      },
      {
       "q": "你小时候在哪儿长大的？",
       "qvi": "Hồi nhỏ bạn lớn lên ở đâu?",
       "scene": "👶🏙️",
       "ans": "我从小在北京长大",
       "opts": [
        {
         "txt": "我们明天去看电影",
         "ico": "🎬",
         "py": "Wǒmen míngtiān qù kàn diànyǐng"
        },
        {
         "txt": "我从小在北京长大",
         "ico": "🏙️",
         "py": "Wǒ cóngxiǎo zài Běijīng zhǎngdà"
        },
        {
         "txt": "我昨天买了一件大衣",
         "ico": "🧥",
         "py": "Wǒ zuótiān mǎi le yī jiàn dàyī"
        }
       ],
       "qpy": "Nǐ xiǎoshíhou zài nǎr zhǎngdà de?"
      },
      {
       "q": "这个地方的人口多吗？",
       "qvi": "Dân số ở nơi này có đông không?",
       "scene": "🏙️👥",
       "ans": "人口很多",
       "opts": [
        {
         "txt": "人们都喜欢他",
         "ico": "😊",
         "py": "Rénmen dōu xǐhuan tā"
        },
        {
         "txt": "他一生都在工作",
         "ico": "💼",
         "py": "Tā yīshēng dōu zài gōngzuò"
        },
        {
         "txt": "人口很多",
         "ico": "👥",
         "py": "Rénkǒu hěn duō"
        }
       ],
       "qpy": "Zhè gè dìfang de rénkǒu duō ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu người trong ảnh",
      "steps": [
       "<b>Bước 1:</b> Mở một bức ảnh gia đình và nói tuổi từng người: <i>\"我爷爷是老年人\"</i>, <i>\"他今年三十岁\"</i>.",
       "<b>Bước 2:</b> Hỏi bạn đồng nghiệp: <i>\"你小时候在哪儿长大的？\"</i> rồi trả lời về mình bằng <i>\"我从小在……长大\"</i>.",
       "<b>Bước 3:</b> Nói thành tiếng 3 câu mô tả người quen: <i>\"他是一个好人\"</i>, <i>\"他们都是年轻人\"</i>."
      ]
     }
    }
   ]
  },
  "2.13": {
   "lessons": [
    {
     "id": "2.13A",
     "name": "Bài 2.13A: Giờ giấc, trước và sau",
     "grammar": {
      "formulas": [
       "⏰ 下班 + 🔙 以后 + 🧑 我 + 🏠 回家",
       "🍚 吃饭 + ⏪ 以前 + 🧼 先洗手",
       "🕒 十五分钟 + 🔙 以后 + 🧑 他 + 🏠 到家"
      ],
      "tip": "Đặt thời điểm hoặc hành động trước 以前 (yǐqián, \"dĩ tiền\") hoặc 以后 (yǐhòu, \"dĩ hậu\"): 吃饭以前 = trước khi ăn cơm, 下班以后 = sau khi tan làm. Cụm này đứng đầu câu hoặc ngay sau chủ ngữ, trước động từ chính.",
      "vn_tip": "Tiếng Việt nói \"trước khi ăn cơm, tôi rửa tay\" nên người Việt hay đặt 以前 ở cuối cả câu. Trong tiếng Trung phải viết 我吃饭以前先洗手: cụm thời gian đứng trước động từ chính."
     },
     "chunks": [
      {
       "scene": "🌅⏰🛏️",
       "full": "我平时七点以前起床",
       "vi": "Bình thường tôi dậy trước bảy giờ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "平时七点以前",
         "ico": "⏰",
         "c": "v",
         "py": "píngshí qī diǎn yǐqián",
         "hv": "bình thời thất điểm dĩ tiền"
        },
        {
         "t": "起床",
         "ico": "🛏️",
         "c": "o",
         "py": "qǐchuáng",
         "hv": "khởi sàng"
        }
       ],
       "traceWord": "平时",
       "py": "Wǒ píngshí qī diǎn yǐqián qǐchuáng",
       "traceKey": "pingshi",
       "traceInfo": [
        {
         "c": "平",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      },
      {
       "scene": "🏢🛍️⌚",
       "full": "我下班以后去买手表",
       "vi": "Sau khi tan làm tôi đi mua đồng hồ đeo tay",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "下班以后去",
         "ico": "🏢",
         "c": "v",
         "py": "xiàbān yǐhòu qù",
         "hv": "hạ ban dĩ hậu khứ"
        },
        {
         "t": "买手表",
         "ico": "⌚",
         "c": "o",
         "py": "mǎi shǒubiǎo",
         "hv": "mãi thủ biểu"
        }
       ],
       "traceWord": "手表",
       "py": "Wǒ xiàbān yǐhòu qù mǎi shǒubiǎo",
       "traceKey": "shoubiao",
       "traceInfo": [
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        },
        {
         "c": "表",
         "py": "biǎo",
         "hv": "biểu"
        }
       ]
      },
      {
       "scene": "🏢⏰🚶",
       "full": "我一般八点以前到公司",
       "vi": "Tôi thường đến công ty trước tám giờ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "一般八点以前",
         "ico": "⏰",
         "c": "v",
         "py": "yībān bā diǎn yǐqián",
         "hv": "nhất ban bát điểm dĩ tiền"
        },
        {
         "t": "到公司",
         "ico": "🏢",
         "c": "o",
         "py": "dào gōngsī",
         "hv": "đáo công ti"
        }
       ],
       "traceWord": "一般",
       "py": "Wǒ yībān bā diǎn yǐqián dào gōngsī",
       "traceKey": "yiban",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "般",
         "py": "bān",
         "hv": "ban"
        }
       ]
      },
      {
       "scene": "🍚⏪🧼",
       "full": "我吃饭以前先洗手",
       "vi": "Trước khi ăn cơm tôi rửa tay trước",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "吃饭以前",
         "ico": "🍚",
         "c": "v",
         "py": "chīfàn yǐqián",
         "hv": "cật phạn dĩ tiền"
        },
        {
         "t": "先洗手",
         "ico": "🧼",
         "c": "o",
         "py": "xiān xǐ shǒu",
         "hv": "tiên tẩy thủ"
        }
       ],
       "traceWord": "以前",
       "py": "Wǒ chīfàn yǐqián xiān xǐ shǒu",
       "traceKey": "yiqian",
       "traceInfo": [
        {
         "c": "以",
         "py": "yǐ",
         "hv": "dĩ"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "🏢🔙🚇🏠",
       "full": "下班以后我坐地铁回家",
       "vi": "Sau khi tan làm tôi đi tàu điện ngầm về nhà",
       "parts": [
        {
         "t": "下班以后我",
         "ico": "🏢",
         "c": "s",
         "py": "xiàbān yǐhòu wǒ",
         "hv": "hạ ban dĩ hậu ngã"
        },
        {
         "t": "坐地铁",
         "ico": "🚇",
         "c": "v",
         "py": "zuò dìtiě",
         "hv": "tọa địa thiết"
        },
        {
         "t": "回家",
         "ico": "🏠",
         "c": "o",
         "py": "huí jiā",
         "hv": "hồi gia"
        }
       ],
       "traceWord": "以后",
       "py": "Xiàbān yǐhòu wǒ zuò dìtiě huí jiā",
       "traceKey": "yihou",
       "traceInfo": [
        {
         "c": "以",
         "py": "yǐ",
         "hv": "dĩ"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🌙🍵🚫",
       "full": "夜里十点以后我不喝茶",
       "vi": "Ban đêm sau mười giờ tôi không uống trà",
       "parts": [
        {
         "t": "夜里十点以后我",
         "ico": "🌙",
         "c": "s",
         "py": "yèlǐ shí diǎn yǐhòu wǒ",
         "hv": "dạ lý thập điểm dĩ hậu ngã"
        },
        {
         "t": "不喝",
         "ico": "🚫",
         "c": "v",
         "py": "bù hē",
         "hv": "bất hát"
        },
        {
         "t": "茶",
         "ico": "🍵",
         "c": "o",
         "py": "chá",
         "hv": "trà"
        }
       ],
       "traceWord": "夜里",
       "py": "Yèlǐ shí diǎn yǐhòu wǒ bù hē chá",
       "traceKey": "yeli",
       "traceInfo": [
        {
         "c": "夜",
         "py": "yè",
         "hv": "dạ"
        },
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "🌃🕒😴",
       "full": "半夜三点以前他没睡觉",
       "vi": "Trước ba giờ đêm anh ấy chưa ngủ",
       "parts": [
        {
         "t": "半夜三点以前",
         "ico": "🌃",
         "c": "o",
         "py": "bànyè sān diǎn yǐqián",
         "hv": "bán dạ tam điểm dĩ tiền"
        },
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "没睡觉",
         "ico": "😴",
         "c": "v",
         "py": "méi shuìjiào",
         "hv": "một thụy giác"
        }
       ],
       "traceWord": "半夜",
       "py": "Bànyè sān diǎn yǐqián tā méi shuìjiào",
       "traceKey": "banye",
       "traceInfo": [
        {
         "c": "半",
         "py": "bàn",
         "hv": "bán"
        },
        {
         "c": "夜",
         "py": "yè",
         "hv": "dạ"
        }
       ]
      },
      {
       "scene": "🕒🔙👨🏠",
       "full": "他十五分钟以后到家",
       "vi": "Mười lăm phút nữa anh ấy sẽ về đến nhà",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "十五分钟以后",
         "ico": "🕒",
         "c": "v",
         "py": "shí wǔ fēnzhōng yǐhòu",
         "hv": "thập ngũ phân chung dĩ hậu"
        },
        {
         "t": "到家",
         "ico": "🏠",
         "c": "o",
         "py": "dào jiā",
         "hv": "đáo gia"
        }
       ],
       "traceWord": "分钟",
       "py": "Tā shí wǔ fēnzhōng yǐhòu dào jiā",
       "traceKey": "fenzhong",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "钟",
         "py": "zhōng",
         "hv": "chung"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你平常几点睡觉？",
       "qvi": "Bình thường bạn mấy giờ đi ngủ?",
       "scene": "🌙😴",
       "ans": "我平常十一点以前睡觉",
       "opts": [
        {
         "txt": "我平常十一点以前睡觉",
         "ico": "😴",
         "py": "Wǒ píngcháng shí yī diǎn yǐqián shuìjiào"
        },
        {
         "txt": "我平常在家里吃饭",
         "ico": "🍚",
         "py": "Wǒ píngcháng zài jiā li chīfàn"
        },
        {
         "txt": "今天的夜很安静",
         "ico": "🌙",
         "py": "Jīntiān de yè hěn ānjìng"
        }
       ],
       "qpy": "Nǐ píngcháng jǐ diǎn shuìjiào?"
      },
      {
       "q": "现在几点了？",
       "qvi": "Bây giờ là mấy giờ rồi?",
       "scene": "⌚❓",
       "ans": "现在三点一刻",
       "opts": [
        {
         "txt": "我喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ xǐhuan chī miànbāo"
        },
        {
         "txt": "现在三点一刻",
         "ico": "⌚",
         "py": "Xiànzài sān diǎn yī kè"
        },
        {
         "txt": "他在学校学习",
         "ico": "🏫",
         "py": "Tā zài xuéxiào xuéxí"
        }
       ],
       "qpy": "Xiànzài jǐ diǎn le?"
      },
      {
       "q": "你什么时候可以来？",
       "qvi": "Khi nào bạn có thể đến?",
       "scene": "🧑🚶",
       "ans": "我随时可以来",
       "opts": [
        {
         "txt": "以下的字我都认识",
         "ico": "📖",
         "py": "Yǐxià de zì wǒ dōu rènshi"
        },
        {
         "txt": "我随时可以来",
         "ico": "🚶",
         "py": "Wǒ suíshí kěyǐ lái"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        }
       ],
       "qpy": "Nǐ shénme shíhou kěyǐ lái?"
      },
      {
       "q": "你们公司有多少人？",
       "qvi": "Công ty các bạn có bao nhiêu người?",
       "scene": "🏢👥",
       "ans": "二十个人以上",
       "opts": [
        {
         "txt": "他们同时回家",
         "ico": "🏠",
         "py": "Tāmen tóngshí huí jiā"
        },
        {
         "txt": "学校以外有一个公园",
         "ico": "🌳",
         "py": "Xuéxiào yǐwài yǒu yī gè gōngyuán"
        },
        {
         "txt": "二十个人以上",
         "ico": "👥",
         "py": "Èr shí gè rén yǐshàng"
        }
       ],
       "qpy": "Nǐmen gōngsī yǒu duōshao rén?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể lịch sinh hoạt một ngày đi làm",
      "steps": [
       "<b>Bước 1:</b> Viết ra 4 việc bạn làm mỗi ngày (dậy, ăn sáng, đi làm, tan làm) và giờ của từng việc.",
       "<b>Bước 2:</b> Nói thành tiếng từng việc bằng mẫu <i>\"我下班以后去买手表\"</i> và <i>\"我吃饭以前先洗手\"</i>, thay bằng việc của bạn.",
       "<b>Bước 3:</b> Nhắn cho một đồng nghiệp: hỏi <i>\"你平常几点睡觉？\"</i> rồi kể lại lịch của mình bằng 3 câu có 以前 hoặc 以后."
      ]
     }
    },
    {
     "id": "2.13B",
     "name": "Bài 2.13B: Tuần, ngày lễ, làm gì trước gì sau",
     "grammar": {
      "formulas": [
       "🧑 我 + 1️⃣ 先 + 🍚 吃饭 + 2️⃣ 再 + 💼 工作",
       "🧑 我 + 1️⃣ 先 + 📝 开会 + 2️⃣ 然后 + ✉️ 写信",
       "❓ 周末 + 你 + 先 + 做什么？"
      ],
      "tip": "Mẫu 先……再/然后……: 先 (xiān, \"tiên\") nói việc làm trước, 再 (zài, \"tái\") hoặc 然后 (ránhòu, \"nhiên hậu\") nói việc làm sau. Hai việc cùng một chủ ngữ thì chỉ cần nói chủ ngữ một lần ở đầu.",
      "vn_tip": "Người Việt hay bỏ 先 và chỉ nói \"我吃饭，然后工作\". Hãy thêm 先 ở việc đầu để câu rõ thứ tự. Đừng viết 再 ở việc đầu: 先 luôn đi với việc trước, 再 với việc sau."
     },
     "chunks": [
      {
       "scene": "📝✉️1️⃣2️⃣",
       "full": "我先开会然后写信",
       "vi": "Tôi họp trước rồi viết thư",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "先开会",
         "ico": "📝",
         "c": "v",
         "py": "xiān kāihuì",
         "hv": "tiên khai hội"
        },
        {
         "t": "然后写信",
         "ico": "✉️",
         "c": "o",
         "py": "ránhòu xiě xìn",
         "hv": "nhiên hậu tả tín"
        }
       ],
       "traceWord": "然后",
       "py": "Wǒ xiān kāihuì ránhòu xiě xìn",
       "traceKey": "ranhou",
       "traceInfo": [
        {
         "c": "然",
         "py": "rán",
         "hv": "nhiên"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🧧🏠👫",
       "full": "春节我先回家再看朋友",
       "vi": "Tết tôi về nhà trước rồi đi thăm bạn bè",
       "parts": [
        {
         "t": "春节我",
         "ico": "🧧",
         "c": "s",
         "py": "Chūnjié wǒ",
         "hv": "xuân tiết ngã"
        },
        {
         "t": "先回家",
         "ico": "🏠",
         "c": "v",
         "py": "xiān huí jiā",
         "hv": "tiên hồi gia"
        },
        {
         "t": "再看朋友",
         "ico": "👫",
         "c": "o",
         "py": "zài kàn péngyou",
         "hv": "tái khán bằng hữu"
        }
       ],
       "traceWord": "春节",
       "py": "Chūnjié wǒ xiān huí jiā zài kàn péngyou",
       "traceKey": "chunjie",
       "traceInfo": [
        {
         "c": "春",
         "py": "chūn",
         "hv": "xuân"
        },
        {
         "c": "节",
         "py": "jié",
         "hv": "tiết"
        }
       ]
      },
      {
       "scene": "🎊🥟📺",
       "full": "过年先吃饺子再看电视",
       "vi": "Ăn Tết thì ăn sủi cảo trước rồi xem tivi",
       "parts": [
        {
         "t": "过年",
         "ico": "🎊",
         "c": "s",
         "py": "guònián",
         "hv": "quá niên"
        },
        {
         "t": "先吃饺子",
         "ico": "🥟",
         "c": "v",
         "py": "xiān chī jiǎozi",
         "hv": "tiên cật giảo tử"
        },
        {
         "t": "再看电视",
         "ico": "📺",
         "c": "o",
         "py": "zài kàn diànshì",
         "hv": "tái khán điện thị"
        }
       ],
       "traceWord": "过年",
       "py": "Guònián xiān chī jiǎozi zài kàn diànshì",
       "traceKey": "guonian",
       "traceInfo": [
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      },
      {
       "scene": "🎉🌳🏠",
       "full": "节日我先去公园再回家",
       "vi": "Ngày lễ tôi đến công viên trước rồi về nhà",
       "parts": [
        {
         "t": "节日我",
         "ico": "🎉",
         "c": "s",
         "py": "jiérì wǒ",
         "hv": "tiết nhật ngã"
        },
        {
         "t": "先去公园",
         "ico": "🌳",
         "c": "v",
         "py": "xiān qù gōngyuán",
         "hv": "tiên khứ công viên"
        },
        {
         "t": "再回家",
         "ico": "🏠",
         "c": "o",
         "py": "zài huí jiā",
         "hv": "tái hồi gia"
        }
       ],
       "traceWord": "节日",
       "py": "Jiérì wǒ xiān qù gōngyuán zài huí jiā",
       "traceKey": "jieri",
       "traceInfo": [
        {
         "c": "节",
         "py": "jié",
         "hv": "tiết"
        },
        {
         "c": "日",
         "py": "rì",
         "hv": "nhật"
        }
       ]
      },
      {
       "scene": "📅😴⛰️",
       "full": "周末我先睡觉再去爬山",
       "vi": "Cuối tuần tôi ngủ trước rồi đi leo núi",
       "parts": [
        {
         "t": "周末我",
         "ico": "📅",
         "c": "s",
         "py": "zhōumò wǒ",
         "hv": "chu mạt ngã"
        },
        {
         "t": "先睡觉",
         "ico": "😴",
         "c": "v",
         "py": "xiān shuìjiào",
         "hv": "tiên thụy giác"
        },
        {
         "t": "再去爬山",
         "ico": "⛰️",
         "c": "o",
         "py": "zài qù pá shān",
         "hv": "tái khứ ba sơn"
        }
       ],
       "traceWord": "周末",
       "py": "Zhōumò wǒ xiān shuìjiào zài qù pá shān",
       "traceKey": "zhoumo",
       "traceInfo": [
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        },
        {
         "c": "末",
         "py": "mò",
         "hv": "mạt"
        }
       ]
      },
      {
       "scene": "📅✈️🏠",
       "full": "下周我先去北京再回家",
       "vi": "Tuần sau tôi đi Bắc Kinh trước rồi về nhà",
       "parts": [
        {
         "t": "下周我",
         "ico": "📅",
         "c": "s",
         "py": "xià zhōu wǒ",
         "hv": "hạ chu ngã"
        },
        {
         "t": "先去北京",
         "ico": "✈️",
         "c": "v",
         "py": "xiān qù Běijīng",
         "hv": "tiên khứ bắc kinh"
        },
        {
         "t": "再回家",
         "ico": "🏠",
         "c": "o",
         "py": "zài huí jiā",
         "hv": "tái hồi gia"
        }
       ],
       "traceWord": "下周",
       "py": "Xià zhōu wǒ xiān qù Běijīng zài huí jiā",
       "traceKey": "xiazhou",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        }
       ]
      },
      {
       "scene": "📅🏥💼",
       "full": "上周我先看病再上班",
       "vi": "Tuần trước tôi đi khám bệnh trước rồi mới đi làm",
       "parts": [
        {
         "t": "上周我",
         "ico": "📅",
         "c": "s",
         "py": "shàng zhōu wǒ",
         "hv": "thượng chu ngã"
        },
        {
         "t": "先看病",
         "ico": "🏥",
         "c": "v",
         "py": "xiān kànbìng",
         "hv": "tiên khán bệnh"
        },
        {
         "t": "再上班",
         "ico": "💼",
         "c": "o",
         "py": "zài shàngbān",
         "hv": "tái thượng ban"
        }
       ],
       "traceWord": "上周",
       "py": "Shàng zhōu wǒ xiān kànbìng zài shàngbān",
       "traceKey": "shangzhou",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        }
       ]
      },
      {
       "scene": "🍵📰1️⃣2️⃣",
       "full": "他先喝茶接着看报纸",
       "vi": "Anh ấy uống trà trước rồi đọc báo",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "先喝茶",
         "ico": "🍵",
         "c": "v",
         "py": "xiān hē chá",
         "hv": "tiên hát trà"
        },
        {
         "t": "接着看报纸",
         "ico": "📰",
         "c": "o",
         "py": "jiēzhe kàn bàozhǐ",
         "hv": "tiếp trước khán báo chỉ"
        }
       ],
       "traceWord": "接着",
       "py": "Tā xiān hē chá jiēzhe kàn bàozhǐ",
       "traceKey": "jiezhe",
       "traceInfo": [
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        },
        {
         "c": "着",
         "py": "zhe",
         "hv": "trước"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "今天是什么日子？",
       "qvi": "Hôm nay là ngày gì?",
       "scene": "📅🎂",
       "ans": "今天是公司二十周年",
       "opts": [
        {
         "txt": "我家在河内",
         "ico": "🏠",
         "py": "Wǒ jiā zài Hénèi"
        },
        {
         "txt": "今天是公司二十周年",
         "ico": "🎂",
         "py": "Jīntiān shì gōngsī èr shí zhōunián"
        },
        {
         "txt": "今天有两节课",
         "ico": "📚",
         "py": "Jīntiān yǒu liǎng jié kè"
        }
       ],
       "qpy": "Jīntiān shì shénme rìzi?"
      },
      {
       "q": "你前年去哪儿了？",
       "qvi": "Năm kia bạn đã đi đâu?",
       "scene": "📅✈️",
       "ans": "前年我去了北京",
       "opts": [
        {
         "txt": "前年我去了北京",
         "ico": "✈️",
         "py": "Qiánnián wǒ qù le Běijīng"
        },
        {
         "txt": "我明天在家休息",
         "ico": "🏠",
         "py": "Wǒ míngtiān zàijiā xiūxi"
        },
        {
         "txt": "我一周工作五天",
         "ico": "💼",
         "py": "Wǒ yī zhōu gōngzuò wǔ tiān"
        }
       ],
       "qpy": "Nǐ qiánnián qù nǎr le?"
      },
      {
       "q": "全年里你们哪个月份最忙？",
       "qvi": "Cả năm các bạn bận nhất vào tháng nào?",
       "scene": "📅💼",
       "ans": "十二月份最忙",
       "opts": [
        {
         "txt": "我是越南人",
         "ico": "🇻🇳",
         "py": "Wǒ shì Yuènán rén"
        },
        {
         "txt": "周末我先睡觉",
         "ico": "😴",
         "py": "Zhōumò wǒ xiān shuìjiào"
        },
        {
         "txt": "十二月份最忙",
         "ico": "💼",
         "py": "Shí èr yuèfèn zuì máng"
        }
       ],
       "qpy": "Quánnián lǐ nǐmen nǎ gè yuèfèn zuì máng?"
      },
      {
       "q": "接下来我们做什么？",
       "qvi": "Tiếp theo chúng ta làm gì?",
       "scene": "🍽️📋",
       "ans": "接下来我们先看菜单",
       "opts": [
        {
         "txt": "他是我的老师",
         "ico": "👨",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我喜欢红色",
         "ico": "🔴",
         "py": "Wǒ xǐhuan hóngsè"
        },
        {
         "txt": "接下来我们先看菜单",
         "ico": "📋",
         "py": "Jiē xiàlái wǒmen xiān kàn càidān"
        }
       ],
       "qpy": "Jiē xiàlái wǒmen zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Lên kế hoạch kỳ nghỉ lễ",
      "steps": [
       "<b>Bước 1:</b> Mở lịch, chọn một kỳ nghỉ lễ hoặc cuối tuần sắp tới và liệt kê 3 việc bạn định làm.",
       "<b>Bước 2:</b> Nói thành tiếng thứ tự các việc đó: <i>\"周末我先睡觉再去爬山\"</i>, thay bằng việc của bạn, dùng cả 再 và 然后.",
       "<b>Bước 3:</b> Nhắn cho đồng nghiệp hỏi kế hoạch của họ, rồi kể lại kế hoạch của mình bằng hai câu có 先……再……, ví dụ <i>\"下周我先去北京再回家\"</i>."
      ]
     }
    },
    {
     "id": "2.13C",
     "name": "Bài 2.13C: Vừa… là… (quá khứ, hiện tại, tương lai)",
     "grammar": {
      "formulas": [
       "🧑 我 + ☝️ 一 + 🏠 下班 + ➡️ 就 + 🏠 回家",
       "🧑 他 + ☝️ 一 + 👀 看见我 + ➡️ 就 + 😄 笑",
       "⏳ 等到 + 🧑 他 + ☝️ 一 + 🚪 来 + ➡️ 就 + 📝 开会"
      ],
      "tip": "Mẫu 一……就……: 一 (yī, \"nhất\") + hành động 1, 就 (jiù, \"tựu\") + hành động 2 nghĩa là \"vừa… là… liền\". Hai vế thường cùng chủ ngữ và 就 luôn đứng trước động từ của vế sau.",
      "vn_tip": "Người Việt hay nói \"một… là…\" nên dịch thành 一……是……. Phải dùng 就, không dùng 是: 我一下班就回家. Đừng bỏ 一 ở vế đầu."
     },
     "chunks": [
      {
       "scene": "👨🚪❓",
       "full": "他刚才一到就问你",
       "vi": "Vừa nãy anh ấy vừa đến là hỏi bạn ngay",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "刚才一到",
         "ico": "🚪",
         "c": "o",
         "py": "gāngcái yī dào",
         "hv": "cương tài nhất đáo"
        },
        {
         "t": "就问你",
         "ico": "❓",
         "c": "v",
         "py": "jiù wèn nǐ",
         "hv": "tựu vấn nễ"
        }
       ],
       "traceWord": "刚才",
       "py": "Tā gāngcái yī dào jiù wèn nǐ",
       "traceKey": "gangcai",
       "traceInfo": [
        {
         "c": "刚",
         "py": "gāng",
         "hv": "cương"
        },
        {
         "c": "才",
         "py": "cái",
         "hv": "tài"
        }
       ]
      },
      {
       "scene": "🏢🏠📅",
       "full": "最近我一下班就回家",
       "vi": "Dạo này tôi vừa tan làm là về nhà",
       "parts": [
        {
         "t": "最近我",
         "ico": "📅",
         "c": "s",
         "py": "zuìjìn wǒ",
         "hv": "tối cận ngã"
        },
        {
         "t": "一下班",
         "ico": "🏢",
         "c": "o",
         "py": "yī xiàbān",
         "hv": "nhất hạ ban"
        },
        {
         "t": "就回家",
         "ico": "🏠",
         "c": "v",
         "py": "jiù huí jiā",
         "hv": "tựu hồi gia"
        }
       ],
       "traceWord": "最近",
       "py": "Zuìjìn wǒ yī xiàbān jiù huí jiā",
       "traceKey": "zuijin",
       "traceInfo": [
        {
         "c": "最",
         "py": "zuì",
         "hv": "tối"
        },
        {
         "c": "近",
         "py": "jìn",
         "hv": "cận"
        }
       ]
      },
      {
       "scene": "👨👀😄",
       "full": "后来他一看见我就笑",
       "vi": "Sau đó anh ấy vừa thấy tôi là cười",
       "parts": [
        {
         "t": "后来他",
         "ico": "👨",
         "c": "s",
         "py": "hòulái tā",
         "hv": "hậu lai tha"
        },
        {
         "t": "一看见我",
         "ico": "👀",
         "c": "o",
         "py": "yī kànjiàn wǒ",
         "hv": "nhất khán kiến ngã"
        },
        {
         "t": "就笑",
         "ico": "😄",
         "c": "v",
         "py": "jiù xiào",
         "hv": "tựu tiếu"
        }
       ],
       "traceWord": "后来",
       "py": "Hòulái tā yī kànjiàn wǒ jiù xiào",
       "traceKey": "houlai",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "⏳👨🚪📝",
       "full": "等到他一来我们就开会",
       "vi": "Đợi anh ấy vừa đến là chúng ta họp",
       "parts": [
        {
         "t": "等到他",
         "ico": "⏳",
         "c": "s",
         "py": "děngdào tā",
         "hv": "đẳng đáo tha"
        },
        {
         "t": "一来",
         "ico": "🚪",
         "c": "o",
         "py": "yī lái",
         "hv": "nhất lai"
        },
        {
         "t": "我们就开会",
         "ico": "📝",
         "c": "v",
         "py": "wǒmen jiù kāihuì",
         "hv": "ngã môn tựu khai hội"
        }
       ],
       "traceWord": "等到",
       "py": "Děngdào tā yī lái wǒmen jiù kāihuì",
       "traceKey": "dengdao",
       "traceInfo": [
        {
         "c": "等",
         "py": "děng",
         "hv": "đẳng"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🔜🧑🕐",
       "full": "今后我一有空儿就来",
       "vi": "Từ nay hễ có thời gian là tôi đến",
       "parts": [
        {
         "t": "今后我",
         "ico": "🔜",
         "c": "s",
         "py": "jīnhòu wǒ",
         "hv": "kim hậu ngã"
        },
        {
         "t": "一有空儿",
         "ico": "🕐",
         "c": "o",
         "py": "yī yǒukòngr",
         "hv": "nhất hữu khống nhi"
        },
        {
         "t": "就来",
         "ico": "🚶",
         "c": "v",
         "py": "jiù lái",
         "hv": "tựu lai"
        }
       ],
       "traceWord": "今后",
       "py": "Jīnhòu wǒ yī yǒukòngr jiù lái",
       "traceKey": "jinhou",
       "traceInfo": [
        {
         "c": "今",
         "py": "jīn",
         "hv": "kim"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "💡👨✅",
       "full": "原来他早就知道了",
       "vi": "Hóa ra anh ấy đã biết từ lâu rồi",
       "parts": [
        {
         "t": "原来",
         "ico": "💡",
         "c": "o",
         "py": "yuánlái",
         "hv": "nguyên lai"
        },
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "早就知道了",
         "ico": "✅",
         "c": "v",
         "py": "zǎo jiù zhīdào le",
         "hv": "tảo tựu tri đạo liễu"
        }
       ],
       "traceWord": "原来",
       "py": "Yuánlái tā zǎo jiù zhīdào le",
       "traceKey": "yuanlai",
       "traceInfo": [
        {
         "c": "原",
         "py": "yuán",
         "hv": "nguyên"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "👨🚪🚶",
       "full": "他来了不久就走了",
       "vi": "Anh ấy đến chưa bao lâu thì đi rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "来了",
         "ico": "🚪",
         "c": "v",
         "py": "lái le",
         "hv": "lai liễu"
        },
        {
         "t": "不久就走了",
         "ico": "🚶",
         "c": "o",
         "py": "bùjiǔ jiù zǒu le",
         "hv": "bất cửu tựu tẩu liễu"
        }
       ],
       "traceWord": "不久",
       "py": "Tā lái le bùjiǔ jiù zǒu le",
       "traceKey": "bujiu",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "久",
         "py": "jiǔ",
         "hv": "cửu"
        }
       ]
      },
      {
       "scene": "⏪📖😴",
       "full": "那时我一看书就睡",
       "vi": "Hồi đó tôi vừa đọc sách là ngủ",
       "parts": [
        {
         "t": "那时我",
         "ico": "⏪",
         "c": "s",
         "py": "nà shí wǒ",
         "hv": "na thời ngã"
        },
        {
         "t": "一看书",
         "ico": "📖",
         "c": "o",
         "py": "yī kàn shū",
         "hv": "nhất khán thư"
        },
        {
         "t": "就睡",
         "ico": "😴",
         "c": "v",
         "py": "jiù shuì",
         "hv": "tựu thụy"
        }
       ],
       "traceWord": "那时",
       "py": "Nà shí wǒ yī kàn shū jiù shuì",
       "traceKey": "nashi",
       "traceInfo": [
        {
         "c": "那",
         "py": "nà",
         "hv": "na"
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
       "q": "你们等了多久？",
       "qvi": "Các bạn đã đợi bao lâu?",
       "scene": "⏳👥",
       "ans": "我们等了好久",
       "opts": [
        {
         "txt": "我们在公司工作",
         "ico": "🏢",
         "py": "Wǒmen zài gōngsī gōngzuò"
        },
        {
         "txt": "我下午去超市",
         "ico": "🛒",
         "py": "Wǒ xiàwǔ qù chāoshì"
        },
        {
         "txt": "我们等了好久",
         "ico": "⏳",
         "py": "Wǒmen děng le hǎojiǔ"
        }
       ],
       "qpy": "Nǐmen děng le duōjiǔ?"
      },
      {
       "q": "你什么时候知道的？",
       "qvi": "Bạn biết từ khi nào?",
       "scene": "💡❓",
       "ans": "当时我就知道了",
       "opts": [
        {
         "txt": "当时我就知道了",
         "ico": "💡",
         "py": "Dāngshí wǒ jiù zhīdào le"
        },
        {
         "txt": "他的车很新",
         "ico": "🚗",
         "py": "Tā de chē hěn xīn"
        },
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        }
       ],
       "qpy": "Nǐ shénme shíhou zhīdào de?"
      },
      {
       "q": "他什么时候走的？",
       "qvi": "Anh ấy đi lúc nào?",
       "scene": "👨🚶",
       "ans": "不一会儿他就走了",
       "opts": [
        {
         "txt": "那会儿我住在北京",
         "ico": "🏙️",
         "py": "Nàhuìr wǒ zhù zài Běijīng"
        },
        {
         "txt": "这时候我们正在开会",
         "ico": "📝",
         "py": "Zhè shíhou wǒmen zhèngzài kāihuì"
        },
        {
         "txt": "不一会儿他就走了",
         "ico": "🚶",
         "py": "Bù yīhuìr tā jiù zǒu le"
        }
       ],
       "qpy": "Tā shénme shíhou zǒu de?"
      },
      {
       "q": "你过去常去那个公园吗？",
       "qvi": "Trước đây bạn có hay đến công viên đó không?",
       "scene": "🌳⏪",
       "ans": "过去我常去",
       "opts": [
        {
         "txt": "请你等一会儿",
         "ico": "⏳",
         "py": "Qǐng nǐ děng yīhuìr"
        },
        {
         "txt": "过去我常去",
         "ico": "🌳",
         "py": "Guòqù wǒ cháng qù"
        },
        {
         "txt": "这本书很好看",
         "ico": "📖",
         "py": "Zhè běn shū hěn hǎokàn"
        }
       ],
       "qpy": "Nǐ guòqù cháng qù nà gè gōngyuán ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn đồng nghiệp về thói quen và kế hoạch",
      "steps": [
       "<b>Bước 1:</b> Nghĩ ra 3 việc bạn luôn làm ngay khi xong một việc khác (ví dụ vừa tan làm là về nhà).",
       "<b>Bước 2:</b> Nói thành tiếng bằng mẫu <i>\"最近我一下班就回家\"</i> và <i>\"今后我一有空儿就来\"</i>, thay bằng việc của bạn.",
       "<b>Bước 3:</b> Nhắn cho đồng nghiệp: hỏi <i>\"你过去常去那个公园吗？\"</i> rồi kể lại một việc trong quá khứ bằng câu có 那时 hoặc 后来."
      ]
     }
    }
   ]
  },
  "2.14": {
   "lessons": [
    {
     "id": "2.14A",
     "name": "Bài 2.14A: Âm nhạc, phim ảnh và giải trí",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 说得 + 💬 很快",
       "🎤 明星 + ⚡ 唱得 + 👍 很好",
       "❓ 他 + 唱得 + 怎么样？"
      ],
      "tip": "Bổ ngữ trạng thái: động từ + 得 (de, đắc) + tính từ để nhận xét cách làm việc gì. Nếu động từ có tân ngữ thì lặp động từ: 唱歌唱得很难听. Phủ định đặt 不 trước tính từ: 唱得不好.",
      "vn_tip": "Người Việt hay nói \"他唱很好\" (bỏ 得) hoặc \"他唱歌得很好\". Đúng: 他唱得很好 hoặc 他唱歌唱得很好. Tính từ thường cần có 很 đứng trước."
     },
     "chunks": [
      {
       "scene": "🧑🗣️💨",
       "full": "他说得很快",
       "vi": "Anh ấy nói rất nhanh",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "说得",
         "ico": "🗣️",
         "c": "v",
         "py": "shuō de",
         "hv": "thuyết đắc"
        },
        {
         "t": "很快",
         "ico": "💨",
         "c": "o",
         "py": "hěn kuài",
         "hv": "ngận khoái"
        }
       ],
       "traceWord": "说得",
       "py": "Tā shuō de hěn kuài",
       "traceKey": "shuode",
       "traceInfo": [
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "📺👍🙂",
       "full": "我觉得这个节目不错",
       "vi": "Tôi thấy chương trình này khá hay",
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
         "t": "这个节目不错",
         "ico": "📺",
         "c": "o",
         "py": "zhè gè jiémù bùcuò",
         "hv": "giá cá tiết mục bất thác"
        }
       ],
       "traceWord": "节目",
       "py": "Wǒ juéde zhè gè jiémù bùcuò",
       "traceKey": "jiemu",
       "traceInfo": [
        {
         "c": "节",
         "py": "jié",
         "hv": "tiết"
        },
        {
         "c": "目",
         "py": "mù",
         "hv": "mục"
        }
       ]
      },
      {
       "scene": "🎵🔥❓",
       "full": "现在流行什么音乐",
       "vi": "Bây giờ đang thịnh hành nhạc gì?",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "流行",
         "ico": "🔥",
         "c": "v",
         "py": "liúxíng",
         "hv": "lưu hành"
        },
        {
         "t": "什么音乐",
         "ico": "🎵",
         "c": "o",
         "py": "shénme yīnyuè",
         "hv": "thập ma âm nhạc"
        }
       ],
       "traceWord": "流行",
       "py": "Xiànzài liúxíng shénme yīnyuè",
       "traceKey": "liuxing",
       "traceInfo": [
        {
         "c": "流",
         "py": "liú",
         "hv": "lưu"
        },
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        }
       ]
      },
      {
       "scene": "⭐🎤👍",
       "full": "明星唱得很好",
       "vi": "Ngôi sao hát rất hay",
       "parts": [
        {
         "t": "明星",
         "ico": "⭐",
         "c": "s",
         "py": "míngxīng",
         "hv": "minh tinh"
        },
        {
         "t": "唱得",
         "ico": "🎤",
         "c": "v",
         "py": "chàng de",
         "hv": "xướng đắc"
        },
        {
         "t": "很好",
         "ico": "👍",
         "c": "o",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "明星",
       "py": "Míngxīng chàng de hěn hǎo",
       "traceKey": "mingxing",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "星",
         "py": "xīng",
         "hv": "tinh"
        }
       ]
      },
      {
       "scene": "🧑🎤😖",
       "full": "他唱歌唱得很难听",
       "vi": "Anh ấy hát nghe rất dở",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "唱歌唱得",
         "ico": "🎤",
         "c": "v",
         "py": "chànggē chàng de",
         "hv": "xướng ca xướng đắc"
        },
        {
         "t": "很难听",
         "ico": "😖",
         "c": "o",
         "py": "hěn nántīng",
         "hv": "ngận nan thính"
        }
       ],
       "traceWord": "难听",
       "py": "Tā chànggē chàng de hěn nántīng",
       "traceKey": "nanting",
       "traceInfo": [
        {
         "c": "难",
         "py": "nán",
         "hv": "nan"
        },
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        }
       ]
      },
      {
       "scene": "👥🎉📅",
       "full": "我们组明天有晚会",
       "vi": "Ngày mai nhóm chúng tôi có buổi tiệc tối",
       "parts": [
        {
         "t": "我们组明天",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen zǔ míngtiān",
         "hv": "ngã môn tổ minh thiên"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "晚会",
         "ico": "🎉",
         "c": "o",
         "py": "wǎnhuì",
         "hv": "vãn hội"
        }
       ],
       "traceWord": "晚会",
       "py": "Wǒmen zǔ míngtiān yǒu wǎnhuì",
       "traceKey": "wanhui",
       "traceInfo": [
        {
         "c": "晚",
         "py": "wǎn",
         "hv": "vãn"
        },
        {
         "c": "会",
         "py": "huì",
         "hv": "hội"
        }
       ]
      },
      {
       "scene": "🧑💭🎶",
       "full": "我以为今天有音乐会",
       "vi": "Tôi cứ tưởng hôm nay có buổi hòa nhạc",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "以为",
         "ico": "💭",
         "c": "v",
         "py": "yǐwéi",
         "hv": "dĩ vi"
        },
        {
         "t": "今天有音乐会",
         "ico": "🎶",
         "c": "o",
         "py": "jīntiān yǒu yīnyuèhuì",
         "hv": "kim thiên hữu âm nhạc hội"
        }
       ],
       "traceWord": "音乐会",
       "py": "Wǒ yǐwéi jīntiān yǒu yīnyuèhuì",
       "traceKey": "yinyuehui",
       "traceInfo": [
        {
         "c": "音",
         "py": "yīn",
         "hv": "âm"
        },
        {
         "c": "乐",
         "py": "yuè",
         "hv": "nhạc"
        },
        {
         "c": "会",
         "py": "huì",
         "hv": "hội"
        }
       ]
      },
      {
       "scene": "🧑😲🎬",
       "full": "我没想到影片这么好看",
       "vi": "Tôi không ngờ bộ phim lại hay như vậy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "没想到",
         "ico": "😲",
         "c": "v",
         "py": "méi xiǎngdào",
         "hv": "một tưởng đáo"
        },
        {
         "t": "影片这么好看",
         "ico": "🎬",
         "c": "o",
         "py": "yǐngpiàn zhème hǎokàn",
         "hv": "ảnh phiến giá ma hảo khán"
        }
       ],
       "traceWord": "影片",
       "py": "Wǒ méi xiǎngdào yǐngpiàn zhème hǎokàn",
       "traceKey": "yingpian",
       "traceInfo": [
        {
         "c": "影",
         "py": "yǐng",
         "hv": "ảnh"
        },
        {
         "c": "片",
         "py": "piàn",
         "hv": "phiến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个影片怎么样？",
       "qvi": "Bộ phim này thế nào?",
       "scene": "🎬❓",
       "ans": "很有意思",
       "opts": [
        {
         "txt": "很有意思",
         "ico": "😊",
         "py": "Hěn yǒu yìsi"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "在北京",
         "ico": "📍",
         "py": "Zài Běijīng"
        }
       ],
       "qpy": "Zhè gè yǐngpiàn zěnmeyàng?"
      },
      {
       "q": "你今天怎么这么高兴？",
       "qvi": "Sao hôm nay bạn vui thế?",
       "scene": "🧑😄",
       "ans": "我有一件好事",
       "opts": [
        {
         "txt": "我在公司",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī"
        },
        {
         "txt": "我有一件好事",
         "ico": "🎉",
         "py": "Wǒ yǒu yī jiàn hǎoshì"
        },
        {
         "txt": "我不喝茶",
         "ico": "🍵",
         "py": "Wǒ bù hē chá"
        }
       ],
       "qpy": "Nǐ jīntiān zěnme zhème gāoxìng?"
      },
      {
       "q": "你下午能去吗？",
       "qvi": "Chiều nay bạn đi được không?",
       "scene": "🧑🗓️",
       "ans": "我下午有个会",
       "opts": [
        {
         "txt": "我是老师",
         "ico": "👩‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "他有一本书",
         "ico": "📖",
         "py": "Tā yǒu yī běn shū"
        },
        {
         "txt": "我下午有个会",
         "ico": "🗓️",
         "py": "Wǒ xiàwǔ yǒu gè huì"
        }
       ],
       "qpy": "Nǐ xiàwǔ néng qù ma?"
      },
      {
       "q": "你想看哪个明星的音乐会？",
       "qvi": "Bạn muốn xem buổi hòa nhạc của ngôi sao nào?",
       "scene": "⭐🎶",
       "ans": "我想看他的音乐会",
       "opts": [
        {
         "txt": "我在家做饭",
         "ico": "🍳",
         "py": "Wǒ zàijiā zuòfàn"
        },
        {
         "txt": "我想看他的音乐会",
         "ico": "🎶",
         "py": "Wǒ xiǎng kàn tā de yīnyuèhuì"
        },
        {
         "txt": "我没有手机",
         "ico": "📱",
         "py": "Wǒ méiyǒu shǒujī"
        }
       ],
       "qpy": "Nǐ xiǎng kàn nǎ gè míngxīng de yīnyuèhuì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi xem hòa nhạc",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi xem họ có biết chương trình nào hay không, ví dụ <i>\"现在流行什么音乐？\"</i>.",
       "<b>Bước 2:</b> Nhận xét về một ca sĩ hoặc bộ phim bạn vừa xem bằng mẫu \"động từ + 得 + tính từ\", ví dụ <i>\"他唱得很好\"</i>, <i>\"我没想到影片这么好看\"</i>.",
       "<b>Bước 3:</b> Mời đồng nghiệp đi cùng và hẹn thời gian, hoặc từ chối lịch sự: <i>\"我下午有个会\"</i>. Tự nói thành tiếng cả đoạn hội thoại."
      ]
     }
    },
    {
     "id": "2.14B",
     "name": "Bài 2.14B: Đọc sách, kể chuyện và hội họa",
     "grammar": {
      "formulas": [
       "🍜 这个菜 + ⚡ 又好吃 + 💰 又便宜",
       "📚 这篇小说 + ⚡ 又长 + ✨ 又好看",
       "🧑 他 + ⚡ 又是作家 + 🎨 又是画家"
      ],
      "tip": "Cấu trúc 又……又……(yòu… yòu…, hựu) nối hai tính từ hoặc hai động từ để nói hai đặc điểm cùng tồn tại: 又大又漂亮. Hai vế thường cùng sắc thái (cùng tốt hoặc cùng xấu).",
      "vn_tip": "Người Việt hay dịch \"vừa… vừa…\" thành 一边……一边 (chỉ dùng cho hai hành động diễn ra đồng thời). Với tính từ, phải dùng 又……又……: 又长又有意思, không dùng 一边长一边……"
     },
     "chunks": [
      {
       "scene": "🍜😋💰",
       "full": "这个菜又好吃又便宜",
       "vi": "Món này vừa ngon vừa rẻ",
       "parts": [
        {
         "t": "这个菜",
         "ico": "🍜",
         "c": "s",
         "py": "zhè gè cài",
         "hv": "giá cá thái"
        },
        {
         "t": "又好吃",
         "ico": "😋",
         "c": "v",
         "py": "yòu hǎochī",
         "hv": "hựu hảo cật"
        },
        {
         "t": "又便宜",
         "ico": "💰",
         "c": "o",
         "py": "yòu piányi",
         "hv": "hựu tiện nghi"
        }
       ],
       "traceWord": "好吃",
       "py": "Zhè gè cài yòu hǎochī yòu piányi",
       "traceKey": "haochi",
       "traceInfo": [
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        },
        {
         "c": "吃",
         "py": "chī",
         "hv": "cật"
        }
       ]
      },
      {
       "scene": "📝📚😫",
       "full": "他的作业又多又难",
       "vi": "Bài tập của anh ấy vừa nhiều vừa khó",
       "parts": [
        {
         "t": "他的作业",
         "ico": "📝",
         "c": "s",
         "py": "tā de zuòyè",
         "hv": "tha đích tác nghiệp"
        },
        {
         "t": "又多",
         "ico": "📚",
         "c": "v",
         "py": "yòu duō",
         "hv": "hựu đa"
        },
        {
         "t": "又难",
         "ico": "😫",
         "c": "o",
         "py": "yòu nán",
         "hv": "hựu nan"
        }
       ],
       "traceWord": "作业",
       "py": "Tā de zuòyè yòu duō yòu nán",
       "traceKey": "zuoye",
       "traceInfo": [
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      },
      {
       "scene": "📖📏✨",
       "full": "这篇小说又长又好看",
       "vi": "Truyện ngắn này vừa dài vừa hay",
       "parts": [
        {
         "t": "这篇小说",
         "ico": "📖",
         "c": "s",
         "py": "zhè piān xiǎoshuō",
         "hv": "giá thiên tiểu thuyết"
        },
        {
         "t": "又长",
         "ico": "📏",
         "c": "v",
         "py": "yòu cháng",
         "hv": "hựu trường"
        },
        {
         "t": "又好看",
         "ico": "✨",
         "c": "o",
         "py": "yòu hǎokàn",
         "hv": "hựu hảo khán"
        }
       ],
       "traceWord": "小说",
       "py": "Zhè piān xiǎoshuō yòu cháng yòu hǎokàn",
       "traceKey": "xiaoshuo",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        }
       ]
      },
      {
       "scene": "🧑✍️🎨",
       "full": "他又是作家又是画家",
       "vi": "Anh ấy vừa là nhà văn vừa là họa sĩ",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "又是作家",
         "ico": "✍️",
         "c": "v",
         "py": "yòu shì zuòjiā",
         "hv": "hựu thị tác gia"
        },
        {
         "t": "又是画家",
         "ico": "🎨",
         "c": "o",
         "py": "yòu shì huàjiā",
         "hv": "hựu thị họa gia"
        }
       ],
       "traceWord": "作家",
       "py": "Tā yòu shì zuòjiā yòu shì huàjiā",
       "traceKey": "zuojia",
       "traceInfo": [
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      },
      {
       "scene": "🧑🗣️📚",
       "full": "他讲的故事又短又有意思",
       "vi": "Câu chuyện anh ấy kể vừa ngắn vừa thú vị",
       "parts": [
        {
         "t": "他讲的故事",
         "ico": "🗣️",
         "c": "s",
         "py": "tā jiǎng de gùshi",
         "hv": "tha giảng đích cố sự"
        },
        {
         "t": "又短",
         "ico": "📏",
         "c": "v",
         "py": "yòu duǎn",
         "hv": "hựu đoản"
        },
        {
         "t": "又有意思",
         "ico": "😊",
         "c": "o",
         "py": "yòu yǒu yìsi",
         "hv": "hựu hữu ý tư"
        }
       ],
       "traceWord": "讲",
       "py": "Tā jiǎng de gùshi yòu duǎn yòu yǒu yìsi",
       "traceKey": "jiang",
       "traceInfo": [
        {
         "c": "讲",
         "py": "jiǎng",
         "hv": "giảng"
        }
       ]
      },
      {
       "scene": "📒✍️🧹",
       "full": "他的笔记又清楚又干净",
       "vi": "Ghi chép của anh ấy vừa rõ ràng vừa sạch sẽ",
       "parts": [
        {
         "t": "他的笔记",
         "ico": "📒",
         "c": "s",
         "py": "tā de bǐjì",
         "hv": "tha đích bút ký"
        },
        {
         "t": "又清楚",
         "ico": "👀",
         "c": "v",
         "py": "yòu qīngchu",
         "hv": "hựu thanh sở"
        },
        {
         "t": "又干净",
         "ico": "🧹",
         "c": "o",
         "py": "yòu gānjìng",
         "hv": "hựu can tịnh"
        }
       ],
       "traceWord": "笔记",
       "py": "Tā de bǐjì yòu qīngchu yòu gānjìng",
       "traceKey": "biji",
       "traceInfo": [
        {
         "c": "笔",
         "py": "bǐ",
         "hv": "bút"
        },
        {
         "c": "记",
         "py": "jì",
         "hv": "ký"
        }
       ]
      },
      {
       "scene": "🖼️📐🌈",
       "full": "那些画儿又大又漂亮",
       "vi": "Những bức tranh kia vừa to vừa đẹp",
       "parts": [
        {
         "t": "那些画儿",
         "ico": "🖼️",
         "c": "s",
         "py": "nàxiē huàr",
         "hv": "na ta họa nhi"
        },
        {
         "t": "又大",
         "ico": "📐",
         "c": "v",
         "py": "yòu dà",
         "hv": "hựu đại"
        },
        {
         "t": "又漂亮",
         "ico": "🌈",
         "c": "o",
         "py": "yòu piàoliang",
         "hv": "hựu phiêu lượng"
        }
       ],
       "traceWord": "画儿",
       "py": "Nàxiē huàr yòu dà yòu piàoliang",
       "traceKey": "huar",
       "traceInfo": [
        {
         "c": "画",
         "py": "huà",
         "hv": "họa"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "🧑📝👍",
       "full": "他写的作文又长又好",
       "vi": "Bài văn anh ấy viết vừa dài vừa hay",
       "parts": [
        {
         "t": "他写的作文",
         "ico": "📝",
         "c": "s",
         "py": "tā xiě de zuòwén",
         "hv": "tha tả đích tác văn"
        },
        {
         "t": "又长",
         "ico": "📏",
         "c": "v",
         "py": "yòu cháng",
         "hv": "hựu trường"
        },
        {
         "t": "又好",
         "ico": "👍",
         "c": "o",
         "py": "yòu hǎo",
         "hv": "hựu hảo"
        }
       ],
       "traceWord": "作文",
       "py": "Tā xiě de zuòwén yòu cháng yòu hǎo",
       "traceKey": "zuowen",
       "traceInfo": [
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你会画画儿吗？",
       "qvi": "Bạn biết vẽ tranh không?",
       "scene": "🧑🎨❓",
       "ans": "我会画一点儿",
       "opts": [
        {
         "txt": "我会画一点儿",
         "ico": "🎨",
         "py": "Wǒ huì huà yīdiǎnr"
        },
        {
         "txt": "我在上班",
         "ico": "💼",
         "py": "Wǒ zài shàngbān"
        },
        {
         "txt": "他是我哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ gēge"
        }
       ],
       "qpy": "Nǐ huì huà huàr ma?"
      },
      {
       "q": "这段话你会背吗？",
       "qvi": "Đoạn này bạn thuộc không?",
       "scene": "📄🧠",
       "ans": "我会背",
       "opts": [
        {
         "txt": "我去北京",
         "ico": "🚄",
         "py": "Wǒ qù Běijīng"
        },
        {
         "txt": "我没有书包",
         "ico": "🎒",
         "py": "Wǒ méiyǒu shūbāo"
        },
        {
         "txt": "我会背",
         "ico": "🧠",
         "py": "Wǒ huì bèi"
        }
       ],
       "qpy": "Zhè duàn huà nǐ huì bèi ma?"
      },
      {
       "q": "你喜欢听笑话吗？",
       "qvi": "Bạn thích nghe chuyện cười không?",
       "scene": "🧑😂",
       "ans": "我喜欢听他讲笑话儿",
       "opts": [
        {
         "txt": "我喜欢听他讲笑话儿",
         "ico": "😂",
         "py": "Wǒ xǐhuan tīng tā jiǎng xiàohuar"
        },
        {
         "txt": "我在地铁站",
         "ico": "🚇",
         "py": "Wǒ zài dìtiězhàn"
        },
        {
         "txt": "我有两个妹妹",
         "ico": "👧",
         "py": "Wǒ yǒu liǎng gè mèimei"
        }
       ],
       "qpy": "Nǐ xǐhuan tīng xiàohua ma?"
      },
      {
       "q": "他是做什么的？",
       "qvi": "Anh ấy làm nghề gì?",
       "scene": "🧑🔬❓",
       "ans": "他是科学家",
       "opts": [
        {
         "txt": "他在睡觉",
         "ico": "😴",
         "py": "Tā zài shuìjiào"
        },
        {
         "txt": "他是科学家",
         "ico": "🔬",
         "py": "Tā shì kēxué jiā"
        },
        {
         "txt": "他有两本书",
         "ico": "📚",
         "py": "Tā yǒu liǎng běn shū"
        }
       ],
       "qpy": "Tā shì zuò shénme de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu một cuốn sách hay cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn một cuốn sách, bộ truyện hoặc bức tranh bạn thích và nghĩ ra hai đặc điểm của nó, ví dụ <i>\"这篇小说又长又好看\"</i>.",
       "<b>Bước 2:</b> Nhắn tin hoặc nói với đồng nghiệp về tác giả hay họa sĩ: <i>\"他又是作家又是画家\"</i>, rồi kể thêm một câu như <i>\"他讲的故事又短又有意思\"</i>.",
       "<b>Bước 3:</b> Hỏi đồng nghiệp sở thích của họ: <i>\"你喜欢听笑话吗？\"</i> và tự nói to cả đoạn hội thoại trong vài phút."
      ]
     }
    },
    {
     "id": "2.14C",
     "name": "Bài 2.14C: Học ngoại ngữ, từ vựng và câu",
     "grammar": {
      "formulas": [
       "❓ 你 + ⚡ 喝茶 + 🔀 还是喝水",
       "❓ 你 + ⚡ 学英语 + 🔀 还是学汉语",
       "🧑 周末我 + ⚡ 看电影 + 🔀 或者爬山"
      ],
      "tip": "Hỏi lựa chọn dùng (是)……还是……(háishi, hoàn thị): 你喝茶还是喝水？ Trong câu trần thuật dùng 或者 (huòzhě, hoặc giả): 周末我看电影或者爬山.",
      "vn_tip": "Người Việt hay dùng \"hoặc\" cho cả câu hỏi lẫn câu trần thuật nên nói nhầm \"你喝茶或者喝水？\". Đúng: câu hỏi dùng 还是, câu trần thuật dùng 或者."
     },
     "chunks": [
      {
       "scene": "🧑🍵💧",
       "full": "你喝茶还是喝水",
       "vi": "Bạn uống trà hay uống nước?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "喝茶",
         "ico": "🍵",
         "c": "v",
         "py": "hē chá",
         "hv": "hát trà"
        },
        {
         "t": "还是喝水",
         "ico": "💧",
         "c": "o",
         "py": "háishi hē shuǐ",
         "hv": "hoàn thị hát thủy"
        }
       ],
       "traceWord": "还是",
       "py": "Nǐ hē chá háishi hē shuǐ",
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
       "scene": "🧑📘🗣️",
       "full": "你学英语还是学汉语",
       "vi": "Bạn học tiếng Anh hay tiếng Trung?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "学英语",
         "ico": "📘",
         "c": "v",
         "py": "xué Yīngyǔ",
         "hv": "học anh ngữ"
        },
        {
         "t": "还是学汉语",
         "ico": "🇨🇳",
         "c": "o",
         "py": "háishi xué Hànyǔ",
         "hv": "hoàn thị học hán ngữ"
        }
       ],
       "traceWord": "英语",
       "py": "Nǐ xué Yīngyǔ háishi xué Hànyǔ",
       "traceKey": "yingyu",
       "traceInfo": [
        {
         "c": "英",
         "py": "yīng",
         "hv": "anh"
        },
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        }
       ]
      },
      {
       "scene": "🧑📖📕",
       "full": "你要词典还是字典",
       "vi": "Bạn cần từ điển (từ ngữ) hay tự điển (chữ)?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要",
         "ico": "🙋",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "词典还是字典",
         "ico": "📕",
         "c": "o",
         "py": "cídiǎn háishi zìdiǎn",
         "hv": "từ điển hoàn thị tự điển"
        }
       ],
       "traceWord": "词典",
       "py": "Nǐ yào cídiǎn háishi zìdiǎn",
       "traceKey": "cidian",
       "traceInfo": [
        {
         "c": "词",
         "py": "cí",
         "hv": "từ"
        },
        {
         "c": "典",
         "py": "diǎn",
         "hv": "điển"
        }
       ]
      },
      {
       "scene": "💬🔤🇨🇳",
       "full": "这个词是汉语还是英文",
       "vi": "Từ này là tiếng Trung hay tiếng Anh?",
       "parts": [
        {
         "t": "这个词",
         "ico": "💬",
         "c": "s",
         "py": "zhè gè cí",
         "hv": "giá cá từ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "汉语还是英文",
         "ico": "🔤",
         "c": "o",
         "py": "Hànyǔ háishi Yīngwén",
         "hv": "hán ngữ hoàn thị anh văn"
        }
       ],
       "traceWord": "英文",
       "py": "Zhè gè cí shì Hànyǔ háishi Yīngwén",
       "traceKey": "yingwen",
       "traceInfo": [
        {
         "c": "英",
         "py": "yīng",
         "hv": "anh"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "📅🎬⛰️",
       "full": "周末我看电影或者爬山",
       "vi": "Cuối tuần tôi xem phim hoặc đi leo núi",
       "parts": [
        {
         "t": "周末我",
         "ico": "📅",
         "c": "s",
         "py": "zhōumò wǒ",
         "hv": "chu mạt ngã"
        },
        {
         "t": "看电影",
         "ico": "🎬",
         "c": "v",
         "py": "kàn diànyǐng",
         "hv": "khán điện ảnh"
        },
        {
         "t": "或者爬山",
         "ico": "⛰️",
         "c": "o",
         "py": "huòzhě pá shān",
         "hv": "hoặc giả ba sơn"
        }
       ],
       "traceWord": "或者",
       "py": "Zhōumò wǒ kàn diànyǐng huòzhě pá shān",
       "traceKey": "huozhe",
       "traceInfo": [
        {
         "c": "或",
         "py": "huò",
         "hv": "hoặc"
        },
        {
         "c": "者",
         "py": "zhě",
         "hv": "giả"
        }
       ]
      },
      {
       "scene": "🧑🔊💡",
       "full": "你想知道读音还是意思",
       "vi": "Bạn muốn biết cách đọc hay ý nghĩa?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "想知道",
         "ico": "🤔",
         "c": "v",
         "py": "xiǎng zhīdào",
         "hv": "tưởng tri đạo"
        },
        {
         "t": "读音还是意思",
         "ico": "🔊",
         "c": "o",
         "py": "dúyīn háishi yìsi",
         "hv": "độc âm hoàn thị ý tư"
        }
       ],
       "traceWord": "读音",
       "py": "Nǐ xiǎng zhīdào dúyīn háishi yìsi",
       "traceKey": "duyin",
       "traceInfo": [
        {
         "c": "读",
         "py": "dú",
         "hv": "độc"
        },
        {
         "c": "音",
         "py": "yīn",
         "hv": "âm"
        }
       ]
      },
      {
       "scene": "🧑🗣️🔬",
       "full": "他喜欢语言还是科学",
       "vi": "Anh ấy thích ngôn ngữ hay khoa học?",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "语言还是科学",
         "ico": "🗣️",
         "c": "o",
         "py": "yǔyán háishi kēxué",
         "hv": "ngữ ngôn hoàn thị khoa học"
        }
       ],
       "traceWord": "语言",
       "py": "Tā xǐhuan yǔyán háishi kēxué",
       "traceKey": "yuyan",
       "traceInfo": [
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        },
        {
         "c": "言",
         "py": "yán",
         "hv": "ngôn"
        }
       ]
      },
      {
       "scene": "📝🧑🗣️",
       "full": "这个句子你读还是我读",
       "vi": "Câu này bạn đọc hay tôi đọc?",
       "parts": [
        {
         "t": "这个句子",
         "ico": "📝",
         "c": "s",
         "py": "zhè gè jùzi",
         "hv": "giá cá cú tử"
        },
        {
         "t": "你读",
         "ico": "🧑",
         "c": "v",
         "py": "nǐ dú",
         "hv": "nễ độc"
        },
        {
         "t": "还是我读",
         "ico": "🙋",
         "c": "o",
         "py": "háishi wǒ dú",
         "hv": "hoàn thị ngã độc"
        }
       ],
       "traceWord": "句子",
       "py": "Zhè gè jùzi nǐ dú háishi wǒ dú",
       "traceKey": "juzi",
       "traceInfo": [
        {
         "c": "句",
         "py": "jù",
         "hv": "cú"
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
       "q": "你的普通话流利吗？",
       "qvi": "Tiếng phổ thông của bạn có lưu loát không?",
       "scene": "🧑🗣️❓",
       "ans": "不太流利",
       "opts": [
        {
         "txt": "在北京",
         "ico": "📍",
         "py": "Zài Běijīng"
        },
        {
         "txt": "不太流利",
         "ico": "😅",
         "py": "Bù tài liúlì"
        },
        {
         "txt": "我有一个哥哥",
         "ico": "👦",
         "py": "Wǒ yǒu yī gè gēge"
        }
       ],
       "qpy": "Nǐ de pǔtōnghuà liúlì ma?"
      },
      {
       "q": "这个词语有几个音节？",
       "qvi": "Từ này có mấy âm tiết?",
       "scene": "💬🔢",
       "ans": "有三个音节",
       "opts": [
        {
         "txt": "有三个音节",
         "ico": "3️⃣",
         "py": "Yǒu sān gè yīnjié"
        },
        {
         "txt": "在地铁站",
         "ico": "🚇",
         "py": "Zài dìtiězhàn"
        },
        {
         "txt": "是我同事",
         "ico": "🤝",
         "py": "Shì wǒ tóngshì"
        }
       ],
       "qpy": "Zhè gè cíyǔ yǒu jǐ gè yīnjié?"
      },
      {
       "q": "这个生词怎么读？",
       "qvi": "Từ mới này đọc thế nào?",
       "scene": "🆕🔊❓",
       "ans": "请看字典",
       "opts": [
        {
         "txt": "我有两个妹妹",
         "ico": "👧",
         "py": "Wǒ yǒu liǎng gè mèimei"
        },
        {
         "txt": "我在地铁站",
         "ico": "🚇",
         "py": "Wǒ zài dìtiězhàn"
        },
        {
         "txt": "请看字典",
         "ico": "📕",
         "py": "Qǐng kàn zìdiǎn"
        }
       ],
       "qpy": "Zhè gè shēngcí zěnme dú?"
      },
      {
       "q": "你会说几句英语？",
       "qvi": "Bạn nói được mấy câu tiếng Anh?",
       "scene": "🧑🇬🇧",
       "ans": "我会说一点点",
       "opts": [
        {
         "txt": "我会说一点点",
         "ico": "🗣️",
         "py": "Wǒ huì shuō yī diǎndiǎn"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "明天你或我去公司",
         "ico": "🏢",
         "py": "Míngtiān nǐ huò wǒ qù gōngsī"
        }
       ],
       "qpy": "Nǐ huì shuō jǐ jù Yīngyǔ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đối tác về ngôn ngữ làm việc",
      "steps": [
       "<b>Bước 1:</b> Hỏi đối tác ngôn ngữ họ muốn dùng khi họp: <i>\"你学英语还是学汉语？\"</i> hoặc <i>\"你想说英语还是说普通话？\"</i> (tự thay động từ cho phù hợp).",
       "<b>Bước 2:</b> Khi gặp từ mới, hỏi cách đọc hoặc ý nghĩa: <i>\"你想知道读音还是意思？\"</i>, rồi nhờ họ chỉ vào từ điển hoặc đọc lại một câu.",
       "<b>Bước 3:</b> Hẹn một hoạt động sau giờ làm: <i>\"周末我看电影或者爬山\"</i>. Tự nói thành tiếng cả đoạn hội thoại trong 12 phút."
      ]
     }
    }
   ]
  },
  "2.15": {
   "lessons": [
    {
     "id": "2.15A",
     "name": "Bài 2.15A: Ngân hàng, thẻ và thanh toán",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 是 + ⏰ 昨天 + 🏦 在银行 + 办 + 的",
       "💳 信用卡 + ⚡ 是 + 🧑 朋友给我 + 的",
       "❓ 钱 + 是 + 怎么 + 算 + 的？"
      ],
      "tip": "Cấu trúc 是……的 (shì…de, thị…đích) dùng khi việc ĐÃ xảy ra và ta muốn nhấn mạnh thời gian, nơi chốn hoặc cách thức: 是 đứng trước phần cần nhấn mạnh, 的 đứng cuối câu. Ví dụ: 钱是在银行取的 (tiền là rút ở ngân hàng).",
      "vn_tip": "Người Việt hay nói 我昨天去银行取钱 mà quên nhấn mạnh, hoặc đặt 的 sai chỗ (như 我是昨天的去银行). Đúng: 我是昨天去银行的; 的 luôn ở cuối câu và 是 đứng trước phần được nhấn mạnh."
     },
     "chunks": [
      {
       "scene": "💳🏦🤝",
       "full": "银行卡是他给我的",
       "vi": "Thẻ ngân hàng là anh ấy đưa cho tôi",
       "parts": [
        {
         "t": "银行卡",
         "ico": "💳",
         "c": "s",
         "py": "yínhángkǎ",
         "hv": "ngân hàng _"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "他给我的",
         "ico": "🤝",
         "c": "o",
         "py": "tā gěi wǒ de",
         "hv": "tha cấp ngã đích"
        }
       ],
       "traceWord": "银行卡",
       "py": "Yínhángkǎ shì tā gěi wǒ de",
       "traceKey": "yinhangka",
       "traceInfo": [
        {
         "c": "银",
         "py": "yín",
         "hv": "ngân"
        },
        {
         "c": "行",
         "py": "háng",
         "hv": "hàng"
        },
        {
         "c": "卡",
         "py": "kǎ",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "💳📅🏢",
       "full": "我的信用卡是昨天办的",
       "vi": "Thẻ tín dụng của tôi là hôm qua làm",
       "parts": [
        {
         "t": "我的信用卡",
         "ico": "💳",
         "c": "s",
         "py": "wǒ de xìnyòngkǎ",
         "hv": "ngã đích tín dụng _"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "昨天办的",
         "ico": "📅",
         "c": "o",
         "py": "zuótiān bàn de",
         "hv": "tạc thiên biện đích"
        }
       ],
       "traceWord": "信用卡",
       "py": "Wǒ de xìnyòngkǎ shì zuótiān bàn de",
       "traceKey": "xinyongka",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        },
        {
         "c": "卡",
         "py": "kǎ",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "🏧💰🏦",
       "full": "钱是在银行取的",
       "vi": "Tiền là rút ở ngân hàng",
       "parts": [
        {
         "t": "钱",
         "ico": "💰",
         "c": "s",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "在银行取的",
         "ico": "🏧",
         "c": "o",
         "py": "zài yínháng qǔ de",
         "hv": "tại ngân hàng thủ đích"
        }
       ],
       "traceWord": "取",
       "py": "Qián shì zài yínháng qǔ de",
       "traceKey": "qu",
       "traceInfo": [
        {
         "c": "取",
         "py": "qǔ",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "💰🤝👫",
       "full": "这些钱是朋友借给我的",
       "vi": "Số tiền này là bạn cho tôi mượn",
       "parts": [
        {
         "t": "这些钱",
         "ico": "💰",
         "c": "s",
         "py": "zhèxiē qián",
         "hv": "giá ta tiền"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "朋友借给我的",
         "ico": "🤝",
         "c": "o",
         "py": "péngyou jiè gěi wǒ de",
         "hv": "bằng hữu tá cấp ngã đích"
        }
       ],
       "traceWord": "借",
       "py": "Zhèxiē qián shì péngyou jiè gěi wǒ de",
       "traceKey": "jie",
       "traceInfo": [
        {
         "c": "借",
         "py": "jiè",
         "hv": "tá"
        }
       ]
      },
      {
       "scene": "💻💰🧑",
       "full": "电脑是我省钱买的",
       "vi": "Máy tính là tôi tiết kiệm tiền mua",
       "parts": [
        {
         "t": "电脑",
         "ico": "💻",
         "c": "s",
         "py": "diànnǎo",
         "hv": "điện não"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我省钱买的",
         "ico": "🐷",
         "c": "o",
         "py": "wǒ shěng qián mǎi de",
         "hv": "ngã tỉnh tiền mãi đích"
        }
       ],
       "traceWord": "省",
       "py": "Diànnǎo shì wǒ shěng qián mǎi de",
       "traceKey": "sheng",
       "traceInfo": [
        {
         "c": "省",
         "py": "shěng",
         "hv": "tỉnh"
        }
       ]
      },
      {
       "scene": "👕💵🛍️",
       "full": "衣服是我花两百块买的",
       "vi": "Quần áo là tôi bỏ hai trăm đồng mua",
       "parts": [
        {
         "t": "衣服",
         "ico": "👕",
         "c": "s",
         "py": "yīfu",
         "hv": "y phục"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我花两百块买的",
         "ico": "💵",
         "c": "o",
         "py": "wǒ huā liǎng bǎi kuài mǎi de",
         "hv": "ngã hoa lưỡng bách khối mãi đích"
        }
       ],
       "traceWord": "花",
       "py": "Yīfu shì wǒ huā liǎng bǎi kuài mǎi de",
       "traceKey": "hua",
       "traceInfo": [
        {
         "c": "花",
         "py": "huā",
         "hv": "hoa"
        }
       ]
      },
      {
       "scene": "✉️🧑👔",
       "full": "这封信是我交给经理的",
       "vi": "Lá thư này là tôi đưa cho giám đốc",
       "parts": [
        {
         "t": "这封信",
         "ico": "✉️",
         "c": "s",
         "py": "zhè fēng xìn",
         "hv": "giá phong tín"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我交给经理的",
         "ico": "👔",
         "c": "o",
         "py": "wǒ jiāo gěi jīnglǐ de",
         "hv": "ngã giao cấp kinh lý đích"
        }
       ],
       "traceWord": "交给",
       "py": "Zhè fēng xìn shì wǒ jiāo gěi jīnglǐ de",
       "traceKey": "jiaogei",
       "traceInfo": [
        {
         "c": "交",
         "py": "jiāo",
         "hv": "giao"
        },
        {
         "c": "给",
         "py": "gěi",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "💰🧮❓",
       "full": "这些钱是怎么算的",
       "vi": "Số tiền này được tính như thế nào",
       "parts": [
        {
         "t": "这些钱",
         "ico": "💰",
         "c": "s",
         "py": "zhèxiē qián",
         "hv": "giá ta tiền"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "怎么算的",
         "ico": "🧮",
         "c": "o",
         "py": "zěnme suàn de",
         "hv": "chẩm ma toán đích"
        }
       ],
       "traceWord": "算",
       "py": "Zhèxiē qián shì zěnme suàn de",
       "traceKey": "suan",
       "traceInfo": [
        {
         "c": "算",
         "py": "suàn",
         "hv": "toán"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你在这儿交朋友了吗？",
       "qvi": "Bạn đã kết bạn ở đây chưa?",
       "scene": "🧑👫",
       "ans": "我交了很多朋友",
       "opts": [
        {
         "txt": "我买了很多书",
         "ico": "📚",
         "py": "Wǒ mǎi le hěn duō shū"
        },
        {
         "txt": "我交了很多朋友",
         "ico": "👫",
         "py": "Wǒ jiāo le hěn duō péngyou"
        },
        {
         "txt": "我去了很多地方",
         "ico": "🗺️",
         "py": "Wǒ qù le hěn duō dìfang"
        }
       ],
       "qpy": "Nǐ zài zhèr jiāo péngyou le ma?"
      },
      {
       "q": "一加二等于几？",
       "qvi": "Một cộng hai bằng mấy?",
       "scene": "➕🔢",
       "ans": "一加二等于三",
       "opts": [
        {
         "txt": "一加二等于五",
         "ico": "5️⃣",
         "py": "Yī jiā èr děngyú wǔ"
        },
        {
         "txt": "一加二等于三",
         "ico": "3️⃣",
         "py": "Yī jiā èr děngyú sān"
        },
        {
         "txt": "一加二等于七",
         "ico": "7️⃣",
         "py": "Yī jiā èr děngyú qī"
        }
       ],
       "qpy": "Yī jiā èr děngyú jǐ?"
      },
      {
       "q": "一角等于多少分？",
       "qvi": "Một giác bằng bao nhiêu phân?",
       "scene": "🪙🔢",
       "ans": "一角等于十分",
       "opts": [
        {
         "txt": "一角等于一百分",
         "ico": "💯",
         "py": "Yī jiǎo děngyú yī bǎi fēn"
        },
        {
         "txt": "一角等于两分",
         "ico": "2️⃣",
         "py": "Yī jiǎo děngyú liǎng fēn"
        },
        {
         "txt": "一角等于十分",
         "ico": "🔟",
         "py": "Yī jiǎo děngyú shífēn"
        }
       ],
       "qpy": "Yī jiǎo děngyú duōshao fēn?"
      },
      {
       "q": "你的收入是多少？",
       "qvi": "Thu nhập của bạn là bao nhiêu?",
       "scene": "💼💰",
       "ans": "我的收入是一万块",
       "opts": [
        {
         "txt": "我的哥哥是医生",
         "ico": "👨‍⚕️",
         "py": "Wǒ de gēge shì yīshēng"
        },
        {
         "txt": "我的手机是新的",
         "ico": "📱",
         "py": "Wǒ de shǒujī shì xīn de"
        },
        {
         "txt": "我的收入是一万块",
         "ico": "💰",
         "py": "Wǒ de shōurù shì yī wàn kuài"
        }
       ],
       "qpy": "Nǐ de shōurù shì duōshao?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi nhân viên ngân hàng về thẻ của bạn",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn đến ngân hàng. Tự nói thành tiếng: <i>\"我的信用卡是昨天办的\"</i> và <i>\"钱是在银行取的\"</i> để cho nhân viên biết thẻ mới làm và tiền lấy ở đâu.",
       "<b>Bước 2:</b> Nhân viên hỏi về khoản tiền. Trả lời bằng cấu trúc nhấn mạnh: <i>\"这些钱是朋友借给我的\"</i>, <i>\"电脑是我省钱买的\"</i>. Nói lại 3 lần, mỗi lần đổi nguồn tiền hoặc món đồ.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp hỏi cách tính tiền: <i>\"这些钱是怎么算的\"</i>, rồi tự viết thêm 2 câu về món đồ bạn mua gần đây theo mẫu 是……的."
      ]
     }
    },
    {
     "id": "2.15B",
     "name": "Bài 2.15B: Đăng ký, nộp hồ sơ và làm thủ tục",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏰ 明天 + 就 + 🛠️ 办",
       "🧑 我 + ⏰ 昨天 + 才 + 📝 报名",
       "🌧️ 我到的时候 + 正好 + 🌧️ 下雨"
      ],
      "tip": "Ba phó từ ngữ khí: 就 (jiù, tựu) nghĩa là \"sớm, nhanh, ngay\"; 才 (cái, tài) nghĩa là \"muộn, mất nhiều thời gian mới\"; 正好 (zhènghǎo, chính hảo) nghĩa là \"vừa đúng lúc\". Cả ba đứng TRƯỚC động từ, sau chủ ngữ và từ chỉ thời gian.",
      "vn_tip": "Người Việt hay đặt 才 và 就 sau động từ (như 我报名才) hoặc nhầm hai từ vì cùng dịch là \"mới/thì\". Nhớ: 就 = sớm, thuận lợi; 才 = muộn, khó khăn; đều đứng trước động từ: 我昨天才报名."
     },
     "chunks": [
      {
       "scene": "🧑📅📝",
       "full": "我昨天才报名",
       "vi": "Hôm qua tôi mới đăng ký",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "昨天才",
         "ico": "📅",
         "c": "o",
         "py": "zuótiān cái",
         "hv": "tạc thiên tài"
        },
        {
         "t": "报名",
         "ico": "📝",
         "c": "v",
         "py": "bàomíng",
         "hv": "báo danh"
        }
       ],
       "traceWord": "报名",
       "py": "Wǒ zuótiān cái bàomíng",
       "traceKey": "baoming",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "名",
         "py": "míng",
         "hv": "danh"
        }
       ]
      },
      {
       "scene": "🧑🏖️💼",
       "full": "他放假就去打工",
       "vi": "Anh ấy vừa nghỉ là đi làm thêm ngay",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "放假就去",
         "ico": "🏖️",
         "c": "v",
         "py": "fàngjià jiù qù",
         "hv": "phóng giá tựu khứ"
        },
        {
         "t": "打工",
         "ico": "💼",
         "c": "o",
         "py": "dǎgōng",
         "hv": "đả công"
        }
       ],
       "traceWord": "打工",
       "py": "Tā fàngjià jiù qù dǎgōng",
       "traceKey": "dagong",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        }
       ]
      },
      {
       "scene": "🧑📅🛠️",
       "full": "我明天就办卡",
       "vi": "Ngày mai tôi sẽ đi làm thẻ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "明天就办",
         "ico": "🛠️",
         "c": "v",
         "py": "míngtiān jiù bàn",
         "hv": "minh thiên tựu biện"
        },
        {
         "t": "卡",
         "ico": "📌",
         "c": "o",
         "py": "kǎ",
         "hv": "_"
        }
       ],
       "traceWord": "卡",
       "py": "Wǒ míngtiān jiù bàn kǎ",
       "traceKey": "ka",
       "traceInfo": [
        {
         "c": "卡",
         "py": "kǎ",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "📋🧑✅",
       "full": "你的名字就在名单上",
       "vi": "Tên của bạn có ngay trong danh sách",
       "parts": [
        {
         "t": "你的名字",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ de míngzi",
         "hv": "nễ đích danh tự"
        },
        {
         "t": "就在",
         "ico": "⚡",
         "c": "v",
         "py": "jiù zài",
         "hv": "tựu tại"
        },
        {
         "t": "名单上",
         "ico": "📋",
         "c": "o",
         "py": "míngdān shàng",
         "hv": "danh đơn thượng"
        }
       ],
       "traceWord": "名单",
       "py": "Nǐ de míngzi jiù zài míngdān shàng",
       "traceKey": "mingdan",
       "traceInfo": [
        {
         "c": "名",
         "py": "míng",
         "hv": "danh"
        },
        {
         "c": "单",
         "py": "dān",
         "hv": "đơn"
        }
       ]
      },
      {
       "scene": "🧑🤔✅",
       "full": "我选了好久才选好",
       "vi": "Tôi chọn rất lâu mới chọn xong",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "选了好久",
         "ico": "🤔",
         "c": "v",
         "py": "xuǎn le hǎojiǔ",
         "hv": "tuyển liễu hảo cửu"
        },
        {
         "t": "才选好",
         "ico": "✅",
         "c": "o",
         "py": "cái xuǎn hǎo",
         "hv": "tài tuyển hảo"
        }
       ],
       "traceWord": "选",
       "py": "Wǒ xuǎn le hǎojiǔ cái xuǎn hǎo",
       "traceKey": "xuan",
       "traceInfo": [
        {
         "c": "选",
         "py": "xuǎn",
         "hv": "tuyển"
        }
       ]
      },
      {
       "scene": "🧑🕐🌧️",
       "full": "我到的时候正好下雨",
       "vi": "Lúc tôi đến thì vừa đúng lúc trời mưa",
       "parts": [
        {
         "t": "我到的时候",
         "ico": "🕐",
         "c": "s",
         "py": "wǒ dào de shíhou",
         "hv": "ngã đáo đích thời hậu"
        },
        {
         "t": "正好",
         "ico": "🎯",
         "c": "v",
         "py": "zhènghǎo",
         "hv": "chính hảo"
        },
        {
         "t": "下雨",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ",
         "hv": "hạ vũ"
        }
       ],
       "traceWord": "正好",
       "py": "Wǒ dào de shíhou zhènghǎo xià yǔ",
       "traceKey": "zhenghao",
       "traceInfo": [
        {
         "c": "正",
         "py": "zhèng",
         "hv": "chính"
        },
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        }
       ]
      },
      {
       "scene": "🧑📅🏢",
       "full": "我下个月就去公司实习",
       "vi": "Tháng sau tôi sẽ đi thực tập ở công ty ngay",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "下个月就去",
         "ico": "📅",
         "c": "v",
         "py": "xià gè yuè jiù qù",
         "hv": "hạ cá nguyệt tựu khứ"
        },
        {
         "t": "公司实习",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī shíxí",
         "hv": "công ti thực tập"
        }
       ],
       "traceWord": "实习",
       "py": "Wǒ xià gè yuè jiù qù gōngsī shíxí",
       "traceKey": "shixi",
       "traceInfo": [
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        },
        {
         "c": "习",
         "py": "xí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "💼📅✅",
       "full": "这个工作我三天才完成",
       "vi": "Công việc này tôi mất ba ngày mới hoàn thành",
       "parts": [
        {
         "t": "这个工作",
         "ico": "💼",
         "c": "s",
         "py": "zhè gè gōngzuò",
         "hv": "giá cá công tác"
        },
        {
         "t": "我三天才",
         "ico": "📅",
         "c": "o",
         "py": "wǒ sān tiān cái",
         "hv": "ngã tam thiên tài"
        },
        {
         "t": "完成",
         "ico": "✅",
         "c": "v",
         "py": "wánchéng",
         "hv": "hoàn thành"
        }
       ],
       "traceWord": "完成",
       "py": "Zhè gè gōngzuò wǒ sān tiān cái wánchéng",
       "traceKey": "wancheng",
       "traceInfo": [
        {
         "c": "完",
         "py": "wán",
         "hv": "hoàn"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "经理有什么要求？",
       "qvi": "Giám đốc có yêu cầu gì?",
       "scene": "👔📋",
       "ans": "经理要求我们九点到",
       "opts": [
        {
         "txt": "公司有两名经理",
         "ico": "👔",
         "py": "Gōngsī yǒu liǎng míng jīnglǐ"
        },
        {
         "txt": "经理要求我们九点到",
         "ico": "🕘",
         "py": "Jīnglǐ yāoqiú wǒmen jiǔ diǎn dào"
        },
        {
         "txt": "经理是昨天回来的",
         "ico": "🏠",
         "py": "Jīnglǐ shì zuótiān huílái de"
        }
       ],
       "qpy": "Jīnglǐ yǒu shénme yāoqiú?"
      },
      {
       "q": "经理接受你的请求了吗？",
       "qvi": "Giám đốc đã chấp nhận đề nghị của bạn chưa?",
       "scene": "👔🙏",
       "ans": "经理接受了我的请求",
       "opts": [
        {
         "txt": "经理去北京了",
         "ico": "🏙️",
         "py": "Jīnglǐ qù Běijīng le"
        },
        {
         "txt": "我求经理帮忙",
         "ico": "🙏",
         "py": "Wǒ qiú jīnglǐ bāngmáng"
        },
        {
         "txt": "经理接受了我的请求",
         "ico": "🤝",
         "py": "Jīnglǐ jiēshòu le wǒ de qǐngqiú"
        }
       ],
       "qpy": "Jīnglǐ jiēshòu nǐ de qǐngqiú le ma?"
      },
      {
       "q": "你们公司的名称是什么？",
       "qvi": "Tên công ty các bạn là gì?",
       "scene": "🏢🏷️",
       "ans": "我们公司的名称是东方公司",
       "opts": [
        {
         "txt": "我们公司的名称是东方公司",
         "ico": "🏢",
         "py": "Wǒmen gōngsī de míngchēng shì dōngfāng gōngsī"
        },
        {
         "txt": "我们公司在北京",
         "ico": "🏙️",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "我们公司有很多人",
         "ico": "👥",
         "py": "Wǒmen gōngsī yǒu hěn duō rén"
        }
       ],
       "qpy": "Nǐmen gōngsī de míngchēng shì shénme?"
      },
      {
       "q": "他在哪儿干活儿？",
       "qvi": "Anh ấy làm việc ở đâu?",
       "scene": "🧑🔨",
       "ans": "他在公司干活儿",
       "opts": [
        {
         "txt": "他在家睡觉",
         "ico": "😴",
         "py": "Tā zàijiā shuìjiào"
        },
        {
         "txt": "他在学校上课",
         "ico": "🏫",
         "py": "Tā zài xuéxiào shàngkè"
        },
        {
         "txt": "他在公司干活儿",
         "ico": "🏢",
         "py": "Tā zài gōngsī gànhuór"
        }
       ],
       "qpy": "Tā zài nǎr gànhuór?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đăng ký một khóa học hoặc vị trí thực tập",
      "steps": [
       "<b>Bước 1:</b> Gọi điện hoặc nhắn tin cho văn phòng để đăng ký. Tự nói thành tiếng: <i>\"我昨天才报名\"</i> và hỏi xem <i>\"我的名字就在名单上吗\"</i> theo cách của bạn.",
       "<b>Bước 2:</b> Kể kế hoạch với đồng nghiệp bằng 就 và 才: <i>\"我下个月就去公司实习\"</i>, <i>\"我选了好久才选好\"</i>. Tự đặt thêm 3 câu về lịch của bạn, nhớ 就 = sớm, 才 = muộn.",
       "<b>Bước 3:</b> Kể lại một lần bạn đến đúng lúc: <i>\"我到的时候正好下雨\"</i>. Rồi nói về công việc: <i>\"这个工作我三天才完成\"</i>, kèm thời gian hoàn thành thật của bạn."
      ]
     }
    },
    {
     "id": "2.15C",
     "name": "Bài 2.15C: Phục vụ khách hàng, yêu cầu và phản hồi",
     "grammar": {
      "formulas": [
       "🌧️ 因为 + 下雨 + ➡️ 所以 + 🧑 我不去",
       "🛎️ 因为 + 服务热情 + ➡️ 所以 + 😊 我满意",
       "❓ 为什么 + ➡️ 因为 + 🛎️ 服务态度不好"
      ],
      "tip": "Câu nhân quả 因为……所以…… (yīnwèi…suǒyǐ…, nhân vị…sở dĩ): 因为 đứng trước nguyên nhân, 所以 đứng trước kết quả. Trong tiếng Trung hai từ này thường dùng CÙNG LÚC trong một câu.",
      "vn_tip": "Tiếng Việt cũng nói \"vì…nên…\", nhưng người Việt hay bỏ 所以 hoặc dùng 因为 ở cả hai vế. Đúng là 因为 ở vế nguyên nhân, 所以 ở vế kết quả: 因为下雨所以我不去."
     },
     "chunks": [
      {
       "scene": "🧑🛡️😌",
       "full": "因为有我所以你放心",
       "vi": "Vì có tôi nên bạn cứ yên tâm",
       "parts": [
        {
         "t": "因为有我",
         "ico": "🧑",
         "c": "s",
         "py": "yīnwèi yǒu wǒ",
         "hv": "nhân vị hữu ngã"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "你放心",
         "ico": "😌",
         "c": "o",
         "py": "nǐ fàngxīn",
         "hv": "nễ phóng tâm"
        }
       ],
       "traceWord": "放心",
       "py": "Yīnwèi yǒu wǒ suǒyǐ nǐ fàngxīn",
       "traceKey": "fangxin",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "🌧️🚫🏠",
       "full": "因为下雨所以我不去",
       "vi": "Vì trời mưa nên tôi không đi",
       "parts": [
        {
         "t": "因为下雨",
         "ico": "🌧️",
         "c": "s",
         "py": "yīnwèi xià yǔ",
         "hv": "nhân vị hạ vũ"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "我不去",
         "ico": "🚫",
         "c": "o",
         "py": "wǒ bú qù",
         "hv": "ngã bất khứ"
        }
       ],
       "traceWord": "因为",
       "py": "Yīnwèi xià yǔ suǒyǐ wǒ bú qù",
       "traceKey": "yinwei",
       "traceInfo": [
        {
         "c": "因",
         "py": "yīn",
         "hv": "nhân"
        },
        {
         "c": "为",
         "py": "wèi",
         "hv": "vị"
        }
       ]
      },
      {
       "scene": "🧑🤝🙏",
       "full": "因为他帮助我所以谢谢他",
       "vi": "Vì anh ấy giúp tôi nên tôi cảm ơn anh ấy",
       "parts": [
        {
         "t": "因为他帮助我",
         "ico": "🤝",
         "c": "s",
         "py": "yīnwèi tā bāngzhù wǒ",
         "hv": "nhân vị tha bang trợ ngã"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "谢谢他",
         "ico": "🙏",
         "c": "o",
         "py": "xièxie tā",
         "hv": "tạ tạ tha"
        }
       ],
       "traceWord": "帮助",
       "py": "Yīnwèi tā bāngzhù wǒ suǒyǐ xièxie tā",
       "traceKey": "bangzhu",
       "traceInfo": [
        {
         "c": "帮",
         "py": "bāng",
         "hv": "bang"
        },
        {
         "c": "助",
         "py": "zhù",
         "hv": "trợ"
        }
       ]
      },
      {
       "scene": "🧑😊👫",
       "full": "因为他很友好所以朋友多",
       "vi": "Vì anh ấy rất thân thiện nên có nhiều bạn",
       "parts": [
        {
         "t": "因为他很友好",
         "ico": "😊",
         "c": "s",
         "py": "yīnwèi tā hěn yǒuhǎo",
         "hv": "nhân vị tha ngận hữu hảo"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "朋友多",
         "ico": "👫",
         "c": "o",
         "py": "péngyou duō",
         "hv": "bằng hữu đa"
        }
       ],
       "traceWord": "友好",
       "py": "Yīnwèi tā hěn yǒuhǎo suǒyǐ péngyou duō",
       "traceKey": "youhao",
       "traceInfo": [
        {
         "c": "友",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        }
       ]
      },
      {
       "scene": "🛎️😠👎",
       "full": "因为态度不好所以他不满",
       "vi": "Vì thái độ không tốt nên anh ấy bất mãn",
       "parts": [
        {
         "t": "因为态度不好",
         "ico": "👎",
         "c": "s",
         "py": "yīnwèi tàidù bù hǎo",
         "hv": "nhân vị thái độ bất hảo"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "他不满",
         "ico": "😠",
         "c": "o",
         "py": "tā bùmǎn",
         "hv": "tha bất mãn"
        }
       ],
       "traceWord": "态度",
       "py": "Yīnwèi tàidù bù hǎo suǒyǐ tā bùmǎn",
       "traceKey": "taidu",
       "traceInfo": [
        {
         "c": "态",
         "py": "tài",
         "hv": "thái"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "🛎️🤗😀",
       "full": "因为服务热情所以我满意",
       "vi": "Vì phục vụ nhiệt tình nên tôi hài lòng",
       "parts": [
        {
         "t": "因为服务热情",
         "ico": "🛎️",
         "c": "s",
         "py": "yīnwèi fúwù rèqíng",
         "hv": "nhân vị phục vụ nhiệt tình"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "我满意",
         "ico": "😀",
         "c": "o",
         "py": "wǒ mǎnyì",
         "hv": "ngã mãn ý"
        }
       ],
       "traceWord": "服务",
       "py": "Yīnwèi fúwù rèqíng suǒyǐ wǒ mǎnyì",
       "traceKey": "fuwu",
       "traceInfo": [
        {
         "c": "服",
         "py": "fú",
         "hv": "phục"
        },
        {
         "c": "务",
         "py": "wù",
         "hv": "vụ"
        }
       ]
      },
      {
       "scene": "🎁🧑😄",
       "full": "因为你带来礼物所以我高兴",
       "vi": "Vì bạn mang quà đến nên tôi vui",
       "parts": [
        {
         "t": "因为你带来礼物",
         "ico": "🎁",
         "c": "s",
         "py": "yīnwèi nǐ dàilái lǐwù",
         "hv": "nhân vị nễ đới lai lễ vật"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "我高兴",
         "ico": "😄",
         "c": "o",
         "py": "wǒ gāoxìng",
         "hv": "ngã cao hứng"
        }
       ],
       "traceWord": "带来",
       "py": "Yīnwèi nǐ dàilái lǐwù suǒyǐ wǒ gāoxìng",
       "traceKey": "dailai",
       "traceInfo": [
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "👥⚖️😊",
       "full": "因为大家平等所以很公平",
       "vi": "Vì mọi người bình đẳng nên rất công bằng",
       "parts": [
        {
         "t": "因为大家平等",
         "ico": "👥",
         "c": "s",
         "py": "yīnwèi dàjiā píngděng",
         "hv": "nhân vị đại gia bình đẳng"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "很公平",
         "ico": "⚖️",
         "c": "o",
         "py": "hěn gōngpíng",
         "hv": "ngận công bình"
        }
       ],
       "traceWord": "平等",
       "py": "Yīnwèi dàjiā píngděng suǒyǐ hěn gōngpíng",
       "traceKey": "pingdeng",
       "traceInfo": [
        {
         "c": "平",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "等",
         "py": "děng",
         "hv": "đẳng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们为客人做什么？",
       "qvi": "Các bạn làm gì cho khách?",
       "scene": "🛎️🧑",
       "ans": "我们为客人服务",
       "opts": [
        {
         "txt": "我们为客人服务",
         "ico": "🛎️",
         "py": "Wǒmen wèi kèrén fúwù"
        },
        {
         "txt": "我们去客人的学校学习",
         "ico": "🏫",
         "py": "Wǒmen qù kèrén de xuéxiào xuéxí"
        },
        {
         "txt": "我们在家看电视",
         "ico": "📺",
         "py": "Wǒmen zàijiā kàn diànshì"
        }
       ],
       "qpy": "Nǐmen wèi kèrén zuò shénme?"
      },
      {
       "q": "明天的考试几点进行？",
       "qvi": "Kỳ thi ngày mai tiến hành lúc mấy giờ?",
       "scene": "📝🕘",
       "ans": "考试九点进行",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "考试九点进行",
         "ico": "🕘",
         "py": "Kǎoshì jiǔ diǎn jìnxíng"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Míngtiān de kǎoshì jǐ diǎn jìnxíng?"
      },
      {
       "q": "他的行为怎么样？",
       "qvi": "Hành vi của anh ấy thế nào?",
       "scene": "🧑👍",
       "ans": "他的行为很好",
       "opts": [
        {
         "txt": "他的头发很长",
         "ico": "💇",
         "py": "Tā de tóufa hěn cháng"
        },
        {
         "txt": "他的行为很好",
         "ico": "👍",
         "py": "Tā de xíngwéi hěn hǎo"
        },
        {
         "txt": "他的手机很大",
         "ico": "📱",
         "py": "Tā de shǒujī hěn dà"
        }
       ],
       "qpy": "Tā de xíngwéi zěnmeyàng?"
      },
      {
       "q": "为什么客人不满意？",
       "qvi": "Tại sao khách không hài lòng?",
       "scene": "😠🛎️",
       "ans": "因为服务态度不好",
       "opts": [
        {
         "txt": "因为他很高",
         "ico": "📏",
         "py": "Yīnwèi tā hěn gāo"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为服务态度不好",
         "ico": "👎",
         "py": "Yīnwèi fúwù tàidù bù hǎo"
        }
       ],
       "qpy": "Wèi shénme kèrén bù mǎnyì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phản hồi về dịch vụ với quản lý nhà hàng",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn gặp quản lý sau bữa ăn. Khen ngợi bằng cấu trúc nhân quả: <i>\"因为服务热情所以我满意\"</i>. Tự nói 3 câu khen khác nhau.",
       "<b>Bước 2:</b> Góp ý nhẹ nhàng: <i>\"因为态度不好所以他不满\"</i>, rồi hỏi <i>\"为什么客人不满意\"</i> để quản lý giải thích. Luyện giọng điệu lịch sự.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp kể về trải nghiệm bằng 因为……所以……, ví dụ <i>\"因为有我所以你放心\"</i> khi bạn nhận hỗ trợ khách; viết ít nhất 3 câu."
      ]
     }
    }
   ]
  },
  "2.16": {
   "lessons": [
    {
     "id": "2.16A",
     "name": "Bài 2.16A: Học tập, ôn luyện và nghe giảng",
     "grammar": {
      "formulas": [
       "😓 虽然 + 累 + ➡️ 但是 + 很高兴",
       "🙂 这个很好 + ➡️ 不过 + 不便宜",
       "💭 我很想去 + ➡️ 可是 + 没有时间"
      ],
      "tip": "Mẫu 虽然……，但是/可是……: \"tuy… nhưng…\". 虽然 (suīrán, tuy nhiên) đứng ở vế trước, 但是 (dànshì, đãn thị) hoặc 可是 (kěshì) mở vế sau. 不过 (bùguò, bất quá) nhẹ hơn, dùng ở vế sau: \"…, nhưng mà…\".",
      "vn_tip": "Tiếng Việt có thể nói \"Tuy… nhưng…\" đủ hai vế, tiếng Trung cũng vậy, nhưng người Việt hay bỏ 但是/可是 ở vế sau. Hãy nhớ luôn có 但是/可是 ở vế sau; 不过 chỉ đứng ở vế sau, không đứng đầu câu cùng 虽然 như một vế riêng."
     },
     "chunks": [
      {
       "scene": "🧑🧠📝",
       "full": "我懂这道题",
       "vi": "Tôi hiểu câu hỏi này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "懂",
         "ico": "🧠",
         "c": "v",
         "py": "dǒng",
         "hv": "đổng"
        },
        {
         "t": "这道题",
         "ico": "📝",
         "c": "o",
         "py": "zhè dào tí",
         "hv": "giá đạo đề"
        }
       ],
       "traceWord": "懂",
       "py": "Wǒ dǒng zhè dào tí",
       "traceKey": "dong",
       "traceInfo": [
        {
         "c": "懂",
         "py": "dǒng",
         "hv": "đổng"
        }
       ]
      },
      {
       "scene": "👩‍🏫🔁🗣️",
       "full": "老师请重复一遍",
       "vi": "Thầy cô xin hãy nhắc lại một lần",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "请重复",
         "ico": "🔁",
         "c": "v",
         "py": "qǐng chóngfù",
         "hv": "thỉnh trùng phục"
        },
        {
         "t": "一遍",
         "ico": "1️⃣",
         "c": "o",
         "py": "yī biàn",
         "hv": "nhất biến"
        }
       ],
       "traceWord": "重复",
       "py": "Lǎoshī qǐng chóngfù yī biàn",
       "traceKey": "chongfu",
       "traceInfo": [
        {
         "c": "重",
         "py": "chóng",
         "hv": "trùng"
        },
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "👥📖🔁",
       "full": "我们再复习一遍",
       "vi": "Chúng ta ôn lại một lần nữa",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "再复习",
         "ico": "📖",
         "c": "v",
         "py": "zài fùxí",
         "hv": "tái phục tập"
        },
        {
         "t": "一遍",
         "ico": "1️⃣",
         "c": "o",
         "py": "yī biàn",
         "hv": "nhất biến"
        }
       ],
       "traceWord": "复习",
       "py": "Wǒmen zài fùxí yī biàn",
       "traceKey": "fuxi",
       "traceInfo": [
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        },
        {
         "c": "习",
         "py": "xí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "🎓👂✍️",
       "full": "学生要认真听讲",
       "vi": "Học sinh phải chăm chú nghe giảng",
       "parts": [
        {
         "t": "学生",
         "ico": "🎓",
         "c": "s",
         "py": "xuéshēng",
         "hv": "học sinh"
        },
        {
         "t": "要",
         "ico": "❗",
         "c": "v",
         "py": "yào",
         "hv": "yếu"
        },
        {
         "t": "认真听讲",
         "ico": "👂",
         "c": "o",
         "py": "rènzhēn tīngjiǎng",
         "hv": "nhận chân thính giảng"
        }
       ],
       "traceWord": "听讲",
       "py": "Xuéshēng yào rènzhēn tīngjiǎng",
       "traceKey": "tingjiang",
       "traceInfo": [
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        },
        {
         "c": "讲",
         "py": "jiǎng",
         "hv": "giảng"
        }
       ]
      },
      {
       "scene": "🧑✅💬",
       "full": "小王的回答很正确",
       "vi": "Câu trả lời của Tiểu Vương rất chính xác",
       "parts": [
        {
         "t": "小王的回答",
         "ico": "💬",
         "c": "s",
         "py": "Xiǎowáng de huídá",
         "hv": "tiểu vương đích hồi đáp"
        },
        {
         "t": "很",
         "ico": "⭐",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "正确",
         "ico": "✅",
         "c": "o",
         "py": "zhèngquè",
         "hv": "chính xác"
        }
       ],
       "traceWord": "正确",
       "py": "Xiǎowáng de huídá hěn zhèngquè",
       "traceKey": "zhengque",
       "traceInfo": [
        {
         "c": "正",
         "py": "zhèng",
         "hv": "chính"
        },
        {
         "c": "确",
         "py": "què",
         "hv": "xác"
        }
       ]
      },
      {
       "scene": "🛍️👍💰",
       "full": "这个很好不过不便宜",
       "vi": "Cái này rất tốt, có điều không rẻ",
       "parts": [
        {
         "t": "这个很好",
         "ico": "👍",
         "c": "s",
         "py": "zhè gè hěn hǎo",
         "hv": "giá cá ngận hảo"
        },
        {
         "t": "不过",
         "ico": "↪️",
         "c": "v",
         "py": "bùguò",
         "hv": "bất quá"
        },
        {
         "t": "不便宜",
         "ico": "💰",
         "c": "o",
         "py": "bù piányi",
         "hv": "bất tiện nghi"
        }
       ],
       "traceWord": "不过",
       "py": "Zhè gè hěn hǎo bùguò bù piányi",
       "traceKey": "buguo",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        }
       ]
      },
      {
       "scene": "😓➡️😄",
       "full": "虽然累但是很高兴",
       "vi": "Tuy mệt nhưng rất vui",
       "parts": [
        {
         "t": "虽然累",
         "ico": "😓",
         "c": "s",
         "py": "suīrán lèi",
         "hv": "tuy nhiên lụy"
        },
        {
         "t": "但是",
         "ico": "↪️",
         "c": "v",
         "py": "dànshì",
         "hv": "đãn thị"
        },
        {
         "t": "很高兴",
         "ico": "😄",
         "c": "o",
         "py": "hěn gāoxìng",
         "hv": "ngận cao hứng"
        }
       ],
       "traceWord": "虽然",
       "py": "Suīrán lèi dànshì hěn gāoxìng",
       "traceKey": "suiran",
       "traceInfo": [
        {
         "c": "虽",
         "py": "suī",
         "hv": "tuy"
        },
        {
         "c": "然",
         "py": "rán",
         "hv": "nhiên"
        }
       ]
      },
      {
       "scene": "🧑✈️⏰",
       "full": "我很想去可是没有时间",
       "vi": "Tôi rất muốn đi nhưng không có thời gian",
       "parts": [
        {
         "t": "我很想去",
         "ico": "✈️",
         "c": "s",
         "py": "wǒ hěn xiǎng qù",
         "hv": "ngã ngận tưởng khứ"
        },
        {
         "t": "可是",
         "ico": "↪️",
         "c": "v",
         "py": "kěshì",
         "hv": "khả thị"
        },
        {
         "t": "没有时间",
         "ico": "⏰",
         "c": "o",
         "py": "méiyǒu shíjiān",
         "hv": "một hữu thời gian"
        }
       ],
       "traceWord": "可是",
       "py": "Wǒ hěn xiǎng qù kěshì méiyǒu shíjiān",
       "traceKey": "keshi",
       "traceInfo": [
        {
         "c": "可",
         "py": "kě",
         "hv": "khả"
        },
        {
         "c": "是",
         "py": "shì",
         "hv": "thị"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你懂这个道理吗？",
       "qvi": "Bạn hiểu đạo lý này không?",
       "scene": "🧠💡",
       "ans": "我懂得这个道理",
       "opts": [
        {
         "txt": "我在公司工作",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī gōngzuò"
        },
        {
         "txt": "我懂得这个道理",
         "ico": "💡",
         "py": "Wǒ dǒngde zhè gè dàolǐ"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ dǒng zhè gè dàolǐ ma?"
      },
      {
       "q": "他说得准确吗？",
       "qvi": "Anh ấy nói có chính xác không?",
       "scene": "🗣️🎯",
       "ans": "他说得很准确",
       "opts": [
        {
         "txt": "他说得很准确",
         "ico": "🎯",
         "py": "Tā shuō de hěn zhǔnquè"
        },
        {
         "txt": "他在图书馆",
         "ico": "📚",
         "py": "Tā zài túshūguǎn"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Tā shuō de zhǔnquè ma?"
      },
      {
       "q": "你们公司重视什么？",
       "qvi": "Công ty các bạn coi trọng điều gì?",
       "scene": "🏢📖",
       "ans": "我们公司重视学习",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "📍",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "我们公司重视学习",
         "ico": "📖",
         "py": "Wǒmen gōngsī zhòngshì xuéxí"
        },
        {
         "txt": "我们公司有五个人",
         "ico": "👥",
         "py": "Wǒmen gōngsī yǒu wǔ gè rén"
        }
       ],
       "qpy": "Nǐmen gōngsī zhòngshì shénme?"
      },
      {
       "q": "你对考试有信心吗？",
       "qvi": "Bạn có tự tin về kỳ thi không?",
       "scene": "📝💪",
       "ans": "虽然很难但我有信心",
       "opts": [
        {
         "txt": "我明天去上班",
         "ico": "🚌",
         "py": "Wǒ míngtiān qù shàngbān"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "虽然很难但我有信心",
         "ico": "💪",
         "py": "Suīrán hěn nán dàn wǒ yǒu xìnxīn"
        }
       ],
       "qpy": "Nǐ duì kǎoshì yǒu xìnxīn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Ôn bài cùng đồng nghiệp trước kỳ thi",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp cùng học tiếng Trung, rủ ôn bài: <i>\"我们再复习一遍\"</i>. Nói thành tiếng 3 lần.",
       "<b>Bước 2:</b> Giả vờ bạn chưa hiểu một bài, nhờ người kia nhắc lại: <i>\"请重复一遍\"</i>, rồi nói: <i>\"我懂这道题\"</i> khi đã hiểu.",
       "<b>Bước 3:</b> Tự nói về cảm giác của mình bằng mẫu tuy… nhưng…: <i>\"虽然累但是很高兴\"</i> và <i>\"我很想去可是没有时间\"</i>."
      ]
     }
    },
    {
     "id": "2.16B",
     "name": "Bài 2.16B: Kế hoạch, mục tiêu và điều kiện",
     "grammar": {
      "formulas": [
       "🌧️ 如果 + 下雨 + ➡️ 就 + 不去",
       "💡 有条件 + 的话 + ➡️ 就 + 一定去"
      ],
      "tip": "Mẫu giả thiết: 如果……，就…… (rúguǒ… jiù…, như quả… thì…) hoặc ……的话，就…… (de huà, đích thoại). Vế đầu nêu điều kiện, vế sau dùng 就 (jiù, tựu) để nêu kết quả. 如果 và 的话 có thể dùng cùng nhau hoặc chỉ dùng một trong hai.",
      "vn_tip": "Người Việt hay quên 就 ở vế sau vì tiếng Việt chỉ cần \"nếu… thì…\" và có thể bỏ \"thì\". Trong tiếng Trung nên có 就 để câu tự nhiên. Vị trí đúng: 就 đứng ngay trước động từ của vế sau, ví dụ 如果下雨就不去, không nói 就如果下雨."
     },
     "chunks": [
      {
       "scene": "🌧️➡️🏠",
       "full": "如果下雨就不去",
       "vi": "Nếu trời mưa thì không đi",
       "parts": [
        {
         "t": "如果下雨",
         "ico": "🌧️",
         "c": "s",
         "py": "rúguǒ xià yǔ",
         "hv": "như quả hạ vũ"
        },
        {
         "t": "就",
         "ico": "➡️",
         "c": "v",
         "py": "jiù",
         "hv": "tựu"
        },
        {
         "t": "不去",
         "ico": "🚫",
         "c": "o",
         "py": "bú qù",
         "hv": "bất khứ"
        }
       ],
       "traceWord": "如果",
       "py": "Rúguǒ xià yǔ jiù bú qù",
       "traceKey": "ruguo",
       "traceInfo": [
        {
         "c": "如",
         "py": "rú",
         "hv": "như"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      },
      {
       "scene": "🧑✈️📅",
       "full": "我打算明年出国",
       "vi": "Tôi định sang năm đi nước ngoài",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "打算",
         "ico": "💭",
         "c": "v",
         "py": "dǎsuàn",
         "hv": "đả toán"
        },
        {
         "t": "明年出国",
         "ico": "✈️",
         "c": "o",
         "py": "míngnián chūguó",
         "hv": "minh niên xuất quốc"
        }
       ],
       "traceWord": "打算",
       "py": "Wǒ dǎsuàn míngnián chūguó",
       "traceKey": "dasuan",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "算",
         "py": "suàn",
         "hv": "toán"
        }
       ]
      },
      {
       "scene": "🧑💡👍",
       "full": "我有一个好办法",
       "vi": "Tôi có một cách hay",
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
         "t": "一个好办法",
         "ico": "💡",
         "c": "o",
         "py": "yī gè hǎo bànfǎ",
         "hv": "nhất cá hảo biện pháp"
        }
       ],
       "traceWord": "办法",
       "py": "Wǒ yǒu yī gè hǎo bànfǎ",
       "traceKey": "banfa",
       "traceInfo": [
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "🌙😴⚠️",
       "full": "睡太晚有坏处",
       "vi": "Ngủ quá muộn có hại",
       "parts": [
        {
         "t": "睡太晚",
         "ico": "🌙",
         "c": "s",
         "py": "shuì tài wǎn",
         "hv": "thụy thái vãn"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "坏处",
         "ico": "⚠️",
         "c": "o",
         "py": "huàichù",
         "hv": "hoại xứ"
        }
       ],
       "traceWord": "坏处",
       "py": "Shuì tài wǎn yǒu huàichù",
       "traceKey": "huaichu",
       "traceInfo": [
        {
         "c": "坏",
         "py": "huài",
         "hv": "hoại"
        },
        {
         "c": "处",
         "py": "chù",
         "hv": "xứ"
        }
       ]
      },
      {
       "scene": "🧑🌟👨‍⚕️",
       "full": "他的理想是当医生",
       "vi": "Ước mơ của anh ấy là làm bác sĩ",
       "parts": [
        {
         "t": "他的理想",
         "ico": "🌟",
         "c": "s",
         "py": "tā de lǐxiǎng",
         "hv": "tha đích lý tưởng"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "当医生",
         "ico": "👨‍⚕️",
         "c": "o",
         "py": "dāng yīshēng",
         "hv": "đương y sinh"
        }
       ],
       "traceWord": "理想",
       "py": "Tā de lǐxiǎng shì dāng yīshēng",
       "traceKey": "lixiang",
       "traceInfo": [
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        },
        {
         "c": "想",
         "py": "xiǎng",
         "hv": "tưởng"
        }
       ]
      },
      {
       "scene": "📋🧑✅",
       "full": "他的计划很实际",
       "vi": "Kế hoạch của anh ấy rất thực tế",
       "parts": [
        {
         "t": "他的计划",
         "ico": "📋",
         "c": "s",
         "py": "tā de jìhuà",
         "hv": "tha đích kế hoạch"
        },
        {
         "t": "很",
         "ico": "⭐",
         "c": "v",
         "py": "hěn",
         "hv": "ngận"
        },
        {
         "t": "实际",
         "ico": "✅",
         "c": "o",
         "py": "shíjì",
         "hv": "thực tế"
        }
       ],
       "traceWord": "计划",
       "py": "Tā de jìhuà hěn shíjì",
       "traceKey": "jihua",
       "traceInfo": [
        {
         "c": "计",
         "py": "jì",
         "hv": "kế"
        },
        {
         "c": "划",
         "py": "huà",
         "hv": "hoạch"
        }
       ]
      },
      {
       "scene": "💪➡️👔",
       "full": "只要努力就能成为经理",
       "vi": "Chỉ cần cố gắng thì có thể trở thành giám đốc",
       "parts": [
        {
         "t": "只要努力",
         "ico": "💪",
         "c": "s",
         "py": "zhǐyào nǔlì",
         "hv": "chỉ yếu nỗ lực"
        },
        {
         "t": "就能成为",
         "ico": "➡️",
         "c": "v",
         "py": "jiù néng chéngwéi",
         "hv": "tựu năng thành vi"
        },
        {
         "t": "经理",
         "ico": "👔",
         "c": "o",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        }
       ],
       "traceWord": "成为",
       "py": "Zhǐyào nǔlì jiù néng chéngwéi jīnglǐ",
       "traceKey": "chengwei",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "为",
         "py": "wéi",
         "hv": "vi"
        }
       ]
      },
      {
       "scene": "📝➡️✈️",
       "full": "有条件的话就一定去",
       "vi": "Nếu có điều kiện thì nhất định sẽ đi",
       "parts": [
        {
         "t": "有条件的话",
         "ico": "📝",
         "c": "s",
         "py": "yǒu tiáojiàn dehuà",
         "hv": "hữu điều kiện đích thoại"
        },
        {
         "t": "就",
         "ico": "➡️",
         "c": "v",
         "py": "jiù",
         "hv": "tựu"
        },
        {
         "t": "一定去",
         "ico": "✈️",
         "c": "o",
         "py": "yīdìng qù",
         "hv": "nhất định khứ"
        }
       ],
       "traceWord": "条件",
       "py": "Yǒu tiáojiàn dehuà jiù yīdìng qù",
       "traceKey": "tiaojian",
       "traceInfo": [
        {
         "c": "条",
         "py": "tiáo",
         "hv": "điều"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你学汉语的目的是什么？",
       "qvi": "Mục đích học tiếng Trung của bạn là gì?",
       "scene": "🎯📖",
       "ans": "我的目的是找工作",
       "opts": [
        {
         "txt": "我喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ xǐhuan chī miànbāo"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        },
        {
         "txt": "我的目的是找工作",
         "ico": "💼",
         "py": "Wǒ de mùdì shì zhǎo gōngzuò"
        }
       ],
       "qpy": "Nǐ xué Hànyǔ de mùdì shì shénme?"
      },
      {
       "q": "这个方法好吗？",
       "qvi": "Phương pháp này tốt không?",
       "scene": "💡🤔",
       "ans": "不一定好那我们再想想",
       "opts": [
        {
         "txt": "不一定好那我们再想想",
         "ico": "🤔",
         "py": "Bùyīdìng hǎo nà wǒmen zài xiǎng xiǎng"
        },
        {
         "txt": "我们在地铁站见",
         "ico": "🚇",
         "py": "Wǒmen zài dìtiězhàn jiàn"
        },
        {
         "txt": "我今天很累",
         "ico": "😓",
         "py": "Wǒ jīntiān hěn lèi"
        }
       ],
       "qpy": "Zhè gè fāngfǎ hǎo ma?"
      },
      {
       "q": "你的理想能实现吗？",
       "qvi": "Ước mơ của bạn có thể thành hiện thực không?",
       "scene": "🌟✅",
       "ans": "努力的话就能实现",
       "opts": [
        {
         "txt": "他在公司上班",
         "ico": "🏢",
         "py": "Tā zài gōngsī shàngbān"
        },
        {
         "txt": "这是我的手机",
         "ico": "📱",
         "py": "Zhè shì wǒ de shǒujī"
        },
        {
         "txt": "努力的话就能实现",
         "ico": "🌟",
         "py": "Nǔlì dehuà jiù néng shíxiàn"
        }
       ],
       "qpy": "Nǐ de lǐxiǎng néng shíxiàn ma?"
      },
      {
       "q": "运动有什么好处？",
       "qvi": "Vận động có lợi ích gì?",
       "scene": "🏃💪",
       "ans": "身体会更健康",
       "opts": [
        {
         "txt": "我们在学校",
         "ico": "🏫",
         "py": "Wǒmen zài xuéxiào"
        },
        {
         "txt": "身体会更健康",
         "ico": "💪",
         "py": "Shēntǐ huì gèng jiànkāng"
        },
        {
         "txt": "我想买茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng mǎi chá"
        }
       ],
       "qpy": "Yùndòng yǒu shénme hǎochù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói về kế hoạch năm tới với sếp",
      "steps": [
       "<b>Bước 1:</b> Chuẩn bị 3 câu nói về mục tiêu của mình bằng tiếng Trung, ví dụ <i>\"我打算明年出国\"</i> và <i>\"他的理想是当医生\"</i> (đổi thành ước mơ của bạn).",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp hẹn đi chơi hoặc đi họp theo điều kiện: <i>\"如果下雨就不去\"</i>, <i>\"有条件的话就一定去\"</i>.",
       "<b>Bước 3:</b> Nói thành tiếng với sếp (hoặc tự nói) về kế hoạch học tập: <i>\"只要努力就能成为经理\"</i>, rồi nói thêm một câu <i>\"我有一个好办法\"</i> về cách thực hiện."
      ]
     }
    },
    {
     "id": "2.16C",
     "name": "Bài 2.16C: Kết quả, tác dụng và sự tiến bộ",
     "grammar": {
      "formulas": [
       "⭐ 这个 + 不但便宜 + ➕ 而且好吃",
       "💪 他 + 不但努力 + ➕ 而且做到了"
      ],
      "tip": "Mẫu tăng tiến 不但……，而且……: \"không những… mà còn…\". 不但 (bùdàn, bất đãn) đứng ở vế đầu, 而且 (érqiě, nhi thả) mở vế sau, mức độ vế sau nặng hơn. Nếu hai vế cùng chủ ngữ, 不但 đứng sau chủ ngữ.",
      "vn_tip": "Người Việt hay đặt 不但 trước chủ ngữ khi hai vế cùng một người, hoặc bỏ 而且 ở vế sau. Cách đúng: 他不但努力而且认真 (chủ ngữ rồi mới 不但). Chỉ khi hai vế khác chủ ngữ mới viết 不但 ở đầu câu."
     },
     "chunks": [
      {
       "scene": "📌✅🎉",
       "full": "这件事成了",
       "vi": "Việc này thành công rồi",
       "parts": [
        {
         "t": "这件事",
         "ico": "📌",
         "c": "s",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        },
        {
         "t": "成",
         "ico": "✅",
         "c": "v",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "t": "了",
         "ico": "🎉",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "成",
       "py": "Zhè jiàn shì chéng le",
       "traceKey": "cheng",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "🧑🥇🏆",
       "full": "他得了第一名",
       "vi": "Anh ấy được hạng nhất",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "得",
         "ico": "🤲",
         "c": "v",
         "py": "dé",
         "hv": "đắc"
        },
        {
         "t": "了第一名",
         "ico": "🥇",
         "c": "o",
         "py": "le dì yī míng",
         "hv": "liễu đệ nhất danh"
        }
       ],
       "traceWord": "得",
       "py": "Tā dé le dì yī míng",
       "traceKey": "de",
       "traceInfo": [
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "☀️➡️☁️",
       "full": "天气变成阴天了",
       "vi": "Thời tiết chuyển thành trời âm u rồi",
       "parts": [
        {
         "t": "天气",
         "ico": "🌤️",
         "c": "s",
         "py": "tiānqì",
         "hv": "thiên khí"
        },
        {
         "t": "变成",
         "ico": "🔄",
         "c": "v",
         "py": "biànchéng",
         "hv": "biến thành"
        },
        {
         "t": "阴天了",
         "ico": "☁️",
         "c": "o",
         "py": "yīntiān le",
         "hv": "âm thiên liễu"
        }
       ],
       "traceWord": "变成",
       "py": "Tiānqì biànchéng yīntiān le",
       "traceKey": "biancheng",
       "traceInfo": [
        {
         "c": "变",
         "py": "biàn",
         "hv": "biến"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "🚉👥👀",
       "full": "车站出现了很多人",
       "vi": "Ở nhà ga xuất hiện rất nhiều người",
       "parts": [
        {
         "t": "车站",
         "ico": "🚉",
         "c": "s",
         "py": "chēzhàn",
         "hv": "xa trạm"
        },
        {
         "t": "出现",
         "ico": "👀",
         "c": "v",
         "py": "chūxiàn",
         "hv": "xuất hiện"
        },
        {
         "t": "了很多人",
         "ico": "👥",
         "c": "o",
         "py": "le hěn duō rén",
         "hv": "liễu ngận đa nhân"
        }
       ],
       "traceWord": "出现",
       "py": "Chēzhàn chūxiàn le hěn duō rén",
       "traceKey": "chuxian",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        }
       ]
      },
      {
       "scene": "👥📊✅",
       "full": "我们得出了结果",
       "vi": "Chúng tôi đã có kết quả",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "得出",
         "ico": "📊",
         "c": "v",
         "py": "déchū",
         "hv": "đắc xuất"
        },
        {
         "t": "了结果",
         "ico": "✅",
         "c": "o",
         "py": "le jiéguǒ",
         "hv": "liễu kết quả"
        }
       ],
       "traceWord": "结果",
       "py": "Wǒmen déchū le jiéguǒ",
       "traceKey": "jieguo",
       "traceInfo": [
        {
         "c": "结",
         "py": "jié",
         "hv": "kết"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      },
      {
       "scene": "🧑👩‍🏫💫",
       "full": "他受到老师的影响",
       "vi": "Anh ấy chịu ảnh hưởng của thầy cô",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "受到",
         "ico": "📥",
         "c": "v",
         "py": "shòudào",
         "hv": "thụ đáo"
        },
        {
         "t": "老师的影响",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "lǎoshī de yǐngxiǎng",
         "hv": "lão sư đích ảnh hưởng"
        }
       ],
       "traceWord": "影响",
       "py": "Tā shòudào lǎoshī de yǐngxiǎng",
       "traceKey": "yingxiang",
       "traceInfo": [
        {
         "c": "影",
         "py": "yǐng",
         "hv": "ảnh"
        },
        {
         "c": "响",
         "py": "xiǎng",
         "hv": "hưởng"
        }
       ]
      },
      {
       "scene": "🍜💰😋",
       "full": "这个不但便宜而且好吃",
       "vi": "Món này không những rẻ mà còn ngon",
       "parts": [
        {
         "t": "这个",
         "ico": "🍜",
         "c": "s",
         "py": "zhè gè",
         "hv": "giá cá"
        },
        {
         "t": "不但便宜",
         "ico": "💰",
         "c": "v",
         "py": "bùdàn piányi",
         "hv": "bất đãn tiện nghi"
        },
        {
         "t": "而且好吃",
         "ico": "😋",
         "c": "o",
         "py": "érqiě hǎochī",
         "hv": "nhi thả hảo cật"
        }
       ],
       "traceWord": "不但",
       "py": "Zhè gè bùdàn piányi érqiě hǎochī",
       "traceKey": "budan",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "但",
         "py": "dàn",
         "hv": "đãn"
        }
       ]
      },
      {
       "scene": "🧑💪🎯",
       "full": "他不但努力而且做到了",
       "vi": "Anh ấy không những cố gắng mà còn làm được",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不但努力",
         "ico": "💪",
         "c": "v",
         "py": "bùdàn nǔlì",
         "hv": "bất đãn nỗ lực"
        },
        {
         "t": "而且做到了",
         "ico": "🎯",
         "c": "o",
         "py": "érqiě zuòdào le",
         "hv": "nhi thả tố đáo liễu"
        }
       ],
       "traceWord": "做到",
       "py": "Tā bùdàn nǔlì érqiě zuòdào le",
       "traceKey": "zuodao",
       "traceInfo": [
        {
         "c": "做",
         "py": "zuò",
         "hv": "tố"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的工作顺利吗？",
       "qvi": "Công việc của bạn thuận lợi không?",
       "scene": "💼👍",
       "ans": "很顺利我很高兴",
       "opts": [
        {
         "txt": "我们在公司",
         "ico": "🏢",
         "py": "Wǒmen zài gōngsī"
        },
        {
         "txt": "很顺利我很高兴",
         "ico": "😄",
         "py": "Hěn shùnlì wǒ hěn gāoxìng"
        },
        {
         "txt": "明天下雨",
         "ico": "🌧️",
         "py": "Míngtiān xià yǔ"
        }
       ],
       "qpy": "Nǐ de gōngzuò shùnlì ma?"
      },
      {
       "q": "你的分数怎么样？",
       "qvi": "Điểm số của bạn thế nào?",
       "scene": "📝💯",
       "ans": "我的分数很高",
       "opts": [
        {
         "txt": "我坐地铁去",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù"
        },
        {
         "txt": "这是我的书包",
         "ico": "🎒",
         "py": "Zhè shì wǒ de shūbāo"
        },
        {
         "txt": "我的分数很高",
         "ico": "💯",
         "py": "Wǒ de fēnshù hěn gāo"
        }
       ],
       "qpy": "Nǐ de fēnshù zěnmeyàng?"
      },
      {
       "q": "这个药有什么作用？",
       "qvi": "Thuốc này có tác dụng gì?",
       "scene": "💊🤒",
       "ans": "它能让你不疼",
       "opts": [
        {
         "txt": "它能让你不疼",
         "ico": "💊",
         "py": "Tā néng ràng nǐ bù téng"
        },
        {
         "txt": "它在桌子上",
         "ico": "🪑",
         "py": "Tā zài zhuōzi shàng"
        },
        {
         "txt": "它是白色的",
         "ico": "⚪",
         "py": "Tā shì báisè de"
        }
       ],
       "qpy": "Zhè gè yào yǒu shénme zuòyòng?"
      },
      {
       "q": "这是真正的中国菜吗？",
       "qvi": "Đây có phải món Trung Quốc chính gốc không?",
       "scene": "🥢🇨🇳",
       "ans": "这正是北京菜",
       "opts": [
        {
         "txt": "我不想去医院",
         "ico": "🏥",
         "py": "Wǒ bù xiǎng qù yīyuàn"
        },
        {
         "txt": "明天我休息",
         "ico": "🛌",
         "py": "Míngtiān wǒ xiūxi"
        },
        {
         "txt": "这正是北京菜",
         "ico": "🥢",
         "py": "Zhè zhèngshì Běijīng cài"
        }
       ],
       "qpy": "Zhè shì zhēnzhèng de Zhōngguó cài ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo kết quả công việc",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp báo một kết quả tốt trong tuần: <i>\"我们得出了结果\"</i>, <i>\"这件事成了\"</i>.",
       "<b>Bước 2:</b> Gọi điện (hoặc tự nói) khen một quán ăn hay một dịch vụ bằng mẫu tăng tiến: <i>\"这个不但便宜而且好吃\"</i>.",
       "<b>Bước 3:</b> Nói với sếp về sự tiến bộ của một đồng nghiệp: <i>\"他不但努力而且做到了\"</i>, rồi kể điều gì đã ảnh hưởng đến anh ấy: <i>\"他受到老师的影响\"</i>."
      ]
     }
    }
   ]
  }
 }
};
