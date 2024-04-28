const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("message")
    .setDescription("Sends a message to ChatGPT"),
  async execute(interaction) {
    await interaction.reply("Message sent to ChatGPT");
  }
}
