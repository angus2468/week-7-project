import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <section>
        <p>
          Welcome to my movies app that lets you input movies that you have
          watched and sort them by the genres that they have
        </p>
      </section>
    </>
  );
}
