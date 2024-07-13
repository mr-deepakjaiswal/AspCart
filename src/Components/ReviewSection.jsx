import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Img1 from '../assets/images/img1.png';
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';
export default function ReviewSection() {
  return (
    <div className='w-full p-10 h-auto'>
      <div className='flex justify-between '>
        <h1 className='font-semibold text-2xl'>26,057 Reviews</h1>
        <button className='flex items-center gap-2 shadow-md '>Sort By Newest <span><FaChevronDown /></span> </button>
      </div>
      <div className='py-4 px-6 shadow-md mt-8'>
        <div className='flex gap-2 pb-4'>
          <div>
            <img className='w-16 rounded-lg' src={Img1} alt="" />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>AthenaStudio</h1>
            <div className='text-green-500 flex'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            </div>
          </div>
        </div>
        <div>
          <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eum nisi sed, aut autem voluptatibus omnis.</p>
        </div>
        <div className='bg-slate-200 flex gap-2 px-6 py-4 rounded-lg'>
          <div>
            <img className='w-16 rounded-full md:block hidden' src={Img4} alt="" />
          </div>
          <div>
            <h1>Seller Response</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi autem quibusdam vel, tenetur fugit.</p>
          </div>
        </div>
      </div>
      <div className='py-4 px-6 shadow-md mt-8'>
        <div className='flex gap-2 pb-4'>
          <div>
            <img className='w-16 rounded-lg' src={Img2} alt="" />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>AthenaStudio</h1>
            <div className='text-green-500 flex'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            </div>
          </div>
        </div>
        <div>
          <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eum nisi sed, aut autem voluptatibus omnis.</p>
        </div>
        <div className='bg-slate-200 flex gap-2 px-6 py-4 rounded-lg'>
          <div>
            <img className='w-16 rounded-full md:block hidden' src={Img4} alt="" />
          </div>
          <div>
            <h1>Seller Response</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi autem quibusdam vel, tenetur fugit.</p>
          </div>
        </div>
      </div>
      <div className='py-4 px-6 shadow-md mt-8'>
        <div className='flex gap-2 pb-4'>
          <div>
            <img className='w-16 rounded-lg' src={Img3} alt="" />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>AthenaStudio</h1>
            <div className='text-green-500 flex'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            </div>
          </div>
        </div>
        <div>
          <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eum nisi sed, aut autem voluptatibus omnis.</p>
        </div>
        <div className='bg-slate-200 flex gap-2 px-6 py-4 rounded-lg'>
          <div>
            <img className='w-16 rounded-full md:block hidden' src={Img4} alt="" />
          </div>
          <div>
            <h1>Seller Response</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi autem quibusdam vel, tenetur fugit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
