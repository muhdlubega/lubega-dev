import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Footer, ParticlesBackground } from "./components";
// import { AboutPage, ContactPage, HomePage, ProjectsPage, SkillsPage } from './pages';

const LazyHomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LazyAboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const LazyProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const LazySkillsPage = lazy(() => import("./pages/SkillsPage/SkillsPage"));
const LazyContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
