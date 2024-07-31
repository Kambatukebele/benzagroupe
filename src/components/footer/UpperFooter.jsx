import benzaLogo from "../../assets/images/benzaLogo.png";
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
          img={benzaLogo}
          widthBlock="lg:w-[200px]"
          widthImage="w-[160px]"
        />
        <Paragraph
          title="Expert Consulting for Legal and Financial Excellence delivers comprehensive analysis and strategic planning to navigate regulatory landscapes and enhance financial health."
          text_color="text-white"
        />
      </div>
      <ul className="w-full flex flex-col justify-center items-start h-fit gap-4 lg:w-2/6">
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#services">Services</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#approach">Approach</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#work">Work</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#process">Process</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#about">About</a>
        </li>
        <li className="text-sm lg:text-base text-white font-normal">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4 g:w-2/6">
        <a href="https://www.linkedin.com/in/nauvid-beniol-benza-sehossolo-0166a6128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-full">
          <img
            className="w-10 h-10 object-cover object-center"
            src={linkedin}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default UpperFooter;
