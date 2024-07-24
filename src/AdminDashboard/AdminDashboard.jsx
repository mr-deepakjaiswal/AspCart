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
import Rating2 from '../assets/DashboardImages/rating 2.png'
import Salary from '../assets/DashboardImages/salary 1.png'
import User from '../assets/DashboardImages/user 1.png'
import AdminDashboardPage from './AdminDashboardPage';
import { FaChevronDown } from "react-icons/fa";
import RefundsPage from './RefundsPage';
import AdminEarningsPage from './AdminEarnings/AdminEarningsPage';
import SettingsYourDetailsPage from './SettingsYourDetailsPage';
import SettingsAuthorTools from './AuthorTools/SettingsAuthorTools';
import SettingsYourItems from './YourItems/SettingsYourItems';
import FollowersPage from '../Dashboard/FollowersPage';
import FollowingsPage from '../Dashboard/FollowingsPage';
import HiddenItemsPage from '../Dashboard/HiddenItemsPage';
import DounloadPageFirst from '../Dashboard/DounloadPageFirst';
import ReviewsPage from '../Dashboard/ReviewsPage';
import StatementsPage from '../Dashboard/StatementsPage';
import ProfilePage from '../Dashboard/Profile/ProfilePage';


function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const settingsDropdownBtn = (tab) => {
    handleTabClick(tab);
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex bg-gray-100 gap-4 p-6">
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
          <div className="relative inline-block text-left">
            <button
              className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg  font-semibold ${selectedTab === 'settings' ? 'bg-gray-200 text-red-700' : ''}`}
              onClick={() => { settingsDropdownBtn("settings") }}
            >
              <span><img className='max-w-full' src={CogWheel} alt="" /></span>
              <span className='md:block hidden'>Settings</span>
              <span><FaChevronDown /></span>
            </button>
            {isOpen && (
              <div
                className="origin-top-right absolute left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    className={`block px-4 py-2 text-sm font-semibold text-black hover:text-gray-500 ${selectedTab === 'YourDetails' ? '' : ''}`}
                    onClick={() => handleTabClick('YourDetails')}
                    role="menuitem"
                  >
                    Your Details
                  </button>
                  <button
                    className={`block px-4 py-2 text-sm font-semibold text-black hover:text-gray-500 ${selectedTab === 'AuthorTools' ? '' : ''}`}
                    onClick={() => handleTabClick('AuthorTools')}
                    role="menuitem"
                  >
                    Author Tools
                  </button>
                  <button
                    className={`block px-4 py-2 text-sm font-semibold text-black  hover:text-gray-500 ${selectedTab === 'YourItems' ? '' : ''}`}
                    onClick={() => handleTabClick('YourItems')}
                    role="menuitem"
                  >
                    Your Items
                  </button>
                </div>
              </div>
            )}
          </div>

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
            className={`flex items-center md:px-10 md:py-2 rounded-md mt-2 gap-2 text-lg font-semibold ${selectedTab === 'Refunds' ? 'bg-gray-200 text-red-700' : ''}`}
            onClick={() => handleTabClick('Refunds')}
          >
            <span><img className='max-w-full' src={Rating2} alt="" /></span>
            <span className='md:block hidden'>Refunds</span>
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
        {selectedTab === 'dashboard' && <div><AdminDashboardPage /></div>}
        {selectedTab === 'profile' && <div><ProfilePage /></div>}
        {selectedTab === 'followers' && <div><FollowersPage /></div>}
        {selectedTab === 'followings' && <div><FollowingsPage /></div>}
        {selectedTab === 'settings' && <div> <SettingsYourDetailsPage /></div>}
        {selectedTab === 'YourDetails' && <div><SettingsYourDetailsPage /></div>}
        {selectedTab === 'AuthorTools' && <div><SettingsAuthorTools /></div>}
        {selectedTab === 'YourItems' && <div><SettingsYourItems /></div>}
        {selectedTab === 'hiddenItems' && <div><HiddenItemsPage /></div>}
        {selectedTab === 'download' && <div><DounloadPageFirst /></div>}
        {selectedTab === 'reviews' && <div><ReviewsPage /></div>}
        {selectedTab === 'Refunds' && <div><RefundsPage /></div>}
        {selectedTab === 'earnings' && <div><AdminEarningsPage /></div>}
        {selectedTab === 'statements' && <div><StatementsPage /></div>}
      </div>
    </div>
  );
}

export default AdminDashboard;