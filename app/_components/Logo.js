import Link from 'next/link';
import logo from '@/public/logo.png';
import Image from 'next/image';

function Logo() {
  return (
    <Link href='/' className=' lg:px-8'>
      <Image src={logo} alt='Home Quest logo' height='35' />
    </Link>
  );
}

export default Logo;
