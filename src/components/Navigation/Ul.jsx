const Ul = ({ navSmallDevice }) => {
  return (
    <ul
      className={`${
        !navSmallDevice ? "-left-[1000px]" : "left-0"
      } bg-orange-50 lg:bg-white absolute top-[85px] w-full h-screen py-4 flex justify-start items-center duration-300 ease-in-out flex-col gap-4 z-10 lg:static lg:z-0 lg:flex-row lg:py-0  lg:justify-center lg:h-fit lg:gap-10 lg:w-[600px]`}
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
  );
};
export default Ul;
