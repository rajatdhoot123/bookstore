const express = require('express');
const router = express.Router();

const book = require('../controller/books')

router.use((req,res,next) => console.log(Date.now()) || next());

router.post('/', book.populateDatabase)

router.get('/sort', book.getAllBooks)

router.get('/search', book.search)

router.delete('/delete', book.deleteBook)


module.exports = router;