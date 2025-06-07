import React, { useEffect, useState } from "react";
import "../Welcome/Welcome.css";

import { Link, useNavigate } from "react-router-dom";
const Welcome = () => {
  const [color, setColor] = useState("white");
  const navigate = useNavigate();
  setTimeout(() => {
    setColor("black");
  }, 1000);

  setTimeout(() => {
    navigate("/home");
  }, 4000);

  const textClass = `text-contain ${color}`;

  return (
    <Link to="/home" className="welcome-global-div">
      <h1 className={textClass}>
        Bienvenue sur le Portfolio de Timothée Béraudy-Nicolet
      </h1>
    </Link>
  );
};
export default Welcome;
