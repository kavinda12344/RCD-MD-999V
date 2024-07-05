//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dKaHdsNGZ1TlNLazlUd2MvV0tGL3pJSzZTUFNFVWVQWGdqUTNVRllVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjhmWXY0eCtxVEhqYVZXbFA0b1ZBS3F0cHhXb2loNmRUZlF3c2h5RDJncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSjAxWGtNdXg3ekhjNHhWUVFiTXZxbDM3RnJJY0dDdk9RNXpucXhmQW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMLzV2T0h0aWY0cUdoU1EyNlFXam1XQVN0c24xM3BNSjBxaVp0akVXTlFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNSDZ0ZGs0MTZLZXJvTzF3dklCbCswY2tZYSs4Rmx6NmFLQWlQRnVaRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNtbmJvM0NKQjBWTGswU2ZWd01LV0poQ3hKdUxZb0R4SHpsNmloUENyajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JXcDk3M1U3K3poM1V6aENZSlg5ODZzS3RoZFRTZUxUWXRHUHF4SnhXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE4wV21UVTZVOXcvSmI3NFhWbzhlN2l0cDhZWE1uSzZnUG5ZUnJIMWZVaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB1OFo4bzNQVVZjWHRzUCtKK1p2UUpsbmdIa0VEOHlkREV3S2pzZ3drdmNGcUJCbFZobmlxR3lCREFQRWpwM3FPcTFyVnFoWTl6eXNEQzZzUEJQUGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IjlMdGVKL1FYbmR6UUpNcHZGU2E4bHFCMVBmbEh4aTk1RHVBUVBCYUFjdmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODEyMjYxNDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTZCMTI0MEUwRDA4QjY1NUFFNUI2ODFCNTc4QTRERTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDE2OTQ2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieE8yaGRwMnhUOXlDOXRxTHhGeTBidyIsInBob25lSWQiOiI3MDQ4NDliNy1kNDY2LTQwYzEtOWZiNC0xM2NjNTMxNjQ1OWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUp0TkJtTWFPVDNJaFNGWVRwQktVdUJXczN3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik50VkRrNU1QR3V2UDk1TEFGZXVzcDRvcEN6ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDTU41RlZZMSIsIm1lIjp7ImlkIjoiOTQ3ODEyMjYxNDQ6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYg8J2QlfCdkIjwnZCM8J2QlCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmZyeWZFR0VPbm5uclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZStjeHpEc0lHQjBXR1lTWEZZcFNaMkRsVXhraCs0TmdrRnZTa05kdTIxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1ozOG9iWEFiazJiaDVjeHdKOCtRNkxrUEZJRWtxZG1DaVlBS01TeDZBUXRxQ04vVEVPTzIyTGNKTGhVaFRuSEQ3THlGTTA0d1g5ZGJSbDMzUVlFQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImN1NFdqU0E1RnFIdjdEbXVIZjd2MytFZWJYdTU4LzdhSnd4ejJ6ZU9zNmlTSk5SbGZwN3RhL1lFbFU4ZnVuZDVpY3pjcnhQSWdPWkw3WUsrVkpEZGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODEyMjYxNDQ6ODVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHZuTWN3N0NCZ2RGaG1FbHhXS1VtZGc1Vk1aSWZ1RFlKQmIwcERYYnR0USJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDE2OTQ2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIL3YifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
