const { SlashCommandBuilder, ButtonStyle} = require('discord.js');
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
.setName("github")
.setDescription("github promocional"), 
	run: async (client, interaction) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle(`Github and Source Code Information about this Bot`)
        .setDescription(`[Click here to get to the Github Repository](https://github.com/Tomato6966/Multipurpose-discord-bot)`)
        .addFields({name: `Github Repository`, value: `Puede hacer exactamente la misma configuración dentro del example.envarchivo, ¡solo asegúrese de cambiarle el nombre .envo usar variables de entorno!`},
                   {name: `Github Request`, value: `Se sugiere usar la [versión Sharded (&Clustered)]( https://github.com/Tomato6966/Multipurpose-discord-bot/tree/sharded_with_mongo), si planea usarla para un BOT VERIFICADO (¡en más de 2000 servidores!)`})
        .setFooter({text:`Si tiene alguna pregunta, ¡no dude en preguntar en nuestro servidor de soporte!`, iconURL:client.user.displayAvatarURL()})
        .setColor(client.color)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())

        const git = new Discord.ButtonBuilder()
        .setStyle(ButtonStyle.Link)
        .setURL(`https://github.com/Tomato6966/Multipurpose-discord-bot`)
        .setLabel('GitHub')
        .setEmoji('1001191985207595018')

        let row2 = new  Discord.ActionRowBuilder()
        .addComponents(git)  

        interaction.reply({embeds: [embed], components: [ row2 ]})

    }}