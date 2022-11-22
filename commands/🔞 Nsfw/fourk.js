const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Discord = require('discord.js');

module.exports = {
name: "4k",
alias: ["fourk"],
owner: false,
desc: "Comando 4k del nsfw",
run: async(client, message, args) => {
 if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true })
const image = await nsfw.fourk();
const embed = new Discord.EmbedBuilder()
    .setTitle(`Ven vamos a disfrutarnos juntos o tienes miedo`)
    .setColor("#ff36f6")
    .setFooter({text:`Comandos nsfw fenix`})
    .setTimestamp()
    .setImage(image);
message.channel.send({embeds: [embed]})
}}