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

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);

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
            {navLinks.map((link) => (
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
          </ul>
        </Modal>
      )}

      <ul className="md:flex gap-16 items-center hidden ">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              className={`hover:text-accent-400  transition-colors ${pathname === link.path || pathname.startsWith(`${link.path}/`) ? 'text-accent-400' : ''}`}
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
