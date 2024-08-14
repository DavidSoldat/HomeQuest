import Link from 'next/link';

function Footer() {
  return (
    <footer className='pb-14 pt-7 relative border-t border-gray-200'>
      <div className='md:max-w-6xl lg:mx-auto px-4  w-full relative '>
        <div className='flex flex-wrap gap-10 w-full justify-center md:justify-between'>
          <div>
            <span className='text-gray-500'>© 2024 David Soldat</span>
            <div className='flex gap-2 my-2'>
              <Link href='https://www.facebook.com/'>
                <div className='p-2 block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='24'
                    height='24'
                    className='fill-gray-500'
                  >
                    <path d='M448 56.7v398.5a24.7 24.7 0 0 1-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7A24.8 24.8 0 0 1 0 455.3V56.7A24.8 24.8 0 0 1 24.7 32h398.5A24.8 24.8 0 0 1 448 56.7z'></path>
                  </svg>
                </div>
              </Link>
              <Link href='https://www.instagram.com/'>
                <div className='p-2 block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='24'
                    height='24'
                    className='fill-gray-500'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6a74.8 74.8 0 1 1 .1-149.3 74.8 74.8 0 0 1-.1 149.3zm146.4-194.3a26.7 26.7 0 1 1-53.6 0 26.8 26.8 0 0 1 53.6 0zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.6 75.6 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.6 75.6 0 0 1 49.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.6 75.6 0 0 1 92 81.2c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.6 75.6 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                  </svg>
                </div>
              </Link>
              <Link href='https://twitter.com/'>
                <div className='p-2 block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='24'
                    height='24'
                    className='fill-gray-500'
                  >
                    <rect width='512' height='509.64' rx='115.61' ry='115.61' />
                    <path
                      fill='#fff'
                      d='M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z'
                    />
                  </svg>
                </div>
              </Link>
              <Link href='https://www.youtube.com/'>
                <div className='p-2 block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                    width='24'
                    height='24'
                    className='fill-gray-500'
                  >
                    <path d='M549.7 124a68.6 68.6 0 0 0-48.3-48.5C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 25-48.3 48.6C15 167 15 256.4 15 256.4s0 89.4 11.4 132.3a67.6 67.6 0 0 0 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5a67.6 67.6 0 0 0 48.3-47.8C561 345.8 561 256.4 561 256.4s0-89.5-11.4-132.3zM232 337.7V175.2l143 81.2-143 81.2z'></path>
                  </svg>
                </div>
              </Link>
            </div>
            <span className='text-gray-500'>
              Home Quest · Find your perfect home
            </span>
          </div>
          <ul className='flex gap-20 flex-wrap'>
            <li>
              <h4 className='mb-1 font-medium'>Features</h4>
              <ul>
                <li className='py-1'>
                  <Link href='/' className='py-2'>
                    Advanced Search
                  </Link>
                </li>
                <li className='py-1'>
                  <Link href='/'>Agent Network</Link>
                </li>
                <li className='py-1'>
                  <Link href='/'>Virtual Tours</Link>
                </li>
              </ul>
            </li>
            <li>
              <h4 className='mb-1 font-medium'>Legal</h4>
              <ul>
                <li className='py-1'>
                  <Link href='/' className='py-2'>
                    Privacy Policy
                  </Link>
                </li>
                <li className='py-1'>
                  <Link href='/'>Terms of Use</Link>
                </li>
                <li className='py-1'>
                  <Link href='/'>Cookie Policy</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
