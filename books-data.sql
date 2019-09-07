DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

USE books_db;

CREATE TABLE booksRead (
    title varchar(80),
    author varchar(80),
    dateFinished date,
    pages int
    rating int   
);

INSERT INTO booksRead VALUES ('Heavy', 'Kiese Laymon', '2019-01-21', 256, 5);

INSERT INTO booksRead VALUES ('Boy Swallows Universe', 'Trent Dalton', '2019-04-27', 464, 5);

INSERT INTO booksRead VALUES ('The Buried', 'Peter Hessler', 2019-05-22, 480, 5);

INSERT INTO booksRead VALUES ('The Body Papers', 'Grace Talusan', 2019-07-17, 256, 5);

INSERT INTO booksRead VALUES ('Born a Crime', 'Trevor Noah', 2019-08-17, 304, 5);

INSERT INTO booksRead VALUES ('Small Fry', 'Lisa Jobs', 2018-11-18, 383, 4);

INSERT INTO booksRead VALUES ('Boom Town', 'Sam Anderson', 09-22-2018, 448, 5);

INSERT INTO booksRead VALUES ('Flights', 'Olga Tokarczuk', 2018-10-18, 403, 3);

INSERT INTO booksRead VALUES ('The Hearts Invisble Furies', 'John Boyne', 2019-08-18, 582);

INSERT INTO booksRead VALUES ('The Great Believers', 'Rebecca Mekkai', 01-01-2019, 421, 3);