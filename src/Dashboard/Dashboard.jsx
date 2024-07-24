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
import DashboardPage from './DashboardPage';
import ProfilePage from './Profile/ProfilePage';
import FollowersPage from './FollowersPage';
import FollowingsPage from './FollowingsPage';
import HiddenItemsPage from './HiddenItemsPage';
import ReviewsPage from './ReviewsPage';
import EarningsPage from './EarningsPage';
import StatementsPage from './StatementsPage';
import DounloadPageFirst from './DounloadPageFirst';
import NoCollection from './Profile/NoCollection';
import AdminCollection from './Profile/AdminCollection';
import SettingPage from './DashboardSettings/SettingPage';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex bg-gray-100 gap-4 p-6 ">
      <div className="dasbordMaindiv md:w-1/5 w-1/4 bg-white p-8 border-2 rounded-md">
        <div className="mb-4 flex  items-center gap-4 ">
          <img src={Ellipse506} alt="Profile Picture" className="max-w-full rounded-full " />
          <p className="mt-2 text-gray-700 sm:block hidden">Joined Jun 21st 24</p>
        </div>

        {/* Dashboard content goes here */}
        <div className="flex flex-col gap-4 md:gap-0">
          <button
            className={` flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-md  font-semibold ${selectedTab === 'dashboard' ? 'mb:bg-gray-200 mb:text-red-700  border-2 border-red-600' : ''}`}
            onClick={() => handleTabClick('dashboard')}
          >

            <img className='max-w-full' src={House} alt="" />

            <span className='md:block hidden'>Dashboard</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'profile' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('profile')}
          >
            <span><img className='max-w-full' src={Profile} alt="" /></span>
            <span className='md:block hidden'>Profile</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'followers' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('followers')}
          >
            <span><img className='max-w-full' src={User} alt="" /></span>
            <span className='md:block hidden'>Followers</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'followings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('followings')}
          >

            <span><img className='max-w-full' src={Followers} alt="" /></span>
            <span className='md:block hidden'>Followings</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'settings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('settings')}
          >
            <span><img className='max-w-full' src={CogWheel} alt="" /></span>
            <span className='md:block hidden'>Settings</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'hiddenItems' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('hiddenItems')}
          >
            <span><img className='max-w-full' src={Hide} alt="" /></span>
            <span className='md:block hidden'>Hidden Items</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'download' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('download')}
          >
            <span><img className='max-w-full' src={Downloading} alt="" /></span>
            <span className='md:block hidden'>Download</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'reviews' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('reviews')}
          >
            <span><img className='max-w-full' src={Rating} alt="" /></span>
            <span className='md:block hidden'>Reviews</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'earnings' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('earnings')}
          >
            <span><img className='max-w-full' src={Salary} alt="" /></span>
            <span className='md:block hidden'>Earnings</span>
          </button>
          <button
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'statements' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('statements')}
          >
            <span><img className='max-w-full' src={Evaluation} alt="" /></span>
            <span className='md:block hidden'>Statements</span>
          </button>
        </div>
      </div>
      <div className="w-3/4 bg-gray-100 ms-4  rounded-md ">
        {selectedTab === 'dashboard' && <div><DashboardPage /></div>}
        {selectedTab === 'profile' && <div><ProfilePage /></div>}
        {selectedTab === 'followers' && <div><FollowersPage /></div>}
        {selectedTab === 'followings' && <div><FollowingsPage /></div>}
        {selectedTab === 'settings' && <div><SettingPage /></div>}
        {selectedTab === 'hiddenItems' && <div><HiddenItemsPage /></div>}
        {selectedTab === 'download' && <div><DounloadPageFirst /></div>}
        {selectedTab === 'reviews' && <div><ReviewsPage /></div>}
        {selectedTab === 'earnings' && <div><EarningsPage /></div>}
        {selectedTab === 'statements' && <div><StatementsPage /></div>}
      </div>
    </div>
  );
}

export default Dashboard;