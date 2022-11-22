const Discord = require('discord.js');

module.exports = {

  name: 'dexter',
  alias: ["memesitos"],
  permisos: [],
  desc: "muestra tu foto en una imagen de estilo animado :D",
  permisos_bot: ["ADMINISTRATOR"],
  owner: false,

  run: async (client, message, args) => {

        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: "png" });

        const finalLink = 'https://luminabot.xyz/api/image/dexter?image=' + avatar;

        const attach = new Discord.AttachmentBuilder(`${finalLink}`, "avatar.png")

        message.channel.send({ files: [attach]})
  }
}