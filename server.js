const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
      client.user.setActivity(`DG-help | ${client.guilds.size} servers are protected | v1.8.4`);
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-ping")) {
    let ping = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":white_check_mark: Protection is on in your server!")
    .addField("Response time", new Date().getTime() - message.createdTimestamp + " ms");
message.channel.send(ping)
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-support")) {
    let ping = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Support", "Link to the support server: https://discord.gg/6rzUtyf");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-permissions")) {
    let perm = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Permission Check", "I need this permissions to work normally: MANGE_MEMBERS, KICK, BAN, MANAGE_MESSAGES, MANAGE_CHANNELS, READ_TEXT_CHANNELS, SEND_MESSAGES, EMBED_LINKS, ATTACH_FILES, READ_MESSAGE_HISTORY, ADD_REACTIONS, MUTE_MEMBERS. NOTE: It is possible that the permission ADMINISTRATOR is needed.");

message.channel.send(perm);
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-faq")) {
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard FAQ", "The Discord Guard FAQ page")
    .addField("How can I disable @ everyone block?", "It is not possible right now. I recommend you to use a channel and disable the following permissions: Administrator, Manage_messages, Read_text_messages, Send_messages, Read_message_history")
    .addField("How can I disable that the bot does not block swearwords?", "It is not possible right now. Try the solution as above")
    .addField("Your question not in this FAQ?", "Feel free to join the support server and ask your question");
    message.channel.send(block);
	}
});


client.on("message", (message) => {
  if (message.content.startsWith("DG-vote")) {
    let vote = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Vote", "Vote me here: https://discordbots.org/bot/461595869632790528/vote");

message.channel.send(vote);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-lang")) {
    let ping = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", "Supported languages: English, Dutch and German. More languages added later!");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-1purge")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 1 messages.");
    
    message.channel.send(purge2);
	}
});


client.on("message", (message) => {
	if (message.content.startsWith("DG-2purge")) {
      let messagecount = parseInt(2);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 2 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-3purge")) {
      let messagecount = parseInt(3);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 3 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-4purge")) {
      let messagecount = parseInt(4);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 4 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-5purge")) {
      let messagecount = parseInt(5);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 5 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-6purge")) {
      let messagecount = parseInt(6);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 6 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-7purge")) {
      let messagecount = parseInt(7);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 7 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-8purge")) {
      let messagecount = parseInt(8);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 8 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-9purge")) {
      let messagecount = parseInt(9);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 9 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-10purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 10 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-11purge")) {
      let messagecount = parseInt(11);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 11 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-12purge")) {
      let messagecount = parseInt(12);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 12 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-13purge")) {
      let messagecount = parseInt(13);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 13 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-14purge")) {
      let messagecount = parseInt(14);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 14 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-15purge")) {
      let messagecount = parseInt(15);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 15 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-16purge")) {
      let messagecount = parseInt(16);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 16 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-17purge")) {
      let messagecount = parseInt(17);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 17 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-18purge")) {
      let messagecount = parseInt(18);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 18 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-19purge")) {
      let messagecount = parseInt(19);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 19 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-20purge")) {
      let messagecount = parseInt(20);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 20 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-21purge")) {
      let messagecount = parseInt(21);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 21 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-22purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 22 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-23purge")) {
      let messagecount = parseInt(23);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 23 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-24purge")) {
      let messagecount = parseInt(24);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 24 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-25purge")) {
      let messagecount = parseInt(25);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-26purge")) {
      let messagecount = parseInt(26);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-27purge")) {
      let messagecount = parseInt(27);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-28purge")) {
      let messagecount = parseInt(28);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-29purge")) {
      let messagecount = parseInt(29);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-30purge")) {
      let messagecount = parseInt(30);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I deleted the last 25 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-database")) {
    let db = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Database", "Database version: 2018.2.8.26")
    .addField("Update Date", "August 26 2018")
    .addField("Added swearwords since last update", "27")
    .addField("Current bot version", "1.8.3, November 26 2019");
    
    message.channel.send(db);
	}
});

client.on("message", (message) => {
	if (message.content.includes("@everyone")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "It is not allowed to tag everyone in this server. The text is a variant of Potential Unwanted Message (PUM) and Discord Guard blocked the message.")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    message.channel.send(block);
	}
});


client.on("message", (message) => {
	if (message.content.includes("gay")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Gay")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("GAY")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("ass")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.045")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Ass")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.045")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Arse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.200")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("arse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.200")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("shit")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Shit")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("SHIT")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("bastard")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.495")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Bastard")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.495")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Bitch")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.099")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("bitch")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.099")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("fuck")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Fuck")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("FUCK")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dildo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.101")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dildo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.101")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("cock")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.112")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("nigger")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.721")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Nigger")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.721")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("piss")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.477")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Piss")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.477")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("pussy")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Pussy")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("pussies")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.755")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
}); 

client.on("message", (message) => {
	if (message.content.includes("Pussies")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Cock")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.112")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dick")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.842")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dick")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.842")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.567")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("vagina")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.452")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Vagina")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.452")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kloot")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.671")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kloot")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.671")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});


client.on("message", (message) => {
	if (message.content.includes("Kut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.567")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("autist")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.681")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Autist")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.681")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("eikel")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.308")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("neuk")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.951")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Neuk")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.951")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Eikel")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.308")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("sul")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.333")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Sul")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.333")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("homo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.711")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Homo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.711")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("HOMO")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.711")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kanker")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kanker")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kkr")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070.1")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kkr")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070.1")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("KKR")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070.1")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("hoer")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.209")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Hoer")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.209")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("tering")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.852")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Tering")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.852")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("zeik")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.174")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Zeik")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.174")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("trut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.448")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Trut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.448")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dikkop")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.505")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dikkop")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.505")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dikzak")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.506")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dikzak")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.506")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Godver")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.667")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("godver")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.667")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("GODVER")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.667")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("gvd")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Gvd")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("GVD")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("slet")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.841")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Slet")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.841")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("schweine")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.004")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Schweine")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.004")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("arschlog")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.100")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Arschlog")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.100")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Godverdommus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.376")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("godverdommus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.376")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kloatzack")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.478")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Schlampe")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.679")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Hurensohn")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.060")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("hurensohn")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.060")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("schlampe")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.679")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kloatzack")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.478")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Krebshund")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.880")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("krebshund")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.880")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("fotze")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.701")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Fotze")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.701")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("mausbiest")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.764")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Muschi")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.398")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("muschi")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.398")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Gewitterzau")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.551")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Idiote")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.270")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("panzermaus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.091")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("scheisse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.101")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Scheiße")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.101.A")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("scheiße")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.101.A")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Ficken")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.908")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Verdammt")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.623")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("verdammt")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.623")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("ficken")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.908")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Scheisse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.101")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("Panzermaus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.091")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("idiote")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.270")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("gewitterzau")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.551")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("Mausbiest")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.764")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Schwalbe")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.850")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("schwalbe")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.850")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("hammergeil")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.007")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Hammergeil")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.007")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Schlabberfotze")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.444")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("schlabberfotze")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.444")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Hundsfötter")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.726")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dorfthorsten")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.225")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dorfthorsten")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.225")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("hundsfötter")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.726")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("vollfosten")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.140")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Vollfosten")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.D.140")
    .setFooter("Note: You can disable this by give Discord Guard deny access to delete messages and send messages.");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {

  if (message.content.startsWith("DG-kick")) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Can't find user! Please check it and try again.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: That person can't be kicked! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: That person can't be kicked! Reason: It is a bot, it is not a valid reason or you have the same permissions.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Discord Guard Kick")
    .setColor("#000000")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "general");
    if(!kickChannel) return message.channel.send(":x: Can't find general channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
}); 

client.on('message', (message) => {
  if (message.content.startsWith("DG-help")) {
    message.channel.send(':white_check_mark: Check your dm with my commands!');
  let embed = new Discord.RichEmbed()
  .setDescription("Discord Guard Help Page")
  .setColor("#000000")
  .addField("DG-help", 'Gets help page')
  .addField("DG-ping", 'Checks if the bot responds')
  .addField("DG-info", 'Displays info about your server')
  .addField("DG-about", 'Displays infor about the bot')
  .addField("DG-invite", 'Gets invite link for your server')
  .addField("DG-vote", 'Vote for the bot')
  .addField("DG-<number>purge", 'Deletes some message. Do not use the <>. You can choose between 1 and 30. Example: DG-4purge')
  .addField("DG-kick <@user> <reason>", 'Kick a user. Do not use the <>. Example: DG-kick @user#0000 angry')
  .addField("DG-ban <@user> <reason>", 'Ban a user. Do not use the <>. Example: DG-ban @user#0000 stupid')
  .addField("DG-warn <@user> <reason>", 'Warn a user. Do not use the <>. Example DG-warn @user#000 do not use swear words. NOTE: the user gets a dm!')
  .addField("DG-database", 'Check the database from Discord Guard')
  .addField("DG-lang", 'Checks which languages are supported by Discord Guard')
  .addField("DG-permissions", 'The permissions that the bot need to function normally')
  .addField("DG-support", 'Join the support server')
  .addField("DG-faq", 'Get a list of earlier asked questions')
  .addField("Discord Guard Swear Word Detection", 'Discord Guard has a database to detect swear words');
    message.member.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-ban")) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Can't find user! Please check it and try again");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: That person can't be banned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: That person can't be banned! Reason: It is a bot, it is not a valid reason or you have the same permissions.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Discord Guard Ban")
    .setColor("#000000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
    


    let incidentchannel = message.guild.channels.find(`name`, "general");
    if(!incidentchannel) return message.channel.send("Can't find general channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
});

client.on("message", (message) => {

  if (message.content.startsWith("DG-warn")) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Can't find user! Please check it and try again.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: That person can't be warned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");

    let warned = new Discord.RichEmbed()
    .setDescription("Discord Guard Warn")
    .setColor("#ff0000")
    .addField("Warned User", `${kUser} with ID ${kUser.id}`)
    .addField("Warned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Warned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    message.channel.send(":white_check_mark: The user got a warning in dm");
    message.channel.send(warned);
    kUser.send(warned);

    return;
  }
}); 

client.on('message', (message) => {
	if (message.content.startsWith("DG-invite")) {
    let invite = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Invite", "https://discordapp.com/oauth2/authorize?&client_id=461595869632790528&scope=bot&permissions=8");
    
    message.channel.send(invite);
	}
});

client.on('message', (message) => {
  if (message.content.startsWith("DG-info")) {
   let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#000000")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("DG-about")) {
    let sicon = "https://cdn.discordapp.com/app-icons/461595869632790528/9143317d82e9f74a07c60d2e452220e6.png?size=512";
     let about = new Discord.RichEmbed()
     .setDescription("Discord Guard v1.8.2")
     .setColor("#000000")
     .setThumbnail(sicon)
     .addField("Bot Creator", "Fermion#3927")
     .addField("Server running", `${client.guilds.size}`)
     .addField("Amount of users", `${client.users.size}`)
     
 return message.channel.send(about);
  }
});

     

client.login(process.env.BOT_TOKEN);

  
