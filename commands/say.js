const { MessageEmbed, User } = require("discord.js");

module.exports.run = async(client, message,args)=>{

  message.delete({timeout: 0})
  let msg = args.join(" ");

  if (msg){
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${msg}`)
    message.channel.send({ embeds: [embed] });
    message.channel.send(`*Mensagem por: ${message.author}*`)
  }
  else{
      message.channel.send("Forneça uma mensagem para que eu repita.").then(deletar =>{
      setTimeout(function(){
        deletar.delete()
      },5000)
    })
  }
  
};
