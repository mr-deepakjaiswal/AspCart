import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function RefundsPage() {
  return (
    <div className='bg-white h-[100vh] rounded-lg p-6'>
      <button className='p-1 border-2  rounded-md flex items-center gap-2'>Open Requests <span><FaChevronDown /></span></button>
      <div className='flex flex-col justify-center items-center mt-6'>
        <div className='flex flex-wrap flex-col items-center gap-2 border-2 rounded-md md:w-3/6 p-6'>
          <h1 className='font-bold text-lg text-slate-500'>Refund requests made against items you sold</h1>
          <h3 className='font-semibold text-md text-slate-500'>There are no open refund requests at the moment.</h3>
        </div>
      </div>
    </div>
  )
}
