const { EmbedBuilder } = require('discord.js');
const cooldown = new Set();
module.exports = {
  name: 'purge',
  permisos: ["ManageChannels"],
  permisos_bot: ["ManageChannels","Administrator"],
  aliases: [" "],

  run: async (client, message, args) => {
    const noperms = new EmbedBuilder()
    .setDescription(`<:VS_cancel:1006609599199186974> No tienes permisos para hacer esto.!`)
    .setColor([255, 77, 77])

    const botperms = new EmbedBuilder()
    .setDescription(`<:VS_cancel:1006609599199186974> No tengo permiso para gestionar mensajes.!`)
    .setColor([255, 77, 77])

    const usage = new EmbedBuilder()
    .setDescription('``-purge <amount>``')
    .setColor([255, 77, 77])

    const validNumber = new EmbedBuilder()
    .setDescription('<:VS_cancel:1006609599199186974> Por favor, ponga un número válido!')
    .setColor([255, 77, 77])

    const one = new EmbedBuilder()
    .setDescription(`<:VS_cancel:1006609599199186974> No puedo purgar más de 100 mensajes!`)
    .setFooter({text:`Requested by` + message.author.username})
    .setColor([255, 77, 77])

    const ze = new EmbedBuilder()
    .setDescription(`<:VS_cancel:1006609599199186974> No puedo purgar menos de 1 mensaje!`)
    .setFooter({text:`Requested by` + message.author.username})
    .setColor([255, 77, 77])

    const fortin = new EmbedBuilder()
    .setDescription(`<:VS_cancel:1006609599199186974> No puedo purgar mensajes que tengan más de 14 días!`)
    .setFooter({text:`Requested by` + message.author.username})
    .setColor([255, 77, 77])
 
    if(!message.member.permissions.has('ManageMessages')) return message.reply({ embeds: [ noperms ] })
    if(!message.guild.me.permissions.has('ManageMessages')) return message.reply({ embeds: [ botperms ] })

    let arg = message.content.split(' ')
    let amount = arg[1]
    if(!amount) return message.reply({ embeds: [ usage ] })

    if(isNaN(amount)) return message.reply({ embeds: [ validNumber ] })
    if(amount > 100) return message.reply({ embeds: [ one ] })
    if(amount < 1) return message.reply({ embeds: [ ze ] })
    try {
      message.channel.bulkDelete(amount)
    } catch (err) {
      console.error(err)
      message.reply({ embeds: [ fortin ] }).then(m => {
      setTimeout(() => {
        m.delete()
      }, 4000);
    });
    }
    message.delete()
    const fin = new EmbedBuilder()
    .setTitle('<a:online:1007081621360476250> Purgado con éxito '+amount+' messages!')
    .setDescription(`Se purgaron un total de **${amount}** mensajes con exito!`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter({text:`Requested by` + message.author.username})
    .setColor([255, 77, 77])
    message.channel.send({ embeds: [ fin ] }).then(m => {
      setTimeout(() => {
        m.delete()
      }, 4000);
    });
  }
}