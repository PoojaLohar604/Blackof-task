

import images from '../assets/image.png';
import line from '../assets/Line6.png';
import line9 from '../assets/Line9.png';
import line12 from '../assets/Line12.png';

function Platform() {
  return (
    <div className="container mx-auto py-20 text-center px-4 sm:px-6 md:px-8 lg:px-16">
      <h5 className="text-2xl md:text-3xl lg:text-4xl mb-8">
        The platform assists city managers <br />on multiple fronts
      </h5>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="flex flex-col items-center w-full md:w-44 text-center mx-auto">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Saves on power consumption & related costs</p>
        </div>
        <img src={line} alt="line6" className="hidden md:block mx-auto" />
        <div className="flex flex-col items-center w-full md:w-44 text-center mx-auto">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Lowers downtimes</p>
        </div>
      </div>

      <img src={line9} alt="line9" className="mx-auto mb-8" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="flex flex-col items-center w-full md:w-44 text-center mx-auto">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Saves on power consumption & related costs</p>
        </div>
        <img src={line} alt="line6" className="hidden md:block mx-auto" />
        <div className="flex flex-col items-center w-full md:w-80 text-center mx-auto">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Ensures smart monitoring and <br />control of the street light infrastructure.</p>
        </div>
      </div>

      <img src={line9} alt="line9" className="mx-auto mb-8" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center w-full md:w-96 text-center mx-auto">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
          <img src={line12} alt="line12" className="mx-auto mt-4 hidden md:block" />
        </div>
        <img src={line} alt="line6" className="hidden md:block mx-auto" />
        <div className="flex flex-col items-center w-full md:w-44 text-center mx-auto py-5">
          <img src={images} alt="images" className="w-16 md:w-20 mb-2" />
          <p className="text-lg md:text-xl">Ensures security in the neighborhood</p>
        </div>
      </div>
    </div>
  );
}

export default Platform;
