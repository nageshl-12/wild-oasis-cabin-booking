import { CalendarDays, Home, User } from 'lucide-react';

import SignOutButton from '@/components/SignOutButton';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// ${pathname === link.href ? 'bg-primary-900' : ''}
const navLinks = [
  {
    nameDesktop: 'Home',
    nameMobile: 'Home',

    href: '/account',
    icon: <Home className="h-5 w-5 text-primary-600" />,
  },
  {
    nameDesktop: 'Reservations',
    nameMobile: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDays className="h-5 w-5 text-primary-600" />,
  },
  {
    nameDesktop: 'Guest profile',
    nameMobile: 'Profile',
    href: '/account/profile',
    icon: <User className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  // const pathname = usePathname();
  return (
    <nav className="md:border-r md:border-primary-900">
      <ul className="flex sm:flex-col md:gap-2 justify-around md:justify-none h-full text-lg flex-row">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5  hover:bg-primary-900  hover:text-primary-100 transition-colors flex md:flex-row flex-col items-center md:gap-4 gap-2 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span className="md:hidden block text-xs">{link.nameMobile}</span>
              <span className="hidden md:block">{link.nameDesktop}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
