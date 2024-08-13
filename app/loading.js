'use client';
import { PropagateLoader } from 'react-spinners';

function loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <PropagateLoader color='#1D3557' size={30} />
    </div>
  );
}

export default loading;
