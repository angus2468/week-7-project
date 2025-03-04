import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NewMovieForm from "../components/NewMovieForm";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        "https://week-7-project-ptm6.onrender.com/movies"
      );
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);
  return (
    <>
      <NavBar />
      <section>
        <h1>Here are all the Movies:</h1>
        <p>Click one to go to the about page for each movie</p>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="button">
              {movie.title}
            </Link>
          </div>
        ))}
      </section>
      <section>
        <h1>Add your movie now:</h1>
        <NewMovieForm />
      </section>
    </>
  );
}
