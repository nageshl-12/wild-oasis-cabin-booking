'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 cursor-pointer md:px-4 md:py-4 px-4 py-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? (
        <span className="flex gap-2 items-center">
          <SpinnerMini />
          {pendingLabel}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
