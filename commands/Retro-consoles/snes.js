
const Discord = require("discord.js");

module.exports = {
  name: "snes",
    description: "Get some info about Opal",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle("Super Nintendo Entertainment System")
    .setColor("#f4f26f")
    .setDescription("The Super Nintendo is a beloved 16-bit game console from the early 90's, known best for Super Mario World, Super Mario Cart, Donkey Kong Country, and Stree Fighter II, but also featured other very cute games like Sim City and Starfox.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
