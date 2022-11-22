const Discord = require(`discord.js`);
module.exports = {
    name: "time",
    desc: "Que son los times en javascript y su uso en discord.js",
    aliases: [""],
    run: async (client, message, args) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Que son los times en javascript y su uso en discord.js")
        .setDescription("Los Times son una forma de ejecutar una función en un tiempo determinado en milisegundos (ms).")
        .addFields(
            {name: `Que es un time ?`, value:`Los Times son una forma de ejecutar una función en un tiempo determinado en milisegundos (ms).`},
            {name: `Ejemplo de un time`, value:`\`\`\`js\nsetTimeout(() => {\nconsole.log("Hola");\n}, 1000);\n\`\`\``},
            {name: `Que es un time interval ?`, value:`Los Times Interval son una forma de ejecutar una función en un tiempo determinado en milisegundos (ms) y repetirlo cada cierto tiempo.`},
            {name: `Ejemplo de un time interval`, value:`\`\`\`js\nsetInterval(() => {\nconsole.log("Hola");\n}, 1000);\n\`\`\``},
            {name: `Ejemplo de un time interval avanzado`, value:`\`\`\`js\nlet i = 0;\nconst interval = setInterval(() => {\nconsole.log(i);\ni++;\nif (i === 10) {\nclearInterval(interval);\n}\n}, 1000);\n\`\`\``},
            {name: `Que es un time out ?`, value:`Los Times Out son una forma de ejecutar una función en un tiempo determinado en milisegundos (ms) y repetirlo cada cierto tiempo.`},
            {name: `Ejemplo de un time out`, value:`\`\`\`js\nsetTimeout(() => {\nconsole.log("Hola");\n}, 1000);\n\`\`\``},
            {name: `Ejemplo de un time out avanzado`, value:`\`\`\`js\nlet i = 0;\nconst timeout = setTimeout(() => {\nconsole.log(i);\ni++;\nif (i === 10) {\nclearTimeout(timeout);\n}\n}, 1000);\n\`\`\``},

        )
        .setColor("Random")
        .setTimestamp()
        .setFooter({text:`Que son los times y sus usos en javascript y discord.js`})

        message.reply({ embeds: [embed]})
    }
}