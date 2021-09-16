const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = (client) => {
    client.allSlashCommands = [];
    const pingCommand = new SlashCommandBuilder()
.setName("ping")
.setDescription("Fetches my API ping!")
.addStringOption(option => {
    option.setName("what_ping")
    .setDescription("Which kind of ping would you like me to get?")
    .setRequired(false)
    .addChoices([
        ["API Response Ping", "apiping"],
        ["Bot's Ping", "botping"],
    ])
    return option;
})
client.allSlashCommands.push(pingCommand.toJSON());
const helpCommand = new SlashCommandBuilder()
.setName("help")
.setDescription("Shows Help Section Command!")
client.allSlashCommands.push(helpCommand.toJSON());
}