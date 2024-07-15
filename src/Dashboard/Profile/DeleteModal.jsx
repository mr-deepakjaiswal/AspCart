import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa";

const DeleteModal = () => {
  return (
    <div
      id="deleteModal"
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
                Confirm Delete
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold focus:outline-none"
                onClick={() => {
                  // Toggle the modal visibility
                  document.getElementById('deleteModal').classList.toggle('hidden');
                }}
              >
                <span className="font-bold text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <FaRegTimesCircle />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="p-6">
              <div className="flex flex-col justify-center items-center">
                <h1 className='my-2 text-lg'>Are you sure?</h1>
                <h1 className='my-2 text-lg'>Want to delete this item</h1>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center gap-4 p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-slate-500 bg-neutral-300 font-bold uppercase px-6 py-3 rounded-md text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  // Toggle the modal visibility
                  document.getElementById('deleteModal').classList.toggle('hidden');
                }}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default DeleteModal;