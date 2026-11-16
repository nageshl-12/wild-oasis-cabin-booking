'use client';

import { format } from 'date-fns';
import { X } from 'lucide-react';
import { useReservation } from './ReservationContext';

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
                w-[calc(100%-2rem)] sm:w-auto sm:min-w-120
                flex items-center justify-between gap-3 sm:gap-6
                rounded-2xl sm:rounded-full
                bg-accent-500 text-primary-800
                px-4 py-3 sm:px-7 sm:py-4
                font-semibold shadow-xl shadow-slate-900/30 animate-pulse animate-duration-"
    >
      <p className="text-xs sm:text-sm leading-relaxed">
        <span>👋</span> Don&apos;t forget to reserve your dates
        <br />
        <span className="font-normal">
          from {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
          {format(new Date(range.to), 'MMM dd yyyy')}
        </span>
      </p>

      <button
        onClick={resetRange}
        className="shrink-0 rounded-full p-2
                     hover:bg-accent-600 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
