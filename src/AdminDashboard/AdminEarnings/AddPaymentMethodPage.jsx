import React, { useState } from 'react'
import { FaLanguage } from "react-icons/fa6";
import SelectPayoutMethodPage from './SelectPayoutMethodPage';


export default function AddPaymentMethodPage() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const [accountType, setAccountType] = useState('individual');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
  });
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');


  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddress2Change = (e) => {
    setAddress2(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      accountType,
      firstName,
      lastName,
      date,
      country,
      address,
      address2,
      city,
      postalCode,
    });
  };
  return (
    <div>
      {selectedTab === 'Next' ? <SelectPayoutMethodPage /> : <div className=" bg-white flex items-start flex-wrap justify-end md:gap-16">
        <div className="md:w-3/4 md:p-6">
          <h2 className='text-indigo-900 font-semibold md:text-md text-sm text-center mb-4'>Learn more about our payouts options in our support FAQs.</h2>
          <div className="bg-white shadow-md rounded mb-4 flex flex-wrap flex-col">
            <h2 className="text-gray-800 bg-slate-100 text-xl font-bold p-3">General Information</h2>
            <div className='p-6'>
              <div className="mb-4">
                <label htmlFor="account-type" className="block text-gray-700 text-sm font-bold mb-2">
                  Account Type
                </label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="individual"
                    name="account-type"
                    value="individual"
                    checked={accountType === 'individual'}
                    onChange={handleAccountTypeChange}
                    className="mr-2"
                  />
                  <label htmlFor="individual" className="text-gray-700 text-sm font-normal">
                    Individual
                  </label>
                  <input
                    type="radio"
                    id="registered-business"
                    name="account-type"
                    value="registered-business"
                    checked={accountType === 'registered-business'}
                    onChange={handleAccountTypeChange}
                    className="ml-6 mr-2"
                  />
                  <label htmlFor="registered-business" className="text-gray-700 text-sm font-normal">
                    Registered Business
                  </label>
                </div>
              </div>
              <div className='flex flex-wrap md:flex-nowrap border-b-2 pb-2 gap-4'>          <div className='flex flex-wrap flex-col w-1/2 gap-4'>
                <div className="mb-4">
                  <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="date-of-birth" className="block text-gray-700 text-sm font-bold mb-2">
                    Date of Birth
                  </label>
                  <div className="flex items-center">
                    <select
                      id="year"
                      name="year"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={date.year}
                      onChange={handleDateChange}
                    >
                      <option value="">YYYY</option>
                      {/* Add years to select */}
                    </select>
                    <select
                      id="month"
                      name="month"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4"
                      value={date.month}
                      onChange={handleDateChange}
                    >
                      <option value="">MM</option>
                      {/* Add months to select */}
                    </select>
                    <select
                      id="month"
                      name="month"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4"
                      value={date.month}
                      onChange={handleDateChange}
                    >
                      <option value="">DD</option>
                      {/* Add months to select */}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={address}
                    onChange={handleAddressChange}
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
                    onChange={handleCityChange}
                  />
                </div>

              </div>

                <div className='flex flex-wrap flex-col w-1/2 gap-4'>
                  <div className="mb-4">
                    <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={lastName}
                      onChange={handleLastNameChange}
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
                      onChange={handleCountryChange}
                    >
                      <option value="">Select a country</option>
                      {/* Add countries to select */}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">
                      Address 2 (optional)
                    </label>
                    <input
                      type="text"
                      id="address2"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={address2}
                      onChange={handleAddress2Change}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="postal-code" className="block text-gray-700 text-sm font-bold mb-2">
                      Postal Code (optional)
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="postal-code"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex justify-start mt-2">
                <button className="bg-slate-100  text-slate-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
                  Back
                </button>
                <button
                  type="submit"
                  className={`bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${selectedTab === 'Next' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                  onClick={() => handleTabClick('Next')}
                >
                  Next
                </button>
              </div>
            </div>
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
  )
}
