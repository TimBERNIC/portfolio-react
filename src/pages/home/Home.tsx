import { useVisibleOnMount } from "../../hooks/useVisibleOnMount";
import logoCS from "../../assets/img/photoCS.png";
import "./Home.css";
import type { LangageItem } from "../../lib/data/data";

interface HomeProps {
  langageTab: LangageItem[];
}

const Home = ({ langageTab }: HomeProps) => {
  const isVisible = useVisibleOnMount(500);

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
            Je pratique à ce jour <span className="weight">ReactJS</span> et{" "}
            <span className="weight">ReactNative</span>. Je n'ai de cesse que
            d'apprendre de nouveaux langages et de progresser dans ceux que je
            maitrise déjà. <br />
            Travaillant actuellement pour l'entreprise <a href="https://www.fdti.eu/" className="weight link">FDTI Consulting</a>, je me passionne pour le code qui ouvre un champ des possibles
            pour moi, et ne cèsse d'apprendre de nouvelles technologies. <br />
          </p>
           <p>Je recherche actuellement une alternance (orientée Développeur IA) à partir d'Avril 2026 et/ou des projets freelances.</p> 
        </div>
      </section>
      <section className="languages-techno-box">
        <h2>Languages et technologies </h2>
        <div className="languages-box">
          {langageTab.map((langageElement) => {
            const className = langageElement.changedclass
              ? ` ${langageElement.changedclass}`
              : "language-logo-box ";

            return (
              <div key={langageElement.name} className="language-box">
                <div className={className}>
                  <img src={langageElement.logo} alt={`Logo ${langageElement.name}`} />
                </div>
                <h3>{langageElement.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
