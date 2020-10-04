const Discord = require("discord.js");

module.exports = {
  name: "about",
    description: "Get some info about Opal",
    category: "info",
    usage: "about",
  run: async(client, message, args) => {

    const bot = new Discord.MessageEmbed()
    .setTitle(`About Opal`)
    .setColor("#AAC4C4")
    .setDescription("Hi! My name is Opal, I'm infobot with knowledge about Retro Consoles, Personal Computers nad Operating Systems.")
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    message.channel.send(bot);
  }
}
