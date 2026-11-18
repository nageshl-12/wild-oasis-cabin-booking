import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import DeleteReservation from '@/components/DeleteReservation';
import Image from 'next/image';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800">
      <div className="relative h-48 sm:h-32 w-full sm:w-auto sm:aspect-square shrink-0">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover sm:border-r border-primary-800"
        />
      </div>

      <div className="grow min-w-0 px-4 sm:px-6 py-3 flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>

          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-base sm:text-lg text-primary-300">
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>

          <p className="text-primary-300">&bull;</p>

          <p className="text-base sm:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && 's'}
          </p>

          <p className="w-full sm:w-auto sm:ml-auto text-xs sm:text-sm text-primary-400">
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

      {!isPast(startDate) ? (
        <div className="flex flex-row sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800 w-full sm:w-25 shrink-0">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center justify-center sm:justify-start gap-2 uppercase text-xs font-bold text-primary-300 border-r sm:border-r-0 sm:border-b border-primary-800 grow px-3 py-3 sm:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900"
          >
            <PencilIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Edit</span>
          </Link>
          <div className="grow flex">
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ReservationCard;
