import Button from "../Button";
import SmallHeading from "../SmallHeading";
import Paragraph from "../Paragraph";
import BulletPoints from "../BulletPoints";

const LeftSideHero = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title="Holistic Business Compliance Solutions"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl xl:text-6xl">
        Strategic Advisory in Legal and Financial Domains
      </h1>
      <Paragraph
        title="Expert Consulting for Legal and Financial Excellence delivers comprehensive analysis and strategic planning to navigate regulatory landscapes and enhance financial health."
        text_color="text-gray-600 lg:w-[500px]"
      />
      <Button
        title="Free consultation"
        display="flex"
        bg="bg-red-700 hover:bg-red-800"
        textColor="text-white"
        link="https://calendly.com/nauvidbenza-benzagroupe/30min"
      />
      <div className="hidden xl:flex xl:justify-center xl: items-center xl:gap-4">
        <BulletPoints text="Investments" />
        <BulletPoints text="Legal services" />
        <BulletPoints text="Finance expert" />
      </div>
    </div>
  );
};
export default LeftSideHero;
