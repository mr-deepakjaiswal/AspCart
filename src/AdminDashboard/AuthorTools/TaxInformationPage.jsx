import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";

function TaxInformationPage() {

  return (
    <div className="container mx-auto px-4">

      <h2 className="text-xl font-bold mb-4">Tax Summaries</h2>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="digital-tax-summaries" className='font-semibold'>Access digital tax summaries</label>
      </div>
      <p className="mb-4 text-slate-500">
        By ticking this checkbox you will be able to access and view your tax summaries in Author
        Tools.
      </p>
      <p className="mb-4 text-slate-500 font-semibold border-b-2 pb-4">
        Note: In order to access your digital tax summaries you must also have 2FA enabled on your
        Envato account. Please see{' '}
        <button href="#" className="text-indigo-900">
          this help article
        </button>{' '}
        for more information.
      </p>
      <div className="mt-4 flex justify-start">
        <button className="bg-green-500  text-white font-bold py-2 px-4 rounded mr-2">
          Save
        </button>
        <button className="bg-gray-100  text-red-600 font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>


      <h2 className="text-xl font-bold mt-8 mb-4">Tax Information</h2>
      <p className="mb-4 text-slate-500 font-semibold">
        US federal tax law requires Envato to collect US Author tax information through an IRS Form
        W-9 and report on income paid.
      </p>

      <h3 className="text-lg font-bold mb-2">If you are a U.S. Person</h3>
      <p className="mb-4 text-slate-500 font-semibold">
        No matter where you are worldwide you can submit a Form W-9 to Envato to satisfy your
        filing requirement. Typically there will be no withholding of taxes on any of your Envato
        income. If you do not submit a valid Form W-9, Envato will be required to deduct 24%
        withholding tax from sales proceeds and remit these directly to the Internal Revenue
        Service. If you have any questions, please check our help center for{' '}
        <button href="#" className="text-indigo-900">
          W-9 articles
        </button>
        .
      </p>

      <h3 className="text-lg font-bold mb-2">If you are not a U.S. Person</h3>
      <p className="mb-4 text-slate-500 font-semibold">
        You will need to submit a Form W-8. If you are a resident of a country that has a tax treaty
        with the U.S., you will benefit from the reduced or zero withholding rate that is specified
        in your country's tax treaty. If you are a resident of a country that does not have a tax
        treaty with the U.S., then your U.S. source income from Envato will be subject to a 30%
        withholding tax. If you have any questions, please check our help center for{' '}
        <button href="#" className="text-indigo-900">
          W-8 articles
        </button>
        .
      </p>
      <p className="mb-4 text-slate-500 font-semibold">
        While Envato cannot give tax and/or legal advice, we will do our best to provide you with
        the information you need to make your own decision about how to comply with applicable U.S.
        tax laws. If you still have questions after reviewing the information provided by the
        IRS, please contact your legal and/or tax advisor.
      </p>

      <div className="mb-4">
        <p className="mb-2 flex items-center gap-2 border-b-2 pb-4">
           <span><FaQuestionCircle /></span>Please indicate whether you are a US Person and we will direct you to the correct
          Forms.
        </p>

        <div className="flex items-center">
          <input type="radio" className="mr-2" name="us-person" />
          <label htmlFor="us-person">I am a US Person</label>
        </div>
        <div className="flex items-center">
          <input type="radio" className="mr-2" name="us-person" />
          <label htmlFor="not-us-person">I am not a US Person</label>
        </div>
      </div>

    <div className='border-2 p-4 rounded-md text-slate-500'>
      <h3 className="text-xl font-bold mb-2">Definition of a US Person</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          An individual who is a US citizen or US resident alien, or who satisfies the substantial
          presence test
        </li>
        <li>
          A partnership, limited liability company, corporation, company, or association created or
          organized in the United States or under the laws of the United States,
        </li>
        <li>An estate (other than a foreign estate), or</li>
        <li>A domestic trust (as defined in US tax regulations).</li>
      </ul>
      </div>
    </div>

  );
}

export default TaxInformationPage;