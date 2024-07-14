import Image from "../Image";
const CardPortfolio = ({ img, title }) => {
  return (
    <div className="">
      <Image src={img} width="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]" />
    </div>
  );
};
export default CardPortfolio;
