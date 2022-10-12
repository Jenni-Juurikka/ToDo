CREATE DATABASE todo;

CREATE TABLE task (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descript VARCHAR(255) NOT NULL
);

INSERT INTO task (descript) VALUES ('Clean the bathroom');
INSERT INTO task (descript) VALUES ('Take out trash');