import React from 'react'
import Rectangle22109 from '../assets/DashboardImages/Rectangle 22109.png'
import Rectangle22110 from '../assets/DashboardImages/Rectangle 22110.png'
import Group1 from '../assets/DashboardImages/Group 1000007829.png'
import Group2 from '../assets/DashboardImages/Group 338352.png'

export default function FollowingsPage() {
  return (
    <div className='flex gap-6'>
    <div className='flex flex-wrap flex-col gap-6 bg-white w-3/4 p-4 rounded-lg'>
      <div className='shadow-md py-2'>
        <div className='flex gap-8 items-center'>
          <div className='relative'>
            <img className='w-24 ' src={Rectangle22109} alt="" />
            <button className='absolute top-[-12px] p-1 left-3 bg-slate-100 text-sm'>Following</button>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-lg font-bold'>PIXINVENT</h1>
            <p className='text-sm'>11 Items <br />751 Followers <br />Member Since: December 2011 <br />Available for freelance work</p>
          </div>

          <div className='ms-12 flex flex-col gap-4'>
            <div>
              <img  src={Group1} alt="" />
            </div>
            <div>
              <h1 className='text-sm'>57,991</h1>
              <h1 className='text-sm'>Sales</h1>
              <img className='w-16' src={Group2} alt="" />
              <h1 className='text-sm'>1,800 ratings</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow-md py-2'>
        <div className='flex gap-8 items-center'>
          <div className='relative'>
            <img className='w-24 ' src={Rectangle22110} alt="" />
            <button className='absolute top-[-12px] p-1 left-3 bg-slate-100 text-sm'>Following</button>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-lg font-bold'>PIXINVENT</h1>
            <p className='text-sm'>11 Items <br />751 Followers <br />Member Since: December 2011 <br />Available for freelance work</p>
          </div>

          <div className='ms-12 flex flex-col gap-4'>
            <div>
              <img  src={Group1} alt="" />
            </div>
            <div>
              <h1 className='text-sm'>57,991</h1>
              <h1 className='text-sm'>Sales</h1>
              <img className='w-16' src={Group2} alt="" />
              <h1 className='text-sm'>1,800 ratings</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow-md py-2'>
        <div className='flex gap-8 items-center'>
          <div className='relative'>
            <img className='w-24 ' src={Rectangle22109} alt="" />
            <button className='absolute top-[-12px] p-1 left-3 bg-slate-100 text-sm'>Following</button>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-lg font-bold'>PIXINVENT</h1>
            <p className='text-sm'>11 Items <br />751 Followers <br />Member Since: December 2011 <br />Available for freelance work</p>
          </div>

          <div className='ms-12 flex flex-col gap-4'>
            <div>
              <img  src={Group1} alt="" />
            </div>
            <div>
              <h1 className='text-sm'>57,991</h1>
              <h1 className='text-sm'>Sales</h1>
              <img className='w-16' src={Group2} alt="" />
              <h1 className='text-sm'>1,800 ratings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white h-min w-2/6 p-4 rounded-lg border-s-8 border-s-red-600'>
    <h1>Check out the Follow Feed to discover new items from the authors you follow.</h1>
  </div>
  </div>
  )
}
