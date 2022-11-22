const Discord = require(`discord.js`);
module.exports = {
    name: "intents",
    aliases: [""],
    desc: "intentos en discord.js bots",
    run: async (client, message, args, prefix) => {

        const embed = new Discord.EmbedBuilder()
                          .setTitle(`📝 Intents`)
                          .setColor("Random")
                          .setDescription(`**Intents** son una nueva forma de especificar qué eventos de Discord desea que su bot reciba. Los eventos son la forma en que Discord le dice a su bot que algo ha sucedido, como un mensaje nuevo o una reacción agregada.`)
                          .addFields(
                            {name:`Ejemplos Intents en v14`, value:`\`\`\`js\nconst client = new Discord.Client( intents: [ Discord.GatewayIntentBits.Guilds,\n Discord.GatewayIntentBits.GuildMembers,\n Discord.GatewayIntentBits.GuildMessages,\n Discord.GatewayIntentBits.MessageContent,\n Discord.GatewayIntentBits.GuildVoiceStates,\n Discord.GatewayIntentBits.GuildMessageReactions,\n Discord.GatewayIntentBits.GuildEmojisAndStickers,\n ],\n partials: [\nDiscord.Partials.User,\n Discord.Partials.Channel,\n Discord.Partials.GuildMember,\n Discord.Partials.Message,\n Discord.Partials.Reaction]\`\`\`})`},
                            {name:`Ejemplos Intents en v13`, value:`\`\`\`js\nconst client = new Discord.Client( intents: [ Discord.Intents.FLAGS.GUILDS,\n Discord.Intents.FLAGS.GUILD_MEMBERS,\n Discord.Intents.FLAGS.GUILD_MESSAGES,\n Discord.Intents.FLAGS.MESSAGE_CONTENT,\n Discord.Intents.FLAGS.GUILD_VOICE_STATES,\n Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,\n Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,\n ],\n partials: [\nDiscord.Partials.User,\n Discord.Partials.Channel,\n Discord.Partials.GuildMember,\n Discord.Partials.Message,\n Discord.Partials.Reaction]\`\`\`})`}
                          )
                          .setColor("Aqua")
                          .setTimestamp()
                          .setFooter({text: `Solicitado por: ${message.author.tag}`, iconUrl: message.author.avatarURL})

                          message.channel.send({ embeds: [embed]})
    }
}