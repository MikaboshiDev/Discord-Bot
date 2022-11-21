
const setupSchema = require(`${process.cwd()}/modelos/setups.js`)
const sugSchema = require(`${process.cwd()}/modelos/reporte.js`)
const Discord = require('discord.js')
module.exports = client => {
    client.on("messageCreate", async message => {
        try {
            if (!message.guild || !message.channel || message.author.bot) return;
            let data = await setupSchema.findOne({ guildID: message.guild.id });
            if (!data || !data.reporte || !message.guild.channels.cache.get(data.reporte) || message.channel.id !== data.reporte) return;
            try {
                message.delete();
                let msg = await message.channel.send({
                    embeds: [new Discord.EmbedBuilder()
                        .setAuthor({ name: "Anuncio de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setTitle(`${message.author.tag} a hecho un nuevo Anuncio`)
                        .setDescription(`${message.content}`)
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setColor(client.color)
                        .setFooter({ text: "Un nuevo anuncio a aparecido con nosotros.", iconURL: "https://images.emojiterra.com/google/android-10/512px/1f64c.png" })
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