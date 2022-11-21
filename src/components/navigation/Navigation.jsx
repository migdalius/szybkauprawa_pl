import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <a href="/">
        <img src="../img/logo.png" alt="" className="nav-logo" />
      </a>
      <nav ref={navRef}>
        <a href="https://allegro.pl/uzytkownik/Akadama" target="_blank">
          Kup zestaw
        </a>
        {/* <a href="/zestawy-do-uprawy">Zestawy do uprawy</a> */}

        <Link to="/zestawy-do-uprawy">Zestawy do uprawy</Link>

        <Link to="/instrukcje">Instrukcje uprawy</Link>

        <Link to="/b2b/login">B2B</Link>

        <Link to="/kontakt">Kontakt</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navigation;
