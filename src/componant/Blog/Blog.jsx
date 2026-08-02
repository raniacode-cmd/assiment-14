import React, { useState,useEffect } from "react";
import postsData from "../../Data/Posts.json"
import {  NavLink, useSearchParams } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import NotFound from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";
export default function Blog() {
  
  const [currentpage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const navigate =useNavigate()
  const postasPerPage = 6;
  const indexOfLastPost = currentpage * postasPerPage;
  const indexOfFirstPost = indexOfLastPost - postasPerPage;

  const [searchparams] = useSearchParams();
  const category = searchparams.get("category");
  console.log(category);
  const searchCategory = search.trim();

  const filterePosts = category
    ?postsData.posts.filter((post) => post.category === category)
    :postsData.posts;
  const searchedPosts = filterePosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(searchedPosts.length / postasPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

 

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      <title>Blog</title>
      <section className="heros   h-100">
        <div className="text-center">
          <div className="inline-block text-orange-400 mt-9 p-[5px] border border-[#53331D] rounded-lg bg-[#25160B]">
            <span className="flex items-center gap-2">
              <i className="animate-pulse fa-solid fa-circle text-orange-400 mr-1 text-[8px]"></i>
              مدونتنا
            </span>
          </div>

          <h1 className="text-9xl md:text-5xl font-bold text-white mt-6 leading-relaxed">
            استكشف <span className="text-orange-400">مقالاتنا</span>
          </h1>

          <p className="text-[#A19AA1] mt-5 text-2xl leading-8">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <nav className="top-0 z-50 sticky  bg-[#161616] border-b  border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center-safe justify-between gap-6">
            <div className="relative w-80">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ابحث في المقالات....."
                className="w-full bg-[#252524] border border-[#3a3a3a] rounded-xl py-3  pr-11 pl-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400 "
              />

              <i className="fa-solid fa-magnifying-glass absolute left-4 translate-y-1/2 text-gray-400 "></i>
            </div>

            <div className="flex items-center gap-2">
              <NavLink
                to={"/blog"}
                end
                className={`px-7 py-3 rounded-full transition ${
                  category === null && searchCategory === ""
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                الكل
              </NavLink>

              <NavLink
                to={"/blog?category=إضاءة"}
                className={`px-7 py-3 rounded-full transition ${
                  category === "إضاءة" || searchCategory === "إضاءة"
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                إضاءة
              </NavLink>

              <NavLink
                to={"/blog?category=بورتريه"}
                className={`px-7 py-3 rounded-full transition ${
                  category === "بورتريه" || searchCategory === "بورتريه"
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                بورتريه
              </NavLink>

              <NavLink
                to={"/blog?category=مناظر طبيعية"}
                className={`px-7 py-3 rounded-full transition ${
                  category === "مناظر طبيعية" ||
                  searchCategory === "مناظر طبيعية"
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                مناظر طبيعية
              </NavLink>

              <NavLink
                to={"/blog?category=تقنيات"}
                className={`px-7 py-3 rounded-full transition ${
                  category === "تقنيات" || searchCategory === "تقنيات"
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                تقنيات
              </NavLink>

              <NavLink
                to={"/blog?category=معدات"}
                className={`px-7 py-3 rounded-full transition ${
                  category === "معدات" || searchCategory === "معدات"
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-gray"
                }`}
              >
                معدات
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-black py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-end mb-2">
            <div className="inline-flex gap-1 bg-[#252525] p-1 rounded-lg">
              <button
                onClick={() => setView("grid")}
                className={`w-8 h-8 rounded-md ${
                  view === "grid" ? "bg-orange-400 text-white" : "text-gray-400"
                } `}
              >
                <i className="fa-solid fa-grip"></i>
              </button>

              <button
                onClick={() => setView("list")}
                className={`w-8 h-8 rounded-md ${
                  view === "list" ? "bg-orange-400 text-white" : "text-gray-400"
                } `}
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
{currentPosts.length> 0 ? (
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {currentPosts.map((post) => (
              <BlogCard key={post.id} posts={post} view={view} />
            ))}
          </div>
         ):(
         <NotFound
         setSearch={setSearch}
         setCurrentPage={setCurrentPage}
         navigate={navigate}
         />
         )}
   
         
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage(currentpage - 1)}
              disabled={currentpage === 1}
              className="px-4 py-2 rounded-lg bg-[#252525] text-white disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-4 py-2 rounded-lg ${
                  currentpage === number
                    ? "bg-orange-400 text-white"
                    : "bg-[#252525] text-white"
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentpage + 1)}
              disabled={currentpage === totalPage}
              className="px-4 py-2 rounded-lg bg-[#252525] text-white disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
