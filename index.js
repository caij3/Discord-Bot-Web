const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
const port = 3000;

// Discord bot setup
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

bot.login(process.env.TOKEN).catch((error) => console.error("Error logging in:", error));

bot.once('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Endpoint to get guilds and channels
app.get('/guilds', (req, res) => {
  const guildsData = bot.guilds.cache.map(guild => ({
    id: guild.id,
    name: guild.name,
    channels: guild.channels.cache
      .filter(channel => channel.isTextBased() && !channel.isVoiceBased()) // Get only text-based channels
      .map(channel => ({ id: channel.id, name: channel.name }))
  }));
  res.json(guildsData);
});

// Handle form submission
app.post('/send-message', async (req, res) => {
  const { guildId, channelId, message } = req.body;

  try {
    const guild = await bot.guilds.fetch(guildId);
    const channel = await guild.channels.fetch(channelId);

    if (channel.isTextBased()) {
      await channel.send(message);
      res.send('<p style="color: green;">Message sent successfully!</p>');
    } else {
      res.send('<p style="color: red;">Channel is not a text channel.</p>');
    }
  } catch (error) {
    console.error(error);
    res.send('<p style="color: red;">Error sending message. Please check the guild ID, channel ID, and try again.</p>');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
