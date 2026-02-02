import type { LinkItem } from "../../lib/data/data";

interface LinkToSiteProps {
  linkElement: LinkItem;
}

const LinkToSite = ({ linkElement }: LinkToSiteProps) => {
  return (
    <div className="link-box2">
      <a href={linkElement.url}>
        <div className="link-logo-box">
          <img src={linkElement.logo} alt="logo" />
        </div>
        <p>{linkElement.name}</p>
      </a>
    </div>
  );
};

export default LinkToSite;
