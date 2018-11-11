const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const sql = require("better-sqlite3");
const client = new Discord.Client();
const Codes = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("Welcome To .. Royale ' ",{type: 'PLAYING'})

});

client.on('message',   edited =>{
    
  var  args = edited.content.split(" ").slice(2).join(" ")
  var men = edited.mentions.users.first()|| client.users.get(edited.content.split(' ')[1])
  var  mas = edited.author
                            if(edited.content.startsWith(prefix + 'sar7')) {
                            if(edited.channel.type === "dm"){
if(!args) return  edited.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  edited.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                    var currentTime = new Date(),
          Year = currentTime.getFullYear(),
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
   var editedyasmk = new Discord.RichEmbed()
   .setAuthor(edited.author.username , edited.author.avatarURL)
   .setThumbnail(men.avatarURL)
   .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
   .setTimestamp() 
   .setFooter(`- By , message.author.name .`)
   edited.channel.send(editedyasmk).then(message => {
message.react('✅').then(r=>{
message.react('❌').then(r=>{            
  var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === edited.author.id;    
  var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === edited.author.id;
  var kkk = message.createReactionCollector(kk, { time: 60000 });
  var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
        const embed = new Discord.RichEmbed()
             .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
             .setColor("RANDOM")
             .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                  .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                  .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
        client.users.get(men.id).sendEmbed(embed)
        edited.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
edited.delete();
})
nnn.on("collect", r => {
message.delete()
edited.reply("`تم الغاء الصراحة`")
edited.delete();
})
})
}) 
})
}
}
});

 client.login(process.env.BOT_TOKEN); 
