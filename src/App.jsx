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
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
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
