import React from 'react';

function ItemLicensesPage() {
  return (
    <div className="container mx-auto px-4">
      <p className="text-slate-500 text-lg font-semibold mb-6">
        Your Envato Market items are sold under our <button className='text-indigo-900'>available licenses.</button> Most licenses apply automatically and cannot be changed. But there are a few you can choose to opt out of (should they apply to your items):
      </p>
      <div className="mb-4">
        <input type="checkbox" id="extended-license" className="mr-2" />
        <label htmlFor="extended-license" className="text-gray-800 font-medium">
          Extended License (More Details)
        </label>
        <p className="text-slate-500">
          If unchecked, applicable items will only be offered for sale under the more limited Regular License.
        </p>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="t-shirt-license" className="mr-2" />
        <label htmlFor="t-shirt-license" className="text-gray-800 font-medium">
          T-Shirt Extended License (More Details)
        </label>
        <p className="text-slate-500">
          If unchecked, applicable items will only be offered for sale under the more limited T-Shirt Regular License.
        </p>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="photodune-license" className="mr-2" />
        <label htmlFor="photodune-license" className="text-gray-800 font-medium">
          PhotoDune Extended License (More Details)
        </label>
        <p className="text-slate-500">
          If unchecked, applicable items will only be offered for sale under the more limited PhotoDune Regular License.
        </p>
      </div>
      <p className="text-slate-500 font-semibold text-lg mb-4">
        For some ThemeForest and CodeCanyon items, you can also elect to license items under a 100% GPL license:
      </p>
      <div className="mb-4">
        <input type="checkbox" id="gpl-license" className="mr-2" />
        <label htmlFor="gpl-license" className="text-gray-800 font-medium">
          100% GPL License feature enabled (More Details)
        </label>
        <p className="text-slate-500">
          Show the option to offer 100% GPL on my items (where available).
        </p>
      </div>
      <p className="text-slate-500 font-semibold text-lg mb-4 border-b-2 pb-4">
        Please read this <button className='text-indigo-900'>Knowledgebase article</button> carefully to understand the implications of choosing 100% GPL for your items.
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

export default ItemLicensesPage;