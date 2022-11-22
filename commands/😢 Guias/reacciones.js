const Discord = require(`discord.js`);
module.exports = {
    name: "reacciones",
    desc: "Como se manejan las reacciones en discord.js",
    aliases: [""],
    run: async (client, message, args) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Como se manejan las reacciones en discord.js")
        .setDescription(`En discord.js se manejan las reacciones de la siguiente manera:\n\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on("message", async (message) => {\nif (message.content === "reaccion") {\nconst embed = new Discord.MessageEmbed()\n.setTitle("Reaccion")\n.setDescription("Reaccion")\n.setColor("RANDOM")\n.setFooter({text: "Reaccion"});\nconst msg = await message.channel.send({ embeds: [embed] });\nawait msg.react("👍");\nawait msg.react("👎");\n}\n});\n\nclient.login("token");\n\`\`\``)
        .addFields(
            {name: `Que es una reaccion`, value: `Una reaccion es un emoji que se pone en un mensaje para que los usuarios puedan interactuar con el mensaje`},
            {name: `Que es un emoji`, value: `Un emoji es un simbolo que se puede poner en un mensaje para que los usuarios puedan interactuar con el mensaje`},
            {name: `Que es un mensaje`, value: `Un mensaje es un texto que se puede poner en un canal de texto para que los usuarios puedan interactuar con el mensaje`},
            {name: `Que es un canal de texto`, value: `Un canal de texto es un canal donde se puede poner mensajes para que los usuarios puedan interactuar con el mensaje`},
            {name: `Ejemplo de agregar una reaccion`, value: `\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on("message", async (message) => {\nif (message.content === "reaccion") {\nconst embed = new Discord.MessageEmbed()\n.setTitle("Reaccion")\n.setDescription("Reaccion")\n.setColor("RANDOM")\n.setFooter({text: "Reaccion"});\nconst msg = await message.channel.send({ embeds: [embed] });\nawait msg.react("👍");\nawait msg.react("👎");\n}\n});\n\nclient.login("token");\n\`\`\``},
            {name: `Nota de agregar reacciones`, value:`Esta no es la unica forma de agregar reacciones a un mensaje hay varias formas y tratare de enseñarte todas`},
            {name: `Ejemplo de eliminar una reaccion`, value: `\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on("message", async (message) => {\nif (message.content === "reaccion") {\nconst embed = new Discord.EmbedBuilder()\n.setTitle("Reaccion")\n.setDescription("Reaccion")\n.setColor("RANDOM")\n.setFooter({text: "Reaccion"});\nconst msg = await message.channel.send({ embeds: [embed] });\nawait msg.react("👍");\nawait msg.react("👎");\nawait msg.reactions.removeAll();\n}\n});\n\nclient.login("token");\n\`\`\``},
            {name: `Ejemplo de eliminar una reaccion especifica`, value: `\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on("message", async (message) => {\nif (message.content === "reaccion") {\nconst embed = new Discord.EmbedBuilder()\n.setTitle("Reaccion")\n.setDescription("Reaccion")\n.setColor("RANDOM")\n.setFooter({text: "Reaccion"});\nconst msg = await message.channel.send({ embeds: [embed] });\nawait msg.react("👍");\nawait msg.react("👎");\nawait msg.reactions.cache.get("👍").remove();\n}\n});\n\nclient.login("token");\n\`\`\``},
            {name: `Ejemplo de eliminar todas las reacciones de un mensaje`, value: `\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\n\nclient.on("message", async (message) => {\nif (message.content === "reaccion") {\nconst embed = new Discord.EmbedBuilder()\n.setTitle("Reaccion")\n.setDescription("Reaccion")\n.setColor("RANDOM")\n.setFooter({text: "Reaccion"});\nconst msg = await message.channel.send({ embeds: [embed] });\nawait msg.react("👍");\nawait msg.react("👎");\nawait msg.reactions.removeAll();\n}\n});\n\nclient.login("token");\n\`\`\``},
            )
        .setColor("Random")
        .setFooter({text: `Las reacciones y su control en el mundo XD`})

        message.reply({embeds: [embed]})
    }
}