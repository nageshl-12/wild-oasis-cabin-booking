'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const options = [
  { value: 'all', label: 'All cabins' },
  { value: 'small', label: `1-3 guests` },
  { value: 'medium', label: '4-7 guests' },
  { value: 'large', label: '8-12 guests' },
];

export default function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchparams.get('capacity') ?? 'all';

  function handleFilter(value) {
    const params = new URLSearchParams(searchparams);
    params.set('capacity', value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      {options.map((option) => (
        <button
          type="button"
          className={`px-5 py-2 hover:bg-primary-700 text-[10px] sm:text-lg cursor-pointer ${activeFilter === option.value && 'bg-primary-700 text-accent-400'}`}
          onClick={() => handleFilter(option.value)}
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
