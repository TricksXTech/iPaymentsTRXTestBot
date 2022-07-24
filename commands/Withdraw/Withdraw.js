/*CMD
  command: Withdraw
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

if(!params){
Bot.sendMessage("Use : `Withdraw 1 T0yh.....yu89`",{is_reply:true})
return }
let rec = params.split(" ")
let amo =  rec[0]
let address = rec[1]
if(!amo||!address){
Bot.sendMessage("Use : `Withdraw 1 T0yh.....yu89`",{is_reply:true})
return }
let id = user.telegramid
let wallet = User.getProperty("wallet")
if(!wallet){
Bot.sendMessage("First Generate Your Deposit Address..",{is_reply:true})
return }
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
if(amo<1.99){
Bot.sendMessage("*Amount Must Be Greater Than 1.99*", {
    is_reply: true
  })
return
}
if(address.length>30&&address.length<45){
Bot.sendMessage("*Wrong TRX Address*", {
    is_reply: true
  })
return
}
let data = Bot.getProperty(""+id+"Data")
let pkey = data.prkey
HTTP.get({
url:"https://txt.i-payments.site/tron/send/?pkey="+pkey+"&amo="+amo+"&to="+address+"",
success:"/onWithdraw"
})

