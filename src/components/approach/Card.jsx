import Paragraph from "../Paragraph";
import H4 from "../H4";

const Card = ({ id, icon, title, paragraph }) => {
  return (
    <div
      key={id}
      className="w-full h-fit bg-white shadow-xl rounded-xl p-6 flex flex-col justify-center items-start gap-4"
    >
      <span className="bg-red-700 rounded-xl p-5 w-[58px] h-[58px] flex justify-center items-center text-2xl text-white">
        {icon}
      </span>
      <H4 title={title} />
      <Paragraph title={paragraph} text_color="text-gray-600" />
    </div>
  );
};
export default Card;
