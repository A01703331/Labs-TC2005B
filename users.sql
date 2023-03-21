CREATE TABLE users (
    id numeric(2) NOT NULL,
    username varchar(30) COLLATE utf8_general_ci NOT NULL,
    name varchar(30) COLLATE utf8_general_ci NOT NULL,
    password varchar(255) COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO users (id, username, name, password) VALUES
(00, 'BingBingWahoo', 'Mario', '12345'),
(01, 'GhostBusterElite', 'Luigi', '54321'),
(02, 'RoyalMonarch', 'Peach', 'abcde'),
(03, 'QueenOfSass', 'Daisy', 'edcba');

ALTER TABLE users
  ADD PRIMARY KEY (id);
  ADD UNIQUE KEY (username);

ALTER TABLE users
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;