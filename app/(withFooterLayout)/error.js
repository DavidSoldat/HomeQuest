'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex justify-center flex-col items-center gap-6 h-full md:max-w-6xl lg:mx-auto p-5'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>
      <button
        className='px-4 py-3 text-center text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-lg'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
