import React, { useState } from 'react'
import NameAndDescription from './UplodMyFirstItem/NameAndDescription';
import SupportingItems from './UplodMyFirstItem/SupportingItems';

import TagsAndPrice from './UplodMyFirstItem/TagsAndPrice';
import MessageReviewerPage from './UplodMyFirstItem/MessageReviewerPage';
import CategoryAttributesPage from './UplodMyFirstItem/CategoryAttributesPage';
import PageFiles from './UplodMyFirstItem/PageFiles';



export default function UploadMyFirstItemNextBtn() {
  const [selectedCategory, setSelectedCategory] = useState('UI Templates');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-4'>
      <div className='md:w-3/4 bg-white rounded-lg'>
        <div className="container mx-auto ">

          <NameAndDescription />
          <SupportingItems />
          <PageFiles />
          <CategoryAttributesPage />
          <TagsAndPrice />
          <MessageReviewerPage />




        </div>

      </div>
      <div className='md:w-2/6  h-fit rounded-lg'>
        <div className='flex flex-col gap-4'>
          <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
            <div className="  p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Switch Upload Category</h2>
              <select
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="UI Templates">UI Templates</option>
                {/* Add more options for other categories */}
              </select>
              <div className="mt-4 flex gap-4">
                <button className="bg-indigo-900 text-white font-bold py-2 px-4 rounded-md">
                  Switch category
                </button>
                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-md">
                  Help
                </button>
              </div>
            </div>
          </div>

          <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
            <div className=" bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Get Your Item Accepted</h2>
              <p>
                To give your item the best chance possible to be accepted, please make
                sure you've:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Read and follow the{' '}
                  <a href="#" className="underline">
                    upload instructions.
                  </a>
                </li>
                <li>
                  Added useful tags and ensured they're spelled correctly (this helps
                  buyers find your file).
                </li>
                <li>
                  Added a thorough and useful item description (this also helps buyers
                  find your file).
                </li>
              </ul>
              <p className="mt-4">
                If you've done all that, you're ready to upload. Thanks for selling with
                Envato!
              </p>
            </div>
          </div>

          <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
            <div className=" bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Trouble Uploading?</h2>
              <p>
                Some users have experienced problems uploading. We've compiled a list of things to check first which might be of help. We're always working on improving our uploading infrastructure - but if you continue to experience problems please contact support.
              </p>

            </div>
          </div>

          <div className='flex bg-white flex-wrap flex-col gap-4 p-6'>
            <div className=" bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Corrupt Zip Files</h2>
              <p>
                The following archive utilities have been found to generate non-standard zip files that our server is often unable to decompress:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  7zip
                </li>
                <li>
                  lzarc
                </li>
                <li>
                  WinZip (Latest version)
                </li>
              </ul>
              <p className="mt-4">
                Please use another archive utility to reduce the chance of problems with your uploads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
