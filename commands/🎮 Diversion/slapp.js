const Discord = require('discord.js')
const anime = require('anime-actions');

module.exports = {
  name: "slap",
  alias: ["bofetada"],
  owner: false,
  permissions: [],
  botpermissions: [],
  descripcion: "Besas a la persona mencionada.",
  run: async(client, message, args, prefix) =>{
    let aA = message.author;
     let aB = message.mentions.users.first()
     if(!aB) return message.reply(" *Necesitas mencionar a un usuario para reiniciarle el windows.*", { ephemeral: true })
     const aC = new Discord.EmbedBuilder()
     .setDescription(`**${aB.username}** acaban de reiniciarle el windows con una serie de sapes`)
     .setFooter({text:`${aB.username} recibio una bofetada en toda la cara.`})
     .setImage(await anime.slap())
     .setColor('Random')
     message.reply({ embeds: [aC] })
  }
}