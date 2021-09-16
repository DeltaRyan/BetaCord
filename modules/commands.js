const Discord = require('discord.js');
const config = require("../config.json");
module.exports = client => {
    const { HelpEmbedGenerate } = require("../utils/functions.js");
    
client.on("messageCreate", async (message) => {
    if(!message.guild || message.author.bot) return;
    let prefix = config.prefix;
   if(!message.content.startsWith(prefix)) return;
   let args = message.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift()?.toLowerCase();
    if(cmd.length == 0){
        if(matchedPrefix.includes(client.user.id))
        {
            return message.reply({embeds : [
                new Discord.MessageEmbed().setColor("BLURPLE").setTitle(`Hello! I see that you have pinged me, my prefix is: \`${prefix}\`**`)
            ]}).catch(console.error)
        }
    }
    if(cmd){
        switch(cmd){
            case "ping":
                {
                message.reply("Getting Bot's API...").then((msg) => {
                    msg.edit({content: `> ** API RESPONSE PING:** \`${client.ws.ping}\`\n > **BOT's PING:** \`${(Date.now() - msg.createdTimestamp) - (2 * client.ws.ping)}\``}).catch(console.error);
                }).catch(console.error);
                }
                break;
                case "help":
                    
                    {
                    const embed = generateHelpEmbed(message.guild)
                    message.reply({
                        embeds: [embed]
                    }).catch(console.error);
                    }
                    break;
                    case "deployCMD":
                        {
                            message.guild.commands.set(client.allSlashCommands).catch(console.error);
                            message.reply(`:white_check_mark:  Successfully Deployed ${client.allSlashCommands.length} CMD to ${message.guild.name} `).catch(console.error);

                        }
                    break;
                    case "how r u?":
                        {
                       message.reply("Fuck u nerd")
                    }
                        break;
                    default:
                        {
                            message.reply(`:x:  COMMAND IS NOT FOUND IN DATA SERVERS!`).catch(console.error);
                        }
        }
    }

})

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return;
    const { member, channelId, guildId, applicationId,
    commandName, deferred, replied, ephemeral, options, id, createdTimestamp
    } = interaction;
    const { guild } = member;
    let channel = guild.channels.cache.get(channelId);
    switch(commandName){
        case "ping":{
            let choice = interaction.options.getString("what_ping");
            if(!choice){
                interaction.reply({content: "Getting Bot's API...", ephemeral: true}).then((inter) => {
                    interaction.editReply({content: `> ** API RESPONSE PING:** \`${client.ws.ping}\`\n > **BOT's PING:** \`${(Date.now() - createdTimestamp) - (2 * client.ws.ping)}\``, ephemeral: true}).catch(console.error);
                }).catch(console.error);
            } else if(choice == "apiping"){
                interaction.reply({content: `**API RESPONSE PING:** \`${client.ws.ping}\``, ephemeral: true}).catch(console.error);
            } else{
                interaction.reply({content: "Getting Bot's API...", ephemeral: true}).then((inter) => {
                    interaction.editReply({content: `> ** API RESPONSE PING:** \`${client.ws.ping}\`\n > **BOT's PING:** \`${(Date.now() - createdTimestamp) - (2 * client.ws.ping)}\``, ephemeral: true}).catch(console.error);
                }).catch(console.error);
            }
        } break;
        case "help":
                    
                    {
                    const embed = generateHelpEmbed(guild);
                    interaction.reply({
                        embeds: [embed], ephemeral: true
                    }).catch(console.error);
                    }
                    break;
    }
})
}