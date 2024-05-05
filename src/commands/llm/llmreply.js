const { SlashCommandBuilder } = require("discord.js");
const { msgllm } = require("./msgllm")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("chatbot")
    .setDescription("Get a reply from an LLM")
    .addStringOption(option =>
      option
        .setName('prompt')
        .setDescription('Enter your prompt')
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString('prompt');
    await interaction.deferReply();
    const llmResponse = await msgllm(message);
    await interaction.editReply(llmResponse);
  },
};
