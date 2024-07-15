import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Rectangle from '../assets/images/Rectangle.png'
import Image94 from '../assets/images/image 94.png'
import Image95 from '../assets/images/image 95.png'
import Image96 from '../assets/images/image 96.png'
import Image97 from '../assets/images/image 97.png'
import Image98 from '../assets/images/image 98.png'
import Image99 from '../assets/images/image 99.png'
import Image100 from '../assets/images/image 100.png'
export default function Vender() {
  return (
    <div>
      <div className='flex gap-4 px-4 py-4 shadow-lg my-6 border-2 border-slate-100'>
          <div>
            <img className='w-24 h-24' src={Rectangle} alt="" />
          </div>
          <div>
            <h1 className='text-2xl font-bold py-1'>Vender</h1>
            <p className='text-lg font-semibold py-1'>Member Since August 2019</p>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 my-1'><span className=''><FaCheckCircle /></span>Verified</button>
            <div className='flex gap-2 py-1'>
              <img src={Image94} alt="" />
              <img src={Image95} alt="" />
              <img src={Image96} alt="" />
              <img src={Image97} alt="" />
              <img src={Image98} alt="" />
              <img src={Image99} alt="" />
              <img src={Image100} alt="" />
            </div>
            <button className='bg-green-500 text-white px-10 py-2 rounded-md text-lg font-semibold my-1'>View Profile</button>
          </div>
        </div>
    </div>
  )
}
