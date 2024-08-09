import features from '@/public/features.jpeg';
import Image from 'next/image';

function Features() {
  return (
    <div className='border  border-gray-200 rounded-lg shadow-md flex flex-col md:flex-row w-fit relative md:max-w-6xl lg:mx-auto   '>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round row-span-2'
                  strokeLinejoin='round'
                  d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                />
              </svg>
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
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
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
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                />
              </svg>
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
