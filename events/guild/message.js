const { cooldown } = require("../../advanced commands/mcserver");
const { permissionLevel } = require("../../util/role");

const cooldowns =  new Map();

module.exports = (Discord, client, message) => {
    const prefix = "-";

    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || 
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    console.log("cmd", cmd)
    if(!command){
        return
    }

    const roles = message.member.roles.cache.array();
    const level = permissionLevel(roles);
    const cmdLevel = command.level || level;
    if(level > cmdLevel){
        message.reply("you cannot use this command as you are too low a rank.")
        return 

    }
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_Time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_Time < expiration_time){
            const time_left = (expiration_time - current_Time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
        }
    }

    time_stamps.set(message.author.id, current_Time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


    
    
console.log("might be executed", cmd)
    try{
        command.execute(client, message, args, cmd, Discord);

    } catch (err){
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }

 }



