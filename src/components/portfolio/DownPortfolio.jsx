import CardPortfolio from "./CardPortfolio";
import { portfolios } from "../../data";
const DownPortfolio = () => {
  return (
    <div className="flex w-full justify-start items-center gap-2 overflow-auto whitespace-break-spaces">
      {portfolios.map((portfolio) => {
        return <CardPortfolio key={portfolio.id} {...portfolio} />;
      })}
    </div>
  );
};
export default DownPortfolio;
