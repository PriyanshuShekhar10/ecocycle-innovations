import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <label htmlFor="" className={styles.logo}>
          Logo
        </label>

        <ul className={styles.navItems}>
          <li>
            <a className={styles.navLink} href="#">
              About Us
            </a>
            <a className={styles.navLink} href="#">
              Our Network
            </a>
            <a className={styles.navLink} href="#">
              Blog
            </a>
            <a className={styles.navLink} href="#">
              Contact
            </a>
            <a className={styles.navLink} href="#">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
