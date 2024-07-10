import Button from "../Button";
import SmallHeading from "../SmallHeading";
import Paragraph from "../Paragraph";

const LeftSideHero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title="Account experts"
        bgColor="bg-white"
        textColor="text-orange-700"
      />
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl xl:text-7xl">
        Smart solutions. <br /> Bookkipping <br />
        services
      </h1>
      <Paragraph
        title="Unlock financial success with our trusted expertise and personalized services."
        text_color="text-gray-500"
      />
      <Button
        title="Get a free quote"
        display="flex"
        bg="bg-black"
        bgHover="hover:bg-orange-700"
      />
    </div>
  );
};
export default LeftSideHero;
