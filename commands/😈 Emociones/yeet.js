const { EmbedBuilder } = require("discord.js"); ///llamamos a la constante discord.
const anime = require('anime-actions'); ///el modulo npm (npm i discord-nsfw).


module.exports = {///comand handler
    name: "yeet",
    aliases: ["yeet"],
    run: async (client, message, args) => { 

    const image = await anime.yeet(); ///definimos a img o gif que saldra en el embed.
    const embed = new EmbedBuilder() ///creamos el embed.
    .setImage(image)
    .setColor("Random")
    .setFooter({text:" Fenix Web Slash | Anime Emotions", iconURL:client.user.displayAvatarURL()})
    message.channel.send({ embeds: [embed]}) ///enviamos.
   }
}