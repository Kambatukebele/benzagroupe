import Paragraph from "../Paragraph";
import H4 from "../H4";

const Card = ({ id, icon, title, paragraph }) => {
  return (
    <div
      key={id}
      className="w-full flex flex-col justify-center items-start gap-4 md:w-1/3 md:items-start md:justify-between md:h-[320px] xl:justify-around"
    >
      <span className="bg-orange-100 rounded-xl p-5 w-[78px] h-[79px] flex justify-center items-center text-4xl text-orange-500">
        {icon}
      </span>
      <H4 title={title} />
      <Paragraph title={paragraph} text_color="text-gray-500" />
    </div>
  );
};
export default Card;
