const Discord = require(`discord.js`)
module.exports = {
  name: "geometry",
  run: async (client, message, args, prefix) => {
 let color = args[0]

 if(!color) return message.channel.send("Necesitas poner un color")

 let texto = args.slice(1).join(" ")

 if(!texto) return message.channel.send("Necesitas poner un texto")

 let imagen = new Discord.AttachmentBuilder(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=${color}&text=${texto}`, "fortnite.png") // Creamos la imagen

  message.channel.send({files: [imagen]})//Envia la imagen con el texto determinado
    }
  } 