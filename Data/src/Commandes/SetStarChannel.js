const { Permissions } = require("discord.js");
const db = require("quick.db");

async function SetStarChannel(client, interaction) {
    if (db.get(`starboard_${interaction.guild.id}`) === null) return interaction.reply({ content: `:x: Vous devez **activer** le **système de starboard** !`, ephemeral: true })

    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({ content: `:x: Vous devez être **Administrateur** !`, ephemeral: true })

    const channel = interaction.options.getChannel("salon");

    if (channel.type === "GUILD_TEXT") {
        db.set(`starboard_${interaction.guild.id}_channel`, channel.id);
        
        interaction.reply({ content: `✅ Le salon ${channel} est choisi comme salon de **starboard** !` })
    } else return interaction.reply({ content: `:x: Vous devez choisir un salon **textuel** !`, ephemeral: true })
};

module.exports = { SetStarChannel };