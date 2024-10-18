import Image from 'next/image';
import mainImage from '@/assets/images/prop1.jpg';
import Link from 'next/link';

export default function PropertyPage({ property }) {
  return (
    <div className="w-full p-4">
      <div className="w-full border-b-2">
        <Link href="/buy">Back to search</Link>
      </div>
      <div className="photo-grid gap-2">
        <Image alt="image" src={mainImage} className="main-image" />
        <Image alt="image" className="second-image" src={mainImage} />
        <Image alt="image" className="third-image" src={mainImage} />
        <Image alt="image" className="fourth-image" src={mainImage} />
        <Image alt="image" className="fifth-image" src={mainImage} />
      </div>
    </div>
  );
}
