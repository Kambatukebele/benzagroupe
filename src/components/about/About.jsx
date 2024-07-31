import UpAbout from "./UpAbout";
import DownAbout from "./DownAbout";

const About = () => {
  return (
    <section className="w-full h-fit bg-gray-50 py-10 lg:py-20" id="about">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpAbout />
        <DownAbout />
      </div>
    </section>
  );
};
export default About;
