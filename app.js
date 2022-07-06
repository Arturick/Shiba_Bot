const TelegramApi = require('node-telegram-bot-api')
const config = require('./config')
const button = require('./modules/button')
const language = require('./language')
const token = config.token
const bot = new TelegramApi(token, {polling : true, parse_mode: 'Html'})
const fs = require("fs");
const user_lan = {

}




//

// func



//


let count = Number(fs.readFileSync("./sub", "utf8"));

const start = () => {


    bot.on('message', async  msg =>{

        const text = msg.text;
        const chatId = msg.chat.id;

        if(!(msg.from.id in user_lan)){
            user_lan[msg.from.id] = 'en'
            count+=1
            fs.writeFileSync("sub", String(count))

        }
        console.log(user_lan[msg.from.id])
        if(text == '!countSiba_Bot45363166hahnt'){
            await bot.sendMessage(chatId,count)
        }
        if( text == language[user_lan[chatId]].command.whitpaper[0].text){
            await bot.sendMessage(chatId,language.wp[user_lan[chatId]])
        }
        if(text == '/start'){

            await bot.sendMessage(chatId,'!HELLO!',button.setCommand(user_lan[chatId]) )
        }
        if(text == language[user_lan[chatId]].command.connect[0].text){
            await bot.sendMessage(chatId,language.text.answer.connect[user_lan[chatId]])
        }
        if (text == language[user_lan[chatId]].command.contract[0].text){
            await bot.sendMessage(chatId,language.text.answer.getContract[user_lan[chatId]])
        }
        if (text == language[user_lan[chatId]].command.language[0].text){
            await bot.sendMessage(chatId,language.text.setLanguage[user_lan[chatId]], button.getLanguage())
        }
        if(text == language[user_lan[chatId]].command.faq[0].text){
            await bot.sendMessage(chatId,'\/', button.getFaq(user_lan[msg.from.id]))
        }

        if(language.eq[text.split(' ')[1]]){
            await bot.sendMessage(chatId, language.eq.answer[text.split(' ')[1]])
        }


    })

    bot.on('callback_query', async msg => {

        let data = msg.data
        let chatId = msg.message.chat.id

        console.log(user_lan[chatId])
        if(Number(data)){
            await bot.sendMessage(chatId, language.faq[user_lan[chatId]][data])
        } else {
            user_lan[msg.from.id] = data
            await bot.sendMessage(chatId,language.text.answer.setLanguage[user_lan[chatId]],button.setCommand(data))
        }
        console.log(msg)


    })



}



start()