import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [pendingPath, setPendingPath] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [diceResult, setDiceResult] = useState(null);

  const handleClick = (path) => (e) => {
    e.preventDefault();
    setPendingPath(path);
    setShowPopup(true);
    setDiceResult(null); // resetujemy poprzedni rzut
  };

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
  };

  const proceed = () => {
    setShowPopup(false);
    if (pendingPath) {
      navigate(pendingPath);
    }
  };

  const cancel = () => {
    setDiceResult(null);
  };

  return (
    <>
      <header className="bg-[linear-gradient(90deg,_rgba(61,61,61,1)_0%,_rgba(51,51,51,1)_15%,_rgba(51,51,51,1)_85%,_rgba(61,61,61,1)_100%)] text-white px-4 py-4 flex flex-col gap-4 justify-between">
        <h1 className="text-5xl font-bold text-orange-500 text-center">
          Bomb defusing tutorial for interested
        </h1>
        <nav className="flex justify-center gap-6">
          <a
            href="/"
            onClick={handleClick("/")}
            className="hover:underline hover:text-white hover:font-bold text-slate-200"
          >
            Home
          </a>
          <a
            href="/manual"
            onClick={handleClick("/manual")}
            className="hover:underline hover:text-white hover:font-bold text-slate-200"
          >
            Manual
          </a>
          <a
            href="/dog"
            onClick={handleClick("/dog")}
            className="hover:underline hover:text-white hover:font-bold text-slate-200"
          >
            Dog break
          </a>
          <a
            href="/aboutus"
            onClick={handleClick("/aboutus")}
            className="hover:underline hover:text-white hover:font-bold text-slate-200"
          >
            About us
          </a>
        </nav>
      </header>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <p className="text-xl font-semibold mb-4">
              🎲 Throw a dice to proceed. (4+)
            </p>

            {diceResult === null ? (
              <button
                onClick={rollDice}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Throw a dice!
              </button>
            ) : (
              <>
                <p className="text-lg mt-2">
                  Result: <span className="font-bold">{diceResult}</span>
                </p>
                {diceResult >= 4 ? (
                  <button
                    onClick={proceed}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Proceed ✅
                  </button>
                ) : (
                  <p className="text-red-600 mt-4 font-medium">
                    You must roll at least 4, take it again!
                  </p>
                )}
                <button
                  onClick={cancel}
                  className="mt-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
