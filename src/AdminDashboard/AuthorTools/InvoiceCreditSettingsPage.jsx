import React, { useState } from 'react';

const InvoiceCreditSettingsPage = () => {
  const [footerText, setFooterText] = useState('');

  const handleFooterChange = (event) => {
    setFooterText(event.target.value);
  };

  const handleSave = () => {
    // Handle saving the footer text to the database or API
    console.log('Saving footer text:', footerText);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-sm font-semibold text-slate-500 mb-4">Hide your personal identity</h2>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <span className='text-sm font-semibold'>We will hide your name or company name on new invoices or credit notes. Your username will still appear. Be aware that some buyers may require your full author details on their invoices for tax or other purposes.</span>
      </div>
      <h2 className="text-lg font-bold mb-4">Additional invoice footer</h2>
      <textarea
        className="w-full border rounded-md p-4 resize-none"
        value={footerText}
        onChange={handleFooterChange}
        placeholder="Enter your additional invoice footer text here..."
      />
      <p className="mt-2 text-sm text-gray-500 border-b-2 pb-2">
        Use this if you want to provide specific tax details on your invoices and credit notes to buyers in your country -
        <a href="#" className="text-indigo-900 font-semibold">
          What details can I include in the footer?
        </a>
      </p>
      <div className="mt-4 flex justify-start">
        <button className="bg-green-500  text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSave}>
          Save
        </button>
        <button className="bg-gray-100  text-red-600 font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default InvoiceCreditSettingsPage;