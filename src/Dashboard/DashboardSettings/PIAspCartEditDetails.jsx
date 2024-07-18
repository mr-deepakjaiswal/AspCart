import React, { useState } from 'react'
import PIAspCartAccountSettings from './PIAspCartAccountSettings';

export default function PIAspCartEditDetails() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'CancelCartAccount' ? <PIAspCartAccountSettings /> : <div className='p-6 flex ' >
        <div></div>
        <div>
          <div className="bg-white w-4/5 p-6 rounded-md shadow-md">
            <h2 className="text-center text-2xl font-bold  mb-4">Account Details</h2>
            <p className="text-black rounded-md mb-4 bg-blue-200 p-4">
              Some fields are not editable here. Please update them via your Google account.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Admin"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Last_name"
                  readOnly
                />
              </div>
            </div>
            <div className=''>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="admin501@gmail.com"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Admin@501"
                  readOnly
                />
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm">
              We allow 3 username changes per year. You have 3 changes remaining.
            </p>
            <div className="flex gap-4 justify-start">
              <button
                className="bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                disabled
              >
                Save Changes
              </button>
              <button className={`border-2 border-indigo-900 text-indigo-900 font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ml-4
            ${selectedTab === 'CancelCartAccount' ? '' : ''}`}
                onClick={() => handleTabClick('CancelCartAccount')}>
                Cancel
              </button>
            </div>
            <p className="text-gray-600 mt-4 text-sm text-center">
              Changes to your username may affect URLs to your profile, items or services. Username changes will be displayed on your profile.
            </p>
          </div>
        </div>
        <div>
          <button className='border-indigo-900 w-36 border-2 text-indigo-900 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'>Sign Out</button>
        </div>
      </div>}

    </div>
  )
}
