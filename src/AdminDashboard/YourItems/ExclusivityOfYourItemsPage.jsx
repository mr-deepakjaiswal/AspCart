import React, { useState } from 'react'
import ExclusivityAgreementModal from './ExclusivityAgreementModal';

export default function ExclusivityOfYourItemsPage() {
  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      {selectedTab === 'ExclusivityAgreement' ? <ExclusivityAgreementModal /> : <div className='flex flex-col flex-wrap gap-2 px-4'>
        <p className='text-slate-500 font-semibold'>Agreeing to keep your portfolio of items for sale exclusive to Envato Market allows you to almost double you earnings. You can still sell other items elsewhere (on other marketplaces, your own site) but any items that you place on an Envato Market site must be exclusively sold there.</p>

        <p className='text-slate-500 font-semibold'>Details about rates and how to calculate your income can be found on the <button className='text-indigo-900'>Become an Author</button> page.</p>

        <p className='text-slate-500 font-semibold'>Your account is set up as: <button className='text-indigo-900'>A Non-Exclusive Envato Author</button></p>

        <button className={`text-indigo-900 font-semibold text-start ${selectedTab === 'ExclusivityAgreement' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
          onClick={() => handleTabClick('ExclusivityAgreement')}>Change your exclusivity agreement</button>
      </div>}
    </div>
  )
}
