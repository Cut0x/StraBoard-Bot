const { Permissions } = require("discord.js");
const db = require("quick.db");

async function SetStarNum(client, interaction) {
    if (db.get(`starboard_${interaction.guild.id}`) === null) return interaction.reply({ content: `:x: Vous devez **activer** le **système de starboard** !`, ephemeral: true })

    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({ content: `:x: Vous devez être **Administrateur** !`, ephemeral: true })

    const number = interaction.options.getNumber("nombre");

    db.set(`starboard_${interaction.guild.id}_limite`, parseInt(number))

    interaction.reply({ content: `✅ Le nombre **${number}** est désormais la limite du **starboard** !` })
};

module.exports = { SetStarNum };