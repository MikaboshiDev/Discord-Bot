const Discord = require(`discord.js`);
module.exports= {
    name: "distube",
    desc: "Que es distube y como usarlo en discord.js",
    aliases: [""],
    run: async (client, message, args) => {
        const embed = new Discord.EmbedBuilder()
        .setTitle("Que es distube y como usarlo en discord.js")
        .setDescription("Distube es un modulo de npm que nos permite reproducir musica en discord.js")
        .addFields(
            {name: `Que packetes requiere distube`, value: `Distube requiere los siguientes packetes:\n\`\`\`js\nnpm i distube\nnpm i ytdl-core\nnpm i ytdl-core-discord\nnpm i spotify/plugin\n\`\`\``},
            {name: `Ejemplo de distube`, value:`\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client();\nconst { Player } = require("discord-player");\nconst player = new Player(client);\nclient.player = player;\n\nclient.on("ready", () => {\nconsole.log("Estoy listo!");\n});\n\nclient.on("message", async (message) => {\nif (message.content === "play") {\nconst connection = await message.member.voice.channel.join();\nconst dispatcher = connection.play("https://www.youtube.com/watch?v=dQw4w9WgXcQ");\ndispatcher.on("finish", () => {\nconnection.disconnect();\n});\n}\n});\n\nclient.login("token");\n\`\`\``},
            {name: `Comandos tradicionales de distube`, value: `Distube tienes unos comandos que siempre debe tener como son:\n\`\`\`js\nplay\nstop\nskip\nqueue\n\`\`\``},
            {name: `Que otras opciones hay en lugar de distube`, value: `Hay otras opciones como son:\n\`\`\`js\nnpm i discord-music-player\nnpm i discord-music-player\nnpm i discord-music-player\ninstall lavalink\ninstall the erela, spo\n\`\`\``},
            {name: `Que es lavalink`, value: `Lavalink es un servidor de musica que se puede usar en discord.js y otros lenguajes de programacion`},
            )
        .setColor("Random")
        .setFooter({text:`Que es distube y como usarlo en discord.js`})
        .setTimestamp()
        message.reply({ embeds: [embed]})
    }
}