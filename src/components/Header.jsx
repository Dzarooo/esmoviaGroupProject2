import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <h1>Bomb defusing tutorial for interested</h1>
      <nav>
        <Link to="/" className="activeLink">
          Home
        </Link>
        <Link to="/manual">Manual</Link>
        <Link to="/dog">Dog break</Link>
        <Link to="/aboutus">About us</Link>
      </nav>
    </>
  );
};
