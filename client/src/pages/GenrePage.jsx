import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GenrePage() {
  const [genreInfo, setGenreInfo] = useState([]);
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchGenre() {
      const res = await fetch(
        `https://week-7-project-ptm6.onrender.com/genres/${id}`
      );
      const data = await res.json();
      setGenreInfo(data.rows[0]);
    }
    fetchGenre();

    async function fetchMovie() {
      const response = await fetch(
        `https://week-7-project-ptm6.onrender.com/genres/${id}?include_movies=true`
      );
      const dataMovies = await response.json();
      setMovies(dataMovies.movies);
    }
    fetchMovie();
  }, []);
  return (
    <>
      <section>
        <h1>{genreInfo.name}</h1>
        <p>definition: {genreInfo.description}</p>
      </section>
      <section>
        {movies.map((movie) => (
          <div key={movie}>
            <p>{movie}</p>
          </div>
        ))}
      </section>
      <Link to={"/genres"}>Go back</Link>
    </>
  );
}
