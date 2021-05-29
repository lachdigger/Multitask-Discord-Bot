module.exports = {
    name:'reactionrole',
    level:1,
    description:'Sets up reaction role message',
    async execute(client, message, args, cmd, Discord){
        const channel = '829122304600178698';
        const AdminInTrainingRole = message.guild.roles.cache.find(role => role.name === "admin in training")
        const ModInTrainingRole = message.guild.roles.cache.find(role => role.name === "mod in training")

        const ModInTrainingRoleEmoji = '🟦';
        const AdminInTrainingRoleEmoji = '🟨';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a team to play on!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${AdminInTrainingRoleEmoji} enroll for admin\n`
            + `${ModInTrainingRoleEmoji} enroll for mod`);

        
        let MessageEmbed = await message.channel.send(embed);
        message.react(ModInTrainingRoleEmoji);
        message.react(AdminInTrainingRoleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === AdminInTrainingRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AdminInTrainingRole);
                }
                if(reaction.emoji.name === ModInTrainingRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ModInTrainingRole);
                }      
            } else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === AdminInTrainingRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AdminInTrainingRole);
                }
                if(reaction.emoji.name === ModInTrainingRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ModInTrainingRole);
                }      
            } else {
                return;
            }
        });

    }
}