import Button from "../Button"
const Ul = ({ navSmallDevice }) => {
  return (
    <ul
      className={`${
        !navSmallDevice ? "-left-[1000px]" : "left-0"
      } bg-red-50 lg:bg-transparent absolute top-[85px] w-full h-screen py-4 flex justify-start items-center duration-300 ease-in-out flex-col gap-4 z-10 lg:static lg:z-0 lg:flex-row lg:py-0  lg:justify-center lg:h-fit lg:gap-10 lg:w-[600px]`}
    >
      
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#services"
        >
          Services
        </a>
      </li>
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#approach"
        >
          Approach
        </a>
      </li>
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#work"
        >
         Work
        </a>
      </li>
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#process"
        >
          Process
        </a>
      </li>
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#about"
        >
          About
        </a>
      </li>
      <li className="block">
        <a
          className="text-base font-normal text-gray-600 lg:hover:text-red-700 lg:hover:delay-150 lg:hover:ease-in-out"
          href="#contact"
        >
          Contact
        </a>
      </li>
      <Button title="Free Consultation" display="flex bg-red-700 text-white lg:hidden" link="https://calendly.com/nauvidbenza-benzagroupe/30min?month=2024-07" />
    </ul>
  );
};
export default Ul;
