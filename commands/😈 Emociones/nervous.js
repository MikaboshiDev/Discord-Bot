const Discord = require('discord.js')
const anime = require('anime-actions')
module.exports = {
    name: "nervous",
    aliases: [],
    desc: "nervous",
    run: async (client, message, args, prefix) => {
 
            const embed = new Discord.EmbedBuilder()
            .setTitle(`** ${message.author.tag} estas algo nervioso calmate!!**`)
            .setImage(await anime.nervous())
            .setFooter({text: `Solicitado Por: ${message.author.tag}`})
            .setColor("Random");
            message.channel.send({ embeds: [embed] })
            
    }
} 