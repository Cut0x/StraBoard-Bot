const { SlashCommandBuilder } = require("@discordjs/builders"); 
const { Permissions } = require("discord.js");

async function SlashLoad(client, guilds) {
    /*const ping = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Commande permettant de voir la latence du bot !")
    client.guilds.cache.get(guilds.id).commands.create(ping);

    const setstar = new SlashCommandBuilder()
        .setName("setstar")
        .setDescription("Commande permettant d'activer/de désactiver le système de starboard !")
    client.guilds.cache.get(guilds.id).commands.create(setstar);

    const setstarchannel = new SlashCommandBuilder()
        .setName("setstarchannel")
        .setDescription("Commande permettant de choisir le salon du système de starboard !")
        .addChannelOption(option => option
            .setName("salon")
            .setDescription("Choisi un salon TEXTUEL")
            .setRequired(true))
    client.guilds.cache.get(guilds.id).commands.create(setstarchannel);

    const setstarnumber = new SlashCommandBuilder()
        .setName("setstarnumber")
        .setDescription("Commande permettant de choisir une limite au système de starboard !")
        .addNumberOption(option => option
            .setName("nombre")
            .setDescription("Choisi un nombre")
            .setRequired(true))
    client.guilds.cache.get(guilds.id).commands.create(setstarnumber);*/
};

module.exports = { SlashLoad };
