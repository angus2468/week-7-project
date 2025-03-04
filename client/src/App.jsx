import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import GenresPage from "./pages/GenresPage";
import GenrePage from "./pages/GenrePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/movies"} element={<MoviesPage />} />
          <Route path={"/movies/:id"} element={<MoviePage />} />
          <Route path={"/genres"} element={<GenresPage />} />
          <Route path={"/genres/:id"} element={<GenrePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
