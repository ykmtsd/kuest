import { readFileSync } from "fs";
import { parse } from "ini";
const config = parse(readFileSync("./config.ini", "utf-8"));

import { Client } from "discord.js";
const options = {
  intents: []
};
const client = new Client(options);

import { setCommand } from "./command/command.js";

client.once("ready", async () => {
  await setCommand(client, 2);
  process.exit();
});

client.login(config.bot.token);