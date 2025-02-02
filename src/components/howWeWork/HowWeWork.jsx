import UpDiv from "./UpDiv";
import DowDiv from "./DowDiv";

const HowWeWork = () => {
  return (
    <section className="w-full h-fit bg-red-50 py-10 lg:py-20" id="process">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpDiv />
        <DowDiv />
      </div>
    </section>
  );
};
export default HowWeWork;
