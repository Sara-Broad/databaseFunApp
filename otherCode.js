function removeBook(id) {
    client.query("DELETE FROM booksreads WHERE id=$1",
       [id],
       function (err, res) {
       console.log('Deleted')
       }
   )
}

// add a book - do you have all the info you need or do you want to query the API?
// other books by author? query a book api? (different table)