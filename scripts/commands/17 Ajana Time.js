module.exports.config = {
  name: "ajan",
  version: "2.0",
  Permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix : true,
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "05:55 AM": {
      message: "___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 :)>( 💚 \n\n____জীবনটা বই এর পাতার মতো! 🙂\nযতই উলটাবে ততই নতুন কিছু শিখবে-!!😊",
"🐹!<𝘼𝙙𝙤𝙪𝙩 𝙏𝙝𝙞𝙨 𝙇𝙞𝙣𝙚 🍒✨. ! সৌন্দর্য খুঁজে কি লাভ,,,নিজের ছায়া টাই তো কালো ->3🌸🙂",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂",
"🥰🥀 \nলাইফে এমন একজন থাকুক! \n যে কখনো আমার উপর বিরক্ত হবে না!🖤🌸",
"🌺🌻___ দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀❤️",
"✨🌺__রাগি মানুষের ভালোবাসা অসম্ভব সুন্দর__🖤_🌸✨\n__কিন্তু সেইটা বুঝার ক্ষমতা সবার থাকেনা_❤️🥀",
"🦋🥀💞__𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚__🥀💞🦋\n___ছুয়ে দেখা'র সাধ্য নাই , অনুভবে রাখি তোমারে..!😇 \nদূরত্ব যতই হোক আমি ভীষণ ভালোবাসি তোমারে.🌻✨🦋",
"-!<𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর নয় বিশ্বাসী হতে হয়____🐰🍒🌸",
"🕊️🌺হয়তো অভিমান করে কথা বলবে না🙂\n– তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕🦚",
 "__🌺!!-🌻___দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀𖠺🥀❤️",
"🍒🌿 মায়া! লাগলে 🥺 \n 𝗜𝗻𝗯𝗼𝘅 a গুতা মাইরো 🙈",
 "____স্পর্শে নয় অনুভবেও  ভালোবাসা যায়-!!🙂🌸\n____হোক না দূরত্ব তাতে  কি আসে যায়-!!🖤🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 𝐁𝐛𝐳:)>(🧡🦋\n__۵-প্রিয় থেকে যাও আমার হয়ে 🥺💜🌸- \n আমি রেখে দিব তোমাকে আমার করে!>33🐼🖤🍒 ",
      url: "https://i.imgur.com/ExHFW9D.mp4"
    },
"12:55 PM": {
      message: "___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 :)>( 💚 \n\n____জীবনটা বই এর পাতার মতো! 🙂\nযতই উলটাবে ততই নতুন কিছু শিখবে-!!😊",
"🐹!<𝘼𝙙𝙤𝙪𝙩 𝙏𝙝𝙞𝙨 𝙇𝙞𝙣𝙚 🍒✨. ! সৌন্দর্য খুঁজে কি লাভ,,,নিজের ছায়া টাই তো কালো ->3🌸🙂",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂",
"🥰🥀 \nলাইফে এমন একজন থাকুক! \n যে কখনো আমার উপর বিরক্ত হবে না!🖤🌸",
"🌺🌻___ দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀❤️",
"✨🌺__রাগি মানুষের ভালোবাসা অসম্ভব সুন্দর__🖤_🌸✨\n__কিন্তু সেইটা বুঝার ক্ষমতা সবার থাকেনা_❤️🥀",
"🦋🥀💞__𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚__🥀💞🦋\n___ছুয়ে দেখা'র সাধ্য নাই , অনুভবে রাখি তোমারে..!😇 \nদূরত্ব যতই হোক আমি ভীষণ ভালোবাসি তোমারে.🌻✨🦋",
"-!<𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর নয় বিশ্বাসী হতে হয়____🐰🍒🌸",
"🕊️🌺হয়তো অভিমান করে কথা বলবে না🙂\n– তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕🦚",
 "__🌺!!-🌻___দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀𖠺🥀❤️",
"🍒🌿 মায়া! লাগলে 🥺 \n 𝗜𝗻𝗯𝗼𝘅 a গুতা মাইরো 🙈",
 "____স্পর্শে নয় অনুভবেও  ভালোবাসা যায়-!!🙂🌸\n____হোক না দূরত্ব তাতে  কি আসে যায়-!!🖤🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 𝐁𝐛𝐳:)>(🧡🦋\n__۵-প্রিয় থেকে যাও আমার হয়ে 🥺💜🌸- \n আমি রেখে দিব তোমাকে আমার করে!>33🐼🖤🍒 ",
      url: "https://i.imgur.com/KC4Nh0u.mp4"
    },
    "04:45 PM": {
      message: "___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 :)>( 💚 \n\n____জীবনটা বই এর পাতার মতো! 🙂\nযতই উলটাবে ততই নতুন কিছু শিখবে-!!😊",
"🐹!<𝘼𝙙𝙤𝙪𝙩 𝙏𝙝𝙞𝙨 𝙇𝙞𝙣𝙚 🍒✨. ! সৌন্দর্য খুঁজে কি লাভ,,,নিজের ছায়া টাই তো কালো ->3🌸🙂",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂",
"🥰🥀 \nলাইফে এমন একজন থাকুক! \n যে কখনো আমার উপর বিরক্ত হবে না!🖤🌸",
"🌺🌻___ দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀❤️",
"✨🌺__রাগি মানুষের ভালোবাসা অসম্ভব সুন্দর__🖤_🌸✨\n__কিন্তু সেইটা বুঝার ক্ষমতা সবার থাকেনা_❤️🥀",
"🦋🥀💞__𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚__🥀💞🦋\n___ছুয়ে দেখা'র সাধ্য নাই , অনুভবে রাখি তোমারে..!😇 \nদূরত্ব যতই হোক আমি ভীষণ ভালোবাসি তোমারে.🌻✨🦋",
"-!<𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর নয় বিশ্বাসী হতে হয়____🐰🍒🌸",
"🕊️🌺হয়তো অভিমান করে কথা বলবে না🙂\n– তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕🦚",
 "__🌺!!-🌻___দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀𖠺🥀❤️",
"🍒🌿 মায়া! লাগলে 🥺 \n 𝗜𝗻𝗯𝗼𝘅 a গুতা মাইরো 🙈",
 "____স্পর্শে নয় অনুভবেও  ভালোবাসা যায়-!!🙂🌸\n____হোক না দূরত্ব তাতে  কি আসে যায়-!!🖤🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 𝐁𝐛𝐳:)>(🧡🦋\n__۵-প্রিয় থেকে যাও আমার হয়ে 🥺💜🌸- \n আমি রেখে দিব তোমাকে আমার করে!>33🐼🖤🍒 ",
      url: "https://i.imgur.com/aPrzSns.mp4"
    },
    "06:50 PM": {
      message: "___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 :)>( 💚 \n\n____জীবনটা বই এর পাতার মতো! 🙂\nযতই উলটাবে ততই নতুন কিছু শিখবে-!!😊",
"🐹!<𝘼𝙙𝙤𝙪𝙩 𝙏𝙝𝙞𝙨 𝙇𝙞𝙣𝙚 🍒✨. ! সৌন্দর্য খুঁজে কি লাভ,,,নিজের ছায়া টাই তো কালো ->3🌸🙂",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂",
"🥰🥀 \nলাইফে এমন একজন থাকুক! \n যে কখনো আমার উপর বিরক্ত হবে না!🖤🌸",
"🌺🌻___ দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀❤️",
"✨🌺__রাগি মানুষের ভালোবাসা অসম্ভব সুন্দর__🖤_🌸✨\n__কিন্তু সেইটা বুঝার ক্ষমতা সবার থাকেনা_❤️🥀",
"🦋🥀💞__𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚__🥀💞🦋\n___ছুয়ে দেখা'র সাধ্য নাই , অনুভবে রাখি তোমারে..!😇 \nদূরত্ব যতই হোক আমি ভীষণ ভালোবাসি তোমারে.🌻✨🦋",
"-!<𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর নয় বিশ্বাসী হতে হয়____🐰🍒🌸",
"🕊️🌺হয়তো অভিমান করে কথা বলবে না🙂\n– তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕🦚",
 "__🌺!!-🌻___দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀𖠺🥀❤️",
"🍒🌿 মায়া! লাগলে 🥺 \n 𝗜𝗻𝗯𝗼𝘅 a গুতা মাইরো 🙈",
 "____স্পর্শে নয় অনুভবেও  ভালোবাসা যায়-!!🙂🌸\n____হোক না দূরত্ব তাতে  কি আসে যায়-!!🖤🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 𝐁𝐛𝐳:)>(🧡🦋\n__۵-প্রিয় থেকে যাও আমার হয়ে 🥺💜🌸- \n আমি রেখে দিব তোমাকে আমার করে!>33🐼🖤🍒 ",
      url: "https://i.imgur.com/05HEHuY.mp4"
    },
    "08:30 PM": {
      message: "___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 :)>( 💚 \n\n____জীবনটা বই এর পাতার মতো! 🙂\nযতই উলটাবে ততই নতুন কিছু শিখবে-!!😊",
"🐹!<𝘼𝙙𝙤𝙪𝙩 𝙏𝙝𝙞𝙨 𝙇𝙞𝙣𝙚 🍒✨. ! সৌন্দর্য খুঁজে কি লাভ,,,নিজের ছায়া টাই তো কালো ->3🌸🙂",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂—সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎ —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂",
"🥰🥀 \nলাইফে এমন একজন থাকুক! \n যে কখনো আমার উপর বিরক্ত হবে না!🖤🌸",
"🌺🌻___ দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀❤️",
"✨🌺__রাগি মানুষের ভালোবাসা অসম্ভব সুন্দর__🖤_🌸✨\n__কিন্তু সেইটা বুঝার ক্ষমতা সবার থাকেনা_❤️🥀",
"🦋🥀💞__𝙩𝙝𝙞𝙨 𝘼𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚__🥀💞🦋\n___ছুয়ে দেখা'র সাধ্য নাই , অনুভবে রাখি তোমারে..!😇 \nদূরত্ব যতই হোক আমি ভীষণ ভালোবাসি তোমারে.🌻✨🦋",
"-!<𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর নয় বিশ্বাসী হতে হয়____🐰🍒🌸",
"🕊️🌺হয়তো অভিমান করে কথা বলবে না🙂\n– তবু সে সারাক্ষণ তোমাকেই মিস করবে.!💕🦚",
 "__🌺!!-🌻___দূরত্ব কিছুই না যদি___🦋●\n🌻__তোমার অনূভুতি \n আমার জন্য সত্যি হয়-🥀𖠺🥀❤️",
"🍒🌿 মায়া! লাগলে 🥺 \n 𝗜𝗻𝗯𝗼𝘅 a গুতা মাইরো 🙈",
 "____স্পর্শে নয় অনুভবেও  ভালোবাসা যায়-!!🙂🌸\n____হোক না দূরত্ব তাতে  কি আসে যায়-!!🖤🌺",
"🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞 𝐁𝐛𝐳:)>(🧡🦋\n__۵-প্রিয় থেকে যাও আমার হয়ে 🥺💜🌸- \n আমি রেখে দিব তোমাকে আমার করে!>33🐼🖤🍒 ",
      url: "https://i.imgur.com/Q26yXXi.mp4"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
