/* HSK %d — khóa tiếng Trung cho người đi làm (chuẩn HSK 3.0). Dữ liệu một cấp, nạp bằng <script src> (file:// được, không fetch).
   Tự sinh bởi zh/tools/assemble.py từ các lô đã qua kiểm (py/hv/traceKey do script điền từ hsk30 + Unihan). Định dạng: zh/docs/SPEC.md mục 4. */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[5] = {
 "label": "HSK 5",
 "modules": [
  {
   "code": "5.1",
   "title": "Lượng từ, đại từ và mức độ"
  },
  {
   "code": "5.2",
   "title": "Phó từ phạm vi, tần suất, cách thức"
  },
  {
   "code": "5.3",
   "title": "Thời gian, thái độ và lựa chọn"
  },
  {
   "code": "5.4",
   "title": "Giới từ chỉ xu hướng và căn cứ"
  },
  {
   "code": "5.5",
   "title": "Giới từ chỉ chuẩn mực và chủ thể"
  },
  {
   "code": "5.6",
   "title": "Liên từ và cụm cố định"
  },
  {
   "code": "5.7",
   "title": "Cụm cố định và cấu trúc lặp"
  },
  {
   "code": "5.8",
   "title": "Cấu trúc bốn chữ"
  },
  {
   "code": "5.9",
   "title": "Cấu trúc cố định (1)"
  },
  {
   "code": "5.10",
   "title": "Quan điểm và mốc giới hạn"
  },
  {
   "code": "5.11",
   "title": "Đối lập và thành phần câu"
  },
  {
   "code": "5.12",
   "title": "Bổ ngữ (1)"
  },
  {
   "code": "5.13",
   "title": "Bổ ngữ (2) và câu 有, câu 把"
  },
  {
   "code": "5.14",
   "title": "Các câu đặc biệt"
  },
  {
   "code": "5.15",
   "title": "So sánh và câu phức (1)"
  },
  {
   "code": "5.16",
   "title": "Câu phức: giả thiết và điều kiện"
  },
  {
   "code": "5.17",
   "title": "Câu phức: điều kiện và nhân quả"
  },
  {
   "code": "5.18",
   "title": "Câu phức: mục đích và phủ định"
  },
  {
   "code": "5.19",
   "title": "Nhường bộ, đa tầng và nhấn mạnh"
  },
  {
   "code": "5.20",
   "title": "Nhấn mạnh và khẩu ngữ (1)"
  },
  {
   "code": "5.21",
   "title": "Khẩu ngữ (2)"
  },
  {
   "code": "5.22",
   "title": "Khẩu ngữ (3)"
  }
 ],
 "data": {
  "5.1": {
   "lessons": [
    {
     "id": "5.1A",
     "name": "Bài 5.1A: Lượng từ và đơn vị đo lường",
     "grammar": {
      "formulas": [
       "🔢 数词 + 📏 量词 + 📦 名词",
       "👆 这/那 + 📏 量词 + 📦 名词",
       "❓ 几 + 📏 量词 + 📦 名词？"
      ],
      "tip": "Mỗi danh từ đi với một lượng từ riêng: 册 (cè, sách) cho sách vở, 朵 (duǒ, đóa) cho hoa, 幅 (fú, bức) cho tranh, 届 (jiè, khóa/kỳ) cho hội nghị, 颗 (kē, hạt/viên) cho vật nhỏ tròn, 匹 (pǐ, thất) cho ngựa, 扇 (shàn, phiến) cho cửa/cửa sổ. Khi có 这/那 hoặc số từ thì luôn phải có lượng từ ở giữa.",
      "vn_tip": "Tiếng Việt dùng \"cái, con\" cho rất nhiều thứ nên người Việt hay nói 一个花, 一个画, 一个马. Nói đúng: 一朵花, 一幅画, 一匹马, 一扇门."
     },
     "chunks": [
      {
       "scene": "📚🪑📄",
       "full": "桌子上有三册书和一堆文件",
       "vi": "Trên bàn có ba cuốn sách và một đống tài liệu",
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
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三册书和一堆文件",
         "ico": "📚",
         "c": "o",
         "py": "sān cè shū hé yī duī wénjiàn",
         "hv": "tam sách thư hòa nhất đôi văn kiện"
        }
       ],
       "traceWord": "册",
       "py": "Zhuōzi shàng yǒu sān cè shū hé yī duī wénjiàn",
       "traceKey": "ce",
       "traceInfo": [
        {
         "c": "册",
         "py": "cè",
         "hv": "sách"
        }
       ]
      },
      {
       "scene": "🌸🏡",
       "full": "花园里开了一朵红色的花",
       "vi": "Trong vườn nở một đóa hoa màu đỏ",
       "parts": [
        {
         "t": "花园里",
         "ico": "🏡",
         "c": "s",
         "py": "huāyuán lǐ",
         "hv": "hoa viên lý"
        },
        {
         "t": "开了",
         "ico": "🌱",
         "c": "v",
         "py": "kāi le",
         "hv": "khai liễu"
        },
        {
         "t": "一朵红色的花",
         "ico": "🌺",
         "c": "o",
         "py": "yī duǒ hóngsè de huā",
         "hv": "nhất đóa hồng sắc đích hoa"
        }
       ],
       "traceWord": "朵",
       "py": "Huāyuán lǐ kāi le yī duǒ hóngsè de huā",
       "traceKey": "duo",
       "traceInfo": [
        {
         "c": "朵",
         "py": "duǒ",
         "hv": "đóa"
        }
       ]
      },
      {
       "scene": "🖼️🧱",
       "full": "墙上挂着一幅很漂亮的画儿",
       "vi": "Trên tường treo một bức tranh rất đẹp",
       "parts": [
        {
         "t": "墙上",
         "ico": "🧱",
         "c": "s",
         "py": "qiáng shàng",
         "hv": "tường thượng"
        },
        {
         "t": "挂着",
         "ico": "📌",
         "c": "v",
         "py": "guà zhe",
         "hv": "quải trước"
        },
        {
         "t": "一幅很漂亮的画儿",
         "ico": "🖼️",
         "c": "o",
         "py": "yī fú hěn piàoliang de huàr",
         "hv": "nhất bức ngận phiêu lượng đích họa nhi"
        }
       ],
       "traceWord": "幅",
       "py": "Qiáng shàng guà zhe yī fú hěn piàoliang de huàr",
       "traceKey": "fu",
       "traceInfo": [
        {
         "c": "幅",
         "py": "fú",
         "hv": "bức"
        }
       ]
      },
      {
       "scene": "🏛️🌍👥",
       "full": "我们参加了第三届国际会议",
       "vi": "Chúng tôi đã tham dự hội nghị quốc tế lần thứ ba",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "参加了",
         "ico": "✅",
         "c": "v",
         "py": "cānjiā le",
         "hv": "tham gia liễu"
        },
        {
         "t": "第三届国际会议",
         "ico": "🌍",
         "c": "o",
         "py": "dì sān jiè guójì huìyì",
         "hv": "đệ tam giới quốc tế hội nghị"
        }
       ],
       "traceWord": "届",
       "py": "Wǒmen cānjiā le dì sān jiè guójì huìyì",
       "traceKey": "jie",
       "traceInfo": [
        {
         "c": "届",
         "py": "jiè",
         "hv": "giới"
        }
       ]
      },
      {
       "scene": "🍬🎁🙂",
       "full": "他送给我一颗很甜的糖",
       "vi": "Anh ấy tặng tôi một viên kẹo rất ngọt",
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
         "t": "我一颗很甜的糖",
         "ico": "🍬",
         "c": "o",
         "py": "wǒ yī kē hěn tián de táng",
         "hv": "ngã nhất khỏa ngận điềm đích đường"
        }
       ],
       "traceWord": "颗",
       "py": "Tā sòng gěi wǒ yī kē hěn tián de táng",
       "traceKey": "ke",
       "traceInfo": [
        {
         "c": "颗",
         "py": "kē",
         "hv": "khỏa"
        }
       ]
      },
      {
       "scene": "🐎🌿",
       "full": "草地上有一匹白色的马",
       "vi": "Trên bãi cỏ có một con ngựa màu trắng",
       "parts": [
        {
         "t": "草地上",
         "ico": "🌿",
         "c": "s",
         "py": "cǎo dìshang",
         "hv": "thảo địa thượng"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一匹白色的马",
         "ico": "🐎",
         "c": "o",
         "py": "yī pǐ báisè de mǎ",
         "hv": "nhất thất bạch sắc đích mã"
        }
       ],
       "traceWord": "匹",
       "py": "Cǎo dìshang yǒu yī pǐ báisè de mǎ",
       "traceKey": "pi",
       "traceInfo": [
        {
         "c": "匹",
         "py": "pǐ",
         "hv": "thất"
        }
       ]
      },
      {
       "scene": "🚪🙂",
       "full": "他关上了那扇很重的门",
       "vi": "Anh ấy đóng cánh cửa rất nặng đó lại",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "关上了",
         "ico": "🔒",
         "c": "v",
         "py": "guānshang le",
         "hv": "quan thượng liễu"
        },
        {
         "t": "那扇很重的门",
         "ico": "🚪",
         "c": "o",
         "py": "nà shān hěn zhòng de mén",
         "hv": "na phiến ngận trọng đích môn"
        }
       ],
       "traceWord": "扇",
       "py": "Tā guānshang le nà shān hěn zhòng de mén",
       "traceKey": "shan",
       "traceInfo": [
        {
         "c": "扇",
         "py": "shān",
         "hv": "phiến"
        }
       ]
      },
      {
       "scene": "🚚📦⚖️",
       "full": "这辆车一次能运输五吨货",
       "vi": "Chiếc xe này mỗi lần chở được năm tấn hàng",
       "parts": [
        {
         "t": "这辆车",
         "ico": "🚚",
         "c": "s",
         "py": "zhè liàng chē",
         "hv": "giá lượng xa"
        },
        {
         "t": "一次能运输",
         "ico": "🚛",
         "c": "v",
         "py": "yī cì néng yùnshū",
         "hv": "nhất thứ năng vận thâu"
        },
        {
         "t": "五吨货",
         "ico": "📦",
         "c": "o",
         "py": "wǔ dūn huò",
         "hv": "ngũ đốn hóa"
        }
       ],
       "traceWord": "吨",
       "py": "Zhè liàng chē yī cì néng yùnshū wǔ dūn huò",
       "traceKey": "dun",
       "traceInfo": [
        {
         "c": "吨",
         "py": "dūn",
         "hv": "đốn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "老板在门外叫了你几声？",
       "qvi": "Sếp gọi bạn mấy tiếng ở ngoài cửa?",
       "scene": "👔🚪📢",
       "ans": "他叫了两声",
       "opts": [
        {
         "txt": "他去了两次",
         "ico": "🚶",
         "py": "Tā qù le liǎng cì"
        },
        {
         "txt": "他叫了两声",
         "ico": "📢",
         "py": "Tā jiào le liǎng shēng"
        },
        {
         "txt": "他喝了两杯",
         "ico": "🥤",
         "py": "Tā hē le liǎng bēi"
        }
       ],
       "qpy": "Lǎobǎn zài mén wài jiào le nǐ jǐ shēng?"
      },
      {
       "q": "你要的药是几盒？",
       "qvi": "Thuốc bạn cần là mấy hộp?",
       "scene": "💊📦",
       "ans": "我要三盒药",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "药店在银行旁边",
         "ico": "🏦",
         "py": "Yàodiàn zài yínháng pángbiān"
        },
        {
         "txt": "我要三盒药",
         "ico": "💊",
         "py": "Wǒ yào sān hé yào"
        }
       ],
       "qpy": "Nǐ yào de yào shì jǐ hé?"
      },
      {
       "q": "这根线有多长？",
       "qvi": "Sợi dây này dài bao nhiêu?",
       "scene": "🧵📏",
       "ans": "它只有三寸长",
       "opts": [
        {
         "txt": "甲公司和乙公司在谈合作",
         "ico": "🤝",
         "py": "Jiǎ gōngsī hé yǐ gōngsī zài tán hézuò"
        },
        {
         "txt": "他是我们的长辈",
         "ico": "👴",
         "py": "Tā shì wǒmen de zhǎng bèi"
        },
        {
         "txt": "它只有三寸长",
         "ico": "📏",
         "py": "Tā zhǐyǒu sān cùn cháng"
        }
       ],
       "qpy": "Zhè gēn xiàn yǒu duō cháng?"
      },
      {
       "q": "他跑一百米要多长时间？",
       "qvi": "Anh ấy chạy một trăm mét mất bao lâu?",
       "scene": "🏃⏱️",
       "ans": "他只用了十二秒",
       "opts": [
        {
         "txt": "他只用了十二秒",
         "ico": "⏱️",
         "py": "Tā zhǐ yòng le shí èr miǎo"
        },
        {
         "txt": "他是我们公司的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        },
        {
         "txt": "我家在学校旁边",
         "ico": "🏫",
         "py": "Wǒ jiā zài xuéxiào pángbiān"
        }
       ],
       "qpy": "Tā pǎo yī bǎi mǐ yào duō cháng shíjiān?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua đồ văn phòng và quà cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh bàn làm việc, nói thành tiếng số lượng từng thứ bằng lượng từ đúng, ví dụ <i>\"桌子上有三册书和一堆文件\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp người Trung Quốc kể về một bức tranh hoặc một đóa hoa trong văn phòng, dùng <i>\"一幅\"</i>, <i>\"一朵\"</i>.",
       "<b>Bước 3:</b> Gọi điện hỏi cửa hàng văn phòng phẩm: <i>\"你要的药是几盒？\"</i> dạng câu hỏi \"几 + lượng từ\" để hỏi số hộp, số cuốn bạn cần mua, rồi tự trả lời bằng một câu hoàn chỉnh."
      ]
     }
    },
    {
     "id": "5.1B",
     "name": "Bài 5.1B: Đại từ, phạm vi và vị trí",
     "grammar": {
      "formulas": [
       "👥 我们 + 🤝 彼此 + ⚡ 信任",
       "😮 情况 + ⚡ 如此 + 📈 严重",
       "📍 在 + ⏳ 三天 + 🔒 之内 + ⚡ 完成"
      ],
      "tip": "彼此 (bǐcǐ, bỉ thử) = \"lẫn nhau\", đứng trước động từ: 彼此了解, 彼此信任. 如此 (rúcǐ, như thử) = \"như vậy, đến thế\", đứng trước tính từ hoặc động từ: 如此严重. Các từ chỉ phạm vi như 之内, 之外, 之下, 之中 đứng sau cụm danh từ: 在...之内, 除了...之外, 在...帮助之下, ...之中.",
      "vn_tip": "Người Việt hay dịch \"với nhau\" thành 一起 hoặc 互相 ở mọi chỗ; trong văn viết trang trọng nên dùng 彼此 trước động từ. Đừng nói 在三天内之 hay đặt 之内 trước danh từ: phải là 在三天之内, danh từ đứng trước."
     },
     "chunks": [
      {
       "scene": "🤝👥💼",
       "full": "我们彼此信任所以合作得很顺利",
       "vi": "Chúng tôi tin tưởng lẫn nhau nên hợp tác rất suôn sẻ",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "彼此信任",
         "ico": "🤝",
         "c": "v",
         "py": "bǐcǐ xìnrèn",
         "hv": "bỉ thử tín nhiệm"
        },
        {
         "t": "所以合作得很顺利",
         "ico": "✅",
         "c": "o",
         "py": "suǒyǐ hézuò de hěn shùnlì",
         "hv": "sở dĩ hợp tác đắc ngận thuận lợi"
        }
       ],
       "traceWord": "彼此",
       "py": "Wǒmen bǐcǐ xìnrèn suǒyǐ hézuò de hěn shùnlì",
       "traceKey": "bici",
       "traceInfo": [
        {
         "c": "彼",
         "py": "bǐ",
         "hv": "bỉ"
        },
        {
         "c": "此",
         "py": "cǐ",
         "hv": "thử"
        }
       ]
      },
      {
       "scene": "⚠️📉🏃",
       "full": "情况如此严重大伙儿必须马上行动",
       "vi": "Tình hình nghiêm trọng đến thế, mọi người phải hành động ngay",
       "parts": [
        {
         "t": "情况",
         "ico": "📊",
         "c": "s",
         "py": "qíngkuàng",
         "hv": "tình huống"
        },
        {
         "t": "如此严重",
         "ico": "⚠️",
         "c": "v",
         "py": "rúcǐ yánzhòng",
         "hv": "như thử nghiêm trọng"
        },
        {
         "t": "大伙儿必须马上行动",
         "ico": "🏃",
         "c": "o",
         "py": "dàhuǒr bìxū mǎshàng xíngdòng",
         "hv": "đại hỏa nhi tất tu mã thượng hành động"
        }
       ],
       "traceWord": "如此",
       "py": "Qíngkuàng rúcǐ yánzhòng dàhuǒr bìxū mǎshàng xíngdòng",
       "traceKey": "ruci",
       "traceInfo": [
        {
         "c": "如",
         "py": "rú",
         "hv": "như"
        },
        {
         "c": "此",
         "py": "cǐ",
         "hv": "thử"
        }
       ]
      },
      {
       "scene": "🙋📋👍",
       "full": "本人同意这个项目的安排",
       "vi": "Cá nhân tôi đồng ý với sự sắp xếp của dự án này",
       "parts": [
        {
         "t": "本人",
         "ico": "🙋",
         "c": "s",
         "py": "běnrén",
         "hv": "bản nhân"
        },
        {
         "t": "同意",
         "ico": "👍",
         "c": "v",
         "py": "tóngyì",
         "hv": "đồng ý"
        },
        {
         "t": "这个项目的安排",
         "ico": "📋",
         "c": "o",
         "py": "zhè gè xiàng mùdì ānpái",
         "hv": "giá cá hạng mục đích an bài"
        }
       ],
       "traceWord": "本人",
       "py": "Běnrén tóngyì zhè gè xiàng mùdì ānpái",
       "traceKey": "benren",
       "traceInfo": [
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        },
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        }
       ]
      },
      {
       "scene": "🏠📍📆",
       "full": "本人住在这一带已经十多年了",
       "vi": "Tôi sống ở khu vực này đã hơn mười năm rồi",
       "parts": [
        {
         "t": "本人",
         "ico": "🙋",
         "c": "s",
         "py": "běnrén",
         "hv": "bản nhân"
        },
        {
         "t": "住在",
         "ico": "🏠",
         "c": "v",
         "py": "zhù zài",
         "hv": "trú tại"
        },
        {
         "t": "这一带已经十多年了",
         "ico": "📆",
         "c": "o",
         "py": "zhè yīdài yǐjīng shí duō nián le",
         "hv": "giá nhất đới dĩ kinh thập đa niên liễu"
        }
       ],
       "traceWord": "一带",
       "py": "Běnrén zhù zài zhè yīdài yǐjīng shí duō nián le",
       "traceKey": "yidai",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        }
       ]
      },
      {
       "scene": "💡✅🔧",
       "full": "这个办法虽然简单但是其效果非常好",
       "vi": "Cách này tuy đơn giản nhưng hiệu quả của nó rất tốt",
       "parts": [
        {
         "t": "这个办法",
         "ico": "💡",
         "c": "s",
         "py": "zhè gè bànfǎ",
         "hv": "giá cá biện pháp"
        },
        {
         "t": "虽然简单",
         "ico": "🧩",
         "c": "v",
         "py": "suīrán jiǎndān",
         "hv": "tuy nhiên giản đơn"
        },
        {
         "t": "但是其效果非常好",
         "ico": "🌟",
         "c": "o",
         "py": "dànshì qí xiàoguǒ fēicháng hǎo",
         "hv": "đãn thị kỳ hiệu quả phi thường hảo"
        }
       ],
       "traceWord": "其",
       "py": "Zhè gè bànfǎ suīrán jiǎndān dànshì qí xiàoguǒ fēicháng hǎo",
       "traceKey": "qi",
       "traceInfo": [
        {
         "c": "其",
         "py": "qí",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "🚪🙂👀",
       "full": "他站在门旁看了看四周",
       "vi": "Anh ấy đứng cạnh cửa nhìn quanh bốn phía",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "站在门旁",
         "ico": "🚪",
         "c": "v",
         "py": "zhàn zài mén páng",
         "hv": "trạm tại môn bàng"
        },
        {
         "t": "看了看四周",
         "ico": "👀",
         "c": "o",
         "py": "kàn le kàn sìzhōu",
         "hv": "khán liễu khán tứ chu"
        }
       ],
       "traceWord": "四周",
       "py": "Tā zhàn zài mén páng kàn le kàn sìzhōu",
       "traceKey": "sizhou",
       "traceInfo": [
        {
         "c": "四",
         "py": "sì",
         "hv": "tứ"
        },
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        }
       ]
      },
      {
       "scene": "📝📆⏳",
       "full": "我们必须在三天之内完成这份报告",
       "vi": "Chúng ta phải hoàn thành bản báo cáo này trong vòng ba ngày",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "必须在三天之内完成",
         "ico": "⏳",
         "c": "v",
         "py": "bìxū zài sān tiān zhīnèi wánchéng",
         "hv": "tất tu tại tam thiên chi nội hoàn thành"
        },
        {
         "t": "这份报告",
         "ico": "📝",
         "c": "o",
         "py": "zhè fèn bàogào",
         "hv": "giá phần báo cáo"
        }
       ],
       "traceWord": "之内",
       "py": "Wǒmen bìxū zài sān tiān zhīnèi wánchéng zhè fèn bàogào",
       "traceKey": "zhinei",
       "traceInfo": [
        {
         "c": "之",
         "py": "zhī",
         "hv": "chi"
        },
        {
         "c": "内",
         "py": "nèi",
         "hv": "nội"
        }
       ]
      },
      {
       "scene": "🏢👥💪",
       "full": "全公司上下一起努力才能取得成功",
       "vi": "Cả công ty từ trên xuống dưới cùng nỗ lực mới có thể thành công",
       "parts": [
        {
         "t": "全公司上下",
         "ico": "🏢",
         "c": "s",
         "py": "quán gōngsī shàngxià",
         "hv": "toàn công ti thượng hạ"
        },
        {
         "t": "一起努力",
         "ico": "💪",
         "c": "v",
         "py": "yīqǐ nǔlì",
         "hv": "nhất khởi nỗ lực"
        },
        {
         "t": "才能取得成功",
         "ico": "🏆",
         "c": "o",
         "py": "cáinéng qǔdé chénggōng",
         "hv": "tài năng thủ đắc thành công"
        }
       ],
       "traceWord": "上下",
       "py": "Quán gōngsī shàngxià yīqǐ nǔlì cáinéng qǔdé chénggōng",
       "traceKey": "shangxia",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们的客人都在国内吗？",
       "qvi": "Khách hàng của các bạn đều ở trong nước à?",
       "scene": "🌍🧑‍💼",
       "ans": "除了国内之外还有很多外国客人",
       "opts": [
        {
         "txt": "我昨天去过两次银行",
         "ico": "🏦",
         "py": "Wǒ zuótiān qù guò liǎng cì yínháng"
        },
        {
         "txt": "除了国内之外还有很多外国客人",
         "ico": "🌍",
         "py": "Chúle guó nèi zhīwài hái yǒu hěn duō wàiguó kèrén"
        },
        {
         "txt": "我们的经理是王先生",
         "ico": "👔",
         "py": "Wǒmen de jīnglǐ shì Wángxiānshēng"
        }
       ],
       "qpy": "Nǐmen de kèrén dōu zài guó nèi ma?"
      },
      {
       "q": "他为什么能取得这么大的成功？",
       "qvi": "Vì sao anh ấy đạt được thành công lớn như vậy?",
       "scene": "🏆💪👨‍🏫",
       "ans": "他在大家的帮助之下不断努力",
       "opts": [
        {
         "txt": "他今年已经三十岁了",
         "ico": "🎂",
         "py": "Tā jīnnián yǐjīng sān shí suì le"
        },
        {
         "txt": "他昨天没有去上班",
         "ico": "🏠",
         "py": "Tā zuótiān méiyǒu qù shàngbān"
        },
        {
         "txt": "他在大家的帮助之下不断努力",
         "ico": "💪",
         "py": "Tā zài dàjiā de bāngzhù zhīxià bùduàn nǔlì"
        }
       ],
       "qpy": "Tā wèi shénme néng qǔdé zhème dà de chénggōng?"
      },
      {
       "q": "这些问题之中哪一个最重要？",
       "qvi": "Trong những vấn đề này cái nào quan trọng nhất?",
       "scene": "❓📋⭐",
       "ans": "价格问题最重要",
       "opts": [
        {
         "txt": "他住在森林深处",
         "ico": "🌲",
         "py": "Tā zhù zài sēnlín shēnchù"
        },
        {
         "txt": "价格问题最重要",
         "ico": "💰",
         "py": "Jiàgé wèntí zuì zhòngyào"
        },
        {
         "txt": "学校在远处",
         "ico": "🏫",
         "py": "Xuéxiào zài yuǎnchù"
        }
       ],
       "qpy": "Zhèxiē wèntí zhīzhōng nǎ yī gè zuì zhòngyào?"
      },
      {
       "q": "调查以后你有什么看法？",
       "qvi": "Sau khảo sát bạn có nhận định gì?",
       "scene": "📊🤔",
       "ans": "由此可见大家都很满意",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "这家店的东西很便宜",
         "ico": "🛒",
         "py": "Zhè jiā diàn de dōngxi hěn piányi"
        },
        {
         "txt": "由此可见大家都很满意",
         "ico": "😊",
         "py": "Yóu cǐ kějiàn dàjiā dōu hěn mǎnyì"
        }
       ],
       "qpy": "Diàochá yǐhòu nǐ yǒu shénme kànfǎ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phát biểu ngắn trong cuộc họp nhóm",
      "steps": [
       "<b>Bước 1:</b> Tự nói thành tiếng 3 câu giới thiệu về nhóm của bạn, dùng <i>\"我们彼此信任所以合作得很顺利\"</i> làm mẫu rồi đổi nội dung theo công việc thật.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp báo hạn chót, dùng <i>\"我们必须在三天之内完成这份报告\"</i> và thay số ngày, tên báo cáo.",
       "<b>Bước 3:</b> Kết thúc bài phát biểu bằng <i>\"全公司上下一起努力才能取得成功\"</i> và một câu bày tỏ quan điểm cá nhân bắt đầu bằng <i>\"本人\"</i>."
      ]
     }
    },
    {
     "id": "5.1C",
     "name": "Bài 5.1C: Đánh giá mức độ trong công việc",
     "grammar": {
      "formulas": [
       "📋 这个计划 + ⚠️ 过于 + 🧩 复杂",
       "😮 这件事 + 💬 可 + ❌ 不是 + 🧩 简单",
       "🙂 稍/稍微 + ⚡ 休息 + 1️⃣ 一下"
      ],
      "tip": "Phó từ mức độ đứng trước tính từ hoặc động từ: 过于 (guòyú, quá) thường dùng cho điều tiêu cực, 可 (kě, đấy chứ) nhấn mạnh giọng điệu, 稍 / 稍微 (shāo / shāowēi, hơi, một chút) dùng cho mức độ nhẹ, 尤其 (yóuqí, đặc biệt là) nêu điều nổi bật nhất trong một nhóm.",
      "vn_tip": "Người Việt hay dịch \"hơi\" thành 很 hoặc 太 nên nói sai mức độ. Mức nhẹ phải dùng 稍微 hoặc 稍, ví dụ 稍微休息一下. Còn \"quá mức\" dùng 过于 + tính từ, không thêm 很 phía trước."
     },
     "chunks": [
      {
       "scene": "📋🤯⚠️",
       "full": "这个计划过于复杂大家很难马上理解",
       "vi": "Kế hoạch này quá phức tạp, mọi người khó hiểu ngay được",
       "parts": [
        {
         "t": "这个计划",
         "ico": "📋",
         "c": "s",
         "py": "zhè gè jìhuà",
         "hv": "giá cá kế hoạch"
        },
        {
         "t": "过于复杂",
         "ico": "🌀",
         "c": "v",
         "py": "guòyú fùzá",
         "hv": "quá vu phục tạp"
        },
        {
         "t": "大家很难马上理解",
         "ico": "🤯",
         "c": "o",
         "py": "dàjiā hěn nán mǎshàng lǐjiě",
         "hv": "đại gia ngận nan mã thượng lý giải"
        }
       ],
       "traceWord": "过于",
       "py": "Zhè gè jìhuà guòyú fùzá dàjiā hěn nán mǎshàng lǐjiě",
       "traceKey": "guoyu",
       "traceInfo": [
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "😮💬🧩",
       "full": "这件事可不是你想的那么简单",
       "vi": "Chuyện này đâu có đơn giản như bạn nghĩ",
       "parts": [
        {
         "t": "这件事",
         "ico": "📌",
         "c": "s",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        },
        {
         "t": "可不是",
         "ico": "🙅",
         "c": "v",
         "py": "kě bú shì",
         "hv": "khả bất thị"
        },
        {
         "t": "你想的那么简单",
         "ico": "🧩",
         "c": "o",
         "py": "nǐ xiǎng de nàme jiǎndān",
         "hv": "nễ tưởng đích na ma giản đơn"
        }
       ],
       "traceWord": "可",
       "py": "Zhè jiàn shì kě bú shì nǐ xiǎng de nàme jiǎndān",
       "traceKey": "ke",
       "traceInfo": [
        {
         "c": "可",
         "py": "kě",
         "hv": "khả"
        }
       ]
      },
      {
       "scene": "🏠🔍📍",
       "full": "这个房间稍小但是位置很好",
       "vi": "Căn phòng này hơi nhỏ nhưng vị trí rất tốt",
       "parts": [
        {
         "t": "这个房间",
         "ico": "🏠",
         "c": "s",
         "py": "zhè gè fángjiān",
         "hv": "giá cá phòng gian"
        },
        {
         "t": "稍小",
         "ico": "📐",
         "c": "v",
         "py": "shāo xiǎo",
         "hv": "sảo tiểu"
        },
        {
         "t": "但是位置很好",
         "ico": "📍",
         "c": "o",
         "py": "dànshì wèizhì hěn hǎo",
         "hv": "đãn thị vị trí ngận hảo"
        }
       ],
       "traceWord": "稍",
       "py": "Zhè gè fángjiān shāo xiǎo dànshì wèizhì hěn hǎo",
       "traceKey": "shao",
       "traceInfo": [
        {
         "c": "稍",
         "py": "shāo",
         "hv": "sảo"
        }
       ]
      },
      {
       "scene": "☕😌🪑",
       "full": "你稍微休息一下再继续工作吧",
       "vi": "Bạn nghỉ một chút rồi hãy tiếp tục làm việc nhé",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "稍微休息",
         "ico": "☕",
         "c": "v",
         "py": "shāowēi xiūxi",
         "hv": "sảo vi hưu tức"
        },
        {
         "t": "一下再继续工作吧",
         "ico": "💼",
         "c": "o",
         "py": "yī xià zài jìxù gōngzuò ba",
         "hv": "nhất hạ tái kế tục công tác ba"
        }
       ],
       "traceWord": "稍微",
       "py": "Nǐ shāowēi xiūxi yī xià zài jìxù gōngzuò ba",
       "traceKey": "shaowei",
       "traceInfo": [
        {
         "c": "稍",
         "py": "shāo",
         "hv": "sảo"
        },
        {
         "c": "微",
         "py": "wēi",
         "hv": "vi"
        }
       ]
      },
      {
       "scene": "🏢😓📈",
       "full": "公司最近很忙尤其是销售部门",
       "vi": "Dạo này công ty rất bận, đặc biệt là bộ phận bán hàng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "最近很忙",
         "ico": "😓",
         "c": "v",
         "py": "zuìjìn hěn máng",
         "hv": "tối cận ngận mang"
        },
        {
         "t": "尤其是销售部门",
         "ico": "📈",
         "c": "o",
         "py": "yóuqí shì xiāoshòu bùmén",
         "hv": "vưu kỳ thị tiêu thụ bộ môn"
        }
       ],
       "traceWord": "尤其",
       "py": "Gōngsī zuìjìn hěn máng yóuqí shì xiāoshòu bùmén",
       "traceKey": "youqi",
       "traceInfo": [
        {
         "c": "尤",
         "py": "yóu",
         "hv": "vưu"
        },
        {
         "c": "其",
         "py": "qí",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "⏰😫💻",
       "full": "过度加班会让人感觉累得厉害",
       "vi": "Tăng ca quá mức sẽ khiến người ta thấy mệt dữ dội",
       "parts": [
        {
         "t": "过度加班",
         "ico": "⏰",
         "c": "s",
         "py": "guòdù jiābān",
         "hv": "quá độ gia ban"
        },
        {
         "t": "会让",
         "ico": "⚡",
         "c": "v",
         "py": "huì ràng",
         "hv": "hội nhượng"
        },
        {
         "t": "人感觉累得厉害",
         "ico": "😫",
         "c": "o",
         "py": "rén gǎnjué lèi de lìhai",
         "hv": "nhân cảm giác lụy đắc lệ hại"
        }
       ],
       "traceWord": "过度",
       "py": "Guòdù jiābān huì ràng rén gǎnjué lèi de lìhai",
       "traceKey": "guodu",
       "traceInfo": [
        {
         "c": "过",
         "py": "guò",
         "hv": "quá"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "😎✊🎯",
       "full": "他信心十足地紧紧抓住了这次机会",
       "vi": "Anh ấy đầy tự tin nắm chặt cơ hội lần này",
       "parts": [
        {
         "t": "他",
         "ico": "😎",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "信心十足地紧紧抓住了",
         "ico": "✊",
         "c": "v",
         "py": "xìnxīn shízú de jǐnjǐn zhuāzhù le",
         "hv": "tín tâm thập túc địa khẩn khẩn trảo trú liễu"
        },
        {
         "t": "这次机会",
         "ico": "🎯",
         "c": "o",
         "py": "zhè cì jīhuì",
         "hv": "giá thứ cơ hội"
        }
       ],
       "traceWord": "十足",
       "py": "Tā xìnxīn shízú de jǐnjǐn zhuāzhù le zhè cì jīhuì",
       "traceKey": "shizu",
       "traceInfo": [
        {
         "c": "十",
         "py": "shí",
         "hv": "thập"
        },
        {
         "c": "足",
         "py": "zú",
         "hv": "túc"
        }
       ]
      },
      {
       "scene": "🚗⏰🌅",
       "full": "我们尽可能早点出发起码提前一个小时",
       "vi": "Chúng ta cố gắng đi sớm, ít nhất là sớm hơn một tiếng",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "尽可能早点出发",
         "ico": "🚗",
         "c": "v",
         "py": "jìn kěnéng zǎo diǎn chūfā",
         "hv": "tận khả năng tảo điểm xuất phát"
        },
        {
         "t": "起码提前一个小时",
         "ico": "⏰",
         "c": "o",
         "py": "qǐmǎ tíqián yī gè xiǎoshí",
         "hv": "khởi mã đề tiền nhất cá tiểu thời"
        }
       ],
       "traceWord": "尽可能",
       "py": "Wǒmen jìn kěnéng zǎo diǎn chūfā qǐmǎ tíqián yī gè xiǎoshí",
       "traceKey": "jinkeneng",
       "traceInfo": [
        {
         "c": "尽",
         "py": "jìn",
         "hv": "tận"
        },
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
      }
     ],
     "qaList": [
      {
       "q": "你们最近开会多吗？",
       "qvi": "Dạo này các bạn họp nhiều không?",
       "scene": "🗓️👥",
       "ans": "非常频繁几乎天天都要开会",
       "opts": [
        {
         "txt": "我们公司在地铁站旁边",
         "ico": "🚇",
         "py": "Wǒmen gōngsī zài dìtiězhàn pángbiān"
        },
        {
         "txt": "非常频繁几乎天天都要开会",
         "ico": "🗓️",
         "py": "Fēicháng pínfán jīhū tiān tiān dōu yào kāihuì"
        },
        {
         "txt": "他是我们的新同事",
         "ico": "🧑‍💼",
         "py": "Tā shì wǒmen de xīn tóngshì"
        }
       ],
       "qpy": "Nǐmen zuìjìn kāihuì duō ma?"
      },
      {
       "q": "这个项目大致需要多长时间？",
       "qvi": "Dự án này đại khái cần bao lâu?",
       "scene": "📂⏳",
       "ans": "大致需要三个月",
       "opts": [
        {
         "txt": "我们是上个月开始的",
         "ico": "📅",
         "py": "Wǒmen shì shàng ge yuè kāishǐ de"
        },
        {
         "txt": "一共有二十个人",
         "ico": "👥",
         "py": "Yī gòngyǒu èr shí gè rén"
        },
        {
         "txt": "大致需要三个月",
         "ico": "⏳",
         "py": "Dàzhì xūyào sān gè yuè"
        }
       ],
       "qpy": "Zhè gè xiàngmù dàzhì xūyào duō cháng shíjiān?"
      },
      {
       "q": "在大城市找一份好工作容易吗？",
       "qvi": "Ở thành phố lớn tìm một việc tốt có dễ không?",
       "scene": "🏙️💼🔍",
       "ans": "实在不易而且需要很多经验",
       "opts": [
        {
         "txt": "他难得来一次公司",
         "ico": "🏢",
         "py": "Tā nándé lái yī cì gōngsī"
        },
        {
         "txt": "实在不易而且需要很多经验",
         "ico": "💼",
         "py": "Shízài bùyì érqiě xūyào hěn duō jīngyàn"
        },
        {
         "txt": "我们已经吃过午饭了",
         "ico": "🍚",
         "py": "Wǒmen yǐjīng chī guò wǔfàn le"
        }
       ],
       "qpy": "Zài dà chéngshì zhǎo yī fèn hǎo gōngzuò róngyì ma?"
      },
      {
       "q": "这次培训的效果怎么样？",
       "qvi": "Hiệu quả của đợt tập huấn lần này thế nào?",
       "scene": "🎓👥⏳",
       "ans": "参加的人众多但是时间不足",
       "opts": [
        {
         "txt": "今天难得有时间我想回家休息",
         "ico": "🏠",
         "py": "Jīntiān nándé yǒu shíjiān wǒ xiǎng huí jiā xiūxi"
        },
        {
         "txt": "我们明天要去北京开会",
         "ico": "✈️",
         "py": "Wǒmen míngtiān yào qù Běijīng kāihuì"
        },
        {
         "txt": "参加的人众多但是时间不足",
         "ico": "👥",
         "py": "Cānjiā de rén zhòngduō dànshì shíjiān bùzú"
        }
       ],
       "qpy": "Zhè cì péixùn de xiàoguǒ zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận xét một kế hoạch với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn một kế hoạch hoặc quy trình trong công việc thật, tự nói thành tiếng nhận xét của bạn bằng <i>\"这个计划过于复杂\"</i> và một lý do.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp đề nghị điều chỉnh nhẹ, dùng <i>\"你稍微休息一下再继续工作吧\"</i> hoặc <i>\"这个房间稍小但是位置很好\"</i> làm mẫu, thay nội dung theo tình huống của bạn.",
       "<b>Bước 3:</b> Nêu điều bạn quan tâm nhất bằng <i>\"尤其\"</i> và hẹn thời gian bắt đầu bằng <i>\"我们尽可能早点出发起码提前一个小时\"</i>, đổi nội dung cho hợp."
      ]
     }
    }
   ]
  },
  "5.2": {
   "lessons": [
    {
     "id": "5.2A",
     "name": "Bài 5.2A: Thống kê và so sánh số liệu",
     "grammar": {
      "formulas": [
       "🏢 我们公司的产品 + ⚡ 大都 + 📈 卖得很好",
       "👥 部门的员工 + 🌐 全都 + ✅ 参加了会议"
      ],
      "tip": "Phó từ 大都 (dàdū, đại đô) = phần lớn, đa số; 全都 (quándōu, toàn đô) = tất cả, không trừ ai. Cả hai đứng trước động từ hoặc tính từ, sau chủ ngữ. 大都 chỉ số lượng lớn nhưng chưa phải toàn bộ, còn 全都 là 100%.",
      "vn_tip": "Người Việt hay đặt \"đa số / tất cả\" sau động từ (nói như 参加了会议大都). Trong tiếng Trung phải đặt trước động từ: 员工大都参加了会议. Cũng đừng dùng 大都 khi muốn nói \"tất cả\" (phải dùng 全都)."
     },
     "chunks": [
      {
       "scene": "🏢📦👍",
       "full": "我们公司的产品大都卖得很好",
       "vi": "Sản phẩm của công ty chúng tôi phần lớn bán rất chạy",
       "parts": [
        {
         "t": "我们公司的产品",
         "ico": "📦",
         "c": "s",
         "py": "wǒmen gōngsī de chǎnpǐn",
         "hv": "ngã môn công ti đích sản phẩm"
        },
        {
         "t": "大都",
         "ico": "👥",
         "c": "v",
         "py": "dàdū",
         "hv": "đại đô"
        },
        {
         "t": "卖得很好",
         "ico": "👍",
         "c": "o",
         "py": "mài de hěn hǎo",
         "hv": "mại đắc ngận hảo"
        }
       ],
       "traceWord": "大都",
       "py": "Wǒmen gōngsī de chǎnpǐn dàdū mài de hěn hǎo",
       "traceKey": "dadu",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "都",
         "py": "dū",
         "hv": "đô"
        }
       ]
      },
      {
       "scene": "👥🗓️✅",
       "full": "我们部门的员工全都参加了会议",
       "vi": "Nhân viên trong phòng chúng tôi đều đã tham gia cuộc họp",
       "parts": [
        {
         "t": "我们部门的员工",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen bùmén de yuángōng",
         "hv": "ngã môn bộ môn đích viên công"
        },
        {
         "t": "全都",
         "ico": "💯",
         "c": "v",
         "py": "quándōu",
         "hv": "toàn đô"
        },
        {
         "t": "参加了会议",
         "ico": "🗓️",
         "c": "o",
         "py": "cānjiā le huìyì",
         "hv": "tham gia liễu hội nghị"
        }
       ],
       "traceWord": "全都",
       "py": "Wǒmen bùmén de yuángōng quándōu cānjiā le huìyì",
       "traceKey": "quandou",
       "traceInfo": [
        {
         "c": "全",
         "py": "quán",
         "hv": "toàn"
        },
        {
         "c": "都",
         "py": "dōu",
         "hv": "đô"
        }
       ]
      },
      {
       "scene": "📅📊👍",
       "full": "今年的总体情况比去年好得多",
       "vi": "Tình hình chung năm nay tốt hơn năm ngoái nhiều",
       "parts": [
        {
         "t": "今年的总体情况",
         "ico": "📅",
         "c": "s",
         "py": "jīnnián de zǒngtǐ qíngkuàng",
         "hv": "kim niên đích tổng thể tình huống"
        },
        {
         "t": "比",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "t": "去年好得多",
         "ico": "📈",
         "c": "o",
         "py": "qùnián hǎo de duō",
         "hv": "khứ niên hảo đắc đa"
        }
       ],
       "traceWord": "总体",
       "py": "Jīnnián de zǒngtǐ qíngkuàng bǐ qùnián hǎo de duō",
       "traceKey": "zongti",
       "traceInfo": [
        {
         "c": "总",
         "py": "zǒng",
         "hv": "tổng"
        },
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        }
       ]
      },
      {
       "scene": "🏢👥🔢",
       "full": "公司的员工总数已经超过了五百人",
       "vi": "Tổng số nhân viên của công ty đã vượt quá năm trăm người",
       "parts": [
        {
         "t": "公司的员工总数",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī de yuángōng zǒngshù",
         "hv": "công ti đích viên công tổng số"
        },
        {
         "t": "已经超过了",
         "ico": "⬆️",
         "c": "v",
         "py": "yǐjīng chāoguò le",
         "hv": "dĩ kinh siêu quá liễu"
        },
        {
         "t": "五百人",
         "ico": "👥",
         "c": "o",
         "py": "wǔ bǎi rén",
         "hv": "ngũ bách nhân"
        }
       ],
       "traceWord": "总数",
       "py": "Gōngsī de yuángōng zǒngshù yǐjīng chāoguò le wǔ bǎi rén",
       "traceKey": "zongshu",
       "traceInfo": [
        {
         "c": "总",
         "py": "zǒng",
         "hv": "tổng"
        },
        {
         "c": "数",
         "py": "shù",
         "hv": "số"
        }
       ]
      },
      {
       "scene": "💰🏠🧾",
       "full": "全部费用包括房租在内共计一万元",
       "vi": "Toàn bộ chi phí, tính cả tiền thuê nhà, tổng cộng là một vạn tệ",
       "parts": [
        {
         "t": "全部费用",
         "ico": "💰",
         "c": "s",
         "py": "quánbù fèiyong",
         "hv": "toàn bộ phí dụng"
        },
        {
         "t": "包括房租在内",
         "ico": "🏠",
         "c": "v",
         "py": "bāokuò fángzū zàinèi",
         "hv": "bao quát phòng tô tại nội"
        },
        {
         "t": "共计一万元",
         "ico": "🧾",
         "c": "o",
         "py": "gòngjì yī wàn yuán",
         "hv": "cộng kế nhất vạn nguyên"
        }
       ],
       "traceWord": "在内",
       "py": "Quánbù fèiyong bāokuò fángzū zàinèi gòngjì yī wàn yuán",
       "traceKey": "zainei",
       "traceInfo": [
        {
         "c": "在",
         "py": "zài",
         "hv": "tại"
        },
        {
         "c": "内",
         "py": "nèi",
         "hv": "nội"
        }
       ]
      },
      {
       "scene": "📄❌🔢",
       "full": "这个错误不严重只不过是数目写错了",
       "vi": "Lỗi này không nghiêm trọng, chỉ là viết sai con số thôi",
       "parts": [
        {
         "t": "这个错误",
         "ico": "📄",
         "c": "s",
         "py": "zhè gè cuòwù",
         "hv": "giá cá thác ngộ"
        },
        {
         "t": "不严重",
         "ico": "🙂",
         "c": "v",
         "py": "bù yánzhòng",
         "hv": "bất nghiêm trọng"
        },
        {
         "t": "只不过是数目写错了",
         "ico": "🔢",
         "c": "o",
         "py": "zhǐbùguò shì shùmù xiě cuò le",
         "hv": "chỉ bất quá thị số mục tả thác liễu"
        }
       ],
       "traceWord": "只不过",
       "py": "Zhè gè cuòwù bù yánzhòng zhǐbùguò shì shùmù xiě cuò le",
       "traceKey": "zhibuguo",
       "traceInfo": [
        {
         "c": "只",
         "py": "zhǐ",
         "hv": "chỉ"
        },
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
       "scene": "📅💹⬆️",
       "full": "今年销售增长的幅度大于去年",
       "vi": "Mức tăng doanh số năm nay lớn hơn năm ngoái",
       "parts": [
        {
         "t": "今年销售增长的幅度",
         "ico": "💹",
         "c": "s",
         "py": "jīnnián xiāoshòu zēngzhǎng de fúdù",
         "hv": "kim niên tiêu thụ tăng trưởng đích bức độ"
        },
        {
         "t": "大于",
         "ico": "➡️",
         "c": "v",
         "py": "dàyú",
         "hv": "đại vu"
        },
        {
         "t": "去年",
         "ico": "📅",
         "c": "o",
         "py": "qùnián",
         "hv": "khứ niên"
        }
       ],
       "traceWord": "幅度",
       "py": "Jīnnián xiāoshòu zēngzhǎng de fúdù dàyú qùnián",
       "traceKey": "fudu",
       "traceInfo": [
        {
         "c": "幅",
         "py": "fú",
         "hv": "bức"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "🌐🛒🏪",
       "full": "网上销售的比重已经高于商店销售",
       "vi": "Tỷ trọng bán hàng trực tuyến đã cao hơn bán hàng ở cửa hàng",
       "parts": [
        {
         "t": "网上销售的比重",
         "ico": "🌐",
         "c": "s",
         "py": "wǎng shang xiāoshòu de bǐzhòng",
         "hv": "võng thượng tiêu thụ đích tỷ trọng"
        },
        {
         "t": "已经高于",
         "ico": "⬆️",
         "c": "v",
         "py": "yǐjīng gāoyú",
         "hv": "dĩ kinh cao vu"
        },
        {
         "t": "商店销售",
         "ico": "🏪",
         "c": "o",
         "py": "shāngdiàn xiāoshòu",
         "hv": "thương điếm tiêu thụ"
        }
       ],
       "traceWord": "比重",
       "py": "Wǎng shang xiāoshòu de bǐzhòng yǐjīng gāoyú shāngdiàn xiāoshòu",
       "traceKey": "bizhong",
       "traceInfo": [
        {
         "c": "比",
         "py": "bǐ",
         "hv": "tỷ"
        },
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
       "q": "今年的销售情况怎么样？",
       "qvi": "Tình hình bán hàng năm nay thế nào?",
       "scene": "📅📉🎯",
       "ans": "销售低于年度指标",
       "opts": [
        {
         "txt": "销售低于年度指标",
         "ico": "📉",
         "py": "Xiāoshòu dīyú niándù zhǐbiāo"
        },
        {
         "txt": "我们明天去北京开会",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng kāihuì"
        },
        {
         "txt": "这个办公室很大",
         "ico": "🏢",
         "py": "Zhè gè bàngōngshì hěn dà"
        }
       ],
       "qpy": "Jīnnián de xiāoshòu qíngkuàng zěnmeyàng?"
      },
      {
       "q": "这两个数目是不是相等？",
       "qvi": "Hai con số này có bằng nhau không?",
       "scene": "🔢🟰🔢",
       "ans": "是这两个数目相等",
       "opts": [
        {
         "txt": "我昨天没有去上班",
         "ico": "🏠",
         "py": "Wǒ zuótiān méiyǒu qù shàngbān"
        },
        {
         "txt": "是这两个数目相等",
         "ico": "🟰",
         "py": "Shì zhè liǎng gè shùmù xiāngděng"
        },
        {
         "txt": "她今年二十岁",
         "ico": "🎂",
         "py": "Tā jīnnián èr shí suì"
        }
       ],
       "qpy": "Zhè liǎng gè shùmù shì bu shì xiāngděng?"
      },
      {
       "q": "公司的销售增加了，员工的收入会怎么样？",
       "qvi": "Doanh số công ty tăng, thu nhập của nhân viên sẽ thế nào?",
       "scene": "🏢📈💰",
       "ans": "员工的收入也会相应增加",
       "opts": [
        {
         "txt": "员工明天去北京开会",
         "ico": "✈️",
         "py": "Yuángōng míngtiān qù Běijīng kāihuì"
        },
        {
         "txt": "员工的办公室在楼下",
         "ico": "🏢",
         "py": "Yuángōng de bàngōngshì zài lóu xià"
        },
        {
         "txt": "员工的收入也会相应增加",
         "ico": "💰",
         "py": "Yuángōng de shōurù yě huì xiāngyìng zēngjiā"
        }
       ],
       "qpy": "Gōngsī de xiāoshòu zēngjiā le yuángōng de shōurù huì zěnmeyàng?"
      },
      {
       "q": "你们部门一共有多少人？",
       "qvi": "Phòng các bạn tổng cộng có bao nhiêu người?",
       "scene": "👥🔢❓",
       "ans": "我们部门共有十个人",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "🗓️",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "我们部门在三楼",
         "ico": "🏢",
         "py": "Wǒmen bùmén zài sān lóu"
        },
        {
         "txt": "我们部门共有十个人",
         "ico": "🔟",
         "py": "Wǒmen bùmén gòngyǒu shí gè rén"
        }
       ],
       "qpy": "Nǐmen bùmén yī gòngyǒu duōshao rén?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo số liệu cuối năm cho sếp",
      "steps": [
       "<b>Bước 1:</b> Mở bảng số liệu công việc của bạn (doanh số, chi phí hoặc số nhân viên). Tự nói thành tiếng một câu tóm tắt chung bằng <i>\"今年的总体情况比去年好得多\"</i>.",
       "<b>Bước 2:</b> Chọn hai chỉ số và so sánh chúng thành tiếng, ví dụ <i>\"今年销售增长的幅度大于去年\"</i> hoặc <i>\"销售低于年度指标\"</i>. Nói cả tổng số lẫn tỷ trọng.",
       "<b>Bước 3:</b> Nhắn một tin cho đồng nghiệp, báo cáo số liệu tổng cộng; dùng <i>\"大都\"</i> hoặc <i>\"全都\"</i> để nói về phần lớn hay tất cả, rồi đọc to tin nhắn đó."
      ]
     }
    },
    {
     "id": "5.2B",
     "name": "Bài 5.2B: Quy trình: lặp lại và nối tiếp",
     "grammar": {
      "formulas": [
       "🧑 我 + ⏳ 偶尔 + 🏃 会在周末去公园跑步",
       "🧑 我们 + 🔁 需要再次 + 💬 讨论这个方案"
      ],
      "tip": "Phó từ 偶尔 (ǒu'ěr, ngẫu nhĩ) = thỉnh thoảng, tần suất thấp; 再次 (zàicì, tái thứ) = lại một lần nữa (nhấn mạnh lần lặp lại, hay dùng trong văn viết/công việc). Cả hai đứng trước động từ và sau chủ ngữ. Chữ 偶 (ngẫu) của 偶尔 và 偶然 là cùng một chữ.",
      "vn_tip": "Người Việt hay nói \"tôi làm lại lần nữa\" rồi đặt 再次 sau động từ. Đúng phải là 再次 + động từ: 再次讨论. Cũng đừng nhầm 偶尔 (thỉnh thoảng, phó từ) với 偶然 (ngẫu nhiên, tính từ): 偶尔去 nhưng 偶然的机会."
     },
     "chunks": [
      {
       "scene": "🧑🌳🏃",
       "full": "我偶尔会在周末去公园跑步",
       "vi": "Thỉnh thoảng cuối tuần tôi đi công viên chạy bộ",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "偶尔",
         "ico": "⏳",
         "c": "v",
         "py": "ǒu'ěr",
         "hv": "ngẫu nhĩ"
        },
        {
         "t": "会在周末去公园跑步",
         "ico": "🏃",
         "c": "o",
         "py": "huì zài zhōumò qù gōngyuán pǎobù",
         "hv": "hội tại chu mạt khứ công viên bào bộ"
        }
       ],
       "traceWord": "偶尔",
       "py": "Wǒ ǒu'ěr huì zài zhōumò qù gōngyuán pǎobù",
       "traceKey": "ouer",
       "traceInfo": [
        {
         "c": "偶",
         "py": "ǒu",
         "hv": "ngẫu"
        },
        {
         "c": "尔",
         "py": "ěr",
         "hv": "nhĩ"
        }
       ]
      },
      {
       "scene": "🧑📄📤",
       "full": "我回头把这份报告发给你",
       "vi": "Lát nữa tôi sẽ gửi bản báo cáo này cho bạn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "回头把这份报告",
         "ico": "📄",
         "c": "v",
         "py": "huítóu bǎ zhè fèn bàogào",
         "hv": "hồi đầu bả giá phần báo cáo"
        },
        {
         "t": "发给你",
         "ico": "📤",
         "c": "o",
         "py": "fā gěi nǐ",
         "hv": "phát cấp nễ"
        }
       ],
       "traceWord": "回头",
       "py": "Wǒ huítóu bǎ zhè fèn bàogào fā gěi nǐ",
       "traceKey": "huitou",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "头",
         "py": "tóu",
         "hv": "đầu"
        }
       ]
      },
      {
       "scene": "👥🔁💬",
       "full": "我们需要再次讨论这个方案",
       "vi": "Chúng ta cần thảo luận lại phương án này một lần nữa",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "需要再次讨论",
         "ico": "🔁",
         "c": "v",
         "py": "xūyào zàicì tǎolùn",
         "hv": "nhu yếu tái thứ thảo luận"
        },
        {
         "t": "这个方案",
         "ico": "📋",
         "c": "o",
         "py": "zhè gè fāng'àn",
         "hv": "giá cá phương án"
        }
       ],
       "traceWord": "再次",
       "py": "Wǒmen xūyào zàicì tǎolùn zhè gè fāng'àn",
       "traceKey": "zaici",
       "traceInfo": [
        {
         "c": "再",
         "py": "zài",
         "hv": "tái"
        },
        {
         "c": "次",
         "py": "cì",
         "hv": "thứ"
        }
       ]
      },
      {
       "scene": "🧑💻✅📊",
       "full": "他一口气检查了所有的数据",
       "vi": "Anh ấy kiểm tra hết tất cả số liệu một mạch",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一口气检查了",
         "ico": "💨",
         "c": "v",
         "py": "yīkǒuqì jiǎnchá le",
         "hv": "nhất khẩu khí kiểm tra liễu"
        },
        {
         "t": "所有的数据",
         "ico": "📊",
         "c": "o",
         "py": "suǒ yǒude shùjù",
         "hv": "sở hữu đích số cứ"
        }
       ],
       "traceWord": "一口气",
       "py": "Tā yīkǒuqì jiǎnchá le suǒ yǒude shùjù",
       "traceKey": "yikouqi",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        },
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "👩📚🆕",
       "full": "她接连参加了三次关于新产品的培训",
       "vi": "Cô ấy liên tiếp tham gia ba buổi tập huấn về sản phẩm mới",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "接连参加了",
         "ico": "⏭️",
         "c": "v",
         "py": "jiēlián cānjiā le",
         "hv": "tiếp liên tham gia liễu"
        },
        {
         "t": "三次关于新产品的培训",
         "ico": "📚",
         "c": "o",
         "py": "sān cì guānyú xīn chǎnpǐn de péixùn",
         "hv": "tam thứ quan vu tân sản phẩm đích bồi huấn"
        }
       ],
       "traceWord": "接连",
       "py": "Tā jiēlián cānjiā le sān cì guānyú xīn chǎnpǐn de péixùn",
       "traceKey": "jielian",
       "traceInfo": [
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        },
        {
         "c": "连",
         "py": "lián",
         "hv": "liên"
        }
       ]
      },
      {
       "scene": "👥🚪🏢",
       "full": "这个项目的几位同事先后离开了公司",
       "vi": "Mấy đồng nghiệp của dự án này lần lượt rời khỏi công ty",
       "parts": [
        {
         "t": "这个项目的几位同事",
         "ico": "👥",
         "c": "s",
         "py": "zhè gè xiàng mùdì jǐ wèi tóngshì",
         "hv": "giá cá hạng mục đích kỷ vị đồng sự"
        },
        {
         "t": "先后离开了",
         "ico": "🚶",
         "c": "v",
         "py": "xiānhòu líkāi le",
         "hv": "tiên hậu ly khai liễu"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "先后",
       "py": "Zhè gè xiàng mùdì jǐ wèi tóngshì xiānhòu líkāi le gōngsī",
       "traceKey": "xianhou",
       "traceInfo": [
        {
         "c": "先",
         "py": "xiān",
         "hv": "tiên"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "👨‍💼📝🗣️",
       "full": "经理先介绍了计划随后大家提出了意见",
       "vi": "Giám đốc giới thiệu kế hoạch trước, sau đó mọi người đưa ra ý kiến",
       "parts": [
        {
         "t": "经理先介绍了计划",
         "ico": "👨‍💼",
         "c": "s",
         "py": "jīnglǐ xiān jièshào le jìhuà",
         "hv": "kinh lý tiên giới thiệu liễu kế hoạch"
        },
        {
         "t": "随后",
         "ico": "➡️",
         "c": "v",
         "py": "suíhòu",
         "hv": "tùy hậu"
        },
        {
         "t": "大家提出了意见",
         "ico": "🗣️",
         "c": "o",
         "py": "dàjiā tíchū le yìjiàn",
         "hv": "đại gia đề xuất liễu ý kiến"
        }
       ],
       "traceWord": "随后",
       "py": "Jīnglǐ xiān jièshào le jìhuà suíhòu dàjiā tíchū le yìjiàn",
       "traceKey": "suihou",
       "traceInfo": [
        {
         "c": "随",
         "py": "suí",
         "hv": "tùy"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "🗓️👨‍💼🚪",
       "full": "我们正在开会只见经理突然走了进来",
       "vi": "Chúng tôi đang họp thì thấy giám đốc đột nhiên đi vào",
       "parts": [
        {
         "t": "我们正在开会",
         "ico": "🗓️",
         "c": "s",
         "py": "wǒmen zhèngzài kāihuì",
         "hv": "ngã môn chính tại khai hội"
        },
        {
         "t": "只见",
         "ico": "👀",
         "c": "v",
         "py": "zhǐ jiàn",
         "hv": "chỉ kiến"
        },
        {
         "t": "经理突然走了进来",
         "ico": "🚪",
         "c": "o",
         "py": "jīnglǐ tūrán zǒu le jìnlái",
         "hv": "kinh lý đột nhiên tẩu liễu tiến lai"
        }
       ],
       "traceWord": "只见",
       "py": "Wǒmen zhèngzài kāihuì zhǐ jiàn jīnglǐ tūrán zǒu le jìnlái",
       "traceKey": "zhijian",
       "traceInfo": [
        {
         "c": "只",
         "py": "zhǐ",
         "hv": "chỉ"
        },
        {
         "c": "见",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这次能成功是偶然的吗？",
       "qvi": "Lần này thành công là do tình cờ à?",
       "scene": "🏆🎲❓",
       "ans": "不是我们一直努力从来不曾放松",
       "opts": [
        {
         "txt": "我们明天下午去开会",
         "ico": "🗓️",
         "py": "Wǒmen míngtiān xiàwǔ qù kāihuì"
        },
        {
         "txt": "不是我们一直努力从来不曾放松",
         "ico": "💪",
         "py": "Bú shì wǒmen yīzhí nǔlì cónglái bùcéng fàngsōng"
        },
        {
         "txt": "这个办公室在二楼",
         "ico": "🏢",
         "py": "Zhè gè bàngōngshì zài èr lóu"
        }
       ],
       "qpy": "Zhè cì néng chénggōng shì ǒurán de ma?"
      },
      {
       "q": "你能帮我看一下儿这份合同吗？",
       "qvi": "Bạn xem giúp tôi bản hợp đồng này một chút được không?",
       "scene": "📄👀🙏",
       "ans": "可以我一下子就能看完",
       "opts": [
        {
         "txt": "可以我一下子就能看完",
         "ico": "👌",
         "py": "Kěyǐ wǒ yīxiàzi jiù néng kàn wán"
        },
        {
         "txt": "我们昨天去了北京",
         "ico": "✈️",
         "py": "Wǒmen zuótiān qù le Běijīng"
        },
        {
         "txt": "我的手机在桌子上",
         "ico": "📱",
         "py": "Wǒ de shǒujī zài zhuōzi shàng"
        }
       ],
       "qpy": "Nǐ néng bāng wǒ kàn yīxiàr zhè fèn hétóng ma?"
      },
      {
       "q": "你为什么看起来这么累？",
       "qvi": "Sao trông bạn mệt thế?",
       "scene": "😴🚗🛣️",
       "ans": "因为我一路不停地开车",
       "opts": [
        {
         "txt": "我很喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ hěn xǐhuan hē kāfēi"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        },
        {
         "txt": "因为我一路不停地开车",
         "ico": "🚗",
         "py": "Yīnwèi wǒ yīlù bù tíng de kāichē"
        }
       ],
       "qpy": "Nǐ wèi shénme kàn qǐlái zhème lèi?"
      },
      {
       "q": "公司的密码很重要我们该怎么做？",
       "qvi": "Mật khẩu của công ty rất quan trọng, chúng ta nên làm thế nào?",
       "scene": "🔒🏢🤫",
       "ans": "我们不能不保密决不告诉别人",
       "opts": [
        {
         "txt": "我们可以把密码发给所有人",
         "ico": "📢",
         "py": "Wǒmen kěyǐ bǎ mìmǎ fā gěi suǒ yǒu rén"
        },
        {
         "txt": "密码就写在桌子上",
         "ico": "📝",
         "py": "Mìmǎ jiù xiě zài zhuōzi shàng"
        },
        {
         "txt": "我们不能不保密决不告诉别人",
         "ico": "🤫",
         "py": "Wǒmen bù néng bù bǎomì jué bù gàosu biérén"
        }
       ],
       "qpy": "Gōngsī de mìmǎ hěn zhòngyào wǒmen gāi zěnme zuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể lại quy trình công việc cho đồng nghiệp mới",
      "steps": [
       "<b>Bước 1:</b> Nghĩ đến một quy trình bạn làm hằng tuần. Nói thành tiếng các bước theo thứ tự bằng <i>\"经理先介绍了计划随后大家提出了意见\"</i> làm mẫu, thay nội dung bằng việc của bạn.",
       "<b>Bước 2:</b> Nói thêm một việc bạn chỉ thỉnh thoảng làm, ví dụ <i>\"我偶尔会在周末去公园跑步\"</i>, và một việc cần làm lại, ví dụ <i>\"我们需要再次讨论这个方案\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp hứa gửi tài liệu sau, ví dụ <i>\"我回头把这份报告发给你\"</i>, rồi đọc to tin nhắn đó."
      ]
     }
    },
    {
     "id": "5.2C",
     "name": "Bài 5.2C: An ninh và phòng chống lừa đảo",
     "grammar": {
      "formulas": [
       "🧑 有人 + 🤫 偷偷 + 📱 拿走了我的手机",
       "🧑 他 + 🤫 悄悄地 + 🚪 离开了办公室"
      ],
      "tip": "Phó từ phương thức 偷偷 (tōutōu, thâu thâu) và 悄悄 (qiāoqiāo, tiễu tiễu) = lén lút, âm thầm, đứng ngay trước động từ để nói hành động được làm mà người khác không biết. 悄悄 thường kèm 地: 悄悄地离开. 偷偷 hay mang sắc thái làm việc không nên làm.",
      "vn_tip": "Người Việt hay nói \"đi lén\" rồi đặt phó từ sau động từ. Trong tiếng Trung phải đặt trước động từ: 偷偷拿走 (không nói 拿走偷偷). Đừng nhầm 偷 (động từ: ăn trộm, trộm) với 偷偷 (phó từ: lén lút)."
     },
     "chunks": [
      {
       "scene": "🧑🤫📱",
       "full": "昨天有人偷偷拿走了我的手机",
       "vi": "Hôm qua có người lén lấy đi điện thoại của tôi",
       "parts": [
        {
         "t": "昨天有人",
         "ico": "🕵️",
         "c": "s",
         "py": "zuótiān yǒu rén",
         "hv": "tạc thiên hữu nhân"
        },
        {
         "t": "偷偷",
         "ico": "🤫",
         "c": "v",
         "py": "tōutōu",
         "hv": "thâu thâu"
        },
        {
         "t": "拿走了我的手机",
         "ico": "📱",
         "c": "o",
         "py": "ná zǒu le wǒ de shǒujī",
         "hv": "nã tẩu liễu ngã đích thủ cơ"
        }
       ],
       "traceWord": "偷偷",
       "py": "Zuótiān yǒu rén tōutōu ná zǒu le wǒ de shǒujī",
       "traceKey": "toutou",
       "traceInfo": [
        {
         "c": "偷",
         "py": "tōu",
         "hv": "thâu"
        },
        {
         "c": "偷",
         "py": "tōu",
         "hv": "thâu"
        }
       ]
      },
      {
       "scene": "🧑🤫🚪",
       "full": "昨天下午他悄悄地离开了办公室",
       "vi": "Chiều hôm qua anh ấy lặng lẽ rời khỏi văn phòng",
       "parts": [
        {
         "t": "昨天下午他",
         "ico": "🧑",
         "c": "s",
         "py": "zuótiān xiàwǔ tā",
         "hv": "tạc thiên hạ ngọ tha"
        },
        {
         "t": "悄悄地离开了",
         "ico": "🤫",
         "c": "v",
         "py": "qiāoqiāo de líkāi le",
         "hv": "tiễu tiễu địa ly khai liễu"
        },
        {
         "t": "办公室",
         "ico": "🏢",
         "c": "o",
         "py": "bàngōngshì",
         "hv": "biện công thất"
        }
       ],
       "traceWord": "悄悄",
       "py": "Zuótiān xiàwǔ tā qiāoqiāo de líkāi le bàngōngshì",
       "traceKey": "qiaoqiao",
       "traceInfo": [
        {
         "c": "悄",
         "py": "qiāo",
         "hv": "tiễu"
        },
        {
         "c": "悄",
         "py": "qiāo",
         "hv": "tiễu"
        }
       ]
      },
      {
       "scene": "🚇🦹👛",
       "full": "地铁里有个小偷儿想偷我的钱包",
       "vi": "Trên tàu điện ngầm có một tên trộm định lấy trộm ví của tôi",
       "parts": [
        {
         "t": "地铁里有个小偷儿",
         "ico": "🦹",
         "c": "s",
         "py": "dìtiě lǐ yǒu gè xiǎotōur",
         "hv": "địa thiết lý hữu cá tiểu thâu nhi"
        },
        {
         "t": "想偷",
         "ico": "🤏",
         "c": "v",
         "py": "xiǎng tōu",
         "hv": "tưởng thâu"
        },
        {
         "t": "我的钱包",
         "ico": "👛",
         "c": "o",
         "py": "wǒ de qiánbāo",
         "hv": "ngã đích tiền bao"
        }
       ],
       "traceWord": "小偷儿",
       "py": "Dìtiě lǐ yǒu gè xiǎotōur xiǎng tōu wǒ de qiánbāo",
       "traceKey": "xiaotour",
       "traceInfo": [
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        },
        {
         "c": "偷",
         "py": "tōu",
         "hv": "thâu"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "🌐📞👴",
       "full": "网上的骗子常常打电话骗老人的钱",
       "vi": "Kẻ lừa đảo trên mạng thường gọi điện lừa tiền của người già",
       "parts": [
        {
         "t": "网上的骗子",
         "ico": "🌐",
         "c": "s",
         "py": "wǎng shang de piànzi",
         "hv": "võng thượng đích phiến tử"
        },
        {
         "t": "常常打电话",
         "ico": "📞",
         "c": "v",
         "py": "chángcháng dǎ diànhuà",
         "hv": "thường thường đả điện thoại"
        },
        {
         "t": "骗老人的钱",
         "ico": "👴",
         "c": "o",
         "py": "piàn lǎorén de qián",
         "hv": "phiến lão nhân đích tiền"
        }
       ],
       "traceWord": "骗子",
       "py": "Wǎng shang de piànzi chángcháng dǎ diànhuà piàn lǎorén de qián",
       "traceKey": "pianzi",
       "traceInfo": [
        {
         "c": "骗",
         "py": "piàn",
         "hv": "phiến"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🧑😟📞🚓",
       "full": "他发现自己被骗了马上就报警了",
       "vi": "Anh ấy phát hiện mình bị lừa nên lập tức báo công an",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "发现自己被骗了",
         "ico": "😟",
         "c": "v",
         "py": "fāxiàn zìjǐ bèi piàn le",
         "hv": "phát hiện tự kỷ bị phiến liễu"
        },
        {
         "t": "马上就报警了",
         "ico": "🚓",
         "c": "o",
         "py": "mǎshàng jiù bàojǐng le",
         "hv": "mã thượng tựu báo cảnh liễu"
        }
       ],
       "traceWord": "报警",
       "py": "Tā fāxiàn zìjǐ bèi piàn le mǎshàng jiù bàojǐng le",
       "traceKey": "baojing",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "警",
         "py": "jǐng",
         "hv": "cảnh"
        }
       ]
      },
      {
       "scene": "🦹🏃👮",
       "full": "小偷儿想逃跑但是被警察抓住了",
       "vi": "Tên trộm định chạy trốn nhưng bị cảnh sát bắt được",
       "parts": [
        {
         "t": "小偷儿",
         "ico": "🦹",
         "c": "s",
         "py": "xiǎotōur",
         "hv": "tiểu thâu nhi"
        },
        {
         "t": "想逃跑",
         "ico": "🏃",
         "c": "v",
         "py": "xiǎng táopǎo",
         "hv": "tưởng đào bào"
        },
        {
         "t": "但是被警察抓住了",
         "ico": "👮",
         "c": "o",
         "py": "dànshì bèi jǐngchá zhuāzhù le",
         "hv": "đãn thị bị cảnh sát trảo trú liễu"
        }
       ],
       "traceWord": "逃跑",
       "py": "Xiǎotōur xiǎng táopǎo dànshì bèi jǐngchá zhuāzhù le",
       "traceKey": "taopao",
       "traceInfo": [
        {
         "c": "逃",
         "py": "táo",
         "hv": "đào"
        },
        {
         "c": "跑",
         "py": "pǎo",
         "hv": "bào"
        }
       ]
      },
      {
       "scene": "🧒🚪🙈",
       "full": "他躲在门后边一直不敢出来",
       "vi": "Anh ấy trốn sau cánh cửa, mãi không dám ra",
       "parts": [
        {
         "t": "他",
         "ico": "🧒",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "躲在",
         "ico": "🙈",
         "c": "v",
         "py": "duǒ zài",
         "hv": "đóa tại"
        },
        {
         "t": "门后边一直不敢出来",
         "ico": "🚪",
         "c": "o",
         "py": "mén hòubian yīzhí bù gǎn chūlái",
         "hv": "môn hậu biên nhất trực bất cảm xuất lai"
        }
       ],
       "traceWord": "躲",
       "py": "Tā duǒ zài mén hòubian yīzhí bù gǎn chūlái",
       "traceKey": "duo",
       "traceInfo": [
        {
         "c": "躲",
         "py": "duǒ",
         "hv": "đóa"
        }
       ]
      },
      {
       "scene": "👮📍🔫",
       "full": "警察在现场发现了一把枪和几颗子弹",
       "vi": "Cảnh sát phát hiện tại hiện trường một khẩu súng và vài viên đạn",
       "parts": [
        {
         "t": "警察",
         "ico": "👮",
         "c": "s",
         "py": "jǐngchá",
         "hv": "cảnh sát"
        },
        {
         "t": "在现场发现了",
         "ico": "🔍",
         "c": "v",
         "py": "zài xiànchǎng fāxiàn le",
         "hv": "tại hiện trường phát hiện liễu"
        },
        {
         "t": "一把枪和几颗子弹",
         "ico": "🔫",
         "c": "o",
         "py": "yī bǎ qiāng hé jǐ kē zǐdàn",
         "hv": "nhất bả thương hòa kỷ khỏa tử đạn"
        }
       ],
       "traceWord": "子弹",
       "py": "Jǐngchá zài xiànchǎng fāxiàn le yī bǎ qiāng hé jǐ kē zǐdàn",
       "traceKey": "zidan",
       "traceInfo": [
        {
         "c": "子",
         "py": "zǐ",
         "hv": "tử"
        },
        {
         "c": "弹",
         "py": "dàn",
         "hv": "đạn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这个地区的治安怎么样？",
       "qvi": "Trị an ở khu vực này thế nào?",
       "scene": "🏘️👮✅",
       "ans": "治安很好晚上也很安全",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "🗓️",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "治安很好晚上也很安全",
         "ico": "🌙",
         "py": "Zhì'ān hěn hǎo wǎnshang yě hěn ānquán"
        },
        {
         "txt": "这个地区的房租很贵",
         "ico": "🏠",
         "py": "Zhè gè dìqū de fángzū hěn guì"
        }
       ],
       "qpy": "Zhè gè dìqū de zhì'ān zěnmeyàng?"
      },
      {
       "q": "那个酒鬼在做什么？",
       "qvi": "Gã nghiện rượu kia đang làm gì?",
       "scene": "🍺😵🛣️",
       "ans": "他喝多了躺在路边",
       "opts": [
        {
         "txt": "他喝多了躺在路边",
         "ico": "😵",
         "py": "Tā hē duō le tǎng zài lù biān"
        },
        {
         "txt": "他在公司开会",
         "ico": "🏢",
         "py": "Tā zài gōngsī kāihuì"
        },
        {
         "txt": "他正在看电影",
         "ico": "🎬",
         "py": "Tā zhèngzài kàn diànyǐng"
        }
       ],
       "qpy": "Nà gè jiǔguǐ zài zuò shénme?"
      },
      {
       "q": "小偷儿看见警察以后做了什么？",
       "qvi": "Sau khi thấy cảnh sát, tên trộm đã làm gì?",
       "scene": "🦹👀👮",
       "ans": "他马上逃走了",
       "opts": [
        {
         "txt": "他马上去吃饭了",
         "ico": "🍚",
         "py": "Tā mǎ shàngqù chīfàn le"
        },
        {
         "txt": "他马上逃走了",
         "ico": "🏃",
         "py": "Tā mǎshàng táozǒu le"
        },
        {
         "txt": "他马上买了票",
         "ico": "🎫",
         "py": "Tā mǎshàng mǎi le piào"
        }
       ],
       "qpy": "Xiǎotōur kànjiàn jǐngchá yǐhòu zuò le shénme?"
      },
      {
       "q": "你看见那个人往哪儿逃了？",
       "qvi": "Bạn thấy người đó chạy trốn về hướng nào?",
       "scene": "👀🧑🧭",
       "ans": "他往南边逃了",
       "opts": [
        {
         "txt": "他往南边逃了",
         "ico": "🧭",
         "py": "Tā wǎng nánbian táo le"
        },
        {
         "txt": "他是我的同学",
         "ico": "🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "他今年二十岁",
         "ico": "🎂",
         "py": "Tā jīnnián èr shí suì"
        }
       ],
       "qpy": "Nǐ kànjiàn nà gè rén wǎng nǎr táo le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Cảnh báo đồng nghiệp về lừa đảo qua mạng",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một chiêu lừa đảo bạn từng nghe (cuộc gọi, tin nhắn, mạng xã hội). Nói thành tiếng cách chúng hoạt động bằng <i>\"网上的骗子常常打电话骗老人的钱\"</i> và thay nội dung cho đúng chiêu đó.",
       "<b>Bước 2:</b> Nhắn tin cho nhóm đồng nghiệp: nếu phát hiện bị lừa thì phải làm gì, dùng <i>\"他发现自己被骗了马上就报警了\"</i> làm mẫu. Nói thêm một câu về an ninh nơi bạn ở với từ 治安.",
       "<b>Bước 3:</b> Kể một tình huống giả định có người làm việc lén lút, dùng <i>\"偷偷\"</i> hoặc <i>\"悄悄地\"</i> trước động từ, rồi đọc to cho bản thân nghe."
      ]
     }
    }
   ]
  },
  "5.3": {
   "lessons": [
    {
     "id": "5.3A",
     "name": "Bài 5.3A: Thời gian và xu thế hiện tại",
     "grammar": {
      "formulas": [
       "🏢 我们公司 + ⏰ 近来不时 + 📋 开会",
       "👔 经理 + ⏰ 一向 + 👍 很重视",
       "📅 原先的计划 + ⏰ 将要 + 🔄 调整"
      ],
      "tip": "Phó từ chỉ thời gian đứng SAU chủ ngữ và TRƯỚC động từ/vị ngữ: 不时 (bùshí, bất thời) = thỉnh thoảng; 时常 (shícháng, thời thường) = thường xuyên; 一向 (yīxiàng, nhất hướng) = từ trước đến nay luôn; 仍旧/依旧 (réngjiù/yījiù, nhưng cựu/y cựu) = vẫn như cũ; 将要 (jiāngyào, tương yếu) = sắp, sẽ.",
      "vn_tip": "Người Việt hay đặt trạng từ thời gian ở cuối câu (\"họp thỉnh thoảng\") hoặc dịch từng chữ. Tiếng Trung luôn để phó từ trước động từ: nói 我们不时开会, không nói 我们开会不时. Còn 此刻、此时、当年、以往… là danh từ thời gian, đứng đầu câu hoặc ngay sau chủ ngữ."
     },
     "chunks": [
      {
       "scene": "🏢📋💬",
       "full": "我们公司近来不时开会讨论新项目",
       "vi": "Gần đây công ty chúng tôi thỉnh thoảng họp để bàn về dự án mới",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã môn công ti"
        },
        {
         "t": "近来不时开会",
         "ico": "📋",
         "c": "v",
         "py": "jìnlái bùshí kāihuì",
         "hv": "cận lai bất thời khai hội"
        },
        {
         "t": "讨论新项目",
         "ico": "💬",
         "c": "o",
         "py": "tǎolùn xīn xiàngmù",
         "hv": "thảo luận tân hạng mục"
        }
       ],
       "traceWord": "不时",
       "py": "Wǒmen gōngsī jìnlái bùshí kāihuì tǎolùn xīn xiàngmù",
       "traceKey": "bushi",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      },
      {
       "scene": "👔👍👂",
       "full": "经理一向很重视顾客的意见",
       "vi": "Giám đốc từ trước đến nay luôn rất coi trọng ý kiến của khách hàng",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "一向很重视",
         "ico": "👍",
         "c": "v",
         "py": "yīxiàng hěn zhòngshì",
         "hv": "nhất hướng ngận trọng thị"
        },
        {
         "t": "顾客的意见",
         "ico": "🗣️",
         "c": "o",
         "py": "gùkè de yìjiàn",
         "hv": "cố khách đích ý kiến"
        }
       ],
       "traceWord": "一向",
       "py": "Jīnglǐ yīxiàng hěn zhòngshì gùkè de yìjiàn",
       "traceKey": "yixiang",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "向",
         "py": "xiàng",
         "hv": "hướng"
        }
       ]
      },
      {
       "scene": "🏢🕰️🛠️",
       "full": "这家公司仍旧使用以往的老办法",
       "vi": "Công ty này vẫn dùng cách làm cũ như trước đây",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "仍旧使用",
         "ico": "🛠️",
         "c": "v",
         "py": "réngjiù shǐyòng",
         "hv": "nhưng cựu sử dụng"
        },
        {
         "t": "以往的老办法",
         "ico": "🕰️",
         "c": "o",
         "py": "yǐwǎng de lǎo bànfǎ",
         "hv": "dĩ vãng đích lão biện pháp"
        }
       ],
       "traceWord": "仍旧",
       "py": "Zhè jiā gōngsī réngjiù shǐyòng yǐwǎng de lǎo bànfǎ",
       "traceKey": "rengjiu",
       "traceInfo": [
        {
         "c": "仍",
         "py": "réng",
         "hv": "nhưng"
        },
        {
         "c": "旧",
         "py": "jiù",
         "hv": "cựu"
        }
       ]
      },
      {
       "scene": "🏠⏳🏭",
       "full": "当年的小公司此刻已经成为有名的企业",
       "vi": "Công ty nhỏ năm xưa giờ đây đã trở thành một doanh nghiệp nổi tiếng",
       "parts": [
        {
         "t": "当年的小公司",
         "ico": "🏠",
         "c": "s",
         "py": "dāngnián de xiǎo gōngsī",
         "hv": "đương niên đích tiểu công ti"
        },
        {
         "t": "此刻已经成为",
         "ico": "⏳",
         "c": "v",
         "py": "cǐkè yǐjīng chéngwéi",
         "hv": "thử khắc dĩ kinh thành vi"
        },
        {
         "t": "有名的企业",
         "ico": "🏭",
         "c": "o",
         "py": "yǒumíng de qǐyè",
         "hv": "hữu danh đích xí nghiệp"
        }
       ],
       "traceWord": "此刻",
       "py": "Dāngnián de xiǎo gōngsī cǐkè yǐjīng chéngwéi yǒumíng de qǐyè",
       "traceKey": "cike",
       "traceInfo": [
        {
         "c": "此",
         "py": "cǐ",
         "hv": "thử"
        },
        {
         "c": "刻",
         "py": "kè",
         "hv": "khắc"
        }
       ]
      },
      {
       "scene": "📅📈🔄",
       "full": "原先的计划将要根据市场的变化进行调整",
       "vi": "Kế hoạch ban đầu sắp được điều chỉnh theo sự thay đổi của thị trường",
       "parts": [
        {
         "t": "原先的计划",
         "ico": "📅",
         "c": "s",
         "py": "yuánxiān de jìhuà",
         "hv": "nguyên tiên đích kế hoạch"
        },
        {
         "t": "将要",
         "ico": "⏳",
         "c": "v",
         "py": "jiāngyào",
         "hv": "tương yếu"
        },
        {
         "t": "根据市场的变化进行调整",
         "ico": "📈",
         "c": "o",
         "py": "gēnjù shìchǎng de biànhuà jìnxíng tiáozhěng",
         "hv": "căn cứ thị trường đích biến hóa tiến hành điều chỉnh"
        }
       ],
       "traceWord": "将要",
       "py": "Yuánxiān de jìhuà jiāngyào gēnjù shìchǎng de biànhuà jìnxíng tiáozhěng",
       "traceKey": "jiangyao",
       "traceInfo": [
        {
         "c": "将",
         "py": "jiāng",
         "hv": "tương"
        },
        {
         "c": "要",
         "py": "yào",
         "hv": "yếu"
        }
       ]
      },
      {
       "scene": "🧑‍💼📍🏢",
       "full": "此后他一直在北京的一家大公司工作",
       "vi": "Từ đó về sau anh ấy luôn làm việc ở một công ty lớn tại Bắc Kinh",
       "parts": [
        {
         "t": "此后他",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "cǐhòu tā",
         "hv": "thử hậu tha"
        },
        {
         "t": "一直在",
         "ico": "📍",
         "c": "v",
         "py": "yīzhí zài",
         "hv": "nhất trực tại"
        },
        {
         "t": "北京的一家大公司工作",
         "ico": "🏢",
         "c": "o",
         "py": "Běijīng de yī jiā dà gōngsī gōngzuò",
         "hv": "bắc kinh đích nhất gia đại công ti công tác"
        }
       ],
       "traceWord": "此后",
       "py": "Cǐhòu tā yīzhí zài Běijīng de yī jiā dà gōngsī gōngzuò",
       "traceKey": "cihou",
       "traceInfo": [
        {
         "c": "此",
         "py": "cǐ",
         "hv": "thử"
        },
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        }
       ]
      },
      {
       "scene": "📱💬🛍️",
       "full": "此时我的手机不时收到顾客发来的新消息",
       "vi": "Lúc này điện thoại của tôi thỉnh thoảng nhận được tin nhắn mới do khách hàng gửi đến",
       "parts": [
        {
         "t": "此时我的手机",
         "ico": "📱",
         "c": "s",
         "py": "cǐshí wǒ de shǒujī",
         "hv": "thử thời ngã đích thủ cơ"
        },
        {
         "t": "不时收到",
         "ico": "📩",
         "c": "v",
         "py": "bùshí shōudào",
         "hv": "bất thời thu đáo"
        },
        {
         "t": "顾客发来的新消息",
         "ico": "💬",
         "c": "o",
         "py": "gùkè fā lái de xīn xiāoxi",
         "hv": "cố khách phát lai đích tân tiêu tức"
        }
       ],
       "traceWord": "此时",
       "py": "Cǐshí wǒ de shǒujī bùshí shōudào gùkè fā lái de xīn xiāoxi",
       "traceKey": "cishi",
       "traceInfo": [
        {
         "c": "此",
         "py": "cǐ",
         "hv": "thử"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      },
      {
       "scene": "🛒💰🙂",
       "full": "当前市场的价格比以往高但是顾客仍旧愿意购买",
       "vi": "Giá thị trường hiện nay cao hơn trước đây nhưng khách hàng vẫn sẵn lòng mua",
       "parts": [
        {
         "t": "当前市场的价格",
         "ico": "🛒",
         "c": "s",
         "py": "dāngqián shìchǎng de jiàgé",
         "hv": "đương tiền thị trường đích giá cách"
        },
        {
         "t": "比以往高",
         "ico": "💰",
         "c": "v",
         "py": "bǐ yǐwǎng gāo",
         "hv": "tỷ dĩ vãng cao"
        },
        {
         "t": "但是顾客仍旧愿意购买",
         "ico": "🙂",
         "c": "o",
         "py": "dànshì gùkè réngjiù yuànyì gòumǎi",
         "hv": "đãn thị cố khách nhưng cựu nguyện ý cấu mãi"
        }
       ],
       "traceWord": "当前",
       "py": "Dāngqián shìchǎng de jiàgé bǐ yǐwǎng gāo dànshì gùkè réngjiù yuànyì gòumǎi",
       "traceKey": "dangqian",
       "traceInfo": [
        {
         "c": "当",
         "py": "dāng",
         "hv": "đương"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们公司时常开会吗？",
       "qvi": "Công ty các bạn có thường họp không?",
       "scene": "🏢📋",
       "ans": "我们时常在星期一早上开会",
       "opts": [
        {
         "txt": "我们从来不开会",
         "ico": "🙅",
         "py": "Wǒmen cónglái bù kāihuì"
        },
        {
         "txt": "我们时常在星期一早上开会",
         "ico": "📋",
         "py": "Wǒmen shícháng zài xīngqī yī zǎoshang kāihuì"
        },
        {
         "txt": "他是我们的新经理",
         "ico": "👔",
         "py": "Tā shì wǒmen de xīn jīnglǐ"
        }
       ],
       "qpy": "Nǐmen gōngsī shícháng kāihuì ma?"
      },
      {
       "q": "你们的老办公室现在怎么样？",
       "qvi": "Văn phòng cũ của các bạn bây giờ thế nào?",
       "scene": "🏢🪑",
       "ans": "那里依旧很安静",
       "opts": [
        {
         "txt": "我们已经搬家了",
         "ico": "📦",
         "py": "Wǒmen yǐjīng bānjiā le"
        },
        {
         "txt": "那里的东西很便宜",
         "ico": "💰",
         "py": "Nàlǐ de dōngxi hěn piányi"
        },
        {
         "txt": "那里依旧很安静",
         "ico": "🤫",
         "py": "Nàlǐ yījiù hěn ānjìng"
        }
       ],
       "qpy": "Nǐmen de lǎo bàngōngshì xiànzài zěnmeyàng?"
      },
      {
       "q": "经理将在什么时候去北京？",
       "qvi": "Khi nào giám đốc sẽ đi Bắc Kinh?",
       "scene": "👔✈️",
       "ans": "他将在下个月到北京",
       "opts": [
        {
         "txt": "他将在下个月到北京",
         "ico": "✈️",
         "py": "Tā jiāng zài xià ge yuè dào Běijīng"
        },
        {
         "txt": "他前天已经回国了",
         "ico": "🏠",
         "py": "Tā qiántiān yǐjīng huí guó le"
        },
        {
         "txt": "他不想吃饭",
         "ico": "🍚",
         "py": "Tā bù xiǎng chīfàn"
        }
       ],
       "qpy": "Jīnglǐ jiāng zài shénme shíhou qù Běijīng?"
      },
      {
       "q": "你今日有时间吗？",
       "qvi": "Hôm nay bạn có thời gian không?",
       "scene": "🧑⏰",
       "ans": "我今日有空儿",
       "opts": [
        {
         "txt": "我很喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ hěn xǐhuan hē kāfēi"
        },
        {
         "txt": "我昨天去了上海",
         "ico": "🚄",
         "py": "Wǒ zuótiān qù le Shànghǎi"
        },
        {
         "txt": "我今日有空儿",
         "ico": "🙂",
         "py": "Wǒ jīnrì yǒukòngr"
        }
       ],
       "qpy": "Nǐ jīnrì yǒu shíjiān ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo tình hình công ty với đối tác",
      "steps": [
       "<b>Bước 1:</b> Hãy giới thiệu thói quen làm việc của nhóm mình với một đối tác nước ngoài: <i>\"我们公司近来不时开会讨论新项目。\"</i> Thay 不时 bằng 时常 hoặc 一向 rồi nói thành tiếng 3 lần.",
       "<b>Bước 2:</b> So sánh hiện tại với trước đây, ví dụ: <i>\"当前市场的价格比以往高。\"</i> Tự nói thêm 2 câu về công ty bạn dùng 仍旧 hoặc 依旧 (cái gì vẫn như cũ).",
       "<b>Bước 3:</b> Báo trước kế hoạch cho đồng nghiệp bằng tin nhắn thoại: <i>\"原先的计划将要根据市场的变化进行调整。\"</i> Sau đó thêm một câu bắt đầu bằng 此后 nói điều sẽ làm từ nay về sau."
      ]
     }
    },
    {
     "id": "5.3B",
     "name": "Bài 5.3B: Thái độ và lập trường khi nói",
     "grammar": {
      "formulas": [
       "🧑 他 + 😲 居然 + ⚡ 没做完",
       "🔍 明明 + 👀 很简单",
       "🎉 总算 + ✅ 完成了"
      ],
      "tip": "Phó từ ngữ khí đứng trước vị ngữ để thêm thái độ của người nói: 毕竟 (bìjìng, tất cánh) = dù sao thì, suy cho cùng; 居然 (jūrán, cư nhiên) = lại có thể (bất ngờ); 明明 (míngmíng, minh minh) = rõ ràng là (nhưng thực tế khác); 总算 (zǒngsuàn, tổng toán) = cuối cùng cũng; 干脆 (gāncuì, can thúy) = dứt khoát, thôi thì.",
      "vn_tip": "Người Việt hay dịch \"rõ ràng là\" rồi đặt sau động từ, hoặc dùng 终于 cho mọi trường hợp \"cuối cùng\". Hãy nhớ: 明明 thường đi với vế sau trái ngược (… 却 / 可是 …) và đứng trước vị ngữ; 总算 mang cảm giác \"thở phào sau bao khó khăn\", còn 居然 chỉ dùng khi sự việc nằm ngoài dự đoán."
     },
     "chunks": [
      {
       "scene": "🧑‍💼🆕😟",
       "full": "他毕竟刚来公司不免有些紧张",
       "vi": "Dù sao anh ấy cũng mới vào công ty nên khó tránh có chút căng thẳng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "毕竟刚来公司",
         "ico": "🆕",
         "c": "v",
         "py": "bìjìng gāng lái gōngsī",
         "hv": "tất cánh cương lai công ti"
        },
        {
         "t": "不免有些紧张",
         "ico": "😟",
         "c": "o",
         "py": "bùmiǎn yǒuxiē jǐnzhāng",
         "hv": "bất miễn hữu ta khẩn trương"
        }
       ],
       "traceWord": "毕竟",
       "py": "Tā bìjìng gāng lái gōngsī bùmiǎn yǒuxiē jǐnzhāng",
       "traceKey": "bijing",
       "traceInfo": [
        {
         "c": "毕",
         "py": "bì",
         "hv": "tất"
        },
        {
         "c": "竟",
         "py": "jìng",
         "hv": "cánh"
        }
       ]
      },
      {
       "scene": "📄👀😲",
       "full": "这个方案明明很简单他居然没有做完",
       "vi": "Phương án này rõ ràng rất đơn giản mà anh ấy lại không làm xong",
       "parts": [
        {
         "t": "这个方案",
         "ico": "📄",
         "c": "s",
         "py": "zhè gè fāng'àn",
         "hv": "giá cá phương án"
        },
        {
         "t": "明明很简单",
         "ico": "👀",
         "c": "v",
         "py": "míngmíng hěn jiǎndān",
         "hv": "minh minh ngận giản đơn"
        },
        {
         "t": "他居然没有做完",
         "ico": "😲",
         "c": "o",
         "py": "tā jūrán méiyǒu zuò wán",
         "hv": "tha cư nhiên một hữu tố hoàn"
        }
       ],
       "traceWord": "明明",
       "py": "Zhè gè fāng'àn míngmíng hěn jiǎndān tā jūrán méiyǒu zuò wán",
       "traceKey": "mingming",
       "traceInfo": [
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        },
        {
         "c": "明",
         "py": "míng",
         "hv": "minh"
        }
       ]
      },
      {
       "scene": "💪📆✅",
       "full": "这个项目经过一个月的努力总算完成了",
       "vi": "Dự án này trải qua một tháng nỗ lực cuối cùng cũng hoàn thành",
       "parts": [
        {
         "t": "这个项目",
         "ico": "📁",
         "c": "s",
         "py": "zhè gè xiàngmù",
         "hv": "giá cá hạng mục"
        },
        {
         "t": "经过一个月的努力总算",
         "ico": "💪",
         "c": "v",
         "py": "jīngguò yī gè yuè de nǔlì zǒngsuàn",
         "hv": "kinh quá nhất cá nguyệt đích nỗ lực tổng toán"
        },
        {
         "t": "完成了",
         "ico": "✅",
         "c": "o",
         "py": "wánchéng le",
         "hv": "hoàn thành liễu"
        }
       ],
       "traceWord": "总算",
       "py": "Zhè gè xiàngmù jīngguò yī gè yuè de nǔlì zǒngsuàn wánchéng le",
       "traceKey": "zongsuan",
       "traceInfo": [
        {
         "c": "总",
         "py": "zǒng",
         "hv": "tổng"
        },
        {
         "c": "算",
         "py": "suàn",
         "hv": "toán"
        }
       ]
      },
      {
       "scene": "🗣️⏰🙌",
       "full": "会议开了三个小时还没有结果干脆明天再谈吧",
       "vi": "Cuộc họp kéo dài ba tiếng vẫn chưa có kết quả, thôi thì mai bàn tiếp",
       "parts": [
        {
         "t": "会议开了三个小时还没有结果",
         "ico": "⏰",
         "c": "s",
         "py": "huìyì kāi le sān gè xiǎoshí hái méiyǒu jiéguǒ",
         "hv": "hội nghị khai liễu tam cá tiểu thời hoàn một hữu kết quả"
        },
        {
         "t": "干脆",
         "ico": "✂️",
         "c": "v",
         "py": "gāncuì",
         "hv": "can thúy"
        },
        {
         "t": "明天再谈吧",
         "ico": "🙌",
         "c": "o",
         "py": "míngtiān zài tán ba",
         "hv": "minh thiên tái đàm ba"
        }
       ],
       "traceWord": "干脆",
       "py": "Huìyì kāi le sān gè xiǎoshí hái méiyǒu jiéguǒ gāncuì míngtiān zài tán ba",
       "traceKey": "gancui",
       "traceInfo": [
        {
         "c": "干",
         "py": "gān",
         "hv": "can"
        },
        {
         "c": "脆",
         "py": "cuì",
         "hv": "thúy"
        }
       ]
      },
      {
       "scene": "👕💰👎",
       "full": "这件衣服的价格倒是不贵可惜质量不太好",
       "vi": "Giá chiếc áo này thì không đắt nhưng tiếc là chất lượng không tốt lắm",
       "parts": [
        {
         "t": "这件衣服的价格",
         "ico": "👕",
         "c": "s",
         "py": "zhè jiàn yīfu de jiàgé",
         "hv": "giá kiện y phục đích giá cách"
        },
        {
         "t": "倒是不贵",
         "ico": "💰",
         "c": "v",
         "py": "dàoshì bú guì",
         "hv": "đáo thị bất quý"
        },
        {
         "t": "可惜质量不太好",
         "ico": "👎",
         "c": "o",
         "py": "kěxī zhìliàng bù tài hǎo",
         "hv": "khả tích chất lượng bất thái hảo"
        }
       ],
       "traceWord": "倒是",
       "py": "Zhè jiàn yīfu de jiàgé dàoshì bú guì kěxī zhìliàng bù tài hǎo",
       "traceKey": "daoshi",
       "traceInfo": [
        {
         "c": "倒",
         "py": "dào",
         "hv": "đáo"
        },
        {
         "c": "是",
         "py": "shì",
         "hv": "thị"
        }
       ]
      },
      {
       "scene": "🏭⭐👍",
       "full": "这家公司的产品质量无疑是最好的",
       "vi": "Chất lượng sản phẩm của công ty này chắc chắn là tốt nhất",
       "parts": [
        {
         "t": "这家公司的产品质量",
         "ico": "🏭",
         "c": "s",
         "py": "zhè jiā gōngsī de chǎnpǐn zhìliàng",
         "hv": "giá gia công ti đích sản phẩm chất lượng"
        },
        {
         "t": "无疑",
         "ico": "💯",
         "c": "v",
         "py": "wúyí",
         "hv": "vô nghi"
        },
        {
         "t": "是最好的",
         "ico": "⭐",
         "c": "o",
         "py": "shì zuìhǎo de",
         "hv": "thị tối hảo đích"
        }
       ],
       "traceWord": "无疑",
       "py": "Zhè jiā gōngsī de chǎnpǐn zhìliàng wúyí shì zuìhǎo de",
       "traceKey": "wuyi",
       "traceInfo": [
        {
         "c": "无",
         "py": "wú",
         "hv": "vô"
        },
        {
         "c": "疑",
         "py": "yí",
         "hv": "nghi"
        }
       ]
      },
      {
       "scene": "💰😞📉",
       "full": "价格太高顾客难以接受公司无奈只好降价",
       "vi": "Giá quá cao, khách khó chấp nhận, công ty đành bất đắc dĩ giảm giá",
       "parts": [
        {
         "t": "价格太高",
         "ico": "💰",
         "c": "s",
         "py": "jiàgé tài gāo",
         "hv": "giá cách thái cao"
        },
        {
         "t": "顾客难以接受",
         "ico": "😞",
         "c": "v",
         "py": "gùkè nányǐ jiēshòu",
         "hv": "cố khách nan dĩ tiếp thụ"
        },
        {
         "t": "公司无奈只好降价",
         "ico": "📉",
         "c": "o",
         "py": "gōngsī wúnài zhǐhǎo jiàngjià",
         "hv": "công ti vô nại chỉ hảo giáng giá"
        }
       ],
       "traceWord": "无奈",
       "py": "Jiàgé tài gāo gùkè nányǐ jiēshòu gōngsī wúnài zhǐhǎo jiàngjià",
       "traceKey": "wunai",
       "traceInfo": [
        {
         "c": "无",
         "py": "wú",
         "hv": "vô"
        },
        {
         "c": "奈",
         "py": "nài",
         "hv": "nại"
        }
       ]
      },
      {
       "scene": "🧑‍💼🌟⏳",
       "full": "他渴望得到这个机会所以舍得花很多时间练习",
       "vi": "Anh ấy khao khát có được cơ hội này nên sẵn lòng bỏ nhiều thời gian luyện tập",
       "parts": [
        {
         "t": "他",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "渴望得到这个机会",
         "ico": "🌟",
         "c": "v",
         "py": "kěwàng dédào zhè gè jīhuì",
         "hv": "khát vọng đắc đáo giá cá cơ hội"
        },
        {
         "t": "所以舍得花很多时间练习",
         "ico": "⏳",
         "c": "o",
         "py": "suǒyǐ shěde huā hěn duō shíjiān liànxí",
         "hv": "sở dĩ xả đắc hoa ngận đa thời gian luyện tập"
        }
       ],
       "traceWord": "渴望",
       "py": "Tā kěwàng dédào zhè gè jīhuì suǒyǐ shěde huā hěn duō shíjiān liànxí",
       "traceKey": "kewang",
       "traceInfo": [
        {
         "c": "渴",
         "py": "kě",
         "hv": "khát"
        },
        {
         "c": "望",
         "py": "wàng",
         "hv": "vọng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么舍不得离开这家公司？",
       "qvi": "Tại sao bạn không nỡ rời công ty này?",
       "scene": "🧑🏢💛",
       "ans": "因为这里的同事都很好",
       "opts": [
        {
         "txt": "因为我昨天去了北京",
         "ico": "🚄",
         "py": "Yīnwèi wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "因为明天是星期天",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì xīngqītiān"
        },
        {
         "txt": "因为这里的同事都很好",
         "ico": "🤝",
         "py": "Yīnwèi zhèlǐ de tóngshì dōu hěn hǎo"
        }
       ],
       "qpy": "Nǐ wèi shénme shěbude líkāi zhè jiā gōngsī?"
      },
      {
       "q": "你今天怎么这么着急？",
       "qvi": "Hôm nay sao bạn vội vậy?",
       "scene": "🧑🏃⏰",
       "ans": "我差一点儿迟到",
       "opts": [
        {
         "txt": "我差一点儿迟到",
         "ico": "⏰",
         "py": "Wǒ chàyīdiǎnr chídào"
        },
        {
         "txt": "我明天不上班",
         "ico": "🏠",
         "py": "Wǒ míngtiān bú shàngbān"
        },
        {
         "txt": "我今天不想吃饭",
         "ico": "🍚",
         "py": "Wǒ jīntiān bù xiǎng chīfàn"
        }
       ],
       "qpy": "Nǐ jīntiān zěnme zhème zháojí?"
      },
      {
       "q": "你觉得他会同意这个合同吗？",
       "qvi": "Bạn nghĩ anh ấy có đồng ý hợp đồng này không?",
       "scene": "🧑📄👍",
       "ans": "我肯定他会同意",
       "opts": [
        {
         "txt": "我昨天看了电影",
         "ico": "🎬",
         "py": "Wǒ zuótiān kàn le diànyǐng"
        },
        {
         "txt": "他是我们的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        },
        {
         "txt": "我肯定他会同意",
         "ico": "👍",
         "py": "Wǒ kěndìng tā huì tóngyì"
        }
       ],
       "qpy": "Nǐ juéde tā huì tóngyì zhè gè hétóng ma?"
      },
      {
       "q": "你怎么这么高兴？",
       "qvi": "Sao bạn vui thế?",
       "scene": "🧑🎉😲",
       "ans": "因为我居然中奖了",
       "opts": [
        {
         "txt": "因为我生病了",
         "ico": "🤒",
         "py": "Yīnwèi wǒ shēngbìng le"
        },
        {
         "txt": "因为我居然中奖了",
         "ico": "🎁",
         "py": "Yīnwèi wǒ jūrán zhòngjiǎng le"
        },
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        }
       ],
       "qpy": "Nǐ zěnme zhème gāoxìng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bày tỏ thái độ trong cuộc họp nhóm",
      "steps": [
       "<b>Bước 1:</b> Hãy kể với đồng nghiệp về một việc vừa hoàn thành khó khăn, dùng 总算: <i>\"这个项目经过一个月的努力总算完成了。\"</i> Thay bằng dự án thật của bạn rồi nói to 3 lần.",
       "<b>Bước 2:</b> Góp ý về một sản phẩm hoặc dịch vụ bằng 倒是 và 可惜: <i>\"这件衣服的价格倒是不贵，可惜质量不太好。\"</i> Tự nói thêm 2 câu về đồ vật quanh bạn.",
       "<b>Bước 3:</b> Khi cuộc họp kéo dài, đề nghị dứt điểm bằng tin nhắn nhóm: <i>\"会议开了三个小时还没有结果，干脆明天再谈吧。\"</i> Rồi thêm một câu dùng 明明 hoặc 居然 để nói điều bất ngờ."
      ]
     }
    },
    {
     "id": "5.3C",
     "name": "Bài 5.3C: Hợp đồng và thỏa thuận",
     "grammar": {
      "formulas": [
       "🅰️ 合同 + 也好 + 🅱️ 协议 + 也好",
       "✅ 都 + 必须 + ✍️ 签字",
       "🤝 价格 + 也好 + 条件 + 也好 + 只要达成协议"
      ],
      "tip": "Cấu trúc A也好，B也好，……都… (yěhǎo, dã hảo) = dù là A hay B thì đều…. 也好 đặt ngay sau mỗi lựa chọn; vế cuối thường có 都 hoặc 反正 để khẳng định kết quả không đổi. Từ vựng ký kết: 签字 (qiānzì, thiêm tự), 签名 (qiānmíng, thiêm danh), 签订/签约 (qiāndìng/qiānyuē, thiêm đính/thiêm ước), 协议 (xiéyì, hiệp nghị), 达成 (dáchéng, đạt thành).",
      "vn_tip": "Người Việt hay nói \"A hay B đều…\" nên dùng 或者 hoặc 还是 và quên 也好 ở vế thứ hai. Cần nhắc: phải có 也好 sau CẢ HAI vế (合同也好协议也好), và vế kết luận cần 都. Đừng nhầm 签名 (ký tên) với 签证 (visa) hay 签订 (ký kết hợp đồng)."
     },
     "chunks": [
      {
       "scene": "📄✍️✅",
       "full": "合同也好协议也好都必须经过双方签字",
       "vi": "Hợp đồng hay thỏa thuận đều phải được hai bên ký tên",
       "parts": [
        {
         "t": "合同也好协议也好",
         "ico": "📄",
         "c": "s",
         "py": "hétóng yěhǎo xiéyì yěhǎo",
         "hv": "hợp đồng dã hảo hiệp nghị dã hảo"
        },
        {
         "t": "都必须经过",
         "ico": "✅",
         "c": "v",
         "py": "dōu bìxū jīngguò",
         "hv": "đô tất tu kinh quá"
        },
        {
         "t": "双方签字",
         "ico": "✍️",
         "c": "o",
         "py": "shuāngfāng qiānzì",
         "hv": "song phương thiêm tự"
        }
       ],
       "traceWord": "签字",
       "py": "Hétóng yěhǎo xiéyì yěhǎo dōu bìxū jīngguò shuāngfāng qiānzì",
       "traceKey": "qianzi",
       "traceInfo": [
        {
         "c": "签",
         "py": "qiān",
         "hv": "thiêm"
        },
        {
         "c": "字",
         "py": "zì",
         "hv": "tự"
        }
       ]
      },
      {
       "scene": "🛂📑🗂️",
       "full": "签约也好签证也好都需要提前准备材料",
       "vi": "Dù là ký hợp đồng hay làm visa đều cần chuẩn bị giấy tờ từ trước",
       "parts": [
        {
         "t": "签约也好签证也好",
         "ico": "🛂",
         "c": "s",
         "py": "qiānyuē yěhǎo qiānzhèng yěhǎo",
         "hv": "thiêm ước dã hảo thiêm chứng dã hảo"
        },
        {
         "t": "都需要提前",
         "ico": "⏰",
         "c": "v",
         "py": "dōu xūyào tíqián",
         "hv": "đô nhu yếu đề tiền"
        },
        {
         "t": "准备材料",
         "ico": "🗂️",
         "c": "o",
         "py": "zhǔnbèi cáiliào",
         "hv": "chuẩn bị tài liệu"
        }
       ],
       "traceWord": "签证",
       "py": "Qiānyuē yěhǎo qiānzhèng yěhǎo dōu xūyào tíqián zhǔnbèi cáiliào",
       "traceKey": "qianzheng",
       "traceInfo": [
        {
         "c": "签",
         "py": "qiān",
         "hv": "thiêm"
        },
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        }
       ]
      },
      {
       "scene": "⭐🤝🙂",
       "full": "质量也好服务也好我们双方都已经达成了一致",
       "vi": "Dù là chất lượng hay dịch vụ, hai bên chúng tôi đều đã đạt được sự thống nhất",
       "parts": [
        {
         "t": "质量也好服务也好",
         "ico": "⭐",
         "c": "s",
         "py": "zhìliàng yěhǎo fúwù yěhǎo",
         "hv": "chất lượng dã hảo phục vụ dã hảo"
        },
        {
         "t": "我们双方都已经达成",
         "ico": "🤝",
         "c": "v",
         "py": "wǒmen shuāngfāng dōu yǐjīng dáchéng",
         "hv": "ngã môn song phương đô dĩ kinh đạt thành"
        },
        {
         "t": "了一致",
         "ico": "🙂",
         "c": "o",
         "py": "le yīzhì",
         "hv": "liễu nhất trí"
        }
       ],
       "traceWord": "达成",
       "py": "Zhìliàng yěhǎo fúwù yěhǎo wǒmen shuāngfāng dōu yǐjīng dáchéng le yīzhì",
       "traceKey": "dacheng",
       "traceInfo": [
        {
         "c": "达",
         "py": "dá",
         "hv": "đạt"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "🧑‍💼📃🖊️",
       "full": "经理也好同事也好都不能随便在协议书上签名",
       "vi": "Giám đốc hay đồng nghiệp đều không được tùy tiện ký tên lên bản thỏa thuận",
       "parts": [
        {
         "t": "经理也好同事也好",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "jīnglǐ yěhǎo tóngshì yěhǎo",
         "hv": "kinh lý dã hảo đồng sự dã hảo"
        },
        {
         "t": "都不能随便在",
         "ico": "🚫",
         "c": "v",
         "py": "dōu bù néng suíbiàn zài",
         "hv": "đô bất năng tùy tiện tại"
        },
        {
         "t": "协议书上签名",
         "ico": "🖊️",
         "c": "o",
         "py": "xiéyìshū shàng qiānmíng",
         "hv": "hiệp nghị thư thượng thiêm danh"
        }
       ],
       "traceWord": "协议书",
       "py": "Jīnglǐ yěhǎo tóngshì yěhǎo dōu bù néng suíbiàn zài xiéyìshū shàng qiānmíng",
       "traceKey": "xieyishu",
       "traceInfo": [
        {
         "c": "协",
         "py": "xié",
         "hv": "hiệp"
        },
        {
         "c": "议",
         "py": "yì",
         "hv": "nghị"
        },
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        }
       ]
      },
      {
       "scene": "📧☎️💬",
       "full": "邮件也好电话也好请你尽快给我们一个答复",
       "vi": "Dù qua thư điện tử hay điện thoại, xin bạn sớm cho chúng tôi một câu trả lời",
       "parts": [
        {
         "t": "邮件也好电话也好",
         "ico": "📧",
         "c": "s",
         "py": "yóujiàn yěhǎo diànhuà yěhǎo",
         "hv": "bưu kiện dã hảo điện thoại dã hảo"
        },
        {
         "t": "请你尽快给",
         "ico": "⚡",
         "c": "v",
         "py": "qǐng nǐ jǐnkuài gěi",
         "hv": "thỉnh nễ tẫn khoái cấp"
        },
        {
         "t": "我们一个答复",
         "ico": "💬",
         "c": "o",
         "py": "wǒmen yī gè dáfù",
         "hv": "ngã môn nhất cá đáp phục"
        }
       ],
       "traceWord": "答复",
       "py": "Yóujiàn yěhǎo diànhuà yěhǎo qǐng nǐ jǐnkuài gěi wǒmen yī gè dáfù",
       "traceKey": "dafu",
       "traceInfo": [
        {
         "c": "答",
         "py": "dá",
         "hv": "đáp"
        },
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "🏢⚖️📝",
       "full": "公司也好个人也好都可以委托律师代理这件事",
       "vi": "Công ty hay cá nhân đều có thể ủy thác cho luật sư đại diện xử lý việc này",
       "parts": [
        {
         "t": "公司也好个人也好",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī yěhǎo gèrén yěhǎo",
         "hv": "công ti dã hảo cá nhân dã hảo"
        },
        {
         "t": "都可以委托律师",
         "ico": "⚖️",
         "c": "v",
         "py": "dōu kěyǐ wěituō lǜshī",
         "hv": "đô khả dĩ ủy thác luật sư"
        },
        {
         "t": "代理这件事",
         "ico": "📝",
         "c": "o",
         "py": "dàilǐ zhè jiàn shì",
         "hv": "đại lý giá kiện sự"
        }
       ],
       "traceWord": "委托",
       "py": "Gōngsī yěhǎo gèrén yěhǎo dōu kěyǐ wěituō lǜshī dàilǐ zhè jiàn shì",
       "traceKey": "weituo",
       "traceInfo": [
        {
         "c": "委",
         "py": "wěi",
         "hv": "ủy"
        },
        {
         "c": "托",
         "py": "tuō",
         "hv": "thác"
        }
       ]
      },
      {
       "scene": "💡🔁📃",
       "full": "专利转让也好使用许可也好都要先签订协议",
       "vi": "Dù chuyển nhượng sáng chế hay cấp phép sử dụng đều phải ký thỏa thuận trước",
       "parts": [
        {
         "t": "专利转让也好使用许可也好",
         "ico": "💡",
         "c": "s",
         "py": "zhuānlì zhuǎnràng yěhǎo shǐyòng xǔkě yěhǎo",
         "hv": "chuyên lợi chuyển nhượng dã hảo sử dụng hứa khả dã hảo"
        },
        {
         "t": "都要先",
         "ico": "1️⃣",
         "c": "v",
         "py": "dōu yào xiān",
         "hv": "đô yếu tiên"
        },
        {
         "t": "签订协议",
         "ico": "📃",
         "c": "o",
         "py": "qiāndìng xiéyì",
         "hv": "thiêm đính hiệp nghị"
        }
       ],
       "traceWord": "转让",
       "py": "Zhuānlì zhuǎnràng yěhǎo shǐyòng xǔkě yěhǎo dōu yào xiān qiāndìng xiéyì",
       "traceKey": "zhuanrang",
       "traceInfo": [
        {
         "c": "转",
         "py": "zhuǎn",
         "hv": "chuyển"
        },
        {
         "c": "让",
         "py": "ràng",
         "hv": "nhượng"
        }
       ]
      },
      {
       "scene": "💰📋🤝",
       "full": "价格也好条件也好只要达成协议我们就签约",
       "vi": "Dù là giá cả hay điều kiện, chỉ cần đạt được thỏa thuận là chúng tôi ký hợp đồng",
       "parts": [
        {
         "t": "价格也好条件也好",
         "ico": "💰",
         "c": "s",
         "py": "jiàgé yěhǎo tiáojiàn yěhǎo",
         "hv": "giá cách dã hảo điều kiện dã hảo"
        },
        {
         "t": "只要达成协议",
         "ico": "🤝",
         "c": "v",
         "py": "zhǐyào dáchéng xiéyì",
         "hv": "chỉ yếu đạt thành hiệp nghị"
        },
        {
         "t": "我们就签约",
         "ico": "✍️",
         "c": "o",
         "py": "wǒmen jiù qiānyuē",
         "hv": "ngã môn tựu thiêm ước"
        }
       ],
       "traceWord": "签约",
       "py": "Jiàgé yěhǎo tiáojiàn yěhǎo zhǐyào dáchéng xiéyì wǒmen jiù qiānyuē",
       "traceKey": "qianyue",
       "traceInfo": [
        {
         "c": "签",
         "py": "qiān",
         "hv": "thiêm"
        },
        {
         "c": "约",
         "py": "yuē",
         "hv": "ước"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们已经签订合同了吗？",
       "qvi": "Các bạn đã ký hợp đồng chưa?",
       "scene": "🧑📄✍️",
       "ans": "我们已经签订了协议书",
       "opts": [
        {
         "txt": "我们明天去上海",
         "ico": "🚄",
         "py": "Wǒmen míngtiān qù Shànghǎi"
        },
        {
         "txt": "我想买一张车票",
         "ico": "🎫",
         "py": "Wǒ xiǎng mǎi yī zhāng chēpiào"
        },
        {
         "txt": "我们已经签订了协议书",
         "ico": "📃",
         "py": "Wǒmen yǐjīng qiāndìng le xiéyìshū"
        }
       ],
       "qpy": "Nǐmen yǐjīng qiāndìng hétóng le ma?"
      },
      {
       "q": "这份协议我现在可以签吗？",
       "qvi": "Bản thỏa thuận này bây giờ tôi có thể ký được không?",
       "scene": "🧑🖊️❓",
       "ans": "可以请你先看看条件再签",
       "opts": [
        {
         "txt": "可以请你先看看条件再签",
         "ico": "🖊️",
         "py": "Kěyǐ qǐng nǐ xiān kàn kàn tiáojiàn zài qiān"
        },
        {
         "txt": "请在下周一来",
         "ico": "📅",
         "py": "Qǐng zài xià zhōu yī lái"
        },
        {
         "txt": "请喝一杯茶",
         "ico": "🍵",
         "py": "Qǐng hē yī bēi chá"
        }
       ],
       "qpy": "Zhè fèn xiéyì wǒ xiànzài kěyǐ qiān ma?"
      },
      {
       "q": "这项专利可以转让吗？",
       "qvi": "Sáng chế này có thể chuyển nhượng không?",
       "scene": "💡🔁❓",
       "ans": "可以不过要先得到对方的许可",
       "opts": [
        {
         "txt": "不行这里不能停车",
         "ico": "🚗",
         "py": "Bùxíng zhèlǐ bù néng tíngchē"
        },
        {
         "txt": "我觉得天气很热",
         "ico": "☀️",
         "py": "Wǒ juéde tiānqì hěn rè"
        },
        {
         "txt": "可以不过要先得到对方的许可",
         "ico": "✅",
         "py": "Kěyǐ bùguò yào xiān dédào duìfāng de xǔkě"
        }
       ],
       "qpy": "Zhè xiàng zhuānlì kěyǐ zhuǎnràng ma?"
      },
      {
       "q": "什么时候可以收到对方的答复？",
       "qvi": "Khi nào có thể nhận được trả lời của phía bên kia?",
       "scene": "📩⏰❓",
       "ans": "明天下午就可以收到",
       "opts": [
        {
         "txt": "我已经吃过饭了",
         "ico": "🍚",
         "py": "Wǒ yǐjīng chī guò fàn le"
        },
        {
         "txt": "明天下午就可以收到",
         "ico": "📩",
         "py": "Míngtiān xiàwǔ jiù kěyǐ shōudào"
        },
        {
         "txt": "昨天他去了上海",
         "ico": "🚄",
         "py": "Zuótiān tā qù le Shànghǎi"
        }
       ],
       "qpy": "Shénme shíhou kěyǐ shōudào duìfāng de dáfù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thương lượng và ký thỏa thuận với đối tác",
      "steps": [
       "<b>Bước 1:</b> Gọi điện (hoặc tự nói) nhắc đối tác về thủ tục ký kết: <i>\"合同也好协议也好都必须经过双方签字。\"</i> Thay hai danh từ bằng 签约 và 签证 hoặc hai thứ khác bạn quen dùng.",
       "<b>Bước 2:</b> Đề nghị họ phản hồi nhanh: <i>\"邮件也好电话也好请你尽快给我们一个答复。\"</i> Rồi hỏi: <i>\"什么时候可以收到对方的答复？\"</i> và tự trả lời.",
       "<b>Bước 3:</b> Chốt điều kiện: <i>\"价格也好条件也好只要达成协议我们就签约。\"</i> Cuối cùng tự đặt thêm một câu dạng A也好，B也好，都… về công việc của chính bạn."
      ]
     }
    }
   ]
  },
  "5.4": {
   "lessons": [
    {
     "id": "5.4A",
     "name": "Bài 5.4A: Cải cách và xu thế xã hội",
     "grammar": {
      "formulas": [
       "⏳ 随着 + 📈 发展/变化 + 🏢 主语 + 越来越…",
       "🌏 随着 + 🔧 技术的发展 + ➡️ 新的结果",
       "❓ 随着改革的深入 + 市场 + 怎么样？"
      ],
      "tip": "Giới từ 随着 (suízhe, tùy trứ) nghĩa là \"cùng với, theo sự…\": đứng trước một quá trình thay đổi (发展, 变化, 深入…), cho biết kết quả thay đổi theo. Mệnh đề chính thường có 越来越, 不断, 也, 都.",
      "vn_tip": "Người Việt hay nói \"随着…的时候\" hoặc để 随着 sau chủ ngữ rồi thêm \"的时候\". Đúng: 随着 + cụm chỉ sự thay đổi (随着时间的变化), không thêm 的时候."
     },
     "chunks": [
      {
       "scene": "⏳👥💭",
       "full": "人们的想法随着时间不断变化",
       "vi": "Suy nghĩ của mọi người không ngừng thay đổi theo thời gian",
       "parts": [
        {
         "t": "人们的想法",
         "ico": "👥",
         "c": "s",
         "py": "rénmen de xiǎngfǎ",
         "hv": "nhân môn đích tưởng pháp"
        },
        {
         "t": "随着时间",
         "ico": "⏳",
         "c": "v",
         "py": "suízhe shíjiān",
         "hv": "tùy trước thời gian"
        },
        {
         "t": "不断变化",
         "ico": "🔄",
         "c": "o",
         "py": "bùduàn biànhuà",
         "hv": "bất đoạn biến hóa"
        }
       ],
       "traceWord": "随着",
       "py": "Rénmen de xiǎngfǎ suízhe shíjiān bùduàn biànhuà",
       "traceKey": "suizhe",
       "traceInfo": [
        {
         "c": "随",
         "py": "suí",
         "hv": "tùy"
        },
        {
         "c": "着",
         "py": "zhe",
         "hv": "trước"
        }
       ]
      },
      {
       "scene": "🏢🔍📋",
       "full": "我们要先了解公司目前的现状",
       "vi": "Chúng ta cần tìm hiểu trước hiện trạng hiện nay của công ty",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "要先了解",
         "ico": "🔍",
         "c": "v",
         "py": "yào xiān liǎojiě",
         "hv": "yếu tiên liễu giải"
        },
        {
         "t": "公司目前的现状",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī mùqián de xiànzhuàng",
         "hv": "công ti mục tiền đích hiện trạng"
        }
       ],
       "traceWord": "现状",
       "py": "Wǒmen yào xiān liǎojiě gōngsī mùqián de xiànzhuàng",
       "traceKey": "xianzhuang",
       "traceInfo": [
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        },
        {
         "c": "状",
         "py": "zhuàng",
         "hv": "trạng"
        }
       ]
      },
      {
       "scene": "🏢👤🏅",
       "full": "公司现有的人员比原有的人员更有经验",
       "vi": "Nhân sự hiện có của công ty có kinh nghiệm hơn nhân sự trước đây",
       "parts": [
        {
         "t": "公司现有的人员",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī xiànyǒu de rényuán",
         "hv": "công ti hiện hữu đích nhân viên"
        },
        {
         "t": "比原有的人员",
         "ico": "⚖️",
         "c": "v",
         "py": "bǐ yuányǒu de rényuán",
         "hv": "tỷ nguyên hữu đích nhân viên"
        },
        {
         "t": "更有经验",
         "ico": "🏅",
         "c": "o",
         "py": "gèng yǒu jīngyàn",
         "hv": "cánh hữu kinh nghiệm"
        }
       ],
       "traceWord": "现有",
       "py": "Gōngsī xiànyǒu de rényuán bǐ yuányǒu de rényuán gèng yǒu jīngyàn",
       "traceKey": "xianyou",
       "traceInfo": [
        {
         "c": "现",
         "py": "xiàn",
         "hv": "hiện"
        },
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "🏢⚡🖥️",
       "full": "公司正在加速更新旧的设备",
       "vi": "Công ty đang đẩy nhanh việc đổi mới thiết bị cũ",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "正在加速更新",
         "ico": "⚡",
         "c": "v",
         "py": "zhèngzài jiāsù gēngxīn",
         "hv": "chính tại gia tốc canh tân"
        },
        {
         "t": "旧的设备",
         "ico": "🖥️",
         "c": "o",
         "py": "jiù de shèbèi",
         "hv": "cựu đích thiết bị"
        }
       ],
       "traceWord": "更新",
       "py": "Gōngsī zhèngzài jiāsù gēngxīn jiù de shèbèi",
       "traceKey": "gengxin",
       "traceInfo": [
        {
         "c": "更",
         "py": "gēng",
         "hv": "canh"
        },
        {
         "c": "新",
         "py": "xīn",
         "hv": "tân"
        }
       ]
      },
      {
       "scene": "💹🚚👥",
       "full": "随着经济的发展人口流动和商品流通都加快了",
       "vi": "Cùng với sự phát triển kinh tế, dân cư di chuyển và hàng hóa lưu thông đều nhanh lên",
       "parts": [
        {
         "t": "随着经济的发展",
         "ico": "💹",
         "c": "s",
         "py": "suízhe jīngjì de fāzhǎn",
         "hv": "tùy trước kinh tế đích phát triển"
        },
        {
         "t": "人口流动和商品流通",
         "ico": "🚚",
         "c": "v",
         "py": "rénkǒu liúdòng hé shāngpǐn liútōng",
         "hv": "nhân khẩu lưu động hòa thương phẩm lưu thông"
        },
        {
         "t": "都加快了",
         "ico": "⏩",
         "c": "o",
         "py": "dōu jiākuài le",
         "hv": "đô gia khoái liễu"
        }
       ],
       "traceWord": "流通",
       "py": "Suízhe jīngjì de fāzhǎn rénkǒu liúdòng hé shāngpǐn liútōng dōu jiākuài le",
       "traceKey": "liutong",
       "traceInfo": [
        {
         "c": "流",
         "py": "liú",
         "hv": "lưu"
        },
        {
         "c": "通",
         "py": "tōng",
         "hv": "thông"
        }
       ]
      },
      {
       "scene": "💻🧑‍💼🔓",
       "full": "新技术把人们从重复的工作中解放出来",
       "vi": "Công nghệ mới giải phóng con người khỏi công việc lặp đi lặp lại",
       "parts": [
        {
         "t": "新技术",
         "ico": "💻",
         "c": "s",
         "py": "xīn jìshù",
         "hv": "tân kỹ thuật"
        },
        {
         "t": "把人们从重复的工作中",
         "ico": "🔁",
         "c": "v",
         "py": "bǎ rénmen cóng chóngfù de gōngzuò zhōng",
         "hv": "bả nhân môn tòng trùng phục đích công tác trung"
        },
        {
         "t": "解放出来",
         "ico": "🔓",
         "c": "o",
         "py": "jiěfàng chūlái",
         "hv": "giải phóng xuất lai"
        }
       ],
       "traceWord": "解放",
       "py": "Xīn jìshù bǎ rénmen cóng chóngfù de gōngzuò zhōng jiěfàng chūlái",
       "traceKey": "jiefang",
       "traceInfo": [
        {
         "c": "解",
         "py": "jiě",
         "hv": "giải"
        },
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        }
       ]
      },
      {
       "scene": "📊🔄ℹ️",
       "full": "我们要把这些数据转化成有用的信息",
       "vi": "Chúng ta cần biến những dữ liệu này thành thông tin hữu ích",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "要把这些数据转化成",
         "ico": "🔄",
         "c": "v",
         "py": "yào bǎ zhèxiē shùjù zhuǎnhuà chéng",
         "hv": "yếu bả giá ta số cứ chuyển hóa thành"
        },
        {
         "t": "有用的信息",
         "ico": "ℹ️",
         "c": "o",
         "py": "yǒuyòng de xìnxī",
         "hv": "hữu dụng đích tín tức"
        }
       ],
       "traceWord": "转化",
       "py": "Wǒmen yào bǎ zhèxiē shùjù zhuǎnhuà chéng yǒuyòng de xìnxī",
       "traceKey": "zhuanhua",
       "traceInfo": [
        {
         "c": "转",
         "py": "zhuǎn",
         "hv": "chuyển"
        },
        {
         "c": "化",
         "py": "huà",
         "hv": "hóa"
        }
       ]
      },
      {
       "scene": "🌐🏭🛎️",
       "full": "随着互联网的发展企业的重点从生产转向了服务",
       "vi": "Cùng với sự phát triển của internet, trọng tâm của doanh nghiệp chuyển từ sản xuất sang dịch vụ",
       "parts": [
        {
         "t": "随着互联网的发展",
         "ico": "🌐",
         "c": "s",
         "py": "suízhe hùliánwǎng de fāzhǎn",
         "hv": "tùy trước hỗ liên võng đích phát triển"
        },
        {
         "t": "企业的重点从生产",
         "ico": "🏭",
         "c": "v",
         "py": "qǐyè de zhòngdiǎn cóng shēngchǎn",
         "hv": "xí nghiệp đích trọng điểm tòng sinh sản"
        },
        {
         "t": "转向了服务",
         "ico": "🛎️",
         "c": "o",
         "py": "zhuǎnxiàng le fúwù",
         "hv": "chuyển hướng liễu phục vụ"
        }
       ],
       "traceWord": "转向",
       "py": "Suízhe hùliánwǎng de fāzhǎn qǐyè de zhòngdiǎn cóng shēngchǎn zhuǎnxiàng le fúwù",
       "traceKey": "zhuanxiang",
       "traceInfo": [
        {
         "c": "转",
         "py": "zhuǎn",
         "hv": "chuyển"
        },
        {
         "c": "向",
         "py": "xiàng",
         "hv": "hướng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "随着改革的深入，市场变得怎么样？",
       "qvi": "Cùng với cải cách đi vào chiều sâu, thị trường trở nên thế nào?",
       "scene": "🏬📈",
       "ans": "市场变得越来越繁荣",
       "opts": [
        {
         "txt": "市场变得越来越小",
         "ico": "📉",
         "py": "Shìchǎng biàn de yuè lái yuè xiǎo"
        },
        {
         "txt": "市场变得越来越繁荣",
         "ico": "📈",
         "py": "Shìchǎng biàn de yuè lái yuè fánróng"
        },
        {
         "txt": "市场已经关闭了",
         "ico": "🚪",
         "py": "Shìchǎng yǐjīng guānbì le"
        }
       ],
       "qpy": "Suízhe gǎigé de shēnrù shìchǎng biàn de zěnmeyàng?"
      },
      {
       "q": "这个工具可以做什么？",
       "qvi": "Công cụ này làm được gì?",
       "scene": "🛠️🔤",
       "ans": "它可以把中文转换成英文",
       "opts": [
        {
         "txt": "它可以带你去旅行",
         "ico": "✈️",
         "py": "Tā kěyǐ dài nǐ qù lǚxíng"
        },
        {
         "txt": "它可以把中文转换成英文",
         "ico": "🔤",
         "py": "Tā kěyǐ bǎ Zhōngwén zhuǎnhuàn chéng Yīngwén"
        },
        {
         "txt": "它可以帮你洗衣服",
         "ico": "👕",
         "py": "Tā kěyǐ bāng nǐ xǐ yīfu"
        }
       ],
       "qpy": "Zhè gè gōngjù kěyǐ zuò shénme?"
      },
      {
       "q": "动物为什么会不断进化？",
       "qvi": "Tại sao động vật không ngừng tiến hóa?",
       "scene": "🐒🌿",
       "ans": "为了适应环境",
       "opts": [
        {
         "txt": "为了多吃一点儿",
         "ico": "🍚",
         "py": "Wèile duō chī yīdiǎnr"
        },
        {
         "txt": "为了早点下班",
         "ico": "🏠",
         "py": "Wèile zǎo diǎn xiàbān"
        },
        {
         "txt": "为了适应环境",
         "ico": "🌿",
         "py": "Wèile shìyìng huánjìng"
        }
       ],
       "qpy": "Dòngwù wèi shénme huì bùduàn jìnhuà?"
      },
      {
       "q": "原始社会和现代社会有什么不同？",
       "qvi": "Xã hội nguyên thủy và xã hội hiện đại khác nhau thế nào?",
       "scene": "🔥🏙️",
       "ans": "原始社会没有现代的技术",
       "opts": [
        {
         "txt": "原始社会有很多汽车",
         "ico": "🚗",
         "py": "Yuánshǐ shèhuì yǒu hěn duō qìchē"
        },
        {
         "txt": "原始社会的人每天都上网",
         "ico": "🌐",
         "py": "Yuánshǐ shèhuì de rén měi tiān dōu shàngwǎng"
        },
        {
         "txt": "原始社会没有现代的技术",
         "ico": "🔥",
         "py": "Yuánshǐ shèhuì méiyǒu xiàndài de jìshù"
        }
       ],
       "qpy": "Yuánshǐ shèhuì hé xiàndài shèhuì yǒu shénme bù tóng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trình bày thay đổi của công ty trong cuộc họp",
      "steps": [
       "<b>Bước 1:</b> Chuẩn bị cho cuộc họp: viết ra 3 thay đổi của công ty trong vài năm qua (thiết bị, nhân sự, thị trường), rồi nói thành tiếng câu mở đầu <i>\"我们要先了解公司目前的现状\"</i>.",
       "<b>Bước 2:</b> Với mỗi thay đổi, đặt một câu với 随着, ví dụ <i>\"随着互联网的发展企业的重点从生产转向了服务\"</i>, thay phần giữa bằng tình hình thật của công ty bạn.",
       "<b>Bước 3:</b> Nhắn cho đồng nghiệp một tin ngắn bằng tiếng Trung báo kế hoạch, ví dụ <i>\"公司正在加速更新旧的设备\"</i>, rồi đọc to toàn bộ phần trình bày một lần."
      ]
     }
    },
    {
     "id": "5.4B",
     "name": "Bài 5.4B: Chức vụ và thu nhập",
     "grammar": {
      "formulas": [
       "🧑 主语 + 📌 凭 + 💪 能力/经验 + ✅ 得到…",
       "🧑 他 + 📌 凭 + 努力 + 💰 挣钱",
       "❓ 你 + 📌 凭什么 + 得到这个职位？"
      ],
      "tip": "Giới từ 凭 (píng, bằng) nghĩa là \"dựa vào, nhờ vào\": 凭 + năng lực/kinh nghiệm/nỗ lực + kết quả. Có thể đặt trước chủ ngữ: 凭经验，他得到了这个职位. Câu hỏi 凭什么 mang sắc thái chất vấn \"dựa vào đâu\".",
      "vn_tip": "Người Việt hay dịch \"nhờ\" thành 靠 hoặc 因为 cho mọi trường hợp. Khi nói dựa vào điều kiện/năng lực làm căn cứ thì dùng 凭 + danh từ, không thêm 因为 phía trước."
     },
     "chunks": [
      {
       "scene": "🧑💪💰",
       "full": "他凭自己的努力挣钱养家",
       "vi": "Anh ấy nhờ nỗ lực của bản thân kiếm tiền nuôi gia đình",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "凭自己的努力",
         "ico": "💪",
         "c": "v",
         "py": "píng zìjǐ de nǔlì",
         "hv": "bằng tự kỷ đích nỗ lực"
        },
        {
         "t": "挣钱养家",
         "ico": "💰",
         "c": "o",
         "py": "zhèngqián yǎng jiā",
         "hv": "tránh tiền dưỡng gia"
        }
       ],
       "traceWord": "挣钱",
       "py": "Tā píng zìjǐ de nǔlì zhèngqián yǎng jiā",
       "traceKey": "zhengqian",
       "traceInfo": [
        {
         "c": "挣",
         "py": "zhèng",
         "hv": "tránh"
        },
        {
         "c": "钱",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "🧑📅💴",
       "full": "小王一个月能挣一万多元",
       "vi": "Tiểu Vương một tháng kiếm được hơn một vạn tệ",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "一个月能挣",
         "ico": "📅",
         "c": "v",
         "py": "yī gè yuè néng zhèng",
         "hv": "nhất cá nguyệt năng tránh"
        },
        {
         "t": "一万多元",
         "ico": "💴",
         "c": "o",
         "py": "yī wàn duō yuán",
         "hv": "nhất vạn đa nguyên"
        }
       ],
       "traceWord": "挣",
       "py": "Xiǎowáng yī gè yuè néng zhèng yī wàn duō yuán",
       "traceKey": "zheng",
       "traceInfo": [
        {
         "c": "挣",
         "py": "zhèng",
         "hv": "tránh"
        }
       ]
      },
      {
       "scene": "🧑🏅📈",
       "full": "我想凭自己的经验申请更高的职位",
       "vi": "Tôi muốn dựa vào kinh nghiệm của mình để xin vị trí cao hơn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想凭自己的经验申请",
         "ico": "🏅",
         "c": "v",
         "py": "xiǎng píng zìjǐ de jīngyàn shēnqǐng",
         "hv": "tưởng bằng tự kỷ đích kinh nghiệm thân thỉnh"
        },
        {
         "t": "更高的职位",
         "ico": "📈",
         "c": "o",
         "py": "gèng gāo de zhíwèi",
         "hv": "cánh cao đích chức vị"
        }
       ],
       "traceWord": "职位",
       "py": "Wǒ xiǎng píng zìjǐ de jīngyàn shēnqǐng gèng gāo de zhíwèi",
       "traceKey": "zhiwei",
       "traceInfo": [
        {
         "c": "职",
         "py": "zhí",
         "hv": "chức"
        },
        {
         "c": "位",
         "py": "wèi",
         "hv": "vị"
        }
       ]
      },
      {
       "scene": "🧑🤝👔",
       "full": "他的职务是总裁助理主要职能是帮助总裁",
       "vi": "Chức vụ của anh ấy là trợ lý tổng giám đốc, chức năng chính là hỗ trợ tổng giám đốc",
       "parts": [
        {
         "t": "他的职务",
         "ico": "🧑",
         "c": "s",
         "py": "tā de zhíwù",
         "hv": "tha đích chức vụ"
        },
        {
         "t": "是总裁助理",
         "ico": "👔",
         "c": "v",
         "py": "shì zǒngcái zhùlǐ",
         "hv": "thị tổng tài trợ lý"
        },
        {
         "t": "主要职能是帮助总裁",
         "ico": "🤝",
         "c": "o",
         "py": "zhǔyào zhínéng shì bāngzhù zǒngcái",
         "hv": "chủ yếu chức năng thị bang trợ tổng tài"
        }
       ],
       "traceWord": "职务",
       "py": "Tā de zhíwù shì zǒngcái zhùlǐ zhǔyào zhínéng shì bāngzhù zǒngcái",
       "traceKey": "zhiwu",
       "traceInfo": [
        {
         "c": "职",
         "py": "zhí",
         "hv": "chức"
        },
        {
         "c": "务",
         "py": "wù",
         "hv": "vụ"
        }
       ]
      },
      {
       "scene": "✈️🧑🌙",
       "full": "他下周要出差所以由我来值班",
       "vi": "Tuần sau anh ấy đi công tác nên tôi sẽ trực thay",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "下周要出差",
         "ico": "✈️",
         "c": "v",
         "py": "xià zhōu yào chūchāi",
         "hv": "hạ chu yếu xuất sai"
        },
        {
         "t": "所以由我来值班",
         "ico": "🌙",
         "c": "o",
         "py": "suǒyǐ yóu wǒ lái zhíbān",
         "hv": "sở dĩ do ngã lai trị ban"
        }
       ],
       "traceWord": "出差",
       "py": "Tā xià zhōu yào chūchāi suǒyǐ yóu wǒ lái zhíbān",
       "traceKey": "chuchai",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "差",
         "py": "chāi",
         "hv": "sai"
        }
       ]
      },
      {
       "scene": "😫🧑📄",
       "full": "因为工作压力太大他向主管提出了辞职",
       "vi": "Vì áp lực công việc quá lớn, anh ấy đã nộp đơn xin nghỉ việc lên cấp quản lý",
       "parts": [
        {
         "t": "因为工作压力太大",
         "ico": "😫",
         "c": "s",
         "py": "yīnwèi gōngzuò yālì tài dà",
         "hv": "nhân vị công tác áp lực thái đại"
        },
        {
         "t": "他向主管",
         "ico": "🧑",
         "c": "v",
         "py": "tā xiàng zhǔguǎn",
         "hv": "tha hướng chủ quản"
        },
        {
         "t": "提出了辞职",
         "ico": "📄",
         "c": "o",
         "py": "tíchū le cízhí",
         "hv": "đề xuất liễu từ chức"
        }
       ],
       "traceWord": "辞职",
       "py": "Yīnwèi gōngzuò yālì tài dà tā xiàng zhǔguǎn tíchū le cízhí",
       "traceKey": "cizhi",
       "traceInfo": [
        {
         "c": "辞",
         "py": "cí",
         "hv": "từ"
        },
        {
         "c": "职",
         "py": "zhí",
         "hv": "chức"
        }
       ]
      },
      {
       "scene": "🏢📝🛠️",
       "full": "公司每年都要考核员工的专业技能",
       "vi": "Hằng năm công ty đều đánh giá kỹ năng chuyên môn của nhân viên",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "每年都要考核",
         "ico": "📝",
         "c": "v",
         "py": "měi nián dōu yào kǎohé",
         "hv": "mỗi niên đô yếu khảo hạch"
        },
        {
         "t": "员工的专业技能",
         "ico": "🛠️",
         "c": "o",
         "py": "yuángōng de zhuānyè jìnéng",
         "hv": "viên công đích chuyên nghiệp kỹ năng"
        }
       ],
       "traceWord": "技能",
       "py": "Gōngsī měi nián dōu yào kǎohé yuángōng de zhuānyè jìnéng",
       "traceKey": "jineng",
       "traceInfo": [
        {
         "c": "技",
         "py": "jì",
         "hv": "kỹ"
        },
        {
         "c": "能",
         "py": "néng",
         "hv": "năng"
        }
       ]
      },
      {
       "scene": "📂🧑‍💼🧑‍🏫",
       "full": "这个项目的负责人请了一位顾问和两个助手",
       "vi": "Người phụ trách dự án này đã mời một cố vấn và hai trợ thủ",
       "parts": [
        {
         "t": "这个项目的负责人",
         "ico": "📂",
         "c": "s",
         "py": "zhè gè xiàng mùdì fùzérén",
         "hv": "giá cá hạng mục đích phụ trách nhân"
        },
        {
         "t": "请了一位顾问",
         "ico": "🧑‍🏫",
         "c": "v",
         "py": "qǐng le yī wèi gùwèn",
         "hv": "thỉnh liễu nhất vị cố vấn"
        },
        {
         "t": "和两个助手",
         "ico": "🧑‍💼",
         "c": "o",
         "py": "hé liǎng gè zhùshǒu",
         "hv": "hòa lưỡng cá trợ thủ"
        }
       ],
       "traceWord": "负责人",
       "py": "Zhè gè xiàng mùdì fùzérén qǐng le yī wèi gùwèn hé liǎng gè zhùshǒu",
       "traceKey": "fuzeren",
       "traceInfo": [
        {
         "c": "负",
         "py": "fù",
         "hv": "phụ"
        },
        {
         "c": "责",
         "py": "zé",
         "hv": "trách"
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
       "q": "你凭什么得到这个职位？",
       "qvi": "Bạn dựa vào đâu mà có được vị trí này?",
       "scene": "🧑📈",
       "ans": "凭我多年的工作经验",
       "opts": [
        {
         "txt": "因为明天要下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān yào xià yǔ le"
        },
        {
         "txt": "凭我多年的工作经验",
         "ico": "🏅",
         "py": "Píng wǒ duō nián de gōngzuò jīngyàn"
        },
        {
         "txt": "我打算下周去旅行",
         "ico": "✈️",
         "py": "Wǒ dǎsuàn xià zhōu qù lǚxíng"
        }
       ],
       "qpy": "Nǐ píng shénme dédào zhè gè zhíwèi?"
      },
      {
       "q": "你们公司的负责人是谁？",
       "qvi": "Người phụ trách công ty các bạn là ai?",
       "scene": "🏢❓",
       "ans": "负责人是张经理",
       "opts": [
        {
         "txt": "我们公司有两千名员工",
         "ico": "👥",
         "py": "Wǒmen gōngsī yǒu liǎng qiān míng yuángōng"
        },
        {
         "txt": "这个周末天气很好",
         "ico": "☀️",
         "py": "Zhè gè zhōumò tiānqì hěn hǎo"
        },
        {
         "txt": "负责人是张经理",
         "ico": "🧑‍💼",
         "py": "Fùzérén shì Zhāngjīnglǐ"
        }
       ],
       "qpy": "Nǐmen gōngsī de fùzérén shì shéi?"
      },
      {
       "q": "你这个月为什么没有休息？",
       "qvi": "Tháng này sao bạn không được nghỉ?",
       "scene": "🌙🧑",
       "ans": "因为我要值班",
       "opts": [
        {
         "txt": "因为我要值班",
         "ico": "🌙",
         "py": "Yīnwèi wǒ yào zhíbān"
        },
        {
         "txt": "因为我刚吃完饭",
         "ico": "🍚",
         "py": "Yīnwèi wǒ gāng chī wán fàn"
        },
        {
         "txt": "因为我喜欢红色",
         "ico": "🔴",
         "py": "Yīnwèi wǒ xǐhuan hóngsè"
        }
       ],
       "qpy": "Nǐ zhè gè yuè wèi shénme méiyǒu xiūxi?"
      },
      {
       "q": "他为什么想辞职？",
       "qvi": "Tại sao anh ấy muốn nghỉ việc?",
       "scene": "🧑📄💰",
       "ans": "他想找一份挣钱更多的工作",
       "opts": [
        {
         "txt": "他想去公园玩儿",
         "ico": "🌳",
         "py": "Tā xiǎng qù gōngyuán wánr"
        },
        {
         "txt": "他想买一件新衣服",
         "ico": "👕",
         "py": "Tā xiǎng mǎi yī jiàn xīn yīfu"
        },
        {
         "txt": "他想找一份挣钱更多的工作",
         "ico": "💰",
         "py": "Tā xiǎng zhǎo yī fèn zhèngqián gèng duō de gōngzuò"
        }
       ],
       "qpy": "Tā wèi shénme xiǎng cízhí?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói chuyện với quản lý về vị trí và thu nhập",
      "steps": [
       "<b>Bước 1:</b> Viết ra 3 điểm mạnh của bạn (kinh nghiệm, kỹ năng, nỗ lực) và đọc thành tiếng, ví dụ <i>\"我想凭自己的经验申请更高的职位\"</i>.",
       "<b>Bước 2:</b> Đóng vai cuộc gặp với quản lý: hỏi về lịch <i>\"他下周要出差所以由我来值班\"</i> hoặc về chức vụ mới, rồi tự trả lời câu hỏi <i>\"你凭什么得到这个职位？\"</i> bằng một câu với 凭.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp bằng tiếng Trung, giới thiệu người phụ trách dự án, ví dụ <i>\"这个项目的负责人请了一位顾问和两个助手\"</i>, thay bằng tình hình thật ở nơi bạn làm."
      ]
     }
    },
    {
     "id": "5.4C",
     "name": "Bài 5.4C: Pháp luật và quy phạm",
     "grammar": {
      "formulas": [
       "⚖️ 依据 + 📜 法律/规定 + ✅ 作出决定",
       "🏢 主语 + 📜 依法 + 🛡️ 动词",
       "❓ 依据 + 什么 + 作出决定？"
      ],
      "tip": "Giới từ 依据 (yījù, y cứ) nghĩa là \"căn cứ vào\": 依据 + danh từ làm căn cứ (法律, 规定, 事实) + hành động hoặc kết luận. Đây là văn phong trang trọng, thường gặp trong văn bản, báo cáo; 依法 là trạng từ \"theo pháp luật\", đứng trước động từ.",
      "vn_tip": "Người Việt hay dùng 根据 cho mọi trường hợp và đặt 依据 như một danh từ thông thường. Với 依据 làm giới từ, đặt trước danh từ căn cứ và trước động từ chính: 法院依据法律作出决定, không nói 依据的法律."
     },
     "chunks": [
      {
       "scene": "⚖️📜✅",
       "full": "法院依据法律作出了公正的决定",
       "vi": "Tòa án căn cứ vào pháp luật đã đưa ra quyết định công bằng",
       "parts": [
        {
         "t": "法院",
         "ico": "⚖️",
         "c": "s",
         "py": "fǎyuàn",
         "hv": "pháp viện"
        },
        {
         "t": "依据法律作出了",
         "ico": "📜",
         "c": "v",
         "py": "yījù fǎlǜ zuòchū le",
         "hv": "y cứ pháp luật tác xuất liễu"
        },
        {
         "t": "公正的决定",
         "ico": "✅",
         "c": "o",
         "py": "gōngzhèng de juédìng",
         "hv": "công chính đích quyết định"
        }
       ],
       "traceWord": "依据",
       "py": "Fǎyuàn yījù fǎlǜ zuòchū le gōngzhèng de juédìng",
       "traceKey": "yiju",
       "traceInfo": [
        {
         "c": "依",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "据",
         "py": "jù",
         "hv": "cứ"
        }
       ]
      },
      {
       "scene": "🏢🛡️👥",
       "full": "公司必须依法保护员工的权利",
       "vi": "Công ty phải theo pháp luật bảo vệ quyền lợi của nhân viên",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "必须依法保护",
         "ico": "🛡️",
         "c": "v",
         "py": "bìxū yīfǎ bǎohù",
         "hv": "tất tu y pháp bảo hộ"
        },
        {
         "t": "员工的权利",
         "ico": "👥",
         "c": "o",
         "py": "yuángōng de quánlì",
         "hv": "viên công đích quyền lợi"
        }
       ],
       "traceWord": "依法",
       "py": "Gōngsī bìxū yīfǎ bǎohù yuángōng de quánlì",
       "traceKey": "yifa",
       "traceInfo": [
        {
         "c": "依",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "🚫⚖️💸",
       "full": "任何违法的行为都要受到处罚",
       "vi": "Bất kỳ hành vi vi phạm pháp luật nào cũng phải chịu xử phạt",
       "parts": [
        {
         "t": "任何违法的行为",
         "ico": "🚫",
         "c": "s",
         "py": "rènhé wéifǎ de xíngwéi",
         "hv": "nhiệm hà vi pháp đích hành vi"
        },
        {
         "t": "都要受到",
         "ico": "⚠️",
         "c": "v",
         "py": "dōu yào shòudào",
         "hv": "đô yếu thụ đáo"
        },
        {
         "t": "处罚",
         "ico": "💸",
         "c": "o",
         "py": "chǔfá",
         "hv": "xử phạt"
        }
       ],
       "traceWord": "违法",
       "py": "Rènhé wéifǎ de xíngwéi dōu yào shòudào chǔfá",
       "traceKey": "weifa",
       "traceInfo": [
        {
         "c": "违",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "👷⚠️📄",
       "full": "员工违规操作会受到公司处分",
       "vi": "Nhân viên thao tác sai quy định sẽ bị công ty kỷ luật",
       "parts": [
        {
         "t": "员工",
         "ico": "👷",
         "c": "s",
         "py": "yuángōng",
         "hv": "viên công"
        },
        {
         "t": "违规操作",
         "ico": "⚠️",
         "c": "v",
         "py": "wéiguī cāozuò",
         "hv": "vi quy thao tác"
        },
        {
         "t": "会受到公司处分",
         "ico": "📄",
         "c": "o",
         "py": "huì shòudào gōngsī chǔfèn",
         "hv": "hội thụ đáo công ti xử phân"
        }
       ],
       "traceWord": "违规",
       "py": "Yuángōng wéiguī cāozuò huì shòudào gōngsī chǔfèn",
       "traceKey": "weigui",
       "traceInfo": [
        {
         "c": "违",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "规",
         "py": "guī",
         "hv": "quy"
        }
       ]
      },
      {
       "scene": "🚗🚦💸",
       "full": "开车违反交通法规要被罚款",
       "vi": "Lái xe vi phạm quy định giao thông sẽ bị phạt tiền",
       "parts": [
        {
         "t": "开车",
         "ico": "🚗",
         "c": "s",
         "py": "kāichē",
         "hv": "khai xa"
        },
        {
         "t": "违反",
         "ico": "🚦",
         "c": "v",
         "py": "wéifǎn",
         "hv": "vi phản"
        },
        {
         "t": "交通法规要被罚款",
         "ico": "💸",
         "c": "o",
         "py": "jiāotōng fǎguī yào bèi fákuǎn",
         "hv": "giao thông pháp quy yếu bị phạt khoản"
        }
       ],
       "traceWord": "罚款",
       "py": "Kāichē wéifǎn jiāotōng fǎguī yào bèi fákuǎn",
       "traceKey": "fakuan",
       "traceInfo": [
        {
         "c": "罚",
         "py": "fá",
         "hv": "phạt"
        },
        {
         "c": "款",
         "py": "kuǎn",
         "hv": "khoản"
        }
       ]
      },
      {
       "scene": "⏰🧑💴",
       "full": "迟到三次就要罚一百元",
       "vi": "Đi muộn ba lần thì bị phạt một trăm tệ",
       "parts": [
        {
         "t": "迟到三次",
         "ico": "⏰",
         "c": "s",
         "py": "chídào sān cì",
         "hv": "trì đáo tam thứ"
        },
        {
         "t": "就要罚",
         "ico": "⚠️",
         "c": "v",
         "py": "jiùyào fá",
         "hv": "tựu yếu phạt"
        },
        {
         "t": "一百元",
         "ico": "💴",
         "c": "o",
         "py": "yī bǎi yuán",
         "hv": "nhất bách nguyên"
        }
       ],
       "traceWord": "罚",
       "py": "Chídào sān cì jiùyào fá yī bǎi yuán",
       "traceKey": "fa",
       "traceInfo": [
        {
         "c": "罚",
         "py": "fá",
         "hv": "phạt"
        }
       ]
      },
      {
       "scene": "📱💔🆕",
       "full": "他弄坏了我的手机只好赔我一部新手机",
       "vi": "Anh ấy làm hỏng điện thoại của tôi nên đành đền cho tôi một chiếc mới",
       "parts": [
        {
         "t": "他弄坏了我的手机",
         "ico": "💔",
         "c": "s",
         "py": "tā nòng huài le wǒ de shǒujī",
         "hv": "tha lộng hoại liễu ngã đích thủ cơ"
        },
        {
         "t": "只好赔",
         "ico": "🙇",
         "c": "v",
         "py": "zhǐhǎo péi",
         "hv": "chỉ hảo bồi"
        },
        {
         "t": "我一部新手机",
         "ico": "📱",
         "c": "o",
         "py": "wǒ yī bù xīn shǒujī",
         "hv": "ngã nhất bộ tân thủ cơ"
        }
       ],
       "traceWord": "赔",
       "py": "Tā nòng huài le wǒ de shǒujī zhǐhǎo péi wǒ yī bù xīn shǒujī",
       "traceKey": "pei",
       "traceInfo": [
        {
         "c": "赔",
         "py": "péi",
         "hv": "bồi"
        }
       ]
      },
      {
       "scene": "🏢🤕🎁",
       "full": "公司依法给受伤的员工一笔赔偿并且补偿了他的休假时间",
       "vi": "Công ty theo luật bồi thường cho nhân viên bị thương một khoản tiền và bù thêm thời gian nghỉ cho anh ấy",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "依法给",
         "ico": "💴",
         "c": "v",
         "py": "yīfǎ gěi",
         "hv": "y pháp cấp"
        },
        {
         "t": "受伤的员工一笔赔偿并且补偿了他的休假时间",
         "ico": "🤕",
         "c": "o",
         "py": "shòushāng de yuángōng yī bǐ péicháng bìngqiě bǔcháng le tā de xiūjià shíjiān",
         "hv": "thụ thương đích viên công nhất bút bồi thường tịnh thả bổ thường liễu tha đích hưu giá thời gian"
        }
       ],
       "traceWord": "赔偿",
       "py": "Gōngsī yīfǎ gěi shòushāng de yuángōng yī bǐ péicháng bìngqiě bǔcháng le tā de xiūjià shíjiān",
       "traceKey": "peichang",
       "traceInfo": [
        {
         "c": "赔",
         "py": "péi",
         "hv": "bồi"
        },
        {
         "c": "偿",
         "py": "cháng",
         "hv": "thường"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "为什么要加强法制建设？",
       "qvi": "Tại sao phải tăng cường xây dựng pháp chế?",
       "scene": "⚖️🏙️",
       "ans": "为了让社会更公平",
       "opts": [
        {
         "txt": "为了让天气更热",
         "ico": "🌡️",
         "py": "Wèile ràng tiānqì gèng rè"
        },
        {
         "txt": "为了让社会更公平",
         "ico": "⚖️",
         "py": "Wèile ràng shèhuì gèng gōngpíng"
        },
        {
         "txt": "为了让饭更好吃",
         "ico": "🍜",
         "py": "Wèile ràng fàn gèng hǎochī"
        }
       ],
       "qpy": "Wèi shénme yào jiāqiáng fǎzhì jiànshè?"
      },
      {
       "q": "法官应该怎么做？",
       "qvi": "Thẩm phán nên làm thế nào?",
       "scene": "👨‍⚖️⚖️",
       "ans": "法官应该坚持正义",
       "opts": [
        {
         "txt": "法官应该每天加班",
         "ico": "🌙",
         "py": "Fǎguān yīnggāi měi tiān jiābān"
        },
        {
         "txt": "法官应该多交朋友",
         "ico": "🤝",
         "py": "Fǎguān yīnggāi duō jiāo péngyou"
        },
        {
         "txt": "法官应该坚持正义",
         "ico": "⚖️",
         "py": "Fǎguān yīnggāi jiānchí zhèngyì"
        }
       ],
       "qpy": "Fǎguān yīnggāi zěnme zuò?"
      },
      {
       "q": "他弄坏了你的车，该怎么办？",
       "qvi": "Anh ấy làm hỏng xe của bạn, phải làm sao?",
       "scene": "🚗💔",
       "ans": "他应该赔偿我",
       "opts": [
        {
         "txt": "他应该赔偿我",
         "ico": "💴",
         "py": "Tā yīnggāi péicháng wǒ"
        },
        {
         "txt": "他应该去睡觉",
         "ico": "😴",
         "py": "Tā yīnggāi qù shuìjiào"
        },
        {
         "txt": "我应该谢谢他",
         "ico": "🙏",
         "py": "Wǒ yīnggāi xièxie tā"
        }
       ],
       "qpy": "Tā nòng huài le nǐ de chē gāi zěnme bàn?"
      },
      {
       "q": "如果公司违规了，会怎么样？",
       "qvi": "Nếu công ty vi phạm quy định thì sẽ thế nào?",
       "scene": "🏢⚠️",
       "ans": "会受到处罚",
       "opts": [
        {
         "txt": "会变得更漂亮",
         "ico": "✨",
         "py": "Huì biàn de gèng piàoliang"
        },
        {
         "txt": "会得到很多假期",
         "ico": "🏖️",
         "py": "Huì dédào hěn duō jiàqī"
        },
        {
         "txt": "会受到处罚",
         "ico": "💸",
         "py": "Huì shòudào chǔfá"
        }
       ],
       "qpy": "Rúguǒ gōngsī wéiguī le huì zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích nội quy và xử lý vi phạm với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Lấy nội quy hoặc quy định của công ty (hoặc luật giao thông), chọn 3 điều quan trọng và đọc thành tiếng bằng cách nói <i>\"任何违法的行为都要受到处罚\"</i>, thay bằng nội dung thật.",
       "<b>Bước 2:</b> Đóng vai nhắc nhở một đồng nghiệp mới: dùng <i>\"员工违规操作会受到公司处分\"</i> và <i>\"迟到三次就要罚一百元\"</i>, đổi số lần và số tiền theo quy định thật hoặc tự nghĩ ra.",
       "<b>Bước 3:</b> Tự nói một tình huống đền bù, ví dụ nhân viên bị thương khi làm việc: <i>\"公司应该赔偿受伤的员工并且给他们一些补偿\"</i>; hỏi và trả lời <i>\"他弄坏了你的车，该怎么办？\"</i> bằng tiếng Trung."
      ]
     }
    }
   ]
  },
  "5.5": {
   "lessons": [
    {
     "id": "5.5A",
     "name": "Bài 5.5A: Chấp hành và tuân thủ quy định",
     "grammar": {
      "formulas": [
       "🏢 公司 + 📜 依照 + 📋 命令/规定 + ⚡ 执行",
       "👤 我们 + ✅ 应该 + 📜 依照 + ⚖️ 标准 + 办事",
       "❓ 你们 + 📜 依照 + 什么 + 办事？"
      ],
      "tip": "Giới từ 依照 (yīzhào, y chiếu) nghĩa là \"theo, căn cứ vào\": đứng trước danh từ chỉ cái được dùng làm chuẩn (命令, 指示, 规定, 合同, 法律…) và đứng trước động từ chính: 主语 + 依照 + chuẩn mực + động từ. Phó từ như 必须, 应该 đặt trước 依照.",
      "vn_tip": "Người Việt hay đặt chuẩn mực sau động từ (\"làm theo quy định\" thành 执行依照规定) hoặc thiếu động từ chính sau cụm 依照…. Đúng: 依照规定 đứng TRƯỚC động từ (依照规定办理), không đứng sau."
     },
     "chunks": [
      {
       "scene": "👥📜⚡",
       "full": "我们依照命令执行新规定",
       "vi": "Chúng tôi chấp hành quy định mới theo mệnh lệnh",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "依照命令",
         "ico": "📜",
         "c": "v",
         "py": "yīzhào mìnglìng",
         "hv": "y chiếu mệnh lệnh"
        },
        {
         "t": "执行新规定",
         "ico": "⚡",
         "c": "o",
         "py": "zhíxíng xīn guīdìng",
         "hv": "chấp hành tân quy định"
        }
       ],
       "traceWord": "依照",
       "py": "Wǒmen yīzhào mìnglìng zhíxíng xīn guīdìng",
       "traceKey": "yizhao",
       "traceInfo": [
        {
         "c": "依",
         "py": "yī",
         "hv": "y"
        },
        {
         "c": "照",
         "py": "zhào",
         "hv": "chiếu"
        }
       ]
      },
      {
       "scene": "👔📝🔧",
       "full": "经理依照指示推行并落实新办法",
       "vi": "Giám đốc theo chỉ thị mà triển khai và thực hiện cách làm mới",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "依照指示",
         "ico": "📝",
         "c": "v",
         "py": "yīzhào zhǐshì",
         "hv": "y chiếu chỉ thị"
        },
        {
         "t": "推行并落实新办法",
         "ico": "🔧",
         "c": "o",
         "py": "tuīxíng bìng luòshí xīn bànfǎ",
         "hv": "thôi hành tịnh lạc thực tân biện pháp"
        }
       ],
       "traceWord": "落实",
       "py": "Jīnglǐ yīzhào zhǐshì tuīxíng bìng luòshí xīn bànfǎ",
       "traceKey": "luoshi",
       "traceInfo": [
        {
         "c": "落",
         "py": "luò",
         "hv": "lạc"
        },
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        }
       ]
      },
      {
       "scene": "🏢📄🤝",
       "full": "公司依照合同约束双方的行为",
       "vi": "Công ty ràng buộc hành vi của hai bên theo hợp đồng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "依照合同",
         "ico": "📄",
         "c": "v",
         "py": "yīzhào hétóng",
         "hv": "y chiếu hợp đồng"
        },
        {
         "t": "约束双方的行为",
         "ico": "🤝",
         "c": "o",
         "py": "yuēshù shuāngfāng de xíngwéi",
         "hv": "ước thúc song phương đích hành vi"
        }
       ],
       "traceWord": "约束",
       "py": "Gōngsī yīzhào hétóng yuēshù shuāngfāng de xíngwéi",
       "traceKey": "yueshu",
       "traceInfo": [
        {
         "c": "约",
         "py": "yuē",
         "hv": "ước"
        },
        {
         "c": "束",
         "py": "shù",
         "hv": "thúc"
        }
       ]
      },
      {
       "scene": "🧑‍💼📕✅",
       "full": "员工必须依照公司制度遵守规定",
       "vi": "Nhân viên phải tuân thủ quy định theo chế độ của công ty",
       "parts": [
        {
         "t": "员工",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "yuángōng",
         "hv": "viên công"
        },
        {
         "t": "必须依照公司制度",
         "ico": "📕",
         "c": "v",
         "py": "bìxū yīzhào gōngsī zhìdù",
         "hv": "tất tu y chiếu công ti chế độ"
        },
        {
         "t": "遵守规定",
         "ico": "✅",
         "c": "o",
         "py": "zūnshǒu guīdìng",
         "hv": "tuân thủ quy định"
        }
       ],
       "traceWord": "遵守",
       "py": "Yuángōng bìxū yīzhào gōngsī zhìdù zūnshǒu guīdìng",
       "traceKey": "zunshou",
       "traceInfo": [
        {
         "c": "遵",
         "py": "zūn",
         "hv": "tuân"
        },
        {
         "c": "守",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🏢🚫🙇",
       "full": "公司不许员工拒绝服从领导的命令",
       "vi": "Công ty không cho phép nhân viên từ chối phục tùng mệnh lệnh của lãnh đạo",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "不许",
         "ico": "🚫",
         "c": "v",
         "py": "bùxǔ",
         "hv": "bất hứa"
        },
        {
         "t": "员工拒绝服从领导的命令",
         "ico": "🙇",
         "c": "o",
         "py": "yuángōng jùjué fúcóng lǐngdǎo de mìnglìng",
         "hv": "viên công cự tuyệt phục tòng lĩnh đạo đích mệnh lệnh"
        }
       ],
       "traceWord": "不许",
       "py": "Gōngsī bùxǔ yuángōng jùjué fúcóng lǐngdǎo de mìnglìng",
       "traceKey": "buxu",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "许",
         "py": "xǔ",
         "hv": "hứa"
        }
       ]
      },
      {
       "scene": "👥⚖️💼",
       "full": "我们应该依照公认的道德标准办事",
       "vi": "Chúng ta nên làm việc theo chuẩn mực đạo đức được mọi người công nhận",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "应该",
         "ico": "✅",
         "c": "v",
         "py": "yīnggāi",
         "hv": "ưng cai"
        },
        {
         "t": "依照公认的道德标准办事",
         "ico": "⚖️",
         "c": "o",
         "py": "yīzhào gōngrèn de dàodé biāozhǔn bànshì",
         "hv": "y chiếu công nhận đích đạo đức tiêu chuẩn biện sự"
        }
       ],
       "traceWord": "道德",
       "py": "Wǒmen yīnggāi yīzhào gōngrèn de dàodé biāozhǔn bànshì",
       "traceKey": "daode",
       "traceInfo": [
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        },
        {
         "c": "德",
         "py": "dé",
         "hv": "đức"
        }
       ]
      },
      {
       "scene": "🎓📊🔬",
       "full": "专家依照数据证实了这个方法有效",
       "vi": "Chuyên gia dựa vào số liệu đã xác nhận phương pháp này có hiệu quả",
       "parts": [
        {
         "t": "专家",
         "ico": "🎓",
         "c": "s",
         "py": "zhuānjiā",
         "hv": "chuyên gia"
        },
        {
         "t": "依照数据",
         "ico": "📊",
         "c": "v",
         "py": "yīzhào shùjù",
         "hv": "y chiếu số cứ"
        },
        {
         "t": "证实了这个方法有效",
         "ico": "🔬",
         "c": "o",
         "py": "zhèngshí le zhè gè fāngfǎ yǒuxiào",
         "hv": "chứng thực liễu giá cá phương pháp hữu hiệu"
        }
       ],
       "traceWord": "证实",
       "py": "Zhuānjiā yīzhào shùjù zhèngshí le zhè gè fāngfǎ yǒuxiào",
       "traceKey": "zhengshi",
       "traceInfo": [
        {
         "c": "证",
         "py": "zhèng",
         "hv": "chứng"
        },
        {
         "c": "实",
         "py": "shí",
         "hv": "thực"
        }
       ]
      },
      {
       "scene": "🏢⚖️💿",
       "full": "公司必须依照法律和道德的要求使用正版产品",
       "vi": "Công ty phải sử dụng sản phẩm bản quyền theo yêu cầu của pháp luật và đạo đức",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "必须",
         "ico": "❗",
         "c": "v",
         "py": "bìxū",
         "hv": "tất tu"
        },
        {
         "t": "依照法律和道德的要求使用正版产品",
         "ico": "💿",
         "c": "o",
         "py": "yīzhào fǎlǜ hé dàodé de yāoqiú shǐyòng zhèngbǎn chǎnpǐn",
         "hv": "y chiếu pháp luật hòa đạo đức đích yêu cầu sử dụng chính bản sản phẩm"
        }
       ],
       "traceWord": "正版",
       "py": "Gōngsī bìxū yīzhào fǎlǜ hé dàodé de yāoqiú shǐyòng zhèngbǎn chǎnpǐn",
       "traceKey": "zhengban",
       "traceInfo": [
        {
         "c": "正",
         "py": "zhèng",
         "hv": "chính"
        },
        {
         "c": "版",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "看病应该去哪里？",
       "qvi": "Khám bệnh thì nên đi đâu?",
       "scene": "🏥🩺",
       "ans": "应该去正规医院",
       "opts": [
        {
         "txt": "应该去公园",
         "ico": "🌳",
         "py": "Yīnggāi qù gōngyuán"
        },
        {
         "txt": "应该去正规医院",
         "ico": "🏥",
         "py": "Yīnggāi qù zhèngguī yīyuàn"
        },
        {
         "txt": "应该去机场",
         "ico": "✈️",
         "py": "Yīnggāi qù jīchǎng"
        }
       ],
       "qpy": "Kànbìng yīnggāi qù nǎlǐ?"
      },
      {
       "q": "什么会制约公司的发展？",
       "qvi": "Điều gì sẽ kìm hãm sự phát triển của công ty?",
       "scene": "🏢📉",
       "ans": "缺少人才会制约公司的发展",
       "opts": [
        {
         "txt": "我们明天去海边玩儿",
         "ico": "🏖️",
         "py": "Wǒmen míngtiān qù hǎi biān wánr"
        },
        {
         "txt": "今天天气很好所以我们去公园",
         "ico": "☀️",
         "py": "Jīntiān tiānqì hěn hǎo suǒyǐ wǒmen qù gōngyuán"
        },
        {
         "txt": "缺少人才会制约公司的发展",
         "ico": "📉",
         "py": "Quēshǎo réncái huì zhìyuē gōngsī de fāzhǎn"
        }
       ],
       "qpy": "Shénme huì zhìyuē gōngsī de fāzhǎn?"
      },
      {
       "q": "你为什么要执行这个命令？",
       "qvi": "Vì sao bạn phải chấp hành mệnh lệnh này?",
       "scene": "🧑‍💼📜",
       "ans": "因为我要依照公司的规定办事",
       "opts": [
        {
         "txt": "因为我想回家吃饭",
         "ico": "🍚",
         "py": "Yīnwèi wǒ xiǎng huí jiā chīfàn"
        },
        {
         "txt": "因为这本书很便宜",
         "ico": "📖",
         "py": "Yīnwèi zhè běn shū hěn piányi"
        },
        {
         "txt": "因为我要依照公司的规定办事",
         "ico": "📜",
         "py": "Yīnwèi wǒ yào yīzhào gōngsī de guīdìng bànshì"
        }
       ],
       "qpy": "Nǐ wèi shénme yào zhíxíng zhè gè mìnglìng?"
      },
      {
       "q": "如果有人拒绝遵守规定，你会怎么办？",
       "qvi": "Nếu có người từ chối tuân thủ quy định, bạn sẽ làm thế nào?",
       "scene": "🚫📕🧑‍💼",
       "ans": "我会依照制度处理",
       "opts": [
        {
         "txt": "我会去商店买水果",
         "ico": "🍎",
         "py": "Wǒ huì qù shāngdiàn mǎi shuǐguǒ"
        },
        {
         "txt": "我会依照制度处理",
         "ico": "📕",
         "py": "Wǒ huì yīzhào zhìdù chǔlǐ"
        },
        {
         "txt": "我会请他喝咖啡",
         "ico": "☕",
         "py": "Wǒ huì qǐng tā hē kāfēi"
        }
       ],
       "qpy": "Rúguǒ yǒu rén jùjué zūnshǒu guīdìng nǐ huì zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắc đồng nghiệp tuân thủ quy định công ty",
      "steps": [
       "<b>Bước 1:</b> Chọn 3 quy định thật ở nơi làm việc của bạn (giờ giấc, bảo mật, bản quyền phần mềm…) và nói thành tiếng từng quy định bằng mẫu <i>\"公司依照合同约束双方的行为\"</i>, thay phần sau 依照 bằng chuẩn mực của bạn.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp (hoặc tự viết nháp): nhắc nhẹ nhàng rằng cả nhóm <i>\"必须依照公司制度遵守规定\"</i> và nêu một ví dụ cụ thể.",
       "<b>Bước 3:</b> Tập đối đáp với tình huống có người từ chối: dùng <i>\"我们应该依照公认的道德标准办事\"</i> để giải thích vì sao nên làm đúng, rồi đề xuất cách xử lý."
      ]
     }
    },
    {
     "id": "5.5B",
     "name": "Bài 5.5B: Phân công và xử lý sự vụ",
     "grammar": {
      "formulas": [
       "📌 事情 + 🧑 由 + 谁 + ⚡ 动词",
       "🎪 这次会议 + 由 + 公司 + 主办",
       "❓ 这个问题 + 由 + 谁 + 解决？"
      ],
      "tip": "Giới từ 由 (yóu, do) dẫn ra người hoặc đơn vị thực hiện hành động: 事情 + 由 + người/đơn vị + động từ (会议由公司主办). Nghĩa là \"việc đó do ai làm, ai chịu trách nhiệm\". Đây là cách nói trang trọng khi phân công, thường gặp trong thông báo và văn bản công việc.",
      "vn_tip": "Người Việt hay bỏ 由 hoặc đặt người thực hiện sau động từ (\"tổ chức bởi công ty\" thành 主办由公司). Đúng: 由 + chủ thể đứng TRƯỚC động từ (由公司主办). Đừng nhầm 由 với 被: 被 nhấn mạnh bị tác động, 由 nhấn mạnh ai chịu trách nhiệm làm."
     },
     "chunks": [
      {
       "scene": "🏢🎤📅",
       "full": "这次会议由我们公司主办",
       "vi": "Cuộc họp lần này do công ty chúng tôi tổ chức",
       "parts": [
        {
         "t": "这次会议",
         "ico": "🎤",
         "c": "s",
         "py": "zhè cì huìyì",
         "hv": "giá thứ hội nghị"
        },
        {
         "t": "由我们公司",
         "ico": "🏢",
         "c": "o",
         "py": "yóu wǒmen gōngsī",
         "hv": "do ngã môn công ti"
        },
        {
         "t": "主办",
         "ico": "📅",
         "c": "v",
         "py": "zhǔbàn",
         "hv": "chủ biện"
        }
       ],
       "traceWord": "主办",
       "py": "Zhè cì huìyì yóu wǒmen gōngsī zhǔbàn",
       "traceKey": "zhuban",
       "traceInfo": [
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        },
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        }
       ]
      },
      {
       "scene": "🎪👔🏢",
       "full": "这个活动由王经理的公司承办",
       "vi": "Hoạt động này do công ty của giám đốc Vương đảm nhận tổ chức",
       "parts": [
        {
         "t": "这个活动",
         "ico": "🎪",
         "c": "s",
         "py": "zhè gè huódòng",
         "hv": "giá cá hoạt động"
        },
        {
         "t": "由王经理的公司",
         "ico": "👔",
         "c": "o",
         "py": "yóu wáng jīnglǐ de gōngsī",
         "hv": "do vương kinh lý đích công ti"
        },
        {
         "t": "承办",
         "ico": "🤝",
         "c": "v",
         "py": "chéngbàn",
         "hv": "thừa biện"
        }
       ],
       "traceWord": "承办",
       "py": "Zhè gè huódòng yóu wáng jīnglǐ de gōngsī chéngbàn",
       "traceKey": "chengban",
       "traceInfo": [
        {
         "c": "承",
         "py": "chéng",
         "hv": "thừa"
        },
        {
         "c": "办",
         "py": "bàn",
         "hv": "biện"
        }
       ]
      },
      {
       "scene": "📁👔🚫",
       "full": "整个项目由经理主导而不是由别人支配",
       "vi": "Toàn bộ dự án do giám đốc chủ đạo chứ không phải do người khác chi phối",
       "parts": [
        {
         "t": "整个项目",
         "ico": "📁",
         "c": "s",
         "py": "zhěnggè xiàngmù",
         "hv": "chỉnh cá hạng mục"
        },
        {
         "t": "由经理主导",
         "ico": "👔",
         "c": "v",
         "py": "yóu jīnglǐ zhǔdǎo",
         "hv": "do kinh lý chủ đạo"
        },
        {
         "t": "而不是由别人支配",
         "ico": "🚫",
         "c": "o",
         "py": "ér bú shì yóu biérén zhīpèi",
         "hv": "nhi bất thị do biệt nhân chi phối"
        }
       ],
       "traceWord": "主导",
       "py": "Zhěnggè xiàngmù yóu jīnglǐ zhǔdǎo ér bú shì yóu biérén zhīpèi",
       "traceKey": "zhudao",
       "traceInfo": [
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        },
        {
         "c": "导",
         "py": "dǎo",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "😟👥🙅",
       "full": "这次的错误由大家一起承担不应该指责新员工",
       "vi": "Lỗi lần này mọi người cùng gánh, không nên chỉ trích nhân viên mới",
       "parts": [
        {
         "t": "这次的错误",
         "ico": "😟",
         "c": "s",
         "py": "zhè cì de cuòwù",
         "hv": "giá thứ đích thác ngộ"
        },
        {
         "t": "由大家一起承担",
         "ico": "👥",
         "c": "v",
         "py": "yóu dàjiā yīqǐ chéngdān",
         "hv": "do đại gia nhất khởi thừa đảm"
        },
        {
         "t": "不应该指责新员工",
         "ico": "🙅",
         "c": "o",
         "py": "bù yīnggāi zhǐzé xīn yuángōng",
         "hv": "bất ưng cai chỉ trách tân viên công"
        }
       ],
       "traceWord": "指责",
       "py": "Zhè cì de cuòwù yóu dàjiā yīqǐ chéngdān bù yīnggāi zhǐzé xīn yuángōng",
       "traceKey": "zhize",
       "traceInfo": [
        {
         "c": "指",
         "py": "zhǐ",
         "hv": "chỉ"
        },
        {
         "c": "责",
         "py": "zé",
         "hv": "trách"
        }
       ]
      },
      {
       "scene": "🚨👔🧑‍🤝‍🧑",
       "full": "遇到紧急情况由经理优先调动各部门的人员",
       "vi": "Gặp tình huống khẩn cấp thì giám đốc ưu tiên điều động nhân sự các phòng ban",
       "parts": [
        {
         "t": "遇到紧急情况",
         "ico": "🚨",
         "c": "s",
         "py": "yùdào jǐnjí qíngkuàng",
         "hv": "ngộ đáo khẩn cấp tình huống"
        },
        {
         "t": "由经理优先调动",
         "ico": "👔",
         "c": "v",
         "py": "yóu jīnglǐ yōuxiān diàodòng",
         "hv": "do kinh lý ưu tiên điệu động"
        },
        {
         "t": "各部门的人员",
         "ico": "🧑‍🤝‍🧑",
         "c": "o",
         "py": "gè bùmén de rényuán",
         "hv": "các bộ môn đích nhân viên"
        }
       ],
       "traceWord": "调动",
       "py": "Yùdào jǐnjí qíngkuàng yóu jīnglǐ yōuxiān diàodòng gè bùmén de rényuán",
       "traceKey": "diaodong",
       "traceInfo": [
        {
         "c": "调",
         "py": "diào",
         "hv": "điệu"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "📋📣👥",
       "full": "这项工作由部长动员全体员工一起完成",
       "vi": "Công việc này do trưởng bộ phận huy động toàn thể nhân viên cùng hoàn thành",
       "parts": [
        {
         "t": "这项工作",
         "ico": "📋",
         "c": "s",
         "py": "zhè xiàng gōngzuò",
         "hv": "giá hạng công tác"
        },
        {
         "t": "由部长动员全体员工",
         "ico": "📣",
         "c": "v",
         "py": "yóu bùzhǎng dòngyuán quántǐ yuángōng",
         "hv": "do bộ trưởng động viên toàn thể viên công"
        },
        {
         "t": "一起完成",
         "ico": "✅",
         "c": "o",
         "py": "yīqǐ wánchéng",
         "hv": "nhất khởi hoàn thành"
        }
       ],
       "traceWord": "动员",
       "py": "Zhè xiàng gōngzuò yóu bùzhǎng dòngyuán quántǐ yuángōng yīqǐ wánchéng",
       "traceKey": "dongyuan",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "员",
         "py": "yuán",
         "hv": "viên"
        }
       ]
      },
      {
       "scene": "🏙️🗑️🏛️",
       "full": "城市的垃圾问题由政府负责治理并严格控制",
       "vi": "Vấn đề rác thải của thành phố do chính quyền chịu trách nhiệm xử lý và kiểm soát chặt chẽ",
       "parts": [
        {
         "t": "城市的垃圾问题",
         "ico": "🗑️",
         "c": "s",
         "py": "chéngshì de lājī wèntí",
         "hv": "thành thị đích lạp ngập vấn đề"
        },
        {
         "t": "由政府负责治理",
         "ico": "🏛️",
         "c": "v",
         "py": "yóu zhèngfǔ fùzé zhìlǐ",
         "hv": "do chính phủ phụ trách trị lý"
        },
        {
         "t": "并严格控制",
         "ico": "🔒",
         "c": "o",
         "py": "bìng yángé kòngzhì",
         "hv": "tịnh nghiêm cách khống chế"
        }
       ],
       "traceWord": "治理",
       "py": "Chéngshì de lājī wèntí yóu zhèngfǔ fùzé zhìlǐ bìng yángé kòngzhì",
       "traceKey": "zhili",
       "traceInfo": [
        {
         "c": "治",
         "py": "zhì",
         "hv": "trị"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "📄🛑🤝",
       "full": "因为这份合同由对方终止所以我们的工作被迫中断",
       "vi": "Vì hợp đồng này do phía đối tác chấm dứt nên công việc của chúng tôi buộc phải gián đoạn",
       "parts": [
        {
         "t": "因为这份合同",
         "ico": "📄",
         "c": "s",
         "py": "yīnwèi zhè fèn hétóng",
         "hv": "nhân vị giá phần hợp đồng"
        },
        {
         "t": "由对方终止",
         "ico": "🛑",
         "c": "v",
         "py": "yóu duìfāng zhōngzhǐ",
         "hv": "do đối phương chung chỉ"
        },
        {
         "t": "所以我们的工作被迫中断",
         "ico": "⏸️",
         "c": "o",
         "py": "suǒyǐ wǒmen de gōngzuò bèipò zhōngduàn",
         "hv": "sở dĩ ngã môn đích công tác bị bách trung đoạn"
        }
       ],
       "traceWord": "终止",
       "py": "Yīnwèi zhè fèn hétóng yóu duìfāng zhōngzhǐ suǒyǐ wǒmen de gōngzuò bèipò zhōngduàn",
       "traceKey": "zhongzhi",
       "traceInfo": [
        {
         "c": "终",
         "py": "zhōng",
         "hv": "chung"
        },
        {
         "c": "止",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这份合同由谁来解除？",
       "qvi": "Hợp đồng này do ai hủy bỏ?",
       "scene": "📄✂️👥",
       "ans": "由双方公司一起解除",
       "opts": [
        {
         "txt": "由双方公司一起解除",
         "ico": "🤝",
         "py": "Yóu shuāngfāng gōngsī yīqǐ jiěchú"
        },
        {
         "txt": "由天气决定去不去公园",
         "ico": "⛅",
         "py": "Yóu tiānqì juédìng qù bú qù gōngyuán"
        },
        {
         "txt": "由我自己去商店买",
         "ico": "🛒",
         "py": "Yóu wǒ zìjǐ qù shāngdiàn mǎi"
        }
       ],
       "qpy": "Zhè fèn hétóng yóu shéi lái jiěchú?"
      },
      {
       "q": "同事之间的误会应该由谁来消除？",
       "qvi": "Hiểu lầm giữa đồng nghiệp nên do ai gỡ bỏ?",
       "scene": "👥💬😊",
       "ans": "应该由先说错话的人主动消除",
       "opts": [
        {
         "txt": "应该先去银行换钱",
         "ico": "🏦",
         "py": "Yīnggāi xiān qù yínháng huàn qián"
        },
        {
         "txt": "应该由先说错话的人主动消除",
         "ico": "🙇",
         "py": "Yīnggāi yóu xiān shuō cuò huà de rén zhǔdòng xiāochú"
        },
        {
         "txt": "应该明天去看电影",
         "ico": "🎬",
         "py": "Yīnggāi míngtiān qù kàn diànyǐng"
        }
       ],
       "qpy": "Tóngshì zhījiān de wùhuì yīnggāi yóu shéi lái xiāochú?"
      },
      {
       "q": "机器出了问题，危险应该由谁来排除？",
       "qvi": "Máy móc gặp sự cố, nguy hiểm nên do ai loại trừ?",
       "scene": "⚙️⚠️🔧",
       "ans": "应该由专业的技术人员排除",
       "opts": [
        {
         "txt": "应该由专业的技术人员排除",
         "ico": "🔧",
         "py": "Yīnggāi yóu zhuānyè de jìshù rényuán páichú"
        },
        {
         "txt": "应该坐地铁去机场",
         "ico": "🚇",
         "py": "Yīnggāi zuò dìtiě qù jīchǎng"
        },
        {
         "txt": "应该多喝一点儿水",
         "ico": "💧",
         "py": "Yīnggāi duō hē yīdiǎnr shuǐ"
        }
       ],
       "qpy": "Jīqì chū le wèntí wēixiǎn yīnggāi yóu shéi lái páichú?"
      },
      {
       "q": "阻碍项目发展的问题应该由谁来解决？",
       "qvi": "Vấn đề cản trở sự phát triển của dự án nên do ai giải quyết?",
       "scene": "📁🚧👔",
       "ans": "应该由经理带领大家一起解决",
       "opts": [
        {
         "txt": "我昨天在书店买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān zài shūdiàn mǎi le yī běn shū"
        },
        {
         "txt": "应该由经理带领大家一起解决",
         "ico": "👔",
         "py": "Yīnggāi yóu jīnglǐ dàilǐng dàjiā yīqǐ jiějué"
        },
        {
         "txt": "这个周末天气很热",
         "ico": "🌞",
         "py": "Zhè gè zhōumò tiānqì hěn rè"
        }
       ],
       "qpy": "Zǔ'ài xiàngmù fāzhǎn de wèntí yīnggāi yóu shéi lái jiějué?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phân công người phụ trách trong cuộc họp nhóm",
      "steps": [
       "<b>Bước 1:</b> Chọn một sự kiện hoặc dự án sắp tới (họp, tiệc, báo cáo). Nói thành tiếng ai chủ trì, ai đảm nhận, ví dụ <i>\"这次会议由我们公司主办\"</i>, rồi đổi chủ thể thật của bạn.",
       "<b>Bước 2:</b> Viết tin nhắn nhóm phân công 3 việc, mỗi việc một câu dạng <i>\"这项工作由部长动员全体员工一起完成\"</i>: việc nào do ai làm.",
       "<b>Bước 3:</b> Tập xử lý một sự cố giả định: nói ai phụ trách khắc phục và nhắc không nên đổ lỗi, dùng <i>\"这次的错误由大家一起承担\"</i>."
      ]
     }
    },
    {
     "id": "5.5C",
     "name": "Bài 5.5C: Thông báo và xuất bản",
     "grammar": {
      "formulas": [
       "🧑 主语 + 📦 将 + 📄 宾语 + ⚡ 动词 + 补语",
       "🏢 公司 + 将 + 公告 + 发布到网站上",
       "❓ 你 + 将 + 文件 + 发给谁了？"
      ],
      "tip": "Giới từ 将 (jiāng, tương) tương đương 把 nhưng trang trọng hơn, thường dùng trong văn viết và thông báo: chủ ngữ + 将 + tân ngữ + động từ + thành phần phía sau (到网站上, 给经理, 了). Động từ phải có thành phần đi kèm, không đứng trơ trọi sau tân ngữ.",
      "vn_tip": "Người Việt hay nhầm 将 (giới từ, đưa tân ngữ ra trước động từ) với 将 trong 将来/将要 chỉ tương lai. Cũng hay để động từ đứng một mình (\"将公告发布\"). Đúng: 将公告发布到网站上 hoặc 将公告发布了, phải có bổ ngữ hoặc 了."
     },
     "chunks": [
      {
       "scene": "🏢📢🌐",
       "full": "公司将新的公告发布到网站上",
       "vi": "Công ty đăng thông báo mới lên trang web",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "将新的公告",
         "ico": "📢",
         "c": "o",
         "py": "jiāng xīn de gōnggào",
         "hv": "tương tân đích công cáo"
        },
        {
         "t": "发布到网站上",
         "ico": "🌐",
         "c": "v",
         "py": "fābù dào wǎngzhàn shàng",
         "hv": "phát bố đáo võng trạm thượng"
        }
       ],
       "traceWord": "公告",
       "py": "Gōngsī jiāng xīn de gōnggào fābù dào wǎngzhàn shàng",
       "traceKey": "gonggao",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "告",
         "py": "gào",
         "hv": "cáo"
        }
       ]
      },
      {
       "scene": "👔🪧🖨️",
       "full": "经理要求将这份启事印刷五百份",
       "vi": "Giám đốc yêu cầu in năm trăm bản thông báo này",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "要求将这份启事",
         "ico": "🪧",
         "c": "o",
         "py": "yāoqiú jiāng zhè fèn qǐshì",
         "hv": "yêu cầu tương giá phần khải sự"
        },
        {
         "t": "印刷五百份",
         "ico": "🖨️",
         "c": "v",
         "py": "yìnshuā wǔ bǎi fèn",
         "hv": "ấn loát ngũ bách phần"
        }
       ],
       "traceWord": "启事",
       "py": "Jīnglǐ yāoqiú jiāng zhè fèn qǐshì yìnshuā wǔ bǎi fèn",
       "traceKey": "qishi",
       "traceInfo": [
        {
         "c": "启",
         "py": "qǐ",
         "hv": "khải"
        },
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        }
       ]
      },
      {
       "scene": "🏭📚🚚",
       "full": "这家公司将去年出版的新书发行到全国",
       "vi": "Công ty này phát hành cuốn sách mới xuất bản năm ngoái ra toàn quốc",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏭",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "将去年出版的新书",
         "ico": "📚",
         "c": "o",
         "py": "jiāng qùnián chūbǎn de xīn shū",
         "hv": "tương khứ niên xuất bản đích tân thư"
        },
        {
         "t": "发行到全国",
         "ico": "🚚",
         "c": "v",
         "py": "fāxíng dào quánguó",
         "hv": "phát hành đáo toàn quốc"
        }
       ],
       "traceWord": "出版",
       "py": "Zhè jiā gōngsī jiāng qùnián chūbǎn de xīn shū fāxíng dào quánguó",
       "traceKey": "chuban",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "版",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "✍️📖💻",
       "full": "编辑将这本书的电子版发给了我们",
       "vi": "Biên tập viên đã gửi bản điện tử của cuốn sách này cho chúng tôi",
       "parts": [
        {
         "t": "编辑",
         "ico": "✍️",
         "c": "s",
         "py": "biānjí",
         "hv": "biên tập"
        },
        {
         "t": "将这本书的电子版",
         "ico": "💻",
         "c": "o",
         "py": "jiāng zhè běn shū de diànzǐbǎn",
         "hv": "tương giá bản thư đích điện tử bản"
        },
        {
         "t": "发给了我们",
         "ico": "📤",
         "c": "v",
         "py": "fā gěi le wǒmen",
         "hv": "phát cấp liễu ngã môn"
        }
       ],
       "traceWord": "电子版",
       "py": "Biānjí jiāng zhè běn shū de diànzǐbǎn fā gěi le wǒmen",
       "traceKey": "dianziban",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "子",
         "py": "zǐ",
         "hv": "tử"
        },
        {
         "c": "版",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "👥📖✏️",
       "full": "我们将这一版再认真编辑一下",
       "vi": "Chúng tôi sẽ biên tập lại ấn bản này thật cẩn thận một lần nữa",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "将这一版",
         "ico": "📖",
         "c": "o",
         "py": "jiāng zhè yī bǎn",
         "hv": "tương giá nhất bản"
        },
        {
         "t": "再认真编辑一下",
         "ico": "✏️",
         "c": "v",
         "py": "zài rènzhēn biānjí yī xià",
         "hv": "tái nhận chân biên tập nhất hạ"
        }
       ],
       "traceWord": "版",
       "py": "Wǒmen jiāng zhè yī bǎn zài rènzhēn biānjí yī xià",
       "traceKey": "ban",
       "traceInfo": [
        {
         "c": "版",
         "py": "bǎn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "👩‍💼📠📝",
       "full": "秘书将传真和便条交给了经理",
       "vi": "Thư ký đã đưa bản fax và tờ giấy nhắn cho giám đốc",
       "parts": [
        {
         "t": "秘书",
         "ico": "👩‍💼",
         "c": "s",
         "py": "mìshū",
         "hv": "bí thư"
        },
        {
         "t": "将传真和便条",
         "ico": "📠",
         "c": "o",
         "py": "jiāng chuánzhēn hé biàntiáo",
         "hv": "tương truyền chân hòa tiện điều"
        },
        {
         "t": "交给了经理",
         "ico": "👔",
         "c": "v",
         "py": "jiāo gěi le jīnglǐ",
         "hv": "giao cấp liễu kinh lý"
        }
       ],
       "traceWord": "便条",
       "py": "Mìshū jiāng chuánzhēn hé biàntiáo jiāo gěi le jīnglǐ",
       "traceKey": "biantiao",
       "traceInfo": [
        {
         "c": "便",
         "py": "biàn",
         "hv": "tiện"
        },
        {
         "c": "条",
         "py": "tiáo",
         "hv": "điều"
        }
       ]
      },
      {
       "scene": "👔📎📣",
       "full": "经理将附件里的重要内容传达给各位同事",
       "vi": "Giám đốc truyền đạt nội dung quan trọng trong tệp đính kèm cho các đồng nghiệp",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "将附件里的重要内容",
         "ico": "📎",
         "c": "o",
         "py": "jiāng fùjiàn lǐ de zhòngyào nèiróng",
         "hv": "tương phụ kiện lý đích trọng yếu nội dung"
        },
        {
         "t": "传达给各位同事",
         "ico": "📣",
         "c": "v",
         "py": "chuándá gěi gèwèi tóngshì",
         "hv": "truyền đạt cấp các vị đồng sự"
        }
       ],
       "traceWord": "附件",
       "py": "Jīnglǐ jiāng fùjiàn lǐ de zhòngyào nèiróng chuándá gěi gèwèi tóngshì",
       "traceKey": "fujian",
       "traceInfo": [
        {
         "c": "附",
         "py": "fù",
         "hv": "phụ"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "👴ℹ️🏢",
       "full": "老板将最重要的信息传递给各个部门并交代清楚",
       "vi": "Ông chủ chuyển thông tin quan trọng nhất đến từng phòng ban và dặn dò rõ ràng",
       "parts": [
        {
         "t": "老板",
         "ico": "👴",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "将最重要的信息",
         "ico": "ℹ️",
         "c": "o",
         "py": "jiāng zuì zhòngyào de xìnxī",
         "hv": "tương tối trọng yếu đích tín tức"
        },
        {
         "t": "传递给各个部门并交代清楚",
         "ico": "🏢",
         "c": "v",
         "py": "chuándì gěi gègè bùmén bìng jiāodài qīngchu",
         "hv": "truyền đệ cấp các cá bộ môn tịnh giao đại thanh sở"
        }
       ],
       "traceWord": "传递",
       "py": "Lǎobǎn jiāng zuì zhòngyào de xìnxī chuándì gěi gègè bùmén bìng jiāodài qīngchu",
       "traceKey": "chuandi",
       "traceInfo": [
        {
         "c": "传",
         "py": "chuán",
         "hv": "truyền"
        },
        {
         "c": "递",
         "py": "dì",
         "hv": "đệ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "公司什么时候将公告发布出去？",
       "qvi": "Khi nào công ty đăng thông báo ra ngoài?",
       "scene": "🏢📢⏰",
       "ans": "公司明天上午将公告发布出去",
       "opts": [
        {
         "txt": "我们昨天晚上去看了电影",
         "ico": "🎬",
         "py": "Wǒmen zuótiān wǎn shàngqù kàn le diànyǐng"
        },
        {
         "txt": "公司明天上午将公告发布出去",
         "ico": "📢",
         "py": "Gōngsī míngtiān shàngwǔ jiāng gōnggào fābù chūqù"
        },
        {
         "txt": "他今天早上骑自行车上班",
         "ico": "🚲",
         "py": "Tā jīntiān zǎoshang qí zìxíngchē shàngbān"
        }
       ],
       "qpy": "Gōngsī shénme shíhou jiāng gōnggào fābù chūqù?"
      },
      {
       "q": "你将电子版的文件发给谁了？",
       "qvi": "Bạn đã gửi tệp bản điện tử cho ai?",
       "scene": "💻📄📤",
       "ans": "我将电子版的文件发给了经理",
       "opts": [
        {
         "txt": "我在书店买了一本书",
         "ico": "📖",
         "py": "Wǒ zài shūdiàn mǎi le yī běn shū"
        },
        {
         "txt": "我下个月去北京出差",
         "ico": "✈️",
         "py": "Wǒ xià ge yuè qù Běijīng chūchāi"
        },
        {
         "txt": "我将电子版的文件发给了经理",
         "ico": "👔",
         "py": "Wǒ jiāng diànzǐbǎn de wénjiàn fā gěi le jīnglǐ"
        }
       ],
       "qpy": "Nǐ jiāng diànzǐbǎn de wénjiàn fā gěi shéi le?"
      },
      {
       "q": "你将这份合同传真给顾客了吗？",
       "qvi": "Bạn đã fax hợp đồng này cho khách chưa?",
       "scene": "📠📄🧑‍💼",
       "ans": "对，我已经将合同传真给顾客了",
       "opts": [
        {
         "txt": "对，我已经将合同传真给顾客了",
         "ico": "📠",
         "py": "Duì wǒ yǐjīng jiāng hétóng chuánzhēn gěi gùkè le"
        },
        {
         "txt": "不用了，我吃饱了",
         "ico": "🍚",
         "py": "Bùyòng le wǒ chī bǎo le"
        },
        {
         "txt": "谢谢，我没有时间",
         "ico": "⏳",
         "py": "Xièxie wǒ méiyǒu shíjiān"
        }
       ],
       "qpy": "Nǐ jiāng zhè fèn hétóng chuánzhēn gěi gùkè le ma?"
      },
      {
       "q": "编辑为什么要将这本书再认真看一遍？",
       "qvi": "Vì sao biên tập viên phải đọc lại cuốn sách này thật kỹ một lượt?",
       "scene": "✍️📖🔍",
       "ans": "因为这本书下个月就要出版了",
       "opts": [
        {
         "txt": "因为他想去公园玩儿",
         "ico": "🌳",
         "py": "Yīnwèi tā xiǎng qù gōngyuán wánr"
        },
        {
         "txt": "因为今天的天气很热",
         "ico": "🌞",
         "py": "Yīnwèi jīntiān de tiānqì hěn rè"
        },
        {
         "txt": "因为这本书下个月就要出版了",
         "ico": "📚",
         "py": "Yīnwèi zhè běn shū xià ge yuè jiùyào chūbǎn le"
        }
       ],
       "qpy": "Biānjí wèi shénme yào jiāng zhè běn shū zài rènzhēn kàn yī biàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Soạn và gửi thông báo nội bộ",
      "steps": [
       "<b>Bước 1:</b> Chọn một thông tin cần báo cho cả nhóm (đổi lịch họp, tài liệu mới). Viết thông báo ngắn 2 câu, trong đó có <i>\"公司将新的公告发布到网站上\"</i> hoặc câu tương tự với nội dung thật của bạn.",
       "<b>Bước 2:</b> Nhắn cho đồng nghiệp: báo rằng bạn đã gửi tệp đính kèm, dùng <i>\"编辑将这本书的电子版发给了我们\"</i> làm mẫu để nói ai đã gửi cái gì cho ai.",
       "<b>Bước 3:</b> Tập nói thành tiếng khi giao việc: <i>\"老板将最重要的信息传递给各个部门并交代清楚\"</i>, rồi tự nói lại thông tin quan trọng nhất bằng một câu dùng 将."
      ]
     }
    }
   ]
  },
  "5.6": {
   "lessons": [
    {
     "id": "5.6A",
     "name": "Bài 5.6A: Lập luận và suy đoán",
     "grammar": {
      "formulas": [
       "📌 原因/情况 + ➡️ 从而 + ✅ 结果",
       "➕ 一个情况 + ➕ 加上 + 📎 另一个情况",
       "⚠️ 一旦 + 🔎 出现情况 + 👉 就 + 🛠️ 办法"
      ],
      "tip": "Liên từ nối ý: 从而 (cóng'ér, tòng nhi) nối nguyên nhân với kết quả; 加上 (jiāshàng, gia thượng) = thêm vào đó; 完了 (wánle, hoàn liễu) là khẩu ngữ, nghĩa \"xong rồi thì\"; 一旦 (yīdàn, nhất đán) = một khi... thì, vế sau thường có 就.",
      "vn_tip": "Người Việt hay dịch \"một khi\" thành 一次 hoặc quên 就 ở vế sau. Đúng: 一旦 + tình huống, 就 + hành động. Còn 从而 chỉ dùng ở vế sau để nói kết quả, không đặt đầu câu như \"因此\"."
     },
     "chunks": [
      {
       "scene": "📚🧑‍💼📈",
       "full": "小王认真学习了一年从而提高了自己的能力",
       "vi": "Tiểu Vương chăm chỉ học một năm, nhờ đó nâng cao được năng lực của mình",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "认真学习了一年",
         "ico": "📚",
         "c": "v",
         "py": "rènzhēn xuéxí le yī nián",
         "hv": "nhận chân học tập liễu nhất niên"
        },
        {
         "t": "从而提高了自己的能力",
         "ico": "📈",
         "c": "o",
         "py": "cóng'ér tígāo le zìjǐ de nénglì",
         "hv": "tòng nhi đề cao liễu tự kỷ đích năng lực"
        }
       ],
       "traceWord": "从而",
       "py": "Xiǎowáng rènzhēn xuéxí le yī nián cóng'ér tígāo le zìjǐ de nénglì",
       "traceKey": "conger",
       "traceInfo": [
        {
         "c": "从",
         "py": "cóng",
         "hv": "tòng"
        },
        {
         "c": "而",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "💰🛍️👥",
       "full": "价格便宜加上质量很好所以买的人很多",
       "vi": "Giá rẻ, cộng thêm chất lượng rất tốt nên người mua rất đông",
       "parts": [
        {
         "t": "价格便宜",
         "ico": "💰",
         "c": "s",
         "py": "jiàgé piányi",
         "hv": "giá cách tiện nghi"
        },
        {
         "t": "加上",
         "ico": "➕",
         "c": "v",
         "py": "jiāshàng",
         "hv": "gia thượng"
        },
        {
         "t": "质量很好所以买的人很多",
         "ico": "👥",
         "c": "o",
         "py": "zhìliàng hěn hǎo suǒyǐ mǎi de rén hěn duō",
         "hv": "chất lượng ngận hảo sở dĩ mãi đích nhân ngận đa"
        }
       ],
       "traceWord": "加上",
       "py": "Jiàgé piányi jiāshàng zhìliàng hěn hǎo suǒyǐ mǎi de rén hěn duō",
       "traceKey": "jiashang",
       "traceInfo": [
        {
         "c": "加",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🗓️👥💬",
       "full": "我们先开会完了再讨论这个方案",
       "vi": "Chúng ta họp trước, xong rồi bàn phương án này sau",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "先开会",
         "ico": "🗓️",
         "c": "v",
         "py": "xiān kāihuì",
         "hv": "tiên khai hội"
        },
        {
         "t": "完了再讨论这个方案",
         "ico": "📝",
         "c": "o",
         "py": "wánle zài tǎolùn zhè gè fāng'àn",
         "hv": "hoàn liễu tái thảo luận giá cá phương án"
        }
       ],
       "traceWord": "完了",
       "py": "Wǒmen xiān kāihuì wánle zài tǎolùn zhè gè fāng'àn",
       "traceKey": "wanle",
       "traceInfo": [
        {
         "c": "完",
         "py": "wán",
         "hv": "hoàn"
        },
        {
         "c": "了",
         "py": "le",
         "hv": "liễu"
        }
       ]
      },
      {
       "scene": "🔎⚠️📞",
       "full": "我们一旦发现问题就马上通知经理",
       "vi": "Một khi chúng tôi phát hiện vấn đề thì sẽ báo ngay cho giám đốc",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "一旦发现问题就马上通知",
         "ico": "⚠️",
         "c": "v",
         "py": "yīdàn fāxiàn wèntí jiù mǎshàng tōngzhī",
         "hv": "nhất đán phát hiện vấn đề tựu mã thượng thông tri"
        },
        {
         "t": "经理",
         "ico": "👔",
         "c": "o",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        }
       ],
       "traceWord": "一旦",
       "py": "Wǒmen yīdàn fāxiàn wèntí jiù mǎshàng tōngzhī jīnglǐ",
       "traceKey": "yidan",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "旦",
         "py": "dàn",
         "hv": "đán"
        }
       ]
      },
      {
       "scene": "🏢📋🔍",
       "full": "公司应该对这个项目加以评估",
       "vi": "Công ty nên tiến hành đánh giá dự án này",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "应该对这个项目加以",
         "ico": "📋",
         "c": "v",
         "py": "yīnggāi duì zhè gè xiàngmù jiāyǐ",
         "hv": "ưng cai đối giá cá hạng mục gia dĩ"
        },
        {
         "t": "评估",
         "ico": "🔍",
         "c": "o",
         "py": "pínggū",
         "hv": "bình cổ"
        }
       ],
       "traceWord": "评估",
       "py": "Gōngsī yīnggāi duì zhè gè xiàngmù jiāyǐ pínggū",
       "traceKey": "pinggu",
       "traceInfo": [
        {
         "c": "评",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "估",
         "py": "gū",
         "hv": "cổ"
        }
       ]
      },
      {
       "scene": "🧠🧩💬",
       "full": "他的逻辑思维很强说话也很有道理",
       "vi": "Tư duy logic của anh ấy rất mạnh, nói gì cũng có lý",
       "parts": [
        {
         "t": "他的逻辑思维",
         "ico": "🧠",
         "c": "s",
         "py": "tā de luójí sīwéi",
         "hv": "tha đích la tập tư duy"
        },
        {
         "t": "很强",
         "ico": "💪",
         "c": "v",
         "py": "hěn qiáng",
         "hv": "ngận cường"
        },
        {
         "t": "说话也很有道理",
         "ico": "💬",
         "c": "o",
         "py": "shuōhuà yě hěn yǒu dàolǐ",
         "hv": "thuyết thoại dã ngận hữu đạo lý"
        }
       ],
       "traceWord": "逻辑",
       "py": "Tā de luójí sīwéi hěn qiáng shuōhuà yě hěn yǒu dàolǐ",
       "traceKey": "luoji",
       "traceInfo": [
        {
         "c": "逻",
         "py": "luó",
         "hv": "la"
        },
        {
         "c": "辑",
         "py": "jí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "🧑‍🔬⚙️💡",
       "full": "专家试图用简单的方法解释这个原理",
       "vi": "Chuyên gia cố gắng dùng phương pháp đơn giản để giải thích nguyên lý này",
       "parts": [
        {
         "t": "专家",
         "ico": "🧑‍🔬",
         "c": "s",
         "py": "zhuānjiā",
         "hv": "chuyên gia"
        },
        {
         "t": "试图用简单的方法解释",
         "ico": "💡",
         "c": "v",
         "py": "shìtú yòng jiǎndān de fāngfǎ jiěshì",
         "hv": "thí đồ dụng giản đơn đích phương pháp giải thích"
        },
        {
         "t": "这个原理",
         "ico": "⚙️",
         "c": "o",
         "py": "zhè gè yuánlǐ",
         "hv": "giá cá nguyên lý"
        }
       ],
       "traceWord": "试图",
       "py": "Zhuānjiā shìtú yòng jiǎndān de fāngfǎ jiěshì zhè gè yuánlǐ",
       "traceKey": "shitu",
       "traceInfo": [
        {
         "c": "试",
         "py": "shì",
         "hv": "thí"
        },
        {
         "c": "图",
         "py": "tú",
         "hv": "đồ"
        }
       ]
      },
      {
       "scene": "💡🗓️✅",
       "full": "他设想了一个新办法估计下个月就能完成",
       "vi": "Anh ấy hình dung ra một cách mới, ước tính tháng sau là có thể hoàn thành",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "设想了一个新办法",
         "ico": "💡",
         "c": "v",
         "py": "shèxiǎng le yī gè xīn bànfǎ",
         "hv": "thiết tưởng liễu nhất cá tân biện pháp"
        },
        {
         "t": "估计下个月就能完成",
         "ico": "✅",
         "c": "o",
         "py": "gūjì xià ge yuè jiù néng wánchéng",
         "hv": "cổ kế hạ cá nguyệt tựu năng hoàn thành"
        }
       ],
       "traceWord": "设想",
       "py": "Tā shèxiǎng le yī gè xīn bànfǎ gūjì xià ge yuè jiù néng wánchéng",
       "traceKey": "shexiang",
       "traceInfo": [
        {
         "c": "设",
         "py": "shè",
         "hv": "thiết"
        },
        {
         "c": "想",
         "py": "xiǎng",
         "hv": "tưởng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你猜小王今天为什么没来？",
       "qvi": "Bạn đoán hôm nay vì sao Tiểu Vương không đến?",
       "scene": "🤔🧑‍💼🏢",
       "ans": "我猜他生病了",
       "opts": [
        {
         "txt": "我猜他生病了",
         "ico": "🤒",
         "py": "Wǒ cāi tā shēngbìng le"
        },
        {
         "txt": "他喜欢喝咖啡",
         "ico": "☕",
         "py": "Tā xǐhuan hē kāfēi"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ cāi Xiǎowáng jīntiān wèi shénme méi lái?"
      },
      {
       "q": "你对这件事有什么猜测？",
       "qvi": "Bạn có suy đoán gì về việc này?",
       "scene": "🤔📄❓",
       "ans": "我猜测这是一个误会",
       "opts": [
        {
         "txt": "我明天要去北京出差",
         "ico": "✈️",
         "py": "Wǒ míngtiān yào qù Běijīng chūchāi"
        },
        {
         "txt": "我猜测这是一个误会",
         "ico": "🤝",
         "py": "Wǒ cāicè zhè shì yī gè wùhuì"
        },
        {
         "txt": "我很喜欢吃面包",
         "ico": "🍞",
         "py": "Wǒ hěn xǐhuan chī miànbāo"
        }
       ],
       "qpy": "Nǐ duì zhè jiàn shì yǒu shénme cāicè?"
      },
      {
       "q": "你估计会议什么时候结束？",
       "qvi": "Bạn ước tính cuộc họp khi nào kết thúc?",
       "scene": "🗓️⏰🏁",
       "ans": "我估计下午五点就能结束",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "🏢",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "我已经吃过午饭了",
         "ico": "🍚",
         "py": "Wǒ yǐjīng chī guò wǔfàn le"
        },
        {
         "txt": "我估计下午五点就能结束",
         "ico": "⏰",
         "py": "Wǒ gūjì xiàwǔ wǔ diǎn jiù néng jiéshù"
        }
       ],
       "qpy": "Nǐ gūjì huìyì shénme shíhou jiéshù?"
      },
      {
       "q": "你为什么认定这个想法是对的？",
       "qvi": "Vì sao bạn khẳng định ý tưởng này là đúng?",
       "scene": "💡✅🔬",
       "ans": "因为事实已经证明了这个真理",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为事实已经证明了这个真理",
         "ico": "🔬",
         "py": "Yīnwèi shìshí yǐjīng zhèngmíng le zhè gè zhēnlǐ"
        },
        {
         "txt": "因为我没有带手机",
         "ico": "📱",
         "py": "Yīnwèi wǒ méiyǒu dài shǒujī"
        }
       ],
       "qpy": "Nǐ wèi shénme rèndìng zhè gè xiǎngfǎ shì duì de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo dự đoán với sếp",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một dự án đang làm ở công ty và tự nói thành tiếng 2 câu dự đoán, ví dụ <i>\"我估计下个月就能完成\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp: nêu hai lý do, nối bằng <i>\"加上\"</i>; rồi dặn <i>\"一旦发现问题就马上通知经理\"</i>.",
       "<b>Bước 3:</b> Nói với sếp kế hoạch hôm nay: <i>\"我们先开会完了再讨论这个方案\"</i>, rồi thêm kết quả mong muốn bằng <i>\"从而\"</i>."
      ]
     }
    },
    {
     "id": "5.6B",
     "name": "Bài 5.6B: Cảm xúc mãnh liệt và tính cách",
     "grammar": {
      "formulas": [
       "🧑 他 + 😄 高兴 + 得 + 🔥 不得了",
       "🧑 我 + 😰 忙 + 得 + 🔥 不得了",
       "📢 不得了 + 了！ + ⚡ 出事了"
      ],
      "tip": "Tính từ/động từ tâm lý + 得不得了 (bùdéliǎo, bất đắc liễu) = \"… vô cùng, … không chịu nổi\", dùng khẩu ngữ để nhấn mạnh mức độ. Đứng riêng, 不得了 còn nghĩa \"nghiêm trọng quá\".",
      "vn_tip": "Người Việt hay nói \"很高兴得不得了\" hoặc \"高兴不得了\". Đúng là 高兴得不得了: phải có 得, và không thêm 很 phía trước 得不得了."
     },
     "chunks": [
      {
       "scene": "📰😄🎉",
       "full": "他听到这个好消息高兴得不得了",
       "vi": "Nghe tin tốt này anh ấy vui không tả nổi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "听到这个好消息",
         "ico": "👂",
         "c": "v",
         "py": "tīngdào zhè gè hǎo xiāoxi",
         "hv": "thính đáo giá cá hảo tiêu tức"
        },
        {
         "t": "高兴得不得了",
         "ico": "😄",
         "c": "o",
         "py": "gāoxìng de bùdéliǎo",
         "hv": "cao hứng đắc bất đắc liễu"
        }
       ],
       "traceWord": "不得了",
       "py": "Tā tīngdào zhè gè hǎo xiāoxi gāoxìng de bùdéliǎo",
       "traceKey": "budeliao",
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
         "c": "了",
         "py": "le",
         "hv": "liễu"
        }
       ]
      },
      {
       "scene": "⚽📣🎉",
       "full": "球迷们疯狂地庆祝着高兴得不得了",
       "vi": "Các cổ động viên điên cuồng ăn mừng, vui không tả nổi",
       "parts": [
        {
         "t": "球迷们",
         "ico": "⚽",
         "c": "s",
         "py": "qiúmí men",
         "hv": "cầu mê môn"
        },
        {
         "t": "疯狂地庆祝着",
         "ico": "🎉",
         "c": "v",
         "py": "fēngkuáng de qìngzhù zhe",
         "hv": "phong cuồng địa khánh chúc trước"
        },
        {
         "t": "高兴得不得了",
         "ico": "😄",
         "c": "o",
         "py": "gāoxìng de bùdéliǎo",
         "hv": "cao hứng đắc bất đắc liễu"
        }
       ],
       "traceWord": "疯狂",
       "py": "Qiúmí men fēngkuáng de qìngzhù zhe gāoxìng de bùdéliǎo",
       "traceKey": "fengkuang",
       "traceInfo": [
        {
         "c": "疯",
         "py": "fēng",
         "hv": "phong"
        },
        {
         "c": "狂",
         "py": "kuáng",
         "hv": "cuồng"
        }
       ]
      },
      {
       "scene": "💼😵💦",
       "full": "他最近忙得不得了快要累疯了",
       "vi": "Dạo này anh ấy bận không chịu nổi, sắp mệt phát điên",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "最近忙得不得了",
         "ico": "💼",
         "c": "v",
         "py": "zuìjìn máng de bùdéliǎo",
         "hv": "tối cận mang đắc bất đắc liễu"
        },
        {
         "t": "快要累疯了",
         "ico": "😵",
         "c": "o",
         "py": "kuàiyào lèi fēng le",
         "hv": "khoái yếu lụy phong liễu"
        }
       ],
       "traceWord": "疯",
       "py": "Tā zuìjìn máng de bùdéliǎo kuàiyào lèi fēng le",
       "traceKey": "feng",
       "traceInfo": [
        {
         "c": "疯",
         "py": "fēng",
         "hv": "phong"
        }
       ]
      },
      {
       "scene": "🎁😆🔥",
       "full": "他听说中了奖高兴得发狂激动得不得了",
       "vi": "Nghe nói trúng thưởng, anh ấy mừng phát điên, xúc động không tả nổi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "听说中了奖",
         "ico": "🎁",
         "c": "v",
         "py": "tīngshuō zhòng le jiǎng",
         "hv": "thính thuyết trúng liễu tưởng"
        },
        {
         "t": "高兴得发狂激动得不得了",
         "ico": "😆",
         "c": "o",
         "py": "gāoxìng de fā kuáng jīdòng de bùdéliǎo",
         "hv": "cao hứng đắc phát cuồng kích động đắc bất đắc liễu"
        }
       ],
       "traceWord": "激动",
       "py": "Tā tīngshuō zhòng le jiǎng gāoxìng de fā kuáng jīdòng de bùdéliǎo",
       "traceKey": "jidong",
       "traceInfo": [
        {
         "c": "激",
         "py": "jī",
         "hv": "kích"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🤦‍♂️😔💔",
       "full": "他太冲动了做了一件傻事现在难过得不得了",
       "vi": "Anh ấy quá bốc đồng, làm một chuyện dại dột nên giờ buồn không chịu nổi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "太冲动了做了一件傻事",
         "ico": "🤦‍♂️",
         "c": "v",
         "py": "tài chōngdòng le zuò le yī jiàn shǎ shì",
         "hv": "thái xung động liễu tố liễu nhất kiện _ sự"
        },
        {
         "t": "现在难过得不得了",
         "ico": "😔",
         "c": "o",
         "py": "xiànzài nánguò de bùdéliǎo",
         "hv": "hiện tại nan quá đắc bất đắc liễu"
        }
       ],
       "traceWord": "冲动",
       "py": "Tā tài chōngdòng le zuò le yī jiàn shǎ shì xiànzài nánguò de bùdéliǎo",
       "traceKey": "chongdong",
       "traceInfo": [
        {
         "c": "冲",
         "py": "chōng",
         "hv": "xung"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🧑😶👨‍👩‍👧",
       "full": "他整天一个人发呆家人担心得不得了",
       "vi": "Cả ngày anh ấy ngồi ngẩn người một mình, người nhà lo không chịu nổi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "整天一个人发呆",
         "ico": "😶",
         "c": "v",
         "py": "zhěngtiān yī gè rén fā dāi",
         "hv": "chỉnh thiên nhất cá nhân phát ngốc"
        },
        {
         "t": "家人担心得不得了",
         "ico": "👨‍👩‍👧",
         "c": "o",
         "py": "jiārén dānxīn de bùdéliǎo",
         "hv": "gia nhân đảm tâm đắc bất đắc liễu"
        }
       ],
       "traceWord": "呆",
       "py": "Tā zhěngtiān yī gè rén fā dāi jiārén dānxīn de bùdéliǎo",
       "traceKey": "dai",
       "traceInfo": [
        {
         "c": "呆",
         "py": "dāi",
         "hv": "ngốc"
        }
       ]
      },
      {
       "scene": "🐭💼🦁",
       "full": "他平时很胆小可是工作起来大胆得不得了",
       "vi": "Bình thường anh ấy rất nhút nhát, nhưng làm việc thì táo bạo vô cùng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "平时很胆小",
         "ico": "🐭",
         "c": "v",
         "py": "píngshí hěn dǎnxiǎo",
         "hv": "bình thời ngận đảm tiểu"
        },
        {
         "t": "可是工作起来大胆得不得了",
         "ico": "🦁",
         "c": "o",
         "py": "kěshì gōngzuò qǐlái dàdǎn de bùdéliǎo",
         "hv": "khả thị công tác khởi lai đại đảm đắc bất đắc liễu"
        }
       ],
       "traceWord": "胆小",
       "py": "Tā píngshí hěn dǎnxiǎo kěshì gōngzuò qǐlái dàdǎn de bùdéliǎo",
       "traceKey": "danxiao",
       "traceInfo": [
        {
         "c": "胆",
         "py": "dǎn",
         "hv": "đảm"
        },
        {
         "c": "小",
         "py": "xiǎo",
         "hv": "tiểu"
        }
       ]
      },
      {
       "scene": "🔥🏢🏃",
       "full": "他听说公司着火了慌忙跑出办公室吓得不得了",
       "vi": "Nghe tin công ty cháy, anh ấy vội vàng chạy khỏi văn phòng, sợ khiếp vía",
       "parts": [
        {
         "t": "他听说公司着火了",
         "ico": "🔥",
         "c": "s",
         "py": "tā tīngshuō gōngsī zháohuǒ le",
         "hv": "tha thính thuyết công ti trước hỏa liễu"
        },
        {
         "t": "慌忙跑出办公室",
         "ico": "🏃",
         "c": "v",
         "py": "huāngmáng pǎo chū bàngōngshì",
         "hv": "hoảng mang bào xuất biện công thất"
        },
        {
         "t": "吓得不得了",
         "ico": "😱",
         "c": "o",
         "py": "xià de bùdéliǎo",
         "hv": "hách đắc bất đắc liễu"
        }
       ],
       "traceWord": "慌忙",
       "py": "Tā tīngshuō gōngsī zháohuǒ le huāngmáng pǎo chū bàngōngshì xià de bùdéliǎo",
       "traceKey": "huangmang",
       "traceInfo": [
        {
         "c": "慌",
         "py": "huāng",
         "hv": "hoảng"
        },
        {
         "c": "忙",
         "py": "máng",
         "hv": "mang"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你家孩子的性格怎么样？",
       "qvi": "Tính cách con nhà bạn thế nào?",
       "scene": "👦🏃‍♂️😄",
       "ans": "他活泼得不得了",
       "opts": [
        {
         "txt": "我不喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ bù xǐhuan hē chá"
        },
        {
         "txt": "他活泼得不得了",
         "ico": "🏃‍♂️",
         "py": "Tā huópō de bùdéliǎo"
        },
        {
         "txt": "他的书包是红色的",
         "ico": "🎒",
         "py": "Tā de shūbāo shì hóngsè de"
        }
       ],
       "qpy": "Nǐ jiā háizi de xìnggé zěnmeyàng?"
      },
      {
       "q": "过年和家人在一起，你快活吗？",
       "qvi": "Tết ở cùng gia đình, bạn có vui vẻ không?",
       "scene": "🧧👨‍👩‍👧😊",
       "ans": "我快活得不得了",
       "opts": [
        {
         "txt": "我快活得不得了",
         "ico": "😊",
         "py": "Wǒ kuàihuo de bùdéliǎo"
        },
        {
         "txt": "我没有时间去商店",
         "ico": "🏪",
         "py": "Wǒ méiyǒu shíjiān qù shāngdiàn"
        },
        {
         "txt": "他不在公司",
         "ico": "🏢",
         "py": "Tā bú zài gōngsī"
        }
       ],
       "qpy": "Guònián hé jiārén zài yīqǐ nǐ kuàihuo ma?"
      },
      {
       "q": "你为什么这么发愁？",
       "qvi": "Sao bạn lại lo âu thế?",
       "scene": "😟📝📅",
       "ans": "我为明天的考试发愁",
       "opts": [
        {
         "txt": "我今天吃了两个鸡蛋",
         "ico": "🥚",
         "py": "Wǒ jīntiān chī le liǎng gè jīdàn"
        },
        {
         "txt": "我喜欢在公园里跑步",
         "ico": "🏃",
         "py": "Wǒ xǐhuan zài gōngyuán lǐ pǎobù"
        },
        {
         "txt": "我为明天的考试发愁",
         "ico": "😟",
         "py": "Wǒ wèi míngtiān de kǎoshì fā chóu"
        }
       ],
       "qpy": "Nǐ wèi shénme zhème fā chóu?"
      },
      {
       "q": "大家听到这个消息，反应怎么样？",
       "qvi": "Mọi người nghe tin này phản ứng thế nào?",
       "scene": "📰😲👥",
       "ans": "大家都很震惊也很慌",
       "opts": [
        {
         "txt": "大家都在吃午饭",
         "ico": "🍱",
         "py": "Dàjiā dōu zài chī wǔfàn"
        },
        {
         "txt": "大家都下班回家了",
         "ico": "🏠",
         "py": "Dàjiā dōu xiàbān huí jiā le"
        },
        {
         "txt": "大家都很震惊也很慌",
         "ico": "😲",
         "py": "Dàjiā dōu hěn zhènjīng yě hěn huāng"
        }
       ],
       "qpy": "Dàjiā tīngdào zhè gè xiāoxi fǎnyìng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể chuyện cảm xúc với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một chuyện gần đây khiến bạn vui hoặc bận, tự nói thành tiếng: <i>\"我最近忙得不得了\"</i>, <i>\"我高兴得不得了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp kể một chuyện công việc, dùng <i>\"他听到这个好消息高兴得不得了\"</i> làm mẫu, thay bằng tên người và việc thật.",
       "<b>Bước 3:</b> Tả tính cách một người bạn quen bằng <i>\"他平时很胆小\"</i> hoặc <i>\"他很活泼\"</i>, rồi thêm một câu với <i>\"得不得了\"</i>."
      ]
     }
    },
    {
     "id": "5.6C",
     "name": "Bài 5.6C: Xã giao và lịch sự",
     "grammar": {
      "formulas": [
       "💬 您太客气了 + 🙏 我实在 + ⚡ 不敢当",
       "🏅 您这样称赞我 + 🙏 不敢当",
       "🎁 您亲自来 + 🙏 不敢当"
      ],
      "tip": "不敢当 (bùgǎndāng, bất cảm đương) là lời đáp khiêm tốn khi được khen, được tiếp đón hoặc tặng quà trọng thị, nghĩa \"tôi không dám nhận\". Có thể nói 实在不敢当 để nhấn mạnh.",
      "vn_tip": "Người Việt hay đáp lời khen bằng 谢谢 hoặc dịch \"đâu có\" thành 没有. Trong tình huống trang trọng với sếp, đối tác, hãy dùng 不敢当; đừng dùng khi chỉ được cảm ơn vì việc nhỏ."
     },
     "chunks": [
      {
       "scene": "👏🧑‍💼🙏",
       "full": "您这样称赞我我实在不敢当",
       "vi": "Ông khen tôi như vậy, tôi thật không dám nhận",
       "parts": [
        {
         "t": "您",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "nín",
         "hv": "_"
        },
        {
         "t": "这样称赞我",
         "ico": "👏",
         "c": "v",
         "py": "zhèyàng chēngzàn wǒ",
         "hv": "giá dạng xưng tán ngã"
        },
        {
         "t": "我实在不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "wǒ shízài bùgǎndāng",
         "hv": "ngã thực tại bất cảm đương"
        }
       ],
       "traceWord": "不敢当",
       "py": "Nín zhèyàng chēngzàn wǒ wǒ shízài bùgǎndāng",
       "traceKey": "bugandang",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "敢",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "当",
         "py": "dāng",
         "hv": "đương"
        }
       ]
      },
      {
       "scene": "🎁😊🙏",
       "full": "您太客气了这份礼物我实在不敢当",
       "vi": "Ông khách sáo quá, món quà này tôi thật không dám nhận",
       "parts": [
        {
         "t": "您",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "nín",
         "hv": "_"
        },
        {
         "t": "太客气了",
         "ico": "😊",
         "c": "v",
         "py": "tài kèqi le",
         "hv": "thái khách khí liễu"
        },
        {
         "t": "这份礼物我实在不敢当",
         "ico": "🎁",
         "c": "o",
         "py": "zhè fèn lǐwù wǒ shízài bùgǎndāng",
         "hv": "giá phần lễ vật ngã thực tại bất cảm đương"
        }
       ],
       "traceWord": "客气",
       "py": "Nín tài kèqi le zhè fèn lǐwù wǒ shízài bùgǎndāng",
       "traceKey": "keqi",
       "traceInfo": [
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        },
        {
         "c": "气",
         "py": "qi",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🙇🧑‍💼👥",
       "full": "小王很有礼貌大家都尊敬他他却说自己不敢当",
       "vi": "Tiểu Vương rất lễ phép, ai cũng kính trọng anh nhưng anh nói mình không dám nhận",
       "parts": [
        {
         "t": "小王很有礼貌",
         "ico": "🙇",
         "c": "s",
         "py": "Xiǎowáng hěn yǒu lǐmào",
         "hv": "tiểu vương ngận hữu lễ mạo"
        },
        {
         "t": "大家都尊敬他",
         "ico": "👥",
         "c": "v",
         "py": "dàjiā dōu zūnjìng tā",
         "hv": "đại gia đô tôn kính tha"
        },
        {
         "t": "他却说自己不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "tā què shuō zìjǐ bùgǎndāng",
         "hv": "tha khước thuyết tự kỷ bất cảm đương"
        }
       ],
       "traceWord": "礼貌",
       "py": "Xiǎowáng hěn yǒu lǐmào dàjiā dōu zūnjìng tā tā què shuō zìjǐ bùgǎndāng",
       "traceKey": "limao",
       "traceInfo": [
        {
         "c": "礼",
         "py": "lǐ",
         "hv": "lễ"
        },
        {
         "c": "貌",
         "py": "mào",
         "hv": "mạo"
        }
       ]
      },
      {
       "scene": "👔🤝📣",
       "full": "张经理很虚心也很尊重别人的意见他总是说不敢当",
       "vi": "Giám đốc Trương rất khiêm tốn, tôn trọng ý kiến người khác, và luôn nói không dám nhận",
       "parts": [
        {
         "t": "张经理",
         "ico": "👔",
         "c": "s",
         "py": "Zhāngjīnglǐ",
         "hv": "trương kinh lý"
        },
        {
         "t": "很虚心也很尊重别人的意见",
         "ico": "🤝",
         "c": "v",
         "py": "hěn xūxīn yě hěn zūnzhòng biérén de yìjiàn",
         "hv": "ngận hư tâm dã ngận tôn trọng biệt nhân đích ý kiến"
        },
        {
         "t": "他总是说不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "tā zǒngshì shuō bùgǎndāng",
         "hv": "tha tổng thị thuyết bất cảm đương"
        }
       ],
       "traceWord": "虚心",
       "py": "Zhāngjīnglǐ hěn xūxīn yě hěn zūnzhòng biérén de yìjiàn tā zǒngshì shuō bùgǎndāng",
       "traceKey": "xuxin",
       "traceInfo": [
        {
         "c": "虚",
         "py": "xū",
         "hv": "hư"
        },
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        }
       ]
      },
      {
       "scene": "👥🏆💰",
       "full": "同事们祝贺我获得了奖金我连忙说不敢当",
       "vi": "Đồng nghiệp chúc mừng tôi nhận được tiền thưởng, tôi vội nói không dám nhận",
       "parts": [
        {
         "t": "同事们",
         "ico": "👥",
         "c": "s",
         "py": "tóngshì men",
         "hv": "đồng sự môn"
        },
        {
         "t": "祝贺我获得了奖金",
         "ico": "🏆",
         "c": "v",
         "py": "zhùhè wǒ huòdé le jiǎngjīn",
         "hv": "chúc hạ ngã hoạch đắc liễu tưởng kim"
        },
        {
         "t": "我连忙说不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "wǒ liánmáng shuō bùgǎndāng",
         "hv": "ngã liên mang thuyết bất cảm đương"
        }
       ],
       "traceWord": "祝贺",
       "py": "Tóngshì men zhùhè wǒ huòdé le jiǎngjīn wǒ liánmáng shuō bùgǎndāng",
       "traceKey": "zhuhe",
       "traceInfo": [
        {
         "c": "祝",
         "py": "zhù",
         "hv": "chúc"
        },
        {
         "c": "贺",
         "py": "hè",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "🚶‍♂️🏢🙏",
       "full": "您亲自来公司拜访我实在不敢当",
       "vi": "Ông đích thân đến công ty thăm tôi, tôi thật không dám nhận",
       "parts": [
        {
         "t": "您",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "nín",
         "hv": "_"
        },
        {
         "t": "亲自来公司拜访我",
         "ico": "🚶‍♂️",
         "c": "v",
         "py": "qīnzì lái gōngsī bàifǎng wǒ",
         "hv": "thân tự lai công ti bái phỏng ngã"
        },
        {
         "t": "实在不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "shízài bùgǎndāng",
         "hv": "thực tại bất cảm đương"
        }
       ],
       "traceWord": "拜访",
       "py": "Nín qīnzì lái gōngsī bàifǎng wǒ shízài bùgǎndāng",
       "traceKey": "baifang",
       "traceInfo": [
        {
         "c": "拜",
         "py": "bài",
         "hv": "bái"
        },
        {
         "c": "访",
         "py": "fǎng",
         "hv": "phỏng"
        }
       ]
      },
      {
       "scene": "🎉✉️🙏",
       "full": "老板邀请我参加家庭晚会我怕打扰大家实在不敢当",
       "vi": "Sếp mời tôi dự tiệc gia đình, tôi sợ làm phiền mọi người, thật không dám nhận",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "邀请我参加家庭晚会",
         "ico": "✉️",
         "c": "v",
         "py": "yāoqǐng wǒ cānjiā jiātíng wǎnhuì",
         "hv": "yêu thỉnh ngã tham gia gia đình vãn hội"
        },
        {
         "t": "我怕打扰大家实在不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "wǒ pà dǎrǎo dàjiā shízài bùgǎndāng",
         "hv": "ngã phạ đả nhiễu đại gia thực tại bất cảm đương"
        }
       ],
       "traceWord": "邀请",
       "py": "Lǎobǎn yāoqǐng wǒ cānjiā jiātíng wǎnhuì wǒ pà dǎrǎo dàjiā shízài bùgǎndāng",
       "traceKey": "yaoqing",
       "traceInfo": [
        {
         "c": "邀",
         "py": "yāo",
         "hv": "yêu"
        },
        {
         "c": "请",
         "py": "qǐng",
         "hv": "thỉnh"
        }
       ]
      },
      {
       "scene": "🏥💐🙏",
       "full": "领导到医院慰问病人病人说这份关怀实在不敢当",
       "vi": "Lãnh đạo đến bệnh viện thăm hỏi bệnh nhân, bệnh nhân nói sự quan tâm này thật không dám nhận",
       "parts": [
        {
         "t": "领导",
         "ico": "👔",
         "c": "s",
         "py": "lǐngdǎo",
         "hv": "lĩnh đạo"
        },
        {
         "t": "到医院慰问病人",
         "ico": "🏥",
         "c": "v",
         "py": "dào yīyuàn wèiwèn bìngrén",
         "hv": "đáo y viện úy vấn bệnh nhân"
        },
        {
         "t": "病人说这份关怀实在不敢当",
         "ico": "🙏",
         "c": "o",
         "py": "bìngrén shuō zhè fèn guānhuái shízài bùgǎndāng",
         "hv": "bệnh nhân thuyết giá phần quan hoài thực tại bất cảm đương"
        }
       ],
       "traceWord": "慰问",
       "py": "Lǐngdǎo dào yīyuàn wèiwèn bìngrén bìngrén shuō zhè fèn guānhuái shízài bùgǎndāng",
       "traceKey": "weiwen",
       "traceInfo": [
        {
         "c": "慰",
         "py": "wèi",
         "hv": "úy"
        },
        {
         "c": "问",
         "py": "wèn",
         "hv": "vấn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想赠送客人什么礼物？",
       "qvi": "Bạn muốn tặng khách món quà gì?",
       "scene": "🎁🧑‍💼📖",
       "ans": "我想赠送他们一本中文书",
       "opts": [
        {
         "txt": "我想赠送他们一本中文书",
         "ico": "📖",
         "py": "Wǒ xiǎng zèngsòng tāmen yī běn Zhōngwén shū"
        },
        {
         "txt": "我明天要去机场",
         "ico": "✈️",
         "py": "Wǒ míngtiān yào qù jīchǎng"
        },
        {
         "txt": "我不喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ bù xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ xiǎng zèngsòng kèrén shénme lǐwù?"
      },
      {
       "q": "这些花是谁赠给您的？",
       "qvi": "Những bông hoa này ai tặng ông vậy?",
       "scene": "💐🎁👩‍🎓",
       "ans": "是我的学生赠给我的",
       "opts": [
        {
         "txt": "我不喜欢吃苹果",
         "ico": "🍎",
         "py": "Wǒ bù xǐhuan chī píngguǒ"
        },
        {
         "txt": "是我昨天在商店买的",
         "ico": "🏪",
         "py": "Shì wǒ zuótiān zài shāngdiàn mǎi de"
        },
        {
         "txt": "是我的学生赠给我的",
         "ico": "👩‍🎓",
         "py": "Shì wǒ de xuéshēng zèng gěi wǒ de"
        }
       ],
       "qpy": "Zhèxiē huā shì shéi zèng gěi nín de?"
      },
      {
       "q": "节日的时候，学生们为老师献上了什么？",
       "qvi": "Dịp lễ, học sinh dâng tặng thầy cô thứ gì?",
       "scene": "🎊👩‍🎓💐",
       "ans": "他们为老师献上了鲜花",
       "opts": [
        {
         "txt": "他们为老师献上了鲜花",
         "ico": "💐",
         "py": "Tāmen wèi lǎoshī xiàn shàng le xiānhuā"
        },
        {
         "txt": "他们在教室里睡觉了",
         "ico": "😴",
         "py": "Tāmen zài jiàoshì lǐ shuìjiào le"
        },
        {
         "txt": "他们都坐地铁回家了",
         "ico": "🚇",
         "py": "Tāmen dōu zuò dìtiě huí jiā le"
        }
       ],
       "qpy": "Jiérì de shíhou xuéshēng men wèi lǎoshī xiàn shàng le shénme?"
      },
      {
       "q": "朋友工作不顺利，你会怎么安慰他？",
       "qvi": "Bạn bè làm việc không thuận lợi, bạn sẽ an ủi thế nào?",
       "scene": "😔🤗💬",
       "ans": "我会告诉他不要担心慢慢来",
       "opts": [
        {
         "txt": "我会让他明天加班",
         "ico": "💼",
         "py": "Wǒ huì ràng tā míngtiān jiābān"
        },
        {
         "txt": "我会告诉他不要担心慢慢来",
         "ico": "🤗",
         "py": "Wǒ huì gàosu tā bùyào dānxīn mànmàn lái"
        },
        {
         "txt": "我会给他买一件衣服",
         "ico": "👕",
         "py": "Wǒ huì gěi tā mǎi yī jiàn yīfu"
        }
       ],
       "qpy": "Péngyou gōngzuò bú shùnlì nǐ huì zěnme ānwèi tā?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giao tiếp lịch sự với đối tác",
      "steps": [
       "<b>Bước 1:</b> Hình dung đối tác khen công ty bạn, tập đáp lại thành tiếng: <i>\"您这样称赞我实在不敢当\"</i> và <i>\"您太客气了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin mời một đối tác hoặc đồng nghiệp, dùng <i>\"邀请我参加\"</i> làm mẫu; nhắn thêm một câu chúc mừng thành tích của họ với <i>\"祝贺\"</i>.",
       "<b>Bước 3:</b> Gọi điện hẹn đến thăm khách hàng, nói rõ lý do và hỏi lịch sự để không làm phiền; luyện đáp lại bằng <i>\"实在不敢当\"</i> khi họ tiếp đón trọng thị."
      ]
     }
    }
   ]
  },
  "5.7": {
   "lessons": [
    {
     "id": "5.7A",
     "name": "Bài 5.7A: Cảm xúc tiêu cực và an ủi",
     "grammar": {
      "formulas": [
       "😤 得了 + ✋ 别再 + 😩 抱怨了",
       "🙅 得了得了 + 😮‍💨 别说了"
      ],
      "tip": "Cụm cố định 得了 (déle, đắc liễu) đứng đầu câu, nghĩa là \"thôi đi, đủ rồi\", dùng để ngắt lời hoặc an ủi ai đó; thường đi với 别…了 (bié…le) để khuyên đừng làm nữa.",
      "vn_tip": "Người Việt hay dịch \"thôi đi\" thành 不要了 hoặc 算了 trong mọi tình huống. Khi muốn bảo ai ngừng than phiền hay ngừng nói, hãy dùng 得了 ở đầu câu, rồi thêm 别再…了. Lưu ý 得了 đọc là déle, khác với 得 (dé) nghĩa là \"được\"."
     },
     "chunks": [
      {
       "scene": "😤🙅💼",
       "full": "得了别再抱怨了大家都已经很累了",
       "vi": "Thôi đi, đừng phàn nàn nữa, mọi người đều đã rất mệt rồi",
       "parts": [
        {
         "t": "得了",
         "ico": "🙅",
         "c": "s",
         "py": "déle",
         "hv": "đắc liễu"
        },
        {
         "t": "别再抱怨了",
         "ico": "😤",
         "c": "v",
         "py": "bié zài bàoyuàn le",
         "hv": "biệt tái bão oán liễu"
        },
        {
         "t": "大家都已经很累了",
         "ico": "😩",
         "c": "o",
         "py": "dàjiā dōu yǐjīng hěn lèi le",
         "hv": "đại gia đô dĩ kinh ngận lụy liễu"
        }
       ],
       "traceWord": "抱怨",
       "py": "Déle bié zài bàoyuàn le dàjiā dōu yǐjīng hěn lèi le",
       "traceKey": "baoyuan",
       "traceInfo": [
        {
         "c": "抱",
         "py": "bào",
         "hv": "bão"
        },
        {
         "c": "怨",
         "py": "yuàn",
         "hv": "oán"
        }
       ]
      },
      {
       "scene": "😔📅🤝",
       "full": "他很后悔昨天没有把这件事告诉我",
       "vi": "Anh ấy rất hối hận hôm qua đã không nói chuyện này cho tôi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "很后悔",
         "ico": "😔",
         "c": "v",
         "py": "hěn hòuhuǐ",
         "hv": "ngận hậu hối"
        },
        {
         "t": "昨天没有把这件事告诉我",
         "ico": "🗣️",
         "c": "o",
         "py": "zuótiān méiyǒu bǎ zhè jiàn shì gàosu wǒ",
         "hv": "tạc thiên một hữu bả giá kiện sự cáo tố ngã"
        }
       ],
       "traceWord": "后悔",
       "py": "Tā hěn hòuhuǐ zuótiān méiyǒu bǎ zhè jiàn shì gàosu wǒ",
       "traceKey": "houhui",
       "traceInfo": [
        {
         "c": "后",
         "py": "hòu",
         "hv": "hậu"
        },
        {
         "c": "悔",
         "py": "huǐ",
         "hv": "hối"
        }
       ]
      },
      {
       "scene": "🧑💔😢",
       "full": "我很心疼他因为这件事变得这么悲伤",
       "vi": "Tôi rất xót cho anh ấy vì chuyện này mà trở nên buồn bã như vậy",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "很心疼",
         "ico": "💔",
         "c": "v",
         "py": "hěn xīnténg",
         "hv": "ngận tâm đông"
        },
        {
         "t": "他因为这件事变得这么悲伤",
         "ico": "😢",
         "c": "o",
         "py": "tā yīnwèi zhè jiàn shì biàn de zhème bēishāng",
         "hv": "tha nhân vị giá kiện sự biến đắc giá ma bi thương"
        }
       ],
       "traceWord": "悲伤",
       "py": "Wǒ hěn xīnténg tā yīnwèi zhè jiàn shì biàn de zhème bēishāng",
       "traceKey": "beishang",
       "traceInfo": [
        {
         "c": "悲",
         "py": "bēi",
         "hv": "bi"
        },
        {
         "c": "伤",
         "py": "shāng",
         "hv": "thương"
        }
       ]
      },
      {
       "scene": "🏢📉😞",
       "full": "他们的公司不幸在去年年底破产了",
       "vi": "Công ty của họ không may bị phá sản vào cuối năm ngoái",
       "parts": [
        {
         "t": "他们的公司",
         "ico": "🏢",
         "c": "s",
         "py": "tāmen de gōngsī",
         "hv": "tha môn đích công ti"
        },
        {
         "t": "不幸",
         "ico": "😞",
         "c": "v",
         "py": "bùxìng",
         "hv": "bất hạnh"
        },
        {
         "t": "在去年年底破产了",
         "ico": "📉",
         "c": "o",
         "py": "zài qùnián niándǐ pòchǎn le",
         "hv": "tại khứ niên niên để phá sản liễu"
        }
       ],
       "traceWord": "不幸",
       "py": "Tāmen de gōngsī bùxìng zài qùnián niándǐ pòchǎn le",
       "traceKey": "buxing",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "幸",
         "py": "xìng",
         "hv": "hạnh"
        }
       ]
      },
      {
       "scene": "👔😠😢",
       "full": "随便降价等于商业上的自杀",
       "vi": "Giảm giá tùy tiện chẳng khác nào tự sát trong kinh doanh",
       "parts": [
        {
         "t": "随便降价",
         "ico": "👔",
         "c": "s",
         "py": "suíbiàn jiàngjià",
         "hv": "tùy tiện giáng giá"
        },
        {
         "t": "等于",
         "ico": "😠",
         "c": "v",
         "py": "děngyú",
         "hv": "đẳng vu"
        },
        {
         "t": "商业上的自杀",
         "ico": "😢",
         "c": "o",
         "py": "shāngyè shàng de zìshā",
         "hv": "thương nghiệp thượng đích tự sát"
        }
       ],
       "traceWord": "自杀",
       "py": "Suíbiàn jiàngjià děngyú shāngyè shàng de zìshā",
       "traceKey": "zisha",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "杀",
         "py": "shā",
         "hv": "sát"
        }
       ]
      },
      {
       "scene": "🤔❓🌙",
       "full": "这个问题已经困扰了我好几天",
       "vi": "Vấn đề này đã làm tôi bận tâm mấy ngày rồi",
       "parts": [
        {
         "t": "这个问题",
         "ico": "❓",
         "c": "s",
         "py": "zhè gè wèntí",
         "hv": "giá cá vấn đề"
        },
        {
         "t": "已经困扰了",
         "ico": "😣",
         "c": "v",
         "py": "yǐjīng kùnrǎo le",
         "hv": "dĩ kinh khốn nhiễu liễu"
        },
        {
         "t": "我好几天",
         "ico": "📅",
         "c": "o",
         "py": "wǒ hǎo jǐ tiān",
         "hv": "ngã hảo kỷ thiên"
        }
       ],
       "traceWord": "困扰",
       "py": "Zhè gè wèntí yǐjīng kùnrǎo le wǒ hǎo jǐ tiān",
       "traceKey": "kunrao",
       "traceInfo": [
        {
         "c": "困",
         "py": "kùn",
         "hv": "khốn"
        },
        {
         "c": "扰",
         "py": "rǎo",
         "hv": "nhiễu"
        }
       ]
      },
      {
       "scene": "🤷⏳💼",
       "full": "他犹豫了很久还是没有决定接受这份工作",
       "vi": "Anh ấy do dự rất lâu mà vẫn chưa quyết định nhận công việc này",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "犹豫了",
         "ico": "🤷",
         "c": "v",
         "py": "yóuyù le",
         "hv": "do dự liễu"
        },
        {
         "t": "很久还是没有决定接受这份工作",
         "ico": "💼",
         "c": "o",
         "py": "hěn jiǔ háishi méiyǒu juédìng jiēshòu zhè fèn gōngzuò",
         "hv": "ngận cửu hoàn thị một hữu quyết định tiếp thụ giá phần công tác"
        }
       ],
       "traceWord": "犹豫",
       "py": "Tā yóuyù le hěn jiǔ háishi méiyǒu juédìng jiēshòu zhè fèn gōngzuò",
       "traceKey": "youyu",
       "traceInfo": [
        {
         "c": "犹",
         "py": "yóu",
         "hv": "do"
        },
        {
         "c": "豫",
         "py": "yù",
         "hv": "dự"
        }
       ]
      },
      {
       "scene": "👥🤝💬",
       "full": "大家都劝他不要恨别人也不要怨自己",
       "vi": "Mọi người đều khuyên anh ấy đừng hận người khác cũng đừng oán trách bản thân",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都劝他",
         "ico": "🤝",
         "c": "v",
         "py": "dōu quàn tā",
         "hv": "đô khuyến tha"
        },
        {
         "t": "不要恨别人也不要怨自己",
         "ico": "💬",
         "c": "o",
         "py": "bùyào hèn biérén yě bùyào yuàn zìjǐ",
         "hv": "bất yếu hận biệt nhân dã bất yếu oán tự kỷ"
        }
       ],
       "traceWord": "劝",
       "py": "Dàjiā dōu quàn tā bùyào hèn biérén yě bùyào yuàn zìjǐ",
       "traceKey": "quan",
       "traceInfo": [
        {
         "c": "劝",
         "py": "quàn",
         "hv": "khuyến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "客人为什么很不耐烦？",
       "qvi": "Vì sao khách hàng rất sốt ruột?",
       "scene": "🧑⏳😒",
       "ans": "因为他等了很久",
       "opts": [
        {
         "txt": "因为他等了很久",
         "ico": "⏳",
         "py": "Yīnwèi tā děng le hěn jiǔ"
        },
        {
         "txt": "因为他刚刚到",
         "ico": "🚪",
         "py": "Yīnwèi tā gānggāng dào"
        },
        {
         "txt": "因为天气很好",
         "ico": "☀️",
         "py": "Yīnwèi tiānqì hěn hǎo"
        }
       ],
       "qpy": "Kèrén wèi shénme hěn bù nàifán?"
      },
      {
       "q": "那个孩子为什么很可怜？",
       "qvi": "Vì sao đứa trẻ đó rất đáng thương?",
       "scene": "👦😢",
       "ans": "因为他没有父母",
       "opts": [
        {
         "txt": "因为他有很多朋友",
         "ico": "👫",
         "py": "Yīnwèi tā yǒu hěn duō péngyou"
        },
        {
         "txt": "因为他没有父母",
         "ico": "😢",
         "py": "Yīnwèi tā méiyǒu fùmǔ"
        },
        {
         "txt": "因为他学习很好",
         "ico": "📚",
         "py": "Yīnwèi tā xuéxí hěn hǎo"
        }
       ],
       "qpy": "Nà gè háizi wèi shénme hěn kělián?"
      },
      {
       "q": "朋友觉得绝望的时候你会怎么说？",
       "qvi": "Khi bạn cảm thấy tuyệt vọng, bạn sẽ nói gì?",
       "scene": "🧑😞🤝",
       "ans": "我会劝他别绝望",
       "opts": [
        {
         "txt": "我会骂他一顿",
         "ico": "😠",
         "py": "Wǒ huì mà tā yī dùn"
        },
        {
         "txt": "我会马上回家",
         "ico": "🏠",
         "py": "Wǒ huì mǎshàng huí jiā"
        },
        {
         "txt": "我会劝他别绝望",
         "ico": "🤝",
         "py": "Wǒ huì quàn tā bié juéwàng"
        }
       ],
       "qpy": "Péngyou juéde juéwàng de shíhou nǐ huì zěnme shuō?"
      },
      {
       "q": "他还在抱怨你想说什么？",
       "qvi": "Anh ấy vẫn đang phàn nàn, bạn muốn nói gì?",
       "scene": "😤🙅",
       "ans": "得了别抱怨了",
       "opts": [
        {
         "txt": "明天我们去北京",
         "ico": "✈️",
         "py": "Míngtiān wǒmen qù Běijīng"
        },
        {
         "txt": "得了别抱怨了",
         "ico": "🙅",
         "py": "Déle bié bàoyuàn le"
        },
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        }
       ],
       "qpy": "Tā hái zài bàoyuàn nǐ xiǎng shuō shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): An ủi đồng nghiệp đang buồn",
      "steps": [
       "<b>Bước 1:</b> Hình dung một đồng nghiệp cứ than phiền mãi về công việc. Hãy tự nói thành tiếng để ngắt lời nhẹ nhàng: <i>\"得了别再抱怨了大家都已经很累了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin an ủi bạn bè đang buồn, thể hiện sự quan tâm: <i>\"我很心疼他因为这件事变得这么悲伤\"</i> rồi khuyên: <i>\"大家都劝他不要恨别人也不要怨自己\"</i>.",
       "<b>Bước 3:</b> Kể với đối tác một chuyện đáng tiếc của công ty bằng 2 câu, dùng <i>\"不幸\"</i> và <i>\"后悔\"</i>, ví dụ: <i>\"他很后悔昨天没有把这件事告诉我\"</i>."
      ]
     }
    },
    {
     "id": "5.7B",
     "name": "Bài 5.7B: Công dụng, lợi và hại",
     "grammar": {
      "formulas": [
       "🧑 你 + 🚫 用不着 + 🤝 这么客气",
       "🔧 这台电脑 + ⚡ 主要用来 + 🎨 做设计"
      ],
      "tip": "Cụm cố định 用不着 (yòngbuzháo, dụng bất trước) nghĩa là \"không cần, khỏi phải\": 用不着 + động từ/cụm từ. Dạng khẳng định tương ứng là 用得着 (yòngdezháo). Khác với 不用 và 不必, 用不着 mang sắc thái khẩu ngữ hơn.",
      "vn_tip": "Người Việt hay nói \"不需要 + 这么客气\" hoặc dịch \"khỏi cần\" thành 不要. Với ý \"không cần phải làm gì\", hãy dùng 用不着 + động từ. Chú ý chữ 着 trong 用不着 đọc là zháo, không phải zhe."
     },
     "chunks": [
      {
       "scene": "🧑🙅🤝",
       "full": "你用不着这么客气这点小事不算什么",
       "vi": "Bạn không cần khách sáo như vậy, chuyện nhỏ này chẳng đáng gì",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "用不着",
         "ico": "🙅",
         "c": "v",
         "py": "yòngbuzháo",
         "hv": "dụng bất trước"
        },
        {
         "t": "这么客气这点小事不算什么",
         "ico": "🤝",
         "c": "o",
         "py": "zhème kèqi zhè diǎn xiǎo shì bú suàn shénme",
         "hv": "giá ma khách khí giá điểm tiểu sự bất toán thập ma"
        }
       ],
       "traceWord": "用不着",
       "py": "Nǐ yòngbuzháo zhème kèqi zhè diǎn xiǎo shì bú suàn shénme",
       "traceKey": "yongbuzhao",
       "traceInfo": [
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        },
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "着",
         "py": "zhe",
         "hv": "trước"
        }
       ]
      },
      {
       "scene": "💻🎨📄",
       "full": "这台电脑主要用来做设计和处理文件",
       "vi": "Chiếc máy tính này chủ yếu dùng để làm thiết kế và xử lý tài liệu",
       "parts": [
        {
         "t": "这台电脑",
         "ico": "💻",
         "c": "s",
         "py": "zhè tái diànnǎo",
         "hv": "giá đài điện não"
        },
        {
         "t": "主要用来",
         "ico": "🔧",
         "c": "v",
         "py": "zhǔyào yònglái",
         "hv": "chủ yếu dụng lai"
        },
        {
         "t": "做设计和处理文件",
         "ico": "🎨",
         "c": "o",
         "py": "zuò shèjì hé chǔlǐ wénjiàn",
         "hv": "tố thiết kế hòa xử lý văn kiện"
        }
       ],
       "traceWord": "用来",
       "py": "Zhè tái diànnǎo zhǔyào yònglái zuò shèjì hé chǔlǐ wénjiàn",
       "traceKey": "yonglai",
       "traceInfo": [
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        },
        {
         "c": "来",
         "py": "lái",
         "hv": "lai"
        }
       ]
      },
      {
       "scene": "🔬🏥🏫",
       "full": "这种技术主要用于医疗和教育等很多方面",
       "vi": "Loại công nghệ này chủ yếu được dùng trong nhiều lĩnh vực như y tế và giáo dục",
       "parts": [
        {
         "t": "这种技术",
         "ico": "🔬",
         "c": "s",
         "py": "zhè zhǒng jìshù",
         "hv": "giá chủng kỹ thuật"
        },
        {
         "t": "主要用于",
         "ico": "🔧",
         "c": "v",
         "py": "zhǔyào yòngyú",
         "hv": "chủ yếu dụng vu"
        },
        {
         "t": "医疗和教育等很多方面",
         "ico": "🏥",
         "c": "o",
         "py": "yīliáo hé jiàoyù děng hěn duō fāngmiàn",
         "hv": "y liệu hòa giáo dục đẳng ngận đa phương diện"
        }
       ],
       "traceWord": "用于",
       "py": "Zhè zhǒng jìshù zhǔyào yòngyú yīliáo hé jiàoyù děng hěn duō fāngmiàn",
       "traceKey": "yongyu",
       "traceInfo": [
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "🏃💪😊",
       "full": "多运动有利于身体健康也能让人心情更好",
       "vi": "Vận động nhiều có lợi cho sức khỏe, cũng giúp con người có tâm trạng tốt hơn",
       "parts": [
        {
         "t": "多运动",
         "ico": "🏃",
         "c": "s",
         "py": "duō yùndòng",
         "hv": "đa vận động"
        },
        {
         "t": "有利于",
         "ico": "👍",
         "c": "v",
         "py": "yǒulì yú",
         "hv": "hữu lợi vu"
        },
        {
         "t": "身体健康也能让人心情更好",
         "ico": "😊",
         "c": "o",
         "py": "shēntǐ jiànkāng yě néng ràng rén xīnqíng gèng hǎo",
         "hv": "thân thể kiện khang dã năng nhượng nhân tâm tình cánh hảo"
        }
       ],
       "traceWord": "有利于",
       "py": "Duō yùndòng yǒulì yú shēntǐ jiànkāng yě néng ràng rén xīnqíng gèng hǎo",
       "traceKey": "youliyu",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "利",
         "py": "lì",
         "hv": "lợi"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "📋⏰🗂️",
       "full": "这张表格便于我们随时管理工作的时间",
       "vi": "Bảng biểu này giúp chúng tôi tiện quản lý thời gian làm việc bất cứ lúc nào",
       "parts": [
        {
         "t": "这张表格",
         "ico": "📋",
         "c": "s",
         "py": "zhè zhāng biǎogé",
         "hv": "giá trương biểu cách"
        },
        {
         "t": "便于",
         "ico": "👍",
         "c": "v",
         "py": "biànyú",
         "hv": "tiện vu"
        },
        {
         "t": "我们随时管理工作的时间",
         "ico": "⏰",
         "c": "o",
         "py": "wǒmen suíshí guǎnlǐ gōngzuò de shíjiān",
         "hv": "ngã môn tùy thời quản lý công tác đích thời gian"
        }
       ],
       "traceWord": "便于",
       "py": "Zhè zhāng biǎogé biànyú wǒmen suíshí guǎnlǐ gōngzuò de shíjiān",
       "traceKey": "bianyu",
       "traceInfo": [
        {
         "c": "便",
         "py": "biàn",
         "hv": "tiện"
        },
        {
         "c": "于",
         "py": "yú",
         "hv": "vu"
        }
       ]
      },
      {
       "scene": "🏢🚇😊",
       "full": "公司附近的交通非常便利所以大家上班都很方便",
       "vi": "Giao thông gần công ty rất thuận tiện nên mọi người đi làm đều rất dễ dàng",
       "parts": [
        {
         "t": "公司附近的交通",
         "ico": "🚇",
         "c": "s",
         "py": "gōngsī fùjìn de jiāotōng",
         "hv": "công ti phụ cận đích giao thông"
        },
        {
         "t": "非常",
         "ico": "⭐",
         "c": "v",
         "py": "fēicháng",
         "hv": "phi thường"
        },
        {
         "t": "便利所以大家上班都很方便",
         "ico": "🏢",
         "c": "o",
         "py": "biànlì suǒyǐ dàjiā shàngbān dōu hěn fāngbiàn",
         "hv": "tiện lợi sở dĩ đại gia thượng ban đô ngận phương tiện"
        }
       ],
       "traceWord": "便利",
       "py": "Gōngsī fùjìn de jiāotōng fēicháng biànlì suǒyǐ dàjiā shàngbān dōu hěn fāngbiàn",
       "traceKey": "bianli",
       "traceInfo": [
        {
         "c": "便",
         "py": "biàn",
         "hv": "tiện"
        },
        {
         "c": "利",
         "py": "lì",
         "hv": "lợi"
        }
       ]
      },
      {
       "scene": "🏢🎁👍",
       "full": "这家公司有着很好的福利和不错的工资",
       "vi": "Công ty này có phúc lợi rất tốt và mức lương khá",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "有着",
         "ico": "🎁",
         "c": "v",
         "py": "yǒuzhe",
         "hv": "hữu trước"
        },
        {
         "t": "很好的福利和不错的工资",
         "ico": "💰",
         "c": "o",
         "py": "hěn hǎo de fúlì hé bùcuò de gōngzī",
         "hv": "ngận hảo đích phúc lợi hòa bất thác đích công tư"
        }
       ],
       "traceWord": "福利",
       "py": "Zhè jiā gōngsī yǒuzhe hěn hǎo de fúlì hé bùcuò de gōngzī",
       "traceKey": "fuli",
       "traceInfo": [
        {
         "c": "福",
         "py": "fú",
         "hv": "phúc"
        },
        {
         "c": "利",
         "py": "lì",
         "hv": "lợi"
        }
       ]
      },
      {
       "scene": "🚬🫁⚠️",
       "full": "抽烟有害健康也会害了身边的人",
       "vi": "Hút thuốc có hại cho sức khỏe, cũng sẽ làm hại những người xung quanh",
       "parts": [
        {
         "t": "抽烟",
         "ico": "🚬",
         "c": "s",
         "py": "chōuyān",
         "hv": "trừu yên"
        },
        {
         "t": "有害",
         "ico": "⚠️",
         "c": "v",
         "py": "yǒu hài",
         "hv": "hữu hại"
        },
        {
         "t": "健康也会害了身边的人",
         "ico": "👥",
         "c": "o",
         "py": "jiànkāng yě huì hài le shēnbiān de rén",
         "hv": "kiện khang dã hội hại liễu thân biên đích nhân"
        }
       ],
       "traceWord": "有害",
       "py": "Chōuyān yǒu hài jiànkāng yě huì hài le shēnbiān de rén",
       "traceKey": "youhai",
       "traceInfo": [
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "害",
         "py": "hài",
         "hv": "hại"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这家店的价格怎么样？",
       "qvi": "Giá ở cửa hàng này thế nào?",
       "scene": "🏪💰👍",
       "ans": "很实惠还有优惠",
       "opts": [
        {
         "txt": "价格贵得不得了",
         "ico": "💸",
         "py": "Jiàgé guì de bùdéliǎo"
        },
        {
         "txt": "店在地铁站旁边",
         "ico": "🚇",
         "py": "Diàn zài dìtiězhàn pángbiān"
        },
        {
         "txt": "很实惠还有优惠",
         "ico": "🏷️",
         "py": "Hěn shíhuì hái yǒu yōuhuì"
        }
       ],
       "qpy": "Zhè jiā diàn de jiàgé zěnmeyàng?"
      },
      {
       "q": "这种植物为什么不能吃？",
       "qvi": "Vì sao loại cây này không thể ăn?",
       "scene": "🌿☠️",
       "ans": "因为它有毒",
       "opts": [
        {
         "txt": "因为它有毒",
         "ico": "☠️",
         "py": "Yīnwèi tā yǒu dú"
        },
        {
         "txt": "因为它很好吃",
         "ico": "😋",
         "py": "Yīnwèi tā hěn hǎochī"
        },
        {
         "txt": "因为它是红色",
         "ico": "🔴",
         "py": "Yīnwèi tā shì hóngsè"
        }
       ],
       "qpy": "Zhè zhǒng zhíwù wèi shénme bù néng chī?"
      },
      {
       "q": "他的发言怎么样？",
       "qvi": "Bài phát biểu của anh ấy thế nào?",
       "scene": "🧑🎤👏",
       "ans": "很有力大家都同意",
       "opts": [
        {
         "txt": "很少有人说话",
         "ico": "🤫",
         "py": "Hěn shǎo yǒu rén shuōhuà"
        },
        {
         "txt": "很有力大家都同意",
         "ico": "👏",
         "py": "Hěn yǒulì dàjiā dōu tóngyì"
        },
        {
         "txt": "他明天不去开会",
         "ico": "📅",
         "py": "Tā míngtiān bú qù kāihuì"
        }
       ],
       "qpy": "Tā de fāyán zěnmeyàng?"
      },
      {
       "q": "这份合同带有什么条件？",
       "qvi": "Hợp đồng này kèm theo điều kiện gì?",
       "scene": "📄🤔",
       "ans": "带有一些对我们不利的条件",
       "opts": [
        {
         "txt": "它在桌子上",
         "ico": "🪑",
         "py": "Tā zài zhuōzi shàng"
        },
        {
         "txt": "带有一些对我们不利的条件",
         "ico": "📄",
         "py": "Dài yǒuyīxiē duì wǒmen bùlì de tiáojiàn"
        },
        {
         "txt": "我们明天吃饭",
         "ico": "🍚",
         "py": "Wǒmen míngtiān chīfàn"
        }
       ],
       "qpy": "Zhè fèn hétóng dàiyǒu shénme tiáojiàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Từ chối khéo và giới thiệu công dụng",
      "steps": [
       "<b>Bước 1:</b> Khi đồng nghiệp cảm ơn quá lời, hãy đáp lại tự nhiên và nói thành tiếng: <i>\"你用不着这么客气这点小事不算什么\"</i>.",
       "<b>Bước 2:</b> Chọn một đồ vật trên bàn làm việc (máy tính, bảng biểu…) và giới thiệu công dụng của nó bằng 2 câu với <i>\"主要用来\"</i> hoặc <i>\"便于\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho bạn bè bàn về thói quen tốt và xấu, dùng <i>\"有利于\"</i> và <i>\"有害\"</i>, ví dụ: <i>\"多运动有利于身体健康\"</i> và <i>\"抽烟有害健康\"</i>."
      ]
     }
    },
    {
     "id": "5.7C",
     "name": "Bài 5.7C: Hành động, vị trí và khoảng cách",
     "grammar": {
      "formulas": [
       "🧑 他 + 🚶 走来走去",
       "🔍 我 + 找来找去 + 📱 也没有找到手机"
      ],
      "tip": "Cấu trúc bốn chữ A来A去 (A lái A qù) diễn tả một hành động lặp đi lặp lại, qua lại nhiều lần: 走来走去 (đi đi lại lại), 想来想去 (nghĩ đi nghĩ lại), 找来找去 (tìm đi tìm lại), 飞来飞去 (bay qua bay lại). A phải là động từ.",
      "vn_tip": "Người Việt hay nói \"走很多次\" hoặc \"又走又走\" để diễn tả \"đi đi lại lại\". Hãy dùng đúng khuôn A来A去 với cùng một động từ ở cả hai vị trí, và không thêm 了 vào giữa khuôn."
     },
     "chunks": [
      {
       "scene": "🧑🏢🚶",
       "full": "他在办公室走来走去想不出办法",
       "vi": "Anh ấy đi đi lại lại trong văn phòng mà không nghĩ ra cách",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在办公室",
         "ico": "🏢",
         "c": "v",
         "py": "zài bàngōngshì",
         "hv": "tại biện công thất"
        },
        {
         "t": "走来走去想不出办法",
         "ico": "🚶",
         "c": "o",
         "py": "zǒu lái zǒu qù xiǎng bù chū bànfǎ",
         "hv": "tẩu lai tẩu khứ tưởng bất xuất biện pháp"
        }
       ],
       "traceWord": "办公室",
       "py": "Tā zài bàngōngshì zǒu lái zǒu qù xiǎng bù chū bànfǎ",
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
       "scene": "🧑🔍📱",
       "full": "我找来找去也没有找到我的手机",
       "vi": "Tôi tìm đi tìm lại cũng không thấy điện thoại của mình",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "找来找去",
         "ico": "🔍",
         "c": "v",
         "py": "zhǎo lái zhǎo qù",
         "hv": "trảo lai trảo khứ"
        },
        {
         "t": "也没有找到我的手机",
         "ico": "📱",
         "c": "o",
         "py": "yě méiyǒu zhǎodào wǒ de shǒujī",
         "hv": "dã một hữu trảo đáo ngã đích thủ cơ"
        }
       ],
       "traceWord": "找到",
       "py": "Wǒ zhǎo lái zhǎo qù yě méiyǒu zhǎodào wǒ de shǒujī",
       "traceKey": "zhaodao",
       "traceInfo": [
        {
         "c": "找",
         "py": "zhǎo",
         "hv": "trảo"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "🧑➡️🚉",
       "full": "打这儿向前走大约五分钟就能看到车站",
       "vi": "Từ đây đi thẳng về phía trước khoảng năm phút là thấy nhà ga",
       "parts": [
        {
         "t": "打这儿",
         "ico": "📍",
         "c": "s",
         "py": "dǎ zhèr",
         "hv": "đả giá nhi"
        },
        {
         "t": "向前走大约五分钟",
         "ico": "➡️",
         "c": "v",
         "py": "xiàng qián zǒu dàyuē wǔ fēnzhōng",
         "hv": "hướng tiền tẩu đại ước ngũ phân chung"
        },
        {
         "t": "就能看到车站",
         "ico": "🚉",
         "c": "o",
         "py": "jiù néng kàndào chēzhàn",
         "hv": "tựu năng khán đáo xa trạm"
        }
       ],
       "traceWord": "向前",
       "py": "Dǎ zhèr xiàng qián zǒu dàyuē wǔ fēnzhōng jiù néng kàndào chēzhàn",
       "traceKey": "xiangqian",
       "traceInfo": [
        {
         "c": "向",
         "py": "xiàng",
         "hv": "hướng"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      },
      {
       "scene": "🧑🤔🏢",
       "full": "他想来想去最后还是决定返回公司工作",
       "vi": "Anh ấy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định quay về công ty làm việc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "想来想去",
         "ico": "🤔",
         "c": "v",
         "py": "xiǎng lái xiǎng qù",
         "hv": "tưởng lai tưởng khứ"
        },
        {
         "t": "最后还是决定返回公司工作",
         "ico": "🏢",
         "c": "o",
         "py": "zuìhòu háishi juédìng fǎnhuí gōngsī gōngzuò",
         "hv": "tối hậu hoàn thị quyết định phản hồi công ti công tác"
        }
       ],
       "traceWord": "返回",
       "py": "Tā xiǎng lái xiǎng qù zuìhòu háishi juédìng fǎnhuí gōngsī gōngzuò",
       "traceKey": "fanhui",
       "traceInfo": [
        {
         "c": "返",
         "py": "fǎn",
         "hv": "phản"
        },
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        }
       ]
      },
      {
       "scene": "🐦☁️🌍",
       "full": "一只鸟在空中飞来飞去不知道要去哪儿",
       "vi": "Một chú chim bay qua bay lại trên không mà không biết sẽ đi đâu",
       "parts": [
        {
         "t": "一只鸟",
         "ico": "🐦",
         "c": "s",
         "py": "yī zhǐ niǎo",
         "hv": "nhất chỉ điểu"
        },
        {
         "t": "在空中",
         "ico": "☁️",
         "c": "v",
         "py": "zài kōngzhōng",
         "hv": "tại không trung"
        },
        {
         "t": "飞来飞去不知道要去哪儿",
         "ico": "🌍",
         "c": "o",
         "py": "fēi lái fēi qù bù zhīdào yào qù nǎr",
         "hv": "phi lai phi khứ bất tri đạo yếu khứ na nhi"
        }
       ],
       "traceWord": "空中",
       "py": "Yī zhǐ niǎo zài kōngzhōng fēi lái fēi qù bù zhīdào yào qù nǎr",
       "traceKey": "kongzhong",
       "traceInfo": [
        {
         "c": "空",
         "py": "kōng",
         "hv": "không"
        },
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        }
       ]
      },
      {
       "scene": "👩‍🏫👦🚗⚠️",
       "full": "老师警告孩子不要靠近马路",
       "vi": "Cô giáo cảnh báo trẻ không được lại gần đường lớn",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "警告",
         "ico": "⚠️",
         "c": "v",
         "py": "jǐnggào",
         "hv": "cảnh cáo"
        },
        {
         "t": "孩子不要靠近马路",
         "ico": "🚗",
         "c": "o",
         "py": "háizi bùyào kàojìn mǎlù",
         "hv": "hài tử bất yếu kháo cận mã lộ"
        }
       ],
       "traceWord": "警告",
       "py": "Lǎoshī jǐnggào háizi bùyào kàojìn mǎlù",
       "traceKey": "jinggao",
       "traceInfo": [
        {
         "c": "警",
         "py": "jǐng",
         "hv": "cảnh"
        },
        {
         "c": "告",
         "py": "gào",
         "hv": "cáo"
        }
       ]
      },
      {
       "scene": "🧑🤝👥",
       "full": "他每天接触的客人不止一百个",
       "vi": "Số khách hàng anh ấy tiếp xúc mỗi ngày không chỉ có một trăm người",
       "parts": [
        {
         "t": "他每天接触的客人",
         "ico": "🧑",
         "c": "s",
         "py": "tā měi tiān jiēchù de kèrén",
         "hv": "tha mỗi thiên tiếp xúc đích khách nhân"
        },
        {
         "t": "不止",
         "ico": "➕",
         "c": "v",
         "py": "bùzhǐ",
         "hv": "bất chỉ"
        },
        {
         "t": "一百个",
         "ico": "💯",
         "c": "o",
         "py": "yī bǎi gè",
         "hv": "nhất bách cá"
        }
       ],
       "traceWord": "不止",
       "py": "Tā měi tiān jiēchù de kèrén bùzhǐ yī bǎi gè",
       "traceKey": "buzhi",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "止",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "🧑✨🔬",
       "full": "小明的举动是一次大胆的尝试",
       "vi": "Hành động của Tiểu Minh là một lần thử nghiệm táo bạo",
       "parts": [
        {
         "t": "小明的举动",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng de jǔdòng",
         "hv": "tiểu minh đích cử động"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "一次大胆的尝试",
         "ico": "✨",
         "c": "o",
         "py": "yī cì dàdǎn de chángshì",
         "hv": "nhất thứ đại đảm đích thường thí"
        }
       ],
       "traceWord": "尝试",
       "py": "Xiǎomíng de jǔdòng shì yī cì dàdǎn de chángshì",
       "traceKey": "changshi",
       "traceInfo": [
        {
         "c": "尝",
         "py": "cháng",
         "hv": "thường"
        },
        {
         "c": "试",
         "py": "shì",
         "hv": "thí"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "出国旅行必需带什么？",
       "qvi": "Đi du lịch nước ngoài nhất thiết phải mang gì?",
       "scene": "✈️🛂",
       "ans": "必需带护照",
       "opts": [
        {
         "txt": "必需带一台冰箱",
         "ico": "🧊",
         "py": "Bìxū dài yī tái bīngxiāng"
        },
        {
         "txt": "必需带护照",
         "ico": "🛂",
         "py": "Bìxū dài hùzhào"
        },
        {
         "txt": "必需带一棵树",
         "ico": "🌳",
         "py": "Bìxū dài yī kē shù"
        }
       ],
       "qpy": "Chūguó lǚxíng bìxū dài shénme?"
      },
      {
       "q": "遇到大事你会怎么办？",
       "qvi": "Gặp việc lớn bạn sẽ làm thế nào?",
       "scene": "🧑❗👔",
       "ans": "我会跟随经理的安排",
       "opts": [
        {
         "txt": "我会去商店买东西",
         "ico": "🛒",
         "py": "Wǒ huì qù shāngdiàn mǎi dōngxi"
        },
        {
         "txt": "我会跟随经理的安排",
         "ico": "👔",
         "py": "Wǒ huì gēnsuí jīnglǐ de ānpái"
        },
        {
         "txt": "我会先去睡觉",
         "ico": "😴",
         "py": "Wǒ huì xiān qù shuìjiào"
        }
       ],
       "qpy": "Yùdào dàshì nǐ huì zěnme bàn?"
      },
      {
       "q": "办公室在二楼我们怎么走？",
       "qvi": "Văn phòng ở tầng hai, chúng ta đi thế nào?",
       "scene": "🏢⬆️",
       "ans": "请向上走到二楼",
       "opts": [
        {
         "txt": "请坐火车去北京",
         "ico": "🚄",
         "py": "Qǐng zuò huǒchē qù Běijīng"
        },
        {
         "txt": "请向上走到二楼",
         "ico": "⬆️",
         "py": "Qǐng xiàngshàng zǒu dào èr lóu"
        },
        {
         "txt": "请打电话给他",
         "ico": "📞",
         "py": "Qǐng dǎ diànhuà gěi tā"
        }
       ],
       "qpy": "Bàngōngshì zài èr lóu wǒmen zěnme zǒu?"
      },
      {
       "q": "借了朋友的钱应该怎么办？",
       "qvi": "Mượn tiền của bạn thì nên làm thế nào?",
       "scene": "🤝💰",
       "ans": "有借必还",
       "opts": [
        {
         "txt": "他站在我跟前",
         "ico": "🧍",
         "py": "Tā zhàn zài wǒ gēnqián"
        },
        {
         "txt": "他的个儿很高",
         "ico": "📏",
         "py": "Tā de gèr hěn gāo"
        },
        {
         "txt": "有借必还",
         "ico": "💰",
         "py": "Yǒu jiè bì hái"
        }
       ],
       "qpy": "Jiè le péngyou de qián yīnggāi zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đường và kể chuyện lặp đi lặp lại",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn chỉ đường cho đồng nghiệp mới đến công ty. Hãy nói thành tiếng: <i>\"打这儿向前走大约五分钟就能看到车站\"</i>.",
       "<b>Bước 2:</b> Nhắn tin kể với bạn một chuyện bạn đã làm đi làm lại nhiều lần, dùng khuôn A来A去, ví dụ: <i>\"我找来找去也没有找到我的手机\"</i>.",
       "<b>Bước 3:</b> Kể với đối tác về một quyết định khó của bạn, dùng <i>\"想来想去\"</i>: <i>\"他想来想去最后还是决定返回公司工作\"</i>."
      ]
     }
    }
   ]
  },
  "5.8": {
   "lessons": [
    {
     "id": "5.8A",
     "name": "Bài 5.8A: Động từ thao tác và cấu trúc A着A着",
     "grammar": {
      "formulas": [
       "🧑 他 + 🔄 说着说着 + 💥 把手机递给了我",
       "⚽ 球 + 🔄 滚着滚着 + 🪑 就滚到了桌子下面",
       "🧑 他 + 🔄 走着走着 + 🌧️ 突然下雨了"
      ],
      "tip": "Lặp động từ rồi thêm 着 (A着A着, zhe, trước) để nói: đang làm việc A một lúc thì bỗng xảy ra việc khác. Vế sau thường có 就 (tựu), 突然 (đột nhiên), 竟然... và chủ ngữ của hai vế có thể khác nhau.",
      "vn_tip": "Người Việt hay dịch thẳng \"nói rồi nói thì\" và viết 说了说了 hoặc 说说着. Đúng là phải lặp cả 着: 说着说着, không dùng 了. Cũng đừng đặt 着 sau câu mà quên vế sau: A着A着 luôn cần một sự việc mới đi kèm."
     },
     "chunks": [
      {
       "scene": "🧑🗣️📱",
       "full": "他说着说着把手机递给了我",
       "vi": "Anh ấy đang nói thì đưa điện thoại cho tôi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "说着说着",
         "ico": "🗣️",
         "c": "v",
         "py": "shuō zhe shuō zhe",
         "hv": "thuyết trước thuyết trước"
        },
        {
         "t": "把手机递给了我",
         "ico": "📱",
         "c": "o",
         "py": "bǎ shǒujī dì gěi le wǒ",
         "hv": "bả thủ cơ đệ cấp liễu ngã"
        }
       ],
       "traceWord": "递给",
       "py": "Tā shuō zhe shuō zhe bǎ shǒujī dì gěi le wǒ",
       "traceKey": "digei",
       "traceInfo": [
        {
         "c": "递",
         "py": "dì",
         "hv": "đệ"
        },
        {
         "c": "给",
         "py": "gěi",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "⚽🔄🪑",
       "full": "球滚着滚着就滚到了桌子下面",
       "vi": "Quả bóng lăn mãi rồi lăn vào dưới gầm bàn",
       "parts": [
        {
         "t": "球",
         "ico": "⚽",
         "c": "s",
         "py": "qiú",
         "hv": "cầu"
        },
        {
         "t": "滚着滚着",
         "ico": "🔄",
         "c": "v",
         "py": "gǔn zhe gǔn zhe",
         "hv": "cổn trước cổn trước"
        },
        {
         "t": "就滚到了桌子下面",
         "ico": "🪑",
         "c": "o",
         "py": "jiù gǔn dào le zhuōzi xiàmiàn",
         "hv": "tựu cổn đáo liễu trác tử hạ diện"
        }
       ],
       "traceWord": "滚",
       "py": "Qiú gǔn zhe gǔn zhe jiù gǔn dào le zhuōzi xiàmiàn",
       "traceKey": "gun",
       "traceInfo": [
        {
         "c": "滚",
         "py": "gǔn",
         "hv": "cổn"
        }
       ]
      },
      {
       "scene": "💻⌨️💨",
       "full": "电脑用着用着突然冒起了烟",
       "vi": "Máy tính đang dùng thì bỗng bốc khói",
       "parts": [
        {
         "t": "电脑",
         "ico": "💻",
         "c": "s",
         "py": "diànnǎo",
         "hv": "điện não"
        },
        {
         "t": "用着用着",
         "ico": "⌨️",
         "c": "v",
         "py": "yòng zhe yòng zhe",
         "hv": "dụng trước dụng trước"
        },
        {
         "t": "突然冒起了烟",
         "ico": "💨",
         "c": "o",
         "py": "tūrán mào qǐ le yān",
         "hv": "đột nhiên mạo khởi liễu yên"
        }
       ],
       "traceWord": "冒",
       "py": "Diànnǎo yòng zhe yòng zhe tūrán mào qǐ le yān",
       "traceKey": "mao",
       "traceInfo": [
        {
         "c": "冒",
         "py": "mào",
         "hv": "mạo"
        }
       ]
      },
      {
       "scene": "📋⏳🚶",
       "full": "会议开着开着人就慢慢散了",
       "vi": "Cuộc họp đang diễn ra thì mọi người dần dần giải tán",
       "parts": [
        {
         "t": "会议",
         "ico": "📋",
         "c": "s",
         "py": "huìyì",
         "hv": "hội nghị"
        },
        {
         "t": "开着开着",
         "ico": "⏳",
         "c": "v",
         "py": "kāi zhe kāi zhe",
         "hv": "khai trước khai trước"
        },
        {
         "t": "人就慢慢散了",
         "ico": "🚶",
         "c": "o",
         "py": "rén jiù mànmàn sàn le",
         "hv": "nhân tựu mạn mạn tán liễu"
        }
       ],
       "traceWord": "散",
       "py": "Huìyì kāi zhe kāi zhe rén jiù mànmàn sàn le",
       "traceKey": "san",
       "traceInfo": [
        {
         "c": "散",
         "py": "sàn",
         "hv": "tán"
        }
       ]
      },
      {
       "scene": "👫🛍️👛",
       "full": "我们逛着逛着在路边拾到了一个钱包",
       "vi": "Chúng tôi đang dạo phố thì nhặt được một cái ví bên đường",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "逛着逛着",
         "ico": "🛍️",
         "c": "v",
         "py": "guàng zhe guàng zhe",
         "hv": "cuống trước cuống trước"
        },
        {
         "t": "在路边拾到了一个钱包",
         "ico": "👛",
         "c": "o",
         "py": "zài lù biān shí dào le yī gè qiánbāo",
         "hv": "tại lộ biên thập đáo liễu nhất cá tiền bao"
        }
       ],
       "traceWord": "拾",
       "py": "Wǒmen guàng zhe guàng zhe zài lù biān shí dào le yī gè qiánbāo",
       "traceKey": "shi",
       "traceInfo": [
        {
         "c": "拾",
         "py": "shí",
         "hv": "thập"
        }
       ]
      },
      {
       "scene": "🧑✍️✉️",
       "full": "他写着写着就写完了给客户的一封信",
       "vi": "Anh ấy viết một lúc là xong luôn bức thư gửi khách hàng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "写着写着",
         "ico": "✍️",
         "c": "v",
         "py": "xiě zhe xiě zhe",
         "hv": "tả trước tả trước"
        },
        {
         "t": "就写完了给客户的一封信",
         "ico": "✉️",
         "c": "o",
         "py": "jiù xiě wánle gěi kèhù de yī fēng xìn",
         "hv": "tựu tả hoàn liễu cấp khách hộ đích nhất phong tín"
        }
       ],
       "traceWord": "封",
       "py": "Tā xiě zhe xiě zhe jiù xiě wánle gěi kèhù de yī fēng xìn",
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
       "scene": "👥💬📱",
       "full": "他们吵着吵着一个人抢走了对方的手机",
       "vi": "Hai người đang cãi nhau thì một người giật điện thoại của đối phương",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "吵着吵着",
         "ico": "💬",
         "c": "v",
         "py": "chǎo zhe chǎo zhe",
         "hv": "sảo trước sảo trước"
        },
        {
         "t": "一个人抢走了对方的手机",
         "ico": "📱",
         "c": "o",
         "py": "yī gè rén qiǎng zǒu le duìfāng de shǒujī",
         "hv": "nhất cá nhân _ tẩu liễu đối phương đích thủ cơ"
        }
       ],
       "traceWord": "抢",
       "py": "Tāmen chǎo zhe chǎo zhe yī gè rén qiǎng zǒu le duìfāng de shǒujī",
       "traceKey": "qiang",
       "traceInfo": [
        {
         "c": "抢",
         "py": "qiǎng",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "🧑🌳📍",
       "full": "他在公园里绕着绕着就绕回了原来的地方",
       "vi": "Anh ấy đi vòng vòng trong công viên rồi lại quay về chỗ cũ",
       "parts": [
        {
         "t": "他在公园里",
         "ico": "🌳",
         "c": "s",
         "py": "tā zài gōngyuán lǐ",
         "hv": "tha tại công viên lý"
        },
        {
         "t": "绕着绕着",
         "ico": "🔄",
         "c": "v",
         "py": "rào zhe rào zhe",
         "hv": "nhiễu trước nhiễu trước"
        },
        {
         "t": "就绕回了原来的地方",
         "ico": "📍",
         "c": "o",
         "py": "jiù rào huí le yuánlái de dìfang",
         "hv": "tựu nhiễu hồi liễu nguyên lai đích địa phương"
        }
       ],
       "traceWord": "绕",
       "py": "Tā zài gōngyuán lǐ rào zhe rào zhe jiù rào huí le yuánlái de dìfang",
       "traceKey": "rao",
       "traceInfo": [
        {
         "c": "绕",
         "py": "rào",
         "hv": "nhiễu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的牙疼得厉害吗？",
       "qvi": "Răng bạn đau dữ lắm à?",
       "scene": "🦷😣🧑‍⚕️",
       "ans": "很疼医生说要把这颗牙拔掉",
       "opts": [
        {
         "txt": "我每天早上都喝牛奶",
         "ico": "🥛",
         "py": "Wǒ měi tiān zǎoshang dōu hē niúnǎi"
        },
        {
         "txt": "很疼医生说要把这颗牙拔掉",
         "ico": "🦷",
         "py": "Hěn téng yīshēng shuō yào bǎ zhè kē yá bá diào"
        },
        {
         "txt": "请把那份文件递过来",
         "ico": "📄",
         "py": "Qǐng bǎ nà fèn wénjiàn dì guòlái"
        }
       ],
       "qpy": "Nǐ de yá téng de lìhai ma?"
      },
      {
       "q": "早上的地铁里人多吗？",
       "qvi": "Buổi sáng tàu điện ngầm đông không?",
       "scene": "🚇👥",
       "ans": "非常多我被挤得几乎站不住",
       "opts": [
        {
         "txt": "我昨天去超市买了面包",
         "ico": "🍞",
         "py": "Wǒ zuótiān qù chāoshì mǎi le miànbāo"
        },
        {
         "txt": "他明天要去北京出差",
         "ico": "✈️",
         "py": "Tā míngtiān yào qù Běijīng chūchāi"
        },
        {
         "txt": "非常多我被挤得几乎站不住",
         "ico": "🚇",
         "py": "Fēicháng duō wǒ bèi jǐ de jīhū zhàn bú zhù"
        }
       ],
       "qpy": "Zǎoshang de dìtiě lǐ rén duō ma?"
      },
      {
       "q": "你为什么不吃那块肉了？",
       "qvi": "Sao bạn không ăn miếng thịt đó nữa?",
       "scene": "🥩😖",
       "ans": "那块肉太咸了所以我吐了出来",
       "opts": [
        {
         "txt": "那块肉太咸了所以我吐了出来",
         "ico": "🤮",
         "py": "Nà kuài ròu tài xián le suǒyǐ wǒ tǔ le chūlái"
        },
        {
         "txt": "我昨天去了医院",
         "ico": "🏥",
         "py": "Wǒ zuótiān qù le yīyuàn"
        },
        {
         "txt": "他喜欢看电影",
         "ico": "🎬",
         "py": "Tā xǐhuan kàn diànyǐng"
        }
       ],
       "qpy": "Nǐ wèi shénme bù chī nà kuài ròu le?"
      },
      {
       "q": "垃圾应该怎么处理？",
       "qvi": "Rác nên xử lý thế nào?",
       "scene": "🗑️❓",
       "ans": "不能随便扔在路边",
       "opts": [
        {
         "txt": "我们周末去山上摘苹果",
         "ico": "🍎",
         "py": "Wǒmen zhōumò qù shān shàng zhāi píngguǒ"
        },
        {
         "txt": "他开车闯了红灯被罚款了",
         "ico": "🚦",
         "py": "Tā kāichē chuǎng le hóng dēng bèi fákuǎn le"
        },
        {
         "txt": "不能随便扔在路边",
         "ico": "🗑️",
         "py": "Bù néng suíbiàn rēng zài lù biān"
        }
       ],
       "qpy": "Lājī yīnggāi zěnme chǔlǐ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể lại một chuyện bất ngờ ở văn phòng",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một chuyện bất ngờ đã xảy ra khi bạn đang làm việc (họp, viết thư, dùng máy tính...). Nói thành tiếng 3 câu theo mẫu <i>\"他说着说着把手机递给了我\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp kể một việc xảy ra giữa chừng, ví dụ <i>\"会议开着开着人就慢慢散了\"</i> hoặc <i>\"电脑用着用着突然冒起了烟\"</i>.",
       "<b>Bước 3:</b> Kể một câu chuyện ngắn 4 câu về lần đi dạo hoặc đi làm của bạn, mỗi câu dùng một động từ lặp A着A着 khác nhau, vế sau có 就 hoặc 突然."
      ]
     }
    },
    {
     "id": "5.8B",
     "name": "Bài 5.8B: May rủi, giải trí và cấu trúc 没A没B",
     "grammar": {
      "formulas": [
       "🏢 公司现在 + 💸 没人没钱 + 😣 情况非常糟糕",
       "🧑 我 + 🌙 没日没夜地工作 + ⏰ 连歇一会儿的时间都没有",
       "🧑 他 + 🔁 忙得没完没了 + 😌 难得闲下来享受一下生活"
      ],
      "tip": "Cấu trúc 没A没B (méi A méi B, một, một) dùng cho thành ngữ như 没大没小 (không lớn không nhỏ, thiếu lễ phép), 没完没了 (không dứt), 没日没夜 (ngày đêm không nghỉ), 没轻没重 (không biết nặng nhẹ). Cũng có thể ghép tự do: 没钱没人 = không tiền không người, thường nhấn mạnh sự thiếu thốn hoặc mức độ quá đà.",
      "vn_tip": "Người Việt hay dịch \"không A không B\" thành 不A不B (ví dụ 不大不小 chỉ có nghĩa vừa vặn). Với ý \"thiếu cả hai\" hoặc \"không có chừng mực\", phải dùng 没A没B. Ngoài ra không nói 没有A没有B trong thành ngữ cố định, chỉ giữ 没 một âm tiết."
     },
     "chunks": [
      {
       "scene": "🏢💸😣",
       "full": "公司现在没人没钱情况非常糟糕",
       "vi": "Công ty bây giờ không người không tiền, tình hình rất tồi tệ",
       "parts": [
        {
         "t": "公司现在",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī xiànzài",
         "hv": "công ti hiện tại"
        },
        {
         "t": "没人没钱",
         "ico": "💸",
         "c": "v",
         "py": "méi rén méi qián",
         "hv": "một nhân một tiền"
        },
        {
         "t": "情况非常糟糕",
         "ico": "😣",
         "c": "o",
         "py": "qíngkuàng fēicháng zāogāo",
         "hv": "tình huống phi thường tao cao"
        }
       ],
       "traceWord": "糟糕",
       "py": "Gōngsī xiànzài méi rén méi qián qíngkuàng fēicháng zāogāo",
       "traceKey": "zaogao",
       "traceInfo": [
        {
         "c": "糟",
         "py": "zāo",
         "hv": "tao"
        },
        {
         "c": "糕",
         "py": "gāo",
         "hv": "cao"
        }
       ]
      },
      {
       "scene": "👦🗣️🙅",
       "full": "孩子说话没大没小是一种不良习惯",
       "vi": "Trẻ con nói năng không lớn không nhỏ là một thói quen xấu",
       "parts": [
        {
         "t": "孩子说话没大没小",
         "ico": "👦",
         "c": "s",
         "py": "háizi shuōhuà méi dà méi xiǎo",
         "hv": "hài tử thuyết thoại một đại một tiểu"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "一种不良习惯",
         "ico": "🙅",
         "c": "o",
         "py": "yī zhǒng bùliáng xíguàn",
         "hv": "nhất chủng bất lương tập quán"
        }
       ],
       "traceWord": "不良",
       "py": "Háizi shuōhuà méi dà méi xiǎo shì yī zhǒng bùliáng xíguàn",
       "traceKey": "buliang",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "良",
         "py": "liáng",
         "hv": "lương"
        }
       ]
      },
      {
       "scene": "🧑🍺😵",
       "full": "他没轻没重地喝了很多啤酒结果醉了",
       "vi": "Anh ấy uống bia không biết chừng mực, kết quả là say",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "没轻没重地喝了很多啤酒",
         "ico": "🍺",
         "c": "v",
         "py": "méi qīng méi zhòng de hē le hěn duō píjiǔ",
         "hv": "một khinh một trọng địa hát liễu ngận đa bi tửu"
        },
        {
         "t": "结果醉了",
         "ico": "😵",
         "c": "o",
         "py": "jiéguǒ zuì le",
         "hv": "kết quả túy liễu"
        }
       ],
       "traceWord": "醉",
       "py": "Tā méi qīng méi zhòng de hē le hěn duō píjiǔ jiéguǒ zuì le",
       "traceKey": "zui",
       "traceInfo": [
        {
         "c": "醉",
         "py": "zuì",
         "hv": "túy"
        }
       ]
      },
      {
       "scene": "📅😌🕒",
       "full": "周末没人管没人问我可以随意安排时间",
       "vi": "Cuối tuần không ai quản không ai hỏi, tôi có thể sắp xếp thời gian tùy ý",
       "parts": [
        {
         "t": "周末",
         "ico": "📅",
         "c": "s",
         "py": "zhōumò",
         "hv": "chu mạt"
        },
        {
         "t": "没人管没人问",
         "ico": "😌",
         "c": "v",
         "py": "méi rén guǎn méi rén wèn",
         "hv": "một nhân quản một nhân vấn"
        },
        {
         "t": "我可以随意安排时间",
         "ico": "🕒",
         "c": "o",
         "py": "wǒ kěyǐ suíyì ānpái shíjiān",
         "hv": "ngã khả dĩ tùy ý an bài thời gian"
        }
       ],
       "traceWord": "随意",
       "py": "Zhōumò méi rén guǎn méi rén wèn wǒ kěyǐ suíyì ānpái shíjiān",
       "traceKey": "suiyi",
       "traceInfo": [
        {
         "c": "随",
         "py": "suí",
         "hv": "tùy"
        },
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        }
       ]
      },
      {
       "scene": "🧑🌙💼",
       "full": "我没日没夜地工作连歇一会儿的时间都没有",
       "vi": "Tôi làm việc ngày đêm, ngay cả thời gian nghỉ một lát cũng không có",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "没日没夜地工作",
         "ico": "🌙",
         "c": "v",
         "py": "méi rì méi yè de gōngzuò",
         "hv": "một nhật một dạ địa công tác"
        },
        {
         "t": "连歇一会儿的时间都没有",
         "ico": "⏰",
         "c": "o",
         "py": "lián xiē yīhuìr de shíjiān dōu méiyǒu",
         "hv": "liên hiết nhất hội nhi đích thời gian đô một hữu"
        }
       ],
       "traceWord": "歇",
       "py": "Wǒ méi rì méi yè de gōngzuò lián xiē yīhuìr de shíjiān dōu méiyǒu",
       "traceKey": "xie",
       "traceInfo": [
        {
         "c": "歇",
         "py": "xiē",
         "hv": "hiết"
        }
       ]
      },
      {
       "scene": "🧑🙏👻",
       "full": "他觉得世界上没鬼没神所以从来不迷信",
       "vi": "Anh ấy cho rằng trên đời không có ma không có thần nên chưa bao giờ mê tín",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "觉得世界上没鬼没神",
         "ico": "👻",
         "c": "v",
         "py": "juéde shìjiè shàng méi guǐ méi shén",
         "hv": "giác đắc thế giới thượng một quỷ một thần"
        },
        {
         "t": "所以从来不迷信",
         "ico": "🙏",
         "c": "o",
         "py": "suǒyǐ cónglái bù míxìn",
         "hv": "sở dĩ tòng lai bất mê tín"
        }
       ],
       "traceWord": "迷信",
       "py": "Tā juéde shìjiè shàng méi guǐ méi shén suǒyǐ cónglái bù míxìn",
       "traceKey": "mixin",
       "traceInfo": [
        {
         "c": "迷",
         "py": "mí",
         "hv": "mê"
        },
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        }
       ]
      },
      {
       "scene": "👥💪🏆",
       "full": "我们没钱没经验但是大家一起拼一拼也会成功",
       "vi": "Chúng tôi không tiền không kinh nghiệm nhưng mọi người cùng cố gắng cũng sẽ thành công",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "没钱没经验",
         "ico": "💪",
         "c": "v",
         "py": "méi qián méi jīngyàn",
         "hv": "một tiền một kinh nghiệm"
        },
        {
         "t": "但是大家一起拼一拼也会成功",
         "ico": "🏆",
         "c": "o",
         "py": "dànshì dàjiā yīqǐ pīn yī pīn yě huì chénggōng",
         "hv": "đãn thị đại gia nhất khởi bính nhất bính dã hội thành công"
        }
       ],
       "traceWord": "拼",
       "py": "Wǒmen méi qián méi jīngyàn dànshì dàjiā yīqǐ pīn yī pīn yě huì chénggōng",
       "traceKey": "pin",
       "traceInfo": [
        {
         "c": "拼",
         "py": "pīn",
         "hv": "bính"
        }
       ]
      },
      {
       "scene": "🧑😌🏖️",
       "full": "他忙得没完没了难得闲下来享受一下生活",
       "vi": "Anh ấy bận không dứt, hiếm khi rảnh rỗi để tận hưởng cuộc sống một chút",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "忙得没完没了",
         "ico": "🔁",
         "c": "v",
         "py": "máng de méi wán méi le",
         "hv": "mang đắc một hoàn một liễu"
        },
        {
         "t": "难得闲下来享受一下生活",
         "ico": "🏖️",
         "c": "o",
         "py": "nándé xián xiàlái xiǎngshòu yī xià shēnghuó",
         "hv": "nan đắc nhàn hạ lai hưởng thụ nhất hạ sinh hoạt"
        }
       ],
       "traceWord": "享受",
       "py": "Tā máng de méi wán méi le nándé xián xiàlái xiǎngshòu yī xià shēnghuó",
       "traceKey": "xiangshou",
       "traceInfo": [
        {
         "c": "享",
         "py": "xiǎng",
         "hv": "hưởng"
        },
        {
         "c": "受",
         "py": "shòu",
         "hv": "thụ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "明天我要去面试了，我很紧张。",
       "qvi": "Ngày mai tôi đi phỏng vấn, tôi rất căng thẳng.",
       "scene": "🧑💼😰",
       "ans": "别紧张祝你好运",
       "opts": [
        {
         "txt": "今天的天气真糟",
         "ico": "🌧️",
         "py": "Jīntiān de tiānqì zhēn zāo"
        },
        {
         "txt": "别紧张祝你好运",
         "ico": "🍀",
         "py": "Bié jǐnzhāng zhù nǐ hǎoyùn"
        },
        {
         "txt": "他每天坐地铁上班",
         "ico": "🚇",
         "py": "Tā měi tiān zuò dìtiě shàngbān"
        }
       ],
       "qpy": "Míngtiān wǒ yào qù miànshì le wǒ hěn jǐnzhāng"
      },
      {
       "q": "你的奶茶里加了什么？",
       "qvi": "Trà sữa của bạn có thêm gì vậy?",
       "scene": "🧋❓",
       "ans": "加了珍珠和牛奶",
       "opts": [
        {
         "txt": "加了白菜和猪肉",
         "ico": "🥬",
         "py": "Jiā le báicài hé zhū ròu"
        },
        {
         "txt": "我们明天去北京出差",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng chūchāi"
        },
        {
         "txt": "加了珍珠和牛奶",
         "ico": "🧋",
         "py": "Jiā le zhēnzhū hé niúnǎi"
        }
       ],
       "qpy": "Nǐ de nǎichá lǐ jiā le shénme?"
      },
      {
       "q": "我一个人完成了三个项目。",
       "qvi": "Một mình tôi đã hoàn thành ba dự án.",
       "scene": "🧑📁👍",
       "ans": "你真牛",
       "opts": [
        {
         "txt": "他昨天没来上班",
         "ico": "🙅",
         "py": "Tā zuótiān méi lái shàngbān"
        },
        {
         "txt": "今天的天气很热",
         "ico": "☀️",
         "py": "Jīntiān de tiānqì hěn rè"
        },
        {
         "txt": "你真牛",
         "ico": "👍",
         "py": "Nǐ zhēn niú"
        }
       ],
       "qpy": "Wǒ yī gè rén wánchéng le sān gè xiàngmù"
      },
      {
       "q": "你怎么又回家了？",
       "qvi": "Sao bạn lại về nhà nữa vậy?",
       "scene": "🏠📱❓",
       "ans": "我把手机落在家里了",
       "opts": [
        {
         "txt": "我认错了路走远了",
         "ico": "🗺️",
         "py": "Wǒ rèn cuò le lù zǒu yuǎn le"
        },
        {
         "txt": "我把手机落在家里了",
         "ico": "📱",
         "py": "Wǒ bǎ shǒujī luò zài jiā li le"
        },
        {
         "txt": "我们明天一起去爬山",
         "ico": "⛰️",
         "py": "Wǒmen míngtiān yīqǐ qù pá shān"
        }
       ],
       "qpy": "Nǐ zěnme yòu huí jiā le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Than thở và động viên đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp than về khối lượng công việc dạo này, dùng <i>\"我没日没夜地工作连歇一会儿的时间都没有\"</i> và thay bằng tình huống thật của bạn.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu về điều kiện khó khăn của dự án với mẫu 没A没B, ví dụ <i>\"我们没钱没经验但是大家一起拼一拼也会成功\"</i>.",
       "<b>Bước 3:</b> Tưởng tượng đồng nghiệp sắp đi phỏng vấn, hãy động viên bằng <i>\"别紧张祝你好运\"</i> và nói thêm 2 câu về kế hoạch nghỉ ngơi cuối tuần của bạn."
      ]
     }
    },
    {
     "id": "5.8C",
     "name": "Bài 5.8C: Công việc, khách hàng và cấu trúc 说A就A",
     "grammar": {
      "formulas": [
       "🧑 我们 + ⚡ 说干就干 + 🎯 一定要把新项目搞好",
       "🌐 网络 + 🔁 说恢复就恢复 + 😮‍💨 大家都松了一口气",
       "🧑 用户 + ⚡ 说退就退 + 📈 所以我们必须提高服务质量"
      ],
      "tip": "Cấu trúc 说A就A (shuō A jiù A, thuyết ... tựu ...) diễn tả việc làm ngay lập tức, không do dự hoặc thay đổi đột ngột: 说干就干 (nói làm là làm), 说走就走 (nói đi là đi), 说变就变 (nói đổi là đổi). Hai chỗ A là cùng một động từ hoặc cụm động từ ngắn, và thường dùng được cho cả tích cực lẫn phàn nàn.",
      "vn_tip": "Người Việt hay nói \"nói làm là làm\" thành 说做就做了 hoặc 说了就做. Đúng là giữ nguyên khung 说A就A, thường không thêm 了 ở giữa, và 就 phải đứng ngay trước động từ lặp. Đừng dùng 就 thay cho 才: 说A就A không mang nghĩa \"mãi mới\"."
     },
     "chunks": [
      {
       "scene": "👥💪📁",
       "full": "我们说干就干一定要把新项目搞好",
       "vi": "Chúng ta nói làm là làm, nhất định phải làm tốt dự án mới",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "说干就干",
         "ico": "💪",
         "c": "v",
         "py": "shuō gàn jiù gàn",
         "hv": "thuyết cán tựu cán"
        },
        {
         "t": "一定要把新项目搞好",
         "ico": "📁",
         "c": "o",
         "py": "yīdìng yào bǎ xīn xiàngmù gǎohǎo",
         "hv": "nhất định yếu bả tân hạng mục cảo hảo"
        }
       ],
       "traceWord": "搞好",
       "py": "Wǒmen shuō gàn jiù gàn yīdìng yào bǎ xīn xiàngmù gǎohǎo",
       "traceKey": "gaohao",
       "traceInfo": [
        {
         "c": "搞",
         "py": "gǎo",
         "hv": "cảo"
        },
        {
         "c": "好",
         "py": "hǎo",
         "hv": "hảo"
        }
       ]
      },
      {
       "scene": "🌐🔌😮‍💨",
       "full": "网络说恢复就恢复大家都松了一口气",
       "vi": "Mạng nói có lại là có lại ngay, mọi người đều thở phào",
       "parts": [
        {
         "t": "网络",
         "ico": "🌐",
         "c": "s",
         "py": "wǎngluò",
         "hv": "võng lạc"
        },
        {
         "t": "说恢复就恢复",
         "ico": "🔌",
         "c": "v",
         "py": "shuō huīfù jiù huīfù",
         "hv": "thuyết khôi phục tựu khôi phục"
        },
        {
         "t": "大家都松了一口气",
         "ico": "😮‍💨",
         "c": "o",
         "py": "dàjiā dōu sōng le yīkǒuqì",
         "hv": "đại gia đô tùng liễu nhất khẩu khí"
        }
       ],
       "traceWord": "恢复",
       "py": "Wǎngluò shuō huīfù jiù huīfù dàjiā dōu sōng le yīkǒuqì",
       "traceKey": "huifu",
       "traceInfo": [
        {
         "c": "恢",
         "py": "huī",
         "hv": "khôi"
        },
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "🙋📦🔙",
       "full": "用户说退就退所以我们必须提高服务质量",
       "vi": "Người dùng nói trả là trả, vì vậy chúng ta phải nâng cao chất lượng dịch vụ",
       "parts": [
        {
         "t": "用户",
         "ico": "🙋",
         "c": "s",
         "py": "yònghù",
         "hv": "dụng hộ"
        },
        {
         "t": "说退就退",
         "ico": "🔙",
         "c": "v",
         "py": "shuō tuì jiù tuì",
         "hv": "thuyết thoái tựu thoái"
        },
        {
         "t": "所以我们必须提高服务质量",
         "ico": "📈",
         "c": "o",
         "py": "suǒyǐ wǒmen bìxū tígāo fúwù zhìliàng",
         "hv": "sở dĩ ngã môn tất tu đề cao phục vụ chất lượng"
        }
       ],
       "traceWord": "用户",
       "py": "Yònghù shuō tuì jiù tuì suǒyǐ wǒmen bìxū tígāo fúwù zhìliàng",
       "traceKey": "yonghu",
       "traceInfo": [
        {
         "c": "用",
         "py": "yòng",
         "hv": "dụng"
        },
        {
         "c": "户",
         "py": "hù",
         "hv": "hộ"
        }
       ]
      },
      {
       "scene": "👥💡🔍",
       "full": "我们说试就试看看这个办法能不能起到作用",
       "vi": "Chúng ta nói thử là thử, xem cách này có phát huy tác dụng không",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "说试就试",
         "ico": "💡",
         "c": "v",
         "py": "shuō shì jiù shì",
         "hv": "thuyết thí tựu thí"
        },
        {
         "t": "看看这个办法能不能起到作用",
         "ico": "🔍",
         "c": "o",
         "py": "kàn kàn zhè gè bànfǎ néng bu néng qǐdào zuòyòng",
         "hv": "khán khán giá cá biện pháp năng bất năng khởi đáo tác dụng"
        }
       ],
       "traceWord": "起到",
       "py": "Wǒmen shuō shì jiù shì kàn kàn zhè gè bànfǎ néng bu néng qǐdào zuòyòng",
       "traceKey": "qidao",
       "traceInfo": [
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        },
        {
         "c": "到",
         "py": "dào",
         "hv": "đáo"
        }
       ]
      },
      {
       "scene": "👷🔧💻",
       "full": "师傅说动手就动手不到十分钟就修好了电脑",
       "vi": "Thợ nói bắt tay vào là làm ngay, chưa đến mười phút đã sửa xong máy tính",
       "parts": [
        {
         "t": "师傅",
         "ico": "👷",
         "c": "s",
         "py": "shīfu",
         "hv": "sư phó"
        },
        {
         "t": "说动手就动手",
         "ico": "🔧",
         "c": "v",
         "py": "shuō dòngshǒu jiù dòngshǒu",
         "hv": "thuyết động thủ tựu động thủ"
        },
        {
         "t": "不到十分钟就修好了电脑",
         "ico": "💻",
         "c": "o",
         "py": "bú dào shí fēnzhōng jiù xiū hǎo le diànnǎo",
         "hv": "bất đáo thập phân chung tựu tu hảo liễu điện não"
        }
       ],
       "traceWord": "动手",
       "py": "Shīfu shuō dòngshǒu jiù dòngshǒu bú dào shí fēnzhōng jiù xiū hǎo le diànnǎo",
       "traceKey": "dongshou",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🤝❌📉",
       "full": "这位客户说取消就取消我们的业务受到了影响",
       "vi": "Vị khách hàng này nói hủy là hủy, công việc kinh doanh của chúng ta bị ảnh hưởng",
       "parts": [
        {
         "t": "这位客户",
         "ico": "🤝",
         "c": "s",
         "py": "zhè wèi kèhù",
         "hv": "giá vị khách hộ"
        },
        {
         "t": "说取消就取消",
         "ico": "❌",
         "c": "v",
         "py": "shuō qǔxiāo jiù qǔxiāo",
         "hv": "thuyết thủ tiêu tựu thủ tiêu"
        },
        {
         "t": "我们的业务受到了影响",
         "ico": "📉",
         "c": "o",
         "py": "wǒmen de yèwù shòudào le yǐngxiǎng",
         "hv": "ngã môn đích nghiệp vụ thụ đáo liễu ảnh hưởng"
        }
       ],
       "traceWord": "业务",
       "py": "Zhè wèi kèhù shuō qǔxiāo jiù qǔxiāo wǒmen de yèwù shòudào le yǐngxiǎng",
       "traceKey": "yewu",
       "traceInfo": [
        {
         "c": "业",
         "py": "yè",
         "hv": "nghiệp"
        },
        {
         "c": "务",
         "py": "wù",
         "hv": "vụ"
        }
       ]
      },
      {
       "scene": "🛒🔄🏢",
       "full": "消费者说变就变所以公司之间的竞争越来越激烈",
       "vi": "Người tiêu dùng nói đổi là đổi, nên cạnh tranh giữa các công ty ngày càng gay gắt",
       "parts": [
        {
         "t": "消费者",
         "ico": "🛒",
         "c": "s",
         "py": "xiāofèizhě",
         "hv": "tiêu phí giả"
        },
        {
         "t": "说变就变",
         "ico": "🔄",
         "c": "v",
         "py": "shuō biàn jiù biàn",
         "hv": "thuyết biến tựu biến"
        },
        {
         "t": "所以公司之间的竞争越来越激烈",
         "ico": "🏢",
         "c": "o",
         "py": "suǒyǐ gōngsī zhījiān de jìngzhēng yuè lái yuè jīliè",
         "hv": "sở dĩ công ti chi gian đích cạnh tranh việt lai việt kích liệt"
        }
       ],
       "traceWord": "竞争",
       "py": "Xiāofèizhě shuō biàn jiù biàn suǒyǐ gōngsī zhījiān de jìngzhēng yuè lái yuè jīliè",
       "traceKey": "jingzheng",
       "traceInfo": [
        {
         "c": "竞",
         "py": "jìng",
         "hv": "cạnh"
        },
        {
         "c": "争",
         "py": "zhēng",
         "hv": "tranh"
        }
       ]
      },
      {
       "scene": "🏢🎁🙌",
       "full": "公司说发奖励就发奖励在工作日就送到了每个人手里",
       "vi": "Công ty nói phát thưởng là phát thưởng, ngay trong ngày làm việc đã đến tay từng người",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "说发奖励就发奖励",
         "ico": "🎁",
         "c": "v",
         "py": "shuō fā jiǎnglì jiù fā jiǎnglì",
         "hv": "thuyết phát tưởng lệ tựu phát tưởng lệ"
        },
        {
         "t": "在工作日就送到了每个人手里",
         "ico": "🙌",
         "c": "o",
         "py": "zài gōngzuòrì jiù sòngdào le měi gè rén shǒu li",
         "hv": "tại công tác nhật tựu tống đáo liễu mỗi cá nhân thủ lý"
        }
       ],
       "traceWord": "奖励",
       "py": "Gōngsī shuō fā jiǎnglì jiù fā jiǎnglì zài gōngzuòrì jiù sòngdào le měi gè rén shǒu li",
       "traceKey": "jiangli",
       "traceInfo": [
        {
         "c": "奖",
         "py": "jiǎng",
         "hv": "tưởng"
        },
        {
         "c": "励",
         "py": "lì",
         "hv": "lệ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这些菜没吃完怎么办？",
       "qvi": "Những món này ăn chưa hết thì làm sao?",
       "scene": "🍱❓",
       "ans": "请帮我们把菜打包",
       "opts": [
        {
         "txt": "他在银行工作了十年",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò le shí nián"
        },
        {
         "txt": "请帮我们把菜打包",
         "ico": "🥡",
         "py": "Qǐng bāng wǒmen bǎ cài dǎbāo"
        },
        {
         "txt": "我们明天去北京出差",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng chūchāi"
        }
       ],
       "qpy": "Zhèxiē cài méi chī wán zěnme bàn?"
      },
      {
       "q": "你以后想做什么工作？",
       "qvi": "Sau này bạn muốn làm công việc gì?",
       "scene": "🧑💭🏭",
       "ans": "我想继承父亲的生意",
       "opts": [
        {
         "txt": "他把时间搞错了",
         "ico": "⏰",
         "py": "Tā bǎ shíjiān gǎo cuò le"
        },
        {
         "txt": "今天的天气非常热",
         "ico": "☀️",
         "py": "Jīntiān de tiānqì fēicháng rè"
        },
        {
         "txt": "我想继承父亲的生意",
         "ico": "🏭",
         "py": "Wǒ xiǎng jìchéng fùqīn de shēngyi"
        }
       ],
       "qpy": "Nǐ yǐhòu xiǎng zuò shénme gōngzuò?"
      },
      {
       "q": "你们公司每天工作多长时间？",
       "qvi": "Công ty bạn mỗi ngày làm việc bao lâu?",
       "scene": "🏢⏰❓",
       "ans": "每天的劳动时间是八个小时",
       "opts": [
        {
         "txt": "每天的劳动时间是八个小时",
         "ico": "⏰",
         "py": "Měi tiān de láodòng shíjiān shì bā gè xiǎoshí"
        },
        {
         "txt": "我们公司在北京",
         "ico": "📍",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "我昨天坐地铁回家了",
         "ico": "🚇",
         "py": "Wǒ zuótiān zuò dìtiě huí jiā le"
        }
       ],
       "qpy": "Nǐmen gōngsī měi tiān gōngzuò duō cháng shíjiān?"
      },
      {
       "q": "你们什么时候开始做这个项目？",
       "qvi": "Khi nào các bạn bắt đầu làm dự án này?",
       "scene": "📁🗓️❓",
       "ans": "说干就干明天就开始",
       "opts": [
        {
         "txt": "我喜欢喝红茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē hóngchá"
        },
        {
         "txt": "说干就干明天就开始",
         "ico": "💪",
         "py": "Shuō gàn jiù gàn míngtiān jiù kāishǐ"
        },
        {
         "txt": "他已经吃过早饭了",
         "ico": "🍚",
         "py": "Tā yǐjīng chī guò zǎofàn le"
        }
       ],
       "qpy": "Nǐmen shénme shíhou kāishǐ zuò zhè gè xiàngmù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Họp nhanh với nhóm về khách hàng",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho nhóm đề xuất bắt đầu một việc ngay, dùng <i>\"我们说干就干一定要把新项目搞好\"</i> và thay bằng dự án của bạn.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu về khách hàng hoặc người dùng thay đổi nhanh, theo mẫu <i>\"消费者说变就变所以公司之间的竞争越来越激烈\"</i>.",
       "<b>Bước 3:</b> Gọi điện (hoặc tự nói) cho đồng nghiệp hỏi về công việc trong ngày làm việc, dùng <i>\"你们什么时候开始做这个项目？\"</i> và trả lời bằng <i>\"说干就干明天就开始\"</i>."
      ]
     }
    }
   ]
  },
  "5.9": {
   "lessons": [
    {
     "id": "5.9A",
     "name": "Bài 5.9A: Thực phẩm và nông sản",
     "grammar": {
      "formulas": [
       "🏪 超市里 + 🍎 有梨 + 🍰 有蛋糕",
       "🍽 桌子上 + 🌭 有香肠 + 🍇 有葡萄",
       "🥔 市场里 + 🥬 有土豆 + 🍅 有西红柿"
      ],
      "tip": "Mẫu 有A有B (yǒu A yǒu B, hữu) dùng để liệt kê hai thứ cùng có ở một nơi: địa điểm + 有 + A + 有 + B. Nghĩa là \"có A có B\", gợi cảm giác đa dạng, đầy đủ. Chữ 有 phải lặp lại trước cả A và B, không bỏ chữ 有 thứ hai.",
      "vn_tip": "Người Việt hay nói \"有梨和桃\" hoặc chỉ viết \"有梨桃\" vì tiếng Việt nói \"có lê, có đào\" rất tự nhiên. Muốn nhấn mạnh sự phong phú theo kiểu 有A有B thì phải nhắc lại 有: 有梨有桃. Không dùng 在 thay cho 有 khi nói \"ở đó có\"."
     },
     "chunks": [
      {
       "scene": "🍐🍑🪑",
       "full": "桌子上有梨有桃都很新鲜",
       "vi": "Trên bàn có lê có đào, đều rất tươi",
       "parts": [
        {
         "t": "桌子上",
         "ico": "🪑",
         "c": "s",
         "py": "zhuōzi shàng",
         "hv": "trác tử thượng"
        },
        {
         "t": "有梨有桃",
         "ico": "🍐",
         "c": "v",
         "py": "yǒu lí yǒu táo",
         "hv": "hữu lê hữu đào"
        },
        {
         "t": "都很新鲜",
         "ico": "✨",
         "c": "o",
         "py": "dōu hěn xīnxiān",
         "hv": "đô ngận tân tiên"
        }
       ],
       "traceWord": "梨",
       "py": "Zhuōzi shàng yǒu lí yǒu táo dōu hěn xīnxiān",
       "traceKey": "li",
       "traceInfo": [
        {
         "c": "梨",
         "py": "lí",
         "hv": "lê"
        }
       ]
      },
      {
       "scene": "🏠🍳🔪",
       "full": "家里有锅有刀杀鱼很方便",
       "vi": "Trong nhà có nồi và dao nên mổ cá rất tiện",
       "parts": [
        {
         "t": "家里",
         "ico": "🏠",
         "c": "s",
         "py": "jiā li",
         "hv": "gia lý"
        },
        {
         "t": "有锅有刀",
         "ico": "🍳",
         "c": "v",
         "py": "yǒu guō yǒu dāo",
         "hv": "hữu oa hữu đao"
        },
        {
         "t": "杀鱼很方便",
         "ico": "👍",
         "c": "o",
         "py": "shā yú hěn fāngbiàn",
         "hv": "sát ngư ngận phương tiện"
        }
       ],
       "traceWord": "杀",
       "py": "Jiā li yǒu guō yǒu dāo shā yú hěn fāngbiàn",
       "traceKey": "sha",
       "traceInfo": [
        {
         "c": "杀",
         "py": "shā",
         "hv": "sát"
        }
       ]
      },
      {
       "scene": "🏪🍪🍰",
       "full": "超市里有饼干有蛋糕你随便选",
       "vi": "Trong siêu thị có bánh quy có bánh ngọt, bạn cứ chọn tự nhiên",
       "parts": [
        {
         "t": "超市里",
         "ico": "🏪",
         "c": "s",
         "py": "chāoshì lǐ",
         "hv": "siêu thị lý"
        },
        {
         "t": "有饼干有蛋糕",
         "ico": "🍰",
         "c": "v",
         "py": "yǒu bǐnggān yǒu dàngāo",
         "hv": "hữu bính can hữu đản cao"
        },
        {
         "t": "你随便选",
         "ico": "👉",
         "c": "o",
         "py": "nǐ suíbiàn xuǎn",
         "hv": "nễ tùy tiện tuyển"
        }
       ],
       "traceWord": "饼干",
       "py": "Chāoshì lǐ yǒu bǐnggān yǒu dàngāo nǐ suíbiàn xuǎn",
       "traceKey": "binggan",
       "traceInfo": [
        {
         "c": "饼",
         "py": "bǐng",
         "hv": "bính"
        },
        {
         "c": "干",
         "py": "gān",
         "hv": "can"
        }
       ]
      },
      {
       "scene": "🛒🥔🍅",
       "full": "周末的市场有土豆有西红柿而且很便宜",
       "vi": "Chợ cuối tuần có khoai tây có cà chua, mà lại rất rẻ",
       "parts": [
        {
         "t": "周末的市场",
         "ico": "🛒",
         "c": "s",
         "py": "zhōumò de shìchǎng",
         "hv": "chu mạt đích thị trường"
        },
        {
         "t": "有土豆有西红柿",
         "ico": "🍅",
         "c": "v",
         "py": "yǒu tǔdòu yǒu xīhóngshì",
         "hv": "hữu thổ đậu hữu tây hồng thị"
        },
        {
         "t": "而且很便宜",
         "ico": "💰",
         "c": "o",
         "py": "érqiě hěn piányi",
         "hv": "nhi thả ngận tiện nghi"
        }
       ],
       "traceWord": "土豆",
       "py": "Zhōumò de shìchǎng yǒu tǔdòu yǒu xīhóngshì érqiě hěn piányi",
       "traceKey": "tudou",
       "traceInfo": [
        {
         "c": "土",
         "py": "tǔ",
         "hv": "thổ"
        },
        {
         "c": "豆",
         "py": "dòu",
         "hv": "đậu"
        }
       ]
      },
      {
       "scene": "🍽🌭🍖😋",
       "full": "早餐的盘子里有香肠有火腿大家都爱吃",
       "vi": "Trong đĩa bữa sáng có xúc xích có giăm bông, ai cũng thích ăn",
       "parts": [
        {
         "t": "早餐的盘子里",
         "ico": "🍽",
         "c": "s",
         "py": "zǎocān de pánzi lǐ",
         "hv": "tảo xan đích bàn tử lý"
        },
        {
         "t": "有香肠有火腿",
         "ico": "🌭",
         "c": "v",
         "py": "yǒu xiāngcháng yǒu huǒtuǐ",
         "hv": "hữu hương trường hữu hỏa thối"
        },
        {
         "t": "大家都爱吃",
         "ico": "😋",
         "c": "o",
         "py": "dàjiā dōu ài chī",
         "hv": "đại gia đô ái cật"
        }
       ],
       "traceWord": "香肠",
       "py": "Zǎocān de pánzi lǐ yǒu xiāngcháng yǒu huǒtuǐ dàjiā dōu ài chī",
       "traceKey": "xiangchang",
       "traceInfo": [
        {
         "c": "香",
         "py": "xiāng",
         "hv": "hương"
        },
        {
         "c": "肠",
         "py": "cháng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🏡🥞🦆💰",
       "full": "农村的小饭馆有饼有鸭子价格也很实惠",
       "vi": "Quán ăn nhỏ ở nông thôn có bánh có vịt, giá cả cũng rất phải chăng",
       "parts": [
        {
         "t": "农村的小饭馆",
         "ico": "🏡",
         "c": "s",
         "py": "nóngcūn de xiǎo fànguǎn",
         "hv": "nông thôn đích tiểu phạn quán"
        },
        {
         "t": "有饼有鸭子",
         "ico": "🦆",
         "c": "v",
         "py": "yǒu bǐng yǒu yāzi",
         "hv": "hữu bính hữu áp tử"
        },
        {
         "t": "价格也很实惠",
         "ico": "💰",
         "c": "o",
         "py": "jiàgé yě hěn shíhuì",
         "hv": "giá cách dã ngận thực huệ"
        }
       ],
       "traceWord": "鸭子",
       "py": "Nóngcūn de xiǎo fànguǎn yǒu bǐng yǒu yāzi jiàgé yě hěn shíhuì",
       "traceKey": "yazi",
       "traceInfo": [
        {
         "c": "鸭",
         "py": "yā",
         "hv": "áp"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🏢🍱🍇👍",
       "full": "公司准备的午餐有豆制品有葡萄同事都很满意",
       "vi": "Bữa trưa công ty chuẩn bị có đồ chế biến từ đậu có nho, đồng nghiệp đều rất hài lòng",
       "parts": [
        {
         "t": "公司准备的午餐",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī zhǔnbèi de wǔcān",
         "hv": "công ti chuẩn bị đích ngọ xan"
        },
        {
         "t": "有豆制品有葡萄",
         "ico": "🍇",
         "c": "v",
         "py": "yǒu dòuzhìpǐn yǒu pútao",
         "hv": "hữu đậu chế phẩm hữu bồ đào"
        },
        {
         "t": "同事都很满意",
         "ico": "👍",
         "c": "o",
         "py": "tóngshì dōu hěn mǎnyì",
         "hv": "đồng sự đô ngận mãn ý"
        }
       ],
       "traceWord": "豆制品",
       "py": "Gōngsī zhǔnbèi de wǔcān yǒu dòuzhìpǐn yǒu pútao tóngshì dōu hěn mǎnyì",
       "traceKey": "douzhipin",
       "traceInfo": [
        {
         "c": "豆",
         "py": "dòu",
         "hv": "đậu"
        },
        {
         "c": "制",
         "py": "zhì",
         "hv": "chế"
        },
        {
         "c": "品",
         "py": "pǐn",
         "hv": "phẩm"
        }
       ]
      },
      {
       "scene": "🏬🥬🐟💰",
       "full": "这个农产品市场有蔬菜有水产品而且价格比超市低",
       "vi": "Chợ nông sản này có rau có thủy sản, mà giá còn thấp hơn siêu thị",
       "parts": [
        {
         "t": "这个农产品市场",
         "ico": "🏬",
         "c": "s",
         "py": "zhè gè nóngchǎnpǐn shìchǎng",
         "hv": "giá cá nông sản phẩm thị trường"
        },
        {
         "t": "有蔬菜有水产品",
         "ico": "🐟",
         "c": "v",
         "py": "yǒu shūcài yǒu shuǐchǎnpǐn",
         "hv": "hữu sơ thái hữu thủy sản phẩm"
        },
        {
         "t": "而且价格比超市低",
         "ico": "💰",
         "c": "o",
         "py": "érqiě jiàgé bǐ chāoshì dī",
         "hv": "nhi thả giá cách tỷ siêu thị đê"
        }
       ],
       "traceWord": "水产品",
       "py": "Zhè gè nóngchǎnpǐn shìchǎng yǒu shūcài yǒu shuǐchǎnpǐn érqiě jiàgé bǐ chāoshì dī",
       "traceKey": "shuichanpin",
       "traceInfo": [
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        },
        {
         "c": "产",
         "py": "chǎn",
         "hv": "sản"
        },
        {
         "c": "品",
         "py": "pǐn",
         "hv": "phẩm"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想买什么水果？",
       "qvi": "Bạn muốn mua trái cây gì?",
       "scene": "🧑🍐🍇",
       "ans": "我想买梨还有葡萄",
       "opts": [
        {
         "txt": "我想去银行存钱",
         "ico": "🏦",
         "py": "Wǒ xiǎng qù yínháng cún qián"
        },
        {
         "txt": "我想买梨还有葡萄",
         "ico": "🍇",
         "py": "Wǒ xiǎng mǎi lí hái yǒu pútao"
        },
        {
         "txt": "我想买一张车票",
         "ico": "🎫",
         "py": "Wǒ xiǎng mǎi yī zhāng chēpiào"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi shénme shuǐguǒ?"
      },
      {
       "q": "这家店有什么好吃的？",
       "qvi": "Quán này có món gì ngon?",
       "scene": "🏪🍞🥛",
       "ans": "有面包有牛奶",
       "opts": [
        {
         "txt": "他是我们的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen de jīnglǐ"
        },
        {
         "txt": "那里离这儿很远",
         "ico": "🛣",
         "py": "Nàlǐ lí zhèr hěn yuǎn"
        },
        {
         "txt": "有面包有牛奶",
         "ico": "🥛",
         "py": "Yǒu miànbāo yǒu niúnǎi"
        }
       ],
       "qpy": "Zhè jiā diàn yǒu shénme hǎochī de?"
      },
      {
       "q": "请问这里有什么蔬菜？",
       "qvi": "Xin hỏi ở đây có những loại rau gì?",
       "scene": "🥬🥒❓",
       "ans": "有白菜有黄瓜",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "有白菜有黄瓜",
         "ico": "🥒",
         "py": "Yǒu báicài yǒu huángguā"
        },
        {
         "txt": "我是公司的经理",
         "ico": "👔",
         "py": "Wǒ shì gōngsī de jīnglǐ"
        }
       ],
       "qpy": "Qǐngwèn zhèlǐ yǒu shénme shūcài?"
      },
      {
       "q": "你对周末的晚饭有什么要求？",
       "qvi": "Bạn có yêu cầu gì về bữa tối cuối tuần?",
       "scene": "🌙🐟🥩",
       "ans": "有鱼有肉我就满意了",
       "opts": [
        {
         "txt": "这件衣服太贵了",
         "ico": "👕",
         "py": "Zhè jiàn yīfu tài guì le"
        },
        {
         "txt": "有鱼有肉我就满意了",
         "ico": "🐟",
         "py": "Yǒu yú yǒu ròu wǒ jiù mǎnyì le"
        },
        {
         "txt": "我们下个月放假",
         "ico": "🏖",
         "py": "Wǒmen xià ge yuè fàngjià"
        }
       ],
       "qpy": "Nǐ duì zhōumò de wǎnfàn yǒu shénme yāoqiú?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu chợ và bữa trưa cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hãy nhắn tin cho đồng nghiệp nước ngoài giới thiệu chợ gần công ty, ví dụ <i>\"这个农产品市场有蔬菜有水产品\"</i>, rồi thay bằng những thứ thật sự có ở chợ bạn hay đi.",
       "<b>Bước 2:</b> Tự nói thành tiếng 5 câu về bữa trưa hoặc bữa sáng của bạn theo mẫu <i>\"早餐的盘子里有香肠有火腿\"</i>, mỗi câu dùng một cặp món khác nhau.",
       "<b>Bước 3:</b> Đóng vai khách hỏi nhân viên cửa hàng: <i>\"这家店有什么好吃的？\"</i> rồi trả lời lại bằng mẫu <i>\"有面包有牛奶\"</i>, đổi vai và lặp lại hai lần."
      ]
     }
    },
    {
     "id": "5.9B",
     "name": "Bài 5.9B: Phân tích và xử lý dữ liệu",
     "grammar": {
      "formulas": [
       "📊 从 + 数据 + 来看 + 💬 结论",
       "🔍 从 + 检验结果 + 来看 + ✅ 产品符合标准",
       "📁 从 + 使用习惯 + 来看 + 🗂 文件分类"
      ],
      "tip": "Mẫu 从……来看 (cóng… lái kàn, tùng… lai khán) nghĩa là \"xét từ… thì…\", dùng để nêu căn cứ rồi mới đưa ra nhận định. Phần giữa 从 và 来看 là căn cứ (số liệu, kết quả, tình hình), phần sau là kết luận. Có thể đặt cả cụm ở đầu câu, sau đó mới nói chủ ngữ và kết luận.",
      "vn_tip": "Người Việt hay dịch \"xét từ góc độ này\" thành \"从这个角度看\" rồi bỏ mất 来, hoặc đặt sai thành \"来看从数据\". Cần nhớ khung cố định 从 + căn cứ + 来看, căn cứ nằm GIỮA hai phần, và kết luận đi SAU 来看."
     },
     "chunks": [
      {
       "scene": "📊📥🔍",
       "full": "从数据来看我们需要先收集资料再分析原因",
       "vi": "Xét từ số liệu, chúng ta cần thu thập tài liệu trước rồi mới phân tích nguyên nhân",
       "parts": [
        {
         "t": "从数据来看我们",
         "ico": "📊",
         "c": "s",
         "py": "cóng shùjù lái kàn wǒmen",
         "hv": "tòng số cứ lai khán ngã môn"
        },
        {
         "t": "需要",
         "ico": "📌",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "先收集资料再分析原因",
         "ico": "🔍",
         "c": "o",
         "py": "xiān shōují zīliào zài fēnxī yuányīn",
         "hv": "tiên thu tập tư liệu tái phân tích nguyên nhân"
        }
       ],
       "traceWord": "收集",
       "py": "Cóng shùjù lái kàn wǒmen xūyào xiān shōují zīliào zài fēnxī yuányīn",
       "traceKey": "shouji",
       "traceInfo": [
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        },
        {
         "c": "集",
         "py": "jí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "📄👥3️⃣",
       "full": "从这份报告来看客户可以分成三类",
       "vi": "Xét từ bản báo cáo này, khách hàng có thể chia thành ba loại",
       "parts": [
        {
         "t": "从这份报告来看客户",
         "ico": "📄",
         "c": "s",
         "py": "cóng zhè fèn bàogào lái kàn kèhù",
         "hv": "tòng giá phần báo cáo lai khán khách hộ"
        },
        {
         "t": "可以分成",
         "ico": "✂️",
         "c": "v",
         "py": "kěyǐ fēnchéng",
         "hv": "khả dĩ phân thành"
        },
        {
         "t": "三类",
         "ico": "3️⃣",
         "c": "o",
         "py": "sān lèi",
         "hv": "tam loại"
        }
       ],
       "traceWord": "分成",
       "py": "Cóng zhè fèn bàogào lái kàn kèhù kěyǐ fēnchéng sān lèi",
       "traceKey": "fencheng",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "📁🗂🔎",
       "full": "从使用习惯来看这些文件分类以后更容易找到",
       "vi": "Xét từ thói quen sử dụng, các tệp này phân loại xong sẽ dễ tìm hơn",
       "parts": [
        {
         "t": "从使用习惯来看这些文件",
         "ico": "📁",
         "c": "s",
         "py": "cóng shǐyòng xíguàn lái kàn zhèxiē wénjiàn",
         "hv": "tòng sử dụng tập quán lai khán giá ta văn kiện"
        },
        {
         "t": "分类",
         "ico": "🗂",
         "c": "v",
         "py": "fēnlèi",
         "hv": "phân loại"
        },
        {
         "t": "以后更容易找到",
         "ico": "🔎",
         "c": "o",
         "py": "yǐhòu gèng róngyì zhǎodào",
         "hv": "dĩ hậu cánh dung dị trảo đáo"
        }
       ],
       "traceWord": "分类",
       "py": "Cóng shǐyòng xíguàn lái kàn zhèxiē wénjiàn fēnlèi yǐhòu gèng róngyì zhǎodào",
       "traceKey": "fenlei",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "类",
         "py": "lèi",
         "hv": "loại"
        }
       ]
      },
      {
       "scene": "🔬💊🌡",
       "full": "从检验结果来看这种药片放在热水里容易分解",
       "vi": "Xét từ kết quả kiểm nghiệm, loại viên thuốc này để trong nước nóng dễ bị phân giải",
       "parts": [
        {
         "t": "从检验结果来看这种药片",
         "ico": "🔬",
         "c": "s",
         "py": "cóng jiǎnyàn jiéguǒ lái kàn zhè zhǒng yàopiàn",
         "hv": "tòng kiểm nghiệm kết quả lai khán giá chủng dược phiến"
        },
        {
         "t": "放在热水里",
         "ico": "🌡",
         "c": "v",
         "py": "fàng zài rè shuǐ lǐ",
         "hv": "phóng tại nhiệt thủy lý"
        },
        {
         "t": "容易分解",
         "ico": "💊",
         "c": "o",
         "py": "róngyì fēnjiě",
         "hv": "dung dị phân giải"
        }
       ],
       "traceWord": "检验",
       "py": "Cóng jiǎnyàn jiéguǒ lái kàn zhè zhǒng yàopiàn fàng zài rè shuǐ lǐ róngyì fēnjiě",
       "traceKey": "jianyan",
       "traceInfo": [
        {
         "c": "检",
         "py": "jiǎn",
         "hv": "kiểm"
        },
        {
         "c": "验",
         "py": "yàn",
         "hv": "nghiệm"
        }
       ]
      },
      {
       "scene": "🥤♻️🧪",
       "full": "从材料来看这种杯子是用塑料制成的",
       "vi": "Xét từ chất liệu, loại cốc này được làm từ nhựa",
       "parts": [
        {
         "t": "从材料来看这种杯子",
         "ico": "🥤",
         "c": "s",
         "py": "cóng cáiliào lái kàn zhè zhǒng bēizi",
         "hv": "tòng tài liệu lai khán giá chủng bôi tử"
        },
        {
         "t": "是用",
         "ico": "🧪",
         "c": "v",
         "py": "shì yòng",
         "hv": "thị dụng"
        },
        {
         "t": "塑料制成的",
         "ico": "♻️",
         "c": "o",
         "py": "sùliào zhìchéng de",
         "hv": "tố liệu chế thành đích"
        }
       ],
       "traceWord": "制成",
       "py": "Cóng cáiliào lái kàn zhè zhǒng bēizi shì yòng sùliào zhìchéng de",
       "traceKey": "zhicheng",
       "traceInfo": [
        {
         "c": "制",
         "py": "zhì",
         "hv": "chế"
        },
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        }
       ]
      },
      {
       "scene": "📷🔎✍️",
       "full": "从放大的照片来看这个字写得不太清楚",
       "vi": "Xét từ bức ảnh đã phóng to, chữ này viết không rõ lắm",
       "parts": [
        {
         "t": "从放大的照片来看这个字",
         "ico": "📷",
         "c": "s",
         "py": "cóng fàngdà de zhàopiàn lái kàn zhè gè zì",
         "hv": "tòng phóng đại đích chiếu phiến lai khán giá cá tự"
        },
        {
         "t": "写得",
         "ico": "✍️",
         "c": "v",
         "py": "xiě de",
         "hv": "tả đắc"
        },
        {
         "t": "不太清楚",
         "ico": "🔎",
         "c": "o",
         "py": "bù tài qīngchu",
         "hv": "bất thái thanh sở"
        }
       ],
       "traceWord": "放大",
       "py": "Cóng fàngdà de zhàopiàn lái kàn zhè gè zì xiě de bù tài qīngchu",
       "traceKey": "fangda",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        }
       ]
      },
      {
       "scene": "👥💡📂🤝",
       "full": "从大家的反应来看同事都愿意分享经验和共享资料",
       "vi": "Xét từ phản ứng của mọi người, đồng nghiệp đều sẵn lòng chia sẻ kinh nghiệm và dùng chung tài liệu",
       "parts": [
        {
         "t": "从大家的反应来看同事",
         "ico": "👥",
         "c": "s",
         "py": "cóng dàjiā de fǎnyìng lái kàn tóngshì",
         "hv": "tòng đại gia đích phản ứng lai khán đồng sự"
        },
        {
         "t": "都愿意",
         "ico": "🙋",
         "c": "v",
         "py": "dōu yuànyì",
         "hv": "đô nguyện ý"
        },
        {
         "t": "分享经验和共享资料",
         "ico": "📂",
         "c": "o",
         "py": "fēnxiǎng jīngyàn hé gòngxiǎng zīliào",
         "hv": "phân hưởng kinh nghiệm hòa cộng hưởng tư liệu"
        }
       ],
       "traceWord": "分享",
       "py": "Cóng dàjiā de fǎnyìng lái kàn tóngshì dōu yuànyì fēnxiǎng jīngyàn hé gòngxiǎng zīliào",
       "traceKey": "fenxiang",
       "traceInfo": [
        {
         "c": "分",
         "py": "fēn",
         "hv": "phân"
        },
        {
         "c": "享",
         "py": "xiǎng",
         "hv": "hưởng"
        }
       ]
      },
      {
       "scene": "💻📋🖨📤",
       "full": "从程序的结果来看系统能自动生成表格并输出文件",
       "vi": "Xét từ kết quả của chương trình, hệ thống có thể tự động tạo bảng biểu và xuất tệp",
       "parts": [
        {
         "t": "从程序的结果来看系统",
         "ico": "💻",
         "c": "s",
         "py": "cóng chéngxù de jiéguǒ lái kàn xìtǒng",
         "hv": "tòng trình tự đích kết quả lai khán hệ thống"
        },
        {
         "t": "能自动生成",
         "ico": "⚙️",
         "c": "v",
         "py": "néng zìdòng shēngchéng",
         "hv": "năng tự động sinh thành"
        },
        {
         "t": "表格并输出文件",
         "ico": "📤",
         "c": "o",
         "py": "biǎogé bìng shūchū wénjiàn",
         "hv": "biểu cách tịnh thâu xuất văn kiện"
        }
       ],
       "traceWord": "生成",
       "py": "Cóng chéngxù de jiéguǒ lái kàn xìtǒng néng zìdòng shēngchéng biǎogé bìng shūchū wénjiàn",
       "traceKey": "shengcheng",
       "traceInfo": [
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
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
       "q": "从工作量来看，这两个部门应该怎么办？",
       "qvi": "Xét từ khối lượng công việc, hai phòng ban này nên làm thế nào?",
       "scene": "🏢🏢➡️🏢",
       "ans": "应该合并成一个部门",
       "opts": [
        {
         "txt": "应该多买一些水果",
         "ico": "🍇",
         "py": "Yīnggāi duō mǎi yīxiē shuǐguǒ"
        },
        {
         "txt": "应该合并成一个部门",
         "ico": "🏢",
         "py": "Yīnggāi hébìng chéng yī gè bùmén"
        },
        {
         "txt": "应该明天再去机场",
         "ico": "✈️",
         "py": "Yīnggāi míngtiān zài qù jīchǎng"
        }
       ],
       "qpy": "Cóng gōngzuò liàng lái kàn zhè liǎng gè bùmén yīnggāi zěnme bàn?"
      },
      {
       "q": "你觉得公司的市场应该怎么划分？",
       "qvi": "Bạn thấy thị trường của công ty nên được phân chia thế nào?",
       "scene": "🗺🏢📍",
       "ans": "可以按南方和北方划分",
       "opts": [
        {
         "txt": "可以按南方和北方划分",
         "ico": "🗺",
         "py": "Kěyǐ àn nánfāng hé běifāng huàfēn"
        },
        {
         "txt": "可以坐地铁去",
         "ico": "🚇",
         "py": "Kěyǐ zuò dìtiě qù"
        },
        {
         "txt": "可以在网上买",
         "ico": "🛒",
         "py": "Kěyǐ zài wǎng shang mǎi"
        }
       ],
       "qpy": "Nǐ juéde gōngsī de shìchǎng yīnggāi zěnme huàfēn?"
      },
      {
       "q": "从颜色来看，这种药水是怎么做出来的？",
       "qvi": "Xét từ màu sắc, loại thuốc nước này được làm ra như thế nào?",
       "scene": "🎨🧪💧",
       "ans": "是用两种药水合成的",
       "opts": [
        {
         "txt": "是在北京买的",
         "ico": "🏙",
         "py": "Shì zài Běijīng mǎi de"
        },
        {
         "txt": "是我朋友送的",
         "ico": "🎁",
         "py": "Shì wǒ péngyou sòng de"
        },
        {
         "txt": "是用两种药水合成的",
         "ico": "🧪",
         "py": "Shì yòng liǎng zhǒng yàoshuǐ héchéng de"
        }
       ],
       "qpy": "Cóng yánsè lái kàn zhè zhǒng yàoshuǐ shì zěnme zuò chūlái de?"
      },
      {
       "q": "做汤的时候油太多怎么办？",
       "qvi": "Khi nấu canh mà dầu mỡ nhiều quá thì làm sao?",
       "scene": "🍲💧🛢",
       "ans": "可以先把水和油分离",
       "opts": [
        {
         "txt": "可以明天再去上班",
         "ico": "💼",
         "py": "Kěyǐ míngtiān zài qù shàngbān"
        },
        {
         "txt": "可以给他打电话",
         "ico": "📞",
         "py": "Kěyǐ gěi tā dǎ diànhuà"
        },
        {
         "txt": "可以先把水和油分离",
         "ico": "🍲",
         "py": "Kěyǐ xiān bǎ shuǐ hé yóu fēnlí"
        }
       ],
       "qpy": "Zuò tāng de shíhou yóu tài duō zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo nhanh kết quả dữ liệu cho sếp",
      "steps": [
       "<b>Bước 1:</b> Chọn một bảng số liệu bạn đang làm (doanh số, chi phí, lượt khách) và nói thành tiếng ba câu mở đầu bằng <i>\"从数据来看\"</i>, mỗi câu nêu một nhận xét khác nhau.",
       "<b>Bước 2:</b> Viết tin nhắn cho đồng nghiệp đề nghị chia sẻ tài liệu, ví dụ <i>\"从工作效率来看，文件共享很方便\"</i>, rồi thêm một câu bàn việc cách phân loại tệp.",
       "<b>Bước 3:</b> Đóng vai sếp hỏi <i>\"从工作量来看，这两个部门应该怎么办？\"</i> và bạn trả lời bằng một kết luận có căn cứ, đổi vai và nói lại hai lần."
      ]
     }
    },
    {
     "id": "5.9C",
     "name": "Bài 5.9C: Tài chính và ngân hàng",
     "grammar": {
      "formulas": [
       "👤 拿 + 我自己 + 来说 + 💰 每个月都有存款",
       "🏢 拿 + 这家公司 + 来说 + 📉 损失占了资产的一半",
       "🏠 拿 + 租房子 + 来说 + 🔑 要先付押金"
      ],
      "tip": "Mẫu 拿……来说 (ná… lái shuō, nã… lai thuyết) nghĩa là \"lấy… làm ví dụ mà nói\", dùng để lấy một đối tượng cụ thể minh họa cho ý chung. Phần giữa 拿 và 来说 là ví dụ được chọn (người, công ty, sự việc), phần sau là nhận xét về ví dụ đó. Thường đặt ở đầu câu.",
      "vn_tip": "Người Việt hay dịch \"lấy ví dụ\" thành \"拿例子\" hoặc \"用……来说\". Cách đúng là 拿 + đối tượng + 来说, không thêm 例子 và không đổi 拿 thành 用. Cũng đừng bỏ 来, vì nói \"拿我自己说\" là sai."
     },
     "chunks": [
      {
       "scene": "👤💰📅",
       "full": "拿我自己来说每个月都有一点儿存款",
       "vi": "Lấy bản thân tôi mà nói, tháng nào cũng có một chút tiền gửi tiết kiệm",
       "parts": [
        {
         "t": "拿我自己来说每个月",
         "ico": "👤",
         "c": "s",
         "py": "ná wǒ zìjǐ lái shuō měi gè yuè",
         "hv": "nã ngã tự kỷ lai thuyết mỗi cá nguyệt"
        },
        {
         "t": "都有一点儿",
         "ico": "📅",
         "c": "v",
         "py": "dōu yǒuyīdiǎnr",
         "hv": "đô hữu nhất điểm nhi"
        },
        {
         "t": "存款",
         "ico": "💰",
         "c": "o",
         "py": "cúnkuǎn",
         "hv": "tồn khoản"
        }
       ],
       "traceWord": "存款",
       "py": "Ná wǒ zìjǐ lái shuō měi gè yuè dōu yǒuyīdiǎnr cúnkuǎn",
       "traceKey": "cunkuan",
       "traceInfo": [
        {
         "c": "存",
         "py": "cún",
         "hv": "tồn"
        },
        {
         "c": "款",
         "py": "kuǎn",
         "hv": "khoản"
        }
       ]
      },
      {
       "scene": "🏠🏦📝",
       "full": "拿买房子来说很多人需要向银行贷款",
       "vi": "Lấy việc mua nhà mà nói, nhiều người cần vay tiền ngân hàng",
       "parts": [
        {
         "t": "拿买房子来说很多人",
         "ico": "🏠",
         "c": "s",
         "py": "ná mǎi fángzi lái shuō hěn duō rén",
         "hv": "nã mãi phòng tử lai thuyết ngận đa nhân"
        },
        {
         "t": "需要",
         "ico": "📌",
         "c": "v",
         "py": "xūyào",
         "hv": "nhu yếu"
        },
        {
         "t": "向银行贷款",
         "ico": "🏦",
         "c": "o",
         "py": "xiàng yínháng dàikuǎn",
         "hv": "hướng ngân hàng thải khoản"
        }
       ],
       "traceWord": "贷款",
       "py": "Ná mǎi fángzi lái shuō hěn duō rén xūyào xiàng yínháng dàikuǎn",
       "traceKey": "daikuan",
       "traceInfo": [
        {
         "c": "贷",
         "py": "dài",
         "hv": "thải"
        },
        {
         "c": "款",
         "py": "kuǎn",
         "hv": "khoản"
        }
       ]
      },
      {
       "scene": "🏪📉💸",
       "full": "拿这家小店来说去年不但亏了钱而且还欠了朋友的钱",
       "vi": "Lấy cửa hàng nhỏ này mà nói, năm ngoái không những lỗ vốn mà còn nợ tiền bạn bè",
       "parts": [
        {
         "t": "拿这家小店来说去年",
         "ico": "🏪",
         "c": "s",
         "py": "ná zhè jiā xiǎo diàn lái shuō qùnián",
         "hv": "nã giá gia tiểu điếm lai thuyết khứ niên"
        },
        {
         "t": "不但亏了钱",
         "ico": "📉",
         "c": "v",
         "py": "bùdàn kuī le qián",
         "hv": "bất đãn khuy liễu tiền"
        },
        {
         "t": "而且还欠了朋友的钱",
         "ico": "💸",
         "c": "o",
         "py": "érqiě hái qiàn le péngyou de qián",
         "hv": "nhi thả hoàn khiếm liễu bằng hữu đích tiền"
        }
       ],
       "traceWord": "亏",
       "py": "Ná zhè jiā xiǎo diàn lái shuō qùnián bùdàn kuī le qián érqiě hái qiàn le péngyou de qián",
       "traceKey": "kui",
       "traceInfo": [
        {
         "c": "亏",
         "py": "kuī",
         "hv": "khuy"
        }
       ]
      },
      {
       "scene": "🏫📊💴",
       "full": "拿学校来说今年的经费支出比去年增加了不少",
       "vi": "Lấy trường học mà nói, khoản chi kinh phí năm nay tăng khá nhiều so với năm ngoái",
       "parts": [
        {
         "t": "拿学校来说今年的经费支出",
         "ico": "🏫",
         "c": "s",
         "py": "ná xuéxiào lái shuō jīnnián de jīngfèi zhīchū",
         "hv": "nã học hiệu lai thuyết kim niên đích kinh phí chi xuất"
        },
        {
         "t": "比去年增加了",
         "ico": "📈",
         "c": "v",
         "py": "bǐ qùnián zēngjiā le",
         "hv": "tỷ khứ niên tăng gia liễu"
        },
        {
         "t": "不少",
         "ico": "💴",
         "c": "o",
         "py": "bù shǎo",
         "hv": "bất thiểu"
        }
       ],
       "traceWord": "支出",
       "py": "Ná xuéxiào lái shuō jīnnián de jīngfèi zhīchū bǐ qùnián zēngjiā le bù shǎo",
       "traceKey": "zhichu",
       "traceInfo": [
        {
         "c": "支",
         "py": "zhī",
         "hv": "chi"
        },
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        }
       ]
      },
      {
       "scene": "🔑🏠💵",
       "full": "拿租房子来说你要先付押金再按时汇款给房东",
       "vi": "Lấy việc thuê nhà mà nói, bạn phải đặt cọc trước rồi chuyển tiền đúng hạn cho chủ nhà",
       "parts": [
        {
         "t": "拿租房子来说你",
         "ico": "🔑",
         "c": "s",
         "py": "ná zū fángzi lái shuō nǐ",
         "hv": "nã tô phòng tử lai thuyết nễ"
        },
        {
         "t": "要先付押金",
         "ico": "💵",
         "c": "v",
         "py": "yào xiān fù yājīn",
         "hv": "yếu tiên phó áp kim"
        },
        {
         "t": "再按时汇款给房东",
         "ico": "🏦",
         "c": "o",
         "py": "zài ànshí huìkuǎn gěi fángdōng",
         "hv": "tái án thời hối khoản cấp phòng đông"
        }
       ],
       "traceWord": "押金",
       "py": "Ná zū fángzi lái shuō nǐ yào xiān fù yājīn zài ànshí huìkuǎn gěi fángdōng",
       "traceKey": "yajin",
       "traceInfo": [
        {
         "c": "押",
         "py": "yā",
         "hv": "áp"
        },
        {
         "c": "金",
         "py": "jīn",
         "hv": "kim"
        }
       ]
      },
      {
       "scene": "💼🏦💹",
       "full": "拿这个基金来说它的资本主要来自很多普通人",
       "vi": "Lấy quỹ này mà nói, vốn của nó chủ yếu đến từ rất nhiều người bình thường",
       "parts": [
        {
         "t": "拿这个基金来说它的资本",
         "ico": "💼",
         "c": "s",
         "py": "ná zhè gè jījīn lái shuō tā de zīběn",
         "hv": "nã giá cá cơ kim lai thuyết tha đích tư bản"
        },
        {
         "t": "主要来自",
         "ico": "➡️",
         "c": "v",
         "py": "zhǔyào láizì",
         "hv": "chủ yếu lai tự"
        },
        {
         "t": "很多普通人",
         "ico": "👥",
         "c": "o",
         "py": "hěn duō pǔtōng rén",
         "hv": "ngận đa phổ thông nhân"
        }
       ],
       "traceWord": "基金",
       "py": "Ná zhè gè jījīn lái shuō tā de zīběn zhǔyào láizì hěn duō pǔtōng rén",
       "traceKey": "jijin",
       "traceInfo": [
        {
         "c": "基",
         "py": "jī",
         "hv": "cơ"
        },
        {
         "c": "金",
         "py": "jīn",
         "hv": "kim"
        }
       ]
      },
      {
       "scene": "🏢📉🏛",
       "full": "拿这家公司来说这次的损失占了资产的一半",
       "vi": "Lấy công ty này mà nói, lần thiệt hại này chiếm một nửa tài sản",
       "parts": [
        {
         "t": "拿这家公司来说这次的损失",
         "ico": "🏢",
         "c": "s",
         "py": "ná zhè jiā gōngsī lái shuō zhè cì de sǔnshī",
         "hv": "nã giá gia công ti lai thuyết giá thứ đích tổn thất"
        },
        {
         "t": "占了",
         "ico": "🥧",
         "c": "v",
         "py": "zhàn le",
         "hv": "chiếm liễu"
        },
        {
         "t": "资产的一半",
         "ico": "🏛",
         "c": "o",
         "py": "zīchǎn de yībàn",
         "hv": "tư sản đích nhất bán"
        }
       ],
       "traceWord": "损失",
       "py": "Ná zhè jiā gōngsī lái shuō zhè cì de sǔnshī zhàn le zīchǎn de yībàn",
       "traceKey": "sunshi",
       "traceInfo": [
        {
         "c": "损",
         "py": "sǔn",
         "hv": "tổn"
        },
        {
         "c": "失",
         "py": "shī",
         "hv": "thất"
        }
       ]
      },
      {
       "scene": "🎓🏫🤝💴",
       "full": "拿这个学生来说学校的资助和补贴让他不用打工",
       "vi": "Lấy bạn học sinh này mà nói, khoản tài trợ và trợ cấp của trường giúp bạn ấy không cần đi làm thêm",
       "parts": [
        {
         "t": "拿这个学生来说学校的资助和补贴",
         "ico": "🎓",
         "c": "s",
         "py": "ná zhè gè xuéshēng lái shuō xuéxiào de zīzhù hé bǔtiē",
         "hv": "nã giá cá học sinh lai thuyết học hiệu đích tư trợ hòa bổ thiếp"
        },
        {
         "t": "让他",
         "ico": "👦",
         "c": "v",
         "py": "ràng tā",
         "hv": "nhượng tha"
        },
        {
         "t": "不用打工",
         "ico": "🙅",
         "c": "o",
         "py": "bùyòng dǎgōng",
         "hv": "bất dụng đả công"
        }
       ],
       "traceWord": "资助",
       "py": "Ná zhè gè xuéshēng lái shuō xuéxiào de zīzhù hé bǔtiē ràng tā bùyòng dǎgōng",
       "traceKey": "zizhu",
       "traceInfo": [
        {
         "c": "资",
         "py": "zī",
         "hv": "tư"
        },
        {
         "c": "助",
         "py": "zhù",
         "hv": "trợ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "做生意失败了要付出什么代价？",
       "qvi": "Kinh doanh thất bại thì phải trả giá gì?",
       "scene": "💼📉💸",
       "ans": "要付出很大的代价",
       "opts": [
        {
         "txt": "我们明天一起去爬山",
         "ico": "⛰",
         "py": "Wǒmen míngtiān yīqǐ qù pá shān"
        },
        {
         "txt": "要付出很大的代价",
         "ico": "💸",
         "py": "Yào fùchū hěn dà de dàijià"
        },
        {
         "txt": "这个星期天很凉快",
         "ico": "🌤",
         "py": "Zhè gè xīngqītiān hěn liángkuai"
        }
       ],
       "qpy": "Zuò shēngyi shībài le yào fùchū shénme dàijià?"
      },
      {
       "q": "买东西时怎么才能便宜一点儿？",
       "qvi": "Khi mua đồ làm sao để rẻ hơn một chút?",
       "scene": "🛍🏷💰",
       "ans": "可以跟老板讲价",
       "opts": [
        {
         "txt": "我家住在学校旁边",
         "ico": "🏫",
         "py": "Wǒ jiā zhù zài xuéxiào pángbiān"
        },
        {
         "txt": "可以跟老板讲价",
         "ico": "🏷",
         "py": "Kěyǐ gēn lǎobǎn jiǎng jià"
        },
        {
         "txt": "今天的天气非常热",
         "ico": "☀️",
         "py": "Jīntiān de tiānqì fēicháng rè"
        }
       ],
       "qpy": "Mǎi dōngxi shí zěnme cáinéng piányi yīdiǎnr?"
      },
      {
       "q": "公司的经费不够怎么办？",
       "qvi": "Kinh phí của công ty không đủ thì làm sao?",
       "scene": "🏢💴❓",
       "ans": "可以申请政府的补贴",
       "opts": [
        {
         "txt": "可以坐地铁去机场",
         "ico": "🚇",
         "py": "Kěyǐ zuò dìtiě qù jīchǎng"
        },
        {
         "txt": "可以申请政府的补贴",
         "ico": "🏛",
         "py": "Kěyǐ shēnqǐng zhèngfǔ de bǔtiē"
        },
        {
         "txt": "可以多买一些水果",
         "ico": "🍇",
         "py": "Kěyǐ duō mǎi yīxiē shuǐguǒ"
        }
       ],
       "qpy": "Gōngsī de jīngfèi bùgòu zěnme bàn?"
      },
      {
       "q": "拿你的工作来说，每个月的收入怎么样？",
       "qvi": "Lấy công việc của bạn mà nói, thu nhập hằng tháng thế nào?",
       "scene": "💼💵📅",
       "ans": "收入比支出多一点儿",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "🏙",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "明天可能会下雨",
         "ico": "🌧",
         "py": "Míngtiān kěnéng huì xià yǔ"
        },
        {
         "txt": "收入比支出多一点儿",
         "ico": "💵",
         "py": "Shōurù bǐ zhīchū duō yīdiǎnr"
        }
       ],
       "qpy": "Ná nǐ de gōngzuò lái shuō měi gè yuè de shōurù zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trao đổi về tiền bạc với đối tác",
      "steps": [
       "<b>Bước 1:</b> Tự nói về tài chính cá nhân hoặc của công ty bằng ba câu theo mẫu <i>\"拿我自己来说，每个月都有一点儿存款\"</i>, thay phần ví dụ bằng tình hình thật của bạn.",
       "<b>Bước 2:</b> Viết tin nhắn cho đối tác hoặc đồng nghiệp bàn về chi phí, ví dụ <i>\"拿这家公司来说，这次的损失占了资产的一半\"</i>, rồi thêm một câu nêu cách giải quyết.",
       "<b>Bước 3:</b> Đóng vai nhân viên ngân hàng và khách hàng: khách hỏi về cách vay tiền hoặc đặt cọc, nhân viên trả lời bằng <i>\"拿租房子来说，你要先付押金\"</i> và các ví dụ khác, đổi vai hai lần."
      ]
     }
    }
   ]
  },
  "5.10": {
   "lessons": [
    {
     "id": "5.10A",
     "name": "Bài 5.10A: Lập luận, ví dụ và mô hình",
     "grammar": {
      "formulas": [
       "💭 在 + 🧑 我 + 👀 看来 + 📌 这个问题的关键是时间",
       "📊 在 + 👥 很多人 + 👀 看来 + 💡 红色象征好运"
      ],
      "tip": "在……看来 (zài… kànlái, \"khán lai\") nghĩa là \"theo quan điểm của ai đó\": đặt người ở giữa 在 và 看来, rồi nêu nhận định ở vế sau. Dùng để trình bày quan điểm một cách lịch sự, không áp đặt.",
      "vn_tip": "Người Việt hay nói \"theo tôi thì\" rồi dịch thành 根据我 hoặc bỏ 在. Cách đúng: 在我看来……, không nói 在我看。Phải có đủ 来 ở cuối."
     },
     "chunks": [
      {
       "scene": "💭🧑❓⏰",
       "full": "在我看来这个问题的关键是时间",
       "vi": "Theo tôi thấy, mấu chốt của vấn đề này là thời gian",
       "parts": [
        {
         "t": "在我看来这个问题",
         "ico": "💭",
         "c": "s",
         "py": "zài wǒ kànlái zhè gè wèntí",
         "hv": "tại ngã khán lai giá cá vấn đề"
        },
        {
         "t": "的关键是",
         "ico": "🔑",
         "c": "v",
         "py": "de guānjiàn shì",
         "hv": "đích quan kiện thị"
        },
        {
         "t": "时间",
         "ico": "⏰",
         "c": "o",
         "py": "shíjiān",
         "hv": "thời gian"
        }
       ],
       "traceWord": "关键",
       "py": "Zài wǒ kànlái zhè gè wèntí de guānjiàn shì shíjiān",
       "traceKey": "guanjian",
       "traceInfo": [
        {
         "c": "关",
         "py": "guān",
         "hv": "quan"
        },
        {
         "c": "键",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🗣️👥⚖️",
       "full": "正如大家所说这个争议确实很大",
       "vi": "Đúng như mọi người nói, tranh cãi này quả thật rất lớn",
       "parts": [
        {
         "t": "正如大家所说这个争议",
         "ico": "🗣️",
         "c": "s",
         "py": "zhèngrú dàjiā suǒ shuō zhè gè zhēngyì",
         "hv": "chính như đại gia sở thuyết giá cá tranh nghị"
        },
        {
         "t": "确实",
         "ico": "✅",
         "c": "v",
         "py": "quèshí",
         "hv": "xác thực"
        },
        {
         "t": "很大",
         "ico": "📏",
         "c": "o",
         "py": "hěn dà",
         "hv": "ngận đại"
        }
       ],
       "traceWord": "争议",
       "py": "Zhèngrú dàjiā suǒ shuō zhè gè zhēngyì quèshí hěn dà",
       "traceKey": "zhengyi",
       "traceInfo": [
        {
         "c": "争",
         "py": "zhēng",
         "hv": "tranh"
        },
        {
         "c": "议",
         "py": "yì",
         "hv": "nghị"
        }
       ]
      },
      {
       "scene": "📅📋👥",
       "full": "会议的时间和安排如下请大家按时参加",
       "vi": "Thời gian và lịch trình cuộc họp như sau, mời mọi người tham dự đúng giờ",
       "parts": [
        {
         "t": "会议的时间和安排",
         "ico": "📅",
         "c": "s",
         "py": "huìyì de shíjiān hé ānpái",
         "hv": "hội nghị đích thời gian hòa an bài"
        },
        {
         "t": "如下",
         "ico": "👇",
         "c": "v",
         "py": "rúxià",
         "hv": "như hạ"
        },
        {
         "t": "请大家按时参加",
         "ico": "👥",
         "c": "o",
         "py": "qǐng dàjiā ànshí cānjiā",
         "hv": "thỉnh đại gia án thời tham gia"
        }
       ],
       "traceWord": "如下",
       "py": "Huìyì de shíjiān hé ānpái rúxià qǐng dàjiā ànshí cānjiā",
       "traceKey": "ruxia",
       "traceInfo": [
        {
         "c": "如",
         "py": "rú",
         "hv": "như"
        },
        {
         "c": "下",
         "py": "xià",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "💡✋🌟",
       "full": "比方说这个新手法如同一个很好的示范",
       "vi": "Ví dụ, cách làm mới này giống như một mẫu mực rất tốt",
       "parts": [
        {
         "t": "比方说这个新手法",
         "ico": "💡",
         "c": "s",
         "py": "bǐfang shuō zhè gè xīn shǒufǎ",
         "hv": "tỷ phương thuyết giá cá tân thủ pháp"
        },
        {
         "t": "如同",
         "ico": "🟰",
         "c": "v",
         "py": "rútóng",
         "hv": "như đồng"
        },
        {
         "t": "一个很好的示范",
         "ico": "🌟",
         "c": "o",
         "py": "yī gè hěn hǎo de shìfàn",
         "hv": "nhất cá ngận hảo đích thị phạm"
        }
       ],
       "traceWord": "比方",
       "py": "Bǐfang shuō zhè gè xīn shǒufǎ rútóng yī gè hěn hǎo de shìfàn",
       "traceKey": "bifang",
       "traceInfo": [
        {
         "c": "比",
         "py": "bǐ",
         "hv": "tỷ"
        },
        {
         "c": "方",
         "py": "fang",
         "hv": "phương"
        }
       ]
      },
      {
       "scene": "📈💰🏢🛠️",
       "full": "价格上升意味着公司必须使用新的手段",
       "vi": "Giá tăng đồng nghĩa với việc công ty buộc phải dùng biện pháp mới",
       "parts": [
        {
         "t": "价格上升",
         "ico": "📈",
         "c": "s",
         "py": "jiàgé shàngshēng",
         "hv": "giá cách thượng thăng"
        },
        {
         "t": "意味着",
         "ico": "➡️",
         "c": "v",
         "py": "yìwèizhe",
         "hv": "ý vị trước"
        },
        {
         "t": "公司必须使用新的手段",
         "ico": "🛠️",
         "c": "o",
         "py": "gōngsī bìxū shǐyòng xīn de shǒuduàn",
         "hv": "công ti tất tu sử dụng tân đích thủ đoạn"
        }
       ],
       "traceWord": "意味着",
       "py": "Jiàgé shàngshēng yìwèizhe gōngsī bìxū shǐyòng xīn de shǒuduàn",
       "traceKey": "yiweizhe",
       "traceInfo": [
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        },
        {
         "c": "味",
         "py": "wèi",
         "hv": "vị"
        },
        {
         "c": "着",
         "py": "zhe",
         "hv": "trước"
        }
       ]
      },
      {
       "scene": "👶👀🧑📚",
       "full": "在老师看来小孩儿通过模仿大人学习说话",
       "vi": "Theo giáo viên, trẻ nhỏ học nói bằng cách bắt chước người lớn",
       "parts": [
        {
         "t": "在老师看来小孩儿",
         "ico": "👶",
         "c": "s",
         "py": "zài lǎoshī kànlái xiǎoháir",
         "hv": "tại lão sư khán lai tiểu hài nhi"
        },
        {
         "t": "通过模仿",
         "ico": "🪞",
         "c": "v",
         "py": "tōngguò mófǎng",
         "hv": "thông quá mô phỏng"
        },
        {
         "t": "大人学习说话",
         "ico": "🗣️",
         "c": "o",
         "py": "dàren xuéxí shuōhuà",
         "hv": "đại nhân học tập thuyết thoại"
        }
       ],
       "traceWord": "模仿",
       "py": "Zài lǎoshī kànlái xiǎoháir tōngguò mófǎng dàren xuéxí shuōhuà",
       "traceKey": "mofang",
       "traceInfo": [
        {
         "c": "模",
         "py": "mó",
         "hv": "mô"
        },
        {
         "c": "仿",
         "py": "fǎng",
         "hv": "phỏng"
        }
       ]
      },
      {
       "scene": "🔴🍀😊👥",
       "full": "在很多人看来红色象征着好运和幸福",
       "vi": "Theo nhiều người, màu đỏ tượng trưng cho may mắn và hạnh phúc",
       "parts": [
        {
         "t": "在很多人看来红色",
         "ico": "🔴",
         "c": "s",
         "py": "zài hěn duō rén kànlái hóngsè",
         "hv": "tại ngận đa nhân khán lai hồng sắc"
        },
        {
         "t": "象征着",
         "ico": "🏷️",
         "c": "v",
         "py": "xiàngzhēng zhe",
         "hv": "tượng trưng trước"
        },
        {
         "t": "好运和幸福",
         "ico": "🍀",
         "c": "o",
         "py": "hǎoyùn hé xìngfú",
         "hv": "hảo vận hòa hạnh phúc"
        }
       ],
       "traceWord": "象征",
       "py": "Zài hěn duō rén kànlái hóngsè xiàngzhēng zhe hǎoyùn hé xìngfú",
       "traceKey": "xiangzheng",
       "traceInfo": [
        {
         "c": "象",
         "py": "xiàng",
         "hv": "tượng"
        },
        {
         "c": "征",
         "py": "zhēng",
         "hv": "trưng"
        }
       ]
      },
      {
       "scene": "💼🏢🔄",
       "full": "新的工作模式使得公司的形态发生了变化",
       "vi": "Mô hình làm việc mới khiến hình thái của công ty thay đổi",
       "parts": [
        {
         "t": "新的工作模式",
         "ico": "💼",
         "c": "s",
         "py": "xīn de gōngzuò móshì",
         "hv": "tân đích công tác mô thức"
        },
        {
         "t": "使得",
         "ico": "➡️",
         "c": "v",
         "py": "shǐde",
         "hv": "sử đắc"
        },
        {
         "t": "公司的形态发生了变化",
         "ico": "🔄",
         "c": "o",
         "py": "gōngsī de xíngtài fāshēng le biànhuà",
         "hv": "công ti đích hình thái phát sinh liễu biến hóa"
        }
       ],
       "traceWord": "形态",
       "py": "Xīn de gōngzuò móshì shǐde gōngsī de xíngtài fāshēng le biànhuà",
       "traceKey": "xingtai",
       "traceInfo": [
        {
         "c": "形",
         "py": "xíng",
         "hv": "hình"
        },
        {
         "c": "态",
         "py": "tài",
         "hv": "thái"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "在你看来，这是唯一的办法吗？",
       "qvi": "Theo bạn, đây có phải là cách duy nhất không?",
       "scene": "💭🤔",
       "ans": "不是，还有别的办法",
       "opts": [
        {
         "txt": "是的，我昨天去了书店",
         "ico": "📚",
         "py": "Shì de wǒ zuótiān qù le shūdiàn"
        },
        {
         "txt": "不是，还有别的办法",
         "ico": "💡",
         "py": "Bú shì hái yǒu biéde bànfǎ"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Zài nǐ kànlái zhè shì wéiyī de bànfǎ ma?"
      },
      {
       "q": "你喜欢中式还是西式的早餐？",
       "qvi": "Bạn thích bữa sáng kiểu Trung hay kiểu Tây?",
       "scene": "🥟🥐",
       "ans": "我喜欢中式的早餐",
       "opts": [
        {
         "txt": "我今天坐地铁上班",
         "ico": "🚇",
         "py": "Wǒ jīntiān zuò dìtiě shàngbān"
        },
        {
         "txt": "这个周末我们不上班",
         "ico": "🏖️",
         "py": "Zhè gè zhōumò wǒmen bú shàngbān"
        },
        {
         "txt": "我喜欢中式的早餐",
         "ico": "🥟",
         "py": "Wǒ xǐhuan zhōng shì de zǎocān"
        }
       ],
       "qpy": "Nǐ xǐhuan zhōng shì háishi xī shì de zǎocān?"
      },
      {
       "q": "在你看来，学习语言的关键是什么？",
       "qvi": "Theo bạn, mấu chốt của việc học ngôn ngữ là gì?",
       "scene": "🗣️🔑",
       "ans": "在我看来，关键是多说多练",
       "opts": [
        {
         "txt": "在我看来，今天的天气很冷",
         "ico": "🥶",
         "py": "Zài wǒ kànlái jīntiān de tiānqì hěn lěng"
        },
        {
         "txt": "在我看来，关键是多说多练",
         "ico": "🗣️",
         "py": "Zài wǒ kànlái guānjiàn shì duō shuō duō liàn"
        },
        {
         "txt": "我昨天买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        }
       ],
       "qpy": "Zài nǐ kànlái xuéxí yǔyán de guānjiàn shì shénme?"
      },
      {
       "q": "你为什么喜欢这个公司？",
       "qvi": "Vì sao bạn thích công ty này?",
       "scene": "🏢❤️",
       "ans": "因为公司的工作模式很自由",
       "opts": [
        {
         "txt": "因为我昨天买了一本书",
         "ico": "📖",
         "py": "Yīnwèi wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "因为公司的工作模式很自由",
         "ico": "💼",
         "py": "Yīnwèi gōngsī de gōngzuò móshì hěn zìyóu"
        },
        {
         "txt": "因为今天不是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān bú shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ wèi shénme xǐhuan zhè gè gōngsī?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trình bày quan điểm trong cuộc họp",
      "steps": [
       "<b>Bước 1:</b> Chọn một vấn đề ở chỗ làm (lịch họp, cách làm việc mới) và tự nói thành tiếng ý kiến của mình bằng <i>\"在我看来……\"</i>.",
       "<b>Bước 2:</b> Đưa một ví dụ minh họa bằng <i>\"比方说……\"</i> và một so sánh bằng <i>\"如同……\"</i>, nói to ít nhất hai câu.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp lịch họp theo mẫu <i>\"会议的时间和安排如下\"</i>, rồi hỏi ý kiến: <i>\"在你看来，这是唯一的办法吗？\"</i>"
      ]
     }
    },
    {
     "id": "5.10B",
     "name": "Bài 5.10B: Giai đoạn và thời hạn",
     "grammar": {
      "formulas": [
       "📅 到 + 🗓️ 这个月底 + 🛑 为止 + 🏢 我们已经完成了一半",
       "🚆 从 + 📍 北京 + ➡️ 至 + 📍 上海"
      ],
      "tip": "到……为止 (dào… wéizhǐ, \"đáo… vi chỉ\") nghĩa là \"cho đến … thì thôi, tính đến …\": đặt mốc thời gian hoặc địa điểm giữa 到 và 为止, vế sau nêu tình trạng tính đến mốc đó. 为期 (wéiqī, \"vi kỳ\") nêu độ dài thời hạn; 至 (zhì, \"chí\") nghĩa là \"đến\" trong văn viết.",
      "vn_tip": "Người Việt hay nói \"đến nay\" rồi dịch thành 到现在 mà quên 为止, hoặc viết 到……为止 nhưng lại thêm 才 sai chỗ. Cách đúng: 到现在为止, 到月底为止, và chữ 为止 luôn nằm cuối cụm mốc."
     },
     "chunks": [
      {
       "scene": "🚆📍📍",
       "full": "从北京至上海的火车票已经卖完了",
       "vi": "Vé tàu từ Bắc Kinh đến Thượng Hải đã bán hết",
       "parts": [
        {
         "t": "从北京至上海的火车票",
         "ico": "🚆",
         "c": "s",
         "py": "cóng Běijīng zhì Shànghǎi de huǒ chēpiào",
         "hv": "tòng bắc kinh chí thượng hải đích hỏa xa phiếu"
        },
        {
         "t": "已经",
         "ico": "⏳",
         "c": "v",
         "py": "yǐjīng",
         "hv": "dĩ kinh"
        },
        {
         "t": "卖完了",
         "ico": "🈵",
         "c": "o",
         "py": "mài wánle",
         "hv": "mại hoàn liễu"
        }
       ],
       "traceWord": "至",
       "py": "Cóng Běijīng zhì Shànghǎi de huǒ chēpiào yǐjīng mài wánle",
       "traceKey": "zhi",
       "traceInfo": [
        {
         "c": "至",
         "py": "zhì",
         "hv": "chí"
        }
       ]
      },
      {
       "scene": "🚌🏁🏠",
       "full": "这辆车的终点站离我家很近",
       "vi": "Trạm cuối của chuyến xe này rất gần nhà tôi",
       "parts": [
        {
         "t": "这辆车的终点站",
         "ico": "🏁",
         "c": "s",
         "py": "zhè liàng chē de zhōngdiǎn zhàn",
         "hv": "giá lượng xa đích chung điểm trạm"
        },
        {
         "t": "离",
         "ico": "↔️",
         "c": "v",
         "py": "lí",
         "hv": "ly"
        },
        {
         "t": "我家很近",
         "ico": "🏠",
         "c": "o",
         "py": "wǒ jiā hěn jìn",
         "hv": "ngã gia ngận cận"
        }
       ],
       "traceWord": "终点",
       "py": "Zhè liàng chē de zhōngdiǎn zhàn lí wǒ jiā hěn jìn",
       "traceKey": "zhongdian",
       "traceInfo": [
        {
         "c": "终",
         "py": "zhōng",
         "hv": "chung"
        },
        {
         "c": "点",
         "py": "diǎn",
         "hv": "điểm"
        }
       ]
      },
      {
       "scene": "📚🗓️🌟",
       "full": "这个培训班为期三个月内容很丰富",
       "vi": "Lớp đào tạo này kéo dài ba tháng, nội dung rất phong phú",
       "parts": [
        {
         "t": "这个培训班",
         "ico": "🏫",
         "c": "s",
         "py": "zhè gè péixùnbān",
         "hv": "giá cá bồi huấn ban"
        },
        {
         "t": "为期三个月",
         "ico": "🗓️",
         "c": "v",
         "py": "wéiqī sān gè yuè",
         "hv": "vi kỳ tam cá nguyệt"
        },
        {
         "t": "内容很丰富",
         "ico": "📚",
         "c": "o",
         "py": "nèiróng hěn fēngfù",
         "hv": "nội dung ngận phong phú"
        }
       ],
       "traceWord": "为期",
       "py": "Zhè gè péixùnbān wéiqī sān gè yuè nèiróng hěn fēngfù",
       "traceKey": "weiqi",
       "traceInfo": [
        {
         "c": "为",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "📅✅💼",
       "full": "到这个月底为止我们已经完成了一半的工作",
       "vi": "Tính đến cuối tháng này, chúng tôi đã hoàn thành một nửa công việc",
       "parts": [
        {
         "t": "到这个月底为止",
         "ico": "📅",
         "c": "s",
         "py": "dào zhè gè yuèdǐ wéizhǐ",
         "hv": "đáo giá cá nguyệt để vi chỉ"
        },
        {
         "t": "我们已经完成了",
         "ico": "✅",
         "c": "v",
         "py": "wǒmen yǐjīng wánchéng le",
         "hv": "ngã môn dĩ kinh hoàn thành liễu"
        },
        {
         "t": "一半的工作",
         "ico": "💼",
         "c": "o",
         "py": "yībàn de gōngzuò",
         "hv": "nhất bán đích công tác"
        }
       ],
       "traceWord": "为止",
       "py": "Dào zhè gè yuèdǐ wéizhǐ wǒmen yǐjīng wánchéng le yībàn de gōngzuò",
       "traceKey": "weizhi",
       "traceInfo": [
        {
         "c": "为",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "止",
         "py": "zhǐ",
         "hv": "chỉ"
        }
       ]
      },
      {
       "scene": "🌧️⚽⏸️",
       "full": "因为雨太大了比赛只好暂停一个小时",
       "vi": "Vì mưa quá to nên trận đấu đành tạm dừng một tiếng",
       "parts": [
        {
         "t": "因为雨太大了比赛",
         "ico": "🌧️",
         "c": "s",
         "py": "yīnwèi yǔ tài dà le bǐsài",
         "hv": "nhân vị vũ thái đại liễu tỷ tái"
        },
        {
         "t": "只好暂停",
         "ico": "⏸️",
         "c": "v",
         "py": "zhǐhǎo zàntíng",
         "hv": "chỉ hảo tạm đình"
        },
        {
         "t": "一个小时",
         "ico": "🕐",
         "c": "o",
         "py": "yī gè xiǎoshí",
         "hv": "nhất cá tiểu thời"
        }
       ],
       "traceWord": "暂停",
       "py": "Yīnwèi yǔ tài dà le bǐsài zhǐhǎo zàntíng yī gè xiǎoshí",
       "traceKey": "zanting",
       "traceInfo": [
        {
         "c": "暂",
         "py": "zàn",
         "hv": "tạm"
        },
        {
         "c": "停",
         "py": "tíng",
         "hv": "đình"
        }
       ]
      },
      {
       "scene": "🏢⚠️💪",
       "full": "我们公司暂时处在很困难的阶段",
       "vi": "Công ty chúng tôi tạm thời đang ở giai đoạn rất khó khăn",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã môn công ti"
        },
        {
         "t": "暂时处在",
         "ico": "⏳",
         "c": "v",
         "py": "zànshí chǔzài",
         "hv": "tạm thời xử tại"
        },
        {
         "t": "很困难的阶段",
         "ico": "⚠️",
         "c": "o",
         "py": "hěn kùnnan de jiēduàn",
         "hv": "ngận khốn nan đích giai đoạn"
        }
       ],
       "traceWord": "暂时",
       "py": "Wǒmen gōngsī zànshí chǔzài hěn kùnnan de jiēduàn",
       "traceKey": "zanshi",
       "traceInfo": [
        {
         "c": "暂",
         "py": "zàn",
         "hv": "tạm"
        },
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        }
       ]
      },
      {
       "scene": "🗣️📋👥",
       "full": "这次会议围绕新产品展开大家当场提出了很多意见",
       "vi": "Cuộc họp lần này xoay quanh sản phẩm mới, mọi người đưa ra nhiều ý kiến ngay tại chỗ",
       "parts": [
        {
         "t": "这次会议",
         "ico": "🗣️",
         "c": "s",
         "py": "zhè cì huìyì",
         "hv": "giá thứ hội nghị"
        },
        {
         "t": "围绕新产品展开",
         "ico": "📦",
         "c": "v",
         "py": "wéirào xīn chǎnpǐn zhǎnkāi",
         "hv": "vi nhiễu tân sản phẩm triển khai"
        },
        {
         "t": "大家当场提出了很多意见",
         "ico": "👥",
         "c": "o",
         "py": "dàjiā dāngchǎng tíchū le hěn duō yìjiàn",
         "hv": "đại gia đương trường đề xuất liễu ngận đa ý kiến"
        }
       ],
       "traceWord": "围绕",
       "py": "Zhè cì huìyì wéirào xīn chǎnpǐn zhǎnkāi dàjiā dāngchǎng tíchū le hěn duō yìjiàn",
       "traceKey": "weirao",
       "traceInfo": [
        {
         "c": "围",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "绕",
         "py": "rào",
         "hv": "nhiễu"
        }
       ]
      },
      {
       "scene": "🏢🔒👥",
       "full": "公司出于安全考虑让大家从中选择一个办法",
       "vi": "Công ty vì lý do an toàn để mọi người chọn một cách trong số đó",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "出于安全考虑",
         "ico": "🔒",
         "c": "v",
         "py": "chūyú ānquán kǎolǜ",
         "hv": "xuất vu an toàn khảo lự"
        },
        {
         "t": "让大家从中选择一个办法",
         "ico": "👥",
         "c": "o",
         "py": "ràng dàjiā cóngzhōng xuǎnzé yī gè bànfǎ",
         "hv": "nhượng đại gia tòng trung tuyển trạch nhất cá biện pháp"
        }
       ],
       "traceWord": "出于",
       "py": "Gōngsī chūyú ānquán kǎolǜ ràng dàjiā cóngzhōng xuǎnzé yī gè bànfǎ",
       "traceKey": "chuyu",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
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
       "q": "你打算在北京停留多久？",
       "qvi": "Bạn định lưu lại Bắc Kinh bao lâu?",
       "scene": "✈️📍",
       "ans": "我打算停留一个星期",
       "opts": [
        {
         "txt": "我不喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ bù xǐhuan hē kāfēi"
        },
        {
         "txt": "我昨天坐飞机来的",
         "ico": "✈️",
         "py": "Wǒ zuótiān zuò fēijī lái de"
        },
        {
         "txt": "我打算停留一个星期",
         "ico": "📅",
         "py": "Wǒ dǎsuàn tíngliú yī gè xīngqī"
        }
       ],
       "qpy": "Nǐ dǎsuàn zài Běijīng tíngliú duōjiǔ?"
      },
      {
       "q": "春节就要到来了，你有什么计划？",
       "qvi": "Tết sắp đến rồi, bạn có kế hoạch gì?",
       "scene": "🧧🎆",
       "ans": "我打算回老家看爸爸妈妈",
       "opts": [
        {
         "txt": "我打算回老家看爸爸妈妈",
         "ico": "👨‍👩‍👦",
         "py": "Wǒ dǎsuàn huí lǎojiā kàn bàba māma"
        },
        {
         "txt": "我刚买了一本新书",
         "ico": "📖",
         "py": "Wǒ gāng mǎi le yī běn xīn shū"
        },
        {
         "txt": "今天的天气很冷",
         "ico": "🥶",
         "py": "Jīntiān de tiānqì hěn lěng"
        }
       ],
       "qpy": "Chūnjié jiùyào dàolái le nǐ yǒu shénme jìhuà?"
      },
      {
       "q": "这张卡在别的城市也通用吗？",
       "qvi": "Thẻ này ở thành phố khác cũng dùng chung được không?",
       "scene": "💳🏙️",
       "ans": "通用，全国都可以用",
       "opts": [
        {
         "txt": "这次会议以讨论安全问题为主",
         "ico": "📋",
         "py": "Zhè cì huìyì yǐ tǎolùn ānquán wèntí wéizhǔ"
        },
        {
         "txt": "它是红色的",
         "ico": "🔴",
         "py": "Tā shì hóngsè de"
        },
        {
         "txt": "通用，全国都可以用",
         "ico": "💳",
         "py": "Tōngyòng quánguó dōu kěyǐ yòng"
        }
       ],
       "qpy": "Zhè zhāng kǎ zài biéde chéngshì yě tōngyòng ma?"
      },
      {
       "q": "这个项目为什么能按时完成？",
       "qvi": "Vì sao dự án này có thể hoàn thành đúng hạn?",
       "scene": "📋✅",
       "ans": "因为大家的努力，工作得以按时完成",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为大家的努力，工作得以按时完成",
         "ico": "💪",
         "py": "Yīnwèi dàjiā de nǔlì gōngzuò déyǐ ànshí wánchéng"
        },
        {
         "txt": "因为我不喜欢吃面条儿",
         "ico": "🍜",
         "py": "Yīnwèi wǒ bù xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Zhè gè xiàngmù wèi shénme néng ànshí wánchéng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo tiến độ và thời hạn",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho sếp hoặc đồng nghiệp tiến độ công việc, dùng mốc thời gian thật của bạn: <i>\"到这个月底为止我们已经完成了一半的工作\"</i>.",
       "<b>Bước 2:</b> Nói thành tiếng về một khóa học hoặc dự án bạn đang theo, nêu thời hạn bằng <i>\"为期……\"</i> và một khó khăn tạm thời bằng <i>\"暂时……\"</i>.",
       "<b>Bước 3:</b> Gọi điện hoặc nhắn hỏi bạn bè về lịch đi công tác: <i>\"你打算在北京停留多久？\"</i> rồi tự trả lời."
      ]
     }
    },
    {
     "id": "5.10C",
     "name": "Bài 5.10C: Nhà ở và nội thất",
     "grammar": {
      "formulas": [
       "🏠 这个客厅 + ✅ 够大 + 🔚 的",
       "🛏️ 卧室的窗帘 + ✅ 够长 + 🔚 的"
      ],
      "tip": "够……的 (gòu… de, \"cấu\") nghĩa là \"khá/đủ … rồi đấy\", thường mang sắc thái nhận xét, hơi cảm thán: chủ ngữ + 够 + tính từ + 的. Có thể là khen hoặc chê tùy ngữ cảnh.",
      "vn_tip": "Người Việt hay quên 的 ở cuối rồi nói 这个客厅够大 (nghe như \"đủ lớn\" để làm gì đó, thiếu sắc thái cảm thán). Muốn nhận xét \"khá rộng đấy\" phải nói 这个客厅够大的."
     },
     "chunks": [
      {
       "scene": "🛋️🏠📏",
       "full": "这个客厅够大的可以放下一张大桌子",
       "vi": "Phòng khách này khá rộng đấy, đặt được một chiếc bàn lớn",
       "parts": [
        {
         "t": "这个客厅",
         "ico": "🛋️",
         "c": "s",
         "py": "zhè gè kètīng",
         "hv": "giá cá khách sảnh"
        },
        {
         "t": "够大的",
         "ico": "📏",
         "c": "v",
         "py": "gòu dà de",
         "hv": "cấu đại đích"
        },
        {
         "t": "可以放下一张大桌子",
         "ico": "🪑",
         "c": "o",
         "py": "kěyǐ fàngxia yī zhāng dà zhuōzi",
         "hv": "khả dĩ phóng hạ nhất trương đại trác tử"
        }
       ],
       "traceWord": "客厅",
       "py": "Zhè gè kètīng gòu dà de kěyǐ fàngxia yī zhāng dà zhuōzi",
       "traceKey": "keting",
       "traceInfo": [
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        },
        {
         "c": "厅",
         "py": "tīng",
         "hv": "sảnh"
        }
       ]
      },
      {
       "scene": "🛏️🪟🎨",
       "full": "卧室的窗帘够长的而且颜色很漂亮",
       "vi": "Rèm cửa phòng ngủ khá dài, mà màu cũng rất đẹp",
       "parts": [
        {
         "t": "卧室的窗帘",
         "ico": "🪟",
         "c": "s",
         "py": "wòshì de chuānglián",
         "hv": "ngọa thất đích song liêm"
        },
        {
         "t": "够长的",
         "ico": "📏",
         "c": "v",
         "py": "gòu cháng de",
         "hv": "cấu trường đích"
        },
        {
         "t": "而且颜色很漂亮",
         "ico": "🎨",
         "c": "o",
         "py": "érqiě yánsè hěn piàoliang",
         "hv": "nhi thả nhan sắc ngận phiêu lượng"
        }
       ],
       "traceWord": "窗帘",
       "py": "Wòshì de chuānglián gòu cháng de érqiě yánsè hěn piàoliang",
       "traceKey": "chuanglian",
       "traceInfo": [
        {
         "c": "窗",
         "py": "chuāng",
         "hv": "song"
        },
        {
         "c": "帘",
         "py": "lián",
         "hv": "liêm"
        }
       ]
      },
      {
       "scene": "🧱🏠🖌️",
       "full": "新房子的墙壁够白的不用再刷了",
       "vi": "Tường của nhà mới khá trắng rồi, không cần sơn lại nữa",
       "parts": [
        {
         "t": "新房子的墙壁",
         "ico": "🧱",
         "c": "s",
         "py": "xīn fángzi de qiángbì",
         "hv": "tân phòng tử đích tường bích"
        },
        {
         "t": "够白的",
         "ico": "⚪",
         "c": "v",
         "py": "gòu bái de",
         "hv": "cấu bạch đích"
        },
        {
         "t": "不用再刷了",
         "ico": "🖌️",
         "c": "o",
         "py": "bùyòng zài shuā le",
         "hv": "bất dụng tái loát liễu"
        }
       ],
       "traceWord": "墙壁",
       "py": "Xīn fángzi de qiángbì gòu bái de bùyòng zài shuā le",
       "traceKey": "qiangbi",
       "traceInfo": [
        {
         "c": "墙",
         "py": "qiáng",
         "hv": "tường"
        },
        {
         "c": "壁",
         "py": "bì",
         "hv": "bích"
        }
       ]
      },
      {
       "scene": "🪣🧼👕",
       "full": "这个脸盆够深的可以洗很多衣服",
       "vi": "Cái chậu rửa mặt này khá sâu, giặt được nhiều quần áo",
       "parts": [
        {
         "t": "这个脸盆",
         "ico": "🪣",
         "c": "s",
         "py": "zhè gè liǎnpén",
         "hv": "giá cá kiểm bồn"
        },
        {
         "t": "够深的",
         "ico": "🌊",
         "c": "v",
         "py": "gòu shēn de",
         "hv": "cấu thâm đích"
        },
        {
         "t": "可以洗很多衣服",
         "ico": "👕",
         "c": "o",
         "py": "kěyǐ xǐ hěn duō yīfu",
         "hv": "khả dĩ tẩy ngận đa y phục"
        }
       ],
       "traceWord": "脸盆",
       "py": "Zhè gè liǎnpén gòu shēn de kěyǐ xǐ hěn duō yīfu",
       "traceKey": "lianpen",
       "traceInfo": [
        {
         "c": "脸",
         "py": "liǎn",
         "hv": "kiểm"
        },
        {
         "c": "盆",
         "py": "pén",
         "hv": "bồn"
        }
       ]
      },
      {
       "scene": "📦⚖️🎁",
       "full": "这个盒子够重的里面一定有很多东西",
       "vi": "Cái hộp này khá nặng, bên trong chắc chắn có nhiều đồ",
       "parts": [
        {
         "t": "这个盒子",
         "ico": "📦",
         "c": "s",
         "py": "zhè gè hézi",
         "hv": "giá cá hạp tử"
        },
        {
         "t": "够重的",
         "ico": "⚖️",
         "c": "v",
         "py": "gòu zhòng de",
         "hv": "cấu trọng đích"
        },
        {
         "t": "里面一定有很多东西",
         "ico": "🎁",
         "c": "o",
         "py": "lǐmiàn yīdìng yǒu hěn duō dōngxi",
         "hv": "lý diện nhất định hữu ngận đa đông tây"
        }
       ],
       "traceWord": "盒子",
       "py": "Zhè gè hézi gòu zhòng de lǐmiàn yīdìng yǒu hěn duō dōngxi",
       "traceKey": "hezi",
       "traceInfo": [
        {
         "c": "盒",
         "py": "hé",
         "hv": "hạp"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🖥️📚🪑",
       "full": "我的书桌旁边的书柜够高的放了很多书",
       "vi": "Tủ sách cạnh bàn học của tôi khá cao, đã để rất nhiều sách",
       "parts": [
        {
         "t": "我的书桌旁边的书柜",
         "ico": "📚",
         "c": "s",
         "py": "wǒ de shūzhuō pángbiān de shūguì",
         "hv": "ngã đích thư trác bàng biên đích thư quỹ"
        },
        {
         "t": "够高的",
         "ico": "📏",
         "c": "v",
         "py": "gòu gāo de",
         "hv": "cấu cao đích"
        },
        {
         "t": "放了很多书",
         "ico": "📖",
         "c": "o",
         "py": "fàng le hěn duō shū",
         "hv": "phóng liễu ngận đa thư"
        }
       ],
       "traceWord": "书桌",
       "py": "Wǒ de shūzhuō pángbiān de shūguì gòu gāo de fàng le hěn duō shū",
       "traceKey": "shuzhuo",
       "traceInfo": [
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "桌",
         "py": "zhuō",
         "hv": "trác"
        }
       ]
      },
      {
       "scene": "🏫🛏️🤫",
       "full": "我们宿舍隔壁的房间够安静的适合看书",
       "vi": "Căn phòng bên cạnh ký túc xá của chúng tôi khá yên tĩnh, hợp để đọc sách",
       "parts": [
        {
         "t": "我们宿舍隔壁的房间",
         "ico": "🏫",
         "c": "s",
         "py": "wǒmen sùshè gébì de fángjiān",
         "hv": "ngã môn túc xá cách bích đích phòng gian"
        },
        {
         "t": "够安静的",
         "ico": "🤫",
         "c": "v",
         "py": "gòu ānjìng de",
         "hv": "cấu an tĩnh đích"
        },
        {
         "t": "适合看书",
         "ico": "📖",
         "c": "o",
         "py": "shìhé kàn shū",
         "hv": "thích hợp khán thư"
        }
       ],
       "traceWord": "宿舍",
       "py": "Wǒmen sùshè gébì de fángjiān gòu ānjìng de shìhé kàn shū",
       "traceKey": "sushe",
       "traceInfo": [
        {
         "c": "宿",
         "py": "sù",
         "hv": "túc"
        },
        {
         "c": "舍",
         "py": "shè",
         "hv": "xá"
        }
       ]
      },
      {
       "scene": "🏢🐟🌊",
       "full": "公司大厅里的池子够漂亮的里面养了很多鱼",
       "vi": "Hồ nước trong sảnh công ty khá đẹp, bên trong nuôi rất nhiều cá",
       "parts": [
        {
         "t": "公司大厅里的池子",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī dàtīng lǐ de chízi",
         "hv": "công ti đại sảnh lý đích trì tử"
        },
        {
         "t": "够漂亮的",
         "ico": "✨",
         "c": "v",
         "py": "gòu piàoliang de",
         "hv": "cấu phiêu lượng đích"
        },
        {
         "t": "里面养了很多鱼",
         "ico": "🐟",
         "c": "o",
         "py": "lǐmiàn yǎng le hěn duō yú",
         "hv": "lý diện dưỡng liễu ngận đa ngư"
        }
       ],
       "traceWord": "池子",
       "py": "Gōngsī dàtīng lǐ de chízi gòu piàoliang de lǐmiàn yǎng le hěn duō yú",
       "traceKey": "chizi",
       "traceInfo": [
        {
         "c": "池",
         "py": "chí",
         "hv": "trì"
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
       "q": "你觉得这个柜子怎么样？",
       "qvi": "Bạn thấy cái tủ này thế nào?",
       "scene": "🗄️🤔",
       "ans": "这个柜子够结实的",
       "opts": [
        {
         "txt": "我明天要去北京出差",
         "ico": "✈️",
         "py": "Wǒ míngtiān yào qù Běijīng chūchāi"
        },
        {
         "txt": "这个星期我很忙",
         "ico": "😓",
         "py": "Zhè gè xīngqī wǒ hěn máng"
        },
        {
         "txt": "这个柜子够结实的",
         "ico": "🗄️",
         "py": "Zhè gè guìzi gòu jiēshi de"
        }
       ],
       "qpy": "Nǐ juéde zhè gè guìzi zěnmeyàng?"
      },
      {
       "q": "屋里的灯够亮的吗？",
       "qvi": "Đèn trong phòng có đủ sáng không?",
       "scene": "🏠💡",
       "ans": "够亮的，不用再开灯了",
       "opts": [
        {
         "txt": "我想喝一杯热茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi rè chá"
        },
        {
         "txt": "够亮的，不用再开灯了",
         "ico": "💡",
         "py": "Gòu liàng de bùyòng zài kāi dēng le"
        },
        {
         "txt": "今天不是我的生日",
         "ico": "🎂",
         "py": "Jīntiān bú shì wǒ de shēngrì"
        }
       ],
       "qpy": "Wū lǐ de dēng gòu liàng de ma?"
      },
      {
       "q": "盆里的水热不热？",
       "qvi": "Nước trong chậu có nóng không?",
       "scene": "🪣♨️",
       "ans": "盆里的水够热的，小心一点儿",
       "opts": [
        {
         "txt": "盆里的水够热的，小心一点儿",
         "ico": "♨️",
         "py": "Pén lǐ de shuǐ gòu rè de xiǎoxīn yīdiǎnr"
        },
        {
         "txt": "我昨天去了书店",
         "ico": "📚",
         "py": "Wǒ zuótiān qù le shūdiàn"
        },
        {
         "txt": "这个周末我们不上班",
         "ico": "🏖️",
         "py": "Zhè gè zhōumò wǒmen bú shàngbān"
        }
       ],
       "qpy": "Pén lǐ de shuǐ rè bú rè?"
      },
      {
       "q": "一楼的厅怎么样？",
       "qvi": "Gian sảnh ở tầng một thế nào?",
       "scene": "🏢🛗",
       "ans": "厅够大的，可以开会",
       "opts": [
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "今天的天气很冷",
         "ico": "🥶",
         "py": "Jīntiān de tiānqì hěn lěng"
        },
        {
         "txt": "厅够大的，可以开会",
         "ico": "🏢",
         "py": "Tīng gòu dà de kěyǐ kāihuì"
        }
       ],
       "qpy": "Yī lóu de tīng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Xem nhà và nhận xét căn phòng",
      "steps": [
       "<b>Bước 1:</b> Đi một vòng trong nhà hoặc ký túc xá của bạn, vừa đi vừa nói thành tiếng nhận xét từng phòng: <i>\"这个客厅够大的\"</i>, <i>\"卧室的窗帘够长的\"</i>.",
       "<b>Bước 2:</b> Giả sử bạn đi xem nhà thuê, nhắn cho bạn bè ảnh kèm ba nhận xét về đồ đạc (bàn học, tủ sách, hộp, chậu) dùng mẫu <i>\"……够……的\"</i>.",
       "<b>Bước 3:</b> Hỏi đồng nghiệp về văn phòng: <i>\"一楼的厅怎么样？\"</i> rồi tự trả lời <i>\"厅够大的，可以开会\"</i>."
      ]
     }
    }
   ]
  },
  "5.11": {
   "lessons": [
    {
     "id": "5.11A",
     "name": "Bài 5.11A: Tính từ đánh giá và mô tả",
     "grammar": {
      "formulas": [
       "🏪 这家店 + 📏 大的大 + 📐 小的小",
       "📚 课堂上 + 🗣 讲的讲 + ✏️ 练的练",
       "⏰ 开会时 + 🌅 早的早 + 🐢 迟的迟"
      ],
      "tip": "Mẫu A的A，B的B (A de A, B de B) dùng để nêu hai tình huống đối lập đang cùng tồn tại: cái này thế này, cái kia thế kia, mỗi bên một kiểu. A và B thường là hai từ đối nhau (大/小, 早/迟, 讲/练), động từ hoặc tính từ đều được. Chữ 的 (đích) đứng giữa hai từ lặp lại; chỉ cần nói hai vế liền nhau, câu mang nghĩa \"ai làm việc nấy, cái nào ra cái nấy\".",
      "vn_tip": "Người Việt hay dịch \"người thì nói, người thì nghe\" thành \"有的人说，有的人听\" dài dòng, hoặc quên 的 mà nói 大大小小 / 讲讲练练. Với mẫu này phải giữ đủ cấu trúc lặp: 讲的讲，练的练. Đừng thêm 是 vào giữa (không nói 讲是讲，练是练 khi muốn liệt kê hai việc song song)."
     },
     "chunks": [
      {
       "scene": "🏪📏📐",
       "full": "这家店大的大小的小东西很齐全",
       "vi": "Cửa hàng này cái to cái nhỏ, hàng hóa rất đầy đủ",
       "parts": [
        {
         "t": "这家店",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā diàn",
         "hv": "giá gia điếm"
        },
        {
         "t": "大的大小的小",
         "ico": "📏",
         "c": "v",
         "py": "dà de dàxiǎo de xiǎo",
         "hv": "đại đích đại tiểu đích tiểu"
        },
        {
         "t": "东西很齐全",
         "ico": "✅",
         "c": "o",
         "py": "dōngxi hěn qíquán",
         "hv": "đông tây ngận tề toàn"
        }
       ],
       "traceWord": "齐全",
       "py": "Zhè jiā diàn dà de dàxiǎo de xiǎo dōngxi hěn qíquán",
       "traceKey": "qiquan",
       "traceInfo": [
        {
         "c": "齐",
         "py": "qí",
         "hv": "tề"
        },
        {
         "c": "全",
         "py": "quán",
         "hv": "toàn"
        }
       ]
      },
      {
       "scene": "🏫🗣✏️😓",
       "full": "课堂上讲的讲练的练大家都很辛苦",
       "vi": "Trong lớp người giảng người luyện, ai cũng rất vất vả",
       "parts": [
        {
         "t": "课堂上",
         "ico": "🏫",
         "c": "s",
         "py": "kètáng shàng",
         "hv": "khóa đường thượng"
        },
        {
         "t": "讲的讲练的练",
         "ico": "🗣",
         "c": "v",
         "py": "jiǎng de jiǎng liàn de liàn",
         "hv": "giảng đích giảng luyện đích luyện"
        },
        {
         "t": "大家都很辛苦",
         "ico": "😓",
         "c": "o",
         "py": "dàjiā dōu hěn xīnkǔ",
         "hv": "đại gia đô ngận tân khổ"
        }
       ],
       "traceWord": "辛苦",
       "py": "Kètáng shàng jiǎng de jiǎng liàn de liàn dàjiā dōu hěn xīnkǔ",
       "traceKey": "xinku",
       "traceInfo": [
        {
         "c": "辛",
         "py": "xīn",
         "hv": "tân"
        },
        {
         "c": "苦",
         "py": "kǔ",
         "hv": "khổ"
        }
       ]
      },
      {
       "scene": "💼⏰🐢",
       "full": "开会时早的早迟的迟大家都习惯了",
       "vi": "Lúc họp người đến sớm người đến muộn, mọi người đều quen rồi",
       "parts": [
        {
         "t": "开会时",
         "ico": "💼",
         "c": "s",
         "py": "kāihuì shí",
         "hv": "khai hội thời"
        },
        {
         "t": "早的早迟的迟",
         "ico": "⏰",
         "c": "v",
         "py": "zǎo de zǎo chí de chí",
         "hv": "tảo đích tảo trì đích trì"
        },
        {
         "t": "大家都习惯了",
         "ico": "🙂",
         "c": "o",
         "py": "dàjiā dōu xíguàn le",
         "hv": "đại gia đô tập quán liễu"
        }
       ],
       "traceWord": "迟",
       "py": "Kāihuì shí zǎo de zǎo chí de chí dàjiā dōu xíguàn le",
       "traceKey": "chi",
       "traceInfo": [
        {
         "c": "迟",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🏺💎🛡",
       "full": "这些东西古老的古老珍贵的珍贵都要保护好",
       "vi": "Những thứ này cái thì cổ xưa cái thì quý giá, đều phải bảo vệ cho tốt",
       "parts": [
        {
         "t": "这些东西",
         "ico": "🏺",
         "c": "s",
         "py": "zhèxiē dōngxi",
         "hv": "giá ta đông tây"
        },
        {
         "t": "古老的古老珍贵的珍贵",
         "ico": "💎",
         "c": "v",
         "py": "gǔlǎo de gǔlǎo zhēnguì de zhēnguì",
         "hv": "cổ lão đích cổ lão trân quý đích trân quý"
        },
        {
         "t": "都要保护好",
         "ico": "🛡",
         "c": "o",
         "py": "dōu yào bǎohù hǎo",
         "hv": "đô yếu bảo hộ hảo"
        }
       ],
       "traceWord": "古老",
       "py": "Zhèxiē dōngxi gǔlǎo de gǔlǎo zhēnguì de zhēnguì dōu yào bǎohù hǎo",
       "traceKey": "gulao",
       "traceInfo": [
        {
         "c": "古",
         "py": "gǔ",
         "hv": "cổ"
        },
        {
         "c": "老",
         "py": "lǎo",
         "hv": "lão"
        }
       ]
      },
      {
       "scene": "🏫👩‍🏫😠😊",
       "full": "学校里的老师严厉的严厉温和的温和学生都能学到东西",
       "vi": "Giáo viên trong trường người nghiêm khắc người ôn hòa, học sinh đều học được điều hay",
       "parts": [
        {
         "t": "学校里的老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "xuéxiào lǐ de lǎoshī",
         "hv": "học hiệu lý đích lão sư"
        },
        {
         "t": "严厉的严厉温和的温和",
         "ico": "😠",
         "c": "v",
         "py": "yánlì de yánlì wēnhé de wēnhé",
         "hv": "nghiêm lệ đích nghiêm lệ ôn hòa đích ôn hòa"
        },
        {
         "t": "学生都能学到东西",
         "ico": "📖",
         "c": "o",
         "py": "xuéshēng dōu néng xué dào dōngxi",
         "hv": "học sinh đô năng học đáo đông tây"
        }
       ],
       "traceWord": "严厉",
       "py": "Xuéxiào lǐ de lǎoshī yánlì de yánlì wēnhé de wēnhé xuéshēng dōu néng xué dào dōngxi",
       "traceKey": "yanli",
       "traceInfo": [
        {
         "c": "严",
         "py": "yán",
         "hv": "nghiêm"
        },
        {
         "c": "厉",
         "py": "lì",
         "hv": "lệ"
        }
       ]
      },
      {
       "scene": "🏢🗣👂😐",
       "full": "会议上讲的讲听的听大家都很严肃",
       "vi": "Trong cuộc họp người nói người nghe, ai cũng rất nghiêm túc",
       "parts": [
        {
         "t": "会议上",
         "ico": "🏢",
         "c": "s",
         "py": "huìyì shàng",
         "hv": "hội nghị thượng"
        },
        {
         "t": "讲的讲听的听",
         "ico": "👂",
         "c": "v",
         "py": "jiǎng de jiǎng tīng de tīng",
         "hv": "giảng đích giảng thính đích thính"
        },
        {
         "t": "大家都很严肃",
         "ico": "😐",
         "c": "o",
         "py": "dàjiā dōu hěn yánsù",
         "hv": "đại gia đô ngận nghiêm túc"
        }
       ],
       "traceWord": "严肃",
       "py": "Huìyì shàng jiǎng de jiǎng tīng de tīng dàjiā dōu hěn yánsù",
       "traceKey": "yansu",
       "traceInfo": [
        {
         "c": "严",
         "py": "yán",
         "hv": "nghiêm"
        },
        {
         "c": "肃",
         "py": "sù",
         "hv": "túc"
        }
       ]
      },
      {
       "scene": "📚🙋💡",
       "full": "上课时提问的提问回答的回答内容详细而且很广泛",
       "vi": "Trong giờ học người hỏi người đáp, nội dung vừa chi tiết vừa rộng",
       "parts": [
        {
         "t": "上课时",
         "ico": "📚",
         "c": "s",
         "py": "shàngkè shí",
         "hv": "thượng khóa thời"
        },
        {
         "t": "提问的提问回答的回答",
         "ico": "🙋",
         "c": "v",
         "py": "tíwèn de tíwèn huídá de huídá",
         "hv": "đề vấn đích đề vấn hồi đáp đích hồi đáp"
        },
        {
         "t": "内容详细而且很广泛",
         "ico": "💡",
         "c": "o",
         "py": "nèiróng xiángxì érqiě hěn guǎngfàn",
         "hv": "nội dung tường tế nhi thả ngận quảng phiếm"
        }
       ],
       "traceWord": "详细",
       "py": "Shàngkè shí tíwèn de tíwèn huídá de huídá nèiróng xiángxì érqiě hěn guǎngfàn",
       "traceKey": "xiangxi",
       "traceInfo": [
        {
         "c": "详",
         "py": "xiáng",
         "hv": "tường"
        },
        {
         "c": "细",
         "py": "xì",
         "hv": "tế"
        }
       ]
      },
      {
       "scene": "🏭🛠💰👍",
       "full": "这家公司做的做卖的卖产品一流服务也很棒",
       "vi": "Công ty này người làm người bán, sản phẩm hạng nhất, dịch vụ cũng rất tuyệt",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏭",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "做的做卖的卖",
         "ico": "🛠",
         "c": "v",
         "py": "zuò de zuò mài de mài",
         "hv": "tố đích tố mại đích mại"
        },
        {
         "t": "产品一流服务也很棒",
         "ico": "👍",
         "c": "o",
         "py": "chǎnpǐn yīliú fúwù yě hěn bàng",
         "hv": "sản phẩm nhất lưu phục vụ dã ngận bổng"
        }
       ],
       "traceWord": "一流",
       "py": "Zhè jiā gōngsī zuò de zuò mài de mài chǎnpǐn yīliú fúwù yě hěn bàng",
       "traceKey": "yiliu",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "流",
         "py": "liú",
         "hv": "lưu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得这件衣服怎么样？",
       "qvi": "Bạn thấy chiếc áo này thế nào?",
       "scene": "👕🤔",
       "ans": "样子有点丑但是很舒服",
       "opts": [
        {
         "txt": "样子有点丑但是很舒服",
         "ico": "👕",
         "py": "Yàngzi yǒu diǎn chǒu dànshì hěn shūfu"
        },
        {
         "txt": "我们明天下午开会",
         "ico": "💼",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "他在办公室吃饭",
         "ico": "🍚",
         "py": "Tā zài bàngōngshì chīfàn"
        }
       ],
       "qpy": "Nǐ juéde zhè jiàn yīfu zěnmeyàng?"
      },
      {
       "q": "搬这么重的箱子你觉得吃力吗？",
       "qvi": "Bê chiếc thùng nặng thế này bạn có thấy vất vả không?",
       "scene": "📦😓",
       "ans": "有点吃力我需要别人帮忙",
       "opts": [
        {
         "txt": "我昨天去过北京",
         "ico": "🏙",
         "py": "Wǒ zuótiān qù guò Běijīng"
        },
        {
         "txt": "有点吃力我需要别人帮忙",
         "ico": "📦",
         "py": "Yǒu diǎn chīlì wǒ xūyào biérén bāngmáng"
        },
        {
         "txt": "这个周末天气很好",
         "ico": "☀️",
         "py": "Zhè gè zhōumò tiānqì hěn hǎo"
        }
       ],
       "qpy": "Bān zhème zhòng de xiāngzi nǐ juéde chīlì ma?"
      },
      {
       "q": "你们公司的产品种类多吗？",
       "qvi": "Sản phẩm của công ty các bạn có nhiều loại không?",
       "scene": "🏭📦",
       "ans": "不多我们的产品比较单一",
       "opts": [
        {
         "txt": "我喜欢在周末去爬山",
         "ico": "⛰",
         "py": "Wǒ xǐhuan zài zhōumò qù pá shān"
        },
        {
         "txt": "他明年想去美国留学",
         "ico": "✈️",
         "py": "Tā míngnián xiǎng qù Měiguó liúxué"
        },
        {
         "txt": "不多我们的产品比较单一",
         "ico": "📦",
         "py": "Bù duō wǒmen de chǎnpǐn bǐjiào dānyī"
        }
       ],
       "qpy": "Nǐmen gōngsī de chǎnpǐn zhǒnglèi duō ma?"
      },
      {
       "q": "你检查这份合同了吗？",
       "qvi": "Bạn đã kiểm tra bản hợp đồng này chưa?",
       "scene": "📄🔍",
       "ans": "检查了我看得很仔细",
       "opts": [
        {
         "txt": "我们的公司在北京",
         "ico": "🏢",
         "py": "Wǒmen de gōngsī zài Běijīng"
        },
        {
         "txt": "这件衣服很便宜",
         "ico": "👕",
         "py": "Zhè jiàn yīfu hěn piányi"
        },
        {
         "txt": "检查了我看得很仔细",
         "ico": "🔍",
         "py": "Jiǎnchá le wǒ kàn de hěn zǐxì"
        }
       ],
       "qpy": "Nǐ jiǎnchá zhè fèn hétóng le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận xét về nơi làm việc của bạn",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh văn phòng hoặc cửa hàng gần nhà, chọn hai thứ đối lập (to/nhỏ, sớm/muộn) và nói thành tiếng theo mẫu, ví dụ <i>\"这家店大的大小的小，东西很齐全\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp, nhận xét buổi họp hôm nay bằng ít nhất ba tính từ mới như 严肃、详细、辛苦, ví dụ <i>\"会议上讲的讲听的听，大家都很严肃\"</i>.",
       "<b>Bước 3:</b> Tự mô tả công ty hoặc sản phẩm của mình cho một đối tác tưởng tượng bằng mẫu A的A，B的B và khen một điểm mạnh, ví dụ <i>\"产品一流，服务也很棒\"</i>."
      ]
     }
    },
    {
     "id": "5.11B",
     "name": "Bài 5.11B: Thiên tai và cứu hộ",
     "grammar": {
      "formulas": [
       "🍚 这锅饭 + 🍴 吃 + 👥 十个人",
       "🚗 这辆车 + 🪑 坐 + 👥 五个人",
       "🔥 火灾现场 + 🚒 来了 + 👨‍🚒 十个消防队员"
      ],
      "tip": "Tân ngữ trong tiếng Trung không chỉ là đối tượng chịu tác động (thụ sự) mà còn có thể là người thực hiện (thi sự) hoặc là nơi chốn, số lượng. Ví dụ 一锅饭吃十个人 (một nồi cơm đủ cho mười người ăn): chủ ngữ là vật chứa, tân ngữ 十个人 là người ăn. Câu tồn hiện như 来了十个消防队员 cũng đặt người xuất hiện ở sau động từ. Cấu trúc: nơi chốn/vật chứa + động từ + số lượng + người.",
      "vn_tip": "Người Việt hay nói theo trật tự \"mười người ăn một nồi cơm\", rồi dịch thành 十个人吃一锅饭 (câu này vẫn đúng nhưng nghĩa khác: nhấn vào người). Muốn nói sức chứa thì phải đặt vật chứa lên trước: 这张桌子坐八个人. Với sự việc xuất hiện, đặt người ở cuối: 来了消防队员, không nói 消防队员来了 khi lần đầu nhắc đến."
     },
     "chunks": [
      {
       "scene": "🌀🌳💨",
       "full": "这次台风在夜里吹倒了很多大树",
       "vi": "Cơn bão lần này trong đêm đã thổi đổ rất nhiều cây lớn",
       "parts": [
        {
         "t": "这次台风",
         "ico": "🌀",
         "c": "s",
         "py": "zhè cì táifēng",
         "hv": "giá thứ đài phong"
        },
        {
         "t": "在夜里吹倒了",
         "ico": "💨",
         "c": "v",
         "py": "zài yèlǐ chuī dǎo le",
         "hv": "tại dạ lý xuy đảo liễu"
        },
        {
         "t": "很多大树",
         "ico": "🌳",
         "c": "o",
         "py": "hěn duō dà shù",
         "hv": "ngận đa đại thụ"
        }
       ],
       "traceWord": "台风",
       "py": "Zhè cì táifēng zài yèlǐ chuī dǎo le hěn duō dà shù",
       "traceKey": "taifeng",
       "traceInfo": [
        {
         "c": "台",
         "py": "tái",
         "hv": "đài"
        },
        {
         "c": "风",
         "py": "fēng",
         "hv": "phong"
        }
       ]
      },
      {
       "scene": "🔥🚒👨‍🚒",
       "full": "火灾现场来了十个消防队员",
       "vi": "Hiện trường vụ hỏa hoạn có mười lính cứu hỏa đến",
       "parts": [
        {
         "t": "火灾现场",
         "ico": "🔥",
         "c": "s",
         "py": "huǒzāi xiànchǎng",
         "hv": "hỏa tai hiện trường"
        },
        {
         "t": "来了",
         "ico": "🚒",
         "c": "v",
         "py": "lái le",
         "hv": "lai liễu"
        },
        {
         "t": "十个消防队员",
         "ico": "👨‍🚒",
         "c": "o",
         "py": "shí gè xiāofáng duìyuán",
         "hv": "thập cá tiêu phòng đội viên"
        }
       ],
       "traceWord": "消防",
       "py": "Huǒzāi xiànchǎng lái le shí gè xiāofáng duìyuán",
       "traceKey": "xiaofang",
       "traceInfo": [
        {
         "c": "消",
         "py": "xiāo",
         "hv": "tiêu"
        },
        {
         "c": "防",
         "py": "fáng",
         "hv": "phòng"
        }
       ]
      },
      {
       "scene": "🏫🏚👨‍👩‍👧",
       "full": "灾区的学校里住了很多受灾群众",
       "vi": "Trong trường học ở vùng thiên tai có rất nhiều người dân bị nạn đang ở",
       "parts": [
        {
         "t": "灾区的学校里",
         "ico": "🏫",
         "c": "s",
         "py": "zāiqū de xuéxiào lǐ",
         "hv": "tai khu đích học hiệu lý"
        },
        {
         "t": "住了",
         "ico": "🏚",
         "c": "v",
         "py": "zhù le",
         "hv": "trú liễu"
        },
        {
         "t": "很多受灾群众",
         "ico": "👨‍👩‍👧",
         "c": "o",
         "py": "hěn duō shòuzāi qúnzhòng",
         "hv": "ngận đa thụ tai quần chúng"
        }
       ],
       "traceWord": "受灾",
       "py": "Zāiqū de xuéxiào lǐ zhù le hěn duō shòuzāi qúnzhòng",
       "traceKey": "shouzai",
       "traceInfo": [
        {
         "c": "受",
         "py": "shòu",
         "hv": "thụ"
        },
        {
         "c": "灾",
         "py": "zāi",
         "hv": "tai"
        }
       ]
      },
      {
       "scene": "🤝📦💰",
       "full": "为了救灾各地送来了很多钱和东西",
       "vi": "Để cứu trợ thiên tai, các nơi đã gửi đến rất nhiều tiền và đồ đạc",
       "parts": [
        {
         "t": "为了救灾",
         "ico": "🤝",
         "c": "s",
         "py": "wèile jiùzāi",
         "hv": "vị liễu cứu tai"
        },
        {
         "t": "各地送来了",
         "ico": "📦",
         "c": "v",
         "py": "gèdì sòng lái le",
         "hv": "các địa tống lai liễu"
        },
        {
         "t": "很多钱和东西",
         "ico": "💰",
         "c": "o",
         "py": "hěn duō qián hé dōngxi",
         "hv": "ngận đa tiền hòa đông tây"
        }
       ],
       "traceWord": "救灾",
       "py": "Wèile jiùzāi gèdì sòng lái le hěn duō qián hé dōngxi",
       "traceKey": "jiuzai",
       "traceInfo": [
        {
         "c": "救",
         "py": "jiù",
         "hv": "cứu"
        },
        {
         "c": "灾",
         "py": "zāi",
         "hv": "tai"
        }
       ]
      },
      {
       "scene": "🌧🌊🏘",
       "full": "连续几天的雨水造成了严重的水灾",
       "vi": "Mưa liên tiếp nhiều ngày đã gây ra trận lụt nghiêm trọng",
       "parts": [
        {
         "t": "连续几天的雨水",
         "ico": "🌧",
         "c": "s",
         "py": "liánxù jǐ tiān de yǔshuǐ",
         "hv": "liên tục kỷ thiên đích vũ thủy"
        },
        {
         "t": "造成了",
         "ico": "⚡",
         "c": "v",
         "py": "zàochéng le",
         "hv": "tạo thành liễu"
        },
        {
         "t": "严重的水灾",
         "ico": "🌊",
         "c": "o",
         "py": "yánzhòng de shuǐzāi",
         "hv": "nghiêm trọng đích thủy tai"
        }
       ],
       "traceWord": "水灾",
       "py": "Liánxù jǐ tiān de yǔshuǐ zàochéng le yánzhòng de shuǐzāi",
       "traceKey": "shuizai",
       "traceInfo": [
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        },
        {
         "c": "灾",
         "py": "zāi",
         "hv": "tai"
        }
       ]
      },
      {
       "scene": "🌍🏚⚠️",
       "full": "地震是一种严重的自然灾害",
       "vi": "Động đất là một loại thiên tai tự nhiên nghiêm trọng",
       "parts": [
        {
         "t": "地震",
         "ico": "🌍",
         "c": "s",
         "py": "dìzhèn",
         "hv": "địa chấn"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "一种严重的自然灾害",
         "ico": "⚠️",
         "c": "o",
         "py": "yī zhǒng yánzhòng de zìrán zāihài",
         "hv": "nhất chủng nghiêm trọng đích tự nhiên tai hại"
        }
       ],
       "traceWord": "灾害",
       "py": "Dìzhèn shì yī zhǒng yánzhòng de zìrán zāihài",
       "traceKey": "zaihai",
       "traceInfo": [
        {
         "c": "灾",
         "py": "zāi",
         "hv": "tai"
        },
        {
         "c": "害",
         "py": "hài",
         "hv": "hại"
        }
       ]
      },
      {
       "scene": "🌧🚶🤕📱",
       "full": "小李在路上摔倒了手机也摔坏了",
       "vi": "Tiểu Lý bị ngã trên đường, điện thoại cũng rơi hỏng",
       "parts": [
        {
         "t": "小李",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎolǐ",
         "hv": "tiểu lý"
        },
        {
         "t": "在路上摔倒了",
         "ico": "🚶",
         "c": "v",
         "py": "zài lùshang shuāidǎo le",
         "hv": "tại lộ thượng suất đảo liễu"
        },
        {
         "t": "手机也摔坏了",
         "ico": "📱",
         "c": "o",
         "py": "shǒujī yě shuāi huài le",
         "hv": "thủ cơ dã suất hoại liễu"
        }
       ],
       "traceWord": "摔倒",
       "py": "Xiǎolǐ zài lùshang shuāidǎo le shǒujī yě shuāi huài le",
       "traceKey": "shuaidao",
       "traceInfo": [
        {
         "c": "摔",
         "py": "shuāi",
         "hv": "suất"
        },
        {
         "c": "倒",
         "py": "dǎo",
         "hv": "đảo"
        }
       ]
      },
      {
       "scene": "☀️🚗🌳💥",
       "full": "天气晴朗时那辆车却撞了一棵树",
       "vi": "Lúc trời quang đãng chiếc xe đó lại đâm vào một cái cây",
       "parts": [
        {
         "t": "天气晴朗时那辆车",
         "ico": "🚗",
         "c": "s",
         "py": "tiānqì qínglǎng shí nà liàng chē",
         "hv": "thiên khí tình lãng thời na lượng xa"
        },
        {
         "t": "却撞了",
         "ico": "💥",
         "c": "v",
         "py": "què zhuàng le",
         "hv": "khước chàng liễu"
        },
        {
         "t": "一棵树",
         "ico": "🌳",
         "c": "o",
         "py": "yī kē shù",
         "hv": "nhất khỏa thụ"
        }
       ],
       "traceWord": "晴朗",
       "py": "Tiānqì qínglǎng shí nà liàng chē què zhuàng le yī kē shù",
       "traceKey": "qinglang",
       "traceInfo": [
        {
         "c": "晴",
         "py": "qíng",
         "hv": "tình"
        },
        {
         "c": "朗",
         "py": "lǎng",
         "hv": "lãng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这场地震给当地带来了什么？",
       "qvi": "Trận động đất này mang lại điều gì cho địa phương?",
       "scene": "🌍🏚",
       "ans": "带来了一场很大的灾难",
       "opts": [
        {
         "txt": "带来了一场很大的灾难",
         "ico": "🏚",
         "py": "Dàilái le yī chǎng hěn dà de zāinàn"
        },
        {
         "txt": "带来了很多新朋友",
         "ico": "🤝",
         "py": "Dàilái le hěn duō xīn péngyou"
        },
        {
         "txt": "今年的奖金特别高",
         "ico": "💰",
         "py": "Jīnnián de jiǎngjīn tèbié gāo"
        }
       ],
       "qpy": "Zhè chǎng dìzhèn gěi dāngdì dàilái le shénme?"
      },
      {
       "q": "发生火灾的时候应该给谁打电话？",
       "qvi": "Khi xảy ra hỏa hoạn nên gọi điện cho ai?",
       "scene": "🔥📞",
       "ans": "应该给消防打电话",
       "opts": [
        {
         "txt": "应该给老师打电话",
         "ico": "👩‍🏫",
         "py": "Yīnggāi gěi lǎoshī dǎ diànhuà"
        },
        {
         "txt": "应该给银行打电话",
         "ico": "🏦",
         "py": "Yīnggāi gěi yínháng dǎ diànhuà"
        },
        {
         "txt": "应该给消防打电话",
         "ico": "🚒",
         "py": "Yīnggāi gěi xiāofáng dǎ diànhuà"
        }
       ],
       "qpy": "Fāshēng huǒzāi de shíhou yīnggāi gěi shéi dǎ diànhuà?"
      },
      {
       "q": "这锅饭够几个人吃？",
       "qvi": "Nồi cơm này đủ cho mấy người ăn?",
       "scene": "🍚👥",
       "ans": "这锅饭吃十个人",
       "opts": [
        {
         "txt": "这辆车坐五个人",
         "ico": "🚗",
         "py": "Zhè liàng chē zuò wǔ gè rén"
        },
        {
         "txt": "这张桌子放两本书",
         "ico": "📚",
         "py": "Zhè zhāng zhuōzi fàng liǎng běn shū"
        },
        {
         "txt": "这锅饭吃十个人",
         "ico": "🍚",
         "py": "Zhè guō fàn chī shí gè rén"
        }
       ],
       "qpy": "Zhè guō fàn gòu jǐ gè rén chī?"
      },
      {
       "q": "台风来了以后你们怎么防灾？",
       "qvi": "Sau khi bão đến các bạn phòng chống thiên tai thế nào?",
       "scene": "🌀🏠",
       "ans": "我们要留在家里不出门",
       "opts": [
        {
         "txt": "我们要去海边玩儿",
         "ico": "🏖",
         "py": "Wǒmen yào qù hǎi biān wánr"
        },
        {
         "txt": "我们要留在家里不出门",
         "ico": "🏠",
         "py": "Wǒmen yào liú zài jiā li bù chūmén"
        },
        {
         "txt": "我们要去公园跑步",
         "ico": "🏃",
         "py": "Wǒmen yào qù gōngyuán pǎobù"
        }
       ],
       "qpy": "Táifēng lái le yǐhòu nǐmen zěnme fáng zāi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Theo dõi tin thiên tai và nhắn hỏi thăm",
      "steps": [
       "<b>Bước 1:</b> Mở một bản tin về bão hoặc lũ, ghi lại ba câu ngắn bằng tiếng Trung theo kiểu \"nơi chốn + động từ + người/vật\", ví dụ <i>\"灾区的学校里住了很多受灾群众\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một đồng nghiệp ở vùng có bão để hỏi thăm và dặn dò, ví dụ <i>\"台风来了，你们要留在家里不出门\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng với đối tác: công ty bạn muốn góp tiền và đồ cứu trợ, dùng <i>\"为了救灾，各地送来了很多钱和东西\"</i> làm câu mở đầu."
      ]
     }
    },
    {
     "id": "5.11C",
     "name": "Bài 5.11C: Tổ chức và nhân sự",
     "grammar": {
      "formulas": [
       "🧑 厂长 + ⏰ 今天上午 + 📍 在办公室里 + 💬 认真地 + ⚡ 回答",
       "🧑 局长 + ⏰ 昨天下午 + 📍 在社区里 + 😊 热情地 + ⚡ 接待",
       "🧑 团长 + ⏰ 上周 + 📍 在俱乐部里 + 💬 认真地 + ⚡ 介绍"
      ],
      "tip": "Trạng ngữ nhiều tầng đứng trước động từ theo thứ tự thường gặp: thời gian, địa điểm (在...), đối tượng (向/给...), cách thức (...地), rồi mới đến động từ. Ví dụ: 厂长今天上午在办公室里认真地回答了问题. Trạng ngữ chỉ cách thức có 地 (địa) đứng sát động từ nhất. Thời gian có thể đứng trước hoặc sau chủ ngữ, nhưng không bao giờ đứng sau động từ.",
      "vn_tip": "Tiếng Việt cho phép đặt nơi chốn và thời gian ở cuối câu (\"anh ấy phát biểu ở văn phòng sáng nay\"), nên người Việt hay viết 他发言在办公室今天上午. Trong tiếng Trung phải kéo hết lên trước động từ: 他今天上午在办公室发言. Khi có nhiều trạng ngữ, trạng ngữ chỉ cách thức thường thêm 地 và đứng sát động từ: 认真地回答."
     },
     "chunks": [
      {
       "scene": "🧑‍💼🏢💬",
       "full": "厂长今天上午在办公室里认真地回答了群众的问题",
       "vi": "Giám đốc nhà máy sáng nay trong văn phòng đã nghiêm túc trả lời câu hỏi của quần chúng",
       "parts": [
        {
         "t": "厂长",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "chǎngzhǎng",
         "hv": "xưởng trưởng"
        },
        {
         "t": "今天上午在办公室里认真地回答了",
         "ico": "💬",
         "c": "v",
         "py": "jīntiān shàngwǔ zài bàngōngshì lǐ rènzhēn de huídá le",
         "hv": "kim thiên thượng ngọ tại biện công thất lý nhận chân địa hồi đáp liễu"
        },
        {
         "t": "群众的问题",
         "ico": "❓",
         "c": "o",
         "py": "qúnzhòng de wèntí",
         "hv": "quần chúng đích vấn đề"
        }
       ],
       "traceWord": "厂长",
       "py": "Chǎngzhǎng jīntiān shàngwǔ zài bàngōngshì lǐ rènzhēn de huídá le qúnzhòng de wèntí",
       "traceKey": "changzhang",
       "traceInfo": [
        {
         "c": "厂",
         "py": "chǎng",
         "hv": "xưởng"
        },
        {
         "c": "长",
         "py": "zhǎng",
         "hv": "trưởng"
        }
       ]
      },
      {
       "scene": "🏘🤝🌍",
       "full": "局长昨天下午在社区里热情地接待了几位外国人士",
       "vi": "Cục trưởng chiều hôm qua trong khu dân cư đã nhiệt tình tiếp đón mấy vị nhân sĩ nước ngoài",
       "parts": [
        {
         "t": "局长",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "júzhǎng",
         "hv": "cục trưởng"
        },
        {
         "t": "昨天下午在社区里热情地接待了",
         "ico": "🤝",
         "c": "v",
         "py": "zuótiān xiàwǔ zài shèqū lǐ rèqíng de jiēdài le",
         "hv": "tạc thiên hạ ngọ tại xã khu lý nhiệt tình địa tiếp đãi liễu"
        },
        {
         "t": "几位外国人士",
         "ico": "🌍",
         "c": "o",
         "py": "jǐ wèi wàiguó rénshì",
         "hv": "kỷ vị ngoại quốc nhân sĩ"
        }
       ],
       "traceWord": "社区",
       "py": "Júzhǎng zuótiān xiàwǔ zài shèqū lǐ rèqíng de jiēdài le jǐ wèi wàiguó rénshì",
       "traceKey": "shequ",
       "traceInfo": [
        {
         "c": "社",
         "py": "shè",
         "hv": "xã"
        },
        {
         "c": "区",
         "py": "qū",
         "hv": "khu"
        }
       ]
      },
      {
       "scene": "🏅🗣📋",
       "full": "团长上周在俱乐部里认真地给大家介绍了新的计划",
       "vi": "Trưởng đoàn tuần trước trong câu lạc bộ đã nghiêm túc giới thiệu kế hoạch mới cho mọi người",
       "parts": [
        {
         "t": "团长",
         "ico": "🏅",
         "c": "s",
         "py": "tuánzhǎng",
         "hv": "đoàn trưởng"
        },
        {
         "t": "上周在俱乐部里认真地给大家介绍了",
         "ico": "🗣",
         "c": "v",
         "py": "shàng zhōu zài jùlèbù lǐ rènzhēn de gěi dàjiā jièshào le",
         "hv": "thượng chu tại câu lạc bộ lý nhận chân địa cấp đại gia giới thiệu liễu"
        },
        {
         "t": "新的计划",
         "ico": "📋",
         "c": "o",
         "py": "xīn de jìhuà",
         "hv": "tân đích kế hoạch"
        }
       ],
       "traceWord": "俱乐部",
       "py": "Tuánzhǎng shàng zhōu zài jùlèbù lǐ rènzhēn de gěi dàjiā jièshào le xīn de jìhuà",
       "traceKey": "julebu",
       "traceInfo": [
        {
         "c": "俱",
         "py": "jù",
         "hv": "câu"
        },
        {
         "c": "乐",
         "py": "lè",
         "hv": "lạc"
        },
        {
         "c": "部",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      },
      {
       "scene": "🚗😠👮",
       "full": "车主昨天在停车场很生气地向交警说明了事故的经过",
       "vi": "Chủ xe hôm qua ở bãi đỗ xe rất tức giận trình bày với cảnh sát giao thông diễn biến vụ tai nạn",
       "parts": [
        {
         "t": "车主",
         "ico": "🚗",
         "c": "s",
         "py": "chēzhǔ",
         "hv": "xa chủ"
        },
        {
         "t": "昨天在停车场很生气地向交警说明了",
         "ico": "😠",
         "c": "v",
         "py": "zuótiān zài tíngchēchǎng hěn shēngqì de xiàng jiāojǐng shuōmíng le",
         "hv": "tạc thiên tại đình xa trường ngận sinh khí địa hướng giao cảnh thuyết minh liễu"
        },
        {
         "t": "事故的经过",
         "ico": "📝",
         "c": "o",
         "py": "shìgù de jīngguò",
         "hv": "sự cố đích kinh quá"
        }
       ],
       "traceWord": "车主",
       "py": "Chēzhǔ zuótiān zài tíngchēchǎng hěn shēngqì de xiàng jiāojǐng shuōmíng le shìgù de jīngguò",
       "traceKey": "chezhu",
       "traceInfo": [
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        },
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        }
       ]
      },
      {
       "scene": "🏢✅📋",
       "full": "上级上个月在北京明确地批准了集团的新计划",
       "vi": "Cấp trên tháng trước ở Bắc Kinh đã phê chuẩn rõ ràng kế hoạch mới của tập đoàn",
       "parts": [
        {
         "t": "上级",
         "ico": "🏢",
         "c": "s",
         "py": "shàngjí",
         "hv": "thượng cấp"
        },
        {
         "t": "上个月在北京明确地批准了",
         "ico": "✅",
         "c": "v",
         "py": "shàng ge yuè zài Běijīng míngquè de pīzhǔn le",
         "hv": "thượng cá nguyệt tại bắc kinh minh xác địa phê chuẩn liễu"
        },
        {
         "t": "集团的新计划",
         "ico": "📋",
         "c": "o",
         "py": "jítuán de xīn jìhuà",
         "hv": "tập đoàn đích tân kế hoạch"
        }
       ],
       "traceWord": "上级",
       "py": "Shàngjí shàng ge yuè zài Běijīng míngquè de pīzhǔn le jítuán de xīn jìhuà",
       "traceKey": "shangji",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "级",
         "py": "jí",
         "hv": "cấp"
        }
       ]
      },
      {
       "scene": "🏛🌏🎪",
       "full": "中央最近在全国积极地组织了一次大型活动",
       "vi": "Trung ương gần đây đã tích cực tổ chức một hoạt động quy mô lớn trên toàn quốc",
       "parts": [
        {
         "t": "中央",
         "ico": "🏛",
         "c": "s",
         "py": "zhōngyāng",
         "hv": "trung ương"
        },
        {
         "t": "最近在全国积极地组织了",
         "ico": "🌏",
         "c": "v",
         "py": "zuìjìn zài quánguó jījí de zǔzhī le",
         "hv": "tối cận tại toàn quốc tích cực địa tổ chức liễu"
        },
        {
         "t": "一次大型活动",
         "ico": "🎪",
         "c": "o",
         "py": "yī cì dàxíng huódòng",
         "hv": "nhất thứ đại hình hoạt động"
        }
       ],
       "traceWord": "组织",
       "py": "Zhōngyāng zuìjìn zài quánguó jījí de zǔzhī le yī cì dàxíng huódòng",
       "traceKey": "zuzhi",
       "traceInfo": [
        {
         "c": "组",
         "py": "zǔ",
         "hv": "tổ"
        },
        {
         "c": "织",
         "py": "zhī",
         "hv": "chức"
        }
       ]
      },
      {
       "scene": "🌍👥💬",
       "full": "不同国籍的员工经常在会上热烈地讨论公司的新计划",
       "vi": "Nhân viên các quốc tịch khác nhau thường xuyên trong cuộc họp thảo luận sôi nổi về kế hoạch mới của công ty",
       "parts": [
        {
         "t": "不同国籍的员工",
         "ico": "🌍",
         "c": "s",
         "py": "bù tóng guójí de yuángōng",
         "hv": "bất đồng quốc tịch đích viên công"
        },
        {
         "t": "经常在会上热烈地讨论",
         "ico": "💬",
         "c": "v",
         "py": "jīngcháng zài huì shàng rèliè de tǎolùn",
         "hv": "kinh thường tại hội thượng nhiệt liệt địa thảo luận"
        },
        {
         "t": "公司的新计划",
         "ico": "📋",
         "c": "o",
         "py": "gōngsī de xīn jìhuà",
         "hv": "công ti đích tân kế hoạch"
        }
       ],
       "traceWord": "国籍",
       "py": "Bù tóng guójí de yuángōng jīngcháng zài huì shàng rèliè de tǎolùn gōngsī de xīn jìhuà",
       "traceKey": "guoji",
       "traceInfo": [
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
        },
        {
         "c": "籍",
         "py": "jí",
         "hv": "tịch"
        }
       ]
      },
      {
       "scene": "🏛📰📊",
       "full": "政府每年通过报纸向国民公布重要的数据",
       "vi": "Chính phủ hằng năm thông qua báo chí công bố số liệu quan trọng cho người dân",
       "parts": [
        {
         "t": "政府",
         "ico": "🏛",
         "c": "s",
         "py": "zhèngfǔ",
         "hv": "chính phủ"
        },
        {
         "t": "每年通过报纸向国民公布",
         "ico": "📰",
         "c": "v",
         "py": "měi nián tōngguò bàozhǐ xiàng guómín gōngbù",
         "hv": "mỗi niên thông quá báo chỉ hướng quốc dân công bố"
        },
        {
         "t": "重要的数据",
         "ico": "📊",
         "c": "o",
         "py": "zhòngyào de shùjù",
         "hv": "trọng yếu đích số cứ"
        }
       ],
       "traceWord": "国民",
       "py": "Zhèngfǔ měi nián tōngguò bàozhǐ xiàng guómín gōngbù zhòngyào de shùjù",
       "traceKey": "guomin",
       "traceInfo": [
        {
         "c": "国",
         "py": "guó",
         "hv": "quốc"
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
       "q": "你们社区的活动是谁组织的？",
       "qvi": "Hoạt động của khu dân cư các bạn do ai tổ chức?",
       "scene": "🏘🎪",
       "ans": "是社区的志愿者组织的",
       "opts": [
        {
         "txt": "是社区的志愿者组织的",
         "ico": "🙋",
         "py": "Shì shèqū de zhìyuànzhě zǔzhī de"
        },
        {
         "txt": "是昨天下午的会议",
         "ico": "🗓",
         "py": "Shì zuótiān xiàwǔ de huìyì"
        },
        {
         "txt": "是我们公司的产品",
         "ico": "📦",
         "py": "Shì wǒmen gōngsī de chǎnpǐn"
        }
       ],
       "qpy": "Nǐmen shèqū de huódòng shì shéi zǔzhī de?"
      },
      {
       "q": "这个俱乐部主要为哪些人服务？",
       "qvi": "Câu lạc bộ này chủ yếu phục vụ những ai?",
       "scene": "🏅👥",
       "ans": "主要为年轻的群体服务",
       "opts": [
        {
         "txt": "主要卖水果和蔬菜",
         "ico": "🥬",
         "py": "Zhǔyào mài shuǐguǒ hé shūcài"
        },
        {
         "txt": "主要为年轻的群体服务",
         "ico": "👥",
         "py": "Zhǔyào wèi niánqīng de qúntǐ fúwù"
        },
        {
         "txt": "主要在周末的上午开门",
         "ico": "🚪",
         "py": "Zhǔyào zài zhōumò de shàngwǔ kāi mén"
        }
       ],
       "qpy": "Zhè gè jùlèbù zhǔyào wèi nǎxiē rén fúwù?"
      },
      {
       "q": "经理昨天在哪儿开的会？",
       "qvi": "Hôm qua giám đốc họp ở đâu?",
       "scene": "👔🏢",
       "ans": "经理昨天在公司楼下开的会",
       "opts": [
        {
         "txt": "经理昨天在公司楼下开的会",
         "ico": "🏢",
         "py": "Jīnglǐ zuótiān zài gōngsī lóu xià kāi de huì"
        },
        {
         "txt": "经理明天坐飞机去上海",
         "ico": "✈️",
         "py": "Jīnglǐ míngtiān zuò fēijī qù Shànghǎi"
        },
        {
         "txt": "经理喜欢喝红茶",
         "ico": "🍵",
         "py": "Jīnglǐ xǐhuan hē hóngchá"
        }
       ],
       "qpy": "Jīnglǐ zuótiān zài nǎr kāi de huì?"
      },
      {
       "q": "请问您的国籍是什么？",
       "qvi": "Xin hỏi quốc tịch của ông/bà là gì?",
       "scene": "🛂🌍",
       "ans": "我的国籍是越南",
       "opts": [
        {
         "txt": "我在报社工作",
         "ico": "📰",
         "py": "Wǒ zài bào shè gōngzuò"
        },
        {
         "txt": "我的国籍是越南",
         "ico": "🇻🇳",
         "py": "Wǒ de guójí shì Yuènán"
        },
        {
         "txt": "我的工作是明天开始",
         "ico": "💼",
         "py": "Wǒ de gōngzuò shì míngtiān kāishǐ"
        }
       ],
       "qpy": "Qǐngwèn nín de guójí shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu hoạt động của tổ chức",
      "steps": [
       "<b>Bước 1:</b> Viết ba câu về hoạt động gần đây ở công ty hoặc khu dân cư, mỗi câu có đủ thời gian, nơi chốn, cách thức, ví dụ <i>\"团长上周在俱乐部里认真地给大家介绍了新的计划\"</i>.",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin cho đồng nghiệp, báo tin cấp trên đã phê duyệt kế hoạch, dùng <i>\"上级上个月在北京明确地批准了集团的新计划\"</i> làm mẫu.",
       "<b>Bước 3:</b> Tự giới thiệu mình với một đối tác nước ngoài: nói quốc tịch, công ty, và hỏi họ <i>\"请问您的国籍是什么\"</i>."
      ]
     }
    }
   ]
  },
  "5.12": {
   "lessons": [
    {
     "id": "5.12A",
     "name": "Bài 5.12A: Tăng giảm và biến động",
     "grammar": {
      "formulas": [
       "🌡️ 气温 + ⚡ 升高 + ➡️ 起来",
       "💪 大家 + ⚡ 坚持 + ➡️ 下去",
       "📈 客户 + ⚡ 增多 + ➡️ 起来了"
      ],
      "tip": "Bổ ngữ xu hướng nghĩa phái sinh: 起来 (qǐlái, khởi lai) đặt sau động từ/tính từ để chỉ một trạng thái bắt đầu và tiếp tục phát triển (热起来 = nóng lên); 下去 (xiàqù, hạ khứ) chỉ việc đang làm sẽ được tiếp tục (坚持下去 = kiên trì tiếp).",
      "vn_tip": "Người Việt hay dịch \"bắt đầu\" thành 开始 rồi bỏ quên 起来: nói 气温开始升高 vẫn đúng, nhưng muốn diễn đạt \"dần dần nóng lên\" thì nên dùng 升高起来 / 热起来. Cũng đừng dùng 起来 cho việc muốn tiếp tục: \"tiếp tục kiên trì\" phải là 坚持下去, không phải 坚持起来."
     },
     "chunks": [
      {
       "scene": "🏢👥📈",
       "full": "今年公司的客户增多起来了",
       "vi": "Năm nay khách hàng của công ty đã nhiều lên",
       "parts": [
        {
         "t": "今年公司的客户",
         "ico": "🏢",
         "c": "s",
         "py": "jīnnián gōngsī de kèhù",
         "hv": "kim niên công ti đích khách hộ"
        },
        {
         "t": "增多",
         "ico": "📈",
         "c": "v",
         "py": "zēngduō",
         "hv": "tăng đa"
        },
        {
         "t": "起来了",
         "ico": "✨",
         "c": "o",
         "py": "qǐlái le",
         "hv": "khởi lai liễu"
        }
       ],
       "traceWord": "增多",
       "py": "Jīnnián gōngsī de kèhù zēngduō qǐlái le",
       "traceKey": "zengduo",
       "traceInfo": [
        {
         "c": "增",
         "py": "zēng",
         "hv": "tăng"
        },
        {
         "c": "多",
         "py": "duō",
         "hv": "đa"
        }
       ]
      },
      {
       "scene": "☀️🌡️⬆️",
       "full": "进入夏天以后气温慢慢升高起来了",
       "vi": "Sau khi vào mùa hè, nhiệt độ dần dần tăng lên",
       "parts": [
        {
         "t": "进入夏天以后气温",
         "ico": "☀️",
         "c": "s",
         "py": "jìnrù xiàtiān yǐhòu qìwēn",
         "hv": "tiến nhập hạ thiên dĩ hậu khí ôn"
        },
        {
         "t": "慢慢升高",
         "ico": "🌡️",
         "c": "v",
         "py": "mànmàn shēnggāo",
         "hv": "mạn mạn thăng cao"
        },
        {
         "t": "起来了",
         "ico": "⬆️",
         "c": "o",
         "py": "qǐlái le",
         "hv": "khởi lai liễu"
        }
       ],
       "traceWord": "升高",
       "py": "Jìnrù xiàtiān yǐhòu qìwēn mànmàn shēnggāo qǐlái le",
       "traceKey": "shenggao",
       "traceInfo": [
        {
         "c": "升",
         "py": "shēng",
         "hv": "thăng"
        },
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        }
       ]
      },
      {
       "scene": "😰💼💪",
       "full": "压力增大了但我们还要坚持下去",
       "vi": "Áp lực lớn hơn rồi nhưng chúng ta vẫn phải kiên trì tiếp",
       "parts": [
        {
         "t": "压力",
         "ico": "😰",
         "c": "s",
         "py": "yālì",
         "hv": "áp lực"
        },
        {
         "t": "增大了",
         "ico": "⬆️",
         "c": "v",
         "py": "zēngdà le",
         "hv": "tăng đại liễu"
        },
        {
         "t": "但我们还要坚持下去",
         "ico": "💪",
         "c": "o",
         "py": "dàn wǒmen hái yào jiānchí xiàqù",
         "hv": "đãn ngã môn hoàn yếu kiên trì hạ khứ"
        }
       ],
       "traceWord": "增大",
       "py": "Yālì zēngdà le dàn wǒmen hái yào jiānchí xiàqù",
       "traceKey": "zengda",
       "traceInfo": [
        {
         "c": "增",
         "py": "zēng",
         "hv": "tăng"
        },
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        }
       ]
      },
      {
       "scene": "📅💰🪙",
       "full": "月底的时候我的钱只剩下一点点了",
       "vi": "Cuối tháng tiền của tôi chỉ còn lại một chút xíu",
       "parts": [
        {
         "t": "月底的时候我的钱",
         "ico": "💰",
         "c": "s",
         "py": "yuèdǐ de shíhou wǒ de qián",
         "hv": "nguyệt để đích thời hậu ngã đích tiền"
        },
        {
         "t": "只剩下",
         "ico": "🪙",
         "c": "v",
         "py": "zhǐ shèngxia",
         "hv": "chỉ thặng hạ"
        },
        {
         "t": "一点点了",
         "ico": "🤏",
         "c": "o",
         "py": "yī diǎndiǎn le",
         "hv": "nhất điểm điểm liễu"
        }
       ],
       "traceWord": "剩下",
       "py": "Yuèdǐ de shíhou wǒ de qián zhǐ shèngxia yī diǎndiǎn le",
       "traceKey": "shengxia",
       "traceInfo": [
        {
         "c": "剩",
         "py": "shèng",
         "hv": "thặng"
        },
        {
         "c": "下",
         "py": "xia",
         "hv": "hạ"
        }
       ]
      },
      {
       "scene": "🏢🔄😟",
       "full": "公司人员的变动让大家都紧张起来了",
       "vi": "Sự biến động nhân sự của công ty khiến mọi người đều căng thẳng lên",
       "parts": [
        {
         "t": "公司人员的变动",
         "ico": "🔄",
         "c": "s",
         "py": "gōngsī rényuán de biàndòng",
         "hv": "công ti nhân viên đích biến động"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "大家都紧张起来了",
         "ico": "😟",
         "c": "o",
         "py": "dàjiā dōu jǐnzhāng qǐlái le",
         "hv": "đại gia đô khẩn trương khởi lai liễu"
        }
       ],
       "traceWord": "变动",
       "py": "Gōngsī rényuán de biàndòng ràng dàjiā dōu jǐnzhāng qǐlái le",
       "traceKey": "biandong",
       "traceInfo": [
        {
         "c": "变",
         "py": "biàn",
         "hv": "biến"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🏃‍♂️🚫💔",
       "full": "长期缺乏锻炼会损害我们的身体健康",
       "vi": "Thiếu rèn luyện lâu dài sẽ làm hại sức khỏe cơ thể chúng ta",
       "parts": [
        {
         "t": "长期缺乏锻炼",
         "ico": "🛋️",
         "c": "s",
         "py": "chángqī quēfá duànliàn",
         "hv": "trường kỳ khuyết phạp đoán luyện"
        },
        {
         "t": "会损害",
         "ico": "⚠️",
         "c": "v",
         "py": "huì sǔnhài",
         "hv": "hội tổn hại"
        },
        {
         "t": "我们的身体健康",
         "ico": "💔",
         "c": "o",
         "py": "wǒmen de shēntǐ jiànkāng",
         "hv": "ngã môn đích thân thể kiện khang"
        }
       ],
       "traceWord": "损害",
       "py": "Chángqī quēfá duànliàn huì sǔnhài wǒmen de shēntǐ jiànkāng",
       "traceKey": "sunhai",
       "traceInfo": [
        {
         "c": "损",
         "py": "sǔn",
         "hv": "tổn"
        },
        {
         "c": "害",
         "py": "hài",
         "hv": "hại"
        }
       ]
      },
      {
       "scene": "🧗🏆🤝",
       "full": "只要大家坚持下去就一定能突破困难超越对手",
       "vi": "Chỉ cần mọi người kiên trì tiếp thì nhất định có thể vượt qua khó khăn và vượt đối thủ",
       "parts": [
        {
         "t": "只要大家",
         "ico": "👥",
         "c": "s",
         "py": "zhǐyào dàjiā",
         "hv": "chỉ yếu đại gia"
        },
        {
         "t": "坚持下去",
         "ico": "💪",
         "c": "v",
         "py": "jiānchí xiàqù",
         "hv": "kiên trì hạ khứ"
        },
        {
         "t": "就一定能突破困难超越对手",
         "ico": "🏆",
         "c": "o",
         "py": "jiù yīdìng néng tūpò kùnnan chāoyuè duìshǒu",
         "hv": "tựu nhất định năng đột phá khốn nan siêu việt đối thủ"
        }
       ],
       "traceWord": "突破",
       "py": "Zhǐyào dàjiā jiānchí xiàqù jiù yīdìng néng tūpò kùnnan chāoyuè duìshǒu",
       "traceKey": "tupo",
       "traceInfo": [
        {
         "c": "突",
         "py": "tū",
         "hv": "đột"
        },
        {
         "c": "破",
         "py": "pò",
         "hv": "phá"
        }
       ]
      },
      {
       "scene": "👔🤝😄",
       "full": "经理帮忙调解了问题大家又充满了活力",
       "vi": "Giám đốc giúp hòa giải vấn đề, mọi người lại tràn đầy sức sống",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "帮忙调解了",
         "ico": "🤝",
         "c": "v",
         "py": "bāngmáng tiáojiě le",
         "hv": "bang mang điều giải liễu"
        },
        {
         "t": "问题大家又充满了活力",
         "ico": "😄",
         "c": "o",
         "py": "wèntí dàjiā yòu chōngmǎn le huólì",
         "hv": "vấn đề đại gia hựu sung mãn liễu hoạt lực"
        }
       ],
       "traceWord": "调解",
       "py": "Jīnglǐ bāngmáng tiáojiě le wèntí dàjiā yòu chōngmǎn le huólì",
       "traceKey": "tiaojie",
       "traceInfo": [
        {
         "c": "调",
         "py": "tiáo",
         "hv": "điều"
        },
        {
         "c": "解",
         "py": "jiě",
         "hv": "giải"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "这条路往哪个方向延伸？",
       "qvi": "Con đường này kéo dài về hướng nào?",
       "scene": "🛣️🧭",
       "ans": "向北边延伸",
       "opts": [
        {
         "txt": "我今天不太忙",
         "ico": "🙂",
         "py": "Wǒ jīntiān bù tài máng"
        },
        {
         "txt": "向北边延伸",
         "ico": "⬆️",
         "py": "Xiàng běibian yánshēn"
        },
        {
         "txt": "我很喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ hěn xǐhuan hē chá"
        }
       ],
       "qpy": "Zhè tiáo lù wǎng nǎ gè fāngxiàng yánshēn?"
      },
      {
       "q": "你平时怎么调节自己的心情？",
       "qvi": "Bình thường bạn điều chỉnh tâm trạng của mình thế nào?",
       "scene": "🙂🎵",
       "ans": "我常常听音乐调节心情",
       "opts": [
        {
         "txt": "我是公司的经理",
         "ico": "👔",
         "py": "Wǒ shì gōngsī de jīnglǐ"
        },
        {
         "txt": "我昨天去了北京",
         "ico": "🚄",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "我常常听音乐调节心情",
         "ico": "🎧",
         "py": "Wǒ chángcháng tīng yīnyuè tiáojié xīnqíng"
        }
       ],
       "qpy": "Nǐ píngshí zěnme tiáojié zìjǐ de xīnqíng?"
      },
      {
       "q": "怎样才能增强体力？",
       "qvi": "Làm thế nào mới tăng cường được thể lực?",
       "scene": "💪🏃",
       "ans": "经常锻炼就能增强体力",
       "opts": [
        {
         "txt": "经常锻炼就能增强体力",
         "ico": "🏋️",
         "py": "Jīngcháng duànliàn jiù néng zēngqiáng tǐlì"
        },
        {
         "txt": "今年客户增了一倍",
         "ico": "🏦",
         "py": "Jīnnián kèhù zēng le yī bèi"
        },
        {
         "txt": "明天会下雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià yǔ"
        }
       ],
       "qpy": "Zěnyàng cáinéng zēngqiáng tǐlì?"
      },
      {
       "q": "这个月你的钱还剩多少？",
       "qvi": "Tháng này tiền của bạn còn lại bao nhiêu?",
       "scene": "💰❓",
       "ans": "还剩一半",
       "opts": [
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我喜欢看电影",
         "ico": "🎬",
         "py": "Wǒ xǐhuan kàn diànyǐng"
        },
        {
         "txt": "还剩一半",
         "ico": "💰",
         "py": "Hái shèng yībàn"
        }
       ],
       "qpy": "Zhè gè yuè nǐ de qián hái shèng duōshao?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo xu hướng với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp, báo một thay đổi ở công ty hoặc trong công việc của bạn, ví dụ <i>\"今年公司的客户增多起来了\"</i>.",
       "<b>Bước 2:</b> Nói thành tiếng một khó khăn bạn đang gặp và tự động viên mình: <i>\"压力增大了但我们还要坚持下去\"</i>.",
       "<b>Bước 3:</b> Tự nói 3 câu về xu hướng quanh bạn (thời tiết, giá cả, khối lượng việc) với 起来 hoặc 下去, rồi ghi vào sổ để dùng trong cuộc họp tuần sau."
      ]
     }
    },
    {
     "id": "5.12B",
     "name": "Bài 5.12B: Chịu đựng, kiên trì và buông bỏ",
     "grammar": {
      "formulas": [
       "📝 我们 + ⚡ 写 + 得 + 🏁 完",
       "🚫 我 + ⚡ 忍受 + 不 + 🏁 了",
       "😂 大家 + ⚡ 忍不住 + 😄 笑"
      ],
      "tip": "Bổ ngữ khả năng: động từ + 得 + bổ ngữ = có thể làm được (写得完 = viết xong được); động từ + 不 + bổ ngữ = không thể (忍受不了 = không chịu nổi). 忍不住 (rěn bu zhù, nhẫn bất trú) = không nhịn nổi, không kìm được, đi trước động từ hành động (忍不住笑).",
      "vn_tip": "Người Việt hay nói 我不能写完 hay 我没有忍住 cho ý \"không làm nổi\". Cách tự nhiên là 写不完 và 忍不住. Lưu ý: \"不\" kẹp giữa động từ và bổ ngữ đọc nhẹ, và đừng thêm 能 khi đã có 得/不."
     },
     "chunks": [
      {
       "scene": "📰😆🤭",
       "full": "听到这个好消息大家都忍不住笑了起来",
       "vi": "Nghe tin vui này ai cũng không nhịn được mà bật cười",
       "parts": [
        {
         "t": "听到这个好消息大家",
         "ico": "👥",
         "c": "s",
         "py": "tīngdào zhè gè hǎo xiāoxi dàjiā",
         "hv": "thính đáo giá cá hảo tiêu tức đại gia"
        },
        {
         "t": "都忍不住",
         "ico": "🤭",
         "c": "v",
         "py": "dōu rěn bu zhù",
         "hv": "đô nhẫn bất trú"
        },
        {
         "t": "笑了起来",
         "ico": "😆",
         "c": "o",
         "py": "xiào le qǐlái",
         "hv": "tiếu liễu khởi lai"
        }
       ],
       "traceWord": "忍不住",
       "py": "Tīngdào zhè gè hǎo xiāoxi dàjiā dōu rěn bu zhù xiào le qǐlái",
       "traceKey": "renbuzhu",
       "traceInfo": [
        {
         "c": "忍",
         "py": "rěn",
         "hv": "nhẫn"
        },
        {
         "c": "不",
         "py": "bu",
         "hv": "bất"
        },
        {
         "c": "住",
         "py": "zhù",
         "hv": "trú"
        }
       ]
      },
      {
       "scene": "⏰📄✅",
       "full": "只要时间充足我们就写得完这份报告",
       "vi": "Chỉ cần thời gian đủ thì chúng tôi viết xong được bản báo cáo này",
       "parts": [
        {
         "t": "只要时间充足我们",
         "ico": "⏰",
         "c": "s",
         "py": "zhǐyào shíjiān chōngzú wǒmen",
         "hv": "chỉ yếu thời gian sung túc ngã môn"
        },
        {
         "t": "就写得完",
         "ico": "✍️",
         "c": "v",
         "py": "jiù xiě de wán",
         "hv": "tựu tả đắc hoàn"
        },
        {
         "t": "这份报告",
         "ico": "📄",
         "c": "o",
         "py": "zhè fèn bàogào",
         "hv": "giá phần báo cáo"
        }
       ],
       "traceWord": "充足",
       "py": "Zhǐyào shíjiān chōngzú wǒmen jiù xiě de wán zhè fèn bàogào",
       "traceKey": "chongzu",
       "traceInfo": [
        {
         "c": "充",
         "py": "chōng",
         "hv": "sung"
        },
        {
         "c": "足",
         "py": "zú",
         "hv": "túc"
        }
       ]
      },
      {
       "scene": "🥵☀️😖",
       "full": "我实在忍受不了夏天这么热的天气",
       "vi": "Tôi thật sự không chịu nổi thời tiết nóng thế này của mùa hè",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "实在忍受不了",
         "ico": "😖",
         "c": "v",
         "py": "shízài rěn shòubuliǎo",
         "hv": "thực tại nhẫn thụ bất liễu"
        },
        {
         "t": "夏天这么热的天气",
         "ico": "🥵",
         "c": "o",
         "py": "xiàtiān zhème rè de tiānqì",
         "hv": "hạ thiên giá ma nhiệt đích thiên khí"
        }
       ],
       "traceWord": "忍受",
       "py": "Wǒ shízài rěn shòubuliǎo xiàtiān zhème rè de tiānqì",
       "traceKey": "renshou",
       "traceInfo": [
        {
         "c": "忍",
         "py": "rěn",
         "hv": "nhẫn"
        },
        {
         "c": "受",
         "py": "shòu",
         "hv": "thụ"
        }
       ]
      },
      {
       "scene": "💼🌟🙏",
       "full": "我们应该珍惜现在得到的这个工作机会",
       "vi": "Chúng ta nên trân trọng cơ hội công việc đang có này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "应该珍惜",
         "ico": "🙏",
         "c": "v",
         "py": "yīnggāi zhēnxī",
         "hv": "ưng cai trân tích"
        },
        {
         "t": "现在得到的这个工作机会",
         "ico": "💼",
         "c": "o",
         "py": "xiànzài dédào de zhè gè gōngzuò jīhuì",
         "hv": "hiện tại đắc đáo đích giá cá công tác cơ hội"
        }
       ],
       "traceWord": "珍惜",
       "py": "Wǒmen yīnggāi zhēnxī xiànzài dédào de zhè gè gōngzuò jīhuì",
       "traceKey": "zhenxi",
       "traceInfo": [
        {
         "c": "珍",
         "py": "zhēn",
         "hv": "trân"
        },
        {
         "c": "惜",
         "py": "xī",
         "hv": "tích"
        }
       ]
      },
      {
       "scene": "🙅‍♂️😟🤝",
       "full": "你别为难他了他也不是故意的",
       "vi": "Bạn đừng làm khó anh ấy nữa, anh ấy cũng không cố ý đâu",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "别为难",
         "ico": "🙅",
         "c": "v",
         "py": "bié wéinán",
         "hv": "biệt vi nan"
        },
        {
         "t": "他了他也不是故意的",
         "ico": "😟",
         "c": "o",
         "py": "tā le tā yě bú shì gùyì de",
         "hv": "tha liễu tha dã bất thị cố ý đích"
        }
       ],
       "traceWord": "为难",
       "py": "Nǐ bié wéinán tā le tā yě bú shì gùyì de",
       "traceKey": "weinan",
       "traceInfo": [
        {
         "c": "为",
         "py": "wéi",
         "hv": "vi"
        },
        {
         "c": "难",
         "py": "nán",
         "hv": "nan"
        }
       ]
      },
      {
       "scene": "⚠️👉🚫",
       "full": "出了问题别总是怪别人也别轻易放弃",
       "vi": "Gặp vấn đề đừng lúc nào cũng trách người khác, cũng đừng dễ dàng bỏ cuộc",
       "parts": [
        {
         "t": "出了问题",
         "ico": "⚠️",
         "c": "s",
         "py": "chū le wèntí",
         "hv": "xuất liễu vấn đề"
        },
        {
         "t": "别总是怪",
         "ico": "👉",
         "c": "v",
         "py": "bié zǒngshì guài",
         "hv": "biệt tổng thị quái"
        },
        {
         "t": "别人也别轻易放弃",
         "ico": "🚫",
         "c": "o",
         "py": "biérén yě bié qīngyì fàngqì",
         "hv": "biệt nhân dã biệt khinh dị phóng khí"
        }
       ],
       "traceWord": "放弃",
       "py": "Chū le wèntí bié zǒngshì guài biérén yě bié qīngyì fàngqì",
       "traceKey": "fangqi",
       "traceInfo": [
        {
         "c": "放",
         "py": "fàng",
         "hv": "phóng"
        },
        {
         "c": "弃",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🚬🚭👫",
       "full": "他在朋友的鼓励下终于戒了烟",
       "vi": "Dưới sự động viên của bạn bè, cuối cùng anh ấy đã bỏ thuốc",
       "parts": [
        {
         "t": "他在朋友的鼓励下",
         "ico": "🧑",
         "c": "s",
         "py": "tā zài péngyou de gǔlì xià",
         "hv": "tha tại bằng hữu đích cổ lệ hạ"
        },
        {
         "t": "终于戒了",
         "ico": "🚭",
         "c": "v",
         "py": "zhōngyú jiè le",
         "hv": "chung vu giới liễu"
        },
        {
         "t": "烟",
         "ico": "🚬",
         "c": "o",
         "py": "yān",
         "hv": "yên"
        }
       ],
       "traceWord": "鼓励",
       "py": "Tā zài péngyou de gǔlì xià zhōngyú jiè le yān",
       "traceKey": "guli",
       "traceInfo": [
        {
         "c": "鼓",
         "py": "gǔ",
         "hv": "cổ"
        },
        {
         "c": "励",
         "py": "lì",
         "hv": "lệ"
        }
       ]
      },
      {
       "scene": "📊🏆😊",
       "full": "公司的成绩超过了预期大家都很自豪",
       "vi": "Thành tích của công ty vượt dự kiến, mọi người đều rất tự hào",
       "parts": [
        {
         "t": "公司的成绩",
         "ico": "📊",
         "c": "s",
         "py": "gōngsī de chéngjì",
         "hv": "công ti đích thành tích"
        },
        {
         "t": "超过了预期",
         "ico": "🏆",
         "c": "v",
         "py": "chāoguò le yùqī",
         "hv": "siêu quá liễu dự kỳ"
        },
        {
         "t": "大家都很自豪",
         "ico": "😊",
         "c": "o",
         "py": "dàjiā dōu hěn zìháo",
         "hv": "đại gia đô ngận tự hào"
        }
       ],
       "traceWord": "自豪",
       "py": "Gōngsī de chéngjì chāoguò le yùqī dàjiā dōu hěn zìháo",
       "traceKey": "zihao",
       "traceInfo": [
        {
         "c": "自",
         "py": "zì",
         "hv": "tự"
        },
        {
         "c": "豪",
         "py": "háo",
         "hv": "hào"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么讨厌坐地铁上班？",
       "qvi": "Vì sao bạn ghét đi tàu điện ngầm đi làm?",
       "scene": "🚇😫",
       "ans": "因为人太多了连座位都找不到",
       "opts": [
        {
         "txt": "因为我有一只小狗",
         "ico": "🐶",
         "py": "Yīnwèi wǒ yǒu yī zhǐ xiǎo gǒu"
        },
        {
         "txt": "因为人太多了连座位都找不到",
         "ico": "🚇",
         "py": "Yīnwèi rén tài duō le lián zuòwèi dōu zhǎo bú dào"
        },
        {
         "txt": "因为我喜欢喝咖啡",
         "ico": "☕",
         "py": "Yīnwèi wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ wèi shénme tǎoyàn zuò dìtiě shàngbān?"
      },
      {
       "q": "周末你打算做什么？",
       "qvi": "Cuối tuần bạn định làm gì?",
       "scene": "📅🏠",
       "ans": "我打算在家待一天",
       "opts": [
        {
         "txt": "我打算在家待一天",
         "ico": "🏠",
         "py": "Wǒ dǎsuàn zàijiā dāi yī tiān"
        },
        {
         "txt": "我是去年毕业的",
         "ico": "🎓",
         "py": "Wǒ shì qùnián bìyè de"
        },
        {
         "txt": "他无法忍受这种态度",
         "ico": "😖",
         "py": "Tā wúfǎ rěnshòu zhè zhǒng tàidù"
        }
       ],
       "qpy": "Zhōumò nǐ dǎsuàn zuò shénme?"
      },
      {
       "q": "客户已经到了，他在哪儿等候？",
       "qvi": "Khách hàng đã đến, anh ấy đợi ở đâu?",
       "scene": "👔⏳",
       "ans": "他在办公室外面等候",
       "opts": [
        {
         "txt": "他昨天坐飞机来的",
         "ico": "✈️",
         "py": "Tā zuótiān zuò fēijī lái de"
        },
        {
         "txt": "他是公司的经理",
         "ico": "👔",
         "py": "Tā shì gōngsī de jīnglǐ"
        },
        {
         "txt": "他在办公室外面等候",
         "ico": "🚪",
         "py": "Tā zài bàngōngshì wàimiàn děnghòu"
        }
       ],
       "qpy": "Kèhù yǐjīng dào le tā zài nǎr děnghòu?"
      },
      {
       "q": "明天的会议你预备好了吗？",
       "qvi": "Cuộc họp ngày mai bạn đã chuẩn bị xong chưa?",
       "scene": "📅💻",
       "ans": "资料都预备好了",
       "opts": [
        {
         "txt": "我不喜欢吃辣的",
         "ico": "🌶️",
         "py": "Wǒ bù xǐhuan chī là de"
        },
        {
         "txt": "我家在河内",
         "ico": "🏠",
         "py": "Wǒ jiā zài Hénèi"
        },
        {
         "txt": "资料都预备好了",
         "ico": "📁",
         "py": "Zīliào dōu yùbèi hǎo le"
        }
       ],
       "qpy": "Míngtiān de huìyì nǐ yùbèi hǎo le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giữ vững tinh thần khi áp lực",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi tiến độ công việc và hẹn thời gian: <i>\"只要时间充足我们就写得完这份报告\"</i>.",
       "<b>Bước 2:</b> Gọi điện (hoặc tự nói) động viên một người bạn đang nản: <i>\"别轻易放弃\"</i> và <i>\"我们应该珍惜现在的工作机会\"</i>.",
       "<b>Bước 3:</b> Tự nói 3 câu về điều bạn chịu được hoặc không chịu nổi (nóng, kẹt xe, họp dài) với cấu trúc 动词 + 得/不 + bổ ngữ, rồi ghi lại."
      ]
     }
    },
    {
     "id": "5.12C",
     "name": "Bài 5.12C: Khám chữa bệnh",
     "grammar": {
      "formulas": [
       "😷 他 + ⚡ 咳 + 得 + 🔥 厉害",
       "😫 病人 + ⚡ 多 + 得 + 💥 不得了",
       "😵 我 + ⚡ 累 + 🧨 坏了"
      ],
      "tip": "Bổ ngữ mức độ: tính từ/động từ + 得 + 厉害 (lìhai, lệ hại) / 不得了 (bù déliǎo, bất đắc liễu) / 慌 (huāng, hoảng) = đến mức rất nặng; hoặc không cần 得: + 坏了 / 透了 (tòu le, thấu) = đến mức hỏng hết, thấm hết (累坏了, 湿透了).",
      "vn_tip": "Người Việt hay nói \"rất đau lắm\" thành 很疼得厉害 (thừa 很). Đúng là 疼得厉害 hoặc 很疼. Đừng dùng đồng thời 很 và 得厉害/得不得了. Ngoài ra 坏了/透了 đi thẳng sau tính từ, không có 得: 累坏了, không phải 累得坏了."
     },
     "chunks": [
      {
       "scene": "🤧😷🌙",
       "full": "他咳得很厉害晚上一直睡不着",
       "vi": "Anh ấy ho rất dữ, cả đêm cứ không ngủ được",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "咳得很厉害",
         "ico": "🤧",
         "c": "v",
         "py": "ké de hěn lìhai",
         "hv": "khái đắc ngận lệ hại"
        },
        {
         "t": "晚上一直睡不着",
         "ico": "🌙",
         "c": "o",
         "py": "wǎnshang yīzhí shuì bù zhe",
         "hv": "vãn thượng nhất trực thụy bất trước"
        }
       ],
       "traceWord": "咳",
       "py": "Tā ké de hěn lìhai wǎnshang yīzhí shuì bù zhe",
       "traceKey": "ke",
       "traceInfo": [
        {
         "c": "咳",
         "py": "ké",
         "hv": "khái"
        }
       ]
      },
      {
       "scene": "🏥👥😵",
       "full": "今天医院门诊的病人多得不得了",
       "vi": "Hôm nay bệnh nhân khám ngoại trú ở bệnh viện đông không thể tả",
       "parts": [
        {
         "t": "今天医院门诊的病人",
         "ico": "🏥",
         "c": "s",
         "py": "jīntiān yīyuàn ménzhěn de bìngrén",
         "hv": "kim thiên y viện môn chẩn đích bệnh nhân"
        },
        {
         "t": "多得",
         "ico": "👥",
         "c": "v",
         "py": "duō de",
         "hv": "đa đắc"
        },
        {
         "t": "不得了",
         "ico": "😵",
         "c": "o",
         "py": "bùdéliǎo",
         "hv": "bất đắc liễu"
        }
       ],
       "traceWord": "门诊",
       "py": "Jīntiān yīyuàn ménzhěn de bìngrén duō de bùdéliǎo",
       "traceKey": "menzhen",
       "traceInfo": [
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        },
        {
         "c": "诊",
         "py": "zhěn",
         "hv": "chẩn"
        }
       ]
      },
      {
       "scene": "👨‍⚕️🦐🔴",
       "full": "医生诊断以后说我对海鲜过敏得很厉害",
       "vi": "Sau khi chẩn đoán, bác sĩ nói tôi dị ứng hải sản rất nặng",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "诊断以后说",
         "ico": "🩺",
         "c": "v",
         "py": "zhěnduàn yǐhòu shuō",
         "hv": "chẩn đoạn dĩ hậu thuyết"
        },
        {
         "t": "我对海鲜过敏得很厉害",
         "ico": "🦐",
         "c": "o",
         "py": "wǒ duì hǎixiān guòmǐn de hěn lìhai",
         "hv": "ngã đối hải tiên quá mẫn đắc ngận lệ hại"
        }
       ],
       "traceWord": "诊断",
       "py": "Yīshēng zhěnduàn yǐhòu shuō wǒ duì hǎixiān guòmǐn de hěn lìhai",
       "traceKey": "zhenduan",
       "traceInfo": [
        {
         "c": "诊",
         "py": "zhěn",
         "hv": "chẩn"
        },
        {
         "c": "断",
         "py": "duàn",
         "hv": "đoạn"
        }
       ]
      },
      {
       "scene": "👩‍⚕️🧴💉",
       "full": "护士先把工具消毒然后给我注射药水",
       "vi": "Y tá khử trùng dụng cụ trước rồi tiêm thuốc cho tôi",
       "parts": [
        {
         "t": "护士",
         "ico": "👩‍⚕️",
         "c": "s",
         "py": "hùshi",
         "hv": "hộ sĩ"
        },
        {
         "t": "先把工具消毒",
         "ico": "🧴",
         "c": "v",
         "py": "xiān bǎ gōngjù xiāodú",
         "hv": "tiên bả công cụ tiêu độc"
        },
        {
         "t": "然后给我注射药水",
         "ico": "💉",
         "c": "o",
         "py": "ránhòu gěi wǒ zhùshè yàoshuǐ",
         "hv": "nhiên hậu cấp ngã chú xạ dược thủy"
        }
       ],
       "traceWord": "注射",
       "py": "Hùshi xiān bǎ gōngjù xiāodú ránhòu gěi wǒ zhùshè yàoshuǐ",
       "traceKey": "zhushe",
       "traceInfo": [
        {
         "c": "注",
         "py": "zhù",
         "hv": "chú"
        },
        {
         "c": "射",
         "py": "shè",
         "hv": "xạ"
        }
       ]
      },
      {
       "scene": "🌿🍵😌",
       "full": "他吃了中药以后痛苦减轻了不少",
       "vi": "Sau khi uống thuốc bắc, nỗi đau của anh ấy giảm đi nhiều",
       "parts": [
        {
         "t": "他吃了中药以后痛苦",
         "ico": "🌿",
         "c": "s",
         "py": "tā chī le zhōngyào yǐhòu tòngkǔ",
         "hv": "tha cật liễu trung dược dĩ hậu thống khổ"
        },
        {
         "t": "减轻",
         "ico": "⬇️",
         "c": "v",
         "py": "jiǎnqīng",
         "hv": "giảm khinh"
        },
        {
         "t": "了不少",
         "ico": "😌",
         "c": "o",
         "py": "le bù shǎo",
         "hv": "liễu bất thiểu"
        }
       ],
       "traceWord": "中药",
       "py": "Tā chī le zhōngyào yǐhòu tòngkǔ jiǎnqīng le bù shǎo",
       "traceKey": "zhongyao",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhōng",
         "hv": "trung"
        },
        {
         "c": "药",
         "py": "yào",
         "hv": "dược"
        }
       ]
      },
      {
       "scene": "🦐☠️🤢",
       "full": "他吃了不干净的海鲜中毒了难受得慌",
       "vi": "Anh ấy ăn hải sản không sạch bị ngộ độc, khó chịu vô cùng",
       "parts": [
        {
         "t": "他吃了不干净的海鲜",
         "ico": "🦐",
         "c": "s",
         "py": "tā chī le bù gānjìng de hǎixiān",
         "hv": "tha cật liễu bất can tịnh đích hải tiên"
        },
        {
         "t": "中毒了",
         "ico": "☠️",
         "c": "v",
         "py": "zhòngdú le",
         "hv": "trúng độc liễu"
        },
        {
         "t": "难受得慌",
         "ico": "🤢",
         "c": "o",
         "py": "nánshòu de huāng",
         "hv": "nan thụ đắc hoảng"
        }
       ],
       "traceWord": "中毒",
       "py": "Tā chī le bù gānjìng de hǎixiān zhòngdú le nánshòu de huāng",
       "traceKey": "zhongdu",
       "traceInfo": [
        {
         "c": "中",
         "py": "zhòng",
         "hv": "trúng"
        },
        {
         "c": "毒",
         "py": "dú",
         "hv": "độc"
        }
       ]
      },
      {
       "scene": "🚑👨‍⚕️❤️",
       "full": "医生马上抢救了那位中毒的病人",
       "vi": "Bác sĩ lập tức cấp cứu bệnh nhân bị ngộ độc kia",
       "parts": [
        {
         "t": "医生",
         "ico": "👨‍⚕️",
         "c": "s",
         "py": "yīshēng",
         "hv": "y sinh"
        },
        {
         "t": "马上抢救了",
         "ico": "🚑",
         "c": "v",
         "py": "mǎshàng qiǎngjiù le",
         "hv": "mã thượng _ cứu liễu"
        },
        {
         "t": "那位中毒的病人",
         "ico": "🛏️",
         "c": "o",
         "py": "nà wèi zhòngdú de bìngrén",
         "hv": "na vị trúng độc đích bệnh nhân"
        }
       ],
       "traceWord": "抢救",
       "py": "Yīshēng mǎshàng qiǎngjiù le nà wèi zhòngdú de bìngrén",
       "traceKey": "qiangjiu",
       "traceInfo": [
        {
         "c": "抢",
         "py": "qiǎng",
         "hv": "_"
        },
        {
         "c": "救",
         "py": "jiù",
         "hv": "cứu"
        }
       ]
      },
      {
       "scene": "🏃💦😮‍💨",
       "full": "他一运动就出汗出得厉害体力也差了",
       "vi": "Anh ấy hễ vận động là đổ mồ hôi rất nhiều, thể lực cũng kém đi",
       "parts": [
        {
         "t": "他一运动就",
         "ico": "🏃",
         "c": "s",
         "py": "tā yī yùndòng jiù",
         "hv": "tha nhất vận động tựu"
        },
        {
         "t": "出汗出得厉害",
         "ico": "💦",
         "c": "v",
         "py": "chūhàn chū de lìhai",
         "hv": "xuất hãn xuất đắc lệ hại"
        },
        {
         "t": "体力也差了",
         "ico": "😮‍💨",
         "c": "o",
         "py": "tǐlì yě chà le",
         "hv": "thể lực dã sai liễu"
        }
       ],
       "traceWord": "出汗",
       "py": "Tā yī yùndòng jiù chūhàn chū de lìhai tǐlì yě chà le",
       "traceKey": "chuhan",
       "traceInfo": [
        {
         "c": "出",
         "py": "chū",
         "hv": "xuất"
        },
        {
         "c": "汗",
         "py": "hàn",
         "hv": "hãn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么经常去按摩？",
       "qvi": "Vì sao bạn thường đi mát-xa?",
       "scene": "💆‍♂️🪑",
       "ans": "因为我坐太久了腰酸得慌",
       "opts": [
        {
         "txt": "因为我想买新手机",
         "ico": "📱",
         "py": "Yīnwèi wǒ xiǎng mǎi xīn shǒujī"
        },
        {
         "txt": "因为我坐太久了腰酸得慌",
         "ico": "💆",
         "py": "Yīnwèi wǒ zuò tài jiǔ le yāo suān de huāng"
        },
        {
         "txt": "因为明天是我的生日",
         "ico": "🎂",
         "py": "Yīnwèi míngtiān shì wǒ de shēngrì"
        }
       ],
       "qpy": "Nǐ wèi shénme jīngcháng qù ànmó?"
      },
      {
       "q": "怎样才能做好感冒的防治？",
       "qvi": "Làm thế nào để phòng và chữa cảm tốt?",
       "scene": "🤧🛡️",
       "ans": "多锻炼多休息别把身体累坏了",
       "opts": [
        {
         "txt": "经常看电视到半夜",
         "ico": "📺",
         "py": "Jīngcháng kàn diànshì dào bànyè"
        },
        {
         "txt": "多去商店买东西",
         "ico": "🛍️",
         "py": "Duō qù shāngdiàn mǎi dōngxi"
        },
        {
         "txt": "多锻炼多休息别把身体累坏了",
         "ico": "🏃",
         "py": "Duō duànliàn duō xiūxi bié bǎ shēntǐ lèi huài le"
        }
       ],
       "qpy": "Zěnyàng cáinéng zuò hǎo gǎnmào de fángzhì?"
      },
      {
       "q": "你平时怎么保养身体？",
       "qvi": "Bình thường bạn chăm sóc cơ thể thế nào?",
       "scene": "🧑💪",
       "ans": "我坚持锻炼少抽烟",
       "opts": [
        {
         "txt": "我坚持锻炼少抽烟",
         "ico": "🏋️",
         "py": "Wǒ jiānchí duànliàn shǎo chōuyān"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "这种药的毒很大",
         "ico": "💊",
         "py": "Zhè zhǒng yào de dú hěn dà"
        }
       ],
       "qpy": "Nǐ píngshí zěnme bǎoyǎng shēntǐ?"
      },
      {
       "q": "昨天下大雨你的衣服怎么样？",
       "qvi": "Hôm qua mưa to quần áo của bạn thế nào?",
       "scene": "🌧️👕",
       "ans": "全身的衣服都湿透了",
       "opts": [
        {
         "txt": "衣服很便宜",
         "ico": "💲",
         "py": "Yīfu hěn piányi"
        },
        {
         "txt": "明天我去上班",
         "ico": "🏢",
         "py": "Míngtiān wǒ qù shàngbān"
        },
        {
         "txt": "全身的衣服都湿透了",
         "ico": "💧",
         "py": "Quánshēn de yīfu dōu shī tòu le"
        }
       ],
       "qpy": "Zuótiān xià dà yǔ nǐ de yīfu zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đi khám và mô tả triệu chứng",
      "steps": [
       "<b>Bước 1:</b> Đóng vai bệnh nhân ở phòng khám, mô tả triệu chứng với bác sĩ: <i>\"他咳得很厉害晚上一直睡不着\"</i> (đổi chủ ngữ thành 我).",
       "<b>Bước 2:</b> Nói với bác sĩ về dị ứng hoặc thói quen của bạn, ví dụ <i>\"我对海鲜过敏\"</i>, rồi hỏi cách chữa: có uống thuốc bắc không, giảm đau thế nào.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp xin nghỉ ốm, dùng ít nhất 2 câu bổ ngữ mức độ như <i>\"累坏了\"</i>, <i>\"难受得慌\"</i>, rồi tự nói thành tiếng."
      ]
     }
    }
   ]
  },
  "5.13": {
   "lessons": [
    {
     "id": "5.13A",
     "name": "Bài 5.13A: Thể thao và giải trí (bổ ngữ trạng thái 得)",
     "grammar": {
      "formulas": [
       "🏃 他 + ⚡ 跑得 + 💨 很快",
       "🏸 羽毛球 + ⚡ 打得 + ✨ 比我好",
       "❓ 他 + 游得 + 怎么样？"
      ],
      "tip": "Bổ ngữ trạng thái dùng 得 (de, âm Hán Việt: đắc) nối động từ với phần đánh giá cách làm: Động từ + 得 + cụm từ (很快、非常好、比我好得多). Nếu động từ có tân ngữ thì lặp động từ: 说话说得很清楚; hoặc đưa tân ngữ lên trước: 羽毛球打得很好.",
      "vn_tip": "Người Việt hay nói “他跑很快” (thiếu 得) hoặc “他很快跑” (đặt phó từ trước động từ). Đúng: 他跑得很快. Khi có tân ngữ đừng viết “他打得羽毛球很好”; hãy viết 他羽毛球打得很好 hoặc 他打羽毛球打得很好."
     },
     "chunks": [
      {
       "scene": "🏸🧑✨",
       "full": "小明羽毛球打得比我好得多",
       "vi": "Tiểu Minh đánh cầu lông giỏi hơn tôi nhiều",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "羽毛球打得",
         "ico": "🏸",
         "c": "v",
         "py": "yǔmáoqiú dǎ de",
         "hv": "vũ mao cầu đả đắc"
        },
        {
         "t": "比我好得多",
         "ico": "✨",
         "c": "o",
         "py": "bǐ wǒ hǎo de duō",
         "hv": "tỷ ngã hảo đắc đa"
        }
       ],
       "traceWord": "羽毛球",
       "py": "Xiǎomíng yǔmáoqiú dǎ de bǐ wǒ hǎo de duō",
       "traceKey": "yumaoqiu",
       "traceInfo": [
        {
         "c": "羽",
         "py": "yǔ",
         "hv": "vũ"
        },
        {
         "c": "毛",
         "py": "máo",
         "hv": "mao"
        },
        {
         "c": "球",
         "py": "qiú",
         "hv": "cầu"
        }
       ]
      },
      {
       "scene": "🧑‍⚖️🗣️✅",
       "full": "那位裁判说话说得非常清楚",
       "vi": "Vị trọng tài đó nói rất rõ ràng",
       "parts": [
        {
         "t": "那位裁判",
         "ico": "🧑‍⚖️",
         "c": "s",
         "py": "nà wèi cáipàn",
         "hv": "na vị tài phán"
        },
        {
         "t": "说话说得",
         "ico": "🗣️",
         "c": "v",
         "py": "shuōhuà shuō de",
         "hv": "thuyết thoại thuyết đắc"
        },
        {
         "t": "非常清楚",
         "ico": "✅",
         "c": "o",
         "py": "fēicháng qīngchu",
         "hv": "phi thường thanh sở"
        }
       ],
       "traceWord": "裁判",
       "py": "Nà wèi cáipàn shuōhuà shuō de fēicháng qīngchu",
       "traceKey": "caipan",
       "traceInfo": [
        {
         "c": "裁",
         "py": "cái",
         "hv": "tài"
        },
        {
         "c": "判",
         "py": "pàn",
         "hv": "phán"
        }
       ]
      },
      {
       "scene": "🏊🧑💨",
       "full": "他在游泳池游得又快又稳",
       "vi": "Anh ấy bơi trong bể vừa nhanh vừa vững",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在游泳池游得",
         "ico": "🏊",
         "c": "v",
         "py": "zài yóuyǒngchí yóu de",
         "hv": "tại du vịnh trì du đắc"
        },
        {
         "t": "又快又稳",
         "ico": "💨",
         "c": "o",
         "py": "yòu kuài yòu wěn",
         "hv": "hựu khoái hựu ổn"
        }
       ],
       "traceWord": "游泳池",
       "py": "Tā zài yóuyǒngchí yóu de yòu kuài yòu wěn",
       "traceKey": "youyongchi",
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
        },
        {
         "c": "池",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🏆🥈🏃",
       "full": "大奖赛的冠军跑得比亚军快一点儿",
       "vi": "Quán quân giải đại thưởng chạy nhanh hơn á quân một chút",
       "parts": [
        {
         "t": "大奖赛的冠军",
         "ico": "🏆",
         "c": "s",
         "py": "dàjiǎngsài de guànjūn",
         "hv": "đại tưởng tái đích quán quân"
        },
        {
         "t": "跑得",
         "ico": "🏃",
         "c": "v",
         "py": "pǎo de",
         "hv": "bào đắc"
        },
        {
         "t": "比亚军快一点儿",
         "ico": "🥈",
         "c": "o",
         "py": "bǐ yàjūn kuài yīdiǎnr",
         "hv": "tỷ á quân khoái nhất điểm nhi"
        }
       ],
       "traceWord": "冠军",
       "py": "Dàjiǎngsài de guànjūn pǎo de bǐ yàjūn kuài yīdiǎnr",
       "traceKey": "guanjun",
       "traceInfo": [
        {
         "c": "冠",
         "py": "guàn",
         "hv": "quán"
        },
        {
         "c": "军",
         "py": "jūn",
         "hv": "quân"
        }
       ]
      },
      {
       "scene": "🏅🤔😌",
       "full": "这次竞赛的胜负他看得很轻松",
       "vi": "Thắng thua của cuộc thi lần này anh ấy nhìn nhận rất nhẹ nhàng",
       "parts": [
        {
         "t": "这次竞赛的胜负",
         "ico": "🏅",
         "c": "s",
         "py": "zhè cì jìngsài de shèngfù",
         "hv": "giá thứ cạnh tái đích thắng phụ"
        },
        {
         "t": "他看得",
         "ico": "👀",
         "c": "v",
         "py": "tā kàn de",
         "hv": "tha khán đắc"
        },
        {
         "t": "很轻松",
         "ico": "😌",
         "c": "o",
         "py": "hěn qīngsōng",
         "hv": "ngận khinh tùng"
        }
       ],
       "traceWord": "胜负",
       "py": "Zhè cì jìngsài de shèngfù tā kàn de hěn qīngsōng",
       "traceKey": "shengfu",
       "traceInfo": [
        {
         "c": "胜",
         "py": "shèng",
         "hv": "thắng"
        },
        {
         "c": "负",
         "py": "fù",
         "hv": "phụ"
        }
       ]
      },
      {
       "scene": "🌳👨‍👩‍👧😄",
       "full": "周末我们在公园休闲得很开心",
       "vi": "Cuối tuần chúng tôi thư giãn ở công viên rất vui",
       "parts": [
        {
         "t": "周末我们",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "zhōumò wǒmen",
         "hv": "chu mạt ngã môn"
        },
        {
         "t": "在公园休闲得",
         "ico": "🌳",
         "c": "v",
         "py": "zài gōngyuán xiūxián de",
         "hv": "tại công viên hưu nhàn đắc"
        },
        {
         "t": "很开心",
         "ico": "😄",
         "c": "o",
         "py": "hěn kāixīn",
         "hv": "ngận khai tâm"
        }
       ],
       "traceWord": "休闲",
       "py": "Zhōumò wǒmen zài gōngyuán xiūxián de hěn kāixīn",
       "traceKey": "xiuxian",
       "traceInfo": [
        {
         "c": "休",
         "py": "xiū",
         "hv": "hưu"
        },
        {
         "c": "闲",
         "py": "xián",
         "hv": "nhàn"
        }
       ]
      },
      {
       "scene": "😴🧑😵",
       "full": "他睡眠不足累得连话都说不出来",
       "vi": "Anh ấy thiếu ngủ, mệt đến mức nói không ra lời",
       "parts": [
        {
         "t": "他睡眠不足",
         "ico": "😴",
         "c": "s",
         "py": "tā shuìmián bùzú",
         "hv": "tha thụy miên bất túc"
        },
        {
         "t": "累得",
         "ico": "😵",
         "c": "v",
         "py": "lèi de",
         "hv": "lụy đắc"
        },
        {
         "t": "连话都说不出来",
         "ico": "🤐",
         "c": "o",
         "py": "lián huà dōu shuō bù chūlái",
         "hv": "liên thoại đô thuyết bất xuất lai"
        }
       ],
       "traceWord": "睡眠",
       "py": "Tā shuìmián bùzú lèi de lián huà dōu shuō bù chūlái",
       "traceKey": "shuimian",
       "traceInfo": [
        {
         "c": "睡",
         "py": "shuì",
         "hv": "thụy"
        },
        {
         "c": "眠",
         "py": "mián",
         "hv": "miên"
        }
       ]
      },
      {
       "scene": "👴🏃‍♂️💪",
       "full": "爷爷活得很长寿因为他锻炼得很认真",
       "vi": "Ông sống rất thọ vì ông luyện tập rất nghiêm túc",
       "parts": [
        {
         "t": "爷爷",
         "ico": "👴",
         "c": "s",
         "py": "yéye",
         "hv": "gia gia"
        },
        {
         "t": "活得很长寿",
         "ico": "🎂",
         "c": "v",
         "py": "huó de hěn chángshòu",
         "hv": "hoạt đắc ngận trường thọ"
        },
        {
         "t": "因为他锻炼得很认真",
         "ico": "💪",
         "c": "o",
         "py": "yīnwèi tā duànliàn de hěn rènzhēn",
         "hv": "nhân vị tha đoán luyện đắc ngận nhận chân"
        }
       ],
       "traceWord": "长寿",
       "py": "Yéye huó de hěn chángshòu yīnwèi tā duànliàn de hěn rènzhēn",
       "traceKey": "changshou",
       "traceInfo": [
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        },
        {
         "c": "寿",
         "py": "shòu",
         "hv": "thọ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的偶像射击成绩怎么样？",
       "qvi": "Thành tích bắn súng của thần tượng bạn thế nào?",
       "scene": "🌟🎯",
       "ans": "他的射击成绩非常好",
       "opts": [
        {
         "txt": "他的射击成绩非常好",
         "ico": "🎯",
         "py": "Tā de shèjī chéngjì fēicháng hǎo"
        },
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "这个电饭锅不太便宜",
         "ico": "🍚",
         "py": "Zhè gè diànfànguō bù tài piányi"
        }
       ],
       "qpy": "Nǐ de ǒuxiàng shèjī chéngjì zěnmeyàng?"
      },
      {
       "q": "他买彩票买得多不多？",
       "qvi": "Anh ấy mua vé số có nhiều không?",
       "scene": "🎫🧑",
       "ans": "他买彩票买得不多",
       "opts": [
        {
         "txt": "我们周末去爬山",
         "ico": "⛰️",
         "py": "Wǒmen zhōumò qù pá shān"
        },
        {
         "txt": "他买彩票买得不多",
         "ico": "🎫",
         "py": "Tā mǎi cǎipiào mǎi de bù duō"
        },
        {
         "txt": "她是我的汉语老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de Hànyǔ lǎoshī"
        }
       ],
       "qpy": "Tā mǎi cǎipiào mǎi de duō bù duō?"
      },
      {
       "q": "小王被选为模范员工，他觉得怎么样？",
       "qvi": "Tiểu Vương được chọn làm nhân viên gương mẫu, anh ấy cảm thấy thế nào?",
       "scene": "🏅🧑",
       "ans": "他觉得非常光荣",
       "opts": [
        {
         "txt": "他觉得天气很冷",
         "ico": "🥶",
         "py": "Tā juéde tiānqì hěn lěng"
        },
        {
         "txt": "他觉得汤太咸了",
         "ico": "🍜",
         "py": "Tā juéde tāng tài xián le"
        },
        {
         "txt": "他觉得非常光荣",
         "ico": "🏅",
         "py": "Tā juéde fēicháng guāngróng"
        }
       ],
       "qpy": "Xiǎowáng bèi xuǎn wèi mófàn yuángōng tā juéde zěnmeyàng?"
      },
      {
       "q": "他得了冠军以后心情怎么样？",
       "qvi": "Sau khi giành quán quân tâm trạng anh ấy ra sao?",
       "scene": "🏆😭",
       "ans": "他激动得说不出话来",
       "opts": [
        {
         "txt": "他激动得说不出话来",
         "ico": "🏆",
         "py": "Tā jīdòng de shuō bù chū huà lái"
        },
        {
         "txt": "他明天要去机场",
         "ico": "✈️",
         "py": "Tā míngtiān yào qù jīchǎng"
        },
        {
         "txt": "他的偶像住在北京",
         "ico": "🌟",
         "py": "Tā de ǒuxiàng zhù zài Běijīng"
        }
       ],
       "qpy": "Tā déle guànjūn yǐhòu xīnqíng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể với đồng nghiệp về một trận thể thao",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp: kể cuối tuần bạn chơi môn gì, ví dụ <i>\"周末我们在公园休闲得很开心\"</i>.",
       "<b>Bước 2:</b> Nhận xét một người chơi giỏi mà bạn biết, dùng mẫu <i>\"他羽毛球打得很好\"</i> hoặc <i>\"他跑得比我快\"</i>; nhớ lặp động từ khi có tân ngữ.",
       "<b>Bước 3:</b> Hỏi lại đồng nghiệp <i>\"你游得怎么样？\"</i> rồi tự nói thành tiếng 3 câu đánh giá về cách bạn ngủ, chạy, bơi gần đây."
      ]
     }
    },
    {
     "id": "5.13B",
     "name": "Bài 5.13B: Địa lý và địa hình (câu 有)",
     "grammar": {
      "formulas": [
       "📍 草原上 + ⚡ 有着 + 🐑 很多牛和羊",
       "📍 地图上 + ⚡ 写有 + 🗺️ 高原的名字",
       "❓ 水库里 + 有 + 什么？"
      ],
      "tip": "Câu có 有 diễn tả sự tồn tại: Nơi chốn + 有 + Người/vật. Dạng 有着 (yǒuzhe, hữu trước) trang trọng hơn, thường đi với đặc điểm: 有着…的特点. Dạng “Động từ + 有” (写有、存有、种有) nói rõ vật tồn tại bằng cách nào: 地图上写有… = trên bản đồ có ghi…",
      "vn_tip": "Người Việt hay đặt chủ ngữ chỉ người/vật trước rồi mới nói nơi chốn, hoặc quên 有. Đúng: 山洞旁边有一眼泉 (nơi chốn đứng đầu câu). Đừng thêm 在 trước nơi chốn khi dùng 有 ở đầu câu: không nói “在山洞旁边有一眼泉” trong văn viết chuẩn."
     },
     "chunks": [
      {
       "scene": "🏞️🌳🌳",
       "full": "河岸上有一排很高大的树",
       "vi": "Trên bờ sông có một hàng cây rất cao lớn",
       "parts": [
        {
         "t": "河岸上",
         "ico": "🏞️",
         "c": "s",
         "py": "hé àn shang",
         "hv": "hà ngạn thượng"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一排很高大的树",
         "ico": "🌳",
         "c": "o",
         "py": "yī pái hěn gāo dà de shù",
         "hv": "nhất bài ngận cao đại đích thụ"
        }
       ],
       "traceWord": "岸上",
       "py": "Hé àn shang yǒu yī pái hěn gāo dà de shù",
       "traceKey": "anshang",
       "traceInfo": [
        {
         "c": "岸",
         "py": "àn",
         "hv": "ngạn"
        },
        {
         "c": "上",
         "py": "shang",
         "hv": "thượng"
        }
       ]
      },
      {
       "scene": "🧊🐧❄️",
       "full": "北极和南极都有着很厚的冰雪",
       "vi": "Bắc Cực và Nam Cực đều có lớp băng tuyết rất dày",
       "parts": [
        {
         "t": "北极和南极",
         "ico": "🧭",
         "c": "s",
         "py": "běijí hé nánjí",
         "hv": "bắc cực hòa nam cực"
        },
        {
         "t": "都有着",
         "ico": "⚡",
         "c": "v",
         "py": "dōu yǒuzhe",
         "hv": "đô hữu trước"
        },
        {
         "t": "很厚的冰雪",
         "ico": "❄️",
         "c": "o",
         "py": "hěn hòu de bīngxuě",
         "hv": "ngận hậu đích băng tuyết"
        }
       ],
       "traceWord": "南极",
       "py": "Běijí hé nánjí dōu yǒuzhe hěn hòu de bīngxuě",
       "traceKey": "nanji",
       "traceInfo": [
        {
         "c": "南",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "极",
         "py": "jí",
         "hv": "cực"
        }
       ]
      },
      {
       "scene": "🌾🐑🐂",
       "full": "这片草原上有着很多牛和羊",
       "vi": "Trên thảo nguyên này có rất nhiều bò và cừu",
       "parts": [
        {
         "t": "这片草原上",
         "ico": "🌾",
         "c": "s",
         "py": "zhè piàn cǎoyuán shàng",
         "hv": "giá phiến thảo nguyên thượng"
        },
        {
         "t": "有着",
         "ico": "⚡",
         "c": "v",
         "py": "yǒuzhe",
         "hv": "hữu trước"
        },
        {
         "t": "很多牛和羊",
         "ico": "🐑",
         "c": "o",
         "py": "hěn duō niú hé yáng",
         "hv": "ngận đa ngưu hòa dương"
        }
       ],
       "traceWord": "草原",
       "py": "Zhè piàn cǎoyuán shàng yǒuzhe hěn duō niú hé yáng",
       "traceKey": "caoyuan",
       "traceInfo": [
        {
         "c": "草",
         "py": "cǎo",
         "hv": "thảo"
        },
        {
         "c": "原",
         "py": "yuán",
         "hv": "nguyên"
        }
       ]
      },
      {
       "scene": "🗺️⛰️✍️",
       "full": "地图上写有高原和平原的名字",
       "vi": "Trên bản đồ có ghi tên cao nguyên và đồng bằng",
       "parts": [
        {
         "t": "地图上",
         "ico": "🗺️",
         "c": "s",
         "py": "dìtú shàng",
         "hv": "địa đồ thượng"
        },
        {
         "t": "写有",
         "ico": "✍️",
         "c": "v",
         "py": "xiě yǒu",
         "hv": "tả hữu"
        },
        {
         "t": "高原和平原的名字",
         "ico": "⛰️",
         "c": "o",
         "py": "gāoyuán hé píngyuán de míngzi",
         "hv": "cao nguyên hòa bình nguyên đích danh tự"
        }
       ],
       "traceWord": "高原",
       "py": "Dìtú shàng xiě yǒu gāoyuán hé píngyuán de míngzi",
       "traceKey": "gaoyuan",
       "traceInfo": [
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        },
        {
         "c": "原",
         "py": "yuán",
         "hv": "nguyên"
        }
       ]
      },
      {
       "scene": "🏜️🌵☀️",
       "full": "沙漠地带有着十分特殊的地形",
       "vi": "Vùng sa mạc có địa hình vô cùng đặc biệt",
       "parts": [
        {
         "t": "沙漠地带",
         "ico": "🏜️",
         "c": "s",
         "py": "shāmò dìdài",
         "hv": "sa mạc địa đới"
        },
        {
         "t": "有着",
         "ico": "⚡",
         "c": "v",
         "py": "yǒuzhe",
         "hv": "hữu trước"
        },
        {
         "t": "十分特殊的地形",
         "ico": "🌄",
         "c": "o",
         "py": "shífēn tèshū de dìxíng",
         "hv": "thập phân đặc thù đích địa hình"
        }
       ],
       "traceWord": "地形",
       "py": "Shāmò dìdài yǒuzhe shífēn tèshū de dìxíng",
       "traceKey": "dixing",
       "traceInfo": [
        {
         "c": "地",
         "py": "dì",
         "hv": "địa"
        },
        {
         "c": "形",
         "py": "xíng",
         "hv": "hình"
        }
       ]
      },
      {
       "scene": "⛰️💧🏞️",
       "full": "山洞旁边有一眼泉和一条小沟",
       "vi": "Bên cạnh hang núi có một con suối và một con mương nhỏ",
       "parts": [
        {
         "t": "山洞旁边",
         "ico": "⛰️",
         "c": "s",
         "py": "shān dòng pángbiān",
         "hv": "sơn động bàng biên"
        },
        {
         "t": "有",
         "ico": "⚡",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一眼泉和一条小沟",
         "ico": "💧",
         "c": "o",
         "py": "yī yǎn quán hé yī tiáo xiǎo gōu",
         "hv": "nhất nhãn tuyền hòa nhất điều tiểu câu"
        }
       ],
       "traceWord": "洞",
       "py": "Shān dòng pángbiān yǒu yī yǎn quán hé yī tiáo xiǎo gōu",
       "traceKey": "dong",
       "traceInfo": [
        {
         "c": "洞",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🏔️🌳🛡️",
       "full": "边境区域的山上有很多树",
       "vi": "Trên núi vùng biên giới có rất nhiều cây",
       "parts": [
        {
         "t": "边境区域的山上",
         "ico": "🏔️",
         "c": "s",
         "py": "biānjìng qūyù de shān shàng",
         "hv": "biên cảnh khu vực đích sơn thượng"
        },
        {
         "t": "有",
         "ico": "🌱",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "很多树",
         "ico": "🌳",
         "c": "o",
         "py": "hěn duō shù",
         "hv": "ngận đa thụ"
        }
       ],
       "traceWord": "边境",
       "py": "Biānjìng qūyù de shān shàng yǒu hěn duō shù",
       "traceKey": "bianjing",
       "traceInfo": [
        {
         "c": "边",
         "py": "biān",
         "hv": "biên"
        },
        {
         "c": "境",
         "py": "jìng",
         "hv": "cảnh"
        }
       ]
      },
      {
       "scene": "🏗️💧🌊",
       "full": "山区新建的水库里存有大量的水",
       "vi": "Hồ chứa mới xây ở vùng núi chứa một lượng nước lớn",
       "parts": [
        {
         "t": "山区新建的水库里",
         "ico": "🏗️",
         "c": "s",
         "py": "shān qū xīn jiàn de shuǐkù lǐ",
         "hv": "sơn khu tân kiến đích thủy khố lý"
        },
        {
         "t": "存有",
         "ico": "💧",
         "c": "v",
         "py": "cún yǒu",
         "hv": "tồn hữu"
        },
        {
         "t": "大量的水",
         "ico": "🌊",
         "c": "o",
         "py": "dàliàng de shuǐ",
         "hv": "đại lượng đích thủy"
        }
       ],
       "traceWord": "水库",
       "py": "Shān qū xīn jiàn de shuǐkù lǐ cún yǒu dàliàng de shuǐ",
       "traceKey": "shuiku",
       "traceInfo": [
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        },
        {
         "c": "库",
         "py": "kù",
         "hv": "khố"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "那条船靠近了什么地方？",
       "qvi": "Chiếc thuyền đó đã cập vào chỗ nào?",
       "scene": "🚢🏞️",
       "ans": "船慢慢靠近了岸",
       "opts": [
        {
         "txt": "船慢慢靠近了机场",
         "ico": "✈️",
         "py": "Chuán mànmàn kàojìn le jīchǎng"
        },
        {
         "txt": "船慢慢靠近了岸",
         "ico": "🏞️",
         "py": "Chuán mànmàn kàojìn le àn"
        },
        {
         "txt": "船慢慢靠近了电梯",
         "ico": "🛗",
         "py": "Chuán mànmàn kàojìn le diàntī"
        }
       ],
       "qpy": "Nà tiáo chuán kàojìn le shénme dìfang?"
      },
      {
       "q": "草原上有什么？",
       "qvi": "Trên thảo nguyên có gì?",
       "scene": "🌾🐎",
       "ans": "草原上有很多马",
       "opts": [
        {
         "txt": "草原上有很多地铁",
         "ico": "🚇",
         "py": "Cǎoyuán shàng yǒu hěn duō dìtiě"
        },
        {
         "txt": "草原上有很多电梯",
         "ico": "🛗",
         "py": "Cǎoyuán shàng yǒu hěn duō diàntī"
        },
        {
         "txt": "草原上有很多马",
         "ico": "🐎",
         "py": "Cǎoyuán shàng yǒu hěn duō mǎ"
        }
       ],
       "qpy": "Cǎoyuán shàng yǒu shénme?"
      },
      {
       "q": "沙漠里为什么没有很多树？",
       "qvi": "Vì sao trong sa mạc không có nhiều cây?",
       "scene": "🏜️🌳",
       "ans": "因为沙漠里的水很少",
       "opts": [
        {
         "txt": "因为沙漠里的水很少",
         "ico": "🏜️",
         "py": "Yīnwèi shāmò lǐ de shuǐ hěn shǎo"
        },
        {
         "txt": "因为沙漠里的雨水太多",
         "ico": "🌧️",
         "py": "Yīnwèi shāmò lǐ de yǔshuǐ tài duō"
        },
        {
         "txt": "因为沙漠里的工作太忙",
         "ico": "💼",
         "py": "Yīnwèi shāmò lǐ de gōngzuò tài máng"
        }
       ],
       "qpy": "Shāmò lǐ wèi shénme méiyǒu hěn duō shù?"
      },
      {
       "q": "这张地图上写有什么？",
       "qvi": "Trên tấm bản đồ này ghi gì?",
       "scene": "🗺️✍️",
       "ans": "地图上写有边境的名字",
       "opts": [
        {
         "txt": "地图上写有我的电话",
         "ico": "📞",
         "py": "Dìtú shàng xiě yǒu wǒ de diànhuà"
        },
        {
         "txt": "地图上写有边境的名字",
         "ico": "🗺️",
         "py": "Dìtú shàng xiě yǒu biānjìng de míngzi"
        },
        {
         "txt": "地图上写有明天的天气",
         "ico": "⛅",
         "py": "Dìtú shàng xiě yǒu míngtiān de tiānqì"
        }
       ],
       "qpy": "Zhè zhāng dìtú shàng xiě yǒu shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu địa hình nơi bạn sống hoặc đi công tác",
      "steps": [
       "<b>Bước 1:</b> Mở bản đồ và chọn một vùng bạn biết. Nói thành tiếng 2 câu mô tả bằng mẫu <i>\"这片草原上有着很多牛和羊\"</i>, thay bằng địa hình thật.",
       "<b>Bước 2:</b> Nhắn cho đồng nghiệp hoặc đối tác: kể nơi bạn sắp đến có gì, dùng <i>\"山洞旁边有一眼泉和一条小沟\"</i> làm mẫu với nơi chốn đứng đầu câu.",
       "<b>Bước 3:</b> Viết 2 câu dùng dạng Động từ + 有, ví dụ <i>\"地图上写有高原和平原的名字\"</i>, rồi đọc lại và kiểm tra bạn không thêm 在 trước nơi chốn."
      ]
     }
    },
    {
     "id": "5.13C",
     "name": "Bài 5.13C: Đồ dùng văn phòng và gia dụng (câu 把)",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 把 + 🔋 电池换成了新的",
       "🙏 请你 + ⚡ 把 + 🖊️ 钢笔放在桌子上",
       "❓ 你 + 把 + 🔑 门锁好了吗？"
      ],
      "tip": "Câu 把 (bǎ, Hán Việt: bả) nhấn mạnh việc xử lý một vật xác định: Chủ ngữ + 把 + Tân ngữ + Động từ + thành phần khác (了、在…上、成…、好). Sau động từ phải có thành phần bổ sung, không để động từ trần: 我把电池换成了新的.",
      "vn_tip": "Người Việt hay nói “我放钢笔在桌子上” theo trật tự tiếng Việt “tôi để bút lên bàn”. Cần nói: 我把钢笔放在桌子上. Ngoài ra, tân ngữ sau 把 phải là vật đã xác định (cái bút ấy, cái khóa ấy), và phủ định đặt trước 把: 别把火柴给孩子, không đặt sau động từ."
     },
     "chunks": [
      {
       "scene": "🙏🖊️🪑",
       "full": "请你把我的钢笔放在桌子上",
       "vi": "Xin bạn để cây bút máy của tôi lên bàn",
       "parts": [
        {
         "t": "请你",
         "ico": "🙏",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nễ"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "我的钢笔放在桌子上",
         "ico": "🖊️",
         "c": "o",
         "py": "wǒ de gāngbǐ fàng zài zhuōzi shàng",
         "hv": "ngã đích cương bút phóng tại trác tử thượng"
        }
       ],
       "traceWord": "钢笔",
       "py": "Qǐng nǐ bǎ wǒ de gāngbǐ fàng zài zhuōzi shàng",
       "traceKey": "gangbi",
       "traceInfo": [
        {
         "c": "钢",
         "py": "gāng",
         "hv": "cương"
        },
        {
         "c": "笔",
         "py": "bǐ",
         "hv": "bút"
        }
       ]
      },
      {
       "scene": "🧑🖌️🎒",
       "full": "他把毛笔和胶水都放进了背包",
       "vi": "Anh ấy bỏ bút lông và keo dán vào ba lô hết rồi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "毛笔和胶水都放进了背包",
         "ico": "🎒",
         "c": "o",
         "py": "máobǐ hé jiāoshuǐ dōu fàng jìn le bēibāo",
         "hv": "mao bút hòa giao thủy đô phóng tiến liễu bối bao"
        }
       ],
       "traceWord": "背包",
       "py": "Tā bǎ máobǐ hé jiāoshuǐ dōu fàng jìn le bēibāo",
       "traceKey": "beibao",
       "traceInfo": [
        {
         "c": "背",
         "py": "bēi",
         "hv": "bối"
        },
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        }
       ]
      },
      {
       "scene": "🧑✂️📏",
       "full": "小王用剪刀把胶带剪成了两段",
       "vi": "Tiểu Vương dùng kéo cắt cuộn băng keo thành hai đoạn",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "用剪刀把胶带剪",
         "ico": "✂️",
         "c": "v",
         "py": "yòng jiǎndāo bǎ jiāodài jiǎn",
         "hv": "dụng tiễn đao bả giao đới tiễn"
        },
        {
         "t": "成了两段",
         "ico": "📏",
         "c": "o",
         "py": "chéng le liǎng duàn",
         "hv": "thành liễu lưỡng đoạn"
        }
       ],
       "traceWord": "剪刀",
       "py": "Xiǎowáng yòng jiǎndāo bǎ jiāodài jiǎn chéng le liǎng duàn",
       "traceKey": "jiandao",
       "traceInfo": [
        {
         "c": "剪",
         "py": "jiǎn",
         "hv": "tiễn"
        },
        {
         "c": "刀",
         "py": "dāo",
         "hv": "đao"
        }
       ]
      },
      {
       "scene": "🧑🔋🆕",
       "full": "我把没电的电池换成了新的",
       "vi": "Tôi thay cục pin hết điện bằng cục mới",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "没电的电池换成了新的",
         "ico": "🔋",
         "c": "o",
         "py": "méi diàn de diànchí huàn chéng le xīn de",
         "hv": "một điện đích điện trì hoán thành liễu tân đích"
        }
       ],
       "traceWord": "电池",
       "py": "Wǒ bǎ méi diàn de diànchí huàn chéng le xīn de",
       "traceKey": "dianchi",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "池",
         "py": "chí",
         "hv": "trì"
        }
       ]
      },
      {
       "scene": "🏢🥵🪭",
       "full": "办公室里太热了小李把扇子拿出来扇风",
       "vi": "Trong văn phòng nóng quá, Tiểu Lý lấy quạt ra quạt",
       "parts": [
        {
         "t": "办公室里太热了小李",
         "ico": "🥵",
         "c": "s",
         "py": "bàngōngshì lǐ tài rè le Xiǎolǐ",
         "hv": "biện công thất lý thái nhiệt liễu tiểu lý"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "扇子拿出来扇风",
         "ico": "🪭",
         "c": "o",
         "py": "shànzi ná chūlái shān fēng",
         "hv": "phiến tử nã xuất lai phiến phong"
        }
       ],
       "traceWord": "扇子",
       "py": "Bàngōngshì lǐ tài rè le Xiǎolǐ bǎ shànzi ná chūlái shān fēng",
       "traceKey": "shanzi",
       "traceInfo": [
        {
         "c": "扇",
         "py": "shàn",
         "hv": "phiến"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🏢🚪🔒",
       "full": "下班以前请你把办公室的门锁好",
       "vi": "Trước khi tan làm, xin bạn khóa cửa văn phòng cho kỹ",
       "parts": [
        {
         "t": "下班以前请你",
         "ico": "🕔",
         "c": "s",
         "py": "xiàbān yǐqián qǐng nǐ",
         "hv": "hạ ban dĩ tiền thỉnh nễ"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "办公室的门锁好",
         "ico": "🔒",
         "c": "o",
         "py": "bàngōngshì de mén suǒ hǎo",
         "hv": "biện công thất đích môn tỏa hảo"
        }
       ],
       "traceWord": "锁",
       "py": "Xiàbān yǐqián qǐng nǐ bǎ bàngōngshì de mén suǒ hǎo",
       "traceKey": "suo",
       "traceInfo": [
        {
         "c": "锁",
         "py": "suǒ",
         "hv": "tỏa"
        }
       ]
      },
      {
       "scene": "🚪🍚⚡",
       "full": "出门以前别忘了把电饭锅的电源关上",
       "vi": "Trước khi ra khỏi nhà đừng quên tắt nguồn nồi cơm điện",
       "parts": [
        {
         "t": "出门以前别忘了",
         "ico": "🚪",
         "c": "s",
         "py": "chūmén yǐqián bié wàng le",
         "hv": "xuất môn dĩ tiền biệt vong liễu"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "电饭锅的电源关上",
         "ico": "🍚",
         "c": "o",
         "py": "diànfànguō de diànyuán guānshang",
         "hv": "điện phạn oa đích điện nguyên quan thượng"
        }
       ],
       "traceWord": "电饭锅",
       "py": "Chūmén yǐqián bié wàng le bǎ diànfànguō de diànyuán guānshang",
       "traceKey": "dianfanguo",
       "traceInfo": [
        {
         "c": "电",
         "py": "diàn",
         "hv": "điện"
        },
        {
         "c": "饭",
         "py": "fàn",
         "hv": "phạn"
        },
        {
         "c": "锅",
         "py": "guō",
         "hv": "oa"
        }
       ]
      },
      {
       "scene": "👩🔥👶",
       "full": "妈妈把火柴放在孩子拿不到的地方",
       "vi": "Mẹ để diêm ở chỗ trẻ không với tới",
       "parts": [
        {
         "t": "妈妈",
         "ico": "👩",
         "c": "s",
         "py": "māma",
         "hv": "ma ma"
        },
        {
         "t": "把",
         "ico": "🤲",
         "c": "v",
         "py": "bǎ",
         "hv": "bả"
        },
        {
         "t": "火柴放在孩子拿不到的地方",
         "ico": "🔥",
         "c": "o",
         "py": "huǒchái fàng zài háizi ná bú dào de dìfang",
         "hv": "hỏa sài phóng tại hài tử nã bất đáo đích địa phương"
        }
       ],
       "traceWord": "火柴",
       "py": "Māma bǎ huǒchái fàng zài háizi ná bú dào de dìfang",
       "traceKey": "huochai",
       "traceInfo": [
        {
         "c": "火",
         "py": "huǒ",
         "hv": "hỏa"
        },
        {
         "c": "柴",
         "py": "chái",
         "hv": "sài"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么把手机的铃声调小了？",
       "qvi": "Vì sao bạn chỉnh nhỏ chuông điện thoại?",
       "scene": "📱🔔",
       "ans": "因为开会的时候铃声太吵了",
       "opts": [
        {
         "txt": "因为我今天早上吃了面包",
         "ico": "🍞",
         "py": "Yīnwèi wǒ jīntiān zǎoshang chī le miànbāo"
        },
        {
         "txt": "因为开会的时候铃声太吵了",
         "ico": "🔔",
         "py": "Yīnwèi kāihuì de shíhou língshēng tài chǎo le"
        },
        {
         "txt": "因为下个月我要去北京",
         "ico": "🏙️",
         "py": "Yīnwèi xià ge yuè wǒ yào qù Běijīng"
        }
       ],
       "qpy": "Nǐ wèi shénme bǎ shǒujī de língshēng tiáo xiǎo le?"
      },
      {
       "q": "你把剪子放在哪儿了？",
       "qvi": "Bạn để cái kéo ở đâu?",
       "scene": "✂️❓",
       "ans": "我把剪子放在桌子上了",
       "opts": [
        {
         "txt": "我昨天去超市买东西了",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù chāoshì mǎi dōngxi le"
        },
        {
         "txt": "他是我们公司的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        },
        {
         "txt": "我把剪子放在桌子上了",
         "ico": "✂️",
         "py": "Wǒ bǎ jiǎnzi fàng zài zhuōzi shàng le"
        }
       ],
       "qpy": "Nǐ bǎ jiǎnzi fàng zài nǎr le?"
      },
      {
       "q": "你把这张纸夹在哪儿了？",
       "qvi": "Bạn kẹp tờ giấy này ở đâu?",
       "scene": "📄📓",
       "ans": "我把它夹在笔记本里了",
       "opts": [
        {
         "txt": "我明天要去机场",
         "ico": "✈️",
         "py": "Wǒ míngtiān yào qù jīchǎng"
        },
        {
         "txt": "我把它夹在笔记本里了",
         "ico": "📓",
         "py": "Wǒ bǎ tā jiā zài bǐjìběn lǐ le"
        },
        {
         "txt": "他今年三十岁了",
         "ico": "🎂",
         "py": "Tā jīnnián sān shí suì le"
        }
       ],
       "qpy": "Nǐ bǎ zhè zhāng zhǐ jiā zài nǎr le?"
      },
      {
       "q": "客人来了，你把门铃按了吗？",
       "qvi": "Khách đến rồi, bạn đã bấm chuông cửa chưa?",
       "scene": "🚪🔔",
       "ans": "我已经把门铃按了",
       "opts": [
        {
         "txt": "我不喜欢吃辣的",
         "ico": "🌶️",
         "py": "Wǒ bù xǐhuan chī là de"
        },
        {
         "txt": "明天会下大雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià dà yǔ"
        },
        {
         "txt": "我已经把门铃按了",
         "ico": "🔔",
         "py": "Wǒ yǐjīng bǎ mén líng àn le"
        }
       ],
       "qpy": "Kèrén lái le nǐ bǎ mén líng àn le ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Dặn dò đồng nghiệp trước khi tan làm",
      "steps": [
       "<b>Bước 1:</b> Nhắn cho đồng nghiệp nhờ việc nhỏ ở văn phòng bằng mẫu <i>\"请你把我的钢笔放在桌子上\"</i>, thay bằng đồ vật thật trên bàn bạn.",
       "<b>Bước 2:</b> Gọi hoặc nhắn dặn trước khi ra về: <i>\"下班以前请你把办公室的门锁好\"</i>; tự nói thêm 2 câu với 把 về điện, cửa, đồ đạc.",
       "<b>Bước 3:</b> Hỏi lại đồng nghiệp <i>\"你把门铃按了吗？\"</i> và trả lời bằng <i>\"我已经把门铃按了\"</i>; kiểm tra mỗi câu 把 đều có thành phần sau động từ."
      ]
     }
    }
   ]
  },
  "5.14": {
   "lessons": [
    {
     "id": "5.14A",
     "name": "Bài 5.14A: Trang phục và diện mạo",
     "grammar": {
      "formulas": [
       "👔 衣服 + ⚡ 洗 + ✅ 得很干净",
       "👟 皮鞋 + ⚡ 擦 + ✅ 亮了",
       "❓ 西装 + 送去 + 洗了 + 吗？"
      ],
      "tip": "Câu bị động ý niệm (意念被动句): không dùng 被/叫/让, chỉ đặt vật chịu tác động (受事) làm chủ ngữ rồi đến động từ + bổ ngữ/了. Ví dụ 衣服洗得很干净 nghĩa là \"quần áo được giặt sạch\". Động từ thường kèm bổ ngữ kết quả hoặc 了 (như 洗好了, 卖完了, 剪短了).",
      "vn_tip": "Người Việt hay thêm 被 vào mọi câu bị động hoặc nói theo kiểu \"được\". Tiếng Trung khi vật là chủ ngữ và ai làm không quan trọng thì bỏ 被, nói thẳng 领带卖完了. Đừng quên bổ ngữ/了 sau động từ: không nói 衣服洗 mà nói 衣服洗好了."
     },
     "chunks": [
      {
       "scene": "🧥🧺✨",
       "full": "那件羽绒服已经洗得很干净了",
       "vi": "Chiếc áo lông vũ kia đã được giặt rất sạch rồi",
       "parts": [
        {
         "t": "那件羽绒服",
         "ico": "🧥",
         "c": "s",
         "py": "nà jiàn yǔróngfú",
         "hv": "na kiện vũ nhung phục"
        },
        {
         "t": "已经洗得",
         "ico": "🧺",
         "c": "v",
         "py": "yǐjīng xǐ de",
         "hv": "dĩ kinh tẩy đắc"
        },
        {
         "t": "很干净了",
         "ico": "✨",
         "c": "o",
         "py": "hěn gānjìng le",
         "hv": "ngận can tịnh liễu"
        }
       ],
       "traceWord": "羽绒服",
       "py": "Nà jiàn yǔróngfú yǐjīng xǐ de hěn gānjìng le",
       "traceKey": "yurongfu",
       "traceInfo": [
        {
         "c": "羽",
         "py": "yǔ",
         "hv": "vũ"
        },
        {
         "c": "绒",
         "py": "róng",
         "hv": "nhung"
        },
        {
         "c": "服",
         "py": "fú",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "👖🛍️🚫",
       "full": "那条牛仔裤买回来以后一直没穿",
       "vi": "Chiếc quần jean đó mua về rồi mà vẫn chưa mặc",
       "parts": [
        {
         "t": "那条牛仔裤",
         "ico": "👖",
         "c": "s",
         "py": "nà tiáo niúzǎikù",
         "hv": "na điều ngưu tể khố"
        },
        {
         "t": "买回来",
         "ico": "🛍️",
         "c": "v",
         "py": "mǎi huílái",
         "hv": "mãi hồi lai"
        },
        {
         "t": "以后一直没穿",
         "ico": "🚫",
         "c": "o",
         "py": "yǐhòu yīzhí méi chuān",
         "hv": "dĩ hậu nhất trực một xuyên"
        }
       ],
       "traceWord": "牛仔裤",
       "py": "Nà tiáo niúzǎikù mǎi huílái yǐhòu yīzhí méi chuān",
       "traceKey": "niuzaiku",
       "traceInfo": [
        {
         "c": "牛",
         "py": "niú",
         "hv": "ngưu"
        },
        {
         "c": "仔",
         "py": "zǎi",
         "hv": "tể"
        },
        {
         "c": "裤",
         "py": "kù",
         "hv": "khố"
        }
       ]
      },
      {
       "scene": "👞✨💼",
       "full": "这双皮鞋擦亮了就可以穿去开会",
       "vi": "Đôi giày da này đánh bóng rồi là có thể đi họp",
       "parts": [
        {
         "t": "这双皮鞋",
         "ico": "👞",
         "c": "s",
         "py": "zhè shuāng píxié",
         "hv": "giá song bì hài"
        },
        {
         "t": "擦亮了",
         "ico": "✨",
         "c": "v",
         "py": "cā liàng le",
         "hv": "sát lượng liễu"
        },
        {
         "t": "就可以穿去开会",
         "ico": "💼",
         "c": "o",
         "py": "jiù kěyǐ chuān qù kāihuì",
         "hv": "tựu khả dĩ xuyên khứ khai hội"
        }
       ],
       "traceWord": "皮鞋",
       "py": "Zhè shuāng píxié cā liàng le jiù kěyǐ chuān qù kāihuì",
       "traceKey": "pixie",
       "traceInfo": [
        {
         "c": "皮",
         "py": "pí",
         "hv": "bì"
        },
        {
         "c": "鞋",
         "py": "xié",
         "hv": "hài"
        }
       ]
      },
      {
       "scene": "🤵📅🧺",
       "full": "明天开会要穿的西装已经送去洗了",
       "vi": "Bộ vest mặc đi họp ngày mai đã được đem đi giặt rồi",
       "parts": [
        {
         "t": "明天开会要穿的西装",
         "ico": "🤵",
         "c": "s",
         "py": "míngtiān kāihuì yào chuān de xīzhuāng",
         "hv": "minh thiên khai hội yếu xuyên đích tây trang"
        },
        {
         "t": "已经送去",
         "ico": "🚚",
         "c": "v",
         "py": "yǐjīng sòng qù",
         "hv": "dĩ kinh tống khứ"
        },
        {
         "t": "洗了",
         "ico": "🧺",
         "c": "o",
         "py": "xǐ le",
         "hv": "tẩy liễu"
        }
       ],
       "traceWord": "西装",
       "py": "Míngtiān kāihuì yào chuān de xīzhuāng yǐjīng sòng qù xǐ le",
       "traceKey": "xizhuang",
       "traceInfo": [
        {
         "c": "西",
         "py": "xī",
         "hv": "tây"
        },
        {
         "c": "装",
         "py": "zhuāng",
         "hv": "trang"
        }
       ]
      },
      {
       "scene": "👔🌈🏪",
       "full": "那条鲜艳的领带早就卖完了",
       "vi": "Chiếc cà vạt sặc sỡ đó đã bán hết từ lâu rồi",
       "parts": [
        {
         "t": "那条鲜艳的领带",
         "ico": "👔",
         "c": "s",
         "py": "nà tiáo xiānyàn de lǐngdài",
         "hv": "na điều tiên diễm đích lĩnh đới"
        },
        {
         "t": "早就卖",
         "ico": "💰",
         "c": "v",
         "py": "zǎo jiù mài",
         "hv": "tảo tựu mại"
        },
        {
         "t": "完了",
         "ico": "🈵",
         "c": "o",
         "py": "wánle",
         "hv": "hoàn liễu"
        }
       ],
       "traceWord": "领带",
       "py": "Nà tiáo xiānyàn de lǐngdài zǎo jiù mài wánle",
       "traceKey": "lingdai",
       "traceInfo": [
        {
         "c": "领",
         "py": "lǐng",
         "hv": "lĩnh"
        },
        {
         "c": "带",
         "py": "dài",
         "hv": "đới"
        }
       ]
      },
      {
       "scene": "👩🎨🩶",
       "full": "她的头发昨天刚染成了灰色",
       "vi": "Tóc của cô ấy hôm qua vừa mới được nhuộm thành màu xám",
       "parts": [
        {
         "t": "她的头发",
         "ico": "👩",
         "c": "s",
         "py": "tā de tóufa",
         "hv": "tha đích đầu phát"
        },
        {
         "t": "昨天刚染",
         "ico": "🎨",
         "c": "v",
         "py": "zuótiān gāng rǎn",
         "hv": "tạc thiên cương nhiễm"
        },
        {
         "t": "成了灰色",
         "ico": "🩶",
         "c": "o",
         "py": "chéng le huīsè",
         "hv": "thành liễu hôi sắc"
        }
       ],
       "traceWord": "染",
       "py": "Tā de tóufa zuótiān gāng rǎn chéng le huīsè",
       "traceKey": "ran",
       "traceInfo": [
        {
         "c": "染",
         "py": "rǎn",
         "hv": "nhiễm"
        }
       ]
      },
      {
       "scene": "🟣🧥🪑",
       "full": "那件紫色的外套随手披在椅子上",
       "vi": "Chiếc áo khoác màu tím đó được tiện tay khoác lên ghế",
       "parts": [
        {
         "t": "那件紫色的外套",
         "ico": "🧥",
         "c": "s",
         "py": "nà jiàn zǐ sè de wàitào",
         "hv": "na kiện tử sắc đích ngoại sáo"
        },
        {
         "t": "随手披",
         "ico": "🤲",
         "c": "v",
         "py": "suíshǒu pī",
         "hv": "tùy thủ phi"
        },
        {
         "t": "在椅子上",
         "ico": "🪑",
         "c": "o",
         "py": "zài yǐzi shàng",
         "hv": "tại ỷ tử thượng"
        }
       ],
       "traceWord": "披",
       "py": "Nà jiàn zǐ sè de wàitào suíshǒu pī zài yǐzi shàng",
       "traceKey": "pi",
       "traceInfo": [
        {
         "c": "披",
         "py": "pī",
         "hv": "phi"
        }
       ]
      },
      {
       "scene": "🧔✂️😎",
       "full": "他的胡子剪短了模样精神多了",
       "vi": "Râu của anh ấy được cắt ngắn rồi, trông tinh thần hơn nhiều",
       "parts": [
        {
         "t": "他的胡子",
         "ico": "🧔",
         "c": "s",
         "py": "tā de húzi",
         "hv": "tha đích hồ tử"
        },
        {
         "t": "剪短了",
         "ico": "✂️",
         "c": "v",
         "py": "jiǎn duǎn le",
         "hv": "tiễn đoản liễu"
        },
        {
         "t": "模样精神多了",
         "ico": "😎",
         "c": "o",
         "py": "múyàng jīngshén duō le",
         "hv": "mô dạng tinh thần đa liễu"
        }
       ],
       "traceWord": "模样",
       "py": "Tā de húzi jiǎn duǎn le múyàng jīngshén duō le",
       "traceKey": "muyang",
       "traceInfo": [
        {
         "c": "模",
         "py": "mú",
         "hv": "mô"
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
       "q": "你的高跟鞋放在哪儿了？",
       "qvi": "Giày cao gót của bạn để ở đâu rồi?",
       "scene": "👠🚪❓",
       "ans": "高跟鞋放在门口了",
       "opts": [
        {
         "txt": "高跟鞋放在门口了",
         "ico": "🚪",
         "py": "Gāogēnxié fàng zài ménkǒu le"
        },
        {
         "txt": "我昨天去北京出差了",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng chūchāi le"
        },
        {
         "txt": "公司的会议在下午三点",
         "ico": "🕒",
         "py": "Gōngsī de huìyì zài xiàwǔ sān diǎn"
        }
       ],
       "qpy": "Nǐ de gāogēnxié fàng zài nǎr le?"
      },
      {
       "q": "明天的会议你打算怎么打扮？",
       "qvi": "Cuộc họp ngày mai bạn định ăn mặc thế nào?",
       "scene": "📅🤵❓",
       "ans": "我想穿西装再打领带",
       "opts": [
        {
         "txt": "我想坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒ xiǎng zuò dìtiě qù gōngsī"
        },
        {
         "txt": "我想穿西装再打领带",
         "ico": "🤵",
         "py": "Wǒ xiǎng chuān xīzhuāng zài dǎ lǐngdài"
        },
        {
         "txt": "我明天要去机场接朋友",
         "ico": "🛬",
         "py": "Wǒ míngtiān yào qù jīchǎng jiē péngyou"
        }
       ],
       "qpy": "Míngtiān de huìyì nǐ dǎsuàn zěnme dǎban?"
      },
      {
       "q": "他最近瘦了很多，面貌有什么变化？",
       "qvi": "Dạo này anh ấy gầy đi nhiều, diện mạo có gì thay đổi?",
       "scene": "🧑📉❓",
       "ans": "他的面貌比以前年轻多了",
       "opts": [
        {
         "txt": "那家商店下午三点关门",
         "ico": "🏪",
         "py": "Nà jiā shāngdiàn xiàwǔ sān diǎn guān mén"
        },
        {
         "txt": "公司在地铁站旁边",
         "ico": "🚇",
         "py": "Gōngsī zài dìtiězhàn pángbiān"
        },
        {
         "txt": "他的面貌比以前年轻多了",
         "ico": "😊",
         "py": "Tā de miànmào bǐ yǐqián niánqīng duō le"
        }
       ],
       "qpy": "Tā zuìjìn shòu le hěn duō miànmào yǒu shénme biànhuà?"
      },
      {
       "q": "青色的外套挂在哪儿了？",
       "qvi": "Chiếc áo khoác màu xanh đen treo ở đâu rồi?",
       "scene": "🧥🚪❓",
       "ans": "青色的外套挂在门后边",
       "opts": [
        {
         "txt": "我们下周开会",
         "ico": "📅",
         "py": "Wǒmen xià zhōu kāihuì"
        },
        {
         "txt": "他每天坐公交车上班",
         "ico": "🚌",
         "py": "Tā měi tiān zuò gōngjiāochē shàngbān"
        },
        {
         "txt": "青色的外套挂在门后边",
         "ico": "🧥",
         "py": "Qīng sè de wàitào guà zài mén hòubian"
        }
       ],
       "qpy": "Qīng sè de wàitào guà zài nǎr le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị trang phục cho buổi họp quan trọng",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hoặc người nhà, hỏi xem quần áo đã chuẩn bị xong chưa: <i>\"明天开会要穿的西装已经送去洗了。\"</i>",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu bị động ý niệm về đồ của bạn, ví dụ <i>\"这双皮鞋擦亮了就可以穿去开会。\"</i> và <i>\"那条鲜艳的领带早就卖完了。\"</i>",
       "<b>Bước 3:</b> Mô tả bạn sẽ ăn mặc thế nào: trả lời câu hỏi <i>\"明天的会议你打算怎么打扮？\"</i> bằng 2-3 câu, nhớ dùng màu sắc và đồ vật đã học."
      ]
     }
    },
    {
     "id": "5.14B",
     "name": "Bài 5.14B: Đi lại và giao thông",
     "grammar": {
      "formulas": [
       "🧑 你 + ⚡ 有驾照 + 🚗 才能驾驶汽车",
       "🌧️ 下大雨 + 🚗 汽车 + 🐢 慢慢行驶",
       "🚌 乘车 + ⚡ 去 + 🏘️ 郊区"
      ],
      "tip": "Câu liên động (连动句): nhiều động từ cùng một chủ ngữ, xếp theo thứ tự xảy ra. Động từ trước có thể là phương tiện (乘车去 chéng chē qù, \"đi bằng xe\"), hoặc là nguyên nhân/điều kiện của việc sau: 有驾照才能驾驶 (chỉ khi có bằng lái mới được lái), 下大雨只好慢慢行驶 (mưa to nên đành chạy chậm).",
      "vn_tip": "Người Việt hay chèn thêm từ nối như \"để\", \"rồi\" hoặc đặt sai thứ tự. Tiếng Trung xếp động từ liền nhau theo thứ tự thời gian: nói 乘车去郊区 chứ không nói 去郊区乘车 khi muốn nói đi bằng xe. Không thêm 然后 hay 来 không cần thiết giữa các động từ."
     },
     "chunks": [
      {
       "scene": "🧑‍🤝‍🧑🚌🏘️",
       "full": "我们乘车去郊区看朋友",
       "vi": "Chúng tôi đi xe đến vùng ngoại ô thăm bạn",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "乘车去",
         "ico": "🚌",
         "c": "v",
         "py": "chéng chē qù",
         "hv": "thừa xa khứ"
        },
        {
         "t": "郊区看朋友",
         "ico": "🏘️",
         "c": "o",
         "py": "jiāoqū kàn péngyou",
         "hv": "giao khu khán bằng hữu"
        }
       ],
       "traceWord": "乘车",
       "py": "Wǒmen chéng chē qù jiāoqū kàn péngyou",
       "traceKey": "chengche",
       "traceInfo": [
        {
         "c": "乘",
         "py": "chéng",
         "hv": "thừa"
        },
        {
         "c": "车",
         "py": "chē",
         "hv": "xa"
        }
       ]
      },
      {
       "scene": "🧑🏍️⚓",
       "full": "他每天骑摩托去码头上班",
       "vi": "Mỗi ngày anh ấy chạy xe máy ra bến cảng đi làm",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "每天骑摩托去",
         "ico": "🏍️",
         "c": "v",
         "py": "měi tiān qí mótuō qù",
         "hv": "mỗi thiên kỵ ma thác khứ"
        },
        {
         "t": "码头上班",
         "ico": "⚓",
         "c": "o",
         "py": "mǎtóu shàngbān",
         "hv": "mã đầu thượng ban"
        }
       ],
       "traceWord": "摩托",
       "py": "Tā měi tiān qí mótuō qù mǎtóu shàngbān",
       "traceKey": "motuo",
       "traceInfo": [
        {
         "c": "摩",
         "py": "mó",
         "hv": "ma"
        },
        {
         "c": "托",
         "py": "tuō",
         "hv": "thác"
        }
       ]
      },
      {
       "scene": "🧳🎫🚉",
       "full": "乘客拿着车票排队上车",
       "vi": "Hành khách cầm vé xếp hàng lên xe",
       "parts": [
        {
         "t": "乘客",
         "ico": "🧳",
         "c": "s",
         "py": "chéngkè",
         "hv": "thừa khách"
        },
        {
         "t": "拿着",
         "ico": "🤲",
         "c": "v",
         "py": "ná zhe",
         "hv": "nã trước"
        },
        {
         "t": "车票排队上车",
         "ico": "🎫",
         "c": "o",
         "py": "chēpiào páiduì shàng chē",
         "hv": "xa phiếu bài đội thượng xa"
        }
       ],
       "traceWord": "乘客",
       "py": "Chéngkè ná zhe chēpiào páiduì shàng chē",
       "traceKey": "chengke",
       "traceInfo": [
        {
         "c": "乘",
         "py": "chéng",
         "hv": "thừa"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "🧑🏨🧳",
       "full": "我们先去城里的宾馆放下行李再去公司",
       "vi": "Chúng tôi đến khách sạn trong thành phố để hành lý trước rồi mới đến công ty",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "先去",
         "ico": "🚶",
         "c": "v",
         "py": "xiān qù",
         "hv": "tiên khứ"
        },
        {
         "t": "城里的宾馆放下行李再去公司",
         "ico": "🏨",
         "c": "o",
         "py": "chénglǐ de bīnguǎn fàngxia xíngli zài qù gōngsī",
         "hv": "thành lý đích tân quán phóng hạ hành lý tái khứ công ti"
        }
       ],
       "traceWord": "宾馆",
       "py": "Wǒmen xiān qù chénglǐ de bīnguǎn fàngxia xíngli zài qù gōngsī",
       "traceKey": "binguan",
       "traceInfo": [
        {
         "c": "宾",
         "py": "bīn",
         "hv": "tân"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "🧑🪪🚗",
       "full": "你要有驾照才能驾驶汽车上高速公路",
       "vi": "Bạn phải có bằng lái mới được lái ô tô lên đường cao tốc",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "要有驾照才能",
         "ico": "🪪",
         "c": "v",
         "py": "yào yǒu jiàzhào cáinéng",
         "hv": "yếu hữu giá chiếu tài năng"
        },
        {
         "t": "驾驶汽车上高速公路",
         "ico": "🛣️",
         "c": "o",
         "py": "jiàshǐ qìchē shàng gāosù gōnglù",
         "hv": "giá sử khí xa thượng cao tốc công lộ"
        }
       ],
       "traceWord": "驾驶",
       "py": "Nǐ yào yǒu jiàzhào cáinéng jiàshǐ qìchē shàng gāosù gōnglù",
       "traceKey": "jiashi",
       "traceInfo": [
        {
         "c": "驾",
         "py": "jià",
         "hv": "giá"
        },
        {
         "c": "驶",
         "py": "shǐ",
         "hv": "sử"
        }
       ]
      },
      {
       "scene": "🌧️🚗🐢",
       "full": "下大雨汽车只好在公路上慢慢行驶",
       "vi": "Trời mưa to nên xe ô tô đành chạy chậm trên đường",
       "parts": [
        {
         "t": "下大雨汽车",
         "ico": "🌧️",
         "c": "s",
         "py": "xià dà yǔ qìchē",
         "hv": "hạ đại vũ khí xa"
        },
        {
         "t": "只好",
         "ico": "😕",
         "c": "v",
         "py": "zhǐhǎo",
         "hv": "chỉ hảo"
        },
        {
         "t": "在公路上慢慢行驶",
         "ico": "🐢",
         "c": "o",
         "py": "zài gōnglù shàng mànmàn xíngshǐ",
         "hv": "tại công lộ thượng mạn mạn hành sử"
        }
       ],
       "traceWord": "行驶",
       "py": "Xià dà yǔ qìchē zhǐhǎo zài gōnglù shàng mànmàn xíngshǐ",
       "traceKey": "xingshi",
       "traceInfo": [
        {
         "c": "行",
         "py": "xíng",
         "hv": "hành"
        },
        {
         "c": "驶",
         "py": "shǐ",
         "hv": "sử"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑🧭⛰️",
       "full": "我们请了一位向导带我们乘坐小船去山区",
       "vi": "Chúng tôi thuê một hướng dẫn viên đưa chúng tôi đi thuyền nhỏ vào vùng núi",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "请了一位向导",
         "ico": "🧭",
         "c": "v",
         "py": "qǐng le yī wèi xiàngdǎo",
         "hv": "thỉnh liễu nhất vị hướng đạo"
        },
        {
         "t": "带我们乘坐小船去山区",
         "ico": "⛵",
         "c": "o",
         "py": "dài wǒmen chéngzuò xiǎo chuán qù shānqū",
         "hv": "đới ngã môn thừa tọa tiểu thuyền khứ sơn khu"
        }
       ],
       "traceWord": "向导",
       "py": "Wǒmen qǐng le yī wèi xiàngdǎo dài wǒmen chéngzuò xiǎo chuán qù shānqū",
       "traceKey": "xiangdao",
       "traceInfo": [
        {
         "c": "向",
         "py": "xiàng",
         "hv": "hướng"
        },
        {
         "c": "导",
         "py": "dǎo",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "🏞️🚢↔️",
       "full": "这条河的南北两岸要乘坐轮船才能过去",
       "vi": "Hai bờ nam bắc của con sông này phải đi tàu thủy mới sang được",
       "parts": [
        {
         "t": "这条河的南北两岸",
         "ico": "🏞️",
         "c": "s",
         "py": "zhè tiáo hé de nánběi liǎng'àn",
         "hv": "giá điều hà đích nam bắc lưỡng ngạn"
        },
        {
         "t": "要乘坐轮船",
         "ico": "🚢",
         "c": "v",
         "py": "yào chéngzuò lúnchuán",
         "hv": "yếu thừa tọa luân thuyền"
        },
        {
         "t": "才能过去",
         "ico": "↔️",
         "c": "o",
         "py": "cáinéng guòqù",
         "hv": "tài năng quá khứ"
        }
       ],
       "traceWord": "两岸",
       "py": "Zhè tiáo hé de nánběi liǎng'àn yào chéngzuò lúnchuán cáinéng guòqù",
       "traceKey": "liangan",
       "traceInfo": [
        {
         "c": "两",
         "py": "liǎng",
         "hv": "lưỡng"
        },
        {
         "c": "岸",
         "py": "àn",
         "hv": "ngạn"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你明天怎么去公司？",
       "qvi": "Ngày mai bạn đến công ty bằng cách nào?",
       "scene": "🧑🚇🏢",
       "ans": "我乘地铁去公司",
       "opts": [
        {
         "txt": "我昨天买了一件西装",
         "ico": "🤵",
         "py": "Wǒ zuótiān mǎi le yī jiàn xīzhuāng"
        },
        {
         "txt": "我乘地铁去公司",
         "ico": "🚇",
         "py": "Wǒ chéng dìtiě qù gōngsī"
        },
        {
         "txt": "她是我们公司的经理",
         "ico": "👩‍💼",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        }
       ],
       "qpy": "Nǐ míngtiān zěnme qù gōngsī?"
      },
      {
       "q": "要去山区玩儿，需要请谁带路？",
       "qvi": "Muốn đi chơi vùng núi thì cần nhờ ai dẫn đường?",
       "scene": "⛰️🧭❓",
       "ans": "需要请一位向导",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "他在城里的银行工作",
         "ico": "🏦",
         "py": "Tā zài chénglǐ de yínháng gōngzuò"
        },
        {
         "txt": "需要请一位向导",
         "ico": "🧭",
         "py": "Xūyào qǐng yī wèi xiàngdǎo"
        }
       ],
       "qpy": "Yào qù shānqū wánr xūyào qǐng shéi dài lù?"
      },
      {
       "q": "从码头到宾馆怎么走？",
       "qvi": "Từ bến cảng đến khách sạn đi thế nào?",
       "scene": "⚓🏨❓",
       "ans": "乘车十分钟就到了",
       "opts": [
        {
         "txt": "我每天早上六点起床",
         "ico": "⏰",
         "py": "Wǒ měi tiān zǎoshang liù diǎn qǐchuáng"
        },
        {
         "txt": "这家宾馆的房间很干净",
         "ico": "🛏️",
         "py": "Zhè jiā bīnguǎn de fángjiān hěn gānjìng"
        },
        {
         "txt": "乘车十分钟就到了",
         "ico": "🚌",
         "py": "Chéng chē shí fēnzhōng jiù dào le"
        }
       ],
       "qpy": "Cóng mǎtóu dào bīnguǎn zěnme zǒu?"
      },
      {
       "q": "骑摩托车在山区行驶要注意什么？",
       "qvi": "Đi xe máy trong vùng núi cần chú ý điều gì?",
       "scene": "🏍️⛰️❓",
       "ans": "一定要慢慢开",
       "opts": [
        {
         "txt": "应该去超市买苹果",
         "ico": "🍎",
         "py": "Yīnggāi qù chāoshì mǎi píngguǒ"
        },
        {
         "txt": "一定要慢慢开",
         "ico": "🐢",
         "py": "Yīdìng yào mànmàn kāi"
        },
        {
         "txt": "可以明天再回信",
         "ico": "✉️",
         "py": "Kěyǐ míngtiān zài huíxìn"
        }
       ],
       "qpy": "Qí mótuō chē zài shānqū xíngshǐ yào zhùyì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Lên kế hoạch đi lại cho chuyến công tác",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi cách đi đến địa điểm họp: <i>\"我们乘车去郊区看朋友。\"</i> rồi thay địa điểm bằng nơi bạn thật sự sẽ đến.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu liên động về điều kiện, ví dụ <i>\"你要有驾照才能驾驶汽车上高速公路。\"</i> và <i>\"下大雨汽车只好在公路上慢慢行驶。\"</i>",
       "<b>Bước 3:</b> Gọi điện hỏi lễ tân khách sạn đường đi: trả lời câu hỏi <i>\"从码头到宾馆怎么走？\"</i> bằng cách dùng 乘车, 乘坐 và thời gian đi."
      ]
     }
    },
    {
     "id": "5.14C",
     "name": "Bài 5.14C: Thư từ và liên lạc",
     "grammar": {
      "formulas": [
       "👔 经理 + ⚡ 让 + 🧑 我回信",
       "📬 老板 + ⚡ 叫 + 🧑 小王去信箱",
       "💌 贺卡 + ⚡ 使 + 🧑 他感受到关心"
      ],
      "tip": "Câu kiêm ngữ (兼语句) biểu thị khiến: A + 叫/让/使/令 + B + làm gì. B vừa là tân ngữ của động từ đầu vừa là chủ ngữ của động từ sau: 经理让我回信 (giám đốc bảo tôi hồi âm). 叫 (jiào, khiếu) và 让 (ràng, nhượng) hay dùng trong khẩu ngữ để sai bảo; 使 (shǐ, sử) và 令 (lìng, lệnh) hay dùng cho tác động tâm lý/kết quả: 这件事使我很感动.",
      "vn_tip": "Người Việt hay dịch \"làm cho/khiến\" và đặt 让 sau tân ngữ, hoặc quên người bị sai khiến. Tiếng Trung phải có người ở giữa: 老板叫小王去 (không bỏ 小王). Phủ định đặt 不 trước 让/叫: 经理不让我回信. Không nói 让去信箱 mà phải là 让我去信箱."
     },
     "chunks": [
      {
       "scene": "👔✉️🧑",
       "full": "经理让我今天给客户回信",
       "vi": "Giám đốc bảo tôi hôm nay hồi âm cho khách hàng",
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
         "t": "我今天给客户回信",
         "ico": "✉️",
         "c": "o",
         "py": "wǒ jīntiān gěi kèhù huíxìn",
         "hv": "ngã kim thiên cấp khách hộ hồi tín"
        }
       ],
       "traceWord": "回信",
       "py": "Jīnglǐ ràng wǒ jīntiān gěi kèhù huíxìn",
       "traceKey": "huixin",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        }
       ]
      },
      {
       "scene": "👨‍💼📬✉️",
       "full": "老板叫小王去信箱看看有没有来信",
       "vi": "Sếp bảo Tiểu Vương ra hòm thư xem có thư đến không",
       "parts": [
        {
         "t": "老板",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "叫",
         "ico": "👉",
         "c": "v",
         "py": "jiào",
         "hv": "khiếu"
        },
        {
         "t": "小王去信箱看看有没有来信",
         "ico": "📬",
         "c": "o",
         "py": "Xiǎowáng qù xìnxiāng kàn kàn yǒu méiyǒu láixìn",
         "hv": "tiểu vương khứ tín tương khán khán hữu một hữu lai tín"
        }
       ],
       "traceWord": "信箱",
       "py": "Lǎobǎn jiào Xiǎowáng qù xìnxiāng kàn kàn yǒu méiyǒu láixìn",
       "traceKey": "xinxiang",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "箱",
         "py": "xiāng",
         "hv": "tương"
        }
       ]
      },
      {
       "scene": "🤝💭🧑",
       "full": "这次会谈让我有很多感想",
       "vi": "Cuộc hội đàm lần này khiến tôi có rất nhiều cảm nghĩ",
       "parts": [
        {
         "t": "这次会谈",
         "ico": "🤝",
         "c": "s",
         "py": "zhè cì huìtán",
         "hv": "giá thứ hội đàm"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "我有很多感想",
         "ico": "💭",
         "c": "o",
         "py": "wǒ yǒu hěn duō gǎnxiǎng",
         "hv": "ngã hữu ngận đa cảm tưởng"
        }
       ],
       "traceWord": "感想",
       "py": "Zhè cì huìtán ràng wǒ yǒu hěn duō gǎnxiǎng",
       "traceKey": "ganxiang",
       "traceInfo": [
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        },
        {
         "c": "想",
         "py": "xiǎng",
         "hv": "tưởng"
        }
       ]
      },
      {
       "scene": "💌😊🤗",
       "full": "一张贺卡使他感受到朋友的关心",
       "vi": "Một tấm thiệp chúc mừng khiến anh ấy cảm nhận được sự quan tâm của bạn bè",
       "parts": [
        {
         "t": "一张贺卡",
         "ico": "💌",
         "c": "s",
         "py": "yī zhāng hèkǎ",
         "hv": "nhất trương hạ _"
        },
        {
         "t": "使",
         "ico": "👉",
         "c": "v",
         "py": "shǐ",
         "hv": "sử"
        },
        {
         "t": "他感受到朋友的关心",
         "ico": "🤗",
         "c": "o",
         "py": "tā gǎnshòu dào péngyou de guānxīn",
         "hv": "tha cảm thụ đáo bằng hữu đích quan tâm"
        }
       ],
       "traceWord": "贺卡",
       "py": "Yī zhāng hèkǎ shǐ tā gǎnshòu dào péngyou de guānxīn",
       "traceKey": "heka",
       "traceInfo": [
        {
         "c": "贺",
         "py": "hè",
         "hv": "hạ"
        },
        {
         "c": "卡",
         "py": "kǎ",
         "hv": "_"
        }
       ]
      },
      {
       "scene": "📞🤝✅",
       "full": "经常联络使我们的沟通更加顺利",
       "vi": "Thường xuyên liên lạc khiến việc trao đổi của chúng tôi thuận lợi hơn",
       "parts": [
        {
         "t": "经常联络",
         "ico": "📞",
         "c": "s",
         "py": "jīngcháng liánluò",
         "hv": "kinh thường liên lạc"
        },
        {
         "t": "使",
         "ico": "👉",
         "c": "v",
         "py": "shǐ",
         "hv": "sử"
        },
        {
         "t": "我们的沟通更加顺利",
         "ico": "✅",
         "c": "o",
         "py": "wǒmen de gōutōng gèngjiā shùnlì",
         "hv": "ngã môn đích câu thông cánh gia thuận lợi"
        }
       ],
       "traceWord": "联络",
       "py": "Jīngcháng liánluò shǐ wǒmen de gōutōng gèngjiā shùnlì",
       "traceKey": "lianluo",
       "traceInfo": [
        {
         "c": "联",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "络",
         "py": "luò",
         "hv": "lạc"
        }
       ]
      },
      {
       "scene": "👔💻✈️",
       "full": "主任让秘书先查询航班再询问客户的时间",
       "vi": "Trưởng phòng bảo thư ký tra chuyến bay trước rồi hỏi thời gian của khách hàng",
       "parts": [
        {
         "t": "主任",
         "ico": "👔",
         "c": "s",
         "py": "zhǔrèn",
         "hv": "chủ nhiệm"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "秘书先查询航班再询问客户的时间",
         "ico": "💻",
         "c": "o",
         "py": "mìshū xiān cháxún hángbān zài xúnwèn kèhù de shíjiān",
         "hv": "bí thư tiên tra tuân hàng ban tái tuân vấn khách hộ đích thời gian"
        }
       ],
       "traceWord": "查询",
       "py": "Zhǔrèn ràng mìshū xiān cháxún hángbān zài xúnwèn kèhù de shíjiān",
       "traceKey": "chaxun",
       "traceInfo": [
        {
         "c": "查",
         "py": "chá",
         "hv": "tra"
        },
        {
         "c": "询",
         "py": "xún",
         "hv": "tuân"
        }
       ]
      },
      {
       "scene": "🤝🎁🙏",
       "full": "朋友的帮助让我一直想着怎么报答他",
       "vi": "Sự giúp đỡ của bạn bè khiến tôi luôn nghĩ cách đền đáp anh ấy",
       "parts": [
        {
         "t": "朋友的帮助",
         "ico": "🤝",
         "c": "s",
         "py": "péngyou de bāngzhù",
         "hv": "bằng hữu đích bang trợ"
        },
        {
         "t": "让",
         "ico": "👉",
         "c": "v",
         "py": "ràng",
         "hv": "nhượng"
        },
        {
         "t": "我一直想着怎么报答他",
         "ico": "🙏",
         "c": "o",
         "py": "wǒ yīzhí xiǎng zhe zěnme bàodá tā",
         "hv": "ngã nhất trực tưởng trước chẩm ma báo đáp tha"
        }
       ],
       "traceWord": "报答",
       "py": "Péngyou de bāngzhù ràng wǒ yīzhí xiǎng zhe zěnme bàodá tā",
       "traceKey": "baoda",
       "traceInfo": [
        {
         "c": "报",
         "py": "bào",
         "hv": "báo"
        },
        {
         "c": "答",
         "py": "dá",
         "hv": "đáp"
        }
       ]
      },
      {
       "scene": "🌐💬🛒",
       "full": "网上的评论使不少人改变了对这个产品的看法",
       "vi": "Bình luận trên mạng khiến không ít người thay đổi cách nhìn về sản phẩm này",
       "parts": [
        {
         "t": "网上的评论",
         "ico": "🌐",
         "c": "s",
         "py": "wǎng shang de pínglùn",
         "hv": "võng thượng đích bình luận"
        },
        {
         "t": "使",
         "ico": "👉",
         "c": "v",
         "py": "shǐ",
         "hv": "sử"
        },
        {
         "t": "不少人改变了对这个产品的看法",
         "ico": "🛒",
         "c": "o",
         "py": "bù shǎo rén gǎibiàn le duì zhè gè chǎnpǐn de kànfǎ",
         "hv": "bất thiểu nhân cải biến liễu đối giá cá sản phẩm đích khán pháp"
        }
       ],
       "traceWord": "评论",
       "py": "Wǎng shang de pínglùn shǐ bù shǎo rén gǎibiàn le duì zhè gè chǎnpǐn de kànfǎ",
       "traceKey": "pinglun",
       "traceInfo": [
        {
         "c": "评",
         "py": "píng",
         "hv": "bình"
        },
        {
         "c": "论",
         "py": "lùn",
         "hv": "luận"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "系统的提示让你做什么？",
       "qvi": "Gợi ý của hệ thống bảo bạn làm gì?",
       "scene": "💻💡❓",
       "ans": "它让我重新输入密码",
       "opts": [
        {
         "txt": "我昨天买了一条领带",
         "ico": "👔",
         "py": "Wǒ zuótiān mǎi le yī tiáo lǐngdài"
        },
        {
         "txt": "它让我重新输入密码",
         "ico": "🔑",
         "py": "Tā ràng wǒ chóngxīn shūrù mìmǎ"
        },
        {
         "txt": "公司在地铁站旁边",
         "ico": "🚇",
         "py": "Gōngsī zài dìtiězhàn pángbiān"
        }
       ],
       "qpy": "Xìtǒng de tíshì ràng nǐ zuò shénme?"
      },
      {
       "q": "他的这种说法为什么让大家产生了误会？",
       "qvi": "Vì sao cách nói này của anh ấy khiến mọi người hiểu lầm?",
       "scene": "🗣️😕❓",
       "ans": "因为他说得不够清楚",
       "opts": [
        {
         "txt": "因为他说得不够清楚",
         "ico": "🗣️",
         "py": "Yīnwèi tā shuō de bùgòu qīngchu"
        },
        {
         "txt": "因为明天会下雨",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān huì xià yǔ"
        },
        {
         "txt": "因为公司在北京",
         "ico": "🏢",
         "py": "Yīnwèi gōngsī zài Běijīng"
        }
       ],
       "qpy": "Tā de zhè zhǒng shuōfǎ wèi shénme ràng dàjiā chǎnshēng le wùhuì?"
      },
      {
       "q": "他帮了你这么多，你打算怎么回报他？",
       "qvi": "Anh ấy giúp bạn nhiều như vậy, bạn định đền đáp thế nào?",
       "scene": "🤝🎁❓",
       "ans": "我想请他吃饭",
       "opts": [
        {
         "txt": "这个星期五开会",
         "ico": "📅",
         "py": "Zhè gè xīngqī wǔ kāihuì"
        },
        {
         "txt": "我想请他吃饭",
         "ico": "🍜",
         "py": "Wǒ xiǎng qǐng tā chīfàn"
        },
        {
         "txt": "明天的天气很冷",
         "ico": "🥶",
         "py": "Míngtiān de tiānqì hěn lěng"
        }
       ],
       "qpy": "Tā bāng le nǐ zhème duō nǐ dǎsuàn zěnme huíbào tā?"
      },
      {
       "q": "老师让你答哪道题？",
       "qvi": "Thầy cô bảo bạn trả lời câu nào?",
       "scene": "👩‍🏫📝❓",
       "ans": "老师让我答最后一道题",
       "opts": [
        {
         "txt": "老师让我答最后一道题",
         "ico": "📝",
         "py": "Lǎoshī ràng wǒ dá zuìhòu yī dào tí"
        },
        {
         "txt": "老师让我明天带电脑",
         "ico": "💻",
         "py": "Lǎoshī ràng wǒ míngtiān dài diànnǎo"
        },
        {
         "txt": "老师叫我们回家休息",
         "ico": "🏠",
         "py": "Lǎoshī jiào wǒmen huí jiā xiūxi"
        }
       ],
       "qpy": "Lǎoshī ràng nǐ dá nǎ dào tí?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phân công việc liên lạc với khách hàng",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp giao việc: <i>\"经理让我今天给客户回信。\"</i> rồi đổi tên người và việc cho đúng với công việc của bạn.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu khiến với 让, 叫, 使, ví dụ <i>\"老板叫小王去信箱看看有没有来信。\"</i> và <i>\"经常联络使我们的沟通更加顺利。\"</i>",
       "<b>Bước 3:</b> Gọi điện hoặc nhắn tin cảm ơn một người đã giúp bạn, nói bạn muốn đền đáp: <i>\"朋友的帮助让我一直想着怎么报答他。\"</i>"
      ]
     }
    }
   ]
  },
  "5.15": {
   "lessons": [
    {
     "id": "5.15A",
     "name": "Bài 5.15A: Số đo và vật lý",
     "grammar": {
      "formulas": [
       "🌍 跟 + 🌕 地球 + ⚖️ 相比 + 🔭 月球 + 小得多",
       "🌕 月球的体积 + ⚖️ 比 + 🌍 地球 + 📏 小 + 🔢 很多"
      ],
      "tip": "Hai cách so sánh: 跟……相比 (gēn…xiāngbǐ, \"so với…\") đặt ở đầu hoặc sau chủ ngữ; và A 比 B + tính từ + số lượng (比 bǐ, âm Hán Việt \"tỉ\"), số lượng đặt SAU tính từ: 比我大一倍, 多三十厘米.",
      "vn_tip": "Người Việt hay nói \"月球比地球很小\" hoặc đặt số lượng trước tính từ. Đúng: 月球比地球小很多 / 比地球小得多. Không dùng 很 hoặc 非常 trước tính từ trong câu 比; muốn nói mức chênh thì đặt sau tính từ: 得多、多了、很多 hoặc số lượng."
     },
     "chunks": [
      {
       "scene": "🌕🌍📏",
       "full": "月球的体积比地球小很多",
       "vi": "Thể tích của Mặt Trăng nhỏ hơn Trái Đất rất nhiều",
       "parts": [
        {
         "t": "月球的体积",
         "ico": "🌕",
         "c": "s",
         "py": "yuèqiú de tǐjī",
         "hv": "nguyệt cầu đích thể tích"
        },
        {
         "t": "比地球小",
         "ico": "🌍",
         "c": "v",
         "py": "bǐ dìqiú xiǎo",
         "hv": "tỷ địa cầu tiểu"
        },
        {
         "t": "很多",
         "ico": "🔢",
         "c": "o",
         "py": "hěn duō",
         "hv": "ngận đa"
        }
       ],
       "traceWord": "体积",
       "py": "Yuèqiú de tǐjī bǐ dìqiú xiǎo hěn duō",
       "traceKey": "tiji",
       "traceInfo": [
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        },
        {
         "c": "积",
         "py": "jī",
         "hv": "tích"
        }
       ]
      },
      {
       "scene": "🚀🌍🔥",
       "full": "地面上的摩擦跟太空相比大得多",
       "vi": "So với không gian, ma sát trên mặt đất lớn hơn nhiều",
       "parts": [
        {
         "t": "地面上的摩擦",
         "ico": "🌍",
         "c": "s",
         "py": "dìmiàn shàng de mócā",
         "hv": "địa diện thượng đích ma sát"
        },
        {
         "t": "跟太空相比",
         "ico": "🚀",
         "c": "v",
         "py": "gēn tàikōng xiāngbǐ",
         "hv": "cân thái không tương tỷ"
        },
        {
         "t": "大得多",
         "ico": "📈",
         "c": "o",
         "py": "dà de duō",
         "hv": "đại đắc đa"
        }
       ],
       "traceWord": "摩擦",
       "py": "Dìmiàn shàng de mócā gēn tàikōng xiāngbǐ dà de duō",
       "traceKey": "moca",
       "traceInfo": [
        {
         "c": "摩",
         "py": "mó",
         "hv": "ma"
        },
        {
         "c": "擦",
         "py": "cā",
         "hv": "sát"
        }
       ]
      },
      {
       "scene": "🛰️🌕🌍",
       "full": "这颗卫星比月球离地球近三万公里",
       "vi": "Vệ tinh này gần Trái Đất hơn Mặt Trăng ba vạn km",
       "parts": [
        {
         "t": "这颗卫星",
         "ico": "🛰️",
         "c": "s",
         "py": "zhè kē wèixīng",
         "hv": "giá khỏa vệ tinh"
        },
        {
         "t": "比月球离地球近",
         "ico": "🌕",
         "c": "v",
         "py": "bǐ yuèqiú lí dìqiú jìn",
         "hv": "tỷ nguyệt cầu ly địa cầu cận"
        },
        {
         "t": "三万公里",
         "ico": "📏",
         "c": "o",
         "py": "sān wàn gōnglǐ",
         "hv": "tam vạn công lý"
        }
       ],
       "traceWord": "卫星",
       "py": "Zhè kē wèixīng bǐ yuèqiú lí dìqiú jìn sān wàn gōnglǐ",
       "traceKey": "weixing",
       "traceInfo": [
        {
         "c": "卫",
         "py": "wèi",
         "hv": "vệ"
        },
        {
         "c": "星",
         "py": "xīng",
         "hv": "tinh"
        }
       ]
      },
      {
       "scene": "🌙☀️⚡",
       "full": "月亮发出的能量跟太阳相比少得多",
       "vi": "So với Mặt Trời, năng lượng Mặt Trăng phát ra ít hơn nhiều",
       "parts": [
        {
         "t": "月亮发出的能量",
         "ico": "🌙",
         "c": "s",
         "py": "yuèliang fāchū de néngliàng",
         "hv": "nguyệt lượng phát xuất đích năng lượng"
        },
        {
         "t": "跟太阳相比",
         "ico": "☀️",
         "c": "v",
         "py": "gēn tàiyáng xiāngbǐ",
         "hv": "cân thái dương tương tỷ"
        },
        {
         "t": "少得多",
         "ico": "📉",
         "c": "o",
         "py": "shǎo de duō",
         "hv": "thiểu đắc đa"
        }
       ],
       "traceWord": "能量",
       "py": "Yuèliang fāchū de néngliàng gēn tàiyáng xiāngbǐ shǎo de duō",
       "traceKey": "nengliang",
       "traceInfo": [
        {
         "c": "能",
         "py": "néng",
         "hv": "năng"
        },
        {
         "c": "量",
         "py": "liàng",
         "hv": "lượng"
        }
       ]
      },
      {
       "scene": "🔭🌟🧑",
       "full": "这位同事对天文的兴趣比我大一倍",
       "vi": "Hứng thú của đồng nghiệp này với thiên văn gấp đôi tôi",
       "parts": [
        {
         "t": "这位同事对天文的兴趣",
         "ico": "🔭",
         "c": "s",
         "py": "zhè wèi tóngshì duì tiānwén de xìngqù",
         "hv": "giá vị đồng sự đối thiên văn đích hứng thú"
        },
        {
         "t": "比我大",
         "ico": "🧑",
         "c": "v",
         "py": "bǐ wǒ dà",
         "hv": "tỷ ngã đại"
        },
        {
         "t": "一倍",
         "ico": "2️⃣",
         "c": "o",
         "py": "yī bèi",
         "hv": "nhất bội"
        }
       ],
       "traceWord": "天文",
       "py": "Zhè wèi tóngshì duì tiānwén de xìngqù bǐ wǒ dà yī bèi",
       "traceKey": "tianwen",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "🪑📐📏",
       "full": "这张桌子的长度比宽度多三十厘米",
       "vi": "Chiều dài của chiếc bàn này hơn chiều rộng ba mươi cm",
       "parts": [
        {
         "t": "这张桌子的长度",
         "ico": "🪑",
         "c": "s",
         "py": "zhè zhāng zhuōzi de chángdù",
         "hv": "giá trương trác tử đích trường độ"
        },
        {
         "t": "比宽度多",
         "ico": "📐",
         "c": "v",
         "py": "bǐ kuāndù duō",
         "hv": "tỷ khoan độ đa"
        },
        {
         "t": "三十厘米",
         "ico": "📏",
         "c": "o",
         "py": "sān shí límǐ",
         "hv": "tam thập li mễ"
        }
       ],
       "traceWord": "长度",
       "py": "Zhè zhāng zhuōzi de chángdù bǐ kuāndù duō sān shí límǐ",
       "traceKey": "changdu",
       "traceInfo": [
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "⛰️🏞️📏",
       "full": "这座山的高度比那个湖的深度多两千米",
       "vi": "Độ cao của ngọn núi này hơn độ sâu của hồ kia hai nghìn mét",
       "parts": [
        {
         "t": "这座山的高度",
         "ico": "⛰️",
         "c": "s",
         "py": "zhè zuò shān de gāodù",
         "hv": "giá tọa sơn đích cao độ"
        },
        {
         "t": "比那个湖的深度多",
         "ico": "🏞️",
         "c": "v",
         "py": "bǐ nà gè hú de shēndù duō",
         "hv": "tỷ na cá hồ đích thâm độ đa"
        },
        {
         "t": "两千米",
         "ico": "📏",
         "c": "o",
         "py": "liǎng qiān mǐ",
         "hv": "lưỡng thiên mễ"
        }
       ],
       "traceWord": "高度",
       "py": "Zhè zuò shān de gāodù bǐ nà gè hú de shēndù duō liǎng qiān mǐ",
       "traceKey": "gaodu",
       "traceInfo": [
        {
         "c": "高",
         "py": "gāo",
         "hv": "cao"
        },
        {
         "c": "度",
         "py": "dù",
         "hv": "độ"
        }
       ]
      },
      {
       "scene": "⚙️📳💪",
       "full": "机器振动的强度比以前大了一倍",
       "vi": "Cường độ rung của máy lớn gấp đôi so với trước",
       "parts": [
        {
         "t": "机器振动的强度",
         "ico": "⚙️",
         "c": "s",
         "py": "jīqì zhèndòng de qiángdù",
         "hv": "cơ khí chấn động đích cường độ"
        },
        {
         "t": "比以前大了",
         "ico": "📈",
         "c": "v",
         "py": "bǐ yǐqián dà le",
         "hv": "tỷ dĩ tiền đại liễu"
        },
        {
         "t": "一倍",
         "ico": "2️⃣",
         "c": "o",
         "py": "yī bèi",
         "hv": "nhất bội"
        }
       ],
       "traceWord": "强度",
       "py": "Jīqì zhèndòng de qiángdù bǐ yǐqián dà le yī bèi",
       "traceKey": "qiangdu",
       "traceInfo": [
        {
         "c": "强",
         "py": "qiáng",
         "hv": "cường"
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
       "q": "跟地球相比，月球上的物质多吗？",
       "qvi": "So với Trái Đất, vật chất trên Mặt Trăng có nhiều không?",
       "scene": "🌕🌍",
       "ans": "月球上的物质比地球少得多",
       "opts": [
        {
         "txt": "月球上的物质比地球多得多",
         "ico": "🌍",
         "py": "Yuèqiú shàng de wùzhì bǐ dìqiú duō de duō"
        },
        {
         "txt": "月球上的物质比地球少得多",
         "ico": "✅",
         "py": "Yuèqiú shàng de wùzhì bǐ dìqiú shǎo de duō"
        },
        {
         "txt": "月球上的物质跟地球一样多",
         "ico": "⚖️",
         "py": "Yuèqiú shàng de wùzhì gēn dìqiú yīyàng duō"
        }
       ],
       "qpy": "Gēn dìqiú xiāngbǐ yuèqiú shàng de wùzhì duō ma?"
      },
      {
       "q": "卫星为什么能脱离地球？",
       "qvi": "Vì sao vệ tinh có thể thoát khỏi Trái Đất?",
       "scene": "🛰️🚀",
       "ans": "因为它的速度够快",
       "opts": [
        {
         "txt": "因为它离月亮很近",
         "ico": "🌙",
         "py": "Yīnwèi tā lí yuèliang hěn jìn"
        },
        {
         "txt": "因为太空里没有水",
         "ico": "💧",
         "py": "Yīnwèi tàikōng lǐ méiyǒu shuǐ"
        },
        {
         "txt": "因为它的速度够快",
         "ico": "✅",
         "py": "Yīnwèi tā de sùdù gòu kuài"
        }
       ],
       "qpy": "Wèixīng wèi shénme néng tuōlí dìqiú?"
      },
      {
       "q": "从你家到公司，直线距离有多远？",
       "qvi": "Từ nhà bạn đến công ty, khoảng cách đường thẳng bao xa?",
       "scene": "🏠📏🏢",
       "ans": "直线距离大约五公里",
       "opts": [
        {
         "txt": "直线距离大约五公里",
         "ico": "✅",
         "py": "Zhíxiàn jùlí dàyuē wǔ gōnglǐ"
        },
        {
         "txt": "我昨天坐地铁去了",
         "ico": "🚇",
         "py": "Wǒ zuótiān zuò dìtiě qù le"
        },
        {
         "txt": "地铁站在公司旁边",
         "ico": "🚉",
         "py": "Dìtiězhàn zài gōngsī pángbiān"
        }
       ],
       "qpy": "Cóng nǐ jiā dào gōngsī zhíxiàn jùlí yǒu duō yuǎn?"
      },
      {
       "q": "这个盒子的长度比那个盒子多多少？",
       "qvi": "Chiều dài hộp này hơn hộp kia bao nhiêu?",
       "scene": "📦📏",
       "ans": "多十厘米",
       "opts": [
        {
         "txt": "早十分钟",
         "ico": "⏰",
         "py": "Zǎo shí fēnzhōng"
        },
        {
         "txt": "多十厘米",
         "ico": "✅",
         "py": "Duō shí límǐ"
        },
        {
         "txt": "我比他大三岁",
         "ico": "🎂",
         "py": "Wǒ bǐ tā dà sān suì"
        }
       ],
       "qpy": "Zhè gè hézi de chángdù bǐ nà gè hézi duō duōshao?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu so sánh số đo",
      "steps": [
       "<b>Bước 1:</b> Lấy hai vật trên bàn làm việc (hai cuốn sổ, hai chiếc hộp), dùng thước đo chiều dài và chiều rộng của từng vật rồi viết số ra giấy.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu so sánh có số lượng, ví dụ <i>\"这个盒子的长度比那个盒子多十厘米\"</i>, rồi thêm 1 câu dùng <i>\"跟……相比\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp bằng tiếng Trung, so sánh kích thước hai sản phẩm công ty và hỏi bạn ấy chọn cái nào."
      ]
     }
    },
    {
     "id": "5.15B",
     "name": "Bài 5.15B: Nhà hàng và ẩm thực",
     "grammar": {
      "formulas": [
       "🧑 我们 + ⚡ 或是 + 🍽️ 去餐馆 + ⚡ 或是 + 🍱 点盒饭",
       "🕒 中午 + 🧑 同事们 + ⚡ 或是 + 🍣 吃寿司 + ⚡ 或是 + 🍖 吃烤肉"
      ],
      "tip": "或是……，或是…… (huòshì…huòshì…, \"hoặc là… hoặc là…\") nêu hai khả năng, hai vế thường có cấu trúc giống nhau; đặt 或是 trước mỗi vế (có thể đứng sau chủ ngữ). Dùng trong câu trần thuật, không dùng 还是 (háishi) trong câu như vậy.",
      "vn_tip": "Người Việt hay dùng 还是 cho \"hoặc là…hoặc là…\" trong câu trần thuật, hoặc chỉ nói một 或是. Đúng: 我们或是去餐馆，或是点盒饭 (hai vế đều có 或是). 还是 chỉ dùng trong câu hỏi lựa chọn: 你去餐馆还是点盒饭？"
     },
     "chunks": [
      {
       "scene": "🕛👥🍱",
       "full": "中午同事们或是去餐馆或是点盒饭",
       "vi": "Buổi trưa đồng nghiệp hoặc là đi quán ăn hoặc là gọi cơm hộp",
       "parts": [
        {
         "t": "中午同事们",
         "ico": "👥",
         "c": "s",
         "py": "zhōngwǔ tóngshì men",
         "hv": "trung ngọ đồng sự môn"
        },
        {
         "t": "或是去餐馆",
         "ico": "🍽️",
         "c": "v",
         "py": "huòshì qù cānguǎn",
         "hv": "hoặc thị khứ xan quán"
        },
        {
         "t": "或是点盒饭",
         "ico": "🍱",
         "c": "o",
         "py": "huòshì diǎn héfàn",
         "hv": "hoặc thị điểm hạp phạn"
        }
       ],
       "traceWord": "餐馆",
       "py": "Zhōngwǔ tóngshì men huòshì qù cānguǎn huòshì diǎn héfàn",
       "traceKey": "canguan",
       "traceInfo": [
        {
         "c": "餐",
         "py": "cān",
         "hv": "xan"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "📅🍽️🦆",
       "full": "我们明天或是在餐厅吃烤鸭或是去餐馆吃烤肉",
       "vi": "Ngày mai chúng tôi hoặc ăn vịt quay ở nhà hàng hoặc ăn thịt nướng ở quán",
       "parts": [
        {
         "t": "我们明天",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen míngtiān",
         "hv": "ngã môn minh thiên"
        },
        {
         "t": "或是在餐厅吃烤鸭",
         "ico": "🦆",
         "c": "v",
         "py": "huòshì zài cāntīng chī kǎoyā",
         "hv": "hoặc thị tại xan sảnh cật khảo áp"
        },
        {
         "t": "或是去餐馆吃烤肉",
         "ico": "🍖",
         "c": "o",
         "py": "huòshì qù cānguǎn chī kǎoròu",
         "hv": "hoặc thị khứ xan quán cật khảo nhục"
        }
       ],
       "traceWord": "烤鸭",
       "py": "Wǒmen míngtiān huòshì zài cāntīng chī kǎoyā huòshì qù cānguǎn chī kǎoròu",
       "traceKey": "kaoya",
       "traceInfo": [
        {
         "c": "烤",
         "py": "kǎo",
         "hv": "khảo"
        },
        {
         "c": "鸭",
         "py": "yā",
         "hv": "áp"
        }
       ]
      },
      {
       "scene": "🏢🥤😋",
       "full": "这家餐饮公司卖的饮料或是甜的或是酸的",
       "vi": "Đồ uống công ty ăn uống này bán hoặc ngọt hoặc chua",
       "parts": [
        {
         "t": "这家餐饮公司卖的饮料",
         "ico": "🥤",
         "c": "s",
         "py": "zhè jiā cānyǐn gōngsī mài de yǐnliào",
         "hv": "giá gia xan ẩm công ti mại đích ẩm liệu"
        },
        {
         "t": "或是甜的",
         "ico": "🍬",
         "c": "v",
         "py": "huòshì tián de",
         "hv": "hoặc thị điềm đích"
        },
        {
         "t": "或是酸的",
         "ico": "🍋",
         "c": "o",
         "py": "huòshì suān de",
         "hv": "hoặc thị toan đích"
        }
       ],
       "traceWord": "饮料",
       "py": "Zhè jiā cānyǐn gōngsī mài de yǐnliào huòshì tián de huòshì suān de",
       "traceKey": "yinliao",
       "traceInfo": [
        {
         "c": "饮",
         "py": "yǐn",
         "hv": "ẩm"
        },
        {
         "c": "料",
         "py": "liào",
         "hv": "liệu"
        }
       ]
      },
      {
       "scene": "🌙🍶🍷",
       "full": "晚饭时他或是喝白酒或是喝葡萄酒",
       "vi": "Bữa tối anh ấy hoặc uống rượu trắng hoặc uống rượu vang",
       "parts": [
        {
         "t": "晚饭时他",
         "ico": "🌙",
         "c": "s",
         "py": "wǎnfàn shí tā",
         "hv": "vãn phạn thời tha"
        },
        {
         "t": "或是喝白酒",
         "ico": "🍶",
         "c": "v",
         "py": "huòshì hē báijiǔ",
         "hv": "hoặc thị hát bạch tửu"
        },
        {
         "t": "或是喝葡萄酒",
         "ico": "🍷",
         "c": "o",
         "py": "huòshì hē pútaojiǔ",
         "hv": "hoặc thị hát bồ đào tửu"
        }
       ],
       "traceWord": "白酒",
       "py": "Wǎnfàn shí tā huòshì hē báijiǔ huòshì hē pútaojiǔ",
       "traceKey": "baijiu",
       "traceInfo": [
        {
         "c": "白",
         "py": "bái",
         "hv": "bạch"
        },
        {
         "c": "酒",
         "py": "jiǔ",
         "hv": "tửu"
        }
       ]
      },
      {
       "scene": "🆕🍣🦆",
       "full": "第一次来的客人或是尝尝寿司或是尝尝烤鸭",
       "vi": "Khách đến lần đầu hoặc nếm sushi hoặc nếm vịt quay",
       "parts": [
        {
         "t": "第一次来的客人",
         "ico": "🆕",
         "c": "s",
         "py": "dì yī cì lái de kèrén",
         "hv": "đệ nhất thứ lai đích khách nhân"
        },
        {
         "t": "或是尝尝寿司",
         "ico": "🍣",
         "c": "v",
         "py": "huòshì cháng cháng shòusī",
         "hv": "hoặc thị thường thường thọ ti"
        },
        {
         "t": "或是尝尝烤鸭",
         "ico": "🦆",
         "c": "o",
         "py": "huòshì cháng cháng kǎoyā",
         "hv": "hoặc thị thường thường khảo áp"
        }
       ],
       "traceWord": "寿司",
       "py": "Dì yī cì lái de kèrén huòshì cháng cháng shòusī huòshì cháng cháng kǎoyā",
       "traceKey": "shousi",
       "traceInfo": [
        {
         "c": "寿",
         "py": "shòu",
         "hv": "thọ"
        },
        {
         "c": "司",
         "py": "sī",
         "hv": "ti"
        }
       ]
      },
      {
       "scene": "🍴🥢🍝",
       "full": "吃西餐时人们或是用叉子或是用筷子",
       "vi": "Khi ăn món Tây, người ta hoặc dùng nĩa hoặc dùng đũa",
       "parts": [
        {
         "t": "吃西餐时人们",
         "ico": "🍽️",
         "c": "s",
         "py": "chī xīcān shí rénmen",
         "hv": "cật tây xan thời nhân môn"
        },
        {
         "t": "或是用叉子",
         "ico": "🍴",
         "c": "v",
         "py": "huòshì yòng chāzi",
         "hv": "hoặc thị dụng xoa tử"
        },
        {
         "t": "或是用筷子",
         "ico": "🥢",
         "c": "o",
         "py": "huòshì yòng kuàizi",
         "hv": "hoặc thị dụng khoái tử"
        }
       ],
       "traceWord": "叉子",
       "py": "Chī xīcān shí rénmen huòshì yòng chāzi huòshì yòng kuàizi",
       "traceKey": "chazi",
       "traceInfo": [
        {
         "c": "叉",
         "py": "chā",
         "hv": "xoa"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "💬😊😣",
       "full": "我们或是谈生活的酸甜苦辣或是谈工作的事情",
       "vi": "Chúng tôi hoặc nói về ngọt bùi cay đắng của cuộc sống hoặc nói chuyện công việc",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "或是谈生活的酸甜苦辣",
         "ico": "😊",
         "c": "v",
         "py": "huòshì tán shēnghuó de suān-tián-kǔ-là",
         "hv": "hoặc thị đàm sinh hoạt đích toan điềm khổ lạt"
        },
        {
         "t": "或是谈工作的事情",
         "ico": "💼",
         "c": "o",
         "py": "huòshì tán gōngzuò de shìqing",
         "hv": "hoặc thị đàm công tác đích sự tình"
        }
       ],
       "traceWord": "酸甜苦辣",
       "py": "Wǒmen huòshì tán shēnghuó de suān-tián-kǔ-là huòshì tán gōngzuò de shìqing",
       "traceKey": "suantiankula",
       "traceInfo": [
        {
         "c": "酸",
         "py": "suān",
         "hv": "toan"
        },
        {
         "c": "甜",
         "py": "tián",
         "hv": "điềm"
        },
        {
         "c": "苦",
         "py": "kǔ",
         "hv": "khổ"
        },
        {
         "c": "辣",
         "py": "là",
         "hv": "lạt"
        }
       ]
      },
      {
       "scene": "🏠🔪🍴",
       "full": "小明在厨房里或是洗菜或是用叉子叉肉",
       "vi": "Xiaoming trong bếp hoặc rửa rau hoặc dùng nĩa xiên thịt",
       "parts": [
        {
         "t": "小明在厨房里",
         "ico": "🏠",
         "c": "s",
         "py": "Xiǎomíng zài chúfáng lǐ",
         "hv": "tiểu minh tại trù phòng lý"
        },
        {
         "t": "或是洗菜",
         "ico": "🥬",
         "c": "v",
         "py": "huòshì xǐ cài",
         "hv": "hoặc thị tẩy thái"
        },
        {
         "t": "或是用叉子叉肉",
         "ico": "🍴",
         "c": "o",
         "py": "huòshì yòng chāzi chā ròu",
         "hv": "hoặc thị dụng xoa tử xoa nhục"
        }
       ],
       "traceWord": "厨房",
       "py": "Xiǎomíng zài chúfáng lǐ huòshì xǐ cài huòshì yòng chāzi chā ròu",
       "traceKey": "chufang",
       "traceInfo": [
        {
         "c": "厨",
         "py": "chú",
         "hv": "trù"
        },
        {
         "c": "房",
         "py": "fáng",
         "hv": "phòng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你平时的饮食怎么样？",
       "qvi": "Chế độ ăn uống thường ngày của bạn thế nào?",
       "scene": "🍱🍜",
       "ans": "我或是吃盒饭或是吃面条儿",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "我的厨房很大",
         "ico": "🏠",
         "py": "Wǒ de chúfáng hěn dà"
        },
        {
         "txt": "我或是吃盒饭或是吃面条儿",
         "ico": "✅",
         "py": "Wǒ huòshì chī héfàn huòshì chī miàntiáor"
        }
       ],
       "qpy": "Nǐ píngshí de yǐnshí zěnmeyàng?"
      },
      {
       "q": "晚上去哪儿吃饭？",
       "qvi": "Tối đi đâu ăn cơm?",
       "scene": "🌙🍽️",
       "ans": "或是吃寿司或是吃烤肉",
       "opts": [
        {
         "txt": "我在厨房里洗菜",
         "ico": "🥬",
         "py": "Wǒ zài chúfáng lǐ xǐ cài"
        },
        {
         "txt": "或是吃寿司或是吃烤肉",
         "ico": "✅",
         "py": "Huòshì chī shòusī huòshì chī kǎoròu"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Wǎn shàngqù nǎr chīfàn?"
      },
      {
       "q": "你想喝什么饮料？",
       "qvi": "Bạn muốn uống đồ uống gì?",
       "scene": "🥤❓",
       "ans": "或是喝茶或是喝果汁",
       "opts": [
        {
         "txt": "或是喝茶或是喝果汁",
         "ico": "✅",
         "py": "Huòshì hē chá huòshì hē guǒzhī"
        },
        {
         "txt": "我想吃盒饭",
         "ico": "🍱",
         "py": "Wǒ xiǎng chī héfàn"
        },
        {
         "txt": "我不会用叉子",
         "ico": "🍴",
         "py": "Wǒ bú huì yòng chāzi"
        }
       ],
       "qpy": "Nǐ xiǎng hē shénme yǐnliào?"
      },
      {
       "q": "你们公司午饭怎么解决？",
       "qvi": "Công ty bạn giải quyết bữa trưa thế nào?",
       "scene": "🏢🍱",
       "ans": "同事们或是叫外卖或是去餐厅",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "🏙️",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "同事们或是叫外卖或是去餐厅",
         "ico": "✅",
         "py": "Tóngshì men huòshì jiào wàimài huòshì qù cāntīng"
        },
        {
         "txt": "老板今天不在",
         "ico": "🙅",
         "py": "Lǎobǎn jīntiān bú zài"
        }
       ],
       "qpy": "Nǐmen gōngsī wǔfàn zěnme jiějué?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hẹn bữa trưa với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nghĩ ra hai phương án ăn trưa hôm nay (quán ăn, cơm hộp, gọi đồ ăn…) và viết ra giấy.",
       "<b>Bước 2:</b> Nói thành tiếng cho đồng nghiệp, ví dụ <i>\"中午我们或是去餐馆，或是点盒饭\"</i>, rồi tự đặt thêm 2 câu về món ăn, đồ uống.",
       "<b>Bước 3:</b> Nhắn tin vào nhóm chat công việc bằng tiếng Trung để hỏi mọi người chọn phương án nào, chốt giờ gặp."
      ]
     }
    },
    {
     "id": "5.15C",
     "name": "Bài 5.15C: Ý chí và bản lĩnh",
     "grammar": {
      "formulas": [
       "⚠️ 尽管 + 😓 工作很艰苦",
       "🔄 但是 + 💪 他的信念非常坚定"
      ],
      "tip": "尽管……，但是…… (jǐnguǎn…dànshì…, \"mặc dù… nhưng…\") nối hai vế: vế đầu nêu khó khăn hay sự thật, vế sau nêu kết quả trái với mong đợi. 尽管 đứng đầu vế trước, 但是 mở vế sau.",
      "vn_tip": "Người Việt hay bỏ 但是 (vì tiếng Việt có thể chỉ nói \"mặc dù… vẫn…\"), hoặc dùng cả 虽然 và 尽管 một lúc. Đúng: 尽管工作很艰苦，但是他的信念非常坚定. Có thể thêm 还是/仍然 ở vế sau, nhưng không dùng 因为."
     },
     "chunks": [
      {
       "scene": "💼😓💪",
       "full": "尽管工作很艰苦但是他的信念非常坚定",
       "vi": "Mặc dù công việc rất gian khổ nhưng niềm tin của anh ấy rất vững",
       "parts": [
        {
         "t": "尽管工作很艰苦",
         "ico": "💼",
         "c": "s",
         "py": "jǐnguǎn gōngzuò hěn jiānkǔ",
         "hv": "tẫn quản công tác ngận gian khổ"
        },
        {
         "t": "但是他的信念",
         "ico": "💭",
         "c": "v",
         "py": "dànshì tā de xìnniàn",
         "hv": "đãn thị tha đích tín niệm"
        },
        {
         "t": "非常坚定",
         "ico": "💪",
         "c": "o",
         "py": "fēicháng jiāndìng",
         "hv": "phi thường kiên định"
        }
       ],
       "traceWord": "信念",
       "py": "Jǐnguǎn gōngzuò hěn jiānkǔ dànshì tā de xìnniàn fēicháng jiāndìng",
       "traceKey": "xinnian",
       "traceInfo": [
        {
         "c": "信",
         "py": "xìn",
         "hv": "tín"
        },
        {
         "c": "念",
         "py": "niàn",
         "hv": "niệm"
        }
       ]
      },
      {
       "scene": "🛣️👥🔥",
       "full": "尽管道路很艰难但是大家的意志从来没有动摇",
       "vi": "Mặc dù đường đi gian nan nhưng ý chí của mọi người chưa từng lung lay",
       "parts": [
        {
         "t": "尽管道路很艰难",
         "ico": "🛣️",
         "c": "s",
         "py": "jǐnguǎn dàolù hěn jiānnán",
         "hv": "tẫn quản đạo lộ ngận gian nan"
        },
        {
         "t": "但是大家的意志",
         "ico": "👥",
         "c": "v",
         "py": "dànshì dàjiā de yìzhì",
         "hv": "đãn thị đại gia đích ý chí"
        },
        {
         "t": "从来没有动摇",
         "ico": "🔥",
         "c": "o",
         "py": "cónglái méiyǒu dòngyáo",
         "hv": "tòng lai một hữu động dao"
        }
       ],
       "traceWord": "意志",
       "py": "Jǐnguǎn dàolù hěn jiānnán dànshì dàjiā de yìzhì cónglái méiyǒu dòngyáo",
       "traceKey": "yizhi",
       "traceInfo": [
        {
         "c": "意",
         "py": "yì",
         "hv": "ý"
        },
        {
         "c": "志",
         "py": "zhì",
         "hv": "chí"
        }
       ]
      },
      {
       "scene": "📉😊🙂",
       "full": "尽管结果不好但是他的心态一点儿也不消极",
       "vi": "Mặc dù kết quả không tốt nhưng tâm thái của anh ấy không hề tiêu cực",
       "parts": [
        {
         "t": "尽管结果不好",
         "ico": "📉",
         "c": "s",
         "py": "jǐnguǎn jiéguǒ bù hǎo",
         "hv": "tẫn quản kết quả bất hảo"
        },
        {
         "t": "但是他的心态",
         "ico": "🙂",
         "c": "v",
         "py": "dànshì tā de xīntài",
         "hv": "đãn thị tha đích tâm thái"
        },
        {
         "t": "一点儿也不消极",
         "ico": "☀️",
         "c": "o",
         "py": "yīdiǎnr yě bù xiāojí",
         "hv": "nhất điểm nhi dã bất tiêu cực"
        }
       ],
       "traceWord": "心态",
       "py": "Jǐnguǎn jiéguǒ bù hǎo dànshì tā de xīntài yīdiǎnr yě bù xiāojí",
       "traceKey": "xintai",
       "traceInfo": [
        {
         "c": "心",
         "py": "xīn",
         "hv": "tâm"
        },
        {
         "c": "态",
         "py": "tài",
         "hv": "thái"
        }
       ]
      },
      {
       "scene": "🛡️📘🧑",
       "full": "尽管他的安全意识比较薄弱但是他愿意学习",
       "vi": "Mặc dù ý thức an toàn của anh ấy còn yếu nhưng anh ấy sẵn lòng học",
       "parts": [
        {
         "t": "尽管他的安全意识",
         "ico": "🛡️",
         "c": "s",
         "py": "jǐnguǎn tā de ānquán yìshí",
         "hv": "tẫn quản tha đích an toàn ý thức"
        },
        {
         "t": "比较薄弱但是",
         "ico": "⚠️",
         "c": "v",
         "py": "bǐjiào bóruò dànshì",
         "hv": "tỷ giảo bạc nhược đãn thị"
        },
        {
         "t": "他愿意学习",
         "ico": "📘",
         "c": "o",
         "py": "tā yuànyì xuéxí",
         "hv": "tha nguyện ý học tập"
        }
       ],
       "traceWord": "薄弱",
       "py": "Jǐnguǎn tā de ānquán yìshí bǐjiào bóruò dànshì tā yuànyì xuéxí",
       "traceKey": "boruo",
       "traceInfo": [
        {
         "c": "薄",
         "py": "bó",
         "hv": "bạc"
        },
        {
         "c": "弱",
         "py": "ruò",
         "hv": "nhược"
        }
       ]
      },
      {
       "scene": "🏢🌙✋",
       "full": "尽管公司对我的期望很高但是加班是自愿的",
       "vi": "Mặc dù công ty kỳ vọng ở tôi rất cao nhưng làm thêm giờ là tự nguyện",
       "parts": [
        {
         "t": "尽管公司对我的期望",
         "ico": "🏢",
         "c": "s",
         "py": "jǐnguǎn gōngsī duì wǒ de qīwàng",
         "hv": "tẫn quản công ti đối ngã đích kỳ vọng"
        },
        {
         "t": "很高但是",
         "ico": "⬆️",
         "c": "v",
         "py": "hěn gāo dànshì",
         "hv": "ngận cao đãn thị"
        },
        {
         "t": "加班是自愿的",
         "ico": "✋",
         "c": "o",
         "py": "jiābān shì zìyuàn de",
         "hv": "gia ban thị tự nguyện đích"
        }
       ],
       "traceWord": "期望",
       "py": "Jǐnguǎn gōngsī duì wǒ de qīwàng hěn gāo dànshì jiābān shì zìyuàn de",
       "traceKey": "qiwang",
       "traceInfo": [
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        },
        {
         "c": "望",
         "py": "wàng",
         "hv": "vọng"
        }
       ]
      },
      {
       "scene": "💰🏷️🎯",
       "full": "尽管小李对价格很敏感但是他更重视产品内在的质量",
       "vi": "Mặc dù Tiểu Lý rất nhạy cảm với giá nhưng anh ấy coi trọng chất lượng bên trong sản phẩm",
       "parts": [
        {
         "t": "尽管小李对价格",
         "ico": "💰",
         "c": "s",
         "py": "jǐnguǎn Xiǎolǐ duì jiàgé",
         "hv": "tẫn quản tiểu lý đối giá cách"
        },
        {
         "t": "很敏感但是他更",
         "ico": "🏷️",
         "c": "v",
         "py": "hěn mǐngǎn dànshì tā gèng",
         "hv": "ngận mẫn cảm đãn thị tha cánh"
        },
        {
         "t": "重视产品内在的质量",
         "ico": "✅",
         "c": "o",
         "py": "zhòngshì chǎnpǐn nèizài de zhìliàng",
         "hv": "trọng thị sản phẩm nội tại đích chất lượng"
        }
       ],
       "traceWord": "敏感",
       "py": "Jǐnguǎn Xiǎolǐ duì jiàgé hěn mǐngǎn dànshì tā gèng zhòngshì chǎnpǐn nèizài de zhìliàng",
       "traceKey": "mingan",
       "traceInfo": [
        {
         "c": "敏",
         "py": "mǐn",
         "hv": "mẫn"
        },
        {
         "c": "感",
         "py": "gǎn",
         "hv": "cảm"
        }
       ]
      },
      {
       "scene": "💭🙅‍♂️⏳",
       "full": "尽管这个看法比较主观但是我们不能被动地等待",
       "vi": "Mặc dù quan điểm này khá chủ quan nhưng chúng ta không thể bị động chờ đợi",
       "parts": [
        {
         "t": "尽管这个看法比较主观",
         "ico": "💭",
         "c": "s",
         "py": "jǐnguǎn zhè gè kànfǎ bǐjiào zhǔguān",
         "hv": "tẫn quản giá cá khán pháp tỷ giảo chủ quan"
        },
        {
         "t": "但是我们",
         "ico": "👥",
         "c": "v",
         "py": "dànshì wǒmen",
         "hv": "đãn thị ngã môn"
        },
        {
         "t": "不能被动地等待",
         "ico": "⏳",
         "c": "o",
         "py": "bù néng bèidòng de děngdài",
         "hv": "bất năng bị động địa đẳng đãi"
        }
       ],
       "traceWord": "主观",
       "py": "Jǐnguǎn zhè gè kànfǎ bǐjiào zhǔguān dànshì wǒmen bù néng bèidòng de děngdài",
       "traceKey": "zhuguan",
       "traceInfo": [
        {
         "c": "主",
         "py": "zhǔ",
         "hv": "chủ"
        },
        {
         "c": "观",
         "py": "guān",
         "hv": "quan"
        }
       ]
      },
      {
       "scene": "🏃🛣️😤",
       "full": "尽管路很远但是我愿意坚持每天跑步",
       "vi": "Mặc dù đường rất xa nhưng tôi sẵn lòng kiên trì chạy bộ mỗi ngày",
       "parts": [
        {
         "t": "尽管路很远",
         "ico": "🛣️",
         "c": "s",
         "py": "jǐnguǎn lù hěn yuǎn",
         "hv": "tẫn quản lộ ngận viễn"
        },
        {
         "t": "但是我愿意",
         "ico": "🙋",
         "c": "v",
         "py": "dànshì wǒ yuànyì",
         "hv": "đãn thị ngã nguyện ý"
        },
        {
         "t": "坚持每天跑步",
         "ico": "🏃",
         "c": "o",
         "py": "jiānchí měi tiān pǎobù",
         "hv": "kiên trì mỗi thiên bào bộ"
        }
       ],
       "traceWord": "愿",
       "py": "Jǐnguǎn lù hěn yuǎn dànshì wǒ yuànyì jiānchí měi tiān pǎobù",
       "traceKey": "yuan",
       "traceInfo": [
        {
         "c": "愿",
         "py": "yuàn",
         "hv": "nguyện"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "工作这么艰苦，你为什么还不放弃？",
       "qvi": "Công việc vất vả thế, sao bạn vẫn không bỏ cuộc?",
       "scene": "💼💪",
       "ans": "尽管很艰苦，但是我的信念很坚定",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "尽管很艰苦，但是我的信念很坚定",
         "ico": "✅",
         "py": "Jǐnguǎn hěn jiānkǔ dànshì wǒ de xìnniàn hěn jiāndìng"
        },
        {
         "txt": "我不喜欢吃烤鸭",
         "ico": "🦆",
         "py": "Wǒ bù xǐhuan chī kǎoyā"
        }
       ],
       "qpy": "Gōngzuò zhème jiānkǔ nǐ wèi shénme hái bú fàngqì?"
      },
      {
       "q": "你对这个项目的期望高吗？",
       "qvi": "Bạn kỳ vọng vào dự án này cao không?",
       "scene": "📊🎯",
       "ans": "尽管有困难，但是我的期望还是很高",
       "opts": [
        {
         "txt": "尽管有困难，但是我的期望还是很高",
         "ico": "✅",
         "py": "Jǐnguǎn yǒu kùnnan dànshì wǒ de qīwàng háishi hěn gāo"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "这个办公室很大",
         "ico": "🏢",
         "py": "Zhè gè bàngōngshì hěn dà"
        }
       ],
       "qpy": "Nǐ duì zhè gè xiàng mùdì qīwàng gāo ma?"
      },
      {
       "q": "他是自愿加班的吗？",
       "qvi": "Anh ấy tăng ca là tự nguyện à?",
       "scene": "🌙💼",
       "ans": "是的，尽管很累，但是他是自愿的",
       "opts": [
        {
         "txt": "不是，他在厨房里",
         "ico": "🏠",
         "py": "Bú shì tā zài chúfáng lǐ"
        },
        {
         "txt": "是的，他明天去北京",
         "ico": "✈️",
         "py": "Shì de tā míngtiān qù Běijīng"
        },
        {
         "txt": "是的，尽管很累，但是他是自愿的",
         "ico": "✅",
         "py": "Shì de jǐnguǎn hěn lèi dànshì tā shì zìyuàn de"
        }
       ],
       "qpy": "Tā shì zìyuàn jiābān de ma?"
      },
      {
       "q": "你觉得他的心态怎么样？",
       "qvi": "Bạn thấy tâm thái của anh ấy thế nào?",
       "scene": "🙂❓",
       "ans": "尽管遇到困难，但是他一点儿也不消极",
       "opts": [
        {
         "txt": "愿大家都平安",
         "ico": "🙏",
         "py": "Yuàn dàjiā dōu píng'ān"
        },
        {
         "txt": "尽管遇到困难，但是他一点儿也不消极",
         "ico": "✅",
         "py": "Jǐnguǎn yùdào kùnnan dànshì tā yīdiǎnr yě bù xiāojí"
        },
        {
         "txt": "他的房间在楼上",
         "ico": "🏠",
         "py": "Tā de fángjiān zài lóu shàng"
        }
       ],
       "qpy": "Nǐ juéde tā de xīntài zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Động viên đồng nghiệp gặp khó khăn",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một khó khăn bạn từng gặp trong công việc và viết ra giấy 2 từ khóa tiếng Trung đã học.",
       "<b>Bước 2:</b> Nói thành tiếng 3 câu, ví dụ <i>\"尽管工作很艰苦，但是他的信念非常坚定\"</i>, thay nội dung bằng chuyện của bạn.",
       "<b>Bước 3:</b> Nhắn tin tiếng Trung động viên một đồng nghiệp đang áp lực bằng ít nhất một câu <i>\"尽管……，但是……\"</i>."
      ]
     }
    }
   ]
  },
  "5.16": {
   "lessons": [
    {
     "id": "5.16A",
     "name": "Bài 5.16A: Xây dựng và bảo trì",
     "grammar": {
      "formulas": [
       "⚡ 一旦 + 🔍 发现漏洞 + ✅ 就 + 🔧 马上修复",
       "🏗️ 一旦 + 🧱 建筑修建完成 + ✅ 就 + 🚚 搬进去",
       "❓ 一旦 + ⚠️ 出问题 + ✅ 就 + 🤔 怎么办？"
      ],
      "tip": "Mẫu 一旦……，就……(yídàn…jiù…, nhất đán) nghĩa là \"một khi… thì… ngay\". Vế đầu nêu điều kiện hay sự việc xảy ra, vế sau (có 就) nêu kết quả hoặc việc phải làm ngay. Chủ ngữ của vế sau đứng trước 就.",
      "vn_tip": "Người Việt hay dịch \"một khi\" thành 一次 hoặc bỏ mất 就 ở vế sau. Đúng: 一旦发现问题，就要马上处理. Không nói 一旦发现问题，要马上处理 (thiếu 就) và đừng đặt 就 trước 一旦."
     },
     "chunks": [
      {
       "scene": "🔍⚠️🔧",
       "full": "一旦发现漏洞就要马上修复",
       "vi": "Một khi phát hiện lỗ hổng thì phải sửa chữa ngay",
       "parts": [
        {
         "t": "一旦发现漏洞",
         "ico": "🔍",
         "c": "s",
         "py": "yīdàn fāxiàn lòudòng",
         "hv": "nhất đán phát hiện lậu động"
        },
        {
         "t": "就要",
         "ico": "⚡",
         "c": "v",
         "py": "jiùyào",
         "hv": "tựu yếu"
        },
        {
         "t": "马上修复",
         "ico": "🔧",
         "c": "o",
         "py": "mǎshàng xiūfù",
         "hv": "mã thượng tu phục"
        }
       ],
       "traceWord": "修复",
       "py": "Yīdàn fāxiàn lòudòng jiùyào mǎshàng xiūfù",
       "traceKey": "xiufu",
       "traceInfo": [
        {
         "c": "修",
         "py": "xiū",
         "hv": "tu"
        },
        {
         "c": "复",
         "py": "fù",
         "hv": "phục"
        }
       ]
      },
      {
       "scene": "🏠💧🛠️",
       "full": "一旦屋子漏了就要找人来修理",
       "vi": "Một khi nhà bị dột thì phải tìm người đến sửa",
       "parts": [
        {
         "t": "一旦屋子",
         "ico": "🏠",
         "c": "s",
         "py": "yīdàn wūzi",
         "hv": "nhất đán ốc tử"
        },
        {
         "t": "漏了",
         "ico": "💧",
         "c": "v",
         "py": "lòu le",
         "hv": "lậu liễu"
        },
        {
         "t": "就要找人来修理",
         "ico": "🛠️",
         "c": "o",
         "py": "jiùyào zhǎo rén lái xiūlǐ",
         "hv": "tựu yếu trảo nhân lai tu lý"
        }
       ],
       "traceWord": "漏",
       "py": "Yīdàn wūzi lòu le jiùyào zhǎo rén lái xiūlǐ",
       "traceKey": "lou",
       "traceInfo": [
        {
         "c": "漏",
         "py": "lòu",
         "hv": "lậu"
        }
       ]
      },
      {
       "scene": "🏚️🔨🏢",
       "full": "一旦旧楼被拆除就会建造新的大楼",
       "vi": "Một khi toà nhà cũ bị phá bỏ thì sẽ xây toà nhà mới",
       "parts": [
        {
         "t": "一旦旧楼",
         "ico": "🏚️",
         "c": "s",
         "py": "yīdàn jiù lóu",
         "hv": "nhất đán cựu lâu"
        },
        {
         "t": "被拆除",
         "ico": "🔨",
         "c": "v",
         "py": "bèi chāichú",
         "hv": "bị sách trừ"
        },
        {
         "t": "就会建造新的大楼",
         "ico": "🏢",
         "c": "o",
         "py": "jiù huì jiànzào xīn de dà lóu",
         "hv": "tựu hội kiến tạo tân đích đại lâu"
        }
       ],
       "traceWord": "拆除",
       "py": "Yīdàn jiù lóu bèi chāichú jiù huì jiànzào xīn de dà lóu",
       "traceKey": "chaichu",
       "traceInfo": [
        {
         "c": "拆",
         "py": "chāi",
         "hv": "sách"
        },
        {
         "c": "除",
         "py": "chú",
         "hv": "trừ"
        }
       ]
      },
      {
       "scene": "💻🔌🔧",
       "full": "一旦电脑没连接好就别插电源",
       "vi": "Một khi máy tính chưa kết nối tốt thì đừng cắm nguồn điện",
       "parts": [
        {
         "t": "一旦电脑",
         "ico": "💻",
         "c": "s",
         "py": "yīdàn diànnǎo",
         "hv": "nhất đán điện não"
        },
        {
         "t": "没连接好",
         "ico": "🔗",
         "c": "v",
         "py": "méi liánjiē hǎo",
         "hv": "một liên tiếp hảo"
        },
        {
         "t": "就别插电源",
         "ico": "🔌",
         "c": "o",
         "py": "jiù bié chā diànyuán",
         "hv": "tựu biệt sáp điện nguyên"
        }
       ],
       "traceWord": "连接",
       "py": "Yīdàn diànnǎo méi liánjiē hǎo jiù bié chā diànyuán",
       "traceKey": "lianjie",
       "traceInfo": [
        {
         "c": "连",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "接",
         "py": "jiē",
         "hv": "tiếp"
        }
       ]
      },
      {
       "scene": "🥛♨️⏰",
       "full": "一旦你把牛奶加热就要马上喝完",
       "vi": "Một khi bạn đã hâm nóng sữa thì phải uống hết ngay",
       "parts": [
        {
         "t": "一旦你",
         "ico": "🧑",
         "c": "s",
         "py": "yīdàn nǐ",
         "hv": "nhất đán nễ"
        },
        {
         "t": "把牛奶加热",
         "ico": "♨️",
         "c": "v",
         "py": "bǎ niúnǎi jiārè",
         "hv": "bả ngưu nãi gia nhiệt"
        },
        {
         "t": "就要马上喝完",
         "ico": "🥛",
         "c": "o",
         "py": "jiùyào mǎshàng hē wán",
         "hv": "tựu yếu mã thượng hát hoàn"
        }
       ],
       "traceWord": "加热",
       "py": "Yīdàn nǐ bǎ niúnǎi jiārè jiùyào mǎshàng hē wán",
       "traceKey": "jiare",
       "traceInfo": [
        {
         "c": "加",
         "py": "jiā",
         "hv": "gia"
        },
        {
         "c": "热",
         "py": "rè",
         "hv": "nhiệt"
        }
       ]
      },
      {
       "scene": "🏘️🔨😢",
       "full": "一旦北京的老胡同儿都拆了就看不到了",
       "vi": "Một khi các ngõ hẻm cũ ở Bắc Kinh bị phá hết thì sẽ không còn thấy được nữa",
       "parts": [
        {
         "t": "一旦北京的老胡同儿",
         "ico": "🏘️",
         "c": "s",
         "py": "yīdàn Běijīng de lǎo hútòngr",
         "hv": "nhất đán bắc kinh đích lão hồ đồng nhi"
        },
        {
         "t": "都拆了",
         "ico": "🔨",
         "c": "v",
         "py": "dōu chāi le",
         "hv": "đô sách liễu"
        },
        {
         "t": "就看不到了",
         "ico": "👀",
         "c": "o",
         "py": "jiù kàn bú dào le",
         "hv": "tựu khán bất đáo liễu"
        }
       ],
       "traceWord": "胡同儿",
       "py": "Yīdàn Běijīng de lǎo hútòngr dōu chāi le jiù kàn bú dào le",
       "traceKey": "hutongr",
       "traceInfo": [
        {
         "c": "胡",
         "py": "hú",
         "hv": "hồ"
        },
        {
         "c": "同",
         "py": "tòng",
         "hv": "đồng"
        },
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        }
       ]
      },
      {
       "scene": "📚🗄️🧹",
       "full": "一旦图书馆的书库满了就要清理旧书",
       "vi": "Một khi kho sách của thư viện đầy thì phải dọn bớt sách cũ",
       "parts": [
        {
         "t": "一旦图书馆的书库",
         "ico": "📚",
         "c": "s",
         "py": "yīdàn túshūguǎn de shū kù",
         "hv": "nhất đán đồ thư quán đích thư khố"
        },
        {
         "t": "满了",
         "ico": "📦",
         "c": "v",
         "py": "mǎn le",
         "hv": "mãn liễu"
        },
        {
         "t": "就要清理旧书",
         "ico": "🧹",
         "c": "o",
         "py": "jiùyào qīnglǐ jiù shū",
         "hv": "tựu yếu thanh lý cựu thư"
        }
       ],
       "traceWord": "清理",
       "py": "Yīdàn túshūguǎn de shū kù mǎn le jiùyào qīnglǐ jiù shū",
       "traceKey": "qingli",
       "traceInfo": [
        {
         "c": "清",
         "py": "qīng",
         "hv": "thanh"
        },
        {
         "c": "理",
         "py": "lǐ",
         "hv": "lý"
        }
       ]
      },
      {
       "scene": "🏗️🧹🚚",
       "full": "一旦这座新建筑修建完成就要先收拾好办公室再搬家",
       "vi": "Một khi toà nhà mới xây xong thì phải dọn dẹp văn phòng trước rồi mới chuyển đi",
       "parts": [
        {
         "t": "一旦这座新建筑",
         "ico": "🏢",
         "c": "s",
         "py": "yīdàn zhè zuò xīn jiànzhù",
         "hv": "nhất đán giá tọa tân kiến trúc"
        },
        {
         "t": "修建完成",
         "ico": "🏗️",
         "c": "v",
         "py": "xiūjiàn wánchéng",
         "hv": "tu kiến hoàn thành"
        },
        {
         "t": "就要先收拾好办公室再搬家",
         "ico": "🧹",
         "c": "o",
         "py": "jiùyào xiān shōushi hǎo bàngōngshì zài bānjiā",
         "hv": "tựu yếu tiên thu thập hảo biện công thất tái ban gia"
        }
       ],
       "traceWord": "修建",
       "py": "Yīdàn zhè zuò xīn jiànzhù xiūjiàn wánchéng jiùyào xiān shōushi hǎo bàngōngshì zài bānjiā",
       "traceKey": "xiujian",
       "traceInfo": [
        {
         "c": "修",
         "py": "xiū",
         "hv": "tu"
        },
        {
         "c": "建",
         "py": "jiàn",
         "hv": "kiến"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "电池一旦坏了，你会怎么做？",
       "qvi": "Một khi pin hỏng, bạn sẽ làm gì?",
       "scene": "🔋❌🔄",
       "ans": "我会马上更换电池",
       "opts": [
        {
         "txt": "我昨天去北京出差",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng chūchāi"
        },
        {
         "txt": "我会马上更换电池",
         "ico": "🔋",
         "py": "Wǒ huì mǎshàng gēnghuàn diànchí"
        },
        {
         "txt": "这家饭馆的菜很好吃",
         "ico": "🍜",
         "py": "Zhè jiā fànguǎn de cài hěn hǎochī"
        }
       ],
       "qpy": "Diànchí yīdàn huài le nǐ huì zěnme zuò?"
      },
      {
       "q": "如果网络连接不上，你会怎么办？",
       "qvi": "Nếu mạng không kết nối được, bạn sẽ làm thế nào?",
       "scene": "🌐❌🤔",
       "ans": "我会先检查，再找人修理",
       "opts": [
        {
         "txt": "我会先检查，再找人修理",
         "ico": "🛠️",
         "py": "Wǒ huì xiān jiǎnchá zài zhǎo rén xiūlǐ"
        },
        {
         "txt": "我很喜欢听音乐",
         "ico": "🎵",
         "py": "Wǒ hěn xǐhuan tīng yīnyuè"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Rúguǒ wǎngluò liánjiē bú shàng nǐ huì zěnme bàn?"
      },
      {
       "q": "谁来收拾会议室？",
       "qvi": "Ai sẽ dọn phòng họp?",
       "scene": "🧹🏢🙋",
       "ans": "会后我来收拾",
       "opts": [
        {
         "txt": "他昨天去了上海",
         "ico": "🚄",
         "py": "Tā zuótiān qù le Shànghǎi"
        },
        {
         "txt": "这个星期天气很好",
         "ico": "☀️",
         "py": "Zhè gè xīngqī tiānqì hěn hǎo"
        },
        {
         "txt": "会后我来收拾",
         "ico": "🧹",
         "py": "Huì hòu wǒ lái shōushi"
        }
       ],
       "qpy": "Shéi lái shōushi huìyì shì?"
      },
      {
       "q": "一旦发现问题，你会告诉谁？",
       "qvi": "Một khi phát hiện vấn đề, bạn sẽ báo cho ai?",
       "scene": "🔍⚠️🗣️",
       "ans": "我会马上告诉经理",
       "opts": [
        {
         "txt": "我很喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ hěn xǐhuan chī miàntiáor"
        },
        {
         "txt": "明天我要去机场接朋友",
         "ico": "🛬",
         "py": "Míngtiān wǒ yào qù jīchǎng jiē péngyou"
        },
        {
         "txt": "我会马上告诉经理",
         "ico": "👔",
         "py": "Wǒ huì mǎshàng gàosu jīnglǐ"
        }
       ],
       "qpy": "Yīdàn fāxiàn wèntí nǐ huì gàosu shéi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo sự cố ở văn phòng",
      "steps": [
       "<b>Bước 1:</b> Nhìn quanh nhà hoặc văn phòng, tìm ba thứ có thể hỏng (đèn, ổ điện, vòi nước). Nói thành tiếng với mỗi thứ: <i>\"一旦坏了，就要马上修理。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp hoặc quản lý toà nhà: <i>\"一旦发现漏洞，就要马上修复。\"</i> rồi thêm một câu mô tả sự cố bằng tiếng Việt hoặc tiếng Trung đơn giản.",
       "<b>Bước 3:</b> Tự nói một kế hoạch ngắn về việc dọn dẹp và chuyển văn phòng, dùng ít nhất hai câu mẫu: <i>\"一旦修建完成，就要先收拾好办公室。\"</i>"
      ]
     }
    },
    {
     "id": "5.16B",
     "name": "Bài 5.16B: Xung đột và rủi ro",
     "grammar": {
      "formulas": [
       "⚠️ 要是 + 😟 有冲突 + ✅ 就 + 🤝 沟通",
       "🚫 要是 + 😟 不……，+ ❌ 否则 + ⚠️ 有麻烦",
       "❓ 要是 + 🤔 ……，+ 你 + 怎么办？"
      ],
      "tip": "Mẫu 要是……，（就）……，否则……(yàoshi…, jiù…, fǒuzé…, \"nếu… thì…, nếu không thì…\"). Vế 要是 nêu giả thiết, 就 nêu việc nên làm, còn 否则 (phủ tắc) nêu hậu quả xấu nếu không làm như vậy. 否则 luôn đứng ở đầu vế cuối.",
      "vn_tip": "Người Việt hay dịch \"nếu không thì\" thành 如果不然 hoặc 不然的话 trong văn viết trang trọng. Trong bài viết và công việc, hãy dùng 否则. Đúng: 要是你不想打架，就别去，否则会有麻烦. Đừng bỏ dấu phẩy trước 否则."
     },
     "chunks": [
      {
       "scene": "🍺🥊⚠️",
       "full": "要是你不想打架就别去那家酒吧否则会有麻烦",
       "vi": "Nếu bạn không muốn đánh nhau thì đừng đến quán bar đó, nếu không sẽ có rắc rối",
       "parts": [
        {
         "t": "要是你不想打架",
         "ico": "🧑",
         "c": "s",
         "py": "yàoshi nǐ bù xiǎng dǎjià",
         "hv": "yếu thị nễ bất tưởng đả giá"
        },
        {
         "t": "就别去那家酒吧",
         "ico": "🚫",
         "c": "v",
         "py": "jiù bié qù nà jiā jiǔbā",
         "hv": "tựu biệt khứ na gia tửu ba"
        },
        {
         "t": "否则会有麻烦",
         "ico": "⚠️",
         "c": "o",
         "py": "fǒuzé huì yǒu máfan",
         "hv": "phủ tắc hội hữu ma phiền"
        }
       ],
       "traceWord": "打架",
       "py": "Yàoshi nǐ bù xiǎng dǎjià jiù bié qù nà jiā jiǔbā fǒuzé huì yǒu máfan",
       "traceKey": "dajia",
       "traceInfo": [
        {
         "c": "打",
         "py": "dǎ",
         "hv": "đả"
        },
        {
         "c": "架",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "🏢⚔️🗣️",
       "full": "要是两个部门有冲突就应该马上沟通否则问题会更严重",
       "vi": "Nếu hai bộ phận có xung đột thì nên trao đổi ngay, nếu không vấn đề sẽ nghiêm trọng hơn",
       "parts": [
        {
         "t": "要是两个部门有冲突",
         "ico": "🏢",
         "c": "s",
         "py": "yàoshi liǎng gè bùmén yǒu chōngtū",
         "hv": "yếu thị lưỡng cá bộ môn hữu xung đột"
        },
        {
         "t": "就应该马上沟通",
         "ico": "🗣️",
         "c": "v",
         "py": "jiù yīnggāi mǎshàng gōutōng",
         "hv": "tựu ưng cai mã thượng câu thông"
        },
        {
         "t": "否则问题会更严重",
         "ico": "📈",
         "c": "o",
         "py": "fǒuzé wèntí huì gèng yánzhòng",
         "hv": "phủ tắc vấn đề hội cánh nghiêm trọng"
        }
       ],
       "traceWord": "冲突",
       "py": "Yàoshi liǎng gè bùmén yǒu chōngtū jiù yīnggāi mǎshàng gōutōng fǒuzé wèntí huì gèng yánzhòng",
       "traceKey": "chongtu",
       "traceInfo": [
        {
         "c": "冲",
         "py": "chōng",
         "hv": "xung"
        },
        {
         "c": "突",
         "py": "tū",
         "hv": "đột"
        }
       ]
      },
      {
       "scene": "🪖🛡️🏠",
       "full": "要是没有军人保卫国家人民就没有安全的生活",
       "vi": "Nếu không có quân nhân bảo vệ đất nước thì người dân sẽ không có cuộc sống an toàn",
       "parts": [
        {
         "t": "要是没有军人",
         "ico": "🪖",
         "c": "s",
         "py": "yàoshi méiyǒu jūnrén",
         "hv": "yếu thị một hữu quân nhân"
        },
        {
         "t": "保卫国家",
         "ico": "🛡️",
         "c": "v",
         "py": "bǎowèi guójiā",
         "hv": "bảo vệ quốc gia"
        },
        {
         "t": "人民就没有安全的生活",
         "ico": "🏠",
         "c": "o",
         "py": "rénmín jiù méiyǒu ānquán de shēnghuó",
         "hv": "nhân dân tựu một hữu an toàn đích sinh hoạt"
        }
       ],
       "traceWord": "保卫",
       "py": "Yàoshi méiyǒu jūnrén bǎowèi guójiā rénmín jiù méiyǒu ānquán de shēnghuó",
       "traceKey": "baowei",
       "traceInfo": [
        {
         "c": "保",
         "py": "bǎo",
         "hv": "bảo"
        },
        {
         "c": "卫",
         "py": "wèi",
         "hv": "vệ"
        }
       ]
      },
      {
       "scene": "😠✍️🚫",
       "full": "要是有人强迫你签字就不要答应否则会有风险",
       "vi": "Nếu có người ép bạn ký tên thì đừng đồng ý, nếu không sẽ có rủi ro",
       "parts": [
        {
         "t": "要是有人强迫你签字",
         "ico": "😠",
         "c": "s",
         "py": "yàoshi yǒu rén qiǎngpò nǐ qiānzì",
         "hv": "yếu thị hữu nhân cưỡng bách nễ thiêm tự"
        },
        {
         "t": "就不要答应",
         "ico": "🙅",
         "c": "v",
         "py": "jiù bùyào dāying",
         "hv": "tựu bất yếu đáp ứng"
        },
        {
         "t": "否则会有风险",
         "ico": "⚠️",
         "c": "o",
         "py": "fǒuzé huì yǒu fēngxiǎn",
         "hv": "phủ tắc hội hữu phong hiểm"
        }
       ],
       "traceWord": "强迫",
       "py": "Yàoshi yǒu rén qiǎngpò nǐ qiānzì jiù bùyào dāying fǒuzé huì yǒu fēngxiǎn",
       "traceKey": "qiangpo",
       "traceInfo": [
        {
         "c": "强",
         "py": "qiǎng",
         "hv": "cưỡng"
        },
        {
         "c": "迫",
         "py": "pò",
         "hv": "bách"
        }
       ]
      },
      {
       "scene": "👔🚩📈",
       "full": "要是经理率领我们去占领新市场就要先做好计划否则会失败",
       "vi": "Nếu giám đốc dẫn dắt chúng ta đi chiếm lĩnh thị trường mới thì phải lập kế hoạch tốt trước, nếu không sẽ thất bại",
       "parts": [
        {
         "t": "要是经理率领我们",
         "ico": "👔",
         "c": "s",
         "py": "yàoshi jīnglǐ shuàilǐng wǒmen",
         "hv": "yếu thị kinh lý suất lĩnh ngã môn"
        },
        {
         "t": "去占领新市场",
         "ico": "🚩",
         "c": "v",
         "py": "qù zhànlǐng xīn shìchǎng",
         "hv": "khứ chiếm lĩnh tân thị trường"
        },
        {
         "t": "就要先做好计划否则会失败",
         "ico": "📋",
         "c": "o",
         "py": "jiùyào xiān zuò hǎo jìhuà fǒuzé huì shībài",
         "hv": "tựu yếu tiên tố hảo kế hoạch phủ tắc hội thất bại"
        }
       ],
       "traceWord": "率领",
       "py": "Yàoshi jīnglǐ shuàilǐng wǒmen qù zhànlǐng xīn shìchǎng jiùyào xiān zuò hǎo jìhuà fǒuzé huì shībài",
       "traceKey": "shuailing",
       "traceInfo": [
        {
         "c": "率",
         "py": "shuài",
         "hv": "suất"
        },
        {
         "c": "领",
         "py": "lǐng",
         "hv": "lĩnh"
        }
       ]
      },
      {
       "scene": "🏭📊👑",
       "full": "要是这家公司占有一半以上的市场就会成为行业里最大的势力",
       "vi": "Nếu công ty này nắm hơn một nửa thị phần thì sẽ trở thành thế lực lớn nhất trong ngành",
       "parts": [
        {
         "t": "要是这家公司",
         "ico": "🏭",
         "c": "s",
         "py": "yàoshi zhè jiā gōngsī",
         "hv": "yếu thị giá gia công ti"
        },
        {
         "t": "占有一半以上的市场",
         "ico": "📊",
         "c": "v",
         "py": "zhànyǒu yībàn yǐshàng de shìchǎng",
         "hv": "chiếm hữu nhất bán dĩ thượng đích thị trường"
        },
        {
         "t": "就会成为行业里最大的势力",
         "ico": "👑",
         "c": "o",
         "py": "jiù huì chéngwéi hángyè lǐ zuì dà de shìlì",
         "hv": "tựu hội thành vi hàng nghiệp lý tối đại đích thế lực"
        }
       ],
       "traceWord": "占有",
       "py": "Yàoshi zhè jiā gōngsī zhànyǒu yībàn yǐshàng de shìchǎng jiù huì chéngwéi hángyè lǐ zuì dà de shìlì",
       "traceKey": "zhanyou",
       "traceInfo": [
        {
         "c": "占",
         "py": "zhàn",
         "hv": "chiếm"
        },
        {
         "c": "有",
         "py": "yǒu",
         "hv": "hữu"
        }
       ]
      },
      {
       "scene": "🏠🔥⚠️",
       "full": "要是你在屋子里点燃火柴就要小心否则会引起火灾",
       "vi": "Nếu bạn châm diêm trong nhà thì phải cẩn thận, nếu không sẽ gây hoả hoạn",
       "parts": [
        {
         "t": "要是你在屋子里",
         "ico": "🏠",
         "c": "s",
         "py": "yàoshi nǐ zài wūzi lǐ",
         "hv": "yếu thị nễ tại ốc tử lý"
        },
        {
         "t": "点燃火柴",
         "ico": "🔥",
         "c": "v",
         "py": "diǎnrán huǒchái",
         "hv": "điểm nhiên hỏa sài"
        },
        {
         "t": "就要小心否则会引起火灾",
         "ico": "🚒",
         "c": "o",
         "py": "jiùyào xiǎoxīn fǒuzé huì yǐnqǐ huǒzāi",
         "hv": "tựu yếu tiểu tâm phủ tắc hội dẫn khởi hỏa tai"
        }
       ],
       "traceWord": "点燃",
       "py": "Yàoshi nǐ zài wūzi lǐ diǎnrán huǒchái jiùyào xiǎoxīn fǒuzé huì yǐnqǐ huǒzāi",
       "traceKey": "dianran",
       "traceInfo": [
        {
         "c": "点",
         "py": "diǎn",
         "hv": "điểm"
        },
        {
         "c": "燃",
         "py": "rán",
         "hv": "nhiên"
        }
       ]
      },
      {
       "scene": "🌳🛣️🚗",
       "full": "要是大树挡住了马路就应该马上处理否则会堵车",
       "vi": "Nếu cây lớn chắn mất đường thì nên xử lý ngay, nếu không sẽ tắc xe",
       "parts": [
        {
         "t": "要是大树",
         "ico": "🌳",
         "c": "s",
         "py": "yàoshi dà shù",
         "hv": "yếu thị đại thụ"
        },
        {
         "t": "挡住了马路",
         "ico": "🛣️",
         "c": "v",
         "py": "dǎng zhù le mǎlù",
         "hv": "đáng trú liễu mã lộ"
        },
        {
         "t": "就应该马上处理否则会堵车",
         "ico": "🚗",
         "c": "o",
         "py": "jiù yīnggāi mǎshàng chǔlǐ fǒuzé huì dǔchē",
         "hv": "tựu ưng cai mã thượng xử lý phủ tắc hội đổ xa"
        }
       ],
       "traceWord": "挡",
       "py": "Yàoshi dà shù dǎng zhù le mǎlù jiù yīnggāi mǎshàng chǔlǐ fǒuzé huì dǔchē",
       "traceKey": "dang",
       "traceInfo": [
        {
         "c": "挡",
         "py": "dǎng",
         "hv": "đáng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "要是小偷儿被警察包围了，他应该怎么做？",
       "qvi": "Nếu tên trộm bị cảnh sát bao vây, anh ta nên làm gì?",
       "scene": "🦹👮⭕",
       "ans": "他应该马上停下来",
       "opts": [
        {
         "txt": "他应该先去吃午饭",
         "ico": "🍱",
         "py": "Tā yīnggāi xiān qù chī wǔfàn"
        },
        {
         "txt": "他应该马上停下来",
         "ico": "✋",
         "py": "Tā yīnggāi mǎshàng tíng xiàlái"
        },
        {
         "txt": "他应该给我们买咖啡",
         "ico": "☕",
         "py": "Tā yīnggāi gěi wǒmen mǎi kāfēi"
        }
       ],
       "qpy": "Yàoshi xiǎotōur bèi jǐngchá bāowéi le tā yīnggāi zěnme zuò?"
      },
      {
       "q": "军人今天发射了什么？",
       "qvi": "Hôm nay quân nhân đã bắn thứ gì?",
       "scene": "🪖🎯💥",
       "ans": "他们发射了几颗子弹",
       "opts": [
        {
         "txt": "他们买了几本杂志",
         "ico": "📖",
         "py": "Tāmen mǎi le jǐ běn zázhì"
        },
        {
         "txt": "他们用手指弹桌子",
         "ico": "🖐️",
         "py": "Tāmen yòng shǒuzhǐ tán zhuōzi"
        },
        {
         "txt": "他们发射了几颗子弹",
         "ico": "🎯",
         "py": "Tāmen fāshè le jǐ kē zǐdàn"
        }
       ],
       "qpy": "Jūnrén jīntiān fāshè le shénme?"
      },
      {
       "q": "要是公司受到竞争对手的打击，你会怎么办？",
       "qvi": "Nếu công ty bị đối thủ cạnh tranh đả kích, bạn sẽ làm gì?",
       "scene": "🏢⚔️💪",
       "ans": "要是受到打击，我就继续努力",
       "opts": [
        {
         "txt": "要是受到打击，我就继续努力",
         "ico": "💪",
         "py": "Yàoshi shòudào dǎjī wǒ jiù jìxù nǔlì"
        },
        {
         "txt": "今天的天气比昨天凉快",
         "ico": "🌤️",
         "py": "Jīntiān de tiānqì bǐ zuótiān liángkuai"
        },
        {
         "txt": "这件衣服的颜色很漂亮",
         "ico": "👗",
         "py": "Zhè jiàn yīfu de yánsè hěn piàoliang"
        }
       ],
       "qpy": "Yàoshi gōngsī shòudào jìngzhēng duìshǒu de dǎjī nǐ huì zěnme bàn?"
      },
      {
       "q": "军人一枪就射中了目标，教练会怎么说？",
       "qvi": "Quân nhân một phát bắn trúng mục tiêu, huấn luyện viên sẽ nói gì?",
       "scene": "🪖🔫🎯",
       "ans": "教练会说他射得很准",
       "opts": [
        {
         "txt": "教练会说他跑得很快",
         "ico": "🏃",
         "py": "Jiàoliàn huì shuō tā pǎo de hěn kuài"
        },
        {
         "txt": "教练会说他射得很准",
         "ico": "🎯",
         "py": "Jiàoliàn huì shuō tā shè de hěn zhǔn"
        },
        {
         "txt": "教练会说他唱得很好听",
         "ico": "🎤",
         "py": "Jiàoliàn huì shuō tā chàng de hěn hǎotīng"
        }
       ],
       "qpy": "Jūnrén yī qiāng jiù shè zhòng le mùbiāo jiàoliàn huì zěnme shuō?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phòng ngừa rủi ro trong công việc",
      "steps": [
       "<b>Bước 1:</b> Nghĩ đến ba rủi ro thật trong công việc của bạn (trễ hạn, mất dữ liệu, hiểu lầm với đồng nghiệp). Với mỗi rủi ro, nói thành tiếng một câu theo mẫu: <i>\"要是有问题，就马上沟通，否则会更严重。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp đang có bất đồng với bạn: <i>\"要是我们有冲突，就应该马上沟通，否则问题会更严重。\"</i> rồi đề nghị một thời gian để gặp.",
       "<b>Bước 3:</b> Tập từ chối khi bị ép làm điều bạn không muốn, tự nói thành tiếng: <i>\"要是有人强迫你签字，就不要答应，否则会有风险。\"</i> Sau đó thêm một lý do của riêng bạn."
      ]
     }
    },
    {
     "id": "5.16C",
     "name": "Bài 5.16C: Quản trị và kế hoạch",
     "grammar": {
      "formulas": [
       "🚧 除非 + ✅ 条件满足 + 🎯 才 + 🚀 能行动",
       "🏢 除非 + 🤝 各部门配合 + 🎯 才 + 📋 做好规划",
       "❓ 除非 + 🤔 ……，+ 你 + 才 + 🤔 ……？"
      ],
      "tip": "Mẫu 除非……，才……(chúfēi…, cái…, \"trừ phi… mới…\") chỉ điều kiện duy nhất, bắt buộc. Vế đầu nêu điều kiện duy nhất, vế sau dùng 才 (tài) để nói kết quả chỉ xảy ra khi điều kiện đó có. Thường đi với 能 hoặc 会: 才能……, 才会……",
      "vn_tip": "Người Việt hay dùng 就 thay cho 才 vì tiếng Việt chỉ nói \"trừ phi… thì…\". Đúng: 除非你同意，我才会做. Sai: 除非你同意，我就会做. Vế sau nhất định phải là 才, không được là 就."
     },
     "chunks": [
      {
       "scene": "👔🎯📈",
       "full": "除非领导确立明确的目标项目才能顺利进行",
       "vi": "Trừ phi lãnh đạo xác lập mục tiêu rõ ràng, dự án mới có thể tiến hành thuận lợi",
       "parts": [
        {
         "t": "除非领导",
         "ico": "👔",
         "c": "s",
         "py": "chúfēi lǐngdǎo",
         "hv": "trừ phi lĩnh đạo"
        },
        {
         "t": "确立明确的目标",
         "ico": "🎯",
         "c": "v",
         "py": "quèlì míngquè de mùbiāo",
         "hv": "xác lập minh xác đích mục tiêu"
        },
        {
         "t": "项目才能顺利进行",
         "ico": "📈",
         "c": "o",
         "py": "xiàngmù cáinéng shùnlì jìnxíng",
         "hv": "hạng mục tài năng thuận lợi tiến hành"
        }
       ],
       "traceWord": "确立",
       "py": "Chúfēi lǐngdǎo quèlì míngquè de mùbiāo xiàngmù cáinéng shùnlì jìnxíng",
       "traceKey": "queli",
       "traceInfo": [
        {
         "c": "确",
         "py": "què",
         "hv": "xác"
        },
        {
         "c": "立",
         "py": "lì",
         "hv": "lập"
        }
       ]
      },
      {
       "scene": "🏢🤝📋",
       "full": "除非各部门密切配合才能做好年度规划",
       "vi": "Trừ phi các bộ phận phối hợp chặt chẽ, mới có thể làm tốt kế hoạch cả năm",
       "parts": [
        {
         "t": "除非各部门",
         "ico": "🏢",
         "c": "s",
         "py": "chúfēi gè bùmén",
         "hv": "trừ phi các bộ môn"
        },
        {
         "t": "密切配合",
         "ico": "🤝",
         "c": "v",
         "py": "mìqiè pèihé",
         "hv": "mật thiết phối hợp"
        },
        {
         "t": "才能做好年度规划",
         "ico": "📋",
         "c": "o",
         "py": "cáinéng zuò hǎo niándù guīhuà",
         "hv": "tài năng tố hảo niên độ quy hoạch"
        }
       ],
       "traceWord": "规划",
       "py": "Chúfēi gè bùmén mìqiè pèihé cáinéng zuò hǎo niándù guīhuà",
       "traceKey": "guihua",
       "traceInfo": [
        {
         "c": "规",
         "py": "guī",
         "hv": "quy"
        },
        {
         "c": "划",
         "py": "huà",
         "hv": "hoạch"
        }
       ]
      },
      {
       "scene": "👔📣🔄",
       "full": "除非老板倡导新的工作方式大家才会愿意改变",
       "vi": "Trừ phi sếp đề xướng cách làm việc mới, mọi người mới sẵn lòng thay đổi",
       "parts": [
        {
         "t": "除非老板",
         "ico": "👔",
         "c": "s",
         "py": "chúfēi lǎobǎn",
         "hv": "trừ phi lão bản"
        },
        {
         "t": "倡导新的工作方式",
         "ico": "📣",
         "c": "v",
         "py": "chàngdǎo xīn de gōngzuò fāngshì",
         "hv": "xướng đạo tân đích công tác phương thức"
        },
        {
         "t": "大家才会愿意改变",
         "ico": "🔄",
         "c": "o",
         "py": "dàjiā cái huì yuànyì gǎibiàn",
         "hv": "đại gia tài hội nguyện ý cải biến"
        }
       ],
       "traceWord": "倡导",
       "py": "Chúfēi lǎobǎn chàngdǎo xīn de gōngzuò fāngshì dàjiā cái huì yuànyì gǎibiàn",
       "traceKey": "changdao",
       "traceInfo": [
        {
         "c": "倡",
         "py": "chàng",
         "hv": "xướng"
        },
        {
         "c": "导",
         "py": "dǎo",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "🔗✅🌍",
       "full": "除非每个环节都没有问题产品才能卖到国外",
       "vi": "Trừ phi mọi khâu đều không có vấn đề, sản phẩm mới có thể bán ra nước ngoài",
       "parts": [
        {
         "t": "除非每个环节",
         "ico": "🔗",
         "c": "s",
         "py": "chúfēi měi gè huánjié",
         "hv": "trừ phi mỗi cá hoàn tiết"
        },
        {
         "t": "都没有问题",
         "ico": "✅",
         "c": "v",
         "py": "dōu méiyǒu wèntí",
         "hv": "đô một hữu vấn đề"
        },
        {
         "t": "产品才能卖到国外",
         "ico": "🌍",
         "c": "o",
         "py": "chǎnpǐn cáinéng mài dào guó wài",
         "hv": "sản phẩm tài năng mại đáo quốc ngoại"
        }
       ],
       "traceWord": "环节",
       "py": "Chúfēi měi gè huánjié dōu méiyǒu wèntí chǎnpǐn cáinéng mài dào guó wài",
       "traceKey": "huanjie",
       "traceInfo": [
        {
         "c": "环",
         "py": "huán",
         "hv": "hoàn"
        },
        {
         "c": "节",
         "py": "jié",
         "hv": "tiết"
        }
       ]
      },
      {
       "scene": "🏭🛠️👷",
       "full": "除非基地配备足够的设备工人才能开始生产",
       "vi": "Trừ phi cơ sở được trang bị đủ thiết bị, công nhân mới có thể bắt đầu sản xuất",
       "parts": [
        {
         "t": "除非基地",
         "ico": "🏭",
         "c": "s",
         "py": "chúfēi jīdì",
         "hv": "trừ phi cơ địa"
        },
        {
         "t": "配备足够的设备",
         "ico": "🛠️",
         "c": "v",
         "py": "pèibèi zúgòu de shèbèi",
         "hv": "phối bị túc cấu đích thiết bị"
        },
        {
         "t": "工人才能开始生产",
         "ico": "👷",
         "c": "o",
         "py": "gōngrén cáinéng kāishǐ shēngchǎn",
         "hv": "công nhân tài năng khai thủy sinh sản"
        }
       ],
       "traceWord": "配备",
       "py": "Chúfēi jīdì pèibèi zúgòu de shèbèi gōngrén cáinéng kāishǐ shēngchǎn",
       "traceKey": "peibei",
       "traceInfo": [
        {
         "c": "配",
         "py": "pèi",
         "hv": "phối"
        },
        {
         "c": "备",
         "py": "bèi",
         "hv": "bị"
        }
       ]
      },
      {
       "scene": "🏢🧰👥",
       "full": "除非公司有配套的服务和辅助人员才能照顾这么多客户",
       "vi": "Trừ phi công ty có dịch vụ đồng bộ và nhân viên hỗ trợ, mới chăm sóc được nhiều khách hàng như vậy",
       "parts": [
        {
         "t": "除非公司",
         "ico": "🏢",
         "c": "s",
         "py": "chúfēi gōngsī",
         "hv": "trừ phi công ti"
        },
        {
         "t": "有配套的服务和辅助人员",
         "ico": "🧰",
         "c": "v",
         "py": "yǒu pèitào de fúwù hé fǔzhù rényuán",
         "hv": "hữu phối sáo đích phục vụ hòa phụ trợ nhân viên"
        },
        {
         "t": "才能照顾这么多客户",
         "ico": "👥",
         "c": "o",
         "py": "cáinéng zhàogù zhème duō kèhù",
         "hv": "tài năng chiếu cố giá ma đa khách hộ"
        }
       ],
       "traceWord": "辅助",
       "py": "Chúfēi gōngsī yǒu pèitào de fúwù hé fǔzhù rényuán cáinéng zhàogù zhème duō kèhù",
       "traceKey": "fuzhu",
       "traceInfo": [
        {
         "c": "辅",
         "py": "fǔ",
         "hv": "phụ"
        },
        {
         "c": "助",
         "py": "zhù",
         "hv": "trợ"
        }
       ]
      },
      {
       "scene": "📊👀⏱️",
       "full": "除非我们注重市场的动态才能把握产品的更新周期",
       "vi": "Trừ phi chúng ta chú trọng diễn biến của thị trường, mới nắm được chu kỳ cập nhật sản phẩm",
       "parts": [
        {
         "t": "除非我们",
         "ico": "👥",
         "c": "s",
         "py": "chúfēi wǒmen",
         "hv": "trừ phi ngã môn"
        },
        {
         "t": "注重市场的动态",
         "ico": "📊",
         "c": "v",
         "py": "zhùzhòng shìchǎng de dòngtài",
         "hv": "chú trọng thị trường đích động thái"
        },
        {
         "t": "才能把握产品的更新周期",
         "ico": "⏱️",
         "c": "o",
         "py": "cáinéng bǎwò chǎnpǐn de gēngxīn zhōuqī",
         "hv": "tài năng bả ác sản phẩm đích canh tân chu kỳ"
        }
       ],
       "traceWord": "周期",
       "py": "Chúfēi wǒmen zhùzhòng shìchǎng de dòngtài cáinéng bǎwò chǎnpǐn de gēngxīn zhōuqī",
       "traceKey": "zhouqi",
       "traceInfo": [
        {
         "c": "周",
         "py": "zhōu",
         "hv": "chu"
        },
        {
         "c": "期",
         "py": "qī",
         "hv": "kỳ"
        }
       ]
      },
      {
       "scene": "💡🧑‍💼📈",
       "full": "除非员工有明确的动机工作才会有好的效果",
       "vi": "Trừ phi nhân viên có động cơ rõ ràng, công việc mới có hiệu quả tốt",
       "parts": [
        {
         "t": "除非员工",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "chúfēi yuángōng",
         "hv": "trừ phi viên công"
        },
        {
         "t": "有明确的动机",
         "ico": "💡",
         "c": "v",
         "py": "yǒu míngquè de dòngjī",
         "hv": "hữu minh xác đích động cơ"
        },
        {
         "t": "工作才会有好的效果",
         "ico": "📈",
         "c": "o",
         "py": "gōngzuò cái huì yǒu hǎo de xiàoguǒ",
         "hv": "công tác tài hội hữu hảo đích hiệu quả"
        }
       ],
       "traceWord": "动机",
       "py": "Chúfēi yuángōng yǒu míngquè de dòngjī gōngzuò cái huì yǒu hǎo de xiàoguǒ",
       "traceKey": "dongji",
       "traceInfo": [
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "什么时候你才会去干预别人的工作？",
       "qvi": "Khi nào bạn mới can thiệp vào công việc của người khác?",
       "scene": "🧑‍💼🛑❓",
       "ans": "除非有严重的问题，我才会干预",
       "opts": [
        {
         "txt": "我昨天买了一件新衣服",
         "ico": "👕",
         "py": "Wǒ zuótiān mǎi le yī jiàn xīn yīfu"
        },
        {
         "txt": "我每天早上喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ měi tiān zǎoshang hē yī bēi kāfēi"
        },
        {
         "txt": "除非有严重的问题，我才会干预",
         "ico": "🛑",
         "py": "Chúfēi yǒu yánzhòng de wèntí wǒ cái huì gānyù"
        }
       ],
       "qpy": "Shénme shíhou nǐ cái huì qù gānyù biérén de gōngzuò?"
      },
      {
       "q": "怎样才能不被别人干扰？",
       "qvi": "Làm thế nào để không bị người khác làm phiền?",
       "scene": "🚪🤫💻",
       "ans": "除非关上门，我才能安静地工作",
       "opts": [
        {
         "txt": "除非关上门，我才能安静地工作",
         "ico": "🚪",
         "py": "Chúfēi guān shàngmén wǒ cáinéng ānjìng de gōngzuò"
        },
        {
         "txt": "我想去海边玩儿",
         "ico": "🏖️",
         "py": "Wǒ xiǎng qù hǎi biān wánr"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Zěnyàng cáinéng bú bèi biérén gānrǎo?"
      },
      {
       "q": "谁是这次活动的主体？",
       "qvi": "Ai là lực lượng chính của hoạt động lần này?",
       "scene": "🎪👥⭐",
       "ans": "活动的主体是我们的志愿者",
       "opts": [
        {
         "txt": "这件衣服的颜色很漂亮",
         "ico": "👗",
         "py": "Zhè jiàn yīfu de yánsè hěn piàoliang"
        },
        {
         "txt": "活动的主体是我们的志愿者",
         "ico": "🙋",
         "py": "Huódòng de zhǔtǐ shì wǒmen de zhìyuànzhě"
        },
        {
         "txt": "今天的天气比昨天凉快",
         "ico": "🌤️",
         "py": "Jīntiān de tiānqì bǐ zuótiān liángkuai"
        }
       ],
       "qpy": "Shéi shì zhè cì huódòng de zhǔtǐ?"
      },
      {
       "q": "这家公司是谁创立的？",
       "qvi": "Công ty này do ai sáng lập?",
       "scene": "🏢🌱🧑",
       "ans": "是几位年轻人创立的",
       "opts": [
        {
         "txt": "是几位年轻人创立的",
         "ico": "🌱",
         "py": "Shì jǐ wèi niánqīng rén chuànglì de"
        },
        {
         "txt": "它在火车站的旁边",
         "ico": "🚉",
         "py": "Tā zài huǒ chēzhàn de pángbiān"
        },
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        }
       ],
       "qpy": "Zhè jiā gōngsī shì shéi chuànglì de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Họp bàn kế hoạch với đối tác",
      "steps": [
       "<b>Bước 1:</b> Chọn một dự án thật hoặc tưởng tượng (mở cửa hàng, tổ chức sự kiện). Viết ba điều kiện bắt buộc, mỗi điều một câu: <i>\"除非各部门密切配合，才能做好规划。\"</i>",
       "<b>Bước 2:</b> Giả vờ gọi điện cho đối tác, nói thành tiếng yêu cầu của bạn: <i>\"除非每个环节都没有问题，产品才能卖到国外。\"</i> rồi hỏi họ có đồng ý không.",
       "<b>Bước 3:</b> Đóng vai quản lý trả lời câu hỏi của nhân viên về việc khi nào bạn can thiệp: <i>\"除非有严重的问题，我才会干预。\"</i> Thêm một điều kiện của riêng bạn."
      ]
     }
    }
   ]
  },
  "5.17": {
   "lessons": [
    {
     "id": "5.17A",
     "name": "Bài 5.17A: Chính trị và dư luận — 除非……否则",
     "grammar": {
      "formulas": [
       "⚠️ 除非 + ✅ 条件",
       "➡️ 否则/不然 + ❌ 结果"
      ],
      "tip": "<b>除非</b> (chúfēi, trừ phi) nêu điều kiện DUY NHẤT để việc kia xảy ra; vế sau dùng <b>否则</b> (fǒuzé, phủ tắc) hoặc <b>不然</b> (bùrán) = \"nếu không thì…\". Vế sau thường là kết quả xấu/không xảy ra.",
      "vn_tip": "Người Việt hay dịch \"trừ phi… thì…\" và viết 除非……就……. Đúng phải là 除非……，否则/不然……: vế sau diễn tả điều gì xảy ra NẾU KHÔNG có điều kiện đó. Ví dụ: 除非你同意，否则我不去."
     },
     "chunks": [
      {
       "scene": "👔📣👥",
       "full": "除非老板亲自号召大家否则没有人愿意加班",
       "vi": "Trừ phi sếp đích thân kêu gọi mọi người, nếu không sẽ không ai muốn làm thêm giờ",
       "parts": [
        {
         "t": "除非老板亲自号召大家",
         "ico": "👔",
         "c": "s",
         "py": "chúfēi lǎobǎn qīnzì hàozhào dàjiā",
         "hv": "trừ phi lão bản thân tự hiệu triệu đại gia"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "没有人愿意加班",
         "ico": "🌙",
         "c": "o",
         "py": "méi yǒu rén yuànyì jiābān",
         "hv": "một hữu nhân nguyện ý gia ban"
        }
       ],
       "traceWord": "号召",
       "py": "Chúfēi lǎobǎn qīnzì hàozhào dàjiā fǒuzé méi yǒu rén yuànyì jiābān",
       "traceKey": "haozhao",
       "traceInfo": [
        {
         "c": "号",
         "py": "hào",
         "hv": "hiệu"
        },
        {
         "c": "召",
         "py": "zhào",
         "hv": "triệu"
        }
       ]
      },
      {
       "scene": "📣🆕🤔",
       "full": "除非换一个新口号否则大家很快就会忘记",
       "vi": "Trừ phi đổi một khẩu hiệu mới, nếu không mọi người sẽ nhanh chóng quên",
       "parts": [
        {
         "t": "除非换一个新口号",
         "ico": "🔄",
         "c": "s",
         "py": "chúfēi huàn yī gè xīn kǒuhào",
         "hv": "trừ phi hoán nhất cá tân khẩu hiệu"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "大家很快就会忘记",
         "ico": "💭",
         "c": "o",
         "py": "dàjiā hěn kuài jiù huì wàngjì",
         "hv": "đại gia ngận khoái tựu hội vong ký"
        }
       ],
       "traceWord": "口号",
       "py": "Chúfēi huàn yī gè xīn kǒuhào fǒuzé dàjiā hěn kuài jiù huì wàngjì",
       "traceKey": "kouhao",
       "traceInfo": [
        {
         "c": "口",
         "py": "kǒu",
         "hv": "khẩu"
        },
        {
         "c": "号",
         "py": "hào",
         "hv": "hiệu"
        }
       ]
      },
      {
       "scene": "🏛️🌿📢",
       "full": "除非政府大力提倡环保否则很多人不会注意",
       "vi": "Trừ phi chính phủ ra sức đề xướng bảo vệ môi trường, nếu không nhiều người sẽ không chú ý",
       "parts": [
        {
         "t": "除非政府大力提倡环保",
         "ico": "🏛️",
         "c": "s",
         "py": "chúfēi zhèngfǔ dà lì tíchàng huánbǎo",
         "hv": "trừ phi chính phủ đại lực đề xướng hoàn bảo"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "很多人不会注意",
         "ico": "👀",
         "c": "o",
         "py": "hěn duō rén bú huì zhùyì",
         "hv": "ngận đa nhân bất hội chú ý"
        }
       ],
       "traceWord": "提倡",
       "py": "Chúfēi zhèngfǔ dà lì tíchàng huánbǎo fǒuzé hěn duō rén bú huì zhùyì",
       "traceKey": "tichang",
       "traceInfo": [
        {
         "c": "提",
         "py": "tí",
         "hv": "đề"
        },
        {
         "c": "倡",
         "py": "chàng",
         "hv": "xướng"
        }
       ]
      },
      {
       "scene": "🏆🥇🚫",
       "full": "除非他拿到冠军否则不能得到这个称号",
       "vi": "Trừ phi anh ấy giành quán quân, nếu không không thể nhận được danh hiệu này",
       "parts": [
        {
         "t": "除非他拿到冠军",
         "ico": "🥇",
         "c": "s",
         "py": "chúfēi tā nádào guànjūn",
         "hv": "trừ phi tha nã đáo quán quân"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "不能得到这个称号",
         "ico": "🏅",
         "c": "o",
         "py": "bù néng dédào zhè gè chēnghào",
         "hv": "bất năng đắc đáo giá cá xưng hiệu"
        }
       ],
       "traceWord": "称号",
       "py": "Chúfēi tā nádào guànjūn fǒuzé bù néng dédào zhè gè chēnghào",
       "traceKey": "chenghao",
       "traceInfo": [
        {
         "c": "称",
         "py": "chēng",
         "hv": "xưng"
        },
        {
         "c": "号",
         "py": "hào",
         "hv": "hiệu"
        }
       ]
      },
      {
       "scene": "🗳️👨‍💼📰",
       "full": "除非他当选市长否则外界不会称他为专家",
       "vi": "Trừ phi ông ấy trúng cử thị trưởng, nếu không bên ngoài sẽ không gọi ông là chuyên gia",
       "parts": [
        {
         "t": "除非他当选市长",
         "ico": "🗳️",
         "c": "s",
         "py": "chúfēi tā dāngxuǎn shìzhǎng",
         "hv": "trừ phi tha đương tuyển thị trưởng"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "外界不会称他为专家",
         "ico": "📰",
         "c": "o",
         "py": "wàijiè bú huì chēng tā wèi zhuānjiā",
         "hv": "ngoại giới bất hội xưng tha vị chuyên gia"
        }
       ],
       "traceWord": "当选",
       "py": "Chúfēi tā dāngxuǎn shìzhǎng fǒuzé wàijiè bú huì chēng tā wèi zhuānjiā",
       "traceKey": "dangxuan",
       "traceInfo": [
        {
         "c": "当",
         "py": "dāng",
         "hv": "đương"
        },
        {
         "c": "选",
         "py": "xuǎn",
         "hv": "tuyển"
        }
       ]
      },
      {
       "scene": "🤝🔒🔥",
       "full": "除非你有私人关系否则很难进入热门专业",
       "vi": "Trừ phi bạn có quan hệ riêng, nếu không rất khó vào được ngành hot",
       "parts": [
        {
         "t": "除非你有私人关系",
         "ico": "🤝",
         "c": "s",
         "py": "chúfēi nǐ yǒu sīrén guānxì",
         "hv": "trừ phi nễ hữu tư nhân quan hệ"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "很难进入热门专业",
         "ico": "🔥",
         "c": "o",
         "py": "hěn nán jìnrù rèmén zhuānyè",
         "hv": "ngận nan tiến nhập nhiệt môn chuyên nghiệp"
        }
       ],
       "traceWord": "热门",
       "py": "Chúfēi nǐ yǒu sīrén guānxì fǒuzé hěn nán jìnrù rèmén zhuānyè",
       "traceKey": "remen",
       "traceInfo": [
        {
         "c": "热",
         "py": "rè",
         "hv": "nhiệt"
        },
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        }
       ]
      },
      {
       "scene": "🏢👥📋",
       "full": "除非公司拥有足够的人力否则所在部门无法完成任务",
       "vi": "Trừ phi công ty có đủ nhân lực, nếu không bộ phận chúng tôi đang làm sẽ không thể hoàn thành nhiệm vụ",
       "parts": [
        {
         "t": "除非公司拥有足够的人力",
         "ico": "👥",
         "c": "s",
         "py": "chúfēi gōngsī yōngyǒu zúgòu de rénlì",
         "hv": "trừ phi công ti ủng hữu túc cấu đích nhân lực"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "所在部门无法完成任务",
         "ico": "📋",
         "c": "o",
         "py": "suǒzài bùmén wúfǎ wánchéng rènwu",
         "hv": "sở tại bộ môn vô pháp hoàn thành nhiệm vụ"
        }
       ],
       "traceWord": "人力",
       "py": "Chúfēi gōngsī yōngyǒu zúgòu de rénlì fǒuzé suǒzài bùmén wúfǎ wánchéng rènwu",
       "traceKey": "renli",
       "traceInfo": [
        {
         "c": "人",
         "py": "rén",
         "hv": "nhân"
        },
        {
         "c": "力",
         "py": "lì",
         "hv": "lực"
        }
       ]
      },
      {
       "scene": "⚖️🤝⏱️",
       "full": "除非双方的立场一致否则很难立刻签约",
       "vi": "Trừ phi lập trường hai bên thống nhất, nếu không rất khó ký hợp đồng ngay",
       "parts": [
        {
         "t": "除非双方的立场一致",
         "ico": "⚖️",
         "c": "s",
         "py": "chúfēi shuāngfāng de lìchǎng yīzhì",
         "hv": "trừ phi song phương đích lập trường nhất trí"
        },
        {
         "t": "否则",
         "ico": "🔀",
         "c": "v",
         "py": "fǒuzé",
         "hv": "phủ tắc"
        },
        {
         "t": "很难立刻签约",
         "ico": "✍️",
         "c": "o",
         "py": "hěn nán lìkè qiānyuē",
         "hv": "ngận nan lập khắc thiêm ước"
        }
       ],
       "traceWord": "立场",
       "py": "Chúfēi shuāngfāng de lìchǎng yīzhì fǒuzé hěn nán lìkè qiānyuē",
       "traceKey": "lichang",
       "traceInfo": [
        {
         "c": "立",
         "py": "lì",
         "hv": "lập"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么不想送礼？",
       "qvi": "Tại sao bạn không muốn tặng quà?",
       "scene": "🎁🙅",
       "ans": "除非对方帮过我否则我不会送礼",
       "opts": [
        {
         "txt": "除非对方帮过我否则我不会送礼",
         "ico": "✅",
         "py": "Chúfēi duìfāng bāng guò wǒ fǒuzé wǒ bú huì sòng lǐ"
        },
        {
         "txt": "活动已经结束了",
         "ico": "💬",
         "py": "Huódòng yǐjīng jiéshù le"
        },
        {
         "txt": "他们已经吃完午饭了",
         "ico": "💬",
         "py": "Tāmen yǐjīng chī wán wǔfàn le"
        }
       ],
       "qpy": "Nǐ wèi shénme bù xiǎng sòng lǐ?"
      },
      {
       "q": "怎样才能让全世界知道这个口号？",
       "qvi": "Làm sao để cả thế giới biết khẩu hiệu này?",
       "scene": "🌍📣",
       "ans": "除非多做广告否则全世界不会知道",
       "opts": [
        {
         "txt": "你应该多睡一会儿",
         "ico": "💬",
         "py": "Nǐ yīnggāi duō shuì yīhuìr"
        },
        {
         "txt": "除非多做广告否则全世界不会知道",
         "ico": "✅",
         "py": "Chúfēi duō zuò guǎnggào fǒuzé quán shìjiè bú huì zhīdào"
        },
        {
         "txt": "我觉得今天天气很好",
         "ico": "💬",
         "py": "Wǒ juéde jīntiān tiānqì hěn hǎo"
        }
       ],
       "qpy": "Zěnyàng cáinéng ràng quán shìjiè zhīdào zhè gè kǒuhào?"
      },
      {
       "q": "你能立刻回答我吗？",
       "qvi": "Bạn có thể trả lời tôi ngay không?",
       "scene": "⏱️💬",
       "ans": "除非你给我更多时间否则我无法回答",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "💬",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "我今天已经吃过饭了",
         "ico": "💬",
         "py": "Wǒ jīntiān yǐjīng chī guò fàn le"
        },
        {
         "txt": "除非你给我更多时间否则我无法回答",
         "ico": "✅",
         "py": "Chúfēi nǐ gěi wǒ gèng duō shíjiān fǒuzé wǒ wúfǎ huídá"
        }
       ],
       "qpy": "Nǐ néng lìkè huídá wǒ ma?"
      },
      {
       "q": "你们公司立了新规定吗？",
       "qvi": "Công ty các bạn có đặt quy định mới không?",
       "scene": "🏢📋",
       "ans": "除非大家同意否则经理不会立新规定",
       "opts": [
        {
         "txt": "除非大家同意否则经理不会立新规定",
         "ico": "✅",
         "py": "Chúfēi dàjiā tóngyì fǒuzé jīnglǐ bú huì lì xīn guīdìng"
        },
        {
         "txt": "他们在公司开会",
         "ico": "💬",
         "py": "Tāmen zài gōngsī kāihuì"
        },
        {
         "txt": "我哥哥喜欢打篮球",
         "ico": "💬",
         "py": "Wǒ gēge xǐhuan dǎ lánqiú"
        }
       ],
       "qpy": "Nǐmen gōngsī lì le xīn guīdìng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thuyết phục đồng nghiệp tham gia hoạt động",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp, nói điều kiện để bạn tham gia một hoạt động của công ty, ví dụ <i>\"除非对方帮过我，否则我不会送礼\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu về một khẩu hiệu hay chủ trương ở nơi bạn làm việc, dùng 除非……，否则……, ví dụ <i>\"除非换一个新口号，否则大家很快就会忘记\"</i>.",
       "<b>Bước 3:</b> Nêu lập trường của bạn với sếp hoặc đối tác, ví dụ <i>\"除非双方的立场一致，否则很难立刻签约\"</i>, rồi thử đổi sang 不然 và ghi lại câu hoàn chỉnh."
      ]
     }
    },
    {
     "id": "5.17B",
     "name": "Bài 5.17B: Thương mại và thị trường — 因而",
     "grammar": {
      "formulas": [
       "📈 原因 + 因而 + 📊 结果",
       "🏭 成本上涨 + 因而 + 💰 价格提高"
      ],
      "tip": "<b>因而</b> (yīn'ér, nhân nhi) = \"vì thế, cho nên\", dùng ở VẾ SAU để nêu kết quả, thường trong văn viết/trang trọng. Vế trước nêu nguyên nhân, không cần 因为.",
      "vn_tip": "Người Việt hay đặt 因而 ở vế nguyên nhân hoặc dùng cặp 因为……因而……. Cách đúng: nêu nguyên nhân trước, rồi 因而 + kết quả, ví dụ 物价上涨，因而成本提高了. Không đặt 因而 ở đầu câu khi chưa có nguyên nhân."
     },
     "chunks": [
      {
       "scene": "🧪📈🏭",
       "full": "原料价格上涨因而产品成本也提高了",
       "vi": "Giá nguyên liệu tăng, vì thế chi phí sản phẩm cũng cao lên",
       "parts": [
        {
         "t": "原料价格",
         "ico": "🧪",
         "c": "s",
         "py": "yuánliào jiàgé",
         "hv": "nguyên liệu giá cách"
        },
        {
         "t": "上涨",
         "ico": "📈",
         "c": "v",
         "py": "shàngzhǎng",
         "hv": "thượng trướng"
        },
        {
         "t": "因而产品成本也提高了",
         "ico": "🏭",
         "c": "o",
         "py": "yīn'ér chǎnpǐn chéngběn yě tígāo le",
         "hv": "nhân nhi sản phẩm thành bản dã đề cao liễu"
        }
       ],
       "traceWord": "上涨",
       "py": "Yuánliào jiàgé shàngzhǎng yīn'ér chǎnpǐn chéngběn yě tígāo le",
       "traceKey": "shangzhang",
       "traceInfo": [
        {
         "c": "上",
         "py": "shàng",
         "hv": "thượng"
        },
        {
         "c": "涨",
         "py": "zhǎng",
         "hv": "trướng"
        }
       ]
      },
      {
       "scene": "🛒📈👥",
       "full": "最近物价一直上涨因而很多人减少了购物",
       "vi": "Gần đây vật giá liên tục tăng, vì thế nhiều người giảm mua sắm",
       "parts": [
        {
         "t": "最近物价",
         "ico": "🛒",
         "c": "s",
         "py": "zuìjìn wùjià",
         "hv": "tối cận vật giá"
        },
        {
         "t": "一直上涨",
         "ico": "📈",
         "c": "v",
         "py": "yīzhí shàngzhǎng",
         "hv": "nhất trực thượng trướng"
        },
        {
         "t": "因而很多人减少了购物",
         "ico": "👥",
         "c": "o",
         "py": "yīn'ér hěn duō rén jiǎnshǎo le gòuwù",
         "hv": "nhân nhi ngận đa nhân giảm thiểu liễu cấu vật"
        }
       ],
       "traceWord": "物价",
       "py": "Zuìjìn wùjià yīzhí shàngzhǎng yīn'ér hěn duō rén jiǎnshǎo le gòuwù",
       "traceKey": "wujia",
       "traceInfo": [
        {
         "c": "物",
         "py": "wù",
         "hv": "vật"
        },
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        }
       ]
      },
      {
       "scene": "📦🏢🛍️",
       "full": "这家公司改进了产品包装和商标因而吸引了更多顾客",
       "vi": "Công ty này cải tiến bao bì và nhãn hiệu sản phẩm, vì thế thu hút thêm nhiều khách hàng",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "giá gia công ti"
        },
        {
         "t": "改进了产品包装和商标",
         "ico": "📦",
         "c": "v",
         "py": "gǎijìn le chǎnpǐn bāozhuāng hé shāngbiāo",
         "hv": "cải tiến liễu sản phẩm bao trang hòa thương tiêu"
        },
        {
         "t": "因而吸引了更多顾客",
         "ico": "🛍️",
         "c": "o",
         "py": "yīn'ér xīyǐn le gèng duō gùkè",
         "hv": "nhân nhi hấp dẫn liễu cánh đa cố khách"
        }
       ],
       "traceWord": "包装",
       "py": "Zhè jiā gōngsī gǎijìn le chǎnpǐn bāozhuāng hé shāngbiāo yīn'ér xīyǐn le gèng duō gùkè",
       "traceKey": "baozhuang",
       "traceInfo": [
        {
         "c": "包",
         "py": "bāo",
         "hv": "bao"
        },
        {
         "c": "装",
         "py": "zhuāng",
         "hv": "trang"
        }
       ]
      },
      {
       "scene": "🤝🗣️✅",
       "full": "采购经理谈得很顺利因而今天上午就成交了",
       "vi": "Giám đốc thu mua đàm phán rất thuận lợi, vì thế sáng nay đã chốt xong giao dịch",
       "parts": [
        {
         "t": "采购经理",
         "ico": "👔",
         "c": "s",
         "py": "cǎigòu jīnglǐ",
         "hv": "thái cấu kinh lý"
        },
        {
         "t": "谈得很顺利",
         "ico": "🗣️",
         "c": "v",
         "py": "tán de hěn shùnlì",
         "hv": "đàm đắc ngận thuận lợi"
        },
        {
         "t": "因而今天上午就成交了",
         "ico": "✅",
         "c": "o",
         "py": "yīn'ér jīntiān shàngwǔ jiù chéngjiāo le",
         "hv": "nhân nhi kim thiên thượng ngọ tựu thành giao liễu"
        }
       ],
       "traceWord": "采购",
       "py": "Cǎigòu jīnglǐ tán de hěn shùnlì yīn'ér jīntiān shàngwǔ jiù chéngjiāo le",
       "traceKey": "caigou",
       "traceInfo": [
        {
         "c": "采",
         "py": "cǎi",
         "hv": "thái"
        },
        {
         "c": "购",
         "py": "gòu",
         "hv": "cấu"
        }
       ]
      },
      {
       "scene": "💼💰📊",
       "full": "这笔买卖的利润很高因而不少商人都想做",
       "vi": "Phi vụ làm ăn này lợi nhuận rất cao, vì thế không ít thương nhân đều muốn làm",
       "parts": [
        {
         "t": "这笔买卖",
         "ico": "💼",
         "c": "s",
         "py": "zhè bǐ mǎimai",
         "hv": "giá bút mãi mại"
        },
        {
         "t": "的利润很高",
         "ico": "💰",
         "c": "v",
         "py": "de lìrùn hěn gāo",
         "hv": "đích lợi nhuận ngận cao"
        },
        {
         "t": "因而不少商人都想做",
         "ico": "🧑‍💼",
         "c": "o",
         "py": "yīn'ér bù shǎo shāngrén dōu xiǎng zuò",
         "hv": "nhân nhi bất thiểu thương nhân đô tưởng tố"
        }
       ],
       "traceWord": "利润",
       "py": "Zhè bǐ mǎimai de lìrùn hěn gāo yīn'ér bù shǎo shāngrén dōu xiǎng zuò",
       "traceKey": "lirun",
       "traceInfo": [
        {
         "c": "利",
         "py": "lì",
         "hv": "lợi"
        },
        {
         "c": "润",
         "py": "rùn",
         "hv": "nhuận"
        }
       ]
      },
      {
       "scene": "🌐🚢🏭",
       "full": "两国的贸易不断发展因而带动了相关产业的增长",
       "vi": "Thương mại hai nước không ngừng phát triển, vì thế thúc đẩy sự tăng trưởng của các ngành liên quan",
       "parts": [
        {
         "t": "两国的贸易",
         "ico": "🌐",
         "c": "s",
         "py": "liǎng guó de màoyì",
         "hv": "lưỡng quốc đích mậu dị"
        },
        {
         "t": "不断发展",
         "ico": "🚢",
         "c": "v",
         "py": "bùduàn fāzhǎn",
         "hv": "bất đoạn phát triển"
        },
        {
         "t": "因而带动了相关产业的增长",
         "ico": "🏭",
         "c": "o",
         "py": "yīn'ér dàidòng le xiāngguān chǎnyè de zēngzhǎng",
         "hv": "nhân nhi đới động liễu tương quan sản nghiệp đích tăng trưởng"
        }
       ],
       "traceWord": "贸易",
       "py": "Liǎng guó de màoyì bùduàn fāzhǎn yīn'ér dàidòng le xiāngguān chǎnyè de zēngzhǎng",
       "traceKey": "maoyi",
       "traceInfo": [
        {
         "c": "贸",
         "py": "mào",
         "hv": "mậu"
        },
        {
         "c": "易",
         "py": "yì",
         "hv": "dị"
        }
       ]
      },
      {
       "scene": "🏭🏷️📉",
       "full": "公司收购了几家小工厂因而生产成本下降成效很明显",
       "vi": "Công ty mua lại vài xưởng nhỏ, vì thế chi phí sản xuất giảm và hiệu quả rất rõ rệt",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "收购了几家小工厂",
         "ico": "🏭",
         "c": "v",
         "py": "shōugòu le jǐ jiā xiǎo gōngchǎng",
         "hv": "thu cấu liễu kỷ gia tiểu công xưởng"
        },
        {
         "t": "因而生产成本下降成效很明显",
         "ico": "📉",
         "c": "o",
         "py": "yīn'ér shēngchǎn chéngběn xiàjiàng chéngxiào hěn míngxiǎn",
         "hv": "nhân nhi sinh sản thành bản hạ giáng thành hiệu ngận minh hiển"
        }
       ],
       "traceWord": "收购",
       "py": "Gōngsī shōugòu le jǐ jiā xiǎo gōngchǎng yīn'ér shēngchǎn chéngběn xiàjiàng chéngxiào hěn míngxiǎn",
       "traceKey": "shougou",
       "traceInfo": [
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        },
        {
         "c": "购",
         "py": "gòu",
         "hv": "cấu"
        }
       ]
      },
      {
       "scene": "🏘️💸😠",
       "full": "小区的物业最近涨价因而居民都很不满意",
       "vi": "Ban quản lý khu dân cư gần đây tăng phí, vì thế cư dân đều rất không hài lòng",
       "parts": [
        {
         "t": "小区的物业",
         "ico": "🏘️",
         "c": "s",
         "py": "xiǎo qū de wùyè",
         "hv": "tiểu khu đích vật nghiệp"
        },
        {
         "t": "最近涨价",
         "ico": "💸",
         "c": "v",
         "py": "zuìjìn zhǎngjià",
         "hv": "tối cận trướng giá"
        },
        {
         "t": "因而居民都很不满意",
         "ico": "😠",
         "c": "o",
         "py": "yīn'ér jūmín dōu hěn bù mǎnyì",
         "hv": "nhân nhi cư dân đô ngận bất mãn ý"
        }
       ],
       "traceWord": "涨价",
       "py": "Xiǎo qū de wùyè zuìjìn zhǎngjià yīn'ér jūmín dōu hěn bù mǎnyì",
       "traceKey": "zhangjia",
       "traceInfo": [
        {
         "c": "涨",
         "py": "zhǎng",
         "hv": "trướng"
        },
        {
         "c": "价",
         "py": "jià",
         "hv": "giá"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "为什么这个月的成本提高了？",
       "qvi": "Tại sao chi phí tháng này tăng?",
       "scene": "💰📈",
       "ans": "原料价格涨了因而成本提高了",
       "opts": [
        {
         "txt": "因为我们明天去旅游",
         "ico": "💬",
         "py": "Yīnwèi wǒmen míngtiān qù lǚyóu"
        },
        {
         "txt": "原料价格涨了因而成本提高了",
         "ico": "✅",
         "py": "Yuánliào jiàgé zhǎng le yīn'ér chéngběn tígāo le"
        },
        {
         "txt": "这家饭馆的饭很好吃",
         "ico": "💬",
         "py": "Zhè jiā fànguǎn de fàn hěn hǎochī"
        }
       ],
       "qpy": "Wèi shénme zhè gè yuè de chéngběn tígāo le?"
      },
      {
       "q": "你们公司做什么生意？",
       "qvi": "Công ty các bạn kinh doanh gì?",
       "scene": "🏢💼",
       "ans": "我们做农产品贸易",
       "opts": [
        {
         "txt": "我们公司在北京的东边",
         "ico": "💬",
         "py": "Wǒmen gōngsī zài Běijīng de dōngbian"
        },
        {
         "txt": "我们做农产品贸易",
         "ico": "✅",
         "py": "Wǒmen zuò nóngchǎnpǐn màoyì"
        },
        {
         "txt": "我们昨天开了一个会",
         "ico": "💬",
         "py": "Wǒmen zuótiān kāi le yī gè huì"
        }
       ],
       "qpy": "Nǐmen gōngsī zuò shénme shēngyi?"
      },
      {
       "q": "这个商标是谁设计的？",
       "qvi": "Nhãn hiệu này do ai thiết kế?",
       "scene": "🏷️🎨",
       "ans": "是一位有名的画家设计的",
       "opts": [
        {
         "txt": "那家店明天不营业",
         "ico": "💬",
         "py": "Nà jiā diàn míngtiān bù yíngyè"
        },
        {
         "txt": "我很喜欢这个星期天",
         "ico": "💬",
         "py": "Wǒ hěn xǐhuan zhè gè xīngqītiān"
        },
        {
         "txt": "是一位有名的画家设计的",
         "ico": "✅",
         "py": "Shì yī wèi yǒumíng de huàjiā shèjì de"
        }
       ],
       "qpy": "Zhè gè shāngbiāo shì shéi shèjì de?"
      },
      {
       "q": "这批货的包装怎么样？",
       "qvi": "Bao bì lô hàng này thế nào?",
       "scene": "📦👍",
       "ans": "包装很好因而很快就成交了",
       "opts": [
        {
         "txt": "今天的天气非常冷",
         "ico": "💬",
         "py": "Jīntiān de tiānqì fēicháng lěng"
        },
        {
         "txt": "包装很好因而很快就成交了",
         "ico": "✅",
         "py": "Bāozhuāng hěn hǎo yīn'ér hěn kuài jiù chéngjiāo le"
        },
        {
         "txt": "我想去学校门口",
         "ico": "💬",
         "py": "Wǒ xiǎng qù xuéxiào ménkǒu"
        }
       ],
       "qpy": "Zhè pī huò de bāozhuāng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo tình hình giá cả với sếp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin báo sếp một thay đổi giá gần đây ở chỗ bạn, ví dụ <i>\"最近物价一直上涨，因而很多人减少了购物\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu nguyên nhân–kết quả về công việc kinh doanh hoặc mua sắm, dùng 因而 ở vế sau, ví dụ <i>\"这笔买卖的利润很高，因而不少商人都想做\"</i>.",
       "<b>Bước 3:</b> Gọi điện hoặc ghi âm báo cáo ngắn cho đối tác về một đợt tăng giá, nêu rõ hệ quả, ví dụ <i>\"小区的物业最近涨价，因而居民都很不满意\"</i>."
      ]
     }
    },
    {
     "id": "5.17C",
     "name": "Bài 5.17C: Giáo dục và học thuật — 即使……也",
     "grammar": {
      "formulas": [
       "🌧️ 即使 + 😟 困难",
       "💪 也 + ✅ 还是要做"
      ],
      "tip": "<b>即使</b> (jíshǐ, tức sử) = \"cho dù, dù có\", đưa ra một giả thiết nhượng bộ; vế sau có <b>也</b> (yě) nêu kết quả vẫn không đổi. Mẫu: 即使 + giả thiết，(主语) + 也 + kết quả.",
      "vn_tip": "Người Việt hay nói 即使……但是…… hoặc quên 也 ở vế sau. Đúng phải là 即使……，也……, ví dụ 即使很辛苦，我也想读博士. Đừng dùng 就 thay cho 也, và 也 phải đứng sau chủ ngữ, trước động từ."
     },
     "chunks": [
      {
       "scene": "🧠📚💪",
       "full": "即使你很聪明也要勤奋学习",
       "vi": "Dù bạn rất thông minh cũng phải chăm chỉ học tập",
       "parts": [
        {
         "t": "即使你很聪明",
         "ico": "🧠",
         "c": "s",
         "py": "jíshǐ nǐ hěn cōngmíng",
         "hv": "tức sử nễ ngận thông minh"
        },
        {
         "t": "也要",
         "ico": "💪",
         "c": "v",
         "py": "yě yào",
         "hv": "dã yếu"
        },
        {
         "t": "勤奋学习",
         "ico": "📚",
         "c": "o",
         "py": "qínfèn xuéxí",
         "hv": "cần phấn học tập"
        }
       ],
       "traceWord": "勤奋",
       "py": "Jíshǐ nǐ hěn cōngmíng yě yào qínfèn xuéxí",
       "traceKey": "qinfen",
       "traceInfo": [
        {
         "c": "勤",
         "py": "qín",
         "hv": "cần"
        },
        {
         "c": "奋",
         "py": "fèn",
         "hv": "phấn"
        }
       ]
      },
      {
       "scene": "🌟🎓📖",
       "full": "即使是天才也不可能不学习就拿到博士学位",
       "vi": "Dù là thiên tài cũng không thể không học mà lấy được học vị tiến sĩ",
       "parts": [
        {
         "t": "即使是天才",
         "ico": "🌟",
         "c": "s",
         "py": "jíshǐ shì tiāncái",
         "hv": "tức sử thị thiên tài"
        },
        {
         "t": "也不可能",
         "ico": "🚫",
         "c": "v",
         "py": "yě bù kěnéng",
         "hv": "dã bất khả năng"
        },
        {
         "t": "不学习就拿到博士学位",
         "ico": "🎓",
         "c": "o",
         "py": "bù xuéxí jiù nádào bóshì xuéwèi",
         "hv": "bất học tập tựu nã đáo bác sĩ học vị"
        }
       ],
       "traceWord": "天才",
       "py": "Jíshǐ shì tiāncái yě bù kěnéng bù xuéxí jiù nádào bóshì xuéwèi",
       "traceKey": "tiancai",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "c": "才",
         "py": "cái",
         "hv": "tài"
        }
       ]
      },
      {
       "scene": "📜🎓📚",
       "full": "即使已经拿到硕士证书也要继续学习新知识",
       "vi": "Dù đã lấy được chứng chỉ thạc sĩ cũng phải tiếp tục học kiến thức mới",
       "parts": [
        {
         "t": "即使已经拿到硕士证书",
         "ico": "📜",
         "c": "s",
         "py": "jíshǐ yǐjīng nádào shuòshì zhèngshū",
         "hv": "tức sử dĩ kinh nã đáo thạc sĩ chứng thư"
        },
        {
         "t": "也要继续学习",
         "ico": "📚",
         "c": "v",
         "py": "yě yào jìxù xuéxí",
         "hv": "dã yếu kế tục học tập"
        },
        {
         "t": "新知识",
         "ico": "💡",
         "c": "o",
         "py": "xīn zhīshi",
         "hv": "tân tri thức"
        }
       ],
       "traceWord": "硕士",
       "py": "Jíshǐ yǐjīng nádào shuòshì zhèngshū yě yào jìxù xuéxí xīn zhīshi",
       "traceKey": "shuoshi",
       "traceInfo": [
        {
         "c": "硕",
         "py": "shuò",
         "hv": "thạc"
        },
        {
         "c": "士",
         "py": "shì",
         "hv": "sĩ"
        }
       ]
      },
      {
       "scene": "📘🔄🧑‍🎓",
       "full": "即使不是你的专业也可以选修其他学科",
       "vi": "Dù không phải chuyên ngành của bạn cũng có thể học tự chọn các môn khác",
       "parts": [
        {
         "t": "即使不是你的专业",
         "ico": "📘",
         "c": "s",
         "py": "jíshǐ bú shì nǐ de zhuānyè",
         "hv": "tức sử bất thị nễ đích chuyên nghiệp"
        },
        {
         "t": "也可以选修",
         "ico": "✅",
         "c": "v",
         "py": "yě kěyǐ xuǎnxiū",
         "hv": "dã khả dĩ tuyển tu"
        },
        {
         "t": "其他学科",
         "ico": "🔬",
         "c": "o",
         "py": "qítā xuékē",
         "hv": "kỳ tha học khoa"
        }
       ],
       "traceWord": "选修",
       "py": "Jíshǐ bú shì nǐ de zhuānyè yě kěyǐ xuǎnxiū qítā xuékē",
       "traceKey": "xuanxiu",
       "traceInfo": [
        {
         "c": "选",
         "py": "xuǎn",
         "hv": "tuyển"
        },
        {
         "c": "修",
         "py": "xiū",
         "hv": "tu"
        }
       ]
      },
      {
       "scene": "🏫📝📋",
       "full": "即使学校今年扩大招生也要按照教学大纲上课",
       "vi": "Dù năm nay trường mở rộng tuyển sinh cũng phải lên lớp theo đề cương giảng dạy",
       "parts": [
        {
         "t": "即使学校今年扩大招生",
         "ico": "🏫",
         "c": "s",
         "py": "jíshǐ xuéxiào jīnnián kuòdà zhāoshēng",
         "hv": "tức sử học hiệu kim niên khuếch đại chiêu sinh"
        },
        {
         "t": "也要按照",
         "ico": "📋",
         "c": "v",
         "py": "yě yào ànzhào",
         "hv": "dã yếu án chiếu"
        },
        {
         "t": "教学大纲上课",
         "ico": "👩‍🏫",
         "c": "o",
         "py": "jiàoxué dàgāng shàngkè",
         "hv": "giáo học đại cương thượng khóa"
        }
       ],
       "traceWord": "招生",
       "py": "Jíshǐ xuéxiào jīnnián kuòdà zhāoshēng yě yào ànzhào jiàoxué dàgāng shàngkè",
       "traceKey": "zhaosheng",
       "traceInfo": [
        {
         "c": "招",
         "py": "zhāo",
         "hv": "chiêu"
        },
        {
         "c": "生",
         "py": "shēng",
         "hv": "sinh"
        }
       ]
      },
      {
       "scene": "🔬👨‍🔬🤔",
       "full": "即使研究所的课题非常难也有年轻学者愿意参加",
       "vi": "Dù đề tài của viện nghiên cứu rất khó cũng có học giả trẻ sẵn lòng tham gia",
       "parts": [
        {
         "t": "即使研究所的课题非常难",
         "ico": "🔬",
         "c": "s",
         "py": "jíshǐ yánjiūsuǒ de kètí fēicháng nán",
         "hv": "tức sử nghiên cứu sở đích khóa đề phi thường nan"
        },
        {
         "t": "也有",
         "ico": "🙋",
         "c": "v",
         "py": "yě yǒu",
         "hv": "dã hữu"
        },
        {
         "t": "年轻学者愿意参加",
         "ico": "👨‍🔬",
         "c": "o",
         "py": "niánqīng xuézhě yuànyì cānjiā",
         "hv": "niên khinh học giả nguyện ý tham gia"
        }
       ],
       "traceWord": "课题",
       "py": "Jíshǐ yánjiūsuǒ de kètí fēicháng nán yě yǒu niánqīng xuézhě yuànyì cānjiā",
       "traceKey": "keti",
       "traceInfo": [
        {
         "c": "课",
         "py": "kè",
         "hv": "khóa"
        },
        {
         "c": "题",
         "py": "tí",
         "hv": "đề"
        }
       ]
      },
      {
       "scene": "📖💡🔁",
       "full": "即使已经读过很多遍这本书也能给我新的启发",
       "vi": "Dù đã đọc cuốn sách này rất nhiều lần cũng vẫn cho tôi gợi ý mới",
       "parts": [
        {
         "t": "即使已经读过很多遍这本书",
         "ico": "📖",
         "c": "s",
         "py": "jíshǐ yǐjīng dú guò hěn duō biàn zhè běn shū",
         "hv": "tức sử dĩ kinh độc quá ngận đa biến giá bản thư"
        },
        {
         "t": "也能给我",
         "ico": "🎁",
         "c": "v",
         "py": "yě néng gěi wǒ",
         "hv": "dã năng cấp ngã"
        },
        {
         "t": "新的启发",
         "ico": "💡",
         "c": "o",
         "py": "xīn de qǐfā",
         "hv": "tân đích khải phát"
        }
       ],
       "traceWord": "启发",
       "py": "Jíshǐ yǐjīng dú guò hěn duō biàn zhè běn shū yě néng gěi wǒ xīn de qǐfā",
       "traceKey": "qifa",
       "traceInfo": [
        {
         "c": "启",
         "py": "qǐ",
         "hv": "khải"
        },
        {
         "c": "发",
         "py": "fā",
         "hv": "phát"
        }
       ]
      },
      {
       "scene": "📚🪑🏫",
       "full": "即使考试前阅览室的座位很少也有不少学生坚持去看书",
       "vi": "Dù trước kỳ thi chỗ ngồi ở phòng đọc rất ít, cũng có không ít sinh viên kiên trì đến đọc sách",
       "parts": [
        {
         "t": "即使考试前阅览室的座位很少",
         "ico": "📚",
         "c": "s",
         "py": "jíshǐ kǎoshì qián yuèlǎnshì de zuòwèi hěn shǎo",
         "hv": "tức sử khảo thí tiền duyệt lãm thất đích tọa vị ngận thiểu"
        },
        {
         "t": "也有",
         "ico": "🙋",
         "c": "v",
         "py": "yě yǒu",
         "hv": "dã hữu"
        },
        {
         "t": "不少学生坚持去看书",
         "ico": "🧑‍🎓",
         "c": "o",
         "py": "bù shǎo xuéshēng jiānchí qù kàn shū",
         "hv": "bất thiểu học sinh kiên trì khứ khán thư"
        }
       ],
       "traceWord": "阅览室",
       "py": "Jíshǐ kǎoshì qián yuèlǎnshì de zuòwèi hěn shǎo yě yǒu bù shǎo xuéshēng jiānchí qù kàn shū",
       "traceKey": "yuelanshi",
       "traceInfo": [
        {
         "c": "阅",
         "py": "yuè",
         "hv": "duyệt"
        },
        {
         "c": "览",
         "py": "lǎn",
         "hv": "lãm"
        },
        {
         "c": "室",
         "py": "shì",
         "hv": "thất"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你想读博士吗？",
       "qvi": "Bạn có muốn học tiến sĩ không?",
       "scene": "🎓🤔",
       "ans": "即使很辛苦我也想读",
       "opts": [
        {
         "txt": "我昨天买了一件新衣服",
         "ico": "💬",
         "py": "Wǒ zuótiān mǎi le yī jiàn xīn yīfu"
        },
        {
         "txt": "即使很辛苦我也想读",
         "ico": "✅",
         "py": "Jíshǐ hěn xīnkǔ wǒ yě xiǎng dú"
        },
        {
         "txt": "我喜欢吃面包",
         "ico": "💬",
         "py": "Wǒ xǐhuan chī miànbāo"
        }
       ],
       "qpy": "Nǐ xiǎng dú bóshì ma?"
      },
      {
       "q": "听说你要去研究所工作，对吗？",
       "qvi": "Nghe nói bạn sắp đến viện nghiên cứu làm việc, đúng không?",
       "scene": "🔬💼",
       "ans": "即使工资不高我也愿意去",
       "opts": [
        {
         "txt": "研究所在学校的东边",
         "ico": "💬",
         "py": "Yánjiū suǒzài xuéxiào de dōngbian"
        },
        {
         "txt": "我不想吃午饭",
         "ico": "💬",
         "py": "Wǒ bù xiǎng chī wǔfàn"
        },
        {
         "txt": "即使工资不高我也愿意去",
         "ico": "✅",
         "py": "Jíshǐ gōngzī bù gāo wǒ yě yuànyì qù"
        }
       ],
       "qpy": "Tīngshuō nǐ yào qù yánjiūsuǒ gōngzuò duì ma?"
      },
      {
       "q": "这个学科的招生条件是什么？",
       "qvi": "Điều kiện tuyển sinh ngành này là gì?",
       "scene": "📝🔬",
       "ans": "即使成绩不错也要参加面试",
       "opts": [
        {
         "txt": "即使成绩不错也要参加面试",
         "ico": "✅",
         "py": "Jíshǐ chéngjì bùcuò yě yào cānjiā miànshì"
        },
        {
         "txt": "这个学科在三楼",
         "ico": "💬",
         "py": "Zhè gè xuékē zài sān lóu"
        },
        {
         "txt": "我们明天坐飞机去上海",
         "ico": "💬",
         "py": "Wǒmen míngtiān zuò fēijī qù Shànghǎi"
        }
       ],
       "qpy": "Zhè gè xuékē de zhāoshēng tiáojiàn shì shénme?"
      },
      {
       "q": "他是天才吗？",
       "qvi": "Anh ấy là thiên tài à?",
       "scene": "🌟🧑‍🎓",
       "ans": "他不是天才但是非常勤奋",
       "opts": [
        {
         "txt": "他明天要去北京",
         "ico": "💬",
         "py": "Tā míngtiān yào qù Běijīng"
        },
        {
         "txt": "他不是天才但是非常勤奋",
         "ico": "✅",
         "py": "Tā bú shì tiāncái dànshì fēicháng qínfèn"
        },
        {
         "txt": "他的车是红色的",
         "ico": "💬",
         "py": "Tā de chē shì hóngsè de"
        }
       ],
       "qpy": "Tā shì tiāncái ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói về kế hoạch học lên cao",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho bạn bè hoặc đồng nghiệp về ý định học thêm (chứng chỉ, thạc sĩ…), ví dụ <i>\"即使已经拿到硕士证书，也要继续学习新知识\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu \"dù… cũng…\" về việc học của bạn, ví dụ <i>\"即使你很聪明，也要勤奋学习\"</i>.",
       "<b>Bước 3:</b> Hỏi một người quen về ngành hoặc viện nghiên cứu họ biết, rồi đáp lại bằng 即使……，也……, ví dụ <i>\"即使工资不高，我也愿意去\"</i>."
      ]
     }
    }
   ]
  },
  "5.18": {
   "lessons": [
    {
     "id": "5.18A",
     "name": "Bài 5.18A: Triển lãm và lễ khai mạc",
     "grammar": {
      "formulas": [
       "🏢 公司 + 🎪 举办开幕式 + 🎯 为的是 + 📦 展示新产品",
       "🧑 我们 + 🏛️ 参加博览会 + 🎯 为的是 + 🔍 了解新的品种"
      ],
      "tip": "Cấu trúc ……，为的是…… (wèi de shì, \"để mà…, nhằm mục đích…\"): vế trước nêu hành động, vế sau sau 为的是 nêu MỤC ĐÍCH của hành động đó. Thường có dấu phẩy ở giữa; vế sau thường là động từ + tân ngữ.",
      "vn_tip": "Người Việt hay dịch \"để\" thành 为了 rồi đặt ở vế sau, hoặc nói \"为的是\" mà quên vế trước. Đúng: vế hành động đứng TRƯỚC, 为的是 + mục đích đứng SAU. Còn 为了 + mục đích thường đứng ĐẦU câu: 为了展示新产品，公司举办开幕式。"
     },
     "chunks": [
      {
       "scene": "🏢🎪📦",
       "full": "公司举办开幕式为的是展示新产品",
       "vi": "Công ty tổ chức lễ khai mạc là để trưng bày sản phẩm mới",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "举办开幕式",
         "ico": "🎪",
         "c": "v",
         "py": "jǔbàn kāimùshì",
         "hv": "cử biện khai mạc thức"
        },
        {
         "t": "为的是展示新产品",
         "ico": "📦",
         "c": "o",
         "py": "wèi de shì zhǎnshì xīn chǎnpǐn",
         "hv": "vị đích thị triển thị tân sản phẩm"
        }
       ],
       "traceWord": "开幕式",
       "py": "Gōngsī jǔbàn kāimùshì wèi de shì zhǎnshì xīn chǎnpǐn",
       "traceKey": "kaimushi",
       "traceInfo": [
        {
         "c": "开",
         "py": "kāi",
         "hv": "khai"
        },
        {
         "c": "幕",
         "py": "mù",
         "hv": "mạc"
        },
        {
         "c": "式",
         "py": "shì",
         "hv": "thức"
        }
       ]
      },
      {
       "scene": "🧑🎪🔍",
       "full": "我们参加这次博览会为的是了解新的品种",
       "vi": "Chúng tôi tham dự hội chợ lần này là để tìm hiểu các chủng loại mới",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "参加这次博览会",
         "ico": "🎪",
         "c": "v",
         "py": "cānjiā zhè cì bólǎnhuì",
         "hv": "tham gia giá thứ bác lãm hội"
        },
        {
         "t": "为的是了解新的品种",
         "ico": "🔍",
         "c": "o",
         "py": "wèi de shì liǎojiě xīn de pǐnzhǒng",
         "hv": "vị đích thị liễu giải tân đích phẩm chủng"
        }
       ],
       "traceWord": "品种",
       "py": "Wǒmen cānjiā zhè cì bólǎnhuì wèi de shì liǎojiě xīn de pǐnzhǒng",
       "traceKey": "pinzhong",
       "traceInfo": [
        {
         "c": "品",
         "py": "pǐn",
         "hv": "phẩm"
        },
        {
         "c": "种",
         "py": "zhǒng",
         "hv": "chủng"
        }
       ]
      },
      {
       "scene": "🧑🏛️🗣️",
       "full": "他们在博物馆开会为的是讨论展览的计划",
       "vi": "Họ họp ở bảo tàng là để bàn kế hoạch triển lãm",
       "parts": [
        {
         "t": "他们",
         "ico": "🧑",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "在博物馆开会",
         "ico": "🏛️",
         "c": "v",
         "py": "zài bówùguǎn kāihuì",
         "hv": "tại bác vật quán khai hội"
        },
        {
         "t": "为的是讨论展览的计划",
         "ico": "🗣️",
         "c": "o",
         "py": "wèi de shì tǎolùn zhǎnlǎn de jìhuà",
         "hv": "vị đích thị thảo luận triển lãm đích kế hoạch"
        }
       ],
       "traceWord": "博物馆",
       "py": "Tāmen zài bówùguǎn kāihuì wèi de shì tǎolùn zhǎnlǎn de jìhuà",
       "traceKey": "bowuguan",
       "traceInfo": [
        {
         "c": "博",
         "py": "bó",
         "hv": "bác"
        },
        {
         "c": "物",
         "py": "wù",
         "hv": "vật"
        },
        {
         "c": "馆",
         "py": "guǎn",
         "hv": "quán"
        }
       ]
      },
      {
       "scene": "👔🎉🙏",
       "full": "老板请我们参加闭幕式为的是感谢大家的努力",
       "vi": "Sếp mời chúng tôi dự lễ bế mạc là để cảm ơn nỗ lực của mọi người",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão bản"
        },
        {
         "t": "请我们参加闭幕式",
         "ico": "🎉",
         "c": "v",
         "py": "qǐng wǒmen cānjiā bìmùshì",
         "hv": "thỉnh ngã môn tham gia bế mạc thức"
        },
        {
         "t": "为的是感谢大家的努力",
         "ico": "🙏",
         "c": "o",
         "py": "wèi de shì gǎnxiè dàjiā de nǔlì",
         "hv": "vị đích thị cảm tạ đại gia đích nỗ lực"
        }
       ],
       "traceWord": "闭幕式",
       "py": "Lǎobǎn qǐng wǒmen cānjiā bìmùshì wèi de shì gǎnxiè dàjiā de nǔlì",
       "traceKey": "bimushi",
       "traceInfo": [
        {
         "c": "闭",
         "py": "bì",
         "hv": "bế"
        },
        {
         "c": "幕",
         "py": "mù",
         "hv": "mạc"
        },
        {
         "c": "式",
         "py": "shì",
         "hv": "thức"
        }
       ]
      },
      {
       "scene": "🏛️🌸🌆",
       "full": "展览中心用漂亮的装饰为的是展现城市的风光",
       "vi": "Trung tâm triển lãm dùng đồ trang trí đẹp là để thể hiện phong cảnh của thành phố",
       "parts": [
        {
         "t": "展览中心",
         "ico": "🏛️",
         "c": "s",
         "py": "zhǎnlǎn zhōngxīn",
         "hv": "triển lãm trung tâm"
        },
        {
         "t": "用漂亮的装饰",
         "ico": "🌸",
         "c": "v",
         "py": "yòng piàoliang de zhuāngshì",
         "hv": "dụng phiêu lượng đích trang sức"
        },
        {
         "t": "为的是展现城市的风光",
         "ico": "🌆",
         "c": "o",
         "py": "wèi de shì zhǎnxiàn chéngshì de fēngguāng",
         "hv": "vị đích thị triển hiện thành thị đích phong quang"
        }
       ],
       "traceWord": "风光",
       "py": "Zhǎnlǎn zhōngxīn yòng piàoliang de zhuāngshì wèi de shì zhǎnxiàn chéngshì de fēngguāng",
       "traceKey": "fengguang",
       "traceInfo": [
        {
         "c": "风",
         "py": "fēng",
         "hv": "phong"
        },
        {
         "c": "光",
         "py": "guāng",
         "hv": "quang"
        }
       ]
      },
      {
       "scene": "👔🎊😊",
       "full": "经理在开幕典礼上特别注意风度为的是给客户留下好印象",
       "vi": "Giám đốc đặc biệt chú ý phong thái trong lễ khai mạc là để để lại ấn tượng tốt cho khách hàng",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lý"
        },
        {
         "t": "在开幕典礼上特别注意风度",
         "ico": "🎊",
         "c": "v",
         "py": "zài kāimù diǎnlǐ shàng tèbié zhùyì fēngdù",
         "hv": "tại khai mạc điển lễ thượng đặc biệt chú ý phong độ"
        },
        {
         "t": "为的是给客户留下好印象",
         "ico": "😊",
         "c": "o",
         "py": "wèi de shì gěi kèhù liúxia hǎo yìnxiàng",
         "hv": "vị đích thị cấp khách hộ lưu hạ hảo ấn tượng"
        }
       ],
       "traceWord": "典礼",
       "py": "Jīnglǐ zài kāimù diǎnlǐ shàng tèbié zhùyì fēngdù wèi de shì gěi kèhù liúxia hǎo yìnxiàng",
       "traceKey": "dianli",
       "traceInfo": [
        {
         "c": "典",
         "py": "diǎn",
         "hv": "điển"
        },
        {
         "c": "礼",
         "py": "lǐ",
         "hv": "lễ"
        }
       ]
      },
      {
       "scene": "🧑🏺🏢",
       "full": "我们买了几件工艺品为的是装饰新办公室",
       "vi": "Chúng tôi mua vài món đồ thủ công mỹ nghệ là để trang trí văn phòng mới",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "买了几件工艺品",
         "ico": "🏺",
         "c": "v",
         "py": "mǎi le jǐ jiàn gōngyì pǐn",
         "hv": "mãi liễu kỷ kiện công nghệ phẩm"
        },
        {
         "t": "为的是装饰新办公室",
         "ico": "🏢",
         "c": "o",
         "py": "wèi de shì zhuāngshì xīn bàngōngshì",
         "hv": "vị đích thị trang sức tân biện công thất"
        }
       ],
       "traceWord": "工艺",
       "py": "Wǒmen mǎi le jǐ jiàn gōngyì pǐn wèi de shì zhuāngshì xīn bàngōngshì",
       "traceKey": "gongyi",
       "traceInfo": [
        {
         "c": "工",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "艺",
         "py": "yì",
         "hv": "nghệ"
        }
       ]
      },
      {
       "scene": "🎪📅📦",
       "full": "博览会下周闭幕大家加班为的是顺利展示新产品",
       "vi": "Hội chợ tuần sau bế mạc, mọi người tăng ca là để trưng bày sản phẩm mới thuận lợi",
       "parts": [
        {
         "t": "博览会下周闭幕",
         "ico": "🎪",
         "c": "s",
         "py": "bólǎnhuì xià zhōu bìmù",
         "hv": "bác lãm hội hạ chu bế mạc"
        },
        {
         "t": "大家加班",
         "ico": "🌙",
         "c": "v",
         "py": "dàjiā jiābān",
         "hv": "đại gia gia ban"
        },
        {
         "t": "为的是顺利展示新产品",
         "ico": "📦",
         "c": "o",
         "py": "wèi de shì shùnlì zhǎnshì xīn chǎnpǐn",
         "hv": "vị đích thị thuận lợi triển thị tân sản phẩm"
        }
       ],
       "traceWord": "闭幕",
       "py": "Bólǎnhuì xià zhōu bìmù dàjiā jiābān wèi de shì shùnlì zhǎnshì xīn chǎnpǐn",
       "traceKey": "bimu",
       "traceInfo": [
        {
         "c": "闭",
         "py": "bì",
         "hv": "bế"
        },
        {
         "c": "幕",
         "py": "mù",
         "hv": "mạc"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你们为什么举办这次展览？",
       "qvi": "Tại sao các bạn tổ chức triển lãm lần này?",
       "scene": "🏛️📦",
       "ans": "为的是展示新产品",
       "opts": [
        {
         "txt": "为的是展示新产品",
         "ico": "📦",
         "py": "Wèi de shì zhǎnshì xīn chǎnpǐn"
        },
        {
         "txt": "他昨天去北京了",
         "ico": "✈️",
         "py": "Tā zuótiān qù Běijīng le"
        },
        {
         "txt": "那个工艺品很贵",
         "ico": "💰",
         "py": "Nà gè gōngyì pǐn hěn guì"
        }
       ],
       "qpy": "Nǐmen wèi shénme jǔbàn zhè cì zhǎnlǎn?"
      },
      {
       "q": "老板为什么请大家参加闭幕式？",
       "qvi": "Tại sao sếp mời mọi người dự lễ bế mạc?",
       "scene": "👔🎉",
       "ans": "为的是感谢大家",
       "opts": [
        {
         "txt": "我们坐飞机去",
         "ico": "✈️",
         "py": "Wǒmen zuò fēijī qù"
        },
        {
         "txt": "为的是感谢大家",
         "ico": "🙏",
         "py": "Wèi de shì gǎnxiè dàjiā"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Lǎobǎn wèi shénme qǐng dàjiā cānjiā bìmùshì?"
      },
      {
       "q": "他们为什么买了很多工艺品？",
       "qvi": "Tại sao họ mua nhiều đồ thủ công mỹ nghệ?",
       "scene": "🏺🛋️",
       "ans": "为的是装饰客厅",
       "opts": [
        {
         "txt": "因为明天下雨",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān xià yǔ"
        },
        {
         "txt": "他们在地铁站等人",
         "ico": "🚇",
         "py": "Tāmen zài dìtiězhàn děng rén"
        },
        {
         "txt": "为的是装饰客厅",
         "ico": "🛋️",
         "py": "Wèi de shì zhuāngshì kètīng"
        }
       ],
       "qpy": "Tāmen wèi shénme mǎi le hěn duō gōngyì pǐn?"
      },
      {
       "q": "这个博览会有什么特点？",
       "qvi": "Hội chợ này có đặc điểm gì?",
       "scene": "🎪✨",
       "ans": "品种很多",
       "opts": [
        {
         "txt": "我们坐飞机去",
         "ico": "✈️",
         "py": "Wǒmen zuò fēijī qù"
        },
        {
         "txt": "品种很多",
         "ico": "🧺",
         "py": "Pǐnzhǒng hěn duō"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Zhè gè bólǎnhuì yǒu shénme tèdiǎn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích lý do tham gia hội chợ",
      "steps": [
       "<b>Bước 1:</b> Tưởng tượng bạn vừa được sếp hỏi vì sao công ty tham gia một hội chợ. Tự nói thành tiếng: <i>\"我们参加这次博览会为的是了解新的品种。\"</i>",
       "<b>Bước 2:</b> Viết tin nhắn cho đồng nghiệp, giải thích mục đích của lễ khai mạc: <i>\"公司举办开幕式为的是展示新产品。\"</i> Thay phần sau 为的是 bằng mục đích thật của công ty bạn.",
       "<b>Bước 3:</b> Nói thêm 3 câu về một hoạt động ở cơ quan (họp, tăng ca, mua đồ trang trí) theo mẫu hành động + <i>为的是</i> + mục đích, rồi đọc to cho chính mình nghe."
      ]
     }
    },
    {
     "id": "5.18B",
     "name": "Bài 5.18B: Công nghệ thông tin",
     "grammar": {
      "formulas": [
       "🧑 你 + 📝 先注册 + 🎯 以便 + 💻 使用公司的软件",
       "🏢 公司 + 🔧 换了新的硬件 + 🎯 以便 + ⚡ 提高软件的性能"
      ],
      "tip": "Cấu trúc ……，以便…… (yǐbiàn, \"để tiện, để có thể…\"): vế trước là việc làm trước, vế sau sau 以便 là kết quả thuận tiện mà việc đó mang lại. 以便 nối hai vế, đứng ở ĐẦU vế sau, không đứng đầu cả câu.",
      "vn_tip": "Người Việt hay đặt \"以便\" ở đầu câu như \"để tiện\". Đúng: hành động trước, rồi mới 以便 + mục đích: 你先注册，以便使用软件。Ngoài ra 以便 chỉ nói mục đích có lợi, tiện lợi; không dùng cho mục đích xấu."
     },
     "chunks": [
      {
       "scene": "🧑📝💻",
       "full": "你先在网站上注册以便使用公司的软件",
       "vi": "Bạn đăng ký trên trang web trước để tiện dùng phần mềm của công ty",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "先在网站上注册",
         "ico": "📝",
         "c": "v",
         "py": "xiān zài wǎngzhàn shàng zhùcè",
         "hv": "tiên tại võng trạm thượng chú sách"
        },
        {
         "t": "以便使用公司的软件",
         "ico": "💻",
         "c": "o",
         "py": "yǐbiàn shǐyòng gōngsī de ruǎnjiàn",
         "hv": "dĩ tiện sử dụng công ti đích nhuyễn kiện"
        }
       ],
       "traceWord": "注册",
       "py": "Nǐ xiān zài wǎngzhàn shàng zhùcè yǐbiàn shǐyòng gōngsī de ruǎnjiàn",
       "traceKey": "zhuce",
       "traceInfo": [
        {
         "c": "注",
         "py": "zhù",
         "hv": "chú"
        },
        {
         "c": "册",
         "py": "cè",
         "hv": "sách"
        }
       ]
      },
      {
       "scene": "🧾📱🔍",
       "full": "客户发了一个二维码以便我们搜索产品信息",
       "vi": "Khách hàng gửi một mã QR để chúng tôi tiện tìm thông tin sản phẩm",
       "parts": [
        {
         "t": "客户",
         "ico": "🧾",
         "c": "s",
         "py": "kèhù",
         "hv": "khách hộ"
        },
        {
         "t": "发了一个二维码",
         "ico": "📱",
         "c": "v",
         "py": "fā le yī gè èrwéimǎ",
         "hv": "phát liễu nhất cá nhị duy mã"
        },
        {
         "t": "以便我们搜索产品信息",
         "ico": "🔍",
         "c": "o",
         "py": "yǐbiàn wǒmen sōusuǒ chǎnpǐn xìnxī",
         "hv": "dĩ tiện ngã môn sưu sách sản phẩm tín tức"
        }
       ],
       "traceWord": "二维码",
       "py": "Kèhù fā le yī gè èrwéimǎ yǐbiàn wǒmen sōusuǒ chǎnpǐn xìnxī",
       "traceKey": "erweima",
       "traceInfo": [
        {
         "c": "二",
         "py": "èr",
         "hv": "nhị"
        },
        {
         "c": "维",
         "py": "wéi",
         "hv": "duy"
        },
        {
         "c": "码",
         "py": "mǎ",
         "hv": "mã"
        }
       ]
      },
      {
       "scene": "🧑🔍🌐",
       "full": "你可以搜一下公司的名字以便找到我们的网站",
       "vi": "Bạn có thể tìm tên công ty để tiện tìm thấy trang web của chúng tôi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nễ"
        },
        {
         "t": "可以搜一下公司的名字",
         "ico": "🔍",
         "c": "v",
         "py": "kěyǐ sōu yī xià gōngsī de míngzi",
         "hv": "khả dĩ sưu nhất hạ công ti đích danh tự"
        },
        {
         "t": "以便找到我们的网站",
         "ico": "🌐",
         "c": "o",
         "py": "yǐbiàn zhǎodào wǒmen de wǎngzhàn",
         "hv": "dĩ tiện trảo đáo ngã môn đích võng trạm"
        }
       ],
       "traceWord": "搜",
       "py": "Nǐ kěyǐ sōu yī xià gōngsī de míngzi yǐbiàn zhǎodào wǒmen de wǎngzhàn",
       "traceKey": "sou",
       "traceInfo": [
        {
         "c": "搜",
         "py": "sōu",
         "hv": "sưu"
        }
       ]
      },
      {
       "scene": "👷🤖🔎",
       "full": "工程师先启动机器人以便检查它的运行情况",
       "vi": "Kỹ sư khởi động robot trước để tiện kiểm tra tình trạng vận hành của nó",
       "parts": [
        {
         "t": "工程师",
         "ico": "👷",
         "c": "s",
         "py": "gōngchéngshī",
         "hv": "công trình sư"
        },
        {
         "t": "先启动机器人",
         "ico": "🤖",
         "c": "v",
         "py": "xiān qǐdòng jīqìrén",
         "hv": "tiên khải động cơ khí nhân"
        },
        {
         "t": "以便检查它的运行情况",
         "ico": "🔎",
         "c": "o",
         "py": "yǐbiàn jiǎnchá tā de yùnxíng qíngkuàng",
         "hv": "dĩ tiện kiểm tra tha đích vận hành tình huống"
        }
       ],
       "traceWord": "启动",
       "py": "Gōngchéngshī xiān qǐdòng jīqìrén yǐbiàn jiǎnchá tā de yùnxíng qíngkuàng",
       "traceKey": "qidong",
       "traceInfo": [
        {
         "c": "启",
         "py": "qǐ",
         "hv": "khải"
        },
        {
         "c": "动",
         "py": "dòng",
         "hv": "động"
        }
       ]
      },
      {
       "scene": "🧑🛡️🦠",
       "full": "我们每周杀毒一次以便保护电脑不受病毒的影响",
       "vi": "Mỗi tuần chúng tôi diệt virus một lần để bảo vệ máy tính khỏi ảnh hưởng của virus",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "每周杀毒一次",
         "ico": "🛡️",
         "c": "v",
         "py": "měi zhōu shādú yī cì",
         "hv": "mỗi chu sát độc nhất thứ"
        },
        {
         "t": "以便保护电脑不受病毒的影响",
         "ico": "🦠",
         "c": "o",
         "py": "yǐbiàn bǎohù diànnǎo bú shòu bìngdú de yǐngxiǎng",
         "hv": "dĩ tiện bảo hộ điện não bất thụ bệnh độc đích ảnh hưởng"
        }
       ],
       "traceWord": "病毒",
       "py": "Wǒmen měi zhōu shādú yī cì yǐbiàn bǎohù diànnǎo bú shòu bìngdú de yǐngxiǎng",
       "traceKey": "bingdu",
       "traceInfo": [
        {
         "c": "病",
         "py": "bìng",
         "hv": "bệnh"
        },
        {
         "c": "毒",
         "py": "dú",
         "hv": "độc"
        }
       ]
      },
      {
       "scene": "🏢🖥️⚡",
       "full": "公司换了新的硬件以便提高软件的性能",
       "vi": "Công ty đổi phần cứng mới để nâng cao hiệu năng của phần mềm",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "换了新的硬件",
         "ico": "🖥️",
         "c": "v",
         "py": "huàn le xīn de yìngjiàn",
         "hv": "hoán liễu tân đích ngạnh kiện"
        },
        {
         "t": "以便提高软件的性能",
         "ico": "⚡",
         "c": "o",
         "py": "yǐbiàn tígāo ruǎnjiàn de xìngnéng",
         "hv": "dĩ tiện đề cao nhuyễn kiện đích tính năng"
        }
       ],
       "traceWord": "硬件",
       "py": "Gōngsī huàn le xīn de yìngjiàn yǐbiàn tígāo ruǎnjiàn de xìngnéng",
       "traceKey": "yingjian",
       "traceInfo": [
        {
         "c": "硬",
         "py": "yìng",
         "hv": "ngạnh"
        },
        {
         "c": "件",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "👨‍💼🔘🤖",
       "full": "员工按这个键以便让机器人开始运行",
       "vi": "Nhân viên nhấn phím này để robot bắt đầu chạy",
       "parts": [
        {
         "t": "员工",
         "ico": "👨‍💼",
         "c": "s",
         "py": "yuángōng",
         "hv": "viên công"
        },
        {
         "t": "按这个键",
         "ico": "🔘",
         "c": "v",
         "py": "àn zhè gè jiàn",
         "hv": "án giá cá kiện"
        },
        {
         "t": "以便让机器人开始运行",
         "ico": "🤖",
         "c": "o",
         "py": "yǐbiàn ràng jīqìrén kāishǐ yùnxíng",
         "hv": "dĩ tiện nhượng cơ khí nhân khai thủy vận hành"
        }
       ],
       "traceWord": "键",
       "py": "Yuángōng àn zhè gè jiàn yǐbiàn ràng jīqìrén kāishǐ yùnxíng",
       "traceKey": "jian",
       "traceInfo": [
        {
         "c": "键",
         "py": "jiàn",
         "hv": "kiện"
        }
       ]
      },
      {
       "scene": "🧑⌨️🏠",
       "full": "他买了新键盘和新鼠标以便在家更方便地工作",
       "vi": "Anh ấy mua bàn phím và chuột mới để làm việc ở nhà tiện hơn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "买了新键盘和新鼠标",
         "ico": "⌨️",
         "c": "v",
         "py": "mǎi le xīn jiànpán hé xīn shǔbiāo",
         "hv": "mãi liễu tân kiện bàn hòa tân thử tiêu"
        },
        {
         "t": "以便在家更方便地工作",
         "ico": "🏠",
         "c": "o",
         "py": "yǐbiàn zàijiā gèng fāngbiàn de gōngzuò",
         "hv": "dĩ tiện tại gia cánh phương tiện địa công tác"
        }
       ],
       "traceWord": "鼠标",
       "py": "Tā mǎi le xīn jiànpán hé xīn shǔbiāo yǐbiàn zàijiā gèng fāngbiàn de gōngzuò",
       "traceKey": "shubiao",
       "traceInfo": [
        {
         "c": "鼠",
         "py": "shǔ",
         "hv": "thử"
        },
        {
         "c": "标",
         "py": "biāo",
         "hv": "tiêu"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "公司为什么建立新的管理机制？",
       "qvi": "Tại sao công ty xây dựng cơ chế quản lý mới?",
       "scene": "🏢⚙️",
       "ans": "以便提高工作效率",
       "opts": [
        {
         "txt": "以便提高工作效率",
         "ico": "📈",
         "py": "Yǐbiàn tígāo gōngzuò xiàolǜ"
        },
        {
         "txt": "因为昨天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi zuótiān xià yǔ le"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Gōngsī wèi shénme jiànlì xīn de guǎnlǐ jīzhì?"
      },
      {
       "q": "你怎么找到这家公司的网站？",
       "qvi": "Bạn tìm thấy trang web của công ty này bằng cách nào?",
       "scene": "📱🔍",
       "ans": "我用手机搜索公司名字",
       "opts": [
        {
         "txt": "我昨天在家睡觉",
         "ico": "😴",
         "py": "Wǒ zuótiān zàijiā shuìjiào"
        },
        {
         "txt": "我们坐地铁去北京",
         "ico": "🚇",
         "py": "Wǒmen zuò dìtiě qù Běijīng"
        },
        {
         "txt": "我用手机搜索公司名字",
         "ico": "📱",
         "py": "Wǒ yòng shǒujī sōusuǒ gōngsī míngzi"
        }
       ],
       "qpy": "Nǐ zěnme zhǎodào zhè jiā gōngsī de wǎngzhàn?"
      },
      {
       "q": "这台电脑为什么运行很慢？",
       "qvi": "Tại sao máy tính này chạy rất chậm?",
       "scene": "💻🐢",
       "ans": "因为有病毒",
       "opts": [
        {
         "txt": "因为我喜欢红色",
         "ico": "🔴",
         "py": "Yīnwèi wǒ xǐhuan hóngsè"
        },
        {
         "txt": "因为有病毒",
         "ico": "🦠",
         "py": "Yīnwèi yǒu bìngdú"
        },
        {
         "txt": "因为明天是周末",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì zhōumò"
        }
       ],
       "qpy": "Zhè tái diànnǎo wèi shénme yùnxíng hěn màn?"
      },
      {
       "q": "机器人有什么用？",
       "qvi": "Robot có tác dụng gì?",
       "scene": "🤖❓",
       "ans": "它可以帮我们做很多工作",
       "opts": [
        {
         "txt": "它是一个新的城市",
         "ico": "🏙️",
         "py": "Tā shì yī gè xīn de chéngshì"
        },
        {
         "txt": "它在北京的博物馆里",
         "ico": "🏛️",
         "py": "Tā zài Běijīng de bówùguǎn lǐ"
        },
        {
         "txt": "它可以帮我们做很多工作",
         "ico": "🛠️",
         "py": "Tā kěyǐ bāng wǒmen zuò hěn duō gōngzuò"
        }
       ],
       "qpy": "Jīqìrén yǒu shénme yòng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hướng dẫn đồng nghiệp dùng phần mềm mới",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp mới, bảo họ đăng ký tài khoản: <i>\"你先在网站上注册，以便使用公司的软件。\"</i>",
       "<b>Bước 2:</b> Giải thích lý do bạn làm các việc bảo trì máy tính (diệt virus, đổi bàn phím, cập nhật phần mềm) bằng 3 câu dạng hành động + <i>以便</i> + mục đích, ví dụ: <i>\"我们每周杀毒一次，以便保护电脑。\"</i>",
       "<b>Bước 3:</b> Gọi điện (hoặc tự nói thành tiếng) để hướng dẫn ai đó tìm thông tin: <i>\"你可以搜一下公司的名字，以便找到我们的网站。\"</i> Ghi lại ý chính bằng tiếng Việt."
      ]
     }
    },
    {
     "id": "5.18C",
     "name": "Bài 5.18C: Môi trường và năng lượng",
     "grammar": {
      "formulas": [
       "🚫 没有 + 🏭 污水处理 + ✅ 就没有 + 🏞️ 干净的河",
       "🚫 没有 + 🔥 煤气 + ✅ 就没有 + 🍳 办法做饭"
      ],
      "tip": "Cấu trúc 没有……就没有…… (méiyǒu…jiù méiyǒu…): \"không có A thì không có B\", nhấn mạnh A là điều kiện cần thiết của B. Vế đầu thường là điều kiện, vế sau là kết quả không thể có nếu thiếu điều kiện đó.",
      "vn_tip": "Người Việt hay nói \"không có A thì cũng không B\" và dịch thành 没有……也不……. Đúng: 没有A，就没有B, giữ nguyên 没有 ở cả hai vế. Chú ý phủ định của 有 là 没有, không dùng 不有."
     },
     "chunks": [
      {
       "scene": "🏭💧🏞️",
       "full": "没有污水处理就没有干净的河",
       "vi": "Không có xử lý nước thải thì không có dòng sông sạch",
       "parts": [
        {
         "t": "没有污水处理",
         "ico": "🏭",
         "c": "s",
         "py": "méiyǒu wūshuǐ chǔlǐ",
         "hv": "một hữu ô thủy xử lý"
        },
        {
         "t": "就没有",
         "ico": "🚫",
         "c": "v",
         "py": "jiù méiyǒu",
         "hv": "tựu một hữu"
        },
        {
         "t": "干净的河",
         "ico": "🏞️",
         "c": "o",
         "py": "gānjìng de hé",
         "hv": "can tịnh đích hà"
        }
       ],
       "traceWord": "污水",
       "py": "Méiyǒu wūshuǐ chǔlǐ jiù méiyǒu gānjìng de hé",
       "traceKey": "wushui",
       "traceInfo": [
        {
         "c": "污",
         "py": "wū",
         "hv": "ô"
        },
        {
         "c": "水",
         "py": "shuǐ",
         "hv": "thủy"
        }
       ]
      },
      {
       "scene": "⛏️🔥🏭",
       "full": "没有煤和天然气工厂就没有足够的热量",
       "vi": "Không có than và khí thiên nhiên thì nhà máy không có đủ nhiệt lượng",
       "parts": [
        {
         "t": "没有煤和天然气",
         "ico": "⛏️",
         "c": "s",
         "py": "méiyǒu méi hé tiānránqì",
         "hv": "một hữu môi hòa thiên nhiên khí"
        },
        {
         "t": "工厂就没有",
         "ico": "🏭",
         "c": "v",
         "py": "gōngchǎng jiù méiyǒu",
         "hv": "công xưởng tựu một hữu"
        },
        {
         "t": "足够的热量",
         "ico": "🔥",
         "c": "o",
         "py": "zúgòu de rèliàng",
         "hv": "túc cấu đích nhiệt lượng"
        }
       ],
       "traceWord": "天然气",
       "py": "Méiyǒu méi hé tiānránqì gōngchǎng jiù méiyǒu zúgòu de rèliàng",
       "traceKey": "tianranqi",
       "traceInfo": [
        {
         "c": "天",
         "py": "tiān",
         "hv": "thiên"
        },
        {
         "c": "然",
         "py": "rán",
         "hv": "nhiên"
        },
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🔥🏠🍳",
       "full": "没有煤气我们就没有办法做饭",
       "vi": "Không có ga thì chúng ta không có cách nào nấu cơm",
       "parts": [
        {
         "t": "没有煤气",
         "ico": "🔥",
         "c": "s",
         "py": "méiyǒu méiqì",
         "hv": "một hữu môi khí"
        },
        {
         "t": "我们就没有办法",
         "ico": "🤷",
         "c": "v",
         "py": "wǒmen jiù méiyǒu bànfǎ",
         "hv": "ngã môn tựu một hữu biện pháp"
        },
        {
         "t": "做饭",
         "ico": "🍳",
         "c": "o",
         "py": "zuòfàn",
         "hv": "tố phạn"
        }
       ],
       "traceWord": "煤气",
       "py": "Méiyǒu méiqì wǒmen jiù méiyǒu bànfǎ zuòfàn",
       "traceKey": "meiqi",
       "traceInfo": [
        {
         "c": "煤",
         "py": "méi",
         "hv": "môi"
        },
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        }
       ]
      },
      {
       "scene": "🏭☁️🌬️",
       "full": "没有人管理污染气体就没有干净的空气",
       "vi": "Không có người quản lý khí thải ô nhiễm thì không có không khí sạch",
       "parts": [
        {
         "t": "没有人管理污染气体",
         "ico": "🏭",
         "c": "s",
         "py": "méi yǒu rén guǎnlǐ wūrǎn qìtǐ",
         "hv": "một hữu nhân quản lý ô nhiễm khí thể"
        },
        {
         "t": "就没有",
         "ico": "🚫",
         "c": "v",
         "py": "jiù méiyǒu",
         "hv": "tựu một hữu"
        },
        {
         "t": "干净的空气",
         "ico": "🌬️",
         "c": "o",
         "py": "gānjìng de kōngqì",
         "hv": "can tịnh đích không khí"
        }
       ],
       "traceWord": "气体",
       "py": "Méi yǒu rén guǎnlǐ wūrǎn qìtǐ jiù méiyǒu gānjìng de kōngqì",
       "traceKey": "qiti",
       "traceInfo": [
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        },
        {
         "c": "体",
         "py": "tǐ",
         "hv": "thể"
        }
       ]
      },
      {
       "scene": "🗑️♻️📦",
       "full": "没有垃圾回收就没有资源的再利用",
       "vi": "Không có thu hồi rác thì không có việc tái sử dụng tài nguyên",
       "parts": [
        {
         "t": "没有垃圾回收",
         "ico": "🗑️",
         "c": "s",
         "py": "méiyǒu lājī huíshōu",
         "hv": "một hữu lạp ngập hồi thu"
        },
        {
         "t": "就没有",
         "ico": "🚫",
         "c": "v",
         "py": "jiù méiyǒu",
         "hv": "tựu một hữu"
        },
        {
         "t": "资源的再利用",
         "ico": "♻️",
         "c": "o",
         "py": "zīyuán de zài lìyòng",
         "hv": "tư nguyên đích tái lợi dụng"
        }
       ],
       "traceWord": "回收",
       "py": "Méiyǒu lājī huíshōu jiù méiyǒu zīyuán de zài lìyòng",
       "traceKey": "huishou",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "收",
         "py": "shōu",
         "hv": "thu"
        }
       ]
      },
      {
       "scene": "🌦️☀️🌡️",
       "full": "没有气象预报我们就没有准备高温天气的时间",
       "vi": "Không có dự báo khí tượng thì chúng ta không có thời gian chuẩn bị cho thời tiết nắng nóng",
       "parts": [
        {
         "t": "没有气象预报",
         "ico": "🌦️",
         "c": "s",
         "py": "méiyǒu qìxiàng yùbào",
         "hv": "một hữu khí tượng dự báo"
        },
        {
         "t": "我们就没有",
         "ico": "🧑",
         "c": "v",
         "py": "wǒmen jiù méiyǒu",
         "hv": "ngã môn tựu một hữu"
        },
        {
         "t": "准备高温天气的时间",
         "ico": "🌡️",
         "c": "o",
         "py": "zhǔnbèi gāowēn tiānqì de shíjiān",
         "hv": "chuẩn bị cao ôn thiên khí đích thời gian"
        }
       ],
       "traceWord": "气象",
       "py": "Méiyǒu qìxiàng yùbào wǒmen jiù méiyǒu zhǔnbèi gāowēn tiānqì de shíjiān",
       "traceKey": "qixiang",
       "traceInfo": [
        {
         "c": "气",
         "py": "qì",
         "hv": "khí"
        },
        {
         "c": "象",
         "py": "xiàng",
         "hv": "tượng"
        }
       ]
      },
      {
       "scene": "❄️👴🏠",
       "full": "没有暖气冬天老人就没有办法不冻着",
       "vi": "Không có lò sưởi thì mùa đông người già không có cách nào khỏi bị lạnh cóng",
       "parts": [
        {
         "t": "没有暖气",
         "ico": "♨️",
         "c": "s",
         "py": "méiyǒu nuǎnqì",
         "hv": "một hữu noãn khí"
        },
        {
         "t": "冬天老人就没有办法",
         "ico": "👴",
         "c": "v",
         "py": "dōngtiān lǎorén jiù méiyǒu bànfǎ",
         "hv": "đông thiên lão nhân tựu một hữu biện pháp"
        },
        {
         "t": "不冻着",
         "ico": "❄️",
         "c": "o",
         "py": "bú dòng zhe",
         "hv": "bất đống trước"
        }
       ],
       "traceWord": "冻",
       "py": "Méiyǒu nuǎnqì dōngtiān lǎorén jiù méiyǒu bànfǎ bú dòng zhe",
       "traceKey": "dong",
       "traceInfo": [
        {
         "c": "冻",
         "py": "dòng",
         "hv": "đống"
        }
       ]
      },
      {
       "scene": "🚿🌳💧",
       "full": "没有人在夏天洒水公园的草就没有水分",
       "vi": "Không có ai tưới nước vào mùa hè thì cỏ trong công viên không có nước",
       "parts": [
        {
         "t": "没有人在夏天洒水",
         "ico": "🚿",
         "c": "s",
         "py": "méi yǒu rén zài xiàtiān sǎ shuǐ",
         "hv": "một hữu nhân tại hạ thiên sái thủy"
        },
        {
         "t": "公园的草就没有",
         "ico": "🌳",
         "c": "v",
         "py": "gōngyuán de cǎo jiù méiyǒu",
         "hv": "công viên đích thảo tựu một hữu"
        },
        {
         "t": "水分",
         "ico": "💧",
         "c": "o",
         "py": "shuǐfèn",
         "hv": "thủy phận"
        }
       ],
       "traceWord": "洒",
       "py": "Méi yǒu rén zài xiàtiān sǎ shuǐ gōngyuán de cǎo jiù méiyǒu shuǐfèn",
       "traceKey": "sa",
       "traceInfo": [
        {
         "c": "洒",
         "py": "sǎ",
         "hv": "sái"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "夏天工人在街道上做什么？",
       "qvi": "Mùa hè công nhân làm gì trên đường phố?",
       "scene": "👷🚿",
       "ans": "他们向街道喷水",
       "opts": [
        {
         "txt": "他们在街道上唱歌",
         "ico": "🎤",
         "py": "Tāmen zài jiēdào shàng chànggē"
        },
        {
         "txt": "他们坐火车去上海",
         "ico": "🚆",
         "py": "Tāmen zuò huǒchē qù Shànghǎi"
        },
        {
         "txt": "他们向街道喷水",
         "ico": "🚿",
         "py": "Tāmen xiàng jiēdào pēn shuǐ"
        }
       ],
       "qpy": "Xiàtiān gōngrén zài jiēdào shàng zuò shénme?"
      },
      {
       "q": "为什么不能把污水泼到河里？",
       "qvi": "Tại sao không được đổ nước thải xuống sông?",
       "scene": "🚫💧🏞️",
       "ans": "因为这样会污染环境",
       "opts": [
        {
         "txt": "因为这样会污染环境",
         "ico": "☁️",
         "py": "Yīnwèi zhèyàng huì wūrǎn huánjìng"
        },
        {
         "txt": "因为我们喜欢吃鱼",
         "ico": "🐟",
         "py": "Yīnwèi wǒmen xǐhuan chī yú"
        },
        {
         "txt": "因为明天不上班",
         "ico": "📅",
         "py": "Yīnwèi míngtiān bú shàngbān"
        }
       ],
       "qpy": "Wèi shénme bù néng bǎ wūshuǐ pō dào hé lǐ?"
      },
      {
       "q": "这个国家主要用什么做燃料？",
       "qvi": "Nước này chủ yếu dùng gì làm nhiên liệu?",
       "scene": "🌍⛏️",
       "ans": "主要用煤和天然气",
       "opts": [
        {
         "txt": "主要用手机和电脑",
         "ico": "📱",
         "py": "Zhǔyào yòng shǒujī hé diànnǎo"
        },
        {
         "txt": "主要用煤和天然气",
         "ico": "⛏️",
         "py": "Zhǔyào yòng méi hé tiānránqì"
        },
        {
         "txt": "主要用红茶和咖啡",
         "ico": "☕",
         "py": "Zhǔyào yòng hóngchá hé kāfēi"
        }
       ],
       "qpy": "Zhè gè guójiā zhǔyào yòng shénme zuò ránliào?"
      },
      {
       "q": "冬天老人的屋子里为什么不暖？",
       "qvi": "Tại sao mùa đông trong nhà của người già không ấm?",
       "scene": "❄️🏠",
       "ans": "因为没有暖气",
       "opts": [
        {
         "txt": "明天我要去银行",
         "ico": "🏦",
         "py": "Míngtiān wǒ yào qù yínháng"
        },
        {
         "txt": "因为没有暖气",
         "ico": "♨️",
         "py": "Yīnwèi méiyǒu nuǎnqì"
        },
        {
         "txt": "昨天是我的生日",
         "ico": "🎂",
         "py": "Zuótiān shì wǒ de shēngrì"
        }
       ],
       "qpy": "Dōngtiān lǎorén de wūzi lǐ wèi shénme bù nuǎn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói chuyện về bảo vệ môi trường",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp, đề xuất phân loại rác ở văn phòng: <i>\"没有垃圾回收，就没有资源的再利用。\"</i>",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu mẫu 没有A就没有B về công việc hoặc cuộc sống của bạn, ví dụ: <i>\"没有煤气，我们就没有办法做饭。\"</i> Thay A và B bằng điều thật với bạn.",
       "<b>Bước 3:</b> Gọi điện cho người thân, hỏi về thời tiết và năng lượng ở quê, rồi dùng <i>\"没有暖气，冬天老人就没有办法不冻着\"</i> làm mẫu để nói về một điều kiện cần thiết khác."
      ]
     }
    }
   ]
  },
  "5.19": {
   "lessons": [
    {
     "id": "5.19A",
     "name": "Bài 5.19A: Tính chất vật liệu và hình dáng",
     "grammar": {
      "formulas": [
       "🚧 这条路 + 🔺 再 + 斜 + ✅ 也 + 要走过去",
       "🧱 这块玻璃 + 🔺 再 + 脆 + ✅ 也 + 比那块好用",
       "🛋️ 沙发 + 🔺 再 + 软 + ✅ 我也 + 睡不着"
      ],
      "tip": "Cấu trúc 再……也…… nghĩa là \"dù ... đến đâu cũng ...\": 再 (zài, tái) đứng trước tính từ để nhượng bộ mức độ cao nhất, 也 (yě, dã) đứng trước vế kết quả. Vế kết quả thường nói kết quả không đổi hoặc việc vẫn phải làm.",
      "vn_tip": "Người Việt hay dịch \"dù ... đến mấy cũng ...\" thành 虽然……但是 hoặc quên 也. Nói đúng là 再斜我们也要走, không nói 再斜我们要走. Cũng đừng đặt 很 sau 再 (không nói 再很斜)."
     },
     "chunks": [
      {
       "scene": "🚧⛰️🚶",
       "full": "这条路再斜我们也要走过去",
       "vi": "Con đường này dù dốc đến đâu chúng ta cũng phải đi qua",
       "parts": [
        {
         "t": "这条路",
         "ico": "🚧",
         "c": "s",
         "py": "zhè tiáo lù",
         "hv": "giá điều lộ"
        },
        {
         "t": "再斜我们也",
         "ico": "📐",
         "c": "v",
         "py": "zài xié wǒmen yě",
         "hv": "tái tà ngã môn dã"
        },
        {
         "t": "要走过去",
         "ico": "🚶",
         "c": "o",
         "py": "yào zǒu guòqù",
         "hv": "yếu tẩu quá khứ"
        }
       ],
       "traceWord": "斜",
       "py": "Zhè tiáo lù zài xié wǒmen yě yào zǒu guòqù",
       "traceKey": "xie",
       "traceInfo": [
        {
         "c": "斜",
         "py": "xié",
         "hv": "tà"
        }
       ]
      },
      {
       "scene": "🧱🪟💪",
       "full": "这块玻璃再脆也比那块好用",
       "vi": "Tấm kính này dù giòn đến đâu cũng dễ dùng hơn tấm kia",
       "parts": [
        {
         "t": "这块玻璃",
         "ico": "🪟",
         "c": "s",
         "py": "zhè kuài bōli",
         "hv": "giá khối pha lê"
        },
        {
         "t": "再脆也",
         "ico": "💥",
         "c": "v",
         "py": "zài cuì yě",
         "hv": "tái thúy dã"
        },
        {
         "t": "比那块好用",
         "ico": "👍",
         "c": "o",
         "py": "bǐ nà kuài hǎo yòng",
         "hv": "tỷ na khối hảo dụng"
        }
       ],
       "traceWord": "玻璃",
       "py": "Zhè kuài bōli zài cuì yě bǐ nà kuài hǎo yòng",
       "traceKey": "boli",
       "traceInfo": [
        {
         "c": "玻",
         "py": "bō",
         "hv": "pha"
        },
        {
         "c": "璃",
         "py": "li",
         "hv": "lê"
        }
       ]
      },
      {
       "scene": "🛋️🌙😣",
       "full": "这张沙发再软我今天也睡不着",
       "vi": "Chiếc sô pha này dù mềm đến đâu hôm nay tôi cũng không ngủ được",
       "parts": [
        {
         "t": "这张沙发",
         "ico": "🛋️",
         "c": "s",
         "py": "zhè zhāng shāfā",
         "hv": "giá trương sa phát"
        },
        {
         "t": "再软我今天也",
         "ico": "☁️",
         "c": "v",
         "py": "zài ruǎn wǒ jīntiān yě",
         "hv": "tái nhuyễn ngã kim thiên dã"
        },
        {
         "t": "睡不着",
         "ico": "😣",
         "c": "o",
         "py": "shuì bù zhe",
         "hv": "thụy bất trước"
        }
       ],
       "traceWord": "软",
       "py": "Zhè zhāng shāfā zài ruǎn wǒ jīntiān yě shuì bù zhe",
       "traceKey": "ruan",
       "traceInfo": [
        {
         "c": "软",
         "py": "ruǎn",
         "hv": "nhuyễn"
        }
       ]
      },
      {
       "scene": "🏠🗑️🤢",
       "full": "厨房里的垃圾再臭也要及时倒掉",
       "vi": "Rác trong bếp dù hôi đến đâu cũng phải đổ đi kịp thời",
       "parts": [
        {
         "t": "厨房里的垃圾",
         "ico": "🗑️",
         "c": "s",
         "py": "chúfáng lǐ de lājī",
         "hv": "trù phòng lý đích lạp ngập"
        },
        {
         "t": "再臭也",
         "ico": "🤢",
         "c": "v",
         "py": "zài chòu yě",
         "hv": "tái xú dã"
        },
        {
         "t": "要及时倒掉",
         "ico": "🚮",
         "c": "o",
         "py": "yào jíshí dào diào",
         "hv": "yếu cập thời đáo điệu"
        }
       ],
       "traceWord": "臭",
       "py": "Chúfáng lǐ de lājī zài chòu yě yào jíshí dào diào",
       "traceKey": "chou",
       "traceInfo": [
        {
         "c": "臭",
         "py": "chòu",
         "hv": "xú"
        }
       ]
      },
      {
       "scene": "🌧️🛣️🚶",
       "full": "下雨天地面再滑他也走得很稳",
       "vi": "Ngày mưa mặt đất dù trơn đến đâu anh ấy cũng đi rất vững",
       "parts": [
        {
         "t": "下雨天地面",
         "ico": "🌧️",
         "c": "s",
         "py": "xià yǔ tiān dìmiàn",
         "hv": "hạ vũ thiên địa diện"
        },
        {
         "t": "再滑他也",
         "ico": "⚠️",
         "c": "v",
         "py": "zài huá tā yě",
         "hv": "tái hoạt tha dã"
        },
        {
         "t": "走得很稳",
         "ico": "🚶",
         "c": "o",
         "py": "zǒu de hěn wěn",
         "hv": "tẩu đắc ngận ổn"
        }
       ],
       "traceWord": "滑",
       "py": "Xià yǔ tiān dìmiàn zài huá tā yě zǒu de hěn wěn",
       "traceKey": "hua",
       "traceInfo": [
        {
         "c": "滑",
         "py": "huá",
         "hv": "hoạt"
        }
       ]
      },
      {
       "scene": "🏢🏯🌟",
       "full": "这座楼再高大也不如长城雄伟",
       "vi": "Tòa nhà này dù cao lớn đến đâu cũng không hùng vĩ bằng Trường Thành",
       "parts": [
        {
         "t": "这座楼",
         "ico": "🏢",
         "c": "s",
         "py": "zhè zuò lóu",
         "hv": "giá tọa lâu"
        },
        {
         "t": "再高大也",
         "ico": "📏",
         "c": "v",
         "py": "zài gāodà yě",
         "hv": "tái cao đại dã"
        },
        {
         "t": "不如长城雄伟",
         "ico": "🏯",
         "c": "o",
         "py": "bùrú Chángchéng xióngwěi",
         "hv": "bất như trường thành hùng vĩ"
        }
       ],
       "traceWord": "雄伟",
       "py": "Zhè zuò lóu zài gāodà yě bùrú Chángchéng xióngwěi",
       "traceKey": "xiongwei",
       "traceInfo": [
        {
         "c": "雄",
         "py": "xióng",
         "hv": "hùng"
        },
        {
         "c": "伟",
         "py": "wěi",
         "hv": "vĩ"
        }
       ]
      },
      {
       "scene": "🛤️⏳💪",
       "full": "前面的路再漫长我们也要一步一步走下去",
       "vi": "Con đường phía trước dù dài đằng đẵng chúng ta cũng phải đi tiếp từng bước",
       "parts": [
        {
         "t": "前面的路",
         "ico": "🛤️",
         "c": "s",
         "py": "qiánmiàn de lù",
         "hv": "tiền diện đích lộ"
        },
        {
         "t": "再漫长我们也",
         "ico": "⏳",
         "c": "v",
         "py": "zài màncháng wǒmen yě",
         "hv": "tái mạn trường ngã môn dã"
        },
        {
         "t": "要一步一步走下去",
         "ico": "👣",
         "c": "o",
         "py": "yào yī bù yī bù zǒu xiàqù",
         "hv": "yếu nhất bộ nhất bộ tẩu hạ khứ"
        }
       ],
       "traceWord": "漫长",
       "py": "Qiánmiàn de lù zài màncháng wǒmen yě yào yī bù yī bù zǒu xiàqù",
       "traceKey": "manchang",
       "traceInfo": [
        {
         "c": "漫",
         "py": "màn",
         "hv": "mạn"
        },
        {
         "c": "长",
         "py": "cháng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🍞💪🍽️",
       "full": "这块面包再硬他也会吃完不会浪费",
       "vi": "Miếng bánh mì này dù cứng đến đâu anh ấy cũng sẽ ăn hết, không lãng phí",
       "parts": [
        {
         "t": "这块面包",
         "ico": "🍞",
         "c": "s",
         "py": "zhè kuài miànbāo",
         "hv": "giá khối diện bao"
        },
        {
         "t": "再硬他也",
         "ico": "🪨",
         "c": "v",
         "py": "zài yìng tā yě",
         "hv": "tái ngạnh tha dã"
        },
        {
         "t": "会吃完不会浪费",
         "ico": "🍽️",
         "c": "o",
         "py": "huì chī wán bú huì làngfèi",
         "hv": "hội cật hoàn bất hội lãng phí"
        }
       ],
       "traceWord": "硬",
       "py": "Zhè kuài miànbāo zài yìng tā yě huì chī wán bú huì làngfèi",
       "traceKey": "ying",
       "traceInfo": [
        {
         "c": "硬",
         "py": "yìng",
         "hv": "ngạnh"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "去机场的路平坦吗？",
       "qvi": "Đường đến sân bay có bằng phẳng không?",
       "scene": "🛣️✈️",
       "ans": "很平坦开车一个小时就到",
       "opts": [
        {
         "txt": "我明天要去北京开会",
         "ico": "💼",
         "py": "Wǒ míngtiān yào qù Běijīng kāihuì"
        },
        {
         "txt": "很平坦开车一个小时就到",
         "ico": "🚗",
         "py": "Hěn píngtǎn kāichē yī gè xiǎoshí jiù dào"
        },
        {
         "txt": "这个星期没有人来过",
         "ico": "🚫",
         "py": "Zhè gè xīngqī méi yǒu rén lái guò"
        }
       ],
       "qpy": "Qù jīchǎng de lù píngtǎn ma?"
      },
      {
       "q": "这张照片为什么看不清楚？",
       "qvi": "Tại sao tấm ảnh này nhìn không rõ?",
       "scene": "📷🌫️",
       "ans": "因为照片太模糊了",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为这个杯子很贵",
         "ico": "💰",
         "py": "Yīnwèi zhè gè bēizi hěn guì"
        },
        {
         "txt": "因为照片太模糊了",
         "ico": "📷",
         "py": "Yīnwèi zhàopiàn tài móhu le"
        }
       ],
       "qpy": "Zhè zhāng zhàopiàn wèi shénme kàn bù qīngchu?"
      },
      {
       "q": "这个杯子是怎么碎的？",
       "qvi": "Chiếc cốc này vỡ như thế nào?",
       "scene": "🥛💥",
       "ans": "他不小心把它摔在地上了",
       "opts": [
        {
         "txt": "他不小心把它摔在地上了",
         "ico": "💥",
         "py": "Tā bù xiǎoxīn bǎ tā shuāi zài dìshang le"
        },
        {
         "txt": "水果放久了就烂了",
         "ico": "🍎",
         "py": "Shuǐguǒ fàng jiǔ le jiù làn le"
        },
        {
         "txt": "我们明天一起去吃饭",
         "ico": "🍜",
         "py": "Wǒmen míngtiān yīqǐ qù chīfàn"
        }
       ],
       "qpy": "Zhè gè bēizi shì zěnme suì de?"
      },
      {
       "q": "他的兴趣广吗？",
       "qvi": "Sở thích của anh ấy có rộng không?",
       "scene": "🎵⚽",
       "ans": "很广音乐和运动他都喜欢",
       "opts": [
        {
         "txt": "办公室很明亮窗户也很大",
         "ico": "🏢",
         "py": "Bàngōngshì hěn míngliàng chuānghu yě hěn dà"
        },
        {
         "txt": "我明天要去北京开会",
         "ico": "💼",
         "py": "Wǒ míngtiān yào qù Běijīng kāihuì"
        },
        {
         "txt": "很广音乐和运动他都喜欢",
         "ico": "🎵",
         "py": "Hěn guǎng yīnyuè hé yùndòng tā dōu xǐhuan"
        }
       ],
       "qpy": "Tā de xìngqù guǎng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Động viên đồng nghiệp trước chuyến công tác khó",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp sắp đi công tác ở vùng khó đi, dùng mẫu <i>\"路再斜我们也要走过去\"</i> để nói rằng khó đến đâu cũng cố gắng.",
       "<b>Bước 2:</b> Nhìn quanh nhà hoặc văn phòng, chọn 5 đồ vật (kính, ghế, bánh, rác...) và tự nói thành tiếng mỗi vật một câu với 再……也……, ví dụ <i>\"这块面包再硬他也会吃完\"</i>.",
       "<b>Bước 3:</b> Gọi điện hoặc ghi âm 1 phút kể với đối tác một khó khăn của dự án và nói <i>\"前面的路再漫长我们也要走下去\"</i> để thể hiện quyết tâm."
      ]
     }
    },
    {
     "id": "5.19B",
     "name": "Bài 5.19B: Nhận thức và phán đoán",
     "grammar": {
      "formulas": [
       "🧑 我们 + 🔎 回顾 + 📚 过去一年的工作发现问题还不少",
       "❓ 因为 + 🧠 记忆不太清楚 + 🧑 他 + 🤝 只好寻求帮助",
       "🧩 如果 + 你熟悉这个行业 + ➡️ 就能更快掌握方法"
      ],
      "tip": "Câu phức hai tầng là câu có hai vế trở lên lồng nhau, thường dùng liên từ như 因为……所以……, 如果……就……, 不但……而且……. Vế đầu nêu điều kiện hoặc nguyên nhân, vế sau nêu kết quả hoặc nhận định. Các động từ nhận thức như 回顾 (huígù, hồi cố), 发觉 (fājué, phát giác), 看出 (kànchū, khán xuất), 看成 (kànchéng, khán thành), 视为 (shìwéi, thị vi) thường mang cả một mệnh đề phía sau.",
      "vn_tip": "Người Việt hay bỏ liên từ ở vế sau hoặc đặt sai thứ tự vế câu. Trong tiếng Trung vế nguyên nhân và điều kiện thường đứng TRƯỚC: nói 因为记忆不太清楚，他只好寻求帮助, không đảo thành \"他只好寻求帮助因为……\". Đừng nhầm 看成 (xem như, nhìn nhầm thành) với 看出 (nhìn ra, nhận ra)."
     },
     "chunks": [
      {
       "scene": "👥📖🔎",
       "full": "我们回顾过去一年的工作发现问题还不少",
       "vi": "Chúng tôi nhìn lại công việc năm qua và thấy vấn đề vẫn còn không ít",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "回顾",
         "ico": "🔙",
         "c": "v",
         "py": "huígù",
         "hv": "hồi cố"
        },
        {
         "t": "过去一年的工作发现问题还不少",
         "ico": "📊",
         "c": "o",
         "py": "guòqù yī nián de gōngzuò fāxiàn wèntí hái bù shǎo",
         "hv": "quá khứ nhất niên đích công tác phát hiện vấn đề hoàn bất thiểu"
        }
       ],
       "traceWord": "回顾",
       "py": "Wǒmen huígù guòqù yī nián de gōngzuò fāxiàn wèntí hái bù shǎo",
       "traceKey": "huigu",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "顾",
         "py": "gù",
         "hv": "cố"
        }
       ]
      },
      {
       "scene": "👴🏠😊",
       "full": "他回忆小时候的事情觉得那段时间很幸福",
       "vi": "Anh ấy nhớ lại chuyện hồi nhỏ và cảm thấy quãng thời gian đó rất hạnh phúc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "回忆",
         "ico": "💭",
         "c": "v",
         "py": "huíyì",
         "hv": "hồi ức"
        },
        {
         "t": "小时候的事情觉得那段时间很幸福",
         "ico": "😊",
         "c": "o",
         "py": "xiǎoshíhou de shìqing juéde nà duàn shíjiān hěn xìngfú",
         "hv": "tiểu thời hậu đích sự tình giác đắc na đoạn thời gian ngận hạnh phúc"
        }
       ],
       "traceWord": "回忆",
       "py": "Tā huíyì xiǎoshíhou de shìqing juéde nà duàn shíjiān hěn xìngfú",
       "traceKey": "huiyi",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "忆",
         "py": "yì",
         "hv": "ức"
        }
       ]
      },
      {
       "scene": "🏭📈💼",
       "full": "如果你熟悉这个行业就能更快掌握工作的方法",
       "vi": "Nếu bạn quen thuộc ngành này thì sẽ nắm được phương pháp làm việc nhanh hơn",
       "parts": [
        {
         "t": "如果你",
         "ico": "🧑",
         "c": "s",
         "py": "rúguǒ nǐ",
         "hv": "như quả nễ"
        },
        {
         "t": "熟悉",
         "ico": "🤝",
         "c": "v",
         "py": "shúxi",
         "hv": "thục tất"
        },
        {
         "t": "这个行业就能更快掌握工作的方法",
         "ico": "⚡",
         "c": "o",
         "py": "zhè gè hángyè jiù néng gèng kuài zhǎngwò gōngzuò de fāngfǎ",
         "hv": "giá cá hàng nghiệp tựu năng cánh khoái chưởng ác công tác đích phương pháp"
        }
       ],
       "traceWord": "掌握",
       "py": "Rúguǒ nǐ shúxi zhè gè hángyè jiù néng gèng kuài zhǎngwò gōngzuò de fāngfǎ",
       "traceKey": "zhangwo",
       "traceInfo": [
        {
         "c": "掌",
         "py": "zhǎng",
         "hv": "chưởng"
        },
        {
         "c": "握",
         "py": "wò",
         "hv": "ác"
        }
       ]
      },
      {
       "scene": "🧑‍💼🗣️🙂",
       "full": "一个人的修养不但看他说什么而且看他做什么",
       "vi": "Tu dưỡng của một người không chỉ xem anh ta nói gì mà còn xem anh ta làm gì",
       "parts": [
        {
         "t": "一个人的修养",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "yī gè rén de xiūyǎng",
         "hv": "nhất cá nhân đích tu dưỡng"
        },
        {
         "t": "不但看他说什么",
         "ico": "🗣️",
         "c": "v",
         "py": "bùdàn kàn tā shuō shénme",
         "hv": "bất đãn khán tha thuyết thập ma"
        },
        {
         "t": "而且看他做什么",
         "ico": "✨",
         "c": "o",
         "py": "érqiě kàn tā zuò shénme",
         "hv": "nhi thả khán tha tố thập ma"
        }
       ],
       "traceWord": "修养",
       "py": "Yī gè rén de xiūyǎng bùdàn kàn tā shuō shénme érqiě kàn tā zuò shénme",
       "traceKey": "xiuyang",
       "traceInfo": [
        {
         "c": "修",
         "py": "xiū",
         "hv": "tu"
        },
        {
         "c": "养",
         "py": "yǎng",
         "hv": "dưỡng"
        }
       ]
      },
      {
       "scene": "🖼️👴💭",
       "full": "他看到这张老照片就联想到小时候的家乡",
       "vi": "Anh ấy vừa nhìn thấy tấm ảnh cũ liền liên tưởng đến quê nhà thời thơ ấu",
       "parts": [
        {
         "t": "他看到这张老照片",
         "ico": "🖼️",
         "c": "s",
         "py": "tā kàndào zhè zhāng lǎo zhàopiàn",
         "hv": "tha khán đáo giá trương lão chiếu phiến"
        },
        {
         "t": "就联想到",
         "ico": "💭",
         "c": "v",
         "py": "jiù liánxiǎng dào",
         "hv": "tựu liên tưởng đáo"
        },
        {
         "t": "小时候的家乡",
         "ico": "🏡",
         "c": "o",
         "py": "xiǎoshíhou de jiāxiāng",
         "hv": "tiểu thời hậu đích gia hương"
        }
       ],
       "traceWord": "联想",
       "py": "Tā kàndào zhè zhāng lǎo zhàopiàn jiù liánxiǎng dào xiǎoshíhou de jiāxiāng",
       "traceKey": "lianxiang",
       "traceInfo": [
        {
         "c": "联",
         "py": "lián",
         "hv": "liên"
        },
        {
         "c": "想",
         "py": "xiǎng",
         "hv": "tưởng"
        }
       ]
      },
      {
       "scene": "🧠❓🤝",
       "full": "因为记忆不太清楚他只好寻求同事的帮助",
       "vi": "Vì trí nhớ không rõ lắm nên anh ấy đành nhờ đồng nghiệp giúp đỡ",
       "parts": [
        {
         "t": "因为记忆不太清楚他",
         "ico": "🧠",
         "c": "s",
         "py": "yīnwèi jìyì bù tài qīngchu tā",
         "hv": "nhân vị ký ức bất thái thanh sở tha"
        },
        {
         "t": "只好寻求",
         "ico": "🙏",
         "c": "v",
         "py": "zhǐhǎo xúnqiú",
         "hv": "chỉ hảo tầm cầu"
        },
        {
         "t": "同事的帮助",
         "ico": "🤝",
         "c": "o",
         "py": "tóngshì de bāngzhù",
         "hv": "đồng sự đích bang trợ"
        }
       ],
       "traceWord": "记忆",
       "py": "Yīnwèi jìyì bù tài qīngchu tā zhǐhǎo xúnqiú tóngshì de bāngzhù",
       "traceKey": "jiyi",
       "traceInfo": [
        {
         "c": "记",
         "py": "jì",
         "hv": "ký"
        },
        {
         "c": "忆",
         "py": "yì",
         "hv": "ức"
        }
       ]
      },
      {
       "scene": "👮🔍💡",
       "full": "警察发觉这条线索不简单很快就看出了事情的真相",
       "vi": "Cảnh sát nhận ra manh mối này không đơn giản, nhanh chóng nhìn ra sự thật của vụ việc",
       "parts": [
        {
         "t": "警察",
         "ico": "👮",
         "c": "s",
         "py": "jǐngchá",
         "hv": "cảnh sát"
        },
        {
         "t": "发觉",
         "ico": "🔍",
         "c": "v",
         "py": "fājué",
         "hv": "phát giác"
        },
        {
         "t": "这条线索不简单很快就看出了事情的真相",
         "ico": "💡",
         "c": "o",
         "py": "zhè tiáo xiànsuǒ bù jiǎndān hěn kuài jiù kànchū le shìqing de zhēnxiàng",
         "hv": "giá điều tuyến sách bất giản đơn ngận khoái tựu khán xuất liễu sự tình đích chân tướng"
        }
       ],
       "traceWord": "线索",
       "py": "Jǐngchá fājué zhè tiáo xiànsuǒ bù jiǎndān hěn kuài jiù kànchū le shìqing de zhēnxiàng",
       "traceKey": "xiansuo",
       "traceInfo": [
        {
         "c": "线",
         "py": "xiàn",
         "hv": "tuyến"
        },
        {
         "c": "索",
         "py": "suǒ",
         "hv": "sách"
        }
       ]
      },
      {
       "scene": "💬😟🤔",
       "full": "我们不应该把别人的批评看成对自己的不满",
       "vi": "Chúng ta không nên coi lời phê bình của người khác là sự bất mãn với bản thân",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã môn"
        },
        {
         "t": "不应该把别人的批评看成",
         "ico": "🤔",
         "c": "v",
         "py": "bù yīnggāi bǎ biérén de pīpíng kànchéng",
         "hv": "bất ưng cai bả biệt nhân đích phê bình khán thành"
        },
        {
         "t": "对自己的不满",
         "ico": "😟",
         "c": "o",
         "py": "duì zìjǐ de bùmǎn",
         "hv": "đối tự kỷ đích bất mãn"
        }
       ],
       "traceWord": "看成",
       "py": "Wǒmen bù yīnggāi bǎ biérén de pīpíng kànchéng duì zìjǐ de bùmǎn",
       "traceKey": "kancheng",
       "traceInfo": [
        {
         "c": "看",
         "py": "kàn",
         "hv": "khán"
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
       "q": "你怎么看待网上的这些新闻？",
       "qvi": "Bạn nhìn nhận những tin tức trên mạng này như thế nào?",
       "scene": "📰💻🤔",
       "ans": "我觉得应该先了解事实再发表意见",
       "opts": [
        {
         "txt": "我昨天已经买好票了",
         "ico": "🎫",
         "py": "Wǒ zuótiān yǐjīng mǎi hǎo piào le"
        },
        {
         "txt": "我觉得应该先了解事实再发表意见",
         "ico": "📰",
         "py": "Wǒ juéde yīnggāi xiān liǎojiě shìshí zài fābiǎo yìjiàn"
        },
        {
         "txt": "这个房间不太干净",
         "ico": "🏠",
         "py": "Zhè gè fángjiān bù tài gānjìng"
        }
       ],
       "qpy": "Nǐ zěnme kàndài wǎng shang de zhèxiē xīnwén?"
      },
      {
       "q": "他为什么生气了？",
       "qvi": "Tại sao anh ấy lại tức giận?",
       "scene": "😠💬",
       "ans": "因为他误解了我的意思",
       "opts": [
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        },
        {
         "txt": "因为他的手机坏了",
         "ico": "📱",
         "py": "Yīnwèi tā de shǒujī huài le"
        },
        {
         "txt": "因为他误解了我的意思",
         "ico": "💬",
         "py": "Yīnwèi tā wùjiě le wǒ de yìsi"
        }
       ],
       "qpy": "Tā wèi shénme shēngqì le?"
      },
      {
       "q": "公司把什么视为最重要的事？",
       "qvi": "Công ty coi điều gì là việc quan trọng nhất?",
       "scene": "🏢⭐",
       "ans": "公司把客户的满意视为最重要的事",
       "opts": [
        {
         "txt": "公司把客户的满意视为最重要的事",
         "ico": "⭐",
         "py": "Gōngsī bǎ kèhù de mǎnyì shìwéi zuì zhòngyào de shì"
        },
        {
         "txt": "公司把明天的会议取消了",
         "ico": "❌",
         "py": "Gōngsī bǎ míngtiān de huìyì qǔxiāo le"
        },
        {
         "txt": "公司在北京的东边",
         "ico": "🗺️",
         "py": "Gōngsī zài Běijīng de dōngbian"
        }
       ],
       "qpy": "Gōngsī bǎ shénme shìwéi zuì zhòngyào de shì?"
      },
      {
       "q": "如果你发现同事有困难你会怎么做？",
       "qvi": "Nếu bạn phát hiện đồng nghiệp gặp khó khăn thì bạn sẽ làm gì?",
       "scene": "🧑‍💼🆘🤝",
       "ans": "我会先问清楚情况然后再想办法帮他",
       "opts": [
        {
         "txt": "我会去超市买一瓶水",
         "ico": "🛒",
         "py": "Wǒ huì qù chāoshì mǎi yī píng shuǐ"
        },
        {
         "txt": "我会先问清楚情况然后再想办法帮他",
         "ico": "🤝",
         "py": "Wǒ huì xiān wèn qīngchu qíngkuàng ránhòu zài xiǎng bànfǎ bāng tā"
        },
        {
         "txt": "我会马上回家睡觉",
         "ico": "😴",
         "py": "Wǒ huì mǎshàng huí jiā shuìjiào"
        }
       ],
       "qpy": "Rúguǒ nǐ fāxiàn tóngshì yǒu kùnnan nǐ huì zěnme zuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhìn lại một dự án và trao đổi với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn một dự án hoặc công việc bạn vừa làm xong, tự nói thành tiếng <i>\"我们回顾过去一年的工作发现问题还不少\"</i> rồi thay nội dung bằng dự án của bạn.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp, dùng câu hai tầng với <i>\"因为……他只好寻求同事的帮助\"</i> hoặc <i>\"如果你熟悉这个行业就能更快掌握方法\"</i> để đưa ra một lời khuyên.",
       "<b>Bước 3:</b> Ghi âm 1 phút nói quan điểm của bạn về một tin tức gần đây, dùng <i>\"我们不应该把……看成……\"</i> và <i>\"我觉得应该先了解事实再发表意见\"</i>."
      ]
     }
    },
    {
     "id": "5.19C",
     "name": "Bài 5.19C: Gia đình và quan hệ",
     "grammar": {
      "formulas": [
       "👨‍👩‍👧 儿女 + 🔁 长大以后再也不 + 🙋 需要父母陪",
       "🧑 他 + ❌ 再也没有 + 🔙 离开过家乡",
       "😠 你 + ❌ 没有耐心 + 🚪 他们就再也不愿意说话"
      ],
      "tip": "Dùng 再也不 / 再也没(有) để nhấn mạnh \"không bao giờ nữa\". 再也不 + động từ/tính từ nói về ý chí, thói quen từ nay về sau (再也不去, \"sẽ không đi nữa\"); 再也没(有) + động từ + 过 / 了 nói về việc từ một thời điểm trong quá khứ đến nay không còn xảy ra nữa. Chữ khóa: 再也 (zài yě, tái dã).",
      "vn_tip": "Người Việt hay nói \"不再也\" hoặc \"再不也\". Đúng là 再也不 (liền nhau, 再也 đứng trước 不/没). Cũng đừng dùng 再也不 cho quá khứ: nói \"Từ đó tôi không gặp lại anh ấy\" là 再也没见过他, không phải 再也不见过他."
     },
     "chunks": [
      {
       "scene": "👨‍👩‍👧👶➡️🧑",
       "full": "儿女长大以后再也不需要父母天天陪着",
       "vi": "Con cái lớn rồi thì không còn cần bố mẹ ngày nào cũng ở bên nữa",
       "parts": [
        {
         "t": "儿女",
         "ico": "👨‍👩‍👧",
         "c": "s",
         "py": "érnǚ",
         "hv": "nhi nữ"
        },
        {
         "t": "长大以后再也不需要",
         "ico": "🧑",
         "c": "v",
         "py": "zhǎngdà yǐhòu zài yě bù xūyào",
         "hv": "trưởng đại dĩ hậu tái dã bất nhu yếu"
        },
        {
         "t": "父母天天陪着",
         "ico": "👫",
         "c": "o",
         "py": "fùmǔ tiān tiān péi zhe",
         "hv": "phụ mẫu thiên thiên bồi trước"
        }
       ],
       "traceWord": "儿女",
       "py": "Érnǚ zhǎngdà yǐhòu zài yě bù xūyào fùmǔ tiān tiān péi zhe",
       "traceKey": "ernu",
       "traceInfo": [
        {
         "c": "儿",
         "py": "ér",
         "hv": "nhi"
        },
        {
         "c": "女",
         "py": "nǚ",
         "hv": "nữ"
        }
       ]
      },
      {
       "scene": "🏠👴😊",
       "full": "我的邻居年龄大了但是脾气再也没有以前那么大了",
       "vi": "Hàng xóm của tôi lớn tuổi rồi nhưng tính khí không còn nóng như trước nữa",
       "parts": [
        {
         "t": "我的邻居",
         "ico": "🏠",
         "c": "s",
         "py": "wǒ de línjū",
         "hv": "ngã đích lân cư"
        },
        {
         "t": "年龄大了但是脾气再也没有",
         "ico": "👴",
         "c": "v",
         "py": "niánlíng dà le dànshì píqi zài yě méiyǒu",
         "hv": "niên linh đại liễu đãn thị tì khí tái dã một hữu"
        },
        {
         "t": "以前那么大了",
         "ico": "😊",
         "c": "o",
         "py": "yǐqián nàme dà le",
         "hv": "dĩ tiền na ma đại liễu"
        }
       ],
       "traceWord": "邻居",
       "py": "Wǒ de línjū niánlíng dà le dànshì píqi zài yě méiyǒu yǐqián nàme dà le",
       "traceKey": "linju",
       "traceInfo": [
        {
         "c": "邻",
         "py": "lín",
         "hv": "lân"
        },
        {
         "c": "居",
         "py": "jū",
         "hv": "cư"
        }
       ]
      },
      {
       "scene": "👵💑🏡",
       "full": "她一辈子陪着丈夫再也没有离开过这个城市",
       "vi": "Bà ấy ở bên chồng cả đời, chưa từng rời khỏi thành phố này nữa",
       "parts": [
        {
         "t": "她",
         "ico": "👵",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一辈子陪着",
         "ico": "💑",
         "c": "v",
         "py": "yībèizi péi zhe",
         "hv": "nhất bối tử bồi trước"
        },
        {
         "t": "丈夫再也没有离开过这个城市",
         "ico": "🏙️",
         "c": "o",
         "py": "zhàngfu zài yě méiyǒu líkāi guò zhè gè chéngshì",
         "hv": "trượng phu tái dã một hữu ly khai quá giá cá thành thị"
        }
       ],
       "traceWord": "一辈子",
       "py": "Tā yībèizi péi zhe zhàngfu zài yě méiyǒu líkāi guò zhè gè chéngshì",
       "traceKey": "yibeizi",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "辈",
         "py": "bèi",
         "hv": "bối"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🗣️😞🙈",
       "full": "你这样说话会让他再也没有面子",
       "vi": "Bạn nói như vậy sẽ làm anh ấy không còn thể diện nữa",
       "parts": [
        {
         "t": "你这样说话",
         "ico": "🗣️",
         "c": "s",
         "py": "nǐ zhèyàng shuōhuà",
         "hv": "nễ giá dạng thuyết thoại"
        },
        {
         "t": "会让他再也没有",
         "ico": "😞",
         "c": "v",
         "py": "huì ràng tā zài yě méiyǒu",
         "hv": "hội nhượng tha tái dã một hữu"
        },
        {
         "t": "面子",
         "ico": "🙈",
         "c": "o",
         "py": "miànzi",
         "hv": "diện tử"
        }
       ],
       "traceWord": "面子",
       "py": "Nǐ zhèyàng shuōhuà huì ràng tā zài yě méiyǒu miànzi",
       "traceKey": "mianzi",
       "traceInfo": [
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🤝💖✅",
       "full": "他对朋友非常真诚所以他们的友谊再也没有出过问题",
       "vi": "Anh ấy rất chân thành với bạn bè nên tình bạn của họ không còn xảy ra vấn đề nào nữa",
       "parts": [
        {
         "t": "他对朋友",
         "ico": "🧑",
         "c": "s",
         "py": "tā duì péngyou",
         "hv": "tha đối bằng hữu"
        },
        {
         "t": "非常真诚",
         "ico": "💖",
         "c": "v",
         "py": "fēicháng zhēnchéng",
         "hv": "phi thường chân thành"
        },
        {
         "t": "所以他们的友谊再也没有出过问题",
         "ico": "🤝",
         "c": "o",
         "py": "suǒyǐ tāmen de yǒuyì zài yě méiyǒu chū guò wèntí",
         "hv": "sở dĩ tha môn đích hữu nghị tái dã một hữu xuất quá vấn đề"
        }
       ],
       "traceWord": "友谊",
       "py": "Tā duì péngyou fēicháng zhēnchéng suǒyǐ tāmen de yǒuyì zài yě méiyǒu chū guò wèntí",
       "traceKey": "youyi",
       "traceInfo": [
        {
         "c": "友",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "c": "谊",
         "py": "yì",
         "hv": "nghị"
        }
       ]
      },
      {
       "scene": "💑💍🏠",
       "full": "他们恋爱三年后结婚了再也没有分开过",
       "vi": "Họ yêu nhau ba năm rồi kết hôn và chưa từng xa nhau nữa",
       "parts": [
        {
         "t": "他们",
         "ico": "💑",
         "c": "s",
         "py": "tāmen",
         "hv": "tha môn"
        },
        {
         "t": "恋爱三年后结婚了",
         "ico": "💍",
         "c": "v",
         "py": "liàn'ài sān nián hòu jiéhūn le",
         "hv": "luyến ái tam niên hậu kết hôn liễu"
        },
        {
         "t": "再也没有分开过",
         "ico": "🏠",
         "c": "o",
         "py": "zài yě méiyǒu fēnkāi guò",
         "hv": "tái dã một hữu phân khai quá"
        }
       ],
       "traceWord": "恋爱",
       "py": "Tāmen liàn'ài sān nián hòu jiéhūn le zài yě méiyǒu fēnkāi guò",
       "traceKey": "lianai",
       "traceInfo": [
        {
         "c": "恋",
         "py": "liàn",
         "hv": "luyến"
        },
        {
         "c": "爱",
         "py": "ài",
         "hv": "ái"
        }
       ]
      },
      {
       "scene": "👨👩💰",
       "full": "在这个公司里男性和女性的工资再也没有区别了",
       "vi": "Trong công ty này lương của nam và nữ không còn khác biệt nữa",
       "parts": [
        {
         "t": "在这个公司里男性和女性的工资",
         "ico": "👨👩",
         "c": "s",
         "py": "zài zhè gè gōngsī lǐ nánxìng hé nǚxìng de gōngzī",
         "hv": "tại giá cá công ti lý nam tính hòa nữ tính đích công tư"
        },
        {
         "t": "再也没有",
         "ico": "❌",
         "c": "v",
         "py": "zài yě méiyǒu",
         "hv": "tái dã một hữu"
        },
        {
         "t": "区别了",
         "ico": "⚖️",
         "c": "o",
         "py": "qūbié le",
         "hv": "khu biệt liễu"
        }
       ],
       "traceWord": "男性",
       "py": "Zài zhè gè gōngsī lǐ nánxìng hé nǚxìng de gōngzī zài yě méiyǒu qūbié le",
       "traceKey": "nanxing",
       "traceInfo": [
        {
         "c": "男",
         "py": "nán",
         "hv": "nam"
        },
        {
         "c": "性",
         "py": "xìng",
         "hv": "tính"
        }
       ]
      },
      {
       "scene": "👶😤🚪",
       "full": "你对孩子没有耐心他们就再也不愿意跟你说话",
       "vi": "Nếu bạn không kiên nhẫn với con thì chúng sẽ không bao giờ muốn nói chuyện với bạn nữa",
       "parts": [
        {
         "t": "你对孩子",
         "ico": "👶",
         "c": "s",
         "py": "nǐ duì háizi",
         "hv": "nễ đối hài tử"
        },
        {
         "t": "没有耐心",
         "ico": "😤",
         "c": "v",
         "py": "méiyǒu nàixīn",
         "hv": "một hữu nại tâm"
        },
        {
         "t": "他们就再也不愿意跟你说话",
         "ico": "🚪",
         "c": "o",
         "py": "tāmen jiù zài yě bú yuànyì gēn nǐ shuōhuà",
         "hv": "tha môn tựu tái dã bất nguyện ý cân nễ thuyết thoại"
        }
       ],
       "traceWord": "耐心",
       "py": "Nǐ duì háizi méiyǒu nàixīn tāmen jiù zài yě bú yuànyì gēn nǐ shuōhuà",
       "traceKey": "naixin",
       "traceInfo": [
        {
         "c": "耐",
         "py": "nài",
         "hv": "nại"
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
       "q": "这位人物为什么受到大家的尊敬？",
       "qvi": "Tại sao nhân vật này được mọi người kính trọng?",
       "scene": "🧑‍🏫🙏",
       "ans": "因为他终身都在帮助别人",
       "opts": [
        {
         "txt": "因为他昨天买了新车",
         "ico": "🚗",
         "py": "Yīnwèi tā zuótiān mǎi le xīn chē"
        },
        {
         "txt": "因为他终身都在帮助别人",
         "ico": "🤝",
         "py": "Yīnwèi tā zhōngshēn dōu zài bāngzhù biérén"
        },
        {
         "txt": "因为他住在河边",
         "ico": "🏞️",
         "py": "Yīnwèi tā zhù zài hé biān"
        }
       ],
       "qpy": "Zhè wèi rénwù wèi shénme shòudào dàjiā de zūnjìng?"
      },
      {
       "q": "你觉得人间最重要的是什么？",
       "qvi": "Bạn thấy điều quan trọng nhất ở cõi đời này là gì?",
       "scene": "🌍❤️",
       "ans": "我觉得最重要的是家人的健康和快乐",
       "opts": [
        {
         "txt": "我觉得最重要的是今天吃什么",
         "ico": "🍜",
         "py": "Wǒ juéde zuì zhòngyào de shì jīntiān chī shénme"
        },
        {
         "txt": "我没有看过那个电视剧",
         "ico": "📺",
         "py": "Wǒ méiyǒu kàn guò nà gè diànshìjù"
        },
        {
         "txt": "我觉得最重要的是家人的健康和快乐",
         "ico": "❤️",
         "py": "Wǒ juéde zuì zhòngyào de shì jiārén de jiànkāng hé kuàilè"
        }
       ],
       "qpy": "Nǐ juéde rénjiān zuì zhòngyào de shì shénme?"
      },
      {
       "q": "那家饭馆的服务太差了，你还会去吗？",
       "qvi": "Dịch vụ của quán đó quá kém, bạn còn đến nữa không?",
       "scene": "🍽️😠🚫",
       "ans": "不会了我再也不去了",
       "opts": [
        {
         "txt": "我已经吃过早饭了",
         "ico": "🥐",
         "py": "Wǒ yǐjīng chī guò zǎofàn le"
        },
        {
         "txt": "他是我的邻居",
         "ico": "🏠",
         "py": "Tā shì wǒ de línjū"
        },
        {
         "txt": "不会了我再也不去了",
         "ico": "🚫",
         "py": "Bú huì le wǒ zài yě bú qù le"
        }
       ],
       "qpy": "Nà jiā fànguǎn de fúwù tài chà le nǐ hái huì qù ma?"
      },
      {
       "q": "周末你想做什么？",
       "qvi": "Cuối tuần bạn muốn làm gì?",
       "scene": "📅🌳",
       "ans": "我想陪家人去公园玩儿",
       "opts": [
        {
         "txt": "他是我们公司的经理",
         "ico": "💼",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        },
        {
         "txt": "我想陪家人去公园玩儿",
         "ico": "🌳",
         "py": "Wǒ xiǎng péi jiārén qù gōngyuán wánr"
        },
        {
         "txt": "这个手机不太贵",
         "ico": "📱",
         "py": "Zhè gè shǒujī bù tài guì"
        }
       ],
       "qpy": "Zhōumò nǐ xiǎng zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trò chuyện về gia đình và bạn bè với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Giới thiệu với đồng nghiệp người Trung Quốc về một người thân, dùng <i>\"她一辈子陪着丈夫\"</i> hoặc <i>\"儿女长大以后再也不需要父母天天陪着\"</i> để nói về gia đình.",
       "<b>Bước 2:</b> Nhớ lại một mối quan hệ đã thay đổi (bạn cũ, hàng xóm, đồng nghiệp) và tự nói 3 câu với 再也不 / 再也没有, ví dụ <i>\"我们的友谊再也没有出过问题\"</i>.",
       "<b>Bước 3:</b> Ghi âm 1 phút lời khuyên về cách nói chuyện với con hoặc đồng nghiệp, dùng <i>\"你这样说话会让他再也没有面子\"</i> và <i>\"对孩子要有耐心\"</i> làm mẫu."
      ]
     }
    }
   ]
  },
  "5.20": {
   "lessons": [
    {
     "id": "5.20A",
     "name": "Bài 5.20A: Cơ thể con người",
     "grammar": {
      "formulas": [
       "👃 我的鼻子 + ❗ 可 + 😣 疼了",
       "😐 他今天的脸色 + ❗ 可 + 🙅 不好",
       "⚠️ 你的肠胃不好 + ❗ 可别 + 🌶️ 吃太辣的东西"
      ],
      "tip": "Phó từ 可 (kě, khả) đặt ngay trước vị ngữ để nhấn mạnh, thường mang giọng khẩu ngữ: \"thật là, quả là\". Hay đi với tính từ + 了 (可疼了), với 真, với 不 (可不好) hoặc so sánh 比. 可别 (kě bié) dùng để dặn dò mạnh: \"đừng có..., nhớ đừng...\".",
      "vn_tip": "Người Việt hay chỉ dịch 可 là \"có thể\" (như 可以) nên bỏ qua nghĩa nhấn mạnh. Ở đây 可 không nói về khả năng mà để nhấn giọng: 我的鼻子可疼了 = Mũi tôi đau lắm đấy. Muốn dặn \"đừng\" thì nói 可别 + động từ, không nói 可不要 một cách rời rạc."
     },
     "chunks": [
      {
       "scene": "👃😣🤧",
       "full": "我的鼻子可疼了",
       "vi": "Mũi của tôi đau lắm đấy",
       "parts": [
        {
         "t": "我的鼻子",
         "ico": "👃",
         "c": "s",
         "py": "wǒ de bízi",
         "hv": "ngã đích tị tử"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "疼了",
         "ico": "😣",
         "c": "o",
         "py": "téng le",
         "hv": "đông liễu"
        }
       ],
       "traceWord": "鼻子",
       "py": "Wǒ de bízi kě téng le",
       "traceKey": "bizi",
       "traceInfo": [
        {
         "c": "鼻",
         "py": "bí",
         "hv": "tị"
        },
        {
         "c": "子",
         "py": "zi",
         "hv": "tử"
        }
       ]
      },
      {
       "scene": "🐱👂📏",
       "full": "这只猫的耳朵可大了",
       "vi": "Tai của con mèo này to thật đấy",
       "parts": [
        {
         "t": "这只猫的耳朵",
         "ico": "🐱",
         "c": "s",
         "py": "zhè zhǐ māo de ěrduo",
         "hv": "giá chỉ miêu đích nhĩ đóa"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "大了",
         "ico": "📏",
         "c": "o",
         "py": "dà le",
         "hv": "đại liễu"
        }
       ],
       "traceWord": "耳朵",
       "py": "Zhè zhǐ māo de ěrduo kě dà le",
       "traceKey": "erduo",
       "traceInfo": [
        {
         "c": "耳",
         "py": "ěr",
         "hv": "nhĩ"
        },
        {
         "c": "朵",
         "py": "duo",
         "hv": "đóa"
        }
       ]
      },
      {
       "scene": "👨😐🏥",
       "full": "他今天的脸色可不好",
       "vi": "Sắc mặt của anh ấy hôm nay không tốt chút nào",
       "parts": [
        {
         "t": "他今天的脸色",
         "ico": "😐",
         "c": "s",
         "py": "tā jīntiān de liǎnsè",
         "hv": "tha kim thiên đích kiểm sắc"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "不好",
         "ico": "🙅",
         "c": "o",
         "py": "bù hǎo",
         "hv": "bất hảo"
        }
       ],
       "traceWord": "脸色",
       "py": "Tā jīntiān de liǎnsè kě bù hǎo",
       "traceKey": "lianse",
       "traceInfo": [
        {
         "c": "脸",
         "py": "liǎn",
         "hv": "kiểm"
        },
        {
         "c": "色",
         "py": "sè",
         "hv": "sắc"
        }
       ]
      },
      {
       "scene": "📅💼😫",
       "full": "这几天我的肩可酸了",
       "vi": "Mấy ngày nay vai tôi mỏi lắm",
       "parts": [
        {
         "t": "这几天我的肩",
         "ico": "💼",
         "c": "s",
         "py": "zhè jǐ tiān wǒ de jiān",
         "hv": "giá kỷ thiên ngã đích kiên"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "酸了",
         "ico": "😫",
         "c": "o",
         "py": "suān le",
         "hv": "toan liễu"
        }
       ],
       "traceWord": "肩",
       "py": "Zhè jǐ tiān wǒ de jiān kě suān le",
       "traceKey": "jian",
       "traceInfo": [
        {
         "c": "肩",
         "py": "jiān",
         "hv": "kiên"
        }
       ]
      },
      {
       "scene": "☀️🧴💦",
       "full": "夏天我的皮肤可容易出汗",
       "vi": "Mùa hè da tôi rất dễ ra mồ hôi",
       "parts": [
        {
         "t": "夏天我的皮肤",
         "ico": "🧴",
         "c": "s",
         "py": "xiàtiān wǒ de pífū",
         "hv": "hạ thiên ngã đích bì phu"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "容易出汗",
         "ico": "💦",
         "c": "o",
         "py": "róngyì chūhàn",
         "hv": "dung dị xuất hãn"
        }
       ],
       "traceWord": "皮肤",
       "py": "Xiàtiān wǒ de pífū kě róngyì chūhàn",
       "traceKey": "pifu",
       "traceInfo": [
        {
         "c": "皮",
         "py": "pí",
         "hv": "bì"
        },
        {
         "c": "肤",
         "py": "fū",
         "hv": "phu"
        }
       ]
      },
      {
       "scene": "💅👆📏",
       "full": "你的指甲可比我的长多了",
       "vi": "Móng tay của bạn dài hơn của tôi nhiều đấy",
       "parts": [
        {
         "t": "你的指甲",
         "ico": "💅",
         "c": "s",
         "py": "nǐ de zhǐjia",
         "hv": "nễ đích chỉ giáp"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "比我的长多了",
         "ico": "📏",
         "c": "o",
         "py": "bǐ wǒ de cháng duō le",
         "hv": "tỷ ngã đích trường đa liễu"
        }
       ],
       "traceWord": "指甲",
       "py": "Nǐ de zhǐjia kě bǐ wǒ de cháng duō le",
       "traceKey": "zhijia",
       "traceInfo": [
        {
         "c": "指",
         "py": "zhǐ",
         "hv": "chỉ"
        },
        {
         "c": "甲",
         "py": "jia",
         "hv": "giáp"
        }
       ]
      },
      {
       "scene": "🍜🌶️🚫",
       "full": "你的肠胃不好可别吃太辣的东西",
       "vi": "Dạ dày ruột của bạn không tốt thì đừng có ăn đồ quá cay",
       "parts": [
        {
         "t": "你的肠胃不好",
         "ico": "🫃",
         "c": "s",
         "py": "nǐ de cháng wèi bù hǎo",
         "hv": "nễ đích trường vị bất hảo"
        },
        {
         "t": "可别",
         "ico": "🚫",
         "c": "v",
         "py": "kě bié",
         "hv": "khả biệt"
        },
        {
         "t": "吃太辣的东西",
         "ico": "🌶️",
         "c": "o",
         "py": "chī tài là de dōngxi",
         "hv": "cật thái lạt đích đông tây"
        }
       ],
       "traceWord": "肠",
       "py": "Nǐ de cháng wèi bù hǎo kě bié chī tài là de dōngxi",
       "traceKey": "chang",
       "traceInfo": [
        {
         "c": "肠",
         "py": "cháng",
         "hv": "trường"
        }
       ]
      },
      {
       "scene": "🏋️💪👥",
       "full": "经常锻炼的人肌肉可比一般人发达",
       "vi": "Người thường xuyên tập luyện thì cơ bắp phát triển hơn người bình thường nhiều",
       "parts": [
        {
         "t": "经常锻炼的人肌肉",
         "ico": "🏋️",
         "c": "s",
         "py": "jīngcháng duànliàn de rén jīròu",
         "hv": "kinh thường đoán luyện đích nhân cơ nhục"
        },
        {
         "t": "可",
         "ico": "❗",
         "c": "v",
         "py": "kě",
         "hv": "khả"
        },
        {
         "t": "比一般人发达",
         "ico": "💪",
         "c": "o",
         "py": "bǐ yībān rén fādá",
         "hv": "tỷ nhất ban nhân phát đạt"
        }
       ],
       "traceWord": "肌肉",
       "py": "Jīngcháng duànliàn de rén jīròu kě bǐ yībān rén fādá",
       "traceKey": "jirou",
       "traceInfo": [
        {
         "c": "肌",
         "py": "jī",
         "hv": "cơ"
        },
        {
         "c": "肉",
         "py": "ròu",
         "hv": "nhục"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你为什么不敢一个人晚上出门？",
       "qvi": "Tại sao bạn không dám một mình ra ngoài buổi tối?",
       "scene": "🌙🚪😨",
       "ans": "我的胆可小了",
       "opts": [
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        },
        {
         "txt": "我的胆可小了",
         "ico": "😨",
         "py": "Wǒ de dǎn kě xiǎo le"
        },
        {
         "txt": "这家店的菜很好吃",
         "ico": "🍜",
         "py": "Zhè jiā diàn de cài hěn hǎochī"
        }
       ],
       "qpy": "Nǐ wèi shénme bù gǎn yī gè rén wǎnshang chūmén?"
      },
      {
       "q": "为什么睡觉对脑子很重要？",
       "qvi": "Tại sao giấc ngủ rất quan trọng đối với não?",
       "scene": "😴🧠",
       "ans": "因为睡觉时大脑可以休息",
       "opts": [
        {
         "txt": "因为睡觉时大脑可以休息",
         "ico": "🧠",
         "py": "Yīnwèi shuìjiào shí dànǎo kěyǐ xiūxi"
        },
        {
         "txt": "因为明天是周末",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì zhōumò"
        },
        {
         "txt": "因为这里的东西很便宜",
         "ico": "💰",
         "py": "Yīnwèi zhèlǐ de dōngxi hěn piányi"
        }
       ],
       "qpy": "Wèi shénme shuìjiào duì nǎozi hěn zhòngyào?"
      },
      {
       "q": "他为什么身上都是汗？",
       "qvi": "Tại sao người anh ấy toàn là mồ hôi?",
       "scene": "💦😰",
       "ans": "他的神经可紧张了",
       "opts": [
        {
         "txt": "他是我们公司的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen gōngsī de jīnglǐ"
        },
        {
         "txt": "他喜欢吃面包",
         "ico": "🍞",
         "py": "Tā xǐhuan chī miànbāo"
        },
        {
         "txt": "他的神经可紧张了",
         "ico": "😰",
         "py": "Tā de shénjīng kě jǐnzhāng le"
        }
       ],
       "qpy": "Tā wèi shénme shēnshang dōu shì hàn?"
      },
      {
       "q": "工作的时候你最常用身体的哪个部位？",
       "qvi": "Khi làm việc bạn hay dùng bộ phận nào của cơ thể nhất?",
       "scene": "💻🙌",
       "ans": "我每天用双手打字",
       "opts": [
        {
         "txt": "我明年想去北京",
         "ico": "✈️",
         "py": "Wǒ míngnián xiǎng qù Běijīng"
        },
        {
         "txt": "这个周末我不上班",
         "ico": "🏖️",
         "py": "Zhè gè zhōumò wǒ bú shàngbān"
        },
        {
         "txt": "我每天用双手打字",
         "ico": "🙌",
         "py": "Wǒ měi tiān yòng shuāng shǒu dǎ zì"
        }
       ],
       "qpy": "Gōngzuò de shíhou nǐ zuì cháng yòng shēntǐ de nǎ gè bùwèi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói với đồng nghiệp về sức khỏe sau những ngày làm việc nhiều",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp, kể mấy ngày nay bạn mệt ở bộ phận nào của cơ thể, dùng <i>\"这几天我的肩可酸了\"</i> và đổi bộ phận khác (mũi, da, móng tay).",
       "<b>Bước 2:</b> Khi đồng nghiệp trông không khỏe, hỏi thăm và nhận xét sắc mặt bằng <i>\"你今天的脸色可不好\"</i>, rồi tự nói thành tiếng 2 câu dùng 可 + tính từ + 了.",
       "<b>Bước 3:</b> Khuyên đồng nghiệp bị đau dạ dày bằng cấu trúc 可别, ví dụ <i>\"你的肠胃不好可别吃太辣的东西\"</i>, rồi tự nói thêm 2 lời dặn khác."
      ]
     }
    },
    {
     "id": "5.20B",
     "name": "Bài 5.20B: Văn chương và cảm thụ",
     "grammar": {
      "formulas": [
       "📖 这首诗歌我 + ❗ 怎么也 + 🧠 记不住",
       "✍️ 我练了半年书法 + ❗ 怎么也 + 😣 写不好",
       "🔍 我查了半天辞典 + ❗ 怎么也 + 🚫 没找到这个成语"
      ],
      "tip": "Cấu trúc 怎么都/怎么也 + 不/没 + bổ ngữ (zěnme dōu / zěnme yě, chẩm ma): nhấn mạnh dù làm thế nào cũng không được, thường đi với bổ ngữ khả năng phủ định (记不住, 写不好, 找不到) hoặc 没 + động từ + kết quả. Trước 怎么都/也 là chủ ngữ hoặc đối tượng đã nhắc tới.",
      "vn_tip": "Người Việt hay nói \"sao cũng không\" rồi dịch thẳng thành 怎么样也不 hoặc quên bổ ngữ khả năng. Đúng: 我怎么也记不住 (không nói 我怎么也不记). Dùng 没 khi nói chuyện đã xảy ra: 怎么也没找到."
     },
     "chunks": [
      {
       "scene": "📖🧠😣",
       "full": "这首诗歌我怎么也记不住",
       "vi": "Bài thơ này tôi thế nào cũng không nhớ nổi",
       "parts": [
        {
         "t": "这首诗歌我",
         "ico": "📖",
         "c": "s",
         "py": "zhè shǒu shīgē wǒ",
         "hv": "giá thủ thi ca ngã"
        },
        {
         "t": "怎么也",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme yě",
         "hv": "chẩm ma dã"
        },
        {
         "t": "记不住",
         "ico": "🧠",
         "c": "o",
         "py": "jì bú zhù",
         "hv": "ký bất trú"
        }
       ],
       "traceWord": "诗歌",
       "py": "Zhè shǒu shīgē wǒ zěnme yě jì bú zhù",
       "traceKey": "shige",
       "traceInfo": [
        {
         "c": "诗",
         "py": "shī",
         "hv": "thi"
        },
        {
         "c": "歌",
         "py": "gē",
         "hv": "ca"
        }
       ]
      },
      {
       "scene": "📚👀😵",
       "full": "他写的散文我怎么都看不完",
       "vi": "Bài văn xuôi anh ấy viết tôi thế nào cũng đọc không hết",
       "parts": [
        {
         "t": "他写的散文我",
         "ico": "📚",
         "c": "s",
         "py": "tā xiě de sǎnwén wǒ",
         "hv": "tha tả đích tản văn ngã"
        },
        {
         "t": "怎么都",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme dōu",
         "hv": "chẩm ma đô"
        },
        {
         "t": "看不完",
         "ico": "👀",
         "c": "o",
         "py": "kàn bù wán",
         "hv": "khán bất hoàn"
        }
       ],
       "traceWord": "散文",
       "py": "Tā xiě de sǎnwén wǒ zěnme dōu kàn bù wán",
       "traceKey": "sanwen",
       "traceInfo": [
        {
         "c": "散",
         "py": "sǎn",
         "hv": "tản"
        },
        {
         "c": "文",
         "py": "wén",
         "hv": "văn"
        }
       ]
      },
      {
       "scene": "🖌️📆😣",
       "full": "我练了半年书法怎么也写不好",
       "vi": "Tôi luyện thư pháp nửa năm mà thế nào cũng viết không đẹp",
       "parts": [
        {
         "t": "我练了半年书法",
         "ico": "🖌️",
         "c": "s",
         "py": "wǒ liàn le bàn nián shūfǎ",
         "hv": "ngã luyện liễu bán niên thư pháp"
        },
        {
         "t": "怎么也",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme yě",
         "hv": "chẩm ma dã"
        },
        {
         "t": "写不好",
         "ico": "😣",
         "c": "o",
         "py": "xiě bù hǎo",
         "hv": "tả bất hảo"
        }
       ],
       "traceWord": "书法",
       "py": "Wǒ liàn le bàn nián shūfǎ zěnme yě xiě bù hǎo",
       "traceKey": "shufa",
       "traceInfo": [
        {
         "c": "书",
         "py": "shū",
         "hv": "thư"
        },
        {
         "c": "法",
         "py": "fǎ",
         "hv": "pháp"
        }
       ]
      },
      {
       "scene": "📕😍🤲",
       "full": "这本漫画我怎么都放不下",
       "vi": "Cuốn truyện tranh này tôi thế nào cũng không rời tay được",
       "parts": [
        {
         "t": "这本漫画我",
         "ico": "📕",
         "c": "s",
         "py": "zhè běn mànhuà wǒ",
         "hv": "giá bản mạn họa ngã"
        },
        {
         "t": "怎么都",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme dōu",
         "hv": "chẩm ma đô"
        },
        {
         "t": "放不下",
         "ico": "🤲",
         "c": "o",
         "py": "fàng bú xià",
         "hv": "phóng bất hạ"
        }
       ],
       "traceWord": "漫画",
       "py": "Zhè běn mànhuà wǒ zěnme dōu fàng bú xià",
       "traceKey": "manhua",
       "traceInfo": [
        {
         "c": "漫",
         "py": "màn",
         "hv": "mạn"
        },
        {
         "c": "画",
         "py": "huà",
         "hv": "họa"
        }
       ]
      },
      {
       "scene": "📘🔍⏳",
       "full": "我查了半天辞典怎么也没找到这个成语",
       "vi": "Tôi tra từ điển cả buổi mà thế nào cũng không tìm thấy thành ngữ này",
       "parts": [
        {
         "t": "我查了半天辞典",
         "ico": "📘",
         "c": "s",
         "py": "wǒ chá le bàntiān cídiǎn",
         "hv": "ngã tra liễu bán thiên từ điển"
        },
        {
         "t": "怎么也",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme yě",
         "hv": "chẩm ma dã"
        },
        {
         "t": "没找到这个成语",
         "ico": "🔍",
         "c": "o",
         "py": "méi zhǎodào zhè gè chéngyǔ",
         "hv": "một trảo đáo giá cá thành ngữ"
        }
       ],
       "traceWord": "成语",
       "py": "Wǒ chá le bàntiān cídiǎn zěnme yě méi zhǎodào zhè gè chéngyǔ",
       "traceKey": "chengyu",
       "traceInfo": [
        {
         "c": "成",
         "py": "chéng",
         "hv": "thành"
        },
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        }
       ]
      },
      {
       "scene": "🗣️🇨🇳🤝",
       "full": "我想用华语安慰他怎么都找不到合适的言语",
       "vi": "Tôi muốn dùng tiếng Hoa để an ủi anh ấy nhưng thế nào cũng không tìm được lời lẽ thích hợp",
       "parts": [
        {
         "t": "我想用华语安慰他",
         "ico": "🗣️",
         "c": "s",
         "py": "wǒ xiǎng yòng Huáyǔ ānwèi tā",
         "hv": "ngã tưởng dụng hoa ngữ an úy tha"
        },
        {
         "t": "怎么都",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme dōu",
         "hv": "chẩm ma đô"
        },
        {
         "t": "找不到合适的言语",
         "ico": "💬",
         "c": "o",
         "py": "zhǎo bú dào héshì de yányǔ",
         "hv": "trảo bất đáo hợp thích đích ngôn ngữ"
        }
       ],
       "traceWord": "华语",
       "py": "Wǒ xiǎng yòng Huáyǔ ānwèi tā zěnme dōu zhǎo bú dào héshì de yányǔ",
       "traceKey": "huayu",
       "traceInfo": [
        {
         "c": "华",
         "py": "huá",
         "hv": "hoa"
        },
        {
         "c": "语",
         "py": "yǔ",
         "hv": "ngữ"
        }
       ]
      },
      {
       "scene": "📄🎤🔟",
       "full": "这篇课文我朗读了十遍怎么也读不流利",
       "vi": "Bài khóa này tôi đã đọc to mười lần mà thế nào cũng đọc không trôi chảy",
       "parts": [
        {
         "t": "这篇课文我朗读了十遍",
         "ico": "🎤",
         "c": "s",
         "py": "zhè piān kèwén wǒ lǎngdú le shí biàn",
         "hv": "giá thiên khóa văn ngã lãng độc liễu thập biến"
        },
        {
         "t": "怎么也",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme yě",
         "hv": "chẩm ma dã"
        },
        {
         "t": "读不流利",
         "ico": "📄",
         "c": "o",
         "py": "dú bù liúlì",
         "hv": "độc bất lưu lợi"
        }
       ],
       "traceWord": "朗读",
       "py": "Zhè piān kèwén wǒ lǎngdú le shí biàn zěnme yě dú bù liúlì",
       "traceKey": "langdu",
       "traceInfo": [
        {
         "c": "朗",
         "py": "lǎng",
         "hv": "lãng"
        },
        {
         "c": "读",
         "py": "dú",
         "hv": "độc"
        }
       ]
      },
      {
       "scene": "💬❤️🧠",
       "full": "他那一句话我怎么都忘不了",
       "vi": "Câu nói đó của anh ấy tôi thế nào cũng không quên được",
       "parts": [
        {
         "t": "他那一句话我",
         "ico": "💬",
         "c": "s",
         "py": "tā nà yī jù huà wǒ",
         "hv": "tha na nhất cú thoại ngã"
        },
        {
         "t": "怎么都",
         "ico": "🤷",
         "c": "v",
         "py": "zěnme dōu",
         "hv": "chẩm ma đô"
        },
        {
         "t": "忘不了",
         "ico": "❤️",
         "c": "o",
         "py": "wàng bù le",
         "hv": "vong bất liễu"
        }
       ],
       "traceWord": "一句话",
       "py": "Tā nà yī jù huà wǒ zěnme dōu wàng bù le",
       "traceKey": "yijuhua",
       "traceInfo": [
        {
         "c": "一",
         "py": "yī",
         "hv": "nhất"
        },
        {
         "c": "句",
         "py": "jù",
         "hv": "cú"
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
       "q": "你为什么这么喜欢这位作家？",
       "qvi": "Tại sao bạn thích nhà văn này đến vậy?",
       "scene": "✍️😄",
       "ans": "他的小说幽默又迷人",
       "opts": [
        {
         "txt": "他住在河内",
         "ico": "🏠",
         "py": "Tā zhù zài Hénèi"
        },
        {
         "txt": "他的小说幽默又迷人",
         "ico": "😄",
         "py": "Tā de xiǎoshuō yōumò yòu mírén"
        },
        {
         "txt": "我们明天开会",
         "ico": "👥",
         "py": "Wǒmen míngtiān kāihuì"
        }
       ],
       "qpy": "Nǐ wèi shénme zhème xǐhuan zhè wèi zuòjiā?"
      },
      {
       "q": "这杯茶你品出什么味道了吗？",
       "qvi": "Ly trà này bạn nếm ra mùi vị gì chưa?",
       "scene": "🍵👅",
       "ans": "我怎么都品不出来",
       "opts": [
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "这杯茶是我朋友买的",
         "ico": "🛍️",
         "py": "Zhè bēi chá shì wǒ péngyou mǎi de"
        },
        {
         "txt": "我怎么都品不出来",
         "ico": "🍵",
         "py": "Wǒ zěnme dōu pǐn bù chūlái"
        }
       ],
       "qpy": "Zhè bēi chá nǐ pǐn chū shénme wèidào le ma?"
      },
      {
       "q": "你觉得这个电影怎么样？",
       "qvi": "Bạn thấy bộ phim này thế nào?",
       "scene": "🎬🌹✨",
       "ans": "故事很浪漫也很神奇",
       "opts": [
        {
         "txt": "故事很浪漫也很神奇",
         "ico": "🌹",
         "py": "Gùshi hěn làngmàn yě hěn shénqí"
        },
        {
         "txt": "电影院在地铁站旁边",
         "ico": "🚇",
         "py": "Diànyǐngyuàn zài dìtiězhàn pángbiān"
        },
        {
         "txt": "我的手机没有电了",
         "ico": "🔋",
         "py": "Wǒ de shǒujī méiyǒu diàn le"
        }
       ],
       "qpy": "Nǐ juéde zhè gè diànyǐng zěnmeyàng?"
      },
      {
       "q": "周末你想做什么？",
       "qvi": "Cuối tuần bạn muốn làm gì?",
       "scene": "🎻🎼🏖️",
       "ans": "我想去音乐会欣赏音乐",
       "opts": [
        {
         "txt": "我昨天没有上班",
         "ico": "🏢",
         "py": "Wǒ zuótiān méiyǒu shàngbān"
        },
        {
         "txt": "我想去音乐会欣赏音乐",
         "ico": "🎼",
         "py": "Wǒ xiǎng qù yīnyuèhuì xīnshǎng yīnyuè"
        },
        {
         "txt": "这件衣服太贵了",
         "ico": "👔",
         "py": "Zhè jiàn yīfu tài guì le"
        }
       ],
       "qpy": "Zhōumò nǐ xiǎng zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chia sẻ với bạn bè về việc học tiếng Trung khó khăn",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một người bạn cùng học, than thở về một bài thơ hoặc bài khóa bạn đọc mãi không thuộc, dùng <i>\"这首诗歌我怎么也记不住\"</i>.",
       "<b>Bước 2:</b> Gọi hoặc ghi âm cho giáo viên, kể bạn tra từ điển mà vẫn không hiểu một thành ngữ: <i>\"我查了半天辞典怎么也没找到这个成语\"</i>, rồi hỏi nhờ giúp đỡ.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu về điều gì đó bạn thế nào cũng không làm được hoặc không quên được, mỗi câu dùng 怎么都/怎么也 + bổ ngữ phủ định."
      ]
     }
    },
    {
     "id": "5.20C",
     "name": "Bài 5.20C: Truyền thông và nghe nhìn",
     "grammar": {
      "formulas": [
       "😂 笑也不是 + ， + 😭 哭也不是",
       "📸 拍也不是 + ， + 🙅 不拍也不是",
       "📱 发到微博上也不是 + ， + 🤐 不发也不是"
      ],
      "tip": "X也不是，Y也不是 (yě bú shì, dã bất thị): diễn tả tình thế tiến thoái lưỡng nan, làm X cũng dở mà Y cũng dở, không biết xử trí thế nào. X và Y là hai hành động trái ngược nhau (笑/哭, 说/不说, 留/走, 拍/不拍), thường đặt sau chủ ngữ là người đang khó xử: 他笑也不是，哭也不是.",
      "vn_tip": "Người Việt dễ nhầm mẫu này với phủ định hai đối tượng (这个也不是，那个也不是 = cái này không phải, cái kia cũng không phải). Ở đây X, Y là ĐỘNG TỪ chỉ hai cách làm trái ngược, nghĩa là \"làm thế nào cũng không ổn\": 留也不是，走也不是 (ở cũng dở, đi cũng dở), không dùng danh từ."
     },
     "chunks": [
      {
       "scene": "🌑📸🤔",
       "full": "光线太暗了摄影师拍也不是不拍也不是",
       "vi": "Ánh sáng quá tối, nhiếp ảnh gia chụp cũng dở mà không chụp cũng dở",
       "parts": [
        {
         "t": "光线太暗了摄影师",
         "ico": "💡",
         "c": "s",
         "py": "guāngxiàn tài àn le shèyǐngshī",
         "hv": "quang tuyến thái ám liễu nhiếp ảnh sư"
        },
        {
         "t": "拍也不是",
         "ico": "📸",
         "c": "v",
         "py": "pāi yě bú shì",
         "hv": "phách dã bất thị"
        },
        {
         "t": "不拍也不是",
         "ico": "🙅",
         "c": "o",
         "py": "bù pāi yě bú shì",
         "hv": "bất phách dã bất thị"
        }
       ],
       "traceWord": "光线",
       "py": "Guāngxiàn tài àn le shèyǐngshī pāi yě bú shì bù pāi yě bú shì",
       "traceKey": "guangxian",
       "traceInfo": [
        {
         "c": "光",
         "py": "guāng",
         "hv": "quang"
        },
        {
         "c": "线",
         "py": "xiàn",
         "hv": "tuyến"
        }
       ]
      },
      {
       "scene": "🎞️📱🤔",
       "full": "这段视频发到微博上也不是不发也不是",
       "vi": "Đoạn video này đăng lên Weibo cũng dở mà không đăng cũng dở",
       "parts": [
        {
         "t": "这段视频",
         "ico": "🎞️",
         "c": "s",
         "py": "zhè duàn shìpín",
         "hv": "giá đoạn thị tần"
        },
        {
         "t": "发到微博上也不是",
         "ico": "📱",
         "c": "v",
         "py": "fā dào wēibó shàng yě bú shì",
         "hv": "phát đáo vi bác thượng dã bất thị"
        },
        {
         "t": "不发也不是",
         "ico": "🤐",
         "c": "o",
         "py": "bù fā yě bú shì",
         "hv": "bất phát dã bất thị"
        }
       ],
       "traceWord": "微博",
       "py": "Zhè duàn shìpín fā dào wēibó shàng yě bú shì bù fā yě bú shì",
       "traceKey": "weibo",
       "traceInfo": [
        {
         "c": "微",
         "py": "wēi",
         "hv": "vi"
        },
        {
         "c": "博",
         "py": "bó",
         "hv": "bác"
        }
       ]
      },
      {
       "scene": "👥🎥😟",
       "full": "面对这种场面记者走上前拍摄也不是退后也不是",
       "vi": "Trước cảnh tượng như vậy, phóng viên tiến lên quay cũng dở mà lùi lại cũng dở",
       "parts": [
        {
         "t": "面对这种场面记者",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "miànduì zhè zhǒng chǎngmiàn jìzhě",
         "hv": "diện đối giá chủng trường diện ký giả"
        },
        {
         "t": "走上前拍摄也不是",
         "ico": "🎥",
         "c": "v",
         "py": "zǒu shàng qián pāishè yě bú shì",
         "hv": "tẩu thượng tiền phách nhiếp dã bất thị"
        },
        {
         "t": "退后也不是",
         "ico": "🔙",
         "c": "o",
         "py": "tuì hòu yě bú shì",
         "hv": "thoái hậu dã bất thị"
        }
       ],
       "traceWord": "场面",
       "py": "Miànduì zhè zhǒng chǎngmiàn jìzhě zǒu shàng qián pāishè yě bú shì tuì hòu yě bú shì",
       "traceKey": "changmian",
       "traceInfo": [
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "📹🔋😟",
       "full": "摄像机快没电了小王停也不是继续拍也不是",
       "vi": "Máy quay sắp hết pin, Tiểu Vương dừng cũng dở mà quay tiếp cũng dở",
       "parts": [
        {
         "t": "摄像机快没电了小王",
         "ico": "📹",
         "c": "s",
         "py": "shèxiàngjī kuài méi diàn le Xiǎowáng",
         "hv": "nhiếp tượng cơ khoái một điện liễu tiểu vương"
        },
        {
         "t": "停也不是",
         "ico": "⏹️",
         "c": "v",
         "py": "tíng yě bú shì",
         "hv": "đình dã bất thị"
        },
        {
         "t": "继续拍也不是",
         "ico": "▶️",
         "c": "o",
         "py": "jìxù pāi yě bú shì",
         "hv": "kế tục phách dã bất thị"
        }
       ],
       "traceWord": "摄像机",
       "py": "Shèxiàngjī kuài méi diàn le Xiǎowáng tíng yě bú shì jìxù pāi yě bú shì",
       "traceKey": "shexiangji",
       "traceInfo": [
        {
         "c": "摄",
         "py": "shè",
         "hv": "nhiếp"
        },
        {
         "c": "像",
         "py": "xiàng",
         "hv": "tượng"
        },
        {
         "c": "机",
         "py": "jī",
         "hv": "cơ"
        }
       ]
      },
      {
       "scene": "💿📉🏢",
       "full": "新专辑卖得不好公司继续宣传也不是放弃也不是",
       "vi": "Album mới bán không chạy, công ty tiếp tục quảng bá cũng dở mà bỏ cuộc cũng dở",
       "parts": [
        {
         "t": "新专辑卖得不好公司",
         "ico": "💿",
         "c": "s",
         "py": "xīn zhuānjí mài de bù hǎo gōngsī",
         "hv": "tân chuyên tập mại đắc bất hảo công ti"
        },
        {
         "t": "继续宣传也不是",
         "ico": "📣",
         "c": "v",
         "py": "jìxù xuānchuán yě bú shì",
         "hv": "kế tục tuyên truyền dã bất thị"
        },
        {
         "t": "放弃也不是",
         "ico": "🏳️",
         "c": "o",
         "py": "fàngqì yě bú shì",
         "hv": "phóng khí dã bất thị"
        }
       ],
       "traceWord": "专辑",
       "py": "Xīn zhuānjí mài de bù hǎo gōngsī jìxù xuānchuán yě bú shì fàngqì yě bú shì",
       "traceKey": "zhuanji",
       "traceInfo": [
        {
         "c": "专",
         "py": "zhuān",
         "hv": "chuyên"
        },
        {
         "c": "辑",
         "py": "jí",
         "hv": "tập"
        }
       ]
      },
      {
       "scene": "📺📉🤔",
       "full": "观众越来越少这个频道改也不是不改也不是",
       "vi": "Khán giả ngày càng ít, kênh này thay đổi cũng dở mà không đổi cũng dở",
       "parts": [
        {
         "t": "观众越来越少这个频道",
         "ico": "📺",
         "c": "s",
         "py": "guānzhòng yuè lái yuè shǎo zhè gè píndào",
         "hv": "quan chúng việt lai việt thiểu giá cá tần đạo"
        },
        {
         "t": "改也不是",
         "ico": "🔄",
         "c": "v",
         "py": "gǎi yě bú shì",
         "hv": "cải dã bất thị"
        },
        {
         "t": "不改也不是",
         "ico": "🙅",
         "c": "o",
         "py": "bù gǎi yě bú shì",
         "hv": "bất cải dã bất thị"
        }
       ],
       "traceWord": "频道",
       "py": "Guānzhòng yuè lái yuè shǎo zhè gè píndào gǎi yě bú shì bù gǎi yě bú shì",
       "traceKey": "pindao",
       "traceInfo": [
        {
         "c": "频",
         "py": "pín",
         "hv": "tần"
        },
        {
         "c": "道",
         "py": "dào",
         "hv": "đạo"
        }
       ]
      },
      {
       "scene": "💻📝😣",
       "full": "同事在博客上批评了我我回复也不是不回复也不是",
       "vi": "Đồng nghiệp phê bình tôi trên blog, tôi trả lời cũng dở mà không trả lời cũng dở",
       "parts": [
        {
         "t": "同事在博客上批评了我我",
         "ico": "📝",
         "c": "s",
         "py": "tóngshì zài bókè shàng pīpíng le wǒ wǒ",
         "hv": "đồng sự tại bác khách thượng phê bình liễu ngã ngã"
        },
        {
         "t": "回复也不是",
         "ico": "💬",
         "c": "v",
         "py": "huífù yě bú shì",
         "hv": "hồi phục dã bất thị"
        },
        {
         "t": "不回复也不是",
         "ico": "🤐",
         "c": "o",
         "py": "bù huífù yě bú shì",
         "hv": "bất hồi phục dã bất thị"
        }
       ],
       "traceWord": "博客",
       "py": "Tóngshì zài bókè shàng pīpíng le wǒ wǒ huífù yě bú shì bù huífù yě bú shì",
       "traceKey": "boke",
       "traceInfo": [
        {
         "c": "博",
         "py": "bó",
         "hv": "bác"
        },
        {
         "c": "客",
         "py": "kè",
         "hv": "khách"
        }
       ]
      },
      {
       "scene": "🖥️😂😭",
       "full": "看到画面上的景象他笑也不是哭也不是",
       "vi": "Nhìn thấy cảnh tượng trên màn hình, anh ấy cười cũng dở mà khóc cũng dở",
       "parts": [
        {
         "t": "看到画面上的景象他",
         "ico": "🖼️",
         "c": "s",
         "py": "kàndào huàmiàn shàng de jǐngxiàng tā",
         "hv": "khán đáo họa diện thượng đích cảnh tượng tha"
        },
        {
         "t": "笑也不是",
         "ico": "😂",
         "c": "v",
         "py": "xiào yě bú shì",
         "hv": "tiếu dã bất thị"
        },
        {
         "t": "哭也不是",
         "ico": "😭",
         "c": "o",
         "py": "kū yě bú shì",
         "hv": "khốc dã bất thị"
        }
       ],
       "traceWord": "景象",
       "py": "Kàndào huàmiàn shàng de jǐngxiàng tā xiào yě bú shì kū yě bú shì",
       "traceKey": "jingxiang",
       "traceInfo": [
        {
         "c": "景",
         "py": "jǐng",
         "hv": "cảnh"
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
       "q": "大家为什么都注视着台上？",
       "qvi": "Tại sao mọi người đều nhìn chăm chú lên sân khấu?",
       "scene": "👥👀🎤",
       "ans": "因为演员在唱歌",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为这家饭店很便宜",
         "ico": "🍜",
         "py": "Yīnwèi zhè jiā fàndiàn hěn piányi"
        },
        {
         "txt": "因为演员在唱歌",
         "ico": "🎤",
         "py": "Yīnwèi yǎnyuán zài chànggē"
        }
       ],
       "qpy": "Dàjiā wèi shénme dōu zhùshì zhe táishàng?"
      },
      {
       "q": "你为什么喜欢这件衣服？",
       "qvi": "Tại sao bạn thích bộ quần áo này?",
       "scene": "👔🖤",
       "ans": "这件黑色衣服穿上显瘦",
       "opts": [
        {
         "txt": "他今天去了机场",
         "ico": "✈️",
         "py": "Tā jīntiān qù le jīchǎng"
        },
        {
         "txt": "这件黑色衣服穿上显瘦",
         "ico": "👔",
         "py": "Zhè jiàn hēisè yīfu chuānshang xiǎn shòu"
        },
        {
         "txt": "他的车是白色的",
         "ico": "🚗",
         "py": "Tā de chē shì báisè de"
        }
       ],
       "qpy": "Nǐ wèi shénme xǐhuan zhè jiàn yīfu?"
      },
      {
       "q": "客户对这段视频不满意，你要重新拍吗？",
       "qvi": "Khách hàng không hài lòng với đoạn video này, bạn có quay lại không?",
       "scene": "🎞️😠🤔",
       "ans": "时间不够了，重新拍也不是，不拍也不是",
       "opts": [
        {
         "txt": "这家饭店的菜很好吃",
         "ico": "🍜",
         "py": "Zhè jiā fàndiàn de cài hěn hǎochī"
        },
        {
         "txt": "时间不够了，重新拍也不是，不拍也不是",
         "ico": "🎬",
         "py": "Shíjiān bùgòu le chóngxīn pāi yě bú shì bù pāi yě bú shì"
        },
        {
         "txt": "他们下午三点开会",
         "ico": "👥",
         "py": "Tāmen xiàwǔ sān diǎn kāihuì"
        }
       ],
       "qpy": "Kèhù duì zhè duàn shìpín bù mǎnyì nǐ yào chóngxīn pāi ma?"
      },
      {
       "q": "你是学摄影还是学摄像的？",
       "qvi": "Bạn học nhiếp ảnh hay học quay phim?",
       "scene": "📷🎥👤",
       "ans": "我是学摄影的，也会一点摄像",
       "opts": [
        {
         "txt": "我是学摄影的，也会一点摄像",
         "ico": "📷",
         "py": "Wǒ shì xué shèyǐng de yě huì yī diǎn shèxiàng"
        },
        {
         "txt": "我每天坐地铁上班",
         "ico": "🚇",
         "py": "Wǒ měi tiān zuò dìtiě shàngbān"
        },
        {
         "txt": "我已经把报告发给经理了",
         "ico": "📄",
         "py": "Wǒ yǐjīng bǎ bàogào fā gěi jīnglǐ le"
        }
       ],
       "qpy": "Nǐ shì xué shèyǐng háishi xué shèxiàng de?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Phối hợp với đồng nghiệp làm nội dung truyền thông",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp phụ trách truyền thông, hỏi ai quay video của công ty rồi trả lời loại trừ: <i>\"拍摄这个视频的人也不是小王也不是小李\"</i>.",
       "<b>Bước 2:</b> Gọi cho bộ phận thiết bị, nói rằng cả hai máy quay đều không phải của công ty, dùng <i>\"这台摄像机也不是公司的那台也不是\"</i>, rồi hỏi cách mượn máy.",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu loại trừ về kênh, album, hình ảnh hay ánh sáng mà bạn đang xem, mỗi câu dùng 也不是…也不是."
      ]
     }
    }
   ]
  },
  "5.21": {
   "lessons": [
    {
     "id": "5.21A",
     "name": "Bài 5.21A: Sân khấu và âm nhạc",
     "grammar": {
      "formulas": [
       "🎭 X + 也 + 不是 ，",
       "🎤 Y + 也 + 不是"
      ],
      "tip": "Mẫu \"X也X不得，Y也Y不得\" (X yě X bù dé, Y yě Y bù dé) diễn tả thế khó xử, tiến thoái lưỡng nan: làm thế này cũng không được, làm thế kia cũng không xong. Ở đây ta dùng cách nói gần nghĩa \"X也不是，Y也不是\" (也 yě: cũng; 不是 bú shì: không phải/không ổn): 笑也不是，哭也不是 = cười cũng dở, khóc cũng dở. Hai vế song song, vế thứ hai thường là điều đối lập hoặc phủ định của vế đầu (去也不是，不去也不是).",
      "vn_tip": "Người Việt hay bỏ chữ 也 ở vế thứ hai hoặc nói \"不X不是\" cho cả hai vế. Cần giữ đủ 也 ở CẢ HAI vế: 去也不是，不去也不是 (đúng); không nói 去不是，不去不是."
     },
     "chunks": [
      {
       "scene": "📜✏️",
       "full": "这个剧本改也不是不改也不是",
       "vi": "Kịch bản này sửa cũng dở, không sửa cũng dở",
       "parts": [
        {
         "t": "这个剧本",
         "ico": "📜",
         "c": "s",
         "py": "zhè gè jùběn",
         "hv": "giá cá kịch bản"
        },
        {
         "t": "改也不是",
         "ico": "✏️",
         "c": "v",
         "py": "gǎi yě bú shì",
         "hv": "cải dã bất thị"
        },
        {
         "t": "不改也不是",
         "ico": "🚫",
         "c": "o",
         "py": "bù gǎi yě bú shì",
         "hv": "bất cải dã bất thị"
        }
       ],
       "traceWord": "剧本",
       "py": "Zhè gè jùběn gǎi yě bú shì bù gǎi yě bú shì",
       "traceKey": "juben",
       "traceInfo": [
        {
         "c": "剧",
         "py": "jù",
         "hv": "kịch"
        },
        {
         "c": "本",
         "py": "běn",
         "hv": "bản"
        }
       ]
      },
      {
       "scene": "🎭😂😭",
       "full": "这出喜剧太奇怪笑也不是哭也不是",
       "vi": "Vở hài kịch này kỳ quặc quá, cười cũng dở, khóc cũng dở",
       "parts": [
        {
         "t": "这出喜剧",
         "ico": "🎭",
         "c": "s",
         "py": "zhè chū xǐjù",
         "hv": "giá xuất hỉ kịch"
        },
        {
         "t": "太奇怪",
         "ico": "🤨",
         "c": "v",
         "py": "tài qíguài",
         "hv": "thái kỳ quái"
        },
        {
         "t": "笑也不是哭也不是",
         "ico": "😂",
         "c": "o",
         "py": "xiào yě bú shì kū yě bú shì",
         "hv": "tiếu dã bất thị khốc dã bất thị"
        }
       ],
       "traceWord": "喜剧",
       "py": "Zhè chū xǐjù tài qíguài xiào yě bú shì kū yě bú shì",
       "traceKey": "xiju",
       "traceInfo": [
        {
         "c": "喜",
         "py": "xǐ",
         "hv": "hỉ"
        },
        {
         "c": "剧",
         "py": "jù",
         "hv": "kịch"
        }
       ]
      },
      {
       "scene": "🎤😑🙉",
       "full": "他演的相声太无聊听也不是不听也不是",
       "vi": "Tiếng tương anh ấy diễn chán quá, nghe cũng dở, không nghe cũng dở",
       "parts": [
        {
         "t": "他演的相声",
         "ico": "🎤",
         "c": "s",
         "py": "tā yǎn de xiàngsheng",
         "hv": "tha diễn đích tướng thanh"
        },
        {
         "t": "太无聊",
         "ico": "😑",
         "c": "v",
         "py": "tài wúliáo",
         "hv": "thái vô liêu"
        },
        {
         "t": "听也不是不听也不是",
         "ico": "🙉",
         "c": "o",
         "py": "tīng yě bú shì bù tīng yě bú shì",
         "hv": "thính dã bất thị bất thính dã bất thị"
        }
       ],
       "traceWord": "相声",
       "py": "Tā yǎn de xiàngsheng tài wúliáo tīng yě bú shì bù tīng yě bú shì",
       "traceKey": "xiangsheng",
       "traceInfo": [
        {
         "c": "相",
         "py": "xiàng",
         "hv": "tướng"
        },
        {
         "c": "声",
         "py": "sheng",
         "hv": "thanh"
        }
       ]
      },
      {
       "scene": "🧑‍🤝‍🧑🎟️🤔",
       "full": "朋友请我去看戏去也不是不去也不是",
       "vi": "Bạn mời tôi đi xem kịch, đi cũng dở, không đi cũng dở",
       "parts": [
        {
         "t": "朋友",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "péngyou",
         "hv": "bằng hữu"
        },
        {
         "t": "请我去看戏",
         "ico": "🎟️",
         "c": "v",
         "py": "qǐng wǒ qù kàn xì",
         "hv": "thỉnh ngã khứ khán hí"
        },
        {
         "t": "去也不是不去也不是",
         "ico": "🤔",
         "c": "o",
         "py": "qù yě bú shì bú qù yě bú shì",
         "hv": "khứ dã bất thị bất khứ dã bất thị"
        }
       ],
       "traceWord": "戏",
       "py": "Péngyou qǐng wǒ qù kàn xì qù yě bú shì bú qù yě bú shì",
       "traceKey": "xi",
       "traceInfo": [
        {
         "c": "戏",
         "py": "xì",
         "hv": "hí"
        }
       ]
      },
      {
       "scene": "🎬🎭😟",
       "full": "导演让我扮演坏人演也不是不演也不是",
       "vi": "Đạo diễn bảo tôi đóng vai kẻ xấu, đóng cũng dở, không đóng cũng dở",
       "parts": [
        {
         "t": "导演",
         "ico": "🎬",
         "c": "s",
         "py": "dǎoyǎn",
         "hv": "đạo diễn"
        },
        {
         "t": "让我扮演坏人",
         "ico": "🎭",
         "c": "v",
         "py": "ràng wǒ bànyǎn huàirén",
         "hv": "nhượng ngã _ diễn hoại nhân"
        },
        {
         "t": "演也不是不演也不是",
         "ico": "😟",
         "c": "o",
         "py": "yǎn yě bú shì bù yǎn yě bú shì",
         "hv": "diễn dã bất thị bất diễn dã bất thị"
        }
       ],
       "traceWord": "扮演",
       "py": "Dǎoyǎn ràng wǒ bànyǎn huàirén yǎn yě bú shì bù yǎn yě bú shì",
       "traceKey": "banyan",
       "traceInfo": [
        {
         "c": "扮",
         "py": "bàn",
         "hv": "_"
        },
        {
         "c": "演",
         "py": "yǎn",
         "hv": "diễn"
        }
       ]
      },
      {
       "scene": "🏠🥁🎹",
       "full": "邻居老是打鼓弹琴劝也不是不劝也不是",
       "vi": "Hàng xóm cứ đánh trống gảy đàn suốt, khuyên cũng dở, không khuyên cũng dở",
       "parts": [
        {
         "t": "邻居",
         "ico": "🏠",
         "c": "s",
         "py": "línjū",
         "hv": "lân cư"
        },
        {
         "t": "老是打鼓弹琴",
         "ico": "🥁",
         "c": "v",
         "py": "lǎoshì dǎ gǔ tán qín",
         "hv": "lão thị đả cổ đàn cầm"
        },
        {
         "t": "劝也不是不劝也不是",
         "ico": "😣",
         "c": "o",
         "py": "quàn yě bú shì bú quàn yě bú shì",
         "hv": "khuyến dã bất thị bất khuyến dã bất thị"
        }
       ],
       "traceWord": "鼓",
       "py": "Línjū lǎoshì dǎ gǔ tán qín quàn yě bú shì bú quàn yě bú shì",
       "traceKey": "gu",
       "traceInfo": [
        {
         "c": "鼓",
         "py": "gǔ",
         "hv": "cổ"
        }
       ]
      },
      {
       "scene": "🎉💃😳",
       "full": "晚会上他让我跳一段舞跳也不是不跳也不是",
       "vi": "Ở buổi tiệc anh ấy bảo tôi nhảy một điệu, nhảy cũng dở, không nhảy cũng dở",
       "parts": [
        {
         "t": "晚会上",
         "ico": "🎉",
         "c": "s",
         "py": "wǎnhuì shàng",
         "hv": "vãn hội thượng"
        },
        {
         "t": "他让我跳一段舞",
         "ico": "💃",
         "c": "v",
         "py": "tā ràng wǒ tiào yī duàn wǔ",
         "hv": "tha nhượng ngã khiêu nhất đoạn vũ"
        },
        {
         "t": "跳也不是不跳也不是",
         "ico": "😳",
         "c": "o",
         "py": "tiào yě bú shì bú tiào yě bú shì",
         "hv": "khiêu dã bất thị bất khiêu dã bất thị"
        }
       ],
       "traceWord": "舞",
       "py": "Wǎnhuì shàng tā ràng wǒ tiào yī duàn wǔ tiào yě bú shì bú tiào yě bú shì",
       "traceKey": "wu",
       "traceInfo": [
        {
         "c": "舞",
         "py": "wǔ",
         "hv": "vũ"
        }
       ]
      },
      {
       "scene": "👥👏🎤",
       "full": "大家都在鼓掌他站在台上唱也不是走也不是",
       "vi": "Mọi người đều đang vỗ tay, anh ấy đứng trên sân khấu, hát cũng dở, đi cũng dở",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都在鼓掌",
         "ico": "👏",
         "c": "v",
         "py": "dōu zài gǔzhǎng",
         "hv": "đô tại cổ chưởng"
        },
        {
         "t": "他站在台上唱也不是走也不是",
         "ico": "🎤",
         "c": "o",
         "py": "tā zhàn zài táishàng chàng yě bú shì zǒu yě bú shì",
         "hv": "tha trạm tại đài thượng xướng dã bất thị tẩu dã bất thị"
        }
       ],
       "traceWord": "鼓掌",
       "py": "Dàjiā dōu zài gǔzhǎng tā zhàn zài táishàng chàng yě bú shì zǒu yě bú shì",
       "traceKey": "guzhang",
       "traceInfo": [
        {
         "c": "鼓",
         "py": "gǔ",
         "hv": "cổ"
        },
        {
         "c": "掌",
         "py": "zhǎng",
         "hv": "chưởng"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你更喜欢看悲剧还是喜剧？",
       "qvi": "Bạn thích xem bi kịch hay hài kịch hơn?",
       "scene": "🎭😢😂",
       "ans": "我更喜欢看喜剧",
       "opts": [
        {
         "txt": "我更喜欢看喜剧",
         "ico": "😂",
         "py": "Wǒ gèng xǐhuan kàn xǐjù"
        },
        {
         "txt": "我今年二十五岁",
         "ico": "🎂",
         "py": "Wǒ jīnnián èr shí wǔ suì"
        },
        {
         "txt": "我在银行工作",
         "ico": "🏦",
         "py": "Wǒ zài yínháng gōngzuò"
        }
       ],
       "qpy": "Nǐ gèng xǐhuan kàn bēijù háishi xǐjù?"
      },
      {
       "q": "这部戏剧的题材是什么？",
       "qvi": "Đề tài của vở kịch này là gì?",
       "scene": "🎭📖",
       "ans": "题材是乡村生活",
       "opts": [
        {
         "txt": "题材是乡村生活",
         "ico": "🌾",
         "py": "Tícái shì xiāngcūn shēnghuó"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "明天下午开会",
         "ico": "🗓️",
         "py": "Míngtiān xiàwǔ kāihuì"
        }
       ],
       "qpy": "Zhè bù xìjù de tícái shì shénme?"
      },
      {
       "q": "这个剧本的情节怎么样？",
       "qvi": "Tình tiết của kịch bản này thế nào?",
       "scene": "📜🤔",
       "ans": "情节很丰富",
       "opts": [
        {
         "txt": "情节很丰富",
         "ico": "✨",
         "py": "Qíngjié hěn fēngfù"
        },
        {
         "txt": "我家在北京",
         "ico": "🏠",
         "py": "Wǒ jiā zài Běijīng"
        },
        {
         "txt": "这个包是红色的",
         "ico": "👜",
         "py": "Zhè gè bāo shì hóngsè de"
        }
       ],
       "qpy": "Zhè gè jùběn de qíngjié zěnmeyàng?"
      },
      {
       "q": "文艺晚会上有什么节目？",
       "qvi": "Buổi dạ hội văn nghệ có những tiết mục gì?",
       "scene": "🎉🎹🎵",
       "ans": "有歌曲和钢琴",
       "opts": [
        {
         "txt": "有米饭和鸡蛋",
         "ico": "🍚",
         "py": "Yǒu mǐfàn hé jīdàn"
        },
        {
         "txt": "有歌曲和钢琴",
         "ico": "🎹",
         "py": "Yǒu gēqǔ hé gāngqín"
        },
        {
         "txt": "有火车和飞机",
         "ico": "✈️",
         "py": "Yǒu huǒchē hé fēijī"
        }
       ],
       "qpy": "Wényì wǎnhuì shàng yǒu shénme jiémù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin kể chuyện xem kịch cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một buổi biểu diễn (kịch, tấu nói, hòa nhạc) bạn từng xem, hoặc tưởng tượng một buổi. Viết 2 câu cho đồng nghiệp nói đó là <i>\"喜剧\"</i> hay <i>\"悲剧\"</i>, đề tài và tình tiết ra sao.",
       "<b>Bước 2:</b> Kể một tình huống khó xử của bạn bằng mẫu mới, ví dụ bạn bè rủ đi xem mà bạn đang bận: <i>\"去也不是，不去也不是\"</i>. Đặt thêm 2 câu với các động từ khác (笑, 听, 劝...).",
       "<b>Bước 3:</b> Tự nói thành tiếng 3 câu thể hiện đồng nghiệp vừa diễn xong, mọi người <i>\"鼓掌\"</i>, rồi hỏi đồng nghiệp thích <i>\"钢琴\"</i> hay <i>\"歌曲\"</i>. Ghi âm lại và nghe thử."
      ]
     }
    },
    {
     "id": "5.21B",
     "name": "Bài 5.21B: Động thực vật và nông thôn",
     "grammar": {
      "formulas": [
       "🐼 X + 是 + 它 ，",
       "🌸 Y + 也 + 是 + 它"
      ],
      "tip": "Mẫu \"X是它，Y也是它\" (X shì tā, Y yě shì tā) dùng 它 (tā: nó, chỉ vật/con vật) để nhấn mạnh CÙNG MỘT đối tượng đã nêu ở đầu câu vừa là X vừa là Y. Cấu trúc: nêu chủ đề trước (说到竹子 / 说起桃树), rồi 吃的是它，睡的也是它 = \"ăn là nó, ngủ cũng là nó\". X, Y thường là cụm có 的: 春天开花的是它，秋天丰收的也是它. 也 (yě: cũng) đặt ngay trước 是 ở vế sau.",
      "vn_tip": "Người Việt hay nói \"X là nó, Y cũng nó\" và bỏ 是 hoặc quên 它, hoặc dùng 他 (tā, người) cho con vật. Với vật và động vật phải dùng 它 và giữ đủ 是: 吃的是它，睡的也是它; không nói 玩的也它. Đừng đặt 也 sau 是 (không nói 是也它)."
     },
     "chunks": [
      {
       "scene": "🐼🎋🍃",
       "full": "说到竹子大熊猫吃的是它睡的也是它",
       "vi": "Nói đến tre, thứ gấu trúc ăn là nó, thứ nó ngủ cũng là nó",
       "parts": [
        {
         "t": "说到竹子大熊猫",
         "ico": "🐼",
         "c": "s",
         "py": "shuō dào zhúzi dàxióngmāo",
         "hv": "thuyết đáo trúc tử đại hùng miêu"
        },
        {
         "t": "吃的是它",
         "ico": "🎋",
         "c": "v",
         "py": "chī de shì tā",
         "hv": "cật đích thị tha"
        },
        {
         "t": "睡的也是它",
         "ico": "😴",
         "c": "o",
         "py": "shuì de yě shì tā",
         "hv": "thụy đích dã thị tha"
        }
       ],
       "traceWord": "大熊猫",
       "py": "Shuō dào zhúzi dàxióngmāo chī de shì tā shuì de yě shì tā",
       "traceKey": "daxiongmao",
       "traceInfo": [
        {
         "c": "大",
         "py": "dà",
         "hv": "đại"
        },
        {
         "c": "熊",
         "py": "xióng",
         "hv": "hùng"
        },
        {
         "c": "猫",
         "py": "māo",
         "hv": "miêu"
        }
       ]
      },
      {
       "scene": "🌸🍑🌾",
       "full": "说起桃树春天开桃花的是它秋天丰收的也是它",
       "vi": "Nói về cây đào, mùa xuân nở hoa là nó, mùa thu được mùa cũng là nó",
       "parts": [
        {
         "t": "说起桃树",
         "ico": "🌸",
         "c": "s",
         "py": "shuō qǐ táoshù",
         "hv": "thuyết khởi đào thụ"
        },
        {
         "t": "春天开桃花的是它",
         "ico": "🌸",
         "c": "v",
         "py": "chūntiān kāi táohuā de shì tā",
         "hv": "xuân thiên khai đào hoa đích thị tha"
        },
        {
         "t": "秋天丰收的也是它",
         "ico": "🍑",
         "c": "o",
         "py": "qiūtiān fēngshōu de yě shì tā",
         "hv": "thu thiên phong thu đích dã thị tha"
        }
       ],
       "traceWord": "桃树",
       "py": "Shuō qǐ táoshù chūntiān kāi táohuā de shì tā qiūtiān fēngshōu de yě shì tā",
       "traceKey": "taoshu",
       "traceInfo": [
        {
         "c": "桃",
         "py": "táo",
         "hv": "đào"
        },
        {
         "c": "树",
         "py": "shù",
         "hv": "thụ"
        }
       ]
      },
      {
       "scene": "🐯😨👀",
       "full": "动物园里的老虎小朋友怕的是它爱看的也是它",
       "vi": "Con hổ trong sở thú, thứ trẻ con sợ là nó, thứ trẻ con thích xem cũng là nó",
       "parts": [
        {
         "t": "动物园里的老虎",
         "ico": "🐯",
         "c": "s",
         "py": "dòngwùyuán lǐ de lǎo hǔ",
         "hv": "động vật viên lý đích lão hổ"
        },
        {
         "t": "小朋友怕的是它",
         "ico": "😨",
         "c": "v",
         "py": "xiǎopéngyǒu pà de shì tā",
         "hv": "tiểu bằng hữu phạ đích thị tha"
        },
        {
         "t": "爱看的也是它",
         "ico": "👀",
         "c": "o",
         "py": "ài kàn de yě shì tā",
         "hv": "ái khán đích dã thị tha"
        }
       ],
       "traceWord": "虎",
       "py": "Dòngwùyuán lǐ de lǎo hǔ xiǎopéngyǒu pà de shì tā ài kàn de yě shì tā",
       "traceKey": "hu",
       "traceInfo": [
        {
         "c": "虎",
         "py": "hǔ",
         "hv": "hổ"
        }
       ]
      },
      {
       "scene": "🐍😱😲",
       "full": "那条蛇让我害怕的是它让我吃惊的也是它",
       "vi": "Con rắn kia, thứ làm tôi sợ là nó, thứ làm tôi giật mình cũng là nó",
       "parts": [
        {
         "t": "那条蛇",
         "ico": "🐍",
         "c": "s",
         "py": "nà tiáo shé",
         "hv": "na điều xà"
        },
        {
         "t": "让我害怕的是它",
         "ico": "😱",
         "c": "v",
         "py": "ràng wǒ hàipà de shì tā",
         "hv": "nhượng ngã hại phạ đích thị tha"
        },
        {
         "t": "让我吃惊的也是它",
         "ico": "😲",
         "c": "o",
         "py": "ràng wǒ chījīng de yě shì tā",
         "hv": "nhượng ngã cật kinh đích dã thị tha"
        }
       ],
       "traceWord": "蛇",
       "py": "Nà tiáo shé ràng wǒ hàipà de shì tā ràng wǒ chījīng de yě shì tā",
       "traceKey": "she",
       "traceInfo": [
        {
         "c": "蛇",
         "py": "shé",
         "hv": "xà"
        }
       ]
      },
      {
       "scene": "🥬🐰🐭",
       "full": "说到白菜小兔爱吃的是它老鼠爱偷的也是它",
       "vi": "Nói đến cải thảo, thứ thỏ con thích ăn là nó, thứ chuột thích ăn trộm cũng là nó",
       "parts": [
        {
         "t": "说到白菜",
         "ico": "🥬",
         "c": "s",
         "py": "shuō dào báicài",
         "hv": "thuyết đáo bạch thái"
        },
        {
         "t": "小兔爱吃的是它",
         "ico": "🐰",
         "c": "v",
         "py": "xiǎo tù ài chī de shì tā",
         "hv": "tiểu thố ái cật đích thị tha"
        },
        {
         "t": "老鼠爱偷的也是它",
         "ico": "🐭",
         "c": "o",
         "py": "lǎo shǔ ài tōu de yě shì tā",
         "hv": "lão thử ái thâu đích dã thị tha"
        }
       ],
       "traceWord": "兔",
       "py": "Shuō dào báicài xiǎo tù ài chī de shì tā lǎo shǔ ài tōu de yě shì tā",
       "traceKey": "tu",
       "traceInfo": [
        {
         "c": "兔",
         "py": "tù",
         "hv": "thố"
        }
       ]
      },
      {
       "scene": "🐒👶🧑",
       "full": "动物园里的小猴小朋友爱看的是它大人爱看的也是它",
       "vi": "Con khỉ con trong sở thú, thứ trẻ em thích xem là nó, thứ người lớn thích xem cũng là nó",
       "parts": [
        {
         "t": "动物园里的小猴",
         "ico": "🐒",
         "c": "s",
         "py": "dòngwùyuán lǐ de xiǎo hóu",
         "hv": "động vật viên lý đích tiểu hầu"
        },
        {
         "t": "小朋友爱看的是它",
         "ico": "👶",
         "c": "v",
         "py": "xiǎopéngyǒu ài kàn de shì tā",
         "hv": "tiểu bằng hữu ái khán đích thị tha"
        },
        {
         "t": "大人爱看的也是它",
         "ico": "🧑",
         "c": "o",
         "py": "dàren ài kàn de yě shì tā",
         "hv": "đại nhân ái khán đích dã thị tha"
        }
       ],
       "traceWord": "猴",
       "py": "Dòngwùyuán lǐ de xiǎo hóu xiǎopéngyǒu ài kàn de shì tā dàren ài kàn de yě shì tā",
       "traceKey": "hou",
       "traceInfo": [
        {
         "c": "猴",
         "py": "hóu",
         "hv": "hầu"
        }
       ]
      },
      {
       "scene": "🐻😴🐟",
       "full": "说到熊冬天爱睡觉的是它夏天爱吃鱼的也是它",
       "vi": "Nói đến gấu, con thích ngủ vào mùa đông là nó, con thích ăn cá vào mùa hè cũng là nó",
       "parts": [
        {
         "t": "说到熊",
         "ico": "🐻",
         "c": "s",
         "py": "shuō dào xióng",
         "hv": "thuyết đáo hùng"
        },
        {
         "t": "冬天爱睡觉的是它",
         "ico": "😴",
         "c": "v",
         "py": "dōngtiān ài shuìjiào de shì tā",
         "hv": "đông thiên ái thụy giác đích thị tha"
        },
        {
         "t": "夏天爱吃鱼的也是它",
         "ico": "🐟",
         "c": "o",
         "py": "xiàtiān ài chī yú de yě shì tā",
         "hv": "hạ thiên ái cật ngư đích dã thị tha"
        }
       ],
       "traceWord": "熊",
       "py": "Shuō dào xióng dōngtiān ài shuìjiào de shì tā xiàtiān ài chī yú de yě shì tā",
       "traceKey": "xiong",
       "traceInfo": [
        {
         "c": "熊",
         "py": "xióng",
         "hv": "hùng"
        }
       ]
      },
      {
       "scene": "🌾💻📈",
       "full": "乡村的新技术让农民增产的是它让农民高兴的也是它",
       "vi": "Kỹ thuật mới ở nông thôn, thứ giúp nông dân tăng sản lượng là nó, thứ làm họ vui cũng là nó",
       "parts": [
        {
         "t": "乡村的新技术",
         "ico": "🌾",
         "c": "s",
         "py": "xiāngcūn de xīn jìshù",
         "hv": "hương thôn đích tân kỹ thuật"
        },
        {
         "t": "让农民增产的是它",
         "ico": "📈",
         "c": "v",
         "py": "ràng nóngmín zēngchǎn de shì tā",
         "hv": "nhượng nông dân tăng sản đích thị tha"
        },
        {
         "t": "让农民高兴的也是它",
         "ico": "😊",
         "c": "o",
         "py": "ràng nóngmín gāoxìng de yě shì tā",
         "hv": "nhượng nông dân cao hứng đích dã thị tha"
        }
       ],
       "traceWord": "增产",
       "py": "Xiāngcūn de xīn jìshù ràng nóngmín zēngchǎn de shì tā ràng nóngmín gāoxìng de yě shì tā",
       "traceKey": "zengchan",
       "traceInfo": [
        {
         "c": "增",
         "py": "zēng",
         "hv": "tăng"
        },
        {
         "c": "产",
         "py": "chǎn",
         "hv": "sản"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你的家乡是城市还是乡村？",
       "qvi": "Quê bạn là thành phố hay nông thôn?",
       "scene": "🏙️🌾",
       "ans": "我的家乡是乡村",
       "opts": [
        {
         "txt": "我的家乡是乡村",
         "ico": "🌾",
         "py": "Wǒ de jiāxiāng shì xiāngcūn"
        },
        {
         "txt": "我的老板是女的",
         "ico": "👩‍💼",
         "py": "Wǒ de lǎobǎn shì nǚ de"
        },
        {
         "txt": "这个手机很便宜",
         "ico": "📱",
         "py": "Zhè gè shǒujī hěn piányi"
        }
       ],
       "qpy": "Nǐ de jiāxiāng shì chéngshì háishi xiāngcūn?"
      },
      {
       "q": "动物园里你最想看什么动物？",
       "qvi": "Ở sở thú bạn muốn xem con vật nào nhất?",
       "scene": "🦁🐘",
       "ans": "我最想看大象",
       "opts": [
        {
         "txt": "我昨天去了银行",
         "ico": "🏦",
         "py": "Wǒ zuótiān qù le yínháng"
        },
        {
         "txt": "我最想看大象",
         "ico": "🐘",
         "py": "Wǒ zuì xiǎng kàn dàxiàng"
        },
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        }
       ],
       "qpy": "Dòngwùyuán lǐ nǐ zuì xiǎng kàn shénme dòngwù?"
      },
      {
       "q": "周末你想去哪儿玩儿？",
       "qvi": "Cuối tuần bạn muốn đi chơi ở đâu?",
       "scene": "🌳🌸",
       "ans": "我想去园林玩儿",
       "opts": [
        {
         "txt": "我想去园林玩儿",
         "ico": "🌳",
         "py": "Wǒ xiǎng qù yuánlín wánr"
        },
        {
         "txt": "我是越南人",
         "ico": "🇻🇳",
         "py": "Wǒ shì Yuènán rén"
        },
        {
         "txt": "我没有哥哥",
         "ico": "🙅",
         "py": "Wǒ méiyǒu gēge"
        }
       ],
       "qpy": "Zhōumò nǐ xiǎng qù nǎr wánr?"
      },
      {
       "q": "你在北京有老乡吗？",
       "qvi": "Bạn có người đồng hương ở Bắc Kinh không?",
       "scene": "🏙️🧑‍🤝‍🧑",
       "ans": "我有好几个老乡",
       "opts": [
        {
         "txt": "我的车是白色的",
         "ico": "🚗",
         "py": "Wǒ de chē shì báisè de"
        },
        {
         "txt": "现在是晚上八点",
         "ico": "🕗",
         "py": "Xiànzài shì wǎnshang bā diǎn"
        },
        {
         "txt": "我有好几个老乡",
         "ico": "🧑‍🤝‍🧑",
         "py": "Wǒ yǒu hǎo jǐ gè lǎo xiāng"
        }
       ],
       "qpy": "Nǐ zài Běijīng yǒu lǎo xiāng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu con vật và cây cối với đối tác",
      "steps": [
       "<b>Bước 1:</b> Chuẩn bị giới thiệu ngắn về một địa điểm (sở thú, công viên hoặc vùng quê) cho đối tác nước ngoài. Chọn 2 con vật hoặc cây, ví dụ <i>\"大熊猫\"</i> và <i>\"桃树\"</i>.",
       "<b>Bước 2:</b> Nói mỗi loài một câu theo mẫu: <i>\"说到竹子，大熊猫吃的是它，睡的也是它\"</i>. Thay chủ đề bằng 虎, 蛇, 熊 hoặc cây đào và đặt thêm 3 câu.",
       "<b>Bước 3:</b> Nói thành tiếng 2 câu về quê bạn: <i>\"我的家乡是乡村\"</i>, và thứ làm nông dân <i>\"丰收\"</i> là gì. Nhắn thử cho một người bạn học tiếng Trung để họ sửa."
      ]
     }
    },
    {
     "id": "5.21C",
     "name": "Bài 5.21C: Lễ tết và dòng thời gian",
     "grammar": {
      "formulas": [
       "🛋️ X + 着 + 也是 + X + 着 ，",
       "💡 不如 + 做别的事"
      ],
      "tip": "Mẫu \"X着也是X着\" (X zhe yě shì X zhe) nghĩa là \"dù sao cũng đang X, chi bằng làm việc khác có ích hơn\": 闲着也是闲着 = rảnh cũng là rảnh. Thường có vế sau bắt đầu bằng 不如 (bùrú: chi bằng): 闲着也是闲着，不如包饺子. 着 (zhe) đứng sau động từ chỉ trạng thái kéo dài (闲, 等, 坐, 躺, 站, 待, 干...), nhắc lại cùng một động từ ở hai vế.",
      "vn_tip": "Người Việt hay dịch \"ngồi cũng là ngồi\" thành 坐也是坐 và bỏ 着, hoặc đổi thành 了 (坐了也是坐了, sai nghĩa). Phải lặp đủ 着 ở cả hai vế: 等着也是等着. Vế sau nên có 不如 để nói điều nên làm, đừng dừng ở nửa câu."
     },
     "chunks": [
      {
       "scene": "🧧🛋️🥟",
       "full": "除夕在家闲着也是闲着不如包饺子",
       "vi": "Đêm giao thừa ở nhà rảnh cũng là rảnh, chi bằng gói sủi cảo",
       "parts": [
        {
         "t": "除夕在家",
         "ico": "🧧",
         "c": "s",
         "py": "chúxī zàijiā",
         "hv": "trừ tịch tại gia"
        },
        {
         "t": "闲着也是闲着",
         "ico": "🛋️",
         "c": "v",
         "py": "xián zhe yě shì xián zhe",
         "hv": "nhàn trước dã thị nhàn trước"
        },
        {
         "t": "不如包饺子",
         "ico": "🥟",
         "c": "o",
         "py": "bùrú bāo jiǎozi",
         "hv": "bất như bao giảo tử"
        }
       ],
       "traceWord": "除夕",
       "py": "Chúxī zàijiā xián zhe yě shì xián zhe bùrú bāo jiǎozi",
       "traceKey": "chuxi",
       "traceInfo": [
        {
         "c": "除",
         "py": "chú",
         "hv": "trừ"
        },
        {
         "c": "夕",
         "py": "xī",
         "hv": "tịch"
        }
       ]
      },
      {
       "scene": "🎆🏠🚶",
       "full": "元旦那天待着也是待着不如出去玩儿",
       "vi": "Ngày Tết Dương lịch ở nhà cũng là ở nhà, chi bằng ra ngoài chơi",
       "parts": [
        {
         "t": "元旦那天",
         "ico": "🎆",
         "c": "s",
         "py": "Yuándàn nà tiān",
         "hv": "nguyên đán na thiên"
        },
        {
         "t": "待着也是待着",
         "ico": "🏠",
         "c": "v",
         "py": "dāi zhe yě shì dāi zhe",
         "hv": "đãi trước dã thị đãi trước"
        },
        {
         "t": "不如出去玩儿",
         "ico": "🚶",
         "c": "o",
         "py": "bùrú chūqù wánr",
         "hv": "bất như xuất khứ ngoạn nhi"
        }
       ],
       "traceWord": "元旦",
       "py": "Yuándàn nà tiān dāi zhe yě shì dāi zhe bùrú chūqù wánr",
       "traceKey": "yuandan",
       "traceInfo": [
        {
         "c": "元",
         "py": "yuán",
         "hv": "nguyên"
        },
        {
         "c": "旦",
         "py": "dàn",
         "hv": "đán"
        }
       ]
      },
      {
       "scene": "🥮🌕🛒",
       "full": "中秋节快到了等着也是等着不如先买月饼",
       "vi": "Tết Trung thu sắp đến rồi, chờ cũng là chờ, chi bằng mua bánh trung thu trước",
       "parts": [
        {
         "t": "中秋节",
         "ico": "🥮",
         "c": "s",
         "py": "Zhōngqiū Jié",
         "hv": "trung thu tiết"
        },
        {
         "t": "快到了",
         "ico": "⏰",
         "c": "v",
         "py": "kuài dào le",
         "hv": "khoái đáo liễu"
        },
        {
         "t": "等着也是等着不如先买月饼",
         "ico": "🛒",
         "c": "o",
         "py": "děng zhe yě shì děng zhe bùrú xiān mǎi yuèbing",
         "hv": "đẳng trước dã thị đẳng trước bất như tiên mãi nguyệt bính"
        }
       ],
       "traceWord": "月饼",
       "py": "Zhōngqiū Jié kuài dào le děng zhe yě shì děng zhe bùrú xiān mǎi yuèbing",
       "traceKey": "yuebing",
       "traceInfo": [
        {
         "c": "月",
         "py": "yuè",
         "hv": "nguyệt"
        },
        {
         "c": "饼",
         "py": "bing",
         "hv": "bính"
        }
       ]
      },
      {
       "scene": "📅🗓️📚",
       "full": "这个礼拜我没有会议坐着也是坐着不如去学习",
       "vi": "Tuần này tôi không có cuộc họp, ngồi không cũng là ngồi, chi bằng đi học",
       "parts": [
        {
         "t": "这个礼拜",
         "ico": "📅",
         "c": "s",
         "py": "zhè gè lǐbài",
         "hv": "giá cá lễ bái"
        },
        {
         "t": "我没有会议",
         "ico": "🗓️",
         "c": "v",
         "py": "wǒ méiyǒu huìyì",
         "hv": "ngã một hữu hội nghị"
        },
        {
         "t": "坐着也是坐着不如去学习",
         "ico": "📚",
         "c": "o",
         "py": "zuò zhe yě shì zuò zhe bùrú qù xuéxí",
         "hv": "tọa trước dã thị tọa trước bất như khứ học tập"
        }
       ],
       "traceWord": "礼拜",
       "py": "Zhè gè lǐbài wǒ méiyǒu huìyì zuò zhe yě shì zuò zhe bùrú qù xuéxí",
       "traceKey": "libai",
       "traceInfo": [
        {
         "c": "礼",
         "py": "lǐ",
         "hv": "lễ"
        },
        {
         "c": "拜",
         "py": "bài",
         "hv": "bái"
        }
       ]
      },
      {
       "scene": "🌙😵📖",
       "full": "夜间睡不着躺着也是躺着不如起来看书",
       "vi": "Ban đêm không ngủ được, nằm cũng là nằm, chi bằng dậy đọc sách",
       "parts": [
        {
         "t": "夜间",
         "ico": "🌙",
         "c": "s",
         "py": "yèjiān",
         "hv": "dạ gian"
        },
        {
         "t": "睡不着",
         "ico": "😵",
         "c": "v",
         "py": "shuì bù zhe",
         "hv": "thụy bất trước"
        },
        {
         "t": "躺着也是躺着不如起来看书",
         "ico": "📖",
         "c": "o",
         "py": "tǎng zhe yě shì tǎng zhe bùrú qǐlái kàn shū",
         "hv": "thảng trước dã thị thảng trước bất như khởi lai khán thư"
        }
       ],
       "traceWord": "夜间",
       "py": "Yèjiān shuì bù zhe tǎng zhe yě shì tǎng zhe bùrú qǐlái kàn shū",
       "traceKey": "yejian",
       "traceInfo": [
        {
         "c": "夜",
         "py": "yè",
         "hv": "dạ"
        },
        {
         "c": "间",
         "py": "jiān",
         "hv": "gian"
        }
       ]
      },
      {
       "scene": "🌅🚇📘",
       "full": "清晨的地铁里站着也是站着不如拿出书来读",
       "vi": "Trong tàu điện ngầm sáng sớm, đứng cũng là đứng, chi bằng lấy sách ra đọc",
       "parts": [
        {
         "t": "清晨的地铁里",
         "ico": "🌅",
         "c": "s",
         "py": "qīngchén de dìtiě lǐ",
         "hv": "thanh thần đích địa thiết lý"
        },
        {
         "t": "站着也是站着",
         "ico": "🚇",
         "c": "v",
         "py": "zhàn zhe yě shì zhàn zhe",
         "hv": "trạm trước dã thị trạm trước"
        },
        {
         "t": "不如拿出书来读",
         "ico": "📘",
         "c": "o",
         "py": "bùrú náchū shū lái dú",
         "hv": "bất như nã xuất thư lai độc"
        }
       ],
       "traceWord": "清晨",
       "py": "Qīngchén de dìtiě lǐ zhàn zhe yě shì zhàn zhe bùrú náchū shū lái dú",
       "traceKey": "qingchen",
       "traceInfo": [
        {
         "c": "清",
         "py": "qīng",
         "hv": "thanh"
        },
        {
         "c": "晨",
         "py": "chén",
         "hv": "thần"
        }
       ]
      },
      {
       "scene": "🚗🎧📰",
       "full": "开车路上听着也是听着不如听一下儿时事",
       "vi": "Trên đường lái xe, nghe cũng là nghe, chi bằng nghe một chút thời sự",
       "parts": [
        {
         "t": "开车路上",
         "ico": "🚗",
         "c": "s",
         "py": "kāichē lùshang",
         "hv": "khai xa lộ thượng"
        },
        {
         "t": "听着也是听着",
         "ico": "🎧",
         "c": "v",
         "py": "tīng zhe yě shì tīng zhe",
         "hv": "thính trước dã thị thính trước"
        },
        {
         "t": "不如听一下儿时事",
         "ico": "📰",
         "c": "o",
         "py": "bùrú tīng yīxiàr shíshì",
         "hv": "bất như thính nhất hạ nhi thời sự"
        }
       ],
       "traceWord": "时事",
       "py": "Kāichē lùshang tīng zhe yě shì tīng zhe bùrú tīng yīxiàr shíshì",
       "traceKey": "shishi",
       "traceInfo": [
        {
         "c": "时",
         "py": "shí",
         "hv": "thời"
        },
        {
         "c": "事",
         "py": "shì",
         "hv": "sự"
        }
       ]
      },
      {
       "scene": "🏢📉🏖️",
       "full": "年前公司没什么生意干着也是干着不如早一点儿放假",
       "vi": "Trước Tết công ty không có mấy việc làm ăn, làm cũng là làm, chi bằng nghỉ sớm một chút",
       "parts": [
        {
         "t": "年前公司",
         "ico": "🏢",
         "c": "s",
         "py": "niánqián gōngsī",
         "hv": "niên tiền công ti"
        },
        {
         "t": "没什么生意",
         "ico": "📉",
         "c": "v",
         "py": "méi shénme shēngyi",
         "hv": "một thập ma sinh ý"
        },
        {
         "t": "干着也是干着不如早一点儿放假",
         "ico": "🏖️",
         "c": "o",
         "py": "gān zhe yě shì gàn zhe bùrú zǎo yīdiǎnr fàngjià",
         "hv": "can trước dã thị cán trước bất như tảo nhất điểm nhi phóng giá"
        }
       ],
       "traceWord": "年前",
       "py": "Niánqián gōngsī méi shénme shēngyi gān zhe yě shì gàn zhe bùrú zǎo yīdiǎnr fàngjià",
       "traceKey": "nianqian",
       "traceInfo": [
        {
         "c": "年",
         "py": "nián",
         "hv": "niên"
        },
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你觉得岁月过得快吗？",
       "qvi": "Bạn thấy năm tháng trôi nhanh không?",
       "scene": "⏳🤔",
       "ans": "很快我很珍惜时光",
       "opts": [
        {
         "txt": "我今天不太忙",
         "ico": "😌",
         "py": "Wǒ jīntiān bù tài máng"
        },
        {
         "txt": "很快我很珍惜时光",
         "ico": "⏳",
         "py": "Hěn kuài wǒ hěn zhēnxī shíguāng"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Nǐ juéde suìyuè guò de kuài ma?"
      },
      {
       "q": "你想什么时候换工作？",
       "qvi": "Bạn muốn đổi việc khi nào?",
       "scene": "💼🤔",
       "ans": "我在等一个好时机",
       "opts": [
        {
         "txt": "我已经吃过早饭了",
         "ico": "🍞",
         "py": "Wǒ yǐjīng chī guò zǎofàn le"
        },
        {
         "txt": "我在等一个好时机",
         "ico": "⏰",
         "py": "Wǒ zài děng yī gè hǎo shíjī"
        },
        {
         "txt": "我家有三口人",
         "ico": "👨‍👩‍👦",
         "py": "Wǒ jiā yǒu sān kǒu rén"
        }
       ],
       "qpy": "Nǐ xiǎng shénme shíhou huàn gōngzuò?"
      },
      {
       "q": "早期的手机和当代的手机有什么不同？",
       "qvi": "Điện thoại thời kỳ đầu và điện thoại đương đại khác nhau thế nào?",
       "scene": "📱🆚📱",
       "ans": "当代的手机更方便",
       "opts": [
        {
         "txt": "他们明天去上海",
         "ico": "🚄",
         "py": "Tāmen míngtiān qù Shànghǎi"
        },
        {
         "txt": "当代的手机更方便",
         "ico": "📱",
         "py": "Dāngdài de shǒujī gèng fāngbiàn"
        },
        {
         "txt": "我想买一瓶水",
         "ico": "💧",
         "py": "Wǒ xiǎng mǎi yī píng shuǐ"
        }
       ],
       "qpy": "Zǎoqī de shǒujī hé dāngdài de shǒujī yǒu shénme bù tóng?"
      },
      {
       "q": "这家公司先前的情况怎么样？",
       "qvi": "Tình hình trước đây của công ty này ra sao?",
       "scene": "🏢📊",
       "ans": "初期很困难现在好多了",
       "opts": [
        {
         "txt": "初期很困难现在好多了",
         "ico": "📈",
         "py": "Chūqī hěn kùnnan xiànzài hǎoduō le"
        },
        {
         "txt": "他是公司的司机",
         "ico": "🚗",
         "py": "Tā shì gōngsī de sījī"
        },
        {
         "txt": "这是我的新房子",
         "ico": "🏠",
         "py": "Zhè shì wǒ de xīn fángzi"
        }
       ],
       "qpy": "Zhè jiā gōngsī xiānqián de qíngkuàng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp tận dụng thời gian rảnh dịp lễ",
      "steps": [
       "<b>Bước 1:</b> Chọn một dịp lễ sắp tới (<i>\"中秋节\"</i>, <i>\"元旦\"</i> hoặc <i>\"除夕\"</i>) và viết tin nhắn cho đồng nghiệp hỏi họ định làm gì.",
       "<b>Bước 2:</b> Rủ họ làm việc có ích bằng mẫu mới: <i>\"闲着也是闲着，不如...\"</i>. Thay 闲 bằng 等, 坐, 躺, 站 và đặt 4 câu, ví dụ <i>\"等着也是等着，不如先买月饼\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 2 câu về lúc bạn rảnh vào <i>\"清晨\"</i> hoặc <i>\"夜间\"</i> và bạn thường làm gì cho đỡ phí <i>\"时光\"</i>. Ghi âm lại để nghe."
      ]
     }
    }
   ]
  },
  "5.22": {
   "lessons": [
    {
     "id": "5.22A",
     "name": "Bài 5.22A: Khác biệt và mâu thuẫn",
     "grammar": {
      "formulas": [
       "💼 工作 + ⚡ 归 + 💼 工作",
       "🏠 生活 + ⚡ 归 + 🏠 生活"
      ],
      "tip": "Mẫu <b>X归X，Y归Y</b> (归 guī, âm Hán Việt: quy) nghĩa là \"việc nào ra việc đó\": mỗi thứ thuộc về phạm trù riêng, không lẫn vào nhau. Lặp lại ĐÚNG cùng một danh từ ở hai bên chữ 归, rồi nối hai vế song song, ví dụ 工作归工作，生活归生活.",
      "vn_tip": "Người Việt hay dịch sát \"công việc là công việc\" thành 工作是工作 hoặc chỉ nói 工作归生活 (sai nghĩa). Đúng: danh từ lặp hai lần quanh 归, và vế thứ hai cũng phải có cấu trúc X归X."
     },
     "chunks": [
      {
       "scene": "💼🏠⚖️",
       "full": "在这种局面下工作归工作生活归生活",
       "vi": "Trong tình thế này, việc nào ra việc đó: công việc là công việc, cuộc sống là cuộc sống",
       "parts": [
        {
         "t": "在这种局面下",
         "ico": "⏳",
         "c": "s",
         "py": "zài zhè zhǒng júmiàn xià",
         "hv": "tại giá chủng cục diện hạ"
        },
        {
         "t": "工作归工作",
         "ico": "💼",
         "c": "v",
         "py": "gōngzuò guī gōngzuò",
         "hv": "công tác quy công tác"
        },
        {
         "t": "生活归生活",
         "ico": "🏠",
         "c": "o",
         "py": "shēnghuó guī shēnghuó",
         "hv": "sinh hoạt quy sinh hoạt"
        }
       ],
       "traceWord": "局面",
       "py": "Zài zhè zhǒng júmiàn xià gōngzuò guī gōngzuò shēnghuó guī shēnghuó",
       "traceKey": "jumian",
       "traceInfo": [
        {
         "c": "局",
         "py": "jú",
         "hv": "cục"
        },
        {
         "c": "面",
         "py": "miàn",
         "hv": "diện"
        }
       ]
      },
      {
       "scene": "🌏↔️🤝",
       "full": "两个国家差别归差别合作归合作",
       "vi": "Hai quốc gia khác biệt thì cứ khác biệt, hợp tác thì cứ hợp tác",
       "parts": [
        {
         "t": "两个国家",
         "ico": "🌏",
         "c": "s",
         "py": "liǎng gè guójiā",
         "hv": "lưỡng cá quốc gia"
        },
        {
         "t": "差别归差别",
         "ico": "↔️",
         "c": "v",
         "py": "chābié guī chābié",
         "hv": "sai biệt quy sai biệt"
        },
        {
         "t": "合作归合作",
         "ico": "🤝",
         "c": "o",
         "py": "hézuò guī hézuò",
         "hv": "hợp tác quy hợp tác"
        }
       ],
       "traceWord": "差别",
       "py": "Liǎng gè guójiā chābié guī chābié hézuò guī hézuò",
       "traceKey": "chabie",
       "traceInfo": [
        {
         "c": "差",
         "py": "chā",
         "hv": "sai"
        },
        {
         "c": "别",
         "py": "bié",
         "hv": "biệt"
        }
       ]
      },
      {
       "scene": "👥📏🤝",
       "full": "我和他差距归差距朋友归朋友",
       "vi": "Giữa tôi và anh ấy, chênh lệch là chênh lệch, bạn bè vẫn là bạn bè",
       "parts": [
        {
         "t": "我和他",
         "ico": "👥",
         "c": "s",
         "py": "wǒ hé tā",
         "hv": "ngã hòa tha"
        },
        {
         "t": "差距归差距",
         "ico": "📏",
         "c": "v",
         "py": "chājù guī chājù",
         "hv": "sai cự quy sai cự"
        },
        {
         "t": "朋友归朋友",
         "ico": "🧑‍🤝‍🧑",
         "c": "o",
         "py": "péngyou guī péngyou",
         "hv": "bằng hữu quy bằng hữu"
        }
       ],
       "traceWord": "差距",
       "py": "Wǒ hé tā chājù guī chājù péngyou guī péngyou",
       "traceKey": "chaju",
       "traceInfo": [
        {
         "c": "差",
         "py": "chā",
         "hv": "sai"
        },
        {
         "c": "距",
         "py": "jù",
         "hv": "cự"
        }
       ]
      },
      {
       "scene": "🏢📶🏅",
       "full": "公司里员工层次归层次等级归等级",
       "vi": "Trong công ty, tầng lớp nhân viên là tầng lớp, cấp bậc là cấp bậc",
       "parts": [
        {
         "t": "公司里员工",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī lǐ yuángōng",
         "hv": "công ti lý viên công"
        },
        {
         "t": "层次归层次",
         "ico": "📶",
         "c": "v",
         "py": "céngcì guī céngcì",
         "hv": "tầng thứ quy tầng thứ"
        },
        {
         "t": "等级归等级",
         "ico": "🏅",
         "c": "o",
         "py": "děngjí guī děngjí",
         "hv": "đẳng cấp quy đẳng cấp"
        }
       ],
       "traceWord": "层次",
       "py": "Gōngsī lǐ yuángōng céngcì guī céngcì děngjí guī děngjí",
       "traceKey": "cengci",
       "traceInfo": [
        {
         "c": "层",
         "py": "céng",
         "hv": "tầng"
        },
        {
         "c": "次",
         "py": "cì",
         "hv": "thứ"
        }
       ]
      },
      {
       "scene": "💬📌🔭",
       "full": "讨论时前提归前提前景归前景",
       "vi": "Khi thảo luận, tiền đề là tiền đề, triển vọng là triển vọng",
       "parts": [
        {
         "t": "讨论时",
         "ico": "💬",
         "c": "s",
         "py": "tǎolùn shí",
         "hv": "thảo luận thời"
        },
        {
         "t": "前提归前提",
         "ico": "📌",
         "c": "v",
         "py": "qiántí guī qiántí",
         "hv": "tiền đề quy tiền đề"
        },
        {
         "t": "前景归前景",
         "ico": "🔭",
         "c": "o",
         "py": "qiánjǐng guī qiánjǐng",
         "hv": "tiền cảnh quy tiền cảnh"
        }
       ],
       "traceWord": "前提",
       "py": "Tǎolùn shí qiántí guī qiántí qiánjǐng guī qiánjǐng",
       "traceKey": "qianti",
       "traceInfo": [
        {
         "c": "前",
         "py": "qián",
         "hv": "tiền"
        },
        {
         "c": "提",
         "py": "tí",
         "hv": "đề"
        }
       ]
      },
      {
       "scene": "📈📋📦",
       "full": "销售情形归情形产品特性归特性",
       "vi": "Về bán hàng, tình hình là tình hình, đặc tính sản phẩm là đặc tính sản phẩm",
       "parts": [
        {
         "t": "销售",
         "ico": "📈",
         "c": "s",
         "py": "xiāoshòu",
         "hv": "tiêu thụ"
        },
        {
         "t": "情形归情形",
         "ico": "📋",
         "c": "v",
         "py": "qíngxing guī qíngxing",
         "hv": "tình hình quy tình hình"
        },
        {
         "t": "产品特性归特性",
         "ico": "📦",
         "c": "o",
         "py": "chǎnpǐn tèxìng guī tèxìng",
         "hv": "sản phẩm đặc tính quy đặc tính"
        }
       ],
       "traceWord": "情形",
       "py": "Xiāoshòu qíngxing guī qíngxing chǎnpǐn tèxìng guī tèxìng",
       "traceKey": "qingxing",
       "traceInfo": [
        {
         "c": "情",
         "py": "qíng",
         "hv": "tình"
        },
        {
         "c": "形",
         "py": "xing",
         "hv": "hình"
        }
       ]
      },
      {
       "scene": "🏭⚠️👤",
       "full": "这个行业特有问题归特有问题特定客户归特定客户",
       "vi": "Ngành này vấn đề đặc thù xử lý theo vấn đề đặc thù, khách hàng chỉ định xử lý theo khách hàng chỉ định",
       "parts": [
        {
         "t": "这个行业",
         "ico": "🏭",
         "c": "s",
         "py": "zhè gè hángyè",
         "hv": "giá cá hàng nghiệp"
        },
        {
         "t": "特有问题归特有问题",
         "ico": "⚠️",
         "c": "v",
         "py": "tèyǒu wèntí guī tèyǒu wèntí",
         "hv": "đặc hữu vấn đề quy đặc hữu vấn đề"
        },
        {
         "t": "特定客户归特定客户",
         "ico": "👤",
         "c": "o",
         "py": "tèdìng kèhù guī tèdìng kèhù",
         "hv": "đặc định khách hộ quy đặc định khách hộ"
        }
       ],
       "traceWord": "特定",
       "py": "Zhè gè hángyè tèyǒu wèntí guī tèyǒu wèntí tèdìng kèhù guī tèdìng kèhù",
       "traceKey": "teding",
       "traceInfo": [
        {
         "c": "特",
         "py": "tè",
         "hv": "đặc"
        },
        {
         "c": "定",
         "py": "dìng",
         "hv": "định"
        }
       ]
      },
      {
       "scene": "📖📜❗",
       "full": "一般来说规定归规定但是例外归例外",
       "vi": "Nói chung quy định là quy định, nhưng ngoại lệ là ngoại lệ",
       "parts": [
        {
         "t": "一般来说",
         "ico": "📖",
         "c": "s",
         "py": "yībānláishuō",
         "hv": "nhất ban lai thuyết"
        },
        {
         "t": "规定归规定",
         "ico": "📜",
         "c": "v",
         "py": "guīdìng guī guīdìng",
         "hv": "quy định quy quy định"
        },
        {
         "t": "但是例外归例外",
         "ico": "❗",
         "c": "o",
         "py": "dànshì lìwài guī lìwài",
         "hv": "đãn thị lệ ngoại quy lệ ngoại"
        }
       ],
       "traceWord": "例外",
       "py": "Yībānláishuō guīdìng guī guīdìng dànshì lìwài guī lìwài",
       "traceKey": "liwai",
       "traceInfo": [
        {
         "c": "例",
         "py": "lì",
         "hv": "lệ"
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
       "q": "你和同事有矛盾吗？",
       "qvi": "Bạn có mâu thuẫn với đồng nghiệp không?",
       "scene": "🧑‍💼⚡",
       "ans": "没有矛盾我们合作得很好",
       "opts": [
        {
         "txt": "没有矛盾我们合作得很好",
         "ico": "🤝",
         "py": "Méiyǒu máodùn wǒmen hézuò de hěn hǎo"
        },
        {
         "txt": "我下个月去北京出差",
         "ico": "✈️",
         "py": "Wǒ xià ge yuè qù Běijīng chūchāi"
        },
        {
         "txt": "这个手机非常便宜",
         "ico": "📱",
         "py": "Zhè gè shǒujī fēicháng piányi"
        }
       ],
       "qpy": "Nǐ hé tóngshì yǒu máodùn ma?"
      },
      {
       "q": "这两种看法是对立的吗？",
       "qvi": "Hai quan điểm này đối lập nhau phải không?",
       "scene": "💭↔️💭",
       "ans": "是的它们完全对立",
       "opts": [
        {
         "txt": "我明天要去买水果",
         "ico": "🍎",
         "py": "Wǒ míngtiān yào qù mǎi shuǐguǒ"
        },
        {
         "txt": "是的它们完全对立",
         "ico": "↔️",
         "py": "Shì de tāmen wánquán duìlì"
        },
        {
         "txt": "他在学校学习英语",
         "ico": "📚",
         "py": "Tā zài xuéxiào xuéxí Yīngyǔ"
        }
       ],
       "qpy": "Zhè liǎng zhǒng kànfǎ shì duìlì de ma?"
      },
      {
       "q": "表格里每个名字对应什么？",
       "qvi": "Mỗi cái tên trong bảng tương ứng với cái gì?",
       "scene": "📋🔗",
       "ans": "对应一个电话号码",
       "opts": [
        {
         "txt": "他们明天开会",
         "ico": "👥",
         "py": "Tāmen míngtiān kāihuì"
        },
        {
         "txt": "我喜欢喝绿茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē lǜchá"
        },
        {
         "txt": "对应一个电话号码",
         "ico": "☎️",
         "py": "Duìyìng yī gè diànhuà hàomǎ"
        }
       ],
       "qpy": "Biǎogé lǐ měi gè míngzi duìyìng shénme?"
      },
      {
       "q": "他是直接告诉你的吗？",
       "qvi": "Anh ấy nói trực tiếp cho bạn à?",
       "scene": "🗣️❓",
       "ans": "不是他是间接告诉我的",
       "opts": [
        {
         "txt": "我想去喝咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng qù hē kāfēi"
        },
        {
         "txt": "不是他是间接告诉我的",
         "ico": "📨",
         "py": "Bú shì tā shì jiànjiē gàosu wǒ de"
        },
        {
         "txt": "我们明天坐地铁",
         "ico": "🚇",
         "py": "Wǒmen míngtiān zuò dìtiě"
        }
       ],
       "qpy": "Tā shì zhíjiē gàosu nǐ de ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Tách bạch việc riêng và việc chung",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp từng bất đồng ý kiến với bạn: <i>\"工作归工作，朋友归朋友\"</i> để cho thấy chuyện công việc không ảnh hưởng tình bạn.",
       "<b>Bước 2:</b> Tự nói thành tiếng trước gương như đang gọi cho đối tác: <i>\"一般来说规定归规定，但是例外归例外\"</i>, rồi nêu một trường hợp ngoại lệ có thật ở công ty bạn.",
       "<b>Bước 3:</b> Giả sử đang họp, mở đầu phần thảo luận bằng <i>\"讨论时前提归前提，前景归前景\"</i> rồi liệt kê 1 tiền đề và 1 triển vọng của dự án bằng tiếng Việt hoặc tiếng Trung."
      ]
     }
    },
    {
     "id": "5.22B",
     "name": "Bài 5.22B: Kỹ năng và sai sót",
     "grammar": {
      "formulas": [
       "🗣️ 不管怎样说 + 🧑 这次失误 + ⚡ 是 + 🙋 我的责任",
       "🗣️ 不管怎样说 + 🏢 公司 + ⚡ 不能不顾 + 👥 员工的安全"
      ],
      "tip": "<b>不管怎样说</b> (bùguǎn zěnyàng shuō, Hán Việt: bất quản chẩm dạng thuyết) = \"nói thế nào đi nữa / dù sao đi nữa\". Đứng ĐẦU câu hoặc đầu vế, để đưa ra kết luận không đổi bất kể hoàn cảnh: 不管怎样说，这次失误是我的责任.",
      "vn_tip": "Người Việt hay đặt cụm này cuối câu hoặc bỏ chữ 说 (nói 不管怎样 + kết luận, nghe như \"mặc kệ ra sao\"). Đúng: luôn nói trọn 不管怎样说 ở đầu, rồi mới đến kết luận; không dùng 都 như trong mẫu 不管…都…."
     },
     "chunks": [
      {
       "scene": "🗣️❌🙋",
       "full": "不管怎样说这次失误是我的责任",
       "vi": "Dù sao đi nữa, sai sót lần này là trách nhiệm của tôi",
       "parts": [
        {
         "t": "不管怎样说这次失误",
         "ico": "🗣️",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō zhè cì shīwù",
         "hv": "bất quản chẩm dạng thuyết giá thứ thất ngộ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "我的责任",
         "ico": "🙋",
         "c": "o",
         "py": "wǒ de zérèn",
         "hv": "ngã đích trách nhiệm"
        }
       ],
       "traceWord": "失误",
       "py": "Bùguǎn zěnyàng shuō zhè cì shīwù shì wǒ de zérèn",
       "traceKey": "shiwu",
       "traceInfo": [
        {
         "c": "失",
         "py": "shī",
         "hv": "thất"
        },
        {
         "c": "误",
         "py": "wù",
         "hv": "ngộ"
        }
       ]
      },
      {
       "scene": "🗣️🚫📁",
       "full": "不管怎样说你不应把客户的资料丢了",
       "vi": "Dù sao đi nữa, bạn không nên làm mất tài liệu của khách hàng",
       "parts": [
        {
         "t": "不管怎样说你",
         "ico": "🗣️",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō nǐ",
         "hv": "bất quản chẩm dạng thuyết nễ"
        },
        {
         "t": "不应",
         "ico": "🚫",
         "c": "v",
         "py": "bù yīng",
         "hv": "bất ưng"
        },
        {
         "t": "把客户的资料丢了",
         "ico": "📁",
         "c": "o",
         "py": "bǎ kèhù de zīliào diū le",
         "hv": "bả khách hộ đích tư liệu đâu liễu"
        }
       ],
       "traceWord": "丢",
       "py": "Bùguǎn zěnyàng shuō nǐ bù yīng bǎ kèhù de zīliào diū le",
       "traceKey": "diu",
       "traceInfo": [
        {
         "c": "丢",
         "py": "diū",
         "hv": "đâu"
        }
       ]
      },
      {
       "scene": "🏢🦺👥",
       "full": "不管怎样说公司不能不顾员工的安全",
       "vi": "Dù sao đi nữa, công ty không thể bất chấp an toàn của nhân viên",
       "parts": [
        {
         "t": "不管怎样说公司",
         "ico": "🏢",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō gōngsī",
         "hv": "bất quản chẩm dạng thuyết công ti"
        },
        {
         "t": "不能不顾",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng bùgù",
         "hv": "bất năng bất cố"
        },
        {
         "t": "员工的安全",
         "ico": "🦺",
         "c": "o",
         "py": "yuángōng de ānquán",
         "hv": "viên công đích an toàn"
        }
       ],
       "traceWord": "不顾",
       "py": "Bùguǎn zěnyàng shuō gōngsī bù néng bùgù yuángōng de ānquán",
       "traceKey": "bugu",
       "traceInfo": [
        {
         "c": "不",
         "py": "bù",
         "hv": "bất"
        },
        {
         "c": "顾",
         "py": "gù",
         "hv": "cố"
        }
       ]
      },
      {
       "scene": "🙅❓🗣️",
       "full": "不管怎样说你不要回避这个问题",
       "vi": "Dù sao đi nữa, bạn đừng né tránh vấn đề này",
       "parts": [
        {
         "t": "不管怎样说你",
         "ico": "🗣️",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō nǐ",
         "hv": "bất quản chẩm dạng thuyết nễ"
        },
        {
         "t": "不要回避",
         "ico": "🙅",
         "c": "v",
         "py": "bùyào huíbì",
         "hv": "bất yếu hồi tị"
        },
        {
         "t": "这个问题",
         "ico": "❓",
         "c": "o",
         "py": "zhè gè wèntí",
         "hv": "giá cá vấn đề"
        }
       ],
       "traceWord": "回避",
       "py": "Bùguǎn zěnyàng shuō nǐ bùyào huíbì zhè gè wèntí",
       "traceKey": "huibi",
       "traceInfo": [
        {
         "c": "回",
         "py": "huí",
         "hv": "hồi"
        },
        {
         "c": "避",
         "py": "bì",
         "hv": "tị"
        }
       ]
      },
      {
       "scene": "🧠📐📚",
       "full": "不管怎样说你想入门就要记住这个公式",
       "vi": "Dù sao đi nữa, muốn nhập môn thì phải nhớ công thức này",
       "parts": [
        {
         "t": "不管怎样说你",
         "ico": "🗣️",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō nǐ",
         "hv": "bất quản chẩm dạng thuyết nễ"
        },
        {
         "t": "想入门就要记住",
         "ico": "🧠",
         "c": "v",
         "py": "xiǎng rùmén jiùyào jìzhù",
         "hv": "tưởng nhập môn tựu yếu ký trú"
        },
        {
         "t": "这个公式",
         "ico": "📐",
         "c": "o",
         "py": "zhè gè gōngshì",
         "hv": "giá cá công thức"
        }
       ],
       "traceWord": "公式",
       "py": "Bùguǎn zěnyàng shuō nǐ xiǎng rùmén jiùyào jìzhù zhè gè gōngshì",
       "traceKey": "gongshi",
       "traceInfo": [
        {
         "c": "公",
         "py": "gōng",
         "hv": "công"
        },
        {
         "c": "式",
         "py": "shì",
         "hv": "thức"
        }
       ]
      },
      {
       "scene": "🏢📋⚠️",
       "full": "不管怎样说公司的制度还不够健全",
       "vi": "Dù sao đi nữa, chế độ của công ty vẫn chưa đủ hoàn thiện",
       "parts": [
        {
         "t": "不管怎样说公司的制度",
         "ico": "🏢",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō gōngsī de zhìdù",
         "hv": "bất quản chẩm dạng thuyết công ti đích chế độ"
        },
        {
         "t": "还不够",
         "ico": "⚠️",
         "c": "v",
         "py": "hái bùgòu",
         "hv": "hoàn bất cấu"
        },
        {
         "t": "健全",
         "ico": "✅",
         "c": "o",
         "py": "jiànquán",
         "hv": "kiện toàn"
        }
       ],
       "traceWord": "健全",
       "py": "Bùguǎn zěnyàng shuō gōngsī de zhìdù hái bùgòu jiànquán",
       "traceKey": "jianquan",
       "traceInfo": [
        {
         "c": "健",
         "py": "jiàn",
         "hv": "kiện"
        },
        {
         "c": "全",
         "py": "quán",
         "hv": "toàn"
        }
       ]
      },
      {
       "scene": "🗣️🤐📌",
       "full": "不管怎样说他不愿意提起这件事",
       "vi": "Dù sao đi nữa, anh ấy không muốn nhắc đến chuyện này",
       "parts": [
        {
         "t": "不管怎样说他",
         "ico": "🗣️",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō tā",
         "hv": "bất quản chẩm dạng thuyết tha"
        },
        {
         "t": "不愿意提起",
         "ico": "🤐",
         "c": "v",
         "py": "bú yuànyì tíqǐ",
         "hv": "bất nguyện ý đề khởi"
        },
        {
         "t": "这件事",
         "ico": "📌",
         "c": "o",
         "py": "zhè jiàn shì",
         "hv": "giá kiện sự"
        }
       ],
       "traceWord": "提起",
       "py": "Bùguǎn zěnyàng shuō tā bú yuànyì tíqǐ zhè jiàn shì",
       "traceKey": "tiqi",
       "traceInfo": [
        {
         "c": "提",
         "py": "tí",
         "hv": "đề"
        },
        {
         "c": "起",
         "py": "qǐ",
         "hv": "khởi"
        }
       ]
      },
      {
       "scene": "🎤👥🥹",
       "full": "不管怎样说他的演讲令在场的人深受感动",
       "vi": "Dù sao đi nữa, bài diễn thuyết của anh ấy khiến những người có mặt rất xúc động",
       "parts": [
        {
         "t": "不管怎样说他的演讲",
         "ico": "🎤",
         "c": "s",
         "py": "bùguǎn zěnyàng shuō tā de yǎnjiǎng",
         "hv": "bất quản chẩm dạng thuyết tha đích diễn giảng"
        },
        {
         "t": "令",
         "ico": "⚡",
         "c": "v",
         "py": "lìng",
         "hv": "lệnh"
        },
        {
         "t": "在场的人深受感动",
         "ico": "🥹",
         "c": "o",
         "py": "zàichǎng de rén shēn shòu gǎndòng",
         "hv": "tại trường đích nhân thâm thụ cảm động"
        }
       ],
       "traceWord": "在场",
       "py": "Bùguǎn zěnyàng shuō tā de yǎnjiǎng lìng zàichǎng de rén shēn shòu gǎndòng",
       "traceKey": "zaichang",
       "traceInfo": [
        {
         "c": "在",
         "py": "zài",
         "hv": "tại"
        },
        {
         "c": "场",
         "py": "chǎng",
         "hv": "trường"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "你在博物馆里看到了什么？",
       "qvi": "Bạn đã thấy gì trong bảo tàng?",
       "scene": "🏛️👀",
       "ans": "我看到了很多化石",
       "opts": [
        {
         "txt": "我看到了很多化石",
         "ico": "🦴",
         "py": "Wǒ kàndào le hěn duō huàshí"
        },
        {
         "txt": "我在石头上刻了名字",
         "ico": "🪨",
         "py": "Wǒ zài shítou shàng kè le míngzi"
        },
        {
         "txt": "我买了一杯咖啡",
         "ico": "☕",
         "py": "Wǒ mǎi le yī bēi kāfēi"
        }
       ],
       "qpy": "Nǐ zài bówùguǎn lǐ kàndào le shénme?"
      },
      {
       "q": "窗户都关好了吗？",
       "qvi": "Cửa sổ đã đóng hết chưa?",
       "scene": "🪟❓",
       "ans": "还有一扇没关",
       "opts": [
        {
         "txt": "我今天不想吃饭",
         "ico": "🍚",
         "py": "Wǒ jīntiān bù xiǎng chīfàn"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "还有一扇没关",
         "ico": "🪟",
         "py": "Hái yǒu yī shān méi guān"
        }
       ],
       "qpy": "Chuānghu dōu guān hǎo le ma?"
      },
      {
       "q": "你为什么出了一身汗？",
       "qvi": "Sao bạn đổ mồ hôi đầm đìa vậy?",
       "scene": "😓💦",
       "ans": "因为我刚跑完步",
       "opts": [
        {
         "txt": "因为明天是周末",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì zhōumò"
        },
        {
         "txt": "因为我刚跑完步",
         "ico": "🏃",
         "py": "Yīnwèi wǒ gāng pǎo wán bù"
        },
        {
         "txt": "因为这件衣服很贵",
         "ico": "👔",
         "py": "Yīnwèi zhè jiàn yīfu hěn guì"
        }
       ],
       "qpy": "Nǐ wèi shénme chū le yīshēn hàn?"
      },
      {
       "q": "这批货什么时候运到？",
       "qvi": "Lô hàng này khi nào vận chuyển đến?",
       "scene": "📦🚚",
       "ans": "下周一就能运到",
       "opts": [
        {
         "txt": "我已经吃过早饭了",
         "ico": "🍞",
         "py": "Wǒ yǐjīng chī guò zǎofàn le"
        },
        {
         "txt": "公司在那座楼的三层",
         "ico": "🏢",
         "py": "Gōngsī zài nà zuò lóu de sān céng"
        },
        {
         "txt": "下周一就能运到",
         "ico": "🚚",
         "py": "Xià zhōu yī jiù néng yùn dào"
        }
       ],
       "qpy": "Zhè pī huò shénme shíhou yùn dào?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận lỗi và góp ý đồng nghiệp sau một sai sót",
      "steps": [
       "<b>Bước 1:</b> Viết tin nhắn nhận trách nhiệm về một sai sót nhỏ trong công việc: <i>\"不管怎样说，这次失误是我的责任\"</i>, rồi thêm một câu hứa sửa.",
       "<b>Bước 2:</b> Giả sử đồng nghiệp mới đang ngại nói về lỗi của mình, hãy nói thành tiếng: <i>\"不管怎样说，你不要回避这个问题\"</i> và khuyên họ báo cáo sớm.",
       "<b>Bước 3:</b> Tự phát biểu 30 giây trong cuộc họp tổng kết: <i>\"不管怎样说，公司的制度还不够健全\"</i>, nêu một đề xuất cải thiện."
      ]
     }
    },
    {
     "id": "5.22C",
     "name": "Bài 5.22C: Cử chỉ và ánh mắt",
     "grammar": {
      "formulas": [
       "👀 看 + 🧑 你 + 😰 急 + 💬 的",
       "👀 瞧 + 🧑 他 + 😄 高兴 + 💬 的"
      ],
      "tip": "<b>看你X的 / 瞧他X的</b> (kàn nǐ… de / qiáo tā… de; 看 Hán Việt: khán) là câu cảm thán khẩu ngữ: \"nhìn bạn kìa, sao mà X thế\". X là tính từ hoặc động từ chỉ trạng thái, cuối câu BẮT BUỘC có 的; thường vừa quan tâm vừa trách nhẹ, rồi nói tiếp lời khuyên.",
      "vn_tip": "Người Việt hay dịch \"nhìn bạn mệt chưa kìa\" thành 看你累得 hoặc thêm 很 (看你很累的), nghe thiếu tự nhiên. Đúng: 看你累的, không thêm 得, không thêm 很, và kết thúc vế cảm thán bằng 的."
     },
     "chunks": [
      {
       "scene": "👩🤲😮‍💨",
       "full": "妈妈扶着我说看你累的快坐下休息",
       "vi": "Mẹ đỡ tôi và nói: nhìn con mệt chưa kìa, mau ngồi xuống nghỉ đi",
       "parts": [
        {
         "t": "妈妈扶着我说",
         "ico": "👩",
         "c": "s",
         "py": "māma fú zhe wǒ shuō",
         "hv": "ma ma phù trước ngã thuyết"
        },
        {
         "t": "看你累的",
         "ico": "😮‍💨",
         "c": "v",
         "py": "kàn nǐ lèi de",
         "hv": "khán nễ lụy đích"
        },
        {
         "t": "快坐下休息",
         "ico": "🪑",
         "c": "o",
         "py": "kuài zuò xia xiūxi",
         "hv": "khoái tọa hạ hưu tức"
        }
       ],
       "traceWord": "扶",
       "py": "Māma fú zhe wǒ shuō kàn nǐ lèi de kuài zuò xia xiūxi",
       "traceKey": "fu",
       "traceInfo": [
        {
         "c": "扶",
         "py": "fú",
         "hv": "phù"
        }
       ]
      },
      {
       "scene": "🚪👥🍵",
       "full": "同事敲了敲门进来说瞧你忙的先喝杯茶吧",
       "vi": "Đồng nghiệp gõ cửa bước vào nói: nhìn bạn bận chưa kìa, uống tách trà trước đi",
       "parts": [
        {
         "t": "同事敲了敲门进来说",
         "ico": "🚪",
         "c": "s",
         "py": "tóngshì qiāo le qiāo mén jìnlái shuō",
         "hv": "đồng sự xao liễu xao môn tiến lai thuyết"
        },
        {
         "t": "瞧你忙的",
         "ico": "💼",
         "c": "v",
         "py": "qiáo nǐ máng de",
         "hv": "tiều nễ mang đích"
        },
        {
         "t": "先喝杯茶吧",
         "ico": "🍵",
         "c": "o",
         "py": "xiān hē bēi chá ba",
         "hv": "tiên hát bôi trà ba"
        }
       ],
       "traceWord": "敲门",
       "py": "Tóngshì qiāo le qiāo mén jìnlái shuō qiáo nǐ máng de xiān hē bēi chá ba",
       "traceKey": "qiaomen",
       "traceInfo": [
        {
         "c": "敲",
         "py": "qiāo",
         "hv": "xao"
        },
        {
         "c": "门",
         "py": "mén",
         "hv": "môn"
        }
       ]
      },
      {
       "scene": "👋🤗👥",
       "full": "朋友向我招手说看你瘦的快过来拥抱我",
       "vi": "Bạn vẫy tay với tôi nói: nhìn cậu gầy chưa kìa, mau lại đây ôm mình đi",
       "parts": [
        {
         "t": "朋友向我招手说",
         "ico": "👋",
         "c": "s",
         "py": "péngyou xiàng wǒ zhāoshǒu shuō",
         "hv": "bằng hữu hướng ngã chiêu thủ thuyết"
        },
        {
         "t": "看你瘦的",
         "ico": "😮",
         "c": "v",
         "py": "kàn nǐ shòu de",
         "hv": "khán nễ sấu đích"
        },
        {
         "t": "快过来拥抱我",
         "ico": "🤗",
         "c": "o",
         "py": "kuài guòlái yōngbào wǒ",
         "hv": "khoái quá lai ủng bão ngã"
        }
       ],
       "traceWord": "招手",
       "py": "Péngyou xiàng wǒ zhāoshǒu shuō kàn nǐ shòu de kuài guòlái yōngbào wǒ",
       "traceKey": "zhaoshou",
       "traceInfo": [
        {
         "c": "招",
         "py": "zhāo",
         "hv": "chiêu"
        },
        {
         "c": "手",
         "py": "shǒu",
         "hv": "thủ"
        }
       ]
      },
      {
       "scene": "🙅😰💅",
       "full": "他摇头说瞧你急的别咬指甲了",
       "vi": "Anh ấy lắc đầu nói: nhìn cậu sốt ruột chưa kìa, đừng cắn móng tay nữa",
       "parts": [
        {
         "t": "他摇头说",
         "ico": "🙅",
         "c": "s",
         "py": "tā yáotóu shuō",
         "hv": "tha dao đầu thuyết"
        },
        {
         "t": "瞧你急的",
         "ico": "😰",
         "c": "v",
         "py": "qiáo nǐ jí de",
         "hv": "tiều nễ cấp đích"
        },
        {
         "t": "别咬指甲了",
         "ico": "💅",
         "c": "o",
         "py": "bié yǎo zhǐjia le",
         "hv": "biệt giảo chỉ giáp liễu"
        }
       ],
       "traceWord": "摇头",
       "py": "Tā yáotóu shuō qiáo nǐ jí de bié yǎo zhǐjia le",
       "traceKey": "yaotou",
       "traceInfo": [
        {
         "c": "摇",
         "py": "yáo",
         "hv": "dao"
        },
        {
         "c": "头",
         "py": "tóu",
         "hv": "đầu"
        }
       ]
      },
      {
       "scene": "👔👀😬",
       "full": "经理抬头看着我说看你紧张的放松一些",
       "vi": "Giám đốc ngẩng đầu nhìn tôi nói: nhìn bạn căng thẳng chưa kìa, thả lỏng chút đi",
       "parts": [
        {
         "t": "经理抬头看着我说",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ táitóu kàn zhe wǒ shuō",
         "hv": "kinh lý đài đầu khán trước ngã thuyết"
        },
        {
         "t": "看你紧张的",
         "ico": "😬",
         "c": "v",
         "py": "kàn nǐ jǐnzhāng de",
         "hv": "khán nễ khẩn trương đích"
        },
        {
         "t": "放松一些",
         "ico": "😌",
         "c": "o",
         "py": "fàngsōng yīxiē",
         "hv": "phóng tùng nhất ta"
        }
       ],
       "traceWord": "抬头",
       "py": "Jīnglǐ táitóu kàn zhe wǒ shuō kàn nǐ jǐnzhāng de fàngsōng yīxiē",
       "traceKey": "taitou",
       "traceInfo": [
        {
         "c": "抬",
         "py": "tái",
         "hv": "đài"
        },
        {
         "c": "头",
         "py": "tóu",
         "hv": "đầu"
        }
       ]
      },
      {
       "scene": "🥶✋🧤",
       "full": "他说看你冷的手都抬不起来了",
       "vi": "Anh ấy nói: nhìn bạn lạnh chưa kìa, tay cũng không nhấc nổi nữa",
       "parts": [
        {
         "t": "他说",
         "ico": "🗣️",
         "c": "s",
         "py": "tā shuō",
         "hv": "tha thuyết"
        },
        {
         "t": "看你冷的",
         "ico": "🥶",
         "c": "v",
         "py": "kàn nǐ lěng de",
         "hv": "khán nễ lãnh đích"
        },
        {
         "t": "手都抬不起来了",
         "ico": "✋",
         "c": "o",
         "py": "shǒu dōu tái bù qǐlái le",
         "hv": "thủ đô đài bất khởi lai liễu"
        }
       ],
       "traceWord": "抬",
       "py": "Tā shuō kàn nǐ lěng de shǒu dōu tái bù qǐlái le",
       "traceKey": "tai",
       "traceInfo": [
        {
         "c": "抬",
         "py": "tái",
         "hv": "đài"
        }
       ]
      },
      {
       "scene": "🤝🥹👀",
       "full": "他伸手握着我的手说瞧你激动的眼睛都红了",
       "vi": "Anh ấy đưa tay nắm tay tôi nói: nhìn bạn xúc động chưa kìa, mắt đều đỏ cả rồi",
       "parts": [
        {
         "t": "他伸手握着我的手说",
         "ico": "🤝",
         "c": "s",
         "py": "tā shēn shǒu wò zhe wǒ de shǒu shuō",
         "hv": "tha thân thủ ác trước ngã đích thủ thuyết"
        },
        {
         "t": "瞧你激动的",
         "ico": "🥹",
         "c": "v",
         "py": "qiáo nǐ jīdòng de",
         "hv": "tiều nễ kích động đích"
        },
        {
         "t": "眼睛都红了",
         "ico": "👀",
         "c": "o",
         "py": "yǎnjing dōu hóng le",
         "hv": "nhãn tình đô hồng liễu"
        }
       ],
       "traceWord": "握",
       "py": "Tā shēn shǒu wò zhe wǒ de shǒu shuō qiáo nǐ jīdòng de yǎnjing dōu hóng le",
       "traceKey": "wo",
       "traceInfo": [
        {
         "c": "握",
         "py": "wò",
         "hv": "ác"
        }
       ]
      },
      {
       "scene": "👣😰❓",
       "full": "他停下脚步说看你急的出什么事了",
       "vi": "Anh ấy dừng bước nói: nhìn cậu cuống chưa kìa, có chuyện gì thế",
       "parts": [
        {
         "t": "他停下脚步说",
         "ico": "🛑",
         "c": "s",
         "py": "tā tíngxia jiǎobù shuō",
         "hv": "tha đình hạ cước bộ thuyết"
        },
        {
         "t": "看你急的",
         "ico": "😰",
         "c": "v",
         "py": "kàn nǐ jí de",
         "hv": "khán nễ cấp đích"
        },
        {
         "t": "出什么事了",
         "ico": "❓",
         "c": "o",
         "py": "chū shénme shì le",
         "hv": "xuất thập ma sự liễu"
        }
       ],
       "traceWord": "脚步",
       "py": "Tā tíngxia jiǎobù shuō kàn nǐ jí de chū shénme shì le",
       "traceKey": "jiaobu",
       "traceInfo": [
        {
         "c": "脚",
         "py": "jiǎo",
         "hv": "cước"
        },
        {
         "c": "步",
         "py": "bù",
         "hv": "bộ"
        }
       ]
      }
     ],
     "qaList": [
      {
       "q": "他现在的神情怎么样？",
       "qvi": "Vẻ mặt của anh ấy bây giờ thế nào?",
       "scene": "🧑😟",
       "ans": "他的神情很紧张",
       "opts": [
        {
         "txt": "他的手机在桌子上",
         "ico": "📱",
         "py": "Tā de shǒujī zài zhuōzi shàng"
        },
        {
         "txt": "他的神情很紧张",
         "ico": "😟",
         "py": "Tā de shénqíng hěn jǐnzhāng"
        },
        {
         "txt": "他昨天去了医院",
         "ico": "🏥",
         "py": "Tā zuótiān qù le yīyuàn"
        }
       ],
       "qpy": "Tā xiànzài de shénqíng zěnmeyàng?"
      },
      {
       "q": "她用什么目光看你？",
       "qvi": "Cô ấy nhìn bạn bằng ánh mắt thế nào?",
       "scene": "👩👀",
       "ans": "她用温暖的目光看我",
       "opts": [
        {
         "txt": "她正在看电视",
         "ico": "📺",
         "py": "Tā zhèngzài kàn diànshì"
        },
        {
         "txt": "她用温暖的目光看我",
         "ico": "🥰",
         "py": "Tā yòng wēnnuǎn de mùguāng kàn wǒ"
        },
        {
         "txt": "她买了两张票",
         "ico": "🎫",
         "py": "Tā mǎi le liǎng zhāng piào"
        }
       ],
       "qpy": "Tā yòng shénme mùguāng kàn nǐ?"
      },
      {
       "q": "你觉得老板的眼光怎么样？",
       "qvi": "Bạn thấy tầm nhìn của sếp thế nào?",
       "scene": "👔🔭",
       "ans": "他的眼光非常好",
       "opts": [
        {
         "txt": "他今天不在公司",
         "ico": "🏢",
         "py": "Tā jīntiān bú zài gōngsī"
        },
        {
         "txt": "我想喝一杯水",
         "ico": "💧",
         "py": "Wǒ xiǎng hē yī bēi shuǐ"
        },
        {
         "txt": "他的眼光非常好",
         "ico": "👍",
         "py": "Tā de yǎnguāng fēicháng hǎo"
        }
       ],
       "qpy": "Nǐ juéde lǎobǎn de yǎnguāng zěnmeyàng?"
      },
      {
       "q": "同事一直在加班你怎么说？",
       "qvi": "Đồng nghiệp cứ tăng ca mãi, bạn nói gì?",
       "scene": "👥🌙",
       "ans": "我会说看你累的快休息吧",
       "opts": [
        {
         "txt": "我会说谢谢你的礼物",
         "ico": "🎁",
         "py": "Wǒ huì shuō xièxie nǐ de lǐwù"
        },
        {
         "txt": "我会说看你累的快休息吧",
         "ico": "😮‍💨",
         "py": "Wǒ huì shuō kàn nǐ lèi de kuài xiūxi ba"
        },
        {
         "txt": "我会说明天是星期天",
         "ico": "📅",
         "py": "Wǒ huì shuō míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Tóngshì yīzhí zài jiābān nǐ zěnme shuō?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Quan tâm đồng nghiệp bằng giọng khẩu ngữ",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp đang tăng ca: <i>\"看你累的，快休息吧\"</i> và rủ họ đi uống trà.",
       "<b>Bước 2:</b> Tự nói thành tiếng như đang gõ cửa phòng bạn bè: <i>\"瞧你忙的，先喝杯茶吧\"</i>, rồi nói thêm hai câu hỏi thăm.",
       "<b>Bước 3:</b> Nhớ lại một lần gặp người thân sau thời gian dài, mô tả bằng 3 câu: vẫy tay, ôm, và <i>\"看你瘦的\"</i>."
      ]
     }
    }
   ]
  }
 }
};
