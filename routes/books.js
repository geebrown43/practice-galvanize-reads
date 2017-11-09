const express = require('express')
const router = express.Router();
const db = require('../db/query')

router.get('/books', (req, res) => {
    res.render('books')
})

module.exports = router