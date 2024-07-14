const Image = ({ src, width }) => {
  return (
    <div className={`${width}`}>
      <img
        className="w-full h-full object-cover object-center rounded-lg"
        src={src}
        alt=""
      />
    </div>
  );
};
export default Image;
