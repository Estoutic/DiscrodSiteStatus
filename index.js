const { default: axios } = require("axios");
const Discord = require("discord.js");

const bot = new Discord.Client();
let config = require("./botconfig.json");
let token = config.token;
let prefix = config.prefix;
const { Resource } = require("./Resource");

console.log(Resource);
let res = new Resource("вася");
console.log(res)

function CheckSite() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https1241234124://lear4214n.javasc1341341ript.ru/array1ugq9318ygdy2"
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESS");
          resolve(true);
        } else {
          console.log("FAILURE");
          resolve(false);
        }
      })
      .catch(() => {
        console.log("CATCH FAILURE");
        resolve(false);
      });
  });
};
//function splitString(tonik, separator) {
  //var arr = tonik.split(separator);
//}
bot.on("ready", () => {
  console.log(`ready to work ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then((link) => {
    console.log(link);
  });
});

function onMesage(message) {
  if (message.content.startsWith(`${prefix}сs`)) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    CheckSite().then((isAvailable) => {
      if (isAvailable) {
        bot.channels.cache.get("816399935070142524").setName("Site is up)");
      } else {
        bot.channels.cache.get("816399935070142524").setName("Site is down");
      }
    });
  } else if (message.content.startsWith(`${prefix}add`)) {
      if (message.author.bot) return;
      arrayOfStrings = message.toString().split(' ');
      for (let i = 2; i > arrayOfStrings.length; i++){
        
      }
     let resource = new Resource(arrayOfStrings[2],arrayOfStrings[1]);
     // message.channel.send("url is" + "  " +  JSON.stringify(Newargs));
     message.channel.send("name is" + "  " + resource.getName());
    
    
    
  }
}

bot.on("message", onMesage);

//const embed = new RichEmbed();

bot.login(token);
