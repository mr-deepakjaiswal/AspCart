import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import Group338352 from '../assets/DashboardImages/Group 338352.png'
export default function DounloadPageFirst() {

  const [CheckBox, setCheckBox] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-6'>
      <div className='flex flex-wrap flex-col gap-6 bg-white md:w-3/4 p-4 rounded-lg'>
        <div className='flex flex-wrap md:gap-0 gap-4 justify-between'>
          <div>
            <button className='border-2 p-2 rounded-md flex items-center gap-2'>All marketplaces <span><FaAngleDown /></span></button>
          </div>
          <div className="flex flex-wrap">
            <button className="bg-red-500 border-2  text-white font-bold py-1 px-2 rounded">
              Data Purchased
            </button>
            <button className="bg-white text-gray-700 font-bold py-1 px-2 rounded">
              Title
            </button>
            <button className="bg-white text-gray-700 font-bold py-1 px-2 rounded">
              My Rating
            </button>
            <button className="bg-white text-gray-700 font-bold py-1 px-4 rounded">
              Recent Updates
            </button>
          </div>
        </div>
        <div className='shadow-md flex flex-col gap-4 p-6'>
          <div className='flex justify-center md:justify-start'>
            <div className='flex flex-wrap justify-center md:gap-0 gap-4 md:justify-between w-3/4'>
              <h1 className='md:text-start text-center'>CodePlus - Code And Template Marketplace</h1>
              <div className='flex flex-wrap flex-col gap-2'>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline flex items-center gap-2"
                  >
                    <FaArrowCircleDown />
                    Download
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block text-sm px-2 py-1 text-gray-800 hover:bg-gray-100"
                      >
                        All files & documentation
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (PDF)
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (text)
                      </a>
                    </div>
                  )}
                </div>
                <button className='flex items-center gap-2 border-2 font-semibold border-indigo-900 text-indigo-900 p-2 rounded-md'><span><FaArrowCircleDown /></span> Get Hosting</button>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap md:gap-0 gap-4 md:justify-between justify-center w-3/4' >
            <div className='flex flex-col md:justify-start md:items-start text-sm md:text-md ms-16 md:ms-0'>
              <button className='font-semibold text-indigo-900 '>Regular License</button>
              <h1 className='text-center md:text-start'>5 months of <button className='font-semibold text-indigo-900'>support</button> remaining. <button className='font-semibold text-indigo-900'>Extend now</button> </h1>
              <div className=" flex items-center justify-center md:justify-start gap-2">
                <input
                  type="checkbox"
                  id="CheckBox"
                  value={CheckBox}
                  onChange={(e) => setCheckBox(e.target.value)}
                />
                <label htmlFor="CheckBox" className="block text-gray-700 text-sm font-bold">
                  Save card for next time
                </label>
              </div>
            </div>
            <div className='shadow-md ms-12 md:ms-0 p-2'>
              <h1>Rate this item</h1>
              <img src={Group338352} alt="" />
            </div>
          </div>
        </div>
        <div className='shadow-md flex flex-col gap-4 p-6'>
          <div className='flex justify-center md:justify-start'>
            <div className='flex flex-wrap justify-center md:gap-0 gap-4 md:justify-between w-3/4'>
              <h1 className='md:text-start text-center'>CodePlus - Code And Template Marketplace</h1>
              <div className='flex flex-wrap flex-col gap-2'>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline flex items-center gap-2"
                  >
                    <FaArrowCircleDown />
                    Download
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block text-sm px-2 py-1 text-gray-800 hover:bg-gray-100"
                      >
                        All files & documentation
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (PDF)
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (text)
                      </a>
                    </div>
                  )}
                </div>
                <button className='flex items-center gap-2 border-2 font-semibold border-indigo-900 text-indigo-900 p-2 rounded-md'><span><FaArrowCircleDown /></span> Get Hosting</button>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap md:gap-0 gap-4 md:justify-between justify-center w-3/4' >
            <div className='flex flex-col md:justify-start md:items-start text-sm md:text-md ms-16 md:ms-0'>
              <button className='font-semibold text-indigo-900 '>Regular License</button>
              <h1 className='text-center md:text-start'>5 months of <button className='font-semibold text-indigo-900'>support</button> remaining. <button className='font-semibold text-indigo-900'>Extend now</button> </h1>
              <div className=" flex items-center justify-center md:justify-start gap-2">
                <input
                  type="checkbox"
                  id="CheckBox"
                  value={CheckBox}
                  onChange={(e) => setCheckBox(e.target.value)}
                />
                <label htmlFor="CheckBox" className="block text-gray-700 text-sm font-bold">
                  Save card for next time
                </label>
              </div>
            </div>
            <div className='shadow-md ms-12 md:ms-0 p-2'>
              <h1>Rate this item</h1>
              <img src={Group338352} alt="" />
            </div>
          </div>
        </div>
        <div className='shadow-md flex flex-col gap-4 p-6'>
          <div className='flex justify-center md:justify-start'>
            <div className='flex flex-wrap justify-center md:gap-0 gap-4 md:justify-between w-3/4'>
              <h1 className='md:text-start text-center'>CodePlus - Code And Template Marketplace</h1>
              <div className='flex flex-wrap flex-col gap-2'>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline flex items-center gap-2"
                  >
                    <FaArrowCircleDown />
                    Download
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block text-sm px-2 py-1 text-gray-800 hover:bg-gray-100"
                      >
                        All files & documentation
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (PDF)
                      </a>
                      <a
                        href="#"
                        className="block px-2 text-sm py-1 text-gray-800 hover:bg-gray-100"
                      >
                        License certificate & purchase code (text)
                      </a>
                    </div>
                  )}
                </div>
                <button className='flex items-center gap-2 border-2 font-semibold border-indigo-900 text-indigo-900 p-2 rounded-md'><span><FaArrowCircleDown /></span> Get Hosting</button>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap md:gap-0 gap-4 md:justify-between justify-center w-3/4' >
            <div className='flex flex-col md:justify-start md:items-start text-sm md:text-md ms-16 md:ms-0'>
              <button className='font-semibold text-indigo-900 '>Regular License</button>
              <h1 className='text-center md:text-start'>5 months of <button className='font-semibold text-indigo-900'>support</button> remaining. <button className='font-semibold text-indigo-900'>Extend now</button> </h1>
              <div className=" flex items-center justify-center md:justify-start gap-2">
                <input
                  type="checkbox"
                  id="CheckBox"
                  value={CheckBox}
                  onChange={(e) => setCheckBox(e.target.value)}
                />
                <label htmlFor="CheckBox" className="block text-gray-700 text-sm font-bold">
                  Save card for next time
                </label>
              </div>
            </div>
            <div className='shadow-md ms-12 md:ms-0 p-2'>
              <h1>Rate this item</h1>
              <img src={Group338352} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-min md:w-2/6 p-4 rounded-lg'>
        <h1 className='text-xl font-bold border-b-2 pb-4'>Download Immediately</h1>
        <p className='text-lg py-4'>You Should download your purchases <b>immediately</b> as items may be removed from time to time.</p>
      </div>
    </div>
  )
}
