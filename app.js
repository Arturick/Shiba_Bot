const TelegramApi = require('node-telegram-bot-api')
const config = require('./config')
const button = require('./modules/button')
const language = require('./language')

const token = config.token
const bot = new TelegramApi(token, {polling : true, parse_mode: 'Html'})
const user_lan = {

}




//

// func



//



const start = () => {


    bot.on('message', async  msg =>{

        const text = msg.text;
        const chatId = msg.chat.id;

        console.log(msg)

        if(text == '/start'){
            user_lan[msg.from.id] = 'en'
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

    })

    bot.on('callback_query', async msg => {

        let data = msg.data
        let chatId = msg.message.chat.id
        user_lan[msg.from.id] = data
        console.log(msg)
        await bot.sendMessage(chatId,language.text.answer.setLanguage[user_lan[chatId]],button.setCommand(data))

    })



}



start()