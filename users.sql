CREATE TABLE perks (
  id int(11) NOT NULL,
  name varchar(40) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO perks (id, name, created_at) VALUES
(1, 'see', '2023-03-14 17:55:35'),
(2, 'create', '2023-03-14 17:55:35');

CREATE TABLE roles (
  id int(11) NOT NULL,
  name varchar(40) NOT NULL,
  descript varchar(400) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO roles (id, name, descript, created_at) VALUES
(1, 'super', '', '2023-03-14 17:55:06'),
(2, 'high_end', '', '2023-03-14 17:55:06');

CREATE TABLE role_perk (
  roleID int(11) NOT NULL,
  perkID int(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

INSERT INTO role_perk (roleID, perkID, created_at) VALUES
(1, 1, '2023-03-14 17:55:53'),
(1, 2, '2023-03-14 17:55:53'),
(2, 1, '2023-03-14 17:56:03');

CREATE TABLE users (
  id int(11) NOT NULL,
  username varchar(40) NOT NULL,
  name varchar(400) NOT NULL,
  password varchar(400) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO users (id, username, name, password, created_at) VALUES
(01, 'BingBingWahoo', 'Mario', '12345', '2023-03-13 18:06:24'),
(02, 'GhostBusterElite', 'Luigi', '54321', '2023-03-13 18:13:19'),
(03, 'RoyalMonarch', 'Peach', 'abcde', '2023-03-13 18:14:08'),
(04, 'QueenOfSass', 'Daisy', 'edcba', '2023-03-13 18:24:01');

CREATE TABLE user_role (
  userID int(11) NOT NULL,
  roleID int(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO user_role (userID, roleID, created_at) VALUES
(02, 1, '2023-03-14 17:57:14'),
(01, 2, '2023-03-14 17:56:35');

ALTER TABLE perks
  ADD PRIMARY KEY (id);

ALTER TABLE roles
  ADD PRIMARY KEY (id);

ALTER TABLE role_perk
  ADD PRIMARY KEY (roleID,perkID),
  ADD KEY perkID (perkID);

ALTER TABLE users
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY username (username);

ALTER TABLE user_role
  ADD PRIMARY KEY (userID,roleID),
  ADD KEY roleID (roleID);

ALTER TABLE perks
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
  
ALTER TABLE roles
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE users
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE role_perk
  ADD CONSTRAINT role_perk_ibfk_1 FOREIGN KEY (roleID) REFERENCES roles (id),
  ADD CONSTRAINT role_perk_ibfk_2 FOREIGN KEY (perkID) REFERENCES perks (id);

ALTER TABLE user_role
  ADD CONSTRAINT user_role_ibfk_1 FOREIGN KEY (userID) REFERENCES users (id),
  ADD CONSTRAINT user_role_ibfk_2 FOREIGN KEY (roleID) REFERENCES roles (id);
COMMIT;