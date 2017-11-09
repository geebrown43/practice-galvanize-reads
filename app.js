const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/query')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const books = require('./routes/books')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use('/', routes)
app.use('/books', books)

app.listen(port ,() => {
    console.log("Listening on port:" + port)
})
