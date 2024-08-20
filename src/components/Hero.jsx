
import backgroundImage from '../assets/Hero_section.png';

function Hero() {
  return (
    <div 
      className='h-[650px] bg-cover bg-center text-center py-20' 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h5 className='text-[24px] text-white mb-2'>Smart Lighting Solution</h5>
      <h1 className="text-[40px] text-gray-600 mb-2">
        Bringing A New Perspective To Street Lights
      </h1>
      <h1 className="text-[40px] text-gray-600 mb-2">
        And The Cities Of Tomorrow
      </h1>
      <button className='bg-blue-600 text-white py-2 px-10 '>
        Login
      </button>
    </div>
  );
}

export default Hero;
