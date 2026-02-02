import { useRef } from "react";
import { useVisibleOnMount } from "../../hooks/useVisibleOnMount";
import logoCS from "../../assets/img/photoCS.png";
import "./Home.css";
import type { LangageItem } from "../../lib/data/data";

interface HomeProps {
  langageTab: LangageItem[];
}

const Home = ({ langageTab }: HomeProps) => {
  const isVisible = useVisibleOnMount(500);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "prev" | "next") => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = 150;
    const gap = 16;
    const step = cardWidth + gap;
    el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <div
      className={
        isVisible ? "home-page container visible" : "home-page container"
      }>
      <section className="presentation-box">
        <div className="picture-box">
          <img src={logoCS} alt="Photo de profil Timothée Béraudy-Nicolet" />
        </div>
        <div className="description-box">
          <p>
            <span className="weight">
              Developpeur Web & Mobile en formation
            </span>
            , anciennement Psychomotricien-thérapeute et Musicien professionnel.
            Je suis actuellement une formation intensive à l'école{" "}
            <a className="weight link" href="https://www.lereacteur.io/">
              Le Reacteur
            </a>{" "}
            après une année de formation autodidacte mentorée.
          </p>
          <p>
            J'ai la passion de la technologie hardware, software et du jeu de
            rôle (dont j'ai le plaisir de masteriser des tablées). <br />
          </p>
          <p>
            Je pratique à ce jour plusieurs langages et technologies. Je n'ai de cesse que
            d'apprendre de nouveaux langages et de progresser dans ceux que je
            maitrise déjà.
          </p>
          <p>
            Travaillant actuellement pour l'entreprise <a href="https://www.fdti.eu/" className="weight link">FDTI Consulting</a>, je me passionne pour le code qui ouvre un champ des possibles
            pour moi, et ne cèsse d'apprendre de nouvelles technologies. <br />
          </p>
           <p>Je recherche actuellement une alternance (orientée Développeur IA) à partir d'Avril 2026 et/ou des projets freelances.</p> 
        </div>
      </section>
      <section className="languages-techno-box">
        <h2>Langages et technologies</h2>
        <div className="carousel-wrap">
          <button
            type="button"
            className="carousel-btn carousel-btn-prev"
            onClick={() => scrollCarousel("prev")}
            aria-label="Technologies précédentes">
            ‹
          </button>
          <div ref={carouselRef} className="languages-carousel">
            {langageTab.map((langageElement) => {
              const boxClass = langageElement.changedclass
                ? `language-logo-box ${langageElement.changedclass}`
                : "language-logo-box";
              return (
                <div key={langageElement.name} className="carousel-item">
                  <div className={boxClass}>
                    <img src={langageElement.logo} alt={`Logo ${langageElement.name}`} />
                  </div>
                  <h3>{langageElement.name}</h3>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="carousel-btn carousel-btn-next"
            onClick={() => scrollCarousel("next")}
            aria-label="Technologies suivantes">
            ›
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
