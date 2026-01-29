// bot.js
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error('Токен не найден в .env файле!');
}

const bot = new TelegramBot(token, { polling: true });

const greetings = [
  'Привет!',
  'Здравствуйте!',
  'Добрый день!'
];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  bot.sendMessage(chatId, randomGreeting);
});