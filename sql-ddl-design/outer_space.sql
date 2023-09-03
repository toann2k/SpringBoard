-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS planets;

CREATE DATABASE planets;

DROP DATABASE IF EXISTS galaxy;

CREATE DATABASE galaxy;

\c outer_space

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy_id INT
);


CREATE TABLE galaxy
(
  id SERIAL PRIMARY KEY, 
  galaxy_name TEXT NOT NULL, 
  moons TEXT[]
);


INSERT INTO planets
  (name, orbital_period_in_years, orbits_around, galaxy, moons)
VALUES
  ('Earth', 1.00, 'The Sun', 1, '{"The Moon"}'),
  ('Mars', 1.88, 'The Sun', 2, '{"Phobos", "Deimos"}'),
  ('Venus', 0.62, 'The Sun', 3, '{}'),
  ('Neptune', 164.8, 'The Sun', 4, '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri', 3, '{}'),
  ('Gliese 876 b', 0.23, 'Gliese 876', 3, '{}');



INSERT INTO galaxy
  ( id, galaxy, moons)
VALUES
  (1, 'Milky Way', '{"The Moon"}'),
  (2, 'Milky Way', '{"Phobos", "Deimos"}'),
  (3, 'Milky Way', '{}'),
  (4, 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
