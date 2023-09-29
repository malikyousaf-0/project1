import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Faqs from "./Components/Faqs";
import HeroSection from "./Components/HeroSection";
import Menu from "./Components/Menu";
import Testimonial from "./Components/Testimonial";
import Whyme from "./Components/Whyme";
function App() {
  return (
    <>
      <HeroSection />
      <About />
      <Menu />
      <Whyme />
      <Faqs />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
