import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import { auth } from '@/lib/auth';
async function Header() {
  const session = await auth();

  return (
    <header className="px-8 py-5 w-full  border-b border-primary-900">
      <div className="flex justify-between items-center">
        <Logo />
        <Navbar session={session} />
      </div>
    </header>
  );
}

export default Header;
