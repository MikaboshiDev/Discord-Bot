const Discord = require(`discord.js`);
module.exports = {
    name: "banana",
    aliases: ["Banana"],
    usage: "*banana",
    desc: "Sirve para ver la arma que posees",
    run: async(client, message, args) => {
        let porcentajes = Math.floor(Math.random() * 100)
        const embed = new Discord.EmbedBuilder()
        .setTitle(`La banana de **${message.author.username}** mide **${porcentajes} cm**`)
        .setImage("http://media.discordapp.net/attachments/755529601333067940/853072892702490624/banana.png")
        .setColor("Yellow")
        .setTimestamp()
        message.channel.send({ embeds: [embed]})
    }
}