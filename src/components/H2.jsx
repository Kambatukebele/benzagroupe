const H2 = ({ title, text_position, max_width, textColor }) => {
  return (
    <h2
      className={`text-[26px] md:text-[34px] lg:text-[47px] ${textColor} font-semibold ${text_position} ${max_width}`}
    >
      {title}
    </h2>
  );
};
export default H2;
