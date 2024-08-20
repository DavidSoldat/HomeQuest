'use client';

import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function HamburgerMenu() {
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
    <>
      <div
        id='hamburger'
        className='absolute  right-5 flex items-end justify-end sm:hidden z-20 '
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 py-2 gap-3 w-4/6 h-dvh right-0 top-0 flex flex-col absolute pt-[72px] bg-gray-50  drop-shadow-lg z-10'>
          <Link
            className='border-y pb-2 pt-4 text-lg'
            onClick={() => setIsOpen(false)}
            href='/buy'
          >
            Buy
          </Link>
          <Link
            className='border-b py-2 text-lg'
            onClick={() => setIsOpen(false)}
            href='/sell'
          >
            Sell
          </Link>
          <Link
            className='border-b py-2 text-lg'
            onClick={() => setIsOpen(false)}
            href='/rent'
          >
            Rent
          </Link>
          <Link
            className='border-b py-2 text-lg'
            onClick={() => setIsOpen(false)}
            href='/agents'
          >
            Agents
          </Link>
          <Link
            className='px-4 py-2 w-2/3 text-center text-white bg-blue-700 hover:bg-blue-800 rounded-xl self-center text-xl mt-4'
            onClick={() => setIsOpen(false)}
            href='/signin'
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
