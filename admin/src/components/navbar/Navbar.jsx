import React from 'react'
 import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='Navbar flex justify-between items-center py-2 px-[4%]'>
        <img className="logo w-32"src={assets.logo} alt="sorry couldn't find image" />
        <img  className="profile"src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
