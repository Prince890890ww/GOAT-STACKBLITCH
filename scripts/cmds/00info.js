const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝐄𝐖𝐑 𝐃𝐀𝐃𝐃𝐘 ";
		const ownAge = "『 17 』";
		const messenger = "https://m.me/100065506668822";
		const authorFB = "https://www.facebook.com/pixxi0";
		const authorNumber = "_𝗩𝗮𝗮𝗮𝗴 𝗵𝗲𝗻𝘁𝗲 𝗺𝗮𝗴𝗶 😪";
		const Status = "⩸__🅜︎🅐︎🅡︎🅡︎🅘︎🅔︎🅓︎__⩸";
		const urls = [
"https://i.imgur.com/znff2qB.mp4",
"https://i.imgur.com/znff2qB.mp4",
"https://i.imgur.com/znff2qB.mp4",
"https://i.imgur.com/znff2qB.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》💫
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}
\📝彡𝐴𝑔𝑒  : ${ownAge}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}
\🌐彡𝑊𝑝 : ${authorNumber}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${authorFB}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 :⩸__${messenger}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
    𝑻𝒈: https://t.me/𝗘𝗪𝗥 𝗥𝗜𝗬𝗘𝗟 𝗗𝗔𝗗𝗗𝗬
    𝑰𝒏𝒔𝒕𝒂: https://www.instagram.com/𝗡𝗮𝗶 🤡
    𝑪𝒂𝒑𝑪𝒖𝒕:  𝗧𝗼𝗿𝗲 𝗯𝗼𝗶𝗹𝗮 𝗸𝗶 𝗵𝗼𝗶𝗯𝗼 😪
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝗕𝗼𝘀𝘁𝗶 𝗿𝗮 𝘂𝘀𝗲 𝗸𝗼𝗿𝗲 🤡🤙
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆:  𝗩𝗶𝗱𝗲𝗼 𝗱𝗲𝗸𝗵𝗶 𝘆𝗼𝘂𝘆𝘂𝗯𝗲 𝗮 🥸
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
