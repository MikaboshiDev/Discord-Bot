const Discord = require(`discord.js`);
module.exports = {
    name: "addrole",
    aliases: ["add-role", "gv"],
    usage: "add-role [@USUARIO] [@ROL]",
    permisos: ["ManageRoles","ManageMessages"],
    permisos_bot: ["Administrator","ManageRoles"],
    run: async (client, message, args, prefix) => {
  
          const target = message.mentions.members.first()
          if(!target) return message.channel.send('<:VS_cancel:1006609599199186974> Debes mencionar a un miembro valido', { ephemeral: true }).then(m => { setTimeout(() => { m.delete() }, 5000) });
          const role = message.mentions.roles.first()
          if(!role) return message.channel.send('<:VS_cancel:1006609599199186974> Debes mencionar un rol valido', { ephemeral: true }).then(m => { setTimeout(() => { m.delete() }, 5000) });
          let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
          //comprobar que el BOT está por encima del usuario a avisar
          if (message.guild.members.me.roles.highest.position > usuario.roles.highest.position) {
          //comprobar que la posición del rol del usuario que ejecuta el comando sea mayor a la persona que vaya a avisar
          if (message.member.roles.highest.position > usuario.roles.highest.position) {
          //enviamos al usuario por privado que ha sido avisado!

          await target.roles.add(role)
          message.channel.send(
            {
                embeds: [new Discord.EmbedBuilder()
                    .setTitle(`👾 Sistema de Moderacion [AddRole] `)
                    .setDescription(`Le agregaste el rol a **${target.user.username}**`)
                    .addFields(
                        {name:`Rol Agregado`, value:`${role}`},
                        {name:`Moderador`, value:`${message.author}`},
                        {name:`Usuario Agregado`, value:`${target.user.username}`},
                        {name:`Status Roles`, value:`True`})
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
                return message.reply(`<:VS_cancel:1006609599199186974> **Tu Rol está por __debajo__ del rol a agregar!**`, { ephemeral: true })
               }
      }else {
        return message.reply(`<:VS_cancel:1006609599199186974> **Mi Rol está por __debajo__ del rol a agregar!**`, { ephemeral: true })
    }
 }}