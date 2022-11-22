const Discord = require('discord.js')
const keySchema = require(`${process.cwd()}/modelos/clave.js`);

var nekos = [
    "https://nekocdn.com/images/dlIMyZkQT.jpg",
    "https://w0.peakpx.com/wallpaper/307/1014/HD-wallpaper-neko-girl-cute-maid.jpg",
    "https://ih1.redbubble.net/image.1553226439.9239/flat,750x1000,075,f.jpg",
    "https://i.pinimg.com/originals/03/8c/73/038c73e08f722113c2837a708777db8b.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/577/78/376/anime-girl-kuro-neko-black-cat-white-hair-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/c3/a0/90/c3a0905a667600f51b94a01941bf2c81.jpg",
    "https://i.pinimg.com/originals/30/04/4b/30044b63d811e01908c41b2a5da2cc17.gif",
    "https://i.pinimg.com/564x/bc/f3/e5/bcf3e5da58bfe0bd39bd02808e0911b3.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/383/801/116/anime-girls-genshin-impact-hutao-genshin-impact-cat-girl-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/c3/a0/90/c3a0905a667600f51b94a01941bf2c81.jp"
];
module.exports = {
    name: "neko",
    aliases: ["kute"],
    desc: "Chika neko nya nya",
    run: async (client, message, args, prefix) => {

            let neko = nekos[Math.floor(Math.random() * nekos.length)];
        
            const embed = new Discord.EmbedBuilder()
            .setTitle(`**Nya nya chica neko!!**`)
            .setImage(`${neko}`)
            .setFooter({text: `Solicitado Por: ${message.author.tag}`})
            .setColor("Random")
            
        
            message.reply({ embeds: [embed] })
            
    }
} 