const Discord = require("discord.js");
module.exports = {
    name: "hexa",
    aliases: ["randomcolor", "colorrandom", "color-aleatorio"],
    description: "Generador de Color aleatorio",
    run: async (client, message, args, prefix) => {
          let coloraleatorio = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
          message.channel.send({     
             embeds: [new Discord.EmbedBuilder()
            .setTitle(`✅ Nuevo Color Hexadecimal Creado`)
            .setDescription(`Aqui tienes tu codigo Hexadecimal creado: \`${coloraleatorio}\` servidor!`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor(client.color)
            .setTimestamp()
        ]
     })
}}