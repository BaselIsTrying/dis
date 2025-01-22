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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1193602666518036541/1330236530496766003/Picsart_25-01-16_20-56-50-456.jpg?ex=6791dc0f&is=67908a8f&hm=16263cda5183a9166837909b17a47afda231adbcb365ec4af8204caaa46fbb69&=&format=webp&width=701&height=701') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('I AM BASEL :)') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1193602666518036541/1330237702397890662/ab6761610000e5eb964917d7d232cda4dedeb2ba.jpg?ex=6791dd26&is=67908ba6&hm=51a32b76b2af7f2b9a098f7540acf757ea9880a9c12083d870a7d4da6db8e6bf&=&format=webp&width=701&height=701') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('UNMESSABLE') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
