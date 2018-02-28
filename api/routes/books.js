const express = require('express');
const router = express.Router();

const book = require('../controller/books')

router.use((req,res,next) => console.log(Date.now()) || next());

router.post('/', book.populateDatabase)

router.get('/', book.getAllBooks)

router.get('/search', book.search)


module.exports = router;