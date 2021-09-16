function generateHelpEmbed(guild){
    return new Discord.MessageEmbed()
                    .setColor("BLURPLE")
                    .setTitle("HELP SECTION")
                    .setDescription("Hello! I am BetaCord, a bot originally created by DeltaRyan during the Discord.js v13! Right now DeltaRyan is trying to suit me into discord.js v13 :D Anyways Here's my commands.")
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields([
                        {name: "ping", value: "> Fetches my API Ping!", inline: true},
                        {name: "help", value: "> Shows all my commands!", inline: true},
                        {name: "deployCMD", value: "> Deploys all Slash Commands into the server!", inline: true},
                    ])
                    .setFooter(guild.name, guild.iconURL({dynamic: true}))
}

module.exports.generateHelpEmbed = generateHelpEmbed;