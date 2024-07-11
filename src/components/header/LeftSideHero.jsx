import Button from "../Button";
import SmallHeading from "../SmallHeading";
import Paragraph from "../Paragraph";
import BulletPoints from "../BulletPoints";

const LeftSideHero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title="Account experts"
        bgColor="bg-blue_100"
        textColor="text-darkText"
      />
      <h1 className="text-4xl font-bold text-darkText md:text-5xl lg:text-6xl xl:text-7xl">
        Smart solutions. <br /> Bookkipping <br />
        services
      </h1>
      <Paragraph
        title="Unlock financial success with our trusted expertise and personalized services."
        text_color="text-darkText"
      />
      <Button
        title="Get a free quote"
        display="flex"
        bg="bg-blue"
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
