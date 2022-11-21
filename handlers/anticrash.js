const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1010385636873736302/MWH7KIVHSHeCCq8yeFg3oEzSdCO2UpDiLVz34hsgsYGMOZ0Q--4myd5BbZQizwmVlRdH"});
const { EmbedBuilder, WebhookClient, ButtonStyle } = require("discord.js");

const embed = new EmbedBuilder()
     .setColor("Red");

     client.on("error", (err) => {
        console.log(err);

embed
    .setTitle("Discord API Error")
    .setURL("https://discordjs.guide/popular-topics/errors.html#api-errors")
    .setDescription(`<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\``)
    .setTimestamp();

return webhook.send({ embeds: [embed] });
});

process.on("unhandledRejection", (reason, promise) => {
    console.log(reason, "\n", promise);

    embed
        .setTitle("Unhandled Rejection/Catch")
        .setURL("https://nodejs.org/api/process.html#event-unhandledrejection")
        .addFields(
            { name: "Reason", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`yml\n${inspect(reason, { depth: 0 }).slice(0, 1000)}\`\`\`` },
            { name: "Promise", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`yml\n${inspect(promise, { depth: 0 }).slice(0, 1000)}\`\`\`` }
        )
        .setTimestamp();

    return webhook.send({ embeds: [embed] });
});

process.on("uncaughtException", (err, origin) => {
console.log(err, "\n", origin);

embed
    .setTitle("Uncaught Exception/Catch")
    .setURL("https://nodejs.org/api/process.html#event-uncaughtexception")
    .addFields(
        { name: "Error", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\`` },
        { name: "Origin", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(origin, { depth: 0 }).slice(0, 1000)}\`\`\`` }
    )
    .setTimestamp();

return webhook.send({ embeds: [embed] });
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
console.log(err, "\n", origin);

embed
    .setTitle("Uncaught Exception Monitor")
    .setURL("https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor")
    .addFields(
        { name: "Error", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\`` },
        { name: "Origin", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(origin, { depth: 0 }).slice(0, 1000)}\`\`\`` }
    )
    .setTimestamp();

return webhook.send({ embeds: [embed] });
});

process.on("warning", (warn) => {
    console.log(warn);
    
    embed
        .setTitle("Uncaught Exception Monitor Warning")
        .setURL("https://nodejs.org/api/process.html#event-warning")
        .addFields(
            { name: "Warning", value: `<@&1010058606164574209> <@&1010058503307661413> <@&1010058402443051029> <@&1010058296507514912> \`\`\`js\n${inspect(warn, { depth: 0 }).slice(0, 1000)}\`\`\`` }
        )
        .setTimestamp();
    
    return webhook.send({ embeds: [embed] });
    });