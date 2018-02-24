const express = require('express');
const app = express()

const PORT = 3000;

app.get('/',(req,res) => res.send("Page server from /"))

app.listen(PORT,() => console.log(`Server is Listening on Port ${PORT}`))