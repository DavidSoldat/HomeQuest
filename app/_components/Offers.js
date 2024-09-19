import { ClockIcon, CloudIcon, FireIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Offers() {
  return (
    <div className="px-4 py-12 md:max-w-6xl lg:mx-auto">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-primary-darkGray text-5xl font-semibold leading-tight">
          What We Offer
        </h1>
        <p className="text-xl text-gray-500">
          A curated collection of services to ensure you have everything you
          need in your real estate journey.
        </p>
      </header>
      <div className="lg:grid-cols-auto-fit lg:grid-cols-minmax-300px-1fr grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="boxShadow flex flex-col items-start rounded-lg border border-gray-200 px-6 pt-6">
          <div className="mb-4 p-2">
            <FireIcon className="text-primary-darkGray size-6" />
          </div>
          <h2 className="mb-2 text-xl font-medium">Property Alerts</h2>
          <span className="mb-6 text-gray-500">
            Get instant notifications on new listings that match your
            preferences. Never miss out on your dream home.
          </span>
          <div className="mb-5 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
            <Link href="/">Learn More</Link>
          </div>
        </div>
        <div className="boxShadow flex flex-col items-start rounded-lg border border-gray-200 px-6 pt-6">
          <div className="mb-4 p-2">
            <ClockIcon className="text-primary-darkGray size-6" />
          </div>
          <h2 className="mb-2 text-xl font-medium">Premium Listings</h2>
          <span className="mb-6 text-gray-500">
            Access exclusive listings that are not available on other platforms.
            Find hidden gems in your market.
          </span>
          <div className="mb-5 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
            <Link href="/">Learn More</Link>
          </div>
        </div>
        <div className="boxShadow flex flex-col items-start rounded-lg border border-gray-200 px-6 pt-6">
          <div className="mb-4 p-2">
            <CloudIcon className="text-primary-darkGray size-6" />
          </div>
          <h2 className="mb-2 text-xl font-medium">Market Insights</h2>
          <span className="mb-6 text-gray-500">
            Stay informed with the latest real estate trends and data to make
            well-informed buying and selling decisions.
          </span>
          <div className="mb-5 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
            <Link href="/">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
