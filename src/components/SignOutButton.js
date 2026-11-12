import { ArrowRightSquareIcon } from 'lucide-react';

function SignOutButton() {
  return (
    <button className="py-3 px-5 hover:bg-primary-900  hover:text-primary-100 transition-colors flex md:flex-row flex-col items-center gap-2 md:gap-4 font-semibold text-primary-200 w-full">
      <ArrowRightSquareIcon className="h-5 w-5 text-primary-600" />
      <span className="text-xs md:text-lg">Sign out</span>
    </button>
  );
}

export default SignOutButton;
