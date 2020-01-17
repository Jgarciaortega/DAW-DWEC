DROP DATABASE IF EXISTS cervezas;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE cervezas;

CREATE USER IF NOT EXISTS tomcat@localhost IDENTIFIED BY 'tomcat';
GRANT ALL PRIVILEGES ON cervezas.* TO 'tomcat'@'localhost';
FLUSH PRIVILEGES;

USE cervezas ;

CREATE TABLE unidades (
 _idproducto INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 precio  INT NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idproducto));

INSERT INTO unidades VALUES (NULL, "Abbye",3,"Abbye.jpeg");
INSERT INTO unidades VALUES (NULL, "Chimay",4,"Chimay.jpeg");
INSERT INTO unidades VALUES (NULL, "Delirium",2,"delirium.jpeg");


CREATE TABLE pedidos (
 _idcompra INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 cantidad INT NOT NULL,
 total INT NOT NULL,
 PRIMARY KEY (_idcompra));