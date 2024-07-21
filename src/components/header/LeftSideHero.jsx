import Button from "../Button";
import SmallHeading from "../SmallHeading";
import Paragraph from "../Paragraph";
import BulletPoints from "../BulletPoints";

const LeftSideHero = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title="Account experts"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
        Smart solutions. <br /> Bookkipping <br />
        services
      </h1>
      <Paragraph
        title="Unlock financial success with our trusted expertise and personalized services. Unlock financial success with our trusted expertise and personalized services.Unlock financial success with our trusted expertise and personalized services."
        text_color="text-gray-600 lg:w-[500px]"
      />
      <Button
        title="Get a free quote"
        display="flex"
        bg="bg-red-700 hover:bg-red-800"
        textColor="text-white"
      />
      <div className="hidden xl:flex xl:justify-center xl: items-center xl:gap-4">
        <BulletPoints text="Expert help" />
        <BulletPoints text="Proven results" />
        <BulletPoints text="Expert help" />
      </div>
    </div>
  );
};
export default LeftSideHero;
