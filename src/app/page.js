import Link from 'next/link';
import Image from 'next/image';
import bg from '../../public/bg.png';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <main className="mt-34 max-w-250 mx-auto">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover object-top animate-fade-in animate-duration-400"
        alt="Mountains and forests with two cabins"
        quality={100}
      />

      <div className="relative z-10 text-center ">
        <h1 className="md:text-8xl text-4xl sm:text-6xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 sm:px-8 sm:py-6 px-5 py-4 text-primary-800 sm:text-lg text-sm font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
