import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import Rectangle4543 from '../assets/images/Rectangle 4543.png'


export default function Item() {

  const [showModal, setShowModal] = React.useState(false);
  const [ShowModalChageDetails, setShowModalChageDetails] = React.useState(false);
  const [ExtendSupport, setExtendSupport] = useState('');

  return (
    <div>
      <div className='shadow-xl mt-4 px-6 py-4 rounded-lg border-2 border-slate-100'>
        <div><h1 className='text-xl font-bold border-b-2 pb-2'>License Option</h1></div>
        <div className='border-b-2 pb-2'>
          <div className='flex justify-between py-2'>
            <h1 className='font-bold text-md flex items-center gap-2'> <span className='text-green-600'><FaCircleDot /></span>Single Use</h1>
            <p className='font-bold text-md'>$64</p>
          </div>
          <div className='px-8'>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span> Quality checked by AspCart</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Future Update</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>6 months support from Odin_Desgin</h1>
          </div>
        </div>
        <div className='border-b-2 pb-2'>
          <div className='flex justify-between py-2'>
            <h1 className='font-bold text-md flex items-center gap-2'> <span className='text-slate-500'><FaCircleDot /></span>Unlimited Use</h1>
            <p className='font-bold text-md'>$99</p>
          </div>
          <div className='px-8'>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Quality checked by AspCart</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>Future Update</h1>
            <h1 className='flex items-center gap-2'> <span className='text-green-600'><FaCheckCircle /></span>6 months support from Odin_Desgin</h1>
          </div>
        </div>
        <div>
          <div className='flex gap-4 py-4'>
            <button className='w-1/2
               flex gap-1 items-center bg-indigo-950 text-white px-4 py-2 text-md font-semibold rounded-lg justify-center' onClick={() => setShowModal(true)}> <span><FaShoppingCart /></span> Add to Cart</button>
            <button className='w-1/2 border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-lg'>Buy Now</button>
            {/* modal for item add to cart */}
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div className="flex flex-col  items-center">
                          <span className='text-4xl text-green-500'><FaCheckCircle /></span>
                          <h3 className='text-2xl font-semibold'>Item added to your cart</h3>
                        </div>
                        {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <FaRegTimesCircle />
                    </span>
                  </button> */}
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className='bg-[#F2F2F2] border-2 rounded-md flex gap-4 p-6'>
                          <div className='flex border-r-2 pr-16'>
                            <div>
                              <img className='w-20' src={Rectangle4543} alt="" />
                            </div>
                            <div className='p-2'>
                              <h3 className='text-sm font-bold'>Easto - Single Property Theme</h3>
                              <h3 className='text-sm text-slate-500'>by Opal_WP</h3>
                            </div>
                          </div>
                          <div className='text-center'>
                            <h3 className='text-sm font-bold'>$19</h3>
                            <h3 className='text-sm'><b>License:</b> Regular</h3>
                            <h3 className='text-sm'><b>Support:</b> 6 months support</h3>
                            <button className='text-sm text-indigo-900 font-semibold '>Change details</button>
                          </div>
                        </div>
                        <div className="mt-4 w-full flex justify-center items-center gap-2 ">
                          <input
                            type="checkbox"
                            id="ExtendSupport"
                            value={ExtendSupport}
                            onChange={(e) => setExtendSupport(e.target.value)}
                          />
                          <label htmlFor="ExtendSupport" className="block text-gray-700 text-sm font-bold mb-2">
                            Extend support to 12 months. +$2.63 Save $3.50 off regular price.
                          </label>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <div className='flex items-center justify-center'>
                          <button
                            className="text-white bg-slate-400 font-semibold uppercase px-6 py-3 text-sm outline-none rounded-md focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Keep Browsing
                          </button>
                          <button
                            className="bg-indigo-900 rounded-md text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Go to Checkout
                          </button>
                        </div>
                        <h1 className='text-sm text-slate-500 text-center p-2'>Price in is Rs Indian  and excludes tax and handling fess</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {/* modal for cheke change details */}

          </div>
          <div>
            <h1 className='text-sm text-slate-500 text-center'>Price in is Rs Indian and excludes tax and handling fess</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
