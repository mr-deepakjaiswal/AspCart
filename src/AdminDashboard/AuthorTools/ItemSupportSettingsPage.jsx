import React, { useState } from 'react';

function ItemSupportSettingsPage() {
  const [supportOption, setSupportOption] = useState('not_supported');

  const handleSupportOptionChange = (event) => {
    setSupportOption(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">About Item Support</h1>
      <div className='border-2 rounded-md p-2'>
        <p className="text-gray-700 mb-4 ">
          Supporting your items is not a requirement of Envato Market, but buyers in categories on ThemeForest and CodeCanyon tend to have questions about the item and require assistance. If you choose to offer them support, the information you provide here will be displayed to buyers on these items. Read the <a href="#" className=" text-indigo-900 font-semibold">support policy</a> for what it means to support or not support your buyers.
        </p>
        <p className="text-gray-700 mb-4">
          If there are particular items you don't want to support (e.g. you're retiring an older item) then you can disable support for these items from the edit and upload pages. Find out more about <a href="#" className=" text-indigo-900 font-semibold">how to change your item settings.</a>
        </p>
      </div>
      <h2 className="text-xl font-bold mb-4 mt-4">Support Your Items?</h2>

      <div className="mb-4">
        <input
          type="radio"
          id="not_supported"
          name="support_option"
          value="not_supported"
          checked={supportOption === 'not_supported'}
          onChange={handleSupportOptionChange}
        />
        <label htmlFor="not_supported" className={`ml-2 ${supportOption === 'not_supported' ? `text-indigo-600` : `text-slate-500`}`}>
          Not supported (default)
        </label>
      </div>

      <div className="mb-4">
        <input
          type="radio"
          id="item_comments"
          name="support_option"
          value="item_comments"
          checked={supportOption === 'item_comments'}
          onChange={handleSupportOptionChange}
        />
        <label htmlFor="item_comments" className={`ml-2 ${supportOption === 'item_comments' ? `text-indigo-600` : `text-slate-500`}`}>
          Supported through item comments
        </label>
      </div>

      <div className="mb-4">
        <input
          type="radio"
          id="external_url"
          name="support_option"
          value="external_url"
          checked={supportOption === 'external_url'}
          onChange={handleSupportOptionChange}
        />
        <label htmlFor="external_url" className={`ml-2 ${supportOption === 'external_url' ? `text-indigo-600` : `text-slate-500`}`}>
          Supported through an external URL (your own forum, ticket system, etc)
        </label>
      </div>

      <div className="mb-4">
        <input
          type="radio"
          id="email_contact"
          name="support_option"
          value="email_contact"
          checked={supportOption === 'email_contact'}
          onChange={handleSupportOptionChange}
        />
        <label htmlFor="email_contact" className={`ml-2 ${supportOption === 'email_contact' ? `text-indigo-600` : `text-slate-500`}`}>
          Supported through an email contact form
        </label>
      </div>

      <p className="text-slate-500 mb-4 font-semibold">
        Selecting 'No' will indicate to new buyers you are not supporting this item. Your previous buyers with valid support entitlement will see this item as supported until their support period ends.
      </p>
      <div className="mt-4 flex justify-start">
        <button className="bg-green-500  text-white font-bold py-2 px-4 rounded mr-2">
          Save
        </button>
        <button className="bg-gray-100  text-red-600 font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default ItemSupportSettingsPage;