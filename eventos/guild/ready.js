const moment = require('moment');
const osu = require('node-os-utils');
const os = require('os');
const Ascii = require("ascii-table");
const query = require('samp-query');
require('moment-duration-format');

module.exports = async (client) => {
 // Information bot login.
let cpuUsado;
const cpu = osu.cpu
var mem = osu.mem;
let freeRAM, usedRAM;

await mem.info().then(info => {
  freeRAM = info['freeMemMb']
  usedRAM = info['totalMemMb'] - freeRAM
});

// Medidor de ping
let values = {
  high: 200,
  medium: 100,
  low: 50
}
let ping = client.ws.ping
let status;
if(ping > values.high){ status = 'Inestable' }
else if (ping > values.medium){ status = 'Estable' }
else { status = 'Excelente' }

console.log(" ")
const table = new Ascii(`📛    INFORMATION BASIC BOT STATUS   📛`)
table
.setHeading("Parametros", "Valores", "Status")
.addRow("Ram", `${(usedRAM, freeRAM)} [${Math.round((100 * usedRAM / (usedRAM + freeRAM)))}%]`, "🟢")
.addRow("Consume", `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`, "🟢")
.addRow("System", `${os.type} ${os.release} ${os.arch}`, "🟢")
.addRow("Host", `${moment.duration(os.uptime * 1000).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}`, "🟢")
.addRow("Bot", `${moment.duration(client.uptime).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}`, "🟢")
.addRow("Api", `${status} | ${ping}ms`, "🟢");
console.log(table.toString())
console.log(" ")
  }