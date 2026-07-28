import { Link } from "react-router-dom";
export default function BlogCard({ posts, view }) {
  return (
    <>
      <Link
        to={"/blog"}
        className={`group bg-[#161616] border border-gray-800 rounded-2xl overflow-hidden shadow-2xs ${
          view === "list" ? "flex flex-row" : ""
        }`}
      >
        <div className="overflow-hidden">
          <img
            className="w-full h-62 object-cover  transition-transform duration-500 group-hover:scale-105 "
            src={posts.image}
            alt={posts.title}
          />
        </div>

        <div className="p-6 text-right">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>
              <i className="fa-regular fa-clock ml-2"></i>
              {posts.readTime}
            </span>
            <i className="fa-solid fa-circle text-gray-400 text-[6px]"></i>
            <span>{posts.date}</span>
          </div>
          <h2 className="text-white text-xl font-bold mt-5 transition-colors duration-300 group-hover:text-orange-400">
            {posts.title}
          </h2>
          <p className="text-gray-400 text-[14px] leading-7 mt-4">
            {posts.excerpt}
          </p>
          <hr className="border-gray-800 my-6" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <img
                src={posts.author.avatar}
                alt={posts.author.name}
                className="rounded-full object-cover w-10 h-10"
              />
              <div className="p-1">
                <h3 className="text-white text-5xs font-bold">
                  {posts.author.name}
                </h3>
                <span className="text-gray-400 text-sm">
                  {posts.author.role}
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#53331D] flex justify-center items-center border-orange-400 group-hover:bg-orange-400  ">
              <i className="fa-solid fa-angle-left text-orange-400 text-[16px]  group-hover:text-white"></i>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
