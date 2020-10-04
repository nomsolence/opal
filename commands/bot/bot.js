const Discord = require("discord.js");

module.exports = {
  name: "about",
    description: "Get some info about Opal",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle(`About me`)
    .setColor("#AAC4C4")
    .setDescription("Hi! My name is Opal, I'm infobot with knowledge about Retro Consoles, Personal Computers and Operating Systems.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
