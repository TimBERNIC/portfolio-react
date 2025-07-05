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
import Fullstack from "./pages/fullstack/Fullstack";
import Frontend from "./pages/frontend/Frontend";
import Home from "./pages/home/Home";
import CSSlogo from "./assets/img/css.png";
import JSlogo from "./assets/img/javascript.png";
import reactlogo from "./assets/img/react.png";
import reactNativeLogo from "./assets/img/react-native-1.svg";
import nodeJs from "./assets/img/nodeJS.png";
import express from "./assets/img/Expressjs.png";
import mongoDB from "./assets/img/MongoDB.png";
import Contact from "./pages/contact/Contact";
import favicon from "./assets/img/favicon.png";
import marvel from "./assets/img/marvel.png";
import { useState } from "react";
import Welcome from "./pages/Welcome/Welcome.jsx";
import portFolio from "./assets/img/page-portfolio.png";
import BnBair from "./assets/img/BnbAir.gif";
import TORPG from "./assets/img/TO-RPG.png";

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
    name: "ExpressJS",
    logo: express,
  },
  {
    name: "MongoDB",
    logo: mongoDB,
  },
];

const projectsTab = [
  {
    type: "fullstack",
    title: "TO-RPG",
    techno: "ReactNative/Expo, API en Express, et base de données en mongoDB",
    subtitle:
      "Création d'une application reactNative de gestion de tour de jeu pour les parties de Jeu de rôle",
    img: TORPG,
    features:
      "Intégration d'une base de donnée avec un modèle de personnage de jeu de rôle, possibilité d'en créer selon le modèle. Authentification sécurisée, Login/SignUp, gestion d'un algorithmie de tour de jeu variable selon certaines caractéristiques et modulable et d'effets pouvant impacter l'environnement de ce dernier",
    url: "https://youtu.be/YV9XQYzk9ro",
  },
  {
    type: "frontend",
    title: "BnBair",
    techno: "ReactNative, requête vers API en Express, mongoDB",
    subtitle:
      "Reproduction de l'application mobile (Android et Ios) du site de réservation et de location",
    img: BnBair,
    features:
      "Reproduction du celèbre site mobile, avec géolocaliseur, gestion de la caméra du téléphonecpour prise de photos et des dossiers photos. Ergonomie et router ReactNative. Pour des raisons techniques ce projet n'est ni déployé sur l'app Store ni sur le google Store.",
    url: "",
  },
  {
    type: "fullstack",
    title: "Marvel's World",
    techno: "React/NodeJS/Express/MongoDB",
    subtitle:
      "Création complète d'un site de référencement de la collection des comics et héros de l'univers Marvel",
    img: marvel,
    features:
      "Création complète. En backend, express, gestion de voies et de routes selon le CRUD, contact d'une API tierce. Création d'un base dedonnée utilisateur avec mongoDB pour le login utilisateur avec systeme complet de sécurisation. Niveau frontend, monté en React avec router, gestion de cookies, du login, tri des apports de la Base de donnée. Responsive smartphone",
    url: "https://marvelsworld.netlify.app/",
  },

  {
    type: "fullstack",
    title: "TedVin",
    techno: "React/NodeJS/Express/MongoDB",
    subtitle:
      "Replique  du célèbre site de vente de vêtements (non responsive)",
    img: TedVin,
    features:
      "Gestion d'une modale Login et Signup avec requêtes et post vers l'API et la Base de données MongoDB. Gestion du retour de token en cookie. Gestion d'un système de paiement en ligne avec 'Stripe'. Côté backend, gestion du stockage des données utilisateur, gestion de la logique d'authentification et de sécurisation des données.",

    url: "https://tedvin-frontend-bytbn.netlify.app/",
  },
  {
    type: "fullstack",
    title: "Deliver",
    techno: "React/NodeJS/Express",
    subtitle:
      "Replique partielle du célèbre site de vente de nourriture (non responsive)",
    img: deliverooImg,
    features: "Gestion de panier, contact API et affichage de données",

    url: "https://deliveroos-copy.netlify.app/",
  },
  {
    type: "frontend",
    techno: "React",
    title: "Ce Portfolio",
    subtitle: "Entièrement codé en reactJS !",
    features:
      "Gestion routes, gestion de styles, de transitions, d'animations et de responsive.",
    img: portFolio,
    description: "Réalisé à partir de mon savoir faire",
    url: "https://portfolio-tbn.netlify.app/",
  },

  {
    type: "frontend",
    techno: "React",
    title: "FletNix",
    subtitle:
      "Replique frontend d'une page du célèbre site de streaming de video",
    features:
      "Mise en place de carousselles, gestion de style et de responsive.",
    img: fletnixImg,
    description: "Projet frontend en react",
    url: "https://fletnix-reproduction.netlify.app/",
  },
  {
    type: "frontend",
    techno: "Javascript/HTMLM/CSS",
    title: "TripAd",
    subtitle: "Replique frontend d'une page du célèbre site de voyage",
    features:
      "Mise en place du responsive, de la structuration d'une page et de carousselles.",
    img: tripadvisor,

    url: "https://tripadvisor-copy-bytbn.netlify.app/",
  },
  {
    type: "frontend",
    techno: "React",
    title: "EmojiSearch",
    subtitle: "Application de tri et recherche d'Emojis (non responsive)",
    img: EmojiS,
    features:
      "Gestion de filtres et de tris d'objets par mots-clés à partir d'un recueil de données.",
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
