import LeftSideHero from "./LeftSideHero";
import RightSideHero from "./RightSideHero";
const Hero = () => {
  return (
    <header className="w-full h-fit bg-red-50 py-6">
      <div className="container mx-auto flex justify-center items-center flex-col gap-6 sm:flex-row">
        <LeftSideHero />
        <RightSideHero />
      </div>
    </header>
  );
};
export default Hero;
