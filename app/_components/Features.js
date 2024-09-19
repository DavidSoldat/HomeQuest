import features from '@/public/features.jpeg';
import Image from 'next/image';
import {
  BellIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

function Features() {
  return (
    <div className="px-4 py-12 md:max-w-6xl lg:mx-auto">
      <div className="boxShadow relative flex w-fit flex-col rounded-lg border border-gray-200 md:flex-row">
        <div className="mx-7 mt-7 md:m-12 md:w-1/2">
          <h1 className="text-primary-darkGray px-3 text-5xl font-semibold leading-tight">
            Our Top Features
          </h1>
          <p className="px-3 py-3 text-xl text-gray-500">
            Discover the cutting-edge features that make HomeFinder Pro your
            best choice for real estate needs.
          </p>
          <ul className="flex flex-col p-3">
            <li className="my-3 flex items-start">
              <div className="mr-5 flex w-fit pt-2">
                <BriefcaseIcon className="text-primary-darkGray size-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-darkGray text-lg font-semibold">
                  Advanced Search
                </h1>
                <p className="text-sm text-gray-500">
                  Filter by location, price, and more to find the perfect
                  property tailored to your needs quickly and easily.
                </p>
              </div>
            </li>
            <li className="my-3 flex items-start">
              <div className="mr-5 flex w-fit pt-2">
                <EnvelopeIcon className="text-primary-darkGray size-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-darkGray text-lg font-semibold">
                  Agent Network
                </h1>
                <p className="text-sm text-gray-500">
                  Connect with trusted real estate agents who can guide you
                  through every step of the home-buying process.
                </p>
              </div>
            </li>
            <li className="my-3 flex items-start">
              <div className="mr-5 flex w-fit pt-2">
                <BellIcon className="text-primary-darkGray size-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-darkGray text-lg font-semibold">
                  Virtual Tours
                </h1>
                <p className="text-sm text-gray-500">
                  Experience properties like never before with our immersive
                  virtual tours, available for many of our listings.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="m-6 md:m-12 md:w-1/2">
          <Image
            src={features}
            alt="building"
            className="max-h-fit rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
