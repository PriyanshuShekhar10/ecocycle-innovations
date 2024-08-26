import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header card" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img
            className="nav__logo_img"
            src="https://ecocycleinnovations.com/wp-content/uploads/2023/11/EcoCycle-Innovations-BERNARD-KUS-png.png"
            alt=""
          />
        </a>
        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bi bi-arrow-up-right"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bi bi-arrow-up-right"></i>
                <span>About Us</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bi bi-arrow-up-right"></i>
                <span>Projects</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bi bi-arrow-up-right"></i>
                <span>Studio</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bi bi-arrow-up-right"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <i className="bi bi-x-lg"></i>
          </div>
          {/* <div className="nav__social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <i className="bi bi-dribbble"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="nav__social-link"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div> */}
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
