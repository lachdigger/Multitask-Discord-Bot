module.exports ={
    name:'kick',
    description: "this command can kick a member",
    level:3,
    execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send("you can not kick this member");
        }

    }
}