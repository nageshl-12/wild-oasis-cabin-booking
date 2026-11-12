'use client';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`px-8 py-5 w-full  ${pathname !== '/' && 'bg-primary-950 border-b border-primary-900 '}`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
