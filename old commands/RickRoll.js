module.exports = {
    name:'RickRoll',
    descrption:"a command that provides the link to never gonna give you up",
    execute(client, message, args){

        let role = message.guild.roles.cache.find(r => r.name === "mod");

        if (message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You have the permission to kick members')
        } else {
            message.channel.send('you can not kick members')
        }

        if(message.member.roles.cache.some(r => r.name === 'mod')){
            message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

        }else{
            message.channel.send('you are to low rank to send this command, I have updated your rank now')
            message.member.roles.add(role).catch(console.error);
        }
    }
}