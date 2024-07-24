import React from 'react';

function TagsAndPrice() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4 bg-gray-100 rounded-md p-2 mt-4">Tags</h2>
        <div className="mb-4 px-4">
          <label htmlFor="keyFeatures" className="block text-gray-700 text-sm font-bold mb-2">
            Tags
          </label>
          <textarea
            id="keyFeatures"
            className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Maximum of 15 keywords covering features, usage, and styling. Keywords should all be in lowercase and separated by commas. e.g. photography, gallery, modern, jquery, wordpress theme
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 bg-gray-100 rounded-md p-2">Set Your Price (US$)</h2>
        <div>
          <p className='text-sm text-gray-500 mt-1 px-4 border-b-2 pb-2'>It's important that you set the price for your items independently and not discuss your pricing decisions with other authors. The item price will include your author fee and your initial term of item support (if you offer it). See our <button className='text-indigo-900'>Author Terms</button> and <button className='text-indigo-900'>Item Support</button> breakdown if you want to know more.</p>
          <div>
            <div className='p-4'>
              <h2 className='font-bold'>Regular License</h2>
              <div className='flex gap-4 flex-wrap items-center px-4 mt-2'>
                <div>
                  <p className='font-bold text-sm'>Item price</p>
                  <button className='py-2 px-8 border-black font-bold border rounded-md w-32 mt-2 text-start'>$</button>
                </div>
                <div>
                  <p className='mt-6 font-bold'>+</p>
                </div>
                <div>
                  <p className='font-bold text-sm'>Buyer fee</p>
                  <button className='py-2 px-8 bg-red-50 border-black font-bold border rounded-md w-32 mt-2 text-center'>$12</button>
                </div>
                <div>
                  <p className='mt-6 font-bold'>=</p>
                </div>
                <div>
                  <p className='font-bold text-sm text-red-600'>Purchase price</p>
                  <button className='py-2 px-8 border font-bold text-red-600 border-red-600 rounded-md w-32 mt-2 text-center'>$12</button>
                </div>
                <div className='w-36 border border-slate-500 rounded-md p-2 ms-12 mt-[-15px]'>
                  <p className='text-slate-500 font-semibold'>Recommended purchase price $44 - $59</p>
                </div>
              </div>
              <h1 className='px-4 font-sm text-indigo-900'>How much of this will I earn?</h1>
            </div>
            <div className='p-4'>
              <h2 className='font-bold'>Extended License</h2>
              <div className='flex gap-4 flex-wrap items-center px-4 mt-2'>
                <div>
                  <p className='font-bold text-sm'>Item price</p>
                  <button className='py-2 px-8 border border-black font-bold rounded-md w-32 mt-2 text-start'>$</button>
                </div>
                <div>
                  <p className='mt-6 font-bold'>+</p>
                </div>
                <div>
                  <p className='font-bold text-sm'>Buyer fee</p>
                  <button className='py-2 bg-red-50 border-black font-bold px-8 border rounded-md w-32 mt-2 text-center'>$600</button>
                </div>
                <div>
                  <p className='mt-6 font-bold'>=</p>
                </div>
                <div>
                  <p className='font-bold text-sm text-red-600'>Purchase price</p>
                  <button className='py-2 px-8 border font-bold text-red-600 border-red-600 rounded-md w-32 mt-2 text-center'>$600</button>
                </div>
                <div className='w-36 border border-slate-500 rounded-md p-2 ms-12 mt-[-15px]'>
                  <p className='text-slate-500 font-semibold'>Recommended purchase price $2,200 - $2,950</p>
                </div>
              </div>
              <h1 className='px-4 font-sm text-indigo-900'>How much of this will I earn?</h1>
            </div>
          </div>
          <p className='text-sm text-gray-500 mt-1 px-4 border-t-2 pt-2'>The "Recommended purchase price" is just a guide to help you decide - all pricing decisions are yours and yours only.</p>
        </div>
      </div>
    </div >
  );
}

export default TagsAndPrice;
