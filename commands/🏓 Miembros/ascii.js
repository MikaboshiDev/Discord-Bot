const Discord = require('discord.js');
const figlet = require('figlet')

module.exports = {
  name: "ascii", 
  aliases: [],
  usage: "!ascii <Text>",
  desc: "Sirve para darle formato ascii a un texto aleatorio",
  run: async (client, message, args) => {

  if(!args[0]){
        return message.reply('Debes ingresar un mensaje!')
    }

    if(args.join(' ').length > 100){
        return message.reply('No puedes poner más de 100 palabras!')
    }

    figlet(args.join("  "), (err,data) => message.channel.send("\`\`\`"+ data + "\`\`\`"))

 }

} 