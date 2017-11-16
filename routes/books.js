const express = require('express')
const router = express.Router();
const db = require('../db/query')

router.get('/', (req, res) => {
    db.getAllBooks()
    .then(books => res.render('books', {
        books:books
    }))
})

router.get('/new', (req, res) => {
    res.render('new_book')
})

router.get('/delete/:id', (req, res) => {
    let id = req.params.id
    db.findBooktoDelete(id)
    .then(books => res.render('delete_book', {
        book: books[0]
    }))
})  

router.get('/edit/:id', (req, res) => {
    let id = req.params.id
    db.findBooktoEdit(id)
    .then(books => res.render('edit_book', {
        book: books[0]
    }))
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body
    db.updateBook(book, id)
    .then(() => {
        res.redirect('/books')
    })
})

router.post('/', (req, res) => {
    db.postNewBook(req.body)
    .then(data => res.redirect('/books'))
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    db.deleteBook(id)
    .then(() => res.redirect('/books'))
})

module.exports = router