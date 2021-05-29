const ms = require('ms');

module.exports = {
    name:'mute',
    level:3,
    description:" a command which discornects members form a sever. can be used a punishment for things like spaming or puting inaporiot messages on sever. ",
    execute(client, message, args, cmd, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cashe.find(role => role.name === 'member')
            let muteRole = message.guild.roles.cashe.find(role => role.name === 'mute')

            let memberTarget = message.guild.cashe.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id)
                memberTarget.roles.add(muteRole.id)
                message.channel.send(`<@${memberTarget.user.id}> has been muted`)
                return
            }

            memberTarget.roles.remove(mainRole.id)
            memberTarget.roles.add(muteRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)

        setTimeout(function(){
            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
        }, ms(args[1]));

        }else {
            message.channel.send("User not detected");
        }
    }
}