import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componant/Layout/Layout';
import Home from "./componant/Home/Home";
import Blog from "./componant/Blog/Blog";

import NotFound from "./componant/NotFound/NotFound";



let router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound /> },


    ]
  }



], {
  basename: '/assiment-14'
})




function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )

}

export default App
