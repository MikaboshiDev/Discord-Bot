const Discord = require(`discord.js`);
const request = require(`request`);

module.exports = {
    name: "mc-server",
    aliases: ["server-mc"],
    desc: "Muestra informacion de un servidor de minecraft",
    run: async (client, message, args, prefix) => {
        let { status } = require(`minecraft-server-util`);
        let servidor_ip = args.join(" ");
        let descReplace = /§[0-9a-fk-or]/gi;
        if(!servidor_ip) return message.channel.send(`<:VS_cancel:1006609599199186974> Debes ingresar una ip de un servidor de minecraft java`);

        status(servidor_ip).then(async (m) => {
            let jugadores_activos =  m.players.online
            let max_jugadores = m.players.max
            let version = m.version.name
            let descripcion = m.motd.clean

            const embed = new Discord.EmbedBuilder()
                          .setColor(`Random`)
                          .setThumbnail(`http://eu.mc-api.net/v3/server/favicon/${servidor_ip}`)
                          .setDescription(`Informacion del servidor **${servidor_ip}**`)
                          .addFields(
                            {name:"IP", value:"`" + servidor_ip + "`", inline:true},
                            {name:"Version", value:"`" + version + "`", inline:true},
                            {name:"Jugadores", value:`${jugadores_activos.toLocaleString()} de ${max_jugadores.toLocaleString()}`},
                            {name:"Descripcion", value:"`" + descripcion.replace(descReplace, "") + "`"}
                          )
                          .setTimestamp();
            
            return message.channel.send({ embeds: [embed]})
                          }).catch(err => {
                            console.log(err)
                            const embed_error = new Discord.EmbedBuilder()
                            .setColor(`Red`)
                            .setTitle(`Servidor no Encontrado`)
                            .setDescription(`<:VS_cancel:1006609599199186974> No se pudo encontrar el servidor **${servidor_ip}**`);
                            return message.channel.send({ embeds: [embed_error]});
                          })
        }
    }
