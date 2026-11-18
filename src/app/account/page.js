import { auth } from '@/lib/auth';

export const metadata = {
  title: 'Login',
};

export default async function Page() {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7 animate-fade-in-up animate-duration-250">
      Welcome, {session.user.name}
    </h2>
  );
}
