import TextExpander from '@/components/TextExpander';
import { getCabin } from '@/lib/data-service';
import { EyeDashedIcon, MapPin, User2 } from 'lucide-react';
import { cacheLife } from 'next/cache';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export default async function Page({ params }) {
  'use cache';
  cacheLife({
    stale: 0,
    revalidate: 10,
    expire: 3600,
  });

  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid animate-fade-in-up grid-rows-[220px_1fr] md:grid-cols-[3fr_4fr] md:grid-rows-none gap-8 md:gap-20 border border-primary-800 py-5 px-5 md:py-3 md:px-10 mb-16 md:mb-24">
        <div className="relative h-full min-h-55 md:min-h-0 scale-100 md:scale-[1.15] md:-translate-x-3 md:translate-y-0">
          <Image
            src={image}
            className="object-cover rounded-md md:rounded-none"
            fill
            sizes="(max-width: 768px) 100vw, 43vw"
            alt={`Cabin ${name}`}
          />
        </div>

        <div className="pt-2 md:pt-0">
          <h3 className="text-accent-100 font-black text-7xl hidden md:block mb-5 -translate-x-63.5 bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <h2 className="md:hidden block text-3xl font-bold text-accent-100 mb-4">
            Cabin {name}
          </h2>

          <p className="text-base md:text-lg text-primary-300 mb-7 md:mb-10 md:-translate-x-6 md:-translate-y-5">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-5 mb-7">
            <li className="flex gap-3 items-center">
              <User2 className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base md:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{' '}
                guests
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <MapPin className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base md:text-lg">
                Located in the heart of the{' '}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <EyeDashedIcon className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base md:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 md:px-0 md:translate-y-0 -translate-y-11 animate-fade-in-right">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
