var assert = require('chai').assert;
var expect = require('chai').expect;

describe('load books function', function () {
    it('should return an array of book objects', function () {
        const books =  [{ id: 1,
            title: 'Heavy',
            author: 'Kiese Laymon',
            datefinished: '2019-01-21',
            pages: 256,
            rating: 5 },
          { id: 2,
            title: 'Boy Swallows Universe',
            author: 'Trent Dalton',
            datefinished: '2019-04-27',
            pages: 464,
            rating: 5 }]         

        assert.typeOf(books, 'array', 'We have an array')
    })
}) 

describe('add books function', function () {
    it('should contain a value for each column', function () {
        const keysObject = 
            {   id: 3,
                title: 'The Buried',
                author: 'Peter Hessler',
                dateFinished: '2019-05-22T',
                pages: 480,
                rating: 5 
            }

    assert.hasAllKeys(keysObject, ['id', 'title', 'author', 'dateFinished', 'pages', 'rating'])
    })
})

describe('update ratings function', function () {
    it('should have a new rating that is different from the current rating', function () {

    })
})