import About from "./components/about/About";
import Approach from "./components/approach/Approach";
import Blog from "./components/blog/Blog";
import Hero from "./components/header/Hero";
import HowWeWork from "./components/howWeWork/HowWeWork";
import Nav from "./components/Navigation/Nav";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <main className="font-inter">
      <Nav />
      <Hero />
      <Services />
      <Approach />
      <Portfolio />
      <HowWeWork />
      {/* <Blog /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
