const Discord = require('discord.js')
const config = require(`${process.cwd()}/config/config.json`)
const { parse } = require("twemoji-parser");

module.exports = {
    name: "addemoji",
    aliases: ["add-emoji", "emojiadd", "emoji-add"],
    desc: "Agrega con este comando mas emojis a tu servidor que te gusten de otros servidores",
    permisos: ["ManageEmojis"],
    permisos_bot: ["Administrator"],

    run: async (client, message, args, prefix) => {
        
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis){

            const embed = new Discord.EmbedBuilder()
            .setTitle(`<:VS_cancel:1006609599199186974> Error AddEmoji´s Steal Server`)
            .setDescription(`No se encontrarón **emojis** para agregar te dire posibles **motivos** ❌`)
            .addFields(
            {name:`Emoji`, value:`\`\`\`prolog\nEl emoji es Incorrecto\`\`\``},
            {name:`Respuesta`, value:`\`\`\`prolog\nNo agregaste ningun emoji para agregar\`\`\``},
            {name:`Incorrecto`, value:`\`\`\`prolog\nLo que agregaste no es un emoji ctm\`\`\``})
            .setFooter({ text:`Ejecutado por: ${message.member.user.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
            .setTimestamp()
            .setColor(config.colorErr)
            return message.channel.send({embeds: [embed], ephemeral: true})
        } 
        emojis.forEach(emote => {
        let emoji = Discord.Utils.parseEmoji(emote);
        if (emoji.id) {

      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`   

            
            message.guild.emojis.create(`${Link}`, `${`${emoji.name}`}`).then(em =>{
              let server = message.guild;
              let emebedcorrect = new Discord.EmbedBuilder()
            .setTitle("✔️ Emoji and Correct Guild")
            .setDescription(`**Emoji's agregado's** correctamente al servidor **Emoji's**`)
            .addFields(
                {name:`Names`, value:`\`\`\`prolog\n${emoji.name}\`\`\``},
                {name:`Links`, value:`\`\`\`prolog\n${Link}\`\`\``},
                {name:`Emojis`, value:`\`\`\`prolog\n${em.toString()}\`\`\``})
            .setColor(config.color)
            .setFooter({text: server.name, iconURL: server.iconURL({dynamic: true })})
            .setTimestamp()
             message.channel.send({embeds: [emebedcorrect], ephemeral: true});}).catch(error => {
              message.channel.send({embeds: [new Discord.EmbedBuilder()
                .setTitle(`<a:Dashbord:997754372496830534> Emojis Error`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(` Se encontro un error al agregar el emoji solicitado los siguientes motivos pueden ser los causantes`)
                .addFields(
                  {name:`Espacio`, value:`\`\`\`prolog\nNo hay espacio para mas emojis\`\`\``},
                  {name:`Emoji Incorrecto`, value:`\`\`\`prolog\nEl emoji solicitado no se a podido leer\`\`\``},
                  {name:`Mantenimiento`, value:`\`\`\`prolog\nLa vercion del comando no es compatible\`\`\``}
                )
                .setFooter({text:`En caso de mayores problemas contactar mi soporte`})
                .setTimestamp()
                .setColor("RANDOM")
            ], ephemeral: true})
                console.log(error)
             
})
          
        }
        })
    }
} 