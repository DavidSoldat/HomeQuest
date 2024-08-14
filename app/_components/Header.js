import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='border-b border-gray-200 px-3  py-1 '>
      <div className='flex justify-between items-center md:max-w-6xl md:mx-auto '>
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
