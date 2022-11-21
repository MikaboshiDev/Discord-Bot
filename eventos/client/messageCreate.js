const config = require(`${process.cwd()}/config/config.json`);
const afkSchema = require(`${process.cwd()}/modelos/afk`);
const Discord = require('discord.js');
const db = require(`megadb`);
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`);
const { asegurar_todo } = require(`${process.cwd()}/function/funciones.js`);
module.exports = async (client, message) => {
    if (!message.guild || !message.channel || message.author.bot) return;
    await asegurar_todo(message.guild.id, message.author.id);
    let data = await serverSchema.findOne({guildID: message.guild.id});
    if (!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if (command) {
        if (command.owner) {
            if (!config.ownerIDS.includes(message.author.id)) return message.reply({embeds: [new Discord.EmbedBuilder()
              .setTitle(` <a:offline:1006316235451011134> Bot Creador`)
              .setTimestamp()  
              .setThumbnail(message.guild.iconURL({ dynamic: true }))                                                                             
              .setDescription(` <:VS_cancel:1006609599199186974> Solo los dueños pueden ejecutar este comando: **Dueños del bot:** ${config.ownerIDS.map(ownerid => `<@${ownerid}>`)}`)
              .setColor("Random")
          ]}).then(m => {
     setTimeout(() => {
       m.delete()
     }, 3000)
      });
        }

        if(command.permisos_bot){
          if(!message.guild.members.me.permissions.has(command.permisos_bot)) return message.reply({embeds: [new Discord.EmbedBuilder()
              .setTitle(` <a:offline:1006316235451011134> Permisos Incompletos Bot`)
              .setTimestamp()
              .setThumbnail(message.guild.iconURL({ dynamic: true }))
              .setDescription(`<:VS_cancel:1006609599199186974> **No tengo **suficientes** permisos para ejecutar este comando!**\nNecesito los siguientes permisos ${command.permisos_bot.map(permiso => `\`${permiso}\``).join(", ")}`)
              .setColor("Random")
          ]}).then(m => {
     setTimeout(() => {
       m.delete()
     }, 3000)
      })}

        if(command.permisos){
            if(!message.member.permissions.has(command.permisos)) return message.reply({embeds: [new Discord.EmbedBuilder()
              .setTitle(` <a:offline:1006316235451011134> Permisos Incompletos `)
              .setTimestamp()   
              .setThumbnail(message.guild.iconURL({ dynamic: true }))                                                                                
              .setDescription(`<:VS_cancel:1006609599199186974> **No tienes **suficientes** permisos para ejecutar este comando!**\nNecesitas los siguientes permisos ${command.permisos.map(permiso => `\`${permiso}\``).join(", ")}`)
              .setColor("Random")
          ]}).then(m => {
     setTimeout(() => {
       m.delete()
     }, 3000)
      });
        }

        command.run(client, message, args, data.prefijo, data.idioma);
    } else {
        return message.reply({embeds: [new Discord.EmbedBuilder()
          .setTitle(` <a:offline:1006316235451011134> Comando Incorrecto`)
          .setTimestamp()
          .setThumbnail(message.guild.iconURL({ dynamic: true }))                             
          .setDescription(`<:VS_cancel:1006609599199186974> **${message.author.tag}** no encontre este comando sugierelo con >sugerencia-bot`)
          .setColor("Random")
      ]}).then(m => {
     setTimeout(() => {
       m.delete()
     }, 3000)
      });  
     }
    }




