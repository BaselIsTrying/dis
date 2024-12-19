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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1193602666518036541/1304463509400059944/e5dd5e218a6306240eed4600e6680d91.jpg?ex=6764e090&is=67638f10&hm=6ba0c115a24334c0908ea78908334da58e5aed215f96290141d4f2780d24a04b&=&format=webp&width=600&height=600') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('I AM BASEL :)') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1193602666518036541/1304464553869967472/Picsart_24-11-08_18-16-12-282.png?ex=6764e189&is=67639009&hm=793389345367a414b20c6a7bbd31cf9dd9314fbb3d3499e6242b8e0dc93a69dc&=&format=webp&quality=lossless&width=701&height=701') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('VIVA PALESTINA') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
