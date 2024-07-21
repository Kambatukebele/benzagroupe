import Paragraph from "../Paragraph";

const CardHowWeWork = ({ id, img, title, para }) => {
  return (
    <div
      key={id}
      className={`w-[284px] h-fit shadow-lg bg-white flex flex-col justify-center items-start gap-4 px-4 py-10 rounded-xl sm:w-full`}
    >
      <h4 className="text-gray-800 text-2xl font-semibold">{title}</h4>
      <Paragraph title={para} text_color="text-gray-600" />
    </div>
  );
};
export default CardHowWeWork;
