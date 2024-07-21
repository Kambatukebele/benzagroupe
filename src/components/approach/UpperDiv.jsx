import Paragraph from "../Paragraph";
import SmallHeading from "../SmallHeading";
import H2 from "../H2";

const UpperDiv = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="Our Approach"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="Comprehensive, Integrated, and Customized Solutions"
        text_position="sm:text-center"
        max_width="sm:w-[450px] lg:w-[700px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="At the heart of our services is a commitment to delivering comprehensive, integrated, and customized solutions tailored to your unique business needs. "
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpperDiv;
