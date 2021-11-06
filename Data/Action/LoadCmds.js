async function LoadCmd(client) {
    client.on("interactionCreate", async interaction => {
        if (interaction.commandName === "say") {
            module.exports = require("../src/Commandes/Say").Say(interaction);
        }

        if (interaction.commandName === "setimageon") {
            module.exports = require("../src/Commandes/SetImageon").SetImageon(interaction);
        }
        
        if (interaction.commandName === "setimageoff") {
            module.exports = require("../src/Commandes/SetImageoff").SetImageoff(interaction);
        }
    });
};

module.exports = { LoadCmd };
