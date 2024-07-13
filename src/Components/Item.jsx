import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

export default function Item() {
  return (
    <div>
      <div className='shadow-xl mt-4 px-6 py-4 rounded-lg border-2 border-slate-100'>
        <div><h1 className='text-xl font-bold border-b-2 pb-2'>License Option</h1></div>
        <div className='border-b-2 pb-2'>
          <div className='flex justify-between py-2'>
            <h1 className='font-bold text-md flex items-center gap-2'> <span className='text-green-600'><FaCircleDot /></span>Single Use</h1>
            <p className='font-bold text-md'>$64</p>
          </div>
          <div className='px-8'>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span> Quality checked by AspCart</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Future Update</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>6 months support from Odin_Desgin</h1>
          </div>
        </div>
        <div className='border-b-2 pb-2'>
          <div className='flex justify-between py-2'>
            <h1 className='font-bold text-md flex items-center gap-2'> <span className='text-slate-500'><FaCircleDot /></span>Unlimited Use</h1>
            <p className='font-bold text-md'>$99</p>
          </div>
          <div className='px-8'>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Quality checked by AspCart</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Future Update</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>6 months support from Odin_Desgin</h1>
          </div>
        </div>
        <div>
          <div className='flex gap-4 py-4'>
            <button className='w-1/2
               flex gap-1 items-center bg-indigo-950 text-white px-4 py-2 text-md font-semibold rounded-lg justify-center'> <span><FaShoppingCart /></span> Add to Cart</button>
            <button className='w-1/2 border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-lg'>Buy Now</button>
          </div>
          <div>
            <h1 className='text-sm text-slate-500 text-center'>Price in is Rs Indian and excludes tax and handling fess</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
