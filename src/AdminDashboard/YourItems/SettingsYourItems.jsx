import React, { useState } from 'react'
import FeaturedItemsPage from './FeaturedItemsPage';
import ExclusivityOfYourItemsPage from './ExclusivityOfYourItemsPage';
import ItemLicensesPage from './ItemLicensesPage';

export default function SettingsYourItems() {
  const [selectedTab, setSelectedTab] = useState('FeaturedItems');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className='flex flex-wrap md:flex-nowrap gap-6'>
        <div className='flex flex-wrap flex-col gap-6 bg-white md:w-full p-4 rounded-lg'>
          <div className='border-b-2 pb-4'>
            <div className='flex flex-wrap justify-start items-center gap-2'>
              <button className={`font-semibold ${selectedTab === 'FeaturedItems' ? ' text-red-700 border-b-2 border-red-700' : ''}`}
                onClick={() => handleTabClick('FeaturedItems')}>Featured items</button> |

              <button className={`font-semibold ${selectedTab === 'ExclusivityOfYourItems' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('ExclusivityOfYourItems')}>Exclusivity of your items</button> |

              <button className={`font-semibold ${selectedTab === 'ItemLicenses' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('ItemLicenses')}>Item licenses</button> 

            </div>
          </div>
          <div className=''>
            {selectedTab === 'FeaturedItems' && <div><FeaturedItemsPage /></div>}
            {selectedTab === 'ExclusivityOfYourItems' && <div><ExclusivityOfYourItemsPage /></div>}
            {selectedTab === 'ItemLicenses' && <div><ItemLicensesPage /></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
