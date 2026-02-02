import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

import favicon from "./assets/img/favicon.webp";
import { langageTab, projectsTab, linkTab } from "./lib/data/data";
import { COLORS_TO_CSS_VARS } from "./lib/data/colors";
import { ROUTES } from "./lib/constants";

import LoadingSpinner from "./components/LoadingSpinner";
import "./components/Footer/Footer.css";

const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./pages/home/Home"));
const Fullstack = lazy(() => import("./pages/fullstack/Fullstack"));
const Frontend = lazy(() => import("./pages/frontend/Frontend"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const navLinks = [
  { to: ROUTES.home, label: "Accueil" },
  { to: ROUTES.fullstack, label: "Projets Fullstack" },
  { to: ROUTES.frontend, label: "Projets Frontend" },
  { to: ROUTES.contact, label: "Contact" },
];

const App = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  useEffect(() => {
    Object.entries(COLORS_TO_CSS_VARS).forEach(([varName, value]) => {
      document.documentElement.style.setProperty(varName, value);
    });
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBurgerVisible(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <main>
        <Router>
          <header className="router-nav">
            <Link to={ROUTES.home} className="nav-title">
              <div>
                <img src={favicon} alt="Logo Portfolio" />
              </div>
              <p>Portfolio</p>
            </Link>

            <nav className="nav-links-inline" aria-label="Menu principal">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "router-button router-button-active" : "router-button"
                  }>
                  {label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              className="burger-button"
              aria-label={burgerVisible ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={burgerVisible}
              onClick={() => setBurgerVisible(!burgerVisible)}>
              <div className={burgerVisible ? "top rotate-right" : "top"}></div>
              <div className={burgerVisible ? "center disable" : "center"}></div>
              <div className={burgerVisible ? "bottom rotate-left" : "bottom"}></div>
            </button>

            <div
              className={burgerVisible ? "router-link-nav visible" : "router-link-nav"}
              role="navigation"
              aria-label="Menu mobile">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "router-button router-button-active" : "router-button"
                  }
                  onClick={() => setBurgerVisible(false)}>
                  {label}
                </NavLink>
              ))}
            </div>
          </header>

          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Navigate to={ROUTES.home} replace />} />
              <Route path={ROUTES.home} element={<Home langageTab={langageTab} />} />
              <Route path={ROUTES.fullstack} element={<Fullstack projectsTab={projectsTab} />} />
              <Route path={ROUTES.frontend} element={<Frontend projectsTab={projectsTab} />} />
              <Route path={ROUTES.contact} element={<Contact />} />
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
