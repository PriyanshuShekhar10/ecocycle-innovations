import "./App.css";
import BelowFooter from "./components/BelowFooter/BelowFooter";
import EcoPromo from "./components/EcoPromo";
import Footer from "./components/Footer/Footer";
import GreenBagPromo from "./components/GreenBagPromo";
import LogoCarousel from "./components/LogoCarousel";
import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import Subfooter from "./components/Subfooter";

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
      <GreenBagPromo />
      {/* <Header /> */}
      <EcoPromo />
      <StatsCards />
      <LogoCarousel />
      <Footer />
      <BelowFooter />
      <Subfooter />
    </>
  );
};

export default App;
