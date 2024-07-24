import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

function MessageReviewerPage() {
  const [comments, setComments] = useState('');

  const handleChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 bg-gray-100 mt-4 rounded-md p-2">Message to the Reviewer</h2>

      <div className="mb-4 px-4">
        <label htmlFor="comments" className="block mb-2 font-bold text-gray-900">
          Comments
        </label>
        <textarea
          id="comments"
          rows="4"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={comments}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 px-4">
        <input
          type="checkbox"
          id="license"
          className="mr-2"
        />
        <label htmlFor="license" className="text-sm font-medium text-slate-500">
          Any images, sounds, video, code, flash, or other assets that are not my own work, have been appropriately licensed for use in the file preview or main download. Other than these items, this work is entirely my own and I have full rights to sell it on ThemeForest.
        </label>
      </div>
      <div className='px-4 pb-4 border-t-2 pt-2'>
      <button
        type="button"
        className="bg-indigo-900 text-white font-bold py-3 px-8 rounded flex items-center gap-2"
      >
        <span><FaCloudUploadAlt /></span>
        Upload
      </button>
      </div>
    </div>
  );
}

export default MessageReviewerPage;