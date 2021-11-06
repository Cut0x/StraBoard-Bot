const { SlashCommandBuilder } = require("@discordjs/builders"); 
const { Permissions } = require("discord.js");

async function SlashCreateCmds(client, guilds) {
    const ping = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Commande pour voir la latence du bot !")
    client.guilds.cache.get(guilds.id).commands.create(ping);
};

module.exports = { SlashCreateCmds };
