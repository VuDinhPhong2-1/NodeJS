// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2/promise';
// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    database: 'websitenodejs'
});


export default pool;