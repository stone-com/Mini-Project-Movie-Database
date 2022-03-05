DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;
-- Create table for movie names
CREATE TABLE movies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    movie_name VARCHAR(100) NOT NULL
);
-- Create table for movie reviews, linking movie_id column to movies(id) on movies table.
CREATE TABLE reviews (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    REVIEW TEXT,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE SET NULL
)