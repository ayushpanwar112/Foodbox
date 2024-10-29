import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
 import "./sidebar.css"



const Siderbar = () => {
     
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border-slate-200 border-[2px] text-xl  '>
      <div className='sidebar-options border-t-0 pt-12 pl-[20%] flex flex-col gap-5'>
        <NavLink to="/" className='sidebar-option flex items-center border-[2px] py-2 gap-3 px-2 hover:bg-orange-400  hover:text-white transition duration-500 cursor-pointer max-md:justify-center   '>
                <img  src={assets.add_icon} alt=" error to load" />
                <p  className='max-md:hidden'>Add Item</p>
        </NavLink>
        <NavLink to="/List" className='sidebar-option flex items-center border-[2px] py-2 gap-3 px-2 hover:bg-orange-400 hover:text-white transition duration-500 cursor-pointer max-md:justify-center '>
                <img src={assets.order_icon} alt=" error to load" />
                <p  className='max-md:hidden'>List Item</p>
        </NavLink>
        <NavLink to ="order" className='sidebar-option flex items-center border-[2px] py-2 gap-3 px-2 hover:bg-orange-400 hover:text-white transition duration-500 cursor-pointer max-md:justify-center'>
                <img src={assets.order_icon} alt=" error to load" />
                <p className='max-md:hidden'>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Siderbar
