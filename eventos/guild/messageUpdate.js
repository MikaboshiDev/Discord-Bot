const  Discord  = require("discord.js");
const logSchema = require(`${process.cwd()}/modelos/logsDB.js`);
module.exports = async (client, oldMessage, newMessage) => {
        
        if(newMessage.author.bot) return;
        if(oldMessage.content === newMessage.content) return;
    
        let cl = await logSchema.findOne({guildID: newMessage.guild.id})
        if(!cl) return;
        const cuenta = 1950;
        const Original = oldMessage.content.slice(0, cuenta) + (oldMessage.content.length > 1950 ? " ..." : "");
        const Editado = newMessage.content.slice(0, cuenta) + (newMessage.content.length > 1950 ? " ..." : "");
    
        const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: `${newMessage.author.tag}`, iconURL: `${newMessage.member.displayAvatarURL()}` })
            .setColor("#36393f")
            .setDescription(`📘 **${newMessage.author.tag}** Edito su mensaje en: **${newMessage.channel.name}**.`)
            .addFields(
                {name:`Canal Interaccion`, value:`${newMessage.channel}\n[ Ir al Mensage Logs ](${newMessage.url})`},
                {name:`Mensaje antiguo:`, value:`${Original}`},
                {name:`Mensaje nuevo:`, value:`${Editado}`},
                {name:`ID`, value:`\`\`\`ini\n Usuario = ${newMessage.author.tag}\n Mensage = ${newMessage.id}\n Canal = ${newMessage.channel}\n Bot = ${client.user.username}\`\`\``})
            .setFooter({ text: `${client.user.username} `, iconURL: `${client.user.displayAvatarURL()}` })
            .setTimestamp();
    

    client.channels.cache.get(cl.channelID).send({ embeds: [embed] }).catch((err) => console.log(err));
 }