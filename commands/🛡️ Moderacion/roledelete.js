const Discord = require(`discord.js`);
module.exports = {
    name: "deleterole",
    aliases: ["delete-role"],
    usage: "delete-role  [@ROL]",
    permisos: ["ManageRoles","ManageMessages"],
    permisos_bot: ["Administrator","ManageRoles"],
    run: async (client, message, args, prefix) => {
  
          const roles = message.mentions.roles.first()
          if(!roles) return message.channel.send('<:VS_cancel:1006609599199186974> Debes mencionar un rol valido', { ephemeral: true }).then(m => { setTimeout(() => { m.delete() }, 5000) });
          let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
        //comprobar que el BOT está por encima del usuario a avisar
        if (message.guild.members.me.roles.highest.position > usuario.roles.highest.position) {
          //comprobar que la posición del rol del usuario que ejecuta el comando sea mayor a la persona que vaya a avisar
          if (message.member.roles.highest.position > usuario.roles.highest.position) {
              //enviamos al usuario por privado que ha sido avisado!

          await message.guild.roles.delete(`${roles}`)
          message.channel.send(
            {
                embeds: [new Discord.EmbedBuilder()
                    .setTitle(`👾 Sistema de Moderacion [Delete-Role] `)
                    .setDescription(`Acabas de eliminar el rol: **${roles}**`)
                    .addFields(
                        {name:`Rol Eliminado`, value:`${roles}`},
                        {name:`Moderador`, value:`${message.author}`},
                        {name:`Status Roles`, value:`True`})
                    .setColor("Red")
                    .setFooter({text:`Sistema de roles 001`})
                    .setTimestamp()
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                ]
                }).then(m => {
     setTimeout(() => {
       m.delete()
     }, 10000)
      });
            }else {
                return message.reply(`<:VS_cancel:1006609599199186974> **Tu Rol está por __debajo__ del rol a eliminar!**`, { ephemeral: true })
               }
      }else {
        return message.reply(`<:VS_cancel:1006609599199186974> **Mi Rol está por __debajo__ del rol a eliminar!**`, { ephemeral: true })
    }
 }}


