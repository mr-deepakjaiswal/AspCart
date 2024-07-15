import React from 'react'

export default function ProfilePage() {
  return (
    <div className='flex gap-4 p-6'>
      <div className='w-3/4 bg-white border-s-8 border-s-red-600 rounded-lg  p-6'>
        <p className='text-md font-semibold my-4'>Would you like to display collections on your profile page? </p>
        <p className='text-md font-semibold my-4'>To get started, create a public <button className='text-indigo-900 font-bold'>bookmarks collection</button> with a preview image. Your three most recent collections will appear here.</p>
      </div>
      <div className=' w-2/6 bg-white h-fit p-6 rounded-lg'>
        <div className='border-b-2'>
        <h1 className='text-lg font-bold'>Social profiles</h1>
        </div>
      </div>
    </div>
  )
}
