import { useEffect, useState } from "react";
import logoCS from "../../assets/img/photoCS.png";
import "./Home.css";

const Home = ({ langageTab }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    const transition = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      setTimeout(() => {
        setHomeVisible(true);
      }, 1500);
    };

    transition();
  });
  return isLoading ? (
    <div className="home-page-transition"></div>
  ) : (
    <div
      className={!homeVisible ? "global-home-page" : "global-home-page static"}>
      <div
        className={
          homeVisible
            ? "home-page container homeVisible"
            : "home-page container"
        }>
        <section className="presentation-box">
          <div className="picture-box">
            <img src={logoCS} alt="photo de profil" />
          </div>
          <div className="description-box">
            <p>
              <span className="weight">
                Developpeur Web & Mobile en formation
              </span>
              , anciennement Psychomotricien-thérapeute et Musicien
              professionnel. Je suis actuellement une formation intensive à
              l'école{" "}
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
              Encadré par plusieurs développeurs professionnels depuis plus d'un
              an, je me passionne pour le code qui ouvre un champ des possibles
              pour moi, mais peut-être aussi pour vous?
            </p>
          </div>
        </section>
        <section className="languages-techno-box">
          <h2>Languages et technologies </h2>
          <div className="languages-box">
            {langageTab.map((langageElement, index) => {
              return (
                <div key={index} className="language-box">
                  <div className="language-logo-box">
                    <img src={langageElement.logo} alt="" />
                  </div>
                  <h3>{langageElement.name}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
