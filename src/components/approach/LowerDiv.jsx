import Card from "./Card";
import { approaches } from "../../data";

const LowerDiv = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
      {approaches.map((approache) => {
        return <Card {...approache} />;
      })}
    </div>
  );
};
export default LowerDiv;
