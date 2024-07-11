import Above from "./Above";
import Below from "./Below";
const Blog = () => {
  return (
    <section className="w-full h-fit bg-blue_100 py-10 lg:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <Above />
        <Below />
      </div>
    </section>
  );
};
export default Blog;
