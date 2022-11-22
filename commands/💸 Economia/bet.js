const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require(`discord.js`);
module.exports = {
    name: "bet",
    aliases: ["apostar"],
    desc: "Sirve para apostar una cantidad de dinero",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({ userID: message.author.id });
        let cantidad = args[0];
        //comprobaciones previas
        if (["todo", "all-in", "all"].includes(args[0])) {
            cantidad = data.dinero
        } else {
            if (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No has especificado una cantidad válida para apostar!**`)
                .setColor("Random")
            ]});
            if (cantidad > data.dinero) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No tienes tanto dinero para apostar!**`)
                .setColor("Random")
            ]});
        }
        //creamos las posibildades
        let posibildades = ["ganar", "perder"];
        //definimos el resultado de las posibildades
        let resultado = posibildades[Math.floor(Math.random() * posibildades.length)];
        //si el resultado es ganar, la persona gana lo que apueste, pero si es perder, la persona pierde lo que apuesta
        if (resultado === "ganar") {
            await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
                $inc: {
                    dinero: cantidad
                }
            })
            return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`**Has ganado \`${cantidad} monedas\`**`)
                .setColor("Random")
            ]})
        } else {
            await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
                $inc: {
                    dinero: -cantidad
                }
            })
            return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`**Has perdido \`${cantidad} monedas\`**`)
                .setColor("Random")
            ]})
        }
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
