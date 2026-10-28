/* HSK %d — khóa tiếng Trung cho người đi làm (chuẩn HSK 3.0). Dữ liệu một cấp, nạp bằng <script src> (file:// được, không fetch).
   Tự sinh bởi zh/tools/assemble.py từ các lô đã qua kiểm (py/hv/traceKey do script điền từ hsk30 + Unihan). Định dạng: zh/docs/SPEC.md mục 4. */
window.CURRICULUM_STAGES = window.CURRICULUM_STAGES || {};
window.CURRICULUM_STAGES[4] = {
 "label": "HSK 4",
 "modules": [
  {
   "code": "4.1",
   "title": "Xưng hô và gia đình"
  },
  {
   "code": "4.2",
   "title": "Cơ thể và sức khỏe"
  },
  {
   "code": "4.3",
   "title": "Ăn uống"
  },
  {
   "code": "4.4",
   "title": "Nhà cửa và đồ dùng"
  },
  {
   "code": "4.5",
   "title": "Mua sắm và dịch vụ"
  },
  {
   "code": "4.6",
   "title": "Đi lại và du lịch"
  },
  {
   "code": "4.7",
   "title": "Tìm việc và văn phòng"
  },
  {
   "code": "4.8",
   "title": "Quản lý và tổ chức"
  },
  {
   "code": "4.9",
   "title": "Kinh doanh và thương mại"
  },
  {
   "code": "4.10",
   "title": "Tài chính và rủi ro"
  },
  {
   "code": "4.11",
   "title": "Công nghệ và thông tin"
  },
  {
   "code": "4.12",
   "title": "Giáo dục và học tập"
  },
  {
   "code": "4.13",
   "title": "Pháp luật và xã hội"
  },
  {
   "code": "4.14",
   "title": "Văn hóa và nghệ thuật"
  },
  {
   "code": "4.15",
   "title": "Thiên nhiên và môi trường"
  },
  {
   "code": "4.16",
   "title": "Thời gian và kế hoạch"
  },
  {
   "code": "4.17",
   "title": "Tính cách và cảm xúc"
  },
  {
   "code": "4.18",
   "title": "Tranh luận và nêu ý kiến"
  },
  {
   "code": "4.19",
   "title": "Thay đổi và phát triển"
  },
  {
   "code": "4.20",
   "title": "Thử thách và hành động"
  },
  {
   "code": "4.21",
   "title": "Liên từ và lập luận tổng hợp"
  }
 ],
 "data": {
  "4.1": {
   "lessons": [
    {
     "id": "4.1A",
     "name": "Bài 4.1A: Xưng hô thân mật và 人家",
     "grammar": {
      "formulas": [
       "🙋 人家 + ⚡ 等 + 🧑 你",
       "👥 人家 + ⚡ 是 + 👨‍👩‍👧 兄弟姐妹"
      ],
      "tip": "人家 (rénjia, nhân gia) có hai nghĩa: (1) người khác, người ta, (2) \"tôi\" khi nũng nịu, trách nhẹ. Nghĩa (2) hay gặp khi nói với người thân, bạn bè; với sếp hoặc đối tác thì không dùng.",
      "vn_tip": "Người Việt hay dịch \"người ta\" thành 别人 trong mọi tình huống. Khi muốn nói \"tôi đây này\" với giọng nũng nịu, hãy dùng 人家; không nên dùng 人家 trong văn bản trang trọng, và đừng gọi người lạ là 美女 hay 帅哥 trong môi trường công sở."
     },
     "chunks": [
      {
       "scene": "👩🧔🏠",
       "full": "阿姨说人家叔叔今天不在家",
       "vi": "Dì nói chú ấy hôm nay không có nhà",
       "parts": [
        {
         "t": "阿姨",
         "ico": "👩",
         "c": "s",
         "py": "āyí",
         "hv": "_ dì"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "_"
        },
        {
         "t": "人家叔叔今天不在家",
         "ico": "🧔",
         "c": "o",
         "py": "rénjia shūshu jīntiān bú zàijiā",
         "hv": "nhân gia thúc thúc kim thiên bất tại gia"
        }
       ],
       "traceWord": "阿姨",
       "py": "Āyí shuō rénjia shūshu jīntiān bú zàijiā",
       "traceKey": "ayi"
      },
      {
       "scene": "👨👩🤝",
       "full": "大哥大姐都是我的好友",
       "vi": "Anh cả chị cả đều là bạn thân của tôi",
       "parts": [
        {
         "t": "大哥大姐",
         "ico": "👨👩",
         "c": "s",
         "py": "dàgē dàjiě",
         "hv": "đại ca đại thư"
        },
        {
         "t": "都是",
         "ico": "⚡",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "我的好友",
         "ico": "🤝",
         "c": "o",
         "py": "wǒ de hǎoyǒu",
         "hv": "ngã đích háo hữu"
        }
       ],
       "traceWord": "大哥",
       "py": "Dàgē dàjiě dōu shì wǒ de hǎoyǒu",
       "traceKey": "dage"
      },
      {
       "scene": "😳🙈😊",
       "full": "你别笑人家不好意思",
       "vi": "Đừng cười, tôi ngại lắm đấy",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "别笑",
         "ico": "🚫",
         "c": "v",
         "py": "bié xiào",
         "hv": "_ _"
        },
        {
         "t": "人家不好意思",
         "ico": "😳",
         "c": "o",
         "py": "rénjia bù hǎoyìsi",
         "hv": "nhân gia bất háo ý tư"
        }
       ],
       "traceWord": "人家",
       "py": "Nǐ bié xiào rénjia bù hǎoyìsi",
       "traceKey": "renjia"
      },
      {
       "scene": "👵🌅🌳",
       "full": "大妈每天早上都去公园散步",
       "vi": "Bà cô mỗi sáng đều đi công viên đi dạo",
       "parts": [
        {
         "t": "大妈",
         "ico": "👵",
         "c": "s",
         "py": "dàmā",
         "hv": "đại má"
        },
        {
         "t": "每天早上都去",
         "ico": "🌅",
         "c": "v",
         "py": "měi tiān zǎoshang dōu qù",
         "hv": "mỗi thiên tảo thượng đô khứ"
        },
        {
         "t": "公园散步",
         "ico": "🌳",
         "c": "o",
         "py": "gōngyuán sànbù",
         "hv": "công viên tản bộ"
        }
       ],
       "traceWord": "大妈",
       "py": "Dàmā měi tiān zǎoshang dōu qù gōngyuán sànbù",
       "traceKey": "dama"
      },
      {
       "scene": "👴🧑⚽",
       "full": "大爷喜欢和小伙子一起打球",
       "vi": "Ông cụ thích chơi bóng cùng các chàng trai trẻ",
       "parts": [
        {
         "t": "大爷",
         "ico": "👴",
         "c": "s",
         "py": "dàye",
         "hv": "đại _"
        },
        {
         "t": "喜欢",
         "ico": "❤️",
         "c": "v",
         "py": "xǐhuan",
         "hv": "hỉ hoan"
        },
        {
         "t": "和小伙子一起打球",
         "ico": "⚽",
         "c": "o",
         "py": "hé xiǎohuǒzi yīqǐ dǎ qiú",
         "hv": "hoà tiểu _ tí nhất khởi đả cầu"
        }
       ],
       "traceWord": "小伙子",
       "py": "Dàye xǐhuan hé xiǎohuǒzi yīqǐ dǎ qiú",
       "traceKey": "xiaohuozi"
      },
      {
       "scene": "👩🧑🏢",
       "full": "美女和帅哥都是我们公司的新同事",
       "vi": "Cô gái xinh và anh chàng đẹp trai đều là đồng nghiệp mới của công ty chúng tôi",
       "parts": [
        {
         "t": "美女和帅哥",
         "ico": "👩🧑",
         "c": "s",
         "py": "měinǚ hé shuàigē",
         "hv": "mỉ nữa hoà soái ca"
        },
        {
         "t": "都是",
         "ico": "⚡",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "我们公司的新同事",
         "ico": "🏢",
         "c": "o",
         "py": "wǒmen gōngsī de xīn tóngshì",
         "hv": "ngã món công ti đích tân đồng sự"
        }
       ],
       "traceWord": "帅哥",
       "py": "Měinǚ hé shuàigē dōu shì wǒmen gōngsī de xīn tóngshì",
       "traceKey": "shuaige"
      },
      {
       "scene": "🎤👩🧑🚪",
       "full": "各位女士和男士请到这边来",
       "vi": "Xin các quý bà và quý ông mời sang bên này",
       "parts": [
        {
         "t": "各位女士和男士",
         "ico": "👩🧑",
         "c": "s",
         "py": "gèwèi nǚshì hé nánshì",
         "hv": "các vị nữa sĩ hoà nam sĩ"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "到这边来",
         "ico": "👉",
         "c": "o",
         "py": "dào zhèbiān lái",
         "hv": "đáo _ biên lai"
        }
       ],
       "traceWord": "男士",
       "py": "Gèwèi nǚshì hé nánshì qǐng dào zhèbiān lái",
       "traceKey": "nanshi"
      },
      {
       "scene": "👫👭👬😊",
       "full": "人家是兄弟姐妹所以关系特别好",
       "vi": "Người ta là anh chị em ruột nên quan hệ đặc biệt tốt",
       "parts": [
        {
         "t": "人家",
         "ico": "👥",
         "c": "s",
         "py": "rénjia",
         "hv": "nhân gia"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "兄弟姐妹所以关系特别好",
         "ico": "👫",
         "c": "o",
         "py": "xiōngdì jiěmèi suǒyǐ guānxì tèbié hǎo",
         "hv": "huynh đệ thư muội sỡ _ quan hệ đặc _ háo"
        }
       ],
       "traceWord": "兄弟",
       "py": "Rénjia shì xiōngdì jiěmèi suǒyǐ guānxì tèbié hǎo",
       "traceKey": "xiongdi"
      }
     ],
     "qaList": [
      {
       "q": "你和同事是什么关系？",
       "qvi": "Bạn và đồng nghiệp có quan hệ gì?",
       "scene": "🧑🤝🧑",
       "ans": "我们是工作伙伴",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "我们是工作伙伴",
         "ico": "🤝",
         "py": "Wǒmen shì gōngzuò huǒbàn"
        },
        {
         "txt": "我们喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒmen xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ hé tóngshì shì shénme guānxì?"
      },
      {
       "q": "你们公司男女比例是多少？",
       "qvi": "Tỉ lệ nam nữ ở công ty các bạn là bao nhiêu?",
       "scene": "🏢👩🧑",
       "ans": "男女差不多",
       "opts": [
        {
         "txt": "我们公司在北京",
         "ico": "🏙️",
         "py": "Wǒmen gōngsī zài Běijīng"
        },
        {
         "txt": "我们明天开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "男女差不多",
         "ico": "⚖️",
         "py": "Nánnǚ chàbuduō"
        }
       ],
       "qpy": "Nǐmen gōngsī nánnǚ bǐlì shì duōshao?"
      },
      {
       "q": "那位叔叔是你的什么人？",
       "qvi": "Chú kia là gì của bạn?",
       "scene": "🧔❓",
       "ans": "他是我爸爸的好友",
       "opts": [
        {
         "txt": "他在上海工作",
         "ico": "🏙️",
         "py": "Tā zài Shànghǎi gōngzuò"
        },
        {
         "txt": "他是我爸爸的好友",
         "ico": "🤝",
         "py": "Tā shì wǒ bàba de hǎoyǒu"
        },
        {
         "txt": "他今天不太舒服",
         "ico": "🤒",
         "py": "Tā jīntiān bù tài shūfu"
        }
       ],
       "qpy": "Nà wèi shūshu shì nǐ de shénme rén?"
      },
      {
       "q": "你为什么不高兴？",
       "qvi": "Sao bạn không vui?",
       "scene": "😠⏰",
       "ans": "人家等了你一个小时",
       "opts": [
        {
         "txt": "我今天吃了面包",
         "ico": "🍞",
         "py": "Wǒ jīntiān chī le miànbāo"
        },
        {
         "txt": "我们明天去机场",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù jīchǎng"
        },
        {
         "txt": "人家等了你一个小时",
         "ico": "⏰",
         "py": "Rénjia děng le nǐ yī gè xiǎoshí"
        }
       ],
       "qpy": "Nǐ wèi shénme bù gāoxìng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chào hỏi và gọi người lớn tuổi đúng cách",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại 5 người quen hay gặp (hàng xóm, người bán hàng, đồng nghiệp lớn tuổi) rồi chọn cách gọi phù hợp: <i>\"阿姨\"</i>, <i>\"叔叔\"</i>, <i>\"大姐\"</i>, <i>\"大哥\"</i>. Tự nói thành tiếng từng cách gọi kèm một lời chào.",
       "<b>Bước 2:</b> Nhắn tin cho một người bạn thân bằng tiếng Trung, dùng <i>\"人家\"</i> với giọng nũng nịu một lần, ví dụ <i>\"你别笑人家不好意思\"</i>, và dùng <i>\"人家\"</i> với nghĩa người khác một lần.",
       "<b>Bước 3:</b> Đóng vai người dẫn chương trình mời khách: <i>\"各位女士和男士请到这边来\"</i>. Nói to, chậm, rồi ghi âm lại và nghe để kiểm tra phát âm."
      ]
     }
    },
    {
     "id": "4.1B",
     "name": "Bài 4.1B: Vợ chồng, con cháu và cụm chủ-vị làm chủ ngữ",
     "grammar": {
      "formulas": [
       "👨 丈夫 + 💼 工作忙 + ⚡ 不是 + ❓ 问题",
       "👩 妻子唱歌好听 + ⚡ 是 + 📢 大家都知道的",
       "👴 孙子学习好 + ⚡ 让 + 👵 奶奶很高兴"
      ],
      "tip": "Một cụm chủ-vị (chủ ngữ + vị ngữ) có thể đứng làm chủ ngữ của cả câu, sau đó thường là 是, 不是 hoặc 让. Ví dụ: 孙子学习好 (sūnzi xuéxí hǎo) là chủ ngữ, 是 là động từ chính. Không cần thêm 的 giữa hai phần.",
      "vn_tip": "Người Việt hay thêm \"việc\" như tiếng Việt \"việc con học giỏi\" và dịch thành một cụm danh từ có 的. Tiếng Trung cứ để nguyên cụm chủ-vị: nói 孙子学习好让奶奶很高兴, đừng chèn thêm từ giữa chủ ngữ và vị ngữ của cụm."
     },
     "chunks": [
      {
       "scene": "👨💼⏰",
       "full": "丈夫工作忙不是问题",
       "vi": "Chồng bận công việc không phải là vấn đề",
       "parts": [
        {
         "t": "丈夫工作忙",
         "ico": "👨💼",
         "c": "s",
         "py": "zhàngfu gōngzuò máng",
         "hv": "trượng phu công tác mang"
        },
        {
         "t": "不是",
         "ico": "🚫",
         "c": "v",
         "py": "bú shì",
         "hv": "bất thị"
        },
        {
         "t": "问题",
         "ico": "❓",
         "c": "o",
         "py": "wèntí",
         "hv": "_ _"
        }
       ],
       "traceWord": "丈夫",
       "py": "Zhàngfu gōngzuò máng bú shì wèntí",
       "traceKey": "zhangfu"
      },
      {
       "scene": "👩🎤🎶",
       "full": "妻子唱歌好听是大家都知道的",
       "vi": "Vợ hát hay là điều ai cũng biết",
       "parts": [
        {
         "t": "妻子唱歌好听",
         "ico": "👩🎤",
         "c": "s",
         "py": "qīzi chànggē hǎotīng",
         "hv": "thê tí xướng ca háo thính"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "大家都知道的",
         "ico": "📢",
         "c": "o",
         "py": "dàjiā dōu zhīdào de",
         "hv": "đại gia đô tri đạo đích"
        }
       ],
       "traceWord": "妻子",
       "py": "Qīzi chànggē hǎotīng shì dàjiā dōu zhīdào de",
       "traceKey": "qizi"
      },
      {
       "scene": "👨🍳🍜😊",
       "full": "老公做的饭好吃让我很满意",
       "vi": "Chồng nấu ăn ngon làm tôi rất hài lòng",
       "parts": [
        {
         "t": "老公做的饭好吃",
         "ico": "👨🍳",
         "c": "s",
         "py": "lǎogōng zuò de fàn hǎochī",
         "hv": "lão công _ đích _ háo khật"
        },
        {
         "t": "让",
         "ico": "⚡",
         "c": "v",
         "py": "ràng",
         "hv": "nhường"
        },
        {
         "t": "我很满意",
         "ico": "😊",
         "c": "o",
         "py": "wǒ hěn mǎnyì",
         "hv": "ngã _ mãn ý"
        }
       ],
       "traceWord": "老公",
       "py": "Lǎogōng zuò de fàn hǎochī ràng wǒ hěn mǎnyì",
       "traceKey": "laogong"
      },
      {
       "scene": "👩🏠🌙👶",
       "full": "老婆回家晚让宝宝很不高兴",
       "vi": "Vợ về nhà muộn làm bé rất không vui",
       "parts": [
        {
         "t": "老婆回家晚",
         "ico": "👩🌙",
         "c": "s",
         "py": "lǎopo huí jiā wǎn",
         "hv": "lão bà hồi gia vãn"
        },
        {
         "t": "让",
         "ico": "⚡",
         "c": "v",
         "py": "ràng",
         "hv": "nhường"
        },
        {
         "t": "宝宝很不高兴",
         "ico": "👶😢",
         "c": "o",
         "py": "bǎobao hěn bù gāoxìng",
         "hv": "bảo bảo _ bất cao hưng"
        }
       ],
       "traceWord": "宝宝",
       "py": "Lǎopo huí jiā wǎn ràng bǎobao hěn bù gāoxìng",
       "traceKey": "baobao"
      },
      {
       "scene": "👦📚👴👵",
       "full": "孙子学习好是爷爷奶奶最高兴的事",
       "vi": "Cháu trai học giỏi là điều ông bà vui nhất",
       "parts": [
        {
         "t": "孙子学习好",
         "ico": "👦📚",
         "c": "s",
         "py": "sūnzi xuéxí hǎo",
         "hv": "tôn tí học tập háo"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "爷爷奶奶最高兴的事",
         "ico": "👴👵😊",
         "c": "o",
         "py": "yéye nǎinai zuì gāoxìng de shì",
         "hv": "_ _ nái nái tối cao hưng đích sự"
        }
       ],
       "traceWord": "孙子",
       "py": "Sūnzi xuéxí hǎo shì yéye nǎinai zuì gāoxìng de shì",
       "traceKey": "sunzi"
      },
      {
       "scene": "👧👩👵😊",
       "full": "孙女长得像妈妈让奶奶非常开心",
       "vi": "Cháu gái giống mẹ làm bà nội rất vui",
       "parts": [
        {
         "t": "孙女长得像妈妈",
         "ico": "👧👩",
         "c": "s",
         "py": "sūnnǚ cháng dé xiàng māma",
         "hv": "tôn nữa trường đắc tượng má má"
        },
        {
         "t": "让",
         "ico": "⚡",
         "c": "v",
         "py": "ràng",
         "hv": "nhường"
        },
        {
         "t": "奶奶非常开心",
         "ico": "👵😊",
         "c": "o",
         "py": "nǎinai fēicháng kāixīn",
         "hv": "nái nái phi thường khai tâm"
        }
       ],
       "traceWord": "孙女",
       "py": "Sūnnǚ cháng dé xiàng māma ràng nǎinai fēicháng kāixīn",
       "traceKey": "sunnu"
      },
      {
       "scene": "🧒🧑🚪📋",
       "full": "儿童跟成人一起进来是这里的规定",
       "vi": "Trẻ em vào cùng người lớn là quy định ở đây",
       "parts": [
        {
         "t": "儿童跟成人一起进来",
         "ico": "🧒🧑",
         "c": "s",
         "py": "értóng gēn chéngrén yīqǐ jìnlái",
         "hv": "_ đồng ngấn thành nhân nhất khởi tiến lai"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "这里的规定",
         "ico": "📋",
         "c": "o",
         "py": "zhèlǐ de guīdìng",
         "hv": "_ lịa đích qui định"
        }
       ],
       "traceWord": "儿童",
       "py": "Értóng gēn chéngrén yīqǐ jìnlái shì zhèlǐ de guīdìng",
       "traceKey": "ertong"
      },
      {
       "scene": "👫💞👀",
       "full": "夫妻俩关系亲密是大家都看得出来的事",
       "vi": "Hai vợ chồng thân thiết là điều ai cũng nhìn ra được",
       "parts": [
        {
         "t": "夫妻俩关系亲密",
         "ico": "👫💞",
         "c": "s",
         "py": "fūqī liǎ guānxì qīnmì",
         "hv": "phu thê _ quan hệ thân mật"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "大家都看得出来的事",
         "ico": "👀",
         "c": "o",
         "py": "dàjiā dōu kàn dé chūlái de shì",
         "hv": "đại gia đô khán đắc xuất lai đích sự"
        }
       ],
       "traceWord": "亲密",
       "py": "Fūqī liǎ guānxì qīnmì shì dàjiā dōu kàn dé chūlái de shì",
       "traceKey": "qinmi"
      }
     ],
     "qaList": [
      {
       "q": "王先生的夫人做什么工作？",
       "qvi": "Phu nhân của ông Vương làm nghề gì?",
       "scene": "👨👩💼",
       "ans": "她是一位老师",
       "opts": [
        {
         "txt": "他每天坐地铁上班",
         "ico": "🚇",
         "py": "Tā měi tiān zuò dìtiě shàngbān"
        },
        {
         "txt": "我们明年去北京",
         "ico": "🏙️",
         "py": "Wǒmen míngnián qù Běijīng"
        },
        {
         "txt": "她是一位老师",
         "ico": "👩🏫",
         "py": "Tā shì yī wèi lǎoshī"
        }
       ],
       "qpy": "Wángxiānshēng de fūrén zuò shénme gōngzuò?"
      },
      {
       "q": "那对夫妇住在哪儿？",
       "qvi": "Cặp vợ chồng kia sống ở đâu?",
       "scene": "👫🏠❓",
       "ans": "他们住在学校旁边",
       "opts": [
        {
         "txt": "他们住在学校旁边",
         "ico": "🏫",
         "py": "Tāmen zhù zài xuéxiào pángbiān"
        },
        {
         "txt": "他们喜欢吃面包",
         "ico": "🍞",
         "py": "Tāmen xǐhuan chī miànbāo"
        },
        {
         "txt": "他们下午三点开会",
         "ico": "📅",
         "py": "Tāmen xiàwǔ sān diǎn kāihuì"
        }
       ],
       "qpy": "Nà duì fūfù zhù zài nǎr?"
      },
      {
       "q": "你给丈夫写信，开头怎么写？",
       "qvi": "Bạn viết thư cho chồng, mở đầu viết thế nào?",
       "scene": "✉️💌👨",
       "ans": "亲爱的老公",
       "opts": [
        {
         "txt": "请问几点开会",
         "ico": "📅",
         "py": "Qǐngwèn jǐ diǎn kāihuì"
        },
        {
         "txt": "明天天气很冷",
         "ico": "🌨️",
         "py": "Míngtiān tiānqì hěn lěng"
        },
        {
         "txt": "亲爱的老公",
         "ico": "💌",
         "py": "Qīn'ài de lǎogōng"
        }
       ],
       "qpy": "Nǐ gěi zhàngfu xiě xìn kāi tóu zěnme xiě?"
      },
      {
       "q": "宝贝今天怎么了？",
       "qvi": "Hôm nay bé yêu bị sao vậy?",
       "scene": "👶🤒❓",
       "ans": "宝贝感冒了",
       "opts": [
        {
         "txt": "公司明天不上班",
         "ico": "🏢",
         "py": "Gōngsī míngtiān bú shàngbān"
        },
        {
         "txt": "宝贝感冒了",
         "ico": "🤒",
         "py": "Bǎobèi gǎnmào le"
        },
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        }
       ],
       "qpy": "Bǎobèi jīntiān zěnme le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu gia đình với đồng nghiệp người Trung",
      "steps": [
       "<b>Bước 1:</b> Viết 3 câu giới thiệu người thân bằng cụm chủ-vị làm chủ ngữ, ví dụ <i>\"丈夫工作忙不是问题\"</i>, <i>\"孙女长得像妈妈让奶奶非常开心\"</i>, thay bằng người thân thật của bạn.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp người Trung kể một chuyện vui trong nhà, dùng 让 một lần, ví dụ <i>\"老婆回家晚让宝宝很不高兴\"</i>, rồi hỏi lại gia đình của họ.",
       "<b>Bước 3:</b> Tự nói thành tiếng 1 phút về gia đình mình với 5 câu: có mấy người, ai là <i>\"丈夫\"</i> hoặc <i>\"妻子\"</i>, ai bận, ai làm bạn vui nhất. Ghi âm lại và nghe lại một lần."
      ]
     }
    },
    {
     "id": "4.1C",
     "name": "Bài 4.1C: Đám cưới, họp mặt và 又……又……",
     "grammar": {
      "formulas": [
       "🧑 新郎新娘 + 😬 又紧张 + 😊 又高兴",
       "🍽️ 菜 + 😋 又好吃 + 👀 又好看",
       "🧑 他 + 🚫 也不见面 + 🚫 也不联系"
      ],
      "tip": "Cấu trúc 又……又…… (yòu... yòu...) nghĩa là \"vừa... vừa...\", nối hai tính từ hoặc hai động từ cùng một chủ ngữ. Có thể dùng 也……也…… với nghĩa \"cũng... cũng...\" trong câu phủ định như 也不……也不……. Dạng văn viết trang trọng hơn có thể gặp trong sách báo.",
      "vn_tip": "Người Việt hay nói \"vừa… vừa…\" cho hai việc xảy ra cùng lúc và dịch thành 一边……一边……. Với tính chất thì phải dùng 又……又……: 又冷又长, không nói 一边冷一边长. Hai vế phải cùng loại (cùng khen hoặc cùng chê), không trộn lẫn."
     },
     "chunks": [
      {
       "scene": "🤵👰😬😊",
       "full": "新郎新娘都觉得又紧张又高兴",
       "vi": "Cô dâu chú rể đều thấy vừa hồi hộp vừa vui",
       "parts": [
        {
         "t": "新郎新娘",
         "ico": "🤵👰",
         "c": "s",
         "py": "xīnláng xīnniáng",
         "hv": "tân lang tân nương"
        },
        {
         "t": "都觉得",
         "ico": "💭",
         "c": "v",
         "py": "dōu juéde",
         "hv": "đô giác đắc"
        },
        {
         "t": "又紧张又高兴",
         "ico": "😬😊",
         "c": "o",
         "py": "yòu jǐnzhāng yòu gāoxìng",
         "hv": "lại khẩn trương lại cao hưng"
        }
       ],
       "traceWord": "新郎",
       "py": "Xīnláng xīnniáng dōu juéde yòu jǐnzhāng yòu gāoxìng",
       "traceKey": "xinlang"
      },
      {
       "scene": "💒🍽️😋",
       "full": "婚礼上的菜看起来又好吃又好看",
       "vi": "Món ăn trong đám cưới nhìn vừa ngon vừa đẹp",
       "parts": [
        {
         "t": "婚礼上的菜",
         "ico": "💒🍽️",
         "c": "s",
         "py": "hūnlǐ shàng de cài",
         "hv": "_ lễ thượng đích _"
        },
        {
         "t": "看起来",
         "ico": "👀",
         "c": "v",
         "py": "kàn qǐlái",
         "hv": "khán khởi lai"
        },
        {
         "t": "又好吃又好看",
         "ico": "😋✨",
         "c": "o",
         "py": "yòu hǎochī yòu hǎokàn",
         "hv": "lại háo khật lại háo khán"
        }
       ],
       "traceWord": "婚礼",
       "py": "Hūnlǐ shàng de cài kàn qǐlái yòu hǎochī yòu hǎokàn",
       "traceKey": "hunli"
      },
      {
       "scene": "🏡❄️🌙",
       "full": "我觉得老家的冬天又冷又长",
       "vi": "Tôi thấy mùa đông ở quê vừa lạnh vừa dài",
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
         "t": "老家的冬天又冷又长",
         "ico": "🏡❄️",
         "c": "o",
         "py": "lǎojiā de dōngtiān yòu lěng yòu cháng",
         "hv": "lão gia đích đông thiên lại lạnh lại trường"
        }
       ],
       "traceWord": "老家",
       "py": "Wǒ juéde lǎojiā de dōngtiān yòu lěng yòu cháng",
       "traceKey": "laojia"
      },
      {
       "scene": "👦🎈🍬",
       "full": "童年的我又爱玩儿又爱吃糖",
       "vi": "Tuổi thơ tôi vừa thích chơi vừa thích ăn kẹo",
       "parts": [
        {
         "t": "童年的我",
         "ico": "👦",
         "c": "s",
         "py": "tóngnián de wǒ",
         "hv": "đồng nên đích ngã"
        },
        {
         "t": "又爱玩儿又爱吃",
         "ico": "🎈😋",
         "c": "v",
         "py": "yòu ài wánr yòu ài chī",
         "hv": "lại _ ngoạn _ lại _ khật"
        },
        {
         "t": "糖",
         "ico": "🍬",
         "c": "o",
         "py": "táng",
         "hv": "đường"
        }
       ],
       "traceWord": "童年",
       "py": "Tóngnián de wǒ yòu ài wánr yòu ài chī táng",
       "traceKey": "tongnian"
      },
      {
       "scene": "🧒🏫🎤💃",
       "full": "小朋友在幼儿园里又唱歌又跳舞",
       "vi": "Các bạn nhỏ ở trường mẫu giáo vừa hát vừa nhảy",
       "parts": [
        {
         "t": "小朋友",
         "ico": "🧒",
         "c": "s",
         "py": "xiǎopéngyǒu",
         "hv": "tiểu bằng hữu"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "幼儿园里又唱歌又跳舞",
         "ico": "🏫🎤💃",
         "c": "o",
         "py": "yòu'éryuán lǐ yòu chànggē yòu tiàowǔ",
         "hv": "ấu _ viên lịa lại xướng ca lại khêu vũ"
        }
       ],
       "traceWord": "幼儿园",
       "py": "Xiǎopéngyǒu zài yòu'éryuán lǐ yòu chànggē yòu tiàowǔ",
       "traceKey": "youeryuan"
      },
      {
       "scene": "🌸👫💼😊",
       "full": "我们的青春过得又忙又快乐",
       "vi": "Tuổi thanh xuân của chúng tôi trôi qua vừa bận rộn vừa vui",
       "parts": [
        {
         "t": "我们的青春",
         "ico": "🌸👫",
         "c": "s",
         "py": "wǒmen de qīngchūn",
         "hv": "ngã món đích thanh _"
        },
        {
         "t": "过得",
         "ico": "⏳",
         "c": "v",
         "py": "guò dé",
         "hv": "quá đắc"
        },
        {
         "t": "又忙又快乐",
         "ico": "💼😊",
         "c": "o",
         "py": "yòu máng yòu kuàilè",
         "hv": "lại mang lại khoái lạc"
        }
       ],
       "traceWord": "青春",
       "py": "Wǒmen de qīngchūn guò dé yòu máng yòu kuàilè",
       "traceKey": "qingchun"
      },
      {
       "scene": "💔🙅📵",
       "full": "他们分手以后也不见面也不联系",
       "vi": "Sau khi chia tay họ cũng không gặp mặt cũng không liên lạc",
       "parts": [
        {
         "t": "他们",
         "ico": "👫",
         "c": "s",
         "py": "tāmen",
         "hv": "tha món"
        },
        {
         "t": "分手以后",
         "ico": "💔",
         "c": "v",
         "py": "fēnshǒu yǐhòu",
         "hv": "phân thủ _ hậu"
        },
        {
         "t": "也不见面也不联系",
         "ico": "🙅📵",
         "c": "o",
         "py": "yě bú jiànmiàn yě bù liánxì",
         "hv": "dã bất kiến _ dã bất liên hệ"
        }
       ],
       "traceWord": "分手",
       "py": "Tāmen fēnshǒu yǐhòu yě bú jiànmiàn yě bù liánxì",
       "traceKey": "fenshou"
      },
      {
       "scene": "💑🎬🍽️",
       "full": "小明和小红约会时又看电影又吃饭",
       "vi": "Tiểu Minh và Tiểu Hồng khi hẹn hò vừa xem phim vừa ăn cơm",
       "parts": [
        {
         "t": "小明和小红",
         "ico": "💑",
         "c": "s",
         "py": "Xiǎomíng hé Xiǎohóng",
         "hv": "tiểu minh hoà tiểu hồng"
        },
        {
         "t": "约会时",
         "ico": "❤️",
         "c": "v",
         "py": "yuēhuì shí",
         "hv": "ước hội thì"
        },
        {
         "t": "又看电影又吃饭",
         "ico": "🎬🍽️",
         "c": "o",
         "py": "yòu kàn diànyǐng yòu chīfàn",
         "hv": "lại khán _ ảnh lại khật _"
        }
       ],
       "traceWord": "约会",
       "py": "Xiǎomíng hé Xiǎohóng yuēhuì shí yòu kàn diànyǐng yòu chīfàn",
       "traceKey": "yuehui"
      }
     ],
     "qaList": [
      {
       "q": "春节你打算看望谁？",
       "qvi": "Tết bạn định thăm ai?",
       "scene": "🧧🏡👴👵",
       "ans": "我打算看望爷爷奶奶",
       "opts": [
        {
         "txt": "我打算买一台电脑",
         "ico": "💻",
         "py": "Wǒ dǎsuàn mǎi yī tái diànnǎo"
        },
        {
         "txt": "我昨天看了电影",
         "ico": "🎬",
         "py": "Wǒ zuótiān kàn le diànyǐng"
        },
        {
         "txt": "我打算看望爷爷奶奶",
         "ico": "👴👵",
         "py": "Wǒ dǎsuàn kànwàng yéye nǎinai"
        }
       ],
       "qpy": "Chūnjié nǐ dǎsuàn kànwàng shéi?"
      },
      {
       "q": "朋友结婚的时候，你会送什么？",
       "qvi": "Khi bạn kết hôn, bạn sẽ tặng gì?",
       "scene": "💒🎁🧧",
       "ans": "我会送红包还有祝福",
       "opts": [
        {
         "txt": "我会送红包还有祝福",
         "ico": "🧧",
         "py": "Wǒ huì sòng hóngbāo hái yǒu zhùfú"
        },
        {
         "txt": "我们周末聚在一起",
         "ico": "🍻",
         "py": "Wǒmen zhōumò jù zài yīqǐ"
        },
        {
         "txt": "我昨天在公司开会",
         "ico": "🏢",
         "py": "Wǒ zuótiān zài gōngsī kāihuì"
        }
       ],
       "qpy": "Péngyou jiéhūn de shíhou nǐ huì sòng shénme?"
      },
      {
       "q": "见到老同学，你会怎么打招呼？",
       "qvi": "Gặp bạn học cũ, bạn sẽ chào hỏi thế nào?",
       "scene": "🧑🤝🧑😊",
       "ans": "我会笑着说好久不见",
       "opts": [
        {
         "txt": "我会坐飞机去北京",
         "ico": "✈️",
         "py": "Wǒ huì zuò fēijī qù Běijīng"
        },
        {
         "txt": "我会笑着说好久不见",
         "ico": "😊",
         "py": "Wǒ huì xiào zhe shuō hǎojiǔ bú jiàn"
        },
        {
         "txt": "我昨天买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        }
       ],
       "qpy": "Jiàndào lǎo tóngxué nǐ huì zěnme dǎ zhāohu?"
      },
      {
       "q": "周末的聚会你参加吗？",
       "qvi": "Buổi họp mặt cuối tuần bạn có tham gia không?",
       "scene": "🍻👫📅",
       "ans": "我想参加并问候老朋友",
       "opts": [
        {
         "txt": "我今天要去机场",
         "ico": "✈️",
         "py": "Wǒ jīntiān yào qù jīchǎng"
        },
        {
         "txt": "他是我们的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen de jīnglǐ"
        },
        {
         "txt": "我想参加并问候老朋友",
         "ico": "🍻",
         "py": "Wǒ xiǎng cānjiā bìng wènhòu lǎo péngyou"
        }
       ],
       "qpy": "Zhōumò de jùhuì nǐ cānjiā ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mời bạn cũ họp mặt và chúc mừng đám cưới",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin vào nhóm chat bạn bè rủ họp mặt cuối tuần: <i>\"周末的聚会你参加吗？\"</i> và nói rõ bạn muốn <i>\"问候老朋友\"</i>. Gửi thử cho một người bạn thật.",
       "<b>Bước 2:</b> Tưởng tượng bạn đi dự đám cưới của đồng nghiệp. Tự nói thành tiếng lời chúc dành cho cô dâu chú rể, nhắc đến <i>\"红包\"</i> và <i>\"祝福\"</i>, rồi khen món ăn: <i>\"婚礼上的菜又好吃又好看\"</i>.",
       "<b>Bước 3:</b> Kể bằng 4 câu về tuổi thơ hoặc quê nhà của bạn với <i>\"又……又……\"</i>, ví dụ <i>\"我觉得老家的冬天又冷又长\"</i>. Ghi âm và nghe lại một lần."
      ]
     }
    }
   ]
  },
  "4.2": {
   "lessons": [
    {
     "id": "4.2A",
     "name": "Bài 4.2A: Cơ thể và vóc dáng",
     "grammar": {
      "formulas": [
       "🪥 牙刷 + ⚡ 已经放在 + 🚿 洗手间里了",
       "👶 孩子的肚子 + ⚡ 都检查 + ✅ 过了",
       "🫁 器官 + ⚡ 要好好 + 🛡️ 保护起来"
      ],
      "tip": "Câu có chủ ngữ là đối tượng chịu tác động (受事主语): đưa vật bị tác động lên đầu câu làm chủ ngữ, không cần 被, động từ thường đi kèm bổ ngữ hoặc 了 như 放在 (fàng zài, phóng tại), 检查过了 (jiǎnchá guo le, kiểm tra quá liễu).",
      "vn_tip": "Người Việt hay nói 我检查孩子的肚子了 khi muốn nhấn mạnh vật được xử lý. Khi trọng tâm là vật bị tác động, hãy đặt nó lên đầu: 孩子的肚子检查过了. Đừng để động từ trơ trọi, phải có thêm 了, 过, 好 hoặc bổ ngữ."
     },
     "chunks": [
      {
       "scene": "🪥🚿🏠",
       "full": "牙刷已经放在洗手间里了",
       "vi": "Bàn chải đánh răng đã được đặt trong nhà vệ sinh rồi",
       "parts": [
        {
         "t": "牙刷",
         "ico": "🪥",
         "c": "s",
         "py": "yáshuā",
         "hv": "nha loát"
        },
        {
         "t": "已经放在",
         "ico": "📍",
         "c": "v",
         "py": "yǐjīng fàng zài",
         "hv": "dĩ kinh phóng tại"
        },
        {
         "t": "洗手间里了",
         "ico": "🚿",
         "c": "o",
         "py": "xǐshǒujiān lǐ le",
         "hv": "tẩy thủ gian lịa liễu"
        }
       ],
       "traceWord": "牙刷",
       "py": "Yáshuā yǐjīng fàng zài xǐshǒujiān lǐ le",
       "traceKey": "yashua"
      },
      {
       "scene": "🪥😁⏰",
       "full": "刷牙的习惯要保持下去",
       "vi": "Thói quen đánh răng cần được duy trì tiếp",
       "parts": [
        {
         "t": "刷牙的习惯",
         "ico": "🪥",
         "c": "s",
         "py": "shuā yá de xíguàn",
         "hv": "loát nha đích tập quen"
        },
        {
         "t": "要保持",
         "ico": "💪",
         "c": "v",
         "py": "yào bǎochí",
         "hv": "yếu bảo trì"
        },
        {
         "t": "下去",
         "ico": "➡️",
         "c": "o",
         "py": "xiàqù",
         "hv": "hạ khứ"
        }
       ],
       "traceWord": "刷牙",
       "py": "Shuā yá de xíguàn yào bǎochí xiàqù",
       "traceKey": "shuaya"
      },
      {
       "scene": "🍚🥢😋",
       "full": "食物要慢慢吃才容易消化",
       "vi": "Thức ăn phải ăn chậm thì mới dễ tiêu hóa",
       "parts": [
        {
         "t": "食物",
         "ico": "🍚",
         "c": "s",
         "py": "shíwù",
         "hv": "_ vật"
        },
        {
         "t": "要慢慢吃",
         "ico": "🥢",
         "c": "v",
         "py": "yào mànmàn chī",
         "hv": "yếu mạn mạn khật"
        },
        {
         "t": "才容易消化",
         "ico": "😌",
         "c": "o",
         "py": "cái róngyì xiāohuà",
         "hv": "tài dung dịch tiêu hoá"
        }
       ],
       "traceWord": "消化",
       "py": "Shíwù yào mànmàn chī cái róngyì xiāohuà",
       "traceKey": "xiaohua"
      },
      {
       "scene": "👶🩺✅",
       "full": "孩子的肚子和胸部都检查过了",
       "vi": "Bụng và ngực của đứa bé đều đã được kiểm tra rồi",
       "parts": [
        {
         "t": "孩子的肚子和胸部",
         "ico": "👶",
         "c": "s",
         "py": "háizi de dùzi hé xiōngbù",
         "hv": "hài tí đích _ tí hoà hông bộ"
        },
        {
         "t": "都检查",
         "ico": "🩺",
         "c": "v",
         "py": "dōu jiǎnchá",
         "hv": "đô ghém tra"
        },
        {
         "t": "过了",
         "ico": "✅",
         "c": "o",
         "py": "guò le",
         "hv": "quá liễu"
        }
       ],
       "traceWord": "肚子",
       "py": "Háizi de dùzi hé xiōngbù dōu jiǎnchá guò le",
       "traceKey": "duzi"
      },
      {
       "scene": "🐶🦴🪑",
       "full": "小狗的骨头已经放在桌子上了",
       "vi": "Khúc xương của chú chó đã được đặt trên bàn rồi",
       "parts": [
        {
         "t": "小狗的骨头",
         "ico": "🦴",
         "c": "s",
         "py": "xiǎo gǒu de gǔtou",
         "hv": "tiểu cẩu đích cốt đầu"
        },
        {
         "t": "已经放在",
         "ico": "📍",
         "c": "v",
         "py": "yǐjīng fàng zài",
         "hv": "dĩ kinh phóng tại"
        },
        {
         "t": "桌子上了",
         "ico": "🪑",
         "c": "o",
         "py": "zhuōzi shàng le",
         "hv": "_ tí thượng liễu"
        }
       ],
       "traceWord": "骨头",
       "py": "Xiǎo gǒu de gǔtou yǐjīng fàng zài zhuōzi shàng le",
       "traceKey": "gutou"
      },
      {
       "scene": "🧑🩺🔍",
       "full": "你的脑袋和腰都要好好检查一下儿",
       "vi": "Đầu và lưng của bạn đều cần được kiểm tra kỹ một chút",
       "parts": [
        {
         "t": "你的脑袋和腰",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ de nǎodai hé yāo",
         "hv": "nể đích não đãy hoà yêu"
        },
        {
         "t": "都要好好",
         "ico": "👍",
         "c": "v",
         "py": "dōu yào hǎohǎo",
         "hv": "đô yếu háo háo"
        },
        {
         "t": "检查一下儿",
         "ico": "🔍",
         "c": "o",
         "py": "jiǎnchá yīxiàr",
         "hv": "ghém tra nhất hạ _"
        }
       ],
       "traceWord": "脑袋",
       "py": "Nǐ de nǎodai hé yāo dōu yào hǎohǎo jiǎnchá yīxiàr",
       "traceKey": "naodai"
      },
      {
       "scene": "🫁🛡️❤️",
       "full": "我们呼吸的器官要好好保护起来",
       "vi": "Các cơ quan hô hấp của chúng ta cần được bảo vệ cẩn thận",
       "parts": [
        {
         "t": "我们呼吸的器官",
         "ico": "🫁",
         "c": "s",
         "py": "wǒmen hūxī de qìguān",
         "hv": "ngã món hô cộp đích khí quan"
        },
        {
         "t": "要好好",
         "ico": "👍",
         "c": "v",
         "py": "yào hǎohǎo",
         "hv": "yếu háo háo"
        },
        {
         "t": "保护起来",
         "ico": "🛡️",
         "c": "o",
         "py": "bǎohù qǐlái",
         "hv": "bảo hộ khởi lai"
        }
       ],
       "traceWord": "器官",
       "py": "Wǒmen hūxī de qìguān yào hǎohǎo bǎohù qǐlái",
       "traceKey": "qiguan"
      },
      {
       "scene": "👄🦷👨‍⚕️",
       "full": "嘴巴要张大一点儿才能看到牙",
       "vi": "Miệng phải há to hơn một chút thì mới nhìn thấy răng",
       "parts": [
        {
         "t": "嘴巴",
         "ico": "👄",
         "c": "s",
         "py": "zuǐba",
         "hv": "_ ba"
        },
        {
         "t": "要张大",
         "ico": "😮",
         "c": "v",
         "py": "yào zhāng dà",
         "hv": "yếu trương đại"
        },
        {
         "t": "一点儿才能看到牙",
         "ico": "🦷",
         "c": "o",
         "py": "yīdiǎnr cáinéng kàndào yá",
         "hv": "nhất điểm _ tài năng khán đáo nha"
        }
       ],
       "traceWord": "嘴巴",
       "py": "Zuǐba yào zhāng dà yīdiǎnr cáinéng kàndào yá",
       "traceKey": "zuiba"
      }
     ],
     "qaList": [
      {
       "q": "你的身高是多少？",
       "qvi": "Chiều cao của bạn là bao nhiêu?",
       "scene": "🧑📏",
       "ans": "我的身高一米七",
       "opts": [
        {
         "txt": "我的身高一米七",
         "ico": "📏",
         "py": "Wǒ de shēngāo yī mǐ qī"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "他明天去北京",
         "ico": "✈️",
         "py": "Tā míngtiān qù Běijīng"
        }
       ],
       "qpy": "Nǐ de shēngāo shì duōshao?"
      },
      {
       "q": "你的体重是多少？",
       "qvi": "Cân nặng của bạn là bao nhiêu?",
       "scene": "🧑⚖️",
       "ans": "我的体重六十五公斤",
       "opts": [
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        },
        {
         "txt": "我的体重六十五公斤",
         "ico": "⚖️",
         "py": "Wǒ de tǐzhòng liù shí wǔ gōngjīn"
        },
        {
         "txt": "这个周末我休息",
         "ico": "🛋️",
         "py": "Zhè gè zhōumò wǒ xiūxi"
        }
       ],
       "qpy": "Nǐ de tǐzhòng shì duōshao?"
      },
      {
       "q": "她的身材怎么样？",
       "qvi": "Vóc dáng của cô ấy thế nào?",
       "scene": "👩✨",
       "ans": "她的身材很好",
       "opts": [
        {
         "txt": "她昨天去了医院",
         "ico": "🏥",
         "py": "Tā zuótiān qù le yīyuàn"
        },
        {
         "txt": "这本书非常有意思",
         "ico": "📖",
         "py": "Zhè běn shū fēicháng yǒu yìsi"
        },
        {
         "txt": "她的身材很好",
         "ico": "👍",
         "py": "Tā de shēncái hěn hǎo"
        }
       ],
       "qpy": "Tā de shēncái zěnmeyàng?"
      },
      {
       "q": "小狗的尾巴长不长？",
       "qvi": "Đuôi của chú chó có dài không?",
       "scene": "🐶📏",
       "ans": "小狗的尾巴很长",
       "opts": [
        {
         "txt": "我家有一只猫",
         "ico": "🐱",
         "py": "Wǒ jiā yǒu yī zhǐ māo"
        },
        {
         "txt": "小狗的尾巴很长",
         "ico": "🐕",
         "py": "Xiǎo gǒu de wěiba hěn cháng"
        },
        {
         "txt": "小狗喜欢吃肉",
         "ico": "🍖",
         "py": "Xiǎo gǒu xǐhuan chī ròu"
        }
       ],
       "qpy": "Xiǎo gǒu de wěiba cháng bù cháng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trả lời bác sĩ về cơ thể của bạn",
      "steps": [
       "<b>Bước 1:</b> Đứng trước gương, nói to tên các bộ phận cơ thể bằng tiếng Trung rồi tự giới thiệu chiều cao, cân nặng: <i>\"我的身高一米七\"</i>.",
       "<b>Bước 2:</b> Nhìn quanh nhà, đặt đồ vật làm chủ ngữ: <i>\"牙刷已经放在洗手间里了\"</i>. Tự nói thêm ít nhất 3 câu về đồ vật xung quanh.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp hoặc ghi âm 1 phút kể về thói quen chăm sóc cơ thể, dùng câu như <i>\"刷牙的习惯要保持下去\"</i>."
      ]
     }
    },
    {
     "id": "4.2B",
     "name": "Bài 4.2B: Đi khám bệnh và điều trị",
     "grammar": {
      "formulas": [
       "🤒 发烧的孩子 + ⚡ 被妈妈送到 + 🏥 内科去了",
       "💊 这种药物 + ⚡ 被医生用来 + 🤧 治疗感冒",
       "🚗 我 + ⚡ 被车里的味道 + 🤢 弄得很恶心"
      ],
      "tip": "Câu bị động: 受事 + 被 + (người làm) + động từ + thành phần khác. Sau động từ phải có bổ ngữ, 了 hoặc kết quả như 送到 (sòng dào, tống đáo), 治好了 (zhì hǎo le, trị hảo liễu). Có thể lược tác nhân: 被借走了.",
      "vn_tip": "Người Việt hay dịch \"bị/được\" sang 被 cho mọi trường hợp, rồi để động từ trơ trọi như 我被医生检查. Tiếng Trung cần thành phần sau động từ: 我被医生检查了一遍. Ngoài ra 被 hay dùng với việc không mong muốn hoặc có kết quả rõ ràng, đừng lạm dụng."
     },
     "chunks": [
      {
       "scene": "🤒👩🏥",
       "full": "发烧的孩子被妈妈送到内科去了",
       "vi": "Đứa trẻ bị sốt đã được mẹ đưa đến khoa nội rồi",
       "parts": [
        {
         "t": "发烧的孩子",
         "ico": "🤒",
         "c": "s",
         "py": "fāshāo de háizi",
         "hv": "_ thiêu đích hài tí"
        },
        {
         "t": "被妈妈送到",
         "ico": "👩",
         "c": "v",
         "py": "bèi māma sòngdào",
         "hv": "bị má má tống đáo"
        },
        {
         "t": "内科去了",
         "ico": "🏥",
         "c": "o",
         "py": "nèikē qù le",
         "hv": "nội khoa khứ liễu"
        }
       ],
       "traceWord": "发烧",
       "py": "Fāshāo de háizi bèi māma sòngdào nèikē qù le",
       "traceKey": "fashao"
      },
      {
       "scene": "💉👩‍⚕️⏰",
       "full": "打针的时间被护士改到了下午",
       "vi": "Giờ tiêm đã bị y tá đổi sang buổi chiều",
       "parts": [
        {
         "t": "打针的时间",
         "ico": "💉",
         "c": "s",
         "py": "dǎzhēn de shíjiān",
         "hv": "đả châm đích thì gian"
        },
        {
         "t": "被护士改到",
         "ico": "👩‍⚕️",
         "c": "v",
         "py": "bèi hùshi gǎi dào",
         "hv": "bị hộ sĩ _ đáo"
        },
        {
         "t": "了下午",
         "ico": "🌇",
         "c": "o",
         "py": "le xiàwǔ",
         "hv": "liễu hạ ngọ"
        }
       ],
       "traceWord": "打针",
       "py": "Dǎzhēn de shíjiān bèi hùshi gǎi dào le xiàwǔ",
       "traceKey": "dazhen"
      },
      {
       "scene": "🧔🔪📅",
       "full": "爸爸的手术被医生安排在下周三",
       "vi": "Ca phẫu thuật của bố được bác sĩ xếp vào thứ Tư tuần sau",
       "parts": [
        {
         "t": "爸爸的手术",
         "ico": "🧔",
         "c": "s",
         "py": "bàba de shǒushù",
         "hv": "_ _ đích thủ thuật"
        },
        {
         "t": "被医生安排",
         "ico": "👨‍⚕️",
         "c": "v",
         "py": "bèi yīshēng ānpái",
         "hv": "bị y sinh an bài"
        },
        {
         "t": "在下周三",
         "ico": "📅",
         "c": "o",
         "py": "zài xià zhōu sān",
         "hv": "tại hạ chu tam"
        }
       ],
       "traceWord": "手术",
       "py": "Bàba de shǒushù bèi yīshēng ānpái zài xià zhōu sān",
       "traceKey": "shoushu"
      },
      {
       "scene": "🩺📋💊",
       "full": "体检发现的毛病被医生治好了",
       "vi": "Bệnh được phát hiện khi khám sức khỏe đã được bác sĩ chữa khỏi",
       "parts": [
        {
         "t": "体检发现的毛病",
         "ico": "📋",
         "c": "s",
         "py": "tǐjiǎn fāxiàn de máobìng",
         "hv": "thể ghém _ hiện đích mao bệnh"
        },
        {
         "t": "被医生",
         "ico": "👨‍⚕️",
         "c": "v",
         "py": "bèi yīshēng",
         "hv": "bị y sinh"
        },
        {
         "t": "治好了",
         "ico": "✅",
         "c": "o",
         "py": "zhì hǎo le",
         "hv": "trị háo liễu"
        }
       ],
       "traceWord": "体检",
       "py": "Tǐjiǎn fāxiàn de máobìng bèi yīshēng zhì hǎo le",
       "traceKey": "tijian"
      },
      {
       "scene": "💊🤧👨‍⚕️",
       "full": "这种药物被医生用来治疗感冒",
       "vi": "Loại thuốc này được bác sĩ dùng để điều trị cảm cúm",
       "parts": [
        {
         "t": "这种药物",
         "ico": "💊",
         "c": "s",
         "py": "zhè zhǒng yàowù",
         "hv": "_ chõng dược vật"
        },
        {
         "t": "被医生用来",
         "ico": "👨‍⚕️",
         "c": "v",
         "py": "bèi yīshēng yòng lái",
         "hv": "bị y sinh dụng lai"
        },
        {
         "t": "治疗感冒",
         "ico": "🤧",
         "c": "o",
         "py": "zhìliáo gǎnmào",
         "hv": "trị liệu cảm mạo"
        }
       ],
       "traceWord": "药物",
       "py": "Zhè zhǒng yàowù bèi yīshēng yòng lái zhìliáo gǎnmào",
       "traceKey": "yaowu"
      },
      {
       "scene": "💰🏢🧾",
       "full": "他的医疗费用被公司付了一半",
       "vi": "Một nửa chi phí y tế của anh ấy đã được công ty trả",
       "parts": [
        {
         "t": "他的医疗费用",
         "ico": "🧾",
         "c": "s",
         "py": "tā de yīliáo fèiyong",
         "hv": "tha đích y liệu phí dụng"
        },
        {
         "t": "被公司",
         "ico": "🏢",
         "c": "v",
         "py": "bèi gōngsī",
         "hv": "bị công ti"
        },
        {
         "t": "付了一半",
         "ico": "💰",
         "c": "o",
         "py": "fù le yībàn",
         "hv": "phó liễu nhất bán"
        }
       ],
       "traceWord": "医疗",
       "py": "Tā de yīliáo fèiyong bèi gōngsī fù le yībàn",
       "traceKey": "yiliao"
      },
      {
       "scene": "👴🌊🛏️",
       "full": "老王被医生安排到海边疗养",
       "vi": "Ông Vương được bác sĩ sắp xếp đi nghỉ dưỡng bên bờ biển",
       "parts": [
        {
         "t": "老王",
         "ico": "👴",
         "c": "s",
         "py": "Lǎowáng",
         "hv": "lão vương"
        },
        {
         "t": "被医生安排",
         "ico": "👨‍⚕️",
         "c": "v",
         "py": "bèi yīshēng ānpái",
         "hv": "bị y sinh an bài"
        },
        {
         "t": "到海边疗养",
         "ico": "🌊",
         "c": "o",
         "py": "dào hǎi biān liáoyǎng",
         "hv": "đáo hải biên liệu dưỡng"
        }
       ],
       "traceWord": "疗养",
       "py": "Lǎowáng bèi yīshēng ānpái dào hǎi biān liáoyǎng",
       "traceKey": "liaoyang"
      },
      {
       "scene": "🚗😵🤢",
       "full": "我被车里的味道弄得很恶心",
       "vi": "Tôi bị mùi trong xe làm cho rất buồn nôn",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "被车里的味道",
         "ico": "🚗",
         "c": "v",
         "py": "bèi chē lǐ de wèidào",
         "hv": "bị xa lịa đích vị đạo"
        },
        {
         "t": "弄得很恶心",
         "ico": "🤢",
         "c": "o",
         "py": "nòng dé hěn ěxin",
         "hv": "lộng đắc _ _ tâm"
        }
       ],
       "traceWord": "恶心",
       "py": "Wǒ bèi chē lǐ de wèidào nòng dé hěn ěxin",
       "traceKey": "exin"
      }
     ],
     "qaList": [
      {
       "q": "你为什么想学医学？",
       "qvi": "Tại sao bạn muốn học y học?",
       "scene": "🧑📚",
       "ans": "因为我想当医生",
       "opts": [
        {
         "txt": "因为今天天气很好",
         "ico": "☀️",
         "py": "Yīnwèi jīntiān tiānqì hěn hǎo"
        },
        {
         "txt": "因为我想当医生",
         "ico": "👨‍⚕️",
         "py": "Yīnwèi wǒ xiǎng dāng yīshēng"
        },
        {
         "txt": "因为我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Yīnwèi wǒ xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Nǐ wèi shénme xiǎng xué yīxué?"
      },
      {
       "q": "这种病会不会遗传？",
       "qvi": "Bệnh này có di truyền không?",
       "scene": "🧬👶",
       "ans": "有可能会遗传给孩子",
       "opts": [
        {
         "txt": "我们明天去机场",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù jīchǎng"
        },
        {
         "txt": "这个周末我在家休息",
         "ico": "🏠",
         "py": "Zhè gè zhōumò wǒ zàijiā xiūxi"
        },
        {
         "txt": "有可能会遗传给孩子",
         "ico": "🧬",
         "py": "Yǒu kěnéng huì yíchuán gěi háizi"
        }
       ],
       "qpy": "Zhè zhǒng bìng huì bú huì yíchuán?"
      },
      {
       "q": "他最近为什么睡不着？",
       "qvi": "Dạo này sao anh ấy không ngủ được?",
       "scene": "😟🌙",
       "ans": "因为他的心理压力很大",
       "opts": [
        {
         "txt": "因为这个药很便宜",
         "ico": "💊",
         "py": "Yīnwèi zhè gè yào hěn piányi"
        },
        {
         "txt": "因为他的心理压力很大",
         "ico": "😟",
         "py": "Yīnwèi tā de xīnlǐ yālì hěn dà"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Tā zuìjìn wèi shénme shuì bù zhe?"
      },
      {
       "q": "刚才的针在哪儿？",
       "qvi": "Cây kim lúc nãy ở đâu?",
       "scene": "💉❓",
       "ans": "针被护士放在桌子上了",
       "opts": [
        {
         "txt": "我不喜欢红色",
         "ico": "🔴",
         "py": "Wǒ bù xǐhuan hóngsè"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "针被护士放在桌子上了",
         "ico": "💉",
         "py": "Zhēn bèi hùshi fàng zài zhuōzi shàng le"
        }
       ],
       "qpy": "Gāngcái de zhēn zài nǎr?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể lại buổi khám bệnh cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn vừa đi khám bệnh. Tự nói 3 câu mô tả triệu chứng và việc đã xảy ra, ví dụ <i>\"发烧的孩子被妈妈送到内科去了\"</i>.",
       "<b>Bước 2:</b> Gọi điện (hoặc đóng vai) hỏi lễ tân bệnh viện về giờ khám, lịch hẹn: <i>\"打针的时间被护士改到了下午\"</i>. Hỏi thêm về chi phí điều trị.",
       "<b>Bước 3:</b> Nhắn tin xin nghỉ cho sếp, giải thích bạn đã bị bệnh và được bác sĩ sắp xếp điều trị, dùng ít nhất 2 câu có 被."
      ]
     }
    },
    {
     "id": "4.2C",
     "name": "Bài 4.2C: Tập luyện, ngủ nghỉ, sống lành mạnh",
     "grammar": {
      "formulas": [
       "🏃 想减肥的人 + ⚡ 得少吃 + 🥗 多锻炼",
       "⚡ 要想有精力 + 🔁 就得经常 + 🏋️ 健身",
       "🧑 你 + 😴 想快点儿睡着就得 + 📱 先放下手机"
      ],
      "tip": "得 đọc là děi nghĩa là \"phải, cần\", đứng trước động từ: 你得去医院 (nǐ děi qù yīyuàn). Phủ định là 不用 hoặc 不必, không dùng 不得 để nói \"không cần\". Đừng nhầm với 得 (de) nối bổ ngữ như 睡得很好.",
      "vn_tip": "Người Việt hay dịch \"phải\" thành 要 hoặc 必须 cho mọi trường hợp. Khi nói thân mật về việc cần làm, người Trung dùng 得: 我得走了. Phủ định \"không phải làm\" là 不用 chứ không nói 不得. Cẩn thận phân biệt 得 (děi) và 得 (de) trong 睡得很好."
     },
     "chunks": [
      {
       "scene": "🏋️🥗⚖️",
       "full": "想减肥的人得少吃多锻炼",
       "vi": "Người muốn giảm cân thì phải ăn ít và tập luyện nhiều",
       "parts": [
        {
         "t": "想减肥的人",
         "ico": "⚖️",
         "c": "s",
         "py": "xiǎng jiǎnféi de rén",
         "hv": "tưởng giảm phì đích nhân"
        },
        {
         "t": "得少吃",
         "ico": "🥗",
         "c": "v",
         "py": "dé shǎo chī",
         "hv": "đắc thiểu khật"
        },
        {
         "t": "多锻炼",
         "ico": "🏃",
         "c": "o",
         "py": "duō duànliàn",
         "hv": "đa _ _"
        }
       ],
       "traceWord": "减肥",
       "py": "Xiǎng jiǎnféi de rén dé shǎo chī duō duànliàn",
       "traceKey": "jianfei"
      },
      {
       "scene": "⚡💪🏋️",
       "full": "要想有精力就得经常健身",
       "vi": "Muốn có nhiều năng lượng thì phải thường xuyên tập thể hình",
       "parts": [
        {
         "t": "要想有精力",
         "ico": "⚡",
         "c": "s",
         "py": "yào xiǎng yǒu jīnglì",
         "hv": "yếu tưởng hữu tinh lực"
        },
        {
         "t": "就得经常",
         "ico": "🔁",
         "c": "v",
         "py": "jiù dé jīngcháng",
         "hv": "_ đắc kinh thường"
        },
        {
         "t": "健身",
         "ico": "🏋️",
         "c": "o",
         "py": "jiànshēn",
         "hv": "kiện thân"
        }
       ],
       "traceWord": "精力",
       "py": "Yào xiǎng yǒu jīnglì jiù dé jīngcháng jiànshēn",
       "traceKey": "jingli"
      },
      {
       "scene": "🤸👥📅",
       "full": "我们每个星期得做两次体操",
       "vi": "Mỗi tuần chúng tôi phải tập thể dục dụng cụ hai lần",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "每个星期得做",
         "ico": "📅",
         "c": "v",
         "py": "měi gè xīngqī dé zuò",
         "hv": "mỗi cá tinh kì đắc _"
        },
        {
         "t": "两次体操",
         "ico": "🤸",
         "c": "o",
         "py": "liǎng cì tǐcāo",
         "hv": "lưỡng thứ thể _"
        }
       ],
       "traceWord": "体操",
       "py": "Wǒmen měi gè xīngqī dé zuò liǎng cì tǐcāo",
       "traceKey": "ticao"
      },
      {
       "scene": "😮‍💨🛋️😌",
       "full": "你累了就得躺下来放松一下",
       "vi": "Mệt thì bạn phải nằm xuống thư giãn một chút",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "累了就得躺下来",
         "ico": "🛋️",
         "c": "v",
         "py": "lèi le jiù dé tǎng xiàlái",
         "hv": "luỵ liễu _ đắc thẳng hạ lai"
        },
        {
         "t": "放松一下",
         "ico": "😌",
         "c": "o",
         "py": "fàngsōng yī xià",
         "hv": "phóng tùng nhất hạ"
        }
       ],
       "traceWord": "放松",
       "py": "Nǐ lèi le jiù dé tǎng xiàlái fàngsōng yī xià",
       "traceKey": "fangsong"
      },
      {
       "scene": "🌅🥛😪",
       "full": "你早上刚醒得先喝一杯水",
       "vi": "Sáng vừa thức dậy bạn phải uống một cốc nước trước",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "早上刚醒得先喝",
         "ico": "🌅",
         "c": "v",
         "py": "zǎoshang gāng xǐng dé xiān hē",
         "hv": "tảo thượng _ tỉnh đắc tiên hát"
        },
        {
         "t": "一杯水",
         "ico": "🥛",
         "c": "o",
         "py": "yī bēi shuǐ",
         "hv": "nhất bôi thuỷ"
        }
       ],
       "traceWord": "醒",
       "py": "Nǐ zǎoshang gāng xǐng dé xiān hē yī bēi shuǐ",
       "traceKey": "xing"
      },
      {
       "scene": "☕🧠💼",
       "full": "开会以前我得喝杯咖啡让头脑清醒",
       "vi": "Trước khi họp tôi phải uống cà phê để đầu óc tỉnh táo",
       "parts": [
        {
         "t": "开会以前我",
         "ico": "💼",
         "c": "s",
         "py": "kāihuì yǐqián wǒ",
         "hv": "khai hội _ tiền ngã"
        },
        {
         "t": "得喝杯咖啡",
         "ico": "☕",
         "c": "v",
         "py": "dé hē bēi kāfēi",
         "hv": "đắc hát bôi _ _"
        },
        {
         "t": "让头脑清醒",
         "ico": "🧠",
         "c": "o",
         "py": "ràng tóunǎo qīngxǐng",
         "hv": "nhường đầu não thanh tỉnh"
        }
       ],
       "traceWord": "清醒",
       "py": "Kāihuì yǐqián wǒ dé hē bēi kāfēi ràng tóunǎo qīngxǐng",
       "traceKey": "qingxing"
      },
      {
       "scene": "📱🌙😴",
       "full": "你想快点儿睡着就得先放下手机",
       "vi": "Muốn nhanh ngủ thiếp đi thì bạn phải đặt điện thoại xuống trước",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "想快点儿睡着就得",
         "ico": "😴",
         "c": "v",
         "py": "xiǎng kuài diǎnr shuìzháo jiù dé",
         "hv": "tưởng khoái điểm _ _ trứ _ đắc"
        },
        {
         "t": "先放下手机",
         "ico": "📱",
         "c": "o",
         "py": "xiān fàngxia shǒujī",
         "hv": "tiên phóng hạ thủ cơ"
        }
       ],
       "traceWord": "睡着",
       "py": "Nǐ xiǎng kuài diǎnr shuìzháo jiù dé xiān fàngxia shǒujī",
       "traceKey": "shuizhao"
      },
      {
       "scene": "🍚💪🌞",
       "full": "今天我得多吃一点儿饭才有力气",
       "vi": "Hôm nay tôi phải ăn nhiều cơm hơn một chút mới có sức",
       "parts": [
        {
         "t": "今天我",
         "ico": "🧑",
         "c": "s",
         "py": "jīntiān wǒ",
         "hv": "kim thiên ngã"
        },
        {
         "t": "得多吃",
         "ico": "🍚",
         "c": "v",
         "py": "dé duō chī",
         "hv": "đắc đa khật"
        },
        {
         "t": "一点儿饭才有力气",
         "ico": "💪",
         "c": "o",
         "py": "yīdiǎnr fàn cái yǒu lìqi",
         "hv": "nhất điểm _ _ tài hữu lực khí"
        }
       ],
       "traceWord": "力气",
       "py": "Jīntiān wǒ dé duō chī yīdiǎnr fàn cái yǒu lìqi",
       "traceKey": "liqi"
      }
     ],
     "qaList": [
      {
       "q": "你为什么不吸烟？",
       "qvi": "Tại sao bạn không hút thuốc?",
       "scene": "🚬🚫",
       "ans": "因为抽烟对身体不好",
       "opts": [
        {
         "txt": "因为明天是星期六",
         "ico": "📅",
         "py": "Yīnwèi míngtiān shì xīngqī liù"
        },
        {
         "txt": "因为抽烟对身体不好",
         "ico": "🚭",
         "py": "Yīnwèi chōuyān duì shēntǐ bù hǎo"
        },
        {
         "txt": "因为我喜欢喝咖啡",
         "ico": "☕",
         "py": "Yīnwèi wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ wèi shénme bù xīyān?"
      },
      {
       "q": "你今天怎么这么有劲儿？",
       "qvi": "Hôm nay sao bạn khỏe khoắn thế?",
       "scene": "💪😄",
       "ans": "因为我昨天睡得很好",
       "opts": [
        {
         "txt": "因为这个电影很长",
         "ico": "🎬",
         "py": "Yīnwèi zhè gè diànyǐng hěn cháng"
        },
        {
         "txt": "因为我昨天睡得很好",
         "ico": "😴",
         "py": "Yīnwèi wǒ zuótiān shuì dé hěn hǎo"
        },
        {
         "txt": "因为他是我的同事",
         "ico": "🧑‍💼",
         "py": "Yīnwèi tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Nǐ jīntiān zěnme zhème yǒujìnr?"
      },
      {
       "q": "这个门打不开怎么办？",
       "qvi": "Cánh cửa này không mở được thì làm sao?",
       "scene": "🚪❓",
       "ans": "你得使劲推一下",
       "opts": [
        {
         "txt": "他今天没有来上班",
         "ico": "🏢",
         "py": "Tā jīntiān méiyǒu lái shàngbān"
        },
        {
         "txt": "你得使劲推一下",
         "ico": "💪",
         "py": "Nǐ dé shǐjìn tuī yī xià"
        },
        {
         "txt": "你可以去看电影",
         "ico": "🎬",
         "py": "Nǐ kěyǐ qù kàn diànyǐng"
        }
       ],
       "qpy": "Zhè gè mén dǎ bù kāi zěnme bàn?"
      },
      {
       "q": "紧张的时候怎么办？",
       "qvi": "Khi căng thẳng thì làm gì?",
       "scene": "😰🌬️",
       "ans": "你得深深吸一口气",
       "opts": [
        {
         "txt": "我想去海边玩儿",
         "ico": "🌊",
         "py": "Wǒ xiǎng qù hǎi biān wánr"
        },
        {
         "txt": "这个手机很贵",
         "ico": "📱",
         "py": "Zhè gè shǒujī hěn guì"
        },
        {
         "txt": "你得深深吸一口气",
         "ico": "🌬️",
         "py": "Nǐ dé shēn shēn xī yī kǒu qì"
        }
       ],
       "qpy": "Jǐnzhāng de shíhou zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Lập kế hoạch sống khỏe cho tuần tới",
      "steps": [
       "<b>Bước 1:</b> Viết ra giấy 5 việc bạn phải làm để khỏe hơn, mỗi việc một câu với 得: <i>\"我们每个星期得做两次体操\"</i>.",
       "<b>Bước 2:</b> Nhắn tin rủ một đồng nghiệp cùng tập thể dục sau giờ làm, nói rõ lý do bằng câu như <i>\"要想有精力就得经常健身\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 1 phút về thói quen ngủ nghỉ của bạn, và khuyên người khác: <i>\"你想快点儿睡着就得先放下手机\"</i>."
      ]
     }
    }
   ]
  },
  "4.3": {
   "lessons": [
    {
     "id": "4.3A",
     "name": "Bài 4.3A: Đồ ăn, thức uống và món ăn vặt",
     "grammar": {
      "formulas": [
       "🧑 我 + ⚡ 吃了 + 🍲 一碗豆腐",
       "🧑 他 + ⚡ 喝了 + 🥛 一杯酸奶",
       "❓ 你 + 要 + 🥤 几瓶汽水？"
      ],
      "tip": "Lượng từ mượn: lấy chính vật đựng làm lượng từ, ví dụ 一碗饭 (yì wǎn fàn), 一屋子人 (yì wūzi rén), 一脸汗. Động lượng từ mượn dụng cụ: 砍一刀 (kǎn yì dāo, chém một nhát), 打一针 (dǎ yì zhēn, tiêm một mũi). Cấu trúc: số từ + lượng từ + danh từ.",
      "vn_tip": "Người Việt hay bỏ lượng từ và nói 我吃豆腐两 hoặc 我喝两水. Đúng là số từ + lượng từ đứng TRƯỚC danh từ: 我喝两杯水, 我吃了一碗豆腐. Với động tác, lượng từ đứng SAU động từ: 打一针."
     },
     "chunks": [
      {
       "scene": "🧑🥤♨️",
       "full": "我想喝一杯热的开水",
       "vi": "Tôi muốn uống một cốc nước đun sôi nóng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "想喝",
         "ico": "🥤",
         "c": "v",
         "py": "xiǎng hē",
         "hv": "tưởng hát"
        },
        {
         "t": "一杯热的开水",
         "ico": "♨️",
         "c": "o",
         "py": "yī bēi rè de kāishuǐ",
         "hv": "nhất bôi nhiệt đích khai thuỷ"
        }
       ],
       "traceWord": "开水",
       "py": "Wǒ xiǎng hē yī bēi rè de kāishuǐ",
       "traceKey": "kaishui"
      },
      {
       "scene": "🏢🍽️🍲",
       "full": "我们在食堂吃了一碗豆腐",
       "vi": "Chúng tôi đã ăn một bát đậu phụ ở nhà ăn",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "在食堂吃了",
         "ico": "🍽️",
         "c": "v",
         "py": "zài shítáng chī le",
         "hv": "tại _ đường khật liễu"
        },
        {
         "t": "一碗豆腐",
         "ico": "🍲",
         "c": "o",
         "py": "yī wǎn dòufu",
         "hv": "nhất _ đậu hủ"
        }
       ],
       "traceWord": "食堂",
       "py": "Wǒmen zài shítáng chī le yī wǎn dòufu",
       "traceKey": "shitang"
      },
      {
       "scene": "👨‍🍳🦐🍱",
       "full": "老板给我们点了一份海鲜套餐",
       "vi": "Ông chủ gọi cho chúng tôi một phần combo hải sản",
       "parts": [
        {
         "t": "老板",
         "ico": "👨‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão ván"
        },
        {
         "t": "给我们点了",
         "ico": "📝",
         "c": "v",
         "py": "gěi wǒmen diǎn le",
         "hv": "cấp ngã món điểm liễu"
        },
        {
         "t": "一份海鲜套餐",
         "ico": "🍱",
         "c": "o",
         "py": "yī fèn hǎixiān tàocān",
         "hv": "nhất phần hải tiên _ _"
        }
       ],
       "traceWord": "套餐",
       "py": "Lǎobǎn gěi wǒmen diǎn le yī fèn hǎixiān tàocān",
       "traceKey": "taocan"
      },
      {
       "scene": "🧑🛒💧",
       "full": "小明买了两瓶矿泉水和一袋零食",
       "vi": "Tiểu Minh mua hai chai nước khoáng và một túi đồ ăn vặt",
       "parts": [
        {
         "t": "小明",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "买了",
         "ico": "🛒",
         "c": "v",
         "py": "mǎi le",
         "hv": "mãi liễu"
        },
        {
         "t": "两瓶矿泉水和一袋零食",
         "ico": "💧",
         "c": "o",
         "py": "liǎng píng kuàngquánshuǐ hé yī dài língshí",
         "hv": "lưỡng bình khoáng tuyền thuỷ hoà nhất đãy lênh _"
        }
       ],
       "traceWord": "矿泉水",
       "py": "Xiǎomíng mǎi le liǎng píng kuàngquánshuǐ hé yī dài língshí",
       "traceKey": "kuangquanshui"
      },
      {
       "scene": "☀️🍉😋",
       "full": "我夏天最喜欢吃一块凉的西瓜",
       "vi": "Mùa hè tôi thích nhất ăn một miếng dưa hấu mát lạnh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "夏天最喜欢吃",
         "ico": "☀️",
         "c": "v",
         "py": "xiàtiān zuì xǐhuan chī",
         "hv": "_ thiên tối hỉ hoan khật"
        },
        {
         "t": "一块凉的西瓜",
         "ico": "🍉",
         "c": "o",
         "py": "yī kuài liáng de xīguā",
         "hv": "nhất khối lương đích tây qua"
        }
       ],
       "traceWord": "西瓜",
       "py": "Wǒ xiàtiān zuì xǐhuan chī yī kuài liáng de xīguā",
       "traceKey": "xigua"
      },
      {
       "scene": "🥒🌽👨‍🌾",
       "full": "这两根黄瓜和三根玉米都是农民种的",
       "vi": "Hai quả dưa chuột và ba bắp ngô này đều do nông dân trồng",
       "parts": [
        {
         "t": "这两根黄瓜和三根玉米",
         "ico": "🥒",
         "c": "s",
         "py": "zhè liǎng gēn huángguā hé sān gēn yùmǐ",
         "hv": "_ lưỡng căn hoàng qua hoà tam căn ngọc _"
        },
        {
         "t": "都是",
         "ico": "✅",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "农民种的",
         "ico": "👨‍🌾",
         "c": "o",
         "py": "nóngmín zhǒng de",
         "hv": "nông dân chõng đích"
        }
       ],
       "traceWord": "黄瓜",
       "py": "Zhè liǎng gēn huángguā hé sān gēn yùmǐ dōu shì nóngmín zhǒng de",
       "traceKey": "huanggua"
      },
      {
       "scene": "🧑🥛🍫",
       "full": "他喝了一杯酸奶又吃了一块巧克力",
       "vi": "Anh ấy uống một cốc sữa chua rồi lại ăn một thanh sô-cô-la",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喝了一杯酸奶",
         "ico": "🥛",
         "c": "v",
         "py": "hē le yī bēi suānnǎi",
         "hv": "hát liễu nhất bôi _ nái"
        },
        {
         "t": "又吃了一块巧克力",
         "ico": "🍫",
         "c": "o",
         "py": "yòu chī le yī kuài qiǎokèlì",
         "hv": "lại khật liễu nhất khối xảo khắc lực"
        }
       ],
       "traceWord": "酸奶",
       "py": "Tā hē le yī bēi suānnǎi yòu chī le yī kuài qiǎokèlì",
       "traceKey": "suannai"
      },
      {
       "scene": "🏪😋🍜",
       "full": "这家的小吃很好吃所以我们吃了两碗",
       "vi": "Đồ ăn vặt của quán này rất ngon nên chúng tôi ăn hai bát",
       "parts": [
        {
         "t": "这家的小吃",
         "ico": "🏪",
         "c": "s",
         "py": "zhè jiā de xiǎochī",
         "hv": "_ gia đích tiểu khật"
        },
        {
         "t": "很好吃",
         "ico": "😋",
         "c": "v",
         "py": "hěn hǎochī",
         "hv": "_ háo khật"
        },
        {
         "t": "所以我们吃了两碗",
         "ico": "🍜",
         "c": "o",
         "py": "suǒyǐ wǒmen chī le liǎng wǎn",
         "hv": "sỡ _ ngã món khật liễu lưỡng _"
        }
       ],
       "traceWord": "小吃",
       "py": "Zhè jiā de xiǎochī hěn hǎochī suǒyǐ wǒmen chī le liǎng wǎn",
       "traceKey": "xiaochi"
      }
     ],
     "qaList": [
      {
       "q": "你想喝什么？",
       "qvi": "Bạn muốn uống gì?",
       "scene": "🧑🥤",
       "ans": "我想喝一瓶汽水",
       "opts": [
        {
         "txt": "我想吃一碗米饭",
         "ico": "🍚",
         "py": "Wǒ xiǎng chī yī wǎn mǐfàn"
        },
        {
         "txt": "我想喝一瓶汽水",
         "ico": "🥤",
         "py": "Wǒ xiǎng hē yī píng qìshuǐ"
        },
        {
         "txt": "我想买一本书",
         "ico": "📖",
         "py": "Wǒ xiǎng mǎi yī běn shū"
        }
       ],
       "qpy": "Nǐ xiǎng hē shénme?"
      },
      {
       "q": "这些茶叶是从哪儿来的？",
       "qvi": "Số lá trà này từ đâu tới?",
       "scene": "🍵🌿",
       "ans": "这些茶叶是从南方来的",
       "opts": [
        {
         "txt": "这些茶叶是从南方来的",
         "ico": "🌿",
         "py": "Zhèxiē cháyè shì cóng nánfāng lái de"
        },
        {
         "txt": "我买了一袋糖",
         "ico": "🍬",
         "py": "Wǒ mǎi le yī dài táng"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Zhèxiē cháyè shì cóng nǎr lái de?"
      },
      {
       "q": "农民种的粮食在哪儿卖？",
       "qvi": "Lương thực nông dân trồng được bán ở đâu?",
       "scene": "👨‍🌾🌾",
       "ans": "在市场卖",
       "opts": [
        {
         "txt": "在医院看病",
         "ico": "🏥",
         "py": "Zài yīyuàn kànbìng"
        },
        {
         "txt": "在学校上课",
         "ico": "🏫",
         "py": "Zài xuéxiào shàngkè"
        },
        {
         "txt": "在市场卖",
         "ico": "🛒",
         "py": "Zài shìchǎng mài"
        }
       ],
       "qpy": "Nóngmín zhǒng de liángshi zài nǎr mài?"
      },
      {
       "q": "你要喝纯净水还是开水？",
       "qvi": "Bạn muốn uống nước tinh khiết hay nước đun sôi?",
       "scene": "🧑💧",
       "ans": "我要一瓶纯净水",
       "opts": [
        {
         "txt": "我要一瓶纯净水",
         "ico": "💧",
         "py": "Wǒ yào yī píng chúnjìngshuǐ"
        },
        {
         "txt": "我昨天去了北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐ yào hē chúnjìngshuǐ háishi kāishuǐ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gọi món ở nhà ăn công ty",
      "steps": [
       "<b>Bước 1:</b> Đứng trước quầy ở nhà ăn (hoặc tưởng tượng), nói thành tiếng món bạn muốn: <i>\"我想吃一碗豆腐\"</i>, rồi thêm đồ uống bằng lượng từ đúng.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp rủ đi ăn, hỏi họ muốn gọi gì, ví dụ <i>\"你要喝纯净水还是开水？\"</i>, và đề nghị một suất combo.",
       "<b>Bước 3:</b> Kể lại cho đồng nghiệp bạn đã mua gì, dùng ít nhất 4 lượng từ khác nhau (碗、杯、瓶、袋), ví dụ <i>\"我买了两瓶矿泉水和一袋零食\"</i>."
      ]
     }
    },
    {
     "id": "4.3B",
     "name": "Bài 4.3B: Vị giác và nấu nướng",
     "grammar": {
      "formulas": [
       "🍵 这杯茶 + ⚡ 苦得 + 💊 像药一样",
       "🐟 这条鱼 + ⚡ 很新鲜 + 🧿 像活的一样",
       "🍲 这碗汤 + ⚡ 咸得 + 🧂 像放了很多盐"
      ],
      "tip": "Dùng 像……一样 (xiàng… yíyàng) hoặc 好像 (hǎoxiàng) để so sánh \"giống như, dường như\". Trợ từ 似的 (shìde) có nghĩa tương đương và đặt cuối cụm: 像火烧似的; ở bài này ta luyện bằng 像……一样 và 好像. Mẫu: tính từ + 得 + 像 + vật so sánh + 一样.",
      "vn_tip": "Người Việt hay nói 像药苦 hoặc 苦像药 theo trật tự tiếng Việt (đắng như thuốc). Tiếng Trung nói 像药一样苦 (像……一样 + tính từ) hoặc 苦得像药一样 (tính từ + 得 + 像……一样). Đừng quên 一样 sau vật so sánh khi dùng 像."
     },
     "chunks": [
      {
       "scene": "🍵💊😖",
       "full": "这杯茶苦得像药一样",
       "vi": "Cốc trà này đắng như thuốc vậy",
       "parts": [
        {
         "t": "这杯茶",
         "ico": "🍵",
         "c": "s",
         "py": "zhè bēi chá",
         "hv": "_ bôi trà"
        },
        {
         "t": "苦得",
         "ico": "😖",
         "c": "v",
         "py": "kǔ dé",
         "hv": "khổ đắc"
        },
        {
         "t": "像药一样",
         "ico": "💊",
         "c": "o",
         "py": "xiàng yào yīyàng",
         "hv": "tượng dược nhất dạng"
        }
       ],
       "traceWord": "苦",
       "py": "Zhè bēi chá kǔ dé xiàng yào yīyàng",
       "traceKey": "ku"
      },
      {
       "scene": "🍲🧂😵",
       "full": "这碗汤咸得像放了很多盐",
       "vi": "Bát canh này mặn như bỏ rất nhiều muối",
       "parts": [
        {
         "t": "这碗汤",
         "ico": "🍲",
         "c": "s",
         "py": "zhè wǎn tāng",
         "hv": "_ _ thang"
        },
        {
         "t": "咸得",
         "ico": "😵",
         "c": "v",
         "py": "xián dé",
         "hv": "_ đắc"
        },
        {
         "t": "像放了很多盐",
         "ico": "🧂",
         "c": "o",
         "py": "xiàng fàng le hěn duō yán",
         "hv": "tượng phóng liễu _ đa _"
        }
       ],
       "traceWord": "盐",
       "py": "Zhè wǎn tāng xián dé xiàng fàng le hěn duō yán",
       "traceKey": "yan"
      },
      {
       "scene": "🌶️🔥👄",
       "full": "这个菜辣得我的嘴像火烧一样",
       "vi": "Món này cay đến mức miệng tôi như bị lửa đốt",
       "parts": [
        {
         "t": "这个菜",
         "ico": "🌶️",
         "c": "s",
         "py": "zhè gè cài",
         "hv": "_ cá _"
        },
        {
         "t": "辣得",
         "ico": "🥵",
         "c": "v",
         "py": "là dé",
         "hv": "lượt đắc"
        },
        {
         "t": "我的嘴像火烧一样",
         "ico": "🔥",
         "c": "o",
         "py": "wǒ de zuǐ xiàng huǒ shāo yīyàng",
         "hv": "ngã đích _ tượng hoả thiêu nhất dạng"
        }
       ],
       "traceWord": "烧",
       "py": "Zhè gè cài là dé wǒ de zuǐ xiàng huǒ shāo yīyàng",
       "traceKey": "shao"
      },
      {
       "scene": "🍲😐🧂",
       "full": "这碗汤的味儿很淡好像没放盐",
       "vi": "Bát canh này nhạt, hình như không bỏ muối",
       "parts": [
        {
         "t": "这碗汤的味儿",
         "ico": "🍲",
         "c": "s",
         "py": "zhè wǎn tāng de wèir",
         "hv": "_ _ thang đích vị _"
        },
        {
         "t": "很淡",
         "ico": "😐",
         "c": "v",
         "py": "hěn dàn",
         "hv": "_ đạm"
        },
        {
         "t": "好像没放盐",
         "ico": "🧂",
         "c": "o",
         "py": "hǎoxiàng méi fàng yán",
         "hv": "háo tượng một phóng _"
        }
       ],
       "traceWord": "味儿",
       "py": "Zhè wǎn tāng de wèir hěn dàn hǎoxiàng méi fàng yán",
       "traceKey": "weir"
      },
      {
       "scene": "🐟✨👀",
       "full": "这条鱼很新鲜看上去像活的一样",
       "vi": "Con cá này rất tươi, nhìn như còn sống vậy",
       "parts": [
        {
         "t": "这条鱼",
         "ico": "🐟",
         "c": "s",
         "py": "zhè tiáo yú",
         "hv": "_ điều ngư"
        },
        {
         "t": "很新鲜",
         "ico": "✨",
         "c": "v",
         "py": "hěn xīnxiān",
         "hv": "_ tân tiên"
        },
        {
         "t": "看上去像活的一样",
         "ico": "👀",
         "c": "o",
         "py": "kàn shàngqù xiàng huó de yīyàng",
         "hv": "khán thượng khứ tượng hoạt đích nhất dạng"
        }
       ],
       "traceWord": "新鲜",
       "py": "Zhè tiáo yú hěn xīnxiān kàn shàngqù xiàng huó de yīyàng",
       "traceKey": "xinxian"
      },
      {
       "scene": "👩🔪🥬",
       "full": "她切菜切得很快像专家一样",
       "vi": "Cô ấy thái rau rất nhanh, như một chuyên gia",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "_"
        },
        {
         "t": "切菜切得很快",
         "ico": "🔪",
         "c": "v",
         "py": "qiē cài qiē dé hěn kuài",
         "hv": "thiết _ thiết đắc _ khoái"
        },
        {
         "t": "像专家一样",
         "ico": "🎓",
         "c": "o",
         "py": "xiàng zhuānjiā yīyàng",
         "hv": "tượng chuyên gia nhất dạng"
        }
       ],
       "traceWord": "切",
       "py": "Tā qiē cài qiē dé hěn kuài xiàng zhuānjiā yīyàng",
       "traceKey": "qie"
      },
      {
       "scene": "🍽️🍎⛰️",
       "full": "盘子里的水果多得像山一样",
       "vi": "Hoa quả trong đĩa nhiều như một ngọn núi",
       "parts": [
        {
         "t": "盘子里的水果",
         "ico": "🍎",
         "c": "s",
         "py": "pánzi lǐ de shuǐguǒ",
         "hv": "bàn tí lịa đích thuỷ quả"
        },
        {
         "t": "多得",
         "ico": "📈",
         "c": "v",
         "py": "duō dé",
         "hv": "đa đắc"
        },
        {
         "t": "像山一样",
         "ico": "⛰️",
         "c": "o",
         "py": "xiàng shān yīyàng",
         "hv": "tượng sơn nhất dạng"
        }
       ],
       "traceWord": "盘子",
       "py": "Pánzi lǐ de shuǐguǒ duō dé xiàng shān yīyàng",
       "traceKey": "panzi"
      },
      {
       "scene": "🧑🥤🧒",
       "full": "他用吸管喝奶茶像小孩儿一样",
       "vi": "Anh ấy dùng ống hút uống trà sữa như một đứa trẻ",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "用吸管喝奶茶",
         "ico": "🥤",
         "c": "v",
         "py": "yòng xīguǎn hē nǎichá",
         "hv": "dụng cộp quản hát nái trà"
        },
        {
         "t": "像小孩儿一样",
         "ico": "🧒",
         "c": "o",
         "py": "xiàng xiǎoháir yīyàng",
         "hv": "tượng tiểu hài _ nhất dạng"
        }
       ],
       "traceWord": "吸管",
       "py": "Tā yòng xīguǎn hē nǎichá xiàng xiǎoháir yīyàng",
       "traceKey": "xiguan"
      }
     ],
     "qaList": [
      {
       "q": "这个果实怎么这么酸？",
       "qvi": "Quả này sao chua thế?",
       "scene": "🍋😖",
       "ans": "因为它还没熟",
       "opts": [
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为它还没熟",
         "ico": "🍋",
         "py": "Yīnwèi tā hái méi shú"
        },
        {
         "txt": "因为我有三个哥哥",
         "ico": "👨‍👦‍👦",
         "py": "Yīnwèi wǒ yǒu sān gè gēge"
        }
       ],
       "qpy": "Zhè gè guǒshí zěnme zhème suān?"
      },
      {
       "q": "你喜欢浓茶还是淡茶？",
       "qvi": "Bạn thích trà đặc hay trà nhạt?",
       "scene": "🍵🤔",
       "ans": "我喜欢浓茶",
       "opts": [
        {
         "txt": "我在银行工作",
         "ico": "🏦",
         "py": "Wǒ zài yínháng gōngzuò"
        },
        {
         "txt": "他有两个弟弟",
         "ico": "👦",
         "py": "Tā yǒu liǎng gè dìdi"
        },
        {
         "txt": "我喜欢浓茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan nóng chá"
        }
       ],
       "qpy": "Nǐ xǐhuan nóng chá háishi dàn chá?"
      },
      {
       "q": "这个汤的味道怎么样？",
       "qvi": "Vị của món canh này thế nào?",
       "scene": "🍲👅",
       "ans": "很鲜好像是用鱼做的",
       "opts": [
        {
         "txt": "很鲜好像是用鱼做的",
         "ico": "🐟",
         "py": "Hěn xiān hǎoxiàng shì yòng yú zuò de"
        },
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "今天星期三",
         "ico": "📅",
         "py": "Jīntiān xīngqī sān"
        }
       ],
       "qpy": "Zhè gè tāng de wèidào zěnmeyàng?"
      },
      {
       "q": "你喜欢吃什么瓜？",
       "qvi": "Bạn thích ăn loại dưa nào?",
       "scene": "🧑🍉",
       "ans": "我喜欢吃西瓜和黄瓜",
       "opts": [
        {
         "txt": "我在北京住",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng zhù"
        },
        {
         "txt": "我喜欢吃西瓜和黄瓜",
         "ico": "🍉",
         "py": "Wǒ xǐhuan chī xīguā hé huángguā"
        },
        {
         "txt": "他是医生",
         "ico": "👨‍⚕️",
         "py": "Tā shì yīshēng"
        }
       ],
       "qpy": "Nǐ xǐhuan chī shénme guā?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhận xét món ăn với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn 3 món bạn ăn gần đây và nói thành tiếng vị của từng món: chua, mặn, cay, đắng, nhạt hoặc đậm, ví dụ <i>\"这杯茶苦得像药一样\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp khen một món ngon hoặc nói món nào hơi mặn/nhạt, dùng 像……一样 hoặc 好像, ví dụ <i>\"这碗汤的味儿很淡好像没放盐\"</i>.",
       "<b>Bước 3:</b> Tập hỏi người bán ở chợ cá hoặc nhà hàng xem hải sản có tươi không, rồi mô tả cách nấu (thái, nấu) bằng 3 câu hoàn chỉnh."
      ]
     }
    },
    {
     "id": "4.3C",
     "name": "Bài 4.3C: Lượng từ thường dùng khi mua bán",
     "grammar": {
      "formulas": [
       "🧑 小红 + ⚡ 买了 + 🥚 一打鸡蛋",
       "🏢 公司 + ⚡ 收到了 + 💻 一批新电脑",
       "🌳 门口 + ⚡ 有 + 🌲 一棵大树"
      ],
      "tip": "Danh lượng từ: 打 (dá, một tá = 12 cái), 袋 (dài, túi/bao), 根 (gēn, cái/sợi dài mảnh), 卷 (juǎn/juàn, cuộn), 棵 (kē, cây), 批 (pī, lô/đợt). Công thức: số từ + lượng từ + danh từ. Lượng từ phải hợp hình dạng vật: cây dùng 棵, vật dài mảnh dùng 根, hàng hóa nhập theo đợt dùng 批.",
      "vn_tip": "Người Việt hay dùng một lượng từ 个 (cái) cho mọi thứ: 一个树, 一个筷子. Trong tiếng Trung phải chọn đúng: 一棵树, 两根筷子, 三卷纸, 一批电脑. Cũng không nói 一批人 để chỉ một nhóm nhỏ, hãy dùng 群 hoặc 组 cho nhóm người (一群人, 一组人)."
     },
     "chunks": [
      {
       "scene": "🧑🛒🥚",
       "full": "小红在超市买了一打鸡蛋和一袋米",
       "vi": "Tiểu Hồng mua một tá trứng và một túi gạo ở siêu thị",
       "parts": [
        {
         "t": "小红",
         "ico": "👩",
         "c": "s",
         "py": "Xiǎohóng",
         "hv": "tiểu hồng"
        },
        {
         "t": "在超市买了",
         "ico": "🛒",
         "c": "v",
         "py": "zài chāoshì mǎi le",
         "hv": "tại siêu thị mãi liễu"
        },
        {
         "t": "一打鸡蛋和一袋米",
         "ico": "🥚",
         "c": "o",
         "py": "yī dǎ jīdàn hé yī dài mǐ",
         "hv": "nhất đả _ _ hoà nhất đãy _"
        }
       ],
       "traceWord": "打",
       "py": "Xiǎohóng zài chāoshì mǎi le yī dǎ jīdàn hé yī dài mǐ",
       "traceKey": "da"
      },
      {
       "scene": "🧑🏢🧻",
       "full": "我给办公室买了三卷纸",
       "vi": "Tôi mua ba cuộn giấy cho văn phòng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "给办公室买了",
         "ico": "🏢",
         "c": "v",
         "py": "gěi bàngōngshì mǎi le",
         "hv": "cấp _ công thất mãi liễu"
        },
        {
         "t": "三卷纸",
         "ico": "🧻",
         "c": "o",
         "py": "sān juǎn zhǐ",
         "hv": "tam quyển chỉ"
        }
       ],
       "traceWord": "卷",
       "py": "Wǒ gěi bàngōngshì mǎi le sān juǎn zhǐ",
       "traceKey": "juan"
      },
      {
       "scene": "🏠🚪🌳",
       "full": "我家门口有一棵很大的树",
       "vi": "Trước cửa nhà tôi có một cái cây rất to",
       "parts": [
        {
         "t": "我家门口",
         "ico": "🚪",
         "c": "s",
         "py": "wǒ jiā ménkǒu",
         "hv": "ngã gia môn khẩu"
        },
        {
         "t": "有",
         "ico": "✅",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "一棵很大的树",
         "ico": "🌳",
         "c": "o",
         "py": "yī kē hěn dà de shù",
         "hv": "nhất quả _ đại đích thụ"
        }
       ],
       "traceWord": "棵",
       "py": "Wǒ jiā ménkǒu yǒu yī kē hěn dà de shù",
       "traceKey": "ke"
      },
      {
       "scene": "🧑🎤🎵",
       "full": "他唱了一首很好听的歌",
       "vi": "Anh ấy hát một bài hát rất hay",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "唱了",
         "ico": "🎤",
         "c": "v",
         "py": "chàng le",
         "hv": "xướng liễu"
        },
        {
         "t": "一首很好听的歌",
         "ico": "🎵",
         "c": "o",
         "py": "yī shǒu hěn hǎotīng de gē",
         "hv": "nhất thủ _ háo thính đích ca"
        }
       ],
       "traceWord": "首",
       "py": "Tā chàng le yī shǒu hěn hǎotīng de gē",
       "traceKey": "shou"
      },
      {
       "scene": "🏢📦💻",
       "full": "公司今天收到了一批新电脑",
       "vi": "Hôm nay công ty nhận được một lô máy tính mới",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "今天收到了",
         "ico": "📦",
         "c": "v",
         "py": "jīntiān shōudào le",
         "hv": "kim thiên thu đáo liễu"
        },
        {
         "t": "一批新电脑",
         "ico": "💻",
         "c": "o",
         "py": "yī pī xīn diànnǎo",
         "hv": "nhất phê tân _ não"
        }
       ],
       "traceWord": "批",
       "py": "Gōngsī jīntiān shōudào le yī pī xīn diànnǎo",
       "traceKey": "pi"
      },
      {
       "scene": "🛤️🏘️👨‍👩‍👧",
       "full": "这条路上住着十几户人家",
       "vi": "Trên con đường này có hơn mười hộ gia đình sinh sống",
       "parts": [
        {
         "t": "这条路上",
         "ico": "🛤️",
         "c": "s",
         "py": "zhè tiáo lùshang",
         "hv": "_ điều lộ thượng"
        },
        {
         "t": "住着",
         "ico": "🏠",
         "c": "v",
         "py": "zhù zhe",
         "hv": "trú trứ"
        },
        {
         "t": "十几户人家",
         "ico": "👨‍👩‍👧",
         "c": "o",
         "py": "shí jǐ hù rénjia",
         "hv": "thập kỉ hộ nhân gia"
        }
       ],
       "traceWord": "户",
       "py": "Zhè tiáo lùshang zhù zhe shí jǐ hù rénjia",
       "traceKey": "hu"
      },
      {
       "scene": "🚆🌅➡️",
       "full": "一列火车从北边开过来了",
       "vi": "Một đoàn tàu hỏa chạy từ phía bắc tới",
       "parts": [
        {
         "t": "一列火车",
         "ico": "🚆",
         "c": "s",
         "py": "yī liè huǒchē",
         "hv": "nhất liệt hoả xa"
        },
        {
         "t": "从北边",
         "ico": "🧭",
         "c": "v",
         "py": "cóng běibian",
         "hv": "tòng _ biên"
        },
        {
         "t": "开过来了",
         "ico": "➡️",
         "c": "o",
         "py": "kāi guòlái le",
         "hv": "khai quá lai liễu"
        }
       ],
       "traceWord": "列",
       "py": "Yī liè huǒchē cóng běibian kāi guòlái le",
       "traceKey": "lie"
      },
      {
       "scene": "🧑🥢🥟",
       "full": "他用两根筷子吃了一盘饺子",
       "vi": "Anh ấy dùng hai chiếc đũa ăn một đĩa sủi cảo",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "用两根筷子吃了",
         "ico": "🥢",
         "c": "v",
         "py": "yòng liǎng gēn kuàizi chī le",
         "hv": "dụng lưỡng căn _ tí khật liễu"
        },
        {
         "t": "一盘饺子",
         "ico": "🥟",
         "c": "o",
         "py": "yī pán jiǎozi",
         "hv": "nhất bàn _ tí"
        }
       ],
       "traceWord": "根",
       "py": "Tā yòng liǎng gēn kuàizi chī le yī pán jiǎozi",
       "traceKey": "gen"
      }
     ],
     "qaList": [
      {
       "q": "这项工作什么时候能完成？",
       "qvi": "Công việc này bao giờ hoàn thành được?",
       "scene": "💼📅",
       "ans": "下周就能完成",
       "opts": [
        {
         "txt": "我家有三个人",
         "ico": "👨‍👩‍👧",
         "py": "Wǒ jiā yǒu sān gèrén"
        },
        {
         "txt": "他在北京上班",
         "ico": "🏙️",
         "py": "Tā zài Běijīng shàngbān"
        },
        {
         "txt": "下周就能完成",
         "ico": "✅",
         "py": "Xià zhōu jiù néng wánchéng"
        }
       ],
       "qpy": "Zhè xiàng gōngzuò shénme shíhou néng wánchéng?"
      },
      {
       "q": "公园里的那伙人在做什么？",
       "qvi": "Nhóm người ở công viên đang làm gì?",
       "scene": "🌳👥",
       "ans": "他们在打篮球",
       "opts": [
        {
         "txt": "他们在打篮球",
         "ico": "🏀",
         "py": "Tāmen zài dǎ lánqiú"
        },
        {
         "txt": "我想买些水果",
         "ico": "🍎",
         "py": "Wǒ xiǎng mǎi xiē shuǐguǒ"
        },
        {
         "txt": "她是我的姐姐",
         "ico": "👩",
         "py": "Tā shì wǒ de jiějie"
        }
       ],
       "qpy": "Gōngyuán lǐ de nà huǒ rén zài zuò shénme?"
      },
      {
       "q": "今天下午天气怎么样？",
       "qvi": "Chiều nay thời tiết thế nào?",
       "scene": "🌦️🕒",
       "ans": "下了一阵雨",
       "opts": [
        {
         "txt": "他买了三本书",
         "ico": "📚",
         "py": "Tā mǎi le sān běn shū"
        },
        {
         "txt": "我在家看电视",
         "ico": "📺",
         "py": "Wǒ zàijiā kàn diànshì"
        },
        {
         "txt": "下了一阵雨",
         "ico": "🌧️",
         "py": "Xià le yī zhèn yǔ"
        }
       ],
       "qpy": "Jīntiān xiàwǔ tiānqì zěnmeyàng?"
      },
      {
       "q": "你们的比赛进行到第几轮了？",
       "qvi": "Cuộc thi của các bạn đã đến vòng mấy rồi?",
       "scene": "🏆🔢",
       "ans": "已经到第二轮了",
       "opts": [
        {
         "txt": "今年的价格是去年的两倍",
         "ico": "💰",
         "py": "Jīnnián de jiàgé shì qùnián de liǎng bèi"
        },
        {
         "txt": "已经到第二轮了",
         "ico": "🏆",
         "py": "Yǐjīng dào dì èr lún le"
        },
        {
         "txt": "我喜欢吃西瓜",
         "ico": "🍉",
         "py": "Wǒ xǐhuan chī xīguā"
        }
       ],
       "qpy": "Nǐmen de bǐsài jìnxíng dào dì jǐ lún le?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua đồ dùng cho văn phòng",
      "steps": [
       "<b>Bước 1:</b> Lập danh sách 5 món cần mua cho văn phòng và viết số lượng bằng lượng từ đúng, ví dụ <i>\"我给办公室买了三卷纸\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho nhà cung cấp hoặc bạn bè bán hàng, hỏi giá và nói bạn cần mua thêm, ví dụ <i>\"公司今天收到了一批新电脑\"</i> để báo hàng đã về.",
       "<b>Bước 3:</b> Tự nói thành tiếng trong 2 phút, mô tả những thứ bạn thấy quanh nhà hoặc trên đường, mỗi thứ dùng một lượng từ chính xác (棵、根、户、列…)."
      ]
     }
    }
   ]
  },
  "4.4": {
   "lessons": [
    {
     "id": "4.4A",
     "name": "Bài 4.4A: Không gian và đồ đạc trong nhà",
     "grammar": {
      "formulas": [
       "📍 窗台 + ⬆️ 在……上 + 📦 放着杯子",
       "👶 孩子 + 💡 在灯光下 + ✏️ 写作业",
       "🧑 他 + 🪞 在镜子中 + 👀 看到自己"
      ],
      "tip": "Cấu trúc 在……上/下/中 (zài…shàng/xià/zhōng) đặt giữa 在 và 上/下/中 một danh từ: 在 + N + 上 chỉ vị trí bề mặt (在窗台上), 在 + N + 下 chỉ điều kiện hay vị trí bên dưới (在灯光下, 在帮助下), 在 + N + 中 chỉ phạm vi hay quá trình (在镜子中, 在工作中). Cả cụm đứng trước động từ, làm trạng ngữ.",
      "vn_tip": "Người Việt hay bỏ 上 và nói 在窗台放着杯子 hoặc 在桌子有书. Với danh từ chỉ vật, thường phải thêm 上 sau danh từ: 桌子上, 窗台上. Còn 在……下 ở nghĩa trừu tượng khác hẳn tiếng Việt: dịch là \"dưới sự giúp đỡ của\", \"trong điều kiện\", nên nói 在大家的帮助下, đừng nói 在帮助大家."
     },
     "chunks": [
      {
       "scene": "🪟🥛☕",
       "full": "窗台上放着一个杯子",
       "vi": "Trên bệ cửa sổ có đặt một cái cốc",
       "parts": [
        {
         "t": "窗台上",
         "ico": "🪟",
         "c": "s",
         "py": "chuāngtái shàng",
         "hv": "song thai thượng"
        },
        {
         "t": "放着",
         "ico": "📌",
         "c": "v",
         "py": "fàng zhe",
         "hv": "phóng trứ"
        },
        {
         "t": "一个杯子",
         "ico": "🥛",
         "c": "o",
         "py": "yī gè bēizi",
         "hv": "nhất cá bôi tí"
        }
       ],
       "traceWord": "窗台",
       "py": "Chuāngtái shàng fàng zhe yī gè bēizi",
       "traceKey": "chuangtai"
      },
      {
       "scene": "🌇🍵👫",
       "full": "周末我们常在阳台上喝茶",
       "vi": "Cuối tuần chúng tôi thường uống trà ngoài ban công",
       "parts": [
        {
         "t": "周末我们",
         "ico": "👫",
         "c": "s",
         "py": "zhōumò wǒmen",
         "hv": "chu mạt ngã món"
        },
        {
         "t": "常在阳台上",
         "ico": "🌇",
         "c": "v",
         "py": "cháng zài yángtái shàng",
         "hv": "thường tại dương thai thượng"
        },
        {
         "t": "喝茶",
         "ico": "🍵",
         "c": "o",
         "py": "hē chá",
         "hv": "hát trà"
        }
       ],
       "traceWord": "阳台",
       "py": "Zhōumò wǒmen cháng zài yángtái shàng hē chá",
       "traceKey": "yangtai"
      },
      {
       "scene": "🧊📌🛍️",
       "full": "冰箱上放着一个塑料袋",
       "vi": "Trên tủ lạnh có đặt một cái túi nhựa",
       "parts": [
        {
         "t": "冰箱上",
         "ico": "🧊",
         "c": "s",
         "py": "bīngxiāng shàng",
         "hv": "băng rương thượng"
        },
        {
         "t": "放着",
         "ico": "📌",
         "c": "v",
         "py": "fàng zhe",
         "hv": "phóng trứ"
        },
        {
         "t": "一个塑料袋",
         "ico": "🛍️",
         "c": "o",
         "py": "yī gè sùliàodài",
         "hv": "nhất cá _ liệu đãy"
        }
       ],
       "traceWord": "塑料袋",
       "py": "Bīngxiāng shàng fàng zhe yī gè sùliàodài",
       "traceKey": "suliaodai"
      },
      {
       "scene": "🪜🚫🏃",
       "full": "请不要在楼梯上跑步",
       "vi": "Xin đừng chạy bộ trên cầu thang",
       "parts": [
        {
         "t": "请不要",
         "ico": "🚫",
         "c": "v",
         "py": "qǐng bùyào",
         "hv": "thỉnh bất yếu"
        },
        {
         "t": "在楼梯上",
         "ico": "🪜",
         "c": "s",
         "py": "zài lóutī shàng",
         "hv": "tại lầu _ thượng"
        },
        {
         "t": "跑步",
         "ico": "🏃",
         "c": "o",
         "py": "pǎobù",
         "hv": "_ bộ"
        }
       ],
       "traceWord": "楼梯",
       "py": "Qǐng bùyào zài lóutī shàng pǎobù",
       "traceKey": "louti"
      },
      {
       "scene": "👴🪜😌",
       "full": "老人在台阶上坐着休息",
       "vi": "Ông cụ ngồi nghỉ trên bậc thềm",
       "parts": [
        {
         "t": "老人",
         "ico": "👴",
         "c": "s",
         "py": "lǎorén",
         "hv": "lão nhân"
        },
        {
         "t": "在台阶上",
         "ico": "🪜",
         "c": "v",
         "py": "zài táijiē shàng",
         "hv": "tại thai giai thượng"
        },
        {
         "t": "坐着休息",
         "ico": "😌",
         "c": "o",
         "py": "zuò zhe xiūxi",
         "hv": "_ trứ hưu tức"
        }
       ],
       "traceWord": "台阶",
       "py": "Lǎorén zài táijiē shàng zuò zhe xiūxi",
       "traceKey": "taijie"
      },
      {
       "scene": "👶💡📝",
       "full": "孩子在灯光下写作业",
       "vi": "Đứa trẻ làm bài tập dưới ánh đèn",
       "parts": [
        {
         "t": "孩子",
         "ico": "👶",
         "c": "s",
         "py": "háizi",
         "hv": "hài tí"
        },
        {
         "t": "在灯光下",
         "ico": "💡",
         "c": "v",
         "py": "zài dēngguāng xià",
         "hv": "tại đăng quang hạ"
        },
        {
         "t": "写作业",
         "ico": "📝",
         "c": "o",
         "py": "xiě zuòyè",
         "hv": "tả tác nghiệp"
        }
       ],
       "traceWord": "灯光",
       "py": "Háizi zài dēngguāng xià xiě zuòyè",
       "traceKey": "dengguang"
      },
      {
       "scene": "🧑🪞👀",
       "full": "他在镜子中看到了自己",
       "vi": "Anh ấy nhìn thấy chính mình trong gương",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在镜子中",
         "ico": "🪞",
         "c": "v",
         "py": "zài jìngzi zhōng",
         "hv": "tại kẻng tí trung"
        },
        {
         "t": "看到了自己",
         "ico": "👀",
         "c": "o",
         "py": "kàndào le zìjǐ",
         "hv": "khán đáo liễu tự kỉ"
        }
       ],
       "traceWord": "镜子",
       "py": "Tā zài jìngzi zhōng kàndào le zìjǐ",
       "traceKey": "jingzi"
      },
      {
       "scene": "🏠♨️😊",
       "full": "房间在暖气的作用下很快暖和起来",
       "vi": "Nhờ có hệ thống sưởi, căn phòng nhanh chóng ấm lên",
       "parts": [
        {
         "t": "房间",
         "ico": "🏠",
         "c": "s",
         "py": "fángjiān",
         "hv": "phòng gian"
        },
        {
         "t": "在暖气的作用下很快",
         "ico": "♨️",
         "c": "v",
         "py": "zài nuǎnqì de zuòyòng xià hěn kuài",
         "hv": "tại _ khí đích tác dụng hạ _ khoái"
        },
        {
         "t": "暖和起来",
         "ico": "😊",
         "c": "o",
         "py": "nuǎnhuo qǐlái",
         "hv": "_ hoà khởi lai"
        }
       ],
       "traceWord": "暖气",
       "py": "Fángjiān zài nuǎnqì de zuòyòng xià hěn kuài nuǎnhuo qǐlái",
       "traceKey": "nuanqi"
      }
     ],
     "qaList": [
      {
       "q": "这个箱子是什么做的？",
       "qvi": "Cái vali/thùng này làm bằng gì?",
       "scene": "🧳❓",
       "ans": "这个箱子是塑料做的",
       "opts": [
        {
         "txt": "这个箱子是水做的",
         "ico": "💧",
         "py": "Zhè gè xiāngzi shì shuǐ zuò de"
        },
        {
         "txt": "这个箱子是塑料做的",
         "ico": "🧳",
         "py": "Zhè gè xiāngzi shì sùliào zuò de"
        },
        {
         "txt": "这个箱子是面包做的",
         "ico": "🍞",
         "py": "Zhè gè xiāngzi shì miànbāo zuò de"
        }
       ],
       "qpy": "Zhè gè xiāngzi shì shénme zuò de?"
      },
      {
       "q": "你的手机放在哪儿？",
       "qvi": "Điện thoại của bạn để ở đâu?",
       "scene": "📱👖",
       "ans": "手机放在口袋里",
       "opts": [
        {
         "txt": "手机放在冰箱里",
         "ico": "🧊",
         "py": "Shǒujī fàng zài bīngxiāng lǐ"
        },
        {
         "txt": "手机放在电梯里",
         "ico": "🛗",
         "py": "Shǒujī fàng zài diàntī lǐ"
        },
        {
         "txt": "手机放在口袋里",
         "ico": "👖",
         "py": "Shǒujī fàng zài kǒudai lǐ"
        }
       ],
       "qpy": "Nǐ de shǒujī fàng zài nǎr?"
      },
      {
       "q": "房间里太黑了，怎么办？",
       "qvi": "Trong phòng tối quá, làm sao đây?",
       "scene": "🏠🌑",
       "ans": "请打开电灯",
       "opts": [
        {
         "txt": "请关上窗户",
         "ico": "🪟",
         "py": "Qǐng guānshang chuānghu"
        },
        {
         "txt": "请打开电灯",
         "ico": "💡",
         "py": "Qǐng dǎkāi diàndēng"
        },
        {
         "txt": "请拿一把伞",
         "ico": "☂️",
         "py": "Qǐng ná yī bǎ sǎn"
        }
       ],
       "qpy": "Fángjiān lǐ tài hēi le zěnme bàn?"
      },
      {
       "q": "你怎么去十楼？",
       "qvi": "Bạn lên tầng 10 bằng cách nào?",
       "scene": "🏢🔟",
       "ans": "我坐电梯去",
       "opts": [
        {
         "txt": "我从窗子爬上去",
         "ico": "🪟",
         "py": "Wǒ cóng chuāngzi pá shàngqù"
        },
        {
         "txt": "我坐船去",
         "ico": "🚢",
         "py": "Wǒ zuò chuán qù"
        },
        {
         "txt": "我坐电梯去",
         "ico": "🛗",
         "py": "Wǒ zuò diàntī qù"
        }
       ],
       "qpy": "Nǐ zěnme qù shí lóu?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu căn hộ cho đồng nghiệp mới thuê nhà",
      "steps": [
       "<b>Bước 1:</b> Đi một vòng quanh nhà (hoặc nhìn ảnh phòng) và nói thành tiếng 5 câu về vị trí đồ vật, ví dụ <i>\"窗台上放着一个杯子\"</i>, <i>\"冰箱上放着一个塑料袋\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp dặn các quy tắc trong tòa nhà, ví dụ <i>\"请不要在楼梯上跑步\"</i>, và nói nơi bạn hay ngồi thư giãn như <i>\"周末我们常在阳台上喝茶\"</i>.",
       "<b>Bước 3:</b> Tự đóng vai hỏi đáp: một người hỏi đồ vật để ở đâu, người kia trả lời bằng cấu trúc 在……上/下/中 ít nhất 3 lần, ví dụ <i>\"孩子在灯光下写作业\"</i>."
      ]
     }
    },
    {
     "id": "4.4B",
     "name": "Bài 4.4B: Dọn dẹp, bài trí và sửa chữa nhà",
     "grammar": {
      "formulas": [
       "🧑 他 + ✋ 把垃圾 + 🧹 扫 + ✨ 干净了",
       "🧑 我们 + ✋ 把旧房子 + 🔨 装修 + ☝️ 一下",
       "🧑 她 + ✋ 把书 + 📚 摆 + 📍 在书架上"
      ],
      "tip": "Câu chữ 把 (bǎ, âm Hán Việt: bả) dùng để nói người làm gì với một vật xác định và vật đó bị xử lý, thay đổi: Chủ ngữ + 把 + Tân ngữ + Động từ + thành phần khác. Sau động từ BẮT BUỘC có thành phần khác như 干净, 了, 在……, 成……, 一下, 得……; không được để động từ trơ trọi.",
      "vn_tip": "Người Việt hay nói 我打扫房间 là đủ, hoặc nói sai 我把房间打扫 (thiếu kết quả). Đúng: 我把房间打扫干净了. Ngoài ra tân ngữ sau 把 phải là vật xác định (cái nhà, cái bàn đã biết), không nói 把一个房间打扫干净 theo kiểu chưa xác định."
     },
     "chunks": [
      {
       "scene": "🏠🧹✨",
       "full": "周末我要把房间打扫干净",
       "vi": "Cuối tuần tôi muốn dọn sạch căn phòng",
       "parts": [
        {
         "t": "周末我",
         "ico": "🧑",
         "c": "s",
         "py": "zhōumò wǒ",
         "hv": "chu mạt ngã"
        },
        {
         "t": "要把房间打扫",
         "ico": "🧹",
         "c": "v",
         "py": "yào bǎ fángjiān dǎsǎo",
         "hv": "yếu bã phòng gian đả tảo"
        },
        {
         "t": "干净",
         "ico": "✨",
         "c": "o",
         "py": "gānjìng",
         "hv": "can _"
        }
       ],
       "traceWord": "打扫",
       "py": "Zhōumò wǒ yào bǎ fángjiān dǎsǎo gānjìng",
       "traceKey": "dasao"
      },
      {
       "scene": "🧑🧹🗑️",
       "full": "他把地上的垃圾扫干净了",
       "vi": "Anh ấy đã quét sạch rác trên sàn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把地上的垃圾扫",
         "ico": "🧹",
         "c": "v",
         "py": "bǎ dìshang de lājī sǎo",
         "hv": "bã địa thượng đích lắp _ tảo"
        },
        {
         "t": "干净了",
         "ico": "✨",
         "c": "o",
         "py": "gānjìng le",
         "hv": "can _ liễu"
        }
       ],
       "traceWord": "垃圾",
       "py": "Tā bǎ dìshang de lājī sǎo gānjìng le",
       "traceKey": "laji"
      },
      {
       "scene": "👩🪟🧽",
       "full": "妈妈把桌子和窗户都擦干净了",
       "vi": "Mẹ đã lau sạch cả bàn và cửa sổ",
       "parts": [
        {
         "t": "妈妈",
         "ico": "👩",
         "c": "s",
         "py": "māma",
         "hv": "má má"
        },
        {
         "t": "把桌子和窗户都擦",
         "ico": "🧽",
         "c": "v",
         "py": "bǎ zhuōzi hé chuānghu dōu cā",
         "hv": "bã _ tí hoà song hộ đô xát"
        },
        {
         "t": "干净了",
         "ico": "✨",
         "c": "o",
         "py": "gānjìng le",
         "hv": "can _ liễu"
        }
       ],
       "traceWord": "擦",
       "py": "Māma bǎ zhuōzi hé chuānghu dōu cā gānjìng le",
       "traceKey": "ca"
      },
      {
       "scene": "👩📚🗄️",
       "full": "她把新买的书摆在书架上",
       "vi": "Cô ấy xếp những cuốn sách mới mua lên giá sách",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "_"
        },
        {
         "t": "把新买的书摆",
         "ico": "📚",
         "c": "v",
         "py": "bǎ xīn mǎi de shū bǎi",
         "hv": "bã tân mãi đích thư bẫy"
        },
        {
         "t": "在书架上",
         "ico": "🗄️",
         "c": "o",
         "py": "zài shūjià shàng",
         "hv": "tại thư giá thượng"
        }
       ],
       "traceWord": "摆",
       "py": "Tā bǎ xīn mǎi de shū bǎi zài shūjià shàng",
       "traceKey": "bai"
      },
      {
       "scene": "👥🏢🎀",
       "full": "同事们把办公室布置得很漂亮",
       "vi": "Các đồng nghiệp đã bài trí văn phòng rất đẹp",
       "parts": [
        {
         "t": "同事们",
         "ico": "👥",
         "c": "s",
         "py": "tóngshì men",
         "hv": "đồng sự món"
        },
        {
         "t": "把办公室布置",
         "ico": "🏢",
         "c": "v",
         "py": "bǎ bàngōngshì bùzhì",
         "hv": "bã _ công thất bố trí"
        },
        {
         "t": "得很漂亮",
         "ico": "🎀",
         "c": "o",
         "py": "dé hěn piàoliang",
         "hv": "đắc _ phều _"
        }
       ],
       "traceWord": "布置",
       "py": "Tóngshì men bǎ bàngōngshì bùzhì dé hěn piàoliang",
       "traceKey": "buzhi"
      },
      {
       "scene": "🧑🖌️🧱",
       "full": "小王用刷子把墙刷成了白色",
       "vi": "Tiểu Vương dùng chổi quét sơn quét tường thành màu trắng",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "用刷子把墙刷",
         "ico": "🖌️",
         "c": "v",
         "py": "yòng shuāzi bǎ qiáng shuā",
         "hv": "dụng loát tí bã tường loát"
        },
        {
         "t": "成了白色",
         "ico": "⬜",
         "c": "o",
         "py": "chéng le báisè",
         "hv": "thành liễu bạch sắc"
        }
       ],
       "traceWord": "刷子",
       "py": "Xiǎowáng yòng shuāzi bǎ qiáng shuā chéng le báisè",
       "traceKey": "shuazi"
      },
      {
       "scene": "👷🧊🏠",
       "full": "工人们把新冰箱安置在房间里",
       "vi": "Các công nhân đặt chiếc tủ lạnh mới vào trong phòng",
       "parts": [
        {
         "t": "工人们",
         "ico": "👷",
         "c": "s",
         "py": "gōngrén men",
         "hv": "công nhân món"
        },
        {
         "t": "把新冰箱安置",
         "ico": "🧊",
         "c": "v",
         "py": "bǎ xīn bīngxiāng ānzhì",
         "hv": "bã tân băng rương an trí"
        },
        {
         "t": "在房间里",
         "ico": "🏠",
         "c": "o",
         "py": "zài fángjiān lǐ",
         "hv": "tại phòng gian lịa"
        }
       ],
       "traceWord": "安置",
       "py": "Gōngrén men bǎ xīn bīngxiāng ānzhì zài fángjiān lǐ",
       "traceKey": "anzhi"
      },
      {
       "scene": "👫🏚️🔨",
       "full": "我们打算把旧房子重新装修一下",
       "vi": "Chúng tôi định sửa sang lại ngôi nhà cũ một chút",
       "parts": [
        {
         "t": "我们",
         "ico": "👫",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "打算把旧房子重新装修",
         "ico": "🔨",
         "c": "v",
         "py": "dǎsuàn bǎ jiù fángzi chóngxīn zhuāngxiū",
         "hv": "đả toán bã _ phòng tí trọng tân trang tu"
        },
        {
         "t": "一下",
         "ico": "☝️",
         "c": "o",
         "py": "yī xià",
         "hv": "nhất hạ"
        }
       ],
       "traceWord": "装修",
       "py": "Wǒmen dǎsuàn bǎ jiù fángzi chóngxīn zhuāngxiū yī xià",
       "traceKey": "zhuangxiu"
      }
     ],
     "qaList": [
      {
       "q": "周末你在家做什么？",
       "qvi": "Cuối tuần bạn làm gì ở nhà?",
       "scene": "🏠🧺",
       "ans": "我在家做家务",
       "opts": [
        {
         "txt": "我在家打篮球",
         "ico": "🏀",
         "py": "Wǒ zàijiā dǎ lánqiú"
        },
        {
         "txt": "我在家做家务",
         "ico": "🧺",
         "py": "Wǒ zàijiā zuò jiāwù"
        },
        {
         "txt": "我在家游泳",
         "ico": "🏊",
         "py": "Wǒ zàijiā yóuyǒng"
        }
       ],
       "qpy": "Zhōumò nǐ zàijiā zuò shénme?"
      },
      {
       "q": "电灯坏了怎么办？",
       "qvi": "Đèn hỏng rồi thì làm sao?",
       "scene": "💡🔧",
       "ans": "请维修人员来修理",
       "opts": [
        {
         "txt": "请老师来上课",
         "ico": "👩‍🏫",
         "py": "Qǐng lǎoshī lái shàngkè"
        },
        {
         "txt": "请司机来开车",
         "ico": "🚗",
         "py": "Qǐng sījī lái kāichē"
        },
        {
         "txt": "请维修人员来修理",
         "ico": "🔧",
         "py": "Qǐng wéixiū rényuán lái xiūlǐ"
        }
       ],
       "qpy": "Diàndēng huài le zěnme bàn?"
      },
      {
       "q": "晚上很冷怎么办？",
       "qvi": "Buổi tối lạnh quá thì làm sao?",
       "scene": "🌙🥶",
       "ans": "把被子盖好",
       "opts": [
        {
         "txt": "把窗户拉开",
         "ico": "🪟",
         "py": "Bǎ chuānghu lākāi"
        },
        {
         "txt": "把被子盖好",
         "ico": "🛏️",
         "py": "Bǎ bèizi gài hǎo"
        },
        {
         "txt": "把水喝完",
         "ico": "🥤",
         "py": "Bǎ shuǐ hē wán"
        }
       ],
       "qpy": "Wǎnshang hěn lěng zěnme bàn?"
      },
      {
       "q": "椅子放在门口很不方便，怎么办？",
       "qvi": "Ghế để ở cửa bất tiện quá, làm sao đây?",
       "scene": "🪑🚪",
       "ans": "把它移到窗户旁边",
       "opts": [
        {
         "txt": "把它移到窗户旁边",
         "ico": "🪟",
         "py": "Bǎ tā yí dào chuānghu pángbiān"
        },
        {
         "txt": "把它吃了",
         "ico": "🍽️",
         "py": "Bǎ tā chī le"
        },
        {
         "txt": "把它喝完",
         "ico": "🥤",
         "py": "Bǎ tā hē wán"
        }
       ],
       "qpy": "Yǐzi fàng zài ménkǒu hěn bù fāngbiàn zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị nhà đón khách cuối tuần",
      "steps": [
       "<b>Bước 1:</b> Lập danh sách việc nhà cần làm trước khi khách đến và nói thành tiếng, ví dụ <i>\"周末我要把房间打扫干净\"</i>, <i>\"他把地上的垃圾扫干净了\"</i>.",
       "<b>Bước 2:</b> Nhắn tin phân công cho người nhà hoặc đồng nghiệp ở chung, dùng ít nhất 3 câu chữ 把, ví dụ <i>\"妈妈把桌子和窗户都擦干净了\"</i>, <i>\"她把新买的书摆在书架上\"</i>.",
       "<b>Bước 3:</b> Gọi điện (đóng vai) cho thợ sửa chữa, mô tả việc cần làm bằng cấu trúc 把, ví dụ <i>\"我们打算把旧房子重新装修一下\"</i>, rồi hẹn giờ thợ đến."
      ]
     }
    },
    {
     "id": "4.4C",
     "name": "Bài 4.4C: Quần áo và phụ kiện",
     "grammar": {
      "formulas": [
       "🧑 他 + 🧢 戴上 + 🧣 帽子和围巾",
       "🧑 他 + 👕 脱下 + 🧦 鞋和袜子",
       "🧑 我 + 💭 想起 + 👓 眼镜忘在办公室"
      ],
      "tip": "Bổ ngữ xu hướng nghĩa mở rộng: động từ + 上/出/起/下 không còn chỉ hướng di chuyển mà mang nghĩa mới. 上 (shàng, thượng) là tiếp xúc, gắn lên: 穿上, 戴上. 下 (xià, hạ) là tách khỏi, cởi ra: 脱下. 出 (chū, xuất) là lộ ra, nhận ra: 拿出. 起 (qǐ, khởi) là nhớ ra, bắt đầu: 想起.",
      "vn_tip": "Người Việt hay nói 我穿外套, 他戴帽子 mà bỏ bổ ngữ khi muốn nhấn vào hành động vừa hoàn thành. Hãy nói 穿上外套 (mặc vào), 戴上帽子 (đội vào), 脱下外套 (cởi ra). Đừng dùng 脱上 hay 穿下: cởi là 脱下, mặc là 穿上."
     },
     "chunks": [
      {
       "scene": "🥶🧥👍",
       "full": "外面很冷快穿上这件外套",
       "vi": "Bên ngoài rất lạnh, mau mặc chiếc áo khoác này vào",
       "parts": [
        {
         "t": "外面很冷",
         "ico": "🥶",
         "c": "s",
         "py": "wàimiàn hěn lěng",
         "hv": "ngoại _ _ lạnh"
        },
        {
         "t": "快穿上",
         "ico": "⚡",
         "c": "v",
         "py": "kuài chuānshang",
         "hv": "khoái xuyên thượng"
        },
        {
         "t": "这件外套",
         "ico": "🧥",
         "c": "o",
         "py": "zhè jiàn wàitào",
         "hv": "_ kiện ngoại _"
        }
       ],
       "traceWord": "外套",
       "py": "Wàimiàn hěn lěng kuài chuānshang zhè jiàn wàitào",
       "traceKey": "waitao"
      },
      {
       "scene": "🧑🧢🧣",
       "full": "他戴上帽子和围巾就出门了",
       "vi": "Anh ấy đội mũ và quàng khăn rồi ra khỏi nhà",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "戴上帽子和围巾",
         "ico": "🧢",
         "c": "v",
         "py": "dài shàng màozi hé wéijīn",
         "hv": "_ thượng mão tí hoà vè cân"
        },
        {
         "t": "就出门了",
         "ico": "🚪",
         "c": "o",
         "py": "jiù chūmén le",
         "hv": "_ xuất môn liễu"
        }
       ],
       "traceWord": "帽子",
       "py": "Tā dài shàng màozi hé wéijīn jiù chūmén le",
       "traceKey": "maozi"
      },
      {
       "scene": "🧑🧤🧶",
       "full": "他戴上手套穿上了毛衣",
       "vi": "Anh ấy đeo găng tay và mặc áo len vào",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "戴上手套",
         "ico": "🧤",
         "c": "v",
         "py": "dài shàng shǒutào",
         "hv": "_ thượng thủ _"
        },
        {
         "t": "穿上了毛衣",
         "ico": "🧶",
         "c": "o",
         "py": "chuānshang le máoyī",
         "hv": "xuyên thượng liễu mao y"
        }
       ],
       "traceWord": "手套",
       "py": "Tā dài shàng shǒutào chuānshang le máoyī",
       "traceKey": "shoutao"
      },
      {
       "scene": "🏠🧑🧦",
       "full": "回到家他脱下鞋和袜子",
       "vi": "Về đến nhà anh ấy cởi giày và tất ra",
       "parts": [
        {
         "t": "回到家他",
         "ico": "🏠",
         "c": "s",
         "py": "huídào jiā tā",
         "hv": "hồi đáo gia tha"
        },
        {
         "t": "脱下",
         "ico": "👇",
         "c": "v",
         "py": "tuō xià",
         "hv": "thoát hạ"
        },
        {
         "t": "鞋和袜子",
         "ico": "🧦",
         "c": "o",
         "py": "xié hé wàzi",
         "hv": "hài hoà _ tí"
        }
       ],
       "traceWord": "袜子",
       "py": "Huídào jiā tā tuō xià xié hé wàzi",
       "traceKey": "wazi"
      },
      {
       "scene": "🧑💭👓",
       "full": "我忽然想起眼镜忘在办公室了",
       "vi": "Tôi chợt nhớ ra kính để quên ở văn phòng",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "忽然想起",
         "ico": "💭",
         "c": "v",
         "py": "hūrán xiǎngqǐ",
         "hv": "hốt nhiên tưởng khởi"
        },
        {
         "t": "眼镜忘在办公室了",
         "ico": "👓",
         "c": "o",
         "py": "yǎnjìng wàng zài bàngōngshì le",
         "hv": "nhãn kẻng vong tại _ công thất liễu"
        }
       ],
       "traceWord": "眼镜",
       "py": "Wǒ hūrán xiǎngqǐ yǎnjìng wàng zài bàngōngshì le",
       "traceKey": "yanjing"
      },
      {
       "scene": "🌧️🧑☂️",
       "full": "下雨了小王从包里拿出一把伞",
       "vi": "Trời mưa, Tiểu Vương lấy từ trong túi ra một cái ô",
       "parts": [
        {
         "t": "下雨了小王",
         "ico": "🌧️",
         "c": "s",
         "py": "xià yǔ le Xiǎowáng",
         "hv": "hạ _ liễu tiểu vương"
        },
        {
         "t": "从包里拿出",
         "ico": "👜",
         "c": "v",
         "py": "cóng bāo lǐ náchū",
         "hv": "tòng bao lịa nã xuất"
        },
        {
         "t": "一把伞",
         "ico": "☂️",
         "c": "o",
         "py": "yī bǎ sǎn",
         "hv": "nhất bã tàn"
        }
       ],
       "traceWord": "伞",
       "py": "Xià yǔ le Xiǎowáng cóng bāo lǐ náchū yī bǎ sǎn",
       "traceKey": "san"
      },
      {
       "scene": "📏🧥🧑",
       "full": "你把尺子拿出来看一下尺寸",
       "vi": "Bạn lấy thước ra xem thử kích cỡ đi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "把尺子拿出来",
         "ico": "📏",
         "c": "v",
         "py": "bǎ chǐzi ná chūlái",
         "hv": "bã xích tí nã xuất lai"
        },
        {
         "t": "看一下尺寸",
         "ico": "🔍",
         "c": "o",
         "py": "kàn yī xià chǐcùn",
         "hv": "khán nhất hạ xích thốn"
        }
       ],
       "traceWord": "尺子",
       "py": "Nǐ bǎ chǐzi ná chūlái kàn yī xià chǐcùn",
       "traceKey": "chizi"
      },
      {
       "scene": "🧥😣🔢",
       "full": "这个型号太小了我穿不上",
       "vi": "Mã size này nhỏ quá, tôi mặc không vừa",
       "parts": [
        {
         "t": "这个型号",
         "ico": "🔢",
         "c": "s",
         "py": "zhè gè xínghào",
         "hv": "_ cá _ hiệu"
        },
        {
         "t": "太小了",
         "ico": "🤏",
         "c": "v",
         "py": "tài xiǎo le",
         "hv": "thái tiểu liễu"
        },
        {
         "t": "我穿不上",
         "ico": "😣",
         "c": "o",
         "py": "wǒ chuān bú shàng",
         "hv": "ngã xuyên bất thượng"
        }
       ],
       "traceWord": "型号",
       "py": "Zhè gè xínghào tài xiǎo le wǒ chuān bú shàng",
       "traceKey": "xinghao"
      }
     ],
     "qaList": [
      {
       "q": "你用什么擦身体？",
       "qvi": "Bạn dùng gì để lau người?",
       "scene": "🛁🧖",
       "ans": "我用毛巾擦",
       "opts": [
        {
         "txt": "我用筷子擦",
         "ico": "🥢",
         "py": "Wǒ yòng kuàizi cā"
        },
        {
         "txt": "我用鞋子擦",
         "ico": "👟",
         "py": "Wǒ yòng xié zi cā"
        },
        {
         "txt": "我用毛巾擦",
         "ico": "🧻",
         "py": "Wǒ yòng máojīn cā"
        }
       ],
       "qpy": "Nǐ yòng shénme cā shēntǐ?"
      },
      {
       "q": "手很冷，你要戴什么？",
       "qvi": "Tay lạnh lắm, bạn cần đeo gì?",
       "scene": "🥶🙌",
       "ans": "我要戴手套",
       "opts": [
        {
         "txt": "我要戴手套",
         "ico": "🧤",
         "py": "Wǒ yào dài shǒutào"
        },
        {
         "txt": "我要戴眼镜",
         "ico": "👓",
         "py": "Wǒ yào dài yǎnjìng"
        },
        {
         "txt": "我要戴帽子",
         "ico": "🧢",
         "py": "Wǒ yào dài màozi"
        }
       ],
       "qpy": "Shǒu hěn lěng nǐ yào dài shénme?"
      },
      {
       "q": "外面下雨了，你带什么？",
       "qvi": "Bên ngoài trời mưa, bạn mang theo gì?",
       "scene": "🌧️🎒",
       "ans": "我带一把伞",
       "opts": [
        {
         "txt": "我带一个杯子",
         "ico": "🥛",
         "py": "Wǒ dài yī gè bēizi"
        },
        {
         "txt": "我带一把伞",
         "ico": "☂️",
         "py": "Wǒ dài yī bǎ sǎn"
        },
        {
         "txt": "我带一把尺子",
         "ico": "📏",
         "py": "Wǒ dài yī bǎ chǐzi"
        }
       ],
       "qpy": "Wàimiàn xià yǔ le nǐ dài shénme?"
      },
      {
       "q": "屋子里很热，你怎么办？",
       "qvi": "Trong phòng nóng quá, bạn làm gì?",
       "scene": "🏠🥵",
       "ans": "我脱下毛衣",
       "opts": [
        {
         "txt": "我穿上外套",
         "ico": "🧥",
         "py": "Wǒ chuānshang wàitào"
        },
        {
         "txt": "我戴上手套",
         "ico": "🧤",
         "py": "Wǒ dài shàng shǒutào"
        },
        {
         "txt": "我脱下毛衣",
         "ico": "🧶",
         "py": "Wǒ tuō xià máoyī"
        }
       ],
       "qpy": "Wūzi lǐ hěn rè nǐ zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Mua áo khoác và phụ kiện trong cửa hàng",
      "steps": [
       "<b>Bước 1:</b> Đóng vai khách hàng, nói với nhân viên bạn cần gì và hỏi cỡ, ví dụ <i>\"你把尺子拿出来看一下尺寸\"</i> (nhờ đo), rồi báo bạn mặc cỡ nào.",
       "<b>Bước 2:</b> Thử đồ và nhận xét bằng bổ ngữ xu hướng, ví dụ <i>\"这个型号太小了我穿不上\"</i>, <i>\"外面很冷快穿上这件外套\"</i>, rồi xin đổi cỡ khác.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp dặn thời tiết ngày mai cần mang gì, dùng ít nhất 3 câu như <i>\"他戴上帽子和围巾就出门了\"</i>, <i>\"下雨了小王从包里拿出一把伞\"</i>."
      ]
     }
    }
   ]
  },
  "4.5": {
   "lessons": [
    {
     "id": "4.5A",
     "name": "Bài 4.5A: Cửa hàng, khuyến mãi và mua sắm",
     "grammar": {
      "formulas": [
       "🛍️ 特价的衣服 + 🙅 不买 + ⚪ 白 + 🙅 不买",
       "🎁 免费的东西 + 🙅 不拿 + ⚪ 白 + 🙅 不拿",
       "🏬 这家商店 + ⚡ 打折 + 🚶 不去白不去"
      ],
      "tip": "Cấu trúc 不X白不X (bù X bái bù X, bất … bạch bất …) nghĩa là \"không X thì uổng, không X cũng phí\". Hai chữ X là cùng một động từ, chữ 白 (bái, bạch) đứng giữa: 不买白不买, 不去白不去, 不拿白不拿. Thường dùng khi có cơ hội tốt, miễn phí hoặc giảm giá.",
      "vn_tip": "Người Việt hay dịch thẳng \"không mua thì phí\" thành 不买就浪费. Người Trung nói tự nhiên là 不买白不买. Lưu ý hai động từ phải giống nhau và không chèn tân ngữ ở giữa: nói 不看白不看, đừng nói 不看东西白不看."
     },
     "chunks": [
      {
       "scene": "🏬🏷️🚶",
       "full": "这家百货商店打折不去白不去",
       "vi": "Cửa hàng bách hóa này đang giảm giá, không đi thì uổng",
       "parts": [
        {
         "t": "这家百货商店",
         "ico": "🏬",
         "c": "s",
         "py": "zhè jiā bǎihuò shāngdiàn",
         "hv": "_ gia bách hoá thương điếm"
        },
        {
         "t": "打折",
         "ico": "🏷️",
         "c": "v",
         "py": "dǎzhé",
         "hv": "đả chiết"
        },
        {
         "t": "不去白不去",
         "ico": "🚶",
         "c": "o",
         "py": "bú qù bái bú qù",
         "hv": "bất khứ bạch bất khứ"
        }
       ],
       "traceWord": "百货",
       "py": "Zhè jiā bǎihuò shāngdiàn dǎzhé bú qù bái bú qù",
       "traceKey": "baihuo"
      },
      {
       "scene": "👨🎁🤲",
       "full": "小明说免费的东西不拿白不拿",
       "vi": "Tiểu Minh nói đồ miễn phí mà không lấy thì uổng",
       "parts": [
        {
         "t": "小明",
         "ico": "👨",
         "c": "s",
         "py": "Xiǎomíng",
         "hv": "tiểu minh"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "_"
        },
        {
         "t": "免费的东西不拿白不拿",
         "ico": "🎁",
         "c": "o",
         "py": "miǎnfèi de dōngxi bù ná bái bù ná",
         "hv": "miễn phí đích đông tây bất nã bạch bất nã"
        }
       ],
       "traceWord": "免费",
       "py": "Xiǎomíng shuō miǎnfèi de dōngxi bù ná bái bù ná",
       "traceKey": "mianfei"
      },
      {
       "scene": "🧑👗💰",
       "full": "我觉得特价的衣服不买白不买",
       "vi": "Tôi thấy quần áo giá đặc biệt mà không mua thì uổng",
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
         "t": "特价的衣服不买白不买",
         "ico": "👗",
         "c": "o",
         "py": "tèjià de yīfu bù mǎi bái bù mǎi",
         "hv": "đặc giá đích y phục bất mãi bạch bất mãi"
        }
       ],
       "traceWord": "特价",
       "py": "Wǒ juéde tèjià de yīfu bù mǎi bái bù mǎi",
       "traceKey": "tejia"
      },
      {
       "scene": "🏬📣🚶",
       "full": "商场正在促销不逛白不逛",
       "vi": "Trung tâm thương mại đang khuyến mãi, không đi dạo thì uổng",
       "parts": [
        {
         "t": "商场",
         "ico": "🏬",
         "c": "s",
         "py": "shāngchǎng",
         "hv": "thương trường"
        },
        {
         "t": "正在促销",
         "ico": "📣",
         "c": "v",
         "py": "zhèngzài cùxiāo",
         "hv": "chính tại xúc tiu"
        },
        {
         "t": "不逛白不逛",
         "ico": "🚶",
         "c": "o",
         "py": "bú guàng bái bú guàng",
         "hv": "bất _ bạch bất _"
        }
       ],
       "traceWord": "促销",
       "py": "Shāngchǎng zhèngzài cùxiāo bú guàng bái bú guàng",
       "traceKey": "cuxiao"
      },
      {
       "scene": "👜⬇️🧪",
       "full": "这个名牌儿降价了不试白不试",
       "vi": "Món hàng hiệu này giảm giá rồi, không thử thì uổng",
       "parts": [
        {
         "t": "这个名牌儿",
         "ico": "👜",
         "c": "s",
         "py": "zhè gè míngpáir",
         "hv": "_ cá danh bài _"
        },
        {
         "t": "降价了",
         "ico": "⬇️",
         "c": "v",
         "py": "jiàngjià le",
         "hv": "giáng giá liễu"
        },
        {
         "t": "不试白不试",
         "ico": "🧪",
         "c": "o",
         "py": "bú shì bái bú shì",
         "hv": "bất thí bạch bất thí"
        }
       ],
       "traceWord": "降价",
       "py": "Zhè gè míngpáir jiàngjià le bú shì bái bú shì",
       "traceKey": "jiangjia"
      },
      {
       "scene": "🧑‍💼👗👀",
       "full": "售货员说这件衣服不看白不看",
       "vi": "Nhân viên bán hàng nói chiếc áo này không xem thì uổng",
       "parts": [
        {
         "t": "售货员",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "shòuhuòyuán",
         "hv": "_ hoá viên"
        },
        {
         "t": "说",
         "ico": "💬",
         "c": "v",
         "py": "shuō",
         "hv": "_"
        },
        {
         "t": "这件衣服不看白不看",
         "ico": "👀",
         "c": "o",
         "py": "zhè jiàn yīfu bú kàn bái bú kàn",
         "hv": "_ kiện y phục bất khán bạch bất khán"
        }
       ],
       "traceWord": "售货员",
       "py": "Shòuhuòyuán shuō zhè jiàn yīfu bú kàn bái bú kàn",
       "traceKey": "shouhuoyuan"
      },
      {
       "scene": "🧾🆓🤲",
       "full": "发票免费不要白不要",
       "vi": "Hóa đơn được cấp miễn phí, không lấy thì uổng",
       "parts": [
        {
         "t": "发票",
         "ico": "🧾",
         "c": "s",
         "py": "fāpiào",
         "hv": "_ phiếu"
        },
        {
         "t": "免费",
         "ico": "🆓",
         "c": "v",
         "py": "miǎnfèi",
         "hv": "miễn phí"
        },
        {
         "t": "不要白不要",
         "ico": "🤲",
         "c": "o",
         "py": "bùyào bái bùyào",
         "hv": "bất yếu bạch bất yếu"
        }
       ],
       "traceWord": "发票",
       "py": "Fāpiào miǎnfèi bùyào bái bùyào",
       "traceKey": "fapiao"
      },
      {
       "scene": "📦💰🛒",
       "full": "今天的货都很便宜不挑白不挑",
       "vi": "Hàng hôm nay đều rất rẻ, không chọn thì uổng",
       "parts": [
        {
         "t": "今天的货",
         "ico": "📦",
         "c": "s",
         "py": "jīntiān de huò",
         "hv": "kim thiên đích hoá"
        },
        {
         "t": "都很便宜",
         "ico": "💰",
         "c": "v",
         "py": "dōu hěn piányi",
         "hv": "đô _ tiện nghi"
        },
        {
         "t": "不挑白不挑",
         "ico": "🛒",
         "c": "o",
         "py": "bù tiāo bái bù tiāo",
         "hv": "bất vẹo bạch bất vẹo"
        }
       ],
       "traceWord": "挑",
       "py": "Jīntiān de huò dōu hěn piányi bù tiāo bái bù tiāo",
       "traceKey": "tiao"
      }
     ],
     "qaList": [
      {
       "q": "你喜欢购物吗？",
       "qvi": "Bạn có thích mua sắm không?",
       "scene": "🧑🛍️",
       "ans": "我喜欢购物",
       "opts": [
        {
         "txt": "我不会游泳",
         "ico": "🏊",
         "py": "Wǒ bú huì yóuyǒng"
        },
        {
         "txt": "我喜欢购物",
         "ico": "🛍️",
         "py": "Wǒ xǐhuan gòuwù"
        },
        {
         "txt": "我昨天去北京",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng"
        }
       ],
       "qpy": "Nǐ xǐhuan gòuwù ma?"
      },
      {
       "q": "你想购买什么？",
       "qvi": "Bạn muốn mua gì?",
       "scene": "🧑🧥",
       "ans": "我想购买一件外套",
       "opts": [
        {
         "txt": "我想购买一件外套",
         "ico": "🧥",
         "py": "Wǒ xiǎng gòumǎi yī jiàn wàitào"
        },
        {
         "txt": "我今天不上班",
         "ico": "🏠",
         "py": "Wǒ jīntiān bú shàngbān"
        },
        {
         "txt": "我在公司等人",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī děng rén"
        }
       ],
       "qpy": "Nǐ xiǎng gòumǎi shénme?"
      },
      {
       "q": "你怎么挑选衣服？",
       "qvi": "Bạn chọn quần áo như thế nào?",
       "scene": "🧑👗",
       "ans": "我先看价格再挑选",
       "opts": [
        {
         "txt": "我坐地铁去上班",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù shàngbān"
        },
        {
         "txt": "我昨天没有睡觉",
         "ico": "😴",
         "py": "Wǒ zuótiān méiyǒu shuìjiào"
        },
        {
         "txt": "我先看价格再挑选",
         "ico": "🏷️",
         "py": "Wǒ xiān kàn jiàgé zài tiāoxuǎn"
        }
       ],
       "qpy": "Nǐ zěnme tiāoxuǎn yīfu?"
      },
      {
       "q": "售货员见到客人会说什么？",
       "qvi": "Nhân viên bán hàng gặp khách sẽ nói gì?",
       "scene": "🧑‍💼🙋",
       "ans": "欢迎光临",
       "opts": [
        {
         "txt": "一路平安",
         "ico": "🚗",
         "py": "Yīlù-píng'ān"
        },
        {
         "txt": "晚安",
         "ico": "🌙",
         "py": "Wǎn'ān"
        },
        {
         "txt": "欢迎光临",
         "ico": "🏬",
         "py": "Huānyíng guānglín"
        }
       ],
       "qpy": "Shòuhuòyuán jiàndào kèrén huì shuō shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đi dạo trung tâm thương mại đang giảm giá",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin rủ đồng nghiệp đi mua sắm cuối tuần, nói lý do bằng cấu trúc vừa học, ví dụ <i>\"商场正在促销不逛白不逛\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng với nhân viên bán hàng: hỏi món nào đang giảm giá và nói bạn muốn xem thử, ví dụ <i>\"这个名牌儿降价了不试白不试\"</i>.",
       "<b>Bước 3:</b> Khi thanh toán, hỏi xin hóa đơn và nói cảm ơn, ví dụ <i>\"发票免费不要白不要\"</i>; ghi lại 3 món bạn muốn mua và giá trước khi giảm."
      ]
     }
    },
    {
     "id": "4.5B",
     "name": "Bài 4.5B: Chuyển phát, bưu điện và đổi ngoại tệ",
     "grammar": {
      "formulas": [
       "📦 快递 + ❓ 不一定 + ⏰ 今天能到",
       "🏤 邮局 + ❓ 不一定 + 🕘 周末营业",
       "💱 汇率 + ❓ 不一定 + 📅 每天一样"
      ],
      "tip": "Cấu trúc 未必 (wèibì, vị tất) nghĩa là \"chưa chắc, không nhất thiết\", đứng trước động từ hoặc tính từ: A 未必 + V/Adj. Trong khẩu ngữ thường nói 不一定 (bù yídìng, bất nhất định) với nghĩa gần giống. Dạng này chỉ phủ nhận một phần, nói \"có thể không đúng\".",
      "vn_tip": "Người Việt hay nhầm 未必 với 不必 (không cần) hoặc 没有. 未必 = \"chưa chắc\", còn 不必 (bù bì) = \"không cần\". Nói 快递未必今天到 nghĩa là chưa chắc hôm nay đến, chứ không phải \"không cần đến\"."
     },
     "chunks": [
      {
       "scene": "📦⏰❓",
       "full": "快递不一定今天能到",
       "vi": "Chuyển phát nhanh chưa chắc hôm nay đến được",
       "parts": [
        {
         "t": "快递",
         "ico": "📦",
         "c": "s",
         "py": "kuàidì",
         "hv": "khoái đệ"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "今天能到",
         "ico": "⏰",
         "c": "o",
         "py": "jīntiān néng dào",
         "hv": "kim thiên năng đáo"
        }
       ],
       "traceWord": "快递",
       "py": "Kuàidì bùyīdìng jīntiān néng dào",
       "traceKey": "kuaidi"
      },
      {
       "scene": "📦📮🏠",
       "full": "包裹不一定寄到你家",
       "vi": "Bưu kiện chưa chắc được gửi tới nhà bạn",
       "parts": [
        {
         "t": "包裹",
         "ico": "📦",
         "c": "s",
         "py": "bāoguǒ",
         "hv": "bao _"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "寄到你家",
         "ico": "🏠",
         "c": "o",
         "py": "jì dào nǐ jiā",
         "hv": "gửi đáo nể gia"
        }
       ],
       "traceWord": "寄",
       "py": "Bāoguǒ bùyīdìng jì dào nǐ jiā",
       "traceKey": "ji"
      },
      {
       "scene": "🏤📅❓",
       "full": "邮局不一定周末营业",
       "vi": "Bưu điện chưa chắc mở cửa cuối tuần",
       "parts": [
        {
         "t": "邮局",
         "ico": "🏤",
         "c": "s",
         "py": "yóujú",
         "hv": "_ cục"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "周末营业",
         "ico": "📅",
         "c": "o",
         "py": "zhōumò yíngyè",
         "hv": "chu mạt _ nghiệp"
        }
       ],
       "traceWord": "营业",
       "py": "Yóujú bùyīdìng zhōumò yíngyè",
       "traceKey": "yingye"
      },
      {
       "scene": "🏠🔢❓",
       "full": "你写的地址和号码不一定对",
       "vi": "Địa chỉ và số bạn viết chưa chắc đã đúng",
       "parts": [
        {
         "t": "你写的地址和号码",
         "ico": "🏠",
         "c": "s",
         "py": "nǐ xiě de dìzhǐ hé hàomǎ",
         "hv": "nể tả đích địa xởi hoà hiệu _"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "对",
         "ico": "✅",
         "c": "o",
         "py": "duì",
         "hv": "đỗi"
        }
       ],
       "traceWord": "地址",
       "py": "Nǐ xiě de dìzhǐ hé hàomǎ bùyīdìng duì",
       "traceKey": "dizhi"
      },
      {
       "scene": "🚪📦💸",
       "full": "公司上门收回包裹不一定免费",
       "vi": "Công ty đến tận nơi thu lại bưu kiện chưa chắc miễn phí",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "上门收回包裹",
         "ico": "🚪",
         "c": "v",
         "py": "shàngmén shōuhuí bāoguǒ",
         "hv": "thượng môn thu hồi bao _"
        },
        {
         "t": "不一定免费",
         "ico": "💸",
         "c": "o",
         "py": "bùyīdìng miǎnfèi",
         "hv": "bất nhất định miễn phí"
        }
       ],
       "traceWord": "收回",
       "py": "Gōngsī shàngmén shōuhuí bāoguǒ bùyīdìng miǎnfèi",
       "traceKey": "shouhui"
      },
      {
       "scene": "🛒📦❓",
       "full": "这种东西不一定在商店出售",
       "vi": "Loại đồ này chưa chắc được bán ở cửa hàng",
       "parts": [
        {
         "t": "这种东西",
         "ico": "📦",
         "c": "s",
         "py": "zhè zhǒng dōngxi",
         "hv": "_ chõng đông tây"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "在商店出售",
         "ico": "🛒",
         "c": "o",
         "py": "zài shāngdiàn chūshòu",
         "hv": "tại thương điếm xuất _"
        }
       ],
       "traceWord": "出售",
       "py": "Zhè zhǒng dōngxi bùyīdìng zài shāngdiàn chūshòu",
       "traceKey": "chushou"
      },
      {
       "scene": "🍎☀️📦",
       "full": "夏天水果的供应不一定够",
       "vi": "Nguồn cung trái cây mùa hè chưa chắc đủ",
       "parts": [
        {
         "t": "夏天水果的供应",
         "ico": "🍎",
         "c": "s",
         "py": "xiàtiān shuǐguǒ de gōngyìng",
         "hv": "_ thiên thuỷ quả đích cung ứng"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "够",
         "ico": "✅",
         "c": "o",
         "py": "gòu",
         "hv": "_"
        }
       ],
       "traceWord": "供应",
       "py": "Xiàtiān shuǐguǒ de gōngyìng bùyīdìng gòu",
       "traceKey": "gongying"
      },
      {
       "scene": "💱📈📅",
       "full": "汇率不一定每天一样",
       "vi": "Tỷ giá chưa chắc ngày nào cũng giống nhau",
       "parts": [
        {
         "t": "汇率",
         "ico": "💱",
         "c": "s",
         "py": "huìlǜ",
         "hv": "_ _"
        },
        {
         "t": "不一定",
         "ico": "❓",
         "c": "v",
         "py": "bùyīdìng",
         "hv": "bất nhất định"
        },
        {
         "t": "每天一样",
         "ico": "📅",
         "c": "o",
         "py": "měi tiān yīyàng",
         "hv": "mỗi thiên nhất dạng"
        }
       ],
       "traceWord": "汇率",
       "py": "Huìlǜ bùyīdìng měi tiān yīyàng",
       "traceKey": "huilu"
      }
     ],
     "qaList": [
      {
       "q": "你在银行做什么？",
       "qvi": "Bạn làm gì ở ngân hàng?",
       "scene": "🧑🏦💵",
       "ans": "我在银行交换外汇",
       "opts": [
        {
         "txt": "我在学校打球",
         "ico": "🏀",
         "py": "Wǒ zài xuéxiào dǎ qiú"
        },
        {
         "txt": "我在家看电视",
         "ico": "📺",
         "py": "Wǒ zàijiā kàn diànshì"
        },
        {
         "txt": "我在银行交换外汇",
         "ico": "💵",
         "py": "Wǒ zài yínháng jiāohuàn wàihuì"
        }
       ],
       "qpy": "Nǐ zài yínháng zuò shénme?"
      },
      {
       "q": "你要交换多少美金？",
       "qvi": "Bạn muốn đổi bao nhiêu đô la Mỹ?",
       "scene": "🧑💵",
       "ans": "我要交换一百美金",
       "opts": [
        {
         "txt": "我要交换一百美金",
         "ico": "💵",
         "py": "Wǒ yào jiāohuàn yī bǎi měijīn"
        },
        {
         "txt": "我要买两张票",
         "ico": "🎫",
         "py": "Wǒ yào mǎi liǎng zhāng piào"
        },
        {
         "txt": "我没有时间",
         "ico": "⌛",
         "py": "Wǒ méiyǒu shíjiān"
        }
       ],
       "qpy": "Nǐ yào jiāohuàn duōshao měijīn?"
      },
      {
       "q": "快递几天能到？",
       "qvi": "Chuyển phát nhanh mấy ngày thì tới?",
       "scene": "📦📅",
       "ans": "快递三天能到",
       "opts": [
        {
         "txt": "我不喜欢吃鱼",
         "ico": "🐟",
         "py": "Wǒ bù xǐhuan chī yú"
        },
        {
         "txt": "快递三天能到",
         "ico": "📦",
         "py": "Kuàidì sān tiān néng dào"
        },
        {
         "txt": "我在邮局上班",
         "ico": "🏤",
         "py": "Wǒ zài yóujú shàngbān"
        }
       ],
       "qpy": "Kuàidì jǐ tiān néng dào?"
      },
      {
       "q": "你要把钱汇到哪里？",
       "qvi": "Bạn muốn chuyển tiền đến đâu?",
       "scene": "🧑💸🏦",
       "ans": "我要把钱汇到河内",
       "opts": [
        {
         "txt": "我要在公司吃饭",
         "ico": "🍚",
         "py": "Wǒ yào zài gōngsī chīfàn"
        },
        {
         "txt": "我们坐火车去",
         "ico": "🚆",
         "py": "Wǒmen zuò huǒchē qù"
        },
        {
         "txt": "我要把钱汇到河内",
         "ico": "💸",
         "py": "Wǒ yào bǎ qián huì dào Hénèi"
        }
       ],
       "qpy": "Nǐ yào bǎ qián huì dào nǎlǐ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gửi bưu kiện và đổi tiền",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp hỏi giờ làm việc của bưu điện, và nói điều bạn chưa chắc, ví dụ <i>\"邮局不一定周末营业\"</i>.",
       "<b>Bước 2:</b> Giả vờ gọi dịch vụ chuyển phát: đọc to địa chỉ và số điện thoại của bạn, hỏi bao lâu thì tới, ví dụ <i>\"快递不一定今天能到\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng khi đổi ngoại tệ tại ngân hàng: hỏi tỷ giá hôm nay và nhắc rằng <i>\"汇率不一定每天一样\"</i>; ghi lại tỷ giá bạn hỏi được."
      ]
     }
    },
    {
     "id": "4.5C",
     "name": "Bài 4.5C: Chất lượng, chất liệu và kích cỡ sản phẩm",
     "grammar": {
      "formulas": [
       "🏢 这家公司 + 📍 在质量方面 + ⭐ 很有名",
       "🧵 这种材料 + 📍 在品质方面 + 👍 很好",
       "👕 这件衬衫 + 📍 在样子方面 + 👍 很好"
      ],
      "tip": "Cấu trúc 在……方面 (zài … fāngmiàn, tại … phương diện) nghĩa là \"về mặt …, xét về …\". Đặt danh từ ở giữa: 在质量方面 (về chất lượng), 在价格方面 (về giá). Cụm này đứng trước vị ngữ, làm trạng ngữ giới hạn phạm vi nói.",
      "vn_tip": "Người Việt hay nói \"về chất lượng\" thành 关于质量 hoặc để 方面 ra ngoài cụm. Đúng: 在质量方面, đặt sau chủ ngữ và trước vị ngữ, ví dụ 他们在质量方面很好. Không bỏ chữ 在 và 方面."
     },
     "chunks": [
      {
       "scene": "🏢📍⭐",
       "full": "这家公司在质量方面很有名",
       "vi": "Công ty này nổi tiếng về chất lượng",
       "parts": [
        {
         "t": "这家公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè jiā gōngsī",
         "hv": "_ gia công ti"
        },
        {
         "t": "在质量方面",
         "ico": "📍",
         "c": "v",
         "py": "zài zhìliàng fāngmiàn",
         "hv": "tại chất _ phương _"
        },
        {
         "t": "很有名",
         "ico": "⭐",
         "c": "o",
         "py": "hěn yǒumíng",
         "hv": "_ hữu danh"
        }
       ],
       "traceWord": "质量",
       "py": "Zhè jiā gōngsī zài zhìliàng fāngmiàn hěn yǒumíng",
       "traceKey": "zhiliang"
      },
      {
       "scene": "🧵📍👍",
       "full": "这种材料在品质方面很好",
       "vi": "Loại vật liệu này rất tốt về phẩm chất",
       "parts": [
        {
         "t": "这种材料",
         "ico": "🧵",
         "c": "s",
         "py": "zhè zhǒng cáiliào",
         "hv": "_ chõng _ liệu"
        },
        {
         "t": "在品质方面",
         "ico": "📍",
         "c": "v",
         "py": "zài pǐnzhì fāngmiàn",
         "hv": "tại phẩm chất phương _"
        },
        {
         "t": "很好",
         "ico": "👍",
         "c": "o",
         "py": "hěn hǎo",
         "hv": "_ háo"
        }
       ],
       "traceWord": "品质",
       "py": "Zhè zhǒng cáiliào zài pǐnzhì fāngmiàn hěn hǎo",
       "traceKey": "pinzhi"
      },
      {
       "scene": "🍵🌿✨",
       "full": "这种茶叶在原料方面很纯",
       "vi": "Loại trà này rất nguyên chất về nguyên liệu",
       "parts": [
        {
         "t": "这种茶叶",
         "ico": "🍵",
         "c": "s",
         "py": "zhè zhǒng cháyè",
         "hv": "_ chõng trà diệp"
        },
        {
         "t": "在原料方面",
         "ico": "🌿",
         "c": "v",
         "py": "zài yuánliào fāngmiàn",
         "hv": "tại nguyên liệu phương _"
        },
        {
         "t": "很纯",
         "ico": "✨",
         "c": "o",
         "py": "hěn chún",
         "hv": "_ thuần"
        }
       ],
       "traceWord": "原料",
       "py": "Zhè zhǒng cháyè zài yuánliào fāngmiàn hěn chún",
       "traceKey": "yuanliao"
      },
      {
       "scene": "👕📍🪶",
       "full": "这件衬衫在样子方面很好就是太薄",
       "vi": "Chiếc áo sơ mi này đẹp về kiểu dáng, chỉ là hơi mỏng",
       "parts": [
        {
         "t": "这件衬衫",
         "ico": "👕",
         "c": "s",
         "py": "zhè jiàn chènshān",
         "hv": "_ kiện _ oam"
        },
        {
         "t": "在样子方面",
         "ico": "📍",
         "c": "v",
         "py": "zài yàngzi fāngmiàn",
         "hv": "tại dạng tí phương _"
        },
        {
         "t": "很好就是太薄",
         "ico": "🪶",
         "c": "o",
         "py": "hěn hǎo jiùshì tài báo",
         "hv": "_ háo _ thị thái _"
        }
       ],
       "traceWord": "薄",
       "py": "Zhè jiàn chènshān zài yàngzi fāngmiàn hěn hǎo jiùshì tài báo",
       "traceKey": "bao"
      },
      {
       "scene": "🧥❄️📍",
       "full": "冬天的外套在使用方面要厚一点儿",
       "vi": "Áo khoác mùa đông về mặt sử dụng cần dày hơn một chút",
       "parts": [
        {
         "t": "冬天的外套",
         "ico": "🧥",
         "c": "s",
         "py": "dōngtiān de wàitào",
         "hv": "đông thiên đích ngoại _"
        },
        {
         "t": "在使用方面",
         "ico": "📍",
         "c": "v",
         "py": "zài shǐyòng fāngmiàn",
         "hv": "tại sứ dụng phương _"
        },
        {
         "t": "要厚一点儿",
         "ico": "🧱",
         "c": "o",
         "py": "yào hòu yīdiǎnr",
         "hv": "yếu _ nhất điểm _"
        }
       ],
       "traceWord": "厚",
       "py": "Dōngtiān de wàitào zài shǐyòng fāngmiàn yào hòu yīdiǎnr",
       "traceKey": "hou"
      },
      {
       "scene": "🧵📍📏",
       "full": "这条线在使用方面太粗那条比较细",
       "vi": "Sợi chỉ này về mặt sử dụng thì quá thô, sợi kia mảnh hơn",
       "parts": [
        {
         "t": "这条线",
         "ico": "🧵",
         "c": "s",
         "py": "zhè tiáo xiàn",
         "hv": "_ điều _"
        },
        {
         "t": "在使用方面",
         "ico": "📍",
         "c": "v",
         "py": "zài shǐyòng fāngmiàn",
         "hv": "tại sứ dụng phương _"
        },
        {
         "t": "太粗那条比较细",
         "ico": "📏",
         "c": "o",
         "py": "tài cū nà tiáo bǐjiào xì",
         "hv": "thái thô na điều tỉ _ tới"
        }
       ],
       "traceWord": "粗",
       "py": "Zhè tiáo xiàn zài shǐyòng fāngmiàn tài cū nà tiáo bǐjiào xì",
       "traceKey": "cu"
      },
      {
       "scene": "👖📍🎨",
       "full": "这条裤子在大小方面够宽但是颜色太浅",
       "vi": "Chiếc quần này về cỡ thì đủ rộng nhưng màu quá nhạt",
       "parts": [
        {
         "t": "这条裤子",
         "ico": "👖",
         "c": "s",
         "py": "zhè tiáo kùzi",
         "hv": "_ điều khố tí"
        },
        {
         "t": "在大小方面",
         "ico": "📍",
         "c": "v",
         "py": "zài dàxiǎo fāngmiàn",
         "hv": "tại đại tiểu phương _"
        },
        {
         "t": "够宽但是颜色太浅",
         "ico": "🎨",
         "c": "o",
         "py": "gòu kuān dànshì yánsè tài qiǎn",
         "hv": "_ khoan _ thị _ sắc thái thiển"
        }
       ],
       "traceWord": "浅",
       "py": "Zhè tiáo kùzi zài dàxiǎo fāngmiàn gòu kuān dànshì yánsè tài qiǎn",
       "traceKey": "qian"
      },
      {
       "scene": "🥤📍🔍",
       "full": "这个杯子在样子方面非常透明",
       "vi": "Chiếc cốc này về kiểu dáng rất trong suốt",
       "parts": [
        {
         "t": "这个杯子",
         "ico": "🥤",
         "c": "s",
         "py": "zhè gè bēizi",
         "hv": "_ cá bôi tí"
        },
        {
         "t": "在样子方面",
         "ico": "📍",
         "c": "v",
         "py": "zài yàngzi fāngmiàn",
         "hv": "tại dạng tí phương _"
        },
        {
         "t": "非常透明",
         "ico": "🔍",
         "c": "o",
         "py": "fēicháng tòumíng",
         "hv": "phi thường thấu minh"
        }
       ],
       "traceWord": "透明",
       "py": "Zhè gè bēizi zài yàngzi fāngmiàn fēicháng tòumíng",
       "traceKey": "touming"
      }
     ],
     "qaList": [
      {
       "q": "这瓶水有多少？",
       "qvi": "Chai nước này có bao nhiêu?",
       "scene": "🧴💧",
       "ans": "这瓶水有五百毫升",
       "opts": [
        {
         "txt": "这瓶水有三毫米",
         "ico": "📏",
         "py": "Zhè píng shuǐ yǒu sān háomǐ"
        },
        {
         "txt": "这瓶水有五百毫升",
         "ico": "💧",
         "py": "Zhè píng shuǐ yǒu wǔ bǎi háoshēng"
        },
        {
         "txt": "这瓶水有五个人",
         "ico": "👥",
         "py": "Zhè píng shuǐ yǒu wǔ gèrén"
        }
       ],
       "qpy": "Zhè píng shuǐ yǒu duōshao?"
      },
      {
       "q": "这张纸多厚？",
       "qvi": "Tờ giấy này dày bao nhiêu?",
       "scene": "📄📏",
       "ans": "这张纸只有零点五毫米",
       "opts": [
        {
         "txt": "这张纸只有零点五毫米",
         "ico": "📏",
         "py": "Zhè zhāng zhǐ zhǐyǒu líng diǎn wǔ háomǐ"
        },
        {
         "txt": "这张纸太薄光都透过来了",
         "ico": "💡",
         "py": "Zhè zhāng zhǐ tài báo guāng dōu tòu guòlái le"
        },
        {
         "txt": "这张纸是我的朋友",
         "ico": "🤝",
         "py": "Zhè zhāng zhǐ shì wǒ de péngyou"
        }
       ],
       "qpy": "Zhè zhāng zhǐ duō hòu?"
      },
      {
       "q": "这件衣服在哪方面最好？",
       "qvi": "Chiếc áo này tốt nhất ở mặt nào?",
       "scene": "👕👍",
       "ans": "这件衣服在质量方面最好",
       "opts": [
        {
         "txt": "我喜欢在家看书",
         "ico": "📖",
         "py": "Wǒ xǐhuan zàijiā kàn shū"
        },
        {
         "txt": "这件衣服在质量方面最好",
         "ico": "👕",
         "py": "Zhè jiàn yīfu zài zhìliàng fāngmiàn zuìhǎo"
        },
        {
         "txt": "我们明天下午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        }
       ],
       "qpy": "Zhè jiàn yīfu zài nǎ fāngmiàn zuìhǎo?"
      },
      {
       "q": "你们公司在哪方面有优势？",
       "qvi": "Công ty các bạn có lợi thế ở mặt nào?",
       "scene": "🏢💪",
       "ans": "我们在质量方面有优势",
       "opts": [
        {
         "txt": "我们昨天去了医院",
         "ico": "🏥",
         "py": "Wǒmen zuótiān qù le yīyuàn"
        },
        {
         "txt": "他们喜欢吃面包",
         "ico": "🍞",
         "py": "Tāmen xǐhuan chī miànbāo"
        },
        {
         "txt": "我们在质量方面有优势",
         "ico": "💪",
         "py": "Wǒmen zài zhìliàng fāngmiàn yǒu yōushì"
        }
       ],
       "qpy": "Nǐmen gōngsī zài nǎ fāngmiàn yǒu yōushì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi về chất lượng sản phẩm khi mua hàng",
      "steps": [
       "<b>Bước 1:</b> Chọn một món đồ bạn định mua (áo, giày, cốc…) và tự nói thành tiếng ưu điểm của nó bằng cấu trúc vừa học, ví dụ <i>\"这种材料在品质方面很好\"</i>.",
       "<b>Bước 2:</b> Giả vờ hỏi nhân viên bán hàng về chất liệu, độ dày mỏng và kích cỡ; nói nhận xét của bạn, ví dụ <i>\"这件衬衫在样子方面很好就是太薄\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp so sánh hai sản phẩm theo từng mặt (chất lượng, giá, kích cỡ), mỗi mặt một câu dùng <i>\"在……方面\"</i>."
      ]
     }
    }
   ]
  },
  "4.6": {
   "lessons": [
    {
     "id": "4.6A",
     "name": "Bài 4.6A: Phương tiện giao thông và đi lại đường dài",
     "grammar": {
      "formulas": [
       "⏰ 自从 + 🚄 有了高铁 + 😊 方便多了",
       "🧑 这位客人 + 📍 来自 + 🏙️ 上海",
       "🚗 自从 + 🛣️ 修了新路 + 🚦 很少堵车"
      ],
      "tip": "自 (zì, âm Hán Việt: tự) nghĩa là \"từ\" (mốc thời gian hoặc địa điểm), trang trọng hơn 从. Hay gặp nhất: 自从 (từ khi, thường đi với 就/以后 ở vế sau) và 来自 (đến từ).",
      "vn_tip": "Người Việt hay dịch \"từ\" thành 从 ở mọi nơi. 自从 chỉ nói về mốc trong quá khứ kéo dài đến nay, không dùng cho tương lai (không nói 自从明天). Chỉ nguồn gốc người/vật thì dùng 来自 + nơi chốn, không nói 从来 (có nghĩa khác: \"từ trước đến nay\")."
     },
     "chunks": [
      {
       "scene": "🚌🏢🏙️",
       "full": "这辆大巴来自北京的旅行社",
       "vi": "Chiếc xe buýt đường dài này đến từ công ty du lịch ở Bắc Kinh",
       "parts": [
        {
         "t": "这辆大巴",
         "ico": "🚌",
         "c": "s",
         "py": "zhè liàng dàbā",
         "hv": "_ _ đại ba"
        },
        {
         "t": "来自",
         "ico": "📍",
         "c": "v",
         "py": "láizì",
         "hv": "lai tự"
        },
        {
         "t": "北京的旅行社",
         "ico": "🏢",
         "c": "o",
         "py": "Běijīng de lǚxíngshè",
         "hv": "_ kinh đích lữ hàng xã"
        }
       ],
       "traceWord": "大巴",
       "py": "Zhè liàng dàbā láizì Běijīng de lǚxíngshè",
       "traceKey": "daba"
      },
      {
       "scene": "🛵⛽🚌",
       "full": "我自从有了电动车就不坐公交车了",
       "vi": "Từ khi có xe điện, tôi không đi xe buýt nữa",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "自从有了电动车",
         "ico": "🛵",
         "c": "v",
         "py": "zìcóng yǒu le diàndòngchē",
         "hv": "tự tòng hữu liễu _ động xa"
        },
        {
         "t": "就不坐公交车了",
         "ico": "🚌",
         "c": "o",
         "py": "jiù bú zuò gōngjiāochē le",
         "hv": "_ bất _ công giao xa liễu"
        }
       ],
       "traceWord": "电动车",
       "py": "Wǒ zìcóng yǒu le diàndòngchē jiù bú zuò gōngjiāochē le",
       "traceKey": "diandongche"
      },
      {
       "scene": "✈️💰😊",
       "full": "自从换了航空公司这个航班便宜了很多",
       "vi": "Từ khi đổi hãng hàng không, chuyến bay này rẻ đi nhiều",
       "parts": [
        {
         "t": "自从换了航空公司",
         "ico": "🏢",
         "c": "s",
         "py": "zìcóng huàn le hángkōng gōngsī",
         "hv": "tự tòng _ liễu hàng không công ti"
        },
        {
         "t": "这个航班",
         "ico": "✈️",
         "c": "v",
         "py": "zhè gè hángbān",
         "hv": "_ cá hàng ban"
        },
        {
         "t": "便宜了很多",
         "ico": "💰",
         "c": "o",
         "py": "piányi le hěn duō",
         "hv": "tiện nghi liễu _ đa"
        }
       ],
       "traceWord": "航班",
       "py": "Zìcóng huàn le hángkōng gōngsī zhè gè hángbān piányi le hěn duō",
       "traceKey": "hangban"
      },
      {
       "scene": "🚆👥🏙️",
       "full": "我坐的列车里有很多旅客来自上海",
       "vi": "Trong chuyến tàu tôi đi có nhiều hành khách đến từ Thượng Hải",
       "parts": [
        {
         "t": "我坐的列车里",
         "ico": "🚆",
         "c": "s",
         "py": "wǒ zuò de lièchē lǐ",
         "hv": "ngã _ đích liệt xa lịa"
        },
        {
         "t": "有很多旅客",
         "ico": "👥",
         "c": "v",
         "py": "yǒu hěn duō lǚkè",
         "hv": "hữu _ đa lữ khách"
        },
        {
         "t": "来自上海",
         "ico": "🏙️",
         "c": "o",
         "py": "láizì Shànghǎi",
         "hv": "lai tự thượng hải"
        }
       ],
       "traceWord": "列车",
       "py": "Wǒ zuò de lièchē lǐ yǒu hěn duō lǚkè láizì Shànghǎi",
       "traceKey": "lieche"
      },
      {
       "scene": "🚢🛣️📉",
       "full": "自从有了高速公路坐轮船的人越来越少了",
       "vi": "Từ khi có đường cao tốc, người đi tàu thủy ngày càng ít",
       "parts": [
        {
         "t": "自从有了高速公路",
         "ico": "🛣️",
         "c": "s",
         "py": "zìcóng yǒu le gāosù gōnglù",
         "hv": "tự tòng hữu liễu cao tốc công lộ"
        },
        {
         "t": "坐轮船的人",
         "ico": "🚢",
         "c": "v",
         "py": "zuò lúnchuán de rén",
         "hv": "_ luân thuyền đích nhân"
        },
        {
         "t": "越来越少了",
         "ico": "📉",
         "c": "o",
         "py": "yuè lái yuè shǎo le",
         "hv": "việt lai việt thiểu liễu"
        }
       ],
       "traceWord": "轮船",
       "py": "Zìcóng yǒu le gāosù gōnglù zuò lúnchuán de rén yuè lái yuè shǎo le",
       "traceKey": "lunchuan"
      },
      {
       "scene": "♿🛞🔧",
       "full": "轮椅的轮子自从坏了就一直没修理",
       "vi": "Bánh xe lăn từ khi hỏng đến giờ vẫn chưa được sửa",
       "parts": [
        {
         "t": "轮椅的轮子",
         "ico": "♿",
         "c": "s",
         "py": "lúnyǐ de lúnzi",
         "hv": "luân _ đích luân tí"
        },
        {
         "t": "自从坏了",
         "ico": "💥",
         "c": "v",
         "py": "zìcóng huài le",
         "hv": "tự tòng hoại liễu"
        },
        {
         "t": "就一直没修理",
         "ico": "🔧",
         "c": "o",
         "py": "jiù yīzhí méi xiūlǐ",
         "hv": "_ nhất _ một tu lí"
        }
       ],
       "traceWord": "轮椅",
       "py": "Lúnyǐ de lúnzi zìcóng huài le jiù yīzhí méi xiūlǐ",
       "traceKey": "lunyi"
      },
      {
       "scene": "🛵⛽💧",
       "full": "自从买了电动车我不用去加油站买汽油了",
       "vi": "Từ khi mua xe điện, tôi không cần ra trạm xăng mua xăng nữa",
       "parts": [
        {
         "t": "自从买了电动车",
         "ico": "🛵",
         "c": "s",
         "py": "zìcóng mǎi le diàndòngchē",
         "hv": "tự tòng mãi liễu _ động xa"
        },
        {
         "t": "我不用",
         "ico": "🧑",
         "c": "v",
         "py": "wǒ bùyòng",
         "hv": "ngã bất dụng"
        },
        {
         "t": "去加油站买汽油了",
         "ico": "⛽",
         "c": "o",
         "py": "qù jiāyóuzhàn mǎi qìyóu le",
         "hv": "khứ gia dầu trạm mãi _ dầu liễu"
        }
       ],
       "traceWord": "加油站",
       "py": "Zìcóng mǎi le diàndòngchē wǒ bùyòng qù jiāyóuzhàn mǎi qìyóu le",
       "traceKey": "jiayouzhan"
      },
      {
       "scene": "🛣️🚧🚗",
       "full": "自从修了新路这里就很少堵车了",
       "vi": "Từ khi làm đường mới, ở đây rất ít bị tắc xe",
       "parts": [
        {
         "t": "自从修了新路",
         "ico": "🛣️",
         "c": "s",
         "py": "zìcóng xiū le xīn lù",
         "hv": "tự tòng tu liễu tân lộ"
        },
        {
         "t": "这里",
         "ico": "📍",
         "c": "v",
         "py": "zhèlǐ",
         "hv": "_ lịa"
        },
        {
         "t": "就很少堵车了",
         "ico": "🚗",
         "c": "o",
         "py": "jiù hěn shǎo dǔchē le",
         "hv": "_ _ thiểu _ xa liễu"
        }
       ],
       "traceWord": "堵车",
       "py": "Zìcóng xiū le xīn lù zhèlǐ jiù hěn shǎo dǔchē le",
       "traceKey": "duche"
      }
     ],
     "qaList": [
      {
       "q": "你是怎么来公司的？",
       "qvi": "Bạn đến công ty bằng cách nào?",
       "scene": "🧑🚌🏢",
       "ans": "我是坐巴士来的",
       "opts": [
        {
         "txt": "我昨天很忙",
         "ico": "😓",
         "py": "Wǒ zuótiān hěn máng"
        },
        {
         "txt": "我是坐巴士来的",
         "ico": "🚌",
         "py": "Wǒ shì zuò bāshì lái de"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Nǐ shì zěnme lái gōngsī de?"
      },
      {
       "q": "倒车的时候要注意什么？",
       "qvi": "Khi lùi xe cần chú ý điều gì?",
       "scene": "🚗⬅️👀",
       "ans": "要看后面有没有人",
       "opts": [
        {
         "txt": "要多喝水",
         "ico": "💧",
         "py": "Yào duō hē shuǐ"
        },
        {
         "txt": "要给老板打电话",
         "ico": "📞",
         "py": "Yào gěi lǎobǎn dǎ diànhuà"
        },
        {
         "txt": "要看后面有没有人",
         "ico": "👀",
         "py": "Yào kàn hòumiàn yǒu méi yǒu rén"
        }
       ],
       "qpy": "Dǎochē de shíhou yào zhùyì shénme?"
      },
      {
       "q": "飞机几点降落？",
       "qvi": "Máy bay mấy giờ hạ cánh?",
       "scene": "✈️🛬🕓",
       "ans": "下午四点降落",
       "opts": [
        {
         "txt": "我们明天开会",
         "ico": "👥",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "这件衣服很贵",
         "ico": "👔",
         "py": "Zhè jiàn yīfu hěn guì"
        },
        {
         "txt": "下午四点降落",
         "ico": "🛬",
         "py": "Xiàwǔ sì diǎn jiàngluò"
        }
       ],
       "qpy": "Fēijī jǐ diǎn jiàngluò?"
      },
      {
       "q": "你们坐高铁去还是坐大巴去？",
       "qvi": "Các bạn đi bằng tàu cao tốc hay xe buýt đường dài?",
       "scene": "🚄🚌❓",
       "ans": "我们坐高铁去",
       "opts": [
        {
         "txt": "我们看电影去",
         "ico": "🎬",
         "py": "Wǒmen kàn diànyǐng qù"
        },
        {
         "txt": "我们坐高铁去",
         "ico": "🚄",
         "py": "Wǒmen zuò gāotiě qù"
        },
        {
         "txt": "我们在家吃饭",
         "ico": "🍚",
         "py": "Wǒmen zàijiā chīfàn"
        }
       ],
       "qpy": "Nǐmen zuò gāotiě qù háishi zuò dàbā qù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi đồng nghiệp về cách đi công tác",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin hỏi đồng nghiệp: bạn đi tàu cao tốc, máy bay hay xe buýt đường dài? Dùng <i>\"你们坐高铁去还是坐大巴去？\"</i> và nói rõ lý do chọn.",
       "<b>Bước 2:</b> Kể với đối tác về thay đổi trong việc đi lại ở thành phố bạn, dùng 自从: <i>\"自从修了新路这里就很少堵车了。\"</i> Tự nói thêm 2 câu với 自从 về nơi bạn sống.",
       "<b>Bước 3:</b> Giới thiệu một người bạn hoặc khách ở công ty: người đó đến từ đâu, đi bằng phương tiện gì. Dùng 来自 để nói thành tiếng 3 câu."
      ]
     }
    },
    {
     "id": "4.6B",
     "name": "Bài 4.6B: Hỏi đường và vị trí",
     "grammar": {
      "formulas": [
       "📍 前面的路口 + ⚡ 停下了 + 🔢 一辆 + 🚌 大巴",
       "📍 附近 + ⚡ 新开了 + 🔢 一家 + ☕ 咖啡店",
       "📱 手机地图上 + 🧭 我的位置 + 💨 突然消失了"
      ],
      "tip": "Câu tồn hiện: Nơi chốn/thời gian + động từ + 了/着 + số lượng từ + người/vật. Dùng khi có thứ gì xuất hiện (出现, 来, 开, 下) hoặc biến mất (消失, 少, 丢) ở một nơi. Chủ thể là thứ mới, chưa xác định nên đứng CUỐI câu.",
      "vn_tip": "Tiếng Việt nói \"Một chiếc xe buýt dừng ở ngã tư\", người Việt hay dịch thành 一辆大巴停在路口 (câu thường). Khi muốn nói \"xuất hiện/vừa có\", hãy đặt nơi chốn lên đầu: 路口停下了一辆大巴. Vật ở cuối thường kèm số lượng từ (一辆, 一家, 一位), không dùng 这/那 cụ thể."
     },
     "chunks": [
      {
       "scene": "🏪☕🆕",
       "full": "附近新开了一家咖啡店",
       "vi": "Gần đây mới mở một quán cà phê",
       "parts": [
        {
         "t": "附近",
         "ico": "📍",
         "c": "s",
         "py": "fùjìn",
         "hv": "phò cận"
        },
        {
         "t": "新开了",
         "ico": "🆕",
         "c": "v",
         "py": "xīn kāi le",
         "hv": "tân khai liễu"
        },
        {
         "t": "一家咖啡店",
         "ico": "☕",
         "c": "o",
         "py": "yī jiā kāfēi diàn",
         "hv": "nhất gia _ _ điếm"
        }
       ],
       "traceWord": "附近",
       "py": "Fùjìn xīn kāi le yī jiā kāfēi diàn",
       "traceKey": "fujin"
      },
      {
       "scene": "🛣️🚶👴",
       "full": "街道上走来了一位老人",
       "vi": "Trên phố có một cụ già đi tới",
       "parts": [
        {
         "t": "街道上",
         "ico": "🛣️",
         "c": "s",
         "py": "jiēdào shàng",
         "hv": "_ đạo thượng"
        },
        {
         "t": "走来了",
         "ico": "🚶",
         "c": "v",
         "py": "zǒu lái le",
         "hv": "tẩu lai liễu"
        },
        {
         "t": "一位老人",
         "ico": "👴",
         "c": "o",
         "py": "yī wèi lǎorén",
         "hv": "nhất vị lão nhân"
        }
       ],
       "traceWord": "街道",
       "py": "Jiēdào shàng zǒu lái le yī wèi lǎorén",
       "traceKey": "jiedao"
      },
      {
       "scene": "🏙️🚗🚧",
       "full": "市区的路上堵了很多车",
       "vi": "Trên đường trong nội thành tắc rất nhiều xe",
       "parts": [
        {
         "t": "市区的路上",
         "ico": "🏙️",
         "c": "s",
         "py": "shìqū de lùshang",
         "hv": "thị khu đích lộ thượng"
        },
        {
         "t": "堵了",
         "ico": "🚧",
         "c": "v",
         "py": "dǔ le",
         "hv": "_ liễu"
        },
        {
         "t": "很多车",
         "ico": "🚗",
         "c": "o",
         "py": "hěn duō chē",
         "hv": "_ đa xa"
        }
       ],
       "traceWord": "市区",
       "py": "Shìqū de lùshang dǔ le hěn duō chē",
       "traceKey": "shiqu"
      },
      {
       "scene": "🌧️💦🛣️",
       "full": "下雨以后地面上出现了很多水",
       "vi": "Sau khi mưa, trên mặt đất xuất hiện rất nhiều nước",
       "parts": [
        {
         "t": "下雨以后地面上",
         "ico": "🌧️",
         "c": "s",
         "py": "xià yǔ yǐhòu dìmiàn shàng",
         "hv": "hạ _ _ hậu địa _ thượng"
        },
        {
         "t": "出现了",
         "ico": "✨",
         "c": "v",
         "py": "chūxiàn le",
         "hv": "xuất hiện liễu"
        },
        {
         "t": "很多水",
         "ico": "💦",
         "c": "o",
         "py": "hěn duō shuǐ",
         "hv": "_ đa thuỷ"
        }
       ],
       "traceWord": "地面",
       "py": "Xià yǔ yǐhòu dìmiàn shàng chūxiàn le hěn duō shuǐ",
       "traceKey": "dimian"
      },
      {
       "scene": "🏦🆕🚇",
       "full": "新出现的那家银行位于地铁站的北边",
       "vi": "Ngân hàng mới xuất hiện kia nằm ở phía bắc ga tàu điện ngầm",
       "parts": [
        {
         "t": "新出现的那家银行",
         "ico": "🏦",
         "c": "s",
         "py": "xīn chūxiàn de nà jiā yínháng",
         "hv": "tân xuất hiện đích na gia ngân hàng"
        },
        {
         "t": "位于",
         "ico": "📍",
         "c": "v",
         "py": "wèiyú",
         "hv": "vị vu"
        },
        {
         "t": "地铁站的北边",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiězhàn de běibian",
         "hv": "địa thiết trạm đích _ biên"
        }
       ],
       "traceWord": "位于",
       "py": "Xīn chūxiàn de nà jiā yínháng wèiyú dìtiězhàn de běibian",
       "traceKey": "weiyu"
      },
      {
       "scene": "📱🗺️💨",
       "full": "手机地图上我的位置突然消失了",
       "vi": "Vị trí của tôi đột nhiên biến mất trên bản đồ điện thoại",
       "parts": [
        {
         "t": "手机地图上",
         "ico": "🗺️",
         "c": "s",
         "py": "shǒujī dìtú shàng",
         "hv": "thủ cơ địa đồ thượng"
        },
        {
         "t": "我的位置",
         "ico": "📍",
         "c": "v",
         "py": "wǒ de wèizhì",
         "hv": "ngã đích vị trí"
        },
        {
         "t": "突然消失了",
         "ico": "💨",
         "c": "o",
         "py": "tūrán xiāoshī le",
         "hv": "đột nhiên tiêu thất liễu"
        }
       ],
       "traceWord": "位置",
       "py": "Shǒujī dìtú shàng wǒ de wèizhì tūrán xiāoshī le",
       "traceKey": "weizhi"
      },
      {
       "scene": "🚶🏢🌧️",
       "full": "步行去公司的路上突然下起了大雨",
       "vi": "Trên đường đi bộ đến công ty, bỗng nhiên trời đổ mưa to",
       "parts": [
        {
         "t": "步行去公司的路上",
         "ico": "🚶",
         "c": "s",
         "py": "bùxíng qù gōngsī de lùshang",
         "hv": "bộ hàng khứ công ti đích lộ thượng"
        },
        {
         "t": "突然下起了",
         "ico": "⚡",
         "c": "v",
         "py": "tūrán xià qǐ le",
         "hv": "đột nhiên hạ khởi liễu"
        },
        {
         "t": "大雨",
         "ico": "🌧️",
         "c": "o",
         "py": "dà yǔ",
         "hv": "đại _"
        }
       ],
       "traceWord": "步行",
       "py": "Bùxíng qù gōngsī de lùshang tūrán xià qǐ le dà yǔ",
       "traceKey": "buxing"
      },
      {
       "scene": "🚦🚌🛑",
       "full": "前面的路口突然停下了一辆大巴",
       "vi": "Ở ngã tư phía trước bỗng dừng lại một chiếc xe buýt",
       "parts": [
        {
         "t": "前面的路口",
         "ico": "🚦",
         "c": "s",
         "py": "qiánmiàn de lùkǒu",
         "hv": "tiền _ đích lộ khẩu"
        },
        {
         "t": "突然停下了",
         "ico": "🛑",
         "c": "v",
         "py": "tūrán tíngxia le",
         "hv": "đột nhiên đình hạ liễu"
        },
        {
         "t": "一辆大巴",
         "ico": "🚌",
         "c": "o",
         "py": "yī liàng dàbā",
         "hv": "nhất _ đại ba"
        }
       ],
       "traceWord": "停下",
       "py": "Qiánmiàn de lùkǒu tūrán tíngxia le yī liàng dàbā",
       "traceKey": "tingxia"
      }
     ],
     "qaList": [
      {
       "q": "前面的路口怎么走？",
       "qvi": "Ngã tư phía trước đi thế nào?",
       "scene": "🚦↪️🚶",
       "ans": "请在路口转弯",
       "opts": [
        {
         "txt": "我昨天吃了面包",
         "ico": "🍞",
         "py": "Wǒ zuótiān chī le miànbāo"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "请在路口转弯",
         "ico": "↪️",
         "py": "Qǐng zài lùkǒu zhuǎnwān"
        }
       ],
       "qpy": "Qiánmiàn de lùkǒu zěnme zǒu?"
      },
      {
       "q": "你们的办公室在哪儿？",
       "qvi": "Văn phòng của các bạn ở đâu?",
       "scene": "🏢⬆️🚪",
       "ans": "上楼就是我们的办公室",
       "opts": [
        {
         "txt": "我们下楼吃午饭了",
         "ico": "🍜",
         "py": "Wǒmen xià lóu chī wǔfàn le"
        },
        {
         "txt": "我们明天去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "上楼就是我们的办公室",
         "ico": "🏢",
         "py": "Shàng lóu jiùshì wǒmen de bàngōngshì"
        }
       ],
       "qpy": "Nǐmen de bàngōngshì zài nǎr?"
      },
      {
       "q": "去机场的途中你在哪儿换车？",
       "qvi": "Trên đường ra sân bay bạn đổi xe ở đâu?",
       "scene": "🛫🚇🔄",
       "ans": "我在地下的地铁站换车",
       "opts": [
        {
         "txt": "我昨天买了一件衣服",
         "ico": "👔",
         "py": "Wǒ zuótiān mǎi le yī jiàn yīfu"
        },
        {
         "txt": "我在地下的地铁站换车",
         "ico": "🚇",
         "py": "Wǒ zài dìxià de dìtiězhàn huàn chē"
        },
        {
         "txt": "他们都是我的同学",
         "ico": "👥",
         "py": "Tāmen dōu shì wǒ de tóngxué"
        }
       ],
       "qpy": "Qù jīchǎng de túzhōng nǐ zài nǎr huàn chē?"
      },
      {
       "q": "你去过中国大陆的哪些城市？",
       "qvi": "Bạn đã đến những thành phố nào ở Trung Quốc đại lục?",
       "scene": "🇨🇳🏙️❓",
       "ans": "我去过北京和上海",
       "opts": [
        {
         "txt": "我今天很累",
         "ico": "😫",
         "py": "Wǒ jīntiān hěn lèi"
        },
        {
         "txt": "这条路很弯",
         "ico": "🛣️",
         "py": "Zhè tiáo lù hěn wān"
        },
        {
         "txt": "我去过北京和上海",
         "ico": "🏙️",
         "py": "Wǒ qù guò Běijīng hé Shànghǎi"
        }
       ],
       "qpy": "Nǐ qù guò Zhōngguó dàlù de nǎxiē chéngshì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chỉ đường qua điện thoại",
      "steps": [
       "<b>Bước 1:</b> Gọi cho đồng nghiệp đang đến văn phòng bạn lần đầu, hỏi anh ấy đang ở đâu: <i>\"你现在在哪儿？前面的路口有什么？\"</i> Nhờ anh mô tả những gì đang xuất hiện trước mặt.",
       "<b>Bước 2:</b> Chỉ đường cho anh ấy: nói công ty nằm ở đâu bằng 位于, dặn rẽ ở ngã tư (转弯), và nêu một cửa hàng mới ở gần đó: <i>\"附近新开了一家咖啡店。\"</i>",
       "<b>Bước 3:</b> Kể lại một lần bạn đi bộ trên đường thì có chuyện bất ngờ (mưa, kẹt xe, xe dừng lại) bằng ít nhất 3 câu tồn hiện, ví dụ <i>\"路上突然下起了大雨。\"</i>"
      ]
     }
    },
    {
     "id": "4.6C",
     "name": "Bài 4.6C: Tham quan du lịch và đặt chỗ",
     "grammar": {
      "formulas": [
       "🧩 整体 + 由 + 👥 导游和游客 + 组成",
       "✈️ 这次旅行的费用 + 由 + 🎫 机票和酒店 + 组成",
       "❓ 你们的小组 + 由 + 👤 哪些人 + 组成？"
      ],
      "tip": "由……组成 (yóu… zǔchéng; do… hợp thành, cấu thành): 由 (do) đứng trước các thành phần, 组成 (tổ thành) đứng cuối câu. Cấu trúc: Chỉnh thể + 由 + các thành phần + 组成.",
      "vn_tip": "Người Việt hay nói thiếu 由 hoặc đặt sai chỗ: sai 这个团组成十个人, đúng 这个团由十个人组成. Cũng đừng nhầm với 有 (có): 这个团有十个人 chỉ đếm số người, còn 由……组成 nói rõ gồm những thành phần nào."
     },
     "chunks": [
      {
       "scene": "🧳👥🚩",
       "full": "这个旅行团由导游和十个游客组成",
       "vi": "Đoàn du lịch này gồm hướng dẫn viên và mười du khách",
       "parts": [
        {
         "t": "这个旅行团",
         "ico": "🧳",
         "c": "s",
         "py": "zhè gè lǚxíng tuán",
         "hv": "_ cá lữ hàng đoàn"
        },
        {
         "t": "由导游和十个游客",
         "ico": "🚩",
         "c": "v",
         "py": "yóu dǎoyóu hé shí gè yóukè",
         "hv": "do đạo _ hoà thập cá _ khách"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "导游",
       "py": "Zhè gè lǚxíng tuán yóu dǎoyóu hé shí gè yóukè zǔchéng",
       "traceKey": "daoyou"
      },
      {
       "scene": "🛣️📏🧩",
       "full": "这次长途旅行的距离由三段路线组成",
       "vi": "Quãng đường của chuyến đi dài này gồm ba chặng",
       "parts": [
        {
         "t": "这次长途旅行的距离",
         "ico": "📏",
         "c": "s",
         "py": "zhè cì chángtú lǚxíng de jùlí",
         "hv": "_ thứ trường đồ lữ hàng đích cựa li"
        },
        {
         "t": "由三段路线",
         "ico": "🛣️",
         "c": "v",
         "py": "yóu sān duàn lùxiàn",
         "hv": "do tam đoạn lộ _"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "长途",
       "py": "Zhè cì chángtú lǚxíng de jùlí yóu sān duàn lùxiàn zǔchéng",
       "traceKey": "changtu"
      },
      {
       "scene": "💰🎫🏨",
       "full": "这次旅行的费用由机票和酒店预订费组成",
       "vi": "Chi phí chuyến đi gồm vé máy bay và phí đặt phòng khách sạn",
       "parts": [
        {
         "t": "这次旅行的费用",
         "ico": "💰",
         "c": "s",
         "py": "zhè cì lǚxíng de fèiyong",
         "hv": "_ thứ lữ hàng đích phí dụng"
        },
        {
         "t": "由机票和酒店预订费",
         "ico": "🎫",
         "c": "v",
         "py": "yóu jīpiào hé jiǔdiàn yùdìng fèi",
         "hv": "do cơ phiếu hoà _ điếm dự đính phí"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "预订",
       "py": "Zhè cì lǚxíng de fèiyong yóu jīpiào hé jiǔdiàn yùdìng fèi zǔchéng",
       "traceKey": "yuding"
      },
      {
       "scene": "🔎👨‍🔬📰",
       "full": "这个考察小组由五位专家和两位记者组成",
       "vi": "Nhóm khảo sát này gồm năm chuyên gia và hai phóng viên",
       "parts": [
        {
         "t": "这个考察小组",
         "ico": "🔎",
         "c": "s",
         "py": "zhè gè kǎochá xiǎozǔ",
         "hv": "_ cá khảo sát tiểu tổ"
        },
        {
         "t": "由五位专家和两位记者",
         "ico": "👨‍🔬",
         "c": "v",
         "py": "yóu wǔ wèi zhuānjiā hé liǎng wèi jìzhě",
         "hv": "do ngũ vị chuyên gia hoà lưỡng vị kí _"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "考察",
       "py": "Zhè gè kǎochá xiǎozǔ yóu wǔ wèi zhuānjiā hé liǎng wèi jìzhě zǔchéng",
       "traceKey": "kaocha"
      },
      {
       "scene": "⛰️🧗👥",
       "full": "这支登山队由二十多个年轻人组成",
       "vi": "Đội leo núi này gồm hơn hai mươi bạn trẻ",
       "parts": [
        {
         "t": "这支登山队",
         "ico": "⛰️",
         "c": "s",
         "py": "zhè zhī dēngshān duì",
         "hv": "_ chi đăng sơn đội"
        },
        {
         "t": "由二十多个年轻人",
         "ico": "🧗",
         "c": "v",
         "py": "yóu èr shí duō gè niánqīng rén",
         "hv": "do nhì thập đa cá nên khinh nhân"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "登山",
       "py": "Zhè zhī dēngshān duì yóu èr shí duō gè niánqīng rén zǔchéng",
       "traceKey": "dengshan"
      },
      {
       "scene": "🍸🍢🛣️",
       "full": "这条街由很多酒吧和小吃店组成",
       "vi": "Con phố này gồm rất nhiều quán bar và quán ăn vặt",
       "parts": [
        {
         "t": "这条街",
         "ico": "🛣️",
         "c": "s",
         "py": "zhè tiáo jiē",
         "hv": "_ điều _"
        },
        {
         "t": "由很多酒吧和小吃店",
         "ico": "🍸",
         "c": "v",
         "py": "yóu hěn duō jiǔbā hé xiǎochī diàn",
         "hv": "do _ đa _ và hoà tiểu khật điếm"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "酒吧",
       "py": "Zhè tiáo jiē yóu hěn duō jiǔbā hé xiǎochī diàn zǔchéng",
       "traceKey": "jiuba"
      },
      {
       "scene": "🎬📷🧩",
       "full": "这部电影由很多长镜头组成",
       "vi": "Bộ phim này gồm rất nhiều cảnh quay dài",
       "parts": [
        {
         "t": "这部电影",
         "ico": "🎬",
         "c": "s",
         "py": "zhè bù diànyǐng",
         "hv": "_ bộ _ ảnh"
        },
        {
         "t": "由很多长镜头",
         "ico": "📷",
         "c": "v",
         "py": "yóu hěn duō cháng jìngtóu",
         "hv": "do _ đa trường kẻng đầu"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "镜头",
       "py": "Zhè bù diànyǐng yóu hěn duō cháng jìngtóu zǔchéng",
       "traceKey": "jingtou"
      },
      {
       "scene": "📝🏨🧩",
       "full": "这张登记表格由三个部分组成",
       "vi": "Tờ khai đăng ký này gồm ba phần",
       "parts": [
        {
         "t": "这张登记表格",
         "ico": "📝",
         "c": "s",
         "py": "zhè zhāng dēngjì biǎogé",
         "hv": "_ trương đăng kí biểu cách"
        },
        {
         "t": "由三个部分",
         "ico": "3️⃣",
         "c": "v",
         "py": "yóu sān gè bùfen",
         "hv": "do tam cá bộ phân"
        },
        {
         "t": "组成",
         "ico": "🧩",
         "c": "o",
         "py": "zǔchéng",
         "hv": "tổ thành"
        }
       ],
       "traceWord": "登记",
       "py": "Zhè zhāng dēngjì biǎogé yóu sān gè bùfen zǔchéng",
       "traceKey": "dengji"
      }
     ],
     "qaList": [
      {
       "q": "你喜欢在旅行的时候拍照吗？",
       "qvi": "Bạn có thích chụp ảnh khi đi du lịch không?",
       "scene": "🧳📷🏞️",
       "ans": "我最爱拍风景",
       "opts": [
        {
         "txt": "我最爱吃面包",
         "ico": "🍞",
         "py": "Wǒ zuì ài chī miànbāo"
        },
        {
         "txt": "我最爱拍风景",
         "ico": "🏞️",
         "py": "Wǒ zuì ài pāi fēngjǐng"
        },
        {
         "txt": "我最爱听音乐",
         "ico": "🎵",
         "py": "Wǒ zuì ài tīng yīnyuè"
        }
       ],
       "qpy": "Nǐ xǐhuan zài lǚxíng de shíhou pāizhào ma?"
      },
      {
       "q": "请问你现在居住在哪个城市？",
       "qvi": "Xin hỏi hiện giờ bạn sống ở thành phố nào?",
       "scene": "🏠🏙️❓",
       "ans": "我居住在河内",
       "opts": [
        {
         "txt": "我今天坐地铁上班",
         "ico": "🚇",
         "py": "Wǒ jīntiān zuò dìtiě shàngbān"
        },
        {
         "txt": "明天我们一起登上那座山",
         "ico": "⛰️",
         "py": "Míngtiān wǒmen yīqǐ dēng shàng nà zuò shān"
        },
        {
         "txt": "我居住在河内",
         "ico": "🏠",
         "py": "Wǒ jūzhù zài Hénèi"
        }
       ],
       "qpy": "Qǐngwèn nǐ xiànzài jūzhù zài nǎ gè chéngshì?"
      },
      {
       "q": "这里的居民有什么风俗？",
       "qvi": "Cư dân ở đây có phong tục gì?",
       "scene": "👨‍👩‍👧🎎❓",
       "ans": "他们过节的时候喜欢唱歌",
       "opts": [
        {
         "txt": "我想买一条新裙子",
         "ico": "👗",
         "py": "Wǒ xiǎng mǎi yī tiáo xīn qúnzi"
        },
        {
         "txt": "他们过节的时候喜欢唱歌",
         "ico": "🎤",
         "py": "Tāmen guò jié de shíhou xǐhuan chànggē"
        },
        {
         "txt": "他们的车是红色的",
         "ico": "🚗",
         "py": "Tāmen de chē shì hóngsè de"
        }
       ],
       "qpy": "Zhèlǐ de jūmín yǒu shénme fēngsú?"
      },
      {
       "q": "你最喜欢旅行中的哪个情景？",
       "qvi": "Bạn thích cảnh nào nhất trong chuyến đi?",
       "scene": "🧳🌅❓",
       "ans": "我最喜欢在海边看月亮",
       "opts": [
        {
         "txt": "我昨天买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "我的手机坏了",
         "ico": "📱",
         "py": "Wǒ de shǒujī huài le"
        },
        {
         "txt": "我最喜欢在海边看月亮",
         "ico": "🌙",
         "py": "Wǒ zuì xǐhuan zài hǎi biān kàn yuèliang"
        }
       ],
       "qpy": "Nǐ zuì xǐhuan lǚxíng zhōng de nǎ gè qíngjǐng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đặt tour và giới thiệu chuyến đi",
      "steps": [
       "<b>Bước 1:</b> Gọi hoặc nhắn tin cho công ty du lịch để đặt chỗ: nói số người, ngày đi, và hỏi về hướng dẫn viên. Dùng <i>\"我想预订一个旅行团。\"</i> và hỏi đoàn gồm những ai.",
       "<b>Bước 2:</b> Trình bày với sếp kế hoạch chuyến khảo sát hoặc du lịch công ty: chi phí gồm những khoản nào, đoàn gồm mấy người. Dùng 由……组成 ít nhất 3 câu, ví dụ <i>\"这次旅行的费用由机票和酒店预订费组成。\"</i>",
       "<b>Bước 3:</b> Nói thành tiếng về nơi bạn sống hoặc một chuyến đi đã qua: cư dân, phong tục, phong cảnh bạn thích chụp ảnh nhất. Dùng <i>\"我最爱拍风景。\"</i> và nói thêm 2 câu."
      ]
     }
    }
   ]
  },
  "4.7": {
   "lessons": [
    {
     "id": "4.7A",
     "name": "Bài 4.7A: Xin việc, phỏng vấn và các nghề nghiệp",
     "grammar": {
      "formulas": [
       "🏢 公司 + 📣 请/让/派 + 🧑 某人 + 🎯 做某事",
       "👥 大家 + 💭 称/叫/认为 + 🧑 某人 + 🌟 为…"
      ],
      "tip": "Câu kiêm ngữ: động từ thứ nhất là 请 (qǐng, thỉnh), 让 (ràng, nhượng), 叫 (jiào), 派 (pài, phái), tân ngữ của nó đồng thời là chủ ngữ của động từ sau: 公司让我来面试. Khi khen/chê/gọi tên dùng 称…为… hoặc 认为… (nhận định).",
      "vn_tip": "Người Việt hay bỏ 让/请 mà nói thẳng \"公司我来面试\", hoặc đặt phủ định sai chỗ. Đúng: phủ định đứng trước động từ thứ nhất, ví dụ 公司没让我来面试, không nói 公司让我没来面试."
     },
     "chunks": [
      {
       "scene": "🏢🧑💼",
       "full": "公司让我下周来面试",
       "vi": "Công ty bảo tôi tuần sau đến phỏng vấn",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "让",
         "ico": "📣",
         "c": "v",
         "py": "ràng",
         "hv": "nhường"
        },
        {
         "t": "我下周来面试",
         "ico": "🧑💼",
         "c": "o",
         "py": "wǒ xià zhōu lái miànshì",
         "hv": "ngã hạ chu lai _ thí"
        }
       ],
       "traceWord": "面试",
       "py": "Gōngsī ràng wǒ xià zhōu lái miànshì",
       "traceKey": "mianshi"
      },
      {
       "scene": "👔📄😕",
       "full": "经理批评小王的简历写得不好",
       "vi": "Giám đốc chê bản lý lịch của Tiểu Vương viết chưa tốt",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "批评",
         "ico": "😕",
         "c": "v",
         "py": "pīpíng",
         "hv": "phê bình"
        },
        {
         "t": "小王的简历写得不好",
         "ico": "📄",
         "c": "o",
         "py": "Xiǎowáng de jiǎnlì xiě dé bù hǎo",
         "hv": "tiểu vương đích giản _ tả đắc bất háo"
        }
       ],
       "traceWord": "简历",
       "py": "Jīnglǐ pīpíng Xiǎowáng de jiǎnlì xiě dé bù hǎo",
       "traceKey": "jianli"
      },
      {
       "scene": "👥🏅🧮",
       "full": "他们都称他为最出色的会计",
       "vi": "Họ đều gọi anh ấy là kế toán xuất sắc nhất",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha món"
        },
        {
         "t": "都称他为",
         "ico": "🏅",
         "c": "v",
         "py": "dōu chēng tā wèi",
         "hv": "đô xưng tha _"
        },
        {
         "t": "最出色的会计",
         "ico": "🧮",
         "c": "o",
         "py": "zuì chūsè de kuàijì",
         "hv": "tối xuất sắc đích hội kể"
        }
       ],
       "traceWord": "会计",
       "py": "Tāmen dōu chēng tā wèi zuì chūsè de kuàijì",
       "traceKey": "kuaiji"
      },
      {
       "scene": "👔🧑💼🏦💳",
       "full": "老板派秘书去银行申请信用卡",
       "vi": "Sếp cử thư ký đến ngân hàng đăng ký thẻ tín dụng",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão ván"
        },
        {
         "t": "派",
         "ico": "📣",
         "c": "v",
         "py": "pài",
         "hv": "phái"
        },
        {
         "t": "秘书去银行申请信用卡",
         "ico": "🏦",
         "c": "o",
         "py": "mìshū qù yínháng shēnqǐng xìnyòngkǎ",
         "hv": "_ thư khứ ngân hàng _ thỉnh tín dụng _"
        }
       ],
       "traceWord": "申请",
       "py": "Lǎobǎn pài mìshū qù yínháng shēnqǐng xìnyòngkǎ",
       "traceKey": "shenqing"
      },
      {
       "scene": "🏢⚖️🤝",
       "full": "公司请一位律师担任我们的代表",
       "vi": "Công ty mời một luật sư làm đại diện của chúng tôi",
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
         "ico": "🤝",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "一位律师担任我们的代表",
         "ico": "⚖️",
         "c": "o",
         "py": "yī wèi lǜshī dānrèn wǒmen de dàibiǎo",
         "hv": "nhất vị luật sư đảm nhậm ngã món đích đại biểu"
        }
       ],
       "traceWord": "律师",
       "py": "Gōngsī qǐng yī wèi lǜshī dānrèn wǒmen de dàibiǎo",
       "traceKey": "lushi"
      },
      {
       "scene": "👥💭🌙💻",
       "full": "大家都认为这个行业的加班太多了",
       "vi": "Mọi người đều cho rằng ngành này tăng ca quá nhiều",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都认为",
         "ico": "💭",
         "c": "v",
         "py": "dōu rènwéi",
         "hv": "đô nhận _"
        },
        {
         "t": "这个行业的加班太多了",
         "ico": "🌙",
         "c": "o",
         "py": "zhè gè hángyè de jiābān tài duō le",
         "hv": "_ cá hàng nghiệp đích gia ban thái đa liễu"
        }
       ],
       "traceWord": "行业",
       "py": "Dàjiā dōu rènwéi zhè gè hángyè de jiābān tài duō le",
       "traceKey": "hangye"
      },
      {
       "scene": "🏛️✅🎓",
       "full": "这家机构录取了很多本科毕业生",
       "vi": "Cơ quan này đã tuyển rất nhiều sinh viên đại học vừa tốt nghiệp",
       "parts": [
        {
         "t": "这家机构",
         "ico": "🏛️",
         "c": "s",
         "py": "zhè jiā jīgòu",
         "hv": "_ gia cơ _"
        },
        {
         "t": "录取了",
         "ico": "✅",
         "c": "v",
         "py": "lùqǔ le",
         "hv": "_ thủ liễu"
        },
        {
         "t": "很多本科毕业生",
         "ico": "🎓",
         "c": "o",
         "py": "hěn duō běnkē bìyèshēng",
         "hv": "_ đa bản khoa tất nghiệp sinh"
        }
       ],
       "traceWord": "录取",
       "py": "Zhè jiā jīgòu lùqǔ le hěn duō běnkē bìyèshēng",
       "traceKey": "luqu"
      },
      {
       "scene": "😟🧑🤝🧑💼",
       "full": "失业的小李请朋友介绍了一份新工作",
       "vi": "Tiểu Lý đang thất nghiệp nhờ bạn giới thiệu một công việc mới",
       "parts": [
        {
         "t": "失业的小李",
         "ico": "😟",
         "c": "s",
         "py": "shīyè de Xiǎolǐ",
         "hv": "thất nghiệp đích tiểu lí"
        },
        {
         "t": "请",
         "ico": "🤝",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "朋友介绍了一份新工作",
         "ico": "💼",
         "c": "o",
         "py": "péngyou jièshào le yī fèn xīn gōngzuò",
         "hv": "bằng hữu giới thiệu liễu nhất phần tân công tác"
        }
       ],
       "traceWord": "失业",
       "py": "Shīyè de Xiǎolǐ qǐng péngyou jièshào le yī fèn xīn gōngzuò",
       "traceKey": "shiye"
      }
     ],
     "qaList": [
      {
       "q": "你什么时候大学毕业？",
       "qvi": "Khi nào bạn tốt nghiệp đại học?",
       "scene": "🎓📅",
       "ans": "我明年毕业",
       "opts": [
        {
         "txt": "我明年毕业",
         "ico": "🎓",
         "py": "Wǒ míngnián bìyè"
        },
        {
         "txt": "我家在北京",
         "ico": "🏠",
         "py": "Wǒ jiā zài Běijīng"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Nǐ shénme shíhou dàxué bìyè?"
      },
      {
       "q": "谁让你下班以后加班？",
       "qvi": "Ai bảo bạn tan làm rồi còn tăng ca?",
       "scene": "🌙💻👔",
       "ans": "经理让我加班",
       "opts": [
        {
         "txt": "我坐地铁上班",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě shàngbān"
        },
        {
         "txt": "他是我的同学",
         "ico": "🧑🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "经理让我加班",
         "ico": "👔",
         "py": "Jīnglǐ ràng wǒ jiābān"
        }
       ],
       "qpy": "Shéi ràng nǐ xiàbān yǐhòu jiābān?"
      },
      {
       "q": "这家企业需要什么人？",
       "qvi": "Doanh nghiệp này cần người như thế nào?",
       "scene": "🏢🔍🧑💼",
       "ans": "需要会计和秘书",
       "opts": [
        {
         "txt": "需要两瓶啤酒",
         "ico": "🍺",
         "py": "Xūyào liǎng píng píjiǔ"
        },
        {
         "txt": "需要会计和秘书",
         "ico": "🧮",
         "py": "Xūyào kuàijì hé mìshū"
        },
        {
         "txt": "在地铁站旁边",
         "ico": "🚇",
         "py": "Zài dìtiězhàn pángbiān"
        }
       ],
       "qpy": "Zhè jiā qǐyè xūyào shénme rén?"
      },
      {
       "q": "你想让谁帮你看简历？",
       "qvi": "Bạn muốn nhờ ai xem giúp lý lịch?",
       "scene": "📄👀🧑🤝🧑",
       "ans": "我想让朋友帮我看",
       "opts": [
        {
         "txt": "我想去北京玩儿",
         "ico": "🧳",
         "py": "Wǒ xiǎng qù Běijīng wánr"
        },
        {
         "txt": "昨天天气很好",
         "ico": "☀️",
         "py": "Zuótiān tiānqì hěn hǎo"
        },
        {
         "txt": "我想让朋友帮我看",
         "ico": "🧑🤝🧑",
         "py": "Wǒ xiǎng ràng péngyou bāng wǒ kàn"
        }
       ],
       "qpy": "Nǐ xiǎng ràng shéi bāng nǐ kàn jiǎnlì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị phỏng vấn xin việc",
      "steps": [
       "<b>Bước 1:</b> Viết ra giấy 3 câu giới thiệu bản thân bằng tiếng Trung (học vấn, nghề nghiệp, mong muốn), dùng <i>\"我想申请这个工作\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một người bạn: nhờ bạn xem giúp lý lịch bằng cách nói <i>\"我想请你帮我看简历\"</i>, rồi kể công ty nào đã bảo bạn đến phỏng vấn: <i>\"公司让我下周来面试\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 1 phút như đang trả lời nhà tuyển dụng: kể về công việc cũ, lý do muốn đổi việc và nói mọi người thường gọi bạn là gì trong công ty."
      ]
     }
    },
    {
     "id": "4.7B",
     "name": "Bài 4.7B: Giao tiếp và thao tác ở văn phòng",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 是 + 💬 不会同意 + 📌 的",
       "🧑 我 + ⚡ 是 + 💭 支持/相信/希望 + 🧑 你 + 📌 的"
      ],
      "tip": "Cấu trúc 是……的 (shì…de) để nhấn mạnh quan điểm, thái độ, sự chắc chắn: 是 đứng trước động từ/cụm động từ chính, 的 ở cuối câu. Hay đi với 会, 想, 希望, 支持, 相信: 我是支持你的.",
      "vn_tip": "Người Việt hay bỏ 的 ở cuối câu hoặc tưởng 是……的 chỉ dùng cho việc đã xảy ra. Khi muốn nói \"Tôi sẽ không quên đâu\" phải nói 我是不会忘记的; phủ định đặt sau 是, không nói 我不是会忘记的."
     },
     "chunks": [
      {
       "scene": "👔📧✅",
       "full": "经理是一定会回复你的",
       "vi": "Giám đốc nhất định sẽ trả lời bạn",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "是一定会",
         "ico": "✅",
         "c": "v",
         "py": "shì yīdìng huì",
         "hv": "thị nhất định hội"
        },
        {
         "t": "回复你的",
         "ico": "📧",
         "c": "o",
         "py": "huífù nǐ de",
         "hv": "hồi hạ nể đích"
        }
       ],
       "traceWord": "回复",
       "py": "Jīnglǐ shì yīdìng huì huífù nǐ de",
       "traceKey": "huifu"
      },
      {
       "scene": "🧑⏰📢",
       "full": "小王是不会忘记提醒大家的",
       "vi": "Tiểu Vương sẽ không quên nhắc mọi người đâu",
       "parts": [
        {
         "t": "小王",
         "ico": "🧑",
         "c": "s",
         "py": "Xiǎowáng",
         "hv": "tiểu vương"
        },
        {
         "t": "是不会忘记",
         "ico": "🚫",
         "c": "v",
         "py": "shì bú huì wàngjì",
         "hv": "thị bất hội vong kí"
        },
        {
         "t": "提醒大家的",
         "ico": "⏰",
         "c": "o",
         "py": "tíxǐng dàjiā de",
         "hv": "đề tỉnh đại gia đích"
        }
       ],
       "traceWord": "提醒",
       "py": "Xiǎowáng shì bú huì wàngjì tíxǐng dàjiā de",
       "traceKey": "tixing"
      },
      {
       "scene": "🧑💳🤝",
       "full": "我是支持你把名片交给客人的",
       "vi": "Tôi ủng hộ việc bạn đưa danh thiếp cho khách",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "是支持",
         "ico": "👍",
         "c": "v",
         "py": "shì zhīchí",
         "hv": "thị chi trì"
        },
        {
         "t": "你把名片交给客人的",
         "ico": "💳",
         "c": "o",
         "py": "nǐ bǎ míngpiàn jiāo gěi kèrén de",
         "hv": "nể bã danh phiến giao cấp khách nhân đích"
        }
       ],
       "traceWord": "名片",
       "py": "Wǒ shì zhīchí nǐ bǎ míngpiàn jiāo gěi kèrén de",
       "traceKey": "mingpian"
      },
      {
       "scene": "👥💭🧑💪",
       "full": "大家都觉得小李是非常能干的",
       "vi": "Mọi người đều thấy Tiểu Lý rất giỏi giang",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "都觉得",
         "ico": "💭",
         "c": "v",
         "py": "dōu juéde",
         "hv": "đô giác đắc"
        },
        {
         "t": "小李是非常能干的",
         "ico": "💪",
         "c": "o",
         "py": "Xiǎolǐ shì fēicháng nénggàn de",
         "hv": "tiểu lí thị phi thường năng can đích"
        }
       ],
       "traceWord": "能干",
       "py": "Dàjiā dōu juéde Xiǎolǐ shì fēicháng nénggàn de",
       "traceKey": "nenggan"
      },
      {
       "scene": "🧑💼💻⚙️",
       "full": "这位秘书操作电脑是很熟练的",
       "vi": "Cô thư ký này thao tác máy tính rất thành thạo",
       "parts": [
        {
         "t": "这位秘书",
         "ico": "🧑💼",
         "c": "s",
         "py": "zhè wèi mìshū",
         "hv": "_ vị _ thư"
        },
        {
         "t": "操作电脑",
         "ico": "💻",
         "c": "v",
         "py": "cāozuò diànnǎo",
         "hv": "_ tác _ não"
        },
        {
         "t": "是很熟练的",
         "ico": "⭐",
         "c": "o",
         "py": "shì hěn shúliàn de",
         "hv": "thị _ thục luyện đích"
        }
       ],
       "traceWord": "操作",
       "py": "Zhè wèi mìshū cāozuò diànnǎo shì hěn shúliàn de",
       "traceKey": "caozuo"
      },
      {
       "scene": "👔📋🗣️",
       "full": "经理是希望你按照程序办事再向他汇报的",
       "vi": "Giám đốc muốn bạn làm việc theo quy trình rồi báo cáo lại cho ông ấy",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "是希望",
         "ico": "🙏",
         "c": "v",
         "py": "shì xīwàng",
         "hv": "thị hơi vọng"
        },
        {
         "t": "你按照程序办事再向他汇报的",
         "ico": "📋",
         "c": "o",
         "py": "nǐ ànzhào chéngxù bànshì zài xiàng tā huìbào de",
         "hv": "nể án chiếu trình tựa _ sự tái hướng tha _ báo đích"
        }
       ],
       "traceWord": "汇报",
       "py": "Jīnglǐ shì xīwàng nǐ ànzhào chéngxù bànshì zài xiàng tā huìbào de",
       "traceKey": "huibao"
      },
      {
       "scene": "🧑📚🏢",
       "full": "我是想参考这些资料写出公司背景介绍的",
       "vi": "Tôi muốn tham khảo những tài liệu này để viết phần giới thiệu bối cảnh công ty",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "是想参考",
         "ico": "📚",
         "c": "v",
         "py": "shì xiǎng cānkǎo",
         "hv": "thị tưởng tham khảo"
        },
        {
         "t": "这些资料写出公司背景介绍的",
         "ico": "🏢",
         "c": "o",
         "py": "zhèxiē zīliào xiě chū gōngsī bèijǐng jièshào de",
         "hv": "_ ta _ liệu tả xuất công ti bối cảnh giới thiệu đích"
        }
       ],
       "traceWord": "资料",
       "py": "Wǒ shì xiǎng cānkǎo zhèxiē zīliào xiě chū gōngsī bèijǐng jièshào de",
       "traceKey": "ziliao"
      },
      {
       "scene": "👔🌟🛠️",
       "full": "做经理是需要具备出色的管理技巧的",
       "vi": "Làm quản lý thì cần có kỹ năng quản lý xuất sắc",
       "parts": [
        {
         "t": "做经理",
         "ico": "👔",
         "c": "s",
         "py": "zuò jīnglǐ",
         "hv": "_ kinh lí"
        },
        {
         "t": "是需要具备",
         "ico": "🛠️",
         "c": "v",
         "py": "shì xūyào jùbèi",
         "hv": "thị _ yếu cụ bị"
        },
        {
         "t": "出色的管理技巧的",
         "ico": "🌟",
         "c": "o",
         "py": "chūsè de guǎnlǐ jìqiǎo de",
         "hv": "xuất sắc đích quản lí kĩ xảo đích"
        }
       ],
       "traceWord": "技巧",
       "py": "Zuò jīnglǐ shì xūyào jùbèi chūsè de guǎnlǐ jìqiǎo de",
       "traceKey": "jiqiao"
      }
     ],
     "qaList": [
      {
       "q": "你会转告他吗？",
       "qvi": "Bạn sẽ chuyển lời cho anh ấy chứ?",
       "scene": "🗣️📩",
       "ans": "我是一定会转告他的",
       "opts": [
        {
         "txt": "我明天去超市",
         "ico": "🛒",
         "py": "Wǒ míngtiān qù chāoshì"
        },
        {
         "txt": "我是一定会转告他的",
         "ico": "🗣️",
         "py": "Wǒ shì yīdìng huì zhuǎngào tā de"
        },
        {
         "txt": "他住在北京",
         "ico": "🏙️",
         "py": "Tā zhù zài Běijīng"
        }
       ],
       "qpy": "Nǐ huì zhuǎngào tā ma?"
      },
      {
       "q": "你觉得他的工作态度怎么样？",
       "qvi": "Bạn thấy thái độ làm việc của anh ấy thế nào?",
       "scene": "🧑💼🤔",
       "ans": "我觉得他是很认真的",
       "opts": [
        {
         "txt": "我觉得他是很认真的",
         "ico": "👍",
         "py": "Wǒ juéde tā shì hěn rènzhēn de"
        },
        {
         "txt": "他今天穿了蓝色的衣服",
         "ico": "👔",
         "py": "Tā jīntiān chuān le lánsè de yīfu"
        },
        {
         "txt": "我们明天去北京",
         "ico": "🧳",
         "py": "Wǒmen míngtiān qù Běijīng"
        }
       ],
       "qpy": "Nǐ juéde tā de gōngzuò tàidù zěnmeyàng?"
      },
      {
       "q": "你为什么要带这么多名片？",
       "qvi": "Sao bạn mang nhiều danh thiếp như vậy?",
       "scene": "💳🧑🤝🧑",
       "ans": "我是想多认识一些朋友的",
       "opts": [
        {
         "txt": "我已经吃完饭了",
         "ico": "🍚",
         "py": "Wǒ yǐjīng chī wán fàn le"
        },
        {
         "txt": "这本书很好看",
         "ico": "📖",
         "py": "Zhè běn shū hěn hǎokàn"
        },
        {
         "txt": "我是想多认识一些朋友的",
         "ico": "🤝",
         "py": "Wǒ shì xiǎng duō rènshi yīxiē péngyou de"
        }
       ],
       "qpy": "Nǐ wèi shénme yào dài zhème duō míngpiàn?"
      },
      {
       "q": "谁能帮我操作这个程序？",
       "qvi": "Ai có thể giúp tôi thao tác chương trình này?",
       "scene": "💻🙋",
       "ans": "小刘是很熟练的",
       "opts": [
        {
         "txt": "小刘是很熟练的",
         "ico": "🙋",
         "py": "Xiǎoliú shì hěn shúliàn de"
        },
        {
         "txt": "我喜欢喝咖啡",
         "ico": "☕",
         "py": "Wǒ xǐhuan hē kāfēi"
        },
        {
         "txt": "下午三点开会",
         "ico": "🕒",
         "py": "Xiàwǔ sān diǎn kāihuì"
        }
       ],
       "qpy": "Shéi néng bāng wǒ cāozuò zhè gè chéngxù?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin và báo cáo công việc",
      "steps": [
       "<b>Bước 1:</b> Soạn tin nhắn cho đồng nghiệp: nhắc họ về một cuộc họp và nhờ chuyển lời cho sếp, dùng <i>\"我是不会忘记提醒大家的\"</i> để cam kết.",
       "<b>Bước 2:</b> Viết 3 câu bày tỏ thái độ của bạn về một đề xuất ở văn phòng, mỗi câu dùng cấu trúc 是……的, ví dụ <i>\"我是支持你的\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 1 phút báo cáo công việc với sếp: bạn đã làm theo quy trình thế nào, tham khảo tài liệu gì, và nhấn mạnh <i>\"我是希望你按照程序办事的\"</i>."
      ]
     }
    },
    {
     "id": "4.7C",
     "name": "Bài 4.7C: Trách nhiệm, quyền lợi và vai trò trong công việc",
     "grammar": {
      "formulas": [
       "🏢 公司 + 🔧 召开 + 📅 的 + 🔢 第一次 + 🎪 大会",
       "👔 新来的 + 👔 经理 + ⚡ 承担了 + 🏢 公司 + 🎯 最重要的 + 📌 责任"
      ],
      "tip": "Định ngữ nhiều tầng: các thành phần bổ nghĩa xếp trước danh từ trung tâm, mỗi tầng thường có 的; thứ tự thường là người/nơi sở hữu, rồi mệnh đề, rồi số lượng, rồi tính chất: 公司最重要的责任. Càng gần danh từ trung tâm thì ý nghĩa càng gắn chặt với nó.",
      "vn_tip": "Tiếng Việt đặt định ngữ sau danh từ (\"trách nhiệm quan trọng nhất của công ty\"), còn tiếng Trung đặt TRƯỚC danh từ và thêm 的: 公司最重要的责任. Người Việt hay đảo thành 责任最重要的公司, sai nghĩa."
     },
     "chunks": [
      {
       "scene": "🏢📣🎪",
       "full": "这是公司召开的第一次大会",
       "vi": "Đây là đại hội đầu tiên mà công ty tổ chức",
       "parts": [
        {
         "t": "这",
         "ico": "👉",
         "c": "s",
         "py": "zhè",
         "hv": "_"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "公司召开的第一次大会",
         "ico": "🎪",
         "c": "o",
         "py": "gōngsī zhàokāi de dì yī cì dàhuì",
         "hv": "công ti chịu khai đích đệ nhất thứ đại hội"
        }
       ],
       "traceWord": "召开",
       "py": "Zhè shì gōngsī zhàokāi de dì yī cì dàhuì",
       "traceKey": "zhaokai"
      },
      {
       "scene": "🧑🧑🗳️⚖️",
       "full": "每个员工都有参与公司决定的权利",
       "vi": "Mỗi nhân viên đều có quyền tham gia vào quyết định của công ty",
       "parts": [
        {
         "t": "每个员工",
         "ico": "🧑🧑",
         "c": "s",
         "py": "měi gè yuángōng",
         "hv": "mỗi cá viên công"
        },
        {
         "t": "都有",
         "ico": "✋",
         "c": "v",
         "py": "dōu yǒu",
         "hv": "đô hữu"
        },
        {
         "t": "参与公司决定的权利",
         "ico": "⚖️",
         "c": "o",
         "py": "cānyù gōngsī juédìng de quánlì",
         "hv": "tham dữ công ti quyết định đích quyền lợi"
        }
       ],
       "traceWord": "权利",
       "py": "Měi gè yuángōng dōu yǒu cānyù gōngsī juédìng de quánlì",
       "traceKey": "quanli"
      },
      {
       "scene": "👔🆕🎒📌",
       "full": "新来的经理承担了公司最重要的责任",
       "vi": "Giám đốc mới đến gánh vác trách nhiệm quan trọng nhất của công ty",
       "parts": [
        {
         "t": "新来的经理",
         "ico": "👔",
         "c": "s",
         "py": "xīn lái de jīnglǐ",
         "hv": "tân lai đích kinh lí"
        },
        {
         "t": "承担了",
         "ico": "🎒",
         "c": "v",
         "py": "chéngdān le",
         "hv": "thừa đảm liễu"
        },
        {
         "t": "公司最重要的责任",
         "ico": "📌",
         "c": "o",
         "py": "gōngsī zuì zhòngyào de zérèn",
         "hv": "công ti tối trọng yếu đích trách nhậm"
        }
       ],
       "traceWord": "承担",
       "py": "Xīn lái de jīnglǐ chéngdān le gōngsī zuì zhòngyào de zérèn",
       "traceKey": "chengdan"
      },
      {
       "scene": "🧑💪🏢🙏",
       "full": "为公司付出最多的员工得到了大家的感谢",
       "vi": "Nhân viên cống hiến nhiều nhất cho công ty nhận được lời cảm ơn của mọi người",
       "parts": [
        {
         "t": "为公司付出最多的员工",
         "ico": "💪",
         "c": "s",
         "py": "wèi gōngsī fùchū zuì duō de yuángōng",
         "hv": "_ công ti phó xuất tối đa đích viên công"
        },
        {
         "t": "得到了",
         "ico": "🎁",
         "c": "v",
         "py": "dédào le",
         "hv": "đắc đáo liễu"
        },
        {
         "t": "大家的感谢",
         "ico": "🙏",
         "c": "o",
         "py": "dàjiā de gǎnxiè",
         "hv": "đại gia đích cảm tạ"
        }
       ],
       "traceWord": "付出",
       "py": "Wèi gōngsī fùchū zuì duō de yuángōng dédào le dàjiā de gǎnxiè",
       "traceKey": "fuchu"
      },
      {
       "scene": "👶💰🏠😓",
       "full": "孩子的学费是这个家庭最大的负担",
       "vi": "Học phí của con là gánh nặng lớn nhất của gia đình này",
       "parts": [
        {
         "t": "孩子的学费",
         "ico": "👶",
         "c": "s",
         "py": "háizi de xuéfèi",
         "hv": "hài tí đích học phí"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "这个家庭最大的负担",
         "ico": "😓",
         "c": "o",
         "py": "zhè gè jiātíng zuì dà de fùdān",
         "hv": "_ cá gia đình tối đại đích phụ đảm"
        }
       ],
       "traceWord": "负担",
       "py": "Háizi de xuéfèi shì zhè gè jiātíng zuì dà de fùdān",
       "traceKey": "fudan"
      },
      {
       "scene": "🧑💼📋😴",
       "full": "员工有认真工作的义务也有休息的权利",
       "vi": "Nhân viên có nghĩa vụ làm việc nghiêm túc và cũng có quyền được nghỉ ngơi",
       "parts": [
        {
         "t": "员工",
         "ico": "🧑💼",
         "c": "s",
         "py": "yuángōng",
         "hv": "viên công"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "认真工作的义务也有休息的权利",
         "ico": "⚖️",
         "c": "o",
         "py": "rènzhēn gōngzuò de yìwù yě yǒu xiūxi de quánlì",
         "hv": "nhận chân công tác đích nghĩa vụ dã hữu hưu tức đích quyền lợi"
        }
       ],
       "traceWord": "义务",
       "py": "Yuángōng yǒu rènzhēn gōngzuò de yìwù yě yǒu xiūxi de quánlì",
       "traceKey": "yiwu"
      },
      {
       "scene": "🎪👥📍🕗",
       "full": "出席大会的人请八点在门口集合",
       "vi": "Những người dự đại hội xin tám giờ tập trung ở cửa",
       "parts": [
        {
         "t": "出席大会的人",
         "ico": "👥",
         "c": "s",
         "py": "chūxí dàhuì de rén",
         "hv": "xuất _ đại hội đích nhân"
        },
        {
         "t": "请",
         "ico": "🙏",
         "c": "v",
         "py": "qǐng",
         "hv": "thỉnh"
        },
        {
         "t": "八点在门口集合",
         "ico": "📍",
         "c": "o",
         "py": "bā diǎn zài ménkǒu jíhé",
         "hv": "bát điểm tại môn khẩu tập hợp"
        }
       ],
       "traceWord": "集合",
       "py": "Chūxí dàhuì de rén qǐng bā diǎn zài ménkǒu jíhé",
       "traceKey": "jihe"
      },
      {
       "scene": "👔🎬🏢🛠️",
       "full": "经理的角色是指挥员工维持公司正常工作",
       "vi": "Vai trò của giám đốc là điều hành nhân viên giữ cho công việc công ty vận hành bình thường",
       "parts": [
        {
         "t": "经理的角色",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ de juésè",
         "hv": "kinh lí đích góc sắc"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "指挥员工维持公司正常工作",
         "ico": "🏢",
         "c": "o",
         "py": "zhǐhuī yuángōng wéichí gōngsī zhèngcháng gōngzuò",
         "hv": "chỉ huy viên công _ trì công ti chính thường công tác"
        }
       ],
       "traceWord": "角色",
       "py": "Jīnglǐ de juésè shì zhǐhuī yuángōng wéichí gōngsī zhèngcháng gōngzuò",
       "traceKey": "juese"
      }
     ],
     "qaList": [
      {
       "q": "这次会议的内容包括什么？",
       "qvi": "Nội dung cuộc họp lần này gồm những gì?",
       "scene": "📋🎪",
       "ans": "包括工作汇报和讨论",
       "opts": [
        {
         "txt": "我昨天去了图书馆",
         "ico": "📚",
         "py": "Wǒ zuótiān qù le túshūguǎn"
        },
        {
         "txt": "包括工作汇报和讨论",
         "ico": "📋",
         "py": "Bāokuò gōngzuò huìbào hé tǎolùn"
        },
        {
         "txt": "北京的冬天很冷",
         "ico": "❄️",
         "py": "Běijīng de dōngtiān hěn lěng"
        }
       ],
       "qpy": "Zhè cì huìyì de nèiróng bāokuò shénme?"
      },
      {
       "q": "这个价格包含服务费吗？",
       "qvi": "Giá này đã bao gồm phí dịch vụ chưa?",
       "scene": "💰🧾❓",
       "ans": "已经包含服务费了",
       "opts": [
        {
         "txt": "已经包含服务费了",
         "ico": "🧾",
         "py": "Yǐjīng bāohán fúwù fèi le"
        },
        {
         "txt": "我想去超市买东西",
         "ico": "🛒",
         "py": "Wǒ xiǎng qù chāoshì mǎi dōngxi"
        },
        {
         "txt": "他是我最好的朋友",
         "ico": "🧑🤝🧑",
         "py": "Tā shì wǒ zuìhǎo de péngyou"
        }
       ],
       "qpy": "Zhè gè jiàgé bāohán fúwù fèi ma?"
      },
      {
       "q": "你最关心什么？",
       "qvi": "Bạn quan tâm nhất điều gì?",
       "scene": "🧑💭⚖️",
       "ans": "我最关心员工的利益",
       "opts": [
        {
         "txt": "他在银行工作",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        },
        {
         "txt": "我最关心员工的利益",
         "ico": "⚖️",
         "py": "Wǒ zuì guānxīn yuángōng de lìyì"
        }
       ],
       "qpy": "Nǐ zuì guānxīn shénme?"
      },
      {
       "q": "你在这家公司担任什么角色？",
       "qvi": "Bạn giữ vai trò gì trong công ty này?",
       "scene": "🏢🎬🧑💼",
       "ans": "我担任会计",
       "opts": [
        {
         "txt": "我每天走路回家",
         "ico": "🚶",
         "py": "Wǒ měi tiān zǒulù huí jiā"
        },
        {
         "txt": "我担任会计",
         "ico": "🧮",
         "py": "Wǒ dānrèn kuàijì"
        },
        {
         "txt": "今年冬天不太冷",
         "ico": "🌤️",
         "py": "Jīnnián dōngtiān bù tài lěng"
        }
       ],
       "qpy": "Nǐ zài zhè jiā gōngsī dānrèn shénme juésè?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Họp nhóm và phân chia trách nhiệm",
      "steps": [
       "<b>Bước 1:</b> Viết lịch họp ngắn gửi đồng nghiệp: thông báo giờ và nơi tập trung bằng <i>\"出席大会的人请八点在门口集合\"</i>.",
       "<b>Bước 2:</b> Liệt kê 3 trách nhiệm và 2 quyền lợi của vị trí bạn đang làm, mỗi câu dùng định ngữ có 的, ví dụ <i>\"每个员工都有参与公司决定的权利\"</i>.",
       "<b>Bước 3:</b> Tự nói thành tiếng 1 phút trước nhóm: giới thiệu vai trò của từng người, ai chỉ huy, ai phụ trách phần nào, và mọi người cần cùng giữ điều gì để công việc suôn sẻ."
      ]
     }
    }
   ]
  },
  "4.8": {
   "lessons": [
    {
     "id": "4.8A",
     "name": "Bài 4.8A: Kế hoạch, quy tắc và kỷ luật",
     "grammar": {
      "formulas": [
       "🏢 公司 + 📋 制订 + 📝 新方案",
       "🚗 早一点儿出发 + 🎯 好 + ✅ 避免堵车",
       "👔 经理 + 📋 制订方针 + 🎯 好 + 💡 让大家有方向"
      ],
      "tip": "Cấu trúc \"A，好 + B\" (hǎo, âm Hán Việt: hảo) nói mục đích của hành động A: làm A để có thể B. Chữ 好 đứng ngay trước vế chỉ mục đích, thường dịch là \"để, cho tiện\". Vế sau thường là điều mong muốn, ví dụ 好避免堵车 (để tránh tắc đường).",
      "vn_tip": "Người Việt hay dùng 为了 ở đầu câu hoặc nói \"A để B\" bằng 来 (来 + động từ). Với 好, KHÔNG đặt trước vế hành động: nói 早一点儿出发，好避免堵车, không nói 好避免堵车，早一点儿出发. Ngoài ra 好 chỉ dùng khi chủ thể tự sắp xếp trước, không dùng cho mục đích đã xảy ra rồi."
     },
     "chunks": [
      {
       "scene": "🏢📋📝",
       "full": "公司制订了新方案",
       "vi": "Công ty đã soạn ra một phương án mới",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "制订了",
         "ico": "📋",
         "c": "v",
         "py": "zhìdìng le",
         "hv": "chế đính liễu"
        },
        {
         "t": "新方案",
         "ico": "📝",
         "c": "o",
         "py": "xīn fāng'àn",
         "hv": "tân phương án"
        }
       ],
       "traceWord": "制订",
       "py": "Gōngsī zhìdìng le xīn fāng'àn",
       "traceKey": "zhiding"
      },
      {
       "scene": "🏢🚭🚫",
       "full": "公司禁止在办公室吸烟",
       "vi": "Công ty cấm hút thuốc trong văn phòng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "禁止",
         "ico": "🚫",
         "c": "v",
         "py": "jìnzhǐ",
         "hv": "cấm chỉ"
        },
        {
         "t": "在办公室吸烟",
         "ico": "🚭",
         "c": "o",
         "py": "zài bàngōngshì xīyān",
         "hv": "tại _ công thất cộp _"
        }
       ],
       "traceWord": "禁止",
       "py": "Gōngsī jìnzhǐ zài bàngōngshì xīyān",
       "traceKey": "jinzhi"
      },
      {
       "scene": "👥⚖️🤝",
       "full": "我们必须坚持原则好保持公平",
       "vi": "Chúng ta phải giữ vững nguyên tắc để duy trì sự công bằng",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "必须坚持原则",
         "ico": "⚖️",
         "c": "v",
         "py": "bìxū jiānchí yuánzé",
         "hv": "tất tua kiên trì nguyên tắc"
        },
        {
         "t": "好保持公平",
         "ico": "🤝",
         "c": "o",
         "py": "hǎo bǎochí gōngpíng",
         "hv": "háo bảo trì công bình"
        }
       ],
       "traceWord": "原则",
       "py": "Wǒmen bìxū jiānchí yuánzé hǎo bǎochí gōngpíng",
       "traceKey": "yuanze"
      },
      {
       "scene": "🚗⏰🚦",
       "full": "我们早一点儿出发好避免堵车",
       "vi": "Chúng ta xuất phát sớm một chút để tránh tắc đường",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "早一点儿出发",
         "ico": "⏰",
         "c": "v",
         "py": "zǎo yīdiǎnr chūfā",
         "hv": "tảo nhất điểm _ xuất _"
        },
        {
         "t": "好避免堵车",
         "ico": "🚦",
         "c": "o",
         "py": "hǎo bìmiǎn dǔchē",
         "hv": "háo tị miễn _ xa"
        }
       ],
       "traceWord": "避免",
       "py": "Wǒmen zǎo yīdiǎnr chūfā hǎo bìmiǎn dǔchē",
       "traceKey": "bimian"
      },
      {
       "scene": "👔📋🧭",
       "full": "经理制订了方针好让大家有方向",
       "vi": "Giám đốc đã đề ra phương châm để mọi người có định hướng",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "制订了方针",
         "ico": "📋",
         "c": "v",
         "py": "zhìdìng le fāngzhēn",
         "hv": "chế đính liễu phương châm"
        },
        {
         "t": "好让大家有方向",
         "ico": "🧭",
         "c": "o",
         "py": "hǎo ràng dàjiā yǒu fāngxiàng",
         "hv": "háo nhường đại gia hữu phương hướng"
        }
       ],
       "traceWord": "方针",
       "py": "Jīnglǐ zhìdìng le fāngzhēn hǎo ràng dàjiā yǒu fāngxiàng",
       "traceKey": "fangzhen"
      },
      {
       "scene": "🏢📜✅",
       "full": "公司实施新规则好维护工作纪律",
       "vi": "Công ty thực hiện quy tắc mới để duy trì kỷ luật làm việc",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "实施新规则",
         "ico": "📜",
         "c": "v",
         "py": "shíshī xīn guīzé",
         "hv": "thực thi tân qui tắc"
        },
        {
         "t": "好维护工作纪律",
         "ico": "✅",
         "c": "o",
         "py": "hǎo wéihù gōngzuò jìlǜ",
         "hv": "háo _ hộ công tác kỉ luật"
        }
       ],
       "traceWord": "纪律",
       "py": "Gōngsī shíshī xīn guīzé hǎo wéihù gōngzuò jìlǜ",
       "traceKey": "jilu"
      },
      {
       "scene": "🧑🌙⏰",
       "full": "他固定晚上十点睡觉好保持生活规律",
       "vi": "Anh ấy ngủ cố định lúc mười giờ tối để giữ nếp sống đều đặn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "固定晚上十点睡觉",
         "ico": "🌙",
         "c": "v",
         "py": "gùdìng wǎnshang shí diǎn shuìjiào",
         "hv": "cố định vãn thượng thập điểm _ giác"
        },
        {
         "t": "好保持生活规律",
         "ico": "⏰",
         "c": "o",
         "py": "hǎo bǎochí shēnghuó guīlǜ",
         "hv": "háo bảo trì sinh hoạt qui luật"
        }
       ],
       "traceWord": "规律",
       "py": "Tā gùdìng wǎnshang shí diǎn shuìjiào hǎo bǎochí shēnghuó guīlǜ",
       "traceKey": "guilu"
      },
      {
       "scene": "🏫🏊🏀",
       "full": "学校设置了很多设施好让学生锻炼身体",
       "vi": "Trường đặt nhiều cơ sở vật chất để học sinh rèn luyện sức khỏe",
       "parts": [
        {
         "t": "学校",
         "ico": "🏫",
         "c": "s",
         "py": "xuéxiào",
         "hv": "học hiệu"
        },
        {
         "t": "设置了",
         "ico": "🏗️",
         "c": "v",
         "py": "shèzhì le",
         "hv": "thết trí liễu"
        },
        {
         "t": "很多设施好让学生锻炼身体",
         "ico": "🏀",
         "c": "o",
         "py": "hěn duō shèshī hǎo ràng xuéshēng duànliàn shēntǐ",
         "hv": "_ đa thết thi háo nhường học sinh _ _ thân thể"
        }
       ],
       "traceWord": "设施",
       "py": "Xuéxiào shèzhì le hěn duō shèshī hǎo ràng xuéshēng duànliàn shēntǐ",
       "traceKey": "sheshi"
      }
     ],
     "qaList": [
      {
       "q": "公司为什么限制用手机？",
       "qvi": "Tại sao công ty hạn chế dùng điện thoại?",
       "scene": "🏢📱🚫",
       "ans": "好让大家提高效率",
       "opts": [
        {
         "txt": "好让大家提高效率",
         "ico": "📈",
         "py": "Hǎo ràng dàjiā tígāo xiàolǜ"
        },
        {
         "txt": "因为天气很冷",
         "ico": "❄️",
         "py": "Yīnwèi tiānqì hěn lěng"
        },
        {
         "txt": "我昨天去北京了",
         "ico": "✈️",
         "py": "Wǒ zuótiān qù Běijīng le"
        }
       ],
       "qpy": "Gōngsī wèi shénme xiànzhì yòng shǒujī?"
      },
      {
       "q": "这个方案的结构怎么样？",
       "qvi": "Cấu trúc của phương án này thế nào?",
       "scene": "📝🧱❓",
       "ans": "结构很清楚",
       "opts": [
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        },
        {
         "txt": "结构很清楚",
         "ico": "🧱",
         "py": "Jiégòu hěn qīngchu"
        },
        {
         "txt": "他明天去上海",
         "ico": "🚄",
         "py": "Tā míngtiān qù Shànghǎi"
        }
       ],
       "qpy": "Zhè gè fāng'àn de jiégòu zěnmeyàng?"
      },
      {
       "q": "你们公司有什么规则？",
       "qvi": "Công ty các bạn có quy tắc gì?",
       "scene": "🏢📜❓",
       "ans": "上班时间不能吸烟",
       "opts": [
        {
         "txt": "我家有三个人",
         "ico": "👨‍👩‍👦",
         "py": "Wǒ jiā yǒu sān gèrén"
        },
        {
         "txt": "今天晚上下雨",
         "ico": "🌧️",
         "py": "Jīntiān wǎnshang xià yǔ"
        },
        {
         "txt": "上班时间不能吸烟",
         "ico": "🚭",
         "py": "Shàngbān shíjiān bù néng xīyān"
        }
       ],
       "qpy": "Nǐmen gōngsī yǒu shénme guīzé?"
      },
      {
       "q": "这个城市的设施怎么样？",
       "qvi": "Cơ sở vật chất của thành phố này thế nào?",
       "scene": "🌆🏗️❓",
       "ans": "设施很好也很方便",
       "opts": [
        {
         "txt": "我们明天开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "他是我的同学",
         "ico": "🎓",
         "py": "Tā shì wǒ de tóngxué"
        },
        {
         "txt": "设施很好也很方便",
         "ico": "🏙️",
         "py": "Shèshī hěn hǎo yě hěn fāngbiàn"
        }
       ],
       "qpy": "Zhè gè chéngshì de shèshī zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đề xuất quy tắc cho nhóm làm việc",
      "steps": [
       "<b>Bước 1:</b> Nghĩ ra 3 quy tắc cho nhóm của bạn (giờ họp, dùng điện thoại, giờ nộp việc) và nói thành tiếng từng quy tắc, ví dụ <i>\"公司禁止在办公室吸烟\"</i>.",
       "<b>Bước 2:</b> Với mỗi quy tắc, nói lý do bằng mẫu \"A，好 B\": <i>\"我们早一点儿出发好避免堵车\"</i>. Tự đặt thêm 3 câu cho tình huống của bạn.",
       "<b>Bước 3:</b> Nhắn tin (hoặc nói thành tiếng như đang họp) cho đồng nghiệp: giới thiệu phương án, nêu nguyên tắc và hỏi ý kiến, dùng <i>\"我们必须坚持原则好保持公平\"</i>."
      ]
     }
    },
    {
     "id": "4.8B",
     "name": "Bài 4.8B: Nâng cao hiệu quả và cải thiện công việc",
     "grammar": {
      "formulas": [
       "🥇 首先 + ⚡ 改正错误 + 🥈 其次 + 📈 提高效率",
       "🏢 公司 + 🥇 首先引进新技术 + 🥈 其次扩大市场",
       "❓ 首先 + 做什么 ？ 其次 + 做什么 ？"
      ],
      "tip": "Cặp \"首先……，其次……\" (shǒuxiān, qícì; âm Hán Việt: thủ tiên, kỳ thứ) dùng để liệt kê ý hoặc bước theo thứ tự: thứ nhất…, thứ hai…. Có thể thêm 最后 (cuối cùng) để thành ba bước. Thường đặt ngay trước động từ của mỗi vế.",
      "vn_tip": "Người Việt hay nói \"thứ nhất, thứ hai\" và dịch thành 第一、第二 ở đầu câu. Trong văn nói tiếng Trung tự nhiên, dùng 首先 + hành động, 其次 + hành động, và chủ ngữ chỉ nói một lần ở đầu: 我们首先改正错误，其次提高效率, không lặp 我们 hai lần."
     },
     "chunks": [
      {
       "scene": "👥✏️📈",
       "full": "我们首先改正错误其次提高效率",
       "vi": "Trước hết chúng ta sửa lỗi, sau đó nâng cao hiệu suất",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "首先改正错误",
         "ico": "✏️",
         "c": "v",
         "py": "shǒuxiān gǎizhèng cuòwù",
         "hv": "thủ tiên _ chính thó _"
        },
        {
         "t": "其次提高效率",
         "ico": "📈",
         "c": "o",
         "py": "qícì tígāo xiàolǜ",
         "hv": "kì thứ đề cao hiệu _"
        }
       ],
       "traceWord": "效率",
       "py": "Wǒmen shǒuxiān gǎizhèng cuòwù qícì tígāo xiàolǜ",
       "traceKey": "xiaolu"
      },
      {
       "scene": "🏢🆕🛒",
       "full": "公司首先引进新技术其次扩大市场",
       "vi": "Công ty trước hết đưa công nghệ mới vào, sau đó mở rộng thị trường",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "首先引进新技术",
         "ico": "🆕",
         "c": "v",
         "py": "shǒuxiān yǐnjìn xīn jìshù",
         "hv": "thủ tiên dẫn tiến tân kĩ thuật"
        },
        {
         "t": "其次扩大市场",
         "ico": "🛒",
         "c": "o",
         "py": "qícì kuòdà shìchǎng",
         "hv": "kì thứ quẳng đại thị trường"
        }
       ],
       "traceWord": "引进",
       "py": "Gōngsī shǒuxiān yǐnjìn xīn jìshù qícì kuòdà shìchǎng",
       "traceKey": "yinjin"
      },
      {
       "scene": "🏢🤝🌐",
       "full": "公司首先改善服务其次扩展经营范围",
       "vi": "Công ty trước hết cải thiện dịch vụ, sau đó mở rộng phạm vi kinh doanh",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "首先改善服务",
         "ico": "🤝",
         "c": "v",
         "py": "shǒuxiān gǎishàn fúwù",
         "hv": "thủ tiên _ thiện phục vụ"
        },
        {
         "t": "其次扩展经营范围",
         "ico": "🌐",
         "c": "o",
         "py": "qícì kuòzhǎn jīngyíng fànwéi",
         "hv": "kì thứ quẳng triển kinh _ _ vè"
        }
       ],
       "traceWord": "扩展",
       "py": "Gōngsī shǒuxiān gǎishàn fúwù qícì kuòzhǎn jīngyíng fànwéi",
       "traceKey": "kuozhan"
      },
      {
       "scene": "👥🔍⚠️",
       "full": "我们首先缩小范围其次降低风险",
       "vi": "Chúng ta trước hết thu hẹp phạm vi, sau đó giảm rủi ro",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "首先缩小范围",
         "ico": "🔍",
         "c": "v",
         "py": "shǒuxiān suōxiǎo fànwéi",
         "hv": "thủ tiên _ tiểu _ vè"
        },
        {
         "t": "其次降低风险",
         "ico": "⚠️",
         "c": "o",
         "py": "qícì jiàngdī fēngxiǎn",
         "hv": "kì thứ giáng đây phong hiểm"
        }
       ],
       "traceWord": "缩小",
       "py": "Wǒmen shǒuxiān suōxiǎo fànwéi qícì jiàngdī fēngxiǎn",
       "traceKey": "suoxiao"
      },
      {
       "scene": "🚧👀🏢",
       "full": "事故首先引起注意其次促使公司改进",
       "vi": "Sự cố trước hết gây chú ý, sau đó thúc đẩy công ty cải tiến",
       "parts": [
        {
         "t": "事故",
         "ico": "🚧",
         "c": "s",
         "py": "shìgù",
         "hv": "sự cố"
        },
        {
         "t": "首先引起注意",
         "ico": "👀",
         "c": "v",
         "py": "shǒuxiān yǐnqǐ zhùyì",
         "hv": "thủ tiên dẫn khởi chú ý"
        },
        {
         "t": "其次促使公司改进",
         "ico": "🏢",
         "c": "o",
         "py": "qícì cùshǐ gōngsī gǎijìn",
         "hv": "kì thứ xúc sứ công ti _ tiến"
        }
       ],
       "traceWord": "促使",
       "py": "Shìgù shǒuxiān yǐnqǐ zhùyì qícì cùshǐ gōngsī gǎijìn",
       "traceKey": "cushi"
      },
      {
       "scene": "😫🤒💼",
       "full": "压力太大首先会导致生病其次会影响工作",
       "vi": "Áp lực quá lớn trước hết sẽ dẫn đến bệnh, sau đó ảnh hưởng công việc",
       "parts": [
        {
         "t": "压力太大",
         "ico": "😫",
         "c": "s",
         "py": "yālì tài dà",
         "hv": "áp lực thái đại"
        },
        {
         "t": "首先会导致生病",
         "ico": "🤒",
         "c": "v",
         "py": "shǒuxiān huì dǎozhì shēngbìng",
         "hv": "thủ tiên hội đạo nhí sinh bệnh"
        },
        {
         "t": "其次会影响工作",
         "ico": "💼",
         "c": "o",
         "py": "qícì huì yǐngxiǎng gōngzuò",
         "hv": "kì thứ hội ảnh hướng công tác"
        }
       ],
       "traceWord": "导致",
       "py": "Yālì tài dà shǒuxiān huì dǎozhì shēngbìng qícì huì yǐngxiǎng gōngzuò",
       "traceKey": "daozhi"
      },
      {
       "scene": "👩‍🏫🧭📚",
       "full": "老师首先引导学生学习其次促进他们交流",
       "vi": "Thầy cô trước hết hướng dẫn học sinh học tập, sau đó thúc đẩy các em giao lưu",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "首先引导学生学习",
         "ico": "🧭",
         "c": "v",
         "py": "shǒuxiān yǐndǎo xuéshēng xuéxí",
         "hv": "thủ tiên dẫn đạo học sinh học tập"
        },
        {
         "t": "其次促进他们交流",
         "ico": "💬",
         "c": "o",
         "py": "qícì cùjìn tāmen jiāoliú",
         "hv": "kì thứ xúc tiến tha món giao lưu"
        }
       ],
       "traceWord": "引导",
       "py": "Lǎoshī shǒuxiān yǐndǎo xuéshēng xuéxí qícì cùjìn tāmen jiāoliú",
       "traceKey": "yindao"
      },
      {
       "scene": "🏃😌😊",
       "full": "运动首先能缓解压力其次能改善心情",
       "vi": "Vận động trước hết giúp giảm áp lực, sau đó cải thiện tâm trạng",
       "parts": [
        {
         "t": "运动",
         "ico": "🏃",
         "c": "s",
         "py": "yùndòng",
         "hv": "vận động"
        },
        {
         "t": "首先能缓解压力",
         "ico": "😌",
         "c": "v",
         "py": "shǒuxiān néng huǎnjiě yālì",
         "hv": "thủ tiên năng _ giải áp lực"
        },
        {
         "t": "其次能改善心情",
         "ico": "😊",
         "c": "o",
         "py": "qícì néng gǎishàn xīnqíng",
         "hv": "kì thứ năng _ thiện tâm tình"
        }
       ],
       "traceWord": "缓解",
       "py": "Yùndòng shǒuxiān néng huǎnjiě yālì qícì néng gǎishàn xīnqíng",
       "traceKey": "huanjie"
      }
     ],
     "qaList": [
      {
       "q": "这个城市的公园分布在哪儿？",
       "qvi": "Các công viên của thành phố này phân bố ở đâu?",
       "scene": "🌆🌳📍",
       "ans": "分布在城市的各个地方",
       "opts": [
        {
         "txt": "我昨天晚上没睡好",
         "ico": "😴",
         "py": "Wǒ zuótiān wǎnshang méi shuì hǎo"
        },
        {
         "txt": "他是一个好老师",
         "ico": "👨‍🏫",
         "py": "Tā shì yī gè hǎo lǎoshī"
        },
        {
         "txt": "分布在城市的各个地方",
         "ico": "🌳",
         "py": "Fēnbù zài chéngshì de gè gè dìfang"
        }
       ],
       "qpy": "Zhè gè chéngshì de gōngyuán fēnbù zài nǎr?"
      },
      {
       "q": "活动结束后大家去哪儿了？",
       "qvi": "Sau khi hoạt động kết thúc mọi người đi đâu rồi?",
       "scene": "🎉👥🏠",
       "ans": "大家分散回家了",
       "opts": [
        {
         "txt": "大家分散回家了",
         "ico": "🏠",
         "py": "Dàjiā fēnsàn huí jiā le"
        },
        {
         "txt": "大家都在吃饭",
         "ico": "🍚",
         "py": "Dàjiā dōu zài chīfàn"
        },
        {
         "txt": "老师在教室里",
         "ico": "🏫",
         "py": "Lǎoshī zài jiàoshì lǐ"
        }
       ],
       "qpy": "Huódòng jiéshù hòu dàjiā qù nǎr le?"
      },
      {
       "q": "怎样才能提高工作效率？",
       "qvi": "Làm thế nào mới nâng cao được hiệu suất làm việc?",
       "scene": "💼📈❓",
       "ans": "首先要做好计划其次要认真工作",
       "opts": [
        {
         "txt": "我不知道他在哪儿",
         "ico": "🤷",
         "py": "Wǒ bù zhīdào tā zài nǎr"
        },
        {
         "txt": "首先要做好计划其次要认真工作",
         "ico": "📅",
         "py": "Shǒuxiān yào zuò hǎo jìhuà qícì yào rènzhēn gōngzuò"
        },
        {
         "txt": "明天可能会下雨",
         "ico": "🌧️",
         "py": "Míngtiān kěnéng huì xià yǔ"
        }
       ],
       "qpy": "Zěnyàng cáinéng tígāo gōngzuò xiàolǜ?"
      },
      {
       "q": "公司为什么引进新设备？",
       "qvi": "Tại sao công ty đưa thiết bị mới vào?",
       "scene": "🏢🖥️❓",
       "ans": "为了提高工作效率",
       "opts": [
        {
         "txt": "因为明天是周末",
         "ico": "📆",
         "py": "Yīnwèi míngtiān shì zhōumò"
        },
        {
         "txt": "他没有带手机",
         "ico": "📱",
         "py": "Tā méiyǒu dài shǒujī"
        },
        {
         "txt": "为了提高工作效率",
         "ico": "📈",
         "py": "Wèile tígāo gōngzuò xiàolǜ"
        }
       ],
       "qpy": "Gōngsī wèi shénme yǐnjìn xīn shèbèi?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Đề xuất cải thiện hiệu suất với sếp",
      "steps": [
       "<b>Bước 1:</b> Chọn một vấn đề trong công việc của bạn (họp quá nhiều, hồ sơ rối, áp lực lớn) và nói thành tiếng nguyên nhân bằng <i>\"压力太大首先会导致生病其次会影响工作\"</i> theo mẫu.",
       "<b>Bước 2:</b> Đề xuất 2 bước cải thiện bằng mẫu \"首先……，其次……\", ví dụ <i>\"我们首先改正错误其次提高效率\"</i>. Ghi ra giấy rồi đọc lại.",
       "<b>Bước 3:</b> Nhắn tin hoặc nói với sếp: nêu đề xuất, lợi ích mong đợi (giảm áp lực, tăng hiệu suất), rồi hỏi <i>\"你觉得怎么样？\"</i>."
      ]
     }
    },
    {
     "id": "4.8C",
     "name": "Bài 4.8C: Khen thưởng, giải thưởng và thi đấu",
     "grammar": {
      "formulas": [
       "👶 连 + 小孩儿 + 🙌 都 + 💡 知道",
       "👔 连 + 经理 + 🙌 也 + 👏 表扬了",
       "❓ 连 + 他 + 🙌 都 + 🚫 没参加？"
      ],
      "tip": "Cấu trúc \"连 + danh từ + 也/都 + vị ngữ\" (lián, âm Hán Việt: liên) nghĩa là \"ngay cả… cũng…\", nhấn mạnh một ví dụ cực đoan. 也 hoặc 都 phải đứng trước động từ, sau danh từ đi cùng 连. Khi phủ định, thường nói 连……都没/不……, ví dụ 连抽奖都没参加.",
      "vn_tip": "Người Việt hay bỏ 也/都 và chỉ nói 连小孩儿知道 (thiếu). Phải có 也 hoặc 都: 连小孩儿都知道. Cũng không đặt 也/都 trước danh từ: nói 连经理也表扬了他, không nói 也连经理表扬了他."
     },
     "chunks": [
      {
       "scene": "🏃😴🏆",
       "full": "这位运动员连睡觉都在想比赛",
       "vi": "Vận động viên này ngay cả khi ngủ cũng nghĩ đến trận đấu",
       "parts": [
        {
         "t": "这位运动员",
         "ico": "🏃",
         "c": "s",
         "py": "zhè wèi yùndòngyuán",
         "hv": "_ vị vận động viên"
        },
        {
         "t": "连睡觉都在想",
         "ico": "😴",
         "c": "v",
         "py": "lián shuìjiào dōu zài xiǎng",
         "hv": "liên _ giác đô tại tưởng"
        },
        {
         "t": "比赛",
         "ico": "🏆",
         "c": "o",
         "py": "bǐsài",
         "hv": "tỉ _"
        }
       ],
       "traceWord": "运动员",
       "py": "Zhè wèi yùndòngyuán lián shuìjiào dōu zài xiǎng bǐsài",
       "traceKey": "yundongyuan"
      },
      {
       "scene": "👶⚽📊",
       "full": "连小孩儿都知道这场比赛的比分",
       "vi": "Ngay cả trẻ con cũng biết tỉ số của trận đấu này",
       "parts": [
        {
         "t": "连小孩儿",
         "ico": "👶",
         "c": "s",
         "py": "lián xiǎoháir",
         "hv": "liên tiểu hài _"
        },
        {
         "t": "都知道",
         "ico": "💡",
         "c": "v",
         "py": "dōu zhīdào",
         "hv": "đô tri đạo"
        },
        {
         "t": "这场比赛的比分",
         "ico": "📊",
         "c": "o",
         "py": "zhè chǎng bǐsài de bǐfēn",
         "hv": "_ trường tỉ _ đích tỉ phân"
        }
       ],
       "traceWord": "比分",
       "py": "Lián xiǎoháir dōu zhīdào zhè chǎng bǐsài de bǐfēn",
       "traceKey": "bifen"
      },
      {
       "scene": "👔👏📝",
       "full": "连经理也表扬了小王的方案",
       "vi": "Ngay cả giám đốc cũng khen phương án của Tiểu Vương",
       "parts": [
        {
         "t": "连经理",
         "ico": "👔",
         "c": "s",
         "py": "lián jīnglǐ",
         "hv": "liên kinh lí"
        },
        {
         "t": "也表扬了",
         "ico": "👏",
         "c": "v",
         "py": "yě biǎoyáng le",
         "hv": "dã biểu dương liễu"
        },
        {
         "t": "小王的方案",
         "ico": "📝",
         "c": "o",
         "py": "Xiǎowáng de fāng'àn",
         "hv": "tiểu vương đích phương án"
        }
       ],
       "traceWord": "表扬",
       "py": "Lián jīnglǐ yě biǎoyáng le Xiǎowáng de fāng'àn",
       "traceKey": "biaoyang"
      },
      {
       "scene": "🧑‍💼👍🛎️",
       "full": "连客人也称赞这里的服务",
       "vi": "Ngay cả khách cũng khen dịch vụ ở đây",
       "parts": [
        {
         "t": "连客人",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "lián kèrén",
         "hv": "liên khách nhân"
        },
        {
         "t": "也称赞",
         "ico": "👍",
         "c": "v",
         "py": "yě chēngzàn",
         "hv": "dã xưng _"
        },
        {
         "t": "这里的服务",
         "ico": "🛎️",
         "c": "o",
         "py": "zhèlǐ de fúwù",
         "hv": "_ lịa đích phục vụ"
        }
       ],
       "traceWord": "称赞",
       "py": "Lián kèrén yě chēngzàn zhèlǐ de fúwù",
       "traceKey": "chengzan"
      },
      {
       "scene": "🏅🎓🏫",
       "full": "这次比赛连中学生也能获奖",
       "vi": "Cuộc thi lần này ngay cả học sinh cấp hai cũng có thể đoạt giải",
       "parts": [
        {
         "t": "这次比赛",
         "ico": "🏅",
         "c": "s",
         "py": "zhè cì bǐsài",
         "hv": "_ thứ tỉ _"
        },
        {
         "t": "连中学生也能",
         "ico": "🎓",
         "c": "v",
         "py": "lián zhōngxuéshēng yě néng",
         "hv": "liên trung học sinh dã năng"
        },
        {
         "t": "获奖",
         "ico": "🏆",
         "c": "o",
         "py": "huòjiǎng",
         "hv": "_ _"
        }
       ],
       "traceWord": "获奖",
       "py": "Zhè cì bǐsài lián zhōngxuéshēng yě néng huòjiǎng",
       "traceKey": "huojiang"
      },
      {
       "scene": "🧑🎰🎁",
       "full": "他连抽奖都没参加怎么会中奖",
       "vi": "Anh ấy ngay cả rút thăm cũng không tham gia thì sao trúng thưởng được",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "连抽奖都没参加",
         "ico": "🎰",
         "c": "v",
         "py": "lián chōujiǎng dōu méi cānjiā",
         "hv": "liên trừu _ đô một tham gia"
        },
        {
         "t": "怎么会中奖",
         "ico": "🎁",
         "c": "o",
         "py": "zěnme huì zhòngjiǎng",
         "hv": "chẩn _ hội trung _"
        }
       ],
       "traceWord": "抽奖",
       "py": "Tā lián chōujiǎng dōu méi cānjiā zěnme huì zhòngjiǎng",
       "traceKey": "choujiang"
      },
      {
       "scene": "👴🌐📱",
       "full": "现在连老人也能在网上获取信息",
       "vi": "Bây giờ ngay cả người già cũng có thể lấy thông tin trên mạng",
       "parts": [
        {
         "t": "现在",
         "ico": "⏰",
         "c": "s",
         "py": "xiànzài",
         "hv": "hiện tại"
        },
        {
         "t": "连老人也能在网上",
         "ico": "👴",
         "c": "v",
         "py": "lián lǎorén yě néng zài wǎng shang",
         "hv": "liên lão nhân dã năng tại võng thượng"
        },
        {
         "t": "获取信息",
         "ico": "📱",
         "c": "o",
         "py": "huòqǔ xìnxī",
         "hv": "_ thủ tín tức"
        }
       ],
       "traceWord": "获取",
       "py": "Xiànzài lián lǎorén yě néng zài wǎng shang huòqǔ xìnxī",
       "traceKey": "huoqu"
      },
      {
       "scene": "🏃🏆😄",
       "full": "这位运动员赢得了比赛连教练也很高兴",
       "vi": "Vận động viên này thắng trận đấu, ngay cả huấn luyện viên cũng rất vui",
       "parts": [
        {
         "t": "这位运动员",
         "ico": "🏃",
         "c": "s",
         "py": "zhè wèi yùndòngyuán",
         "hv": "_ vị vận động viên"
        },
        {
         "t": "赢得了",
         "ico": "🏆",
         "c": "v",
         "py": "yíngdé le",
         "hv": "_ đắc liễu"
        },
        {
         "t": "比赛连教练也很高兴",
         "ico": "😄",
         "c": "o",
         "py": "bǐsài lián jiàoliàn yě hěn gāoxìng",
         "hv": "tỉ _ liên giáo luyện dã _ cao hưng"
        }
       ],
       "traceWord": "赢得",
       "py": "Zhè wèi yùndòngyuán yíngdé le bǐsài lián jiàoliàn yě hěn gāoxìng",
       "traceKey": "yingde"
      }
     ],
     "qaList": [
      {
       "q": "亚运会是什么时候开的？",
       "qvi": "Đại hội Thể thao châu Á khai mạc khi nào?",
       "scene": "🏟️🏅❓",
       "ans": "亚运会在去年秋天举行",
       "opts": [
        {
         "txt": "亚运会在去年秋天举行",
         "ico": "🍂",
         "py": "Yàyùnhuì zài qùnián qiūtiān jǔxíng"
        },
        {
         "txt": "我们明天坐地铁去",
         "ico": "🚇",
         "py": "Wǒmen míngtiān zuò dìtiě qù"
        },
        {
         "txt": "这个菜有点儿咸",
         "ico": "🧂",
         "py": "Zhè gè cài yǒudiǎnr xián"
        }
       ],
       "qpy": "Yàyùnhuì shì shénme shíhou kāi de?"
      },
      {
       "q": "这次运动会谁获得了最好的成绩？",
       "qvi": "Ở đại hội thể thao lần này ai đạt thành tích tốt nhất?",
       "scene": "🏃🏅❓",
       "ans": "小王获得了最好的成绩",
       "opts": [
        {
         "txt": "我们明天坐地铁去",
         "ico": "🚇",
         "py": "Wǒmen míngtiān zuò dìtiě qù"
        },
        {
         "txt": "小王获得了最好的成绩",
         "ico": "🥇",
         "py": "Xiǎowáng huòdé le zuìhǎo de chéngjì"
        },
        {
         "txt": "这个菜有点儿咸",
         "ico": "🧂",
         "py": "Zhè gè cài yǒudiǎnr xián"
        }
       ],
       "qpy": "Zhè cì yùndònghuì shéi huòdé le zuìhǎo de chéngjì?"
      },
      {
       "q": "他的成绩怎么样？",
       "qvi": "Thành tích của anh ấy thế nào?",
       "scene": "🧑📊❓",
       "ans": "他的成绩很优秀",
       "opts": [
        {
         "txt": "他的手机很贵",
         "ico": "📱",
         "py": "Tā de shǒujī hěn guì"
        },
        {
         "txt": "我妈妈做饭了",
         "ico": "🍳",
         "py": "Wǒ māma zuòfàn le"
        },
        {
         "txt": "他的成绩很优秀",
         "ico": "🌟",
         "py": "Tā de chéngjì hěn yōuxiù"
        }
       ],
       "qpy": "Tā de chéngjì zěnmeyàng?"
      },
      {
       "q": "这个牌子的质量怎么样？",
       "qvi": "Chất lượng của nhãn hiệu này thế nào?",
       "scene": "🏷️✅❓",
       "ans": "质量优良价格也便宜",
       "opts": [
        {
         "txt": "质量优良价格也便宜",
         "ico": "✅",
         "py": "Zhìliàng yōuliáng jiàgé yě piányi"
        },
        {
         "txt": "他在北京工作",
         "ico": "💼",
         "py": "Tā zài Běijīng gōngzuò"
        },
        {
         "txt": "他获过两次奖",
         "ico": "🥈",
         "py": "Tā huò guò liǎng cì jiǎng"
        }
       ],
       "qpy": "Zhè gè páizi de zhìliàng zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Khen đồng nghiệp và kể về một cuộc thi",
      "steps": [
       "<b>Bước 1:</b> Nghĩ đến một đồng nghiệp làm tốt dự án gần đây. Viết tin nhắn khen bằng mẫu \"连……也……\": <i>\"连经理也表扬了小王的方案\"</i>, thay bằng tên và việc thật của bạn.",
       "<b>Bước 2:</b> Tự kể thành tiếng 3 câu về một cuộc thi hoặc giải thưởng bạn biết (thể thao, bốc thăm trúng thưởng của công ty), dùng 连……都/也……, ví dụ <i>\"连小孩儿都知道这场比赛的比分\"</i>.",
       "<b>Bước 3:</b> Gọi hoặc nhắn cho bạn: hỏi bạn có tham gia bốc thăm công ty không, dùng <i>\"他连抽奖都没参加怎么会中奖\"</i> để đùa vui, rồi chúc mừng ai đó đạt giải."
      ]
     }
    }
   ]
  },
  "4.9": {
   "lessons": [
    {
     "id": "4.9A",
     "name": "Bài 4.9A: Sản phẩm, chủng loại và quy mô",
     "grammar": {
      "formulas": [
       "📦 产品 + 📅 一年 + ⚖️ 比 + 📅 一年 + 📈 好",
       "🏭 规模 + 📅 一天 + ⚖️ 比 + 📅 一天 + 📈 大",
       "🔢 一个 + ⚖️ 比 + 🔢 一个 + ✨ 好看"
      ],
      "tip": "Mẫu 一 + lượng từ + 比 + 一 + lượng từ + tính từ diễn tả \"ngày càng, cái sau hơn cái trước\": 一年比一年 (yì nián bǐ yì nián, nhất niên tỉ nhất niên) = năm sau hơn năm trước. Lượng từ lặp lại giống nhau ở cả hai vế: 一天比一天, 一次比一次, 一个比一个.",
      "vn_tip": "Người Việt hay nói \"一年比较一年\" hoặc thêm 越来越 cùng lúc (一年比一年越来越多). Đúng là chỉ dùng một cách: 一年比一年多, hoặc 越来越多. Lượng từ ở hai vế phải giống nhau."
     },
     "chunks": [
      {
       "scene": "📦📈😀",
       "full": "我们的产品一年比一年好",
       "vi": "Sản phẩm của chúng tôi năm sau tốt hơn năm trước",
       "parts": [
        {
         "t": "我们的产品",
         "ico": "📦",
         "c": "s",
         "py": "wǒmen de chǎnpǐn",
         "hv": "ngã món đích _ phẩm"
        },
        {
         "t": "一年比一年",
         "ico": "📅",
         "c": "v",
         "py": "yī nián bǐ yī nián",
         "hv": "nhất nên tỉ nhất nên"
        },
        {
         "t": "好",
         "ico": "👍",
         "c": "o",
         "py": "hǎo",
         "hv": "háo"
        }
       ],
       "traceWord": "产品",
       "py": "Wǒmen de chǎnpǐn yī nián bǐ yī nián hǎo",
       "traceKey": "chanpin"
      },
      {
       "scene": "🏭📏📈",
       "full": "小型公司的规模一年比一年大",
       "vi": "Quy mô của các công ty nhỏ năm sau lớn hơn năm trước",
       "parts": [
        {
         "t": "小型公司的规模",
         "ico": "🏭",
         "c": "s",
         "py": "xiǎoxíng gōngsī de guīmó",
         "hv": "tiểu _ công ti đích qui mô"
        },
        {
         "t": "一年比一年",
         "ico": "📅",
         "c": "v",
         "py": "yī nián bǐ yī nián",
         "hv": "nhất nên tỉ nhất nên"
        },
        {
         "t": "大",
         "ico": "📈",
         "c": "o",
         "py": "dà",
         "hv": "đại"
        }
       ],
       "traceWord": "规模",
       "py": "Xiǎoxíng gōngsī de guīmó yī nián bǐ yī nián dà",
       "traceKey": "guimo"
      },
      {
       "scene": "💻🏷️📉",
       "full": "这种类型的电脑一年比一年便宜",
       "vi": "Loại máy tính này năm sau rẻ hơn năm trước",
       "parts": [
        {
         "t": "这种类型的电脑",
         "ico": "💻",
         "c": "s",
         "py": "zhè zhǒng lèixíng de diànnǎo",
         "hv": "_ chõng loại _ đích _ não"
        },
        {
         "t": "一年比一年",
         "ico": "📅",
         "c": "v",
         "py": "yī nián bǐ yī nián",
         "hv": "nhất nên tỉ nhất nên"
        },
        {
         "t": "便宜",
         "ico": "💰",
         "c": "o",
         "py": "piányi",
         "hv": "tiện nghi"
        }
       ],
       "traceWord": "类型",
       "py": "Zhè zhǒng lèixíng de diànnǎo yī nián bǐ yī nián piányi",
       "traceKey": "leixing"
      },
      {
       "scene": "🆕🔧📈",
       "full": "新型产品的用途一年比一年多",
       "vi": "Công dụng của sản phẩm kiểu mới năm sau nhiều hơn năm trước",
       "parts": [
        {
         "t": "新型产品的用途",
         "ico": "🆕",
         "c": "s",
         "py": "xīnxíng chǎnpǐn de yòngtú",
         "hv": "tân _ _ phẩm đích dụng đồ"
        },
        {
         "t": "一年比一年",
         "ico": "📅",
         "c": "v",
         "py": "yī nián bǐ yī nián",
         "hv": "nhất nên tỉ nhất nên"
        },
        {
         "t": "多",
         "ico": "➕",
         "c": "o",
         "py": "duō",
         "hv": "đa"
        }
       ],
       "traceWord": "用途",
       "py": "Xīnxíng chǎnpǐn de yòngtú yī nián bǐ yī nián duō",
       "traceKey": "yongtu"
      },
      {
       "scene": "🧴✨👀",
       "full": "这个系列的产品一个比一个好看",
       "vi": "Các sản phẩm của dòng này cái nào cũng đẹp hơn cái trước",
       "parts": [
        {
         "t": "这个系列的产品",
         "ico": "🧴",
         "c": "s",
         "py": "zhè gè xìliè de chǎnpǐn",
         "hv": "_ cá hệ liệt đích _ phẩm"
        },
        {
         "t": "一个比一个",
         "ico": "🔢",
         "c": "v",
         "py": "yī gè bǐ yī gè",
         "hv": "nhất cá tỉ nhất cá"
        },
        {
         "t": "好看",
         "ico": "✨",
         "c": "o",
         "py": "hǎokàn",
         "hv": "háo khán"
        }
       ],
       "traceWord": "系列",
       "py": "Zhè gè xìliè de chǎnpǐn yī gè bǐ yī gè hǎokàn",
       "traceKey": "xilie"
      },
      {
       "scene": "🏢🛒📅",
       "full": "这家公司销售的种类一天比一天多",
       "vi": "Chủng loại mà công ty này bán ngày càng nhiều",
       "parts": [
        {
         "t": "这家公司销售的种类",
         "ico": "🏢",
         "c": "s",
         "py": "zhè jiā gōngsī xiāoshòu de zhǒnglèi",
         "hv": "_ gia công ti tiu _ đích chõng loại"
        },
        {
         "t": "一天比一天",
         "ico": "📅",
         "c": "v",
         "py": "yī tiān bǐ yī tiān",
         "hv": "nhất thiên tỉ nhất thiên"
        },
        {
         "t": "多",
         "ico": "➕",
         "c": "o",
         "py": "duō",
         "hv": "đa"
        }
       ],
       "traceWord": "销售",
       "py": "Zhè jiā gōngsī xiāoshòu de zhǒnglèi yī tiān bǐ yī tiān duō",
       "traceKey": "xiaoshou"
      },
      {
       "scene": "🧑‍💼🤝📈",
       "full": "小王推销产品的经验一年比一年丰富",
       "vi": "Kinh nghiệm chào bán sản phẩm của Tiểu Vương năm sau phong phú hơn năm trước",
       "parts": [
        {
         "t": "小王推销产品的经验",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "Xiǎowáng tuīxiāo chǎnpǐn de jīngyàn",
         "hv": "tiểu vương suy tiu _ phẩm đích kinh nghiệm"
        },
        {
         "t": "一年比一年",
         "ico": "📅",
         "c": "v",
         "py": "yī nián bǐ yī nián",
         "hv": "nhất nên tỉ nhất nên"
        },
        {
         "t": "丰富",
         "ico": "📚",
         "c": "o",
         "py": "fēngfù",
         "hv": "phong phú"
        }
       ],
       "traceWord": "推销",
       "py": "Xiǎowáng tuīxiāo chǎnpǐn de jīngyàn yī nián bǐ yī nián fēngfù",
       "traceKey": "tuixiao"
      },
      {
       "scene": "🏭🛍️💰",
       "full": "大规模销售使我们的收入一年比一年高",
       "vi": "Bán hàng quy mô lớn làm thu nhập của chúng tôi năm sau cao hơn năm trước",
       "parts": [
        {
         "t": "大规模销售",
         "ico": "🏭",
         "c": "s",
         "py": "dà guīmó xiāoshòu",
         "hv": "đại qui mô tiu _"
        },
        {
         "t": "使",
         "ico": "➡️",
         "c": "v",
         "py": "shǐ",
         "hv": "sứ"
        },
        {
         "t": "我们的收入一年比一年高",
         "ico": "💰",
         "c": "o",
         "py": "wǒmen de shōurù yī nián bǐ yī nián gāo",
         "hv": "ngã món đích thu nhập nhất nên tỉ nhất nên cao"
        }
       ],
       "traceWord": "大规模",
       "py": "Dà guīmó xiāoshòu shǐ wǒmen de shōurù yī nián bǐ yī nián gāo",
       "traceKey": "daguimo"
      }
     ],
     "qaList": [
      {
       "q": "这个模型的造型怎么样？",
       "qvi": "Kiểu dáng của mô hình này thế nào?",
       "scene": "🧩✨",
       "ans": "这个模型的造型很漂亮",
       "opts": [
        {
         "txt": "这个模型的造型很漂亮",
         "ico": "🧩",
         "py": "Zhè gè móxíng de zàoxíng hěn piàoliang"
        },
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "他们昨天吃了米饭",
         "ico": "🍚",
         "py": "Tāmen zuótiān chī le mǐfàn"
        }
       ],
       "qpy": "Zhè gè móxíng de zàoxíng zěnmeyàng?"
      },
      {
       "q": "这些产品的个体都一样吗？",
       "qvi": "Từng cá thể của những sản phẩm này đều giống nhau à?",
       "scene": "📦🔍",
       "ans": "每个个体都不一样",
       "opts": [
        {
         "txt": "我想坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒ xiǎng zuò dìtiě qù gōngsī"
        },
        {
         "txt": "每个个体都不一样",
         "ico": "🔍",
         "py": "Měi gè gètǐ dōu bù yīyàng"
        },
        {
         "txt": "今天的天气很热",
         "ico": "☀️",
         "py": "Jīntiān de tiānqì hěn rè"
        }
       ],
       "qpy": "Zhèxiē chǎnpǐn de gètǐ dōu yīyàng ma?"
      },
      {
       "q": "大型公司用什么方法推销产品？",
       "qvi": "Công ty lớn dùng cách nào để chào bán sản phẩm?",
       "scene": "🏢📣",
       "ans": "他们大规模做广告",
       "opts": [
        {
         "txt": "我弟弟喜欢打篮球",
         "ico": "🏀",
         "py": "Wǒ dìdi xǐhuan dǎ lánqiú"
        },
        {
         "txt": "明天下午有一个会议",
         "ico": "📅",
         "py": "Míngtiān xiàwǔ yǒu yī gè huìyì"
        },
        {
         "txt": "他们大规模做广告",
         "ico": "📣",
         "py": "Tāmen dà guīmó zuò guǎnggào"
        }
       ],
       "qpy": "Dàxíng gōngsī yòng shénme fāngfǎ tuīxiāo chǎnpǐn?"
      },
      {
       "q": "你想买哪种电脑？",
       "qvi": "Bạn muốn mua loại máy tính nào?",
       "scene": "💻❓",
       "ans": "我想买A型的",
       "opts": [
        {
         "txt": "昨天我去了书店",
         "ico": "📚",
         "py": "Zuótiān wǒ qù le shūdiàn"
        },
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "我想买A型的",
         "ico": "💻",
         "py": "Wǒ xiǎng mǎi A xíng de"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi nǎ zhǒng diànnǎo?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu dòng sản phẩm của công ty",
      "steps": [
       "<b>Bước 1:</b> Chọn một sản phẩm của công ty bạn (hoặc cửa hàng bạn hay mua) và viết 3 câu mô tả loại hình, công dụng, quy mô, ví dụ <i>\"这个系列的产品一个比一个好看\"</i>.",
       "<b>Bước 2:</b> Nói thành tiếng về xu hướng của sản phẩm bằng mẫu \"一……比一……\", ví dụ <i>\"我们的产品一年比一年好\"</i>, thay lượng từ thành 天, 年, 次.",
       "<b>Bước 3:</b> Ghi âm hoặc nhắn tin cho đồng nghiệp một đoạn chào bán ngắn 4 câu, dùng ít nhất 2 từ như 产品, 种类, 推销, 规模."
      ]
     }
    },
    {
     "id": "4.9B",
     "name": "Bài 4.9B: Hợp đồng, bảo lãnh và đàm phán",
     "grammar": {
      "formulas": [
       "🧑 你 + 🔀 或者 + 📧 发邮件 + 🔀 或者 + 📞 打电话",
       "👥 大家 + 🔀 或者 + 👍 赞成 + 🔀 或者 + 👎 反对",
       "🧑‍💼 老板 + 🔀 或者 + 📅 今天 + 🔀 或者 + 📅 明天"
      ],
      "tip": "Mẫu 或者……，或者…… (huòzhě, hoặc giả) nghĩa là \"hoặc là … hoặc là …\", nêu hai khả năng để chọn một. Đặt 或者 trước mỗi lựa chọn: 或者发邮件，或者打电话. Dùng 或者 trong câu trần thuật; trong câu hỏi lựa chọn dùng 还是 (hái shi).",
      "vn_tip": "Người Việt hay dùng 或者 trong câu hỏi, ví dụ \"你喝茶或者咖啡？\". Sai. Câu hỏi phải dùng 还是: 你喝茶还是咖啡？ Còn 或者 chỉ dùng khi nói thông báo, đề nghị: 我喝茶或者咖啡都可以."
     },
     "chunks": [
      {
       "scene": "📄📧📞",
       "full": "你或者发邮件或者打电话确认合同",
       "vi": "Bạn hoặc gửi email hoặc gọi điện để xác nhận hợp đồng",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "或者发邮件或者打电话",
         "ico": "📧",
         "c": "v",
         "py": "huòzhě fā yóujiàn huòzhě dǎ diànhuà",
         "hv": "hoặc _ _ _ kiện hoặc _ đả _ thoại"
        },
        {
         "t": "确认合同",
         "ico": "📄",
         "c": "o",
         "py": "quèrèn hétóng",
         "hv": "xác nhận hợp đồng"
        }
       ],
       "traceWord": "合同",
       "py": "Nǐ huòzhě fā yóujiàn huòzhě dǎ diànhuà quèrèn hétóng",
       "traceKey": "hetong"
      },
      {
       "scene": "🧑‍💼🙇📅",
       "full": "老板或者今天或者明天会承认这个错误",
       "vi": "Hoặc hôm nay hoặc ngày mai sếp sẽ thừa nhận lỗi này",
       "parts": [
        {
         "t": "老板",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão ván"
        },
        {
         "t": "或者今天或者明天会承认",
         "ico": "📅",
         "c": "v",
         "py": "huòzhě jīntiān huòzhě míngtiān huì chéngrèn",
         "hv": "hoặc _ kim thiên hoặc _ minh thiên hội thừa nhận"
        },
        {
         "t": "这个错误",
         "ico": "❌",
         "c": "o",
         "py": "zhè gè cuòwù",
         "hv": "_ cá thó _"
        }
       ],
       "traceWord": "承认",
       "py": "Lǎobǎn huòzhě jīntiān huòzhě míngtiān huì chéngrèn zhè gè cuòwù",
       "traceKey": "chengren"
      },
      {
       "scene": "🏦🤝💼",
       "full": "银行或者为我们担保或者赞助这个项目",
       "vi": "Ngân hàng hoặc bảo lãnh cho chúng tôi hoặc tài trợ cho dự án này",
       "parts": [
        {
         "t": "银行",
         "ico": "🏦",
         "c": "s",
         "py": "yínháng",
         "hv": "ngân hàng"
        },
        {
         "t": "或者为我们担保或者赞助",
         "ico": "🤝",
         "c": "v",
         "py": "huòzhě wèi wǒmen dānbǎo huòzhě zànzhù",
         "hv": "hoặc _ _ ngã món đảm bảo hoặc _ _ trợ"
        },
        {
         "t": "这个项目",
         "ico": "💼",
         "c": "o",
         "py": "zhè gè xiàngmù",
         "hv": "_ cá hạng mục"
        }
       ],
       "traceWord": "担保",
       "py": "Yínháng huòzhě wèi wǒmen dānbǎo huòzhě zànzhù zhè gè xiàngmù",
       "traceKey": "danbao"
      },
      {
       "scene": "🏢💰🏦",
       "full": "公司或者把资金转移到新项目或者留在银行里",
       "vi": "Công ty hoặc chuyển vốn sang dự án mới hoặc để lại trong ngân hàng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "或者把资金转移到新项目",
         "ico": "💰",
         "c": "v",
         "py": "huòzhě bǎ zījīn zhuǎnyí dào xīn xiàngmù",
         "hv": "hoặc _ bã _ kim chuyển dời đáo tân hạng mục"
        },
        {
         "t": "或者留在银行里",
         "ico": "🏦",
         "c": "o",
         "py": "huòzhě liú zài yínháng lǐ",
         "hv": "hoặc _ lưu tại ngân hàng lịa"
        }
       ],
       "traceWord": "转移",
       "py": "Gōngsī huòzhě bǎ zījīn zhuǎnyí dào xīn xiàngmù huòzhě liú zài yínháng lǐ",
       "traceKey": "zhuanyi"
      },
      {
       "scene": "🧑‍💼👂🗣️",
       "full": "我们或者征求顾客的意见或者说服顾客购买新产品",
       "vi": "Chúng tôi hoặc hỏi ý kiến khách hàng hoặc thuyết phục khách mua sản phẩm mới",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "或者征求顾客的意见或者说服",
         "ico": "👂",
         "c": "v",
         "py": "huòzhě zhēngqiú gùkè de yìjiàn huòzhě shuōfú",
         "hv": "hoặc _ chinh cầu cố khách đích ý kiến hoặc _ _ phục"
        },
        {
         "t": "顾客购买新产品",
         "ico": "🛍️",
         "c": "o",
         "py": "gùkè gòumǎi xīn chǎnpǐn",
         "hv": "cố khách _ mãi tân _ phẩm"
        }
       ],
       "traceWord": "征求",
       "py": "Wǒmen huòzhě zhēngqiú gùkè de yìjiàn huòzhě shuōfú gùkè gòumǎi xīn chǎnpǐn",
       "traceKey": "zhengqiu"
      },
      {
       "scene": "👥👍👎",
       "full": "大家或者赞成或者反对但意见并不一致",
       "vi": "Mọi người hoặc tán thành hoặc phản đối nhưng ý kiến không thống nhất",
       "parts": [
        {
         "t": "大家",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "或者赞成或者反对",
         "ico": "👍",
         "c": "v",
         "py": "huòzhě zànchéng huòzhě fǎnduì",
         "hv": "hoặc _ _ thành hoặc _ phản đỗi"
        },
        {
         "t": "但意见并不一致",
         "ico": "💬",
         "c": "o",
         "py": "dàn yìjiàn bìng bù yīzhì",
         "hv": "_ ý kiến _ bất nhất nhí"
        }
       ],
       "traceWord": "赞成",
       "py": "Dàjiā huòzhě zànchéng huòzhě fǎnduì dàn yìjiàn bìng bù yīzhì",
       "traceKey": "zancheng"
      },
      {
       "scene": "🌱⚔️🏢",
       "full": "我们或者抓住机遇或者面临挑战",
       "vi": "Chúng ta hoặc nắm bắt cơ hội hoặc đối mặt thử thách",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "或者抓住机遇",
         "ico": "🌱",
         "c": "v",
         "py": "huòzhě zhuāzhù jīyù",
         "hv": "hoặc _ co trú cơ ngộ"
        },
        {
         "t": "或者面临挑战",
         "ico": "⚔️",
         "c": "o",
         "py": "huòzhě miànlín tiǎozhàn",
         "hv": "hoặc _ _ _ vẹo chiến"
        }
       ],
       "traceWord": "机遇",
       "py": "Wǒmen huòzhě zhuāzhù jīyù huòzhě miànlín tiǎozhàn",
       "traceKey": "jiyu"
      },
      {
       "scene": "🧑‍💼🙏💡",
       "full": "经理期待大家或者统一意见或者提出方案",
       "vi": "Giám đốc mong mọi người hoặc thống nhất ý kiến hoặc đưa ra phương án",
       "parts": [
        {
         "t": "经理",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "期待",
         "ico": "🙏",
         "c": "v",
         "py": "qīdài",
         "hv": "kì đãi"
        },
        {
         "t": "大家或者统一意见或者提出方案",
         "ico": "💡",
         "c": "o",
         "py": "dàjiā huòzhě tǒngyī yìjiàn huòzhě tíchū fāng'àn",
         "hv": "đại gia hoặc _ thống nhất ý kiến hoặc _ đề xuất phương án"
        }
       ],
       "traceWord": "期待",
       "py": "Jīnglǐ qīdài dàjiā huòzhě tǒngyī yìjiàn huòzhě tíchū fāng'àn",
       "traceKey": "qidai"
      }
     ],
     "qaList": [
      {
       "q": "这场比赛激烈吗？",
       "qvi": "Trận đấu này có kịch liệt không?",
       "scene": "⚽🔥",
       "ans": "非常激烈",
       "opts": [
        {
         "txt": "我们明天去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "非常激烈",
         "ico": "🔥",
         "py": "Fēicháng jīliè"
        },
        {
         "txt": "他是我的同事",
         "ico": "🧑‍💼",
         "py": "Tā shì wǒ de tóngshì"
        }
       ],
       "qpy": "Zhè chǎng bǐsài jīliè ma?"
      },
      {
       "q": "你想怎么确认合同？",
       "qvi": "Bạn muốn xác nhận hợp đồng bằng cách nào?",
       "scene": "📄📞",
       "ans": "我想打电话确认",
       "opts": [
        {
         "txt": "我昨天喝了茶",
         "ico": "🍵",
         "py": "Wǒ zuótiān hē le chá"
        },
        {
         "txt": "他们住在上海",
         "ico": "🏙️",
         "py": "Tāmen zhù zài Shànghǎi"
        },
        {
         "txt": "我想打电话确认",
         "ico": "📞",
         "py": "Wǒ xiǎng dǎ diànhuà quèrèn"
        }
       ],
       "qpy": "Nǐ xiǎng zěnme quèrèn hétóng?"
      },
      {
       "q": "你期待什么样的机遇？",
       "qvi": "Bạn mong chờ cơ hội như thế nào?",
       "scene": "🌱🙏",
       "ans": "我期待更好的工作机会",
       "opts": [
        {
         "txt": "我已经吃完饭了",
         "ico": "🍚",
         "py": "Wǒ yǐjīng chī wán fàn le"
        },
        {
         "txt": "我期待更好的工作机会",
         "ico": "💼",
         "py": "Wǒ qīdài gèng hǎo de gōngzuò jīhuì"
        },
        {
         "txt": "这个手机是红色的",
         "ico": "📱",
         "py": "Zhè gè shǒujī shì hóngsè de"
        }
       ],
       "qpy": "Nǐ qīdài shénmeyàng de jīyù?"
      },
      {
       "q": "经理征求你的意见，你赞成吗？",
       "qvi": "Giám đốc hỏi ý kiến bạn, bạn có tán thành không?",
       "scene": "🧑‍💼👂",
       "ans": "我很赞成这个想法",
       "opts": [
        {
         "txt": "她在医院工作",
         "ico": "🏥",
         "py": "Tā zài yīyuàn gōngzuò"
        },
        {
         "txt": "现在是下午三点",
         "ico": "🕒",
         "py": "Xiànzài shì xiàwǔ sān diǎn"
        },
        {
         "txt": "我很赞成这个想法",
         "ico": "👍",
         "py": "Wǒ hěn zànchéng zhè gè xiǎngfǎ"
        }
       ],
       "qpy": "Jīnglǐ zhēngqiú nǐ de yìjiàn nǐ zànchéng ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thương lượng điều khoản hợp đồng",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn cần xác nhận một hợp đồng với đối tác. Nói thành tiếng 2 cách liên hệ bằng mẫu 或者……或者……, ví dụ <i>\"你或者发邮件或者打电话确认合同\"</i>.",
       "<b>Bước 2:</b> Viết tin nhắn cho đồng nghiệp hỏi ý kiến về một đề xuất: <i>\"经理期待大家或者统一意见或者提出方案\"</i>, rồi thêm 1 câu nêu việc bạn tán thành hay phản đối.",
       "<b>Bước 3:</b> Tự đóng vai hai bên đàm phán trong 3 phút: một bên thuyết phục, bên kia đưa ra hai lựa chọn với 或者, dùng ít nhất 3 từ như 说服, 担保, 机遇, 挑战."
      ]
     }
    },
    {
     "id": "4.9C",
     "name": "Bài 4.9C: Xuất nhập khẩu, dự án và tài nguyên",
     "grammar": {
      "formulas": [
       "🏢 公司 + 📤 出口产品 + ➕ 并 + 📥 进口燃料",
       "🧑 我 + 📚 收获很大 + ➕ 并 + 🤝 认识了新朋友",
       "🏗️ 项目 + ✅ 已经开始 + ➕ 并 + 📅 要在年底完成"
      ],
      "tip": "Liên từ 并 (bìng, tịnh) nối hai động từ hoặc hai cụm động từ có cùng chủ ngữ, nghĩa là \"và, đồng thời\": 出口产品并进口燃料. 并 thường đứng trước vế sau, thuộc văn viết, trang trọng. Còn 以及 (yǐjí, dĩ cập) nối danh từ hoặc cụm danh từ: A、B 以及 C, nhưng bài này chỉ luyện câu với 并.",
      "vn_tip": "Người Việt hay dùng 并 để nối hai danh từ như \"我买苹果并香蕉\". Sai. 并 chỉ nối động từ hoặc cụm động từ. Nối danh từ thì dùng 和 hoặc 以及. Ngoài ra, 并 không dùng để mở đầu một câu mới nối hai chủ ngữ khác nhau."
     },
     "chunks": [
      {
       "scene": "🏢📤📥",
       "full": "我们公司出口产品并进口燃料",
       "vi": "Công ty chúng tôi xuất khẩu sản phẩm và nhập khẩu nhiên liệu",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã món công ti"
        },
        {
         "t": "出口产品",
         "ico": "📤",
         "c": "v",
         "py": "chūkǒu chǎnpǐn",
         "hv": "xuất khẩu _ phẩm"
        },
        {
         "t": "并进口燃料",
         "ico": "📥",
         "c": "o",
         "py": "bìng jìnkǒu ránliào",
         "hv": "_ tiến khẩu nhen liệu"
        }
       ],
       "traceWord": "出口",
       "py": "Wǒmen gōngsī chūkǒu chǎnpǐn bìng jìnkǒu ránliào",
       "traceKey": "chukou"
      },
      {
       "scene": "🧑‍💼🤝📅",
       "full": "中介帮助我们找到商务伙伴并安排见面",
       "vi": "Bên trung gian giúp chúng tôi tìm đối tác kinh doanh và sắp xếp gặp mặt",
       "parts": [
        {
         "t": "中介",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "zhōngjiè",
         "hv": "trung giới"
        },
        {
         "t": "帮助",
         "ico": "🤝",
         "c": "v",
         "py": "bāngzhù",
         "hv": "_ trợ"
        },
        {
         "t": "我们找到商务伙伴并安排见面",
         "ico": "📅",
         "c": "o",
         "py": "wǒmen zhǎodào shāngwù huǒbàn bìng ānpái jiànmiàn",
         "hv": "ngã món quơ đáo thương vụ _ bạn _ an bài kiến _"
        }
       ],
       "traceWord": "商务",
       "py": "Zhōngjiè bāngzhù wǒmen zhǎodào shāngwù huǒbàn bìng ānpái jiànmiàn",
       "traceKey": "shangwu"
      },
      {
       "scene": "🌍⛏️💼",
       "full": "这里的土地资源丰富并提供了很多工作机会",
       "vi": "Nơi đây tài nguyên đất đai phong phú và tạo ra nhiều cơ hội việc làm",
       "parts": [
        {
         "t": "这里的土地资源",
         "ico": "🌍",
         "c": "s",
         "py": "zhèlǐ de tǔdì zīyuán",
         "hv": "_ lịa đích thổ địa _ nguồn"
        },
        {
         "t": "丰富",
         "ico": "📚",
         "c": "v",
         "py": "fēngfù",
         "hv": "phong phú"
        },
        {
         "t": "并提供了很多工作机会",
         "ico": "💼",
         "c": "o",
         "py": "bìng tígōng le hěn duō gōngzuò jīhuì",
         "hv": "_ đề cung liễu _ đa công tác cơ hội"
        }
       ],
       "traceWord": "土地",
       "py": "Zhèlǐ de tǔdì zīyuán fēngfù bìng tígōng le hěn duō gōngzuò jīhuì",
       "traceKey": "tudi"
      },
      {
       "scene": "🔥⛽💨",
       "full": "燃料燃烧会产生很多烟并影响环境",
       "vi": "Nhiên liệu cháy sẽ sinh ra nhiều khói và ảnh hưởng môi trường",
       "parts": [
        {
         "t": "燃料",
         "ico": "⛽",
         "c": "s",
         "py": "ránliào",
         "hv": "nhen liệu"
        },
        {
         "t": "燃烧",
         "ico": "🔥",
         "c": "v",
         "py": "ránshāo",
         "hv": "nhen thiêu"
        },
        {
         "t": "会产生很多烟并影响环境",
         "ico": "💨",
         "c": "o",
         "py": "huì chǎnshēng hěn duō yān bìng yǐngxiǎng huánjìng",
         "hv": "hội _ sinh _ đa _ _ ảnh hướng _ cảnh"
        }
       ],
       "traceWord": "燃烧",
       "py": "Ránliào ránshāo huì chǎnshēng hěn duō yān bìng yǐngxiǎng huánjìng",
       "traceKey": "ranshao"
      },
      {
       "scene": "🏗️📅✅",
       "full": "这个工程项目已经开始并要在年底完成",
       "vi": "Dự án công trình này đã bắt đầu và sẽ hoàn thành vào cuối năm",
       "parts": [
        {
         "t": "这个工程项目",
         "ico": "🏗️",
         "c": "s",
         "py": "zhè gè gōngchéng xiàngmù",
         "hv": "_ cá công trình hạng mục"
        },
        {
         "t": "已经开始",
         "ico": "▶️",
         "c": "v",
         "py": "yǐjīng kāishǐ",
         "hv": "dĩ kinh khai thuỷ"
        },
        {
         "t": "并要在年底完成",
         "ico": "✅",
         "c": "o",
         "py": "bìng yào zài niándǐ wánchéng",
         "hv": "_ yếu tại nên để hoàn thành"
        }
       ],
       "traceWord": "工程",
       "py": "Zhè gè gōngchéng xiàngmù yǐjīng kāishǐ bìng yào zài niándǐ wánchéng",
       "traceKey": "gongcheng"
      },
      {
       "scene": "🧑💼📚🤝",
       "full": "我加入公司后收获很大并认识了新朋友",
       "vi": "Sau khi vào công ty tôi thu hoạch được nhiều và quen thêm bạn mới",
       "parts": [
        {
         "t": "我加入公司后",
         "ico": "🏢",
         "c": "s",
         "py": "wǒ jiārù gōngsī hòu",
         "hv": "ngã gia nhập công ti hậu"
        },
        {
         "t": "收获很大",
         "ico": "📚",
         "c": "v",
         "py": "shōuhuò hěn dà",
         "hv": "thu _ _ đại"
        },
        {
         "t": "并认识了新朋友",
         "ico": "🤝",
         "c": "o",
         "py": "bìng rènshi le xīn péngyou",
         "hv": "_ nhận _ liễu tân bằng hữu"
        }
       ],
       "traceWord": "加入",
       "py": "Wǒ jiārù gōngsī hòu shōuhuò hěn dà bìng rènshi le xīn péngyou",
       "traceKey": "jiaru"
      },
      {
       "scene": "😠📝💸",
       "full": "顾客投诉了我们的服务并要求退钱",
       "vi": "Khách hàng đã khiếu nại dịch vụ của chúng tôi và yêu cầu hoàn tiền",
       "parts": [
        {
         "t": "顾客",
         "ico": "🧑",
         "c": "s",
         "py": "gùkè",
         "hv": "cố khách"
        },
        {
         "t": "投诉了",
         "ico": "😠",
         "c": "v",
         "py": "tóusù le",
         "hv": "đầu tố liễu"
        },
        {
         "t": "我们的服务并要求退钱",
         "ico": "💸",
         "c": "o",
         "py": "wǒmen de fúwù bìng yāoqiú tuì qián",
         "hv": "ngã món đích phục vụ _ yếu cầu thoái tiền"
        }
       ],
       "traceWord": "投诉",
       "py": "Gùkè tóusù le wǒmen de fúwù bìng yāoqiú tuì qián",
       "traceKey": "tousu"
      },
      {
       "scene": "👩💪🏆",
       "full": "她善于发挥能力并得到了认可",
       "vi": "Cô ấy giỏi phát huy năng lực và được công nhận",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "_"
        },
        {
         "t": "善于发挥能力",
         "ico": "💪",
         "c": "v",
         "py": "shànyú fāhuī nénglì",
         "hv": "thiện vu _ huy năng lực"
        },
        {
         "t": "并得到了认可",
         "ico": "🏆",
         "c": "o",
         "py": "bìng dédào le rènkě",
         "hv": "_ đắc đáo liễu nhận khả"
        }
       ],
       "traceWord": "发挥",
       "py": "Tā shànyú fāhuī nénglì bìng dédào le rènkě",
       "traceKey": "fahui"
      }
     ],
     "qaList": [
      {
       "q": "你们公司出口什么产品？",
       "qvi": "Công ty các bạn xuất khẩu sản phẩm gì?",
       "scene": "🏢📤",
       "ans": "我们出口小型机器",
       "opts": [
        {
         "txt": "我们出口小型机器",
         "ico": "⚙️",
         "py": "Wǒmen chūkǒu xiǎoxíng jīqì"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "她是一位医生",
         "ico": "🩺",
         "py": "Tā shì yī wèi yīshēng"
        }
       ],
       "qpy": "Nǐmen gōngsī chūkǒu shénme chǎnpǐn?"
      },
      {
       "q": "这个项目需要什么？",
       "qvi": "Dự án này cần gì?",
       "scene": "🏗️❓",
       "ans": "需要更多的资金",
       "opts": [
        {
         "txt": "我们周末去爬山",
         "ico": "⛰️",
         "py": "Wǒmen zhōumò qù pá shān"
        },
        {
         "txt": "需要更多的资金",
         "ico": "💰",
         "py": "Xūyào gèng duō de zījīn"
        },
        {
         "txt": "这个包很便宜",
         "ico": "👜",
         "py": "Zhè gè bāo hěn piányi"
        }
       ],
       "qpy": "Zhè gè xiàngmù xūyào shénme?"
      },
      {
       "q": "你为什么投诉这家商店？",
       "qvi": "Vì sao bạn khiếu nại cửa hàng này?",
       "scene": "😠🏪",
       "ans": "因为他们的服务很差",
       "opts": [
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "明天会下雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià yǔ"
        },
        {
         "txt": "因为他们的服务很差",
         "ico": "😠",
         "py": "Yīnwèi tāmen de fúwù hěn chà"
        }
       ],
       "qpy": "Nǐ wèi shénme tóusù zhè jiā shāngdiàn?"
      },
      {
       "q": "你觉得这位中介怎么样？",
       "qvi": "Bạn thấy người trung gian này thế nào?",
       "scene": "🧑‍💼🤔",
       "ans": "他很热情并且很专业",
       "opts": [
        {
         "txt": "他很热情并且很专业",
         "ico": "🧑‍💼",
         "py": "Tā hěn rèqíng bìngqiě hěn zhuānyè"
        },
        {
         "txt": "我们去北京开会",
         "ico": "✈️",
         "py": "Wǒmen qù Běijīng kāihuì"
        },
        {
         "txt": "这本书非常有意思",
         "ico": "📖",
         "py": "Zhè běn shū fēicháng yǒu yìsi"
        }
       ],
       "qpy": "Nǐ juéde zhè wèi zhōngjiè zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trình bày dự án xuất nhập khẩu",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một việc kinh doanh quen thuộc (xuất khẩu nông sản, nhập hàng, làm dự án). Nói thành tiếng 3 câu bằng mẫu \"V1 并 V2\", ví dụ <i>\"我们公司出口产品并进口燃料\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp báo tiến độ dự án: <i>\"这个工程项目已经开始并要在年底完成\"</i>, thay bằng dự án thật của bạn.",
       "<b>Bước 3:</b> Đóng vai gọi điện cho bên trung gian trong 3 phút: nói bạn cần tìm đối tác, yêu cầu họ cung cấp thông tin và sắp xếp gặp mặt, dùng ít nhất 3 từ như 中介, 商务, 提供, 投诉."
      ]
     }
    }
   ]
  },
  "4.10": {
   "lessons": [
    {
     "id": "4.10A",
     "name": "Bài 4.10A: Lương thưởng, tiền lãi và đầu tư",
     "grammar": {
      "formulas": [
       "🔢 数词 + ➕ 来 + 📦 量词 + 名词",
       "💰 三千 + 来 + 块 + 奖金",
       "🧓 三十 + 来 + 岁"
      ],
      "tip": "Cấu trúc \"số + 来 + lượng từ\" (来 lái, âm Hán Việt: lai) diễn tả số ước lượng \"khoảng, xấp xỉ, hơn một chút\". Số phải là số tròn (十, 二十, 三百, 五千...) và 来 đứng ngay sau số, trước lượng từ: 三百来块 (khoảng ba trăm tệ).",
      "vn_tip": "Người Việt hay dịch \"khoảng\" thành 大概 rồi chồng thêm 来 (大概三百来块) hoặc đặt 来 sau lượng từ (三百块来). Cách đúng: số tròn + 来 + lượng từ, và không dùng cùng 大概 hay 左右."
     },
     "chunks": [
      {
       "scene": "🏢💰🎁",
       "full": "公司发了三千来块奖金",
       "vi": "Công ty đã phát khoảng ba nghìn tệ tiền thưởng",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "发了",
         "ico": "💰",
         "c": "v",
         "py": "fā le",
         "hv": "_ liễu"
        },
        {
         "t": "三千来块奖金",
         "ico": "🎁",
         "c": "o",
         "py": "sān qiān lái kuài jiǎngjīn",
         "hv": "tam thiên lai khối _ kim"
        }
       ],
       "traceWord": "奖金",
       "py": "Gōngsī fā le sān qiān lái kuài jiǎngjīn",
       "traceKey": "jiangjin"
      },
      {
       "scene": "👨‍💼📄💵",
       "full": "这份工作的待遇是一个月八千来块",
       "vi": "Đãi ngộ của công việc này là khoảng tám nghìn tệ một tháng",
       "parts": [
        {
         "t": "这份工作的待遇",
         "ico": "📄",
         "c": "s",
         "py": "zhè fèn gōngzuò de dàiyù",
         "hv": "_ phần công tác đích đãi ngộ"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "一个月八千来块",
         "ico": "💵",
         "c": "o",
         "py": "yī gè yuè bā qiān lái kuài",
         "hv": "nhất cá nguyệt bát thiên lai khối"
        }
       ],
       "traceWord": "待遇",
       "py": "Zhè fèn gōngzuò de dàiyù shì yī gè yuè bā qiān lái kuài",
       "traceKey": "daiyu"
      },
      {
       "scene": "🏦📈💴",
       "full": "银行的利息一年只有两百来块",
       "vi": "Tiền lãi ngân hàng một năm chỉ có khoảng hai trăm tệ",
       "parts": [
        {
         "t": "银行的利息",
         "ico": "🏦",
         "c": "s",
         "py": "yínháng de lìxī",
         "hv": "ngân hàng đích lợi tức"
        },
        {
         "t": "一年只有",
         "ico": "📅",
         "c": "v",
         "py": "yī nián zhǐyǒu",
         "hv": "nhất nên chỉ hữu"
        },
        {
         "t": "两百来块",
         "ico": "💴",
         "c": "o",
         "py": "liǎng bǎi lái kuài",
         "hv": "lưỡng bách lai khối"
        }
       ],
       "traceWord": "利息",
       "py": "Yínháng de lìxī yī nián zhǐyǒu liǎng bǎi lái kuài",
       "traceKey": "lixi"
      },
      {
       "scene": "👴🏠💰",
       "full": "老王的财产有三十来万",
       "vi": "Tài sản của ông Vương có khoảng ba mươi vạn",
       "parts": [
        {
         "t": "老王的财产",
         "ico": "👴",
         "c": "s",
         "py": "Lǎowáng de cáichǎn",
         "hv": "lão vương đích tài _"
        },
        {
         "t": "有",
         "ico": "✋",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "三十来万",
         "ico": "💰",
         "c": "o",
         "py": "sān shí lái wàn",
         "hv": "tam thập lai vạn"
        }
       ],
       "traceWord": "财产",
       "py": "Lǎowáng de cáichǎn yǒu sān shí lái wàn",
       "traceKey": "caichan"
      },
      {
       "scene": "⏳💪💎",
       "full": "二十来年的努力给他带来了财富",
       "vi": "Hơn hai mươi năm nỗ lực đã mang lại của cải cho anh ấy",
       "parts": [
        {
         "t": "二十来年的努力",
         "ico": "💪",
         "c": "s",
         "py": "èr shí lái nián de nǔlì",
         "hv": "nhì thập lai nên đích _ lực"
        },
        {
         "t": "给他带来了",
         "ico": "🎁",
         "c": "v",
         "py": "gěi tā dàilái le",
         "hv": "cấp tha đai lai liễu"
        },
        {
         "t": "财富",
         "ico": "💎",
         "c": "o",
         "py": "cáifù",
         "hv": "tài phú"
        }
       ],
       "traceWord": "财富",
       "py": "Èr shí lái nián de nǔlì gěi tā dàilái le cáifù",
       "traceKey": "caifu"
      },
      {
       "scene": "👨🥇💴",
       "full": "他用高价买了十来克黄金",
       "vi": "Anh ấy đã mua khoảng mười gam vàng với giá cao",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "用高价买了",
         "ico": "💴",
         "c": "v",
         "py": "yòng gāojià mǎi le",
         "hv": "dụng cao giá mãi liễu"
        },
        {
         "t": "十来克黄金",
         "ico": "🥇",
         "c": "o",
         "py": "shí lái kè huángjīn",
         "hv": "thập lai khắc hoàng kim"
        }
       ],
       "traceWord": "黄金",
       "py": "Tā yòng gāojià mǎi le shí lái kè huángjīn",
       "traceKey": "huangjin"
      },
      {
       "scene": "📊💹🤔",
       "full": "这次投资的收益只有十来万",
       "vi": "Lợi nhuận của lần đầu tư này chỉ khoảng mười vạn",
       "parts": [
        {
         "t": "这次投资的收益",
         "ico": "📊",
         "c": "s",
         "py": "zhè cì tóuzī de shōuyì",
         "hv": "_ thứ đầu _ đích thu ích"
        },
        {
         "t": "只有",
         "ico": "☝️",
         "c": "v",
         "py": "zhǐyǒu",
         "hv": "chỉ hữu"
        },
        {
         "t": "十来万",
         "ico": "💰",
         "c": "o",
         "py": "shí lái wàn",
         "hv": "thập lai vạn"
        }
       ],
       "traceWord": "投资",
       "py": "Zhè cì tóuzī de shōuyì zhǐyǒu shí lái wàn",
       "traceKey": "touzi"
      },
      {
       "scene": "🙋‍♂️🗓️🐷",
       "full": "我每个月节省三百来块钱",
       "vi": "Mỗi tháng tôi tiết kiệm được khoảng ba trăm tệ",
       "parts": [
        {
         "t": "我",
         "ico": "🙋‍♂️",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "每个月节省",
         "ico": "🗓️",
         "c": "v",
         "py": "měi gè yuè jiéshěng",
         "hv": "mỗi cá nguyệt tiết tỉnh"
        },
        {
         "t": "三百来块钱",
         "ico": "🐷",
         "c": "o",
         "py": "sān bǎi lái kuài qián",
         "hv": "tam bách lai khối tiền"
        }
       ],
       "traceWord": "节省",
       "py": "Wǒ měi gè yuè jiéshěng sān bǎi lái kuài qián",
       "traceKey": "jiesheng"
      }
     ],
     "qaList": [
      {
       "q": "你们公司今年投入了多少钱？",
       "qvi": "Công ty các bạn năm nay đã đầu tư bao nhiêu tiền?",
       "scene": "🏢💰",
       "ans": "我们投入了二十来万",
       "opts": [
        {
         "txt": "我们明天去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng"
        },
        {
         "txt": "我们投入了二十来万",
         "ico": "💰",
         "py": "Wǒmen tóurù le èr shí lái wàn"
        },
        {
         "txt": "我只喝了一杯茶",
         "ico": "🍵",
         "py": "Wǒ zhǐ hē le yī bēi chá"
        }
       ],
       "qpy": "Nǐmen gōngsī jīnnián tóurù le duōshao qián?"
      },
      {
       "q": "这个月的房租降了多少？",
       "qvi": "Tiền thuê nhà tháng này giảm bao nhiêu?",
       "scene": "🏠📉",
       "ans": "降了三百来块",
       "opts": [
        {
         "txt": "昨天下了一场雨",
         "ico": "🌧️",
         "py": "Zuótiān xià le yī chǎng yǔ"
        },
        {
         "txt": "他们是我的同事",
         "ico": "👥",
         "py": "Tāmen shì wǒ de tóngshì"
        },
        {
         "txt": "降了三百来块",
         "ico": "📉",
         "py": "Jiàng le sān bǎi lái kuài"
        }
       ],
       "qpy": "Zhè gè yuè de fángzū jiàng le duōshao?"
      },
      {
       "q": "公司今年减了多少人？",
       "qvi": "Năm nay công ty cắt giảm bao nhiêu người?",
       "scene": "🏢👥",
       "ans": "减了二十来个人",
       "opts": [
        {
         "txt": "减了二十来个人",
         "ico": "👥",
         "py": "Jiǎn le èr shí lái gèrén"
        },
        {
         "txt": "今年夏天很热",
         "ico": "☀️",
         "py": "Jīnnián xiàtiān hěn rè"
        },
        {
         "txt": "我们下午去开会",
         "ico": "📋",
         "py": "Wǒmen xiàwǔ qù kāihuì"
        }
       ],
       "qpy": "Gōngsī jīnnián jiǎn le duōshao rén?"
      },
      {
       "q": "没有很多钱的人可以投资吗？",
       "qvi": "Người không có nhiều tiền có thể đầu tư không?",
       "scene": "👤💴",
       "ans": "穷人也可以投一点儿钱",
       "opts": [
        {
         "txt": "他小时候家里很穷",
         "ico": "🏚️",
         "py": "Tā xiǎoshíhou jiā li hěn qióng"
        },
        {
         "txt": "我今天坐车来的",
         "ico": "🚌",
         "py": "Wǒ jīntiān zuò chē lái de"
        },
        {
         "txt": "穷人也可以投一点儿钱",
         "ico": "💴",
         "py": "Qióngrén yě kěyǐ tóu yīdiǎnr qián"
        }
       ],
       "qpy": "Méiyǒu hěn duō qián de rén kěyǐ tóuzī ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nói về lương thưởng với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho một đồng nghiệp (hoặc tự nói thành tiếng) về khoản thưởng cuối năm của bạn, dùng số ước lượng: <i>\"公司发了三千来块奖金\"</i>.",
       "<b>Bước 2:</b> Kể về tiền tiết kiệm hằng tháng và tiền lãi ngân hàng của bạn: <i>\"我每个月节省三百来块钱\"</i>, <i>\"银行的利息一年只有两百来块\"</i>.",
       "<b>Bước 3:</b> Hỏi đồng nghiệp về đãi ngộ và kế hoạch đầu tư của họ, rồi nhận xét: <i>\"这次投资的收益只有十来万\"</i>. Nói đủ 3 câu với 来 trong 12 phút."
      ]
     }
    },
    {
     "id": "4.10B",
     "name": "Bài 4.10B: Rủi ro, phá sản và áp lực",
     "grammar": {
      "formulas": [
       "⚠️ 万一 + 🏢 公司 + 💥 破产",
       "➡️ 万一 + 📉 情况不好 + , + 🙋 我们 + 就 + 🔧 想办法",
       "❓ 万一 + 😟 出了问题 + , + 怎么办？"
      ],
      "tip": "Cấu trúc \"万一……，（就）……\" (wànyī, âm Hán Việt: vạn nhất) nghĩa là \"nhỡ mà... thì...\", dùng cho tình huống xấu rất ít khả năng xảy ra. Vế đầu nêu giả thiết xấu sau 万一, vế sau thường có 就 để nêu cách xử lý hoặc hậu quả.",
      "vn_tip": "Người Việt hay dùng 万一 cho chuyện chắc chắn hoặc chuyện tốt (万一我赢了...). Sai: 万一 chỉ dùng cho khả năng xấu, nhỏ. Với giả thiết bình thường hãy dùng 如果 hoặc 要是."
     },
     "chunks": [
      {
       "scene": "🍀😕🎲",
       "full": "万一运气不好我们就会输",
       "vi": "Nhỡ vận may không tốt thì chúng ta sẽ thua",
       "parts": [
        {
         "t": "万一运气",
         "ico": "🍀",
         "c": "s",
         "py": "wànyī yùnqi",
         "hv": "vạn nhất vận khí"
        },
        {
         "t": "不好",
         "ico": "😕",
         "c": "v",
         "py": "bù hǎo",
         "hv": "bất háo"
        },
        {
         "t": "我们就会输",
         "ico": "🎲",
         "c": "o",
         "py": "wǒmen jiù huì shū",
         "hv": "ngã món _ hội thâu"
        }
       ],
       "traceWord": "运气",
       "py": "Wànyī yùnqi bù hǎo wǒmen jiù huì shū",
       "traceKey": "yunqi"
      },
      {
       "scene": "😫🛑☕",
       "full": "万一你受不了我们就休息一下儿",
       "vi": "Nhỡ bạn chịu không nổi thì chúng ta nghỉ một lát",
       "parts": [
        {
         "t": "万一你",
         "ico": "🧑",
         "c": "s",
         "py": "wànyī nǐ",
         "hv": "vạn nhất nể"
        },
        {
         "t": "受不了",
         "ico": "😫",
         "c": "v",
         "py": "shòubuliǎo",
         "hv": "thụ bất liễu"
        },
        {
         "t": "我们就休息一下儿",
         "ico": "☕",
         "c": "o",
         "py": "wǒmen jiù xiūxi yīxiàr",
         "hv": "ngã món _ hưu tức nhất hạ _"
        }
       ],
       "traceWord": "受不了",
       "py": "Wànyī nǐ shòubuliǎo wǒmen jiù xiūxi yīxiàr",
       "traceKey": "shoubuliao"
      },
      {
       "scene": "🏆🙅😊",
       "full": "万一没赢也不要紧我们就明年再来",
       "vi": "Nhỡ không thắng cũng không sao, sang năm chúng ta lại đến",
       "parts": [
        {
         "t": "万一没赢",
         "ico": "🏆",
         "c": "s",
         "py": "wànyī méi yíng",
         "hv": "vạn nhất một _"
        },
        {
         "t": "也不要紧",
         "ico": "👌",
         "c": "v",
         "py": "yě bùyàojǐn",
         "hv": "dã bất yếu khẩn"
        },
        {
         "t": "我们就明年再来",
         "ico": "📅",
         "c": "o",
         "py": "wǒmen jiù míngnián zài lái",
         "hv": "ngã món _ minh nên tái lai"
        }
       ],
       "traceWord": "不要紧",
       "py": "Wànyī méi yíng yě bùyàojǐn wǒmen jiù míngnián zài lái",
       "traceKey": "buyaojin"
      },
      {
       "scene": "🏢💥💼",
       "full": "万一公司破产我们就得找新工作",
       "vi": "Nhỡ công ty phá sản thì chúng ta phải tìm việc mới",
       "parts": [
        {
         "t": "万一公司",
         "ico": "🏢",
         "c": "s",
         "py": "wànyī gōngsī",
         "hv": "vạn nhất công ti"
        },
        {
         "t": "破产",
         "ico": "💥",
         "c": "v",
         "py": "pòchǎn",
         "hv": "phá _"
        },
        {
         "t": "我们就得找新工作",
         "ico": "💼",
         "c": "o",
         "py": "wǒmen jiù dé zhǎo xīn gōngzuò",
         "hv": "ngã món _ đắc quơ tân công tác"
        }
       ],
       "traceWord": "破产",
       "py": "Wànyī gōngsī pòchǎn wǒmen jiù dé zhǎo xīn gōngzuò",
       "traceKey": "pochan"
      },
      {
       "scene": "📉😰🚪",
       "full": "万一生意不好我就被迫关门",
       "vi": "Nhỡ việc làm ăn không tốt thì tôi buộc phải đóng cửa",
       "parts": [
        {
         "t": "万一生意不好",
         "ico": "📉",
         "c": "s",
         "py": "wànyī shēngyi bù hǎo",
         "hv": "vạn nhất sinh ý bất háo"
        },
        {
         "t": "我就被迫",
         "ico": "😰",
         "c": "v",
         "py": "wǒ jiù bèipò",
         "hv": "ngã _ bị bách"
        },
        {
         "t": "关门",
         "ico": "🚪",
         "c": "o",
         "py": "guān mén",
         "hv": "quan môn"
        }
       ],
       "traceWord": "被迫",
       "py": "Wànyī shēngyi bù hǎo wǒ jiù bèipò guān mén",
       "traceKey": "beipo"
      },
      {
       "scene": "🏪🔒🏠",
       "full": "万一这家店倒闭了老板就不得不卖房子",
       "vi": "Nhỡ cửa hàng này đóng cửa thì ông chủ buộc phải bán nhà",
       "parts": [
        {
         "t": "万一这家店",
         "ico": "🏪",
         "c": "s",
         "py": "wànyī zhè jiā diàn",
         "hv": "vạn nhất _ gia điếm"
        },
        {
         "t": "倒闭了",
         "ico": "🔒",
         "c": "v",
         "py": "dǎobì le",
         "hv": "đảo bế liễu"
        },
        {
         "t": "老板就不得不卖房子",
         "ico": "🏠",
         "c": "o",
         "py": "lǎobǎn jiù bùdébù mài fángzi",
         "hv": "lão ván _ bất đắc bất mại phòng tí"
        }
       ],
       "traceWord": "倒闭",
       "py": "Wànyī zhè jiā diàn dǎobì le lǎobǎn jiù bùdébù mài fángzi",
       "traceKey": "daobi"
      },
      {
       "scene": "🚨🛠️🧠",
       "full": "万一问题很严重我们就想办法对付它",
       "vi": "Nhỡ vấn đề rất nghiêm trọng thì chúng ta sẽ nghĩ cách đối phó",
       "parts": [
        {
         "t": "万一问题很严重",
         "ico": "🚨",
         "c": "s",
         "py": "wànyī wèntí hěn yánzhòng",
         "hv": "vạn nhất _ _ _ nghiêm trọng"
        },
        {
         "t": "我们就想办法",
         "ico": "💡",
         "c": "v",
         "py": "wǒmen jiù xiǎng bànfǎ",
         "hv": "ngã món _ tưởng _ pháp"
        },
        {
         "t": "对付它",
         "ico": "🛠️",
         "c": "o",
         "py": "duìfu tā",
         "hv": "đỗi phó _"
        }
       ],
       "traceWord": "严重",
       "py": "Wànyī wèntí hěn yánzhòng wǒmen jiù xiǎng bànfǎ duìfu tā",
       "traceKey": "yanzhong"
      },
      {
       "scene": "⚠️🤝⚖️",
       "full": "万一出了问题我们就一起承受这个压力",
       "vi": "Nhỡ xảy ra vấn đề thì chúng ta cùng gánh chịu áp lực này",
       "parts": [
        {
         "t": "万一出了问题",
         "ico": "⚠️",
         "c": "s",
         "py": "wànyī chū le wèntí",
         "hv": "vạn nhất xuất liễu _ _"
        },
        {
         "t": "我们就一起承受",
         "ico": "🤝",
         "c": "v",
         "py": "wǒmen jiù yīqǐ chéngshòu",
         "hv": "ngã món _ nhất khởi thừa thụ"
        },
        {
         "t": "这个压力",
         "ico": "⚖️",
         "c": "o",
         "py": "zhè gè yālì",
         "hv": "_ cá áp lực"
        }
       ],
       "traceWord": "承受",
       "py": "Wànyī chū le wèntí wǒmen jiù yīqǐ chéngshòu zhè gè yālì",
       "traceKey": "chengshou"
      }
     ],
     "qaList": [
      {
       "q": "那条船为什么沉了？",
       "qvi": "Tại sao chiếc thuyền đó chìm?",
       "scene": "🚢🌊",
       "ans": "因为风太大了",
       "opts": [
        {
         "txt": "因为他们不想去",
         "ico": "🙅",
         "py": "Yīnwèi tāmen bù xiǎng qù"
        },
        {
         "txt": "因为风太大了",
         "ico": "🌬️",
         "py": "Yīnwèi fēng tài dà le"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Nà tiáo chuán wèi shénme chén le?"
      },
      {
       "q": "这个坏消息对他的刺激大不大？",
       "qvi": "Tin xấu này có gây cú sốc lớn cho anh ấy không?",
       "scene": "📰😢",
       "ans": "他的心情很沉重",
       "opts": [
        {
         "txt": "他明天去北京",
         "ico": "✈️",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "他在银行工作",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò"
        },
        {
         "txt": "他的心情很沉重",
         "ico": "😢",
         "py": "Tā de xīnqíng hěn chénzhòng"
        }
       ],
       "qpy": "Zhè gè huài xiāoxi duì tā de cìjī dà bù dà?"
      },
      {
       "q": "怎么才能阻止这种事情发生？",
       "qvi": "Làm sao mới ngăn được chuyện như thế xảy ra?",
       "scene": "🚧🙅",
       "ans": "我们要提前做好准备",
       "opts": [
        {
         "txt": "我们要提前做好准备",
         "ico": "📝",
         "py": "Wǒmen yào tíqián zuò hǎo zhǔnbèi"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "他们是我的同事",
         "ico": "👥",
         "py": "Tāmen shì wǒ de tóngshì"
        }
       ],
       "qpy": "Zěnme cáinéng zǔzhǐ zhè zhǒng shìqing fāshēng?"
      },
      {
       "q": "万一有危险，我们应该怎么办？",
       "qvi": "Nhỡ có nguy hiểm thì chúng ta nên làm sao?",
       "scene": "⚠️🏃",
       "ans": "先避一避再想办法",
       "opts": [
        {
         "txt": "先吃饭再喝茶",
         "ico": "🍚",
         "py": "Xiān chīfàn zài hē chá"
        },
        {
         "txt": "先买票再坐车",
         "ico": "🎫",
         "py": "Xiān mǎi piào zài zuò chē"
        },
        {
         "txt": "先避一避再想办法",
         "ico": "🏃",
         "py": "Xiān bì yī bì zài xiǎng bànfǎ"
        }
       ],
       "qpy": "Wànyī yǒu wēixiǎn wǒmen yīnggāi zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Bàn kế hoạch dự phòng rủi ro với đối tác",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn họp với đối tác về một dự án mới. Nêu một rủi ro nhỏ nhưng có thể xảy ra: <i>\"万一运气不好我们就会输\"</i>.",
       "<b>Bước 2:</b> Đưa ra phương án xử lý cho từng rủi ro: <i>\"万一问题很严重我们就想办法对付它\"</i>, <i>\"万一出了问题我们就一起承受这个压力\"</i>.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp tóm tắt thỏa thuận, dùng 万一 ít nhất 3 lần với 3 tình huống khác nhau (hết tiền, bị trễ tiến độ, đối tác rút lui) trong 12 phút."
      ]
     }
    },
    {
     "id": "4.10C",
     "name": "Bài 4.10C: Thống kê, đo lường và dự báo",
     "grammar": {
      "formulas": [
       "🔢 三 + 点 + 五",
       "➗ 三 + 分之 + 一",
       "💯 百分之 + 十",
       "✖️ 原来的 + 两 + 倍"
      ],
      "tip": "Số thập phân đọc bằng 点 (diǎn, điểm): 3.5 là 三点五. Phân số \"mẫu số + 分之 + tử số\": 1/3 là 三分之一 (đọc mẫu trước). Phần trăm là 百分之 + số: 10% là 百分之十. Bội số dùng 倍 (bèi, bội): 两倍 là gấp đôi. Chữ 0 sau dấu thập phân đọc là 零.",
      "vn_tip": "Người Việt hay đọc phân số theo thứ tự tiếng Việt (tử trước, mẫu sau) và nói 一分之三. Cách đúng của tiếng Trung là mẫu trước, tử sau: 三分之一 (một phần ba). Cũng đừng nói 百分十, phải là 百分之十."
     },
     "chunks": [
      {
       "scene": "📝📊🙂",
       "full": "这次考试全班的平均分是八十七点五",
       "vi": "Điểm trung bình của cả lớp trong kỳ thi này là 87,5",
       "parts": [
        {
         "t": "这次考试全班的平均分",
         "ico": "📝",
         "c": "s",
         "py": "zhè cì kǎoshì quán bān de píngjūn fēn",
         "hv": "_ thứ khảo thí toàn ban đích bình quân phân"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "八十七点五",
         "ico": "💯",
         "c": "o",
         "py": "bā shí qī diǎn wǔ",
         "hv": "bát thập thất điểm ngũ"
        }
       ],
       "traceWord": "平均",
       "py": "Zhè cì kǎoshì quán bān de píngjūn fēn shì bā shí qī diǎn wǔ",
       "traceKey": "pingjun"
      },
      {
       "scene": "📊📈💰",
       "full": "统计显示今年的收入增加了百分之十",
       "vi": "Thống kê cho thấy thu nhập năm nay tăng 10 phần trăm",
       "parts": [
        {
         "t": "统计",
         "ico": "📊",
         "c": "s",
         "py": "tǒngjì",
         "hv": "thống kể"
        },
        {
         "t": "显示",
         "ico": "👀",
         "c": "v",
         "py": "xiǎnshì",
         "hv": "hiển thị"
        },
        {
         "t": "今年的收入增加了百分之十",
         "ico": "📈",
         "c": "o",
         "py": "jīnnián de shōurù zēngjiā le bǎi fēn zhī shí",
         "hv": "kim nên đích thu nhập tăng gia liễu bách phân chi thập"
        }
       ],
       "traceWord": "统计",
       "py": "Tǒngjì xiǎnshì jīnnián de shōurù zēngjiā le bǎi fēn zhī shí",
       "traceKey": "tongji"
      },
      {
       "scene": "🗓️💵📉",
       "full": "这个月的费用比上个月少了三分之一",
       "vi": "Chi phí tháng này ít hơn tháng trước một phần ba",
       "parts": [
        {
         "t": "这个月的费用",
         "ico": "💵",
         "c": "s",
         "py": "zhè gè yuè de fèiyong",
         "hv": "_ cá nguyệt đích phí dụng"
        },
        {
         "t": "比上个月少了",
         "ico": "📉",
         "c": "v",
         "py": "bǐ shàng gè yuè shǎo le",
         "hv": "tỉ thượng cá nguyệt thiểu liễu"
        },
        {
         "t": "三分之一",
         "ico": "➗",
         "c": "o",
         "py": "sān fēn zhī yī",
         "hv": "tam phân chi nhất"
        }
       ],
       "traceWord": "费用",
       "py": "Zhè gè yuè de fèiyong bǐ shàng gè yuè shǎo le sān fēn zhī yī",
       "traceKey": "feiyong"
      },
      {
       "scene": "🪑📏🔢",
       "full": "这张桌子的测量结果是一点二米",
       "vi": "Kết quả đo chiếc bàn này là 1,2 mét",
       "parts": [
        {
         "t": "这张桌子的测量结果",
         "ico": "📏",
         "c": "s",
         "py": "zhè zhāng zhuōzi de cèliáng jiéguǒ",
         "hv": "_ trương _ tí đích trắc _ kết quả"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "一点二米",
         "ico": "🔢",
         "c": "o",
         "py": "yī diǎn èr mǐ",
         "hv": "nhất điểm nhì _"
        }
       ],
       "traceWord": "测量",
       "py": "Zhè zhāng zhuōzi de cèliáng jiéguǒ shì yī diǎn èr mǐ",
       "traceKey": "celiang"
      },
      {
       "scene": "🆕🧪⏱️",
       "full": "新产品的测试时间是原来的两倍",
       "vi": "Thời gian kiểm tra sản phẩm mới gấp đôi trước đây",
       "parts": [
        {
         "t": "新产品的测试时间",
         "ico": "🧪",
         "c": "s",
         "py": "xīn chǎnpǐn de cèshì shíjiān",
         "hv": "tân _ phẩm đích trắc thí thì gian"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "原来的两倍",
         "ico": "✖️",
         "c": "o",
         "py": "yuánlái de liǎng bèi",
         "hv": "nguyên lai đích lưỡng bội"
        }
       ],
       "traceWord": "测试",
       "py": "Xīn chǎnpǐn de cèshì shíjiān shì yuánlái de liǎng bèi",
       "traceKey": "ceshi"
      },
      {
       "scene": "🔍🏭✅",
       "full": "检测发现百分之九十八的产品都合格",
       "vi": "Kiểm tra phát hiện 98 phần trăm sản phẩm đều đạt chuẩn",
       "parts": [
        {
         "t": "检测",
         "ico": "🔍",
         "c": "s",
         "py": "jiǎncè",
         "hv": "ghém trắc"
        },
        {
         "t": "发现",
         "ico": "💡",
         "c": "v",
         "py": "fāxiàn",
         "hv": "_ hiện"
        },
        {
         "t": "百分之九十八的产品都合格",
         "ico": "✅",
         "c": "o",
         "py": "bǎi fēn zhī jiǔ shí bā de chǎnpǐn dōu hégé",
         "hv": "bách phân chi cửu thập bát đích _ phẩm đô hợp cách"
        }
       ],
       "traceWord": "检测",
       "py": "Jiǎncè fāxiàn bǎi fēn zhī jiǔ shí bā de chǎnpǐn dōu hégé",
       "traceKey": "jiance"
      },
      {
       "scene": "⚖️📑💹",
       "full": "对比后得出的结论是销售增加了一倍",
       "vi": "Kết luận rút ra sau khi so sánh là doanh số tăng gấp đôi",
       "parts": [
        {
         "t": "对比后",
         "ico": "⚖️",
         "c": "s",
         "py": "duìbǐ hòu",
         "hv": "đỗi tỉ hậu"
        },
        {
         "t": "得出的结论是",
         "ico": "📑",
         "c": "v",
         "py": "déchū de jiélùn shì",
         "hv": "đắc xuất đích kết luận thị"
        },
        {
         "t": "销售增加了一倍",
         "ico": "💹",
         "c": "o",
         "py": "xiāoshòu zēngjiā le yī bèi",
         "hv": "tiu _ tăng gia liễu nhất bội"
        }
       ],
       "traceWord": "结论",
       "py": "Duìbǐ hòu déchū de jiélùn shì xiāoshòu zēngjiā le yī bèi",
       "traceKey": "jielun"
      },
      {
       "scene": "🧩🔮📈",
       "full": "综合各个方面预测明年会增长百分之五",
       "vi": "Tổng hợp các mặt, dự báo năm sau sẽ tăng 5 phần trăm",
       "parts": [
        {
         "t": "综合各个方面",
         "ico": "🧩",
         "c": "s",
         "py": "zōnghé gègè fāngmiàn",
         "hv": "_ hợp các cá phương _"
        },
        {
         "t": "预测",
         "ico": "🔮",
         "c": "v",
         "py": "yùcè",
         "hv": "dự trắc"
        },
        {
         "t": "明年会增长百分之五",
         "ico": "📈",
         "c": "o",
         "py": "míngnián huì zēngzhǎng bǎi fēn zhī wǔ",
         "hv": "minh nên hội tăng trường bách phân chi ngũ"
        }
       ],
       "traceWord": "预测",
       "py": "Zōnghé gègè fāngmiàn yùcè míngnián huì zēngzhǎng bǎi fēn zhī wǔ",
       "traceKey": "yuce"
      }
     ],
     "qaList": [
      {
       "q": "你能不能用一句话概括这份报告？",
       "qvi": "Bạn có thể tóm tắt bản báo cáo này trong một câu không?",
       "scene": "📄🗣️",
       "ans": "今年的收入比去年多了一半",
       "opts": [
        {
         "txt": "我们明天下午开会",
         "ico": "📋",
         "py": "Wǒmen míngtiān xiàwǔ kāihuì"
        },
        {
         "txt": "今年的收入比去年多了一半",
         "ico": "💰",
         "py": "Jīnnián de shōurù bǐ qùnián duō le yībàn"
        },
        {
         "txt": "他今天没来上班",
         "ico": "🏢",
         "py": "Tā jīntiān méi lái shàngbān"
        }
       ],
       "qpy": "Nǐ néng bu néng yòng yī jù huà gàikuò zhè fèn bàogào?"
      },
      {
       "q": "现在的市场形势怎么样？",
       "qvi": "Tình hình thị trường hiện nay thế nào?",
       "scene": "🛒📊",
       "ans": "比去年好多了",
       "opts": [
        {
         "txt": "比去年好多了",
         "ico": "📈",
         "py": "Bǐ qùnián hǎoduō le"
        },
        {
         "txt": "他在银行工作",
         "ico": "🏦",
         "py": "Tā zài yínháng gōngzuò"
        },
        {
         "txt": "我们明天去北京",
         "ico": "✈️",
         "py": "Wǒmen míngtiān qù Běijīng"
        }
       ],
       "qpy": "Xiànzài de shìchǎng xíngshì zěnmeyàng?"
      },
      {
       "q": "你怎么看明年的发展趋势？",
       "qvi": "Bạn nhìn nhận xu hướng phát triển năm sau thế nào?",
       "scene": "📅📈",
       "ans": "我觉得明年会继续增长",
       "opts": [
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "我觉得明年会继续增长",
         "ico": "📈",
         "py": "Wǒ juéde míngnián huì jìxù zēngzhǎng"
        },
        {
         "txt": "昨天下了一场雨",
         "ico": "🌧️",
         "py": "Zuótiān xià le yī chǎng yǔ"
        }
       ],
       "qpy": "Nǐ zěnme kàn míngnián de fāzhǎn qūshì?"
      },
      {
       "q": "这台机器好不好用，你能测一下吗？",
       "qvi": "Chiếc máy này dùng có tốt không, bạn đo thử một chút được không?",
       "scene": "🖨️🔧",
       "ans": "没问题我马上就测一下",
       "opts": [
        {
         "txt": "他们是我的同事",
         "ico": "👥",
         "py": "Tāmen shì wǒ de tóngshì"
        },
        {
         "txt": "没问题我马上就测一下",
         "ico": "🔧",
         "py": "Méi wèntí wǒ mǎshàng jiù cè yī xià"
        },
        {
         "txt": "今年夏天很热",
         "ico": "☀️",
         "py": "Jīnnián xiàtiān hěn rè"
        }
       ],
       "qpy": "Zhè tái jīqì hǎo bù hǎo yòng nǐ néng cè yī xià ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo số liệu cho sếp",
      "steps": [
       "<b>Bước 1:</b> Chọn ba con số thật trong công việc (doanh thu, chi phí, điểm trung bình...) và đọc thành tiếng bằng tiếng Trung, ví dụ <i>\"统计显示今年的收入增加了百分之十\"</i>.",
       "<b>Bước 2:</b> So sánh hai kỳ với phân số hoặc bội số: <i>\"这个月的费用比上个月少了三分之一\"</i>, <i>\"新产品的测试时间是原来的两倍\"</i>.",
       "<b>Bước 3:</b> Nhắn tin tóm tắt kết luận và dự báo cho sếp: <i>\"综合各个方面预测明年会增长百分之五\"</i>. Hoàn thành trong 12 phút."
      ]
     }
    }
   ]
  },
  "4.11": {
   "lessons": [
    {
     "id": "4.11A",
     "name": "Bài 4.11A: Mạng, tài khoản và thiết bị số",
     "grammar": {
      "formulas": [
       "🧑 我 + 1️⃣ 一个网址 + 🚫 也没 + ⚡ 记住",
       "🧑 他 + 1️⃣ 一次 + 🚫 也没 + ⚡ 登录",
       "🏢 办公室里 + 1️⃣ 一点儿网络 + 🚫 也 + ❌ 没有"
      ],
      "tip": "Cấu trúc 一 + lượng từ (+ danh từ) + 也/都 + 不/没 + động từ nhấn mạnh phủ định hoàn toàn: \"không… một cái nào\". Chữ khóa: 一 (yī, nhất), 也 (yě, dã), 没 (méi, một). 不 dùng cho thói quen/ý muốn, 没 dùng cho việc đã xảy ra.",
      "vn_tip": "Người Việt hay dịch sát \"tôi không nhớ một địa chỉ nào\" thành 我不记得一个网址 và quên 也/都. Cách đúng: 我一个网址也没记住. Cũng đừng đặt 一个 sau động từ phủ định rồi bỏ 也: phải để cụm 一+lượng từ trước 也/都 và trước động từ."
     },
     "chunks": [
      {
       "scene": "📱🔗🤔",
       "full": "我一个网址也没记住",
       "vi": "Tôi không nhớ nổi một địa chỉ web nào",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "一个网址也没",
         "ico": "🔗",
         "c": "v",
         "py": "yī gè wǎngzhǐ yě méi",
         "hv": "nhất cá võng xởi dã một"
        },
        {
         "t": "记住",
         "ico": "🧠",
         "c": "o",
         "py": "jìzhù",
         "hv": "kí trú"
        }
       ],
       "traceWord": "网址",
       "py": "Wǒ yī gè wǎngzhǐ yě méi jìzhù",
       "traceKey": "wangzhi"
      },
      {
       "scene": "💾📊⬇️",
       "full": "我一份数据也没下载",
       "vi": "Tôi không tải xuống một tệp dữ liệu nào",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "一份数据也没",
         "ico": "📊",
         "c": "v",
         "py": "yī fèn shùjù yě méi",
         "hv": "nhất phần số cớ dã một"
        },
        {
         "t": "下载",
         "ico": "⬇️",
         "c": "o",
         "py": "xiàzài",
         "hv": "hạ tải"
        }
       ],
       "traceWord": "数据",
       "py": "Wǒ yī fèn shùjù yě méi xiàzài",
       "traceKey": "shuju"
      },
      {
       "scene": "🏢📶❌",
       "full": "办公室里一点儿网络也没有",
       "vi": "Trong văn phòng không có một chút mạng nào",
       "parts": [
        {
         "t": "办公室里",
         "ico": "🏢",
         "c": "s",
         "py": "bàngōngshì lǐ",
         "hv": "_ công thất lịa"
        },
        {
         "t": "一点儿网络也",
         "ico": "📶",
         "c": "v",
         "py": "yīdiǎnr wǎngluò yě",
         "hv": "nhất điểm _ võng rạc dã"
        },
        {
         "t": "没有",
         "ico": "❌",
         "c": "o",
         "py": "méiyǒu",
         "hv": "một hữu"
        }
       ],
       "traceWord": "网络",
       "py": "Bàngōngshì lǐ yīdiǎnr wǎngluò yě méiyǒu",
       "traceKey": "wangluo"
      },
      {
       "scene": "🔑🤫🙅",
       "full": "我一个人也没告诉这个密码",
       "vi": "Tôi không nói mật khẩu này cho một ai cả",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "一个人也没",
         "ico": "🙅",
         "c": "v",
         "py": "yī gèrén yě méi",
         "hv": "nhất cá nhân dã một"
        },
        {
         "t": "告诉这个密码",
         "ico": "🔑",
         "c": "o",
         "py": "gàosu zhè gè mìmǎ",
         "hv": "_ tố _ cá mật _"
        }
       ],
       "traceWord": "密码",
       "py": "Wǒ yī gèrén yě méi gàosu zhè gè mìmǎ",
       "traceKey": "mima"
      },
      {
       "scene": "💬📱🚪",
       "full": "他一次也没登录过微信",
       "vi": "Anh ấy chưa đăng nhập WeChat một lần nào",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一次也没",
         "ico": "1️⃣",
         "c": "v",
         "py": "yī cì yě méi",
         "hv": "nhất thứ dã một"
        },
        {
         "t": "登录过微信",
         "ico": "💬",
         "c": "o",
         "py": "dēnglù guò wēixìn",
         "hv": "đăng _ quá vi tín"
        }
       ],
       "traceWord": "登录",
       "py": "Tā yī cì yě méi dēnglù guò wēixìn",
       "traceKey": "denglu"
      },
      {
       "scene": "🎧🔌🎒",
       "full": "我的耳机和充电器一个也没带",
       "vi": "Tai nghe và bộ sạc của tôi, cái nào cũng không mang theo",
       "parts": [
        {
         "t": "我的耳机和充电器",
         "ico": "🎧",
         "c": "s",
         "py": "wǒ de ěrjī hé chōngdiànqì",
         "hv": "ngã đích nhĩ cơ hoà sung _ khí"
        },
        {
         "t": "一个也",
         "ico": "1️⃣",
         "c": "v",
         "py": "yī gè yě",
         "hv": "nhất cá dã"
        },
        {
         "t": "没带",
         "ico": "🎒",
         "c": "o",
         "py": "méi dài",
         "hv": "một đai"
        }
       ],
       "traceWord": "耳机",
       "py": "Wǒ de ěrjī hé chōngdiànqì yī gè yě méi dài",
       "traceKey": "erji"
      },
      {
       "scene": "💿📁❌",
       "full": "旧光盘里一个文件也没有",
       "vi": "Trong đĩa cũ không có một tệp nào",
       "parts": [
        {
         "t": "旧光盘里",
         "ico": "💿",
         "c": "s",
         "py": "jiù guāngpán lǐ",
         "hv": "_ quang bàn lịa"
        },
        {
         "t": "一个文件也",
         "ico": "📁",
         "c": "v",
         "py": "yī gè wénjiàn yě",
         "hv": "nhất cá văn kiện dã"
        },
        {
         "t": "没有",
         "ico": "❌",
         "c": "o",
         "py": "méiyǒu",
         "hv": "một hữu"
        }
       ],
       "traceWord": "光盘",
       "py": "Jiù guāngpán lǐ yī gè wénjiàn yě méiyǒu",
       "traceKey": "guangpan"
      },
      {
       "scene": "🔌📟🔆",
       "full": "这些数码产品的电源一个也没关",
       "vi": "Nguồn của những sản phẩm kỹ thuật số này cái nào cũng chưa tắt",
       "parts": [
        {
         "t": "这些数码产品的电源",
         "ico": "📟",
         "c": "s",
         "py": "zhèxiē shùmǎ chǎnpǐn de diànyuán",
         "hv": "_ ta số _ _ phẩm đích _ nguồn"
        },
        {
         "t": "一个也",
         "ico": "1️⃣",
         "c": "v",
         "py": "yī gè yě",
         "hv": "nhất cá dã"
        },
        {
         "t": "没关",
         "ico": "🔌",
         "c": "o",
         "py": "méi guān",
         "hv": "một quan"
        }
       ],
       "traceWord": "电源",
       "py": "Zhèxiē shùmǎ chǎnpǐn de diànyuán yī gè yě méi guān",
       "traceKey": "dianyuan"
      }
     ],
     "qaList": [
      {
       "q": "手机没电了，你怎么办？",
       "qvi": "Điện thoại hết pin rồi, bạn làm sao?",
       "scene": "📱🪫🔌",
       "ans": "我去充电",
       "opts": [
        {
         "txt": "我去睡觉",
         "ico": "😴",
         "py": "Wǒ qù shuìjiào"
        },
        {
         "txt": "我去充电",
         "ico": "🔌",
         "py": "Wǒ qù chōngdiàn"
        },
        {
         "txt": "我去买票",
         "ico": "🎫",
         "py": "Wǒ qù mǎi piào"
        }
       ],
       "qpy": "Shǒujī méi diàn le nǐ zěnme bàn?"
      },
      {
       "q": "这份数据很重要，要怎么做？",
       "qvi": "Dữ liệu này rất quan trọng, nên làm thế nào?",
       "scene": "📊🔒",
       "ans": "一定要保密",
       "opts": [
        {
         "txt": "一定要保密",
         "ico": "🔒",
         "py": "Yīdìng yào bǎomì"
        },
        {
         "txt": "可以告诉所有人",
         "ico": "📢",
         "py": "Kěyǐ gàosu suǒ yǒu rén"
        },
        {
         "txt": "我明天去上海",
         "ico": "🚄",
         "py": "Wǒ míngtiān qù Shànghǎi"
        }
       ],
       "qpy": "Zhè fèn shùjù hěn zhòngyào yào zěnme zuò?"
      },
      {
       "q": "你知道他的秘密吗？",
       "qvi": "Bạn có biết bí mật của anh ấy không?",
       "scene": "🤫👨❓",
       "ans": "我一点儿也不知道",
       "opts": [
        {
         "txt": "我昨天去了公园",
         "ico": "🌳",
         "py": "Wǒ zuótiān qù le gōngyuán"
        },
        {
         "txt": "他是我的朋友",
         "ico": "🤝",
         "py": "Tā shì wǒ de péngyou"
        },
        {
         "txt": "我一点儿也不知道",
         "ico": "🤷",
         "py": "Wǒ yīdiǎnr yě bù zhīdào"
        }
       ],
       "qpy": "Nǐ zhīdào tā de mìmì ma?"
      },
      {
       "q": "怎么把网址发给同事？",
       "qvi": "Làm sao gửi địa chỉ web cho đồng nghiệp?",
       "scene": "🔗📤👥",
       "ans": "先复制网址再发送",
       "opts": [
        {
         "txt": "先睡觉再吃饭",
         "ico": "🍚",
         "py": "Xiān shuìjiào zài chīfàn"
        },
        {
         "txt": "先喝茶再回家",
         "ico": "🍵",
         "py": "Xiān hē chá zài huí jiā"
        },
        {
         "txt": "先复制网址再发送",
         "ico": "📋",
         "py": "Xiān fùzhì wǎngzhǐ zài fāsòng"
        }
       ],
       "qpy": "Zěnme bǎ wǎngzhǐ fā gěi tóngshì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin cho đồng nghiệp về tài khoản và mạng",
      "steps": [
       "<b>Bước 1:</b> Mở điện thoại, chọn một ứng dụng bạn dùng hằng ngày. Tự nói thành tiếng một câu phủ định nhấn mạnh về nó, ví dụ <i>\"我一次也没登录过微信\"</i> hoặc <i>\"我一个网址也没记住\"</i>, rồi thay bằng sự thật của bạn.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp (hoặc tự soạn trong ghi chú): hỏi họ cách gửi địa chỉ web, trả lời bằng <i>\"先复制网址再发送\"</i>, và nhắc họ giữ kín mật khẩu: <i>\"这个密码一定要保密\"</i>.",
       "<b>Bước 3:</b> Kiểm tra túi xách: nói thành tiếng đồ số nào bạn mang, chưa mang, ví dụ <i>\"我的耳机和充电器一个也没带\"</i> (nếu thật sự không mang), rồi viết ba câu mới theo mẫu 一…也没…"
      ]
     }
    },
    {
     "id": "4.11B",
     "name": "Bài 4.11B: Hệ thống, vận hành và bảo trì",
     "grammar": {
      "formulas": [
       "⚡ 一 + 动作 + 🔁 就 + 💥 结果",
       "📈 越 + 动词 + 📈 越 + 形容词",
       "💭 想 + 动词 + 🔁 就 + ✅ 动词"
      ],
      "tip": "Câu rút gọn (紧缩句) ghép hai vế không cần từ nối, thường dùng cặp 一…就… (hễ… là…), 越…越… (càng… càng…), 想…就… (muốn… thì…), 不…不… . Chữ khóa: 一 (yī, nhất), 就 (jiù, tựu), 越 (yuè, việt). Chủ ngữ thường chỉ nói một lần ở đầu.",
      "vn_tip": "Người Việt hay thêm 如果 / 所以 một cách thừa, hoặc đặt 越 sai chỗ như 越很好. Đúng: 越小越好, 越用越方便, sau mỗi 越 là một động từ hoặc tính từ, không dùng 很 ở giữa."
     },
     "chunks": [
      {
       "scene": "💻⚠️🙋",
       "full": "系统出问题我就找他",
       "vi": "Hệ thống có sự cố là tôi tìm anh ấy",
       "parts": [
        {
         "t": "系统出问题",
         "ico": "💻",
         "c": "s",
         "py": "xìtǒng chū wèntí",
         "hv": "hệ thống xuất _ _"
        },
        {
         "t": "我就",
         "ico": "🧑",
         "c": "v",
         "py": "wǒ jiù",
         "hv": "ngã _"
        },
        {
         "t": "找他",
         "ico": "🙋",
         "c": "o",
         "py": "zhǎo tā",
         "hv": "quơ tha"
        }
       ],
       "traceWord": "系统",
       "py": "Xìtǒng chū wèntí wǒ jiù zhǎo tā",
       "traceKey": "xitong"
      },
      {
       "scene": "📱🤖👍",
       "full": "智能手机越用越方便",
       "vi": "Điện thoại thông minh càng dùng càng tiện",
       "parts": [
        {
         "t": "智能手机",
         "ico": "📱",
         "c": "s",
         "py": "zhìnéng shǒujī",
         "hv": "trí năng thủ cơ"
        },
        {
         "t": "越用越",
         "ico": "📈",
         "c": "v",
         "py": "yuè yòng yuè",
         "hv": "việt dụng việt"
        },
        {
         "t": "方便",
         "ico": "👍",
         "c": "o",
         "py": "fāngbiàn",
         "hv": "phương tiện"
        }
       ],
       "traceWord": "智能",
       "py": "Zhìnéng shǒujī yuè yòng yuè fāngbiàn",
       "traceKey": "zhineng"
      },
      {
       "scene": "🏭🔧📏",
       "full": "公司研制的装置越小越好",
       "vi": "Thiết bị công ty nghiên cứu chế tạo càng nhỏ càng tốt",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "研制",
         "ico": "🔬",
         "c": "v",
         "py": "yánzhì",
         "hv": "nghiên chế"
        },
        {
         "t": "的装置越小越好",
         "ico": "🔧",
         "c": "o",
         "py": "de zhuāngzhì yuè xiǎo yuè hǎo",
         "hv": "đích trang trí việt tiểu việt háo"
        }
       ],
       "traceWord": "研制",
       "py": "Gōngsī yánzhì de zhuāngzhì yuè xiǎo yuè hǎo",
       "traceKey": "yanzhi"
      },
      {
       "scene": "🏭⚙️🔌",
       "full": "这台机器一移动就关闭",
       "vi": "Chiếc máy này hễ di chuyển là tự tắt",
       "parts": [
        {
         "t": "这台机器",
         "ico": "⚙️",
         "c": "s",
         "py": "zhè tái jīqì",
         "hv": "_ thai cơ khí"
        },
        {
         "t": "一移动",
         "ico": "🚚",
         "c": "v",
         "py": "yī yídòng",
         "hv": "nhất dời động"
        },
        {
         "t": "就关闭",
         "ico": "🔌",
         "c": "o",
         "py": "jiù guānbì",
         "hv": "_ quan bế"
        }
       ],
       "traceWord": "移动",
       "py": "Zhè tái jīqì yī yídòng jiù guānbì",
       "traceKey": "yidong"
      },
      {
       "scene": "⚙️🛞🚗",
       "full": "轮子不转动车就不走",
       "vi": "Bánh xe không quay thì xe không chạy",
       "parts": [
        {
         "t": "轮子",
         "ico": "🛞",
         "c": "s",
         "py": "lúnzi",
         "hv": "luân tí"
        },
        {
         "t": "不转动",
         "ico": "🔄",
         "c": "v",
         "py": "bù zhuǎndòng",
         "hv": "bất chuyển động"
        },
        {
         "t": "车就不走",
         "ico": "🚗",
         "c": "o",
         "py": "chē jiù bù zǒu",
         "hv": "xa _ bất tẩu"
        }
       ],
       "traceWord": "转动",
       "py": "Lúnzi bù zhuǎndòng chē jiù bù zǒu",
       "traceKey": "zhuandong"
      },
      {
       "scene": "📚💡🛠️",
       "full": "学到的知识想运用就要多练习",
       "vi": "Kiến thức đã học muốn vận dụng thì phải luyện tập nhiều",
       "parts": [
        {
         "t": "学到的知识",
         "ico": "📚",
         "c": "s",
         "py": "xué dào de zhīshi",
         "hv": "học đáo đích tri _"
        },
        {
         "t": "想运用",
         "ico": "💡",
         "c": "v",
         "py": "xiǎng yùnyòng",
         "hv": "tưởng vận dụng"
        },
        {
         "t": "就要多练习",
         "ico": "💪",
         "c": "o",
         "py": "jiùyào duō liànxí",
         "hv": "_ yếu đa luyện tập"
        }
       ],
       "traceWord": "运用",
       "py": "Xué dào de zhīshi xiǎng yùnyòng jiùyào duō liànxí",
       "traceKey": "yunyong"
      },
      {
       "scene": "🌬️🌳↔️",
       "full": "风一吹那棵大树就摆动",
       "vi": "Gió vừa thổi là cây lớn đó đung đưa",
       "parts": [
        {
         "t": "风",
         "ico": "🌬️",
         "c": "s",
         "py": "fēng",
         "hv": "phong"
        },
        {
         "t": "一吹",
         "ico": "💨",
         "c": "v",
         "py": "yī chuī",
         "hv": "nhất xuy"
        },
        {
         "t": "那棵大树就摆动",
         "ico": "🌳",
         "c": "o",
         "py": "nà kē dà shù jiù bǎidòng",
         "hv": "na quả đại thụ _ bẫy động"
        }
       ],
       "traceWord": "摆动",
       "py": "Fēng yī chuī nà kē dà shù jiù bǎidòng",
       "traceKey": "baidong"
      },
      {
       "scene": "📋🔢🔍",
       "full": "名单不按顺序排列就不好找",
       "vi": "Danh sách mà không sắp xếp theo thứ tự thì khó tìm",
       "parts": [
        {
         "t": "名单",
         "ico": "📋",
         "c": "s",
         "py": "míngdān",
         "hv": "danh đơn"
        },
        {
         "t": "不按顺序排列",
         "ico": "🔢",
         "c": "v",
         "py": "bú àn shùnxù páiliè",
         "hv": "bất án thuận tựa bài liệt"
        },
        {
         "t": "就不好找",
         "ico": "🔍",
         "c": "o",
         "py": "jiù bù hǎo zhǎo",
         "hv": "_ bất háo quơ"
        }
       ],
       "traceWord": "排列",
       "py": "Míngdān bú àn shùnxù páiliè jiù bù hǎo zhǎo",
       "traceKey": "pailie"
      }
     ],
     "qaList": [
      {
       "q": "这个符号叫什么？",
       "qvi": "Ký hiệu này gọi là gì?",
       "scene": "🔣❓",
       "ans": "这是括号",
       "opts": [
        {
         "txt": "这是苹果",
         "ico": "🍎",
         "py": "Zhè shì píngguǒ"
        },
        {
         "txt": "这是西瓜",
         "ico": "🍉",
         "py": "Zhè shì xīguā"
        },
        {
         "txt": "这是括号",
         "ico": "🔣",
         "py": "Zhè shì kuòhào"
        }
       ],
       "qpy": "Zhè gè fúhào jiào shénme?"
      },
      {
       "q": "你为什么要多看细节？",
       "qvi": "Tại sao bạn phải xem kỹ chi tiết?",
       "scene": "🔍📖",
       "ans": "这样能吸收更多知识",
       "opts": [
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        },
        {
         "txt": "这样能吸收更多知识",
         "ico": "📖",
         "py": "Zhèyàng néng xīshōu gèng duō zhīshi"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        }
       ],
       "qpy": "Nǐ wèi shénme yào duō kàn xìjié?"
      },
      {
       "q": "手机怎样才会响？",
       "qvi": "Điện thoại làm thế nào mới kêu?",
       "scene": "📱🤝🔔",
       "ans": "你一摇它就会响",
       "opts": [
        {
         "txt": "我想喝一杯茶",
         "ico": "🍵",
         "py": "Wǒ xiǎng hē yī bēi chá"
        },
        {
         "txt": "它昨天去北京了",
         "ico": "🚄",
         "py": "Tā zuótiān qù Běijīng le"
        },
        {
         "txt": "你一摇它就会响",
         "ico": "🔔",
         "py": "Nǐ yī yáo tā jiù huì xiǎng"
        }
       ],
       "qpy": "Shǒujī zěnyàng cái huì xiǎng?"
      },
      {
       "q": "想学好汉语该怎么办？",
       "qvi": "Muốn học giỏi tiếng Hán thì làm thế nào?",
       "scene": "🗣️👂📚",
       "ans": "多听多说就有进步",
       "opts": [
        {
         "txt": "多吃多睡就会有钱",
         "ico": "💰",
         "py": "Duō chī duō shuì jiù huì yǒu qián"
        },
        {
         "txt": "多听多说就有进步",
         "ico": "📈",
         "py": "Duō tīng duō shuō jiù yǒu jìnbù"
        },
        {
         "txt": "我们明天去公园吧",
         "ico": "🌳",
         "py": "Wǒmen míngtiān qù gōngyuán ba"
        }
       ],
       "qpy": "Xiǎng xué hǎo Hànyǔ gāi zěnme bàn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo sự cố hệ thống cho đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nghĩ tới một thiết bị hay phần mềm ở chỗ làm hay hỏng. Tự nói thành tiếng ba câu rút gọn về nó theo mẫu <i>\"系统出问题我就找他\"</i> và <i>\"智能手机越用越方便\"</i>, thay bằng tình huống của bạn.",
       "<b>Bước 2:</b> Gọi hoặc nhắn cho đồng nghiệp phụ trách kỹ thuật: mô tả sự cố, ví dụ <i>\"这台机器一移动就关闭\"</i>, rồi hỏi cách xử lý.",
       "<b>Bước 3:</b> Viết một lời khuyên ngắn cho người mới, dùng <i>\"想运用就要多练习\"</i> và <i>\"多听多说就有进步\"</i> làm mẫu, rồi đọc to lại hai lần."
      ]
     }
    },
    {
     "id": "4.11C",
     "name": "Bài 4.11C: Thông tin, ghi chép và truyền thông",
     "grammar": {
      "formulas": [
       "⏳ 自从 + 📌 事件 + 🔚 以来 + 🧑 我 + ⚡ 动词",
       "⏳ 自从 + 🏢 工作 + 🔚 以来 + 🧑 我 + 📖 一直写日记",
       "⏳ 自从 + 📱 用手机 + 🔚 以来 + 🧑 我 + 📅 很少看日历"
      ],
      "tip": "Mẫu 自从……以来 (hoặc 自……以来) = \"kể từ khi… đến nay\". Phần giữa 自从 và 以来 là một mốc thời gian hoặc sự kiện; vế sau nói tình trạng kéo dài từ đó đến giờ. Chữ khóa: 自从 (zìcóng, tự tùng), 以来 (yǐlái, dĩ lai), 一直 (yìzhí, nhất trực).",
      "vn_tip": "Người Việt hay quên 以来 và chỉ nói 自从工作我一直写日记, hoặc đặt 自从…以来 ở cuối câu. Đúng: phải đủ cả 自从 và 以来, đặt ở đầu câu, rồi mới đến chủ ngữ và hành động. Vế sau thường dùng 一直, 都, 常常 chứ không dùng 了 báo hiệu kết thúc."
     },
     "chunks": [
      {
       "scene": "💼⏳📓",
       "full": "自从工作以来我一直写日记",
       "vi": "Từ khi đi làm đến nay tôi luôn viết nhật ký",
       "parts": [
        {
         "t": "自从工作以来",
         "ico": "⏳",
         "c": "s",
         "py": "zìcóng gōngzuò yǐlái",
         "hv": "tự tòng công tác _ lai"
        },
        {
         "t": "我一直写",
         "ico": "✍️",
         "c": "v",
         "py": "wǒ yīzhí xiě",
         "hv": "ngã nhất _ tả"
        },
        {
         "t": "日记",
         "ico": "📓",
         "c": "o",
         "py": "rìjì",
         "hv": "nhật kí"
        }
       ],
       "traceWord": "日记",
       "py": "Zìcóng gōngzuò yǐlái wǒ yīzhí xiě rìjì",
       "traceKey": "riji"
      },
      {
       "scene": "📱⏳📅",
       "full": "自从用手机以来我很少看日历",
       "vi": "Từ khi dùng điện thoại đến nay tôi ít xem lịch",
       "parts": [
        {
         "t": "自从用手机以来",
         "ico": "📱",
         "c": "s",
         "py": "zìcóng yòng shǒujī yǐlái",
         "hv": "tự tòng dụng thủ cơ _ lai"
        },
        {
         "t": "我很少",
         "ico": "🧑",
         "c": "v",
         "py": "wǒ hěn shǎo",
         "hv": "ngã _ thiểu"
        },
        {
         "t": "看日历",
         "ico": "📅",
         "c": "o",
         "py": "kàn rìlì",
         "hv": "khán nhật _"
        }
       ],
       "traceWord": "日历",
       "py": "Zìcóng yòng shǒujī yǐlái wǒ hěn shǎo kàn rìlì",
       "traceKey": "rili"
      },
      {
       "scene": "⏰🌅🛏️",
       "full": "自从有了闹钟以来我每天都起得很早",
       "vi": "Từ khi có đồng hồ báo thức đến nay ngày nào tôi cũng dậy rất sớm",
       "parts": [
        {
         "t": "自从有了闹钟以来",
         "ico": "⏰",
         "c": "s",
         "py": "zìcóng yǒu le nàozhōng yǐlái",
         "hv": "tự tòng hữu liễu náo chuông _ lai"
        },
        {
         "t": "我每天都",
         "ico": "📆",
         "c": "v",
         "py": "wǒ měi tiān dōu",
         "hv": "ngã mỗi thiên đô"
        },
        {
         "t": "起得很早",
         "ico": "🌅",
         "c": "o",
         "py": "qǐ dé hěn zǎo",
         "hv": "khởi đắc _ tảo"
        }
       ],
       "traceWord": "闹钟",
       "py": "Zìcóng yǒu le nàozhōng yǐlái wǒ měi tiān dōu qǐ dé hěn zǎo",
       "traceKey": "naozhong"
      },
      {
       "scene": "✈️📷🏞️",
       "full": "自从旅行以来他拍了很多相片",
       "vi": "Từ khi đi du lịch đến nay anh ấy đã chụp rất nhiều ảnh",
       "parts": [
        {
         "t": "自从旅行以来",
         "ico": "✈️",
         "c": "s",
         "py": "zìcóng lǚxíng yǐlái",
         "hv": "tự tòng lữ hàng _ lai"
        },
        {
         "t": "他拍了",
         "ico": "📷",
         "c": "v",
         "py": "tā pāi le",
         "hv": "tha phếch liễu"
        },
        {
         "t": "很多相片",
         "ico": "🖼️",
         "c": "o",
         "py": "hěn duō xiàngpiàn",
         "hv": "_ đa tương phiến"
        }
       ],
       "traceWord": "相片",
       "py": "Zìcóng lǚxíng yǐlái tā pāi le hěn duō xiàngpiàn",
       "traceKey": "xiangpian"
      },
      {
       "scene": "💼🎤👥",
       "full": "自从上班以来我采访过很多人",
       "vi": "Từ khi đi làm đến nay tôi đã phỏng vấn rất nhiều người",
       "parts": [
        {
         "t": "自从上班以来",
         "ico": "💼",
         "c": "s",
         "py": "zìcóng shàngbān yǐlái",
         "hv": "tự tòng thượng ban _ lai"
        },
        {
         "t": "我采访过",
         "ico": "🎤",
         "c": "v",
         "py": "wǒ cǎifǎng guò",
         "hv": "ngã _ phỏng quá"
        },
        {
         "t": "很多人",
         "ico": "👥",
         "c": "o",
         "py": "hěn duō rén",
         "hv": "_ đa nhân"
        }
       ],
       "traceWord": "采访",
       "py": "Zìcóng shàngbān yǐlái wǒ cǎifǎng guò hěn duō rén",
       "traceKey": "caifang"
      },
      {
       "scene": "🏢🏷️🔄",
       "full": "自从成立以来公司的标志没变过",
       "vi": "Từ khi thành lập đến nay logo của công ty chưa đổi",
       "parts": [
        {
         "t": "自从成立以来",
         "ico": "🏢",
         "c": "s",
         "py": "zìcóng chénglì yǐlái",
         "hv": "tự tòng thành lập _ lai"
        },
        {
         "t": "公司的标志",
         "ico": "🏷️",
         "c": "v",
         "py": "gōngsī de biāozhì",
         "hv": "công ti đích bêu chí"
        },
        {
         "t": "没变过",
         "ico": "🔄",
         "c": "o",
         "py": "méi biàn guò",
         "hv": "một biến quá"
        }
       ],
       "traceWord": "标志",
       "py": "Zìcóng chénglì yǐlái gōngsī de biāozhì méi biàn guò",
       "traceKey": "biaozhi"
      },
      {
       "scene": "🔤📖💡",
       "full": "自从学汉字以来我知道了很多字的含义",
       "vi": "Từ khi học chữ Hán đến nay tôi biết được nghĩa của nhiều chữ",
       "parts": [
        {
         "t": "自从学汉字以来",
         "ico": "🔤",
         "c": "s",
         "py": "zìcóng xué Hànzì yǐlái",
         "hv": "tự tòng học hán tự _ lai"
        },
        {
         "t": "我知道了",
         "ico": "💡",
         "c": "v",
         "py": "wǒ zhīdào le",
         "hv": "ngã tri đạo liễu"
        },
        {
         "t": "很多字的含义",
         "ico": "📖",
         "c": "o",
         "py": "hěn duō zì de hányì",
         "hv": "_ đa tự đích hàm nghĩa"
        }
       ],
       "traceWord": "含义",
       "py": "Zìcóng xué Hànzì yǐlái wǒ zhīdào le hěn duō zì de hányì",
       "traceKey": "hanyi"
      },
      {
       "scene": "💬😀😂",
       "full": "自从用微信以来我常常发各种表情",
       "vi": "Từ khi dùng WeChat đến nay tôi thường gửi đủ loại biểu cảm",
       "parts": [
        {
         "t": "自从用微信以来",
         "ico": "💬",
         "c": "s",
         "py": "zìcóng yòng wēixìn yǐlái",
         "hv": "tự tòng dụng vi tín _ lai"
        },
        {
         "t": "我常常发",
         "ico": "📤",
         "c": "v",
         "py": "wǒ chángcháng fā",
         "hv": "ngã thường thường _"
        },
        {
         "t": "各种表情",
         "ico": "😀",
         "c": "o",
         "py": "gèzhǒng biǎoqíng",
         "hv": "các chõng biểu tình"
        }
       ],
       "traceWord": "表情",
       "py": "Zìcóng yòng wēixìn yǐlái wǒ chángcháng fā gèzhǒng biǎoqíng",
       "traceKey": "biaoqing"
      }
     ],
     "qaList": [
      {
       "q": "这种果汁里含有什么？",
       "qvi": "Trong loại nước ép này có chứa gì?",
       "scene": "🧃🍬❓",
       "ans": "它含有很多糖",
       "opts": [
        {
         "txt": "我们明天开会",
         "ico": "👥",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "它含有很多糖",
         "ico": "🍬",
         "py": "Tā hányǒu hěn duō táng"
        }
       ],
       "qpy": "Zhè zhǒng guǒzhī lǐ hányǒu shénme?"
      },
      {
       "q": "糖的含量高不高？",
       "qvi": "Hàm lượng đường có cao không?",
       "scene": "🍬📊❓",
       "ans": "含量很高",
       "opts": [
        {
         "txt": "含量很高",
         "ico": "📈",
         "py": "Hánliàng hěn gāo"
        },
        {
         "txt": "这杯茶不含糖",
         "ico": "🍵",
         "py": "Zhè bēi chá bù hán táng"
        },
        {
         "txt": "他在北京工作",
         "ico": "🏙️",
         "py": "Tā zài Běijīng gōngzuò"
        }
       ],
       "qpy": "Táng de hánliàng gāo bù gāo?"
      },
      {
       "q": "一个句子由什么构成？",
       "qvi": "Một câu được cấu thành từ gì?",
       "scene": "📝🔤❓",
       "ans": "由词语构成",
       "opts": [
        {
         "txt": "由水果构成",
         "ico": "🍎",
         "py": "Yóu shuǐguǒ gòuchéng"
        },
        {
         "txt": "由词语构成",
         "ico": "🔤",
         "py": "Yóu cíyǔ gòuchéng"
        },
        {
         "txt": "它的构造很简单",
         "ico": "🧩",
         "py": "Tā de gòuzào hěn jiǎndān"
        }
       ],
       "qpy": "Yī gè jùzi yóu shénme gòuchéng?"
      },
      {
       "q": "这本书里记载了什么？",
       "qvi": "Cuốn sách này ghi chép những gì?",
       "scene": "📖✍️❓",
       "ans": "记载了很多生活常识",
       "opts": [
        {
         "txt": "我昨天买了一本书",
         "ico": "🛒",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "明天会下大雨",
         "ico": "🌧️",
         "py": "Míngtiān huì xià dà yǔ"
        },
        {
         "txt": "记载了很多生活常识",
         "ico": "📖",
         "py": "Jìzǎi le hěn duō shēnghuó chángshí"
        }
       ],
       "qpy": "Zhè běn shū lǐ jìzǎi le shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể với đối tác về quá trình làm việc",
      "steps": [
       "<b>Bước 1:</b> Chọn ba mốc trong đời bạn (đi làm, đổi việc, dùng một ứng dụng mới). Với mỗi mốc, tự nói thành tiếng một câu theo mẫu <i>\"自从工作以来我一直写日记\"</i>.",
       "<b>Bước 2:</b> Nhắn tin hoặc nói chuyện với một đối tác, kể sự thay đổi của bạn: <i>\"自从用微信以来我常常发各种表情\"</i> hoặc <i>\"自从有了闹钟以来我每天都起得很早\"</i>, rồi hỏi lại họ.",
       "<b>Bước 3:</b> Mở điện thoại, chọn một tấm ảnh hoặc lịch của tuần này và mô tả bằng 2–3 câu, dùng <i>\"自从旅行以来他拍了很多相片\"</i> làm mẫu. Ghi lại vào nhật ký."
      ]
     }
    }
   ]
  },
  "4.12": {
   "lessons": [
    {
     "id": "4.12A",
     "name": "Bài 4.12A: Trường học, đào tạo và lịch học",
     "grammar": {
      "formulas": [
       "🗣️ 一般来说 + 🏫 主语 + ⚡ 谓语 + 📌 结果",
       "🗓️ 主语 + 🗣️ 一般来说 + ⚡ 动词 + 📌 内容"
      ],
      "tip": "一般来说 (yìbān láishuō, nhất ban lai thuyết) nghĩa là \"nói chung, thông thường\", đứng đầu câu hoặc sau chủ ngữ để nêu một quy luật chung, không phải trường hợp riêng.",
      "vn_tip": "Người Việt hay dịch \"nói chung\" thành 说一般 theo trật tự tiếng Việt. Cách đúng là 一般来说 (hoặc 一般地说), đặt trước phần nhận định: 一般来说暑假比寒假长."
     },
     "chunks": [
      {
       "scene": "☀️❄️🏖️",
       "full": "一般来说暑假比寒假长",
       "vi": "Nói chung kỳ nghỉ hè dài hơn kỳ nghỉ đông",
       "parts": [
        {
         "t": "一般来说暑假",
         "ico": "☀️",
         "c": "s",
         "py": "yībān lái shuō shǔjià",
         "hv": "nhất bàn lai _ _ _"
        },
        {
         "t": "比寒假",
         "ico": "❄️",
         "c": "v",
         "py": "bǐ hánjià",
         "hv": "tỉ hàn _"
        },
        {
         "t": "长",
         "ico": "📏",
         "c": "o",
         "py": "cháng",
         "hv": "trường"
        }
       ],
       "traceWord": "暑假",
       "py": "Yībān lái shuō shǔjià bǐ hánjià cháng",
       "traceKey": "shujia"
      },
      {
       "scene": "👨‍🏫🎤📚",
       "full": "一般来说教授的讲座都很有意思",
       "vi": "Nói chung các buổi giảng của giáo sư đều rất thú vị",
       "parts": [
        {
         "t": "一般来说教授的讲座",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "yībān lái shuō jiàoshòu de jiǎngzuò",
         "hv": "nhất bàn lai _ giáo thụ đích giảng toà"
        },
        {
         "t": "都很",
         "ico": "💯",
         "c": "v",
         "py": "dōu hěn",
         "hv": "đô _"
        },
        {
         "t": "有意思",
         "ico": "😄",
         "c": "o",
         "py": "yǒu yìsi",
         "hv": "hữu ý tư"
        }
       ],
       "traceWord": "讲座",
       "py": "Yībān lái shuō jiàoshòu de jiǎngzuò dōu hěn yǒu yìsi",
       "traceKey": "jiangzuo"
      },
      {
       "scene": "📝📅🏫",
       "full": "一般来说期末考试在一月",
       "vi": "Nói chung thi cuối kỳ diễn ra vào tháng Một",
       "parts": [
        {
         "t": "一般来说期末考试",
         "ico": "📝",
         "c": "s",
         "py": "yībān lái shuō qīmò kǎoshì",
         "hv": "nhất bàn lai _ kì mạt khảo thí"
        },
        {
         "t": "在",
         "ico": "📍",
         "c": "v",
         "py": "zài",
         "hv": "tại"
        },
        {
         "t": "一月",
         "ico": "📅",
         "c": "o",
         "py": "yī yuè",
         "hv": "nhất nguyệt"
        }
       ],
       "traceWord": "期末",
       "py": "Yībān lái shuō qīmò kǎoshì zài yī yuè",
       "traceKey": "qimo"
      },
      {
       "scene": "🎓📖✅",
       "full": "研究生一般来说要修够学分",
       "vi": "Nghiên cứu sinh nói chung phải học đủ tín chỉ",
       "parts": [
        {
         "t": "研究生",
         "ico": "🎓",
         "c": "s",
         "py": "yánjiūshēng",
         "hv": "nghiên cứu sinh"
        },
        {
         "t": "一般来说要修够",
         "ico": "📖",
         "c": "v",
         "py": "yībān lái shuō yào xiū gòu",
         "hv": "nhất bàn lai _ yếu tu _"
        },
        {
         "t": "学分",
         "ico": "💯",
         "c": "o",
         "py": "xuéfēn",
         "hv": "học phân"
        }
       ],
       "traceWord": "学分",
       "py": "Yánjiūshēng yībān lái shuō yào xiū gòu xuéfēn",
       "traceKey": "xuefen"
      },
      {
       "scene": "🧑‍🏫🏢🌙",
       "full": "一般来说培训班在周末上课",
       "vi": "Nói chung lớp đào tạo học vào cuối tuần",
       "parts": [
        {
         "t": "一般来说培训班",
         "ico": "🧑‍🏫",
         "c": "s",
         "py": "yībān lái shuō péixùnbān",
         "hv": "nhất bàn lai _ bồi huấn ban"
        },
        {
         "t": "在周末",
         "ico": "📅",
         "c": "v",
         "py": "zài zhōumò",
         "hv": "tại chu mạt"
        },
        {
         "t": "上课",
         "ico": "📚",
         "c": "o",
         "py": "shàngkè",
         "hv": "thượng khoá"
        }
       ],
       "traceWord": "培训班",
       "py": "Yībān lái shuō péixùnbān zài zhōumò shàngkè",
       "traceKey": "peixunban"
      },
      {
       "scene": "🏟️🌆👥",
       "full": "操场一般来说晚上人很多",
       "vi": "Sân tập nói chung buổi tối rất đông người",
       "parts": [
        {
         "t": "操场一般来说",
         "ico": "🏟️",
         "c": "s",
         "py": "cāochǎng yībān lái shuō",
         "hv": "_ trường nhất bàn lai _"
        },
        {
         "t": "晚上",
         "ico": "🌙",
         "c": "v",
         "py": "wǎnshang",
         "hv": "vãn thượng"
        },
        {
         "t": "人很多",
         "ico": "👥",
         "c": "o",
         "py": "rén hěn duō",
         "hv": "nhân _ đa"
        }
       ],
       "traceWord": "操场",
       "py": "Cāochǎng yībān lái shuō wǎnshang rén hěn duō",
       "traceKey": "caochang"
      },
      {
       "scene": "📆🏫📚",
       "full": "一般来说一个学年有两个学期",
       "vi": "Nói chung một năm học có hai học kỳ",
       "parts": [
        {
         "t": "一般来说一个学年",
         "ico": "📆",
         "c": "s",
         "py": "yībān lái shuō yī gè xuénián",
         "hv": "nhất bàn lai _ nhất cá học nên"
        },
        {
         "t": "有",
         "ico": "✔️",
         "c": "v",
         "py": "yǒu",
         "hv": "hữu"
        },
        {
         "t": "两个学期",
         "ico": "2️⃣",
         "c": "o",
         "py": "liǎng gè xuéqī",
         "hv": "lưỡng cá học kì"
        }
       ],
       "traceWord": "学年",
       "py": "Yībān lái shuō yī gè xuénián yǒu liǎng gè xuéqī",
       "traceKey": "xuenian"
      },
      {
       "scene": "📨🎓🏠",
       "full": "通知书一般来说在七月寄到学生家里",
       "vi": "Giấy báo nhập học nói chung được gửi đến nhà học sinh vào tháng Bảy",
       "parts": [
        {
         "t": "通知书一般来说",
         "ico": "📨",
         "c": "s",
         "py": "tōngzhīshū yībān lái shuō",
         "hv": "thông tri thư nhất bàn lai _"
        },
        {
         "t": "在七月",
         "ico": "📅",
         "c": "v",
         "py": "zài qī yuè",
         "hv": "tại thất nguyệt"
        },
        {
         "t": "寄到学生家里",
         "ico": "🏠",
         "c": "o",
         "py": "jì dào xuéshēng jiā li",
         "hv": "gửi đáo học sinh gia lịa"
        }
       ],
       "traceWord": "通知书",
       "py": "Tōngzhīshū yībān lái shuō zài qī yuè jì dào xuéshēng jiā li",
       "traceKey": "tongzhishu"
      }
     ],
     "qaList": [
      {
       "q": "这个学期有多少学时？",
       "qvi": "Học kỳ này có bao nhiêu tiết học?",
       "scene": "📚⏱️",
       "ans": "一共六十学时",
       "opts": [
        {
         "txt": "一共六十学时",
         "ico": "⏱️",
         "py": "Yīgòng liù shí xuéshí"
        },
        {
         "txt": "我们明天去公园",
         "ico": "🌳",
         "py": "Wǒmen míngtiān qù gōngyuán"
        },
        {
         "txt": "他是我的同学",
         "ico": "🧑‍🎓",
         "py": "Tā shì wǒ de tóngxué"
        }
       ],
       "qpy": "Zhè gè xuéqī yǒu duōshao xuéshí?"
      },
      {
       "q": "公司怎么培养新人？",
       "qvi": "Công ty đào tạo người mới như thế nào?",
       "scene": "🏢🌱",
       "ans": "公司每个月都培训新人",
       "opts": [
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "公司每个月都培训新人",
         "ico": "🤝",
         "py": "Gōngsī měi gè yuè dōu péixùn xīn rén"
        },
        {
         "txt": "今天天气很好",
         "ico": "☀️",
         "py": "Jīntiān tiānqì hěn hǎo"
        }
       ],
       "qpy": "Gōngsī zěnme péiyǎng xīn rén?"
      },
      {
       "q": "农民在培育什么？",
       "qvi": "Nông dân đang ươm trồng gì?",
       "scene": "👨‍🌾🌱",
       "ans": "他们在培育新的水果",
       "opts": [
        {
         "txt": "他们在打球",
         "ico": "⚽",
         "py": "Tāmen zài dǎ qiú"
        },
        {
         "txt": "他们在培育新的水果",
         "ico": "🍎",
         "py": "Tāmen zài péiyù xīn de shuǐguǒ"
        },
        {
         "txt": "他们在看电影",
         "ico": "🎬",
         "py": "Tāmen zài kàn diànyǐng"
        }
       ],
       "qpy": "Nóngmín zài péiyù shénme?"
      },
      {
       "q": "期中考试在什么时候？",
       "qvi": "Thi giữa kỳ vào lúc nào?",
       "scene": "📝📅",
       "ans": "在十一月",
       "opts": [
        {
         "txt": "在十一月",
         "ico": "📅",
         "py": "Zài shí yī yuè"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        },
        {
         "txt": "在那个商店里",
         "ico": "🏬",
         "py": "Zài nà gè shāngdiàn lǐ"
        }
       ],
       "qpy": "Qīzhōng kǎoshì zài shénme shíhou?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi lịch học của một khóa đào tạo",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho bộ phận đào tạo, hỏi lịch học của lớp mà bạn định đăng ký, ví dụ <i>\"培训班在周末上课吗？\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu về quy luật chung ở nơi bạn làm hoặc học, mở đầu bằng <i>\"一般来说\"</i>, ví dụ <i>\"一般来说期末考试在一月\"</i>.",
       "<b>Bước 3:</b> Gọi hoặc nhắn cho một đồng nghiệp, kể kế hoạch đi học của mình và hỏi xem kỳ nghỉ có trùng lịch học không, có dùng <i>\"一般来说\"</i>."
      ]
     }
    },
    {
     "id": "4.12B",
     "name": "Bài 4.12B: Học ngôn ngữ và làm bài thi",
     "grammar": {
      "formulas": [
       "🧑 主语 + 🚫 不得不 + ⚡ 动词 + 📌 宾语",
       "🧑 主语 + 🚫 不能不 + ⚡ 动词 + 📌 宾语",
       "🌐 没有 + 🧑 人 + 🚫 不 + ⚡ 动词"
      ],
      "tip": "Hai phủ định chồng lên nhau tạo nghĩa khẳng định mạnh: 不得不 (bù dé bù, bất đắc bất) = buộc phải; 不能不 (bù néng bù, bất năng bất) = nhất định phải; 没有人不... = ai cũng...",
      "vn_tip": "Người Việt hay dịch \"không thể không\" rồi bỏ mất một chữ 不 thành 不能 (chỉ còn nghĩa \"không thể\"). Phải đủ hai chữ 不: 不能不学 mới là \"nhất định phải học\"."
     },
     "chunks": [
      {
       "scene": "🇨🇳📚✍️",
       "full": "学汉语不得不学词汇",
       "vi": "Học tiếng Trung thì buộc phải học từ vựng",
       "parts": [
        {
         "t": "学汉语",
         "ico": "🇨🇳",
         "c": "s",
         "py": "xué Hànyǔ",
         "hv": "học hán ngữ"
        },
        {
         "t": "不得不学",
         "ico": "🚫",
         "c": "v",
         "py": "bùdébù xué",
         "hv": "bất đắc bất học"
        },
        {
         "t": "词汇",
         "ico": "📖",
         "c": "o",
         "py": "cíhuì",
         "hv": "từ _"
        }
       ],
       "traceWord": "词汇",
       "py": "Xué Hànyǔ bùdébù xué cíhuì",
       "traceKey": "cihui"
      },
      {
       "scene": "🗣️📐📘",
       "full": "想说好汉语不能不学语法",
       "vi": "Muốn nói tốt tiếng Trung thì nhất định phải học ngữ pháp",
       "parts": [
        {
         "t": "想说好汉语",
         "ico": "🗣️",
         "c": "s",
         "py": "xiǎng shuō hǎo Hànyǔ",
         "hv": "tưởng _ háo hán ngữ"
        },
        {
         "t": "不能不",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng bù",
         "hv": "bất năng bất"
        },
        {
         "t": "学语法",
         "ico": "📘",
         "c": "o",
         "py": "xué yǔfǎ",
         "hv": "học ngữ pháp"
        }
       ],
       "traceWord": "语法",
       "py": "Xiǎng shuō hǎo Hànyǔ bù néng bù xué yǔfǎ",
       "traceKey": "yufa"
      },
      {
       "scene": "🌏👂🔊",
       "full": "学外语的人不能不重视语音",
       "vi": "Người học ngoại ngữ nhất định phải coi trọng phát âm",
       "parts": [
        {
         "t": "学外语的人",
         "ico": "🧑‍🎓",
         "c": "s",
         "py": "xué wàiyǔ de rén",
         "hv": "học ngoại ngữ đích nhân"
        },
        {
         "t": "不能不重视",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng bú zhòngshì",
         "hv": "bất năng bất trọng thị"
        },
        {
         "t": "语音",
         "ico": "🔊",
         "c": "o",
         "py": "yǔyīn",
         "hv": "ngữ âm"
        }
       ],
       "traceWord": "语音",
       "py": "Xué wàiyǔ de rén bù néng bú zhòngshì yǔyīn",
       "traceKey": "yuyin"
      },
      {
       "scene": "👧👦🎵🔤",
       "full": "小朋友没有不喜欢唱字母歌的",
       "vi": "Trẻ nhỏ không có đứa nào không thích hát bài hát bảng chữ cái",
       "parts": [
        {
         "t": "小朋友",
         "ico": "👧",
         "c": "s",
         "py": "xiǎopéngyǒu",
         "hv": "tiểu bằng hữu"
        },
        {
         "t": "没有不喜欢",
         "ico": "🚫",
         "c": "v",
         "py": "méiyǒu bù xǐhuan",
         "hv": "một hữu bất hỉ hoan"
        },
        {
         "t": "唱字母歌的",
         "ico": "🔤",
         "c": "o",
         "py": "chàng zìmǔ gē de",
         "hv": "xướng tự mẫu ca đích"
        }
       ],
       "traceWord": "字母",
       "py": "Xiǎopéngyǒu méiyǒu bù xǐhuan chàng zìmǔ gē de",
       "traceKey": "zimu"
      },
      {
       "scene": "🗣️👏🌟",
       "full": "没有人不觉得他的口语很流利",
       "vi": "Không ai là không thấy khẩu ngữ của anh ấy rất lưu loát",
       "parts": [
        {
         "t": "没有人",
         "ico": "👥",
         "c": "s",
         "py": "méi yǒu rén",
         "hv": "một hữu nhân"
        },
        {
         "t": "不觉得",
         "ico": "🚫",
         "c": "v",
         "py": "bù juéde",
         "hv": "bất giác đắc"
        },
        {
         "t": "他的口语很流利",
         "ico": "🗣️",
         "c": "o",
         "py": "tā de kǒuyǔ hěn liúlì",
         "hv": "tha đích khẩu ngữ _ lưu lợi"
        }
       ],
       "traceWord": "口语",
       "py": "Méi yǒu rén bù juéde tā de kǒuyǔ hěn liúlì",
       "traceKey": "kouyu"
      },
      {
       "scene": "📄🖊️✅",
       "full": "交试卷以前你不能不检查答案",
       "vi": "Trước khi nộp bài thi bạn nhất định phải kiểm tra đáp án",
       "parts": [
        {
         "t": "交试卷以前你",
         "ico": "📄",
         "c": "s",
         "py": "jiāo shìjuàn yǐqián nǐ",
         "hv": "giao thí quyển _ tiền nể"
        },
        {
         "t": "不能不检查",
         "ico": "🔍",
         "c": "v",
         "py": "bù néng bù jiǎnchá",
         "hv": "bất năng bất ghém tra"
        },
        {
         "t": "答案",
         "ico": "✅",
         "c": "o",
         "py": "dá'àn",
         "hv": "đáp án"
        }
       ],
       "traceWord": "试卷",
       "py": "Jiāo shìjuàn yǐqián nǐ bù néng bù jiǎnchá dá'àn",
       "traceKey": "shijuan"
      },
      {
       "scene": "🎯📝⭕",
       "full": "要想及格填空题不能不做完",
       "vi": "Muốn đạt điểm đậu thì câu điền vào chỗ trống nhất định phải làm xong",
       "parts": [
        {
         "t": "要想及格填空题",
         "ico": "📝",
         "c": "s",
         "py": "yào xiǎng jígé tiánkòng tí",
         "hv": "yếu tưởng cập cách điền không _"
        },
        {
         "t": "不能不",
         "ico": "🚫",
         "c": "v",
         "py": "bù néng bú",
         "hv": "bất năng bất"
        },
        {
         "t": "做完",
         "ico": "✅",
         "c": "o",
         "py": "zuò wán",
         "hv": "_ hoàn"
        }
       ],
       "traceWord": "填空",
       "py": "Yào xiǎng jígé tiánkòng tí bù néng bú zuò wán",
       "traceKey": "tiankong"
      },
      {
       "scene": "📖✍️📅",
       "full": "他每天阅读一小时没有一天不抄写生词",
       "vi": "Anh ấy mỗi ngày đọc một giờ, không có ngày nào không chép từ mới",
       "parts": [
        {
         "t": "他每天阅读一小时",
         "ico": "📖",
         "c": "s",
         "py": "tā měi tiān yuèdú yī xiǎoshí",
         "hv": "tha mỗi thiên _ độc nhất tiểu thì"
        },
        {
         "t": "没有一天不抄写",
         "ico": "✍️",
         "c": "v",
         "py": "méiyǒu yī tiān bù chāoxiě",
         "hv": "một hữu nhất thiên bất sao tả"
        },
        {
         "t": "生词",
         "ico": "🔤",
         "c": "o",
         "py": "shēngcí",
         "hv": "sinh từ"
        }
       ],
       "traceWord": "抄写",
       "py": "Tā měi tiān yuèdú yī xiǎoshí méiyǒu yī tiān bù chāoxiě shēngcí",
       "traceKey": "chaoxie"
      }
     ],
     "qaList": [
      {
       "q": "这个句子你能翻译吗？",
       "qvi": "Câu này bạn dịch được không?",
       "scene": "📝🌐",
       "ans": "这是作业我不能不翻译",
       "opts": [
        {
         "txt": "我在公司上班",
         "ico": "🏢",
         "py": "Wǒ zài gōngsī shàngbān"
        },
        {
         "txt": "这是作业我不能不翻译",
         "ico": "🌐",
         "py": "Zhè shì zuòyè wǒ bù néng bù fānyì"
        },
        {
         "txt": "他们是我的朋友",
         "ico": "🤝",
         "py": "Tāmen shì wǒ de péngyou"
        }
       ],
       "qpy": "Zhè gè jùzi nǐ néng fānyì ma?"
      },
      {
       "q": "学语法你觉得难吗？",
       "qvi": "Học ngữ pháp bạn thấy khó không?",
       "scene": "📘🤔",
       "ans": "难可是不能不学",
       "opts": [
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        },
        {
         "txt": "他在教室里抄黑板",
         "ico": "🧑‍🎓",
         "py": "Tā zài jiàoshì lǐ chāo hēibǎn"
        },
        {
         "txt": "难可是不能不学",
         "ico": "📘",
         "py": "Nán kěshì bù néng bù xué"
        }
       ],
       "qpy": "Xué yǔfǎ nǐ juéde nán ma?"
      },
      {
       "q": "这道题你要怎么做？",
       "qvi": "Câu này bạn định làm thế nào?",
       "scene": "📅✍️",
       "ans": "我不能不先翻词典再填答案",
       "opts": [
        {
         "txt": "我不能不先翻词典再填答案",
         "ico": "📖",
         "py": "Wǒ bù néng bù xiān fān cídiǎn zài tián dá'àn"
        },
        {
         "txt": "我们在火车站见面",
         "ico": "🚉",
         "py": "Wǒmen zài huǒ chēzhàn jiànmiàn"
        },
        {
         "txt": "这个手机很便宜",
         "ico": "📱",
         "py": "Zhè gè shǒujī hěn piányi"
        }
       ],
       "qpy": "Zhè dào tí nǐ yào zěnme zuò?"
      },
      {
       "q": "为什么你的汉语进步这么快？",
       "qvi": "Vì sao tiếng Trung của bạn tiến bộ nhanh như vậy?",
       "scene": "🇨🇳📈",
       "ans": "因为我没有一天不练习",
       "opts": [
        {
         "txt": "今天下午有雨",
         "ico": "🌧️",
         "py": "Jīntiān xiàwǔ yǒu yǔ"
        },
        {
         "txt": "因为我没有一天不练习",
         "ico": "💪",
         "py": "Yīnwèi wǒ méiyǒu yī tiān bú liànxí"
        },
        {
         "txt": "他在北京工作",
         "ico": "🏙️",
         "py": "Tā zài Běijīng gōngzuò"
        }
       ],
       "qpy": "Wèi shénme nǐ de Hànyǔ jìnbù zhème kuài?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị cho kỳ thi tiếng Trung",
      "steps": [
       "<b>Bước 1:</b> Lập danh sách 5 việc bạn buộc phải làm trước kỳ thi (từ vựng, ngữ pháp, phát âm, khẩu ngữ...) và nói thành tiếng với <i>\"我不得不学词汇\"</i>, <i>\"我不能不练习口语\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho một người bạn học cùng, khuyên họ phải xem lại đáp án và kiểm tra bài, dùng <i>\"你不能不检查答案\"</i>.",
       "<b>Bước 3:</b> Tự nói 3 câu khen một người đồng nghiệp chăm chỉ theo mẫu <i>\"没有人不...\"</i>, ví dụ <i>\"没有人不觉得他的口语很流利\"</i>."
      ]
     }
    },
    {
     "id": "4.12C",
     "name": "Bài 4.12C: Nghiên cứu, tư duy và học thuật",
     "grammar": {
      "formulas": [
       "❓ 谁 + 🚫 不 + ⚡ 知道",
       "❓ 怎么 + ⚡ 能 + 📌 动词短语",
       "❓ 哪里 + ⚡ 动词 + 📌 内容"
      ],
      "tip": "Câu hỏi tu từ dùng đại từ nghi vấn (谁 shéi, 怎么 zěnme, 哪里 nǎlǐ) không để hỏi mà để khẳng định mạnh: 谁不知道 = ai mà chẳng biết; 怎么能... = làm sao có thể (tức là không thể).",
      "vn_tip": "Người Việt hay hiểu nhầm câu hỏi tu từ là câu hỏi thật và trả lời lại. Cũng hay quên rằng nghĩa bị đảo: 谁不知道 là \"ai cũng biết\", còn 怎么能 là \"không thể\"."
     },
     "chunks": [
      {
       "scene": "🤔🎓📚",
       "full": "谁不知道做学问要专心",
       "vi": "Ai mà chẳng biết làm học vấn thì phải chuyên tâm",
       "parts": [
        {
         "t": "谁",
         "ico": "❓",
         "c": "s",
         "py": "shéi",
         "hv": "_"
        },
        {
         "t": "不知道",
         "ico": "🚫",
         "c": "v",
         "py": "bù zhīdào",
         "hv": "bất tri đạo"
        },
        {
         "t": "做学问要专心",
         "ico": "📚",
         "c": "o",
         "py": "zuò xuéwen yào zhuānxīn",
         "hv": "_ học _ yếu chuyên tâm"
        }
       ],
       "traceWord": "学问",
       "py": "Shéi bù zhīdào zuò xuéwen yào zhuānxīn",
       "traceKey": "xuewen"
      },
      {
       "scene": "📄🏆🎓",
       "full": "这篇论文谁敢说没有学术价值",
       "vi": "Bài luận văn này ai dám nói là không có giá trị học thuật",
       "parts": [
        {
         "t": "这篇论文",
         "ico": "📄",
         "c": "s",
         "py": "zhè piān lùnwén",
         "hv": "_ _ luận văn"
        },
        {
         "t": "谁敢说",
         "ico": "❓",
         "c": "v",
         "py": "shéi gǎn shuō",
         "hv": "_ cám _"
        },
        {
         "t": "没有学术价值",
         "ico": "🎓",
         "c": "o",
         "py": "méiyǒu xuéshù jiàzhí",
         "hv": "một hữu học thuật giá _"
        }
       ],
       "traceWord": "论文",
       "py": "Zhè piān lùnwén shéi gǎn shuō méiyǒu xuéshù jiàzhí",
       "traceKey": "lunwen"
      },
      {
       "scene": "🧩⏳❓",
       "full": "这个问题这么复杂怎么能马上解释清楚",
       "vi": "Vấn đề này phức tạp như vậy, làm sao có thể giải thích rõ ngay được",
       "parts": [
        {
         "t": "这个问题这么复杂",
         "ico": "🧩",
         "c": "s",
         "py": "zhè gè wèntí zhème fùzá",
         "hv": "_ cá _ _ _ _ hạ tạp"
        },
        {
         "t": "怎么能",
         "ico": "❓",
         "c": "v",
         "py": "zěnme néng",
         "hv": "chẩn _ năng"
        },
        {
         "t": "马上解释清楚",
         "ico": "💬",
         "c": "o",
         "py": "mǎshàng jiěshì qīngchu",
         "hv": "mã thượng giải thích thanh sở"
        }
       ],
       "traceWord": "解释",
       "py": "Zhè gè wèntí zhème fùzá zěnme néng mǎshàng jiěshì qīngchu",
       "traceKey": "jieshi"
      },
      {
       "scene": "🧠💡📖",
       "full": "不专心思考智力再高又有什么用",
       "vi": "Không tập trung suy nghĩ thì trí lực cao đến đâu cũng có ích gì",
       "parts": [
        {
         "t": "不专心思考",
         "ico": "🧠",
         "c": "s",
         "py": "bù zhuānxīn sīkǎo",
         "hv": "bất chuyên tâm tư khảo"
        },
        {
         "t": "智力再高",
         "ico": "💡",
         "c": "v",
         "py": "zhìlì zài gāo",
         "hv": "trí lực tái cao"
        },
        {
         "t": "又有什么用",
         "ico": "❓",
         "c": "o",
         "py": "yòu yǒu shénme yòng",
         "hv": "lại hữu thập _ dụng"
        }
       ],
       "traceWord": "思考",
       "py": "Bù zhuānxīn sīkǎo zhìlì zài gāo yòu yǒu shénme yòng",
       "traceKey": "sikao"
      },
      {
       "scene": "👨‍🎓💪🤝",
       "full": "谁说他笨我从来不怀疑他的能力",
       "vi": "Ai bảo anh ấy ngốc, tôi chưa bao giờ nghi ngờ năng lực của anh ấy",
       "parts": [
        {
         "t": "谁说他笨",
         "ico": "❓",
         "c": "s",
         "py": "shéi shuō tā bèn",
         "hv": "_ _ tha _"
        },
        {
         "t": "我从来不怀疑",
         "ico": "🙅",
         "c": "v",
         "py": "wǒ cónglái bù huáiyí",
         "hv": "ngã tòng lai bất hoài _"
        },
        {
         "t": "他的能力",
         "ico": "💪",
         "c": "o",
         "py": "tā de nénglì",
         "hv": "tha đích năng lực"
        }
       ],
       "traceWord": "怀疑",
       "py": "Shéi shuō tā bèn wǒ cónglái bù huáiyí tā de nénglì",
       "traceKey": "huaiyi"
      },
      {
       "scene": "🙋‍♂️👨‍🏫💬",
       "full": "有疑问就问老师怎么会不给你解释",
       "vi": "Có thắc mắc cứ hỏi, thầy cô sao lại không giải thích cho bạn",
       "parts": [
        {
         "t": "有疑问就问老师",
         "ico": "🙋‍♂️",
         "c": "s",
         "py": "yǒu yíwèn jiù wèn lǎoshī",
         "hv": "hữu _ _ _ _ lão sư"
        },
        {
         "t": "怎么会不给你",
         "ico": "❓",
         "c": "v",
         "py": "zěnme huì bù gěi nǐ",
         "hv": "chẩn _ hội bất cấp nể"
        },
        {
         "t": "解释",
         "ico": "💬",
         "c": "o",
         "py": "jiěshì",
         "hv": "giải thích"
        }
       ],
       "traceWord": "疑问",
       "py": "Yǒu yíwèn jiù wèn lǎoshī zěnme huì bù gěi nǐ jiěshì",
       "traceKey": "yiwen"
      },
      {
       "scene": "🔍🧭🏢",
       "full": "不去寻找怎么能了解这个行业呢",
       "vi": "Không đi tìm hiểu thì làm sao có thể hiểu ngành này được",
       "parts": [
        {
         "t": "不去寻找",
         "ico": "🔍",
         "c": "s",
         "py": "bú qù xúnzhǎo",
         "hv": "bất khứ tầm quơ"
        },
        {
         "t": "怎么能了解",
         "ico": "❓",
         "c": "v",
         "py": "zěnme néng liǎojiě",
         "hv": "chẩn _ năng liễu giải"
        },
        {
         "t": "这个行业呢",
         "ico": "🏢",
         "c": "o",
         "py": "zhè gè hángyè ne",
         "hv": "_ cá hàng nghiệp nài"
        }
       ],
       "traceWord": "寻找",
       "py": "Bú qù xúnzhǎo zěnme néng liǎojiě zhè gè hángyè ne",
       "traceKey": "xunzhao"
      },
      {
       "scene": "⏰🤔🌟",
       "full": "不考虑时间怎么能养成学习的习惯",
       "vi": "Không tính đến thời gian thì làm sao hình thành được thói quen học tập",
       "parts": [
        {
         "t": "不考虑时间",
         "ico": "⏰",
         "c": "s",
         "py": "bù kǎolǜ shíjiān",
         "hv": "bất khảo lự thì gian"
        },
        {
         "t": "怎么能养成",
         "ico": "❓",
         "c": "v",
         "py": "zěnme néng yǎngchéng",
         "hv": "chẩn _ năng dưỡng thành"
        },
        {
         "t": "学习的习惯",
         "ico": "📖",
         "c": "o",
         "py": "xuéxí de xíguàn",
         "hv": "học tập đích tập quen"
        }
       ],
       "traceWord": "养成",
       "py": "Bù kǎolǜ shíjiān zěnme néng yǎngchéng xuéxí de xíguàn",
       "traceKey": "yangcheng"
      }
     ],
     "qaList": [
      {
       "q": "你能想象他一个人研究了十年吗？",
       "qvi": "Bạn có thể tưởng tượng anh ấy một mình nghiên cứu mười năm không?",
       "scene": "🔬🧑‍🔬⏳",
       "ans": "真难想象他太努力了",
       "opts": [
        {
         "txt": "我想去喝咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng qù hē kāfēi"
        },
        {
         "txt": "真难想象他太努力了",
         "ico": "🤯",
         "py": "Zhēn nán xiǎngxiàng tā tài nǔlì le"
        },
        {
         "txt": "今天是星期五",
         "ico": "📅",
         "py": "Jīntiān shì xīngqī wǔ"
        }
       ],
       "qpy": "Nǐ néng xiǎngxiàng tā yī gèrén yánjiū le shí nián ma?"
      },
      {
       "q": "她拿到奖学金了吗？",
       "qvi": "Cô ấy nhận được học bổng chưa?",
       "scene": "👩‍🎓🏅💰",
       "ans": "拿到了她的成绩那么好",
       "opts": [
        {
         "txt": "拿到了她的成绩那么好",
         "ico": "🏅",
         "py": "Nádào le tā de chéngjì nàme hǎo"
        },
        {
         "txt": "我坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù gōngsī"
        },
        {
         "txt": "他们在吃午饭",
         "ico": "🍱",
         "py": "Tāmen zài chī wǔfàn"
        }
       ],
       "qpy": "Tā nádào jiǎngxuéjīn le ma?"
      },
      {
       "q": "这个问题你怎么看？",
       "qvi": "Vấn đề này bạn nghĩ sao?",
       "scene": "🧩🤔",
       "ans": "我哪里知道我要再想想",
       "opts": [
        {
         "txt": "我哪里知道我要再想想",
         "ico": "🤔",
         "py": "Wǒ nǎlǐ zhīdào wǒ yào zài xiǎng xiǎng"
        },
        {
         "txt": "他在公园里跑步",
         "ico": "🏃",
         "py": "Tā zài gōngyuán lǐ pǎobù"
        },
        {
         "txt": "这个菜很好吃",
         "ico": "🍜",
         "py": "Zhè gè cài hěn hǎochī"
        }
       ],
       "qpy": "Zhè gè wèntí nǐ zěnme kàn?"
      },
      {
       "q": "老师说这个学生笨吗？",
       "qvi": "Thầy cô có nói học sinh này ngốc không?",
       "scene": "👨‍🏫🧑‍🎓",
       "ans": "老师怎么会说他笨",
       "opts": [
        {
         "txt": "老师今天没有来学校",
         "ico": "🏫",
         "py": "Lǎoshī jīntiān méiyǒu lái xuéxiào"
        },
        {
         "txt": "他在图书馆看书",
         "ico": "📚",
         "py": "Tā zài túshūguǎn kàn shū"
        },
        {
         "txt": "老师怎么会说他笨",
         "ico": "🙅",
         "py": "Lǎoshī zěnme huì shuō tā bèn"
        }
       ],
       "qpy": "Lǎoshī shuō zhè gè xuéshēng bèn ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thảo luận một đề tài với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn một chủ đề học tập hoặc công việc bạn đang tìm hiểu, nhắn cho đồng nghiệp: <i>\"我在寻找一个新的研究方法\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu hỏi tu từ để nhấn mạnh quan điểm, ví dụ <i>\"谁不知道做学问要专心\"</i>, <i>\"不考虑时间怎么能养成习惯\"</i>.",
       "<b>Bước 3:</b> Gọi hoặc nhắn cho một người bạn, giải thích suy nghĩ của mình về chủ đề đó và nêu một thắc mắc, ví dụ <i>\"我有一个疑问\"</i>."
      ]
     }
    }
   ]
  },
  "4.13": {
   "lessons": [
    {
     "id": "4.13A",
     "name": "Bài 4.13A: Chính quyền và 对…来说",
     "grammar": {
      "formulas": [
       "📌 对 + 👥 大众 + 💬 来说 + ✅ 很重要",
       "🧑 主席 + 📌 对 + 📄 这个办法 + 😊 很满意",
       "❓ 对 + 🧑 你 + 💬 来说 + ❓ 什么最重要？"
      ],
      "tip": "对…来说 (duì…láishuō, đối … lai thuyết) = \"đối với …, xét từ góc độ của …\". Đặt người/nhóm người vào giữa: 对大众来说, rồi mới nói nhận xét (很重要, 不容易). Có thể đứng đầu câu hoặc sau chủ ngữ. Ngoài ra 对 (duì, đối) + sự việc + 很满意 = \"hài lòng về …\".",
      "vn_tip": "Người Việt hay nói \"对我，这很重要\" (bỏ 来说) hoặc đặt sai thành \"来说对我\". Đúng: 对我来说，这很重要. Cụm 对…来说 luôn đi cùng nhau, người/nhóm ở giữa."
     },
     "chunks": [
      {
       "scene": "🏛️👥✅",
       "full": "政府的决定对大众来说很重要",
       "vi": "Quyết định của chính phủ rất quan trọng đối với công chúng",
       "parts": [
        {
         "t": "政府的决定",
         "ico": "🏛️",
         "c": "s",
         "py": "zhèngfǔ de juédìng",
         "hv": "chính phủ đích quyết định"
        },
        {
         "t": "对大众来说",
         "ico": "👥",
         "c": "v",
         "py": "duì dàzhòng lái shuō",
         "hv": "đỗi đại chúng lai _"
        },
        {
         "t": "很重要",
         "ico": "⭐",
         "c": "o",
         "py": "hěn zhòngyào",
         "hv": "_ trọng yếu"
        }
       ],
       "traceWord": "大众",
       "py": "Zhèngfǔ de juédìng duì dàzhòng lái shuō hěn zhòngyào",
       "traceKey": "dazhong"
      },
      {
       "scene": "🤵📄😊",
       "full": "主席对这个政治问题很满意",
       "vi": "Chủ tịch rất hài lòng về vấn đề chính trị này",
       "parts": [
        {
         "t": "主席",
         "ico": "🤵",
         "c": "s",
         "py": "zhǔxí",
         "hv": "chúa _"
        },
        {
         "t": "对这个政治问题",
         "ico": "📄",
         "c": "v",
         "py": "duì zhè gè zhèngzhì wèntí",
         "hv": "đỗi _ cá chính trị _ _"
        },
        {
         "t": "很满意",
         "ico": "😊",
         "c": "o",
         "py": "hěn mǎnyì",
         "hv": "_ mãn ý"
        }
       ],
       "traceWord": "政治",
       "py": "Zhǔxí duì zhè gè zhèngzhì wèntí hěn mǎnyì",
       "traceKey": "zhengzhi"
      },
      {
       "scene": "🌍💼🗣️",
       "full": "对外交官来说学好外语非常重要",
       "vi": "Đối với nhà ngoại giao, học giỏi ngoại ngữ là cực kỳ quan trọng",
       "parts": [
        {
         "t": "对外交官来说",
         "ico": "💼",
         "c": "s",
         "py": "duì wàijiāoguān lái shuō",
         "hv": "đỗi ngoại giao quan lai _"
        },
        {
         "t": "学好外语",
         "ico": "🗣️",
         "c": "v",
         "py": "xué hǎo wàiyǔ",
         "hv": "học háo ngoại ngữ"
        },
        {
         "t": "非常重要",
         "ico": "⭐",
         "c": "o",
         "py": "fēicháng zhòngyào",
         "hv": "phi thường trọng yếu"
        }
       ],
       "traceWord": "外交官",
       "py": "Duì wàijiāoguān lái shuō xué hǎo wàiyǔ fēicháng zhòngyào",
       "traceKey": "waijiaoguan"
      },
      {
       "scene": "👔🏘️💗",
       "full": "总理对县里的工作很关心",
       "vi": "Thủ tướng rất quan tâm đến công việc ở huyện",
       "parts": [
        {
         "t": "总理",
         "ico": "👔",
         "c": "s",
         "py": "zǒnglǐ",
         "hv": "tổng lí"
        },
        {
         "t": "对县里的工作",
         "ico": "🏘️",
         "c": "v",
         "py": "duì xiàn lǐ de gōngzuò",
         "hv": "đỗi huyện lịa đích công tác"
        },
        {
         "t": "很关心",
         "ico": "💗",
         "c": "o",
         "py": "hěn guānxīn",
         "hv": "_ quan tâm"
        }
       ],
       "traceWord": "县",
       "py": "Zǒnglǐ duì xiàn lǐ de gōngzuò hěn guānxīn",
       "traceKey": "xian"
      },
      {
       "scene": "🧳📝😟",
       "full": "对移民来说办手续不太容易",
       "vi": "Đối với người nhập cư, làm thủ tục không dễ lắm",
       "parts": [
        {
         "t": "对移民来说",
         "ico": "🧳",
         "c": "s",
         "py": "duì yímín lái shuō",
         "hv": "đỗi dời dân lai _"
        },
        {
         "t": "办手续",
         "ico": "📝",
         "c": "v",
         "py": "bàn shǒuxù",
         "hv": "_ thủ tục"
        },
        {
         "t": "不太容易",
         "ico": "😟",
         "c": "o",
         "py": "bù tài róngyì",
         "hv": "bất thái dung dịch"
        }
       ],
       "traceWord": "移民",
       "py": "Duì yímín lái shuō bàn shǒuxù bù tài róngyì",
       "traceKey": "yimin"
      },
      {
       "scene": "🏛️📢❓",
       "full": "官方对这件事还没有说明",
       "vi": "Phía chính thức vẫn chưa có thông báo về việc này",
       "parts": [
        {
         "t": "官方",
         "ico": "🏛️",
         "c": "s",
         "py": "guānfāng",
         "hv": "quan phương"
        },
        {
         "t": "对这件事",
         "ico": "📌",
         "c": "v",
         "py": "duì zhè jiàn shì",
         "hv": "đỗi _ kiện sự"
        },
        {
         "t": "还没有说明",
         "ico": "📢",
         "c": "o",
         "py": "hái méiyǒu shuōmíng",
         "hv": "hoàn một hữu _ minh"
        }
       ],
       "traceWord": "官方",
       "py": "Guānfāng duì zhè jiàn shì hái méiyǒu shuōmíng",
       "traceKey": "guanfang"
      },
      {
       "scene": "🏢👥⚖️",
       "full": "这个局对每个工作人员都很严格",
       "vi": "Cục này rất nghiêm khắc với mọi nhân viên",
       "parts": [
        {
         "t": "这个局",
         "ico": "🏢",
         "c": "s",
         "py": "zhè gè jú",
         "hv": "_ cá cục"
        },
        {
         "t": "对每个工作人员",
         "ico": "👥",
         "c": "v",
         "py": "duì měi gè gōngzuò rényuán",
         "hv": "đỗi mỗi cá công tác nhân viên"
        },
        {
         "t": "都很严格",
         "ico": "⚖️",
         "c": "o",
         "py": "dōu hěn yángé",
         "hv": "đô _ nghiêm cách"
        }
       ],
       "traceWord": "局",
       "py": "Zhè gè jú duì měi gè gōngzuò rényuán dōu hěn yángé",
       "traceKey": "ju"
      },
      {
       "scene": "🏯🏆😄",
       "full": "当地人对被列为遗产很高兴",
       "vi": "Người địa phương rất vui khi nơi này được xếp vào di sản",
       "parts": [
        {
         "t": "当地人",
         "ico": "🧑",
         "c": "s",
         "py": "dāngdì rén",
         "hv": "đương địa nhân"
        },
        {
         "t": "对被列为遗产",
         "ico": "🏯",
         "c": "v",
         "py": "duì bèi lièwéi yíchǎn",
         "hv": "đỗi bị liệt _ di _"
        },
        {
         "t": "很高兴",
         "ico": "😄",
         "c": "o",
         "py": "hěn gāoxìng",
         "hv": "_ cao hưng"
        }
       ],
       "traceWord": "遗产",
       "py": "Dāngdì rén duì bèi lièwéi yíchǎn hěn gāoxìng",
       "traceKey": "yichan"
      }
     ],
     "qaList": [
      {
       "q": "总统对大家说了什么？",
       "qvi": "Tổng thống đã nói gì với mọi người?",
       "scene": "🎤🏛️",
       "ans": "他说政府会帮助大众",
       "opts": [
        {
         "txt": "他说明天会下雨",
         "ico": "🌧️",
         "py": "Tā shuō míngtiān huì xià yǔ"
        },
        {
         "txt": "他说政府会帮助大众",
         "ico": "🏛️",
         "py": "Tā shuō zhèngfǔ huì bāngzhù dàzhòng"
        },
        {
         "txt": "他说他喜欢喝咖啡",
         "ico": "☕",
         "py": "Tā shuō tā xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Zǒngtǒng duì dàjiā shuō le shénme?"
      },
      {
       "q": "对你来说，当官最难的是什么？",
       "qvi": "Đối với bạn, làm quan khó nhất là gì?",
       "scene": "👔🤔",
       "ans": "要做很多工作",
       "opts": [
        {
         "txt": "要买很多东西",
         "ico": "🛍️",
         "py": "Yào mǎi hěn duō dōngxi"
        },
        {
         "txt": "要去很多国家",
         "ico": "🌏",
         "py": "Yào qù hěn duō guójiā"
        },
        {
         "txt": "要做很多工作",
         "ico": "💼",
         "py": "Yào zuò hěn duō gōngzuò"
        }
       ],
       "qpy": "Duì nǐ lái shuō dāng guān zuì nán de shì shénme?"
      },
      {
       "q": "这个地方为什么被列入遗产？",
       "qvi": "Vì sao nơi này được đưa vào di sản?",
       "scene": "🏯🏆",
       "ans": "因为它很有名",
       "opts": [
        {
         "txt": "因为它很有名",
         "ico": "🌟",
         "py": "Yīnwèi tā hěn yǒumíng"
        },
        {
         "txt": "因为今天很冷",
         "ico": "🥶",
         "py": "Yīnwèi jīntiān hěn lěng"
        },
        {
         "txt": "因为他没有钱",
         "ico": "💸",
         "py": "Yīnwèi tā méiyǒu qián"
        }
       ],
       "qpy": "Zhè gè dìfang wèi shénme bèi lièrù yíchǎn?"
      },
      {
       "q": "王局长对这件事怎么说？",
       "qvi": "Cục trưởng Vương nói thế nào về việc này?",
       "scene": "🏢🗣️",
       "ans": "他对这件事很满意",
       "opts": [
        {
         "txt": "他在公司门口等你",
         "ico": "🚪",
         "py": "Tā zài gōngsī ménkǒu děng nǐ"
        },
        {
         "txt": "他喝了一杯茶",
         "ico": "🍵",
         "py": "Tā hē le yī bēi chá"
        },
        {
         "txt": "他对这件事很满意",
         "ico": "😊",
         "py": "Tā duì zhè jiàn shì hěn mǎnyì"
        }
       ],
       "qpy": "Wáng jú cháng duì zhè jiàn shì zěnme shuō?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trao đổi ý kiến với đồng nghiệp về một quyết định",
      "steps": [
       "<b>Bước 1:</b> Chọn một tin tức hoặc quyết định gần đây của chính quyền. Nói to một câu nhận xét: <i>\"政府的决定对大众来说很重要。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp, hỏi ý kiến: <i>\"对你来说，这个问题重要吗？\"</i> rồi tự trả lời bằng 2 câu với 对…来说 (ví dụ về người nhập cư, nhà ngoại giao hoặc người dân địa phương).",
       "<b>Bước 3:</b> Nói một câu về cảm nhận của chính mình: <i>\"我对这个办法很满意。\"</i> rồi thay \"办法\" bằng 3 chủ đề khác trong công việc."
      ]
     }
    },
    {
     "id": "4.13B",
     "name": "Bài 4.13B: Pháp luật và 对…有好处",
     "grammar": {
      "formulas": [
       "📜 守法 + 📌 对 + 👥 大家 + ✅ 有好处",
       "😕 误会 + 📌 对 + 🤝 关系 + ⚠️ 有影响",
       "❓ 守法 + 📌 对 + 🏢 公司 + 有 + ❓ 什么好处？"
      ],
      "tip": "对 (duì, đối) + danh từ + 有帮助 (yǒu bāngzhù, hữu bang trợ) / 有好处 (hǎochù, hảo xứ) / 有影响 (yǐngxiǎng, ảnh hưởng) = \"có ích / có lợi / có ảnh hưởng đối với …\". Phủ định: 对…没有好处. Mức độ: 有很大的影响, 有不好的影响.",
      "vn_tip": "Người Việt hay đặt 对 sau cụm kết quả (làm sai thứ tự: \"有好处对大家\") hoặc dùng 给. Đúng: 对 + đối tượng đứng TRƯỚC, rồi mới đến 有好处/有帮助/有影响: 守法对大家有好处."
     },
     "chunks": [
      {
       "scene": "📜🙂👍",
       "full": "守法对每个人都有好处",
       "vi": "Tuân thủ pháp luật có lợi cho mọi người",
       "parts": [
        {
         "t": "守法",
         "ico": "📜",
         "c": "s",
         "py": "shǒu fǎ",
         "hv": "thú pháp"
        },
        {
         "t": "对每个人",
         "ico": "🙂",
         "c": "v",
         "py": "duì měi gèrén",
         "hv": "đỗi mỗi cá nhân"
        },
        {
         "t": "都有好处",
         "ico": "👍",
         "c": "o",
         "py": "dōu yǒu hǎochù",
         "hv": "đô hữu háo xử"
        }
       ],
       "traceWord": "守",
       "py": "Shǒu fǎ duì měi gèrén dōu yǒu hǎochù",
       "traceKey": "shou"
      },
      {
       "scene": "⚖️🏢📈",
       "full": "法律对公司的发展有很大的影响",
       "vi": "Pháp luật có ảnh hưởng rất lớn đến sự phát triển của công ty",
       "parts": [
        {
         "t": "法律",
         "ico": "⚖️",
         "c": "s",
         "py": "fǎlǜ",
         "hv": "pháp luật"
        },
        {
         "t": "对公司的发展",
         "ico": "📈",
         "c": "v",
         "py": "duì gōngsī de fāzhǎn",
         "hv": "đỗi công ti đích _ triển"
        },
        {
         "t": "有很大的影响",
         "ico": "💥",
         "c": "o",
         "py": "yǒu hěn dà de yǐngxiǎng",
         "hv": "hữu _ đại đích ảnh hướng"
        }
       ],
       "traceWord": "法律",
       "py": "Fǎlǜ duì gōngsī de fāzhǎn yǒu hěn dà de yǐngxiǎng",
       "traceKey": "falu"
      },
      {
       "scene": "🚧🏙️🌳",
       "full": "严格的措施对城市的环境有帮助",
       "vi": "Các biện pháp nghiêm ngặt có ích cho môi trường thành phố",
       "parts": [
        {
         "t": "严格的措施",
         "ico": "🚧",
         "c": "s",
         "py": "yángé de cuòshī",
         "hv": "nghiêm cách đích thố thi"
        },
        {
         "t": "对城市的环境",
         "ico": "🏙️",
         "c": "v",
         "py": "duì chéngshì de huánjìng",
         "hv": "đỗi thành thị đích _ cảnh"
        },
        {
         "t": "有帮助",
         "ico": "🤝",
         "c": "o",
         "py": "yǒu bāngzhù",
         "hv": "hữu _ trợ"
        }
       ],
       "traceWord": "措施",
       "py": "Yángé de cuòshī duì chéngshì de huánjìng yǒu bāngzhù",
       "traceKey": "cuoshi"
      },
      {
       "scene": "👨‍⚖️💬🧑",
       "full": "法官的话对他有很大的影响",
       "vi": "Lời của thẩm phán có ảnh hưởng rất lớn đến anh ấy",
       "parts": [
        {
         "t": "法官的话",
         "ico": "👨‍⚖️",
         "c": "s",
         "py": "fǎguān dehuà",
         "hv": "pháp quan đích thoại"
        },
        {
         "t": "对他",
         "ico": "🧑",
         "c": "v",
         "py": "duì tā",
         "hv": "đỗi tha"
        },
        {
         "t": "有很大的影响",
         "ico": "💥",
         "c": "o",
         "py": "yǒu hěn dà de yǐngxiǎng",
         "hv": "hữu _ đại đích ảnh hướng"
        }
       ],
       "traceWord": "法官",
       "py": "Fǎguān dehuà duì tā yǒu hěn dà de yǐngxiǎng",
       "traceKey": "faguan"
      },
      {
       "scene": "😕🤝💼",
       "full": "误会对同事的关系有不好的影响",
       "vi": "Hiểu lầm có ảnh hưởng xấu đến quan hệ đồng nghiệp",
       "parts": [
        {
         "t": "误会",
         "ico": "😕",
         "c": "s",
         "py": "wùhuì",
         "hv": "_ hội"
        },
        {
         "t": "对同事的关系",
         "ico": "🤝",
         "c": "v",
         "py": "duì tóngshì de guānxì",
         "hv": "đỗi đồng sự đích quan hệ"
        },
        {
         "t": "有不好的影响",
         "ico": "⚠️",
         "c": "o",
         "py": "yǒu bù hǎo de yǐngxiǎng",
         "hv": "hữu bất háo đích ảnh hướng"
        }
       ],
       "traceWord": "误会",
       "py": "Wùhuì duì tóngshì de guānxì yǒu bù hǎo de yǐngxiǎng",
       "traceKey": "wuhui"
      },
      {
       "scene": "💔🙅🧑",
       "full": "伤害别人对自己也没有好处",
       "vi": "Làm tổn thương người khác cũng không có lợi gì cho bản thân",
       "parts": [
        {
         "t": "伤害别人",
         "ico": "💔",
         "c": "s",
         "py": "shānghài biérén",
         "hv": "thương hại _ nhân"
        },
        {
         "t": "对自己",
         "ico": "🧑",
         "c": "v",
         "py": "duì zìjǐ",
         "hv": "đỗi tự kỉ"
        },
        {
         "t": "也没有好处",
         "ico": "🚫",
         "c": "o",
         "py": "yě méiyǒu hǎochù",
         "hv": "dã một hữu háo xử"
        }
       ],
       "traceWord": "伤害",
       "py": "Shānghài biérén duì zìjǐ yě méiyǒu hǎochù",
       "traceKey": "shanghai"
      },
      {
       "scene": "📜🏢🤝",
       "full": "符合法律的做法对公司内部很有帮助",
       "vi": "Cách làm phù hợp với pháp luật rất có ích cho nội bộ công ty",
       "parts": [
        {
         "t": "符合法律的做法",
         "ico": "📜",
         "c": "s",
         "py": "fúhé fǎlǜ de zuòfǎ",
         "hv": "bùa hợp pháp luật đích _ pháp"
        },
        {
         "t": "对公司内部",
         "ico": "🏢",
         "c": "v",
         "py": "duì gōngsī nèibù",
         "hv": "đỗi công ti nội bộ"
        },
        {
         "t": "很有帮助",
         "ico": "🤝",
         "c": "o",
         "py": "hěn yǒu bāngzhù",
         "hv": "_ hữu _ trợ"
        }
       ],
       "traceWord": "符合",
       "py": "Fúhé fǎlǜ de zuòfǎ duì gōngsī nèibù hěn yǒu bāngzhù",
       "traceKey": "fuhe"
      },
      {
       "scene": "🏢😰💥",
       "full": "公司处于困难阶段对员工有很大的影响",
       "vi": "Công ty đang ở giai đoạn khó khăn có ảnh hưởng rất lớn đến nhân viên",
       "parts": [
        {
         "t": "公司处于困难阶段",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī chǔyú kùnnan jiēduàn",
         "hv": "công ti xử vu khốn nan giai đoạn"
        },
        {
         "t": "对员工",
         "ico": "👥",
         "c": "v",
         "py": "duì yuángōng",
         "hv": "đỗi viên công"
        },
        {
         "t": "有很大的影响",
         "ico": "💥",
         "c": "o",
         "py": "yǒu hěn dà de yǐngxiǎng",
         "hv": "hữu _ đại đích ảnh hướng"
        }
       ],
       "traceWord": "处于",
       "py": "Gōngsī chǔyú kùnnan jiēduàn duì yuángōng yǒu hěn dà de yǐngxiǎng",
       "traceKey": "chuyu"
      }
     ],
     "qaList": [
      {
       "q": "法院的决定对他有什么影响？",
       "qvi": "Quyết định của tòa án có ảnh hưởng gì đến anh ấy?",
       "scene": "🏛️⚖️🧑",
       "ans": "他不能再开车了",
       "opts": [
        {
         "txt": "他明天会去学校",
         "ico": "🏫",
         "py": "Tā míngtiān huì qù xuéxiào"
        },
        {
         "txt": "他买了新手机",
         "ico": "📱",
         "py": "Tā mǎi le xīn shǒujī"
        },
        {
         "txt": "他不能再开车了",
         "ico": "🚗",
         "py": "Tā bù néng zài kāichē le"
        }
       ],
       "qpy": "Fǎyuàn de juédìng duì tā yǒu shénme yǐngxiǎng?"
      },
      {
       "q": "公司的规定为什么对新员工这么严？",
       "qvi": "Vì sao quy định của công ty lại nghiêm với nhân viên mới như vậy?",
       "scene": "🏢📋",
       "ans": "因为员工应守法",
       "opts": [
        {
         "txt": "因为员工应守法",
         "ico": "👍",
         "py": "Yīnwèi yuángōng yīng shǒu fǎ"
        },
        {
         "txt": "因为他今天很忙",
         "ico": "⏰",
         "py": "Yīnwèi tā jīntiān hěn máng"
        },
        {
         "txt": "因为明天会下雨",
         "ico": "🌧️",
         "py": "Yīnwèi míngtiān huì xià yǔ"
        }
       ],
       "qpy": "Gōngsī de guīdìng wèi shénme duì xīn yuángōng zhème yán?"
      },
      {
       "q": "大家为什么同情他？",
       "qvi": "Vì sao mọi người thương cảm anh ấy?",
       "scene": "👥😢",
       "ans": "因为他生病了",
       "opts": [
        {
         "txt": "因为他买了新车",
         "ico": "🚙",
         "py": "Yīnwèi tā mǎi le xīn chē"
        },
        {
         "txt": "因为他生病了",
         "ico": "🤒",
         "py": "Yīnwèi tā shēngbìng le"
        },
        {
         "txt": "因为他会说英语",
         "ico": "🗣️",
         "py": "Yīnwèi tā huì shuō Yīngyǔ"
        }
       ],
       "qpy": "Dàjiā wèi shénme tóngqíng tā?"
      },
      {
       "q": "新员工有问题应该去哪里问？",
       "qvi": "Nhân viên mới có thắc mắc nên đến đâu hỏi?",
       "scene": "📜🏢",
       "ans": "去办事处问",
       "opts": [
        {
         "txt": "去超市买水",
         "ico": "🛒",
         "py": "Qù chāoshì mǎi shuǐ"
        },
        {
         "txt": "去办事处问",
         "ico": "✅",
         "py": "Qù bànshì chù wèn"
        },
        {
         "txt": "去机场接人",
         "ico": "✈️",
         "py": "Qù jīchǎng jiē rén"
        }
       ],
       "qpy": "Xīn yuángōng yǒu wèntí yīnggāi qù nǎlǐ wèn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích quy định nội bộ cho đồng nghiệp mới",
      "steps": [
       "<b>Bước 1:</b> Nghĩ ra 3 quy định hoặc quy tắc ở nơi làm việc của bạn. Nói to cho từng quy định: <i>\"守法对每个人都有好处。\"</i> rồi thay chủ ngữ bằng quy định thật của công ty.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp mới giải thích vì sao quy định cần nghiêm: <i>\"严格的措施对公司内部很有帮助。\"</i> và thêm một câu với <i>\"对…有不好的影响\"</i> nói về hậu quả của một hiểu lầm.",
       "<b>Bước 3:</b> Tự đặt câu hỏi và trả lời thành tiếng: <i>\"守法对公司有什么好处？\"</i> (hoặc <i>\"公司的规定为什么对新员工这么严？\"</i>) — dùng 对…有好处 / 有帮助/ 有影响 để trả lời ít nhất 2 cách."
      ]
     }
    },
    {
     "id": "4.13C",
     "name": "Bài 4.13C: Thân phận, quan hệ và 帮 (giúp ai làm gì)",
     "grammar": {
      "formulas": [
       "🧑 我 + 🤝 帮 + 👤 你 + ⚡ 找 + 📍 地方",
       "🧑 经理 + 🤝 帮 + 👥 我们 + ⚡ 解决 + ❓ 问题",
       "❓ 谁 + 能 + 🤝 帮 + 👤 你 + ⚡ 做事？"
      ],
      "tip": "帮 (bāng, bang) + người + động từ = \"giúp ai làm việc gì\" (làm thay hoặc hỗ trợ): 帮我找, 帮你介绍. Người được giúp đứng NGAY SAU 帮, động từ chính đứng sau cùng. Lịch sự hơn: 能不能帮我…? Lưu ý: 替 (tì, thế) cũng có nghĩa \"thay\" nhưng chưa nằm trong từ vựng của bài này, nên bài dùng 帮.",
      "vn_tip": "Người Việt hay đặt tân ngữ chỉ người sau động từ chính: \"我找帮你\". Đúng: 我帮你找 (giúp bạn tìm) — 帮 + người trước, động từ sau. Đừng thêm 给 thừa: không nói \"我帮给你找\"."
     },
     "chunks": [
      {
       "scene": "🧑🤝📍",
       "full": "我可以帮你找一个安静的地方",
       "vi": "Tôi có thể giúp bạn tìm một nơi yên tĩnh",
       "parts": [
        {
         "t": "我",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ",
         "hv": "ngã"
        },
        {
         "t": "可以帮你",
         "ico": "🤝",
         "c": "v",
         "py": "kěyǐ bāng nǐ",
         "hv": "khả _ _ nể"
        },
        {
         "t": "找一个安静的地方",
         "ico": "📍",
         "c": "o",
         "py": "zhǎo yī gè ānjìng de dìfang",
         "hv": "quơ nhất cá an _ đích địa phương"
        }
       ],
       "traceWord": "地方",
       "py": "Wǒ kěyǐ bāng nǐ zhǎo yī gè ānjìng de dìfang",
       "traceKey": "difang"
      },
      {
       "scene": "🧑🤝🔍",
       "full": "他帮我了解这里的特殊情况",
       "vi": "Anh ấy giúp tôi tìm hiểu tình hình đặc biệt ở đây",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "帮我",
         "ico": "🤝",
         "c": "v",
         "py": "bāng wǒ",
         "hv": "_ ngã"
        },
        {
         "t": "了解这里的特殊情况",
         "ico": "🔍",
         "c": "o",
         "py": "liǎojiě zhèlǐ de tèshū qíngkuàng",
         "hv": "liễu giải _ lịa đích đặc thùa tình huống"
        }
       ],
       "traceWord": "特殊",
       "py": "Tā bāng wǒ liǎojiě zhèlǐ de tèshū qíngkuàng",
       "traceKey": "teshu"
      },
      {
       "scene": "👩‍🏫📚🏠",
       "full": "老师帮学生创造了独特的学习空间",
       "vi": "Thầy cô giúp học sinh tạo ra không gian học tập độc đáo",
       "parts": [
        {
         "t": "老师",
         "ico": "👩‍🏫",
         "c": "s",
         "py": "lǎoshī",
         "hv": "lão sư"
        },
        {
         "t": "帮学生创造了",
         "ico": "🤝",
         "c": "v",
         "py": "bāng xuéshēng chuàngzào le",
         "hv": "_ học sinh sáng tạo liễu"
        },
        {
         "t": "独特的学习空间",
         "ico": "🏠",
         "c": "o",
         "py": "dútè de xuéxí kōngjiān",
         "hv": "độc đặc đích học tập không gian"
        }
       ],
       "traceWord": "空间",
       "py": "Lǎoshī bāng xuéshēng chuàngzào le dútè de xuéxí kōngjiān",
       "traceKey": "kongjian"
      },
      {
       "scene": "🧑🗣️👥",
       "full": "他很会交际常常帮朋友认识新朋友",
       "vi": "Anh ấy rất khéo giao tiếp, thường giúp bạn bè làm quen người mới",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "很会交际",
         "ico": "🗣️",
         "c": "v",
         "py": "hěn huì jiāojì",
         "hv": "_ hội giao _"
        },
        {
         "t": "常常帮朋友认识新朋友",
         "ico": "👥",
         "c": "o",
         "py": "chángcháng bāng péngyou rènshi xīn péngyou",
         "hv": "thường thường _ bằng hữu nhận _ tân bằng hữu"
        }
       ],
       "traceWord": "交际",
       "py": "Tā hěn huì jiāojì chángcháng bāng péngyou rènshi xīn péngyou",
       "traceKey": "jiaoji"
      },
      {
       "scene": "👨‍🏫🔬📖",
       "full": "王老师帮我们说明这个事物的性质",
       "vi": "Thầy Vương giúp chúng tôi giải thích tính chất của sự vật này",
       "parts": [
        {
         "t": "王老师",
         "ico": "👨‍🏫",
         "c": "s",
         "py": "wáng lǎoshī",
         "hv": "vương lão sư"
        },
        {
         "t": "帮我们说明",
         "ico": "🤝",
         "c": "v",
         "py": "bāng wǒmen shuōmíng",
         "hv": "_ ngã món _ minh"
        },
        {
         "t": "这个事物的性质",
         "ico": "🔬",
         "c": "o",
         "py": "zhè gè shìwù de xìngzhì",
         "hv": "_ cá sự vật đích tính chất"
        }
       ],
       "traceWord": "事物",
       "py": "Wáng lǎoshī bāng wǒmen shuōmíng zhè gè shìwù de xìngzhì",
       "traceKey": "shiwu"
      },
      {
       "scene": "👔🤝💼",
       "full": "经理帮我们解决了同事相处的问题",
       "vi": "Quản lý giúp chúng tôi giải quyết vấn đề trong quan hệ đồng nghiệp",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "帮我们解决了",
         "ico": "🤝",
         "c": "v",
         "py": "bāng wǒmen jiějué le",
         "hv": "_ ngã món giải quyết liễu"
        },
        {
         "t": "同事相处的问题",
         "ico": "💼",
         "c": "o",
         "py": "tóngshì xiāngchǔ de wèntí",
         "hv": "đồng sự tương xử đích _ _"
        }
       ],
       "traceWord": "相处",
       "py": "Jīnglǐ bāng wǒmen jiějué le tóngshì xiāngchǔ de wèntí",
       "traceKey": "xiangchu"
      },
      {
       "scene": "🧑🔎🪪",
       "full": "朋友帮我查了他的身份和地位",
       "vi": "Bạn giúp tôi tra thân phận và địa vị của anh ta",
       "parts": [
        {
         "t": "朋友",
         "ico": "🧑",
         "c": "s",
         "py": "péngyou",
         "hv": "bằng hữu"
        },
        {
         "t": "帮我查了",
         "ico": "🔎",
         "c": "v",
         "py": "bāng wǒ chá le",
         "hv": "_ ngã tra liễu"
        },
        {
         "t": "他的身份和地位",
         "ico": "🪪",
         "c": "o",
         "py": "tā de shēnfèn hé dìwèi",
         "hv": "tha đích thân phần hoà địa vị"
        }
       ],
       "traceWord": "身份",
       "py": "Péngyou bāng wǒ chá le tā de shēnfèn hé dìwèi",
       "traceKey": "shenfen"
      },
      {
       "scene": "⏳🧑🙅",
       "full": "在这个阶段你不能只依靠别人帮你做事",
       "vi": "Ở giai đoạn này bạn không thể chỉ dựa vào người khác làm giúp việc",
       "parts": [
        {
         "t": "在这个阶段你",
         "ico": "⏳",
         "c": "s",
         "py": "zài zhè gè jiēduàn nǐ",
         "hv": "tại _ cá giai đoạn nể"
        },
        {
         "t": "不能只依靠",
         "ico": "🙅",
         "c": "v",
         "py": "bù néng zhǐ yīkào",
         "hv": "bất năng chỉ y _"
        },
        {
         "t": "别人帮你做事",
         "ico": "🤝",
         "c": "o",
         "py": "biérén bāng nǐ zuò shì",
         "hv": "_ nhân _ nể _ sự"
        }
       ],
       "traceWord": "依靠",
       "py": "Zài zhè gè jiēduàn nǐ bù néng zhǐ yīkào biérén bāng nǐ zuò shì",
       "traceKey": "yikao"
      }
     ],
     "qaList": [
      {
       "q": "你能帮我说说这个人的特征吗？",
       "qvi": "Bạn có thể giúp tôi nói về đặc điểm của người này không?",
       "scene": "🧑🔍",
       "ans": "他个子很高还戴眼镜",
       "opts": [
        {
         "txt": "他明天去上海",
         "ico": "✈️",
         "py": "Tā míngtiān qù Shànghǎi"
        },
        {
         "txt": "他个子很高还戴眼镜",
         "ico": "👓",
         "py": "Tā gèzi hěn gāo hái dài yǎnjìng"
        },
        {
         "txt": "我们在公司门口见面",
         "ico": "🚪",
         "py": "Wǒmen zài gōngsī ménkǒu jiànmiàn"
        }
       ],
       "qpy": "Nǐ néng bāng wǒ shuō shuō zhè gèrén de tèzhēng ma?"
      },
      {
       "q": "你能帮我找一个典型的例子吗？",
       "qvi": "Bạn có thể giúp tôi tìm một ví dụ điển hình không?",
       "scene": "📖🔎",
       "ans": "可以我帮你找",
       "opts": [
        {
         "txt": "我不喝咖啡",
         "ico": "☕",
         "py": "Wǒ bù hē kāfēi"
        },
        {
         "txt": "明天是星期天",
         "ico": "📅",
         "py": "Míngtiān shì xīngqītiān"
        },
        {
         "txt": "可以我帮你找",
         "ico": "🤝",
         "py": "Kěyǐ wǒ bāng nǐ zhǎo"
        }
       ],
       "qpy": "Nǐ néng bāng wǒ zhǎo yī gè diǎnxíng de lìzi ma?"
      },
      {
       "q": "会上有几个人不同意？",
       "qvi": "Trong cuộc họp có mấy người không đồng ý?",
       "scene": "🗣️🙅",
       "ans": "只有个别同事不同意",
       "opts": [
        {
         "txt": "一共有一百个人",
         "ico": "👥",
         "py": "Yī gòngyǒu yī bǎi gèrén"
        },
        {
         "txt": "只有个别同事不同意",
         "ico": "🙅",
         "py": "Zhǐyǒu gèbié tóngshì bù tóngyì"
        },
        {
         "txt": "没有人来开会",
         "ico": "🚫",
         "py": "Méi yǒu rén lái kāihuì"
        }
       ],
       "qpy": "Huì shàng yǒu jǐ gèrén bù tóngyì?"
      },
      {
       "q": "谁能帮你认识新朋友？",
       "qvi": "Ai có thể giúp bạn làm quen bạn mới?",
       "scene": "🤝👥",
       "ans": "同事小李可以帮我",
       "opts": [
        {
         "txt": "我的电脑坏了",
         "ico": "💻",
         "py": "Wǒ de diànnǎo huài le"
        },
        {
         "txt": "同事小李可以帮我",
         "ico": "🤝",
         "py": "Tóngshì Xiǎolǐ kěyǐ bāng wǒ"
        },
        {
         "txt": "我的手机在家里",
         "ico": "📱",
         "py": "Wǒ de shǒujī zài jiā li"
        }
       ],
       "qpy": "Shéi néng bāng nǐ rènshi xīn péngyou?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhờ đồng nghiệp giúp đỡ khi mới đến",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn vừa chuyển sang môi trường mới. Nhắn tin cho một đồng nghiệp: <i>\"你能帮我找一个安静的地方吗？\"</i> rồi đổi thành 3 nhờ vả khác với 帮 + người + động từ.",
       "<b>Bước 2:</b> Gọi điện (hoặc tự nói thành tiếng) để nhờ quản lý: <i>\"经理，你能帮我了解这里的情况吗？\"</i> rồi nói lời cảm ơn và một câu bạn sẽ giúp lại họ: <i>\"我也可以帮你。\"</i>",
       "<b>Bước 3:</b> Kể lại cho bạn bè ai đã giúp bạn việc gì: <i>\"经理帮我们解决了同事相处的问题。\"</i> Viết thêm 2 câu về người giúp bạn nhiều nhất."
      ]
     }
    }
   ]
  },
  "4.14": {
   "lessons": [
    {
     "id": "4.14A",
     "name": "Bài 4.14A: Văn học, thơ ca và nghệ thuật",
     "grammar": {
      "formulas": [
       "📖 这本书很好 + ⚡ 然而 + 😕 内容有点难",
       "🎬 他喜欢动画片 + ⚡ 然而 + ❌ 不喜欢唱片",
       "❓ 很著名 + ⚡ 然而 + 🤔 为什么没人读？"
      ],
      "tip": "Cấu trúc \"……，然而……\" (rán ér, âm Hán Việt: nhiên nhi) nghĩa là \"tuy nhiên\", dùng để chuyển ý trái ngược với vế trước. Đây là cách nói trang trọng, thiên về văn viết; khi nói hằng ngày hay dùng 但是 / 可是 / 不过 với nghĩa tương tự (bài này dùng 但是).",
      "vn_tip": "Người Việt hay dịch \"tuy... nhưng\" thành 虽然……但是……. Nhưng với 然而 thì thường chỉ dùng một mình ở vế sau, không đi với 但是 cùng lúc. Cũng đừng đặt 然而 sau chủ ngữ của vế sau như tiếng Việt nói \"nhưng mà\"; nó đứng đầu vế sau."
     },
     "chunks": [
      {
       "scene": "👨‍🎨📖🌟",
       "full": "这位诗人很著名但是我没读过他的诗",
       "vi": "Nhà thơ này rất nổi tiếng, nhưng tôi chưa đọc thơ của ông ấy",
       "parts": [
        {
         "t": "这位诗人",
         "ico": "👨‍🎨",
         "c": "s",
         "py": "zhè wèi shīrén",
         "hv": "_ vị thi nhân"
        },
        {
         "t": "很著名",
         "ico": "🌟",
         "c": "v",
         "py": "hěn zhùmíng",
         "hv": "_ trứ danh"
        },
        {
         "t": "但是我没读过他的诗",
         "ico": "📖",
         "c": "o",
         "py": "dànshì wǒ méi dú guò tā de shī",
         "hv": "_ thị ngã một độc quá tha đích thi"
        }
       ],
       "traceWord": "诗人",
       "py": "Zhè wèi shīrén hěn zhùmíng dànshì wǒ méi dú guò tā de shī",
       "traceKey": "shiren"
      },
      {
       "scene": "📚🏛️🤔",
       "full": "这本著作是经典但是内容比较难",
       "vi": "Tác phẩm này là kinh điển, nhưng nội dung khá khó",
       "parts": [
        {
         "t": "这本著作",
         "ico": "📚",
         "c": "s",
         "py": "zhè běn zhùzuò",
         "hv": "_ bản trứ tác"
        },
        {
         "t": "是经典",
         "ico": "🏛️",
         "c": "v",
         "py": "shì jīngdiǎn",
         "hv": "thị kinh điển"
        },
        {
         "t": "但是内容比较难",
         "ico": "🤔",
         "c": "o",
         "py": "dànshì nèiróng bǐjiào nán",
         "hv": "_ thị nội dung tỉ _ nan"
        }
       ],
       "traceWord": "著作",
       "py": "Zhè běn zhùzuò shì jīngdiǎn dànshì nèiróng bǐjiào nán",
       "traceKey": "zhuzuo"
      },
      {
       "scene": "👦🐉🧚",
       "full": "弟弟不喜欢神话但是很喜欢童话",
       "vi": "Em trai không thích thần thoại, nhưng rất thích truyện cổ tích",
       "parts": [
        {
         "t": "弟弟",
         "ico": "👦",
         "c": "s",
         "py": "dìdi",
         "hv": "đệ đệ"
        },
        {
         "t": "不喜欢神话",
         "ico": "🐉",
         "c": "v",
         "py": "bù xǐhuan shénhuà",
         "hv": "bất hỉ hoan thần thoại"
        },
        {
         "t": "但是很喜欢童话",
         "ico": "🧚",
         "c": "o",
         "py": "dànshì hěn xǐhuan tónghuà",
         "hv": "_ thị _ hỉ hoan đồng thoại"
        }
       ],
       "traceWord": "神话",
       "py": "Dìdi bù xǐhuan shénhuà dànshì hěn xǐhuan tónghuà",
       "traceKey": "shenhua"
      },
      {
       "scene": "🎉🏮🆕",
       "full": "晚会的风格很传统但是主题很新",
       "vi": "Phong cách của buổi tiệc rất truyền thống, nhưng chủ đề rất mới",
       "parts": [
        {
         "t": "晚会的风格",
         "ico": "🎉",
         "c": "s",
         "py": "wǎnhuì de fēnggé",
         "hv": "vãn hội đích phong cách"
        },
        {
         "t": "很传统",
         "ico": "🏮",
         "c": "v",
         "py": "hěn chuántǒng",
         "hv": "_ truyền thống"
        },
        {
         "t": "但是主题很新",
         "ico": "🆕",
         "c": "o",
         "py": "dànshì zhǔtí hěn xīn",
         "hv": "_ thị chúa _ _ tân"
        }
       ],
       "traceWord": "风格",
       "py": "Wǎnhuì de fēnggé hěn chuántǒng dànshì zhǔtí hěn xīn",
       "traceKey": "fengge"
      },
      {
       "scene": "👨📺💿",
       "full": "他喜欢看动画片但是不喜欢买唱片",
       "vi": "Anh ấy thích xem phim hoạt hình, nhưng không thích mua đĩa nhạc",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喜欢看动画片",
         "ico": "📺",
         "c": "v",
         "py": "xǐhuan kàn dònghuàpiàn",
         "hv": "hỉ hoan khán động hoạ phiến"
        },
        {
         "t": "但是不喜欢买唱片",
         "ico": "💿",
         "c": "o",
         "py": "dànshì bù xǐhuan mǎi chàngpiàn",
         "hv": "_ thị bất hỉ hoan mãi xướng phiến"
        }
       ],
       "traceWord": "动画片",
       "py": "Tā xǐhuan kàn dònghuàpiàn dànshì bù xǐhuan mǎi chàngpiàn",
       "traceKey": "donghuapian"
      },
      {
       "scene": "👗📸😌",
       "full": "这位模特儿是名人但是平时很安静",
       "vi": "Người mẫu này là người nổi tiếng, nhưng ngày thường rất ít nói",
       "parts": [
        {
         "t": "这位模特儿",
         "ico": "👗",
         "c": "s",
         "py": "zhè wèi mótèr",
         "hv": "_ vị mô đặc _"
        },
        {
         "t": "是名人",
         "ico": "📸",
         "c": "v",
         "py": "shì míngrén",
         "hv": "thị danh nhân"
        },
        {
         "t": "但是平时很安静",
         "ico": "😌",
         "c": "o",
         "py": "dànshì píngshí hěn ānjìng",
         "hv": "_ thị bình thì _ an _"
        }
       ],
       "traceWord": "模特儿",
       "py": "Zhè wèi mótèr shì míngrén dànshì píngshí hěn ānjìng",
       "traceKey": "moter"
      },
      {
       "scene": "🎬🔥😢",
       "full": "电影的高潮很精彩但是最后让我难过",
       "vi": "Cao trào của bộ phim rất hay, nhưng đoạn cuối làm tôi buồn",
       "parts": [
        {
         "t": "电影的高潮",
         "ico": "🎬",
         "c": "s",
         "py": "diànyǐng de gāocháo",
         "hv": "_ ảnh đích cao triều"
        },
        {
         "t": "很精彩",
         "ico": "🔥",
         "c": "v",
         "py": "hěn jīngcǎi",
         "hv": "_ tinh thái"
        },
        {
         "t": "但是最后让我难过",
         "ico": "😢",
         "c": "o",
         "py": "dànshì zuìhòu ràng wǒ nánguò",
         "hv": "_ thị tối hậu nhường ngã nan quá"
        }
       ],
       "traceWord": "高潮",
       "py": "Diànyǐng de gāocháo hěn jīngcǎi dànshì zuìhòu ràng wǒ nánguò",
       "traceKey": "gaochao"
      },
      {
       "scene": "🎤🎶🔉",
       "full": "他唱的歌很优美但是声音太小",
       "vi": "Bài hát anh ấy hát rất hay, nhưng giọng hơi nhỏ",
       "parts": [
        {
         "t": "他唱的歌",
         "ico": "🎤",
         "c": "s",
         "py": "tā chàng de gē",
         "hv": "tha xướng đích ca"
        },
        {
         "t": "很优美",
         "ico": "🎶",
         "c": "v",
         "py": "hěn yōuměi",
         "hv": "_ _ mỉ"
        },
        {
         "t": "但是声音太小",
         "ico": "🔉",
         "c": "o",
         "py": "dànshì shēngyīn tài xiǎo",
         "hv": "_ thị thanh âm thái tiểu"
        }
       ],
       "traceWord": "优美",
       "py": "Tā chàng de gē hěn yōuměi dànshì shēngyīn tài xiǎo",
       "traceKey": "youmei"
      }
     ],
     "qaList": [
      {
       "q": "你最喜欢哪位诗人？",
       "qvi": "Bạn thích nhà thơ nào nhất?",
       "scene": "👨‍🎨📖",
       "ans": "我最喜欢他写的诗",
       "opts": [
        {
         "txt": "我最喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ zuì xǐhuan chī miàntiáor"
        },
        {
         "txt": "我最喜欢他写的诗",
         "ico": "📖",
         "py": "Wǒ zuì xǐhuan tā xiě de shī"
        },
        {
         "txt": "我昨天去了超市",
         "ico": "🛒",
         "py": "Wǒ zuótiān qù le chāoshì"
        }
       ],
       "qpy": "Nǐ zuì xǐhuan nǎ wèi shīrén?"
      },
      {
       "q": "这部动画片怎么样？",
       "qvi": "Bộ phim hoạt hình này thế nào?",
       "scene": "📺🧒",
       "ans": "故事很有意思",
       "opts": [
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "他是我的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "故事很有意思",
         "ico": "😄",
         "py": "Gùshi hěn yǒu yìsi"
        }
       ],
       "qpy": "Zhè bù dònghuàpiàn zěnmeyàng?"
      },
      {
       "q": "他是著名的模特儿吗？",
       "qvi": "Anh ấy có phải người mẫu nổi tiếng không?",
       "scene": "👗📸",
       "ans": "许多人都认识他",
       "opts": [
        {
         "txt": "许多人都认识他",
         "ico": "👥",
         "py": "Xǔduō rén dōu rènshi tā"
        },
        {
         "txt": "他今天没有上班",
         "ico": "🏠",
         "py": "Tā jīntiān méiyǒu shàngbān"
        },
        {
         "txt": "这个杯子很便宜",
         "ico": "🥤",
         "py": "Zhè gè bēizi hěn piányi"
        }
       ],
       "qpy": "Tā shì zhùmíng de mótèr ma?"
      },
      {
       "q": "这首诗的主题是什么？",
       "qvi": "Chủ đề của bài thơ này là gì?",
       "scene": "📜🏡",
       "ans": "主题是想念家乡",
       "opts": [
        {
         "txt": "这是我的手机",
         "ico": "📱",
         "py": "Zhè shì wǒ de shǒujī"
        },
        {
         "txt": "我们明天开会",
         "ico": "💼",
         "py": "Wǒmen míngtiān kāihuì"
        },
        {
         "txt": "主题是想念家乡",
         "ico": "🏡",
         "py": "Zhǔtí shì xiǎngniàn jiāxiāng"
        }
       ],
       "qpy": "Zhè shǒu shī de zhǔtí shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu một tác phẩm với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Chọn một cuốn sách, bài hát hoặc bộ phim mà bạn biết. Nói thành tiếng một câu khen, ví dụ <i>\"他唱的歌很优美但是声音太小\"</i>, rồi thay bằng nội dung của bạn.",
       "<b>Bước 2:</b> Viết 3 câu theo mẫu \"khen + nhưng\" như <i>\"这本著作是经典但是内容比较难\"</i> để nhắn cho đồng nghiệp trong nhóm chat.",
       "<b>Bước 3:</b> Hỏi đồng nghiệp bằng <i>\"你最喜欢哪位诗人？\"</i> hoặc <i>\"这部动画片怎么样？\"</i>, rồi tự trả lời thành tiếng bằng một câu có 但是."
      ]
     }
    },
    {
     "id": "4.14B",
     "name": "Bài 4.14B: Màu sắc, hình ảnh và thủ công",
     "grammar": {
      "formulas": [
       "🧑 他 + ✋ 一个一个 + 🎈 吹气球",
       "🌳 树 + 📅 一天一天 + 🌸 长大",
       "🖼️ 画 + ✏️ 一笔一笔 + 🎨 画出来"
      ],
      "tip": "Cấu trúc \"一A一B\" (A, B là lượng từ hoặc danh từ giống nhau) diễn tả hành động xảy ra \"từng cái một, lần lượt\": 一个一个 (yī gè yī gè, nhất cá nhất cá), 一步一步 (từng bước), 一张一张 (từng tấm), 一笔一笔 (từng nét). Thường đứng trước động từ để chỉ cách làm.",
      "vn_tip": "Người Việt hay chỉ nói \"từng cái\" nên viết 一个做 hoặc 每个一个. Đúng phải lặp cả hai vế: 一个一个地做. Cũng đừng nhầm với \"一个比一个\" (cái sau hơn cái trước), đó là cấu trúc khác."
     },
     "chunks": [
      {
       "scene": "🌳📅🌸",
       "full": "树一天一天长大终于开花了",
       "vi": "Cây lớn lên từng ngày và cuối cùng đã nở hoa",
       "parts": [
        {
         "t": "树",
         "ico": "🌳",
         "c": "s",
         "py": "shù",
         "hv": "thụ"
        },
        {
         "t": "一天一天长大",
         "ico": "📅",
         "c": "v",
         "py": "yī tiān yī tiān zhǎngdà",
         "hv": "nhất thiên nhất thiên trường đại"
        },
        {
         "t": "终于开花了",
         "ico": "🌸",
         "c": "o",
         "py": "zhōngyú kāihuā le",
         "hv": "chung vu khai hoa liễu"
        }
       ],
       "traceWord": "开花",
       "py": "Shù yī tiān yī tiān zhǎngdà zhōngyú kāihuā le",
       "traceKey": "kaihua"
      },
      {
       "scene": "🧑💐🎁",
       "full": "他把鲜花一束一束送给客人",
       "vi": "Anh ấy tặng hoa tươi cho khách từng bó một",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把鲜花一束一束送给",
         "ico": "💐",
         "c": "v",
         "py": "bǎ xiānhuā yī shù yī shù sòng gěi",
         "hv": "bã tiên hoa nhất thút nhất thút tống cấp"
        },
        {
         "t": "客人",
         "ico": "🧑‍💼",
         "c": "o",
         "py": "kèrén",
         "hv": "khách nhân"
        }
       ],
       "traceWord": "鲜花",
       "py": "Tā bǎ xiānhuā yī shù yī shù sòng gěi kèrén",
       "traceKey": "xianhua"
      },
      {
       "scene": "👦✏️🎨",
       "full": "孩子一笔一笔画出鲜明的色彩",
       "vi": "Đứa trẻ vẽ ra màu sắc tươi sáng từng nét một",
       "parts": [
        {
         "t": "孩子",
         "ico": "👦",
         "c": "s",
         "py": "háizi",
         "hv": "hài tí"
        },
        {
         "t": "一笔一笔画出",
         "ico": "✏️",
         "c": "v",
         "py": "yī bǐ yī bǐ huà chū",
         "hv": "nhất bút nhất bút hoạ xuất"
        },
        {
         "t": "鲜明的色彩",
         "ico": "🎨",
         "c": "o",
         "py": "xiānmíng de sècǎi",
         "hv": "tiên minh đích sắc thái"
        }
       ],
       "traceWord": "色彩",
       "py": "Háizi yī bǐ yī bǐ huà chū xiānmíng de sècǎi",
       "traceKey": "secai"
      },
      {
       "scene": "🧑🎈🌈",
       "full": "他把五颜六色的气球一个一个吹大",
       "vi": "Anh ấy thổi to từng quả bóng bay đủ màu sắc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "把五颜六色的气球",
         "ico": "🎈",
         "c": "v",
         "py": "bǎ wǔyán-liùsè de qìqiú",
         "hv": "bã ngũ _ lục sắc đích khí cầu"
        },
        {
         "t": "一个一个吹大",
         "ico": "💨",
         "c": "o",
         "py": "yī gè yī gè chuī dà",
         "hv": "nhất cá nhất cá xuy đại"
        }
       ],
       "traceWord": "气球",
       "py": "Tā bǎ wǔyán-liùsè de qìqiú yī gè yī gè chuī dà",
       "traceKey": "qiqiu"
      },
      {
       "scene": "🧑‍🤝‍🧑✂️🖍️",
       "full": "我们在手工课上一笔一笔画图案",
       "vi": "Chúng tôi vẽ hoa văn từng nét một trong giờ thủ công",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "在手工课上",
         "ico": "✂️",
         "c": "v",
         "py": "zài shǒugōng kè shàng",
         "hv": "tại thủ công khoá thượng"
        },
        {
         "t": "一笔一笔画图案",
         "ico": "🖍️",
         "c": "o",
         "py": "yī bǐ yī bǐ huà tú'àn",
         "hv": "nhất bút nhất bút hoạ đồ án"
        }
       ],
       "traceWord": "手工",
       "py": "Wǒmen zài shǒugōng kè shàng yī bǐ yī bǐ huà tú'àn",
       "traceKey": "shougong"
      },
      {
       "scene": "🧑📄⭕",
       "full": "他在纸上一圈一圈画圆",
       "vi": "Anh ấy vẽ hình tròn trên giấy, từng vòng một",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在纸上",
         "ico": "📄",
         "c": "v",
         "py": "zài zhǐ shàng",
         "hv": "tại chỉ thượng"
        },
        {
         "t": "一圈一圈画圆",
         "ico": "⭕",
         "c": "o",
         "py": "yī quān yī quān huà yuán",
         "hv": "nhất khuyên nhất khuyên hoạ viên"
        }
       ],
       "traceWord": "圈",
       "py": "Tā zài zhǐ shàng yī quān yī quān huà yuán",
       "traceKey": "quan"
      },
      {
       "scene": "💡🧑🌓",
       "full": "灯光下他的影子一步一步变长",
       "vi": "Dưới ánh đèn, cái bóng của anh ấy dài ra từng bước",
       "parts": [
        {
         "t": "灯光下他的影子",
         "ico": "💡",
         "c": "s",
         "py": "dēngguāng xià tā de yǐngzi",
         "hv": "đăng quang hạ tha đích ảnh tí"
        },
        {
         "t": "一步一步",
         "ico": "👣",
         "c": "v",
         "py": "yī bù yī bù",
         "hv": "nhất bộ nhất bộ"
        },
        {
         "t": "变长",
         "ico": "📏",
         "c": "o",
         "py": "biàn cháng",
         "hv": "biến trường"
        }
       ],
       "traceWord": "影子",
       "py": "Dēngguāng xià tā de yǐngzi yī bù yī bù biàn cháng",
       "traceKey": "yingzi"
      },
      {
       "scene": "👩🖼️🧱",
       "full": "她把照片一张一张贴在墙上",
       "vi": "Cô ấy dán từng tấm ảnh lên tường",
       "parts": [
        {
         "t": "她",
         "ico": "👩",
         "c": "s",
         "py": "tā",
         "hv": "_"
        },
        {
         "t": "把照片一张一张贴",
         "ico": "🖼️",
         "c": "v",
         "py": "bǎ zhàopiàn yī zhāng yī zhāng tiē",
         "hv": "bã chiếu phiến nhất trương nhất trương _"
        },
        {
         "t": "在墙上",
         "ico": "🧱",
         "c": "o",
         "py": "zài qiáng shàng",
         "hv": "tại tường thượng"
        }
       ],
       "traceWord": "贴",
       "py": "Tā bǎ zhàopiàn yī zhāng yī zhāng tiē zài qiáng shàng",
       "traceKey": "tie"
      }
     ],
     "qaList": [
      {
       "q": "他在手工课上做什么？",
       "qvi": "Anh ấy làm gì trong giờ thủ công?",
       "scene": "🧑✂️",
       "ans": "他把玉一块一块摆好",
       "opts": [
        {
         "txt": "他在公司开会",
         "ico": "💼",
         "py": "Tā zài gōngsī kāihuì"
        },
        {
         "txt": "他把玉一块一块摆好",
         "ico": "🪨",
         "py": "Tā bǎ yù yī kuài yī kuài bǎi hǎo"
        },
        {
         "txt": "他正在洗澡",
         "ico": "🛁",
         "py": "Tā zhèngzài xǐzǎo"
        }
       ],
       "qpy": "Tā zài shǒugōng kè shàng zuò shénme?"
      },
      {
       "q": "你们在做什么？",
       "qvi": "Các bạn đang làm gì thế?",
       "scene": "🧑‍🤝‍🧑🃏",
       "ans": "我们在玩儿牌",
       "opts": [
        {
         "txt": "我们在看电影",
         "ico": "🎬",
         "py": "Wǒmen zài kàn diànyǐng"
        },
        {
         "txt": "我们在吃饭",
         "ico": "🍚",
         "py": "Wǒmen zài chīfàn"
        },
        {
         "txt": "我们在玩儿牌",
         "ico": "🃏",
         "py": "Wǒmen zài wánr pái"
        }
       ],
       "qpy": "Nǐmen zài zuò shénme?"
      },
      {
       "q": "这次会议怎么样？",
       "qvi": "Cuộc họp lần này thế nào?",
       "scene": "💼👍",
       "ans": "会议开得很圆满",
       "opts": [
        {
         "txt": "会议开得很圆满",
         "ico": "👍",
         "py": "Huìyì kāi dé hěn yuánmǎn"
        },
        {
         "txt": "我昨天去了北京",
         "ico": "🚄",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "我不喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ bù xǐhuan hē chá"
        }
       ],
       "qpy": "Zhè cì huìyì zěnmeyàng?"
      },
      {
       "q": "你觉得这件衬衫怎么样？",
       "qvi": "Bạn thấy chiếc áo sơ mi này thế nào?",
       "scene": "👔🎨",
       "ans": "这个色很适合你",
       "opts": [
        {
         "txt": "它很便宜",
         "ico": "💰",
         "py": "Tā hěn piányi"
        },
        {
         "txt": "它在桌子上",
         "ico": "🪑",
         "py": "Tā zài zhuōzi shàng"
        },
        {
         "txt": "这个色很适合你",
         "ico": "🔴",
         "py": "Zhè gè sè hěn shìhé nǐ"
        }
       ],
       "qpy": "Nǐ juéde zhè jiàn chènshān zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hướng dẫn đồng nghiệp làm một món thủ công",
      "steps": [
       "<b>Bước 1:</b> Chọn một việc nhỏ như dán ảnh lên bảng, trang trí bóng bay cho buổi tiệc công ty. Chuẩn bị đồ và nói thành tiếng <i>\"她把照片一张一张贴在墙上\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp hướng dẫn từng bước, dùng mẫu \"一A一B\" như <i>\"他把五颜六色的气球一个一个吹大\"</i> hoặc <i>\"我们在手工课上一笔一笔画图案\"</i>.",
       "<b>Bước 3:</b> Hỏi đồng nghiệp <i>\"你们在做什么？\"</i> rồi tự trả lời bằng một câu có 一A一B, mô tả việc bạn vừa làm xong."
      ]
     }
    },
    {
     "id": "4.14C",
     "name": "Bài 4.14C: Giấc mơ, sở thích và nỗi nhớ",
     "grammar": {
      "formulas": [
       "❓ 假如 + 🧑 你 + 💭 有梦想",
       "➡️ 就 + 💪 要努力",
       "🏡 假如 + 🧑 他离开家乡 + ➡️ 就 + ❤️ 会怀念"
      ],
      "tip": "Cấu trúc \"假如……，（就）……\" (jiǎrú, âm Hán Việt: giả như) nghĩa là \"nếu… thì…\", nêu một giả thiết rồi nói kết quả. 假如 mang sắc thái văn viết hơn 如果; vế sau thường có 就 hoặc 会. Trong bài này dùng 如果, cách nói quen thuộc hơn, với cùng cấu trúc.",
      "vn_tip": "Người Việt hay bỏ 就 ở vế sau hoặc đặt 就 trước chủ ngữ. Đúng là chủ ngữ + 就 + động từ: 如果你有梦想，你就要努力. Cũng đừng thêm 的话 và 如果 cùng lúc một cách thừa nếu câu đã rõ nghĩa."
     },
     "chunks": [
      {
       "scene": "🧑💭💪",
       "full": "如果你有梦想就要努力",
       "vi": "Nếu bạn có ước mơ thì phải cố gắng",
       "parts": [
        {
         "t": "如果你",
         "ico": "🧑",
         "c": "s",
         "py": "rúguǒ nǐ",
         "hv": "như quả nể"
        },
        {
         "t": "有梦想",
         "ico": "💭",
         "c": "v",
         "py": "yǒu mèngxiǎng",
         "hv": "hữu _ tưởng"
        },
        {
         "t": "就要努力",
         "ico": "💪",
         "c": "o",
         "py": "jiùyào nǔlì",
         "hv": "_ yếu _ lực"
        }
       ],
       "traceWord": "梦想",
       "py": "Rúguǒ nǐ yǒu mèngxiǎng jiùyào nǔlì",
       "traceKey": "mengxiang"
      },
      {
       "scene": "👩😴🏡",
       "full": "如果她梦见家乡就会想念家人",
       "vi": "Nếu cô ấy mơ thấy quê nhà thì sẽ nhớ gia đình",
       "parts": [
        {
         "t": "如果她",
         "ico": "👩",
         "c": "s",
         "py": "rúguǒ tā",
         "hv": "như quả _"
        },
        {
         "t": "梦见家乡",
         "ico": "😴",
         "c": "v",
         "py": "mèngjiàn jiāxiāng",
         "hv": "_ kiến gia _"
        },
        {
         "t": "就会想念家人",
         "ico": "🏡",
         "c": "o",
         "py": "jiù huì xiǎngniàn jiārén",
         "hv": "_ hội tưởng niệm gia nhân"
        }
       ],
       "traceWord": "梦见",
       "py": "Rúguǒ tā mèngjiàn jiāxiāng jiù huì xiǎngniàn jiārén",
       "traceKey": "mengjian"
      },
      {
       "scene": "🧑💤🚫",
       "full": "如果你只会做梦就不会成功",
       "vi": "Nếu bạn chỉ biết mơ mộng thì sẽ không thành công",
       "parts": [
        {
         "t": "如果你",
         "ico": "🧑",
         "c": "s",
         "py": "rúguǒ nǐ",
         "hv": "như quả nể"
        },
        {
         "t": "只会做梦",
         "ico": "💤",
         "c": "v",
         "py": "zhǐ huì zuòmèng",
         "hv": "chỉ hội _ _"
        },
        {
         "t": "就不会成功",
         "ico": "🚫",
         "c": "o",
         "py": "jiù bú huì chénggōng",
         "hv": "_ bất hội thành công"
        }
       ],
       "traceWord": "做梦",
       "py": "Rúguǒ nǐ zhǐ huì zuòmèng jiù bú huì chénggōng",
       "traceKey": "zuomeng"
      },
      {
       "scene": "👨🏡🥺",
       "full": "如果他离开家乡就会怀念老朋友",
       "vi": "Nếu anh ấy rời quê hương thì sẽ nhớ những người bạn cũ",
       "parts": [
        {
         "t": "如果他",
         "ico": "👨",
         "c": "s",
         "py": "rúguǒ tā",
         "hv": "như quả tha"
        },
        {
         "t": "离开家乡",
         "ico": "🏡",
         "c": "v",
         "py": "líkāi jiāxiāng",
         "hv": "li khai gia _"
        },
        {
         "t": "就会怀念老朋友",
         "ico": "🥺",
         "c": "o",
         "py": "jiù huì huáiniàn lǎo péngyou",
         "hv": "_ hội hoài niệm lão bằng hữu"
        }
       ],
       "traceWord": "怀念",
       "py": "Rúguǒ tā líkāi jiāxiāng jiù huì huáiniàn lǎo péngyou",
       "traceKey": "huainian"
      },
      {
       "scene": "🧑📖✨",
       "full": "如果你喜爱读书就会发现读书的乐趣",
       "vi": "Nếu bạn yêu thích đọc sách thì sẽ phát hiện niềm vui của việc đọc",
       "parts": [
        {
         "t": "如果你",
         "ico": "🧑",
         "c": "s",
         "py": "rúguǒ nǐ",
         "hv": "như quả nể"
        },
        {
         "t": "喜爱读书",
         "ico": "📖",
         "c": "v",
         "py": "xǐ'ài dúshū",
         "hv": "hỉ _ độc thư"
        },
        {
         "t": "就会发现读书的乐趣",
         "ico": "✨",
         "c": "o",
         "py": "jiù huì fāxiàn dúshū de lèqù",
         "hv": "_ hội _ hiện độc thư đích lạc thú"
        }
       ],
       "traceWord": "乐趣",
       "py": "Rúguǒ nǐ xǐ'ài dúshū jiù huì fāxiàn dúshū de lèqù",
       "traceKey": "lequ"
      },
      {
       "scene": "🧑🖌️🎉",
       "full": "如果你对画画感兴趣就来参加",
       "vi": "Nếu bạn có hứng thú với hội họa thì hãy đến tham gia",
       "parts": [
        {
         "t": "如果你",
         "ico": "🧑",
         "c": "s",
         "py": "rúguǒ nǐ",
         "hv": "như quả nể"
        },
        {
         "t": "对画画感兴趣",
         "ico": "🖌️",
         "c": "v",
         "py": "duì huà huà gǎn xìngqù",
         "hv": "đỗi hoạ hoạ cảm hưng thú"
        },
        {
         "t": "就来参加",
         "ico": "🎉",
         "c": "o",
         "py": "jiù lái cānjiā",
         "hv": "_ lai tham gia"
        }
       ],
       "traceWord": "感兴趣",
       "py": "Rúguǒ nǐ duì huà huà gǎn xìngqù jiù lái cānjiā",
       "traceKey": "ganxingqu"
      },
      {
       "scene": "📚😄🙂",
       "full": "如果故事很有趣他就会微笑",
       "vi": "Nếu câu chuyện thú vị thì anh ấy sẽ mỉm cười",
       "parts": [
        {
         "t": "如果故事",
         "ico": "📚",
         "c": "s",
         "py": "rúguǒ gùshi",
         "hv": "như quả cố sự"
        },
        {
         "t": "很有趣",
         "ico": "😄",
         "c": "v",
         "py": "hěn yǒuqù",
         "hv": "_ hữu thú"
        },
        {
         "t": "他就会微笑",
         "ico": "🙂",
         "c": "o",
         "py": "tā jiù huì wēixiào",
         "hv": "tha _ hội vi _"
        }
       ],
       "traceWord": "微笑",
       "py": "Rúguǒ gùshi hěn yǒuqù tā jiù huì wēixiào",
       "traceKey": "weixiao"
      },
      {
       "scene": "👨👀💧",
       "full": "如果他眼里有泪水你就别问",
       "vi": "Nếu trong mắt anh ấy có nước mắt thì bạn đừng hỏi",
       "parts": [
        {
         "t": "如果他",
         "ico": "👨",
         "c": "s",
         "py": "rúguǒ tā",
         "hv": "như quả tha"
        },
        {
         "t": "眼里有泪水",
         "ico": "💧",
         "c": "v",
         "py": "yǎnli yǒu lèishuǐ",
         "hv": "nhãn lịa hữu lệ thuỷ"
        },
        {
         "t": "你就别问",
         "ico": "🤫",
         "c": "o",
         "py": "nǐ jiù bié wèn",
         "hv": "nể _ _ _"
        }
       ],
       "traceWord": "泪水",
       "py": "Rúguǒ tā yǎnli yǒu lèishuǐ nǐ jiù bié wèn",
       "traceKey": "leishui"
      }
     ],
     "qaList": [
      {
       "q": "你昨天晚上睡得好吗？",
       "qvi": "Tối qua bạn ngủ ngon không?",
       "scene": "🧑💤",
       "ans": "我做了一个很长的梦",
       "opts": [
        {
         "txt": "我今天很累",
         "ico": "😴",
         "py": "Wǒ jīntiān hěn lèi"
        },
        {
         "txt": "我在北京住了三年",
         "ico": "🏙️",
         "py": "Wǒ zài Běijīng zhù le sān nián"
        },
        {
         "txt": "我做了一个很长的梦",
         "ico": "💭",
         "py": "Wǒ zuò le yī gè hěn cháng de mèng"
        }
       ],
       "qpy": "Nǐ zuótiān wǎnshang shuì dé hǎo ma?"
      },
      {
       "q": "他为什么哭了？",
       "qvi": "Tại sao anh ấy khóc?",
       "scene": "👨😭",
       "ans": "因为想念家人他流下了泪",
       "opts": [
        {
         "txt": "因为想念家人他流下了泪",
         "ico": "👨‍👩‍👦",
         "py": "Yīnwèi xiǎngniàn jiārén tā liú xià le lèi"
        },
        {
         "txt": "因为他买了新手机",
         "ico": "📱",
         "py": "Yīnwèi tā mǎi le xīn shǒujī"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Tā wèi shénme kū le?"
      },
      {
       "q": "你有什么兴趣？",
       "qvi": "Bạn có sở thích gì?",
       "scene": "🧑🎵",
       "ans": "我的兴趣是听音乐",
       "opts": [
        {
         "txt": "我坐地铁去公司",
         "ico": "🚇",
         "py": "Wǒ zuò dìtiě qù gōngsī"
        },
        {
         "txt": "我的兴趣是听音乐",
         "ico": "🎵",
         "py": "Wǒ de xìngqù shì tīng yīnyuè"
        },
        {
         "txt": "我家有两只猫",
         "ico": "🐱",
         "py": "Wǒ jiā yǒu liǎng zhǐ māo"
        }
       ],
       "qpy": "Nǐ yǒu shénme xìngqù?"
      },
      {
       "q": "她在做什么？",
       "qvi": "Cô ấy đang làm gì?",
       "scene": "👩💧",
       "ans": "她在擦眼泪",
       "opts": [
        {
         "txt": "她在买苹果",
         "ico": "🍎",
         "py": "Tā zài mǎi píngguǒ"
        },
        {
         "txt": "她在关灯",
         "ico": "💡",
         "py": "Tā zài guān dēng"
        },
        {
         "txt": "她在擦眼泪",
         "ico": "😢",
         "py": "Tā zài cā yǎnlèi"
        }
       ],
       "qpy": "Tā zài zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trò chuyện về ước mơ và sở thích với đối tác",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một ước mơ hoặc sở thích của bạn. Nói thành tiếng <i>\"如果你有梦想就要努力\"</i> rồi đổi vế đầu thành ước mơ của bạn.",
       "<b>Bước 2:</b> Nhắn tin làm quen với một đối tác, hỏi <i>\"你有什么兴趣？\"</i> và tự trả lời bằng mẫu \"如果……就……\", ví dụ <i>\"如果你喜爱读书就会发现读书的乐趣\"</i>.",
       "<b>Bước 3:</b> Kể thành tiếng về một người hay nơi bạn nhớ bằng <i>\"如果他离开家乡就会怀念老朋友\"</i>, thay bằng hoàn cảnh của bạn, tối thiểu 3 câu."
      ]
     }
    }
   ]
  },
  "4.15": {
   "lessons": [
    {
     "id": "4.15A",
     "name": "Bài 4.15A: Rừng cây, thực vật và địa hình",
     "grammar": {
      "formulas": [
       "🌦 不论 + 🌤 天气/情况 + 🧑 主语 + ✅ 都 + 🌳 结果",
       "🌍 不论 + A + 还是 + B + 🧑 主语 + ✅ 都 + 👍 结果"
      ],
      "tip": "Cấu trúc \"不论/无论……，都/也……\" (búlùn/wúlùn, âm Hán Việt: bất luận/vô luận) nghĩa là \"dù… thì cũng…\". Vế sau luôn có 都 hoặc 也 để chốt kết quả không đổi. Vế đầu thường có hai lựa chọn (A还是B), cặp trái nghĩa (大小, 冷热) hoặc từ nghi vấn.",
      "vn_tip": "Người Việt hay nói \"dù…, nhưng…\" nên dịch thành 虽然……但是……, hoặc quên 都 ở vế sau. Đúng: 不论冬天夏天，森林都很漂亮 (đủ 都). Không nói: 不论冬天夏天，森林很漂亮."
     },
     "chunks": [
      {
       "scene": "🌲🌞❄️",
       "full": "不论冬天夏天森林都很漂亮",
       "vi": "Dù mùa đông hay mùa hè, rừng đều rất đẹp",
       "parts": [
        {
         "t": "不论冬天夏天森林",
         "ico": "🌲",
         "c": "s",
         "py": "bùlùn dōngtiān xiàtiān sēnlín",
         "hv": "bất luận đông thiên _ thiên chùm lâm"
        },
        {
         "t": "都很",
         "ico": "✅",
         "c": "v",
         "py": "dōu hěn",
         "hv": "đô _"
        },
        {
         "t": "漂亮",
         "ico": "✨",
         "c": "o",
         "py": "piàoliang",
         "hv": "phều _"
        }
       ],
       "traceWord": "森林",
       "py": "Bùlùn dōngtiān xiàtiān sēnlín dōu hěn piàoliang",
       "traceKey": "senlin"
      },
      {
       "scene": "🌳☁️🚶",
       "full": "不论春天秋天这种树都有刺",
       "vi": "Dù xuân hay thu, loại cây này đều có gai",
       "parts": [
        {
         "t": "不论春天秋天这种树",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "bùlùn chūntiān qiūtiān zhè zhǒng shù",
         "hv": "bất luận _ thiên thu thiên _ chõng thụ"
        },
        {
         "t": "都有",
         "ico": "🚶",
         "c": "v",
         "py": "dōu yǒu",
         "hv": "đô hữu"
        },
        {
         "t": "刺",
         "ico": "🌳",
         "c": "o",
         "py": "cì",
         "hv": "thích"
        }
       ],
       "traceWord": "刺",
       "py": "Bùlùn chūntiān qiūtiān zhè zhǒng shù dōu yǒu cì",
       "traceKey": "ci"
      },
      {
       "scene": "🌲🍃🌞",
       "full": "不论冬天还是夏天松树的叶子都是绿色",
       "vi": "Dù mùa đông hay mùa hè, lá cây thông đều có màu xanh",
       "parts": [
        {
         "t": "不论冬天还是夏天松树的叶子",
         "ico": "🌲",
         "c": "s",
         "py": "bùlùn dōngtiān háishi xiàtiān sōngshù de yèzi",
         "hv": "bất luận đông thiên hoàn thị _ thiên tùng thụ đích diệp tí"
        },
        {
         "t": "都是",
         "ico": "✅",
         "c": "v",
         "py": "dōu shì",
         "hv": "đô thị"
        },
        {
         "t": "绿色",
         "ico": "🟢",
         "c": "o",
         "py": "lǜsè",
         "hv": "lục sắc"
        }
       ],
       "traceWord": "松树",
       "py": "Bùlùn dōngtiān háishi xiàtiān sōngshù de yèzi dōu shì lǜsè",
       "traceKey": "songshu"
      },
      {
       "scene": "🍂🌳🍁",
       "full": "秋天不论大树小树树叶都会掉下来",
       "vi": "Mùa thu, dù cây to hay cây nhỏ, lá đều rụng xuống",
       "parts": [
        {
         "t": "秋天不论大树小树树叶",
         "ico": "🍂",
         "c": "s",
         "py": "qiūtiān bùlùn dà shù xiǎo shù shùyè",
         "hv": "thu thiên bất luận đại thụ tiểu thụ thụ diệp"
        },
        {
         "t": "都会",
         "ico": "✅",
         "c": "v",
         "py": "dōu huì",
         "hv": "đô hội"
        },
        {
         "t": "掉下来",
         "ico": "⬇️",
         "c": "o",
         "py": "diào xiàlái",
         "hv": "trao hạ lai"
        }
       ],
       "traceWord": "树叶",
       "py": "Qiūtiān bùlùn dà shù xiǎo shù shùyè dōu huì diào xiàlái",
       "traceKey": "shuye"
      },
      {
       "scene": "🌱🧭🌿",
       "full": "不论在南方还是北方这些植物都很容易种",
       "vi": "Dù ở miền Nam hay miền Bắc, những loại thực vật này đều rất dễ trồng",
       "parts": [
        {
         "t": "不论在南方还是北方这些植物",
         "ico": "🌿",
         "c": "s",
         "py": "bùlùn zài nánfāng háishi běifāng zhèxiē zhíwù",
         "hv": "bất luận tại nam phương hoàn thị _ phương _ ta thực vật"
        },
        {
         "t": "都很",
         "ico": "✅",
         "c": "v",
         "py": "dōu hěn",
         "hv": "đô _"
        },
        {
         "t": "容易种",
         "ico": "🌱",
         "c": "o",
         "py": "róngyì zhǒng",
         "hv": "dung dịch chõng"
        }
       ],
       "traceWord": "植物",
       "py": "Bùlùn zài nánfāng háishi běifāng zhèxiē zhíwù dōu hěn róngyì zhǒng",
       "traceKey": "zhiwu"
      },
      {
       "scene": "🧑‍🌾🌽🏞️",
       "full": "不论在江边还是山上农民都在种植玉米",
       "vi": "Dù ở bên sông hay trên núi, nông dân đều đang trồng ngô",
       "parts": [
        {
         "t": "不论在江边还是山上农民",
         "ico": "🧑‍🌾",
         "c": "s",
         "py": "bùlùn zài jiāng biān háishi shān shàng nóngmín",
         "hv": "bất luận tại giang biên hoàn thị sơn thượng nông dân"
        },
        {
         "t": "都在",
         "ico": "✅",
         "c": "v",
         "py": "dōu zài",
         "hv": "đô tại"
        },
        {
         "t": "种植玉米",
         "ico": "🌽",
         "c": "o",
         "py": "zhòngzhí yùmǐ",
         "hv": "chõng thực ngọc _"
        }
       ],
       "traceWord": "种植",
       "py": "Bùlùn zài jiāng biān háishi shān shàng nóngmín dōu zài zhòngzhí yùmǐ",
       "traceKey": "zhongzhi"
      },
      {
       "scene": "🐛🌙🌳",
       "full": "夏天不论白天晚上树林里的虫子都在叫",
       "vi": "Mùa hè, dù ban ngày hay ban đêm, côn trùng trong rừng cây đều kêu",
       "parts": [
        {
         "t": "夏天不论白天晚上树林里的虫子",
         "ico": "🐛",
         "c": "s",
         "py": "xiàtiān bùlùn báitiān wǎnshang shùlín lǐ de chóngzi",
         "hv": "_ thiên bất luận bạch thiên vãn thượng thụ lâm lịa đích trùng tí"
        },
        {
         "t": "都在",
         "ico": "✅",
         "c": "v",
         "py": "dōu zài",
         "hv": "đô tại"
        },
        {
         "t": "叫",
         "ico": "🔊",
         "c": "o",
         "py": "jiào",
         "hv": "khiếu"
        }
       ],
       "traceWord": "虫子",
       "py": "Xiàtiān bùlùn báitiān wǎnshang shùlín lǐ de chóngzi dōu zài jiào",
       "traceKey": "chongzi"
      },
      {
       "scene": "🌍🌊🐟",
       "full": "不论在陆地上还是海水里动物都需要水",
       "vi": "Dù trên đất liền hay trong nước biển, động vật đều cần nước",
       "parts": [
        {
         "t": "不论在陆地上还是海水里动物",
         "ico": "🐟",
         "c": "s",
         "py": "bùlùn zài lùdì shàng háishi hǎishuǐ lǐ dòngwù",
         "hv": "bất luận tại lục địa thượng hoàn thị hải thuỷ lịa động vật"
        },
        {
         "t": "都需要",
         "ico": "✅",
         "c": "v",
         "py": "dōu xūyào",
         "hv": "đô _ yếu"
        },
        {
         "t": "水",
         "ico": "💧",
         "c": "o",
         "py": "shuǐ",
         "hv": "thuỷ"
        }
       ],
       "traceWord": "海水",
       "py": "Bùlùn zài lùdì shàng háishi hǎishuǐ lǐ dòngwù dōu xūyào shuǐ",
       "traceKey": "haishui"
      }
     ],
     "qaList": [
      {
       "q": "冬天北方的冰雪多不多？",
       "qvi": "Mùa đông băng tuyết ở miền Bắc có nhiều không?",
       "scene": "❄️🧊",
       "ans": "北方的冰雪很多",
       "opts": [
        {
         "txt": "北方的冬天很热",
         "ico": "🔥",
         "py": "Běifāng de dōngtiān hěn rè"
        },
        {
         "txt": "北方的冰雪很多",
         "ico": "❄️",
         "py": "Běifāng de bīngxuě hěn duō"
        },
        {
         "txt": "北方的冰雪是红色的",
         "ico": "🟥",
         "py": "Běifāng de bīngxuě shì hóngsè de"
        }
       ],
       "qpy": "Dōngtiān běifāng de bīngxuě duō bù duō?"
      },
      {
       "q": "这里为什么这么潮湿？",
       "qvi": "Sao ở đây ẩm thế?",
       "scene": "🌧️💧",
       "ans": "因为这里常常下雨",
       "opts": [
        {
         "txt": "因为他是我的老师",
         "ico": "👨‍🏫",
         "py": "Yīnwèi tā shì wǒ de lǎoshī"
        },
        {
         "txt": "因为我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Yīnwèi wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "因为这里常常下雨",
         "ico": "🌧️",
         "py": "Yīnwèi zhèlǐ chángcháng xià yǔ"
        }
       ],
       "qpy": "Zhèlǐ wèi shénme zhème cháoshī?"
      },
      {
       "q": "水冷了会变成什么？",
       "qvi": "Nước lạnh đi sẽ biến thành gì?",
       "scene": "💧🥶",
       "ans": "会变成冰",
       "opts": [
        {
         "txt": "会变成火",
         "ico": "🔥",
         "py": "Huì biànchéng huǒ"
        },
        {
         "txt": "会变成冰",
         "ico": "🧊",
         "py": "Huì biànchéng bīng"
        },
        {
         "txt": "这里的空气很潮",
         "ico": "💧",
         "py": "Zhèlǐ de kōngqì hěn cháo"
        }
       ],
       "qpy": "Shuǐ lěng le huì biànchéng shénme?"
      },
      {
       "q": "这条江的水深不深？",
       "qvi": "Nước của con sông này sâu không?",
       "scene": "🏞️🌊",
       "ans": "这条江的水很深",
       "opts": [
        {
         "txt": "我的书包很重",
         "ico": "🎒",
         "py": "Wǒ de shūbāo hěn zhòng"
        },
        {
         "txt": "这条江里有一只猫",
         "ico": "🐱",
         "py": "Zhè tiáo jiāng lǐ yǒu yī zhǐ māo"
        },
        {
         "txt": "这条江的水很深",
         "ico": "🌊",
         "py": "Zhè tiáo jiāng de shuǐ hěn shēn"
        }
       ],
       "qpy": "Zhè tiáo jiāng de shuǐ shēn bù shēn?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Rủ đồng nghiệp đi chơi cuối tuần",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp rủ đi công viên hoặc vùng núi cuối tuần, nói rõ dù thời tiết thế nào bạn cũng đi: <i>\"不论天气好不好我们都去树林\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu về nơi bạn sống với mẫu \"不论……都……\": mùa nào cây cối cũng đẹp, loại cây nào dễ trồng, côn trùng nào hay kêu.",
       "<b>Bước 3:</b> Gọi điện (hoặc đóng vai) hỏi đối tác ở vùng khác về khí hậu: hỏi vùng đó có ẩm không, có băng tuyết không, rồi nhắc lại ý chính bằng một câu <i>\"不论……还是……都……\"</i>."
      ]
     }
    },
    {
     "id": "4.15B",
     "name": "Bài 4.15B: Thời tiết và bốn mùa",
     "grammar": {
      "formulas": [
       "🌤 天气/事物 + ⚡ 几乎 + 🔁 动作/状态",
       "🌤 天气/事物 + ⚡ 似乎 + 💭 判断",
       "🧑 主语 + ⚡ 差不多 + ✅ 都 + 🔁 状态"
      ],
      "tip": "几乎 (jīhū, âm Hán Việt: ky hồ) nghĩa là \"gần như, suýt\", chỉ mức độ sắp đạt đến; 似乎 (sìhū, tự hồ) nghĩa là \"dường như\" khi đoán chừng. Trong bài này các câu dùng 差不多 và 好像 (có nghĩa gần giống) để diễn đạt cùng ý. Cả hai đứng trước động từ hoặc tính từ, sau chủ ngữ.",
      "vn_tip": "Người Việt hay đặt \"gần như/dường như\" sau động từ hoặc dịch từng chữ. Đúng: 天气好像变冷了 (phó từ đứng trước vị ngữ). Cũng không dùng 不 với 几乎 theo nghĩa \"gần như không\": nói 几乎没有 (không phải 几乎不有)."
     },
     "chunks": [
      {
       "scene": "🌸🌤️🧥",
       "full": "春季天气好像一天比一天暖和",
       "vi": "Mùa xuân thời tiết dường như ngày càng ấm hơn",
       "parts": [
        {
         "t": "春季天气",
         "ico": "🌸",
         "c": "s",
         "py": "chūnjì tiānqì",
         "hv": "_ quí thiên khí"
        },
        {
         "t": "好像",
         "ico": "💭",
         "c": "v",
         "py": "hǎoxiàng",
         "hv": "háo tượng"
        },
        {
         "t": "一天比一天暖和",
         "ico": "🌤️",
         "c": "o",
         "py": "yī tiān bǐ yī tiān nuǎnhuo",
         "hv": "nhất thiên tỉ nhất thiên _ hoà"
        }
       ],
       "traceWord": "春季",
       "py": "Chūnjì tiānqì hǎoxiàng yī tiān bǐ yī tiān nuǎnhuo",
       "traceKey": "chunji"
      },
      {
       "scene": "☀️🌧️👕",
       "full": "夏季这里的衣服差不多都是湿的",
       "vi": "Mùa hè quần áo ở đây gần như đều ẩm ướt",
       "parts": [
        {
         "t": "夏季这里的衣服",
         "ico": "👕",
         "c": "s",
         "py": "xiàjì zhèlǐ de yīfu",
         "hv": "_ quí _ lịa đích y phục"
        },
        {
         "t": "差不多都是",
         "ico": "💭",
         "c": "v",
         "py": "chàbuduō dōu shì",
         "hv": "sai bất đa đô thị"
        },
        {
         "t": "湿的",
         "ico": "💧",
         "c": "o",
         "py": "shī de",
         "hv": "thấp đích"
        }
       ],
       "traceWord": "湿",
       "py": "Xiàjì zhèlǐ de yīfu chàbuduō dōu shì shī de",
       "traceKey": "shi"
      },
      {
       "scene": "❄️🏙️🥶",
       "full": "冬季的北京好像总是很寒冷",
       "vi": "Mùa đông Bắc Kinh dường như lúc nào cũng rất lạnh giá",
       "parts": [
        {
         "t": "冬季的北京",
         "ico": "🏙️",
         "c": "s",
         "py": "dōngjì de Běijīng",
         "hv": "đông quí đích _ kinh"
        },
        {
         "t": "好像总是",
         "ico": "💭",
         "c": "v",
         "py": "hǎoxiàng zǒngshì",
         "hv": "háo tượng tổng thị"
        },
        {
         "t": "很寒冷",
         "ico": "🥶",
         "c": "o",
         "py": "hěn hánlěng",
         "hv": "_ hàn lạnh"
        }
       ],
       "traceWord": "寒冷",
       "py": "Dōngjì de Běijīng hǎoxiàng zǒngshì hěn hánlěng",
       "traceKey": "hanleng"
      },
      {
       "scene": "🍂🌆🌑",
       "full": "秋季下午六点天好像就暗下来了",
       "vi": "Mùa thu sáu giờ chiều trời dường như đã tối dần",
       "parts": [
        {
         "t": "秋季下午六点天",
         "ico": "🍂",
         "c": "s",
         "py": "qiūjì xiàwǔ liù diǎn tiān",
         "hv": "thu quí hạ ngọ lục điểm thiên"
        },
        {
         "t": "好像就",
         "ico": "💭",
         "c": "v",
         "py": "hǎoxiàng jiù",
         "hv": "háo tượng _"
        },
        {
         "t": "暗下来了",
         "ico": "🌑",
         "c": "o",
         "py": "àn xiàlái le",
         "hv": "ám hạ lai liễu"
        }
       ],
       "traceWord": "暗",
       "py": "Qiūjì xiàwǔ liù diǎn tiān hǎoxiàng jiù àn xiàlái le",
       "traceKey": "an"
      },
      {
       "scene": "💡🏠🌑",
       "full": "关上灯屋子里好像变得很黑暗",
       "vi": "Tắt đèn đi, trong phòng dường như trở nên rất tối đen",
       "parts": [
        {
         "t": "关上灯屋子里",
         "ico": "💡",
         "c": "s",
         "py": "guānshang dēng wūzi lǐ",
         "hv": "quan thượng đăng ốc tí lịa"
        },
        {
         "t": "好像变得",
         "ico": "💭",
         "c": "v",
         "py": "hǎoxiàng biàn dé",
         "hv": "háo tượng biến đắc"
        },
        {
         "t": "很黑暗",
         "ico": "🌑",
         "c": "o",
         "py": "hěn hēi'àn",
         "hv": "_ hắc ám"
        }
       ],
       "traceWord": "黑暗",
       "py": "Guānshang dēng wūzi lǐ hǎoxiàng biàn dé hěn hēi'àn",
       "traceKey": "heian"
      },
      {
       "scene": "👕☀️✅",
       "full": "衣服在太阳下晒了一天差不多都干了",
       "vi": "Quần áo phơi dưới nắng một ngày gần như đã khô hết",
       "parts": [
        {
         "t": "衣服在太阳下",
         "ico": "👕",
         "c": "s",
         "py": "yīfu zài tàiyáng xià",
         "hv": "y phục tại thái dương hạ"
        },
        {
         "t": "晒了一天",
         "ico": "☀️",
         "c": "v",
         "py": "shài le yī tiān",
         "hv": "_ liễu nhất thiên"
        },
        {
         "t": "差不多都干了",
         "ico": "✅",
         "c": "o",
         "py": "chàbuduō dōu gān le",
         "hv": "sai bất đa đô can liễu"
        }
       ],
       "traceWord": "晒",
       "py": "Yīfu zài tàiyáng xià shài le yī tiān chàbuduō dōu gān le",
       "traceKey": "shai"
      },
      {
       "scene": "⚡☁️🔊",
       "full": "天空先闪电然后差不多马上就打雷了",
       "vi": "Bầu trời chớp trước, sau đó gần như ngay lập tức là sấm nổ",
       "parts": [
        {
         "t": "天空",
         "ico": "☁️",
         "c": "s",
         "py": "tiānkōng",
         "hv": "thiên không"
        },
        {
         "t": "先闪电",
         "ico": "⚡",
         "c": "v",
         "py": "xiān shǎndiàn",
         "hv": "tiên _ _"
        },
        {
         "t": "然后差不多马上就打雷了",
         "ico": "🔊",
         "c": "o",
         "py": "ránhòu chàbuduō mǎshàng jiù dǎléi le",
         "hv": "nhiên hậu sai bất đa mã thượng _ đả lôi liễu"
        }
       ],
       "traceWord": "闪电",
       "py": "Tiānkōng xiān shǎndiàn ránhòu chàbuduō mǎshàng jiù dǎléi le",
       "traceKey": "shandian"
      },
      {
       "scene": "📉🍂🌳",
       "full": "昨天降温了树叶好像落了一半",
       "vi": "Hôm qua nhiệt độ giảm, lá cây dường như đã rụng một nửa",
       "parts": [
        {
         "t": "昨天降温了树叶",
         "ico": "📉",
         "c": "s",
         "py": "zuótiān jiàngwēn le shùyè",
         "hv": "_ thiên giáng ồn liễu thụ diệp"
        },
        {
         "t": "好像落了",
         "ico": "🍂",
         "c": "v",
         "py": "hǎoxiàng luò le",
         "hv": "háo tượng lạc liễu"
        },
        {
         "t": "一半",
         "ico": "➗",
         "c": "o",
         "py": "yībàn",
         "hv": "nhất bán"
        }
       ],
       "traceWord": "降温",
       "py": "Zuótiān jiàngwēn le shùyè hǎoxiàng luò le yībàn",
       "traceKey": "jiangwen"
      }
     ],
     "qaList": [
      {
       "q": "房子着火了怎么办？",
       "qvi": "Nhà bị cháy thì làm sao?",
       "scene": "🏠🔥",
       "ans": "快跑出去，然后打电话",
       "opts": [
        {
         "txt": "继续在屋子里睡觉",
         "ico": "😴",
         "py": "Jìxù zài wūzi lǐ shuìjiào"
        },
        {
         "txt": "快跑出去，然后打电话",
         "ico": "🏃",
         "py": "Kuài pǎo chūqù ránhòu dǎ diànhuà"
        },
        {
         "txt": "先去超市买东西",
         "ico": "🛒",
         "py": "Xiān qù chāoshì mǎi dōngxi"
        }
       ],
       "qpy": "Fángzi zháohuǒ le zěnme bàn?"
      },
      {
       "q": "那家饭馆为什么这么火？",
       "qvi": "Sao quán ăn kia đông khách thế?",
       "scene": "🍽️🔥",
       "ans": "因为菜又好吃又便宜",
       "opts": [
        {
         "txt": "因为天气很冷",
         "ico": "🥶",
         "py": "Yīnwèi tiānqì hěn lěng"
        },
        {
         "txt": "因为他的猫在睡觉",
         "ico": "🐱",
         "py": "Yīnwèi tā de māo zài shuìjiào"
        },
        {
         "txt": "因为菜又好吃又便宜",
         "ico": "🍜",
         "py": "Yīnwèi cài yòu hǎochī yòu piányi"
        }
       ],
       "qpy": "Nà jiā fànguǎn wèi shénme zhème huǒ?"
      },
      {
       "q": "房间的灯为什么闪了几下？",
       "qvi": "Sao đèn trong phòng nhấp nháy mấy lần?",
       "scene": "💡⚡",
       "ans": "因为灯坏了",
       "opts": [
        {
         "txt": "因为灯坏了",
         "ico": "💡",
         "py": "Yīnwèi dēng huài le"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为我喜欢喝茶",
         "ico": "🍵",
         "py": "Yīnwèi wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Fángjiān de dēng wèi shénme shǎn le jǐ xià?"
      },
      {
       "q": "寒冷的时候应该穿什么？",
       "qvi": "Khi trời lạnh giá nên mặc gì?",
       "scene": "🥶🧥",
       "ans": "应该穿厚外套",
       "opts": [
        {
         "txt": "应该穿短裤",
         "ico": "🩳",
         "py": "Yīnggāi chuān duǎnkù"
        },
        {
         "txt": "应该穿薄衬衫",
         "ico": "👔",
         "py": "Yīnggāi chuān báo chènshān"
        },
        {
         "txt": "应该穿厚外套",
         "ico": "🧥",
         "py": "Yīnggāi chuān hòu wàitào"
        }
       ],
       "qpy": "Hánlěng de shíhou yīnggāi chuān shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Hỏi thời tiết trước chuyến công tác",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp ở thành phố sắp đến công tác, hỏi thời tiết dạo này và mô tả cảm nhận bằng \"好像\": <i>\"冬季的北京好像总是很寒冷\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 4 câu về bốn mùa ở nơi bạn sống, dùng 好像 hoặc 差不多 trong mỗi câu (ví dụ quần áo mùa hè gần như luôn ẩm, trời mùa thu tối sớm).",
       "<b>Bước 3:</b> Đóng vai gọi điện báo với đối tác rằng hôm nay có sấm chớp và nhiệt độ giảm nên cuộc hẹn có thể đổi giờ; dùng <i>\"然后差不多马上就打雷了\"</i> để kể diễn biến."
      ]
     }
    },
    {
     "id": "4.15C",
     "name": "Bài 4.15C: Ổn định, yên tĩnh và bảo vệ môi trường",
     "grammar": {
      "formulas": [
       "🧑 主语 + 🚫 不 + ⚡ 动词 + 🧑 主语 + ✅ 也 + 💡 知道/会",
       "🏠 事物 + 🚫 不 + ⚡ 动词/形容词 + ✅ 也 + 👍 很……"
      ],
      "tip": "Mẫu \"不……也……\" là câu rút gọn mang nghĩa nhượng bộ: dù không làm A thì vẫn B, \"không… cũng…\". Ví dụ 你不说我也知道 (bạn không nói tôi cũng biết). Hai vế thường có thể khác chủ ngữ, và 也 (yě, âm Hán Việt: dã) đứng ngay trước vị ngữ của vế sau.",
      "vn_tip": "Người Việt hay dịch \"không… cũng…\" thành 不……就…… hoặc bỏ 也. Đúng: 他不说我也能看出他很爱国. Chú ý 也 phải đứng sau chủ ngữ của vế sau, trước động từ, không đặt cuối câu."
     },
     "chunks": [
      {
       "scene": "🗣️👀🇻🇳",
       "full": "他不说我也能看出他很爱国",
       "vi": "Anh ấy không nói tôi cũng nhìn ra anh ấy rất yêu nước",
       "parts": [
        {
         "t": "他不说我也",
         "ico": "🤐",
         "c": "s",
         "py": "tā bù shuō wǒ yě",
         "hv": "tha bất _ ngã dã"
        },
        {
         "t": "能看出",
         "ico": "👀",
         "c": "v",
         "py": "néng kàn chū",
         "hv": "năng khán xuất"
        },
        {
         "t": "他很爱国",
         "ico": "🇻🇳",
         "c": "o",
         "py": "tā hěn àiguó",
         "hv": "tha _ _ quốc"
        }
       ],
       "traceWord": "爱国",
       "py": "Tā bù shuō wǒ yě néng kàn chū tā hěn àiguó",
       "traceKey": "aiguo"
      },
      {
       "scene": "🌳🧑‍🤝‍🧑💚",
       "full": "不用别人提醒我们也会爱护环境",
       "vi": "Không cần người khác nhắc, chúng ta cũng sẽ bảo vệ môi trường",
       "parts": [
        {
         "t": "不用别人提醒我们也",
         "ico": "🧑‍🤝‍🧑",
         "c": "s",
         "py": "bùyòng biérén tíxǐng wǒmen yě",
         "hv": "bất dụng _ nhân đề tỉnh ngã món dã"
        },
        {
         "t": "会爱护",
         "ico": "💚",
         "c": "v",
         "py": "huì àihù",
         "hv": "hội _ hộ"
        },
        {
         "t": "环境",
         "ico": "🌳",
         "c": "o",
         "py": "huánjìng",
         "hv": "_ cảnh"
        }
       ],
       "traceWord": "爱护",
       "py": "Bùyòng biérén tíxǐng wǒmen yě huì àihù huánjìng",
       "traceKey": "aihu"
      },
      {
       "scene": "💼😌🕔",
       "full": "最近工作减少了不用加班也很轻松",
       "vi": "Dạo này công việc giảm bớt, không cần tăng ca cũng rất thoải mái",
       "parts": [
        {
         "t": "最近工作",
         "ico": "💼",
         "c": "s",
         "py": "zuìjìn gōngzuò",
         "hv": "tối cận công tác"
        },
        {
         "t": "减少了",
         "ico": "📉",
         "c": "v",
         "py": "jiǎnshǎo le",
         "hv": "giảm thiểu liễu"
        },
        {
         "t": "不用加班也很轻松",
         "ico": "😌",
         "c": "o",
         "py": "bùyòng jiābān yě hěn qīngsōng",
         "hv": "bất dụng gia ban dã _ khinh tùng"
        }
       ],
       "traceWord": "轻松",
       "py": "Zuìjìn gōngzuò jiǎnshǎo le bùyòng jiābān yě hěn qīngsōng",
       "traceKey": "qingsong"
      },
      {
       "scene": "📺🌡️📉",
       "full": "不看天气预报也知道气温在下降",
       "vi": "Không xem dự báo thời tiết cũng biết nhiệt độ đang giảm",
       "parts": [
        {
         "t": "不看天气预报也",
         "ico": "📺",
         "c": "s",
         "py": "bú kàn tiānqì yùbào yě",
         "hv": "bất khán thiên khí dự báo dã"
        },
        {
         "t": "知道",
         "ico": "💡",
         "c": "v",
         "py": "zhīdào",
         "hv": "tri đạo"
        },
        {
         "t": "气温在下降",
         "ico": "📉",
         "c": "o",
         "py": "qìwēn zài xiàjiàng",
         "hv": "khí ồn tại hạ giáng"
        }
       ],
       "traceWord": "下降",
       "py": "Bú kàn tiānqì yùbào yě zhīdào qìwēn zài xiàjiàng",
       "traceKey": "xiajiang"
      },
      {
       "scene": "🌉🔧💪",
       "full": "这座桥不用修也很坚固",
       "vi": "Cây cầu này không cần sửa cũng rất vững chắc",
       "parts": [
        {
         "t": "这座桥",
         "ico": "🌉",
         "c": "s",
         "py": "zhè zuò qiáo",
         "hv": "_ toà kiều"
        },
        {
         "t": "不用修也",
         "ico": "🔧",
         "c": "v",
         "py": "bùyòng xiū yě",
         "hv": "bất dụng tu dã"
        },
        {
         "t": "很坚固",
         "ico": "💪",
         "c": "o",
         "py": "hěn jiāngù",
         "hv": "_ kiên cố"
        }
       ],
       "traceWord": "坚固",
       "py": "Zhè zuò qiáo bùyòng xiū yě hěn jiāngù",
       "traceKey": "jiangu"
      },
      {
       "scene": "🛣️🚧🗺️",
       "full": "道路封闭了不用问我们也知道要换路线",
       "vi": "Đường bị phong tỏa, không cần hỏi chúng tôi cũng biết phải đổi lộ trình",
       "parts": [
        {
         "t": "道路封闭了",
         "ico": "🚧",
         "c": "s",
         "py": "dàolù fēngbì le",
         "hv": "đạo lộ phong bế liễu"
        },
        {
         "t": "不用问我们也知道",
         "ico": "💡",
         "c": "v",
         "py": "bùyòng wèn wǒmen yě zhīdào",
         "hv": "bất dụng _ ngã món dã tri đạo"
        },
        {
         "t": "要换路线",
         "ico": "🗺️",
         "c": "o",
         "py": "yào huàn lùxiàn",
         "hv": "yếu _ lộ _"
        }
       ],
       "traceWord": "封闭",
       "py": "Dàolù fēngbì le bùyòng wèn wǒmen yě zhīdào yào huàn lùxiàn",
       "traceKey": "fengbi"
      },
      {
       "scene": "👥📱🤝",
       "full": "他们不见面也保持着密切联系",
       "vi": "Họ không gặp mặt cũng giữ liên lạc mật thiết",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha món"
        },
        {
         "t": "不见面也保持着",
         "ico": "📱",
         "c": "v",
         "py": "bú jiànmiàn yě bǎochí zhe",
         "hv": "bất kiến _ dã bảo trì trứ"
        },
        {
         "t": "密切联系",
         "ico": "🤝",
         "c": "o",
         "py": "mìqiè liánxì",
         "hv": "mật thiết liên hệ"
        }
       ],
       "traceWord": "密切",
       "py": "Tāmen bú jiànmiàn yě bǎochí zhe mìqiè liánxì",
       "traceKey": "miqie"
      },
      {
       "scene": "🏢🌆🤝",
       "full": "这两个公司不在一个城市合作也很紧密",
       "vi": "Hai công ty này không ở cùng một thành phố nhưng hợp tác cũng rất chặt chẽ",
       "parts": [
        {
         "t": "这两个公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè liǎng gè gōngsī",
         "hv": "_ lưỡng cá công ti"
        },
        {
         "t": "不在一个城市",
         "ico": "🌆",
         "c": "v",
         "py": "bú zài yī gè chéngshì",
         "hv": "bất tại nhất cá thành thị"
        },
        {
         "t": "合作也很紧密",
         "ico": "🤝",
         "c": "o",
         "py": "hézuò yě hěn jǐnmì",
         "hv": "hợp tác dã _ khẩn mật"
        }
       ],
       "traceWord": "紧密",
       "py": "Zhè liǎng gè gōngsī bú zài yī gè chéngshì hézuò yě hěn jǐnmì",
       "traceKey": "jinmi"
      }
     ],
     "qaList": [
      {
       "q": "工作很忙的时候你为什么要冷静？",
       "qvi": "Khi công việc bận rộn tại sao bạn phải bình tĩnh?",
       "scene": "🧘❓",
       "ans": "因为冷静才能想出好办法",
       "opts": [
        {
         "txt": "因为我想早点回家",
         "ico": "🏠",
         "py": "Yīnwèi wǒ xiǎng zǎo diǎn huí jiā"
        },
        {
         "txt": "因为冷静才能想出好办法",
         "ico": "💡",
         "py": "Yīnwèi lěngjìng cáinéng xiǎng chū hǎo bànfǎ"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Gōngzuò hěn máng de shíhou nǐ wèi shénme yào lěngjìng?"
      },
      {
       "q": "在宁静的夜里能听到什么声音？",
       "qvi": "Trong đêm yên tĩnh có thể nghe thấy âm thanh gì?",
       "scene": "🌙🤫",
       "ans": "能听到虫子的声音",
       "opts": [
        {
         "txt": "能看到太阳和蓝天",
         "ico": "☀️",
         "py": "Néng kàndào tàiyáng hé lán tiān"
        },
        {
         "txt": "能听到虫子的声音",
         "ico": "🐛",
         "py": "Néng tīngdào chóngzi de shēngyīn"
        },
        {
         "txt": "能吃到热的面包",
         "ico": "🍞",
         "py": "Néng chī dào rè de miànbāo"
        }
       ],
       "qpy": "Zài níngjìng de yèlǐ néng tīngdào shénme shēngyīn?"
      },
      {
       "q": "最近的价格稳定吗？",
       "qvi": "Giá cả dạo này có ổn định không?",
       "scene": "💰📊",
       "ans": "很平稳，一直没有变化",
       "opts": [
        {
         "txt": "很平稳，一直没有变化",
         "ico": "📊",
         "py": "Hěn píngwěn yīzhí méiyǒu biànhuà"
        },
        {
         "txt": "这辆车开得很稳",
         "ico": "🚗",
         "py": "Zhè liàng chē kāi dé hěn wěn"
        },
        {
         "txt": "今天我坐地铁去公司",
         "ico": "🚇",
         "py": "Jīntiān wǒ zuò dìtiě qù gōngsī"
        }
       ],
       "qpy": "Zuìjìn de jiàgé wěndìng ma?"
      },
      {
       "q": "大风过去以后湖面怎么样？",
       "qvi": "Sau khi gió lớn qua đi, mặt hồ thế nào?",
       "scene": "🌬️🏞️",
       "ans": "湖面又平静了",
       "opts": [
        {
         "txt": "湖边的树长得很密",
         "ico": "🌳",
         "py": "Hú biān de shù cháng dé hěn mì"
        },
        {
         "txt": "湖面又平静了",
         "ico": "🏞️",
         "py": "Hú miàn yòu píngjìng le"
        },
        {
         "txt": "湖边的灯是红色的",
         "ico": "🟥",
         "py": "Hú biān de dēng shì hóngsè de"
        }
       ],
       "qpy": "Dà fēng guòqù yǐhòu hú miàn zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Cùng đồng nghiệp bảo vệ môi trường ở văn phòng",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin trong nhóm công ty đề xuất giảm rác thải và dùng ít đồ nhựa; nhấn mạnh mọi người tự giác: <i>\"不用别人提醒我们也会爱护环境\"</i>.",
       "<b>Bước 2:</b> Tự nói thành tiếng 3 câu \"不……也……\" về công việc của bạn (ví dụ không cần tăng ca cũng hoàn thành, không gặp mặt vẫn giữ liên lạc với đối tác).",
       "<b>Bước 3:</b> Đóng vai trấn an một đồng nghiệp đang căng thẳng: khuyên họ giữ bình tĩnh, nói công việc đã ổn định và có thể thoải mái hơn, rồi tóm tắt bằng một câu <i>\"……不……也……\"</i>."
      ]
     }
    }
   ]
  },
  "4.16": {
   "lessons": [
    {
     "id": "4.16A",
     "name": "Bài 4.16A: Phó từ chỉ thời gian trong công việc",
     "grammar": {
      "formulas": [
       "👥 你们 + ⏰ 必须按时 + 📋 完成项目",
       "🏃 他 + ⚡ 急忙 + 🚪 跑出办公室",
       "📨 你 + ⚡ 尽快 + 📄 把报告发给他"
      ],
      "tip": "Phó từ thời gian đặt TRƯỚC động từ, sau chủ ngữ: 按时 (ànshí, án thời) đúng giờ quy định; 即将 (jíjiāng, tức tương) sắp sửa; 急忙 (jímáng, cấp mang) vội vàng; 尽快 (jǐnkuài, tận khoái) càng nhanh càng tốt; 渐渐 (jiànjiàn, tiệm tiệm) dần dần. Cấu trúc: Chủ ngữ + phó từ + động từ + tân ngữ.",
      "vn_tip": "Người Việt hay đặt phó từ sau động từ như tiếng Việt (\"làm xong nhanh\") và nói 完成按时. Đúng là 按时完成, 尽快发给他: phó từ luôn đứng trước động từ."
     },
     "chunks": [
      {
       "scene": "👥📋⏰",
       "full": "你们必须按时完成这个项目",
       "vi": "Các bạn phải hoàn thành dự án này đúng thời hạn",
       "parts": [
        {
         "t": "你们",
         "ico": "👥",
         "c": "s",
         "py": "nǐmen",
         "hv": "nể món"
        },
        {
         "t": "必须按时完成",
         "ico": "⏰",
         "c": "v",
         "py": "bìxū ànshí wánchéng",
         "hv": "tất tua án thì hoàn thành"
        },
        {
         "t": "这个项目",
         "ico": "📋",
         "c": "o",
         "py": "zhè gè xiàngmù",
         "hv": "_ cá hạng mục"
        }
       ],
       "traceWord": "按时",
       "py": "Nǐmen bìxū ànshí wánchéng zhè gè xiàngmù",
       "traceKey": "anshi"
      },
      {
       "scene": "👨‍💼🗓️📣",
       "full": "大家事先都知道会议即将开始",
       "vi": "Mọi người đều biết trước là cuộc họp sắp bắt đầu",
       "parts": [
        {
         "t": "大家",
         "ico": "👨‍💼",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "事先都知道",
         "ico": "💡",
         "c": "v",
         "py": "shìxiān dōu zhīdào",
         "hv": "sự tiên đô tri đạo"
        },
        {
         "t": "会议即将开始",
         "ico": "🗓️",
         "c": "o",
         "py": "huìyì jíjiāng kāishǐ",
         "hv": "hội nghị tức tướng khai thuỷ"
        }
       ],
       "traceWord": "即将",
       "py": "Dàjiā shìxiān dōu zhīdào huìyì jíjiāng kāishǐ",
       "traceKey": "jijiang"
      },
      {
       "scene": "📞🏃🏢",
       "full": "他听到电话响就急忙跑出办公室",
       "vi": "Nghe điện thoại reo, anh ấy vội vàng chạy ra khỏi văn phòng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "听到电话响就急忙跑出",
         "ico": "🏃",
         "c": "v",
         "py": "tīngdào diànhuà xiǎng jiù jímáng pǎo chū",
         "hv": "thính đáo _ thoại hướng _ cấp mang _ xuất"
        },
        {
         "t": "办公室",
         "ico": "🏢",
         "c": "o",
         "py": "bàngōngshì",
         "hv": "_ công thất"
        }
       ],
       "traceWord": "急忙",
       "py": "Tā tīngdào diànhuà xiǎng jiù jímáng pǎo chū bàngōngshì",
       "traceKey": "jimang"
      },
      {
       "scene": "👔⏱️📄",
       "full": "经理希望你抓紧时间尽快把报告发给他",
       "vi": "Giám đốc hy vọng bạn tranh thủ thời gian gửi báo cáo cho ông ấy càng sớm càng tốt",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "希望",
         "ico": "🙏",
         "c": "v",
         "py": "xīwàng",
         "hv": "hơi vọng"
        },
        {
         "t": "你抓紧时间尽快把报告发给他",
         "ico": "📄",
         "c": "o",
         "py": "nǐ zhuājǐn shíjiān jǐnkuài bǎ bàogào fā gěi tā",
         "hv": "nể co khẩn thì gian tận khoái bã báo _ _ cấp tha"
        }
       ],
       "traceWord": "尽快",
       "py": "Jīnglǐ xīwàng nǐ zhuājǐn shíjiān jǐnkuài bǎ bàogào fā gěi tā",
       "traceKey": "jinkuai"
      },
      {
       "scene": "👥🚶🏢",
       "full": "参加会议的同事陆续来到公司",
       "vi": "Các đồng nghiệp tham dự cuộc họp lần lượt đến công ty",
       "parts": [
        {
         "t": "参加会议的同事",
         "ico": "👥",
         "c": "s",
         "py": "cānjiā huìyì de tóngshì",
         "hv": "tham gia hội nghị đích đồng sự"
        },
        {
         "t": "陆续来到",
         "ico": "🚶",
         "c": "v",
         "py": "lùxù láidào",
         "hv": "lục tục lai đáo"
        },
        {
         "t": "公司",
         "ico": "🏢",
         "c": "o",
         "py": "gōngsī",
         "hv": "công ti"
        }
       ],
       "traceWord": "陆续",
       "py": "Cānjiā huìyì de tóngshì lùxù láidào gōngsī",
       "traceKey": "luxu"
      },
      {
       "scene": "🧑🏙️📚",
       "full": "他曾在北京学过中文从此对中国很感兴趣",
       "vi": "Anh ấy từng học tiếng Trung ở Bắc Kinh, từ đó rất hứng thú với Trung Quốc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "曾在北京学过中文",
         "ico": "📚",
         "c": "v",
         "py": "céng zài Běijīng xué guò Zhōngwén",
         "hv": "tằng tại _ kinh học quá trung văn"
        },
        {
         "t": "从此对中国很感兴趣",
         "ico": "🇨🇳",
         "c": "o",
         "py": "cóngcǐ duì Zhōngguó hěn gǎn xìngqù",
         "hv": "tòng thử đỗi trung quốc _ cảm hưng thú"
        }
       ],
       "traceWord": "从此",
       "py": "Tā céng zài Běijīng xué guò Zhōngwén cóngcǐ duì Zhōngguó hěn gǎn xìngqù",
       "traceKey": "congci"
      },
      {
       "scene": "🏢🛠️📈",
       "full": "公司逐步改进了工作方法",
       "vi": "Công ty từng bước cải tiến phương pháp làm việc",
       "parts": [
        {
         "t": "公司",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī",
         "hv": "công ti"
        },
        {
         "t": "逐步改进了",
         "ico": "📈",
         "c": "v",
         "py": "zhúbù gǎijìn le",
         "hv": "trục bộ _ tiến liễu"
        },
        {
         "t": "工作方法",
         "ico": "🛠️",
         "c": "o",
         "py": "gōngzuò fāngfǎ",
         "hv": "công tác phương pháp"
        }
       ],
       "traceWord": "逐步",
       "py": "Gōngsī zhúbù gǎijìn le gōngzuò fāngfǎ",
       "traceKey": "zhubu"
      },
      {
       "scene": "👨‍💼💻🌱",
       "full": "大家渐渐习惯了新的工作方式",
       "vi": "Mọi người dần dần quen với cách làm việc mới",
       "parts": [
        {
         "t": "大家",
         "ico": "👨‍💼",
         "c": "s",
         "py": "dàjiā",
         "hv": "đại gia"
        },
        {
         "t": "渐渐习惯了",
         "ico": "🌱",
         "c": "v",
         "py": "jiànjiàn xíguàn le",
         "hv": "tiệm tiệm tập quen liễu"
        },
        {
         "t": "新的工作方式",
         "ico": "💻",
         "c": "o",
         "py": "xīn de gōngzuò fāngshì",
         "hv": "tân đích công tác phương thức"
        }
       ],
       "traceWord": "渐渐",
       "py": "Dàjiā jiànjiàn xíguàn le xīn de gōngzuò fāngshì",
       "traceKey": "jianjian"
      }
     ],
     "qaList": [
      {
       "q": "明天的会议你能准时参加吗？",
       "qvi": "Cuộc họp ngày mai bạn có thể tham gia đúng giờ không?",
       "scene": "🗓️⏰🧑",
       "ans": "能，我会准时到",
       "opts": [
        {
         "txt": "能，我会准时到",
         "ico": "⏰",
         "py": "Néng wǒ huì zhǔnshí dào"
        },
        {
         "txt": "我昨天去过北京",
         "ico": "🏙️",
         "py": "Wǒ zuótiān qù guò Běijīng"
        },
        {
         "txt": "这本书很便宜",
         "ico": "📖",
         "py": "Zhè běn shū hěn piányi"
        }
       ],
       "qpy": "Míngtiān de huìyì nǐ néng zhǔnshí cānjiā ma?"
      },
      {
       "q": "经理临时有事，会议怎么办？",
       "qvi": "Giám đốc đột xuất có việc, cuộc họp làm sao đây?",
       "scene": "👔🗓️❓",
       "ans": "我立即给大家打电话",
       "opts": [
        {
         "txt": "我今天吃了米饭",
         "ico": "🍚",
         "py": "Wǒ jīntiān chī le mǐfàn"
        },
        {
         "txt": "我立即给大家打电话",
         "ico": "📞",
         "py": "Wǒ lìjí gěi dàjiā dǎ diànhuà"
        },
        {
         "txt": "这个杯子是红色的",
         "ico": "☕",
         "py": "Zhè gè bēizi shì hóngsè de"
        }
       ],
       "qpy": "Jīnglǐ línshí yǒu shì huìyì zěnme bàn?"
      },
      {
       "q": "你的中文水平怎么样？",
       "qvi": "Trình độ tiếng Trung của bạn thế nào?",
       "scene": "🧑📚📈",
       "ans": "我的中文水平逐渐提高了",
       "opts": [
        {
         "txt": "我今天下午去开会",
         "ico": "🗓️",
         "py": "Wǒ jīntiān xiàwǔ qù kāihuì"
        },
        {
         "txt": "我的中文老师是王老师",
         "ico": "👩‍🏫",
         "py": "Wǒ de Zhōngwén lǎoshī shì wáng lǎoshī"
        },
        {
         "txt": "我的中文水平逐渐提高了",
         "ico": "📈",
         "py": "Wǒ de Zhōngwén shuǐpíng zhújiàn tígāo le"
        }
       ],
       "qpy": "Nǐ de Zhōngwén shuǐpíng zěnmeyàng?"
      },
      {
       "q": "这个项目自什么时候开始？",
       "qvi": "Dự án này bắt đầu từ khi nào?",
       "scene": "📋🗓️❓",
       "ans": "自下周开始",
       "opts": [
        {
         "txt": "我很喜欢这个项目",
         "ico": "❤️",
         "py": "Wǒ hěn xǐhuan zhè gè xiàngmù"
        },
        {
         "txt": "公司在北京",
         "ico": "🏢",
         "py": "Gōngsī zài Běijīng"
        },
        {
         "txt": "自下周开始",
         "ico": "🗓️",
         "py": "Zì xià zhōu kāishǐ"
        }
       ],
       "qpy": "Zhè gè xiàngmù zì shénme shíhou kāishǐ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắn tin nhắc đồng nghiệp về hạn nộp báo cáo",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn là trưởng nhóm. Viết (hoặc nói to) một tin nhắn cho đồng nghiệp, nhắc hạn nộp báo cáo: <i>\"你们必须按时完成这个项目\"</i>.",
       "<b>Bước 2:</b> Thêm một câu thúc giục: <i>\"请你抓紧时间尽快把报告发给我\"</i>. Sau đó tự nói thêm một câu báo trước giờ họp với <i>\"会议即将开始\"</i>.",
       "<b>Bước 3:</b> Kể lại cho bạn bè hoặc tự nói trước gương 3 câu về thay đổi gần đây ở chỗ làm, dùng ít nhất hai phó từ: <i>\"大家渐渐习惯了新的工作方式\"</i>, <i>\"公司逐步改进了工作方法\"</i>."
      ]
     }
    },
    {
     "id": "4.16B",
     "name": "Bài 4.16B: Các mốc thời gian và kỳ hạn",
     "grammar": {
      "formulas": [
       "❓ 你 + 说不定 + 🗓️ 下个月有空儿",
       "📅 报告 + ⏳ 月底之前 + ✅ 交给经理",
       "🔮 如今 + 🏢 公司 + 👥 已经有五十个员工"
      ],
      "tip": "说不定 (shuōbudìng, thuyết bất định) nghĩa là \"biết đâu, có thể\", đứng trước động từ hoặc đầu câu để nêu khả năng chưa chắc chắn, gần với 也许. Các mốc thời gian: 之前 (zhīqián, chi tiền) trước khi, 之后 (zhīhòu, chi hậu) sau khi, 期间 (qījiān, kỳ gian) trong thời gian, 以内 (yǐnèi, dĩ nội) trong vòng. Cấu trúc: mốc thời gian + 之前/之后.",
      "vn_tip": "Người Việt hay nói \"trước cuối tháng\" bằng cách đặt 之前 ở đầu (之前月底). Đúng là đặt mốc trước rồi mới thêm 之前: 月底之前. Và 上个月/下个月 phải có 个, đừng nói 上月 khi mới học."
     },
     "chunks": [
      {
       "scene": "📊📅⬆️",
       "full": "这个季度的销售比上个月高",
       "vi": "Doanh số quý này cao hơn tháng trước",
       "parts": [
        {
         "t": "这个季度的销售",
         "ico": "📊",
         "c": "s",
         "py": "zhè gè jìdù de xiāoshòu",
         "hv": "_ cá quí độ đích tiu _"
        },
        {
         "t": "比上个月",
         "ico": "📅",
         "c": "v",
         "py": "bǐ shàng ge yuè",
         "hv": "tỉ thượng cá nguyệt"
        },
        {
         "t": "高",
         "ico": "⬆️",
         "c": "o",
         "py": "gāo",
         "hv": "cao"
        }
       ],
       "traceWord": "季度",
       "py": "Zhè gè jìdù de xiāoshòu bǐ shàng ge yuè gāo",
       "traceKey": "jidu"
      },
      {
       "scene": "👥📅📋",
       "full": "我们下个月月底要完成这个项目",
       "vi": "Cuối tháng sau chúng tôi phải hoàn thành dự án này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "下个月月底要完成",
         "ico": "📅",
         "c": "v",
         "py": "xià ge yuè yuèdǐ yào wánchéng",
         "hv": "hạ cá nguyệt nguyệt để yếu hoàn thành"
        },
        {
         "t": "这个项目",
         "ico": "📋",
         "c": "o",
         "py": "zhè gè xiàngmù",
         "hv": "_ cá hạng mục"
        }
       ],
       "traceWord": "月底",
       "py": "Wǒmen xià ge yuè yuèdǐ yào wánchéng zhè gè xiàngmù",
       "traceKey": "yuedi"
      },
      {
       "scene": "📄⏳👔",
       "full": "报告要在月底之前交给经理",
       "vi": "Báo cáo phải nộp cho giám đốc trước cuối tháng",
       "parts": [
        {
         "t": "报告",
         "ico": "📄",
         "c": "s",
         "py": "bàogào",
         "hv": "báo _"
        },
        {
         "t": "要在月底之前交给",
         "ico": "⏳",
         "c": "v",
         "py": "yào zài yuèdǐ zhīqián jiāo gěi",
         "hv": "yếu tại nguyệt để chi tiền giao cấp"
        },
        {
         "t": "经理",
         "ico": "👔",
         "c": "o",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        }
       ],
       "traceWord": "之前",
       "py": "Bàogào yào zài yuèdǐ zhīqián jiāo gěi jīnglǐ",
       "traceKey": "zhiqian"
      },
      {
       "scene": "🗓️👥🍽️",
       "full": "会议之后大家也许会一起吃饭",
       "vi": "Sau cuộc họp có lẽ mọi người sẽ cùng đi ăn",
       "parts": [
        {
         "t": "会议之后大家",
         "ico": "🗓️",
         "c": "s",
         "py": "huìyì zhīhòu dàjiā",
         "hv": "hội nghị chi hậu đại gia"
        },
        {
         "t": "也许会",
         "ico": "🤔",
         "c": "v",
         "py": "yěxǔ huì",
         "hv": "dã hứa hội"
        },
        {
         "t": "一起吃饭",
         "ico": "🍽️",
         "c": "o",
         "py": "yīqǐ chīfàn",
         "hv": "nhất khởi khật _"
        }
       ],
       "traceWord": "之后",
       "py": "Huìyì zhīhòu dàjiā yěxǔ huì yīqǐ chīfàn",
       "traceKey": "zhihou"
      },
      {
       "scene": "🧧🏢🏖️",
       "full": "很多公司在春节期间放假一个星期",
       "vi": "Nhiều công ty nghỉ một tuần trong dịp Tết",
       "parts": [
        {
         "t": "很多公司",
         "ico": "🏢",
         "c": "s",
         "py": "hěn duō gōngsī",
         "hv": "_ đa công ti"
        },
        {
         "t": "在春节期间放假",
         "ico": "🧧",
         "c": "v",
         "py": "zài Chūnjié qījiān fàngjià",
         "hv": "tại _ tiết kì gian phóng _"
        },
        {
         "t": "一个星期",
         "ico": "🗓️",
         "c": "o",
         "py": "yī gè xīngqī",
         "hv": "nhất cá tinh kì"
        }
       ],
       "traceWord": "期间",
       "py": "Hěn duō gōngsī zài Chūnjié qījiān fàngjià yī gè xīngqī",
       "traceKey": "qijian"
      },
      {
       "scene": "🍂🏙️⭐",
       "full": "秋天是北京最好的季节之一",
       "vi": "Mùa thu là một trong những mùa đẹp nhất của Bắc Kinh",
       "parts": [
        {
         "t": "秋天",
         "ico": "🍂",
         "c": "s",
         "py": "qiūtiān",
         "hv": "thu thiên"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "北京最好的季节之一",
         "ico": "⭐",
         "c": "o",
         "py": "Běijīng zuìhǎo de jìjié zhīyī",
         "hv": "_ kinh tối háo đích quí tiết chi nhất"
        }
       ],
       "traceWord": "季节",
       "py": "Qiūtiān shì Běijīng zuìhǎo de jìjié zhīyī",
       "traceKey": "jijie"
      },
      {
       "scene": "🏢👥📈",
       "full": "如今这个公司已经有五十个员工",
       "vi": "Hiện nay công ty này đã có năm mươi nhân viên",
       "parts": [
        {
         "t": "如今这个公司",
         "ico": "🏢",
         "c": "s",
         "py": "rújīn zhè gè gōngsī",
         "hv": "như kim _ cá công ti"
        },
        {
         "t": "已经有",
         "ico": "✅",
         "c": "v",
         "py": "yǐjīng yǒu",
         "hv": "dĩ kinh hữu"
        },
        {
         "t": "五十个员工",
         "ico": "👥",
         "c": "o",
         "py": "wǔ shí gè yuángōng",
         "hv": "ngũ thập cá viên công"
        }
       ],
       "traceWord": "如今",
       "py": "Rújīn zhè gè gōngsī yǐjīng yǒu wǔ shí gè yuángōng",
       "traceKey": "rujin"
      },
      {
       "scene": "🌱🏢👥",
       "full": "最初我们公司只有三个人",
       "vi": "Ban đầu công ty chúng tôi chỉ có ba người",
       "parts": [
        {
         "t": "最初我们公司",
         "ico": "🌱",
         "c": "s",
         "py": "zuìchū wǒmen gōngsī",
         "hv": "tối sơ ngã món công ti"
        },
        {
         "t": "只有",
         "ico": "☝️",
         "c": "v",
         "py": "zhǐyǒu",
         "hv": "chỉ hữu"
        },
        {
         "t": "三个人",
         "ico": "👥",
         "c": "o",
         "py": "sān gèrén",
         "hv": "tam cá nhân"
        }
       ],
       "traceWord": "最初",
       "py": "Zuìchū wǒmen gōngsī zhǐyǒu sān gèrén",
       "traceKey": "zuichu"
      }
     ],
     "qaList": [
      {
       "q": "项目的期限是多久？",
       "qvi": "Thời hạn của dự án là bao lâu?",
       "scene": "📋⏳❓",
       "ans": "三个月以内",
       "opts": [
        {
         "txt": "在北京的公司",
         "ico": "🏢",
         "py": "Zài Běijīng de gōngsī"
        },
        {
         "txt": "三个月以内",
         "ico": "⏳",
         "py": "Sān gè yuè yǐnèi"
        },
        {
         "txt": "一杯热茶",
         "ico": "🍵",
         "py": "Yī bēi rè chá"
        }
       ],
       "qpy": "Xiàng mùdì qīxiàn shì duōjiǔ?"
      },
      {
       "q": "你对未来有什么计划？",
       "qvi": "Bạn có kế hoạch gì cho tương lai?",
       "scene": "🧑🔮📝",
       "ans": "我想明年去北京工作",
       "opts": [
        {
         "txt": "我昨天买了一本书",
         "ico": "📖",
         "py": "Wǒ zuótiān mǎi le yī běn shū"
        },
        {
         "txt": "今天天气很冷",
         "ico": "🥶",
         "py": "Jīntiān tiānqì hěn lěng"
        },
        {
         "txt": "我想明年去北京工作",
         "ico": "🏙️",
         "py": "Wǒ xiǎng míngnián qù Běijīng gōngzuò"
        }
       ],
       "qpy": "Nǐ duì wèilái yǒu shénme jìhuà?"
      },
      {
       "q": "你什么时候有空儿？",
       "qvi": "Khi nào bạn rảnh?",
       "scene": "🧑⏰❓",
       "ans": "你可以在三点和五点之间来找我",
       "opts": [
        {
         "txt": "你可以在三点和五点之间来找我",
         "ico": "⏰",
         "py": "Nǐ kěyǐ zài sān diǎn hé wǔ diǎn zhījiān lái zhǎo wǒ"
        },
        {
         "txt": "我是公司的经理",
         "ico": "👔",
         "py": "Wǒ shì gōngsī de jīnglǐ"
        },
        {
         "txt": "今天的天气很好",
         "ico": "☀️",
         "py": "Jīntiān de tiānqì hěn hǎo"
        }
       ],
       "qpy": "Nǐ shénme shíhou yǒukòngr?"
      },
      {
       "q": "一年有几个季？",
       "qvi": "Một năm có mấy mùa?",
       "scene": "🍂❄️❓",
       "ans": "一年有四季",
       "opts": [
        {
         "txt": "在三楼",
         "ico": "🏢",
         "py": "Zài sān lóu"
        },
        {
         "txt": "十个人",
         "ico": "👥",
         "py": "Shí gèrén"
        },
        {
         "txt": "一年有四季",
         "ico": "🍂",
         "py": "Yī nián yǒu sì jì"
        }
       ],
       "qpy": "Yī nián yǒu jǐ gè jì?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chốt thời hạn với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Mở lịch làm việc của bạn. Nói to ba mốc thời gian quan trọng, ví dụ: <i>\"我们下个月月底要完成这个项目\"</i>, <i>\"报告要在月底之前交给经理\"</i>.",
       "<b>Bước 2:</b> Nhắn tin hỏi đồng nghiệp về kế hoạch của họ: <i>\"下个月你有空儿吗？\"</i> rồi tự trả lời bằng một khả năng chưa chắc: <i>\"也许有空儿\"</i>. Thử thay bằng 说不定 theo mẹo ở trên.",
       "<b>Bước 3:</b> Giới thiệu công ty với một người bạn mới trong 3 câu, dùng mốc quá khứ và hiện tại: <i>\"最初我们公司只有三个人\"</i>, <i>\"如今这个公司已经有五十个员工\"</i>."
      ]
     }
    },
    {
     "id": "4.16C",
     "name": "Bài 4.16C: Hoãn lại, kéo dài và kịp giờ",
     "grammar": {
      "formulas": [
       "🚗 我们 + ⏰ 现在出发 + ✅ 还来得及",
       "🍳 我们 + ❌ 来不及 + 🍞 吃早饭",
       "🗓️ 公司 + ⚡ 决定 + 🔄 把会议推迟到下周"
      ],
      "tip": "来得及(láidejí, lai đắc cập) = còn kịp; 来不及 (láibují, lai bất cập) = không kịp. Đứng trước động từ: 来得及 + động từ / 来不及 + động từ. Hỏi: 现在出发来得及吗？ Trả lời: 来得及 hoặc 来不及. Các động từ liên quan: 推迟 (tuīchí, thôi trì) hoãn, 延长 (yáncháng, diên trường) kéo dài, 缩短 (suōduǎn, súc đoản) rút ngắn.",
      "vn_tip": "Người Việt hay dịch \"không kịp\" thành 不及时 hoặc 没有赶上 và chen 不 vào sai chỗ. Với kết quả \"kịp hay không\", dùng 来得及 / 来不及 làm một khối, đừng tách ra: 来不及吃饭 (không kịp ăn cơm), không nói 来吃饭不及."
     },
     "chunks": [
      {
       "scene": "🚗✈️⏰",
       "full": "我们现在出发去机场还来得及",
       "vi": "Bây giờ chúng ta xuất phát ra sân bay vẫn còn kịp",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "现在出发去机场",
         "ico": "🚗",
         "c": "v",
         "py": "xiànzài chūfā qù jīchǎng",
         "hv": "hiện tại xuất _ khứ cơ trường"
        },
        {
         "t": "还来得及",
         "ico": "✅",
         "c": "o",
         "py": "hái láidejí",
         "hv": "hoàn lai đắc cập"
        }
       ],
       "traceWord": "来得及",
       "py": "Wǒmen xiànzài chūfā qù jīchǎng hái láidejí",
       "traceKey": "laideji"
      },
      {
       "scene": "👥🍞🚪",
       "full": "我们来不及吃早饭就出门了",
       "vi": "Chúng tôi không kịp ăn sáng đã ra khỏi nhà",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "来不及吃早饭",
         "ico": "🍞",
         "c": "v",
         "py": "láibují chī zǎofàn",
         "hv": "lai bất cập khật tảo _"
        },
        {
         "t": "就出门了",
         "ico": "🚪",
         "c": "o",
         "py": "jiù chūmén le",
         "hv": "_ xuất môn liễu"
        }
       ],
       "traceWord": "来不及",
       "py": "Wǒmen láibují chī zǎofàn jiù chūmén le",
       "traceKey": "laibuji"
      },
      {
       "scene": "🧑🚇⏳",
       "full": "他怕地铁晚点上班会迟到",
       "vi": "Anh ấy sợ tàu điện ngầm trễ giờ nên đi làm sẽ bị muộn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "怕",
         "ico": "😟",
         "c": "v",
         "py": "pà",
         "hv": "_"
        },
        {
         "t": "地铁晚点上班会迟到",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiě wǎndiǎn shàngbān huì chídào",
         "hv": "địa thiết vãn điểm thượng ban hội trì đáo"
        }
       ],
       "traceWord": "晚点",
       "py": "Tā pà dìtiě wǎndiǎn shàngbān huì chídào",
       "traceKey": "wandian"
      },
      {
       "scene": "🏢🌧️🗓️",
       "full": "经理决定推迟明天的会议",
       "vi": "Giám đốc quyết định hoãn cuộc họp ngày mai",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "决定",
         "ico": "📝",
         "c": "v",
         "py": "juédìng",
         "hv": "quyết định"
        },
        {
         "t": "推迟明天的会议",
         "ico": "🗓️",
         "c": "o",
         "py": "tuīchí míngtiān de huìyì",
         "hv": "suy trì minh thiên đích hội nghị"
        }
       ],
       "traceWord": "推迟",
       "py": "Jīnglǐ juédìng tuīchí míngtiān de huìyì",
       "traceKey": "tuichi"
      },
      {
       "scene": "👔📋🗓️",
       "full": "经理同意项目延期一个星期",
       "vi": "Giám đốc đồng ý gia hạn dự án thêm một tuần",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "同意",
         "ico": "👍",
         "c": "v",
         "py": "tóngyì",
         "hv": "đồng ý"
        },
        {
         "t": "项目延期一个星期",
         "ico": "📋",
         "c": "o",
         "py": "xiàngmù yánqī yī gè xīngqī",
         "hv": "hạng mục dang kì nhất cá tinh kì"
        }
       ],
       "traceWord": "延期",
       "py": "Jīnglǐ tóngyì xiàngmù yánqī yī gè xīngqī",
       "traceKey": "yanqi"
      },
      {
       "scene": "👔🗓️⏱️",
       "full": "经理把会议时间延长了半个小时",
       "vi": "Giám đốc kéo dài thời gian cuộc họp thêm nửa tiếng",
       "parts": [
        {
         "t": "经理",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "把会议时间延长了",
         "ico": "⏱️",
         "c": "v",
         "py": "bǎ huìyì shíjiān yáncháng le",
         "hv": "bã hội nghị thì gian dang trường liễu"
        },
        {
         "t": "半个小时",
         "ico": "🕐",
         "c": "o",
         "py": "bàn gè xiǎoshí",
         "hv": "bán cá tiểu thì"
        }
       ],
       "traceWord": "延长",
       "py": "Jīnglǐ bǎ huìyì shíjiān yáncháng le bàn gè xiǎoshí",
       "traceKey": "yanchang"
      },
      {
       "scene": "🧑🗣️✂️",
       "full": "他多次提出缩短会议时间",
       "vi": "Anh ấy nhiều lần đề nghị rút ngắn thời gian họp",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "多次提出",
         "ico": "🗣️",
         "c": "v",
         "py": "duō cì tíchū",
         "hv": "đa thứ đề xuất"
        },
        {
         "t": "缩短会议时间",
         "ico": "✂️",
         "c": "o",
         "py": "suōduǎn huìyì shíjiān",
         "hv": "_ đoản hội nghị thì gian"
        }
       ],
       "traceWord": "缩短",
       "py": "Tā duō cì tíchū suōduǎn huìyì shíjiān",
       "traceKey": "suoduan"
      },
      {
       "scene": "👥🏢😊",
       "full": "我们在这家公司度过了多年快乐的日子",
       "vi": "Chúng tôi đã trải qua nhiều năm vui vẻ ở công ty này",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "在这家公司度过了",
         "ico": "🏢",
         "c": "v",
         "py": "zài zhè jiā gōngsī dùguò le",
         "hv": "tại _ gia công ti độ quá liễu"
        },
        {
         "t": "多年快乐的日子",
         "ico": "😊",
         "c": "o",
         "py": "duō nián kuàilè de rìzi",
         "hv": "đa nên khoái lạc đích nhật tí"
        }
       ],
       "traceWord": "度过",
       "py": "Wǒmen zài zhè jiā gōngsī dùguò le duō nián kuàilè de rìzi",
       "traceKey": "duguo"
      }
     ],
     "qaList": [
      {
       "q": "这家饭馆的菜多样吗？",
       "qvi": "Món ăn ở quán này đa dạng không?",
       "scene": "🍜🍲❓",
       "ans": "很多样，有多种菜",
       "opts": [
        {
         "txt": "他明天去北京",
         "ico": "🏙️",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "很多样，有多种菜",
         "ico": "🍲",
         "py": "Hěn duōyàng yǒu duō zhǒng cài"
        },
        {
         "txt": "我们在三楼开会",
         "ico": "🗓️",
         "py": "Wǒmen zài sān lóu kāihuì"
        }
       ],
       "qpy": "Zhè jiā fànguǎn de cài duōyàng ma?"
      },
      {
       "q": "来参加培训的人大多是谁？",
       "qvi": "Những người đến dự đào tạo phần lớn là ai?",
       "scene": "👥📚❓",
       "ans": "大多是新同事",
       "opts": [
        {
         "txt": "在公司的三楼",
         "ico": "🏢",
         "py": "Zài gōngsī de sān lóu"
        },
        {
         "txt": "大多是新同事",
         "ico": "👥",
         "py": "Dàduō shì xīn tóngshì"
        },
        {
         "txt": "昨天下午四点",
         "ico": "🕓",
         "py": "Zuótiān xiàwǔ sì diǎn"
        }
       ],
       "qpy": "Lái cānjiā péixùn de rén dàduō shì shéi?"
      },
      {
       "q": "这次培训分为几个部分？",
       "qvi": "Đợt đào tạo này chia làm mấy phần?",
       "scene": "📚✂️❓",
       "ans": "分为三个部分",
       "opts": [
        {
         "txt": "分为三个部分",
         "ico": "3️⃣",
         "py": "Fēnwéi sān gè bùfen"
        },
        {
         "txt": "在三楼开会",
         "ico": "🏢",
         "py": "Zài sān lóu kāihuì"
        },
        {
         "txt": "我喜欢喝茶",
         "ico": "🍵",
         "py": "Wǒ xǐhuan hē chá"
        }
       ],
       "qpy": "Zhè cì péixùn fēnwéi jǐ gè bùfen?"
      },
      {
       "q": "这个活动会延续多久？",
       "qvi": "Hoạt động này sẽ kéo dài bao lâu?",
       "scene": "🎉⏳❓",
       "ans": "会延续一个星期",
       "opts": [
        {
         "txt": "在北京的饭馆",
         "ico": "🍜",
         "py": "Zài Běijīng de fànguǎn"
        },
        {
         "txt": "他是我的同事",
         "ico": "🧑",
         "py": "Tā shì wǒ de tóngshì"
        },
        {
         "txt": "会延续一个星期",
         "ico": "🗓️",
         "py": "Huì yánxù yī gè xīngqī"
        }
       ],
       "qpy": "Zhè gè huódòng huì yánxù duōjiǔ?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo trễ giờ và xin dời lịch",
      "steps": [
       "<b>Bước 1:</b> Hình dung bạn bị kẹt xe sáng nay. Nhắn cho đồng nghiệp: <i>\"我们来不及吃早饭就出门了\"</i> và báo bạn lo trễ: <i>\"我怕上班会迟到\"</i>.",
       "<b>Bước 2:</b> Gọi (hoặc nói to) cho sếp xin dời lịch: <i>\"经理决定推迟明天的会议\"</i>, rồi hỏi lại xem còn kịp không: <i>\"现在出发还来得及吗？\"</i>.",
       "<b>Bước 3:</b> Đề xuất sửa lịch họp trong 3 câu, dùng hai trong ba động từ: 延长 / 缩短 / 推迟, ví dụ <i>\"他多次提出缩短会议时间\"</i>, rồi tự nói câu trả lời của sếp."
      ]
     }
    }
   ]
  },
  "4.17": {
   "lessons": [
    {
     "id": "4.17A",
     "name": "Bài 4.17A: Tính cách và phẩm chất",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 非常 / 十分 / 特别 + 💎 热心",
       "🧑 他 + ⚡ 老实 + 💥 极了",
       "🧑 老板 + ⚡ 格外 / 极其 + 💎 大方"
      ],
      "tip": "Phó từ mức độ đứng TRƯỚC tính từ: 格外 (géwài, cách ngoại) và 极其 (jíqí, cực kỳ) nghĩa là \"đặc biệt, vô cùng\"; 极 (jí, cực) còn đứng SAU tính từ dưới dạng 极了 (jíle): 热心极了. Trong lô từ vựng này ta luyện bằng các phó từ gần nghĩa 非常、十分、特别 và mẫu \"A + 极了\".",
      "vn_tip": "Người Việt hay nói \"很热心极了\" (trùng lặp). Đã dùng 极了 thì KHÔNG thêm 很/非常 phía trước: nói 热心极了 hoặc 非常热心, không nói 很热心极了."
     },
     "chunks": [
      {
       "scene": "👨‍💼🤝😇",
       "full": "我的同事小王老实极了",
       "vi": "Đồng nghiệp của tôi là Tiểu Vương thật thà vô cùng",
       "parts": [
        {
         "t": "我的同事小王",
         "ico": "👨‍💼",
         "c": "s",
         "py": "wǒ de tóngshì Xiǎowáng",
         "hv": "ngã đích đồng sự tiểu vương"
        },
        {
         "t": "老实",
         "ico": "😇",
         "c": "v",
         "py": "lǎoshi",
         "hv": "lão thực"
        },
        {
         "t": "极了",
         "ico": "💯",
         "c": "o",
         "py": "jí le",
         "hv": "cực liễu"
        }
       ],
       "traceWord": "老实",
       "py": "Wǒ de tóngshì Xiǎowáng lǎoshi jí le",
       "traceKey": "laoshi"
      },
      {
       "scene": "🧑‍💼🙋🛍️",
       "full": "他特别热心地帮助每个客人",
       "vi": "Anh ấy đặc biệt nhiệt tình giúp đỡ từng khách hàng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "特别热心地帮助",
         "ico": "🤝",
         "c": "v",
         "py": "tèbié rèxīn de bāngzhù",
         "hv": "đặc _ nhiệt tâm địa _ trợ"
        },
        {
         "t": "每个客人",
         "ico": "🛍️",
         "c": "o",
         "py": "měi gè kèrén",
         "hv": "mỗi cá khách nhân"
        }
       ],
       "traceWord": "热心",
       "py": "Tā tèbié rèxīn de bāngzhù měi gè kèrén",
       "traceKey": "rexin"
      },
      {
       "scene": "👧🧒😄",
       "full": "这个孩子又天真又调皮",
       "vi": "Đứa bé này vừa ngây thơ vừa nghịch ngợm",
       "parts": [
        {
         "t": "这个孩子",
         "ico": "🧒",
         "c": "s",
         "py": "zhè gè háizi",
         "hv": "_ cá hài tí"
        },
        {
         "t": "又天真",
         "ico": "😊",
         "c": "v",
         "py": "yòu tiānzhēn",
         "hv": "lại thiên chân"
        },
        {
         "t": "又调皮",
         "ico": "🤪",
         "c": "o",
         "py": "yòu tiáopí",
         "hv": "lại điều bì"
        }
       ],
       "traceWord": "天真",
       "py": "Zhè gè háizi yòu tiānzhēn yòu tiáopí",
       "traceKey": "tianzhen"
      },
      {
       "scene": "🧑‍💼🏢🎤",
       "full": "小李在会议上表现得十分自信",
       "vi": "Tiểu Lý thể hiện rất tự tin trong cuộc họp",
       "parts": [
        {
         "t": "小李",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "Xiǎolǐ",
         "hv": "tiểu lí"
        },
        {
         "t": "在会议上表现得",
         "ico": "🏢",
         "c": "v",
         "py": "zài huìyì shàng biǎoxiàn dé",
         "hv": "tại hội nghị thượng biểu hiện đắc"
        },
        {
         "t": "十分自信",
         "ico": "💪",
         "c": "o",
         "py": "shífēn zìxìn",
         "hv": "thập phân tự tín"
        }
       ],
       "traceWord": "自信",
       "py": "Xiǎolǐ zài huìyì shàng biǎoxiàn dé shífēn zìxìn",
       "traceKey": "zixin"
      },
      {
       "scene": "👔🍽️💰",
       "full": "老板请客时总是非常大方",
       "vi": "Sếp mời khách lúc nào cũng rất hào phóng",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão ván"
        },
        {
         "t": "请客时总是",
         "ico": "🍽️",
         "c": "v",
         "py": "qǐngkè shí zǒngshì",
         "hv": "thỉnh khách thì tổng thị"
        },
        {
         "t": "非常大方",
         "ico": "💰",
         "c": "o",
         "py": "fēicháng dàfang",
         "hv": "phi thường đại phương"
        }
       ],
       "traceWord": "大方",
       "py": "Lǎobǎn qǐngkè shí zǒngshì fēicháng dàfang",
       "traceKey": "dafang"
      },
      {
       "scene": "👮🔥👦",
       "full": "警察英勇地救了那个孩子",
       "vi": "Cảnh sát đã anh dũng cứu đứa bé đó",
       "parts": [
        {
         "t": "警察",
         "ico": "👮",
         "c": "s",
         "py": "jǐngchá",
         "hv": "khểnh sát"
        },
        {
         "t": "英勇地救了",
         "ico": "🦸",
         "c": "v",
         "py": "yīngyǒng de jiù le",
         "hv": "anh dũng địa cứu liễu"
        },
        {
         "t": "那个孩子",
         "ico": "👦",
         "c": "o",
         "py": "nà gè háizi",
         "hv": "na cá hài tí"
        }
       ],
       "traceWord": "英勇",
       "py": "Jǐngchá yīngyǒng de jiù le nà gè háizi",
       "traceKey": "yingyong"
      },
      {
       "scene": "🧑‍💼🙇💪",
       "full": "你要有勇气承认自己的错误",
       "vi": "Bạn phải có dũng khí thừa nhận lỗi của mình",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "要有勇气承认",
         "ico": "💪",
         "c": "v",
         "py": "yào yǒu yǒngqì chéngrèn",
         "hv": "yếu hữu dũng khí thừa nhận"
        },
        {
         "t": "自己的错误",
         "ico": "🙇",
         "c": "o",
         "py": "zìjǐ de cuòwù",
         "hv": "tự kỉ đích thó _"
        }
       ],
       "traceWord": "勇气",
       "py": "Nǐ yào yǒu yǒngqì chéngrèn zìjǐ de cuòwù",
       "traceKey": "yongqi"
      },
      {
       "scene": "🏢📜🤝",
       "full": "我们公司最重视诚信和诚实的员工",
       "vi": "Công ty chúng tôi coi trọng nhất những nhân viên có chữ tín và trung thực",
       "parts": [
        {
         "t": "我们公司",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen gōngsī",
         "hv": "ngã món công ti"
        },
        {
         "t": "最重视",
         "ico": "⭐",
         "c": "v",
         "py": "zuì zhòngshì",
         "hv": "tối trọng thị"
        },
        {
         "t": "诚信和诚实的员工",
         "ico": "🤝",
         "c": "o",
         "py": "chéngxìn hé chéngshí de yuángōng",
         "hv": "thành tín hoà thành thực đích viên công"
        }
       ],
       "traceWord": "诚信",
       "py": "Wǒmen gōngsī zuì zhòngshì chéngxìn hé chéngshí de yuángōng",
       "traceKey": "chengxin"
      }
     ],
     "qaList": [
      {
       "q": "小张为什么常常忘记带手机？",
       "qvi": "Vì sao Tiểu Trương hay quên mang điện thoại?",
       "scene": "🧑📱😅",
       "ans": "因为他太粗心了",
       "opts": [
        {
         "txt": "因为他太粗心了",
         "ico": "😅",
         "py": "Yīnwèi tā tài cūxīn le"
        },
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        },
        {
         "txt": "因为他的手机很贵",
         "ico": "💴",
         "py": "Yīnwèi tā de shǒujī hěn guì"
        }
       ],
       "qpy": "Xiǎozhāng wèi shénme chángcháng wàngjì dài shǒujī?"
      },
      {
       "q": "你觉得小王是什么样的人？",
       "qvi": "Bạn thấy Tiểu Vương là người thế nào?",
       "scene": "🧑😇💪",
       "ans": "他又善良又勇敢",
       "opts": [
        {
         "txt": "他明天去北京",
         "ico": "🚄",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "他又善良又勇敢",
         "ico": "😇",
         "py": "Tā yòu shànliáng yòu yǒnggǎn"
        },
        {
         "txt": "他有两个哥哥",
         "ico": "👦",
         "py": "Tā yǒu liǎng gè gēge"
        }
       ],
       "qpy": "Nǐ juéde Xiǎowáng shì shénmeyàng de rén?"
      },
      {
       "q": "那个演员为什么这么受欢迎？",
       "qvi": "Vì sao diễn viên đó được yêu thích đến vậy?",
       "scene": "🎬🌟😎",
       "ans": "因为他又帅又了不起",
       "opts": [
        {
         "txt": "因为他住在北京",
         "ico": "🏙️",
         "py": "Yīnwèi tā zhù zài Běijīng"
        },
        {
         "txt": "因为今天是星期天",
         "ico": "📅",
         "py": "Yīnwèi jīntiān shì xīngqītiān"
        },
        {
         "txt": "因为他又帅又了不起",
         "ico": "😎",
         "py": "Yīnwèi tā yòu shuài yòu liǎobuqǐ"
        }
       ],
       "qpy": "Nà gè yǎnyuán wèi shénme zhème shòu huānyíng?"
      },
      {
       "q": "面对困难你应该怎么做？",
       "qvi": "Đối mặt với khó khăn bạn nên làm gì?",
       "scene": "🧗💪❓",
       "ans": "应该勇敢一点儿",
       "opts": [
        {
         "txt": "应该马上回家",
         "ico": "🏠",
         "py": "Yīnggāi mǎshàng huí jiā"
        },
        {
         "txt": "应该多喝一点儿水",
         "ico": "💧",
         "py": "Yīnggāi duō hē yīdiǎnr shuǐ"
        },
        {
         "txt": "应该勇敢一点儿",
         "ico": "💪",
         "py": "Yīnggāi yǒnggǎn yīdiǎnr"
        }
       ],
       "qpy": "Miànduì kùnnan nǐ yīnggāi zěnme zuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giới thiệu đồng nghiệp với đối tác",
      "steps": [
       "<b>Bước 1:</b> Chọn một đồng nghiệp thật mà bạn quý, nghĩ ba phẩm chất của người đó rồi nói to: <i>\"我的同事小王老实极了\"</i>.",
       "<b>Bước 2:</b> Giới thiệu thêm cho đối tác bằng hai câu, ví dụ <i>\"他特别热心地帮助每个客人\"</i>, rồi tự đổi tên và tính từ cho hợp với người của bạn.",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp đó một lời khen ngắn, dùng ít nhất một phó từ mức độ (非常、十分、特别 hoặc ...极了) và ghi âm lại để nghe."
      ]
     }
    },
    {
     "id": "4.17B",
     "name": "Bài 4.17B: Cảm xúc và tâm trạng",
     "grammar": {
      "formulas": [
       "🧑 小红 + ⚡ 激动得 + 🎉 大哭大笑",
       "👥 大家 + ⚡ 兴奋得 + 📣 大喊大叫",
       "🧑 他 + ⚡ 请 + 🍖 大吃大喝"
      ],
      "tip": "Cấu trúc 大A大B: lặp chữ 大 trước hai động từ để nhấn mạnh hành động diễn ra mạnh, thoải mái, thường là bốn chữ cố định như 大吃大喝 (dà chī dà hē, đại ngật đại hát), 大哭大笑, 大喊大叫, 大吵大闹. Chỉ dùng với các cụm quen thuộc, không tự tạo tùy ý.",
      "vn_tip": "Người Việt hay nói \"很大哭\" hoặc \"哭得很大\". Muốn nhấn mạnh thì dùng nguyên cụm 大哭大笑 sau 得 hoặc làm vị ngữ; cụm này đã có nghĩa mạnh nên không thêm 很."
     },
     "chunks": [
      {
       "scene": "👧🎉😭😆",
       "full": "小红听到好消息激动得大哭大笑",
       "vi": "Tiểu Hồng nghe tin vui, xúc động đến mức vừa khóc vừa cười",
       "parts": [
        {
         "t": "小红",
         "ico": "👧",
         "c": "s",
         "py": "Xiǎohóng",
         "hv": "tiểu hồng"
        },
        {
         "t": "听到好消息激动得",
         "ico": "🎉",
         "c": "v",
         "py": "tīngdào hǎo xiāoxi jīdòng dé",
         "hv": "thính đáo háo tiêu tức kích động đắc"
        },
        {
         "t": "大哭大笑",
         "ico": "😭",
         "c": "o",
         "py": "dà kū dà xiào",
         "hv": "đại khóc đại _"
        }
       ],
       "traceWord": "激动",
       "py": "Xiǎohóng tīngdào hǎo xiāoxi jīdòng dé dà kū dà xiào",
       "traceKey": "jidong"
      },
      {
       "scene": "⚽🏆📣",
       "full": "球队赢了比赛大家兴奋得大喊大叫",
       "vi": "Đội bóng thắng trận, mọi người phấn khích hò hét ầm ĩ",
       "parts": [
        {
         "t": "球队赢了比赛大家",
         "ico": "⚽",
         "c": "s",
         "py": "qiúduì yíng le bǐsài dàjiā",
         "hv": "cầu đội _ liễu tỉ _ đại gia"
        },
        {
         "t": "兴奋得",
         "ico": "🤩",
         "c": "v",
         "py": "xīngfèn dé",
         "hv": "hưng phấn đắc"
        },
        {
         "t": "大喊大叫",
         "ico": "📣",
         "c": "o",
         "py": "dà hǎn dà jiào",
         "hv": "đại _ đại khiếu"
        }
       ],
       "traceWord": "兴奋",
       "py": "Qiúduì yíng le bǐsài dàjiā xīngfèn dé dà hǎn dà jiào",
       "traceKey": "xingfen"
      },
      {
       "scene": "🧑‍💼💰🍖🍻",
       "full": "他拿到奖金得意地请大家大吃大喝",
       "vi": "Anh ấy nhận tiền thưởng, đắc ý mời mọi người ăn uống no say",
       "parts": [
        {
         "t": "他",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "拿到奖金得意地请",
         "ico": "💰",
         "c": "v",
         "py": "nádào jiǎngjīn déyì de qǐng",
         "hv": "nã đáo _ kim đắc ý địa thỉnh"
        },
        {
         "t": "大家大吃大喝",
         "ico": "🍻",
         "c": "o",
         "py": "dàjiā dà chī dà hē",
         "hv": "đại gia đại khật đại hát"
        }
       ],
       "traceWord": "得意",
       "py": "Tā nádào jiǎngjīn déyì de qǐng dàjiā dà chī dà hē",
       "traceKey": "deyi"
      },
      {
       "scene": "👶😤🏠",
       "full": "小孩儿心里很烦就在家里大吵大闹",
       "vi": "Đứa bé trong lòng bực bội nên ở nhà quấy khóc ầm ĩ",
       "parts": [
        {
         "t": "小孩儿",
         "ico": "👶",
         "c": "s",
         "py": "xiǎoháir",
         "hv": "tiểu hài _"
        },
        {
         "t": "心里很烦就在家里",
         "ico": "😤",
         "c": "v",
         "py": "xīnlǐ hěn fán jiù zài jiā li",
         "hv": "tâm lịa _ phiền _ tại gia lịa"
        },
        {
         "t": "大吵大闹",
         "ico": "📢",
         "c": "o",
         "py": "dà chǎo dà nào",
         "hv": "đại sảo đại náo"
        }
       ],
       "traceWord": "烦",
       "py": "Xiǎoháir xīnlǐ hěn fán jiù zài jiā li dà chǎo dà nào",
       "traceKey": "fan"
      },
      {
       "scene": "🧑🚶😲",
       "full": "大家看见他大摇大摆地走进来都很吃惊",
       "vi": "Mọi người thấy anh ta nghênh ngang bước vào đều rất ngạc nhiên",
       "parts": [
        {
         "t": "大家看见他",
         "ico": "👥",
         "c": "s",
         "py": "dàjiā kànjiàn tā",
         "hv": "đại gia khán kiến tha"
        },
        {
         "t": "大摇大摆地走进来",
         "ico": "🚶",
         "c": "v",
         "py": "dà yáo dà bǎi de zǒu jìnlái",
         "hv": "đại gieo đại bẫy địa tẩu tiến lai"
        },
        {
         "t": "都很吃惊",
         "ico": "😲",
         "c": "o",
         "py": "dōu hěn chījīng",
         "hv": "đô _ khật kinh"
        }
       ],
       "traceWord": "吃惊",
       "py": "Dàjiā kànjiàn tā dà yáo dà bǎi de zǒu jìnlái dōu hěn chījīng",
       "traceKey": "chijing"
      },
      {
       "scene": "🧑🌊🤐",
       "full": "他经历了人生的大起大落之后变得沉默",
       "vi": "Sau những thăng trầm lớn của cuộc đời, anh ấy trở nên trầm lặng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "经历了人生的大起大落",
         "ico": "🌊",
         "c": "v",
         "py": "jīnglì le rénshēng de dà qǐ dà luò",
         "hv": "kinh _ liễu nhân sinh đích đại khởi đại lạc"
        },
        {
         "t": "之后变得沉默",
         "ico": "🤐",
         "c": "o",
         "py": "zhīhòu biàn dé chénmò",
         "hv": "chi hậu biến đắc tròm mặc"
        }
       ],
       "traceWord": "沉默",
       "py": "Tā jīnglì le rénshēng de dà qǐ dà luò zhīhòu biàn dé chénmò",
       "traceKey": "chenmo"
      },
      {
       "scene": "🍖🍽️🥱",
       "full": "每天大鱼大肉的生活让他觉得很无聊",
       "vi": "Cuộc sống ngày nào cũng cao lương mỹ vị khiến anh ấy thấy chán",
       "parts": [
        {
         "t": "每天大鱼大肉的生活",
         "ico": "🍖",
         "c": "s",
         "py": "měi tiān dà yú dà ròu de shēnghuó",
         "hv": "mỗi thiên đại ngư đại _ đích sinh hoạt"
        },
        {
         "t": "让他觉得",
         "ico": "🧑",
         "c": "v",
         "py": "ràng tā juéde",
         "hv": "nhường tha giác đắc"
        },
        {
         "t": "很无聊",
         "ico": "🥱",
         "c": "o",
         "py": "hěn wúliáo",
         "hv": "_ vô _"
        }
       ],
       "traceWord": "无聊",
       "py": "Měi tiān dà yú dà ròu de shēnghuó ràng tā juéde hěn wúliáo",
       "traceKey": "wuliao"
      },
      {
       "scene": "👫😄🗣️",
       "full": "朋友们一起大说大笑真痛快",
       "vi": "Bạn bè cùng nhau nói cười thả ga thật sảng khoái",
       "parts": [
        {
         "t": "朋友们",
         "ico": "👫",
         "c": "s",
         "py": "péngyou men",
         "hv": "bằng hữu món"
        },
        {
         "t": "一起大说大笑",
         "ico": "🗣️",
         "c": "v",
         "py": "yīqǐ dà shuō dà xiào",
         "hv": "nhất khởi đại _ đại _"
        },
        {
         "t": "真痛快",
         "ico": "😄",
         "c": "o",
         "py": "zhēn tòngkuài",
         "hv": "chân thống khoái"
        }
       ],
       "traceWord": "痛快",
       "py": "Péngyou men yīqǐ dà shuō dà xiào zhēn tòngkuài",
       "traceKey": "tongkuai"
      }
     ],
     "qaList": [
      {
       "q": "春节的时候城市里怎么样？",
       "qvi": "Dịp Tết thành phố thế nào?",
       "scene": "🏮🏙️🎆",
       "ans": "非常热闹",
       "opts": [
        {
         "txt": "大家都很失望",
         "ico": "😞",
         "py": "Dàjiā dōu hěn shīwàng"
        },
        {
         "txt": "非常热闹",
         "ico": "🎆",
         "py": "Fēicháng rènao"
        },
        {
         "txt": "一个人也没有",
         "ico": "🏜️",
         "py": "Yī gèrén yě méiyǒu"
        }
       ],
       "qpy": "Chūnjié de shíhou chéngshì lǐ zěnmeyàng?"
      },
      {
       "q": "弟弟在房间里大吵大闹你怎么说？",
       "qvi": "Em trai làm ồn trong phòng thì bạn nói gì?",
       "scene": "👦📢💻",
       "ans": "别闹了我还要工作",
       "opts": [
        {
         "txt": "谢谢你的礼物",
         "ico": "🎁",
         "py": "Xièxie nǐ de lǐwù"
        },
        {
         "txt": "明天我们去爬山",
         "ico": "⛰️",
         "py": "Míngtiān wǒmen qù pá shān"
        },
        {
         "txt": "别闹了我还要工作",
         "ico": "🤫",
         "py": "Bié nào le wǒ hái yào gōngzuò"
        }
       ],
       "qpy": "Dìdi zài fángjiān lǐ dà chǎo dà nào nǐ zěnme shuō?"
      },
      {
       "q": "孩子晚上还没回家妈妈会怎么样？",
       "qvi": "Tối con chưa về nhà thì mẹ sẽ thế nào?",
       "scene": "🌙👩🏠",
       "ans": "她会担心也会着急",
       "opts": [
        {
         "txt": "她会担心也会着急",
         "ico": "😟",
         "py": "Tā huì dānxīn yě huì zháojí"
        },
        {
         "txt": "她会很高兴地唱歌",
         "ico": "🎤",
         "py": "Tā huì hěn gāoxìng de chànggē"
        },
        {
         "txt": "她会去睡觉",
         "ico": "😴",
         "py": "Tā huì qù shuìjiào"
        }
       ],
       "qpy": "Háizi wǎnshang hái méi huí jiā māma huì zěnmeyàng?"
      },
      {
       "q": "你在乎别人的看法吗？",
       "qvi": "Bạn có để ý đến cách nhìn của người khác không?",
       "scene": "🧑💭🤷",
       "ans": "我不在乎怎么说都无所谓",
       "opts": [
        {
         "txt": "我明天要去上班",
         "ico": "💼",
         "py": "Wǒ míngtiān yào qù shàngbān"
        },
        {
         "txt": "我昨天买了一件衣服",
         "ico": "👕",
         "py": "Wǒ zuótiān mǎi le yī jiàn yīfu"
        },
        {
         "txt": "我不在乎怎么说都无所谓",
         "ico": "🤷",
         "py": "Wǒ bùzàihu zěnme shuō dōu wúsuǒwèi"
        }
       ],
       "qpy": "Nǐ zàihu biérén de kànfǎ ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể chuyện một ngày cảm xúc",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một việc hôm nay hoặc tuần này khiến bạn vui, buồn hoặc bực. Nói to một câu, ví dụ <i>\"小红听到好消息激动得大哭大笑\"</i>, rồi đổi nhân vật thành chính bạn.",
       "<b>Bước 2:</b> Gọi hoặc nhắn tin cho một người bạn trong công ty, kể ngắn bằng cụm 大A大B (ví dụ <i>\"朋友们一起大说大笑真痛快\"</i>) và hỏi bạn ấy cảm thấy thế nào.",
       "<b>Bước 3:</b> Khi bạn ấy kể chuyện lo lắng, an ủi bằng tiếng Trung, ví dụ <i>\"别担心\"</i> hoặc <i>\"我不在乎怎么说都无所谓\"</i> khi nói về chuyện của chính mình, rồi ghi âm lại."
      ]
     }
    },
    {
     "id": "4.17C",
     "name": "Bài 4.17C: Khẩu ngữ và thái độ giao tiếp",
     "grammar": {
      "formulas": [
       "📞 喂 + 🧑 你 + 📍 在哪儿啊",
       "🧑 你 + ⚡ 说得没错 + 💬 啊",
       "🧑 我 + ⚡ 没想到 + 😮 他说得这么好啊"
      ],
      "tip": "Thán từ / trợ từ 啊 (a) đặt cuối câu hoặc giữa câu để làm giọng điệu mềm mại, thân mật: cảm thán, nhắc nhở, hỏi han. Khi âm cuối câu trước là a, o, e, i, u, n... nó biến âm thành 呀 (ya), 哇 (wa) hoặc 哪 (na): sau âm -n dùng 哪, sau nguyên âm a/o/e/i/ü thường dùng 呀, sau u/ao/ou dùng 哇.",
      "vn_tip": "Người Việt thường bỏ hẳn 啊 hoặc dùng nó như \"à\" khi hỏi lại. Trong tiếng Trung 啊 chủ yếu để làm mềm giọng và nhấn cảm xúc; không đặt sau từ để hỏi như dấu hỏi \"à?\" của tiếng Việt, và nhớ đổi sang 呀/哪 khi cần."
     },
     "chunks": [
      {
       "scene": "📞🧑📍",
       "full": "喂你现在在哪儿啊我们都在等你",
       "vi": "A lô, bạn giờ đang ở đâu vậy, chúng tôi đều đang đợi bạn",
       "parts": [
        {
         "t": "喂",
         "ico": "📞",
         "c": "v",
         "py": "wèi",
         "hv": "ỏi"
        },
        {
         "t": "你现在在哪儿啊",
         "ico": "📍",
         "c": "s",
         "py": "nǐ xiànzài zài nǎr a",
         "hv": "nể hiện tại tại ná _ à"
        },
        {
         "t": "我们都在等你",
         "ico": "⏳",
         "c": "o",
         "py": "wǒmen dōu zài děng nǐ",
         "hv": "ngã món đô tại đẳng nể"
        }
       ],
       "traceWord": "喂",
       "py": "Wèi nǐ xiànzài zài nǎr a wǒmen dōu zài děng nǐ",
       "traceKey": "wei"
      },
      {
       "scene": "🧑😮🗣️",
       "full": "我没想到他的汉语说得这么好啊",
       "vi": "Tôi không ngờ tiếng Hán của anh ấy nói giỏi đến vậy",
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
         "ico": "😮",
         "c": "v",
         "py": "méi xiǎngdào",
         "hv": "một tưởng đáo"
        },
        {
         "t": "他的汉语说得这么好啊",
         "ico": "🗣️",
         "c": "o",
         "py": "tā de Hànyǔ shuō dé zhème hǎo a",
         "hv": "tha đích hán ngữ _ đắc _ _ háo à"
        }
       ],
       "traceWord": "没想到",
       "py": "Wǒ méi xiǎngdào tā de Hànyǔ shuō dé zhème hǎo a",
       "traceKey": "meixiangdao"
      },
      {
       "scene": "👍🤝💬",
       "full": "你说得没错啊我们就这样办吧",
       "vi": "Bạn nói đúng đấy, chúng ta cứ làm như vậy đi",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "说得没错啊",
         "ico": "👍",
         "c": "v",
         "py": "shuō dé méi cuò a",
         "hv": "_ đắc một thó à"
        },
        {
         "t": "我们就这样办吧",
         "ico": "🤝",
         "c": "o",
         "py": "wǒmen jiù zhèyàng bàn ba",
         "hv": "ngã món _ _ dạng _ và"
        }
       ],
       "traceWord": "没错",
       "py": "Nǐ shuō dé méi cuò a wǒmen jiù zhèyàng bàn ba",
       "traceKey": "meicuo"
      },
      {
       "scene": "🧑🚫💪",
       "full": "你别看不起他啊他其实很努力",
       "vi": "Bạn đừng coi thường anh ấy nhé, thật ra anh ấy rất nỗ lực",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "别看不起",
         "ico": "🚫",
         "c": "v",
         "py": "bié kànbuqǐ",
         "hv": "_ khán bất khởi"
        },
        {
         "t": "他啊他其实很努力",
         "ico": "💪",
         "c": "o",
         "py": "tā a tā qíshí hěn nǔlì",
         "hv": "tha à tha kì thực _ _ lực"
        }
       ],
       "traceWord": "看不起",
       "py": "Nǐ bié kànbuqǐ tā a tā qíshí hěn nǔlì",
       "traceKey": "kanbuqi"
      },
      {
       "scene": "🧑📅🙅",
       "full": "我今天没法儿去开会啊",
       "vi": "Hôm nay tôi không thể đi họp được",
       "parts": [
        {
         "t": "我今天",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ jīntiān",
         "hv": "ngã kim thiên"
        },
        {
         "t": "没法儿",
         "ico": "🙅",
         "c": "v",
         "py": "méifǎr",
         "hv": "một pháp _"
        },
        {
         "t": "去开会啊",
         "ico": "🏢",
         "c": "o",
         "py": "qù kāihuì a",
         "hv": "khứ khai hội à"
        }
       ],
       "traceWord": "没法儿",
       "py": "Wǒ jīntiān méifǎr qù kāihuì a",
       "traceKey": "meifar"
      },
      {
       "scene": "👥📱🔋",
       "full": "现在的人们离不开手机啊",
       "vi": "Con người ngày nay không thể rời điện thoại được",
       "parts": [
        {
         "t": "现在的人们",
         "ico": "👥",
         "c": "s",
         "py": "xiànzài de rénmen",
         "hv": "hiện tại đích nhân món"
        },
        {
         "t": "离不开",
         "ico": "🔗",
         "c": "v",
         "py": "lí bu kāi",
         "hv": "li bất khai"
        },
        {
         "t": "手机啊",
         "ico": "📱",
         "c": "o",
         "py": "shǒujī a",
         "hv": "thủ cơ à"
        }
       ],
       "traceWord": "离不开",
       "py": "Xiànzài de rénmen lí bu kāi shǒujī a",
       "traceKey": "libukai"
      },
      {
       "scene": "🧑😠🗯️",
       "full": "你这样说话也太过分了呀",
       "vi": "Bạn nói chuyện như vậy cũng quá đáng quá",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "这样说话",
         "ico": "🗯️",
         "c": "v",
         "py": "zhèyàng shuōhuà",
         "hv": "_ dạng _ thoại"
        },
        {
         "t": "也太过分了呀",
         "ico": "😠",
         "c": "o",
         "py": "yě tài guòfèn le ya",
         "hv": "dã thái quá phân liễu nhá"
        }
       ],
       "traceWord": "过分",
       "py": "Nǐ zhèyàng shuōhuà yě tài guòfèn le ya",
       "traceKey": "guofen"
      },
      {
       "scene": "📚🗣️😅",
       "full": "刚开始学汉语难免会说错啊",
       "vi": "Mới bắt đầu học tiếng Hán thì khó tránh nói sai",
       "parts": [
        {
         "t": "刚开始学汉语",
         "ico": "📚",
         "c": "s",
         "py": "gāng kāishǐ xué Hànyǔ",
         "hv": "_ khai thuỷ học hán ngữ"
        },
        {
         "t": "难免会",
         "ico": "😅",
         "c": "v",
         "py": "nánmiǎn huì",
         "hv": "nan miễn hội"
        },
        {
         "t": "说错啊",
         "ico": "🗣️",
         "c": "o",
         "py": "shuō cuò a",
         "hv": "_ thó à"
        }
       ],
       "traceWord": "难免",
       "py": "Gāng kāishǐ xué Hànyǔ nánmiǎn huì shuō cuò a",
       "traceKey": "nanmian"
      }
     ],
     "qaList": [
      {
       "q": "你觉得这只小狗怎么样？",
       "qvi": "Bạn thấy chú chó này thế nào?",
       "scene": "🐶❤️❓",
       "ans": "这只小狗怪可爱的呀",
       "opts": [
        {
         "txt": "这只小狗怪可爱的呀",
         "ico": "🐶",
         "py": "Zhè zhǐ xiǎo gǒu guài kě'ài de ya"
        },
        {
         "txt": "我明天去北京",
         "ico": "🚄",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "今天是星期天",
         "ico": "📅",
         "py": "Jīntiān shì xīngqītiān"
        }
       ],
       "qpy": "Nǐ juéde zhè zhǐ xiǎo gǒu zěnmeyàng?"
      },
      {
       "q": "妈妈在门口对孩子说什么？",
       "qvi": "Mẹ đứng ở cửa nói gì với con?",
       "scene": "👩🚪🍚",
       "ans": "孩子快回家吃饭哪",
       "opts": [
        {
         "txt": "老师在教室里上课",
         "ico": "🏫",
         "py": "Lǎoshī zài jiàoshì lǐ shàngkè"
        },
        {
         "txt": "孩子快回家吃饭哪",
         "ico": "🍚",
         "py": "Háizi kuài huí jiā chīfàn nǎ"
        },
        {
         "txt": "爷爷好喝茶",
         "ico": "🍵",
         "py": "Yéye hǎo hē chá"
        }
       ],
       "qpy": "Māma zài ménkǒu duì háizi shuō shénme?"
      },
      {
       "q": "只听一个人的意见会怎么样？",
       "qvi": "Nếu chỉ nghe ý kiến của một người thì sao?",
       "scene": "👂🧑⚖️",
       "ans": "看问题会太片面",
       "opts": [
        {
         "txt": "每天都会很开心",
         "ico": "😄",
         "py": "Měi tiān dōu huì hěn kāixīn"
        },
        {
         "txt": "他的想法很保守",
         "ico": "🧓",
         "py": "Tā de xiǎngfǎ hěn bǎoshǒu"
        },
        {
         "txt": "看问题会太片面",
         "ico": "⚖️",
         "py": "Kàn wèntí huì tài piànmiàn"
        }
       ],
       "qpy": "Zhǐ tīng yī gèrén de yìjiàn huì zěnmeyàng?"
      },
      {
       "q": "大家现在最迫切需要什么？",
       "qvi": "Bây giờ mọi người cần gấp điều gì nhất?",
       "scene": "👥❗💡",
       "ans": "我们迫切需要新的办法",
       "opts": [
        {
         "txt": "我们昨天去了公园",
         "ico": "🌳",
         "py": "Wǒmen zuótiān qù le gōngyuán"
        },
        {
         "txt": "我们迫切需要新的办法",
         "ico": "💡",
         "py": "Wǒmen pòqiè xūyào xīn de bànfǎ"
        },
        {
         "txt": "我们明天是星期天",
         "ico": "📅",
         "py": "Wǒmen míngtiān shì xīngqītiān"
        }
       ],
       "qpy": "Dàjiā xiànzài zuì pòqiè xūyào shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Gọi điện và phản hồi đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Giả vờ gọi điện cho đồng nghiệp đến muộn: <i>\"喂你现在在哪儿啊我们都在等你\"</i>, tự trả lời thay họ bằng một câu có 啊.",
       "<b>Bước 2:</b> Tưởng tượng đồng nghiệp đề xuất một cách làm mới, bạn đồng ý bằng <i>\"你说得没错啊我们就这样办吧\"</i>; nếu không đồng ý thì nói <i>\"我今天没法儿去开会啊\"</i> và giải thích lý do.",
       "<b>Bước 3:</b> Nhắn tin hoặc nói to một lời khuyên nhẹ nhàng cho người mới vào nghề, ví dụ <i>\"刚开始学汉语难免会说错啊\"</i>, rồi ghi âm và nghe lại giọng điệu của 啊."
      ]
     }
    }
   ]
  },
  "4.18": {
   "lessons": [
    {
     "id": "4.18A",
     "name": "Bài 4.18A: Phỏng đoán và nêu quan điểm",
     "grammar": {
      "formulas": [
       "🧑 他 + ✅ 的确 + 💬 很精彩",
       "🔄 没有休息 + ↩️ 反而 + 💼 继续工作",
       "❓ 你 + 🤔 究竟 + 💭 想说什么"
      ],
      "tip": "Phó từ ngữ khí đứng trước vị ngữ để thể hiện thái độ người nói: 的确 (díquè, đích xác) = quả thật; 反而 (fǎn'ér, phản nhi) = ngược lại, trái lại; 竟然 (jìngrán, cánh nhiên) = thế mà, không ngờ; 究竟 (jiūjìng, cứu cánh) = rốt cuộc là, dùng trong câu hỏi để gặng hỏi.",
      "vn_tip": "Người Việt hay đặt 反而 ở đầu câu hoặc trước chủ ngữ như \"nhưng ngược lại\". Đúng là: chủ ngữ + 反而 + động từ (他没有休息，反而继续工作). Cũng đừng dùng 究竟 trong câu trần thuật thường; nó chủ yếu dùng khi hỏi gặng."
     },
     "chunks": [
      {
       "scene": "🎤👏😀",
       "full": "他的演讲的确很精彩",
       "vi": "Bài diễn thuyết của anh ấy quả thật rất hay",
       "parts": [
        {
         "t": "他的演讲",
         "ico": "🎤",
         "c": "s",
         "py": "tā de yǎnjiǎng",
         "hv": "tha đích diễn giảng"
        },
        {
         "t": "的确",
         "ico": "✅",
         "c": "v",
         "py": "díquè",
         "hv": "đích xác"
        },
        {
         "t": "很精彩",
         "ico": "👏",
         "c": "o",
         "py": "hěn jīngcǎi",
         "hv": "_ tinh thái"
        }
       ],
       "traceWord": "演讲",
       "py": "Tā de yǎnjiǎng díquè hěn jīngcǎi",
       "traceKey": "yanjiang"
      },
      {
       "scene": "🧑🤔💬",
       "full": "你究竟想在会议上说什么",
       "vi": "Rốt cuộc bạn muốn nói gì trong cuộc họp?",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "究竟",
         "ico": "🤔",
         "c": "v",
         "py": "jiūjìng",
         "hv": "cứu cánh"
        },
        {
         "t": "想在会议上说什么",
         "ico": "💬",
         "c": "o",
         "py": "xiǎng zài huìyì shàng shuō shénme",
         "hv": "tưởng tại hội nghị thượng _ thập _"
        }
       ],
       "traceWord": "究竟",
       "py": "Nǐ jiūjìng xiǎng zài huìyì shàng shuō shénme",
       "traceKey": "jiujing"
      },
      {
       "scene": "🧑😴💼",
       "full": "他没有休息反而继续工作",
       "vi": "Anh ấy không nghỉ ngơi mà ngược lại còn tiếp tục làm việc",
       "parts": [
        {
         "t": "他没有休息",
         "ico": "😴",
         "c": "s",
         "py": "tā méiyǒu xiūxi",
         "hv": "tha một hữu hưu tức"
        },
        {
         "t": "反而",
         "ico": "↩️",
         "c": "v",
         "py": "fǎn'ér",
         "hv": "phản _"
        },
        {
         "t": "继续工作",
         "ico": "💼",
         "c": "o",
         "py": "jìxù gōngzuò",
         "hv": "kế tục công tác"
        }
       ],
       "traceWord": "反而",
       "py": "Tā méiyǒu xiūxi fǎn'ér jìxù gōngzuò",
       "traceKey": "faner"
      },
      {
       "scene": "🧑😮📅",
       "full": "他竟然忘记了明天的辩论",
       "vi": "Anh ấy thế mà quên mất cuộc tranh biện ngày mai",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "竟然忘记了",
         "ico": "😮",
         "c": "v",
         "py": "jìngrán wàngjì le",
         "hv": "cánh nhiên vong kí liễu"
        },
        {
         "t": "明天的辩论",
         "ico": "🗣️",
         "c": "o",
         "py": "míngtiān de biànlùn",
         "hv": "minh thiên đích _ luận"
        }
       ],
       "traceWord": "竟然",
       "py": "Tā jìngrán wàngjì le míngtiān de biànlùn",
       "traceKey": "jingran"
      },
      {
       "scene": "👥💬⏳",
       "full": "他们为这个问题争论了很久",
       "vi": "Họ đã tranh cãi về vấn đề này rất lâu",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha món"
        },
        {
         "t": "为这个问题争论了",
         "ico": "💬",
         "c": "v",
         "py": "wèi zhè gè wèntí zhēnglùn le",
         "hv": "_ _ cá _ _ tranh luận liễu"
        },
        {
         "t": "很久",
         "ico": "⏳",
         "c": "o",
         "py": "hěn jiǔ",
         "hv": "_ cửu"
        }
       ],
       "traceWord": "争论",
       "py": "Tāmen wèi zhè gè wèntí zhēnglùn le hěn jiǔ",
       "traceKey": "zhenglun"
      },
      {
       "scene": "🧑🌙🏢",
       "full": "他几乎每天晚上都在公司加班",
       "vi": "Hầu như tối nào anh ấy cũng tăng ca ở công ty",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "几乎",
         "ico": "📆",
         "c": "v",
         "py": "jīhū",
         "hv": "kỉ hồ"
        },
        {
         "t": "每天晚上都在公司加班",
         "ico": "🏢",
         "c": "o",
         "py": "měi tiān wǎnshang dōu zài gōngsī jiābān",
         "hv": "mỗi thiên vãn thượng đô tại công ti gia ban"
        }
       ],
       "traceWord": "几乎",
       "py": "Tā jīhū měi tiān wǎnshang dōu zài gōngsī jiābān",
       "traceKey": "jihu"
      },
      {
       "scene": "👀🤔📋",
       "full": "看来他似乎不同意我们的方案",
       "vi": "Xem ra anh ấy dường như không đồng ý với phương án của chúng ta",
       "parts": [
        {
         "t": "看来他",
         "ico": "👀",
         "c": "s",
         "py": "kànlái tā",
         "hv": "khán lai tha"
        },
        {
         "t": "似乎不同意",
         "ico": "🙅",
         "c": "v",
         "py": "sìhū bù tóngyì",
         "hv": "tự hồ bất đồng ý"
        },
        {
         "t": "我们的方案",
         "ico": "📋",
         "c": "o",
         "py": "wǒmen de fāng'àn",
         "hv": "ngã món đích phương án"
        }
       ],
       "traceWord": "似乎",
       "py": "Kànlái tā sìhū bù tóngyì wǒmen de fāng'àn",
       "traceKey": "sihu"
      },
      {
       "scene": "👔👍💼",
       "full": "一般来说老板都赞赏认真工作的员工",
       "vi": "Nói chung, sếp đều đánh giá cao những nhân viên làm việc nghiêm túc",
       "parts": [
        {
         "t": "一般来说老板",
         "ico": "👔",
         "c": "s",
         "py": "yībānláishuō lǎobǎn",
         "hv": "nhất bàn lai _ lão ván"
        },
        {
         "t": "都赞赏",
         "ico": "👍",
         "c": "v",
         "py": "dōu zànshǎng",
         "hv": "đô _ thưởng"
        },
        {
         "t": "认真工作的员工",
         "ico": "💼",
         "c": "o",
         "py": "rènzhēn gōngzuò de yuángōng",
         "hv": "nhận chân công tác đích viên công"
        }
       ],
       "traceWord": "赞赏",
       "py": "Yībānláishuō lǎobǎn dōu zànshǎng rènzhēn gōngzuò de yuángōng",
       "traceKey": "zanshang"
      }
     ],
     "qaList": [
      {
       "q": "他们在议论什么？",
       "qvi": "Họ đang bàn tán chuyện gì?",
       "scene": "👥💬",
       "ans": "他们在议论新的计划",
       "opts": [
        {
         "txt": "他们在公园里跑步",
         "ico": "🏃",
         "py": "Tāmen zài gōngyuán lǐ pǎobù"
        },
        {
         "txt": "他们在议论新的计划",
         "ico": "📝",
         "py": "Tāmen zài yìlùn xīn de jìhuà"
        },
        {
         "txt": "我昨天买了一件衣服",
         "ico": "👕",
         "py": "Wǒ zuótiān mǎi le yī jiàn yīfu"
        }
       ],
       "qpy": "Tāmen zài yìlùn shénme?"
      },
      {
       "q": "明天会不会下雨？",
       "qvi": "Ngày mai có mưa không?",
       "scene": "🌧️❓",
       "ans": "说不定会下雨",
       "opts": [
        {
         "txt": "我已经吃过早饭了",
         "ico": "🍚",
         "py": "Wǒ yǐjīng chī guò zǎofàn le"
        },
        {
         "txt": "他是我的老师",
         "ico": "👩‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "说不定会下雨",
         "ico": "🌧️",
         "py": "Shuōbudìng huì xià yǔ"
        }
       ],
       "qpy": "Míngtiān huì bú huì xià yǔ?"
      },
      {
       "q": "你知道小王是否参加今天的会议吗？",
       "qvi": "Bạn có biết Tiểu Vương có tham dự cuộc họp hôm nay không?",
       "scene": "🧑📅❓",
       "ans": "或许他会参加",
       "opts": [
        {
         "txt": "我的手机坏了",
         "ico": "📱",
         "py": "Wǒ de shǒujī huài le"
        },
        {
         "txt": "这家饭馆很便宜",
         "ico": "🍜",
         "py": "Zhè jiā fànguǎn hěn piányi"
        },
        {
         "txt": "或许他会参加",
         "ico": "🤷",
         "py": "Huòxǔ tā huì cānjiā"
        }
       ],
       "qpy": "Nǐ zhīdào Xiǎowáng shìfǒu cānjiā jīntiān de huìyì ma?"
      },
      {
       "q": "你觉得他的想法怎么样？",
       "qvi": "Bạn thấy ý tưởng của anh ấy thế nào?",
       "scene": "💡🤔",
       "ans": "的确是个好主意",
       "opts": [
        {
         "txt": "今天是星期五",
         "ico": "📅",
         "py": "Jīntiān shì xīngqī wǔ"
        },
        {
         "txt": "我想去海边玩儿",
         "ico": "🏖️",
         "py": "Wǒ xiǎng qù hǎi biān wánr"
        },
        {
         "txt": "的确是个好主意",
         "ico": "💡",
         "py": "Díquè shì gè hǎo zhǔyi"
        }
       ],
       "qpy": "Nǐ juéde tā de xiǎngfǎ zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nêu ý kiến trong buổi họp nhóm",
      "steps": [
       "<b>Bước 1:</b> Hãy nghĩ về một đề xuất mới ở công ty. Nói thành tiếng nhận xét của bạn: <i>\"他的演讲的确很精彩。\"</i>",
       "<b>Bước 2:</b> Đoán thái độ của đồng nghiệp bằng <i>\"看来他似乎不同意我们的方案。\"</i> và hỏi gặng: <i>\"你究竟想在会议上说什么？\"</i>",
       "<b>Bước 3:</b> Nhắn tin cho đồng nghiệp kể chuyện bất ngờ bằng <i>\"他没有休息反而继续工作\"</i> hoặc <i>\"他竟然忘记了明天的辩论\"</i>, rồi ghi âm đọc lại 3 lần."
      ]
     }
    },
    {
     "id": "4.18B",
     "name": "Bài 4.18B: Phản biện, đối lập và nhấn mạnh",
     "grammar": {
      "formulas": [
       "🧑 他 + 🚫 不是不同意 + ✅ 而是没有时间",
       "📌 问题 + 🚫 不是价格太高 + ✅ 而是质量不好",
       "🔁 不是…… + ↔️ 相反 + 💬 ……"
      ],
      "tip": "Cấu trúc 不是……，而是……: không phải… mà là…, phủ định vế trước và khẳng định vế sau. Hai vế thường cùng loại (cùng là động từ, danh từ hay cụm từ). 而是 (ér shì, nhi thị) luôn đứng ở vế khẳng định.",
      "vn_tip": "Người Việt hay nói \"不是……是……\" hoặc dịch từng chữ \"không phải… nhưng là…\". Đúng là dùng 而是, không dùng 但是 ở vế sau: 他不是不同意，而是没有时间."
     },
     "chunks": [
      {
       "scene": "🧑⏰🙅",
       "full": "他不是不同意而是没有时间",
       "vi": "Anh ấy không phải không đồng ý mà là không có thời gian",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不是不同意",
         "ico": "🙅",
         "c": "v",
         "py": "bú shì bù tóngyì",
         "hv": "bất thị bất đồng ý"
        },
        {
         "t": "而是没有时间",
         "ico": "⏰",
         "c": "o",
         "py": "ér shì méiyǒu shíjiān",
         "hv": "_ thị một hữu thì gian"
        }
       ],
       "traceWord": "而是",
       "py": "Tā bú shì bù tóngyì ér shì méiyǒu shíjiān",
       "traceKey": "ershi"
      },
      {
       "scene": "📦💰👎",
       "full": "问题不是价格太高而是质量不好",
       "vi": "Vấn đề không phải giá quá cao mà là chất lượng không tốt",
       "parts": [
        {
         "t": "问题",
         "ico": "❓",
         "c": "s",
         "py": "wèntí",
         "hv": "_ _"
        },
        {
         "t": "不是价格太高",
         "ico": "💰",
         "c": "v",
         "py": "bú shì jiàgé tài gāo",
         "hv": "bất thị giá cách thái cao"
        },
        {
         "t": "而是质量不好",
         "ico": "👎",
         "c": "o",
         "py": "ér shì zhìliàng bù hǎo",
         "hv": "_ thị chất _ bất háo"
        }
       ],
       "traceWord": "而是",
       "py": "Wèntí bú shì jiàgé tài gāo ér shì zhìliàng bù hǎo",
       "traceKey": "ershi"
      },
      {
       "scene": "🧑😊👍",
       "full": "他不是不高兴相反他非常满意",
       "vi": "Anh ấy không phải không vui, trái lại còn rất hài lòng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不是不高兴",
         "ico": "😐",
         "c": "v",
         "py": "bú shì bù gāoxìng",
         "hv": "bất thị bất cao hưng"
        },
        {
         "t": "相反他非常满意",
         "ico": "😊",
         "c": "o",
         "py": "xiāngfǎn tā fēicháng mǎnyì",
         "hv": "tương phản tha phi thường mãn ý"
        }
       ],
       "traceWord": "相反",
       "py": "Tā bú shì bù gāoxìng xiāngfǎn tā fēicháng mǎnyì",
       "traceKey": "xiangfan"
      },
      {
       "scene": "📊📈💁",
       "full": "这份调查反映的不是价格问题而是服务问题",
       "vi": "Cuộc khảo sát này phản ánh không phải vấn đề giá mà là vấn đề dịch vụ",
       "parts": [
        {
         "t": "这份调查",
         "ico": "📊",
         "c": "s",
         "py": "zhè fèn diàochá",
         "hv": "_ phần điều tra"
        },
        {
         "t": "反映的",
         "ico": "📈",
         "c": "v",
         "py": "fǎnyìng de",
         "hv": "phản ánh đích"
        },
        {
         "t": "不是价格问题而是服务问题",
         "ico": "💁",
         "c": "o",
         "py": "bú shì jiàgé wèntí ér shì fúwù wèntí",
         "hv": "bất thị giá cách _ _ _ thị phục vụ _ _"
        }
       ],
       "traceWord": "反映",
       "py": "Zhè fèn diàochá fǎnyìng de bú shì jiàgé wèntí ér shì fúwù wèntí",
       "traceKey": "fanying"
      },
      {
       "scene": "👔💬💪",
       "full": "他不是忘了而是一再推迟开会时间",
       "vi": "Anh ấy không phải quên mà là liên tục dời giờ họp",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "不是忘了",
         "ico": "🙅",
         "c": "v",
         "py": "bú shì wàng le",
         "hv": "bất thị vong liễu"
        },
        {
         "t": "而是一再推迟开会时间",
         "ico": "📅",
         "c": "o",
         "py": "ér shì yīzài tuīchí kāihuì shíjiān",
         "hv": "_ thị nhất tái suy trì khai hội thì gian"
        }
       ],
       "traceWord": "一再",
       "py": "Tā bú shì wàng le ér shì yīzài tuīchí kāihuì shíjiān",
       "traceKey": "yizai"
      },
      {
       "scene": "👔💬💪",
       "full": "经理这样说不是批评而是暗示我们要努力",
       "vi": "Giám đốc nói vậy không phải phê bình mà là ngầm nhắc chúng ta phải cố gắng",
       "parts": [
        {
         "t": "经理这样说",
         "ico": "👔",
         "c": "s",
         "py": "jīnglǐ zhèyàng shuō",
         "hv": "kinh lí _ dạng _"
        },
        {
         "t": "不是批评",
         "ico": "🙅",
         "c": "v",
         "py": "bú shì pīpíng",
         "hv": "bất thị phê bình"
        },
        {
         "t": "而是暗示我们要努力",
         "ico": "💪",
         "c": "o",
         "py": "ér shì ànshì wǒmen yào nǔlì",
         "hv": "_ thị ám thị ngã món yếu _ lực"
        }
       ],
       "traceWord": "暗示",
       "py": "Jīnglǐ zhèyàng shuō bú shì pīpíng ér shì ànshì wǒmen yào nǔlì",
       "traceKey": "anshi"
      },
      {
       "scene": "👥📚🔍",
       "full": "我们不是要快而是要充分准备彻底解决问题",
       "vi": "Chúng ta không cần nhanh mà cần chuẩn bị đầy đủ để giải quyết triệt để vấn đề",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "不是要快",
         "ico": "🏃",
         "c": "v",
         "py": "bú shì yào kuài",
         "hv": "bất thị yếu khoái"
        },
        {
         "t": "而是要充分准备彻底解决问题",
         "ico": "🔍",
         "c": "o",
         "py": "ér shì yào chōngfèn zhǔnbèi chèdǐ jiějué wèntí",
         "hv": "_ thị yếu sung phân chốn bị triệt để giải quyết _ _"
        }
       ],
       "traceWord": "彻底",
       "py": "Wǒmen bú shì yào kuài ér shì yào chōngfèn zhǔnbèi chèdǐ jiějué wèntí",
       "traceKey": "chedi"
      },
      {
       "scene": "🧑🤔✍️",
       "full": "他作出的决定不是随便而是经过再三考虑",
       "vi": "Quyết định anh ấy đưa ra không phải tùy tiện mà là đã cân nhắc nhiều lần",
       "parts": [
        {
         "t": "他作出的决定",
         "ico": "✍️",
         "c": "s",
         "py": "tā zuòchū de juédìng",
         "hv": "tha tác xuất đích quyết định"
        },
        {
         "t": "不是随便",
         "ico": "🙅",
         "c": "v",
         "py": "bú shì suíbiàn",
         "hv": "bất thị tuỳ tiện"
        },
        {
         "t": "而是经过再三考虑",
         "ico": "🤔",
         "c": "o",
         "py": "ér shì jīngguò zàisān kǎolǜ",
         "hv": "_ thị kinh quá tái tam khảo lự"
        }
       ],
       "traceWord": "作出",
       "py": "Tā zuòchū de juédìng bú shì suíbiàn ér shì jīngguò zàisān kǎolǜ",
       "traceKey": "zuochu"
      }
     ],
     "qaList": [
      {
       "q": "他努力了，结果怎么样？",
       "qvi": "Anh ấy đã cố gắng, kết quả thế nào?",
       "scene": "🧑💪❓",
       "ans": "他努力了却没有成功",
       "opts": [
        {
         "txt": "老板已经批了这份报告",
         "ico": "📑",
         "py": "Lǎobǎn yǐjīng pī le zhè fèn bàogào"
        },
        {
         "txt": "他努力了却没有成功",
         "ico": "😞",
         "py": "Tā nǔlì le què méiyǒu chénggōng"
        },
        {
         "txt": "这个周末是春节",
         "ico": "🧧",
         "py": "Zhè gè zhōumò shì Chūnjié"
        }
       ],
       "qpy": "Tā nǔlì le jiéguǒ zěnmeyàng?"
      },
      {
       "q": "贵的东西一定好吗？",
       "qvi": "Đồ đắt thì nhất định tốt sao?",
       "scene": "💰🛍️❓",
       "ans": "贵的东西未必好",
       "opts": [
        {
         "txt": "我们明天上午开会",
         "ico": "📅",
         "py": "Wǒmen míngtiān shàngwǔ kāihuì"
        },
        {
         "txt": "贵的东西未必好",
         "ico": "🤷",
         "py": "Guì de dōngxi wèibì hǎo"
        },
        {
         "txt": "他住在三楼",
         "ico": "🏠",
         "py": "Tā zhù zài sān lóu"
        }
       ],
       "qpy": "Guì de dōngxi yīdìng hǎo ma?"
      },
      {
       "q": "你是不是不喜欢这份工作？",
       "qvi": "Có phải bạn không thích công việc này không?",
       "scene": "🧑💼❓",
       "ans": "不是不喜欢而是太累了",
       "opts": [
        {
         "txt": "你把这个字写反了",
         "ico": "✍️",
         "py": "Nǐ bǎ zhè gè zì xiě fǎn le"
        },
        {
         "txt": "不是不喜欢而是太累了",
         "ico": "😮‍💨",
         "py": "Bú shì bù xǐhuan ér shì tài lèi le"
        },
        {
         "txt": "上周我去了北京",
         "ico": "✈️",
         "py": "Shàng zhōu wǒ qù le Běijīng"
        }
       ],
       "qpy": "Nǐ shì bu shì bù xǐhuan zhè fèn gōngzuò?"
      },
      {
       "q": "小陈是个什么样的人？",
       "qvi": "Tiểu Trần là người như thế nào?",
       "scene": "🧑❓",
       "ans": "他年轻而有经验",
       "opts": [
        {
         "txt": "他住在三楼",
         "ico": "🏠",
         "py": "Tā zhù zài sān lóu"
        },
        {
         "txt": "这个会议你非参加不行",
         "ico": "📅",
         "py": "Zhè gè huìyì nǐ fēi cānjiā bùxíng"
        },
        {
         "txt": "他年轻而有经验",
         "ico": "🌟",
         "py": "Tā niánqīng ér yǒu jīngyàn"
        }
       ],
       "qpy": "Xiǎochén shì gè shénmeyàng de rén?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Giải thích hiểu lầm với đồng nghiệp",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một hiểu lầm ở chỗ làm. Tập nói lý do thật: <i>\"我不是不同意，而是没有时间。\"</i> (thay phần sau bằng lý do của bạn).",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp, làm rõ vấn đề bằng mẫu <i>\"问题不是价格太高，而是质量不好。\"</i> hoặc <i>\"他不是忘了，而是一再推迟开会时间。\"</i>",
       "<b>Bước 3:</b> Tự đóng vai cuộc nói chuyện ngắn: một người hỏi <i>\"你是不是不喜欢这份工作？\"</i>, người kia trả lời bằng cấu trúc 不是……而是……; đổi vai và nói to hai lần."
      ]
     }
    },
    {
     "id": "4.18C",
     "name": "Bài 4.18C: Dẫn căn cứ và nối ý kiến",
     "grammar": {
      "formulas": [
       "📄 根据 + 📋 合同/规定/调查 + 🧑 大家",
       "🧑 他 + 📄 根据客人的意见 + ✏️ 修改了方案",
       "🔗 作为 + 👔 经理 + 🧑 他"
      ],
      "tip": "根据 (gēnjù, căn cứ) = căn cứ vào, dựa theo; thường đứng đầu câu hoặc trước động từ: 根据 + danh từ (quy định, ý kiến, dự báo…) + cách làm/kết luận. Cụm 根据……，…… dùng để nêu cơ sở cho nhận định hoặc quyết định.",
      "vn_tip": "Người Việt hay nói \"theo như\" rồi dịch thành 按 hoặc 跟 (跟照). Dùng 根据 cho căn cứ, tài liệu, dữ liệu; và đừng thêm 的 sau 根据 (nói 根据规定, không nói 根据的规定 khi muốn nêu căn cứ)."
     },
     "chunks": [
      {
       "scene": "☁️🌧️📺",
       "full": "根据天气预报明天会下大雨",
       "vi": "Theo dự báo thời tiết, ngày mai sẽ mưa to",
       "parts": [
        {
         "t": "根据天气预报明天",
         "ico": "📺",
         "c": "s",
         "py": "gēnjù tiānqì yùbào míngtiān",
         "hv": "căn cớ thiên khí dự báo minh thiên"
        },
        {
         "t": "会",
         "ico": "🔮",
         "c": "v",
         "py": "huì",
         "hv": "hội"
        },
        {
         "t": "下大雨",
         "ico": "🌧️",
         "c": "o",
         "py": "xià dà yǔ",
         "hv": "hạ đại _"
        }
       ],
       "traceWord": "根据",
       "py": "Gēnjù tiānqì yùbào míngtiān huì xià dà yǔ",
       "traceKey": "genju"
      },
      {
       "scene": "📜🕘👥",
       "full": "根据规定员工既要准时上班又要认真工作",
       "vi": "Theo quy định, nhân viên vừa phải đi làm đúng giờ vừa phải làm việc nghiêm túc",
       "parts": [
        {
         "t": "根据规定员工",
         "ico": "📜",
         "c": "s",
         "py": "gēnjù guīdìng yuángōng",
         "hv": "căn cớ qui định viên công"
        },
        {
         "t": "既要",
         "ico": "☝️",
         "c": "v",
         "py": "jì yào",
         "hv": "_ yếu"
        },
        {
         "t": "准时上班又要认真工作",
         "ico": "🕘",
         "c": "o",
         "py": "zhǔnshí shàngbān yòu yào rènzhēn gōngzuò",
         "hv": "chốn thì thượng ban lại yếu nhận chân công tác"
        }
       ],
       "traceWord": "既",
       "py": "Gēnjù guīdìng yuángōng jì yào zhǔnshí shàngbān yòu yào rènzhēn gōngzuò",
       "traceKey": "ji"
      },
      {
       "scene": "📊🆕😀",
       "full": "根据调查大家对于这个新项目都很有信心",
       "vi": "Theo khảo sát, mọi người đều rất tin tưởng vào dự án mới này",
       "parts": [
        {
         "t": "根据调查大家",
         "ico": "📊",
         "c": "s",
         "py": "gēnjù diàochá dàjiā",
         "hv": "căn cớ điều tra đại gia"
        },
        {
         "t": "对于这个新项目",
         "ico": "🆕",
         "c": "v",
         "py": "duìyú zhè gè xīn xiàngmù",
         "hv": "đỗi vu _ cá tân hạng mục"
        },
        {
         "t": "都很有信心",
         "ico": "😀",
         "c": "o",
         "py": "dōu hěn yǒu xìnxīn",
         "hv": "đô _ hữu tín tâm"
        }
       ],
       "traceWord": "对于",
       "py": "Gēnjù diàochá dàjiā duìyú zhè gè xīn xiàngmù dōu hěn yǒu xìnxīn",
       "traceKey": "duiyu"
      },
      {
       "scene": "👔💰📅",
       "full": "根据经理的意见关于价格的问题下周再讨论",
       "vi": "Theo ý kiến của giám đốc, vấn đề về giá sẽ bàn lại vào tuần sau",
       "parts": [
        {
         "t": "根据经理的意见",
         "ico": "👔",
         "c": "s",
         "py": "gēnjù jīnglǐ de yìjiàn",
         "hv": "căn cớ kinh lí đích ý kiến"
        },
        {
         "t": "关于价格的问题",
         "ico": "💰",
         "c": "v",
         "py": "guānyú jiàgé de wèntí",
         "hv": "quan vu giá cách đích _ _"
        },
        {
         "t": "下周再讨论",
         "ico": "📅",
         "c": "o",
         "py": "xià zhōu zài tǎolùn",
         "hv": "hạ chu tái thảo luận"
        }
       ],
       "traceWord": "关于",
       "py": "Gēnjù jīnglǐ de yìjiàn guānyú jiàgé de wèntí xià zhōu zài tǎolùn",
       "traceKey": "guanyu"
      },
      {
       "scene": "👔📋⚖️",
       "full": "作为经理他根据情况安排工作以及休息",
       "vi": "Với tư cách giám đốc, anh ấy căn cứ tình hình để sắp xếp công việc và thời gian nghỉ",
       "parts": [
        {
         "t": "作为经理他",
         "ico": "👔",
         "c": "s",
         "py": "zuòwéi jīnglǐ tā",
         "hv": "tác _ kinh lí tha"
        },
        {
         "t": "根据情况",
         "ico": "📊",
         "c": "v",
         "py": "gēnjù qíngkuàng",
         "hv": "căn cớ tình huống"
        },
        {
         "t": "安排工作以及休息",
         "ico": "📋",
         "c": "o",
         "py": "ānpái gōngzuò yǐjí xiūxi",
         "hv": "an bài công tác _ cập hưu tức"
        }
       ],
       "traceWord": "作为",
       "py": "Zuòwéi jīnglǐ tā gēnjù qíngkuàng ānpái gōngzuò yǐjí xiūxi",
       "traceKey": "zuowei"
      },
      {
       "scene": "🎯🏢📝",
       "full": "针对这个问题公司根据意见制订了新计划",
       "vi": "Nhắm vào vấn đề này, công ty đã lập kế hoạch mới dựa trên các ý kiến",
       "parts": [
        {
         "t": "针对这个问题公司",
         "ico": "🎯",
         "c": "s",
         "py": "zhēnduì zhè gè wèntí gōngsī",
         "hv": "châm đỗi _ cá _ _ công ti"
        },
        {
         "t": "根据意见",
         "ico": "💬",
         "c": "v",
         "py": "gēnjù yìjiàn",
         "hv": "căn cớ ý kiến"
        },
        {
         "t": "制订了新计划",
         "ico": "📝",
         "c": "o",
         "py": "zhìdìng le xīn jìhuà",
         "hv": "chế đính liễu tân kể _"
        }
       ],
       "traceWord": "针对",
       "py": "Zhēnduì zhè gè wèntí gōngsī gēnjù yìjiàn zhìdìng le xīn jìhuà",
       "traceKey": "zhendui"
      },
      {
       "scene": "👔🧑🔄",
       "full": "根据经理的安排我代替小李参加今天的会议",
       "vi": "Theo sắp xếp của giám đốc, tôi thay Tiểu Lý dự cuộc họp hôm nay",
       "parts": [
        {
         "t": "根据经理的安排我",
         "ico": "👔",
         "c": "s",
         "py": "gēnjù jīnglǐ de ānpái wǒ",
         "hv": "căn cớ kinh lí đích an bài ngã"
        },
        {
         "t": "代替小李",
         "ico": "🔄",
         "c": "v",
         "py": "dàitì Xiǎolǐ",
         "hv": "đại thế tiểu lí"
        },
        {
         "t": "参加今天的会议",
         "ico": "📅",
         "c": "o",
         "py": "cānjiā jīntiān de huìyì",
         "hv": "tham gia kim thiên đích hội nghị"
        }
       ],
       "traceWord": "代替",
       "py": "Gēnjù jīnglǐ de ānpái wǒ dàitì Xiǎolǐ cānjiā jīntiān de huìyì",
       "traceKey": "daiti"
      },
      {
       "scene": "🧑✏️📨",
       "full": "他根据客人的意见修改了方案并发给了经理",
       "vi": "Anh ấy sửa phương án theo ý kiến của khách rồi gửi cho giám đốc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "根据客人的意见修改了方案",
         "ico": "✏️",
         "c": "v",
         "py": "gēnjù kèrén de yìjiàn xiūgǎi le fāng'àn",
         "hv": "căn cớ khách nhân đích ý kiến tu _ liễu phương án"
        },
        {
         "t": "并发给了经理",
         "ico": "📨",
         "c": "o",
         "py": "bìng fā gěi le jīnglǐ",
         "hv": "_ _ cấp liễu kinh lí"
        }
       ],
       "traceWord": "并",
       "py": "Tā gēnjù kèrén de yìjiàn xiūgǎi le fāng'àn bìng fā gěi le jīnglǐ",
       "traceKey": "bing"
      }
     ],
     "qaList": [
      {
       "q": "手机会替代电脑吗？",
       "qvi": "Điện thoại sẽ thay thế máy tính không?",
       "scene": "📱💻❓",
       "ans": "手机不会完全替代电脑",
       "opts": [
        {
         "txt": "我明天要去银行",
         "ico": "🏦",
         "py": "Wǒ míngtiān yào qù yínháng"
        },
        {
         "txt": "手机不会完全替代电脑",
         "ico": "📱",
         "py": "Shǒujī bú huì wánquán tìdài diànnǎo"
        },
        {
         "txt": "这家商店在地铁站旁边",
         "ico": "🏬",
         "py": "Zhè jiā shāngdiàn zài dìtiězhàn pángbiān"
        }
       ],
       "qpy": "Shǒu jīhuì tìdài diànnǎo ma?"
      },
      {
       "q": "你觉得这次会议怎么样？",
       "qvi": "Bạn thấy cuộc họp lần này thế nào?",
       "scene": "📅👥❓",
       "ans": "内容很好此外时间也合适",
       "opts": [
        {
         "txt": "此事经理已经决定了",
         "ico": "📌",
         "py": "Cǐ shì jīnglǐ yǐjīng juédìng le"
        },
        {
         "txt": "他是我的大学同学",
         "ico": "🎓",
         "py": "Tā shì wǒ de dàxué tóngxué"
        },
        {
         "txt": "内容很好此外时间也合适",
         "ico": "👍",
         "py": "Nèiróng hěn hǎo cǐwài shíjiān yě héshì"
        }
       ],
       "qpy": "Nǐ juéde zhè cì huìyì zěnmeyàng?"
      },
      {
       "q": "小王最近怎么样？",
       "qvi": "Dạo này Tiểu Vương thế nào?",
       "scene": "🧑😓❓",
       "ans": "他最近太忙了甚至周末也要加班",
       "opts": [
        {
         "txt": "他最近太忙了甚至周末也要加班",
         "ico": "😓",
         "py": "Tā zuìjìn tài máng le shènzhì zhōumò yě yào jiābān"
        },
        {
         "txt": "他去年去了北京",
         "ico": "✈️",
         "py": "Tā qùnián qù le Běijīng"
        },
        {
         "txt": "请你替我给经理打电话",
         "ico": "📞",
         "py": "Qǐng nǐ tì wǒ gěi jīnglǐ dǎ diànhuà"
        }
       ],
       "qpy": "Xiǎowáng zuìjìn zěnmeyàng?"
      },
      {
       "q": "大家的意见很多，你的结论是什么？",
       "qvi": "Mọi người có nhiều ý kiến, kết luận của bạn là gì?",
       "scene": "👥💬❓",
       "ans": "总之我们还要再讨论一次",
       "opts": [
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "昨天的电影很好看",
         "ico": "🎬",
         "py": "Zuótiān de diànyǐng hěn hǎokàn"
        },
        {
         "txt": "总之我们还要再讨论一次",
         "ico": "🗣️",
         "py": "Zǒngzhī wǒmen hái yào zài tǎolùn yī cì"
        }
       ],
       "qpy": "Dàjiā de yìjiàn hěn duō nǐ de jiélùn shì shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo ý kiến có căn cứ cho sếp",
      "steps": [
       "<b>Bước 1:</b> Chọn một số liệu hoặc quy định ở công ty bạn. Tập nói căn cứ: <i>\"根据规定，员工既要准时上班又要认真工作。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho sếp: nêu đề xuất bằng <i>\"根据调查，大家对于这个新项目都很有信心。\"</i> và hẹn bàn tiếp: <i>\"关于价格的问题，下周再讨论。\"</i>",
       "<b>Bước 3:</b> Gọi điện (tự nói thành tiếng) cho đồng nghiệp báo việc thay ca: <i>\"根据经理的安排，我代替小李参加今天的会议。\"</i>, kết bằng <i>\"总之，我们还要再讨论一次。\"</i>"
      ]
     }
    }
   ]
  },
  "4.19": {
   "lessons": [
    {
     "id": "4.19A",
     "name": "Bài 4.19A: Lịch sử và quá trình phát triển",
     "grammar": {
      "formulas": [
       "📌 原因 + ⚡ 因此 + 🎯 结果",
       "📌 原因 + ⚡ 所以 + 🎯 结果"
      ],
      "tip": "Mẫu \"……，于是……\" (yúshì, Hán Việt \"vu thị\") nghĩa là \"thế là, vậy nên\": vế sau là việc xảy ra tiếp theo do vế trước. Khi muốn nhấn mạnh quan hệ nguyên nhân – kết quả có thể dùng 因此 (yīncǐ, nhân thử) hoặc 所以 (suǒyǐ, sở dĩ) đặt đầu vế sau.",
      "vn_tip": "Người Việt hay dịch \"thế là\" thành 然后 (sau đó) cho mọi trường hợp. Nếu vế sau là kết quả tất yếu của vế trước thì dùng 因此/所以 (hoặc 于是), còn 然后 chỉ nối hai việc xảy ra lần lượt, không có quan hệ nhân quả."
     },
     "chunks": [
      {
       "scene": "👨‍💼💪🌟",
       "full": "他从小努力奋斗因此有了好前途",
       "vi": "Anh ấy từ nhỏ đã nỗ lực phấn đấu, vì vậy có tương lai tốt đẹp",
       "parts": [
        {
         "t": "他",
         "ico": "👨‍💼",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "从小努力奋斗",
         "ico": "💪",
         "c": "v",
         "py": "cóngxiǎo nǔlì fèndòu",
         "hv": "tòng tiểu _ lực phấn đấu"
        },
        {
         "t": "因此有了好前途",
         "ico": "🌟",
         "c": "o",
         "py": "yīncǐ yǒu le hǎo qiántú",
         "hv": "nhân thử hữu liễu háo tiền đồ"
        }
       ],
       "traceWord": "奋斗",
       "py": "Tā cóngxiǎo nǔlì fèndòu yīncǐ yǒu le hǎo qiántú",
       "traceKey": "fendou"
      },
      {
       "scene": "🏢📚👥",
       "full": "公司积累了许多经验所以客人越来越多",
       "vi": "Công ty tích lũy được nhiều kinh nghiệm nên khách hàng ngày càng đông",
       "parts": [
        {
         "t": "公司积累了许多经验",
         "ico": "🏢",
         "c": "s",
         "py": "gōngsī jīlěi le xǔduō jīngyàn",
         "hv": "công ti tích luỵ liễu hứa đa kinh nghiệm"
        },
        {
         "t": "所以",
         "ico": "➡️",
         "c": "v",
         "py": "suǒyǐ",
         "hv": "sỡ _"
        },
        {
         "t": "客人越来越多",
         "ico": "👥",
         "c": "o",
         "py": "kèrén yuè lái yuè duō",
         "hv": "khách nhân việt lai việt đa"
        }
       ],
       "traceWord": "积累",
       "py": "Gōngsī jīlěi le xǔduō jīngyàn suǒyǐ kèrén yuè lái yuè duō",
       "traceKey": "jilei"
      },
      {
       "scene": "👨📖🏛️",
       "full": "他喜欢历史因此读了许多近代历史书",
       "vi": "Anh ấy thích lịch sử nên đã đọc rất nhiều sách lịch sử cận đại",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "喜欢历史",
         "ico": "🏛️",
         "c": "v",
         "py": "xǐhuan lìshǐ",
         "hv": "hỉ hoan _ sử"
        },
        {
         "t": "因此读了许多近代历史书",
         "ico": "📖",
         "c": "o",
         "py": "yīncǐ dú le xǔduō jìndài lìshǐ shū",
         "hv": "nhân thử độc liễu hứa đa cận đại _ sử thư"
        }
       ],
       "traceWord": "历史",
       "py": "Tā xǐhuan lìshǐ yīncǐ dú le xǔduō jìndài lìshǐ shū",
       "traceKey": "lishi"
      },
      {
       "scene": "📜🗣️🌍",
       "full": "他编的故事一直流传到今天所以大家都知道",
       "vi": "Câu chuyện do anh ấy bịa ra được truyền lại đến tận hôm nay nên ai cũng biết",
       "parts": [
        {
         "t": "他编的故事",
         "ico": "📜",
         "c": "s",
         "py": "tā biān de gùshi",
         "hv": "tha biên đích cố sự"
        },
        {
         "t": "一直流传到今天",
         "ico": "🗣️",
         "c": "v",
         "py": "yīzhí liúchuán dào jīntiān",
         "hv": "nhất _ lưu truyền đáo kim thiên"
        },
        {
         "t": "所以大家都知道",
         "ico": "🌍",
         "c": "o",
         "py": "suǒyǐ dàjiā dōu zhīdào",
         "hv": "sỡ _ đại gia đô tri đạo"
        }
       ],
       "traceWord": "编",
       "py": "Tā biān de gùshi yīzhí liúchuán dào jīntiān suǒyǐ dàjiā dōu zhīdào",
       "traceKey": "bian"
      },
      {
       "scene": "👨❌💡",
       "full": "他做错了事得到教训所以以后很小心",
       "vi": "Anh ấy làm sai việc và rút ra bài học nên sau này rất cẩn thận",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "做错了事得到教训",
         "ico": "❌",
         "c": "v",
         "py": "zuò cuò le shì dédào jiàoxùn",
         "hv": "_ thó liễu sự đắc đáo giáo huấn"
        },
        {
         "t": "所以以后很小心",
         "ico": "⚠️",
         "c": "o",
         "py": "suǒyǐ yǐhòu hěn xiǎoxīn",
         "hv": "sỡ _ _ hậu _ tiểu tâm"
        }
       ],
       "traceWord": "教训",
       "py": "Tā zuò cuò le shì dédào jiàoxùn suǒyǐ yǐhòu hěn xiǎoxīn",
       "traceKey": "jiaoxun"
      },
      {
       "scene": "👔✅📦",
       "full": "老板讲究质量所以产品卖得很好",
       "vi": "Sếp rất coi trọng chất lượng nên sản phẩm bán rất chạy",
       "parts": [
        {
         "t": "老板",
         "ico": "👔",
         "c": "s",
         "py": "lǎobǎn",
         "hv": "lão ván"
        },
        {
         "t": "讲究质量",
         "ico": "✅",
         "c": "v",
         "py": "jiǎngjiu zhìliàng",
         "hv": "giảng cứu chất _"
        },
        {
         "t": "所以产品卖得很好",
         "ico": "📦",
         "c": "o",
         "py": "suǒyǐ chǎnpǐn mài dé hěn hǎo",
         "hv": "sỡ _ _ phẩm mại đắc _ háo"
        }
       ],
       "traceWord": "讲究",
       "py": "Lǎobǎn jiǎngjiu zhìliàng suǒyǐ chǎnpǐn mài dé hěn hǎo",
       "traceKey": "jiangjiu"
      },
      {
       "scene": "🤔💡🧑‍🏫",
       "full": "我们想知道这个办法的来源所以去问专家",
       "vi": "Chúng tôi muốn biết nguồn gốc của cách làm này nên đi hỏi chuyên gia",
       "parts": [
        {
         "t": "我们",
         "ico": "👥",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "想知道这个办法的来源",
         "ico": "🤔",
         "c": "v",
         "py": "xiǎng zhīdào zhè gè bànfǎ de láiyuán",
         "hv": "tưởng tri đạo _ cá _ pháp đích lai nguồn"
        },
        {
         "t": "所以去问专家",
         "ico": "🧑‍🏫",
         "c": "o",
         "py": "suǒyǐ qù wèn zhuānjiā",
         "hv": "sỡ _ khứ _ chuyên gia"
        }
       ],
       "traceWord": "来源",
       "py": "Wǒmen xiǎng zhīdào zhè gè bànfǎ de láiyuán suǒyǐ qù wèn zhuānjiā",
       "traceKey": "laiyuan"
      },
      {
       "scene": "🧑‍🎤👗🛍️",
       "full": "年轻人追求潮流所以这家店衣服卖得好",
       "vi": "Giới trẻ chạy theo xu hướng nên quần áo của cửa hàng này bán rất chạy",
       "parts": [
        {
         "t": "年轻人",
         "ico": "🧑‍🎤",
         "c": "s",
         "py": "niánqīng rén",
         "hv": "nên khinh nhân"
        },
        {
         "t": "追求潮流",
         "ico": "🔥",
         "c": "v",
         "py": "zhuīqiú cháoliú",
         "hv": "truy cầu triều lưu"
        },
        {
         "t": "所以这家店衣服卖得好",
         "ico": "🛍️",
         "c": "o",
         "py": "suǒyǐ zhè jiā diàn yīfu mài dé hǎo",
         "hv": "sỡ _ _ gia điếm y phục mại đắc háo"
        }
       ],
       "traceWord": "潮流",
       "py": "Niánqīng rén zhuīqiú cháoliú suǒyǐ zhè jiā diàn yīfu mài dé hǎo",
       "traceKey": "chaoliu"
      }
     ],
     "qaList": [
      {
       "q": "他为什么没有动摇？",
       "qvi": "Tại sao anh ấy không dao động?",
       "scene": "👨💪🎯",
       "ans": "因为他的目标已经定了",
       "opts": [
        {
         "txt": "因为他今天很累",
         "ico": "😫",
         "py": "Yīnwèi tā jīntiān hěn lèi"
        },
        {
         "txt": "因为他的目标已经定了",
         "ico": "🎯",
         "py": "Yīnwèi tā de mùbiāo yǐjīng dìng le"
        },
        {
         "txt": "因为他不在家",
         "ico": "🏠",
         "py": "Yīnwèi tā bú zàijiā"
        }
       ],
       "qpy": "Tā wèi shénme méiyǒu dòngyáo?"
      },
      {
       "q": "这家公司是公元哪一年成立的？",
       "qvi": "Công ty này được thành lập vào năm nào Công nguyên?",
       "scene": "🏢📅",
       "ans": "是公元二〇〇〇年成立的",
       "opts": [
        {
         "txt": "我昨天去了北京",
         "ico": "🚄",
         "py": "Wǒ zuótiān qù le Běijīng"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "是公元二〇〇〇年成立的",
         "ico": "📅",
         "py": "Shì gōngyuán èr líng líng líng nián chénglì de"
        }
       ],
       "qpy": "Zhè jiā gōngsī shì gōngyuán nǎ yī nián chénglì de?"
      },
      {
       "q": "他为什么想早一点儿独立？",
       "qvi": "Tại sao anh ấy muốn tự lập sớm hơn?",
       "scene": "👨🏠💭",
       "ans": "因为他想自己做决定",
       "opts": [
        {
         "txt": "因为他想自己做决定",
         "ico": "💭",
         "py": "Yīnwèi tā xiǎng zìjǐ zuò juédìng"
        },
        {
         "txt": "因为他喜欢吃面包",
         "ico": "🍞",
         "py": "Yīnwèi tā xǐhuan chī miànbāo"
        },
        {
         "txt": "因为今天下雨了",
         "ico": "🌧️",
         "py": "Yīnwèi jīntiān xià yǔ le"
        }
       ],
       "qpy": "Tā wèi shénme xiǎng zǎo yīdiǎnr dúlì?"
      },
      {
       "q": "老师说我们应该怎么做？",
       "qvi": "Thầy cô nói chúng ta nên làm thế nào?",
       "scene": "🧑‍🏫👥📝",
       "ans": "要尽力做好每件事",
       "opts": [
        {
         "txt": "明天不用上班",
         "ico": "🏖️",
         "py": "Míngtiān bùyòng shàngbān"
        },
        {
         "txt": "我想喝一杯咖啡",
         "ico": "☕",
         "py": "Wǒ xiǎng hē yī bēi kāfēi"
        },
        {
         "txt": "要尽力做好每件事",
         "ico": "💪",
         "py": "Yào jìnlì zuò hǎo měi jiàn shì"
        }
       ],
       "qpy": "Lǎoshī shuō wǒmen yīnggāi zěnme zuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể với đồng nghiệp về bài học kinh nghiệm",
      "steps": [
       "<b>Bước 1:</b> Nghĩ về một việc trong công việc mà bạn từng làm chưa tốt. Nói thành tiếng: <i>\"他做错了事得到教训所以以后很小心\"</i> rồi thay \"他\" bằng \"我\".",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp kể một thành công của công ty bằng mẫu nguyên nhân – kết quả, ví dụ <i>\"公司积累了许多经验所以客人越来越多\"</i>, đổi nội dung cho đúng với công ty bạn.",
       "<b>Bước 3:</b> Tự nói 3 câu về nghề nghiệp của mình, mỗi câu dùng <i>因此</i> hoặc <i>所以</i>, ví dụ nói về việc bạn tiếp tục nỗ lực: <i>\"他从小努力奋斗因此有了好前途\"</i>."
      ]
     }
    },
    {
     "id": "4.19B",
     "name": "Bài 4.19B: Mức độ và phạm vi của sự thay đổi",
     "grammar": {
      "formulas": [
       "📌 主语 + ⚡ 共 + 🔢 数量",
       "📌 时间/地点 + ⚡ 总共 + 🔢 数量 + 名词"
      ],
      "tip": "共 (gòng, cộng) đặt trước động từ hoặc số lượng, nghĩa là \"tổng cộng\". 总共 (zǒnggòng, tổng cộng) và 一共 (yīgòng, nhất cộng) dùng giống như 共, nhưng 共 trang trọng hơn, hay đi với 有: 共有三十人.",
      "vn_tip": "Người Việt hay đặt số lượng trước 共, nói như \"三个人共\". Đúng là 共 đứng trước số lượng: 我们共五个人 hoặc 共有五个人. Cũng đừng đặt 共 sau động từ chính: không nói \"工作了共三年\" mà nói 总共工作了三年."
     },
     "chunks": [
      {
       "scene": "🏫👥🔢",
       "full": "我们班共有二十个学生",
       "vi": "Lớp chúng tôi tổng cộng có hai mươi học sinh",
       "parts": [
        {
         "t": "我们班",
         "ico": "🏫",
         "c": "s",
         "py": "wǒmen bān",
         "hv": "ngã món ban"
        },
        {
         "t": "共有",
         "ico": "➕",
         "c": "v",
         "py": "gòngyǒu",
         "hv": "cộng hữu"
        },
        {
         "t": "二十个学生",
         "ico": "🧑‍🎓",
         "c": "o",
         "py": "èr shí gè xuéshēng",
         "hv": "nhì thập cá học sinh"
        }
       ],
       "traceWord": "共",
       "py": "Wǒmen bān gòngyǒu èr shí gè xuéshēng",
       "traceKey": "gong"
      },
      {
       "scene": "📅🏢👕",
       "full": "这个月公司共卖了三百件衣服",
       "vi": "Tháng này công ty bán tổng cộng ba trăm bộ quần áo",
       "parts": [
        {
         "t": "这个月公司",
         "ico": "🏢",
         "c": "s",
         "py": "zhè gè yuè gōngsī",
         "hv": "_ cá nguyệt công ti"
        },
        {
         "t": "共卖了",
         "ico": "💰",
         "c": "v",
         "py": "gòng mài le",
         "hv": "cộng mại liễu"
        },
        {
         "t": "三百件衣服",
         "ico": "👕",
         "c": "o",
         "py": "sān bǎi jiàn yīfu",
         "hv": "tam bách kiện y phục"
        }
       ],
       "traceWord": "衣服",
       "py": "Zhè gè yuè gōngsī gòng mài le sān bǎi jiàn yīfu",
       "traceKey": "yifu"
      },
      {
       "scene": "📋👥💺",
       "full": "这次会议总共来了四十个人他们迅速坐下",
       "vi": "Cuộc họp lần này tổng cộng có bốn mươi người đến, họ nhanh chóng ngồi xuống",
       "parts": [
        {
         "t": "这次会议",
         "ico": "📋",
         "c": "s",
         "py": "zhè cì huìyì",
         "hv": "_ thứ hội nghị"
        },
        {
         "t": "总共来了四十个人",
         "ico": "👥",
         "c": "v",
         "py": "zǒnggòng lái le sì shí gèrén",
         "hv": "tổng cộng lai liễu tứ thập cá nhân"
        },
        {
         "t": "他们迅速坐下",
         "ico": "💺",
         "c": "o",
         "py": "tāmen xùnsù zuò xia",
         "hv": "tha món _ tốc _ hạ"
        }
       ],
       "traceWord": "迅速",
       "py": "Zhè cì huìyì zǒnggòng lái le sì shí gèrén tāmen xùnsù zuò xia",
       "traceKey": "xunsu"
      },
      {
       "scene": "🗣️👥💬",
       "full": "会上共有五个人发言大家纷纷提出意见",
       "vi": "Trong cuộc họp tổng cộng có năm người phát biểu, mọi người lần lượt nêu ý kiến",
       "parts": [
        {
         "t": "会上",
         "ico": "📋",
         "c": "s",
         "py": "huì shàng",
         "hv": "hội thượng"
        },
        {
         "t": "共有",
         "ico": "➕",
         "c": "v",
         "py": "gòngyǒu",
         "hv": "cộng hữu"
        },
        {
         "t": "五个人发言大家纷纷提出意见",
         "ico": "💬",
         "c": "o",
         "py": "wǔ gèrén fāyán dàjiā fēnfēn tíchū yìjiàn",
         "hv": "ngũ cá nhân _ ngôn đại gia phân phân đề xuất ý kiến"
        }
       ],
       "traceWord": "纷纷",
       "py": "Huì shàng gòngyǒu wǔ gèrén fāyán dàjiā fēnfēn tíchū yìjiàn",
       "traceKey": "fenfen"
      },
      {
       "scene": "🏢5️⃣🏆",
       "full": "我们部门共五个人却率先完成了任务",
       "vi": "Bộ phận chúng tôi tổng cộng năm người nhưng lại hoàn thành nhiệm vụ trước tiên",
       "parts": [
        {
         "t": "我们部门",
         "ico": "🏢",
         "c": "s",
         "py": "wǒmen bùmén",
         "hv": "ngã món bộ môn"
        },
        {
         "t": "共五个人",
         "ico": "5️⃣",
         "c": "v",
         "py": "gòng wǔ gèrén",
         "hv": "cộng ngũ cá nhân"
        },
        {
         "t": "却率先完成了任务",
         "ico": "🏆",
         "c": "o",
         "py": "què shuàixiān wánchéng le rènwu",
         "hv": "khước _ tiên hoàn thành liễu nhậm vụ"
        }
       ],
       "traceWord": "率先",
       "py": "Wǒmen bùmén gòng wǔ gèrén què shuàixiān wánchéng le rènwu",
       "traceKey": "shuaixian"
      },
      {
       "scene": "👨💡💰",
       "full": "他每天随手关灯一年共节约了不少电",
       "vi": "Mỗi ngày anh ấy tiện tay tắt đèn, một năm tiết kiệm được tổng cộng khá nhiều điện",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "每天随手关灯",
         "ico": "💡",
         "c": "v",
         "py": "měi tiān suíshǒu guān dēng",
         "hv": "mỗi thiên tuỳ thủ quan đăng"
        },
        {
         "t": "一年共节约了不少电",
         "ico": "💰",
         "c": "o",
         "py": "yī nián gòng jiéyuē le bù shǎo diàn",
         "hv": "nhất nên cộng tiết ước liễu bất thiểu _"
        }
       ],
       "traceWord": "随手",
       "py": "Tā měi tiān suíshǒu guān dēng yī nián gòng jiéyuē le bù shǎo diàn",
       "traceKey": "suishou"
      },
      {
       "scene": "🤔📝3️⃣",
       "full": "这件事共有三个问题不能轻易决定",
       "vi": "Việc này tổng cộng có ba vấn đề, không thể dễ dàng quyết định",
       "parts": [
        {
         "t": "这件事",
         "ico": "📝",
         "c": "s",
         "py": "zhè jiàn shì",
         "hv": "_ kiện sự"
        },
        {
         "t": "共有三个问题",
         "ico": "3️⃣",
         "c": "v",
         "py": "gòngyǒu sān gè wèntí",
         "hv": "cộng hữu tam cá _ _"
        },
        {
         "t": "不能轻易决定",
         "ico": "🤔",
         "c": "o",
         "py": "bù néng qīngyì juédìng",
         "hv": "bất năng khinh dịch quyết định"
        }
       ],
       "traceWord": "轻易",
       "py": "Zhè jiàn shì gòngyǒu sān gè wèntí bù néng qīngyì juédìng",
       "traceKey": "qingyi"
      },
      {
       "scene": "👨🏢💪",
       "full": "他在公司总共工作了三年依然默默努力",
       "vi": "Anh ấy làm ở công ty tổng cộng ba năm, vẫn lặng lẽ nỗ lực",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "在公司总共工作了三年",
         "ico": "🏢",
         "c": "v",
         "py": "zài gōngsī zǒnggòng gōngzuò le sān nián",
         "hv": "tại công ti tổng cộng công tác liễu tam nên"
        },
        {
         "t": "依然默默努力",
         "ico": "💪",
         "c": "o",
         "py": "yīrán mòmò nǔlì",
         "hv": "y nhiên mặc mặc _ lực"
        }
       ],
       "traceWord": "默默",
       "py": "Tā zài gōngsī zǒnggòng gōngzuò le sān nián yīrán mòmò nǔlì",
       "traceKey": "momo"
      }
     ],
     "qaList": [
      {
       "q": "他是怎么成功的？",
       "qvi": "Anh ấy thành công bằng cách nào?",
       "scene": "👨🏆💪",
       "ans": "他单靠努力就成功了",
       "opts": [
        {
         "txt": "他昨天去了商店",
         "ico": "🏬",
         "py": "Tā zuótiān qù le shāngdiàn"
        },
        {
         "txt": "他的手机坏了",
         "ico": "📱",
         "py": "Tā de shǒujī huài le"
        },
        {
         "txt": "他单靠努力就成功了",
         "ico": "🏆",
         "py": "Tā dān kào nǔlì jiù chénggōng le"
        }
       ],
       "qpy": "Tā shì zěnme chénggōng de?"
      },
      {
       "q": "老师为什么单独找你谈话？",
       "qvi": "Tại sao thầy cô gặp riêng bạn nói chuyện?",
       "scene": "🧑‍🏫🧑💬",
       "ans": "因为我的成绩进步极其明显",
       "opts": [
        {
         "txt": "因为外面在下雨",
         "ico": "🌧️",
         "py": "Yīnwèi wàimiàn zài xià yǔ"
        },
        {
         "txt": "因为我的成绩进步极其明显",
         "ico": "📈",
         "py": "Yīnwèi wǒ de chéngjì jìnbù jíqí míngxiǎn"
        },
        {
         "txt": "因为我想买新手机",
         "ico": "📱",
         "py": "Yīnwèi wǒ xiǎng mǎi xīn shǒujī"
        }
       ],
       "qpy": "Lǎoshī wèi shénme dāndú zhǎo nǐ tánhuà?"
      },
      {
       "q": "他一个人在国外生活得怎么样？",
       "qvi": "Anh ấy một mình sống ở nước ngoài thế nào?",
       "scene": "👨✈️🌍",
       "ans": "他独自生活得极好",
       "opts": [
        {
         "txt": "他明天坐飞机回来",
         "ico": "✈️",
         "py": "Tā míngtiān zuò fēijī huílái"
        },
        {
         "txt": "他独自生活得极好",
         "ico": "😊",
         "py": "Tā dúzì shēnghuó dé jí hǎo"
        },
        {
         "txt": "他在商店买了两杯茶",
         "ico": "🍵",
         "py": "Tā zài shāngdiàn mǎi le liǎng bēi chá"
        }
       ],
       "qpy": "Tā yī gèrén zài guó wài shēnghuó dé zěnmeyàng?"
      },
      {
       "q": "公司的规定格外严吗？",
       "qvi": "Quy định của công ty đặc biệt nghiêm không?",
       "scene": "🏢📋⏰",
       "ans": "对大家一律要按时上班",
       "opts": [
        {
         "txt": "我今天坐地铁来的",
         "ico": "🚇",
         "py": "Wǒ jīntiān zuò dìtiě lái de"
        },
        {
         "txt": "他们都喜欢唱歌",
         "ico": "🎤",
         "py": "Tāmen dōu xǐhuan chànggē"
        },
        {
         "txt": "对大家一律要按时上班",
         "ico": "⏰",
         "py": "Duì dàjiā yīlǜ yào ànshí shàngbān"
        }
       ],
       "qpy": "Gōngsī de guīdìng géwài yán ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Báo cáo số liệu tổng cộng cho sếp",
      "steps": [
       "<b>Bước 1:</b> Lấy số liệu thật của đội bạn (số người, số đơn hàng, số cuộc họp trong tháng). Tự nói thành tiếng 3 câu, ví dụ <i>\"我们部门共五个人\"</i> và <i>\"这个月公司共卖了三百件衣服\"</i>, thay số cho đúng.",
       "<b>Bước 2:</b> Nhắn tin báo cáo cho sếp một con số tổng, dùng <i>总共</i>, ví dụ <i>\"这次会议总共来了四十个人\"</i>.",
       "<b>Bước 3:</b> Kể một thói quen tốt của bạn ở nơi làm việc theo mẫu <i>\"他每天随手关灯一年共节约了不少电\"</i>, đổi \"他\" thành \"我\" và đổi việc làm."
      ]
     }
    },
    {
     "id": "4.19C",
     "name": "Bài 4.19C: Giá trị và đặc điểm nổi bật",
     "grammar": {
      "formulas": [
       "📌 事情 + ⚡ 没有什么 + 💬 好 + 动词/形容词 + 的",
       "❓ 事情 + ⚡ 有什么 + 💬 好 + 动词 + 的？"
      ],
      "tip": "Mẫu \"(没)有什么(好)X的\" mang nghĩa \"có gì đáng X đâu\", dùng để phủ định nhẹ nhàng hoặc trấn an. Ví dụ 没有什么好担心的 (méiyǒu shénme hǎo dānxīn de, một hữu thập ma hảo đam tâm đích) = \"chẳng có gì đáng lo\". Chữ 好 ở đây nghĩa là \"đáng, nên\", X thường là động từ như 看、怕、担心.",
      "vn_tip": "Người Việt hay nói \"没有什么好\" mà quên chữ 的 ở cuối, hoặc dịch word-by-word \"không có cái gì tốt\". Cần nhớ 好 ở đây là \"đáng để\", và câu luôn kết thúc bằng 的: 没有什么好怕的, không phải \"没有什么好怕\"."
     },
     "chunks": [
      {
       "scene": "💎🤷❓",
       "full": "这块宝石没有什么好看的",
       "vi": "Viên đá quý này có gì đáng xem đâu",
       "parts": [
        {
         "t": "这块宝石",
         "ico": "💎",
         "c": "s",
         "py": "zhè kuài bǎoshí",
         "hv": "_ khối bảo thạch"
        },
        {
         "t": "没有什么",
         "ico": "🤷",
         "c": "v",
         "py": "méiyǒu shénme",
         "hv": "một hữu thập _"
        },
        {
         "t": "好看的",
         "ico": "👀",
         "c": "o",
         "py": "hǎokàn de",
         "hv": "háo khán đích"
        }
       ],
       "traceWord": "宝石",
       "py": "Zhè kuài bǎoshí méiyǒu shénme hǎokàn de",
       "traceKey": "baoshi"
      },
      {
       "scene": "🛠️✅😌",
       "full": "这个办法很实用没有什么好担心的",
       "vi": "Cách này rất thiết thực, chẳng có gì đáng lo cả",
       "parts": [
        {
         "t": "这个办法",
         "ico": "🛠️",
         "c": "s",
         "py": "zhè gè bànfǎ",
         "hv": "_ cá _ pháp"
        },
        {
         "t": "很实用",
         "ico": "✅",
         "c": "v",
         "py": "hěn shíyòng",
         "hv": "_ thực dụng"
        },
        {
         "t": "没有什么好担心的",
         "ico": "😌",
         "c": "o",
         "py": "méiyǒu shénme hǎo dānxīn de",
         "hv": "một hữu thập _ háo đam tâm đích"
        }
       ],
       "traceWord": "实用",
       "py": "Zhè gè bànfǎ hěn shíyòng méiyǒu shénme hǎo dānxīn de",
       "traceKey": "shiyong"
      },
      {
       "scene": "🛏️🏨😊",
       "full": "房间这么舒适有什么好不满的",
       "vi": "Phòng thoải mái thế này thì có gì đáng không hài lòng",
       "parts": [
        {
         "t": "房间",
         "ico": "🛏️",
         "c": "s",
         "py": "fángjiān",
         "hv": "phòng gian"
        },
        {
         "t": "这么舒适",
         "ico": "😊",
         "c": "v",
         "py": "zhème shūshì",
         "hv": "_ _ thư thích"
        },
        {
         "t": "有什么好不满的",
         "ico": "🤷",
         "c": "o",
         "py": "yǒu shénme hǎo bùmǎn de",
         "hv": "hữu thập _ háo bất mãn đích"
        }
       ],
       "traceWord": "舒适",
       "py": "Fángjiān zhème shūshì yǒu shénme hǎo bùmǎn de",
       "traceKey": "shushi"
      },
      {
       "scene": "👨📋🔍",
       "full": "他做事非常细致有什么好怀疑的",
       "vi": "Anh ấy làm việc rất tỉ mỉ, có gì đáng nghi ngờ đâu",
       "parts": [
        {
         "t": "他",
         "ico": "👨",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "做事非常细致",
         "ico": "📋",
         "c": "v",
         "py": "zuò shì fēicháng xìzhì",
         "hv": "_ sự phi thường tới nhí"
        },
        {
         "t": "有什么好怀疑的",
         "ico": "🔍",
         "c": "o",
         "py": "yǒu shénme hǎo huáiyí de",
         "hv": "hữu thập _ háo hoài _ đích"
        }
       ],
       "traceWord": "细致",
       "py": "Tā zuò shì fēicháng xìzhì yǒu shénme hǎo huáiyí de",
       "traceKey": "xizhi"
      },
      {
       "scene": "🏞️🔮😌",
       "full": "这个地方没有什么神秘的你不用害怕",
       "vi": "Nơi này chẳng có gì bí ẩn, bạn không cần sợ",
       "parts": [
        {
         "t": "这个地方",
         "ico": "🏞️",
         "c": "s",
         "py": "zhè gè dìfang",
         "hv": "_ cá địa phương"
        },
        {
         "t": "没有什么神秘的",
         "ico": "🔮",
         "c": "v",
         "py": "méiyǒu shénme shénmì de",
         "hv": "một hữu thập _ thần _ đích"
        },
        {
         "t": "你不用害怕",
         "ico": "😌",
         "c": "o",
         "py": "nǐ bùyòng hàipà",
         "hv": "nể bất dụng hại _"
        }
       ],
       "traceWord": "神秘",
       "py": "Zhè gè dìfang méiyǒu shénme shénmì de nǐ bùyòng hàipà",
       "traceKey": "shenmi"
      },
      {
       "scene": "🧑‍🎓🌈🚀",
       "full": "年轻人有无限的可能没有什么好怕的",
       "vi": "Người trẻ có vô vàn khả năng, chẳng có gì đáng sợ",
       "parts": [
        {
         "t": "年轻人",
         "ico": "🧑‍🎓",
         "c": "s",
         "py": "niánqīng rén",
         "hv": "nên khinh nhân"
        },
        {
         "t": "有无限的可能",
         "ico": "🌈",
         "c": "v",
         "py": "yǒu wúxiàn de kěnéng",
         "hv": "hữu vô hạn đích khả năng"
        },
        {
         "t": "没有什么好怕的",
         "ico": "🚀",
         "c": "o",
         "py": "méiyǒu shénme hǎo pà de",
         "hv": "một hữu thập _ háo _ đích"
        }
       ],
       "traceWord": "无限",
       "py": "Niánqīng rén yǒu wúxiàn de kěnéng méiyǒu shénme hǎo pà de",
       "traceKey": "wuxian"
      },
      {
       "scene": "⏳💎🤝",
       "full": "时间宝贵而且有限没有什么好争的",
       "vi": "Thời gian quý báu mà lại có hạn, chẳng có gì đáng tranh cãi",
       "parts": [
        {
         "t": "时间",
         "ico": "⏳",
         "c": "s",
         "py": "shíjiān",
         "hv": "thì gian"
        },
        {
         "t": "宝贵而且有限",
         "ico": "💎",
         "c": "v",
         "py": "bǎoguì érqiě yǒuxiàn",
         "hv": "bảo quý _ thả hữu hạn"
        },
        {
         "t": "没有什么好争的",
         "ico": "🤝",
         "c": "o",
         "py": "méiyǒu shénme hǎo zhēng de",
         "hv": "một hữu thập _ háo tranh đích"
        }
       ],
       "traceWord": "宝贵",
       "py": "Shíjiān bǎoguì érqiě yǒuxiàn méiyǒu shénme hǎo zhēng de",
       "traceKey": "baogui"
      },
      {
       "scene": "🏙️📈🌟",
       "full": "这里变化巨大成绩显著没有什么好批评的",
       "vi": "Nơi đây thay đổi rất lớn, thành tích rõ rệt, chẳng có gì đáng phê bình",
       "parts": [
        {
         "t": "这里变化",
         "ico": "🏙️",
         "c": "s",
         "py": "zhèlǐ biànhuà",
         "hv": "_ lịa biến hoá"
        },
        {
         "t": "巨大成绩显著",
         "ico": "📈",
         "c": "v",
         "py": "jùdà chéngjì xiǎnzhù",
         "hv": "_ đại thành tích hiển trứ"
        },
        {
         "t": "没有什么好批评的",
         "ico": "🌟",
         "c": "o",
         "py": "méiyǒu shénme hǎo pīpíng de",
         "hv": "một hữu thập _ háo phê bình đích"
        }
       ],
       "traceWord": "巨大",
       "py": "Zhèlǐ biànhuà jùdà chéngjì xiǎnzhù méiyǒu shénme hǎo pīpíng de",
       "traceKey": "juda"
      }
     ],
     "qaList": [
      {
       "q": "他们的感情怎么样？",
       "qvi": "Tình cảm của họ thế nào?",
       "scene": "👫❤️",
       "ans": "他们的感情非常深厚",
       "opts": [
        {
         "txt": "他们明天去爬山",
         "ico": "⛰️",
         "py": "Tāmen míngtiān qù pá shān"
        },
        {
         "txt": "他们的感情非常深厚",
         "ico": "❤️",
         "py": "Tāmen de gǎnqíng fēicháng shēnhòu"
        },
        {
         "txt": "他们的手机是新的",
         "ico": "📱",
         "py": "Tāmen de shǒujī shì xīn de"
        }
       ],
       "qpy": "Tāmen de gǎnqíng zěnmeyàng?"
      },
      {
       "q": "你的老师是什么样的人？",
       "qvi": "Thầy/cô của bạn là người như thế nào?",
       "scene": "🧑‍🏫🌟",
       "ans": "他品质高尚习惯良好",
       "opts": [
        {
         "txt": "他是我的哥哥",
         "ico": "👦",
         "py": "Tā shì wǒ de gēge"
        },
        {
         "txt": "他在北京工作",
         "ico": "🏢",
         "py": "Tā zài Běijīng gōngzuò"
        },
        {
         "txt": "他品质高尚习惯良好",
         "ico": "🌟",
         "py": "Tā pǐnzhì gāoshàng xíguàn liánghǎo"
        }
       ],
       "qpy": "Nǐ de lǎoshī shì shénmeyàng de rén?"
      },
      {
       "q": "商店里的东西多吗？",
       "qvi": "Đồ trong cửa hàng có nhiều không?",
       "scene": "🏬🎁",
       "ans": "有无数的宝贝",
       "opts": [
        {
         "txt": "有无数的宝贝",
         "ico": "🎁",
         "py": "Yǒu wúshù de bǎobèi"
        },
        {
         "txt": "她把女儿当成宝",
         "ico": "👶",
         "py": "Tā bǎ nǚ'ér dāng chéng bǎo"
        },
        {
         "txt": "他明天不上班",
         "ico": "🏖️",
         "py": "Tā míngtiān bú shàngbān"
        }
       ],
       "qpy": "Shāngdiàn lǐ de dōngxi duō ma?"
      },
      {
       "q": "那片草地大吗？",
       "qvi": "Bãi cỏ kia có rộng không?",
       "scene": "🌿⚽",
       "ans": "很宽广可以打球",
       "opts": [
        {
         "txt": "她昨天去了医院",
         "ico": "🏥",
         "py": "Tā zuótiān qù le yīyuàn"
        },
        {
         "txt": "我喜欢吃面条儿",
         "ico": "🍜",
         "py": "Wǒ xǐhuan chī miàntiáor"
        },
        {
         "txt": "很宽广可以打球",
         "ico": "⚽",
         "py": "Hěn kuānguǎng kěyǐ dǎ qiú"
        }
       ],
       "qpy": "Nà piàn cǎodì dà ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Trấn an đồng nghiệp đang lo lắng",
      "steps": [
       "<b>Bước 1:</b> Hình dung đồng nghiệp lo về một kế hoạch mới. Tự nói thành tiếng để trấn an: <i>\"这个办法很实用没有什么好担心的\"</i> và <i>\"年轻人有无限的可能没有什么好怕的\"</i>.",
       "<b>Bước 2:</b> Nhắn tin cho bạn bè nhận xét về khách sạn hoặc nơi làm việc của bạn bằng mẫu mới, ví dụ <i>\"房间这么舒适有什么好不满的\"</i>, đổi nội dung theo thực tế.",
       "<b>Bước 3:</b> Chọn 3 điều mọi người hay lo ở chỗ làm (thời gian, thành tích, nơi lạ) rồi viết 3 câu dạng <i>\"没有什么好……的\"</i> để tự đọc to."
      ]
     }
    }
   ]
  },
  "4.20": {
   "lessons": [
    {
     "id": "4.20A",
     "name": "Bài 4.20A: Chiến tranh, thất bại và chiến thắng",
     "grammar": {
      "formulas": [
       "🧑 这些士兵 + ⚡ 很累 + ➕ 甚至不想吃饭",
       "🧑 他们 + ⚡ 打败了 + ➕ 敌人，甚至征服了国家",
       "❓ 他 + 的身体 + 挺弱，甚至不能上班"
      ],
      "tip": "甚至 (shènzhì, thậm chí): nêu mức độ cao hơn, thường đứng trước vế sau và hay đi với 都、也: \"……，甚至……\". Ví dụ: 他很累，甚至不想说话。",
      "vn_tip": "Người Việt hay dịch \"thậm chí\" thành 甚至 nhưng đặt sai chỗ, ví dụ viết \"甚至他不想吃饭\" khi muốn nói \"ngay cả cơm cũng không muốn ăn\". Cách đúng: nói ý thường trước, rồi thêm 甚至 + ý mạnh hơn: 他很累，甚至不想吃饭。"
     },
     "chunks": [
      {
       "scene": "🪖😓🍚",
       "full": "这些士兵很累甚至不想吃饭",
       "vi": "Những người lính này rất mệt, thậm chí không muốn ăn cơm",
       "parts": [
        {
         "t": "这些士兵",
         "ico": "🪖",
         "c": "s",
         "py": "zhèxiē shìbīng",
         "hv": "_ ta sĩ binh"
        },
        {
         "t": "很累",
         "ico": "😓",
         "c": "v",
         "py": "hěn lèi",
         "hv": "_ luỵ"
        },
        {
         "t": "甚至不想吃饭",
         "ico": "🍚",
         "c": "o",
         "py": "shènzhì bù xiǎng chīfàn",
         "hv": "thậm chí bất tưởng khật _"
        }
       ],
       "traceWord": "士兵",
       "py": "Zhèxiē shìbīng hěn lèi shènzhì bù xiǎng chīfàn",
       "traceKey": "shibing"
      },
      {
       "scene": "⚔️🧑‍✈️💧",
       "full": "那些战士战斗了一整天甚至没喝水",
       "vi": "Các chiến sĩ chiến đấu suốt cả ngày, thậm chí không uống nước",
       "parts": [
        {
         "t": "那些战士",
         "ico": "🧑‍✈️",
         "c": "s",
         "py": "nàxiē zhànshì",
         "hv": "na ta chiến sĩ"
        },
        {
         "t": "战斗了",
         "ico": "⚔️",
         "c": "v",
         "py": "zhàndòu le",
         "hv": "chiến đấu liễu"
        },
        {
         "t": "一整天甚至没喝水",
         "ico": "💧",
         "c": "o",
         "py": "yī zhěngtiān shènzhì méi hē shuǐ",
         "hv": "nhất chỉnh thiên thậm chí một hát thuỷ"
        }
       ],
       "traceWord": "战斗",
       "py": "Nàxiē zhànshì zhàndòu le yī zhěngtiān shènzhì méi hē shuǐ",
       "traceKey": "zhandou"
      },
      {
       "scene": "🏳️⏳📅",
       "full": "这场战争打了很多年甚至更久",
       "vi": "Cuộc chiến này đánh nhiều năm, thậm chí lâu hơn",
       "parts": [
        {
         "t": "这场战争",
         "ico": "🏳️",
         "c": "s",
         "py": "zhè chǎng zhànzhēng",
         "hv": "_ trường chiến tranh"
        },
        {
         "t": "打了",
         "ico": "⏳",
         "c": "v",
         "py": "dǎ le",
         "hv": "đả liễu"
        },
        {
         "t": "很多年甚至更久",
         "ico": "📅",
         "c": "o",
         "py": "hěn duō nián shènzhì gèng jiǔ",
         "hv": "_ đa nên thậm chí cánh cửu"
        }
       ],
       "traceWord": "战争",
       "py": "Zhè chǎng zhànzhēng dǎ le hěn duō nián shènzhì gèng jiǔ",
       "traceKey": "zhanzheng"
      },
      {
       "scene": "🏆👥🌍",
       "full": "他们打败了敌人甚至征服了整个国家",
       "vi": "Họ đánh bại kẻ thù, thậm chí chinh phục cả đất nước",
       "parts": [
        {
         "t": "他们",
         "ico": "👥",
         "c": "s",
         "py": "tāmen",
         "hv": "tha món"
        },
        {
         "t": "打败了",
         "ico": "🏆",
         "c": "v",
         "py": "dǎbài le",
         "hv": "đả bại liễu"
        },
        {
         "t": "敌人甚至征服了整个国家",
         "ico": "🌍",
         "c": "o",
         "py": "dírén shènzhì zhēngfú le zhěnggè guójiā",
         "hv": "địch nhân thậm chí chinh phục liễu chỉnh cá quốc gia"
        }
       ],
       "traceWord": "征服",
       "py": "Tāmen dǎbài le dírén shènzhì zhēngfú le zhěnggè guójiā",
       "traceKey": "zhengfu"
      },
      {
       "scene": "🙈📄💼",
       "full": "他一直忽视这个问题甚至没看报告",
       "vi": "Anh ấy luôn phớt lờ vấn đề này, thậm chí không xem báo cáo",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一直忽视",
         "ico": "🙈",
         "c": "v",
         "py": "yīzhí hūshì",
         "hv": "nhất _ hốt thị"
        },
        {
         "t": "这个问题甚至没看报告",
         "ico": "📄",
         "c": "o",
         "py": "zhè gè wèntí shènzhì méi kàn bàogào",
         "hv": "_ cá _ _ thậm chí một khán báo _"
        }
       ],
       "traceWord": "忽视",
       "py": "Tā yīzhí hūshì zhè gè wèntí shènzhì méi kàn bàogào",
       "traceKey": "hushi"
      },
      {
       "scene": "🤒💪🏢",
       "full": "他的身体挺弱甚至不能上班",
       "vi": "Sức khỏe anh ấy khá yếu, thậm chí không đi làm được",
       "parts": [
        {
         "t": "他的身体",
         "ico": "🧑",
         "c": "s",
         "py": "tā de shēntǐ",
         "hv": "tha đích thân thể"
        },
        {
         "t": "挺弱",
         "ico": "🤒",
         "c": "v",
         "py": "tǐng ruò",
         "hv": "_ nhược"
        },
        {
         "t": "甚至不能上班",
         "ico": "🏢",
         "c": "o",
         "py": "shènzhì bù néng shàngbān",
         "hv": "thậm chí bất năng thượng ban"
        }
       ],
       "traceWord": "挺",
       "py": "Tā de shēntǐ tǐng ruò shènzhì bù néng shàngbān",
       "traceKey": "ting"
      },
      {
       "scene": "⚽😞🥅",
       "full": "球队这次失败了甚至没有得分",
       "vi": "Đội bóng lần này thất bại, thậm chí không ghi được điểm nào",
       "parts": [
        {
         "t": "球队",
         "ico": "⚽",
         "c": "s",
         "py": "qiúduì",
         "hv": "cầu đội"
        },
        {
         "t": "这次失败了",
         "ico": "😞",
         "c": "v",
         "py": "zhè cì shībài le",
         "hv": "_ thứ thất bại liễu"
        },
        {
         "t": "甚至没有得分",
         "ico": "🥅",
         "c": "o",
         "py": "shènzhì méiyǒu défēn",
         "hv": "thậm chí một hữu đắc phân"
        }
       ],
       "traceWord": "失败",
       "py": "Qiúduì zhè cì shībài le shènzhì méiyǒu défēn",
       "traceKey": "shibai"
      },
      {
       "scene": "🧑😔💼",
       "full": "他想摆脱失败的影响甚至换了工作",
       "vi": "Anh ấy muốn thoát khỏi ảnh hưởng của thất bại, thậm chí đổi cả việc",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "想摆脱",
         "ico": "🚪",
         "c": "v",
         "py": "xiǎng bǎituō",
         "hv": "tưởng bẫy thoát"
        },
        {
         "t": "失败的影响甚至换了工作",
         "ico": "💼",
         "c": "o",
         "py": "shībài de yǐngxiǎng shènzhì huàn le gōngzuò",
         "hv": "thất bại đích ảnh hướng thậm chí _ liễu công tác"
        }
       ],
       "traceWord": "摆脱",
       "py": "Tā xiǎng bǎituō shībài de yǐngxiǎng shènzhì huàn le gōngzuò",
       "traceKey": "baituo"
      }
     ],
     "qaList": [
      {
       "q": "他们为什么战胜了对手？",
       "qvi": "Vì sao họ chiến thắng đối thủ?",
       "scene": "🏆👥",
       "ans": "因为他们每天都练习",
       "opts": [
        {
         "txt": "因为他们每天都练习",
         "ico": "💪",
         "py": "Yīnwèi tāmen měi tiān dōu liànxí"
        },
        {
         "txt": "因为他们去了北京",
         "ico": "✈️",
         "py": "Yīnwèi tāmen qù le Běijīng"
        },
        {
         "txt": "因为他们没有朋友",
         "ico": "🙍",
         "py": "Yīnwèi tāmen méiyǒu péngyou"
        }
       ],
       "qpy": "Tāmen wèi shénme zhànshèng le duìshǒu?"
      },
      {
       "q": "这次比赛你们失败了吗？",
       "qvi": "Trận lần này các bạn thua à?",
       "scene": "⚽😞",
       "ans": "对，我们败给了一个很弱的对手",
       "opts": [
        {
         "txt": "对，我们败给了一个很弱的对手",
         "ico": "😞",
         "py": "Duì wǒmen bài gěi le yī gè hěn ruò de duìshǒu"
        },
        {
         "txt": "不，我们明天去上班",
         "ico": "🏢",
         "py": "Bù wǒmen míngtiān qù shàngbān"
        },
        {
         "txt": "对，我们喝了一杯茶",
         "ico": "🍵",
         "py": "Duì wǒmen hē le yī bēi chá"
        }
       ],
       "qpy": "Zhè cì bǐsài nǐmen shībài le ma?"
      },
      {
       "q": "这些士兵现在在哪儿？",
       "qvi": "Bây giờ các binh sĩ ở đâu?",
       "scene": "🪖❓",
       "ans": "他们在山上休息",
       "opts": [
        {
         "txt": "他们在公司开会",
         "ico": "🏢",
         "py": "Tāmen zài gōngsī kāihuì"
        },
        {
         "txt": "他们在山上休息",
         "ico": "⛰️",
         "py": "Tāmen zài shān shàng xiūxi"
        },
        {
         "txt": "他们在商店买水",
         "ico": "🛒",
         "py": "Tāmen zài shāngdiàn mǎi shuǐ"
        }
       ],
       "qpy": "Zhèxiē shìbīng xiànzài zài nǎr?"
      },
      {
       "q": "他以前做什么工作？",
       "qvi": "Trước đây anh ấy làm công việc gì?",
       "scene": "🧑❓",
       "ans": "他以前当兵，现在在公司上班",
       "opts": [
        {
         "txt": "他以前当兵，现在在公司上班",
         "ico": "🪖",
         "py": "Tā yǐqián dāng bīng xiànzài zài gōngsī shàngbān"
        },
        {
         "txt": "他明天去北京",
         "ico": "✈️",
         "py": "Tā míngtiān qù Běijīng"
        },
        {
         "txt": "他喜欢喝咖啡",
         "ico": "☕",
         "py": "Tā xǐhuan hē kāfēi"
        }
       ],
       "qpy": "Tā yǐqián zuò shénme gōngzuò?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Kể lại một thất bại trong công việc",
      "steps": [
       "<b>Bước 1:</b> Nhớ lại một dự án hoặc cuộc thi mà bạn hay đội của bạn từng thất bại. Tự nói thành tiếng: <i>\"我们这次失败了，甚至没有得分。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho đồng nghiệp kể nguyên nhân, dùng mẫu <i>\"他一直忽视这个问题，甚至没看报告。\"</i> để nói ai đã bỏ qua điều gì.",
       "<b>Bước 3:</b> Nói với đồng nghiệp bạn muốn làm gì tiếp theo: <i>\"我想摆脱失败的影响。\"</i> rồi tự đặt thêm hai câu với 甚至."
      ]
     }
    },
    {
     "id": "4.20B",
     "name": "Bài 4.20B: Hành động, lựa chọn và gặp gỡ",
     "grammar": {
      "formulas": [
       "🧑 他 + 🔁 一再 + ⚡ 提醒 + 🎯 我们",
       "🧑 经理 + 🔁 再三 + ⚡ 说明 + 🎯 这个计划",
       "🧑 我 + 🔁 一再 + ⚡ 遇到 + 🚗 堵车"
      ],
      "tip": "一再 (yízài) và 再三 (zàisān) đều nghĩa \"nhiều lần, hết lần này đến lần khác\", đứng trước động từ: chủ ngữ + 一再/再三 + động từ. 一再 hay dùng với việc lặp lại (遇到、出现), 再三 hay dùng với hành động có chủ ý (说明、提醒).",
      "vn_tip": "Người Việt hay nói \"再 một lần nữa\" hoặc đặt 一再 sau động từ, ví dụ \"他提醒一再\". Cách đúng: 一再/再三 luôn đứng TRƯỚC động từ: 他一再提醒我们。"
     },
     "chunks": [
      {
       "scene": "☝️🔁💬",
       "full": "他一再提醒我们要选择好的办法",
       "vi": "Anh ấy nhiều lần nhắc chúng tôi phải chọn cách tốt",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一再提醒",
         "ico": "🔁",
         "c": "v",
         "py": "yīzài tíxǐng",
         "hv": "nhất tái đề tỉnh"
        },
        {
         "t": "我们要选择好的办法",
         "ico": "✅",
         "c": "o",
         "py": "wǒmen yào xuǎnzé hǎo de bànfǎ",
         "hv": "ngã món yếu tuyển trạch háo đích _ pháp"
        }
       ],
       "traceWord": "选择",
       "py": "Tā yīzài tíxǐng wǒmen yào xuǎnzé hǎo de bànfǎ",
       "traceKey": "xuanze"
      },
      {
       "scene": "🧑‍💼🔁😌",
       "full": "经理再三说遇事要冷静",
       "vi": "Giám đốc nhiều lần nói gặp chuyện phải bình tĩnh",
       "parts": [
        {
         "t": "经理",
         "ico": "🧑‍💼",
         "c": "s",
         "py": "jīnglǐ",
         "hv": "kinh lí"
        },
        {
         "t": "再三说",
         "ico": "🔁",
         "c": "v",
         "py": "zàisān shuō",
         "hv": "tái tam _"
        },
        {
         "t": "遇事要冷静",
         "ico": "😌",
         "c": "o",
         "py": "yù shì yào lěngjìng",
         "hv": "ngộ sự yếu lạnh _"
        }
       ],
       "traceWord": "遇",
       "py": "Jīnglǐ zàisān shuō yù shì yào lěngjìng",
       "traceKey": "yu"
      },
      {
       "scene": "🚇🔁🧑",
       "full": "我最近一再遇见地铁上的那位老朋友",
       "vi": "Gần đây tôi nhiều lần gặp người bạn cũ đó trên tàu điện",
       "parts": [
        {
         "t": "我最近",
         "ico": "🧑",
         "c": "s",
         "py": "wǒ zuìjìn",
         "hv": "ngã tối cận"
        },
        {
         "t": "一再遇见",
         "ico": "👀",
         "c": "v",
         "py": "yīzài yùjiàn",
         "hv": "nhất tái ngộ kiến"
        },
        {
         "t": "地铁上的那位老朋友",
         "ico": "🚇",
         "c": "o",
         "py": "dìtiě shàng de nà wèi lǎo péngyou",
         "hv": "địa thiết thượng đích na vị lão bằng hữu"
        }
       ],
       "traceWord": "遇见",
       "py": "Wǒ zuìjìn yīzài yùjiàn dìtiě shàng de nà wèi lǎo péngyou",
       "traceKey": "yujian"
      },
      {
       "scene": "🚗🔁⏰",
       "full": "今天上班路上我一再遇到堵车所以迟到了",
       "vi": "Hôm nay trên đường đi làm tôi liên tục gặp tắc đường nên đến muộn",
       "parts": [
        {
         "t": "今天上班路上我",
         "ico": "🧑",
         "c": "s",
         "py": "jīntiān shàngbān lùshang wǒ",
         "hv": "kim thiên thượng ban lộ thượng ngã"
        },
        {
         "t": "一再遇到",
         "ico": "🚗",
         "c": "v",
         "py": "yīzài yùdào",
         "hv": "nhất tái ngộ đáo"
        },
        {
         "t": "堵车所以迟到了",
         "ico": "⏰",
         "c": "o",
         "py": "dǔchē suǒyǐ chídào le",
         "hv": "_ xa sỡ _ trì đáo liễu"
        }
       ],
       "traceWord": "遇到",
       "py": "Jīntiān shàngbān lùshang wǒ yīzài yùdào dǔchē suǒyǐ chídào le",
       "traceKey": "yudao"
      },
      {
       "scene": "☕🏪🔁",
       "full": "这家店的咖啡一再吸引很多客人",
       "vi": "Cà phê của quán này liên tục thu hút nhiều khách",
       "parts": [
        {
         "t": "这家店的咖啡",
         "ico": "☕",
         "c": "s",
         "py": "zhè jiā diàn de kāfēi",
         "hv": "_ gia điếm đích _ _"
        },
        {
         "t": "一再吸引",
         "ico": "🧲",
         "c": "v",
         "py": "yīzài xīyǐn",
         "hv": "nhất tái cộp dẫn"
        },
        {
         "t": "很多客人",
         "ico": "👥",
         "c": "o",
         "py": "hěn duō kèrén",
         "hv": "_ đa khách nhân"
        }
       ],
       "traceWord": "吸引",
       "py": "Zhè jiā diàn de kāfēi yīzài xīyǐn hěn duō kèrén",
       "traceKey": "xiyin"
      },
      {
       "scene": "👶🐱👩",
       "full": "孩子一再要摸那只猫妈妈只好抱着他走开",
       "vi": "Đứa bé cứ đòi sờ con mèo, mẹ đành bế nó đi chỗ khác",
       "parts": [
        {
         "t": "孩子",
         "ico": "👶",
         "c": "s",
         "py": "háizi",
         "hv": "hài tí"
        },
        {
         "t": "一再要摸",
         "ico": "🐱",
         "c": "v",
         "py": "yīzài yào mō",
         "hv": "nhất tái yếu mò"
        },
        {
         "t": "那只猫妈妈只好抱着他走开",
         "ico": "👩",
         "c": "o",
         "py": "nà zhǐ māo māma zhǐhǎo bào zhe tā zǒukāi",
         "hv": "na chỉ mèo má má chỉ háo bão trứ tha tẩu khai"
        }
       ],
       "traceWord": "抱",
       "py": "Háizi yīzài yào mō nà zhǐ māo māma zhǐhǎo bào zhe tā zǒukāi",
       "traceKey": "bao"
      },
      {
       "scene": "🏃🔁🗣️",
       "full": "他一再冲进会议室挑我的问题",
       "vi": "Anh ấy liên tục lao vào phòng họp để bắt bẻ vấn đề của tôi",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "一再冲进",
         "ico": "🏃",
         "c": "v",
         "py": "yīzài chōng jìn",
         "hv": "nhất tái _ tiến"
        },
        {
         "t": "会议室挑我的问题",
         "ico": "🏢",
         "c": "o",
         "py": "huìyì shì tiāo wǒ de wèntí",
         "hv": "hội nghị thất vẹo ngã đích _ _"
        }
       ],
       "traceWord": "冲",
       "py": "Tā yīzài chōng jìn huìyì shì tiāo wǒ de wèntí",
       "traceKey": "chong"
      },
      {
       "scene": "🧑👥🏢",
       "full": "他再三引着客人走进办公室",
       "vi": "Anh ấy nhiều lần dẫn khách đi vào văn phòng",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "再三引着",
         "ico": "🔁",
         "c": "v",
         "py": "zàisān yǐn zhe",
         "hv": "tái tam dẫn trứ"
        },
        {
         "t": "客人走进办公室",
         "ico": "🏢",
         "c": "o",
         "py": "kèrén zǒujìn bàngōngshì",
         "hv": "khách nhân tẩu tiến _ công thất"
        }
       ],
       "traceWord": "引",
       "py": "Tā zàisān yǐn zhe kèrén zǒujìn bàngōngshì",
       "traceKey": "yin"
      }
     ],
     "qaList": [
      {
       "q": "你昨天晚上睡着了吗？",
       "qvi": "Tối qua bạn ngủ được không?",
       "scene": "😴🌙",
       "ans": "没睡着，我一直在看书",
       "opts": [
        {
         "txt": "没睡着，我一直在看书",
         "ico": "📖",
         "py": "Méi shuìzháo wǒ yīzhí zài kàn shū"
        },
        {
         "txt": "我去了公司",
         "ico": "🏢",
         "py": "Wǒ qù le gōngsī"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        }
       ],
       "qpy": "Nǐ zuótiān wǎnshang shuìzháo le ma?"
      },
      {
       "q": "你最近忙吗？",
       "qvi": "Dạo này bạn bận không?",
       "scene": "💼❓",
       "ans": "很忙，但我每天抽时间看书",
       "opts": [
        {
         "txt": "很忙，但我每天抽时间看书",
         "ico": "📖",
         "py": "Hěn máng dàn wǒ měi tiān chōu shíjiān kàn shū"
        },
        {
         "txt": "他是我的老师",
         "ico": "🧑‍🏫",
         "py": "Tā shì wǒ de lǎoshī"
        },
        {
         "txt": "这个杯子很贵",
         "ico": "🥤",
         "py": "Zhè gè bēizi hěn guì"
        }
       ],
       "qpy": "Nǐ zuìjìn máng ma?"
      },
      {
       "q": "你在纸上做什么？",
       "qvi": "Bạn đang làm gì trên giấy?",
       "scene": "🖊️📄",
       "ans": "我用一支笔划了一条线",
       "opts": [
        {
         "txt": "我用一支笔划了一条线",
         "ico": "🖊️",
         "py": "Wǒ yòng yī zhī bǐ huá le yī tiáo xiàn"
        },
        {
         "txt": "我明天去北京",
         "ico": "✈️",
         "py": "Wǒ míngtiān qù Běijīng"
        },
        {
         "txt": "我在公司喝咖啡",
         "ico": "☕",
         "py": "Wǒ zài gōngsī hē kāfēi"
        }
       ],
       "qpy": "Nǐ zài zhǐ shàng zuò shénme?"
      },
      {
       "q": "你现在在做什么？",
       "qvi": "Bây giờ bạn đang làm gì?",
       "scene": "📄🤲",
       "ans": "我在折一张纸",
       "opts": [
        {
         "txt": "我在折一张纸",
         "ico": "📄",
         "py": "Wǒ zài zhé yī zhāng zhǐ"
        },
        {
         "txt": "我昨天很累",
         "ico": "😓",
         "py": "Wǒ zuótiān hěn lèi"
        },
        {
         "txt": "这个电脑很贵",
         "ico": "💻",
         "py": "Zhè gè diànnǎo hěn guì"
        }
       ],
       "qpy": "Nǐ xiànzài zài zuò shénme?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Nhắc đồng nghiệp nhiều lần",
      "steps": [
       "<b>Bước 1:</b> Nghĩ đến một việc bạn đã nhắc đồng nghiệp nhiều lần (nộp báo cáo, họp đúng giờ). Nói thành tiếng: <i>\"我一再提醒他。\"</i>",
       "<b>Bước 2:</b> Nhắn tin giải thích với sếp: <i>\"这个问题一再引起大家的讨论。\"</i> rồi thêm một câu về kế hoạch của bạn.",
       "<b>Bước 3:</b> Kể cho bạn nghe hôm nay bạn gặp chuyện gì trên đường: <i>\"我一再遇到堵车。\"</i> và tự đặt thêm hai câu với 一再 hoặc 再三."
      ]
     }
    },
    {
     "id": "4.20C",
     "name": "Bài 4.20C: Hình dạng, vị trí và trạng thái",
     "grammar": {
      "formulas": [
       "🧑 他 + ⚡ 个子矮小，却 + 💪 很有力量",
       "🧑 大楼后头 + ⚡ 很安静，前头 + 🔊 却很吵",
       "🧑 台上的歌手 + ⚡ 很年轻，却 + 🎸 手里拿着旧书"
      ],
      "tip": "却 (què, khước) đứng sau chủ ngữ và trước động từ/tính từ ở vế sau, diễn tả kết quả trái với mong đợi: \"……，却……\". Ví dụ: 他很矮，却跑得很快。",
      "vn_tip": "Người Việt hay đặt 却 ở đầu câu như \"nhưng\": \"却他跑得很快\". Cách đúng: 却 phải đứng SAU chủ ngữ: 他个子很矮，他却跑得很快, hoặc bỏ chủ ngữ lặp: 他个子很矮，却跑得很快。"
     },
     "chunks": [
      {
       "scene": "🧑📏💪",
       "full": "他个子矮小却很有力量",
       "vi": "Anh ấy dáng nhỏ bé nhưng lại rất khỏe",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "个子矮小",
         "ico": "📏",
         "c": "v",
         "py": "gèzi ǎixiǎo",
         "hv": "cá tí _ tiểu"
        },
        {
         "t": "却很有力量",
         "ico": "💪",
         "c": "o",
         "py": "què hěn yǒu lìliàng",
         "hv": "khước _ hữu lực _"
        }
       ],
       "traceWord": "矮小",
       "py": "Tā gèzi ǎixiǎo què hěn yǒu lìliàng",
       "traceKey": "aixiao"
      },
      {
       "scene": "🐱🐾💨",
       "full": "这只猫很肥却跑得很快",
       "vi": "Con mèo này béo nhưng lại chạy rất nhanh",
       "parts": [
        {
         "t": "这只猫",
         "ico": "🐱",
         "c": "s",
         "py": "zhè zhǐ māo",
         "hv": "_ chỉ mèo"
        },
        {
         "t": "很肥",
         "ico": "⚖️",
         "c": "v",
         "py": "hěn féi",
         "hv": "_ phì"
        },
        {
         "t": "却跑得很快",
         "ico": "💨",
         "c": "o",
         "py": "què pǎo dé hěn kuài",
         "hv": "khước _ đắc _ khoái"
        }
       ],
       "traceWord": "肥",
       "py": "Zhè zhǐ māo hěn féi què pǎo dé hěn kuài",
       "traceKey": "fei"
      },
      {
       "scene": "🧑⚖️⚡",
       "full": "那个胖子看起来很重动作却很快",
       "vi": "Anh chàng mập kia trông nặng nề nhưng động tác lại rất nhanh",
       "parts": [
        {
         "t": "那个胖子",
         "ico": "🧑",
         "c": "s",
         "py": "nà gè pàngzi",
         "hv": "na cá bỡn tí"
        },
        {
         "t": "看起来很重",
         "ico": "⚖️",
         "c": "v",
         "py": "kàn qǐlái hěn zhòng",
         "hv": "khán khởi lai _ trọng"
        },
        {
         "t": "动作却很快",
         "ico": "⚡",
         "c": "o",
         "py": "dòngzuò què hěn kuài",
         "hv": "động tác khước _ khoái"
        }
       ],
       "traceWord": "胖子",
       "py": "Nà gè pàngzi kàn qǐlái hěn zhòng dòngzuò què hěn kuài",
       "traceKey": "pangzi"
      },
      {
       "scene": "🧑📏🧍",
       "full": "他个子很矮却站在最前头",
       "vi": "Anh ấy thấp nhưng lại đứng ở hàng đầu tiên",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "个子很矮",
         "ico": "📏",
         "c": "v",
         "py": "gèzi hěn ǎi",
         "hv": "cá tí _ _"
        },
        {
         "t": "却站在最前头",
         "ico": "🧍",
         "c": "o",
         "py": "què zhàn zài zuì qiántou",
         "hv": "khước trạm tại tối tiền đầu"
        }
       ],
       "traceWord": "前头",
       "py": "Tā gèzi hěn ǎi què zhàn zài zuì qiántou",
       "traceKey": "qiantou"
      },
      {
       "scene": "🏢🤫🔊",
       "full": "大楼后头很安静前头却很吵",
       "vi": "Phía sau tòa nhà rất yên tĩnh nhưng phía trước lại rất ồn",
       "parts": [
        {
         "t": "大楼后头",
         "ico": "🏢",
         "c": "s",
         "py": "dà lóu hòutou",
         "hv": "đại lầu hậu đầu"
        },
        {
         "t": "很安静",
         "ico": "🤫",
         "c": "v",
         "py": "hěn ānjìng",
         "hv": "_ an _"
        },
        {
         "t": "前头却很吵",
         "ico": "🔊",
         "c": "o",
         "py": "qiántou què hěn chǎo",
         "hv": "tiền đầu khước _ sảo"
        }
       ],
       "traceWord": "后头",
       "py": "Dà lóu hòutou hěn ānjìng qiántou què hěn chǎo",
       "traceKey": "houtou"
      },
      {
       "scene": "🛣️🏘️👥",
       "full": "路的两边都很热闹中间却没有人",
       "vi": "Hai bên đường đều náo nhiệt nhưng ở giữa lại không có ai",
       "parts": [
        {
         "t": "路的两边",
         "ico": "🛣️",
         "c": "s",
         "py": "lù de liǎngbiān",
         "hv": "lộ đích lưỡng biên"
        },
        {
         "t": "都很热闹",
         "ico": "🎉",
         "c": "v",
         "py": "dōu hěn rènao",
         "hv": "đô _ nhiệt náo"
        },
        {
         "t": "中间却没有人",
         "ico": "🚫",
         "c": "o",
         "py": "zhōngjiān què méi yǒu rén",
         "hv": "trung gian khước một hữu nhân"
        }
       ],
       "traceWord": "两边",
       "py": "Lù de liǎngbiān dōu hěn rènao zhōngjiān què méi yǒu rén",
       "traceKey": "liangbian"
      },
      {
       "scene": "🧱🚪🔊",
       "full": "这堵墙隔开了两个房间声音却传了过来",
       "vi": "Bức tường ngăn hai căn phòng nhưng tiếng vẫn truyền sang",
       "parts": [
        {
         "t": "这堵墙",
         "ico": "🧱",
         "c": "s",
         "py": "zhè dǔ qiáng",
         "hv": "_ _ tường"
        },
        {
         "t": "隔开了两个房间",
         "ico": "🚪",
         "c": "v",
         "py": "gékāi le liǎng gè fángjiān",
         "hv": "cách khai liễu lưỡng cá phòng gian"
        },
        {
         "t": "声音却传了过来",
         "ico": "🔊",
         "c": "o",
         "py": "shēngyīn què chuán le guòlái",
         "hv": "thanh âm khước truyền liễu quá lai"
        }
       ],
       "traceWord": "隔开",
       "py": "Zhè dǔ qiáng gékāi le liǎng gè fángjiān shēngyīn què chuán le guòlái",
       "traceKey": "gekai"
      },
      {
       "scene": "🎤🧑🎸",
       "full": "台上的歌手很年轻手里却拿着一本旧书",
       "vi": "Ca sĩ trên sân khấu rất trẻ nhưng trong tay lại cầm một cuốn sách cũ",
       "parts": [
        {
         "t": "台上的歌手",
         "ico": "🎤",
         "c": "s",
         "py": "táishàng de gēshǒu",
         "hv": "thai thượng đích ca thủ"
        },
        {
         "t": "很年轻",
         "ico": "🧑",
         "c": "v",
         "py": "hěn niánqīng",
         "hv": "_ nên khinh"
        },
        {
         "t": "手里却拿着一本旧书",
         "ico": "🎸",
         "c": "o",
         "py": "shǒu li què ná zhe yī běn jiù shū",
         "hv": "thủ lịa khước nã trứ nhất bản _ thư"
        }
       ],
       "traceWord": "台上",
       "py": "Táishàng de gēshǒu hěn niánqīng shǒu li què ná zhe yī běn jiù shū",
       "traceKey": "taishang"
      }
     ],
     "qaList": [
      {
       "q": "你下班前做了什么？",
       "qvi": "Trước khi tan ca bạn đã làm gì?",
       "scene": "🏢🌙",
       "ans": "我关了灯，还关了门",
       "opts": [
        {
         "txt": "我关了灯，还关了门",
         "ico": "💡",
         "py": "Wǒ guān le dēng hái guān le mén"
        },
        {
         "txt": "他是我的朋友",
         "ico": "🧑",
         "py": "Tā shì wǒ de péngyou"
        },
        {
         "txt": "今天下雨了",
         "ico": "🌧️",
         "py": "Jīntiān xià yǔ le"
        }
       ],
       "qpy": "Nǐ xiàbān qián zuò le shénme?"
      },
      {
       "q": "办公室里为什么这么安静？",
       "qvi": "Vì sao văn phòng yên tĩnh thế?",
       "scene": "🏢🤫",
       "ans": "因为中间隔着一堵墙",
       "opts": [
        {
         "txt": "因为中间隔着一堵墙",
         "ico": "🧱",
         "py": "Yīnwèi zhōngjiān gé zhe yī dǔ qiáng"
        },
        {
         "txt": "因为我们喜欢吃饭",
         "ico": "🍚",
         "py": "Yīnwèi wǒmen xǐhuan chīfàn"
        },
        {
         "txt": "因为他在北京",
         "ico": "✈️",
         "py": "Yīnwèi tā zài Běijīng"
        }
       ],
       "qpy": "Bàngōngshì lǐ wèi shénme zhème ānjìng?"
      },
      {
       "q": "你的新空调安好了吗？",
       "qvi": "Máy lạnh mới của bạn lắp xong chưa?",
       "scene": "❄️🔧",
       "ans": "安好了，却有一点吵",
       "opts": [
        {
         "txt": "安好了，却有一点吵",
         "ico": "🔊",
         "py": "Ān hǎo le què yǒu yī diǎn chǎo"
        },
        {
         "txt": "我在喝茶",
         "ico": "🍵",
         "py": "Wǒ zài hē chá"
        },
        {
         "txt": "他有一只猫",
         "ico": "🐱",
         "py": "Tā yǒu yī zhǐ māo"
        }
       ],
       "qpy": "Nǐ de xīn kōngtiáo ān hǎo le ma?"
      },
      {
       "q": "你的杯子里还有咖啡吗？",
       "qvi": "Trong ly của bạn còn cà phê không?",
       "scene": "☕❓",
       "ans": "杯底还有一点咖啡",
       "opts": [
        {
         "txt": "杯底还有一点咖啡",
         "ico": "☕",
         "py": "Bēi dǐ hái yǒu yī diǎn kāfēi"
        },
        {
         "txt": "在我的手机里",
         "ico": "📱",
         "py": "Zài wǒ de shǒujī lǐ"
        },
        {
         "txt": "在昨天的会议上",
         "ico": "📅",
         "py": "Zài zuótiān de huìyì shàng"
        }
       ],
       "qpy": "Nǐ de bēizi lǐ hái yǒu kāfēi ma?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Miêu tả một người hoặc một nơi",
      "steps": [
       "<b>Bước 1:</b> Chọn một đồng nghiệp hoặc một tòa nhà quen thuộc. Tự nói: <i>\"他个子矮小，却很有力量。\"</i>",
       "<b>Bước 2:</b> Nhắn tin cho bạn mô tả nơi làm việc: <i>\"大楼后头很安静，前头却很吵。\"</i> và thêm một câu với 两边 hoặc 中间.",
       "<b>Bước 3:</b> Gọi điện hẹn gặp, hỏi vị trí: <i>\"你在台上还是台下？\"</i> rồi tự đặt thêm hai câu với 却."
      ]
     }
    }
   ]
  },
  "4.21": {
   "lessons": [
    {
     "id": "4.21A",
     "name": "Bài 4.21A: Liên từ điều kiện và nhượng bộ",
     "grammar": {
      "formulas": [
       "🌦️ 不管 + 🤔 天气好不好 + 🧑 我 + ✅ 都 + 🏢 去上班",
       "⛰️ 哪怕 + 😓 再忙 + 🧑 他 + ✅ 也 + 💪 坚持锻炼",
       "⚠️ 快一点儿走 + 🚫 不然 / 否则 + ⏰ 来不及"
      ],
      "tip": "不管 / 无论 (bùguǎn, bất quản / wúlùn, vô luận) + từ nghi vấn hoặc cặp lựa chọn (好不好, 多忙) thì vế sau luôn có 都 hoặc 也: bất kể thế nào, kết quả vẫn không đổi. 哪怕 (nǎpà) nhấn mạnh mức độ cực đoan: dù có... đi nữa. 不然 / 否则 (phủ tắc) = nếu không thì, đứng đầu vế nêu hậu quả.",
      "vn_tip": "Người Việt hay nói \"不管天气好不好，我去上班\" mà quên 都/也 ở vế sau. Phải viết: 不管……，我都去上班. Ngoài ra đừng dịch \"dù\" luôn thành 虽然: \"bất kể\" là 不管/无论, \"dù có... đi nữa\" là 哪怕."
     },
     "chunks": [
      {
       "scene": "🌦️🏢🚶",
       "full": "不管天气好不好我都去上班",
       "vi": "Bất kể thời tiết tốt hay không, tôi đều đi làm",
       "parts": [
        {
         "t": "不管天气好不好我",
         "ico": "🌦️",
         "c": "s",
         "py": "bùguǎn tiānqì hǎo bù hǎo wǒ",
         "hv": "bất quản thiên khí háo bất háo ngã"
        },
        {
         "t": "都去",
         "ico": "🚶",
         "c": "v",
         "py": "dōu qù",
         "hv": "đô khứ"
        },
        {
         "t": "上班",
         "ico": "🏢",
         "c": "o",
         "py": "shàngbān",
         "hv": "thượng ban"
        }
       ],
       "traceWord": "不管",
       "py": "Bùguǎn tiānqì hǎo bù hǎo wǒ dōu qù shàngbān",
       "traceKey": "buguan"
      },
      {
       "scene": "😴🛋️",
       "full": "既然无人反对就开会吧",
       "vi": "Đã không ai phản đối thì họp thôi",
       "parts": [
        {
         "t": "既然无人反对",
         "ico": "😴",
         "c": "s",
         "py": "jìrán wú rén fǎnduì",
         "hv": "_ nhiên vô nhân phản đỗi"
        },
        {
         "t": "就开会",
         "ico": "🛋️",
         "c": "v",
         "py": "jiù kāihuì",
         "hv": "_ khai hội"
        },
        {
         "t": "吧",
         "ico": "⏳",
         "c": "o",
         "py": "ba",
         "hv": "và"
        }
       ],
       "traceWord": "无",
       "py": "Jìrán wú rén fǎnduì jiù kāihuì ba",
       "traceKey": "wu"
      },
      {
       "scene": "💼⏰🤝",
       "full": "无论多忙他都会准时参加会议",
       "vi": "Dù bận đến mấy anh ấy cũng đúng giờ tham dự cuộc họp",
       "parts": [
        {
         "t": "无论多忙他",
         "ico": "💼",
         "c": "s",
         "py": "wúlùn duō máng tā",
         "hv": "vô luận đa mang tha"
        },
        {
         "t": "都会准时参加",
         "ico": "⏰",
         "c": "v",
         "py": "dōu huì zhǔnshí cānjiā",
         "hv": "đô hội chốn thì tham gia"
        },
        {
         "t": "会议",
         "ico": "🤝",
         "c": "o",
         "py": "huìyì",
         "hv": "hội nghị"
        }
       ],
       "traceWord": "无论",
       "py": "Wúlùn duō máng tā dōu huì zhǔnshí cānjiā huìyì",
       "traceKey": "wulun"
      },
      {
       "scene": "🌧️🏠💻",
       "full": "假如明天下雨我们就在家开会",
       "vi": "Nếu mai trời mưa thì chúng ta họp ở nhà",
       "parts": [
        {
         "t": "假如明天下雨我们",
         "ico": "🌧️",
         "c": "s",
         "py": "jiǎrú míngtiān xià yǔ wǒmen",
         "hv": "_ như minh thiên hạ _ ngã món"
        },
        {
         "t": "就在家",
         "ico": "🏠",
         "c": "v",
         "py": "jiù zàijiā",
         "hv": "_ tại gia"
        },
        {
         "t": "开会",
         "ico": "💻",
         "c": "o",
         "py": "kāihuì",
         "hv": "khai hội"
        }
       ],
       "traceWord": "假如",
       "py": "Jiǎrú míngtiān xià yǔ wǒmen jiù zàijiā kāihuì",
       "traceKey": "jiaru"
      },
      {
       "scene": "😓💪🏋️",
       "full": "哪怕再忙他也坚持锻炼身体",
       "vi": "Dù có bận hơn nữa anh ấy cũng kiên trì tập thể dục",
       "parts": [
        {
         "t": "哪怕再忙他",
         "ico": "😓",
         "c": "s",
         "py": "nǎpà zài máng tā",
         "hv": "ná _ tái mang tha"
        },
        {
         "t": "也坚持锻炼",
         "ico": "💪",
         "c": "v",
         "py": "yě jiānchí duànliàn",
         "hv": "dã kiên trì _ _"
        },
        {
         "t": "身体",
         "ico": "🏋️",
         "c": "o",
         "py": "shēntǐ",
         "hv": "thân thể"
        }
       ],
       "traceWord": "哪怕",
       "py": "Nǎpà zài máng tā yě jiānchí duànliàn shēntǐ",
       "traceKey": "napa"
      },
      {
       "scene": "🧑🏃⏰",
       "full": "我们快一点儿走不然就来不及了",
       "vi": "Chúng ta đi nhanh lên, nếu không sẽ không kịp mất",
       "parts": [
        {
         "t": "我们",
         "ico": "🧑",
         "c": "s",
         "py": "wǒmen",
         "hv": "ngã món"
        },
        {
         "t": "快一点儿走",
         "ico": "🏃",
         "c": "v",
         "py": "kuài yīdiǎnr zǒu",
         "hv": "khoái nhất điểm _ tẩu"
        },
        {
         "t": "不然就来不及了",
         "ico": "⏰",
         "c": "o",
         "py": "bùrán jiù láibují le",
         "hv": "bất nhiên _ lai bất cập liễu"
        }
       ],
       "traceWord": "不然",
       "py": "Wǒmen kuài yīdiǎnr zǒu bùrán jiù láibují le",
       "traceKey": "buran"
      },
      {
       "scene": "😄👦✨",
       "full": "他高兴得像孩子似的",
       "vi": "Anh ấy vui như một đứa trẻ vậy",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "高兴得",
         "ico": "😄",
         "c": "v",
         "py": "gāoxìng dé",
         "hv": "cao hưng đắc"
        },
        {
         "t": "像孩子似的",
         "ico": "👦",
         "c": "o",
         "py": "xiàng háizi shìde",
         "hv": "tượng hài tí tự đích"
        }
       ],
       "traceWord": "似的",
       "py": "Tā gāoxìng dé xiàng háizi shìde",
       "traceKey": "shide"
      },
      {
       "scene": "🧑🤝⏳",
       "full": "他想参加然而无法安排时间",
       "vi": "Anh ấy muốn tham gia nhưng không thể sắp xếp được thời gian",
       "parts": [
        {
         "t": "他想参加",
         "ico": "🧑",
         "c": "s",
         "py": "tā xiǎng cānjiā",
         "hv": "tha tưởng tham gia"
        },
        {
         "t": "然而无法",
         "ico": "🚫",
         "c": "v",
         "py": "rán'ér wúfǎ",
         "hv": "nhiên _ vô pháp"
        },
        {
         "t": "安排时间",
         "ico": "🗓️",
         "c": "o",
         "py": "ānpái shíjiān",
         "hv": "an bài thì gian"
        }
       ],
       "traceWord": "然而",
       "py": "Tā xiǎng cānjiā rán'ér wúfǎ ānpái shíjiān",
       "traceKey": "raner"
      }
     ],
     "qaList": [
      {
       "q": "昨天下雨了，你们怎么办？",
       "qvi": "Hôm qua trời mưa, các bạn làm thế nào?",
       "scene": "🌧️🏠",
       "ans": "于是我们在家开会了",
       "opts": [
        {
         "txt": "你要不去我就自己去",
         "ico": "🏢",
         "py": "Nǐ yào bú qù wǒ jiù zìjǐ qù"
        },
        {
         "txt": "于是我们在家开会了",
         "ico": "💻",
         "py": "Yúshì wǒmen zàijiā kāihuì le"
        },
        {
         "txt": "他喜欢吃面条儿",
         "ico": "🍜",
         "py": "Tā xǐhuan chī miàntiáor"
        }
       ],
       "qpy": "Zuótiān xià yǔ le nǐmen zěnme bàn?"
      },
      {
       "q": "你为什么这么着急？",
       "qvi": "Sao bạn gấp thế?",
       "scene": "😰⏰",
       "ans": "我得快点儿回去否则就晚了",
       "opts": [
        {
         "txt": "我们在北京买了东西",
         "ico": "🛍️",
         "py": "Wǒmen zài Běijīng mǎi le dōngxi"
        },
        {
         "txt": "他喜欢喝咖啡和茶",
         "ico": "☕",
         "py": "Tā xǐhuan hē kāfēi hé chá"
        },
        {
         "txt": "我得快点儿回去否则就晚了",
         "ico": "🏃",
         "py": "Wǒ dé kuài diǎnr huíqù fǒuzé jiù wǎn le"
        }
       ],
       "qpy": "Nǐ wèi shénme zhème zháojí?"
      },
      {
       "q": "他的汉语怎么这么流利？",
       "qvi": "Tiếng Hán của anh ấy sao lưu loát thế?",
       "scene": "🗣️🇨🇳",
       "ans": "他学了三年汉语才说得这么好",
       "opts": [
        {
         "txt": "他今年二十岁了",
         "ico": "🎂",
         "py": "Tā jīnnián èr shí suì le"
        },
        {
         "txt": "我们明天一起去公司",
         "ico": "🏢",
         "py": "Wǒmen míngtiān yīqǐ qù gōngsī"
        },
        {
         "txt": "他学了三年汉语才说得这么好",
         "ico": "📚",
         "py": "Tā xué le sān nián Hànyǔ cái shuō dé zhème hǎo"
        }
       ],
       "qpy": "Tā de Hànyǔ zěnme zhème liúlì?"
      },
      {
       "q": "他每次都准时到，你觉得他怎么样？",
       "qvi": "Lần nào anh ấy cũng đến đúng giờ, bạn thấy anh ấy thế nào?",
       "scene": "⏰👍",
       "ans": "可见他是一个认真的人",
       "opts": [
        {
         "txt": "可见他是一个认真的人",
         "ico": "👍",
         "py": "Kějiàn tā shì yī gè rènzhēn de rén"
        },
        {
         "txt": "他昨天没有来",
         "ico": "🚫",
         "py": "Tā zuótiān méiyǒu lái"
        },
        {
         "txt": "他是我们的老师",
         "ico": "👨‍🏫",
         "py": "Tā shì wǒmen de lǎoshī"
        }
       ],
       "qpy": "Tā měi cì dōu zhǔnshí dào nǐ juéde tā zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Thuyết phục đồng nghiệp đi họp dù thời tiết xấu",
      "steps": [
       "<b>Bước 1:</b> Nhắn tin cho đồng nghiệp, nói rằng bạn sẽ đến công ty dù thời tiết thế nào: <i>\"不管天气好不好我都去上班\"</i>.",
       "<b>Bước 2:</b> Đặt phương án dự phòng cho cuộc họp, tự nói thành tiếng: <i>\"假如明天下雨我们就在家开会\"</i>.",
       "<b>Bước 3:</b> Nhắc đồng nghiệp xuất phát sớm và nêu hậu quả: <i>\"我们快一点儿走不然就来不及了\"</i>. Sau đó tự đặt thêm 3 câu với 无论 và 哪怕 về công việc của chính bạn."
      ]
     }
    },
    {
     "id": "4.21B",
     "name": "Bài 4.21B: Miêu tả và diễn đạt linh hoạt",
     "grammar": {
      "formulas": [
       "💡 既然 + 🧑 你喜欢 + ✅ 就 + 🛍️ 买这件二手衣服",
       "💡 既然 + 👥 大家都到了 + ✅ 就 + 📋 开始点名",
       "🛑 既然 + 🧑 你已经知道了 + ✅ 就 + 🚫 别再问"
      ],
      "tip": "既然 (jìrán, ký nhiên) nêu một sự thật đã rõ, vế sau dùng 就 để đưa ra kết luận hoặc đề nghị: đã... thì... Vế sau thường là lời khuyên, quyết định (就买, 就开始, 就别再问).",
      "vn_tip": "Người Việt hay dịch \"đã... thì\" thành 如果……就 hoặc bỏ 就. Nhớ: 既然 dùng cho việc đã xảy ra/đã biết, còn 如果 và 假如 dùng cho giả thiết chưa xảy ra. Vế sau bắt buộc có 就 để câu tự nhiên."
     },
     "chunks": [
      {
       "scene": "🧑🛍️👕",
       "full": "既然你喜欢就买这件二手衣服吧",
       "vi": "Đã thích thì mua chiếc áo cũ này đi",
       "parts": [
        {
         "t": "既然你喜欢",
         "ico": "😍",
         "c": "s",
         "py": "jìrán nǐ xǐhuan",
         "hv": "_ nhiên nể hỉ hoan"
        },
        {
         "t": "就买",
         "ico": "🛍️",
         "c": "v",
         "py": "jiù mǎi",
         "hv": "_ mãi"
        },
        {
         "t": "这件二手衣服吧",
         "ico": "👕",
         "c": "o",
         "py": "zhè jiàn èrshǒu yīfu ba",
         "hv": "_ kiện nhì thủ y phục và"
        }
       ],
       "traceWord": "二手",
       "py": "Jìrán nǐ xǐhuan jiù mǎi zhè jiàn èrshǒu yīfu ba",
       "traceKey": "ershou"
      },
      {
       "scene": "👨‍🏫👥📋",
       "full": "既然大家都到了老师就开始点名",
       "vi": "Đã đến đủ cả rồi thì thầy giáo bắt đầu điểm danh",
       "parts": [
        {
         "t": "既然大家都到了",
         "ico": "👥",
         "c": "s",
         "py": "jìrán dàjiā dōu dào le",
         "hv": "_ nhiên đại gia đô đáo liễu"
        },
        {
         "t": "老师就开始",
         "ico": "👨‍🏫",
         "c": "v",
         "py": "lǎoshī jiù kāishǐ",
         "hv": "lão sư _ khai thuỷ"
        },
        {
         "t": "点名",
         "ico": "📋",
         "c": "o",
         "py": "diǎnmíng",
         "hv": "điểm danh"
        }
       ],
       "traceWord": "点名",
       "py": "Jìrán dàjiā dōu dào le lǎoshī jiù kāishǐ diǎnmíng",
       "traceKey": "dianming"
      },
      {
       "scene": "🧑🤫🙅",
       "full": "既然这件事归我管就别再问他了",
       "vi": "Đã là việc tôi phụ trách thì đừng hỏi anh ấy nữa",
       "parts": [
        {
         "t": "既然这件事归我管",
         "ico": "💡",
         "c": "s",
         "py": "jìrán zhè jiàn shì guī wǒ guǎn",
         "hv": "_ nhiên _ kiện sự _ ngã quản"
        },
        {
         "t": "就别再问",
         "ico": "🙅",
         "c": "v",
         "py": "jiù bié zài wèn",
         "hv": "_ _ tái _"
        },
        {
         "t": "他了",
         "ico": "🧑",
         "c": "o",
         "py": "tā le",
         "hv": "tha liễu"
        }
       ],
       "traceWord": "归",
       "py": "Jìrán zhè jiàn shì guī wǒ guǎn jiù bié zài wèn tā le",
       "traceKey": "gui"
      },
      {
       "scene": "💼😐🔁",
       "full": "这份工作很单调但是他不觉得无聊",
       "vi": "Công việc này rất đơn điệu nhưng anh ấy không thấy chán",
       "parts": [
        {
         "t": "这份工作",
         "ico": "💼",
         "c": "s",
         "py": "zhè fèn gōngzuò",
         "hv": "_ phần công tác"
        },
        {
         "t": "很单调",
         "ico": "🔁",
         "c": "v",
         "py": "hěn dāndiào",
         "hv": "_ đơn điều"
        },
        {
         "t": "但是他不觉得无聊",
         "ico": "😐",
         "c": "o",
         "py": "dànshì tā bù juéde wúliáo",
         "hv": "_ thị tha bất giác đắc vô _"
        }
       ],
       "traceWord": "单调",
       "py": "Zhè fèn gōngzuò hěn dāndiào dànshì tā bù juéde wúliáo",
       "traceKey": "dandiao"
      },
      {
       "scene": "🎨🖌️⏳",
       "full": "他的业余爱好是画画儿",
       "vi": "Sở thích ngoài giờ của anh ấy là vẽ tranh",
       "parts": [
        {
         "t": "他的业余爱好",
         "ico": "🎨",
         "c": "s",
         "py": "tā de yèyú àihào",
         "hv": "tha đích nghiệp dư _ háo"
        },
        {
         "t": "是",
         "ico": "⚡",
         "c": "v",
         "py": "shì",
         "hv": "thị"
        },
        {
         "t": "画画儿",
         "ico": "🖌️",
         "c": "o",
         "py": "huà huàr",
         "hv": "hoạ hoạ _"
        }
       ],
       "traceWord": "业余",
       "py": "Tā de yèyú àihào shì huà huàr",
       "traceKey": "yeyu"
      },
      {
       "scene": "🧑🗣️✈️",
       "full": "请你描述这次旅行的经过",
       "vi": "Xin bạn miêu tả diễn biến của chuyến du lịch lần này",
       "parts": [
        {
         "t": "请你",
         "ico": "🧑",
         "c": "s",
         "py": "qǐng nǐ",
         "hv": "thỉnh nể"
        },
        {
         "t": "描述",
         "ico": "🗣️",
         "c": "v",
         "py": "miáoshù",
         "hv": "miêu thuật"
        },
        {
         "t": "这次旅行的经过",
         "ico": "✈️",
         "c": "o",
         "py": "zhè cì lǚxíng de jīngguò",
         "hv": "_ thứ lữ hàng đích kinh quá"
        }
       ],
       "traceWord": "描述",
       "py": "Qǐng nǐ miáoshù zhè cì lǚxíng de jīngguò",
       "traceKey": "miaoshu"
      },
      {
       "scene": "📖🏞️✍️",
       "full": "这本小说对风景的描写非常生动",
       "vi": "Cuốn tiểu thuyết này miêu tả phong cảnh rất sinh động",
       "parts": [
        {
         "t": "这本小说对风景的描写",
         "ico": "📖",
         "c": "s",
         "py": "zhè běn xiǎoshuō duì fēngjǐng de miáoxiě",
         "hv": "_ bản tiểu _ đỗi phong cảnh đích miêu tả"
        },
        {
         "t": "非常",
         "ico": "✨",
         "c": "v",
         "py": "fēicháng",
         "hv": "phi thường"
        },
        {
         "t": "生动",
         "ico": "🏞️",
         "c": "o",
         "py": "shēngdòng",
         "hv": "sinh động"
        }
       ],
       "traceWord": "描写",
       "py": "Zhè běn xiǎoshuō duì fēngjǐng de miáoxiě fēicháng shēngdòng",
       "traceKey": "miaoxie"
      },
      {
       "scene": "🏆🧑💪",
       "full": "他成功的原因在于他一直很努力",
       "vi": "Nguyên nhân thành công của anh ấy nằm ở chỗ anh ấy luôn rất nỗ lực",
       "parts": [
        {
         "t": "他成功的原因",
         "ico": "🏆",
         "c": "s",
         "py": "tā chénggōng de yuányīn",
         "hv": "tha thành công đích nguyên nhân"
        },
        {
         "t": "在于",
         "ico": "📍",
         "c": "v",
         "py": "zàiyú",
         "hv": "tại vu"
        },
        {
         "t": "他一直很努力",
         "ico": "💪",
         "c": "o",
         "py": "tā yīzhí hěn nǔlì",
         "hv": "tha nhất _ _ _ lực"
        }
       ],
       "traceWord": "在于",
       "py": "Tā chénggōng de yuányīn zàiyú tā yīzhí hěn nǔlì",
       "traceKey": "zaiyu"
      }
     ],
     "qaList": [
      {
       "q": "这个孩子怎么样？",
       "qvi": "Đứa trẻ này thế nào?",
       "scene": "👦🙂",
       "ans": "他很单纯也很可爱",
       "opts": [
        {
         "txt": "我们周末去公园赏花",
         "ico": "🌸",
         "py": "Wǒmen zhōumò qù gōngyuán shǎng huā"
        },
        {
         "txt": "他很单纯也很可爱",
         "ico": "👦",
         "py": "Tā hěn dānchún yě hěn kě'ài"
        },
        {
         "txt": "他喜欢吃中餐",
         "ico": "🥢",
         "py": "Tā xǐhuan chī zhōngcān"
        }
       ],
       "qpy": "Zhè gè háizi zěnmeyàng?"
      },
      {
       "q": "你怎么形容你的新同事？",
       "qvi": "Bạn miêu tả đồng nghiệp mới của mình thế nào?",
       "scene": "🧑‍💼🗣️",
       "ans": "他热情又认真",
       "opts": [
        {
         "txt": "他在楼下",
         "ico": "⬇️",
         "py": "Tā zài lóu xià"
        },
        {
         "txt": "我们下周开会",
         "ico": "📅",
         "py": "Wǒmen xià zhōu kāihuì"
        },
        {
         "txt": "他热情又认真",
         "ico": "🤝",
         "py": "Tā rèqíng yòu rènzhēn"
        }
       ],
       "qpy": "Nǐ zěnme xíngróng nǐ de xīn tóngshì?"
      },
      {
       "q": "这件衣服你花了多少钱？",
       "qvi": "Chiếc áo này bạn tốn bao nhiêu tiền?",
       "scene": "👕💰",
       "ans": "我花了一百块",
       "opts": [
        {
         "txt": "这张桌子是方的",
         "ico": "🪑",
         "py": "Zhè zhāng zhuōzi shì fāng de"
        },
        {
         "txt": "我花了一百块",
         "ico": "💰",
         "py": "Wǒ huā le yī bǎi kuài"
        },
        {
         "txt": "我昨天买的",
         "ico": "🛍️",
         "py": "Wǒ zuótiān mǎi de"
        }
       ],
       "qpy": "Zhè jiàn yīfu nǐ huā le duōshao qián?"
      },
      {
       "q": "你们公司的新产品怎么样？",
       "qvi": "Sản phẩm mới của công ty các bạn thế nào?",
       "scene": "🏢📦👍",
       "ans": "经理很赞赏其余的人也做得不错",
       "opts": [
        {
         "txt": "我昨天没有去上班",
         "ico": "🚫",
         "py": "Wǒ zuótiān méiyǒu qù shàngbān"
        },
        {
         "txt": "我们下周开会",
         "ico": "📅",
         "py": "Wǒmen xià zhōu kāihuì"
        },
        {
         "txt": "经理很赞赏其余的人也做得不错",
         "ico": "👍",
         "py": "Jīnglǐ hěn zànshǎng qíyú de rén yě zuò dé bùcuò"
        }
       ],
       "qpy": "Nǐmen gōngsī de xīn chǎnpǐn zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Quyết định mua đồ và điểm danh buổi họp nhóm",
      "steps": [
       "<b>Bước 1:</b> Đi chợ đồ cũ hoặc xem ảnh đồ cũ trên mạng, tự nói thành tiếng: <i>\"既然你喜欢就买这件二手衣服吧\"</i>, rồi tự hỏi giá bằng tiếng Trung.",
       "<b>Bước 2:</b> Giả làm trưởng nhóm trước buổi họp: <i>\"既然大家都到了老师就开始点名\"</i>, thay 老师 bằng chức danh của bạn.",
       "<b>Bước 3:</b> Nhờ một đồng nghiệp miêu tả chuyến công tác gần nhất: <i>\"请你描述这次旅行的经过\"</i>, rồi đặt thêm 3 câu với 既然……就…… về chính công việc của bạn."
      ]
     }
    },
    {
     "id": "4.21C",
     "name": "Bài 4.21C: Từ đa nghĩa, lượng từ và đo lường",
     "grammar": {
      "formulas": [
       "🧑 你 + ⚡ 要系好 + 👟 鞋带 + ⚠️ 否则容易受伤",
       "📦 行李重量 + ⚖️ 不能超过 + 🔢 二十公斤否则要交费",
       "📏 你 + 先用尺子量一量 + ⚠️ 否则买不到合适的桌子"
      ],
      "tip": "否则 (fǒuzé, phủ tắc) = nếu không thì, đứng đầu vế sau, nêu hậu quả xấu nếu không làm theo vế trước. Vế trước thường là lời nhắc, quy định hoặc yêu cầu (要……, 不能……, 先……). Với số đo: 公斤 (kg), 厘米 (cm), 平方米 (m²), đặt số + đơn vị đứng sau động từ hoặc tính từ (长八十厘米).",
      "vn_tip": "Người Việt hay đặt 否则 ở cuối câu, hoặc dùng cả \"如果不……就……\" quá dài. Hãy nhớ: nêu việc cần làm trước, rồi 否则 + hậu quả. Đừng nhầm 否则 (nếu không thì) với 虽然 (tuy)."
     },
     "chunks": [
      {
       "scene": "👟🧑⚠️",
       "full": "你要系好鞋带否则容易受伤",
       "vi": "Bạn phải buộc chặt dây giày, nếu không dễ bị thương",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "要系好",
         "ico": "👟",
         "c": "v",
         "py": "yào xì hǎo",
         "hv": "yếu hệ háo"
        },
        {
         "t": "鞋带否则容易受伤",
         "ico": "⚠️",
         "c": "o",
         "py": "xié dài fǒuzé róngyì shòushāng",
         "hv": "hài đai bĩ tắc dung dịch thụ thương"
        }
       ],
       "traceWord": "系",
       "py": "Nǐ yào xì hǎo xié dài fǒuzé róngyì shòushāng",
       "traceKey": "xi"
      },
      {
       "scene": "🗺️📜🙏",
       "full": "请把这张地图卷起来否则容易弄坏",
       "vi": "Xin hãy cuộn tấm bản đồ này lại, nếu không dễ làm hỏng",
       "parts": [
        {
         "t": "请把这张地图",
         "ico": "🗺️",
         "c": "s",
         "py": "qǐng bǎ zhè zhāng dìtú",
         "hv": "thỉnh bã _ trương địa đồ"
        },
        {
         "t": "卷起来",
         "ico": "📜",
         "c": "v",
         "py": "juǎn qǐlái",
         "hv": "quyển khởi lai"
        },
        {
         "t": "否则容易弄坏",
         "ico": "⚠️",
         "c": "o",
         "py": "fǒuzé róngyì nòng huài",
         "hv": "bĩ tắc dung dịch lộng hoại"
        }
       ],
       "traceWord": "卷",
       "py": "Qǐng bǎ zhè zhāng dìtú juǎn qǐlái fǒuzé róngyì nòng huài",
       "traceKey": "juan"
      },
      {
       "scene": "🧑🔄🏃⏰",
       "full": "他必须马上转身走否则会迟到",
       "vi": "Anh ấy phải lập tức quay người đi, nếu không sẽ bị muộn",
       "parts": [
        {
         "t": "他",
         "ico": "🧑",
         "c": "s",
         "py": "tā",
         "hv": "tha"
        },
        {
         "t": "必须马上转身走",
         "ico": "🔄",
         "c": "v",
         "py": "bìxū mǎshàng zhuǎnshēn zǒu",
         "hv": "tất tua mã thượng chuyển thân tẩu"
        },
        {
         "t": "否则会迟到",
         "ico": "⏰",
         "c": "o",
         "py": "fǒuzé huì chídào",
         "hv": "bĩ tắc hội trì đáo"
        }
       ],
       "traceWord": "转身",
       "py": "Tā bìxū mǎshàng zhuǎnshēn zǒu fǒuzé huì chídào",
       "traceKey": "zhuanshen"
      },
      {
       "scene": "🧳⚖️💳",
       "full": "行李重量不能超过二十公斤否则要交费",
       "vi": "Hành lý không được vượt quá hai mươi ký, nếu không phải trả phí",
       "parts": [
        {
         "t": "行李重量",
         "ico": "🧳",
         "c": "s",
         "py": "xíngli zhòngliàng",
         "hv": "hàng lí trọng _"
        },
        {
         "t": "不能超过",
         "ico": "⚖️",
         "c": "v",
         "py": "bù néng chāoguò",
         "hv": "bất năng siêu quá"
        },
        {
         "t": "二十公斤否则要交费",
         "ico": "💳",
         "c": "o",
         "py": "èr shí gōngjīn fǒuzé yào jiāofèi",
         "hv": "nhì thập công cân bĩ tắc yếu giao phí"
        }
       ],
       "traceWord": "重量",
       "py": "Xíngli zhòngliàng bù néng chāoguò èr shí gōngjīn fǒuzé yào jiāofèi",
       "traceKey": "zhongliang"
      },
      {
       "scene": "🏠📐🛏️",
       "full": "这个房间至少要有二十平方米否则住不下",
       "vi": "Căn phòng này ít nhất phải rộng hai mươi mét vuông, nếu không ở không đủ chỗ",
       "parts": [
        {
         "t": "这个房间",
         "ico": "🏠",
         "c": "s",
         "py": "zhè gè fángjiān",
         "hv": "_ cá phòng gian"
        },
        {
         "t": "至少要有",
         "ico": "📐",
         "c": "v",
         "py": "zhìshǎo yào yǒu",
         "hv": "chí thiểu yếu hữu"
        },
        {
         "t": "二十平方米否则住不下",
         "ico": "🛏️",
         "c": "o",
         "py": "èr shí píngfāng mǐ fǒuzé zhù bú xià",
         "hv": "nhì thập bình phương _ bĩ tắc trú bất hạ"
        }
       ],
       "traceWord": "平方",
       "py": "Zhè gè fángjiān zhìshǎo yào yǒu èr shí píngfāng mǐ fǒuzé zhù bú xià",
       "traceKey": "pingfang"
      },
      {
       "scene": "📏🪑🛒",
       "full": "你先用尺子量一量否则买不到合适的桌子",
       "vi": "Bạn hãy dùng thước đo trước, nếu không sẽ mua không được cái bàn vừa",
       "parts": [
        {
         "t": "你",
         "ico": "🧑",
         "c": "s",
         "py": "nǐ",
         "hv": "nể"
        },
        {
         "t": "先用尺子量一量",
         "ico": "📏",
         "c": "v",
         "py": "xiān yòng chǐzi liáng yī liáng",
         "hv": "tiên dụng xích tí _ nhất _"
        },
        {
         "t": "否则买不到合适的桌子",
         "ico": "🪑",
         "c": "o",
         "py": "fǒuzé mǎi bú dào héshì de zhuōzi",
         "hv": "bĩ tắc mãi bất đáo hợp thích đích _ tí"
        }
       ],
       "traceWord": "量",
       "py": "Nǐ xiān yòng chǐzi liáng yī liáng fǒuzé mǎi bú dào héshì de zhuōzi",
       "traceKey": "liang"
      },
      {
       "scene": "👖👎🛍️",
       "full": "衣服别买太松的否则不好看",
       "vi": "Quần áo đừng mua loại quá rộng, nếu không trông không đẹp",
       "parts": [
        {
         "t": "衣服",
         "ico": "👖",
         "c": "s",
         "py": "yīfu",
         "hv": "y phục"
        },
        {
         "t": "别买太松的",
         "ico": "🛍️",
         "c": "v",
         "py": "bié mǎi tài sōng de",
         "hv": "_ mãi thái tùng đích"
        },
        {
         "t": "否则不好看",
         "ico": "👎",
         "c": "o",
         "py": "fǒuzé bù hǎokàn",
         "hv": "bĩ tắc bất háo khán"
        }
       ],
       "traceWord": "松",
       "py": "Yīfu bié mǎi tài sōng de fǒuzé bù hǎokàn",
       "traceKey": "song"
      },
      {
       "scene": "🤝👥🚪",
       "full": "会议结束后大家要马上散会否则影响下一个会议",
       "vi": "Sau khi họp xong mọi người phải giải tán ngay, nếu không sẽ ảnh hưởng cuộc họp tiếp theo",
       "parts": [
        {
         "t": "会议结束后大家",
         "ico": "👥",
         "c": "s",
         "py": "huìyì jiéshù hòu dàjiā",
         "hv": "hội nghị kết thút hậu đại gia"
        },
        {
         "t": "要马上散会",
         "ico": "🚪",
         "c": "v",
         "py": "yào mǎshàng sàn huì",
         "hv": "yếu mã thượng tản hội"
        },
        {
         "t": "否则影响下一个会议",
         "ico": "🤝",
         "c": "o",
         "py": "fǒuzé yǐngxiǎng xià yī gè huìyì",
         "hv": "bĩ tắc ảnh hướng hạ nhất cá hội nghị"
        }
       ],
       "traceWord": "散",
       "py": "Huìyì jiéshù hòu dàjiā yào mǎshàng sàn huì fǒuzé yǐngxiǎng xià yī gè huìyì",
       "traceKey": "san"
      }
     ],
     "qaList": [
      {
       "q": "这个项目什么时候完成？",
       "qvi": "Dự án này khi nào hoàn thành?",
       "scene": "📋⏰",
       "ans": "月末完成",
       "opts": [
        {
         "txt": "这棵树上结了很多苹果",
         "ico": "🍎",
         "py": "Zhè kē shù shàng jié le hěn duō píngguǒ"
        },
        {
         "txt": "他是我们的经理",
         "ico": "👔",
         "py": "Tā shì wǒmen de jīnglǐ"
        },
        {
         "txt": "月末完成",
         "ico": "📅",
         "py": "Yuè mò wánchéng"
        }
       ],
       "qpy": "Zhè gè xiàngmù shénme shíhou wánchéng?"
      },
      {
       "q": "你想买什么样的帽子？",
       "qvi": "Bạn muốn mua loại mũ nào?",
       "scene": "🧢🛍️",
       "ans": "我想买一顶白色的",
       "opts": [
        {
         "txt": "我想买一件红色的衣服",
         "ico": "👕",
         "py": "Wǒ xiǎng mǎi yī jiàn hóngsè de yīfu"
        },
        {
         "txt": "我想买一顶白色的",
         "ico": "🧢",
         "py": "Wǒ xiǎng mǎi yī dǐng báisè de"
        },
        {
         "txt": "我想去海边玩儿",
         "ico": "🏖️",
         "py": "Wǒ xiǎng qù hǎi biān wánr"
        }
       ],
       "qpy": "Nǐ xiǎng mǎi shénmeyàng de màozi?"
      },
      {
       "q": "这个箱子有多长？",
       "qvi": "Chiếc vali này dài bao nhiêu?",
       "scene": "📦📏",
       "ans": "它长八十厘米",
       "opts": [
        {
         "txt": "我买了两箱水",
         "ico": "📦",
         "py": "Wǒ mǎi le liǎng xiāng shuǐ"
        },
        {
         "txt": "它长八十厘米",
         "ico": "📏",
         "py": "Tā cháng bā shí límǐ"
        },
        {
         "txt": "它很好吃",
         "ico": "🍽️",
         "py": "Tā hěn hǎochī"
        }
       ],
       "qpy": "Zhè gè xiāngzi yǒu duō cháng?"
      },
      {
       "q": "这双鞋你穿着怎么样？",
       "qvi": "Đôi giày này bạn đi thấy thế nào?",
       "scene": "👟🤔",
       "ans": "太松了我想换小一点儿的",
       "opts": [
        {
         "txt": "那个杯子是空的",
         "ico": "🥛",
         "py": "Nà gè bēizi shì kōng de"
        },
        {
         "txt": "这块布长三尺",
         "ico": "📏",
         "py": "Zhè kuài bù cháng sān chǐ"
        },
        {
         "txt": "太松了我想换小一点儿的",
         "ico": "👟",
         "py": "Tài sōng le wǒ xiǎng huàn xiǎo yīdiǎnr de"
        }
       ],
       "qpy": "Zhè shuāng xié nǐ chuān zhe zěnmeyàng?"
      }
     ],
     "realTask": {
      "title": "Tình huống thực tế (12 phút): Chuẩn bị hành lý và đo đạc đồ đạc",
      "steps": [
       "<b>Bước 1:</b> Soạn vali cho chuyến công tác, cân thử rồi tự nói thành tiếng: <i>\"行李重量不能超过二十公斤否则要交费\"</i>.",
       "<b>Bước 2:</b> Dùng thước đo một món đồ trong nhà (bàn, tủ) và nói kích thước bằng tiếng Trung với 厘米; nhắc bản thân: <i>\"你先用尺子量一量否则买不到合适的桌子\"</i>.",
       "<b>Bước 3:</b> Nhắn tin hẹn đồng nghiệp cuối tuần: <i>\"周末你有空儿就一起去散步否则在家休息\"</i>, rồi tự đặt thêm 3 câu với 否则 về công việc hằng ngày của bạn."
      ]
     }
    }
   ]
  }
 }
};
