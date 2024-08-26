import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  return (
    <header className={styles.header}>
      <h3>LOGO</h3>
      <nav ref={navRef} className={styles.nav}>
        <a href="/#" className={styles.navLink}>
          Home
        </a>
        <a href="/#" className={styles.navLink}>
          About
        </a>
        <a href="/#" className={styles.navLink}>
          Our Network
        </a>
        <a href="/#" className={styles.navLink}>
          Blog
        </a>
        <a href="/#" className={styles.navLink}>
          Contact
        </a>
        {
          <button
            className={`${styles.navBtn} ${styles.navCloseBtn}`}
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        }
      </nav>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
