const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('哈囉');
  }
});
bot.on('message', msg => {
  if (msg.content === 'bot') {
    msg.reply({embed:{
        title:"機器人資訊",
        description: "創建者:服主    創建日期:108/8/11",
        color:0x33FFFD
    }})
  }
});

bot.login(config.token);
