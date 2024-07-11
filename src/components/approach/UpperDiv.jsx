import Paragraph from "../Paragraph";
import SmallHeading from "../SmallHeading";
import H2 from "../H2";

const UpperDiv = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="Our Approach"
        bgColor="bg-blue_100"
        textColor="text-darkText"
      />
      <H2
        title="Simplify your finances and grow your business"
        text_position="sm:text-center"
        max_width="sm:w-[450px] lg:w-[700px]"
        textColor="text-black"
      />
      <Paragraph
        title="Choose us for accuracy, reliability, personalized service, proactive guidance, innovative solutions, and client-centric focus."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-500"
      />
    </div>
  );
};
export default UpperDiv;
