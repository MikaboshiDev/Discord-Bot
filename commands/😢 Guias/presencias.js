const Discord = require(`discord.js`);
module.exports = {
    name: "presencias",
    desc: "uso de presencias en discord.js",
    aliases: [""],
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
                            .setTitle(`📝 Presencias`)
                            .setColor("Random")
                            .setDescription(`**Presencias** son las cosas que aparecen en la parte de abajo de tu perfil de discord`)
                            .addFields(
                                {name: `Como crear una presencia`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activity: {\n            name: 'nombre de la actividad',\n            type: 'tipo de actividad',\n            url: 'url de la actividad'\n        },\n        status: 'estado'\n    });\n});\`\`\``},
                                {name: `Tipos de actividad`, value: `\`\`\`js\nPLAYING\nSTREAMING\nLISTENING\nWATCHING\`\`\``},
                                {name: `Estados`, value: `\`\`\`js\nonline\nidle\ndnd\`\`\``},
                                {name: `Como crear una presencia con un juego`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activity: {\n            name: 'nombre del juego',\n            type: 'PLAYING'\n        },\n        status: 'online'\n    });\n});\`\`\``},
                                {name: `Como crear una presencia con un viendo`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activity: {\n            name: 'nombre del video',\n            type: 'WATCHING'\n        },\n        status: 'online'\n    });\n});\`\`\``},
                                {name: `Como crear una presencia con un transmitiendo`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activity: {\n            name: 'nombre del video',\n            type: 'STREAMING',\n            url: 'url del video'\n        },\n        status: 'online'\n    });\n});\`\`\``},
                                {name: `Como crear una presencia con un escuchando`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activity: {\n            name: 'nombre de la cancion',\n            type: 'LISTENING'\n        },\n        status: 'online'\n    });\n});\`\`\``},
                                {name: `Como crear una presencia en Discord v13` , value: `\`\`\`js\nconst Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setPresence({\n        activities: [{\n            name: 'nombre de la actividad',\n            type: 'tipo de actividad',\n            url: 'url de la actividad'\n        }],\n        status: 'estado'\n    });\n});\`\`\``},
                                {name: `Como crear presencias en Discord v14`, value: `\`\`\`js\nconst Discord = require('discord.js');\nconst { ActivityType } = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n    client.user.setActivity('nombre de la actividad', { type: 'ActivityType.(Tipo de actividad)' });\n});\`\`\``},
                                {name: `Notas Version`, value:`La documentacion se hiso con respecto a v13 si quieres v14 solo en vez del tipo de presencias en mayuscula ponlas minusculas :D.`}
                            )
                            .setFooter({text:`Que son las presencias y com establecerlas en discord.js`})
                            .setTimestamp()

                            message.reply({embeds: [embed]})
    }
}