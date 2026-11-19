'use client';
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from './ReservationContext';

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, {
        start: range.from,
        end: range.to,
      }),
    )
  );
}
function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range || {};

  const { regularPrice, discount } = cabin;
  const numNights =
    displayRange.from && displayRange.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const cabinPrice = (regularPrice - discount) * numNights;
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={displayRange}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        onSelect={(selectedRange) => {
          if (
            selectedRange?.from &&
            selectedRange?.to &&
            isSameDay(selectedRange.from, selectedRange.to)
          ) {
            return;
          }

          setRange(selectedRange || {});
        }}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(2030, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
        classNames={{
          months: 'flex md:flex-row flex-col gap-8',
        }}
      />

      <div
        className="
  flex flex-col md:flex-row
  md:items-center md:justify-between
  gap-3 md:gap-0
  mt-5
  bg-accent-500 text-primary-800
  px-3 md:px-2
  py-3 md:py-0
  md:h-18
  min-h-20
  w-full
  shrink-0
"
      >
        <div className="flex items-center justify-between md:justify-start gap-4">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700 text-sm">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span className="text-sm">/night</span>
          </p>

          {range?.from || range?.to ? (
            <button
              className="md:hidden border border-primary-800 px-3 py-2 text-xs font-semibold"
              onClick={resetRange}
            >
              Clear
            </button>
          ) : null}
        </div>

        {numNights > 0 && (
          <div className="flex items-center justify-between md:justify-start gap-3">
            <p className="bg-accent-600 px-3 py-2 text-lg md:text-2xl">
              × {numNights}
            </p>

            <p className="flex items-baseline gap-2">
              <span className="text-xs md:text-lg font-bold uppercase">
                Total
              </span>
              <span className="text-xl md:text-2xl font-semibold">
                ${cabinPrice}
              </span>
            </p>

            {range?.from || range?.to ? (
              <button
                className="hidden md:block border border-primary-800 py-2 px-4 text-sm font-semibold cursor-pointer"
                onClick={resetRange}
              >
                Clear
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
