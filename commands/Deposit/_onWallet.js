/*CMD
  command: /onWallet
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

if(!content){ return }
var user_data = JSON.parse(content)
var address = user_data.Address
var prkey = user_data.PrivateKey
var pukey = user_data.PublicKey
var user_data_set = {
address:address,
prkey:prkey,
pukey:pukey
}
Bot.setProperty(""+user.telegramid+"Data",user_data_set)
User.setProperty("wallet",address,"string")
Bot.sendMessage("TRX Deposit Address\n\n-> : `"+address+"`\n\nMinimum Deposit 1.01 TRX",{is_reply:true})
