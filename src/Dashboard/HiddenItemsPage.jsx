import React, { useState } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Poligon1 from '../assets/DashboardImages/Polygon 1.png'
import Poligon2 from '../assets/DashboardImages/Polygon 2.png'
import Poligon3 from '../assets/DashboardImages/Polygon 3.png'
import Poligon4 from '../assets/DashboardImages/Polygon 4.png'
import Rectangle from '../assets/images/Rectangle.png'

export default function HiddenItemsPage() {

  const [selectedTab, setSelectedTab] = useState('listLayout');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='flex md:flex-nowrap flex-wrap gap-6'>
      <div className='md:w-3/4 bg-white p-6 h-screen rounded-lg'>
        <div className='flex items-center border-b-2 pb-4'>
          <button className='text-lg border-2 p-2 rounded-lg font-semibold'>Date Modified</button>
          <span className='text-5xl'><IoIosArrowRoundUp /></span>
          <div className='flex items-center gap-4'>
            <button className={`text-2xl ${selectedTab === 'listLayout' ? 'text-black' : 'text-slate-500'}`}
              onClick={() => handleTabClick('listLayout')}><span><FaList /></span></button>
            <button className={`text-2xl ${selectedTab === 'gridLayout' ? 'text-black' : 'text-slate-500'}`}
              onClick={() => handleTabClick('gridLayout')}><span><BsGrid3X3GapFill /></span></button>
          </div>
        </div>
      </div>
      <div className=' md:w-2/6 h-min'>
        <div className='bg-white rounded-lg'>
          <h1 className='text-xl font-bold p-6'>Search Portfolio</h1>
          <div className=' flex justify-center'>
            <div className='p-6 flex'>
              <input className='md:w-4/6 w-24 p-1 border-2 rounded-s-full' type="text" name="" id="" placeholder='Search Portfolio' />
              <button className='bg-red-700 p-1 md:px-4 px-2 font-normal text-white rounded-e-full' >Search</button>
            </div>
          </div>
        </div>
        <div className='bg-white mt-4 p-6 rounded-lg '>
          <h1 className='text-xl font-bold'>About the author</h1>
          <div className='flex gap-4 items-center mt-4'>
            <div>
              <img className='w-16' src={Rectangle} alt="" />
            </div>
            <div>
              <h1 className='font-semibold'>admin@.com</h1>
              <div className='flex flex-wrap gap-2'>
                <span><img src={Poligon1} alt="" /></span>
                <span><img src={Poligon2} alt="" /></span>
                <span><img src={Poligon3} alt="" /></span>
                <span><img src={Poligon4} alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
