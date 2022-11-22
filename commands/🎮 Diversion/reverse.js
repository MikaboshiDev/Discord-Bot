const Discord = require(`discord.js`);
module.exports = {
    name: "reverse",
    aliases: ["rever"],
    run: async(client, message, args) => {
       const reverse =args.join(" ").split("").reverse().join("")
       if(!reverse) return message.channel.send(`Coloca un texto por favor`, { ephemeral: true })
       message.channel.send(reverse)
    }
}