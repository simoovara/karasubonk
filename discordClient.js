global.File = class File {};
require("dotenv").config();

const { Client } = require("discord.js-selfbot-v13");
const dgram = require("dgram");

const client = new Client();
const socket = dgram.createSocket("udp4");

const IP = "127.0.0.1";
const PORT = 8085;

const triggers = [
    "flare",
    "furea",
    "fureamo"
];

function sendBonk() {
    const message = Buffer.from("bonk");
    socket.send(message, PORT, IP);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
    const content = message.content.toLowerCase();
    console.log(content);

    if (triggers.some(trigger => content.includes(trigger))) {
        console.log(`Trigger detected: ${message.content}`);
        sendBonk();
    }
});

client.login(process.env.TOKEN);