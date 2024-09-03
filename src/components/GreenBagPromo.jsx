import styles from "./GreenBagPromo.module.css";
import greenBagImage from "../assets/greenbag.png"; // Update with the correct path

const GreenBagPromo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Empowering Sustainable Manufacturing with Recycled Plastics</h1>
        <p>
          Ecocycle Innovations partners with businesses to deliver high-quality
          3D printing filaments and industrial threads made from recycled
          plastics—driving sustainable solutions and reducing environmental
          impact.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={greenBagImage} alt="Greeny Bags" className={styles.image} />
      </div>
    </section>
  );
};

export default GreenBagPromo;
