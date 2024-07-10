import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//Accept title, bgHover, bg, display(hidden or flex) as Props
const Button = ({ title, bgHover, bg, display }) => {
  return (
    <button
      className={`${display} justify-center items-center gap-2 px-4 h-[50px] ${bg} rounded-xl ${bgHover} hover:delay-150 hover:ease-in-out`}
    >
      <a href="#" className="text-white block text-sm capitalize font-normal">
        {title}
      </a>
      <span className="text-white text-base">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </button>
  );
};
export default Button;
