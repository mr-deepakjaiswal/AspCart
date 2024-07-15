import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import Rectangle22111 from '../../assets/DashboardImages/Rectangle 22111.png'
import DeleteModal from './DeleteModal';
import CreateNewCollectionModal from './CreateNewCollectionModal';
import UpdateCollection from './UpdateCollection';
import ShareCollection from './ShareCollection';

export default function AdminCollection() {
  return (
    <div className='flex gap-4 p-6'>
      <div className='w-3/4 flex flex-col h-min flex-wrap gap-4 bg-white  rounded-lg  p-6'>
        <div className='flex  items-center gap-4'>
          <h1>Sort by:</h1>
          <button className='flex items-center gap-2 border-2 p-1 rounded-md'>Title <span><FaChevronDown /></span></button>
        </div>
        <div className='flex flex-wrap gap-6 p-6'>
          <div className='shadow-md w-64 rounded-lg flex flex-col gap-2 items-center'>
            <div className=''>
              <img className='w-44' src={Rectangle22111} alt="" />
            </div>
            <div className='flex gap-4 justify-between'>
              <div>
                <h1 className='font-bold'>Admin</h1>
                <h1 className='font-semibold text-slate-500'>0 items</h1>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs flex items-center gap-1'><span className='text-xs text-green-500'><FaCheckCircle /></span>Collection is public</h1>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 text-sm border-2 rounded-md text-yellow-500 border-yellow-500'
                  onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('shareCollection').classList.toggle('hidden');
                  }}><FaShare /></button>
                  <ShareCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-indigo-700 border-indigo-700'onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('updateCollection').classList.toggle('hidden');
                  }}
                  ><FaPen /></button>
                  <UpdateCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-red-600 border-red-600' onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('deleteModal').classList.toggle('hidden');
                  }}><RiDeleteBin6Line /></button>
                  <DeleteModal />
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-md w-64 rounded-lg flex flex-col gap-2 items-center'>
            <div className=''>
              <img className='w-44' src={Rectangle22111} alt="" />
            </div>
            <div className='flex gap-4 justify-between'>
              <div>
                <h1 className='font-bold'>Admin</h1>
                <h1 className='font-semibold text-slate-500'>0 items</h1>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs flex items-center gap-1'><span className='text-xs text-green-500'><FaCheckCircle /></span>Collection is public</h1>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 text-sm border-2 rounded-md text-yellow-500 border-yellow-500'
                  onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('shareCollection').classList.toggle('hidden');
                  }}><FaShare /></button>
                  <ShareCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-indigo-700 border-indigo-700'onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('updateCollection').classList.toggle('hidden');
                  }}
                  ><FaPen /></button>
                  <UpdateCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-red-600 border-red-600' onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('deleteModal').classList.toggle('hidden');
                  }}><RiDeleteBin6Line /></button>
                  <DeleteModal />
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-md w-64 rounded-lg flex flex-col gap-2 items-center'>
            <div className=''>
              <img className='w-44' src={Rectangle22111} alt="" />
            </div>
            <div className='flex gap-4 justify-between'>
              <div>
                <h1 className='font-bold'>Admin</h1>
                <h1 className='font-semibold text-slate-500'>0 items</h1>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs flex items-center gap-1'><span className='text-xs text-green-500'><FaCheckCircle /></span>Collection is public</h1>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 text-sm border-2 rounded-md text-yellow-500 border-yellow-500'
                  onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('shareCollection').classList.toggle('hidden');
                  }}><FaShare /></button>
                  <ShareCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-indigo-700 border-indigo-700'onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('updateCollection').classList.toggle('hidden');
                  }}
                  ><FaPen /></button>
                  <UpdateCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-red-600 border-red-600' onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('deleteModal').classList.toggle('hidden');
                  }}><RiDeleteBin6Line /></button>
                  <DeleteModal />
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-md w-64 rounded-lg flex flex-col gap-2 items-center'>
            <div className=''>
              <img className='w-44' src={Rectangle22111} alt="" />
            </div>
            <div className='flex gap-4 justify-between'>
              <div>
                <h1 className='font-bold'>Admin</h1>
                <h1 className='font-semibold text-slate-500'>0 items</h1>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs flex items-center gap-1'><span className='text-xs text-green-500'><FaCheckCircle /></span>Collection is public</h1>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 text-sm border-2 rounded-md text-yellow-500 border-yellow-500'
                  onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('shareCollection').classList.toggle('hidden');
                  }}><FaShare /></button>
                  <ShareCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-indigo-700 border-indigo-700'onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('updateCollection').classList.toggle('hidden');
                  }}
                  ><FaPen /></button>
                  <UpdateCollection />


                  <button className='p-1 text-sm border-2 rounded-md text-red-600 border-red-600' onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('deleteModal').classList.toggle('hidden');
                  }}><RiDeleteBin6Line /></button>
                  <DeleteModal />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className=' w-2/6 bg-white h-fit p-6 rounded-lg border-t-8  border-red-600 '>
        <div className='flex flex-col gap-4'>
          <button className='bg-indigo-900 text-white p-2 rounded-md font-semibold' onClick={() => {
                    // Toggle the modal visibility
                    document.getElementById('createNewCollection').classList.toggle('hidden');
                  }}>Create Collection</button>
                  <CreateNewCollectionModal />
          <div className='flex flex-col justify-center items-center gap-4'>
            <button className='p-2 w-full bg-green-950 text-white rounded-md '>What are Collections?</button>
            <p className='text-sm w-3/4 text-center'>Collections are groups of items compiled by different users on a theme.

              They can be set to Private for personal use, or Public so that they appear on this page and on a user's homepage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
