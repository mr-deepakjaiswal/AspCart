import React, { useState } from 'react'
import CreateNewCollection from './CreateNewCollection';

export default function ProfileBookmarkCollection() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePublicChange = (e) => {
    setIsPublic(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to an API
    console.log({ name, file, description, isPublic });
  };

  const [selectedTab, setSelectedTab] = useState('personalInformation');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {selectedTab === 'CreateCollection' ? <CreateNewCollection /> : <div className='flex flex-wrap md:flex-nowrap gap-4'>
        <div className='md:w-3/4 h-min bg-white border-s-8 border-s-red-600 rounded-lg p-6 flex flex-col gap-4'>
          <p className='text-md font-bold '>Your public collections</p>
          <p className='text-md font-semibold '>You don't have any public collections yet.</p>
          <p className='text-md font-semibold'> <button className='text-indigo-900 font-bold'>Public Collections</button> allow you to group items together and make the link publicly available. They can be used to group items to show a client, to showcase work, to create links to use with your referral code or to create collections of related items to appear on item pages.</p>
        </div>
        <div className=' md:w-2/6 bg-white h-fit p-6 rounded-lg'>
          <h2 className="text-2xl font-bold mb-4">Create A Collection</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                File upload
              </label>
              <input
                type="file"
                id="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="public"
                className="mr-2"
                checked={isPublic}
                onChange={handlePublicChange}
              />
              <label htmlFor="public" className="text-gray-700 font-bold">
                Publically visible?
              </label>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className={`bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline${selectedTab === 'CreateCollection' ? 'border-b-2 text-red-700 border-red-700' : ''}`}
                onClick={() => handleTabClick('CreateCollection')}
              >
                Create Collection
              </button></div>
          </form>

        </div>
      </div>}

    </div>
  )
}
