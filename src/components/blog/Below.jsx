import Image from "../Image";
import H4 from "../H4";
import { blogs } from "../../data";
const Below = () => {
  return (
    <div className="w-full grid gap-8 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2">
      {blogs.map((blog) => {
        const { id, title, img, link, published, department } = blog;
        return (
          <a
            href={link}
            key={id}
            className="w-full flex flex-col justify-center items-start gap-4 sm:flex-row sm:items-center sm:justify-start"
          >
            <Image
              width="w-full h-[350px] sm:w-[120px] sm:h-[120px]"
              src={img}
            />
            <div>
              <H4 title={title} />
              <span className="text-darkText font-semibold">
                {published} | <small className="uppercase">{department}</small>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default Below;
