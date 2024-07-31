import Bottom from "./BottomDiv";
import TopDiv from "./TopDiv";

const Services = () => {
  return (
    <section className="w-full h-fit bg-white py-10 lg:py-20" id="services">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <TopDiv />
        <Bottom />
      </div>
    </section>
  );
};
export default Services;
