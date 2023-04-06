// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    database: 'websitenodejs'
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function (err, results, fields) {
//         console.log('>>>Check mysql')
//         let rows = results.map((row) => { return row.id });
//         console.log(results[0]); // results contains rows returned by server
//         console.log(results); // results contains rows returned by server
//     }
// );

export default connection;