import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import Rectangle4543 from '../assets/images/Rectangle 4543.png'

export default function VerifyPurchase() {

  const [PurchaseCode, setPurchaseCode] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  
  const [ExtendSupport, setExtendSupport] = useState('');

  return (
    <div className='p-6 m-6 shadow-md'>
      <div className='border-2 m-12'>
        <div className='bg-[#F2F2F2] p-2'>
          <h1 className='text-xl font-bold'>Verify Purchase</h1>
        </div>
        <div className="mb-4 w-full py-6 px-16 border-b-2">
          <label htmlFor="PurchaseCode" className="block text-gray-700 text-sm font-bold mb-2">
            Ender Purchase Code
          </label>
          <input
            type="text"
            id="PurchaseCode"
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={PurchaseCode}
            onChange={(e) => setPurchaseCode(e.target.value)}
          />
        </div>
        <div className='flex gap-4 ms-20 pb-4'>
          <button className='bg-slate-300 px-4 py-2 rounded-md text-slate-500 font-semibold'>Back</button>
          <button className='bg-indigo-900 px-4 py-2 rounded-md font-semibold text-white'>Verify Purchase</button>
        </div>
      </div>
      
    </div>
  )
}
