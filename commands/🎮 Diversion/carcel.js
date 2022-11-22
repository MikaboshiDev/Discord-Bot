const Discord = require('discord.js');

module.exports = {
    name: "jail",
    aliases: ["carcel"],
    usage: "*jail <user> user: opcional",
    desc: "Manda a alguien a la carcel por capo",
    run: async(client, message, args) => {

    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({ size: 2048, format: "png" });
  
     await message.reply({ files: [{attachment: `https://some-random-api.ml/canvas/jail?avatar=${avatar}`, name: 'file.jpg'}] })
    
  }
    
}