import benzaLogoNegative from "../../assets/images/benzaLogoNegative.png";
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import instagram from "../../assets/svg/instagram.svg";
import Logo from "../Logo";
import Paragraph from "../Paragraph";

const UpperFooter = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-4 lg:flex-row lg:items-start lg:justify-between my-5 border-b border-b-gray py-5">
      <div className="w-full flex flex-col justify-center items-start h-fit gap-4 lg:w-2/6">
        <Logo
          img={benzaLogoNegative}
          widthBlock="lg:w-[200px]"
          widthImage="w-[160px]"
        />
        <Paragraph
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus inventore molestiae laborum cupiditate optio!"
          text_color="text-white"
        />
      </div>
      <ul className="w-full flex flex-col justify-center items-start h-fit gap-4 lg:w-2/6">
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4 g:w-2/6">
        <a href="#" className="w-full">
          <img
            className="w-7 h-7 object-cover object-center"
            src={facebook}
            alt=""
          />
        </a>
        <a href="#" className="w-full">
          <img
            className="w-7 h-7 object-cover object-center"
            src={instagram}
            alt=""
          />
        </a>
        <a href="" className="w-full">
          <img
            className="w-7 h-7 object-cover object-center"
            src={linkedin}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default UpperFooter;
