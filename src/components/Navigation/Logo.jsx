const Logo = ({ benzaLogo }) => {
  return (
    <a href="#" className="h-full block lg:w-[200px]">
      <img
        className="w-[160px] h-full object-cover object-center block"
        src={benzaLogo}
        alt="benzagroupe logo"
      />
    </a>
  );
};
export default Logo;
