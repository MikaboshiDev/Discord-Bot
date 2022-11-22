const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
    name: "setup-valoraciones",
    permisos: ["Administrador"],
    permisos_bot: ["Administrator"],
    run: async (client, message, args, prefix) => {
        const channel = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first();
        if(!channel) return message.reply(`<:VS_cancel:1006609599199186974>  **Tienes que especificar un canal válido del servidor!**`);
        await setupSchema.findOneAndUpdate({guildID: message.guild.id,
            valoraciones: channel.id
        })
        return message.reply({embeds: [new Discord.MessageEmbed()
        .setTitle(`<a:pin:1006997984053035069> Establecido el canal de valoraciones a \`${channel.name}\``)
        .setDescription(`*Cada vez que una persona envíe un mensaje en ${channel}, lo convertiré en una valoración!*`)
        .setColor(client.color)
        ]})
    }
}