const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookapp'
});


exports.populateDatabase = (req,res) => {
    let booksData = req.body;
    let temp,sql;
    if(typeof booksData[0] == "object"){
        temp = Object.keys(booksData).map(key => [booksData[key].author.replace(/[^a-zA-Z ]/g, ""), booksData[key].title, booksData[key].country, booksData[key].year, booksData[key].language])
        sql = `INSERT INTO book_info (author,title,country,year,language) VALUES ?`;
    } else {
        temp = booksData;
        sql = `INSERT INTO book_info SET ?`;
    }
    connection.query(sql, [temp],(error, results, fields) => {
        console.log("query executed")
        //connection.end(err => (err) ? console.log("Error occurred",err) : console.log("Connection Ended"));
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
}


exports.getAllBooks = (req,res) => {
    let sql;
    sql =  `select * from book_info`
    if(req.query.order){
        sql = `select * from book_info order by title ${req.query.order}`;
    } 
    if (req.query.orderby && req.query.order) {
        sql = `select * from book_info order by ${req.query.orderby} ${req.query.order}`;
    }
    connection.query(sql,(error, results, fields) => {
        //connection.end();
        if (error) return res.json({error: error});
        return res.json({result: results});
    });
}

exports.search = (req,res) => {
    sql = `select * from book_info where ${req.query.key} LIKE '%${req.query.value}%'`
    connection.query(sql, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}

exports.deleteBook = (req,res) => {
    sql = `DELETE from book_info where ${req.query.key} = '${req.query.value}'`
    connection.query(sql, (error, results, fields) => {
        //connection.end();
        if (error) return res.json({ error: error });
        return res.json({ result: results });
    });
}