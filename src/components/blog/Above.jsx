import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const Above = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading title="Articles" bgColor="bg-red" textColor="text-white" />
      <H2
        title="Insightful financial reads"
        text_position="sm:text-center"
        max_width="sm:w-[550px] lg:w-[800px]"
        textColor="text-darkText"
      />
      <Paragraph
        title="Explore our blog for expert advice, industry insights, and latest trends in finance and accounting."
        text_position="sm:text-center"
        max_width="sm:w-[550px]"
        text_color="text-darkText"
      />
    </div>
  );
};
export default Above;
