const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const books = require('./api/routes/books')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/books', books)

app.get('/', (req, res) => res.send("Page server from /"))

module.exports = app;