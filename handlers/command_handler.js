const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./advanced commands/').filter(file => file.endsWith('.js'));
    
    for(file of command_files){
        const command = require(`../advanced commands/${file}`);
        if(command.name){
            //console.log("registered", command.name)
            client.commands.set(command.name, command)
        } else {
            continue;
        }

    }
}