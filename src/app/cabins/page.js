import CabinCard from './CabinCard';

export const metadata = {
  title: 'Cabins',
};

// PLACEHOLDER DATA
const cabin = {
  id: 89,
  name: '001',
  maxCapacity: 2,
  regularPrice: 250,
  discount: 0,
  description:
    'Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.',
  image:
    'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg',
};

export default function Page() {
  // CHANGE
  const cabins = [];

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
