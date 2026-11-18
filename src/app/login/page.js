import SignInButton from '@/components/SignInButton';

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="md:text-3xl text-lg font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
