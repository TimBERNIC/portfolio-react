import React, { useEffect, useState } from "react";
import "../Welcome/Welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  const [color, setColor] = useState("black");

  setTimeout(() => {
    setColor("white");
  }, 1000);

  const textClass = `text-contain ${color}`;

  return (
    <Link to="/home" className="welcome-global-div">
      <div className={textClass}>
        Bienvenue le site Portfolio de Timothée Béraudy-Nicolet
      </div>
    </Link>
  );
};
export default Welcome;
