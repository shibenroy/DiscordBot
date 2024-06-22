require('dotenv').config();
const {Client, IntentsBitField, messageLink} = require("discord.js")

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})


client.on('ready', (c) => {
    console.log(`✅${c.user.tag} is online.`)
});

client.on("messageCreate", (message) => {
    if (message.content == '!hello')
        message.reply('Hey!');
})

client.login(process.env.TOKEN);