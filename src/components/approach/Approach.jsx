import UpperDiv from "./UpperDiv";
import LowerDiv from "./LowerDiv";
const Approach = () => {
  return (
    <section className="w-full h-fit bg-gray-50 py-10 lg:py-20" id="approach">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpperDiv />
        <LowerDiv />
      </div>
    </section>
  );
};
export default Approach;
