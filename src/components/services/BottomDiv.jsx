import RightServices from "./RightServices";
import LeftServices from "./LeftServices";
const Bottom = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row lg:items-start">
      <LeftServices />
      <RightServices />
    </div>
  );
};
export default Bottom;
