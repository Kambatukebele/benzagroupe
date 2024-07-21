const BottomFooter = () => {
  return (
    <div className="w-full py-4 flex flex-col justify-center items-center gap-4">
      <span className="block text-center text-sm text-white lg:text-base">
        Copyright&copy;{new Date().getFullYear()} All Rights Reserved. Coded by{" "}
        <a
          className="inline-block text-red-700"
          href="https://kambatukebele.com/"
        >
          Kamba Tukebele
        </a>{" "}
        and
        <a
          className="inline-block text-red-700 ml-1"
          href="https://webizycode.com/"
        >
          WebizyCode
        </a>
      </span>
      <div>
        <span className="mr-5 text-sm text-white">
          <a href="#">Terms & Conditions</a>
        </span>
        <span className="mr-5 text-sm text-white">
          <a href="#">Privacy Policy</a>
        </span>
      </div>
    </div>
  );
};
export default BottomFooter;
