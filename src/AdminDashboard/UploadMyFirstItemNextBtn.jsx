import React, { useState } from 'react'

export default function UploadMyFirstItemNextBtn() {
  const [fileUpload, setFileUpload] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [themePreview, setThemePreview] = useState(null);
  const [mainFiles, setMainFiles] = useState(null);
  const [wordpressTheme, setWordpressTheme] = useState(null);

  const handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  };

  const handleThumbnail = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleThemePreview = (event) => {
    setThemePreview(event.target.files[0]);
  };

  const handleMainFiles = (event) => {
    setMainFiles(event.target.files[0]);
  };

  const handleWordpressTheme = (event) => {
    setWordpressTheme(event.target.files[0]);
  };

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-4'>
      <div className='md:w-3/4 bg-white rounded-lg'>
        <div className="container mx-auto ">

          <h2 className="text-2xl font-bold mb-4 bg-gray-100 border-t-2 border-s-2 border-e-2 rounded-md p-2">Name & Description</h2>
          <div className='px-4'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the name of your item"
              />
              <p className="text-xs text-gray-500 mt-1">
                Maximum 100 characters. No HTML or emoji allowed. Follow our{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Item Title Naming Conventions.
                </a>
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="keyFeatures" className="block text-gray-700 text-sm font-bold mb-2">
                Key Features
              </label>
              <textarea
                id="keyFeatures"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Highlight the key features of your item"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Highlight what makes your item unique or a key selling point. They appear on search result pages next to an image of your item. Max 45
                characters per line. No HTML or emoji allowed. Do not repeat features or keyword spam.{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Key Feature guidelines
                </a>
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="htmlDescription" className="block text-gray-700 text-sm font-bold mb-2">
                HTML Description
              </label>
              <textarea
                id="htmlDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Provide a detailed description of your item"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                HTML or plain text allowed, no emoji
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This field is used for search, so please be descriptive! If you're linking to external images, please mind the page load speed: use few, compress
                them and host them on a fast server or CDN.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 bg-gray-100  rounded-md p-2">Supporting your item</h2>
          <p className="text-gray-700 mb-4 px-4">
            You have not chosen a support preference for your items. Buyers will see your item as not-
            supported. To change your support settings{' '}
            <a href="#" className="text-blue-500 hover:underline">
              go to your item support settings.
            </a>
          </p>

          
          

        </div>

      </div>
      <div className=' md:w-2/6 bg-white h-fit p-6 rounded-lg'>
        <div className='border-b-2'>
          <h1 className='text-lg font-bold'>Social profiles</h1>
        </div>
      </div>
    </div>
  )
}
