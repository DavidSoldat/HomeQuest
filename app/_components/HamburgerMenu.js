'use client';

import avatarPlaceholder from '@/assets/images/avatar_placeholder.png';
import { Sling as Hamburger } from 'hamburger-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Lock, LogOut } from 'lucide-react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const user = session.data?.user;

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
        id="hamburger"
        className="absolute right-5 z-20 flex items-end justify-end sm:hidden"
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute right-0 top-0 z-10 flex h-dvh w-full flex-col gap-3 bg-gray-50 px-2 py-2 pt-[72px] drop-shadow-lg">
          <Link
            className="border-y pb-2 pt-4 text-lg"
            onClick={() => setIsOpen(false)}
            href="/buy"
          >
            Buy
          </Link>
          <Link
            className="border-b py-2 text-lg"
            onClick={() => setIsOpen(false)}
            href="/sell"
          >
            Sell
          </Link>
          <Link
            className="border-b py-2 text-lg"
            onClick={() => setIsOpen(false)}
            href="/rent"
          >
            Rent
          </Link>
          <Link
            className="border-b py-2 text-lg"
            onClick={() => setIsOpen(false)}
            href="/agents"
          >
            Agents
          </Link>
          {user && (
            <Link
              className="flex items-center gap-2 border-b py-2 text-lg"
              href="/settings"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={user.image || avatarPlaceholder}
                alt="User profile picture"
                width={30}
                height={30}
                className="bg-background aspect-square rounded-full object-cover"
              />
              <span>{user.name}</span>
            </Link>
          )}
          {!user && session.status !== 'loading' && (
            <Link
              className="mt-4 w-2/3 self-center rounded-xl bg-blue-700 px-4 py-2 text-center text-xl text-white hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
              href="/signin"
            >
              Sign In
            </Link>
          )}
          <div className="mt-auto flex w-full flex-col">
            {user?.role === 'admin' && (
              <Link
                className="flex items-center gap-2 border-b border-t py-2 text-lg"
                onClick={() => setIsOpen(false)}
                href="/admin"
              >
                <span>
                  <Lock />
                </span>
                Admin
              </Link>
            )}
            {user && (
              <button
                className="flex items-center gap-2 border-b border-t py-2 text-lg"
                onClick={() => {
                  setIsOpen(false);
                  signOut({ callbackUrl: '/' });
                }}
                href="/agents"
              >
                <span>
                  <LogOut />
                </span>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
