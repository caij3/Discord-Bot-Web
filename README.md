# Discord Bot Web Interface

A web interface that allows you to send messages to Discord channels using a bot.

## Table of Contents
- [Purpose](#purpose)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Purpose
This project aims to provide a simple and user-friendly web interface to send messages to Discord channels via a bot.

## Prerequisites
Before starting, ensure you have [Node.js](https://nodejs.org) installed on your machine.

## Installation

### Step 1: Clone the Repository and Install Dependencies

Clone the repository and navigate to the project directory. Install the necessary dependencies by running the following command:

```shell
npm install express discord.js dotenv body-parser
```

### Step 2: Create a Discord Bot

If you don't have a Discord bot yet, follow these steps:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on **"New Application"**.
3. Provide a name for your bot and agree to the Terms of Service.
4. Click **"Create"** to generate your Discord bot.

### Step 3: Add the Bot Token to Your Project

1. Navigate to the **"Bot"** tab in the Discord Developer Portal.
2. Click **"Reset Token"** to generate a new token.
3. Copy the generated token.  
4. In the root directory of your project, create a `.env` file and add the following line:

    ```env
    TOKEN=your-bot-token-here
    ```

    **Note:** Do not share your token with anyone. Keep it secure!

### Step 4: Add the Bot to a Server

1. Go to the **"OAuth2"** tab in the Discord Developer Portal.
2. Under **Scopes**, select **"bot"**.
3. Under **Bot Permissions**, select the required permissions for your bot:
    - `Send Messages`
    - `View Channels`
    
4. Select **"Guild Install"** as the Integration Type.  
5. Copy the generated URL and paste it into your web browser.  
6. Choose the server where you want to add the bot, click **Continue**, and then **Authorize**.

Congratulations! Your bot is now added to the server.

## Running the Application

To start the web interface, run:

```shell
node index.js
```

This command will start a local server on your machine. Open your web browser and navigate to `http://localhost:3000` to access the web interface.

## Usage

Once the web interface is open:

1. Select the desired server (guild) and channel from the dropdown menus.
2. Enter your message in the text field.
3. Click **"Send Message"** to send your message to the selected channel.

## Screenshots

### Interface Example

![Interface Screenshot](https://github.com/user-attachments/assets/cdfae07c-80dc-4f12-9e7a-4955b01d9300)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
