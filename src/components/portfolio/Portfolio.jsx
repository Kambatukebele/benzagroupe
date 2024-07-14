import UpPortfolio from "./UpPortfolio";
import DownPortfolio from "./DownPortfolio";

const Portfolio = () => {
  return (
    <section className="w-full h-fit bg-gray py-10 lg:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpPortfolio />
        <DownPortfolio />
      </div>
    </section>
  );
};
export default Portfolio;
