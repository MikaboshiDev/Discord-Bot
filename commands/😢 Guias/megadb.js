const Discord = require(`discord.js`);
module.exports = {
    name: "megadb",
    desc: "uso de la libreria megadb",
    aliases: ["mega-db"],
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
                            .setTitle(`📝 MegaDB`)
                            .setColor("Random")
                            .setDescription(`**MegaDB** es una libreria de base de datos para discord.js mega es una de las librerias mas faciles de usar en discord.js para bots`)
                            .addFields(
                                {name: `Como crear una base de datos`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos');\`\`\``},
                                {name: `Como crear una base de datos con un nombre de archivo`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos', 'nombre del archivo');\`\`\``},
                                {name: `Como extraer un valor de la base de datos`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos');\n\nconst valor = await db.obtener('nombre del valor');\nconsole.log(valor);\`\`\``},
                                {name: `Como guardar un valor en la base de datos`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos');\n\nawait db.establecer('nombre del valor', 'valor');\`\`\``},
                                {name: `Como borrar un valor de la base de datos`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos');\n\nawait db.eliminar('nombre del valor');\`\`\``},
                                {name: `Como restablecer la base de datos`, value: `\`\`\`js\nconst db = require('megadb');\nconst db = new db.crearDB('nombre de la base de datos');\n\nawait db.reiniciar();\`\`\``},
                            )
                            .setFooter({text: `Que es megadb y como se usa hoy en dia`})
                            .setTimestamp()

                            message.reply({ embeds: [embed]})
    }
}