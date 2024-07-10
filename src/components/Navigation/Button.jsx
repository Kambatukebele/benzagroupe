import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Button = () => {
  return (
    <div className="hidden lg:w-[200px] lg:flex lg:justify-end lg:items-center">
      <button
        type="button"
        className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2 lg:w-[200px] lg:h-[50px] lg:bg-black lg:px-4 lg:rounded-xl lg:hover:bg-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
      >
        <a
          href="#"
          className="lg:text-white lg:block lg:text-base lg:font-normal"
        >
          Get a Free quote
        </a>
        <span className="lg:text-white lg:text-base">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  );
};
export default Button;
