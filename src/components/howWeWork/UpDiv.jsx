import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const UpDiv = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="How We Work"
        bgColor="bg-red-100 text-gray-600"
        textColor="text-gray-600"
      />
      <H2
        title="Tailored Solutions Through a Collaborative and Insightful Process"
        text_position="sm:text-center"
        max_width="sm:w-[550px] md:w-[650px] lg:w-[890px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="Our approach to delivering exceptional services is grounded in a collaborative and insightful process that ensures each client's unique needs are met with precision and care."
        text_position="sm:text-center"
        max_width="sm:w-[550px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpDiv;
