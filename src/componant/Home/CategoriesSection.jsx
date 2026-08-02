import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postsData from "../../Data/Posts.json"

console.log(postsData)
export default function CategoriesSection() {
const categoris=postsData.categories
console.log(categoris)
 const icon=[
'fa-solid fa-gear',
'fa-solid fa-user',
'fa-solid fa-mountain-sun',
'fa-solid fa-sliders',
'fa-solid fa-gear',
 ]
 
 
 
 
 
 return (
    <>
   <section className="bg-[#111111] border-b border-[#222] py-20 ">
<div className="text-center">
<div className="inline-block px-2 py-1 text-orange-400 border border-[#53331D] rounded-lg  bg-[#25160B]">
<span className="flex items-center gap-2">
  <i className="fa-solid fa-circle text-orange-400 text-[8px]"></i>
التصنيفات
</span>
</div>
<h2 className="text-white text-5xl font-bold mt-6">
  استكشف حسب الموضوع
</h2>

<p className="text-gray-400 text-xl mt-5">
  اعثر على محتوى مصمم حسب اهتماماتك
</p>


</div>
<div className="grid grid-cols-4 gap-5 mt-12 max-w-6xl mx-auto">
  {categoris.map((categories, index) => (
    <Link
      key={categories.name}
      to={`/blog?category=${categories.name}`}
      className="group bg-[#161616] w-52 p-6 rounded-xl border border-gray-700 h-40 hover:bg-amber-400"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#25160B] border border-[#53331D] group-hover:bg-orange-200">
        <i className={`${icon[index]} text-orange-400`}></i>
      </div>

      <h3 className="text-white text-xl font-bold pt-2">
        {categories.name}
      </h3>

      <span className="text-gray-400 pt-2">
        مقال {categories.count}
      </span>
    </Link>
  ))}
</div>



   </section>
    </>
  );
}
