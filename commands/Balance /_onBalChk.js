/*CMD
  command: /onBalChk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
var but=[[{title:"🔰 Use Me",url:"https://t.me/"+bot.name+"?start"}]]
Bot.sendInlineKeyboard(but,"😜 To Use Me\nMessage Me In Private [ Click On 🔰 Use Me ]",{is_reply:true})
return }

if(!content){ return }
var data = JSON.parse(content)
var stat = data.Status
if(stat=="Success"){
var val = data.Balance
var bal = parseFloat(val)
Bot.sendMessage("Balance : "+bal+" TRX",{is_reply:true})
}else{
var msg = data.Message
Bot.sendMessage(msg,{is_reply:true})
}
