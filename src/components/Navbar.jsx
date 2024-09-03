import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import styles from "./Navbar.module.css";

// Set the root element for the modal
Modal.setAppElement("#root");

function Navbar() {
  const navRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className={styles.header}>
      <h3>LOGO</h3>
      <nav ref={navRef} className={styles.nav}>
        <a href="/#" className={styles.navLink}>
          Home
        </a>
        <a href="/#" className={styles.navLink} onClick={openModal}>
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
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="About Us"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseBtn} onClick={closeModal}>
          &times;
        </button>
        <div className={styles.modalBody}>
          <h2>About Us</h2>
          <p>
            <strong>Who We Are:</strong> Ecocycle Innovations is at the
            forefront of sustainable manufacturing, specializing in converting
            recycled plastics into durable, high-performance materials. We
            collaborate with forward-thinking businesses that prioritize
            environmental responsibility without compromising on quality or
            efficiency.
          </p>
          <p>
            <strong>Our Mission:</strong> To reshape how industries use plastics
            by delivering recycled, sustainable materials that drive innovation,
            enhance productivity, and reduce environmental harm.
          </p>
          <p>
            <strong>Our Vision:</strong> A future where waste becomes a
            resource, and industries operate with circular, sustainable
            practices.
          </p>
          <p>
            <strong>Core Values:</strong>
          </p>
          <ul>
            <li>
              <strong>Sustainability:</strong> We are committed to transforming
              waste into valuable products.
            </li>
            <li>
              <strong>Innovation:</strong> Utilizing the latest technology to
              create high-performance, eco-friendly materials.
            </li>
            <li>
              <strong>Quality:</strong> Ensuring that every product meets the
              highest industry standards.
            </li>
            <li>
              <strong>Collaboration:</strong> Working closely with partners to
              support their sustainability goals.
            </li>
          </ul>
        </div>
      </Modal>
    </header>
  );
}

export default Navbar;
