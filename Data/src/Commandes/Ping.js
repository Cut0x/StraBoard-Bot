async function Ping(client, interaction) {
    interaction.reply({ content: `:ping_pong: Ma latence est **${client.ws.ping} ms**.`, ephemeral: true })
};

module.exports = { Ping };
