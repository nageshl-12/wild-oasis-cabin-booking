import Image from 'next/image';
import Link from 'next/link';
import About1 from '../../../public/about-1.jpg';
import About2 from '../../../public/about-2.jpg';

export const metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <div className="space-y-20 px-5 py-5 max-w-250 mx-auto md:mt-5 mt-2 overflow-y-auto">
      {/* First Section */}
      <section>
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="w-full sm:w-1/3 animate-fade-in-up animate-duration-800">
            <Image
              src={About1}
              alt="Family sitting around a fire pit in front of cabin"
              quality={90}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 space-y-8 animate-fade-in-down animate-duration-600">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>

            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>

            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full sm:w-1/3 animate-fade-in-up animate-duration-800">
            <Image
              src={About2}
              alt="Family that manages The Wild Oasis"
              quality={90}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl mb-10 text-accent-400 font-medium">
              Managed by our family since 1962
            </h2>

            <div className="space-y-8 animate-fade-in-down animate-duration-600">
              <p>
                Since 1962, The Wild Oasis has been a cherished family-run
                retreat. Started by our grandparents, this haven has been
                nurtured with love and care, passing down through our family as
                a testament to our dedication to creating a warm, welcoming
                environment.
              </p>

              <p>
                Over the years, we&apos;ve maintained the essence of The Wild
                Oasis, blending the timeless beauty of the mountains with the
                personal touch only a family business can offer. Here,
                you&apos;re not just a guest; you&apos;re part of our extended
                family. So join us at The Wild Oasis soon, where tradition meets
                tranquility, and every visit is like coming home.
              </p>
            </div>

            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 sm:px-8 sm:py-5 px-5 py-3 text-primary-800 text-sm sm:text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
