const ms = require("ms")
const { getAllBookmarks } = require("../util/bookmark")

module.exports = {
    name:'goto',
    description:"a command which creates a message Makrker",
    level:3,
    async execute(client, message, args, cmd, Discord){
        const bookmarks = await getAllBookmarks(message.author.id);
        const bookmark = bookmarks.find((bookmark, i) => 
            bookmark.name == args[0] || i + 1 == args[0]
        ) 
        if(!bookmark){
            message.lineReply('these are the makrs your looking for')
            return
        }
        const embed = await message.channel.messages.fetch(bookmark.embedId) 
        if(!embed){
            message.lineReply("cant find that bookmark")
        }
        embed.lineReply("here it is")
    }
}