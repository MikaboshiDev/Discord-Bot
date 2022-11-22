const Discord = require(`discord.js`)
module.exports = {
    name: "nuke",
    description: ["nuke"],
    permisos_bot: ["Administrator"],
    permisos: ["ManageChannels","ManageMessages"],
             run: async(client, message, args) => {
            try {
            const channeltonuke =message.mentions.channels.first() || message.channel;
            message.channel.send(`Nuking ${channeltonuke}`);
            const position = message.channel.position;
            const newChannel = await message.channel.clone();
            await message.channel.delete();
            newChannel.setPosition(position);
            newChannel.send({embeds: [new Discord.EmbedBuilder()
                .setTitle(` <:VS_cancel:1006609599199186974> Canal Nukeado Completamente`)
                .setDescription(`El canal fue nukeado completamente por **${message.member}**`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setTimestamp()
                .setColor("Random")
            ]});
            }  catch (err) {
                console.error(err)
                message.reply(`<:VS_cancel:1006609599199186974> No e podido nukear este canal pero te lo e duplicado, verifica que no tengas el canal como principal o que mis permisos son correctos`).then(m => { setTimeout(() => { m.delete() }, 5000) });
   }
}}