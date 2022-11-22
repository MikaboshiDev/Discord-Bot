const Discord = require(`discord.js`)
module.exports = {
    name:"skin",
    aliases: ["mc-skin"],
    run: async(bot, message, args, prefix) => {

let skin = args.join(' ') //Nombre de la skin
if (!args[0]) { //Si no proporciona el nombre de la skin
return message.channel.send("Dime el nombre de una skin", { ephemeral: true }) //Esto enviara un mensaje si no se envió el nombre de la skin
}

let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`;  //Esto sera la imagen de la skin

const embed = new Discord.EmbedBuilder()
.setColor('Random')
.setTitle(`Skin del usuario ${skin}`)
.setDescription("`Skin nick:` "+skin+"")
.setFooter({text:`Pedido por ${message.author.tag}`})
.setTimestamp( )
.setImage(url)

message.channel.send({ embeds: [embed] });
}}