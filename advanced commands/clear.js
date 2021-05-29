const { Message } = require("discord.js");

module.exports = {
    name:'clear',
    level:3,
    description:'a command that clears pevouise messages',
    async execute(client, message, args, cmd, Discord){
        if(!args[0]) return message.reply('please specify how meny messages you want removed');
        if(isNaN(args[0])) return Message.reply('please enter a real number');

        if(args[0] > 100) return message.reply('to avoid the sever form crashing, you cannot delte more than 100 mmessages');
        if(args[0] < 1)return message.reply('you have to delete at least 1 message to run the command')

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}