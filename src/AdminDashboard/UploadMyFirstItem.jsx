import React, { useState } from 'react'
import UploadMyFirstItemNextBtn from './UploadMyFirstItemNextBtn';

export default function UploadMyFirstItem() {
  const [category, setCategory] = useState('UI Templates');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'next' ? <UploadMyFirstItemNextBtn /> : <div className="flex flex-col gap-4 justify-center items-center bg-white mx-auto p-6 pb-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Select a category for your upload:</h2>
        <div className='border-2 p-6 md:w-3/6'>
          <div className="mb-4">
            <label htmlFor="category" className="block font-bold mb-2">
              Select a category
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              id='category'
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="UI Templates">UI Templates</option>
              {/* Add more categories here */}
            </select>
          </div>
          <p className="text-sm text-gray-600 text-center border-b-2 pb-2">
            You can still upload <span className='font-semibold text-indigo-900'>10 items</span> to this category.
            You are currently allowed 10 items for review at a time.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button className={`bg-indigo-900 text-white font-bold py-2 px-4 rounded mr-2 ${selectedTab === 'next' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
              onClick={() => handleTabClick('next')}>
              Next
            </button>
            <button className="bg-gray-100 text-red-600 font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </div>}

    </div>
  )
}
