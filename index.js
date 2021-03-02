const { default: axios } = require("axios");
const Discord = require("discord.js");

const bot = new Discord.Client();
let config = require("./botconfig.json");
let token = config.token;
let prefix = config.prefix;

function CheckSite() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://api.handwriter.ru/verify")
      .then((response) => {
        if (response.status === 200) {
//          console.log("SUCCESS");
          resolve(true);
        } else {
  //        console.log("FAILURE");
          resolve(false);
        }
      })
      .catch(() => {
    //    console.log("CATCH FAILURE");
        resolve(false);
      });
  });
}

bot.on("ready", () => {
  console.log(`ready to work ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then((link) => {
    console.log(link);
  });
});

bot.on("message", (msg) => {
  if (msg.content === "!cs") {
    CheckSite()
      .then((isAvailable) => {
        if (isAvailable) {
          bot.channels.cache.get("814587311299887124").setName("Site is up)");
        } else {
          bot.channels.cache.get("814587311299887124").setName("Site is down");
        }
      });
  }
});

bot.login(token);
