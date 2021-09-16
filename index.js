const Discord = require('discord.js');
const { HelpEmbedGenerate } = require("./utils/functions.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client({
    allowMentions: {
    parse: [ "roles", "users"],
    repliedUser: false,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
    presence: {
        activities: [{
            name: "Gamers Lounge members uwu",
            type: "WATCHING"
        }],
        status: "dnd"
    }
});
require("./utils/slashCommandsBuilder.js")(client);
client.allSlashCommands = [];

fs.readdirSync("./modules/").forEach((dir) => {
    if(fs.existsSync(`./modules/${dir}`) && fs.lstatSync(`./modules/${dir}`).isDirectory()){
     for(let file of modules){
         try{
         require(`./modules/${dir}/${file}`)(client);
         console.log(` [X] :: LOADED: ./modules/${dir}/${file}`)
     } catch(e){ console.log(e) }
    }
    } else {

    try {
    require(`./modules/${dir}`)(client);
    console.log(` [X] :: LOADED: ./modules/${dir}`)
    } catch(e){ console.log(e) }
    }
})


client.login(config.token);