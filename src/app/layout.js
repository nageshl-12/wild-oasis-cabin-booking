import '@/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/Header';
import { Suspense } from 'react';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 antialiased text-primary-100 min-h-screen ${josefin.className} grid grid-rows-[auto_1fr] h-screen overflow-hidden`}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="w-full min-h-0 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
