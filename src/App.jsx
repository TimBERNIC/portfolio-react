import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import htmlLogo from "./assets/img/html.png";
import deliverooImg from "./assets/img/deliveroo.png";
import TedVin from "./assets/img/tedvin.png";
import fletnixImg from "./assets/img/fletnix.png";
import githubLogo from "./assets/img/github.png";
import linkedinLogo from "./assets/img/linkedin.png";
import tripadvisor from "./assets/img/tripadvisor.png";
import Footer from "./components/Footer/Footer";
import EmojiS from "./assets/img/emojiS.png";
import "./components/Footer/Footer.css";
import Fullstack from "./pages/Fullstack/Fullstack";
import Frontend from "./pages/Frontend/Frontend";
import Home from "./pages/Home/Home";
import CSSlogo from "./assets/img/css.png";
import JSlogo from "./assets/img/javascript.png";
import reactlogo from "./assets/img/react.png";
import reactNativeLogo from "./assets/img/react-native-1.svg";
import nodeJs from "./assets/img/nodeJS.png";
import express from "./assets/img/Expressjs.png";
import mongoDB from "./assets/img/MongoDB.png";
import Contact from "./pages/Contact/Contact";
import favicon from "./assets/img/favicon.png";
import { useState } from "react";
import Welcome from "./pages/Welcome/Welcome";

const App = () => {
  const langageTab = [
    {
      name: "HTML5",
      logo: htmlLogo,
    },
    {
      name: "CSS",
      logo: CSSlogo,
    },
    {
      name: "JavaScript",
      logo: JSlogo,
    },
    {
      name: "ReactJS",
      logo: reactlogo,
    },
    {
      name: "ReactNative",
      logo: reactNativeLogo,
    },
    {
      name: "NodeJS",
      logo: nodeJs,
    },
    {
      name: "",
      logo: express,
    },
    {
      name: "",
      logo: mongoDB,
    },
  ];

  const projectsTab = [
    {
      type: "fullstack",
      title: "Deliver",
      techno: "React/NodeJS/Express",
      subtitle: "Replique du célèbre site de vente de nourriture",
      img: deliverooImg,
      description:
        "Projet full-stack, avec un frontend monté en react et backend nodeJs/ express. Une version de rappel API vers l'API de Deliver est aussi disponible sur le github mais instable car la clé API doit être régulièrement renouvelée. Un base de donnée fictive à donc été montée en dur sur l'API utilisée. Gestion d'un panier de vente intégré.",
      url: "https://deliveroos-copy.netlify.app/",
    },
    {
      type: "fullstack",
      title: "TedVin (en cours de développement)",
      techno: "React/NodeJS/Express/MongoDB",
      subtitle:
        "Replique complète (en cours) du célèbre site de vente de vêtements",
      img: TedVin,
      description:
        "Projet full-stack, avec un frontend monté en react et backend nodeJs/ express. Gestion d'un page Login et Signup avec requêtes et post vers l'API et Base de données MongoDB. Gestion du retour de token en cookie. Côté backend, gestion du stockage des données utilisateur, gestion de la logique d'authentification.",
      url: "https://tedvin-frontend-bytbn.netlify.app/",
    },
    {
      type: "frontend",
      techno: "React",
      title: "FletNix",
      subtitle:
        "Replique frontend d'une page du célèbre site de streaming de video",
      img: fletnixImg,
      description:
        "Projet frontend en react, avec mise en place de carousselles, gestion de style et de responsive",
      url: "https://fletnix-reproduction.netlify.app/",
    },
    {
      type: "frontend",
      techno: "Javascript/HTMLM/CSS",
      title: "TripAd",
      subtitle: "Replique frontend d'une page du célèbre site de voyage",
      img: tripadvisor,
      description:
        "Projet frontend en JS, HTML/CSS avec mise en place de carousselles, gestion de style et de responsive",
      url: "https://tripadvisor-copy-bytbn.netlify.app/",
    },
    {
      type: "frontend",
      techno: "React",
      title: "EmojiSearch",
      subtitle: "Application de tri et recherche d'Emojis (non responsive)",
      img: EmojiS,
      description:
        "Cours projet de filtre et de tri d'Emojis par mots-clés à partir d'un recueil de données Json",
      url: "https://emojisearch-bytbn.netlify.app/",
    },
  ];

  const linkTab = [
    {
      name: "Github",
      logo: githubLogo,
      url: "https://github.com/TimBERNIC",
    },
    {
      name: "Linkedin",
      logo: linkedinLogo,
      url: "https://www.linkedin.com/in/timothée-nicolet-8b04a8329",
    },
  ];

  const [burgerVisible, setBurgerVisible] = useState(false);
  return (
    <>
      <main>
        <Router>
          <nav className="router-nav change">
            <Link to="/welcome" className="nav-title">
              <div>
                <img src={favicon} alt="" />
              </div>
              <p>Portfolio</p>
            </Link>
            <div
              className={
                burgerVisible ? "burger-button change" : "burger-button "
              }
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
              <Link className="router-button" to="/home">
                Accueil
              </Link>
              <Link className="router-button" to="/fullstack">
                Projets Fullstack
              </Link>
              <Link className="router-button" to="/frontend">
                Projets Frontend
              </Link>
              <Link className="router-button" to="/contact">
                Contact
              </Link>
            </div>
          </nav>
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
        </Router>
      </main>
      <Footer linkTab={linkTab} />
    </>
  );
};

export default App;
