async function LoadCmd(client) {
    client.on("interactionCreate", async interaction => {
        if (interaction.commandName === "ping") {
            module.exports = require("../src/Commandes/Ping").Ping(interaction);
        }
    });
};

module.exports = { LoadCmd };
