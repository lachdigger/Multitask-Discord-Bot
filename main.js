const Discord = require('discord.js');
//const { execute } = require('./advanced commands/ping');
require("discord-reply")
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});


const  fs = require('fs');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


 ['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


/*const commandFiles = fs.readdirSync('./advanced commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./advanced commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("personal bot is currently online");
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole)
    guildMember.guild.channels.cache.get('828944315124416512').permissionsLocked(`Welcome <@${guildMember.user.id}>, to this sever`)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args); 
    } else if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if(command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === "commands"){
        client.commands.get('commands').execute(message, args, Discord);
    } else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);

    }
});*/

// end line
client.login('ODI3NDQwMzE0MjM4NzYzMDA4.YGbD2A.APACOEi4JB9E_rlbgsxLnC4ZrPw');