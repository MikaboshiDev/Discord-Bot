const  Discord  = require("discord.js");
const { AuditLogEvent } = require(`discord.js`);
const logSchema = require(`${process.cwd()}/modelos/logsDB.js`);
module.exports = async (client, channel) => {
    let cl = await logSchema.findOne({ guildID: channel.guild.id })
    if (!cl) return;
    const entry = await channel.guild.fetchAuditLogs({ type: AuditLogEvent.ChannelCreate }).then(audit => audit.entries.first())
    let user = entry.executor;

    const embed = new Discord.EmbedBuilder()
        .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL()}` })
        .setColor("#36393f")
        .setDescription(`📌 **${channel.type}** El canal es: <#${channel.id}>`)
        .addFields(
            {name:`Categoria`, value:`${channel.parent}`},
            {name:`New Nombre`, value:`${channel.name}`},
            {name:`ID`, value:`\`\`\`ini\n Usuario = ${user.id}\n Canal = ${channel.id}\n Categoria = ${channel.parent}\n Nombre = ${channel.name}\n Cliente = ${client.user.username}\`\`\``})
        .setFooter({ text: `${client.user.username} `, iconURL: `${client.user.displayAvatarURL()}` })
        .setTimestamp();

    client.channels.cache.get(cl.channelID).send({ embeds: [embed] }).catch((err) => console.log(err));
 }