const Discord = require(`discord.js`);
const { ButtonStyle } = require(`discord.js`)
module.exports = {
    name:"js-clases",
    aliases: [" "],
    desc: "Las clases en javascript son una forma de crear objetos con propiedades y métodos.",
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
            .setTitle(` 📓 Estudio Clases JavaScript y sus Clases`)
            .setTimestamp()
            .setDescription(`Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.`)
            .addFields(
                {name: `\`•\` Clases`, value: `Las clases son una forma de crear objetos con propiedades y métodos.`},
                {name:` Ejemplo de Clases`, value: `\`\`\`js\n// Definición de la clase\n class Rectangle {\n constructor(height, width) {\n this.height = height;\n this.width = width;\n }\n}\n\n// Creación de un objeto\n const cuadrado = new Rectangle(10, 10);\n\nconsole.log(cuadrado.height);\n// expected output: 10\n\`\`\``},
                {name: `\`•\` Herencia`, value: `La herencia en JavaScript es un mecanismo por el cual un objeto puede acceder a las propiedades y métodos de otro objeto.`},
                {name:` Ejemplo de Herencia`, value: `\`\`\`js\n// Definición de la clase\n class Animal {\n constructor(name) {\n this.name = name;\n }\n\n speak() {\n console.log(this.name + ' makes a noise.');\n }\n}\n\n// Definición de la clase\n class Dog extends Animal {\n speak() {\n console.log(this.name + ' barks.');\n }\n}\n\n// Creación de un objeto\n let d = new Dog('Mitzie');\n d.speak();\n// expected output: "Mitzie barks."\n\`\`\``},
                {name: `\`•\` Métodos estáticos`, value: `Los métodos estáticos se definen utilizando la palabra clave static. Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados a través de una instancia de la clase. Los métodos estáticos son a menudo utilizados para crear funciones de utilidad para una aplicación.`},
                {name:` Ejemplo de Métodos estáticos`, value: `\`\`\`js\n// Definición de la clase\n class Punto {\n constructor(x, y) {\n this.x = x;\n this.y = y;\n }\n\n static distancia(a, b) {\n const dx = a.x - b.x;\n const dy = a.y - b.y;\n return Math.sqrt(dx*dx + dy*dy);\n }\n}\n\nconst p1 = new Punto(5, 5);\nconst p2 = new Punto(10, 10);\n\nconsole.log(Punto.distancia(p1, p2));\n// expected output: 7.0710678118654755\n\`\`\``},
                {name: `\`•\` Getters y Setters`, value: `Los getters y setters son funciones que obtienen y establecen valores de propiedades de un objeto. Estos son accesibles mediante notación de punto.`},
                {name:` Ejemplo de Getters y Setters`, value: `\`\`\`js\n// Definición de la clase\n class Punto {\n constructor(x, y) {\n this.x = x;\n this.y = y;\n }\n\n get distancia() {\n return Math.sqrt(this.x * this.x + this.y * this.y);\n }\n\n set distancia(value) {\n const factor = value / this.distancia;\n this.x *= factor;\n this.y *= factor;\n }\n}\n\nconst p1 = new Punto(5, 5);\n\nconsole.log(p1.distancia);\n// expected output: 7.0710678118654755\n\`\`\``},
                {name: `\`•\` Herencia múltiple`, value: `La herencia múltiple en JavaScript es un mecanismo por el cual un objeto puede heredar las propiedades de otro objeto.`},
                {name:` Ejemplo de Herencia múltiple`, value: `\`\`\`js\n// Definición de la clase\n class Animal {\n constructor(name) {\n this.name = name;\n }\n\n speak() {\n console.log(this.name + ' makes a noise.');\n }\n}\n\n// Definición de la clase\n class Perro {\n speak() {\n console.log(this.name + ' barks.');\n }\n}\n\n// Definición de la clase\n class Gato {\n speak() {\n console.log(this.name + ' meows.');\n }\n}\n\n// Definición de la clase\n class Loro extends Animal {\n speak() {\n super.speak();\n console.log(this.name + ' wants a cracker!');\n }\n}\n\n// Definición de la clase\n class PerroGato extends Perro, Gato {}\n\nlet d = new PerroGato('Mitzie');\nd.speak();\n// expected output: "Mitzie barks."\n\`\`\``},
            )
            .setFooter({text:`Ejecutado por ${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true})})

            let inviteEmbedBtn = new Discord.ActionRowBuilder()
            .addComponents(
              new Discord.ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel("Documentación")
                .setURL("https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes"))
            .addComponents(
              new Discord.ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel("Typescript")
                .setURL("https://www.typescriptlang.org/docs/"))
            .addComponents(
              new Discord.ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel("Js & Ts")
                .setURL("https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"))

                message.reply({ embeds: [embed], components: [inviteEmbedBtn] })

      
            }
}