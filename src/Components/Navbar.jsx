import React from 'react'
import Logo from '../assets/images/logo.png'
export default function Navbar() {
  return (
    // navbar start
    <div className='w-full h-auto mt-8 flex justify-between items-center px-6'>
      {/* logo */}
      <div className=''>
        <img className='w-18' src={Logo} alt="" />
      </div>
      <div className=''>
        <ul className='md:flex hidden '>
          <li className='mx-[10px] font-medium text-lg'>Asp.net</li>
          <li className='mx-[10px] font-medium text-lg'>PHP Scripts</li>
          <li className='mx-[10px] font-medium text-lg'>Template</li>
          <li className='mx-[10px] font-medium text-lg'>Figma</li>
          <li className='mx-[10px] font-medium text-lg'>Node js</li>
          <li className='mx-[10px] font-medium text-lg'>Ecommercs</li>
          <li className='mx-[10px] font-medium text-lg'>Desktop Soft</li>
          <li className='mx-[10px] font-medium text-lg'>App</li>
        </ul>
      </div>
      <div>
        <button className='bg-yellow-500 text-white px-3 p-2 rounded-sm font-medium md:block hidden'>Start Selling</button>
      </div>
      <div className='md:hidden'>
        <a className='text-3xl' href="#">&#8801;</a>
      </div>
    </div>
  )
}
