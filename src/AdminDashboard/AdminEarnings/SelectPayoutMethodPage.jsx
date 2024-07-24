import React, { useState } from 'react'
import { FaLanguage } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa6";
import BankTransferPage from './BankTransferPage';
import PayPalPage from './PayPalPage';

export default function SelectPayoutMethodPage() {
  const [selectedTab, setSelectedTab] = useState('BankTransfer');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className=" bg-white flex flex-wrap md:flex-nowrap items-start justify-end gap-16">
      <div className="md:w-3/4 p-6">
        <h2 className='text-indigo-900 font-semibold text-center mb-4'>Learn more about our payouts options in our support FAQs.</h2>

        <div className="bg-white border-2 rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">General Information</h2>
            <button className="border-2 rounded-md flex items-center gap-2 font-medium py-1 px-4 ">
              <span><FaEdit /></span>
              Edit
            </button>
          </div>
          <div className="mt-2">
            <p className="text-gray-700">Admin last</p>
            <p className="text-gray-700"><span className="text-indigo-900 font-bold">Address:</span> agdbbrbbh geageg, India, Nova Scotia, sggee, Canada</p>
          </div>
        </div>

        <div className="bg-white border-2 rounded-lg mt-4 ">
          <h2 className="text-xl font-bold p-3 bg-slate-100">Select Payout Method</h2>
          <div className='px-8 py-6'>
            <div className="flex space-x-4 mb-4">
              <button className={`border-2 flex flex-wrap gap-2 items-center text-gray-800 font-bold  py-2 px-4 rounded-md ${selectedTab === 'BankTransfer' ? 'bg-indigo-900 text-white font-bold' : ''}`}
              onClick={() => handleTabClick('BankTransfer')}>
                <span><RiBankFill /></span>
                Bank Transfer
              </button>
              <button className={`border-2 flex flex-wrap gap-2 items-center text-gray-800 font-bold py-2 px-4 rounded-md ${selectedTab === 'PayPal' ? 'bg-indigo-900 text-white font-bold' : ''}`}
              onClick={() => handleTabClick('PayPal')}>
                <span><FaPaypal /></span>
                PayPal
              </button>
            </div>
            <div>
            {selectedTab === 'BankTransfer' && <div><BankTransferPage /></div>}
            {selectedTab === 'PayPal' && <div><PayPalPage /></div>}
            </div>
          </div>
        </div>

        

      </div>

      <div className=" flex items-center justify-end p-6">
        <button className="bg-indigo-900 flex items-center gap-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <span><FaLanguage /></span>
          English
        </button>
      </div>
    </div>
  )
}
