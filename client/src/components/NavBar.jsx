import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div>
          <Link to={"/"} className="button">
            Home
          </Link>
        </div>
        <div>
          <Link to={"/movies"} className="button">
            Movies
          </Link>
        </div>
        <div>
          <Link to={"/genres"} className="button">
            Genres
          </Link>
        </div>
      </nav>
    </>
  );
}
