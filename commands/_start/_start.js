/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: /start
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
var but=[[{title:"🔰 Use Me",url:"https://t.me/"+bot.name+"?start"}]]
Bot.sendInlineKeyboard(but,"😜 To Use Me\nMessage Me In Private [ Click On 🔰 Use Me ]",{is_reply:true})
return }

var keys = "Balance\nDeposit,Withdraw"
Bot.sendKeyboard(keys,"Welcome To @"+bot.name+",\nIt's Test Bot",{is_reply:true})
