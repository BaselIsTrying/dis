const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('NOW GET THE FUCK OUT')
    .setName('CALM SHARK')
    .setDetails(`Welcome to Mr.Sharks Profile`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/918918699203837982/1321501402643562618/itsoma98_14031001_172038562.jpg?ex=6772bd96&is=67716c16&hm=06c80a06cc7de01c1b3a016525e3d19509928fd5dcaf966bb9f3eb722f651e03&=&format=webp&width=692&height=521') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('I AM BASEL :)') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1193602666518036541/1321507550021156874/Picsart_24-12-25_18-59-03-230.jpg?ex=6772c350&is=677171d0&hm=41f2ed9346d044edd57d70216c3b7561f7ba5ec2f21f08817797a922dffd69ba&=&format=webp&width=701&height=701') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('UNMESSABLE') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
