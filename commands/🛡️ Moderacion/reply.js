const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["decir", "comentar", "reply"],
    desc: "Sirve para que el staff comente algo desde el bot.",
    permisos: ["Administrator", "BanMembers"],
    permisos_bot: ["SendMessages","ManageMessages"],
    run: async (client, message, args) => {
        
        const mensaje = args.join(" ")
        let permiso = message.member.permissions.has("Mute_Members")
        if(!permiso) return message.channel.send("<:VS_cancel:1006609599199186974> **Solo los STAFF de este servidor pueden ejecutar este comando.**", { ephemeral: true })
        if(!mensaje) return message.reply("<:VS_cancel:1006609599199186974> **Debes especificar un mensaje para comentar.**", { ephemeral: true })

        setTimeout(function(){
            message.delete()

            const say = new Discord.EmbedBuilder()

            .setTitle("ANUNCIO DEL STAFF")
            .setDescription(`> ${mensaje} `)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter({text:"Author " + message.member.displayName, iconURL:message.author.displayAvatarURL()})
            .setTimestamp()
            .setColor("RANDOM")
    
            message.channel.send({ embeds: [say] })
        }, 1000)

    }
}