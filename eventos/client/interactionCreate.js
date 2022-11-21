module.exports = async (client, interaction) => {

  if (interaction.isChatInputCommand()) {
    const command = client.slash.get(interaction.commandName);
    try {
  await command.run(client, interaction);
    } catch (error) {
      console.error("Error" + error);
      }
    }
  }