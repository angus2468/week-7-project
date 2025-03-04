import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});
app.get("/", (req, res) => {
  try {
    res.json("Why hello there this is the root!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/movies", async (req, res) => {
  try {
    const movies = (await db.query(`SELECT * FROM movies`)).rows;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/movies/:id", async (req, res) => {
  const { includes_genres } = req.query;
  const { id } = req.params;
  console.log(id);

  try {
    if (includes_genres === "true") {
      const moviesInfoWithGenres = (
        await db.query(
          `SELECT movies.*, array_agg(genres.name) AS genres
              FROM movies
              LEFT JOIN
              movies_genres ON movies.id = movies_genres.movie_id
              LEFT JOIN
              genres ON movies_genres.genre_id = genres.id
              WHERE movies.id = $1
              GROUP BY movies.id`,
          [id]
        )
      ).rows[0];
      res.status(200).json(moviesInfoWithGenres);
    } else {
      const moviesInfo = await db.query(`SELECT * FROM movies WHERE id = $1`, [
        req.params.id,
      ]);
      res.status(200).json(moviesInfo);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/movies", async (req, res) => {
  const { title, description, movieposter, runtime } = req.body;
  try {
    const data = await db.query(
      `INSERT INTO movies (title, description, movieposter, runtime) VALUES ($1, $2, $3, $4)`,
      [title, description, movieposter, runtime]
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/genres", async (req, res) => {
  try {
    const genreInfo = (await db.query(`SELECT * FROM  genres`)).rows;
    res.status(200).json(genreInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/genres/:id", async (req, res) => {
  const { include_movies } = req.query;
  const { id } = req.params;
  console.log(id);

  try {
    if (include_movies === "true") {
      const genreInfoWithMovies = (
        await db.query(
          `SELECT genres.*, array_agg(movies.title) AS movies
                    FROM genres
                    LEFT JOIN 
                    movies_genres ON genres.id = movies_genres.genre_id
                    LEFT JOIN
                    movies ON movies_genres.movie_id = movies.id
                    WHERE genres.id = $1
                    GROUP BY genres.id`,
          [id]
        )
      ).rows[0];
      res.status(200).json(genreInfoWithMovies);
    } else {
      const moviesInfo = await db.query(`SELECT * FROM genres WHERE id = $1`, [
        req.params.id,
      ]);
      res.status(200).json(moviesInfo);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(8080),
  () => {
    console.log(`Server running on 8080`);
  };
