import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

export default function ExclusivityAgreementModal() {
  return (
    <div>
        
      <div className="container mx-auto py-8">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#e4e9fe] from-10% [#f1ecf9] via-30% to-[#fef1f3] to-90% py-6">Your exclusivity agreement:</h2>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-8">

          <div className="bg-gray-100 w-1/3 shadow-md p-6 flex flex-col items-center bg-gradient-to-r from-[#e4e9fe] from-10% [#f1ecf9] via-30% to-[#fef1f3] to-90% border-2 border-red-600 rounded-md">
            <h3 className="text-lg font-bold text-red-600 mb-4">Non Exclusive</h3>
            <p className="text-red-600 text-center">Sell the same work on other sites but Envato charges more fees</p>
          </div>

          <div className="bg-gray-100 w-1/3 shadow-md p-6 flex flex-col items-center bg-gradient-to-r from-[#e4e9fe] from-10% [#f1ecf9] via-30% to-[#fef1f3] to-90% border-2 border-indigo-900 rounded-md">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">Exclusive</h3>
            <p className="text-indigo-900 text-center">Sell only with Envato Market and you can make almost double from each sale compared to a Non-Exclusive author</p>
          </div>


        </div>
        <p className="text-indigo-900 font-semibold text-center mt-8"><button>Read more about our fees</button></p>
        <p className="text-slate-500 text-center mt-4">You can change your exclusivity agreement at any time. Remember - it's great to be exclusive!</p>
        <p className="text-slate-500 text-center mt-4 font-semibold">Continue to your <button href="#" className="text-indigo-900">Author Dashboard</button></p>
        <p className="text-slate-500 text-center mt-8 font-semibold">Read more about choosing <button href="#" className="text-indigo-900">Exclusivity</button>.</p>
      </div>
    </div>
  )
}
