'use client';
import { useState } from 'react';

export default function SearchInput({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="search"
        id="mapSearch"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search here..."
        className="border p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 px-4 py-2 text-white">
        Search
      </button>
    </form>
  );
}
