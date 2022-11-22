const mongoose = require("mongoose"); //Requerimos mongoose.
const logsSchema = require(`${process.cwd()}/modelos/logsDB.js`);
const Discord = require('discord.js');

module.exports = {
    name: "setup-logs",
    aliases: ["setlog", "setlogs", "logs"],
    desc: "Sirve para iniciar la funcion de logger",
    permisos: ["Manage_Guild"],
    permisos_bot: ["Manage_Guild"],
    run: async (client, message, args, prefix) => {

        let channel = message.mentions.channels.first()
        if (!channel) {//Si no menciona ningun canal, retorna.
            return message.channel.send('<:VS_cancel:1006609599199186974> **Debes mencionar un canal del servidor.**')
        }
        let establecer = await logsSchema.findOne({ guildID: message.guild.id }).exec()//Busca si ya hay algo establecido.
        if (establecer) {
            await establecer.updateOne({ guildID: message.guild.id, channelID: channel.id }) //Busca si ya hay algun canal guardado.
            message.channel.send('<a:online:1007081621360476250> El Canal logs es <#' + channel.id + '>.')//Retorna el mensaje.
        } else {
            let establecido = new logsSchema({ guildID: message.guild.id, channelID: channel.id })//Colocamos los nuevos datos.
            await establecido.save()//Guardamos los nuevos datos.
            message.channel.send('<a:online:1007081621360476250> El Canal de logs es <#' + channel.id + '>.')//Retorna el mensaje.
        }
        let ewe = await logsSchema.findOne({ guildID: message.guild.id })//Averigua si ya hay algo guardado en el servidor.
        if (!ewe) {
            return message.channel.send('<:VS_cancel:1006609599199186974> No hay ningun canal configurado.')//Si no hay canal, retorna.
        }
        let channel2 = message.guild.channels.cache.get(ewe.channelID)
        channel2.send(`<a:online:1007081621360476250> Este es el nuevo canal de logs.`)
    }
}