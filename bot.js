const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("אח של אלקסה", { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.content.startsWith(":youtube: Searching :mag_right:")) {
  message.delete();
  }
    
  if(message.content.startsWith("!p ")) {
  message.channel.send("Alexa, Play " + message.content.substring(3));
  message.delete();
  }
                                            
});

bot.login(process.env.BOT_TOKEN);
