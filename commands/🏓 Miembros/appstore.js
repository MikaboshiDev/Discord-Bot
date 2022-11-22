const Discord = require('discord.js');
const AppleStore = require("app-store-scraper");

module.exports = {
  name: "appstore",
  category: 'utilidades',
  premium: false,
  premium_desc: "Desactivado",
  usage: ".applestore <Aplicacion>",
  aliases: ["appstore"],
  desc: "Busca una app en la appstore!",
  run: async (client, message, args, prefix) => {
    if (!args[0])
      return message.channel.send(
        `<:VS_cancel:1006609599199186974> **Debes escribir una aplicación para buscar!**`
      );

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'es-es'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `<:VS_cancel:1006609599199186974> **No puedo encontrar esa aplicación:(**`
        );
      }

      let Descripcion = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Precio = App.free ? "GRATIS!" : `$${App.price}`;
      let calificacion = App.score.toFixed(1);

      let Embed = new Discord.EmbedBuilder()
        .setColor(client.color)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title} - En la appstore!`)
        .setDescription(Descripcion)
        .addFields(
            {name:`Precio`, value:Precio, inline: true},
            {name:`Desarrollador`, value:App.developer, inline:true},
            {name:`Calificación`, value:calificacion, inline:true})
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setTimestamp();

      return message.channel.send({ embeds: [Embed] });
    });
  }
}