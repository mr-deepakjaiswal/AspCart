import React from 'react'

export default function ItemsDetails() {
  return (

    <div className='w-full p-10 h-auto'>
      <div>
        <img className='rounded-lg w-80 md:w-full' src="https://theeventscalendar.com/knowledgebase/wp-content/uploads/2020/12/the-events-calendar-customizer-overview.png" alt="" />
      </div>
      <div className='flex flex-wrap gap-4 flex-col md:flex-row justify-evenly my-6 border-b-2 pb-6'>
        <button className='w-44 bg-indigo-950 text-white px-4 py-2 text-md font-semibold rounded-lg'>Live Prevew</button>

        <button className=' w-44 border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-lg'>Screenshots</button>

        <button className='w-44 border-2 border-indigo-950 text-indigo-950 px-4 py-2 text-md font-semibold rounded-lg'>Video</button>
      </div>
      <div className='md:w-full w-80'>
        <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quasi quis expedita error necessitatibus amet officia odit repellat vel ut blanditiis nesciunt, quam tenetur neque, temporibus voluptatem, et maxime nulla. Distinctio expedita deserunt totam reiciendis atque vitae ea. Error aliquam dolores ullam nesciunt recusandae consectetur doloremque sit veniam, nemo eligendi excepturi dolor pariatur nobis at quasi officia culpa earum, nostrum rem mollitia animi ab tempore cupiditate quidem.</p>
        <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis fuga id minima ipsum ullam mollitia eveniet aliquid voluptatibus praesentium nemo, iste voluptate exercitationem cumque provident.</p>
        <p className='text-lg text-slate-500 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam natus dolore dignissimos, veritatis suscipit numquam inventore quidem ut, pariatur exercitationem vitae molestias saepe ipsam nulla? Nihil excepturi architecto ex, culpa impedit eius, aspernatur exercitationem eos velit adipisci.</p>
      </div>
    </div>
  )
}
