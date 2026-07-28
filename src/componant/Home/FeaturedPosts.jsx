import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/Data/Posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data.posts);
    });
  }, []);
  const featuredposts = posts.filter((post) => post.featured);

  return (
    <>
      <section className="bg-black py-20">
        <div className="text-right ">
          <div className="inline-block p-1 ms-16 text-orange-400 border border-[#53331D] rounded-lg bg-[#25160B]">
            <span className="flex items-center gap-2 text-center">
              <i className="fa-solid fa-circle text-orange-400 mr-3 text-[8px]"></i>
              مميز
            </span>
          </div>
          <h1 className="font-bold text-white text-5xl ms-16 mt-10">
            مقالات مختارة
          </h1>
        </div>
        <div className="flex  items-center justify-between  mt-5">
          <p className="text-gray-400 mt-7 ms-16  text-xl mb-12">
            محتوى منتقى لبدء رحلة تعلمك
          </p>

          <Link
            to={"/blog"}
            className="bg-orange-400 me-16 p-2 text-left text-white rounded-lg font-bold  transition-al duration-300 hover:-translate-y-1 hover:scale-105   "
          >
            عرض الكل{" "}
            <i className="fa-solid fa-angle-left text-white text-[15px]"></i>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mx-16">
          {featuredposts.map((post) => (
            <Link
            to={"/blog"}
            key={post.id}
              className=" group bg-[#161616] rounded-2xl overflow-hidden flex flex-row min-h[350px] hover:border border-orange-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-1/2 transition-transform duration-500 group-hover:scale-[1.05] object-cover"
              />
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 bg-[#25160B] border border-[#53331D] px-3 py-1 rounded-lg text-sm ">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm ">
                    <i className="fa-regular fa-clock ml-2"></i>
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-white text-2xl font-bold mt-5 transition-colors duration-300 group-hover:text-orange-400">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-base leading-7 mt-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <span className="absolute bottom-0 left-0 w-3 h-3 bg-orange-400 rounded-full border-2 border-[#161616]"></span>
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        {post.author.name}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-orange-400 font-bold hover:text-orange-300 transition-all duration-300"
                  >
                    اقرأ المقال
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
