const Discord = require(`discord.js`)
module.exports = {
    name: "const",
    aliases: "valors",
    desc: "Te menciona algunos valores de las constantes mas importantes de las matematicas",
    run: async(client, message, args, prefix) => {

        var constantes = [
            " **𝜋** = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679",
            " **𝑒** = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274",
            " **𝑔** = 9.80665",
            " **𝑘** = 1.38064852 x 10⁻²³",
            " **𝑚𝑒** = 9.10938356 x 10⁻³¹",
            " abogadro = **6.022140857e23**",
            " aceleracion_de_la_gravedad = 9.80665**",
            " aceleracion_de_la_gravedad_en_la_luna = **1.622**",
            " aceleracion_de_la_gravedad_en_marte = **3.711**",
            " aceleracion_de_la_gravedad_en_mercurio = **3.7**",
            " aceleracion_de_la_gravedad_en_neptuno = **11.15**",
            " aceleracion_de_la_gravedad_en_pluton = **0.58**",
            " aceleracion_de_la_gravedad_en_saturno = **10.44**",
            " aceleracion_de_la_gravedad_en_venus = **8.87**",
            " aceleracion_de_la_gravedad_en_jupiter = **24.7**",
            " aceleracion_de_la_gravedad_en_urano = **8.87**",
            " aceleracion_de_la_gravedad_en_la_tierra = **9.80665**",
            " velocidad_de_la_luz = **299792458**",
            " constante_de_stefan_boltzmann = **5.670367e-8**",
            " constante_de_stefan_boltzmann_en_unidades_de_ergios = **5.670367e-5**",
            " constante_de_stefan_boltzmann_en_unidades_de_watts = **5.670367**"
        ]

        const fisica = constantes[Math.floor(Math.random() * constantes.length)];

        const embed = new Discord.EmbedBuilder()
        .setTitle("Constantes Físicas y Matemáticas")
        .setColor(client.color)
        .setDescription(`${fisica}`)
        .setFooter({text:`Solicitado por ${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true})});
        message.channel.send({embeds: [embed]});
    }
}