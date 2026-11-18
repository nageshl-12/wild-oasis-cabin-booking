/* eslint-disable @next/next/no-img-element */
'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import Modal from './Modal';
import { usePathname } from 'next/navigation';

const navLinks = [
  { path: '/cabins', label: 'Cabins' },
  { path: '/about', label: 'About' },
  { path: '/account', label: 'Guest area' },
];

export default function Navbar({ session }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);

  const links = session?.user?.image ? navLinks.slice(0, 2) : navLinks;

  return (
    <nav className="relative z-10 text-xl">
      {!showNavbar && (
        <button
          type="button"
          onClick={() => setShowNavbar((show) => !show)}
          className="md:hidden block cursor-pointer animate-expand-vertically animate-duration-300"
        >
          <Menu size={20} />
        </button>
      )}
      {showNavbar && (
        <Modal onClose={() => setShowNavbar(false)}>
          <button
            type="button"
            onClick={() => setShowNavbar(false)}
            className="absolute top-7 right-8 cursor-pointer animate-expand-vertically animate-duration-300"
          >
            <X size={20} />
          </button>
          <ul className="flex flex-col items-center gap-6 w-100 animate-fade-in-up animate-duration-250">
            {links.map((link) => (
              <li key={link.label} className="w-full  text-center">
                <Link
                  onClick={() => setShowNavbar(false)}
                  className={`hover:text-accent-400 w-full block uppercase transition-colors ${pathname === link.path || pathname.startsWith(`${link.path}/`) ? 'text-accent-400' : ''}`}
                  href={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {session?.user?.image && (
              <Link
                href="/account"
                className={`flex gap-1 items-center hover:text-accent-400 ${pathname === '/account' || pathname.startsWith('/account') ? 'text-accent-400' : ''}`}
              >
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                  className="h-8 rounded-full"
                />
                <span className="uppercase">Guest Area</span>
              </Link>
            )}
          </ul>
        </Modal>
      )}

      <ul className="md:flex gap-16 items-center hidden ">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className={`hover:text-accent-400  transition-colors ${pathname === link.path || pathname.startsWith(`${link.path}/`) ? 'text-accent-400' : ''}`}
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
        {session?.user?.image && (
          <Link
            href="/account"
            className={`flex gap-2 items-center transition-colors hover:text-accent-400 ${pathname === '/account' || pathname.startsWith('/account') ? 'text-accent-400' : ''}`}
          >
            <img
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
              className="h-8 rounded-full"
            />
            <span>Guest Area</span>
          </Link>
        )}
      </ul>
    </nav>
  );
}
