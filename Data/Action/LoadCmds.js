async function LoadCmd(client) {
    client.on("interactionCreate", async interaction => {
        if (interaction.commandName === "ping") {
            module.exports = require("../src/Commandes/Ping").Ping(client, interaction);
        }
        if (interaction.commandName === "setstar") {
            module.exports = require("../src/Commandes/SetStar").SetStar(client, interaction);
        }
        if (interaction.commandName === "setstarchannel") {
            module.exports = require("../src/Commandes/SetStarChannel").SetStarChannel(client, interaction);
        }
        if (interaction.commandName === "setstarnumber") {
            module.exports = require("../src/Commandes/SetStarNum").SetStarNum(client, interaction);
        }
    });
};

module.exports = { LoadCmd };
