import Link from 'next/link';

async function Navigation() {
  return (
    <nav>
      <div className='mx-auto lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='hidden sm:block sm:ml-6'>
            <div className='flex '>
              <Link
                className='text-primary-darkGray hover:text-blue-600 text-lg px-4 py-2'
                href='/buy'
              >
                Buy
              </Link>
              <Link
                className='text-primary-darkGray hover:text-blue-600 text-lg px-4 py-2'
                href='/sell'
              >
                Sell
              </Link>
              <Link
                className='text-primary-darkGray hover:text-blue-600 text-lg px-4 py-2'
                href='/rent'
              >
                Rent
              </Link>
              <Link
                className='text-primary-darkGray hover:text-blue-600 text-lg px-4 py-2'
                href='/agents'
              >
                Agents
              </Link>

              <Link
                className='px-4 py-2 text-lg text-white bg-blue-700 hover:bg-blue-800 rounded-lg '
                href='/signin'
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
