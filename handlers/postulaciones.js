const { asegurar_todo } = require("../function/funciones.js");
const setupSchema = require(`${process.cwd()}/modelos/setups`);
const postulacionesSchema = require(`${process.cwd()}/modelos/postulaciones`);
const Discord = require('discord.js');
const html = require('discord-html-transcripts')

module.exports = client => {

    //CREACIÓN DE TICKETS
    client.on("interactionCreate", async interaction => {
        try {

            //comprobaciones previas
            if (!interaction.guild || !interaction.channel || !interaction.isButton() || interaction.message.author.id !== client.user.id || interaction.customId !== "crear_postulacion") return;
            //aseguramos la base de datos para evitar errores
            await asegurar_todo(interaction.guild.id);
            //buscamos el setup en la base de datos
            const setup = await setupSchema.findOne({ guildID: interaction.guild.id });
            //comprobaciones previas
            if (!setup || !setup.sistema_postulaciones || !setup.sistema_postulaciones.canal || interaction.channelId !== setup.sistema_postulaciones.canal || interaction.message.id !== setup.sistema_postulaciones.mensaje) return;
            //buscamos primero si el usuario tiene un ticket creado
            let applys_data = await postulacionesSchema.find({ guildID: interaction.guild.id, autor: interaction.user.id, cerrado: false });

            //comprobar si el usuario ya tiene un ticket creado en el servidor y NO esté cerrado, y si es así, hacemos return;
            for (const apply of applys_data) {
                if (interaction.guild.channels.cache.get(apply.canal)) return interaction.reply({ content: `<:VS_cancel:1006609599199186974> **Ya tienes una postulacion creada en <#${apply.canal}>**`, ephemeral: true });
            }

            await interaction.reply({ content: "⌛ **Creando tu postulacion... Porfavor espere**", ephemeral: true });
            //creamos el canal
            const channel = await interaction.guild.channels.create({
                name: `postulacion-${interaction.member.user.username}`.substring(0, 50),
                type: 0, // 0 == texto, 2 == voz, ... https://discord-api-types.dev/api/discord-api-types-v10/enum/ChannelType
                parent: interaction.channel.parent ?? null,
                permissionOverwrites: [
                    //denegamos el permiso de ver el ticket a otra persona que no sea el creador del ticket
                    {
                        id: interaction.guild.id,
                        deny: ["ViewChannel"]
                    },
                    //permitimos ver el ticket al usuario que ha creado el ticket
                    {
                        id: interaction.user.id,
                        allow: ["ViewChannel"]
                    },
                    //ROL ESPECIAL PARA QUE PUEDA VER LOS TICKETS
                    /*
                    {
                        id: "943494866070044722",
                        allow: ["VIEW_CHANNEL"]
                    },
                    */
                ]
            });
            //enviamos la bienvenida en el ticket del usuario
            channel.send({
                embeds: [new Discord.EmbedBuilder()
                    .setTitle(`Postulacion de ${interaction.member.user.tag}`)
                    .setDescription(`📣 Bienvenido a tu postulacion **${interaction.member.user.tag}** recuerda que no hay una postulacion perfecta buena suerte esta vez`)
                    .addFields(
         {name:`🌟 Soporte Sistema Postulaciones`, value:`Gracias por postularte para este servidor esta ocacion, responde las preguntas y espera tu respuesta de algun staff **suerte**`},
         {name:`➥・Postulacion`, value:`apply de ${interaction.member.user.tag}`, inline: true},
         {name:`➥・Sistema`, value:`Postulaciones para Staff`, inline: true},
         {name:`➥・Canal Creado`, value:`New the ${channel}`, inline: true},
         {name:`🎲 Important Annoument`, value: "```" + `Recuerda que abrir una postulacion de forma de burla o para molestar es sancionable con aislamiento o baneo permanente trata de cumplir todas las reglas y no cometas algo que te pueda perjudicar buena suerte` + "```"})
                    .setColor(client.color)
                ],
                components: [new Discord.ActionRowBuilder().addComponents(
                    [
                        new Discord.ButtonBuilder().setStyle('Danger').setLabel("CERRAR").setEmoji("🔒").setCustomId("cerrar_postulacion"),
                        new Discord.ButtonBuilder().setStyle("Secondary").setLabel("BORRAR").setEmoji("🗑").setCustomId("borrar_postulacion"),
                    ]
                )]
            });
            //guardamos el ticket en la base de datos
            let data = new postulacionesSchema({
                guildID: interaction.guild.id,
                autor: interaction.user.id,
                canal: channel.id,
                cerrado: false,
            });
            data.save();
            await interaction.editReply({ content: `✅ **Postulacion creada en ${channel}**`, ephemeral: true })

        } catch (e) {
            console.log(e)
        }
    })

    //BOTONES
    client.on("interactionCreate", async interaction => {
        try {

            //comprobaciones previas
            if (!interaction.guild || !interaction.channel || !interaction.isButton() || interaction.message.author.id !== client.user.id) return;
            //aseguramos la base de datos para evitar errores
            await asegurar_todo(interaction.guild.id);

            let applys_data = await postulacionesSchema.findOne({ guildID: interaction.guild.id, canal: interaction.channel.id})
            switch (interaction.customId) {
                case "cerrar_postulacion":{
                    //si el ticket ya está cerrado, hacemos return;
                    if(applys_data && applys_data.cerrado) return interaction.reply({content: `<:VS_cancel:1006609599199186974> **Esta postulacion ya estaba cerrada!**`, ephemeral: true});
                    interaction.deferUpdate();
                    //creamos el mensaje de verificar
                    const verificar = await interaction.channel.send({
                        embeds: [new Discord.EmbedBuilder()
                        .setTitle(`Verificate primero para continuar!`)
                        .setTimestamp()
                        .setFooter({text:`Sistema de Postulaciones`})
                        .setColor('Green')
                        ],
                        components: [new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder().setLabel("Verificarse").setStyle("Success").setCustomId("verificar").setEmoji("✅")
                        )]
                    });

                    //creamos el collector
                    const collector = verificar.createMessageComponentCollector({
                        filter: i => i.isButton() && i.message.author.id == client.user.id && i.user,
                        time: 180e3
                    });

                    //escuchamos clicks en el botón
                    collector.on("collect", boton => {
                        //si la persona que hace clic en el botón de verificarse NO es la misma persona que ha hecho clic al botón de cerrar ticket, return;
                        if(boton.user.id !== interaction.user.id) return boton.reply({content: `<:VS_cancel:1006609599199186974> **No puedes hacer eso! Solo ${interaction.user} puede interactuar!**`, ephemeral: true});

                        //paramos el collector
                        collector.stop();
                        boton.deferUpdate();
                        //cerramos el ticket en la base de datos
                        applys_data.cerrado = true;
                        applys_data.save();
                        //hacemos que el usuario que ha creado el ticket, no pueda ver el ticket
                        interaction.channel.permissionOverwrites.edit(ticket_data.autor, { ViewChannel: false });
                        interaction.channel.send(`✅ **Postulacion Cerrada por \`${interaction.user.tag}\` el <t:${Math.round(Date.now() / 1000)}>**`)
                    });

                    collector.on("end", (collected) => {
                        //si el usuario ha hecho clic al botón de verificar, editamos el mensaje desactivado el botón de verificar
                        if(collected && collected.first() && collected.first().customId){
                            //editamos el mensaje desactivado el botón de verificarse
                            verificar.edit({
                                components: [new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder().setLabel("Verificarse").setStyle("Success").setCustomId("verificar").setEmoji("✅").setDisabled(true)
                                )]
                            })
                        } else {
                            verificar.edit({
                                embeds: [verificar.embeds[0].setColor("Red")],
                                components: [new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder().setLabel("NO VERIFICADO").setStyle('Danger').setCustomId("verificar").setEmoji("❌").setDisabled(true)
                                )]
                            })
                        }
                    })

                }
                    break;

                case "borrar_postulacion": {
                    interaction.deferUpdate();
                    //creamos el mensaje de verificar
                    const verificar = await interaction.channel.send({
                        embeds: [new Discord.EmbedBuilder()
                        .setTitle(`Verificate primero para continuar!`)
                        .setTimestamp()
                        .setFooter({text:`Sistema de Postulaciones`})
                        .setColor('Green')
                        ],
                        components: [new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder().setLabel("Verificarse").setStyle("Success").setCustomId("verificar").setEmoji("✅")
                        )]
                    });

                    //creamos el collector
                    const collector = verificar.createMessageComponentCollector({
                        filter: i => i.isButton() && i.message.author.id == client.user.id && i.user,
                        time: 180e3
                    });

                    //escuchamos clicks en el botón
                    collector.on("collect", boton => {
                        //si la persona que hace clic en el botón de verificarse NO es la misma persona que ha hecho clic al botón de cerrar ticket, return;
                        if(boton.user.id !== interaction.user.id) return boton.reply({content: `<:VS_cancel:1006609599199186974> **No puedes hacer eso! Solo ${interaction.user} puede interactuar!**`, ephemeral: true});

                        //paramos el collector
                        collector.stop();
                        boton.deferUpdate();
                        //borramos el ticket de la base de datos
                        applys_data.delete();
                        interaction.channel.send(`✅ **La postulacion será eliminada en menos de \`3 segundos ...\`\nAcción por: \`${interaction.user.tag}\` el <t:${Math.round(Date.now() / 1000)}>**`)
                        //borramos el canal en 3 segundos
                        setTimeout(() => {
                            interaction.channel.delete();
                        }, 3_000);
                    });

                    collector.on("end", (collected) => {
                        //si el usuario ha hecho clic al botón de verificar, editamos el mensaje desactivado el botón de verificar
                        if(collected && collected.first() && collected.first().customId){
                            //editamos el mensaje desactivado el botón de verificarse
                            verificar.edit({
                                components: [new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder().setLabel("Verificarse").setStyle("Success").setCustomId("verificar").setEmoji("✅").setDisabled(true)
                                )]
                            })
                        } else {
                            verificar.edit({
                                embeds: [verificar.embeds[0].setColor("Red")],
                                components: [new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder().setLabel("NO VERIFICADO").setStyle('Danger').setCustomId("verificar").setEmoji("❌").setDisabled(true)
                                )]
                            })
                        }
                    })

                }
                break;

                default:
                    break;
            }

        } catch (e) {
            console.log(e)
        }
    })
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
