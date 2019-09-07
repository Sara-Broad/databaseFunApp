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

INSERT INTO booksRead VALUES ('Heavy', 'Kiese Laymon', '2019-01-21' );

INSERT INTO booksRead VALUES ('Boy Swallows Universe', 'Trent Dalton', '2019-04-27', 464, 5);

INSERT INTO booksRead VALUES ('The Buried', 'Peter Hessler');

INSERT INTO booksRead VALUES ('The Body Papers', 'Grace Talusan');

INSERT INTO booksRead VALUES ('Born a Crime', 'Trevor Noah');

INSERT INTO booksRead VALUES ('Small Fry', 'Lisa Jobs');

INSERT INTO booksRead VALUES ('Boom Town', 'Sam Anderson');

INSERT INTO booksRead VALUES ('High Risers', 'Ben Austen');

INSERT INTO booksRead VALUES ('The Hearts Invisble Furies', 'John Boyne');

INSERT INTO booksRead VALUES ('Sing, Unburied, Sing', 'Jesmyn Ward');