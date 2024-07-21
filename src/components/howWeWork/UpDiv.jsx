import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const UpDiv = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="How We Work"
        bgColor="bg-red-100 text-gray-600"
        textColor="text-white"
      />
      <H2
        title="Innovation redefined: a modern approach to accounting"
        text_position="sm:text-center"
        max_width="sm:w-[550px] lg:w-[800px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="Experience our tech-driven solutions, personalized attention, and client-centered philosophy."
        text_position="sm:text-center"
        max_width="sm:w-[550px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpDiv;
