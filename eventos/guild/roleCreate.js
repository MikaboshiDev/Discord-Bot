const Discord = require(`discord.js`);
const { AuditLogEvent } = require(`discord.js`);
const logSchema = require(`${process.cwd()}/modelos/logsDB.js`);

module.exports = async (client, role) => {

    let cl = await logSchema.findOne({ guildID: role.guild.id })
    if (!cl) return;
    const entry = await role.guild.fetchAuditLogs({ type: AuditLogEvent.RoleCreate }).then(audit => audit.entries.first())
    let user = entry.executor;

    const embed = new Discord.EmbedBuilder()
    .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL()}` })
    .setColor("#36393f")
    .setDescription(`📘 **Roles** un nuevo rol a sido creado en el **Servidor**.`)
    .addFields(
        {name:`Nuevo Rol:`, value:`${role.name}`},
        {name:`Id Rol:`, value:`${role.id}`},
        {name:`ID`, value:`\`\`\`ini\n Roles = ${role.name}\n Roles ID = ${role.id}\n Bot = ${client.user.username}\`\`\``})
    .setFooter({ text: `${client.user.username} `, iconURL: `${client.user.displayAvatarURL()}` })
    .setTimestamp();

    client.channels.cache.get(cl.channelID).send({ embeds: [embed] }).catch((err) => console.log(err));

}
