import React from 'react'


export default function NotFound({setSearch,
  setCurrentPage,
  navigate,}) {
 
 
 
 
 
 
  return (
    <>
    <div className='flex flex-col items-center justify-center py-20 text-center'>            
<div className='w-16 h-16 rounded-full bg-[#252525] flex items-center justify-center mb-5'>

<i className='fa-regular fa-face-frown text-5xl text-gray-400 text-center '></i>
</div>
 <h2 className='text-white text-3xl font-bold'>لا توجد مقالات</h2>

<p className='text-gray-400 mt-3 text-xl '>
حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
</p>

<button
onClick={()=>{
setSearch("");
setCurrentPage(1);
navigate("/blog")

}}


className="mt-6 px-6 py-3 rounded-full bg-orange-400 text-white "
>

اعاده تعين الفلاتر


</button>





    </div>
    
    
    
  
    
    
    
    
    
    </>
  )
}
