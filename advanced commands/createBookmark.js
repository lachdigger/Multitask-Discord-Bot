const {makeBookmark, getAllBookmarks} = require("../util/bookmark")
module.exports = {
    name:'bookmark',
    description:"a command which creates a message Makrker",
    level:3,
    async execute(client, message, args, cmd, Discord){
        //makeBookmark(message, Discord);
        let bookmarkName = args[0];
        if(!bookmarkName){
           const messageIds = await getAllBookmarks(message.author.id);
            bookmarkName = `bookmark-${messageIds.length + 1}`

        }
        await makeBookmark(bookmarkName, message, Discord)
        


    

    }

}
