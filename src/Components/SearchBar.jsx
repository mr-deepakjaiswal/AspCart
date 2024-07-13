import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <div className='mt-8 flex justify-center '>
      <input className='w-4/6 p-2 border-2 rounded-s-full' type="text" name="" id="" placeholder='Search within this results' />
      <button className='bg-red-700 p-2 px-4 font-normal text-white rounded-e-full' >Search</button>
      </div>
    </div>
  )
}
