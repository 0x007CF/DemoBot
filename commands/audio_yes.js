const functions = require("../functions.js");

module.exports = {
	name: "yes",
	aliases: ["y", "aye"],
	description: "An expression of approval or agreement.",
	category: "audio",
	usage: "",
	guildOnly: false,
	restricted: false,
	reaction: "",

	execute(message, args) {
		if (message.member && message.member.voice.channel) {
			message.client.commands.get("play").execute(message, [functions.randomSound("yes", 3)]);
		} else {
			message.channel.send("", { files: [functions.randomSound("yes", 3)] });
		}
	},
};