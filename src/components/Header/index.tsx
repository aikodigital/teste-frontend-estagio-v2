import { Link } from "react-router-dom";
import logo from "../../assets/aiko-logo-branca.png";
import "./index.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo da Aiko" />
      </Link>
    </header>
  );
}

export default Header;
