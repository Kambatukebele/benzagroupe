import benzaLogo from "../../assets/images/benzaLogo.jpeg";
import HamburgerMenu from "../HamburgerMenu";
import CloseMenu from "../CloseMenu";
import { useState } from "react";

export const Nav = () => {
  const [navSmallDevice, setNavSmallDevice] = useState(false);
  const handleNavigation = () => {
    setNavSmallDevice(!navSmallDevice);
  };
  return (
    <nav className="w-full h-fit py-4 bg-white shadow-sm">
      <div className="container mx-auto flex  justify-between items-center relative">
        <a href="#" className=" h-full block lg:w-2/6">
          <img
            className="w-[120px] h-full object-cover object-center block"
            src={benzaLogo}
            alt="benzagroupe logo"
          />
        </a>
        <div className="flex justify-center items-center lg:hidden">
          <HamburgerMenu
            handleNavigation={handleNavigation}
            navSmallDevice={navSmallDevice}
          />
          <CloseMenu
            handleNavigation={handleNavigation}
            navSmallDevice={navSmallDevice}
          />
        </div>
        <ul
          className={`${
            !navSmallDevice ? "-left-[1000px]" : "-left-20 md:-left-32"
          } absolute top-[60px] bg-red-500 w-[290px] sm:w-[450px] md:w-[650px] h-screen py-4 flex justify-start items-center duration-300 ease-in-out flex-col gap-4 z-10 lg:static lg:z-0 lg:flex-row lg:py-0  lg:justify-center lg:h-fit  lg:w-2/6`}
        >
          <li>
            <a className="text-base font-normal text-black" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-black" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-black" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-black" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden lg:w-2/6 border lg:flex lg:justify-end lg:items-center">
          <button className="hidden lg:block lg:w-[130px]">
            <a href="#">Get a Free quote</a>
          </button>
        </div>
      </div>
    </nav>
  );
};
