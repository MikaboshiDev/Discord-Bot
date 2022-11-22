const Discord = require('discord.js');

module.exports = {
    name: 'borracho',
    aliases: ['borracho', 'borrachito',"peda"],
    desc: 'Comando para ver cuanto de alcohólico está un usuario',
    usage: "*borracho <user>",
    run: async (client, message, args, prefix) => {
        const borracho = Math.floor(Math.random() * 100)
        message.channel.send({embeds: [
            new Discord.EmbedBuilder()
            .setTitle(`🍺 Porcentaje de Borracho 🍺`)
            .setDescription(`**Tu porcentaje de alcohol en vena es de ${borracho}%**`)
            .setThumbnail(`https://i.imgur.com/EMCghsj.gif`)
            .setColor('#FF0004')
            .setFooter({ text: `Bar Metrix`})
        ]}).catch(() => {message.reply(`No se ha podido mostrar correctamente el porcentaje de alcohol en vena`)})
    }
}