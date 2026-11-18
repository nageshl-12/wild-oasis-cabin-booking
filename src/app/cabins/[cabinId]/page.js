import Cabin from '@/components/Cabin';
import Reservation from '@/components/Reservation';
import { getCabin } from '@/lib/data-service';

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export default async function Page({ params }) {
  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8 pb-10">
      <Cabin cabin={cabin} />

      <div className="px-4 md:px-0 md:translate-y-0 -translate-y-11 animate-fade-in-right">
        <h2 className="text-2xl mb-5 md:text-5xl font-semibold text-center text-accent-400">
          Reserve today {cabin.name}. Pay on arrival.
        </h2>
        <div className="border md:px-13 px-2 border-primary-800 flex justify-center items-center ">
          <Reservation cabin={cabin} />
        </div>
      </div>
    </div>
  );
}
