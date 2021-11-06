const { Permissions } = require("discord.js");
const db = require("quick.db");

async function SetStar(client, interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({ content: `:x: Vous devez être **Administrateur** !`, ephemeral: true })

    if (db.get(`starboard_${interaction.guild.id}`) === null) {
        db.set(`starboard_${interaction.guild.id}`, true)

        interaction.reply({ content: "✅ Le système du **starboard** est bien **activé** !" })
    } else if (db.get(`starboard_${interaction.guild.id}`) === true) {
        db.delete(`starboard_${interaction.guild.id}`)

        interaction.reply({ content: "✅ Le système du **starboard** est bien **désactivé** !" })
    }
};

module.exports = { SetStar };