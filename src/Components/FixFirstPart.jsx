import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

export default function FixFirstPart() {
  return (
    <div className='mt-4 ms-44 md:block hidden'>
      <p className='text-md'>Home &gt; Files &gt; WordPress &gt; Membership</p>
      <h1 className='text-3xl font-bold'>Pwork-Intranet For WordPress</h1>
      <h1 className='flex items-center gap-1 text-md'>By egemenerd <RiShoppingCart2Fill /> 7 <span className='text-slate-500'>sales</span> <span className='text-green-600 flex items-center gap-1'>Recently Updated <FaCheckCircle /></span></h1>
      
    </div>
  )
}
