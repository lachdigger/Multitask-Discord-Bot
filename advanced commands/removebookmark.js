
const {removeBookmark} = require( "../util/bookmark")
module.exports = {
    name:'rmark',
    description:"removes one of your listed bookmarks",
    level:3,
     async execute(client, message, args, cmd, Discord){
      let bookmarkName = args[0];
      if(!bookmarkName){
         const messageIds = await getAllBookmarks(message.author.id);
          bookmarkName = `bookmark-${messageIds.length + 1}`

      }
      await removeBookmark(bookmarkName, message, Discord)
       
   }
}
