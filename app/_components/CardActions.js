'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TfiMore } from 'react-icons/tfi';
import { FiShare } from 'react-icons/fi';

export default function CardActions() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick} className="mr-1 box-border">
      <Popover>
        <PopoverTrigger>
          <TfiMore />
        </PopoverTrigger>
        <PopoverContent className="w-fit bg-white p-3">
          <button className="flex items-center gap-2">
            <FiShare /> Share
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
