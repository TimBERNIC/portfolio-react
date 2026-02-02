import LinkToSite from "./LinkToSite.tsx";
import type { LinkItem } from "../../lib/data/data";

interface FooterProps {
  linkTab: LinkItem[];
}

const Footer = ({ linkTab }: FooterProps) => {
  return (
    <footer>
      <div className="link-box">
        {linkTab.map((linkElement) => (
          <LinkToSite key={linkElement.name} linkElement={linkElement} />
        ))}
      </div>
      <div className="support-box">
        This port-folio was made with
        <span className="footer-caracters"> React </span> by
        <a
          href="https://github.com/TimBERNIC"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-caracters">
          TimBERNIC
        </a>
      </div>
    </footer>
  );
};

export default Footer;
