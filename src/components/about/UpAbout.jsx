import SmallHeading from "../SmallHeading";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const UpAbout = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col justify-center items-start gap-2 sm:items-center">
      <SmallHeading
        title="About Me"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H2
        title="Passionate Expert in Legal, Financial, and Investment Advisory"
        text_position="sm:text-center"
        max_width="sm:w-[450px] md:w-[550px] lg:w-[900px]"
        textColor="text-gray-800"
      />
      <Paragraph
        title=" My professional journey is marked by a strong track record of delivering tailored solutions that drive success and foster growth."
        text_position="sm:text-center"
        max_width="sm:w-[650px]"
        text_color="text-gray-600"
      />
    </div>
  );
};
export default UpAbout;
