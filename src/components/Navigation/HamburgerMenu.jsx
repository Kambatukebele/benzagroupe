const HamburgerMenu = ({ handleNavigation, navSmallDevice }) => {
  return (
    <div
      onClick={handleNavigation}
      className={`${!navSmallDevice ? "block" : "hidden"}`}
    >
      <svg
        width="44px"
        height="44px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 7L7 7M20 7L11 7"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
          <path
            d="M20 17H17M4 17L13 17"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
          <path
            d="M4 12H7L20 12"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default HamburgerMenu;
