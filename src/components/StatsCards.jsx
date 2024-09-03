import styles from "./StatsCards.module.css";

const StatsCards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <h3>3D Printing Filaments</h3>
        <p>
          Our eco-friendly 3D printing filaments are crafted from 100% recycled
          plastics, offering exceptional performance and durability. Ideal for
          prototyping, production, and design, these filaments meet the needs of
          manufacturers seeking sustainable alternatives without compromising
          quality. Custom solutions are available to suit specific industrial
          requirements.
        </p>
      </div>

      <div className={`${styles.card} ${styles.highlightCard}`}>
        <h3>Sustainability and Recycling Process</h3>
        <p>
          At Ecocycle Innovations, we utilize advanced recycling technologies to
          transform post-consumer and post-industrial plastic waste into
          high-performance materials. Our closed-loop process ensures minimal
          waste, contributing to a sustainable manufacturing ecosystem. By
          reducing plastic waste and lowering carbon emissions, we help
          businesses achieve their environmental goals while maintaining product
          excellence.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Partnerships and Custom Solutions</h3>
        <p>
          Partner with Ecocycle Innovations for tailored material solutions
          across industries such as manufacturing, packaging, automotive, and
          textiles. We provide expert guidance on integrating recycled materials
          into your production processes, ensuring that your products meet both
          sustainability and quality standards. Our collaborative approach helps
          businesses transition to more sustainable practices efficiently.
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
