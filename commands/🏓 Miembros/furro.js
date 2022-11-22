const Discord = require("discord.js");

module.exports = {
    name: "furro",
    alias: ["fr"],

    run: async (client, message, args) => {
        let furro = Math.floor(Math.random() * 100)

        const embed = new Discord.EmbedBuilder()

        .setTitle(`${message.author.tag} **Tu nivel de furro es de** ${furro}%`)
        .setColor("Random")
        .setImage("https://i.pinimg.com/736x/ee/20/19/ee201936dd277945646648d175aefa9a.jpg")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
}