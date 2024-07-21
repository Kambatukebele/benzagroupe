import UpperFooter from "./UpperFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-gray-950 py-10 lg:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <UpperFooter />
        <BottomFooter />
      </div>
    </footer>
  );
};
export default Footer;
