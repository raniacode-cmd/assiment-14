import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Outlet} from "react-router-dom";
export default function Layout() {
  return (
    <>
   <div dir='rtl'>
   <Navbar/>
    
   <div className='pt-24'>
   <Outlet/>

   </div>
    
    <Footer/>
    


   </div>
    </>
  )
}
