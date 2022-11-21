const fs = require('node:fs')
const { Routes } = require("discord.js")
const { REST } = require("@discordjs/rest")
const config = require('../config/config.json');

module.exports = (client) => {

let slash = [];

  fs.readdirSync("./slashcommands/").forEach((carpeta) => {
            const commands = fs.readdirSync(`./slashcommands/${carpeta}`).filter((archivo) => archivo.endsWith(".js"));
            for (let archivo of commands){

      let command = require(`../slashcommands/${carpeta}/${archivo}`);

    if(command.data.name) {
  client.slash.set(command.data.name, command)
  slash.push(command.data.toJSON());
    }
            }
    
const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {

try{
await rest.put(
    Routes.applicationCommands(config.clientID),
    { body: slash },
);

  
} catch(e) {
console.error(e)
}

})()
    
  })

console.log(`${client.slash.size} slash cargados`.green)}