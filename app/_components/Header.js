import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-3 py-1">
      <div className="flex items-center justify-between md:mx-auto md:max-w-6xl">
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
