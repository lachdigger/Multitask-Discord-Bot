module.exports = {
    name:'commands',
    description:"a command which gives a list of commands",
    level:6,
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setDescription('this a bot command list')
        .addFields(
            {name:'command 1', value:'-ban'},
            {name:'command 2', value:'-kick'},
            {name:'command 3', value:'-mute'},
            {name:'command 4', value:'-ping'},
            {name:'command 5', value:'-rules'},
            {name:'command 6', value:'-unmute'},
            {name:'command 7', value:'-commands'},
            {name:'command 8', value:'-clear'}

        )
        message.channel.send(newEmbed);
    }
}