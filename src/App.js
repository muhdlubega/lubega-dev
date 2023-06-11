import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyResumePage = lazy(() => import("./pages/ResumePage"));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="ts-particles">
          <ParticlesBackground />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazyHomePage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/resume"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazyResumePage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
