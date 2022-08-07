# discord-valorant-custom-bot

VALORANTカスタム用のDiscord Bot


# 使い方

Botを [ここ](https://discord.com/api/oauth2/authorize?client_id=861967109985927208&permissions=16777216&scope=bot%20applications.commands) から使用するサーバーへ招待

チャットで `/help` と送信することで詳しい使い方を見ることができます。


# 機能

* チーム分け (自動でそれぞれのVCに移動)
* 集合
* マップの抽選


# 自分で動かしたい人

## 動作環境

* Node.js 16.6.0 以上


## インストール

```bash
git clone https://github.com/secchanu/discord-valorant-custom-bot.git

```

`default.ini`をコピーして`config.ini`を作成

```ini:config.ini
[bot]
token = ここにBotのトークンを追加する

[data]
~
```

```bash
cd discord-valorant-custom-bot
npm i
npm run setup
```

Discordの仕様上、コマンドの反映まで1時間程度かかります

## 動かし方

```bash
npm start
```


## メモ

マップは`config.ini`を参照しています

~~書き変えれば他のゲームにも使える~~

何かあれば [@secchanu](https://twitter.com/secchanu) まで