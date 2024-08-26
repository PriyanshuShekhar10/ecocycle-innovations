import styles from "./StatsCards.module.css";

const StatsCards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <h3>Emotional Connect</h3>
        <h2>
          72% <span>people</span>
        </h2>
        <p>
          Since Indian consumers are realizing the impact of environmental
          issues and are concerned about their health & safety, 72% Indian
          consumers say that they share emotional connection and feel happy with
          products & companies that perceive sustainability through Eco-friendly
          initiatives.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>

      <div className={`${styles.card} ${styles.highlightCard}`}>
        <h3>Purchasing Pattern</h3>
        <h2>
          79% <span>people</span>
        </h2>
        <p>
          New consumers purchasing pattern is almost 79% consumers are changing
          their purchase preference based on social and environmental impact as
          per the study report by Capgemini Research Institute.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>

      <div className={styles.card}>
        <h3>Eco-friendly</h3>
        <h2>
          88% <span>per month</span>
        </h2>
        <p>
          88% consumers in India prefer Eco-friendly initiatives due to health
          and safety concerns, businesses can build a great brand recall in the
          market. As a counterpart 60% consumers have actually stopped
          purchasing from brands which do not support green.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </div>
  );
};

export default StatsCards;
