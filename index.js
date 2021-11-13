// Créé par Cut0x -> https://cutox.tech/

const { Client, Intents, Permissions, MessageEmbed, Interaction } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
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

client.on("messageReactionAdd", async (reaction, user) => {
    if (db.get(`starboard_${reaction.message.guild.id}`) === true) {
        if (reaction.users.bot) return;
        //const rect = db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`);

        if (reaction.emoji.name === "⭐") {
            db.add(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`, 1)

            if (db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`) >= db.get(`starboard_${reaction.message.guild.id}_limite`) ?? 5) {
                const LogsStar = client.guilds.cache.get(reaction.message.guild.id).channels.cache.get(db.get(`starboard_${reaction.message.guild.id}_channel`));

                if (!LogsStar) return,
                
                const embed = new MessageEmbed()
                    .setColor("#2f3136")
                    .setAuthor(`${reaction.message.author.tag}`, reaction.message.author.avatarURL({ dynamic: true }))
                    .setTitle("Aller au message !")
                    .setURL(`https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`)
                    .setDescription(`${reaction.message.content}`)
                if (reaction.message.attachments.size >= 1) {
                    const [attachment] = reaction.message.attachments.values();
                    const url = attachment ? attachment.url : null;
                    embed.setImage(url)
                }

                if (db.get(`starboard_send_${reaction.message.id}`) === null) {
                    const msg = await LogsStar.send({
                        content: `:star:${db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`)} ${reaction.message.channel}`,
                        embeds: [
                            embed
                        ]
                    })
                    db.set(`starboard_send_${reaction.message.id}`, {
                        idMsg: msg.id,
                        idChnl: msg.channel.id
                    })
                } else {
                    try {
                        client.channels.cache.get(db.get(`starboard_send_${reaction.message.id}.idChnl`)).messages.fetch(db.get(`starboard_send_${reaction.message.id}.idMsg`)).then(async message => {
                            message.edit({
                                content: `:star:${db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`)} ${reaction.message.channel}`,
                                embeds: [
                                    embed
                                ]
                            })
                        })
                    } catch(error) {
                        //console.log("Une erreur est survenue.")
                    }
                }
            }
        }
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (db.get(`starboard_${reaction.message.guild.id}`) === true) {
        if (reaction.users.bot) return;
        //const rect = db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`);

        if (reaction.emoji.name === "⭐") {
            db.subtract(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`, 1)

            if (db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`) >= db.get(`starboard_${reaction.message.guild.id}_limite`)) {
                /*const LogsStar = client.guilds.cache.get(reaction.message.guild.id).channels.cache.get(db.get(`starboard_${reaction.message.guild.id}_channel`));*/

                const embed = new MessageEmbed()
                    .setColor("#2f3136")
                    .setAuthor(`${reaction.message.author.tag}`, reaction.message.author.avatarURL({ dynamic: true }))
                    .setTitle("Aller au message !")
                    .setURL(`https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`)
                    .setDescription(`${reaction.message.content}`)
                if (reaction.message.attachments.size >= 1) {
                    const [attachment] = reaction.message.attachments.values();
                    const url = attachment ? attachment.url : null;
                    embed.setImage(url)
                }

                if (db.get(`starboard_send_${reaction.message.id}`) === null) {
                    /*const msg = await LogsStar.send({
                        content: `:star:${db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`)} ${reaction.message.channel}`,
                        embeds: [
                            embed
                        ]
                    })
                    db.set(`starboard_send_${reaction.message.id}`, {
                        idMsg: msg.id,
                        idChnl: msg.channel.id
                    })*/
                } else {
                    client.channels.cache.get(db.get(`starboard_send_${reaction.message.id}.idChnl`)).messages.fetch(db.get(`starboard_send_${reaction.message.id}.idMsg`)).then(async message => {
                        message.edit({
                            content: `:star:${db.get(`starboard_${reaction.message.guild.id}_message_${reaction.message.id}`)} ${reaction.message.channel}`,
                            embeds: [
                                embed
                            ]
                        })
                    })
                }
            }
        }
    }
});
