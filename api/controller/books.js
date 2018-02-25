const mysql = require('mysql');
const book = require('../../books.json')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookapp'
});

exports.populateDatabase =(req,res) => {
    let temp = Object.keys(book).map(key => [book[key].author.replace(/[^a-zA-Z ]/g, ""), book[key].title, book[key].country, book[key].year, book[key].language])
    let sql = `INSERT INTO book_info (title,author,country,year,language) VALUES ?`;
    connection.query(sql, [temp],(error, results, fields) => {
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
    connection.end();
}


exports.insertBookDetail = (req,res) => {
    let bookDetails = req.body;
    console.log(bookDetails)
    let sql = `select * from book_info`;
    connection.query(sql,(error, results, fields) => {
        connection.end();
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
}
