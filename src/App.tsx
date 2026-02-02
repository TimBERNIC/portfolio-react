import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import "./App.css";

import favicon from "./assets/img/favicon.webp";
import { langageTab, projectsTab, linkTab } from "./lib/data/data";

import LoadingSpinner from "./components/LoadingSpinner";
import "./components/Footer/Footer.css";

const Footer = lazy(() => import("./components/Footer/Footer"));

const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Home = lazy(() => import("./pages/home/Home"));
const Fullstack = lazy(() => import("./pages/fullstack/Fullstack"));
const Frontend = lazy(() => import("./pages/frontend/Frontend"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const App = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  return (
    <>
      <main>
        <Router>
          <header className="router-nav">
            <Link to="/home" className="nav-title">
              <div>
                <img src={favicon} alt="" />
              </div>
              <p>Portfolio</p>
            </Link>
            <div
              className={"burger-button"}
              onClick={() => {
                setBurgerVisible(!burgerVisible);
              }}>
              <div className={burgerVisible ? "top rotate-right" : "top"}></div>
              <div
                className={burgerVisible ? "center disable" : "center"}></div>
              <div
                className={
                  burgerVisible ? "bottom rotate-left" : "bottom"
                }></div>
            </div>
            <div
              className={
                burgerVisible ? "router-link-nav visible" : "router-link-nav"
              }>
              <Link
                className="router-button"
                to="/home"
                onClick={() => {
                  setBurgerVisible(false);
                }}>
                Accueil
              </Link>
              <Link
                className="router-button"
                to="/fullstack"
                onClick={() => {
                  setBurgerVisible(false);
                }}>
                Projets Fullstack
              </Link>
              <Link
                className="router-button"
                to="/frontend"
                onClick={() => {
                  setBurgerVisible(false);
                }}>
                Projets Frontend
              </Link>
              <Link
                className="router-button"
                to="/contact"
                onClick={() => {
                  setBurgerVisible(false);
                }}>
                Contact
              </Link>
            </div>
          </header>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route
                path="/home"
                element={<Home langageTab={langageTab} />}></Route>
              <Route
                path="/fullstack"
                element={<Fullstack projectsTab={projectsTab} />}></Route>
              <Route
                path="/frontend"
                element={<Frontend projectsTab={projectsTab} />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Suspense>
        </Router>
      </main>
      <Suspense
        fallback={
          <div
            style={{
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            Chargement du footer...
          </div>
        }>
        <Footer linkTab={linkTab} />
      </Suspense>
    </>
  );
};

export default App;
