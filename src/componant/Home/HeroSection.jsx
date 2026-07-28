import React from "react";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
      <section className=" hero bg-black py-20 flex justify-center  border-b border-[#222]  ">
        <div className="overlay text-center px-4">
          <div className="mt-4 inline-block p-1 text-white border border-[#53331D] rounded-lg bg-[#25160B]">
            <span className="flex items-center gap-1">
              <i className="animate-pulse fa-solid fa-circle text-orange-400 mr-1 text-[8px]"></i>
              <span className="relative flex items-center justify-center w-[8px] h-[8px] mr-1">
                <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping"></span>
                <i className="relative z-10 fa-solid fa-circle text-orange-400 text-[8px]"></i>
              </span>
              مرحباً بك في عدسة
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-relaxed">
            اكتشف <span className="text-orange-400">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-[#A19AA1] mt-5 text-2xl leading-8">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
            <br />
            التصوير.
          </p>

          <div className="content flex justify-center gap-4 mt-8">
            <Link
              to="/blog"
              className="bg-orange-600 text-white p-2 rounded-lg font-bold"
            >
              استكشف المقالات <i class="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link
              to={"/about"}
              className="bg-transparent m-1 text-white
 border border-gray-400 p-1 rounded-lg font-bold hover:bg-[#2D190A] hover:text-orange-400 hover:border-orange-300"
            >
              <i class="fa-solid fa-circle-info text-white "></i> اعرف المزيد
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <div className="bg-[#151514] w-40 h-30 border border-gray-400 p-6 text-center rounded-lg hover:scale-105 transition duration-300 ">
              <i class="fa-solid fa-newspaper text-orange-500 text-2xl"></i>
              <h3 className="text-orange-500 text-2xl font-bold mt-2">+50</h3>
              <span className="text-gray-300 mt-1">مقالة</span>
            </div>

            <div className="bg-[#151514]  w-40 h-30 border border-gray-400 p-6 text-center rounded-lg hover:scale-105 transition duration-300  ">
              <i class="fa-solid fa-users text-orange-500 text-2xl"></i>
              <h3 className="text-orange-400 text-2xl font-bold ">+10ألف</h3>
              <span className="text-gray-300 ">قارئ</span>
            </div>

            <div className="bg-[#151514]  w-40 h-30 border border-gray-400 p-6 text-center rounded-lg hover:scale-105 transition duration-300 ">
              <i class="fa-solid fa-folder-open text-orange-500 text-2xl"></i>
              <h3 className="text-orange-400 text-3xl font-bold mt-2">4</h3>
              <span className="text-gray-300 mt-1">تصنيفات</span>
            </div>

            <div className="bg-[#151514] w-40 h-30 border  border-gray-400  p-6 text-center rounded-lg hover:scale-105 transition duration-300 ">
              <i class="fa-solid fa-pen-nib text-orange-500 text-2xl"></i>
              <h3 className="text-orange-400 text-3xl font-bold mt-2">6</h3>
              <span className="text-gray-300 mt-1">كاتب</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
