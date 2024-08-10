import Link from 'next/link';
import {
  BellIcon,
  BriefcaseIcon,
  ClockIcon,
  CloudIcon,
  EnvelopeIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

function Offers() {
  return (
    <div className='md:max-w-6xl lg:mx-auto py-12 px-4 '>
      <header className='flex flex-col mb-8 gap-2'>
        <h1 className='text-5xl font-semibold text-primary-darkGray leading-tight '>
          What We Offer
        </h1>
        <p className='text-gray-500 text-xl'>
          A curated collection of services to ensure you have everything you
          need in your real estate journey.
        </p>
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit lg:grid-cols-minmax-300px-1fr gap-4'>
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 boxShadow'>
          <div className='mb-4 p-2'>
            <FireIcon className='size-6 text-primary-darkGray' />
          </div>
          <h2 className='text-xl font-medium mb-2'>Property Alerts</h2>
          <span className='text-gray-500 mb-6'>
            Get instant notifications on new listings that match your
            preferences. Never miss out on your dream home.
          </span>
          <div className='mb-5 px-4 py-2 bg-primary-navy text-primary-lightGray rounded-lg'>
            <Link href='/'>Learn More</Link>
          </div>
        </div>
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 boxShadow'>
          <div className='mb-4 p-2'>
            <ClockIcon className='size-6 text-primary-darkGray' />
          </div>
          <h2 className='text-xl font-medium mb-2'>Premium Listings</h2>
          <span className='text-gray-500 mb-6'>
            Access exclusive listings that are not available on other platforms.
            Find hidden gems in your market.
          </span>
          <div className='mb-5 px-4 py-2 bg-primary-navy text-primary-lightGray rounded-lg'>
            <Link href='/'>Learn More</Link>
          </div>
        </div>
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 boxShadow'>
          <div className='mb-4 p-2'>
            <CloudIcon className='size-6 text-primary-darkGray' />
          </div>
          <h2 className='text-xl font-medium mb-2'>Market Insights</h2>
          <span className='text-gray-500 mb-6'>
            Stay informed with the latest real estate trends and data to make
            well-informed buying and selling decisions.
          </span>
          <div className='mb-5 px-4 py-2 bg-primary-navy text-primary-lightGray rounded-lg'>
            <Link href='/'>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
