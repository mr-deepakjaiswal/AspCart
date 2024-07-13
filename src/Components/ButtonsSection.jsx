import React from 'react'
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

export default function ButtonsSection() {
  return (
    <div>
      <div>
          <div className='grid grid-rows-2 grid-flow-col py-4 gap-4'>
            <button className='flex items-center justify-center font-semibold gap-2 shadow-md px-4 py-2 text-xl border-2 border-slate-100 rounded-md'><span><FaDownload /></span>13 Sales</button>
            <button className='flex items-center justify-center font-semibold gap-2 shadow-md px-4 py-2 text-xl border-2 border-slate-100 rounded-md'><span><FaHeart /></span>1 Favorites</button>
            <button className='flex items-center justify-center font-semibold gap-2 shadow-md px-4 py-2 text-xl border-2 border-slate-100 rounded-md'><span><FaCommentDots /></span>0 Comments</button>
            <button className='flex items-center justify-center font-semibold gap-2 shadow-md px-4 py-2 text-xl border-2 border-slate-100 rounded-md'><span></span>0 Ratigs</button>
          </div>
        </div>
    </div>
  )
}
