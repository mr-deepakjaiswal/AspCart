import React, { useState } from 'react'
import ProfileBookmarkCollection from './ProfileBookmarkCollection';

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'bookmarkCollection' ?<ProfileBookmarkCollection /> :<div className='flex flex-wrap md:flex-nowrap gap-4'>
      <div className='md:w-3/4 bg-white border-s-8 border-s-red-600 rounded-lg  p-6'>
        <p className='text-md font-semibold my-4'>Would you like to display collections on your profile page? </p>
        <p className='text-md font-semibold my-4'>To get started, create a public <button className={`text-indigo-900 font-bold ${selectedTab === 'bookmarkCollection' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('bookmarkCollection')}>bookmarks collection</button> with a preview image. Your three most recent collections will appear here.</p>
      </div>
      <div className=' md:w-2/6 bg-white h-fit p-6 rounded-lg'>
        <div className='border-b-2'>
        <h1 className='text-lg font-bold'>Social profiles</h1>
        </div>
      </div>
    </div>}

    </div>
  )
}
