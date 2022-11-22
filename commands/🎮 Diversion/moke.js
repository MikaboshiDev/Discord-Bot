const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "mock",
  run: async (client, message, args) => {
    let userargs = args.join(" ");
    let res = await axios.get(`https://api.popcat.xyz/mock?text=${userargs}`).catch((err) => {
      message.reply(`Something went wrong.`);
    });
    let embed = new Discord.EmbedBuilder()
      .setDescription(`${res.data.text}`)
      .setColor("Green");
    await message.reply({
      embeds: [
        embed
      ]
    });
  }
};