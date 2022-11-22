const Discord = require('discord.js');
const db = require('megadb')
let al = new db.crearDB('antilinks')

module.exports = {
	name: "setup-antilinks",
	alias: [],
    permisos: "Administrator",
    permisos_bot: "Administrator",

    run: async (client, message, args) => {

  if(!al.tiene(message.guild.id)){
      al.establecer(message.guild.id, 'off')
  }

  if(!args[0]){
      const inicio = new Discord.EmbedBuilder()
      .setTitle('Bienvenido al Sistema Antilinks!')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription('<:VS_cancel:1006609599199186974> Para establecer el estado de el antilinks escribe **antilinks off / antilinks on**')
      .addFields({name:'Estado actual del antilinks :', value:`**\`${await al.obtener(message.guild.id)}\`**`})
      .setColor('#ff78cf')
      message.channel.send({ embeds: [inicio] })
  }

  if(args[0] === 'on'){
      const active = new Discord.EmbedBuilder()
    .setTitle('Antilinks Activado')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription('<:VS_cancel:1006609599199186974> De ahora en adelante los links seran prohibidos!')
    .setColor('Green')
    al.establecer(message.guild.id, 'on')
    message.channel.send({ embeds: [active] })
  }

  if(args[0] === 'off'){
    const active = new Discord.EmbedBuilder()
  .setTitle('Antilinks Desactivado')
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription('✅ Los links estan permitidos nuevamente en el servidor!')
  .setColor('Red')
  al.establecer(message.guild.id, 'off')
  message.channel.send({ embeds: [active] })
  }

  if(args[0] === `status`) {
    const stats = new Discord.EmbedBuilder()
    .setTitle('Estado Antilinks')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`✅ Los links en este momento estan **\`${await al.obtener(message.guild.id)}\`**!`)
    .setColor('Orange')
    message.channel.send({ embeds: [stats] })
  }

  if(args[0] === `help`) {
    const ayuda = new Discord.EmbedBuilder()
    .setTitle('Help Antilinks')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`✅ A continuacion te dire los comandos de AntiLinks!`)
    .addFields(
      {name:`on`, value:`Activa el sistema Antilinks del bot`},
      {name:`off`, value:`Desactiva el sistema antilinks del bot`},
      {name:`status`, value:`Muestra el estado actual del sistema de antilinks`})
    .setColor('Orange')
    .setFooter({text:`Recuerda si tienes dudas usar >help o abrir ticket en soporte`})
    message.channel.send({ embeds: [ayuda] })
    }
  }
}