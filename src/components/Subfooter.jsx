import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Subfooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaYoutube />
        <FaPinterestP />
      </div>
      <p className={styles.copyright}>Copyright © 2022 EcoCycle Innovations.</p>
      <div className={styles.scrollTop} onClick={scrollToTop}>
        <span className={styles.arrowUp}>&uarr;</span>
      </div>
    </footer>
  );
};

export default Subfooter;
