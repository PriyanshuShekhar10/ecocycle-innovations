import "./App.css";
import BelowFooter from "./components/BelowFooter/BelowFooter";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Tile from "./components/Tile/Tile";

const MainSection = () => {
  return (
    <div className="main-section">
      <section className="section-1">
        <h1>This is title</h1>
        <h2>This is subtitle</h2>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <CarouselComponent />
      <MainSection />
      <Tile />
      <Footer />
      <BelowFooter />
    </>
  );
};

export default App;
