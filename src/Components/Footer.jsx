import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' w-full h-auto mt-8'>
      <div className='flex flex-wrap flex-col md:flex-row justify-evenly bg-indigo-950 p-8'>
        <div>
          <h1 className='text-white text-4xl font-bold mb-3'>AspCart</h1>
          <p className='text-white w-44 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, error!</p>
          <div>
            <button className='text-white text-2xl m-1'><FaFacebookSquare /></button>
            <button className='text-white text-2xl m-1'><FaSquareXTwitter /></button>
            <button className='text-white text-2xl m-1'><FaLinkedin /></button>
            <button className='text-white text-2xl m-1'><FaInstagramSquare /></button>
          </div>
          <div className='w-50 bg-yellow-500 h-1 mt-2 mb-2 md:hidden '></div>
        </div>
        <div>
          <h1 className='text-xl font-bold text-white mb-3'>Categories</h1>
          <ul className=''>
            <li className='mx-[10px] font-medium text-md text-white'>Asp.net</li>
            <li className='mx-[10px] font-medium text-md text-white'>PHP Scripts</li>
            <li className='mx-[10px] font-medium text-md text-white'>Template</li>
            <li className='mx-[10px] font-medium text-md text-white'>Figma</li>
            <li className='mx-[10px] font-medium text-md text-white'>Node js</li>
            <li className='mx-[10px] font-medium text-md text-white'>Ecommercs</li>
            <li className='mx-[10px] font-medium text-md text-white'>Desktop Soft</li>
          </ul>
          <div className='w-50 bg-yellow-500 h-1 mt-2 mb-2 md:hidden '></div>
        </div>
        <div>
          <h1 className='text-xl font-bold text-white mb-3'>Quick Link</h1>
          <ul className=''>
            <li className='mx-[10px] font-medium text-md text-white'>Home</li>
            <li className='mx-[10px] font-medium text-md text-white'>Register</li>
            <li className='mx-[10px] font-medium text-md text-white'>Verify Purchase</li>
            <li className='mx-[10px] font-medium text-md text-white'>Privacy Policy</li>
            <li className='mx-[10px] font-medium text-md text-white'>Blog</li>
            <li className='mx-[10px] font-medium text-md text-white'>Contact</li>
          </ul>
          <div className='w-50 bg-yellow-500 h-1 mt-2 mb-2 md:hidden '></div>
        </div>
        <div>
          <h1 className='text-xl font-bold text-white mb-3'>Policy Page</h1>
          <ul className=''>
            <li className='mx-[10px] font-medium text-md text-white'>Privacy Policy</li>
            <li className='mx-[10px] font-medium text-md text-white w-32 border-b-2'></li>
            <li className='mx-[10px] font-medium text-md text-white'>Terms of Service</li>
            <li className='mx-[10px] font-medium text-md text-white w-32 border-b-2'></li>
            <li className='mx-[10px] font-medium text-md text-white'>Refund Policy</li>
            <li className='mx-[10px] font-medium text-md text-white w-32 border-b-2'></li>
          </ul>
          <div className='w-50 bg-yellow-500 h-1 mt-2 mb-2 md:hidden'></div>
        </div>
      </div>
      <div className='flex justify-center bg-black'>
        <h1 className='text-white text-lg font-semibold p-4'>&#169; 2024 AspCart. All Rights Reserved</h1>
      </div>
    </div>
  )
}
