import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const UpContact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <SmallHeading
        title="Take action"
        bgColor="bg-blue"
        textColor="text-white"
      />
      <H2
        title="How I can help your business"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        title="If you're in need of a freelance Shopify developer, want a full Shopify ecommerce websitet!"
        text_position="sm:text-center sm:w-[400px] md:w-[550px]"
      />
    </div>
  );
};
export default UpContact;
