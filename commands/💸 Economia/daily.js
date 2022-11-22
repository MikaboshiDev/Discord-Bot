const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
const Discord = require(`discord.js`);
module.exports = {
    name: "daily",
    aliases: ["diario"],
    desc: "Sirve para reclamar tu recompensa diaria",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 24 * 60 * 60 * 1000 // 86400000 ms
        let recompensa = 1200;
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - data.daily) > 0) {
            let tiempo_restante = duration(Date.now() - data.daily - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a reclamar tu recompensa diaria!**`)
                .setColor("Random")
            ]})
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            daily: Date.now()
        })
        return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`✅ **Has reclamado tu recompensa diaria de \`${recompensa} monedas\`!**`)
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
