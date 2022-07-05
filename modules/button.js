const language = require('../language')

const button = {
    setCommand(lan){
        return {
            reply_markup: JSON.stringify({
                "keyboard": [
                    language[lan].command.faq,
                    language[lan].command.connect,
                    language[lan].command.contract,
                    language[lan].command.language,
                ]
            })
        }



    },
    getLanguage(){
        return {
            reply_markup: JSON.stringify({
                inline_keyboard: language.language
            })
        }
    },
    getFaq(lan){
        return{
            reply_markup: JSON.stringify({
                inline_keyboard: language[lan].button.faq
            })
        }
    }
}

module.exports = button;