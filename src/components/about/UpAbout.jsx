import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const UpAbout = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="About me"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="Simplify your finances and grow your business"
        text_position="sm:text-center"
        max_width="sm:w-[450px] lg:w-[700px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="Choose us for accuracy, reliability, personalized service, proactive guidance, innovative solutions, and client-centric focus."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpAbout;
