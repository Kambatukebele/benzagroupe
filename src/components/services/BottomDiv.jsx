import RightServices from "./RightServices";
import LeftServices from "./LeftServices";
import { services } from "../../data";
const BottomDiv = () => {
  return (
    <>
      {services.map((service) => {
        const { id, img, row } = service;
        return (
          <div
            key={id}
            className={`w-full flex flex-col justify-center items-center gap-4 ${row} lg:gap-8`}
          >
            <LeftServices {...service} />
            <RightServices img={img} />
          </div>
        );
      })}
    </>
  );
};
export default BottomDiv;
