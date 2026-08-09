import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [urls, setUrls] = useState([
    { path: '/', text: 'Home' },
    { path: '/users', text: 'Users' },
    { path: '/help-center', text: 'Help center' },
  ])

  const activeCss = "font-bold text-green-500"

  return (
    <div className='bg-zinc-800 rounded-full p-4 my-5 text-white mx-auto max-w-4xl flex items-center justify-between'>
      <div>
        Logo
      </div>
      <nav className='flex gap-4 text-[20px]'>
        {
          urls.map((url, i) => {
            return (
              <NavLink 
              key={i} 
              to={url.path}
              className={({isActive}) =>
                isActive ? activeCss : ""
              }
              >
                {url.text}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar
