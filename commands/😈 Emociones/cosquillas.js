const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "tickle",
   alias: ["cosquillas"],
   premiun: false,

   async run(client, message, args){

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a quien hacerle cosquillas.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso XD")

    if (user.bot) return message.channel.send("No puedes hacerle cosquillas a un bot, por nuv 😏")



        neko.tickle().then(neko => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Cosquillas!")
        .setDescription(`${message.author.username} Le a hecho cosquillas a **${user}**`)
        .setImage(neko.url)
        .setColor("Random")

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.tickle
       }
   }
}