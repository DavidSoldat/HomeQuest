import Link from 'next/link';
import logo from '@/public/logo.png';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Home Quest logo" height="35" priority />
    </Link>
  );
}

export default Logo;
