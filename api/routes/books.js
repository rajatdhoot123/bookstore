const express = require('express');
const router = express.Router();

const book = require('../controller/books')

router.use((req,res,next) => console.log(Date.now()) || next());

router.get('/', book.populateDatabase)

router.post('/', book.insertBookDetail)


module.exports = router;