import SmallHeading from "../SmallHeading";
import H3 from "../H3";
import Paragraph from "../Paragraph";
import Button from "../Button";
const LeftServices = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2 lg:gap-10">
      <SmallHeading
        title="Bookkeeping"
        bgColor="bg-orange-300"
        textColor="text-orange-700"
      />
      <H3 title=" Efficient bookkeeping solutions for organized financial management" />
      <Paragraph
        title="Efficient bookkeeping, tracking expenses, and managing cash flow."
        text_color="text-gray-500"
      />
      <Button
        title="Learn more"
        display="flex"
        bg="bg-black"
        bgHover="hover:bg-orange-700"
      />
    </div>
  );
};
export default LeftServices;
