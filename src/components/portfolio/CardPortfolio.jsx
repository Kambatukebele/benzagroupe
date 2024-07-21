import Image from "../Image";
const CardPortfolio = ({ img, title }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={img} width="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]" />
      <div className="py-3 px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center rounded-lg">
        {title}
      </div>
    </div>
  );
};
export default CardPortfolio;
