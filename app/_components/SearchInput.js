'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

export default function SearchInput({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

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
    <form onSubmit={handleSubmit} className="relative w-full pl-3">
      <input
        // type="search"
        id="mapSearch"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search here..."
        className="w-full rounded-md border border-gray-300 p-2"
      />
      <div className="bg-red absolute right-4 top-1/2 flex -translate-y-1/2 items-center">
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
  );
}
