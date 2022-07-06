const language = require('../language')

const button = {
    setCommand(lan){
        console.log(language.eq.Audit)
        return {

            reply_markup: JSON.stringify({
                "keyboard": [
                    language[lan].command.faq,
                    language[lan].command.connect,
                    language[lan].command.contract,
                    language[lan].command.language,
                    language[lan].command.whitpaper,
                    language.eq.Audit,
                    language.eq.DappRadar,
                    language.eq.Telegram,
                    language.eq.Chat,
                    language.eq.Twiter,
                    language.eq.Youtoobe,
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