import { useState } from "react";
import benzaLogo from "../../assets/images/benzaLogo.jpeg";
import Logo from "./Logo";
import Ul from "./Ul";
import MenuOnSmallDevice from "./MenuOnSmallDevice";
import Button from "../Button";

const Nav = () => {
  const [navSmallDevice, setNavSmallDevice] = useState(false);
  const handleNavigation = () => {
    setNavSmallDevice(!navSmallDevice);
  };
  return (
    <nav className="w-full h-fit py-4 bg-white shadow-sm relative">
      <div className="container mx-auto flex  justify-between items-center">
        <Logo benzaLogo={benzaLogo} />
        <MenuOnSmallDevice
          navSmallDevice={navSmallDevice}
          handleNavigation={handleNavigation}
        />
        <Ul navSmallDevice={navSmallDevice} />
        <div className="hidden lg:w-[200px] lg:flex lg:justify-end lg:items-center">
          <Button
            title="Get a free quote"
            display="flex"
            bg="bg-blue"
            textColor="text-white"
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
