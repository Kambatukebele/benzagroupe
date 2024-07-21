const Label = ({ labelTitle, labelHtmlFor }) => {
  return (
    <label className="block text-gray-600 text-sm" htmlFor={`${labelHtmlFor}`}>
      {labelTitle}
    </label>
  );
};
export default Label;
