const Discord = require("discord.js"); ///llamamos a la constante discord.
const NSFW = require("discord-nsfw"); ///el modulo npm (npm i discord-nsfw).
const nsfw = new NSFW();

module.exports = {///comand handler
    name: "ass",
    aliases: ["ass"],
    run: async (client, message, args) => { 
    if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true }) ///esto hara que no funcione en chats normales.

    const image = await nsfw.ass(); ///definimos a img o gif que saldra en el embed.
    const embed = new Discord.EmbedBuilder() ///creamos el embed.
    .setTitle("Te gusta o no :c ?")
    .setImage(image)
    .setColor("Random")
    .setFooter({text:" Fenix Web Slash | NSFW", iconURL:client.user.displayAvatarURL()})
    message.channel.send({ embeds: [embed]}) ///enviamos.
   }
}