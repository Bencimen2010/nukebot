const Discord = require('discord.js')
module.exports = {
    name: "szia",
    category: "Általános",
    description: "A bot köszön neked!",
    run: async (bot, message, args) => {
        message.reply("Szia, üdvözöllek a NukeMC discord szerverén!")
    }
}