const Discord = require('discord.js')
const anime = require('anime-actions');

module.exports = {
  name: "sad",
  alias: ["tristesa"],
  owner: false,
  permissions: [],
  botpermissions: [],
  descripcion: "Besas a la persona mencionada.",
  run: async(client, message, args, prefix) =>{
    let aA = message.author;
    const mentiontwo = message.mentions.users.last()
     let aB = message.mentions.users.first()
     if(!aB) return message.reply(" *Necesitas mencionar a un usuario por favor.*")
     const aC = new Discord.EmbedBuilder()
     .setDescription(`Oye **${aB.username}** la tristesa es mejor acompañado no llores`)
     .setFooter({text:`**${aB.username} la tristesa lo a consumido.**`})
     .setImage(await anime.sad())
     .setColor('Random')
     message.reply({ embeds: [aC] })
  }
}