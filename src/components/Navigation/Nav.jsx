import benzaLogo from "../../assets/images/benzaLogo.jpeg";
import HamburgerMenu from "../HamburgerMenu";
import CloseMenu from "../CloseMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const [navSmallDevice, setNavSmallDevice] = useState(false);
  const handleNavigation = () => {
    setNavSmallDevice(!navSmallDevice);
  };
  return (
    <nav className="w-full h-fit py-4 bg-white shadow-sm">
      <div className="container mx-auto flex  justify-between items-center relative">
        <a href="#" className="h-full block lg:w-[200px]">
          <img
            className="w-[160px] h-full object-cover object-center block"
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
          } absolute top-[60px] w-[290px] sm:w-[450px] md:w-[650px] h-screen py-4 flex justify-start items-center duration-300 ease-in-out flex-col gap-4 z-10 lg:static lg:z-0 lg:flex-row lg:py-0  lg:justify-center lg:h-fit lg:gap-10 lg:w-[600px]`}
        >
          <li className="block">
            <a
              className="text-base font-normal text-black lg:hover:text-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="block">
            <a
              className="text-base font-normal text-black lg:hover:text-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="block">
            <a
              className="text-base font-normal text-black lg:hover:text-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
              href="#"
            >
              About
            </a>
          </li>
          <li className="block">
            <a
              className="text-base font-normal text-black lg:hover:text-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden lg:w-[200px] lg:flex lg:justify-end lg:items-center">
          <button
            type="button"
            className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2 lg:w-[200px] lg:h-[50px] lg:bg-black lg:px-4 lg:rounded-xl lg:hover:bg-orange-700 lg:hover:delay-150 lg:hover:ease-in-out"
          >
            <a
              href="#"
              className="lg:text-white lg:block lg:text-base lg:font-normal"
            >
              Get a Free quote
            </a>
            <span className="lg:text-white lg:text-base">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
