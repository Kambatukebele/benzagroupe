import SmallHeading from "../SmallHeading";
import Paragraph from "../Paragraph";
import Button from "../Button";

const LeftAbout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title="Professional Background"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <Paragraph
        title="With years of experience in legal consulting, financial management, and investment advisory, I have developed a nuanced understanding of the complexities and opportunities within these fields. My background includes working with a diverse range of clients, from startups to established enterprises, providing strategic guidance and actionable solutions that address their unique challenges and goals."
        max_width="text-gray-600"
      />
      <SmallHeading
        title="Core Values"
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <Paragraph
        title="My approach is grounded in integrity, professionalism, and a genuine passion for helping clients achieve their objectives. I prioritize building strong, trusting relationships with clients and stakeholders, ensuring open communication and a collaborative approach to problem-solving."
        max_width="text-gray-600"
      />
      <Button
        title="Contact me"
        display="flex"
        bg="bg-red-700 hover:bg-red-800"
        textColor="text-white"
        link="https://calendly.com/nauvidbenza-benzagroupe/30min"
      />
    </div>
  );
};
export default LeftAbout;
