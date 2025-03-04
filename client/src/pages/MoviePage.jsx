import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(`http://localhost:8080/movies/${id}`);
      const data = await res.json();
      setMovieInfo(data.rows[0]);
    }
    fetchMovie();
  });
  return (
    <>
      <NavBar></NavBar>
      <section>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.description}</p>
        <img src={movieInfo.movieposter}></img>
        <p>The runetime for the movie is: {movieInfo.runtime}</p>
      </section>
    </>
  );
}
