const { MessageEmbed, User } = require("discord.js");

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
       .setTitle("Help Commands")
       .setDescription("Sua aba de ajuda!")
       .setFields(
           {name: 'Say', value: 'Digite uma mensagem, para que eu possa repitir.'},
           {name: 'Ping', value: 'Veja o ping do servidor'},
           {name: 'help', value: 'use !! para me chamar'}, 
       )
       .setFooter("Pag:1/1")

    message.channel.send({ embeds: [embed] });
    message.delete()
};