const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  if(message.content == 'ping') {
    message.channel.sendMessage('pong');
  }
});




bot.login('MjkzNjM5OTQ1OTg4NjAzOTA1.C7Oxcg.Hyctwf3FiJS7sndFZ3IYGBugtLM');
