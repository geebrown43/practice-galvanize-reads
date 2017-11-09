const db = require('./connection')

getAllBooks = () => {
return db('books')
}

postNewBook = book => {
    return db('books').insert({
        title: book.title,
        genre: book.title,
        description: book.description,
        url: book.url
    })
}

findBooktoDelete = id => {
    return db('books').where('id', id)
}

deleteBook = id => {
    return db('books').where('id',id).del()
}
module.exports = {
    getAllBooks,
    postNewBook,
    findBooktoDelete,
    deleteBook
}