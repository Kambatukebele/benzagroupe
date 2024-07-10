import { useState } from "react";
import benzaLogo from "../../assets/images/benzaLogo.jpeg";
import Logo from "./Logo";
import Ul from "./Ul";
import Button from "./Button";
import MenuOnSmallDevice from "./MenuOnSmallDevice";

export const Nav = () => {
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
        <Button />
      </div>
    </nav>
  );
};
