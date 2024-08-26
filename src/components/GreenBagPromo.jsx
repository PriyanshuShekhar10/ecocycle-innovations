import styles from "./GreenBagPromo.module.css";
import greenBagImage from "../assets/greenbag.png"; // Update with the correct path

const GreenBagPromo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Go Green & Save the Environment</h1>
        <p>
          Our <strong>Biodegradable</strong> bags decompose within just{" "}
          <strong>180 days</strong> unlike the conventional plastic bags which
          don’t decompose even after hundreds of years.
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
