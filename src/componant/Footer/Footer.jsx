import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
   <footer class="bg-[#161616] m-0 p-0">
    <div class="mx-auto w-full max-w-screen-7xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between items-center">
          <div class="mb-6 md:mb-0 ">
              <Link to={'/'} class="flex items-center  gap-3">
              <div className='w-11 h-11 bg-orange-600 rounded-lg flex items-center justify-center'>
            <h2 className='text-white text-2xl font-bold'>ع</h2>
          </div>
         <span class="text-white self-center text-2xl font-semibold whitespace-nowrap">عدسة</span>
              </Link>
         <p className='text-body mb-6'>مدونة متخصصة في فن التصوير الفوتوغرافي،<br /> نشارك معكم أسرار المحترفين ونصائح عملية <br /> لتطوير مهاراتكم.</p>
         <div className="flex mt-4   sm:mt-0">
              <Link to="https://x.com/" className="text-body border border-[#262626] p-3 rounded-lg hover:bg-orange-400 hover:text-white ms-5 ">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="https://github.com/" className="text-body border border-[#262626] p-3 rounded-lg hover:bg-orange-400 hover:text-white ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link to="https://www.linkedin.com/login/ar" className="text-body  border border-[#262626] p-3 rounded-lg hover:bg-orange-400 hover:text-white ms-5">
                <svg
                  className="w-5 h-5" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.25 2.25 0 1 0 5.25 7.5 2.25 2.25 0 0 0 5.25 3ZM20.44 12.84c0-3.3-1.76-4.84-4.11-4.84-1.89 0-2.74 1.04-3.21 1.77V8.5H9.75V20h3.37v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.38v-7.16Z" /></svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="https://www.youtube.com/" className="text-body border border-[#262626] p-3 rounded-lg hover:bg-orange-400 hover:text-white  ms-5">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.58 7.19a2.74 2.74 0 0 0-1.93-1.94C17.96 4.8 12 4.8 12 4.8s-5.96 0-7.65.45A2.74 2.74 0 0 0 2.42 7.2C2 8.89 2 12 2 12s0 3.11.42 4.8a2.74 2.74 0 0 0 1.93 1.94c1.69.45 7.65.45 7.65.45s5.96 0 7.65-.45a2.74 2.74 0 0 0 1.93-1.94C22 15.11 22 12 22 12s0-3.11-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-white uppercase flex items-center gap-2 " >
                  <span className="w-10 h-[2px] bg-orange-500"></span>
                     استكشف
                   </h2>
                  <ul class="text-body font-medium">
                      <li className="mb-4">
                          <Link to="/" className="hover:text-orange-400 transition">الرئيسية</Link>
                      </li>
                      <li>
                          <Link to="/blog" className="hover:text-orange-400 transition">المدونة</Link>
                      </li>
                      <li>
                          <Link to="/about" className="hover:text-orange-400 transition">من نحن  </Link>
                      </li>
                      
                 
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg font-semibold text-white uppercase flex items-center gap-3 ">
                  <span className="w-10 h-[2px] bg-orange-500"></span>
                     التصنيفات
                   
                    </h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <Link to="/blog" className="hover:text-orange-400 transition">اضاءه</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" class="hover:text-orange-400 transition">بورتريه</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" class="hover:text-orange-400 transition">مناظر طبيعيه</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" class="hover:text-orange-400 transition">تقنيات</Link>
                      </li>
                 
                 
                  </ul>
              </div>
              <div>
  <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
  <span className="w-10  h-[2px] bg-orange-500"></span>
    ابقى على اطلاع
    
  </h2>

  <p className="text-[#737373] mb-6 leading-7">
    اشترك للحصول على أحدث المقالات والتحديثات.
  </p>

  <input
    type="email"
    placeholder="أدخل بريدك الإلكتروني"
    className="w-full bg-[#181818] border border-[#262626] rounded-xl px-4 py-3 text-white placeholder:text-[#737373] outline-none"
  />

  <button className="w-full bg-orange-600 hover:bg-orange-700 transition text-white rounded-full py-4 mt-5 font-bold">
    اشترك
  </button>
</div>
          </div>
      </div>
      <hr class="my-6 border-[#262626] sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-body sm:text-center">© 2026 <a href="https://flowbite.com/" class="hover:underline">عدسة. صنع بكل</a>. جميع الحقوق محفوظة.
          </span>
         
      </div>
    </div>
</footer>
   
   
   
   
   
   
   
   
   
   </>
  )
}
