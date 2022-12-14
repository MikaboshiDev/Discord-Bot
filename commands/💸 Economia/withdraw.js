const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require(`discord.js`);
module.exports = {
    name: "withdraw",
    aliases: ["wd", "sacar"],
    desc: "Sirve para depositar dinero en el banco",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        let cantidad = args[0];
        //comprobaciones previas
        if(["todo", "all-in", "all"].includes(args[0])) {
            cantidad = data.banco
        } else {
            if(isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` πΈ  Economia Mundial πΈ `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No has especificado una cantidad vΓ‘lida para sacar!**`)
                .setColor("Random")
            ]});

            if(cantidad > data.banco) return message.reply({embeds: [new Discord.EmbedBuilder()
                .setTitle(` πΈ  Economia Mundial πΈ `)
                .setTimestamp()
                .setDescription(`<:VS_cancel:1006609599199186974> **No tienes tanto dinero para sacar!**`)
                .setColor("Random")
            ]});
        }
       await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
           $inc: {
               banco: -cantidad,
               dinero: cantidad,
           }
       });
       return message.reply({embeds: [new Discord.EmbedBuilder()
        .setTitle(` πΈ  Economia Mundial πΈ `)
        .setTimestamp()
        .setDescription(`β **Has sacado \`${cantidad} monedas\` de tu banco!**`)
        .setColor("Random")
    ]});
    }
}

/*
βββββββββββββββββββββββββββββββββββββββββββββββββββββββ
β    || - || Desarrollado por dewstouh#1088 || - ||   β
β    ----------| discord.gg/MBPsvcphGf |----------    β
βββββββββββββββββββββββββββββββββββββββββββββββββββββββ
*/
