
import  { useState } from 'react';
import logo from '../assets/smart lights_logo.svg';
import backgroundImage from '../assets/Hero_section.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className='h-20 '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className='relative flex justify-between items-center p-5 max-w-7xl mx-auto'>
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>
        <div className='hidden md:flex items-center space-x-4'>
          <ul className='flex space-x-4 text-white'>
            <li className=' text-white p-2 rounded'>Home</li>
            <li className=' text-white p-2 rounded'>Products</li>
            <li className=' text-white p-2 rounded'>Software Service</li>
          </ul>
          <button className='ml-4 bg-blue-600 text-white py-2 px-4 rounded'>Login</button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='absolute top-20 left-0 w-full bg-black text-white z-50'>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li className='bg-black text-blue-400 p-2 rounded'>Home</li>
            <li className='bg-black text-blue-400 p-2 rounded'>Products</li>
            <li className='bg-black text-blue-400 p-2 rounded'>Software Service</li>
            <li className='bg-blue-600 text-white py-2 px-4 rounded'>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
