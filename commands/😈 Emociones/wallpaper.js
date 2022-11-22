const Discord = require('discord.js')
const anime = require('anime-actions')
module.exports = {
    name: "wallpaper",
    aliases: [],
    desc: "wallpaper",
    run: async (client, message, args, prefix) => {
 
            const embed = new Discord.EmbedBuilder()
            .setTitle(`**wallpaper para mi chico!!**`)
            .setImage(await anime.wallpaper())
            .setFooter({text: `Solicitado Por: ${message.author.tag}`})
            .setColor("Random");
            message.channel.send({ embeds: [embed] })
            
    }
} 