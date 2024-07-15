import React, { useState } from 'react';
import Reactangle4524 from '../../assets/DashboardImages/Rectangle 4524.png'
import Reactangle4543 from '../../assets/DashboardImages/Rectangle 4543.png'
import Reactangle4556 from '../../assets/DashboardImages/Rectangle 4556.png'

function ProfilePage() {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSave = () => {
    // Handle saving the avatar
    console.log('Saving avatar:', avatar);
  };

  const handleClose = () => {
    // Handle closing the modal
    console.log('Closing modal');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Avatar</h2>
      <div className=" rounded-md p-4">
        <div className="flex justify-center items-center border-b-2 pb-4">
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="Avatar" className="w-48 h-48 rounded-full" />
          ) : (
            <label htmlFor="avatar-input" className="flex flex-col items-center justify-center px-6 py-8 rounded-lg shadow-lg tracking-wide uppercase  cursor-pointer ">
                <div className='flex flex-col items-center'>
                  <img className='mb-[-240px]' src={Reactangle4556} alt="" />
                  <img className='mb-[-190px]' src={Reactangle4543} alt="" />
                  <img src={Reactangle4524} alt="" />
                </div>
              <span className="border-2 p-2 bg-indigo-100 bg-transparent text-white font-bold text-base leading-normal">Choose File</span>
              <input type="file" id="avatar-input" className="hidden" onChange={handleFileChange} />
            </label>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-start space-x-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSave}>Save</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default ProfilePage;