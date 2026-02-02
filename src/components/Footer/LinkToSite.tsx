import type { LinkItem } from "../../lib/data/data";

interface LinkToSiteProps {
  linkElement: LinkItem;
}

const LinkToSite = ({ linkElement }: LinkToSiteProps) => {
  return (
    <div className="link-box2">
      <a
        href={linkElement.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Profil ${linkElement.name}`}>
        <div className="link-logo-box">
          <img src={linkElement.logo} alt={`Logo ${linkElement.name}`} />
        </div>
        <p>{linkElement.name}</p>
      </a>
    </div>
  );
};

export default LinkToSite;
