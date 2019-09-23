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
        // loadOptions(res.rows);
        // client.end();
        console.log(res.rows)
        changeRating();

    });
}

// function loadOptions(books) {
//     inquirer
//      .prompt([{
//             type: 'list',
//             name: 'choice',
//             message: 'What do you want to do?',
//             choices: [
//                 'View the book list',
//                 'View books from highest to lowest rating',
//                 'View books from lowest to highest rating',
//                 'Change book rating',
//                 'Remove a book',
//                 'Add a new book'
//             ]
//         }])
//         .then(answers => {
//             // console.log(JSON.stringify(answers, null, ' '))
//             switch (answers.choice) {
//                 case 'View the book list':
//                     console.log(books)
//                     loadBooks()
//                     break;
//                 case 'View books from highest to lowest rating':
//                     // do something
//                     break;
//                 case 'View books from lowest to highest rating':
//                     // do something
//                     break;
//                 case 'Change book rating':
//                     // do something
//                     break;
//                 case 'Remove a book':
//                     // do something
//                     break;
//                 case 'Add a new book':
//                     // do something 
//                     break;
//                 default:
//                     text = "Happy reading!";
//             }
//         })
//     }

function highestToLowest() {
    client.query("SELECT title, rating FROM booksRead ORDER BY rating DESC", function (err, res) {
        if (err) throw err;
        console.log('Highest to lowest rated books:', res.rows)
    })
}

function lowestToHighest() {
    client.query("SELECT title, rating FROM booksRead ORDER BY rating ASC", function (err, res) {
        if (err) throw err;
        console.log('Lowest to highest rated books:', res.rows)
    })
}


function changeRating() {
    inquirer
      .prompt([
        //   {
        //       type: "input",
        //       name: "title",
        //       message: "Title for rating change?"
        //   },
          {
              type: "input",
              name: "rating",
              message: "What is the new rating?",
            //   validate: function(val) {
            //       return val > 0 && val < 5
            //   }
          }
      ]).then(function(val) {
        console.log('val', val)
        client.query(
            "UPDATE booksRead SET rating = ? WHERE title = 'The Shining'", function (err) {
            if (err) throw err;
            // check to see if the rating is the same
            // console.log('val title', val.title)
            // console.log('val rating', val.rating)
        })
      }) 
}

// function changeRating() {
//     client.query("UPDATE booksRead SET rating = 1 WHERE title = 'The Shining'", function (err, res) {
//         if (err) throw err;
//         console.log(res)
//     })
// }

function removeBook() {

}

function addBook() {
    
}

// add a book - do you have all the info you need or do you want to query the API?
// other books by author? query a book api? (different table)