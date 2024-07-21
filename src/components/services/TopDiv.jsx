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
        title="Accounting solutions that scale"
        text_position="sm:text-center"
        max_width="sm:w-[450px] lg:w-[500px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="Whether you're an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default TopDiv;
