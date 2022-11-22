const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const Discord = require('discord.js');

module.exports = {
  name: "hentaiass",
  aliases: [],
  run: async(client, message, prefix, args) => {
      if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true })
       const embed = new Discord.EmbedBuilder()
       .setTitle('💞 el hentai tan hermoso')
       .setColor('Random')
      .setFooter({text:`Comandos nsfw fenix`})
      .setTimestamp()
       .setImage(await nsfw.hentaiass())
       message.channel.send({ embeds: [embed] })

    }
}