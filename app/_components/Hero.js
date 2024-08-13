import Image from 'next/image';
import Link from 'next/link';
import hero from '@/public/hero.jpg';

function Hero() {
  return (
    <div className='px-3 md:pr-0 sm:px-5 pt-10 md:pt-0 2lx:ml-10 flex flex-col md:flex-row xl:pl-80 md:pl-3 md:gap-5 lg:gap-0 full-height-minus-nav relative '>
      <div className='md:w-2/5 self-center md:py-24 mb-8'>
        <h1 className='text-5xl font-semibold text-primary-darkGray leading-tight'>
          Discover Your Dream Home with Home Quest
        </h1>
        <p className='text-xl text-gray-500 mt-2 mb-10'>
          Home Quest offers a comprehensive platform to search, buy, and sell
          properties easily. Connect with top agents and find the perfect home
          quickly.
        </p>
        <Link
          className='px-4 py-3 text-center text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-lg'
          href='/signin'
        >
          Find your future home
        </Link>
      </div>
      <div className='md:w-3/5 relative pt-5 h-72 md:h-[45rem] z-0 clip-path'>
        <Image
          src={hero}
          alt='hero image'
          fill
          className='md:object-cover object-cover '
        />
      </div>
    </div>
  );
}

export default Hero;
