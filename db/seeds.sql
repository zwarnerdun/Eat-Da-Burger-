DROP DATABASE IF EXISTS burgers_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table burgerss.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN default TRUE,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;
-- Insert a set of burgers.
INSERT INTO burgers (burger_name) VALUES ('Veggie pattie with garlic aoili');
INSERT INTO burgers (burger_name) VALUES ('Angus burger with barbeque coleslaw');
INSERT INTO burgers (burger_name) VALUES ('Crocodile burger with ostrich egg');
