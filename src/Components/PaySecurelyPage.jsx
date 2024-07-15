import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import Paypal from '../assets/images/Paypal.png'
import Reactangle22158 from '../assets/images/Rectangle22.png'
import Group1 from '../assets/images/Group1.png'

export default function PaySecurelyPage() {

  const [CardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState('');


  return (
    <div className='flex justify-between gap-8 p-6'>
      {/* left part  */}
      <div className='w-5/6'>
        <div className=' border-2 rounded-md'>
          <div className='bg-[#F2F2F2] flex justify-end p-2'>
            <button className='p-1 border-2'><span><FaPen /></span></button>
          </div>
          <div className='flex justify-between p-6'>
            <h1>__Designer__ Last_name <br />yhusvsivubibv <br />india, Chattisgarh <br />India</h1>
            <h1>GSTIN: <br />
              Not provided</h1>
          </div>
        </div>

        <div className='bg-[#F2F2F2] p-4 text-center mt-4 rounded-md'><button className='text-xl font-semibold text-slate-500 '>Select Payment Method</button></div>

        <div className='flex justify-between gap-2 mt-4'>
          <div className='w-1/2 shadow-md p-4 flex justify-center rounded-md'>
            <img src={Group1} alt="" />
          </div>
          <div className='w-1/2 shadow-md p-4 flex justify-center rounded-md'>
            <img src={Paypal} alt="" />
          </div>
        </div>

        <div className='mt-8 px-8'>
          <div className='mt-4'>
            <h1 className='text-lg'>After payment via PayPal's secure checkout, we will send you a link to download your files.</h1>
          </div>

          <div className='flex gap-4 mt-2'>
          <h1 className='text-lg'>PayPal accepts</h1>
          <img src={Group1} alt="" />
          </div>
        </div>
        <div className='flex justify-end px-6 border-b-2 pb-1'>
          <h1 className='text-xl font-bold'>$173.00</h1>
        </div>
        <div>
          <div className='flex justify-between px-6 mt-2'>
            <h1 className='text-xl'>Handling Fee:</h1>
            <h1 className='text-xl'>$0.00</h1>
          </div>
          <div className='flex justify-between px-6 border-b-2 mt-2 pb-1'>
            <h1 className='text-xl'>GST:</h1>
            <h1 className='text-xl'>$22.30</h1>
          </div>
          <div className='flex justify-between px-6 border-b-2 mt-2 pb-1'>
            <h1 className='text-xl font-bold'>Total:</h1>
            <h1 className='text-xl font-bold'>$195.30</h1>
          </div>
        </div>

        <div className='mt-4 flex justify-end'>
          <button className='border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-md flex items-center gap-2'>Pay with <span><img className='w-16' src={Paypal} alt="" /></span></button>
        </div>
      </div>

      {/* right part  */}
      <div className='w-1/4 h-fit border-2 rounded-md'>
        <div className='bg-[#F2F2F2] p-2'>
          <h1 className='text-xl font-bold ps-4'>Order Summery</h1>
        </div>
        <div className='px-4'>
          <div className='flex justify-between mt-2'>
            <h1 className='text-sm'>Avada | Website Builder F...</h1>
            <h1 className='text-sm'>$69.00</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-sm'>GutenPano - 360 Panoram...</h1>
            <h1 className='text-sm'>$17.00</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-sm'>GutenPano - 360 Panora...</h1>
            <h1 className='text-sm'>$17.00</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-sm'>GutenPano - 360 Panora...</h1>
            <h1 className='text-sm'>$17.00</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-sm'>GutenPano - 360 Panora...</h1>
            <h1 className='text-sm'>$17.00</h1>
          </div>
          <div className='flex justify-between border-b-2 pb-1'>
            <h1 className='text-sm'>GutenPano - 360 Panora...</h1>
            <h1 className='text-sm'>$69.00</h1>
          </div>
        </div>
        <div className='flex justify-between mt-1 border-b-2 pb-1 px-4'>
          <h1 className='text-sm'>Handling Fee:</h1>
          <h1 className='text-sm'>$0.00</h1>
        </div>
        <div className='flex justify-between mt-1 px-4'>
          <h1 className='text-md font-bold'>Total:</h1>
          <h1 className='text-md font-bold'>US$ 69.00</h1>
        </div>
      </div>
    </div>
  )
}
