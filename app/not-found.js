import Image from 'next/image';
import Link from 'next/link';
import notFound from '@/public/not-found.jpeg';

function NotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <div className='md:max-w-6xl w-2/3 xl:w-2/6 bg-blue-200 lg:mx-auto px-4 relative block aspect-video'>
        <Image
          src={notFound}
          alt='not found image'
          fill
          className='rounded-lg max-h-fit'
        />
      </div>

      <Link
        className='px-4 py-3 text-center bg-primary-navy text-primary-lightGray rounded-lg text-lg max-w-fit'
        href='/'
      >
        Go back to Home Quest
      </Link>
    </div>
  );
}

export default NotFound;
