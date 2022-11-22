const { asegurar_todo } = require(`${process.cwd()}/function/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
const Discord = require(`discord.js`);
module.exports = {
    name: "rob",
    aliases: ["steal", "robar"],
    desc: "Sirve para robar monedas a un usuario",
    run: async (client, message, args, prefix) => {
        if (!args.length) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`<:VS_cancel:1006609599199186974> **Tienes que especificar al usuario para robar!**`)
            .setColor("Random")
        ]})
        const usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
        if (!usuario) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`<:VS_cancel:1006609599199186974> **No se ha encontrado al usuario que has especificado**`)
            .setColor("Random")
        ]})
        //aseguramos la economia del usuario a robar
        await asegurar_todo(null, usuario.id);
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({ userID: message.author.id });
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 5 * 60 * 1000; // 5 minutos
        //comprobaciones previas
        if (tiempo_ms - (Date.now() - data.rob) > 0) {
            let tiempo_restante = duration(Date.now() - data.rob - tiempo_ms,
                {
                    language: "es",
                    units: ["h", "m", "s"],
                    round: true,
                })
            return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a robar a un usuario!**`)
                .setColor("Random")
            ]})
        }
        let data_usuario = await ecoSchema.findOne({ userID: usuario.id });
        if (data_usuario.dinero < 500) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`<:VS_cancel:1006609599199186974> **No puedes robar al usuario ya que, tiene menos de \`500 monedas\`**`)
            .setColor("Random")
        ]})
        let cantidad = Math.floor(Math.random() * 400) + 100
        //comprobaciones previas
        if (cantidad > data_usuario.dinero) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`<:VS_cancel:1006609599199186974> **El usuario no tiene suficiente dinero para ser robado!**`)
            .setColor("Random")
        ]})
        //le quitamos las monedas al usuario DE SU CARTERA y las introducimos en la nuestra, añadiendo la fecha de cuando se ha ejecutado el comando "rob"
        await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
            $inc: {
                dinero: cantidad
            },
            rob: Date.now()
        })
        //le quitamos las monedas al usuario de SU CARTERA
        await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
            $inc: {
                dinero: -cantidad
            },
        })
        return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`✅ **Has robado \`${cantidad} monedas\` a \`${usuario.user.tag}\`**`)
            .setColor("Random")
        ]})
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
