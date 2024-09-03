import styles from "./EcoPromo.module.css";
import greenBagImage from "../assets/EcoPromo.png"; // Update with the correct path

const EcoPromo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <img src={greenBagImage} alt="Greeny Bags" className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>Key Highlights:</h1>
        <p className={styles.paragraph}></p>
        <ul className={styles.paragraph}>
          <li>
            Sustainable Materials: Advanced products derived from recycled
            plastics.
          </li>
          <li>
            Innovative Technology: Leveraging cutting-edge recycling processes
            for durable manufacturing materials.
          </li>
          <li>
            Eco-Efficient: Lowering your carbon footprint with premium,
            eco-friendly alternatives.
          </li>
        </ul>
        <button className={styles.button}> Partner With Us</button>
      </div>
    </section>
  );
};

export default EcoPromo;
