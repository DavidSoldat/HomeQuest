import notFound from '@/public/not-found.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sell',
};

function Sell() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-fit text-center text-lg font-semibold">
          Under Contstruction
        </h1>
      </div>
      <div className="relative block aspect-video w-2/3 bg-blue-200 px-4 md:max-w-6xl lg:mx-auto xl:w-2/6">
        <Image
          src={notFound}
          alt="not found image"
          fill
          className="max-h-fit rounded-lg"
        />
      </div>

      <Link
        className="max-w-fit rounded-lg bg-blue-700 px-4 py-3 text-center text-lg text-white hover:bg-blue-800"
        href="/"
      >
        Go back to Home Quest
      </Link>
    </div>
  );
}

export default Sell;
