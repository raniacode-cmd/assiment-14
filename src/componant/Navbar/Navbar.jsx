import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#161616] fixed w-full z-20 top-0 start-0 border-b border-[#161616]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-multi-level-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <Link to="/blog" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center">
              <i className="fa-solid fa-camera  text-orange-400"></i>
            </div>

            <div className="text-right">
              <h1 className="text-white text-2xl font-bold">عدسة</h1>
              <p className="text-orange-400 text-xs">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </Link>

          <div className="bg-[#161616] rounded-full p-1 flex items-center gap-1  border border-[gray]">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `
px-7 py-3 rounded-full text-[gray] transition ${
                isActive ? "bg-orange-400 text-white" : "hover:bg-orange-400"
              }`}
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => `
px-7 py-3 rounded-full text-[gray] transition ${
                isActive ? "bg-orange-400 text-white" : "hover:bg-orange-400"
              }`}
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              end
              className={({ isActive }) => `
px-7 py-3 rounded-full text-[gray] transition ${
                isActive ? "bg-orange-400 text-white" : "hover:bg-orange-400 "
              }`}
            >
              من نحن
            </NavLink>
          </div>

          <div className="flex items-center gap-5">
           
            <div className="text-white text-xl hover:text-orange-400 transition hover:border border-[gray] rounded-md">
              
            <i className="fa-solid fa-magnifying-glass"></i>
    
              </div> 
            
             
            <Link
              to="/"
              className="bg-orange-400 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-500 transition "
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
