import { Suspense } from 'react';
import { auth } from '@/lib/auth';
import { getBookings } from '@/lib/data-service';
import ReservationList from '@/components/ReservationList';
import Link from 'next/link';

export const metadata = {
  title: 'Reservations',
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading reservations...</p>}>
      <Reservations />
    </Suspense>
  );
}

async function Reservations() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div className="animate-fade-in-up">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{' '}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
