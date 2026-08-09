import React from 'react'
import { FaBriefcase, FaBuilding } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router';

const UserItem = ({user}) => {
  return (
    <div className='bg-white rounded-2xl p-4 shadow'>
      <div>
        <div className='flex justify-between'>
            <img src={user.image} className='h-20 w-20' alt="" />
            <Link to={`/users/${user.id}`}>
                <span><FiArrowRight size={24} className='text-sky-800 mt-[3px]'/></span>
            </Link>
        </div>
        <div>
            <div className='font-bold text-lg'>
                {user.firstName} - {user.lastName}
            </div>
            <span className='italic text-gray-400'>
                {user.email}
            </span>
            <div className='text-[14px] mt-5 shadow rounded-lg'>
                <div className='flex items-center gap-3 border-b border-gray-200 p-2'>
                    <FaBriefcase className='mt-[3px]' /> <span>{user.company.title}</span>
                </div>
                <div className='flex items-center gap-3 border-b border-gray-200 p-2'>
                    <FaBuilding className='mt-[3px]' /> <span>{user.company.department}</span>
                </div>
                <div className='flex items-center gap-3 p-2'>
                    <TbBrandAirtable className='mt-[3px]' /> <span>{user.company.name}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserItem
