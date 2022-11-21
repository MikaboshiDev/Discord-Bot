
const setupSchema = require(`${process.cwd()}/modelos/setups.js`)
const sugSchema = require(`${process.cwd()}/modelos/valoracion.js`)
const Discord = require('discord.js')
module.exports = client => {
    client.on("messageCreate", async message => {
        try {
            if (!message.guild || !message.channel || message.author.bot) return;
            let data = await setupSchema.findOne({ guildID: message.guild.id });
            if (!data || !data.valoraciones || !message.guild.channels.cache.get(data.valoraciones) || message.channel.id !== data.valoraciones) return;
            try {
                message.delete();
                let msg = await message.channel.send({
                    embeds: [new Discord.EmbedBuilder()
                        .setAuthor({ name: "Valoración de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setTitle(`🌟 Valoraciones del Servidor 🌟`)
                        .setDescription(`<:panda_gift:1007529203119439882> ${message.content}`)
                        .addFields(
                        {name:`Autor`, value: message.author.tag, inline: true},
                        {name:`Canal`, value: message.channel.id, inline: true},
                        {name:`Valoracion`, value: `🌟 🌟 🌟 🌟 🌟`, inline: true})
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setColor(client.color)
                        .setFooter({ text: "¿Quieres dar una valoración de nosotros? Solo escríbela aquí.", iconURL: "https://images.emojiterra.com/google/android-10/512px/1f64c.png" })
                        .setTimestamp()
                    ],
                });
                let data_msg = new sugSchema({
                    messageID: msg.id,
                    autor: message.author.id
                });
                data_msg.save();
            } catch (e) { console.log(e) }
        } catch (e) { console.log(e) }
    })
}