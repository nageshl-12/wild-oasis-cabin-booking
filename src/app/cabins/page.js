import CabinList from '@/components/CabinList';
import { Suspense } from 'react';
import Loading from './loading';
import Filter from '@/components/Filter';

export const metadata = {
  title: 'Cabins',
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const filter = params?.capacity || 'all';

  return (
    <div className="max-w-250 mx-auto px-5 py-5 md:mt-5 mt-2">
      <h1 className="sm:text-4xl text-3xl mb-5 text-accent-400 font-medium animate-fade-in-right animate-duration-400 ">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10 animate-fade-in-left animate-duration-400">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-5">
        <Filter />
      </div>
      <Suspense fallback={<Loading />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
