import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import Rectangle19 from '../assets/images/Rectangle 19.png'
import { FaRegTimesCircle } from "react-icons/fa";

export default function ShopingCartPage() {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='flex justify-between p-10'>
      {/* left div */}
      <div className='border-2 w-4/5'>
      <div className='flex justify-between bg-[#F2F2F2] p-2'>
        <div>
          <h1 className='font-bold text-xl'>Shoping Cart</h1>
        </div> 
        <div className='flex items-center gap-2'>
          <h1 className='text-md font-semibold text-slate-500'>Empty Cart</h1>
          <button className='border-2 p-1 text-red-600 text-xl'><span><RiDeleteBin6Fill /></span></button>
        </div>
        </div>
      <div className='p-4 '>
        <div className='shadow-md items-center flex gap-4 p-4'>
          <div className=''>
            <img src={Rectangle19} alt="" />
          </div>
          <div>
            <h1 className='text-sm font-bold'>Avada | Website Builder For WordPress & eCommerce</h1>
            <p className='text-sm'><i>Item by ThemeFusion</i></p>
            <div className='flex gap-4'>
            <p className='text-sm'><b>License:</b>Regular</p>
            <p className='text-sm'><b>Support:</b>6 months support</p>
            </div>
          </div>
          <div className=''>
          <button className='p-2 font-semibold text-2xl shadow-md'>-</button>
          <button className='p-2 font-semibold text-2xl shadow-md'>1</button>
          <button className='p-2 font-semibold text-2xl shadow-md'>+</button>
        </div>
        <div className=''><h1 className='text-xl font-bold' >$69</h1></div>
        <div className=''><button className='border-2 p-1 text-red-600 text-xl' onClick={() => setShowModal(true)}><span><RiDeleteBin6Fill /></span></button></div>
        </div>

        {/* modal for deliting the item */}

        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-[#F2F2F2] flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                  Confirm Delete
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="font-bold text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <FaRegTimesCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-6">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className='my-2 text-lg'>Are you sure?</h1>
                    <h1 className='my-2 text-lg'>Want to delete this item</h1>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-4 p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-slate-500 bg-neutral-300 font-bold uppercase px-6 py-3 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        
      </div>
      </div>
      {/* right div */}
      <div className='border-2 w-64'>
        <div><h1 className='text-2xl font-bold text-center mt-2'>Your Cart Total</h1></div>
        <div><h1 className='text-2xl font-bold text-center mt-2'>US$ 69</h1></div>
        <div className='flex justify-center mt-2'><button className='bg-red-600 text-white text-xl font-bold py-2 px-4 rounded-md' >Secure Checkout</button></div>
        <div><p className='text-md font-semibold text-center mt-2'>taxes and a handing fee.</p></div>
      </div>
    </div>
  )
}
