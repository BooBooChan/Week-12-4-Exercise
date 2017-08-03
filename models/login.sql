#Creating the database
DROP DATABASE IF EXISTS `login`;
CREATE DATABASE `login`;
USE `login`;
CREATE TABLE `user` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username,
	password,
	task
);
#Creating table entries
INSERT INTO `user`(username, password, task)
VALUES ("tic", "tac", "tow my broken car");
INSERT INTO `user`(username, password, task)
VALUES ("eat", "pray", "love Big Brother");



INNER JOIN