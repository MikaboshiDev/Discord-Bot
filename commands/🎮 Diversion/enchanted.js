const { AttachmentBuilder } = require('discord.js')
module.exports = {
  name: "enchanted",
  run: async (client, message, args, prefix) => {
    const tfa = require('text-fonts-api')
    let image = new tfa.enchantingFont(args.join(' '))
    if (!image) return message.channel.send(`<:VS_cancel:1006609599199186974> Pon un texto para transformarlo`); 
    const attachment = new AttachmentBuilder(image.buffer, 'image.png')
    message.reply({files: [attachment] })
    }
  } 