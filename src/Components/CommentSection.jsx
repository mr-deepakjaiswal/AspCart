import React from 'react'
import Ellips1 from '../assets/images/Ellipse 1.png'
import Ellips2 from '../assets/images/Ellipse 2.png'
import Ellips3 from '../assets/images/Ellipse 3.png'
import Ellips4 from '../assets/images/Ellipse 4.png'
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function CommentSection() {
  return (
    <div className='w-full p-10 h-auto'>
      <div>
        <h1 className='text-xl font-bold'>Comments</h1>
      </div>
      <div>
      <div className='border-2 mt-4 border-indigo-900 rounded-md p-6'>
        <div className='flex gap-4 items-center pb-2'>
          <img src={Ellips1} alt="" />
          <h1 className='text-xl font-bold'>John Doe</h1>
        </div>
        <div className='pb-2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eos voluptates similique atque dolorum molestiae, quo animi veritatis neque sit doloremque .</p>
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex gap-2 text-slate-500'>
            <span><FaBold /></span>
            <span><FaItalic /></span>
            <span><IoLinkSharp /></span>
          </div>
          <div>
            <button className='bg-indigo-950 text-white px-4 py-2 text-md font-semibold rounded-lg'>Comment</button>
          </div>
        </div>
      </div>
      <div className='mt-4 p-6'>
        <div className='flex gap-4 items-center pb-2'>
          <img src={Ellips2} alt="" />
          <h1 className='text-xl font-bold'>Jane Doe</h1>
        </div>
        <div className='pb-2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eos voluptates similique atque dolorum molestiae, quo animi veritatis neque sit doloremque .</p>
        </div>
        <div className='flex gap-4'>
          
            <button className='bg-slate-200 p-1 '><span className='text-slate-500'><FaArrowUp /></span></button>
            <button className='bg-slate-200 p-1'><span className='text-slate-500'><FaArrowDown /></span></button>
            <p className='text-lg text-slate-500 font-semibold'>5 min ago</p>
        </div>
      </div>
      <div className='mt-4 p-6'>
        <div className='flex gap-4 items-center pb-2'>
          <img src={Ellips3} alt="" />
          <h1 className='text-xl font-bold'>StopsJeep</h1>
        </div>
        <div className='pb-2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eos voluptates similique atque dolorum molestiae, quo animi veritatis neque sit doloremque .</p>
        </div>
        <div className='flex gap-4'>
          
            <button className='bg-slate-200 p-1 '><span className='text-slate-500'><FaArrowUp /></span></button>
            <button className='bg-slate-200 p-1'><span className='text-slate-500'><FaArrowDown /></span></button>
            <p className='text-lg text-slate-500 font-semibold'>5 min ago</p>
        </div>
      </div>
      <div className='mt-4 p-6'>
        <div className='flex gap-4 items-center pb-2'>
          <img src={Ellips4} alt="" />
          <h1 className='text-xl font-bold'>AliA</h1>
        </div>
        <div className='pb-2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eos voluptates similique atque dolorum molestiae, quo animi veritatis neque sit doloremque .</p>
        </div>
        <div className='flex gap-4'>
          
            <button className='bg-slate-200 p-1 '><span className='text-slate-500'><FaArrowUp /></span></button>
            <button className='bg-slate-200 p-1'><span className='text-slate-500'><FaArrowDown /></span></button>
            <p className='text-lg text-slate-500 font-semibold'>5 min ago</p>
        </div>
      </div>
      </div>
    </div>
  )
}
