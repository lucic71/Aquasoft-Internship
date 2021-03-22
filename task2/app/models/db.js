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

connection.changeUser({database: 'AquasoftInternship'}, (err) => {
    if (err) {
        console.log("Error in switching to AquasoftInternship");
        return
    }

    console.log("Switched to AquasoftInternship");
});

module.exports = connection;
