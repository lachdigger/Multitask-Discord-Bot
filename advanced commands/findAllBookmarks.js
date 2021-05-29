const {getAllBookmarks} = require("../util/bookmark")
module.exports = {
    name:'bookmarks',
    description:"a command which list all your book marks",
    level:3,
    async execute(client, message, args, cmd, Discord){
        
        const bookmarks = await getAllBookmarks(message.author.id);
        message.lineReply(`you have ${bookmarks.length} bookmarks.`);
    
        let messageNames = ``;
        for(let bookmark of bookmarks){
            messageNames += bookmark.name + "\n"
            //Dabs*                          
        }
        message.channel.send(`${messageNames}`)
     }

}
