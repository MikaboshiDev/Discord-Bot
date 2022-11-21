const { SlashCommandBuilder, ButtonStyle } = require("discord.js")
const Discord = require('discord.js');

const fs = require(`fs`);
module.exports = {
  data: new SlashCommandBuilder()
  .setName("discord")
  .setDescription("guia movil de discord.js"),
  run: async (client, interaction) => {
    const embed = new Discord.EmbedBuilder()
    .setTitle(`📓 Documentacion de discord.js`)
    .setTimestamp()
    .setDescription(`**[Documentacion de discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)**`)
    .addFields(
        {name:`Que es discord.js`, value:`Es una libreria de javascript que nos permite interactuar con la API de discord.`},
        {name:`Como instalar discord.js`, value:`Para instalar discord.js debes ejecutar el siguiente comando en tu terminal: \`npm i discord.js\``},
        {name:`Como usar discord.js`, value:`Para usar discord.js debes importar la libreria en tu archivo de javascript, para eso debes ejecutar el siguiente codigo: \`const Discord = require("discord.js");\``},
        {name:`Como crear un embed`, value:`Para crear un embed debes ejecutar el siguiente codigo: \`const embed = new Discord.EmbedBuilder()\` y luego puedes agregarle los campos que quieras, por ejemplo: \`embed.setTitle("Titulo del embed")\``},
        {name:`Ejemplo de embed`, value:`\`\`\`js\nconst Discord = require("discord.js");\nconst embed = new Discord.EmbedBuilder()\n.setTitle("Titulo del embed")\n.setDescription("Descripcion del embed")\n.setTimestamp()\n.setFooter({text: "Pie del embed", iconUrl: "https://cdn.discordapp.com/avatars/852000000000000000/00000000000000000000000000000000.png?size=1024"})\n.setColor("RANDOM")\n\`\`\``},
        {name:`Como crear un boton`, value:`Para crear un boton debes ejecutar el siguiente codigo: \`const button = new Discord.ButtonBuilder()\` y luego puedes agregarle los campos que quieras, por ejemplo: \`button.setLabel("Label del boton")\``},
        {name:`Ejemlo de boton`, value:`\`\`\`js\nconst Discord = require("discord.js");\nconst button = new Discord.ButtonBuilder()\n.setLabel("Label del boton")\n.setStyle("PRIMARY")\n.setCustomId("custom_id_del_boton")\n\`\`\``},
        {name:`Como usar Modals`, value:`Para usar Modals debes ejecutar el siguiente codigo: \`const modal = new Discord.ModalBuilder()\` y luego puedes agregarle los campos que quieras, por ejemplo: \`modal.setTitle("Titulo del modal")\``},
        {name:`Ejemplo de Modal`, value:`\`\`\`js\nconst Discord = require("discord.js");\nconst modal = new Discord.ModalBuilder()\n.setTitle("Titulo del modal")\n.setDescription("Descripcion del modal")\n.setCustomId("custom_id_del_modal")\n\`\`\``},
        {name:`Como usar Select Menus`, value:`Para usar Select Menus debes ejecutar el siguiente codigo: \`const select = new Discord.SelectMenuBuilder()\` y luego puedes agregarle los campos que quieras, por ejemplo: \`select.setLabel("Label del select")\``},
        {name:`Ejemplo de Select Menu`, value:`\`\`\`js\nconst Discord = require("discord.js");\nconst select = new Discord.SelectMenuBuilder()\n.setLabel("Label del select")\n.setCustomId("custom_id_del_select")\n\`\`\``},
        {name:`Como usar Mongoose DB`, value:`Para usar Mongoose DB debes ejecutar el siguiente codigo:`},
        {name:`Ejemplo de Mongoose DB`, value:`\`\`\`js\nconst mongoose = require("mongoose")\nmongoose.connect("mongodb://localhost:27017/db")\n\`\`\``},
        {name:`Como usar Canvas`, value:`Para usar Canvas debes ejecutar el siguiente codigo:`},
        {name:`Ejemplo de Canvas`, value:`\`\`\`js\nconst Canvas = require("canvas")\nconst canvas = Canvas.createCanvas(200, 200)\nconst ctx = canvas.getContext("2d")\n\`\`\``},
        {name:`Como usar fs`, value:`Para usar fs debes ejecutar el siguiente codigo:`},
        {name:`Ejemplo de fs`, value:`\`\`\`js\nconst fs = require("fs")\nfs.readFile("archivo.txt", "utf8", (err, data) => {\nif (err) throw err;\nconsole.log(data);\n})\n\`\`\``},
        {name:`Como usar express`, value:`Para usar express debes ejecutar el siguiente codigo:`},
        {name:`Ejemplo de express`, value:`\`\`\`js\nconst express = require("express")\nconst app = express()\napp.get("/", (req, res) => {\nres.send("Hola mundo")\n})\napp.listen(3000)\n\`\`\``},
        {name:`Como usar axios`, value:`Para usar axios debes ejecutar el siguiente codigo:`},
        {name:`Ejemplo de axios`, value:`\`\`\`js\nconst axios = require("axios")\naxios.get("https://api.example.com")\n.then((res) => {\nconsole.log(res.data)\n})\n.catch((err) => {\nconsole.log(err)\n})\n\`\`\``},
        )
    .setColor(client.color)


    interaction.reply({ embeds: [embed]})
}}