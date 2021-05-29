module.exports = {
    name:'unmute',
    level:3,
    description:" a command which discornects members form a sever. can be used a punishment for things like spaming or puting inaporiot messages on sever. ",
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cashe.find(role => role.name === 'member')
            let muteRole = message.guild.roles.cashe.find(role => role.name === 'mute')

            let memberTarget = message.guild.cashe.get(target.id);

            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been muted`)

        }else {
            message.channel.send("User not detected there for was not unmuted");
        }
    }
}