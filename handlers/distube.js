const {DisTube} = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
module.exports = (client, Discord) => {
    console.log(`Modulo de MÚSICA Cargado!`.brightMagenta)

    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 25,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin(),
        ],
    });

    //escuchamos los eventos de DisTube

    client.distube.on("playSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.EmbedBuilder()
            .setAuthor({name:`🎶 Reproduciendo Ahora 🎶`})
            .setTitle(`${song.name} - \`${song.formattedDuration}\``)
            .setImage(`https://cdn.discordapp.com/attachments/999910151999987744/1006642508027133982/d183f5bf67d5482ebdb89d19bf567fe7.jpg`)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setTimestamp()
            .setColor(client.color)
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    })

    client.distube.on("addSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.EmbedBuilder()
            .setAuthor({name:`🎶 Añadida Recientemente 🎶`})
            .setTitle(`${song.name} - \`${song.formattedDuration}\``)
            .setImage(`https://cdn.discordapp.com/attachments/999910151999987744/1006642508027133982/d183f5bf67d5482ebdb89d19bf567fe7.jpg`)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setTimestamp()
            .setColor(client.color)
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    });

    client.distube.on("initQueue", (queue) => {
        queue.autoplay = true;
    });
};