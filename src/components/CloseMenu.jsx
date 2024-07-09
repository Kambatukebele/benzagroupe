const CloseMenu = ({ handleNavigation, navSmallDevice }) => {
  return (
    <div
      onClick={handleNavigation}
      className={`${navSmallDevice ? "block" : "hidden"}`}
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
            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
          <path
            d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default CloseMenu;
