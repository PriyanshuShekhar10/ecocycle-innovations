import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";

function CarouselComponent() {
  return (
    <div className="carousel_container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuJWdVMwrBTayXoM-cZ_yosdHeCMT-221WR1O16U0yO_lUuhFYbPSYrFc5B8Iit7jmCg&usqp=CAU"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
