/* HSK %d — khóa tiếng Trung cho người đi làm (chuẩn HSK 3.0). Dữ liệu một cấp, nạp bằng <script src> (file:// được, không fetch).
   Tự sinh bởi zh/tools/assemble.py từ các lô đã qua kiểm (py/hv/traceKey do script điền từ hsk30 + Unihan). Định dạng: zh/docs/SPEC.md mục 4. */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[3] = {
 "label": "HSK 3",
 "modules": [
  {
   "code": "3.1",
   "title": "Cơ quan và chức vụ"
  },
  {
   "code": "3.2",
   "title": "Họp hành và trao đổi công việc"
  },
  {
   "code": "3.3",
   "title": "Tuyển dụng và nghề nghiệp"
  },
  {
   "code": "3.4",
   "title": "Hợp đồng và hợp tác"
  },
  {
   "code": "3.5",
   "title": "Mua sắm và tiền bạc"
  },
  {
   "code": "3.6",
   "title": "Ăn uống và tiếp khách"
  },
  {
   "code": "3.7",
   "title": "Nhà cửa và chỗ ở"
  },
  {
   "code": "3.8",
   "title": "Đi lại và vận chuyển"
  },
  {
   "code": "3.9",
   "title": "Du lịch và đối ngoại"
  },
  {
   "code": "3.10",
   "title": "Sức khỏe và an toàn"
  },
  {
   "code": "3.11",
   "title": "Giáo dục và học tập"
  },
  {
   "code": "3.12",
   "title": "Truyền thông và thông tin"
  },
  {
   "code": "3.13",
   "title": "Văn nghệ và giải trí"
  },
  {
   "code": "3.14",
   "title": "Thể thao và rèn luyện"
  },
  {
   "code": "3.15",
   "title": "Thiên nhiên và môi trường"
  },
  {
   "code": "3.16",
   "title": "Kế hoạch và giải quyết vấn đề"
  },
  {
   "code": "3.17",
   "title": "Ý kiến và lập luận"
  },
  {
   "code": "3.18",
   "title": "Cảm xúc và tính cách"
  },
  {
   "code": "3.19",
   "title": "Thời gian và tiến trình"
  },
  {
   "code": "3.20",
   "title": "Xã hội và văn hoá"
  },
  {
   "code": "3.21",
   "title": "Phát triển và đổi mới"
  }
 ],
 "data": {
  "3.1": {
   "lessons": [
    {
     "id": "3.1A",
     "name": "Bài 3.1A: Chức danh và con người trong tổ chức",
     "grammar": {
      "formulas": [
       "👴 老 + 👤 王 / 老板 / 老头儿",
       "🔢 第 + 一 + 位 + 👤 专家",
       "🧒 小 + 👤 王"
      ],
      "tip": "Tiền tố 老 (lǎo, lão) đặt trước họ hoặc danh từ để gọi thân mật/tôn trọng: 老王, 老板, 老太太. Tiền tố 第 (dì, đệ) + số tạo số thứ tự: 第一位. Tiền tố 小 (xiǎo, tiểu) dùng gọi người ít tuổi hơn: 小王.",
      "vn_tip": "Người Việt hay nói \"一位第\" hoặc quên 第 khi nói thứ tự. Đúng: 第一位专家 (thứ tự đứng trước lượng từ). Đừng gắn 老 vào người trẻ: gọi người lớn tuổi là 老王, người trẻ là 小王."
     },
     "chunks": [
      {
       "scene": "🧑‍💼🏢👔",
       "full": "他是我们公司的老板",
       "vi": "Anh ấy là ông chủ công ty chúng tôi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
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
         "t": "我们公司的老板",
         "ico": "🏢",
         "c": "o",
         "py": "wǒmen gōngsī de lǎobǎn",
         "hv": "ngã môn công ti đích lão bản"
        }
       ],
       "traceWord": "老板",
       "py": "Tā shì wǒmen gōngsī de lǎobǎn",
       "traceKey": "laoban",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
        {
         "c": "板",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "👵🌳🪑",
       "full": "老太太在公园里坐着",
       "vi": "Bà cụ đang ngồi trong công viên",
       "parts": [
        {
         "t": "老太太",
         "ico": "👵",
         "c": "s",
         "py": "lǎotàitai",
         "hv": "lão thái thái"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "公园里坐着",
         "ico": "🌳",
         "c": "o",
         "py": "gōngyuán lǐ zuò zhe",
         "hv": "công viên lý tọa trước"
        }
       ],
       "traceWord": "老太太",
       "py": "Lǎotàitai zài gōngyuán lǐ zuò zhe",
       "traceKey": "laotaitai",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
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
       "scene": "👴🌳🎤",
       "full": "老头儿常常去公园唱歌",
       "vi": "Ông cụ thường đi công viên hát",
       "parts": [
        {
         "t": "老头儿",
         "ico": "👴",
         "c": "s",
         "py": "lǎotóur",
         "hv": "lão đầu nhi"
        },
        {
         "t": "常常去",
         "ico": "🚶",
         "c": "v",
         "py": "chángcháng qù",
         "hv": "thường thường khứ"
        },
        {
         "t": "公园唱歌",
         "ico": "🎤",
         "c": "o",
         "py": "gōngyuán chànggē",
         "hv": "công viên xướng ca"
        }
       ],
       "traceWord": "老头儿",
       "py": "Lǎotóur chángcháng qù gōngyuán chànggē",
       "traceKey": "laotour",
       "traceInfo": [
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        },
        {
         "c": "头",
         "py": "tou",
         "hv": "đầu"
        },
        {
         "c": "儿",
         "py": "er",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "👨‍💼🏛️",
       "full": "小王的哥哥是公务员",
       "vi": "Anh trai của Tiểu Vương là công chức nhà nước",
       "parts": [
        {
         "t": "小王的哥哥",
         "ico": "👨",
         "c": "s",
         "py": "Xiǎowáng de gēge",
         "hv": "tiểu vương đích ca ca"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "公务员",
         "ico": "🏛️",
         "c": "o",
         "py": "gōngwùyuán",
         "hv": "công vụ viên"
        }
       ],
       "traceWord": "公务员",
       "py": "Xiǎowáng de gēge shì gōngwùyuán",
       "traceKey": "gongwuyuan",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "务",
         "py": "wù",
         "hv": "vụ"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "👷🏢💻",
       "full": "老王是我们公司的工程师",
       "vi": "Lão Vương là kỹ sư của công ty chúng tôi",
       "parts": [
        {
         "t": "老王",
         "ico": "👷",
         "c": "s",
         "py": "Lǎowáng",
         "hv": "lão vương"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我们公司的工程师",
         "ico": "🏢",
         "c": "o",
         "py": "wǒmen gōngsī de gōngchéngshī",
         "hv": "ngã môn công ti đích công trình sư"
        }
       ],
       "traceWord": "工程师",
       "py": "Lǎowáng shì wǒmen gōngsī de gōngchéngshī",
       "traceKey": "gongchengshi",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "程",
         "py": "chéng",
         "hv": "trình"
        },
        {
         "c": "师",
         "py": "shī",
         "hv": "sư"
        }
       ]
      },
      {
       "scene": "🥇🧑‍🏫👔",
       "full": "第一位专家是我们的主任",
       "vi": "Chuyên gia đầu tiên là chủ nhiệm của chúng tôi",
       "parts": [
        {
         "t": "第一位专家",
         "ico": "🥇",
         "c": "s",
         "py": "dì yī wèi zhuānjiā",
         "hv": "đệ nhất vị chuyên gia"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我们的主任",
         "ico": "👔",
         "c": "o",
         "py": "wǒmen de zhǔrèn",
         "hv": "ngã môn đích chủ nhiệm"
        }
       ],
       "traceWord": "专家",
       "py": "Dì yī wèi zhuānjiā shì wǒmen de zhǔrèn",
       "traceKey": "zhuanjia",
       "traceInfo": [
        {
         "c": "专",
         "py": "zhuān",
         "hv": "chuyên"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      },
      {
       "scene": "🏛️👨‍💼❤️",
       "full": "部长和所长都很关心老百姓",
       "vi": "Bộ trưởng và sở trưởng đều rất quan tâm đến dân thường",
       "parts": [
        {
         "t": "部长和所长",
         "ico": "👨‍💼",
         "c": "s",
         "py": "bùzhǎng hé suǒzhǎng",
         "hv": "bộ trưởng hòa sở trưởng"
        },
        {
         "t": "都很关心",
         "ico": "❤️",
         "c": "v",
         "py": "dōu hěn guānxīn",
         "hv": "đô ngận quan tâm"
        },
        {
         "t": "老百姓",
         "ico": "👨‍👩‍👧",
         "c": "o",
         "py": "lǎobǎixìng",
         "hv": "lão bách tính"
        }
       ],
       "traceWord": "部长",
       "py": "Bùzhǎng hé suǒzhǎng dōu hěn guānxīn lǎobǎixìng",
       "traceKey": "buzhang",
       "traceInfo": [
        {
         "c": "部",
         "py": "bù",
         "hv": "bộ"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧‍👦📋🤝",
       "full": "老李和小刘是小组的成员",
       "vi": "Lão Lý và Tiểu Lưu là thành viên của nhóm",
       "parts": [
        {
         "t": "老李和小刘",
         "ico": "👥",
         "c": "s",
         "py": "Lǎolǐ hé Xiǎoliú",
         "hv": "lão lý hòa tiểu _"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "小组的成员",
         "ico": "🤝",
         "c": "o",
         "py": "xiǎozǔ de chéngyuán",
         "hv": "tiểu tổ đích thành viên"
        }
       ],
       "traceWord": "成员",
       "py": "Lǎolǐ hé Xiǎoliú shì xiǎozǔ de chéngyuán",
       "traceKey": "chengyuan",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "谁在饭馆里工作？",
       "qvi": "Ai làm việc trong quán ăn?",
       "scene": "🍜🧑‍🍳",
       "ans": "服务员在饭馆里工作",
       "opts": [
        {
         "txt": "老师在学校上课",
         "ico": "🏫",
         "py": "Lǎoshī zài xuéxiào shàngkè"
        },
        {
         "txt": "服务员在饭馆里工作",
         "ico": "🍜",
         "py": "Fúwù yuán zài fànguǎn lǐ gōngzuò"
        },
        {
         "txt": "学生在教室里写字",
         "ico": "✏️",
         "py": "Xuéshēng zài jiàoshì lǐ xiě zì"
        }
       ],
       "qpy": "Shéi zài fànguǎn lǐ gōngzuò?"
      },
      {
       "q": "你们公司有多少员工？",
       "qvi": "Công ty các bạn có bao nhiêu nhân viên?",
       "scene": "🏢👥",
       "ans": "我们公司有一百名员工",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "📍",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "他今天不在公司",
         "ico": "🚪",
         "py": "Tā jīntiān bú zài gōngsī"
        },
        {
         "txt": "我们公司有一百名员工",
         "ico": "👥",
         "py": "Wǒmen gōngsī yǒu yī bǎi míng yuángōng"
        }
       ],
       "qpy": "Nǐmen gōngsī yǒu duōshao yuángōng?"
      },
      {
       "q": "谁在医院里帮助病人？",
       "qvi": "Ai giúp đỡ bệnh nhân ở bệnh viện?",
       "scene": "🏥🙋",
       "ans": "志愿者在医院里帮助病人",
       "opts": [
        {
         "txt": "志愿者在医院里帮助病人",
         "ico": "🙋",
         "py": "Zhìyuànzhě zài yīyuàn lǐ bāngzhù bìngrén"
        },
        {
         "txt": "老师在学校里上课",
         "ico": "🏫",
         "py": "Lǎoshī zài xuéxiào lǐ shàngkè"
        },
        {
         "txt": "司机在路上开车",
         "ico": "🚗",
         "py": "Sījī zài lùshang kāichē"
        }
       ],
       "qpy": "Shéi zài yīyuàn lǐ bāngzhù bìngrén?"
      },
      {
       "q": "这个队有几个队员？",
       "qvi": "Đội này có mấy đội viên?",
       "scene": "⚽👥",
       "ans": "这个队有十个队员",
       "opts": [
        {
         "txt": "读者在看小说",
         "ico": "📖",
         "py": "Dú zhě zài kàn xiǎoshuō"
        },
        {
         "txt": "这个队有十个队员",
         "ico": "🔟",
         "py": "Zhè gè duì yǒu shí gè duìyuán"
        },
        {
         "txt": "他是我们的老板",
         "ico": "👔",
         "py": "Tā shì wǒmen de lǎobǎn"
        }
       ],
       "qpy": "Zhè gè duì yǒu jǐ gè duìyuán?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu người trong công ty",
      "steps": [
       "<b>Bước 1:</b> Hãy nhìn sơ đồ tổ chức công ty bạn (hoặc vẽ nhanh) và tự nói thành tiếng giới thiệu 3 người: <i>\"他是我们公司的老板\"</i>, <i>\"老王是我们公司的工程师\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp nước ngoài, giới thiệu một người trong nhóm bằng mẫu <i>\"老李和小刘是小组的成员\"</i>, dùng 老 cho người lớn tuổi và 小 cho người trẻ.",
       "<b>Bước 3:</b> Tập nói với đối tác: hỏi và trả lời về số người trong công ty, ví dụ <i>\"你们公司有多少员工？\"</i> — <i>\"我们公司有一百名员工\"</i>. Nói to 3 lần với số người thật của công ty bạn."
      ]
     }
    },
    {
     "id": "3.1B",
     "name": "Bài 3.1B: Đơn vị, cơ quan và cơ cấu tổ chức",
     "grammar": {
      "formulas": [
       "🧑 我 + 们 → 我们、他们",
       "🏭 工 + 厂 / 部 + 门",
       "🏢 这 + 个 + 部门 + ⚡ 属于 + 🏢 公司"
      ],
      "tip": "Hậu tố 们 (men, môn) chỉ số nhiều của người: 我们, 他们, 同学们. Hậu tố 儿 (er, nhi) làm lời nói thân mật: 老头儿. Hậu tố 家 (jiā, gia) chỉ người chuyên môn (科学家), còn 这家工厂 là lượng từ cho cơ sở kinh doanh. 属于 (shǔyú, thuộc vu) nghĩa là \"thuộc về\".",
      "vn_tip": "Người Việt hay thêm 们 sau số lượng: sai \"三个同学们\". Đúng: 同学们 (không có số) hoặc 三个同学. Cũng đừng dịch \"các\" thành 们 cho vật: không nói 桌子们."
     },
     "chunks": [
      {
       "scene": "🏢🏢🏢3️⃣",
       "full": "我们公司有三个部门",
       "vi": "Công ty chúng tôi có ba phòng ban",
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
         "t": "三个部门",
         "ico": "3️⃣",
         "c": "o",
         "py": "sān gè bùmén",
         "hv": "tam cá bộ môn"
        }
       ],
       "traceWord": "部门",
       "py": "Wǒmen gōngsī yǒu sān gè bùmén",
       "traceKey": "bumen",
       "traceInfo": [
        {
         "c": "部",
         "py": "bù",
         "hv": "bộ"
        },
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        }
       ]
      },
      {
       "scene": "🏭📅🆕",
       "full": "这家工厂是去年成立的",
       "vi": "Nhà máy này được thành lập vào năm ngoái",
       "parts": [
        {
         "t": "这家工厂",
         "ico": "🏭",
         "c": "s",
         "py": "zhè jiā gōngchǎng",
         "hv": "giá gia công xưởng"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "去年成立的",
         "ico": "📅",
         "c": "o",
         "py": "qùnián chénglì de",
         "hv": "khứ niên thành lập đích"
        }
       ],
       "traceWord": "成立",
       "py": "Zhè jiā gōngchǎng shì qùnián chénglì de",
       "traceKey": "chengli",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "立",
         "py": "lì",
         "hv": "lập"
        }
       ]
      },
      {
       "scene": "👔📍🖥️",
       "full": "老板在北京设立了办公室",
       "vi": "Ông chủ đã lập văn phòng ở Bắc Kinh",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "在北京设立了",
         "ico": "🏙️",
         "c": "v",
         "py": "zài Běijīng shèlì le",
         "hv": "tại bắc kinh thiết lập liễu"
        },
        {
         "t": "办公室",
         "ico": "🖥️",
         "c": "o",
         "py": "bàngōngshì",
         "hv": "biện công thất"
        }
       ],
       "traceWord": "设立",
       "py": "Lǎobǎn zài Běijīng shèlì le bàngōngshì",
       "traceKey": "sheli",
       "traceInfo": [
        {
         "c": "设",
         "py": "shè",
         "hv": "thiết"
        },
        {
         "c": "立",
         "py": "lì",
         "hv": "lập"
        }
       ]
      },
      {
       "scene": "🏭👷🧑",
       "full": "这个厂的工人都很年轻",
       "vi": "Công nhân của nhà máy này đều rất trẻ",
       "parts": [
        {
         "t": "这个厂的工人",
         "ico": "👷",
         "c": "s",
         "py": "zhè gè chǎng de gōngrén",
         "hv": "giá cá xưởng đích công nhân"
        },
        {
         "t": "都",
         "ico": "👥",
         "c": "v",
         "py": "dōu",
         "hv": "đô"
        },
        {
         "t": "很年轻",
         "ico": "🧑",
         "c": "o",
         "py": "hěn niánqīng",
         "hv": "ngận niên khinh"
        }
       ],
       "traceWord": "厂",
       "py": "Zhè gè chǎng de gōngrén dōu hěn niánqīng",
       "traceKey": "chang",
       "traceInfo": [
        {
         "c": "厂",
         "py": "chǎng",
         "hv": "xưởng"
        }
       ]
      },
      {
       "scene": "🌳👨‍👩‍👧‍👦😌",
       "full": "公园是大家休息的场所",
       "vi": "Công viên là nơi mọi người nghỉ ngơi",
       "parts": [
        {
         "t": "公园",
         "ico": "🌳",
         "c": "s",
         "py": "gōngyuán",
         "hv": "công viên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "大家休息的场所",
         "ico": "😌",
         "c": "o",
         "py": "dàjiā xiūxi de chǎngsuǒ",
         "hv": "đại gia hưu tức đích trường sở"
        }
       ],
       "traceWord": "场所",
       "py": "Gōngyuán shì dàjiā xiūxi de chǎngsuǒ",
       "traceKey": "changsuo",
       "traceInfo": [
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        },
        {
         "c": "所",
         "py": "suǒ",
         "hv": "sở"
        }
       ]
      },
      {
       "scene": "👥🎉🤝",
       "full": "他们喜欢参加集体活动",
       "vi": "Họ thích tham gia hoạt động tập thể",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "喜欢参加",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan cānjiā",
         "hv": "hỉ hoan tham gia"
        },
        {
         "t": "集体活动",
         "ico": "🎉",
         "c": "o",
         "py": "jítǐ huódòng",
         "hv": "tập thể hoạt động"
        }
       ],
       "traceWord": "集体",
       "py": "Tāmen xǐhuan cānjiā jítǐ huódòng",
       "traceKey": "jiti",
       "traceInfo": [
        {
         "c": "集",
         "py": "jí",
         "hv": "tập"
        },
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        }
       ]
      },
      {
       "scene": "👥🏛️🚪",
       "full": "团体里的人员都来了",
       "vi": "Các thành viên trong đoàn thể đều đến rồi",
       "parts": [
        {
         "t": "团体里的人员",
         "ico": "👥",
         "c": "s",
         "py": "tuántǐ lǐ de rényuán",
         "hv": "đoàn thể lý đích nhân viên"
        },
        {
         "t": "都",
         "ico": "✅",
         "c": "v",
         "py": "dōu",
         "hv": "đô"
        },
        {
         "t": "来了",
         "ico": "🚪",
         "c": "o",
         "py": "lái le",
         "hv": "lai liễu"
        }
       ],
       "traceWord": "人员",
       "py": "Tuántǐ lǐ de rényuán dōu lái le",
       "traceKey": "renyuan",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🏢📂🔗",
       "full": "这个部门属于我们公司",
       "vi": "Phòng ban này thuộc về công ty chúng tôi",
       "parts": [
        {
         "t": "这个部门",
         "ico": "📂",
         "c": "s",
         "py": "zhè gè bùmén",
         "hv": "giá cá bộ môn"
        },
        {
         "t": "属于",
         "ico": "🔗",
         "c": "v",
         "py": "shǔyú",
         "hv": "thuộc vu"
        },
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "o",
         "py": "wǒmen gōngsī",
         "hv": "ngã môn công ti"
        }
       ],
       "traceWord": "属于",
       "py": "Zhè gè bùmén shǔyú wǒmen gōngsī",
       "traceKey": "shuyu",
       "traceInfo": [
        {
         "c": "属",
         "py": "shǔ",
         "hv": "thuộc"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个公司是谁建立的？",
       "qvi": "Công ty này do ai thành lập?",
       "scene": "🏢🧑‍💼",
       "ans": "是老王建立的",
       "opts": [
        {
         "txt": "是明天开会的",
         "ico": "📅",
         "py": "Shì míngtiān kāihuì de"
        },
        {
         "txt": "是老王建立的",
         "ico": "🧑‍💼",
         "py": "Shì Lǎowáng jiànlì de"
        },
        {
         "txt": "是在北京的",
         "ico": "📍",
         "py": "Shì zài Běijīng de"
        }
       ],
       "qpy": "Zhè gè gōngsī shì shéi jiànlì de?"
      },
      {
       "q": "你觉得这个公司怎么样？",
       "qvi": "Bạn thấy công ty này thế nào?",
       "scene": "🏢👍",
       "ans": "整体来说还不错",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "他是我们的老板",
         "ico": "👔",
         "py": "Tā shì wǒmen de lǎobǎn"
        },
        {
         "txt": "整体来说还不错",
         "ico": "👍",
         "py": "Zhěngtǐ lái shuō hái bùcuò"
        }
       ],
       "qpy": "Nǐ juéde zhè gè gōngsī zěnmeyàng?"
      },
      {
       "q": "你属什么？",
       "qvi": "Bạn tuổi con gì?",
       "scene": "🐶🐱",
       "ans": "我属狗",
       "opts": [
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        },
        {
         "txt": "休息室在二楼",
         "ico": "🏢",
         "py": "Xiūxi shì zài èr lóu"
        },
        {
         "txt": "我属狗",
         "ico": "🐶",
         "py": "Wǒ shǔ gǒu"
        }
       ],
       "qpy": "Nǐ shǔ shénme?"
      },
      {
       "q": "你们团有多少人？",
       "qvi": "Đoàn các bạn có bao nhiêu người?",
       "scene": "👥🔢",
       "ans": "我们团有二十个人",
       "opts": [
        {
         "txt": "我们团有二十个人",
         "ico": "👥",
         "py": "Wǒmen tuán yǒu èr shí gè rén"
        },
        {
         "txt": "我们团明天去北京",
         "ico": "✈️",
         "py": "Wǒmen tuán míngtiān qù Běijīng"
        },
        {
         "txt": "我们团去年成立了",
         "ico": "📅",
         "py": "Wǒmen tuán qùnián chénglì le"
        }
       ],
       "qpy": "Nǐmen tuán yǒu duōshao rén?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu cơ cấu công ty",
      "steps": [
       "<b>Bước 1:</b> Liệt kê ra giấy các phòng ban trong công ty bạn, rồi nói thành tiếng: <i>\"我们公司有三个部门\"</i>. Thay số cho đúng thực tế.",
       "<b>Bước 2:</b> Soạn một tin nhắn giới thiệu công ty cho đối tác Trung Quốc: công ty thành lập khi nào, văn phòng ở đâu, ví dụ <i>\"这家工厂是去年成立的\"</i>.",
       "<b>Bước 3:</b> Tập hỏi đáp với bạn học: một người hỏi <i>\"你们团有多少人？\"</i>, người kia trả lời bằng số người thật của nhóm mình, sau đó đổi vai. Nói 3 lần."
      ]
     }
    },
    {
     "id": "3.1C",
     "name": "Bài 3.1C: Nhiệm vụ, trách nhiệm và quản lý",
     "grammar": {
      "formulas": [
       "🧑 我们 + ⚡ 需要 + 📦 一位新经理",
       "🧑 他 + ⚡ 不敢 + 🚶 一个人去",
       "👔 主任 + ⚡ 需要 + 📋 分配任务"
      ],
      "tip": "Động từ năng nguyện 需要 (xūyào, nhu yếu) = cần, đứng trước động từ hoặc danh từ: 需要安排, 需要一位经理. 敢 (gǎn, cảm) = dám, phủ định là 不敢; câu hỏi có thể là 你敢不敢…？ Cả hai đều đứng trước động từ chính.",
      "vn_tip": "Người Việt hay nói \"我需要要\" hoặc \"我敢不去\" vì dịch sát \"cần phải\". Đúng: 需要 đã mang nghĩa \"cần\", không thêm 要. Phủ định của 敢 là 不敢 (không dám), đừng đặt 不 sau 敢."
     },
     "chunks": [
      {
       "scene": "🏢👔🔍",
       "full": "我们需要一位新的经理",
       "vi": "Chúng tôi cần một giám đốc mới",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "需要",
         "ico": "🙏",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "一位新的经理",
         "ico": "👔",
         "c": "o",
         "py": "yī wèi xīn de jīnglǐ",
         "hv": "nhất vị tân đích kinh lý"
        }
       ],
       "traceWord": "需要",
       "py": "Wǒmen xūyào yī wèi xīn de jīnglǐ",
       "traceKey": "xuyao",
       "traceInfo": [
        {
         "c": "需",
         "py": "xū",
         "hv": "nhu"
        },
        {
         "c": "要",
         "py": "yào",
         "hv": "yếu"
        }
       ]
      },
      {
       "scene": "🧑😨🚶",
       "full": "他不敢一个人去那儿",
       "vi": "Anh ấy không dám đi một mình đến đó",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不敢",
         "ico": "😨",
         "c": "v",
         "py": "bù gǎn",
         "hv": "bất cảm"
        },
        {
         "t": "一个人去那儿",
         "ico": "🚶",
         "c": "o",
         "py": "yī gè rén qù nàr",
         "hv": "nhất cá nhân khứ na nhi"
        }
       ],
       "traceWord": "敢",
       "py": "Tā bù gǎn yī gè rén qù nàr",
       "traceKey": "gan",
       "traceInfo": [
        {
         "c": "敢",
         "py": "gǎn",
         "hv": "cảm"
        }
       ]
      },
      {
       "scene": "👔📅📋",
       "full": "经理需要安排明天的工作",
       "vi": "Giám đốc cần sắp xếp công việc ngày mai",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "需要",
         "ico": "🙏",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "安排明天的工作",
         "ico": "📅",
         "c": "o",
         "py": "ānpái míngtiān de gōngzuò",
         "hv": "an bài minh thiên đích công tác"
        }
       ],
       "traceWord": "安排",
       "py": "Jīnglǐ xūyào ānpái míngtiān de gōngzuò",
       "traceKey": "anpai",
       "traceInfo": [
        {
         "c": "安",
         "py": "ān",
         "hv": "an"
        },
        {
         "c": "排",
         "py": "pái",
         "hv": "bài"
        }
       ]
      },
      {
       "scene": "👔📋📤",
       "full": "主任需要分配新的任务",
       "vi": "Chủ nhiệm cần phân công nhiệm vụ mới",
       "parts": [
        {
         "t": "主任",
         "ico": "👔",
         "c": "s",
         "py": "zhǔrèn",
         "hv": "chủ nhiệm"
        },
        {
         "t": "需要",
         "ico": "🙏",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "分配新的任务",
         "ico": "📋",
         "c": "o",
         "py": "fēnpèi xīn de rènwu",
         "hv": "phân phối tân đích nhiệm vụ"
        }
       ],
       "traceWord": "分配",
       "py": "Zhǔrèn xūyào fēnpèi xīn de rènwu",
       "traceKey": "fenpei",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "配",
         "py": "pèi",
         "hv": "phối"
        }
       ]
      },
      {
       "scene": "🙋⚖️💼",
       "full": "对自己的工作负责是我们的责任",
       "vi": "Chịu trách nhiệm với công việc của mình là trách nhiệm của chúng ta",
       "parts": [
        {
         "t": "对自己的工作负责",
         "ico": "💼",
         "c": "s",
         "py": "duì zìjǐ de gōngzuò fùzé",
         "hv": "đối tự kỷ đích công tác phụ trách"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我们的责任",
         "ico": "⚖️",
         "c": "o",
         "py": "wǒmen de zérèn",
         "hv": "ngã môn đích trách nhiệm"
        }
       ],
       "traceWord": "责任",
       "py": "Duì zìjǐ de gōngzuò fùzé shì wǒmen de zérèn",
       "traceKey": "zeren",
       "traceInfo": [
        {
         "c": "责",
         "py": "zé",
         "hv": "trách"
        },
        {
         "c": "任",
         "py": "rèn",
         "hv": "nhiệm"
        }
       ]
      },
      {
       "scene": "👷🚩👥",
       "full": "老王敢带领我们完成任务",
       "vi": "Lão Vương dám dẫn dắt chúng tôi hoàn thành nhiệm vụ",
       "parts": [
        {
         "t": "老王",
         "ico": "👷",
         "c": "s",
         "py": "Lǎowáng",
         "hv": "lão vương"
        },
        {
         "t": "敢带领",
         "ico": "🚩",
         "c": "v",
         "py": "gǎn dàilǐng",
         "hv": "cảm đới lĩnh"
        },
        {
         "t": "我们完成任务",
         "ico": "✅",
         "c": "o",
         "py": "wǒmen wánchéng rènwu",
         "hv": "ngã môn hoàn thành nhiệm vụ"
        }
       ],
       "traceWord": "带领",
       "py": "Lǎowáng gǎn dàilǐng wǒmen wánchéng rènwu",
       "traceKey": "dailing",
       "traceInfo": [
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        },
        {
         "c": "领",
         "py": "lǐng",
         "hv": "lĩnh"
        }
       ]
      },
      {
       "scene": "🧑‍🏫📚💼",
       "full": "我们需要专家指导工作",
       "vi": "Chúng tôi cần chuyên gia hướng dẫn công việc",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "需要",
         "ico": "🙏",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "专家指导工作",
         "ico": "🧑‍🏫",
         "c": "o",
         "py": "zhuānjiā zhǐdǎo gōngzuò",
         "hv": "chuyên gia chỉ đạo công tác"
        }
       ],
       "traceWord": "指导",
       "py": "Wǒmen xūyào zhuānjiā zhǐdǎo gōngzuò",
       "traceKey": "zhidao",
       "traceInfo": [
        {
         "c": "指",
         "py": "zhǐ",
         "hv": "chỉ"
        },
        {
         "c": "导",
         "py": "dǎo",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "🧑😓✈️",
       "full": "我不得不明天去北京",
       "vi": "Tôi buộc phải đi Bắc Kinh vào ngày mai",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "不得不",
         "ico": "😓",
         "c": "v",
         "py": "bùdébù",
         "hv": "bất đắc bất"
        },
        {
         "t": "明天去北京",
         "ico": "✈️",
         "c": "o",
         "py": "míngtiān qù Běijīng",
         "hv": "minh thiên khứ bắc kinh"
        }
       ],
       "traceWord": "不得不",
       "py": "Wǒ bùdébù míngtiān qù Běijīng",
       "traceKey": "budebu",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "得",
         "py": "dé",
         "hv": "đắc"
        },
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "谁管理这个部门？",
       "qvi": "Ai quản lý bộ phận này?",
       "scene": "🏢👔",
       "ans": "王主任管着这个部门",
       "opts": [
        {
         "txt": "我们在饭馆吃饭",
         "ico": "🍜",
         "py": "Wǒmen zài fànguǎn chīfàn"
        },
        {
         "txt": "他明天去学校",
         "ico": "🏫",
         "py": "Tā míngtiān qù xuéxiào"
        },
        {
         "txt": "王主任管着这个部门",
         "ico": "👔",
         "py": "Wáng zhǔrèn guǎn zhe zhè gè bùmén"
        }
       ],
       "qpy": "Shéi guǎnlǐ zhè gè bùmén?"
      },
      {
       "q": "今天是星期天，你要上班吗？",
       "qvi": "Hôm nay là Chủ nhật, bạn có đi làm không?",
       "scene": "📅🏠",
       "ans": "我不必上班",
       "opts": [
        {
         "txt": "我不必上班",
         "ico": "🏠",
         "py": "Wǒ bùbì shàngbān"
        },
        {
         "txt": "我要去公司上班",
         "ico": "🏢",
         "py": "Wǒ yào qù gōngsī shàngbān"
        },
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        }
       ],
       "qpy": "Jīntiān shì xīngqītiān nǐ yào shàngbān ma?"
      },
      {
       "q": "谁派你去北京？",
       "qvi": "Ai cử bạn đi Bắc Kinh?",
       "scene": "✈️👔",
       "ans": "领导派我去北京",
       "opts": [
        {
         "txt": "我想喝茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē chá"
        },
        {
         "txt": "领导派我去北京",
         "ico": "👔",
         "py": "Lǐngdǎo pài wǒ qù Běijīng"
        },
        {
         "txt": "他在学校学习",
         "ico": "🏫",
         "py": "Tā zài xuéxiào xuéxí"
        }
       ],
       "qpy": "Shéi pài nǐ qù Běijīng?"
      },
      {
       "q": "这个电影怎么样？",
       "qvi": "Bộ phim này thế nào?",
       "scene": "🎬👍",
       "ans": "这个电影值得看",
       "opts": [
        {
         "txt": "我们应当明天去",
         "ico": "📅",
         "py": "Wǒmen yīngdāng míngtiān qù"
        },
        {
         "txt": "这个电影值得看",
         "ico": "🎬",
         "py": "Zhè gè diànyǐng zhídé kàn"
        },
        {
         "txt": "他是我的哥哥",
         "ico": "👨",
         "py": "Tā shì wǒ de gēge"
        }
       ],
       "qpy": "Zhè gè diànyǐng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phân công công việc trong nhóm",
      "steps": [
       "<b>Bước 1:</b> Viết ra 3 việc của nhóm bạn tuần này, rồi nói thành tiếng ai cần làm gì: <i>\"主任需要分配新的任务\"</i>, <i>\"经理需要安排明天的工作\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp nói bạn cần sự giúp đỡ hoặc cần chuyên gia hỗ trợ: <i>\"我们需要专家指导工作\"</i>. Thêm một câu nói rõ việc nào bạn không dám tự quyết, dùng <i>\"他不敢…\"</i>.",
       "<b>Bước 3:</b> Giả sử sếp nói bạn phải đi công tác, tập trả lời: <i>\"我不得不明天去北京\"</i>, rồi hỏi lại <i>\"谁派你去北京？\"</i> với bạn học. Đổi vai và nói 3 lần."
      ]
     }
    }
   ]
  },
  "3.2": {
   "lessons": [
    {
     "id": "3.2A",
     "name": "Bài 3.2A: Họp và phát biểu",
     "grammar": {
      "formulas": [
       "👔 主持人 + ➡️ 请 + 🧑 小明 + 🎤 发言",
       "👔 经理 + ➡️ 让 + 👥 大家 + 📝 总结",
       "👔 老板 + ➡️ 叫 + 🧑 他 + 📢 报告"
      ],
      "tip": "Câu kiêm ngữ: 请 (qǐng, thỉnh) / 让 (ràng, nhượng) / 叫 (jiào, khiếu) + người + động từ. Người đứng sau 请/让/叫 vừa là tân ngữ của chúng, vừa là chủ ngữ của động từ phía sau. 请 lịch sự nhất, 让 và 叫 dùng thường ngày.",
      "vn_tip": "Người Việt hay nói \"Tôi mời anh ấy phát biểu\" rồi dịch thiếu người ở giữa, hoặc thêm 去 thừa. Đúng là 主持人请小明发言: người được sai khiến đặt ngay sau 请/让/叫, không thêm từ nào chen giữa."
     },
     "chunks": [
      {
       "scene": "🎤👔🧑",
       "full": "主持人请小明发言",
       "vi": "Người dẫn chương trình mời Tiểu Minh phát biểu",
       "parts": [
        {
         "t": "主持人",
         "ico": "👔",
         "c": "s",
         "py": "zhǔchí rén",
         "hv": "chủ trì nhân"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "小明发言",
         "ico": "🎤",
         "c": "o",
         "py": "Xiǎomíng fāyán",
         "hv": "tiểu minh phát ngôn"
        }
       ],
       "traceWord": "发言",
       "py": "Zhǔchí rén qǐng Xiǎomíng fāyán",
       "traceKey": "fayan",
       "traceInfo": [
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        },
        {
         "c": "言",
         "py": "yán",
         "hv": "ngôn"
        }
       ]
      },
      {
       "scene": "👔📝🗓️",
       "full": "经理让我总结今天的会议",
       "vi": "Giám đốc bảo tôi tổng kết cuộc họp hôm nay",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "我总结今天的会议",
         "ico": "📝",
         "c": "o",
         "py": "wǒ zǒngjié jīntiān de huìyì",
         "hv": "ngã tổng kết kim thiên đích hội nghị"
        }
       ],
       "traceWord": "总结",
       "py": "Jīnglǐ ràng wǒ zǒngjié jīntiān de huìyì",
       "traceKey": "zongjie",
       "traceInfo": [
        {
         "c": "总",
         "py": "zǒng",
         "hv": "tổng"
        },
        {
         "c": "结",
         "py": "jié",
         "hv": "kết"
        }
       ]
      },
      {
       "scene": "👴💬🧑",
       "full": "老板请他补充具体的想法",
       "vi": "Sếp mời anh ấy bổ sung ý tưởng cụ thể",
       "parts": [
        {
         "t": "老板",
         "ico": "👴",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "他补充具体的想法",
         "ico": "💡",
         "c": "o",
         "py": "tā bǔchōng jùtǐ de xiǎngfǎ",
         "hv": "tha bổ sung cụ thể đích tưởng pháp"
        }
       ],
       "traceWord": "补充",
       "py": "Lǎobǎn qǐng tā bǔchōng jùtǐ de xiǎngfǎ",
       "traceKey": "buchong",
       "traceInfo": [
        {
         "c": "补",
         "py": "bǔ",
         "hv": "bổ"
        },
        {
         "c": "充",
         "py": "chōng",
         "hv": "sung"
        }
       ]
      },
      {
       "scene": "👔👥📌",
       "full": "领导让大家明确下周的任务",
       "vi": "Lãnh đạo yêu cầu mọi người xác định rõ nhiệm vụ tuần sau",
       "parts": [
        {
         "t": "领导",
         "ico": "👔",
         "c": "s",
         "py": "lǐngdǎo",
         "hv": "lĩnh đạo"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "大家明确下周的任务",
         "ico": "📌",
         "c": "o",
         "py": "dàjiā míngquè xià zhōu de rènwu",
         "hv": "đại gia minh xác hạ chu đích nhiệm vụ"
        }
       ],
       "traceWord": "明确",
       "py": "Lǐngdǎo ràng dàjiā míngquè xià zhōu de rènwu",
       "traceKey": "mingque",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "确",
         "py": "què",
         "hv": "xác"
        }
       ]
      },
      {
       "scene": "🏢🎓🗣️",
       "full": "公司请专家在会议上发表看法",
       "vi": "Công ty mời chuyên gia phát biểu quan điểm tại cuộc họp",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "专家在会议上发表看法",
         "ico": "🗣️",
         "c": "o",
         "py": "zhuānjiā zài huìyì shàng fābiǎo kànfǎ",
         "hv": "chuyên gia tại hội nghị thượng phát biểu khán pháp"
        }
       ],
       "traceWord": "发表",
       "py": "Gōngsī qǐng zhuānjiā zài huìyì shàng fābiǎo kànfǎ",
       "traceKey": "fabiao",
       "traceInfo": [
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        },
        {
         "c": "表",
         "py": "biǎo",
         "hv": "biểu"
        }
       ]
      },
      {
       "scene": "👔📢📋",
       "full": "经理让小李宣布正式名单",
       "vi": "Giám đốc bảo Tiểu Lý công bố danh sách chính thức",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "小李宣布正式名单",
         "ico": "📋",
         "c": "o",
         "py": "Xiǎolǐ xuānbù zhèngshì míngdān",
         "hv": "tiểu lý tuyên bố chính thức danh đơn"
        }
       ],
       "traceWord": "宣布",
       "py": "Jīnglǐ ràng Xiǎolǐ xuānbù zhèngshì míngdān",
       "traceKey": "xuanbu",
       "traceInfo": [
        {
         "c": "宣",
         "py": "xuān",
         "hv": "tuyên"
        },
        {
         "c": "布",
         "py": "bù",
         "hv": "bố"
        }
       ]
      },
      {
       "scene": "👔👥🏛️",
       "full": "领导让我们在这个场合说明事实",
       "vi": "Lãnh đạo bảo chúng tôi nói rõ sự thật trong dịp này",
       "parts": [
        {
         "t": "领导",
         "ico": "👔",
         "c": "s",
         "py": "lǐngdǎo",
         "hv": "lĩnh đạo"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "我们在这个场合说明事实",
         "ico": "🏛️",
         "c": "o",
         "py": "wǒmen zài zhè gè chǎnghé shuōmíng shìshí",
         "hv": "ngã môn tại giá cá trường hợp thuyết minh sự thực"
        }
       ],
       "traceWord": "场合",
       "py": "Lǐngdǎo ràng wǒmen zài zhè gè chǎnghé shuōmíng shìshí",
       "traceKey": "changhe",
       "traceInfo": [
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        },
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        }
       ]
      },
      {
       "scene": "🏢🧑🗓️",
       "full": "公司下个月举办一次会议",
       "vi": "Công ty tháng sau sẽ tổ chức một cuộc họp",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "下个月举办",
         "ico": "👉",
         "c": "v",
         "py": "xià gè yuè jǔbàn",
         "hv": "hạ cá nguyệt cử biện"
        },
        {
         "t": "一次会议",
         "ico": "🗓️",
         "c": "o",
         "py": "yī cì huìyì",
         "hv": "nhất thứ hội nghị"
        }
       ],
       "traceWord": "举办",
       "py": "Gōngsī xià gè yuè jǔbàn yī cì huìyì",
       "traceKey": "juban",
       "traceInfo": [
        {
         "c": "举",
         "py": "jǔ",
         "hv": "cử"
        },
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "经理让谁做报告？",
       "qvi": "Giám đốc bảo ai làm báo cáo?",
       "scene": "👔📢",
       "ans": "经理让小李做报告",
       "opts": [
        {
         "txt": "经理在北京工作",
         "ico": "🏙️",
         "py": "Jīnglǐ zài Běijīng gōngzuò"
        },
        {
         "txt": "经理让小李做报告",
         "ico": "📢",
         "py": "Jīnglǐ ràng Xiǎolǐ zuò bàogào"
        },
        {
         "txt": "经理想喝一杯茶",
         "ico": "🍵",
         "py": "Jīnglǐ xiǎng hē yī bēi chá"
        }
       ],
       "qpy": "Jīnglǐ ràng shéi zuò bàogào?"
      },
      {
       "q": "今天会议的话题是什么？",
       "qvi": "Chủ đề cuộc họp hôm nay là gì?",
       "scene": "🗓️💬",
       "ans": "今天的话题是新年计划",
       "opts": [
        {
         "txt": "我们明天下午去公园",
         "ico": "🌳",
         "py": "Wǒmen míngtiān xiàwǔ qù gōngyuán"
        },
        {
         "txt": "他在银行工作三年",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò sān nián"
        },
        {
         "txt": "今天的话题是新年计划",
         "ico": "🎆",
         "py": "Jīntiān de huàtí shì xīnnián jìhuà"
        }
       ],
       "qpy": "Jīntiān huìyì de huàtí shì shénme?"
      },
      {
       "q": "公司什么时候发表声明？",
       "qvi": "Khi nào công ty đưa ra tuyên bố?",
       "scene": "🏢📄",
       "ans": "公司明天上午发表声明",
       "opts": [
        {
         "txt": "公司在北京有三个办公室",
         "ico": "🏙️",
         "py": "Gōngsī zài Běijīng yǒu sān gè bàngōngshì"
        },
        {
         "txt": "公司明天上午发表声明",
         "ico": "📄",
         "py": "Gōngsī míngtiān shàngwǔ fābiǎo shēngmíng"
        },
        {
         "txt": "公司昨天不上班",
         "ico": "😴",
         "py": "Gōngsī zuótiān bú shàngbān"
        }
       ],
       "qpy": "Gōngsī shénme shíhou fābiǎo shēngmíng?"
      },
      {
       "q": "小王约你几点见面？",
       "qvi": "Tiểu Vương hẹn bạn mấy giờ gặp?",
       "scene": "🧑⏰",
       "ans": "他约我下午三点见面",
       "opts": [
        {
         "txt": "他约我明年去北京",
         "ico": "✈️",
         "py": "Tā yuē wǒ míngnián qù Běijīng"
        },
        {
         "txt": "他约我们在家吃饭",
         "ico": "🍚",
         "py": "Tā yuē wǒmen zàijiā chīfàn"
        },
        {
         "txt": "他约我下午三点见面",
         "ico": "⏰",
         "py": "Tā yuē wǒ xiàwǔ sān diǎn jiànmiàn"
        }
       ],
       "qpy": "Xiǎowáng yuē nǐ jǐ diǎn jiànmiàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Điều hành một cuộc họp nhóm nhỏ",
      "steps": [
       "<b>Bước 1:</b> Soạn tin nhắn gửi đồng nghiệp: báo giờ họp và nói <i>\"经理让大家明确下周的任务\"</i> để mọi người chuẩn bị.",
       "<b>Bước 2:</b> Tự nói thành tiếng vai người dẫn chương trình, mời lần lượt ba người phát biểu bằng mẫu <i>\"主持人请小明发言\"</i> (thay tên người thật).",
       "<b>Bước 3:</b> Kết thúc họp: nhờ một người tổng kết bằng <i>\"经理让我总结今天的会议\"</i>, rồi nói lại ba ý chính."
      ]
     }
    },
    {
     "id": "3.2B",
     "name": "Bài 3.2B: Thảo luận, đề xuất và bày tỏ ý kiến",
     "grammar": {
      "formulas": [
       "🤔 也许 + 🧑 他 + ✅ 同意",
       "🤔 经理 + 可能 + 👍 会支持",
       "❓ 我 + 能不能 + 💬 谈一谈？"
      ],
      "tip": "Dùng 也许 (yěxǔ, dã hứa) hoặc 可能 (kěnéng, khả năng) để đoán điều chưa chắc chắn. Cùng nhóm với 大概 (dàgài, đại khái: chắc là, khoảng) và 恐怕 (kǒngpà, khủng phạ: e rằng, thường báo tin không tốt). Phó từ đứng trước động từ, sau chủ ngữ: 他也许不同意.",
      "vn_tip": "Người Việt hay đặt \"có lẽ\" ở cuối câu hoặc nói 他不同意也许. Trong tiếng Trung, phó từ ước đoán phải đứng trước động từ: 经理可能会批评这个做法. Phủ định đặt sau phó từ: 可能不会, không nói 不可能会 (nghĩa khác)."
     },
     "chunks": [
      {
       "scene": "🤔🧑👎",
       "full": "也许他不同意这个建议",
       "vi": "Có lẽ anh ấy không đồng ý với đề xuất này",
       "parts": [
        {
         "t": "也许他",
         "ico": "🤔",
         "c": "s",
         "py": "yěxǔ tā",
         "hv": "dã hứa tha"
        },
        {
         "t": "不同意",
         "ico": "🙅",
         "c": "v",
         "py": "bù tóngyì",
         "hv": "bất đồng ý"
        },
        {
         "t": "这个建议",
         "ico": "💡",
         "c": "o",
         "py": "zhè gè jiànyì",
         "hv": "giá cá kiến nghị"
        }
       ],
       "traceWord": "同意",
       "py": "Yěxǔ tā bù tóngyì zhè gè jiànyì",
       "traceKey": "tongyi",
       "traceInfo": [
        {
         "c": "同",
         "py": "tóng",
         "hv": "đồng"
        },
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "👔🤔👍",
       "full": "经理也许会支持我的主张",
       "vi": "Giám đốc có lẽ sẽ ủng hộ chủ trương của tôi",
       "parts": [
        {
         "t": "经理也许",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ yěxǔ",
         "hv": "kinh lý dã hứa"
        },
        {
         "t": "会支持",
         "ico": "👍",
         "c": "v",
         "py": "huì zhīchí",
         "hv": "hội chi trì"
        },
        {
         "t": "我的主张",
         "ico": "📌",
         "c": "o",
         "py": "wǒ de zhǔzhāng",
         "hv": "ngã đích chủ trương"
        }
       ],
       "traceWord": "支持",
       "py": "Jīnglǐ yěxǔ huì zhīchí wǒ de zhǔzhāng",
       "traceKey": "zhichi",
       "traceInfo": [
        {
         "c": "支",
         "py": "zhī",
         "hv": "chi"
        },
        {
         "c": "持",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🧑🙋👨‍🏫",
       "full": "他也许想向老师请教问题",
       "vi": "Có lẽ anh ấy muốn xin thầy chỉ bảo một vấn đề",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "也许想向老师请教",
         "ico": "🙋",
         "c": "v",
         "py": "yěxǔ xiǎng xiàng lǎoshī qǐngjiào",
         "hv": "dã hứa tưởng hướng lão sư thỉnh giáo"
        },
        {
         "t": "问题",
         "ico": "❓",
         "c": "o",
         "py": "wèntí",
         "hv": "vấn đề"
        }
       ],
       "traceWord": "请教",
       "py": "Tā yěxǔ xiǎng xiàng lǎoshī qǐngjiào wèntí",
       "traceKey": "qingjiao",
       "traceInfo": [
        {
         "c": "请",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "c": "教",
         "py": "jiào",
         "hv": "giáo"
        }
       ]
      },
      {
       "scene": "👔⚠️📋",
       "full": "经理可能会批评这个做法",
       "vi": "Giám đốc có thể sẽ phê bình cách làm này",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "可能会批评",
         "ico": "⚠️",
         "c": "v",
         "py": "kěnéng huì pīpíng",
         "hv": "khả năng hội phê bình"
        },
        {
         "t": "这个做法",
         "ico": "📋",
         "c": "o",
         "py": "zhè gè zuòfǎ",
         "hv": "giá cá tố pháp"
        }
       ],
       "traceWord": "批评",
       "py": "Jīnglǐ kěnéng huì pīpíng zhè gè zuòfǎ",
       "traceKey": "piping",
       "traceInfo": [
        {
         "c": "批",
         "py": "pī",
         "hv": "phê"
        },
        {
         "c": "评",
         "py": "píng",
         "hv": "bình"
        }
       ]
      },
      {
       "scene": "🤔👥🚫",
       "full": "也许他们反对我们的计划",
       "vi": "Có lẽ họ phản đối kế hoạch của chúng ta",
       "parts": [
        {
         "t": "也许他们",
         "ico": "🤔",
         "c": "s",
         "py": "yěxǔ tāmen",
         "hv": "dã hứa tha môn"
        },
        {
         "t": "反对",
         "ico": "🚫",
         "c": "v",
         "py": "fǎnduì",
         "hv": "phản đối"
        },
        {
         "t": "我们的计划",
         "ico": "📅",
         "c": "o",
         "py": "wǒmen de jìhuà",
         "hv": "ngã môn đích kế hoạch"
        }
       ],
       "traceWord": "反对",
       "py": "Yěxǔ tāmen fǎnduì wǒmen de jìhuà",
       "traceKey": "fandui",
       "traceInfo": [
        {
         "c": "反",
         "py": "fǎn",
         "hv": "phản"
        },
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        }
       ]
      },
      {
       "scene": "🧑☝️⏰",
       "full": "小王可能会强调时间的重要",
       "vi": "Tiểu Vương có thể sẽ nhấn mạnh tầm quan trọng của thời gian",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "可能会强调",
         "ico": "☝️",
         "c": "v",
         "py": "kěnéng huì qiángdiào",
         "hv": "khả năng hội cường điệu"
        },
        {
         "t": "时间的重要",
         "ico": "⏰",
         "c": "o",
         "py": "shíjiān de zhòngyào",
         "hv": "thời gian đích trọng yếu"
        }
       ],
       "traceWord": "强调",
       "py": "Xiǎowáng kěnéng huì qiángdiào shíjiān de zhòngyào",
       "traceKey": "qiangdiao",
       "traceInfo": [
        {
         "c": "强",
         "py": "qiáng",
         "hv": "cường"
        },
        {
         "c": "调",
         "py": "diào",
         "hv": "điệu"
        }
       ]
      },
      {
       "scene": "🧑🙅📄",
       "full": "他可能不会否认这件事",
       "vi": "Anh ấy có thể sẽ không phủ nhận chuyện này",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "可能不会否认",
         "ico": "🙅",
         "c": "v",
         "py": "kěnéng bú huì fǒurèn",
         "hv": "khả năng bất hội phủ nhận"
        },
        {
         "t": "这件事",
         "ico": "📄",
         "c": "o",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        }
       ],
       "traceWord": "否认",
       "py": "Tā kěnéng bú huì fǒurèn zhè jiàn shì",
       "traceKey": "fouren",
       "traceInfo": [
        {
         "c": "否",
         "py": "fǒu",
         "hv": "phủ"
        },
        {
         "c": "认",
         "py": "rèn",
         "hv": "nhận"
        }
       ]
      },
      {
       "scene": "👨‍🏫👉❓",
       "full": "老师也许会指出你的问题",
       "vi": "Thầy giáo có lẽ sẽ chỉ ra vấn đề của bạn",
       "parts": [
        {
         "t": "老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "也许会指出",
         "ico": "👉",
         "c": "v",
         "py": "yěxǔ huì zhǐchū",
         "hv": "dã hứa hội chỉ xuất"
        },
        {
         "t": "你的问题",
         "ico": "❓",
         "c": "o",
         "py": "nǐ de wèntí",
         "hv": "nễ đích vấn đề"
        }
       ],
       "traceWord": "指出",
       "py": "Lǎoshī yěxǔ huì zhǐchū nǐ de wèntí",
       "traceKey": "zhichu",
       "traceInfo": [
        {
         "c": "指",
         "py": "zhǐ",
         "hv": "chỉ"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "我能不能先谈一谈？",
       "qvi": "Tôi có thể nói trước một chút được không?",
       "scene": "🙋💬",
       "ans": "请你先谈吧",
       "opts": [
        {
         "txt": "我昨天买了一本书",
         "ico": "📕",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "那个人是我的哥哥",
         "ico": "👦",
         "py": "Nà gè rén shì wǒ de gēge"
        },
        {
         "txt": "请你先谈吧",
         "ico": "💬",
         "py": "Qǐng nǐ xiān tán ba"
        }
       ],
       "qpy": "Wǒ néng bu néng xiān tán yī tán?"
      },
      {
       "q": "你为什么向他打听这件事？",
       "qvi": "Tại sao bạn hỏi thăm anh ấy chuyện này?",
       "scene": "🧑👂",
       "ans": "因为我想知道他的想法",
       "opts": [
        {
         "txt": "因为这里的水果很贵",
         "ico": "🍎",
         "py": "Yīnwèi zhèlǐ de shuǐguǒ hěn guì"
        },
        {
         "txt": "因为我想知道他的想法",
         "ico": "💡",
         "py": "Yīnwèi wǒ xiǎng zhīdào tā de xiǎngfǎ"
        },
        {
         "txt": "因为我昨天去了医院",
         "ico": "🏥",
         "py": "Yīnwèi wǒ zuótiān qù le yīyuàn"
        }
       ],
       "qpy": "Nǐ wèi shénme xiàng tā dǎting zhè jiàn shì?"
      },
      {
       "q": "他说这个计划不行，他的话表明了什么？",
       "qvi": "Anh ấy nói kế hoạch này không được, lời anh ấy cho thấy điều gì?",
       "scene": "🧑🙅📅",
       "ans": "他的话表明他不同意",
       "opts": [
        {
         "txt": "他的话表明他很满意",
         "ico": "😊",
         "py": "Tā dehuà biǎomíng tā hěn mǎnyì"
        },
        {
         "txt": "他的话表明他想休息",
         "ico": "😴",
         "py": "Tā dehuà biǎomíng tā xiǎng xiūxi"
        },
        {
         "txt": "他的话表明他不同意",
         "ico": "🙅",
         "py": "Tā dehuà biǎomíng tā bù tóngyì"
        }
       ],
       "qpy": "Tā shuō zhè gè jìhuà bùxíng tā dehuà biǎomíng le shénme?"
      },
      {
       "q": "他用手指着哪儿？",
       "qvi": "Anh ấy dùng tay chỉ vào đâu?",
       "scene": "🧑👉🚪",
       "ans": "他用手指着门口",
       "opts": [
        {
         "txt": "他想向老师提问",
         "ico": "🙋",
         "py": "Tā xiǎng xiàng lǎoshī tíwèn"
        },
        {
         "txt": "他用手指着门口",
         "ico": "🚪",
         "py": "Tā yòng shǒu zhǐ zhe ménkǒu"
        },
        {
         "txt": "他想表达自己的想法",
         "ico": "💭",
         "py": "Tā xiǎng biǎodá zìjǐ de xiǎngfǎ"
        }
       ],
       "qpy": "Tā yòng shǒu zhǐ zhe nǎr?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Góp ý trong buổi họp bàn kế hoạch",
      "steps": [
       "<b>Bước 1:</b> Chọn một đề xuất ở công ty (đổi giờ làm, mua đồ mới…) và viết ba câu dự đoán phản ứng của sếp, ví dụ <i>\"经理也许会支持我的主张\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng cuộc trao đổi: xin phép bằng <i>\"我能不能先谈一谈？\"</i>, rồi nêu ý kiến và một điểm bạn muốn nhấn mạnh.",
       "<b>Bước 3:</b> Đóng vai đồng nghiệp phản đối: nói <i>\"也许他们反对我们的计划\"</i> rồi trả lời lại lịch sự, đề xuất cách thay thế."
      ]
     }
    },
    {
     "id": "3.2C",
     "name": "Bài 3.2C: Thông báo, văn bản và email",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏰ 明天 + 🔁 再发 + 📧 一次邮件",
       "🧑 你 + ✅ 可以 + 🔁 再修改 + 📊 一下表格吗？",
       "🙏 请你 + 🔁 再发 + 📄 一份完整的文件"
      ],
      "tip": "Phó từ 再 (zài, tái) đứng trước động từ, chỉ hành động sẽ lặp lại hoặc tiếp tục trong tương lai: 再发一次邮件 (gửi lại một lần nữa). Số lần đặt sau động từ: 再 + động từ + 一次/一份 + danh từ.",
      "vn_tip": "Người Việt hay nhầm 再 với 又 (yòu, hựu). 再 dùng cho việc CHƯA xảy ra (ngày mai gửi lại), còn 又 cho việc ĐÃ lặp lại (hôm qua lại gửi). Đúng: 我明天再发一次邮件, không nói 我明天又发."
     },
     "chunks": [
      {
       "scene": "🧑⏰📧",
       "full": "我明天再发一次邮件",
       "vi": "Ngày mai tôi sẽ gửi email thêm một lần nữa",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "明天再发",
         "ico": "🔁",
         "c": "v",
         "py": "míngtiān zài fā",
         "hv": "minh thiên tái phát"
        },
        {
         "t": "一次邮件",
         "ico": "📧",
         "c": "o",
         "py": "yī cì yóujiàn",
         "hv": "nhất thứ bưu kiện"
        }
       ],
       "traceWord": "邮件",
       "py": "Wǒ míngtiān zài fā yī cì yóujiàn",
       "traceKey": "youjian",
       "traceInfo": [
        {
         "c": "邮",
         "py": "yóu",
         "hv": "bưu"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🧑💾📄",
       "full": "我想再保存一次这个文件",
       "vi": "Tôi muốn lưu tập tin này thêm một lần nữa",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想再保存",
         "ico": "💾",
         "c": "v",
         "py": "xiǎng zài bǎocún",
         "hv": "tưởng tái bảo tồn"
        },
        {
         "t": "一次这个文件",
         "ico": "📄",
         "c": "o",
         "py": "yī cì zhè gè wénjiàn",
         "hv": "nhất thứ giá cá văn kiện"
        }
       ],
       "traceWord": "保存",
       "py": "Wǒ xiǎng zài bǎocún yī cì zhè gè wénjiàn",
       "traceKey": "baocun",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "存",
         "py": "cún",
         "hv": "tồn"
        }
       ]
      },
      {
       "scene": "🧑✏️📊",
       "full": "你可以再修改一下表格吗",
       "vi": "Bạn có thể sửa lại bảng biểu một chút nữa được không?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "可以再修改",
         "ico": "✏️",
         "c": "v",
         "py": "kěyǐ zài xiūgǎi",
         "hv": "khả dĩ tái tu cải"
        },
        {
         "t": "一下表格吗",
         "ico": "📊",
         "c": "o",
         "py": "yī xià biǎogé ma",
         "hv": "nhất hạ biểu cách ma"
        }
       ],
       "traceWord": "修改",
       "py": "Nǐ kěyǐ zài xiūgǎi yī xià biǎogé ma",
       "traceKey": "xiugai",
       "traceInfo": [
        {
         "c": "修",
         "py": "xiū",
         "hv": "tu"
        },
        {
         "c": "改",
         "py": "gǎi",
         "hv": "cải"
        }
       ]
      },
      {
       "scene": "🧑🖨️📋",
       "full": "他想再复印两份记录",
       "vi": "Anh ấy muốn photo thêm hai bản ghi chép",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "想再复印",
         "ico": "🖨️",
         "c": "v",
         "py": "xiǎng zài fùyìn",
         "hv": "tưởng tái phục ấn"
        },
        {
         "t": "两份记录",
         "ico": "📋",
         "c": "o",
         "py": "liǎng fèn jìlù",
         "hv": "lưỡng phần ký lục"
        }
       ],
       "traceWord": "复印",
       "py": "Tā xiǎng zài fùyìn liǎng fèn jìlù",
       "traceKey": "fuyin",
       "traceInfo": [
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        },
        {
         "c": "印",
         "py": "yìn",
         "hv": "ấn"
        }
       ]
      },
      {
       "scene": "🏢📢📃",
       "full": "公司明天再公布一次名单",
       "vi": "Ngày mai công ty sẽ công bố danh sách thêm một lần nữa",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "明天再公布",
         "ico": "📢",
         "c": "v",
         "py": "míngtiān zài gōngbù",
         "hv": "minh thiên tái công bố"
        },
        {
         "t": "一次名单",
         "ico": "📃",
         "c": "o",
         "py": "yī cì míngdān",
         "hv": "nhất thứ danh đơn"
        }
       ],
       "traceWord": "公布",
       "py": "Gōngsī míngtiān zài gōngbù yī cì míngdān",
       "traceKey": "gongbu",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "布",
         "py": "bù",
         "hv": "bố"
        }
       ]
      },
      {
       "scene": "🙏📧📄",
       "full": "请你再发一份完整的文件",
       "vi": "Xin bạn gửi lại một bộ tài liệu đầy đủ",
       "parts": [
        {
         "t": "请你",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nễ"
        },
        {
         "t": "再发",
         "ico": "🔁",
         "c": "v",
         "py": "zài fā",
         "hv": "tái phát"
        },
        {
         "t": "一份完整的文件",
         "ico": "📄",
         "c": "o",
         "py": "yī fèn wánzhěng de wénjiàn",
         "hv": "nhất phần hoàn chỉnh đích văn kiện"
        }
       ],
       "traceWord": "完整",
       "py": "Qǐng nǐ zài fā yī fèn wánzhěng de wénjiàn",
       "traceKey": "wanzheng",
       "traceInfo": [
        {
         "c": "完",
         "py": "wán",
         "hv": "hoàn"
        },
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        }
       ]
      },
      {
       "scene": "🏢🔓🔢",
       "full": "公司下周再公开真实的数字",
       "vi": "Tuần sau công ty sẽ công khai thêm số liệu thực tế",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "下周再公开",
         "ico": "🔓",
         "c": "v",
         "py": "xià zhōu zài gōngkāi",
         "hv": "hạ chu tái công khai"
        },
        {
         "t": "真实的数字",
         "ico": "🔢",
         "c": "o",
         "py": "zhēnshí de shùzì",
         "hv": "chân thực đích số tự"
        }
       ],
       "traceWord": "真实",
       "py": "Gōngsī xià zhōu zài gōngkāi zhēnshí de shùzì",
       "traceKey": "zhenshi",
       "traceInfo": [
        {
         "c": "真",
         "py": "zhēn",
         "hv": "chân"
        },
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        }
       ]
      },
      {
       "scene": "🧑🛒✉️",
       "full": "我想再买一些邮票和信封",
       "vi": "Tôi muốn mua thêm một ít tem và phong bì",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想再买",
         "ico": "🛒",
         "c": "v",
         "py": "xiǎng zài mǎi",
         "hv": "tưởng tái mãi"
        },
        {
         "t": "一些邮票和信封",
         "ico": "✉️",
         "c": "o",
         "py": "yīxiē yóupiào hé xìnfēng",
         "hv": "nhất ta bưu phiếu hòa tín phong"
        }
       ],
       "traceWord": "信封",
       "py": "Wǒ xiǎng zài mǎi yīxiē yóupiào hé xìnfēng",
       "traceKey": "xinfeng",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "封",
         "py": "fēng",
         "hv": "phong"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你什么时候再发电子邮件？",
       "qvi": "Khi nào bạn gửi lại email?",
       "scene": "🧑📧⏰",
       "ans": "下班以后我再发电子邮件",
       "opts": [
        {
         "txt": "下班以后我去商店买面包",
         "ico": "🍞",
         "py": "Xiàbān yǐhòu wǒ qù shāngdiàn mǎi miànbāo"
        },
        {
         "txt": "我昨天在家看了电影",
         "ico": "🎬",
         "py": "Wǒ zuótiān zàijiā kàn le diànyǐng"
        },
        {
         "txt": "下班以后我再发电子邮件",
         "ico": "📧",
         "py": "Xiàbān yǐhòu wǒ zài fā diànzǐ yóujiàn"
        }
       ],
       "qpy": "Nǐ shénme shíhou zài fā diànzǐ yóujiàn?"
      },
      {
       "q": "你的记录在哪儿？",
       "qvi": "Biên bản ghi chép của bạn ở đâu?",
       "scene": "📋💻",
       "ans": "我的记录保存在电脑里",
       "opts": [
        {
         "txt": "我的书包在椅子上",
         "ico": "🎒",
         "py": "Wǒ de shūbāo zài yǐzi shàng"
        },
        {
         "txt": "我的记录保存在电脑里",
         "ico": "💻",
         "py": "Wǒ de jìlù bǎocún zài diànnǎo lǐ"
        },
        {
         "txt": "我的朋友在银行工作",
         "ico": "🏦",
         "py": "Wǒ de péngyou zài yínháng gōngzuò"
        }
       ],
       "qpy": "Nǐ de jìlù zài nǎr?"
      },
      {
       "q": "你有几个邮箱？",
       "qvi": "Bạn có mấy hộp thư?",
       "scene": "🧑📬",
       "ans": "我有两个邮箱",
       "opts": [
        {
         "txt": "我有三个哥哥",
         "ico": "👦",
         "py": "Wǒ yǒu sān gè gēge"
        },
        {
         "txt": "我有一辆新车",
         "ico": "🚗",
         "py": "Wǒ yǒu yī liàng xīn chē"
        },
        {
         "txt": "我有两个邮箱",
         "ico": "📬",
         "py": "Wǒ yǒu liǎng gè yóuxiāng"
        }
       ],
       "qpy": "Nǐ yǒu jǐ gè yóuxiāng?"
      },
      {
       "q": "老师让你们再做什么？",
       "qvi": "Thầy giáo bảo các bạn làm thêm gì?",
       "scene": "👨‍🏫✏️",
       "ans": "老师让我们再修改作文",
       "opts": [
        {
         "txt": "老师让我们明天去公园",
         "ico": "🌳",
         "py": "Lǎoshī ràng wǒmen míngtiān qù gōngyuán"
        },
        {
         "txt": "老师让我们再修改作文",
         "ico": "✏️",
         "py": "Lǎoshī ràng wǒmen zài xiūgǎi zuòwén"
        },
        {
         "txt": "老师让我们在家休息",
         "ico": "🏠",
         "py": "Lǎoshī ràng wǒmen zàijiā xiūxi"
        }
       ],
       "qpy": "Lǎoshī ràng nǐmen zài zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gửi lại tài liệu cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho đồng nghiệp nhờ gửi lại tài liệu: <i>\"请你再发一份完整的文件\"</i>, thêm thời hạn bạn cần.",
       "<b>Bước 2:</b> Viết một email ngắn báo rằng bạn đã nhận được và sẽ sửa bảng biểu, dùng <i>\"我明天再发一次邮件\"</i> để hẹn lần gửi sau.",
       "<b>Bước 3:</b> Tự nói thành tiếng khi gọi điện xác nhận: hỏi <i>\"你可以再修改一下表格吗？\"</i> và nhắc lưu tập tin trước khi gửi."
      ]
     }
    }
   ]
  },
  "3.3": {
   "lessons": [
    {
     "id": "3.3A",
     "name": "Bài 3.3A: Động từ ly hợp (việc làm, cưới hỏi, nghỉ hưu)",
     "grammar": {
      "formulas": [
       "🧑 小明 + ⚡ 报 + 🏢 到",
       "🧑 他们 + ⚡ 结 + 💍 婚",
       "❓ 你 + ⚡ 交费 + 了吗？"
      ],
      "tip": "Động từ ly hợp có cấu trúc động + tân như 报到 (bàodào, báo đáo), 结婚 (jiéhūn, kết hôn), 理发 (lǐfà, lý phát), 退休 (tuìxiū, thoái hưu). Phía sau không thêm tân ngữ nữa; 了, 过 chen vào giữa hoặc đứng sau cả cụm tùy nghĩa.",
      "vn_tip": "Người Việt hay nói sai 结婚她 hoặc 搬家北京. Đúng: 跟她结婚 (kết hôn với cô ấy), 搬到北京 (chuyển nhà đến Bắc Kinh). Đối tượng hoặc nơi chốn phải dẫn bằng giới từ như 跟、在、到 (跟她结婚, 搬到北京), không đặt thẳng sau động từ ly hợp."
     },
     "chunks": [
      {
       "scene": "🧑🏢📋",
       "full": "小明明天去公司报到",
       "vi": "Ngày mai Tiểu Minh đến công ty trình diện",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "明天去",
         "ico": "📅",
         "c": "v",
         "py": "míngtiān qù",
         "hv": "minh thiên khứ"
        },
        {
         "t": "公司报到",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī bàodào",
         "hv": "công ti báo đáo"
        }
       ],
       "traceWord": "报到",
       "py": "Xiǎomíng míngtiān qù gōngsī bàodào",
       "traceKey": "baodao",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑📦🏠",
       "full": "他上个月搬家了",
       "vi": "Tháng trước anh ấy đã chuyển nhà",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "上个月搬家",
         "ico": "📦",
         "c": "v",
         "py": "shàng gè yuè bānjiā",
         "hv": "thượng cá nguyệt ban gia"
        },
        {
         "t": "了",
         "ico": "✅",
         "c": "o",
         "py": "le",
         "hv": "liễu"
        }
       ],
       "traceWord": "搬家",
       "py": "Tā shàng gè yuè bānjiā le",
       "traceKey": "banjia",
       "traceInfo": [
        {
         "c": "搬",
         "py": "bān",
         "hv": "ban"
        },
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        }
       ]
      },
      {
       "scene": "👫💢🗣️",
       "full": "他们昨天又吵架了",
       "vi": "Hôm qua họ lại cãi nhau",
       "parts": [
        {
         "t": "他们",
         "ico": "👫",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "昨天又",
         "ico": "📅",
         "c": "v",
         "py": "zuótiān yòu",
         "hv": "tạc thiên hựu"
        },
        {
         "t": "吵架了",
         "ico": "💢",
         "c": "o",
         "py": "chǎojià le",
         "hv": "sảo giá liễu"
        }
       ],
       "traceWord": "吵架",
       "py": "Tāmen zuótiān yòu chǎojià le",
       "traceKey": "chaojia",
       "traceInfo": [
        {
         "c": "吵",
         "py": "chǎo",
         "hv": "sảo"
        },
        {
         "c": "架",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "👩✈️💡",
       "full": "她很想回国创业",
       "vi": "Cô ấy rất muốn về nước khởi nghiệp",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "很想",
         "ico": "💭",
         "c": "v",
         "py": "hěn xiǎng",
         "hv": "ngận tưởng"
        },
        {
         "t": "回国创业",
         "ico": "🚀",
         "c": "o",
         "py": "huí guó chuàngyè",
         "hv": "hồi quốc sáng nghiệp"
        }
       ],
       "traceWord": "创业",
       "py": "Tā hěn xiǎng huí guó chuàngyè",
       "traceKey": "chuangye",
       "traceInfo": [
        {
         "c": "创",
         "py": "chuàng",
         "hv": "sáng"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      },
      {
       "scene": "👨‍🏫👥💬",
       "full": "老师让我们分组谈话",
       "vi": "Thầy giáo cho chúng tôi chia nhóm trò chuyện",
       "parts": [
        {
         "t": "老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "让我们",
         "ico": "👥",
         "c": "v",
         "py": "ràng wǒmen",
         "hv": "nhượng ngã môn"
        },
        {
         "t": "分组谈话",
         "ico": "💬",
         "c": "o",
         "py": "fēn zǔ tánhuà",
         "hv": "phân tổ đàm thoại"
        }
       ],
       "traceWord": "分组",
       "py": "Lǎoshī ràng wǒmen fēn zǔ tánhuà",
       "traceKey": "fenzu",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "组",
         "py": "zǔ",
         "hv": "tổ"
        }
       ]
      },
      {
       "scene": "👫💍🎉",
       "full": "他们打算明年结婚",
       "vi": "Họ dự định năm sau kết hôn",
       "parts": [
        {
         "t": "他们",
         "ico": "👫",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "打算",
         "ico": "📝",
         "c": "v",
         "py": "dǎsuàn",
         "hv": "đả toán"
        },
        {
         "t": "明年结婚",
         "ico": "💍",
         "c": "o",
         "py": "míngnián jiéhūn",
         "hv": "minh niên kết hôn"
        }
       ],
       "traceWord": "结婚",
       "py": "Tāmen dǎsuàn míngnián jiéhūn",
       "traceKey": "jiehun",
       "traceInfo": [
        {
         "c": "结",
         "py": "jié",
         "hv": "kết"
        },
        {
         "c": "婚",
         "py": "hūn",
         "hv": "hôn"
        }
       ]
      },
      {
       "scene": "🏢💰🧾",
       "full": "请先去办公室交费",
       "vi": "Xin hãy đến văn phòng đóng phí trước",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "先去",
         "ico": "🚶",
         "c": "v",
         "py": "xiān qù",
         "hv": "tiên khứ"
        },
        {
         "t": "办公室交费",
         "ico": "💰",
         "c": "o",
         "py": "bàngōngshì jiāofèi",
         "hv": "biện công thất giao phí"
        }
       ],
       "traceWord": "交费",
       "py": "Qǐng xiān qù bàngōngshì jiāofèi",
       "traceKey": "jiaofei",
       "traceInfo": [
        {
         "c": "交",
         "py": "jiāo",
         "hv": "giao"
        },
        {
         "c": "费",
         "py": "fèi",
         "hv": "phí"
        }
       ]
      },
      {
       "scene": "👴🎂🏡",
       "full": "爸爸六十岁就退休了",
       "vi": "Bố sáu mươi tuổi là nghỉ hưu rồi",
       "parts": [
        {
         "t": "爸爸",
         "ico": "👴",
         "c": "s",
         "py": "bàba",
         "hv": "ba ba"
        },
        {
         "t": "六十岁就",
         "ico": "🎂",
         "c": "v",
         "py": "liù shí suì jiù",
         "hv": "lục thập tuế tựu"
        },
        {
         "t": "退休了",
         "ico": "🏡",
         "c": "o",
         "py": "tuìxiū le",
         "hv": "thoái hưu liễu"
        }
       ],
       "traceWord": "退休",
       "py": "Bàba liù shí suì jiù tuìxiū le",
       "traceKey": "tuixiu",
       "traceInfo": [
        {
         "c": "退",
         "py": "tuì",
         "hv": "thoái"
        },
        {
         "c": "休",
         "py": "xiū",
         "hv": "hưu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么去国外留学？",
       "qvi": "Tại sao bạn đi du học nước ngoài?",
       "scene": "🧑🌍🎓",
       "ans": "因为我想学英语",
       "opts": [
        {
         "txt": "因为我想学英语",
         "ico": "📚",
         "py": "Yīnwèi wǒ xiǎng xué Yīngyǔ"
        },
        {
         "txt": "我明天去理发",
         "ico": "💇",
         "py": "Wǒ míngtiān qù lǐfà"
        },
        {
         "txt": "他们在北京开业",
         "ico": "🏪",
         "py": "Tāmen zài Běijīng kāiyè"
        }
       ],
       "qpy": "Nǐ wèi shénme qù guó wài liúxué?"
      },
      {
       "q": "你想去哪儿就业？",
       "qvi": "Bạn muốn đi làm ở đâu?",
       "scene": "🧑💼🏙️",
       "ans": "我想在北京就业",
       "opts": [
        {
         "txt": "这个地方的通信很方便",
         "ico": "📡",
         "py": "Zhè gè dìfang de tōngxìn hěn fāngbiàn"
        },
        {
         "txt": "我想在北京就业",
         "ico": "🏙️",
         "py": "Wǒ xiǎng zài Běijīng jiùyè"
        },
        {
         "txt": "我们的排名很高",
         "ico": "🏆",
         "py": "Wǒmen de páimíng hěn gāo"
        }
       ],
       "qpy": "Nǐ xiǎng qù nǎr jiùyè?"
      },
      {
       "q": "你们公司什么时候开业？",
       "qvi": "Khi nào công ty các bạn khai trương?",
       "scene": "🏢🎊📅",
       "ans": "下个月一号开业",
       "opts": [
        {
         "txt": "他们去年离婚了",
         "ico": "💔",
         "py": "Tāmen qùnián líhūn le"
        },
        {
         "txt": "我很喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ hěn xǐhuan hē chá"
        },
        {
         "txt": "下个月一号开业",
         "ico": "🎊",
         "py": "Xià gè yuè yī hào kāiyè"
        }
       ],
       "qpy": "Nǐmen gōngsī shénme shíhou kāiyè?"
      },
      {
       "q": "你今天要做什么？",
       "qvi": "Hôm nay bạn định làm gì?",
       "scene": "🧑💇✂️",
       "ans": "我要去理发",
       "opts": [
        {
         "txt": "他们昨天搬家了",
         "ico": "📦",
         "py": "Tāmen zuótiān bānjiā le"
        },
        {
         "txt": "我们已经吃饭了",
         "ico": "🍚",
         "py": "Wǒmen yǐjīng chīfàn le"
        },
        {
         "txt": "我要去理发",
         "ico": "💇",
         "py": "Wǒ yào qù lǐfà"
        }
       ],
       "qpy": "Nǐ jīntiān yào zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Ngày đầu đi làm",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp mới: <i>\"我明天去公司报到\"</i>, hỏi xem cần mang gì.",
       "<b>Bước 2:</b> Hỏi bộ phận nhân sự về phí và thủ tục: <i>\"请问在哪儿交费？\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về kế hoạch năm nay của bạn với các từ ly hợp như <i>\"搬家\"</i>, <i>\"结婚\"</i>, <i>\"创业\"</i>."
      ]
     }
    },
    {
     "id": "3.3B",
     "name": "Bài 3.3B: Năng lực, kinh nghiệm và nghề nghiệp",
     "grammar": {
      "formulas": [
       "🧑 他 + 📈 更 + 💪 有能力",
       "🧑 他 + ➕ 还 + 👍 不错",
       "🧑 她 + ⭐ 非常 + 🎯 好"
      ],
      "tip": "Phó từ mức độ đứng trước tính từ: 很 (rất), 非常 (vô cùng), 更 (gèng, cánh: càng hơn), 还 (hái: khá, tạm được). Câu so sánh: A + 比 + B + 更 + tính từ.",
      "vn_tip": "Người Việt hay nói 很更好 hoặc 比我很高. Đúng: 比我更高 hoặc 很高. Sau 比 không dùng 很; muốn nhấn mạnh thì dùng 更 hoặc 还."
     },
     "chunks": [
      {
       "scene": "👨‍💼🏢👍",
       "full": "他在公司的表现还不错",
       "vi": "Biểu hiện của anh ấy ở công ty cũng khá tốt",
       "parts": [
        {
         "t": "他在公司的表现",
         "ico": "👨‍💼",
         "c": "s",
         "py": "tā zài gōngsī de biǎoxiàn",
         "hv": "tha tại công ti đích biểu hiện"
        },
        {
         "t": "还",
         "ico": "➕",
         "c": "v",
         "py": "hái",
         "hv": "hoàn"
        },
        {
         "t": "不错",
         "ico": "👍",
         "c": "o",
         "py": "bùcuò",
         "hv": "bất thác"
        }
       ],
       "traceWord": "表现",
       "py": "Tā zài gōngsī de biǎoxiàn hái bùcuò",
       "traceKey": "biaoxian",
       "traceInfo": [
        {
         "c": "表",
         "py": "biǎo",
         "hv": "biểu"
        },
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        }
       ]
      },
      {
       "scene": "👩📚💼",
       "full": "她有丰富的工作经历和经验",
       "vi": "Cô ấy có kinh nghiệm và trải nghiệm làm việc phong phú",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "丰富的工作经历和经验",
         "ico": "📚",
         "c": "o",
         "py": "fēngfù de gōngzuò jīnglì hé jīngyàn",
         "hv": "phong phú đích công tác kinh lịch hòa kinh nghiệm"
        }
       ],
       "traceWord": "经验",
       "py": "Tā yǒu fēngfù de gōngzuò jīnglì hé jīngyàn",
       "traceKey": "jingyan",
       "traceInfo": [
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        },
        {
         "c": "验",
         "py": "yàn",
         "hv": "nghiệm"
        }
       ]
      },
      {
       "scene": "🧑💪🆚",
       "full": "小李比我更有能力",
       "vi": "Tiểu Lý có năng lực hơn tôi",
       "parts": [
        {
         "t": "小李",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎolǐ",
         "hv": "tiểu lý"
        },
        {
         "t": "比我更有",
         "ico": "📈",
         "c": "v",
         "py": "bǐ wǒ gèng yǒu",
         "hv": "tỷ ngã cánh hữu"
        },
        {
         "t": "能力",
         "ico": "💪",
         "c": "o",
         "py": "nénglì",
         "hv": "năng lực"
        }
       ],
       "traceWord": "能力",
       "py": "Xiǎolǐ bǐ wǒ gèng yǒu nénglì",
       "traceKey": "nengli",
       "traceInfo": [
        {
         "c": "能",
         "py": "néng",
         "hv": "năng"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      },
      {
       "scene": "🧑🎓📖",
       "full": "这个职业需要专业知识",
       "vi": "Nghề này cần kiến thức chuyên môn",
       "parts": [
        {
         "t": "这个职业",
         "ico": "💼",
         "c": "s",
         "py": "zhè gè zhíyè",
         "hv": "giá cá chức nghiệp"
        },
        {
         "t": "需要",
         "ico": "📌",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "专业知识",
         "ico": "🎓",
         "c": "o",
         "py": "zhuānyè zhīshi",
         "hv": "chuyên nghiệp tri thức"
        }
       ],
       "traceWord": "专业",
       "py": "Zhè gè zhíyè xūyào zhuānyè zhīshi",
       "traceKey": "zhuanye",
       "traceInfo": [
        {
         "c": "专",
         "py": "zhuān",
         "hv": "chuyên"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      },
      {
       "scene": "👨‍🏫🏫📆",
       "full": "他从事教育工作很多年了",
       "vi": "Anh ấy làm công tác giáo dục nhiều năm rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从事",
         "ico": "🛠️",
         "c": "v",
         "py": "cóngshì",
         "hv": "tòng sự"
        },
        {
         "t": "教育工作很多年了",
         "ico": "📆",
         "c": "o",
         "py": "jiàoyù gōngzuò hěn duō nián le",
         "hv": "giáo dục công tác ngận đa niên liễu"
        }
       ],
       "traceWord": "从事",
       "py": "Tā cóngshì jiàoyù gōngzuò hěn duō nián le",
       "traceKey": "congshi",
       "traceInfo": [
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        },
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        }
       ]
      },
      {
       "scene": "🏢🔍🌟",
       "full": "公司更需要有才能的人才",
       "vi": "Công ty càng cần nhân tài có tài năng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "更需要",
         "ico": "📈",
         "c": "v",
         "py": "gèng xūyào",
         "hv": "cánh nhu yếu"
        },
        {
         "t": "有才能的人才",
         "ico": "🌟",
         "c": "o",
         "py": "yǒu cáinéng de réncái",
         "hv": "hữu tài năng đích nhân tài"
        }
       ],
       "traceWord": "人才",
       "py": "Gōngsī gèng xūyào yǒu cáinéng de réncái",
       "traceKey": "rencai",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "才",
         "py": "cái",
         "hv": "tài"
        }
       ]
      },
      {
       "scene": "🧑‍🔧🆕⚡",
       "full": "新职工适应得很快",
       "vi": "Nhân viên mới thích nghi rất nhanh",
       "parts": [
        {
         "t": "新职工",
         "ico": "🧑‍🔧",
         "c": "s",
         "py": "xīn zhígōng",
         "hv": "tân chức công"
        },
        {
         "t": "适应",
         "ico": "🔄",
         "c": "v",
         "py": "shìyìng",
         "hv": "thích ứng"
        },
        {
         "t": "得很快",
         "ico": "⚡",
         "c": "o",
         "py": "de hěn kuài",
         "hv": "đắc ngận khoái"
        }
       ],
       "traceWord": "适应",
       "py": "Xīn zhígōng shìyìng de hěn kuài",
       "traceKey": "shiying",
       "traceInfo": [
        {
         "c": "适",
         "py": "shì",
         "hv": "thích"
        },
        {
         "c": "应",
         "py": "yìng",
         "hv": "ứng"
        }
       ]
      },
      {
       "scene": "🧑📈🏆",
       "full": "他的事业越来越好",
       "vi": "Sự nghiệp của anh ấy ngày càng tốt",
       "parts": [
        {
         "t": "他的事业",
         "ico": "🏆",
         "c": "s",
         "py": "tā de shìyè",
         "hv": "tha đích sự nghiệp"
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
       "traceWord": "事业",
       "py": "Tā de shìyè yuè lái yuè hǎo",
       "traceKey": "shiye",
       "traceInfo": [
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你有什么本事？",
       "qvi": "Bạn có tài gì?",
       "scene": "🧑💪❓",
       "ans": "我会说英语和汉语",
       "opts": [
        {
         "txt": "我们明天去开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān qù kāihuì"
        },
        {
         "txt": "我会说英语和汉语",
         "ico": "🗣️",
         "py": "Wǒ huì shuō Yīngyǔ hé Hànyǔ"
        },
        {
         "txt": "我家有一只猫",
         "ico": "🐱",
         "py": "Wǒ jiā yǒu yī zhǐ māo"
        }
       ],
       "qpy": "Nǐ yǒu shénme běnshi?"
      },
      {
       "q": "他的本领怎么样？",
       "qvi": "Bản lĩnh của anh ấy thế nào?",
       "scene": "👨💪⭐",
       "ans": "他的本领很大",
       "opts": [
        {
         "txt": "他的手机在桌子上",
         "ico": "📱",
         "py": "Tā de shǒujī zài zhuōzi shàng"
        },
        {
         "txt": "他的本领很大",
         "ico": "💪",
         "py": "Tā de běnlǐng hěn dà"
        },
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        }
       ],
       "qpy": "Tā de běnlǐng zěnmeyàng?"
      },
      {
       "q": "你为什么想调到别的公司？",
       "qvi": "Sao bạn muốn chuyển sang công ty khác?",
       "scene": "🧑🔀🏢",
       "ans": "因为我想有更好的事业",
       "opts": [
        {
         "txt": "因为明天下雨",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān xià yǔ"
        },
        {
         "txt": "因为我想有更好的事业",
         "ico": "🏆",
         "py": "Yīnwèi wǒ xiǎng yǒu gèng hǎo de shìyè"
        },
        {
         "txt": "因为我昨天很累",
         "ico": "😴",
         "py": "Yīnwèi wǒ zuótiān hěn lèi"
        }
       ],
       "qpy": "Nǐ wèi shénme xiǎng diào dào biéde gōngsī?"
      },
      {
       "q": "一个好经理需要具有什么？",
       "qvi": "Một quản lý giỏi cần có gì?",
       "scene": "👔📋❓",
       "ans": "需要具有丰富的经验",
       "opts": [
        {
         "txt": "需要买很多东西",
         "ico": "🛒",
         "py": "Xūyào mǎi hěn duō dōngxi"
        },
        {
         "txt": "需要一个大房子",
         "ico": "🏠",
         "py": "Xūyào yī gè dà fángzi"
        },
        {
         "txt": "需要具有丰富的经验",
         "ico": "📚",
         "py": "Xūyào jùyǒu fēngfù de jīngyàn"
        }
       ],
       "qpy": "Yī gè hǎo jīnglǐ xūyào jùyǒu shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phỏng vấn xin việc",
      "steps": [
       "<b>Bước 1:</b> Chuẩn bị giới thiệu bản thân với nhà tuyển dụng: <i>\"我有丰富的工作经验\"</i>.",
       "<b>Bước 2:</b> Nói về điểm mạnh của bạn bằng 3 câu dùng 很, 更, 还, ví dụ <i>\"我的专业知识还不错\"</i>.",
       "<b>Bước 3:</b> Hỏi lại công ty: <i>\"公司更需要什么人才？\"</i> rồi tự trả lời thành tiếng."
      ]
     }
    },
    {
     "id": "3.3C",
     "name": "Bài 3.3C: Lương, thủ tục và giấy tờ",
     "grammar": {
      "formulas": [
       "🧑 我 + 🔹 只 + 📄 带身份证",
       "🧑 他 + ⏰ 年底 + 🔹 才 + 💰 领工资",
       "🧑 我 + 🔹 就 + ✅ 出发"
      ],
      "tip": "Phó từ phạm vi đứng trước động từ: 只 (zhǐ, chỉ) = chỉ có; 就 (jiù, tựu) = là, đã, ngay; 才 (cái, tài) = mãi mới, chỉ khi. 只 giới hạn số lượng; 就 nhấn mạnh sớm hoặc dễ; 才 nhấn mạnh muộn hoặc khó.",
      "vn_tip": "Người Việt hay đặt 只 sau động từ: 我带只身份证. Đúng: 我只带身份证. Còn 就 và 才 đều dịch là \"mới/là\" nên hay nhầm: 十点就到了 (đã đến lúc 10 giờ, sớm) khác 十点才到 (đến tận 10 giờ mới tới, muộn)."
     },
     "chunks": [
      {
       "scene": "🧑🏦📋",
       "full": "我在银行办理手续",
       "vi": "Tôi làm thủ tục ở ngân hàng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在银行办理",
         "ico": "🏦",
         "c": "v",
         "py": "zài yínháng bànlǐ",
         "hv": "tại ngân hàng biện lý"
        },
        {
         "t": "手续",
         "ico": "📋",
         "c": "o",
         "py": "shǒuxù",
         "hv": "thủ tục"
        }
       ],
       "traceWord": "办理",
       "py": "Wǒ zài yínháng bànlǐ shǒuxù",
       "traceKey": "banli",
       "traceInfo": [
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "📋🪪👌",
       "full": "办手续只需要身份证",
       "vi": "Làm thủ tục chỉ cần chứng minh thư",
       "parts": [
        {
         "t": "办手续",
         "ico": "📋",
         "c": "s",
         "py": "bàn shǒuxù",
         "hv": "biện thủ tục"
        },
        {
         "t": "只需要",
         "ico": "☝️",
         "c": "v",
         "py": "zhǐ xūyào",
         "hv": "chỉ nhu yếu"
        },
        {
         "t": "身份证",
         "ico": "🪪",
         "c": "o",
         "py": "shēnfènzhèng",
         "hv": "thân phần chứng"
        }
       ],
       "traceWord": "身份证",
       "py": "Bàn shǒuxù zhǐ xūyào shēnfènzhèng",
       "traceKey": "shenfenzheng",
       "traceInfo": [
        {
         "c": "身",
         "py": "shēn",
         "hv": "thân"
        },
        {
         "c": "份",
         "py": "fèn",
         "hv": "phần"
        },
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        }
       ]
      },
      {
       "scene": "🏢💰📅",
       "full": "我们公司十号才发工资",
       "vi": "Công ty chúng tôi mùng mười mới phát lương",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã môn công ti"
        },
        {
         "t": "十号才发",
         "ico": "📅",
         "c": "v",
         "py": "shí hào cái fā",
         "hv": "thập hiệu tài phát"
        },
        {
         "t": "工资",
         "ico": "💰",
         "c": "o",
         "py": "gōngzī",
         "hv": "công tư"
        }
       ],
       "traceWord": "工资",
       "py": "Wǒmen gōngsī shí hào cái fā gōngzī",
       "traceKey": "gongzi",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "资",
         "py": "zī",
         "hv": "tư"
        }
       ]
      },
      {
       "scene": "🧑🎆💵",
       "full": "他年底才能领到工资",
       "vi": "Cuối năm anh ấy mới nhận được lương",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "年底才能",
         "ico": "🎆",
         "c": "v",
         "py": "niándǐ cáinéng",
         "hv": "niên để tài năng"
        },
        {
         "t": "领到工资",
         "ico": "💵",
         "c": "o",
         "py": "lǐng dào gōngzī",
         "hv": "lĩnh đáo công tư"
        }
       ],
       "traceWord": "领",
       "py": "Tā niándǐ cáinéng lǐng dào gōngzī",
       "traceKey": "ling",
       "traceInfo": [
        {
         "c": "领",
         "py": "lǐng",
         "hv": "lĩnh"
        }
       ]
      },
      {
       "scene": "🎍🏢✅",
       "full": "年初公司批准了我的请假",
       "vi": "Đầu năm công ty đã duyệt đơn xin nghỉ của tôi",
       "parts": [
        {
         "t": "年初",
         "ico": "🎍",
         "c": "s",
         "py": "niánchū",
         "hv": "niên sơ"
        },
        {
         "t": "公司批准了",
         "ico": "✅",
         "c": "v",
         "py": "gōngsī pīzhǔn le",
         "hv": "công ti phê chuẩn liễu"
        },
        {
         "t": "我的请假",
         "ico": "🏖️",
         "c": "o",
         "py": "wǒ de qǐngjià",
         "hv": "ngã đích thỉnh giá"
        }
       ],
       "traceWord": "批准",
       "py": "Niánchū gōngsī pīzhǔn le wǒ de qǐngjià",
       "traceKey": "pizhun",
       "traceInfo": [
        {
         "c": "批",
         "py": "pī",
         "hv": "phê"
        },
        {
         "c": "准",
         "py": "zhǔn",
         "hv": "chuẩn"
        }
       ]
      },
      {
       "scene": "🧑🗂️📎",
       "full": "你要保留好这个证件",
       "vi": "Bạn phải giữ cẩn thận giấy tờ này",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要保留好",
         "ico": "🗂️",
         "c": "v",
         "py": "yào bǎoliú hǎo",
         "hv": "yếu bảo lưu hảo"
        },
        {
         "t": "这个证件",
         "ico": "📎",
         "c": "o",
         "py": "zhè gè zhèngjiàn",
         "hv": "giá cá chứng kiện"
        }
       ],
       "traceWord": "证件",
       "py": "Nǐ yào bǎoliú hǎo zhè gè zhèngjiàn",
       "traceKey": "zhengjian",
       "traceInfo": [
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🚫🎓📝",
       "full": "没有资格证就不能参加考试",
       "vi": "Không có chứng chỉ thì không được dự thi",
       "parts": [
        {
         "t": "没有资格证",
         "ico": "🚫",
         "c": "s",
         "py": "méiyǒu zīgé zhèng",
         "hv": "một hữu tư cách chứng"
        },
        {
         "t": "就不能",
         "ico": "⛔",
         "c": "v",
         "py": "jiù bù néng",
         "hv": "tựu bất năng"
        },
        {
         "t": "参加考试",
         "ico": "📝",
         "c": "o",
         "py": "cānjiā kǎoshì",
         "hv": "tham gia khảo thí"
        }
       ],
       "traceWord": "资格",
       "py": "Méiyǒu zīgé zhèng jiù bù néng cānjiā kǎoshì",
       "traceKey": "zige",
       "traceInfo": [
        {
         "c": "资",
         "py": "zī",
         "hv": "tư"
        },
        {
         "c": "格",
         "py": "gé",
         "hv": "cách"
        }
       ]
      },
      {
       "scene": "⏰✅🚗",
       "full": "时间确定了我们就出发",
       "vi": "Thời gian chốt rồi là chúng ta xuất phát",
       "parts": [
        {
         "t": "时间",
         "ico": "⏰",
         "c": "s",
         "py": "shíjiān",
         "hv": "thời gian"
        },
        {
         "t": "确定了",
         "ico": "✅",
         "c": "v",
         "py": "quèdìng le",
         "hv": "xác định liễu"
        },
        {
         "t": "我们就出发",
         "ico": "🚗",
         "c": "o",
         "py": "wǒmen jiù chūfā",
         "hv": "ngã môn tựu xuất phát"
        }
       ],
       "traceWord": "确定",
       "py": "Shíjiān quèdìng le wǒmen jiù chūfā",
       "traceKey": "queding",
       "traceInfo": [
        {
         "c": "确",
         "py": "què",
         "hv": "xác"
        },
        {
         "c": "定",
         "py": "dìng",
         "hv": "định"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "表格上要写什么？",
       "qvi": "Trong biểu mẫu cần viết gì?",
       "scene": "📄✍️❓",
       "ans": "要写姓名和性别",
       "opts": [
        {
         "txt": "要写今天的天气",
         "ico": "☀️",
         "py": "Yào xiě jīntiān de tiānqì"
        },
        {
         "txt": "要写姓名和性别",
         "ico": "✍️",
         "py": "Yào xiě xìngmíng hé xìngbié"
        },
        {
         "txt": "要写一个好故事",
         "ico": "📖",
         "py": "Yào xiě yī gè hǎo gùshi"
        }
       ],
       "qpy": "Biǎogé shàng yào xiě shénme?"
      },
      {
       "q": "现在有必要去银行吗？",
       "qvi": "Bây giờ có cần đến ngân hàng không?",
       "scene": "🧑🏦🤔",
       "ans": "没有必要",
       "opts": [
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        },
        {
         "txt": "没有必要",
         "ico": "🙅",
         "py": "Méiyǒu bìyào"
        },
        {
         "txt": "他是公司经理",
         "ico": "👔",
         "py": "Tā shì gōngsī jīnglǐ"
        }
       ],
       "qpy": "Xiànzài yǒu bìyào qù yínháng ma?"
      },
      {
       "q": "经理认可你的想法吗？",
       "qvi": "Quản lý có chấp nhận ý tưởng của bạn không?",
       "scene": "👔💡👍",
       "ans": "经理认可我的想法",
       "opts": [
        {
         "txt": "我想去吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xiǎng qù chī miàntiáor"
        },
        {
         "txt": "我们在学校上课",
         "ico": "🏫",
         "py": "Wǒmen zài xuéxiào shàngkè"
        },
        {
         "txt": "经理认可我的想法",
         "ico": "👍",
         "py": "Jīnglǐ rènkě wǒ de xiǎngfǎ"
        }
       ],
       "qpy": "Jīnglǐ rènkě nǐ de xiǎngfǎ ma?"
      },
      {
       "q": "办这个手续要多久？",
       "qvi": "Làm thủ tục này mất bao lâu?",
       "scene": "📋⏳❓",
       "ans": "只要一个小时",
       "opts": [
        {
         "txt": "只要一个小时",
         "ico": "⏳",
         "py": "Zhǐyào yī gè xiǎoshí"
        },
        {
         "txt": "我去过北京",
         "ico": "🏙️",
         "py": "Wǒ qù guò Běijīng"
        },
        {
         "txt": "他喜欢吃米饭",
         "ico": "🍚",
         "py": "Tā xǐhuan chī mǐfàn"
        }
       ],
       "qpy": "Bàn zhè gè shǒuxù yào duōjiǔ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Làm thủ tục và nhận lương",
      "steps": [
       "<b>Bước 1:</b> Gọi điện hỏi bộ phận nhân sự cần giấy tờ gì: <i>\"办手续只需要身份证吗？\"</i>",
       "<b>Bước 2:</b> Hỏi về ngày lương: <i>\"公司几号发工资？\"</i>, rồi nhắc lại bằng 才: <i>\"十号才发工资\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp nhắc giữ giấy tờ: <i>\"你要保留好这个证件\"</i>."
      ]
     }
    }
   ]
  },
  "3.4": {
   "lessons": [
    {
     "id": "3.4A",
     "name": "Bài 3.4A: Hợp tác, liên hệ và đàm phán",
     "grammar": {
      "formulas": [
       "🧑 我们 + ⚡ 互相 + 🤝 信任",
       "🧑 经理 + 💪 亲自 + 📋 参加谈判",
       "🏢 我们 + 🎯 尽量 + 📞 联系"
      ],
      "tip": "Các phó từ phương thức 互相 (hùxiāng, hỗ tương), 相互 (xiānghù, tương hỗ), 尽量 (jǐnliàng, tận lượng), 亲自 (qīnzì, thân tự) luôn đứng TRƯỚC động từ: 互相帮助, 亲自参加, 尽量联系. 互相 = qua lại với nhau, 亲自 = tự mình làm, 尽量 = cố gắng hết sức.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ (nói \"giúp nhau\" thành 帮助互相). Trong tiếng Trung phải đặt trước động từ: 我们互相帮助. Đừng nhầm 亲自 (tự mình đến làm) với 自己 (bản thân)."
     },
     "chunks": [
      {
       "scene": "🤝👥💬",
       "full": "我们互相信任对方",
       "vi": "Chúng tôi tin tưởng lẫn nhau",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "互相信任",
         "ico": "🤝",
         "c": "v",
         "py": "hùxiāng xìnrèn",
         "hv": "hỗ tương tín nhiệm"
        },
        {
         "t": "对方",
         "ico": "🧑",
         "c": "o",
         "py": "duìfāng",
         "hv": "đối phương"
        }
       ],
       "traceWord": "信任",
       "py": "Wǒmen hùxiāng xìnrèn duìfāng",
       "traceKey": "xinren",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "任",
         "py": "rèn",
         "hv": "nhiệm"
        }
       ]
      },
      {
       "scene": "🧑📞🏢",
       "full": "小王亲自联系那家公司",
       "vi": "Tiểu Vương tự mình liên hệ với công ty kia",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "亲自联系",
         "ico": "📞",
         "c": "v",
         "py": "qīnzì liánxì",
         "hv": "thân tự liên hệ"
        },
        {
         "t": "那家公司",
         "ico": "🏢",
         "c": "o",
         "py": "nà jiā gōngsī",
         "hv": "na gia công ti"
        }
       ],
       "traceWord": "亲自",
       "py": "Xiǎowáng qīnzì liánxì nà jiā gōngsī",
       "traceKey": "qinzi",
       "traceInfo": [
        {
         "c": "亲",
         "py": "qīn",
         "hv": "thân"
        },
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "👔💼🗣️",
       "full": "经理亲自参加谈判",
       "vi": "Giám đốc tự mình tham gia đàm phán",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "亲自参加",
         "ico": "🚶",
         "c": "v",
         "py": "qīnzì cānjiā",
         "hv": "thân tự tham gia"
        },
        {
         "t": "谈判",
         "ico": "🗣️",
         "c": "o",
         "py": "tánpàn",
         "hv": "đàm phán"
        }
       ],
       "traceWord": "谈判",
       "py": "Jīnglǐ qīnzì cānjiā tánpàn",
       "traceKey": "tanpan",
       "traceInfo": [
        {
         "c": "谈",
         "py": "tán",
         "hv": "đàm"
        },
        {
         "c": "判",
         "py": "pàn",
         "hv": "phán"
        }
       ]
      },
      {
       "scene": "👥📞💼",
       "full": "我们尽量联系所有同事",
       "vi": "Chúng tôi cố gắng hết sức liên hệ với tất cả đồng nghiệp",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "尽量联系",
         "ico": "📞",
         "c": "v",
         "py": "jǐnliàng liánxì",
         "hv": "tẫn lượng liên hệ"
        },
        {
         "t": "所有同事",
         "ico": "🧑‍💼",
         "c": "o",
         "py": "suǒyǒu tóngshì",
         "hv": "sở hữu đồng sự"
        }
       ],
       "traceWord": "尽量",
       "py": "Wǒmen jǐnliàng liánxì suǒyǒu tóngshì",
       "traceKey": "jinliang",
       "traceInfo": [
        {
         "c": "尽",
         "py": "jǐn",
         "hv": "tẫn"
        },
        {
         "c": "量",
         "py": "liàng",
         "hv": "lượng"
        }
       ]
      },
      {
       "scene": "🏢🏢🤝💰",
       "full": "两家公司尽量合起来做生意",
       "vi": "Hai công ty cố gắng hết sức gộp lại để làm ăn",
       "parts": [
        {
         "t": "两家公司",
         "ico": "🏢",
         "c": "s",
         "py": "liǎng jiā gōngsī",
         "hv": "lưỡng gia công ti"
        },
        {
         "t": "尽量",
         "ico": "💪",
         "c": "v",
         "py": "jǐnliàng",
         "hv": "tẫn lượng"
        },
        {
         "t": "合起来做生意",
         "ico": "💰",
         "c": "o",
         "py": "hé qǐlái zuò shēngyi",
         "hv": "hợp khởi lai tố sinh ý"
        }
       ],
       "traceWord": "生意",
       "py": "Liǎng jiā gōngsī jǐnliàng hé qǐlái zuò shēngyi",
       "traceKey": "shengyi",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "c": "意",
         "py": "yi",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "👔📝🎯",
       "full": "经理和主任亲自确定共同的计划",
       "vi": "Giám đốc và trưởng phòng tự mình xác định kế hoạch chung",
       "parts": [
        {
         "t": "经理和主任",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ hé zhǔrèn",
         "hv": "kinh lý hòa chủ nhiệm"
        },
        {
         "t": "亲自确定",
         "ico": "✍️",
         "c": "v",
         "py": "qīnzì quèdìng",
         "hv": "thân tự xác định"
        },
        {
         "t": "共同的计划",
         "ico": "📝",
         "c": "o",
         "py": "gòngtóng de jìhuà",
         "hv": "cộng đồng đích kế hoạch"
        }
       ],
       "traceWord": "共同",
       "py": "Jīnglǐ hé zhǔrèn qīnzì quèdìng gòngtóng de jìhuà",
       "traceKey": "gongtong",
       "traceInfo": [
        {
         "c": "共",
         "py": "gòng",
         "hv": "cộng"
        },
        {
         "c": "同",
         "py": "tóng",
         "hv": "đồng"
        }
       ]
      },
      {
       "scene": "🧑‍💼🧑‍💼🙋",
       "full": "同事们相互介绍新朋友",
       "vi": "Các đồng nghiệp giới thiệu bạn mới cho nhau",
       "parts": [
        {
         "t": "同事们",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "tóngshì men",
         "hv": "đồng sự môn"
        },
        {
         "t": "相互介绍",
         "ico": "🤝",
         "c": "v",
         "py": "xiānghù jièshào",
         "hv": "tương hỗ giới thiệu"
        },
        {
         "t": "新朋友",
         "ico": "🙋",
         "c": "o",
         "py": "xīn péngyou",
         "hv": "tân bằng hữu"
        }
       ],
       "traceWord": "相互",
       "py": "Tóngshì men xiānghù jièshào xīn péngyou",
       "traceKey": "xianghu",
       "traceInfo": [
        {
         "c": "相",
         "py": "xiāng",
         "hv": "tương"
        },
        {
         "c": "互",
         "py": "hù",
         "hv": "hỗ"
        }
       ]
      },
      {
       "scene": "🤝✅📋",
       "full": "双方互相配合共同完成任务",
       "vi": "Hai bên phối hợp với nhau cùng hoàn thành nhiệm vụ",
       "parts": [
        {
         "t": "双方",
         "ico": "🤝",
         "c": "s",
         "py": "shuāngfāng",
         "hv": "song phương"
        },
        {
         "t": "互相配合",
         "ico": "🔄",
         "c": "v",
         "py": "hùxiāng pèihé",
         "hv": "hỗ tương phối hợp"
        },
        {
         "t": "共同完成任务",
         "ico": "✅",
         "c": "o",
         "py": "gòngtóng wánchéng rènwu",
         "hv": "cộng đồng hoàn thành nhiệm vụ"
        }
       ],
       "traceWord": "配合",
       "py": "Shuāngfāng hùxiāng pèihé gòngtóng wánchéng rènwu",
       "traceKey": "peihe",
       "traceInfo": [
        {
         "c": "配",
         "py": "pèi",
         "hv": "phối"
        },
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们公司和谁合作？",
       "qvi": "Công ty các bạn hợp tác với ai?",
       "scene": "🏢🤝",
       "ans": "我们和北京的公司合作",
       "opts": [
        {
         "txt": "我们明天坐飞机去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān zuò fēijī qù Běijīng"
        },
        {
         "txt": "我们和北京的公司合作",
         "ico": "🤝",
         "py": "Wǒmen hé Běijīng de gōngsī hézuò"
        },
        {
         "txt": "我们在家看电视",
         "ico": "📺",
         "py": "Wǒmen zàijiā kàn diànshì"
        }
       ],
       "qpy": "Nǐmen gōngsī hé shéi hézuò?"
      },
      {
       "q": "公司共有多少个员工？",
       "qvi": "Công ty có tổng cộng bao nhiêu nhân viên?",
       "scene": "🏢👥",
       "ans": "公司共有两百个员工",
       "opts": [
        {
         "txt": "两个公司联合做生意",
         "ico": "💼",
         "py": "Liǎng gè gōngsī liánhé zuò shēngyi"
        },
        {
         "txt": "我在北京工作",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "公司共有两百个员工",
         "ico": "👥",
         "py": "Gōngsī gòngyǒu liǎng bǎi gè yuángōng"
        }
       ],
       "qpy": "Gōngsī gòngyǒu duōshao gè yuángōng?"
      },
      {
       "q": "你信他说的话吗？",
       "qvi": "Bạn có tin lời anh ấy nói không?",
       "scene": "🧑💬",
       "ans": "我信他说的话",
       "opts": [
        {
         "txt": "我信他说的话",
         "ico": "👍",
         "py": "Wǒ xìn tā shuō dehuà"
        },
        {
         "txt": "我不想去电影院",
         "ico": "🎬",
         "py": "Wǒ bù xiǎng qù diànyǐngyuàn"
        },
        {
         "txt": "我今天很忙",
         "ico": "⏰",
         "py": "Wǒ jīntiān hěn máng"
        }
       ],
       "qpy": "Nǐ xìn tā shuō dehuà ma?"
      },
      {
       "q": "你为谁工作？",
       "qvi": "Bạn làm việc cho ai?",
       "scene": "🧑💼",
       "ans": "我为一家北京公司工作",
       "opts": [
        {
         "txt": "我在家里做饭",
         "ico": "🍳",
         "py": "Wǒ zài jiā li zuòfàn"
        },
        {
         "txt": "我们昨天去公园",
         "ico": "🌳",
         "py": "Wǒmen zuótiān qù gōngyuán"
        },
        {
         "txt": "我为一家北京公司工作",
         "ico": "🏢",
         "py": "Wǒ wèi yī jiā Běijīng gōngsī gōngzuò"
        }
       ],
       "qpy": "Nǐ wèi shéi gōngzuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị cuộc đàm phán hợp tác",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng công ty bạn sắp hợp tác với một công ty khác. Nói thành tiếng 3 câu giới thiệu hai bên, ví dụ <i>\"双方互相配合共同完成任务\"</i>.",
       "<b>Bước 2:</b> Nhắn tin (hoặc nói) cho đồng nghiệp: bạn sẽ tự mình liên hệ đối tác và cố gắng hết sức sắp xếp cuộc họp. Dùng <i>\"小王亲自联系那家公司\"</i> và <i>\"我们尽量联系所有同事\"</i> làm mẫu.",
       "<b>Bước 3:</b> Nói với đối tác về sự tin tưởng lẫn nhau: <i>\"我们互相信任对方\"</i>, rồi tự đặt thêm 2 câu với 相互 và 共同."
      ]
     }
    },
    {
     "id": "3.4B",
     "name": "Bài 3.4B: Kinh doanh, thị trường và đầu tư",
     "grammar": {
      "formulas": [
       "🏢 公司 + 🤝 为 + 👤 顾客 + 🛎️ 服务",
       "🧑 他 + 🤝 为 + 🏢 公司 + 💼 经营商店",
       "❓ 你 + 🤝 为 + ❓ 谁 + 💼 工作？"
      ],
      "tip": "Giới từ 为 (wèi, vị) dẫn ra đối tượng được hưởng lợi hoặc phục vụ, đặt TRƯỚC động từ: 为 + đối tượng + động từ, ví dụ 为顾客服务 (phục vụ khách hàng), 为公司工作 (làm việc cho công ty). Đây là 为 đọc thanh 4 (wèi), khác với 为 (wéi) trong 成为.",
      "vn_tip": "Tiếng Việt nói \"làm việc cho công ty\" với \"cho\" đứng sau động từ, nên người học hay viết 工作为公司. Đúng phải là 为公司工作: cụm 为 + đối tượng đứng trước động từ."
     },
     "chunks": [
      {
       "scene": "👥🛍️🆕",
       "full": "我们为顾客开发新商品",
       "vi": "Chúng tôi phát triển hàng hóa mới cho khách hàng",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "为顾客开发",
         "ico": "🛠️",
         "c": "v",
         "py": "wèi gùkè kāifā",
         "hv": "vị cố khách khai phát"
        },
        {
         "t": "新商品",
         "ico": "🛍️",
         "c": "o",
         "py": "xīn shāngpǐn",
         "hv": "tân thương phẩm"
        }
       ],
       "traceWord": "开发",
       "py": "Wǒmen wèi gùkè kāifā xīn shāngpǐn",
       "traceKey": "kaifa",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        }
       ]
      },
      {
       "scene": "🏭🚗🏪",
       "full": "这家公司为市场制造汽车",
       "vi": "Công ty này sản xuất ô tô cho thị trường",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏭",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "为市场制造",
         "ico": "⚙️",
         "c": "v",
         "py": "wèi shìchǎng zhìzào",
         "hv": "vị thị trường chế tạo"
        },
        {
         "t": "汽车",
         "ico": "🚗",
         "c": "o",
         "py": "qìchē",
         "hv": "khí xa"
        }
       ],
       "traceWord": "制造",
       "py": "Zhè jiā gōngsī wèi shìchǎng zhìzào qìchē",
       "traceKey": "zhizao",
       "traceInfo": [
        {
         "c": "制",
         "py": "zhì",
         "hv": "chế"
        },
        {
         "c": "造",
         "py": "zào",
         "hv": "tạo"
        }
       ]
      },
      {
       "scene": "🧑🏢🏪",
       "full": "他为公司经营一家商店",
       "vi": "Anh ấy kinh doanh một cửa hàng cho công ty",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "为公司经营",
         "ico": "💼",
         "c": "v",
         "py": "wèi gōngsī jīngyíng",
         "hv": "vị công ti kinh doanh"
        },
        {
         "t": "一家商店",
         "ico": "🏪",
         "c": "o",
         "py": "yī jiā shāngdiàn",
         "hv": "nhất gia thương điếm"
        }
       ],
       "traceWord": "经营",
       "py": "Tā wèi gōngsī jīngyíng yī jiā shāngdiàn",
       "traceKey": "jingying",
       "traceInfo": [
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        },
        {
         "c": "营",
         "py": "yíng",
         "hv": "doanh"
        }
       ]
      },
      {
       "scene": "👔📊🗣️",
       "full": "经理为我们介绍市场需求",
       "vi": "Giám đốc giới thiệu nhu cầu thị trường cho chúng tôi",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "为我们介绍",
         "ico": "🗣️",
         "c": "v",
         "py": "wèi wǒmen jièshào",
         "hv": "vị ngã môn giới thiệu"
        },
        {
         "t": "市场需求",
         "ico": "📊",
         "c": "o",
         "py": "shìchǎng xūqiú",
         "hv": "thị trường nhu cầu"
        }
       ],
       "traceWord": "需求",
       "py": "Jīnglǐ wèi wǒmen jièshào shìchǎng xūqiú",
       "traceKey": "xuqiu",
       "traceInfo": [
        {
         "c": "需",
         "py": "xū",
         "hv": "nhu"
        },
        {
         "c": "求",
         "py": "qiú",
         "hv": "cầu"
        }
       ]
      },
      {
       "scene": "📦🏢💎",
       "full": "这些东西为公司带来很大价值",
       "vi": "Những món hàng này mang lại giá trị rất lớn cho công ty",
       "parts": [
        {
         "t": "这些东西",
         "ico": "📦",
         "c": "s",
         "py": "zhèxiē dōngxi",
         "hv": "giá ta đông tây"
        },
        {
         "t": "为公司带来",
         "ico": "🏢",
         "c": "v",
         "py": "wèi gōngsī dàilái",
         "hv": "vị công ti đới lai"
        },
        {
         "t": "很大价值",
         "ico": "💎",
         "c": "o",
         "py": "hěn dà jiàzhí",
         "hv": "ngận đại giá trị"
        }
       ],
       "traceWord": "价值",
       "py": "Zhèxiē dōngxi wèi gōngsī dàilái hěn dà jiàzhí",
       "traceKey": "jiazhi",
       "traceInfo": [
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        },
        {
         "c": "值",
         "py": "zhí",
         "hv": "trị"
        }
       ]
      },
      {
       "scene": "👥💰🤝",
       "full": "他们为这次交易准备资金",
       "vi": "Họ chuẩn bị vốn cho giao dịch lần này",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "为这次交易准备",
         "ico": "🤝",
         "c": "v",
         "py": "wèi zhè cì jiāoyì zhǔnbèi",
         "hv": "vị giá thứ giao dị chuẩn bị"
        },
        {
         "t": "资金",
         "ico": "💰",
         "c": "o",
         "py": "zījīn",
         "hv": "tư kim"
        }
       ],
       "traceWord": "资金",
       "py": "Tāmen wèi zhè cì jiāoyì zhǔnbèi zījīn",
       "traceKey": "zijin",
       "traceInfo": [
        {
         "c": "资",
         "py": "zī",
         "hv": "tư"
        },
        {
         "c": "金",
         "py": "jīn",
         "hv": "kim"
        }
       ]
      },
      {
       "scene": "🏙️📈🏢",
       "full": "发达的经济为公司带来优势",
       "vi": "Nền kinh tế phát triển mang lại lợi thế cho công ty",
       "parts": [
        {
         "t": "发达的经济",
         "ico": "🏙️",
         "c": "s",
         "py": "fādá de jīngjì",
         "hv": "phát đạt đích kinh tế"
        },
        {
         "t": "为公司带来",
         "ico": "📈",
         "c": "v",
         "py": "wèi gōngsī dàilái",
         "hv": "vị công ti đới lai"
        },
        {
         "t": "优势",
         "ico": "🏆",
         "c": "o",
         "py": "yōushì",
         "hv": "ưu thế"
        }
       ],
       "traceWord": "发达",
       "py": "Fādá de jīngjì wèi gōngsī dàilái yōushì",
       "traceKey": "fada",
       "traceInfo": [
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        },
        {
         "c": "达",
         "py": "dá",
         "hv": "đạt"
        }
       ]
      },
      {
       "scene": "📢🎯✨",
       "full": "这个广告为商业活动带来好效果",
       "vi": "Quảng cáo này mang lại hiệu quả tốt cho hoạt động kinh doanh",
       "parts": [
        {
         "t": "这个广告",
         "ico": "📢",
         "c": "s",
         "py": "zhè gè guǎnggào",
         "hv": "giá cá quảng cáo"
        },
        {
         "t": "为商业活动带来",
         "ico": "🎪",
         "c": "v",
         "py": "wèi shāngyè huódòng dàilái",
         "hv": "vị thương nghiệp hoạt động đới lai"
        },
        {
         "t": "好效果",
         "ico": "✨",
         "c": "o",
         "py": "hǎo xiàoguǒ",
         "hv": "hảo hiệu quả"
        }
       ],
       "traceWord": "效果",
       "py": "Zhè gè guǎnggào wèi shāngyè huódòng dàilái hǎo xiàoguǒ",
       "traceKey": "xiaoguo",
       "traceInfo": [
        {
         "c": "效",
         "py": "xiào",
         "hv": "hiệu"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个生意怎么样？",
       "qvi": "Việc làm ăn này thế nào?",
       "scene": "💼📈",
       "ans": "这个生意越来越好",
       "opts": [
        {
         "txt": "我们在家里吃饭",
         "ico": "🍚",
         "py": "Wǒmen zài jiā li chīfàn"
        },
        {
         "txt": "这个生意越来越好",
         "ico": "📈",
         "py": "Zhè gè shēngyi yuè lái yuè hǎo"
        },
        {
         "txt": "这个电影非常难看",
         "ico": "🎬",
         "py": "Zhè gè diànyǐng fēicháng nánkàn"
        }
       ],
       "qpy": "Zhè gè shēngyi zěnmeyàng?"
      },
      {
       "q": "公司里女员工的比例是多少？",
       "qvi": "Tỷ lệ nhân viên nữ trong công ty là bao nhiêu?",
       "scene": "🏢👩",
       "ans": "女员工的比例是一半",
       "opts": [
        {
         "txt": "女员工的比例是一半",
         "ico": "👩",
         "py": "Nǚ yuángōng de bǐlì shì yībàn"
        },
        {
         "txt": "公司的电话是六八九",
         "ico": "☎️",
         "py": "Gōngsī de diànhuà shì liù bā jiǔ"
        },
        {
         "txt": "我们明天去上海",
         "ico": "🚄",
         "py": "Wǒmen míngtiān qù Shànghǎi"
        }
       ],
       "qpy": "Gōngsī lǐ nǚ yuángōng de bǐlì shì duōshao?"
      },
      {
       "q": "这家商店经营什么？",
       "qvi": "Cửa hàng này kinh doanh gì?",
       "scene": "🏪❓",
       "ans": "这家商店经营水果和牛奶",
       "opts": [
        {
         "txt": "这家商店在地铁站旁边",
         "ico": "🚇",
         "py": "Zhè jiā shāngdiàn zài dìtiězhàn pángbiān"
        },
        {
         "txt": "我们昨天去了银行",
         "ico": "🏦",
         "py": "Wǒmen zuótiān qù le yínháng"
        },
        {
         "txt": "这家商店经营水果和牛奶",
         "ico": "🍎",
         "py": "Zhè jiā shāngdiàn jīngyíng shuǐguǒ hé niúnǎi"
        }
       ],
       "qpy": "Zhè jiā shāngdiàn jīngyíng shénme?"
      },
      {
       "q": "你为谁买礼物？",
       "qvi": "Bạn mua quà cho ai?",
       "scene": "🧑🎁",
       "ans": "我为妈妈买礼物",
       "opts": [
        {
         "txt": "我在地铁站等朋友",
         "ico": "🚇",
         "py": "Wǒ zài dìtiězhàn děng péngyou"
        },
        {
         "txt": "我为妈妈买礼物",
         "ico": "🎁",
         "py": "Wǒ wèi māma mǎi lǐwù"
        },
        {
         "txt": "他们明天去上海",
         "ico": "🏙️",
         "py": "Tāmen míngtiān qù Shànghǎi"
        }
       ],
       "qpy": "Nǐ wèi shéi mǎi lǐwù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu thị trường cho đối tác",
      "steps": [
       "<b>Bước 1:</b> Chọn một sản phẩm hoặc cửa hàng bạn biết. Nói thành tiếng 3 câu mô tả công ty phục vụ ai, ví dụ <i>\"我们为顾客开发新商品\"</i>.",
       "<b>Bước 2:</b> Giả vờ gọi điện cho đối tác: giải thích nhu cầu thị trường và nguồn vốn, dùng mẫu <i>\"经理为我们介绍市场需求\"</i> và <i>\"他们为这次交易准备资金\"</i>.",
       "<b>Bước 3:</b> Kết thúc bằng lợi thế của công ty: nói 2 câu với cấu trúc 为 + đối tượng + động từ, ví dụ <i>\"发达的经济为公司带来优势\"</i>."
      ]
     }
    },
    {
     "id": "3.4C",
     "name": "Bài 3.4C: Quy định, tiêu chuẩn và bảo đảm",
     "grammar": {
      "formulas": [
       "🏢 我们 + 📏 按照 + 📜 规定 + 🛠️ 办手续",
       "🏢 公司 + 📏 按 + ✅ 标准 + 🔍 检查",
       "❓ 经理 + 📏 按照 + 📋 制度 + ✍️ 批准"
      ],
      "tip": "Giới từ 按 (àn, án) và 按照 (ànzhào, án chiếu) nghĩa là \"theo, dựa theo\", đặt trước động từ: 按照规定办事, 按标准检查. 按照 trang trọng và dùng được với cụm dài hơn; 按 thường đi với danh từ ngắn như 按制度, 按标准.",
      "vn_tip": "Người Việt hay dịch \"theo\" thành 跟 hoặc 根据 lẫn lộn, hoặc đặt cụm sau động từ. Với quy định, tiêu chuẩn, chế độ, dùng 按照 + danh từ + động từ: 按照规定办手续, không nói 办手续按照规定."
     },
     "chunks": [
      {
       "scene": "👥📜📝",
       "full": "我们按照规定办手续",
       "vi": "Chúng tôi làm thủ tục theo quy định",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "按照规定",
         "ico": "📜",
         "c": "v",
         "py": "ànzhào guīdìng",
         "hv": "án chiếu quy định"
        },
        {
         "t": "办手续",
         "ico": "📝",
         "c": "o",
         "py": "bàn shǒuxù",
         "hv": "biện thủ tục"
        }
       ],
       "traceWord": "规定",
       "py": "Wǒmen ànzhào guīdìng bàn shǒuxù",
       "traceKey": "guiding",
       "traceInfo": [
        {
         "c": "规",
         "py": "guī",
         "hv": "quy"
        },
        {
         "c": "定",
         "py": "dìng",
         "hv": "định"
        }
       ]
      },
      {
       "scene": "🏢✅🔍",
       "full": "公司按标准检查商品",
       "vi": "Công ty kiểm tra hàng hóa theo tiêu chuẩn",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "按标准检查",
         "ico": "🔍",
         "c": "v",
         "py": "àn biāozhǔn jiǎnchá",
         "hv": "án tiêu chuẩn kiểm tra"
        },
        {
         "t": "商品",
         "ico": "📦",
         "c": "o",
         "py": "shāngpǐn",
         "hv": "thương phẩm"
        }
       ],
       "traceWord": "标准",
       "py": "Gōngsī àn biāozhǔn jiǎnchá shāngpǐn",
       "traceKey": "biaozhun",
       "traceInfo": [
        {
         "c": "标",
         "py": "biāo",
         "hv": "tiêu"
        },
        {
         "c": "准",
         "py": "zhǔn",
         "hv": "chuẩn"
        }
       ]
      },
      {
       "scene": "👔📋🏖️",
       "full": "经理按制度批准假期",
       "vi": "Giám đốc phê duyệt kỳ nghỉ theo chế độ",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "按制度批准",
         "ico": "✍️",
         "c": "v",
         "py": "àn zhìdù pīzhǔn",
         "hv": "án chế độ phê chuẩn"
        },
        {
         "t": "假期",
         "ico": "🏖️",
         "c": "o",
         "py": "jiàqī",
         "hv": "giá kỳ"
        }
       ],
       "traceWord": "制度",
       "py": "Jīnglǐ àn zhìdù pīzhǔn jiàqī",
       "traceKey": "zhidu",
       "traceInfo": [
        {
         "c": "制",
         "py": "zhì",
         "hv": "chế"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "🏢⚖️💼",
       "full": "公司必须按照合法办法做生意",
       "vi": "Công ty phải làm ăn theo cách hợp pháp",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "必须按照",
         "ico": "⚖️",
         "c": "v",
         "py": "bìxū ànzhào",
         "hv": "tất tu án chiếu"
        },
        {
         "t": "合法办法做生意",
         "ico": "💼",
         "c": "o",
         "py": "héfǎ bànfǎ zuò shēngyi",
         "hv": "hợp pháp biện pháp tố sinh ý"
        }
       ],
       "traceWord": "合法",
       "py": "Gōngsī bìxū ànzhào héfǎ bànfǎ zuò shēngyi",
       "traceKey": "hefa",
       "traceInfo": [
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "👨‍💼🕐📅",
       "full": "老板按照合理的办法安排时间",
       "vi": "Ông chủ sắp xếp thời gian theo cách hợp lý",
       "parts": [
        {
         "t": "老板",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "按照合理的办法",
         "ico": "🧠",
         "c": "v",
         "py": "ànzhào hélǐ de bànfǎ",
         "hv": "án chiếu hợp lý đích biện pháp"
        },
        {
         "t": "安排时间",
         "ico": "📅",
         "c": "o",
         "py": "ānpái shíjiān",
         "hv": "an bài thời gian"
        }
       ],
       "traceWord": "合理",
       "py": "Lǎobǎn ànzhào hélǐ de bànfǎ ānpái shíjiān",
       "traceKey": "heli",
       "traceInfo": [
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "🏢✅🛡️",
       "full": "公司按照标准确保商品安全",
       "vi": "Công ty bảo đảm an toàn hàng hóa theo tiêu chuẩn",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "按照标准",
         "ico": "✅",
         "c": "v",
         "py": "ànzhào biāozhǔn",
         "hv": "án chiếu tiêu chuẩn"
        },
        {
         "t": "确保商品安全",
         "ico": "🛡️",
         "c": "o",
         "py": "quèbǎo shāngpǐn ānquán",
         "hv": "xác bảo thương phẩm an toàn"
        }
       ],
       "traceWord": "确保",
       "py": "Gōngsī ànzhào biāozhǔn quèbǎo shāngpǐn ānquán",
       "traceKey": "quebao",
       "traceInfo": [
        {
         "c": "确",
         "py": "què",
         "hv": "xác"
        },
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        }
       ]
      },
      {
       "scene": "🧑🤞📋",
       "full": "我保证按照要求完成工作",
       "vi": "Tôi đảm bảo hoàn thành công việc theo yêu cầu",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "保证",
         "ico": "🤞",
         "c": "v",
         "py": "bǎozhèng",
         "hv": "bảo chứng"
        },
        {
         "t": "按照要求完成工作",
         "ico": "📋",
         "c": "o",
         "py": "ànzhào yāoqiú wánchéng gōngzuò",
         "hv": "án chiếu yêu cầu hoàn thành công tác"
        }
       ],
       "traceWord": "保证",
       "py": "Wǒ bǎozhèng ànzhào yāoqiú wánchéng gōngzuò",
       "traceKey": "baozheng",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        }
       ]
      },
      {
       "scene": "🏢📜🆕",
       "full": "公司按照相关规定实行新制度",
       "vi": "Công ty thực hiện chế độ mới theo các quy định liên quan",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "按照相关规定",
         "ico": "📜",
         "c": "v",
         "py": "ànzhào xiāngguān guīdìng",
         "hv": "án chiếu tương quan quy định"
        },
        {
         "t": "实行新制度",
         "ico": "🆕",
         "c": "o",
         "py": "shíxíng xīn zhìdù",
         "hv": "thực hành tân chế độ"
        }
       ],
       "traceWord": "实行",
       "py": "Gōngsī ànzhào xiāngguān guīdìng shíxíng xīn zhìdù",
       "traceKey": "shixing",
       "traceInfo": [
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
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
       "q": "这个规定对大家适用吗？",
       "qvi": "Quy định này có áp dụng cho mọi người không?",
       "scene": "📜👥",
       "ans": "这个规定对大家都适用",
       "opts": [
        {
         "txt": "我们明天去开会",
         "ico": "🗓️",
         "py": "Wǒmen míngtiān qù kāihuì"
        },
        {
         "txt": "这个规定对大家都适用",
         "ico": "✅",
         "py": "Zhè gè guīdìng duì dàjiā dōu shìyòng"
        },
        {
         "txt": "他们都不在公司",
         "ico": "🏢",
         "py": "Tāmen dōu bú zài gōngsī"
        }
       ],
       "qpy": "Zhè gè guīdìng duì dàjiā shìyòng ma?"
      },
      {
       "q": "这个办法有效吗？",
       "qvi": "Cách này có hiệu quả không?",
       "scene": "💡❓",
       "ans": "这个办法很有效",
       "opts": [
        {
         "txt": "这个办法很有效",
         "ico": "👍",
         "py": "Zhè gè bànfǎ hěn yǒuxiào"
        },
        {
         "txt": "我想去图书馆",
         "ico": "📚",
         "py": "Wǒ xiǎng qù túshūguǎn"
        },
        {
         "txt": "今天天气很热",
         "ico": "☀️",
         "py": "Jīntiān tiānqì hěn rè"
        }
       ],
       "qpy": "Zhè gè bànfǎ yǒuxiào ma?"
      },
      {
       "q": "这样做对公司有利吗？",
       "qvi": "Làm như vậy có lợi cho công ty không?",
       "scene": "🏢📈",
       "ans": "这样做对公司很有利",
       "opts": [
        {
         "txt": "我在学校学习汉语",
         "ico": "🏫",
         "py": "Wǒ zài xuéxiào xuéxí Hànyǔ"
        },
        {
         "txt": "这样做对公司很有利",
         "ico": "📈",
         "py": "Zhèyàng zuò duì gōngsī hěn yǒulì"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Zhèyàng zuò duì gōngsī yǒulì ma?"
      },
      {
       "q": "谁来制定公司的规范？",
       "qvi": "Ai sẽ soạn ra quy phạm của công ty?",
       "scene": "📋👔",
       "ans": "经理来制定公司的规范",
       "opts": [
        {
         "txt": "妈妈在家做饭",
         "ico": "🍳",
         "py": "Māma zàijiā zuòfàn"
        },
        {
         "txt": "小王去上班了",
         "ico": "🚌",
         "py": "Xiǎowáng qù shàngbān le"
        },
        {
         "txt": "经理来制定公司的规范",
         "ico": "📋",
         "py": "Jīnglǐ lái zhìdìng gōngsī de guīfàn"
        }
       ],
       "qpy": "Shéi lái zhìdìng gōngsī de guīfàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích quy định công ty cho đồng nghiệp mới",
      "steps": [
       "<b>Bước 1:</b> Viết ra 3 quy định hoặc thủ tục có thật ở nơi bạn làm việc (xin nghỉ phép, kiểm tra hàng, nộp báo cáo). Đọc to bằng tiếng Trung theo mẫu <i>\"我们按照规定办手续\"</i>.",
       "<b>Bước 2:</b> Đóng vai người hướng dẫn nhân viên mới: nói về tiêu chuẩn và chế độ, dùng <i>\"公司按标准检查商品\"</i> và <i>\"经理按制度批准假期\"</i>.",
       "<b>Bước 3:</b> Đóng vai nhân viên mới hứa làm đúng quy định: <i>\"我保证按照要求完成工作\"</i>, rồi tự đặt thêm 2 câu với 按照 + 相关规定 hoặc 合理的办法."
      ]
     }
    }
   ]
  },
  "3.5": {
   "lessons": [
    {
     "id": "3.5A",
     "name": "Bài 3.5A: Giá cả, phí tổn và thanh toán",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 一点儿也不 + 💰 喜欢用现金",
       "🏷️ 价格 + 💯 一点儿也不 + 💸 贵",
       "❓ 你 + 想 + 💳 用美元付钱吗？"
      ],
      "tip": "Nhấn mạnh phủ định: 一点儿也不 + tính từ/động từ (yìdiǎnr yě bù, nhất điểm nhi dã bất) = một chút cũng không. Ví dụ 一点儿也不贵 = chẳng đắt chút nào. Trạng từ 也 luôn đứng trước 不.",
      "vn_tip": "Người Việt hay nói 一点儿不贵 hoặc 也一点儿不贵 (thiếu hoặc sai vị trí 也). Đúng là: chủ ngữ + 一点儿也不 + tính từ, cả cụm 一点儿也不 đi liền nhau, ví dụ 价格一点儿也不贵."
     },
     "chunks": [
      {
       "scene": "🏷️💰😊",
       "full": "这个价格一点儿也不贵",
       "vi": "Giá này chẳng đắt chút nào",
       "parts": [
        {
         "t": "这个价格",
         "ico": "🏷️",
         "c": "s",
         "py": "zhè gè jiàgé",
         "hv": "giá cá giá cách"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bú",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "贵",
         "ico": "💸",
         "c": "v",
         "py": "guì",
         "hv": "quý"
        }
       ],
       "traceWord": "价格",
       "py": "Zhè gè jiàgé yīdiǎnr yě bú guì",
       "traceKey": "jiage",
       "traceInfo": [
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        },
        {
         "c": "格",
         "py": "gé",
         "hv": "cách"
        }
       ]
      },
      {
       "scene": "🏪🏷️👍",
       "full": "这家店的价钱一点儿也不便宜",
       "vi": "Giá ở cửa hàng này chẳng rẻ chút nào",
       "parts": [
        {
         "t": "这家店的价钱",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā diàn de jiàqián",
         "hv": "giá gia điếm đích giá tiền"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "便宜",
         "ico": "💲",
         "c": "v",
         "py": "piányi",
         "hv": "tiện nghi"
        }
       ],
       "traceWord": "价钱",
       "py": "Zhè jiā diàn de jiàqián yīdiǎnr yě bù piányi",
       "traceKey": "jiaqian",
       "traceInfo": [
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        },
        {
         "c": "钱",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "👨💵🙅",
       "full": "他一点儿也不喜欢用现金",
       "vi": "Anh ấy chẳng thích dùng tiền mặt chút nào",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "喜欢用现金",
         "ico": "💵",
         "c": "v",
         "py": "xǐhuan yòng xiànjīn",
         "hv": "hỉ hoan dụng hiện kim"
        }
       ],
       "traceWord": "现金",
       "py": "Tā yīdiǎnr yě bù xǐhuan yòng xiànjīn",
       "traceKey": "xianjin",
       "traceInfo": [
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        },
        {
         "c": "金",
         "py": "jīn",
         "hv": "kim"
        }
       ]
      },
      {
       "scene": "🧑💴😟",
       "full": "我的人民币一点儿也不够",
       "vi": "Nhân dân tệ của tôi chẳng đủ chút nào",
       "parts": [
        {
         "t": "我的人民币",
         "ico": "💴",
         "c": "s",
         "py": "wǒ de rénmínbì",
         "hv": "ngã đích nhân dân tệ"
        },
        {
         "t": "一点儿也",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě",
         "hv": "nhất điểm nhi dã"
        },
        {
         "t": "不够",
         "ico": "😟",
         "c": "v",
         "py": "bùgòu",
         "hv": "bất cấu"
        }
       ],
       "traceWord": "人民币",
       "py": "Wǒ de rénmínbì yīdiǎnr yě bùgòu",
       "traceKey": "renminbi",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "民",
         "py": "mín",
         "hv": "dân"
        },
        {
         "c": "币",
         "py": "bì",
         "hv": "tệ"
        }
       ]
      },
      {
       "scene": "🏢🧾📉",
       "full": "这里的费用一点儿也不高",
       "vi": "Chi phí ở đây chẳng cao chút nào",
       "parts": [
        {
         "t": "这里的费用",
         "ico": "🧾",
         "c": "s",
         "py": "zhèlǐ de fèiyong",
         "hv": "giá lý đích phí dụng"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "高",
         "ico": "📈",
         "c": "v",
         "py": "gāo",
         "hv": "cao"
        }
       ],
       "traceWord": "费用",
       "py": "Zhèlǐ de fèiyong yīdiǎnr yě bù gāo",
       "traceKey": "feiyong",
       "traceInfo": [
        {
         "c": "费",
         "py": "fèi",
         "hv": "phí"
        },
        {
         "c": "用",
         "py": "yong",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "🏦💰✅",
       "full": "这家银行存钱一点儿也不收费",
       "vi": "Gửi tiền ở ngân hàng này chẳng thu phí chút nào",
       "parts": [
        {
         "t": "这家银行存钱",
         "ico": "🏦",
         "c": "s",
         "py": "zhè jiā yínháng cún qián",
         "hv": "giá gia ngân hàng tồn tiền"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "收费",
         "ico": "🧾",
         "c": "v",
         "py": "shōufèi",
         "hv": "thu phí"
        }
       ],
       "traceWord": "存",
       "py": "Zhè jiā yínháng cún qián yīdiǎnr yě bù shōufèi",
       "traceKey": "cun",
       "traceInfo": [
        {
         "c": "存",
         "py": "cún",
         "hv": "tồn"
        }
       ]
      },
      {
       "scene": "📱💳😌",
       "full": "用手机支付一点儿也不难",
       "vi": "Thanh toán bằng điện thoại chẳng khó chút nào",
       "parts": [
        {
         "t": "用手机支付",
         "ico": "📱",
         "c": "s",
         "py": "yòng shǒujī zhīfù",
         "hv": "dụng thủ cơ chi phó"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "难",
         "ico": "😌",
         "c": "v",
         "py": "nán",
         "hv": "nan"
        }
       ],
       "traceWord": "支付",
       "py": "Yòng shǒujī zhīfù yīdiǎnr yě bù nán",
       "traceKey": "zhifu",
       "traceInfo": [
        {
         "c": "支",
         "py": "zhī",
         "hv": "chi"
        },
        {
         "c": "付",
         "py": "fù",
         "hv": "phó"
        }
       ]
      },
      {
       "scene": "📖💰🤔",
       "full": "这本书一点儿也不值五十块",
       "vi": "Cuốn sách này chẳng đáng năm mươi tệ chút nào",
       "parts": [
        {
         "t": "这本书",
         "ico": "📖",
         "c": "s",
         "py": "zhè běn shū",
         "hv": "giá bản thư"
        },
        {
         "t": "一点儿也不",
         "ico": "🙅",
         "c": "o",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "值五十块",
         "ico": "💴",
         "c": "v",
         "py": "zhí wǔ shí kuài",
         "hv": "trị ngũ thập khối"
        }
       ],
       "traceWord": "值",
       "py": "Zhè běn shū yīdiǎnr yě bù zhí wǔ shí kuài",
       "traceKey": "zhi",
       "traceInfo": [
        {
         "c": "值",
         "py": "zhí",
         "hv": "trị"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你要买的数量是多少？",
       "qvi": "Số lượng bạn muốn mua là bao nhiêu?",
       "scene": "🛒🔢",
       "ans": "我要买两个",
       "opts": [
        {
         "txt": "停车场要付费",
         "ico": "🅿️",
         "py": "Tíngchēchǎng yào fù fèi"
        },
        {
         "txt": "我要买两个",
         "ico": "2️⃣",
         "py": "Wǒ yào mǎi liǎng gè"
        },
        {
         "txt": "明天会下雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià yǔ"
        }
       ],
       "qpy": "Nǐ yào mǎi de shùliàng shì duōshao?"
      },
      {
       "q": "这个本子多少钱？",
       "qvi": "Quyển vở này bao nhiêu tiền?",
       "scene": "📓💰",
       "ans": "三块五毛",
       "opts": [
        {
         "txt": "三块五毛",
         "ico": "💴",
         "py": "Sān kuài wǔ máo"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "他是我的同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ de tóngxué"
        }
       ],
       "qpy": "Zhè gè běnzi duōshao qián?"
      },
      {
       "q": "你想用美元付钱吗？",
       "qvi": "Bạn muốn trả tiền bằng đô la Mỹ không?",
       "scene": "💵💳",
       "ans": "我想用人民币付",
       "opts": [
        {
         "txt": "他们去北京开会",
         "ico": "🏙️",
         "py": "Tāmen qù Běijīng kāihuì"
        },
        {
         "txt": "今天天气很好",
         "ico": "☀️",
         "py": "Jīntiān tiānqì hěn hǎo"
        },
        {
         "txt": "我想用人民币付",
         "ico": "💴",
         "py": "Wǒ xiǎng yòng rénmínbì fù"
        }
       ],
       "qpy": "Nǐ xiǎng yòng měiyuán fù qián ma?"
      },
      {
       "q": "你今年的消费多不多？",
       "qvi": "Năm nay chi tiêu của bạn có nhiều không?",
       "scene": "🛍️📅",
       "ans": "我的消费不太多",
       "opts": [
        {
         "txt": "她是我们的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        },
        {
         "txt": "我们明天去爬山",
         "ico": "⛰️",
         "py": "Wǒmen míngtiān qù pá shān"
        },
        {
         "txt": "我的消费不太多",
         "ico": "🛍️",
         "py": "Wǒ de xiāofèi bù tài duō"
        }
       ],
       "qpy": "Nǐ jīnnián de xiāofèi duō bù duō?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi giá và chọn cách thanh toán",
      "steps": [
       "<b>Bước 1:</b> Vào một cửa hàng (hoặc tự đóng vai) và hỏi giá: <i>\"这个多少钱？\"</i> Nhận xét giá bằng mẫu mới: <i>\"这个价格一点儿也不贵。\"</i>",
       "<b>Bước 2:</b> Hỏi người bán về phí và cách trả: <i>\"你们的费用高不高？\"</i> rồi nói bạn muốn trả bằng gì: <i>\"我想用手机支付。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về thói quen chi tiêu của bạn với <i>\"一点儿也不……\"</i>, ví dụ: <i>\"用手机支付一点儿也不难。\"</i>"
      ]
     }
    },
    {
     "id": "3.5B",
     "name": "Bài 3.5B: Quần áo, vải vóc và phụ kiện",
     "grammar": {
      "formulas": [
       "🏪 店里 + ⚡ 有的是 + 👗 好看的裙子",
       "🏬 商场里 + ⚡ 有的是 + 👔 漂亮的衬衫",
       "🧑 我哥哥 + ⚡ 有的是 + 🩳 短裤和衬衣"
      ],
      "tip": "Cố định 有的是 (yǒudeshì, hữu đích thị) + danh từ = có rất nhiều. Ví dụ 店里有的是裙子 = trong tiệm có cả đống váy. Không thêm 很多 sau 有的是, và 的 trong 有的是 không phải là trợ từ định ngữ thông thường.",
      "vn_tip": "Người Việt hay dịch \"có rất nhiều\" thành 有很多 hoặc 很有的是 (sai). Dùng 有的是 trực tiếp trước danh từ, không thêm 很: 我有的是时间, không nói 我很有的是时间."
     },
     "chunks": [
      {
       "scene": "🏪👗✨",
       "full": "店里有的是好看的裙子",
       "vi": "Trong tiệm có rất nhiều váy đẹp",
       "parts": [
        {
         "t": "店里",
         "ico": "🏪",
         "c": "s",
         "py": "diàn lǐ",
         "hv": "điếm lý"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "好看的裙子",
         "ico": "👗",
         "c": "o",
         "py": "hǎokàn de qúnzi",
         "hv": "hảo khán đích quần tử"
        }
       ],
       "traceWord": "裙子",
       "py": "Diàn lǐ yǒudeshì hǎokàn de qúnzi",
       "traceKey": "qunzi",
       "traceInfo": [
        {
         "c": "裙",
         "py": "qún",
         "hv": "quần"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🏬👔✨",
       "full": "商场里有的是漂亮的衬衫",
       "vi": "Trong trung tâm thương mại có rất nhiều áo sơ mi đẹp",
       "parts": [
        {
         "t": "商场里",
         "ico": "🏬",
         "c": "s",
         "py": "shāngchǎng lǐ",
         "hv": "thương trường lý"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "漂亮的衬衫",
         "ico": "👔",
         "c": "o",
         "py": "piàoliang de chènshān",
         "hv": "phiêu lượng đích sấn sam"
        }
       ],
       "traceWord": "衬衫",
       "py": "Shāngchǎng lǐ yǒudeshì piàoliang de chènshān",
       "traceKey": "chenshan",
       "traceInfo": [
        {
         "c": "衬",
         "py": "chèn",
         "hv": "sấn"
        },
        {
         "c": "衫",
         "py": "shān",
         "hv": "sam"
        }
       ]
      },
      {
       "scene": "👨🩳👕",
       "full": "我哥哥有的是短裤和衬衣",
       "vi": "Anh trai tôi có rất nhiều quần soóc và áo sơ mi",
       "parts": [
        {
         "t": "我哥哥",
         "ico": "👨",
         "c": "s",
         "py": "wǒ gēge",
         "hv": "ngã ca ca"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "短裤和衬衣",
         "ico": "🩳",
         "c": "o",
         "py": "duǎnkù hé chènyī",
         "hv": "đoản khố hòa sấn y"
        }
       ],
       "traceWord": "短裤",
       "py": "Wǒ gēge yǒudeshì duǎnkù hé chènyī",
       "traceKey": "duanku",
       "traceInfo": [
        {
         "c": "短",
         "py": "duǎn",
         "hv": "đoản"
        },
        {
         "c": "裤",
         "py": "kù",
         "hv": "khố"
        }
       ]
      },
      {
       "scene": "🏪👕🏷️",
       "full": "这家服装店有的是新牌子",
       "vi": "Cửa hàng quần áo này có rất nhiều nhãn hiệu mới",
       "parts": [
        {
         "t": "这家服装店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā fúzhuāng diàn",
         "hv": "giá gia phục trang điếm"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "新牌子",
         "ico": "🏷️",
         "c": "o",
         "py": "xīn páizi",
         "hv": "tân bài tử"
        }
       ],
       "traceWord": "服装",
       "py": "Zhè jiā fúzhuāng diàn yǒudeshì xīn páizi",
       "traceKey": "fuzhuang",
       "traceInfo": [
        {
         "c": "服",
         "py": "fú",
         "hv": "phục"
        },
        {
         "c": "装",
         "py": "zhuāng",
         "hv": "trang"
        }
       ]
      },
      {
       "scene": "👩🏠👜",
       "full": "她的房间里有的是皮包",
       "vi": "Trong phòng cô ấy có rất nhiều túi da",
       "parts": [
        {
         "t": "她的房间里",
         "ico": "🏠",
         "c": "s",
         "py": "tā de fángjiān lǐ",
         "hv": "tha đích phòng gian lý"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "皮包",
         "ico": "👜",
         "c": "o",
         "py": "píbāo",
         "hv": "bì bao"
        }
       ],
       "traceWord": "皮包",
       "py": "Tā de fángjiān lǐ yǒudeshì píbāo",
       "traceKey": "pibao",
       "traceInfo": [
        {
         "c": "皮",
         "py": "pí",
         "hv": "bì"
        },
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        }
       ]
      },
      {
       "scene": "🏪🌈👚",
       "full": "这家店有的是彩色上衣",
       "vi": "Cửa hàng này có rất nhiều áo nhiều màu",
       "parts": [
        {
         "t": "这家店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā diàn",
         "hv": "giá gia điếm"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "彩色上衣",
         "ico": "👚",
         "c": "o",
         "py": "cǎisè shàngyī",
         "hv": "thái sắc thượng y"
        }
       ],
       "traceWord": "上衣",
       "py": "Zhè jiā diàn yǒudeshì cǎisè shàngyī",
       "traceKey": "shangyi",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "衣",
         "py": "yī",
         "hv": "y"
        }
       ]
      },
      {
       "scene": "🏬👔🧑",
       "full": "这里有的是适合你的衣服",
       "vi": "Ở đây có rất nhiều quần áo hợp với bạn",
       "parts": [
        {
         "t": "这里",
         "ico": "🏬",
         "c": "s",
         "py": "zhèlǐ",
         "hv": "giá lý"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "适合你的衣服",
         "ico": "👕",
         "c": "o",
         "py": "shìhé nǐ de yīfu",
         "hv": "thích hợp nễ đích y phục"
        }
       ],
       "traceWord": "适合",
       "py": "Zhèlǐ yǒudeshì shìhé nǐ de yīfu",
       "traceKey": "shihe",
       "traceInfo": [
        {
         "c": "适",
         "py": "shì",
         "hv": "thích"
        },
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        }
       ]
      },
      {
       "scene": "👨👖👌",
       "full": "他有的是不紧的裤子",
       "vi": "Anh ấy có rất nhiều quần không chật",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "有的是",
         "ico": "✋",
         "c": "v",
         "py": "yǒudeshì",
         "hv": "hữu đích thị"
        },
        {
         "t": "不紧的裤子",
         "ico": "👖",
         "c": "o",
         "py": "bù jǐn de kùzi",
         "hv": "bất khẩn đích khố tử"
        }
       ],
       "traceWord": "紧",
       "py": "Tā yǒudeshì bù jǐn de kùzi",
       "traceKey": "jin",
       "traceInfo": [
        {
         "c": "紧",
         "py": "jǐn",
         "hv": "khẩn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你喜欢这个皮包的形状吗？",
       "qvi": "Bạn có thích hình dáng của chiếc túi da này không?",
       "scene": "👜🔷",
       "ans": "我很喜欢",
       "opts": [
        {
         "txt": "我很喜欢",
         "ico": "😍",
         "py": "Wǒ hěn xǐhuan"
        },
        {
         "txt": "他在北京工作",
         "ico": "🏙️",
         "py": "Tā zài Běijīng gōngzuò"
        },
        {
         "txt": "这双鞋的皮很好",
         "ico": "👞",
         "py": "Zhè shuāng xié de pí hěn hǎo"
        }
       ],
       "qpy": "Nǐ xǐhuan zhè gè píbāo de xíngzhuàng ma?"
      },
      {
       "q": "这件衣服坏了怎么办？",
       "qvi": "Cái áo này hỏng rồi thì làm sao?",
       "scene": "👕🧵",
       "ans": "可以补一下",
       "opts": [
        {
         "txt": "我不是医生",
         "ico": "🩺",
         "py": "Wǒ bú shì yīshēng"
        },
        {
         "txt": "可以补一下",
         "ico": "🧵",
         "py": "Kěyǐ bǔ yī xià"
        },
        {
         "txt": "他们在开会",
         "ico": "💼",
         "py": "Tāmen zài kāihuì"
        }
       ],
       "qpy": "Zhè jiàn yīfu huài le zěnme bàn?"
      },
      {
       "q": "你想买哪个牌子？",
       "qvi": "Bạn muốn mua nhãn hiệu nào?",
       "scene": "🏷️🛍️",
       "ans": "我想买这个牌子",
       "opts": [
        {
         "txt": "我昨天去上海了",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Shànghǎi le"
        },
        {
         "txt": "她是我的姐姐",
         "ico": "👩",
         "py": "Tā shì wǒ de jiějie"
        },
        {
         "txt": "我想买这个牌子",
         "ico": "🏷️",
         "py": "Wǒ xiǎng mǎi zhè gè páizi"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi nǎ gè páizi?"
      },
      {
       "q": "这条裙子适合我吗？",
       "qvi": "Chiếc váy này có hợp với tôi không?",
       "scene": "👗🤔",
       "ans": "很适合你",
       "opts": [
        {
         "txt": "我们坐地铁去",
         "ico": "🚇",
         "py": "Wǒmen zuò dìtiě qù"
        },
        {
         "txt": "他不在家",
         "ico": "🏠",
         "py": "Tā bú zàijiā"
        },
        {
         "txt": "很适合你",
         "ico": "👍",
         "py": "Hěn shìhé nǐ"
        }
       ],
       "qpy": "Zhè tiáo qúnzi shìhé wǒ ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua quần áo ở cửa hàng",
      "steps": [
       "<b>Bước 1:</b> Vào một cửa hàng quần áo (hoặc xem trang bán hàng) và nói với bạn đi cùng: <i>\"店里有的是好看的裙子。\"</i> hoặc <i>\"商场里有的是漂亮的衬衫。\"</i>",
       "<b>Bước 2:</b> Hỏi nhân viên về kiểu dáng và nhãn hiệu: <i>\"你们有什么牌子？\"</i>, thử đồ rồi nhận xét: <i>\"这条裤子太紧了。\"</i> hoặc <i>\"这件很适合我。\"</i>",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về tủ đồ của bạn bằng mẫu 有的是, ví dụ: <i>\"我家里有的是皮包。\"</i>"
      ]
     }
    },
    {
     "id": "3.5C",
     "name": "Bài 3.5C: Lượng từ khi mua sắm và đếm đồ vật",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 买了 + 🪑 一把新椅子",
       "🏢 办公室里 + ⚡ 有 + 💻 一张桌子和一台电脑",
       "🧑 我 + ⚡ 给女儿买了 + 👟 一双新鞋"
      ],
      "tip": "Cấu trúc: số từ + lượng từ + danh từ. 把 (bǎ, bả) cho vật có tay cầm như ghế, dao; 张 (zhāng, trương) cho vật phẳng như bàn, giấy; 台 (tái, đài) cho máy móc; 双 (shuāng, song) cho đôi; 只 (zhī, chỉ) cho thú nhỏ; 支 (zhī, chi) cho bút; 束 (shù, thúc) cho bó hoa; 顿 (dùn, đốn) cho bữa ăn; 架 (jià, giá) cho máy bay.",
      "vn_tip": "Người Việt hay dùng 个 cho mọi thứ như tiếng Việt dùng \"cái\". Trong tiếng Trung phải chọn đúng lượng từ: 一把椅子, 一台电脑, 一双鞋, không nói 一个椅子 hay 一个电脑 trong văn viết chuẩn."
     },
     "chunks": [
      {
       "scene": "🧑🪑🛒",
       "full": "他买了一把新椅子",
       "vi": "Anh ấy đã mua một chiếc ghế mới",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "买了",
         "ico": "🛒",
         "c": "v",
         "py": "mǎi le",
         "hv": "mãi liễu"
        },
        {
         "t": "一把新椅子",
         "ico": "🪑",
         "c": "o",
         "py": "yī bǎ xīn yǐzi",
         "hv": "nhất bả tân ỷ tử"
        }
       ],
       "traceWord": "把",
       "py": "Tā mǎi le yī bǎ xīn yǐzi",
       "traceKey": "ba",
       "traceInfo": [
        {
         "c": "把",
         "py": "bǎ",
         "hv": "bả"
        }
       ]
      },
      {
       "scene": "🏢🪵💻",
       "full": "办公室里有一张桌子和一台电脑",
       "vi": "Trong văn phòng có một cái bàn và một chiếc máy tính",
       "parts": [
        {
         "t": "办公室里",
         "ico": "🏢",
         "c": "s",
         "py": "bàngōngshì lǐ",
         "hv": "biện công thất lý"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一张桌子和一台电脑",
         "ico": "💻",
         "c": "o",
         "py": "yī zhāng zhuōzi hé yī tái diànnǎo",
         "hv": "nhất trương trác tử hòa nhất đài điện não"
        }
       ],
       "traceWord": "台",
       "py": "Bàngōngshì lǐ yǒu yī zhāng zhuōzi hé yī tái diànnǎo",
       "traceKey": "tai",
       "traceInfo": [
        {
         "c": "台",
         "py": "tái",
         "hv": "đài"
        }
       ]
      },
      {
       "scene": "🧑👧👟",
       "full": "我给女儿买了一双新鞋",
       "vi": "Tôi đã mua cho con gái một đôi giày mới",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "给女儿买了",
         "ico": "🛍️",
         "c": "v",
         "py": "gěi nǚ'ér mǎi le",
         "hv": "cấp nữ nhi mãi liễu"
        },
        {
         "t": "一双新鞋",
         "ico": "👟",
         "c": "o",
         "py": "yī shuāng xīn xié",
         "hv": "nhất song tân hài"
        }
       ],
       "traceWord": "双",
       "py": "Wǒ gěi nǚ'ér mǎi le yī shuāng xīn xié",
       "traceKey": "shuang",
       "traceInfo": [
        {
         "c": "双",
         "py": "shuāng",
         "hv": "song"
        }
       ]
      },
      {
       "scene": "🌳🐦🧒",
       "full": "公园里有一只小鸟和一群孩子",
       "vi": "Trong công viên có một chú chim nhỏ và một đám trẻ",
       "parts": [
        {
         "t": "公园里",
         "ico": "🌳",
         "c": "s",
         "py": "gōngyuán lǐ",
         "hv": "công viên lý"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一只小鸟和一群孩子",
         "ico": "🐦",
         "c": "o",
         "py": "yī zhǐ xiǎo niǎo hé yī qún háizi",
         "hv": "nhất chỉ tiểu điểu hòa nhất quần hài tử"
        }
       ],
       "traceWord": "群",
       "py": "Gōngyuán lǐ yǒu yī zhǐ xiǎo niǎo hé yī qún háizi",
       "traceKey": "qun",
       "traceInfo": [
        {
         "c": "群",
         "py": "qún",
         "hv": "quần"
        }
       ]
      },
      {
       "scene": "👨💐👩",
       "full": "他送给女朋友一束花",
       "vi": "Anh ấy tặng bạn gái một bó hoa",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "送给",
         "ico": "🎁",
         "c": "v",
         "py": "sòng gěi",
         "hv": "tống cấp"
        },
        {
         "t": "女朋友一束花",
         "ico": "💐",
         "c": "o",
         "py": "nǚpéngyou yī shù huā",
         "hv": "nữ bằng hữu nhất thúc hoa"
        }
       ],
       "traceWord": "束",
       "py": "Tā sòng gěi nǚpéngyou yī shù huā",
       "traceKey": "shu",
       "traceInfo": [
        {
         "c": "束",
         "py": "shù",
         "hv": "thúc"
        }
       ]
      },
      {
       "scene": "🪵🖊️✨",
       "full": "桌子上有一支新笔",
       "vi": "Trên bàn có một cây bút mới",
       "parts": [
        {
         "t": "桌子上",
         "ico": "🪵",
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
         "t": "一支新笔",
         "ico": "🖊️",
         "c": "o",
         "py": "yī zhī xīn bǐ",
         "hv": "nhất chi tân bút"
        }
       ],
       "traceWord": "支",
       "py": "Zhuōzi shàng yǒu yī zhī xīn bǐ",
       "traceKey": "zhi",
       "traceInfo": [
        {
         "c": "支",
         "py": "zhī",
         "hv": "chi"
        }
       ]
      },
      {
       "scene": "👫🍚🍽️",
       "full": "今天中午我们一起吃一顿饭",
       "vi": "Trưa nay chúng ta cùng ăn một bữa cơm",
       "parts": [
        {
         "t": "今天中午我们",
         "ico": "☀️",
         "c": "s",
         "py": "jīntiān zhōngwǔ wǒmen",
         "hv": "kim thiên trung ngọ ngã môn"
        },
        {
         "t": "一起吃",
         "ico": "🍽️",
         "c": "v",
         "py": "yīqǐ chī",
         "hv": "nhất khởi cật"
        },
        {
         "t": "一顿饭",
         "ico": "🍚",
         "c": "o",
         "py": "yī dùn fàn",
         "hv": "nhất đốn phạn"
        }
       ],
       "traceWord": "顿",
       "py": "Jīntiān zhōngwǔ wǒmen yīqǐ chī yī dùn fàn",
       "traceKey": "dun",
       "traceInfo": [
        {
         "c": "顿",
         "py": "dùn",
         "hv": "đốn"
        }
       ]
      },
      {
       "scene": "🛫✈️🏢",
       "full": "机场里有三架飞机",
       "vi": "Trong sân bay có ba chiếc máy bay",
       "parts": [
        {
         "t": "机场里",
         "ico": "🛫",
         "c": "s",
         "py": "jīchǎng lǐ",
         "hv": "cơ trường lý"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三架飞机",
         "ico": "✈️",
         "c": "o",
         "py": "sān jià fēijī",
         "hv": "tam giá phi cơ"
        }
       ],
       "traceWord": "架",
       "py": "Jīchǎng lǐ yǒu sān jià fēijī",
       "traceKey": "jia",
       "traceInfo": [
        {
         "c": "架",
         "py": "jià",
         "hv": "giá"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你昨天看了几部电影？",
       "qvi": "Hôm qua bạn đã xem mấy bộ phim?",
       "scene": "🎬📅",
       "ans": "我看了两部",
       "opts": [
        {
         "txt": "她在商店买东西",
         "ico": "🛍️",
         "py": "Tā zài shāngdiàn mǎi dōngxi"
        },
        {
         "txt": "我看了两部",
         "ico": "🎬",
         "py": "Wǒ kàn le liǎng bù"
        },
        {
         "txt": "我明天去学校",
         "ico": "🏫",
         "py": "Wǒ míngtiān qù xuéxiào"
        }
       ],
       "qpy": "Nǐ zuótiān kàn le jǐ bù diànyǐng?"
      },
      {
       "q": "他在哪所学校学习？",
       "qvi": "Anh ấy học ở trường nào?",
       "scene": "🏫🧑‍🎓",
       "ans": "他在北京学习",
       "opts": [
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "她们都是老师",
         "ico": "👩‍🏫",
         "py": "Tāmen dōu shì lǎoshī"
        },
        {
         "txt": "他在北京学习",
         "ico": "📚",
         "py": "Tā zài Běijīng xuéxí"
        }
       ],
       "qpy": "Tā zài nǎ suǒ xuéxiào xuéxí?"
      },
      {
       "q": "这类东西你要买几种？",
       "qvi": "Loại đồ này bạn muốn mua mấy loại?",
       "scene": "🛒🔢",
       "ans": "我要买两种",
       "opts": [
        {
         "txt": "我要买两种",
         "ico": "2️⃣",
         "py": "Wǒ yào mǎi liǎng zhǒng"
        },
        {
         "txt": "他在医院工作",
         "ico": "🏥",
         "py": "Tā zài yīyuàn gōngzuò"
        },
        {
         "txt": "我们下午开会",
         "ico": "💼",
         "py": "Wǒmen xiàwǔ kāihuì"
        }
       ],
       "qpy": "Zhè lèi dōngxi nǐ yào mǎi jǐ zhǒng?"
      },
      {
       "q": "这一期节目好看吗？",
       "qvi": "Kỳ chương trình này có hay không?",
       "scene": "📺👍",
       "ans": "很好看",
       "opts": [
        {
         "txt": "桌子上有一行字",
         "ico": "📝",
         "py": "Zhuōzi shàng yǒu yī háng zì"
        },
        {
         "txt": "他是我弟弟",
         "ico": "👦",
         "py": "Tā shì wǒ dìdi"
        },
        {
         "txt": "很好看",
         "ico": "😍",
         "py": "Hěn hǎokàn"
        }
       ],
       "qpy": "Zhè yī qī jiémù hǎokàn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua đồ văn phòng và đồ gia dụng",
      "steps": [
       "<b>Bước 1:</b> Lập danh sách mua sắm cho văn phòng hoặc nhà bạn, rồi nói thành tiếng bằng lượng từ đúng: <i>\"我想买一把椅子和一台电脑。\"</i>",
       "<b>Bước 2:</b> Gọi điện hoặc nhắn tin cho đồng nghiệp hỏi ý kiến: <i>\"办公室里有一张桌子，还要买一支笔吗？\"</i> rồi hẹn cùng đi mua.",
       "<b>Bước 3:</b> Tự nói 3 câu mô tả những thứ bạn thấy quanh mình, mỗi câu dùng một lượng từ khác nhau: <i>\"桌子上有一支新笔。\"</i>"
      ]
     }
    }
   ]
  },
  "3.6": {
   "lessons": [
    {
     "id": "3.6A",
     "name": "Bài 3.6A: Đồ uống, vị giác và gia vị",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏰ 常常 + ☕ 喝 + 咖啡",
       "🧑 他 + 🔁 经常 / 老是 / 一直 + 🥤 喝 + 奶茶",
       "❓ 你 + 常常 + 喝 + 什么？"
      ],
      "tip": "Phó từ tần suất đứng TRƯỚC động từ: chủ ngữ + phó từ + động từ + tân ngữ. 常常 (chángcháng, thường thường), 经常 (jīngcháng, kinh thường), 老是 (lǎoshì, lão thị), 一直 (yìzhí, nhất trực) đều chỉ việc lặp lại hoặc kéo dài. Ngoài ra còn 通常 (tōngcháng, thông thường), 往往 (wǎngwǎng, vãng vãng) và 总是 (zǒngshì, tổng thị) với nghĩa tương tự; 老是 hay 总是 thường mang sắc thái than phiền.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ như tiếng Việt (uống thường xuyên cà phê). Tiếng Trung phải nói 我常常喝咖啡, không nói 我喝常常咖啡. Phủ định: 不常喝 (không thường uống), đừng nói 常常不喝 nếu ý là ít khi."
     },
     "chunks": [
      {
       "scene": "🌅☕🧑",
       "full": "我早上常常喝咖啡",
       "vi": "Buổi sáng tôi thường uống cà phê",
       "parts": [
        {
         "t": "我早上",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ zǎoshang",
         "hv": "ngã tảo thượng"
        },
        {
         "t": "常常喝",
         "ico": "🔁",
         "c": "v",
         "py": "chángcháng hē",
         "hv": "thường thường hát"
        },
        {
         "t": "咖啡",
         "ico": "☕",
         "c": "o",
         "py": "kāfēi",
         "hv": "ca phê"
        }
       ],
       "traceWord": "咖啡",
       "py": "Wǒ zǎoshang chángcháng hē kāfēi",
       "traceKey": "kafei",
       "traceInfo": [
        {
         "c": "咖",
         "py": "kā",
         "hv": "ca"
        },
        {
         "c": "啡",
         "py": "fēi",
         "hv": "phê"
        }
       ]
      },
      {
       "scene": "👨🍵🍃",
       "full": "他经常喝红茶不喝绿茶",
       "vi": "Anh ấy thường uống trà đen chứ không uống trà xanh",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "经常喝",
         "ico": "🔁",
         "c": "v",
         "py": "jīngcháng hē",
         "hv": "kinh thường hát"
        },
        {
         "t": "红茶不喝绿茶",
         "ico": "🍵",
         "c": "o",
         "py": "hóngchá bù hē lǜchá",
         "hv": "hồng trà bất hát lục trà"
        }
       ],
       "traceWord": "红茶",
       "py": "Tā jīngcháng hē hóngchá bù hē lǜchá",
       "traceKey": "hongcha",
       "traceInfo": [
        {
         "c": "红",
         "py": "hóng",
         "hv": "hồng"
        },
        {
         "c": "茶",
         "py": "chá",
         "hv": "trà"
        }
       ]
      },
      {
       "scene": "🏢👥🧋",
       "full": "我们公司的人一直喝奶茶",
       "vi": "Người trong công ty chúng tôi lúc nào cũng uống trà sữa",
       "parts": [
        {
         "t": "我们公司的人",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī de rén",
         "hv": "ngã môn công ti đích nhân"
        },
        {
         "t": "一直喝",
         "ico": "♾️",
         "c": "v",
         "py": "yīzhí hē",
         "hv": "nhất trực hát"
        },
        {
         "t": "奶茶",
         "ico": "🧋",
         "c": "o",
         "py": "nǎichá",
         "hv": "nãi trà"
        }
       ],
       "traceWord": "奶茶",
       "py": "Wǒmen gōngsī de rén yīzhí hē nǎichá",
       "traceKey": "naicha",
       "traceInfo": [
        {
         "c": "奶",
         "py": "nǎi",
         "hv": "nãi"
        },
        {
         "c": "茶",
         "py": "chá",
         "hv": "trà"
        }
       ]
      },
      {
       "scene": "🧑🤝🧃",
       "full": "我的朋友常常喝很甜的果汁",
       "vi": "Bạn tôi thường uống nước ép rất ngọt",
       "parts": [
        {
         "t": "我的朋友",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ de péngyou",
         "hv": "ngã đích bằng hữu"
        },
        {
         "t": "常常喝",
         "ico": "🔁",
         "c": "v",
         "py": "chángcháng hē",
         "hv": "thường thường hát"
        },
        {
         "t": "很甜的果汁",
         "ico": "🧃",
         "c": "o",
         "py": "hěn tián de guǒzhī",
         "hv": "ngận điềm đích quả trấp"
        }
       ],
       "traceWord": "果汁",
       "py": "Wǒ de péngyou chángcháng hē hěn tián de guǒzhī",
       "traceKey": "guozhi",
       "traceInfo": [
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        },
        {
         "c": "汁",
         "py": "zhī",
         "hv": "trấp"
        }
       ]
      },
      {
       "scene": "☕🍬😋",
       "full": "他的咖啡里老是放好多糖",
       "vi": "Trong cà phê của anh ấy lúc nào cũng cho rất nhiều đường",
       "parts": [
        {
         "t": "他的咖啡里",
         "ico": "☕",
         "c": "s",
         "py": "tā de kāfēi lǐ",
         "hv": "tha đích ca phê lý"
        },
        {
         "t": "老是放",
         "ico": "🔁",
         "c": "v",
         "py": "lǎoshì fàng",
         "hv": "lão thị phóng"
        },
        {
         "t": "好多糖",
         "ico": "🍬",
         "c": "o",
         "py": "hǎoduō táng",
         "hv": "hảo đa đường"
        }
       ],
       "traceWord": "糖",
       "py": "Tā de kāfēi lǐ lǎoshì fàng hǎoduō táng",
       "traceKey": "tang",
       "traceInfo": [
        {
         "c": "糖",
         "py": "táng",
         "hv": "đường"
        }
       ]
      },
      {
       "scene": "🍚🕐🥤",
       "full": "吃饭的时候我老是喝可乐",
       "vi": "Lúc ăn cơm tôi cứ uống cola mãi",
       "parts": [
        {
         "t": "吃饭的时候我",
         "ico": "🍚",
         "c": "s",
         "py": "chīfàn de shíhou wǒ",
         "hv": "cật phạn đích thời hậu ngã"
        },
        {
         "t": "老是喝",
         "ico": "🔁",
         "c": "v",
         "py": "lǎoshì hē",
         "hv": "lão thị hát"
        },
        {
         "t": "可乐",
         "ico": "🥤",
         "c": "o",
         "py": "kělè",
         "hv": "khả lạc"
        }
       ],
       "traceWord": "可乐",
       "py": "Chīfàn de shíhou wǒ lǎoshì hē kělè",
       "traceKey": "kele",
       "traceInfo": [
        {
         "c": "可",
         "py": "kě",
         "hv": "khả"
        },
        {
         "c": "乐",
         "py": "lè",
         "hv": "lạc"
        }
       ]
      },
      {
       "scene": "🥂👔🍷",
       "full": "他们请客的时候常常喝红酒",
       "vi": "Khi họ mời khách thường uống rượu vang",
       "parts": [
        {
         "t": "他们请客的时候",
         "ico": "🥂",
         "c": "s",
         "py": "tāmen qǐngkè de shíhou",
         "hv": "tha môn thỉnh khách đích thời hậu"
        },
        {
         "t": "常常喝",
         "ico": "🔁",
         "c": "v",
         "py": "chángcháng hē",
         "hv": "thường thường hát"
        },
        {
         "t": "红酒",
         "ico": "🍷",
         "c": "o",
         "py": "hóngjiǔ",
         "hv": "hồng tửu"
        }
       ],
       "traceWord": "红酒",
       "py": "Tāmen qǐngkè de shíhou chángcháng hē hóngjiǔ",
       "traceKey": "hongjiu",
       "traceInfo": [
        {
         "c": "红",
         "py": "hóng",
         "hv": "hồng"
        },
        {
         "c": "酒",
         "py": "jiǔ",
         "hv": "tửu"
        }
       ]
      },
      {
       "scene": "☀️🥵💧",
       "full": "天气很热的时候我常常喝凉水",
       "vi": "Khi trời rất nóng tôi thường uống nước lạnh",
       "parts": [
        {
         "t": "天气很热的时候我",
         "ico": "☀️",
         "c": "s",
         "py": "tiānqì hěn rè de shíhou wǒ",
         "hv": "thiên khí ngận nhiệt đích thời hậu ngã"
        },
        {
         "t": "常常喝",
         "ico": "🔁",
         "c": "v",
         "py": "chángcháng hē",
         "hv": "thường thường hát"
        },
        {
         "t": "凉水",
         "ico": "💧",
         "c": "o",
         "py": "liángshuǐ",
         "hv": "lương thủy"
        }
       ],
       "traceWord": "凉水",
       "py": "Tiānqì hěn rè de shíhou wǒ chángcháng hē liángshuǐ",
       "traceKey": "liangshui",
       "traceInfo": [
        {
         "c": "凉",
         "py": "liáng",
         "hv": "lương"
        },
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "吃饭的时候你常常喝什么？",
       "qvi": "Lúc ăn cơm bạn thường uống gì?",
       "scene": "🍚🥣",
       "ans": "我常常喝汤",
       "opts": [
        {
         "txt": "我常常看电视",
         "ico": "📺",
         "py": "Wǒ chángcháng kàn diànshì"
        },
        {
         "txt": "我常常喝汤",
         "ico": "🥣",
         "py": "Wǒ chángcháng hē tāng"
        },
        {
         "txt": "我常常去学校",
         "ico": "🏫",
         "py": "Wǒ chángcháng qù xuéxiào"
        }
       ],
       "qpy": "Chīfàn de shíhou nǐ chángcháng hē shénme?"
      },
      {
       "q": "医生说什么？",
       "qvi": "Bác sĩ nói gì?",
       "scene": "👨‍⚕️🚬",
       "ans": "医生说烟对身体不好",
       "opts": [
        {
         "txt": "医生说烟对身体不好",
         "ico": "🚬",
         "py": "Yīshēng shuō yān duì shēntǐ bù hǎo"
        },
        {
         "txt": "医生说今天是星期天",
         "ico": "📅",
         "py": "Yīshēng shuō jīntiān shì xīngqītiān"
        },
        {
         "txt": "医生说我家在北京",
         "ico": "🏠",
         "py": "Yīshēng shuō wǒ jiā zài Běijīng"
        }
       ],
       "qpy": "Yīshēng shuō shénme?"
      },
      {
       "q": "吃饭的时候，你用刀还是筷子？",
       "qvi": "Lúc ăn cơm, bạn dùng dao hay đũa?",
       "scene": "🔪🥢",
       "ans": "我常常用筷子",
       "opts": [
        {
         "txt": "我常常去商店",
         "ico": "🏪",
         "py": "Wǒ chángcháng qù shāngdiàn"
        },
        {
         "txt": "我常常在家",
         "ico": "🏠",
         "py": "Wǒ chángcháng zàijiā"
        },
        {
         "txt": "我常常用筷子",
         "ico": "🥢",
         "py": "Wǒ cháng cháng yòng kuàizi"
        }
       ],
       "qpy": "Chīfàn de shíhou nǐ yòng dāo háishi kuàizi?"
      },
      {
       "q": "你喜欢喝啤酒还是可乐？",
       "qvi": "Bạn thích uống bia hay cola?",
       "scene": "🍺🥤",
       "ans": "我喜欢喝啤酒",
       "opts": [
        {
         "txt": "我喜欢看电影",
         "ico": "🎬",
         "py": "Wǒ xǐhuan kàn diànyǐng"
        },
        {
         "txt": "我喜欢喝啤酒",
         "ico": "🍺",
         "py": "Wǒ xǐhuan hē píjiǔ"
        },
        {
         "txt": "我喜欢这本书",
         "ico": "📖",
         "py": "Wǒ xǐhuan zhè běn shū"
        }
       ],
       "qpy": "Nǐ xǐhuan hē píjiǔ háishi kělè?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đồng nghiệp về thói quen uống",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc nói với một đồng nghiệp: <i>\"你常常喝咖啡还是奶茶？\"</i> rồi tự trả lời bằng thói quen của bạn: <i>\"我早上常常喝咖啡。\"</i>",
       "<b>Bước 2:</b> Hỏi thêm về vị: bạn có cho đường không, có thích đồ ngọt không. Dùng <i>\"他的咖啡里老是放好多糖\"</i> để kể về một người bạn biết.",
       "<b>Bước 3:</b> Khi đi ăn với đối tác, hỏi họ uống gì: <i>\"你喜欢喝啤酒还是可乐？\"</i> và nói lại điều họ thường uống bằng 常常 hoặc 经常."
      ]
     }
    },
    {
     "id": "3.6B",
     "name": "Bài 3.6B: Món ăn, trái cây, thịt và dinh dưỡng",
     "grammar": {
      "formulas": [
       "😒 好吃 + 💬 什么啊 + ➡️ 一点儿都不好吃",
       "😒 贵 + 💬 什么啊 + ➡️ 很便宜",
       "❓ 你 + 说 + 什么？"
      ],
      "tip": "Cấu trúc khẩu ngữ X什么（啊）: lặp lại từ người kia vừa nói rồi thêm 什么（啊） để phản bác nhẹ, nghĩa là X gì mà X, đâu có X. Phần sau thường nói rõ thực tế ngược lại. Chữ khóa: 什么 (shénme, thập ma). Chỉ dùng trong khẩu ngữ thân mật, không dùng khi nói với cấp trên một cách trang trọng.",
      "vn_tip": "Người Việt dễ hiểu nhầm 好吃什么啊 là một câu hỏi thật (ngon cái gì?). Thực ra đây là phản bác: nghĩa là không ngon chút nào. Cũng đừng dịch từng chữ thành 什么是好吃."
     },
     "chunks": [
      {
       "scene": "🥬😒🍽️",
       "full": "香什么啊一点儿都不香",
       "vi": "Thơm gì chứ, chẳng thơm chút nào",
       "parts": [
        {
         "t": "香",
         "ico": "👃",
         "c": "s",
         "py": "xiāng",
         "hv": "hương"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "一点儿都不香",
         "ico": "🚫",
         "c": "o",
         "py": "yīdiǎnr dōu bù xiāng",
         "hv": "nhất điểm nhi đô bất hương"
        }
       ],
       "traceWord": "香",
       "py": "Xiāng shénme a yīdiǎnr dōu bù xiāng",
       "traceKey": "xiang",
       "traceInfo": [
        {
         "c": "香",
         "py": "xiāng",
         "hv": "hương"
        }
       ]
      },
      {
       "scene": "🍬😒🏭",
       "full": "营养什么啊这都是加工食品",
       "vi": "Dinh dưỡng gì chứ, đây toàn là thực phẩm chế biến",
       "parts": [
        {
         "t": "营养",
         "ico": "💪",
         "c": "s",
         "py": "yíngyǎng",
         "hv": "doanh dưỡng"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "这都是加工食品",
         "ico": "🏭",
         "c": "o",
         "py": "zhè dōu shì jiāgōng shípǐn",
         "hv": "giá đô thị gia công thực phẩm"
        }
       ],
       "traceWord": "营养",
       "py": "Yíngyǎng shénme a zhè dōu shì jiāgōng shípǐn",
       "traceKey": "yingyang",
       "traceInfo": [
        {
         "c": "营",
         "py": "yíng",
         "hv": "doanh"
        },
        {
         "c": "养",
         "py": "yǎng",
         "hv": "dưỡng"
        }
       ]
      },
      {
       "scene": "🥬😒🥩",
       "full": "好吃什么啊这白菜还是生的",
       "vi": "Ngon gì chứ, cải thảo này vẫn còn sống",
       "parts": [
        {
         "t": "好吃",
         "ico": "😋",
         "c": "s",
         "py": "hǎochī",
         "hv": "hảo cật"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "这白菜还是生的",
         "ico": "🥬",
         "c": "o",
         "py": "zhè báicài háishi shēng de",
         "hv": "giá bạch thái hoàn thị sinh đích"
        }
       ],
       "traceWord": "白菜",
       "py": "Hǎochī shénme a zhè báicài háishi shēng de",
       "traceKey": "baicai",
       "traceInfo": [
        {
         "c": "白",
         "py": "bái",
         "hv": "bạch"
        },
        {
         "c": "菜",
         "py": "cài",
         "hv": "thái"
        }
       ]
      },
      {
       "scene": "🍎💰😒",
       "full": "便宜什么啊苹果一斤要十块",
       "vi": "Rẻ gì chứ, táo một cân tới mười đồng",
       "parts": [
        {
         "t": "便宜",
         "ico": "💲",
         "c": "s",
         "py": "piányi",
         "hv": "tiện nghi"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "苹果一斤要十块",
         "ico": "🍎",
         "c": "o",
         "py": "píngguǒ yī jīn yào shí kuài",
         "hv": "bình quả nhất cân yếu thập khối"
        }
       ],
       "traceWord": "苹果",
       "py": "Piányi shénme a píngguǒ yī jīn yào shí kuài",
       "traceKey": "pingguo",
       "traceInfo": [
        {
         "c": "苹",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      },
      {
       "scene": "🍌⚫😒",
       "full": "好看什么啊香蕉都黑了",
       "vi": "Đẹp gì chứ, chuối đều thâm đen rồi",
       "parts": [
        {
         "t": "好看",
         "ico": "👀",
         "c": "s",
         "py": "hǎokàn",
         "hv": "hảo khán"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "香蕉都黑了",
         "ico": "🍌",
         "c": "o",
         "py": "xiāngjiāo dōu hēi le",
         "hv": "hương tiêu đô hắc liễu"
        }
       ],
       "traceWord": "香蕉",
       "py": "Hǎokàn shénme a xiāngjiāo dōu hēi le",
       "traceKey": "xiangjiao",
       "traceInfo": [
        {
         "c": "香",
         "py": "xiāng",
         "hv": "hương"
        },
        {
         "c": "蕉",
         "py": "jiāo",
         "hv": "tiêu"
        }
       ]
      },
      {
       "scene": "🍚🥩😒",
       "full": "美食什么啊不过是米饭配猪肉",
       "vi": "Món ngon gì chứ, chẳng qua là cơm ăn với thịt heo",
       "parts": [
        {
         "t": "美食",
         "ico": "🍽️",
         "c": "s",
         "py": "měishí",
         "hv": "mỹ thực"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "不过是米饭配猪肉",
         "ico": "🍚",
         "c": "o",
         "py": "bùguò shì mǐfàn pèi zhū ròu",
         "hv": "bất quá thị mễ phạn phối trư nhục"
        }
       ],
       "traceWord": "米饭",
       "py": "Měishí shénme a bùguò shì mǐfàn pèi zhū ròu",
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
       "scene": "🐄🐑💰",
       "full": "贵什么啊牛肉比羊肉还便宜",
       "vi": "Đắt gì chứ, thịt bò còn rẻ hơn thịt cừu",
       "parts": [
        {
         "t": "贵",
         "ico": "💎",
         "c": "s",
         "py": "guì",
         "hv": "quý"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "牛肉比羊肉还便宜",
         "ico": "🐄",
         "c": "o",
         "py": "niú ròu bǐ yáng ròu hái piányi",
         "hv": "ngưu nhục tỷ dương nhục hoàn tiện nghi"
        }
       ],
       "traceWord": "羊",
       "py": "Guì shénme a niú ròu bǐ yáng ròu hái piányi",
       "traceKey": "yang",
       "traceInfo": [
        {
         "c": "羊",
         "py": "yáng",
         "hv": "dương"
        }
       ]
      },
      {
       "scene": "🐖🔥😒",
       "full": "生什么啊这猪肉早就熟了",
       "vi": "Sống gì chứ, thịt heo này chín từ lâu rồi",
       "parts": [
        {
         "t": "生",
         "ico": "🥩",
         "c": "s",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "t": "什么啊",
         "ico": "😒",
         "c": "v",
         "py": "shénme a",
         "hv": "thập ma a"
        },
        {
         "t": "这猪肉早就熟了",
         "ico": "🐖",
         "c": "o",
         "py": "zhè zhū ròu zǎo jiù shú le",
         "hv": "giá trư nhục tảo tựu thục liễu"
        }
       ],
       "traceWord": "猪",
       "py": "Shēng shénme a zhè zhū ròu zǎo jiù shú le",
       "traceKey": "zhu",
       "traceInfo": [
        {
         "c": "猪",
         "py": "zhū",
         "hv": "trư"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你常常吃什么水果？",
       "qvi": "Bạn thường ăn trái cây gì?",
       "scene": "🍎🍌",
       "ans": "我常常吃苹果",
       "opts": [
        {
         "txt": "我常常看电影",
         "ico": "🎬",
         "py": "Wǒ chángcháng kàn diànyǐng"
        },
        {
         "txt": "我常常坐地铁",
         "ico": "🚇",
         "py": "Wǒ chángcháng zuò dìtiě"
        },
        {
         "txt": "我常常吃苹果",
         "ico": "🍎",
         "py": "Wǒ chángcháng chī píngguǒ"
        }
       ],
       "qpy": "Nǐ chángcháng chī shénme shuǐguǒ?"
      },
      {
       "q": "这些食品有营养吗？",
       "qvi": "Những thực phẩm này có dinh dưỡng không?",
       "scene": "🥦💪",
       "ans": "这些食品很有营养",
       "opts": [
        {
         "txt": "这些食品很有营养",
         "ico": "💪",
         "py": "Zhèxiē shípǐn hěn yǒu yíngyǎng"
        },
        {
         "txt": "我明天去上班",
         "ico": "💼",
         "py": "Wǒ míngtiān qù shàngbān"
        },
        {
         "txt": "今天是星期五",
         "ico": "📅",
         "py": "Jīntiān shì xīngqī wǔ"
        }
       ],
       "qpy": "Zhèxiē shípǐn yǒu yíngyǎng ma?"
      },
      {
       "q": "你想吃牛肉还是羊肉？",
       "qvi": "Bạn muốn ăn thịt bò hay thịt cừu?",
       "scene": "🐄🐑",
       "ans": "我想吃羊肉",
       "opts": [
        {
         "txt": "我想吃羊肉",
         "ico": "🐑",
         "py": "Wǒ xiǎng chī yáng ròu"
        },
        {
         "txt": "我想去医院",
         "ico": "🏥",
         "py": "Wǒ xiǎng qù yīyuàn"
        },
        {
         "txt": "我想买一本书",
         "ico": "📖",
         "py": "Wǒ xiǎng mǎi yī běn shū"
        }
       ],
       "qpy": "Nǐ xiǎng chī niú ròu háishi yáng ròu?"
      },
      {
       "q": "这家饭馆的米怎么样？",
       "qvi": "Gạo của quán này thế nào?",
       "scene": "🍚🍽️",
       "ans": "这里的米很香",
       "opts": [
        {
         "txt": "这里的路很长",
         "ico": "🛣️",
         "py": "Zhèlǐ de lù hěn cháng"
        },
        {
         "txt": "这里的米很香",
         "ico": "🍚",
         "py": "Zhèlǐ de mǐ hěn xiāng"
        },
        {
         "txt": "这里的天气很冷",
         "ico": "🥶",
         "py": "Zhèlǐ de tiānqì hěn lěng"
        }
       ],
       "qpy": "Zhè jiā fànguǎn de mǐ zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đi chợ và nói chuyện về thực phẩm",
      "steps": [
       "<b>Bước 1:</b> Khi đi siêu thị hoặc chợ, thấy giá cao hay hàng không tươi, nói thầm hoặc nói với bạn: <i>\"便宜什么啊，苹果一斤要十块！\"</i> để luyện cấu trúc phản bác nhẹ.",
       "<b>Bước 2:</b> Trò chuyện với đồng nghiệp về bữa trưa: hỏi <i>\"你想吃牛肉还是羊肉？\"</i> và nhận xét món ăn bằng một câu như <i>\"营养什么啊，这都是加工食品\"</i>.",
       "<b>Bước 3:</b> Khen món cơm ở quán bạn hay ăn: <i>\"这里的米很香\"</i>, rồi thêm một câu về món bạn thấy không ngon theo mẫu X什么啊."
      ]
     }
    },
    {
     "id": "3.6C",
     "name": "Bài 3.6C: Tiếp khách, chúc mừng và lễ kỷ niệm",
     "grammar": {
      "formulas": [
       "🤝 握手 + 就 + 握手 + 吧",
       "🏠 累 + 就 + 累 + 一点儿 + 吧",
       "🎉 在家庆祝 + 就 + 在家庆祝 + 吧"
      ],
      "tip": "Cấu trúc khẩu ngữ X就X（点儿）吧: lặp lại một từ hoặc cụm X ở hai bên chữ 就, nghĩa là thôi thì cứ X vậy, chấp nhận X và không so đo thêm. Có thể thêm 一点儿 sau X thứ hai để giảm nhẹ, ví dụ 累就累一点儿吧 (lèi jiù lèi yìdiǎnr ba, thôi thì mệt chút vậy). Chữ khóa: 就 (jiù, tựu), 吧 (ba, ba).",
      "vn_tip": "Người Việt hay nói tắt thành 累吧 hoặc dịch thô là cứ mệt đi. Tiếng Trung cần lặp đủ X: 累就累一点儿吧. Đây là câu nhượng bộ, đừng dùng với ý ra lệnh cho cấp trên."
     },
     "chunks": [
      {
       "scene": "🤝👥😊",
       "full": "握手就握手吧大家都是朋友",
       "vi": "Bắt tay thì bắt tay vậy, mọi người đều là bạn mà",
       "parts": [
        {
         "t": "握手",
         "ico": "🤝",
         "c": "s",
         "py": "wòshǒu",
         "hv": "ác thủ"
        },
        {
         "t": "就握手吧",
         "ico": "👌",
         "c": "v",
         "py": "jiù wòshǒu ba",
         "hv": "tựu ác thủ ba"
        },
        {
         "t": "大家都是朋友",
         "ico": "👥",
         "c": "o",
         "py": "dàjiā dōu shì péngyou",
         "hv": "đại gia đô thị bằng hữu"
        }
       ],
       "traceWord": "握手",
       "py": "Wòshǒu jiù wòshǒu ba dàjiā dōu shì péngyou",
       "traceKey": "woshou",
       "traceInfo": [
        {
         "c": "握",
         "py": "wò",
         "hv": "ác"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🏠👋🎁",
       "full": "做客就做客吧不用带礼物",
       "vi": "Đến thăm thì cứ đến thăm vậy, không cần mang quà",
       "parts": [
        {
         "t": "做客",
         "ico": "🏠",
         "c": "s",
         "py": "zuòkè",
         "hv": "tố khách"
        },
        {
         "t": "就做客吧",
         "ico": "👌",
         "c": "v",
         "py": "jiù zuòkè ba",
         "hv": "tựu tố khách ba"
        },
        {
         "t": "不用带礼物",
         "ico": "🎁",
         "c": "o",
         "py": "bùyòng dài lǐwù",
         "hv": "bất dụng đới lễ vật"
        }
       ],
       "traceWord": "做客",
       "py": "Zuòkè jiù zuòkè ba bùyòng dài lǐwù",
       "traceKey": "zuoke",
       "traceInfo": [
        {
         "c": "做",
         "py": "zuò",
         "hv": "tố"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "👋🌆📅",
       "full": "告别就告别吧明天还能见面",
       "vi": "Chia tay thì chia tay vậy, mai vẫn gặp lại được",
       "parts": [
        {
         "t": "告别",
         "ico": "👋",
         "c": "s",
         "py": "gàobié",
         "hv": "cáo biệt"
        },
        {
         "t": "就告别吧",
         "ico": "👌",
         "c": "v",
         "py": "jiù gàobié ba",
         "hv": "tựu cáo biệt ba"
        },
        {
         "t": "明天还能见面",
         "ico": "📅",
         "c": "o",
         "py": "míngtiān hái néng jiànmiàn",
         "hv": "minh thiên hoàn năng kiến diện"
        }
       ],
       "traceWord": "告别",
       "py": "Gàobié jiù gàobié ba míngtiān hái néng jiànmiàn",
       "traceKey": "gaobie",
       "traceInfo": [
        {
         "c": "告",
         "py": "gào",
         "hv": "cáo"
        },
        {
         "c": "别",
         "py": "bié",
         "hv": "biệt"
        }
       ]
      },
      {
       "scene": "🧑‍💼🏢😓",
       "full": "接待客人累就累一点儿吧",
       "vi": "Tiếp khách mệt thì mệt chút vậy",
       "parts": [
        {
         "t": "接待客人",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "jiēdài kèrén",
         "hv": "tiếp đãi khách nhân"
        },
        {
         "t": "累",
         "ico": "😓",
         "c": "v",
         "py": "lèi",
         "hv": "lụy"
        },
        {
         "t": "就累一点儿吧",
         "ico": "👌",
         "c": "o",
         "py": "jiù lèi yīdiǎnr ba",
         "hv": "tựu lụy nhất điểm nhi ba"
        }
       ],
       "traceWord": "接待",
       "py": "Jiēdài kèrén lèi jiù lèi yīdiǎnr ba",
       "traceKey": "jiedai",
       "traceInfo": [
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        },
        {
         "c": "待",
         "py": "dài",
         "hv": "đãi"
        }
       ]
      },
      {
       "scene": "🧑‍💼😊🙇",
       "full": "对客人亲切就亲切一点儿吧",
       "vi": "Đối với khách thì thân thiện thêm chút vậy",
       "parts": [
        {
         "t": "对客人",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "duì kèrén",
         "hv": "đối khách nhân"
        },
        {
         "t": "亲切",
         "ico": "😊",
         "c": "v",
         "py": "qīnqiè",
         "hv": "thân thiết"
        },
        {
         "t": "就亲切一点儿吧",
         "ico": "👌",
         "c": "o",
         "py": "jiù qīnqiè yīdiǎnr ba",
         "hv": "tựu thân thiết nhất điểm nhi ba"
        }
       ],
       "traceWord": "亲切",
       "py": "Duì kèrén qīnqiè jiù qīnqiè yīdiǎnr ba",
       "traceKey": "qinqie",
       "traceInfo": [
        {
         "c": "亲",
         "py": "qīn",
         "hv": "thân"
        },
        {
         "c": "切",
         "py": "qiè",
         "hv": "thiết"
        }
       ]
      },
      {
       "scene": "✈️🎊👥",
       "full": "迎接客人热烈就热烈一点儿吧",
       "vi": "Đón khách thì nhiệt tình thêm chút vậy",
       "parts": [
        {
         "t": "迎接客人",
         "ico": "🎊",
         "c": "s",
         "py": "yíngjiē kèrén",
         "hv": "nghênh tiếp khách nhân"
        },
        {
         "t": "热烈",
         "ico": "🔥",
         "c": "v",
         "py": "rèliè",
         "hv": "nhiệt liệt"
        },
        {
         "t": "就热烈一点儿吧",
         "ico": "👌",
         "c": "o",
         "py": "jiù rèliè yīdiǎnr ba",
         "hv": "tựu nhiệt liệt nhất điểm nhi ba"
        }
       ],
       "traceWord": "迎接",
       "py": "Yíngjiē kèrén rèliè jiù rèliè yīdiǎnr ba",
       "traceKey": "yingjie",
       "traceInfo": [
        {
         "c": "迎",
         "py": "yíng",
         "hv": "nghênh"
        },
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        }
       ]
      },
      {
       "scene": "🏠🎆🥂",
       "full": "国庆节在家庆祝就在家庆祝吧",
       "vi": "Quốc khánh ăn mừng ở nhà thì cứ ở nhà vậy",
       "parts": [
        {
         "t": "国庆节",
         "ico": "🎆",
         "c": "s",
         "py": "guóqìng jié",
         "hv": "quốc khánh tiết"
        },
        {
         "t": "在家庆祝",
         "ico": "🏠",
         "c": "v",
         "py": "zàijiā qìngzhù",
         "hv": "tại gia khánh chúc"
        },
        {
         "t": "就在家庆祝吧",
         "ico": "👌",
         "c": "o",
         "py": "jiù zàijiā qìngzhù ba",
         "hv": "tựu tại gia khánh chúc ba"
        }
       ],
       "traceWord": "庆祝",
       "py": "Guóqìng jié zàijiā qìngzhù jiù zàijiā qìngzhù ba",
       "traceKey": "qingzhu",
       "traceInfo": [
        {
         "c": "庆",
         "py": "qìng",
         "hv": "khánh"
        },
        {
         "c": "祝",
         "py": "zhù",
         "hv": "chúc"
        }
       ]
      },
      {
       "scene": "💑📅🎁",
       "full": "今天是纪念日买就买一点儿礼物吧",
       "vi": "Hôm nay là ngày kỷ niệm, mua thì mua chút quà vậy",
       "parts": [
        {
         "t": "今天",
         "ico": "📅",
         "c": "s",
         "py": "jīntiān",
         "hv": "kim thiên"
        },
        {
         "t": "是纪念日",
         "ico": "💑",
         "c": "v",
         "py": "shì jìniàn rì",
         "hv": "thị kỷ niệm nhật"
        },
        {
         "t": "买就买一点儿礼物吧",
         "ico": "🎁",
         "c": "o",
         "py": "mǎi jiù mǎi yīdiǎnr lǐwù ba",
         "hv": "mãi tựu mãi nhất điểm nhi lễ vật ba"
        }
       ],
       "traceWord": "纪念",
       "py": "Jīntiān shì jìniàn rì mǎi jiù mǎi yīdiǎnr lǐwù ba",
       "traceKey": "jinian",
       "traceInfo": [
        {
         "c": "纪",
         "py": "jì",
         "hv": "kỷ"
        },
        {
         "c": "念",
         "py": "niàn",
         "hv": "niệm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "新年到了，你想对朋友说什么？",
       "qvi": "Năm mới đến rồi, bạn muốn nói gì với bạn bè?",
       "scene": "🎊🧑‍🤝‍🧑",
       "ans": "祝你幸福",
       "opts": [
        {
         "txt": "我昨天没有上班",
         "ico": "💼",
         "py": "Wǒ zuótiān méiyǒu shàngbān"
        },
        {
         "txt": "请问银行在哪儿",
         "ico": "🏦",
         "py": "Qǐngwèn yínháng zài nǎr"
        },
        {
         "txt": "祝你幸福",
         "ico": "💐",
         "py": "Zhù nǐ xìngfú"
        }
       ],
       "qpy": "Xīnnián dào le nǐ xiǎng duì péngyou shuō shénme?"
      },
      {
       "q": "春节的时候，门上有什么字？",
       "qvi": "Dịp Tết, trên cửa có chữ gì?",
       "scene": "🧧🚪",
       "ans": "门上有红色的福字",
       "opts": [
        {
         "txt": "门上有一只大狗",
         "ico": "🐕",
         "py": "Mén shàng yǒu yī zhǐ dà gǒu"
        },
        {
         "txt": "门上有红色的福字",
         "ico": "🧧",
         "py": "Mén shàng yǒu hóngsè de fú zì"
        },
        {
         "txt": "门上有三辆汽车",
         "ico": "🚗",
         "py": "Mén shàng yǒu sān liàng qìchē"
        }
       ],
       "qpy": "Chūnjié de shíhou mén shàng yǒu shénme zì?"
      },
      {
       "q": "你拿到了音乐会的票，觉得怎么样？",
       "qvi": "Bạn có vé buổi hòa nhạc, cảm thấy thế nào?",
       "scene": "🎫🎶",
       "ans": "我觉得自己很幸运",
       "opts": [
        {
         "txt": "我觉得那本书很贵",
         "ico": "📚",
         "py": "Wǒ juéde nà běn shū hěn guì"
        },
        {
         "txt": "我觉得自己很幸运",
         "ico": "🍀",
         "py": "Wǒ juéde zìjǐ hěn xìngyùn"
        },
        {
         "txt": "我觉得汽车太小了",
         "ico": "🚗",
         "py": "Wǒ juéde qìchē tài xiǎo le"
        }
       ],
       "qpy": "Nǐ nádào le yīnyuèhuì de piào juéde zěnmeyàng?"
      },
      {
       "q": "国庆节的晚会怎么样？",
       "qvi": "Buổi tiệc dịp Quốc khánh thế nào?",
       "scene": "🎆🎉",
       "ans": "晚会非常欢乐",
       "opts": [
        {
         "txt": "晚会在银行里",
         "ico": "🏦",
         "py": "Wǎnhuì zài yínháng lǐ"
        },
        {
         "txt": "晚会是红色的",
         "ico": "🔴",
         "py": "Wǎnhuì shì hóngsè de"
        },
        {
         "txt": "晚会非常欢乐",
         "ico": "🎉",
         "py": "Wǎnhuì fēicháng huānlè"
        }
       ],
       "qpy": "Guóqìng jié de wǎnhuì zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đón khách và chúc mừng",
      "steps": [
       "<b>Bước 1:</b> Tập đón một đối tác tại cửa công ty: nói <i>\"迎接客人热烈就热烈一点儿吧\"</i> với đồng nghiệp rồi tự luyện câu chào, bắt tay và mời vào.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp vì phải tiếp khách ngoài giờ: <i>\"接待客人累就累一点儿吧\"</i>, rồi hẹn lịch gặp ngày mai bằng <i>\"明天还能见面\"</i>.",
       "<b>Bước 3:</b> Gửi lời chúc cho một người bạn Trung Quốc nhân dịp lễ: <i>\"祝你幸福\"</i>, và tự nói thành tiếng kế hoạch ăn mừng ngày lễ bằng cấu trúc <i>\"在家庆祝就在家庆祝吧\"</i>."
      ]
     }
    }
   ]
  },
  "3.7": {
   "lessons": [
    {
     "id": "3.7A",
     "name": "Bài 3.7A: Thuê nhà, sửa nhà và chỗ ở",
     "grammar": {
      "formulas": [
       "👤 对 + 我 + 来说 + 🏠 房租 + 太贵了",
       "👤 对 + 房东 + 来说 + 🔧 安装空调 + 不难",
       "❓ 对你来说 + 🏠 什么 + 最重要？"
      ],
      "tip": "Cố định 对……来说 (duì … lái shuō, đối … lai thuyết) nghĩa là \"đối với … mà nói\". Đặt người hoặc đối tượng vào giữa 对 và 来说, rồi mới nói ý kiến: 对我来说房租太贵了.",
      "vn_tip": "Người Việt hay bỏ 来说 và nói \"对我房租太贵了\" hoặc đặt sau ý kiến. Đúng là cụm 对……来说 đứng ĐẦU câu (hoặc sau chủ ngữ), ý kiến đi sau."
     },
     "chunks": [
      {
       "scene": "👤🏠👍",
       "full": "对我来说房东很重要",
       "vi": "Đối với tôi, chủ nhà rất quan trọng",
       "parts": [
        {
         "t": "对我来说房东",
         "ico": "🏠",
         "c": "s",
         "py": "duì wǒ lái shuō fángdōng",
         "hv": "đối ngã lai thuyết phòng đông"
        },
        {
         "t": "很",
         "ico": "💯",
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
       "traceWord": "房东",
       "py": "Duì wǒ lái shuō fángdōng hěn zhòngyào",
       "traceKey": "fangdong",
       "traceInfo": [
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        },
        {
         "c": "东",
         "py": "dōng",
         "hv": "đông"
        }
       ]
      },
      {
       "scene": "👨‍🔧❄️🏠",
       "full": "对房东来说安装空调不难",
       "vi": "Đối với chủ nhà, lắp máy lạnh không khó",
       "parts": [
        {
         "t": "对房东来说",
         "ico": "👨‍💼",
         "c": "s",
         "py": "duì fángdōng lái shuō",
         "hv": "đối phòng đông lai thuyết"
        },
        {
         "t": "安装",
         "ico": "🔧",
         "c": "v",
         "py": "ānzhuāng",
         "hv": "an trang"
        },
        {
         "t": "空调不难",
         "ico": "❄️",
         "c": "o",
         "py": "kōngtiáo bù nán",
         "hv": "không điều bất nan"
        }
       ],
       "traceWord": "安装",
       "py": "Duì fángdōng lái shuō ānzhuāng kōngtiáo bù nán",
       "traceKey": "anzhuang",
       "traceInfo": [
        {
         "c": "安",
         "py": "ān",
         "hv": "an"
        },
        {
         "c": "装",
         "py": "zhuāng",
         "hv": "trang"
        }
       ]
      },
      {
       "scene": "👤🏢📐",
       "full": "对我来说面积大的房屋更好",
       "vi": "Đối với tôi, căn nhà diện tích lớn thì tốt hơn",
       "parts": [
        {
         "t": "对我来说面积大的房屋",
         "ico": "🏢",
         "c": "s",
         "py": "duì wǒ lái shuō miànjī dà de fángwū",
         "hv": "đối ngã lai thuyết diện tích đại đích phòng ốc"
        },
        {
         "t": "更",
         "ico": "➕",
         "c": "v",
         "py": "gèng",
         "hv": "cánh"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "hảo"
        }
       ],
       "traceWord": "面积",
       "py": "Duì wǒ lái shuō miànjī dà de fángwū gèng hǎo",
       "traceKey": "mianji",
       "traceInfo": [
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        },
        {
         "c": "积",
         "py": "jī",
         "hv": "tích"
        }
       ]
      },
      {
       "scene": "👤💰🏠",
       "full": "对我来说房租太贵了",
       "vi": "Đối với tôi, tiền thuê nhà đắt quá",
       "parts": [
        {
         "t": "对我来说房租",
         "ico": "💰",
         "c": "s",
         "py": "duì wǒ lái shuō fángzū",
         "hv": "đối ngã lai thuyết phòng tô"
        },
        {
         "t": "太",
         "ico": "😮",
         "c": "v",
         "py": "tài",
         "hv": "thái"
        },
        {
         "t": "贵了",
         "ico": "💸",
         "c": "o",
         "py": "guì le",
         "hv": "quý liễu"
        }
       ],
       "traceWord": "房租",
       "py": "Duì wǒ lái shuō fángzū tài guì le",
       "traceKey": "fangzu",
       "traceInfo": [
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        },
        {
         "c": "租",
         "py": "zū",
         "hv": "tô"
        }
       ]
      },
      {
       "scene": "👥🏗️🐢",
       "full": "对他们来说新房子建得太慢了",
       "vi": "Đối với họ, ngôi nhà mới xây chậm quá",
       "parts": [
        {
         "t": "对他们来说新房子",
         "ico": "🏠",
         "c": "s",
         "py": "duì tāmen lái shuō xīn fángzi",
         "hv": "đối tha môn lai thuyết tân phòng tử"
        },
        {
         "t": "建得",
         "ico": "🏗️",
         "c": "v",
         "py": "jiàn de",
         "hv": "kiến đắc"
        },
        {
         "t": "太慢了",
         "ico": "🐢",
         "c": "o",
         "py": "tài màn le",
         "hv": "thái mạn liễu"
        }
       ],
       "traceWord": "建",
       "py": "Duì tāmen lái shuō xīn fángzi jiàn de tài màn le",
       "traceKey": "jian",
       "traceInfo": [
        {
         "c": "建",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      },
      {
       "scene": "👴🏚️🔧",
       "full": "对老人来说旧屋子也要常修",
       "vi": "Đối với người già, nhà cũ cũng cần thường xuyên sửa",
       "parts": [
        {
         "t": "对老人来说旧屋子",
         "ico": "🏚️",
         "c": "s",
         "py": "duì lǎorén lái shuō jiù wūzi",
         "hv": "đối lão nhân lai thuyết cựu ốc tử"
        },
        {
         "t": "也要",
         "ico": "➕",
         "c": "v",
         "py": "yě yào",
         "hv": "dã yếu"
        },
        {
         "t": "常修",
         "ico": "🔧",
         "c": "o",
         "py": "cháng xiū",
         "hv": "thường tu"
        }
       ],
       "traceWord": "旧",
       "py": "Duì lǎorén lái shuō jiù wūzi yě yào cháng xiū",
       "traceKey": "jiu",
       "traceInfo": [
        {
         "c": "旧",
         "py": "jiù",
         "hv": "cựu"
        }
       ]
      },
      {
       "scene": "🌞🏠❄️",
       "full": "对日常生活来说空调很重要",
       "vi": "Đối với sinh hoạt hằng ngày, máy lạnh rất quan trọng",
       "parts": [
        {
         "t": "对日常生活来说空调",
         "ico": "❄️",
         "c": "s",
         "py": "duì rìcháng shēnghuó lái shuō kōngtiáo",
         "hv": "đối nhật thường sinh hoạt lai thuyết không điều"
        },
        {
         "t": "很",
         "ico": "💯",
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
       "traceWord": "日常",
       "py": "Duì rìcháng shēnghuó lái shuō kōngtiáo hěn zhòngyào",
       "traceKey": "richang",
       "traceInfo": [
        {
         "c": "日",
         "py": "rì",
         "hv": "nhật"
        },
        {
         "c": "常",
         "py": "cháng",
         "hv": "thường"
        }
       ]
      },
      {
       "scene": "👤📦🏠",
       "full": "对我来说下周搬到新屋子最好",
       "vi": "Đối với tôi, tuần sau chuyển đến nhà mới là tốt nhất",
       "parts": [
        {
         "t": "对我来说",
         "ico": "👤",
         "c": "s",
         "py": "duì wǒ lái shuō",
         "hv": "đối ngã lai thuyết"
        },
        {
         "t": "下周搬到新屋子",
         "ico": "📦",
         "c": "v",
         "py": "xià zhōu bān dào xīn wūzi",
         "hv": "hạ chu ban đáo tân ốc tử"
        },
        {
         "t": "最好",
         "ico": "🥇",
         "c": "o",
         "py": "zuìhǎo",
         "hv": "tối hảo"
        }
       ],
       "traceWord": "搬",
       "py": "Duì wǒ lái shuō xià zhōu bān dào xīn wūzi zuìhǎo",
       "traceKey": "ban",
       "traceInfo": [
        {
         "c": "搬",
         "py": "bān",
         "hv": "ban"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的房间有卫生间吗？",
       "qvi": "Phòng của bạn có nhà vệ sinh không?",
       "scene": "🛏️🚿❓",
       "ans": "我的房间里有卫生间",
       "opts": [
        {
         "txt": "我昨天去北京了",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng le"
        },
        {
         "txt": "我的房间里有卫生间",
         "ico": "🚿",
         "py": "Wǒ de fángjiān lǐ yǒu wèishēngjiān"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ de fángjiān yǒu wèishēngjiān ma?"
      },
      {
       "q": "这个屋子怎么样？",
       "qvi": "Căn phòng này thế nào?",
       "scene": "🏠🤫❓",
       "ans": "屋子里很静",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        },
        {
         "txt": "屋子里很静",
         "ico": "🤫",
         "py": "Wūzi lǐ hěn jìng"
        }
       ],
       "qpy": "Zhè gè wūzi zěnmeyàng?"
      },
      {
       "q": "那个房间现在有人住吗？",
       "qvi": "Căn phòng đó bây giờ có người ở không?",
       "scene": "🚪🏠❓",
       "ans": "现在是空的",
       "opts": [
        {
         "txt": "现在是空的",
         "ico": "🈳",
         "py": "Xiànzài shì kōng de"
        },
        {
         "txt": "我们明天去上海",
         "ico": "🚄",
         "py": "Wǒmen míngtiān qù Shànghǎi"
        },
        {
         "txt": "今天不下雨",
         "ico": "🌤️",
         "py": "Jīntiān bú xià yǔ"
        }
       ],
       "qpy": "Nà gè fángjiān xiànzài yǒu rén zhù ma?"
      },
      {
       "q": "你觉得房租贵吗？",
       "qvi": "Bạn thấy tiền thuê nhà có đắt không?",
       "scene": "💰🏠❓",
       "ans": "对我来说不贵",
       "opts": [
        {
         "txt": "房东是我的朋友",
         "ico": "🤝",
         "py": "Fángdōng shì wǒ de péngyou"
        },
        {
         "txt": "我明天要搬家",
         "ico": "📦",
         "py": "Wǒ míngtiān yào bānjiā"
        },
        {
         "txt": "对我来说不贵",
         "ico": "👌",
         "py": "Duì wǒ lái shuō bú guì"
        }
       ],
       "qpy": "Nǐ juéde fángzū guì ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi chủ nhà về căn phòng muốn thuê",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hoặc gọi cho chủ nhà (thật hoặc nói thành tiếng một mình), hỏi xem phòng có <i>\"卫生间\"</i> và <i>\"空调\"</i> không, diện tích lớn hay nhỏ.",
       "<b>Bước 2:</b> Nói ý kiến của bạn bằng mẫu mới: <i>\"对我来说房租太贵了\"</i> hoặc <i>\"对我来说面积大的房屋更好\"</i>.",
       "<b>Bước 3:</b> Hỏi chủ nhà xem có thể sửa chỗ nào cũ không, rồi hẹn ngày xem nhà và nói ngày bạn muốn chuyển đến."
      ]
     }
    },
    {
     "id": "3.7B",
     "name": "Bài 3.7B: Đồ đạc và vật dụng trong nhà",
     "grammar": {
      "formulas": [
       "🔁 件件 + 衣服 + 都 + 挂在衣架上",
       "🔁 本本 + 书 + 都 + 放在书架上",
       "🔁 张张 + 桌子 + 都 + 是木头做的"
      ],
      "tip": "Lặp lượng từ AA (件件、张张、个个、本本、条条) nghĩa là \"từng cái một, cái nào cũng\". Sau đó thường có 都 (dōu, đô): 件件衣服都很好 = cái áo nào cũng tốt.",
      "vn_tip": "Người Việt hay quên 都 và chỉ nói \"件件衣服很旧\". Với lượng từ lặp phải có 都 (hoặc 也), và không thêm 每 hay số từ như \"每件件\" cho thừa."
     },
     "chunks": [
      {
       "scene": "👕🧥🪝",
       "full": "件件衣服都挂在衣架上",
       "vi": "Cái áo nào cũng được treo trên móc áo",
       "parts": [
        {
         "t": "件件衣服",
         "ico": "👕",
         "c": "s",
         "py": "jiàn jiàn yīfu",
         "hv": "kiện kiện y phục"
        },
        {
         "t": "都挂在",
         "ico": "🪝",
         "c": "v",
         "py": "dōu guà zài",
         "hv": "đô quải tại"
        },
        {
         "t": "衣架上",
         "ico": "🧥",
         "c": "o",
         "py": "yījià shàng",
         "hv": "y giá thượng"
        }
       ],
       "traceWord": "衣架",
       "py": "Jiàn jiàn yīfu dōu guà zài yījià shàng",
       "traceKey": "yijia",
       "traceInfo": [
        {
         "c": "衣",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "架",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "📚📖🗄️",
       "full": "本本书都放在书架上",
       "vi": "Quyển sách nào cũng được để trên giá sách",
       "parts": [
        {
         "t": "本本书",
         "ico": "📚",
         "c": "s",
         "py": "běn běn shū",
         "hv": "bản bản thư"
        },
        {
         "t": "都放在",
         "ico": "📥",
         "c": "v",
         "py": "dōu fàng zài",
         "hv": "đô phóng tại"
        },
        {
         "t": "书架上",
         "ico": "🗄️",
         "c": "o",
         "py": "shūjià shàng",
         "hv": "thư giá thượng"
        }
       ],
       "traceWord": "书架",
       "py": "Běn běn shū dōu fàng zài shūjià shàng",
       "traceKey": "shujia",
       "traceInfo": [
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "架",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "🚪🛏️✨",
       "full": "个个房间都很整齐",
       "vi": "Phòng nào cũng rất gọn gàng",
       "parts": [
        {
         "t": "个个房间",
         "ico": "🚪",
         "c": "s",
         "py": "gè gè fángjiān",
         "hv": "cá cá phòng gian"
        },
        {
         "t": "都",
         "ico": "💯",
         "c": "v",
         "py": "dōu",
         "hv": "đô"
        },
        {
         "t": "很整齐",
         "ico": "✨",
         "c": "o",
         "py": "hěn zhěngqí",
         "hv": "ngận chỉnh tề"
        }
       ],
       "traceWord": "整齐",
       "py": "Gè gè fángjiān dōu hěn zhěngqí",
       "traceKey": "zhengqi",
       "traceInfo": [
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        },
        {
         "c": "齐",
         "py": "qí",
         "hv": "tề"
        }
       ]
      },
      {
       "scene": "🛋️🛌😴",
       "full": "条条被子都放在沙发上",
       "vi": "Cái chăn nào cũng để trên ghế sofa",
       "parts": [
        {
         "t": "条条被子",
         "ico": "🛌",
         "c": "s",
         "py": "tiáo tiáo bèizi",
         "hv": "điều điều bị tử"
        },
        {
         "t": "都放在",
         "ico": "📥",
         "c": "v",
         "py": "dōu fàng zài",
         "hv": "đô phóng tại"
        },
        {
         "t": "沙发上",
         "ico": "🛋️",
         "c": "o",
         "py": "shāfā shàng",
         "hv": "sa phát thượng"
        }
       ],
       "traceWord": "被子",
       "py": "Tiáo tiáo bèizi dōu fàng zài shāfā shàng",
       "traceKey": "beizi",
       "traceInfo": [
        {
         "c": "被",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🧸🚗😵",
       "full": "个个玩具都乱放在地上",
       "vi": "Món đồ chơi nào cũng vứt bừa trên sàn",
       "parts": [
        {
         "t": "个个玩具",
         "ico": "🧸",
         "c": "s",
         "py": "gè gè wánjù",
         "hv": "cá cá ngoạn cụ"
        },
        {
         "t": "都乱放在",
         "ico": "🌀",
         "c": "v",
         "py": "dōu luàn fàng zài",
         "hv": "đô loạn phóng tại"
        },
        {
         "t": "地上",
         "ico": "⬇️",
         "c": "o",
         "py": "dìshang",
         "hv": "địa thượng"
        }
       ],
       "traceWord": "玩具",
       "py": "Gè gè wánjù dōu luàn fàng zài dìshang",
       "traceKey": "wanju",
       "traceInfo": [
        {
         "c": "玩",
         "py": "wán",
         "hv": "ngoạn"
        },
        {
         "c": "具",
         "py": "jù",
         "hv": "cụ"
        }
       ]
      },
      {
       "scene": "🙋🪑🧹",
       "full": "请你把件件家具都整理一下儿",
       "vi": "Nhờ bạn sắp xếp lại từng món đồ nội thất một chút",
       "parts": [
        {
         "t": "请你把件件家具",
         "ico": "🪑",
         "c": "s",
         "py": "qǐng nǐ bǎ jiàn jiàn jiājù",
         "hv": "thỉnh nễ bả kiện kiện gia cụ"
        },
        {
         "t": "都整理",
         "ico": "🧹",
         "c": "v",
         "py": "dōu zhěnglǐ",
         "hv": "đô chỉnh lý"
        },
        {
         "t": "一下儿",
         "ico": "⏱️",
         "c": "o",
         "py": "yīxiàr",
         "hv": "nhất hạ nhi"
        }
       ],
       "traceWord": "家具",
       "py": "Qǐng nǐ bǎ jiàn jiàn jiājù dōu zhěnglǐ yīxiàr",
       "traceKey": "jiaju",
       "traceInfo": [
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "具",
         "py": "jù",
         "hv": "cụ"
        }
       ]
      },
      {
       "scene": "🪑🌳🔨",
       "full": "张张桌子都是木头做的",
       "vi": "Cái bàn nào cũng làm bằng gỗ",
       "parts": [
        {
         "t": "张张桌子",
         "ico": "🪑",
         "c": "s",
         "py": "zhāng zhāng zhuōzi",
         "hv": "trương trương trác tử"
        },
        {
         "t": "都是",
         "ico": "💯",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "木头做的",
         "ico": "🌳",
         "c": "o",
         "py": "mùtou zuò de",
         "hv": "mộc đầu tố đích"
        }
       ],
       "traceWord": "木头",
       "py": "Zhāng zhāng zhuōzi dōu shì mùtou zuò de",
       "traceKey": "mutou",
       "traceInfo": [
        {
         "c": "木",
         "py": "mù",
         "hv": "mộc"
        },
        {
         "c": "头",
         "py": "tou",
         "hv": "đầu"
        }
       ]
      },
      {
       "scene": "👥📦🧹",
       "full": "我们要把件件东西都整理整齐",
       "vi": "Chúng ta phải sắp xếp từng món đồ cho gọn gàng",
       "parts": [
        {
         "t": "我们要",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen yào",
         "hv": "ngã môn yếu"
        },
        {
         "t": "把件件东西",
         "ico": "📦",
         "c": "o",
         "py": "bǎ jiàn jiàn dōngxi",
         "hv": "bả kiện kiện đông tây"
        },
        {
         "t": "都整理整齐",
         "ico": "🧹",
         "c": "v",
         "py": "dōu zhěnglǐ zhěngqí",
         "hv": "đô chỉnh lý chỉnh tề"
        }
       ],
       "traceWord": "整理",
       "py": "Wǒmen yào bǎ jiàn jiàn dōngxi dōu zhěnglǐ zhěngqí",
       "traceKey": "zhengli",
       "traceInfo": [
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
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
       "q": "墙上挂着什么？",
       "qvi": "Trên tường treo cái gì?",
       "scene": "🧱🕰️❓",
       "ans": "墙上挂着一个钟",
       "opts": [
        {
         "txt": "桌子上有两本书",
         "ico": "📚",
         "py": "Zhuōzi shàng yǒu liǎng běn shū"
        },
        {
         "txt": "墙上挂着一个钟",
         "ico": "🕰️",
         "py": "Qiáng shàng guà zhe yī gè zhōng"
        },
        {
         "txt": "他在公司工作",
         "ico": "🏢",
         "py": "Tā zài gōngsī gōngzuò"
        }
       ],
       "qpy": "Qiáng shàng guà zhe shénme?"
      },
      {
       "q": "这块板是什么做的？",
       "qvi": "Tấm ván này làm bằng gì?",
       "scene": "🪵🔨❓",
       "ans": "这块板是木头做的",
       "opts": [
        {
         "txt": "天上有很多云",
         "ico": "☁️",
         "py": "Tiānshàng yǒu hěn duōyún"
        },
        {
         "txt": "这块板是木头做的",
         "ico": "🪵",
         "py": "Zhè kuài bǎn shì mùtou zuò de"
        },
        {
         "txt": "我家有一只猫",
         "ico": "🐱",
         "py": "Wǒ jiā yǒu yī zhǐ māo"
        }
       ],
       "qpy": "Zhè kuài bǎn shì shénme zuò de?"
      },
      {
       "q": "这块布是什么颜色的？",
       "qvi": "Miếng vải này màu gì?",
       "scene": "🧵🎨❓",
       "ans": "这块布是红色的",
       "opts": [
        {
         "txt": "这块布是红色的",
         "ico": "🟥",
         "py": "Zhè kuài bù shì hóngsè de"
        },
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我们明天休息",
         "ico": "🛌",
         "py": "Wǒmen míngtiān xiūxi"
        }
       ],
       "qpy": "Zhè kuài bù shì shénme yánsè de?"
      },
      {
       "q": "你要买的东西都齐了吗？",
       "qvi": "Đồ bạn cần mua đã đủ cả chưa?",
       "scene": "🛒✅❓",
       "ans": "东西都买齐了",
       "opts": [
        {
         "txt": "我今天不上班",
         "ico": "🏠",
         "py": "Wǒ jīntiān bú shàngbān"
        },
        {
         "txt": "我在地铁站等朋友",
         "ico": "🚇",
         "py": "Wǒ zài dìtiězhàn děng péngyou"
        },
        {
         "txt": "东西都买齐了",
         "ico": "✅",
         "py": "Dōngxi dōu mǎi qí le"
        }
       ],
       "qpy": "Nǐ yào mǎi de dōngxi dōu qí le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Sắp xếp lại phòng làm việc hoặc phòng khách",
      "steps": [
       "<b>Bước 1:</b> Đứng giữa phòng của bạn, nhìn từng nhóm đồ và nói thành tiếng: <i>\"本本书都放在书架上\"</i>, <i>\"件件衣服都挂在衣架上\"</i>.",
       "<b>Bước 2:</b> Chọn 3 loại đồ trong nhà (ghế, bàn, chăn...) rồi dùng lượng từ lặp nói: <i>\"张张桌子都…\"</i>, <i>\"条条被子都…\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho người nhà hoặc đồng nghiệp nhờ giúp: <i>\"我们要把件件东西都整理整齐\"</i>, rồi hẹn giờ cùng dọn."
      ]
     }
    },
    {
     "id": "3.7C",
     "name": "Bài 3.7C: Vị trí và phương hướng",
     "grammar": {
      "formulas": [
       "📦 书 + 在 + 桌子上面",
       "📦 他们 + 在 + 房子里面 + 等你",
       "❓ 你的钱包 + 在 + 哪儿？"
      ],
      "tip": "Cụm giới–tân với phương vị: 在 (zài, tại) + danh từ + từ phương vị (上面、下面、里面、外面、前面、后面). Ví dụ 在桌子上面 = ở phía trên bàn. Từ phương vị luôn đứng SAU danh từ.",
      "vn_tip": "Tiếng Việt nói \"trên bàn\", \"trong nhà\" (phương vị đứng TRƯỚC danh từ). Tiếng Trung đảo lại: 桌子上面, 房子里面, không nói \"上面桌子\"."
     },
     "chunks": [
      {
       "scene": "📖🪑⬆️",
       "full": "我的书在桌子上面",
       "vi": "Sách của tôi ở trên bàn",
       "parts": [
        {
         "t": "我的书",
         "ico": "📖",
         "c": "s",
         "py": "wǒ de shū",
         "hv": "ngã đích thư"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "桌子上面",
         "ico": "⬆️",
         "c": "o",
         "py": "zhuōzi shàngmiàn",
         "hv": "trác tử thượng diện"
        }
       ],
       "traceWord": "上面",
       "py": "Wǒ de shū zài zhuōzi shàngmiàn",
       "traceKey": "shangmian",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "🐱🪑⬇️",
       "full": "小猫在椅子下面",
       "vi": "Con mèo con ở dưới ghế",
       "parts": [
        {
         "t": "小猫",
         "ico": "🐱",
         "c": "s",
         "py": "xiǎo māo",
         "hv": "tiểu miêu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "椅子下面",
         "ico": "⬇️",
         "c": "o",
         "py": "yǐzi xiàmiàn",
         "hv": "ỷ tử hạ diện"
        }
       ],
       "traceWord": "下面",
       "py": "Xiǎo māo zài yǐzi xiàmiàn",
       "traceKey": "xiamian",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👥🏠⏳",
       "full": "他们在房子里面等你",
       "vi": "Họ đang đợi bạn ở trong nhà",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "在房子里面",
         "ico": "🏠",
         "c": "v",
         "py": "zài fángzi lǐmiàn",
         "hv": "tại phòng tử lý diện"
        },
        {
         "t": "等你",
         "ico": "⏳",
         "c": "o",
         "py": "děng nǐ",
         "hv": "đẳng nễ"
        }
       ],
       "traceWord": "里面",
       "py": "Tāmen zài fángzi lǐmiàn děng nǐ",
       "traceKey": "limian",
       "traceInfo": [
        {
         "c": "里",
         "py": "lǐ",
         "hv": "lý"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "🚗🏢🅿️",
       "full": "我的车停在公司外面",
       "vi": "Xe của tôi đậu ở bên ngoài công ty",
       "parts": [
        {
         "t": "我的车",
         "ico": "🚗",
         "c": "s",
         "py": "wǒ de chē",
         "hv": "ngã đích xa"
        },
        {
         "t": "停在",
         "ico": "🅿️",
         "c": "v",
         "py": "tíng zài",
         "hv": "đình tại"
        },
        {
         "t": "公司外面",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī wàimiàn",
         "hv": "công ti ngoại diện"
        }
       ],
       "traceWord": "外面",
       "py": "Wǒ de chē tíng zài gōngsī wàimiàn",
       "traceKey": "waimian",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👨🪑👦",
       "full": "大卫坐在小王的后面",
       "vi": "David ngồi phía sau Tiểu Vương",
       "parts": [
        {
         "t": "大卫",
         "ico": "👨",
         "c": "s",
         "py": "Dàwèi",
         "hv": "đại vệ"
        },
        {
         "t": "坐在",
         "ico": "🪑",
         "c": "v",
         "py": "zuò zài",
         "hv": "tọa tại"
        },
        {
         "t": "小王的后面",
         "ico": "⬅️",
         "c": "o",
         "py": "Xiǎowáng de hòumiàn",
         "hv": "tiểu vương đích hậu diện"
        }
       ],
       "traceWord": "后面",
       "py": "Dàwèi zuò zài Xiǎowáng de hòumiàn",
       "traceKey": "houmian",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👩‍🏫🧑‍🎓➡️",
       "full": "老师站在学生前面",
       "vi": "Thầy giáo đứng phía trước học sinh",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "站在",
         "ico": "🧍",
         "c": "v",
         "py": "zhàn zài",
         "hv": "trạm tại"
        },
        {
         "t": "学生前面",
         "ico": "➡️",
         "c": "o",
         "py": "xuéshēng qiánmiàn",
         "hv": "học sinh tiền diện"
        }
       ],
       "traceWord": "前面",
       "py": "Lǎoshī zhàn zài xuéshēng qiánmiàn",
       "traceKey": "qianmian",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧‍👦🪑⭕",
       "full": "大家都围在桌子周围",
       "vi": "Mọi người đều quây quanh bàn",
       "parts": [
        {
         "t": "大家",
         "ico": "👨‍👩‍👧‍👦",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都围在",
         "ico": "⭕",
         "c": "v",
         "py": "dōu wéi zài",
         "hv": "đô vi tại"
        },
        {
         "t": "桌子周围",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi zhōuwéi",
         "hv": "trác tử chu vi"
        }
       ],
       "traceWord": "周围",
       "py": "Dàjiā dōu wéi zài zhuōzi zhōuwéi",
       "traceKey": "zhouwei",
       "traceInfo": [
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        },
        {
         "c": "围",
         "py": "wéi",
         "hv": "vi"
        }
       ]
      },
      {
       "scene": "👛🪑😮",
       "full": "钱包掉在桌子底下了",
       "vi": "Ví rơi xuống dưới bàn rồi",
       "parts": [
        {
         "t": "钱包",
         "ico": "👛",
         "c": "s",
         "py": "qiánbāo",
         "hv": "tiền bao"
        },
        {
         "t": "掉在",
         "ico": "⤵️",
         "c": "v",
         "py": "diào zài",
         "hv": "điệu tại"
        },
        {
         "t": "桌子底下了",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi dǐxia le",
         "hv": "trác tử để hạ liễu"
        }
       ],
       "traceWord": "底下",
       "py": "Qiánbāo diào zài zhuōzi dǐxia le",
       "traceKey": "dixia",
       "traceInfo": [
        {
         "c": "底",
         "py": "dǐ",
         "hv": "để"
        },
        {
         "c": "下",
         "py": "xia",
         "hv": "hạ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的学校在哪儿？",
       "qvi": "Trường của bạn ở đâu?",
       "scene": "🏫🌳❓",
       "ans": "我的学校在公园背后",
       "opts": [
        {
         "txt": "我的学校在飞机上面",
         "ico": "✈️",
         "py": "Wǒ de xuéxiào zài fēijī shàngmiàn"
        },
        {
         "txt": "我的学校在公园背后",
         "ico": "🌳",
         "py": "Wǒ de xuéxiào zài gōngyuán bèihòu"
        },
        {
         "txt": "我的学校在银行里面",
         "ico": "🏦",
         "py": "Wǒ de xuéxiào zài yínháng lǐmiàn"
        }
       ],
       "qpy": "Nǐ de xuéxiào zài nǎr?"
      },
      {
       "q": "桌子表面怎么样？",
       "qvi": "Bề mặt bàn thế nào?",
       "scene": "🪑✨❓",
       "ans": "桌子表面很干净",
       "opts": [
        {
         "txt": "我眼前有一座大山",
         "ico": "⛰️",
         "py": "Wǒ yǎnqián yǒu yī zuò dà shān"
        },
        {
         "txt": "春节前后我要搬家",
         "ico": "📦",
         "py": "Chūnjié qiánhòu wǒ yào bānjiā"
        },
        {
         "txt": "桌子表面很干净",
         "ico": "✨",
         "py": "Zhuōzi biǎomiàn hěn gānjìng"
        }
       ],
       "qpy": "Zhuōzi biǎomiàn zěnmeyàng?"
      },
      {
       "q": "小王在哪儿？",
       "qvi": "Tiểu Vương ở đâu?",
       "scene": "👦👩‍🏫🧑‍🎓❓",
       "ans": "他在老师和学生当中",
       "opts": [
        {
         "txt": "他在老师和学生当中",
         "ico": "👥",
         "py": "Tā zài lǎoshī hé xuéshēng dāngzhōng"
        },
        {
         "txt": "这个工作三天内要完成",
         "ico": "📅",
         "py": "Zhè gè gōngzuò sān tiān nèi yào wánchéng"
        },
        {
         "txt": "我昨天去过北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù guò Běijīng"
        }
       ],
       "qpy": "Xiǎowáng zài nǎr?"
      },
      {
       "q": "你什么时候搬家？",
       "qvi": "Khi nào bạn chuyển nhà?",
       "scene": "📦📅❓",
       "ans": "春节前后搬家",
       "opts": [
        {
         "txt": "他在三天内不在家",
         "ico": "🏠",
         "py": "Tā zài sān tiān nèi bú zàijiā"
        },
        {
         "txt": "春节前后搬家",
         "ico": "🧨",
         "py": "Chūnjié qiánhòu bānjiā"
        },
        {
         "txt": "我明天去超市",
         "ico": "🛒",
         "py": "Wǒ míngtiān qù chāoshì"
        }
       ],
       "qpy": "Nǐ shénme shíhou bānjiā?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chỉ vị trí đồ vật cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp (hoặc tự nói thành tiếng) nơi bạn để đồ: <i>\"我的书在桌子上面\"</i>, <i>\"钱包掉在桌子底下了\"</i>.",
       "<b>Bước 2:</b> Đi quanh nhà hoặc văn phòng, chỉ và nói vị trí của 5 món đồ bằng <i>上面、下面、里面、外面、前面、后面</i>.",
       "<b>Bước 3:</b> Gọi điện hẹn gặp bạn: nói bạn đang đứng ở đâu, ví dụ <i>\"我的车停在公司外面\"</i>, và hỏi bạn ấy đang ở đâu."
      ]
     }
    }
   ]
  },
  "3.8": {
   "lessons": [
    {
     "id": "3.8A",
     "name": "Bài 3.8A: Giao thông, đường sá và phương tiện",
     "grammar": {
      "formulas": [
       "📍 由 + 🏙️ 北京 + 到 + 🏙️ 上海",
       "⏰ 由 + 🕘 九点 + 到 + 🕐 十一点",
       "🚄 火车 + 从 + 📍 北京 + 到 + 📍 上海"
      ],
      "tip": "Giới từ 由 (yóu, âm Hán Việt: do) dẫn điểm xuất phát về nơi chốn hoặc thời gian: 由 A 到 B = từ A đến B. 由 hay gặp trong văn viết, thông báo; khi nói hằng ngày thường dùng 从 (cóng, tòng) với cùng cấu trúc: 从北京到上海.",
      "vn_tip": "Người Việt hay đặt nơi đến lên trước hoặc quên 到: nói \"飞机北京上海\" hoặc \"从北京上海\". Phải có đủ khung 从/由 + nơi đi + 到 + nơi đến, đứng TRƯỚC động từ chính: 飞机从北京飞行到上海."
     },
     "chunks": [
      {
       "scene": "✈️🏙️🏙️",
       "full": "飞机从北京飞行到上海",
       "vi": "Máy bay bay từ Bắc Kinh đến Thượng Hải",
       "parts": [
        {
         "t": "飞机",
         "ico": "✈️",
         "c": "s",
         "py": "fēijī",
         "hv": "phi cơ"
        },
        {
         "t": "从北京飞行",
         "ico": "🛫",
         "c": "v",
         "py": "cóng Běijīng fēixíng",
         "hv": "tòng bắc kinh phi hành"
        },
        {
         "t": "到上海",
         "ico": "🏙️",
         "c": "o",
         "py": "dào Shànghǎi",
         "hv": "đáo thượng hải"
        }
       ],
       "traceWord": "飞行",
       "py": "Fēijī cóng Běijīng fēixíng dào Shànghǎi",
       "traceKey": "feixing",
       "traceInfo": [
        {
         "c": "飞",
         "py": "fēi",
         "hv": "phi"
        },
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        }
       ]
      },
      {
       "scene": "🛤️🏙️🏙️",
       "full": "这条铁路从北京通到上海",
       "vi": "Tuyến đường sắt này đi từ Bắc Kinh thông đến Thượng Hải",
       "parts": [
        {
         "t": "这条铁路",
         "ico": "🛤️",
         "c": "s",
         "py": "zhè tiáo tiělù",
         "hv": "giá điều thiết lộ"
        },
        {
         "t": "从北京",
         "ico": "🏙️",
         "c": "o",
         "py": "cóng Běijīng",
         "hv": "tòng bắc kinh"
        },
        {
         "t": "通到上海",
         "ico": "🚄",
         "c": "v",
         "py": "tōng dào Shànghǎi",
         "hv": "thông đáo thượng hải"
        }
       ],
       "traceWord": "铁路",
       "py": "Zhè tiáo tiělù cóng Běijīng tōng dào Shànghǎi",
       "traceKey": "tielu",
       "traceInfo": [
        {
         "c": "铁",
         "py": "tiě",
         "hv": "thiết"
        },
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        }
       ]
      },
      {
       "scene": "⏰🧳🏢",
       "full": "我们要提前出发去机场",
       "vi": "Chúng tôi phải xuất phát sớm để ra sân bay",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "要提前出发",
         "ico": "⏰",
         "c": "v",
         "py": "yào tíqián chūfā",
         "hv": "yếu đề tiền xuất phát"
        },
        {
         "t": "去机场",
         "ico": "🛫",
         "c": "o",
         "py": "qù jīchǎng",
         "hv": "khứ cơ trường"
        }
       ],
       "traceWord": "提前",
       "py": "Wǒmen yào tíqián chūfā qù jīchǎng",
       "traceKey": "tiqian",
       "traceInfo": [
        {
         "c": "提",
         "py": "tí",
         "hv": "đề"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "🚗🛣️✈️",
       "full": "大家走高速公路去机场",
       "vi": "Mọi người đi đường cao tốc ra sân bay",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "走高速公路",
         "ico": "🛣️",
         "c": "v",
         "py": "zǒu gāosù gōnglù",
         "hv": "tẩu cao tốc công lộ"
        },
        {
         "t": "去机场",
         "ico": "✈️",
         "c": "o",
         "py": "qù jīchǎng",
         "hv": "khứ cơ trường"
        }
       ],
       "traceWord": "高速公路",
       "py": "Dàjiā zǒu gāosù gōnglù qù jīchǎng",
       "traceKey": "gaosugonglu",
       "traceInfo": [
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        },
        {
         "c": "速",
         "py": "sù",
         "hv": "tốc"
        },
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        }
       ]
      },
      {
       "scene": "🚄💨",
       "full": "高速火车的速度很快",
       "vi": "Tốc độ của tàu cao tốc rất nhanh",
       "parts": [
        {
         "t": "高速火车的速度",
         "ico": "🚄",
         "c": "s",
         "py": "gāosù huǒchē de sùdù",
         "hv": "cao tốc hỏa xa đích tốc độ"
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
         "ico": "💨",
         "c": "o",
         "py": "kuài",
         "hv": "khoái"
        }
       ],
       "traceWord": "速度",
       "py": "Gāosù huǒchē de sùdù hěn kuài",
       "traceKey": "sudu",
       "traceInfo": [
        {
         "c": "速",
         "py": "sù",
         "hv": "tốc"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "🚕⏩✈️",
       "full": "司机加快速度去赶飞机",
       "vi": "Tài xế tăng tốc để kịp chuyến bay",
       "parts": [
        {
         "t": "司机",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "sījī",
         "hv": "ti cơ"
        },
        {
         "t": "加快速度",
         "ico": "⏩",
         "c": "v",
         "py": "jiākuài sùdù",
         "hv": "gia khoái tốc độ"
        },
        {
         "t": "去赶飞机",
         "ico": "✈️",
         "c": "o",
         "py": "qù gǎn fēijī",
         "hv": "khứ cản phi cơ"
        }
       ],
       "traceWord": "加快",
       "py": "Sījī jiākuài sùdù qù gǎn fēijī",
       "traceKey": "jiakuai",
       "traceInfo": [
        {
         "c": "加",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "快",
         "py": "kuài",
         "hv": "khoái"
        }
       ]
      },
      {
       "scene": "👮🌉🚗",
       "full": "交警请我们从桥上走",
       "vi": "Cảnh sát giao thông mời chúng tôi đi qua cầu",
       "parts": [
        {
         "t": "交警",
         "ico": "👮",
         "c": "s",
         "py": "jiāojǐng",
         "hv": "giao cảnh"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "我们从桥上走",
         "ico": "🌉",
         "c": "o",
         "py": "wǒmen cóng qiáo shàng zǒu",
         "hv": "ngã môn tòng kiều thượng tẩu"
        }
       ],
       "traceWord": "桥",
       "py": "Jiāojǐng qǐng wǒmen cóng qiáo shàng zǒu",
       "traceKey": "qiao",
       "traceInfo": [
        {
         "c": "桥",
         "py": "qiáo",
         "hv": "kiều"
        }
       ]
      },
      {
       "scene": "🗺️🎫💰",
       "full": "你知道这条路线的票价吗",
       "vi": "Bạn có biết giá vé của tuyến này không",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "知道",
         "ico": "💡",
         "c": "v",
         "py": "zhīdào",
         "hv": "tri đạo"
        },
        {
         "t": "这条路线的票价吗",
         "ico": "🎫",
         "c": "o",
         "py": "zhè tiáo lùxiàn de piàojià ma",
         "hv": "giá điều lộ tuyến đích phiếu giá ma"
        }
       ],
       "traceWord": "路线",
       "py": "Nǐ zhīdào zhè tiáo lùxiàn de piàojià ma",
       "traceKey": "luxian",
       "traceInfo": [
        {
         "c": "路",
         "py": "lù",
         "hv": "lộ"
        },
        {
         "c": "线",
         "py": "xiàn",
         "hv": "tuyến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你坐地铁几号线去上班？",
       "qvi": "Bạn đi tàu điện ngầm tuyến số mấy để đi làm?",
       "scene": "🚇🏢",
       "ans": "我坐一号线",
       "opts": [
        {
         "txt": "我坐一号线",
         "ico": "🚇",
         "py": "Wǒ zuò yī hào xiàn"
        },
        {
         "txt": "我坐出租车去",
         "ico": "🚕",
         "py": "Wǒ zuò chūzūchē qù"
        },
        {
         "txt": "我骑自行车去",
         "ico": "🚲",
         "py": "Wǒ qí zìxíngchē qù"
        }
       ],
       "qpy": "Nǐ zuò dìtiě jǐ hào xiàn qù shàngbān?"
      },
      {
       "q": "他是怎么上桥的？",
       "qvi": "Anh ấy lên cầu bằng cách nào?",
       "scene": "🌉🏃",
       "ans": "他快速地跑上桥",
       "opts": [
        {
         "txt": "他坐汽车上桥",
         "ico": "🚗",
         "py": "Tā zuò qìchē shàng qiáo"
        },
        {
         "txt": "他快速地跑上桥",
         "ico": "🏃",
         "py": "Tā kuàisù de pǎo shàng qiáo"
        },
        {
         "txt": "他骑自行车上桥",
         "ico": "🚲",
         "py": "Tā qí zìxíngchē shàng qiáo"
        }
       ],
       "qpy": "Tā shì zěnme shàng qiáo de?"
      },
      {
       "q": "坐高速火车从北京到上海要多久？",
       "qvi": "Đi tàu cao tốc từ Bắc Kinh đến Thượng Hải mất bao lâu?",
       "scene": "🚄⏳",
       "ans": "要四个小时",
       "opts": [
        {
         "txt": "要四天",
         "ico": "📅",
         "py": "Yào sì tiān"
        },
        {
         "txt": "要四分钟",
         "ico": "⏱️",
         "py": "Yào sì fēnzhōng"
        },
        {
         "txt": "要四个小时",
         "ico": "🕓",
         "py": "Yào sì gè xiǎoshí"
        }
       ],
       "qpy": "Zuò gāosù huǒchē cóng Běijīng dào Shànghǎi yào duōjiǔ?"
      },
      {
       "q": "飞机的速度快，还是自行车的速度快？",
       "qvi": "Tốc độ máy bay nhanh hay tốc độ xe đạp nhanh?",
       "scene": "✈️🚲",
       "ans": "飞机的速度快",
       "opts": [
        {
         "txt": "自行车的速度快",
         "ico": "🚲",
         "py": "Zìxíngchē de sùdù kuài"
        },
        {
         "txt": "飞机的速度快",
         "ico": "✈️",
         "py": "Fēijī de sùdù kuài"
        },
        {
         "txt": "我的速度很快",
         "ico": "🏃",
         "py": "Wǒ de sùdù hěn kuài"
        }
       ],
       "qpy": "Fēijī de sùdù kuài háishi zìxíngchē de sùdù kuài?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi lộ trình và giá vé đi công tác",
      "steps": [
       "<b>Bước 1:</b> Bạn sắp đi công tác bằng tàu hoặc máy bay. Nhắn tin hoặc nói với đồng nghiệp: <i>\"你知道这条路线的票价吗？\"</i> để hỏi giá vé.",
       "<b>Bước 2:</b> Nói thành tiếng lộ trình của bạn theo khung 从…到…, ví dụ <i>\"飞机从北京飞行到上海\"</i>, rồi thay bằng hai thành phố bạn thật sự đi (ba câu).",
       "<b>Bước 3:</b> Báo giờ xuất phát cho đồng nghiệp: <i>\"我们要提前出发去机场\"</i>. Nếu đi ô tô, nói thêm <i>\"大家走高速公路去机场\"</i>."
      ]
     }
    },
    {
     "id": "3.8B",
     "name": "Bài 3.8B: Hướng đi và chuyển động",
     "grammar": {
      "formulas": [
       "🚶 走 + ➡️ 进来",
       "🏃 跑 + ⬆️ 上去",
       "🧑 他 + 🪜 走 + ⬇️ 下来"
      ],
      "tip": "Bổ ngữ xu hướng kép: động từ + 上/下/进/出/回/过/起 + 来/去. Dùng 来 (lái, lai) khi chuyển động hướng về phía người nói, dùng 去 (qù, khứ) khi hướng ra xa người nói: 走进来 (đi vào, người nói ở trong), 走进去 (đi vào, người nói ở ngoài).",
      "vn_tip": "Người Việt hay chỉ nói \"上\" hoặc \"进\" mà thiếu 来/去, hoặc chọn sai 来/去 theo hướng của người nghe. Hãy hỏi: người nói đang ở đâu? Hướng về mình thì 来, ra xa mình thì 去. Ví dụ: tôi ở dưới lầu, bạn ở trên lầu: \"你下来吧\", không phải \"你下去吧\"."
     },
     "chunks": [
      {
       "scene": "🎒🚶🚪",
       "full": "他背着书包走进来",
       "vi": "Anh ấy đeo cặp đi vào",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "背着书包",
         "ico": "🎒",
         "c": "o",
         "py": "bēi zhe shūbāo",
         "hv": "bối trước thư bao"
        },
        {
         "t": "走进来",
         "ico": "🚶",
         "c": "v",
         "py": "zǒu jìnlái",
         "hv": "tẩu tiến lai"
        }
       ],
       "traceWord": "背",
       "py": "Tā bēi zhe shūbāo zǒu jìnlái",
       "traceKey": "bei",
       "traceInfo": [
        {
         "c": "背",
         "py": "bèi",
         "hv": "bối"
        }
       ]
      },
      {
       "scene": "🧑➡️🙋",
       "full": "那个人朝我们走过来",
       "vi": "Người đó đi về phía chúng tôi",
       "parts": [
        {
         "t": "那个人",
         "ico": "🧑",
         "c": "s",
         "py": "nà gè rén",
         "hv": "na cá nhân"
        },
        {
         "t": "朝我们",
         "ico": "👥",
         "c": "o",
         "py": "cháo wǒmen",
         "hv": "triều ngã môn"
        },
        {
         "t": "走过来",
         "ico": "🚶",
         "c": "v",
         "py": "zǒu guòlái",
         "hv": "tẩu quá lai"
        }
       ],
       "traceWord": "朝",
       "py": "Nà gè rén cháo wǒmen zǒu guòlái",
       "traceKey": "chao",
       "traceInfo": [
        {
         "c": "朝",
         "py": "cháo",
         "hv": "triều"
        }
       ]
      },
      {
       "scene": "🏢🔊",
       "full": "楼下传来很大的声音",
       "vi": "Từ dưới lầu vọng lên tiếng động rất lớn",
       "parts": [
        {
         "t": "楼下",
         "ico": "🏢",
         "c": "s",
         "py": "lóu xià",
         "hv": "lâu hạ"
        },
        {
         "t": "传来",
         "ico": "📢",
         "c": "v",
         "py": "chuánlái",
         "hv": "truyền lai"
        },
        {
         "t": "很大的声音",
         "ico": "🔊",
         "c": "o",
         "py": "hěn dà de shēngyīn",
         "hv": "ngận đại đích thanh âm"
        }
       ],
       "traceWord": "传来",
       "py": "Lóu xià chuánlái hěn dà de shēngyīn",
       "traceKey": "chuanlai",
       "traceInfo": [
        {
         "c": "传",
         "py": "chuán",
         "hv": "truyền"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "🚗🏃🏢",
       "full": "我们开车赶到了公司",
       "vi": "Chúng tôi lái xe kịp đến công ty",
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
         "c": "o",
         "py": "kāichē",
         "hv": "khai xa"
        },
        {
         "t": "赶到了公司",
         "ico": "🏢",
         "c": "v",
         "py": "gǎndào le gōngsī",
         "hv": "cản đáo liễu công ti"
        }
       ],
       "traceWord": "赶到",
       "py": "Wǒmen kāichē gǎndào le gōngsī",
       "traceKey": "gandao",
       "traceInfo": [
        {
         "c": "赶",
         "py": "gǎn",
         "hv": "cản"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🚪🙌🔙",
       "full": "他推开门往后退了一步",
       "vi": "Anh ấy đẩy cửa ra rồi lùi lại một bước",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "推开门",
         "ico": "🚪",
         "c": "v",
         "py": "tuīkāi mén",
         "hv": "thôi khai môn"
        },
        {
         "t": "往后退了一步",
         "ico": "🔙",
         "c": "o",
         "py": "wǎng hòu tuì le yī bù",
         "hv": "vãng hậu thoái liễu nhất bộ"
        }
       ],
       "traceWord": "推开",
       "py": "Tā tuīkāi mén wǎng hòu tuì le yī bù",
       "traceKey": "tuikai",
       "traceInfo": [
        {
         "c": "推",
         "py": "tuī",
         "hv": "thôi"
        },
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        }
       ]
      },
      {
       "scene": "🙋⬆️🧑‍💼",
       "full": "请随我上去开会",
       "vi": "Mời đi theo tôi lên trên họp",
       "parts": [
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "随我",
         "ico": "🙋",
         "c": "s",
         "py": "suí wǒ",
         "hv": "tùy ngã"
        },
        {
         "t": "上去开会",
         "ico": "⬆️",
         "c": "o",
         "py": "shàngqù kāihuì",
         "hv": "thượng khứ khai hội"
        }
       ],
       "traceWord": "随",
       "py": "Qǐng suí wǒ shàngqù kāihuì",
       "traceKey": "sui",
       "traceInfo": [
        {
         "c": "随",
         "py": "suí",
         "hv": "tùy"
        }
       ]
      },
      {
       "scene": "🧑‍✈️👥➡️",
       "full": "队长说大家一起向前进",
       "vi": "Đội trưởng nói mọi người cùng tiến lên phía trước",
       "parts": [
        {
         "t": "队长",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "duìzhǎng",
         "hv": "đội trưởng"
        },
        {
         "t": "说",
         "ico": "🗣️",
         "c": "v",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "t": "大家一起向前进",
         "ico": "➡️",
         "c": "o",
         "py": "dàjiā yīqǐ xiàng qiánjìn",
         "hv": "đại gia nhất khởi hướng tiền tiến"
        }
       ],
       "traceWord": "前进",
       "py": "Duìzhǎng shuō dàjiā yīqǐ xiàng qiánjìn",
       "traceKey": "qianjin",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        }
       ]
      },
      {
       "scene": "👥⬇️⏳",
       "full": "你们先下去等我",
       "vi": "Các bạn xuống trước đợi tôi",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "先下去",
         "ico": "⬇️",
         "c": "v",
         "py": "xiān xiàqù",
         "hv": "tiên hạ khứ"
        },
        {
         "t": "等我",
         "ico": "⏳",
         "c": "o",
         "py": "děng wǒ",
         "hv": "đẳng ngã"
        }
       ],
       "traceWord": "下去",
       "py": "Nǐmen xiān xiàqù děng wǒ",
       "traceKey": "xiaqu",
       "traceInfo": [
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
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
       "q": "路口的左边有银行，我们要去银行，应该朝哪边转？",
       "qvi": "Bên trái ngã tư có ngân hàng, chúng ta cần đến ngân hàng, nên rẽ về phía nào?",
       "scene": "🛣️🏦",
       "ans": "朝左边转",
       "opts": [
        {
         "txt": "朝右边转",
         "ico": "➡️",
         "py": "Cháo yòubian zhuǎn"
        },
        {
         "txt": "朝左边转",
         "ico": "⬅️",
         "py": "Cháo zuǒbian zhuǎn"
        },
        {
         "txt": "朝前边走",
         "ico": "⬆️",
         "py": "Cháo qiánbian zǒu"
        }
       ],
       "qpy": "Lùkǒu de zuǒbian yǒu yínháng wǒmen yào qù yínháng yīnggāi cháo nǎ biān zhuǎn?"
      },
      {
       "q": "你想退出这个微信群吗？",
       "qvi": "Bạn muốn rời nhóm WeChat này không?",
       "scene": "📱👥",
       "ans": "我想退出",
       "opts": [
        {
         "txt": "我想进去",
         "ico": "➡️",
         "py": "Wǒ xiǎng jìnqù"
        },
        {
         "txt": "我想退出",
         "ico": "🚪",
         "py": "Wǒ xiǎng tuìchū"
        },
        {
         "txt": "我想留下来",
         "ico": "🪑",
         "py": "Wǒ xiǎng liú xiàlái"
        }
       ],
       "qpy": "Nǐ xiǎng tuìchū zhè gè Wēixìn qún ma?"
      },
      {
       "q": "我在楼下等你，你能下来吗？",
       "qvi": "Tôi đợi bạn dưới lầu, bạn xuống được không?",
       "scene": "🏢⬇️",
       "ans": "我马上下来",
       "opts": [
        {
         "txt": "我马上上来",
         "ico": "⬆️",
         "py": "Wǒ mǎshàng shànglái"
        },
        {
         "txt": "我不在家",
         "ico": "🏠",
         "py": "Wǒ bú zàijiā"
        },
        {
         "txt": "我马上下来",
         "ico": "⬇️",
         "py": "Wǒ mǎshàng xiàlái"
        }
       ],
       "qpy": "Wǒ zài lóu xià děng nǐ nǐ néng xiàlái ma?"
      },
      {
       "q": "你们怎么上山？",
       "qvi": "Các bạn lên núi bằng cách nào?",
       "scene": "⛰️🥾",
       "ans": "我们爬上去",
       "opts": [
        {
         "txt": "我们坐飞机去",
         "ico": "✈️",
         "py": "Wǒmen zuò fēijī qù"
        },
        {
         "txt": "我们爬上去",
         "ico": "🥾",
         "py": "Wǒmen pá shàngqù"
        },
        {
         "txt": "我们骑自行车去",
         "ico": "🚲",
         "py": "Wǒmen qí zìxíngchē qù"
        }
       ],
       "qpy": "Nǐmen zěnme shàng shān?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn gặp ở công ty và chỉ hướng",
      "steps": [
       "<b>Bước 1:</b> Bạn đứng dưới lầu công ty, đồng nghiệp ở trên. Gọi hoặc nhắn: <i>\"我在楼下等你，你能下来吗？\"</i> rồi tự trả lời <i>\"我马上下来\"</i>.",
       "<b>Bước 2:</b> Có khách đến họp. Mời khách: <i>\"请随我上去开会\"</i>, rồi nói với đồng nghiệp <i>\"你们先下去等我\"</i> để phân công.",
       "<b>Bước 3:</b> Một người hỏi đường trong khu văn phòng. Dùng <i>\"朝左边转\"</i> hoặc <i>\"朝前边走\"</i> để chỉ đường, tự nói thành tiếng ba hướng khác nhau."
      ]
     }
    },
    {
     "id": "3.8C",
     "name": "Bài 3.8C: Đến nơi, hành lý và vận chuyển",
     "grammar": {
      "formulas": [
       "🧳 把 + 行李 + ⚡ 放 + 到 + 🚗 车上",
       "👶 小孩儿 + ⚡ 抓 + 住 + ✋ 妈妈的手",
       "🧑 我们 + ⚡ 拿 + 走 + 🧳 行李"
      ],
      "tip": "Bổ ngữ kết quả: động từ + 到 (dào, đáo) = đạt đến nơi hoặc đích: 放到车上, 赶到公司; động từ + 住 (zhù, trú) = giữ chặt, cố định: 抓住; động từ + 走 (zǒu, tẩu) = di chuyển rời khỏi chỗ cũ: 拿走. Từ chỉ nơi chốn đứng sau 到.",
      "vn_tip": "Người Việt hay nói \"放车上\" hoặc \"抓妈妈的手\" mà thiếu bổ ngữ, nghe như hành động chưa hoàn thành hoặc thiếu đích đến. Cần có 到 khi có nơi đến (放到车上), 住 khi nhấn mạnh giữ chặt (抓住), 走 khi vật bị mang đi (拿走)."
     },
     "chunks": [
      {
       "scene": "✈️⏰🏙️",
       "full": "飞机九点到达上海",
       "vi": "Máy bay đến Thượng Hải lúc chín giờ",
       "parts": [
        {
         "t": "飞机九点",
         "ico": "✈️",
         "c": "s",
         "py": "fēijī jiǔ diǎn",
         "hv": "phi cơ cửu điểm"
        },
        {
         "t": "到达",
         "ico": "🛬",
         "c": "v",
         "py": "dàodá",
         "hv": "đáo đạt"
        },
        {
         "t": "上海",
         "ico": "🏙️",
         "c": "o",
         "py": "Shànghǎi",
         "hv": "thượng hải"
        }
       ],
       "traceWord": "到达",
       "py": "Fēijī jiǔ diǎn dàodá Shànghǎi",
       "traceKey": "daoda",
       "traceInfo": [
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        },
        {
         "c": "达",
         "py": "dá",
         "hv": "đạt"
        }
       ]
      },
      {
       "scene": "🧑🧳🚗",
       "full": "他把行李放到了车上",
       "vi": "Anh ấy đã để hành lý lên xe",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把行李",
         "ico": "🧳",
         "c": "o",
         "py": "bǎ xíngli",
         "hv": "bả hành lý"
        },
        {
         "t": "放到了车上",
         "ico": "🚗",
         "c": "v",
         "py": "fàngdào le chē shang",
         "hv": "phóng đáo liễu xa thượng"
        }
       ],
       "traceWord": "行李",
       "py": "Tā bǎ xíngli fàngdào le chē shang",
       "traceKey": "xingli",
       "traceInfo": [
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        },
        {
         "c": "李",
         "py": "li",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "👶🤝👩",
       "full": "小孩儿抓住妈妈的手",
       "vi": "Đứa trẻ nắm chặt tay mẹ",
       "parts": [
        {
         "t": "小孩儿",
         "ico": "👶",
         "c": "s",
         "py": "xiǎoháir",
         "hv": "tiểu hài nhi"
        },
        {
         "t": "抓住",
         "ico": "🤝",
         "c": "v",
         "py": "zhuāzhù",
         "hv": "trảo trú"
        },
        {
         "t": "妈妈的手",
         "ico": "✋",
         "c": "o",
         "py": "māma de shǒu",
         "hv": "ma ma đích thủ"
        }
       ],
       "traceWord": "抓住",
       "py": "Xiǎoháir zhuāzhù māma de shǒu",
       "traceKey": "zhuazhu",
       "traceInfo": [
        {
         "c": "抓",
         "py": "zhuā",
         "hv": "trảo"
        },
        {
         "c": "住",
         "py": "zhù",
         "hv": "trú"
        }
       ]
      },
      {
       "scene": "🏢🚚🍞",
       "full": "公司用汽车运输食品",
       "vi": "Công ty dùng ô tô để vận chuyển thực phẩm",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "用汽车",
         "ico": "🚚",
         "c": "o",
         "py": "yòng qìchē",
         "hv": "dụng khí xa"
        },
        {
         "t": "运输食品",
         "ico": "🍞",
         "c": "v",
         "py": "yùnshū shípǐn",
         "hv": "vận thâu thực phẩm"
        }
       ],
       "traceWord": "运输",
       "py": "Gōngsī yòng qìchē yùnshū shípǐn",
       "traceKey": "yunshu",
       "traceInfo": [
        {
         "c": "运",
         "py": "yùn",
         "hv": "vận"
        },
        {
         "c": "输",
         "py": "shū",
         "hv": "thâu"
        }
       ]
      },
      {
       "scene": "🏃✈️📋",
       "full": "你赶紧前往机场办手续",
       "vi": "Bạn mau đến sân bay làm thủ tục",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "赶紧",
         "ico": "⚡",
         "c": "o",
         "py": "gǎnjǐn",
         "hv": "cản khẩn"
        },
        {
         "t": "前往机场办手续",
         "ico": "✈️",
         "c": "v",
         "py": "qiánwǎng jīchǎng bàn shǒuxù",
         "hv": "tiền vãng cơ trường biện thủ tục"
        }
       ],
       "traceWord": "前往",
       "py": "Nǐ gǎnjǐn qiánwǎng jīchǎng bàn shǒuxù",
       "traceKey": "qianwang",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "往",
         "py": "wǎng",
         "hv": "vãng"
        }
       ]
      },
      {
       "scene": "🌧️🧳🏠",
       "full": "快下雨了我们赶快拿走行李",
       "vi": "Sắp mưa rồi, chúng ta mau mang hành lý đi",
       "parts": [
        {
         "t": "快下雨了",
         "ico": "🌧️",
         "c": "o",
         "py": "kuài xià yǔ le",
         "hv": "khoái hạ vũ liễu"
        },
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "赶快拿走行李",
         "ico": "🧳",
         "c": "v",
         "py": "gǎnkuài ná zǒu xíngli",
         "hv": "cản khoái nã tẩu hành lý"
        }
       ],
       "traceWord": "赶快",
       "py": "Kuài xià yǔ le wǒmen gǎnkuài ná zǒu xíngli",
       "traceKey": "gankuai",
       "traceInfo": [
        {
         "c": "赶",
         "py": "gǎn",
         "hv": "cản"
        },
        {
         "c": "快",
         "py": "kuài",
         "hv": "khoái"
        }
       ]
      },
      {
       "scene": "📩🏃⏰",
       "full": "接到通知你要立刻出发",
       "vi": "Nhận được thông báo thì bạn phải xuất phát ngay",
       "parts": [
        {
         "t": "接到通知",
         "ico": "📩",
         "c": "o",
         "py": "jiēdào tōngzhī",
         "hv": "tiếp đáo thông tri"
        },
        {
         "t": "你要",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ yào",
         "hv": "nễ yếu"
        },
        {
         "t": "立刻出发",
         "ico": "⏰",
         "c": "v",
         "py": "lìkè chūfā",
         "hv": "lập khắc xuất phát"
        }
       ],
       "traceWord": "立刻",
       "py": "Jiēdào tōngzhī nǐ yào lìkè chūfā",
       "traceKey": "like",
       "traceInfo": [
        {
         "c": "立",
         "py": "lì",
         "hv": "lập"
        },
        {
         "c": "刻",
         "py": "kè",
         "hv": "khắc"
        }
       ]
      },
      {
       "scene": "🚄🚉",
       "full": "火车正在接近北京车站",
       "vi": "Tàu đang đến gần ga Bắc Kinh",
       "parts": [
        {
         "t": "火车",
         "ico": "🚄",
         "c": "s",
         "py": "huǒchē",
         "hv": "hỏa xa"
        },
        {
         "t": "正在",
         "ico": "⏳",
         "c": "o",
         "py": "zhèngzài",
         "hv": "chính tại"
        },
        {
         "t": "接近北京车站",
         "ico": "🚉",
         "c": "v",
         "py": "jiējìn Běijīng chēzhàn",
         "hv": "tiếp cận bắc kinh xa trạm"
        }
       ],
       "traceWord": "接近",
       "py": "Huǒchē zhèngzài jiējìn Běijīng chēzhàn",
       "traceKey": "jiejin",
       "traceInfo": [
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        },
        {
         "c": "近",
         "py": "jìn",
         "hv": "cận"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "今天天气很热，气温能达到三十度吗？",
       "qvi": "Hôm nay trời rất nóng, nhiệt độ có thể đạt ba mươi độ không?",
       "scene": "☀️🌡️",
       "ans": "能达到三十度",
       "opts": [
        {
         "txt": "零下三度",
         "ico": "❄️",
         "py": "Líng xià sān dù"
        },
        {
         "txt": "零下三十度",
         "ico": "🥶",
         "py": "Líng xià sān shí dù"
        },
        {
         "txt": "能达到三十度",
         "ico": "🌡️",
         "py": "Néng dádào sān shí dù"
        }
       ],
       "qpy": "Jīntiān tiānqì hěn rè qìwēn néng dádào sān shí dù ma?"
      },
      {
       "q": "飞机九点起飞，现在是七点，我们要等待多久？",
       "qvi": "Máy bay cất cánh lúc chín giờ, bây giờ là bảy giờ, chúng ta phải đợi bao lâu?",
       "scene": "✈️⏳",
       "ans": "要等待两个小时",
       "opts": [
        {
         "txt": "要等待两天",
         "ico": "📅",
         "py": "Yào děngdài liǎng tiān"
        },
        {
         "txt": "要等待两个小时",
         "ico": "🕘",
         "py": "Yào děngdài liǎng gè xiǎoshí"
        },
        {
         "txt": "要等待五分钟",
         "ico": "⏱️",
         "py": "Yào děngdài wǔ fēnzhōng"
        }
       ],
       "qpy": "Fēijī jiǔ diǎn qǐfēi xiànzài shì qī diǎn wǒmen yào děngdài duōjiǔ?"
      },
      {
       "q": "这个包太紧了我打不开，怎么办？",
       "qvi": "Cái túi này chặt quá tôi không mở được, làm sao đây?",
       "scene": "🎒🔒",
       "ans": "我帮你解开",
       "opts": [
        {
         "txt": "我帮你关上",
         "ico": "🔒",
         "py": "Wǒ bāng nǐ guānshang"
        },
        {
         "txt": "我帮你抓一下",
         "ico": "✋",
         "py": "Wǒ bāng nǐ zhuā yī xià"
        },
        {
         "txt": "我帮你解开",
         "ico": "🔓",
         "py": "Wǒ bāng nǐ jiěkāi"
        }
       ],
       "qpy": "Zhè gè bāo tài jǐn le wǒ dǎ bù kāi zěnme bàn?"
      },
      {
       "q": "从这里到机场的路直不直？",
       "qvi": "Đường từ đây đến sân bay có thẳng không?",
       "scene": "🛣️✈️",
       "ans": "这条路很直",
       "opts": [
        {
         "txt": "这条路很直",
         "ico": "➡️",
         "py": "Zhè tiáo lù hěn zhí"
        },
        {
         "txt": "这条路很旧",
         "ico": "🏚️",
         "py": "Zhè tiáo lù hěn jiù"
        },
        {
         "txt": "这条路很小",
         "ico": "🐜",
         "py": "Zhè tiáo lù hěn xiǎo"
        }
       ],
       "qpy": "Cóng zhèlǐ dào jīchǎng de lù zhí bù zhí?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đến sân bay và lo hành lý",
      "steps": [
       "<b>Bước 1:</b> Bạn nhắn cho đồng nghiệp đi cùng chuyến công tác: <i>\"飞机九点到达上海\"</i> và nhắc <i>\"你赶紧前往机场办手续\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng khi xếp hành lý: <i>\"他把行李放到了车上\"</i>, rồi thay chủ ngữ và nơi để bằng đồ vật thật của bạn (ba câu).",
       "<b>Bước 3:</b> Trời sắp mưa hoặc nhận được thông báo gấp. Nói với đồng nghiệp: <i>\"快下雨了我们赶快拿走行李\"</i> hoặc <i>\"接到通知你要立刻出发\"</i>."
      ]
     }
    }
   ]
  },
  "3.9": {
   "lessons": [
    {
     "id": "3.9A",
     "name": "Bài 3.9A: Du lịch, đặt vé và thắng cảnh",
     "grammar": {
      "formulas": [
       "🏞️ 长城 + ⚡ 美是美 + ➡️ 就是人太多",
       "🏨 旅馆 + ⚡ 好是好 + ➡️ 不过太贵"
      ],
      "tip": "Mẫu \"X是X，就是/不过……\" (X thì X, chỉ là/nhưng mà ...): nhắc lại tính từ hai lần với 是 ở giữa để công nhận ưu điểm, rồi 就是 (jiùshì) hoặc 不过 (búguò, bất quá) nêu điểm chưa ổn.",
      "vn_tip": "Người Việt hay nói \"长城很美，但是人多\" mà quên sắc thái nhượng bộ. Muốn nói \"đẹp thì đẹp, chỉ là...\" phải lặp tính từ: 美是美，就是……; không bỏ 是 và không thêm 很 vào giữa."
     },
     "chunks": [
      {
       "scene": "🏞️😍👥",
       "full": "长城美是美就是人太多",
       "vi": "Vạn Lý Trường Thành đẹp thì đẹp, chỉ là người quá đông",
       "parts": [
        {
         "t": "长城",
         "ico": "🏞️",
         "c": "s",
         "py": "Chángchéng",
         "hv": "trường thành"
        },
        {
         "t": "美是美",
         "ico": "😍",
         "c": "v",
         "py": "měi shì měi",
         "hv": "mỹ thị mỹ"
        },
        {
         "t": "就是人太多",
         "ico": "👥",
         "c": "o",
         "py": "jiù shì rén tài duō",
         "hv": "tựu thị nhân thái đa"
        }
       ],
       "traceWord": "长城",
       "py": "Chángchéng měi shì měi jiù shì rén tài duō",
       "traceKey": "changcheng",
       "traceInfo": [
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        },
        {
         "c": "城",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "🏨👍💰",
       "full": "这家旅馆好是好不过太贵",
       "vi": "Khách sạn này tốt thì tốt, có điều đắt quá",
       "parts": [
        {
         "t": "这家旅馆",
         "ico": "🏨",
         "c": "s",
         "py": "zhè jiā lǚguǎn",
         "hv": "giá gia lữ quán"
        },
        {
         "t": "好是好",
         "ico": "👍",
         "c": "v",
         "py": "hǎo shì hǎo",
         "hv": "hảo thị hảo"
        },
        {
         "t": "不过太贵",
         "ico": "💰",
         "c": "o",
         "py": "bùguò tài guì",
         "hv": "bất quá thái quý"
        }
       ],
       "traceWord": "旅馆",
       "py": "Zhè jiā lǚguǎn hǎo shì hǎo bùguò tài guì",
       "traceKey": "luguan",
       "traceInfo": [
        {
         "c": "旅",
         "py": "lǚ",
         "hv": "lữ"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "🌄✨🚗",
       "full": "景色美丽是美丽就是路太远",
       "vi": "Phong cảnh đẹp thì đẹp, chỉ là đường quá xa",
       "parts": [
        {
         "t": "景色",
         "ico": "🌄",
         "c": "s",
         "py": "jǐngsè",
         "hv": "cảnh sắc"
        },
        {
         "t": "美丽是美丽",
         "ico": "✨",
         "c": "v",
         "py": "měilì shì měilì",
         "hv": "mỹ lệ thị mỹ lệ"
        },
        {
         "t": "就是路太远",
         "ico": "🛣️",
         "c": "o",
         "py": "jiù shì lù tài yuǎn",
         "hv": "tựu thị lộ thái viễn"
        }
       ],
       "traceWord": "景色",
       "py": "Jǐngsè měilì shì měilì jiù shì lù tài yuǎn",
       "traceKey": "jingse",
       "traceInfo": [
        {
         "c": "景",
         "py": "jǐng",
         "hv": "cảnh"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "🧳🏢🎫",
       "full": "旅行社帮我订机票",
       "vi": "Công ty du lịch giúp tôi đặt vé máy bay",
       "parts": [
        {
         "t": "旅行社",
         "ico": "🏢",
         "c": "s",
         "py": "lǚxíngshè",
         "hv": "lữ hành xã"
        },
        {
         "t": "帮我订",
         "ico": "🤝",
         "c": "v",
         "py": "bāng wǒ dìng",
         "hv": "bang ngã đính"
        },
        {
         "t": "机票",
         "ico": "🎫",
         "c": "o",
         "py": "jīpiào",
         "hv": "cơ phiếu"
        }
       ],
       "traceWord": "旅行社",
       "py": "Lǚxíngshè bāng wǒ dìng jīpiào",
       "traceKey": "luxingshe",
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
        },
        {
         "c": "社",
         "py": "shè",
         "hv": "xã"
        }
       ]
      },
      {
       "scene": "🧑🚫🧳",
       "full": "小明取消了明天的旅行",
       "vi": "Tiểu Minh đã hủy chuyến du lịch ngày mai",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "取消了",
         "ico": "🚫",
         "c": "v",
         "py": "qǔxiāo le",
         "hv": "thủ tiêu liễu"
        },
        {
         "t": "明天的旅行",
         "ico": "🧳",
         "c": "o",
         "py": "míngtiān de lǚxíng",
         "hv": "minh thiên đích lữ hành"
        }
       ],
       "traceWord": "取消",
       "py": "Xiǎomíng qǔxiāo le míngtiān de lǚxíng",
       "traceKey": "quxiao",
       "traceInfo": [
        {
         "c": "取",
         "py": "qǔ",
         "hv": "thủ"
        },
        {
         "c": "消",
         "py": "xiāo",
         "hv": "tiêu"
        }
       ]
      },
      {
       "scene": "🏯📖🧱",
       "full": "古代的长城有很多故事",
       "vi": "Vạn Lý Trường Thành thời cổ đại có rất nhiều câu chuyện",
       "parts": [
        {
         "t": "古代的长城",
         "ico": "🏯",
         "c": "s",
         "py": "gǔdài de Chángchéng",
         "hv": "cổ đại đích trường thành"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "很多故事",
         "ico": "📖",
         "c": "o",
         "py": "hěn duō gùshi",
         "hv": "ngận đa cố sự"
        }
       ],
       "traceWord": "古代",
       "py": "Gǔdài de Chángchéng yǒu hěn duō gùshi",
       "traceKey": "gudai",
       "traceInfo": [
        {
         "c": "古",
         "py": "gǔ",
         "hv": "cổ"
        },
        {
         "c": "代",
         "py": "dài",
         "hv": "đại"
        }
       ]
      },
      {
       "scene": "🧑🍜🏘️",
       "full": "我想体验当地的特色美食",
       "vi": "Tôi muốn trải nghiệm món ăn đặc sắc của địa phương",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想体验",
         "ico": "🌟",
         "c": "v",
         "py": "xiǎng tǐyàn",
         "hv": "tưởng thể nghiệm"
        },
        {
         "t": "当地的特色美食",
         "ico": "🍜",
         "c": "o",
         "py": "dāngdì de tèsè měishí",
         "hv": "đương địa đích đặc sắc mỹ thực"
        }
       ],
       "traceWord": "体验",
       "py": "Wǒ xiǎng tǐyàn dāngdì de tèsè měishí",
       "traceKey": "tiyan",
       "traceInfo": [
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        },
        {
         "c": "验",
         "py": "yàn",
         "hv": "nghiệm"
        }
       ]
      },
      {
       "scene": "🧳😮‍💨🏞️",
       "full": "游客觉得长城美好是美好就是累",
       "vi": "Du khách thấy Trường Thành đẹp thì đẹp, chỉ là mệt",
       "parts": [
        {
         "t": "游客",
         "ico": "🧳",
         "c": "s",
         "py": "yóukè",
         "hv": "du khách"
        },
        {
         "t": "觉得",
         "ico": "💭",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "长城美好是美好就是累",
         "ico": "😮‍💨",
         "c": "o",
         "py": "Chángchéng měihǎo shì měihǎo jiù shì lèi",
         "hv": "trường thành mỹ hảo thị mỹ hảo tựu thị lụy"
        }
       ],
       "traceWord": "美好",
       "py": "Yóukè juéde Chángchéng měihǎo shì měihǎo jiù shì lèi",
       "traceKey": "meihao",
       "traceInfo": [
        {
         "c": "美",
         "py": "měi",
         "hv": "mỹ"
        },
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "长城怎么样？",
       "qvi": "Trường Thành thế nào?",
       "scene": "🏞️❓",
       "ans": "美是美就是人太多",
       "opts": [
        {
         "txt": "美是美就是人太多",
         "ico": "🏞️",
         "py": "Měi shì měi jiù shì rén tài duō"
        },
        {
         "txt": "长城在海边",
         "ico": "🌊",
         "py": "Chángchéng zài hǎi biān"
        },
        {
         "txt": "我坐火车去",
         "ico": "🚆",
         "py": "Wǒ zuò huǒchē qù"
        }
       ],
       "qpy": "Chángchéng zěnmeyàng?"
      },
      {
       "q": "你为什么取消了旅行？",
       "qvi": "Vì sao bạn hủy chuyến du lịch?",
       "scene": "🚫🧳",
       "ans": "因为明天要下雨",
       "opts": [
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        },
        {
         "txt": "因为明天要下雨",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān yào xià yǔ"
        },
        {
         "txt": "它有三个门",
         "ico": "🚪",
         "py": "Tā yǒu sān gè mén"
        }
       ],
       "qpy": "Nǐ wèi shénme qǔxiāo le lǚxíng?"
      },
      {
       "q": "你在哪儿订的机票？",
       "qvi": "Bạn đặt vé máy bay ở đâu?",
       "scene": "🎫❓",
       "ans": "我在旅行社订的",
       "opts": [
        {
         "txt": "我在北京工作",
         "ico": "💼",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "我想去古城游一游",
         "ico": "🏯",
         "py": "Wǒ xiǎng qù gǔ chéng yóu yī yóu"
        },
        {
         "txt": "我在旅行社订的",
         "ico": "🏢",
         "py": "Wǒ zài lǚxíngshè dìng de"
        }
       ],
       "qpy": "Nǐ zài nǎr dìng de jīpiào?"
      },
      {
       "q": "这个旅馆怎么样？",
       "qvi": "Khách sạn này thế nào?",
       "scene": "🏨❓",
       "ans": "好是好就是太远",
       "opts": [
        {
         "txt": "他是我的同事",
         "ico": "🧑‍💼",
         "py": "Tā shì wǒ de tóngshì"
        },
        {
         "txt": "好是好就是太远",
         "ico": "🏨",
         "py": "Hǎo shì hǎo jiù shì tài yuǎn"
        },
        {
         "txt": "我们明天不去",
         "ico": "🙅",
         "py": "Wǒmen míngtiān bú qù"
        }
       ],
       "qpy": "Zhè gè lǚguǎn zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bàn với đồng nghiệp về chuyến đi cuối tuần",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi ý kiến về một địa điểm du lịch bạn biết, ví dụ <i>\"长城怎么样？\"</i>, rồi tự trả lời bằng mẫu <i>\"美是美，就是人太多\"</i>.",
       "<b>Bước 2:</b> Gọi (hoặc tự nói thành tiếng) cho công ty du lịch: nhờ họ đặt vé và khách sạn, dùng <i>\"旅行社帮我订机票\"</i>, rồi nhận xét khách sạn bằng <i>\"好是好，不过太贵\"</i>.",
       "<b>Bước 3:</b> Báo với đồng nghiệp rằng chuyến đi bị hoãn: nói <i>\"小明取消了明天的旅行\"</i> và giải thích lý do bằng một câu đơn giản."
      ]
     }
    },
    {
     "id": "3.9B",
     "name": "Bài 3.9B: Địa danh, thành phố và vùng miền",
     "grammar": {
      "formulas": [
       "🧑 我 + 📅 从下周起 + ➡️ 去首都",
       "🏠 他 + 📅 从今年起 + 📍 住在北部城市"
      ],
      "tip": "Mẫu \"从……起\" (cóng ... qǐ, tòng ... khởi) nghĩa là \"kể từ ... trở đi\", đặt mốc thời gian ở giữa; thường đứng sau chủ ngữ và trước động từ: 我从下周起去首都.",
      "vn_tip": "Người Việt hay nói \"Từ tuần sau tôi đi\" và dịch thành 从下周去 mà bỏ 起. Với mốc thời gian bắt đầu kéo dài, nên nói đủ 从……起; đừng đặt 从……起 sau động từ."
     },
     "chunks": [
      {
       "scene": "🧑📅🏛️",
       "full": "我从下周起去首都",
       "vi": "Từ tuần sau tôi đi thủ đô",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "从下周起去",
         "ico": "📅",
         "c": "v",
         "py": "cóng xià zhōu qǐ qù",
         "hv": "tòng hạ chu khởi khứ"
        },
        {
         "t": "首都",
         "ico": "🏛️",
         "c": "o",
         "py": "shǒudū",
         "hv": "thủ đô"
        }
       ],
       "traceWord": "首都",
       "py": "Wǒ cóng xià zhōu qǐ qù shǒudū",
       "traceKey": "shoudu",
       "traceInfo": [
        {
         "c": "首",
         "py": "shǒu",
         "hv": "thủ"
        },
        {
         "c": "都",
         "py": "dū",
         "hv": "đô"
        }
       ]
      },
      {
       "scene": "🧑📅🏙️",
       "full": "他从今年起住在北部城市",
       "vi": "Từ năm nay anh ấy sống ở thành phố miền Bắc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从今年起住在",
         "ico": "📅",
         "c": "v",
         "py": "cóng jīnnián qǐ zhù zài",
         "hv": "tòng kim niên khởi trú tại"
        },
        {
         "t": "北部城市",
         "ico": "🏙️",
         "c": "o",
         "py": "běibù chéngshì",
         "hv": "bắc bộ thành thị"
        }
       ],
       "traceWord": "城市",
       "py": "Tā cóng jīnnián qǐ zhù zài běibù chéngshì",
       "traceKey": "chengshi",
       "traceInfo": [
        {
         "c": "城",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "市",
         "py": "shì",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "🏡📅✨",
       "full": "家乡从今年起变得很漂亮",
       "vi": "Quê hương từ năm nay trở nên rất đẹp",
       "parts": [
        {
         "t": "家乡",
         "ico": "🏡",
         "c": "s",
         "py": "jiāxiāng",
         "hv": "gia hương"
        },
        {
         "t": "从今年起变得",
         "ico": "📅",
         "c": "v",
         "py": "cóng jīnnián qǐ biàn de",
         "hv": "tòng kim niên khởi biến đắc"
        },
        {
         "t": "很漂亮",
         "ico": "✨",
         "c": "o",
         "py": "hěn piàoliang",
         "hv": "ngận phiêu lượng"
        }
       ],
       "traceWord": "家乡",
       "py": "Jiāxiāng cóng jīnnián qǐ biàn de hěn piàoliang",
       "traceKey": "jiaxiang",
       "traceInfo": [
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "乡",
         "py": "xiāng",
         "hv": "hương"
        }
       ]
      },
      {
       "scene": "🏘️🧧🛌",
       "full": "当地人从春节起休假一个星期",
       "vi": "Người địa phương nghỉ một tuần kể từ Tết",
       "parts": [
        {
         "t": "当地人",
         "ico": "🏘️",
         "c": "s",
         "py": "dāngdì rén",
         "hv": "đương địa nhân"
        },
        {
         "t": "从春节起休假",
         "ico": "🧧",
         "c": "v",
         "py": "cóng Chūnjié qǐ xiūjià",
         "hv": "tòng xuân tiết khởi hưu giá"
        },
        {
         "t": "一个星期",
         "ico": "🗓️",
         "c": "o",
         "py": "yī gè xīngqī",
         "hv": "nhất cá tinh kỳ"
        }
       ],
       "traceWord": "当地",
       "py": "Dāngdì rén cóng Chūnjié qǐ xiūjià yī gè xīngqī",
       "traceKey": "dangdi",
       "traceInfo": [
        {
         "c": "当",
         "py": "dāng",
         "hv": "đương"
        },
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        }
       ]
      },
      {
       "scene": "🗺️📅🌧️",
       "full": "东部地区从下午起会下雨",
       "vi": "Khu vực miền Đông từ chiều sẽ có mưa",
       "parts": [
        {
         "t": "东部地区",
         "ico": "🗺️",
         "c": "s",
         "py": "dōngbù dìqū",
         "hv": "đông bộ địa khu"
        },
        {
         "t": "从下午起会",
         "ico": "📅",
         "c": "v",
         "py": "cóng xiàwǔ qǐ huì",
         "hv": "tòng hạ ngọ khởi hội"
        },
        {
         "t": "下雨",
         "ico": "🌧️",
         "c": "o",
         "py": "xià yǔ",
         "hv": "hạ vũ"
        }
       ],
       "traceWord": "地区",
       "py": "Dōngbù dìqū cóng xiàwǔ qǐ huì xià yǔ",
       "traceKey": "diqu",
       "traceInfo": [
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        },
        {
         "c": "区",
         "py": "qū",
         "hv": "khu"
        }
       ]
      },
      {
       "scene": "🌤️📅👍",
       "full": "各地的天气从明天起都很好",
       "vi": "Thời tiết các nơi từ ngày mai đều rất tốt",
       "parts": [
        {
         "t": "各地的天气",
         "ico": "🌤️",
         "c": "s",
         "py": "gèdì de tiānqì",
         "hv": "các địa đích thiên khí"
        },
        {
         "t": "从明天起都",
         "ico": "📅",
         "c": "v",
         "py": "cóng míngtiān qǐ dōu",
         "hv": "tòng minh thiên khởi đô"
        },
        {
         "t": "很好",
         "ico": "👍",
         "c": "o",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "各地",
       "py": "Gèdì de tiānqì cóng míngtiān qǐ dōu hěn hǎo",
       "traceKey": "gedi",
       "traceInfo": [
        {
         "c": "各",
         "py": "gè",
         "hv": "các"
        },
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        }
       ]
      },
      {
       "scene": "🧑📅🚆",
       "full": "西部的朋友从周末起来中部",
       "vi": "Bạn ở miền Tây từ cuối tuần sẽ đến miền Trung",
       "parts": [
        {
         "t": "西部的朋友",
         "ico": "🧑",
         "c": "s",
         "py": "xībù de péngyou",
         "hv": "tây bộ đích bằng hữu"
        },
        {
         "t": "从周末起来",
         "ico": "📅",
         "c": "v",
         "py": "cóng zhōumò qǐlái",
         "hv": "tòng chu mạt khởi lai"
        },
        {
         "t": "中部",
         "ico": "🗺️",
         "c": "o",
         "py": "zhōngbù",
         "hv": "trung bộ"
        }
       ],
       "traceWord": "西部",
       "py": "Xībù de péngyou cóng zhōumò qǐlái zhōngbù",
       "traceKey": "xibu",
       "traceInfo": [
        {
         "c": "西",
         "py": "xī",
         "hv": "tây"
        },
        {
         "c": "部",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      },
      {
       "scene": "🧒🏡🧭",
       "full": "他从十岁起离开故乡来到南部",
       "vi": "Từ năm mười tuổi anh ấy rời quê hương đến miền Nam",
       "parts": [
        {
         "t": "他",
         "ico": "🧒",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从十岁起离开",
         "ico": "📅",
         "c": "v",
         "py": "cóng shí suì qǐ líkāi",
         "hv": "tòng thập tuế khởi ly khai"
        },
        {
         "t": "故乡来到南部",
         "ico": "🧭",
         "c": "o",
         "py": "gùxiāng láidào nánbù",
         "hv": "cố hương lai đáo nam bộ"
        }
       ],
       "traceWord": "故乡",
       "py": "Tā cóng shí suì qǐ líkāi gùxiāng láidào nánbù",
       "traceKey": "guxiang",
       "traceInfo": [
        {
         "c": "故",
         "py": "gù",
         "hv": "cố"
        },
        {
         "c": "乡",
         "py": "xiāng",
         "hv": "hương"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的家乡在哪儿？",
       "qvi": "Quê bạn ở đâu?",
       "scene": "🏡❓",
       "ans": "我的家乡在南部",
       "opts": [
        {
         "txt": "我家有四口人",
         "ico": "👨‍👩‍👧‍👦",
         "py": "Wǒ jiā yǒu sì kǒu rén"
        },
        {
         "txt": "我的家乡在南部",
         "ico": "🗺️",
         "py": "Wǒ de jiāxiāng zài nánbù"
        },
        {
         "txt": "我的家乡很漂亮",
         "ico": "✨",
         "py": "Wǒ de jiāxiāng hěn piàoliang"
        }
       ],
       "qpy": "Nǐ de jiāxiāng zài nǎr?"
      },
      {
       "q": "越南的首都是哪个城市？",
       "qvi": "Thủ đô Việt Nam là thành phố nào?",
       "scene": "🏛️❓",
       "ans": "越南的首都是河内",
       "opts": [
        {
         "txt": "越南的首都是北京",
         "ico": "🇨🇳",
         "py": "Yuènán de shǒudū shì Běijīng"
        },
        {
         "txt": "越南的首都是河内",
         "ico": "🇻🇳",
         "py": "Yuènán de shǒudū shì Hénèi"
        },
        {
         "txt": "越南的首都是上海",
         "ico": "🏙️",
         "py": "Yuènán de shǒudū shì Shànghǎi"
        }
       ],
       "qpy": "Yuènán de shǒudū shì nǎ gè chéngshì?"
      },
      {
       "q": "你从什么时候起住在这个地区？",
       "qvi": "Bạn sống ở khu vực này từ khi nào?",
       "scene": "🏠📅",
       "ans": "我从去年起住在这里",
       "opts": [
        {
         "txt": "我住在城里",
         "ico": "🏙️",
         "py": "Wǒ zhù zài chéng lǐ"
        },
        {
         "txt": "这个区很安静",
         "ico": "🤫",
         "py": "Zhè gè qū hěn ānjìng"
        },
        {
         "txt": "我从去年起住在这里",
         "ico": "🏠",
         "py": "Wǒ cóng qùnián qǐ zhù zài zhèlǐ"
        }
       ],
       "qpy": "Nǐ cóng shénme shíhou qǐ zhù zài zhè gè dìqū?"
      },
      {
       "q": "当地人从哪天起休假？",
       "qvi": "Người địa phương nghỉ từ ngày nào?",
       "scene": "🏘️🛌",
       "ans": "从下周一起休假",
       "opts": [
        {
         "txt": "他们在公司工作",
         "ico": "💼",
         "py": "Tāmen zài gōngsī gōngzuò"
        },
        {
         "txt": "从下周一起休假",
         "ico": "🛌",
         "py": "Cóng xià zhōu yīqǐ xiūjià"
        },
        {
         "txt": "我们坐地铁去",
         "ico": "🚇",
         "py": "Wǒmen zuò dìtiě qù"
        }
       ],
       "qpy": "Dāngdì rén cóng nǎ tiān qǐ xiūjià?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu quê hương và lịch làm việc mới",
      "steps": [
       "<b>Bước 1:</b> Giới thiệu với một đối tác Trung Quốc quê bạn ở miền nào, thành phố nào, dùng <i>\"我的家乡在南部\"</i>.",
       "<b>Bước 2:</b> Thông báo cho đồng nghiệp lịch mới bằng mẫu từ khi nào trở đi, ví dụ <i>\"我从下周起去首都\"</i>, rồi nói thêm một mốc thời gian khác của bạn.",
       "<b>Bước 3:</b> Hỏi đối tác về thời tiết hoặc kỳ nghỉ ở nơi họ sống, dùng <i>\"当地人从哪天起休假？\"</i> và tự nói thành tiếng câu trả lời."
      ]
     }
    },
    {
     "id": "3.9C",
     "name": "Bài 3.9C: Đối ngoại, đoàn đại biểu và xuất nhập cảnh",
     "grammar": {
      "formulas": [
       "🧑 我 + 👉 向大使馆 + ⚡ 打 + 📞 电话",
       "🧑‍💼 经理 + 👉 向代表团 + ⚡ 介绍 + 🏢 公司"
      ],
      "tip": "Giới từ 向 (xiàng, hướng) dẫn ra đối tượng của hành động nói/hỏi/báo: 向 + người/cơ quan + động từ, như 向客人介绍 (giới thiệu với khách), 向大使馆打听. Cụm 向…… đứng trước động từ.",
      "vn_tip": "Người Việt hay đặt đối tượng sau động từ theo tiếng Việt (\"giới thiệu với khách\") nên viết 介绍向客人. Đúng phải là 向客人介绍: 向 + đối tượng luôn đứng TRƯỚC động từ."
     },
     "chunks": [
      {
       "scene": "🧑📞🏛️",
       "full": "我向大使馆打电话",
       "vi": "Tôi gọi điện cho đại sứ quán",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "向大使馆",
         "ico": "🏛️",
         "c": "v",
         "py": "xiàng dàshǐguǎn",
         "hv": "hướng đại sử quán"
        },
        {
         "t": "打电话",
         "ico": "📞",
         "c": "o",
         "py": "dǎ diànhuà",
         "hv": "đả điện thoại"
        }
       ],
       "traceWord": "大使馆",
       "py": "Wǒ xiàng dàshǐguǎn dǎ diànhuà",
       "traceKey": "dashiguan",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "使",
         "py": "shǐ",
         "hv": "sử"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "🧑🛃💬",
       "full": "他向海关说明这件事",
       "vi": "Anh ấy giải thích việc này với hải quan",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "向海关说明",
         "ico": "🛃",
         "c": "v",
         "py": "xiàng hǎiguān shuōmíng",
         "hv": "hướng hải quan thuyết minh"
        },
        {
         "t": "这件事",
         "ico": "💬",
         "c": "o",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        }
       ],
       "traceWord": "海关",
       "py": "Tā xiàng hǎiguān shuōmíng zhè jiàn shì",
       "traceKey": "haiguan",
       "traceInfo": [
        {
         "c": "海",
         "py": "hǎi",
         "hv": "hải"
        },
        {
         "c": "关",
         "py": "guān",
         "hv": "quan"
        }
       ]
      },
      {
       "scene": "🧑‍💼👥🏢",
       "full": "经理向代表团介绍公司",
       "vi": "Giám đốc giới thiệu công ty với đoàn đại biểu",
       "parts": [
        {
         "t": "经理",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "向代表团介绍",
         "ico": "👥",
         "c": "v",
         "py": "xiàng dàibiǎotuán jièshào",
         "hv": "hướng đại biểu đoàn giới thiệu"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "代表团",
       "py": "Jīnglǐ xiàng dàibiǎotuán jièshào gōngsī",
       "traceKey": "daibiaotuan",
       "traceInfo": [
        {
         "c": "代",
         "py": "dài",
         "hv": "đại"
        },
        {
         "c": "表",
         "py": "biǎo",
         "hv": "biểu"
        },
        {
         "c": "团",
         "py": "tuán",
         "hv": "đoàn"
        }
       ]
      },
      {
       "scene": "🧑🧑‍🤝‍🧑📚",
       "full": "我向华人朋友请教汉语",
       "vi": "Tôi nhờ người bạn gốc Hoa chỉ dạy tiếng Hán",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "向华人朋友请教",
         "ico": "🧑‍🤝‍🧑",
         "c": "v",
         "py": "xiàng huárén péngyou qǐngjiào",
         "hv": "hướng hoa nhân bằng hữu thỉnh giáo"
        },
        {
         "t": "汉语",
         "ico": "📚",
         "c": "o",
         "py": "Hànyǔ",
         "hv": "hán ngữ"
        }
       ],
       "traceWord": "华人",
       "py": "Wǒ xiàng huárén péngyou qǐngjiào Hànyǔ",
       "traceKey": "huaren",
       "traceInfo": [
        {
         "c": "华",
         "py": "huá",
         "hv": "hoa"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "🧑‍💼🤝✈️",
       "full": "王代表向我们介绍了访问计划",
       "vi": "Đại biểu Vương giới thiệu với chúng tôi kế hoạch chuyến thăm",
       "parts": [
        {
         "t": "王代表",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "Wáng dàibiǎo",
         "hv": "vương đại biểu"
        },
        {
         "t": "向我们介绍了",
         "ico": "🤝",
         "c": "v",
         "py": "xiàng wǒmen jièshào le",
         "hv": "hướng ngã môn giới thiệu liễu"
        },
        {
         "t": "访问计划",
         "ico": "✈️",
         "c": "o",
         "py": "fǎngwèn jìhuà",
         "hv": "phỏng vấn kế hoạch"
        }
       ],
       "traceWord": "访问",
       "py": "Wáng dàibiǎo xiàng wǒmen jièshào le fǎngwèn jìhuà",
       "traceKey": "fangwen",
       "traceInfo": [
        {
         "c": "访",
         "py": "fǎng",
         "hv": "phỏng"
        },
        {
         "c": "问",
         "py": "wèn",
         "hv": "vấn"
        }
       ]
      },
      {
       "scene": "🧑🌐🤝",
       "full": "他向我介绍两国的外交关系",
       "vi": "Anh ấy giới thiệu với tôi quan hệ ngoại giao của hai nước",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "向我介绍",
         "ico": "💬",
         "c": "v",
         "py": "xiàng wǒ jièshào",
         "hv": "hướng ngã giới thiệu"
        },
        {
         "t": "两国的外交关系",
         "ico": "🌐",
         "c": "o",
         "py": "liǎng guó de wàijiāo guānxì",
         "hv": "lưỡng quốc đích ngoại giao quan hệ"
        }
       ],
       "traceWord": "外交",
       "py": "Tā xiàng wǒ jièshào liǎng guó de wàijiāo guānxì",
       "traceKey": "waijiao",
       "traceInfo": [
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        },
        {
         "c": "交",
         "py": "jiāo",
         "hv": "giao"
        }
       ]
      },
      {
       "scene": "🏛️🌍💡",
       "full": "联合国向全球提出新的建议",
       "vi": "Liên Hợp Quốc đưa ra đề xuất mới với toàn cầu",
       "parts": [
        {
         "t": "联合国",
         "ico": "🏛️",
         "c": "s",
         "py": "Liánhéguó",
         "hv": "liên hợp quốc"
        },
        {
         "t": "向全球提出",
         "ico": "🌍",
         "c": "v",
         "py": "xiàng quánqiú tíchū",
         "hv": "hướng toàn cầu đề xuất"
        },
        {
         "t": "新的建议",
         "ico": "💡",
         "c": "o",
         "py": "xīn de jiànyì",
         "hv": "tân đích kiến nghị"
        }
       ],
       "traceWord": "联合国",
       "py": "Liánhéguó xiàng quánqiú tíchū xīn de jiànyì",
       "traceKey": "lianheguo",
       "traceInfo": [
        {
         "c": "联",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        },
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        }
       ]
      },
      {
       "scene": "🏙️🌏🚪",
       "full": "这个城市向世界开放很多年了",
       "vi": "Thành phố này đã mở cửa với thế giới nhiều năm rồi",
       "parts": [
        {
         "t": "这个城市",
         "ico": "🏙️",
         "c": "s",
         "py": "zhè gè chéngshì",
         "hv": "giá cá thành thị"
        },
        {
         "t": "向世界开放",
         "ico": "🌏",
         "c": "v",
         "py": "xiàng shìjiè kāifàng",
         "hv": "hướng thế giới khai phóng"
        },
        {
         "t": "很多年了",
         "ico": "🗓️",
         "c": "o",
         "py": "hěn duō nián le",
         "hv": "ngận đa niên liễu"
        }
       ],
       "traceWord": "开放",
       "py": "Zhè gè chéngshì xiàng shìjiè kāifàng hěn duō nián le",
       "traceKey": "kaifang",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你向谁学习外文？",
       "qvi": "Bạn học ngoại ngữ với ai?",
       "scene": "📚🧑‍🏫",
       "ans": "我向老师学习外文",
       "opts": [
        {
         "txt": "我向老师学习外文",
         "ico": "🧑‍🏫",
         "py": "Wǒ xiàng lǎoshī xuéxí wàiwén"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        },
        {
         "txt": "他是我的哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ de gēge"
        }
       ],
       "qpy": "Nǐ xiàng shéi xuéxí wàiwén?"
      },
      {
       "q": "你为什么喜欢和外国人交往？",
       "qvi": "Vì sao bạn thích kết giao với người nước ngoài?",
       "scene": "🧑🧑‍🤝‍🧑🌍",
       "ans": "因为可以互相交流",
       "opts": [
        {
         "txt": "因为明天是周末",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì zhōumò"
        },
        {
         "txt": "因为可以互相交流",
         "ico": "💬",
         "py": "Yīnwèi kěyǐ hùxiāng jiāoliú"
        },
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        }
       ],
       "qpy": "Nǐ wèi shénme xǐhuan hé wàiguó rén jiāowǎng?"
      },
      {
       "q": "国内的客人什么时候来？",
       "qvi": "Khách trong nước khi nào đến?",
       "scene": "🧑‍💼⏰",
       "ans": "他们明天下午到",
       "opts": [
        {
         "txt": "我们住在东边",
         "ico": "🏠",
         "py": "Wǒmen zhù zài dōngbian"
        },
        {
         "txt": "他是医生",
         "ico": "🩺",
         "py": "Tā shì yīshēng"
        },
        {
         "txt": "他们明天下午到",
         "ico": "⏰",
         "py": "Tāmen míngtiān xiàwǔ dào"
        }
       ],
       "qpy": "Guó nèi de kèrén shénme shíhou lái?"
      },
      {
       "q": "你向大使馆问了什么？",
       "qvi": "Bạn đã hỏi đại sứ quán điều gì?",
       "scene": "🏛️❓",
       "ans": "我向他们问路",
       "opts": [
        {
         "txt": "我买了一件衣服",
         "ico": "👕",
         "py": "Wǒ mǎi le yī jiàn yīfu"
        },
        {
         "txt": "我们吃了面包",
         "ico": "🍞",
         "py": "Wǒmen chī le miànbāo"
        },
        {
         "txt": "我向他们问路",
         "ico": "🗺️",
         "py": "Wǒ xiàng tāmen wènlù"
        }
       ],
       "qpy": "Nǐ xiàng dàshǐguǎn wèn le shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tiếp đoàn khách nước ngoài",
      "steps": [
       "<b>Bước 1:</b> Gọi điện (hoặc tự nói thành tiếng) hỏi đại sứ quán về thủ tục cho đoàn khách, mở đầu bằng <i>\"我向大使馆打电话\"</i> rồi nêu câu hỏi của bạn.",
       "<b>Bước 2:</b> Đón đoàn tại công ty: giới thiệu công ty và kế hoạch chuyến thăm, dùng <i>\"经理向代表团介绍公司\"</i> và <i>\"王代表向我们介绍了访问计划\"</i> làm mẫu.",
       "<b>Bước 3:</b> Nói chuyện với một người bạn gốc Hoa hoặc đối tác, nhờ họ chỉ dạy cách nói, dùng <i>\"我向华人朋友请教汉语\"</i>, rồi nói về việc hai bên cần giao lưu thêm."
      ]
     }
    }
   ]
  },
  "3.10": {
   "lessons": [
    {
     "id": "3.10A",
     "name": "Bài 3.10A: Cơ thể, bệnh tật và áp lực",
     "grammar": {
      "formulas": [
       "🧑 我 + 😫 累 + 💯 极了",
       "🤕 背 + 😣 痛 + ➕ 得很",
       "🤒 我 + 😵 难受 + 💀 死了"
      ],
      "tip": "Muốn nói \"…cực kỳ/…chết đi được\" thì đặt sau tính từ: 累极了 (lèi jí le, lụy cực liễu), 痛得很 (tòng de hěn, thống đắc ngận), 难受死了 (nánshòu sǐ le). Ba cách này đều là mức độ cao, KHÔNG đặt 很 trước tính từ nữa.",
      "vn_tip": "Người Việt hay nói \"很极了\" hoặc \"非常累极了\" vì dịch \"rất mệt cực kỳ\". Đúng là chỉ dùng MỘT cách: 累极了 hoặc 累得很, và 得很/极了/死了 luôn đứng SAU tính từ."
     },
     "chunks": [
      {
       "scene": "🧑😫💯",
       "full": "这几天我累极了",
       "vi": "Mấy ngày nay tôi mệt cực kỳ",
       "parts": [
        {
         "t": "这几天我",
         "ico": "🧑",
         "c": "s",
         "py": "zhè jǐ tiān wǒ",
         "hv": "giá kỷ thiên ngã"
        },
        {
         "t": "累",
         "ico": "😫",
         "c": "v",
         "py": "lèi",
         "hv": "lụy"
        },
        {
         "t": "极了",
         "ico": "💯",
         "c": "o",
         "py": "jí le",
         "hv": "cực liễu"
        }
       ],
       "traceWord": "极了",
       "py": "Zhè jǐ tiān wǒ lèi jí le",
       "traceKey": "jile",
       "traceInfo": [
        {
         "c": "极",
         "py": "jí",
         "hv": "cực"
        },
        {
         "c": "了",
         "py": "le",
         "hv": "liễu"
        }
       ]
      },
      {
       "scene": "🌙😴💯",
       "full": "昨天晚上我困极了",
       "vi": "Tối qua tôi buồn ngủ cực kỳ",
       "parts": [
        {
         "t": "昨天晚上我",
         "ico": "🌙",
         "c": "s",
         "py": "zuótiān wǎnshang wǒ",
         "hv": "tạc thiên vãn thượng ngã"
        },
        {
         "t": "困",
         "ico": "😴",
         "c": "v",
         "py": "kùn",
         "hv": "khốn"
        },
        {
         "t": "极了",
         "ico": "💯",
         "c": "o",
         "py": "jí le",
         "hv": "cực liễu"
        }
       ],
       "traceWord": "困",
       "py": "Zuótiān wǎnshang wǒ kùn jí le",
       "traceKey": "kun",
       "traceInfo": [
        {
         "c": "困",
         "py": "kùn",
         "hv": "khốn"
        }
       ]
      },
      {
       "scene": "🧍🤕😣",
       "full": "我的背今天痛得很",
       "vi": "Hôm nay lưng tôi đau lắm",
       "parts": [
        {
         "t": "我的背今天",
         "ico": "🧍",
         "c": "s",
         "py": "wǒ de bèi jīntiān",
         "hv": "ngã đích bối kim thiên"
        },
        {
         "t": "痛",
         "ico": "🤕",
         "c": "v",
         "py": "tòng",
         "hv": "thống"
        },
        {
         "t": "得很",
         "ico": "😣",
         "c": "o",
         "py": "de hěn",
         "hv": "đắc ngận"
        }
       ],
       "traceWord": "背",
       "py": "Wǒ de bèi jīntiān tòng de hěn",
       "traceKey": "bei",
       "traceInfo": [
        {
         "c": "背",
         "py": "bèi",
         "hv": "bối"
        }
       ]
      },
      {
       "scene": "👨💼🏋️😫",
       "full": "他最近压力大极了",
       "vi": "Dạo này áp lực của anh ấy lớn cực kỳ",
       "parts": [
        {
         "t": "他最近压力",
         "ico": "👨",
         "c": "s",
         "py": "tā zuìjìn yālì",
         "hv": "tha tối cận áp lực"
        },
        {
         "t": "大",
         "ico": "🏋️",
         "c": "v",
         "py": "dà",
         "hv": "đại"
        },
        {
         "t": "极了",
         "ico": "💯",
         "c": "o",
         "py": "jí le",
         "hv": "cực liễu"
        }
       ],
       "traceWord": "压力",
       "py": "Tā zuìjìn yālì dà jí le",
       "traceKey": "yali",
       "traceInfo": [
        {
         "c": "压",
         "py": "yā",
         "hv": "áp"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      },
      {
       "scene": "☝️🤕😣",
       "full": "他的手指昨天痛得很",
       "vi": "Hôm qua ngón tay anh ấy đau lắm",
       "parts": [
        {
         "t": "他的手指昨天",
         "ico": "☝️",
         "c": "s",
         "py": "tā de shǒuzhǐ zuótiān",
         "hv": "tha đích thủ chỉ tạc thiên"
        },
        {
         "t": "痛",
         "ico": "🤕",
         "c": "v",
         "py": "tòng",
         "hv": "thống"
        },
        {
         "t": "得很",
         "ico": "😣",
         "c": "o",
         "py": "de hěn",
         "hv": "đắc ngận"
        }
       ],
       "traceWord": "手指",
       "py": "Tā de shǒuzhǐ zuótiān tòng de hěn",
       "traceKey": "shouzhi",
       "traceInfo": [
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        },
        {
         "c": "指",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "🧑🤧😵",
       "full": "我感冒了难受死了",
       "vi": "Tôi bị cảm, khó chịu chết đi được",
       "parts": [
        {
         "t": "我感冒了",
         "ico": "🤧",
         "c": "s",
         "py": "wǒ gǎnmào le",
         "hv": "ngã cảm mạo liễu"
        },
        {
         "t": "难受",
         "ico": "😵",
         "c": "v",
         "py": "nánshòu",
         "hv": "nan thụ"
        },
        {
         "t": "死了",
         "ico": "💀",
         "c": "o",
         "py": "sǐ le",
         "hv": "tử liễu"
        }
       ],
       "traceWord": "感冒",
       "py": "Wǒ gǎnmào le nánshòu sǐ le",
       "traceKey": "ganmao",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "冒",
         "py": "mào",
         "hv": "mạo"
        }
       ]
      },
      {
       "scene": "👨‍⚕️💬🧑",
       "full": "大夫说我的毛病不大",
       "vi": "Bác sĩ nói bệnh của tôi không nặng",
       "parts": [
        {
         "t": "大夫",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "dàifu",
         "hv": "đại phu"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "thuyết"
        },
        {
         "t": "我的毛病不大",
         "ico": "🧑",
         "c": "o",
         "py": "wǒ de máobìng bù dà",
         "hv": "ngã đích mao bệnh bất đại"
        }
       ],
       "traceWord": "毛病",
       "py": "Dàifu shuō wǒ de máobìng bù dà",
       "traceKey": "maobing",
       "traceInfo": [
        {
         "c": "毛",
         "py": "máo",
         "hv": "mao"
        },
        {
         "c": "病",
         "py": "bìng",
         "hv": "bệnh"
        }
       ]
      },
      {
       "scene": "💪🏋️😫",
       "full": "他的身体结实但压力大得很",
       "vi": "Cơ thể anh ấy khỏe mạnh nhưng áp lực rất lớn",
       "parts": [
        {
         "t": "他的身体",
         "ico": "💪",
         "c": "s",
         "py": "tā de shēntǐ",
         "hv": "tha đích thân thể"
        },
        {
         "t": "结实",
         "ico": "🏋️",
         "c": "v",
         "py": "jiēshi",
         "hv": "kết thực"
        },
        {
         "t": "但压力大得很",
         "ico": "😫",
         "c": "o",
         "py": "dàn yālì dà de hěn",
         "hv": "đãn áp lực đại đắc ngận"
        }
       ],
       "traceWord": "结实",
       "py": "Tā de shēntǐ jiēshi dàn yālì dà de hěn",
       "traceKey": "jieshi",
       "traceInfo": [
        {
         "c": "结",
         "py": "jiē",
         "hv": "kết"
        },
        {
         "c": "实",
         "py": "shi",
         "hv": "thực"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "医生说你的血压怎么样？",
       "qvi": "Bác sĩ nói huyết áp của bạn thế nào?",
       "scene": "👨‍⚕️🩸",
       "ans": "我的血压高得很",
       "opts": [
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "我的血压高得很",
         "ico": "🩸",
         "py": "Wǒ de xiě yā gāo de hěn"
        },
        {
         "txt": "我明天去上班",
         "ico": "💼",
         "py": "Wǒ míngtiān qù shàngbān"
        }
       ],
       "qpy": "Yīshēng shuō nǐ de xiě yā zěnmeyàng?"
      },
      {
       "q": "你为什么不想吃米饭？",
       "qvi": "Sao bạn không muốn ăn cơm?",
       "scene": "🍚🤔",
       "ans": "我最近胖极了",
       "opts": [
        {
         "txt": "我在北京工作",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "我很喜欢听音乐",
         "ico": "🎵",
         "py": "Wǒ hěn xǐhuan tīng yīnyuè"
        },
        {
         "txt": "我最近胖极了",
         "ico": "⚖️",
         "py": "Wǒ zuìjìn pàng jí le"
        }
       ],
       "qpy": "Nǐ wèi shénme bù xiǎng chī mǐfàn?"
      },
      {
       "q": "你怎么这么痛苦？",
       "qvi": "Sao bạn khổ sở thế?",
       "scene": "😣💼",
       "ans": "工作压力大得很",
       "opts": [
        {
         "txt": "工作压力大得很",
         "ico": "😫",
         "py": "Gōngzuò yālì dà de hěn"
        },
        {
         "txt": "今天天气很好",
         "ico": "☀️",
         "py": "Jīntiān tiānqì hěn hǎo"
        },
        {
         "txt": "我家在河内",
         "ico": "🏠",
         "py": "Wǒ jiā zài Hénèi"
        }
       ],
       "qpy": "Nǐ zěnme zhème tòngkǔ?"
      },
      {
       "q": "他的手指怎么了？",
       "qvi": "Ngón tay của anh ấy làm sao vậy?",
       "scene": "☝️🩸",
       "ans": "他的手指流血了",
       "opts": [
        {
         "txt": "他在看电视",
         "ico": "📺",
         "py": "Tā zài kàn diànshì"
        },
        {
         "txt": "他明天去北京",
         "ico": "✈️",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "他的手指流血了",
         "ico": "🩸",
         "py": "Tā de shǒuzhǐ liú xiě le"
        }
       ],
       "qpy": "Tā de shǒuzhǐ zěnme le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Xin nghỉ vì không khỏe",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hoặc sếp báo bạn bị cảm: <i>\"我感冒了难受死了\"</i> và nói bạn mệt: <i>\"这几天我累极了\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng với bác sĩ về triệu chứng, dùng <i>\"我的背今天痛得很\"</i> và hỏi bệnh có nặng không.",
       "<b>Bước 3:</b> Kể với bạn về áp lực công việc bằng <i>\"他最近压力大极了\"</i>, rồi tự nói thêm 2 câu với 极了 và 得很 về chính bạn."
      ]
     }
    },
    {
     "id": "3.10B",
     "name": "Bài 3.10B: Sự cố, cấp cứu và an ninh",
     "grammar": {
      "formulas": [
       "📦 我的包 + 🫳 被 + 🧑 人拿走了",
       "🚪 门 + 🫳 被 + 💂 保安关上了",
       "📞 电话线 + 🫳 叫/让 + 🌬️ 风吹断了"
      ],
      "tip": "Câu bị động: vật bị tác động + 被/叫/让 (bèi/jiào/ràng, bị/khiếu/nhượng) + tác nhân + động từ + thành phần khác (了, kết quả…). Ví dụ 门被保安关上了. Động từ không được đứng trơ trọi, phải có 了 hoặc bổ ngữ kết quả như 断了, 走了.",
      "vn_tip": "Tiếng Việt \"bị\" thường mang nghĩa xấu và có thể bỏ tác nhân, còn 叫/让 BẮT BUỘC có tác nhân sau nó (叫老板批评了). Chỉ riêng 被 mới được bỏ tác nhân. Đừng quên 了 hoặc bổ ngữ sau động từ."
     },
     "chunks": [
      {
       "scene": "🎒🫳🏃",
       "full": "我的包被人拿走了",
       "vi": "Túi của tôi bị người ta lấy mất rồi",
       "parts": [
        {
         "t": "我的包",
         "ico": "🎒",
         "c": "s",
         "py": "wǒ de bāo",
         "hv": "ngã đích bao"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "人拿走了",
         "ico": "🏃",
         "c": "o",
         "py": "rén ná zǒu le",
         "hv": "nhân nã tẩu liễu"
        }
       ],
       "traceWord": "被",
       "py": "Wǒ de bāo bèi rén ná zǒu le",
       "traceKey": "bei",
       "traceInfo": [
        {
         "c": "被",
         "py": "bèi",
         "hv": "bị"
        }
       ]
      },
      {
       "scene": "🚪💂🔒",
       "full": "门被保安关上了",
       "vi": "Cửa bị bảo vệ đóng lại rồi",
       "parts": [
        {
         "t": "门",
         "ico": "🚪",
         "c": "s",
         "py": "mén",
         "hv": "môn"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "保安关上了",
         "ico": "💂",
         "c": "o",
         "py": "bǎo'ān guānshang le",
         "hv": "bảo an quan thượng liễu"
        }
       ],
       "traceWord": "保安",
       "py": "Mén bèi bǎo'ān guānshang le",
       "traceKey": "baoan",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "安",
         "py": "ān",
         "hv": "an"
        }
       ]
      },
      {
       "scene": "👧🚓🆘",
       "full": "孩子被警察救出来了",
       "vi": "Đứa trẻ được cảnh sát cứu ra rồi",
       "parts": [
        {
         "t": "孩子",
         "ico": "👧",
         "c": "s",
         "py": "háizi",
         "hv": "hài tử"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "警察救出来了",
         "ico": "🚓",
         "c": "o",
         "py": "jǐngchá jiù chūlái le",
         "hv": "cảnh sát cứu xuất lai liễu"
        }
       ],
       "traceWord": "救",
       "py": "Háizi bèi jǐngchá jiù chūlái le",
       "traceKey": "jiu",
       "traceInfo": [
        {
         "c": "救",
         "py": "jiù",
         "hv": "cứu"
        }
       ]
      },
      {
       "scene": "📞🌬️✂️",
       "full": "电话线被风吹断了",
       "vi": "Dây điện thoại bị gió thổi đứt rồi",
       "parts": [
        {
         "t": "电话线",
         "ico": "📞",
         "c": "s",
         "py": "diànhuà xiàn",
         "hv": "điện thoại tuyến"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "风吹断了",
         "ico": "🌬️",
         "c": "o",
         "py": "fēng chuī duàn le",
         "hv": "phong xuy đoạn liễu"
        }
       ],
       "traceWord": "断",
       "py": "Diànhuà xiàn bèi fēng chuī duàn le",
       "traceKey": "duan",
       "traceInfo": [
        {
         "c": "断",
         "py": "duàn",
         "hv": "đoạn"
        }
       ]
      },
      {
       "scene": "🧑💼😟",
       "full": "小李叫老板批评了一顿",
       "vi": "Tiểu Lý bị sếp phê bình một trận",
       "parts": [
        {
         "t": "小李",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎolǐ",
         "hv": "tiểu lý"
        },
        {
         "t": "叫",
         "ico": "🫳",
         "c": "v",
         "py": "jiào",
         "hv": "khiếu"
        },
        {
         "t": "老板批评了一顿",
         "ico": "💼",
         "c": "o",
         "py": "lǎobǎn pīpíng le yī dùn",
         "hv": "lão bản phê bình liễu nhất đốn"
        }
       ],
       "traceWord": "叫",
       "py": "Xiǎolǐ jiào lǎobǎn pīpíng le yī dùn",
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
       "scene": "🚗💥⚠️",
       "full": "汽车让这次意外弄坏了",
       "vi": "Chiếc xe bị hỏng vì sự cố bất ngờ lần này",
       "parts": [
        {
         "t": "汽车",
         "ico": "🚗",
         "c": "s",
         "py": "qìchē",
         "hv": "khí xa"
        },
        {
         "t": "让",
         "ico": "🫳",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "这次意外弄坏了",
         "ico": "💥",
         "c": "o",
         "py": "zhè cì yìwài nòng huài le",
         "hv": "giá thứ ý ngoại lộng hoại liễu"
        }
       ],
       "traceWord": "意外",
       "py": "Qìchē ràng zhè cì yìwài nòng huài le",
       "traceKey": "yiwai",
       "traceInfo": [
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        },
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        }
       ]
      },
      {
       "scene": "📰🚓🔍",
       "full": "这个事件已经被警察查清楚了",
       "vi": "Vụ việc này đã được cảnh sát điều tra rõ",
       "parts": [
        {
         "t": "这个事件已经",
         "ico": "📰",
         "c": "s",
         "py": "zhè gè shìjiàn yǐjīng",
         "hv": "giá cá sự kiện dĩ kinh"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "警察查清楚了",
         "ico": "🚓",
         "c": "o",
         "py": "jǐngchá chá qīngchu le",
         "hv": "cảnh sát tra thanh sở liễu"
        }
       ],
       "traceWord": "事件",
       "py": "Zhè gè shìjiàn yǐjīng bèi jǐngchá chá qīngchu le",
       "traceKey": "shijian",
       "traceInfo": [
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🤕🚑🏥",
       "full": "受伤的人已经被送到医院了",
       "vi": "Người bị thương đã được đưa đến bệnh viện rồi",
       "parts": [
        {
         "t": "受伤的人已经",
         "ico": "🤕",
         "c": "s",
         "py": "shòushāng de rén yǐjīng",
         "hv": "thụ thương đích nhân dĩ kinh"
        },
        {
         "t": "被",
         "ico": "🫳",
         "c": "v",
         "py": "bèi",
         "hv": "bị"
        },
        {
         "t": "送到医院了",
         "ico": "🏥",
         "c": "o",
         "py": "sòngdào yīyuàn le",
         "hv": "tống đáo y viện liễu"
        }
       ],
       "traceWord": "受伤",
       "py": "Shòushāng de rén yǐjīng bèi sòngdào yīyuàn le",
       "traceKey": "shoushang",
       "traceInfo": [
        {
         "c": "受",
         "py": "shòu",
         "hv": "thụ"
        },
        {
         "c": "伤",
         "py": "shāng",
         "hv": "thương"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这次事故造成了什么后果？",
       "qvi": "Vụ tai nạn lần này gây ra hậu quả gì?",
       "scene": "💥🤕",
       "ans": "造成了三个人受伤",
       "opts": [
        {
         "txt": "我们明天开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "造成了三个人受伤",
         "ico": "🤕",
         "py": "Zàochéng le sān gè rén shòushāng"
        },
        {
         "txt": "这家店的咖啡很好喝",
         "ico": "☕",
         "py": "Zhè jiā diàn de kāfēi hěn hǎo hē"
        }
       ],
       "qpy": "Zhè cì shìgù zàochéng le shénme hòuguǒ?"
      },
      {
       "q": "事故是什么时候发生的？",
       "qvi": "Tai nạn xảy ra lúc nào?",
       "scene": "💥⏰",
       "ans": "昨天晚上八点发生的",
       "opts": [
        {
         "txt": "昨天晚上八点发生的",
         "ico": "🌙",
         "py": "Zuótiān wǎnshang bā diǎn fāshēng de"
        },
        {
         "txt": "我很喜欢这件衣服",
         "ico": "👕",
         "py": "Wǒ hěn xǐhuan zhè jiàn yīfu"
        },
        {
         "txt": "他是我的同学",
         "ico": "🧑",
         "py": "Tā shì wǒ de tóngxué"
        }
       ],
       "qpy": "Shìgù shì shénme shíhou fāshēng de?"
      },
      {
       "q": "开车的时候要注意什么？",
       "qvi": "Khi lái xe cần chú ý điều gì?",
       "scene": "🚗⚠️",
       "ans": "要注意安全",
       "opts": [
        {
         "txt": "要多吃米饭",
         "ico": "🍚",
         "py": "Yào duō chī mǐfàn"
        },
        {
         "txt": "要买新手机",
         "ico": "📱",
         "py": "Yào mǎi xīn shǒujī"
        },
        {
         "txt": "要注意安全",
         "ico": "⚠️",
         "py": "Yào zhùyì ānquán"
        }
       ],
       "qpy": "Kāichē de shíhou yào zhùyì shénme?"
      },
      {
       "q": "他受了伤，你们怎么办？",
       "qvi": "Anh ấy bị thương, các bạn làm gì?",
       "scene": "🤕🚓",
       "ans": "我们马上叫警察来救他",
       "opts": [
        {
         "txt": "我们先去吃午饭",
         "ico": "🍜",
         "py": "Wǒmen xiān qù chī wǔfàn"
        },
        {
         "txt": "我们马上叫警察来救他",
         "ico": "🚓",
         "py": "Wǒmen mǎshàng jiào jǐngchá lái jiù tā"
        },
        {
         "txt": "我们明天去超市",
         "ico": "🛒",
         "py": "Wǒmen míngtiān qù chāoshì"
        }
       ],
       "qpy": "Tā shòu le shāng nǐmen zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo sự cố cho bảo vệ và cảnh sát",
      "steps": [
       "<b>Bước 1:</b> Gọi cho bảo vệ tòa nhà, báo đồ bị mất: <i>\"我的包被人拿走了\"</i> và hỏi họ có xem được camera không.",
       "<b>Bước 2:</b> Gọi cảnh sát/cấp cứu, nói rõ chuyện gì xảy ra: <i>\"受伤的人已经被送到医院了\"</i>, và nói địa điểm, thời gian.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp kể lại sự việc bằng 3 câu bị động tự đặt với 被/叫/让, ví dụ <i>\"门被保安关上了\"</i>."
      ]
     }
    },
    {
     "id": "3.10C",
     "name": "Bài 3.10C: Phòng ngừa, bảo hiểm và rủi ro",
     "grammar": {
      "formulas": [
       "🏠 房子 + ➕ 以外 + 🛡️ 还买了保险",
       "🏃 运动 + ➕ 以外 + 🍎 多吃水果也能预防",
       "🚗 开车 + ➕ 以外 + 🚲 骑车也有危险"
      ],
      "tip": "Cấu trúc 除了……以外，……还/也/都……: \"ngoài … ra còn …\". Phần sau luôn có 还/也/都 để bổ sung. Trong bài này luyện phần \"A以外 + 还/也 + B\" với các từ phòng ngừa như 预防 (yùfáng, dự phòng), 防止 (fángzhǐ, phòng chỉ), 保险 (bǎoxiǎn, bảo hiểm).",
      "vn_tip": "Người Việt hay quên 还/也 ở vế sau vì tiếng Việt chỉ cần \"ngoài … ra, …\". Trong tiếng Trung thiếu 还/也 thì câu thành ý \"trừ …\" (loại trừ), sai nghĩa. Hãy luôn thêm 还 hoặc 也 khi muốn nói \"ngoài … ra còn …\"."
     },
     "chunks": [
      {
       "scene": "🏠➕🛡️",
       "full": "房子以外我还买了保险",
       "vi": "Ngoài nhà ra, tôi còn mua bảo hiểm",
       "parts": [
        {
         "t": "房子以外我",
         "ico": "🏠",
         "c": "s",
         "py": "fángzi yǐwài wǒ",
         "hv": "phòng tử dĩ ngoại ngã"
        },
        {
         "t": "还买了",
         "ico": "🛒",
         "c": "v",
         "py": "hái mǎi le",
         "hv": "hoàn mãi liễu"
        },
        {
         "t": "保险",
         "ico": "🛡️",
         "c": "o",
         "py": "bǎoxiǎn",
         "hv": "bảo hiểm"
        }
       ],
       "traceWord": "保险",
       "py": "Fángzi yǐwài wǒ hái mǎi le bǎoxiǎn",
       "traceKey": "baoxian",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "险",
         "py": "xiǎn",
         "hv": "hiểm"
        }
       ]
      },
      {
       "scene": "🍳🧼🏠",
       "full": "做饭以外我们还要保持家里的卫生",
       "vi": "Ngoài nấu ăn ra, chúng ta còn phải giữ vệ sinh trong nhà",
       "parts": [
        {
         "t": "做饭以外我们",
         "ico": "🍳",
         "c": "s",
         "py": "zuòfàn yǐwài wǒmen",
         "hv": "tố phạn dĩ ngoại ngã môn"
        },
        {
         "t": "还要保持",
         "ico": "🧼",
         "c": "v",
         "py": "hái yào bǎochí",
         "hv": "hoàn yếu bảo trì"
        },
        {
         "t": "家里的卫生",
         "ico": "🏠",
         "c": "o",
         "py": "jiā li de wèishēng",
         "hv": "gia lý đích vệ sinh"
        }
       ],
       "traceWord": "保持",
       "py": "Zuòfàn yǐwài wǒmen hái yào bǎochí jiā li de wèishēng",
       "traceKey": "baochi",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "持",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🧼💧🤧",
       "full": "洗手以外多喝水也能防止感冒",
       "vi": "Ngoài rửa tay ra, uống nhiều nước cũng giúp phòng cảm",
       "parts": [
        {
         "t": "洗手以外多喝水",
         "ico": "🧼",
         "c": "s",
         "py": "xǐ shǒu yǐwài duō hē shuǐ",
         "hv": "tẩy thủ dĩ ngoại đa hát thủy"
        },
        {
         "t": "也能防止",
         "ico": "🛡️",
         "c": "v",
         "py": "yě néng fángzhǐ",
         "hv": "dã năng phòng chỉ"
        },
        {
         "t": "感冒",
         "ico": "🤧",
         "c": "o",
         "py": "gǎnmào",
         "hv": "cảm mạo"
        }
       ],
       "traceWord": "防止",
       "py": "Xǐ shǒu yǐwài duō hē shuǐ yě néng fángzhǐ gǎnmào",
       "traceKey": "fangzhi",
       "traceInfo": [
        {
         "c": "防",
         "py": "fáng",
         "hv": "phòng"
        },
        {
         "c": "止",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "🏃🍎🛡️",
       "full": "运动以外多吃水果也能预防生病",
       "vi": "Ngoài tập thể dục ra, ăn nhiều trái cây cũng giúp phòng bệnh",
       "parts": [
        {
         "t": "运动以外多吃水果",
         "ico": "🏃",
         "c": "s",
         "py": "yùndòng yǐwài duō chī shuǐguǒ",
         "hv": "vận động dĩ ngoại đa cật thủy quả"
        },
        {
         "t": "也能预防",
         "ico": "🛡️",
         "c": "v",
         "py": "yě néng yùfáng",
         "hv": "dã năng dự phòng"
        },
        {
         "t": "生病",
         "ico": "🤒",
         "c": "o",
         "py": "shēngbìng",
         "hv": "sinh bệnh"
        }
       ],
       "traceWord": "预防",
       "py": "Yùndòng yǐwài duō chī shuǐguǒ yě néng yùfáng shēngbìng",
       "traceKey": "yufang",
       "traceInfo": [
        {
         "c": "预",
         "py": "yù",
         "hv": "dự"
        },
        {
         "c": "防",
         "py": "fáng",
         "hv": "phòng"
        }
       ]
      },
      {
       "scene": "🚗🚲⚠️",
       "full": "开车以外骑车也有危险",
       "vi": "Ngoài lái xe ra, đi xe đạp cũng có nguy hiểm",
       "parts": [
        {
         "t": "开车以外骑车",
         "ico": "🚗",
         "c": "s",
         "py": "kāichē yǐwài qí chē",
         "hv": "khai xa dĩ ngoại kỵ xa"
        },
        {
         "t": "也有",
         "ico": "➕",
         "c": "v",
         "py": "yě yǒu",
         "hv": "dã hữu"
        },
        {
         "t": "危险",
         "ico": "⚠️",
         "c": "o",
         "py": "wēixiǎn",
         "hv": "nguy hiểm"
        }
       ],
       "traceWord": "危险",
       "py": "Kāichē yǐwài qí chē yě yǒu wēixiǎn",
       "traceKey": "weixian",
       "traceInfo": [
        {
         "c": "危",
         "py": "wēi",
         "hv": "nguy"
        },
        {
         "c": "险",
         "py": "xiǎn",
         "hv": "hiểm"
        }
       ]
      },
      {
       "scene": "🚬🍺🫁",
       "full": "烟以外酒也会危害身体",
       "vi": "Ngoài thuốc lá ra, rượu cũng gây hại cho cơ thể",
       "parts": [
        {
         "t": "烟以外酒",
         "ico": "🚬",
         "c": "s",
         "py": "yān yǐwài jiǔ",
         "hv": "yên dĩ ngoại tửu"
        },
        {
         "t": "也会危害",
         "ico": "⚠️",
         "c": "v",
         "py": "yě huì wēihài",
         "hv": "dã hội nguy hại"
        },
        {
         "t": "身体",
         "ico": "🫁",
         "c": "o",
         "py": "shēntǐ",
         "hv": "thân thể"
        }
       ],
       "traceWord": "危害",
       "py": "Yān yǐwài jiǔ yě huì wēihài shēntǐ",
       "traceKey": "weihai",
       "traceInfo": [
        {
         "c": "危",
         "py": "wēi",
         "hv": "nguy"
        },
        {
         "c": "害",
         "py": "hài",
         "hv": "hại"
        }
       ]
      },
      {
       "scene": "😟➕💪",
       "full": "面对压力以外我们还要克服困难",
       "vi": "Ngoài đối mặt với áp lực ra, chúng ta còn phải vượt qua khó khăn",
       "parts": [
        {
         "t": "面对压力以外我们",
         "ico": "😟",
         "c": "s",
         "py": "miànduì yālì yǐwài wǒmen",
         "hv": "diện đối áp lực dĩ ngoại ngã môn"
        },
        {
         "t": "还要克服",
         "ico": "💪",
         "c": "v",
         "py": "hái yào kèfú",
         "hv": "hoàn yếu khắc phục"
        },
        {
         "t": "困难",
         "ico": "🧗",
         "c": "o",
         "py": "kùn nán",
         "hv": "khốn nan"
        }
       ],
       "traceWord": "克服",
       "py": "Miànduì yālì yǐwài wǒmen hái yào kèfú kùn nán",
       "traceKey": "kefu",
       "traceInfo": [
        {
         "c": "克",
         "py": "kè",
         "hv": "khắc"
        },
        {
         "c": "服",
         "py": "fú",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "🥩🐟🍽️",
       "full": "这些肉以外的鱼我也吃不了",
       "vi": "Ngoài chỗ thịt này ra, cả chỗ cá tôi cũng ăn không hết",
       "parts": [
        {
         "t": "这些肉以外的鱼我",
         "ico": "🥩",
         "c": "s",
         "py": "zhèxiē ròu yǐwài de yú wǒ",
         "hv": "giá ta nhục dĩ ngoại đích ngư ngã"
        },
        {
         "t": "也吃",
         "ico": "🍽️",
         "c": "v",
         "py": "yě chī",
         "hv": "dã cật"
        },
        {
         "t": "不了",
         "ico": "🙅",
         "c": "o",
         "py": "bù le",
         "hv": "bất liễu"
        }
       ],
       "traceWord": "以外",
       "py": "Zhèxiē ròu yǐwài de yú wǒ yě chī bù le",
       "traceKey": "yiwai",
       "traceInfo": [
        {
         "c": "以",
         "py": "yǐ",
         "hv": "dĩ"
        },
        {
         "c": "外",
         "py": "wài",
         "hv": "ngoại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "有紧急事情的时候你怎么办？",
       "qvi": "Khi có việc khẩn cấp bạn làm thế nào?",
       "scene": "🆘📞",
       "ans": "我先给经理打电话",
       "opts": [
        {
         "txt": "我先去吃午饭",
         "ico": "🍜",
         "py": "Wǒ xiān qù chī wǔfàn"
        },
        {
         "txt": "我先给经理打电话",
         "ico": "📞",
         "py": "Wǒ xiān gěi jīnglǐ dǎ diànhuà"
        },
        {
         "txt": "我先去超市买水果",
         "ico": "🍎",
         "py": "Wǒ xiān qù chāoshì mǎi shuǐguǒ"
        }
       ],
       "qpy": "Yǒu jǐnjí shìqing de shíhou nǐ zěnme bàn?"
      },
      {
       "q": "你平时怎么防感冒？",
       "qvi": "Bình thường bạn phòng cảm bằng cách nào?",
       "scene": "🤧🛡️",
       "ans": "我多喝水也多运动",
       "opts": [
        {
         "txt": "我喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ xǐhuan chī miànbāo"
        },
        {
         "txt": "我多喝水也多运动",
         "ico": "🏃",
         "py": "Wǒ duō hē shuǐ yě duō yùndòng"
        },
        {
         "txt": "我在公司上班",
         "ico": "💼",
         "py": "Wǒ zài gōngsī shàngbān"
        }
       ],
       "qpy": "Nǐ píngshí zěnme fáng gǎnmào?"
      },
      {
       "q": "这个工作的风险大不大？",
       "qvi": "Công việc này rủi ro có lớn không?",
       "scene": "💼⚠️",
       "ans": "风险不大工资也不错",
       "opts": [
        {
         "txt": "我下个月要搬家",
         "ico": "📦",
         "py": "Wǒ xià gè yuè yào bānjiā"
        },
        {
         "txt": "这家饭馆的菜很好吃",
         "ico": "🍜",
         "py": "Zhè jiā fànguǎn de cài hěn hǎochī"
        },
        {
         "txt": "风险不大工资也不错",
         "ico": "💰",
         "py": "Fēngxiǎn bù dà gōngzī yě bùcuò"
        }
       ],
       "qpy": "Zhè gè gōngzuò de fēngxiǎn dà bù dà?"
      },
      {
       "q": "你的车买保险了吗？",
       "qvi": "Xe của bạn đã mua bảo hiểm chưa?",
       "scene": "🚗🛡️",
       "ans": "买了我保了一年",
       "opts": [
        {
         "txt": "买了我保了一年",
         "ico": "🛡️",
         "py": "Mǎi le wǒ bǎo le yī nián"
        },
        {
         "txt": "我昨天去过北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù guò Běijīng"
        },
        {
         "txt": "我很喜欢开车",
         "ico": "🚗",
         "py": "Wǒ hěn xǐhuan kāichē"
        }
       ],
       "qpy": "Nǐ de chē mǎi bǎoxiǎn le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi mua bảo hiểm và hỏi cách phòng ngừa",
      "steps": [
       "<b>Bước 1:</b> Gọi cho công ty bảo hiểm hoặc nói trước gương: hỏi xem nên mua loại nào, dùng <i>\"房子以外我还买了保险\"</i> để nói bạn đã có gì.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp chia sẻ cách giữ sức khỏe, như <i>\"洗手以外多喝水也能防止感冒\"</i>, rồi nói thêm 2 cách khác với 以外 và 也.",
       "<b>Bước 3:</b> Hỏi sếp về rủi ro của công việc mới: <i>\"这个工作的风险大不大？\"</i> và nói bạn sẽ làm gì khi có việc khẩn cấp."
      ]
     }
    }
   ]
  },
  "3.11": {
   "lessons": [
    {
     "id": "3.11A",
     "name": "Bài 3.11A: Trường lớp và việc học",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 念了三年 + 🏫 初中",
       "🧑 我 + ⚡ 做了两个小时 + 📚 功课",
       "🧑 他 + ⚡ 学了一年 + 📈 就进步很大"
      ],
      "tip": "Muốn nói một việc kéo dài bao lâu, đặt khoảng thời gian ngay sau động từ: 动词 + 了 + thời lượng (+ 的) + tân ngữ. Ví dụ 学了三年 (xué le sān nián, học đã ba năm), 等了一个月 (děng le yí ge yuè, đợi một tháng). Tân ngữ thường đứng sau thời lượng: 做了两个小时功课.",
      "vn_tip": "Người Việt hay nói theo thứ tự tiếng Việt \"tôi học tiếng Trung ba năm\" thành 我学中文三年 (sai). Đúng: 我学了三年中文, hoặc lặp động từ: 我学中文学了三年. Đừng quên 了 sau động từ và đặt thời lượng trước tân ngữ."
     },
     "chunks": [
      {
       "scene": "🧑🏫📚",
       "full": "我看了三天教材",
       "vi": "Tôi đã xem giáo trình ba ngày",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "看了三天",
         "ico": "👀",
         "c": "v",
         "py": "kàn le sān tiān",
         "hv": "khán liễu tam thiên"
        },
        {
         "t": "教材",
         "ico": "📖",
         "c": "o",
         "py": "jiàocái",
         "hv": "giáo tài"
        }
       ],
       "traceWord": "教材",
       "py": "Wǒ kàn le sān tiān jiàocái",
       "traceKey": "jiaocai",
       "traceInfo": [
        {
         "c": "教",
         "py": "jiào",
         "hv": "giáo"
        },
        {
         "c": "材",
         "py": "cái",
         "hv": "tài"
        }
       ]
      },
      {
       "scene": "🧑🏫🎓",
       "full": "我念了三年初中",
       "vi": "Tôi đã học cấp hai ba năm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "念了三年",
         "ico": "📅",
         "c": "v",
         "py": "niàn le sān nián",
         "hv": "niệm liễu tam niên"
        },
        {
         "t": "初中",
         "ico": "🏫",
         "c": "o",
         "py": "chūzhōng",
         "hv": "sơ trung"
        }
       ],
       "traceWord": "初中",
       "py": "Wǒ niàn le sān nián chūzhōng",
       "traceKey": "chuzhong",
       "traceInfo": [
        {
         "c": "初",
         "py": "chū",
         "hv": "sơ"
        },
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        }
       ]
      },
      {
       "scene": "🧑📝⏰",
       "full": "他预习了一个小时",
       "vi": "Anh ấy đã học bài trước một tiếng",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "预习了",
         "ico": "📝",
         "c": "v",
         "py": "yùxí le",
         "hv": "dự tập liễu"
        },
        {
         "t": "一个小时",
         "ico": "⏰",
         "c": "o",
         "py": "yī gè xiǎoshí",
         "hv": "nhất cá tiểu thời"
        }
       ],
       "traceWord": "预习",
       "py": "Tā yùxí le yī gè xiǎoshí",
       "traceKey": "yuxi",
       "traceInfo": [
        {
         "c": "预",
         "py": "yù",
         "hv": "dự"
        },
        {
         "c": "习",
         "py": "xí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "🧑📚⏰",
       "full": "我做了两个小时功课",
       "vi": "Tôi đã làm bài tập hai tiếng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "做了两个小时",
         "ico": "⏰",
         "c": "v",
         "py": "zuò le liǎng gè xiǎoshí",
         "hv": "tố liễu lưỡng cá tiểu thời"
        },
        {
         "t": "功课",
         "ico": "📚",
         "c": "o",
         "py": "gōngkè",
         "hv": "công khóa"
        }
       ],
       "traceWord": "功课",
       "py": "Wǒ zuò le liǎng gè xiǎoshí gōngkè",
       "traceKey": "gongke",
       "traceInfo": [
        {
         "c": "功",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        }
       ]
      },
      {
       "scene": "🧑📅💰",
       "full": "我等了一个月才交学费",
       "vi": "Tôi đợi một tháng mới đóng học phí",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "等了一个月",
         "ico": "📅",
         "c": "v",
         "py": "děng le yī gè yuè",
         "hv": "đẳng liễu nhất cá nguyệt"
        },
        {
         "t": "才交学费",
         "ico": "💰",
         "c": "o",
         "py": "cái jiāo xuéfèi",
         "hv": "tài giao học phí"
        }
       ],
       "traceWord": "学费",
       "py": "Wǒ děng le yī gè yuè cái jiāo xuéfèi",
       "traceKey": "xuefei",
       "traceInfo": [
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        },
        {
         "c": "费",
         "py": "fèi",
         "hv": "phí"
        }
       ]
      },
      {
       "scene": "👥🏫📅",
       "full": "我们班级学了三个月英语",
       "vi": "Lớp chúng tôi đã học tiếng Anh ba tháng",
       "parts": [
        {
         "t": "我们班级",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen bānjí",
         "hv": "ngã môn ban cấp"
        },
        {
         "t": "学了三个月",
         "ico": "📅",
         "c": "v",
         "py": "xué le sān gè yuè",
         "hv": "học liễu tam cá nguyệt"
        },
        {
         "t": "英语",
         "ico": "🔤",
         "c": "o",
         "py": "Yīngyǔ",
         "hv": "anh ngữ"
        }
       ],
       "traceWord": "班级",
       "py": "Wǒmen bānjí xué le sān gè yuè Yīngyǔ",
       "traceKey": "banji",
       "traceInfo": [
        {
         "c": "班",
         "py": "bān",
         "hv": "ban"
        },
        {
         "c": "级",
         "py": "jí",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "👨📈📅",
       "full": "他学了一年就进步很大",
       "vi": "Anh ấy học một năm là tiến bộ rất nhiều",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "学了一年",
         "ico": "📅",
         "c": "v",
         "py": "xué le yī nián",
         "hv": "học liễu nhất niên"
        },
        {
         "t": "就进步很大",
         "ico": "📈",
         "c": "o",
         "py": "jiù jìnbù hěn dà",
         "hv": "tựu tiến bộ ngận đại"
        }
       ],
       "traceWord": "进步",
       "py": "Tā xué le yī nián jiù jìnbù hěn dà",
       "traceKey": "jinbu",
       "traceInfo": [
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        },
        {
         "c": "步",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      },
      {
       "scene": "🧑🎧📅",
       "full": "我集中练了两个星期听力",
       "vi": "Tôi đã tập trung luyện nghe hai tuần",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "集中练了两个星期",
         "ico": "💪",
         "c": "v",
         "py": "jízhōng liàn le liǎng gè xīngqī",
         "hv": "tập trung luyện liễu lưỡng cá tinh kỳ"
        },
        {
         "t": "听力",
         "ico": "🎧",
         "c": "o",
         "py": "tīnglì",
         "hv": "thính lực"
        }
       ],
       "traceWord": "集中",
       "py": "Wǒ jízhōng liàn le liǎng gè xīngqī tīnglì",
       "traceKey": "jizhong",
       "traceInfo": [
        {
         "c": "集",
         "py": "jí",
         "hv": "tập"
        },
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你在哪个系念书？",
       "qvi": "Bạn học ở khoa nào?",
       "scene": "🧑🏫🎓",
       "ans": "我在中文系念书",
       "opts": [
        {
         "txt": "我在北京念书",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng niàn shū"
        },
        {
         "txt": "我在中文系念书",
         "ico": "🎓",
         "py": "Wǒ zài Zhōngwén xì niàn shū"
        },
        {
         "txt": "我明天去书店",
         "ico": "📚",
         "py": "Wǒ míngtiān qù shūdiàn"
        }
       ],
       "qpy": "Nǐ zài nǎ gè xì niàn shū?"
      },
      {
       "q": "你初一学了多久英语？",
       "qvi": "Hồi lớp 6 bạn đã học tiếng Anh bao lâu?",
       "scene": "🧑🔤📅",
       "ans": "我初一学了一年英语",
       "opts": [
        {
         "txt": "我昨天去了书店",
         "ico": "📚",
         "py": "Wǒ zuótiān qù le shūdiàn"
        },
        {
         "txt": "他在公司工作了两年",
         "ico": "🏢",
         "py": "Tā zài gōngsī gōngzuò le liǎng nián"
        },
        {
         "txt": "我初一学了一年英语",
         "ico": "🔤",
         "py": "Wǒ chū yī xué le yī nián Yīngyǔ"
        }
       ],
       "qpy": "Nǐ chū yī xué le duōjiǔ Yīngyǔ?"
      },
      {
       "q": "初级中文课在这个城市普及吗？",
       "qvi": "Lớp tiếng Trung sơ cấp có phổ biến ở thành phố này không?",
       "scene": "🏙️🏫📈",
       "ans": "初级中文课很普及",
       "opts": [
        {
         "txt": "我们明天去公园",
         "ico": "🌳",
         "py": "Wǒmen míngtiān qù gōngyuán"
        },
        {
         "txt": "初级中文课很普及",
         "ico": "📈",
         "py": "Chūjí Zhōngwén kè hěn pǔjí"
        },
        {
         "txt": "他是我们的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        }
       ],
       "qpy": "Chūjí Zhōngwén kè zài zhè gè chéngshì pǔjí ma?"
      },
      {
       "q": "孩子在这里成长了几年？",
       "qvi": "Đứa trẻ đã lớn lên ở đây mấy năm?",
       "scene": "👦🏠📅",
       "ans": "他在这里成长了十年",
       "opts": [
        {
         "txt": "他明天去北京",
         "ico": "✈️",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "我在公司工作",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī gōngzuò"
        },
        {
         "txt": "他在这里成长了十年",
         "ico": "👦",
         "py": "Tā zài zhèlǐ chéngzhǎng le shí nián"
        }
       ],
       "qpy": "Háizi zài zhèlǐ chéngzhǎng le jǐ nián?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói về quá trình học của bạn",
      "steps": [
       "<b>Bước 1:</b> Viết ra giấy ba việc bạn đã học hoặc làm trong thời gian dài, rồi nói thành tiếng, ví dụ <i>\"我学了三年英语\"</i>, <i>\"我做了两个小时功课\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp hoặc bạn học, kể bạn đã luyện kỹ năng nào bao lâu, ví dụ <i>\"我集中练了两个星期听力\"</i>.",
       "<b>Bước 3:</b> Giả sử bạn đăng ký khóa học: hỏi và trả lời về học phí, lớp và thời gian học, dùng <i>\"我等了一个月才交学费\"</i> làm mẫu rồi thay bằng thông tin thật của bạn."
      ]
     }
    },
    {
     "id": "3.11B",
     "name": "Bài 3.11B: Khóa học, thi cử và độ khó",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 看了一遍 + 📖 这个单元",
       "👨 他 + ⚡ 考了三次 + ✅ 才合格",
       "👨‍🏫 老师 + ⚡ 讲了一遍 + 📚 基础课程"
      ],
      "tip": "Động lượng bổ ngữ cho biết động tác xảy ra bao nhiêu lần: 动词 + 了/过 + số + 次 (cì, thứ) / 遍 (biàn, biến) + tân ngữ. 次 là số lần nói chung, 遍 nhấn mạnh làm trọn từ đầu đến cuối. Tân ngữ là danh từ thường đứng sau cụm số lượng: 看了一遍这个单元; nếu tân ngữ là đại từ nhân xưng thì đứng trước: 我找过他一次.",
      "vn_tip": "Người Việt hay nói \"tôi xem bài này một lần\" thành 我看这个单元一遍 (không tự nhiên). Nên nói 我看了一遍这个单元, hoặc dùng 把: 我把这个单元看了一遍. Cũng đừng bỏ 了 hoặc 过 sau động từ khi đã nói số lần."
     },
     "chunks": [
      {
       "scene": "🧑📖👀",
       "full": "我读了三遍题目",
       "vi": "Tôi đã đọc đề ba lần",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "读了三遍",
         "ico": "📖",
         "c": "v",
         "py": "dú le sān biàn",
         "hv": "độc liễu tam biến"
        },
        {
         "t": "题目",
         "ico": "📝",
         "c": "o",
         "py": "tímù",
         "hv": "đề mục"
        }
       ],
       "traceWord": "题目",
       "py": "Wǒ dú le sān biàn tímù",
       "traceKey": "timu",
       "traceInfo": [
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        },
        {
         "c": "目",
         "py": "mù",
         "hv": "mục"
        }
       ]
      },
      {
       "scene": "👨📝✅",
       "full": "他考了三次才合格",
       "vi": "Anh ấy thi ba lần mới đạt",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "考了三次",
         "ico": "📝",
         "c": "v",
         "py": "kǎo le sān cì",
         "hv": "khảo liễu tam thứ"
        },
        {
         "t": "才合格",
         "ico": "✅",
         "c": "o",
         "py": "cái hégé",
         "hv": "tài hợp cách"
        }
       ],
       "traceWord": "合格",
       "py": "Tā kǎo le sān cì cái hégé",
       "traceKey": "hege",
       "traceInfo": [
        {
         "c": "合",
         "py": "hé",
         "hv": "hợp"
        },
        {
         "c": "格",
         "py": "gé",
         "hv": "cách"
        }
       ]
      },
      {
       "scene": "🧑📖👀",
       "full": "我看了一遍这个单元",
       "vi": "Tôi đã xem qua một lượt đơn vị bài này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "看了一遍",
         "ico": "👀",
         "c": "v",
         "py": "kàn le yī biàn",
         "hv": "khán liễu nhất biến"
        },
        {
         "t": "这个单元",
         "ico": "📖",
         "c": "o",
         "py": "zhè gè dānyuán",
         "hv": "giá cá đơn nguyên"
        }
       ],
       "traceWord": "单元",
       "py": "Wǒ kàn le yī biàn zhè gè dānyuán",
       "traceKey": "danyuan",
       "traceInfo": [
        {
         "c": "单",
         "py": "dān",
         "hv": "đơn"
        },
        {
         "c": "元",
         "py": "yuán",
         "hv": "nguyên"
        }
       ]
      },
      {
       "scene": "🧑✏️❌",
       "full": "我改了一遍这些错误",
       "vi": "Tôi đã sửa một lượt những lỗi này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "改了一遍",
         "ico": "✏️",
         "c": "v",
         "py": "gǎi le yī biàn",
         "hv": "cải liễu nhất biến"
        },
        {
         "t": "这些错误",
         "ico": "❌",
         "c": "o",
         "py": "zhèxiē cuòwù",
         "hv": "giá ta thác ngộ"
        }
       ],
       "traceWord": "错误",
       "py": "Wǒ gǎi le yī biàn zhèxiē cuòwù",
       "traceKey": "cuowu",
       "traceInfo": [
        {
         "c": "错",
         "py": "cuò",
         "hv": "thác"
        },
        {
         "c": "误",
         "py": "wù",
         "hv": "ngộ"
        }
       ]
      },
      {
       "scene": "🏢🔍📋",
       "full": "公司做了一次初步检查",
       "vi": "Công ty đã làm một lần kiểm tra sơ bộ",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "做了一次",
         "ico": "🔢",
         "c": "v",
         "py": "zuò le yī cì",
         "hv": "tố liễu nhất thứ"
        },
        {
         "t": "初步检查",
         "ico": "🔍",
         "c": "o",
         "py": "chūbù jiǎnchá",
         "hv": "sơ bộ kiểm tra"
        }
       ],
       "traceWord": "初步",
       "py": "Gōngsī zuò le yī cì chūbù jiǎnchá",
       "traceKey": "chubu",
       "traceInfo": [
        {
         "c": "初",
         "py": "chū",
         "hv": "sơ"
        },
        {
         "c": "步",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      },
      {
       "scene": "👨‍🏫📚🧱",
       "full": "老师讲了一遍基础课程",
       "vi": "Thầy giáo đã giảng một lượt khóa học cơ bản",
       "parts": [
        {
         "t": "老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "讲了一遍",
         "ico": "🗣️",
         "c": "v",
         "py": "jiǎng le yī biàn",
         "hv": "giảng liễu nhất biến"
        },
        {
         "t": "基础课程",
         "ico": "📚",
         "c": "o",
         "py": "jīchǔ kèchéng",
         "hv": "cơ sở khóa trình"
        }
       ],
       "traceWord": "课程",
       "py": "Lǎoshī jiǎng le yī biàn jīchǔ kèchéng",
       "traceKey": "kecheng",
       "traceInfo": [
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        },
        {
         "c": "程",
         "py": "chéng",
         "hv": "trình"
        }
       ]
      },
      {
       "scene": "👨‍🏫👥📝",
       "full": "老师让我们做一遍这些试题",
       "vi": "Thầy giáo cho chúng tôi làm một lượt những đề thi này",
       "parts": [
        {
         "t": "老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "让我们做一遍",
         "ico": "✍️",
         "c": "v",
         "py": "ràng wǒmen zuò yī biàn",
         "hv": "nhượng ngã môn tố nhất biến"
        },
        {
         "t": "这些试题",
         "ico": "📝",
         "c": "o",
         "py": "zhèxiē shìtí",
         "hv": "giá ta thí đề"
        }
       ],
       "traceWord": "试题",
       "py": "Lǎoshī ràng wǒmen zuò yī biàn zhèxiē shìtí",
       "traceKey": "shiti",
       "traceInfo": [
        {
         "c": "试",
         "py": "shì",
         "hv": "thí"
        },
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        }
       ]
      },
      {
       "scene": "🧑💪📝",
       "full": "我想再练一遍难度大的题目",
       "vi": "Tôi muốn luyện thêm một lượt những đề có độ khó cao",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想再练一遍",
         "ico": "💪",
         "c": "v",
         "py": "xiǎng zài liàn yī biàn",
         "hv": "tưởng tái luyện nhất biến"
        },
        {
         "t": "难度大的题目",
         "ico": "🔥",
         "c": "o",
         "py": "nándù dà de tímù",
         "hv": "nan độ đại đích đề mục"
        }
       ],
       "traceWord": "难度",
       "py": "Wǒ xiǎng zài liàn yī biàn nándù dà de tímù",
       "traceKey": "nandu",
       "traceInfo": [
        {
         "c": "难",
         "py": "nán",
         "hv": "nan"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "老师说的考试时间准吗？",
       "qvi": "Thời gian thi thầy nói có chính xác không?",
       "scene": "👨‍🏫⏰📝",
       "ans": "老师说的时间很准",
       "opts": [
        {
         "txt": "我们明天去公园",
         "ico": "🌳",
         "py": "Wǒmen míngtiān qù gōngyuán"
        },
        {
         "txt": "老师说的时间很准",
         "ico": "⏰",
         "py": "Lǎoshī shuō de shíjiān hěn zhǔn"
        },
        {
         "txt": "他在大学学习",
         "ico": "🎓",
         "py": "Tā zài dàxué xuéxí"
        }
       ],
       "qpy": "Lǎoshī shuō de kǎoshì shíjiān zhǔn ma?"
      },
      {
       "q": "这次考试考验什么？",
       "qvi": "Kỳ thi lần này kiểm tra điều gì?",
       "scene": "📝🧱💪",
       "ans": "考验我们的基础",
       "opts": [
        {
         "txt": "在学校门口见面",
         "ico": "🏫",
         "py": "Zài xuéxiào ménkǒu jiànmiàn"
        },
        {
         "txt": "吃了两个鸡蛋",
         "ico": "🥚",
         "py": "Chī le liǎng gè jīdàn"
        },
        {
         "txt": "考验我们的基础",
         "ico": "🧱",
         "py": "Kǎoyàn wǒmen de jīchǔ"
        }
       ],
       "qpy": "Zhè cì kǎoshì kǎoyàn shénme?"
      },
      {
       "q": "这个单元只有两个题目，容易吗？",
       "qvi": "Đơn vị bài này chỉ có hai câu hỏi, có dễ không?",
       "scene": "📖2️⃣📝",
       "ans": "这个单元很简单",
       "opts": [
        {
         "txt": "这个单元很复杂",
         "ico": "🌀",
         "py": "Zhè gè dānyuán hěn fùzá"
        },
        {
         "txt": "我们在学校门口见面",
         "ico": "🏫",
         "py": "Wǒmen zài xuéxiào ménkǒu jiànmiàn"
        },
        {
         "txt": "这个单元很简单",
         "ico": "👍",
         "py": "Zhè gè dānyuán hěn jiǎndān"
        }
       ],
       "qpy": "Zhè gè dānyuán zhǐ yǒu liǎng gè tímù róngyì ma?"
      },
      {
       "q": "学中文有什么困难？",
       "qvi": "Học tiếng Trung có khó khăn gì?",
       "scene": "🧑🇨🇳😓",
       "ans": "听力有一点儿困难",
       "opts": [
        {
         "txt": "我昨天去了书店",
         "ico": "📚",
         "py": "Wǒ zuótiān qù le shūdiàn"
        },
        {
         "txt": "听力有一点儿困难",
         "ico": "🎧",
         "py": "Tīnglì yǒuyīdiǎnr kùnnan"
        },
        {
         "txt": "他是我们的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        }
       ],
       "qpy": "Xué Zhōngwén yǒu shénme kùnnan?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị cho kỳ thi hoặc bài kiểm tra",
      "steps": [
       "<b>Bước 1:</b> Chọn một bài học hoặc tài liệu bạn đang học, tự nói thành tiếng bạn đã làm gì với nó mấy lần, ví dụ <i>\"我看了一遍这个单元\"</i>, <i>\"我读了三遍题目\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho bạn học hoặc đồng nghiệp: hỏi họ đã thi mấy lần, thấy đề khó hay dễ, ví dụ <i>\"你考了几次？\"</i> rồi trả lời bằng <i>\"他考了三次才合格\"</i> theo kiểu của bạn.",
       "<b>Bước 3:</b> Lập kế hoạch ôn tập ngắn: nói với một người bạn rằng bạn muốn làm lại phần nào bao nhiêu lần, ví dụ <i>\"我想再练一遍难度大的题目\"</i>."
      ]
     }
    },
    {
     "id": "3.11C",
     "name": "Bài 3.11C: Nghiên cứu và khoa học",
     "grammar": {
      "formulas": [
       "👉 这 + ⚡ 是 + 🔬 我们做的实验",
       "🧑 我 + ⚡ 不理解 + 💡 他说的理论",
       "👨 他 + ⚡ 提出了 + 🧾 证明这个想法的证据"
      ],
      "tip": "Động từ hoặc cụm chủ–vị có thể làm định ngữ, đứng trước danh từ và nối bằng 的 (de, đích): 定语 + 的 + 名词. Ví dụ 我们做的实验 (thí nghiệm chúng tôi làm), 证明这个想法的证据 (bằng chứng chứng minh ý tưởng này). Phần trước 的 càng dài thì danh từ chính càng ở cuối câu.",
      "vn_tip": "Tiếng Việt đặt định ngữ sau danh từ: \"thí nghiệm mà chúng tôi làm\". Tiếng Trung đảo lại, đặt trước danh từ: 我们做的实验. Người Việt hay nói nhầm thành 实验我们做 hoặc quên 的. Hãy ghép theo thứ tự: người làm + động từ + 的 + danh từ."
     },
     "chunks": [
      {
       "scene": "👉🔬🧪",
       "full": "这是我们做的实验",
       "vi": "Đây là thí nghiệm chúng tôi làm",
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
         "t": "我们做的实验",
         "ico": "🔬",
         "c": "o",
         "py": "wǒmen zuò de shíyàn",
         "hv": "ngã môn tố đích thực nghiệm"
        }
       ],
       "traceWord": "实验",
       "py": "Zhè shì wǒmen zuò de shíyàn",
       "traceKey": "shiyan",
       "traceInfo": [
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        },
        {
         "c": "验",
         "py": "yàn",
         "hv": "nghiệm"
        }
       ]
      },
      {
       "scene": "🧑👩‍🔬💡",
       "full": "我不理解他说的理论",
       "vi": "Tôi không hiểu lý thuyết anh ấy nói",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "不理解",
         "ico": "🤔",
         "c": "v",
         "py": "bù lǐjiě",
         "hv": "bất lý giải"
        },
        {
         "t": "他说的理论",
         "ico": "💡",
         "c": "o",
         "py": "tā shuō de lǐlùn",
         "hv": "tha thuyết đích lý luận"
        }
       ],
       "traceWord": "理论",
       "py": "Wǒ bù lǐjiě tā shuō de lǐlùn",
       "traceKey": "lilun",
       "traceInfo": [
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        },
        {
         "c": "论",
         "py": "lùn",
         "hv": "luận"
        }
       ]
      },
      {
       "scene": "🧑👨‍🏫👀",
       "full": "我喜欢老师观察的方法",
       "vi": "Tôi thích phương pháp thầy giáo quan sát",
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
         "t": "老师观察的方法",
         "ico": "🔭",
         "c": "o",
         "py": "lǎoshī guānchá de fāngfǎ",
         "hv": "lão sư quan sát đích phương pháp"
        }
       ],
       "traceWord": "观察",
       "py": "Wǒ xǐhuan lǎoshī guānchá de fāngfǎ",
       "traceKey": "guancha",
       "traceInfo": [
        {
         "c": "观",
         "py": "guān",
         "hv": "quan"
        },
        {
         "c": "察",
         "py": "chá",
         "hv": "sát"
        }
       ]
      },
      {
       "scene": "🧑🧮📘",
       "full": "我想学他用的计算方法",
       "vi": "Tôi muốn học phương pháp tính toán anh ấy dùng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想学",
         "ico": "📘",
         "c": "v",
         "py": "xiǎng xué",
         "hv": "tưởng học"
        },
        {
         "t": "他用的计算方法",
         "ico": "🧮",
         "c": "o",
         "py": "tā yòng de jìsuàn fāngfǎ",
         "hv": "tha dụng đích kế toán phương pháp"
        }
       ],
       "traceWord": "计算",
       "py": "Wǒ xiǎng xué tā yòng de jìsuàn fāngfǎ",
       "traceKey": "jisuan",
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
        }
       ]
      },
      {
       "scene": "👨📊👀",
       "full": "他给我们看了调查的结果",
       "vi": "Anh ấy cho chúng tôi xem kết quả khảo sát",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "给我们看了",
         "ico": "👀",
         "c": "v",
         "py": "gěi wǒmen kàn le",
         "hv": "cấp ngã môn khán liễu"
        },
        {
         "t": "调查的结果",
         "ico": "📊",
         "c": "o",
         "py": "diàochá de jiéguǒ",
         "hv": "điệu tra đích kết quả"
        }
       ],
       "traceWord": "调查",
       "py": "Tā gěi wǒmen kàn le diàochá de jiéguǒ",
       "traceKey": "diaocha",
       "traceInfo": [
        {
         "c": "调",
         "py": "diào",
         "hv": "điệu"
        },
        {
         "c": "查",
         "py": "chá",
         "hv": "tra"
        }
       ]
      },
      {
       "scene": "👉🏢💻",
       "full": "这是科技公司新用的技术",
       "vi": "Đây là công nghệ mà công ty khoa học kỹ thuật mới dùng",
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
         "t": "科技公司新用的技术",
         "ico": "💻",
         "c": "o",
         "py": "kējì gōngsī xīn yòng de jìshù",
         "hv": "khoa kỹ công ti tân dụng đích kỹ thuật"
        }
       ],
       "traceWord": "技术",
       "py": "Zhè shì kējì gōngsī xīn yòng de jìshù",
       "traceKey": "jishu",
       "traceInfo": [
        {
         "c": "技",
         "py": "jì",
         "hv": "kỹ"
        },
        {
         "c": "术",
         "py": "shù",
         "hv": "thuật"
        }
       ]
      },
      {
       "scene": "🧑🚶🔬",
       "full": "我去过他做试验的实验室",
       "vi": "Tôi đã đến phòng thí nghiệm nơi anh ấy làm thử nghiệm",
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
         "ico": "🚶",
         "c": "v",
         "py": "qù guò",
         "hv": "khứ quá"
        },
        {
         "t": "他做试验的实验室",
         "ico": "🔬",
         "c": "o",
         "py": "tā zuò shìyàn de shíyànshì",
         "hv": "tha tố thí nghiệm đích thực nghiệm thất"
        }
       ],
       "traceWord": "试验",
       "py": "Wǒ qù guò tā zuò shìyàn de shíyànshì",
       "traceKey": "shiyan",
       "traceInfo": [
        {
         "c": "试",
         "py": "shì",
         "hv": "thí"
        },
        {
         "c": "验",
         "py": "yàn",
         "hv": "nghiệm"
        }
       ]
      },
      {
       "scene": "👨💡🧾",
       "full": "他提出了证明这个想法的证据",
       "vi": "Anh ấy đã đưa ra bằng chứng chứng minh ý tưởng này",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "提出了",
         "ico": "🙋",
         "c": "v",
         "py": "tíchū le",
         "hv": "đề xuất liễu"
        },
        {
         "t": "证明这个想法的证据",
         "ico": "🧾",
         "c": "o",
         "py": "zhèngmíng zhè gè xiǎngfǎ de zhèngjù",
         "hv": "chứng minh giá cá tưởng pháp đích chứng cứ"
        }
       ],
       "traceWord": "证据",
       "py": "Tā tíchū le zhèngmíng zhè gè xiǎngfǎ de zhèngjù",
       "traceKey": "zhengju",
       "traceInfo": [
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        },
        {
         "c": "据",
         "py": "jù",
         "hv": "cứ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个概念你理解吗？",
       "qvi": "Khái niệm này bạn có hiểu không?",
       "scene": "💡🧑🤔",
       "ans": "这个概念我不太理解",
       "opts": [
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "这个概念我不太理解",
         "ico": "🤔",
         "py": "Zhè gè gàiniàn wǒ bù tài lǐjiě"
        },
        {
         "txt": "他明天来公司",
         "ico": "🏢",
         "py": "Tā míngtiān lái gōngsī"
        }
       ],
       "qpy": "Zhè gè gàiniàn nǐ lǐjiě ma?"
      },
      {
       "q": "他们的观念一样吗？",
       "qvi": "Quan niệm của họ có giống nhau không?",
       "scene": "👥💭❓",
       "ans": "他们的观念不一样",
       "opts": [
        {
         "txt": "他们的观念不一样",
         "ico": "💭",
         "py": "Tāmen de guānniàn bù yīyàng"
        },
        {
         "txt": "他们明天去公园",
         "ico": "🌳",
         "py": "Tāmen míngtiān qù gōngyuán"
        },
        {
         "txt": "他们在学校门口",
         "ico": "🏫",
         "py": "Tāmen zài xuéxiào ménkǒu"
        }
       ],
       "qpy": "Tāmen de guānniàn yīyàng ma?"
      },
      {
       "q": "这本书写了什么？",
       "qvi": "Cuốn sách này viết về điều gì?",
       "scene": "📖✍️💡",
       "ans": "这本书写了他的思想",
       "opts": [
        {
         "txt": "这本书在桌子上",
         "ico": "🪑",
         "py": "Zhè běn shū zài zhuōzi shàng"
        },
        {
         "txt": "我买了三本书",
         "ico": "📚",
         "py": "Wǒ mǎi le sān běn shū"
        },
        {
         "txt": "这本书写了他的思想",
         "ico": "💡",
         "py": "Zhè běn shū xiě le tā de sīxiǎng"
        }
       ],
       "qpy": "Zhè běn shū xiě le shénme?"
      },
      {
       "q": "这个房间是做什么用的？",
       "qvi": "Căn phòng này dùng để làm gì?",
       "scene": "🏠❓📚",
       "ans": "这个房间是专门用来学习的",
       "opts": [
        {
         "txt": "这个房间在三楼",
         "ico": "🏢",
         "py": "Zhè gè fángjiān zài sān lóu"
        },
        {
         "txt": "这个房间是专门用来学习的",
         "ico": "📚",
         "py": "Zhè gè fángjiān shì zhuānmén yòng lái xuéxí de"
        },
        {
         "txt": "这个房间很大",
         "ico": "📏",
         "py": "Zhè gè fángjiān hěn dà"
        }
       ],
       "qpy": "Zhè gè fángjiān shì zuò shénme yòng de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu một nghiên cứu hoặc dự án",
      "steps": [
       "<b>Bước 1:</b> Chọn một dự án hoặc thí nghiệm nhỏ bạn biết (ở công ty hoặc lúc học), nói thành tiếng bằng một câu có định ngữ, ví dụ <i>\"这是我们做的实验\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp: kể kết quả hoặc dữ liệu bạn đã thấy, ví dụ <i>\"他给我们看了调查的结果\"</i>, rồi hỏi họ có hiểu hay không bằng <i>\"这个概念你理解吗？\"</i>.",
       "<b>Bước 3:</b> Giả sử bạn thuyết trình với đối tác: nói ba câu về ý tưởng, kỹ thuật và bằng chứng, dùng mẫu <i>\"他提出了证明这个想法的证据\"</i> và thay bằng nội dung thật của bạn."
      ]
     }
    }
   ]
  },
  "3.12": {
   "lessons": [
    {
     "id": "3.12A",
     "name": "Bài 3.12A: Báo chí và bài viết",
     "grammar": {
      "formulas": [
       "🧑 我 + 🚶 去书店 + 📰 买杂志",
       "📝 记者 + 🚶 去现场 + 📰 写报道",
       "👥 我们 + 💬 开会 + 📄 讨论文章"
      ],
      "tip": "Câu liên động: hai động từ đứng liền nhau, động tác sau là MỤC ĐÍCH của động tác trước. Ví dụ 去 (qù, khứ) + địa điểm + động tác: 去现场采访 = đến hiện trường để phỏng vấn. Không cần thêm từ nối như \"để\" trong tiếng Việt.",
      "vn_tip": "Người Việt hay thêm \"để\" rồi dịch sát chữ, hoặc đảo thứ tự động từ. Đúng là: 去 + nơi chốn + việc cần làm (我去书店买杂志), không nói 我买杂志去书店."
     },
     "chunks": [
      {
       "scene": "👨🏪📰",
       "full": "爸爸去楼下买报",
       "vi": "Bố xuống tầng dưới mua báo",
       "parts": [
        {
         "t": "爸爸",
         "ico": "👨",
         "c": "s",
         "py": "bàba",
         "hv": "ba ba"
        },
        {
         "t": "去楼下",
         "ico": "⬇️",
         "c": "v",
         "py": "qù lóu xià",
         "hv": "khứ lâu hạ"
        },
        {
         "t": "买报",
         "ico": "📰",
         "c": "o",
         "py": "mǎi bào",
         "hv": "mãi báo"
        }
       ],
       "traceWord": "报",
       "py": "Bàba qù lóu xià mǎi bào",
       "traceKey": "bao",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        }
       ]
      },
      {
       "scene": "🧑📚🏪",
       "full": "我去书店买杂志",
       "vi": "Tôi đến hiệu sách mua tạp chí",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "去书店",
         "ico": "📚",
         "c": "v",
         "py": "qù shūdiàn",
         "hv": "khứ thư điếm"
        },
        {
         "t": "买杂志",
         "ico": "📖",
         "c": "o",
         "py": "mǎi zázhì",
         "hv": "mãi tạp chí"
        }
       ],
       "traceWord": "杂志",
       "py": "Wǒ qù shūdiàn mǎi zázhì",
       "traceKey": "zazhi",
       "traceInfo": [
        {
         "c": "杂",
         "py": "zá",
         "hv": "tạp"
        },
        {
         "c": "志",
         "py": "zhì",
         "hv": "chí"
        }
       ]
      },
      {
       "scene": "🎤📝🏙️",
       "full": "记者去现场写报道",
       "vi": "Phóng viên đến hiện trường viết bài đưa tin",
       "parts": [
        {
         "t": "记者",
         "ico": "🎤",
         "c": "s",
         "py": "jìzhě",
         "hv": "ký giả"
        },
        {
         "t": "去现场",
         "ico": "🏙️",
         "c": "v",
         "py": "qù xiànchǎng",
         "hv": "khứ hiện trường"
        },
        {
         "t": "写报道",
         "ico": "📝",
         "c": "o",
         "py": "xiě bàodào",
         "hv": "tả báo đạo"
        }
       ],
       "traceWord": "报道",
       "py": "Jìzhě qù xiànchǎng xiě bàodào",
       "traceKey": "baodao",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "👥📱💬",
       "full": "我们用手机看消息",
       "vi": "Chúng tôi dùng điện thoại xem tin tức",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "用手机",
         "ico": "📱",
         "c": "v",
         "py": "yòng shǒujī",
         "hv": "dụng thủ cơ"
        },
        {
         "t": "看消息",
         "ico": "💬",
         "c": "o",
         "py": "kàn xiāoxi",
         "hv": "khán tiêu tức"
        }
       ],
       "traceWord": "消息",
       "py": "Wǒmen yòng shǒujī kàn xiāoxi",
       "traceKey": "xiaoxi",
       "traceInfo": [
        {
         "c": "消",
         "py": "xiāo",
         "hv": "tiêu"
        },
        {
         "c": "息",
         "py": "xi",
         "hv": "tức"
        }
       ]
      },
      {
       "scene": "✍️🏢🎯",
       "full": "作者来公司介绍专题",
       "vi": "Tác giả đến công ty giới thiệu chuyên đề",
       "parts": [
        {
         "t": "作者",
         "ico": "✍️",
         "c": "s",
         "py": "zuòzhě",
         "hv": "tác giả"
        },
        {
         "t": "来公司",
         "ico": "🏢",
         "c": "v",
         "py": "lái gōngsī",
         "hv": "lai công ti"
        },
        {
         "t": "介绍专题",
         "ico": "🎯",
         "c": "o",
         "py": "jièshào zhuāntí",
         "hv": "giới thiệu chuyên đề"
        }
       ],
       "traceWord": "专题",
       "py": "Zuòzhě lái gōngsī jièshào zhuāntí",
       "traceKey": "zhuanti",
       "traceInfo": [
        {
         "c": "专",
         "py": "zhuān",
         "hv": "chuyên"
        },
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        }
       ]
      },
      {
       "scene": "🧑🌐🖼️",
       "full": "我去网上找图和文字",
       "vi": "Tôi lên mạng tìm hình ảnh và chữ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "去网上",
         "ico": "🌐",
         "c": "v",
         "py": "qù wǎng shang",
         "hv": "khứ võng thượng"
        },
        {
         "t": "找图和文字",
         "ico": "🖼️",
         "c": "o",
         "py": "zhǎo tú hé wénzì",
         "hv": "trảo đồ hòa văn tự"
        }
       ],
       "traceWord": "文字",
       "py": "Wǒ qù wǎng shang zhǎo tú hé wénzì",
       "traceKey": "wenzi",
       "traceInfo": [
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        },
        {
         "c": "字",
         "py": "zì",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "📖📱❓",
       "full": "读者发短信问记者问题",
       "vi": "Độc giả nhắn tin hỏi phóng viên một câu hỏi",
       "parts": [
        {
         "t": "读者",
         "ico": "📖",
         "c": "s",
         "py": "dúzhě",
         "hv": "độc giả"
        },
        {
         "t": "发短信",
         "ico": "📱",
         "c": "v",
         "py": "fā duǎnxìn",
         "hv": "phát đoản tín"
        },
        {
         "t": "问记者问题",
         "ico": "❓",
         "c": "o",
         "py": "wèn jìzhě wèntí",
         "hv": "vấn ký giả vấn đề"
        }
       ],
       "traceWord": "读者",
       "py": "Dúzhě fā duǎnxìn wèn jìzhě wèntí",
       "traceKey": "duzhe",
       "traceInfo": [
        {
         "c": "读",
         "py": "dú",
         "hv": "độc"
        },
        {
         "c": "者",
         "py": "zhě",
         "hv": "giả"
        }
       ]
      },
      {
       "scene": "👥💼📄",
       "full": "我们开会讨论文章的标题",
       "vi": "Chúng tôi họp để bàn về tiêu đề của bài viết",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "开会",
         "ico": "💼",
         "c": "v",
         "py": "kāihuì",
         "hv": "khai hội"
        },
        {
         "t": "讨论文章的标题",
         "ico": "📄",
         "c": "o",
         "py": "tǎolùn wénzhāng de biāotí",
         "hv": "thảo luận văn chương đích tiêu đề"
        }
       ],
       "traceWord": "标题",
       "py": "Wǒmen kāihuì tǎolùn wénzhāng de biāotí",
       "traceKey": "biaoti",
       "traceInfo": [
        {
         "c": "标",
         "py": "biāo",
         "hv": "tiêu"
        },
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "老板打开电脑看什么？",
       "qvi": "Sếp mở máy tính xem gì?",
       "scene": "👨‍💼💻",
       "ans": "他看媒体的内容",
       "opts": [
        {
         "txt": "他看媒体的内容",
         "ico": "📰",
         "py": "Tā kàn méitǐ de nèiróng"
        },
        {
         "txt": "他在吃饺子",
         "ico": "🥟",
         "py": "Tā zài chī jiǎozi"
        },
        {
         "txt": "他去睡觉",
         "ico": "😴",
         "py": "Tā qù shuìjiào"
        }
       ],
       "qpy": "Lǎobǎn dǎkāi diànnǎo kàn shénme?"
      },
      {
       "q": "你是从哪儿看到这个消息的？",
       "qvi": "Bạn xem tin này ở đâu vậy?",
       "scene": "💬👀",
       "ans": "我在媒体上看到的",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "🛫",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "我在媒体上看到的",
         "ico": "📺",
         "py": "Wǒ zài méitǐ shàng kàndào de"
        },
        {
         "txt": "他在上班",
         "ico": "💼",
         "py": "Tā zài shàngbān"
        }
       ],
       "qpy": "Nǐ shì cóng nǎr kàndào zhè gè xiāoxi de?"
      },
      {
       "q": "记者去现场做什么？",
       "qvi": "Phóng viên đến hiện trường làm gì?",
       "scene": "🎤🏙️",
       "ans": "去写报道",
       "opts": [
        {
         "txt": "去买衣服",
         "ico": "👕",
         "py": "Qù mǎi yīfu"
        },
        {
         "txt": "去睡觉",
         "ico": "😴",
         "py": "Qù shuìjiào"
        },
        {
         "txt": "去写报道",
         "ico": "📝",
         "py": "Qù xiě bàodào"
        }
       ],
       "qpy": "Jìzhě qù xiànchǎng zuò shénme?"
      },
      {
       "q": "你们的专题有图吗？",
       "qvi": "Chuyên đề của các bạn có hình không?",
       "scene": "🎯🖼️",
       "ans": "有图也有文字",
       "opts": [
        {
         "txt": "我们明天休息",
         "ico": "🏖️",
         "py": "Wǒmen míngtiān xiūxi"
        },
        {
         "txt": "他不在家",
         "ico": "🏠",
         "py": "Tā bú zàijiā"
        },
        {
         "txt": "有图也有文字",
         "ico": "🖼️",
         "py": "Yǒu tú yě yǒu wénzì"
        }
       ],
       "qpy": "Nǐmen de zhuāntí yǒu tú ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chọn bài đăng cho tạp chí công ty",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp biết bạn sẽ đi tìm tư liệu, ví dụ: <i>\"我去网上找图和文字\"</i>.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu về kế hoạch của nhóm, dùng mẫu 去 + nơi chốn + việc: <i>\"记者去现场写报道\"</i>, <i>\"我去书店买杂志\"</i>.",
       "<b>Bước 3:</b> Giả vờ họp với đồng nghiệp, đề nghị bàn tiêu đề: <i>\"我们开会讨论文章的标题\"</i>, rồi tự hỏi và trả lời xem bài viết có hình và chữ không."
      ]
     }
    },
    {
     "id": "3.12B",
     "name": "Bài 3.12B: Truyền hình và phát thanh",
     "grammar": {
      "formulas": [
       "🧑 他 + ❌ 不是看电视 + ✅ 就是听广播",
       "⏰ 周末他 + 🅰️ 不是睡觉 + 🅱️ 就是看电视剧",
       "📻 电台 + 🅰️ 不是播放音乐 + 🅱️ 就是播放新闻"
      ],
      "tip": "Cấu trúc 不是……就是……(bú shì... jiù shì..., bất thị... tựu thị...) = \"không là... thì là...\", nghĩa là chỉ có hai khả năng, không có khả năng thứ ba. Hai vế thường có cấu trúc giống nhau: 不是看电视就是听广播.",
      "vn_tip": "Người Việt hay nói 不是……或者……, hoặc bỏ 就. Phải dùng đủ cặp 不是……就是……, và hai vế nên cùng loại từ: 不是睡觉就是看电视剧."
     },
     "chunks": [
      {
       "scene": "👨📺📻",
       "full": "他不是看电视就是听广播",
       "vi": "Anh ấy không xem tivi thì cũng nghe đài",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不是看电视",
         "ico": "📺",
         "c": "v",
         "py": "bú shì kàn diànshì",
         "hv": "bất thị khán điện thị"
        },
        {
         "t": "就是听广播",
         "ico": "📻",
         "c": "o",
         "py": "jiù shì tīng guǎngbō",
         "hv": "tựu thị thính quảng bá"
        }
       ],
       "traceWord": "广播",
       "py": "Tā bú shì kàn diànshì jiù shì tīng guǎngbō",
       "traceKey": "guangbo",
       "traceInfo": [
        {
         "c": "广",
         "py": "guǎng",
         "hv": "quảng"
        },
        {
         "c": "播",
         "py": "bō",
         "hv": "bá"
        }
       ]
      },
      {
       "scene": "👴📻😴",
       "full": "爷爷不是听收音机就是睡觉",
       "vi": "Ông không nghe radio thì cũng ngủ",
       "parts": [
        {
         "t": "爷爷",
         "ico": "👴",
         "c": "s",
         "py": "yéye",
         "hv": "gia gia"
        },
        {
         "t": "不是听收音机",
         "ico": "📻",
         "c": "v",
         "py": "bú shì tīng shōuyīnjī",
         "hv": "bất thị thính thu âm cơ"
        },
        {
         "t": "就是睡觉",
         "ico": "😴",
         "c": "o",
         "py": "jiù shì shuìjiào",
         "hv": "tựu thị thụy giác"
        }
       ],
       "traceWord": "收音机",
       "py": "Yéye bú shì tīng shōuyīnjī jiù shì shuìjiào",
       "traceKey": "shouyinji",
       "traceInfo": [
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        },
        {
         "c": "音",
         "py": "yīn",
         "hv": "âm"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "📅😴🎬",
       "full": "周末他不是睡觉就是看电视剧",
       "vi": "Cuối tuần anh ấy không ngủ thì cũng xem phim truyền hình",
       "parts": [
        {
         "t": "周末他",
         "ico": "📅",
         "c": "s",
         "py": "zhōumò tā",
         "hv": "chu mạt tha"
        },
        {
         "t": "不是睡觉",
         "ico": "😴",
         "c": "v",
         "py": "bú shì shuìjiào",
         "hv": "bất thị thụy giác"
        },
        {
         "t": "就是看电视剧",
         "ico": "🎬",
         "c": "o",
         "py": "jiù shì kàn diànshìjù",
         "hv": "tựu thị khán điện thị kịch"
        }
       ],
       "traceWord": "电视剧",
       "py": "Zhōumò tā bú shì shuìjiào jiù shì kàn diànshìjù",
       "traceKey": "dianshiju",
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
         "c": "剧",
         "py": "jù",
         "hv": "kịch"
        }
       ]
      },
      {
       "scene": "👨📝🎬",
       "full": "小王不是在制作节目就是在开会",
       "vi": "Tiểu Vương không đang làm chương trình thì cũng đang họp",
       "parts": [
        {
         "t": "小王",
         "ico": "👨",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "不是在制作节目",
         "ico": "🎞️",
         "c": "v",
         "py": "bú shì zài zhìzuò jiémù",
         "hv": "bất thị tại chế tác tiết mục"
        },
        {
         "t": "就是在开会",
         "ico": "💼",
         "c": "o",
         "py": "jiù shì zài kāihuì",
         "hv": "tựu thị tại khai hội"
        }
       ],
       "traceWord": "制作",
       "py": "Xiǎowáng bú shì zài zhìzuò jiémù jiù shì zài kāihuì",
       "traceKey": "zhizuo",
       "traceInfo": [
        {
         "c": "制",
         "py": "zhì",
         "hv": "chế"
        },
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        }
       ]
      },
      {
       "scene": "📻🎵📰",
       "full": "电台不是播放音乐就是播放新闻",
       "vi": "Đài phát thanh không phát nhạc thì cũng phát tin tức",
       "parts": [
        {
         "t": "电台",
         "ico": "📻",
         "c": "s",
         "py": "diàntái",
         "hv": "điện đài"
        },
        {
         "t": "不是播放音乐",
         "ico": "🎵",
         "c": "v",
         "py": "bú shì bōfàng yīnyuè",
         "hv": "bất thị bá phóng âm nhạc"
        },
        {
         "t": "就是播放新闻",
         "ico": "📰",
         "c": "o",
         "py": "jiù shì bōfàng xīnwén",
         "hv": "tựu thị bá phóng tân văn"
        }
       ],
       "traceWord": "播放",
       "py": "Diàntái bú shì bōfàng yīnyuè jiù shì bōfàng xīnwén",
       "traceKey": "bofang",
       "traceInfo": [
        {
         "c": "播",
         "py": "bō",
         "hv": "bá"
        },
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        }
       ]
      },
      {
       "scene": "🎧🚗🏠",
       "full": "听众不是在车上收听就是在家收听",
       "vi": "Thính giả không nghe trên xe thì cũng nghe ở nhà",
       "parts": [
        {
         "t": "听众",
         "ico": "🎧",
         "c": "s",
         "py": "tīngzhòng",
         "hv": "thính chúng"
        },
        {
         "t": "不是在车上收听",
         "ico": "🚗",
         "c": "v",
         "py": "bú shì zài chē shang shōutīng",
         "hv": "bất thị tại xa thượng thu thính"
        },
        {
         "t": "就是在家收听",
         "ico": "🏠",
         "c": "o",
         "py": "jiù shì zàijiā shōutīng",
         "hv": "tựu thị tại gia thu thính"
        }
       ],
       "traceWord": "收听",
       "py": "Tīngzhòng bú shì zài chē shang shōutīng jiù shì zàijiā shōutīng",
       "traceKey": "shouting",
       "traceInfo": [
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        },
        {
         "c": "听",
         "py": "tīng",
         "hv": "thính"
        }
       ]
      },
      {
       "scene": "📺🔴🎞️",
       "full": "节目不是现场直播就是晚上播出",
       "vi": "Chương trình không phát trực tiếp tại chỗ thì cũng phát vào buổi tối",
       "parts": [
        {
         "t": "节目",
         "ico": "📺",
         "c": "s",
         "py": "jiémù",
         "hv": "tiết mục"
        },
        {
         "t": "不是现场直播",
         "ico": "🔴",
         "c": "v",
         "py": "bú shì xiànchǎng zhíbō",
         "hv": "bất thị hiện trường trực bá"
        },
        {
         "t": "就是晚上播出",
         "ico": "🌙",
         "c": "o",
         "py": "jiù shì wǎnshang bōchū",
         "hv": "tựu thị vãn thượng bá xuất"
        }
       ],
       "traceWord": "直播",
       "py": "Jiémù bú shì xiànchǎng zhíbō jiù shì wǎnshang bōchū",
       "traceKey": "zhibo",
       "traceInfo": [
        {
         "c": "直",
         "py": "zhí",
         "hv": "trực"
        },
        {
         "c": "播",
         "py": "bō",
         "hv": "bá"
        }
       ]
      },
      {
       "scene": "🏢📺🎬",
       "full": "电视台不是直播就是播放连续剧",
       "vi": "Đài truyền hình không phát trực tiếp thì cũng chiếu phim bộ nhiều tập",
       "parts": [
        {
         "t": "电视台",
         "ico": "🏢",
         "c": "s",
         "py": "diànshìtái",
         "hv": "điện thị đài"
        },
        {
         "t": "不是直播",
         "ico": "🔴",
         "c": "v",
         "py": "bú shì zhíbō",
         "hv": "bất thị trực bá"
        },
        {
         "t": "就是播放连续剧",
         "ico": "🎬",
         "c": "o",
         "py": "jiù shì bōfàng liánxùjù",
         "hv": "tựu thị bá phóng liên tục kịch"
        }
       ],
       "traceWord": "连续剧",
       "py": "Diànshìtái bú shì zhíbō jiù shì bōfàng liánxùjù",
       "traceKey": "lianxuju",
       "traceInfo": [
        {
         "c": "连",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "续",
         "py": "xù",
         "hv": "tục"
        },
        {
         "c": "剧",
         "py": "jù",
         "hv": "kịch"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你晚上常常收看什么？",
       "qvi": "Buổi tối bạn thường xem gì?",
       "scene": "🌙📺",
       "ans": "我常常收看新闻",
       "opts": [
        {
         "txt": "我常常去爬山",
         "ico": "⛰️",
         "py": "Wǒ chángcháng qù pá shān"
        },
        {
         "txt": "我常常吃面包",
         "ico": "🍞",
         "py": "Wǒ chángcháng chī miànbāo"
        },
        {
         "txt": "我常常收看新闻",
         "ico": "📺",
         "py": "Wǒ chángcháng shōukàn xīnwén"
        }
       ],
       "qpy": "Nǐ wǎnshang chángcháng shōukàn shénme?"
      },
      {
       "q": "你是不是喜欢听广播？",
       "qvi": "Bạn có thích nghe đài không?",
       "scene": "📻👂",
       "ans": "我很喜欢听广播",
       "opts": [
        {
         "txt": "我很喜欢听广播",
         "ico": "📻",
         "py": "Wǒ hěn xǐhuan tīng guǎngbō"
        },
        {
         "txt": "我不会骑车",
         "ico": "🚲",
         "py": "Wǒ bú huì qí chē"
        },
        {
         "txt": "我明天去上班",
         "ico": "💼",
         "py": "Wǒ míngtiān qù shàngbān"
        }
       ],
       "qpy": "Nǐ shì bu shì xǐhuan tīng guǎngbō?"
      },
      {
       "q": "周末你一般做什么？",
       "qvi": "Cuối tuần bạn thường làm gì?",
       "scene": "📅🛋️",
       "ans": "我不是看电影就是睡觉",
       "opts": [
        {
         "txt": "我今天去过北京",
         "ico": "🛫",
         "py": "Wǒ jīntiān qù guò Běijīng"
        },
        {
         "txt": "我很喜欢这个包",
         "ico": "👜",
         "py": "Wǒ hěn xǐhuan zhè gè bāo"
        },
        {
         "txt": "我不是看电影就是睡觉",
         "ico": "🎬",
         "py": "Wǒ bú shì kàn diànyǐng jiù shì shuìjiào"
        }
       ],
       "qpy": "Zhōumò nǐ yībān zuò shénme?"
      },
      {
       "q": "这个电视剧几点播出？",
       "qvi": "Phim truyền hình này mấy giờ phát?",
       "scene": "🎬⏰",
       "ans": "晚上八点播出",
       "opts": [
        {
         "txt": "在电视台的楼上",
         "ico": "🏢",
         "py": "Zài diànshìtái de lóu shàng"
        },
        {
         "txt": "晚上八点播出",
         "ico": "⏰",
         "py": "Wǎnshang bā diǎn bōchū"
        },
        {
         "txt": "我们明天不上班",
         "ico": "🏖️",
         "py": "Wǒmen míngtiān bú shàngbān"
        }
       ],
       "qpy": "Zhè gè diànshìjù jǐ diǎn bōchū?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trò chuyện về thói quen giải trí với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hỏi một đồng nghiệp (hoặc tự hỏi mình) về thói quen buổi tối: <i>\"你晚上常常收看什么？\"</i>.",
       "<b>Bước 2:</b> Trả lời bằng mẫu hai khả năng, nói thành tiếng ít nhất 3 câu về bản thân: <i>\"周末我不是看电视剧就是睡觉\"</i>.",
       "<b>Bước 3:</b> Kể về người thân hoặc đồng nghiệp: <i>\"爷爷不是听收音机就是睡觉\"</i>, rồi ghi chú lại để lần sau nói chuyện phiếm với đối tác."
      ]
     }
    },
    {
     "id": "3.12C",
     "name": "Bài 3.12C: Internet và lan truyền thông tin",
     "grammar": {
      "formulas": [
       "🧑 我 + ✉️ 都发送 + ⏱️ 三次了",
       "👶 孩子 + 💻 都会使用 + 🌐 互联网了",
       "👥 大家 + 👀 都关注 + 📰 这个消息三天了"
      ],
      "tip": "Khẩu ngữ 都……了 (dōu... le, đô... liễu) dùng để NHẤN MẠNH rằng sự việc đã xảy ra từ lâu hoặc đã quá mức: 我都发送三次了 = tôi gửi đến ba lần rồi. Thường đi với số lượng thời gian hoặc số lần (三次, 三年, 十点).",
      "vn_tip": "Người Việt hay quên 了 ở cuối câu, hoặc đặt 都 sai chỗ. Đúng là 都 đứng trước động từ và 了 ở cuối câu: 他都录音两次了, không nói 他录音都两次."
     },
     "chunks": [
      {
       "scene": "🧑✉️3️⃣",
       "full": "我都发送三次了",
       "vi": "Tôi gửi đến ba lần rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "都发送",
         "ico": "✉️",
         "c": "v",
         "py": "dōu fāsòng",
         "hv": "đô phát tống"
        },
        {
         "t": "三次了",
         "ico": "3️⃣",
         "c": "o",
         "py": "sān cì le",
         "hv": "tam thứ liễu"
        }
       ],
       "traceWord": "发送",
       "py": "Wǒ dōu fāsòng sān cì le",
       "traceKey": "fasong",
       "traceInfo": [
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        },
        {
         "c": "送",
         "py": "sòng",
         "hv": "tống"
        }
       ]
      },
      {
       "scene": "👨🎙️2️⃣",
       "full": "他都录音两次了",
       "vi": "Anh ấy ghi âm hai lần rồi",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "都录音",
         "ico": "🎙️",
         "c": "v",
         "py": "dōu lùyīn",
         "hv": "đô lục âm"
        },
        {
         "t": "两次了",
         "ico": "2️⃣",
         "c": "o",
         "py": "liǎng cì le",
         "hv": "lưỡng thứ liễu"
        }
       ],
       "traceWord": "录音",
       "py": "Tā dōu lùyīn liǎng cì le",
       "traceKey": "luyin",
       "traceInfo": [
        {
         "c": "录",
         "py": "lù",
         "hv": "lục"
        },
        {
         "c": "音",
         "py": "yīn",
         "hv": "âm"
        }
       ]
      },
      {
       "scene": "👶💻🌐",
       "full": "孩子都会使用互联网了",
       "vi": "Trẻ con cũng biết dùng internet rồi",
       "parts": [
        {
         "t": "孩子",
         "ico": "👶",
         "c": "s",
         "py": "háizi",
         "hv": "hài tử"
        },
        {
         "t": "都会使用",
         "ico": "💻",
         "c": "v",
         "py": "dōu huì shǐyòng",
         "hv": "đô hội sử dụng"
        },
        {
         "t": "互联网了",
         "ico": "🌐",
         "c": "o",
         "py": "hùliánwǎng le",
         "hv": "hỗ liên võng liễu"
        }
       ],
       "traceWord": "互联网",
       "py": "Háizi dōu huì shǐyòng hùliánwǎng le",
       "traceKey": "hulianwang",
       "traceInfo": [
        {
         "c": "互",
         "py": "hù",
         "hv": "hỗ"
        },
        {
         "c": "联",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "网",
         "py": "wǎng",
         "hv": "võng"
        }
       ]
      },
      {
       "scene": "🧑⌨️📝",
       "full": "我都输入名字了",
       "vi": "Tôi nhập tên rồi mà",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "都输入",
         "ico": "⌨️",
         "c": "v",
         "py": "dōu shūrù",
         "hv": "đô thâu nhập"
        },
        {
         "t": "名字了",
         "ico": "📝",
         "c": "o",
         "py": "míngzi le",
         "hv": "danh tự liễu"
        }
       ],
       "traceWord": "输入",
       "py": "Wǒ dōu shūrù míngzi le",
       "traceKey": "shuru",
       "traceInfo": [
        {
         "c": "输",
         "py": "shū",
         "hv": "thâu"
        },
        {
         "c": "入",
         "py": "rù",
         "hv": "nhập"
        }
       ]
      },
      {
       "scene": "⚙️📅🔧",
       "full": "这个技术都应用很多年了",
       "vi": "Kỹ thuật này đã được ứng dụng nhiều năm rồi",
       "parts": [
        {
         "t": "这个技术",
         "ico": "⚙️",
         "c": "s",
         "py": "zhè gè jìshù",
         "hv": "giá cá kỹ thuật"
        },
        {
         "t": "都应用",
         "ico": "🔧",
         "c": "v",
         "py": "dōu yìngyòng",
         "hv": "đô ứng dụng"
        },
        {
         "t": "很多年了",
         "ico": "📅",
         "c": "o",
         "py": "hěn duō nián le",
         "hv": "ngận đa niên liễu"
        }
       ],
       "traceWord": "应用",
       "py": "Zhè gè jìshù dōu yìngyòng hěn duō nián le",
       "traceKey": "yingyong",
       "traceInfo": [
        {
         "c": "应",
         "py": "yìng",
         "hv": "ứng"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "🏢📣📆",
       "full": "公司都推广这个办法三年了",
       "vi": "Công ty đã quảng bá cách làm này ba năm rồi",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "都推广",
         "ico": "📣",
         "c": "v",
         "py": "dōu tuīguǎng",
         "hv": "đô thôi quảng"
        },
        {
         "t": "这个办法三年了",
         "ico": "📆",
         "c": "o",
         "py": "zhè gè bànfǎ sān nián le",
         "hv": "giá cá biện pháp tam niên liễu"
        }
       ],
       "traceWord": "推广",
       "py": "Gōngsī dōu tuīguǎng zhè gè bànfǎ sān nián le",
       "traceKey": "tuiguang",
       "traceInfo": [
        {
         "c": "推",
         "py": "tuī",
         "hv": "thôi"
        },
        {
         "c": "广",
         "py": "guǎng",
         "hv": "quảng"
        }
       ]
      },
      {
       "scene": "👥👀📰",
       "full": "大家都关注这个消息三天了",
       "vi": "Mọi người theo dõi tin này ba ngày rồi",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都关注",
         "ico": "👀",
         "c": "v",
         "py": "dōu guānzhù",
         "hv": "đô quan chú"
        },
        {
         "t": "这个消息三天了",
         "ico": "📰",
         "c": "o",
         "py": "zhè gè xiāoxi sān tiān le",
         "hv": "giá cá tiêu tức tam thiên liễu"
        }
       ],
       "traceWord": "关注",
       "py": "Dàjiā dōu guānzhù zhè gè xiāoxi sān tiān le",
       "traceKey": "guanzhu",
       "traceInfo": [
        {
         "c": "关",
         "py": "guān",
         "hv": "quan"
        },
        {
         "c": "注",
         "py": "zhù",
         "hv": "chú"
        }
       ]
      },
      {
       "scene": "🗣️📰🏙️",
       "full": "据说这个消息都传到北京了",
       "vi": "Nghe nói tin này đã lan đến tận Bắc Kinh rồi",
       "parts": [
        {
         "t": "据说这个消息",
         "ico": "🗣️",
         "c": "s",
         "py": "jùshuō zhè gè xiāoxi",
         "hv": "cứ thuyết giá cá tiêu tức"
        },
        {
         "t": "都传到",
         "ico": "📡",
         "c": "v",
         "py": "dōu chuán dào",
         "hv": "đô truyền đáo"
        },
        {
         "t": "北京了",
         "ico": "🏙️",
         "c": "o",
         "py": "Běijīng le",
         "hv": "bắc kinh liễu"
        }
       ],
       "traceWord": "据说",
       "py": "Jùshuō zhè gè xiāoxi dōu chuán dào Běijīng le",
       "traceKey": "jushuo",
       "traceInfo": [
        {
         "c": "据",
         "py": "jù",
         "hv": "cứ"
        },
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个活动你们宣传多久了？",
       "qvi": "Hoạt động này các bạn đã tuyên truyền được bao lâu rồi?",
       "scene": "📣📆",
       "ans": "我们都宣传一个月了",
       "opts": [
        {
         "txt": "我们明天去北京",
         "ico": "🛫",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "我们都宣传一个月了",
         "ico": "📣",
         "py": "Wǒmen dōu xuānchuán yī gè yuè le"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        }
       ],
       "qpy": "Zhè gè huódòng nǐmen xuānchuán duōjiǔ le?"
      },
      {
       "q": "这个消息传播以后，大家有什么反应？",
       "qvi": "Sau khi tin này lan truyền, mọi người phản ứng thế nào?",
       "scene": "📰👥",
       "ans": "大家都很高兴",
       "opts": [
        {
         "txt": "我们明天去上班",
         "ico": "💼",
         "py": "Wǒmen míngtiān qù shàngbān"
        },
        {
         "txt": "他住在学校里",
         "ico": "🏫",
         "py": "Tā zhù zài xuéxiào lǐ"
        },
        {
         "txt": "大家都很高兴",
         "ico": "😀",
         "py": "Dàjiā dōu hěn gāoxìng"
        }
       ],
       "qpy": "Zhè gè xiāoxi chuánbō yǐhòu dàjiā yǒu shénme fǎnyìng?"
      },
      {
       "q": "你的邮件发出了吗？",
       "qvi": "Email của bạn đã gửi đi chưa?",
       "scene": "✉️❓",
       "ans": "邮件都发出两天了",
       "opts": [
        {
         "txt": "邮件都发出两天了",
         "ico": "✉️",
         "py": "Yóujiàn dōu fāchū liǎng tiān le"
        },
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "他明天不上班",
         "ico": "🏖️",
         "py": "Tā míngtiān bú shàngbān"
        }
       ],
       "qpy": "Nǐ de yóujiàn fāchū le ma?"
      },
      {
       "q": "你录了几遍？",
       "qvi": "Bạn đã ghi bao nhiêu lần rồi?",
       "scene": "🎙️🔢",
       "ans": "我都录了五遍了",
       "opts": [
        {
         "txt": "我坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù gōngsī"
        },
        {
         "txt": "这个杯子很漂亮",
         "ico": "🥤",
         "py": "Zhè gè bēizi hěn piàoliang"
        },
        {
         "txt": "我都录了五遍了",
         "ico": "🎙️",
         "py": "Wǒ dōu lù le wǔ biàn le"
        }
       ],
       "qpy": "Nǐ lù le jǐ biàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin nhắc việc đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Soạn một tin nhắn cho đồng nghiệp nhấn mạnh bạn đã gửi file nhiều lần: <i>\"我都发送三次了\"</i>.",
       "<b>Bước 2:</b> Gọi điện (hoặc tự nói thành tiếng) báo bạn đã làm xong phần việc từ lâu: <i>\"我都输入名字了\"</i>, <i>\"大家都关注这个消息三天了\"</i>.",
       "<b>Bước 3:</b> Kể cho đối tác nghe một tin đang lan nhanh, dùng 据说 và 都……了: <i>\"据说这个消息都传到北京了\"</i>, rồi hỏi phản ứng của họ."
      ]
     }
    }
   ]
  },
  "3.13": {
   "lessons": [
    {
     "id": "3.13A",
     "name": "Bài 3.13A: Sân khấu và biểu diễn",
     "grammar": {
      "formulas": [
       "🧑 他 + ➕ 也是 + 🎭 演员",
       "➕ 也有 + 🎭 话剧 + ➕ 也有 + 🏮 京剧",
       "🧑 我们 + ➕ 也想 + 👀 观看表演"
      ],
      "tip": "Cấu trúc 也……，也……（yě, âm Hán Việt: dã） nối hai việc/hai đặc điểm song song, nghĩa là \"cũng ... cũng ...\". Chữ 也 đặt ngay trước động từ hoặc tính từ của mỗi vế: 他也是演员，也是老师.",
      "vn_tip": "Người Việt hay đặt 也 trước chủ ngữ như \"cũng\" trong \"Anh ấy cũng là...\" thành 也他是演员. Đúng phải là 他也是演员: 也 luôn đứng sau chủ ngữ, trước động từ. Mỗi vế đều cần có 也 riêng."
     },
     "chunks": [
      {
       "scene": "🎭🏮📍",
       "full": "这里也有话剧也有京剧",
       "vi": "Ở đây cũng có kịch nói, cũng có kinh kịch",
       "parts": [
        {
         "t": "这里",
         "ico": "📍",
         "c": "s",
         "py": "zhèlǐ",
         "hv": "giá lý"
        },
        {
         "t": "也有话剧",
         "ico": "🎭",
         "c": "v",
         "py": "yě yǒu huàjù",
         "hv": "dã hữu thoại kịch"
        },
        {
         "t": "也有京剧",
         "ico": "🏮",
         "c": "o",
         "py": "yě yǒu jīngjù",
         "hv": "dã hữu kinh kịch"
        }
       ],
       "traceWord": "话剧",
       "py": "Zhèlǐ yě yǒu huàjù yě yǒu jīngjù",
       "traceKey": "huaju",
       "traceInfo": [
        {
         "c": "话",
         "py": "huà",
         "hv": "thoại"
        },
        {
         "c": "剧",
         "py": "jù",
         "hv": "kịch"
        }
       ]
      },
      {
       "scene": "🧑🎭👨‍🏫",
       "full": "他也是演员也是老师",
       "vi": "Anh ấy cũng là diễn viên, cũng là giáo viên",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "也是演员",
         "ico": "🎭",
         "c": "v",
         "py": "yě shì yǎnyuán",
         "hv": "dã thị diễn viên"
        },
        {
         "t": "也是老师",
         "ico": "👨‍🏫",
         "c": "o",
         "py": "yě shì lǎoshī",
         "hv": "dã thị lão sư"
        }
       ],
       "traceWord": "演员",
       "py": "Tā yě shì yǎnyuán yě shì lǎoshī",
       "traceKey": "yanyuan",
       "traceInfo": [
        {
         "c": "演",
         "py": "yǎn",
         "hv": "diễn"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🖼️🏠📷",
       "full": "墙上也有图画也有照片",
       "vi": "Trên tường cũng có tranh vẽ, cũng có ảnh",
       "parts": [
        {
         "t": "墙上",
         "ico": "🧱",
         "c": "s",
         "py": "qiáng shàng",
         "hv": "tường thượng"
        },
        {
         "t": "也有图画",
         "ico": "🖼️",
         "c": "v",
         "py": "yě yǒu túhuà",
         "hv": "dã hữu đồ họa"
        },
        {
         "t": "也有照片",
         "ico": "📷",
         "c": "o",
         "py": "yě yǒu zhàopiàn",
         "hv": "dã hữu chiếu phiến"
        }
       ],
       "traceWord": "图画",
       "py": "Qiáng shàng yě yǒu túhuà yě yǒu zhàopiàn",
       "traceKey": "tuhua",
       "traceInfo": [
        {
         "c": "图",
         "py": "tú",
         "hv": "đồ"
        },
        {
         "c": "画",
         "py": "huà",
         "hv": "họa"
        }
       ]
      },
      {
       "scene": "🎪🎭👥",
       "full": "剧场里也有演员也有观众",
       "vi": "Trong nhà hát cũng có diễn viên, cũng có khán giả",
       "parts": [
        {
         "t": "剧场里",
         "ico": "🎪",
         "c": "s",
         "py": "jùchǎng lǐ",
         "hv": "kịch trường lý"
        },
        {
         "t": "也有演员",
         "ico": "🎭",
         "c": "v",
         "py": "yě yǒu yǎnyuán",
         "hv": "dã hữu diễn viên"
        },
        {
         "t": "也有观众",
         "ico": "👥",
         "c": "o",
         "py": "yě yǒu guānzhòng",
         "hv": "dã hữu quan chúng"
        }
       ],
       "traceWord": "观众",
       "py": "Jùchǎng lǐ yě yǒu yǎnyuán yě yǒu guānzhòng",
       "traceKey": "guanzhong",
       "traceInfo": [
        {
         "c": "观",
         "py": "guān",
         "hv": "quan"
        },
        {
         "c": "众",
         "py": "zhòng",
         "hv": "chúng"
        }
       ]
      },
      {
       "scene": "🧑‍🎓🎨🖌️",
       "full": "我哥哥也学美术也学艺术",
       "vi": "Anh trai tôi cũng học mỹ thuật, cũng học nghệ thuật",
       "parts": [
        {
         "t": "我哥哥",
         "ico": "👦",
         "c": "s",
         "py": "wǒ gēge",
         "hv": "ngã ca ca"
        },
        {
         "t": "也学美术",
         "ico": "🎨",
         "c": "v",
         "py": "yě xué měishù",
         "hv": "dã học mỹ thuật"
        },
        {
         "t": "也学艺术",
         "ico": "🖌️",
         "c": "o",
         "py": "yě xué yìshù",
         "hv": "dã học nghệ thuật"
        }
       ],
       "traceWord": "美术",
       "py": "Wǒ gēge yě xué měishù yě xué yìshù",
       "traceKey": "meishu",
       "traceInfo": [
        {
         "c": "美",
         "py": "měi",
         "hv": "mỹ"
        },
        {
         "c": "术",
         "py": "shù",
         "hv": "thuật"
        }
       ]
      },
      {
       "scene": "🎭💡🪑",
       "full": "舞台上也有桌子也有椅子",
       "vi": "Trên sân khấu cũng có bàn, cũng có ghế",
       "parts": [
        {
         "t": "舞台上",
         "ico": "🎭",
         "c": "s",
         "py": "wǔtái shàng",
         "hv": "vũ đài thượng"
        },
        {
         "t": "也有桌子",
         "ico": "🪵",
         "c": "v",
         "py": "yě yǒu zhuōzi",
         "hv": "dã hữu trác tử"
        },
        {
         "t": "也有椅子",
         "ico": "🪑",
         "c": "o",
         "py": "yě yǒu yǐzi",
         "hv": "dã hữu ỷ tử"
        }
       ],
       "traceWord": "舞台",
       "py": "Wǔtái shàng yě yǒu zhuōzi yě yǒu yǐzi",
       "traceKey": "wutai",
       "traceInfo": [
        {
         "c": "舞",
         "py": "wǔ",
         "hv": "vũ"
        },
        {
         "c": "台",
         "py": "tái",
         "hv": "đài"
        }
       ]
      },
      {
       "scene": "🧑🎤🎭",
       "full": "他也唱得好听也演得精彩",
       "vi": "Anh ấy hát cũng hay, diễn cũng xuất sắc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "也唱得好听",
         "ico": "🎤",
         "c": "v",
         "py": "yě chàng de hǎotīng",
         "hv": "dã xướng đắc hảo thính"
        },
        {
         "t": "也演得精彩",
         "ico": "🌟",
         "c": "o",
         "py": "yě yǎn de jīngcǎi",
         "hv": "dã diễn đắc tinh thái"
        }
       ],
       "traceWord": "精彩",
       "py": "Tā yě chàng de hǎotīng yě yǎn de jīngcǎi",
       "traceKey": "jingcai",
       "traceInfo": [
        {
         "c": "精",
         "py": "jīng",
         "hv": "tinh"
        },
        {
         "c": "彩",
         "py": "cǎi",
         "hv": "thái"
        }
       ]
      },
      {
       "scene": "👥👀🎭",
       "full": "我们也想观看表演也想参加演出",
       "vi": "Chúng tôi cũng muốn xem biểu diễn, cũng muốn tham gia buổi diễn",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "也想观看表演",
         "ico": "👀",
         "c": "v",
         "py": "yě xiǎng guānkàn biǎoyǎn",
         "hv": "dã tưởng quan khán biểu diễn"
        },
        {
         "t": "也想参加演出",
         "ico": "🎭",
         "c": "o",
         "py": "yě xiǎng cānjiā yǎnchū",
         "hv": "dã tưởng tham gia diễn xuất"
        }
       ],
       "traceWord": "演出",
       "py": "Wǒmen yě xiǎng guānkàn biǎoyǎn yě xiǎng cānjiā yǎnchū",
       "traceKey": "yanchu",
       "traceInfo": [
        {
         "c": "演",
         "py": "yǎn",
         "hv": "diễn"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你喜欢话剧还是京剧？",
       "qvi": "Bạn thích kịch nói hay kinh kịch?",
       "scene": "🧑🎭🏮",
       "ans": "我也喜欢话剧也喜欢京剧",
       "opts": [
        {
         "txt": "我明天去上班",
         "ico": "💼",
         "py": "Wǒ míngtiān qù shàngbān"
        },
        {
         "txt": "我也喜欢话剧也喜欢京剧",
         "ico": "🎭",
         "py": "Wǒ yě xǐhuan huàjù yě xǐhuan jīngjù"
        },
        {
         "txt": "我昨天吃了面包",
         "ico": "🍞",
         "py": "Wǒ zuótiān chī le miànbāo"
        }
       ],
       "qpy": "Nǐ xǐhuan huàjù háishi jīngjù?"
      },
      {
       "q": "今天晚上的演出怎么样？",
       "qvi": "Buổi diễn tối nay thế nào?",
       "scene": "🌙🎭❓",
       "ans": "表演也精彩音乐也好听",
       "opts": [
        {
         "txt": "票价是五十块",
         "ico": "🎫",
         "py": "Piàojià shì wǔ shí kuài"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "表演也精彩音乐也好听",
         "ico": "🎶",
         "py": "Biǎoyǎn yě jīngcǎi yīnyuè yě hǎotīng"
        }
       ],
       "qpy": "Jīntiān wǎnshang de yǎnchū zěnmeyàng?"
      },
      {
       "q": "剧场里有什么人？",
       "qvi": "Trong nhà hát có những ai?",
       "scene": "🎪👥❓",
       "ans": "有演员也有很多观众",
       "opts": [
        {
         "txt": "有一杯咖啡",
         "ico": "☕",
         "py": "Yǒu yī bēi kāfēi"
        },
        {
         "txt": "有很多水果",
         "ico": "🍎",
         "py": "Yǒu hěn duō shuǐguǒ"
        },
        {
         "txt": "有演员也有很多观众",
         "ico": "👥",
         "py": "Yǒu yǎnyuán yě yǒu hěn duō guānzhòng"
        }
       ],
       "qpy": "Jùchǎng lǐ yǒu shénme rén?"
      },
      {
       "q": "你喜欢美术吗？",
       "qvi": "Bạn có thích mỹ thuật không?",
       "scene": "🧑🎨❓",
       "ans": "喜欢美术也喜欢图画",
       "opts": [
        {
         "txt": "喜欢美术也喜欢图画",
         "ico": "🎨",
         "py": "Xǐhuan měishù yě xǐhuan túhuà"
        },
        {
         "txt": "我去超市买水果",
         "ico": "🛒",
         "py": "Wǒ qù chāoshì mǎi shuǐguǒ"
        },
        {
         "txt": "不喜欢吃面条儿",
         "ico": "🍜",
         "py": "Bù xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Nǐ xǐhuan měishù ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi xem biểu diễn",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp, rủ đi xem biểu diễn cuối tuần, nói rõ bạn thích loại nào: <i>\"我也喜欢话剧也喜欢京剧\"</i>.",
       "<b>Bước 2:</b> Gọi điện hỏi quầy vé về buổi diễn: có những diễn viên nào, nhà hát thế nào, rồi nói <i>\"我们也想观看表演也想参加演出\"</i> nếu có hoạt động cho khán giả.",
       "<b>Bước 3:</b> Sau buổi diễn, tự nói thành tiếng nhận xét 3 câu với đồng nghiệp bằng cấu trúc 也……也……, ví dụ <i>\"他也唱得好听也演得精彩\"</i>."
      ]
     }
    },
    {
     "id": "3.13B",
     "name": "Bài 3.13B: Âm nhạc, ca hát và cảm xúc",
     "grammar": {
      "formulas": [
       "🎤 歌声 + ⏱️ 一会儿高 + ⏱️ 一会儿低",
       "🧑 我的感受 + 😊 一会儿高兴 + 😢 一会儿难过",
       "🎸 乐队的音乐 + ⏱️ 一会儿快 + ⏱️ 一会儿慢"
      ],
      "tip": "Cấu trúc 一会儿……，一会儿……（yíhuìr, âm Hán Việt: nhất hội nhi） diễn tả hai trạng thái hoặc hai hành động thay phiên nhau, nghĩa là \"lúc thì ... lúc thì ...\". Hai vế thường đối lập: 一会儿高，一会儿低.",
      "vn_tip": "Người Việt hay nói \"lúc thì\" thành 有时候……有时候…… hoặc quên lặp lại 一会儿 ở vế sau. Với cấu trúc này, mỗi vế phải có 一会儿 và đặt ngay trước động từ hoặc tính từ: 他一会儿笑一会儿哭, không nói 他一会儿笑哭."
     },
     "chunks": [
      {
       "scene": "🎤🎶📈",
       "full": "歌声一会儿高一会儿低",
       "vi": "Giọng hát lúc cao lúc thấp",
       "parts": [
        {
         "t": "歌声",
         "ico": "🎤",
         "c": "s",
         "py": "gēshēng",
         "hv": "ca thanh"
        },
        {
         "t": "一会儿高",
         "ico": "📈",
         "c": "v",
         "py": "yīhuìr gāo",
         "hv": "nhất hội nhi cao"
        },
        {
         "t": "一会儿低",
         "ico": "📉",
         "c": "o",
         "py": "yīhuìr dī",
         "hv": "nhất hội nhi đê"
        }
       ],
       "traceWord": "歌声",
       "py": "Gēshēng yīhuìr gāo yīhuìr dī",
       "traceKey": "gesheng",
       "traceInfo": [
        {
         "c": "歌",
         "py": "gē",
         "hv": "ca"
        },
        {
         "c": "声",
         "py": "shēng",
         "hv": "thanh"
        }
       ]
      },
      {
       "scene": "🎸🎶⏩",
       "full": "乐队的音乐一会儿快一会儿慢",
       "vi": "Âm nhạc của ban nhạc lúc nhanh lúc chậm",
       "parts": [
        {
         "t": "乐队的音乐",
         "ico": "🎸",
         "c": "s",
         "py": "yuèduì de yīnyuè",
         "hv": "nhạc đội đích âm nhạc"
        },
        {
         "t": "一会儿快",
         "ico": "⏩",
         "c": "v",
         "py": "yīhuìr kuài",
         "hv": "nhất hội nhi khoái"
        },
        {
         "t": "一会儿慢",
         "ico": "🐢",
         "c": "o",
         "py": "yīhuìr màn",
         "hv": "nhất hội nhi mạn"
        }
       ],
       "traceWord": "乐队",
       "py": "Yuèduì de yīnyuè yīhuìr kuài yīhuìr màn",
       "traceKey": "yuedui",
       "traceInfo": [
        {
         "c": "乐",
         "py": "yuè",
         "hv": "nhạc"
        },
        {
         "c": "队",
         "py": "duì",
         "hv": "đội"
        }
       ]
      },
      {
       "scene": "🎤🗣️🎶",
       "full": "歌手一会儿演唱一会儿说话",
       "vi": "Ca sĩ lúc thì biểu diễn hát, lúc thì nói chuyện",
       "parts": [
        {
         "t": "歌手",
         "ico": "🎤",
         "c": "s",
         "py": "gēshǒu",
         "hv": "ca thủ"
        },
        {
         "t": "一会儿演唱",
         "ico": "🎶",
         "c": "v",
         "py": "yīhuìr yǎnchàng",
         "hv": "nhất hội nhi diễn xướng"
        },
        {
         "t": "一会儿说话",
         "ico": "🗣️",
         "c": "o",
         "py": "yīhuìr shuōhuà",
         "hv": "nhất hội nhi thuyết thoại"
        }
       ],
       "traceWord": "演唱",
       "py": "Gēshǒu yīhuìr yǎnchàng yīhuìr shuōhuà",
       "traceKey": "yanchang",
       "traceInfo": [
        {
         "c": "演",
         "py": "yǎn",
         "hv": "diễn"
        },
        {
         "c": "唱",
         "py": "chàng",
         "hv": "xướng"
        }
       ]
      },
      {
       "scene": "👩💞🌗",
       "full": "他一会儿乐一会儿哭",
       "vi": "Anh ấy lúc thì cười vui, lúc thì khóc",
       "parts": [
        {
         "t": "他",
         "ico": "💞",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一会儿乐",
         "ico": "👍",
         "c": "v",
         "py": "yīhuìr lè",
         "hv": "nhất hội nhi lạc"
        },
        {
         "t": "一会儿哭",
         "ico": "👎",
         "c": "o",
         "py": "yīhuìr kū",
         "hv": "nhất hội nhi khốc"
        }
       ],
       "traceWord": "乐",
       "py": "Tā yīhuìr lè yīhuìr kū",
       "traceKey": "le",
       "traceInfo": [
        {
         "c": "乐",
         "py": "lè",
         "hv": "lạc"
        }
       ]
      },
      {
       "scene": "🧑😊😢",
       "full": "我的感受一会儿高兴一会儿难过",
       "vi": "Cảm nhận của tôi lúc vui lúc buồn",
       "parts": [
        {
         "t": "我的感受",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ de gǎnshòu",
         "hv": "ngã đích cảm thụ"
        },
        {
         "t": "一会儿高兴",
         "ico": "😊",
         "c": "v",
         "py": "yīhuìr gāoxìng",
         "hv": "nhất hội nhi cao hứng"
        },
        {
         "t": "一会儿难过",
         "ico": "😢",
         "c": "o",
         "py": "yīhuìr nánguò",
         "hv": "nhất hội nhi nan quá"
        }
       ],
       "traceWord": "感受",
       "py": "Wǒ de gǎnshòu yīhuìr gāoxìng yīhuìr nánguò",
       "traceKey": "ganshou",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "受",
         "py": "shòu",
         "hv": "thụ"
        }
       ]
      },
      {
       "scene": "🧑❤️🎵",
       "full": "他热爱音乐一会儿唱一会儿听",
       "vi": "Anh ấy yêu âm nhạc, lúc hát lúc nghe",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "热爱音乐",
         "ico": "❤️",
         "c": "v",
         "py": "rè'ài yīnyuè",
         "hv": "nhiệt ái âm nhạc"
        },
        {
         "t": "一会儿唱一会儿听",
         "ico": "🎧",
         "c": "o",
         "py": "yīhuìr chàng yīhuìr tīng",
         "hv": "nhất hội nhi xướng nhất hội nhi thính"
        }
       ],
       "traceWord": "热爱",
       "py": "Tā rè'ài yīnyuè yīhuìr chàng yīhuìr tīng",
       "traceKey": "reai",
       "traceInfo": [
        {
         "c": "热",
         "py": "rè",
         "hv": "nhiệt"
        },
        {
         "c": "爱",
         "py": "ài",
         "hv": "ái"
        }
       ]
      },
      {
       "scene": "🎪👥😂",
       "full": "演唱会上歌迷一会儿笑一会儿哭",
       "vi": "Ở buổi hòa nhạc, người hâm mộ lúc cười lúc khóc",
       "parts": [
        {
         "t": "演唱会上歌迷",
         "ico": "🎪",
         "c": "s",
         "py": "yǎnchànghuì shàng gēmí",
         "hv": "diễn xướng hội thượng ca mê"
        },
        {
         "t": "一会儿笑",
         "ico": "😂",
         "c": "v",
         "py": "yīhuìr xiào",
         "hv": "nhất hội nhi tiếu"
        },
        {
         "t": "一会儿哭",
         "ico": "😭",
         "c": "o",
         "py": "yīhuìr kū",
         "hv": "nhất hội nhi khốc"
        }
       ],
       "traceWord": "歌迷",
       "py": "Yǎnchànghuì shàng gēmí yīhuìr xiào yīhuìr kū",
       "traceKey": "gemi",
       "traceInfo": [
        {
         "c": "歌",
         "py": "gē",
         "hv": "ca"
        },
        {
         "c": "迷",
         "py": "mí",
         "hv": "mê"
        }
       ]
      },
      {
       "scene": "🧑🎼🌈",
       "full": "他的情感一会儿快乐一会儿痛苦",
       "vi": "Cảm xúc của anh ấy lúc vui vẻ lúc đau khổ",
       "parts": [
        {
         "t": "他的情感",
         "ico": "🧑",
         "c": "s",
         "py": "tā de qínggǎn",
         "hv": "tha đích tình cảm"
        },
        {
         "t": "一会儿快乐",
         "ico": "😄",
         "c": "v",
         "py": "yīhuìr kuàilè",
         "hv": "nhất hội nhi khoái lạc"
        },
        {
         "t": "一会儿痛苦",
         "ico": "😣",
         "c": "o",
         "py": "yīhuìr tòngkǔ",
         "hv": "nhất hội nhi thống khổ"
        }
       ],
       "traceWord": "情感",
       "py": "Tā de qínggǎn yīhuìr kuàilè yīhuìr tòngkǔ",
       "traceKey": "qinggan",
       "traceInfo": [
        {
         "c": "情",
         "py": "qíng",
         "hv": "tình"
        },
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你对这个乐队有什么印象？",
       "qvi": "Bạn có ấn tượng gì về ban nhạc này?",
       "scene": "🧑🎸❓",
       "ans": "他们的歌声非常动人",
       "opts": [
        {
         "txt": "他们明天去北京",
         "ico": "✈️",
         "py": "Tāmen míngtiān qù Běijīng"
        },
        {
         "txt": "他们是我的同事",
         "ico": "👥",
         "py": "Tāmen shì wǒ de tóngshì"
        },
        {
         "txt": "他们的歌声非常动人",
         "ico": "🎶",
         "py": "Tāmen de gēshēng fēicháng dòngrén"
        }
       ],
       "qpy": "Nǐ duì zhè gè yuèduì yǒu shénme yìnxiàng?"
      },
      {
       "q": "你为什么常去演唱会？",
       "qvi": "Vì sao bạn hay đi xem hòa nhạc?",
       "scene": "🧑🎪❓",
       "ans": "我迷上了这个歌手",
       "opts": [
        {
         "txt": "我明天坐地铁上班",
         "ico": "🚇",
         "py": "Wǒ míngtiān zuò dìtiě shàngbān"
        },
        {
         "txt": "我迷上了这个歌手",
         "ico": "🎤",
         "py": "Wǒ mí shàng le zhè gè gēshǒu"
        },
        {
         "txt": "我家有两只猫",
         "ico": "🐱",
         "py": "Wǒ jiā yǒu liǎng zhǐ māo"
        }
       ],
       "qpy": "Nǐ wèi shénme cháng qù yǎnchànghuì?"
      },
      {
       "q": "听完他的歌，你有什么体会？",
       "qvi": "Nghe xong bài hát của anh ấy, bạn cảm nhận gì?",
       "scene": "🎧🧑💭",
       "ans": "我体会到了歌里的感情",
       "opts": [
        {
         "txt": "我今天没有吃早饭",
         "ico": "🍳",
         "py": "Wǒ jīntiān méiyǒu chī zǎofàn"
        },
        {
         "txt": "我想买一张车票",
         "ico": "🎫",
         "py": "Wǒ xiǎng mǎi yī zhāng chēpiào"
        },
        {
         "txt": "我体会到了歌里的感情",
         "ico": "💞",
         "py": "Wǒ tǐhuì dào le gē lǐ de gǎnqíng"
        }
       ],
       "qpy": "Tīng wán tā de gē nǐ yǒu shénme tǐhuì?"
      },
      {
       "q": "这个乐队是怎么来的？",
       "qvi": "Ban nhạc này hình thành như thế nào?",
       "scene": "🎸👥❓",
       "ans": "四个人组合成了一个乐队",
       "opts": [
        {
         "txt": "他们在北京工作",
         "ico": "🏢",
         "py": "Tāmen zài Běijīng gōngzuò"
        },
        {
         "txt": "四个人组合成了一个乐队",
         "ico": "🎸",
         "py": "Sì gè rén zǔhé chéng le yī gè yuèduì"
        },
        {
         "txt": "那个公司很大",
         "ico": "🏙️",
         "py": "Nà gè gōngsī hěn dà"
        }
       ],
       "qpy": "Zhè gè yuèduì shì zěnme lái de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chia sẻ cảm nhận về buổi hòa nhạc",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp kể bạn mới đi xem hòa nhạc, nói ấn tượng về ban nhạc: <i>\"他们的歌声非常动人\"</i>.",
       "<b>Bước 2:</b> Gọi điện kể cảm xúc của bạn trong buổi diễn bằng cấu trúc lúc thì ... lúc thì ..., ví dụ <i>\"我的感受一会儿高兴一会儿难过\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về ca sĩ hoặc ban nhạc yêu thích của bạn, có ít nhất một câu với 一会儿……一会儿……, ví dụ <i>\"歌声一会儿高一会儿低\"</i>."
      ]
     }
    },
    {
     "id": "3.13C",
     "name": "Bài 3.13C: Sáng tác, điện ảnh và sáng tạo",
     "grammar": {
      "formulas": [
       "📖 这个故事 + ➕ 又生动 + ➕ 又有意思",
       "🧑 他 + ➕ 又喜欢文学 + ➕ 又喜欢写作",
       "👗 他设计的衣服 + ➕ 又好看 + ➕ 又便宜"
      ],
      "tip": "Cấu trúc 又……，又……（yòu, âm Hán Việt: hựu） nối hai đặc điểm hoặc hai hành động cùng tồn tại, nghĩa là \"vừa ... vừa ...\". Mỗi vế có 又 đặt trước tính từ hoặc động từ: 又好看又便宜. Hai vế thường cùng loại (cùng tích cực hoặc cùng tiêu cực).",
      "vn_tip": "Người Việt hay dịch \"vừa ... vừa\" thành 一边……一边…… cho cả tính từ, hoặc nói 很好看又便宜 (thiếu 又 ở vế đầu). Với tính từ, dùng 又……又……: 又好看又便宜; 一边……一边…… chỉ dùng cho hai hành động diễn ra cùng lúc."
     },
     "chunks": [
      {
       "scene": "📖😄🌟",
       "full": "这个故事又生动又有意思",
       "vi": "Câu chuyện này vừa sinh động vừa thú vị",
       "parts": [
        {
         "t": "这个故事",
         "ico": "📖",
         "c": "s",
         "py": "zhè gè gùshi",
         "hv": "giá cá cố sự"
        },
        {
         "t": "又生动",
         "ico": "🌟",
         "c": "v",
         "py": "yòu shēngdòng",
         "hv": "hựu sinh động"
        },
        {
         "t": "又有意思",
         "ico": "😄",
         "c": "o",
         "py": "yòu yǒu yìsi",
         "hv": "hựu hữu ý tư"
        }
       ],
       "traceWord": "生动",
       "py": "Zhè gè gùshi yòu shēngdòng yòu yǒu yìsi",
       "traceKey": "shengdong",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🧑📚✍️",
       "full": "他又喜欢文学又喜欢写作",
       "vi": "Anh ấy vừa thích văn học vừa thích viết lách",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "又喜欢文学",
         "ico": "📚",
         "c": "v",
         "py": "yòu xǐhuan wénxué",
         "hv": "hựu hỉ hoan văn học"
        },
        {
         "t": "又喜欢写作",
         "ico": "✍️",
         "c": "o",
         "py": "yòu xǐhuan xiězuò",
         "hv": "hựu hỉ hoan tả tác"
        }
       ],
       "traceWord": "文学",
       "py": "Tā yòu xǐhuan wénxué yòu xǐhuan xiězuò",
       "traceKey": "wenxue",
       "traceInfo": [
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        },
        {
         "c": "学",
         "py": "xué",
         "hv": "học"
        }
       ]
      },
      {
       "scene": "👤✍️⚡",
       "full": "这位作家的创作又快又好",
       "vi": "Việc sáng tác của nhà văn này vừa nhanh vừa hay",
       "parts": [
        {
         "t": "这位作家的创作",
         "ico": "✍️",
         "c": "s",
         "py": "zhè wèi zuòjiā de chuàngzuò",
         "hv": "giá vị tác gia đích sáng tác"
        },
        {
         "t": "又快",
         "ico": "⚡",
         "c": "v",
         "py": "yòu kuài",
         "hv": "hựu khoái"
        },
        {
         "t": "又好",
         "ico": "👍",
         "c": "o",
         "py": "yòu hǎo",
         "hv": "hựu hảo"
        }
       ],
       "traceWord": "创作",
       "py": "Zhè wèi zuòjiā de chuàngzuò yòu kuài yòu hǎo",
       "traceKey": "chuangzuo",
       "traceInfo": [
        {
         "c": "创",
         "py": "chuàng",
         "hv": "sáng"
        },
        {
         "c": "作",
         "py": "zuò",
         "hv": "tác"
        }
       ]
      },
      {
       "scene": "👗🧑‍🎨💰",
       "full": "他设计的衣服又好看又便宜",
       "vi": "Quần áo anh ấy thiết kế vừa đẹp vừa rẻ",
       "parts": [
        {
         "t": "他设计的衣服",
         "ico": "👗",
         "c": "s",
         "py": "tā shèjì de yīfu",
         "hv": "tha thiết kế đích y phục"
        },
        {
         "t": "又好看",
         "ico": "✨",
         "c": "v",
         "py": "yòu hǎokàn",
         "hv": "hựu hảo khán"
        },
        {
         "t": "又便宜",
         "ico": "💰",
         "c": "o",
         "py": "yòu piányi",
         "hv": "hựu tiện nghi"
        }
       ],
       "traceWord": "设计",
       "py": "Tā shèjì de yīfu yòu hǎokàn yòu piányi",
       "traceKey": "sheji",
       "traceInfo": [
        {
         "c": "设",
         "py": "shè",
         "hv": "thiết"
        },
        {
         "c": "计",
         "py": "jì",
         "hv": "kế"
        }
       ]
      },
      {
       "scene": "📜🏘️😆",
       "full": "这个民间传说又短又好玩儿",
       "vi": "Truyền thuyết dân gian này vừa ngắn vừa vui",
       "parts": [
        {
         "t": "这个民间传说",
         "ico": "📜",
         "c": "s",
         "py": "zhè gè mínjiān chuánshuō",
         "hv": "giá cá dân gian truyền thuyết"
        },
        {
         "t": "又短",
         "ico": "📏",
         "c": "v",
         "py": "yòu duǎn",
         "hv": "hựu đoản"
        },
        {
         "t": "又好玩儿",
         "ico": "😆",
         "c": "o",
         "py": "yòu hǎowánr",
         "hv": "hựu hảo ngoạn nhi"
        }
       ],
       "traceWord": "传说",
       "py": "Zhè gè mínjiān chuánshuō yòu duǎn yòu hǎowánr",
       "traceKey": "chuanshuo",
       "traceInfo": [
        {
         "c": "传",
         "py": "chuán",
         "hv": "truyền"
        },
        {
         "c": "说",
         "py": "shuō",
         "hv": "thuyết"
        }
       ]
      },
      {
       "scene": "🎬🎥📺",
       "full": "他拍的影视作品又多又好",
       "vi": "Các tác phẩm điện ảnh truyền hình anh ấy quay vừa nhiều vừa hay",
       "parts": [
        {
         "t": "他拍的影视作品",
         "ico": "🎬",
         "c": "s",
         "py": "tā pāi de yǐngshì zuòpǐn",
         "hv": "tha phách đích ảnh thị tác phẩm"
        },
        {
         "t": "又多",
         "ico": "➕",
         "c": "v",
         "py": "yòu duō",
         "hv": "hựu đa"
        },
        {
         "t": "又好",
         "ico": "👍",
         "c": "o",
         "py": "yòu hǎo",
         "hv": "hựu hảo"
        }
       ],
       "traceWord": "拍",
       "py": "Tā pāi de yǐngshì zuòpǐn yòu duō yòu hǎo",
       "traceKey": "pai",
       "traceInfo": [
        {
         "c": "拍",
         "py": "pāi",
         "hv": "phách"
        }
       ]
      },
      {
       "scene": "📷🖼️🔍",
       "full": "他照的照片又大又清楚",
       "vi": "Ảnh anh ấy chụp vừa to vừa rõ",
       "parts": [
        {
         "t": "他照的照片",
         "ico": "📷",
         "c": "s",
         "py": "tā zhào de zhàopiàn",
         "hv": "tha chiếu đích chiếu phiến"
        },
        {
         "t": "又大",
         "ico": "🖼️",
         "c": "v",
         "py": "yòu dà",
         "hv": "hựu đại"
        },
        {
         "t": "又清楚",
         "ico": "🔍",
         "c": "o",
         "py": "yòu qīngchu",
         "hv": "hựu thanh sở"
        }
       ],
       "traceWord": "照",
       "py": "Tā zhào de zhàopiàn yòu dà yòu qīngchu",
       "traceKey": "zhao",
       "traceInfo": [
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        }
       ]
      },
      {
       "scene": "🎭🧑💖",
       "full": "那个演员的形象又年轻又可爱",
       "vi": "Hình tượng của diễn viên đó vừa trẻ trung vừa đáng yêu",
       "parts": [
        {
         "t": "那个演员的形象",
         "ico": "🎭",
         "c": "s",
         "py": "nà gè yǎnyuán de xíngxiàng",
         "hv": "na cá diễn viên đích hình tượng"
        },
        {
         "t": "又年轻",
         "ico": "🧑",
         "c": "v",
         "py": "yòu niánqīng",
         "hv": "hựu niên khinh"
        },
        {
         "t": "又可爱",
         "ico": "💖",
         "c": "o",
         "py": "yòu kě'ài",
         "hv": "hựu khả ái"
        }
       ],
       "traceWord": "形象",
       "py": "Nà gè yǎnyuán de xíngxiàng yòu niánqīng yòu kě'ài",
       "traceKey": "xingxiang",
       "traceInfo": [
        {
         "c": "形",
         "py": "xíng",
         "hv": "hình"
        },
        {
         "c": "象",
         "py": "xiàng",
         "hv": "tượng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你喜欢哪个导演？",
       "qvi": "Bạn thích đạo diễn nào?",
       "scene": "🧑🎬❓",
       "ans": "我喜欢那个又年轻又有名的导演",
       "opts": [
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "我喜欢那个又年轻又有名的导演",
         "ico": "🎬",
         "py": "Wǒ xǐhuan nà gè yòu niánqīng yòu yǒumíng de dǎoyǎn"
        },
        {
         "txt": "我下午去银行",
         "ico": "🏦",
         "py": "Wǒ xiàwǔ qù yínháng"
        }
       ],
       "qpy": "Nǐ xǐhuan nǎ gè dǎoyǎn?"
      },
      {
       "q": "你觉得这个作品怎么样？",
       "qvi": "Bạn thấy tác phẩm này thế nào?",
       "scene": "🖼️🧑❓",
       "ans": "我觉得它又完美又精彩",
       "opts": [
        {
         "txt": "我觉得今天很冷",
         "ico": "🥶",
         "py": "Wǒ juéde jīntiān hěn lěng"
        },
        {
         "txt": "我想去银行换钱",
         "ico": "💱",
         "py": "Wǒ xiǎng qù yínháng huàn qián"
        },
        {
         "txt": "我觉得它又完美又精彩",
         "ico": "🌟",
         "py": "Wǒ juéde tā yòu wánměi yòu jīngcǎi"
        }
       ],
       "qpy": "Nǐ juéde zhè gè zuòpǐn zěnmeyàng?"
      },
      {
       "q": "你们公司有什么特点？",
       "qvi": "Công ty của các bạn có đặc điểm gì?",
       "scene": "🏢💡❓",
       "ans": "我们公司又努力又爱创新",
       "opts": [
        {
         "txt": "我们公司又努力又爱创新",
         "ico": "💡",
         "py": "Wǒmen gōngsī yòu nǔlì yòu ài chuàngxīn"
        },
        {
         "txt": "我们公司在三楼",
         "ico": "🏢",
         "py": "Wǒmen gōngsī zài sān lóu"
        },
        {
         "txt": "我们明天不上班",
         "ico": "🛌",
         "py": "Wǒmen míngtiān bú shàngbān"
        }
       ],
       "qpy": "Nǐmen gōngsī yǒu shénme tèdiǎn?"
      },
      {
       "q": "他为什么受欢迎？",
       "qvi": "Vì sao anh ấy được yêu mến?",
       "scene": "🧑👏❓",
       "ans": "因为他又会创造新东西又很努力",
       "opts": [
        {
         "txt": "因为那个房子很大",
         "ico": "🏠",
         "py": "Yīnwèi nà gè fángzi hěn dà"
        },
        {
         "txt": "因为他又会创造新东西又很努力",
         "ico": "🛠️",
         "py": "Yīnwèi tā yòu huì chuàngzào xīn dōngxi yòu hěn nǔlì"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Tā wèi shénme shòu huānyíng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu một tác phẩm sáng tạo",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp giới thiệu một bộ phim hoặc cuốn sách bạn mới xem, dùng <i>\"这个故事又生动又有意思\"</i> để nhận xét.",
       "<b>Bước 2:</b> Gọi điện hoặc nói trong buổi họp ngắn về một sản phẩm thiết kế mới của công ty, dùng cấu trúc vừa ... vừa ..., ví dụ <i>\"他设计的衣服又好看又便宜\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu giới thiệu đạo diễn hoặc tác giả yêu thích của bạn bằng 又……又……, ví dụ <i>\"我喜欢那个又年轻又有名的导演\"</i>."
      ]
     }
    }
   ]
  },
  "3.14": {
   "lessons": [
    {
     "id": "3.14A",
     "name": "Bài 3.14A: Thi đấu, kỷ lục và người hâm mộ",
     "grammar": {
      "formulas": [
       "🧑 对手 + 1️⃣ 一分 + 🚫 也没 + 🏆 得到",
       "🧑 我 + 1️⃣ 一点儿 + 🚫 也不 + ❤️ 喜欢足球",
       "🏟️ 全场 + 1️⃣ 一个球迷 + 🚫 也没有"
      ],
      "tip": "Cấu trúc 一 + lượng từ + 也/都 + 不/没 + động từ nghĩa là \"không một ... nào\", nhấn mạnh phủ định hoàn toàn. Dùng 不 (bù, bất) cho thói quen/ý muốn, dùng 没 (méi, một) cho việc chưa xảy ra trong quá khứ. 也 (yě, dã) phải đứng trước 不/没.",
      "vn_tip": "Người Việt hay nói \"一个球迷没有也\" hoặc quên 也/都. Đúng là: 一个球迷也没有. Cụm 一 + lượng từ phải đứng trước 也/都, và sau đó bắt buộc có phủ định 不/没."
     },
     "chunks": [
      {
       "scene": "🏟️😶",
       "full": "全场一个球迷也没有",
       "vi": "Cả sân không có một cổ động viên nào",
       "parts": [
        {
         "t": "全场",
         "ico": "🏟️",
         "c": "s",
         "py": "quánchǎng",
         "hv": "toàn trường"
        },
        {
         "t": "一个球迷也",
         "ico": "🙋",
         "c": "v",
         "py": "yī gè qiúmí yě",
         "hv": "nhất cá cầu mê dã"
        },
        {
         "t": "没有",
         "ico": "🚫",
         "c": "o",
         "py": "méiyǒu",
         "hv": "một hữu"
        }
       ],
       "traceWord": "球迷",
       "py": "Quánchǎng yī gè qiúmí yě méiyǒu",
       "traceKey": "qiumi",
       "traceInfo": [
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        },
        {
         "c": "迷",
         "py": "mí",
         "hv": "mê"
        }
       ]
      },
      {
       "scene": "🆚⚽🚫",
       "full": "对手一分也没得到",
       "vi": "Đối thủ không ghi được một điểm nào",
       "parts": [
        {
         "t": "对手",
         "ico": "🆚",
         "c": "s",
         "py": "duìshǒu",
         "hv": "đối thủ"
        },
        {
         "t": "一分也",
         "ico": "1️⃣",
         "c": "v",
         "py": "yī fēn yě",
         "hv": "nhất phân dã"
        },
        {
         "t": "没得到",
         "ico": "🚫",
         "c": "o",
         "py": "méi dédào",
         "hv": "một đắc đáo"
        }
       ],
       "traceWord": "对手",
       "py": "Duìshǒu yī fēn yě méi dédào",
       "traceKey": "duishou",
       "traceInfo": [
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "👨‍🏫😴🚫",
       "full": "教练一天也没休息",
       "vi": "Huấn luyện viên không nghỉ một ngày nào",
       "parts": [
        {
         "t": "教练",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "jiàoliàn",
         "hv": "giáo luyện"
        },
        {
         "t": "一天也没",
         "ico": "📅",
         "c": "v",
         "py": "yī tiān yě méi",
         "hv": "nhất thiên dã một"
        },
        {
         "t": "休息",
         "ico": "😴",
         "c": "o",
         "py": "xiūxi",
         "hv": "hưu tức"
        }
       ],
       "traceWord": "教练",
       "py": "Jiàoliàn yī tiān yě méi xiūxi",
       "traceKey": "jiaolian",
       "traceInfo": [
        {
         "c": "教",
         "py": "jiào",
         "hv": "giáo"
        },
        {
         "c": "练",
         "py": "liàn",
         "hv": "luyện"
        }
       ]
      },
      {
       "scene": "🏅🏃🚫",
       "full": "比赛中他一次也没得分",
       "vi": "Trong trận đấu anh ấy không ghi được điểm nào",
       "parts": [
        {
         "t": "比赛中他",
         "ico": "🏅",
         "c": "s",
         "py": "bǐsài zhōng tā",
         "hv": "tỷ tái trung tha"
        },
        {
         "t": "一次也没",
         "ico": "1️⃣",
         "c": "v",
         "py": "yī cì yě méi",
         "hv": "nhất thứ dã một"
        },
        {
         "t": "得分",
         "ico": "🎯",
         "c": "o",
         "py": "défēn",
         "hv": "đắc phân"
        }
       ],
       "traceWord": "得分",
       "py": "Bǐsài zhōng tā yī cì yě méi défēn",
       "traceKey": "defen",
       "traceInfo": [
        {
         "c": "得",
         "py": "dé",
         "hv": "đắc"
        },
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        }
       ]
      },
      {
       "scene": "🧑⚽💔",
       "full": "我一点儿也不喜欢足球",
       "vi": "Tôi không thích bóng đá chút nào",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "一点儿也不",
         "ico": "🚫",
         "c": "v",
         "py": "yīdiǎnr yě bù",
         "hv": "nhất điểm nhi dã bất"
        },
        {
         "t": "喜欢足球",
         "ico": "⚽",
         "c": "o",
         "py": "xǐhuan zúqiú",
         "hv": "hỉ hoan túc cầu"
        }
       ],
       "traceWord": "足球",
       "py": "Wǒ yīdiǎnr yě bù xǐhuan zúqiú",
       "traceKey": "zuqiu",
       "traceInfo": [
        {
         "c": "足",
         "py": "zú",
         "hv": "túc"
        },
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        }
       ]
      },
      {
       "scene": "🧑🦘📏🚫",
       "full": "我跳远一次也没打破纪录",
       "vi": "Tôi nhảy xa lần nào cũng không phá được kỷ lục",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "跳远一次也没",
         "ico": "🦘",
         "c": "v",
         "py": "tiàoyuǎn yī cì yě méi",
         "hv": "khiêu viễn nhất thứ dã một"
        },
        {
         "t": "打破纪录",
         "ico": "📏",
         "c": "o",
         "py": "dǎpò jìlù",
         "hv": "đả phá kỷ lục"
        }
       ],
       "traceWord": "纪录",
       "py": "Wǒ tiàoyuǎn yī cì yě méi dǎpò jìlù",
       "traceKey": "jilu",
       "traceInfo": [
        {
         "c": "纪",
         "py": "jì",
         "hv": "kỷ"
        },
        {
         "c": "录",
         "py": "lù",
         "hv": "lục"
        }
       ]
      },
      {
       "scene": "🌍🏆🎫🚫",
       "full": "世界杯决赛一张票也没有了",
       "vi": "Chung kết World Cup không còn một vé nào nữa",
       "parts": [
        {
         "t": "世界杯决赛",
         "ico": "🏆",
         "c": "s",
         "py": "shìjièbēi juésài",
         "hv": "thế giới bôi quyết tái"
        },
        {
         "t": "一张票也",
         "ico": "🎫",
         "c": "v",
         "py": "yī zhāng piào yě",
         "hv": "nhất trương phiếu dã"
        },
        {
         "t": "没有了",
         "ico": "🚫",
         "c": "o",
         "py": "méiyǒu le",
         "hv": "một hữu liễu"
        }
       ],
       "traceWord": "决赛",
       "py": "Shìjièbēi juésài yī zhāng piào yě méiyǒu le",
       "traceKey": "juesai",
       "traceInfo": [
        {
         "c": "决",
         "py": "jué",
         "hv": "quyết"
        },
        {
         "c": "赛",
         "py": "sài",
         "hv": "tái"
        }
       ]
      },
      {
       "scene": "🧑‍🦱🏅🚫",
       "full": "这个选手一次比赛也没参加",
       "vi": "Vận động viên này chưa tham gia một trận đấu nào",
       "parts": [
        {
         "t": "这个选手",
         "ico": "🧑‍🦱",
         "c": "s",
         "py": "zhè gè xuǎnshǒu",
         "hv": "giá cá tuyển thủ"
        },
        {
         "t": "一次比赛也没",
         "ico": "🏅",
         "c": "v",
         "py": "yī cì bǐsài yě méi",
         "hv": "nhất thứ tỷ tái dã một"
        },
        {
         "t": "参加",
         "ico": "🙋",
         "c": "o",
         "py": "cānjiā",
         "hv": "tham gia"
        }
       ],
       "traceWord": "选手",
       "py": "Zhè gè xuǎnshǒu yī cì bǐsài yě méi cānjiā",
       "traceKey": "xuanshou",
       "traceInfo": [
        {
         "c": "选",
         "py": "xuǎn",
         "hv": "tuyển"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你跳高跳得怎么样？",
       "qvi": "Bạn nhảy cao thế nào?",
       "scene": "🧑🏃‍♂️⬆️",
       "ans": "我跳高跳得很好",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "🛫",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "我跳高跳得很好",
         "ico": "🏅",
         "py": "Wǒ tiàogāo tiào de hěn hǎo"
        },
        {
         "txt": "我是学生",
         "ico": "🎓",
         "py": "Wǒ shì xuéshēng"
        }
       ],
       "qpy": "Nǐ tiàogāo tiào de zěnmeyàng?"
      },
      {
       "q": "决赛的对手是谁？",
       "qvi": "Đối thủ ở trận chung kết là ai?",
       "scene": "🏆🆚❓",
       "ans": "决赛的对手是小李",
       "opts": [
        {
         "txt": "教练不在教室里",
         "ico": "🏫",
         "py": "Jiàoliàn bú zài jiàoshì lǐ"
        },
        {
         "txt": "我们明天上班",
         "ico": "💼",
         "py": "Wǒmen míngtiān shàngbān"
        },
        {
         "txt": "决赛的对手是小李",
         "ico": "🆚",
         "py": "Juésài de duìshǒu shì Xiǎolǐ"
        }
       ],
       "qpy": "Juésài de duìshǒu shì shéi?"
      },
      {
       "q": "你们的教练累不累？",
       "qvi": "Huấn luyện viên của các bạn có mệt không?",
       "scene": "👨‍🏫😅",
       "ans": "他一点儿也不累",
       "opts": [
        {
         "txt": "他一点儿也不累",
         "ico": "💪",
         "py": "Tā yīdiǎnr yě bú lèi"
        },
        {
         "txt": "他是中国人",
         "ico": "🇨🇳",
         "py": "Tā shì Zhōngguó rén"
        },
        {
         "txt": "今天下雨了",
         "ico": "🌧️",
         "py": "Jīntiān xià yǔ le"
        }
       ],
       "qpy": "Nǐmen de jiàoliàn lèi bú lèi?"
      },
      {
       "q": "昨天的比赛你看了吗？",
       "qvi": "Trận đấu hôm qua bạn có xem không?",
       "scene": "📺⚽❓",
       "ans": "我一场也没看",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "🛫",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "那个教练很高",
         "ico": "📏",
         "py": "Nà gè jiàoliàn hěn gāo"
        },
        {
         "txt": "我一场也没看",
         "ico": "🚫",
         "py": "Wǒ yī chǎng yě méi kàn"
        }
       ],
       "qpy": "Zuótiān de bǐsài nǐ kàn le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trò chuyện với đồng nghiệp về trận đấu",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi xem hôm qua họ có xem trận đấu không, ví dụ <i>\"昨天的比赛你看了吗？\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu phủ định mạnh về một trận đấu bạn biết, ví dụ <i>\"对手一分也没得到\"</i>, <i>\"教练一天也没休息\"</i>.",
       "<b>Bước 3:</b> Nói cho đối tác biết bạn không thích môn nào, dùng <i>\"我一点儿也不喜欢……\"</i>, rồi hỏi lại họ thích môn gì."
      ]
     }
    },
    {
     "id": "3.14B",
     "name": "Bài 3.14B: Thắng thua và so sánh",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚖️ 比 + 🧑 我 + 🏃 跑得 + ⚡ 快",
       "🧑 我 + 🚫 不比 + 🧑 他 + 💪 强大",
       "🏅 他的金牌 + ⚖️ 比我 + ➕ 多两块"
      ],
      "tip": "A 比 B + động từ + 得 + tính từ (他比我跑得快), hoặc A + động từ + 得 + 比 B + tính từ (他跑得比我快). Phủ định thông thường dùng A 没有 B + tính từ (A không bằng B); còn A 不比 B ... (bù bǐ, bất tỉ) nghĩa là A không hơn B (ngang hoặc kém), hay dùng để phản bác. Chênh lệch số lượng đặt cuối câu: 比我多两块, 比他早一天.",
      "vn_tip": "Người Việt hay nói \"他比我很快\" hoặc \"他比我更快很多\" theo thói quen. Đúng là 他比我快 hoặc 他比我快得多; sau 比 không dùng 很/非常. Số lượng chênh lệch đặt sau tính từ: 多两块, 少一块."
     },
     "chunks": [
      {
       "scene": "🏅🥇⚖️",
       "full": "他的金牌比我多两块",
       "vi": "Huy chương vàng của anh ấy nhiều hơn tôi hai chiếc",
       "parts": [
        {
         "t": "他的金牌",
         "ico": "🥇",
         "c": "s",
         "py": "tā de jīnpái",
         "hv": "tha đích kim bài"
        },
        {
         "t": "比我",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ wǒ",
         "hv": "tỷ ngã"
        },
        {
         "t": "多两块",
         "ico": "➕",
         "c": "o",
         "py": "duō liǎng kuài",
         "hv": "đa lưỡng khối"
        }
       ],
       "traceWord": "金牌",
       "py": "Tā de jīnpái bǐ wǒ duō liǎng kuài",
       "traceKey": "jinpai",
       "traceInfo": [
        {
         "c": "金",
         "py": "jīn",
         "hv": "kim"
        },
        {
         "c": "牌",
         "py": "pái",
         "hv": "bài"
        }
       ]
      },
      {
       "scene": "🥇🥈⚖️",
       "full": "这块金牌比那块银牌贵得多",
       "vi": "Tấm huy chương vàng này đắt hơn tấm huy chương bạc kia nhiều",
       "parts": [
        {
         "t": "这块金牌",
         "ico": "🥇",
         "c": "s",
         "py": "zhè kuài jīnpái",
         "hv": "giá khối kim bài"
        },
        {
         "t": "比那块银牌",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ nà kuài yínpái",
         "hv": "tỷ na khối ngân bài"
        },
        {
         "t": "贵得多",
         "ico": "💰",
         "c": "o",
         "py": "guì de duō",
         "hv": "quý đắc đa"
        }
       ],
       "traceWord": "银牌",
       "py": "Zhè kuài jīnpái bǐ nà kuài yínpái guì de duō",
       "traceKey": "yinpai",
       "traceInfo": [
        {
         "c": "银",
         "py": "yín",
         "hv": "ngân"
        },
        {
         "c": "牌",
         "py": "pái",
         "hv": "bài"
        }
       ]
      },
      {
       "scene": "👥📈3️⃣",
       "full": "他们队比我们队多三分",
       "vi": "Đội họ nhiều hơn đội chúng tôi ba điểm",
       "parts": [
        {
         "t": "他们队",
         "ico": "👥",
         "c": "s",
         "py": "tāmen duì",
         "hv": "tha môn đội"
        },
        {
         "t": "比我们队",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ wǒmen duì",
         "hv": "tỷ ngã môn đội"
        },
        {
         "t": "多三分",
         "ico": "📈",
         "c": "o",
         "py": "duō sān fēn",
         "hv": "đa tam phân"
        }
       ],
       "traceWord": "队",
       "py": "Tāmen duì bǐ wǒmen duì duō sān fēn",
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
       "scene": "🧑🆚👥💪",
       "full": "这次我们不比他们落后",
       "vi": "Lần này chúng tôi không thua kém họ",
       "parts": [
        {
         "t": "这次我们",
         "ico": "🧑",
         "c": "s",
         "py": "zhè cì wǒmen",
         "hv": "giá thứ ngã môn"
        },
        {
         "t": "不比",
         "ico": "🚫",
         "c": "v",
         "py": "bù bǐ",
         "hv": "bất tỷ"
        },
        {
         "t": "他们落后",
         "ico": "📉",
         "c": "o",
         "py": "tāmen luòhòu",
         "hv": "tha môn lạc hậu"
        }
       ],
       "traceWord": "落后",
       "py": "Zhè cì wǒmen bù bǐ tāmen luòhòu",
       "traceKey": "luohou",
       "traceInfo": [
        {
         "c": "落",
         "py": "luò",
         "hv": "lạc"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🏃‍♂️💨😮‍💨",
       "full": "我想追他可是他跑得比我快",
       "vi": "Tôi muốn đuổi theo anh ấy nhưng anh ấy chạy nhanh hơn tôi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想追他",
         "ico": "🏃",
         "c": "v",
         "py": "xiǎng zhuī tā",
         "hv": "tưởng truy tha"
        },
        {
         "t": "可是他跑得比我快",
         "ico": "💨",
         "c": "o",
         "py": "kěshì tā pǎo de bǐ wǒ kuài",
         "hv": "khả thị tha bào đắc tỷ ngã khoái"
        }
       ],
       "traceWord": "追",
       "py": "Wǒ xiǎng zhuī tā kěshì tā pǎo de bǐ wǒ kuài",
       "traceKey": "zhui",
       "traceInfo": [
        {
         "c": "追",
         "py": "zhuī",
         "hv": "truy"
        }
       ]
      },
      {
       "scene": "🏆🧑✌️",
       "full": "他赢的比赛比我多三场",
       "vi": "Số trận anh ấy thắng nhiều hơn tôi ba trận",
       "parts": [
        {
         "t": "他赢的比赛",
         "ico": "🏆",
         "c": "s",
         "py": "tā yíng de bǐsài",
         "hv": "tha doanh đích tỷ tái"
        },
        {
         "t": "比我",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ wǒ",
         "hv": "tỷ ngã"
        },
        {
         "t": "多三场",
         "ico": "3️⃣",
         "c": "o",
         "py": "duō sān chǎng",
         "hv": "đa tam trường"
        }
       ],
       "traceWord": "赢",
       "py": "Tā yíng de bǐsài bǐ wǒ duō sān chǎng",
       "traceKey": "ying",
       "traceInfo": [
        {
         "c": "赢",
         "py": "yíng",
         "hv": "doanh"
        }
       ]
      },
      {
       "scene": "🧑😞📉",
       "full": "这次他输得比我多两分",
       "vi": "Lần này anh ấy thua nhiều hơn tôi hai điểm",
       "parts": [
        {
         "t": "这次他",
         "ico": "🧑",
         "c": "s",
         "py": "zhè cì tā",
         "hv": "giá thứ tha"
        },
        {
         "t": "输得",
         "ico": "😞",
         "c": "v",
         "py": "shū de",
         "hv": "thâu đắc"
        },
        {
         "t": "比我多两分",
         "ico": "➕",
         "c": "o",
         "py": "bǐ wǒ duō liǎng fēn",
         "hv": "tỷ ngã đa lưỡng phân"
        }
       ],
       "traceWord": "输",
       "py": "Zhè cì tā shū de bǐ wǒ duō liǎng fēn",
       "traceKey": "shu",
       "traceInfo": [
        {
         "c": "输",
         "py": "shū",
         "hv": "thâu"
        }
       ]
      },
      {
       "scene": "💪🆚🧑",
       "full": "我的实力不比他强大",
       "vi": "Thực lực của tôi không mạnh hơn anh ấy",
       "parts": [
        {
         "t": "我的实力",
         "ico": "💪",
         "c": "s",
         "py": "wǒ de shílì",
         "hv": "ngã đích thực lực"
        },
        {
         "t": "不比",
         "ico": "🚫",
         "c": "v",
         "py": "bù bǐ",
         "hv": "bất tỷ"
        },
        {
         "t": "他强大",
         "ico": "🦁",
         "c": "o",
         "py": "tā qiángdà",
         "hv": "tha cường đại"
        }
       ],
       "traceWord": "实力",
       "py": "Wǒ de shílì bù bǐ tā qiángdà",
       "traceKey": "shili",
       "traceInfo": [
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你和他相比，谁跑得快？",
       "qvi": "So với anh ấy, ai chạy nhanh hơn?",
       "scene": "🧑🆚🧑🏃",
       "ans": "他比我跑得快",
       "opts": [
        {
         "txt": "他们三场都胜了",
         "ico": "🏆",
         "py": "Tāmen sān chǎng dōu shèng le"
        },
        {
         "txt": "这块金比那块银贵",
         "ico": "🥇",
         "py": "Zhè kuài jīn bǐ nà kuài yín guì"
        },
        {
         "txt": "他比我跑得快",
         "ico": "🏃",
         "py": "Tā bǐ wǒ pǎo de kuài"
        }
       ],
       "qpy": "Nǐ hé tā xiāngbǐ shéi pǎo de kuài?"
      },
      {
       "q": "你们想争金牌还是银牌？",
       "qvi": "Các bạn muốn tranh huy chương vàng hay bạc?",
       "scene": "🥇🥈❓",
       "ans": "我们想争金牌",
       "opts": [
        {
         "txt": "我们想争金牌",
         "ico": "🥇",
         "py": "Wǒmen xiǎng zhēng jīnpái"
        },
        {
         "txt": "我们都想回家",
         "ico": "🏠",
         "py": "Wǒmen dōu xiǎng huí jiā"
        },
        {
         "txt": "老师在教室里",
         "ico": "🏫",
         "py": "Lǎoshī zài jiàoshì lǐ"
        }
       ],
       "qpy": "Nǐmen xiǎng zhēng jīnpái háishi yínpái?"
      },
      {
       "q": "这次比赛你们排第几？",
       "qvi": "Lần thi đấu này các bạn xếp thứ mấy?",
       "scene": "🏅🔢❓",
       "ans": "我们排第二",
       "opts": [
        {
         "txt": "他们队领先我们三分",
         "ico": "📈",
         "py": "Tāmen duì lǐngxiān wǒmen sān fēn"
        },
        {
         "txt": "我们排第二",
         "ico": "🥈",
         "py": "Wǒmen pái dì èr"
        },
        {
         "txt": "我不喜欢茶",
         "ico": "🍵",
         "py": "Wǒ bù xǐhuan chá"
        }
       ],
       "qpy": "Zhè cì bǐsài nǐmen pái dì jǐ?"
      },
      {
       "q": "这两个球队的实力一样吗？",
       "qvi": "Thực lực của hai đội này giống nhau không?",
       "scene": "⚽👥🆚👥",
       "ans": "他们的实力很相似",
       "opts": [
        {
         "txt": "他们取得了胜利",
         "ico": "🎉",
         "py": "Tāmen qǔdé le shènglì"
        },
        {
         "txt": "他们明天去北京",
         "ico": "🛫",
         "py": "Tāmen míngtiān qù Běijīng"
        },
        {
         "txt": "他们的实力很相似",
         "ico": "⚖️",
         "py": "Tāmen de shílì hěn xiāngsì"
        }
       ],
       "qpy": "Zhè liǎng gè qiúduì de shílì yīyàng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bình luận kết quả trận đấu với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Mở bảng kết quả một giải đấu bạn quan tâm và nói thành tiếng 3 câu so sánh số huy chương hoặc điểm, ví dụ <i>\"他的金牌比我多两块\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp hỏi ai chạy nhanh hơn trong nhóm, dùng <i>\"谁跑得最快？\"</i> và trả lời bằng <i>\"他比我跑得快\"</i>.",
       "<b>Bước 3:</b> Nói với một người bạn rằng lần này đội mình không hề thua kém: <i>\"这次我们不比他们落后\"</i>, rồi hỏi ý kiến của họ."
      ]
     }
    },
    {
     "id": "3.14C",
     "name": "Bài 3.14C: Rèn luyện, vận động và thời gian rảnh",
     "grammar": {
      "formulas": [
       "🧑 他 + 🏋️ 越训练 + 💪 越有力量",
       "🧑 她 + 💃 越跳舞 + 😊 越高兴",
       "🧑 我们 + 🚶 越散步 + 😄 越开心"
      ],
      "tip": "Cấu trúc 越……越…… (yuè, việt) nghĩa là \"càng ... càng ...\": vế sau thay đổi theo vế trước. Hai vế có thể cùng chủ ngữ (他越训练越有力量) hoặc khác chủ ngữ (生活越难他越坚强). Chữ 越 luôn đặt ngay trước động từ hoặc tính từ.",
      "vn_tip": "Người Việt hay nói \"他越来越训练越有力量\" hoặc thêm 很 sau 越. Đúng là 越训练越有力量, không thêm 来 hay 很. Không nhầm với 越来越 + tính từ (越来越好), cấu trúc này chỉ có một 越."
     },
     "chunks": [
      {
       "scene": "🏋️💪📈",
       "full": "他越训练越有力量",
       "vi": "Anh ấy càng tập luyện càng có sức mạnh",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "越训练",
         "ico": "🏋️",
         "c": "v",
         "py": "yuè xùnliàn",
         "hv": "việt huấn luyện"
        },
        {
         "t": "越有力量",
         "ico": "💪",
         "c": "o",
         "py": "yuè yǒu lìliàng",
         "hv": "việt hữu lực lượng"
        }
       ],
       "traceWord": "训练",
       "py": "Tā yuè xùnliàn yuè yǒu lìliàng",
       "traceKey": "xunlian",
       "traceInfo": [
        {
         "c": "训",
         "py": "xùn",
         "hv": "huấn"
        },
        {
         "c": "练",
         "py": "liàn",
         "hv": "luyện"
        }
       ]
      },
      {
       "scene": "🏊💦😎",
       "full": "他越游泳越有信心",
       "vi": "Anh ấy càng bơi càng có tự tin",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "越游泳",
         "ico": "🏊",
         "c": "v",
         "py": "yuè yóuyǒng",
         "hv": "việt du vịnh"
        },
        {
         "t": "越有信心",
         "ico": "😎",
         "c": "o",
         "py": "yuè yǒu xìnxīn",
         "hv": "việt hữu tín tâm"
        }
       ],
       "traceWord": "游泳",
       "py": "Tā yuè yóuyǒng yuè yǒu xìnxīn",
       "traceKey": "youyong",
       "traceInfo": [
        {
         "c": "游",
         "py": "yóu",
         "hv": "du"
        },
        {
         "c": "泳",
         "py": "yǒng",
         "hv": "vịnh"
        }
       ]
      },
      {
       "scene": "🚶‍♂️🌳😄",
       "full": "我们越散步越开心",
       "vi": "Chúng tôi càng đi dạo càng vui",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "越散步",
         "ico": "🚶",
         "c": "v",
         "py": "yuè sànbù",
         "hv": "việt tản bộ"
        },
        {
         "t": "越开心",
         "ico": "😄",
         "c": "o",
         "py": "yuè kāixīn",
         "hv": "việt khai tâm"
        }
       ],
       "traceWord": "散步",
       "py": "Wǒmen yuè sànbù yuè kāixīn",
       "traceKey": "sanbu",
       "traceInfo": [
        {
         "c": "散",
         "py": "sàn",
         "hv": "tản"
        },
        {
         "c": "步",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      },
      {
       "scene": "💃🎶😊",
       "full": "她越跳舞越高兴",
       "vi": "Cô ấy càng nhảy múa càng vui",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "越跳舞",
         "ico": "💃",
         "c": "v",
         "py": "yuè tiàowǔ",
         "hv": "việt khiêu vũ"
        },
        {
         "t": "越高兴",
         "ico": "😊",
         "c": "o",
         "py": "yuè gāoxìng",
         "hv": "việt cao hứng"
        }
       ],
       "traceWord": "跳舞",
       "py": "Tā yuè tiàowǔ yuè gāoxìng",
       "traceKey": "tiaowu",
       "traceInfo": [
        {
         "c": "跳",
         "py": "tiào",
         "hv": "khiêu"
        },
        {
         "c": "舞",
         "py": "wǔ",
         "hv": "vũ"
        }
       ]
      },
      {
       "scene": "🧑🏃‍♂️💨",
       "full": "他一直坚持跑步越跑越快",
       "vi": "Anh ấy luôn kiên trì chạy bộ, càng chạy càng nhanh",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一直坚持跑步",
         "ico": "🏃",
         "c": "v",
         "py": "yīzhí jiānchí pǎobù",
         "hv": "nhất trực kiên trì bào bộ"
        },
        {
         "t": "越跑越快",
         "ico": "💨",
         "c": "o",
         "py": "yuè pǎo yuè kuài",
         "hv": "việt bào việt khoái"
        }
       ],
       "traceWord": "坚持",
       "py": "Tā yīzhí jiānchí pǎobù yuè pǎo yuè kuài",
       "traceKey": "jianchi",
       "traceInfo": [
        {
         "c": "坚",
         "py": "jiān",
         "hv": "kiên"
        },
        {
         "c": "持",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🌍😤💪",
       "full": "生活越难他越坚强",
       "vi": "Cuộc sống càng khó anh ấy càng kiên cường",
       "parts": [
        {
         "t": "生活",
         "ico": "🌍",
         "c": "s",
         "py": "shēnghuó",
         "hv": "sinh hoạt"
        },
        {
         "t": "越难他",
         "ico": "😤",
         "c": "v",
         "py": "yuè nán tā",
         "hv": "việt nan tha"
        },
        {
         "t": "越坚强",
         "ico": "💪",
         "c": "o",
         "py": "yuè jiānqiáng",
         "hv": "việt kiên cường"
        }
       ],
       "traceWord": "坚强",
       "py": "Shēnghuó yuè nán tā yuè jiānqiáng",
       "traceKey": "jianqiang",
       "traceInfo": [
        {
         "c": "坚",
         "py": "jiān",
         "hv": "kiên"
        },
        {
         "c": "强",
         "py": "qiáng",
         "hv": "cường"
        }
       ]
      },
      {
       "scene": "🎮⏳😵",
       "full": "他越玩儿游戏越没工夫运动",
       "vi": "Anh ấy càng chơi game càng không có thời gian vận động",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "越玩儿游戏",
         "ico": "🎮",
         "c": "v",
         "py": "yuè wánr yóuxì",
         "hv": "việt ngoạn nhi du hí"
        },
        {
         "t": "越没工夫运动",
         "ico": "⏳",
         "c": "o",
         "py": "yuè méi gōngfu yùndòng",
         "hv": "việt một công phu vận động"
        }
       ],
       "traceWord": "工夫",
       "py": "Tā yuè wánr yóuxì yuè méi gōngfu yùndòng",
       "traceKey": "gongfu",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "夫",
         "py": "fu",
         "hv": "phu"
        }
       ]
      },
      {
       "scene": "🥋🧑‍🏫🥇",
       "full": "他越练武术越有功夫",
       "vi": "Anh ấy càng luyện võ thuật càng có công phu",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "越练武术",
         "ico": "🥋",
         "c": "v",
         "py": "yuè liàn wǔshù",
         "hv": "việt luyện vũ thuật"
        },
        {
         "t": "越有功夫",
         "ico": "🥇",
         "c": "o",
         "py": "yuè yǒu gōngfu",
         "hv": "việt hữu công phu"
        }
       ],
       "traceWord": "武术",
       "py": "Tā yuè liàn wǔshù yuè yǒu gōngfu",
       "traceKey": "wushu",
       "traceInfo": [
        {
         "c": "武",
         "py": "wǔ",
         "hv": "vũ"
        },
        {
         "c": "术",
         "py": "shù",
         "hv": "thuật"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你有空儿的时候做什么？",
       "qvi": "Lúc rảnh bạn làm gì?",
       "scene": "🧑⏰🚣",
       "ans": "我有空儿就去划船",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "🛫",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "我是老师",
         "ico": "👨‍🏫",
         "py": "Wǒ shì lǎoshī"
        },
        {
         "txt": "我有空儿就去划船",
         "ico": "🚣",
         "py": "Wǒ yǒukòngr jiù qù huáchuán"
        }
       ],
       "qpy": "Nǐ yǒukòngr de shíhou zuò shénme?"
      },
      {
       "q": "武术比赛里能用武器吗？",
       "qvi": "Trong thi đấu võ thuật có được dùng vũ khí không?",
       "scene": "🥋🏅🗡️❓",
       "ans": "武术比赛里不能用武器",
       "opts": [
        {
         "txt": "武术比赛里不能用武器",
         "ico": "🚫",
         "py": "Wǔshù bǐsài lǐ bù néng yòng wǔqì"
        },
        {
         "txt": "武术比赛里要用手机",
         "ico": "📱",
         "py": "Wǔshù bǐsài lǐ yào yòng shǒujī"
        },
        {
         "txt": "他们都是我的同学",
         "ico": "🤝",
         "py": "Tāmen dōu shì wǒ de tóngxué"
        }
       ],
       "qpy": "Wǔshù bǐsài lǐ néng yòng wǔqì ma?"
      },
      {
       "q": "他为什么越跳越高？",
       "qvi": "Sao anh ấy càng nhảy càng cao?",
       "scene": "🧑⬆️❓",
       "ans": "因为他的腿很有力",
       "opts": [
        {
         "txt": "因为今天下雨",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ"
        },
        {
         "txt": "因为他的腿很有力",
         "ico": "🦵",
         "py": "Yīnwèi tā de tuǐ hěn yǒu lì"
        },
        {
         "txt": "因为我明天上班",
         "ico": "💼",
         "py": "Yīnwèi wǒ míngtiān shàngbān"
        }
       ],
       "qpy": "Tā wèi shénme yuè tiào yuè gāo?"
      },
      {
       "q": "你现在有空儿吗？",
       "qvi": "Bây giờ bạn có rảnh không?",
       "scene": "🧑⏰❓",
       "ans": "我现在没空儿",
       "opts": [
        {
         "txt": "我很喜欢红色",
         "ico": "🔴",
         "py": "Wǒ hěn xǐhuan hóngsè"
        },
        {
         "txt": "我现在没空儿",
         "ico": "⏳",
         "py": "Wǒ xiànzài méi kòngr"
        },
        {
         "txt": "他在学校学习",
         "ico": "🏫",
         "py": "Tā zài xuéxiào xuéxí"
        }
       ],
       "qpy": "Nǐ xiànzài yǒukòngr ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Lên kế hoạch rèn luyện cùng đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin rủ đồng nghiệp đi tập sau giờ làm, hỏi <i>\"你现在有空儿吗？\"</i> và thống nhất giờ gặp.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu về thói quen của bạn, mỗi câu dùng 越……越……, ví dụ <i>\"我越散步越开心\"</i>.",
       "<b>Bước 3:</b> Hỏi đối tác họ thích môn nào lúc rảnh (bơi, chạy bộ, nhảy), rồi đáp lại bằng <i>\"我有空儿就去……\"</i>."
      ]
     }
    }
   ]
  },
  "3.15": {
   "lessons": [
    {
     "id": "3.15A",
     "name": "Bài 3.15A: Thời tiết và khí hậu (因为……所以……)",
     "grammar": {
      "formulas": [
       "🌧️ 因为 + 天气不好 + ⚡ 所以 + 🏠 我在家休息",
       "🌡️ 因为 + 气候变化 + ⚡ 所以 + ☀️ 夏天越来越热"
      ],
      "tip": "Dùng 因为……，所以…… (yīnwèi... suǒyǐ..., nhân vì... sở dĩ...) để nói nguyên nhân rồi đến kết quả. Văn viết còn có 由于……，因此……. Trong tiếng Trung, 因为 và 所以 thường dùng thành cặp, giống cặp vì… nên… trong tiếng Việt; cũng có thể chỉ dùng một trong hai.",
      "vn_tip": "Người Việt hay bỏ 所以 hoặc nói ngược thứ tự (kết quả trước, nguyên nhân sau) như tiếng Việt. Trong tiếng Trung nên đặt 因为 + nguyên nhân trước, 所以 + kết quả sau: 因为下雨，所以我不去."
     },
     "chunks": [
      {
       "scene": "☀️🌳🧑",
       "full": "因为阳光很暖和所以我们去公园",
       "vi": "Vì nắng ấm nên chúng tôi đi công viên",
       "parts": [
        {
         "t": "因为阳光很暖和",
         "ico": "☀️",
         "c": "s",
         "py": "yīnwèi yángguāng hěn nuǎnhuo",
         "hv": "nhân vị dương quang ngận noãn hòa"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "我们去公园",
         "ico": "🌳",
         "c": "o",
         "py": "wǒmen qù gōngyuán",
         "hv": "ngã môn khứ công viên"
        }
       ],
       "traceWord": "阳光",
       "py": "Yīnwèi yángguāng hěn nuǎnhuo suǒyǐ wǒmen qù gōngyuán",
       "traceKey": "yangguang",
       "traceInfo": [
        {
         "c": "阳",
         "py": "yáng",
         "hv": "dương"
        },
        {
         "c": "光",
         "py": "guāng",
         "hv": "quang"
        }
       ]
      },
      {
       "scene": "🌤️🏖️",
       "full": "因为天空很蓝所以大家去海边",
       "vi": "Vì bầu trời rất xanh nên mọi người đi ra biển",
       "parts": [
        {
         "t": "因为天空很蓝",
         "ico": "🌤️",
         "c": "s",
         "py": "yīnwèi tiānkōng hěn lán",
         "hv": "nhân vị thiên không ngận lam"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "大家去海边",
         "ico": "🏖️",
         "c": "o",
         "py": "dàjiā qù hǎi biān",
         "hv": "đại gia khứ hải biên"
        }
       ],
       "traceWord": "天空",
       "py": "Yīnwèi tiānkōng hěn lán suǒyǐ dàjiā qù hǎi biān",
       "traceKey": "tiankong",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "c": "空",
         "py": "kōng",
         "hv": "không"
        }
       ]
      },
      {
       "scene": "📺🌧️🏠",
       "full": "因为天气预报说下雨所以他不去",
       "vi": "Vì dự báo thời tiết nói sẽ mưa nên anh ấy không đi",
       "parts": [
        {
         "t": "因为天气预报说下雨",
         "ico": "🌧️",
         "c": "s",
         "py": "yīnwèi tiānqì yùbào shuō xià yǔ",
         "hv": "nhân vị thiên khí dự báo thuyết hạ vũ"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "他不去",
         "ico": "🙅",
         "c": "o",
         "py": "tā bú qù",
         "hv": "tha bất khứ"
        }
       ],
       "traceWord": "预报",
       "py": "Yīnwèi tiānqì yùbào shuō xià yǔ suǒyǐ tā bú qù",
       "traceKey": "yubao",
       "traceInfo": [
        {
         "c": "预",
         "py": "yù",
         "hv": "dự"
        },
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        }
       ]
      },
      {
       "scene": "🌍🌡️🔥",
       "full": "因为气候变化所以夏天越来越热",
       "vi": "Vì khí hậu thay đổi nên mùa hè ngày càng nóng",
       "parts": [
        {
         "t": "因为气候变化",
         "ico": "🌍",
         "c": "s",
         "py": "yīnwèi qìhòu biànhuà",
         "hv": "nhân vị khí hậu biến hóa"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "夏天越来越热",
         "ico": "🥵",
         "c": "o",
         "py": "xiàtiān yuè lái yuè rè",
         "hv": "hạ thiên việt lai việt nhiệt"
        }
       ],
       "traceWord": "气候",
       "py": "Yīnwèi qìhòu biànhuà suǒyǐ xiàtiān yuè lái yuè rè",
       "traceKey": "qihou",
       "traceInfo": [
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        },
        {
         "c": "候",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🏖️🔥🌊",
       "full": "因为沙子太热所以我们去水里",
       "vi": "Vì cát quá nóng nên chúng tôi xuống nước",
       "parts": [
        {
         "t": "因为沙子太热",
         "ico": "🏖️",
         "c": "s",
         "py": "yīnwèi shāzi tài rè",
         "hv": "nhân vị sa tử thái nhiệt"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "我们去水里",
         "ico": "🌊",
         "c": "o",
         "py": "wǒmen qù shuǐ lǐ",
         "hv": "ngã môn khứ thủy lý"
        }
       ],
       "traceWord": "沙子",
       "py": "Yīnwèi shāzi tài rè suǒyǐ wǒmen qù shuǐ lǐ",
       "traceKey": "shazi",
       "traceInfo": [
        {
         "c": "沙",
         "py": "shā",
         "hv": "sa"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🌡️⬆️🏖️",
       "full": "因为气温上升所以海边的人很多",
       "vi": "Vì nhiệt độ tăng nên ở bờ biển rất đông người",
       "parts": [
        {
         "t": "因为气温上升",
         "ico": "🌡️",
         "c": "s",
         "py": "yīnwèi qìwēn shàngshēng",
         "hv": "nhân vị khí ôn thượng thăng"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "海边的人很多",
         "ico": "🏖️",
         "c": "o",
         "py": "hǎi biān de rén hěn duō",
         "hv": "hải biên đích nhân ngận đa"
        }
       ],
       "traceWord": "上升",
       "py": "Yīnwèi qìwēn shàngshēng suǒyǐ hǎi biān de rén hěn duō",
       "traceKey": "shangsheng",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "升",
         "py": "shēng",
         "hv": "thăng"
        }
       ]
      },
      {
       "scene": "🏠🔥😊",
       "full": "因为房间里有火所以很暖和",
       "vi": "Vì trong phòng có lửa nên rất ấm",
       "parts": [
        {
         "t": "因为房间里有火",
         "ico": "🔥",
         "c": "s",
         "py": "yīnwèi fángjiān lǐ yǒu huǒ",
         "hv": "nhân vị phòng gian lý hữu hỏa"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "很暖和",
         "ico": "😊",
         "c": "o",
         "py": "hěn nuǎnhuo",
         "hv": "ngận noãn hòa"
        }
       ],
       "traceWord": "火",
       "py": "Yīnwèi fángjiān lǐ yǒu huǒ suǒyǐ hěn nuǎnhuo",
       "traceKey": "huo",
       "traceInfo": [
        {
         "c": "火",
         "py": "huǒ",
         "hv": "hỏa"
        }
       ]
      },
      {
       "scene": "🌪️🌿🙂",
       "full": "因为这是自然现象所以不用怕",
       "vi": "Vì đây là hiện tượng tự nhiên nên không cần sợ",
       "parts": [
        {
         "t": "因为这是自然现象",
         "ico": "🌪️",
         "c": "s",
         "py": "yīnwèi zhè shì zìrán xiànxiàng",
         "hv": "nhân vị giá thị tự nhiên hiện tượng"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sở dĩ"
        },
        {
         "t": "不用怕",
         "ico": "🙂",
         "c": "o",
         "py": "bùyòng pà",
         "hv": "bất dụng phạ"
        }
       ],
       "traceWord": "现象",
       "py": "Yīnwèi zhè shì zìrán xiànxiàng suǒyǐ bùyòng pà",
       "traceKey": "xianxiang",
       "traceInfo": [
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        },
        {
         "c": "象",
         "py": "xiàng",
         "hv": "tượng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得以后的生活会怎么样？",
       "qvi": "Bạn thấy cuộc sống sau này sẽ ra sao?",
       "scene": "🧑🌅",
       "ans": "我觉得生活会越来越光明",
       "opts": [
        {
         "txt": "房间里的光很亮",
         "ico": "💡",
         "py": "Fángjiān lǐ de guāng hěn liàng"
        },
        {
         "txt": "我觉得生活会越来越光明",
         "ico": "🌅",
         "py": "Wǒ juéde shēnghuó huì yuè lái yuè guāngmíng"
        },
        {
         "txt": "我明天要去买衣服",
         "ico": "👕",
         "py": "Wǒ míngtiān yào qù mǎi yīfu"
        }
       ],
       "qpy": "Nǐ juéde yǐhòu de shēnghuó huì zěnmeyàng?"
      },
      {
       "q": "你为什么不坐在石头上？",
       "qvi": "Sao bạn không ngồi trên đá?",
       "scene": "🪨🥶",
       "ans": "因为石头太冷",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为我想喝咖啡",
         "ico": "☕",
         "py": "Yīnwèi wǒ xiǎng hē kāfēi"
        },
        {
         "txt": "因为石头太冷",
         "ico": "🥶",
         "py": "Yīnwèi shítou tài lěng"
        }
       ],
       "qpy": "Nǐ wèi shénme bú zuò zài shítou shàng?"
      },
      {
       "q": "这条河深不深？",
       "qvi": "Con sông này sâu không?",
       "scene": "🏞️🏊",
       "ans": "很深所以不能游泳",
       "opts": [
        {
         "txt": "很深所以不能游泳",
         "ico": "🏊",
         "py": "Hěn shēn suǒyǐ bù néng yóuyǒng"
        },
        {
         "txt": "我们去北京开会",
         "ico": "💼",
         "py": "Wǒmen qù Běijīng kāihuì"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Zhè tiáo hé shēn bù shēn?"
      },
      {
       "q": "为什么这里的花长得好？",
       "qvi": "Vì sao hoa ở đây lớn tốt?",
       "scene": "🌸🌱",
       "ans": "因为这里的土很好",
       "opts": [
        {
         "txt": "因为这里有很多车",
         "ico": "🚗",
         "py": "Yīnwèi zhèlǐ yǒu hěn duō chē"
        },
        {
         "txt": "因为我今天很忙",
         "ico": "😓",
         "py": "Yīnwèi wǒ jīntiān hěn máng"
        },
        {
         "txt": "因为这里的土很好",
         "ico": "🌱",
         "py": "Yīnwèi zhèlǐ de tǔ hěn hǎo"
        }
       ],
       "qpy": "Wèi shénme zhèlǐ de huā zhǎng de hǎo?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đồng nghiệp về thời tiết chuyến công tác",
      "steps": [
       "<b>Bước 1:</b> Mở dự báo thời tiết của thành phố bạn sắp đi công tác, rồi nhắn cho đồng nghiệp: <i>\"因为天气预报说下雨，所以我们要早点儿出发。\"</i>",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin hỏi đồng nghiệp nên mặc gì, dùng mẫu <i>\"因为气温上升，所以我们穿短裤。\"</i> để nói lý do bằng giọng nói của chính bạn.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về thời tiết hôm nay theo mẫu nguyên nhân – kết quả, ví dụ <i>\"因为阳光很暖和，所以我们去公园。\"</i>"
      ]
     }
    },
    {
     "id": "3.15B",
     "name": "Bài 3.15B: Môi trường và tiết kiệm (为了……)",
     "grammar": {
      "formulas": [
       "🎯 为了 + 🌍 保护环境 + 🚇 我们坐地铁",
       "🎯 为了 + 💧 节约用水 + 🚿 大家洗澡要快"
      ],
      "tip": "Dùng 为了…… (wèile, vị liễu) ở đầu câu để nêu mục đích, vế sau nói hành động để đạt mục đích đó: 为了 + mục đích，+ hành động. Phủ định mục đích đặt 不 sau 为了: 为了不浪费时间.",
      "vn_tip": "Người Việt hay dịch \"để\" thành 要 hoặc 想 và đặt mục đích ở sau. Với 为了 thì mục đích thường đứng trước: nói 为了保护环境，我们少开车, không nói 我们少开车为了保护环境."
     },
     "chunks": [
      {
       "scene": "🌍🛡️🚗",
       "full": "为了保护环境我们少开车",
       "vi": "Để bảo vệ môi trường, chúng ta lái xe ít đi",
       "parts": [
        {
         "t": "为了保护环境",
         "ico": "🌍",
         "c": "s",
         "py": "wèi le bǎohù huánjìng",
         "hv": "vị liễu bảo hộ hoàn cảnh"
        },
        {
         "t": "我们少",
         "ico": "🧑‍🤝‍🧑",
         "c": "v",
         "py": "wǒmen shǎo",
         "hv": "ngã môn thiểu"
        },
        {
         "t": "开车",
         "ico": "🚗",
         "c": "o",
         "py": "kāichē",
         "hv": "khai xa"
        }
       ],
       "traceWord": "保护",
       "py": "Wèi le bǎohù huánjìng wǒmen shǎo kāichē",
       "traceKey": "baohu",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "护",
         "py": "hù",
         "hv": "hộ"
        }
       ]
      },
      {
       "scene": "💧🚿⏱️",
       "full": "为了节约用水大家洗澡要快",
       "vi": "Để tiết kiệm nước, mọi người tắm cho nhanh",
       "parts": [
        {
         "t": "为了节约用水",
         "ico": "💧",
         "c": "s",
         "py": "wèi le jiéyuē yòng shuǐ",
         "hv": "vị liễu tiết ước dụng thủy"
        },
        {
         "t": "大家洗澡",
         "ico": "🚿",
         "c": "v",
         "py": "dàjiā xǐzǎo",
         "hv": "đại gia tẩy táo"
        },
        {
         "t": "要快",
         "ico": "⏱️",
         "c": "o",
         "py": "yào kuài",
         "hv": "yếu khoái"
        }
       ],
       "traceWord": "节约",
       "py": "Wèi le jiéyuē yòng shuǐ dàjiā xǐzǎo yào kuài",
       "traceKey": "jieyue",
       "traceInfo": [
        {
         "c": "节",
         "py": "jié",
         "hv": "tiết"
        },
        {
         "c": "约",
         "py": "yuē",
         "hv": "ước"
        }
       ]
      },
      {
       "scene": "⏰🙅📋",
       "full": "为了不浪费时间我们提前准备",
       "vi": "Để không lãng phí thời gian, chúng tôi chuẩn bị trước",
       "parts": [
        {
         "t": "为了不浪费时间",
         "ico": "⏰",
         "c": "s",
         "py": "wèi le bú làngfèi shíjiān",
         "hv": "vị liễu bất lãng phí thời gian"
        },
        {
         "t": "我们提前",
         "ico": "🧑‍🤝‍🧑",
         "c": "v",
         "py": "wǒmen tíqián",
         "hv": "ngã môn đề tiền"
        },
        {
         "t": "准备",
         "ico": "📋",
         "c": "o",
         "py": "zhǔnbèi",
         "hv": "chuẩn bị"
        }
       ],
       "traceWord": "浪费",
       "py": "Wèi le bú làngfèi shíjiān wǒmen tíqián zhǔnbèi",
       "traceKey": "langfei",
       "traceInfo": [
        {
         "c": "浪",
         "py": "làng",
         "hv": "lãng"
        },
        {
         "c": "费",
         "py": "fèi",
         "hv": "phí"
        }
       ]
      },
      {
       "scene": "🧑💧🌬️",
       "full": "为了生存人们需要水和空气",
       "vi": "Để sinh tồn, con người cần nước và không khí",
       "parts": [
        {
         "t": "为了生存",
         "ico": "🧑",
         "c": "s",
         "py": "wèi le shēngcún",
         "hv": "vị liễu sinh tồn"
        },
        {
         "t": "人们需要",
         "ico": "🙏",
         "c": "v",
         "py": "rénmen xūyào",
         "hv": "nhân môn nhu yếu"
        },
        {
         "t": "水和空气",
         "ico": "💧",
         "c": "o",
         "py": "shuǐ hé kōngqì",
         "hv": "thủy hòa không khí"
        }
       ],
       "traceWord": "生存",
       "py": "Wèi le shēngcún rénmen xūyào shuǐ hé kōngqì",
       "traceKey": "shengcun",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "c": "存",
         "py": "cún",
         "hv": "tồn"
        }
       ]
      },
      {
       "scene": "🌿🏢🚇",
       "full": "为了环保公司要求员工坐地铁",
       "vi": "Vì môi trường, công ty yêu cầu nhân viên đi tàu điện ngầm",
       "parts": [
        {
         "t": "为了环保",
         "ico": "🌿",
         "c": "s",
         "py": "wèi le huánbǎo",
         "hv": "vị liễu hoàn bảo"
        },
        {
         "t": "公司要求",
         "ico": "🏢",
         "c": "v",
         "py": "gōngsī yāoqiú",
         "hv": "công ti yêu cầu"
        },
        {
         "t": "员工坐地铁",
         "ico": "🚇",
         "c": "o",
         "py": "yuángōng zuò dìtiě",
         "hv": "viên công tọa địa thiết"
        }
       ],
       "traceWord": "环保",
       "py": "Wèi le huánbǎo gōngsī yāoqiú yuángōng zuò dìtiě",
       "traceKey": "huanbao",
       "traceInfo": [
        {
         "c": "环",
         "py": "huán",
         "hv": "hoàn"
        },
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        }
       ]
      },
      {
       "scene": "📚💪🧑",
       "full": "为了考试他持续努力学习",
       "vi": "Để thi, anh ấy liên tục nỗ lực học tập",
       "parts": [
        {
         "t": "为了考试",
         "ico": "📝",
         "c": "s",
         "py": "wèi le kǎoshì",
         "hv": "vị liễu khảo thí"
        },
        {
         "t": "他持续",
         "ico": "🧑",
         "c": "v",
         "py": "tā chíxù",
         "hv": "tha trì tục"
        },
        {
         "t": "努力学习",
         "ico": "📚",
         "c": "o",
         "py": "nǔlì xuéxí",
         "hv": "nỗ lực học tập"
        }
       ],
       "traceWord": "持续",
       "py": "Wèi le kǎoshì tā chíxù nǔlì xuéxí",
       "traceKey": "chixu",
       "traceInfo": [
        {
         "c": "持",
         "py": "chí",
         "hv": "trì"
        },
        {
         "c": "续",
         "py": "xù",
         "hv": "tục"
        }
       ]
      },
      {
       "scene": "🏭🛢️🌍",
       "full": "为了不破坏环境工厂不用石油",
       "vi": "Để không phá hoại môi trường, nhà máy không dùng dầu mỏ",
       "parts": [
        {
         "t": "为了不破坏环境",
         "ico": "🌍",
         "c": "s",
         "py": "wèi le bú pòhuài huánjìng",
         "hv": "vị liễu bất phá hoại hoàn cảnh"
        },
        {
         "t": "工厂不用",
         "ico": "🏭",
         "c": "v",
         "py": "gōngchǎng bùyòng",
         "hv": "công xưởng bất dụng"
        },
        {
         "t": "石油",
         "ico": "🛢️",
         "c": "o",
         "py": "shíyóu",
         "hv": "thạch du"
        }
       ],
       "traceWord": "破坏",
       "py": "Wèi le bú pòhuài huánjìng gōngchǎng bùyòng shíyóu",
       "traceKey": "pohuai",
       "traceInfo": [
        {
         "c": "破",
         "py": "pò",
         "hv": "phá"
        },
        {
         "c": "坏",
         "py": "huài",
         "hv": "hoại"
        }
       ]
      },
      {
       "scene": "💧🏙️📦",
       "full": "为了不缺少水我们把水存起来",
       "vi": "Để không thiếu nước, chúng tôi trữ nước lại",
       "parts": [
        {
         "t": "为了不缺少水",
         "ico": "💧",
         "c": "s",
         "py": "wèi le bù quēshǎo shuǐ",
         "hv": "vị liễu bất khuyết thiểu thủy"
        },
        {
         "t": "我们把水",
         "ico": "🧑‍🤝‍🧑",
         "c": "v",
         "py": "wǒmen bǎ shuǐ",
         "hv": "ngã môn bả thủy"
        },
        {
         "t": "存起来",
         "ico": "📦",
         "c": "o",
         "py": "cún qǐlái",
         "hv": "tồn khởi lai"
        }
       ],
       "traceWord": "缺少",
       "py": "Wèi le bù quēshǎo shuǐ wǒmen bǎ shuǐ cún qǐlái",
       "traceKey": "queshao",
       "traceInfo": [
        {
         "c": "缺",
         "py": "quē",
         "hv": "khuyết"
        },
        {
         "c": "少",
         "py": "shǎo",
         "hv": "thiểu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "为什么有的动物会消失？",
       "qvi": "Vì sao có loài động vật biến mất?",
       "scene": "🐘❓🌍",
       "ans": "因为人们破坏了环境",
       "opts": [
        {
         "txt": "因为今天很冷",
         "ico": "🥶",
         "py": "Yīnwèi jīntiān hěn lěng"
        },
        {
         "txt": "因为人们破坏了环境",
         "ico": "🌍",
         "py": "Yīnwèi rénmen pòhuài le huánjìng"
        },
        {
         "txt": "因为我喜欢喝茶",
         "ico": "🍵",
         "py": "Yīnwèi wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Wèi shénme yǒude dòngwù huì xiāoshī?"
      },
      {
       "q": "这座桥是用什么做的？",
       "qvi": "Cây cầu này được làm bằng gì?",
       "scene": "🌉❓",
       "ans": "这座桥是用铁做的",
       "opts": [
        {
         "txt": "我们明天去开会",
         "ico": "💼",
         "py": "Wǒmen míngtiān qù kāihuì"
        },
        {
         "txt": "这座桥是用铁做的",
         "ico": "🌉",
         "py": "Zhè zuò qiáo shì yòng tiě zuò de"
        },
        {
         "txt": "他是我的同事",
         "ico": "🧑‍💼",
         "py": "Tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Zhè zuò qiáo shì yòng shénme zuò de?"
      },
      {
       "q": "你的鞋怎么了？",
       "qvi": "Giày của bạn sao vậy?",
       "scene": "👟❓",
       "ans": "我的鞋破了",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        },
        {
         "txt": "我的鞋破了",
         "ico": "👟",
         "py": "Wǒ de xié pò le"
        }
       ],
       "qpy": "Nǐ de xié zěnme le?"
      },
      {
       "q": "这个城市缺什么？",
       "qvi": "Thành phố này thiếu gì?",
       "scene": "🏙️❓",
       "ans": "这个城市缺水",
       "opts": [
        {
         "txt": "这个城市缺水",
         "ico": "💧",
         "py": "Zhè gè chéngshì quē shuǐ"
        },
        {
         "txt": "我们明天休息",
         "ico": "🛌",
         "py": "Wǒmen míngtiān xiūxi"
        },
        {
         "txt": "我很喜欢这个环",
         "ico": "💍",
         "py": "Wǒ hěn xǐhuan zhè gè huán"
        }
       ],
       "qpy": "Zhè gè chéngshì quē shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đề xuất tiết kiệm trong văn phòng",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh văn phòng, tìm 2 thứ đang bị lãng phí (điện, giấy, nước...). Nói thành tiếng lý do cần tiết kiệm: <i>\"为了节约用水，大家要关水。\"</i>",
       "<b>Bước 2:</b> Nhắn cho đồng nghiệp một đề xuất ngắn theo mẫu <i>\"为了保护环境，公司要求员工坐地铁。\"</i>, thay phần sau dấu phẩy bằng ý của bạn.",
       "<b>Bước 3:</b> Trả lời câu hỏi của sếp <i>\"为什么要这样做？\"</i> bằng một câu có 为了, ví dụ <i>\"为了不浪费时间，我们提前准备。\"</i>"
      ]
     }
    },
    {
     "id": "3.15C",
     "name": "Bài 3.15C: Nông nghiệp và sinh trưởng (只有……才……)",
     "grammar": {
      "formulas": [
       "🔑 只有 + 🧑‍🌾 农民努力 + ✅ 才 + 🌾 农村会变好",
       "🔑 只有 + ☀️ 阳光好 + ✅ 才 + 🌱 种子能生长"
      ],
      "tip": "Dùng 只有……，才…… (zhǐyǒu... cái..., chỉ hữu... tài...) để nêu điều kiện duy nhất, bắt buộc. Vế sau luôn có 才 (cái, tài) đứng trước động từ hoặc trợ động từ: 才能, 才会, 才可以.",
      "vn_tip": "Người Việt hay nói \"chỉ có... thì...\" rồi dùng 就 thay cho 才. Điều kiện duy nhất phải dùng 才; 就 dùng cho 只要……，就…… (chỉ cần... là...). Đừng bỏ 才 ở vế sau."
     },
     "chunks": [
      {
       "scene": "🧑‍🌾💪🏡",
       "full": "只有农民努力农村才会变好",
       "vi": "Chỉ khi nông dân nỗ lực thì nông thôn mới tốt lên",
       "parts": [
        {
         "t": "只有农民努力",
         "ico": "🧑‍🌾",
         "c": "s",
         "py": "zhǐ yǒu nóngmín nǔlì",
         "hv": "chỉ hữu nông dân nỗ lực"
        },
        {
         "t": "农村才会",
         "ico": "🏡",
         "c": "v",
         "py": "nóngcūn cái huì",
         "hv": "nông thôn tài hội"
        },
        {
         "t": "变好",
         "ico": "📈",
         "c": "o",
         "py": "biàn hǎo",
         "hv": "biến hảo"
        }
       ],
       "traceWord": "农民",
       "py": "Zhǐ yǒu nóngmín nǔlì nóngcūn cái huì biàn hǎo",
       "traceKey": "nongmin",
       "traceInfo": [
        {
         "c": "农",
         "py": "nóng",
         "hv": "nông"
        },
        {
         "c": "民",
         "py": "mín",
         "hv": "dân"
        }
       ]
      },
      {
       "scene": "🌱🍎✨",
       "full": "只有种子好水果才能长得好",
       "vi": "Chỉ khi hạt giống tốt thì trái cây mới lớn tốt",
       "parts": [
        {
         "t": "只有种子好",
         "ico": "🌱",
         "c": "s",
         "py": "zhǐ yǒu zhǒngzi hǎo",
         "hv": "chỉ hữu chủng tử hảo"
        },
        {
         "t": "水果才能",
         "ico": "🍎",
         "c": "v",
         "py": "shuǐguǒ cáinéng",
         "hv": "thủy quả tài năng"
        },
        {
         "t": "长得好",
         "ico": "✨",
         "c": "o",
         "py": "zhǎng de hǎo",
         "hv": "trưởng đắc hảo"
        }
       ],
       "traceWord": "种子",
       "py": "Zhǐ yǒu zhǒngzi hǎo shuǐguǒ cáinéng zhǎng de hǎo",
       "traceKey": "zhongzi",
       "traceInfo": [
        {
         "c": "种",
         "py": "zhǒng",
         "hv": "chủng"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🍎🟢➡️🔴",
       "full": "只有水果成熟了才好吃",
       "vi": "Chỉ khi trái cây chín thì mới ngon",
       "parts": [
        {
         "t": "只有水果成熟了",
         "ico": "🍎",
         "c": "s",
         "py": "zhǐ yǒu shuǐguǒ chéngshú le",
         "hv": "chỉ hữu thủy quả thành thục liễu"
        },
        {
         "t": "才",
         "ico": "✅",
         "c": "v",
         "py": "cái",
         "hv": "tài"
        },
        {
         "t": "好吃",
         "ico": "😋",
         "c": "o",
         "py": "hǎochī",
         "hv": "hảo cật"
        }
       ],
       "traceWord": "成熟",
       "py": "Zhǐ yǒu shuǐguǒ chéngshú le cái hǎochī",
       "traceKey": "chengshu",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "熟",
         "py": "shú",
         "hv": "thục"
        }
       ]
      },
      {
       "scene": "☀️🌱🌿",
       "full": "只有阳光好种子才能生长",
       "vi": "Chỉ khi nắng tốt thì hạt giống mới sinh trưởng được",
       "parts": [
        {
         "t": "只有阳光好",
         "ico": "☀️",
         "c": "s",
         "py": "zhǐ yǒu yángguāng hǎo",
         "hv": "chỉ hữu dương quang hảo"
        },
        {
         "t": "种子才能",
         "ico": "🌱",
         "c": "v",
         "py": "zhǒngzi cáinéng",
         "hv": "chủng tử tài năng"
        },
        {
         "t": "生长",
         "ico": "🌿",
         "c": "o",
         "py": "shēngzhǎng",
         "hv": "sinh trưởng"
        }
       ],
       "traceWord": "生长",
       "py": "Zhǐ yǒu yángguāng hǎo zhǒngzi cáinéng shēngzhǎng",
       "traceKey": "shengzhang",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "🏘️💧🧑‍🌾",
       "full": "只有村里有水农民才能生活",
       "vi": "Chỉ khi trong làng có nước thì nông dân mới sống được",
       "parts": [
        {
         "t": "只有村里有水",
         "ico": "🏘️",
         "c": "s",
         "py": "zhǐ yǒu cūn lǐ yǒu shuǐ",
         "hv": "chỉ hữu thôn lý hữu thủy"
        },
        {
         "t": "农民才能",
         "ico": "🧑‍🌾",
         "c": "v",
         "py": "nóngmín cáinéng",
         "hv": "nông dân tài năng"
        },
        {
         "t": "生活",
         "ico": "🏡",
         "c": "o",
         "py": "shēnghuó",
         "hv": "sinh hoạt"
        }
       ],
       "traceWord": "村",
       "py": "Zhǐ yǒu cūn lǐ yǒu shuǐ nóngmín cáinéng shēnghuó",
       "traceKey": "cun",
       "traceInfo": [
        {
         "c": "村",
         "py": "cūn",
         "hv": "thôn"
        }
       ]
      },
      {
       "scene": "🏭💻📈",
       "full": "只有提高技术工业才能增长",
       "vi": "Chỉ khi nâng cao kỹ thuật thì công nghiệp mới tăng trưởng",
       "parts": [
        {
         "t": "只有提高技术",
         "ico": "💻",
         "c": "s",
         "py": "zhǐ yǒu tígāo jìshù",
         "hv": "chỉ hữu đề cao kỹ thuật"
        },
        {
         "t": "工业才能",
         "ico": "🏭",
         "c": "v",
         "py": "gōngyè cáinéng",
         "hv": "công nghiệp tài năng"
        },
        {
         "t": "增长",
         "ico": "📈",
         "c": "o",
         "py": "zēngzhǎng",
         "hv": "tăng trưởng"
        }
       ],
       "traceWord": "工业",
       "py": "Zhǐ yǒu tígāo jìshù gōngyè cáinéng zēngzhǎng",
       "traceKey": "gongye",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      },
      {
       "scene": "🐴💧🏞️",
       "full": "只有马有水喝才能走远",
       "vi": "Chỉ khi ngựa có nước uống thì mới đi xa được",
       "parts": [
        {
         "t": "只有马有水喝",
         "ico": "🐴",
         "c": "s",
         "py": "zhǐ yǒu mǎ yǒu shuǐ hē",
         "hv": "chỉ hữu mã hữu thủy hát"
        },
        {
         "t": "才能",
         "ico": "✅",
         "c": "v",
         "py": "cáinéng",
         "hv": "tài năng"
        },
        {
         "t": "走远",
         "ico": "🏞️",
         "c": "o",
         "py": "zǒu yuǎn",
         "hv": "tẩu viễn"
        }
       ],
       "traceWord": "马",
       "py": "Zhǐ yǒu mǎ yǒu shuǐ hē cáinéng zǒu yuǎn",
       "traceKey": "ma",
       "traceInfo": [
        {
         "c": "马",
         "py": "mǎ",
         "hv": "mã"
        }
       ]
      },
      {
       "scene": "🌾📦💰",
       "full": "只有农业生产好收入才会增加",
       "vi": "Chỉ khi sản xuất nông nghiệp tốt thì thu nhập mới tăng",
       "parts": [
        {
         "t": "只有农业生产好",
         "ico": "🌾",
         "c": "s",
         "py": "zhǐ yǒu nóngyè shēngchǎn hǎo",
         "hv": "chỉ hữu nông nghiệp sinh sản hảo"
        },
        {
         "t": "收入才会",
         "ico": "💰",
         "c": "v",
         "py": "shōurù cái huì",
         "hv": "thu nhập tài hội"
        },
        {
         "t": "增加",
         "ico": "📈",
         "c": "o",
         "py": "zēngjiā",
         "hv": "tăng gia"
        }
       ],
       "traceWord": "农业",
       "py": "Zhǐ yǒu nóngyè shēngchǎn hǎo shōurù cái huì zēngjiā",
       "traceKey": "nongye",
       "traceInfo": [
        {
         "c": "农",
         "py": "nóng",
         "hv": "nông"
        },
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得鱼离开水还能活吗？",
       "qvi": "Bạn nghĩ cá rời khỏi nước còn sống được không?",
       "scene": "🐟💧❓",
       "ans": "鱼离开水就不能活",
       "opts": [
        {
         "txt": "鱼离开水就不能活",
         "ico": "🐟",
         "py": "Yú líkāi shuǐ jiù bù néng huó"
        },
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐ juéde yú líkāi shuǐ hái néng huó ma?"
      },
      {
       "q": "水对生命重要不重要？",
       "qvi": "Nước có quan trọng với sự sống không?",
       "scene": "💧🌱❓",
       "ans": "水对生命很重要",
       "opts": [
        {
         "txt": "水对生命不重要",
         "ico": "🙅",
         "py": "Shuǐ duì shēngmìng bú zhòngyào"
        },
        {
         "txt": "我们明天开会",
         "ico": "💼",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "水对生命很重要",
         "ico": "💧",
         "py": "Shuǐ duì shēngmìng hěn zhòngyào"
        }
       ],
       "qpy": "Shuǐ duì shēngmìng zhòngyào bú zhòngyào?"
      },
      {
       "q": "农村的生活怎么样？",
       "qvi": "Cuộc sống ở nông thôn thế nào?",
       "scene": "🏡🌾❓",
       "ans": "农村的空气很好",
       "opts": [
        {
         "txt": "我昨天在地铁站",
         "ico": "🚇",
         "py": "Wǒ zuótiān zài dìtiězhàn"
        },
        {
         "txt": "农村的空气很好",
         "ico": "🌾",
         "py": "Nóngcūn de kōngqì hěn hǎo"
        },
        {
         "txt": "他明天去上班",
         "ico": "💼",
         "py": "Tā míngtiān qù shàngbān"
        }
       ],
       "qpy": "Nóngcūn de shēnghuó zěnmeyàng?"
      },
      {
       "q": "这个工厂生产什么？",
       "qvi": "Nhà máy này sản xuất gì?",
       "scene": "🏭❓",
       "ans": "这个工厂生产电脑",
       "opts": [
        {
         "txt": "这个工厂生产电脑",
         "ico": "💻",
         "py": "Zhè gè gōngchǎng shēngchǎn diànnǎo"
        },
        {
         "txt": "我很喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ hěn xǐhuan hē chá"
        },
        {
         "txt": "他们昨天去了海边",
         "ico": "🏖️",
         "py": "Tāmen zuótiān qù le hǎi biān"
        }
       ],
       "qpy": "Zhè gè gōngchǎng shēngchǎn shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thăm nhà cung cấp nông sản",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn gọi điện cho một nhà cung cấp nông sản. Hỏi về quả của họ và nói rằng bạn chỉ mua khi chín: <i>\"只有水果成熟了，我们才买。\"</i>",
       "<b>Bước 2:</b> Nhắn tin hỏi họ về sản xuất năm nay, dùng mẫu <i>\"只有农业生产好，收入才会增加。\"</i> để nêu điều kiện hợp tác của bạn.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu điều kiện về công việc của bạn với 只有……才……, ví dụ <i>\"只有提高技术，工业才能增长。\"</i>"
      ]
     }
    }
   ]
  },
  "3.16": {
   "lessons": [
    {
     "id": "3.16A",
     "name": "Bài 3.16A: Mục tiêu, kế hoạch và mong muốn",
     "grammar": {
      "formulas": [
       "🤔 要是 + 🧑 你有决心 + ➡️ 就 + 🏆 会成功",
       "🤔 要是 + 📅 明天不下雨 + ➡️ 我就 + 🌳 去公园"
      ],
      "tip": "Mẫu 要是……，就……: mệnh đề đầu nêu giả thiết (要是, yàoshi, \"yếu thị\"), mệnh đề sau nêu kết quả và thường có 就 (jiù, \"tựu\") đứng trước động từ. 要是 và 如果 có nghĩa gần giống nhau, 要是 hay dùng trong khẩu ngữ.",
      "vn_tip": "Người Việt hay quên 就 ở mệnh đề sau vì tiếng Việt chỉ cần nói \"nếu ... thì\". Trong tiếng Trung, 就 phải đứng sau chủ ngữ và trước động từ: 要是你来，我就去 (đúng), không nói 要是你来，去我."
     },
     "chunks": [
      {
       "scene": "🌧️🌳🚶",
       "full": "要是明天不下雨我就去公园",
       "vi": "Nếu mai không mưa thì tôi sẽ đi công viên",
       "parts": [
        {
         "t": "要是明天不下雨",
         "ico": "🌧️",
         "c": "s",
         "py": "yàoshi míngtiān bú xià yǔ",
         "hv": "yếu thị minh thiên bất hạ vũ"
        },
        {
         "t": "我就去",
         "ico": "🚶",
         "c": "v",
         "py": "wǒ jiù qù",
         "hv": "ngã tựu khứ"
        },
        {
         "t": "公园",
         "ico": "🌳",
         "c": "o",
         "py": "gōngyuán",
         "hv": "công viên"
        }
       ],
       "traceWord": "公园",
       "py": "Yàoshi míngtiān bú xià yǔ wǒ jiù qù gōngyuán",
       "traceKey": "gongyuan",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "园",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "💡🗣️🙋",
       "full": "要是你有主意就告诉我",
       "vi": "Nếu bạn có ý kiến thì cứ nói với tôi",
       "parts": [
        {
         "t": "要是你有主意",
         "ico": "💡",
         "c": "s",
         "py": "yàoshi nǐ yǒu zhǔyi",
         "hv": "yếu thị nễ hữu chủ ý"
        },
        {
         "t": "就告诉",
         "ico": "🗣️",
         "c": "v",
         "py": "jiù gàosu",
         "hv": "tựu cáo tố"
        },
        {
         "t": "我",
         "ico": "🙋",
         "c": "o",
         "py": "wǒ",
         "hv": "ngã"
        }
       ],
       "traceWord": "主意",
       "py": "Yàoshi nǐ yǒu zhǔyi jiù gàosu wǒ",
       "traceKey": "zhuyi",
       "traceInfo": [
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        },
        {
         "c": "意",
         "py": "yi",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "🎯🙋📚",
       "full": "要是你有目标就不会怕困难",
       "vi": "Nếu bạn có mục tiêu thì sẽ không sợ khó khăn",
       "parts": [
        {
         "t": "要是你有目标",
         "ico": "🎯",
         "c": "s",
         "py": "yàoshi nǐ yǒu mùbiāo",
         "hv": "yếu thị nễ hữu mục tiêu"
        },
        {
         "t": "就不会怕",
         "ico": "💪",
         "c": "v",
         "py": "jiù bú huì pà",
         "hv": "tựu bất hội phạ"
        },
        {
         "t": "困难",
         "ico": "⛰️",
         "c": "o",
         "py": "kùnnan",
         "hv": "khốn nan"
        }
       ],
       "traceWord": "目标",
       "py": "Yàoshi nǐ yǒu mùbiāo jiù bú huì pà kùnnan",
       "traceKey": "mubiao",
       "traceInfo": [
        {
         "c": "目",
         "py": "mù",
         "hv": "mục"
        },
        {
         "c": "标",
         "py": "biāo",
         "hv": "tiêu"
        }
       ]
      },
      {
       "scene": "🙋🌟🏢",
       "full": "要是有机会我就希望去北京工作",
       "vi": "Nếu có cơ hội thì tôi mong được đến Bắc Kinh làm việc",
       "parts": [
        {
         "t": "要是有机会",
         "ico": "🌟",
         "c": "s",
         "py": "yàoshi yǒu jīhuì",
         "hv": "yếu thị hữu cơ hội"
        },
        {
         "t": "我就希望",
         "ico": "🙏",
         "c": "v",
         "py": "wǒ jiù xīwàng",
         "hv": "ngã tựu hy vọng"
        },
        {
         "t": "去北京工作",
         "ico": "🏢",
         "c": "o",
         "py": "qù Běijīng gōngzuò",
         "hv": "khứ bắc kinh công tác"
        }
       ],
       "traceWord": "希望",
       "py": "Yàoshi yǒu jīhuì wǒ jiù xīwàng qù Běijīng gōngzuò",
       "traceKey": "xiwang",
       "traceInfo": [
        {
         "c": "希",
         "py": "xī",
         "hv": "hy"
        },
        {
         "c": "望",
         "py": "wàng",
         "hv": "vọng"
        }
       ]
      },
      {
       "scene": "💪🏆😊",
       "full": "要是你有决心就一定会成功",
       "vi": "Nếu bạn có quyết tâm thì nhất định sẽ thành công",
       "parts": [
        {
         "t": "要是你有决心",
         "ico": "💪",
         "c": "s",
         "py": "yàoshi nǐ yǒu juéxīn",
         "hv": "yếu thị nễ hữu quyết tâm"
        },
        {
         "t": "就一定会",
         "ico": "✅",
         "c": "v",
         "py": "jiù yīdìng huì",
         "hv": "tựu nhất định hội"
        },
        {
         "t": "成功",
         "ico": "🏆",
         "c": "o",
         "py": "chénggōng",
         "hv": "thành công"
        }
       ],
       "traceWord": "决心",
       "py": "Yàoshi nǐ yǒu juéxīn jiù yīdìng huì chénggōng",
       "traceKey": "juexin",
       "traceInfo": [
        {
         "c": "决",
         "py": "jué",
         "hv": "quyết"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "🏅💼💪",
       "full": "要是想有成果就要好好努力",
       "vi": "Nếu muốn có thành quả thì phải cố gắng thật tốt",
       "parts": [
        {
         "t": "要是想有成果",
         "ico": "🏅",
         "c": "s",
         "py": "yàoshi xiǎng yǒu chéngguǒ",
         "hv": "yếu thị tưởng hữu thành quả"
        },
        {
         "t": "就要",
         "ico": "☝️",
         "c": "v",
         "py": "jiùyào",
         "hv": "tựu yếu"
        },
        {
         "t": "好好努力",
         "ico": "💪",
         "c": "o",
         "py": "hǎohǎo nǔlì",
         "hv": "hảo hảo nỗ lực"
        }
       ],
       "traceWord": "成果",
       "py": "Yàoshi xiǎng yǒu chéngguǒ jiùyào hǎohǎo nǔlì",
       "traceKey": "chengguo",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        }
       ]
      },
      {
       "scene": "⏰📞👔",
       "full": "要是你预计会晚就先告诉经理",
       "vi": "Nếu bạn dự tính sẽ đến muộn thì hãy báo trước cho quản lý",
       "parts": [
        {
         "t": "要是你预计会晚",
         "ico": "⏰",
         "c": "s",
         "py": "yàoshi nǐ yùjì huì wǎn",
         "hv": "yếu thị nễ dự kế hội vãn"
        },
        {
         "t": "就先告诉",
         "ico": "📞",
         "c": "v",
         "py": "jiù xiān gàosu",
         "hv": "tựu tiên cáo tố"
        },
        {
         "t": "经理",
         "ico": "👔",
         "c": "o",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        }
       ],
       "traceWord": "预计",
       "py": "Yàoshi nǐ yùjì huì wǎn jiù xiān gàosu jīnglǐ",
       "traceKey": "yuji",
       "traceInfo": [
        {
         "c": "预",
         "py": "yù",
         "hv": "dự"
        },
        {
         "c": "计",
         "py": "jì",
         "hv": "kế"
        }
       ]
      },
      {
       "scene": "🤝👥🌟",
       "full": "要是有把握我们就争取这个机会",
       "vi": "Nếu chắc chắn thì chúng ta sẽ cố giành lấy cơ hội này",
       "parts": [
        {
         "t": "要是有把握",
         "ico": "👍",
         "c": "s",
         "py": "yàoshi yǒu bǎwò",
         "hv": "yếu thị hữu bả ác"
        },
        {
         "t": "我们就争取",
         "ico": "🤝",
         "c": "v",
         "py": "wǒmen jiù zhēngqǔ",
         "hv": "ngã môn tựu tranh thủ"
        },
        {
         "t": "这个机会",
         "ico": "🌟",
         "c": "o",
         "py": "zhè gè jīhuì",
         "hv": "giá cá cơ hội"
        }
       ],
       "traceWord": "争取",
       "py": "Yàoshi yǒu bǎwò wǒmen jiù zhēngqǔ zhè gè jīhuì",
       "traceKey": "zhengqu",
       "traceInfo": [
        {
         "c": "争",
         "py": "zhēng",
         "hv": "tranh"
        },
        {
         "c": "取",
         "py": "qǔ",
         "hv": "thủ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的愿望是什么？",
       "qvi": "Điều ước của bạn là gì?",
       "scene": "🙋🌟",
       "ans": "我的愿望是去中国旅行",
       "opts": [
        {
         "txt": "我昨天买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "我的愿望是去中国旅行",
         "ico": "✈️",
         "py": "Wǒ de yuànwàng shì qù Zhōngguó lǚxíng"
        },
        {
         "txt": "他是我们公司的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        }
       ],
       "qpy": "Nǐ de yuànwàng shì shénme?"
      },
      {
       "q": "怎么才能做好这个工作？",
       "qvi": "Làm thế nào mới làm tốt công việc này?",
       "scene": "💼🤔",
       "ans": "只有认真努力才能成功",
       "opts": [
        {
         "txt": "我们星期六去爬山",
         "ico": "⛰️",
         "py": "Wǒmen xīngqī liù qù pá shān"
        },
        {
         "txt": "只有认真努力才能成功",
         "ico": "🏆",
         "py": "Zhǐyǒu rènzhēn nǔlì cáinéng chénggōng"
        },
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        }
       ],
       "qpy": "Zěnme cáinéng zuò hǎo zhè gè gōngzuò?"
      },
      {
       "q": "你为什么觉得他很成功？",
       "qvi": "Tại sao bạn thấy anh ấy rất thành công?",
       "scene": "🙋🏆",
       "ans": "因为他有很多成就",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为他不喜欢喝茶",
         "ico": "🍵",
         "py": "Yīnwèi tā bù xǐhuan hē chá"
        },
        {
         "txt": "因为他有很多成就",
         "ico": "🏅",
         "py": "Yīnwèi tā yǒu hěn duō chéngjiù"
        }
       ],
       "qpy": "Nǐ wèi shénme juéde tā hěn chénggōng?"
      },
      {
       "q": "你们做这件事的过程是什么？",
       "qvi": "Quá trình các bạn làm việc này là gì?",
       "scene": "👥📋",
       "ans": "首先开会然后做计划",
       "opts": [
        {
         "txt": "我们坐飞机去北京",
         "ico": "✈️",
         "py": "Wǒmen zuò fēijī qù Běijīng"
        },
        {
         "txt": "他们在公园里跑步",
         "ico": "🏃",
         "py": "Tāmen zài gōngyuán lǐ pǎobù"
        },
        {
         "txt": "首先开会然后做计划",
         "ico": "📋",
         "py": "Shǒuxiān kāihuì ránhòu zuò jìhuà"
        }
       ],
       "qpy": "Nǐmen zuò zhè jiàn shì de guòchéng shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Lên kế hoạch mục tiêu quý mới với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Viết ra 3 mục tiêu công việc của bạn trong quý tới và tự nói thành tiếng một mục tiêu, ví dụ <i>\"我的目标是学习中文\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp, dùng mẫu giả thiết để đề xuất cách làm, ví dụ <i>\"要是你有主意，就告诉我\"</i> hoặc <i>\"要是有把握，我们就争取这个机会\"</i>.",
       "<b>Bước 3:</b> Nói to kế hoạch theo thứ tự với <i>\"首先……然后……\"</i> và kết thúc bằng một lời hứa như <i>\"要是你有决心，就一定会成功\"</i>."
      ]
     }
    },
    {
     "id": "3.16B",
     "name": "Bài 3.16B: Mức độ, phạm vi và số lượng ước chừng",
     "grammar": {
      "formulas": [
       "🧑 他 + 📅 今年 + ⚡ 大约 + 🔢 三十岁",
       "🏢 公司 + ⚡ 有 + 🔢 一百人 + 📏 左右",
       "❓ 这个工作 + ⏳ 至少要 + 🔢 三四天"
      ],
      "tip": "Ước lượng: 大概 (dàgài, \"đại khái\") và 大约 (dàyuē, \"đại ước\") đứng trước số lượng; 左右 (zuǒyòu, \"tả hữu\") và 前后 (qiánhòu, \"tiền hậu\") đứng sau số lượng hoặc mốc thời gian; hai số liền nhau như 三四 nghĩa là \"ba bốn\". Không dùng 大约 và 左右 cùng một lúc trong một câu.",
      "vn_tip": "Người Việt hay nói \"khoảng ba mươi tuổi khoảng\", tức dùng hai từ ước lượng cùng lúc. Trong tiếng Trung chỉ chọn MỘT cách: 大约三十岁 hoặc 三十岁左右, không nói 大约三十岁左右."
     },
     "chunks": [
      {
       "scene": "🧑🎂🔢",
       "full": "他今年大约三十岁",
       "vi": "Năm nay anh ấy khoảng ba mươi tuổi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "今年大约",
         "ico": "📅",
         "c": "v",
         "py": "jīnnián dàyuē",
         "hv": "kim niên đại ước"
        },
        {
         "t": "三十岁",
         "ico": "🎂",
         "c": "o",
         "py": "sān shí suì",
         "hv": "tam thập tuế"
        }
       ],
       "traceWord": "大约",
       "py": "Tā jīnnián dàyuē sān shí suì",
       "traceKey": "dayue",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "约",
         "py": "yuē",
         "hv": "ước"
        }
       ]
      },
      {
       "scene": "🏢👥💯",
       "full": "我们公司有一百人左右",
       "vi": "Công ty chúng tôi có khoảng một trăm người",
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
         "t": "一百人左右",
         "ico": "👥",
         "c": "o",
         "py": "yī bǎi rén zuǒyòu",
         "hv": "nhất bách nhân tả hữu"
        }
       ],
       "traceWord": "左右",
       "py": "Wǒmen gōngsī yǒu yī bǎi rén zuǒyòu",
       "traceKey": "zuoyou",
       "traceInfo": [
        {
         "c": "左",
         "py": "zuǒ",
         "hv": "tả"
        },
        {
         "c": "右",
         "py": "yòu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "🚗✈️⏰",
       "full": "从这儿到机场大概要一个小时",
       "vi": "Từ đây đến sân bay mất khoảng một tiếng",
       "parts": [
        {
         "t": "从这儿到机场",
         "ico": "🚗",
         "c": "s",
         "py": "cóng zhèr dào jīchǎng",
         "hv": "tòng giá nhi đáo cơ trường"
        },
        {
         "t": "大概要",
         "ico": "🤔",
         "c": "v",
         "py": "dàgài yào",
         "hv": "đại khái yếu"
        },
        {
         "t": "一个小时",
         "ico": "⏰",
         "c": "o",
         "py": "yī gè xiǎoshí",
         "hv": "nhất cá tiểu thời"
        }
       ],
       "traceWord": "大概",
       "py": "Cóng zhèr dào jīchǎng dàgài yào yī gè xiǎoshí",
       "traceKey": "dagai",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "概",
         "py": "gài",
         "hv": "khái"
        }
       ]
      },
      {
       "scene": "📋👥⏰",
       "full": "这个会议将近开了三个小时",
       "vi": "Cuộc họp này đã diễn ra gần ba tiếng",
       "parts": [
        {
         "t": "这个会议",
         "ico": "📋",
         "c": "s",
         "py": "zhè gè huìyì",
         "hv": "giá cá hội nghị"
        },
        {
         "t": "将近开了",
         "ico": "⏳",
         "c": "v",
         "py": "jiāngjìn kāi le",
         "hv": "tương cận khai liễu"
        },
        {
         "t": "三个小时",
         "ico": "⏰",
         "c": "o",
         "py": "sān gè xiǎoshí",
         "hv": "tam cá tiểu thời"
        }
       ],
       "traceWord": "将近",
       "py": "Zhè gè huìyì jiāngjìn kāi le sān gè xiǎoshí",
       "traceKey": "jiangjin",
       "traceInfo": [
        {
         "c": "将",
         "py": "jiāng",
         "hv": "tương"
        },
        {
         "c": "近",
         "py": "jìn",
         "hv": "cận"
        }
       ]
      },
      {
       "scene": "🌧️📅☁️",
       "full": "昨天整整下了一天雨",
       "vi": "Hôm qua mưa suốt cả một ngày",
       "parts": [
        {
         "t": "昨天",
         "ico": "📅",
         "c": "s",
         "py": "zuótiān",
         "hv": "tạc thiên"
        },
        {
         "t": "整整下了",
         "ico": "🌧️",
         "c": "v",
         "py": "zhěngzhěng xià le",
         "hv": "chỉnh chỉnh hạ liễu"
        },
        {
         "t": "一天雨",
         "ico": "☔",
         "c": "o",
         "py": "yī tiān yǔ",
         "hv": "nhất thiên vũ"
        }
       ],
       "traceWord": "整整",
       "py": "Zuótiān zhěngzhěng xià le yī tiān yǔ",
       "traceKey": "zhengzheng",
       "traceInfo": [
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        },
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        }
       ]
      },
      {
       "scene": "💼📅⏳",
       "full": "这个工作至少要三四天",
       "vi": "Công việc này ít nhất cần ba bốn ngày",
       "parts": [
        {
         "t": "这个工作",
         "ico": "💼",
         "c": "s",
         "py": "zhè gè gōngzuò",
         "hv": "giá cá công tác"
        },
        {
         "t": "至少要",
         "ico": "⏳",
         "c": "v",
         "py": "zhìshǎo yào",
         "hv": "chí thiểu yếu"
        },
        {
         "t": "三四天",
         "ico": "📅",
         "c": "o",
         "py": "sān sì tiān",
         "hv": "tam tứ thiên"
        }
       ],
       "traceWord": "至少",
       "py": "Zhè gè gōngzuò zhìshǎo yào sān sì tiān",
       "traceKey": "zhishao",
       "traceInfo": [
        {
         "c": "至",
         "py": "zhì",
         "hv": "chí"
        },
        {
         "c": "少",
         "py": "shǎo",
         "hv": "thiểu"
        }
       ]
      },
      {
       "scene": "🕔🧑🚌",
       "full": "下午五点前后他恐怕到不了",
       "vi": "Khoảng năm giờ chiều e là anh ấy không đến kịp",
       "parts": [
        {
         "t": "下午五点前后",
         "ico": "🕔",
         "c": "s",
         "py": "xiàwǔ wǔ diǎn qiánhòu",
         "hv": "hạ ngọ ngũ điểm tiền hậu"
        },
        {
         "t": "他恐怕",
         "ico": "😟",
         "c": "v",
         "py": "tā kǒngpà",
         "hv": "tha khủng phạ"
        },
        {
         "t": "到不了",
         "ico": "🚌",
         "c": "o",
         "py": "dào bù le",
         "hv": "đáo bất liễu"
        }
       ],
       "traceWord": "恐怕",
       "py": "Xiàwǔ wǔ diǎn qiánhòu tā kǒngpà dào bù le",
       "traceKey": "kongpa",
       "traceInfo": [
        {
         "c": "恐",
         "py": "kǒng",
         "hv": "khủng"
        },
        {
         "c": "怕",
         "py": "pà",
         "hv": "phạ"
        }
       ]
      },
      {
       "scene": "🏪🛒👥",
       "full": "今天超级市场里仅有几个人",
       "vi": "Hôm nay trong siêu thị chỉ có vài người",
       "parts": [
        {
         "t": "今天超级市场里",
         "ico": "🏪",
         "c": "s",
         "py": "jīntiān chāojí shìchǎng lǐ",
         "hv": "kim thiên siêu cấp thị trường lý"
        },
        {
         "t": "仅有",
         "ico": "☝️",
         "c": "v",
         "py": "jǐn yǒu",
         "hv": "cận hữu"
        },
        {
         "t": "几个人",
         "ico": "👥",
         "c": "o",
         "py": "jǐ gè rén",
         "hv": "kỷ cá nhân"
        }
       ],
       "traceWord": "超级",
       "py": "Jīntiān chāojí shìchǎng lǐ jǐn yǒu jǐ gè rén",
       "traceKey": "chaoji",
       "traceInfo": [
        {
         "c": "超",
         "py": "chāo",
         "hv": "siêu"
        },
        {
         "c": "级",
         "py": "jí",
         "hv": "cấp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的汉语程度怎么样？",
       "qvi": "Trình độ tiếng Trung của bạn thế nào?",
       "scene": "🙋📖",
       "ans": "我的汉语程度比较好",
       "opts": [
        {
         "txt": "我的汉语是红色的",
         "ico": "🔴",
         "py": "Wǒ de Hànyǔ shì hóngsè de"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🏪",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "我的汉语程度比较好",
         "ico": "👍",
         "py": "Wǒ de Hànyǔ chéngdù bǐjiào hǎo"
        }
       ],
       "qpy": "Nǐ de Hànyǔ chéngdù zěnmeyàng?"
      },
      {
       "q": "你们的工作范围是什么？",
       "qvi": "Phạm vi công việc của các bạn là gì?",
       "scene": "👥💼",
       "ans": "我们仅仅做电脑方面的工作",
       "opts": [
        {
         "txt": "我们仅仅做电脑方面的工作",
         "ico": "💻",
         "py": "Wǒmen jǐnjǐn zuò diànnǎo fāngmiàn de gōngzuò"
        },
        {
         "txt": "我们明天去北京旅游",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng lǚyóu"
        },
        {
         "txt": "我们都喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒmen dōu xǐhuan chī miànbāo"
        }
       ],
       "qpy": "Nǐmen de gōngzuò fànwéi shì shénme?"
      },
      {
       "q": "哪个办法更加简单？",
       "qvi": "Cách nào đơn giản hơn?",
       "scene": "🤔💡",
       "ans": "第二个办法较简单",
       "opts": [
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "第二个办法较简单",
         "ico": "2️⃣",
         "py": "Dì èr gè bànfǎ jiào jiǎndān"
        },
        {
         "txt": "他在图书馆看书",
         "ico": "📚",
         "py": "Tā zài túshūguǎn kàn shū"
        }
       ],
       "qpy": "Nǎ gè bànfǎ gèngjiā jiǎndān?"
      },
      {
       "q": "这件衣服的价格怎么样？",
       "qvi": "Giá chiếc áo này thế nào?",
       "scene": "👔💰",
       "ans": "价格相当便宜仅五十元",
       "opts": [
        {
         "txt": "衣服在椅子上",
         "ico": "🪑",
         "py": "Yīfu zài yǐzi shàng"
        },
        {
         "txt": "价格相当便宜仅五十元",
         "ico": "💰",
         "py": "Jiàgé xiāngdāng piányi jǐn wǔ shí yuán"
        },
        {
         "txt": "这件衣服是黑色的",
         "ico": "⚫",
         "py": "Zhè jiàn yīfu shì hēisè de"
        }
       ],
       "qpy": "Zhè jiàn yīfu de jiàgé zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo thời gian và số lượng ước chừng cho đối tác",
      "steps": [
       "<b>Bước 1:</b> Hãy ước lượng 3 con số trong công việc của bạn (số người trong công ty, số ngày làm một việc, thời gian đi làm) và nói thành tiếng, ví dụ <i>\"我们公司有一百人左右\"</i>.",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin cho một đối tác để báo giờ đến, ví dụ <i>\"从这儿到机场大概要一个小时\"</i> hoặc <i>\"下午五点前后他恐怕到不了\"</i>.",
       "<b>Bước 3:</b> Trả lời câu hỏi của đối tác về thời hạn công việc bằng cách nói ước chừng, ví dụ <i>\"这个工作至少要三四天\"</i>, rồi tự ghi âm lại và nghe xem đã tránh dùng hai từ ước lượng cùng lúc chưa."
      ]
     }
    },
    {
     "id": "3.16C",
     "name": "Bài 3.16C: Xử lý và giải quyết vấn đề",
     "grammar": {
      "formulas": [
       "🧑 我们 + 👉 把 + 📌 这个问题 + ⚡ 解决了",
       "🧑 老板 + 👉 把 + 📌 这件事 + ⚡ 交给我处理"
      ],
      "tip": "Câu chữ 把 (bǎ, \"bả\"): chủ ngữ + 把 + tân ngữ xác định + động từ + thành phần khác (了, kết quả, nơi chốn). Tân ngữ sau 把 phải là sự vật đã xác định như 这个问题, và động từ không đứng trơ trọi mà phải có 了 hoặc bổ ngữ đi kèm.",
      "vn_tip": "Người Việt hay đặt tân ngữ sau động từ như tiếng Việt: nói \"我解决了这个问题\" vẫn được, nhưng khi muốn nhấn mạnh kết quả xử lý thì dùng 我把这个问题解决了. Lỗi thường gặp là bỏ 了 hoặc bổ ngữ: không nói 我把问题解决."
     },
     "chunks": [
      {
       "scene": "👥⚠️✅",
       "full": "我们把这个问题解决了",
       "vi": "Chúng tôi đã giải quyết xong vấn đề này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "把这个问题",
         "ico": "⚠️",
         "c": "v",
         "py": "bǎ zhè gè wèntí",
         "hv": "bả giá cá vấn đề"
        },
        {
         "t": "解决了",
         "ico": "✅",
         "c": "o",
         "py": "jiějué le",
         "hv": "giải quyết liễu"
        }
       ],
       "traceWord": "解决",
       "py": "Wǒmen bǎ zhè gè wèntí jiějué le",
       "traceKey": "jiejue",
       "traceInfo": [
        {
         "c": "解",
         "py": "jiě",
         "hv": "giải"
        },
        {
         "c": "决",
         "py": "jué",
         "hv": "quyết"
        }
       ]
      },
      {
       "scene": "👔📋🧑",
       "full": "老板把这件事交给我处理",
       "vi": "Sếp giao việc này cho tôi xử lý",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "把这件事交给",
         "ico": "📋",
         "c": "v",
         "py": "bǎ zhè jiàn shì jiāo gěi",
         "hv": "bả giá kiện sự giao cấp"
        },
        {
         "t": "我处理",
         "ico": "🧑",
         "c": "o",
         "py": "wǒ chǔlǐ",
         "hv": "ngã xử lý"
        }
       ],
       "traceWord": "处理",
       "py": "Lǎobǎn bǎ zhè jiàn shì jiāo gěi wǒ chǔlǐ",
       "traceKey": "chuli",
       "traceInfo": [
        {
         "c": "处",
         "py": "chǔ",
         "hv": "xử"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "🧑⏰⚠️",
       "full": "他把整个下午都花在这个问题上",
       "vi": "Anh ấy dành cả buổi chiều cho vấn đề này",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把整个下午",
         "ico": "⏰",
         "c": "v",
         "py": "bǎ zhěng gè xiàwǔ",
         "hv": "bả chỉnh cá hạ ngọ"
        },
        {
         "t": "都花在这个问题上",
         "ico": "⚠️",
         "c": "o",
         "py": "dōu huā zài zhè gè wèntí shàng",
         "hv": "đô hoa tại giá cá vấn đề thượng"
        }
       ],
       "traceWord": "整",
       "py": "Tā bǎ zhěng gè xiàwǔ dōu huā zài zhè gè wèntí shàng",
       "traceKey": "zheng",
       "traceInfo": [
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        }
       ]
      },
      {
       "scene": "👥💡📝",
       "full": "你们把想法分别写在纸上",
       "vi": "Các bạn hãy viết từng ý tưởng ra giấy",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nễ môn"
        },
        {
         "t": "把想法分别",
         "ico": "💡",
         "c": "v",
         "py": "bǎ xiǎngfǎ fēnbié",
         "hv": "bả tưởng pháp phân biệt"
        },
        {
         "t": "写在纸上",
         "ico": "📝",
         "c": "o",
         "py": "xiě zài zhǐ shàng",
         "hv": "tả tại chỉ thượng"
        }
       ],
       "traceWord": "分别",
       "py": "Nǐmen bǎ xiǎngfǎ fēnbié xiě zài zhǐ shàng",
       "traceKey": "fenbie",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "别",
         "py": "bié",
         "hv": "biệt"
        }
       ]
      },
      {
       "scene": "👥🤝🛠️",
       "full": "我们决定采取新的方式解决问题",
       "vi": "Chúng tôi quyết định áp dụng cách mới để giải quyết vấn đề",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "决定采取",
         "ico": "🤝",
         "c": "v",
         "py": "juédìng cǎiqǔ",
         "hv": "quyết định thái thủ"
        },
        {
         "t": "新的方式解决问题",
         "ico": "🛠️",
         "c": "o",
         "py": "xīn de fāngshì jiějué wèntí",
         "hv": "tân đích phương thức giải quyết vấn đề"
        }
       ],
       "traceWord": "方式",
       "py": "Wǒmen juédìng cǎiqǔ xīn de fāngshì jiějué wèntí",
       "traceKey": "fangshi",
       "traceInfo": [
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        },
        {
         "c": "式",
         "py": "shì",
         "hv": "thức"
        }
       ]
      },
      {
       "scene": "🧑⚠️✅",
       "full": "他把问题基本上解决了",
       "vi": "Anh ấy về cơ bản đã giải quyết xong vấn đề",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把问题",
         "ico": "⚠️",
         "c": "v",
         "py": "bǎ wèntí",
         "hv": "bả vấn đề"
        },
        {
         "t": "基本上解决了",
         "ico": "✅",
         "c": "o",
         "py": "jīběnshàng jiějué le",
         "hv": "cơ bản thượng giải quyết liễu"
        }
       ],
       "traceWord": "基本上",
       "py": "Tā bǎ wèntí jīběnshàng jiějué le",
       "traceKey": "jibenshang",
       "traceInfo": [
        {
         "c": "基",
         "py": "jī",
         "hv": "cơ"
        },
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        },
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🧑⏰💻",
       "full": "你要把时间好好利用起来",
       "vi": "Bạn phải tận dụng thật tốt thời gian",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要把时间",
         "ico": "⏰",
         "c": "v",
         "py": "yào bǎ shíjiān",
         "hv": "yếu bả thời gian"
        },
        {
         "t": "好好利用起来",
         "ico": "💪",
         "c": "o",
         "py": "hǎohǎo lìyòng qǐlái",
         "hv": "hảo hảo lợi dụng khởi lai"
        }
       ],
       "traceWord": "利用",
       "py": "Nǐ yào bǎ shíjiān hǎohǎo lìyòng qǐlái",
       "traceKey": "liyong",
       "traceInfo": [
        {
         "c": "利",
         "py": "lì",
         "hv": "lợi"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "👔💰🙋",
       "full": "老板把足够的钱交给了我",
       "vi": "Sếp đã giao đủ tiền cho tôi",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "把足够的钱",
         "ico": "💰",
         "c": "v",
         "py": "bǎ zúgòu de qián",
         "hv": "bả túc cấu đích tiền"
        },
        {
         "t": "交给了我",
         "ico": "🙋",
         "c": "o",
         "py": "jiāo gěi le wǒ",
         "hv": "giao cấp liễu ngã"
        }
       ],
       "traceWord": "足够",
       "py": "Lǎobǎn bǎ zúgòu de qián jiāo gěi le wǒ",
       "traceKey": "zugou",
       "traceInfo": [
        {
         "c": "足",
         "py": "zú",
         "hv": "túc"
        },
        {
         "c": "够",
         "py": "gòu",
         "hv": "cấu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个问题你们采用什么办法？",
       "qvi": "Vấn đề này các bạn dùng cách nào?",
       "scene": "👥🛠️",
       "ans": "我们采用最简单的办法",
       "opts": [
        {
         "txt": "我们明天去机场接客人",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù jīchǎng jiē kèrén"
        },
        {
         "txt": "我们采用最简单的办法",
         "ico": "🛠️",
         "py": "Wǒmen cǎiyòng zuì jiǎndān de bànfǎ"
        },
        {
         "txt": "她是我的女朋友",
         "ico": "👩",
         "py": "Tā shì wǒ de nǚpéngyou"
        }
       ],
       "qpy": "Zhè gè wèntí nǐmen cǎiyòng shénme bànfǎ?"
      },
      {
       "q": "谁来发动大家参加？",
       "qvi": "Ai sẽ vận động mọi người tham gia?",
       "scene": "👥📣",
       "ans": "王经理来发动大家",
       "opts": [
        {
         "txt": "我们坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒmen zuò dìtiě qù gōngsī"
        },
        {
         "txt": "他喜欢喝绿茶",
         "ico": "🍵",
         "py": "Tā xǐhuan hē lǜchá"
        },
        {
         "txt": "王经理来发动大家",
         "ico": "📣",
         "py": "Wáng jīnglǐ lái fādòng dàjiā"
        }
       ],
       "qpy": "Shéi lái fādòng dàjiā cānjiā?"
      },
      {
       "q": "这件事麻烦吗？",
       "qvi": "Việc này có phiền phức không?",
       "scene": "📋🤔",
       "ans": "不麻烦我今天就能处理完",
       "opts": [
        {
         "txt": "他是我的同事",
         "ico": "🧑",
         "py": "Tā shì wǒ de tóngshì"
        },
        {
         "txt": "明天会下大雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià dà yǔ"
        },
        {
         "txt": "不麻烦我今天就能处理完",
         "ico": "✅",
         "py": "Bù máfan wǒ jīntiān jiù néng chǔlǐ wán"
        }
       ],
       "qpy": "Zhè jiàn shì máfan ma?"
      },
      {
       "q": "问题解决了没有？",
       "qvi": "Vấn đề đã giải quyết xong chưa?",
       "scene": "⚠️❓",
       "ans": "基本解决了",
       "opts": [
        {
         "txt": "我想去商店买鞋",
         "ico": "👟",
         "py": "Wǒ xiǎng qù shāngdiàn mǎi xié"
        },
        {
         "txt": "基本解决了",
         "ico": "✅",
         "py": "Jīběn jiějué le"
        },
        {
         "txt": "那个人是医生",
         "ico": "🩺",
         "py": "Nà gè rén shì yīshēng"
        }
       ],
       "qpy": "Wèntí jiějué le méiyǒu?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo cách xử lý một sự cố công việc",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một sự cố nhỏ ở nơi làm việc (máy in hỏng, giao hàng chậm, khách phàn nàn) và nói thành tiếng cách bạn xử lý, ví dụ <i>\"我们把这个问题解决了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp phân công việc bằng câu chữ 把, ví dụ <i>\"你们把想法分别写在纸上\"</i> hoặc <i>\"老板把这件事交给我处理\"</i>.",
       "<b>Bước 3:</b> Báo cáo với sếp kết quả và cách làm, ví dụ <i>\"他把问题基本上解决了\"</i> và <i>\"我们决定采取新的方式解决问题\"</i>, rồi đổi sang một sự cố khác và nói lại."
      ]
     }
    }
   ]
  },
  "3.17": {
   "lessons": [
    {
     "id": "3.17A",
     "name": "Bài 3.17A: Trình bày quan điểm và đánh giá",
     "grammar": {
      "formulas": [
       "1️⃣ 一方面 + 🙂 我很忙",
       "2️⃣ 另一方面 + 😴 我很累",
       "👀 他 + 看起来 + 😴 很累"
      ],
      "tip": "Dùng 一方面……，另一方面…… (yīfāngmiàn, nhất phương diện) để nêu hai mặt của một vấn đề: \"một mặt ..., mặt khác ...\". 看起来 / 看上去 (kàn qǐlái / kàn shàngqù, khán khởi lai / khán thượng khứ) nghĩa là \"trông có vẻ\", đặt trước tính từ.",
      "vn_tip": "Người Việt hay nói \"mặt khác\" thành 别的方面. Cách đúng là 另一方面. Cũng đừng viết 看起来 sau tính từ: phải nói 他看起来很累, không nói 他很累看起来."
     },
     "chunks": [
      {
       "scene": "👨‍💼😴🌙",
       "full": "今天他看起来很累",
       "vi": "Hôm nay anh ấy trông có vẻ rất mệt",
       "parts": [
        {
         "t": "今天他",
         "ico": "👨‍💼",
         "c": "s",
         "py": "jīntiān tā",
         "hv": "kim thiên tha"
        },
        {
         "t": "看起来",
         "ico": "👀",
         "c": "v",
         "py": "kàn qǐlái",
         "hv": "khán khởi lai"
        },
        {
         "t": "很累",
         "ico": "😴",
         "c": "o",
         "py": "hěn lèi",
         "hv": "ngận lụy"
        }
       ],
       "traceWord": "看起来",
       "py": "Jīntiān tā kàn qǐlái hěn lèi",
       "traceKey": "kanqilai",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
        },
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
      },
      {
       "scene": "💡📋👀",
       "full": "这个办法看上去很简单",
       "vi": "Cách này trông có vẻ rất đơn giản",
       "parts": [
        {
         "t": "这个办法",
         "ico": "💡",
         "c": "s",
         "py": "zhè gè bànfǎ",
         "hv": "giá cá biện pháp"
        },
        {
         "t": "看上去",
         "ico": "👀",
         "c": "v",
         "py": "kàn shàngqù",
         "hv": "khán thượng khứ"
        },
        {
         "t": "很简单",
         "ico": "👍",
         "c": "o",
         "py": "hěn jiǎndān",
         "hv": "ngận giản đơn"
        }
       ],
       "traceWord": "看上去",
       "py": "Zhè gè bànfǎ kàn shàngqù hěn jiǎndān",
       "traceKey": "kanshangqu",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
        },
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      },
      {
       "scene": "👨‍💼🎁⭐",
       "full": "老板给了我客观的评价",
       "vi": "Sếp đã cho tôi một đánh giá khách quan",
       "parts": [
        {
         "t": "老板",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "给了我",
         "ico": "🎁",
         "c": "v",
         "py": "gěi le wǒ",
         "hv": "cấp liễu ngã"
        },
        {
         "t": "客观的评价",
         "ico": "⭐",
         "c": "o",
         "py": "kèguān de píngjià",
         "hv": "khách quan đích bình giá"
        }
       ],
       "traceWord": "评价",
       "py": "Lǎobǎn gěi le wǒ kèguān de píngjià",
       "traceKey": "pingjia",
       "traceInfo": [
        {
         "c": "评",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "🙋‍♂️📅🏢",
       "full": "我除了周末都上班",
       "vi": "Trừ cuối tuần ra, tôi đều đi làm",
       "parts": [
        {
         "t": "我",
         "ico": "🙋‍♂️",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "除了周末都",
         "ico": "📅",
         "c": "v",
         "py": "chúle zhōumò dōu",
         "hv": "trừ liễu chu mạt đô"
        },
        {
         "t": "上班",
         "ico": "🏢",
         "c": "o",
         "py": "shàngbān",
         "hv": "thượng ban"
        }
       ],
       "traceWord": "除了",
       "py": "Wǒ chúle zhōumò dōu shàngbān",
       "traceKey": "chule",
       "traceInfo": [
        {
         "c": "除",
         "py": "chú",
         "hv": "trừ"
        },
        {
         "c": "了",
         "py": "le",
         "hv": "liễu"
        }
       ]
      },
      {
       "scene": "😅⚖️😴",
       "full": "一方面我很忙另一方面我很累",
       "vi": "Một mặt tôi rất bận, mặt khác tôi rất mệt",
       "parts": [
        {
         "t": "一方面我很忙",
         "ico": "😅",
         "c": "s",
         "py": "yīfāngmiàn wǒ hěn máng",
         "hv": "nhất phương diện ngã ngận mang"
        },
        {
         "t": "另一方面",
         "ico": "⚖️",
         "c": "v",
         "py": "lìng yīfāngmiàn",
         "hv": "lánh nhất phương diện"
        },
        {
         "t": "我很累",
         "ico": "😴",
         "c": "o",
         "py": "wǒ hěn lèi",
         "hv": "ngã ngận lụy"
        }
       ],
       "traceWord": "另一方面",
       "py": "Yīfāngmiàn wǒ hěn máng lìng yīfāngmiàn wǒ hěn lèi",
       "traceKey": "lingyifangmian",
       "traceInfo": [
        {
         "c": "另",
         "py": "lìng",
         "hv": "lánh"
        },
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "方",
         "py": "fāng",
         "hv": "phương"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "👨🙅💭",
       "full": "他显然不会否定这个判断",
       "vi": "Rõ ràng là anh ấy sẽ không phủ nhận nhận định này",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "显然不会否定",
         "ico": "🙅",
         "c": "v",
         "py": "xiǎnrán bú huì fǒudìng",
         "hv": "hiển nhiên bất hội phủ định"
        },
        {
         "t": "这个判断",
         "ico": "💭",
         "c": "o",
         "py": "zhè gè pànduàn",
         "hv": "giá cá phán đoạn"
        }
       ],
       "traceWord": "否定",
       "py": "Tā xiǎnrán bú huì fǒudìng zhè gè pànduàn",
       "traceKey": "fouding",
       "traceInfo": [
        {
         "c": "否",
         "py": "fǒu",
         "hv": "phủ"
        },
        {
         "c": "定",
         "py": "dìng",
         "hv": "định"
        }
       ]
      },
      {
       "scene": "🏢✨📐",
       "full": "这个新办公室显得很大",
       "vi": "Văn phòng mới này trông rất rộng",
       "parts": [
        {
         "t": "这个新办公室",
         "ico": "🏢",
         "c": "s",
         "py": "zhè gè xīn bàngōngshì",
         "hv": "giá cá tân biện công thất"
        },
        {
         "t": "显得",
         "ico": "✨",
         "c": "v",
         "py": "xiǎnde",
         "hv": "hiển đắc"
        },
        {
         "t": "很大",
         "ico": "📐",
         "c": "o",
         "py": "hěn dà",
         "hv": "ngận đại"
        }
       ],
       "traceWord": "显得",
       "py": "Zhè gè xīn bàngōngshì xiǎnde hěn dà",
       "traceKey": "xiande",
       "traceInfo": [
        {
         "c": "显",
         "py": "xiǎn",
         "hv": "hiển"
        },
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "🛒💰🤝",
       "full": "首先要看价格其次要看服务",
       "vi": "Trước hết phải xem giá cả, thứ hai phải xem dịch vụ",
       "parts": [
        {
         "t": "首先要看价格",
         "ico": "💰",
         "c": "s",
         "py": "shǒuxiān yào kàn jiàgé",
         "hv": "thủ tiên yếu khán giá cách"
        },
        {
         "t": "其次",
         "ico": "2️⃣",
         "c": "v",
         "py": "qícì",
         "hv": "kỳ thứ"
        },
        {
         "t": "要看服务",
         "ico": "🤝",
         "c": "o",
         "py": "yào kàn fúwù",
         "hv": "yếu khán phục vụ"
        }
       ],
       "traceWord": "其次",
       "py": "Shǒuxiān yào kàn jiàgé qícì yào kàn fúwù",
       "traceKey": "qici",
       "traceInfo": [
        {
         "c": "其",
         "py": "qí",
         "hv": "kỳ"
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
       "q": "这两个办法有什么区别？",
       "qvi": "Hai cách này khác nhau chỗ nào?",
       "scene": "💡💡❓",
       "ans": "一个便宜一个贵",
       "opts": [
        {
         "txt": "一个便宜一个贵",
         "ico": "💰",
         "py": "Yī gè piányi yī gè guì"
        },
        {
         "txt": "我明天去上班",
         "ico": "🏢",
         "py": "Wǒ míngtiān qù shàngbān"
        },
        {
         "txt": "他们都在北京",
         "ico": "🏙️",
         "py": "Tāmen dōu zài Běijīng"
        }
       ],
       "qpy": "Zhè liǎng gè bànfǎ yǒu shénme qūbié?"
      },
      {
       "q": "你觉得这件事如何？",
       "qvi": "Bạn thấy chuyện này thế nào?",
       "scene": "🧑💭📋",
       "ans": "我觉得结果必然很好",
       "opts": [
        {
         "txt": "我昨天去过北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù guò Běijīng"
        },
        {
         "txt": "我觉得结果必然很好",
         "ico": "👍",
         "py": "Wǒ juéde jiéguǒ bìrán hěn hǎo"
        },
        {
         "txt": "她是我的同事",
         "ico": "👩‍💼",
         "py": "Tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Nǐ juéde zhè jiàn shì rúhé?"
      },
      {
       "q": "你另外还有什么意见？",
       "qvi": "Ngoài ra bạn còn ý kiến gì không?",
       "scene": "🧑💬➕",
       "ans": "另外我想回家休息",
       "opts": [
        {
         "txt": "我很喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ hěn xǐhuan hē chá"
        },
        {
         "txt": "这个包子很好吃",
         "ico": "🥟",
         "py": "Zhè gè bāozi hěn hǎochī"
        },
        {
         "txt": "另外我想回家休息",
         "ico": "🏠",
         "py": "Lìngwài wǒ xiǎng huí jiā xiūxi"
        }
       ],
       "qpy": "Nǐ lìngwài hái yǒu shénme yìjiàn?"
      },
      {
       "q": "这家饭馆的服务怎么样？",
       "qvi": "Dịch vụ của quán này thế nào?",
       "scene": "🍜🤝⭐",
       "ans": "服务很好价格也便宜",
       "opts": [
        {
         "txt": "我们明天去开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān qù kāihuì"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "服务很好价格也便宜",
         "ico": "👍",
         "py": "Fúwù hěn hǎo jiàgé yě piányi"
        }
       ],
       "qpy": "Zhè jiā fànguǎn de fúwù zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Góp ý đánh giá trong cuộc họp",
      "steps": [
       "<b>Bước 1:</b> Chọn một dự án hoặc sản phẩm ở chỗ làm, tự nói thành tiếng cảm nhận ban đầu: <i>\"这个办法看上去很简单\"</i>.",
       "<b>Bước 2:</b> Nêu hai mặt của vấn đề bằng cấu trúc <i>\"一方面……，另一方面……\"</i> (ưu điểm và hạn chế).",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp trình bày đánh giá: dùng <i>\"首先……，其次……\"</i> để sắp xếp ý, rồi đề nghị họ góp ý."
      ]
     }
    },
    {
     "id": "3.17B",
     "name": "Bài 3.17B: Nguyên nhân, điều kiện và kết quả",
     "grammar": {
      "formulas": [
       "🧑 他 + ➕ 不仅 + 🗣️ 会说英语",
       "➕ 还 / 而且 + 🇨🇳 会说中文",
       "🌧️ 由于 + 下雨 + ➡️ 只好 + 取消"
      ],
      "tip": "Cấu trúc 不仅/不光……，还/而且/并且…… (bùjǐn/bùguāng, bất cận/bất quang) nghĩa là \"không chỉ ... mà còn\". Vế sau thường có 还, 而且 hoặc 并且. 由于……因此…… (yóuyú, do vu; yīncǐ, nhân thử) chỉ nguyên nhân và kết quả.",
      "vn_tip": "Người Việt hay bỏ 还/而且 ở vế sau, nói thiếu ý \"mà còn\". Cách đúng: 他不仅会说英语，还会说中文. Ngoài ra 不仅 đứng trước động từ/tính từ, nếu hai vế khác chủ ngữ thì 不仅 đứng trước chủ ngữ."
     },
     "chunks": [
      {
       "scene": "🧑🗣️🇬🇧",
       "full": "他不仅会说英语还会说中文",
       "vi": "Anh ấy không chỉ biết nói tiếng Anh mà còn biết nói tiếng Trung",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不仅会说英语",
         "ico": "🇬🇧",
         "c": "v",
         "py": "bùjǐn huì shuō Yīngyǔ",
         "hv": "bất cận hội thuyết anh ngữ"
        },
        {
         "t": "还会说中文",
         "ico": "🇨🇳",
         "c": "o",
         "py": "hái huì shuō Zhōngwén",
         "hv": "hoàn hội thuyết trung văn"
        }
       ],
       "traceWord": "不仅",
       "py": "Tā bùjǐn huì shuō Yīngyǔ hái huì shuō Zhōngwén",
       "traceKey": "bujin",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "仅",
         "py": "jǐn",
         "hv": "cận"
        }
       ]
      },
      {
       "scene": "🏪💰✨",
       "full": "这家店不光便宜而且很干净",
       "vi": "Cửa hàng này không chỉ rẻ mà còn rất sạch",
       "parts": [
        {
         "t": "这家店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā diàn",
         "hv": "giá gia điếm"
        },
        {
         "t": "不光便宜",
         "ico": "💰",
         "c": "v",
         "py": "bùguāng piányi",
         "hv": "bất quang tiện nghi"
        },
        {
         "t": "而且很干净",
         "ico": "✨",
         "c": "o",
         "py": "érqiě hěn gānjìng",
         "hv": "nhi thả ngận can tịnh"
        }
       ],
       "traceWord": "不光",
       "py": "Zhè jiā diàn bùguāng piányi érqiě hěn gānjìng",
       "traceKey": "buguang",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "光",
         "py": "guāng",
         "hv": "quang"
        }
       ]
      },
      {
       "scene": "🧑🚶🎁",
       "full": "他不仅来了并且带来了礼物",
       "vi": "Anh ấy không chỉ đến mà còn mang theo quà",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不仅来了",
         "ico": "🚶",
         "c": "v",
         "py": "bùjǐn lái le",
         "hv": "bất cận lai liễu"
        },
        {
         "t": "并且带来了礼物",
         "ico": "🎁",
         "c": "o",
         "py": "bìngqiě dàilái le lǐwù",
         "hv": "tịnh thả đới lai liễu lễ vật"
        }
       ],
       "traceWord": "并且",
       "py": "Tā bùjǐn lái le bìngqiě dàilái le lǐwù",
       "traceKey": "bingqie",
       "traceInfo": [
        {
         "c": "并",
         "py": "bìng",
         "hv": "tịnh"
        },
        {
         "c": "且",
         "py": "qiě",
         "hv": "thả"
        }
       ]
      },
      {
       "scene": "🌧️⚽❌",
       "full": "比赛由于下雨只好取消",
       "vi": "Trận đấu vì trời mưa nên đành hủy",
       "parts": [
        {
         "t": "比赛",
         "ico": "⚽",
         "c": "s",
         "py": "bǐsài",
         "hv": "tỷ tái"
        },
        {
         "t": "由于下雨",
         "ico": "🌧️",
         "c": "v",
         "py": "yóuyú xià yǔ",
         "hv": "do vu hạ vũ"
        },
        {
         "t": "只好取消",
         "ico": "❌",
         "c": "o",
         "py": "zhǐhǎo qǔxiāo",
         "hv": "chỉ hảo thủ tiêu"
        }
       ],
       "traceWord": "由于",
       "py": "Bǐsài yóuyú xià yǔ zhǐhǎo qǔxiāo",
       "traceKey": "youyu",
       "traceInfo": [
        {
         "c": "由",
         "py": "yóu",
         "hv": "do"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "💪🧑🏆",
       "full": "他很努力因此终于成功了",
       "vi": "Anh ấy rất cố gắng nên cuối cùng đã thành công",
       "parts": [
        {
         "t": "他很努力",
         "ico": "💪",
         "c": "s",
         "py": "tā hěn nǔlì",
         "hv": "tha ngận nỗ lực"
        },
        {
         "t": "因此",
         "ico": "➡️",
         "c": "v",
         "py": "yīncǐ",
         "hv": "nhân thử"
        },
        {
         "t": "终于成功了",
         "ico": "🏆",
         "c": "o",
         "py": "zhōngyú chénggōng le",
         "hv": "chung vu thành công liễu"
        }
       ],
       "traceWord": "终于",
       "py": "Tā hěn nǔlì yīncǐ zhōngyú chénggōng le",
       "traceKey": "zhongyu",
       "traceInfo": [
        {
         "c": "终",
         "py": "zhōng",
         "hv": "chung"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "🧑❤️🍺❌",
       "full": "他为了健康不喝啤酒",
       "vi": "Vì sức khỏe, anh ấy không uống bia",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "为了健康不喝",
         "ico": "❤️",
         "c": "v",
         "py": "wèile jiànkāng bù hē",
         "hv": "vị liễu kiện khang bất hát"
        },
        {
         "t": "啤酒",
         "ico": "🍺",
         "c": "o",
         "py": "píjiǔ",
         "hv": "bi tửu"
        }
       ],
       "traceWord": "为了",
       "py": "Tā wèile jiànkāng bù hē píjiǔ",
       "traceKey": "weile",
       "traceInfo": [
        {
         "c": "为",
         "py": "wèi",
         "hv": "vị"
        },
        {
         "c": "了",
         "py": "le",
         "hv": "liễu"
        }
       ]
      },
      {
       "scene": "☀️🌧️⛰️",
       "full": "不论天气好坏我们都去爬山",
       "vi": "Bất kể thời tiết tốt xấu, chúng tôi đều đi leo núi",
       "parts": [
        {
         "t": "不论天气好坏",
         "ico": "☀️",
         "c": "s",
         "py": "bùlùn tiānqì hǎo huài",
         "hv": "bất luận thiên khí hảo hoại"
        },
        {
         "t": "我们都",
         "ico": "👫",
         "c": "v",
         "py": "wǒmen dōu",
         "hv": "ngã môn đô"
        },
        {
         "t": "去爬山",
         "ico": "⛰️",
         "c": "o",
         "py": "qù pá shān",
         "hv": "khứ ba sơn"
        }
       ],
       "traceWord": "不论",
       "py": "Bùlùn tiānqì hǎo huài wǒmen dōu qù pá shān",
       "traceKey": "bulun",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "论",
         "py": "lùn",
         "hv": "luận"
        }
       ]
      },
      {
       "scene": "🗣️🙅‍♂️👍",
       "full": "任你怎么说我都不同意",
       "vi": "Dù bạn nói thế nào tôi cũng không đồng ý",
       "parts": [
        {
         "t": "任你怎么说",
         "ico": "🗣️",
         "c": "s",
         "py": "rèn nǐ zěnme shuō",
         "hv": "nhiệm nễ chẩm ma thuyết"
        },
        {
         "t": "我",
         "ico": "🙅‍♂️",
         "c": "v",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "都不同意",
         "ico": "👎",
         "c": "o",
         "py": "dōu bù tóngyì",
         "hv": "đô bất đồng ý"
        }
       ],
       "traceWord": "任",
       "py": "Rèn nǐ zěnme shuō wǒ dōu bù tóngyì",
       "traceKey": "ren",
       "traceInfo": [
        {
         "c": "任",
         "py": "rèn",
         "hv": "nhiệm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你有什么理由不去爬山？",
       "qvi": "Bạn có lý do gì mà không đi leo núi?",
       "scene": "🧑⛰️❓",
       "ans": "我不是不想去只是太累了",
       "opts": [
        {
         "txt": "我明天要去北京",
         "ico": "🏙️",
         "py": "Wǒ míngtiān yào qù Běijīng"
        },
        {
         "txt": "我不是不想去只是太累了",
         "ico": "😴",
         "py": "Wǒ bú shì bù xiǎng qù zhǐshì tài lèi le"
        },
        {
         "txt": "这本书很有意思",
         "ico": "📖",
         "py": "Zhè běn shū hěn yǒu yìsi"
        }
       ],
       "qpy": "Nǐ yǒu shénme lǐyóu bú qù pá shān?"
      },
      {
       "q": "这次旅行谁来决定？",
       "qvi": "Chuyến du lịch lần này ai quyết định?",
       "scene": "✈️👨‍💼❓",
       "ans": "这次旅行由经理决定",
       "opts": [
        {
         "txt": "我们坐火车去",
         "ico": "🚆",
         "py": "Wǒmen zuò huǒchē qù"
        },
        {
         "txt": "我哥哥在银行工作",
         "ico": "🏦",
         "py": "Wǒ gēge zài yínháng gōngzuò"
        },
        {
         "txt": "这次旅行由经理决定",
         "ico": "👨‍💼",
         "py": "Zhè cì lǚxíng yóu jīnglǐ juédìng"
        }
       ],
       "qpy": "Zhè cì lǚxíng shéi lái juédìng?"
      },
      {
       "q": "这家饭店怎么样？",
       "qvi": "Nhà hàng này thế nào?",
       "scene": "🍽️🏨❓",
       "ans": "这里什么都好就是太贵了",
       "opts": [
        {
         "txt": "这里什么都好就是太贵了",
         "ico": "💰",
         "py": "Zhèlǐ shénme dōu hǎo jiùshì tài guì le"
        },
        {
         "txt": "我昨天没有去",
         "ico": "🙅",
         "py": "Wǒ zuótiān méiyǒu qù"
        },
        {
         "txt": "他是小王的朋友",
         "ico": "🧑‍🤝‍🧑",
         "py": "Tā shì Xiǎowáng de péngyou"
        }
       ],
       "qpy": "Zhè jiā fàndiàn zěnmeyàng?"
      },
      {
       "q": "他的话对你有什么影响？",
       "qvi": "Lời anh ấy nói ảnh hưởng gì đến bạn?",
       "scene": "🗣️💡🧑",
       "ans": "他的话使我产生了新的想法",
       "opts": [
        {
         "txt": "我们明天去开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān qù kāihuì"
        },
        {
         "txt": "这个杯子是红色的",
         "ico": "☕",
         "py": "Zhè gè bēizi shì hóngsè de"
        },
        {
         "txt": "他的话使我产生了新的想法",
         "ico": "💡",
         "py": "Tā dehuà shǐ wǒ chǎnshēng le xīn de xiǎngfǎ"
        }
       ],
       "qpy": "Tā dehuà duì nǐ yǒu shénme yǐngxiǎng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích lý do với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một kế hoạch bị thay đổi gần đây (họp, chuyến đi, buổi hẹn). Nói thành tiếng lý do: <i>\"由于下雨，我们只好取消\"</i>.",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin cho đồng nghiệp, khen một dịch vụ hay địa điểm bằng <i>\"不仅……，还……\"</i> (ví dụ quán ăn gần công ty).",
       "<b>Bước 3:</b> Hẹn lại lịch và nói điều kiện của bạn bằng <i>\"不论……我们都……\"</i>, rồi kết thúc bằng <i>\"因此……\"</i>."
      ]
     }
    },
    {
     "id": "3.17C",
     "name": "Bài 3.17C: Nhấn mạnh thái độ và nhận định",
     "grammar": {
      "formulas": [
       "❓ 你 + 不是 + 说 + 今天开会吗？",
       "🤔 难道 + 你 + 不想去吗？",
       "💬 他 + 其实 + 并不想去"
      ],
      "tip": "Câu hỏi tu từ dùng 不是……吗？ và 难道……吗？ (nándào, nan đạo) để nhấn mạnh điều mình cho là đúng, không phải để hỏi thật. 难道 thường đứng trước chủ ngữ hoặc vị ngữ và kết thúc bằng 吗. 并 (bìng, tịnh) đứng trước 不/没 để phủ định mạnh hơn.",
      "vn_tip": "Người Việt hay dịch \"chẳng lẽ\" thành 难道 nhưng quên 吗 ở cuối câu. Cách đúng: 难道你不想去吗？ Ngoài ra 并 chỉ đi với phủ định: nói 他并不想去, không nói 他并想去."
     },
     "chunks": [
      {
       "scene": "🤔🧑❌",
       "full": "难道你不想去吗",
       "vi": "Chẳng lẽ bạn không muốn đi sao?",
       "parts": [
        {
         "t": "难道",
         "ico": "🤔",
         "c": "v",
         "py": "nándào",
         "hv": "nan đạo"
        },
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "不想去吗",
         "ico": "❌",
         "c": "o",
         "py": "bù xiǎng qù ma",
         "hv": "bất tưởng khứ ma"
        }
       ],
       "traceWord": "难道",
       "py": "Nándào nǐ bù xiǎng qù ma",
       "traceKey": "nandao",
       "traceInfo": [
        {
         "c": "难",
         "py": "nán",
         "hv": "nan"
        },
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "🧑💬👌",
       "full": "你不是说反正都可以吗",
       "vi": "Chẳng phải bạn nói dù sao cũng được sao?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "不是说",
         "ico": "💬",
         "c": "v",
         "py": "bú shì shuō",
         "hv": "bất thị thuyết"
        },
        {
         "t": "反正都可以吗",
         "ico": "👌",
         "c": "o",
         "py": "fǎnzhèng dōu kěyǐ ma",
         "hv": "phản chính đô khả dĩ ma"
        }
       ],
       "traceWord": "反正",
       "py": "Nǐ bú shì shuō fǎnzhèng dōu kěyǐ ma",
       "traceKey": "fanzheng",
       "traceInfo": [
        {
         "c": "反",
         "py": "fǎn",
         "hv": "phản"
        },
        {
         "c": "正",
         "py": "zhèng",
         "hv": "chính"
        }
       ]
      },
      {
       "scene": "🧑🍜❓",
       "full": "你到底想吃什么",
       "vi": "Rốt cuộc bạn muốn ăn gì?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "到底想",
         "ico": "🤔",
         "c": "v",
         "py": "dàodǐ xiǎng",
         "hv": "đáo để tưởng"
        },
        {
         "t": "吃什么",
         "ico": "🍜",
         "c": "o",
         "py": "chī shénme",
         "hv": "cật thập ma"
        }
       ],
       "traceWord": "到底",
       "py": "Nǐ dàodǐ xiǎng chī shénme",
       "traceKey": "daodi",
       "traceInfo": [
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        },
        {
         "c": "底",
         "py": "dǐ",
         "hv": "để"
        }
       ]
      },
      {
       "scene": "🧑😠❓",
       "full": "你干吗这么生气",
       "vi": "Sao bạn lại tức giận thế?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "干吗",
         "ico": "❓",
         "c": "v",
         "py": "gànmá",
         "hv": "cán ma"
        },
        {
         "t": "这么生气",
         "ico": "😠",
         "c": "o",
         "py": "zhème shēngqì",
         "hv": "giá ma sinh khí"
        }
       ],
       "traceWord": "干吗",
       "py": "Nǐ gànmá zhème shēngqì",
       "traceKey": "ganma",
       "traceInfo": [
        {
         "c": "干",
         "py": "gàn",
         "hv": "cán"
        },
        {
         "c": "吗",
         "py": "má",
         "hv": "ma"
        }
       ]
      },
      {
       "scene": "🧑🙅📋",
       "full": "他根本不知道这件事",
       "vi": "Anh ấy hoàn toàn không biết chuyện này",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "根本不知道",
         "ico": "🙅",
         "c": "v",
         "py": "gēnběn bù zhīdào",
         "hv": "căn bản bất tri đạo"
        },
        {
         "t": "这件事",
         "ico": "📋",
         "c": "o",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        }
       ],
       "traceWord": "根本",
       "py": "Tā gēnběn bù zhīdào zhè jiàn shì",
       "traceKey": "genben",
       "traceInfo": [
        {
         "c": "根",
         "py": "gēn",
         "hv": "căn"
        },
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "🍽️😋🏠",
       "full": "这里的菜果然好吃简直像家里一样",
       "vi": "Món ăn ở đây quả nhiên ngon, quả thực giống như ở nhà",
       "parts": [
        {
         "t": "这里的菜",
         "ico": "🍽️",
         "c": "s",
         "py": "zhèlǐ de cài",
         "hv": "giá lý đích thái"
        },
        {
         "t": "果然好吃",
         "ico": "😋",
         "c": "v",
         "py": "guǒrán hǎochī",
         "hv": "quả nhiên hảo cật"
        },
        {
         "t": "简直像家里一样",
         "ico": "🏠",
         "c": "o",
         "py": "jiǎnzhí xiàng jiā li yīyàng",
         "hv": "giản trực tượng gia lý nhất dạng"
        }
       ],
       "traceWord": "果然",
       "py": "Zhèlǐ de cài guǒrán hǎochī jiǎnzhí xiàng jiā li yīyàng",
       "traceKey": "guoran",
       "traceInfo": [
        {
         "c": "果",
         "py": "guǒ",
         "hv": "quả"
        },
        {
         "c": "然",
         "py": "rán",
         "hv": "nhiên"
        }
       ]
      },
      {
       "scene": "👨‍💼💬👍",
       "full": "连经理都说他绝对没问题",
       "vi": "Đến giám đốc cũng nói anh ấy tuyệt đối không có vấn đề",
       "parts": [
        {
         "t": "连经理",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lián jīnglǐ",
         "hv": "liên kinh lý"
        },
        {
         "t": "都说",
         "ico": "💬",
         "c": "v",
         "py": "dōu shuō",
         "hv": "đô thuyết"
        },
        {
         "t": "他绝对没问题",
         "ico": "👍",
         "c": "o",
         "py": "tā juéduì méi wèntí",
         "hv": "tha tuyệt đối một vấn đề"
        }
       ],
       "traceWord": "绝对",
       "py": "Lián jīnglǐ dōu shuō tā juéduì méi wèntí",
       "traceKey": "juedui",
       "traceInfo": [
        {
         "c": "绝",
         "py": "jué",
         "hv": "tuyệt"
        },
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        }
       ]
      },
      {
       "scene": "🧑🤷🚫",
       "full": "他其实并不想去",
       "vi": "Thật ra anh ấy không hề muốn đi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "其实",
         "ico": "💡",
         "c": "v",
         "py": "qíshí",
         "hv": "kỳ thực"
        },
        {
         "t": "并不想去",
         "ico": "🚫",
         "c": "o",
         "py": "bìng bù xiǎng qù",
         "hv": "tịnh bất tưởng khứ"
        }
       ],
       "traceWord": "其实",
       "py": "Tā qíshí bìng bù xiǎng qù",
       "traceKey": "qishi",
       "traceInfo": [
        {
         "c": "其",
         "py": "qí",
         "hv": "kỳ"
        },
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个办法确实有用吗？",
       "qvi": "Cách này có thật sự hữu ích không?",
       "scene": "💡✅❓",
       "ans": "当然有用",
       "opts": [
        {
         "txt": "我在北京工作",
         "ico": "🏢",
         "py": "Wǒ zài Běijīng gōngzuò"
        },
        {
         "txt": "当然有用",
         "ico": "✅",
         "py": "Dāngrán yǒuyòng"
        },
        {
         "txt": "他有两个孩子",
         "ico": "👧",
         "py": "Tā yǒu liǎng gè háizi"
        }
       ],
       "qpy": "Zhè gè bànfǎ quèshí yǒuyòng ma?"
      },
      {
       "q": "明天开会你千万别忘记，好吗？",
       "qvi": "Mai họp bạn nhất định đừng quên nhé?",
       "scene": "📅⚠️🧑",
       "ans": "好的我不会忘记",
       "opts": [
        {
         "txt": "我昨天去过北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù guò Běijīng"
        },
        {
         "txt": "这个包很便宜",
         "ico": "👜",
         "py": "Zhè gè bāo hěn piányi"
        },
        {
         "txt": "好的我不会忘记",
         "ico": "👌",
         "py": "Hǎo de wǒ bú huì wàngjì"
        }
       ],
       "qpy": "Míngtiān kāihuì nǐ qiānwàn bié wàngjì hǎo ma?"
      },
      {
       "q": "他的汉语怎么样？",
       "qvi": "Tiếng Trung của anh ấy thế nào?",
       "scene": "🧑🇨🇳❓",
       "ans": "实际上他说得很流利",
       "opts": [
        {
         "txt": "她是我们的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        },
        {
         "txt": "实际上他说得很流利",
         "ico": "🗣️",
         "py": "Shíjìshàng tā shuō de hěn liúlì"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Tā de Hànyǔ zěnmeyàng?"
      },
      {
       "q": "你为什么还没走？",
       "qvi": "Sao bạn vẫn chưa đi?",
       "scene": "🧑⏰❓",
       "ans": "事实上我白等了一个小时",
       "opts": [
        {
         "txt": "我想买一个手机",
         "ico": "📱",
         "py": "Wǒ xiǎng mǎi yī gè shǒujī"
        },
        {
         "txt": "他们在公园里玩儿",
         "ico": "🌳",
         "py": "Tāmen zài gōngyuán lǐ wánr"
        },
        {
         "txt": "事实上我白等了一个小时",
         "ico": "⏰",
         "py": "Shìshíshang wǒ bái děng le yī gè xiǎoshí"
        }
       ],
       "qpy": "Nǐ wèi shénme hái méi zǒu?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bày tỏ thái độ với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một lần đồng nghiệp hiểu sai ý bạn. Nói thành tiếng lời nhắc nhẹ nhàng: <i>\"你不是说反正都可以吗？\"</i>.",
       "<b>Bước 2:</b> Gọi điện hỏi đối tác một việc còn chưa rõ, dùng <i>\"你到底想……？\"</i> và <i>\"难道……吗？\"</i> với giọng lịch sự.",
       "<b>Bước 3:</b> Nhắn tin xác nhận cuộc hẹn tuần sau, nhấn mạnh bằng <i>\"千万别忘记\"</i> và <i>\"当然可以\"</i>."
      ]
     }
    }
   ]
  },
  "3.18": {
   "lessons": [
    {
     "id": "3.18A",
     "name": "Bài 3.18A: Cảm xúc và tâm trạng",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 怕 + 📅 明天的会议开得不好",
       "🧑 他 + ⚡ 觉得 + 😟 很紧张",
       "👥 大家 + 😄 哈哈地 + ⚡ 笑了"
      ],
      "tip": "Từ tượng thanh 哈哈 (hāhā, cười ha ha) thường đi với 地 trước động từ: 哈哈地笑 (cười ha hả). Cảm xúc thường dùng 很 + tính từ (很紧张, 很伤心) hoặc 有点儿 + tính từ (有点儿害怕) khi nhẹ hơn.",
      "vn_tip": "Người Việt hay nói \"我很怕\" cho mọi trường hợp. Khi chỉ hơi lo, hãy dùng 有点儿害怕; còn 哈哈 chỉ là tiếng cười, không dùng làm tính từ như \"vui\"."
     },
     "chunks": [
      {
       "scene": "👨‍💼😰📋",
       "full": "他今天看起来很紧张",
       "vi": "Hôm nay anh ấy trông rất căng thẳng",
       "parts": [
        {
         "t": "他今天",
         "ico": "👨‍💼",
         "c": "s",
         "py": "tā jīntiān",
         "hv": "tha kim thiên"
        },
        {
         "t": "看起来",
         "ico": "👀",
         "c": "v",
         "py": "kàn qǐlái",
         "hv": "khán khởi lai"
        },
        {
         "t": "很紧张",
         "ico": "😰",
         "c": "o",
         "py": "hěn jǐnzhāng",
         "hv": "ngận khẩn trương"
        }
       ],
       "traceWord": "紧张",
       "py": "Tā jīntiān kàn qǐlái hěn jǐnzhāng",
       "traceKey": "jinzhang",
       "traceInfo": [
        {
         "c": "紧",
         "py": "jǐn",
         "hv": "khẩn"
        },
        {
         "c": "张",
         "py": "zhāng",
         "hv": "trương"
        }
       ]
      },
      {
       "scene": "📰😢💔",
       "full": "我听到这个消息很伤心",
       "vi": "Nghe tin này tôi rất buồn",
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
         "t": "这个消息很伤心",
         "ico": "😢",
         "c": "o",
         "py": "zhè gè xiāoxi hěn shāngxīn",
         "hv": "giá cá tiêu tức ngận thương tâm"
        }
       ],
       "traceWord": "伤心",
       "py": "Wǒ tīngdào zhè gè xiāoxi hěn shāngxīn",
       "traceKey": "shangxin",
       "traceInfo": [
        {
         "c": "伤",
         "py": "shāng",
         "hv": "thương"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "🧑🤔❓",
       "full": "我好奇他为什么不来",
       "vi": "Tôi tò mò tại sao anh ấy không đến",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "好奇",
         "ico": "🤔",
         "c": "v",
         "py": "hàoqí",
         "hv": "hiếu kỳ"
        },
        {
         "t": "他为什么不来",
         "ico": "❓",
         "c": "o",
         "py": "tā wèi shénme bù lái",
         "hv": "tha vị thập ma bất lai"
        }
       ],
       "traceWord": "好奇",
       "py": "Wǒ hàoqí tā wèi shénme bù lái",
       "traceKey": "haoqi",
       "traceInfo": [
        {
         "c": "好",
         "py": "hào",
         "hv": "hiếu"
        },
        {
         "c": "奇",
         "py": "qí",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "🧑😟📅",
       "full": "我怕明天的会议开得不好",
       "vi": "Tôi sợ cuộc họp ngày mai diễn ra không tốt",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "怕",
         "ico": "😨",
         "c": "v",
         "py": "pà",
         "hv": "phạ"
        },
        {
         "t": "明天的会议开得不好",
         "ico": "📅",
         "c": "o",
         "py": "míngtiān de huìyì kāi de bù hǎo",
         "hv": "minh thiên đích hội nghị khai đắc bất hảo"
        }
       ],
       "traceWord": "怕",
       "py": "Wǒ pà míngtiān de huìyì kāi de bù hǎo",
       "traceKey": "pa",
       "traceInfo": [
        {
         "c": "怕",
         "py": "pà",
         "hv": "phạ"
        }
       ]
      },
      {
       "scene": "💬🤨😮",
       "full": "他今天的话让我觉得很奇怪",
       "vi": "Lời anh ấy hôm nay khiến tôi thấy rất lạ",
       "parts": [
        {
         "t": "他今天的话",
         "ico": "💬",
         "c": "s",
         "py": "tā jīntiān dehuà",
         "hv": "tha kim thiên đích thoại"
        },
        {
         "t": "让我觉得",
         "ico": "🤔",
         "c": "v",
         "py": "ràng wǒ juéde",
         "hv": "nhượng ngã giác đắc"
        },
        {
         "t": "很奇怪",
         "ico": "🤨",
         "c": "o",
         "py": "hěn qíguài",
         "hv": "ngận kỳ quái"
        }
       ],
       "traceWord": "奇怪",
       "py": "Tā jīntiān dehuà ràng wǒ juéde hěn qíguài",
       "traceKey": "qiguai",
       "traceInfo": [
        {
         "c": "奇",
         "py": "qí",
         "hv": "kỳ"
        },
        {
         "c": "怪",
         "py": "guài",
         "hv": "quái"
        }
       ]
      },
      {
       "scene": "👩‍⚕️🧓❤️",
       "full": "医生对病人充满爱心",
       "vi": "Bác sĩ đầy lòng yêu thương với bệnh nhân",
       "parts": [
        {
         "t": "医生",
         "ico": "👩‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "对病人充满",
         "ico": "🏥",
         "c": "v",
         "py": "duì bìngrén chōngmǎn",
         "hv": "đối bệnh nhân sung mãn"
        },
        {
         "t": "爱心",
         "ico": "❤️",
         "c": "o",
         "py": "àixīn",
         "hv": "ái tâm"
        }
       ],
       "traceWord": "爱心",
       "py": "Yīshēng duì bìngrén chōngmǎn àixīn",
       "traceKey": "aixin",
       "traceInfo": [
        {
         "c": "爱",
         "py": "ài",
         "hv": "ái"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "🗣️☕🥰",
       "full": "朋友的话让我心里很温暖",
       "vi": "Lời của bạn làm lòng tôi rất ấm áp",
       "parts": [
        {
         "t": "朋友的话",
         "ico": "🗣️",
         "c": "s",
         "py": "péngyou dehuà",
         "hv": "bằng hữu đích thoại"
        },
        {
         "t": "让我",
         "ico": "👉",
         "c": "v",
         "py": "ràng wǒ",
         "hv": "nhượng ngã"
        },
        {
         "t": "心里很温暖",
         "ico": "🥰",
         "c": "o",
         "py": "xīnlǐ hěn wēnnuǎn",
         "hv": "tâm lý ngận ôn noãn"
        }
       ],
       "traceWord": "温暖",
       "py": "Péngyou dehuà ràng wǒ xīnlǐ hěn wēnnuǎn",
       "traceKey": "wennuan",
       "traceInfo": [
        {
         "c": "温",
         "py": "wēn",
         "hv": "ôn"
        },
        {
         "c": "暖",
         "py": "nuǎn",
         "hv": "noãn"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧😂🤣",
       "full": "大家听到笑话就哈哈地笑了",
       "vi": "Mọi người nghe chuyện cười là cười ha hả",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "听到",
         "ico": "👂",
         "c": "v",
         "py": "tīngdào",
         "hv": "thính đáo"
        },
        {
         "t": "笑话就哈哈地笑了",
         "ico": "🤣",
         "c": "o",
         "py": "xiàohua jiù hāhā de xiào le",
         "hv": "tiếu thoại tựu cáp cáp địa tiếu liễu"
        }
       ],
       "traceWord": "哈哈",
       "py": "Dàjiā tīngdào xiàohua jiù hāhā de xiào le",
       "traceKey": "haha",
       "traceInfo": [
        {
         "c": "哈",
         "py": "hā",
         "hv": "cáp"
        },
        {
         "c": "哈",
         "py": "hā",
         "hv": "cáp"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你最近为什么心里不安？",
       "qvi": "Dạo này sao trong lòng bạn bất an vậy?",
       "scene": "🧑😟",
       "ans": "因为明天有重要的考试",
       "opts": [
        {
         "txt": "因为今天天气很好",
         "ico": "☀️",
         "py": "Yīnwèi jīntiān tiānqì hěn hǎo"
        },
        {
         "txt": "因为明天有重要的考试",
         "ico": "📝",
         "py": "Yīnwèi míngtiān yǒu zhòngyào de kǎoshì"
        },
        {
         "txt": "因为我喜欢喝咖啡",
         "ico": "☕",
         "py": "Yīnwèi wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ zuìjìn wèi shénme xīnlǐ bù'ān?"
      },
      {
       "q": "你对现在的工作满意吗？",
       "qvi": "Bạn có hài lòng với công việc hiện tại không?",
       "scene": "💼🙂",
       "ans": "我对现在的工作很满足",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "🚄",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "他的手机是新的",
         "ico": "📱",
         "py": "Tā de shǒujī shì xīn de"
        },
        {
         "txt": "我对现在的工作很满足",
         "ico": "😌",
         "py": "Wǒ duì xiànzài de gōngzuò hěn mǎnzú"
        }
       ],
       "qpy": "Nǐ duì xiànzài de gōngzuò mǎnyì ma?"
      },
      {
       "q": "你一个人在家害怕吗？",
       "qvi": "Bạn ở nhà một mình có sợ không?",
       "scene": "🏠😨",
       "ans": "是的，我很害怕",
       "opts": [
        {
         "txt": "我的心很暖和",
         "ico": "🥰",
         "py": "Wǒ de xīn hěn nuǎnhuo"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "是的，我很害怕",
         "ico": "😨",
         "py": "Shì de wǒ hěn hàipà"
        }
       ],
       "qpy": "Nǐ yī gè rén zàijiā hàipà ma?"
      },
      {
       "q": "你为什么这么努力学习？",
       "qvi": "Sao bạn học chăm chỉ thế?",
       "scene": "📚🔥",
       "ans": "因为我内心有强烈的愿望",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为我内心有强烈的愿望",
         "ico": "🔥",
         "py": "Yīnwèi wǒ nèixīn yǒu qiángliè de yuànwàng"
        },
        {
         "txt": "因为这杯茶很甜",
         "ico": "🍵",
         "py": "Yīnwèi zhè bēi chá hěn tián"
        }
       ],
       "qpy": "Nǐ wèi shénme zhème nǔlì xuéxí?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chia sẻ cảm xúc với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hôm nay bạn có một buổi họp hoặc phỏng vấn quan trọng. Nhắn cho đồng nghiệp thân: <i>\"我怕明天的会议开得不好\"</i> rồi nói thêm bạn đang <i>\"有点儿紧张\"</i>.",
       "<b>Bước 2:</b> Đồng nghiệp động viên bạn. Hãy đáp lại bằng một câu về cảm giác của mình, ví dụ <i>\"朋友的话让我心里很温暖\"</i>.",
       "<b>Bước 3:</b> Sau buổi họp, kể lại tâm trạng với đồng nghiệp: dùng <i>\"哈哈\"</i> khi cười và nói một câu cảm xúc bằng tiếng Trung, tự nói thành tiếng 3 lần."
      ]
     }
    },
    {
     "id": "3.18B",
     "name": "Bài 3.18B: Tính cách, ưu điểm và nhược điểm",
     "grammar": {
      "formulas": [
       "🧑 他 + 🧠 性格 + ✅ 很好",
       "👩 她 + 💪 个性 + ✅ 很强",
       "👤 我们经理 + 🧠 头脑 + ✅ 很清楚"
      ],
      "tip": "Câu vị ngữ chủ–vị: chủ đề lớn + (chủ ngữ nhỏ + tính từ). Ví dụ 她个性很强 (tā gèxìng hěn qiáng): cả cụm \"个性很强\" làm vị ngữ cho 她. Từ khóa: 性格 (xìnggé, tính cách), 个性 (cá tính), 优点 (ưu điểm), 缺点 (khuyết điểm).",
      "vn_tip": "Người Việt hay nói \"他是性格很好\" hoặc \"他很性格好\". Cách đúng: 他性格很好, không dùng 是 và đặt 很 ngay trước tính từ."
     },
     "chunks": [
      {
       "scene": "🧑‍💼😊👍",
       "full": "我的同事性格很好",
       "vi": "Đồng nghiệp của tôi tính cách rất tốt",
       "parts": [
        {
         "t": "我的同事",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "wǒ de tóngshì",
         "hv": "ngã đích đồng sự"
        },
        {
         "t": "性格",
         "ico": "🧠",
         "c": "v",
         "py": "xìnggé",
         "hv": "tính cách"
        },
        {
         "t": "很好",
         "ico": "👍",
         "c": "o",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        }
       ],
       "traceWord": "性格",
       "py": "Wǒ de tóngshì xìnggé hěn hǎo",
       "traceKey": "xingge",
       "traceInfo": [
        {
         "c": "性",
         "py": "xìng",
         "hv": "tính"
        },
        {
         "c": "格",
         "py": "gé",
         "hv": "cách"
        }
       ]
      },
      {
       "scene": "👩‍💼💪🔥",
       "full": "我们经理个性很强",
       "vi": "Giám đốc của chúng tôi cá tính rất mạnh",
       "parts": [
        {
         "t": "我们经理",
         "ico": "👩‍💼",
         "c": "s",
         "py": "wǒmen jīnglǐ",
         "hv": "ngã môn kinh lý"
        },
        {
         "t": "个性",
         "ico": "🧠",
         "c": "v",
         "py": "gèxìng",
         "hv": "cá tính"
        },
        {
         "t": "很强",
         "ico": "💪",
         "c": "o",
         "py": "hěn qiáng",
         "hv": "ngận cường"
        }
       ],
       "traceWord": "个性",
       "py": "Wǒmen jīnglǐ gèxìng hěn qiáng",
       "traceKey": "gexing",
       "traceInfo": [
        {
         "c": "个",
         "py": "gè",
         "hv": "cá"
        },
        {
         "c": "性",
         "py": "xìng",
         "hv": "tính"
        }
       ]
      },
      {
       "scene": "🧑‍💻💡🧠",
       "full": "小王工作的时候头脑很清楚",
       "vi": "Tiểu Vương khi làm việc đầu óc rất minh mẫn",
       "parts": [
        {
         "t": "小王工作的时候",
         "ico": "🧑‍💻",
         "c": "s",
         "py": "Xiǎowáng gōngzuò de shíhou",
         "hv": "tiểu vương công tác đích thời hậu"
        },
        {
         "t": "头脑",
         "ico": "🧠",
         "c": "v",
         "py": "tóunǎo",
         "hv": "đầu não"
        },
        {
         "t": "很清楚",
         "ico": "💡",
         "c": "o",
         "py": "hěn qīngchu",
         "hv": "ngận thanh sở"
        }
       ],
       "traceWord": "头脑",
       "py": "Xiǎowáng gōngzuò de shíhou tóunǎo hěn qīngchu",
       "traceKey": "tounao",
       "traceInfo": [
        {
         "c": "头",
         "py": "tóu",
         "hv": "đầu"
        },
        {
         "c": "脑",
         "py": "nǎo",
         "hv": "não"
        }
       ]
      },
      {
       "scene": "🧑😄🌈",
       "full": "他是一个很乐观的人",
       "vi": "Anh ấy là một người rất lạc quan",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
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
         "t": "一个很乐观的人",
         "ico": "🌈",
         "c": "o",
         "py": "yī gè hěn lèguān de rén",
         "hv": "nhất cá ngận lạc quan đích nhân"
        }
       ],
       "traceWord": "乐观",
       "py": "Tā shì yī gè hěn lèguān de rén",
       "traceKey": "leguan",
       "traceInfo": [
        {
         "c": "乐",
         "py": "lè",
         "hv": "lạc"
        },
        {
         "c": "观",
         "py": "guān",
         "hv": "quan"
        }
       ]
      },
      {
       "scene": "👨‍💼📈🏃",
       "full": "老板希望大家提高工作的积极性",
       "vi": "Sếp mong mọi người nâng cao tính tích cực trong công việc",
       "parts": [
        {
         "t": "老板",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "希望",
         "ico": "🙏",
         "c": "v",
         "py": "xīwàng",
         "hv": "hy vọng"
        },
        {
         "t": "大家提高工作的积极性",
         "ico": "📈",
         "c": "o",
         "py": "dàjiā tígāo gōngzuò de jījí xìng",
         "hv": "đại gia đề cao công tác đích tích cực tính"
        }
       ],
       "traceWord": "积极性",
       "py": "Lǎobǎn xīwàng dàjiā tígāo gōngzuò de jījí xìng",
       "traceKey": "jijixing",
       "traceInfo": [
        {
         "c": "积",
         "py": "jī",
         "hv": "tích"
        },
        {
         "c": "极",
         "py": "jí",
         "hv": "cực"
        },
        {
         "c": "性",
         "py": "xìng",
         "hv": "tính"
        }
       ]
      },
      {
       "scene": "👥✅❌",
       "full": "我们都有优点和缺点",
       "vi": "Chúng ta ai cũng có ưu điểm và khuyết điểm",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "都有",
         "ico": "☝️",
         "c": "v",
         "py": "dōu yǒu",
         "hv": "đô hữu"
        },
        {
         "t": "优点和缺点",
         "ico": "⚖️",
         "c": "o",
         "py": "yōudiǎn hé quēdiǎn",
         "hv": "ưu điểm hòa khuyết điểm"
        }
       ],
       "traceWord": "优点",
       "py": "Wǒmen dōu yǒu yōudiǎn hé quēdiǎn",
       "traceKey": "youdian",
       "traceInfo": [
        {
         "c": "优",
         "py": "yōu",
         "hv": "ưu"
        },
        {
         "c": "点",
         "py": "diǎn",
         "hv": "điểm"
        }
       ]
      },
      {
       "scene": "🧑‍🔧✨💼",
       "full": "他的长处是工作认真",
       "vi": "Điểm mạnh của anh ấy là làm việc nghiêm túc",
       "parts": [
        {
         "t": "他的长处",
         "ico": "🌟",
         "c": "s",
         "py": "tā de chángchù",
         "hv": "tha đích trường xứ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "工作认真",
         "ico": "💼",
         "c": "o",
         "py": "gōngzuò rènzhēn",
         "hv": "công tác nhận chân"
        }
       ],
       "traceWord": "长处",
       "py": "Tā de chángchù shì gōngzuò rènzhēn",
       "traceKey": "changchu",
       "traceInfo": [
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        },
        {
         "c": "处",
         "py": "chù",
         "hv": "xứ"
        }
       ]
      },
      {
       "scene": "🧑🪞📝",
       "full": "你要知道自己的短处",
       "vi": "Bạn cần biết điểm yếu của bản thân",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要知道",
         "ico": "💡",
         "c": "v",
         "py": "yào zhīdào",
         "hv": "yếu tri đạo"
        },
        {
         "t": "自己的短处",
         "ico": "🪞",
         "c": "o",
         "py": "zìjǐ de duǎnchù",
         "hv": "tự kỷ đích đoản xứ"
        }
       ],
       "traceWord": "短处",
       "py": "Nǐ yào zhīdào zìjǐ de duǎnchù",
       "traceKey": "duanchu",
       "traceInfo": [
        {
         "c": "短",
         "py": "duǎn",
         "hv": "đoản"
        },
        {
         "c": "处",
         "py": "chù",
         "hv": "xứ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你今天为什么这么有精神？",
       "qvi": "Hôm nay sao bạn tràn đầy sức sống thế?",
       "scene": "🧑⚡😄",
       "ans": "因为我昨天睡得很好",
       "opts": [
        {
         "txt": "因为我昨天病了",
         "ico": "🤒",
         "py": "Yīnwèi wǒ zuótiān bìng le"
        },
        {
         "txt": "因为我昨天睡得很好",
         "ico": "😴",
         "py": "Yīnwèi wǒ zuótiān shuì de hěn hǎo"
        },
        {
         "txt": "因为我很累",
         "ico": "😩",
         "py": "Yīnwèi wǒ hěn lèi"
        }
       ],
       "qpy": "Nǐ jīntiān wèi shénme zhème yǒu jīngshén?"
      },
      {
       "q": "她做的菜很好吃，她手巧吗？",
       "qvi": "Món cô ấy nấu rất ngon, cô ấy khéo tay không?",
       "scene": "👩‍🍳🍲",
       "ans": "是的，她的手很巧",
       "opts": [
        {
         "txt": "她明天去上海",
         "ico": "🚄",
         "py": "Tā míngtiān qù Shànghǎi"
        },
        {
         "txt": "是的，她的手很巧",
         "ico": "🙌",
         "py": "Shì de tā de shǒu hěn qiǎo"
        },
        {
         "txt": "我不喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ bù xǐhuan hē chá"
        }
       ],
       "qpy": "Tā zuò de cài hěn hǎochī tā shǒu qiǎo ma?"
      },
      {
       "q": "你觉得他是什么样的人？",
       "qvi": "Bạn thấy anh ấy là người thế nào?",
       "scene": "🧑❓",
       "ans": "我觉得他很积极也很乐观",
       "opts": [
        {
         "txt": "我觉得这本书很贵",
         "ico": "📖",
         "py": "Wǒ juéde zhè běn shū hěn guì"
        },
        {
         "txt": "我觉得他是我的弟弟",
         "ico": "👦",
         "py": "Wǒ juéde tā shì wǒ de dìdi"
        },
        {
         "txt": "我觉得他很积极也很乐观",
         "ico": "😄",
         "py": "Wǒ juéde tā hěn jījí yě hěn lèguān"
        }
       ],
       "qpy": "Nǐ juéde tā shì shénmeyàng de rén?"
      },
      {
       "q": "你觉得自己有什么优点？",
       "qvi": "Bạn thấy mình có ưu điểm gì?",
       "scene": "🧑🌟",
       "ans": "我工作认真，也爱帮助别人",
       "opts": [
        {
         "txt": "我工作认真，也爱帮助别人",
         "ico": "🤝",
         "py": "Wǒ gōngzuò rènzhēn yě ài bāngzhù biérén"
        },
        {
         "txt": "我昨天去了公司",
         "ico": "🏢",
         "py": "Wǒ zuótiān qù le gōngsī"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Nǐ juéde zìjǐ yǒu shénme yōudiǎn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tự giới thiệu điểm mạnh trong buổi phỏng vấn",
      "steps": [
       "<b>Bước 1:</b> Hãy tưởng tượng bạn đang phỏng vấn xin việc. Mở đầu bằng cách nói về tính cách của mình: <i>\"我性格很好，也很乐观\"</i>.",
       "<b>Bước 2:</b> Nhà tuyển dụng hỏi về điểm mạnh và điểm yếu. Trả lời: <i>\"我的长处是工作认真\"</i> và <i>\"我的短处是...\"</i> (tự điền một nhược điểm thật của bạn).",
       "<b>Bước 3:</b> Nhắn tin cho một đồng nghiệp, nhận xét tính cách của sếp hoặc bạn bè bằng câu chủ–vị như <i>\"我们经理个性很强\"</i>, rồi tự nói thành tiếng 3 câu về người thân."
      ]
     }
    },
    {
     "id": "3.18C",
     "name": "Bài 3.18C: Quan hệ giữa người với người và thái độ",
     "grammar": {
      "formulas": [
       "🧑 我 + 🤔 觉得 + 👤 他很可靠",
       "🧑 我 + 💡 知道 + 👤 小李工作很主动",
       "🧑 我 + 🤔 觉得 + 🏢 公司应该好好对待员工"
      ],
      "tip": "Cụm chủ–vị làm tân ngữ: 我觉得 / 我知道 + một câu hoàn chỉnh (chủ ngữ + vị ngữ), không cần từ nối như \"rằng\". Ví dụ 我觉得他很可靠 (wǒ juéde tā hěn kěkào, tôi thấy anh ấy rất đáng tin).",
      "vn_tip": "Người Việt hay thêm 说 hoặc 是 vào giữa: \"我觉得是他很可靠\". Cách đúng: nói thẳng 我觉得他很可靠. Với 知道, phủ định đặt trước động từ chính trong mệnh đề sau, ví dụ 我知道他不认得这条路."
     },
     "chunks": [
      {
       "scene": "🧑👍🤝",
       "full": "我觉得小王很可靠",
       "vi": "Tôi thấy Tiểu Vương rất đáng tin cậy",
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
         "ico": "🤔",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "小王很可靠",
         "ico": "🤝",
         "c": "o",
         "py": "Xiǎowáng hěn kěkào",
         "hv": "tiểu vương ngận khả kháo"
        }
       ],
       "traceWord": "可靠",
       "py": "Wǒ juéde Xiǎowáng hěn kěkào",
       "traceKey": "kekao",
       "traceInfo": [
        {
         "c": "可",
         "py": "kě",
         "hv": "khả"
        },
        {
         "c": "靠",
         "py": "kào",
         "hv": "kháo"
        }
       ]
      },
      {
       "scene": "🧑💡🙋",
       "full": "我知道小李工作很主动",
       "vi": "Tôi biết Tiểu Lý làm việc rất chủ động",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "知道",
         "ico": "💡",
         "c": "v",
         "py": "zhīdào",
         "hv": "tri đạo"
        },
        {
         "t": "小李工作很主动",
         "ico": "🙋",
         "c": "o",
         "py": "Xiǎolǐ gōngzuò hěn zhǔdòng",
         "hv": "tiểu lý công tác ngận chủ động"
        }
       ],
       "traceWord": "主动",
       "py": "Wǒ zhīdào Xiǎolǐ gōngzuò hěn zhǔdòng",
       "traceKey": "zhudong",
       "traceInfo": [
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🍽️🔊😖",
       "full": "我觉得这家饭馆太吵了",
       "vi": "Tôi thấy quán ăn này ồn quá",
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
         "ico": "🤔",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "这家饭馆太吵了",
         "ico": "🔊",
         "c": "o",
         "py": "zhè jiā fànguǎn tài chǎo le",
         "hv": "giá gia phạn quán thái sảo liễu"
        }
       ],
       "traceWord": "吵",
       "py": "Wǒ juéde zhè jiā fànguǎn tài chǎo le",
       "traceKey": "chao",
       "traceInfo": [
        {
         "c": "吵",
         "py": "chǎo",
         "hv": "sảo"
        }
       ]
      },
      {
       "scene": "🛣️🧑👋",
       "full": "我在路上认出了一位熟人",
       "vi": "Tôi nhận ra một người quen trên đường",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "在路上认出了",
         "ico": "👀",
         "c": "v",
         "py": "zài lùshang rènchū le",
         "hv": "tại lộ thượng nhận xuất liễu"
        },
        {
         "t": "一位熟人",
         "ico": "🧑‍🤝‍🧑",
         "c": "o",
         "py": "yī wèi shúrén",
         "hv": "nhất vị thục nhân"
        }
       ],
       "traceWord": "认出",
       "py": "Wǒ zài lùshang rènchū le yī wèi shúrén",
       "traceKey": "renchu",
       "traceInfo": [
        {
         "c": "认",
         "py": "rèn",
         "hv": "nhận"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      },
      {
       "scene": "🧑🗺️🤷",
       "full": "我知道他不认得这条路",
       "vi": "Tôi biết anh ấy không nhận ra con đường này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "知道",
         "ico": "💡",
         "c": "v",
         "py": "zhīdào",
         "hv": "tri đạo"
        },
        {
         "t": "他不认得这条路",
         "ico": "🛣️",
         "c": "o",
         "py": "tā bú rènde zhè tiáo lù",
         "hv": "tha bất nhận đắc giá điều lộ"
        }
       ],
       "traceWord": "认得",
       "py": "Wǒ zhīdào tā bú rènde zhè tiáo lù",
       "traceKey": "rende",
       "traceInfo": [
        {
         "c": "认",
         "py": "rèn",
         "hv": "nhận"
        },
        {
         "c": "得",
         "py": "de",
         "hv": "đắc"
        }
       ]
      },
      {
       "scene": "🧑✊🚫",
       "full": "我知道他坚决反对这个计划",
       "vi": "Tôi biết anh ấy kiên quyết phản đối kế hoạch này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "知道",
         "ico": "💡",
         "c": "v",
         "py": "zhīdào",
         "hv": "tri đạo"
        },
        {
         "t": "他坚决反对这个计划",
         "ico": "✊",
         "c": "o",
         "py": "tā jiānjué fǎnduì zhè gè jìhuà",
         "hv": "tha kiên quyết phản đối giá cá kế hoạch"
        }
       ],
       "traceWord": "坚决",
       "py": "Wǒ zhīdào tā jiānjué fǎnduì zhè gè jìhuà",
       "traceKey": "jianjue",
       "traceInfo": [
        {
         "c": "坚",
         "py": "jiān",
         "hv": "kiên"
        },
        {
         "c": "决",
         "py": "jué",
         "hv": "quyết"
        }
       ]
      },
      {
       "scene": "🧑‍🎓📚🙂",
       "full": "我觉得年轻人应该自觉学习",
       "vi": "Tôi thấy người trẻ nên tự giác học tập",
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
         "ico": "🤔",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "年轻人应该自觉学习",
         "ico": "📚",
         "c": "o",
         "py": "niánqīng rén yīnggāi zìjué xuéxí",
         "hv": "niên khinh nhân ưng cai tự giác học tập"
        }
       ],
       "traceWord": "自觉",
       "py": "Wǒ juéde niánqīng rén yīnggāi zìjué xuéxí",
       "traceKey": "zijue",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "觉",
         "py": "jué",
         "hv": "giác"
        }
       ]
      },
      {
       "scene": "🏢🤝👥",
       "full": "我觉得公司应该好好对待员工",
       "vi": "Tôi thấy công ty nên đối xử tốt với nhân viên",
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
         "ico": "🤔",
         "c": "v",
         "py": "juéde",
         "hv": "giác đắc"
        },
        {
         "t": "公司应该好好对待员工",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī yīnggāi hǎohǎo duìdài yuángōng",
         "hv": "công ti ưng cai hảo hảo đối đãi viên công"
        }
       ],
       "traceWord": "对待",
       "py": "Wǒ juéde gōngsī yīnggāi hǎohǎo duìdài yuángōng",
       "traceKey": "duidai",
       "traceInfo": [
        {
         "c": "对",
         "py": "duì",
         "hv": "đối"
        },
        {
         "c": "待",
         "py": "dài",
         "hv": "đãi"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "他的奶奶去世了，你知道吗？",
       "qvi": "Bà của anh ấy mất rồi, bạn biết không?",
       "scene": "👵🕊️",
       "ans": "我知道他心里很难过",
       "opts": [
        {
         "txt": "我觉得这个手机很便宜",
         "ico": "📱",
         "py": "Wǒ juéde zhè gè shǒujī hěn piányi"
        },
        {
         "txt": "我知道他心里很难过",
         "ico": "😢",
         "py": "Wǒ zhīdào tā xīnlǐ hěn nánguò"
        },
        {
         "txt": "我知道明天要下雨",
         "ico": "🌧️",
         "py": "Wǒ zhīdào míngtiān yào xià yǔ"
        }
       ],
       "qpy": "Tā de nǎinai qùshì le nǐ zhīdào ma?"
      },
      {
       "q": "你想找什么样的对象？",
       "qvi": "Bạn muốn tìm người yêu như thế nào?",
       "scene": "🧑💞",
       "ans": "我想找年纪差不多的人",
       "opts": [
        {
         "txt": "我想找一份新工作",
         "ico": "💼",
         "py": "Wǒ xiǎng zhǎo yī fèn xīn gōngzuò"
        },
        {
         "txt": "我想去北京旅游",
         "ico": "🧳",
         "py": "Wǒ xiǎng qù Běijīng lǚyóu"
        },
        {
         "txt": "我想找年纪差不多的人",
         "ico": "💞",
         "py": "Wǒ xiǎng zhǎo niánjì chàbuduō de rén"
        }
       ],
       "qpy": "Nǐ xiǎng zhǎo shénmeyàng de duìxiàng?"
      },
      {
       "q": "你们的新经理怎么样？",
       "qvi": "Giám đốc mới của các bạn thế nào?",
       "scene": "👩‍💼🙂",
       "ans": "他对大家很亲切",
       "opts": [
        {
         "txt": "他明天去上海",
         "ico": "🚄",
         "py": "Tā míngtiān qù Shànghǎi"
        },
        {
         "txt": "他对大家很亲切",
         "ico": "🤗",
         "py": "Tā duì dàjiā hěn qīnqiè"
        },
        {
         "txt": "我和奶奶很亲",
         "ico": "👵",
         "py": "Wǒ hé nǎinai hěn qīn"
        }
       ],
       "qpy": "Nǐmen de xīn jīnglǐ zěnmeyàng?"
      },
      {
       "q": "你的公司让员工自主安排时间吗？",
       "qvi": "Công ty bạn có cho nhân viên tự chủ sắp xếp thời gian không?",
       "scene": "🏢⏰",
       "ans": "可以，老板让我们自己决定",
       "opts": [
        {
         "txt": "我们公司在上海",
         "ico": "🏙️",
         "py": "Wǒmen gōngsī zài Shànghǎi"
        },
        {
         "txt": "老板明天不在",
         "ico": "🚪",
         "py": "Lǎobǎn míngtiān bú zài"
        },
        {
         "txt": "可以，老板让我们自己决定",
         "ico": "✅",
         "py": "Kěyǐ lǎobǎn ràng wǒmen zìjǐ juédìng"
        }
       ],
       "qpy": "Nǐ de gōngsī ràng yuángōng zìzhǔ ānpái shíjiān ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận xét về đồng nghiệp và đối tác",
      "steps": [
       "<b>Bước 1:</b> Một đồng nghiệp mới hỏi bạn về người trong nhóm. Dùng cấu trúc 我觉得 / 我知道 để nhận xét: <i>\"我觉得小王很可靠\"</i>, <i>\"我知道小李工作很主动\"</i>.",
       "<b>Bước 2:</b> Khi gặp một người quen cũ ở sự kiện, hãy kể bằng tiếng Trung: <i>\"我在路上认出了一位熟人\"</i> và nói bạn thấy họ thế nào.",
       "<b>Bước 3:</b> Góp ý với sếp hoặc bạn bè về cách làm việc: <i>\"我觉得公司应该好好对待员工\"</i>. Tự nói thành tiếng 3 lần với 3 nhận xét khác nhau."
      ]
     }
    }
   ]
  },
  "3.19": {
   "lessons": [
    {
     "id": "3.19A",
     "name": "Bài 3.19A: Mốc thời gian và giai đoạn",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏳ 自从 + 📅 去年 + 以来 + 😓 一直很忙",
       "⏳ 自从 + 📅 开始工作 + 以来 + 🧑 我 + 很少休息"
      ],
      "tip": "自从 (zìcóng, tự tòng) + mốc thời gian + 以来 (yǐlái, dĩ lai) nghĩa là \"kể từ khi ... đến nay\". Phần sau thường có 一直, 都, 一直没有... để nói trạng thái kéo dài từ mốc đó.",
      "vn_tip": "Người Việt hay bỏ 以来 và chỉ nói \"自从去年我很忙\". Hãy nhớ đi theo cặp 自从……以来; đồng thời không dùng 了 ngay sau mốc quá khứ để chỉ trạng thái kéo dài."
     },
     "chunks": [
      {
       "scene": "📅⏳😓",
       "full": "我自从去年以来一直很忙",
       "vi": "Từ năm ngoái đến nay tôi luôn rất bận",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "自从去年以来",
         "ico": "⏳",
         "c": "v",
         "py": "zìcóng qùnián yǐlái",
         "hv": "tự tòng khứ niên dĩ lai"
        },
        {
         "t": "一直很忙",
         "ico": "😓",
         "c": "o",
         "py": "yīzhí hěn máng",
         "hv": "nhất trực ngận mang"
        }
       ],
       "traceWord": "自从",
       "py": "Wǒ zìcóng qùnián yǐlái yīzhí hěn máng",
       "traceKey": "zicong",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        }
       ]
      },
      {
       "scene": "💼⏳😴",
       "full": "我自从开始工作以来很少休息",
       "vi": "Từ khi bắt đầu đi làm đến nay tôi rất ít nghỉ ngơi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "自从开始工作以来",
         "ico": "💼",
         "c": "v",
         "py": "zìcóng kāishǐ gōngzuò yǐlái",
         "hv": "tự tòng khai thủy công tác dĩ lai"
        },
        {
         "t": "很少休息",
         "ico": "😴",
         "c": "o",
         "py": "hěn shǎo xiūxi",
         "hv": "ngận thiểu hưu tức"
        }
       ],
       "traceWord": "自从",
       "py": "Wǒ zìcóng kāishǐ gōngzuò yǐlái hěn shǎo xiūxi",
       "traceKey": "zicong",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        }
       ]
      },
      {
       "scene": "🕰️🚇🏙️",
       "full": "从前这里没有地铁站",
       "vi": "Trước đây ở đây không có ga tàu điện ngầm",
       "parts": [
        {
         "t": "从前这里",
         "ico": "🕰️",
         "c": "s",
         "py": "cóngqián zhèlǐ",
         "hv": "tòng tiền giá lý"
        },
        {
         "t": "没有",
         "ico": "🚫",
         "c": "v",
         "py": "méiyǒu",
         "hv": "một hữu"
        },
        {
         "t": "地铁站",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiězhàn",
         "hv": "địa thiết trạm"
        }
       ],
       "traceWord": "从前",
       "py": "Cóngqián zhèlǐ méiyǒu dìtiězhàn",
       "traceKey": "congqian",
       "traceInfo": [
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "📆🔄🏙️",
       "full": "过去的十年变化很大",
       "vi": "Mười năm qua thay đổi rất lớn",
       "parts": [
        {
         "t": "过去的十年",
         "ico": "📆",
         "c": "s",
         "py": "guòqù de shí nián",
         "hv": "quá khứ đích thập niên"
        },
        {
         "t": "变化",
         "ico": "🔄",
         "c": "v",
         "py": "biànhuà",
         "hv": "biến hóa"
        },
        {
         "t": "很大",
         "ico": "📈",
         "c": "o",
         "py": "hěn dà",
         "hv": "ngận đại"
        }
       ],
       "traceWord": "过去",
       "py": "Guòqù de shí nián biànhuà hěn dà",
       "traceKey": "guoqu",
       "traceInfo": [
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      },
      {
       "scene": "🔮🧑🏙️",
       "full": "我将来想去北京工作",
       "vi": "Sau này tôi muốn đến Bắc Kinh làm việc",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "将来想去",
         "ico": "🔮",
         "c": "v",
         "py": "jiānglái xiǎng qù",
         "hv": "tương lai tưởng khứ"
        },
        {
         "t": "北京工作",
         "ico": "🏙️",
         "c": "o",
         "py": "Běijīng gōngzuò",
         "hv": "bắc kinh công tác"
        }
       ],
       "traceWord": "将来",
       "py": "Wǒ jiānglái xiǎng qù Běijīng gōngzuò",
       "traceKey": "jianglai",
       "traceInfo": [
        {
         "c": "将",
         "py": "jiāng",
         "hv": "tương"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "📋📅🗓️",
       "full": "这个短期计划只有三个月",
       "vi": "Kế hoạch ngắn hạn này chỉ có ba tháng",
       "parts": [
        {
         "t": "这个短期计划",
         "ico": "📋",
         "c": "s",
         "py": "zhè gè duǎnqī jìhuà",
         "hv": "giá cá đoản kỳ kế hoạch"
        },
        {
         "t": "只有",
         "ico": "☝️",
         "c": "v",
         "py": "zhǐyǒu",
         "hv": "chỉ hữu"
        },
        {
         "t": "三个月",
         "ico": "🗓️",
         "c": "o",
         "py": "sān gè yuè",
         "hv": "tam cá nguyệt"
        }
       ],
       "traceWord": "短期",
       "py": "Zhè gè duǎnqī jìhuà zhǐyǒu sān gè yuè",
       "traceKey": "duanqi",
       "traceInfo": [
        {
         "c": "短",
         "py": "duǎn",
         "hv": "đoản"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "👥🌏💼",
       "full": "他们长期在国外工作",
       "vi": "Họ làm việc ở nước ngoài trong thời gian dài",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "长期在",
         "ico": "⏳",
         "c": "v",
         "py": "chángqī zài",
         "hv": "trường kỳ tại"
        },
        {
         "t": "国外工作",
         "ico": "🌏",
         "c": "o",
         "py": "guó wài gōngzuò",
         "hv": "quốc ngoại công tác"
        }
       ],
       "traceWord": "长期",
       "py": "Tāmen chángqī zài guó wài gōngzuò",
       "traceKey": "changqi",
       "traceInfo": [
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "🧑📆🎓",
       "full": "我想后年去国外留学",
       "vi": "Năm sau nữa tôi muốn đi du học nước ngoài",
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
         "t": "后年去国外留学",
         "ico": "🎓",
         "c": "o",
         "py": "hòunián qù guó wài liúxué",
         "hv": "hậu niên khứ quốc ngoại lưu học"
        }
       ],
       "traceWord": "后年",
       "py": "Wǒ xiǎng hòunián qù guó wài liúxué",
       "traceKey": "hounian",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你上班时常听什么？",
       "qvi": "Khi đi làm bạn hay nghe gì?",
       "scene": "🧑🎧",
       "ans": "我上班时常听音乐",
       "opts": [
        {
         "txt": "我们目前有很多工作",
         "ico": "💼",
         "py": "Wǒmen mùqián yǒu hěn duō gōngzuò"
        },
        {
         "txt": "我上班时常听音乐",
         "ico": "🎧",
         "py": "Wǒ shàngbān shí cháng tīng yīnyuè"
        },
        {
         "txt": "我当初在北京学中文",
         "ico": "📚",
         "py": "Wǒ dāngchū zài Běijīng xué Zhōngwén"
        }
       ],
       "qpy": "Nǐ shàngbān shí cháng tīng shénme?"
      },
      {
       "q": "你爸爸是哪个年代的人？",
       "qvi": "Bố bạn là người của thập niên nào?",
       "scene": "👨📆",
       "ans": "他是八十年代的人",
       "opts": [
        {
         "txt": "他在银行工作",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò"
        },
        {
         "txt": "我们是新时代的一代人",
         "ico": "👥",
         "py": "Wǒmen shì xīn shídài de yī dài rén"
        },
        {
         "txt": "他是八十年代的人",
         "ico": "📆",
         "py": "Tā shì bā shí niándài de rén"
        }
       ],
       "qpy": "Nǐ bàba shì nǎ gè niándài de rén?"
      },
      {
       "q": "现在是哪个世纪？",
       "qvi": "Bây giờ là thế kỷ nào?",
       "scene": "🕰️📅",
       "ans": "现在是二十一世纪",
       "opts": [
        {
         "txt": "现在是二十一世纪",
         "ico": "📅",
         "py": "Xiànzài shì èr shí yī shìjì"
        },
        {
         "txt": "我家在北京",
         "ico": "🏠",
         "py": "Wǒ jiā zài Běijīng"
        },
        {
         "txt": "我是越南人",
         "ico": "🇻🇳",
         "py": "Wǒ shì Yuènán rén"
        }
       ],
       "qpy": "Xiànzài shì nǎ gè shìjì?"
      },
      {
       "q": "你近期在做什么？",
       "qvi": "Gần đây bạn đang làm gì?",
       "scene": "🧑💼",
       "ans": "我目前在公司工作",
       "opts": [
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我目前在公司工作",
         "ico": "💼",
         "py": "Wǒ mùqián zài gōngsī gōngzuò"
        },
        {
         "txt": "这个很便宜",
         "ico": "💰",
         "py": "Zhè gè hěn piányi"
        }
       ],
       "qpy": "Nǐ jìnqī zài zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu quá trình làm việc với đối tác",
      "steps": [
       "<b>Bước 1:</b> Chọn một mốc thời gian trong cuộc sống (năm ngoái, lúc bắt đầu đi làm...) và nói thành tiếng 3 câu với <i>\"我自从……以来……\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đối tác tưởng tượng, kể công việc gần đây: <i>\"我们目前有很多工作\"</i> và <i>\"我想后年去国外留学\"</i> thay bằng kế hoạch của bạn.",
       "<b>Bước 3:</b> So sánh quá khứ và tương lai của công ty bạn bằng <i>\"从前……\"</i>, <i>\"过去的十年……\"</i> và <i>\"将来……\"</i>, ghi âm lại rồi nghe lại."
      ]
     }
    },
    {
     "id": "3.19B",
     "name": "Bài 3.19B: Quá trình: bắt đầu, tiếp tục, kết thúc",
     "grammar": {
      "formulas": [
       "🧑 我 + 1️⃣ 首先 + 🔧 打开电脑 + 2️⃣ 然后 + 💼 开始工作",
       "👥 我们 + 1️⃣ 首先 + 💬 讨论 + 2️⃣ 然后 + 🏁 结束会议"
      ],
      "tip": "首先……，然后…… (shǒuxiān... ránhòu..., thủ tiên... nhiên hậu) nối hai việc theo thứ tự: trước hết ..., sau đó .... Chủ ngữ thường đặt trước 首先; 然后 mở đầu việc thứ hai.",
      "vn_tip": "Người Việt hay nói \"đầu tiên\" rồi nối bằng 后来 hay 以后. Hãy dùng 然后 cho việc tiếp theo trong kế hoạch; 后来 chỉ dùng khi kể chuyện đã xảy ra trong quá khứ."
     },
     "chunks": [
      {
       "scene": "💻💼🕘",
       "full": "我首先打开电脑然后开始工作",
       "vi": "Trước hết tôi mở máy tính, sau đó bắt đầu làm việc",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "首先打开电脑",
         "ico": "💻",
         "c": "v",
         "py": "shǒuxiān dǎkāi diànnǎo",
         "hv": "thủ tiên đả khai điện não"
        },
        {
         "t": "然后开始工作",
         "ico": "💼",
         "c": "o",
         "py": "ránhòu kāishǐ gōngzuò",
         "hv": "nhiên hậu khai thủy công tác"
        }
       ],
       "traceWord": "开始",
       "py": "Wǒ shǒuxiān dǎkāi diànnǎo ránhòu kāishǐ gōngzuò",
       "traceKey": "kaishi",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "始",
         "py": "shǐ",
         "hv": "thủy"
        }
       ]
      },
      {
       "scene": "🛑💼😌",
       "full": "他首先停止工作然后休息一会儿",
       "vi": "Anh ấy trước hết dừng việc, sau đó nghỉ một lát",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "首先停止工作",
         "ico": "🛑",
         "c": "v",
         "py": "shǒuxiān tíngzhǐ gōngzuò",
         "hv": "thủ tiên đình chỉ công tác"
        },
        {
         "t": "然后休息一会儿",
         "ico": "😌",
         "c": "o",
         "py": "ránhòu xiūxi yīhuìr",
         "hv": "nhiên hậu hưu tức nhất hội nhi"
        }
       ],
       "traceWord": "停止",
       "py": "Tā shǒuxiān tíngzhǐ gōngzuò ránhòu xiūxi yīhuìr",
       "traceKey": "tingzhi",
       "traceInfo": [
        {
         "c": "停",
         "py": "tíng",
         "hv": "đình"
        },
        {
         "c": "止",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "👥🗣️➡️",
       "full": "我们首先开会然后继续讨论",
       "vi": "Chúng tôi trước hết họp, sau đó tiếp tục thảo luận",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "首先开会",
         "ico": "🗣️",
         "c": "v",
         "py": "shǒuxiān kāihuì",
         "hv": "thủ tiên khai hội"
        },
        {
         "t": "然后继续讨论",
         "ico": "➡️",
         "c": "o",
         "py": "ránhòu jìxù tǎolùn",
         "hv": "nhiên hậu kế tục thảo luận"
        }
       ],
       "traceWord": "继续",
       "py": "Wǒmen shǒuxiān kāihuì ránhòu jìxù tǎolùn",
       "traceKey": "jixu",
       "traceInfo": [
        {
         "c": "继",
         "py": "jì",
         "hv": "kế"
        },
        {
         "c": "续",
         "py": "xù",
         "hv": "tục"
        }
       ]
      },
      {
       "scene": "💬🏁📋",
       "full": "我们首先讨论然后结束会议",
       "vi": "Chúng tôi trước hết thảo luận, sau đó kết thúc cuộc họp",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "首先讨论",
         "ico": "💬",
         "c": "v",
         "py": "shǒuxiān tǎolùn",
         "hv": "thủ tiên thảo luận"
        },
        {
         "t": "然后结束会议",
         "ico": "🏁",
         "c": "o",
         "py": "ránhòu jiéshù huìyì",
         "hv": "nhiên hậu kết thúc hội nghị"
        }
       ],
       "traceWord": "结束",
       "py": "Wǒmen shǒuxiān tǎolùn ránhòu jiéshù huìyì",
       "traceKey": "jieshu",
       "traceInfo": [
        {
         "c": "结",
         "py": "jié",
         "hv": "kết"
        },
        {
         "c": "束",
         "py": "shù",
         "hv": "thúc"
        }
       ]
      },
      {
       "scene": "👩‍🏫📖🐢",
       "full": "老师首先听写然后让大家慢慢读",
       "vi": "Cô giáo trước hết đọc chính tả, sau đó cho mọi người đọc thật chậm",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "首先听写",
         "ico": "✍️",
         "c": "v",
         "py": "shǒuxiān tīngxiě",
         "hv": "thủ tiên thính tả"
        },
        {
         "t": "然后让大家慢慢读",
         "ico": "🐢",
         "c": "o",
         "py": "ránhòu ràng dàjiā mànmàn dú",
         "hv": "nhiên hậu nhượng đại gia mạn mạn độc"
        }
       ],
       "traceWord": "慢慢",
       "py": "Lǎoshī shǒuxiān tīngxiě ránhòu ràng dàjiā mànmàn dú",
       "traceKey": "manman",
       "traceInfo": [
        {
         "c": "慢",
         "py": "màn",
         "hv": "mạn"
        },
        {
         "c": "慢",
         "py": "màn",
         "hv": "mạn"
        }
       ]
      },
      {
       "scene": "🔍⚡🧑‍💼",
       "full": "我们首先检查然后及时告诉经理",
       "vi": "Chúng tôi trước hết kiểm tra, sau đó báo ngay cho giám đốc",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "首先检查",
         "ico": "🔍",
         "c": "v",
         "py": "shǒuxiān jiǎnchá",
         "hv": "thủ tiên kiểm tra"
        },
        {
         "t": "然后及时告诉经理",
         "ico": "⚡",
         "c": "o",
         "py": "ránhòu jíshí gàosu jīnglǐ",
         "hv": "nhiên hậu cập thời cáo tố kinh lý"
        }
       ],
       "traceWord": "及时",
       "py": "Wǒmen shǒuxiān jiǎnchá ránhòu jíshí gàosu jīnglǐ",
       "traceKey": "jishi",
       "traceInfo": [
        {
         "c": "及",
         "py": "jí",
         "hv": "cập"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      },
      {
       "scene": "🔁📝🏫",
       "full": "我们首先反复练习然后参加考试",
       "vi": "Chúng tôi trước hết luyện tập nhiều lần, sau đó đi thi",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "首先反复练习",
         "ico": "🔁",
         "c": "v",
         "py": "shǒuxiān fǎnfù liànxí",
         "hv": "thủ tiên phản phục luyện tập"
        },
        {
         "t": "然后参加考试",
         "ico": "📝",
         "c": "o",
         "py": "ránhòu cānjiā kǎoshì",
         "hv": "nhiên hậu tham gia khảo thí"
        }
       ],
       "traceWord": "反复",
       "py": "Wǒmen shǒuxiān fǎnfù liànxí ránhòu cānjiā kǎoshì",
       "traceKey": "fanfu",
       "traceInfo": [
        {
         "c": "反",
         "py": "fǎn",
         "hv": "phản"
        },
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "✍️📄🖨️",
       "full": "我首先重写这篇文章然后打印",
       "vi": "Trước hết tôi viết lại bài văn này, sau đó in ra",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "首先重写这篇文章",
         "ico": "✍️",
         "c": "v",
         "py": "shǒuxiān chóng xiě zhè piān wénzhāng",
         "hv": "thủ tiên trùng tả giá thiên văn chương"
        },
        {
         "t": "然后打印",
         "ico": "🖨️",
         "c": "o",
         "py": "ránhòu dǎyìn",
         "hv": "nhiên hậu đả ấn"
        }
       ],
       "traceWord": "重",
       "py": "Wǒ shǒuxiān chóng xiě zhè piān wénzhāng ránhòu dǎyìn",
       "traceKey": "zhong",
       "traceInfo": [
        {
         "c": "重",
         "py": "zhòng",
         "hv": "trọng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你昨天做什么了？",
       "qvi": "Hôm qua bạn đã làm gì?",
       "scene": "🧑📅",
       "ans": "我整天在家休息",
       "opts": [
        {
         "txt": "我整天在家休息",
         "ico": "🏠",
         "py": "Wǒ zhěngtiān zàijiā xiūxi"
        },
        {
         "txt": "我已经在公司很久了",
         "ico": "🏢",
         "py": "Wǒ yǐjīng zài gōngsī hěn jiǔ le"
        },
        {
         "txt": "他是我的同事",
         "ico": "👥",
         "py": "Tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Nǐ zuótiān zuò shénme le?"
      },
      {
       "q": "你们开了几天会？",
       "qvi": "Các bạn đã họp mấy ngày?",
       "scene": "👥🗣️📅",
       "ans": "我们连续开了三天会",
       "opts": [
        {
         "txt": "他时刻注意安全",
         "ico": "🦺",
         "py": "Tā shíkè zhùyì ānquán"
        },
        {
         "txt": "我们连续开了三天会",
         "ico": "🗣️",
         "py": "Wǒmen liánxù kāi le sān tiān huì"
        },
        {
         "txt": "我们已经吃饭了",
         "ico": "🍚",
         "py": "Wǒmen yǐjīng chīfàn le"
        }
       ],
       "qpy": "Nǐmen kāi le jǐ tiān huì?"
      },
      {
       "q": "公司的生意怎么样？",
       "qvi": "Việc làm ăn của công ty thế nào?",
       "scene": "🏢📈",
       "ans": "公司的生意不断变好",
       "opts": [
        {
         "txt": "我头一次来这里",
         "ico": "👋",
         "py": "Wǒ tóu yī cì lái zhèlǐ"
        },
        {
         "txt": "他连忙跑去开门",
         "ico": "🏃",
         "py": "Tā liánmáng pǎo qù kāi mén"
        },
        {
         "txt": "公司的生意不断变好",
         "ico": "📈",
         "py": "Gōngsī de shēngyi bùduàn biàn hǎo"
        }
       ],
       "qpy": "Gōngsī de shēngyi zěnmeyàng?"
      },
      {
       "q": "你们多久开一次会？",
       "qvi": "Bao lâu các bạn họp một lần?",
       "scene": "👥🗓️",
       "ans": "我们定期开会",
       "opts": [
        {
         "txt": "我们定期开会",
         "ico": "🗓️",
         "py": "Wǒmen dìngqī kāihuì"
        },
        {
         "txt": "我们很久没有见面了",
         "ico": "🤝",
         "py": "Wǒmen hěn jiǔ méiyǒu jiànmiàn le"
        },
        {
         "txt": "这是我的手机",
         "ico": "📱",
         "py": "Zhè shì wǒ de shǒujī"
        }
       ],
       "qpy": "Nǐmen duōjiǔ kāi yī cì huì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Sắp xếp quy trình một buổi họp",
      "steps": [
       "<b>Bước 1:</b> Viết ra 3 việc cần làm trong buổi họp tuần tới và nói theo thứ tự: <i>\"我们首先开会，然后继续讨论\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp tường thuật quy trình làm việc hằng ngày của bạn với <i>\"我首先……，然后……\"</i>.",
       "<b>Bước 3:</b> Gọi điện (hoặc tự nói) báo cáo với sếp kết quả công việc, dùng <i>\"我们首先检查，然后及时告诉经理\"</i> và <i>\"我们定期开会\"</i>."
      ]
     }
    },
    {
     "id": "3.19C",
     "name": "Bài 3.19C: Phó từ thời gian và tần suất",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏪ 曾经 + 🏙️ 在北京 + 🏠 住过",
       "👨 他 + 🚫 从来 + ❌ 没有 + 🙏 请过假",
       "🧑 我 + 📌 始终 + 💪 相信你们"
      ],
      "tip": "曾经 (céngjīng, tằng kinh) + động từ + 过 nói việc đã từng xảy ra; 从来 (cónglái, tòng lai) thường đi với 没(有) nghĩa là \"xưa nay chưa từng\"; 已/早已 (yǐ, zǎoyǐ, dĩ) nói việc đã xong từ trước; 始终 (shǐzhōng, thủy chung) là \"từ đầu đến cuối\".",
      "vn_tip": "Người Việt hay nói \"我从来去过\" khi muốn nói \"chưa từng\". Đúng là 我从来没去过; 从来 gần như luôn đi với phủ định (hoặc 从来都 + khẳng định thói quen)."
     },
     "chunks": [
      {
       "scene": "🧑🏙️🏠",
       "full": "我曾经在北京住过两年",
       "vi": "Tôi từng sống ở Bắc Kinh hai năm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "曾经在北京住过",
         "ico": "⏪",
         "c": "v",
         "py": "céngjīng zài Běijīng zhù guò",
         "hv": "tằng kinh tại bắc kinh trú quá"
        },
        {
         "t": "两年",
         "ico": "2️⃣",
         "c": "o",
         "py": "liǎng nián",
         "hv": "lưỡng niên"
        }
       ],
       "traceWord": "曾经",
       "py": "Wǒ céngjīng zài Běijīng zhù guò liǎng nián",
       "traceKey": "cengjing",
       "traceInfo": [
        {
         "c": "曾",
         "py": "céng",
         "hv": "tằng"
        },
        {
         "c": "经",
         "py": "jīng",
         "hv": "kinh"
        }
       ]
      },
      {
       "scene": "👨🙅📅",
       "full": "他从来没有请过假",
       "vi": "Anh ấy xưa nay chưa từng xin nghỉ",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从来没有",
         "ico": "🚫",
         "c": "v",
         "py": "cónglái méiyǒu",
         "hv": "tòng lai một hữu"
        },
        {
         "t": "请过假",
         "ico": "🙏",
         "c": "o",
         "py": "qǐng guò jiǎ",
         "hv": "thỉnh quá giả"
        }
       ],
       "traceWord": "从来",
       "py": "Tā cónglái méiyǒu qǐng guò jiǎ",
       "traceKey": "conglai",
       "traceInfo": [
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "🧑🏢📆",
       "full": "我已在这里工作三年了",
       "vi": "Tôi đã làm việc ở đây ba năm rồi",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "已在这里",
         "ico": "📍",
         "c": "v",
         "py": "yǐ zài zhèlǐ",
         "hv": "dĩ tại giá lý"
        },
        {
         "t": "工作三年了",
         "ico": "💼",
         "c": "o",
         "py": "gōngzuò sān nián le",
         "hv": "công tác tam niên liễu"
        }
       ],
       "traceWord": "已",
       "py": "Wǒ yǐ zài zhèlǐ gōngzuò sān nián le",
       "traceKey": "yi",
       "traceInfo": [
        {
         "c": "已",
         "py": "yǐ",
         "hv": "dĩ"
        }
       ]
      },
      {
       "scene": "👫🛬💼",
       "full": "他的朋友早已回国工作了",
       "vi": "Bạn của anh ấy đã về nước làm việc từ lâu",
       "parts": [
        {
         "t": "他的朋友",
         "ico": "👫",
         "c": "s",
         "py": "tā de péngyou",
         "hv": "tha đích bằng hữu"
        },
        {
         "t": "早已",
         "ico": "⏰",
         "c": "v",
         "py": "zǎoyǐ",
         "hv": "tảo dĩ"
        },
        {
         "t": "回国工作了",
         "ico": "🛬",
         "c": "o",
         "py": "huí guó gōngzuò le",
         "hv": "hồi quốc công tác liễu"
        }
       ],
       "traceWord": "早已",
       "py": "Tā de péngyou zǎoyǐ huí guó gōngzuò le",
       "traceKey": "zaoyi",
       "traceInfo": [
        {
         "c": "早",
         "py": "zǎo",
         "hv": "tảo"
        },
        {
         "c": "已",
         "py": "yǐ",
         "hv": "dĩ"
        }
       ]
      },
      {
       "scene": "🧑💪🏆",
       "full": "我始终相信你们能成功",
       "vi": "Tôi luôn tin các bạn sẽ thành công",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "始终相信",
         "ico": "💪",
         "c": "v",
         "py": "shǐzhōng xiāngxìn",
         "hv": "thủy chung tương tín"
        },
        {
         "t": "你们能成功",
         "ico": "🏆",
         "c": "o",
         "py": "nǐmen néng chénggōng",
         "hv": "nễ môn năng thành công"
        }
       ],
       "traceWord": "始终",
       "py": "Wǒ shǐzhōng xiāngxìn nǐmen néng chénggōng",
       "traceKey": "shizhong",
       "traceInfo": [
        {
         "c": "始",
         "py": "shǐ",
         "hv": "thủy"
        },
        {
         "c": "终",
         "py": "zhōng",
         "hv": "chung"
        }
       ]
      },
      {
       "scene": "❓⏳🤔",
       "full": "这个问题至今没有解决",
       "vi": "Vấn đề này đến nay vẫn chưa được giải quyết",
       "parts": [
        {
         "t": "这个问题",
         "ico": "❓",
         "c": "s",
         "py": "zhè gè wèntí",
         "hv": "giá cá vấn đề"
        },
        {
         "t": "至今没有",
         "ico": "⏳",
         "c": "v",
         "py": "zhìjīn méiyǒu",
         "hv": "chí kim một hữu"
        },
        {
         "t": "解决",
         "ico": "🔧",
         "c": "o",
         "py": "jiějué",
         "hv": "giải quyết"
        }
       ],
       "traceWord": "至今",
       "py": "Zhè gè wèntí zhìjīn méiyǒu jiějué",
       "traceKey": "zhijin",
       "traceInfo": [
        {
         "c": "至",
         "py": "zhì",
         "hv": "chí"
        },
        {
         "c": "今",
         "py": "jīn",
         "hv": "kim"
        }
       ]
      },
      {
       "scene": "👥🌙🍚",
       "full": "我们直到晚上才吃饭",
       "vi": "Mãi đến tối chúng tôi mới ăn cơm",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "直到晚上",
         "ico": "🌙",
         "c": "v",
         "py": "zhídào wǎnshang",
         "hv": "trực đáo vãn thượng"
        },
        {
         "t": "才吃饭",
         "ico": "🍚",
         "c": "o",
         "py": "cái chīfàn",
         "hv": "tài cật phạn"
        }
       ],
       "traceWord": "直到",
       "py": "Wǒmen zhídào wǎnshang cái chīfàn",
       "traceKey": "zhidao",
       "traceInfo": [
        {
         "c": "直",
         "py": "zhí",
         "hv": "trực"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "👨🥇🏢",
       "full": "他总是第一个到公司",
       "vi": "Anh ấy luôn là người đầu tiên đến công ty",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "总是",
         "ico": "🔁",
         "c": "v",
         "py": "zǒngshì",
         "hv": "tổng thị"
        },
        {
         "t": "第一个到公司",
         "ico": "🥇",
         "c": "o",
         "py": "dì yī gè dào gōngsī",
         "hv": "đệ nhất cá đáo công ti"
        }
       ],
       "traceWord": "总是",
       "py": "Tā zǒngshì dì yī gè dào gōngsī",
       "traceKey": "zongshi",
       "traceInfo": [
        {
         "c": "总",
         "py": "zǒng",
         "hv": "tổng"
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
       "q": "你通常几点起床？",
       "qvi": "Bạn thường mấy giờ thức dậy?",
       "scene": "🧑⏰🛏️",
       "ans": "我通常七点起床",
       "opts": [
        {
         "txt": "我正吃饭呢",
         "ico": "🍚",
         "py": "Wǒ zhèng chīfàn ne"
        },
        {
         "txt": "我通常七点起床",
         "ico": "⏰",
         "py": "Wǒ tōngcháng qī diǎn qǐchuáng"
        },
        {
         "txt": "他往往很晚才睡觉",
         "ico": "🌙",
         "py": "Tā wǎngwǎng hěn wǎn cái shuìjiào"
        }
       ],
       "qpy": "Nǐ tōngcháng jǐ diǎn qǐchuáng?"
      },
      {
       "q": "你为什么没有去开会？",
       "qvi": "Tại sao bạn không đi họp?",
       "scene": "🧑❓🗣️",
       "ans": "我本来想去但是突然生病了",
       "opts": [
        {
         "txt": "我本来想去但是突然生病了",
         "ico": "🤒",
         "py": "Wǒ běnlái xiǎng qù dànshì tūrán shēngbìng le"
        },
        {
         "txt": "我昨天去了公司",
         "ico": "🏢",
         "py": "Wǒ zuótiān qù le gōngsī"
        },
        {
         "txt": "他在银行工作",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò"
        }
       ],
       "qpy": "Nǐ wèi shénme méiyǒu qù kāihuì?"
      },
      {
       "q": "你现在还在北京工作吗？",
       "qvi": "Bây giờ bạn vẫn làm việc ở Bắc Kinh à?",
       "scene": "🧑🏙️💼",
       "ans": "我仍然在北京工作",
       "opts": [
        {
         "txt": "他仍在国外学习",
         "ico": "🌏",
         "py": "Tā réng zài guó wài xuéxí"
        },
        {
         "txt": "我去年买了手机",
         "ico": "📱",
         "py": "Wǒ qùnián mǎi le shǒujī"
        },
        {
         "txt": "我仍然在北京工作",
         "ico": "🏙️",
         "py": "Wǒ réngrán zài Běijīng gōngzuò"
        }
       ],
       "qpy": "Nǐ xiànzài hái zài Běijīng gōngzuò ma?"
      },
      {
       "q": "你觉得时间够吗？",
       "qvi": "Bạn thấy thời gian có đủ không?",
       "scene": "🧑⏳❓",
       "ans": "我总觉得时间不够",
       "opts": [
        {
         "txt": "我很喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ hěn xǐhuan hē chá"
        },
        {
         "txt": "我总觉得时间不够",
         "ico": "⏳",
         "py": "Wǒ zǒng juéde shíjiān bùgòu"
        },
        {
         "txt": "这是我的手机",
         "ico": "📱",
         "py": "Zhè shì wǒ de shǒujī"
        }
       ],
       "qpy": "Nǐ juéde shíjiān gòu ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trao đổi kinh nghiệm làm việc với đồng nghiệp mới",
      "steps": [
       "<b>Bước 1:</b> Tự giới thiệu kinh nghiệm bằng 3 câu: <i>\"我曾经在……住过/工作过\"</i>, <i>\"我已在这里工作……了\"</i> và một việc bạn chưa từng làm với <i>\"我从来没有……\"</i>.",
       "<b>Bước 2:</b> Nhắn tin hỏi đồng nghiệp về thói quen: <i>\"你通常几点起床？\"</i>, rồi trả lời về mình với <i>\"我通常……\"</i>.",
       "<b>Bước 3:</b> Nói thành tiếng một tình huống tồn đọng trong công việc: <i>\"这个问题至今没有解决\"</i> và thể hiện thái độ với <i>\"我始终相信……\"</i>."
      ]
     }
    }
   ]
  },
  "3.20": {
   "lessons": [
    {
     "id": "3.20A",
     "name": "Bài 3.20A: Gia đình, con người và cộng đồng",
     "grammar": {
      "formulas": [
       "👨‍👩‍👧 子女 + 🔁 一个个 + ⚡ 都 + ✅ 很努力",
       "👥 记者 + 🔁 一家家 + ⚡ 访问 + 🏠 家属",
       "❓ 老师 + 🔁 一个个 + ⚡ 问 + 🎓 学生"
      ],
      "tip": "Lượng từ lặp lại như 一个个 (yī gègè, nhất cá cá), 一家家 (yī jiājiā) nghĩa là \"từng ... một\". Nó đứng trước động từ để nhấn mạnh làm lần lượt từng người, từng nơi. Hay đi cùng 都 khi nói về tính chất của mọi cá thể.",
      "vn_tip": "Người Việt hay nói \"一个 一个\" tách rời hoặc chỉ dùng 每个. Đúng là lặp lượng từ liền nhau: 一个个, 一家家, và đặt trước động từ: 他们一个个走进来 (Họ từng người một đi vào)."
     },
     "chunks": [
      {
       "scene": "👨‍👩‍👧💪😊",
       "full": "子女一个个都很努力",
       "vi": "Con cái ai nấy đều rất chăm chỉ",
       "parts": [
        {
         "t": "子女",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "zǐnǚ",
         "hv": "tử nữ"
        },
        {
         "t": "一个个都",
         "ico": "🔁",
         "c": "v",
         "py": "yī gè gè dōu",
         "hv": "nhất cá cá đô"
        },
        {
         "t": "很努力",
         "ico": "💪",
         "c": "o",
         "py": "hěn nǔlì",
         "hv": "ngận nỗ lực"
        }
       ],
       "traceWord": "子女",
       "py": "Zǐnǚ yī gè gè dōu hěn nǔlì",
       "traceKey": "zinu",
       "traceInfo": [
        {
         "c": "子",
         "py": "zǐ",
         "hv": "tử"
        },
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        }
       ]
      },
      {
       "scene": "👨‍👩‍👧🚶🚪",
       "full": "家属一个个走进大门",
       "vi": "Người nhà từng người một đi vào cổng lớn",
       "parts": [
        {
         "t": "家属",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "jiāshǔ",
         "hv": "gia thuộc"
        },
        {
         "t": "一个个走进",
         "ico": "🚶",
         "c": "v",
         "py": "yī gè gè zǒujìn",
         "hv": "nhất cá cá tẩu tiến"
        },
        {
         "t": "大门",
         "ico": "🚪",
         "c": "o",
         "py": "dàmén",
         "hv": "đại môn"
        }
       ],
       "traceWord": "家属",
       "py": "Jiāshǔ yī gè gè zǒujìn dàmén",
       "traceKey": "jiashu",
       "traceInfo": [
        {
         "c": "家",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "属",
         "py": "shǔ",
         "hv": "thuộc"
        }
       ]
      },
      {
       "scene": "👧🌸✨",
       "full": "那些姑娘一个个都很漂亮",
       "vi": "Những cô gái ấy ai cũng xinh đẹp",
       "parts": [
        {
         "t": "那些姑娘",
         "ico": "👧",
         "c": "s",
         "py": "nàxiē gūniang",
         "hv": "na ta cô nương"
        },
        {
         "t": "一个个都",
         "ico": "🔁",
         "c": "v",
         "py": "yī gè gè dōu",
         "hv": "nhất cá cá đô"
        },
        {
         "t": "很漂亮",
         "ico": "✨",
         "c": "o",
         "py": "hěn piàoliang",
         "hv": "ngận phiêu lượng"
        }
       ],
       "traceWord": "姑娘",
       "py": "Nàxiē gūniang yī gè gè dōu hěn piàoliang",
       "traceKey": "guniang",
       "traceInfo": [
        {
         "c": "姑",
         "py": "gū",
         "hv": "cô"
        },
        {
         "c": "娘",
         "py": "niang",
         "hv": "nương"
        }
       ]
      },
      {
       "scene": "👨👩🚶🏫",
       "full": "男子和女子一个个走进教室",
       "vi": "Nam giới và nữ giới từng người một đi vào lớp học",
       "parts": [
        {
         "t": "男子和女子",
         "ico": "👫",
         "c": "s",
         "py": "nánzǐ hé nǚzǐ",
         "hv": "nam tử hòa nữ tử"
        },
        {
         "t": "一个个走进",
         "ico": "🚶",
         "c": "v",
         "py": "yī gè gè zǒujìn",
         "hv": "nhất cá cá tẩu tiến"
        },
        {
         "t": "教室",
         "ico": "🏫",
         "c": "o",
         "py": "jiàoshì",
         "hv": "giáo thất"
        }
       ],
       "traceWord": "女子",
       "py": "Nánzǐ hé nǚzǐ yī gè gè zǒujìn jiàoshì",
       "traceKey": "nuzi",
       "traceInfo": [
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        },
        {
         "c": "子",
         "py": "zǐ",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "📰🏠🎤",
       "full": "记者一家家访问家属",
       "vi": "Phóng viên đến phỏng vấn từng nhà người thân",
       "parts": [
        {
         "t": "记者",
         "ico": "📰",
         "c": "s",
         "py": "jìzhě",
         "hv": "ký giả"
        },
        {
         "t": "一家家访问",
         "ico": "🎤",
         "c": "v",
         "py": "yī jiā jiā fǎngwèn",
         "hv": "nhất gia gia phỏng vấn"
        },
        {
         "t": "家属",
         "ico": "🏠",
         "c": "o",
         "py": "jiāshǔ",
         "hv": "gia thuộc"
        }
       ],
       "traceWord": "记者",
       "py": "Jìzhě yī jiā jiā fǎngwèn jiāshǔ",
       "traceKey": "jizhe",
       "traceInfo": [
        {
         "c": "记",
         "py": "jì",
         "hv": "ký"
        },
        {
         "c": "者",
         "py": "zhě",
         "hv": "giả"
        }
       ]
      },
      {
       "scene": "👥🚶🚇",
       "full": "人群里的人一个个走进地铁站",
       "vi": "Những người trong đám đông lần lượt đi vào ga tàu điện ngầm",
       "parts": [
        {
         "t": "人群里的人",
         "ico": "👥",
         "c": "s",
         "py": "rénqún lǐ de rén",
         "hv": "nhân quần lý đích nhân"
        },
        {
         "t": "一个个走进",
         "ico": "🚶",
         "c": "v",
         "py": "yī gè gè zǒujìn",
         "hv": "nhất cá cá tẩu tiến"
        },
        {
         "t": "地铁站",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiězhàn",
         "hv": "địa thiết trạm"
        }
       ],
       "traceWord": "人群",
       "py": "Rénqún lǐ de rén yī gè gè zǒujìn dìtiězhàn",
       "traceKey": "renqun",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "群",
         "py": "qún",
         "hv": "quần"
        }
       ]
      },
      {
       "scene": "👩‍🏫🎓❓",
       "full": "老师一个个问学生的志愿",
       "vi": "Thầy cô hỏi từng học sinh về nguyện vọng của các em",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "一个个问",
         "ico": "❓",
         "c": "v",
         "py": "yī gè gè wèn",
         "hv": "nhất cá cá vấn"
        },
        {
         "t": "学生的志愿",
         "ico": "🎓",
         "c": "o",
         "py": "xuéshēng de zhìyuàn",
         "hv": "học sinh đích chí nguyện"
        }
       ],
       "traceWord": "志愿",
       "py": "Lǎoshī yī gè gè wèn xuéshēng de zhìyuàn",
       "traceKey": "zhiyuan",
       "traceInfo": [
        {
         "c": "志",
         "py": "zhì",
         "hv": "chí"
        },
        {
         "c": "愿",
         "py": "yuàn",
         "hv": "nguyện"
        }
       ]
      },
      {
       "scene": "🌍👥📜",
       "full": "社会上的公民一个个都有责任",
       "vi": "Mỗi công dân trong xã hội ai cũng có trách nhiệm",
       "parts": [
        {
         "t": "社会上的公民",
         "ico": "🌍",
         "c": "s",
         "py": "shèhuì shàng de gōngmín",
         "hv": "xã hội thượng đích công dân"
        },
        {
         "t": "一个个都有",
         "ico": "🔁",
         "c": "v",
         "py": "yī gè gè dōu yǒu",
         "hv": "nhất cá cá đô hữu"
        },
        {
         "t": "责任",
         "ico": "📜",
         "c": "o",
         "py": "zérèn",
         "hv": "trách nhiệm"
        }
       ],
       "traceWord": "公民",
       "py": "Shèhuì shàng de gōngmín yī gè gè dōu yǒu zérèn",
       "traceKey": "gongmin",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "民",
         "py": "mín",
         "hv": "dân"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的父母在哪儿工作？",
       "qvi": "Bố mẹ bạn làm việc ở đâu?",
       "scene": "👨‍👩‍👧🏦",
       "ans": "我的父母在银行工作",
       "opts": [
        {
         "txt": "我今天买了一本书",
         "ico": "📖",
         "py": "Wǒ jīntiān mǎi le yī běn shū"
        },
        {
         "txt": "我的父母在银行工作",
         "ico": "🏦",
         "py": "Wǒ de fùmǔ zài yínháng gōngzuò"
        },
        {
         "txt": "他们明天去北京",
         "ico": "✈️",
         "py": "Tāmen míngtiān qù Běijīng"
        }
       ],
       "qpy": "Nǐ de fùmǔ zài nǎr gōngzuò?"
      },
      {
       "q": "你母亲和父亲身体好吗？",
       "qvi": "Bố mẹ bạn có khoẻ không?",
       "scene": "👩👨💪",
       "ans": "他们身体都很好",
       "opts": [
        {
         "txt": "我们星期天去公园",
         "ico": "🌳",
         "py": "Wǒmen xīngqītiān qù gōngyuán"
        },
        {
         "txt": "这个电影非常有意思",
         "ico": "🎬",
         "py": "Zhè gè diànyǐng fēicháng yǒu yìsi"
        },
        {
         "txt": "他们身体都很好",
         "ico": "💪",
         "py": "Tāmen shēntǐ dōu hěn hǎo"
        }
       ],
       "qpy": "Nǐ mǔqīn hé fùqīn shēntǐ hǎo ma?"
      },
      {
       "q": "你的亲人都住在哪儿？",
       "qvi": "Người thân của bạn đều sống ở đâu?",
       "scene": "👨‍👩‍👧🏠",
       "ans": "我的亲人都住在河内",
       "opts": [
        {
         "txt": "我的亲人都住在河内",
         "ico": "🏠",
         "py": "Wǒ de qīnrén dōu zhù zài Hénèi"
        },
        {
         "txt": "我明天要去开会",
         "ico": "💼",
         "py": "Wǒ míngtiān yào qù kāihuì"
        },
        {
         "txt": "今天天气非常冷",
         "ico": "🥶",
         "py": "Jīntiān tiānqì fēicháng lěng"
        }
       ],
       "qpy": "Nǐ de qīnrén dōu zhù zài nǎr?"
      },
      {
       "q": "你觉得人生最重要的是什么？",
       "qvi": "Bạn thấy điều quan trọng nhất của cuộc đời là gì?",
       "scene": "🌟🤔",
       "ans": "我觉得健康最重要",
       "opts": [
        {
         "txt": "人类需要水和空气",
         "ico": "💧",
         "py": "Rénlèi xūyào shuǐ hé kōngqì"
        },
        {
         "txt": "人民都喜欢这个歌手",
         "ico": "🎤",
         "py": "Rénmín dōu xǐhuan zhè gè gēshǒu"
        },
        {
         "txt": "我觉得健康最重要",
         "ico": "💪",
         "py": "Wǒ juéde jiànkāng zuì zhòngyào"
        }
       ],
       "qpy": "Nǐ juéde rénshēng zuì zhòngyào de shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu đồng nghiệp với đối tác",
      "steps": [
       "<b>Bước 1:</b> Hình dung công ty có một nhóm đồng nghiệp trẻ. Tự nói thành tiếng, giới thiệu họ với đối tác: <i>\"他们一个个都很努力\"</i>.",
       "<b>Bước 2:</b> Tưởng tượng bạn dẫn đoàn khách vào toà nhà. Mô tả từng người: <i>\"客人一个个走进大门\"</i> (thay 家属 bằng 客人 nếu muốn), rồi nói về gia đình bạn bằng <i>\"我的父母在银行工作\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp người Trung, kể một việc bạn làm lần lượt từng nơi hoặc từng người, dùng 一个个 hoặc 一家家 ít nhất hai lần."
      ]
     }
    },
    {
     "id": "3.20B",
     "name": "Bài 3.20B: Văn hoá, lịch sử và xã hội",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 是 + 📅 去年成为 + 🎫 会员 + 的",
       "🐉 这条龙 + ⚡ 是 + 📍 在北京 + 🛍️ 买 + 的",
       "❓ 这个公共电话 + ⚡ 是 + 🙋 谁 + 🔧 修 + 的"
      ],
      "tip": "Cấu trúc 是……的 (shì…de, thị…đích) dùng khi sự việc đã xảy ra và ta muốn nhấn mạnh thời gian, địa điểm, cách thức hoặc người làm. Phần cần nhấn mạnh đặt giữa 是 và động từ, còn 的 đứng cuối câu.",
      "vn_tip": "Người Việt hay nói \"他去年成为会员了\" mà quên nhấn mạnh. Khi người nghe đã biết việc xảy ra rồi và bạn muốn nói rõ \"khi nào / ở đâu / ai\", hãy dùng 是……的 và không thêm 了: 我是在北京买的."
     },
     "chunks": [
      {
       "scene": "🧑📅🎫",
       "full": "他是去年成为会员的",
       "vi": "Anh ấy là năm ngoái mới trở thành hội viên",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "是去年成为",
         "ico": "📅",
         "c": "v",
         "py": "shì qùnián chéngwéi",
         "hv": "thị khứ niên thành vi"
        },
        {
         "t": "会员的",
         "ico": "🎫",
         "c": "o",
         "py": "huìyuán de",
         "hv": "hội viên đích"
        }
       ],
       "traceWord": "会员",
       "py": "Tā shì qùnián chéngwéi huìyuán de",
       "traceKey": "huiyuan",
       "traceInfo": [
        {
         "c": "会",
         "py": "huì",
         "hv": "hội"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🐉📍🛍️",
       "full": "这条龙是在北京买的",
       "vi": "Con rồng này là mua ở Bắc Kinh",
       "parts": [
        {
         "t": "这条龙",
         "ico": "🐉",
         "c": "s",
         "py": "zhè tiáo lóng",
         "hv": "giá điều long"
        },
        {
         "t": "是在北京",
         "ico": "📍",
         "c": "v",
         "py": "shì zài Běijīng",
         "hv": "thị tại bắc kinh"
        },
        {
         "t": "买的",
         "ico": "🛍️",
         "c": "o",
         "py": "mǎi de",
         "hv": "mãi đích"
        }
       ],
       "traceWord": "龙",
       "py": "Zhè tiáo lóng shì zài Běijīng mǎi de",
       "traceKey": "long",
       "traceInfo": [
        {
         "c": "龙",
         "py": "lóng",
         "hv": "long"
        }
       ]
      },
      {
       "scene": "☎️🙋🔧",
       "full": "这个公共电话是谁修的",
       "vi": "Điện thoại công cộng này là ai sửa vậy",
       "parts": [
        {
         "t": "这个公共电话",
         "ico": "☎️",
         "c": "s",
         "py": "zhè gè gōnggòng diànhuà",
         "hv": "giá cá công cộng điện thoại"
        },
        {
         "t": "是谁",
         "ico": "🙋",
         "c": "v",
         "py": "shì shéi",
         "hv": "thị thùy"
        },
        {
         "t": "修的",
         "ico": "🔧",
         "c": "o",
         "py": "xiū de",
         "hv": "tu đích"
        }
       ],
       "traceWord": "公共",
       "py": "Zhè gè gōnggòng diànhuà shì shéi xiū de",
       "traceKey": "gonggong",
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
        }
       ]
      },
      {
       "scene": "🕊️💼📍",
       "full": "这次和平会议是在北京开的",
       "vi": "Hội nghị hoà bình lần này được tổ chức ở Bắc Kinh",
       "parts": [
        {
         "t": "这次和平会议",
         "ico": "🕊️",
         "c": "s",
         "py": "zhè cì hépíng huìyì",
         "hv": "giá thứ hòa bình hội nghị"
        },
        {
         "t": "是在北京",
         "ico": "📍",
         "c": "v",
         "py": "shì zài Běijīng",
         "hv": "thị tại bắc kinh"
        },
        {
         "t": "开的",
         "ico": "💼",
         "c": "o",
         "py": "kāi de",
         "hv": "khai đích"
        }
       ],
       "traceWord": "和平",
       "py": "Zhè cì hépíng huìyì shì zài Běijīng kāi de",
       "traceKey": "heping",
       "traceInfo": [
        {
         "c": "和",
         "py": "hé",
         "hv": "hòa"
        },
        {
         "c": "平",
         "py": "píng",
         "hv": "bình"
        }
       ]
      },
      {
       "scene": "🏮📜🎎",
       "full": "这种民族文化是从古代传来的",
       "vi": "Nền văn hoá dân tộc này là truyền lại từ thời cổ đại",
       "parts": [
        {
         "t": "这种民族文化",
         "ico": "🏮",
         "c": "s",
         "py": "zhè zhǒng mínzú wénhuà",
         "hv": "giá chủng dân tộc văn hóa"
        },
        {
         "t": "是从古代",
         "ico": "📜",
         "c": "v",
         "py": "shì cóng gǔdài",
         "hv": "thị tòng cổ đại"
        },
        {
         "t": "传来的",
         "ico": "🎎",
         "c": "o",
         "py": "chuánlái de",
         "hv": "truyền lai đích"
        }
       ],
       "traceWord": "民族",
       "py": "Zhè zhǒng mínzú wénhuà shì cóng gǔdài chuánlái de",
       "traceKey": "minzu",
       "traceInfo": [
        {
         "c": "民",
         "py": "mín",
         "hv": "dân"
        },
        {
         "c": "族",
         "py": "zú",
         "hv": "tộc"
        }
       ]
      },
      {
       "scene": "🌍🏙️✅",
       "full": "这种习惯在现代社会是很普遍的",
       "vi": "Thói quen này trong xã hội hiện đại rất phổ biến",
       "parts": [
        {
         "t": "这种习惯在现代社会",
         "ico": "🏙️",
         "c": "s",
         "py": "zhè zhǒng xíguàn zài xiàndài shèhuì",
         "hv": "giá chủng tập quán tại hiện đại xã hội"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "很普遍的",
         "ico": "✅",
         "c": "o",
         "py": "hěn pǔbiàn de",
         "hv": "ngận phổ biến đích"
        }
       ],
       "traceWord": "普遍",
       "py": "Zhè zhǒng xíguàn zài xiàndài shèhuì shì hěn pǔbiàn de",
       "traceKey": "pubian",
       "traceInfo": [
        {
         "c": "普",
         "py": "pǔ",
         "hv": "phổ"
        },
        {
         "c": "遍",
         "py": "biàn",
         "hv": "biến"
        }
       ]
      },
      {
       "scene": "🤝🏆🌏",
       "full": "这个国家是靠团结才成功的",
       "vi": "Đất nước này chỉ thành công nhờ đoàn kết",
       "parts": [
        {
         "t": "这个国家",
         "ico": "🌏",
         "c": "s",
         "py": "zhè gè guójiā",
         "hv": "giá cá quốc gia"
        },
        {
         "t": "是靠团结",
         "ico": "🤝",
         "c": "v",
         "py": "shì kào tuánjié",
         "hv": "thị kháo đoàn kết"
        },
        {
         "t": "才成功的",
         "ico": "🏆",
         "c": "o",
         "py": "cái chénggōng de",
         "hv": "tài thành công đích"
        }
       ],
       "traceWord": "团结",
       "py": "Zhè gè guójiā shì kào tuánjié cái chénggōng de",
       "traceKey": "tuanjie",
       "traceInfo": [
        {
         "c": "团",
         "py": "tuán",
         "hv": "đoàn"
        },
        {
         "c": "结",
         "py": "jié",
         "hv": "kết"
        }
       ]
      },
      {
       "scene": "🏯🌟📚",
       "full": "中华民族的文明是很伟大的",
       "vi": "Nền văn minh của dân tộc Trung Hoa vô cùng vĩ đại",
       "parts": [
        {
         "t": "中华民族的文明",
         "ico": "🏯",
         "c": "s",
         "py": "Zhōnghuá Mínzú de wénmíng",
         "hv": "trung hoa dân tộc đích văn minh"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "很伟大的",
         "ico": "🌟",
         "c": "o",
         "py": "hěn wěidà de",
         "hv": "ngận vĩ đại đích"
        }
       ],
       "traceWord": "伟大",
       "py": "Zhōnghuá Mínzú de wénmíng shì hěn wěidà de",
       "traceKey": "weida",
       "traceInfo": [
        {
         "c": "伟",
         "py": "wěi",
         "hv": "vĩ"
        },
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "人们把这个节日称为什么？",
       "qvi": "Người ta gọi ngày lễ này là gì?",
       "scene": "🎊🏮",
       "ans": "人们把它称为春节",
       "opts": [
        {
         "txt": "我们把书放在桌子上",
         "ico": "📖",
         "py": "Wǒmen bǎ shū fàng zài zhuōzi shàng"
        },
        {
         "txt": "他把手机忘在家里了",
         "ico": "📱",
         "py": "Tā bǎ shǒujī wàng zài jiā li le"
        },
        {
         "txt": "人们把它称为春节",
         "ico": "🧧",
         "py": "Rénmen bǎ tā chēngwéi Chūnjié"
        }
       ],
       "qpy": "Rénmen bǎ zhè gè jiérì chēng wèi shénme?"
      },
      {
       "q": "学习汉语对你的工作有什么意义？",
       "qvi": "Học tiếng Trung có ý nghĩa gì với công việc của bạn?",
       "scene": "📚💼",
       "ans": "它让我和中国同事交流得更好",
       "opts": [
        {
         "txt": "我昨天在家看了电影",
         "ico": "🎬",
         "py": "Wǒ zuótiān zàijiā kàn le diànyǐng"
        },
        {
         "txt": "它让我和中国同事交流得更好",
         "ico": "🗣️",
         "py": "Tā ràng wǒ hé Zhōngguó tóngshì jiāoliú de gèng hǎo"
        },
        {
         "txt": "这个周末天气非常冷",
         "ico": "🥶",
         "py": "Zhè gè zhōumò tiānqì fēicháng lěng"
        }
       ],
       "qpy": "Xuéxí Hànyǔ duì nǐ de gōngzuò yǒu shénme yìyì?"
      },
      {
       "q": "现实生活和电影一样吗？",
       "qvi": "Cuộc sống thực có giống phim không?",
       "scene": "🎬🏙️",
       "ans": "现实比电影复杂",
       "opts": [
        {
         "txt": "我今天晚上不想吃饭",
         "ico": "🍚",
         "py": "Wǒ jīntiān wǎnshang bù xiǎng chīfàn"
        },
        {
         "txt": "他们明年去上海",
         "ico": "✈️",
         "py": "Tāmen míngnián qù Shànghǎi"
        },
        {
         "txt": "现实比电影复杂",
         "ico": "🏙️",
         "py": "Xiànshí bǐ diànyǐng fùzá"
        }
       ],
       "qpy": "Xiànshí shēnghuó hé diànyǐng yīyàng ma?"
      },
      {
       "q": "你相信命运吗？",
       "qvi": "Bạn có tin vào số phận không?",
       "scene": "🔮🤔",
       "ans": "我相信努力比命运更重要",
       "opts": [
        {
         "txt": "我昨天买了两本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le liǎng běn shū"
        },
        {
         "txt": "我相信努力比命运更重要",
         "ico": "💪",
         "py": "Wǒ xiāngxìn nǔlì bǐ mìngyùn gèng zhòngyào"
        },
        {
         "txt": "他每天坐地铁上班",
         "ico": "🚇",
         "py": "Tā měi tiān zuò dìtiě shàngbān"
        }
       ],
       "qpy": "Nǐ xiāngxìn mìngyùn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói chuyện văn hoá với đối tác Trung Quốc",
      "steps": [
       "<b>Bước 1:</b> Trong bữa ăn với đối tác, hỏi về một món đồ họ mang theo: <i>\"这个是在哪儿买的\"</i> và tự trả lời bằng <i>\"这条龙是在北京买的\"</i>.",
       "<b>Bước 2:</b> Kể bạn tham gia một hội nghị hay câu lạc bộ khi nào và ở đâu: <i>\"我是去年成为会员的\"</i>. Đổi thời gian và địa điểm theo thực tế của bạn.",
       "<b>Bước 3:</b> Nêu một ý kiến về văn hoá hoặc xã hội bằng <i>\"这种习惯在现代社会是很普遍的\"</i>, rồi nói thêm một câu cùng cấu trúc 是……的 về nước bạn."
      ]
     }
    },
    {
     "id": "3.20C",
     "name": "Bài 3.20C: Từ chỉ chung: mỗi, các, bất kỳ",
     "grammar": {
      "formulas": [
       "📅 我 + 🔁 每天早上都坐 + 🚇 地铁上班",
       "👥 各位同事 + 🙏 请 + 📍 在这里等",
       "❓ 你有 + 🌐 任何问题 + ⚡ 都可以 + 🙋 问我"
      ],
      "tip": "每 (měi, mỗi) đứng trước lượng từ hoặc danh từ chỉ thời gian và hay đi với 都: 每天都……. 各 (gè, các) và 各位 (gèwèi, các vị), 各种 (gèzhǒng, các loại) chỉ từng cá thể trong một nhóm. 任何 (rènhé, nhậm hà) là \"bất kỳ\", thường đi với 都 hoặc 也.",
      "vn_tip": "Người Việt hay nói \"mỗi\" rồi quên 都: phải nói 每天早上都……, không chỉ 每天早上……. Ngoài ra không nói 各位们; 各位 đã có nghĩa số nhiều rồi, chỉ cần 各位同事."
     },
     "chunks": [
      {
       "scene": "📅🚇🏢",
       "full": "我每天早上都坐地铁上班",
       "vi": "Sáng nào tôi cũng đi tàu điện ngầm đi làm",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "每天早上都坐",
         "ico": "📅",
         "c": "v",
         "py": "měi tiān zǎoshang dōu zuò",
         "hv": "mỗi thiên tảo thượng đô tọa"
        },
        {
         "t": "地铁上班",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiě shàngbān",
         "hv": "địa thiết thượng ban"
        }
       ],
       "traceWord": "每",
       "py": "Wǒ měi tiān zǎoshang dōu zuò dìtiě shàngbān",
       "traceKey": "mei",
       "traceInfo": [
        {
         "c": "每",
         "py": "měi",
         "hv": "mỗi"
        }
       ]
      },
      {
       "scene": "👥🙏📍",
       "full": "各位同事请在这里等",
       "vi": "Các đồng nghiệp xin vui lòng đợi ở đây",
       "parts": [
        {
         "t": "各位同事",
         "ico": "👥",
         "c": "s",
         "py": "gèwèi tóngshì",
         "hv": "các vị đồng sự"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "在这里等",
         "ico": "📍",
         "c": "o",
         "py": "zài zhèlǐ děng",
         "hv": "tại giá lý đẳng"
        }
       ],
       "traceWord": "各位",
       "py": "Gèwèi tóngshì qǐng zài zhèlǐ děng",
       "traceKey": "gewei",
       "traceInfo": [
        {
         "c": "各",
         "py": "gè",
         "hv": "các"
        },
        {
         "c": "位",
         "py": "wèi",
         "hv": "vị"
        }
       ]
      },
      {
       "scene": "🏪🍱🛒",
       "full": "这家商店有各种好吃的东西",
       "vi": "Cửa hàng này có đủ loại đồ ngon",
       "parts": [
        {
         "t": "这家商店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā shāngdiàn",
         "hv": "giá gia thương điếm"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "各种好吃的东西",
         "ico": "🍱",
         "c": "o",
         "py": "gèzhǒng hǎochī de dōngxi",
         "hv": "các chủng hảo cật đích đông tây"
        }
       ],
       "traceWord": "各种",
       "py": "Zhè jiā shāngdiàn yǒu gèzhǒng hǎochī de dōngxi",
       "traceKey": "gezhong",
       "traceInfo": [
        {
         "c": "各",
         "py": "gè",
         "hv": "các"
        },
        {
         "c": "种",
         "py": "zhǒng",
         "hv": "chủng"
        }
       ]
      },
      {
       "scene": "🏢🏠👥",
       "full": "下班以后大家各自回家",
       "vi": "Sau giờ làm mọi người ai về nhà nấy",
       "parts": [
        {
         "t": "下班以后",
         "ico": "🕔",
         "c": "s",
         "py": "xiàbān yǐhòu",
         "hv": "hạ ban dĩ hậu"
        },
        {
         "t": "大家各自",
         "ico": "👥",
         "c": "v",
         "py": "dàjiā gèzì",
         "hv": "đại gia các tự"
        },
        {
         "t": "回家",
         "ico": "🏠",
         "c": "o",
         "py": "huí jiā",
         "hv": "hồi gia"
        }
       ],
       "traceWord": "各自",
       "py": "Xiàbān yǐhòu dàjiā gèzì huí jiā",
       "traceKey": "gezi",
       "traceInfo": [
        {
         "c": "各",
         "py": "gè",
         "hv": "các"
        },
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "🙋❓💼",
       "full": "你有任何问题都可以问我",
       "vi": "Bạn có bất kỳ câu hỏi nào cũng có thể hỏi tôi",
       "parts": [
        {
         "t": "你有任何问题",
         "ico": "❓",
         "c": "s",
         "py": "nǐ yǒu rènhé wèntí",
         "hv": "nễ hữu nhiệm hà vấn đề"
        },
        {
         "t": "都可以",
         "ico": "👍",
         "c": "v",
         "py": "dōu kěyǐ",
         "hv": "đô khả dĩ"
        },
        {
         "t": "问我",
         "ico": "🙋",
         "c": "o",
         "py": "wèn wǒ",
         "hv": "vấn ngã"
        }
       ],
       "traceWord": "任何",
       "py": "Nǐ yǒu rènhé wèntí dōu kěyǐ wèn wǒ",
       "traceKey": "renhe",
       "traceInfo": [
        {
         "c": "任",
         "py": "rèn",
         "hv": "nhiệm"
        },
        {
         "c": "何",
         "py": "hé",
         "hv": "hà"
        }
       ]
      },
      {
       "scene": "🏢👔🤝",
       "full": "某家公司的经理想和我们合作",
       "vi": "Giám đốc của một công ty nào đó muốn hợp tác với chúng tôi",
       "parts": [
        {
         "t": "某家公司的经理",
         "ico": "👔",
         "c": "s",
         "py": "mǒu jiā gōngsī de jīnglǐ",
         "hv": "mỗ gia công ti đích kinh lý"
        },
        {
         "t": "想",
         "ico": "💭",
         "c": "v",
         "py": "xiǎng",
         "hv": "tưởng"
        },
        {
         "t": "和我们合作",
         "ico": "🤝",
         "c": "o",
         "py": "hé wǒmen hézuò",
         "hv": "hòa ngã môn hợp tác"
        }
       ],
       "traceWord": "某",
       "py": "Mǒu jiā gōngsī de jīnglǐ xiǎng hé wǒmen hézuò",
       "traceKey": "mou",
       "traceInfo": [
        {
         "c": "某",
         "py": "mǒu",
         "hv": "mỗ"
        }
       ]
      },
      {
       "scene": "👔🏢🔍",
       "full": "经理对整个公司做了全面的检查",
       "vi": "Giám đốc đã kiểm tra toàn diện cả công ty",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "对整个公司做了",
         "ico": "🏢",
         "c": "v",
         "py": "duì zhěnggè gōngsī zuò le",
         "hv": "đối chỉnh cá công ti tố liễu"
        },
        {
         "t": "全面的检查",
         "ico": "🔍",
         "c": "o",
         "py": "quánmiàn de jiǎnchá",
         "hv": "toàn diện đích kiểm tra"
        }
       ],
       "traceWord": "整个",
       "py": "Jīnglǐ duì zhěnggè gōngsī zuò le quánmiàn de jiǎnchá",
       "traceKey": "zhengge",
       "traceInfo": [
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        },
        {
         "c": "个",
         "py": "gè",
         "hv": "cá"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑🛎️😊",
       "full": "广大客人对一切服务都很满意",
       "vi": "Đông đảo khách hàng đều rất hài lòng với mọi dịch vụ",
       "parts": [
        {
         "t": "广大客人",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "guǎngdà kèrén",
         "hv": "quảng đại khách nhân"
        },
        {
         "t": "对一切服务",
         "ico": "🛎️",
         "c": "v",
         "py": "duì yīqiè fúwù",
         "hv": "đối nhất thiết phục vụ"
        },
        {
         "t": "都很满意",
         "ico": "😊",
         "c": "o",
         "py": "dōu hěn mǎnyì",
         "hv": "đô ngận mãn ý"
        }
       ],
       "traceWord": "广大",
       "py": "Guǎngdà kèrén duì yīqiè fúwù dōu hěn mǎnyì",
       "traceKey": "guangda",
       "traceInfo": [
        {
         "c": "广",
         "py": "guǎng",
         "hv": "quảng"
        },
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个国家为什么越来越富？",
       "qvi": "Vì sao đất nước này ngày càng giàu?",
       "scene": "🌏💰",
       "ans": "因为经济增长得很快",
       "opts": [
        {
         "txt": "因为明天是星期天",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì xīngqītiān"
        },
        {
         "txt": "因为经济增长得很快",
         "ico": "📈",
         "py": "Yīnwèi jīngjì zēngzhǎng de hěn kuài"
        },
        {
         "txt": "因为我不喜欢喝咖啡",
         "ico": "☕",
         "py": "Yīnwèi wǒ bù xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Zhè gè guójiā wèi shénme yuè lái yuè fù?"
      },
      {
       "q": "你的个人爱好是什么？",
       "qvi": "Sở thích cá nhân của bạn là gì?",
       "scene": "🧑🎾",
       "ans": "我的个人爱好是打网球",
       "opts": [
        {
         "txt": "我的家人都在北京",
         "ico": "🏠",
         "py": "Wǒ de jiārén dōu zài Běijīng"
        },
        {
         "txt": "现在已经十点了",
         "ico": "🕙",
         "py": "Xiànzài yǐjīng shí diǎn le"
        },
        {
         "txt": "我的个人爱好是打网球",
         "ico": "🎾",
         "py": "Wǒ de gèrén àihào shì dǎ wǎngqiú"
        }
       ],
       "qpy": "Nǐ de gèrén àihào shì shénme?"
      },
      {
       "q": "这个问题是谁的责任？",
       "qvi": "Vấn đề này là trách nhiệm của ai?",
       "scene": "❓📜",
       "ans": "问题出在我们自身",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "💼",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "问题出在我们自身",
         "ico": "🪞",
         "py": "Wèntí chū zài wǒmen zìshēn"
        },
        {
         "txt": "这个包子很好吃",
         "ico": "🥟",
         "py": "Zhè gè bāozi hěn hǎochī"
        }
       ],
       "qpy": "Zhè gè wèntí shì shéi de zérèn?"
      },
      {
       "q": "各位同学，下周有考试吗？",
       "qvi": "Các bạn học viên, tuần sau có kiểm tra không?",
       "scene": "👥📝",
       "ans": "下周有汉语考试",
       "opts": [
        {
         "txt": "今天天气非常好",
         "ico": "☀️",
         "py": "Jīntiān tiānqì fēicháng hǎo"
        },
        {
         "txt": "我们各有各的工作",
         "ico": "💼",
         "py": "Wǒmen gè yǒu gè de gōngzuò"
        },
        {
         "txt": "下周有汉语考试",
         "ico": "📝",
         "py": "Xià zhōu yǒu Hànyǔ kǎoshì"
        }
       ],
       "qpy": "Gèwèi tóngxué xià zhōu yǒu kǎoshì ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thông báo trước cả nhóm",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn mở đầu một cuộc họp có đồng nghiệp người Trung: <i>\"各位同事请在这里等\"</i>, rồi mô tả thói quen đi làm của mình bằng <i>\"我每天早上都坐地铁上班\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho cả nhóm: nói ai có thắc mắc cũng được hỏi, dùng <i>\"你有任何问题都可以问我\"</i>, và nói sau giờ làm mọi người <i>\"各自回家\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng một lời giới thiệu ngắn về công ty hoặc cửa hàng quen thuộc, dùng ít nhất một lần mỗi cấu trúc: 每, 各种, 任何."
      ]
     }
    }
   ]
  },
  "3.21": {
   "lessons": [
    {
     "id": "3.21A",
     "name": "Bài 3.21A: Công nghệ, thiết bị và nâng cấp",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 用得了 + 🧺 这台洗衣机",
       "🤖 机器 + ⚡ 做得了 + 👷 人工做不了的事",
       "❓ 你 + ⚡ 发明得出来 + 💡 这么好的工具吗"
      ],
      "tip": "Bổ ngữ khả năng: động từ + 得 (de, đắc) + bổ ngữ = có thể làm được; động từ + 不 (bù, bất) + bổ ngữ = không làm được. Với 了 (liǎo) nghĩa là \"làm nổi/không nổi\": 用得了 = dùng được, 改进不了 = không cải tiến nổi.",
      "vn_tip": "Người Việt hay nói \"我能用这台机器\" cho mọi trường hợp. Khi nói khả năng làm được hay không về kết quả, người Trung hay dùng 得/不 chen giữa: 看得懂, 送得到, 造得出. Khi phủ định phải dùng 不 chứ không dùng 没: nói 做不了, không nói 没做了."
     },
     "chunks": [
      {
       "scene": "🧑🧺✅",
       "full": "我用得了这台自动洗衣机",
       "vi": "Tôi dùng được chiếc máy giặt tự động này",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "用得了",
         "ico": "✅",
         "c": "v",
         "py": "yòng de le",
         "hv": "dụng đắc liễu"
        },
        {
         "t": "这台自动洗衣机",
         "ico": "🧺",
         "c": "o",
         "py": "zhè tái zìdòng xǐyījī",
         "hv": "giá đài tự động tẩy y cơ"
        }
       ],
       "traceWord": "自动",
       "py": "Wǒ yòng de le zhè tái zìdòng xǐyījī",
       "traceKey": "zidong",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🆕📦🏢",
       "full": "新设备今天送得到公司",
       "vi": "Thiết bị mới hôm nay chuyển được tới công ty",
       "parts": [
        {
         "t": "新设备",
         "ico": "🆕",
         "c": "s",
         "py": "xīn shèbèi",
         "hv": "tân thiết bị"
        },
        {
         "t": "今天送得到",
         "ico": "📦",
         "c": "v",
         "py": "jīntiān sòng dédào",
         "hv": "kim thiên tống đắc đáo"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "设备",
       "py": "Xīn shèbèi jīntiān sòng dédào gōngsī",
       "traceKey": "shebei",
       "traceInfo": [
        {
         "c": "设",
         "py": "shè",
         "hv": "thiết"
        },
        {
         "c": "备",
         "py": "bèi",
         "hv": "bị"
        }
       ]
      },
      {
       "scene": "👥⚙️❌",
       "full": "我们改进不了这个功能",
       "vi": "Chúng tôi không cải tiến nổi chức năng này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "改进不了",
         "ico": "❌",
         "c": "v",
         "py": "gǎijìn bù le",
         "hv": "cải tiến bất liễu"
        },
        {
         "t": "这个功能",
         "ico": "⚙️",
         "c": "o",
         "py": "zhè gè gōngnéng",
         "hv": "giá cá công năng"
        }
       ],
       "traceWord": "改进",
       "py": "Wǒmen gǎijìn bù le zhè gè gōngnéng",
       "traceKey": "gaijin",
       "traceInfo": [
        {
         "c": "改",
         "py": "gǎi",
         "hv": "cải"
        },
        {
         "c": "进",
         "py": "jìn",
         "hv": "tiến"
        }
       ]
      },
      {
       "scene": "👥🔧🏭",
       "full": "我们改造得了这台旧机器",
       "vi": "Chúng tôi cải tạo được chiếc máy cũ này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "改造得了",
         "ico": "🔧",
         "c": "v",
         "py": "gǎizào de le",
         "hv": "cải tạo đắc liễu"
        },
        {
         "t": "这台旧机器",
         "ico": "🏭",
         "c": "o",
         "py": "zhè tái jiù jīqì",
         "hv": "giá đài cựu cơ khí"
        }
       ],
       "traceWord": "改造",
       "py": "Wǒmen gǎizào de le zhè tái jiù jīqì",
       "traceKey": "gaizao",
       "traceInfo": [
        {
         "c": "改",
         "py": "gǎi",
         "hv": "cải"
        },
        {
         "c": "造",
         "py": "zào",
         "hv": "tạo"
        }
       ]
      },
      {
       "scene": "🚗⛰️💪",
       "full": "这辆车动力大爬得上山",
       "vi": "Chiếc xe này động lực mạnh, leo lên núi được",
       "parts": [
        {
         "t": "这辆车",
         "ico": "🚗",
         "c": "s",
         "py": "zhè liàng chē",
         "hv": "giá lượng xa"
        },
        {
         "t": "动力大",
         "ico": "💪",
         "c": "v",
         "py": "dònglì dà",
         "hv": "động lực đại"
        },
        {
         "t": "爬得上山",
         "ico": "⛰️",
         "c": "o",
         "py": "pá de shàng shān",
         "hv": "ba đắc thượng sơn"
        }
       ],
       "traceWord": "动力",
       "py": "Zhè liàng chē dònglì dà pá de shàng shān",
       "traceKey": "dongli",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      },
      {
       "scene": "👥🛠️🆕",
       "full": "我们造得出这种先进设备",
       "vi": "Chúng tôi chế tạo được loại thiết bị tiên tiến này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "造得出",
         "ico": "🛠️",
         "c": "v",
         "py": "zào déchū",
         "hv": "tạo đắc xuất"
        },
        {
         "t": "这种先进设备",
         "ico": "🆕",
         "c": "o",
         "py": "zhè zhǒng xiānjìn shèbèi",
         "hv": "giá chủng tiên tiến thiết bị"
        }
       ],
       "traceWord": "造",
       "py": "Wǒmen zào déchū zhè zhǒng xiānjìn shèbèi",
       "traceKey": "zao",
       "traceInfo": [
        {
         "c": "造",
         "py": "zào",
         "hv": "tạo"
        }
       ]
      },
      {
       "scene": "🤖👷🙅",
       "full": "机器做得了人工做不了的事",
       "vi": "Máy móc làm được việc mà sức người không làm nổi",
       "parts": [
        {
         "t": "机器",
         "ico": "🤖",
         "c": "s",
         "py": "jīqì",
         "hv": "cơ khí"
        },
        {
         "t": "做得了",
         "ico": "✅",
         "c": "v",
         "py": "zuò de le",
         "hv": "tố đắc liễu"
        },
        {
         "t": "人工做不了的事",
         "ico": "👷",
         "c": "o",
         "py": "réngōng zuò bù le de shì",
         "hv": "nhân công tố bất liễu đích sự"
        }
       ],
       "traceWord": "人工",
       "py": "Jīqì zuò de le réngōng zuò bù le de shì",
       "traceKey": "rengong",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        }
       ]
      },
      {
       "scene": "❓🧑💡",
       "full": "你发明得出来这么好的工具吗",
       "vi": "Bạn có phát minh ra được công cụ tốt thế này không",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "发明得出来",
         "ico": "💡",
         "c": "v",
         "py": "fāmíng de chūlái",
         "hv": "phát minh đắc xuất lai"
        },
        {
         "t": "这么好的工具吗",
         "ico": "🧰",
         "c": "o",
         "py": "zhème hǎo de gōngjù ma",
         "hv": "giá ma hảo đích công cụ ma"
        }
       ],
       "traceWord": "发明",
       "py": "Nǐ fāmíng de chūlái zhème hǎo de gōngjù ma",
       "traceKey": "faming",
       "traceInfo": [
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        },
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这家工厂现代化了吗？",
       "qvi": "Nhà máy này đã hiện đại hóa chưa?",
       "scene": "🏭🆕",
       "ans": "已经现代化了",
       "opts": [
        {
         "txt": "我不想吃饭",
         "ico": "🍚",
         "py": "Wǒ bù xiǎng chīfàn"
        },
        {
         "txt": "已经现代化了",
         "ico": "🏭",
         "py": "Yǐjīng xiàndài huà le"
        },
        {
         "txt": "他在北京学习",
         "ico": "📚",
         "py": "Tā zài Běijīng xuéxí"
        }
       ],
       "qpy": "Zhè jiā gōngchǎng xiàndài huà le ma?"
      },
      {
       "q": "新工厂什么时候建成？",
       "qvi": "Nhà máy mới bao giờ xây xong?",
       "scene": "🏗️📅",
       "ans": "明年就能建成",
       "opts": [
        {
         "txt": "我昨天去买东西",
         "ico": "🛍️",
         "py": "Wǒ zuótiān qù mǎi dōngxi"
        },
        {
         "txt": "她是我的姐姐",
         "ico": "👩",
         "py": "Tā shì wǒ de jiějie"
        },
        {
         "txt": "明年就能建成",
         "ico": "🏗️",
         "py": "Míngnián jiù néng jiànchéng"
        }
       ],
       "qpy": "Xīn gōngchǎng shénme shíhou jiànchéng?"
      },
      {
       "q": "这个城市的建设怎么样？",
       "qvi": "Việc xây dựng thành phố này thế nào?",
       "scene": "🌆🏗️",
       "ans": "建设得很快",
       "opts": [
        {
         "txt": "建设得很快",
         "ico": "🏗️",
         "py": "Jiànshè de hěn kuài"
        },
        {
         "txt": "我喜欢这件衣服",
         "ico": "👕",
         "py": "Wǒ xǐhuan zhè jiàn yīfu"
        },
        {
         "txt": "他在医院工作",
         "ico": "🏥",
         "py": "Tā zài yīyuàn gōngzuò"
        }
       ],
       "qpy": "Zhè gè chéngshì de jiànshè zěnmeyàng?"
      },
      {
       "q": "你们公司想完善什么？",
       "qvi": "Công ty các bạn muốn hoàn thiện điều gì?",
       "scene": "🏢🔧",
       "ans": "想完善服务",
       "opts": [
        {
         "txt": "我坐地铁回家",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě huí jiā"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "想完善服务",
         "ico": "🛎️",
         "py": "Xiǎng wánshàn fúwù"
        }
       ],
       "qpy": "Nǐmen gōngsī xiǎng wánshàn shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi nhà cung cấp về thiết bị mới",
      "steps": [
       "<b>Bước 1:</b> Hãy tưởng tượng bạn nhắn tin cho nhà cung cấp, hỏi thiết bị mới có giao tới công ty kịp không: <i>\"新设备今天送得到公司吗？\"</i>",
       "<b>Bước 2:</b> Hỏi về chức năng và độ dễ dùng bằng 得/不 (ví dụ <i>\"这个功能我们用得了吗？\"</i>), rồi tự nói thành tiếng 3 câu về việc máy móc làm được hay không làm được.",
       "<b>Bước 3:</b> Nói với đồng nghiệp rằng máy cũ không cải tạo nổi, ví dụ <i>\"这台旧机器我们改造不了\"</i>, và đề nghị mua thiết bị tiên tiến hơn."
      ]
     }
    },
    {
     "id": "3.21B",
     "name": "Bài 3.21B: Thúc đẩy phát triển và mở rộng",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 做工作做 + ⭐ 得很突出",
       "🧑 小王 + ⚡ 唱歌唱 + 🎵 得好",
       "🧑 小张 + ⚡ 展开讨论展开 + 🔥 得很热烈"
      ],
      "tip": "Câu lặp động từ: chủ ngữ + động từ + tân ngữ + động từ + 得 (de, đắc) + bổ ngữ. Khi động từ có tân ngữ mà vẫn muốn thêm bổ ngữ mức độ, phải nhắc lại động từ: 开会开得很深入, 唱歌唱得好.",
      "vn_tip": "Người Việt hay nói thẳng \"他做工作得很好\" hoặc \"他很好做工作\", đều sai. Cách đúng: 他做工作做得很好, hoặc đưa tân ngữ lên đầu: 工作他做得很好. Không được đặt 得 ngay sau tân ngữ."
     },
     "chunks": [
      {
       "scene": "🧑📋⚡",
       "full": "小王调整计划调整得很快",
       "vi": "Tiểu Vương điều chỉnh kế hoạch rất nhanh",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "调整计划调整得",
         "ico": "📋",
         "c": "v",
         "py": "tiáozhěng jìhuà tiáozhěng de",
         "hv": "điều chỉnh kế hoạch điều chỉnh đắc"
        },
        {
         "t": "很快",
         "ico": "⚡",
         "c": "o",
         "py": "hěn kuài",
         "hv": "ngận khoái"
        }
       ],
       "traceWord": "调整",
       "py": "Xiǎowáng tiáozhěng jìhuà tiáozhěng de hěn kuài",
       "traceKey": "tiaozheng",
       "traceInfo": [
        {
         "c": "调",
         "py": "tiáo",
         "hv": "điều"
        },
        {
         "c": "整",
         "py": "zhěng",
         "hv": "chỉnh"
        }
       ]
      },
      {
       "scene": "🧑💼🌟",
       "full": "他做工作做得很突出",
       "vi": "Anh ấy làm việc rất nổi bật",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "做工作做得",
         "ico": "💼",
         "c": "v",
         "py": "zuò gōngzuò zuò de",
         "hv": "tố công tác tố đắc"
        },
        {
         "t": "很突出",
         "ico": "🌟",
         "c": "o",
         "py": "hěn tūchū",
         "hv": "ngận đột xuất"
        }
       ],
       "traceWord": "突出",
       "py": "Tā zuò gōngzuò zuò de hěn tūchū",
       "traceKey": "tuchu",
       "traceInfo": [
        {
         "c": "突",
         "py": "tū",
         "hv": "đột"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      },
      {
       "scene": "👔🗣️🔍",
       "full": "经理开会开得很深入",
       "vi": "Giám đốc họp rất sâu sát",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "开会开得",
         "ico": "🗣️",
         "c": "v",
         "py": "kāihuì kāi de",
         "hv": "khai hội khai đắc"
        },
        {
         "t": "很深入",
         "ico": "🔍",
         "c": "o",
         "py": "hěn shēnrù",
         "hv": "ngận thâm nhập"
        }
       ],
       "traceWord": "深入",
       "py": "Jīnglǐ kāihuì kāi de hěn shēnrù",
       "traceKey": "shenru",
       "traceInfo": [
        {
         "c": "深",
         "py": "shēn",
         "hv": "thâm"
        },
        {
         "c": "入",
         "py": "rù",
         "hv": "nhập"
        }
       ]
      },
      {
       "scene": "🧑📖📈",
       "full": "他学汉语学得明显比我好",
       "vi": "Anh ấy học tiếng Hán rõ ràng giỏi hơn tôi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "学汉语学得",
         "ico": "📖",
         "c": "v",
         "py": "xué Hànyǔ xué de",
         "hv": "học hán ngữ học đắc"
        },
        {
         "t": "明显比我好",
         "ico": "📈",
         "c": "o",
         "py": "míngxiǎn bǐ wǒ hǎo",
         "hv": "minh hiển tỷ ngã hảo"
        }
       ],
       "traceWord": "明显",
       "py": "Tā xué Hànyǔ xué de míngxiǎn bǐ wǒ hǎo",
       "traceKey": "mingxian",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "显",
         "py": "xiǎn",
         "hv": "hiển"
        }
       ]
      },
      {
       "scene": "👥📊⏰",
       "full": "他们加强管理加强得很及时",
       "vi": "Họ tăng cường quản lý rất kịp thời",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "加强管理加强得",
         "ico": "📊",
         "c": "v",
         "py": "jiāqiáng guǎnlǐ jiāqiáng de",
         "hv": "gia cường quản lý gia cường đắc"
        },
        {
         "t": "很及时",
         "ico": "⏰",
         "c": "o",
         "py": "hěn jíshí",
         "hv": "ngận cập thời"
        }
       ],
       "traceWord": "加强",
       "py": "Tāmen jiāqiáng guǎnlǐ jiāqiáng de hěn jíshí",
       "traceKey": "jiaqiang",
       "traceInfo": [
        {
         "c": "加",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "强",
         "py": "qiáng",
         "hv": "cường"
        }
       ]
      },
      {
       "scene": "🧑🎤👏",
       "full": "小王唱歌唱得好带动了大家",
       "vi": "Tiểu Vương hát hay, kéo cả mọi người cùng vui",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "唱歌唱得好",
         "ico": "🎤",
         "c": "v",
         "py": "chànggē chàng de hǎo",
         "hv": "xướng ca xướng đắc hảo"
        },
        {
         "t": "带动了大家",
         "ico": "👏",
         "c": "o",
         "py": "dàidòng le dàjiā",
         "hv": "đới động liễu đại gia"
        }
       ],
       "traceWord": "带动",
       "py": "Xiǎowáng chànggē chàng de hǎo dàidòng le dàjiā",
       "traceKey": "daidong",
       "traceInfo": [
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "👥🎉👍",
       "full": "他们开展活动开展得很顺利",
       "vi": "Họ triển khai hoạt động rất thuận lợi",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "开展活动开展得",
         "ico": "🎉",
         "c": "v",
         "py": "kāizhǎn huódòng kāizhǎn de",
         "hv": "khai triển hoạt động khai triển đắc"
        },
        {
         "t": "很顺利",
         "ico": "👍",
         "c": "o",
         "py": "hěn shùnlì",
         "hv": "ngận thuận lợi"
        }
       ],
       "traceWord": "开展",
       "py": "Tāmen kāizhǎn huódòng kāizhǎn de hěn shùnlì",
       "traceKey": "kaizhan",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "展",
         "py": "zhǎn",
         "hv": "triển"
        }
       ]
      },
      {
       "scene": "🧑💬🔥",
       "full": "小张展开讨论展开得很热烈",
       "vi": "Tiểu Trương mở cuộc thảo luận rất sôi nổi",
       "parts": [
        {
         "t": "小张",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎozhāng",
         "hv": "tiểu trương"
        },
        {
         "t": "展开讨论展开得",
         "ico": "💬",
         "c": "v",
         "py": "zhǎnkāi tǎolùn zhǎnkāi de",
         "hv": "triển khai thảo luận triển khai đắc"
        },
        {
         "t": "很热烈",
         "ico": "🔥",
         "c": "o",
         "py": "hěn rèliè",
         "hv": "ngận nhiệt liệt"
        }
       ],
       "traceWord": "展开",
       "py": "Xiǎozhāng zhǎnkāi tǎolùn zhǎnkāi de hěn rèliè",
       "traceKey": "zhankai",
       "traceInfo": [
        {
         "c": "展",
         "py": "zhǎn",
         "hv": "triển"
        },
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "新工作进展得怎么样？",
       "qvi": "Công việc mới tiến triển thế nào?",
       "scene": "📋📈",
       "ans": "数字显示进展很顺利",
       "opts": [
        {
         "txt": "我喜欢喝绿茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē lǜchá"
        },
        {
         "txt": "数字显示进展很顺利",
         "ico": "📈",
         "py": "Shùzì xiǎnshì jìnzhǎn hěn shùnlì"
        },
        {
         "txt": "他明天去上海",
         "ico": "✈️",
         "py": "Tā míngtiān qù Shànghǎi"
        }
       ],
       "qpy": "Xīn gōngzuò jìnzhǎn de zěnmeyàng?"
      },
      {
       "q": "你们下一步想做什么？",
       "qvi": "Bước tiếp theo các bạn muốn làm gì?",
       "scene": "👥➡️",
       "ans": "想进一步推进新工作",
       "opts": [
        {
         "txt": "我们昨天在家吃饭",
         "ico": "🍚",
         "py": "Wǒmen zuótiān zàijiā chīfàn"
        },
        {
         "txt": "她的手机很贵",
         "ico": "📱",
         "py": "Tā de shǒujī hěn guì"
        },
        {
         "txt": "想进一步推进新工作",
         "ico": "🚀",
         "py": "Xiǎng jìnyībù tuījìn xīn gōngzuò"
        }
       ],
       "qpy": "Nǐmen xià yī bù xiǎng zuò shénme?"
      },
      {
       "q": "这个电影体现了什么？",
       "qvi": "Bộ phim này thể hiện điều gì?",
       "scene": "🎬❤️",
       "ans": "体现了人们的爱心",
       "opts": [
        {
         "txt": "体现了人们的爱心",
         "ico": "❤️",
         "py": "Tǐxiàn le rénmen de àixīn"
        },
        {
         "txt": "我想买一张票",
         "ico": "🎫",
         "py": "Wǒ xiǎng mǎi yī zhāng piào"
        },
        {
         "txt": "他昨天没来",
         "ico": "🚪",
         "py": "Tā zuótiān méi lái"
        }
       ],
       "qpy": "Zhè gè diànyǐng tǐxiàn le shénme?"
      },
      {
       "q": "这家公司对城市有什么作用？",
       "qvi": "Công ty này có tác dụng gì với thành phố?",
       "scene": "🏢🌆",
       "ans": "推动了城市发展",
       "opts": [
        {
         "txt": "把会议时间调到下午",
         "ico": "🕑",
         "py": "Bǎ huìyì shíjiān diào dào xiàwǔ"
        },
        {
         "txt": "这本书很好看",
         "ico": "📖",
         "py": "Zhè běn shū hěn hǎokàn"
        },
        {
         "txt": "推动了城市发展",
         "ico": "🌆",
         "py": "Tuīdòng le chéngshì fāzhǎn"
        }
       ],
       "qpy": "Zhè jiā gōngsī duì chéngshì yǒu shénme zuòyòng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo tiến độ công việc cho sếp",
      "steps": [
       "<b>Bước 1:</b> Hãy tưởng tượng bạn báo cáo với sếp về một việc đã làm, dùng câu lặp động từ: <i>\"我开会开得很顺利。\"</i> hoặc <i>\"他做工作做得很突出。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp khen một người làm tốt, ví dụ <i>\"小王唱歌唱得好带动了大家\"</i>, rồi tự đặt thêm 3 câu với 说话/写字/开车 theo mẫu động từ + tân ngữ + động từ + 得.",
       "<b>Bước 3:</b> Nói thành tiếng kế hoạch tuần sau: <i>\"我们想进一步推进新工作。\"</i> và hỏi đồng nghiệp xem cần điều chỉnh gì."
      ]
     }
    },
    {
     "id": "3.21C",
     "name": "Bài 3.21C: Biến đổi, tăng giảm và so sánh",
     "grammar": {
      "formulas": [
       "📌 这个办法 + ❌ 没用 + ➕ 并且很麻烦",
       "📌 公司情况 + 📈 越来越好 + ➕ 并且人数增加了",
       "📌 他的想法 + 🔄 转变了 + ➕ 并且变得很积极"
      ],
      "tip": "Câu tăng tiến: vế 1, 并且 (bìngqiě, tịnh thả) + vế 2 = và còn, đồng thời. Vế sau bổ sung thông tin cùng hướng hoặc nặng hơn vế trước. 并且 đứng đầu vế sau; chủ ngữ giống nhau thường không nhắc lại.",
      "vn_tip": "Người Việt hay dùng 和 (hé) để nối hai câu hoặc hai vế: \"这个办法没用和很麻烦\" là sai. 和 chủ yếu nối danh từ/cụm danh từ, không nối hai vế câu. Nối hai vế câu phải dùng 并且 hoặc 而且."
     },
     "chunks": [
      {
       "scene": "💡❌😩",
       "full": "这个办法没用并且很麻烦",
       "vi": "Cách này vô dụng mà còn phiền phức",
       "parts": [
        {
         "t": "这个办法",
         "ico": "💡",
         "c": "s",
         "py": "zhè gè bànfǎ",
         "hv": "giá cá biện pháp"
        },
        {
         "t": "没用",
         "ico": "❌",
         "c": "v",
         "py": "méiyòng",
         "hv": "một dụng"
        },
        {
         "t": "并且很麻烦",
         "ico": "😩",
         "c": "o",
         "py": "bìngqiě hěn máfan",
         "hv": "tịnh thả ngận ma phiền"
        }
       ],
       "traceWord": "没用",
       "py": "Zhè gè bànfǎ méiyòng bìngqiě hěn máfan",
       "traceKey": "meiyong",
       "traceInfo": [
        {
         "c": "没",
         "py": "méi",
         "hv": "một"
        },
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        }
       ]
      },
      {
       "scene": "💰📈🛍️",
       "full": "他升为经理了并且工资也提高了",
       "vi": "Anh ấy được thăng chức làm giám đốc, đồng thời lương cũng tăng",
       "parts": [
        {
         "t": "他",
         "ico": "💰",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "升为经理了",
         "ico": "📈",
         "c": "v",
         "py": "shēng wéi jīnglǐ le",
         "hv": "thăng vi kinh lý liễu"
        },
        {
         "t": "并且工资也提高了",
         "ico": "🛍️",
         "c": "o",
         "py": "bìngqiě gōngzī yě tígāo le",
         "hv": "tịnh thả công tư dã đề cao liễu"
        }
       ],
       "traceWord": "升",
       "py": "Tā shēng wéi jīnglǐ le bìngqiě gōngzī yě tígāo le",
       "traceKey": "sheng",
       "traceInfo": [
        {
         "c": "升",
         "py": "shēng",
         "hv": "thăng"
        }
       ]
      },
      {
       "scene": "🏢📈👥",
       "full": "公司情况越来越好并且人数增加了",
       "vi": "Tình hình công ty ngày càng tốt, đồng thời số người tăng lên",
       "parts": [
        {
         "t": "公司情况",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī qíngkuàng",
         "hv": "công ti tình huống"
        },
        {
         "t": "越来越好",
         "ico": "📈",
         "c": "v",
         "py": "yuè lái yuè hǎo",
         "hv": "việt lai việt hảo"
        },
        {
         "t": "并且人数增加了",
         "ico": "👥",
         "c": "o",
         "py": "bìngqiě rénshù zēngjiā le",
         "hv": "tịnh thả nhân số tăng gia liễu"
        }
       ],
       "traceWord": "情况",
       "py": "Gōngsī qíngkuàng yuè lái yuè hǎo bìngqiě rénshù zēngjiā le",
       "traceKey": "qingkuang",
       "traceInfo": [
        {
         "c": "情",
         "py": "qíng",
         "hv": "tình"
        },
        {
         "c": "况",
         "py": "kuàng",
         "hv": "huống"
        }
       ]
      },
      {
       "scene": "🧑💪😊",
       "full": "他的身体状况很好并且精神不错",
       "vi": "Tình trạng sức khỏe của anh ấy rất tốt, tinh thần cũng khá",
       "parts": [
        {
         "t": "他的身体状况",
         "ico": "💪",
         "c": "s",
         "py": "tā de shēntǐ zhuàngkuàng",
         "hv": "tha đích thân thể trạng huống"
        },
        {
         "t": "很好",
         "ico": "👍",
         "c": "v",
         "py": "hěn hǎo",
         "hv": "ngận hảo"
        },
        {
         "t": "并且精神不错",
         "ico": "😊",
         "c": "o",
         "py": "bìngqiě jīngshén bùcuò",
         "hv": "tịnh thả tinh thần bất thác"
        }
       ],
       "traceWord": "状况",
       "py": "Tā de shēntǐ zhuàngkuàng hěn hǎo bìngqiě jīngshén bùcuò",
       "traceKey": "zhuangkuang",
       "traceInfo": [
        {
         "c": "状",
         "py": "zhuàng",
         "hv": "trạng"
        },
        {
         "c": "况",
         "py": "kuàng",
         "hv": "huống"
        }
       ]
      },
      {
       "scene": "🏢🙍😰",
       "full": "公司失去了很多机会并且情况很困难",
       "vi": "Công ty mất nhiều cơ hội, đồng thời tình hình rất khó khăn",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "失去了很多机会",
         "ico": "🙍",
         "c": "v",
         "py": "shīqù le hěn duō jīhuì",
         "hv": "thất khứ liễu ngận đa cơ hội"
        },
        {
         "t": "并且情况很困难",
         "ico": "😰",
         "c": "o",
         "py": "bìngqiě qíngkuàng hěn kùnnan",
         "hv": "tịnh thả tình huống ngận khốn nan"
        }
       ],
       "traceWord": "失去",
       "py": "Gōngsī shīqù le hěn duō jīhuì bìngqiě qíngkuàng hěn kùnnan",
       "traceKey": "shiqu",
       "traceInfo": [
        {
         "c": "失",
         "py": "shī",
         "hv": "thất"
        },
        {
         "c": "去",
         "py": "qù",
         "hv": "khứ"
        }
       ]
      },
      {
       "scene": "🧑🌱💪",
       "full": "他们形成了新的合作形式并且效果很好",
       "vi": "Họ đã hình thành hình thức hợp tác mới, đồng thời hiệu quả rất tốt",
       "parts": [
        {
         "t": "他们",
         "ico": "🧑",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "形成了新的合作形式",
         "ico": "🌱",
         "c": "v",
         "py": "xíngchéng le xīn de hézuò xíngshì",
         "hv": "hình thành liễu tân đích hợp tác hình thức"
        },
        {
         "t": "并且效果很好",
         "ico": "💪",
         "c": "o",
         "py": "bìngqiě xiàoguǒ hěn hǎo",
         "hv": "tịnh thả hiệu quả ngận hảo"
        }
       ],
       "traceWord": "形成",
       "py": "Tāmen xíngchéng le xīn de hézuò xíngshì bìngqiě xiàoguǒ hěn hǎo",
       "traceKey": "xingcheng",
       "traceInfo": [
        {
         "c": "形",
         "py": "xíng",
         "hv": "hình"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "🧑💭😀",
       "full": "他的想法转变了并且变得很积极",
       "vi": "Suy nghĩ của anh ấy đã thay đổi và trở nên rất tích cực",
       "parts": [
        {
         "t": "他的想法",
         "ico": "💭",
         "c": "s",
         "py": "tā de xiǎngfǎ",
         "hv": "tha đích tưởng pháp"
        },
        {
         "t": "转变了",
         "ico": "🔄",
         "c": "v",
         "py": "zhuǎnbiàn le",
         "hv": "chuyển biến liễu"
        },
        {
         "t": "并且变得很积极",
         "ico": "😀",
         "c": "o",
         "py": "bìngqiě biàn de hěn jījí",
         "hv": "tịnh thả biến đắc ngận tích cực"
        }
       ],
       "traceWord": "转变",
       "py": "Tā de xiǎngfǎ zhuǎnbiàn le bìngqiě biàn de hěn jījí",
       "traceKey": "zhuanbian",
       "traceInfo": [
        {
         "c": "转",
         "py": "zhuǎn",
         "hv": "chuyển"
        },
        {
         "c": "变",
         "py": "biàn",
         "hv": "biến"
        }
       ]
      },
      {
       "scene": "🔄⚠️🌍",
       "full": "这个变化很重大并且影响很深刻",
       "vi": "Thay đổi này rất trọng đại và ảnh hưởng rất sâu sắc",
       "parts": [
        {
         "t": "这个变化",
         "ico": "🔄",
         "c": "s",
         "py": "zhè gè biànhuà",
         "hv": "giá cá biến hóa"
        },
        {
         "t": "很重大",
         "ico": "⚠️",
         "c": "v",
         "py": "hěn zhòngdà",
         "hv": "ngận trọng đại"
        },
        {
         "t": "并且影响很深刻",
         "ico": "🌍",
         "c": "o",
         "py": "bìngqiě yǐngxiǎng hěn shēnkè",
         "hv": "tịnh thả ảnh hưởng ngận thâm khắc"
        }
       ],
       "traceWord": "重大",
       "py": "Zhè gè biànhuà hěn zhòngdà bìngqiě yǐngxiǎng hěn shēnkè",
       "traceKey": "zhongda",
       "traceInfo": [
        {
         "c": "重",
         "py": "zhòng",
         "hv": "trọng"
        },
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这两个办法一样吗？",
       "qvi": "Hai cách này giống nhau không?",
       "scene": "💡💡",
       "ans": "很类似只是形式不同",
       "opts": [
        {
         "txt": "我明天坐地铁去上班",
         "ico": "🚇",
         "py": "Wǒ míngtiān zuò dìtiě qù shàngbān"
        },
        {
         "txt": "很类似只是形式不同",
         "ico": "💡",
         "py": "Hěn lèisì zhǐshì xíngshì bù tóng"
        },
        {
         "txt": "她在家里看电视",
         "ico": "📺",
         "py": "Tā zài jiā li kàn diànshì"
        }
       ],
       "qpy": "Zhè liǎng gè bànfǎ yīyàng ma?"
      },
      {
       "q": "现在城市里还存在什么问题？",
       "qvi": "Hiện nay trong thành phố còn tồn tại vấn đề gì?",
       "scene": "🌆🚦",
       "ans": "存在交通问题",
       "opts": [
        {
         "txt": "存在交通问题",
         "ico": "🚦",
         "py": "Cúnzài jiāotōng wèntí"
        },
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "他的哥哥很高",
         "ico": "👨",
         "py": "Tā de gēge hěn gāo"
        }
       ],
       "qpy": "Xiànzài chéngshì lǐ hái cúnzài shénme wèntí?"
      },
      {
       "q": "你想怎么做这个工作？",
       "qvi": "Bạn muốn làm công việc này thế nào?",
       "scene": "🧑💼",
       "ans": "想把新旧办法结合起来",
       "opts": [
        {
         "txt": "我昨天没有去",
         "ico": "🚪",
         "py": "Wǒ zuótiān méiyǒu qù"
        },
        {
         "txt": "这件衣服太贵了",
         "ico": "👕",
         "py": "Zhè jiàn yīfu tài guì le"
        },
        {
         "txt": "想把新旧办法结合起来",
         "ico": "🤝",
         "py": "Xiǎng bǎ xīn jiù bànfǎ jiéhé qǐlái"
        }
       ],
       "qpy": "Nǐ xiǎng zěnme zuò zhè gè gōngzuò?"
      },
      {
       "q": "他现在的状态怎么样？",
       "qvi": "Trạng thái của anh ấy bây giờ thế nào?",
       "scene": "🧑😊",
       "ans": "已经变为很好的状态",
       "opts": [
        {
         "txt": "他为公司做了不少事",
         "ico": "🏢",
         "py": "Tā wèi gōngsī zuò le bù shǎo shì"
        },
        {
         "txt": "已经变为很好的状态",
         "ico": "😊",
         "py": "Yǐjīng biànwéi hěn hǎo de zhuàngtài"
        },
        {
         "txt": "我喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ xǐhuan chī miànbāo"
        }
       ],
       "qpy": "Tā xiànzài de zhuàngtài zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo thay đổi của công ty",
      "steps": [
       "<b>Bước 1:</b> Hãy tưởng tượng bạn nhắn tin cho đồng nghiệp nước ngoài về tình hình công ty, dùng 并且: <i>\"公司情况越来越好并且人数增加了。\"</i>",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu về một thay đổi gần đây ở nơi làm việc hay trong thành phố, mỗi câu có hai vế nối bằng 并且, ví dụ <i>\"这个变化很重大并且影响很深刻。\"</i>",
       "<b>Bước 3:</b> Góp ý với sếp về một cách làm không hiệu quả: <i>\"这个办法没用并且很麻烦。\"</i> rồi đề nghị cách khác."
      ]
     }
    }
   ]
  }
 }
};
