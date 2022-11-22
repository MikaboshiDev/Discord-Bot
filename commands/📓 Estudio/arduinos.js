const Discord = require(`discord.js`);
const { ButtonStyle } = require(`discord.js`)
module.exports = {
    name: "arduinos",
    desc: "Que son los arduinos y como es su programacion",
    aliases: [""],
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
                          .setTitle(`Que son los arduinos y como se programan`)
                          .setColor("Random")
                          .setTimestamp()
                          .setFooter({text: `Que son los arduinos ya lo sabias ?`})
                          .setDescription(`Arduino es una plataforma electrónica de código abierto basada en hardware y software de fácil manejo que se utiliza para la construcción de proyectos electrónicos.`)
                          .addFields(
                            {name: "En que lenguaje se programan", value: "su lenguaje de programacion a codigo abierto para el manejo de software es C++"},
                            {name: `Ejemplos de codigo en arduino`, value: `\`\`\`c++\nvoid setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}\n\`\`\``},
                            {name: `Ejemplo de codigo de led`, value: `\`\`\`c++\nint ledPin = 13;\n  void setup(){\n  pinMode(ledPin, OUTPUT); }\n void loop(){\n digitalWrite(ledPin, HIGH);\n delay(1000);\n digitalWrite(ledPin, LOW);\n delay(1000);\n }\n\`\`\``},
                            {name: `Ejemplo de led con control`, value: `\`\`\`c++\nint ledPin = 13;\nint buttonPin = 2;\nint buttonState = 0;\nvoid setup(){\n pinMode(ledPin, OUTPUT);\n pinMode(buttonPin, INPUT);\n }\n void loop(){\n buttonState = digitalRead(buttonPin);\n if (buttonState == HIGH){\n digitalWrite(ledPin, HIGH);\n }else{\n digitalWrite(ledPin, LOW);\n }\n }\n\`\`\``},
                            {name: `Led con Input`, value: `\`\`\`c++\nint ledPin = 13;\n int inPin = 2;\n void setup() { \n pinMode(ledPin, OUTPUT);\n pinMode(inPin, INPUT);\n }\n void loop() {\n if (digitalRead(inPin) == HIGH) {\n digitalWrite(ledPin, HIGH);\n delay(1000);\n digitalWrite(ledPin, LOW);\n delay(1000);\n }\n }\n\`\`\``},
                          )
                          

        let inviteEmbedBtn = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Semaforo")
          .setURL("https://openwebinars.net/blog/tutorial-arduino-ejemplo-semaforo/#:~:text=Un%20c%C3%B3digo%20Arduino%20es%20una,sentencias%20muy%20f%C3%A1ciles%20e%20intuitivas."))
      .addComponents(
        new Discord.ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Guia de Referencia")
          .setURL("https://www.arduino.cc/reference/es/"))

          message.reply({embeds: [embed], components: [inviteEmbedBtn]})
    }

}