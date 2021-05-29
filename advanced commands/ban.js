module.exports ={
    name:'ban',
    description: "this command can ban a member",
    level:2,
    execute(client, message, args, cmd, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send("you can not ban this member");
        }

    }
}