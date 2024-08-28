'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LayoutForms({ children }) {
  const pathname = usePathname();
  return (
    <div className='w-full my-20 md:my-24 flex flex-col items-center justify-center'>
      <div className='border border-gray-200 rounded-lg flex flex-col items-start px-9 w-5/6 py-12 boxShadow sm:max-w-md lg:mx-auto '>
        <h1 className='text-primary-navy font-bold text-2xl self-center '>
          Welcome to Home Quest
        </h1>
        <div className='my-4 w-full flex border-b border-gray-200'>
        </div>
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
}