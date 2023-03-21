const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mario_kart',
    password: ''
});

module.exports = pool.promise();