import React from 'react'

export default function SupportSection() {
  return (
    <div className='w-full p-10 h-auto'>
      <div>
        <h1 className='text-xl font-bold'>Popular questions for this item</h1>
      </div>
      <div className='p-4 border-2 rounded-lg border-indigo-900 mt-4'>
        <div>
          <h1 className='text-lg font-semibold mt-4'>Contact the author</h1>
          <p className='text-md text-slate-500'>This author will respond to buyers' questions and provides limited support through their own support system.
          </p>
        </div>
        <div>
          <h1 className='text-lg font-semibold mt-4'>Item support includes:</h1>
          <ul className='list-disc text-md ms-8'>
            <li>Availability of the author to answer questions</li>
            <li>Answering technical questions about item's features</li>
            <li> Assistance with reported bugs and issues</li>
            <li>Help with included 3rd party assets</li>
          </ul>
        </div>
        <div>
          <h1 className='text-lg font-semibold mt-4'>However, item support does not include:</h1>
          <ul className='list-disc text-md ms-8'>
            <li>Customization services</li>
            <li>Installation services</li>
          </ul>
        </div>
        <div>
          <h1 className='text-lg text-indigo-900'> <span className='text-lg text-slate-500'>View the</span> item support policy</h1>
          <button className=' mt-4 w-full border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-lg'>Go to item support</button>
        </div>
      </div>
    </div>
  )
}
