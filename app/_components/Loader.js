import { PropagateLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PropagateLoader color="#1d4ed8" size={30} />
    </div>
  );
}
