import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = ({ icon, title, className }) => {
  return (
    <header>
      <Link className="logo-portfolio-box" to="/home">
        PORTFOLIO
      </Link>
    </header>
  );
};

export default Header;
