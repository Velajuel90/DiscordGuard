const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = (args) => {
const express = require('./express.js');
express(args);
    };

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
      client.user.setActivity(`Protecting ${client.guilds.size} servers | DG-help`);
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-ping")) {
    let ping = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":white_check_mark: Protection is on in your server!");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("DG-support")) {
    let ping = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Support", "https://discord.gg/6rzUtyf");

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
    .addField("Discord Guard", "Supported languages: English and Dutch");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-1purge")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 1 messages.");
    
    message.channel.send(purge2);
	}
});


client.on("message", (message) => {
	if (message.content.startsWith("DG-2purge")) {
      let messagecount = parseInt(2);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 2 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-3purge")) {
      let messagecount = parseInt(3);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 3 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-4purge")) {
      let messagecount = parseInt(4);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 4 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-5purge")) {
      let messagecount = parseInt(5);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 5 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-6purge")) {
      let messagecount = parseInt(6);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 6 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-7purge")) {
      let messagecount = parseInt(7);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 7 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-8purge")) {
      let messagecount = parseInt(8);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 8 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-9purge")) {
      let messagecount = parseInt(9);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 9 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-10purge")) {
      let messagecount = parseInt(10);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let purge2 = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard", ":wastebasket: I have deleted the last 10 messages.");
    
    message.channel.send(purge2);
	}
});

client.on("message", (message) => {
	if (message.content.startsWith("DG-database")) {
    let db = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Discord Guard Database", "Database version: 2018.1.0.3");
    
    message.channel.send(db);
	}
});

client.on("message", (message) => {
	if (message.content.includes("gay")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Gay")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("GAY")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.001");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("ass")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.045");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Ass")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.045");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Arse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.200");
    
    message.channel.send(block);
	}
});
client.on("message", (message) => {
	if (message.content.includes("arse")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.200");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("shit")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Shit")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("SHIT")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.224");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("bastard")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.495");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Bastard")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.495");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Bitch")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.099");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("bitch")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.099");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("fuck")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Fuck")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("FUCK")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.536");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Anus")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.066");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dildo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.101");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dildo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.101");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("cock")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.112");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("nigger")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.721");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Nigger")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.721");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("piss")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.477");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Piss")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.477");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("pussy")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Pussy")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("pussies")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.755");
    
    message.channel.send(block);
	}
}); 

client.on("message", (message) => {
	if (message.content.includes("Pussies")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.655");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Cock")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.112");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dick")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.842");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dick")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.842");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.567");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("vagina")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.452");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Vagina")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.452");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kloot")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.671");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kloot")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.671");
    
    message.channel.send(block);
	}
});


client.on("message", (message) => {
	if (message.content.includes("Kut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.567");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("autist")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.681");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Autist")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.681");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("eikel")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.308");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("neuk")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.951");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Neuk")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.951");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Eikel")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.308");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("sul")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.333");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Sul")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.333");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("homo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.711");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Homo")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.711");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("kanker")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Kanker")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.070");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("hoer")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.209");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Hoer")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.209");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("tering")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.852");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Tering")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.852");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("zeik")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.174");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Zeik")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.174");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("trut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.448");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Trut")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.448");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dikkop")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.505");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dikkop")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.505");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("dikzak")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.506");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Dikzak")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.506");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Godver")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.667");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("godver")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.667");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("gvd")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Gvd")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("GVD")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.767");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("slet")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.841");
    
    message.channel.send(block);
	}
});

client.on("message", (message) => {
	if (message.content.includes("Slet")) {
      let messagecount = parseInt(1);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    let block = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Message blocked!", "Discord Guard has detected a swear word and blocked the message. Name: Discord/SW.NL.841");
    
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
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be kicked! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be kicked! Reason: It is a bot, it is not a valid reason or you have the same permissions.");

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
  .addField("DG-invite", 'Gets invite link for your server')
  .addField("DG-vote", 'Vote for the bot')
  .addField("DG-<number>purge", 'Deletes some message. Do not use the <>. You can choose between 1 and 10. Example: DG-4purge')
  .addField("DG-kick <@user> <reason>", 'Kick a user. Do not use the <>. Example: DG-kick @user#0000 angry')
  .addField("DG-ban <@user> <reason>", 'Ban a user. Do not use the <>. Example: DG-ban @user#0000 stupid')
  .addField("DG-warn <@user> <reason>", 'Warn a user. Do not use the <>. Example DG-warn @user#000 do not use swear words. NOTE: the user gets a dm!')
  .addField("DG-database", 'Check the database from Discord Guard')
  .addField("DG-lang", 'Checks which languages are supported by Discord Guard')
  .addField("DG-permissions", 'The permissions that the bot need to function normally')
  .addField("DG-support", 'Join the support server')
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
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can't be banned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be banned! Reason: It is a bot, it is not a valid reason or you have the same permissions.");

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
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can't be warned! Reason: You do not have the permission MANAGE_MEMBERS. Ask your owner for the permission.");

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
  if (message.content.startsWith("DG-createlog")) {
    function makeChannel(message){
    var server = message.guild;
    var name = "Logs";

    server.createChannel(name, "text");
    }
  }
});           

client.on('message', (message) => {
if (message.content.startsWith("DG-logstest")) {
  const Logs = client.channels.find('name', "Logs");
  Logs.send('The logs are working!');
}
});

client.on('guildMemberAdd', (member) => {
 const Logs = client.channels.find('name', "Logs");
  Logs.send('**' + `${member.user.username}` + '**, has joined the server');
});

client.login(process.env.BOT_TOKEN);

  
