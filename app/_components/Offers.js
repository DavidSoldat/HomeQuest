import Link from 'next/link';

function Offers() {
  return (
    <div className='md:max-w-6xl lg:mx-auto py-14 px-4 '>
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
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 '>
          <div className='mb-4 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
              />
            </svg>
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
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 '>
          <div className='mb-4 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
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
        <div className='border border-gray-200 rounded-lg flex flex-col items-start px-6 pt-6 '>
          <div className='mb-4 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z'
              />
            </svg>
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
