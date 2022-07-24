/*CMD
  command: /onWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
var but=[[{title:"🔰 Use Me",url:"https://t.me/"+bot.name+"?start"}]]
Bot.sendInlineKeyboard(but,"😜 To Use Me\nMessage Me In Private [ Click On 🔰 Use Me ]",{is_reply:true})
return }

if(!content){ return }
let id = user.telegramid
let wallet = User.getProperty("wallet")
if(!wallet){
Bot.sendMessage("First Generate Your Deposit Address..",{is_reply:true})
return }
Bot.sendMessage(content)
