import React from 'react'
import { Link } from 'react-router-dom'

export default function TipsSection() {
  return (
   <>
   
   
   
    <section className="bg-black py-20 border-b border-[#222]">
      <div className="max-w-5xl mx-auto px-6">
        
      
        <div className="bg-[#161616] border border-gray-800 rounded-2xl p-10 md:p-14 text-center">

         
          <div className="w-16 h-16 mx-auto rounded-lg  bg-orange-400 border border-[#53331D] flex items-center justify-center">
            <i className="fa-regular fa-envelope text-white text-2xl"></i>
          </div>
          
        
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-6">
           اشترك في
           
            <span className="text-orange-400 "> نشرتنا الاخباريه </span>
          </h2>

          
          <p className="text-gray-400 text-lg whitespace-nowrap pt-3 leading-8 md:whitespace-normal">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

         
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-[#0d0d0d] border border-gray-700 rounded-lg px-5 py-3 text-white text-right outline-none focus:border-orange-400"
            />

            <Link
              to={"/"}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-lg transition-colors duration-300"
            >
              اشترك الآن
            </  Link>
          </div>
<div>



  
</div>
    
        </div>
      </div>
    </section>
  
   
   
   
   
   
   
   
   </>
  )
}
