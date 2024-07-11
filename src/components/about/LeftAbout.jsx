import SmallHeading from "../SmallHeading";
import H3 from "../H3";
import Paragraph from "../Paragraph";
import Button from "../Button";

const LeftAbout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <H3 title="Learn About me" width="lg:w-[500px]" />
      <Paragraph title="Here is the ParagraphHere is the ParagraphHere is the ParagraphHere is the ParagraphHere is the ParagraphHere is the ParagraphHere is the ParagraphHere is the Paragraph" />
      <Button
        title="Contact me"
        display="flex"
        bg="bg-blue"
        textColor="text-white"
      />
    </div>
  );
};
export default LeftAbout;
