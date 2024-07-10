import HamburgerMenu from "./HamburgerMenu";
import CloseMenu from "./CloseMenu";
const MenuOnSmallDevice = ({ handleNavigation, navSmallDevice }) => {
  return (
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
  );
};
export default MenuOnSmallDevice;
