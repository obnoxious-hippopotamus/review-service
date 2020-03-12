CREATE DATABASE IF NOT EXISTS amazon_reviews;

USE amazon_reviews;

-- CREATE TABLE movies (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     movie_id INT
-- );

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    author VARCHAR(100) DEFAULT "Anonymous",
    content VARCHAR(500) DEFAULT "N/A",
    image_url VARCHAR(500),
    rating FLOAT()
);