const Keyv = require('keyv');
const { default: KeyvFile } = require('keyv-file');
const keyv = new Keyv( {
    store: new KeyvFile()
});


const makeBookmark = async (name, message, Discord) => {
    // MAKE EMBED
    const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setDescription(`this is bookmark "${name}"`);
    const embed = await message.channel.send(newEmbed);

    // GET EMBED ID NOW
    const embedId = embed.id;
    // GET AUTHOR ID
   const authorId = message.author.id
    // RECORD DAT BOOK MARK
    const bookmarks = await getAllBookmarks(authorId);
    await keyv.set(`bookmark-${authorId}`, JSON.stringify([...bookmarks, {
        embedId,
        name
    }]));
}
const removeBookmark = async (name, message, Discord) => {
    const bookmarks = await getAllBookmarks(message.author.id);
    const updatedBookmarks = []
    for(let book of bookmarks){
        if(book.name != name ){
            updatedBookmarks.push(bookmark)


        }
    }
    await keyv.set(`bookmark-${authorId}`, JSON.stringify(updatedBookmarks));


}
const getAllBookmarks = async (userId) => {
    let bookmarkString = await keyv.get(`bookmark-${userId}`)
    if(!bookmarkString){
        return []
    }
    return JSON.parse(bookmarkString) 
    


}


module.exports = {
    makeBookmark,
    getAllBookmarks
}