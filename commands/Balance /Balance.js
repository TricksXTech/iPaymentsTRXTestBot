/*CMD
  command: Balance
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

let id = user.telegramid
let wallet = User.getProperty("wallet")
if(!wallet){
Bot.sendMessage("First Generate Your Deposit Address..",{is_reply:true})
return }
let data = Bot.getProperty(""+id+"Data")
let pkey = data.prkey
  HTTP.get({
    url: "https://txt.i-payments.site/tron/get/?pkey=" + pkey + "",
    success: "/onBalChk"
  })

