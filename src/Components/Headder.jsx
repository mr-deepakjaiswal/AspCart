import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";

export default function Headder() {
  return (
    // headding statred
    <div className='w-full h-auto px-6 flex justify-between mt-2 pb-2 shadow-md'>
      <div className=' w-28 p-1 flex items-center gap-1 rounded-full bg-slate-300'>
        <BsGlobe2 />
        English
        <FaCaretDown />
      </div>
      <div className='flex gap-4'>
        <button className='bg-slate-300 px-2 text-xl md:block hidden'><PiShoppingCartDuotone /></button>
        <button className='flex items-center font-medium bg-red-700 text-white p-2 rounded-lg gap-1'><IoPersonSharp />Login</button>
        <button className='flex items-center font-medium bg-indigo-900 text-white p-2 rounded-lg gap-1'><IoPersonSharp />Sign up</button>
      </div>
    </div>
    // headding end
  )
}
