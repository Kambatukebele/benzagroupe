const Logo = ({ img, widthImage, widthBlock }) => {
  //w-[160px] for the image
  //lg:w-[200px] for the block
  return (
    <a href="#" className={`h-full block ${widthBlock}`}>
      <img
        className={`${widthImage} h-full object-cover object-center block`}
        src={img}
        alt="benzagroupe logo"
      />
    </a>
  );
};
export default Logo;
