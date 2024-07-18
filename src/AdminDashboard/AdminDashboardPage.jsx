import React from 'react'

export default function AdminDashboardPage() {
  return (
    <div className='flex gap-4 p-6'>
      <div className='w-3/4 bg-white rounded-lg  p-6'>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Welcome and congratulations on becoming an author with Envato Market.</h1>
          <p className="text-gray-600 mb-8">Now you can sell your digital items to millions of users and make money from it.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-100 rounded-lg p-8 flex flex-wrap flex-col items-center border-2 border-red-600">
              <h2 className="text-xl font-bold mb-4 text-red-600">Upload your first item</h2>
              <p className="text-gray-700 mb-4 text-sm text-center">Start uploading your digital items and working with our review team to make sure they are in great shape to start selling.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">Upload my first item</button>
            </div>

            <div className="bg-red-100 rounded-lg p-8 flex flex-wrap flex-col items-center border-red-600 border-2">
              <h2 className="text-xl font-bold mb-4 text-red-600 text-center">Your profile</h2>
              <p className="text-gray-700 mb-4 text-sm text-center">Fill out your profile so our buyers know who created the items they're buying - doing this means you can start building relationships and a reputation on Envato Market.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Take me to my profile</button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 mt-8 flex flex-col flex-wrap justify-center items-center">
            <h2 className="text-xl font-bold mb-4">Tax Requirements</h2>
            <p className="text-gray-700 mb-4 text-center">Depending on where you are in the world, you will be required to adhere to different tax requirements. Because of this, it's important you <span  className="text-indigo-900 ">complete your tax information</span> to ensure that the correct tax rates, if any, are applied to your earnings.</p>
          </div>

          <p className="text-gray-600 mt-8">Thank you again for becoming an author and we hope you have lots of success with us!</p>
          <p className="text-gray-600">The Community Team</p>
        </div>

      </div>
      <div className=' w-2/6 bg-white h-fit p-6 rounded-lg'>
        <div className='border-b-2'>
          <h1 className='text-lg font-bold'>Social profiles</h1>
        </div>
      </div>
    </div>
  )
}
