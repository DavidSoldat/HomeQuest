import features from '@/public/features.jpeg';
import Image from 'next/image';
import {
  BellIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

function Features() {
  return (
    <div className='border  border-gray-200 rounded-lg boxShadow flex flex-col md:flex-row w-fit relative md:max-w-6xl lg:mx-auto py-5 '>
      <div className='md:w-1/2 mx-7 mt-7 md:m-12 '>
        <h1 className='text-5xl font-semibold text-primary-darkGray leading-tight px-3'>
          Our Top Features
        </h1>
        <p className='px-3 py-3 text-gray-500 text-xl'>
          Discover the cutting-edge features that make HomeFinder Pro your best
          choice for real estate needs.
        </p>
        <ul className='flex flex-col p-3'>
          <li className='flex items-start my-3'>
            <div className='flex w-fit pt-2 mr-5 '>
              <BriefcaseIcon className='size-6 text-primary-darkGray' />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-primary-darkGray font-semibold text-lg'>
                Advanced Search
              </h1>
              <p className='text-gray-500 text-sm '>
                Filter by location, price, and more to find the perfect property
                tailored to your needs quickly and easily.
              </p>
            </div>
          </li>
          <li className='flex items-start my-3'>
            <div className='flex w-fit pt-2  mr-5 '>
              <EnvelopeIcon className='size-6 text-primary-darkGray' />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-primary-darkGray font-semibold text-lg'>
                Advanced Search
              </h1>
              <p className='text-gray-500 text-sm '>
                Filter by location, price, and more to find the perfect property
                tailored to your needs quickly and easily.
              </p>
            </div>
          </li>
          <li className='flex items-start my-3'>
            <div className='flex w-fit pt-2  mr-5'>
              <BellIcon className='size-6 text-primary-darkGray' />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-primary-darkGray font-semibold text-lg'>
                Advanced Search
              </h1>
              <p className='text-gray-500 text-sm '>
                Filter by location, price, and more to find the perfect property
                tailored to your needs quickly and easily.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className='md:w-1/2  m-6 md:m-12  '>
        <Image src={features} alt='building' className='rounded-lg max-h-fit' />
      </div>
    </div>
  );
}

export default Features;
