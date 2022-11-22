const afkSchema = require(`../../modelos/afk`);
const Discord = require(`discord.js`);
module.exports = {
    name: "afk-setup",
    desc: "Sirve para poder establecer un sistema afk",
    run: async (client, message, args) => {
        
        let reason = args.join(` `) || "sin razon";
        afkSchema.findOne({
            Guild: message.guild.id,
            User: message.author.id,
        }, async (err, data) => {
            if(!data) {
                new afkSchema({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Razon: reason,
                    Date: Date.now(),
                }).save();

                message.channel.send({
                    embeds: [
                        new Discord.EmbedBuilder()
                        .setTitle(`<:panda_gift:1007529203119439882> Acabas de ponerte en AFK`)
                        .setDescription(`Hola te encuentras en afk por: __**${reason}**__ le avisare a los que te mencionen hasta que regreses UwU`)
                        .setTimestamp()
                        .setFooter({text:`Sistema afk Fenix`})
                        .setImage(`https://cdn.discordapp.com/attachments/999910151999987744/1007528011270213682/8cf282831579d06cea379c2233e6c88f--good-night-sleep-girl-sleeping.jpg`)
                        .setColor("Random"),
                    ],
                });
            } else {
                data.delete();
                message.channel.send({
                    embeds: [
                        new Discord.EmbedBuilder()
                        .setTitle(`<:panda_gift:1007529203119439882> AFK removido Exitosamente`)
                        .setDescription(`Hola asi que regresaste ;-; ya removi tu estado afk se dice de nd ctm <:hdp:1001003359819550780>`)
                        .setTimestamp()
                        .setImage(`https://cdn.discordapp.com/attachments/999910151999987744/1007530487209803837/FEVlItrWYA8FpGj.jpg`)
                        .setFooter({text:`Sistema afk Fenix`})
                        .setColor("Random"),
                    ],
                });
            }
      });
}}