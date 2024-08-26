import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LogoCarousel.module.css";
import logo1 from "../assets/logo1.png"; // Update with the correct path
import logo2 from "../assets/logo2.png"; // Update with the correct path
import logo3 from "../assets/logo3.png"; // Update with the correct path

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={logo1} alt="Logo 1" className={styles.logoImage} />
        </div>
        <div className={styles.slide}>
          <img src={logo2} alt="Logo 2" className={styles.logoImage} />
        </div>
        <div className={styles.slide}>
          <img src={logo3} alt="Logo 3" className={styles.logoImage} />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <p className={styles.description}>
        Get to know us in 120 Seconds, Watch the video!
      </p>
    </div>
  );
};

export default LogoCarousel;
