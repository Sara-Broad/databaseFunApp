const {
    Pool,
    Client
} = require('pg')
const inquirer = require('inquirer')
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
    // console.log(res)
    pool.end()
})

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5433
})

client.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    loadBooks();
})


function loadBooks() {
    client.query("SELECT * FROM booksRead", function (err, res) {
        if (err) throw err;
        // console.log(res.rows);
        loadOptions(res);
        client.end();
    });
}

function loadOptions() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: [
                'View the book list',
                'View books from highest to lowest rating',
                'View books from lowest to highest rating',
                'Change book rating',
                'Remove a book',
                'Add a new book'
            ],
            filter: function (val) {
                return val.toLowerCase();
            }
        }])
        .then(answers => {
            console.log(JSON.stringify(answers, null, ' '))
        })
}

// other books by author? query a book api? (different table)