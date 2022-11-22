const { MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);///llamamos a la constante discord.
const NSFW = require("discord-nsfw"); ///el modulo npm (npm i discord-nsfw).
const nsfw = new NSFW();


module.exports = {
   name: "anal",
   alias: ["anal"],

   async run(client, message, args){
    const image = await nsfw.anal();
    const user = await message.mentions.users.first()
    if(!message.channel.nsfw) return message.channel.send(`Etto... la categoría que intentas ver sólo puede mostrarse en un canal NSFW.`, { ephemeral: true })
    
    if(!user) return message.channel.send("Tienes que **mencionar o especificar** a un miembro.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso **contigo** mismo")

    if (user.bot) return message.channel.send("No puedes **usar** el comando con un bot")

        const embed = new Discord.EmbedBuilder()
        .setTitle("Tremendo")
        .setDescription(`**${message.author.username}** le da anal a **${user}**`)
        .setImage(image)
        .setColor("Random")

        message.channel.send({ embeds: [embed] })
    } 
   }