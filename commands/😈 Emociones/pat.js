const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "pat",
   alias: ["palmada"],
   premiun: false,

   async run(client, message, args){

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a alguien que si sea real xd.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso")

    if (user.bot) return message.channel.send("No puedes hacer eso busca amigos ._.")



        neko.pat().then(neko => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Buen chico, Buen chico!")
        .setDescription(`${message.author.username} Le a dado unas palmaditas a **${user}**`)
        .setImage(neko.url)
        .setColor("Random")

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.pat
       }
   }
}