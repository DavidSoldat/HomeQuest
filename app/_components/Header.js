import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='border-b border-gray-200 xl:px-80 lg:px-52 px-3  py-1 '>
      <div className='flex justify-between items-center'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
