const Discord = require(`discord.js`);
const { ButtonStyle } = require(`discord.js`)
module.exports = {
  name: "emoji-info",
  aliases: ["info-emoji"],
  desc: "obten la informacion de un emoji del servidor",
  run: async (client, message, args, prefix, member, channel) => {
      
  const emojiProvided = args[0];//definimos emojiProvided como el primer argumento
      
  if(!emojiProvided) return message.channel.send('Proporciona un emoji ú.ú'); //Si no se proporciona el primer argumento retornamos un mensaje
  
  const match = emojiProvided.match(/<:[a-zA-Z0-9_-]+:(\d{18})>/) || emojiProvided.match(/<a:[a-zA-Z0-9_-]+:(\d{18})>/); //haces un match para obtener obtener una expresión regular

  if (!match || !match[1]) return message.channel.send('Proporciona un emoji válido!'); 
  
  let emoji = message.guild.emojis.cache.get(match[1]);
  
  if(!emoji) return message.channel.send('Ese emoji no se pudo identificar.'); //Si el emoji no se encuentra en el servidor retornamos un mensaje
  
  const infoemoji = new Discord.EmbedBuilder() //hacemos el embed y le agregamos diferentes campos con su respectiva información
  .setAuthor({name:`Información de Emojis  Num: ${emoji.name}`})
  .addFields(
    {name:'Nombre', value:emoji.name, inline: true},
    {name:'ID', value:emoji.id, inline: true},
    {name:'¿Es animado?', value:emoji.animated ? 'Si' : 'No', inline: true},
    {name:'Identificador', value:emoji.identifier, inline: true},
    {name:'Imagen', value:emoji.toString(), inline: true})
  .addField('Enlace', emoji.url)
  .setTimestamp()
  .setFooter({text:`Informacion de tus emojis PROS`})
  .setColor('Blue');
  
  message.channel.send({embeds: [infoemoji], components: [new Discord.ActionRowBuilder().addComponents(
    [
        new Discord.ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("⚙️").setLabel("Emoji URL").setURL(emoji.url),
    ]
)] }); //por ultimo enviamos el embed

  }
}

