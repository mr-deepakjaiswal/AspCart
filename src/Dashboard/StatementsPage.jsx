import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import StatementsPageTable from './StatementPageTable';
export default function StatementsPage() {

  const [MonthlysalaryFees, setMonthlysalaryFees] = useState('');
  return (
    <div>
      <div className='flex gap-6'>
        <div className='w-3/4 h-min  bg-white p-6 rounded-lg'>
          <div className='flex flex-col gap-4 '>
            <h1 className='text-md font-semibold'>Earnings</h1>
            <h1 className='text-sm'>Your sales and referral earnings over the last 30 days</h1>
            <div className='flex flex-wrap gap-4'>
              <div className='border-2 p-1 '>
                <h1 className='font-semibold'>My funds</h1>
                <h1 className='font-semibold'>$0.00</h1>
              </div>
              <div className='border-2 p-1 '>
                <h1 className='font-semibold'>Earnings</h1>
                <h1 className='font-semibold'>$0.00</h1>
              </div>
              <div className='border-2 p-1 '>
                <h1>Tax Withheld</h1>
                <h1 className='font-semibold'>$0.00</h1>
              </div>
              <div className='border-2 p-1'>
                <h1 className='font-semibold'>Fees</h1>
                <h1 className='font-semibold'>$0.00</h1>
              </div>
            </div>
            <div>
              <button className='font-bold text-indigo-900'>Print this overview</button>
            </div>
          </div>

        </div>
        <div className=' w-2/6 h-min'>
          <div className='bg-white rounded-lg'>
            <h1 className='text-xl font-semibold p-6'>View Invoices</h1>
            <div className="p-2">
              <label htmlFor="MonthlysalaryFees" className="block text-gray-700 text-sm font-bold">

              </label>
              <select
                id="MonthlysalaryFees"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 text-sm leading-tight focus:outline-none focus:shadow-outline"
                value={MonthlysalaryFees}
                onChange={(e) => setMonthlysalaryFees(e.target.value)}
              >
                <option value="">Monthly Service Fees</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white w-full p-6 mt-4 flex flex-col gap-4 rounded-md'>
        <div className='flex gap-4 flex-wrap'>
          <button className='border-2 p-2 rounded-md font-semibold border-black'>Last 30 Days</button>
          <button className='border-2 p-2 rounded-md font-semibold border-black'>June 2024</button>
          <button className='border-2 p-2 rounded-md font-semibold border-black flex items-center gap-2'>More options <span><FaPlus /></span></button>
        </div>
        <div>
          <h1>Please note: Transactions are based in <b>Melbourne, Australia</b>local time.</h1>
        </div>
        <div>
          <StatementsPageTable />
        </div>
      </div>
    </div>
  )
}
