const express = require('express')
const logger   = require('./middleware/logger')
const error404 = require('./middleware/err-404')
const booksRouter = require('./routes/books')

const app = express()
app.use(express.json())
app.use(logger)
app.use('/', booksRouter)
app.use(error404)

const PORT = process.env.PORT || 3000
app.listen(PORT)