CREATE DATABASE profile_db;

USE profile_db;

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image BLOB,
  PRIMARY KEY (id)
);