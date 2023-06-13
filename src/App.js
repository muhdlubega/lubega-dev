import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyAboutPage = lazy(() => import("./pages/AboutPage"));
const LazyProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const LazySkillsPage = lazy(() => import("./pages/SkillsPage"));
const LazyContactPage = lazy(() => import("./pages/ContactPage"));

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
            path="/about"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazyAboutPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazyProjectsPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/skills"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazySkillsPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <LazyContactPage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
