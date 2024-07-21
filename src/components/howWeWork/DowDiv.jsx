import { howWeWorkSections } from "../../data";
import CardHowWeWork from "./CardHowWeWork";
const DowDiv = () => {
  return (
    <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {howWeWorkSections.map((howWeWorkSection) => {
        return <CardHowWeWork {...howWeWorkSection} />;
      })}
    </div>
  );
};
export default DowDiv;
