import Image from 'next/image';
import Link from 'next/link';
import hero from '@/public/hero.jpg';

function Hero() {
  return (
    <div className='px-3 pt-10 flex flex-col md:flex-row'>
      <div className=''>
        <h1 className='text-5xl font-semibold text-primary-darkGray leading-tight'>
          Discover Your Dream Home with HomeFinder Pro
        </h1>
        <p className='text-lg text-gray-500 mt-2 mb-10'>
          HomeFinder Pro offers a comprehensive platform to search, buy, and
          sell properties easily. Connect with top agents and find the perfect
          home quickly.
        </p>
        <Link
          className='px-4 py-3 text-center bg-primary-navy text-primary-lightGray rounded-xl text-lg'
          href='/signin'
        >
          Find your future home
        </Link>
      </div>
      <div className='w-full '>
        <Image src={hero} alt='hero image' className='mt-10' />
      </div>
    </div>
  );
}

export default Hero;
