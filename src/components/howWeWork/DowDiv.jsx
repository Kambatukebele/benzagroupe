import { howWeWorkSections } from "../../data";
import CardHowWeWork from "./CardHowWeWork";
const DowDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit py-4 gap-8 md:flex-row">
      {howWeWorkSections.map((howWeWorkSection) => {
        return <CardHowWeWork {...howWeWorkSection} />;
      })}
    </div>
  );
};
export default DowDiv;
