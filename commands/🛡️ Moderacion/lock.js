const Discord = require("discord.js")

module.exports = {
    name: 'lock',
    desc: 'Sirve para bloquear un canal.',
    permisos: ["ManageChannels","MuteMembers"],
    permisos_bot: ["ManageChannels","Administrator"],
    run: async (client, message, args, prefix) => {
     
        const everyone = message.guild.roles.cache.find(r => r.name === "@everyone")

        message.channel.permissionOverwrites.edit(everyone, { SendMessages: false})

        const embed = new Discord.EmbedBuilder()
        .setTitle("Canal bloqueado.")
        .setDescription(`${message.channel} a sido bloqueado correctamente`)
        .setColor("#ffffff")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true})})
        await message.channel.send({ embeds: [embed]})
    }
}