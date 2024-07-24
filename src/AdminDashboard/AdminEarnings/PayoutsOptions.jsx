import React, { useState } from 'react';
import Vector from '../../assets/AdminDashboardImages/Vector.png'
import { FaLanguage } from "react-icons/fa6";
import AddPaymentMethodPage from './AddPaymentMethodPage';
const PayoutOptions = () => {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {selectedTab === 'AddPayoutMethod' ? <AddPaymentMethodPage /> : <div className=" bg-white flex items-start flex-wrap justify-end gap-16">
        <div className="md:w-1/2 p-6">
          <div className="p-6 border-2 flex flex-col flex-wrap gap-4 justify-center items-center rounded-md shadow-md">
            <h3 className="text-md font-semibold mb-2">Learn more about our payouts options in our support FAQs.</h3>
            <div className="flex items-center justify-center mb-4">
              <img src={Vector} alt="" />
            </div>
            <div>
              <p className="font-semibold text-center">You do not currently have a payout method setup.
              </p>
              <p className=" text-center" >Add a payout method to receive payouts.</p>
            </div>
            <button className={`bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${selectedTab === 'AddPayoutMethod' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
              onClick={() => handleTabClick('AddPayoutMethod')}>
              + Add Payout Method
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-end p-6">
          <button className="bg-indigo-900 flex items-center gap-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <span><FaLanguage /></span>
            English
          </button>
        </div>
      </div>}

    </div>
  );
};

export default PayoutOptions;
