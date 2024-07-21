const SmallHeading = ({ title, bgColor, textColor }) => {
  return (
    <>
      <h6
        className={`h-[30px] px-2 flex justify-center items-center text-center capitalize text-sm ${textColor}  ${bgColor} rounded-md font-semibold`}
      >
        {title}
      </h6>
    </>
  );
};
export default SmallHeading;
