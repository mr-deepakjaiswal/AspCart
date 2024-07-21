import React from 'react'

export default function NoCollection() {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-4 p-6'>
      <div className='md:w-3/4 bg-white border-s-8 border-red-600 rounded-lg  p-6'>
        <p className='text-md font-semibold my-4'>You have no collections yet </p>
        <p className='text-md font-semibold my-4'>Create collections to manage items you have saved whether to share them with clients, because they fit into categories or just because that's how you think about them.</p>
      </div>
      <div className=' md:w-2/6 bg-white h-fit p-6 rounded-lg border-t-8  border-red-600 '>
        <div className='flex flex-wrap flex-col gap-4'>
          <button className='bg-indigo-900 text-white p-2 rounded-md font-semibold'>Create Collection</button>
          <div className='flex flex-col justify-center items-center gap-4'>
            <button className='p-2 w-full bg-green-950 text-white rounded-md '>What are Collections?</button>
            <p className='text-sm w-3/4 text-center'>Collections are groups of items compiled by different users on a theme.

              They can be set to Private for personal use, or Public so that they appear on this page and on a user's homepage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
