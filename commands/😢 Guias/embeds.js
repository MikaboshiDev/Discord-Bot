const Discord = require(`discord.js`);
const { ButtonStyle } = require(`discord.js`);

module.exports = {

    name:"embeds",
    aliases: [""],
    desc: "Como se usan los embeds y sus partes",
    run: async (client, message, args, prefix) => {
        const embed = new Discord.EmbedBuilder()
            .setTitle(`📚 Como usar los embeds`)
            .setDescription(`**Aqui te enseñare como usar los embeds**`)
            .addFields(
                {name: `Titulo`, value: `**Para poner un titulo se usa** \`setTitle()\` **y se le pasa un string**`},
                {name:`Elemplo de titulo`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setTitle("Titulo")\n\`\`\``},
                {name: `Descripcion`, value: `**Para poner una descripcion se usa** \`setDescription()\` **y se le pasa un string**`},
                {name:`Elemplo de descripcion`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setDescription("Descripcion")\n\`\`\``},
                {name: `Color`, value: `**Para poner un color se usa** \`setColor()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de color`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setColor("Random")\n\`\`\``},
                {name: `Autor`, value: `**Para poner un autor se usa** \`setAuthor()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de autor`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setAuthor({name:"Autor"})\n\`\`\``},
                {name: `Footer`, value: `**Para poner un footer se usa** \`setFooter()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de footer`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setFooter({text:"Footer"})\n\`\`\``},
                {name: `Timestamp`, value: `**Para poner un timestamp se usa** \`setTimestamp()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de timestamp`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setTimestamp()\n\`\`\``},
                {name: `Thumbnail`, value: `**Para poner un thumbnail se usa** \`setThumbnail()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de thumbnail`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setThumbnail("https://cdn.discordapp.com/attachments/881202202000578560/881202222201733130/unknown.png")\n\`\`\``},
                {name: `Imagen`, value: `**Para poner una imagen se usa** \`setImage()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de imagen`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setImage("https://cdn.discordapp.com/attachments/881202202000578560/881202222201733130/unknown.png")\n\`\`\``},
                {name: `URL`, value: `**Para poner una url se usa** \`setURL()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de url`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.setURL("https://discord.gg/4Z7Y4Z2")\n\`\`\``},
                {name: `Campos`, value: `**Para poner un campo se usa** \`addFields()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de campos`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.addFields({name:"Titulo", value:"Valor"})\n\`\`\``},
                {name: `Boton`, value: `**Para poner un boton se usa** \`addComponents()\` **y se le pasa un string o un numero**`},
                {name:`Elemplo de boton`, value: `\`\`\`js\nconst embed = new Discord.EmbedBuilder()\n.addComponents({type:ButtonStyle.Primary, label:"Boton", customId:"Boton"})\n\`\`\``},
            )
            .setFooter({text: `Comando solicitado por en el ambito de guias`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setTimestamp()
            .setColor("Random")

            message.channel.send({ embeds: [embed]})
    }
}