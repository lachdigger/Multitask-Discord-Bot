module.exports = {
    name:'rules',
    description:"a command which exsplains rules",
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('these are the rules')
        .addFields(
            {name:'Rule 1', value:'dont Ddos'},
            {name:'Rule 2', value:'dont do dumb stuff'},
            {name:'Rule 3', value:'no mean comments'},
            {name:'Rule 4', value:'no hacking'}
        )
        .setFooter('be sure to read rules in rules channel.');
        
        message.channel.send(newEmbed);
    }
}