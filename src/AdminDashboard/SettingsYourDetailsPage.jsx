import React, { useState } from 'react'
import PersonalInformationPage from '../Dashboard/DashboardSettings/PersonalInformationPage';
import ProfilePage from '../Dashboard/DashboardSettings/ProfilePage';
import BadgesPage from '../Dashboard/DashboardSettings/BadgesPage';
import SavedCreditCardsPages from '../Dashboard/DashboardSettings/SavedCreditCardsPages';
import EmailSettingPage from '../Dashboard/DashboardSettings/EmailSettingsPage';
import SocialNetworksPages from '../Dashboard/DashboardSettings/SocialNetworksPages';
import PIAspCartAccountSettings from '../Dashboard/DashboardSettings/PIAspCartAccountSettings';

export default function SettingsYourDetailsPage() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {selectedTab === 'AspCartAccountSettings' ? <PIAspCartAccountSettings /> : <div className='flex flex-wrap md:flex-nowrap gap-6'>
        <div className='flex flex-wrap flex-col gap-6 bg-white md:w-3/4 p-4 rounded-lg'>
          <div className='border-b-2 pb-4'>
            <div className='flex flex-wrap justify-center items-center gap-2'>
              <button className={`font-semibold ${selectedTab === 'personalInformation' ? ' text-red-700 border-b-2 border-red-700' : ''}`}
                onClick={() => handleTabClick('personalInformation')}>Personal information</button> |
              <button className={`font-semibold ${selectedTab === 'Profile' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('Profile')}>Profile</button> |

              <button className={`font-semibold ${selectedTab === 'SavedCreditCards' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('SavedCreditCards')}>Saved credit cards</button> |

              <button className={`font-semibold ${selectedTab === 'Badges' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('Badges')}>Badges</button> |

              <button className={`font-semibold ${selectedTab === 'EmailSettings' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('EmailSettings')}>Email settings</button> |

              <button className={`font-semibold ${selectedTab === 'SocialNetworks' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('SocialNetworks')}>Social networks</button>
            </div>
          </div>
          <div className=''>
            {selectedTab === 'personalInformation' && <div><PersonalInformationPage /></div>}
            {selectedTab === 'Profile' && <div><ProfilePage /></div>}
            {selectedTab === 'Badges' && <div><BadgesPage /></div>}
            {selectedTab === 'SavedCreditCards' && <div><SavedCreditCardsPages /></div>}
            {selectedTab === 'EmailSettings' && <div><EmailSettingPage /></div>}
            {selectedTab === 'SocialNetworks' && <div><SocialNetworksPages /></div>}
          </div>
        </div>
        <div className='bg-white flex flex-col gap-4 h-min md:w-2/6 p-4 rounded-lg border-s-8 border-s-red-600'>
          <h1 className='font-bold text-lg'>Personal Information</h1>
          <h1>We do not sell or share your details without your permission. Find out more in our <button className='text-indigo-900 font-bold'>Privacy Policy.</button>
            <h1>Your username,email and password can be updated via your <button className={`text-indigo-900 font-bold ${selectedTab === 'AspCartAccountSettings' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
              onClick={() => handleTabClick('AspCartAccountSettings')}> AspCart Account settings.</button>
            </h1>
          </h1>
        </div>
      </div>}

    </div>
  )
}
