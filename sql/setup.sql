-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  year SMALLINT NOT NULL,
  starring TEXT []
);

INSERT INTO
  movies (title, director, year, starring)
VALUES
  ('But I''m a Cheerleader', 'Jamie Babbit', 1999, ARRAY ['Natasha Lyonne', 'Clea DuVall', 'Cathy Moriarty', 'RuPaul Charles', 'Mink Stole', 'Bud Cort', 'Eddie Cibrian']);


DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  common_name TEXT NOT NULL,
  scientific_name TEXT NOT NULL,
  is_endangered BOOLEAN,
  conservation_status TEXT
);

INSERT INTO
  animals (common_name, scientific_name, is_endangered, conservation_status)
VALUES
  ('Orangutan', 'Pongo abelii, Pongo pygmaeus', true, 'critically endangered');