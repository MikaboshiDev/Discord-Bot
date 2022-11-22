const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Discord = require('discord.js');

module.exports = {
name: "hentaithigh",
alias: ["hentai","waifus"],
owner: false,
desc: "Comando de monas chinas",
run: async(client, message, args) => {
 if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true })
const image = await nsfw.hentaithigh();
const embed = new Discord.EmbedBuilder()
    .setTitle(`QUIERES! jugar un rato conmigo 🥵`)
    .setColor("Purple")
    .setFooter({text:`Comandos nsfw fenix`})
    .setTimestamp()
    .setImage(image);
message.channel.send({embeds: [embed]})

}}