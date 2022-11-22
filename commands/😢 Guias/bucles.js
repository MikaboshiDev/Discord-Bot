const Discord = require(`discord.js`);
module.exports = {
    name: "bucles",
    desc: "uso de bucles y funciones en js",
    aliases: [""],
    run: async (client, message, args) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Bucles y funciones")
        .setDescription("Uso de bucles y funciones en js")
        .addFields(
            {name: `Que es un bucle ?`, value:`El bucle es una estructura de control que nos permite repetir una o varias instrucciones un determinado número de veces o hasta que se cumpla una condición.`},
            {name: `Ejemplo de un Bucle`, value: `\`\`\`js\nfor (let i = 0; i < 10; i++) {\nconsole.log(i);\n}\n\`\`\``},
            {name: `Que es una función ?`, value:`Una función es un bloque de código que se puede ejecutar varias veces. Se utiliza para realizar una tarea específica.`},
            {name: `Ejemplo de una función`, value: `\`\`\`js\nfunction saludar(nombre) {\nconsole.log("Hola " + nombre);\n}\n\`\`\``},
            {name: `Que es un bucle for ?`, value:`El bucle for es una estructura de control que nos permite repetir una o varias instrucciones un determinado número de veces.`},
            {name: `Ejemplo de un bucle for`, value: `\`\`\`js\nfor (let i = 0; i < 10; i++) {\nconsole.log(i);\n}\n\`\`\``},
            {name: `Que es un bucle while ?`, value:`El bucle while es una estructura de control que nos permite repetir una o varias instrucciones mientras se cumpla una condición.`},
            {name: `Ejemplo de un bucle while`, value: `\`\`\`js\nlet i = 0;\nwhile (i < 10) {\nconsole.log(i);\ni++;\n}\n\`\`\``},
            {name: `Que es un bucle do while ?`, value:`El bucle do while es una estructura de control que nos permite repetir una o varias instrucciones mientras se cumpla una condición.`},
            {name: `Ejemplo de un bucle do while`, value: `\`\`\`js\nlet i = 0;\ndo {\nconsole.log(i);\ni++;\n} while (i < 10);\n\`\`\``},
            {name: `Ejemplo de un Bucle avanzado`, value:`\`\`\`js\nconst array = [1, 2, 3, 4, 5];\nfor (let i = 0; i < array.length; i++) {\nconsole.log(array[i]);\n}\n\`\`\``},
        )
        .setFooter({text: `Que es un bucle y sus trabajaos en JavaScript`})
        .setColor("Random")
        .setTimestamp()

        message.reply({ embeds: [embed]})
    }
}