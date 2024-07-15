import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

export default function EarningsPage() {
  return (
    <div>
      <div className='w-full bg-white p-6 flex gap-4'>
        <div className='border-2 rounded-lg w-1/3 p-6 text-center flex flex-col gap-2 flex-wrap'>
          <h1 className='font-semibold'>Sales earnings this month (June), after associated author fees, & before taxes:</h1>
          <h1 className='text-xl font-bold'>$0.00</h1>
        </div>
        <div className='border-2 rounded-lg w-1/3 p-6 text-center flex flex-col gap-2 flex-wrap bg-red-600 text-white'>
          <h1 className='font-semibold'>View your balance via</h1>
          <h1 className='text-xl font-bold underline'>Author Dashboard</h1>
        </div>
        <div className='border-2 rounded-lg w-1/3 p-6 text-center flex flex-col gap-2 flex-wrap'>
          <h1 className='font-semibold'>Total value of your sales, before taxes:</h1>
          <h1 className='text-xl font-bold'>$0.00</h1>
          <h1 className='font-semibold'>based on list price</h1>
        </div>
      </div>

      <div className=''>
        <div className='mt-4 w-3/4'>
          <div>
            <h1>Questions about the Net Earnings number? <button>Click here.</button></h1>
          </div>
          <div className='bg-white p-6 mt-4 flex items-center gap-4'>
            <button className='border-2 p-1 border-black rounded-md flex items-center gap-2'>Items Sales <span><FaAngleDown /></span></button>
            <h1>All Time / 2024 / June</h1>
          </div>
        </div>
        <div className='mt-4 w-1/4'>
          <div>
            <h1 className='flex items-center gap-2'><span><FaQuestionCircle /></span>Your top countries</h1>
          </div>
          <div className='bg-white p-6 mt-4'>
            <h1 className='font-semibold text-lg'>Gray skies are going to clear up</h1>
            <h1>You have no sales for the chosen period.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
