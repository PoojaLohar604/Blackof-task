
import { useState } from 'react';
import image from '../assets/image_31.png'
import icon from '../assets/icon_png.png'

const ProductPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const slides = [
    {
      title: "Product Title 1",
      description: "Product description 1 goes here. It should provide key details about the product, highlighting its features and benefits.",
      imageUrl: "path-to-your-image-1.jpg"
    },
    {
      title: "Product Title 2",
      description: "Product description 2 goes here. It should provide key details about the product, highlighting its features and benefits.",
      imageUrl: "path-to-your-image-2.jpg"
    },
    // Add more slides as needed
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-light-blue min-h-screen m-auto p-5">
      <header className="text-blue-800 py-7">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Products</h1>
        </div>
      </header>
      <main className="container mx-auto">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl w-[70%]">
          <b>Cutting-edge hardware</b>, offerings helping cities optimize resources and achieve smart development goals.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-7">
          {[
            "Centralized Control & Monitoring System",
            "NB-IoT AMR-Valve VCL-120",
            "Retrofit Street Light Controller VCL-260",
            "NEMA-Mounted VOLC 1160",
            "Retrofit Street Light Controller VOLC 2160",
          ].map((product, index) => (
            <div
              key={index}
              className={`product-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <h3 className="text-base md:text-lg lg:text-xl">{product}</h3>
            </div>
          ))}
        </div>
      </main>
      <div className="slider py-5">
        {slides.map((slide, index) => (
          <div
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
            style={{ display: index === currentIndex ? 'flex' : 'none' }}
          >
            <div className="image-container">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
            <div className="details-container">
              <h2 className="text-xl md:text-2xl lg:text-3xl">{slide.title}</h2>
              <p className="text-sm md:text-base lg:text-lg">{slide.description}</p>
              <div className='learn_more'>
                <li className="text-sm md:text-base lg:text-lg">Learn More</li>
                <img src={icon} alt='icon' className='w-7 h-7'/>
              </div>
            </div>
          </div>
        ))}

        <button className="prev" onClick={handlePrev}>Previous</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ProductPage;
