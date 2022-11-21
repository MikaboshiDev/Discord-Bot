const { Client, ActivityType } = require(`discord.js`);
const mongoose = require("mongoose");
const { mongodb } = require("../../config/config.json");
const DB = require('../../modelos/clientDB');
const Ascii = require("ascii-table");
const ms = require("ms");
require('colors');
const os = require("os");
const osUtils = require("os-utils");

const cpus = os.cpus();
const cpu = cpus[0];

    const total = Object.values(cpu.times).reduce(
    (acc, tv) => acc + tv, 0
);

const usage = process.cpuUsage();
const currentCPUUsage = (usage.user + usage.system) * 1000;
const perc = currentCPUUsage / total * 100;

async function getMemoryUsage() {
return process.memoryUsage().heapUsed / (1024 * 1024).toFixed(2);
}

module.exports = async (client) => {

                const initialStatus = setTimeout(() => {
                    client.user.setPresence({
                        activities: [{ name: `Iniciando Conexion con la DB...`, type: ActivityType.Playing }],
                        status: "idle"
                    });
                });

                const statusArray = [
                    `Uso de Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(1)}%`,
                    `Cpu: ${(perc / 1000 ).toFixed(1)}%`,
                    `a Qin Shi Huang 悟#0001`,
                    `Teramont Hosting Discord`,
                    `Creacion de bots y software`,
                    `Reporta Bugs en mi Servidor de Soporte`,
                    `Recuerda ver mis comandos con -help`,
                    `Me actualizo a diario con mas de +150 comandos`,
                    `Conectado a mi base de datos`
                ];
                let index = 0;
    
                const randTime = Math.floor(Math.random() * 5) + 1;
    
                setTimeout(() => {
    
                    setInterval(() => {
                        if (index === statusArray.length) index = 0;
                        const status = statusArray[index];
        
                        client.user.setPresence({
                            activities: [{ name: status, type:ActivityType.Playing }],
                            status: "online"
                        });
                        index++;
                    }, 4 * 1000) 
    
                }, randTime) 
           
            if(!mongodb) return;
            mongoose.connect(mongodb, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                console.log("Database y Handlers Cargados Correctamente")
            }).catch((err) => {
                console.log(err)
            });        

        let memArray = [];

        setInterval(async () => {

            memArray.push(await getMemoryUsage());

            if (memArray.length >= 14) {
                memArray.shift();
            }

            await DB.findOneAndUpdate({
                Client: true,
            }, {
                Memory: memArray,
            }, {
                upsert: true,
            });

        }, ms("60s")); 
    };
