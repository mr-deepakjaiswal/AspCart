import React, { useState } from 'react';

function BillingDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gstin, setGstin] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [gst, setGst] = useState('');

  return (
    <div className=" mx-auto px-4 py-8">
      <div className="flex  gap-8">
        <div className="border-2 border-indigo-900 rounded-lg shadow-md p-6">
          <h2 className="bg-[#F2F2F2] p-2 text-xl font-bold mb-4">Billing Details</h2>
          <p className="text-sm text-gray-600 mb-4">
            Envato collects and uses personal data in accordance with our{' '}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
            . By creating an account, you agree to our{' '}
            <a href="#" className="text-blue-500">
              Terms and Conditions
            </a>
            .
          </p>
          <div className='flex flex-wrap justify-center gap-2'>
          <div className="mb-4 w-1/3">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name (Given Name)
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name (Family Name)
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <select
              id="country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">India</option>
              {/* Add more country options here */}
            </select>
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="addressLine1" className="block text-gray-700 text-sm font-bold mb-2">
              Address line 1*
            </label>
            <input
              type="text"
              id="addressLine1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="addressLine2" className="block text-gray-700 text-sm font-bold mb-2">
              Address line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="states" className="block text-gray-700 text-sm font-bold mb-2">
              State/Province/Region
            </label>
            <select
              id="states"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="US">Madhya Pradesh</option>
              <option value="CA">Gujrat</option>
              {/* Add more country options here */}
            </select>
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">
              Zip / Postal Code
            </label>
            <input
              type="text"
              id="zip"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="gstin" className="block text-gray-700 text-sm font-bold mb-2">
              GSTIN
            </label>
            <input
              type="text"
              id="gstin"
              placeholder='22AAAAA2222A125'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
            />
          </div>
          </div>
          <div className='flex gap-4 ms-40 '>
            <button className='bg-slate-300 px-4 py-2 rounded-md text-slate-500 font-semibold'>Back</button>
            <button className='bg-indigo-900 px-4 py-2 rounded-md font-semibold text-white'>Save & Continue</button>
          </div>
        </div>
        <div className="bg-white border-2 border-indigo-900 w-1/2 h-fit rounded-lg shadow-md p-6">
          <h2 className="bg-[#F2F2F2] p-2 text-xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-gray-700 text-sm font-bold mb-2">
                Avada | Website Builder F...
              </p>
              <p className="text-gray-700 text-sm font-bold mb-2">$69.00</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-gray-700 text-sm font-bold mb-2">
                Handling Fee:
              </p>
              <p className="text-gray-700 text-sm font-bold mb-2">$0.00</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="text-gray-700 text-xl font-bold mb-2">Total:</p>
              <p className="text-gray-700 text-xl font-bold mb-2">US$ 69.00</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Secure checkout
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1060px] rounded-md mt-8 border-2 border-indigo-900">
          <div className="bg-[#F2F2F2] rounded-lg shadow-md p-6">
            <h2 className="text-xl text-center text-slate-500 font-bold mb-4">Select Payment Method</h2>
            {/* Add your payment methods here */}
          </div>
        </div>
    </div>
  );
}

export default BillingDetails;
