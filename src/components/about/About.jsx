import UpAbout from "./UpAbout";
import DownAbout from "./DownAbout";

const About = () => {
  return (
    <section className="w-full h-fit bg-gray py-10 lg:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpAbout />
        <DownAbout />
      </div>
    </section>
  );
};
export default About;
