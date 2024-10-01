'use client';
import { usePathname } from 'next/navigation';

export default function LayoutForms({ children }) {
  const pathname = usePathname();
  return (
    <div className="my-20 flex w-full flex-col items-center justify-center md:my-24">
      <div className="boxShadow flex w-5/6 flex-col items-start rounded-lg border border-gray-200 px-9 py-12 sm:max-w-md lg:mx-auto">
        <h1 className="text-primary-navy self-center text-2xl font-bold">
          Welcome to Home Quest
        </h1>
        <div className="my-4 flex w-full border-b border-gray-200"></div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
