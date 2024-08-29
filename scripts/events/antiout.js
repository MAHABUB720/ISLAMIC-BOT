module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`দুঃখিত ${name} ব্লক করছে তাই এড করতে পারলাম না😞😞  \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝗠𝗮𝗵𝗮𝗯𝘂𝗯 𝗥𝗮𝗵𝗺𝗮𝗻 -----❖----:( `, event.threadID)
   } else api.sendMessage(`, ${name} 𝑯𝒂𝒔 𝒃𝒆𝒆𝒏 𝒓𝒆'𝒂𝒅𝒆𝒅 𝒕𝒐 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑..✔︎ \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝗠𝗮𝗵𝗮𝗯𝘂𝗯 𝗥𝗮𝗵𝗺𝗮𝗻 -----❖----`,

 event.threadID);
  })
 }
                     }
