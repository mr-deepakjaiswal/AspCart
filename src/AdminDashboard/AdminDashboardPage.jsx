import React, { useState } from 'react'
import UploadMyFirstItem from './UploadMyFirstItem';

export default function AdminDashboardPage() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'UploadMyFirstItem' ? <UploadMyFirstItem /> : <div className='flex flex-wrap md:flex-nowrap gap-4 p-6'>
        <div className='md:w-3/4 h-min bg-white rounded-lg  p-6'>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome and congratulations on becoming an author with Envato Market.</h1>
            <p className="text-gray-600 mb-8">Now you can sell your digital items to millions of users and make money from it.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-100 rounded-lg p-8 flex flex-wrap flex-col items-center border-2 border-red-600">
                <h2 className="text-xl font-bold mb-4 text-red-600">Upload your first item</h2>
                <p className="text-gray-700 mb-4 text-sm text-center">Start uploading your digital items and working with our review team to make sure they are in great shape to start selling.</p>
                <button className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 ${selectedTab === 'UploadMyFirstItem' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                  onClick={() => handleTabClick('UploadMyFirstItem')}>Upload my first item</button>
              </div>

              <div className="bg-red-100 rounded-lg p-8 flex flex-wrap flex-col items-center border-red-600 border-2">
                <h2 className="text-xl font-bold mb-4 text-red-600 text-center">Your profile</h2>
                <p className="text-gray-700 mb-4 text-sm text-center">Fill out your profile so our buyers know who created the items they're buying - doing this means you can start building relationships and a reputation on Envato Market.</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Take me to my profile</button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 mt-8 flex flex-col flex-wrap justify-center items-center">
              <h2 className="text-xl font-bold mb-4">Tax Requirements</h2>
              <p className="text-gray-700 mb-4 text-center">Depending on where you are in the world, you will be required to adhere to different tax requirements. Because of this, it's important you <span className="text-indigo-900 ">complete your tax information</span> to ensure that the correct tax rates, if any, are applied to your earnings.</p>
            </div>

            <p className="text-gray-600 mt-8">Thank you again for becoming an author and we hope you have lots of success with us!</p>
            <p className="text-gray-600">The Community Team</p>
          </div>

        </div>
        <div className='md:w-2/6  h-fit rounded-lg'>
          <div className='flex flex-col gap-4'>
            <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
              <h1 className='text-lg font-bold border-b-2 pb-2'>Upload an item</h1>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="monthlyServiceFees">Monthly Service Fees</option>
              </select>
            </div>
            <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
              <h1 className='text-lg font-bold border-b-2 pb-2'>Author resources</h1>
              <ul className='text-sm list-disc px-6'>
                <li>Asset Use Guidelines</li>
                <li>Author Guide</li>
                <li>Authoring Tutorial</li>
                <li>Knowledgebase</li>
                <li>Model Releases</li>
                <li>Selling Tips</li>
                <li>Watermarks</li>
              </ul>
            </div>
            <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
              <h1 className='text-lg font-bold border-b-2 pb-2'>Author resources</h1>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xs font-semibold text-slate-500'>Mar 22</h1>
                <ul className='text-xs px-6 list-disc text-wrap'>
                  <li><b>Free File nominations for ThemeForest</b> are now open for April, May and June. We're looking for WordPress themes at the moment - you can view the criteria and nominate items <button className='font-bold text-indigo-900'>HERE.</button></li>
                  <li><b>Payment system:</b> All Envato Market payments are now being sent via our new payout system. If you have not set up your details yet, visit <a href="#" className='text-indigo-900 font-semibold'>https://themeforest.net/accounts/payouts</a> and select 'Update Payout Method.' For more information, see this <button className='font-bold text-indigo-900'>Help Centre article.</button></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xs font-semibold text-slate-500'>Fab 05</h1>
                <ul className='text-xs px-6 list-disc text-wrap'>
                  <li> <b>Steal of the Weekitem nominations</b>are now open for ThemeForest. Check <button className='font-bold text-indigo-900'>this forum thread</button>for more information about this marketing campaign, and get your nominations in before Feb 11.</li>
                  <li><b>Payment system:</b> All Envato Market payments are now being sent via our new payout system. If you have not set up your details yet, visit <a href="#" className='text-indigo-900 font-semibold'>https://themeforest.net/accounts/payouts</a> and select 'Update Payout Method.' For more information, see this <button className='font-bold text-indigo-900'>Help Centre article.</button></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xs font-semibold text-slate-500'>Mar 18</h1>
                <ul className='text-xs px-6 list-disc text-wrap'>
                  <li><b>Free File nominations for ThemeForest</b> are now open for April, May and June. We're looking for WordPress themes at the moment - you can view the criteria and nominate items <button className='font-bold text-indigo-900'>HERE.</button></li>
                  <li><b>Payment system:</b> All Envato Market payments are now being sent via our new payout system. If you have not set up your details yet, visit <a href="#" className='text-indigo-900 font-semibold'>https://themeforest.net/accounts/payouts</a> and select 'Update Payout Method.' For more information, see this <button className='font-bold text-indigo-900'>Help Centre article.</button></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xs font-semibold text-slate-500'>Jan 26</h1>
                <ul className='text-xs px-6 list-disc text-wrap'>
                  <li><b>Free File nominations for ThemeForest</b> are now open for April, May and June. We're looking for WordPress themes at the moment - you can view the criteria and nominate items <button className='font-bold text-indigo-900'>HERE.</button></li>
                  <li><b>Payment system:</b> All Envato Market payments are now being sent via our new payout system. If you have not set up your details yet, visit <a href="#" className='text-indigo-900 font-semibold'>https://themeforest.net/accounts/payouts</a> and select 'Update Payout Method.' For more information, see this <button className='font-bold text-indigo-900'>Help Centre article.</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}
