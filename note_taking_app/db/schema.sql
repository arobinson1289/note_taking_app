DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;

-- Create the tables table
CREATE TABLE notebook
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  subject VARCHAR (20) NOT NULL,
  note VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);