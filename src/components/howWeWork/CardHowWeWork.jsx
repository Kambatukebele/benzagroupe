import Button from "../Button";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const CardHowWeWork = ({ id, img, title, para, link }) => {
  return (
    <div
      key={id}
      className={`w-[284px] h-fit ${img}  bg-center bg-no-repeat bg-cover flex flex-col justify-center items-start gap-4 px-4 py-10 rounded-xl sm:w-full sm:h-[400px]`}
    >
      <h4 className="text-white text-2xl font-semibold">{title}</h4>
      <Paragraph title={para} text_color="text-white" />
      <Button
        title="read more"
        bg="bg-red"
        textColor="text-white"
        display="flex"
        link={link}
      />
    </div>
  );
};
export default CardHowWeWork;
