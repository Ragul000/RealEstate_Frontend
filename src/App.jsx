import React, { useState } from 'react';
import SignupForm from './Components/SignupForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Listings from './Listings';
import Products from './Products';
import ProductDetail from './Components/ProductDetail';
const App = () =>{
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {path : "/",element: <Home/>},
        {path: "/about",element: <About/>},
        {path: "/listings",element: <Listings/>},
        {path: '/products/:id',element:<ProductDetail/>}
      ]
    },{
      path:"/signup",
      element: <SignupForm/>
    }
  ])
  return(
   <RouterProvider router={router}/>
    
  )
}
export default App