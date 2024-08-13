'use client';

import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <nav>
      <div className=' mx-auto lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div
            id='hamburger'
            className='inset-y-0 left-0 flex items-center sm:hidden z-20'
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
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
                  className='px-4 py-2 text-lg text-white bg-blue-700 hover:bg-blue-800  rounded-lg '
                  href='/signin'
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 py-2 gap-3 w-4/6 h-dvh right-0 top-0  flex flex-col absolute pt-[72px] bg-primary-lightGray drop-shadow-lg z-10'>
          <Link className='border-y pb-2 pt-4 text-lg' href='/buy'>
            Buy
          </Link>
          <Link className='border-b py-2 text-lg' href='/sell'>
            Sell
          </Link>
          <Link className='border-b py-2 text-lg' href='/rent'>
            Rent
          </Link>
          <Link className='border-b py-2 text-lg' href='/agents'>
            Agents
          </Link>
          <Link
            className='px-4 py-2 w-2/3 text-center bg-primary-navy text-primary-lightGray rounded-xl self-center text-xl mt-4'
            href='/signin'
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
