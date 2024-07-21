import LeftSideHero from "./LeftSideHero";
import RightSideHero from "./RightSideHero";
const Hero = () => {
  return (
    <header className="w-full h-fit bg-red-50 py-6 relative">
      <div className="container mx-auto flex justify-center items-center flex-col gap-6 sm:flex-row">
        <LeftSideHero />
        <RightSideHero />
      </div>
      <div className="w-5 h-5 bg-blue-700 rounded-full shadow-2xl absolute top-0 left-5 animate-upAndDown sm:left-8"></div>
    </header>
  );
};
export default Hero;
