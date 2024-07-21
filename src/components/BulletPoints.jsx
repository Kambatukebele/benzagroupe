import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BulletPoints = ({ text }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <span className="text-white bg-red-700 rounded-full w-5 h-5 text-xs flex justify-center items-center">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className="block text-sm font-normal capitalize text-gray-600 lg:text-base ">
          {text}
        </span>
      </div>
    </>
  );
};
export default BulletPoints;
