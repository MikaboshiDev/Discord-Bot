const Discord = require(`discord.js`);
module.exports = {
    name: "pino",
    desc: "que es la libreria pino y su uso en discord.js",
    aliases: [""],
    run: async (client, message, args, prefix) => {

        const embed = new Discord.EmbedBuilder()
                            .setTitle(`📝 Pino`)
                            .setColor("Random")
                            .setDescription(`**Pino** es una librería de registro de nivel de producción rápida y extremadamente simple. Es 5 veces más rápido que Bunyan y 3 veces más rápido que Winston. Pino es el módulo de registro predeterminado de Node.js.`)
                            .addFields(
                                {name:`Ejemplo de uso`, value:`\`\`\`js\nconst pino = require('pino')\nconst logger = pino()\nlogger.info('hello world')\`\`\``},
                                {name:`Ejemplo de uso en discord.js`, value:`\`\`\`js\nconst pino = require('pino')\nconst logger = pino()\nlogger.info('hello world')\`\`\``},
                                {name: `Ejemplo de Codificacion`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\nconst pino = require('pino')\nconst logger = pino()\n\nclient.on('ready', () => {\n  logger.info('Estoy listo!');\n});\n\nclient.on('message', message => {\n  logger.info(message.content);\n});\n\nclient.login('token');\`\`\``},
                                {name: `Ejemplo de Base de Datos`, value: `\`\`\`js\nconst pino = require('pino')\nconst logger = pino()\n\nconst db = require('quick.db')\n\ndb.set('foo', 'bar')\nlogger.info(db.get('foo'))\`\`\``},
                                {name: `Ejemplo de Transacciones`, value: `\`\`\`js\nconst pino = require('pino')\nconst logger = pino()\n\nconst db = require('quick.db')\n\ndb.transaction('foo', 5).write()\nlogger.info(db.get('foo'))\`\`\``},
                            )
                            .setColor("Random")
                            .setTimestamp()
                            .setFooter({text:`Que es pino y su uso en discord.js`})

                            message.reply({ embeds: [embed]})

    }
}