const { SlashCommandBuilder, ButtonStyle } = require("discord.js")
const { readdirSync } = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const version = require('../../package.json');
const fs = require(`fs`);
module.exports = {
  data: new SlashCommandBuilder()
  .setName("info-bot")
  .setDescription("muestra el modulo de informacion del bot"),
  run: async (client, interaction) => {
              //definimos las variable lineas para aumentar que es = 0
              let lineas = 0
              //definimos la función entrar que será para entrar en cada archivo del bot y contar las lineas
              var entrar = function(dir) {
                //definimos los resultados encontrados en la carpeta
                var resultados = [];
                //entramos en cada carpeta encontrada
                var carpetas = fs.readdirSync(dir);
                //por cada fichero de la carpeta entrada, comprobamos SOLO los archivos y no las carpetas
                carpetas.forEach(function(archivo) {
                    archivo = dir + '/' + archivo;
                    //si el archivo NO está dentro de la carpeta node_modulos, no contamos las lineas
                    if(!archivo.includes("node_modules")){
                      var stat = fs.statSync(archivo);
                      if (stat && stat.isDirectory()) { 
                          resultados = resultados.concat(entrar(archivo));
                      } else { 
                          //si no es de la carpeta node_modules, contamos las lineas
                          resultados.push(archivo);
                      }
                    }
                });
                return resultados;
              }
              //por cada archivo de la carpeta, contamos las líneas
              for(const source of entrar(process.cwd())){
                try{
                  let data = await fs.readFileSync(source, 'utf8')
                  lineas += await data.split('\n').length;
                }catch(e){console.log(e)}
              };
        
              let date = Date.now();
              let pingDataBase = await new Promise((r, j) => { //hace promise para obtener el admin ping (osea el ping de la db)
                mongoose.connection.db
                  .admin()
                  .ping((err, result) =>
                    err || !result ? j(err || result) : r(Date.now() - date)
                  );
              });
        
              const embed = new Discord.EmbedBuilder()
              .setTitle(`Datos de CountBot ${client.user.username}`)
              .setFields(
                {name:"\`・\` Servidores", value:`\`\`\`yml\n${client.guilds.cache.size}\`\`\``, inline: true},
                {name:"\`・\` Usuarios", value:`\`\`\`yml\n${client.users.cache.size}\`\`\``, inline: true},
                {name:"\`・\` Comandos", value:`\`\`\`yml\n${client.commands.size}\`\`\``},
                {name:"\`・\` Líneas", value:`\`\`\`yml\n${lineas}\`\`\``, inline: true},
                {name:"\`・\` Ping", value:`\`\`\`yml\n${client.ws.ping}\`\`\``, inline: true},
                {name:"\`・\` Ping DB", value:`\`\`\`yml\n${pingDataBase}\`\`\``},
                {name:`\`・\` Node Version:`, value: `\`\`\`yml\n${process.version}\`\`\``, inline: true },
                {name:`\`・\` Discord.js Version:`, value: `\`\`\`yml\nv${version.dependencies['discord.js'].replace('^', '')}\`\`\``, inline: true },
                {name:`\`・\` MongoDB Version:`, value: `\`\`\`yml\n${mongoose.version}\`\`\``, inline: true },
                {name:`\`・\` CountBot Version:`, value: `\`\`\`yml\n${version.version}\`\`\``, inline: true }
                )
              .setThumbnail(client.user.displayAvatarURL())
              .setFooter({text:`${client.user.username} | ${client.user.id}`, iconURL:client.user.displayAvatarURL()})
              .setColor(client.color)

        interaction.reply({ embeds: [embed] })
      }}