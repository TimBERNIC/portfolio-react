import React from "react";

const Link = ({ linkElement }) => {
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

export default Link;
