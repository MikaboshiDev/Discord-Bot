const Discord = require(`discord.js`);
module.exports = {
    name: "node",
    desc: "guia de process.on en discord.js",
    aliases: [" "],
    run: async (client, message, args, prefix) => {

        const embed = new Discord.EmbedBuilder()
        .setTitle(`Node.js y uso de Process`)
        .setColor(client.color)
        .setDescription(`Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E / S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema más grande de librerías de código abierto en el mundo.`)
        .addFields(
            {name:`Que es Process.on`, value:`El método process.on () se utiliza para registrar un manejador de eventos para el evento especificado. El evento se puede emitir varias veces, cada vez que se emite, el manejador de eventos se ejecuta. Si se emite el evento una vez, el manejador de eventos se ejecuta una vez; si se emite el evento 10 veces, el manejador de eventos se ejecuta 10 veces. El método process.on () devuelve un objeto EventEmitter, que puede usarse para registrar múltiples manejadores para el mismo evento.`},
            {name:`Que es unhandledRejection`, value:`El evento unhandledRejection se emite cuando una promesa es rechazada y no tiene un manejador de rechazo asociado. Cuando se emite un evento unhandledRejection, el evento process.on ('unhandledRejection') se ejecuta. Si no hay un manejador de rechazo asociado a la promesa, el evento unhandledRejection se emite cuando la promesa se rechaza. Si hay un manejador de rechazo asociado a la promesa, el evento unhandledRejection no se emite cuando la promesa se rechaza.`},
            {name:`Ejemplos de unhandledRejection`, value:`\`\`\`js\nprocess.on('unhandledRejection', error => {\n    console.error('Unhandled promise rejection:', error);\n});\n\`\`\``},
            
            {name:`Que es uncaughtException`, value:`El evento uncaughtException se emite cuando se produce una excepción que no se captura con un bloque try / catch. Cuando se emite un evento uncaughtException, el evento process.on ('uncaughtException') se ejecuta. Si no hay un bloque try / catch que capture la excepción, el evento uncaughtException se emite cuando se produce una excepción. Si hay un bloque try / catch que capture la excepción, el evento uncaughtException no se emite cuando se produce una excepción.`},
            {name:`Ejemplo de uncaughtException`, value:`\`\`\`js\nprocess.on('uncaughtException', error => {\n    console.error('Uncaught exception:', error);\n});\n\`\`\``},
            
            {name:`Que es Warning`, value:`El evento warning se emite cuando se produce una advertencia. Cuando se emite un evento warning, el evento process.on ('warning') se ejecuta. Si no hay un manejador de advertencias asociado a la advertencia, el evento warning no se emite cuando se produce tal advertencia`},
            {name:`Ejemplo en Discord.js`, value:`\`\`\`js\nprocess.on('warning', warning => {\n    console.warn(warning.name);\n    console.warn(warning.message);\n    console.warn(warning.stack);\n});\n\`\`\``},
            
            {name:`Que es exit`, value:`El evento exit se emite cuando el proceso Node.js está a punto de terminar. Cuando se emite un evento exit, el evento process.on ('exit') se ejecuta. Si no hay un manejador de salida asociado al evento exit, el evento exit no se emite cuando se produce tal evento.`},
            {name:`Ejemplo de exit`, value:`\`\`\`js\nprocess.on('exit', code => {\n    console.log(\`About to exit with code: \${code}\`);\n});\n\`\`\``},
            {name:`Ejemplo de beforeExit`, value:`\`\`\`js\nprocess.on('beforeExit', code => {\n    console.log(\`Process beforeExit event with code: \${code}\`);\n});\n\`\`\``},
            
            {name:`Que es MultipleResolves`, value:`El evento multipleResolves se emite cuando se llama a la función de resolución o rechazo de una promesa más de una vez. Cuando se emite un evento multipleResolves, el evento process.on ('multipleResolves') se ejecuta. Si no hay un manejador de resolución múltiple asociado a la promesa, el evento multipleResolves no se emite cuando se produce tal promesa.`},
            {name:`Ejemplo en multipleResolves`, value:`\`\`\`js\nprocess.on('multipleResolves', (type, promise, reason) => {\n    console.error(\`Multiple \${type} event with: \${promise} and \${reason}\`);\n});\n\`\`\``},
            
            {name:`Que es rejectionHandled`, value:`El evento rejectionHandled se emite cuando una promesa es rechabada y tiene un manejador de rechazo asociado. Cuando se emite un evento rejectionHandled, el evento process.on ('rejectionHandled') se ejecuta. Si no hay un manejador de rechazo asociado a la promesa, el evento rejectionHandled no se emite cuando la promesa se rechaza.`},
            {name:`Ejemplo en rejectionHandled`, value:`\`\`\`js\nprocess.on('rejectionHandled', promise => {\n    console.log(\`Promise rejectionHandled event with: \${promise}\`);\n});\n\`\`\``},
            
            {name:`Que es uncaughtExceptionMonitor`, value:`El evento uncaughtExceptionMonitor se emite cuando se produce una excepción que no se captura con un bloque try / catch. Cuando se emite un evento uncaughtExceptionMonitor, el evento process.on ('uncaughtExceptionMonitor') se ejecuta. Si no hay un bloque try / catch que capture la excepción, el evento uncaughtExceptionMonitor se emite cuando se produce una excepción. Si hay un bloque try / catch que capture la excepción, el evento uncaughtExceptionMonitor no se emite cuando se produce una excepción.`},
            {name:`Ejemplo de uncaughtExceptionMonitor`, value:`\`\`\`js\nprocess.on('uncaughtExceptionMonitor', (error, origin) => {\n    console.error(\`Uncaught Exception monitor: \${error} and \${origin}\`);\n});\n\`\`\``},
        )
        .setFooter({text:`Que es Node.js y el Evento Process.On`})

        message.reply({ embeds: [embed]})
    }

}