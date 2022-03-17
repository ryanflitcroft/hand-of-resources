-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS movies

CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  director TEXT NOT NULL,
  year SMALLINT NOT NULL,
  cast TEXT []
)

INSERT INTO
  movies (title, director, year, cast)
VALUES
  ('But I''m a Cheerleader', 'Jamie Babbit', 1999, '['Natasha Lyonne', 'Clea DuVall', 'Cathy Moriarty', 'RuPaul Charles', 'Mink Stole', 'Bud Cort', 'Eddie Cibrian']')