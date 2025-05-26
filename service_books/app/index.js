const express = require('express')
const bodyParser = require("body-parser")
const logger   = require('./middleware/logger')
const error404 = require('./middleware/err-404')

const booksRouter = require('./routes/books')
const indexRouter = require('./routes/index')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(logger)
app.use('/', indexRouter)
app.use('/book', booksRouter)
app.use(error404)

const PORT = process.env.PORT || 3000
app.listen(PORT)