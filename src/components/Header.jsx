import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[linear-gradient(90deg,_rgba(61,61,61,1)_0%,_rgba(51,51,51,1)_15%,_rgba(51,51,51,1)_85%,_rgba(61,61,61,1)_100%)] text-white px-4 py-4 flex flex-col gap-4 justify-between">
      <h1 className="text-5xl font-bold text-orange-500 text-center">
        Bomb defusing tutorial for interested
      </h1>
      <nav className="flex justify-center gap-6">
        <Link
          to="/"
          className="hover:underline hover:text-white hover:font-bold text-slate-200"
        >
          Home
        </Link>
        <Link
          to="/manual"
          className="hover:underline hover:text-white hover:font-bold text-slate-200"
        >
          Manual
        </Link>
        <Link
          to="/dog"
          className="hover:underline hover:text-white hover:font-bold text-slate-200"
        >
          Dog break
        </Link>
        <Link
          to="/aboutus"
          className="hover:underline hover:text-white hover:font-bold text-slate-200"
        >
          About us
        </Link>
      </nav>
    </header>
  );
};
