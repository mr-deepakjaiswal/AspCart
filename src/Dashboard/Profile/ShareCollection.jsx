import React, { useState } from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

export default function ShareCollection() {
  const [shareLink, setShareLink] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };
  return (
    <div
      id="shareCollection"
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
                Share this Collection
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold focus:outline-none"
                onClick={() => {
                  // Toggle the modal visibility
                  document.getElementById('shareCollection').classList.toggle('hidden');
                }}
              >
                <span className="font-bold text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <FaRegTimesCircle />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="shareLink" className="block text-gray-700 text-sm font-bold mb-2">
                  Public share link:
                </label>
                <input
                  type="text"
                  id="shareLink"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={shareLink}
                  onChange={(e) => setShareLink(e.target.value)}
                  readOnly
                />
              </div>
              <p className="text-gray-600 mb-6 border-b-2 pb-4">
                If you'd like to share your public collection with friends, colleagues or
                clients, here is the link.
              </p>
              {/*footer*/}
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCopy}
              >
                Done
              </button>
            </div>


          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}
