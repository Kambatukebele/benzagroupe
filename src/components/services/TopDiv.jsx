import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const TopDiv = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="Our services"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="Comprehensive Legal, Financial, and Investment Services"
        text_position="sm:text-center"
        max_width="sm:w-[450px] lg:w-[600px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="We provide a full suite of expert advisory services that integrate legal, financial, and investment strategies to help your business thrive in today’s dynamic environment."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default TopDiv;
