'use strict'

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    dabatase: 'mydb'
});

connection.connect(function(err) {
    if (err)
        throw err;
    console.log("Connected to db");
});

connection.changeUser({database: 'mydb'}, (err) => {
    if (err) {
        console.log("Error in changing database");
        return
    }
    console.log("Database changed successfully");
});

module.exports = connection;
