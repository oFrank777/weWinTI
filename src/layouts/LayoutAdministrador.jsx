import React from 'react'
import AsideBar from '../components/AsideBar.jsx'
import { Outlet } from 'react-router-dom'
export default function LayoutAdministrador() {
  return (
    <div
     className='grid grid-cols-5 grid-rows-1 h-scream  '
    >
        <div className='bg-stone-800  m-4  rounded-lg'>
        <AsideBar/>
        </div>
        
         <div
          className='col-start-2 col-end-6 h-full '
         >
         <Outlet/>
         </div>
      
       
    </div>
  )
}