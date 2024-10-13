'use client';
import { useState } from 'react';

const ShowMore = ({ text, maxLength }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <p className="text-gray-700">
      {showMore ? (
        <>
          {text}{' '}
          <button
            onClick={toggleShowMore}
            className="cursor-pointer font-semibold text-blue-800 hover:text-blue-600 hover:underline"
          >
            Show Less
          </button>
        </>
      ) : (
        <>
          {text.slice(0, maxLength)}...{' '}
          <button
            onClick={toggleShowMore}
            className="cursor-pointer font-semibold text-blue-800 hover:text-blue-600 hover:underline"
          >
            Show More
          </button>
        </>
      )}
    </p>
  );
};

export default ShowMore;
