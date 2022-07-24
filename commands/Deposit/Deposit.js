/*CMD
  command: Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
var but=[[{title:"🔰 Use Me",url:"https://t.me/"+bot.name+"?start"}]]
Bot.sendInlineKeyboard(but,"😜 To Use Me\nMessage Me In Private [ Click On 🔰 Use Me ]",{is_reply:true})
return }

let id = user.telegramid
let wallet = User.getProperty("wallet")
if(!wallet){
Bot.sendMessage("Creating Deposit Address...",{is_reply:true})
HTTP.get({
    url:"https://txt.i-payments.site/tron/build/index.php",
    success:'/onWallet'
  })
return }
Bot.sendMessage("TRX Deposit Address\n\n-> : `"+wallet+"`\n\nMinimum Deposit 1.01 TRX",{is_reply:true})

