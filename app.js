require("dotenv").config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
var quest = require('./Questions/question');

const bot = new TelegramBot(token, { polling: true });



var NewQuestion = {};


function question(index) {


  return quest[index];
}
let QuestionNo = 0;

bot.onText(/\/start/, async (msg) => {


  var chatId = msg.chat.id;
  var Text = msg.text;
  await bot.sendMessage(chatId, `Welcome❤ to ${msg.from.first_name} our Quiz Bot`);



  let data = question(QuestionNo);

  const TimerObj = setTimeout(() => {

    bot.sendMessage(chatId, `Bot Has Started`);

    bot.sendMessage(chatId, data.question, {
      reply_markup: {
        keyboard:
          [[data.options[0]], [data.options[1]], [data.options[2]], [data.options[3]]]
      }

    })
  }, 1200);
})

let correct = 0;
let incorrect = 0;
let startController = 0;
bot.on('message', async (msg) => {


  var Text = msg.text;
  var chatId = msg.chat.id;
  if (Text.toLowerCase() === '/start' || Text.toLowerCase() === "/startquiz" || startController > 0) {

    startController++;
    if (Text !== '/startQuiz' && QuestionNo !== quest.length) {

      let data = question(QuestionNo);

      if (Text == data.answer) {
        const reply = {
          reply_to_message_id: msg.message_id,
          reply_markup: JSON.stringify({

          })
        };
        bot.sendMessage(chatId, ` Correct`, reply)
        NewQuestion['question'] = data;
        QuestionNo++;
        correct++;

      }

      else {
        if (Text.includes('/')) {

          bot.sendMessage(chatId, "Invalid Input")

        } else {
          const reply = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({

            })
          };
          bot.sendMessage(chatId, `wrong`, reply)

          NewQuestion['question'] = data;
          incorrect++;
          QuestionNo++;
        }

      } if (QuestionNo === quest.length) {
        quest.push(NewQuestion['question'])
        const TimerObj = setTimeout(() => {
          bot.sendMessage(chatId, `Game has finished, \nyour Score:${correct}\nincorrect:${incorrect}\nif you want to play again click here /startQuiz`)
          QuestionNo = 0
          startController = 0
        }, 1200)
      } else {
        let data = question(QuestionNo);
        const TimerObj = setTimeout(() => {
          bot.sendMessage(chatId, data.question, {
            reply_markup: {
              keyboard:
                [[data.options[0]], [data.options[1]], [data.options[2]], [data.options[3]]]
            }

          })
        }, 1200);
        console.log(NewQuestion)

      }


    }


  }

  else {
    bot.sendMessage(chatId, `please Enter Valid Input \nif you want to play again click here /startQuiz`)

  }


})








