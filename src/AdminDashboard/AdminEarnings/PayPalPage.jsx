import React from 'react'

export default function PayPalPage() {
  return (
    <div className="">
      <h2 className="text-gray-600">Processing time: <span className="text-indigo-900 font-semibold">Same Day</span> </h2>
      <p className="text-gray-600">Estimated Fees: <span className="text-indigo-900 font-semibold">
        PayPal fees may apply PayPal fees may apply</span></p>

      <div className="mb-4 mt-4">
        <label htmlFor="email1" className="block text-gray-700 text-xs font-bold mb-2">
          Email address of your existing PayPal Account
        </label>
        <input
          type="email"
          id="email1"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email2" className="block text-gray-700 text-xs   font-bold mb-2">
          Email address of your existing PayPal Account
        </label>
        <input
          type="email"
          id="email2"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="bg-red-50 border border-red-400 text-red-700 w-3/5 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Important:</strong>
        <span className="block sm:inline">
          <ul className="list-disc pl-4 text-sm">
            <li>Ensure your PayPal email address is correct.</li>
            <li>PayPal may charge fees to receive or withdrawal funds</li>
          </ul>
        </span>
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
    </div>
  )
}
