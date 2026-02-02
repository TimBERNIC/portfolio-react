import { useVisibleOnMount } from "../../hooks/useVisibleOnMount";
import emailLogo from "../../assets/img/mail.jpg";
import githubLogo from "../../assets/img/github.png";
import linkedinLogo from "../../assets/img/linkedin.png";
import CV from "../../assets/img/CV.pdf";
import { FaDownload } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import "./Contact.css";

const Contact = () => {
  const isVisible = useVisibleOnMount(500);

  return (
    <div
      className={
        isVisible
          ? "global-contact-box container visible"
          : "global-contact-box container"
      }>
      <h2>Contact</h2>
      <p className="contact-description">
        N'hésitez pas à me contacter ou me joindre pour tout projets sur :{" "}
      </p>
      <div className="contact-box">
        <div className="contact-logo-global-box">
          <a href="mailto:nicolet.t@hotmail.fr" className="contact-logo-box" aria-label="Envoyer un email">
            <img src={emailLogo} alt="Icône email" />
          </a>
          <a href="https://github.com/TimBERNIC" className="contact-logo-box" aria-label="Profil GitHub">
            <img src={githubLogo} alt="Logo GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/timothée-nicolet-8b04a8329"
            className="contact-logo-box"
            aria-label="Profil LinkedIn">
            <img src={linkedinLogo} alt="Logo LinkedIn" />
          </a>
        </div>
        <div className="cv-box">
          <div className="cv-logo-box">
            <SiReaddotcv />
          </div>
          <span className="cv-label">Mon CV</span>
          <a
            href={CV}
            download="CV_Timothee_BERAUDY-NICOLET.pdf"
            className="cv-download-btn"
            aria-label="Télécharger le CV (PDF)">
            <FaDownload aria-hidden="true" />
            <span>Télécharger le CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
