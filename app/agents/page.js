import Link from 'next/link';

export const metadata = {
  title: 'Agents',
};

function Agents() {
  return (
    <div className='w-full h-screen md:max-w-6xl lg:mx-auto px-4 py-4 flex flex-col items-center  relative gap-5'>
      <div className='text-2xl  font-semibold text-primary-darkGray leading-tight text-center'>
        A great agent makes all the difference
      </div>
      <p className='max-w-4xl text-center'>
        With hundreds of agents from all the top brokerages, a local agent knows
        your market and can guide you through the process from start to finish
      </p>
      <div className='grid grid-cols-2 grid-rows-* gap-4 bg-blue-200 w-full'>
        <div className='flex'>
          <Link href='/' className='bg-red-50'>
            <div>image</div>
            <div>text</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Agents;
