const DIG = require('discord-image-generation')//npm i discord-image-generation
const Discord = require(`discord.js`)
module.exports ={
    name: 'hitler',
    run: async (client, message, args) => {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      let m = await message.channel.send('Enmarcando foto 🖼️')
      let avatar = user.user.displayAvatarURL({ format: 'png' })
  
      let img = await new DIG.Hitler().getImage(avatar);
  
      m.delete({ timeout: 1000 });//Borramos el mensaje de carga
      message.reply({ files: [new Discord.AttachmentBuilder(img, 'hicec$p.png')]})
  
    }
  }