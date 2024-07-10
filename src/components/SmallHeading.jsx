const SmallHeading = ({ title, bgColor, textColor }) => {
  return (
    <>
      <h6
        className={`w-[157px] h-[30px] flex justify-center items-center text-center capitalize text-sm ${textColor}  ${bgColor} rounded-md font-semibold`}
      >
        {title}
      </h6>
    </>
  );
};
export default SmallHeading;
