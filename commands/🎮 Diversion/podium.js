const DIG = require('discord-image-generation')//npm i discord-image-generation
const Discord = require(`discord.js`)
module.exports ={
    name: 'podium',
    run: async (client, message, args) => {

      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      



      const target = message.mentions.users.first()
      const mentiontwo = message.mentions.users.last()
      
      if(!target) return message.channel.send("Porfavor menciona a alguien o estaras muy solito", { ephemeral: true })
      if(!mentiontwo) return message.channel.send("Tienes que mencionar a otra persona no seas timido!!", { ephemeral: true })
      if (mentiontwo.id == target.id) return message.channel.send("No menciones a la misma persona nuv XD !!", { ephemeral: true })
        
      let m = await message.channel.send('Enmarcando foto 🖼️')
      
      const Avatar1 = message.author.displayAvatarURL({ format: 'png' });
      const Avatar2 = target.displayAvatarURL({ format: 'png' })
      const Avatar3 = mentiontwo.displayAvatarURL({ format: 'png' });

      const Name1 = message.author.username
      const Name2 = target.username
      const Name3 = mentiontwo.username

      let img = await new DIG.Podium().getImage(Avatar1, Avatar2, Avatar3, Name1, Name2, Name3);
      
      m.delete({ timeout: 1000 });//Borramos el mensaje de carga
      message.reply({ files: [new Discord.AttachmentBuilder(img, 'hicec$p.png')]})
  
    }
  }