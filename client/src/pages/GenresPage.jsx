import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function GenresPage() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchGenres() {
      const res = await fetch("http://localhost:8080/genres");
      const data = await res.json();
      setGenres(data);
    }
    fetchGenres();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <section>
        <h1>Here are all the Genres: </h1>
        {genres.map((genre) => (
          <div>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
          </div>
        ))}
      </section>
    </>
  );
}
