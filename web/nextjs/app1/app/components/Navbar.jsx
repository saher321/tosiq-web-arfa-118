import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white flex w-fit m-3 p-3 rounded shadow gap-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about-us'}>About</Link>
        <Link href={'/help'}>Help</Link>
    </div>
  )
}

export default Navbar