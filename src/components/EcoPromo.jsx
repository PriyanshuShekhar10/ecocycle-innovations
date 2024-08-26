import styles from "./EcoPromo.module.css";
import greenBagImage from "../assets/EcoPromo.png"; // Update with the correct path

const EcoPromo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <img src={greenBagImage} alt="Greeny Bags" className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>
          Go Green with Bio Reform and Boost your Business
        </h1>
        <p className={styles.paragraph}>
          Customers consider green products and companies supporting green
          initiatives to be of superior quality compared to companies that
          aren’t marketed as green.
        </p>
        <p className={styles.paragraph}>
          Businesses can engage their customers through green marketing
          initiatives which is relatively a new concept. They can encourage
          their customers to use their products which are more environmentally
          friendly.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
    </section>
  );
};

export default EcoPromo;
