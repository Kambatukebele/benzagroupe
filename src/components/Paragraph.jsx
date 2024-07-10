const Paragraph = ({ title, text_position, max_width, text_color }) => {
  return (
    <>
      <p
        className={`text-base ${text_color} font-normal ${text_position} ${max_width}`}
      >
        {title}
      </p>
    </>
  );
};
export default Paragraph;
