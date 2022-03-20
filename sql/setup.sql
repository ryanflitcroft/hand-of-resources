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

DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  born SMALLINT NOT NULL,
  died SMALLINT,
  works TEXT []
);

INSERT INTO
  artists (name, born, died, works)
VALUES
  ('Henri Matisse', 1869, 1954, ARRAY ['Woman with a Hat', 'Still Life with Oranges', 'The Open Window', 'Dance', 'Blue Nude', 'The Joy of Life', 'Green Stripe', 'Woman Reading', 'The Red Room']);

DROP TABLE IF EXISTS concerts;

CREATE TABLE concerts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  artist TEXT NOT NULL,
  venue TEXT NOT NULL,
  calendar INT NOT NULL
);

INSERT INTO
  concerts (artist, venue, calendar)
VALUES
  ('Cat Power', 'Roseland Theater', 20220722);

DROP TABLE IF EXISTS musicians;

CREATE TABLE musicians (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  genres TEXT [],
  discography TEXT []
);

INSERT INTO
  musicians (name, genres, discography)
VALUES
  ('Lissie', ARRAY ['rock', 'pop', 'country', 'folk'], ARRAY ['Catching a Tiger', 'Back to Forever', 'My Wild West', 'Castles']);