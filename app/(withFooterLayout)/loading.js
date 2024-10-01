'use client';
import { PropagateLoader } from 'react-spinners';

function loading() {
  return (
    <div className='flex w-full  justify-center items-center h-screen'>
      <PropagateLoader color='#1d4ed8' size={30} />
    </div>
  );
}

export default loading;
