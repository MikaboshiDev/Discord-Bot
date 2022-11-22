const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "dadjoke",
  usage: "*dadjoke",
  aliases: ["chiste"],
  desc: "recibe chistes de mal gusto del bot para tu discord",
  run: async (client, message, args) => {
let res = await axios.get('https://api.popcat.xyz/joke').catch((err) => {
message.reply(`An error occured, Try again or report the bug`);
});
const jokeEmbed = new Discord.EmbedBuilder()
  .setTitle('Heres a random Dadjoke!')
  .setDescription(`${res.data.joke}  :eyes: `)
  .setColor('Random');
    await message.reply({
      embeds: [
        jokeEmbed
      ]
    });
  }
};