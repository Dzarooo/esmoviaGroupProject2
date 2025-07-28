import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home.jsx"));
const Manual = lazy(() => import("./components/Manual.jsx"));
const Dog = lazy(() => import("./components/Dog.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="flex justify-center gap-2 mt-20">
        <div className="bg-gray-400 opacity-0 w-[30px] h-[30px] rounded-full animate-[loadingDot_0.5s_infinite]"></div>
        <div className="bg-gray-400 opacity-0 w-[30px] h-[30px] rounded-full animate-[loadingDot_0.5s_infinite]"></div>
        <div className="bg-gray-400 opacity-0 w-[30px] h-[30px] rounded-full animate-[loadingDot_0.5s_infinite]"></div>
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
