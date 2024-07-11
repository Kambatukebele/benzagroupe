import About from "./components/about/About";
import Approach from "./components/approach/Approach";
import Blog from "./components/blog/Blog";
import Hero from "./components/header/Hero";
import HowWeWork from "./components/howWeWork/HowWeWork";
import Nav from "./components/Navigation/Nav";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main className="font-inter">
      <Nav />
      <Hero />
      <Approach />
      <HowWeWork />
      <Services />
      <Blog />
      <About />
      <Footer />
    </main>
  );
};

export default App;
