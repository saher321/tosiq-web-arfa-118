import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='bg-zinc-800 rounded-full p-4 my-5 text-white mx-auto max-w-4xl flex items-center justify-between'>
      <div>
        Logo
      </div>
      <nav className='flex gap-4 text-[20px]'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/help-center"}>Help center</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
