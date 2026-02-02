// Imports des images
import htmlLogo from "../../assets/img/html.png";
import deliverooImg from "../../assets/img/deliveroo.webp";
import TedVin from "../../assets/img/tedvin.webp";
import fletnixImg from "../../assets/img/fletnix.webp";
import githubLogo from "../../assets/img/github.png";
import linkedinLogo from "../../assets/img/linkedin.png";
import tripadvisor from "../../assets/img/tripadvisor.png";
import EmojiS from "../../assets/img/emojiS.webp";
import CSSlogo from "../../assets/img/css.webp";
import JSlogo from "../../assets/img/javascript.png";
import reactlogo from "../../assets/img/react.png";
import reactNativeLogo from "../../assets/img/react-native-1.svg";
import nodeJs from "../../assets/img/nodeJS.png";
import express from "../../assets/img/Expressjs.png";
import mongoDB from "../../assets/img/MongoDB.png";
import marvel from "../../assets/img/marvel.webp";
import portFolio from "../../assets/img/page-portfolio.png";
import BnBair from "../../assets/img/BnbAir.webm";
import TORPG from "../../assets/img/TO-RPG.png";
import fixnicolet from "../../assets/img/fixnicolet.webp";
import typescriptLogo from "../../assets/img/typescript.png";
import tailwindLogo from "../../assets/img/tailwind.svg";
import weatherApp from "../../assets/img/weather-app.png";
import sassLogo from "../../assets/img/sass.png";
import svelteLogo from "../../assets/img/svelte.png";
import vitestLogo from "../../assets/img/vitest.png";
import jestLogo from "../../assets/img/jest.png";
import rickMortyApp from "../../assets/img/rick-morty.jpg";
import tokenGeneratorApp from "../../assets/img/token-generator.jpg";

// Types pour les données du portfolio
export interface LangageItem {
  name: string;
  logo: string;
  changedclass?: string;
}

export interface ProjectItem {
  type: "frontend" | "fullstack";
  title: string;
  techno?: string;
  subtitle?: string;
  features?: string;
  img: string;
  url?: string;
  githubFront?: string;
  githubBack?: string;
  description?: string;
}

export interface LinkItem {
  name: string;
  logo: string;
  url: string;
}

export const langageTab: LangageItem[] = [
  { name: "ReactJS", logo: reactlogo },
  { name: "ReactNative", logo: reactNativeLogo },
  { name: "SvelteKit5", logo: svelteLogo },
  { name: "JavaScript", logo: JSlogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "CSS", logo: CSSlogo },
  { name: "SCSS", logo: sassLogo },
  { name: "TailwindCSS", logo: tailwindLogo },
  { name: "HTML5", logo: htmlLogo },
  { name: "NodeJS", logo: nodeJs },
  { name: "ExpressJS", logo: express },
  { name: "MongoDB", logo: mongoDB },
  { name: "Vitest", logo: vitestLogo },
  { name: "Jest", logo: jestLogo },
];

export const projectsTab: ProjectItem[] = [
  {
    type: "frontend",
    title: "Token Generator App",
    techno: "Font-end : Javascript pur, HTML, CSS",
    subtitle:
      "Application de génération de tokens pour jeu de rôle ou de plateau à partir d'image avec options de personnalisation",
    img: tokenGeneratorApp,
    features:
      "Importation d'images, gestion des calques avec options de personnalisation (taille, rotation, positionnement), génération et téléchargement d'une image finale au format PNG",
    url: "https://rpg-free-token-generator.netlify.app/",
    githubFront: "https://github.com/TimBERNIC/RPGImageToTokenGenerator",
    githubBack: "",
  },
  {
    type: "frontend",
    title: "Rick & Morty App",
    techno:
      "Font-end : SvelteKit5, TypeScript, TailwindCSS, graphQL pour la requête vers l'API OpenSource https://rickandmortyapi.com/",
    subtitle:
      "Application de tri et recherche de personnages de la série Rick & Morty",
    img: rickMortyApp,
    features:
      "Gestion des données de l'API rickandmortyapi.com, router svelteKit5, tailwindcss, installation et utilisation de graphQL",
    url: "https://rick-morty-characters-search.netlify.app/",
    githubFront: "https://github.com/TimBERNIC/rick-morty-app.git",
    githubBack: "",
  },
  {
    type: "frontend",
    title: "Weather App",
    techno:
      "Font-end : SvelteKit5, TypeScript, TailwindCSS, test : Vitest, axios pour la requête vers l'API OpenSource wttr.in",
    subtitle:
      "Application de météo avec recherche par ville et affichage de la météo",
    img: weatherApp,
    features:
      "Gestion des données de l'API wttr.in, router sveltekit5, tailwindcss, tests de fonctionnalités avec Vitest",
    url: "https://weather-app-tbn.netlify.app/",
    githubFront: "https://github.com/TimBERNIC/weather-app.git",
    githubBack: "",
  },
  {
    type: "fullstack",
    title: "Web-App/Site Fix Nicolet",
    techno:
      "Font-end : ReactJS, TypeScript, TailwindCSS, Back-end: API en Express, usage de Cors, helmet, multer... et base de données en mongoDB",
    subtitle:
      "Création d'un complexe fullstack de sites professionnel de référencement des services du guitariste concertiste Fix Nicolet, avec notamment d'un second front-end Adminitrateur pour permettre la gestion utilisateur du site",
    img: fixnicolet,
    features:
      "front-end avec gestion des langues, traduite en Français, Anglais, Espagnol. Modification des données à partir d'un second site et de l'API et la BDD pour la gestion des projets, concerts, présentation des CDs, médias... le tout avec accès sécurisé au back-end",
    url: "https://fixnicolet.net/",
    githubFront: "privé",
    githubBack: "privé",
  },
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
    githubFront: "privé",
    githubBack: "privé",
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
    githubFront: "https://github.com/TimBERNIC/bnbair-front-app-mobile",
    githubBack: "",
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
    githubFront: "https://github.com/TimBERNIC/marvel-frontend",
    githubBack: "https://github.com/TimBERNIC/marvel-backend",
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
    githubFront: "https://github.com/TimBERNIC/TedVin-frontend",
    githubBack: "https://github.com/TimBERNIC/tedvin-backend",
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
    githubFront: "https://github.com/TimBERNIC/deliveroos-copy-frontend",
    githubBack: "https://github.com/TimBERNIC/deliveroos-copy-backend",
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
    githubFront: "https://github.com/TimBERNIC/portfolio-react",
    githubBack: "",
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
    githubFront: "https://github.com/TimBERNIC/FLETNIX-homepage-front-React",
    githubBack: "",
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
    githubFront: "https://github.com/TimBERNIC/tripatvisor-front-training",
    githubBack: "",
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
    githubFront: "https://github.com/TimBERNIC/Emoji-search",
    githubBack: "",
  },
];

export const linkTab: LinkItem[] = [
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
