const { SlashCommandBuilder } = require("@discordjs/builders"); 
const { Permissions } = require("discord.js");

async function SlashCreateCmds(client, guilds) {
    const say = new SlashCommandBuilder()
        .setName("say")
        .setDescription("Commande permettant de faire parler le bot !")
        //.setDefaultPermission(Permissions.FLAGS.ADMINISTRATOR)
        .addStringOption(option => option
            .setName("message")
            .setDescription("Ajoute un message.")
            .setRequired(true))
    client.guilds.cache.get(guilds.id).commands.create(say);

    const setimageon = new SlashCommandBuilder()
        .setName("setimageon")
        .setDescription("Commande permettant d'obliger les images sur un salon !")
        //.setDefaultPermission(Permissions.FLAGS.ADMINISTRATOR)
    client.guilds.cache.get(guilds.id).commands.create(setimageon);

    const setimageoff = new SlashCommandBuilder()
        .setName("setimageoff")
        .setDescription("Commande permettant de désactiver l'obligation d'images sur un salon !")
        //.setDefaultPermission(Permissions.FLAGS.ADMINISTRATOR)
    client.guilds.cache.get(guilds.id).commands.create(setimageoff);
};

module.exports = { SlashCreateCmds };