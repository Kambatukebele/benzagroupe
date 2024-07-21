const H2 = ({ title, text_position, max_width, textColor }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl ${textColor} font-semibold ${text_position} ${max_width}`}
    >
      {title}
    </h2>
  );
};
export default H2;
