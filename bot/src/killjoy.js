import { readFileSync } from "fs";
import { parse } from "ini";
const config = parse(readFileSync("./config.ini", "utf-8"));

import Discord, { Client } from "discord.js";
const { SlashCommandBuilder } = import('@discordjs/builders');
const { MessageActionRow, MessageButton } = import('discord.js');
const options = {
  presence: {
    activities: [
      {
        name: "VALORANT",
        type: "COMPETING"
      }
    ]
  },
  intents: [
    "GUILDS",
    "GUILD_VOICE_STATES"
  ]
};
const client = new Client(options);

import { setCommand } from "./command/command.js";
import Guilds from "./guild/Guilds.js";
import { channel } from "diagnostics_channel";

const time = 43200000;
const guilds = new Guilds();

client.once("ready", () => {
  client.guilds.cache.each(guild => {
    if (!guild.me.roles.botRole) {
      guild.leave();
      return;
    }
    const guildId = guild.id;
    const type = guilds.has(guildId) ? 1 : 0;
    setCommand(client, type, guildId);
  });
});

client.on("guildCreate", guild => {
  if (!guild.me.roles.botRole) guild.leave();
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand() || !interaction.inGuild()) return;
  const key = interaction.guildId;
  switch (interaction.commandName) {

    case "help": {
      await interaction.deferReply({ ephemeral: true });
      const embed = new Discord.MessageEmbed();
      embed.setTitle("BOTの使い方");
      embed.setDescription("初めて使う場合はまず`/setting`を使用してVCを設定ください\n設定後`/team`と`/call`が使用可能になります\n[View Code](https://github.com/secchanu/discord-valorant-custom-bot)");
      embed.addField(
        "/help",
        "このコマンドです\nBOTの説明を表示します"
      );
      embed.addField(
        "/map",
        "マップを1つ選びます"
      );
      embed.addField(
        "/mapban",
        "BANするマップを選びます"
      );
      embed.addField(
        "/setting",
        "使用するVCを設定します\n/setting VC1 VC2 (VC0)"
      );
      embed.addField(
        "/team",
        "同じVCにいるメンバーを2チームに分けます"
      );
      embed.addField(
        "/call",
        "チーム分けしたメンバー全員を1つのVCに集合させます"
      );
      embed.setFooter("edit by secchanu");
      const embeds = [embed];
      await interaction.followUp({ embeds });
      break;
    }

    case "map": {
      await interaction.deferReply({ ephemeral: false });
      const maps = config.data.maps;
      const map = maps[Math.floor(Math.random() * maps.length)];
      await interaction.followUp(map);
      break;
    }

    case "mapban": {
      module.exports = {
        data: new SlashCommandBuilder().setName('killjoy').setDescription('Choose team and banned maps'),
        async execute(interaction, client) {
          const row = new MessageActionRow()
            .addComponents(
            new MessageButton()
              .setCustomId("team1").setStyle("PRIMARY").setLabel("チーム1"),
            
            new MessageButton()
              .setCustomId("team2").setStyle("PRIMARY").setLabel("チーム2"),
            );
            await interaction.reply({ ephemeral: true, components: [row] });
      if (interaction.customId === "team1"){
        await interaction.reply({
          content: "チーム1のBANマップを選択してください"
        });

        const ascent1 = new Discord.MessageButton()
          .setCustomId("ascent1")
          .setStyle("PRIMARY")
          .setLabel("アセント")
        await message.channel.send({
          content: "チーム1はアセントをBANしました"
        });
        const icebox1 = new Discord.MessageButton()
          .setCustomId("icebox1")
          .setStyle("PRIMARY")
          .setLabel("アイスボックス")
        await message.channel.send({
          content: "チーム1はアイスボックスをBANしました"
        });
        const split1 = new Discord.MessageButton()
          .setCustomId("split1")
          .setStyle("PRIMARY")
          .setLabel("スプリット")
        await message.channel.send({
          content: "チーム1はスプリットをBANしました"
        });
        const bind1 = new Discord.MessageButton()
          .setCustomId("bind1")
          .setStyle("PRIMARY")
          .setLabel("バインド")
        await message.channel.send({
          content: "チーム1はバインドをBANしました"
        });
        const fracture1 = new Discord.MessageButton()
          .setCustomId("fracture1")
          .setStyle("PRIMARY")
          .setLabel("フラクチャー")
        await message.channel.send({
          content: "チーム1はフラクチャーをBANしました"
        });
        const breeze1 = new Discord.MessageButton()
          .setCustomId("breeze1")
          .setStyle("PRIMARY")
          .setLabel("ブリーズ")
        await message.channel.send({
          content: "チーム1はブリーズをBANしました"
        });
        const haven1 = new Discord.MessageButton()
          .setCustomId("haven1")
          .setStyle("PRIMARY")
          .setLabel("ヘイヴン")
        await message.channel.send({
          content: "チーム1はヘイヴンをBANしました"
        });
        const pearl1 = new Discord.MessageButton()
          .setCustomId("peal1")
          .setStyle("PRIMARY")
          .setLabel("パール")
        await message.channel.send({
          content: "チーム1はパールをBANしました"
        });
      }

      if (interaction.customId === "team2"){
        await interaction.reply({
          content: "チーム2のBANマップを選択してください",
        });

        const ascent2 = new Discord.MessageButton()
          .setCustomId("ascent2")
          .setStyle("PRIMARY")
          .setLabel("アセント")
        await message.channel.send({
          content: "チーム2はアセントをBANしました"
        });
        const icebox2 = new Discord.MessageButton()
          .setCustomId("icebox2")
          .setStyle("PRIMARY")
          .setLabel("アイスボックス")
        await message.channel.send({
          content: "チーム2はアイスボックスをBANしました"
        });
        const split2 = new Discord.MessageButton()
          .setCustomId("split2")
          .setStyle("PRIMARY")
          .setLabel("スプリット")
        await message.channel.send({
          content: "チーム2はスプリットをBANしました"
        });
        const bind2 = new Discord.MessageButton()
          .setCustomId("bind2")
          .setStyle("PRIMARY")
          .setLabel("バインド")
        await message.channel.send({
          content: "チーム2はバインドをBANしました"
        });
        const fracture2 = new Discord.MessageButton()
          .setCustomId("fracture2")
          .setStyle("PRIMARY")
          .setLabel("フラクチャー")
        await message.channel.send({
          content: "チーム2はフラクチャーをBANしました"
        });
        const breeze2 = new Discord.MessageButton()
          .setCustomId("breeze2")
          .setStyle("PRIMARY")
          .setLabel("ブリーズ")
        await message.channel.send({
          content: "チーム2はブリーズをBANしました"
        });
        const haven2 = new Discord.MessageButton()
          .setCustomId("haven2")
          .setStyle("PRIMARY")
          .setLabel("ヘイヴン")
        await message.channel.send({
          content: "チーム2はヘイヴンをBANしました"
        });
        const pearl2 = new Discord.MessageButton().setCustomId("pearl2").setStyle("PRIMARY").setLabel("パール");
        await message.channel.send({
          content: "チーム2はパールをBANしました"
        });
        }
      }
      
      }
      break;
    }

    case "setting": {
      await interaction.deferReply({ ephemeral: true });
      const options = interaction.options;
      const channelA = options.getChannel("alpha");
      const channelB = options.getChannel("bravo");
      let channelHome = options.getChannel("home");
      const notVCs = [channelA, channelB].filter(ch => ch.type !== "GUILD_VOICE");
      if (notVCs.length) {
        const content = `エラー\n${notVCs.join("と")}がVCではありません`;
        await interaction.followUp(content);
        return;
      }
      channelHome = channelHome?.type === "GUILD_VOICE" ? channelHome : channelA;
      const channels = {
        channelA: channelA.id,
        channelB: channelB.id,
        channelHome: channelHome.id
      };
      guilds.set(key, channels);
      setCommand(client, 1, key);
      const content = `以下の内容で設定しました\n\nチーム1: ${channelA}\nチーム2: ${channelB}\n集合先 : ${channelHome}`;
      await interaction.followUp(content);
      break;
    }

    case "team": {
      if (!guilds.has(key)) return;
      await interaction.deferReply({ ephemeral: false });
      const room = interaction?.member?.voice?.channel;
      if (!room) {
        await interaction.followUp("VCに参加中のみ使用可能です");
        return;
      };
      const botMessage = await interaction.followUp("準備中…");
      async function team(int) {
        let players = room.members.filter(member => !member.user.bot);
        const division = 2;
        const userLimit = 5;
        const isOver = division * userLimit < players.size;
        const number = isOver ? Math.ceil(players.size / division) : userLimit;
        let under = division * number - players.size;
        const teams = new Array(division).fill(null).map((_, index) => {
          const handicap = Math.ceil(under / (division - index));
          under -= handicap;
          const num = number - handicap;
          const rands = players.random(num);
          players.sweep(p => rands.includes(p));
          return rands;
        });
        const content = teams.reduce((accumulator, members, index) => {
          return accumulator + `チーム${index + 1}\n` + members.reduce((acc, mem) => {
            return acc + `${mem}\n`;
          }, "") + "\n";
        }, "");
        const cancelButton = new Discord.MessageButton().setCustomId("cancel").setStyle("DANGER").setLabel("キャンセル");
        const moveButton = new Discord.MessageButton().setCustomId("move").setStyle("SUCCESS").setLabel("移動");
        const againButton = new Discord.MessageButton().setCustomId("again").setStyle("PRIMARY").setLabel("再抽選");
        const components = [new Discord.MessageActionRow().addComponents(cancelButton).addComponents(moveButton).addComponents(againButton)];
        int ? await int.update({ content, components }) : await interaction.editReply({ content, components });
        const filter = i => ["cancel", "move", "again"].includes(i.customId);
        const res = await botMessage.awaitMessageComponent({ filter, time }).catch(() => { });
        if (!res) return;
        switch (res.customId) {
          case "cancel": {
            components[0].components.forEach(c => c.setDisabled());
            await res.update({ content, components });
            break;
          }
          case "move": {
            components[0].components.forEach(c => c.setDisabled());
            await res.update({ content, components });
            const channels = guilds.get(key);
            const teamVCs = [channels.channelA, channels.channelB];
            teams.forEach((members, index) => {
              members.forEach(member => {
                if (!member?.voice?.channel) return;
                member.voice.setChannel(teamVCs[index]);
              });
            });
            break;
          }
          case "again": {
            await team(res);
            break;
          }
        }
      }
      await team();
      break;
    }

    case "call": {
      if (!guilds.has(key)) return;
      await interaction.deferReply({ ephemeral: false });
      const cache = interaction.guild.channels.cache;
      const channels = guilds.get(key);
      const teamVCs = [channels.channelA, channels.channelB];
      await interaction.followUp("集合させています");
      for (const vcId of teamVCs) {
        const vc = cache.get(vcId)
        for (const member of vc.members.values()) {
          if (!member?.voice?.channel) return;
          await member.voice.setChannel(channels.channelHome);
        }
      }
      await interaction.editReply("集合させました");
      break;
    }

  }
});

client.login(config.bot.token);