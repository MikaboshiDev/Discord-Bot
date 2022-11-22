const Discord = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: [],

    run: async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let png = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        let jpg = user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })


        const avatar = new Discord.EmbedBuilder()
            .setAuthor({ name: "Avatar de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setFooter({text:`Avatar pedido por ${message.author.tag}`})
            .setTimestamp()
            .setColor(client.color)

        message.channel.send({ embeds: [avatar], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("📸").setLabel("PNG").setURL(`${png}`),
                new Discord.ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("📸").setLabel("JPG").setURL(`${jpg}`),
                new Discord.ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("📸").setLabel("WEBP").setURL(`${webp}`),
            ]
        )]})
    }
    
}