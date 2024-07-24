import React, { useState } from 'react';
import { FaFileLines } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import Image203 from '../../assets/AdminDashboardImages/image 203.png'
import Image204 from '../../assets/AdminDashboardImages/image 204.png'
import Image205 from '../../assets/AdminDashboardImages/image 205.png'
import PayoutOptions from './PayoutsOptions';
import TaxInformationPage from '../AuthorTools/TaxInformationPage';
function Seller() {
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'PayoutMethod' ? <PayoutOptions /> : <div className='bg-white'>
        <div className='p-6 text-wrap'>
          <h1 className='md:text-xl text-md  font-semibold'>Welcome,</h1>
          <h1 className='md:text-3xl text-xl font-semibold'>siddhiinfosoft501</h1>
        </div>
        <div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Manage your profile</h2>
                <div className=''>
                  <button className={`flex items-center mt-4 ${selectedTab === 'Tax information' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                    onClick={() => handleTabClick('Tax information')}>
                    <span><FaFileLines /></span>
                    <p className="ml-2">Tax information</p>
                  </button>
                  <p className="text-xs text-slate-500 ms-6">Get charged the right amount of tax on your earnings</p>
                  <button className={`flex items-center mt-4 ${selectedTab === 'PayoutMethod' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                    onClick={() => handleTabClick('PayoutMethod')}>
                    <span><FaRegCreditCard /></span>
                    <p className="ml-2">Payout method</p>
                  </button>
                  <p className="text-slate-500 ms-6 text-xs">Let us know where you would like your earnings paid</p>
                </div>
                <button href="#" className="text-indigo-900 mt-4 font-semibold hover:underline">Learn more about your profile</button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Balances</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-red-50 border-2 border-red-600 md:w-56 w-36 h-min rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-md font-bold mb-2">Elements</h3>
                    <p className="text-xl font-bold">$0.00</p>
                    <p className="text-xs text-gray-500">(after tax)</p>
                    <p className="text-gray-600 text-sm">Calculated on 1 Jun 2024</p>
                  </div>
                  <div className="bg-red-50 border-2 border-red-600 md:w-56 w-36 h-min rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-md font-bold mb-2">Elements</h3>
                    <p className="text-xl font-bold">$0.00</p>
                    <p className="text-xs text-gray-500">(after tax)</p>
                    <p className="text-gray-600 text-sm">Calculated on 1 Jun 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        <div className='p-6'>
          <div className="container mx-auto border-2 p-2 rounded-md border-slate-100">
            <h1 className="text-lg font-semibold p-6">Discover our ecosystem</h1>
            <div className="md:grid grid-cols-3 gap-4 flex flex-wrap">
              <div className="bg-white flex flex-col flex-wrap items-center gap-9 shadow-md rounded-lg p-4">
                <div className='border-2 border-black mb-4 w-full rounded-md h-16'></div>
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold'>Elements</button> is the unlimited creative subscription. Millions of creative assets, at one low cost.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Express your interest</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap items-center gap-4 shadow-md rounded-lg p-4">
                <div className='border-2 border-black mb-4 w-full rounded-md h-16'></div>
                <p className="text-slate-500 text-center text-sm">
                  Hundreds of thousands of tracks and sound effects created by a community of music professionals from all over the world can be found at  <button className='text-indigo-900 font-semibold '>AudioJungle.</button>
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap gap-6 items-center shadow-md rounded-lg p-4">
                <img src={Image203} alt="Codecanyon Logo" className="mx-auto h-16 mb-4" />
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold '>CodeCanyon</button> contains thousands of plugins, code and scripts for Bootstrap, Javascript, PHP, WordPress, HTML5 and more.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap gap-9 items-center shadow-md rounded-lg p-4">
                <div className='border-2 border-black mb-4 w-full rounded-md h-16'></div>
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold '>Elements</button> is the unlimited creative subscription. Millions of creative assets, at one low cost.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Express your interest</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap gap-4 items-center shadow-md rounded-lg p-4">
                <div className='border-2 border-black mb-4 w-full rounded-md h-16'></div>
                <p className="text-slate-500 text-center text-sm">
                  Hundreds of thousands of tracks and sound effects created by a community of music professionals from all over the world can be found at <button className='text-indigo-900 font-semibold '>AudioJungle.</button>
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap items-center gap-6 shadow-md rounded-lg p-4">
                <div className='border-2 border-black mb-4 w-full rounded-md h-16'></div>
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold '>CodeCanyon</button> contains thousands of plugins, code and scripts for Bootstrap, Javascript, PHP, WordPress, HTML5 and more.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap items-center gap-9 shadow-md rounded-lg p-4">
                <img src={Image204} alt="Codecanyon Logo" className="mx-auto h-16 mb-4" />
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold '>Elements</button> is the unlimited creative subscription. Millions of creative assets, at one low cost.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Express your interest</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap items-center gap-4 shadow-md rounded-lg p-4">
                <img src={Image205} alt="Codecanyon Logo" className="mx-auto h-16 mb-4" />
                <p className="text-slate-500 text-center text-sm">
                  Hundreds of thousands of tracks and sound effects created by a community of music professionals from all over the world can be found at <button className='text-indigo-900 font-semibold '>AudioJungle.</button>
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
              <div className="bg-white flex flex-col flex-wrap items-center gap-6 shadow-md rounded-lg p-4">
                <img src={Image203} alt="Codecanyon Logo" className="mx-auto h-16 mb-4" />
                <p className="text-slate-500 text-center text-sm">
                  <button className='text-indigo-900 font-semibold '>CodeCanyon</button> contains thousands of plugins, code and scripts for Bootstrap, Javascript, PHP, WordPress, HTML5 and more.
                </p>
                <button className="border-indigo-900 border-2  text-indigo-900 rounded-md font-bold py-2 px-4">Read our upload guide</button>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Seller;