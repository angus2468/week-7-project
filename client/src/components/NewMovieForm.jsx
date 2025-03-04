import { useState } from "react";

export default function NewMovieForm() {
  const [movieData, setMovieData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await fetch(`http://localhost:7070/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      const message = await result.json();
      console.log(message);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(event) {
    setMovieData({ ...movieData, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="title"
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="description"
        onChange={handleChange}
        required
      />
      <input
        name="movieposter"
        placeholder="movieposter"
        onChange={handleChange}
        required
      />
      <input
        name="runtime"
        placeholder="runtime"
        onChange={handleChange}
        required
      />
      <button type="submit">submit</button>
    </form>
  );
}
