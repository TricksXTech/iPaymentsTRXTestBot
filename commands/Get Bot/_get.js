/*CMD
  command: /get
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Get Bot
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
Bot.sendMessage("Use : `/get email`",{is_reply:true})
return }
let rec = params.split(" ")
let to = rec[0]
let id = 705557
BBAdmin.installBot({
 email:to,
 bot_id:id
})

Bot.sendMessage("Bot Sent To : `"+to+"`",{is_reply:true})
