const Discord = require(`discord.js`);
module.exports = {
    name: "remove-role",
    aliases: ["remove-r"],
    usage: "remove-role [@USUARIO] [@ROL]",
    permisos: ["ManageRoles"],
    permisos_bot: ["Administrator","ManageRoles"],
    run: async (client, message, args, prefix) => {
  
          const target = message.mentions.members.first()
          if(!target) return message.channel.send('<:VS_cancel:1006609599199186974> Debes mencionar a un miembro valido', { ephemeral: true }).then(m => { setTimeout(() => { m.delete() }, 5000) });
          const roles = message.mentions.roles.first()
          if(!roles) return message.channel.send('<:VS_cancel:1006609599199186974> Debes mencionar un rol valido', { ephemeral: true }).then(m => { setTimeout(() => { m.delete() }, 5000) });
          let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
        //comprobar que el BOT está por encima del usuario a avisar
        if (message.guild.members.me.roles.highest.position > usuario.roles.highest.position) {
          //comprobar que la posición del rol del usuario que ejecuta el comando sea mayor a la persona que vaya a avisar
          if (message.member.roles.highest.position > usuario.roles.highest.position) {
              //enviamos al usuario por privado que ha sido avisado!

          await target.roles.remove(roles)
          message.channel.send(
            {
                embeds: [new Discord.EmbedBuilder()
                    .setTitle(`👾 Sistema de Moderacion [RemoveRole] `)
                    .setDescription(`Le removiste el rol a **${target.user.username}**`)
                    .addFields(
                        {name:`Rol Removido`, value:`${roles}`},
                        {name:`Moderador`, value:`${message.author}`},
                        {name:`Usuario Afectado`, value:`${target.user.username}`},
                        {name:`Status Roles`, value:`False`})
                    .setColor("Red")
                    .setFooter({text:`Sistema de roles 001`})
                    .setTimestamp()
                    .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
                ]
                }).then(m => {
     setTimeout(() => {
       m.delete()
     }, 5000)
      });
            }else {
                return message.reply(`❌ **Tu Rol está por __debajo__ del rol a remover!**`, { ephemeral: true })
               }
      }else {
        return message.reply(`❌ **Mi Rol está por __debajo__ del rol a remover!**`, { ephemeral: true })
    }
}}