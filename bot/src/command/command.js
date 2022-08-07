import { readFileSync } from "fs";

const commands = [[], JSON.parse(readFileSync("./src/command/server.json", "utf-8")), JSON.parse(readFileSync("./src/command/global.json", "utf-8"))];

export async function setCommand(client, type, guildId) {
  const commandManager = client?.application?.commands;
  if (!commandManager) return;
  const data = commands[type];
  return commandManager.set(data, guildId);
}