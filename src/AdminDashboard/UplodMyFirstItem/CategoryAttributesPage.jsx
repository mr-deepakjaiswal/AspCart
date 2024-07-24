import React from 'react';

const CategoryAttributesPage = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 bg-gray-100 mt-4 rounded-md p-2">Category & Attributes</h2>

      <div className="mb-4 px-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select id="category" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a Category</option>
          {/* Add your category options here */}
        </select>
      </div>

      <div className="md:grid grid-cols-3 flex flex-wrap px-4 gap-4">
        <div>
          <h2 className="text-lg font-medium mb-2">Gutenberg Optimized</h2>
          <div className='flex gap-2 items-center'>
            <div className="flex items-center">
              <input
                type="radio"
                name="gutenberg"
                value="yes"
                className="mr-2"
              />
              <label htmlFor="gutenberg-yes" className="text-sm font-medium text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gutenberg"
                value="no"
                className="mr-2"
              />
              <label htmlFor="gutenberg-no" className="text-sm font-medium text-gray-700">
                No
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gutenberg"
                value="n/a"
                className="mr-2"
              />
              <label htmlFor="gutenberg-n/a" className="text-sm font-medium text-gray-700">
                N/A
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">High Resolution</h2>
          <div className='flex gap-2 items-center'>
            <div className="flex items-center">
              <input
                type="radio"
                name="resolution"
                value="yes"
                className="mr-2"
              />
              <label htmlFor="resolution-yes" className="text-sm font-medium text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="resolution"
                value="no"
                className="mr-2"
              />
              <label htmlFor="resolution-no" className="text-sm font-medium text-gray-700">
                No
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="resolution"
                value="n/a"
                className="mr-2"
              />
              <label htmlFor="resolution-n/a" className="text-sm font-medium text-gray-700">
                N/A
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Widget Ready</h2>
          <div className='flex gap-2 items-center'>
            <div className="flex items-center">
              <input
                type="radio"
                name="widget"
                value="yes"
                className="mr-2"
              />
              <label htmlFor="widget-yes" className="text-sm font-medium text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="widget"
                value="no"
                className="mr-2"
              />
              <label htmlFor="widget-no" className="text-sm font-medium text-gray-700">
                No
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="widget"
                value="n/a"
                className="mr-2"
              />
              <label htmlFor="widget-n/a" className="text-sm font-medium text-gray-700">
                N/A
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-4 px-4">
        <div>
          <h2 className="text-md font-medium mb-2">Compatible Browsers</h2>
          <div className=" border flex flex-col rounded-md w-32">
            <button className='hover:bg-red-50'>IE6</button>
            <button className='hover:bg-red-50'>IE7</button>
            <button className='hover:bg-red-50'>IE8</button>
            <button className='hover:bg-red-50'>IE9</button>
            <button className='hover:bg-red-50'>IE10</button>
          </div>
        </div>
        <div>
          <h2 className="text-md font-medium mb-2">Compatible With</h2>
          <div className="border flex flex-col rounded-md w-32">
            <button className='hover:bg-red-50'>Facebook</button>
            <button className='hover:bg-red-50'>Cart66</button>
            <button className='hover:bg-red-50'>Jetpack</button>
            <button className='hover:bg-red-50'>Elementor</button>
            <button className='hover:bg-red-50'>WPML</button>
          </div>
        </div>
        <div>
          <h2 className="text-md font-medium mb-2">Framework</h2>
          <div className="border flex flex-col rounded-md w-32">
            <button className='hover:bg-red-50'>Layers WP</button>
            <button className='hover:bg-red-50'>Genesis</button>
            <button className='hover:bg-red-50'>Klasik</button>
            <button className='hover:bg-red-50'>Catalyst</button>
            <button className='hover:bg-red-50'>PageLines</button>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-md font-medium mb-2">Software Version</h2>
          <div className="border flex flex-col rounded-md w-32">
            <button className='hover:bg-red-50'>WordPress 6.5.X</button>
            <button className='hover:bg-red-50'>WordPress 6.5.X</button>
            <button className='hover:bg-red-50'>WordPress 6.5.X</button>
            <button className='hover:bg-red-50'>WordPress 6.5.X</button>
            <button className='hover:bg-red-50'>WordPress 6.5.X</button>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-4 px-4">
        <label htmlFor="columns" className="block text-sm font-medium text-gray-700">
          Columns
        </label>
        <select id="columns" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="1">1</option>
          {/* Add more column options here */}
        </select>
      </div>

      <div className="mb-4 px-4">
        <label htmlFor="layout" className="block text-sm font-medium text-gray-700">
          Layout
        </label>
        <select id="layout" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a Layout</option>
          {/* Add your layout options here */}
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4 px-4">
        Does this layout stretch when resized horizontally (liquid)? Or does it stay the same (fixed)?
      </p>

      <div className="mb-4 px-4">
        <label htmlFor="demo-url" className="block text-sm font-medium text-gray-700">
          Demo URL
        </label>
        <input
          type="text"
          id="demo-url"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <p className="text-sm px-4 text-gray-500">
        Link to a live preview on your own hosting (i.e. https://my-site.com/demo/).
      </p>

      <p className="mt-4 px-4 text-md ">
        Some of our fields allow you to select multiple values. Please use the CTRL key (PC) or
        COMMAND key (Mac) to select multiple items.
      </p>
    </div>
  );
};

export default CategoryAttributesPage;