import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Books from "./pages/Books.jsx";
import Books2 from './pages/Books2.jsx'
import Qoutes from './pages/Qoutes.jsx'
import Form from './pages/Form.jsx'
import Book from './pages/Book.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Books',
    element: <Books></Books> ,
  },
   {
    path: '/Books2',
    element: <Books2></Books2> ,
  },
  {
    path: '/Book',
    element: <Book></Book> ,
  },
  {
    path: '/Quotes',
    element: <Qoutes></Qoutes> ,
  },
   {
    path: '/Form',
    element: <Form></Form> ,
  },
   {
    path: '/*',
    element: <div className='flex flex-col '>
    <div className='text-5xl text-gray-800 text-center mt-[25%]'>
      Not Found :/
    </div>
    <button className=' mt-7 '>
<a href="/" className='bg-[#8a8583] text-white p-3 hover:bg-white hover:text-[#8a8583] rounded-lg transition-all duration-200 ease-in-out'>
back to home</a>
    </button>
     </div>,
  },
  
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
