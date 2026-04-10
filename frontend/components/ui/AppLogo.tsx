import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function AppLogo() {
    return (
      <Link href="/" className='cursor-pointer'>
        <Image
          src={Logo}
          alt="App Logo"
          priority
          className="rounded-full size-15"
        />
      </Link>
    );
}