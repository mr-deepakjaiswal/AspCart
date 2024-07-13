import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FcFlashOn } from "react-icons/fc";
import { IoMdPricetag } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { LiaHatCowboySolid } from "react-icons/lia";
import { GiFireworkRocket } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
export default function Vender() {
  return (
    <div>
      <div className='flex gap-4 px-4 py-4 shadow-lg my-6 border-2 border-slate-100'>
          <div>
            <img className='w-24 h-24' src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png" alt="" />
          </div>
          <div>
            <h1 className='text-2xl font-bold py-1'>Vender</h1>
            <p className='text-lg font-semibold py-1'>Member Since August 2019</p>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 my-1'><span className=''><FaCheckCircle /></span>Verified</button>
            <div className='flex gap-2 py-1'>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><IoDiamond /></span></button>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><FcFlashOn /></span></button>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><LiaHatCowboySolid /></span></button>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><GiFireworkRocket /></span></button>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><IoMdPricetag /></span></button>
              <button className='bg-pink-900 rounded-full p-1'><span className='text-3xl text-white'><FaLink /></span></button>
            </div>
            <button className='bg-green-500 text-white px-10 py-2 rounded-md text-lg font-semibold my-1'>View Profile</button>
          </div>
        </div>
    </div>
  )
}
