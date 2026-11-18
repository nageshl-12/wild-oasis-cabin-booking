import { signOutAction } from '@/lib/actions';
import { ArrowRightSquareIcon } from 'lucide-react';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-2 translate-y-1 px-5 cursor-pointer hover:bg-primary-900  hover:text-primary-100 transition-colors flex md:flex-row flex-col items-center gap-2 md:gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightSquareIcon className="h-5 w-5 text-primary-600" />
        <span className="text-xs md:text-lg">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
