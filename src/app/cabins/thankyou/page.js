import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="md:text-3xl text-lg font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="underline md:text-xl text-lg text-accent-500 inline-block"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
