import React, { useState } from 'react'
import PayoutMethodPage from './PayoutMethodPage';
import InvoiceCreditSettingsPage from './InvoiceCreditSettingsPage';
import ItemSupportSettingsPage from './ItemSupportSettingsPage';
import ItemSupportVacationsPage from './ItemSupportVacationsPage';
import AuthorTeamsPage from './AuthorTeamsPage';
import TaxInformationPage from './TaxInformationPage';

export default function SettingsAuthorTools() {
  const [selectedTab, setSelectedTab] = useState('PayoutMethod');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className='flex flex-wrap md:flex-nowrap gap-6'>
        <div className='flex flex-wrap flex-col gap-6 bg-white md:w-full p-4 rounded-lg'>
          <div className='border-b-2 pb-4'>
            <div className='flex flex-wrap justify-center items-center gap-2'>
              <button className={`font-semibold ${selectedTab === 'PayoutMethod' ? ' text-red-700 border-b-2 border-red-700' : ''}`}
                onClick={() => handleTabClick('PayoutMethod')}>Payout method</button> |
              <button className={`font-semibold ${selectedTab === 'InvoiceCreditSettings' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('InvoiceCreditSettings')}>Invoice and credit settings</button> |

              <button className={`font-semibold ${selectedTab === 'ItemSupportSettings' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('ItemSupportSettings')}>Item support settings</button> |

              <button className={`font-semibold ${selectedTab === 'ItemSupportVacations' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('ItemSupportVacations')}>Item support vacations</button> |

              <button className={`font-semibold ${selectedTab === 'AuthorTeams' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('AuthorTeams')}>Author teams</button> |

              <button className={`font-semibold ${selectedTab === 'TaxInformation' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('TaxInformation')}>Tax information</button>
            </div>
          </div>
          <div className=''>
            {selectedTab === 'PayoutMethod' && <div><PayoutMethodPage /></div>}
            {selectedTab === 'InvoiceCreditSettings' && <div><InvoiceCreditSettingsPage /></div>}
            {selectedTab === 'ItemSupportSettings' && <div><ItemSupportSettingsPage /></div>}
            {selectedTab === 'ItemSupportVacations' && <div><ItemSupportVacationsPage /></div>}
            {selectedTab === 'AuthorTeams' && <div><AuthorTeamsPage /></div>}
            {selectedTab === 'TaxInformation' && <div><TaxInformationPage /></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
