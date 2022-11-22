const { asegurar_todo } = require(`${process.cwd()}/function/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
const Discord = require(`discord.js`);
module.exports = {
    name: "crime",
    aliases: ["crimen"],
    desc: "Sirve para robar monedas a un usuario",
    run: async (client, message, args, prefix) => {

        const usuario = message.author

        let data_usuario = await ecoSchema.findOne({ userID: usuario.id });
        if (data_usuario.dinero < 800) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription('❌**No tienes el dinero suficiente para poder pagar una deudad si es que te atrapan**')
            .setColor("Random")
        ]})

        await asegurar_todo(null, usuario.id);

        let data = await ecoSchema.findOne({ userID: message.author.id });

        let tiempo_ms = 30000000; // 5 minutos

        if(tiempo_ms - (Date.now() - data.crime) > 0) {
            let tiempo_restante = duration(Date.now() - data.crime - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a volver a cometer un crimen!!!**`)
                .setColor("Random")
            ]})
        }

        var crime =["Robar chicos", "ser Otaku", "Quimico en Metanfetaminas", "jugar Maicra", "Robando Diamantes", "ser Acosador", "EUA", "Venta de Drogas", "Coppel", "Extorcionista", "Chapo", "Alcoholico", "Ratero", "Hacker", "Hacker Etico", "Manager"]
        
        let cantidad = Math.floor(Math.random() * 700) + 100
        let probabilidad = Math.floor(Math.random() *8) + 0
        let hack = crime[Math.floor(Math.random() * crime.length)];

        console.log(`Crimen: ${hack}, Cantidad: ${cantidad}, Probabilidad: ${probabilidad} Tiempo_ms: ${tiempo_ms}`)
        
        await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
            $inc: {
                dinero: cantidad
            },
            crime: Date.now()
        })
        
        if(probabilidad >= 2) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`✅ **Has cometido un crimen en ${hack} y has ganado ${cantidad} monedas**`)
            .setColor("Random")
        ]})

        if(probabilidad <= 2) {
            await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
                $inc: {
                    dinero: -cantidad
                }, 
            })
        } 
        if(probabilidad <= 2) return message.reply({embeds: [new Discord.EmbedBuilder()
            .setTitle(` 💸  Economia Mundial 💸 `)
            .setTimestamp()
            .setDescription(`<:VS_cancel:1006609599199186974> Te han atrapado en el acto ${hack} y has pagado una deuda de ${cantidad} monedas `)
            .setColor("Random")
        ]})
    }

}