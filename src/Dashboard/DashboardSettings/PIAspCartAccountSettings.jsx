import React, { useState } from 'react';
import PIAspCartEditDetails from './PIAspCartEditDetails';
import PIAspCartDisconnectGoogleAccount from './PIAspCartDisconnectGoogleAccount';

function PIAspCartAccountSettings() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {selectedTab === 'EditDetails' ? <PIAspCartEditDetails /> : <div className=' flex flex-wrap md:flex-nowrap justify-between'>
        <div></div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Welcome to the AspCart Account Center</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 gap-4">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Your account details</h2>
            <div className='border-b-2'>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-slate-100 focus:outline-none focus:shadow-outline"
                  value=""
                  placeholder='Admin@501'
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
                  value=""
                  placeholder='Admin'
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
                  value=""
                  placeholder='admin501@gmail.com'
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-evenly">
              <button className={`bg-indigo-900 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline${selectedTab === 'EditDetails' ? '' : ''}`}
                onClick={() => handleTabClick('EditDetails')}>
                Edit details
              </button>
              <button className={`border-indigo-900 border-2 text-indigo-900 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline${selectedTab === 'DisconnectGoogleAccount' ? '' : ''}`}
                onClick={() => handleTabClick('DisconnectGoogleAccount')}>
                Disconnect Google Account
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className='border-indigo-900 border-2 text-indigo-900 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'>Sign Out</button>
        </div>
      </div>}

      {selectedTab === 'DisconnectGoogleAccount' && <PIAspCartDisconnectGoogleAccount /> }

    </div>
  );
}

export default PIAspCartAccountSettings;