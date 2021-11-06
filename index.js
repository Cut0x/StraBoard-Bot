// Créé par Cut0x -> https://cutox.tech/

const { Client, Intents, Permissions, MessageEmbed } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const db = require("quick.db");
const { /*prefix,*/ token } = require("./Data/config");

client.once("ready", () => {
    console.log("[LOADING] Conexions en cours !");

    client.guilds.cache.forEach(guilds => {
        module.exports = require("./Data/Action/SlashCmds").SlashLoad(client, guilds);
        
        console.log(`-> "${guilds.name}" chargé !`);
    });

    setTimeout(() => {
        console.log("[LOADED] Connecté sur " + client.user.username + "#" + client.user.discriminator + ".");
    }, 2000)
});

client.on("guildCreate", async guild => {
    module.exports = require("./Data/Action/SlashCreateCmds").SlashCreateCmds(client, guild);
});

client.login(token);

module.exports = require("./Data/Action/LoadCmds").LoadCmd(client);
