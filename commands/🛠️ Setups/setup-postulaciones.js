const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
    name: "setup-postulaciones",
    aliases: ["setup-applys"],
    desc: "Sirve para crear un sistema de Posstulaciones",
    permisos: ["Administrator"],
    permisos_bot: ["ManageRoles", "ManageChannels"],
    run: async (client, message, args, prefix) => {
        var objeto = {
            canal: "",
            mensaje: "",
        };

        const quecanal = await message.reply({
            embeds: [new Discord.EmbedBuilder()
            .setTitle(`¿Qué canal quieres usar para el sistema de postulaciones?`)
            .setDescription(`*Simplemente menciona el canal o envia su ID!*`)
            .setColor(client.color)
            ]
        });

        await quecanal.channel.awaitMessages({
            filter: m=> m.author.id === message.author.id,
            max: 1,
            errors: ["time"],
            time: 180e3
        }).then(async collected => {
            var message = collected.first();
            const channel = message.guild.channels.cache.get(message.content) || message.mentions.channels.filter(c => c.guild.id == message.guild.id).first()
            if(channel) {
                objeto.canal = channel.id;
                const quemensaje = await message.reply({
                    embeds: [new Discord.EmbedBuilder()
                    .setTitle(`¿Qué mensaje quieres usar para el sistema de postulaciones?`)
                    .setDescription(`*Simplemente envía el mensaje!*`)
                    .setColor(client.color)
                    ]
                });
                await quemensaje.channel.awaitMessages({
                    filter: m=> m.author.id === message.author.id,
                    max: 1,
                    errors: ["time"],
                    time: 180e3
                }).then(async collected => {
                    var message = collected.first();
                    const msg = await message.guild.channels.cache.get(objeto.canal).send({
                        embeds: [new Discord.EmbedBuilder()
                            .setTitle(`📥 Crea un Ticket`)
                            .setDescription(`${message.content.substring(0, 2048)}`)
                            .setColor(client.color)
                        ],
                        components: [new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder().setLabel("Crear Postulacion").setEmoji("1001191985207595018").setCustomId("crear_postulacion").setStyle("Success"))]
                    })
                    objeto.mensaje = msg.id
                    await setupSchema.findOneAndUpdate({guildID: message.guild.id}, {
                        sistema_postulaciones: objeto
                    });
                    return message.reply(`✅ **Configurado correctamente en <#${objeto.canal}>**`)
                }).catch((e) => {
                    return message.reply(`<:VS_cancel:1006609599199186974> **El tiempo ha expirado!**`)
                })
            } else {
                return message.reply(`<:VS_cancel:1006609599199186974> **No se ha encontrado el canal que has especificado!**`)
            }
        }).catch((e) => {
            return message.reply(`<:VS_cancel:1006609599199186974> **El tiempo ha expirado!**`)
        })

    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
