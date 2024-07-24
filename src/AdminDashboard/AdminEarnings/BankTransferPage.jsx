import React from 'react'
import { FaQuestionCircle } from "react-icons/fa";

export default function BankTransferPage() {
  return (
    <div>
      <p className="text-gray-600 mb-4">
        Processing time: <span className="text-indigo-900 font-semibold"> 5-6 Business Days</span>
        <br />
        Estimated Fees: <span className="text-indigo-900 font-semibold">1.00 USD</span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="bankAccountCountry" className="block text-gray-700 text-xs font-bold mb-2">
            Bank Account Country
          </label>
          <select
            id="bankAccountCountry"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="United States of America">
              United States of America
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="bankAccountCurrency" className="block text-xs text-gray-700 font-bold mb-2">
            Bank Account Currency
          </label>
          <select
            id="bankAccountCurrency"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="US Dollar (USD)">US Dollar (USD)</option>
          </select>
        </div>
        <div>
          <label htmlFor="institutionNumber" className="block text-xs text-gray-700 font-bold mb-2">
            <div className="flex gap-2 items-center">
              <span><FaQuestionCircle /></span>
              Institution Number
            </div>
          </label>
          <input
            type="text"
            id="institutionNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="321"
          />
          <p className="text-xs text-gray-600">
            Institution number has 3 digits
          </p>
        </div>
        <div>
          <label htmlFor="transitNumber" className="block text-xs text-gray-700 font-bold mb-2">
            <div className="flex gap-2 items-center">
              <span><FaQuestionCircle /></span>
              Transit Number
            </div>
          </label>
          <input
            type="text"
            id="transitNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="54123"
          />
          <p className="text-xs text-gray-600">
            Transit Number has 5 digits
          </p>
        </div>
        <div>
          <label htmlFor="accountNumber" className="block text-xs text-gray-700 font-bold mb-2">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="541238877996"
          />
          <p className="text-xs text-gray-600">
            Account number has 5 to 12 digits
          </p>
        </div>
        <div>
          <label htmlFor="accountHolder" className="block text-xs text-gray-700 font-bold mb-2">
            <div className="flex gap-2 items-center">
              <span><FaQuestionCircle /></span>
              Name of Account Holder (as shown on bank statement)
            </div>
          </label>
          <input
            type="text"
            id="accountHolder"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Admin"
          />
        </div>
      </div>
      <div className="flex justify-start mt-6 border-t-2 pt-2">
        <button className="bg-slate-100  text-slate-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
          Back
        </button>
        <button
          type="submit"
          className={`bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
        >
          Add
        </button>
      </div>
      <div className='flex mt-4 gap-4 p-6 flex-wrap md:flex-nowrap'>
        <div className='border p-4 rounded-md bg-red-50 text-red-600 border-red-600'>
          <h1 className='font-semibold'>Important:</h1>
          <ul className='list-disc p-4 text-xs font-semibold'>
            <li>
              Please provide your full name (or business legal name for businesses) associated with the provided account. Failure to do so may result in a returned or delayed payment.</li>
            <li>
              Please ensure that the provided account is a Canadian Dollar CAD currency account, otherwise payments will likely be returned by your bank.</li>
          </ul>
        </div>
        <div className='border p-4 h-min rounded-md bg-slate-100 border-slate-500'>
          <p className='text-xs font-semibold text-slate-500'> Bank Name <br />
            Habib Canadian Bank <br />
            Address <br />
            918 Dundas St East, Ste 1-B, Mississauga, Ontario, Canada <br />
            We provide the bank name, logo and address for indicative purpose to help you confirm you entered the correct bank account details. However, sometimes this information may not always be accurate, such as when a smaller bank is using another larger bank's Institution, SWIFT-BIC, Sort Code, Routing or Branch number.</p>
        </div>
      </div>

    </div>
  )
}
