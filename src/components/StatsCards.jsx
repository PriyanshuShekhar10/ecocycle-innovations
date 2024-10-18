import { useState, useEffect } from "react";
import styles from "./StatsCards.module.css";

const StatsCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      title: "3D Printing Filaments",
      description: `Our eco-friendly 3D printing filaments are crafted from 100% recycled
      plastics, offering exceptional performance and durability. Ideal for
      prototyping, production, and design, these filaments meet the needs of
      manufacturers seeking sustainable alternatives without compromising
      quality. Custom solutions are available to suit specific industrial
      requirements.`,
    },
    {
      title: "Sustainability and Recycling Process",
      description: `At Ecocycle Innovations, we utilize advanced recycling technologies to
      transform post-consumer and post-industrial plastic waste into
      high-performance materials. Our closed-loop process ensures minimal
      waste, contributing to a sustainable manufacturing ecosystem. By
      reducing plastic waste and lowering carbon emissions, we help
      businesses achieve their environmental goals while maintaining product
      excellence.`,
    },
    {
      title: "Partnerships and Custom Solutions",
      description: `Partner with Ecocycle Innovations for tailored material solutions
      across industries such as manufacturing, packaging, automotive, and
      textiles. We provide expert guidance on integrating recycled materials
      into your production processes, ensuring that your products meet both
      sustainability and quality standards. Our collaborative approach helps
      businesses transition to more sustainable practices efficiently.`,
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [cards.length]);


  const displayedCards = [
    cards[activeIndex],
    cards[(activeIndex + 1) % cards.length],
    cards[(activeIndex + 2) % cards.length],
  ];

  return (
    <div className={styles.carousel}>
      {displayedCards.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            index === 1 ? styles.activeCard : ""
          }`}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
