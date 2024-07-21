import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";

export default function ReviewsPage() {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-6'>
      <div className='md:w-3/4 bg-white p-6 h-screen rounded-lg'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold'>0 Reviews</h1>
        </div>
        <div className='p-6'>
          <h1 className='border-2 p-2 text-center font-semibold text-slate-500 rounded-lg'>You have no ratings or reviews for any of your items.</h1>
        </div>
      </div>
      <div className=' md:w-2/6 h-min'>
        <div className='bg-white rounded-lg'>
          <h1 className='text-sm p-6'><b>Item Rating: </b>Minimum of 3 votes required</h1>
        </div>
        <div className='bg-white mt-4 p-6 rounded-lg '>
          <h1 className='text-xl font-bold flex items-center gap-2'><span><FaShoppingCart /></span>0 Sales</h1>
        </div>
        <div className='bg-white mt-4 p-6 rounded-lg '>
          <h1 className='text-xl font-bold flex items-center gap-2'><span><RiUserFollowFill /></span>0 Followers</h1>
        </div>
      </div>

    </div>
  )
}
