import Paragraph from "../Paragraph";
import SmallHeading from "../SmallHeading";
import H2 from "../H2";
const UpPortfolio = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="Building Strong Networks"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="Building Strong Networks with Country Authorities, Business Owners, and Entrepreneurs"
        text_position="sm:text-center"
        max_width="sm:w-[550px] md:w-[700px] lg:w-[1000px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title="Our commitment to excellence is exemplified through our strategic connections with country authorities, leading business owners, and influential entrepreneurs."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpPortfolio;
