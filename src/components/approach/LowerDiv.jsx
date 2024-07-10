import Card from "./Card";
import { approaches } from "../../data";

const LowerDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit py-4 gap-8 md:flex-row">
      {approaches.map((approache) => {
        return <Card {...approache} />;
      })}
    </div>
  );
};
export default LowerDiv;
