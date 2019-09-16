const { Pool, Client } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5433
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) throw err;
    console.log(res)
    pool.end()
})

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5433
})

client.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    afterConnection();
})


function afterConnection() {
    client.query("SELECT * FROM booksRead", function(err, res) {
      if (err) throw err;
      console.log(res);
      client.end();
    });
  }
// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

// client
//   .query('SELECT NOW() as now')
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))

// client.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(res.rows)
//     }
// })

// function selectAll() {
//     client.query('SELECT * FROM booksRead', function(err, res) {
//         if (err) throw err
//         console.log(res)
//         client.end()
//     })
// }

// selectAll();