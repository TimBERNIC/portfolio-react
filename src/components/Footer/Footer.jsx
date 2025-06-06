import LinkToSite from "./LinkToSite";

const Footer = ({ linkTab }) => {
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
