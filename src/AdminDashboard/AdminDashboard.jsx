import { useState } from 'react';
import Ellipse506 from '../assets/DashboardImages/Ellipse 506.png'
import CogWheel from '../assets/DashboardImages/cogwheel 1.png'
import Downloading from '../assets/DashboardImages/downloading 1.png'
import Evaluation from '../assets/DashboardImages/evaluation 1.png'
import Followers from '../assets/DashboardImages/followers 1.png'
import Hide from '../assets/DashboardImages/hide 1.png'
import House from '../assets/DashboardImages/house 1.png'
import Profile from '../assets/DashboardImages/profile 1.png'
import Rating from '../assets/DashboardImages/rating 1.png'
import Salary from '../assets/DashboardImages/salary 1.png'
import User from '../assets/DashboardImages/user 1.png'
import AdminDashboardPage from './AdminDashboardPage';


function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex bg-gray-100 gap-4 p-6">
      <div className="w-1/5 bg-white p-8 border-2 rounded-md">
        <div className="mb-4 flex items-center gap-4">
          <img src={Ellipse506} alt="Profile Picture" className="rounded-full" />
          <p className="mt-2 text-gray-700">Joined Jun 21st 24</p>
        </div>

        {/* Dashboard content goes here */}
        <div className="">
          <button
            className={`flex flex-wrap items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'dashboard' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('dashboard')}
          >
            <span><img className='h-auto max-w-full' src={House} alt="" /></span>
            <span className='md:block hidden'>Dashboard</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'profile' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('profile')}
          >
            <span><img src={Profile} alt="" /></span>
            <span>Profile</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'followers' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('followers')}
          >
            <span><img src={User} alt="" /></span>
            <span>Followers</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'followings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('followings')}
          >

            <span><img src={Followers} alt="" /></span>
            <span>Followings</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'settings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('settings')}
          >
            <span><img src={CogWheel} alt="" /></span>
            <span>Settings</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'hiddenItems' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('hiddenItems')}
          >
            <span><img src={Hide} alt="" /></span>
            <span>Hidden Items</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'download' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('download')}
          >
            <span><img src={Downloading} alt="" /></span>
            <span>Download</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'reviews' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('reviews')}
          >
            <span><img src={Rating} alt="" /></span>
            <span>Reviews</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'earnings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('earnings')}
          >
            <span><img src={Salary} alt="" /></span>
            <span>Earnings</span>
          </button>
          <button
            className={`flex items-center px-10 py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'statements' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('statements')}
          >
            <span><img src={Evaluation} alt="" /></span>
            <span>Statements</span>
          </button>
        </div>
      </div>
      <div className="w-3/4 bg-gray-100 ms-4  rounded-md ">
        {selectedTab === 'dashboard' && <div><AdminDashboardPage /></div>}
        {selectedTab === 'profile' && <div>Admin page</div>}
        {selectedTab === 'followers' && <div>Followers page</div>}
        {selectedTab === 'followings' && <div>Followings page</div>}
        {selectedTab === 'settings' && <div>settings page</div>}
        {selectedTab === 'hiddenItems' && <div>hiddenItems page</div>}
        {selectedTab === 'download' && <div>downloads page</div>}
        {selectedTab === 'reviews' && <div>reviews page</div>}
        {selectedTab === 'earnings' && <div>earnings page</div>}
        {selectedTab === 'statements' && <div>statements page</div>}
      </div>
    </div>
  );
}

export default AdminDashboard;