DROP DATABASE reviews_db;
DROP TABLE IF EXISTS reviews;



CREATE DATABASE reviews_db;
\c reviews_db;

CREATE TABLE reviews (
     id SERIAL ,
     sku TEXT,
     name VARCHAR(25),
     title VARCHAR(50),
     rating SMALLINT,
     review_body VARCHAR(500),
     recommend BOOLEAN,
     value SMALLINT,
     quality SMALLINT,
     easeOfUse SMALLINT,
     image TEXT,
     cons VARCHAR(15),
     pros VARCHAR(15) 
);
 