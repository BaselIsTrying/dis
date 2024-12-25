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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/918918699203837982/1321501402643562618/itsoma98_14031001_172038562.jpg?ex=676d7796&is=676c2616&hm=b1e5ed696243b36c011543c5d2f0171dec1a253ed4a2fd3a0943dfd959eb064e&=&format=webp&width=692&height=521') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('I AM BASEL :)') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1193602666518036541/1321504320335773726/cdb3811b-2906-47ff-a490-64fde27cbf1d.jpg?ex=676d7a4e&is=676c28ce&hm=fc25ffe3616675136267d2a3e94ab714c8fef748f96d4b0b0fc344d090d8a241&=&format=webp&width=701&height=701') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('UNMESSABLE') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
