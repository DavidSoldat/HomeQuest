'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SearchInput({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const path = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="flex w-full items-center gap-3">
      <form
        onSubmit={handleSubmit}
        className="relative w-full items-center pl-3"
      >
        <input
          id="mapSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search here..."
          className="w-full rounded-md border border-gray-300 p-2"
        />
        <div className="bg-red absolute right-2 top-1/2 flex -translate-y-1/2">
          <button
            type="button"
            className={`p-1 hover:bg-gray-100 ${searchValue ? 'block' : 'hidden'}`}
            onClick={clearSearch}
            aria-label="Clear"
          >
            <XIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            type="submit"
            className="p-1 hover:bg-gray-100"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </form>
      <div className="flex h-full items-center gap-3 font-semibold">
        <Link
          href="/buy"
          className={`inline-flex whitespace-nowrap rounded-md border border-[#a7a6ab] px-5 py-2 hover:bg-gray-100 ${path === '/buy' ? 'border-blue-600 bg-blue-50' : 'border-[#a7a6ab]'}`}
        >
          <span>For Sale</span>
        </Link>
        <Link
          href="/rent"
          className={`inline-flex whitespace-nowrap rounded-md border border-[#a7a6ab] px-5 py-2 hover:bg-gray-100 ${path === '/rent' ? 'border-blue-600 bg-blue-50' : 'border-[#a7a6ab]'}`}
        >
          <span>For Rent</span>
        </Link>
      </div>
    </div>
  );
}
