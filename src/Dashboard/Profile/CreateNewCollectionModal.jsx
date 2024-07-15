import React, { useState } from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

export default function CreateNewCollectionModal() {
  const [collectionName, setCollectionName] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [isPrivate, setIsPrivate] = useState(true);

  const handleNameChange = (event) => {
    setCollectionName(event.target.value);
  };

  const handleImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handlePrivacyChange = (event) => {
    setIsPrivate(!isPrivate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you'd handle the submission of the form, 
    // sending the collection data to your backend.
    // Example using fetch API:

    try {
      const formData = new FormData();
      formData.append('name', collectionName);
      formData.append('isPrivate', isPrivate);
      formData.append('coverImage', coverImage);

      const response = await fetch('/api/collections', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful creation of the collection
        // e.g., redirect to the new collection page
        console.log('Collection created successfully!');
      } else {
        // Handle error response from the server
        console.error('Error creating collection:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <div
        id="createNewCollection"
        className="fixed top-0 left-0 rounded-lg w-full h-full bg-gray-900 bg-opacity-50 hidden"
      >
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="bg-[#F2F2F2] flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-xl font-semibold">
                  Create a New Collection
                </h3>
              </div>
              {/*body*/}
              <div className="p-6">
                <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="collectionName" className="block text-gray-700 font-bold mb-2">
            Collection name:
          </label>
          <input
            type="text"
            id="collectionName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={collectionName}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="private"
              name="privacy"
              className="mr-2"
              checked={isPrivate}
              onChange={handlePrivacyChange}
            />
            <label htmlFor="private" className="mr-4">
              Keep it private
            </label>
            <input
              type="radio"
              id="public"
              name="privacy"
              className="mr-2"
              checked={!isPrivate}
              onChange={handlePrivacyChange}
            />
            <label htmlFor="public">
              Keep it public
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="coverImage" className="block text-gray-700 font-bold mb-2">
            Add a cover image for your Collection:
          </label>
          <input
            type="file"
            id="coverImage"
            className="shadow appearance-none border rounded w-1/4 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
          />
          <p className="text-gray-600 text-sm mt-2">
            Please upload a file that is a JPG or PNG. The uploaded file also needs to be 520x280px and less than 250KB.
          </p>
        </div>
       {/*footer*/}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Collection
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
            onClick={() => {
              // Toggle the modal visibility
              document.getElementById('createNewCollection').classList.toggle('hidden');
            }}
          >
            Close
          </button>
        </div>
      </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  )
}
