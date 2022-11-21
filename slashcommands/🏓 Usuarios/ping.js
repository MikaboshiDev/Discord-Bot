const { SlashCommandBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("pong"),
  run: async (client, interaction) => {
  await interaction.reply({
content: "pong!",
ephemeral: true
})
}

}