import React, { useState } from 'react'

export default function CreateNewCollection() {
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
    <div className='flex flex-col gap-4 p-6'>
    <div className='w-full bg-white border-s-8 border-s-red-600 rounded-lg  p-6'>
      <p className='text-md font-semibold'>The collection couldn't be created. Name is invalid. Please do not use special characters like : / \ and . in the name. File uploaded must be 520x280px, but provided image was 100x100px.</p>
    </div>
    <div className=' w-full bg-white h-fit p-6 rounded-lg'>
    <h1 className="text-2xl font-bold mb-4">Create a New Collection</h1>
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
            className="shadow appearance-none border rounded md:w-1/4 w-52 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
          />
          <p className="text-gray-600 text-sm mt-2">
            Please upload a file that is a JPG or PNG. The uploaded file also needs to be 520x280px and less than 250KB.
          </p>
        </div>
       
        <div className="flex flex-wrap gap-4 md:gap-0 justify-start">
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
              // Handle closing the form
              // e.g., redirect to the previous page
              console.log('Close button clicked!');
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
