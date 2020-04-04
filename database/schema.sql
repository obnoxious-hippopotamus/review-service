USE heroku_92e8f94441a61b4;

--
--
-- for local development, uncomment the lines below and comment out the ones above --
--
--
-- DROP DATABASE IF EXISTS amazon_reviews;

-- CREATE DATABASE IF NOT EXISTS amazon_reviews;

-- USE amazon_reviews;

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    movie_title varchar(100),
    date_added varchar(30),
    helped INT,
    author VARCHAR(100) DEFAULT "Anonymous",
    content VARCHAR(5000) DEFAULT "N/A",
    image_url VARCHAR(500),
    rating DECIMAL(4,2)
);