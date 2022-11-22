const { ChannelType } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    name: "channelinfo",
    aliases: ["ci", "cinfo", "channel-info"],
    desc: "Muestra información de un canal",
    usage: "channelinfo [#canal]",
    run: async (client, message, args, prefix) => {

  const canal = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel;

  let canaltype;
  if(canal.type === ChannelType.GuildText) canaltype = "💾 Texto"
  if(canal.type === ChannelType.GuildText) canaltype = "📢 Voz"

let category;
  if(canal.parent){
    category = canal.parent.id
  } else {
    category = "Ninguna"
  }

  const embed = new Discord.EmbedBuilder()
  .setDescription(`Información del Canal <#${canal.id}>`)
  .addFields(
  {name:`Nombre`, value:`${canal.name}`},
  {name:`ID`, value:`${canal.id}`},
  {name:`Creación`, value:`<t:${parseInt(canal.createdTimestamp / 1000)}:f> (<t:${parseInt(canal.createdTimestamp / 1000)}:R>)`},
  {name:`Tipo del canal`,  value:`${canaltype}`},
  {name:`¿Canal nsfw?`, value:`${canal.nsfw ? "✅ Si" : "❌ No"}`},
  {name:`¿Cuenta con una descripción?`, value:`${canal.topic ? "✅ Si" : "❌ No"}`},
  {name:`Categoría`, value:`<#${category}>`})
  .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true })})
  .setColor("Random")
  .setTimestamp()

  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
}
