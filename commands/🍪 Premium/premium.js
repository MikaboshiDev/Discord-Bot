const Discord = require(`discord.js`)
module.exports = {
    name: "premium",
    desc: "Sirve para comprobar si eres Premium",
    premium: true,
    run: async (client, message, args, prefix) => {
        message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 🎧 Premium Bot Status`)
            .setTimestamp()
            .setDescription(`Si ves este mensaje, significa que eres un usuario premium! 🌟`)
            .setFooter({text: `Solicitado por: ${message.author.tag}`, iconUrl: message.author.avatarURL})
            .setColor("Random")
        ]})
    }
}