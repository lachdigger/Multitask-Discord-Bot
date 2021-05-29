const util = require("minecraft-server-util");

module.exports = {
    name:'mcserver',
    aliases:['mc', 'mccheck', 'minecraft'],
    cooldown:50,
    description:'get info about minecraft server.',
    execute(client, message, args, cmd, Discord){
        if(!args[0]) return message.channel.send('Please enetr a minecraft sever ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port.');

    util.status(args[0], {port: parseInt(args[1])}).then((response) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version} 
                )
            .setFooter('Mc server util by personal bot');
                
        message.channel.send(embed);
    })
        .catch((error) => {
            message.channel.send("There was an error finding this server");
            throw error;
        });
    }

}