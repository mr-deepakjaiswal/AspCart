import React, { useState } from 'react';
import { MdDateRange } from "react-icons/md";

function ItemSupportVacationsPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a backend
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mb-4">
        <p className="text-gray-700 border-2 p-4 rounded-md text-start font-semibold">
          If you're unable to respond to buyer questions in a regular timely manner
          and would like to share that information with your buyers, you can add
          the dates here. We'll show this information to your buyers near the
          comment form, contact form and other places where they're likely to be
          asking questions.
        </p>
      </div>
        <h1 className='text-lg font-semibold mb-4'>Add a vacation</h1>  
      <form onSubmit={handleSubmit} className='border-2 p-4 rounded-md'>
        <div className="flex gap-10 flex-wrap ">
          <div>
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
              First Day
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <span className='w-3 h-3 text-slate-500'><MdDateRange /></span> */}
              </div>
              <input
                type="date"
                id="startDate"
                className="block w-96 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
              Last Day
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> */}
              </div>
              <input
                type="date"
                id="endDate"
                className="block w-96 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 tracking-wide text-white font-bold bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Vacation
        </button>
      </form>
      <div className=" mt-4">
        <p className="text-slate-500 font-semibold">
          Please provide dates in the <button className='text-indigo-900'>UTC time zone.</button>
        </p>
      </div>
    </div>
  );
}

export default ItemSupportVacationsPage;
