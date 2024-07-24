import React, { useState } from 'react'
import Reactangle4524 from '../../assets/DashboardImages/Rectangle 4524.png'
import Reactangle4543 from '../../assets/DashboardImages/Rectangle 4543.png'
import Reactangle4556 from '../../assets/DashboardImages/Rectangle 4556.png'

export default function PageFiles() {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 bg-gray-100 rounded-md p-2 mt-4">Files</h2>
      <div className=''>
        <h1 className='px-4 font-bold text-sm'>File Upload</h1>
        <label htmlFor="avatar-input" className="flex flex-col items-start justify-start px-6 py-8 rounded-lg tracking-wide uppercase  cursor-pointer  ">
          <div className='flex flex-wrap flex-col items-center pb-4'>
            <img className='md:mb-[-240px] mb-[-165px]' src={Reactangle4556} alt="" />
            <img className='md:mb-[-190px] mb-[-150px]' src={Reactangle4543} alt="" />
            <img src={Reactangle4524} alt="" />
          </div>
          <span className="border-2 opacity-30 bg-blue-100 mt-[-50px] ms-24 border-indigo-900 rounded-md p-2 bg-transparent text-indigo-900 font-bold text-base leading-normal "><span className=''>Choose File</span></span>
          <input type="file" id="avatar-input" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      <div className="mb-4 mt-4 px-4">
        <label htmlFor="columns" className="block text-sm font-medium text-gray-700">
          Thumbnail
        </label>
        <select id="columns" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="1"></option>
          {/* Add more column options here */}
        </select>
      </div>
      <p className="text-sm text-gray-500 mb-4 px-4">
        JPEG or PNG 80x80px Thumbnail
      </p>

      <div className="mb-4 mt-4 px-4">
        <label htmlFor="columns" className="block text-sm font-medium text-gray-700">
          Theme Preview
        </label>
        <select id="columns" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="1"></option>
          {/* Add more column options here */}
        </select>
      </div>
      <p className="text-sm text-gray-500 mb-4 px-4">
        ZIP file of images (png/jpg) <br />
        The first image appears on the Item Page and Search Results and must be 590x300 pixels and named <button className='text-indigo-900'>01_filename.jpg</button>
        .<br />
        You can include additional images which show off your item. Additional images must be named in the order that you want them to appear, for example,<button className='text-indigo-900'>02_filename.jpg</button>,<button className='text-indigo-900'>03_filename.jpg</button> ,<button className='text-indigo-900'>04_filename.jpg</button>.<br />

        These images may be cropped when displayed on the search results page to the same aspect ratio as the main preview image. Images must be JPGs or PNGs.
      </p>

      <div className="mb-4 mt-4 px-4">
        <label htmlFor="columns" className="block text-sm font-medium text-gray-700">
          Main File(s)
        </label>
        <select id="columns" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="1"></option>
          {/* Add more column options here */}
        </select>
      </div>
      <p className="text-sm text-gray-500 mb-4 px-4">
        ZIP - All files for buyers, not including preview images
      </p>

      <div className="mb-4 mt-4 px-4">
        <label htmlFor="columns" className="block text-sm font-medium text-gray-700">
          WordPress Theme
        </label>
        <select id="columns" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="1"></option>
          {/* Add more column options here */}
        </select>
      </div>
      <p className="text-sm text-gray-500 mb-4 px-4">
        ZIP containing an installable WordPress Theme <br />
        For files over 200MB we recommend <button className='text-indigo-900'>uploading via FTP</button>. The maximum file size allowed is 3GB - please ensure compression has been optimized before uploading.
      </p>

    </div>
  )
}
