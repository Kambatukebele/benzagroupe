import UpPortfolio from "./UpPortfolio";
import DownPortfolio from "./DownPortfolio";

const Portfolio = () => {
  return (
    <section className="w-full h-fit bg-white py-10 lg:py-20" id="work">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpPortfolio />
        <DownPortfolio />
      </div>
    </section>
  );
};
export default Portfolio;
