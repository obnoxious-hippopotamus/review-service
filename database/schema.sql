DROP DATABASE IF EXISTS amazon_reviews;

CREATE DATABASE IF NOT EXISTS amazon_reviews;

USE amazon_reviews;

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    movie_title varchar(100),
    author VARCHAR(100) DEFAULT "Anonymous",
    content VARCHAR(5000) DEFAULT "N/A",
    image_url VARCHAR(500),
    rating DECIMAL(4,2)
);