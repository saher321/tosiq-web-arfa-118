import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='text-lg rounded shadow-lg p-5 my-10 mx-auto max-w-2xl flex justify-between bg-gray-800 text-gray-100'>
        <div>Brand</div>
        <nav className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
        </nav>
    </div>
  )
}

export default Navbar