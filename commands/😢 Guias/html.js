const Discord = require(`discord.js`);
module.exports = {
    name: "html",
    desc: "pequeña guia de html",
    aliases: [""],
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
                          .setTitle(`Guia de HTML`)
                          .setColor(client.color)
                          .setDescription(`Html es un lenguaje de programacion que se utiliza para crear paginas web, aqui te dejo una guia de html`)
                          .addFields(
                            {name: "Que es HTML", value:` Es un lenguaje de marcado que se utiliza para el desarrollo de páginas web. HTML es un acrónimo que significa HyperText Markup Language, que en español significa Lenguaje de Marcas de Hipertexto.`},
                            {name: "¿Qué es un lenguaje de marcado?", value:`Un lenguaje de marcado es un lenguaje de programación que se utiliza para crear páginas web. Los lenguajes de marcado se utilizan para describir la estructura de una página web, mientras que los lenguajes de programación se utilizan para describir el comportamiento de una página web.`},
                            {name: "¿Qué es un lenguaje de programación?", value:`Un lenguaje de programación es un lenguaje de programación que se utiliza para crear páginas web. Los lenguajes de programación se utilizan para describir el comportamiento de una página web, mientras que los lenguajes de marcado se utilizan para describir la estructura de una página web.`},
                            {name: `Ejemplos de lenguajes de marcado`, value:`HTML, XML, XHTML, SGML, etc.`},
                            {name: `Ejemplo de uso de HTML`, value:`\`\`\`html\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\`\`\``},
                            {name: `Ejemplo de uso de XML`, value:`\`\`\`xml\n<?xml version="1.0" encoding="UTF-8"?>\n<note>\n<to>Tove</to>\n<from>Jani</from>\n<heading>Reminder</heading>\n<body>Don't forget me this weekend!</body>\n</note>\`\`\``},
                            {name: `Ejemplo de uso de XHTML`, value:`\`\`\`xhtml\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>\`\`\``},
                            {name: `Ejemplo de uso de SGML`, value:`\`\`\`sgml\n<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">\n<HTML>\n<HEAD>\n<TITLE>HTML Example</TITLE>\n</HEAD>\n<BODY>\n<H1>HTML Example</H1>\n<P>This is an example of HTML.</P>\n</BODY>\n</HTML>\`\`\``},
                          )
                          .setFooter({text:`Que es html y como usarlo GUIDES`})

                          message.reply({ embeds: [embed]})
    }
}