const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require(`discord.js`);
module.exports = {
    name: "deposit",
    aliases: ["depositar", "dep"],
    desc: "Sirve para depositar dinero en el banco",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        let cantidad = args[0];
        //comprobaciones previas
        if(["todo", "all-in", "all"].includes(args[0])) {
            cantidad = data.dinero
        } else {
            if(isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No has especificado una cantidad válida para depositar!**`)
                .setColor("Random")
            ]});
            if(cantidad > data.dinero) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` 💸  Economia Mundial 💸 `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No tienes tanto dinero para depositar!**`)
                .setColor("Random")
            ]});
        }
       await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
           $inc: {
               dinero: -cantidad,
               banco: cantidad
           }
       });
       return message.reply({embeds: [new Discord.EmbedBuilder()
        .setTitle(` 💸  Economia Mundial 💸 `)
        .setTimestamp()
        .setDescription(`✅ **Has depositado \`${cantidad} monedas\` en tu banco!**`)
        .setColor("Random")
    ]});
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
