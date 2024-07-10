import Approach from "./components/approach/Approach";
import Hero from "./components/header/Hero";
import HowWeWork from "./components/howWeWork/HowWeWork";
import Nav from "./components/Navigation/Nav";
import Services from "./components/services/Services";

const App = () => {
  return (
    <main className="font-inter">
      <Nav />
      <Hero />
      <Approach />
      <HowWeWork />
      <Services />
    </main>
  );
};

export default App;
