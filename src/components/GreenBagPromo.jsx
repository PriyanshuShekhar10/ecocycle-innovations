import styles from "./GreenBagPromo.module.css";
import frontpageImage from "../assets/frontpage1.png"; // Update with the correct path

const GreenBagPromo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Empowering Sustainable Manufacturing with Recycled Materials</h1>
        <p>
        Ecocycle Innovations transforms waste materials into eco-friendly products, 
        focusing on sustainability and circular economy solutions for a greener future.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={frontpageImage} alt="Greeny Bags" className={styles.image} />
      </div>
    </section>
  );
};

export default GreenBagPromo;
