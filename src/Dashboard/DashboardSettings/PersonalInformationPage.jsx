import React, { useState } from 'react'

export default function PersonalInformationPage() {
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
    <div className=''>
      <div className="p-6 ">
        <div className='flex gap-4'>
          <div className='flex flex-col w-1/2 '>
            <div className="mb-4 ">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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

          </div>


          <div className='flex flex-col w-1/2'>
            <div className="mb-4">
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
            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
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
        </div>
        <div className='flex gap-4 '>
          <button className='bg-red-600 px-4 py-2 rounded-md text-white font-semibold'>Save</button>
          <button className='bg-slate-300 px-4 py-2 rounded-md font-semibold text-slate-500'>Close</button>
        </div>
      </div>
      
    </div>
  )
}
