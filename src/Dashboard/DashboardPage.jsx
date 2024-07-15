import React, { useState } from 'react'

export default function DashboardPage() {
  
  const [selectedTab, setSelectedTab] = useState('ongoing');
  
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className='w-full p-6 border-2 rounded-md h-screen bg-white'>
      <div className='flex  gap-4'>
        <button className={`font-semibold ${selectedTab === 'ongoing' ? ' text-red-700 border-b-2 border-red-600 pb-1' : ''}`}
        onClick={() => handleTabClick('ongoing')}>Ongoing</button> |

        <button className={`font-semibold ${selectedTab === 'previous' ? ' text-red-700 border-b-2 border-red-600 pb-1' : ''}`}
        onClick={() => handleTabClick('previous')}>Previous</button> |
        
        <button className={`font-semibold ${selectedTab === 'subscription' ? ' text-red-700 border-b-2 border-red-600 pb-1' : ''}`}
        onClick={() => handleTabClick('subscription')}>Subscription</button>
      </div>
    </div>
  )
}
