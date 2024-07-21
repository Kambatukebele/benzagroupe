const H4 = ({ title, h4ExtraClass }) => {
  return (
    <h4 className={`text-lg lg:text-2xl font-semibold ${h4ExtraClass}`}>
      {title}
    </h4>
  );
};
export default H4;
