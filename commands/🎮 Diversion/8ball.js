const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "8ball",
    usage: "*8ball <question>",
    desc:"juega al 8ball y realiza una pregunta al bot",
    aliases: ["8b", "ball"],
    run: async(client, message, args) => {
    let repli = [
        "No.",
        "Never!",
        "NOT POSSIBLE",
        "jamas ni lo sueñes",
        "Impossible.",
        "Nope.",
        "My sources say no",
        "Better not tell you now.",
        "Yes.",
        "jajajajajajajajjajajajajajajajajajajajajajajaja",
        "Yeah.",
        "Definitely.",
        "Certainly!",
        "Ofcourse.",
        "YEEEEEEEEE",
        "Yup",
        "NOOOOO no eres digno",
        "puede ser",
        "quisas",
        "no se",
        "nose mi creador no me creo para pensar ._.",
        "Amogos 😳",
        "Sussy.",
        "What",
        "Wait what",
        "Ask again later",
        "preguntale a alguien mas",
        "Ask me later im busy with your mom",
        "yesnt",
        "sus"
    ]

    const no = new EmbedBuilder()
    .setDescription("🗿 | 8Ball needs a question to give an answer.")
    .setColor("Yellow")
    let replies = repli[Math.floor(Math.random() * repli.length)]
    let question = args.join(" ")
    if(!question) return message.reply({embeds: [no]})
    let answer = new MessageEmbed()
    .addField("**❓ Question **", `*${question}?*`)
    .setTitle('8Ball answers your question.')
    .addField("**🎱 Answer **", `${replies}`)
    .setFooter({text:`El 8ball del gran sabio buda`})
    .setTimestamp(`https://cdn.discordapp.com/attachments/992251291214545026/998974029614567515/d9cb1a809bcc4b1b915f40c784e9b365.png`)
    .setColor("Gold")
    

    message.channel.send({embeds: [answer]})   
    }
}