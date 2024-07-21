const H3 = ({ title, width }) => {
  return (
    <h3 className={`text-xl lg:text-2xl text-gray-800 font-semibold ${width} `}>
      {title}
    </h3>
  );
};
export default H3;
