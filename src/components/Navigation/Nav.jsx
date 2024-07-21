import { useState } from "react";
import benzaLogo from "../../assets/images/benzaLogo.png";
import Logo from "../Logo";
import Ul from "./Ul";
import MenuOnSmallDevice from "./MenuOnSmallDevice";
import Button from "../Button";

const Nav = () => {
  const [navSmallDevice, setNavSmallDevice] = useState(false);
  const handleNavigation = () => {
    setNavSmallDevice(!navSmallDevice);
  };
  return (
    <nav className="w-full h-fit py-4 bg-gray-50  relative">
      <div className="container mx-auto flex  justify-between items-center">
        <Logo
          img={benzaLogo}
          widthBlock="lg:w-[200px]"
          widthImage="w-[160px]"
        />
        <MenuOnSmallDevice
          navSmallDevice={navSmallDevice}
          handleNavigation={handleNavigation}
        />
        <Ul navSmallDevice={navSmallDevice} />
        <div className="hidden lg:w-[200px] lg:flex lg:justify-end lg:items-center">
          <Button
            title="Get a free quote"
            display="flex"
            bg="bg-red-700 hover:bg-red-800"
            textColor="text-white"
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
