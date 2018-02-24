const express = require('express');
const app = express()

const PORT = 3000;

const books = require('./api/routes/books')

app.use('/books', books)

app.get('/',(req,res) => res.send("Page server from /"))

app.listen(PORT,() => console.log(`Server is Listening on Port ${PORT}`))