import Link from 'next/link';
import getSession from '../_lib/getSession';
import UserButton from './UserButton';

export default async function Navigation() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav>
      <div className='mx-auto '>
        <div className='relative flex items-center justify-between h-16'>
          <div className='hidden sm:block sm:ml-6'>
            <div className='flex items-center'>
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

              {user ? (
                <UserButton user={user} />
              ) : (
                <Link
                  className='px-4 py-2 text-lg text-white bg-blue-700 hover:bg-blue-800 rounded-lg '
                  href='/signin'
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
