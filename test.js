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
        // assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz ']);
        assert.hasAllKeys(books, ['id', 'title', 'author', 'dateFinished', 'pages', 'rating'])
    })
}) 

describe('add books function', function () {
    it('should be added with values for all columns', function () {

    })
})