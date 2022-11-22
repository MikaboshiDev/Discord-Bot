
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Discord = require('discord.js');

module.exports = {
name: "hmidriff",
alias: ["diagrama","hmi"],
owner: false,
desc: "Comando waifu de diagrama",
run: async(client, message, args) => {
 if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true })
const image = await nsfw.hmidriff();
const embed = new Discord.EmbedBuilder()
    .setTitle(`Una otaku con un otaku PIENSALO!`)
    .setFooter({text:`Comandos nsfw fenix`})
    .setTimestamp()
    .setColor("Purple")
    .setImage(image);
message.channel.send({embeds: [embed]})
}}