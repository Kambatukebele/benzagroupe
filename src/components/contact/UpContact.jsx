import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const UpContact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <SmallHeading
        title="Contact Me"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="How I Can Help Your Business?"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        title="From crafting tailored investment strategies and enhancing financial performance to navigating complex legal landscapes, I provide customized solutions that drive growth, ensure compliance, and optimize your operations."
        text_position="sm:text-center sm:w-[400px] md:w-[550px] text-gray-600"
      />
    </div>
  );
};
export default UpContact;
