const express = require('express');
const router = express.Router();

router.use((req,res,next) => console.log(Date.now()) || next());

router.get('/',(req,res) => res.send("Serving form books.js"))

module.exports = router;