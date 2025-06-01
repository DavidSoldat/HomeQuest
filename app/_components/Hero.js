import Image from 'next/image';
import Link from 'next/link';
import hero from '@/public/hero.jpg';
import getSession from '../_lib/getSession';

async function Hero() {
  const session = await getSession();
  const user = session?.user;
  let href = user ? '/buy' : '/signin';

  return (
    <div className="2lx:ml-10 full-height-minus-nav relative flex flex-col px-3 pt-10 sm:px-5 md:flex-row md:gap-5 md:pl-3 md:pr-0 md:pt-0 lg:gap-0 xl:pl-80">
      <div className="mb-8 self-center md:w-2/5 md:py-24">
        <h1 className="text-primary-darkGray text-5xl font-semibold leading-tight">
          Discover Your Dream Home with Home Quest
        </h1>
        <p className="mb-10 mt-2 text-xl text-gray-500">
          Home Quest offers a comprehensive platform to search, buy, and sell
          properties easily. Connect with top agents and find the perfect home
          quickly.
        </p>
        <Link
          className="rounded-lg bg-blue-700 px-4 py-3 text-center text-lg text-white hover:bg-blue-800"
          href={href}
        >
          Find your future home
        </Link>
      </div>
      <div className="clip-path relative z-0 h-72 pt-5 md:h-[45rem] md:w-3/5">
        <Image
          src={hero}
          alt="hero image"
          fill
          loading="lazy"
          fetchPriority="high"
          className="object-cover md:object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
