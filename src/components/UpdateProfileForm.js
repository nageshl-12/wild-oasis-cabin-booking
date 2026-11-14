'use client';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function UpdateProfileForm({ children }) {
  const [country, setCountry] = useState('India');

  return (
    <form className="bg-primary-900 py-8 px-12 md:text-lg text-sm flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img alt="Country flag" className="h-5 rounded-sm" />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="px-5 md:py-3 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="bg-accent-500 md:px-8 px-5 md:py-4 cursor-pointer py-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}
