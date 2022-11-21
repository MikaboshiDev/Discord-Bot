const fs = require('fs');
module.exports = (client) => {
    try {
        console.log(`
╔═════════════════════════════════════════════════════╗
║                                                     ║
║  Bienvenido de nuevo /-/ Qin Shi Huang 悟#0001 /-/  ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`.brightRed)
        let comandos = 0;
        fs.readdirSync("./comandos/").forEach((carpeta) => {
            const commands = fs.readdirSync(`./comandos/${carpeta}`).filter((archivo) => archivo.endsWith(".js"));
            for (let archivo of commands){
                let comando = require(`../comandos/${carpeta}/${archivo}`);
                if(comando.name) {
                    client.commands.set(comando.name, comando);
                    comandos++
                } else {
                    console.log(`COMANDO [/${carpeta}/${archivo}]`, `error => el comando no está configurado`.brightMagenta)
                    continue;
                }
                if(comando.aliases && Array.isArray(comando.aliases)) comando.aliases.forEach((alias) => client.aliases.set(alias, comando.name));
            }
        });
        console.log(`[ DATA: ] ${comandos} Comandos del bot 001 Cargados Correctamente`.brightMagenta);
    } catch(e){
        console.log(e)
    }
}

