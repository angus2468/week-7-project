CREATE TABLE IF NOT EXISTS movies (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  moviePoster TEXT NOT NULL,
  runtime VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movies_genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  movie_id INT REFERENCES movies(id),
  genre_id INT REFERENCES genres(id)
);

INSERT INTO movies (title, description, movieposter, runtime) VALUES 
('Harry Potter and the Philosophers Stone', 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.', 'https://img.posterstore.com/zoom/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg', '2h 32m'),
('Borat', 'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world.', 'https://m.media-amazon.com/images/I/618hfaZJUGL._AC_UF894,1000_QL80_.jpg', '1h 24m
'),
('Dungeons & Dragons: Honor Among Thieves','A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a long lost relic, but their charming adventure goes dangerously awry when they run afoul of the wrong people.', 'https://m.media-amazon.com/images/I/81+5QumsDHL.jpg','2h 14m');

INSERT INTO genres (name, desciption) VALUES 
('Fantasy', 'Fantasy is a genre of speculative fiction which involves themes of the supernatural, magic, and imaginary worlds and creatures. Its roots are in oral traditions, which became fantasy literature and drama.'),
('Comedy', 'Comedy is a genre that consists of discourses or works intended to be humorous or amusing by inducing laughter');

INSERT INTO movies_genres (movie_id, genre_id) VALUES 
(4, 1),
(5, 2),
(6, 1),
(6, 2):