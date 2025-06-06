import React from "react";
import emailLogo from "../../assets/img/mail.jpg";
import githubLogo from "../../assets/img/github.png";
import linkedinLogo from "../../assets/img/linkedin.png";
import CV from "../../assets/img/CV.pdf";
import { FaDownload } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import "../contact/Contact.css";
const Contact = () => {
  return (
    <div className="global-contact-box container">
      <h2>Contact</h2>
      <p className="contact-description">
        N'hésitez pas à me contacter ou me joindre pour tout projets sur :{" "}
      </p>
      <div className="contact-box">
        <p>
          <div className="contact-logo-box">
            <img src={emailLogo} alt="logo-mail" />
          </div>
          : <a href="mailto:nicolet.t@hotmail.fr">nicolet.t@hotmail.com</a>
        </p>
        <p>
          <div className="contact-logo-box">
            <img src={githubLogo} alt="logo-git" />
          </div>
          : <a href="https://github.com/TimBERNIC">Github</a>
        </p>
        <p>
          <div className="contact-logo-box">
            <img src={linkedinLogo} alt="logo-linkedin" />
          </div>
          : <a>Linkedin</a>
        </p>
        <div className="cv-box">
          <div className="cv-logo-box">
            <SiReaddotcv />
          </div>{" "}
          :<a href={CV}>Accédez à mon CV</a>
          <a href={CV} download="CV">
            <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
