'use client';
export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 animate-fade-in-up">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="md:text-lg text-sm text-center">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-500 text-primary-800 cursor-pointer px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
