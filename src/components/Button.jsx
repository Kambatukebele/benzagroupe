import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//Accept title, bgHover, bg, display(hidden or flex) as Props
const Button = ({ title, bg, display, link, textColor }) => {
  return (
    <button
      className={`${display} justify-center items-center gap-2 px-4 h-[50px] ${bg} rounded-xl  ${textColor} transition duration-300 delay-150 hover:delay-300 hover:shadow-2xl hover:shadow-blue`}
    >
      <a href={link} className="block text-sm capitalize font-normal">
        {title}
      </a>
      <span className="text-white text-base">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </button>
  );
};
export default Button;
