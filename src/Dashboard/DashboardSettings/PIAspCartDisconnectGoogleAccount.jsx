import React, { useState } from 'react'
import PIAspCartAccountSettings from './PIAspCartAccountSettings';

export default function PIAspCartDisconnectGoogleAccount() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div> {selectedTab === 'CancelDisconnectAccount' ? <PIAspCartAccountSettings /> : <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-between'>
      <div></div>
      <div className="bg-white shadow-md rounded-md p-6 md:w-3/5">
        <h2 className="text-xl font-bold mb-4">Disconnect Google Account</h2>
        <p className="text-gray-700 mb-4">
          If you are unsure, there is a help article.
        </p>
        <p className="text-gray-700 mb-6 border-b-2 pb-2">
          This will disconnect your Envato account from your Google account. You will
          receive a password reset email and will have to set a password to log in.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-900 text-white font-bold py-2 px-6 rounded">
            Submit
          </button>
          <button className={`border-2 border-indigo-900 text-indigo-900 font-bold py-2 px-6 rounded ${selectedTab === 'CancelDisconnectAccount' ? '' : ''}`}
            onClick={() => handleTabClick('CancelDisconnectAccount')}>
            Cancel
          </button>
        </div>
      </div>
      <div className=''>
        <button className='border-indigo-900 border-2 text-indigo-900 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline '>Sign Out</button>
      </div>
    </div>}

    </div>
  )
}
