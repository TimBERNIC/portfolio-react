import LinkToSite from "./LinkToSite";
import type { LinkItem } from "../../lib/data/data";

interface FooterProps {
  linkTab: LinkItem[];
}

const Footer = ({ linkTab }: FooterProps) => {
  return (
    <footer>
      <div className="link-box">
        {linkTab.map((linkElement, index) => {
          return <LinkToSite key={index} linkElement={linkElement} />;
        })}
      </div>
      <div className="support-box">
        This port-folio was made with
        <span className="footer-caracters"> React </span> by
        <a href="https://github.com/TimBERNIC" className="footer-caracters">
          TimBERNIC
        </a>
      </div>
    </footer>
  );
};

export default Footer;
