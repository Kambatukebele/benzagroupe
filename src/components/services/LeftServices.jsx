import SmallHeading from "../SmallHeading";
import H3 from "../H3";
import Paragraph from "../Paragraph";
import Button from "../Button";
import BulletPoints from "../BulletPoints";
const LeftServices = ({ smallTitle, title, paragraph, points, link }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 sm:w-1/2">
      <SmallHeading
        title={smallTitle}
        bgColor="bg-red-100"
        textColor="text-gray-600"
      />
      <H3 title={title} width="lg:w-[500px]" />
      <Paragraph
        title="Efficient bookkeeping, tracking expenses, and managing cash flow.Efficient bookkeeping, tracking expenses, and managing cash flow.Efficient bookkeeping, tracking expenses, and managing cash flow."
        text_color="text-gray-600"
        max_width="lg:w-[500px]"
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <BulletPoints text={points[0]} />
        <BulletPoints text={points[1]} />
        <BulletPoints text={points[2]} />
      </div>
      <Button
        title="Learn more"
        display="flex"
        bg="bg-red-700"
        textColor="text-white"
      />
    </div>
  );
};
export default LeftServices;
