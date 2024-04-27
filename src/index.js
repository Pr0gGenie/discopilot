const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
