import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const DownAbout = () => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-4 sm:flex-row lg:gap-8`}
    >
      <LeftAbout />
      <RightAbout />
    </div>
  );
};
export default DownAbout;
