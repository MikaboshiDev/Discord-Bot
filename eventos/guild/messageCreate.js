const db = require('megadb')
let al = new db.crearDB('antilinks')
const Discord = require('discord.js');
module.exports = async (client, message) => {
    

    let status = await al.obtener(message.guild.id)

    if(status === 'off') return;

    if(status === 'on'){
        if(message.content.toLowerCase().includes('https')){
            if(message.member.permissions.has("Administrator")) return;
            message.delete()
            message.channel.send({embeds: [new Discord.EmbedBuilder()
                .setTitle(`<:VS_cancel:1006609599199186974> Sistema Antilinks`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**${message.author}**, No puedes enviar links en este servidor ON!`)
                .setColor(client.color)
                .setTimestamp()
                ]})
        }
    }
}